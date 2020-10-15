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
        Besides what it's here exposed I'm continuously learning.
      </p>

      <div className={classes.Project}>
        <h4>Website for Monitoring Prices - End to end developed by me</h4>
        <p>
            You can find a demonstration here:
            <br />
            <div class="embed-responsive embed-responsive-16by9">
                <iframe title="vigilante-video" width="560" height="315" src="https://www.youtube.com/embed/FnzAmVVFAls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <br />
            If it's offline at the moment it may happen that the credits in the cloud are over :( ping me for more details!
            <br />
            In this website you can monitor prices for the products that you wish and get notified when it reaches the best price for you.
            <br />
            It was fully developed by me with the following stack:
            <ul>
                <li>Python - Django</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>PostgreSQL</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>Google Cloud / MS Azure</li>
            </ul>
        </p>
      </div>

      <div className={classes.Project}>
        <h4>My Personal Website</h4>
        <p>
          You're here you're already aware of it, of course.
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
          Two of them are available on YouTube, one about <a rel="noopener noreferrer" target="_blank" className={classes.Link} href="https://youtu.be/BiNT_KlTolk">Image Recognition</a> and the other on <a rel="noopener noreferrer" target="_blank" className={classes.Link} href="https://youtu.be/H9u-3oPz8ZU">Self-Driving Cars</a>.
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
