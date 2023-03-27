const Filter = ({ changeFilter, filter }) => {
  return (
    <div>
      <h2>Find contacts by name</h2>
      <label>
        <input
          onChange={changeFilter}
          type="text"
          value={filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      </label>
    </div>
  );
};

export default Filter;
