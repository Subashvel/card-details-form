import "./style/App.css";

import Card from "./components/Card.js";
import Form from "./components/Form.js";
import Confirmation from "./components/Confirmation.js";
import { useState } from "react";

function App() {
  const [isSubmit, setIsSubmit] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");

  function resetForm() {
    setIsSubmit("");
    setName("");
    setNumber("");
    setMonth("");
    setYear("");
    setCvc("");
  }

  return (
    <>
      <main className="container">
        <Card
          isSubmit={isSubmit}
          name={name}
          number={number}
          month={month}
          year={year}
          cvc={cvc}
        />
        <Form
          isSubmit={isSubmit}
          name={name}
          number={number}
          month={month}
          year={year}
          cvc={cvc}
          setIsSubmit={setIsSubmit}
          setName={setName}
          setNumber={setNumber}
          setMonth={setMonth}
          setYear={setYear}
          setCvc={setCvc}
        />
        <Confirmation isSubmit={isSubmit} resetForm={resetForm} />
      </main>
    
    </>
  );
}

export default App;
