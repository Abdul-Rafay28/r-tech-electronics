import img1 from '../../assets/images/gamingSetup-6.jpg';
import img2 from '../../assets/images/screen-5.jpg';
import img3 from '../../assets/images/system-4.jpg';
import img4 from '../../assets/images/motherBord.jpg';
import img5 from '../../assets/images/screen-5.jpg';
import img6 from '../../assets/images/gamingSetup-6.jpg';

import { useEffect, useState } from 'react';
import styles from './HeroSlider.module.css';

function HeroSlider() {

    const [activeIndex, setActiveIndex] = useState(0);

    const images = [img1, img2, img3, img4, img5, img6];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.sliderContainer}>
            
            {/* ONLY ONE WRAPPER — IMPORTANT */}
            <div className={styles.sliderWrapper}>
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt="slide"
                        className={`${styles.slideImage} ${activeIndex === index ? styles.active : ""}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default HeroSlider;
