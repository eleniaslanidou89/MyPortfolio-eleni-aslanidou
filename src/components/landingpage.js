import React, { Component } from 'react'
import { Grid, Layout, Cell } from 'react-mdl'

class Landing extends Component {
  render() {
    return (
      <div className="contact-body">
        <Layout
          style={{
            background:
              'url(https://images.pexels.com/photos/1369280/pexels-photo-1369280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)center / cover',
          }}
        >
          <Grid className="contact-grid">
            <Cell
              className="title"
              col={9}
              style={{
                fontSize: '20px',
                color: 'black',
                fontFamily: 'Patrick Hand, cursive',
                marginTop: '80px',
              }}
            >
              Hello! My name is Eleni Aslanidou and I am Frontend Developer and
              Web & Mobile Designer. I studied IT Communication Engineering in
              Technological Educational Institute of Central Macedonia and
              Frontend Development in KYH. As a person I have great energy and I
              am open minded. I am really good at planning and prioritizing my
              work which will be highly appreciated by my teammates.
              Presentations are my passion, as it is fun to speak in front of an
              audience, explaining the reasoning behind my code and design
              creations. I love getting out of my comfort zone, which has been
              the motivation to explore new areas. I want to be a part of a team
              where I can learn from and contribute to.
              <hr />
              <br />
              <span> 💭➕ Positive thinking person</span>
              <br />
              <span> 🧠 Passionate learner</span>
              <br />
              <span> 🧩 Loves collaborating and working in a team </span>
              <br />
              <hr />
              <span className="email">📬 helena.aslanidou@gmail.com</span>
            </Cell>
          </Grid>
        </Layout>
      </div>
    )
  }
}

export default Landing
