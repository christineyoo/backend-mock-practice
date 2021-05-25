require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const { calculatorFunctions } = require('../modules/calculator.js');

const app = express();

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error ' } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

/*************
 * require the calculator module and unpack the properties using ES6 object destructuring
 *************/

/************** DO NOT EDIT BELOW THIS LINE *************/
eval(
  (function (p, a, c, k, e, d) {
    e = function (c) {
      return c;
    };
    if (!''.replace(/^/, String)) {
      while (c--) {
        d[c] = k[c] || c;
      }
      k = [
        function (e) {
          return d[e];
        }
      ];
      e = function () {
        return '\\w+';
      };
      c = 1;
    }
    while (c--) {
      if (k[c]) {
        p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
      }
    }
    return p;
  })(
    '1.0={2,3,4,5};',
    6,
    6,
    'exports|module|add|subtract|multiply|divide'.split('|'),
    0,
    {}
  )
);

module.exports = app;
