import styles from './CardWrapper.module.scss';
import myHome from '../../assets/images/myhome.svg';


const CardWrapper = ({ company }) => {

    return (
        <figure className={styles.figureJobCard}>
            <img src={myHome} alt='company svg' width={70} height={70} />
            
            {/* Wrapper job description and technologies tab */}
            <aside className={styles.secondatyWrapper}>

                {/* Wrapper for detials */}
                <article className={styles.detailsWrapper}>
                    <div className={styles.wrapperTitle}>
                        <p className={styles.companyTitle}>{ company.company }</p>
                        <p className={styles.companyNew}>{ company.new ? 'NEW!' : '' }</p>
                        <p className={styles.companyTag}>{ company.featured ? 'FEATURED' : '' }</p>
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