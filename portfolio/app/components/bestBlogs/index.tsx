import { BestBlogStyles } from "./styles/bestBlogStyles";

const BestBlogs = () => {
  return (
    <BestBlogStyles>
      <h4 id="best-blog-title">Understand Software Better</h4>
      <div className="favourite-blogs">
        <a
          href="https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/"
          target="_blank"
          className="fav-blog"
        >
          Complete Guide to React Rendering Behavior
        </a>
        <a
          href="https://www.youtube.com/watch?si=ftWQT8s6dcazyNqR&v=3X93PnKRNUo&feature=youtu.be"
          target="_blank"
          className="fav-blog"
        >
          How asynchronous / concurrency works
        </a>
        <a
          href="https://samwho.dev/memory-allocation/"
          target="_blank"
          className="fav-blog"
        >
          How Memory Allocation works with simulations
        </a>
        <a
          href="https://planetscale.com/blog/btrees-and-database-indexes#how-mysql-uses-b-trees"
          target="_blank"
          className="fav-blog"
        >
          B-trees and database indexes with Simulation
        </a>

        <a
          href="https://www.youtube.com/watch?si=NdfwVjjgwy6cAKDD&v=Zd5hsL-JNY4&feature=youtu.be"
          target="_blank"
          className="fav-blog"
        >
          How AWS VPC works at a packet level
        </a>
        <a
          href="https://www.youtube.com/watch?si=CM5fzciugRnrmntW&v=8gc2DgBqo9U&feature=youtu.be"
          target="_blank"
          className="fav-blog"
        >
          How AWS VPC works at a service level
        </a>

        <a
          href="https://www.youtube.com/watch?si=M3tetQ_gM8Q2qmHL&v=-wMU8vmfaYo&feature=youtu.be"
          target="_blank"
          className="fav-blog"
        >
          DNS and Networking: Facebook Outage
        </a>
        <a
          href="https://www.youtube.com/watch?v=tPr1AgGkvc4"
          target="_blank"
          className="fav-blog"
        >
          How AWS authenticates 500 million requests per second
        </a>
        <a
          href="http://jalammar.github.io/illustrated-transformer/"
          target="_blank"
          className="fav-blog"
        >
          The Illustrated Transformer with Math
        </a>
      </div>
    </BestBlogStyles>
  );
};

export default BestBlogs;
