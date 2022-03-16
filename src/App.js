import React, { Component } from 'react'
import './App.css'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/main'
import { Link } from 'react-router-dom'

const list = [
  {
    title: 'React1',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux2',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
]

function isSearched(searchTerm) {
  return function (item) {
    return (
      !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }
}

// API KEY: APPID=f8384513fad5f91ea04d07a2cbf916ec
const API =
  'https://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=f8384513fad5f91ea04d07a2cbf916ec&units=metric'

class App extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   temperature: '',
    //}
  }
  hideToggle() {
    var selectorId = document.querySelector('.mdl-layout')
    selectorId.MaterialLayout.toggleDrawer()
  }
  // hideToggle() {
  //   var selectorId = document.querySelector('.mdl-layout')
  //   selectorId.MaterialLayout.toggleDrawer()
  // }

  // componentDidMount() {
  //   console.log('CDM ran')
  //   fetch(API)
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ temperature: data.main.temp }))
  // }

  render() {
    // const temperature = this.state.temperature
    // const pressure = this.state.pressure;
    // const humidity = this.state.humidity;

    return (
      <div className="App">
        <header className="App-header">
          <div className="demo-big-content">
            <Layout>
              <Header
                style={{
                  textDecoration: 'none',
                  fontColor: 'black',
                  fontFamily: 'Sriracha',
                  backgroundColor: '#FFFFFF',
                }}
                title={
                  <Link
                    style={{
                      textDecoration: 'bold',
                      color: 'black',
                      fontFamily: 'Dancing Script, cursive',
                      fontSize: '25px',
                    }}
                    to="/"
                  >
                    Eleni Aslanidou
                  </Link>
                }
                scroll
              >
                <Navigation>
                  {/* <Link
                    to="/"
                    style={{
                      fontSize: '20px',
                      color: 'black',
                      fontFamily: 'Sriracha',
                    }}
                  >
                    Home
                  </Link> */}
                  <Link
                    to="/projects"
                    style={{
                      fontSize: '20px',
                      color: 'black',
                      fontFamily: 'Sriracha',
                    }}
                  >
                    Projects
                  </Link>
                  <Link
                    to="/contact"
                    style={{
                      fontSize: '20px',
                      color: 'black',
                      fontFamily: 'Sriracha',
                    }}
                  >
                    About
                  </Link>

                  <div className="page-content" />
                </Navigation>
                {/* <div className="temperature">
                  Temperature in Stockholm: {temperature || '?'}°C
                </div> */}
              </Header>
              <Drawer>
                <Navigation>
                  <Link
                    onClick={() => this.hideToggle()}
                    style={{
                      textDecoration: 'none',
                      color: 'blue',
                      fontSize: '20px',
                      fontFamily: 'Sriracha',
                    }}
                    to="/"
                  >
                    Home
                  </Link>
                  <Link
                    onClick={() => this.hideToggle()}
                    to="/projects"
                    style={{
                      color: 'black',
                      fontSize: '15px',
                      fontFamily: 'Sriracha',
                    }}
                  >
                    Projects
                  </Link>
                  <Link
                    onClick={() => this.hideToggle()}
                    to="/contact"
                    style={{
                      color: 'black',
                      fontSize: '15px',
                      fontFamily: 'Sriracha',
                    }}
                  >
                    About
                  </Link>
                </Navigation>
              </Drawer>
              <Content>
                <Main />
              </Content>
            </Layout>
          </div>
        </header>
      </div>
    )
  }
}

export default App
