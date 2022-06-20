import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "../../components/Form";
import PersonCard from "../../components/PersonCard";

export default function FormTest() {
  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState(null);

  function onFormSubmit(data) {
    console.log("🚀 ~ file: index.js ~ line 12 ~ onFormSubmit ~ data", data);
    setData(data);
    reset();
  }

  return (
    <div
      style={{ display: "flex", alignItems: "center", alignContent: "center" }}
    >
      <div style={{ width: "50%" }}>
        <Form
          onFormSubmit={onFormSubmit}
          reset={reset}
          register={register}
          handleSubmit={handleSubmit}
          watch={watch}
          formState={{ errors }}
        ></Form>
      </div>
      <div style={{ width: "50%" }}>
        {data ? <PersonCard personInfo={data}></PersonCard> : <div></div>}
      </div>
    </div>
  );
}
