import React from 'react'
import { useState } from 'react'
import './styles.css'

import { NavLink } from 'react-router-dom'

import Logo from '../../assets/img/logo.png'
import api from '../../service/api/api'

const Home = () => {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [version, setVersion] = useState("")
    const [description, setDescription] = useState("")
    const [imageUrl, setImaegUrl] = useState("")

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [lastLoginDate, setLastLoginDate] = useState("")

    const [skills, setSkills] = useState("")

    const [userSkills, setUserSkills] = useState("")

    const [users, setUsers] = useState("")

    const usuario = localStorage.getItem('user')
    // console.log(usuario)
    if (usuario !== null) {
        
    }

    const handleUsers = () => {

        api
            .get("api/users")
            .then((response) => setUsers(response.data))

        for (let u in users) {
            if (usuario.login == users.login) {
                usuario = users[u]
                console.log(usuario)
                console.log("bla")
                return true
            }
        }
    }

    const handleLogout = () => {
        localStorage.clear()
        navigation.navigate("Login")
    }

    return (
        <div>

            <header className='header_home'>
                <img src={Logo} className='logo' alt="Logo" /><br />
            </header>
            <div className='container'>

                <aside className='o_aside'>
                    <NavLink
                        className="nav"
                        activeClassName="is-active"
                        to="/Skills"
                        exact
                    >
                        Adicionar Skill
                    </NavLink>

                    <NavLink
                        className="nav"
                        activeClassName="is-active"
                        to="/Home"
                        exact
                    >
                        MInhas Skills
                    </NavLink>

                    <NavLink
                        onClick={handleLogout}
                        className="nav"
                        activeClassName="is-active"
                        to="/Home"
                        exact
                    >
                        Logout
                    </NavLink>
                </aside>

                <main className='o_main'>
                    <h1 className='text'>Minhas Skills</h1>

                    <div className='skill'>
                        <p>Name</p>
                        <p>Version</p>
                        <p>Descricao</p>
                        <img src="" alt="imagem" />
                        <div className='skills-button'>
                            <button
                                onClick={handleUsers}
                                className='nav-button'>Editar</button>
                            <button className='nav-button'>Excluir</button>

                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Home