const analyze = (arr) => {
  let avg = arr.reduce((a, v) => a + v, 0) / arr.length;
  return {
    average: avg,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
};

export default analyze;
