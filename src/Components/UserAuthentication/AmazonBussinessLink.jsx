import './CSS/AmazonBussinessLink.css'

function AmazonBussinessLink(props) {
  return (
    <div className="amazonBussinessLink" style={props.style}>
      <b style={{ fontSize: "13px" }}>
        Buying for work?
        <br />
      </b>
      <a href="#" className="amazonBussinessLink-a">
        Shop on Amazon Business
      </a>
    </div>
  );
}

export default AmazonBussinessLink;
