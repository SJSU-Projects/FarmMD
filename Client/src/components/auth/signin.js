import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component{
  handleFormSubmit({ email, password }){
    console.log(email,password);
    this.props.signinUser({ email, password});
  }

  signUp(){
    browserHistory.push('/signUp');
  }

  //Render error message when authentication data is not correct
  renderAlert(){
    if(this.props.errorMessage){
      return(
        <div className= "alert alert-success">
          <strong>{this.props.errorMessage}</strong>
        </div>
      );
    }
  }
  render(){
    const { handleSubmit, fields: { email,password }} = this.props;

    const divStyle = {
      margin:'0px 28px'
    };

    return(
      <div>
        <a className="hiddenanchor" id="signup"></a>
        <a className="hiddenanchor" id="signin"></a>
        <div className="login_wrapper">
          <div className="animate form login_form">
            <section className="login_content">
              <form name="loginForm" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <img src="../../../../public/images/forisLogo_green.png" alt="Logo" height="42" width="150"align="middle" style={divStyle}></img>
                <h1>Login</h1>
                <div>
                  <input {...email} type="text" name ="name" className="form-control" placeholder="Email ID"/>
                </div>
                <div>
                  <input {...password} type="password" name = "password" className="form-control" placeholder="Password"/>
                </div>
                <div>
                  {this.renderAlert()}
                  <button action='submit' className='btn btn-primary'>Sign In</button>
                </div>

                <div className="clearfix"></div>

                <div className="separator">
                  <p className="change_link">New to site?
                    <a className="to_register" href='/signup'> Create Account </a>
                  </p>

                  <div className="clearfix"></div>

                  <div>
                    <h1>Foris.io</h1>
                    <p>© 2017  foris.io inc   Oakland, CA  94610     Privacy Policy   All Rights Reserved.</p>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
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
