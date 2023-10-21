import ListBrand from "./ListBrand";
import ListCategory from "./ListCategory";
import PriceSlider from "./PriceSlider";

const Filters = () => {
  return (
    <>
      <ListCategory />
      <PriceSlider />
      <ListBrand/>
    </>
  );
};

export default Filters;
