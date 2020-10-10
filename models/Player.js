const { model, Schema } = require('mongoose')

const Player = new Schema({
  ariel: {
    type: String,
    required: false
  },
  yoda: {
    type: String,
    required: false
  },
  tiana: {
    type: String,
    required: false
  },
  belle: {
    type: String,
    required: false
  },
  mickey: {
    type: String,
    required: false
  },
  snow: {
    type: String,
    required: false
  },
  cinderella: {
    type: String,
    required: false
  },
  marian: {
    type: String,
    required: false
  },
  figaro: {
    type: String,
    required: false
  },
  carpet: {
    type: String,
    required: false
  },
  poppins: {
    type: String,
    required: false
  },
  elsa: {
    type: String,
    required: false
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true })

module.exports = model('Player', Player)

//Do we want to have separate models and make relations or try to fit everything into one model?

// systems they play, games, genre, discord, avatar, casual/comp
//bio