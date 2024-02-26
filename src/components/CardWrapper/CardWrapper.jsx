import styles from './CardWrapper.module.scss';
import myHome from '../../assets/images/myhome.svg';


const CardWrapper = ({ company }) => {
    const pathToAsset = '../../assets/';
    console.log(`${pathToAsset}${company.logo}`)

    return (
        <figure className={styles.figureJobCard}>
            <img src={`http://localhost:5173/assets/images/the-air-filter-company.svg`} alt='company svg' width={70} height={70} /> 
            
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