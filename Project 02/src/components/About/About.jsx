import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          By providing opportunities, mentorship, and guidance, we empower young
          minds to develop the skills, confidence, and vision needed to face the
          challenges of tomorrow. Whether through education, innovation, or
          personal growth, fostering leadership today ensures a future filled
          with capable, compassionate, and forward-thinking individuals who are
          prepared to make a positive impact on society. It is a commitment to
          shaping a better world by unlocking the potential within each emerging
          leader.
        </p>
        <p>
          Through dedicated support and intentional learning environments, we
          inspire young individuals to take initiative, embrace challenges, and
          grow into responsible, innovative leaders. By encouraging
          collaboration, ethical decision-making, and a growth mindset, we
          prepare them to navigate complex global issues with empathy and
          courage.
        </p>
        <p>
          Encouraging curiosity, fostering diversity of thought, and promoting
          collaboration not only prepare them to lead but also inspire them to
          create lasting, meaningful change. As mentors and role models, we
          guide them toward a future where they can confidently step into
          leadership roles, shaping a more innovative and just world.
        </p>
      </div>
    </div>
  );
}

export default About