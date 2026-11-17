// Step C6: middleware runs for every request, then passes it on
const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

module.exports = logger;
