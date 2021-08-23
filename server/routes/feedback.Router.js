const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST the feedback to the database
router.post('/', (req, res) => {
    console.log(req.body);
    const feelings = feelings;
    const understanding = understanding;
    const support = support;
    const comments = comments;
    const sqlText = (`INSERT INTO "prime_feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4)
        RETURNING id;`, [feeling, understanding, support, comments]);

    pool.query(sqlText)
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query error`);
            res.sendStatus(500);
        });
});

module.exports = router;
