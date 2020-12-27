import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [index, setIndex] = useState(null);
  const onTitleClick = (index) => {
    setIndex(index);
  };
  const renderedItem = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div className="title active" onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {renderedItem}
      <h1>{index}</h1>
    </div>
  );
};

export default Accordion;
