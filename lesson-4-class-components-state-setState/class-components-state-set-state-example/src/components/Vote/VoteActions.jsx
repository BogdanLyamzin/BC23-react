import styles from "./vote.module.scss";

const VoteActions = ({leaveVote}) => {
    return (
        <>
            <div className={styles.element}>
                <button onClick={()=> leaveVote("democrate")}>За демократов</button>
                {/* <button name="democrate" onClick={leaveVote}>За демократов</button> */}
            </div>
            <div className={styles.element}>
                <button onClick={()=> leaveVote("republic")}>За республиканцев</button>
                {/* <button name="republic" onClick={leaveVote}>За республиканцев</button> */}
            </div>
        </>
    )
}

export default VoteActions;