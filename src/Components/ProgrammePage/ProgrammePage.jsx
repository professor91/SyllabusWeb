import CourseTable from "./CourseTable/CourseTable"
import CourseList from "./CourseList/CourseList"

const Programmepage = (props) =>{

    const jsonData= props.jsonData

    return (
        <section className= "container">
            <CourseTable
                courseType= {jsonData["meta"]["courseType"]}
                programName=  {jsonData["meta"]["programmeName"]}
                corecourse= {jsonData["core"]}
            />

            <div className="course-list">
                <CourseList 
                typeName="dsc"
                heading="Discipline Specific Core Course (DSC)"
                courses={jsonData["dsc"]["list"]}
                credits={jsonData["meta"]["credits"]["dsc"]}
                type={jsonData["meta"]["type"]["dsc"]}
                bgcolor="bgcolor-f5f5f5"
                />

                <CourseList 
                typeName="sec"
                heading="Skill Enhancement Course (SEC)"
                courses={jsonData["sec"]["list"]}
                credits={jsonData["meta"]["credits"]["sec"]}
                type={jsonData["meta"]["type"]["sec"]}
                bgcolor=""
                />

                <CourseList 
                typeName="dse"
                heading="Elective Discipline Specific Course (DSE)"
                courses={jsonData["dse"]["list"]}
                credits={jsonData["meta"]["credits"]["dse"]}
                type={jsonData["meta"]["type"]["dse"]}
                bgcolor="bgcolor-f5f5f5"
                />

                <CourseList 
                typeName="aecc"
                heading="Ability Enhancement Compulsory Course (AECC)"
                courses= {jsonData["aecc"]["list"]}
                credits= {jsonData["meta"]["credits"]["aecc"]}
                bgcolor=""
                />

                <CourseList 
                typeName="ge"
                heading="Generic Elective (GE)"
                courses= {jsonData["ge"]["list"]}
                credits= {jsonData["meta"]["credits"]["ge"]}
                bgcolor="bgcolor-f5f5f5"
                />

                <CourseList
                type="ge"
                typename="department-ge"
                heading="Generic Elective offered to other discipline students"
                courses= {jsonData["deptge"]["list"]}
                />
            </div>
        </section>
      );
}

export default Programmepage;