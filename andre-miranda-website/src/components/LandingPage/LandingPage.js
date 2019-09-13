import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './LandingPage.module.css';
import AndreImage from '../../assets/Andre_Miranda.jpg';


const LandingPage = props => {
  return(
    <div className={classes.Wrapper}>
        <h2 className={classes.Header}>André Miranda</h2>
        <div className={classes.AndreIntro}>
          <img src={AndreImage} alt="AndreImage" />
          <span>
            <p>Hey there! My name is André Miranda and I'm a Software Developer and Problem Solver.</p>
            <p>Welcome to my page, here you'll find some information about me, what I've been doing and latest projects.</p>
            <p>If you're looking for a resourceful Full Stack Engineer with an Analytics background to help you solving your problems,
             implementing your ideas and make things happen you should stick arround!</p>
            <NavLink className={classes.Link}
                    to="/find-me">
                    Here's how you can reach me.
            </NavLink>
          </span>
        </div>
    </div>
  );
}

export default LandingPage;
