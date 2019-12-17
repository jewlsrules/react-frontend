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
      <>
        <div className="applications-container">
      {/*  <h3>This is an Application Component</h3> */}

          <div className="app-info">

            <h3><strong>User Id:</strong> <span>{this.props.data.user_id}</span></h3>

              <h3><strong>Company:</strong><span> {this.props.data.company_name}</span></h3>

              <h3><strong>Job Title:</strong><span> {this.props.data.job_title}</span></h3>

              <h3><strong>Job Link:</strong><span> {this.props.data.job_link}</span></h3>

              <h3><strong>Status:</strong><span> {this.props.data.appStatus}</span></h3>
          </div>

          <div className="app-buttons">

            <ul>

              <button><li onClick ={()=>{
                this.props.handleView('editApplication', this.props.data)}}>Edit Application</li></button>
              <button><li onClick={()=>{
                this.props.handleDelete(this.props.data.id)}}>Delete Application</li></button>
            </ul>
          </div>
        {/*  <p>End of application component</p> */}
        </div>
      </>
    )
  }
}


// =============================
// EXPORT
// =============================
export default Applications
