import { useState, useEffect } from "react"
const DropDown = ({ options, selected, onSelectedChange }) => {

  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.addEventListener('click', () => { console.log('body clicked'); setOpen(false) }, { capture: true })
  }, [])

  const renderedOptions = options.map((op) => {
    if (op.value == selected.value) {
      return null
    }
    return (
      <div key={op.value} className="item" onClick={() => { console.log('item clicked'); onSelectedChange(op) }}>
        {op.label}
      </div>
    )
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div onClick={() => { console.log('dropdown clicked'); setOpen(!open) }} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
