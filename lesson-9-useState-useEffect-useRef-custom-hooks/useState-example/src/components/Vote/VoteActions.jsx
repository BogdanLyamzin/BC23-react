import styles from "./vote.module.scss";

const VoteActions = ({leaveVote}) => {
    return (
        <>
            <div className={styles.element}>
                <button onClick={()=> leaveVote("democrate")}>За демократов</button>
            </div>
            <div className={styles.element}>
                <button onClick={()=> leaveVote("republic")}>За республиканцев</button>
            </div>
        </>
    )
}

export default VoteActions;