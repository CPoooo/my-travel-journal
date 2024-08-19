import '../App.css'
import earth from '../assets/earth.png'

export default function Navbar() {
    return (
        <nav className="navBar">
            <img src={earth} alt="globe" className="navImg" />
            <h2>my travel journal.</h2>
        </nav>
    )
}