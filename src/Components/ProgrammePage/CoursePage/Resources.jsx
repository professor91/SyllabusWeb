import React from "react";
import './Resources.css'

const Resources = (props) => {

    const listyle= {
        paddingBottom: "5px"
    }

    const resourceItem= props.rlist
    const final= []

    for (var item in resourceItem) {
        final.push(
            <li style={listyle}>
                {item}
            </li>
        )
    }
    return (
        <div
            class="container"
            style="padding-top: 25px;">
            <h2>
                {props.heading}
            </h2>
            <div class="resources">
                <ul>
                    {final}
                </ul>
            </div>
        </div>
    );
}

export default Resources