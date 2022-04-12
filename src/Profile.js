import React, { useState } from "react";
import Moment from "moment";
import moment from "moment";
import DatePicker from "react-date-picker";

const Profile = () => {
  const [value, setValue] = useState(new Date());
  var Data = Moment().format();
  var a = moment(new Date());
var b = moment([1998]);
 var c=a.diff(b, 'years');   
     console.log("years",c)
//a.diff(b, 'years', true)
  
  return (
    <div>
      <DatePicker onChange={setValue} value={value} />
      
      <h3>0.local time={Data}</h3>
      <p>1. birth = {Moment("19981027").format("MMMM YYYY Do ")} </p>
      <p>
        2. time date = {Moment().format(" MMMM YYYY Do LLLL")}{" "}
      </p>

      <p> 3.local = {Moment().format()} </p>

      <p> 4.Day = {Moment().format("dddd")} </p>
      <p>
        {" "}
        5.Date Year Month= {Moment().format("MMM Do YY")}{" "}
      </p>
      <p> 6.Year= {Moment().format("YYYY  ")} </p>
      <p> 7.Month= {Moment().format("MMMM")} </p>
      <p> 8.Month= {Moment().format("MM")} </p>
      <p> 10.DO= {Moment().format("Do")} </p>
      <p> 11.D= {Moment().format("D")} </p>
      <p> 12.d= {Moment().format("d")} </p>
      <p> 13.ddd= {Moment().format("ddd")} </p>
      <h2>14.calendar={Moment().calendar()}</h2>
      <p>second={Moment().second()}</p>
      <p> 3.local = {Moment().format( "DD/MM /YYYY hh:mm:ss")} </p>
      <p></p>
    </div>
  );
};

export default Profile;

