const bcrypt = require('bcryptjs');

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(12);
  return bcrypt.hash(password, salt);
}

exports.hashPassword = hashPassword;

console.log(hashPassword('admin').then(console.log));