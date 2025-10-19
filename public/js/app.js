const today = new Date();
const dates = [];
const date0 = document.getElementById('date0');
const date1 = document.getElementById('date1');

while (dates.length < 20) {
  const tomorrow = new Date(today.setDate(today.getDate() + 1));
  if (tomorrow.getDay() !== 6 && tomorrow.getDay() !== 0) {
    dates.push(tomorrow);
  }
}

const dateOptions = {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
};

for (const day of dates) {
  const option = document.createElement('option');
  const formattedDate = day.toLocaleDateString(navigator.language, dateOptions);
  option.value = formattedDate;
  option.innerText = formattedDate;
  date0.appendChild(option);
  if (date1) {
    date1.appendChild(option.cloneNode(true));
  }
}

const CONFIG = {
  apiKey: 'AIzaSyDkRY5dlk-aBvDYpDkyvLLC8nPDxXt2C60',
  authDomain: 'adventure-academ-1501025774496.firebaseapp.com',
  databaseURL: 'https://adventure-academ-1501025774496.firebaseio.com',
  projectId: 'adventure-academ-1501025774496',
  storageBucket: 'adventure-academ-1501025774496.appspot.com',
  messagingSenderId: '784182344237',
  appId: '1:784182344237:web:bf4e47c2f7738f691516a4',
};

let firestore;
let db;
async function initializeFirebase() {
  if (!firestore) {
    const [{ initializeApp }, module] = await Promise.all([
      import('https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js'),
      import(
        'https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore-lite.js'
      ),
    ]);

    const app = initializeApp(CONFIG);
    firestore = module;
    db = firestore.getFirestore(app);
  }
}

/**
 * Value system is determined based on the following hierachy of most needed, not based on actual class value.
 */
function getValue(childAge) {
  switch (childAge) {
    case 'Two':
      return 7;
    case 'Toddlers':
      return 6;
    case 'Four':
      return 5;
    case 'Five':
      return 4;
    case 'Three':
      return 3;
    case 'Infant':
      return 2;
    default:
      return 1;
  }
}

async function onSubmit(event) {
  event.preventDefault();

  await initializeFirebase();
  const formData = new FormData(event.target);
  if (formData.get('important-data')) {
    console.error('Bot likely.');
    return;
  }

  if (event.target.id === 'contact-form') {
    await onContact(formData);
  } else {
    await onTour(formData);
  }
}

const tourSuccess = document.querySelector('#tourSuccess');
const tourError = document.querySelector('#tourError');

async function onTour(formData) {
  tourSuccess.style.display = 'none';
  tourError.style.display = 'none';

  const childAge = formData.get('Age-of-Child');
  try {
    const tours = firestore.collection(db, 'tours');
    const submission = {
      name: formData.get('name'),
      email: formData.get('Email'),
      childAge,
      tourDate: formData.get('date'),
      tourTime: formData.get('Time'),
      submitTimestamp: firestore.serverTimestamp(),
    };

    await firestore.addDoc(tours, submission);
    tourSuccess.style.display = 'block';

    const value = getValue(childAge);
    window.dataLayer.push({
      event: 'generate_lead',
      currency: 'USD',
      value,
    });

    setTimeout(() => {
      window.location.href = '/thank-you';
    }, 1500);
  } catch (error) {
    console.error('onTour error', error);
    tourError.style.display = 'block';
  }
}

const contactSuccess = document.querySelector('#contactSuccess');
const contactError = document.querySelector('#contactError');

async function onContact(formData) {
  contactSuccess.style.display = 'none';
  contactError.style.display = 'none';

  try {
    const contactForms = firestore.collection(db, 'contactForms');
    const submission = {
      name: formData.get('Name'),
      email: formData.get('Email-address'),
      message: formData.get('message'),
      submitTimestamp: firestore.serverTimestamp(),
    };

    await firestore.addDoc(contactForms, submission);
    contactSuccess.style.display = 'block';

    window.dataLayer.push({
      event: 'working_lead',
      currency: 'USD',
      value: 1,
    });

    setTimeout(() => {
      window.location.href = '/thank-you-contact';
    }, 1500);
  } catch (error) {
    console.error('onContact error', error);
    contactError.style.display = 'block';
  }
}

const forms = document.querySelectorAll('form');
for (const form of forms) {
  form.addEventListener('submit', onSubmit);
}
