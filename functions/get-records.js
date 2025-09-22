const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('./key.json')

const app = initializeApp({ credential: cert(serviceAccount) })
const db = getFirestore(app)

function sortByDate(a, b) {
  return a.submitDay - b.submitDay
}

const JUNE_24 = new Date('06/24/2025')
const formatter = new Intl.DateTimeFormat('en-us').format

// const tours = db.collection('tours')
// tours.get().then(snapshot => {
//   const docs = []
//   snapshot.forEach(doc => {
//     const data = doc.data()
//     if (data.submitDay && data.name && data.email && data.email !== 'tylergross28@gmail.com') {
//       const date = new Date(data.submitDay)
//       if (date > JUNE_24) {
//         docs.push({ ...data, submitDay: date })
//       }
//     }
//   })
//   let csv = 'Name,Email,Child Age,Day Submitted\n'
//   docs.sort(sortByDate).forEach((doc) => csv += `${doc.name},${doc.email},${doc.childAge},${formatter(doc.submitDay)}\n`)
//   console.log(csv)
// })

const contacts = db.collection('contactForms')
contacts.get().then((snapshot) => {
  const docs = []
  snapshot.forEach(doc => {
    const data = doc.data()
    if (data.submitDay && data.name && data.email && data.email !== 'tylergross28@gmail.com' && data.message) {
      const date = new Date(data.submitDay)
      if (date > JUNE_24) {
        docs.push({ ...data, submitDay: date })
      }
    }
  })

  let csv = 'Name,Email,Date Submitted,Message\n'
  docs.sort(sortByDate).forEach(doc => csv += `${doc.name},${doc.email},${formatter(doc.submitDay)},"${doc.message}"\n`)
  console.log(csv)
})
