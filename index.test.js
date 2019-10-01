const { squarePromise } = require('./index.js');

test('Resolve', () => {
    return expect(squarePromise(2, 2)).resolves.toBe(4);
});

test('Reject' , () => {
    return expect(squarePromise('x', 'y')).rejects.toMatch('First two arguments should be numbers')
});
