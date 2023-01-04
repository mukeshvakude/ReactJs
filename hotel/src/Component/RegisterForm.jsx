import React from 'react';

const RegisterForm = (props) => {
    let {lableValue , id, onChange , isErrorMessage,errorMessage, ...others  } = props;
    return (
        <div className='registerForm'>
            <span> {lableValue}</span>
            <input {...others} onChange ={onChange} />
            {isErrorMessage && 
                <span>{errorMessage}</span>
                }
        </div>
    );
}

export default RegisterForm;
