const data = {
  locations: [],
  get location() {
    return this._location
  },
  set location(value) {
    this._location = value.trim() // Since this.location is taken by get and set
    this.locations.push(this._location)
  }
}

data.location = '    Istanbul  '
data.location = ' Izmir'
console.log(data)