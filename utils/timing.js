const timeFunc = (f, repetitions = 1) => {
    const timingStart = performance.now();
    const result = [];
    for (i = 0; i < repetitions; i++) {
      const funcResult = f();
      result.push(funcResult);
    }
    const timingEnd = performance.now();
    return {
      result: result,
      performance: {
        time: timingEnd - timingStart,
        start: timingStart,
        end: timingEnd,
      }
    }
  }
  