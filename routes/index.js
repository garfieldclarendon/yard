const express = require('express');
require('es6-promise').polyfill();
require('isomorphic-fetch');

const router = express.Router();
const serverAddress = "http://apitest2.entrydns.org:8080";
// const serverAddress = "http://10.206.1.252:8080";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'LCS' });
});
router.get('/configure', function(req, res, next) {
  res.render('index', { title: 'Collections' });
});
router.get('/configure/routes', function(req, res, next) {
  res.render('index', { title: 'Routes' });
});
router.get('/configure/routes/add', function(req, res, next) {
  res.render('index', { title: 'Routes: Add' });
});
router.get('/configure/routes/view/:routeID', function(req, res, next) {
  res.render('index', { title: 'Routes: Detail' });
});

router.get('/configure/turnouts', function(req, res, next) {
  res.render('index', { title: 'Turnouts' });
});

router.get('/configure/signals', function(req, res, next) {
  res.render('index', { title: 'Signals' });
});

router.get('/configure/collections', function(req, res, next) {
  res.render('index', { title: 'Signals' });
});

router.get('/run', function(req, res, next) {
  res.render('index', { title: 'Boards' });
});

router.get('/run/boards', function(req, res, next) {
  res.render('index', { title: 'Boards' });
});

router.get('/run/boards/view/:boardID', function(req, res, next) {
  res.render('index', { title: 'Routes: Detail' });
});

router.get('/help', function(req, res, next) {
  res.render('index', { title: 'Help' });
});

router.get('/routesJSON', (req, res) => {
  fetch(`${serverAddress}/api/route_list`, {
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
  fetch(`${serverAddress}/api/route_entry_list?routeID=${req.params.routeID}`, {
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
  const response = await fetch(`${serverAddress}/api/entity/route`, {
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

router.get('/devices', (req, res) => {
  fetch(`${serverAddress}/api/device_list`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
  })
  .then((response) => response.json())
  .then((devices) => {
    res.json(devices);
  })
  .catch(err => res.json({error: 'Unable to reach server'}));
});

router.get('/entityJSON/:entityType/:entityID', (req, res) => {
  fetch(`${serverAddress}/api/entity/${req.params.entityType}?id=${req.params.entityID}`, {
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
