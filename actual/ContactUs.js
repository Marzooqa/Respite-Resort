const express = require('express');
const app = express();
const port = 3000; // Set your desired port
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017';

// Database name and collection name
const dbName = 'Resort';
const collectionName = 'book';

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files (like CSS and JS)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/actual/ContctUs.html');
});

app.post('/submit', (req, res) => {
    const formData = {
        full_name: req.body.full_name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        address: req.body.address,
    };

    // Connect to MongoDB
    MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
        if (err) {
            console.error('Error connecting to MongoDB:', err);
            return res.status(500).send('Error connecting to the database');
        }

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Insert form data into MongoDB
        collection.insertOne(formData, (err, result) => {
            if (err) {
                console.error('Error inserting data into MongoDB:', err);
                return res.status(500).send('Error inserting data into the database');
            }
            console.log('Data inserted successfully into MongoDB');
            client.close();
            res.redirect('/success.html'); // Redirect to a success page
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
