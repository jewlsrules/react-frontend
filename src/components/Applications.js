// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// =============================
// COMPONENT CLASS
// =============================

class Applications extends React.Component {

// =============================
// HANDLERS/FUNCTIONS
// =============================

  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <div className="Applications">
      <h3>This is an Application Component</h3>

        <div className="app-info">
          <p>User Id: {this.props.data.user_id}</p>
          <p>Company: {this.props.data.company_name}</p>
          <p>Job Title: {this.props.data.job_title}</p>
          <p>Job Link: {this.props.data.job_link}</p>
          <p>Status: {this.props.data.appStatus}</p>
        </div>

        <div className="app-buttons">

          <ul>
            <li onClick ={()=>{
              this.props.handleView('editApplication', this.props.data)}}>Edit Application</li>
            <li onClick={()=>{
              this.props.handleDelete(this.props.data.id)}}>Delete Application</li>
          </ul>
        </div>
        <p>End of application component</p>
      </div>
    )
  }
}


// =============================
// EXPORT
// =============================
export default Applications
