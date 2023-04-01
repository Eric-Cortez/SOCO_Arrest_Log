import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function NavBar() {
    return (<>
        <nav>
            <h2>SOCO Transparency Dashboard</h2>
            <ul>
                <li>
                    <Link to="/SOCO_Transparency_Dashboard/">Arrests</Link>
                </li>
                <li>
                    <Link to="/SOCO_Transparency_Dashboard/about">About</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </>

    )
}
