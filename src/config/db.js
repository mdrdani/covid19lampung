import firebase from 'firebase/app';
import 'firebase/firestore'

  // Initialize Firebase
  export const db = firebase.initializeApp({projectId: 'coronalampung-5b97c'}).firestore()

  // Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
// const { Timestamp, GeoPoint } = firebase.firestore
// export { Timestamp, GeoPoint }

// // if using Firebase JS SDK < 5.8.0
// db.settings({ timestampsInSnapshots: true })

// //   firebase.analytics();