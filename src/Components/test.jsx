import React from 'react'
import './ProgrammePage/CourseTable/CourseTable.css'

const Test = (props) => {
    console.log(props);
    const courses= props.courses
    const final= []
    // const coursepack= []

    // const _year= ["I", "II", "III"]
    // var _sem= 1

    {/*
        [
            [ [ [Core], [AECC], [GE] ],         [ [Core], [AECC], [GE] ] ],
            [ [ [Core], [SEC],  [DSE], [GE] ],  [ [Core], [SEC], [DSE], [GE] ] ],
            [ [ [Core], [DSE] ],                [ [Core], [DSE] ] ]
        ]
    */}

    for (let course of courses){
        // console.log(course[3][0])
        final.push(
            <tr className={course[0][0]}>
                <td className="text-align-center">{course[0][1]}</td>
                    <td className="text-align-center">{course[1]}</td>
                        <td>{course[2]}</td>
                        <td className="text-align-center">{course[3]}</td>
                        <td className="text-align-center">{course[4]}</td>
                        <td className="text-align-center">{course[5]}</td>
                        <td className="text-align-center">{course[6]}</td>
            </tr>
        )
    }
    // for (let year of courses){
    //     // print(year)
    //     coursepack.push( <td>I</td> )
    //     // {_year[year]}
    //     for (let sem of year){
    //         // print(sem)
    //         coursepack.push( <td>{_sem}</td> )
    //         _sem+=1
    //         for (let courses of sem){
    //             // print(courses)
    //             // for(let course of courses){
    //                 coursepack.push(
    //                     <td className="text-align-center">{courses}</td>
    //                     )
    //             // }
    //         }
    //     }
    //     final.push(
    //         <tr>{coursepack}</tr>
    //     )
    // }

    return (
        <div className="course-table container">
            <h2
                className="color-FF914D">
                    Some Heading
            </h2>

            <tabel className="syllabus-table">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Semester</th>
                        <th><a href="">Discipline Specific Core Course</a></th>
                        <th><a href="">Ability Enhancement Compulsory Course</a></th>
                        <th><a href="">Skill Enhancement Course</a></th>
                        <th><a href="">Elective Discipline Specific Course</a></th>
                        <th><a href="">Generic Elective</a></th>
                    </tr>
                </thead>
                
                <tbody>
                    {final}
                </tbody>
            </tabel>
        </div>
    )

}

export default Test

          {/* <Test
          courses= {
            [
              [ ["","I"],               "1",  "Programming Fundamentals in C++",  "AECC-1",   "",         "",         "GE-1"],
              [ ["course-divider",""],  "",   "Computer Science Architecture",    "",         "",         "",         ""    ],
              [ ["",""],                "2",  "Programming in JAVA",              "AECC-1",   "",         "",         "GE-2"],
              [ ["sem-divider",""],     "",   "Discrete Structures",              "",         "",         "",         ""    ],
              [ ["","II"],              "3",  "Data Structure",                   "",         "SEC-1",    "",         "GE-3"],
              [ ["",""],                "",   "Operating System",                 "",         "",         "",         ""    ],
              [ ["course-divider",""],  "",   "Computer Networks",                "",         "",         "",         ""    ],
              [ ["",""],                "4",  "Design & Analysis of Algorithms",  "",         "SEC-2",    "",         "GE-4"],
              [ ["",""],                "",   "Software Engineering",             "",         "",         "",         ""    ],
              [ ["sem-divider",""],     "",   "Database Management Systems",      "",         "",         "",         ""    ],
              [ ["","III"],             "5",  "Internet Technologies",            "",         "",         "DSE-1",    ""    ],
              [ ["course-divider",""],  "",   "Theory of Computation",            "",         "",         "DSE-2",    ""    ],
              [ ["",""],                "6",  "Artificial Intelligence",          "",         "",         "DSE-3",    ""    ],
              [ ["",""],                "",   "Computer Graphics",                "",         "",         "DSE-4",    ""    ],
            ]
          } 
          /> */}
