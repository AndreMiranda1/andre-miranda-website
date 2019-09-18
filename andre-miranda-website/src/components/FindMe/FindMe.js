import React from 'react';

import classes from './FindMe.module.css';
import { SocialIcon } from 'react-social-icons';


const FindMe = props => {

  return (
    <div className={classes.FindMe}>
      <h2>Find Me</h2>

      <p>
        If you're interested in getting in contact with me
        you can find me on Linkedin, reach me by direct e-mail and
        check some of my code on GitHub.
      </p>


      <div className={classes.SocialGroup}>
        <div className={classes.Social}>
          <SocialIcon url="http://www.linkedin.com/in/amlmiranda/" />
        </div>
        <div className={classes.Social}>
          <SocialIcon url="mailto:amlmiranda@outlook.com" />
        </div>
        <div className={classes.Social}>
          <SocialIcon url="https://github.com/AndreMiranda1/" />
        </div>
      </div>

      <p>
        You can always try to meet me in person somewhere between Lisbon and Alentejo!
        <br />
        Thank you for your visit and please share your feedback.
      </p>

    </div>
  );
}

export default FindMe;
