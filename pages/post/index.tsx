import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { IPost } from '../../components/post-card/postCard'
import CommentCard, { IComment } from '../../components/comment-card/commentCard';

import styles from './Post.module.scss'

export default function Post() {
    const router = useRouter();
    const [postId, setPostId] = useState(router.query.postId);
    const [post, setPost] = useState<IPost>();
    const [comments, setComments] = useState<IComment[]>([]);

    async function loadPost() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(data => {
                setPost(data);
            }).catch((err) => {
                /**
                 * Em caso de erro é disparadas essa exceção no terminal
                 */
                console.error('Falha ao buscar dados do Post')
            });
    }

    async function loadComments() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(data => {
                setComments(data);
            }).catch((err) => {
                /**
                 * Em caso de erro é disparadas essa exceção no terminal
                 */
                console.error('Falha ao buscar comentários')
            });
    }

    async function loadPostData() {
        await loadPost();
        await loadComments();
    }
    useEffect(() => {
        loadPostData();
    }, [])



    return (
        <div className={styles.postPageContainer}>
            <section>

            <h1>{post  ? post.title : 'Erro'}</h1>
            <div>
                <p>{ post?.body }</p>
            </div>
            </section>
            <section className={styles.postSection}>
                <h3>
                   Comentários 
                </h3>
                <div>
                    {
                        comments.map((item, key) => {
                            return (
                                <CommentCard {...item} key={key} />
                            );
                        })
                    }
                </div>
            </section>
        </div>
    )
}
