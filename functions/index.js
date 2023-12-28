/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
// const {logger} = require("firebase-functions");
// const {onDocumentCreated} = require("firebase-functions/v2/firestore");

// The Firebase Admin SDK to access Firestore.
const {initializeApp} = require("firebase-admin/app");
const {getFirestore} = require('firebase-admin/firestore');
const {Timestamp} = require('firebase-admin/firestore')
const {onSchedule} = require("firebase-functions/v2/scheduler");

initializeApp();

exports.updateWeatherScheduled = onSchedule("every day 00:00", async (event) => {
    const fetchInit = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        cache: 'no-cache',
        referrerPolicy: 'no-referrer'
    };
    const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=43.1178&lon=-88.9573&appid=0d3c85d44caec6a146dac4eb25c14e73`, fetchInit);
    const respJson = await resp.json();
    logger.info(respJson)
    const updateWeatherDoc = await getFirestore().collection("weather").doc("DJRCv5J810W3mctcvoFA").set({
        current: {
            windDegrees: respJson['wind']['deg'],
            windSpeed: respJson['wind']['speed'],
            maximumTemperature: respJson['main']['temp_max'],
            minimumTemperature: respJson['main']['temp_min'],
            temperature: respJson['main']['temp'],
            description: respJson['weather'][0]['description'],
            lastUpdate: Timestamp.fromDate(new Date())
        }
    }, {merge: true})
})

exports.getWeather = onRequest({ cors: true}, async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Referrer-Policy', 'no-referrer');

    if (req.method === 'OPTIONS') {
        // Send response to OPTIONS requests
        res.set('Access-Control-Allow-Methods', ['GET', 'POST']);
        res.set('Access-Control-Allow-Headers', 'Content-Type');
        res.set('Access-Control-Max-Age', '3600');
        res.status(204).send('');
    }

    const weatherDoc = await getFirestore().collection("weather").doc("DJRCv5J810W3mctcvoFA").get().then((doc) => {
        if (doc.exists) {
            return doc.data();
        } else {
            logger.info('no such doc');
        }
    }).catch((err) => {
        logger.error("Error getting document: ", err);
    });

    let today = new Date();
    today.setHours(0,0,0,0)
    logger.info(weatherDoc)
    let lastUpdate = weatherDoc['current']['lastUpdate'].toDate();
    if(lastUpdate < today){
        const fetchInit = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'no-cors',
            cache: 'no-cache',
            referrerPolicy: 'no-referrer'
        };
        const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=43.1178&lon=-88.9573&appid=0d3c85d44caec6a146dac4eb25c14e73`, fetchInit);
        const respJson = await resp.json();
        logger.info(respJson)
        const updateWeatherDoc = await getFirestore().collection("weather").doc("DJRCv5J810W3mctcvoFA").set({
            current: {
                windDegrees: respJson['wind']['deg'],
                windSpeed: respJson['wind']['speed'],
                maximumTemperature: respJson['main']['temp_max'],
                minimumTemperature: respJson['main']['temp_min'],
                temperature: respJson['main']['temp'],
                description: respJson['weather'][0]['description'],
                lastUpdate: Timestamp.fromDate(new Date())
            }
        }, {merge: true})

    }

    logger.info('doc data: ' + weatherDoc, {structuredData: true});
    res.status(200).json(weatherDoc);
});
