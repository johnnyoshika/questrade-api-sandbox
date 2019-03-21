var Questrade = require('questrade');

var qt = new Questrade('YicPQ_PxaAWevEQA95tEq0D4ElRUyMn10');
// - OR -
// var qt = new Questrade('./path/to/file'); // Location of a text file with the API key

// Wait to login
qt.on('ready', function (err) {

  console.log('ready err', err);

  qt.getAccounts((err, accounts) => {
    console.log('accounts', err, accounts)
  });

  qt.getBalances((err, balances) => {
    console.log('balances', err, balances)
  });

  qt.getQuote('MSFT', (err, quote) => {
    console.log('quote MSFT', err, quote)
  });

})