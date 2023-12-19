const express = require('express');
const studentRouter = require('../routes/student'); // Import the Student route
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Use the Student route for any requests to /student
app.use('/student', studentRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
