import ProgrammesGrid from "../Components/Stages/Stages";

const Ug = () =>{
    return(
        <div className="container syllabus-container">
            <ProgrammesGrid
            heading= "BSc Courses"
			type= "bsc"
            />

            <ProgrammesGrid
            heading="BA Courses"
			type= "ba"
            />

            <ProgrammesGrid 
            heading="BA Courses (Language)"
			type= "balang"
            />

            <ProgrammesGrid 
            heading="Commerce & Management"
			type= "comm"
            />
        </div>
    );
}

export default Ug;