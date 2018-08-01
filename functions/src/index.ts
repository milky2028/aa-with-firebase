import * as functions from 'firebase-functions';
import * as sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY } from './sendgridEnv'

sgMail.setApiKey(SENDGRID_API_KEY);
export const tourFormSubmission = functions.firestore.document('tours/{tourId}').onCreate((snapshot, context) => {
  const submission = snapshot.data();

  const msgToMom = {
    to: 'tylergross28@gmail.com, tgross1@me.com',
    from: 'support@adventureacademyweb.com',
    subject: 'Hey Mom! Someone Submitted a New Tour Form',
    html: `<div style="font-family: sans-serif"><h1 style="font-size: 20px; color: black">Here are the details about the tour:</h1><p style="color: black; font-size: 18px; margin: 3px 10px;">Name: ${submission.name}</p><p style="color: black; font-size: 18px; margin: 3px 10px;">Kid\'s Age: ${submission.childAge}</p><p style="color: black; font-size: 18px; margin: 3px 10px;">Tour Date: ${submission.tourDate}</p><p style="color: black; font-size: 18px; margin: 3px 10px; font-family: sans-serif">Tour Time: ${submission.tourTime}</p><p style="color: black; font-size: 18px;">I love you mom! You\'re the greatest.</p><p style="color: black; font-size: 18px; font-weight: bold">Tyler</p></div>`,
  };

  const msgToParent = {
    to: submission.email,
    from: 'support@adventureacademyweb.com',
    subject: 'Thank You Scheduling a Tour to See Our Center!',
    html: `<body style="margin: 0; font-family: sans-serif"><div style="height: 60px; width: 100%; background-color: #49adea"><table><tr><td><img style="height: 40px; width: 40px; margin: 8px" src="https://adventureacademyweb.com/images/whiteLogo.svg"></td><td><h2 style="margin: 0; color: white; font-weight: 300">Adventure Academy</h2></td></tr></table></div><div><h1 style="font-size: 20px; padding-left: 24px;">Thank you for scheduling a tour to see our center!</h1><p style="padding-left: 24px;">Here are the details of your visit:</p><p style="padding-left: 75px; margin: 5px">Tour Day: ${submission.tourDate}</p><p style="padding-left: 75px; margin: 5px">Tour Time: ${submission.tourTime}</p><p style="padding-left: 36px;">We'll see you soon!</p><p style="padding-left: 36px; font-weight: bold; margin: 5px">Lisa Gross</p><p style="padding-left: 36px; margin: 5px">Owner and Director</p><p style="padding-left: 36px; margin: 5px">Adventure Academy Daycare Center</p><p style="padding-left: 36px; margin: 5px">8383 Craig St #210, Indianapolis, IN 46250</p><a href="https://adventureacademyweb.com/" style="padding-left: 36px; margin: 5px">adventureacademyweb.com</a></div></body>`
  }

  sgMail.send(msgToParent).then(() => {
    console.log('Message to parent worked.');
  }).catch(error => console.error('Message to parent did not work :['));

  return sgMail.send(msgToMom).then(() => {
    console.log('Message to mom worked.');
  }).catch(error => console.error('Message to mom did not work :['));
});
