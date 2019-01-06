var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from ='Admin';
        var latitude = '1';
        var longitude = '1';
        var res = generateLocationMessage(from, latitude, longitude);
        var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        expect(res).toInclude({from,url});
        expect(res.createdAt).toBeA('number');
    });
});