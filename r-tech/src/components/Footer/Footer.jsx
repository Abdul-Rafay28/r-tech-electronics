import { useState } from "react";
import styles from "./footer.module.css";

function Footer() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <footer className={styles.footer}>
          
            {/* ===================== DESKTOP FOOTER ===================== */}
            <div className={styles.desktopFooter}>
                <div>
                    <h4>Company</h4>
                    <p>About R-Tech</p>
                    <p>Home</p>
                    <p>Contact R-Tech</p>
                    <p>Careers</p>
                    <p>Blog</p>
                </div>

                <div>
                    <h4>Support</h4>
                    <p>Help Center</p>
                    <p>Warranty Information</p>
                    <p>Return Policy</p>
                    <p>Accessibility Support</p>
                </div>

                <div>
                    <h4>Products</h4>
                    <p>Laptops</p>
                    <p>GPUs</p>
                    <p>Motherboards</p>
                    <p>Accessories</p>
                </div>

                <div>
                    <h4>Follow Us</h4>
                    <div className={styles.socialRow}>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-x-twitter"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-tiktok"></i>
                        <i className="fa-brands fa-discord"></i>
                    </div>
                </div>
            </div>


            {/* ===================== MOBILE ACCORDION FOOTER ===================== */}
            <div className={styles.mobileFooter}>

                {/* Social Icons */}
                <div className={styles.mobileSocial}>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-x-twitter"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-tiktok"></i>
                    <i className="fa-brands fa-discord"></i>
                </div>

                {/* Company */}
                <div className={styles.section}>
                    <div className={styles.title} onClick={() => toggleSection('company')}>
                        Company <span>{openSection === 'company' ? '−' : '+'}</span>
                    </div>

                    {openSection === 'company' && (
                        <div className={styles.links}>
                            <p>About R-Tech</p>
                            <p>Home</p>
                            <p>Contact R-Tech</p>
                            <p>Careers</p>
                            <p>Blog</p>
                        </div>
                    )}
                </div>

                {/* Support */}
                <div className={styles.section}>
                    <div className={styles.title} onClick={() => toggleSection('support')}>
                        Support <span>{openSection === 'support' ? '−' : '+'}</span>
                    </div>

                    {openSection === 'support' && (
                        <div className={styles.links}>
                            <p>Help Center</p>
                            <p>Warranty Information</p>
                            <p>Return Policy</p>
                            <p>Accessibility Support</p>
                        </div>
                    )}
                </div>

                {/* Products */}
                <div className={styles.section}>
                    <div className={styles.title} onClick={() => toggleSection('products')}>
                        Products <span>{openSection === 'products' ? '−' : '+'}</span>
                    </div>

                    {openSection === 'products' && (
                        <div className={styles.links}>
                            <p>Laptops</p>
                            <p>GPUs</p>
                            <p>Motherboards</p>
                            <p>Accessories</p>
                        </div>
                    )}
                </div>
            </div>

            {/* COPYRIGHT */}
            <p className={styles.copy}>© 2025 R-Tech Electronics. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
