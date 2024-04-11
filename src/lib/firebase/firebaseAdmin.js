const firebaseAdmin = require('firebase-admin');

// Ruta al archivo JSON de credenciales de servicio
const serviceAccount = require('./firebase.config');
const { data } = require('autoprefixer');

// Inicializa Firebase Admin SDK con las credenciales de servicio
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: "https://user-eduk2.firebaseio.com"
});

module.exports = firebaseAdmin;