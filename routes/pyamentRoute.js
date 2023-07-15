const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        
    } catch (error) {
        res.status().json({
            message: "Payment server error",
            error: error.message
        });
    }
});

module.exports = router;