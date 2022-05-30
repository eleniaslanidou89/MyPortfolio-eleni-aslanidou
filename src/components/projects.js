import React, { Component } from 'react'
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardText,
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
    if (this.state.activeTab === 1) {
      return (
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
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                fontWeight: 'bold',
                paddingRight: '20px',
                paddingLeft: '20px',
              }}
            >
            Create an API
            </CardText>
            <img src="API.jpg" alt="API" className="project-image" />
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
            My task was to create a Movie API written as a class using JavaScript. In complex applications we have different endpoints so I have used Express Wireframe which is both fast and lightweight for building applications. Also my project is based on Client Server Architecture which is a computing model in which the server hosts, delivers and manages most of the resources and services to be consumed by the client.
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
            Joi(data validation) <br />
            Express <br />
            Mocha,Chai,Supertest(Testing)
            <CardActions>
              {/*link for github*/}
              <a
                href="https://github.com/eleniaslanidou89/Trainee-code-test"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  GitHub{' '}
                  <i className="fab fa-github-square" aria-hidden="true" />
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
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                fontWeight: 'bold',
                paddingRight: '20px',
                paddingLeft: '20px',
              }}
            >
              Covid19 Tracker
            </CardText>
            <img src="covid.svg" alt="Covid19" className="project-image" />
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
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                fontWeight: 'bold',
                paddingRight: '20px',
                paddingLeft: '0px',
              }}
            >
              Eleni's Blog
            </CardText>
            <img src="blog.svg" alt="Blog" className="project-image" />
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
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                fontWeight: 'bold',
                paddingRight: '40px',
                paddingLeft: '0px',
              }}
            >
              Weather App
            </CardText>
            <img src="weather.svg" alt="WeatherApp" className="project-image" />
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
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                fontWeight: 'bold',
                paddingRight: '40px',
                paddingLeft: '0px',
              }}
            >
              Bookstore
            </CardText>
            <img src="books.svg" alt="Bookstore" className="project-image" />
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
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                fontWeight: 'bold',
                paddingRight: '40px',
                paddingLeft: '0px',
              }}
            >
              Calculator
            </CardText>
            <img
              src="calculator.svg"
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
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                fontWeight: 'bold',
                paddingRight: '40px',
                paddingLeft: '0px',
              }}
            >
              E-Commerce
            </CardText>
            <img src="shopping.svg" alt="commerce" className="project-image" />
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
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Segoe UI',
                fontWeight: 'bold',
                paddingRight: '10px',
                paddingLeft: '20px',
              }}
            >
              Remember To Buy
            </CardText>
            <img src="list.svg" alt="ToDoList" className="project-image" />
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
    } else if (this.state.activeTab === 0) {
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
              fontFamily: 'Patrick Hand, cursive',
            }}
          >
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Patrick Hand, cursive',
                fontWeight: 'bold',
                paddingRight: '20px',
                paddingLeft: '20px',
              }}
            >
              Gets Things Done - ToDo App
            </CardText>
            <img src="toDoApp.svg" alt="Covid19" className="project-image" />
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Patrick Hand, cursive',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Description:
            </CardText>
            Modern Mobile App in Figma. Illustartions are taken from 'unDraw'
            website.
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Patrick Hand, cursive',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Tools:
            </CardText>
            Figma
            <CardActions>
              {/*link for Figma*/}
              <a
                href="https://www.figma.com/file/cicxttFwhMftRConpP0ozH/Mobile-Design?node-id=11%3A65"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  PROTOTYPING <i class="fas fa-link" aria-hidden="true" />
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
              fontFamily: 'Patrick Hand, cursive',
            }}
          >
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Patrick Hand, cursive',
                fontWeight: 'bold',
                paddingRight: '20px',
                paddingLeft: '20px',
              }}
            >
              Food Ordering App
            </CardText>
            <img src="food.svg" alt="Covid19" className="project-image" />
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Patrick Hand, cursive',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Description:
            </CardText>
            Do you like tasty food? Let's dive into the prototyping exploration
            in this Modern Mobile App.
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Patrick Hand, cursive',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Tools:
            </CardText>
            Figma
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
              fontFamily: 'Patrick Hand, cursive',
            }}
          >
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Patrick Hand, cursive',
                fontWeight: 'bold',
                paddingRight: '20px',
                paddingLeft: '20px',
              }}
            >
              Welcome to my App
            </CardText>
            <img src="app.svg" alt="Covid19" className="project-image" />
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Patrick Hand, cursive',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Description:
            </CardText>
            When I started working on this project my goal was to create an easy
            to use and visually appealing online store. I believe that this app
            has been successful in completing the goal as it has it's own
            distinctive style but also offers a simple user journey for
            customers to buy products.
            <br />
            Every element made with love!
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Patrick Hand, cursive',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Tools:
            </CardText>
            Figma
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
          {/*Project #4*/}
          <Card
            shadow={5}
            style={{
              minWidth: '500',
              marginTop: '80px',
              marginLeft: '50px',
              padding: '50px',
              fontFamily: 'Patrick Hand, cursive',
            }}
          >
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Patrick Hand, cursive',
                fontWeight: 'bold',
                paddingRight: '20px',
                paddingLeft: '20px',
              }}
            >
              Website - Devity Company
            </CardText>
            <img src="website.svg" alt="Covid19" className="project-image" />
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Patrick Hand, cursive',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Description:
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
                fontFamily: 'Patrick Hand, cursive',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Tools:
            </CardText>
            Figma
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
          {/*Project #5*/}
          <Card
            shadow={5}
            style={{
              minWidth: '500',
              marginTop: '80px',
              marginLeft: '50px',
              padding: '50px',
              fontFamily: 'Patrick Hand, cursive',
            }}
          >
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Patrick Hand, cursive',
                fontWeight: 'bold',
                paddingRight: '20px',
                paddingLeft: '20px',
              }}
            >
              Animal Wiki - App
            </CardText>
            <img src="animal.svg" alt="animal" className="project-image" />
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Patrick Hand, cursive',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Description:
            </CardText>
            I love animals! That's why I chose to learn more methods in Figma by
            creating this App. Images, colors combined with detailed text makes
            this Modern App easy to use it.
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Patrick Hand, cursive',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Tools:
            </CardText>
            Figma
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
          {/*Project #6*/}
          <Card
            shadow={5}
            style={{
              minWidth: '500',
              marginTop: '80px',
              marginLeft: '50px',
              padding: '50px',
              fontFamily: 'Patrick Hand, cursive',
            }}
          >
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Patrick Hand, cursive',
                fontWeight: 'bold',
                paddingRight: '20px',
                paddingLeft: '20px',
              }}
            >
              3D Design - App
            </CardText>
            <img src="design.svg" alt="3D-design" className="project-image" />
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Patrick Hand, cursive',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Description:
            </CardText>
            This 3D App is totally an amazing experience. By 3D illustrations
            which I took from icons8.com the app has more lively appearance.
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Patrick Hand, cursive',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Tools:
            </CardText>
            Figma
            <CardActions>
              {/*link for Figma*/}
              <a
                href="https://www.figma.com/file/eWiPDiVTx0KrKE7avqlxl8/3D-Design?node-id=0%3A1"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>
                  PROTOTYPING <i class="fas fa-link" aria-hidden="true" />
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
              fontFamily: 'Patrick Hand, cursive',
            }}
          >
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Patrick Hand, cursive',
                fontWeight: 'bold',
                paddingRight: '20px',
                paddingLeft: '20px',
              }}
            >
              Eleni's Website
            </CardText>
            <img
              src="websiteillustration.svg"
              alt="Eleni"
              className="project-image"
            />
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Patrick Hand, cursive',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Description:
            </CardText>
            On this prototyping I worked on the home page of my website.
            <CardText
              style={{
                fontSize: '20px',
                fontFamily: 'Patrick Hand, cursive',
                paddingLeft: '5px',
                textDecoration: 'underline',
              }}
            >
              Tools:
            </CardText>
            Figma
            <CardActions>
              {/*link for Figma*/}
              <a
                href="https://www.figma.com/file/MwCBFWM9wEQsDylyy9BaOA/Eleni's-Blog?node-id=0%3A1"
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
            <Tab
              style={{ fontFamily: 'Patrick Hand, cursive', color: 'black' }}
            >
              Design
            </Tab>
            <Tab
              style={{ fontFamily: 'Patrick Hand, cursive', color: 'black' }}
            >
              Development
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
