import React, { useState } from  'react';
    
const Form = () => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    // const [userList, setUserList] = useState([])

    const userValidation = (e) => {
        let isValid = true
        if (user.firstName.length < 2 || user.lastName.length < 2 || user.email.length < 4 || user.password.length < 8 || user.confirmPassword.length < 8) {
            isValid = false
            console.log("There is an error")
            return isValid
        }else{
            console.log("No error")
            return isValid
        }
    }

    const changeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
        console.log(e.target.name)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if(userValidation()){
            console.log("User is valid")
        }else{
            console.log("User is invalid")
        }
    }

    return(
        <>
        <form onSubmit={ submitHandler }>
            <div>
                {user.firstName && user.firstName.length < 2 ? <p>First Name is required and must be 2 or more characters </p>: ""}
                <label>First Name: </label> 
                <input type="text" name="firstName" value={user.firstName} onChange={changeHandler} />
            </div>
            <div>
                {user.lastName && user.lastName.length < 2 ? <p>Last Name is required and must be 2 or more characters </p>: ""}
                <label>Last Name: </label> 
                <input type="text" name="lastName" value={user.lastName} onChange={changeHandler} />
            </div>
            <div>
                {user.email && user.email.length < 4 ? <p>Email is required and must be 4 or more characters </p>: ""}
                <label>Email: </label> 
                <input email="text" name="email" value={user.email} onChange={changeHandler} />
            </div>
            <div>
                {user.password && user.password.length < 8 ? <p>Password is required and must be 8 or more characters </p>: ""}
                <label>Password: </label> 
                <input type="password" name="password" value={user.password} onChange={changeHandler} />
            </div>
            <div>
                {user.confirmPassword && user.confirmPassword.length < 8 ? <p>Password is required and must be 8 or more characters </p>: ""}
                <label>Password: </label> 
                <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={changeHandler} />
            </div>
        </form>

        <h3>Your form data</h3>
        <p><label>First Name: </label>{ user.firstName }</p>
        <p><label>Last Name: </label>{ user.lastName }</p>
        <p><label>Email: </label>{ user.email }</p>
        <p><label>Password: </label>{ user.password }</p>
        <p><label>Confirm Password: </label>{ user.confirmPassword }</p>

        </>

    )
}
    
export default Form;