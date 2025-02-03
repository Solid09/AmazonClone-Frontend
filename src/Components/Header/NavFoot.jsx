import "./CSS/NavFoot.css";

function NavFoot({AlterSideBarStatus}) {

  return (
    <>
      <button className="allCategory" onClick={AlterSideBarStatus}>
        <div className="bars">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <span className="allText">
          <b>All</b>
        </span>
      </button>
      <button className="today-s-DealsButton">Today's Deals</button>
      <button className="customerServiceButton">Customer Service</button>
      <button className="registryButton">Registry</button>
      <button className="giftCardsButton">Gift Cards</button>
      <button className="sellButton">Sell</button>
    </>
  );
}

export default NavFoot;
