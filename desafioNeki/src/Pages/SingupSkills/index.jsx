import React from 'react'
import { useState } from 'react'
import './styles.css'

import { NavLink } from 'react-router-dom'

import Combobox from "react-widgets/Combobox";

import "react-widgets/styles.css";

import Logo from '../../assets/img/logo.png'
import api from '../../service/api/api';

const SingupSkills = () => {

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [version, setVersion] = useState("")
    const [description, setDescription] = useState("")
    const [imageUrl, setImaegUrl] = useState("")

    const [skills, setSkills] = useState("")
    const [skill, setSkill] = useState([])

    const [userSkills, setUserSkills] = useState("")

    const handleSkill = async (e) => {

        try {
            api
                .get("api/skills")
                .then((response) => setSkills(response.data))

            for (let s in skills) {
                setSkill(skill => [...new Set(skill).add(skills[s].name)])

            }

        } catch (error) {
            console.log("catch")
        }

    }

    const handleSubmit = async (a) => {
        try {
            api
                .get("api/userSkills")
                .then((response) => setUserSkills(response.data))
    
    
            for (let u in userSkills) {
                console.log(userSkills[u])
    
            }
        } catch (error) {
            
        }

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
                    </NavLink><NavLink
                        className="nav"
                        activeClassName="is-active"
                        to="/Home"
                        exact
                    >
                        Logout
                    </NavLink>
                </aside>

                <main className='o_main'>
                    <h1 className='text'>Adicionar Skill</h1>

                    <div className='skills'>
                        <Combobox
                            className='combobox'
                            hideCaret
                            hideEmptyPopup
                            onClick={handleSkill}
                            data={skill}
                            placeholder="Selecionar Skill"
                        />

                        <div className='skill-button'>
                            <button 
                            onClick={handleSubmit}
                            className='nav_button'
                            >
                                Adicionar
                            </button>

                        </div>

                    </div>
                </main>
            </div>

        </div>
    )
}

export default SingupSkills