import React from 'react';

import classes from './SideDrawer.module.css';

import NavigationItems from '../NavigationItems/NavigationItems';


const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <div>
      {props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null}
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          something here
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </div>
  );
}

export default SideDrawer;
