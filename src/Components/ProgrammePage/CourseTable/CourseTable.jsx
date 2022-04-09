import React from 'react'
import './CourseTable.css'

// For Hons Courses
const CourseTable = (props) => {
    console.log(props)

    if (props.courseType==="hons"){
        // For Hons
        return (
            <div className="course-table">
                <h2
                    className="color-FF914D">
                    {props.programName}
                </h2>

                <table className="syllabus-table">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Semester</th>
                            <th><a href="#dse">Discipline Specific Core Course</a></th>
                            <th><a href="#aecc">Ability Enhancement Compulsory Course</a></th>
                            <th><a href="#sec">Skill Enhancement Course</a></th>
                            <th><a href="#dsc">Elective Discipline Specific Course</a></th>
                            <th><a href="#ge">Generic Elective</a></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Ist Year */}
                        <tr>
                            <td>I</td>
                                <td className="text-align-center">1</td>
                                    <td>{props.corecourse[0]}</td>
                                    <td className="text-align-center">AECC-1</td>
                                    <td></td>
                                    <td></td>
                                    <td className="text-align-center">GE-1</td>
                        </tr>
                        <tr className="course-divider">
                            <td></td>
                                <td></td>
                                    <td>{props.corecourse[1]}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                        </tr>
                        <tr>
                            <td></td>
                                <td class="text-align-center">2</td>
                                    <td>{props.corecourse[2]}</td>
                                    <td class="text-align-center">AECC-2</td>
                                    <td></td>
                                    <td></td>
                                    <td class="text-align-center">GE-2</td>
                        </tr>
                        <tr className="sem-divider">
                            <td></td>
                                <td></td>
                                    <td>{props.corecourse[3]}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                        </tr>
                        {/* IInd Year */}
                        <tr>
                            <td>II</td>
                                <td class="text-align-center">3</td>
                                    <td>{props.corecourse[4]}</td>
                                    <td></td>
                                    <td class="text-align-center">SEC-1</td>
                                    <td></td>
                                    <td class="text-align-center">GE-3</td>
                        </tr>
                        <tr>
                            <td></td>
                                <td></td>
                                    <td>{props.corecourse[5]}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                        </tr>
                        <tr class="course-divider">
                            <td></td>
                                <td></td>
                                    <td>{props.corecourse[6]}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                        </tr>
                        <tr>
                            <td></td>
                                <td class="text-align-center">4</td>
                                    <td>{props.corecourse[7]}</td>
                                    <td></td>
                                    <td class="text-align-center">SEC-2</td>
                                    <td></td>
                                    <td class="text-align-center">GE-4</td>
                        </tr>
                        <tr>
                            <td></td>
                                <td></td>
                                    <td>{props.corecourse[8]}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                        </tr>
                        <tr class="sem-divider">
                            <td></td>
                                <td></td>
                                    <td>{props.corecourse[9]}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                        </tr>
                        {/* IIIrd Year */}
                        <tr>
                            <td>III</td>
                                <td class="text-align-center">5</td>
                                    <td>{props.corecourse[10]}</td>
                                    <td></td>
                                    <td></td>
                                    <td class="text-align-center">DSC-1</td>
                                    <td></td>
                        </tr>
                        <tr class="course-divider">
                            <td></td>
                                <td></td>
                                    <td>{props.corecourse[11]}</td>
                                    <td></td>
                                    <td></td>
                                    <td class="text-align-center">DSC-2</td>
                                    <td></td>
                        </tr>
                        <tr>
                            <td></td>
                                <td class="text-align-center">6</td>
                                    <td>{props.corecourse[12]}</td>
                                    <td></td>
                                    <td></td>
                                    <td class="text-align-center">DSC-3</td>
                                    <td></td>
                        </tr>
                        <tr>
                            <td></td>
                                <td></td>
                                    <td>{props.corecourse[13]}</td>
                                    <td></td>
                                    <td></td>
                                    <td class="text-align-center">DSC-4</td>
                                    <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
    
    else{
        // For Programmes
        return (
            <div className="course-table">
                <h2
                    className="color-FF914D">
                    {props.programName}
                </h2>

                <table className="syllabus-table">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Semester</th>
                            <th><a href="/">Discipline Specific Core Course</a></th>
                            <th><a href="/">Ability Enhancement Compulsory Course</a></th>
                            <th><a href="/">Skill Enhancement Course</a></th>
                            <th><a href="/">Elective Discipline Specific Course</a></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Ist Year */}
                        <tr>
                            <td>I</td>
                                <td className="text-align-center">1</td>
                                    <td>{props.corecourse[0]}</td>
                                    <td className="text-align-center">AECC-1</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                        </tr>
                        <tr>
                            <td></td>
                                <td></td>
                                    <td>{props.corecourse[1]}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                        </tr>
                        <tr className="course-divider">
                            <td></td>
                                <td></td>
                                    <td>{props.corecourse[2]}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                        </tr>
                        <tr>
                            <td></td>
                                <td className="text-align-center">2</td>
                                    <td>{props.corecourse[3]}</td>
                                    <td className="text-align-center">AECC-2</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                        </tr>
                        <tr>
                            <td></td>
                                <td></td>
                                    <td>{props.corecourse[4]}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                        </tr>
                        <tr className="sem-divider">
                            <td></td>
                                <td></td>
                                    <td>{props.corecourse[5]}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                        </tr>
                        {/* IInd Year */}
                        <tr>
                            <td>II</td>
                                <td className="text-align-center">3</td>
                                    <td>{props.corecourse[6]}</td>
                                    <td></td>
                                    <td class="text-align-center">SEC-1</td>
                                    <td></td>
                                    <td></td>
                        </tr>
                        <tr>
                            <td></td>
                                <td></td>
                                    <td>{props.corecourse[7]}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                        </tr>
                        <tr className="course-divider">
                            <td></td>
                                <td></td>
                                    <td>{props.corecourse[8]}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                        </tr>
                        <tr>
                            <td></td>
                                <td className="text-align-center">4</td>
                                    <td>{props.corecourse[9]}</td>
                                    <td></td>
                                    <td className="text-align-center">SEC-2</td>
                                    <td></td>
                                    <td></td>
                        </tr>
                        <tr>
                            <td></td>
                                <td></td>
                                    <td>{props.corecourse[10]}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                        </tr>
                        <tr className="sem-divider">
                            <td></td>
                                <td></td>
                                    <td>{props.corecourse[11]}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                        </tr>
                        {/* IIIrd Year */}
                        <tr>
                            <td>III</td>
                                <td class="text-align-center">5</td>
                                    <td></td>
                                    <td></td>
                                    <td className='text-align-center'>SEC-3</td>
                                    <td className="text-align-center">DSC-1</td>
                                    <td></td>
                        </tr>
                        <tr>
                            <td></td>
                                <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="text-align-center">DSC-2</td>
                                    <td></td>
                        </tr>
                        <tr className="course-divider">
                            <td></td>
                                <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="text-align-center">DSC-3</td>
                                    <td></td>
                        </tr>
                        <tr>
                            <td></td>
                                <td className="text-align-center">6</td>
                                    <td></td>
                                    <td></td>
                                    <td className='text-align-center'>SEC-4</td>
                                    <td className="text-align-center">DSC-4</td>
                                    <td></td>
                        </tr>
                        <tr className="course-divider">
                            <td></td>
                                <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="text-align-center">DSC-5</td>
                                    <td></td>
                        </tr>
                        <tr>
                            <td></td>
                                <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="text-align-center">DSC-6</td>
                                    <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CourseTable;