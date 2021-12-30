import React from "react"
import './SyllabusTable.css'

const UnitsTable = (props) => {

    const units= props.units
    const final= []

    for (var unit in units) {
        final.push(
            <tr>
                <td>{unit.heading}</td>
                <td>{unit.desc}</td>
            </tr>
        )
    }

    return(
        <div
            class="container detailed-syllabus"
            style="padding-top: 25px">
            <h2>
                Detailed Syllabus
            </h2>
            <table class="units-table">
                <tbody>
                    {final}
                </tbody>
            </table>
        </div>
    );
}

export default UnitsTable;