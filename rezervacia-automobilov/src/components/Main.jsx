import Summary from "./Summary"
import Listing from "./Listing"
import Footer from "./footer"

function Main(){
    
    return(
        <section className="sec-wrap">
            <main>
                <Summary />
                <Listing />
            </main>
                <Footer />
        </section>
    )
}
export default Main