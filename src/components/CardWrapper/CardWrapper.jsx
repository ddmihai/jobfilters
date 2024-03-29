import styles from './CardWrapper.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';

// import image from '../../assets/images/the-air-filter-company.svg'

const CardWrapper = ({ company, setConditions }) => {
    
    const [imageSrc, setImageSrc] = useState(null);


    // Map over technologies
    const mapOvertechnologies = (array) => {
        return array?.map((company, index) => <p 
        onClick={() => setConditions(conditions => [...conditions, company])}
        key={index}>{ company }</p>);
    }

    // map ovet the texh and languages props
    const renderedTechnologies  = mapOvertechnologies(company.languages, 'languages');
    const renderedTools         = mapOvertechnologies(company.tools, 'tools');


    /**
     *      Load Images dynamically
    //  *          
    */
    useEffect(() => {
        const loadImage = async () => {
            try {
                const baseUrl = import.meta.env.BASE_URL; // Get the base URL from Vite
                const imagePath = `${baseUrl}assets/images/${company.logo}`;
                const response = await fetch(imagePath);
                if (response.ok) {
                    setImageSrc(imagePath);
                } else {
                    throw new Error('Failed to load image');
                }
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
                    <div className={styles.positionDetails}>
                        <p className={styles.companyPositionTitle}>{ company.position }</p>
                        <ul>
                            <li>{ company.postedAt }</li>
                            <li>{ company.contract }</li>
                            <li>{ company.location }</li>
                        </ul>
                    </div>
                </article>

                {/* Wrapper for the technologies */}
                <article className={styles.texhnologiesWrapper}>
                    { renderedTechnologies }
                    { renderedTools }
                    <p onClick={() => setConditions(conditions => [...conditions, company.role])}>{ company.role }</p>
                    <p onClick={() => setConditions(conditions => [...conditions, company.level])}>{ company.level }</p>
                </article>
            </aside>
        </figure>
    )
};

export default CardWrapper;