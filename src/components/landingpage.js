import React, { Component } from 'react'
import { Grid, Layout, Cell } from 'react-mdl'

class Landing extends Component {
  render() {
    return (
      <div className="contact-body">
        <Layout
          style={{
            background: 'url(https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80)center / cover',
          }}
        >
          <Grid className="contact-grid">
            <Cell className="title" col={6}>
              <img src="me.jpg" alt="Eleni" className="image" />
              <h3>
                Eleni Aslanidou
                <br />
                <p className="developer">Web & Mobile Designer UI/UX</p>
                <p className="developer">Front-end Developer</p>
              </h3>
              {/* <p>
                Hello! My name is Eleni Aslanidou. I am Web & Mobile Designer
                and Front-end Developer. As a person I have great energy and I
                am open minded. I am really good at planning, prioritizing and
                presenting my work. I have the "of course I can" attitude
                because I am not afraid of new challenges.
                <p>💭➕ Thinking Positive</p>
                <p>🧠 Passionate learner</p>
                <p>🧩 Loves collaborating and working in a team </p>
                <p>📫 helena.aslanidou@gmail.com</p>
              </p> */}
              <hr />
              {/* <p className="skills">
                  <span> TOOLBOX: </span>
                  Figma | Visual Studio | Trello | Slack | GitHub | Fork |
                  Linear | Sketch | Miro
                </p>
                <p className="skills">
                  <span> CODE: </span>
                  HTML5 | CSS | Bootstrap | Javascript | GraphQL | Material UI |
                  Tailwind | CSSModules | Typescript
                </p>
                <p className="skills">
                  <span> FRAMEWORKS: </span> React.js | Vue.js | Next.js |
                  Angular
                </p>
             */}
              <div className="social-links ">
                {/*linkedIn*/}
                <a
                  href="https://www.linkedin.com/in/eleni-aslanidou/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-square" aria-hidden="true" />
                </a>
                {/*GitHub*/}
                <a
                  href="https://github.com/eleniaslanidou89"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </Cell>
          </Grid>
        </Layout>
      </div>
    )
  }
}

export default Landing
