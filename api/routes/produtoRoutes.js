'use strict'

const express = require('express')
const router = express.Router()

const produtoModel = require('../models/produtoModel')

function callback(res, err, data) {
	if (err) return res.json(err, 500)
		return res.json(data, 200)
}

router.get('/find', (req, res) => {
	const query = { }
	produtoModel.find(query, (err, data) => {
		callback(res, err, data)
	})
})

router.get('/find/:id', (req, res) => {
	const query = { _id: req.params.id }
	produtoModel.findOne(query, (err, data) => {
		callback(res, err, data)
	})
})

router.post('/create', (req, res) => {
	const body = req.body
	produtoModel.create(body, (err, data) => {
		callback(res, err, data)
	})
})


module.exports = router;
