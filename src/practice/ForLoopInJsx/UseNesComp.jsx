function UseNesComp({data}){
    return(
        <div>
            <h3>Our college is {data.name} in {data.city}</h3>
            <h5>
                Our Students are:
                {
                    data.students.map((student,index)=>(
                        <p key={index}>{student.stname}</p>
                    ))
                }
            </h5>
        </div>
    )
}
export default UseNesComp;