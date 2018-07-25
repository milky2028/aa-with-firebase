const config = {
    apiKey: "AIzaSyDkRY5dlk-aBvDYpDkyvLLC8nPDxXt2C60",
    authDomain: "adventure-academ-1501025774496.firebaseapp.com",
    databaseURL: "https://adventure-academ-1501025774496.firebaseio.com",
    projectId: "adventure-academ-1501025774496",
    storageBucket: "adventure-academ-1501025774496.appspot.com",
    messagingSenderId: "784182344237"
};
firebase.initializeApp(config);
const settings = { timestampsInSnapshots: true };
const db = firebase.firestore();
db.settings(settings);

const convertDate = (date = new Date) => {
    let month = String(date.getMonth() + 1);
    let day = String(date.getDate());
    const year = String(date.getFullYear());

    if (month.length < 2) { month = '0' + month };
    if (day.length < 2) { day = '0' + day };

    return `${month}/${day}/${year}`
}

const onSave = (formNumber) => {
    const name = document.querySelector(`#name${formNumber}`);
    const email = document.querySelector(`#email${formNumber}`);
    const age = document.querySelector(`#child-age${formNumber}`);
    const tourDate = document.querySelector(`#date${formNumber}`);
    const tourTime = document.querySelector(`#time${formNumber}`);
    const formData = {
        name: name.value,
        email: email.value,
        childAge: age.value,
        tourDate: tourDate.value,
        tourTime: tourTime.value,
        submitTime: convertDate()
    };
    
    db.collection('tours').add(formData).then(docRef => {
        console.log('Database write complete:', docRef.id);
    }).catch(error => {
        console.error('Error adding document: ', error);
    })
}