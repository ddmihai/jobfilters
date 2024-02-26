import CardWrapper from '../CardWrapper/CardWrapper';
import styles from './MainWrapper.module.scss';

// Data import
import jobs from '../../assets/data/data.json';


const MainWrapper = () => {
    return (
      <section className={styles.mainWrapper}>
        {
            jobs?.map((item, index) => (
                <CardWrapper key={index} company={item} />
            ))
        }
      </section>
    )
};


export default MainWrapper;