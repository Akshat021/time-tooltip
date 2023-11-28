import { Tooltip } from "@mui/material";
import React from "react";

const Time = ({ date }) => {
  const formatDateTime = (dateTime) => {
    const currentDate = new Date();
    const createdDate = new Date(dateTime);
    let timeDifference = currentDate - createdDate;
    let isFuture = false;
    console.log(timeDifference)
    if(timeDifference < 0){
      isFuture = true;
      timeDifference *= -1; 
    }
    if (timeDifference === 1000) {
      return "Just now";
    }
    else if (timeDifference < 60 * 1000) {
      const seconds = Math.floor(timeDifference / 1000);
      return `${isFuture ? 'In ' : ''}${seconds} second${seconds !== 1 ? "s" : ""}${isFuture ? '' : ' ago'}`;
    }
    else if (timeDifference < 60 * 60 * 1000) {
      const minutes = Math.floor(timeDifference / (60 * 1000));
      const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);
      return `${isFuture ? 'In ' : ''}${minutes} minute${minutes !== 1 ? "s" : ""} and ${seconds} second${seconds !== 1 ? "s" : ""}${isFuture ? '' : ' ago'}`;
    }
    else if (timeDifference < 24 * 60 * 60 * 1000) {
      const hours = Math.floor(timeDifference / (60 * 60 * 1000));
      return `${isFuture ? 'In ' : ''}${hours} hour${hours !== 1 ? "s" : ""}${isFuture ? '' : ' ago'}`;
    }
    else if (timeDifference < 7 * 24 * 60 * 60 * 1000) {
      const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
      if (days === 1 && !isFuture) {
        return isFuture ? "Tomorrow" : "Yesterday";
      } else {
        const sameYear = currentDate.getFullYear() === createdDate.getFullYear();
        const monthName = createdDate.toLocaleString("default", { month: "long" });
        if (sameYear) {
          const date = createdDate.getDate();
          return `${date} ${monthName}`;
        } else {
          const year = createdDate.getFullYear();
          return `${monthName} ${year}`;
        }
      }
    }
    else if (timeDifference < 12 * 30 * 24 * 60 * 60 * 1000) {
      const weeks = Math.floor(timeDifference / (7 * 24 * 60 * 60 * 1000));
      return `${isFuture ? 'In ' : ''}${weeks} week${weeks !== 1 ? "s" : ""}${isFuture ? '' : ' ago'}`;
    }

    const year = createdDate.getFullYear();
    const monthName = createdDate.toLocaleString("default", { month: "long" });
    return `${monthName} ${year}`;
  };

  return (
    // <Tooltip sx={{color : "blue"}} key={date.getTime()} title={JSON.stringify(date.toLocaleString())} placement="top">
    <Tooltip
      title={new Date(date).toLocaleString(undefined, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // This ensures 24-hour format
      })}
      placement="top"
    >
      <span key={date}>{formatDateTime(date)}</span>
    </Tooltip>
  )
}
export default Time;