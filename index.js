const squareCb = (x, y, cb) => {
    setTimeout(function() {
        if(typeof x !== 'number' || typeof y !== 'number') {
            return cb('Unexpected Error')
        }
        return cb(null, x*y);
        }, 200);
};

// TODO please write a wrapper function with the squarePromise name which should promisify squareCb

module.exports = {
    squarePromise
};

