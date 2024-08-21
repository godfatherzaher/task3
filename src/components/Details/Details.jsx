import Detail from "../Detail/Detail"
import styles from './Details.module.css';


const Details = () => {
  return (
    <div className={styles.detailsContainer}>
    <Detail number="34" text="buildings  finished now" />
    <Detail number="12" text="years experience" />
    <Detail number="24" text="awwards won 2023" />
    </div>
  )
}

export default Details