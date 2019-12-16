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
      user: '',
      companyName: '',
      jobTitle: '',
      jobLink: '',
      appStatus: ''
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
  console.log('submitted')
} //  closing for handleSubmit

//  this will set state after form is loaded to populate pre-values/data in fields for editing/updating
componentDidMount() {
  this.setState({
    // id: this.props.formInput.id,
    // user: this.props.formInput.user,
    // companyName: this.props.formInput.companyName,
    // jobTitle: this.props.formInput.jobTitle,
    // jobLink: this.props.formInput.jobLink,
    // appStatus: this.props.formInput.appStatus
  })
}  // closing for componentDidMount

// ==============
// RENDER
// ==============
  render () {
    return (
      <div>
        <h1>this is the form component</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='user'>user</label>
          <input type='text' value={this.state.user} id='user' onChange={this.handleChange}/>

          <label htmlFor='companyName'>company name</label>
          <input type='text' value={this.state.companyName} id='cmpanyName' onChange={this.handleChange}/>

          <label htmlFor='jobTitle'>job title</label>
          <input type='text' value={this.state.jobTitle} id='jobTitle' onChange={this.handleChange}/>

          <label htmlFor='jobLink'>job link</label>
          <input type='text' value={this.state.jobLink} id='jobLink' onChange={this.handleChange}/>

          <label htmlFor='appStatus'>app status</label>
          <input type='text' value={this.state.appStatus} id='appStatus' onChange={this.handleChange}/>

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
