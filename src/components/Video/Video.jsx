import React from 'react'

import styles from './Video.module.css';


const Video = () => {
  return (
    <div className={styles.videoContainer}>

        <img src="/assets/images/video-img.jpg" className={styles.backgroundImage}  alt="Video Background" />
        <div className={styles.title}>
            <h4 className={styles.subtitle}><span>|</span> Video</h4>
        <h1 className={styles.titleText}>Get Closer View & Different Feeling</h1>
        <img src="/assets/images/video-frame.jpg"className={styles.frameImage}  alt="" />
        <img src="/assets/images/info-icon-03.png"className={styles.frameImageIcon}  alt="" />

    </div>
    </div>
  )
}

export default Video