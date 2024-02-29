import { useState } from 'react';


import './index.css'

const LoginForm =()=>{
       

       const [username, setUsername] = useState("");
       const [password, setPassword] = useState("")



       const onChangeUsername = (e)=>{
              setUsername(e.target.value)
       }

       const onChangePassword = (e)=>{
              setPassword(e.target.value)
       }

       
          return(
                  
                     <div className='login-form-container'>
                             <img                       
                                src="https://i.ibb.co/GCGSX2Y/1.jpg"
                                                className="login-website-logo-mobile-image"
                                                alt="website logo"
                                />                         
                                   <img
                                   src="https://media.istockphoto.com/id/891352664/photo/retro-movie-projector-on-dark-background-3d-rendered-illustration.jpg?s=1024x1024&w=is&k=20&c=QkgD2b8Wdxv0Wc4x78EqhZ6PQnrVWOdusR1aAIk2S2c="
                                   className="login-image"
                                   alt="website login"
                                   />
                                    <form className="form-container">
                                    <img src="https://i.ibb.co/GCGSX2Y/1.jpg"
                                          className="login-website-logo-desktop-image"
                                          alt="website logo"
                                          />
                                   <div className="input-container">
                                   <label className="input-label" htmlFor="username">
                                          USERNAME
                                          </label>
                                          <input
                                          type="text"
                                          id="username"
                                          value={username}
                                          name="username"
                                          placeholder='Enter Name'
                                          className="username-input-filed"
                                          onChange={onChangeUsername}
              
                                          />
                                   </div>
                                   <div className="input-container">
                                   <label className="input-label" htmlFor="password">
                                          PASSWORD
                                          </label>
                                          <input
                                          type="password"
                                          id="password"
                                          name='password'
                                          value={password}
                                          placeholder='Enter Password'
                                          className="password-input-filed"
                                          onChange={onChangePassword}
                                         
                                          />
                                   </div>
                                   <button type="submit" className="login-button">
                                          Login
                                   </button>

                                    </form>
                </div>                    
          )
}

export default LoginForm;




/*cvc

 
  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace("/")
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess()
    }
  }

  onChangeUsername = event => {
    setState({username: event.target.value})
  }

  
  const renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  const renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  
    return (
      <div className="login-form-container">
        <img                       
          src="https://i.ibb.co/GCGSX2Y/1.jpg"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />                         
        <img
          src="https://media.istockphoto.com/id/891352664/photo/retro-movie-projector-on-dark-background-3d-rendered-illustration.jpg?s=1024x1024&w=is&k=20&c=QkgD2b8Wdxv0Wc4x78EqhZ6PQnrVWOdusR1aAIk2S2c="
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://i.ibb.co/GCGSX2Y/1.jpg"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    )
  }



vhdgdg*/