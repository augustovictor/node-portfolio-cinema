const supertest = require('supertest');
const expect    = require('expect');

const app       = require('../../app');

global.request  = supertest(app);
global.expect   = expect;
