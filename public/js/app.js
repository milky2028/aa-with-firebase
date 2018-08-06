const config = {
  apiKey: 'AIzaSyDkRY5dlk-aBvDYpDkyvLLC8nPDxXt2C60',
  authDomain: 'adventure-academ-1501025774496.firebaseapp.com',
  databaseURL: 'https://adventure-academ-1501025774496.firebaseio.com',
  projectId: 'adventure-academ-1501025774496',
  storageBucket: 'adventure-academ-1501025774496.appspot.com',
  messagingSenderId: '784182344237'
}

firebase.initializeApp(config)
const settings = { timestampsInSnapshots: true }
const db = firebase.firestore()
db.settings(settings)

const convertDate = (date = new Date()) => {
  let month = String(date.getMonth() + 1)
  let day = String(date.getDate())
  const year = String(date.getFullYear())

  if (month.length < 2) { month = '0' + month };
  if (day.length < 2) { day = '0' + day };

  return `${month}/${day}/${year}`
}

const areFieldsMissing = (objectToCheck) => {
  let missingFields = false
  for (const value in objectToCheck) {
    if (!objectToCheck[value]) {
      missingFields = true
    }
  }
  return missingFields
}

const onSave = (formNumber, successOrFailNumber) => {
  event.preventDefault ? event.preventDefault() : event.returnValue = false
  const successElement = document.querySelector(`#tourSuccess${successOrFailNumber}`)
  const errorElement = document.querySelector(`#tourError${successOrFailNumber}`)
  const name = document.querySelector(`#name${formNumber}`)
  const email = document.querySelector(`#email${formNumber}`)
  const age = document.querySelector(`#child-age${formNumber}`)
  const tourDate = document.querySelector(`#date${formNumber}`)
  const tourTime = document.querySelector(`#time${formNumber}`)
  const formData = {
    name: name.value,
    email: email.value,
    childAge: age.value,
    tourDate: tourDate.value,
    tourTime: tourTime.value,
    submitDay: convertDate()
  }

  if (!areFieldsMissing(formData)) {
    db.collection('tours').add(formData).then(docRef => {
      errorElement.style.display = 'none'
      successElement.style.display = 'block'
      setTimeout(() => {
        window.location.href = '/thank-you'
      }, 1500)
    }).catch(error => console.error('Error posting document:', error))
  } else {
    errorElement.style.display = 'block'
  }
}

const onContactSubmit = () => {
  event.preventDefault ? event.preventDefault() : event.returnValue = false
  const successElement = document.querySelector('#contactSuccess')
  const errorElement = document.querySelector('#contactError')
  const name = document.querySelector('#nameContact')
  const email = document.querySelector('#emailContact')
  const message = document.querySelector('#messageContact')
  const formData = {
    name: name.value,
    email: email.value,
    message: message.value,
    submitDay: convertDate()
  }

  if (!areFieldsMissing(formData)) {
    db.collection('contactForms').add(formData).then(docRef => {
      errorElement.style.display = 'none'
      successElement.style.display = 'block'
      setTimeout(() => {
        window.location.href = '/thank-you-contact'
      }, 1500)
    }).catch(error => console.error('Error posting document:', error))
  } else {
    errorElement.style.display = 'block'
  }
}
