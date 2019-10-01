const { squarePromise } = require('./index.js');

test('Resolve', () => {
    return expect(squarePromise(2, 2)).resolves.toBe(4);
});

test('Rejection' , () => {
    return expect(squarePromise()).rejects.toMatch('Unexpected Error');
});

