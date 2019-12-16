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
  baseUrl = 'http://localhost:8888/' // heroku code will go in the else statement
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
  handleCreate = (createData) => {
    console.log('creating new application')
    fetch(`${baseUrl}/applications`, {
      body: JSON.stringify(createData),
      method: 'POST',
      headers: { // these will always be this way
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdApp => {
      return createdApp.json() // this is returning an error right now, not sure why.
    })
    .then(jsonedApp => {
      this.props.handleView('home')
      this.setState(prevState => {
        prevState.applications = jsonedApp
        return { applications: prevState.applications }
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
      this.props.handleView('home')
      this.fetchPosts()
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
      <h3>Main.js Component {this.props.view.pageTitle}</h3>
      {
        this.props.view.page === 'home'
        ? this.state.applications.map((appData) => (
          <Applications
            key={appData.id}
            data={appData}
            handleView={this.props.handleView}
            handleDelete={this.handleDelete}
          />
        ))
        : <Form
          handleCreate={this.handleCreate}
          handleUpdate={this.handleUpdate}
          formInputs={this.props.formInputs}
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
