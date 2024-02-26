import styles from './CardWrapper.module.scss';
import myHome from '../../assets/images/myhome.svg';
import { useState } from 'react';
import { useEffect } from 'react';

// import image from '../../assets/images/the-air-filter-company.svg'

const CardWrapper = ({ company }) => {
    
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        const loadImage = async () => {
            try {
                const dynamicImage = await /* @vite-ignore */ import(`../../assets/images/${company.logo}`);
                setImageSrc(dynamicImage.default);
            } catch (error) {
                console.error('Error loading image:', error);
            }
        };

        loadImage();
    }, [company.logo]);

    return (
        <figure className={styles.figureJobCard}>
            {imageSrc && <img src={imageSrc} alt='company svg' width={70} height={70} />}

            
            {/* Wrapper job description and technologies tab */}
            <aside className={styles.secondatyWrapper}>

                {/* Wrapper for detials */}
                <article className={styles.detailsWrapper}>
                    <div className={styles.wrapperTitle}>
                        <p className={styles.companyTitle}>{ company.company }</p>
                        { company.new && <p className={styles.companyNew}>NEW</p> }
                        { company.featured && <p className={styles.companyTag}>FEATURED</p> }
                    </div>

                    {/* Ohters */}
                </article>

                {/* Wrapper for the technologies */}
                <article className={styles.texhnologiesWrapper}>
                    <p>Technologies</p>
                    <p>Technologies</p>
                    <p>Technologies</p>
                </article>
            </aside>
        </figure>
    )
};

export default CardWrapper;