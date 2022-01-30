// import a set of tools to talk to firebase and Firestore
const {
    initializeApp,
    applicationDefault,
    cert,
  } = require("firebase-admin/app");
  const {
    getFirestore,
    Timestamp,
    FieldValue,
  } = require("firebase-admin/firestore");
  
  // import our credentials
  const credentials = require("./credentials.json");
  
  //create firebase services
  initializeApp({
    credential: cert(credentials),
  });
  
  // connect to Firestore
  const db = getFirestore();

  const storeProdcts = db.collection('products')
  const storeCustomers = db.collection('customers')
  const storeOrders = db.collection('orders')

//   storeProducts.doc()
//   .set({
//     productId: "1",
//     category: "Shirt",
//     tag: "Mens",
//     name: "Polo",
//     brand: "Levi",
//     size: "Large",
//     unitPrice: "40",
//     description: "Black men's polo, keeps you cool and dry for all-day comfort.",
//     inventory: "25"
//   })
//  .then(()=> {
//      console.log('Added Products')
//  }).catch(console.error);

//   storeProducts.doc()
//   .set({
//     "productId": "2",
//     "category": "Shirt",
//     "tag": "Womens",
//     "name": "Polo",
//     "brand": "Levi",
//     "size": "Small",
//     "unitPrice": "40",
//     "description": "Black women's polo, keeps you cool and dry for all-day comfort.",
//     "inventory": "30"     
//   })
//  .then(()=> {
//      console.log('Added Products')
//  }).catch(console.error);
 
 
//  storeProducts.doc()
//   .set({
//     "productId": "3",
//     "category": "Shirt",
//     "tag": "Childrens",
//     "name": "Polo",
//     "brand": "Levi",
//     "size": "Medium",
//     "unitPrice": "29",
//     "description": "Black children's polo, keeps you cool and dry for all-day comfort.",
//     "inventory": "10"
//   })
//  .then(()=> {
//      console.log('Added Products')
//  }).catch(console.error);


//  storeOrders.doc("201")
//   .set({
//     "trackingNumber": "653456",
//     "orderDate": "Februart 5th, 2022",
//     "deliveryDate": "February 10th, 2022",
//     "totalAmount": "29",
//     "paymentType": "Credit Card",
//     "productsArray": [{"price": 29,"productId": 3, "qty": 1, "subtotal": 29}],
//     "customerId": "101"
//   })
//  .then(()=> {
//      console.log('Added Order')
//  }).catch(console.error);

 // 3b) READ A DOC  
storeOrders
  .doc("200")
  .get()
  .then((doc) => {
    console.log(doc.id, "-->", doc.data());
  })
  .catch(console.error);


// 3c) READ A COLLECTION
storeCustomers.get()
 .then(snapshot => {
     snapshot.forEach(doc => {
         console.log(doc.data())
     });
 })
 .catch(console.error);

// 3d) UPDATE A COLLECTION AND ADD A FIELD
storeProdcts.doc('2').update({size: 'XL', color: 'True Black'})
// added color field