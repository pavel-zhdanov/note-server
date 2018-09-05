/* eslint-disable no-underscore-dangle */
const { test } = require('ava');
const request = require('supertest');
const createApp = require('../src/config/app');
const Note = require('../src/models/Note');

const app = request(createApp());

test('User can get public notes without auth', async (t) => {
  const res = await app.get('/api/note/list').send();
  t.is(res.status, 200);
  t.truthy(typeof res.body[0].authorId === 'string');
});

test.todo('User can get their private and all public notes with auth');

test.todo('User can get their private note with auth');
test.todo('User can not get their private note without auth');
test.todo('User can not get their public note without auth');

test('User can create note with auth', async (t) => {
  const res = await app.post('/api/login').send({
    username: 'test',
    password: 'test',
  });
  const authLine = `Bearer ${res.body.token}`;
  const resSave = await app.post('/api/note/new').send({
    title: 'test',
    description: 'test',
    text: 'test',
    isPrivate: false,
    imageSrc: '',
  }).set('Authorization', authLine);
  t.is(resSave.status, 201);
  t.truthy(typeof resSave.body.note._id === 'string');
  t.is(resSave.body.note.text, 'test');
});
test('User can not create note without auth', async (t) => {
  const resSave = await app.post('/api/note/new').send({
    title: 'test',
    description: 'test',
    text: 'test',
    isPrivate: false,
    imageSrc: '',
  });
  t.is(resSave.status, 401);
});

test('User can delete their note with auth', async (t) => {
  const res = await app.post('/api/login').send({
    username: 'test',
    password: 'test',
  });
  const authLine = `Bearer ${res.body.token}`;

  const resSave = await app.post('/api/note/new').send({
    title: 'test',
    description: 'test',
    text: 'test',
    isPrivate: false,
    imageSrc: '',
  }).set('Authorization', authLine);

  const resDelete = await app.delete(`/api/note/${resSave.body.note._id}`).send().set('Authorization', authLine);
  t.is(resDelete.status, 200);

  const resGet = await app.get(`/api/note/${resSave.body.note._id}`).send();

  t.is(resGet.status, 404);
});

test('User can not delete note without auth', async (t) => {
  const res = await app.post('/api/login').send({
    username: 'test',
    password: 'test',
  });
  const authLine = `Bearer ${res.body.token}`;

  const resSave = await app.post('/api/note/new').send({
    title: 'test',
    description: 'test',
    text: 'test',
    isPrivate: false,
    imageSrc: '',
  }).set('Authorization', authLine);

  const resDelete = await app.delete(`/api/note/${resSave.body.note._id}`).send();
  t.is(resDelete.status, 401);
});
test.todo('User can not delete NOT their note');
test.todo('User gets 404 on invalid note ID');

test('User can update their note with auth', async (t) => {
  const res = await app.post('/api/login').send({
    username: 'test',
    password: 'test',
  });
  const authLine = `Bearer ${res.body.token}`;

  const resSave = await app.post('/api/note/new').send({
    title: 'test',
    description: 'test',
    text: 'test',
    isPrivate: false,
    imageSrc: '',
  }).set('Authorization', authLine);

  const resUpdate = await app.put(`/api/note/${resSave.body.note._id}`).send({
    title: 'test2',
  }).set('Authorization', authLine);
  t.is(resUpdate.status, 201);
  t.is(resUpdate.body.note.title, 'test2');
  t.is(resSave.body.note._id, resUpdate.body.note._id);

  const resGet = await app.get(`/api/note/${resSave.body.note._id}`).send();
  t.is(resGet.status, 200);
  t.is(resGet.body.title, 'test2');
});

test('User can not update note without auth', async (t) => {
  const resGet = await app.get('/api/note/list').send();
  const resUpdate = await app.put(`/api/note/${resGet.body[0]._id}`).send({
    title: 'test2',
  });
  t.is(resUpdate.status, 401);
});

test('User can not update NOT their note', async (t) => {
  const res = await app.post('/api/login').send({
    username: 'test',
    password: 'test',
  });
  const authLine = `Bearer ${res.body.token}`;

  const resSave = await app.post('/api/note/new').send({
    title: 'test',
    description: 'test',
    text: 'test',
    isPrivate: false,
    imageSrc: '',
  }).set('Authorization', authLine);

  const res2 = await app.post('/api/login').send({
    username: 'test2',
    password: 'test2',
  });

  const authLine2 = `Bearer ${res2.body.token}`;

  const resUpdate = await app.put(`/api/note/${resSave.body.note._id}`).send({
    title: 'test2',
  }).set('Authorization', authLine2);

  t.is(resUpdate.status, 403);
});

test('User gets 404 on invalid note ID', async (t) => {
  const res = await app.post('/api/login').send({
    username: 'test',
    password: 'test',
  });
  const authLine = `Bearer ${res.body.token}`;

  const resUpdate = await app.put('/api/note/INVALID').send({
    title: 'test2',
  }).set('Authorization', authLine);
  t.is(resUpdate.status, 404);
});
