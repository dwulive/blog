import Head from 'next/head';
import { generateRSS } from '../rssUtil';
import { Markdown } from '../components/Markdown';
import { PostData, loadBlogPosts, loadMarkdownFile } from '../loader';
import { PostCard } from '../components/PostCard';

const Home = (props: {
  introduction: string;
  features: string;
  readme: string;
  posts: PostData[];
}) => {
  return (
    <div className="content">
      <Head>
        <title>Jeans Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="introduction">
        <h1>Welcome</h1>
        <Markdown source={props.introduction} />
      </div>
   

      <div className="section">
        <h2>My blog posts</h2>
        <p>
          This section demonstrates the power of dynamic imports. Every Markdown
          file under <code>/md/blog</code> is automatically parsed into a
          structured TypeScript object and available in the{' '}
          <code>props.posts</code> array. These blog post "cards" are
          implemented in the
          <code>/components/PostCard.tsx</code> component.
        </p>
        <div className="post-card-container">
          {props.posts.map((post, j) => {
            return <PostCard post={post} key={j} />;
          })}
        </div>
      </div>

      <div className="section">
        <h2>Testimonials</h2>
        <blockquote>
          <p>
            <em>I like it.</em>
          </p>
          <p>
            — Avatar
          </p>
        </blockquote>
      </div>

     
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const introduction = await loadMarkdownFile('introduction.md');
  const readmeFile = await import(`../${'README.md'}`);
  const readme = readmeFile.default;
  const posts = await loadBlogPosts();

  // comment out to turn off RSS generation during build step.
  await generateRSS(posts);

  const props = {
    introduction: introduction.contents,
    readme: readme,
    posts: posts,
  };

  return { props };
};
