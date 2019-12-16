// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react';
import './App.css';

// components
import Main from './components/Main.js'

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
        user_id: null,
        company_name: null,
        job_title: null,
        job_link: null,
        app_status: null
      }
    }
  } // closing for constructor

//need this to manage formInput and page views
  handleView = (view, data) => {
    console.log('handling');
    let pageTitle = ''
    let formInputs = {
      user_id: '',
      company_name: '',
      job_title: '',
      job_link: '',
      app_status: '',
      id: null
    }
    // show the page title depending on the page:
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
      },
      formInputs: formInputs
    })
  } //  closing for handleView


// ==============
// RENDER
// ==============
  render () {
    return (
      <div className='container'>
        <h1>Job Application Tracker</h1>
        <nav>
          <h3 onClick= {()=>{
            this.handleView('home')}}>Applications</h3>
          <h3 onClick ={()=>{
            this.handleView('addApplication')}}>Add New Application</h3>
          <Main
            view={this.state.view}
            handleView={this.handleView}
            formInputs={this.state.formInputs}
          />
        </nav>
        <footer>Created for GA by <a href='https://github.com/ashbrick'>Ashley Brickhouse</a> and <a href='https://github.com/jewlsrules'>Jewls Krueger</a>
        </footer>
      </div>
    )
  }
} //  closing for App component

// =============================
// EXPORT
// =============================
export default App;
