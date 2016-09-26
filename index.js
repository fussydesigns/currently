var now = new Date();

module.exports.full     = now;
module.exports.year     = now.getFullYear();
module.exports.month    = now.getMonth() + 1;
module.exports.date     = now.getDate();
module.exports.day      = now.getDay();
