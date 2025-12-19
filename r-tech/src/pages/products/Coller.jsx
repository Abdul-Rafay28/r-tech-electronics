import styles from './coller.module.css';
import cBanner from './productImages/collingBanner.jpg';
import cooling1 from './productImages/colling1.jpg';
import cooling2 from './productImages/cooling2.jpg';
import cooling3 from './productImages/cooling3.jpg';
import cooling4 from './productImages/cooling4.jpg';
import cooling5 from './productImages/cooling5.jpg';
import cooling6 from './productImages/cooling6.jpg';
import cooling7 from './productImages/cooling7.jpg';
import cooling8 from './productImages/cooling8.jpg';
import cooling9 from './productImages/cooling9.jpg';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';


function Colling() {


    const hotProduct = [
        {
            title: "R-TECH Ryuo IV SLC 360 ARGB",
            emailTitle: "R-TECH Ryuo IV SLC 360mm ARGB Liquid CPU Cooler",
            img: cooling4,
            para:
                "R-TECH Ryuo IV SLC 360 ARGB with shortened tubing maximizes a clean aesthetic, movable curved 6.67-inch AMOLED display supports naked-eye video or customized system information, and pre-mounted daisy-chained ARGB fans with front and side lighting."
        },

        {
            title: "R-TECH RYUO IV 360 ARGB Hatsune Miku Edition",
            emailTitle: "R-TECH Ryuo IV 360mm ARGB Hatsune Miku Edition Liquid CPU Cooler",
            img: cooling5,
            para:
                "R-TECH RYUO IV 360 ARGB Hatsune Miku Edition with movable curved 6.67-inch AMOLED display supports naked-eye video or customized system information, and pre-mounted daisy-chained ARGB fans with front and side lighting."
        },

        {
            title: "R-TECH Ryuo IV SLC 360 ARGB White Edition",
            emailTitle: "R-TECH Ryuo IV SLC 360mm ARGB White Edition Liquid CPU Cooler",
            img: cooling6,
            para:
                "R-TECH Ryuo IV SLC 360 ARGB White Edition with shortened tubing maximizes a clean aesthetic, movable curved 6.67-inch AMOLED display supports naked-eye video or customized system information, and pre-mounted daisy-chained ARGB fans with aura front edge."
        },

        {
            title: "R-TECH Ryujin III 360 ARGB Extreme White Edition",
            emailTitle: "R-TECH Ryujin III 360mm ARGB Extreme White Edition Liquid CPU Cooler",
            img: cooling7,
            para:
                "R-TECH Ryujin III 360 ARGB Extreme all-in-one liquid CPU cooler with Asetek’s Emma Gen8 V2 pump, thickened magnetic ROG ARGB fans for high airflow and static pressure with noise optimization, 3.5\" LCD for hardware monitoring and custom GIFs."
        }
    ];

    const newProduct = [
        {
            title: 'R-TECH RYUJIN ||| WB White Edition',
            emailTitle: 'R-TECH Ryujin III WB White Edition CPU Water Block',
            image: cooling8,
            para: 'R-TECH Ryujin III WB CPU water block with full-color 3.5-inch LCD screen, embedded VRM fan, 178 micro-cooling fans and copper alloy cold plate cooling technology by Asetek, and R-TECH fitting'
        },
        {
            title: 'R-TECH RYUJIN ||| WB Black Edition',
            emailTitle: 'R-TECH Ryujin III WB Black Edition CPU Water Block',
            image: cooling9,
            para: 'R-TECH Ryujin III WB CPU water block with full-color 3.5-inch LCD screen, embedded VRM fan, 178 micro-cooling fans and copper alloy cold plate cooling technology by Asetek, and R-TECH fitting'
        },
    ];

    const emailTitle1 = "R-TECH Ryujin Liquid CPU Cooler";
    const emailTitle2 = "R-TECH Ryuo Liquid CPU Cooler";
    const emailTitle3 = "R-TECH Strix LC Liquid CPU Cooler";


    return (
        <>
            <div className={styles.collingBanner}>
                <img src={cBanner} alt="Coller Image" />
                <div className={styles.collerHeading}>
                    <h1>2026 R-TECH COOLING SOLUTIONS</h1>
                    <h3>COOLING THAT DOMINATES</h3>
                    <p>
                        Next-generation cooling by R-TECH,
                        engineered for extreme performance, silent operation,
                        and reliable thermal control under any load.
                    </p>
                </div>
            </div>

            <div className={styles.collingWrapper}>
                <h1>COOLING</h1>
                <h2>CPU LIQUID COOLERS</h2>
                <div className={styles.collingContainer}>
                    <div className={styles.coolingProduct}>
                        <img src={cooling1} alt="collingImage" />
                        <div className={styles.collingCard}>
                            <h3>R-TECH RYUJIN</h3>
                            <p>Flagship</p>
                            <Link to={`/contact?product=${encodeURIComponent(emailTitle1)}`}>Get a Quote</Link>
                        </div>
                    </div>

                    <div className={styles.coolingProduct}>

                        <img src={cooling2} alt="collingImage" />
                        <div className={styles.collingCard}>
                            <h3>R-TECH RYUO</h3>
                            <p>Enthusiast</p>
                            <Link to={`/contact?product=${encodeURIComponent(emailTitle2)}`}>Get a Quote</Link>
                        </div>

                    </div>
                    <div className={styles.coolingProduct}>

                        <img src={cooling3} alt="collingImage" />
                        <div className={styles.collingCard}>
                            <h3>R-TECH STRIX LC</h3>
                            <p>Performance</p>
                            <Link to={`/contact?product=${encodeURIComponent(emailTitle3)}`}>Get a Quote</Link>
                        </div>

                    </div>

                </div>
            </div>

            <div className={styles.coolingHot}>
                <h1>HOT PRODUCTS</h1>
                <div className={styles.collingContainerHot}>
                    {
                        hotProduct.map((product, index) => (
                            <div key={index} className={styles.hotIMage}>
                                <img src={product.img} alt="" />
                                <h3>{product.title}</h3>
                                <p>{product.para}</p>
                                <Link to={`/contact?product=${encodeURIComponent(product.emailTitle)}`}>Get a Quote</Link>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className={styles.newProductWrapper}>
                <h1>NEW PRODUCTS</h1>
                <div className={styles.newProduct}>
                    {
                        newProduct.map((newItem, index) => (
                            <div key={index} className={styles.newCollingIMage}>
                                <img src={newItem.image} alt="coolingImage" />
                                <h3>{newItem.title}</h3>
                                <p>{newItem.para}</p>
                                <Link to={`/contact?product=${encodeURIComponent(newItem.emailTitle)}`}>Get a Quote</Link>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}

export default Colling;