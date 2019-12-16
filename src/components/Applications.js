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
      <h3>This is the Application Component</h3>

        <div className="app-info">
          {/* }{this.props.data.user}
          {this.props.data.companyName}
          {this.props.data.jobTitle}
          {this.props.data.jobLink}
          {this.props.data.appStatus} */}
        </div>

        <div className="app-buttons">

          <ul>
            <li>edit application</li>
            <li>delete</li>
          </ul>
        </div>
        <p>End of application component</p>
      </div>
    )
  }
}

// TO USE AFTER WE FIGURE OUT THE DATA:

// <ul>
//   <li onClick={()=>
//   {this.props.handleView('edit', this.props.data)}}>edit application</li>
//   <li onClick={()=>
//   {this.props.handleDelete(this.props.data.id)}}>delete</li>
// </ul>

// =============================
// EXPORT
// =============================
export default Applications
