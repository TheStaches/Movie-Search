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
        expect(text).to.equal('Movie Finder');
      })
  ).timeout(65000);
// Input
  it('should have an input field', () =>
    nightmare
      .goto(url)
      .wait('.movieSearch')
      .evaluate(() => document.querySelector('input').exists)
      .end()
  ).timeout(60000);
// Button
  it('should have a search button', () =>
    nightmare
      .goto(url)
      .wait('.movieSearch')
      .evaluate(() => document.querySelector('button').exists)
      .end()
  ).timeout(60000);
});

describe('movie searches', () => {
  beforeEach(() => {
    nightmare = new Nightmare();
  });

// Search Movie
  it('should display a searched movie', () =>
    nightmare
      .goto(url)
      .wait('#searchInput')
      .type('#searchInput', 'Tarka the Otter')
      .click('#search')
      .wait('.row')
      .evaluate(() => document.querySelector('#searchInput').value)
      .end()
      .then(title =>
        expect(title).to.equal('Tarka the Otter')
      )
  ).timeout(60000);

  it('movie should have a plot', () =>
    nightmare
      .goto(url)
      .wait('#searchInput')
      .type('#searchInput', 'Tarka the Otter')
      .click('#search')
      .wait('.row')
      .evaluate(() => document.querySelector('.plot').innerText)
      .end()
      .then(title =>
        expect(title).to.not.be.null
      )
  ).timeout(60000);

  it('should display more information button', () =>
    nightmare
      .goto(url)
      .wait('#searchInput')
      .insert('#searchInput', 'Tarka the Otter')
      .click('#search')
      .wait('.row')
      .evaluate(() => document.querySelector('.moreInfo').exists)
      .end()
  ).timeout(60000);

  // it('should display additional movie information', () =>
  //   nightmare
  //     .goto(url)
  //     .wait('#searchInput')
  //     .insert('#searchInput', 'Tarka the Otter')
  //     .click('#search')
  //     .wait(2500)
  //     .click('.moreInfo')
  //     .wait(3000)
  //     .evaluate(() => document.querySelector('#title').innertext)
  //     .end()
  //     .then(title =>
  //       expect(title).to.equal('Tarka the Otter'))
  // ).timeout(6000);
});
