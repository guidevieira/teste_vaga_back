const express = require('express')
const db = require ('../db')
const app = express()


const router = express.Router()


router.get('/getCompany', async(req, res, next) => {
    try{
        let results = await db.getCompany()
        res.json({ok: results})
    }catch(e){
        console.log(e)
        res.sendStatus(500)
    }
})

router.post('/getCompany', async(req, res, next) => {
    try{
        let results = await db.getCompanyParams(req.body)
        res.json({results})
    }catch(e){
        console.log(e)
        res.sendStatus(500)
    }
})

router.post('/getPost', async(req, res, next) => {
    try{
        let results = await db.getPost(req.body)
        res.json({results})
    }catch(e){
        console.log(e)
        res.sendStatus(500)
    }
})

router.post('/getPostsParam', async(req, res, next) => {
    try{
        let results = await db.getPostsParam(req.body)
        res.json({results})
    }catch(e){
        console.log(e)
        res.sendStatus(500)
    }
})

module.exports = router