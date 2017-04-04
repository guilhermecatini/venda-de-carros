'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _schema = {
  nome: { type: String, required: true },
  sobrenome: { type: String, required: true },
  email: { type: String, required: true, index: { unique: true } },
  telefone: { type: String, required: true, index: { unique: true } },
  cep: { type: String },
  logradouro: { type: String },
  numero: { type: String },
  bairro: { type: String },
  cidade: { type: String },
  uf: { type: String },
  usuario: { type: String, required: true },
  senha: { type: String, required: true },
  ativo: { type: Boolean, required: true },
  bloqueado: { type: Boolean, required: true },
  data_cadastro: { type: Date, required: true, default: Date.now }
}

const usuarioSchema = new Schema(_schema, { versionKey: false })
const usuarioModel = mongoose.model('usuario', usuarioSchema);

module.exports = usuarioModel