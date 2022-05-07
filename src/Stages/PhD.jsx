import ProgrammesGrid from "../Components/Stages/Stages";

const PhD = () =>{
    return(
        <div class="container syllabus-container">
            <ProgrammesGrid
            heading= "Pure Science"
			type= "phdsci"
            />

            <ProgrammesGrid
            heading="Engineering"
			type= "phdengineering"
            />

            <ProgrammesGrid 
            heading="Language"
			type= "phdlang"
            />

            <ProgrammesGrid 
            heading="Arts"
			type= "phdarts"
            />
        </div>
    );
}

export default PhD;