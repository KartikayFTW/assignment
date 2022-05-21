import React from 'react';
import pic from "../Image/picture.png"
import styles from "./styles/Picture.module.scss"

const Picture = () => {
  return (
    <div className={styles.pic}>
        <img src={pic} alt="" className={styles.pic__image} />
        <div className={styles.pic__date}>
            <h3 className={styles.pic__date__heading}>Choose a date range </h3>
            <p className={styles.pic__date__description}>
                Lorem ipsum dolor sit amet consectetur adipisicing  elit. Quidem minus 
            </p>
        </div>
    </div>
  )
}

export default Picture