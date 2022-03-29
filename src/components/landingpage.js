import React, { Component } from 'react'
import { Grid, Layout, Cell } from 'react-mdl'

class Landing extends Component {
  render() {
    return (
      <div className="contact-body">
        <Layout
          style={{
            background:
              'url(https://images.pexels.com/photos/1172849/pexels-photo-1172849.jpeg?cs=srgb&dl=pexels-jess-bailey-designs-1172849.jpg&fm=jpg)center / cover',
          }}
        >
          <Grid className="contact-grid">
             <Cell className="title" col={6}>
              <h5 className="">Web & Mobile Designer UX/UI-Frontend Developer</h5>
              <p>
                Hello! My name is Eleni Aslanidou. I am Web & Mobile Designer. I have also a Bachelor degree in
IT Communication Engineering(Greece) and Frontend Development degree from KYH(Sweden). As a person I have great energy and I
                am open minded. I am really good at planning, prioritizing and
                presenting my work. I have the "of course I can" attitude
                because I am not afraid of new challenges.
                <br/>
                <span> 💭➕ Positive thinking person</span>
                <span> 🧠 Passionate learner</span>
                <span> 🧩 Loves collaborating and working in a team </span>
                <br/>
                <span>📬 helena.aslanidou@gmail.com</span>
              </p>
            </Cell> 
          </Grid>
        </Layout>
      </div>
    )
  }
}

export default Landing
