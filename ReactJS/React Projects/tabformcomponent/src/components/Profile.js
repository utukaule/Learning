const Profile = ({ data, setData,errors }) => {
  const { name, age, email } = data;

  const dataChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };
  return (
    <div>
      User Profile
      <div>
        <label htmlFor="">
          Name :
          <input
            type="text"
            value={name}
            onChange={(e) => dataChange(e, "name")}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>
      </div>
      <div>
        <label htmlFor="">
          Age :
          <input
            type="number"
            value={age}
            onChange={(e) => dataChange(e, "age")}
          />
          {errors.age && <span className="error">{errors.age}</span>}
        </label>
      </div>
      <div>
        <label htmlFor="">
          Email :
          <input
            type="text"
            value={email}
            onChange={(e) => dataChange(e, "email")}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
      </div>
    </div>
  );
};

export default Profile;
