const tail = (array) => {
  const newArray = []
  array.forEach(element => {
    if(array.indexOf(element) === 0) {
      newArray
    } else {
      newArray.push(element)
    }
  })
  return newArray
}

module.exports = tail
