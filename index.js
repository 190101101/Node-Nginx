const morgan = require('morgan');
const express = require('express');

const app = express();
const router = express.Router();

const port = process.argv[3] || 3000;

console.log(process.argv)
console.log(process.env.NODE_APP_INTANCE);

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res, next) => {
	res.send(`server work ${port}`);
})

app.use('/', router);

app.listen(port, () => console.log(`http://localhost:${port}`));