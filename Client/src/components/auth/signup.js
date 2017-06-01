import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

const divStyle = {
  margin:'0px 28px'
};

class Signup extends Component{

  handleFormSubmit(formProps){
    this.props.signupUser(formProps);
  }

  //Render error message when authentication data is not correct
  renderAlert(){
    if(this.props.errorMessage){
      return(
        <div className="alert alert-success">
          <strong>{this.props.errorMessage}</strong>
        </div>
      );
    }
  }

  render(){
    const { handleSubmit, fields: {email, password, passwordconfirm}} = this.props;

    return(
      <div className="login_wrapper">
        <div id="register" className="animate form login_form">
          <section className="login_content">
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className='ng-dirty ng-valid-parse ng-valid ng-valid-required'>
              <img src="../../../../public/images/forisLogo_green.png" alt="Logo" height="42" width="150"align="middle" style={divStyle}></img>
              <h1>Create Account</h1>

              <div>
                <input {...email} type="email" name="newuseremail" className="form-control" placeholder="Email"/>
                {email.touched && email.error && <div className="error">{email.error}</div>}
              </div>

              <div>
                <input {...password} type="password" name="newuserpassword" className="form-control" placeholder="Password"/>
                {password.touched && password.error && <div className="error">{password.error}</div>}
              </div>

              <div>
                <input {...passwordconfirm} type="password" name="newuserpassword" className="form-control" placeholder="Confirm Password" required="" ng-model="newuserpassword"/>
                {passwordconfirm.touched && passwordconfirm.error && <div className="error">{passwordconfirm.error}</div>}
              </div>

              <div>
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary">Sign Up</button>
              </div>

              <div className="clearfix"></div>

              <div className="separator">
                <p className="change_link">Already a member ?
                  <a href="/signin" className="to_register"> Log in </a>
                </p>

                <div className="clearfix"></div>

                <div>
                  <h1><i>Foris.io</i> </h1>
                  <p>© 2017  foris.io inc   Oakland, CA  94610     Privacy Policy    All Rights Reserved.</p>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

//Peform input validation before sending the data to create a new user
function validate(formProps){
  const errors = {};

  //Email validation
  if (!formProps.email) {
    errors.email = 'Please enter email';
  }
  //Password validation
  if (!formProps.password) {
    errors.password = 'Please enter password';
  }
  if (!formProps.passwordconfirm) {
    errors.passwordconfirm = 'Please enter password confirmation';
  }
  if(formProps.password !== formProps.passwordconfirm){
    errors.password = 'Password must be matching!';
  }
  return errors;
}

//Map state to properties which would be accessible by Sign Up component
function mapStateToProps(state){
  console.log('Error found in reducers', state.auth.error);
  return {errorMessage: state.auth.error};
}

export default reduxForm({
  form:'signup',
  fields: ['email','password','passwordconfirm'],
  validate
},mapStateToProps,actions)(Signup);
