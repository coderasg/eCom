'use strict';

const { readFile } = require('fs').promises;
const { resolve } = require('path');
const express = require('express');
const cors = require('cors');

(async () => {
  const [items, categories] = (
    await Promise.all(['items', 'categories'].map((type) => readFile(resolve(`json/${type}.json`), 'utf-8')))
  ).map(JSON.parse);
  const port = 8000;
  const app = express();

  for (const id of Object.keys(items.data)) {
    items.data[id].image = `http://localhost:${port}/${items.data[id].image}`;
  }

  app.use(cors());

  app.get('/items', (req, res) => {
    
    /**
     * Filter Items Based on the Category and Search
     * Search will Match to Title or Description any of these three 
     */
    const category = req.query.category;
    const searchStr = req.query.searchStr?.trim().toLowerCase();

   
    if (category || searchStr) {
      const filterItems = items.data.filter((item) => {
        if (category && searchStr) {
          return item.category_id === Number(category) && (item.name.toLowerCase().includes(searchStr) ||  item.description.toLowerCase().includes(searchStr));
        } else if (category) {
          return item.category_id === Number(category);
        } else if (searchStr) {
          return (item.name.toLowerCase().includes(searchStr) ||  item.description.toLowerCase().includes(searchStr));
        }
      });
      return res.send({ 'data': filterItems, total: Array.isArray(filterItems.data) && filterItems.data.length || 0, });
    }

    return res.send({...items, total: Array.isArray(items.data) && items.data.length || 0 });
  });

  app.get('/items/:id', (req, res) => {
    const { id } = req.params;
    const item = items.data.find((item) => item.id === Number(id));

    if (!item) {
      return res.status(404).send('Not found');
    }
    return res.send(item);
  });

  app.get('/categories', (req, res) => {
    return res.send(categories);
  });

  app.use('/images', express.static(resolve('static/images')));

  app.use((err, req, res, next) => {
    console.error(err.stack);
    return res.status(500).send('Internal Server Error');
  });

  app.listen(port);
  console.log(`serving on http://localhost:${port} ...`);
})();

process.on('unhandledRejection', (reason, promise) => {
  console.warn(reason);
  process.exit(1);
});

process.on('uncaughtException', (err) => {
  console.error(err);
  process.exit(1);
});
