import React from 'react';

import classes from './LandingPage.module.css';
import AndreImage from '../../assets/Andre_Miranda.jpg';


const LandingPage = props => {
  return(
    <div>
        <h2 className={classes.Header}>André Miranda</h2>
        <div className={classes.AndreIntro}>
          <img src={AndreImage} alt="AndreImage" />
          <p>Some intro here!</p>
        </div>
    </div>
  );
}

export default LandingPage;
