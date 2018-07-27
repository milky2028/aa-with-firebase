import * as functions from 'firebase-functions';
import * as sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY } from './sendgridEnv'

sgMail.setApiKey(SENDGRID_API_KEY);
export const tourFormSubmission = functions.firestore.document('tours/{tourId}').onCreate((snapshot, context) => {
  const submission = snapshot.data();

  const msg = {
    to: submission.email,
    from: 'support@adventureacademyweb.com',
    subject: 'Hey Mom! Someone Submitted a New Tour Form',
    html: `<div><h1 style="font-size: 20px">Here are the details about the tour:</h1><p style="font-size: 18px; margin: 3px 10px; font-family: Lato">Name: ${submission.name}</p><p style="font-size: 18px; margin: 3px 10px; font-family: Lato">Kid\'s Age: ${submission.childAge}</p><p style="font-size: 18px; margin: 3px 10px; font-family: Lato">Tour Date: ${submission.tourDate}</p><p style="font-size: 18px; margin: 3px 10px; font-family: Lato">Tour Time: ${submission.tourTime}</p><p style="font-size: 18px; font-family: Lato">I love you mom! You\'re the greatest.</p><p style="font-size: 18px; font-family: Lato; font-weight:bold">Tyler</p></div>`,
  };

  return sgMail.send(msg).then(() => {
    console.log('It worked!');
  }).catch(error => {
    console.error('It did not work :[');
  });
});
