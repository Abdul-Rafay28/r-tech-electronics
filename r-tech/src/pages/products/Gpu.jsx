import styles from './gpu.module.css';
import graphicCard from './productImages/graphicCardBanner.jpg';
import gpu1 from './productImages/gpu4.jpg';
import gpu2 from './productImages/gpu5.jpg';
import gpu3 from './productImages/gpu6.jpg';
import gpu4 from './productImages/gpu7.jpg';
import gpu5 from './productImages/gpu8.jpg';
import gpu6 from './productImages/gpu9.jpg';
import gpu7 from './productImages/gpu10.jpg';
import gpu8 from './productImages/gpu11.jpg';
import gpu11 from './productImages/gpu1.jpg';
import gpu12 from './productImages/gpu2.jpg';
import gpu13 from './productImages/gpu3.jpg';
import gpu14 from './productImages/gpu14.jpg';
import gpu15 from './productImages/gpu15.jpg';
import gpu16 from './productImages/gpu16.jpg';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

function GraphicCard() {

    const gCardProduct = [
        {
            title: 'GeForce RTX 5090 32G',
            spec: 'SUPRIM SOC',
            emailTitle: 'GeForce RTX 5090 32GB SUPRIM SOC Graphics Card',
            image: gpu1,
        },
        {
            title: 'GeForce RTX 5080 16G',
            spec: 'SUPRIM LIQUID OC',
            emailTitle: 'GeForce RTX 5080 16GB SUPRIM LIQUID OC Graphics Card',
            image: gpu2,
        },
        {
            title: 'GeForce RTX 5080 16G',
            spec: 'SUPRIM LIQUID OC',
            emailTitle: 'GeForce RTX 5080 16GB SUPRIM LIQUID OC Graphics Card',
            image: gpu3,
        },
        {
            title: 'GeForce RTX 5080 16G',
            spec: 'SUPRIM LIQUID OC',
            emailTitle: 'GeForce RTX 5080 16GB SUPRIM LIQUID OC Graphics Card',
            image: gpu4,
        },
        {
            title: 'GeForce RTX 5080 16G',
            spec: 'SUPRIM LIQUID OC',
            emailTitle: 'GeForce RTX 5080 16GB SUPRIM LIQUID OC Graphics Card',
            image: gpu5,
        },
        {
            title: 'GeForce RTX 5080 16G',
            spec: 'SUPRIM LIQUID OC',
            emailTitle: 'GeForce RTX 5080 16GB SUPRIM LIQUID OC Graphics Card',
            image: gpu6,
        },
        {
            title: 'GeForce RTX 5080 16G',
            spec: 'SUPRIM LIQUID OC',
            emailTitle: 'GeForce RTX 5080 16GB SUPRIM LIQUID OC Graphics Card',
            image: gpu7,
        },
        {
            title: 'GeForce RTX 5080 16G',
            spec: 'SUPRIM LIQUID OC',
            emailTitle: 'GeForce RTX 5080 16GB SUPRIM LIQUID OC Graphics Card',
            image: gpu8,
        },
        {
            title: 'GeForce RTX 5080 16G',
            spec: 'SUPRIM LIQUID OC',
            emailTitle: 'GeForce RTX 5080 16GB SUPRIM LIQUID OC Graphics Card',
            image: gpu7,
        },
        {
            title: 'GeForce RTX 5080 16G',
            spec: 'SUPRIM LIQUID OC',
            emailTitle: 'GeForce RTX 5080 16GB SUPRIM LIQUID OC Graphics Card',
            image: gpu8,
        }
    ];

    const hotCardProduct = [
        {
            title: "ROG Astral LC GeForce RTX™ 5090 32GB GDDR7 OC Edition",
            emailTitle: "ROG Astral LC GeForce RTX 5090 32GB GDDR7 OC Edition Graphics Card",
            img: gpu14,
            specs: [
                "ROG Astral LC GeForce RTX™ 5090",
                "32GB GDDR7 Memory",
                "OC Edition",
                "360mm AIO Cooler",
                "Optimized for highest GPU boost clock",
                "Designed for extreme cooling and performance"
            ],
        },

        {
            title: "ROG Astral GeForce RTX™ 5090 32GB GDDR7 OC Edition",
            emailTitle: "ROG Astral GeForce RTX 5090 32GB GDDR7 OC Edition Graphics Card",
            img: gpu15,
            specs: [
                "ROG Astral GeForce RTX™ 5090",
                "32GB GDDR7 Memory",
                "OC Edition",
                "First ROG quad-fan graphics card",
                "Unprecedented airflow",
                "High air pressure for optimal cooling performance"
            ],
        },

        {
            title: "ROG Astral GeForce RTX™ 5080 16GB GDDR7 OC Edition",
            emailTitle: "ROG Astral GeForce RTX 5080 16GB GDDR7 OC Edition Graphics Card",
            img: gpu16,
            specs: [
                "ROG Astral GeForce RTX™ 5080",
                "16GB GDDR7 Memory",
                "OC Edition",
                "First ROG quad-fan graphics card",
                "Unprecedented airflow",
                "Optimized cooling performance"
            ],
        },

        {
            title: "ROG Strix GeForce RTX™ 5070 Ti 16GB GDDR7 OC Edition",
            emailTitle: "ROG Strix GeForce RTX 5070 Ti 16GB GDDR7 OC Edition Graphics Card",
            img: gpu14,
            specs: [
                "ROG Strix GeForce RTX™ 5070 Ti",
                "16GB GDDR7 Memory",
                "OC Edition",
                "Advanced cooling system",
                "Premium power delivery",
                "Built for high-performance gaming"
            ],
        },
    ];

    const gpuEmailTitle1 = "R-TECH Matrix Series Graphics Cards";
    const gpuEmailTitle2 = "R-TECH Astral Series Graphics Cards";
    const gpuEmailTitle3 = "R-TECH Strix Series Graphics Cards";



    return (
        <>
            <div className={styles.gpuWrapper}>
                <div className={styles.gpuImage}>
                    <img src={graphicCard} alt="R-Tech Gaming Laptop" />
                </div>
            </div>

            <div className={styles.gpuConatainer}>

                <div className={styles.gpuText}>
                    <h1>Grapphic Cards</h1>
                    <p>
                        R-Tech creates high-performance graphic cards built for extreme gaming. With cutting-edge architecture, stunning visuals, and intelligent cooling, our GPUs push performance beyond limits.
                    </p>
                </div>

                <div className={styles.gruProducts}>
                    {
                        gCardProduct.map((gCard, index) => (
                            <div key={index} className={styles.hotGImages}>
                                <img src={gCard.image} alt="graphicCard Image" />
                                <p>{gCard.title}</p>
                                <p>{gCard.spec}</p>
                                <Link to={`/contact?product-${encodeURIComponent(gCard.emailTitle)}`}>Go a Quote</Link>
                            </div>
                        ))
                    }
                </div>
            </div>


            <div className={styles.gHeading}>
                <h1>NEW CARDS</h1>
            </div>

            <div className={styles.newgWrapper}>
                <div className={styles.newgCard}>

                    <img src={gpu11} alt="Graphic cardImage" />
                    <div className={styles.newgText}>
                        <h3>R-TECH MATRIX</h3>
                        <p>Pinnacle Performance</p>
                        <Link to={`/contact?product=${encodeURIComponent(gpuEmailTitle1)}`}>Go a Quote</Link>
                    </div>
                </div>

                <div className={styles.newgCard}>
                    <img src={gpu12} alt="Graphic cardImage" />
                    <div className={styles.newgText}>
                        <h3>R-TECH ASTAL</h3>
                        <p>The Next Frontier</p>
                        <Link to={`/contact?product=${encodeURIComponent(gpuEmailTitle2)}`}>Go a Quote</Link>
                    </div>
                </div>

                <div className={styles.newgCard}>
                    <img src={gpu13} alt="Graphic cardImage" />
                    <div className={styles.newgText}>
                        <h3>R-TECH STRIX</h3>
                        <p>Take Flight</p>
                        <Link to={`/contact?product=${encodeURIComponent(gpuEmailTitle3)}`}>Go a Quote</Link>
                    </div>
                </div>

            </div>

            <div className={styles.hotGWrapper}>
                <h1>HOT PRODUCTS</h1>
                <div className={styles.hotGgrid}>
                    {
                        hotCardProduct.map((hotCard, index) => (
                            <div key={index} className={styles.hotGImage}>
                                <img src={hotCard.img} alt="Graphic CardImage" />
                                <h2>{hotCard.title}</h2>
                                {hotCard.specs.map((spec, index) => (
                                    <p key={index}>{spec}</p>
                                ))}
                                <Link to={`/contact?product=${encodeURIComponent(hotCard.emailTitle)}`}>Go a Quote</Link>
                            </div>
                        ))
                    }

                </div>
            </div>

            <div>
                <Footer />
            </div>
        </>
    );
}

export default GraphicCard;