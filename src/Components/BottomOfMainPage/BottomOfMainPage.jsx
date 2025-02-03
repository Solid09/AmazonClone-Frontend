import BottomProductCard from "./BottomProductCard";
import "./CSS/BottomOfMainPage.css";

import productPlaceHolderImg from "./Assets/productsPlaceHolderImg.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BottomOfMainPage() {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [pageCount, setPageCount] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState(3);

  useEffect(() => {
    const _unorderedProductsList = document.getElementById("ul-container");

    if (_unorderedProductsList) {
      const checkOverflow = () => {
        const isScrollable =
          _unorderedProductsList.scrollWidth >
          _unorderedProductsList.clientWidth;
        setIsOverflowing(isScrollable);
      };

      const resizeObserver = new ResizeObserver(() => {
        checkOverflow();
      });

      resizeObserver.observe(_unorderedProductsList);

      checkOverflow();

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  const isScrolling = (direction) => {
    const _unorderedProductsList = document.getElementById("ul-container");

    if (_unorderedProductsList) {
      if (direction === "left") {
        _unorderedProductsList.scrollLeft -= 1000;
        if (pageCount > 1) {
          setPageCount((p) => p - 1);
        }
      } else {
        _unorderedProductsList.scrollLeft += 1000;
        if (pageCount < totalPageCount) {
          setPageCount((p) => p + 1);
        }
      }
    }
  };

  return (
    <div className="bottomOfMainPage">
      <div className="bottomOfMainPage-border">
        <div className="bottomOfMainPage-Container">
          <div style={{ display: "inline-block", width: "75%" }}>
            <h2 className="container-header">
              Gift ideas inspired by your shopping history
            </h2>
            <Link to="#" className="container-seeMoreLink">
              Show more
            </Link>
          </div>

          <div
            style={{
              display: "inline-block",
              textAlign: "right",
              width: "25%",
            }}
          >
            {isOverflowing && (
              <span>
                Page {pageCount} of {totalPageCount}
              </span>
            )}
          </div>

          <div className="unorderedProductsList">
            <div className="ul-backBtn">
              {isOverflowing && (
                <button onClick={() => isScrolling("left")}>
                  <div className="bbtnArrow"></div>
                </button>
              )}
            </div>

            <div
              id="ul-container"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                scrollSnapType: "x mandatory",
                overflow: "hidden",
              }}
            >
              <BottomProductCard
                productPlaceHolderImg={productPlaceHolderImg}
                productPlaceHolderName="Product PH Text"
                authorName="Alex"
                totalProductRating={9999}
                productPrice={9.99}
                shippingPrice={14.99}
              />
              <BottomProductCard
                productPlaceHolderImg={productPlaceHolderImg}
                productPlaceHolderName="Product PH Text"
                authorName="Alex"
                totalProductRating={9999}
                productPrice={9.99}
                shippingPrice={14.99}
              />
              <BottomProductCard
                productPlaceHolderImg={productPlaceHolderImg}
                productPlaceHolderName="Product PH Text"
                authorName="Alex"
                totalProductRating={9999}
                productPrice={9.99}
                shippingPrice={14.99}
              />
              <BottomProductCard
                productPlaceHolderImg={productPlaceHolderImg}
                productPlaceHolderName="Product PH Text"
                authorName="Alex"
                totalProductRating={9999}
                productPrice={9.99}
                shippingPrice={14.99}
              />
              <BottomProductCard
                productPlaceHolderImg={productPlaceHolderImg}
                productPlaceHolderName="Product PH Text"
                authorName="Alex"
                totalProductRating={9999}
                productPrice={9.99}
                shippingPrice={14.99}
              />
              <BottomProductCard
                productPlaceHolderImg={productPlaceHolderImg}
                productPlaceHolderName="Product PH Text"
                authorName="Alex"
                totalProductRating={9999}
                productPrice={9.99}
                shippingPrice={14.99}
              />
              <BottomProductCard
                productPlaceHolderImg={productPlaceHolderImg}
                productPlaceHolderName="Product PH Text"
                authorName="Alex"
                totalProductRating={9999}
                productPrice={9.99}
                shippingPrice={14.99}
              />
              <BottomProductCard
                productPlaceHolderImg={productPlaceHolderImg}
                productPlaceHolderName="Product PH Text"
                authorName="Alex"
                totalProductRating={9999}
                productPrice={9.99}
                shippingPrice={14.99}
              />
              <BottomProductCard
                productPlaceHolderImg={productPlaceHolderImg}
                productPlaceHolderName="Product PH Text"
                authorName="Alex"
                totalProductRating={9999}
                productPrice={9.99}
                shippingPrice={14.99}
              />
              <BottomProductCard
                productPlaceHolderImg={productPlaceHolderImg}
                productPlaceHolderName="Product PH Text"
                authorName="Alex"
                totalProductRating={9999}
                productPrice={9.99}
                shippingPrice={14.99}
              />
              <BottomProductCard
                productPlaceHolderImg={productPlaceHolderImg}
                productPlaceHolderName="Product PH Text"
                authorName="Alex"
                totalProductRating={9999}
                productPrice={9.99}
                shippingPrice={14.99}
              />
              <BottomProductCard
                productPlaceHolderImg={productPlaceHolderImg}
                productPlaceHolderName="Product PH Text"
                authorName="Alex"
                totalProductRating={9999}
                productPrice={9.99}
                shippingPrice={14.99}
              />
              <BottomProductCard
                productPlaceHolderImg={productPlaceHolderImg}
                productPlaceHolderName="Product PH Text"
                authorName="Alex"
                totalProductRating={9999}
                productPrice={9.99}
                shippingPrice={14.99}
              />
              <BottomProductCard
                productPlaceHolderImg={productPlaceHolderImg}
                productPlaceHolderName="Product PH Text"
                authorName="Alex"
                totalProductRating={9999}
                productPrice={9.99}
                shippingPrice={14.99}
              />
              <BottomProductCard
                productPlaceHolderImg={productPlaceHolderImg}
                productPlaceHolderName="Product PH Text"
                authorName="Alex"
                totalProductRating={9999}
                productPrice={9.99}
                shippingPrice={14.99}
              />
              <BottomProductCard
                productPlaceHolderImg={productPlaceHolderImg}
                productPlaceHolderName="Product PH Text"
                authorName="Alex"
                totalProductRating={9999}
                productPrice={9.99}
                shippingPrice={14.99}
              />
              <BottomProductCard
                productPlaceHolderImg={productPlaceHolderImg}
                productPlaceHolderName="Product PH Text"
                authorName="Alex"
                totalProductRating={9999}
                productPrice={9.99}
                shippingPrice={14.99}
              />
              <BottomProductCard
                productPlaceHolderImg={productPlaceHolderImg}
                productPlaceHolderName="Product PH Text"
                authorName="Alex"
                totalProductRating={9999}
                productPrice={9.99}
                shippingPrice={14.99}
              />
              <BottomProductCard
                productPlaceHolderImg={productPlaceHolderImg}
                productPlaceHolderName="Product PH Text"
                authorName="Alex"
                totalProductRating={9999}
                productPrice={9.99}
                shippingPrice={14.99}
              />
              <BottomProductCard
                productPlaceHolderImg={productPlaceHolderImg}
                productPlaceHolderName="Product PH Text"
                authorName="Alex"
                totalProductRating={9999}
                productPrice={9.99}
                shippingPrice={14.99}
              />
            </div>

            <div className="ul-forwardBtn">
              {isOverflowing && (
                <button onClick={() => isScrolling("rigth")}>
                  <div className="fbtnArrow"></div>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* {!isSignedIn && (
          <>
            <div className="bottomMenuDivider"></div>
            <div className="afterMenuDivider">
              <span style={{ display: "block", fontSize: "13px" }}>
                See personalized recommendations
              </span>
              <Link to="/signin-email" className="signInLink">
                <b>Sign in</b>
              </Link>
              <div style={{ marginBottom: "20px" }}>
                <span style={{ fontSize: "11px" }}>New customer?</span>
                <Link to="/signup" className="signUpLink">
                  Start here
                </Link>
              </div>
            </div>
          </>
        )} */}
      </div>
    </div>
  );
}

export default BottomOfMainPage;
