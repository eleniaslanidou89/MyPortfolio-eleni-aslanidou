import React, { Component } from 'react'
import { Grid, Cell, Layout } from 'react-mdl'

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        {/* <img src="me.jpg" alt="Eleni" className="image" /> */}
        {/* <Layout
          style={{
            background:
              'url(https://images.pexels.com/photos/1262304/pexels-photo-1262304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)center / cover',
          }}
        > */}
        <Grid className="contact-grid">
          <Cell className="moto" col={6}>
            <p>
              "Shoot for the moon. Even if you miss it you will land among the
              stars." <span>Les Brown</span>
            </p>
            <img src="moon.jpg" alt="moon" className="moon" />
          </Cell>
        </Grid>
        {/* </Layout> */}
      </div>
    )
  }
}

export default Contact
