import styles from './ProductSection.module.css';

import laptop from '../../assets/productImages/laptop.jpg';
import motherBoard from '../../assets/productImages/motherBoard.jpg';
import graphicCard from '../../assets/productImages/graphicCard.jpg';
import moniter from '../../assets/productImages/monitorScreen.jpg';
import collingFan from '../../assets/productImages/collingFan.jpg';
import desktop from '../../assets/productImages/desktop.jpg';
import powerSupply from '../../assets/productImages/powerSupply.jpg';
import networking from '../../assets/productImages/networking.jpg';
import keyboard from '../../assets/productImages/keyboard.jpg';
import mouse from '../../assets/productImages/mouse.jpg';
import headPhone from '../../assets/productImages/headphone.jpg';
import gamingCasing from '../../assets/productImages/systemCases.jpg';
import chair from '../../assets/productImages/gamingChair.jpg';
import controller from '../../assets/productImages/controllersGaming.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ProductSection() {

    const productsData = [
        { title: 'Laptops', img: laptop },
        { title: 'Motherboards', img: motherBoard },
        { title: 'Graphics Cards', img: graphicCard },
        { title: 'Monitors', img: moniter },
        { title: 'Phones', img: controller },   // Example for your screenshot
        { title: 'Cooling Fans', img: collingFan },
        { title: 'Desktops', img: desktop },
        { title: 'Power Supply Units', img: powerSupply },
        { title: 'Networking', img: networking },
        { title: 'Keyboards', img: keyboard },
        { title: 'Mouse', img: mouse },
        { title: 'Headsets', img: headPhone },
        { title: 'Cases', img: gamingCasing },
        { title: 'Chairs', img: chair },
    ];

    return (
        <>
            <div className={styles.sliderWrapper}>
                <h1 className={styles.heading}>EXPLORE OUR PRODUCTS</h1>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    loop={true}
                    grabCursor={true}
                    spaceBetween={40}                // GAP BETWEEN SLIDES
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    pagination={{ clickable: true }}
                    slidesPerView={5}               // SHOW 5 ITEMS
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        600: { slidesPerView: 2 },
                        900: { slidesPerView: 3 },
                        1200: { slidesPerView: 5 }
                    }}
                    className={styles.mySwiper}
                >
                    {productsData.map((product, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.card}>
                                <img src={product.img} className={styles.cardImg} />
                                <p className={styles.cardTitle}>{product.title}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default ProductSection;
