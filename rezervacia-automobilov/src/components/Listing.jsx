import ContactForm from "./ContactForm";

function Listing(){
    function nextPage(carNumber){
        document.querySelector('.listing').style.display = 'none';
        document.querySelector('.circle').classList.remove('selected');
        document.querySelector('.button-number').classList.remove('selected-number');
        document.querySelector('.circle-description').classList.remove('selectedtext');
        document.querySelector('.button-number').style.display = 'none';
        document.getElementById('numberone').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>';
        
        document.getElementById('circle2').classList.add("selected");
        document.getElementById('button-number2').classList.add("selected-number");
        document.getElementById('circle-description2').classList.add('selectedtext');
        document.querySelector('.footer').style.display = 'none';
        document.querySelector('.sdtv').textContent =  carNumber;
        document.querySelector('.contactForm').style.display = 'flex';


        console.log(carNumber)
    }

    return(
        <>
        <section className="listing">
            <div className="vehicle-card">
                <div className="photo-container">
                    <div className="car-photo" id="first">
                    </div>
                </div>
                <div className="card-description-wrapper">
                    <div className="wrap-start">
                        <div className="top-row">
                            <h1 className="carName">Audi S5 Cabriolet</h1>
                            <button className="carSelect" onClick={() => nextPage("Audi S5 Cabriolet")}>Vybrať</button>
                        </div>
                            <div className="middle-row">
                                <h1 className="carPrice">210,00 €</h1>
                            </div>
                    </div>
                        <div className="bottom-row">
                            <div className="more-info-container">
                                <div className="icon-sphere">
                                    <svg className="down-arrow" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1b1b1b"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                                </div>
                                <p className="more-info">Viac informácií</p>
                            </div>
                            <div className="space-count-container">
                                <h1>4</h1>
                                <svg className="icon-people" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg>
                            </div>

                        </div>
                </div>
            </div>
            <div className="vehicle-card">
                <div className="photo-container">
                    <div className="car-photo" id="second">
                    </div>
                </div>
                <div className="card-description-wrapper">
                    <div className="wrap-start">
                        <div className="top-row">
                            <h1 className="carName">Volkswagen Golf IV</h1>
                            <button className="carSelect" onClick={() => nextPage('Volkswagen Golf IV')}>Vybrať</button>
                        </div>
                            <div className="middle-row">
                                <h1 className="carPrice">14,99 €</h1>
                            </div>
                    </div>
                        <div className="bottom-row">
                            <div className="more-info-container">
                                <div className="icon-sphere">
                                    <svg className="down-arrow" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1b1b1b"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                                </div>
                                <p className="more-info">Viac informácií</p>
                            </div>
                            <div className="space-count-container">
                                <h1>5</h1>
                                <svg className="icon-people" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg>
                            </div>

                        </div>
                </div>
            </div>
            <div className="vehicle-card">
                <div className="photo-container">
                    <div className="car-photo" id="third">
                    </div>
                </div>
                <div className="card-description-wrapper">
                    <div className="wrap-start">
                        <div className="top-row">
                            <h1 className="carName">Cadillac CT5</h1>
                            <button className="carSelect" onClick={() => nextPage('Cadillac CT5')}>Vybrať</button>
                        </div>
                            <div className="middle-row">
                                <h1 className="carPrice">179,00 €</h1>
                            </div>
                    </div>
                        <div className="bottom-row">
                            <div className="more-info-container">
                                <div className="icon-sphere">
                                    <svg className="down-arrow" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1b1b1b"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                                </div>
                                <p className="more-info">Viac informácií</p>
                            </div>
                            <div className="space-count-container">
                                <h1>5</h1>
                                <svg className="icon-people" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg>
                            </div>

                        </div>
                </div>
            </div>



        </section>
        <ContactForm />
        </>
    )
}

export default Listing