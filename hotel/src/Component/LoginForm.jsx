import React from 'react';

const LoginForm = (props) => {
    let {lableValue ,isChecked ,errorMessage , id, onChange ,isErrorMessage, ...others  } = props; 
    return (
        
            <div className='loginform'>
                <div>
                {isChecked && (<>
                <span> {lableValue}</span>
                <input {...others} onChange ={onChange} />
                </>)
                }
                {isErrorMessage && 
                <span>{errorMessage}</span>
                }
                </div>
            </div>
        
    );
}

export default LoginForm;
