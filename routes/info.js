const mongoose=require('mongoose')
const data=require('../model/schema')
const express=require('express')
const router =express.Router()

router.route('/data').get((req,res)=>{
    data.find().then(foundBook=>res.json(foundBook))
})

    


module.exports=router

