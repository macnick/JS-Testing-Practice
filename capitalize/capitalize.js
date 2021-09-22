const capitalize = (str) => {
  const words = str.trim().split(' ');
  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
};

export default capitalize;
