
const fs = require('fs').promises;
const express = require('express');
const router = express.Router();

// API endpoint to get student details
router.get('/getStudentDetails', async (req, res) => {
    const studentDetails = req.query;

    try {
        // Save the student details to a file
        await fs.writeFile('studentInfo.json', JSON.stringify(studentDetails, null, 4));

        // Send a response indicating success
        res.send({ message: 'Student details saved successfully' });
    } catch (error) {
        // Handle any errors during file write
        res.status(500).send({ message: 'Error saving student details', error: error.message });
    }
});

module.exports = router;
