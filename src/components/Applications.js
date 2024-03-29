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

            <h3><strong>User Id:</strong> <span className="app-data">{this.props.data.user_id}</span></h3>

            <h3><strong>Job Title:</strong><span className="app-data"> {this.props.data.job_title}</span></h3>

              <h3><strong>Company:</strong><span className="app-data"> {this.props.data.company_name}</span></h3>

              <h3><strong>Job Link:</strong><span className="app-data"> <a href={this.props.data.job_link}>{this.props.data.job_link}</a></span></h3>

              <h3><strong>Status:</strong><span className="app-data"> {this.props.data.app_status}</span></h3>
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
