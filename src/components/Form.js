// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// =============================
// COMPONENT CLASS
// =============================
class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      id: null, //need this for update
      user_id: '',
      company_name: '',
      job_title: '',
      job_link: '',
      app_status: ''
    } //  closing for state
  } //  closing for constructor

// ==============
// HANDLERS/FUNCTIONS
// ==============

//  this handles when the form changes
handleChange = (event) => {
  this.setState({[event.target.id]:event.target.value})
} // closing for handleChange

//  this will handle creating and updating new job app.
handleSubmit = (event) => {
  event.preventDefault()
  console.log('hi');
  if (this.props.view.page === 'addApplication') {
    this.props.handleCreate(this.state)
  } else if (this.props.view.page === 'editApplication') {
    this.props.handleUpdate(this.state)
  }
} //  closing for handleSubmit

//  this will set state after form is loaded to populate pre-values/data in fields for editing/updating
componentDidMount() {
  this.setState({
    id: this.props.formInput.id,
    user_id: this.props.formInput.user_id,
    company_name: this.props.formInput.company_name,
    job_title: this.props.formInput.job_title,
    job_link: this.props.formInput.job_link,
    app_status: this.props.formInput.app_status
  })
}  // closing for componentDidMount

// ==============
// RENDER
// ==============
  render () {
    return (
      <div className="form">
        <h1>Add An Application to Track</h1>
        <form onSubmit={this.handleSubmit}>

          <label htmlFor='user_id'>User ID: </label>
          <input type='text' value={this.state.user_id} id='user_id' onChange={this.handleChange}/>

          <label htmlFor='company_name'>Company: </label>
          <input type='text' value={this.state.company_name} id='company_name' onChange={this.handleChange}/>

          <label htmlFor='job_title'>Job Title: </label>
          <input type='text' value={this.state.job_title} id='job_title' onChange={this.handleChange}/>

          <label htmlFor='job_link'>Link to Posting: </label>
          <input type='text' value={this.state.job_link} id='job_link' onChange={this.handleChange}/>

          <label htmlFor='app_status'>Status: </label>
          <input type='text' value={this.state.app_status} id='app_status' onChange={this.handleChange}/>

          <input type="submit" value="Submit"/>
        </form>
      </div>
    ) //closing for return
  }


} //  closing for Form component

// =============================
// EXPORT
// =============================
export default Form
