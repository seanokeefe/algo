const centuryFromYear = (year) => {
  const remainder = year % 100;
  const quotient = (year - remainder) / 100;
  return remainder ? { result: quotient + 1, source: year } : { result: quotient, source: year };
}

// const result = centuryFromYear(71);
const repetitions = 5;
const result = timeFunc(() => centuryFromYear(makeRandom(1, 2050, true)), repetitions);
console.log(result);

document.getElementById('result').innerHTML = `
<div>
  Total: ${result.performance.time} ms
</div>
<div>
  Avg: ${result.performance.time/repetitions} ms
</div>
<div style="display: flex;">
  <div style="padding: 1rem;">${result.result.map((s) => {
    return `<div>
      <span style="padding-right: 1rem; width: 3rem; display: inline-block; text-align: right;">${s.result}</span>
      <span style="padding-right: 1rem; width: 3rem; display: inline-block; text-align: right;">${s.source}</span>
    </div>`;
  }).join('')}
</div>
`;

// document.getElementById('result').innerHTML = `
//   <div style="display: flex;">
//     <div style="padding: 1rem;">${result}
//   </div>
// `;