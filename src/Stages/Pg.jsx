import ProgrammesGrid from "../Components/Stages/Stages";

const Pg = () =>{
    return(
        <div class="container syllabus-container">
            <ProgrammesGrid
            heading= "MSc Courses"
            type= "msc"
            />

            <ProgrammesGrid
            heading="MA Courses"
            type= "ma"
            />
            
            <ProgrammesGrid 
            heading="MA Courses (Language)"
            type= "malang"
            />

            <ProgrammesGrid 
            heading="Commerce & Management"
            type= "mcomm"
            />
        </div>
    );
}

export default Pg;