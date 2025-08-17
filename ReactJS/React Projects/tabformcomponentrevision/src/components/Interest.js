const Interest = ({ data, setData }) => {
  const { interest } = data;
  const handleDataChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      interest: e.target.checked
        ? [...prevState.interest, e.target.name]
        : prevState.interest.filter((i) => i != e.target.name),
    }));
  };
  return (
    <>
      <div>
        <label htmlFor="">
          <input
            type="checkbox"
            name="football"
            checked={interest.includes("football")}
            onChange={handleDataChange}
          />{" "}
          Football
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            name="cooking"
            checked={interest.includes("cooking")}
            onChange={handleDataChange}
          />{" "}
          cooking
        </label>
      </div>
    </>
  );
};

export default Interest;
