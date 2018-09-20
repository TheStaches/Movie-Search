/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const { expect } = require('chai');
const axios = require('axios');

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(8888);

const url = 'http://localhost:8888';


describe('page components', () => {
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('returns the correct status code', () => axios.get(url)
    .then(response => expect(response.status === 200)));

  it('should have the correct page title', () =>
    nightmare
      .goto(url)
      .wait('.movieSearch')
      .evaluate(() => document.querySelector('h1').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Movie Search');
      })
  ).timeout(30000);
// Input
  it('should have an input field', () =>
    nightmare
      .goto(url)
      .wait('.movieSearch')
      .evaluate(() => document.querySelector('input').exists)
      .end()
  ).timeout(6000);
});

describe('movie searches', () => {
  beforeEach(() => {
    nightmare = new Nightmare({
      show: true
    });
  });

// Search Movie
  it('should display a searched movie', () =>
    nightmare
      .goto(url)
      .wait('#searchInput')
      .type('#searchInput', 'Tarka the Otter')
      .wait(500)
      .type('#searchInput', '\u000d')
      .wait(2000)
      .evaluate(() => document.querySelector('.movieTitle').innerText)
      .end()
      .then(title =>
        expect(title).to.equal('Tarka the Otter')
      )
  ).timeout(6000);

  it('movie should have a plot', () =>
    nightmare
      .goto(url)
      .wait('#searchInput')
      .type('#searchInput', 'Tarka the Otter')
      .wait(500)
      .type('#searchInput', '\u000d')
      .wait('.row')
      .evaluate(() => document.querySelector('.plot').innerText)
      .end()
      .then(title =>
        expect(title).to.not.be.null
      )
  ).timeout(6000);

  it('should display more information button', () =>
    nightmare
      .goto(url)
      .wait('#searchInput')
      .insert('#searchInput', 'Tarka the Otter')
      .wait(500)
      .type('#searchInput', '\u000d')
      .wait('.row')
      .evaluate(() => document.querySelector('.moreInfo').exists)
      .end()
  ).timeout(6000);
});
