let myArgs = process.argv;

let obfuscatePassword = function(password) {
  let newPassword = password.replace(/a/g, "4")
  newPassword = newPassword.replace(/e/g, "3")
  newPassword = newPassword.replace(/o/g, "0")
  newPassword = newPassword.replace(/l/g, "1")
  return newPassword
}

module.exports = obfuscatePassword

console.log(obfuscatePassword(myArgs[2]))
