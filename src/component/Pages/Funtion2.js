import dateFormat from "dateformat";
import { useEffect, useState } from "react";
import "./Styles/Funtion2.css"

function Funtion2() {
  const date = "2020-08-10T14:54:52+07:00";
  const dateFormat1 = dateFormat(date, "dd/mm/yyyy HH:MM");
  const datelong = dateFormat(date, "mmm d, yyyy	");
  const dateTime = new Date(date).getTime();
  const dateFormatDate = new Date(datelong);
  const timestamp = Math.floor(dateTime / 1000);
  const getdayinmonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };
  const dateThai = dateFormatDate.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const monthQuarter = new Date(dateTime).getMonth();

  const quarter = Math.floor((monthQuarter + 3) / 3);

  return (
    <>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <h1>Test Function 2</h1>
        <div className="detail">
          <p>"2020-08-10T14:54:52+07:00"</p>
          <p>{dateFormat1}</p>
          <p>{dateThai}</p>
          <p>จำนวนวัน</p>
          <p>{getdayinmonth(8, 2020)}</p>
          <p>ไตรมาตรของเดือน</p>
          <p> {quarter}</p>
          <p>{timestamp}</p>
        </div>
      </div>
    </>
  );
}
export default Funtion2;
