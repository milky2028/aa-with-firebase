const config = {
  apiKey: 'AIzaSyDkRY5dlk-aBvDYpDkyvLLC8nPDxXt2C60',
  authDomain: 'adventure-academ-1501025774496.firebaseapp.com',
  databaseURL: 'https://adventure-academ-1501025774496.firebaseio.com',
  projectId: 'adventure-academ-1501025774496',
  storageBucket: 'adventure-academ-1501025774496.appspot.com',
  messagingSenderId: '784182344237',
  appId: '1:784182344237:web:bf4e47c2f7738f691516a4',
};

window.firebase.initializeApp(config);
const db = window.firebase.firestore();

function convertDate(date = new Date()) {
  let month = String(date.getMonth() + 1);
  let day = String(date.getDate());
  const year = String(date.getFullYear());

  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }

  return `${month}/${day}/${year}`;
}

function areFieldsMissing(objectToCheck) {
  let missingFields = false;
  for (const value in objectToCheck) {
    if (!objectToCheck[value]) {
      missingFields = true;
    }
  }
  return missingFields;
}

function onSave(formNumber, successOrFailNumber) {
  window.event.preventDefault
    ? window.event.preventDefault()
    : (window.event.returnValue = false);
  const successElement = document.querySelector(
    `#tourSuccess${successOrFailNumber}`
  );
  const errorElement = document.querySelector(
    `#tourError${successOrFailNumber}`
  );
  const fName = document.querySelector(`#name${formNumber}`);
  const email = document.querySelector(`#email${formNumber}`);
  const age = document.querySelector(`#child-age${formNumber}`);
  const tourDate = document.querySelector(`#date${formNumber}`);
  const tourTime = document.querySelector(`#time${formNumber}`);
  const formData = {
    name: fName.value,
    email: email.value,
    childAge: age.value,
    tourDate: tourDate.value,
    tourTime: tourTime.value,
    submitDay: convertDate(),
  };

  if (!areFieldsMissing(formData)) {
    db.collection('tours')
      .add(formData)
      .then(() => {
        errorElement.style.display = 'none';
        successElement.style.display = 'block';
        setTimeout(() => {
          window.location.href = '/thank-you';
        }, 1500);
      })
      .catch((error) => console.error('Error posting document:', error));
  } else {
    errorElement.style.display = 'block';
  }
}

function onContactSubmit() {
  window.event.preventDefault
    ? window.event.preventDefault()
    : (window.event.returnValue = false);
  const successElement = document.querySelector('#contactSuccess');
  const errorElement = document.querySelector('#contactError');
  const fName = document.querySelector('#nameContact');
  const email = document.querySelector('#emailContact');
  const message = document.querySelector('#messageContact');
  const formData = {
    name: fName.value,
    email: email.value,
    message: message.value,
    submitDay: convertDate(),
  };

  if (!areFieldsMissing(formData)) {
    db.collection('contactForms')
      .add(formData)
      .then(() => {
        errorElement.style.display = 'none';
        successElement.style.display = 'block';
        setTimeout(() => {
          window.location.href = '/thank-you-contact';
        }, 1500);
      })
      .catch((error) => console.error('Error posting document:', error));
  } else {
    errorElement.style.display = 'block';
  }
}

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
