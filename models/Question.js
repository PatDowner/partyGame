const { model, Schema } = require('mongoose')

const Question = new Schema({
  one: {
    type: String,
    required: false
  },
  two: {
    type: String,
    required: false
  },
  three: {
    type: String,
    required: false
  },
  four: {
    type: String,
    required: false
  },
  five: {
    type: String,
    required: false
  },
  six: {
    type: String,
    required: false
  },
  seven: {
    type: String,
    required: false
  },
  eight: {
    type: String,
    required: false
  },
  nine: {
    type: String,
    required: false
  },
  ten: {
    type: String,
    required: false
  },
  eleven: {
    type: String,
    required: false
  },
  twelve: {
    type: String,
    required: false
  },
  thirteen: {
    type: String,
    required: false
  },
  fourteen: {
    type: String,
    required: false
  },
  fifteen: {
    type: String,
    required: false
  },
  sixteen: {
    type: String,
    required: false
  },
  seventeen: {
    type: String,
    required: false
  },
  eightteen: {
    type: String,
    required: false
  },
  nineteen: {
    type: String,
    required: false
  },
  twenty: {
    type: String,
    required: false
  },
  twentyone: {
    type: String,
    required: false
  },
  twentytwo: {
    type: String,
    required: false
  },
  twentythree: {
    type: String,
    required: false
  },
  twentyfour: {
    type: String,
    required: false
  },
  twentyfive: {
    type: String,
    required: false
  },
  twentysix: {
    type: String,
    required: false
  },
  twentyseven: {
    type: String,
    required: false
  },
  twentyeight: {
    type: String,
    required: false
  },
  twentynine: {
    type: String,
    required: false
  },
  thirty: {
    type: String,
    required: false
  },
  thirtyone: {
    type: String,
    required: false
  },
  thirtytwo: {
    type: String,
    required: false
  },
  thirtythree: {
    type: String,
    required: false
  },
  thirtyfour: {
    type: String,
    required: false
  },
  thirtyfive: {
    type: String,
    required: false
  },
  thirtysix: {
    type: String,
    required: false
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
  //   messages: [{
  //       type: Schema.Types.ObjectId,
  //       ref: 'Message'
  //   }]
}, { timestamps: true })

module.exports = model('Question', Question)

//Do we want to have separate models and make relations or try to fit everything into one model?

// systems they play, games, genre, discord, avatar, casual/comp
//bio