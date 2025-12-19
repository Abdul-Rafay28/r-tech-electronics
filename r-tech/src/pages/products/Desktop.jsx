import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import styles from './desktop.module.css';
import case1 from './productImages/cases1.jpg'
import case2 from './productImages/cases2.jpg'
import case3 from './productImages/cases3.jpg'
import case4 from './productImages/cases4.jpg'
import case5 from './productImages/cases5.jpg'
import case6 from './productImages/cases6.jpg'
import case7 from './productImages/cases7.jpg'
import case8 from './productImages/cases8.jpg'
import case9 from './productImages/cases9.jpg'
import desktop1 from './productImages/desktop1.jpg'
import desktop2 from './productImages/desktop2.jpg'
import desktop3 from './productImages/desktop3.jpg'
import desktop4 from './productImages/desktop4.jpg'
import desktop5 from './productImages/desktop5.jpg'
import desktop6 from './productImages/desktop6.jpg'
import desktop7 from './productImages/hotDesktop1.jpg';
import desktop8 from './productImages/hotDesktop2.jpg';
import desktop9 from './productImages/hotDesktop3.jpg';
import desktop10 from './productImages/hotDesktop4.jpg';

function Desktops() {

    const casesImages = [
        {
            title: "R-TECH Strix Helios II – White Edition",
            emailTitle: "R-TECH Strix Helios II White Edition E-ATX Gaming Case",
            para: "R-TECH Strix Helios II EATX mid-tower gaming case with dual tempered glass side panels, GPU support up to 450mm, aluminum frame, GPU braces and 420mm radiator support",
            img: case1,
        },
        {
            title: "R-TECH Strix Helios II – Hatsune Miku Edition",
            emailTitle: "R-TECH Strix Helios II Hatsune Miku Edition E-ATX Gaming Case",
            para: "R-TECH Strix Helios II EATX mid-tower gaming case with dual tempered glass side panels, GPU support up to 450mm, aluminum frame, GPU braces and 420mm radiator support",
            img: case2,
        },
        {
            title: "R-TECH Hyperion GR701 – BTF Edition",
            emailTitle: "R-TECH Hyperion GR701 BTF Edition Full-Tower Gaming Case",
            para: "Support GPU up to 460mm in length, hidden motherboard connectors design, dual 420mm radiator support, four 140mm fans, metal GPU holder and ARGB fan hub",
            img: case3,
        },
        {
            title: "R-TECH Hyperion GR701 – EVA-02 Edition",
            emailTitle: "R-TECH Hyperion GR701 EVA-02 Edition Full-Tower Gaming Case",
            para: "Support GPU up to 460mm in length, dual 420mm radiator support, four 140mm fans, metal GPU holder, ARGB fan hub and 60W fast charging",
            img: case4,
        },
        {
            title: "R-TECH Strix Helios – White Edition",
            emailTitle: "R-TECH Strix Helios White Edition ATX/E-ATX Gaming Case",
            para: "Support GPU up to 450mm, tempered glass panels, aluminum frame, GPU braces, 420mm radiator support and Aura Sync lighting",
            img: case5,
        },
        {
            title: "R-TECH Strix Helios – Black Edition",
            emailTitle: "R-TECH Strix Helios RGB ATX/E-ATX Gaming Case",
            para: "Support GPU up to 450mm, tempered glass panels, aluminum frame, GPU braces, 420mm radiator support and Aura Sync lighting",
            img: case6,
        },
        {
            title: "R-TECH Helios Series",
            emailTitle: "R-TECH Helios Series ATX/E-ATX Gaming Case",
            para: "Support GPU up to 450mm, tempered glass panels, aluminum frame, GPU braces, 420mm radiator support and Aura Sync lighting",
            img: case7,
        },
        {
            title: "R-TECH Hyperion GR701",
            emailTitle: "R-TECH Hyperion GR701 Full-Tower Gaming Case",
            para: "EATX mid-tower gaming case with dual tempered glass side panels, GPU support up to 450mm, aluminum frame and 420mm radiator support",
            img: case8,
        },
        {
            title: "R-TECH Z11 Mini-ITX Case",
            emailTitle: "R-TECH Z11 Mini-ITX Gaming Case",
            para: "Mini-ITX / DTX gaming case with 4mm tempered glass panels, patented 11° tilt design, optimized airflow, ATX PSU support and Aura Sync",
            img: case9,
        },
    ];


    const desktopsImages = [
        {
            title: "R-TECH MPG Infinite Z3 X3D Gaming PC",
            emailTitle: "R-TECH MPG Infinite Z3 X3D Pre-Built Gaming Desktop",
            image: desktop1,
        },
        {
            title: "R-TECH MPG Trident AS (14th Gen)",
            emailTitle: "R-TECH MPG Trident AS 14th Gen Pre-Built Gaming Desktop",
            image: desktop2,
        },
        {
            title: "R-TECH MPG Trident AS (13th Gen)",
            emailTitle: "R-TECH MPG Trident AS 13th Gen Pre-Built Gaming Desktop",
            image: desktop3,
        },
        {
            title: "R-TECH MFG Vision X AI (2nd Gen)",
            emailTitle: "R-TECH MFG Vision X AI 2nd Gen Pre-Built Gaming Desktop",
            image: desktop4,
        },
        {
            title: "R-TECH MAG Infinite E1 Gaming PC",
            emailTitle: "R-TECH MAG Infinite E1 Pre-Built Gaming Desktop",
            image: desktop5,
        },
        {
            title: "R-TECH MAG Codex 6 (14th Gen)",
            emailTitle: "R-TECH MAG Codex 6 14th Gen Pre-Built Gaming Desktop",
            image: desktop6,
        },
    ];

    const desktopEmailTitle1 = "R-TECH Full Tower Gaming PC Build";
    const desktopEmailTitle2 = "R-TECH Full Tower Pro Gaming PC Build";
    const desktopEmailTitle3 = "R-TECH Full Tower Extreme Gaming PC Build";
    const desktopEmailTitle4 = "R-TECH Full Tower Custom Gaming PC Build";

    return (
        <>
            <div className={styles.casesWrapper}>
                <h1 className={styles.casesTitle}>
                    CASES
                    <span className={styles.slashes}></span>
                </h1>

                <div className={styles.line}></div>

                <div className={styles.casesContainer}>
                    {
                        casesImages.map((cases, index) => (
                            <div key={index} className={styles.casesImages}>
                                <img src={cases.img} alt="caseImage" />
                                <h4>{cases.title}</h4>
                                <p>{cases.para}</p>
                                <Link to={`/contact?product=${cases.emailTitle}`}>Go a Quote</Link>
                            </div>
                        ))
                    }
                </div>
            </div>


            <div className={styles.desktopsWrapper}>
                <h1>DESKTOPS</h1>
                <p>R-TECH designs premium PC cases built for performance, airflow, and durability. Every R-TECH case combines modern aesthetics with smart engineering to power next-generation gaming and creative builds.</p>

                <div className={styles.desktopContainer}>
                    {
                        desktopsImages.map((desktops, index) => (
                            <div key={index} className={styles.desktopsImages}>
                                <img src={desktops.image} alt="desktopsImage" />
                                <h4>{desktops.title}</h4>
                                <Link to={`/contact?product=${encodeURIComponent(desktops.emailTitle)}`}>Go a Quote</Link>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className={styles.hotWrapper}>
                <h1>HOT PRODUCTS</h1>
                <div className={styles.hotProducts}>

                    <div className={styles.hotItem}>
                        <img src={desktop7} alt="ImageDesktop" />
                        <div className={styles.hotText}>
                            <h2>FULL TOWER</h2>
                            <p>Go all-out with a full-size chassis that offer plenty of room for high-end hardware extensive colling, and extra expensive features</p>
                            <Link to={`/contact?product=${encodeURIComponent(desktopEmailTitle1)}`}>Go a Quote</Link>
                        </div>
                    </div>
                    <div className={styles.hotItem}>
                        <img src={desktop8} alt="ImageDesktop" />
                        <div className={styles.hotText}>
                            <h2>FULL TOWER</h2>
                            <p>Go all-out with a full-size chassis that offer plenty of room for high-end hardware extensive colling, and extra expensive features</p>
                            <Link to={`/contact?product=${encodeURIComponent(desktopEmailTitle2)}`}>Go a Quote</Link>
                        </div>
                    </div>
                    <div className={styles.hotItem}>
                        <img src={desktop9} alt="ImageDesktop" />
                        <div className={styles.hotText}>
                            <h2>FULL TOWER</h2>
                            <p>Go all-out with a full-size chassis that offer plenty of room for high-end hardware extensive colling, and extra expensive features</p>
                            <Link to={`/contact?product=${encodeURIComponent(desktopEmailTitle3)}`}>Go a Quote</Link>
                        </div>
                    </div>
                    <div className={styles.hotItem}>
                        <img src={desktop10} alt="ImageDesktop" />
                        <div className={styles.hotText}>
                            <h2>FULL TOWER</h2>
                            <p>Go all-out with a full-size chassis that offer plenty of room for high-end hardware extensive colling, and extra expensive features</p>
                            <Link to={`/contact?product=${encodeURIComponent(desktopEmailTitle4)}`}>Go a Quote</Link>
                        </div>
                    </div>

                </div>

            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}

export default Desktops;