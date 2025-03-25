import "./Footer.css";

const Footer = (props) => {
  return (
    <footer className="d-flex gap-3 justify-content-center pb-2">
      Feito com 💖 por
      <a href={props.devL1} target="_blank" rel="noopener noreferrer">
        {props.devn1}
      </a>{" "}
      |
      <a href={props.devL2} target="_blank" rel="noopener noreferrer">
        {props.devn2}
      </a>{" "}
      |
      <a href={props.devL3} target="_blank" rel="noopener noreferrer">
        {props.devn3}
      </a>
    </footer>
  );
};

export default Footer;
