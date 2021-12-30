import ProgrammesGrid from "../Components/Stages/Stages";

const Pg = () =>{
    return(
        <div class="container syllabus-container">
            <ProgrammesGrid
            heading= "MSc Courses"
            programmes= {[
                "M.Sc. Anthropology",
                "M.Sc. Applied Physics",
                "M.Sc. Biochemistry",
                "M.Sc. Biomedical Science",
                "M.Sc. Biophysics",
                "M.Sc. Biotechnology",
                "M.Sc. Botany",
                "M.Sc. Chemistry",
                "M.Sc. Computer Science",
                "M.Sc. Development Communication and Extension",
                "M.Sc. Electronics",
                "M.Sc. Environmental Science",
                "M.Sc. Food Nutrition",
                "M.Sc. Forensic Sciences",
                "M.Sc. Genetics",
                "M.Sc. Geology",
                "M.Sc. Home Science",
                "M.Sc. Informatics",
                "M.Sc. Mathematics",
                "M.Sc. Microbiology",
                "M.Sc. Physics",
                "M.Sc. Plant Molecular Biology",
                "M.Sc. Resource Management and Consumer Service",
                "M.Sc. Statistics",
                "M.Sc. Zoology",
                "M.Sc. Human Development and Child Welfare",
                "M.Sc. Fabric and Apparel Designing",
                "M.C.A.	Computer Applications"
            ]}
            />
            <ProgrammesGrid
            heading="MA Courses"
            programmes= {[
                "M.A. Applied Psychology",
                "M.A. Buddhist Studies",
                "M.A. Comparative indian Literature",
                "M.A. East Asian Studies",
                "M.A. Economics",
                "M.A. Environmental Studies",
                "M.A. Fine Arts and Painting",
                "M.A. Geography",
                "M.A. Hindustani Music Vocal/Instrumental",
                "M.A. History",
                "M.A. Karnataka Music Vocal/Instrumental",
                "M.A. Life Long Learning and Extension",
                "M.A. Mathematics",
                "M.A. Music",
                "M.A. Philosophy",
                "M.A. Political Science",
                "M.A. Psychology",
                "M.A. Social Work",
                "M.A. Sociology",
                "M.A. Statistics",
                "M.A. Yoga and Naturopathy",
                "M.B.E. Business Economics",
                "M.Ed. Education",
                "M.F.A. Fine Arts (Painting Applied Art Sculpture)",
                "M.Lib.Sc. Library and Information Science",
                "M.P.Ed. Physical Education"
            ]}
            />
            <ProgrammesGrid 
            heading="MA Courses (Language)"
            programmes= {[
                "M.A. Sanskrit",
                "M.A. Hindi",
                "M.A. Tamil",
                "M.A. Bengali",
                "M.A. Punjabi",
                "M.A. English",
                "M.A. Arabic",
                "M.A. Urdu",
                "M.A. Russian Studies",
                "M.A. Japanese",
                "M.A. Persian",
                "M.A. French/ German/ Hispanic/ Italian Studies",
                "M.A. Linguistics"
            ]}
            />
            <ProgrammesGrid 
            heading="Commerce & Management"
            programmes= {[
                "M.B.A.	Applied Psychology",
                "M.B.A.	Business Economics",
                "M.B.A.	Executive",
                "M.B.A.	Finance",
                "M.B.A.	Health Care Administration",
                "M.B.A.	Human Resource Management",
                "M.B.A.	International Business",
                "M.B.A.	Public Systems Management",
                "M.Com.	Commerce",
                "MFC Finance and Control",
                "M.H.R.D Human Resource Development"
            ]}
            />
        </div>
    );
}

export default Pg;