function Navbar(){


    return(
        <nav className="navbar">
            <div className="nav-container">
                {/* <div className="sub-container">
                    <div className="circle">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                    </div>
                    <p className="circle-description">Typ Služby</p>
                </div> */}
                <div className="sub-container">
                    <div className="circle selected">
                        <h2 className="button-number selected-number">1</h2>
                    </div>
                    <p className="circle-description selectedtext">Výber vozidla</p>
                </div>
                <div className="sub-container">
                <div className="circle">
                    <h2 className="button-number">2</h2>   
                        </div>
                        <p className="circle-description">Kontatné údaje</p>
                </div>
                <div className="sub-container">
                <div className="circle">
                <h2 className="button-number">3</h2>
                        </div>
                        <p className="circle-description">Potvrdenie a platba</p>
                </div>
            </div>
        </nav>
    )
}
export default Navbar