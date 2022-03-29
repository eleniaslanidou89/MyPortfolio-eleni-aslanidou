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

class App extends Component {
  constructor(props) {
    super(props)
  }
  hideToggle() {
    var selectorId = document.querySelector('.mdl-layout')
    selectorId.MaterialLayout.toggleDrawer()
  }

  render() {
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
                      fontFamily: 'Patrick Hand, cursive',
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
                  <Link
                    to="/projects"
                    style={{
                      fontSize: '20px',
                      color: 'black',
                      fontFamily: 'Patrick Hand, cursive',
                    }}
                  >
                    Projects
                  </Link>
                  <Link
                    to="/contact"
                    style={{
                      fontSize: '20px',
                      color: 'black',
                      fontFamily: 'Patrick Hand, cursive',
                    }}
                  >
                    Moto
                  </Link>
                  <div className="page-content" />
                </Navigation>
              </Header>
              <Drawer>
                <Navigation>
                  <Link
                    onClick={() => this.hideToggle()}
                    style={{
                      textDecoration: 'none',
                      color: 'blue',
                      fontSize: '20px',
                      fontFamily: 'Patrick Hand, cursive',
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
                      fontFamily: 'Patrick Hand, cursive',
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
                      fontFamily: 'Patrick Hand, cursive',
                    }}
                  >
                    Moto
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
