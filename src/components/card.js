import { useState, useEffect } from "react";
import styles from './cardStyles.module.css'
import dayjs from "dayjs";
export default function Card({userNew}) {
    
 console.log(userNew)


    return(
        <div className={styles.card_container}>
            <div className={styles.card}>
                {/* Card header */}
                <div className={styles.card_header}>
                    <div className={styles.card_header_img_container}>
                        <img src={userNew.avatar_url}/>
                    </div>
                    <div className={styles.card_header_info_container}>
                        
                        <h4>{userNew.name}</h4>
                        <p className={styles.card_header_user}>@{userNew.login}</p>
                        <p>Joined {dayjs(userNew.created_at).format('DD  MMM YYYY')}</p>
                    </div>   
                </div>

                {/* Card description */}
                <div>
                    <p>{userNew.bio}</p>
                </div>

                {/* Card Info/stats */}
                <div className={styles.card_stats_container}>
                    <div>
                        <p>Repos</p>
                        <h4>{userNew.public_repos}</h4>
                    </div>
                    <div>
                        <p>Followers</p>
                        <h4>{userNew.followers}</h4>
                    </div>
                    <div>
                        <p>Following</p>
                        <h4>{userNew.following}</h4>
                    </div>
                </div>

                {/* Card info/location */}
                <div className={styles.info_container}>
                    <div>
                        <div>
                            <i class='bx bxs-location-plus'></i>
                            <h4>{userNew.location}</h4>
                        </div>
                        <div>
                            <i class='bx bx-link' ></i>
                            <a href={userNew.html_url}>{userNew.html_url}</a>
                        </div>
                    </div>
                    <div>
                    <div>
                            <i class='bx bxl-twitter' ></i>
                            <h4>{userNew.twitter_username}</h4>
                        </div>
                        <div>
                            <i class='bx bxs-business' ></i>
                            <a href={userNew.organizations_url}>{userNew.organizations_url}</a>
                        </div>
                    </div>
                </div>
                
            
            </div>

        </div>
    )
}