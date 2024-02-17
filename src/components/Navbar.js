import React from "react"

const Navbar = (props) => {

 const handleClick = (category, event) => {
    event.preventDefault();
    props.onSelect(category);
 }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Quote Generator</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center justify-content-center">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" onClick={(e)=>handleClick('learning',e)}>Learning</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/"  onClick={(e)=>handleClick('success',e)}>Success</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" onClick={(e)=>handleClick('life',e)}>Life</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" onClick={(e)=>handleClick('leadership',e)}>Leadership</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" onClick={(e)=>handleClick('funny',e)}>Funny</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" onClick={(e)=>handleClick('fitness',e)}>Fitness</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" onClick={(e)=>handleClick('family',e)}>Family</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" onClick={(e)=>handleClick('death',e)}>Death</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" onClick={(e)=>handleClick('beauty',e)}>Beauty</a>
                </li>
            </ul>
            {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar;