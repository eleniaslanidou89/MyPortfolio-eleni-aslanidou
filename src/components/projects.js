import React, { Component } from 'react'
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardText,
  CardTitle,
  CardActions,
  Button,
  Layout,
} from 'react-mdl'

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 }
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/*Project #1*/}
          <Card
            shadow={5}
            style={{
              minWidth: '500',
              marginTop: '80px',
              marginLeft: '50px',
              padding: '50px',
              fontFamily: 'Segoe UI',
            }}
          >
            <CardTitle
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                fontWeight: 'bold',
                paddingRight: '20px',
                paddingLeft: '20px',
              }}
            >
              Covid19 Tracker
            </CardTitle>
            <img
              src="covidTracker.PNG"
              alt="Covid19"
              className="project-image"
            />
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Description:
            </CardText>
            An app which is created with Vuejs and Tailwind. Fully responsive.
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Technologies used:
            </CardText>
            Vuejs, Tailwind
            <CardActions>
              {/*link for github*/}
              <a
                href="https://github.com/eleniaslanidou89/Covid19Tracker"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  GitHub{' '}
                  <i className="fab fa-github-square" aria-hidden="true" />
                </Button>
              </a>
              {/*link for the app*/}
              <a
                href="https://vuejscovid.surge.sh/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  LINK <i class="fas fa-link" aria-hidden="true" />
                </Button>
              </a>
            </CardActions>
          </Card>

          {/*Project #2*/}
          <Card
            shadow={5}
            style={{
              minWidth: '500',
              marginTop: '80px',
              marginLeft: '50px',
              padding: '50px',
              fontFamily: 'Segoe UI',
            }}
          >
            <CardTitle
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                fontWeight: 'bold',
                paddingRight: '50px',
                paddingLeft: '50px',
              }}
            >
              Eleni's Blog
            </CardTitle>
            <img src="Elenis-Blog.PNG" alt="Blog" className="project-image" />
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Description:
            </CardText>
            React website. I used React Hooks and React Router for this React JS
            Project. The website is fully responsive.
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Technologies used:
            </CardText>
            JavaScript, React, CSS
            <CardActions>
              {/*link for github*/}
              <a
                href="https://github.com/eleniaslanidou89/Eleni-s_Blog/tree/master"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  GitHub{' '}
                  <i className="fab fa-github-square" aria-hidden="true" />
                </Button>
              </a>
              {/*link for the website*/}
              <a
                href="https://elenisblog.surge.sh/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  LINK <i class="fas fa-link" aria-hidden="true" />
                </Button>
              </a>
            </CardActions>
          </Card>

          {/*Project #3*/}
          <Card
            shadow={5}
            style={{
              minWidth: '500',
              marginTop: '80px',
              marginLeft: '50px',
              padding: '50px',
              fontFamily: 'Segoe UI',
            }}
          >
            <CardTitle
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                fontWeight: 'bold',
                paddingRight: '40px',
                paddingLeft: '40px',
              }}
            >
              Weather App
            </CardTitle>
            <img
              src="weather-app.PNG"
              alt="WeatherApp"
              className="project-image"
            />
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Description:
            </CardText>
            Weather app in React JS, I used the Open Weather Map API to make
            calls to a restful api to return the current weather data. The App
            is fully responsive.
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Technologies used:
            </CardText>
            JavaScript, React, API, CSS
            <CardActions>
              {/*link for github*/}
              <a
                href="https://github.com/eleniaslanidou89/Weather-App"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  GitHub{' '}
                  <i className="fab fa-github-square" aria-hidden="true" />
                </Button>
              </a>
              {/*link for the app*/}
              <a
                href="http://weatherappbyeleni.surge.sh/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  LINK <i class="fas fa-link" aria-hidden="true" />
                </Button>
              </a>
            </CardActions>
          </Card>

          {/*Project #4*/}
          <Card
            shadow={5}
            style={{
              minWidth: '500',
              marginTop: '80px',
              marginLeft: '50px',
              padding: '50px',
              fontFamily: 'Segoe UI',
            }}
          >
            <CardTitle
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                fontWeight: 'bold',
                paddingRight: '40px',
                paddingLeft: '60px',
              }}
            >
              Bookstore
            </CardTitle>
            <img
              src="Bookstore.PNG"
              alt="Bookstore"
              className="project-image"
            />
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Description:
            </CardText>
            Website that has as a goal, making an end user able to browse within
            the available books.
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Technologies used:
            </CardText>
            JavaScript, React, Next.js, Tailwind, API.
            <CardActions>
              {/*link for github*/}
              <a
                href="https://github.com/eleniaslanidou89/e-books"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  GitHub{' '}
                  <i className="fab fa-github-square" aria-hidden="true" />
                </Button>
              </a>
              {/*link for the website*/}
              <a
                href="http://bookstore-eleni.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  LINK <i class="fas fa-link" aria-hidden="true" />
                </Button>
              </a>
            </CardActions>
          </Card>

          {/*Project #5*/}
          <Card
            shadow={5}
            style={{
              minWidth: '500',
              marginTop: '80px',
              marginLeft: '50px',
              padding: '50px',
              fontFamily: 'Segoe UI',
            }}
          >
            <CardTitle
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                fontWeight: 'bold',
                paddingRight: '40px',
                paddingLeft: '60px',
              }}
            >
              Calculator
            </CardTitle>
            <img
              src="Calculator.PNG"
              alt="calculator"
              className="project-image"
            />
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Description:
            </CardText>
            A calculator app using Vue JS. The App is fully responsive.
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Technologies used:
            </CardText>
            JavaScript, Vuejs, CSS
            <CardActions>
              {/*link for github*/}
              <a
                href="https://github.com/eleniaslanidou89/Vue.js_project"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  GitHub{' '}
                  <i className="fab fa-github-square" aria-hidden="true" />
                </Button>
              </a>
              {/*link for the app*/}
              <a
                href="https://calculatorvuejs.surge.sh/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  LINK <i class="fas fa-link" aria-hidden="true" />
                </Button>
              </a>
            </CardActions>
          </Card>

          {/*Project #6*/}
          <Card
            shadow={5}
            style={{
              minWidth: '500',
              marginTop: '80px',
              marginLeft: '50px',
              padding: '50px',
              fontFamily: 'Segoe UI',
            }}
          >
            <CardTitle
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                fontWeight: 'bold',
                paddingRight: '40px',
                paddingLeft: '40px',
              }}
            >
              E-Commerce
            </CardTitle>
            <img
              src="E-commerce.PNG"
              alt="commerce"
              className="project-image"
            />
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Description:
            </CardText>
            A complete eCommerce website. A fully functional eCommerce
            application using commerce.js.
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Technologies used:
            </CardText>
            JavaScript, React, TypeScript
            <CardActions>
              {/*link for github*/}
              <a
                href="https://github.com/eleniaslanidou89/E-Commerce"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  GitHub{' '}
                  <i className="fab fa-github-square" aria-hidden="true" />
                </Button>
              </a>
              {/*link for the website*/}
              <a
                href="https://commerce.surge.sh/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  LINK <i class="fas fa-link" aria-hidden="true" />
                </Button>
              </a>
            </CardActions>
          </Card>

          {/*Project #7*/}
          <Card
            shadow={5}
            style={{
              minWidth: '500',
              marginTop: '80px',
              marginLeft: '50px',
              padding: '50px',
              fontFamily: 'Segoe UI',
            }}
          >
            <CardTitle
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                fontWeight: 'bold',
                paddingRight: '10px',
                paddingLeft: '20px',
              }}
            >
              Remember To Buy
            </CardTitle>
            <img
              src="RememberToBuy.PNG"
              alt="ToDoList"
              className="project-image"
            />
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Description:
            </CardText>
            ToDo App which reminds what products should the user buy.
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Technologies used:
            </CardText>
            JavaScript, React, CSS
            <CardActions>
              {/*link for github*/}
              <a
                href="https://github.com/eleniaslanidou89/Remember_To_Buy"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  GitHub{' '}
                  <i className="fab fa-github-square" aria-hidden="true" />
                </Button>
              </a>
              {/*link for the app*/}
              <a
                href="https://remembertodo.surge.sh/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  LINK <i class="fas fa-link" aria-hidden="true" />
                </Button>
              </a>
            </CardActions>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        // <div className="weDesign">
        //   <h3>Welcome to my App</h3>
        //   {/*Project #1*/}
        //   <img src="1.jpg" alt="Eleni" className="wedDesign__image--project1" />
        //   <div className="webDesign__description">
        //     <ul>
        //       <li>My role: UX/UI Designer</li>
        //       <li>Challenge:</li>
        //       <li>Tools: Figma</li>
        //       <li>Duration:2 weeks</li>
        //       <li>Prototype:</li>
        //     </ul>
        //   </div>
        //   <h4>The Goal:</h4>
        //   <div className="webDesign__description">
        //     When I started working on this project my goal was to create <br />{' '}
        //     an easy to use and visually appealing online store.
        //     <br />
        //     I believe that this app has been successful in completing the goal
        //     as it has <br /> it's own distinctive style but also offers a simple
        //     user journey for customers to buy products.
        //   </div>
        //   <br />
        //   <img src="3.jpg" alt="Eleni" className="wedDesign__image--project1" />
        //   <div className="webDesign__details">
        //     <h4>Every element made with love</h4>
        //     <img
        //       src="2.jpg"
        //       alt="Eleni"
        //       className="wedDesign__image--project1"
        //     />
        //   </div>
        //   <div className="weDesign">
        //     <img
        //       src="5.jpg"
        //       alt="Eleni"
        //       className="wedDesign__image5--project1"
        //     />
        //   </div>
        //   <div className="weDesign">
        //     <img
        //       src="6.jpg"
        //       alt="Eleni"
        //       className="wedDesign__image5--project1"
        //     />
        //   </div>
        //   <hr />
        //   <div className="weDesign">
        //     <img
        //       src="4.jpg"
        //       alt="Eleni"
        //       className="wedDesign__image5--project1"
        //     />
        //   </div>
        //   <hr />
        //   <div className="weDesign">
        //     <h3>Kurious Koala KK</h3>
        //     <div className="webDesign__description">
        //       The creation of this Kurious Koala game is the result of love for
        //       design, coding and children.
        //     </div>
        //     <img
        //       src="7.jpg"
        //       alt="Eleni"
        //       className="wedDesign__image5--project1"
        //     />
        //     <img
        //       src="8.jpg"
        //       alt="Eleni"
        //       className="wedDesign__image5--project1"
        //     />
        //     <img
        //       src="9.jpg"
        //       alt="Eleni"
        //       className="wedDesign__image5--project1"
        //     />
        //   </div>
        // </div>
        <div className="projects-grid">
             {/*Project #0*/}
             <Card
            shadow={5}
            style={{
              minWidth: '500',
              marginTop: '80px',
              marginLeft: '50px',
              padding: '50px',
              fontFamily: 'Segoe UI',
            }}
          >
            <CardTitle
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                fontWeight: 'bold',
                paddingRight: '20px',
                paddingLeft: '20px',
              }}
            >
              Animal Wiki App
            </CardTitle>
            <img src="animal.jpg" alt="animal" className="project-image" />
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              My role:
            </CardText>
            UX/UI Designer
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
              }}
            >
              Challenge:
            </CardText>
            
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Tools:
            </CardText>
           Figma
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Duration:
            </CardText>
            1 day
            <img
              src="animalWiki.jpg"
              alt="animalWiki"
              className="project-image1"
            />
            <CardActions>
              {/*link for Figma*/}
              <a
                href="https://www.figma.com/file/YDsM9TgJQZERrmq4BjpPww/Wiki-Animal?node-id=0%3A1"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                PROTOTYPING <i class="fas fa-link" aria-hidden="true" />
                </Button>
              </a>
            </CardActions>
          </Card>
          {/*Project #1*/}
          <Card
            shadow={5}
            style={{
              minWidth: '500',
              marginTop: '80px',
              marginLeft: '50px',
              padding: '50px',
              fontFamily: 'Segoe UI',
            }}
          >
            <CardTitle
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                fontWeight: 'bold',
                paddingRight: '20px',
                paddingLeft: '20px',
              }}
            >
              Website - Devity Company
            </CardTitle>
            <img src="10.jpg" alt="Covid19" className="project-image" />
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              My role:
            </CardText>
            UX/UI Designer
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
              }}
            >
              Challenge:
            </CardText>
            The customer Devity is a start-up who wants help with the design of
            their website. The company has with new technology developed a
            serum, called protech, which is applied to mobile screens and makes
            the phone is both shockproof and unbreakable. At a meeting, Devity
            has developed the following keywords for the company:
            <br />● Trust ● Innovation
            <br />● Customizable ● Modern
            <br />● Customer satisfaction
            <br />● Durable
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Tools:
            </CardText>
           Figma
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Duration:
            </CardText>
            3 days
            <img
              src="preparation.jpg"
              alt="Covid19"
              className="project-image1"
            />
            <CardActions>
              {/*link for Figma*/}
              <a
                href="https://www.figma.com/file/wNaPilNv9mjenr5DjW0eHT/Website-Home-Page---Arbetsprov?node-id=0%3A1"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                PROTOTYPING <i class="fas fa-link" aria-hidden="true" />
                </Button>
              </a>
              {/*link for Wireframe*/}
              <a
                href="https://www.figma.com/file/LxQPGEkD3dTNxXbSHKB2Gq/Wireframe-Arbetsprov"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  WIREFRAME <i class="fas fa-link" aria-hidden="true" />
                </Button>
              </a>
              {/*link for User Flow*/}
              <a
                href="https://www.figma.com/file/Vox5uyxDb7HrBAyZWQVwEa/User-Flow-Arbetsprov"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  USER FLOW <i class="fas fa-link" aria-hidden="true" />
                </Button>
              </a>
            </CardActions>
          </Card>
          {/*Project #2*/}
          <Card
            shadow={5}
            style={{
              minWidth: '500',
              marginTop: '80px',
              marginLeft: '50px',
              padding: '50px',
              fontFamily: 'Segoe UI',
            }}
          >
            <CardTitle
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                fontWeight: 'bold',
                paddingRight: '20px',
                paddingLeft: '20px',
              }}
            >
              Food Ordering App
            </CardTitle>
            <img src="11.jpg" alt="Covid19" className="project-image" />
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              My role:
            </CardText>
            UX/UI Designer
            {/* <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
              }}
            >
              Challenge:
            </CardText>
            Vuejs, Tailwind */}
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Tools:
            </CardText>
            Figma
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Duration:
            </CardText>
            2 days
            <img src="14.jpg" alt="Covid19" className="project-image" />
            <CardActions>
              {/*link for Figma*/}
              <a
                href="https://www.figma.com/file/8ZYE7ycEUwHouDSxwpE7U4/Food-Ordering-App"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                PROTOTYPING <i class="fas fa-link" aria-hidden="true" />
                </Button>
              </a>
            </CardActions>
          </Card>
          {/*Project #3*/}
          <Card
            shadow={5}
            style={{
              minWidth: '500',
              marginTop: '80px',
              marginLeft: '50px',
              padding: '50px',
              fontFamily: 'Segoe UI',
            }}
          >
            <CardTitle
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                fontWeight: 'bold',
                paddingRight: '20px',
                paddingLeft: '20px',
              }}
            >
              Welcome to my App
            </CardTitle>
            <img src="1.jpg" alt="Covid19" className="project-image" />
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              My role:
            </CardText>
            UX/UI Designer
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
              }}
            >
              Challenge:
            </CardText>
            When I started working on this project my goal was to create an easy
            to use and visually appealing online store. I believe that this app
            has been successful in completing the goal as it has it's own
            distinctive style but also offers a simple user journey for
            customers to buy products.
            <br />
            Every element made with love!
            <br />
            <br />
            <img
              src="3.jpg"
              alt="Eleni"
              className="wedDesign__image--project1"
            />
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Tools:
            </CardText>
            Figma
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Duration:
            </CardText>
            2 weeks
            <img src="2.jpg" alt="Covid19" className="project-image" />
            <CardActions>
              {/*link for Figma*/}
              <a
                href="https://www.figma.com/file/PTpwo4WbbrbOxIBrfnb6Vq/Portfolio-Resource-(Copy)?node-id=736%3A13233"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                PROTOTYPING <i class="fas fa-link" aria-hidden="true" />
                </Button>
              </a>
            </CardActions>
          </Card>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Layout>
          <Tabs
            activeTab={this.state.activeTab}
            onChange={(tabId) => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab style={{ fontFamily: 'Segoe UI', color: 'black' }}>
              Frontend Projects
            </Tab>
            <Tab style={{ fontFamily: 'Segoe UI', color: 'black' }}>
              Design Projects
            </Tab>
          </Tabs>
        </Layout>
        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div>{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    )
  }
}

export default Projects
