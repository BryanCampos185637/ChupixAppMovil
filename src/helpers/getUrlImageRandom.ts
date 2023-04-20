export const getUrlImageRandom = () => {
  const idrandom = Math.floor(Math.random() * 200);
  return `https://picsum.photos/id/${idrandom === 0 ? 1 : idrandom}/300/300`;
};
