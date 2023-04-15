export default function Form(props) {
  const {
    isSubmit,
    name,
    number,
    month,
    year,
    cvc,
    setIsSubmit,
    setName,
    setNumber,
    setMonth,
    setYear,
    setCvc,
  } = props;

  function handleFormSubmit(e) {
    e.preventDefault();
    if (
      !name ||
      !number ||
      !month ||
      !year ||
      !cvc ||
      number.toString().match(/[^,\s,\d]/) ||
      [month, year].toString().match(/[^,\s,\d]/) ||
      cvc.match(/[^,\s,\d]/)
    ) {
      setIsSubmit(false);
    } else {
      setIsSubmit(true);
    }
  }

  function handleNumberChange() {
    const numberArr = [...number.split(" ").join("")];
    const creditCard = [];
    numberArr.forEach((n, i) => {
      creditCard.push(n);
      if ((i + 1) % 4 === 0) {
        creditCard.push(" ");
      }
    });
    return creditCard.join("");
  }

  function checkErrorName() {
    return isSubmit === false && !name ? true : false;
  }

  function checkErrorNumber() {
    return (isSubmit === false && number.toString() === "") ||
      (isSubmit === false && number.toString().match(/[^,\s,\d]/))
      ? true
      : false;
  }

  function checkErrorExpiry() {
    return (isSubmit === false && !year) ||
      (isSubmit === false && !month) ||
      (isSubmit === false && [month, year].toString().match(/[^,\s,\d]/))
      ? true
      : false;
  }

  function checkErrorCvc() {
    return (isSubmit === false && !cvc) ||
      (isSubmit === false && cvc.match(/[^,\s,\d]/))
      ? true
      : false;
  }

  function errorContent(value) {
    return value.match(/[^,\s,\d]/)
      ? "Wrong format, numbers only"
      : `Can't be blank`;
  }

  return (
    <>
      <form className={isSubmit ? "form hide" : "form"}>
        <div className="form__name">
          <label htmlFor="name" className="form__name--label">
            Cardholder Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            id="name"
            className="form__name--input"
            placeholder="e.g. Jane Appleseed"
          />
          <p className={checkErrorName() ? "form__error show" : "form__error"}>
            Can't be blank
          </p>
        </div>
        <div className="form__number">
          <label htmlFor="number" className="form__number--label">
            Card Number
          </label>
          <input
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            value={handleNumberChange()}
            type="text"
            id="number"
            maxLength="19"
            className="form__number--input"
            placeholder="e.g. 1234 5678 9123 0000"
          />
          <p
            className={checkErrorNumber() ? "form__error show" : "form__error"}
          >
            {errorContent(number.toString())}
          </p>
        </div>
        <div className="form__expiration">
          <label htmlFor="expiration" className="form__expiration--label">
            Exp. Date (MM/YY)
          </label>
          <input
            onChange={(e) => setMonth(e.target.value)}
            value={month}
            type="text"
            maxLength="2"
            id="expiration"
            className="form__expiration--input-month"
            placeholder="MM"
          />
          <input
            onChange={(e) => setYear(e.target.value)}
            value={year}
            type="text"
            maxLength="2"
            className="form__expiration--input-year"
            placeholder="YY"
          />
        </div>
        <div className="form__cvc">
          <label htmlFor="cvc" className="form__cvc--label">
            CVC
          </label>
          <input
            onChange={(e) => setCvc(e.target.value)}
            value={cvc}
            type="text"
            maxLength="3"
            id="cvc"
            className="form__cvc--input"
            placeholder="e.g. 123"
          />
        </div>
        <p
          className={
            checkErrorExpiry()
              ? "form__error form__error--expr show"
              : "form__error form__error--expr"
          }
        >
          {errorContent([month, year].toString())}
        </p>
        <p
          className={
            checkErrorCvc()
              ? "form__error form__error--cvc show"
              : "form__error form__error--cvc"
          }
        >
          {errorContent(cvc)}
        </p>
        <div className="form__submit">
          <button
            onClick={(e) => handleFormSubmit(e)}
            className="form__submit--btn btn"
          >
            Confirm
          </button>
        </div>
      </form>
    </>
  );
}
