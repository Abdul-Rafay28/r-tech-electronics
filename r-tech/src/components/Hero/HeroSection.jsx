import styles from './HeroSection.module.css';
import HeroSlider from './HeroSlider';
function HeroSection() {

    return (
        <>
            <div className={styles.heroSection}>

                <div className={styles.heroLeft}>
                    <h1>Powering The Future of Gaming</h1>
                    <p>Advanced GPUs, PCs & neon-tech design.</p>
                </div>

                <div className={styles.heroRight}>
                    <HeroSlider />
                </div>
            </div>
        </>
    )
}

export default HeroSection;