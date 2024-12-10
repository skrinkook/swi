import Summary from "./Summary"
import Listing from "./Listing"
import Footer from "./footer"
import Payment from "./Payment"

function Main(){
    
    return(
        <section className="sec-wrap">
            <main>
                <Summary />
                <Listing />
            </main>
                <Footer />
                <Payment />
                
        </section>
    )
}
export default Main