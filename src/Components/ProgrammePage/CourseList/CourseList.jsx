import "./CourseList.css"

const CourseList = (props) => {
    var block

    if (props.type === "sublist"){
        block= <CourseListBlock2
                        courses= {props.courses}
                        count= {props.count}
                        typeName= {props.typeName}
                        />
    }
    else if(props.type === "ge"){
        return(
                <GECourseList 
                        typeName= {props.typeName}
                        heading= {props.heading}
                        courses= {props.courses}
                        />
        )
    }
    else{
        block= <CourseListBlock1 
                        courses= {props.courses}
                        />
    }
    
    // credits-box class
    var miscboxc
    if(props.bgcolor === "bgcolor-f5f5f5"){
        miscboxc= "misc-info-box bgcolor-fff"
    }
    else{
        miscboxc= "misc-info-box bgcolor-f5f5f5"
    }

    // returning the rendered component
    return(
        <div className={props.typeName+" course-block"} itemID={props.typeName+"-block"}>
            <div className={"list-block "+props.bgcolor}>
                <h2>{props.heading}</h2>
                <div className="d-flex">
                    
                    {/* List of Courses */}
                    {block}

                    {/* Credits Info */}
                    <div className="misc-info container-sm">
                        <ul className={miscboxc}>
                            {/* <li>Courses: {props.totalCourses}</li> */}
                            <li>Credits: {props.credits} each</li>
                            <li>Total Credits: {props.courses.length} * {props.credits} = {props.courses.length * props.credits}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

const CourseListBlock1 = (props) => {
    
    return(
        <div 
            className={props.typeName+"-course-list flex-2"}>
            {
                props.courses.map(
                    course =>
                        <div 
                            className="course-name">
                            <div>{course}</div>
                        </div>
                )
            }
        </div>
    )
}

const CourseListBlock2 = (props) => {
    const courses= props.courses
    var count= props.courses.length
    const semifinal= []
    const final= []

    for (var i=0; i<count; i++){
        semifinal.push(
            <p 
                className="font-style">
                {props.typeName.toUpperCase()}-{i+1}
            </p>
        )
        for(let course of courses[i]){
            semifinal.push(
                <div 
                    className="course-name left-margin">
                    <div>{course}</div>
                </div>
                ) 
        }

    }
    final.push(
        <div className= "{props.tyeName}-{count}">
            {semifinal}
        </div>
    )

    return(
        <div className={props.typeName+"-course-list flex-2"}>
            {final}
        </div>

    )
}

const GECourseList = (props) => {

    return(
        <div 
            className={props.typeName} 
            itemID={props.typeName+"-block"}
            style={{paddingTop: 20}}>
            <div className= "bg-f5f5f5">
                <h2>{props.heading}</h2>
                <p 
                    style={{fontsize: 20, paddingBottom: 15}}>
                        A General Elective course is chosen generally from an other unrelated 
                        discipline/subject, with an intention to seek exposure in fields apart 
                        from the chosen discipline.
                </p>
                <div className="d-flex">
                    <div className={props.typeName+" flex-2"}>
                        {
                            props.courses.map(
                                course =>
                                    <div className="course-name">
                                        <div>{course}</div>
                                    </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseList;