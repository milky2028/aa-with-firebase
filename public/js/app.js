const settings = { timestampsInSnapshots: true };
const db = firebase.firestore();
db.settings(settings);
db.collection('tours').get().then(query => {
    query.forEach(doc => {
        console.log(doc.data())
    })
})

const onSave = () => {
    const name = $('name')
    const email = $('email3')
    const age = $('child-age')
    const date = $('date')
    const time = $('time3')
    const formData = {
        name: name.value,
        email: email.value,
        childAge: age.value,
        date: date.value,
        time: time.value
    }
    db.collection('tours').add(formData)
    .then(function(docRef) {
        console.log(`Database write complete.`);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    
  }

// const submit = $('scheduleTour')
// submit.addEventListener('click', onSave)