import React from 'react'
import { Outlet } from 'react-router-dom'
import Fbar from '../Components/Fbar/Fbar'
import NavBar from '../Components/Navbar/NavBar'

export default function Guest() {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Fbar />

        </div>
    )
}
