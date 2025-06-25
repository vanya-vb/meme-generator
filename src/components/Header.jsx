import trollFace from '../assets/troll-face.png'

export default function Header() {
    return (
        <header className="header">
            <img src={trollFace} alt="troll face" />
            <h1>meme generator</h1>
        </header>
    )
}