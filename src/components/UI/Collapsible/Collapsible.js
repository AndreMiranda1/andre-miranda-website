import React, { useState } from 'react';

import classes from './Collapsible.module.css';

const Collapsible = props => {
  const [show, setShow] = useState(false);

  const toggleCollapsible = () => {
    setShow(currentShow => setShow(!currentShow));
  };

  const content = (
    <div className={classes.CollapsibleContent}>
      {props.children}
    </div>
  );

  return (
    <div className={classes.Wrapper}>
      <div className={classes.CollapsibleHeader}>
        <div className={classes.Title} onClick={toggleCollapsible}>
          <h4>{props.title}</h4>
        </div>
      </div>
      {show ? content : null}
    </div>
  );
}

export default Collapsible;
