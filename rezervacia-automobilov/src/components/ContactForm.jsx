function ContactForm(){

    function nextPage3(){
        document.querySelector('.contactForm').style.display = 'none'; 
        
        document.getElementById('circle3').classList.add("selected");
        document.getElementById('button-number3').classList.add("selected-number");
        document.getElementById('circle-description3').classList.add('selectedtext');

        document.getElementById('circle2').classList.remove('selected');
        document.getElementById('button-number2').classList.remove('selected-number');
        document.getElementById('button-number2').style.display = 'none';
        document.getElementById('circle-description2').classList.remove('selectedtext');
        document.getElementById('circle2').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>';

    }

    function handleSubmit(event) {
        event.preventDefault();
        nextPage3();
    }

    function handleChange(){
        console.log("a");
    }

    return(
        <form className="contactForm" onSubmit={handleSubmit}>
            <h1>Kontaktné údaje</h1>

            <div>
                <label>Meno a priezvisko</label><br></br>
                <input type="text" onChange={() => handleChange()}></input><br></br>
            </div>

            <div>
                <label>Email</label><br></br>
                <input type="text"></input><br></br>
            </div>

            <div>
                <label>Telefónne číslo</label><br></br>
                <input type="tel"></input><br></br>
            </div>

            <div>
                <label>Miesto vyzdvihnutia</label><br></br>
                <input type="text"></input><br></br>
            </div>

            <div>
                <label>Rezervovať od</label><br></br>
                <input type="date"></input><br></br>
            </div>

            <div>
                <label>Rezervovať do</label><br></br>
                <input type="date"></input><br></br>
            </div>

            <input type="submit"></input>
        </form>
    )
}

export default ContactForm;