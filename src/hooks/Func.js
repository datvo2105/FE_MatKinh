export const totalPrice = (listOrder) => {
  let total = 0;
  listOrder.forEach((order) => (total = total + order.price));
  return total;
};
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
export const formatPrice = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "VND",
});
