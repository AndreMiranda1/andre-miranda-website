import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './PersonalProjects.module.css';


const PersonalProjects = props => {

  return (
    <div className={classes.PersonalProjects}>
      <h2>Personal Projects</h2>

      <p>
        Here I'll expose a bit of what I've been doing apart from work.
        <br />
        Besides what it's here exposed I'm continuously learning, right now
        I'm focused on the DevOps field, where I lack some knowledge.
      </p>

      <div className={classes.Project}>
        <h4>My Personal Website</h4>
        <p>
          If you're here you're already aware of it, of course.
          <br />
          This was totally developed by me, it's built with React and my first project
          using this framework after completing an online course on that.
          <br />
          Not perfect in terms of design and styling, but I think it's pretty good for my first Frontend experience!
          <br />
          You can find the code in my <NavLink to="/find-me">Github repo.</NavLink>
        </p>
      </div>

      <div className={classes.Project}>
        <h4>Cleverti Talks</h4>
        <p>
          Cleverti promote internal talks on diverse topics, where I presented a few on Machine Learning.
          One of them is available on <a rel="noopener noreferrer" target="_blank" className={classes.Link} href="https://youtu.be/BiNT_KlTolk">YouTube</a>.
        </p>
      </div>

      <div className={classes.Project}>
        <h4>Machine Learning and Data Science</h4>
        <p>
          My interest and curiosity took me to deepen my knowledge about these subjects, beyond the ones learned during my academic experience.
          <br />
          You can find some of my experiments in this field in my <NavLink to="/find-me">Github repo.</NavLink>
        </p>
      </div>

      <div className={classes.Project}>
        <h4>First Place in the MEDEA 5 Project</h4>
        <p>
          Project about electromagnetic fields in the quotidian environment and its relationship with the human health, organized by REN and the Portuguese Society of Physics.
          <br />
          The first place in this project allowed me to publish a poster in the National Conference of Physics 2014, in Lisbon.
        </p>
      </div>

    </div>
  );
}

export default PersonalProjects;
