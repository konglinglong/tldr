
const request = require('request');
exports.main = (evt, ctx) => {
  return new Promise((RES, REJ) => {
    request(evt.options, (err, res, body) => {
      if (err) return REJ(err);
      RES(res);
    })
  });
}