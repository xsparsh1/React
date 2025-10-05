import { useRef } from "react";

function UncontrolledComp() {
  const Ref = useRef();
  const passRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.querySelector("#name1").value;
    const password = document.querySelector("#ph1").value;
    console.log("DOM method:", name, password);
  };

  const handleRefSubmit = (e) => {
    e.preventDefault();
    const name = Ref.current.value;
    const pass=passRef.current.value;
    console.log("useRef method:", name,pass);
  };

  const style = {
    display: "block",
    margin: "10px 0",
    padding: "5px",
    width: "250px",
  };

  return (
    <div style={{ marginLeft: "500px", marginTop: "20px" }}>
      {/* DOM Method */}
      <form onSubmit={handleSubmit}>
        <input style={style} type="text" id="name1" placeholder="Enter your name" />
        <input style={style} type="password" id="ph1" placeholder="Enter your password" />
        <button style={style} type="submit">Submit</button>
      </form>

      <br />

      {/* useRef Method */}
      <form onSubmit={handleRefSubmit}>
        <input style={style} ref={Ref} type="text" id="name2" placeholder="Enter your name" />
        <input style={style} ref={passRef} type="password" id="ph2" placeholder="Enter your password" />
        <button style={style} type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledComp;
