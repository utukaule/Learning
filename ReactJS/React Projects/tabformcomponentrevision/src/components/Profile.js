const Profile = ({ data, setData }) => {
  const { name, age, email } = data;
  const dataChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };
  return (
    <>
      <h3>Profile</h3>
      <div>
        <label htmlFor="">
          Name :{" "}
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => dataChange(e, "name")}
          />
        </label>
      </div>
      <div>
        <label htmlFor="">
          age :{" "}
          <input
            type="text"
            name="age"
            value={age}
            onChange={(e) => dataChange(e, "age")}
          />
        </label>
      </div>
      <div>
        <label htmlFor="">
          email :{" "}
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => dataChange(e, "email")}
          />
        </label>
      </div>
    </>
  );
};

export default Profile;
