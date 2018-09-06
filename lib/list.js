"use strict"

const Inherits = require("util").inherits
const Events = require("events")
module.exports = async function(params) {
  const name = params.name
}

function ListBase(options) {
  let self = this
  self.name = options.name
  self.list = []
  Events.EventEmitter.call(self)
  self.on("error", function(queueItem, error) {})
  self.open()
  process.once("SIGINT", function() {
    self.close()
  })
  return self
}

Inherits(ListBase, Events)

ListBase.prototype.open = function() {
  let self = this
  console.log("opening listbase", self.name)
}
ListBase.prototype.exists = function(record) {
  let self = this
  return list.includes(record)
}
ListBase.prototype.length = function() {
  let self = this
  return self.list.length
}
ListBase.prototype.add = function(record) {
  let self = this
  return self.list.push(record)
}
ListBase.prototype.close = function() {
  let self = this
  console.log("closing listbase")
}

module.exports = ListBase
