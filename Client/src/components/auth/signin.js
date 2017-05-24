import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component{
  handleFormSubmit({ email, password }){
      console.log(email,password);
      this.props.signinUser({ email, password});
  }

  //Render error message when authentication data is not correct
  renderAlert(){
    if(this.props.errorMessage){
      return(
        <div className= "alert alert-danger">
          <strong>{this.props.errorMessage}</strong>
        </div>
      );
    }
  }
  render(){
    const { handleSubmit, fields: { email,password }} = this.props;
    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      <fieldset className='form-group'>
        <label>Email:</label>
        <input {...email} className='form-control'/>
      </fieldset>
      <fieldset className='form-group'>
        <label>Password:</label>
        <input {...password} type="password" className='form-control'/>
      </fieldset>
      {this.renderAlert()}
      <button action='submit' className='btn btn-primary'>Sign In</button>
    </form>
   );
  }
}

//Map state to properties which would be accessible by Sign In component
function mapStateToProps(state){
  return {errorMessage: state.auth.error};
}

//Export form with actions
export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
},mapStateToProps, actions)(Signin);
