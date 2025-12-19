import styles from './laptop.module.css';
import laptop from './productImages/laptopImage.jpg';
import laptop1 from './productImages/laptop1.jpg';
import laptop2 from './productImages/laptop2.jpg';
import laptop3 from './productImages/laptop3.jpg';
import laptop4 from './productImages/laptop4.jpg';
import laptop5 from './productImages/laptop5.jpg';
import laptop6 from './productImages/laptop6.jpg';
import laptop7 from './productImages/laptop7.jpg';
import laptop8 from './productImages/laptop8.jpg';
import laptop9 from './productImages/laptop9.jpg';
import laptop10 from './productImages/laptop10.jpg';
import laptop11 from './productImages/laptop11.jpg';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
function Laptop() {

    const products = [
        {
            title: "R-TECH Flow Z13 (2025)",
            emailTitle: "R-TECH Flow Z13 (2025) Gaming Laptop",
            image: laptop4,
            specs: [
                "Up to Windows 11 Pro",
                "Up to AMD Ryzen AI MAX+ 395 Processor",
                "13.4-inch, 2.5K (2560 x 1600), WQXGA",
                "Refresh Rate: 180Hz, ROG Nebula Display",
                "Up to 128GB LPDDR5X on board",
                "Up to 1TB PCIe 4.0 NVMe M.2 SSD"
            ]
        },
        {
            title: "R-TECH Zephyrus G14 (2025)",
            emailTitle: "R-TECH Zephyrus G14 (2025) Gaming Laptop",
            image: laptop5,
            specs: [
                "Up to NVIDIA GeForce RTX 5080 Laptop GPU",
                "Up to AMD Ryzen AI 9 HX 370 Processor",
                "14-inch, 3K (2880 x 1800) OLED",
                "Refresh Rate: 120Hz, ROG Nebula Display",
                "Up to 64GB LPDDR5X",
                "Up to 2TB PCIe 4.0 NVMe M.2 SSD"
            ]
        },
        {
            title: "R-TECH Strix Scar 18 (2025)",
            emailTitle: "R-TECH Strix SCAR 18 (2025) Gaming Laptop",
            image: laptop6,
            specs: [
                "Up to NVIDIA GeForce RTX 5090 Laptop GPU",
                "Up to Intel Core Ultra 9 Processor 275HX",
                "18-inch, 2.5K (2560 x 1600), WQXGA",
                "Mini LED, Refresh Rate: 240Hz",
                "Up to 32GB DDR5-5600 SO-DIMM x2",
                "Up to 2TB + 2TB PCIe 4.0 NVMe M.2 (RAID)"
            ]
        },
        {
            title: "R-TECH Strix G16 (2025)",
            emailTitle: "R-TECH Strix G16 (2025) Gaming Laptop",
            image: laptop5,
            specs: [
                "Up to NVIDIA GeForce RTX 5080 Laptop GPU",
                "Up to Intel Core Ultra 9 Processor 275HX",
                "16-inch, 2.5K (2560 x 1600), WQXGA",
                "Refresh Rate: 240Hz, ROG Nebula Display",
                "Up to 32GB DDR5-5600 SO-DIMM x2",
                "Up to 2TB PCIe 4.0 NVMe M.2 SSD"
            ]
        }
    ];


    const laptopNewProduct = [
        {
            title: "Razer Blade 16 - QHD+ 240 Hz OLED - GeForce RTX 5060 - Black",
            emailTitle: "Razer Blade 16 Gaming Laptop (RTX 5060, QHD+ 240Hz OLED)",
            imageNew: laptop10,
            spec: "Ultra-thin 16-inch AMD gaming laptop with NVIDIA GeForce RTX 50 Series graphics",
        },
        {
            title: "Razer Blade 18 - Dual UHD+ 240 Hz | FHD+ 440 Hz - GeForce RTX 5080 - Black",
            emailTitle: "Razer Blade 18 Gaming Laptop (RTX 5080, Dual UHD+/FHD+ High Refresh)",
            imageNew: laptop8,
            spec: "Ultra-thin 16-inch AMD gaming laptop with NVIDIA GeForce RTX 50 Series graphics",
        },
        {
            title: "Razer Blade 14 - 3K 120 Hz OLED - GeForce RTX 5070 - Black",
            emailTitle: "Razer Blade 14 Gaming Laptop (RTX 5070, 3K 120Hz OLED)",
            imageNew: laptop9,
            spec: "Ultra-portable 14-Inch AMD gaming laptop with NVIDIA RTX 50 Series graphics",
        },
    ];

    const laptopEmailTitle1 = "R-TECH Flow Series Gaming Laptop";
    const laptopEmailTitle2 = "R-TECH Zephyrus Series Gaming Laptop";
    const laptopEmailTitle3 = "R-TECH Strix Series Gaming Laptop";


    return (
        <>
            <div className={styles.laptopWrapper}>
                <div className={styles.laptopImage}>
                    <img src={laptop} alt="R-Tech Gaming Laptop" />

                    <div className={styles.heading}>
                        <h1>2026 R-TECH GAMING LAPTOP</h1>
                        <h3>POWER THAT PERFORMS</h3>
                        <p>
                            Next-generation laptops by R-TECH,
                            crafted for speed, reliability, and modern computing needs.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.laptopProducts}>

                <div className={styles.laptopText}>
                    <h1>LAPTOPS</h1>
                    <p>
                        R-Tech was founded to create the world’s best gaming devices.
                        Our premium devices elevate gaming experiences with best-in-class
                        displays, top-tier graphics, and innovative cooling solutions.
                    </p>
                </div>

                <div className={styles.laptopContainer}>

                    <div className={styles.laptopCard}>
                        <img src={laptop1} alt="R-Tech Flow" />
                        <div className={styles.cardContent}>
                            <h2>R-TECH FLOW</h2>
                            <p>
                                Ultra-thin gaming devices that can travel anywhere
                                and adapt to any scenario.
                            </p>
                            <Link to={`/contact?product=${encodeURIComponent(laptopEmailTitle1)}`}>Get a Quote</Link>
                        </div>
                    </div>

                    <div className={styles.laptopCard}>
                        <img src={laptop2} alt="R-Tech Zephyrus" />
                        <div className={styles.cardContent}>
                            <h2>R-TECH ZEPHYRUS</h2>
                            <p>
                                Stylish thin-and-light designs with exceptional
                                performance and breathtaking displays.
                            </p>
                            <Link to={`/contact?product=${encodeURIComponent(laptopEmailTitle2)}`}>Get a Quote</Link>
                        </div>
                    </div>

                    <div className={styles.laptopCard}>
                        <img src={laptop3} alt="R-Tech Strix" />
                        <div className={styles.cardContent}>
                            <h2>R-TECH STRIX</h2>
                            <p>
                                Standout laptops designed to provide world-class
                                performance for competitive gamers and creators.
                            </p>
                            <Link to={`/contact?product=${encodeURIComponent(laptopEmailTitle3)}`}>Get a Quote</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.laptopHotProduct}>
                <h1>GAMING LAPTOPS</h1>
                <div className={styles.hotGrid}>
                    {
                        products.map((laptop, index) => (
                            <div className={styles.hotPImage} key={index}>
                                <img src={laptop.image} alt="laptopImage" />
                                <h2>{laptop.title}</h2>
                                {laptop.specs.map((spec, index) => (
                                    <p key={index}>{spec}</p>
                                ))}
                                <Link to={`/contact?product=${encodeURIComponent(laptop.emailTitle)}`}>Go a Quote</Link>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className={styles.laptopNewProduct}>
                <h1>HOT PRODUCTS</h1>
                <div className={styles.newGrid}>
                    {
                        laptopNewProduct.map((newLaptop, index) => (
                            <div className={styles.newImage} key={index}>
                                <img src={newLaptop.imageNew} alt="laptopImage" />
                                <h2>{newLaptop.title}</h2>
                                <p>{newLaptop.spec}</p>
                                <Link to={`/contact?product=${encodeURIComponent(newLaptop.emailTitle)}`}>Go a Quote</Link>
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

export default Laptop;
