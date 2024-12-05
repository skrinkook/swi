function Summary() {
    return(
        <section className="summary">
            <div className="summary-card">
                <p className="sum-title-text">Zhrnutie</p>
                <p className="sum-subtitle-text">Typ služby</p>
                <p className="sum-data-text">Rezervácia na deň</p>
                <hr className="sum-hr"></hr>
                <p className="sum-subtitle-text">Miesto vyzdvihnutia</p>
                <p className="sum-data-text">x</p>
                <hr className="sum-hr"></hr>
                <p className="sum-subtitle-text">Vozidlo</p>
                <p className="sum-data-text sdtv">x</p>
                <hr className="sum-hr"></hr>
                <p className="sum-subtitle-text">Čas rezervácie</p>
                <p className="sum-data-text">x</p>
                <hr className="sum-hr"></hr>
                <p className="sum-subtitle-text">Maximálna vzdialenosť</p>
                <p className="sum-data-text">250km / deň</p>
            </div>
            <hr className="line"></hr>
            <div className="total-container">
                <p className="total">Spolu</p>
                <p className="price">0,00 €</p>
            </div>                                          
        </section>
    )
}

export default Summary