const express = require('express')
const router = express.Router()

/* Home route */
router.get('/', (req, res, next) => {
    res.send({'message': 'nothing here :)'})
})
  
module.exports = router