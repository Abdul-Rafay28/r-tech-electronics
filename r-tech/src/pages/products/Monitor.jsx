import styles from './monitor.module.css';
import monitorBanner from './productImages/monitorBanner.jpg';
import monitor1 from './productImages/monitor1.jpg';
import monitor2 from './productImages/monitor2.jpg';
import monitor3 from './productImages/monitor3.jpg';
import monitor4 from './productImages/monitor4.jpg';
import monitor5 from './productImages/monitor5.jpg';
import monitor6 from './productImages/monitor6.jpg';
import monitor7 from './productImages/monitor14.jpg';
import monitor8 from './productImages/monitor4.jpg';
import monitor9 from './productImages/monitor9.jpg';
import monitor10 from './productImages/monitor10.jpg';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

function Monitors() {

    const monitorProducts = [
        {
            title: 'MAG 345CQR',
            emailTitle: 'R-TECH MAG 345CQR Curved Gaming Monitor',
            img: monitor1
        },
        {
            title: 'OCULUX NXG252R',
            emailTitle: 'R-TECH Oculux NXG252R Esports Gaming Monitor',
            img: monitor2
        },
        {
            title: 'MAG 322URDF E16',
            emailTitle: 'R-TECH MAG 322URDF E16 4K Gaming Monitor',
            img: monitor3
        },
        {
            title: 'MAG 274QRF QD E2',
            emailTitle: 'R-TECH MAG 274QRF QD E2 QHD Gaming Monitor',
            img: monitor4
        },
        {
            title: 'MPG 272UP QD-OLED X24',
            emailTitle: 'R-TECH MPG 272UP QD-OLED X24 Gaming Monitor',
            img: monitor5
        },
        {
            title: 'MPG 346CQRF X24',
            emailTitle: 'R-TECH MPG 346CQRF X24 Curved Gaming Monitor',
            img: monitor6
        },
    ];


    const hotProducts = [
        {
            title: "ROG Swift OLED PG27AQWP-W",
            emailTitle: "ROG Swift OLED PG27AQWP-W 27-inch Gaming Monitor",
            image: monitor7,
            spec: [
                "27-inch (26.5-inch viewable) gaming monitor",
                "TrueBlack Glossy™ Tandem OLED display",
                "Dual-Mode: QHD @ 540Hz / FHD @ 720Hz",
                "0.03ms GTG response time",
                "G-SYNC® compatible",
                "OLED Care Pro with Neo Proximity Sensor",
                "VESA DisplayHDR™ 500 True Black",
                "DisplayPort™ 2.1 support"
            ]
        },

        {
            title: "ROG Strix OLED XG27AQWMG",
            emailTitle: "ROG Strix OLED XG27AQWMG 27-inch Gaming Monitor",
            image: monitor8,
            spec: [
                "27-inch (26.5-inch viewable) gaming monitor",
                "1440p TrueBlack Glossy™ Tandem OLED display",
                "280Hz refresh rate",
                "0.03ms response time",
                "Neo Proximity Sensor",
                "ASUS OLED Care Pro",
                "ELMB support",
                "VESA DisplayHDR™ True Black 500",
                "99% DCI-P3 color gamut",
                "DisplayWidget Center"
            ]
        },

        {
            title: "ROG Strix OLED XG32UCWMG",
            emailTitle: "ROG Strix OLED XG32UCWMG 32-inch 4K Gaming Monitor",
            image: monitor9,
            spec: [
                "32-inch (31.5-inch viewable) gaming monitor",
                "4K TrueBlack Glossy™ OLED display",
                "Dual-Mode: 4K @ 240Hz / FHD @ 480Hz",
                "0.03ms GTG response time",
                "G-SYNC® compatible",
                "Custom heatsink design",
                "OLED Care Pro with Neo Proximity Sensor",
                "VESA DisplayHDR™ 400 True Black",
                "Auto KVM",
                "USB Type-C® support"
            ]
        },

        {
            title: "ROG Strix XG27UCG",
            emailTitle: "ROG Strix XG27UCG 27-inch 4K Gaming Monitor",
            image: monitor10,
            spec: [
                "27-inch gaming monitor",
                "3840 x 2160 (4K) resolution",
                "Dual-mode refresh rates",
                "Fast IPS panel",
                "Extreme Low Motion Blur Sync (ELMB Sync)",
                "USB Type-C® connectivity",
                "G-SYNC® compatible",
                "DisplayWidget Center",
                "Tripod socket",
                "HDR and Aura Sync RGB lighting"
            ]
        }
    ];




    return (
        <>
            <div className={styles.monitorBanner}>
                <img src={monitorBanner} alt="monitorImage" />
            </div>

            <div className={styles.monitorWrapper}>
                <h1>MONITORS</h1>
                <div className={styles.monitorContainer}>
                    {
                        monitorProducts.map((monitors, index) => (
                            <div key={index} className={styles.monitorProduct}>
                                <img src={monitors.img} alt="monitorImage" />
                                <p>{monitors.title}</p>
                                <Link to={`/contact?product=${encodeURIComponent(monitors.emailTitle)}`}>Go a Quote</Link>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className={styles.monitorHotWrapper}>
                <h1>HOT PRODUCTS</h1>
                <div className={styles.monitorHotContainer}>
                    {
                        hotProducts.map((product, index) => (
                            <div key={index} className={styles.monitorHotImage}>
                                <img src={product.image} alt="monitorImage" />
                                <h4>{product.title}</h4>
                                {product.spec.map((spec, index) => (
                                    <p key={index}>{spec}</p>
                                ))}
                                <Link to={`/contact?product=${encodeURIComponent(product.emailTitle)}`}>Go a Quote</Link>
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

export default Monitors;