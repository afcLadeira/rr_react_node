import React, { useState, useEffect, useRef } from "react";

import PropTypes from "prop-types";
import { fetchData, isBiggerThan2 } from "../../utils";
import "./testComponentStyles.css";
import CustomApiHook from "../../components/CustomApiHook";
import { Button } from "@chakra-ui/react";

const NEWDATA = [{ country: "UK" }, { country: "Sweden" }];

export function TestComponent() {
  let [data, setData] = useState([]);

  const dataLength = isBiggerThan2(data);

  console.log("dataLength", dataLength);

  useEffect(() => {
    console.log("componentDidMount");
    fetchData().then(
      (data) => setData(data),
      (error) => console.log(error)
    );
  }, []);

  useEffect(() => {
    console.log("data updated");
  }, [data]);

  useEffect(() => {
    console.log("use effect");
  });

  let aa = <h3>Lorem</h3>;

  let renderStuff = () => (
    <p className="c-red" style={{ border: "1px solid teal" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
      tempor orci, id egestas diam. Ut id sagittis justo, vel euismod augue.
      Vivamus et diam pulvinar, tempus lacus nec, ornare velit. Suspendisse arcu
      dolor, porta tempus augue et, porta condimentum magna. Nulla ut augue vel
      lacus accumsan ornare. Duis nunc metus, ornare a semper sed, interdum sit
      amet nulla. Phasellus sollicitudin nunc sit amet eros faucibus lacinia.
      Vivamus sed nisl lorem. Nullam leo turpis, dapibus in magna sed, efficitur
      placerat libero. Sed gravida urna eros, lacinia eleifend tellus dapibus
      ac. Morbi ligula elit, sollicitudin in nunc at, porttitor molestie mauris.
      Nulla convallis volutpat erat dapibus dapibus.
    </p>
  );

  return (
    <div>
      <CustomApiHook></CustomApiHook>
      <hr></hr>

      <>
        <Message>
          <DataList
            refKey={JSON.stringify(data)}
            data={data}
            setData={setData}
          ></DataList>
        </Message>
        <hr></hr>
        {aa}
        {renderStuff()}
        <MyDiv
          classname="c-blue"
          style={{ backgroundColor: "beige" }}
          showText={true}
        ></MyDiv>
      </>
    </div>
  );
}

function DataList({ refKey, data, setData }) {
  console.log("props.refKey", refKey);

  const prevRefKey = useRef(refKey);

  useEffect(() => {
    prevRefKey.current = JSON.stringify(data);
  }, [data]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "20px 0",
      }}
    >
      <div>
        Current data:
        <ul style={{ width: 300 }}>
          {data.map((item) => (
            <li key={item.country}>{item.country}</li>
          ))}
        </ul>
      </div>
      <div>
        Previous Data:
        <ul style={{ width: 300 }}>
          {JSON.parse(prevRefKey.current).map((item) => (
            <li key={item.country}>{item.country}</li>
          ))}
        </ul>
      </div>

      <Button colorScheme="orange" onClick={() => setData(NEWDATA)}>
        Set new data
      </Button>
    </div>
  );
}

function Message(props) {
  const [count, setCount] = useState(0);

  const buttonOnClick = () => {
    console.log("click");
    setCount((previousCount) => previousCount + 1);
  };

  return (
    <div>
      {props.children}
      <hr />
      <div style={{ margin: "20px 0" }}>
        <h6>count: {count}</h6>
        <MyButton buttonText="counter" buttonOnClick={buttonOnClick}></MyButton>
      </div>
    </div>
  );
}

function MyButton({ buttonText, buttonOnClick }) {
  return (
    <Button color={"teal"} onClick={buttonOnClick}>
      {buttonText}
    </Button>
  );
}

MyButton.propTypes = {
  buttonText: PropTypes.string,
  buttonOnClick: PropTypes.func.isRequired,
};

function MyDiv({ classname = "", showText = false, ...otherProps }) {
  return (
    <div className={`bold-800 ${classname}`} {...otherProps}>
      {showText
        ? "Donec leo mauris, dapibus et aliquam quis, laoreet eu justo. Donec tempor rhoncus neque a consectetur. Sed id dolor quis nulla sollicitudin facilisis sit amet a lorem. Quisque et leo a ex finibus ullamcorper. Aliquam erat volutpat. Maecenas sed mauris sed turpis tincidunt lacinia. Sed non orci lectus."
        : null}
    </div>
  );
}
