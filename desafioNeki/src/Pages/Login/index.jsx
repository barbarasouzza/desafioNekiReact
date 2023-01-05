import React from 'react'
import './styles.css'
import { useState } from 'react'

import { NavLink } from 'react-router-dom'

import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/img/logo.png'

import Ilustracao from '../../assets/img/ilustracao.svg'
import api from '../../service/api/api'

import SingUp from '../SingUp'


const Login = () => {
  const [id, setId] = useState("")
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [lastLoginDate, setLastLoginDate] = useState("")

  const [users, setUsers] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = {
      id,
      login,
      password,
      lastLoginDate
    }

    api
      .get("api/users")
      .then((response) => setUsers(response.data))

    // console.log(users)
    const verificacao = false
    
    for (let u in users) {      

      if (users[u].login == user.login) {
        console.log("O usuario existe")
        if (users[u].password == user.password) {
          console.log("As senhas coincidem")
          navigation.navigate("Home")
          localStorage.setItem('user', JSON.stringify(user))
          console.log(localStorage)
          verificacao == true
          break
        }
      }

      
    }
    if (verificacao = false) {
      alert("Login ou senha incorretos")
    }

    
  }

  return (
    <div>
      <header className='header'>
        <img src={Logo} className='logo' alt="Logo" /><br />
      </header>

      <div className='container'>

        <img src={Ilustracao} className='ilustracao' alt="Logo" /><br />


        <div id='login'>

          <div>
            <h1 className='login'>Login</h1>
          </div>

          <div className="input">
            <input type="input" className="inputUser" placeholder="Name" name="name" id='name' required onChange={(e) => setLogin(e.target.value)} /><br />
            <input type="password" className="inputUser" placeholder="Password" name="name" id='name' required onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div id='button'>
            <button
              className='button'
              onClick={handleSubmit}
              type='submit'
            >Entrar</button>
          </div>

          <div className='cadastro'>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/SingUp"
              exact
            >
              Cadastre-se
            </NavLink>

          </div>
        </div>

      </div>


    </div>
  )
}

export default Login