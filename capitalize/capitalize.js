const capitalize = (str) => {
  let words = str.split(' ');
  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
};

export default capitalize;
