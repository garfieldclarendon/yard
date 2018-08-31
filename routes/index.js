const express = require('express');
require('es6-promise').polyfill();
require('isomorphic-fetch');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Template' });
});
router.get('/routes', function(req, res, next) {
  res.render('index', { title: 'Template' });
});
router.get('/routes/add', function(req, res, next) {
  res.render('index', { title: 'Template' });
});
router.get('/routes/view/:routeID', function(req, res, next) {
  res.render('index', { title: 'Template' });
});

router.get('/routesJSON', (req, res) => {
  fetch('http://apitest2.entrydns.org:8080/api/route_list', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
  })
  .then((response) => response.json())
  .then((routes) => {
    res.json(routes);
  })
  .catch(err => res.json({error: 'Unable to reach server'}));
});

router.get('/routeJSON/:routeID', (req, res) => {
  fetch(`http://apitest2.entrydns.org:8080/api/route_entry_list?routeID=${req.params.routeID}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
  })
  .then((response) => response.json())
  .then((route) => {
    res.json(route);
  })
  .catch(err => res.json({error: 'Unable to reach server'}));
});

router.post('/route/add', async (req, res) => {
  const response = await fetch('http://APITest2.entrydns.org:8080/api/entity/route', {
    method: 'POST',
    body: JSON.stringify(req.body),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': JSON.stringify(req.body).length
    }
  });
  const json = await response.json();
  await res.json(json);
});

router.get('/entityJSON/:entityType/:entityID', (req, res) => {
  fetch(`http://apitest2.entrydns.org:8080/api/entity/${req.params.entityType}?id=${req.params.entityID}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
  })
  .then((response) => response.json())
  .then((entity) => {
    res.json(entity);
  })
  .catch(err => res.json({error: 'Unable to reach server'}));
});

module.exports = router;
