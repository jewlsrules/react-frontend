// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react';
import './App.css';

// components
import Header from './components/Header.js'
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
        pageTitle: 'View Your Applications'
      },
      formInput: {
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
    let formInput = {
      id: '',
      user_id: '',
      company_name: '',
      job_title: '',
      job_link: '',
      app_status: '',
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
        formInput = {
          id: data.id,
          user_id: data.user_id,
          company_name: data.company_name,
          job_title: data.job_title,
          job_link: data.job_link,
          app_status: data.app_status
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
      formInput: formInput
    })
  } //  closing for handleView

// ==============
// RENDER
// ==============
  render () {
    return (
      <div className='page-container'>
          <Header/>

        <div className='content-wrap'>

          <Menu handleView={this.handleView}/>

          <Main
            view={this.state.view}
            handleView={this.handleView}
            formInput={this.state.formInput}
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
