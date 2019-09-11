import React from 'react';

import classes from './NavigationItems.module.css';

import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>Home</NavigationItem>
    <NavigationItem link="/bio">Bio</NavigationItem>
    <NavigationItem link="/professional-experience">Professional Experience</NavigationItem>
  </ul>

);

export default navigationItems;
