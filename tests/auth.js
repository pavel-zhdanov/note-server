/* eslint-disable arrow-parens */
const { test } = require('ava');
const request = require('supertest');
const createApp = require('../src/config/app');
const User = require('../src/models/User');

const app = request(createApp());

test('User can succesfully login', async t => {
  const res = await app.post('/api/login').send({
    username: 'test',
    password: 'test',
  });
  t.is(res.status, 200);
  t.truthy(typeof res.body.token === 'string');
  t.truthy(typeof res.body.refreshToken === 'string');

  const refreshTokenRes = await app.post('/api/refresh').send({
    refreshToken: res.body.refreshToken,
  });
  t.is(refreshTokenRes.status, 200);
  t.truthy(typeof refreshTokenRes.body.token === 'string');
  t.truthy(typeof refreshTokenRes.body.refreshToken === 'string');
});

test('User gets 403 on invalid credentials', async t => {
  const res = await app.post('/api/login').send({
    login: 'INVALID',
    password: 'INVALID',
  });
  t.is(res.status, 403, 'status 403');
});

test('User can succesfully signup', async t => {
  await User.deleteOne({ username: 'testsign' });
  const res = await app.post('/api/signup').send({
    username: 'testsign',
    password: 'testsign',
  });
  const res1 = await app.post('/api/signup').send({
    username: 'test',
    password: 'test',
  });
  const res2 = await app.post('/api/signup').send({
    username: 'test2',
    password: 'test2',
  });
  t.is(res.status, 200);
  t.truthy(typeof res.body.token === 'string');
  t.truthy(typeof res.body.refreshToken === 'string');

  const refreshTokenRes = await app.post('/api/refresh').send({
    refreshToken: res.body.refreshToken,
  });
  t.is(refreshTokenRes.status, 200);
  t.truthy(typeof refreshTokenRes.body.token === 'string');
  t.truthy(typeof refreshTokenRes.body.refreshToken === 'string');
});

test('User can not succesfully signup if username already exist', async t => {
  const res = await app.post('/api/signup').send({
    username: 'testsigner',
    password: 'testsigner',
  });
  t.is(res.status, 400);
});

test('User can successfully logout', async t => {
  const res = await app.post('/api/login').send({
    username: 'test',
    password: 'test',
  });
  const resLogout = await app.post('/api/logout').send({
    refreshToken: res.body.refreshToken,
  });
  t.is(resLogout.status, 200);
});

test('user sent an invalid refreshtoken', async t => {
  const resLogout = await app.post('/api/logout').send({
    refreshToken: 'INVALID_TOKEN',
  });
  t.is(resLogout.status, 404);
});

test('User can use refresh token only once', async t => {
  const res = await app.post('/api/login').send({
    username: 'test',
    password: 'test',
  });
  const resOne = await app.post('/api/refresh').send({
    refreshToken: res.body.refreshToken,
  });
  t.is(resOne.status, 200);
  t.truthy(typeof resOne.body.token === 'string');
  t.truthy(typeof resOne.body.refreshToken === 'string');

  const resTwo = await app.post('/api/refresh').send({
    refreshToken: res.body.refreshToken,
  });
  t.is(resTwo.status, 404);
});
