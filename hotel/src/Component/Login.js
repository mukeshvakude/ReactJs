import { useState } from 'react';
import LoginForm from './LoginForm';
import Register from './Register';

const Login = () => {
    let [loginFormFields, setloginFormFields] = useState({ loginId: "", password: "", oneTimePassword: "" }); //Fields
    let [loginFormSubmited, setloginFormSubmited] = useState(false);
    let [passwordradio, setpasswordRadio] = useState(true);
    let [otpradio, setotpradio] = useState(false);
    let [isRegisterLink, setisRegisterLink] = useState(false);
    let [isLoginLink, setisLoginLink] = useState(true);
    let loginformInputs =[
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
            isChecked : true

        },
        {
            id: 2,
            type: "radio",
            className: "form-control",
            nameValue: "password",
            name : "passwordRadioStatus",
            isChecked : passwordradio
           

        },
        {
            id: 3,
            type: "radio",
            className: "form-control",
            nameValue: "OTP",
            name : "otpRadioStatus",
            isChecked : otpradio

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
            isChecked : passwordradio


        },
        {
            id: 5,
            type: "password",
            placeholder: "OTP",
            className: "form-control",
            maxLength: 50,
            name: "oneTimePassword",
            errorMessage:  "Please Enter Valid OTP",
            isErrorMessage: loginFormFields.oneTimePassword.length === 0 &&  otpradio && loginFormSubmited ? true : false,
            isChecked : otpradio
        },

    ];
    let onChangeLoginForm = (event) => {
        setloginFormSubmited(false);
        setloginFormFields({ ...loginFormFields, [event.target.name]: event.target.value });
    }
    let loginFormSubmit = (event) => {
        event.preventDefault();
        setloginFormSubmited(true);
        console.log("loginFormFields", loginFormFields);
        //API CALL 
    }

    console.log("loginFormFields", loginFormFields);
    return (
        <>
                <div className="Modal" tabIndex="-1" role="dialog" id="loginRegisterPopup" data-backdrop="static" data-keyboard="false">

                <div className="modal-dialog">

                    <div className="modal-content" id="registerLogin">

                        <div className="modal-header">

                            <button type="button" className="close login_reg_popup_close" data-dismiss="modal" aria-label="Close">

                                <span aria-hidden="true">&times;</span>

                            </button>

                            <div className="modal-title">Login to Thomascook</div>

                        </div>

                        <div className="modal-body  login_reg_body">

                            {isLoginLink && (

                                <div className="login_form_holder login_reg_div">

                                    <form className="login_reg_form" onSubmit={loginFormSubmit}>

                                        {loginformInputs.map((input) => {

                                            {

                                                return (

                                                    <div key={input.id} className="form_control_grp">

                                                        {input.id === 2 || input.id === 3 ? (

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

                                                                                setpasswordRadio(true);

                                                                            }}

                                                                        />

                                                                    </div>

                                                                ) : (

                                                                    <div>

                                                                        <span> {input.nameValue}</span>

                                                                        <input

                                                                            type="radio"

                                                                            name="loginType"

                                                                            checked={otpradio == true}

                                                                            onChange={() => {

                                                                                setotpradio(true);

                                                                                setpasswordRadio(false);

                                                                            }}

                                                                        />

                                                                    </div>

                                                                )}

                                                            </div>

                                                        ) : (

                                                            <LoginForm

                                                                key={input.id}

                                                                {...input}

                                                                onChange={onChangeLoginForm}

                                                            />

                                                        )}

                                                    </div>

                                                );

                                            }

                                        })}

                                        <button type="submit"  className="login_reg_form_btn" id="loginButton">{" "} Login</button>
                                        <div className="form_footer">

                                            <p>Don't have an account?</p>{" "}

                                            <a className="show_register_form" onClick={() => {setisRegisterLink(true); setisLoginLink(false);}}>Register</a>

                                        </div>

                                    </form>

                                </div>

                            )}

                            {isRegisterLink && (

                                <div>

                                    <Register

                                        setisRegisterLink={setisRegisterLink}

                                        setisLoginLink={setisLoginLink}

                                    />

                                </div>

                            )}

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

};



export default Login;
