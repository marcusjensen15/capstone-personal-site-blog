import React from 'react';

//will need to import new keg form

export default function Resume(){

  const textCenter = {
    textAlign: 'center',
    textAlign: 'center',
    fontSize: '2vh',
    marginRight: '24%',
    marginBottom: '2%',
    marginLeft: '24%',
    backgroundColor: '#DCD0C0',
    fontFamily: 'Ariel',
    borderRadius: '3%'
  }

  const titleStyle = {
    paddingBottom: '3vh'
  }
  const nameStyle = {
    paddingTop: '5vh'

  }

  const contentContainer = {
    display: 'flex'
  }

  const column = {
  flex: '50%',
  padding: '2.5vh',
  width: '40vh',
  height: 'auto',
  borderRight: 'solid #F4F4F4'
}

const column2 = {
flex: '50%',
padding: '2.5vh',
width: '40vh',
height: 'auto'
}
  const removeListDots = {
    listStyleType: 'none'
  }
  //might need to push this div slightly to the left. UL is throwing off the center alignment. Might have to do this with all lists.
  const listFont = {
    fontSize: '2vh',
    fontFamily: 'Ariel'
  }
  const linkStyle = {
    color: '#F4F4F4'
  }
  const italic = {
    fontStyle: 'italic'

  }

  const linePadding = {
    paddingTop: '3vh'
  }


  return(
    <div style={textCenter}>
      <h2 style={nameStyle}>Marcus Jensen</h2>
      <h4 style={titleStyle}>Software Engineer</h4>
      <div style={contentContainer}>
        <div style={column}>

          <h4>PROFILE</h4>
          <p style={listFont}>Highly committed, and accomplished SaaS technology sales professional. In 2019, pivoted from SaaS Account Executive role and began intensively studying Software Engineering. Perpetually curious lifelong learner.</p>
          <h4>PROFESSIONAL SKILLS</h4>
            <div style={listFont}>
              <p>JavaScript/React</p>
              <p>Ruby on Rails</p>
              <p>Version Control Software (Git)</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>Cross Departmental Collaboration</p>
              <p>Test Driven Development</p>
              <p>SQL</p>
              <p>Postgres</p>
              <p>Heroku Deployement</p>
            </div>
            <h4>DEPLOYED PROJECTS</h4>
              <h4>Mario's Specality Foods</h4>

                <p>Custom Built inventory system for specality foods store.</p>
                <p>Full CRUD Application built with: Ruby and Rails, SQL, and CSS.</p>
                <p>Created my own authentication system using Bcrypt.</p>
                <p ><a style={linkStyle} href="https://radiant-brushlands-64073.herokuapp.com/">Click here to see live deployment</a></p>

              <h4>Neighborly</h4>

                <p>My Team of 4 other engineering students built and deployed a micro version of meetup.com</p>
                <p>Utilized: Ruby, Rails, CSS, Heroku, Javascript, SQL, Postgres, Git, etc.</p>
                <p>Collaborated alongside teammates, divided responsabilities, and fully delivered our MVP in allocated time period</p>
                <p><a style={linkStyle} href="http://team-neighborly.herokuapp.com/">Click here to see live deployment</a></p>


              <h4>EDUCATION</h4>
                <h5>Epicodus 2019-2020</h5>
                <p>Ruby on Rails & React Track</p>

                <h5>University of Oregon 2010-2014</h5>
                <p>Bachelor of Science in Business Administration</p>
                <p>Minor in Computer Science</p>
        </div>
        <div style={column2}>
          <h4>WORK SUMMARY</h4>
            <h5>Epicodus</h5>
            <p style={italic}>Full Time Student 2019-2020</p>
            <p>6 month intensive software engineering course focused on: HTML, CSS, JavaScript/React and Ruby (Rails). (40 hours weekly, 5 days per week).</p>
            <p>Complete daily projects with assigned partner. Developed strong collaboration skills with fellow junior engineers while working through difficult problems.</p>
            <p>Completed several group projects with engineering team. We collectively: Determined product roadmap, assigned responsibilities, and successfully merged our work together into finished applications.</p>
            <p>Highly focused on leveraging Google and figuring out problems for myself before asking a colleague. Broadened conceptual understanding and solved difficult problems with this approach.</p>
            <h5>ASKNICELY</h5>
            <p style={italic}>Account Executive 2017-2019</p>
            <p>Frequently met with customers and VP of Product to discuss roadmap prioritization. Assisted our leadership in making sure the highest ROI features get delivered first</p>
            <p>Top performing Account Executive on a team of 15. Q3 2019.</p>
            <p>Use consultative selling approach to expand on current accounts, and own full sales cycle in an effort to earn new business for the organization.</p>
            <p>Heavy focus on ‘Player-Coach’ mentality. While holding quota was also responsible for training new Account Executives, advising Business Development team, and working with Customer Success on Up-sells.</p>

            <h5>ZAPPROVED</h5>
            <p style={italic}>Inside Sales Representitive 2015 - 2017</p>
            <p>Earned CEO's approval to work remotely from Brazil during Q2 2017 due to: my sustained success, autonomous work style, and extreme prospecting discipline.</p>
            <p>Sourced closing business with: Tesoro, Astellas Pharmaceutical, Entergy, ULTA Beauty, Energy Transfer, Mondelez Foods, and Texas Instruments amongst others.</p>

            <h4>WORK WITH ME</h4>
              <p>Phone: 503-265-9855</p>
              <p> Email: marcusjensen1515@gmail.com</p>
              <p><a style={linkStyle} href="www.linkedin.com/in/marcus-jensen15">LinkedIn Profile</a></p>
              <p><a style={linkStyle} href="https://github.com/marcusjensen15">GitHub</a></p>
        </div>


      </div>
      <p style={linePadding}>        </p>
    </div>
  );
}
