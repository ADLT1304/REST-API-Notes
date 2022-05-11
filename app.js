//open terminal
//type npm init -y
//type npm install express
//create a variable called express and require 'express'
const express = require('express');

//create a variable called app and set it equal to express()
const app = express();

//create a variable called port and set it equal to 3000
const port = 3000;

const notes = {};
let uniqueID = 1;

app.use(express.json());
//routes
app.post('/api/note', (req, res) => {
    console.log("req body " + JSON.stringify(req.body))
    notes[uniqueID] = req.body.noteContents
    res.status(201).send("" + uniqueID++);
})

app.get('/api/note/:uid', (req, res) => {
       
    res.send(notes[req.params.uid])

})

app.put('/api/note/:uid', (req, res) => {
    notes[req.params.uid] = req.body.noteContents
    res.send(notes[req.params.uid])
})

app.delete('/api/note/:uid', (req, res) => {
    const removedNote = notes[req.params.uid]
    delete notes[req.params.uid]
    res.send(removedNote)
})

app.get('/api/notes', (req, res) => {
    res.json(Object.keys(notes))
})

app.get('/home.html', (req, res) => {
    res.sendFile(__dirname + '/home.html')
})

app.get('/home.js', (req, res) => {
    res.sendFile(__dirname + '/home.js')
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
//Set up a post route for '/api/note' and use res.send to send a string
//Set up a get route for '/api/note/:uid' and use res.send to send a string
//Set up a put route for 'api/note/:uid' and use res.send to send a string
//Set up a delete route for 'api/note/:uid' and use res.send to send a string
//Set up a get route for '/api/notes' and use res.send to send a string
//make sure that your app is listening on the port
//console.log `app listening on ${port}
//run the app from the terminal (node app.js)
