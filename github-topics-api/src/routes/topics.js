const express = require('express')
const router = express.Router()
const axios = require('axios')

/* GET topics filter by criteria */
router.get('/', (req, res, next) => {

    let search = req.query.search || ''
    let page = req.query.page || 1

    axios
        .get(`https://api.github.com/search/topics?q=${search}+is:latest&page=${page}`, {
            headers: {
                'Accept': 'application/vnd.github.mercy-preview+json'
            }
        })
        .then(response => {
            // response data
            let links = response.headers.link
            let items = response.data.items.map((item, index, array) => {
                return {
                    'name': item.name,
                    'display_name': item.display_name,
                    'short_description': item.short_description,
                    'description': item.description,
                    'created_by': item.created_by,
                    'updated_at': item.updated_at
                }
            });
            res.send({'items': items, 'links': links})
        })
        .catch(error => {
            console.log('An error ocurred: ', error)
        })
})
  
module.exports = router