import Mailgun from 'mailgun.js'
import FormData from 'form-data'
import { onDocumentCreated } from 'firebase-functions/firestore';

const ADVENTURE_RECEPIENTS = [
  'tylergross28@gmail.com',
  'lisa.gross@adventureacademyweb.com',
];

const DOMAIN = 'emails.adventureacademyweb.com'

export const tourFormSubmissionV5 = onDocumentCreated(
  { document: 'tours/{tourId}', secrets: ['MAILGUN_API_KEY'] },
  async (event) => {
    console.log('This is not current working')
    return
    // try {
    //   const mailgun = new Mailgun(FormData)
    //   const client = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY })
    //   const submission = event.data.data();

    //   const messageToMom = client.messages.create(DOMAIN, {
    //     to: ADVENTURE_RECEPIENTS,
    //     from: 'support@adventureacademyweb.com',
    //     subject: 'Hey Mom! Someone Submitted a New Tour Form',
    //     html: `<div style="font-family: sans-serif">
    //         <h1 style="font-size: 20px; color: black">Here are the details about the tour:</h1>
    //         <p style="color: black; font-size: 18px; margin: 3px 10px;">Name: ${submission.name}</p>
    //         <p style="color: black; font-size: 18px; margin: 3px 10px;">Email: ${submission.email}</p>
    //         <p style="color: black; font-size: 18px; margin: 3px 10px;">Kid's Age: ${submission.childAge}</p>
    //         <p style="color: black; font-size: 18px; margin: 3px 10px;">Tour Date: ${submission.tourDate}</p>
    //         <p style="color: black; font-size: 18px; margin: 3px 10px; font-family: sans-serif">Tour Time: ${submission.tourTime}</p>
    //         <p style="color: black; font-size: 18px;">I love you mom! You're the greatest.</p>
    //         <p style="color: black; font-size: 18px; font-weight: bold">From Tylerbot</p>
    //       </div>`,
    //   })

    //   const messageToParent = client.messages.create(DOMAIN, {
    //     to: submission.email,
    //     from: 'support@adventureacademyweb.com',
    //     subject: 'Thank You Scheduling a Tour to See Our Center!',
    //     html: `<body style="margin: 0; font-family: sans-serif">
    // <div style="height: 60px; width: 100%; background-color: #49adea">
    // <table>
    //   <tr><td><img style="height: 40px; width: 35px; margin: 8px" src="https://adventureacademyweb.com/images/white-logo.png"></td>
    //     <td><h2 style="margin: 0; color: white; font-weight: 300">Adventure Academy</h2></td>
    //       </tr></table></div>
    //     <div>
    //       <h1 style="font-size: 20px; padding-left: 24px;">Thank you for scheduling a tour to see our center!</h1>
    //       <p style="padding-left: 24px;">Here are the details of your visit:</p>
    //       <p style="padding-left: 75px; margin: 5px">Tour Day: ${submission.tourDate}</p>
    //       <p style="padding-left: 75px; margin: 5px">Tour Time: ${submission.tourTime}</p>
    //       <p style="padding-left: 36px;">We'll see you soon!</p>
    //       <p style="padding-left: 36px; font-weight: bold; margin: 5px">Lisa Gross</p>
    //       <p style="padding-left: 36px; margin: 5px">Owner and Director</p>
    //       <p style="padding-left: 36px; margin: 5px">Adventure Academy Daycare Center</p>
    //       <p style="padding-left: 36px; margin: 5px">8383 Craig St #210, Indianapolis, IN 46250</p>
    //       <a href="https://adventureacademyweb.com/" style="padding-left: 36px; margin: 5px">adventureacademyweb.com</a>
    // </div>
    // </body>`,
    //   });

    //   await Promise.all([messageToMom, messageToParent])
    // } catch (error) {
    //   console.error('An error occurred sending emails: ', error)
    // }
  },
);

export const contactFormSubmissionV5 = onDocumentCreated(
  { document: 'contactForms/{formId}', secrets: ['SENDGRID_API_KEY'] },
  async (snapshot) => {
    console.log('This is not current working')
    return
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // const submission = snapshot.data.data();

    // const msgToMom = {
    //   to: ADVENTURE_RECEPIENTS,
    //   from: 'support@adventureacademyweb.com',
    //   subject: 'Someone Submitted a New Contact Form On Your Website',
    //   html: `<div style="font-family: sans-serif">
    //   <h2 style="color: black">Hey ma!</h2>
    //   <p style="color: black">Someone contacted you via the contact forms on your website. Here's who they were and what they had to say:</p>
    //   <p style="margin: 5px">Name: ${submission.name}</p>
    //   <p style="margin: 5px">Email: ${submission.email}</p>
    //   <p style="margin: 5px">Day Submitted: ${submission.submitDay}</p>
    //   <p style="margin: 5px">Message: ${submission.message}</p>
    //   <p></p>
    //   <p style="color: black; margin: 5px">Love you mom! I hope you're having a great day.</p>
    //   <p style="color: black; margin: 5px">From Tylerbot</p>
    // </div>`,
    // };

    // const msgToParent = {
    //   to: submission.email,
    //   from: 'support@adventureacademyweb.com',
    //   subject: 'Thank You for Contacting Adventure Academy',
    //   html: `
    // <body style="margin: 0; font-family: sans-serif">
    // <div style="height: 60px; width: 100%; background-color: #49adea">
    //   <table>
    //     <tr>
    //       <td><img style="height: 40px; width: 35px; margin: 8px" src="https://adventureacademyweb.com/images/white-logo.png"></td>
    //       <td><h2 style="margin: 0; color: white; font-weight: 300">Adventure Academy</h2></td>
    //       </tr>
    //       </table>
    //   </div>
    // <div>
    //   <h1 style="font-size: 20px; padding-left: 24px;">Thank you for contacting Adventure Academy Daycare Center! We'll be in touch with you soon.</h1>
    //   <p style="padding-left: 36px; font-weight: bold; margin: 5px">Lisa Gross</p>
    //   <p style="padding-left: 36px; margin: 5px">Owner and Director</p>
    //   <p style="padding-left: 36px; margin: 5px">Adventure Academy Daycare Center</p>
    //   <p style="padding-left: 36px; margin: 5px">8383 Craig St #210, Indianapolis, IN 46250</p>
    //   <a href="https://adventureacademyweb.com/" style="padding-left: 36px; margin: 5px">adventureacademyweb.com</a>
    //   </div>
    // </body>
    // `,
    // };

    // await sgMail
    //   .send(msgToParent)
    //   .catch((error) =>
    //     console.error('Message to parent did not work :[', error),
    //   );
    // console.log('Message to parent worked.');

    // try {
    //   await sgMail.send(msgToMom);
    //   console.log('Message to mom worked.');
    // } catch (e) {
    //   console.error('Message to mom did not work :[', e);
    //   return;
    // }
  },
);
