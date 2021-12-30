// import react from "react";
import "./CourseList.css"

const CourseList = (props) => {
    const blockc= props.typeName+" course-block"
    const blockid= props.typeName+"-block"
    const listblockc= "list-block "+props.bgcolor
    var block

    if (props.type === "1"){
        block= <CourseListBlock1 
                        courses= {props.courses}
                        />
    }
    else if(props.type === "3"){
        return(
                <CourseListBlock3 
                        typeName= {props.typeName}
                        heading= {props.heading}
                        courses= {props.courses}
                        />
        )
    }
    else{
        block= <CourseListBlock2
                        courses= {props.courses}
                        count= {props.count}
                        typeName= {props.typeName}
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
        <div className={blockc} itemID={blockid}>
            <div className={listblockc}>
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
    const courselistc= props.typeName+"-course-list flex-2"
    const courses= props.courses
    const final= []
    
    for (let course of courses){
        final.push(
                <div className="course-name">
                    <a href="/">{course}</a>
                </div>
                )
    }

    return(
        <div className={courselistc}>
            {final}
        </div>
    )
}

const CourseListBlock2 = (props) => {
    const courselistc= props.typeName+"-course-list flex-2"
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
                    <a href="/">{course}</a>
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
        <div className={courselistc}>
            {final}
        </div>

    )
}

const CourseListBlock3 = (props) => {
    const blockc= props.typeName
    const blockid= props.typeName+"-block"
    const listblockc= "bg-f5f5f5"
    
    const courselistc= props.typeName+" flex-2"
    const courses= props.courses
    const final= []

    for (let course of courses){
        final.push(
                <div className="course-name">
                    <a href="/">{course}</a>
                </div>
                )
    }

    return(
        <div 
            className={blockc} 
            itemID={blockid}
            style={{paddingTop: 20}}>
            <div className={listblockc}>
                <h2>{props.heading}</h2>
                <p 
                    style={{fontsize: 20, paddingBottom: 15}}>
                        A General Elective course is chosen generally from an other unrelated 
                        discipline/subject, with an intention to seek exposure in fields apart 
                        from the chosen discipline.
                </p>
                <div className="d-flex">
                    <div className={courselistc}>
                        {final}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseList