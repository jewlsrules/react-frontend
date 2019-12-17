// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react';
import './App.css';

// components
import Main from './components/Main.js'
import Menu from './components/Menu.js'

// =============================
// COMPONENT CLASS
// =============================

class App extends React.Component {
  //constructor
  constructor(props){
    super(props)
    this.state = {
      view: {
        page: 'home',
      },
      formInputs: {
        companyName: null,
        jobTitle: null,
        jobLink: null,
        appStatus: null
      }
    }
  } // closing for constructor

//need this to manage formInput and page views
  handleView = (view, data) => {
    console.log('handling')
    let pageTitle = ''
    let formInputs = {
      name: '',
      image: '',
      body: '',
      id: null
    }
    //show the page title depending on the page:
    switch(view) {
      case 'home':
        pageTitle = 'View Your Applications'
        break
      case 'addApplication':
        pageTitle = 'Track a New Application'
        break
      case 'editApplication':
        pageTitle = 'Update Application'
        formInputs = {
          companyName: data.companyName,
          jobTitle: data.companyTitle,
          jobLink: data.jobLink,
          appStatus: data.appStatus
        }
        break
      default:
        break
    }
    this.setState({
      view: {
        page: view,
        pageTitle: pageTitle
      },
      formInputs: formInputs
    })
  } //  closing for handleView

// ==============
// RENDER
// ==============
  render () {
    return (
      <div className='page-container'>
        <div id='content-wrap'>

          <h1>Job Application Tracker</h1>

          <Menu/>

            <Main
              view={this.state.view}
              handleView={this.handleView}
              formInputs={this.state.formInputs}
            />

            <footer className='footer'>Created for GA by <a href='https://github.com/ashbrick'>Ashley Brickhouse</a> and <a href='https://github.com/jewlsrules'>Jewls Krueger</a>
            </footer>
        </div>
      </div>
    )
  }
} //  closing for App component

// =============================
// EXPORT
// =============================
export default App;
