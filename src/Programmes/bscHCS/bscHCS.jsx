import CourseTable from "../../Components/ProgrammePage/CourseTable/CourseTable"
import CourseList from "../../Components/ProgrammePage/CourseList/CourseList"

const bscHCS = (props) =>{
    return (
        <section className= "container">
            <CourseTable
            courseType= "hons"
            programName=  "BSc Hons. Computer Science"
            corecourse1= "Programming Fundamentals Using C++"
            corecourse2= "Computer Science Architecture"
            corecourse3= "Programming in JAVA"
            corecourse4= "Discrete Structures"
            corecourse5= "Data Structure"
            corecourse6= "Operating System"
            corecourse7= "Computer Networks"
            corecourse8= "Design & Analysis of Algorithms"
            corecourse9= "Software Engineering"
            corecourse10= "Database Management Systems"
            corecourse11= "Internet Technologies"
            corecourse12= "Theory of Computation"
            corecourse13= "Artificial Intelligence"
            corecourse14= "Computer Graphics"
            />
            <div className="course-list">
                <CourseList 
                type= "1"
                typeName="dsc"
                heading="Discipline Specific Core Course (DSC)"
                courses= {[
                    "BHCS01 - Programming Fundamentals Using C++",
                    "BHCS02 - Computer Science Architecture",
                    "BHCS03 - Programming in JAVA",
                    "BHCS04 - Discrete Structures",
                    "BHCS05 - Data Structure",
                    "BHCS06 - Operating System",
                    "BHCS07 - Computer Networks",
                    "BHCS08 - Design & Analysis of Algorithms",
                    "BHCS09 - Software Engineering",
                    "BHCS10 - Database Management Systems",
                    "BHCS11 - Internet Technologies",
                    "BHCS12 - Theory of Computation",
                    "BHCS13 - Artificial Intelligence",
                    "BHCS14 - Computer Graphics"
                ]}
                credits="6"
                bgcolor="bgcolor-f5f5f5"
                />
                <CourseList 
                type="2"
                typeName="sec"
                heading="Skill Enhancement Course (SEC)"
                courses= {[
                    [
                    "BHCS19A - Web Design and Development",
                    "BHCS19B - Programming in Python"
                    ],
                    [
                    "BHCS20A - Android Programming",
                    "BHCS20B - Introduction to R Programming"
                    ]
                ]}
                credits="6"
                bgcolor=""
                />
                <CourseList 
                type="2"
                typeName="dse"
                heading="Elective Discipline Specific Course (DSE)"
                courses= {[
                    [
                    "BHCS15A - Data Analysis and Visualization",
                    "BHCS15B - System Programming",
                    "BHCS15C - Combinatorial Optimization"
                    ],
                    [
                    "BHCS16A - Digital Image Processing",
                    "BHCS16B - Microprocessors"
                    ],
                    [
                    "BHCS17A - Information Security",
                    "BHCS17B - Data Mining",
                    "BHCS17C - Advanced Algorithms"
                    ],
                    [
                    "BHCS18A - Machine Learning",
                    "BHCS18B - Deep Learning",
                    "BHCS18C - Unix Network Programming",
                    "BHCS18D - Project Work/ Dissertation"
                    ]
                ]}
                credits="6"
                bgcolor="bgcolor-f5f5f5"
                />
                <CourseList 
                type="1"
                typeName="aecc"
                heading="Ability Enhancement Compulsory Course (AECC)"
                courses= {[
                    "English",
                    "Environmental Science"
                ]}
                credits="4"
                bgcolor=""
                />
                <CourseList 
                type="1"
                typeName="ge"
                heading="Generic Elective (GE)"
                courses= {[
                    "GE-1",
                    "GE-2",
                    "GE-3",
                    "GE-4"
                ]}
                credits="6"
                bgcolor="bgcolor-f5f5f5"
                />
                <CourseList
                type="3"
                typename="department-ge"
                heading="Generic Elective offered to other discipline students"
                courses= {[
                    "GE1",
                    "GE2",
                    "GE3",
                    "GE4"
                ]}
                credits="6"
                />
            </div>
        </section>
      );
}

export default bscHCS