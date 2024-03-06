import Footer from "../components/Footer"
import Header from "../components/Header"

const Contact = () => {
    return (
        <>
            <Header />
            <div className="wrapper-container light">
                <div className="container-content">
                    <h2>Contact Us</h2>
                    <p>Have questions or need assistance? Our dedicated customer support team is here to help. Fill out the form below, and we&apos;ll get back to you promptly.</p>
                </div>
                <div className="container-image">
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d867283.0268039653!2d34.232604675133715!3d31.88419319475637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151cf2d28866bdd9%3A0xee17a001d166f686!2sPalestine!5e0!3m2!1sen!2s!4v1703543103916!5m2!1sen!2s"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        key="google-map-iframe"
                    ></iframe>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact
