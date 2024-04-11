const path = require("path")
exports.getSignup = (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'signup.html'));
};