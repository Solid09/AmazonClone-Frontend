import { useState } from "react";
import "./CSS/UnorderedProductsList.css";

function UnorderedProductsList(props) {
  const [isHovering, setIsHovering] = useState(false);
  const handleOnHover = () => {
    setIsHovering(true);
  };
  const handleOnNotHover = () => {
    setIsHovering(false);
  };

  return (
    <div className="unorderedListContainer">
      <h2 style={{ margin: "0", padding: "0", fontSize:'21px' }}>{props.header}</h2>
      <ul
        className="unorderedList"
        onMouseEnter={handleOnHover}
        onMouseLeave={handleOnNotHover}
      >
        {isHovering && <button className="ul-productBackwardBtn"></button>}
        {Array(props.listSize)
          .fill()
          .map((_, index) => (
            <li key={index}>
              <a href="#">
                <img src={props.placeHolderImg} alt={`Product ${index + 1}`} />
              </a>
            </li>
          ))}
        {isHovering && <button className="ul-productForwardBtn"></button>}
      </ul>
    </div>
  );
}

export default UnorderedProductsList;
