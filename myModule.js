var count = 0;

// function inc() {
//     return ++count
// }

const inc = () => ++count;
const dec = () => --count;


// function dec() {
//     return --count
// }
const getCount = () => count;

module.exports = { 
    inc,
    dec,
    getCount
};

