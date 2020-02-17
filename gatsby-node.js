const axios = require('axios');
const marked = require('marked');

exports.createPages = async({actions: {createPage}}) => {

  const url = `https://api.storyblok.com/v1/cdn/stories`;
  const articles = await axios.get(url, { 
    params: {
      token: process.env.CMS_API_TOKEN,
      'space.version': new Date().getTime(),
    } 
  });

  // Create articles list page
  createPage({
    path: '/articles',
    component: require.resolve('./src/templates/all_articles.js'),
    context: {
      articles: articles.data.stories
    }
  });

  // create each individual article page
  articles.data.stories.forEach(article => {
    createPage({
      path: `/article/${article.slug}/`,
      component: require.resolve("./src/templates/article.js"),
      context: { 
        article: {
          ...article,
          content: {
            ...article.content,
            // Don't do this at home :)
            // You need to sanitize this HTML first
            long_text: marked(article.content.long_text)
          }
        }
       },
    })
  })

}