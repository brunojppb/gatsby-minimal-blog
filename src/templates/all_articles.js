import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default function AllArticles({pageContext: {articles}}) {

  return (
    <Layout>
    <div className="article-list">
      {
        articles.map(article => (
          <div key={article.uuid}>
            <Link to={`/article/${article.slug}`}>{article.content.title}</Link>
          </div>
        ))
      }
    </div>
    </Layout>
  );

}