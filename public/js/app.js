const settings = { timestampsInSnapshots: true };
const db = firebase.firestore();
db.settings(settings);

const onSave = () => {
    const name = document.querySelector('#name')
    const email = document.querySelector('#email3')
    const age = document.querySelector('#child-age')
    const tourDate = document.querySelector('#date')
    const tourTime = document.querySelector('#time3')
    const formData = {
        name: name.value,
        email: email.value,
        childAge: age.value,
        tourDate: tourDate.value,
        tourTime: tourTime.value,
        submitTime: Date.now()
    }
    db.collection('tours').add(formData).then(docRef => {
        console.log(`Database write complete.`);
    }).catch(error => {
        console.error("Error adding document: ", error);
    })
  }

const submit = document.querySelector('#scheduleTour')
submit.addEventListener('click', onSave)
