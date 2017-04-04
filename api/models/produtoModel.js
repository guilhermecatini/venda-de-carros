'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _schema = {
  nome: {
    type: String,
    required: true
  },
  ano_fabricacao: {
    type: Number,
    required: true
  },
  ano_modelo: {
    type: Number,
    required: true
  },
  placa: {
    type: String,
    required: true
  },
  kilometragem: {
    type: Number,
    required: true
  },
  tipo_combustivel: {
    type: String,
    required: true
  },
  observacoes: {
    type: String,
    required: true
  },
  data_cadastro: {
    type: Date,
    required: true,
    default: Date.now
  },
  fotos: [{
    imgUrl: {
      type: String
    }
  }]
}

const produtoSchema = new Schema(_schema, { versionKey: false })
const produtoModel = mongoose.model('produto', produtoSchema);

module.exports = produtoModel