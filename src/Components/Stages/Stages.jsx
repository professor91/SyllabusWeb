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

const ProgrammesGrid= (props) => {
    var jsonData

    if (props.type=== "bsc") {
        jsonData= require('../../database/programmes/ug/bsc.json')
    }
    else if (props.type=== "ba") {
        jsonData= require('../../database/programmes/ug/ba.json')
    }
    else if (props.type=== "balang") {
        jsonData= require('../../database/programmes/ug/balang.json')
    }
    else if (props.type=== "comm") {
        jsonData= require('../../database/programmes/ug/comm.json')
    }

    else if (props.type=== "msc") {
        jsonData= require('../../database/programmes/pg/msc.json')
    }
    else if (props.type=== "ma") {
        jsonData= require('../../database/programmes/pg/ma.json')
    }
    else if (props.type=== "malang") {
        jsonData= require('../../database/programmes/pg/malang.json')
    }
    else if (props.type=== "mcomm") {
        jsonData= require('../../database/programmes/pg/comm.json')
    }

    const final= jsonData["Courses"]

    return(
        <div class="container">
            <div class="programme-grid-header"> {props.heading} </div>
            <div class="programme-grid">
                {/* List of All Courses */}
                {
                    final.map(
                        prog => 
                            <div 
                                class="programme-grid-item">
                                <a 
                                    href={"/programmes/ug/"+prog[1]}>
                                    {prog[0]}
                                </a>
                            </div>
                    )
                }
            </div>
        </div>
    );

}

export default ProgrammesGrid;