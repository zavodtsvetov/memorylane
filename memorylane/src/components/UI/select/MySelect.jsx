const MySelect = ({ options, defaultValue }) => {
  return (
    <>
      <div>
        <select name="" id="">
          <option disabled value="">
            {defaultValue}
          </option>
          {options.map((option) => (
            <option value={option.value}>{option.name}</option>
          ))}
        </select>
      </div>
    </>
  );
};
export default MySelect;
