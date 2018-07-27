import * as functions from 'firebase-functions';
import * as sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY } from './sendgridEnv'

sgMail.setApiKey(SENDGRID_API_KEY);
const msg = {
  to: 'tylergross28@gmail.com',
  from: 'support@adventureacademyweb.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

export const mailTest = functions.https.onRequest((request, response) => {
  sgMail.send(msg).then(() => {
    console.log('It worked!');
  }).catch(error => {
    console.error('It did not work :[');
  });
  response.send('This is me sending a response.');
});

export const formSubmission = functions.firestore.document('tours').onCreate((snapshot, context) => {
  const submission = snapshot.data();
  console.log(submission);

  // const msg = {
  //   to: 'tylergross28@gmail.com',
  //   from: 'support@adventureacademyweb.com',
  //   subject: 'Sending with SendGrid is Fun',
  //   text: 'and easy to do anywhere, even with Node.js',
  //   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  // };

  // return sgMail.send(msg).then(() => {
  //   console.log('It worked!');
  // }).catch(error => {
  //   console.error('It did not work :[');
  // });
});
