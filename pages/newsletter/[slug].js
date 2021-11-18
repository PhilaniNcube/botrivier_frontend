import React from 'react';
import { API_URL } from '../../config';
import MarkdownIt from 'markdown-it';

const Newsletter = ({ newsletter }) => {
  const md = new MarkdownIt();

  const htmlContent = md.render(newsletter.newsletter_body);

  console.log(newsletter);
  return (
    <div className="max-w-7xl mx-auto py-6">
      <div
        className="text-gray-700"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      ></div>
    </div>
  );
};

export default Newsletter;

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/newsletters?slug=${slug}`);
  const newsletters = await res.json();

  return {
    props: {
      newsletter: newsletters[0],
    },
  };
}
