const quotes = require('../../src/assets/qutoes.json');

const getRandomNumber = (min,max) => Math.round(Math.random() * (max - min) + min);

export default async (req, res) => {
    const id = getRandomNumber(0,quotes.length - 1);
    res.send({
        id,
        ...quotes[id]
    })
}