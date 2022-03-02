import React, { Component } from 'react'
import { Grid, Cell, Layout } from 'react-mdl'

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Layout
          style={{
            background:
              'url(https://images.unsplash.com/photo-1543157145-f78c636d023d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80)center / cover',
          }}
        >
          <Grid className="contact-grid">
            <Cell className="title" col={6}>
              <p>
                Hello! My name is Eleni Aslanidou. I am Web & Mobile Designer and Front-end Developer.
                As a person I have great energy and I am open minded. I am
                really good at planning, prioritizing and presenting my work. I have the "of course I
                can" attitude because I am not afraid of new challenges.  
                <span>💭➕ Thinking Positive</span>
                <span>🧠 Passionate learner</span>
                <span>🧩 Loves collaborating and
                working in a team </span>
              </p>
              <hr/>
              <i className="fa fa-envelope-open" aria-hidden="true" />
              <p className="contactInfo">helena.aslanidou@gmail.com</p>
            </Cell>
          </Grid>
        </Layout>
      </div>
    )
  }
}

export default Contact
