import confirmationImage from "../images/icon-complete.svg";

export default function Confirmation(props) {
  const { isSubmit, resetForm } = props;

  return (
    <>
      <div className={isSubmit ? "confirmation" : "confirmation hide"}>
        <img
          src={confirmationImage}
          alt="icon-complete"
          className="confirmation__img"
        />
        <p className="confirmation__headline">THANK YOU!</p>
        <p className="confirmation__text">We've added your card details</p>
        <button onClick={resetForm} className="confirmation__btn btn">
          Continue
        </button>
      </div>
    </>
  );
}
