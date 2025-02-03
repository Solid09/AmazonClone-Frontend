import "./CSS/ProductCard.css";

function ProductCardList(props) {
  const Card = () => {
    if (props.cardType == "multipleProducts") {
      return (
        <div className="multipleProducts" style={props.style}>
          <h2 style={{margin:'0 0 10px 0', fontSize:'21px'}}>{props.Header}</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(2, 1fr)`,
              gridTemplateRows: `repeat(2, 1fr)`,
              padding: "0 0 20px 0",
              gap: "15px",
            }}
          >
            {Array(4)
              .fill()
              .map((_, index) => (
                <a key={index} href="#" className="productPageLinkImg">
                  <img
                    src={props.productCardData[index].img}
                    alt={props.productCardData[index].name}
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      height: "115px",   
                    }}
                  />
                  <span>{props.productCardData[index].name}</span>
                </a>
              ))}
          </div>
          <a href="#" className="mainPage-productCard-seeMoreLink">
            {props.moreProductText}
          </a>
        </div>
      );
    } else if (props.cardType == "singleProduct") {
      return (
        <div className="singleProduct" style={props.style}>
          <h2 style={{margin:'0 0 10px 0', fontSize:'21px'}}>{props.Header}</h2>
          <a href="#" className="productPageLinkImg">
            <img
              src={props.productCardData.img}
              style={{
                height: "auto",
                width: "100%",
                objectFit: "cover",
                flex:'1',
              }}
              alt={props.productCardData.name}
            ></img>
          </a>
          <a href="#" className="mainPage-productCard-seeMoreLink">
            {props.moreProductText}
          </a>
        </div>
      );
    } else {
      throw new Error("Wrong Card Type!");
    }
  };
  return <Card />;
}

export default ProductCardList;
