import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Background.module.css';
import ULImage from '../../assets/ulisboa.png';


const Background = props => {

  return (
    <div className={classes.Background}>
      <h2>Background</h2>

      <p>
        Since I started learning, I always demonstrated my talent in the natural sciences,
        more specifically in Physics, Mathematics and Chemistry.
        <br />
        <br />
        At the same time I developed an interest in coding.
        <br />
        I started learning Java in High School,
        then in my Bachelor's Programming course I continued with C++ and reached a 19/20 mark.
        After that I continue using mostly Matlab while studying.
        <br />
        It was during my Master's that I started learning Python by myself, and after I started working
        I kept the ball rolling and learning more and more on these subjects. As I describe in the <NavLink to="/skills">Skills Page</NavLink>.
        <br />
        <br />
        Below I present with more detail my University Degrees:
      </p>

      <div className={classes.Experience}>
        <div className={classes.ExperienceImage}>
          <img src={ULImage} alt="UniversityLisbon" />
        </div>
        <div className={classes.ExperienceDescription}>
          <h4>MSc Applied Mathematics to Business and Management - University of Lisbon</h4>
          <span className={classes.DateRange}>September 2015 - July 2017</span>
          <span className={classes.ExperienceDescriptionText}>
            <p>
            Final grade of 17/20, with a 18/20 grade in the Final Project about the rating model developed during my internship at Banco BPI. Top student.
            <br />
            Solid basis in statistics, modeling, economy and management.
            To underline the work done with algorithms and techniques, needed to solve problems in various fields and industries, from logistics to risk management.
            </p>
          </span>
        </div>
      </div>

      <div className={classes.Experience}>
        <div className={classes.ExperienceImage}>
          <img src={ULImage} alt="UniversityLisbon" />
        </div>
        <div className={classes.ExperienceDescription}>
          <h4>Bsc Engineering Physics / Applied Physics - University of Lisbon</h4>
          <span className={classes.DateRange}>September 2012 - July 2015</span>
          <span className={classes.ExperienceDescriptionText}>
            <p>
            Final grade of 15/20.
            <br />
            Main focus on modeling and simulation of processes and systems.
            Strong fundamentals in mathematics and physics, used in the comprehension of
            technological processes, physical phenomena and problems embracing various engineering branches.
            </p>
          </span>
        </div>
      </div>

    </div>
  );
}

export default Background;
