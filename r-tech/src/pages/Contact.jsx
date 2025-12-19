import { useLocation } from 'react-router-dom';
import styles from './contact.module.css';
import { useState } from 'react';

function Contact() {
    const location = useLocation();
    const product = new URLSearchParams(location.search).get("product");

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        product: product || '',
    });


    const handleForm = async (e) => {
        e.preventDefault();
    }

    return (
        <div className={styles.contactPage}>

            {/* LEFT SIDE TEXT */}
            <div className={styles.left}>
                {product ? (
                    <>
                        <span className={styles.tag}>Product Inquiry</span>

                        <h1>Let’s Talk About Your Product</h1>

                        <p className={styles.subText}>
                            You are requesting information about:
                        </p>

                        <div className={styles.productBox}>
                            {product}
                        </div>

                        <p className={styles.note}>
                            Our team will review your request and get back to you with
                            detailed information, pricing, and availability.
                        </p>
                    </>
                ) : (
                    <>
                        <span className={styles.tag}>Get In Touch</span>

                        <h1>Contact R-Tech Electronics</h1>

                        <p className={styles.subText}>
                            Have a question or need expert guidance?
                            We’re here to help you choose the right technology.
                        </p>

                        <p className={styles.note}>
                            Fill out the form and our support team will respond as soon as possible.
                        </p>
                    </>
                )}
            </div>

            {/* RIGHT SIDE FORM */}
            <form onSubmit={handleForm} className={styles.form}>
                <input type="text" required onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your Name" />
                <input type="email" required onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Your Email" />

                {product && (
                    <input type="text" value={formData.product} readOnly />
                )}

                <input type="text" required onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Phone Number" />
                <textarea placeholder="Your Message (optional)" onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows="5"></textarea>

                <button type="submit">Send Message</button>
            </form>

        </div>
    );
}

export default Contact;
