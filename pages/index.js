import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getPosts } from '../src/posts'
import Link from 'next/link'
import BlogHeader from '../src/components/organisms/BlogHeader'
import { ThemeProvider } from '@theme-ui/core'
import theme from '../src/theme'

export async function getStaticProps(context) {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts }
  };
};

const PostList = (props) => (
    <ThemeProvider theme={theme}>
      <BlogHeader />
      <ul>
        {props.posts.map(post => (
          <li key={post.id}>
            <Link href={`/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </ThemeProvider>
);

export default PostList;
