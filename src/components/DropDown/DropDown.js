const DropDown = ({ options, selected, onSelectedChange }) => {
  const renderedOptions = options.map((op) => (
    <div key={op.value} className="item" onClick={() => onSelectedChange(op)}>
      {op.label}
    </div>
  ));
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className="menu visible transition">{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
