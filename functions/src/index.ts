import * as functions from 'firebase-functions';
import * as sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY } from '../sendgridEnv'

// sgMail.setApiKey(SENDGRID_API_KEY);

const msg = {
    to: 'tylergross28@gmail.com',
    from: 'support@adventureacademyweb.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

export const sendMail = functions.https.onRequest((request, response) => {
  response.send(msg);
  // sgMail.send(msg).then(() => {
  //   response.send('It worked!');
  // }).catch(error => {
  //     console.error('It did not work :[');
  // });
});
