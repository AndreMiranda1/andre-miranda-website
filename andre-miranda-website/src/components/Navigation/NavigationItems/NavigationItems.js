import React from 'react';

import classes from './NavigationItems.module.css';

import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>Home</NavigationItem>
    <NavigationItem link="/bio">Bio</NavigationItem>
    <NavigationItem link="/skills">Skills</NavigationItem>
    <NavigationItem link="/professional-experience">Professional Experience</NavigationItem>
    <NavigationItem link="/backgorund">Background</NavigationItem>
    <NavigationItem link="/personal-projects">Personal Projects</NavigationItem>
    <NavigationItem link="/find-me">Find me</NavigationItem>
  </ul>

);

export default navigationItems;
