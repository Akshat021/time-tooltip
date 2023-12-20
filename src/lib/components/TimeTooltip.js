import { Tooltip } from "@mui/material";
import React from "react";

const Time = ({ date, style }) => {

    const formatDateTime = (dateTime) => {
        const currentDate = new Date();
        let createdDate;
        if(typeof dateTime === 'object' && dateTime instanceof Date) createdDate = dateTime;
        else createdDate = new Date(dateTime);
        const diff = currentDate - createdDate;
        if (diff < 60 * 1000) {
            const seconds = Math.floor(diff / 1000);
            return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
        } else if (diff < 60 * 60 * 1000) {
            const minutes = Math.floor(diff / (60 * 1000));
            const seconds = Math.floor((diff % (60 * 1000)) / 1000);
            return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
        } else if (diff < 24 * 60 * 60 * 1000) {
            const hours = Math.floor(diff / (60 * 60 * 1000));
            return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
        } else if (diff < 7 * 24 * 60 * 60 * 1000) {
            const days = Math.floor(diff / (24 * 60 * 60 * 1000));
            if (days === 1) {
                return "Yesterday";
            } else {
                const formattedDate = createdDate.toLocaleString("en-US", { day: "numeric", month: "long" });
                return formattedDate;
            }
        } else if (diff < 12 * 30 * 24 * 60 * 60 * 1000) {
            const months = Math.floor(diff / (30 * 24 * 60 * 60 * 1000));
            return `${months} month${months !== 1 ? "s" : ""} ago`;
        } else if (diff < 365 * 24 * 60 * 60 * 1000) {
            const year = createdDate.getFullYear();
            const month = createdDate.toLocaleString("en-US", { month: "long" });
            return `${month} ${year}`;
        } else {
            const years = Math.floor(diff / (365 * 24 * 60 * 60 * 1000));
            return `${years} year${years !== 1 ? "s" : ""} ago`;
        }
    };
  
    return (
        <Tooltip sx={{color : "blue"}} key={date.getTime()} title={JSON.stringify(date.toLocaleString())} placement="top">
            <span  key={date}>{formatDateTime(date)}</span>
        </Tooltip>
    )
}
export default Time;