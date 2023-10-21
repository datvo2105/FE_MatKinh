export const getSearch = (string) => {
  return (
    string
      .match(/search=+\w+/)
      ?.at(0)
      ?.split("=")
      ?.at(1) || ""
  );
};

export const getPageIndex = (string) => {
  return (
    string
      .match(/pageIndex=+\w+/)
      ?.at(0)
      ?.split("=")
      ?.at(1) || ""
  );
};

export const getCategoryId = (string) => {
  return (
    string
      .match(/categoryId=+\w+/)
      ?.at(0)
      ?.split("=")
      ?.at(1) || ""
  );
};

export const getBrandId = (string) => {
  return (
    string
      .match(/brandId=+\w+/)
      ?.at(0)
      ?.split("=")
      ?.at(1) || ""
  );
};

export const getMinPrice = (string) => {
  return (
    string
      .match(/minPrice=+\w+/)
      ?.at(0)
      ?.split("=")
      ?.at(1) || ""
  );
};

export const getMaxPrice = (string) => {
  return (
    string
      .match(/maxPrice=+\w+/)
      ?.at(0)
      ?.split("=")
      ?.at(1) || ""
  );
};
