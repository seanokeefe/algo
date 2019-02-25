const makeRandom = (min = 0, max = 1, makeInt = false) => {
    const value = Math.random() * (max - min) + min;
    return makeInt ? Math.floor(value) : value;
  }
  
const makeArray = (size = 10, min = 1, max = 10) => {
  const arr = new Array(size).fill();
  const newArr = arr.map(a => a = makeRandom(min, max, true));

  return newArr;        
}
