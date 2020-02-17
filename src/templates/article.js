import React from 'react';
import Layout from '../components/layout';

export default function Article({pageContext: {article}}) {
  const {title, long_text} = article.content;
  return(
    <Layout>
      <div className="article">
      <h1>{title}</h1>
      {/** Make sure this HTML is sanitized to avoid XSS attacks */}
      {/** You need to sanitize this HTML first */}
      <div className="article-content" dangerouslySetInnerHTML={{__html: long_text}}/>
    </div>
    </Layout>
  );

}