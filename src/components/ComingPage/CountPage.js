import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../HomePage/HomePage.scss";
import DateCountdown from 'react-date-countdown-timer';
import Count from "./Count";
export default function CountPage() {

  return (
    <div className="count-wrap">
      <div className="count-new">
        <Count />
      </div>
  
    </div>
  );
}
