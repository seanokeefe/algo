const makeRandom = (min = 0, max = 1, integer = false) => {
    const value = Math.random() * (max - min) + min;
    return integer ? Math.floor(value) : value;
  }
  
  const makeArray = (size = 10, min = 1, max = 10) => {
    const arr = new Array(size).fill();
    const newArr = arr.map(a => a = makeRandom(min, max, true));
  
    return newArr;        
  }
  
  const timeFunc = (f, repetitions = 1) => {
    const timingStart = performance.now();
    const source = [];
    const result = [];
    const resultIDX = [];
    for (i = 0; i < repetitions; i++) {
      const funcResult = f();
      source.push(funcResult[0]);
      result.push(funcResult[1]);
      resultIDX.push(funcResult[2]);
    }
    const timingEnd = performance.now();
    return {
      source: source,
      result: result,
      resultIDX: resultIDX,
      performance: {
        time: timingEnd - timingStart,
        start: timingStart,
        end: timingEnd,
      }
    }
  }
  
  const dupeCheck = (arr) => {
    const result = arr.reduce((acc, a, index) => {
      if(acc[a] > 0) {
        return a;
      }
      
      acc[a] = a;
      return acc;
    }, []);
    return result.length > 1 ? [arr, 'No Duplicates', '-'] : [arr, result, arr.indexOf(result)];
  }
  
  const repetitions = 100;
  const result = timeFunc(() => dupeCheck(makeArray(1000, 1, 100)), repetitions);
  document.getElementById('result').innerHTML = `
  <div>
    Total: ${result.performance.time} ms
  </div>
  <div>
    Avg: ${result.performance.time/repetitions} ms
  </div>
  <div style="display: flex;">
    <div style="padding: 1rem;">${result.result.map(s => `<div>${s}</div>`).join('')}</div>
  <div style="display: flex;">
    <div style="padding: 1rem;">${result.resultIDX.map(s => `<div>${s}</div>`).join('')}</div>
    <div style="padding: 1rem;">${result.source.map(s => `<div>${s}</div>`).join('')}</div>
  </div>
  `;