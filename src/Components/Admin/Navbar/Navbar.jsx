import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import logo from './../../../images/logoadmin.png'
import userlogo from './../../../images/userlogo.png'
function Navbar() {
    const [b, setB] = useState(true)
    const [M1, setM1] = useState(false)
    const [M2, setM2] = useState(false)
    const [t, setT] = useState(false)
    const Buyurtmalar = () => {
        setB(true)
        setM1(false)
        setM2(false)
        setT(false)
    }
    const Mijozlar = () => {
        setB(false)
        setM1(true)
        setM2(false)
        setT(false)
    }
    const Maxsulotlar = () => {
        setB(false)
        setM1(false)
        setM2(true)
        setT(false)
    }
    const Takliflar = () => {
        setB(false)
        setM1(false)
        setM2(false)
        setT(true)
    }
    return (
        <div>
            <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <Link class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" to="#"><img src={logo} /> <h4></h4></Link>
                <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse"
                    data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <input class="form-control inputsearch w-25" type="search" placeholder="Search" aria-label="Search" />
                <ul class="navbar-nav px-3">
                    <li class="nav-item text-nowrap">
                        <Link class="nav-link" to="#"><img src={userlogo} /></Link>
                    </li>
                </ul>
            </nav>

            <div class="container-fluid">
                <div class="row">
                    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse">
                        <div class="position-sticky pt-3">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <Link class="nav-link text-light navbarchala active" onClick={Buyurtmalar} aria-current="page" to="/">
                                        {b ? <span></span> : ''}
                                        <div className={b ? 'active' : ''}>Buyurtmalar</div>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link text-light navbarchala" onClick={Mijozlar} to="/Mijozlar">
                                        {M1 ? <span></span> : ''}
                                        <div className={M1 ? 'active' : ''}>Mijozlar</div>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link text-light navbarchala" onClick={Maxsulotlar} to="/Maxsulotlar">
                                        {M2 ? <span></span> : ''}
                                        <div className={M2 ? 'active' : ''}>Maxsulotlar</div>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link text-light navbarchala" onClick={Takliflar} to="/takliflar">
                                        {t ? <span></span> : ''}
                                        <div className={t ? 'active' : ''}>Takliflar</div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar
