const Setttings = ({ data, setData }) => {
  const { settings } = data;

  const handleDataChange = (e) => {
    setData((prevState) => ({ ...prevState, settings: e.target.name }));
  };
  return (
    <div>
      <h1>Setttings</h1>
      <div>
        <label htmlFor="">
          <input
            type="radio"
            name="dark"
            checked={settings === "dark"}
            onChange={handleDataChange}
          />
          Dark
        </label>
      </div>
      <div>
        <label htmlFor="">
          <input
            type="radio"
            name="light"
            checked={settings === "light"}
            onChange={handleDataChange}
          />
          Light
        </label>
      </div>
    </div>
  );
};

export default Setttings;
