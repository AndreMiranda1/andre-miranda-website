import React from 'react';

import classes from './ProfessionalExperience.module.css';
import ClevertiImage from '../../assets/cleverti.png';
import OptylonImage from '../../assets/optylon.jpg';
import CloserImage from '../../assets/closer.png';
import BPIImage from '../../assets/bpi.png';


const ProfessionalExperience = props => {

  return(
    <div className={classes.ProfessionalExperience}>
      <h2>Professional Experience</h2>
      
      <div className={classes.Experience}>
        <div className={classes.ExperienceImage}>
          <img src={ClevertiImage} alt="Cleverti" />
        </div>
        <div className={classes.ExperienceDescription}>
          <h4>Software Developer - Cleverti</h4>
          <span className={classes.DateRange}>April 2019 - Present</span>
          <span className={classes.ExperienceDescriptionText}>
            <p>
              Team Leader in a remote team working on a Copernicus Contributing Mission for the European Space Agency.
              <br />
              <br />
              Our team was mainly focused on developing a microservice based system, with a UI
              for data ingestion and monitoring. The system integrated some data processing
              flows with external APIs and FTP servers.
              We adopted the SCRUM methodology.
              <br />
              <br />
              Cleverti promote internal talks on diverse topics, where I presented a few on Machine Learning.
              One of them is available on <a rel="noopener noreferrer" target="_blank" className={classes.Link} href="https://youtu.be/BiNT_KlTolk">YouTube</a>.
            </p>
          </span>
        </div>
      </div>

      <div className={classes.Experience}>
        <div className={classes.ExperienceImage}>
          <img src={OptylonImage} alt="Optylon" />
        </div>
        <div className={classes.ExperienceDescription}>
          <h4>Data Scientist and Software Developer - Optylon</h4>
          <span className={classes.DateRange}>April 2018 - April 2019</span>
          <span className={classes.ExperienceDescriptionText}>
            <p>
              In a Start-up environment I use my analytic and tech skills to solve any kind of
              problems, although, my main tasks included developing internal tools in a Web Platform,
              Data Analysis, create internal Performance Metrics, Process Automation and Reporting Tools.
            </p>
          </span>
        </div>
      </div>

      <div className={classes.Experience}>
        <div className={classes.ExperienceImage}>
          <img src={CloserImage} alt="Closer" />
        </div>
        <div className={classes.ExperienceDescription}>
          <h4>Data Scientist - Closer</h4>
          <span className={classes.DateRange}>August 2017 - April 2018</span>
          <span className={classes.ExperienceDescriptionText}>
            <p>
            During my experience as a Consultant I worked in an international team, solving
            diverse Data Science problems including Recommendation Systems,
            Optimization Problems using Genetic Algorithms and NLP/Automated Data Extraction.
            </p>
          </span>
        </div>
      </div>

      <div className={classes.Experience}>
        <div className={classes.ExperienceImage}>
          <img src={BPIImage} alt="BPI" />
        </div>
        <div className={classes.ExperienceDescription}>
          <h4>Inter Rating Department - BPI Bank</h4>
          <span className={classes.DateRange}>September 2016 - April 2017</span>
          <span className={classes.ExperienceDescriptionText}>
            <p>
            In my first professional experience, I helped developing a new credit model in Banco BPI.
            My main taks included developing Models and Algorithms for predicting credit default, Data Analysis
            and Risk Assessment.
            </p>
          </span>
        </div>
      </div>

    </div>
  );
}

export default ProfessionalExperience;
