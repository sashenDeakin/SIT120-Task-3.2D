<script setup></script>

<template>
  <div class="rela-block page">
    <div class="rela-block top-bar">
      <div class="caps name">
        <div class="abs-center">Sashen H Jayathilaka</div>
      </div>
    </div>
    <div class="side-bar">
      <div class="mugshot">
        <div class="logo">
          <svg viewbox="0 0 80 80" class="rela-block logo-svg">
            <path
              d="M 10 10 L 52 10 L 72 30 L 72 70 L 30 70 L 10 50 Z"
              stroke-width="2.5"
              fill="none"
            />
          </svg>
          <p class="logo-text">SJ</p>
        </div>
      </div>
      <p>123 My Place Drive</p>
      <p>Astoria, Austrlia 11105</p>
      <p>1-800-CALLPLZ</p>
      <p>sashejayatghilaka@gmail.com</p>
      <br />
      <p class="rela-block social twitter">Twitter stuff</p>
      <p class="rela-block social pinterest">Pinterest things</p>
      <p class="rela-block social linked-in">Linked-in man</p>
      <p class="rela-block caps side-header">Expertise</p>
      <p class="rela-block list-thing">HTML</p>
      <p class="rela-block list-thing">CSS (Stylus)</p>
      <p class="rela-block list-thing">Vue</p>
      <p class="rela-block list-thing">React JS</p>
      <p class="rela-block caps side-header">Education</p>
      <p class="rela-block list-thing">Deakin University</p>
      <p class="rela-block list-thing">
        Sri Lanka Technological Campus, Sri Lanka.
      </p>
      <p class="rela-block list-thing">Sreepali Collage, Horana, Sri Lanka.</p>
    </div>
    <div class="rela-block content-container">
      <h2 class="rela-block caps title">Jr Front-End Developer</h2>
      <div class="rela-block separator"></div>
      <div class="rela-block caps greyed">Profile</div>
      <p class="long-margin">
        Front-End Development: • Building interactive user interfaces and
        responsive web applications. • Developing reusable UI components with
        React.js. • Using state management libraries like Redux or Context API
        for managing application state. Web Development: • Implementing
        responsive web designs based on provided mockups or design
        specifications. • Ensuring cross-browser compatibility and optimizing
        web performance. • Integrating RESTful APIs or GraphQL to fetch and
        update data. Testing and Debugging: • Writing unit tests and integration
        tests for React components. • Debugging and resolving issues to ensure
        the application functions correctly. Collaboration: • Collaborating with
        designers, back-end developers, and other team members to deliver a
        cohesive product. • Participating in code reviews to maintain code
        quality and consistency. Version Control and Build Tools: • Using
        version control systems like Git to manage code. • Employing build tools
        like Webpack or Create React App for project setup and optimization.
      </p>
      <div class="rela-block caps greyed">Experience</div>

      <h3>ABC company</h3>
      <p class="light">First job description</p>
      <p class="justified">
        ABC Company is a leading technology-driven company dedicated to
        delivering innovative solutions to our clients. We are committed to
        fostering a dynamic and collaborative work environment that empowers our
        employees to thrive and grow in their careers. As part of our expanding
        IT team, you will have the opportunity to work on cutting-edge projects
        and contribute to the success of our organization.
      </p>

      <h3>Deakin It</h3>
      <p class="light">Second Job Description</p>
      <p class="justified">
        Deakin IT is a forward-thinking technology solutions provider known for
        delivering cutting-edge IT solutions to our clients. We are dedicated to
        innovation, quality, and client satisfaction. As we continue to grow, we
        are looking for an experienced IT Project Manager to lead our diverse IT
        projects and ensure their successful delivery.
      </p>

      <h3>SLTC</h3>
      <p class="light">Third Job Description</p>
      <p class="justified">
        SLTC is a leading technology company specializing in [brief description
        of the company's core business]. With a strong commitment to innovation
        and excellence, we are seeking a talented Systems Administrator to join
        our IT team and help manage our critical IT infrastructure.
      </p>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  transition: 0.35s ease;
}
.rela-block {
  display: block;
  position: relative;
  margin: auto;
}
.rela-inline {
  display: inline-block;
  position: relative;
  margin: auto;
}
.floated {
  display: inline-block;
  position: relative;
  margin: false;

  float: left;
}
.abs-center {
  display: false;
  position: absolute;
  margin: false;
  top: 50%;
  left: 50%;
  right: false;
  bottom: false;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 88%;
}
body {
  font-family: "Open Sans";
  font-size: 18px;
  letter-spacing: 0px;
  font-weight: 400;
  line-height: 28px;
  background: url("http://kingofwallpapers.com/leaves/leaves-016.jpg") right
    no-repeat;
  background-size: cover;
}
body:before {
  content: "";
  display: false;
  position: fixed;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.92);
}
.caps {
  text-transform: uppercase;
}
.justified {
  text-align: justify;
}
p.light {
  color: #777;
}
h2 {
  font-family: "Open Sans";
  font-size: 30px;
  letter-spacing: 5px;
  font-weight: 600;
  line-height: 40px;
  color: #000;
}
h3 {
  font-family: "Open Sans";
  font-size: 21px;
  letter-spacing: 1px;
  font-weight: 600;
  line-height: 28px;
  color: #000;
}
.page {
  width: 90%;
  max-width: 1200px;
  margin: 80px auto;
  background-color: #fff;
  box-shadow: 6px 10px 28px 0px rgba(0, 0, 0, 0.4);
}
.top-bar {
  height: 220px;
  background-color: #848484;
  color: #fff;
}
.name {
  display: false;
  position: absolute;
  margin: false;
  top: false;
  left: calc(350px + 5%);
  right: 0;
  bottom: 0;
  height: 120px;
  text-align: center;
  font-family: "Raleway";
  font-size: 58px;
  letter-spacing: 8px;
  font-weight: 100;
  line-height: 60px;
}
.name div {
  width: 94%;
}
.side-bar {
  display: false;
  position: absolute;
  margin: false;
  top: 60px;
  left: 5%;
  right: false;
  bottom: 0;
  width: 350px;
  background-color: #f7e0c1;
  padding: 320px 30px 50px;
}
.mugshot {
  display: false;
  position: absolute;
  margin: false;
  top: 50px;
  left: 70px;
  right: false;
  bottom: false;
  height: 210px;
  width: 210px;
}
.mugshot .logo {
  margin: -23px;
}
.logo {
  display: false;
  position: absolute;
  margin: false;
  top: 0;
  left: 0;
  right: false;
  bottom: false;
  z-index: 100;
  margin: 0;
  color: #000;
  height: 250px;
  width: 250px;
}
.logo .logo-svg {
  height: 100%;
  width: 100%;
  stroke: #000;
  cursor: pointer;
}
.logo .logo-text {
  display: false;
  position: absolute;
  margin: false;
  top: 58%;
  right: 16%;
  cursor: pointer;
  font-family: "Montserrat";
  font-size: 55px;
  letter-spacing: 0px;
  font-weight: 400;
  line-height: 58.333333333333336px;
}
.social {
  padding-left: 60px;
  margin-bottom: 20px;
  cursor: pointer;
}
.social:before {
  content: "";
  display: false;
  position: absolute;
  margin: false;
  top: -4px;
  left: 10px;
  right: false;
  bottom: false;
  height: 35px;
  width: 35px;
  background-size: cover !important;
}
.social.twitter:before {
  background: url("https://cdn3.iconfinder.com/data/icons/social-media-2026/60/Socialmedia_icons_Twitter-07-128.png")
    center no-repeat;
}
.social.pinterest:before {
  background: url("https://cdn3.iconfinder.com/data/icons/social-media-2026/60/Socialmedia_icons_Pinterest-23-128.png")
    center no-repeat;
}
.social.linked-in:before {
  background: url("https://cdn3.iconfinder.com/data/icons/social-media-2026/60/Socialmedia_icons_LinkedIn-128.png")
    center no-repeat;
}
.side-header {
  font-family: "Open Sans";
  font-size: 18px;
  letter-spacing: 4px;
  font-weight: 600;
  line-height: 28px;
  margin: 60px auto 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #888;
}
.list-thing {
  padding-left: 25px;
  margin-bottom: 10px;
}
.content-container {
  margin-right: 0;
  width: calc(95% - 350px);
  padding: 25px 40px 50px;
}
.content-container > * {
  margin: 0 auto 25px;
}
.content-container > h3 {
  margin: 0 auto 5px;
}
.content-container > p.long-margin {
  margin: 0 auto 50px;
}
.title {
  width: 80%;
  text-align: center;
}
.separator {
  width: 240px;
  height: 2px;
  background-color: #999;
}
.greyed {
  background-color: #ddd;
  width: 100%;
  max-width: 580px;
  text-align: center;
  font-family: "Open Sans";
  font-size: 18px;
  letter-spacing: 6px;
  font-weight: 600;
  line-height: 28px;
}
@media screen and (max-width: 1150px) {
  .name {
    color: #fff;
    font-family: "Raleway";
    font-size: 38px;
    letter-spacing: 6px;
    font-weight: 100;
    line-height: 48px;
  }
}
</style>
