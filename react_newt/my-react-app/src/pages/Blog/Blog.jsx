import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog" id="blog">
      <h1>Blog</h1>
      <p>Here are some of my blog posts:</p>
      <div className="blog-cards">
        <div className="card">
          <h3>How to develope a good website?</h3>
          <p>Step to follow: Good Planning, Good Design, Good Development, Good Testing, Good Deployment, Good Maintenance</p>
        </div>
        <div className="card">
          <h3>How to rank a good website in awwwards?</h3>
          <p>register in awwwards, go to the page of your website, click on the button to vote for your website, share the link with your friends and family, </p>
        </div>
        <div className="card">
          <h3>How to increase traffic on a good website?</h3>
          <p> SEO, Social Media Marketing, Content Marketing, Email Marketing, Influencer Marketing, Paid Advertising</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
