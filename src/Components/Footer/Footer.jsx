import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
    <div className="footer bg-black">
        <div className="footer-content container d-flex justify-content-evenly">
            <div className="f-box f-about">
                <h3>About</h3>
                <p>The website aims to present syllabus of all the courses, 
                    offered Delhi University, in a more interactive manner than pdfs.</p>
            </div>
            <div className="f-box f-courses">
                <h3>Courses</h3>
                <div 
                    className="f-courses-list d-flex justify-content-between">
                    <div>
                        <div>UG Courses</div>
                        <div>Certificates</div>
                        <div>PhD</div>
                    </div>
                    <div>
                        <div>PG Courses</div>
                        <div>Diploma</div>
                    </div>
                </div>
            </div>
            <div className="f-box f-contact">
                <h3>Contact</h3>
                <p>Email: <a
                            href="mailto:keshavandteam@gmail.com">
                            keshavandteam@gmail.com
                        </a>
                </p>
            </div>
        </div>
    </div>
    );
}

export default Footer;
