const express = require('express')

const dotenv = require('dotenv')

const firstFunc = require('./utilities/first')
const secondFunc = require('./utilities/second')

dotenv.config()
const app = express()

const array = [1, 5, 3, 8, 2, 9];
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];


console.log("firstFunc", firstFunc.largeNumber(array));
console.log("firstFunc", firstFunc.cut3(array1));
console.log("secondFunc", secondFunc.sum(array2));
console.log("secondFunc", secondFunc.concat(array1, array2));



const PORT = process.env.PORT || 8001

app.listen(PORT, () => {
    console.log('listening on Port ' + PORT)
})
