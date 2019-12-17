// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// =============================
// COMPONENT CLASS
// =============================
class Menu extends React.Component {


// ==============
// RENDER
// ==============
  render () {
    return (
      <div className="menu">
        <ul>
          <li onClick={()=>
          {this.props.handleView('home')}}>View All Applications</li>
          <li onClick={()=>
          {this.props.handleView('addApplication')}}>Add New</li>
        </ul>
      </div>

    )
  }
} // closing for Menu component


// =============================
// EXPORT
// =============================
export default Menu
