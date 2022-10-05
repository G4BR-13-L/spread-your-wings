import Router from 'next/router'
import React from 'react'
import styles from './commentCard.module.scss'

export interface IComment {
    id: number,
    name: string,
    email: string,
    body: string,
}


export default function CommentCard(props: IComment) {

    function redirectToUserProfilePage(userId: number) {
        Router.push({
            pathname: '/user-profile/',
            query: { userId: userId }
        })
    }
    return (

        <div className={styles.postCommentCardContainer} 
        onClick={() => redirectToUserProfilePage(props.id)}
        >
            <div className={styles.imageContainer}>
                <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_568656.png&f=1&nofb=1&ipt=bed8e4960925d9c07fd2f757722b5df761bb495dfd69c4c3f74e63ec383ce71b&ipo=images" alt="" />
            </div>
            <div>
                <h4>{props.name}</h4>
                <p>{props.body}</p>
            </div>
        </div>

    )
}
