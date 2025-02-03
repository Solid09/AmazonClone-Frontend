import { useState, useRef, useEffect } from "react";

function useFetchProductData() {
  const [data, setData] = useState();
  const productData = useRef(null);

  //getting product data from json file
  const loadData = async () => {
    try {
      const data = await import("../Product.json");
      setData(data.default);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    //data ready to process
    if (data) {
      productData.current = getCategoriesData();
    } else {
      console.log("Not yet loaded!");
    }
  }, [data]);

  //arranging data into categories
  const getCategoriesData = () => {
    let _productData = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i]) {
        const categoryIndex = _productData.findIndex(
          (p) => p.category === data[i].category
        );

        if (categoryIndex !== -1) {
          //looks for that category to append to its data
          _productData[categoryIndex] = {
            ..._productData[categoryIndex],
            details: [..._productData[categoryIndex].details, data[i]],
          };
        } else {
          // If the category does not exist then adds a new category
          _productData.push({
            category: data[i].category,
            details: [data[i]],
          });
        }
      }
    }
    return _productData;
  };

  return {productData}
}

export default useFetchProductData;
