import styles from "./vote.module.scss";

const VoteResults = ({total, democrate, republic, democratePercent, republicPercent}) => {
    return (
        <>
            <div className={styles.element}>
                За демократов: 
                <ul>
                    <li>Всего: {democrate}</li>
                    <li>В процентах: {democratePercent}%</li>
                </ul>
                
            </div>
            <div className={styles.element}>
                За республиканцев: 
                <ul>
                    <li>Всего: {republic}</li>
                    <li>В процентах: {republicPercent}%</li>
                </ul>
            </div>
            <div className={styles.element}>
                Всего: {total} проголосовавших
            </div>    
        </>
    )
}

export default VoteResults;