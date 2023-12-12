import "../styles/index.css"

const Header = () => {
  return (
    // <div className="home">Hearder</div>

    <nav className="header-nav">
      <div className="inner_header"> 
<div className="logo">
<img src="src/images/logo.png" alt="University's Logo" />
</div>
            <ul className="navigation">
               <a><li>Home</li></a>
               <a><li>About</li></a>
               <a><li>Dashboard</li></a>
               <a><li>Contact</li></a>
             </ul>
      </div>
    </nav>
  )
}

export default Header