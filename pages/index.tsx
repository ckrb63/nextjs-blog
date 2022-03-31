import type { NextPage } from 'next';
import Head from 'next/head';
import { Post } from '../components/post/PostCard';
import PostCard from '../components/post/PostCard';
import styles from '../styles/Home.module.css';


interface Props {
  posts: Post[]
};

const DUMMY_POSTS: Post[] = [{
  title: 'post',
  id: 'p1',
  description: 'some sentence',
  image: 'http://imgdev.gettimeblocks.com/ct/425/16028130608_o.jpeg',
}];

const Home: NextPage<Props> = (props: { posts: Post[] }) => {
  const context = props.posts.map((post) => {
    return <PostCard post={post} key={post.id} />
  });
  return (
    <div className='mainpage'>
      <Head>
        <title>BLOGYU</title>
        <meta name="description" content="Gyu's Tech&Develop Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='mainpage-postlist'>
        {context}
      </div>
    </div>
  );
}

export function getStaticProps() {
  //fetch data
  return {
    props: {
      posts: DUMMY_POSTS
    }
  }
};

export default Home;
