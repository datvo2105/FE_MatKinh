export const priceDiscount = (price, discount) => {
  let newPrice = price;
  return (newPrice = newPrice - (price * discount) / 100);
};

export const countRating = (rate) => {
  const rating = [];
  const isStar = "font-13 fa fa-star";
  const nonStar = "font-13 fa fa-star-o";
  let nonRate = 5 - rate;
  for (let star = 5; star >= 1; star--) {
    if (rate > 0) {
      rate--;
      rating.push(isStar);
    } else if (nonRate > 0) {
      nonRate--;
      rating.push(nonStar);
    }
  }
  return rating;
};