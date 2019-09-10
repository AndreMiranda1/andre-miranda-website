import React from 'react';

import classes from './NavigationItem.module.css';

const NavigationItem = (props) => (
  <li className={classes.NavigationItem}>
    {/*will be links*/}
    <div
      to={props.link} exact={props.exact}
      activeClassName={classes.active}>
      {props.children}
    </div>
  </li>

);

export default NavigationItem;
