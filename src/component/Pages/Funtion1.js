import axios from "axios";
import { da } from "date-fns/locale";
import { useEffect, useState } from "react";
import examfile from "../../file/exam-data.json";
import './Styles/Funtion1.css'

function Funtion1() {
  const [dataexam, setDataexam] = useState([]);
  const customData = require("../../file/exam-data.json");
  const getData = async(customData) => {
    var dataArray =[]
    customData.map((data, id) => {
      if (data.is_editable_price == false) {
        let weight = 0;
        let allData = {}
        for (let i in data.products) {
          weight += data.products[i].weight;
        }
        allData['name'] = data.name
        allData["totalSubProductWeight"] = weight
        dataArray.push(allData)
      }
    });
    setDataexam(dataArray)
  };

  useEffect(() => {
    getData(customData)
  }, []);
  if (!dataexam[0]) {
    return (
      <>
        loading....
      </>
    )
  }
  return (
    <>
      <div>
        <h1>Funtion1</h1>
        <div style={{display:'flex',justifyContent:'center'}}>
          <div className="detailFuntion1">
            <p>ชื่อ{dataexam[0].name}</p>
            <p>น้ำหนัก{dataexam[0].totalSubProductWeight}</p>
            <p>ชื่อ{dataexam[1].name}</p>
            <p>น้ำหนัก{dataexam[1].totalSubProductWeight}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Funtion1;
