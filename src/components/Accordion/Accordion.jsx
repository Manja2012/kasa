import React, { useState } from "react";
import style from "./Accordion.module.scss"; 

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={style.accordion}>
            <div className={style.accordion__top} onClick={() => setIsOpen(!isOpen)}>
                <span>{title}</span>
                <img className={isOpen ? style.open : ""} src="/top.svg" alt="accordéon" />
            </div>
            <div className={`${style.accordion__bottom} ${isOpen ? style.open : ""}`}>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Accordion;
