import CardWrapper from '../CardWrapper/CardWrapper';
import styles from './MainWrapper.module.scss';

// Data import
import jobs from '../../assets/data/data.json';
import { useEffect, useState } from 'react';
import FilterTab from '../FilterTab/FilterTab';

const MainWrapper = () => {

  const [ arrayConditions, setArrayConditions ] = useState([]);

  // Set content => The content where duplicates are removed
  const [ setContent, setSetContent ] = useState(null);


  useEffect(() => {
    setSetContent([...new Set(arrayConditions)]);
  }, [arrayConditions]);



  return (
    <section className={styles.mainWrapper}>
      <FilterTab setContent={setContent} />

      {
          jobs?.map((item, index) => (
              <CardWrapper key={index} company={item} setConditions={setArrayConditions} />
          ))
      }
    </section>
  )
};


export default MainWrapper;