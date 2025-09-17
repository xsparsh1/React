function VarUse(){
    let name = "Sparsh";
    let age = 20;
    let birthYear=2025-age;
    function letsadd(){
        return 20+birthYear;
    }
    return (
        <div>
            <h1>
                Hello {name}
            </h1>
            <h3>I was born in {birthYear}, current year is {letsadd()} </h3>
        </div>
    );
}

export default VarUse;