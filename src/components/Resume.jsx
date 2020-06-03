import React from 'react';
import '../styles/resumeStyle.css';


export default function Resume(){


  return(
    <div className="resumeContainer">
      <h2 className="nameStyle">Marcus Jensen</h2>
      <h4 className="titleStyle">Software Engineer</h4>
      <div className="contentContainer">
        <div className="column">

          <h4 className="sectionHeader">PROFILE</h4>
          <p className="listFont">Highly committed, and accomplished SaaS technology sales professional. In 2019, pivoted from SaaS Account Executive role and began intensively studying Software Engineering. Perpetually curious lifelong learner.</p>
          <h4 className="sectionHeader">PROFESSIONAL SKILLS</h4>
            <div className="listFont">
              <p>JavaScript/ReactJS</p>
              <p>NodeJS</p>
              <p>Ruby on Rails</p>
              <p>Google Firebase</p>
              <p>Version Control Software (Git)</p>
              <p>HTML/CSS</p>
              <p>Cross Departmental Collaboration</p>
              <p>Test Driven Development</p>
              <p>SQL/noSQL Databases</p>
              <p>Postgres</p>
              <p>Heroku Deployement</p>
            </div>
            <h4 className="sectionHeader">DEPLOYED PROJECTS</h4>

              <h4>Nimblenote</h4>

                <p>Note taking application optimized for desktop and mobile. 50+ users every day log in and use NimbleNote.</p>
                <p>Utilized: Google Firebase for Data Storage and User Authentication. ReactJS Frontend.</p>
                <p><a className="linkStyle" href="http://nimblenote.co">Click here to see live deployment</a></p>


              <h4>Personal Blogging Platform</h4>

                <p>Full CRUD application built with NodeJS utilizing Model View Controller framework, along with my own API.</p>
                <p>Created my own space online where I can blog about my experience as a developer!</p>
                <p ><a className="linkStyle" href="https://www.marcusjensen.me">Click here to see live deployment</a></p>

              <h4 className="sectionHeader">EDUCATION</h4>
                <h5>Epicodus 2019-2020</h5>
                <p>Ruby on Rails & React Track</p>

                <h5>University of Oregon 2010-2014</h5>
                <p>Bachelor of Science in Business Administration</p>
                <p>Minor in Computer Science</p>
        </div>
        <div className="column2">
          <h4 className="sectionHeader">WORK SUMMARY</h4>

            <h5>Theorem Agency</h5>
            <p className="italic">JavaScript/React Software Engineering Intern, 2020</p>
            <p>Frequently met with customers and VP of Product to discuss roadmap prioritization. Assisted our leadership in making sure the highest ROI features get delivered first</p>
            <p>Top performing Account Executive on a team of 15. Q3 2019.</p>
            <p>Use consultative selling approach to expand on current accounts, and own full sales cycle in an effort to earn new business for the organization.</p>
            <p>Heavy focus on ‘Player-Coach’ mentality. While holding quota was also responsible for training new Account Executives, advising Business Development team, and working with Customer Success on Up-sells.</p>


            <h5>Epicodus</h5>
            <p className="italic">Full Time Student 2019-2020</p>
            <p>6 month intensive software engineering course focused on: HTML, CSS, JavaScript/React and Ruby (Rails). (40 hours weekly, 5 days per week).</p>
            <p>Complete daily projects with assigned partner. Developed strong collaboration skills with fellow junior engineers while working through difficult problems.</p>
            <p>Completed several group projects with engineering team. We collectively: Determined product roadmap, assigned responsibilities, and successfully merged our work together into finished applications.</p>
            <p>Highly focused on leveraging Google and figuring out problems for myself before asking a colleague. Broadened conceptual understanding and solved difficult problems with this approach.</p>


            <h5>ASKNICELY</h5>
            <p className="italic">Account Executive 2017-2019</p>
            <p>Frequently met with customers and VP of Product to discuss roadmap prioritization. Assisted our leadership in making sure the highest ROI features get delivered first</p>
            <p>Top performing Account Executive on a team of 15. Q3 2019.</p>
            <p>Use consultative selling approach to expand on current accounts, and own full sales cycle in an effort to earn new business for the organization.</p>
            <p>Heavy focus on ‘Player-Coach’ mentality. While holding quota was also responsible for training new Account Executives, advising Business Development team, and working with Customer Success on Up-sells.</p>



            <h4 className="sectionHeader">WORK WITH ME</h4>

              <p> Email: marcusjensen1515@gmail.com</p>
              <p><a className="linkStyle" href="https://linkedin.com/in/marcus-jensen15">LinkedIn Profile</a></p>
              <p><a className="linkStyle" href="https://github.com/marcusjensen15">GitHub</a></p>
        </div>


      </div>
      <p className="linePadding"> </p>
    </div>
  );
}
