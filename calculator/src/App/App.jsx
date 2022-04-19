import React, { Fragment, useState } from "react";

import "./App.css";
import HeaderApp from "../Header/Header";
import Input from "../Input/Input";
import CalculatorAdd from "../CalculatorAdd/CalculatorAdd";
import CalculatorSubtract from "../CalculatorSubtract/CalculatorSubtract";
import CalculatorMultiply from "../CalculatorMultiply/CalculatorMultiply";
import CalculatorDivision from "../CalculatorDivision/CalculatorDivision";
import Numbers from "../Numbers/Numbers";

function App() {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const suma = () => {
    alert("sumando");
  };
  const resta = () => {
    alert("resta");
  };
  const multi = () => {
    alert("multi");
  };
  const divi = () => {
    alert("divi");
  };
  const operations = [
    { operator: "+", accion: suma },
    { operator: "-", accion: resta },
    { operator: "x", accion: multi },
    { operator: "%", accion: divi },
  ];
  return (
    <Fragment>
      <HeaderApp />

      <Input />

      <CalculatorAdd />

      <CalculatorSubtract />

      <CalculatorMultiply />

      <CalculatorDivision />
      <div className="containerTotal">
      <div className="containerButton">
        <div className="containerNumber">
          {number.map((index) => {
            return (
              <Numbers
                key={index}
                number={index}
                onPress={() => alert("Sí funciona")}
              />
            );
          })}
        </div>
        <div className="containerOperations">
          {operations.map((operator,index) => {
            return (
              <Numbers
                key={index}
                number={operator.operator}
                onPress={operator.accion}
              />
            );
          })}
        </div>
      </div>
      </div>
    </Fragment>
  );
}

export { App };
