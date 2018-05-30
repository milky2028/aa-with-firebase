const db = firebase.firestore();
console.log(db)

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

const submit = $('scheduleTour')
submit.addEventListener('click', onSave)