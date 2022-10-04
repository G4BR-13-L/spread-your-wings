import Router from 'next/router'
import React from 'react'
import styles from './postCard.module.scss'

export interface IPost {
    userId: number,
    id: number,
    title: string
    body: string
}



export default function PostCard(props: IPost) {

    function redirectToPostPage(postId: string) {
        Router.push({
            pathname: '/post/',
            query: { postId: postId }
        })
    }
    return (

        <div className={styles.postCardContainer} onClick={() => redirectToPostPage(props.id)}>
            <h4>{props.title}</h4>
            <p>{props.body.split(" ").splice(0, 5).join(" ")}...</p>
        </div>

    )
}
