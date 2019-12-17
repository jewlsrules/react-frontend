// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

//  components
import Form from './Form.js'
import Applications from './Applications.js'

// this is setting the URL, by default the app doesn't look for the right URL, so this is telling it where to go.
let baseUrl = '';
// if (process.env.NODE_ENV === 'development') {
//   baseUrl = 'localhost:8888/applications'
// } else {
  baseUrl = 'https://damp-badlands-51088.herokuapp.com/api/' // heroku code will go in the else statement
// }

// =============================
// COMPONENT CLASS
// =============================

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      applications: []
    }
  }

// =============================
// HANDLERS/FUNCTIONS
// =============================

// since our main data is being pulled into main, this is where we'll write our functions for manipulating the data

  handleCreate = (createData) => {
    console.log('creating new application')
    fetch(`${baseUrl}/applications`, { //grab data from API
      body: JSON.stringify(createData), // this is the data
      method: 'POST', //using POST method for creating data
      headers: { // these will always be this way
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdApp => { //take the createdApp data
      return createdApp.json() // turn it into json, which is the array of applications -----> this is returning an error right now, not sure why.
    })
    .then(jsonedApp => { //this is now the createdApp that we made
      this.props.handleView('home')
      this.setState(prevState => { //prevState creates a copy of the data we had
        prevState.applications = jsonedApp //prevState.applications is the data before it was updated, taking it and setting it to the whole array of applications (jsonedApp)
        return { applications: prevState.applications } //returns all the applications plus the one just created
      })
    })
    .catch(err=>console.log(err))
  } //end of handleCreate

  handleUpdate = (updateData) => {
    console.log('updating application')
    fetch(`${baseUrl}/applications/${updateData.id}`, {
      body: JSON.stringify(updateData),
      method: 'PUT',
      headers: { // these will always be this way
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(updatedPost => {
      this.props.handleView('home') // switch back to home view after editing an app
      this.fetchPosts()//make another AJAX call to automatically load the app
    })
    .catch(err=>console.log(err))
  } // end of handle update

  handleDelete = (id) => {
    console.log('Deleting Application')
    fetch(`${baseUrl}/applications/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(json => {
      this.setState(prevState => {
        const applications = prevState.applications.filter(post=> post.id !== id)
        return {applications}
      })
    })
    .catch(err=>console.log('deleting error: ',err))
  } // end of handle delete

  // this will pull all applications from our API
  fetchPosts = () => {
      fetch(`${baseUrl}/applications`)
      .then(data => data.json())
      .then(jData => {
        this.setState({
          applications: jData
        })
      }).catch(err=>console.log('fetch error: ', err))
    } // end of fetch posts

  componentDidMount(){ // this will only run once right after page load, built in function - you don't need to bind this method.
    this.fetchPosts()
  }

  // ==============
  // RENDER
  // ==============
  render () {
    console.log(this.state.applications);
    return (
      <div className="main">
      {/*<h3>Main.js Component {this.props.view.pageTitle}</h3>*/}
      {
        this.props.view.page === 'home'
        ? this.state.applications.map((data) => (
          <Applications
            // key={appData.id}
            key={data.id}
            // data={appData}
            data={data}
            handleView={this.props.handleView}
            handleDelete={this.handleDelete}
          />
        ))
        : <Form
          handleCreate={this.handleCreate}
          handleUpdate={this.handleUpdate}
          formInput={this.props.formInput}
          view={this.props.view}
        />
      }
      </div>
    )
  }
} //closing for Main component

// =============================
// EXPORT
// =============================
export default Main
