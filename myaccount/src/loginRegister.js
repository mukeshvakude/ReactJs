import React, { useState } from "react";

const LoginRegister = () => {
  let [loginId, SetloginId] = useState("");
  let [passwordRadio, setpasswordRadio] = useState(true);
  let [otpradio, setotpradio] = useState(false);
  let [isLoginClicked, setIsLoginClicked] = useState(false);
  let [password, setPassword] = useState("");
  let [oneTimePasswprd, setOneTimePasswprd] = useState("");
  let [isRegisterClicked, setIsRegisterClicked] = useState(false);
  let [isLoginForm, setIsLoginForm] = useState(true);
  let [isRegisterFormCliked, setIsRegisterFormCliked] = useState(false);
  let [registerTitle, setRegisterTitle] = useState("Mr");
  let [registerFirstName, setRegisterFirstName] = useState("");
  let [registerLastName, setRegisterLastName] = useState("");
  let [registerPassword, setRegisterPassword] = useState("");
  let [registerPasswordConfirmed, setRegisterPasswordConfirmed] = useState("");
  let [registerCheckBox, setRegisterCheckBox] = useState(true);
  let [registerEmailId, setRegisterEmailId] = useState("");
  let [registerMobileNo, setRegisterMobile] = useState("");

  function validateLoginPopUpForm() {
    if (
      (password.length > 0 && loginId.length > 0) ||
      (oneTimePasswprd.length > 0 && loginId.length > 0)
    ) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <div
        className="modal fade login_reg_popup"
        tabIndex="-1"
        role="dialog"
        id="loginRegisterPopup"
        data-backdrop="static"
        data-keyboard="false"
      >
        <div className="modal-dialog">
          <div className="modal-content" id="registerLogin">
            <div className="modal-header">
              <button
                type="button"
                className="close login_reg_popup_close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="modal-title">Login to Thomascook</div>
            </div>
            <div className="modal-body  login_reg_body">
              {isLoginForm && (
                <div className="login_form_holder login_reg_div">
                  <form className="login_reg_form">
                    <div className="form_control_grp">
                      <label>Your Email Address hello</label>
                      <input
                        type="text"
                        placeholder="Email ID will be your username"
                        className="form-control"
                        id="loginId"
                        maxLength="50"
                        autoComplete="off"
                        value={loginId}
                        onChange={(e) => {
                          SetloginId(e.target.value);
                          setIsLoginClicked(false);
                        }}
                      />
                      {loginId.length == 0 && isLoginClicked && (
                        <div className="invalid-msg-wrapperno emailinvalid">
                          <p className="invalid-msg-content">
                            Please Enter Valid Email Id
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="tc_login_otp_details">
                      <div className="tc_login_otp_three tc_login_otp_details_login">
                        {" "}
                        Login With{" "}
                      </div>

                      <div className="pull-rightt">
                        <div className="tc_login_otp_three tc_login_otp_details_pass">
                          <input
                            type="radio"
                            name="loginType"
                            checked={passwordRadio == true}
                            onChange={() => {
                              setotpradio(false);
                              setpasswordRadio(true);
                            }}
                          />
                          <span> Password </span>
                        </div>
                        <div className="tc_login_otp_three tc_login_otp_details_otp">
                          <input
                            type="radio"
                            name="loginType"
                            checked={otpradio == true}
                            onChange={() => {
                              setpasswordRadio(false);
                              setotpradio(true);
                            }}
                          />
                          <span> OTP </span>
                        </div>
                      </div>
                    </div>
                    {passwordRadio && (
                      <div className="form_control_grp" id="pswddiv">
                        <input
                          type="password"
                          placeholder="Password"
                          className="form-control tcloginDiv"
                          value={password}
                          id="existloginPass"
                          onChange={(event) => {
                            setPassword(event.target.value);
                            setIsLoginClicked(false);
                          }}
                        />
                        {password.length === 0 && isLoginClicked && (
                          <p className="invalid-msg-content">
                            Please Enter Passwprd
                          </p>
                        )}
                      </div>
                    )}
                    {otpradio && (
                      <div className="otpAreaLogin">
                        <div className="form_control_grp" id="otpdiv">
                          <input
                            type="password"
                            placeholder="OTP"
                            className="form-control tcloginDiv"
                            id="loginOTP"
                            value={oneTimePasswprd}
                            onChange={(event) => {
                              setOneTimePasswprd(event.target.value);
                              setIsLoginClicked(false);
                            }}
                          />
                          {oneTimePasswprd.length === 0 && isLoginClicked && (
                            <p className="invalid-msg-content">
                              Please Enter OTP
                            </p>
                          )}
                        </div>
                        <div className="form_control_grp">
                          <a href="/" className="resend_otp" id="ResendOTP">
                            Resend OTP
                          </a>
                        </div>
                      </div>
                    )}
                    <div className="invalid-msg-wrapper server_error_login">
                      <p className="invalid-msg-content">
                        We're unable to sign you in because the password entered
                        incorrect.
                      </p>
                    </div>

                    <div className="form_control_grp SucessMess hide">
                      <p>
                        Your request for OTP will be sent to registered email id
                        and mobile number, if not registered please do the same.
                      </p>
                    </div>
                    <div className="form_control_grp otplimit hide">
                      <p className="invalid-msg-content">
                        You exceed the OTP limit. Please try again after some
                        time
                      </p>
                    </div>

                    <div
                      className="form-group mtop10 travel-price1 hide"
                      id="captchalogin"
                    >
                      <label>
                        Type the characters you see in the image below
                      </label>
                      <div className="clearfix"></div>
                      <img id="captcha" src="" width="200" alt="captcha" />
                      <div className="clearfix"></div>
                      <input
                        type="text"
                        required
                        className="form-control"
                        id="captchaValue"
                        name="captchaValue"
                      />
                      <span className="field-error"></span>
                    </div>
                    <div
                      id="loginErrorMessage"
                      className="error-info-wrapper"
                    ></div>

                    <button
                      type="button"
                      onClick={() => {
                        setIsLoginClicked(true);
                        validateLoginPopUpForm();
                      }}
                      className="login_reg_form_btn"
                      id="loginButton"
                    >
                      Login
                    </button>
                  </form>

                  <div className="form_footer">
                    <p>Don't have an account?</p>{" "}
                    <a
                      className="show_register_form"
                      onClick={() => {
                        setIsRegisterClicked(true);
                        setIsLoginForm(false);
                      }}
                    >
                      Register
                    </a>
                  </div>
                </div>
              )}

              {isRegisterClicked && (
                <div className="openRegisterForm">
                  <div className="reg_form_holder login_reg_div">
                    <form className="form-horizontal" id="registerFormReset">
                      <div className="reg_title_holder pull-left">
                        <div className="form_control_grp">
                          <label>Title</label>
                          <select
                            name="title"
                            className=""
                            value={registerTitle}
                            id="regTitle"
                            onChange={(event) => {
                              setRegisterTitle(event.target.value);
                            }}
                          >
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Ms">Ms</option>
                            <option value="Dr" className="dr">
                              Dr
                            </option>
                            <option value="Mast">Master</option>
                            <option value="Miss">Miss</option>
                          </select>
                          {}
                        </div>
                        <div className="form_control_grp">
                          <label>First Name</label>
                          <input
                            type="text"
                            placeholder="First Name"
                            className="form-control"
                            maxLength="50"
                            id="registerFName"
                            value={registerFirstName}
                            onChange={(event) => {
                              setRegisterFirstName(event.target.value);
                            }}
                          />
                          {registerFirstName.length == 0 && isRegisterFormCliked && (
                            <p className="invalid-msg-content">
                              Please Enter first name
                            </p>
                        )}
                        </div>
                        
                        <div className="form_control_grp">
                          <label>Last Name</label>
                          <input
                            type="text"
                            placeholder="Last Name"
                            className="form-control"
                            maxLength="50"
                            id="registerLName"
                            value={registerLastName}
                            onChange={(event) => {
                              setRegisterLastName(event.target.value);
                            }}
                          />
                          {registerLastName.length == 0 && isRegisterFormCliked && (
                            <p className="invalid-msg-content">
                              Please Enter last name
                            </p>
                        )}
                        </div>

                        
                      </div>
                      <div className="form_control_grp">
                        <label>Your Email Address</label>
                        <input
                          type="email"
                          placeholder="Email ID will be your username"
                          className="form-control"
                          maxLength="50"
                          id="registerEmailId"
                          value={registerEmailId}
                          onChange={(event) => {
                            setRegisterEmailId(event.target.value);
                          }}
                        />
                        {registerEmailId.length == 0 && isRegisterFormCliked &&(
                        <p className="invalid-msg-content">Please Enter Email ID</p>
                        )}
                       
                      </div>
                      <div className="form_control_grp">
                        <label>Mobile</label>
                        <input
                          type="number"
                          placeholder="Mobile No"
                          className="form-control"
                          id="registerMobileNo"
                          value={registerMobileNo}
                          onChange={(event) => {
                            setRegisterMobile(event.target.value);
                          }}
                        />
                        {registerMobileNo == 0 && isRegisterFormCliked (
                          <p className="invalid-msg-content">Please Enter Mobile number</p>
                          )}
                      </div>

                      <div className="form_control_grp">
                        <label>Password</label>
                        <input
                          type="password"
                          placeholder="Password"
                          className="form-control"
                          id="registerPwd"
                          maxLength="12"
                          value={registerPassword}
                          onChange={(event) => {
                            setRegisterPassword(event.target.value);
                          }}
                        />
                          {registerPassword == 0 && isRegisterFormCliked (
                          <p className="invalid-msg-content">Please Enter Password</p>
                          )}
                        <div
                          className="passwordErrorBox hide"
                          id="passwordErrorBox"
                        >
                          <div className="passwordError">
                            <ul className="error-message">
                              <li className="alphanumeric error">
                                <span className="tc-login-arrow"></span>Contains
                                between 8-12 alphanumeric characters.
                              </li>
                              <li className="special_char error">
                                <span className="tc-login-arrow"></span>Can add
                                special character but not mandatory(Only !, @,
                                #,$,%,^,&,* to be used).
                              </li>
                              <li className="white_spaces error">
                                <span className="tc-login-arrow"></span>Does not
                                contain White spaces
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="form_control_grp">
                        <label>Confirm Password</label>
                        <input
                          type="password"
                          placeholder="Confirm Password"
                          className="form-control"
                          id="registerConfirmPwd"
                          maxLength="12"
                          value={registerPasswordConfirmed}
                          onChange={(event) => {
                            setRegisterPasswordConfirmed(event.target.value);
                          }}
                        />
                        {registerPasswordConfirmed == 0 && isRegisterFormCliked (
                          <p className="invalid-msg-content">Please Enter Confirmed Password</p>
                          )}
                      </div>

                      <div className="form_control_grp">
                        <input
                          type="checkbox"
                          className="css-checkbox"
                          id="tandc"
                          value={registerCheckBox}
                          onChange={() => {
                            !setRegisterCheckBox(registerCheckBox);
                          }}
                        />
                        <label
                          className="login_reg_sprite css-label"
                          for="tandc"
                        ></label>
                        <p className="tandc">
                          I would like to be kept informed of special Promotions
                          and offers. I hereby accept the{" "}
                          <a
                            href="/privacy-policy"
                            target="_blank"
                            title="Privacy Policy"
                          >
                            Privacy Policy
                          </a>{" "}
                          and authorize Thomascook to contact me.
                        </p>
                        {registerPasswordConfirmed == 0 && isRegisterFormCliked (
                          <p className="invalid-msg-content">Please click on Checkbox field</p>
                          )}
                      </div>
                      <button
                        type="button"
                        className="login_reg_form_btn"
                        id="registerButton"
                        value={isRegisterFormCliked}
                        onClick={() => {
                          setIsRegisterFormCliked(true);
                        }}
                      >
                        Register
                      </button>

                      <div className="tcLogin hide">
                        <label>
                          Email Id is already registered with us, Please use the
                          same to Login into your account
                        </label>
                      </div>
                    </form>

                    <div className="form_footer">
                      <p>Already have an account?</p>{" "}
                      <a
                        className="show_login_form"
                        onClick={() => {
                          setIsRegisterClicked(false);
                          setIsLoginForm(true);
                        }}
                      >
                        Login
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginRegister;
