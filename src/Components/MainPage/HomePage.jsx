import { useEffect, useState } from "react";
import UnorderedProductsList from "./UnorderedProductsList.jsx";
import ProductCard from "./ProductCard.jsx";

import kitchenItems from "./Assets/KitchenFav.jpg";
import books from "./Assets/Books.jpg";
import toys from "./Assets/Toys.jpg";
import gamingItems from "./Assets/GamingItems.jpg";
import beautyProducts from "./Assets/BeautyProducts.jpg";

import productPlaceHolderImg from "./Assets/productsPlaceHolderImg.jpg";
import "./CSS/HomePage.css";

import _productCardData from "./productCardData.json";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import BackGroundTheme from "../BackGroundTheme/BackGroundTheme.jsx";
import BottomOfMainPage from "../BottomOfMainPage/BottomOfMainPage.jsx";

function MainPage(props) {
  const [imgIndex, setImgIndex] = useState(0);
  let bgImages = [kitchenItems, books, toys, gamingItems, beautyProducts];
  const [bgImgCounter, setBgImgCouner] = useState(0);

  const handleForwardClick = () => {
    setImgIndex((i) => (1 + i) % bgImages.length);
  };
  const handleBackClick = () => {
    setImgIndex((i) => (i - 1 + bgImages.length) % bgImages.length);
  };

  // timer to change bg images automatically
  useEffect(() => {
    let timer;
    if (bgImgCounter < 5) {
      timer = setTimeout(() => {
        setImgIndex((i) => (1 + i) % bgImages.length);
        setBgImgCouner((b) => b + 1);
      }, 5000);
    } else {
      clearTimeout(timer);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [imgIndex]);

  useEffect(() => {
    document.title = "Amazon.com. Spend less. Smile more";
  }, []);

  return (
    <div style={{ display: "block", height: "100vh", width: "100%" }}>
      <Header />
      <BackGroundTheme />
      <div className="mainPage">
        <div className="bgImgContainer">
          <div className="bgImgGradient"></div>
          <img
            src={bgImages[imgIndex]}
            alt="background image"
            className="bgImg_img"
          ></img>

          <div className="bgImg_btns">
            <button
              className="imgForwardBtn"
              onClick={handleForwardClick}
            ></button>
            <button className="imgBackBtn" onClick={handleBackClick}></button>
          </div>
        </div>

        <div className="mainPage-topTwoProductCardsListGrid">
          <ProductCard
            cardType="multipleProducts"
            Header="Gaming accessories"
            productCardData={_productCardData.slice(0, 4)}
            moreProductText="See All"
          />

          <ProductCard
            cardType="multipleProducts"
            Header="Shop deals in Fashion"
            productCardData={_productCardData.slice(4, 8)}
            moreProductText="See All"
          />

          <ProductCard
            cardType="multipleProducts"
            Header="Refresh your space"
            productCardData={_productCardData.slice(8, 12)}
            moreProductText="See All"
          />

          <ProductCard
            cardType="singleProduct"
            Header="Deals in PCs"
            productCardData={_productCardData[12]}
            moreProductText="See All"
            style={{ margin: "0" }}
          />
          <ProductCard
            cardType="singleProduct"
            Header="Toys under $25"
            productCardData={_productCardData[13]}
            moreProductText="See All"
          />

          <ProductCard
            cardType="multipleProducts"
            Header="Fashion trends you like"
            productCardData={_productCardData.slice(14, 18)}
            moreProductText="See All"
          />

          <ProductCard
            cardType="singleProduct"
            Header="Beauty steals under $25"
            productCardData={_productCardData[18]}
            moreProductText="See All"
          />

          <ProductCard
            cardType="singleProduct"
            Header="Home décor under $50"
            productCardData={_productCardData[19]}
            moreProductText="See All"
            style={{ margin: "0" }}
          />
          <div className="mainPage-topTwoProductCardsListGrid-extraCard">
            <ProductCard
              cardType="multipleProducts"
              Header="Warm & welcoming decor"
              productCardData={_productCardData.slice(26, 30)}
              moreProductText="See All"
              style={{ margin: "0" }}
              className=""
            />
          </div>
        </div>

        <UnorderedProductsList
          header="Top Sellers in Baby Products for you"
          listSize={21}
          placeHolderImg={productPlaceHolderImg}
        />

        <UnorderedProductsList
          header="Best Sellers in Toys & Games"
          listSize={23}
          placeHolderImg={productPlaceHolderImg}
        />

        <div className="mainPage-singleRowProductCardsList">
          <ProductCard
            cardType="singleProduct"
            Header="Upgrade your office furniture"
            productCardData={_productCardData[20]}
            moreProductText="See All"
          />

          <ProductCard
            cardType="multipleProducts"
            Header="Gaming merchandise"
            productCardData={_productCardData.slice(21, 25)}
            moreProductText="See All"
          />

          <ProductCard
            cardType="singleProduct"
            Header="Shop activity trackers and smartwatches"
            productCardData={_productCardData[25]}
            moreProductText="See All"
          />

          <div className="mainPage-ProductCardsListGrid-extraCard">
            <ProductCard
              cardType="multipleProducts"
              Header="Warm & welcoming decor"
              productCardData={_productCardData.slice(26, 30)}
              moreProductText="See All"
              style={{ margin: "0" }}
            />
          </div>
        </div>

        <UnorderedProductsList
          header="Best Sellers in Sports & Outdoors"
          listSize={19}
          placeHolderImg={productPlaceHolderImg}
        />

        <UnorderedProductsList
          header="Popular products in PC internationally"
          listSize={19}
          placeHolderImg={productPlaceHolderImg}
        />

        <div className="mainPage-singleRowProductCardsList">
          <ProductCard
            cardType="singleProduct"
            Header="Great prices on shoes"
            productCardData={_productCardData[30]}
            moreProductText="See All"
          />

          <ProductCard
            cardType="multipleProducts"
            Header="Level up your gaming"
            productCardData={_productCardData.slice(31, 35)}
            moreProductText="See All"
          />

          <ProductCard
            cardType="multipleProducts"
            Header="Have more fun with family"
            productCardData={_productCardData.slice(35, 39)}
            moreProductText="See All"
          />
          <div className="mainPage-ProductCardsListGrid-extraCard">
            <ProductCard
              cardType="multipleProducts"
              Header="Fantastic Finds for Home"
              productCardData={_productCardData.slice(39, 43)}
              moreProductText="See All"
              style={{ margin: "0" }}
            />
          </div>
        </div>

        <UnorderedProductsList
          header="Most wished for in Movies & TV"
          listSize={29}
          placeHolderImg={productPlaceHolderImg}
        />

        <UnorderedProductsList
          header="Best Sellers in Books"
          listSize={29}
          placeHolderImg={productPlaceHolderImg}
        />

        <div className="mainPage-singleRowProductCardsList">
          <ProductCard
            cardType="multipleProducts"
            Header="Look your best this season"
            productCardData={_productCardData.slice(43, 47)}
            moreProductText="See All"
          />

          <ProductCard
            cardType="singleProduct"
            Header="Player's paradise starts here"
            productCardData={_productCardData[47]}
            moreProductText="See All"
          />
          <div className="mainPage-ProductCardsListGrid-extraCard">
            <ProductCard
              cardType="multipleProducts"
              Header="Upgrade your office furniture"
              productCardData={_productCardData.slice(48, 52)}
              moreProductText="See All"
            />
          </div>
          <ProductCard
            cardType="singleProduct"
            Header="A whole new way to work"
            productCardData={_productCardData[52]}
            moreProductText="See All"
            style={{ margin: "0" }}
          />
        </div>

        <UnorderedProductsList
          header="Top Sellers in Books for you"
          listSize={29}
          placeHolderImg={productPlaceHolderImg}
        />
      </div>
      <BottomOfMainPage />
      <Footer />
    </div>
  );
}

export default MainPage;
