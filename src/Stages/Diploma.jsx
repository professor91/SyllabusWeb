import ProgrammesGrid from "../Components/Stages/Stages";

const Diploma = () =>{
    return(
        <div class="container syllabus-container">
            <ProgrammesGrid
            heading= "Science"
			type= "dipsci"
            />

            <ProgrammesGrid
            heading="Arts"
			type= "diparts"
            />

            <ProgrammesGrid 
            heading="Language"
			type= "diplang"
            />

            <ProgrammesGrid 
            heading="Commerce & Management"
			type= "dipcomm"
            />
        </div>
    );
}

export default Diploma;