'use strict';

var assert = require('assert');
var LinkedList = require('../');

describe('LinkedList', function() {
  var list = null;

  beforeEach(function() {
    list = new LinkedList();
  });

  afterEach(function() {
    list = null;
  });

  it('should initially contain zero items', function() {
    assert.equal(list.toArray().length, 0);
  });

  describe('#push(data)', function() {
    it('should add nodes to the list', function() {
      list.push('bird');
      list.push('cat');
      list.push('dog');
      assert.equal(list.toArray().length, 3);
    });
  });

  describe('#pop()', function() {
    it('should return null if pop is called on an empty list', function() {
      var data = list.pop();
      assert.equal(data, null);
    });

    it('should remove a node from the list with only one node', function() {
      list.push('bird');
      assert.equal(list.toArray().length, 1);
      var bird = list.pop();
      assert.equal(bird, 'bird');
      assert.equal(list.toArray().length, 0);
    });

    it('should remove a node from the list with two nodes', function() {
      list.push('bird');
      list.push('cat');
      assert.equal(list.toArray().length, 2);
      var cat = list.pop();
      assert.equal(cat, 'cat');
      assert.equal(list.toArray().length, 1);
      var bird = list.pop();
      assert.equal(bird, 'bird');
      assert.equal(list.toArray().length, 0);
    });
  });
});