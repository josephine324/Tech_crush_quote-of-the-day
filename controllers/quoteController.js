// quote of the day
const { getQuoteOfTheDay } = require('../quotes');

// Controller to handle the quote of the day request
function serveQuotePage(req, res) {
  const quote = getQuoteOfTheDay();
  res.render('index', { quote }); 
}

module.exports = { serveQuotePage };
