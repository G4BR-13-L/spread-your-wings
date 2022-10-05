import '../sass/globals.scss'
import type { AppProps } from 'next/app'
import { createContext, useState } from 'react';
import { IPost } from '../components/post-card/postCard';
import { IUser } from './user-profile';
import { IComment } from '../components/comment-card/commentCard';
import { PostContext } from '../context/PostContext';


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
