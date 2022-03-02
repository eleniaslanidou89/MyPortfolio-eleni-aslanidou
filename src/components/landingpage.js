import React, { Component } from 'react'
import { Grid, Layout, Cell } from 'react-mdl'

class Landing extends Component {
  render() {
    return (
      <div className="contact-body">
        <Layout
          style={{
            background:
              'url(https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80)center / cover',
          }}
        >
          <Grid className="">
            <Cell className="" col={12}>
              <img src="me.jpg" alt="Eleni" className="image" />
              <h3>Eleni Aslanidou </h3>
              <p className="">Web & Mobile Designer UX/UI</p>
              <p className="">Front-end Developer</p>

              <hr />
              {/* <div className="social-links">
               
                <a
                  href="https://www.linkedin.com/in/eleni-aslanidou/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-square" aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/eleniaslanidou89"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github-square" aria-hidden="true" />
                </a>
              </div> */}
            </Cell>
          </Grid>
        </Layout>
      </div>
    )
  }
}

export default Landing
