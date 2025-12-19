import styles from './motherBoard.module.css';
import motherBoard from './productImages/motherBanner.jpg';
import mBoard1 from './productImages/motherBoard5.jpg';
import mBoard2 from './productImages/motherBoard6.jpg';
import mBoard3 from './productImages/motherBoard7.jpg';
import mBoard4 from './productImages/motherBoard8.jpg';
import mBoard5 from './productImages/motherBoard9.jpg';
import mBoard6 from './productImages/motherBoard10.jpg';
import mBoard7 from './productImages/motherB1.jpg';
import mBoard8 from './productImages/motherB2.jpg';
import mBoard9 from './productImages/motherB3.jpg';
import mBoard10 from './productImages/motherB4.jpg';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

function MotherBoards() {

    const mBoardProducts = [
        {
            title: 'MEG X870E GODLIKE X EDITION',
            emailTitle: 'R-TECH MEG X870E GODLIKE X Edition Motherboard',
            img: mBoard1
        },
        {
            title: 'B850M POWER',
            emailTitle: 'R-TECH B850M POWER Motherboard',
            img: mBoard2
        },
        {
            title: 'PRO B840-S EVO WIFIGE',
            emailTitle: 'R-TECH PRO B840-S EVO WiFi Motherboard',
            img: mBoard3
        },
        {
            title: 'MEG Z590 GODLIKE',
            emailTitle: 'R-TECH MEG Z590 GODLIKE Motherboard',
            img: mBoard4
        },
        {
            title: 'MPG Z390 CARBON EK X',
            emailTitle: 'R-TECH MPG Z390 CARBON EK X Motherboard',
            img: mBoard5
        },
        {
            title: 'MEG Z590 ACE GOLD EDITION',
            emailTitle: 'R-TECH MEG Z590 ACE Gold Edition Motherboard',
            img: mBoard6
        },
    ];

    const mBoardHOt = [
        {
            image: mBoard7,
            title: "R-TECH CROSSHAIR X870E HERO BTF",
            emailTitle: "R-TECH Crosshair X870E HERO BTF Gaming Motherboard",
            spec: [
                "AMD X870E (AM5 Socket) ATX motherboard",
                "Hidden-connector design for clean cable management",
                "Graphics card high-power slot for next-gen GPUs",
                "18+2+2 power stages",
                "DDR5 slots with AEMP & NitroPath DRAM Technology",
                "WiFi 7 with ASUS WiFi Q-Antenna",
                "Five M.2 slots onboard",
                "PCIe 5.0 x16 SafeSlot with PCIe Slot Q-Release Slim",
            ]
        },

        {
            image: mBoard8,
            title: "R-TECH STRIX X870E-H GAMING WIFI7",
            emailTitle: "R-TECH Strix X870E-H Gaming WiFi 7 Motherboard",
            spec: [
                "AMD X870E-H ATX motherboard",
                "16+2+1 power stages",
                "Dynamic OC Switcher & Core Flex",
                "DDR5 slots with AEMP",
                "WiFi 7 with ASUS WiFi Q-Antenna",
                "Four M.2 slots",
                "USB4 ports",
                "USB 10Gbps Type-C with up to 30W PD/PPS Fast-charge",
                "PCIe 5.0 x16 SafeSlots with PCIe Slot Q-Release",
                "ASUS AI Advisor, AI Cache Boost, AI Networking II, AI Cooling II"
            ]
        },

        {
            image: mBoard9,
            title: "R-TECH STRIX X870E-H GAMING WIFI7 HATSUNE MIKU EDITION",
            emailTitle: "R-TECH Strix X870E-H Gaming WiFi 7 Hatsune Miku Edition Motherboard",
            spec: [
                "AMD X870E-H ATX motherboard",
                "Hatsune Miku Edition design",
                "16+2+1 power stages",
                "DDR5 slots",
                "Four M.2 slots with M.2 Q-Release",
                "PCIe 5.0 support",
                "WiFi 7",
                "Two USB4 ports",
                "USB 10Gbps Type-C with up to 30W PD/PPS Fast-charge",
                "Aura Sync RGB lighting"
            ]
        },

        {
            image: mBoard10,
            title: "R-TECH STRIX B850-I GAMING WIFI7 HERO BTFW",
            emailTitle: "R-TECH Strix B850-I Gaming WiFi 7 HERO BTF White Motherboard",
            spec: [
                "AMD B850 Mini-ITX motherboard",
                "White motherboard design",
                "10+2+1 power stages",
                "64MB ROM BIOS",
                "DDR5 slots with AEMP",
                "WiFi 7 with ASUS WiFi Q-Antenna",
                "Two M.2 slots",
                "PCIe 5.0 x16 SafeSlot with PCIe Slot Q-Release Slim",
                "USB 20Gbps Type-C",
                "AI Cache Boost, AI Advisor, AI Overclocking, AI Networking II, Aura Sync RGB"
            ]
        }
    ];


    return (
        <>
            <div className={styles.mBoardWrapper}>
                <div className={styles.mBoardBanner}>
                    <img src={motherBoard} alt="MBoardImage" />
                </div>
            </div>

            <div className={styles.mBoardProducts}>
                <h1>MOTHERBOARDS</h1>
                <div className={styles.mBoardItem}>
                    {
                        mBoardProducts.map((mBoard, index) => (
                            <div key={index} className={styles.mBoardImage}>
                                <img src={mBoard.img} alt="" />
                                <p>{mBoard.title}</p>
                                <Link to={`/contact?product=${encodeURIComponent(mBoard.emailTitle)}`}>Go a Quote</Link>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className={styles.mBoardHotC}>
                <h1>HOT PRODUCTS</h1>

                <div className={styles.mBoardHot}>
                    {
                        mBoardHOt.map((hotProduct, index) => (
                            <div key={index} className={styles.mBoardHOtProduct}>
                                <img src={hotProduct.image} alt="motherBoardImage" />
                                <h4>{hotProduct.title}</h4>
                                {hotProduct.spec.map((spec, index) => (
                                    <p>{spec}</p>
                                ))}
                                <Link to={`/contact?product=${encodeURIComponent(hotProduct.emailTitle)}`}>Go a Quote</Link>
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

export default MotherBoards;