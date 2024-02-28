


const FilterTab = ({ setContent, removeElements }) => {
    

    

    return (
        setContent?.length > 0 && 
        
        <section>
            { setContent?.map((items, index) => (
                <p 
                    onClick={() => console.log(items)}
                    key={index} >{ items }</p>
            )) }
        </section>
    )
};

export default FilterTab;