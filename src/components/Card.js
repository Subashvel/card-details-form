import logo from "../images/card-logo.svg";

export default function Card(props) {
  const { name, number, month, year, cvc } = props;
  return (
    <>
      <div className="card">
        <div className="card__back">
          <p className="card__back--cvc">{cvc ? cvc : "000"}</p>
        </div>
        <div className="card__front">
          <img src={logo} alt="Logo" className="card__front--logo" />
          <p className="card__front--number">
            {number.length > 0 ? number : "0000 0000 0000 0000"}
          </p>
          <p className="card__front--name">{name ? name : "Jane Appleseed"}</p>
          <p className="card__front--date">
            {month ? month : "00"}/{year ? year : "00"}
          </p>
        </div>
      </div>
    </>
  );
}
