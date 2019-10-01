const promisify = (fn) => {
    // ToDo: Implement a wrapper which will transform callback based function into a promise based one.
    return fn;
};

const squareCb = (x, y, cb) => {
    setTimeout(() => {
        if (typeof x !== 'number' || typeof y !== 'number') {
            return cb(`First two arguments should be numbers. Got ${ x } and ${ y } instead.`);
        }

        cb(null, x * y);
    }, 200);
};

const squarePromise = promisify(squareCb);


module.exports = {
    squarePromise
};

