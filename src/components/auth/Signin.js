import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import "./signinStyle.css";

class Signin extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push('/feature');
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
      <div id="containLogin" className="col-sm-12">
      <div className="card p-4" id="signInCard">
        <div className="card-block">
          <img src="/assets/trees.jpeg" className="img-fluid" id="imgSignIn" />
          <form className="form-group" onSubmit={handleSubmit(this.onSubmit)} id="signInForm">

                <div className="form-group mt-3">
                <Field className="form-control"
                  name="email"
                  type="text"
                  component="input"
                  autoComplete="none"
                  placeholder="Email address"
                />
                </div>

                <div className="form-group">
                <Field className="form-control"
                  name="password"
                  type="password"
                  component="input"
                  autoComplete="none"
                  placeholder="Password"
                />
                </div>
            <div>{this.props.errorMessage}</div>
            <button type="submit" className="btn btn-primary" id="signInBtn">Sign In</button>

          </form>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signin' })
)(Signin);
