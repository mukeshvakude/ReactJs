

function Navbar() {
    return (

        <>
            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Thomascook</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="http://localhost:8080/hotel/">Hotel</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="http://localhost:8080/holiday/">Holiday</a>
                                </li>
                                
                            </ul>
                            
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default Navbar;