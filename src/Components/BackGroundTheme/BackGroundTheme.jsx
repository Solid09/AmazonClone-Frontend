import React from "react";

function BackGroundTheme() {
  return (
      <div
        className="backgroundColor"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "#EAEDED",
          zIndex: "-2",
          margin: "0",
          padding: "0",
          top: "0",
        }}
      ></div>
  );
}

export default BackGroundTheme;
