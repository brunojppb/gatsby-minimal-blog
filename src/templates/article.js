import React from 'react';
import Layout from '../components/layout';

export default function Article({pageContext: {article}}) {

  return(
    <Layout>
      <div className="article">
      <h1>{article.content.title}</h1>
      <div className="article-content" dangerouslySetInnerHTML={{__html: article.content.long_text}}/>
    </div>
    </Layout>
  );

}