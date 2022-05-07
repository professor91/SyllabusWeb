import ProgrammesGrid from "../Components/Stages/Stages";

const Certificate = () => {
    return(
        <div class="container syllabus-container">
            <ProgrammesGrid
            heading= "Science"
			type= "certisci"
            />

            <ProgrammesGrid
            heading="Arts"
			type= "certiarts"
            />

            <ProgrammesGrid 
            heading="Language"
			type= "certilang"
            />

            <ProgrammesGrid 
            heading="Commerce & Management"
			type= "certicomm"
            />
        </div>
    );
}

export default Certificate;