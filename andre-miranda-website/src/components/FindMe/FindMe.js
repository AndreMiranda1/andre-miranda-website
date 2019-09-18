import React from 'react';

import classes from './FindMe.module.css';
import { SocialIcon } from 'react-social-icons';


const FindMe = props => {

  return (
    <div className={classes.FindMe}>
      <h2>Find Me</h2>

      <div class="Social">
        <SocialIcon url="http://www.linkedin.com/in/amlmiranda/" />
        <SocialIcon url="mailto:amlmiranda@outlook.com" />
        <SocialIcon url="https://github.com/AndreMiranda1/" />
      </div>
    </div>
  );
}

export default FindMe;
