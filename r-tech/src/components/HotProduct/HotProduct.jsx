import styles from './HotProduct.module.css'
import bag1 from '../../assets/hotProducts/bag1.jpg'
import bag2 from '../../assets/hotProducts/bag2.jpg'
import bag3 from '../../assets/hotProducts/bag3.jpg'
import bag4 from '../../assets/hotProducts/bag4.jpg'
import chairBanner from '../../assets/chairImages/chair.jpg'
import chairSet2 from '../../assets/chairImages/setChari.jpg'
import chairSet3 from '../../assets/chairImages/setsChair.jpg'
import rTechImage from '../../assets/chairImages/rTech.jpg';
import { Link } from 'react-router-dom'

function HotProduct() {

    const hotProducts = [
        { title: "R-Tech Slash Backpack", img: bag1, emailTitle: "R-Tech Slach BackPack"},
        { title: "R-Tech Slash Sleeve", img: bag2, emailTitle: "R-Tech Slash Sleeve Bag" },
        { title: "R-Tech Slash Sling Bag", img: bag3, emailTitle: "R-Tech Slash Sling Bag" },
        { title: "R-Tech Slash Hard Case", img: bag4, emailTitle: "R-Tech Slash Hard Case" }
    ]

    const emailTitle1 = "R-Tech Gamers X Gaming Chair"
    const emailTitle2 = "R-Tech Gamers X Core Gaming Chair"

    return (
        <>
            <div className={styles.HotWrapper}>
                <h1>HOT PRODUCTS</h1>
                <div className={styles.HotContainer}>

                    {
                        hotProducts.map((product, index) => (
                            <div key={index} className={styles.HotImage}>
                                <img src={product.img} alt="Bag image" />
                                <p>{product.title}</p>
                                <Link to={`/contact?product=${encodeURIComponent(product.emailTitle)}`}>Go a Quote</Link>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className={styles.chairBanner}>
                <h1>Gear & Chair</h1>
                <div className={styles.chairContainer}>
                    <img src={chairBanner} alt="chairBanner" />
                </div>
            </div>


            <div className={styles.setChairWrapper}>
                <div className={styles.setContainer}>
                    <img src={chairSet2} alt="ChairImage" />
                    <h5>R-Tech Gamers X Gaming Chair</h5>
                    <p>R-Tech Gamers X gaming chair in racing-car style, featuring an adjustable high-density foam headrest, memory-foam lumbar support, 4D armrests, tilt mechanism, durable Class 4 gas lift, and premium PU leather for a superior gaming experience.</p>
                    <Link to={`/contact?product=${encodeURIComponent(emailTitle1)}`}>Go a Quote</Link>
                </div>

                <div className={styles.setContainer}>
                    <img src={chairSet3} alt="ChairImage" />
                    <h5>R-Tech Gamers X Core Gaming Chair</h5>
                    <p>R-Tech Gamers X Core gaming chair in racing-car style, featuring an adjustable high-density foam headrest, memory-foam lumbar support, 4D armrests, tilt mechanism, durable Class 4 gas lift, and premium-grade PU leather for an advanced gaming experience.</p>
                    <Link to={`/contact?product=${encodeURIComponent(emailTitle2)}`}>Go a Quote</Link>
                </div>
            </div>

            <div className={styles.rTeckWrappper}>
                <img src={rTechImage} alt="R-Tech Banner" />

                <div className={styles.rTechText}>
                    <h3>THE ART OF THE R-TECH UNIVERSE</h3>
                    <p>
                        Technology never sleeps, nor should the action.
                        For those keen on winning power, the R-Tech Universe awaits.
                        Driven by relentless innovation, R-Tech is committed to producing
                        out-of-this-world experiences for gamers and enthusiasts everywhere.
                    </p>
                </div>

                <div className={styles.Heading}>
                    <h1>JOIN THE R-TECH <br /> ELECTRONICS</h1>
                    <span>Get the latest deal and more</span><br />
                </div>
            </div>

        </>
    )
}

export default HotProduct;