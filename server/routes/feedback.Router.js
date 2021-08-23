const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => {
    console.log('GET api/feedback');
    pool.query('SELECT * FROM "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('GET error /api/feedback', error)
        res.sendStatus(500);

    });

})

router.post('/', (req, res) => {
    const newItem = req.body;
    const sqlText = `INSERT INTO feedback (feeling, understanding, support, comments)
        VALUES ($1, $2, $3, $4)`;
    pool.query(sqlText, [newItem.feelings, newItem.understanding, newItem.support, newItem.comments])
        .then((result) => {
            console.log('Added feedback to the DB', newItem);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);

        })
})

module.exports = router;
