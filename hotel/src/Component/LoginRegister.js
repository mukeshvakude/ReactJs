import React, { useState } from "react";

const LoginRegister = () => {
  let [loginFormFields, setloginFormFields] = useState({ loginId: "", password: "", oneTimePassword: "" }); //Fields
  let [otpradio, setotpradio] = useState(false);
  
  let [isRegisterFormCliked, setIsRegisterFormCliked] = useState(false);
  let [registerTitle, setRegisterTitle] = useState("Mr");
  let [registerFirstName, setRegisterFirstName] = useState("");
  let [registerLastName, setRegisterLastName] = useState("");
  let [registerPassword, setRegisterPassword] = useState("");
  let [registerPasswordConfirmed, setRegisterPasswordConfirmed] = useState("");
  let [registerCheckBox, setRegisterCheckBox] = useState(true);
  let [registerEmailId, setRegisterEmailId] = useState("");
  let [registerMobileNo, setRegisterMobile] = useState("");

  let [isRegisterLink, setisRegisterLink] = useState(false);
  let [isLoginLink, setisLoginLink] = useState(true);
  let [passwordradio, setpasswordradio] = useState(true);
  let [loginFormSubmited, setloginFormSubmited] = useState(false);
  let loginformInputs = [
    {
      id: 1,
      type: "text",
      placeholder: "Email ID will be your username",
      className: "form-control",
      maxLength: 50,
      name: "loginId",
      lableValue: "Your Email Address",
      errorMessage: " Please Enter Valid Email Id",
      isErrorMessage: loginFormFields.loginId.length === 0 && loginFormSubmited ? true : false,
      isChecked: true

    },
    {
      id: 2,
      type: "radio",
      className: "form-control",
      nameValue: "password",
      name: "passwordRadioStatus",
      isChecked: passwordradio


    },
    {
      id: 3,
      type: "radio",
      className: "form-control",
      nameValue: "OTP",
      name: "otpRadioStatus",
      isChecked: otpradio

    },
    {
      id: 4,
      type: "Password",

      placeholder: "Password",
      className: "form-control",
      maxLength: 50,
      name: "password",
      errorMessage: "Please Enter Valid pasword",
      isErrorMessage: loginFormFields.password.length === 0 && passwordradio && loginFormSubmited ? true : false,
      isChecked: passwordradio


    },
    {
      id: 5,
      type: "password",
      placeholder: "OTP",
      className: "form-control",
      maxLength: 50,
      name: "oneTimePassword",
      errorMessage: "Please Enter Valid OTP",
      isErrorMessage: loginFormFields.oneTimePassword.length === 0 && otpradio && loginFormSubmited ? true : false,
      isChecked: otpradio
    },

  ];
  console.log(loginFormFields)
  
  return (
    <>
      <div
        className=" login_reg_popup"

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
              {isLoginLink && (
                <div className="login_form_holder login_reg_div">
                  <form className="login_reg_form">
                    {loginformInputs.map((input) => {

                      return (
                        <>
                          {(input.id !== 2 && input.id !== 3) && (
                            <>
                              {input.isChecked && (
                                <input {...input} onChange={(event) => {
                                  setloginFormSubmited(false);
                                  setloginFormFields({ ...loginFormFields, [event.target.name]: event.target.value });
                                }} />

                              )}
                              {
                                (input.isChecked && input.id === 5 && otpradio) && (
                                  <div className="form_control_grp">
                                    <a href="/" className="resend_otp" id="ResendOTP">
                                      Resend OTP
                                    </a>
                                  </div>

                                )
                              }

                            </>
                          )}


                          {(input.id === 2 || input.id === 3) && (

                            <div key={input.id}>

                              {input.id === 2 ? (

                                <div>

                                  <span> {input.nameValue}</span>

                                  <input

                                    type="radio"

                                    name="loginType"

                                    checked={passwordradio == true}

                                    onChange={() => {

                                      setotpradio(false);

                                      setpasswordradio(true);

                                    }}

                                  />

                                </div>

                              ) : (

                                <div>

                                  <span> {input.nameValue}</span>
                                  <input type="radio" name="loginType" checked={otpradio == true} onChange={() => { setotpradio(true); setpasswordradio(false); }} />
                                </div>

                              )}

                            </div>
                          )


                          }
                        </>
                      );
                    })
                    }
                    <button type="submit" className="login_reg_form_btn" id="loginButton">{" "} Login</button>
                    <div className="form_footer">
                      <p>Don't have an account?</p>{" "}
                      <a className="show_register_form" onClick={() => { setisRegisterLink(true); setisLoginLink(false); }}>Register</a>
                    </div>
                  </form>
                </div>
              )}

              {isRegisterLink && (
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
                          { }
                        </div>
                        <div className="form_control_grp">
                          <label>First Name</label>
                          <input
                            type="text"
                            placeholder="First Name"
                            className="form-control"

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

                          id="registerEmailId"
                          value={registerEmailId}
                          onChange={(event) => {
                            setRegisterEmailId(event.target.value);
                          }}
                        />
                        {registerEmailId.length == 0 && isRegisterFormCliked && (
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
                        {registerMobileNo == 0 && isRegisterFormCliked && (
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

                          value={registerPassword}
                          onChange={(event) => {
                            setRegisterPassword(event.target.value);
                          }}
                        />
                        {registerPassword == 0 && isRegisterFormCliked && (
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

                          value={registerPasswordConfirmed}
                          onChange={(event) => {
                            setRegisterPasswordConfirmed(event.target.value);
                          }}
                        />
                        {registerPasswordConfirmed == 0 && isRegisterFormCliked && (
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
                        {registerPasswordConfirmed == 0 && isRegisterFormCliked && (
                          <p className="invalid-msg-content">Please click on Checkbox field</p>
                        )}
                      </div>
                      <button type="button" className="login_reg_form_btn" onClick={() => { setIsRegisterFormCliked(true); }} >
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
                          setisRegisterLink(false);
                          setisLoginLink(true);
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
