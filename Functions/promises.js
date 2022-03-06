// Callback
const getDataCallback = (num, callback) => {
  setTimeout(() => {
    if (typeof num === 'number') {
      callback(undefined, num * 2)
    } else {
      callback('Number must be provided')
    }
  }, 2000)
}

// This is called "Callback Hell", codes are nested and hard to read
getDataCallback(2, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    getDataCallback(data, (err2, data2) => {
      if (err2) {
        console.log(err2)
      } else {
        console.log(`Callback data: ${data2}`)
      }
    })
  }
})

// Promise
const getDataPromise = (num) => new Promise((resolve, reject) => {
  setTimeout(() => {
    typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
  }, 2000)
})

getDataPromise(2).then((data) => {
  getDataPromise(data).then((data2) => {
    console.log(`Promise data: ${data2}`)
  }, (err) => {
    console.log(err)
  })
}, (err) => {
  console.log(err)
})

// Promise Chaining
getDataPromise('10').then((data) => {
  return getDataPromise(data)
}).then((data2) => {
  return getDataPromise(data2)
}).then((data3) => {
  console.log(data3)
}).catch((err) => {
  console.log(err)
})