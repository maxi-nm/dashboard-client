import React, { Component } from 'react';
import styles from './LoginForm.scss';

export default class LoginForm extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className="d-flex justify-content-center h-100">
          <div className={styles.card}>
            <div className={styles.LoginForm__header}>
              <h3>Sign In</h3>
            </div>
            <div className={styles.LoginForm__body}>
              <form action="">
                <div className="input-group form-group">
                  <div className={styles.input_group_prepend}>
                    <span className={styles.input_group_text}>
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                  ></input>
                </div>
                <div className="input-group form-group">
                  <div className={styles.input_group_prepend}>
                    <span className={styles.input_group_text}>
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                  ></input>
                </div>
                <div className={styles.remember}>
                  <input type="checkbox" /> Remember me
                </div>
                <div className="from-group">
                  <input
                    type="submit"
                    value="Login"
                    className={styles.btn}
                  ></input>
                </div>
              </form>
            </div>
            <div className={styles.card_footer}>
              <div className={styles.links}>
                Don't have an account?<a href="#">Sign Up</a>
              </div>
              <div className="d-flex justify-content-center">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
