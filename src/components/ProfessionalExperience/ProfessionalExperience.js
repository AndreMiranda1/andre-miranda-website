import React from 'react';

import classes from './ProfessionalExperience.module.css';
import TNXImage from '../../assets/tnx.png';
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
          <img src={TNXImage} alt="TNX" />
        </div>
        <div className={classes.ExperienceDescription}>
          <h4>Software Developer - TNX Logistics</h4>
          <span className={classes.DateRange}>January 2021 - Present</span>
          <span className={classes.ExperienceDescriptionText}>
            <p>
              <a rel="noopener noreferrer" target="_blank" className={classes.Link} href="https://www.tnx-logistics.com/">TNX</a> runs a procurement platform that connects Cargo Owners with Carriers.
              <br />
              Being a member of a small teams exposes me to a wide range of challenges and tasks, here I contribute from general Webdev to Machine Learning models.
            </p>
          </span>
        </div>
      </div>

      <div className={classes.Experience}>
        <div className={classes.ExperienceImage}>
          <img src={ClevertiImage} alt="Cleverti" />
        </div>
        <div className={classes.ExperienceDescription}>
          <h4>Software Developer - Cleverti</h4>
          <span className={classes.DateRange}>April 2019 - December 2020</span>
          <span className={classes.ExperienceDescriptionText}>
            <p>
              Team Leader in a remote team working in the scope of the European Space Agency.
              <br />
              <br />
              On our first project the team was mainly focused on developing a micro-service based system, with a UI
              for data ingestion and monitoring. The system integrated some data processing
              flows with external APIs and FTP servers. We adopted the SCRUM methodology. The project was integrated in a Copernicus Contributing Mission.
              <br />
              On my last project our job was to work closely with Data Scientists in order to deploy their code in services that are supposed to run in Cloud Environments.
              It was also our responsibility to develop custom tools to help on the Data Science tasks.
              We were exposed a lot to GIS concepts and satellite image processing.
              <br />
              <br />
              Cleverti promotes internal talks on diverse topics, where I presented a few on Machine Learning.
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
          <h4>Intern Rating Department - BPI Bank</h4>
          <span className={classes.DateRange}>September 2016 - April 2017</span>
          <span className={classes.ExperienceDescriptionText}>
            <p>
            In my first professional experience, I helped developing a new credit model in Banco BPI.
            My main tasks included developing Models and Algorithms for predicting credit default, Data Analysis
            and Risk Assessment.
            </p>
          </span>
        </div>
      </div>

    </div>
  );
}

export default ProfessionalExperience;
