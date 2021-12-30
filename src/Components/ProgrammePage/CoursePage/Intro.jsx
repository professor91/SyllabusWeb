import React from "react";
import './Intro.css'

const Intro = (props) => {
    return (
        <div
            class="container course-intro"
            style="padding-bottom: 25px;">
            <h2
                style= {{color: "#FF914D"}}>
                {props.heading}
            </h2>
            <p 
                style="padding-top: 8px;">
                {props.content}
            </p>
        </div>
    )
}