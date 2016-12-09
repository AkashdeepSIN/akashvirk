var chatbot = require('../src/chatbot.js')
var chai = require('chai')
var expect = chai.expect

it('should return a string', function () {
    var result = chatbot()

    expect(result).to.be.a('string')
})

it('should return Hello. when message is undefined', function () {
    var result = chatbot()

    expect(result).to.equal('Hello.')
})

it('should return "Sorry, I don\'t understand." when message is not understood', function () {
    var result = chatbot('you dont understand this')

    expect(result).to.equal('Sorry, I don\'t understand.')
})
it('should return "good" when message is how are you', function () {
    var result = chatbot('how are you')

    expect(result).to.equal('good')
})
it('should return "your welcome" when message is thanks', function () {
    var result = chatbot('thanks')

    expect(result).to.equal('your welcome')
})
