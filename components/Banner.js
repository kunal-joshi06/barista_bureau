import styles from "../styles/Banner.module.css";
const Banner =(props)=>{
return(
    <div className={styles.container}>
    <h1 className={styles.title}>
        <span className={styles.title1}>Barista </span><span className={styles.title2}>Bureau</span>
    </h1>
    <p className={styles.subTitle}>Find your perfect Cafes and Baristas!</p>
    <div className={styles.buttonWrapper}><button className={styles.button} onClick={props.handleOnClick}>{props.buttonText}</button></div>
    </div>


)}
export default Banner;