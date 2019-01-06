var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'slash';
        var text ='hey';
        var res = generateMessage(from,text);
        expect(res.from).toBe(from);
        expect(res.text).toBe(text);
        expect(res.createdAT).toBeA('number');
    });
});