const functions = require('firebase-functions');

const express = require('express');
const admin = require('firebase-admin');
admin.initializeApp();

exports.readUser = functions.https.onRequest(async (req, res) => {

    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "POST");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Max-Age", "3600");
    // Send response to OPTIONS requests and terminate the function execution
    if (req.method == 'OPTIONS') {
        res.status(204).send('Not Supported yet');
    }

    const snapshot = await admin.firestore().collection('users').get()
    const documents = [];
    snapshot.forEach(doc => {
        const document = { docID: doc.id(), doc: doc.data() };
        documents.push(document);
    })
    //let allUsers = snapshot.docs.map(doc => doc.data())

    // Send back a message that we've succesfully written the message
    res.status(200).send(documents);


});