import { useState, useEffect } from "react";

export function PutApi() {
  const [details, setDetails] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    connect();
  }, []);

  //GEt Fetching the data
  const connect = async () => {
    const url = "http://localhost:3000/users";
    let response = await fetch(url);
    response = await response.json();
    setDetails(response);
  };

  // DELETE remove user
  const handleDelete = async (id) => {
    const url = "http://localhost:3000/users/" + id;
    let response = await fetch(url, {
      method: "DELETE",
    });

    if (response.ok) {
      alert("User deleted Successfully");
      connect();
    } else alert("Failed to delete user");
  };

  // When Edit button is clicked
  const handleEdit = (user) => {
    setShowEdit(true);
    setName(user.name);
    setAge(user.age);
    setId(user.id);
  };

  // PUT update user
  const handleUpdate = async () => {
    const url = "http://localhost:3000/users/" + id;
    let response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify({ name, age, id }),
    });

    if (response.ok) {
      alert("User Updated Successfully");
      connect();
      resetForm();
    } else alert("Failed to update user");
  };

  const resetForm = () => {
    setName("");
    setAge("");
    setId("");
    setShowEdit(false);
    setIsEditMode(false);
  };

  return (
    <>
      <h2 style={{ margin: "20px 5px" }}>Current Users:</h2>
      {details &&
        details.map((num) => (
          <ul key={num.id}>
            <li style={{ marginLeft: "20px" }}>
              <h3>
                {num.name} , {num.age}
                &emsp;<button onClick={() => handleDelete(num.id)}>Delete</button>
                <button onClick={() => handleEdit(num)}>Edit</button>
              </h3>
            </li>
          </ul>
        ))}

      <br/> <hr/>

      {showEdit ? (
        <div>
          <input type="text" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} value={name} />
          <br/> <br/>
          <input type="text" placeholder="Enter Your Age" onChange={(e) => setAge(e.target.value)} value={age}/>
          <br/> <br/>
          <input type="text" placeholder="Enter Your Id" onChange={(e) => setId(e.target.value)} value={id} disabled={isEditMode} />
          <br /> <br />
          <button onClick={handleUpdate} style={{ marginLeft: "50px" }}> Update </button>
          <button onClick={resetForm} style={{ marginLeft: "10px" }}> Cancel </button>
        </div>
      ) : null}
    </>
  );
}
