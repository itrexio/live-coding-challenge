const promisify = (fn) => {
    return (...args) => {
        return new Promise((resolve, reject) => {
            fn(...args, (error, result) => {
                if (error == null) {
                    resolve(result);
                } else {
                    reject(error);
                }
            });
        });
    }
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

