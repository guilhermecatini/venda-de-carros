'use strict'

const express = require('express')
const router = express.Router()

const usuarioModel = require('../models/usuarioModel')

function callback(res, err, data) {
	if (err) return res.json(err, 500)
		return res.json(data, 200)
}

router.post('/create', (req, res) => {
	const body = req.body
	usuarioModel.create(body, (err, data) => {
		callback(res, err, data)
	})
})


module.exports = router;
