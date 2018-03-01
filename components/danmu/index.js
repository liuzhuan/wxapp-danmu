function Danmu(page, items, delay=500) {
  this.page = page
  this.items = items
  this.len = items.length
  this.i = 0
  this.tick = 0
  this.delay = delay
}

Danmu.prototype.start = function() {
  this.i = 0
  this.page.setData({ movings: [] })
  this.tick = setInterval(this.move.bind(this), this.delay)
}

Danmu.prototype.move = function() {
  this.page.setData({
    [`movings[${this.i}]`]: true
  })
  this.i++
  if (this.i === this.len) {
    this.reset()
  }
}

Danmu.prototype.reset = function() {
  this.stop()
  setTimeout(this.start.bind(this), 4000)
}

Danmu.prototype.stop = function() {
  clearInterval(this.tick)
}

export default Danmu