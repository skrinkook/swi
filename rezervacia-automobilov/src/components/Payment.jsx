function Payment(){

    return(
        <form className="paymentForm">
            <div>
                <input type="checkbox"></input>
                <label className="tac">Súhlasím so všeobecnými obchodnými podmienkami</label>

            </div>

            <input type="submit" value="Potvrdiť a zaplatiť" className="paymentConfirmation"></input>

        </form>
    )
}

export default Payment;