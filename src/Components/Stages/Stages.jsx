import "./Stages.css"

const ProgrammesGrid= (props) => {
    const programmes= props.programmes
    const final= []
    
    for (let programme of programmes){
        final.push(
            <div 
                class="programme-grid-item">
                <a 
                    href="/ug/bschcs">
                    {programme}
                </a>
                </div>
        )
    }
    
    return(
        // List of All Courses 
        <div class="container">
            <div class="programme-grid-header"> {props.heading} </div>
            <div class="programme-grid">
                {final}
            </div>
        </div>
    );

}

export default ProgrammesGrid