import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import './Styles/Funtion3.css'

function Funtion3() {
  const { handleSubmit, register } = useForm();
  const [number, setNumber] = useState([]);
  const onSubmit = (data) => {
    const result = data.dataArray.toString().split(",");
    if (result[0].length>0) {
       let max = Math.max(...result);
       for (let i = 0; i < result.length; i++) {
         let secondHighest = 0;
         if (result[i] < max && result[i] > secondHighest) {
           secondHighest = result[i];
           setNumber(secondHighest);
         }
       }
    } else {
      setNumber('null');
    }
  };
 
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Funtion3</h1>
        <Form onSubmit={handleSubmit(onSubmit)} className="formDetail">
          <div className="detailFuntion3">
            <label>กรอกข้อมูลArray</label>
            <span>ตัวอย่าง 1,2,3,4,5</span>
            <input
              type="text"
              {...register("dataArray", {})}
              name="dataArray"
            ></input>
            <p style={{ margin: "5px" }}> max อันดับที่ สอง {number}</p>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Funtion3;
