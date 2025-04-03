import React from "react";
import "./Loading.css";

const Loading = ({ size = "medium" }) => {
    return (
        <div className={`loading-spinner ${size}`}>
            <div className="spinner">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
    );
};

export default Loading;
