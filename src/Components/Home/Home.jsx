import "./Home.css"

const Home = () => {
    return(
        <div 
            className="container">
            <div 
                className="page-top">
                <div
                    className="d-flex flex-1">
                    <div
                        className= "margin-auto">
                        <h1>
                            Educating about Education
                        </h1>
                        <p
                            className="paragraph">
                            The website aims to present syllabus of all the courses, offered 
                            Delhi University, in a more interactive manner than pdfs.
                            {/* A one stop website for all Delhi University students be a
                            fresher, sophomore, senior or pursuing UG, PG, or PhD. */}
                        </p>
                    </div>
                </div>

                <div
                    className="d-flex flex-column justify-content-around right-box">
                    <div 
                        className="d-flex flex-row justify-content-around">
                        <div 
                            className="hero-box">
                            UG
                        </div>
                        <div 
                            className="hero-box">
                            PG
                        </div>
                    </div>
                    <div 
                        className="d-flex flex-row justify-content-around">
                        <div 
                            className="hero-box">
                            Certificate
                        </div>
                        <div 
                            className="hero-box">
                            Diploma
                        </div>
                    </div>
                    <div 
                        className="d-flex flex-row justify-content-around">
                        <div 
                            className="hero-box">
                            PhD
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;