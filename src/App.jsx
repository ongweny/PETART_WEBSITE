import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const scrollToBottom = () => {
    const scrollingElement = document.scrollingElement || document.body;
    scrollingElement.scrollTo({
      top: scrollingElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
 <div id="landingpage">
        <div id="card">
          <img id="logo" src="../src/petra_logo-banner-removebg-preview.png" alt="Petra Tech Logo" />
          <div id="container">Your Health And Technology Partner</div>
          <div id="textbox1">
            Petra Research is a pioneering company dedicated to advancing medical 
            research by harnessing data from health institutions and the broader population.
          </div>
          <div id="textbox2">
            Our core strengths lie in research, digital health technology deployment and development.
            We are committed to improving healthcare outcomes in Africa through innovation and research–driven solutions.
          </div>
          <div id="button">
            <button id="contact" type="button" onClick={scrollToBottom}>Contact Us</button>
          </div>
        </div>
      </div>

  <div id="teampage">
    <h2>Our Team:</h2>
    <div id="team-container">
      <div id="team-member">
        <img src="../src/profile.jpeg" alt="Team Member" />
        <ul>
          <li>Director</li>
          <li>Expert in Research</li>
        </ul>
      </div>
      <div id="team-member">
        <img src="../src/profile.jpeg" alt="Team Member" />
        <ul>
          <li>Director</li>
          <li>Expert in Health Tech</li>
        </ul>
      </div>
      <div id="team-member">
        <img src="../src/profile.jpeg" alt="Team Member" />
        <ul>
          <li>Director</li>
          <li>Digital Strategy</li>
        </ul>
      </div>
      <div id="team-member">
        <img src="../src/profile.jpeg" alt="Team Member" />
        <ul>
          <li>Director</li>
          <li>Innovation Specialist</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div id='achievementspage'>
    <div id='achievements-container'>
    <h2>Our Achievements</h2>
    <ul>
      <li id='list'>Successfully conducted groundbreaking research projects that have influenced healthcare policies in Africa.</li>
      <li id='list'>Deployed cutting-edge digital health platforms that have improved healthcare accessibility in underserved regions.</li>
      <li id='list'>Established partnerships with leading healthcare organizations to drive healthcare innovation across the continent.</li>
    </ul>
    </div>
  </div>

  <div id='strengthspage'>
      <div id='article-left'>
        <h2>The Petra Research company advantage</h2>
      </div>
      <div id='article-right'>
        <ul>
          <li><b>Research Excellence</b></li>
          <li>We excel in conducting rigorous and insightful medical research, utilizing data from health institutions and the diverse population to uncover valuable insights for healthcare development.</li>
        </ul>
        <ul>
          <li><b>Digital Health Technology</b></li>
          <li>Our expertise in digital health technology allows us to create and deploy innovative solutions that bridge the gap between healthcare providers, patients, and technology, leading to improved access and outcomes.</li>
        </ul>
        <ul>
          <li><b>Partnerships</b></li>
          <li>We forge strategic collaborations with health care institutions, governmental bodies, and industry leaders to leverage collective knowledge and resources for the benefit of healthcare in Africa.</li>
        </ul>
        <ul>
          <li><b>Dedicated Team</b></li>
          <li>Our team consists of skilled researchers, data scientists, healthcare professionals, and technology experts who are passionate about making a positive impact on health care in Africa.</li>
        </ul>
      </div>
  </div>

  <div id='servicespage'>
      <div id='div-left'>
      <ul>
          <li><b>Medical Research</b></li>
          <li>We conduct comprehensive medical research projects using vast databases and advanced analytics to generate insights that inform health care policies and practices.</li>
        </ul>
        <ul>
          <li><b>Digital Health solutions</b></li>
          <li>We develop and deploy user-friendly digital health solutions that enhance patient engagement, improve healthcare delivery, and optimize healthcare systems.</li>
        </ul>
        <ul>
          <li><b>Consulting and Training</b></li>
          <li>We offer consulting services and training Programs to support healthcare institutions in adopting date-driven strategies and digital health technologies effectively.</li>
        </ul>
      </div>

      <div id='div-right'>
      <h2>The Petra Research company services</h2>
      </div>
  </div>

  <div id='contactpage'>
  <h2>GET IN CONTACT WITH OUR TEAM TODAY</h2>
    <div id='email-adress'>
      <div id='adress'>
        <ul>
          <li>Main Office</li>
          <li>123 Street.</li>
          <li>Kenya, Nairobi 00100</li>
        </ul>
      </div>
      <div id='email'>
        <ul>
          <li>Tel: (+254)712-345-678</li>
          <li>Email: info@petrart.co.ke</li>
          <li>Social: Linkedin</li>          
        </ul>
      </div>
    </div>
  </div>
    </>
  )
}


      
export default App
