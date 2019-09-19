import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Skills.module.css';
import Collapsible from '../UI/Collapsible/Collapsible';

const Skills = props => {

  return (
    <div className={classes.Skills}>
      <h2 className={classes.Header}>Skills</h2>
      <span className={classes.SkillsText}>
        <p>
          My greatest skill is a result of my personality and <NavLink to="/background">background</NavLink>.
          My logical, analytic and methodical way of approaching problems, makes me good Problem Solver.
          <br />
          <br />
          The environment and tools may vary, although, in abstraction the problems tend to share the
           same structure and processes towards a solution. And that's where I think I thrive: destructing
           complex problems and adapt the tools and technologies accessible in order to reach a solution.
           <br />
           <br />
          As many other fields, Software Development is all about that, and it's where I enjoy applying these skills I have!
          <br />
          <br />
          <br />
          Now more concretely on my skills: I started using Python for Machine Learning and Data Science solutions,
          right after finish my university degrees. Due to my interest in Software and Web Development, I started
          learning (mostly self-learned) new frameworks around Backend Development. As my motivation
          continued to rise on these subject, I felt that I had to learn Frontend Development as well in order to
          create complete solutions. During all these periods, I learned some basics on DevOps but it's where I have
          more space to progress, and that's what I'm already doing by enrolling online courses on the subject.
          <br />
          <br />
          And this is my path to become an outstanding FullStack Dev!
          Bellow I present my soft skills and tech stack listed in different categories (click to expand).
        </p>

        <Collapsible title="Soft Skills">
          <ul>
            <li>Adaptable</li>
            <li>Team Player</li>
            <li>Planning</li>
            <li>Objective</li>
            <li>Resourceful</li>
            <li>Curious</li>
          </ul>
        </Collapsible>
        <Collapsible title="Machine Learning & Data Science">
          <ul>
            <li>Pandas</li>
            <li>Matplotlib</li>
            <li>Scikit Learn</li>
            <li>Keras</li>
            <li>Neural Networks</li>
            <li>Image Recognition</li>
            <li>NLP</li>
            <li>Optimization</li>
            <li>Classification Problems</li>
          </ul>
        </Collapsible>
        <Collapsible title="Backend">
          <ul>
            <li>Python</li>
            <li>REST</li>
            <li>Microservices</li>
            <li>Django</li>
            <li>Flask</li>
            <li>OpenAPI</li>
            <li>PostgreSQL + MySQL</li>
            <li>Git</li>
            <li>Unit Tests</li>
            <li>DB ORM</li>
            <li>Linux</li>
            <li>Mandrill</li>
            <li>Sentry</li>
          </ul>
        </Collapsible>
        <Collapsible title="Frontend">
          <ul>
            <li>ReactJS</li>
            <li>HTML5 + CSS</li>
            <li>AJAX</li>
            <li>Redux</li>
            <li>Bootstrap</li>
            <li>Git</li>
          </ul>
        </Collapsible>
        <Collapsible title="DevOps">
          <ul>
            <li>Docker</li>
            <li>Docker-Compose</li>
            <li>Kubernetes</li>
            <li>Gitlab CI/CD</li>
            <li>Google Cloud Services</li>
            <li>Linux</li>
            <li>Git</li>
          </ul>
        </Collapsible>
      </span>
    </div>
  );
}

export default Skills;
