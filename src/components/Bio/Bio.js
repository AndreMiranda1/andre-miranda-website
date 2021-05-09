import React from 'react';

import useWindowDimensions from '../../hooks/useWindowDimensions';
import classes from './Bio.module.css';
import GioesImage from '../../assets/gioes.jpg';


const Bio = props => {
  const { width } = useWindowDimensions();

  const calculateAge = (birthDate=new Date(1994, 4, 3)) => {
    var diff_ms = Date.now() - birthDate.getTime();
    var age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  let bioContent = (
    <span className={classes.BioText}>
      <p>
        I'm {calculateAge()} years old and I was born in the sunny and beautiful Portugal.
      <br />
      <br />
        Getting things done and solving problems are my biggest strengths.
        Curious by Nature, I always enjoy learning new subjects and technologies.
        Since I can remember, I've been seeking for answers in all range of topics.
      <br />
      <br />
      I have the will to try new challenges, pushing myself to grow and be a better person everyday.
      <br />
      <br />
        Working as a remote developer allows me to be living between Lisbon and <a rel="noopener noreferrer" target="_blank" className={classes.Link} href="https://goo.gl/maps/xxbrgYwRgpQg1ACP6">Giões</a> where I like to spend my free time.
        Located between Algarve and Alentejo, this small village is my grandfather's birthplace
         and where I love to be close to Nature. There I use to go fishing in my kayak, hiking,
          and hang with my family and friends.
      <br />
      <br />
      <img src={GioesImage} alt="GioesImage" />
      <br />
      Sports are also one of my passions, I played basketball for some years including for my University.
      I'm a F.C. Porto fan so I don't miss any game! Besides that, I'm always in for a match, a bike ride or some kayaking.
      <br />
      <br />
        My creative side, useful for software development as well, makes me enjoying going to music concerts,
         visiting museums, watching cinema masterpieces, reading good books and follow remarkable artists.
        I'm also a listener of food for thought Podcasts, where new visions of the world
         and perspectives are discussed.
         I hope that some day soon I'll have the time to explore my own abilities on these subjects.
      </p>
    </span>
  );
  if (width >= 900) {
    bioContent = (
      <div className={classes.BioText}>
        <div className={classes.FirstColumn}>
          <img src={GioesImage} alt="GioesImage" />
        </div>
        <div className={classes.SecondColumn}>
          <p>
            I'm {calculateAge()} years old and I was born in the sunny and beautiful Portugal.
            <br />
            <br />
            Curious by Nature, I always enjoy learning new stuff and getting things done.
            Since I can remember, I've been seeking for answers in all range of topics.
            <br />
            <br />
            I have the will to try new challenges, pushing myself to grow and be a better person everyday.
            <br />
            <br />
            Working as a remote developer allows me to be living between Lisbon and <a rel="noopener noreferrer" target="_blank" className={classes.Link} href="https://goo.gl/maps/xxbrgYwRgpQg1ACP6">Giões</a> where I like to spend my free time.
            Located between Algarve and Alentejo, this small village is my grandfather's birthplace
             and where I love to be close to Nature. There I use to go fishing in my kayak, hiking,
              and hang with my family and friends.
            <br />
            <br />
            Sports are also one of my passions, I played basketball for some years including for my University.
            I'm a F.C. Porto fan so I don't miss any game! Besides that, I'm always in for a match, a bike ride or some kayaking.
            <br />
            <br />
            My creative side, useful for software development as well, makes me enjoying going to music concerts,
             visiting museums, watching cinema masterpieces, reading good books and follow remarkable artists.
            I'm also a listener of food for thought Podcasts, where new visions of the world
             and perspectives are discussed.
             I hope that some day soon I'll have the time to explore my own habilities on these subjects.
          </p>
        </div>
      </div>
    );
  }

  return(
    <div className={classes.Bio}>
        <h2 className={classes.Header}>Bio</h2>
        {bioContent}
    </div>
  );
}

export default Bio;
