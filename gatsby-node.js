const path = require("path");

const CardSet = require('./content/artifactCardSet01')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const card = path.resolve(`src/templates/card.js`);

  CardSet.card_set.card_list.forEach(card => {
    createPage({
      path: `/${card.card_name.english.toLowerCase().replace(/ /g,'-')}`,
      component: __dirname + '/src/templates/card.jsx',
      context: {card},
    })
  })
}
