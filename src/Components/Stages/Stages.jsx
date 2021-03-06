/* 
    Page which contains list of all {UG, PG, PhD, Certificate & Diploma programmes

    ProgrammeGrid component
                            final (list)
                                contains list of <a> tag where
                                    each <a> tag links to the main page of the programme
                                
                                href structure
                                    /{ug,pg,phd,certificate,diplome}/{name_of_the_programme}
*/

import "./Stages.css"
import { Link } from "react-router-dom"

const ProgrammesGrid= (props) => {
    var jsonData

    if (props.type=== "bsc") {
        jsonData= require('../../database/ug/bsc.json')
    }
    else if (props.type=== "ba") {
        jsonData= require('../../database/ug/ba.json')
    }
    else if (props.type=== "balang") {
        jsonData= require('../../database/ug/balang.json')
    }
    else if (props.type=== "comm") {
        jsonData= require('../../database/ug/comm.json')
    }

    else if (props.type=== "msc") {
        jsonData= require('../../database/pg/msc.json')
    }
    else if (props.type=== "ma") {
        jsonData= require('../../database/pg/ma.json')
    }
    else if (props.type=== "malang") {
        jsonData= require('../../database/pg/malang.json')
    }
    else if (props.type=== "mcomm") {
        jsonData= require('../../database/pg/comm.json')
    }

    else if (props.type=== "phdsci") {
        jsonData= require('../../database/phd/pureScience.json')
    }
    else if (props.type=== "phdengineering") {
        jsonData= require('../../database/phd/engineering.json')
    }
    else if (props.type=== "phdlang") {
        jsonData= require('../../database/phd/lang.json')
    }
    else if (props.type=== "phdarts") {
        jsonData= require('../../database/phd/arts.json')
    }

    else if (props.type=== "certisci") {
        jsonData= require('../../database/certificate/science.json')
    }
    else if (props.type=== "certiarts") {
        jsonData= require('../../database/certificate/arts.json')
    }
    else if (props.type=== "certilang") {
        jsonData= require('../../database/certificate/lang.json')
    }
    else if (props.type=== "certicomm") {
        jsonData= require('../../database/certificate/comm.json')
    }

    else if (props.type=== "dipsci") {
        jsonData= require('../../database/diploma/science.json')
    }
    else if (props.type=== "diparts") {
        jsonData= require('../../database/diploma/arts.json')
    }
    else if (props.type=== "diplang") {
        jsonData= require('../../database/diploma/lang.json')
    }
    else if (props.type=== "dipcomm") {
        jsonData= require('../../database/diploma/comm.json')
    }

    const final= jsonData["Courses"]

    return(
        <div className="container">
            <div className="programme-grid-header"> {props.heading} </div>
            <div className="programme-grid">
                {/* List of All Courses */}
                {
                    final.map(
                        prog => 
                            <div 
                                className="programme-grid-item"
                                key={prog[0]}>
                                <Link
                                    to={"/programmes/ug/"+prog[1]}>
                                    {prog[0]}
                                </Link>
                            </div>
                    )
                }
            </div>
        </div>
    );

}

export default ProgrammesGrid;