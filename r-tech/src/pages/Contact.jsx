import { useLocation } from 'react-router-dom';
import styles from './contact.module.css';
import { useState } from 'react';

function Contact() {
    const location = useLocation();
    const product = new URLSearchParams(location.search).get("product");


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
        product: product || "",
    });

    const [error, setError] = useState('');

    const [success, setSuccess] = useState('');

    const [loading, setLoading] = useState(false);

    const handleForm = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');
        try {

            const url = "http://localhost:4400/r-tech/contact-form";
            const formRes = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            const res = await formRes.json();
            if (!res.success) {
                setError(res.message)
                return;
            }
            if (res.success) {
                setFormData({
                    name: "",
                    email: "",
                    phoneNumber: "",
                    message: "",
                    product: "",
                });
                setSuccess(res.message)
            }

        } catch (error) {
            alert('Something went wrong please try again later!')
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 2000)

        }
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
            <form onSubmit={handleForm} className={styles.form} noValidate >
                {
                    success && <span className={styles.resMessageSucc}>{success}</span>
                }
                {
                    success && <span className={styles.emailMessage}>If you don’t see this email in your inbox, please check All Inboxes, Spam or Promotions.</span>
                }
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your Name" />
                {
                    error && !formData.name && <span className={styles.resMessageErr}>{error}</span>
                }
                <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Your Email" />
                {
                    error && !formData.email && <span className={styles.resMessageErr}>{error}</span>
                }

                {product && (
                    <input type="text" value={formData.product} readOnly />
                )}
                {
                    error && !formData.product && <span className={styles.resMessageErr}>{error}</span>
                }

                <input type="text" value={formData.phoneNumber} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} placeholder="Phone Number" />
                {
                    error && !formData.phoneNumber && <span className={styles.resMessageErr}>{error}</span>
                }
                <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Your Message (optional)" rows="5"></textarea>

                <button type="submit" disabled={loading}>{loading ? "Sending..." : 'SendMessage'}</button>
            </form>

        </div>
    );
}

export default Contact;
