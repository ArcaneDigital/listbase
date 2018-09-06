const List = require("./lib/list.js")

module.exports = function(options) {
  if (!options.name) throw "Listbase name is required"
  try {
    return new List(options)
  } catch (e) {
    console.log(e)
  }
}
