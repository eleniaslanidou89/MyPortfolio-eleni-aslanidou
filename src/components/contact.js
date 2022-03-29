import React, { Component } from 'react'
import { Grid, Cell, Layout } from 'react-mdl'

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell className="moto" col={6}>
            <p className="stars">
              "Shoot for the moon. Even if you miss it you will land among the
              stars." <span>Les Brown</span>
            </p>
            <img src="moon.jpg" alt="moon" className="moon" />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact
