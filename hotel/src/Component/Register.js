import { useState } from 'react';
import RegisterForm from './RegisterForm';

const Register = (props) => {
    let { setisRegisterLink ,setisLoginLink } = props;
    let [registerFormFileds, setlegisterFormFileds] = useState({ title: "Mr", firstName: "", lastName: "", password: "", confirmPassword: "", emailId: "", mobileNumber: "" }); //Fields
    let [registerFormSubmited, setregisterFormSubmited] = useState(false);
    let registerFormInputs = [

        { id: 1, lableValue: "First Name", name: "firstName", className: "form-contro", placeholder: "First Name", type: "text" ,errorMessage: " Please Enter first name"
            , isErrorMessage: registerFormFileds.firstName.length === 0 && registerFormSubmited ? true : false},
        { id: 2, lableValue: "Last Name", name: "lastName", className: "form-contro", placeholder: "Last Name", type: "text" ,errorMessage: " Please Enter last name" 
        , isErrorMessage: registerFormFileds.lastName.length === 0 && registerFormSubmited ? true : false},
        { id: 3, lableValue: "Your Email Address", name: "emailId", className: "form-contro", placeholder: "Email ID will be your username", type: "email" ,errorMessage: " Please Enter Valid Email Id"
        , isErrorMessage: registerFormFileds.emailId.length === 0 && registerFormSubmited ? true : false },
        { id: 4, lableValue: "Mobile", name: "mobileNumber", className: "form-contro", placeholder: "Mobile No", type: "number",errorMessage: " Please Enter Valid Mobile Number"
        , isErrorMessage: registerFormFileds.mobileNumber.length === 0 && registerFormSubmited ? true : false},
        { id: 5, lableValue: "Password", name: "password", className: "form-contro", placeholder: "password", type: "password",errorMessage: " Please Enter Valid Password"
        , isErrorMessage: registerFormFileds.password.length === 0 && registerFormSubmited ? true : false},
        { id: 6, lableValue: "Confirm password", name: "confirmPassword", className: "form-contro", placeholder: "confirm password", type: "password",errorMessage: " Please Enter Valid Email Id" 
        , isErrorMessage: registerFormFileds.confirmPassword.length === 0 && registerFormSubmited ? true : false}

    ];
    let onChangeRegisterForm = (event) => {
        setregisterFormSubmited(false);
        setlegisterFormFileds({ ...registerFormFileds, [event.target.name]: event.target.value });
    }
    let registerFormSubmit = (event) => {
        event.preventDefault();
        setregisterFormSubmited(true);
        console.log("RegisterFormFields", registerFormFileds);
        //API CALL 
    }
    return (
        <>
             <div className="container">
            <form onSubmit={registerFormSubmit}>
                <div >
                    <label>Title</label>
                    <select name="title" className="" value={registerFormFileds.title} id="regTitle" onChange={(event) => {
                        registerFormFileds.title = event.target.value;
                    }} >
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Ms">Ms</option>
                        <option value="Dr" className="dr">  Dr </option>
                        <option value="Mast">Master</option>
                        <option value="Miss">Miss</option>
                    </select>

                </div>
                {registerFormInputs.map((input) => {
                    {
                        return <div key={input.id}>
                            <RegisterForm key={input.id} {...input} onChange={onChangeRegisterForm} />
                        </div>
                    }
                })}
                <button type="submit" className="login_reg_form_btn" id="registerButton" > Register </button>
                <div className="form_footer">
                      <p>Already have an account?</p>{" "}
                      <a  className="show_login_form" onClick={() => { setisRegisterLink(false);setisLoginLink(true); }} >  Login </a>
                </div>
            </form>
            </div>
        </>
    );
}

export default Register;
