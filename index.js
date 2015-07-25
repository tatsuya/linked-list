'use strict';

/**
 * Represents a singly linked list data structure. Each instance has a head
 * node.
 *
 * @constructor
 */
var LinkedList = module.exports = function() {
  /**
   * First node in the list.
   * @type {Node}
   */
  this.head = null;
};

/**
 * Adds a node with a data to the end of the list.
 *
 * @param  {Object} data The data to initialize with the node
 * @return {Boolean} true if operation was successful
 * @public
 */
LinkedList.prototype.push = function(data) {
  var newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    return true;
  }

  // Find a tail node of the list.
  var node = this.head;
  while (node.next) {
    node = node.next;
  }
  node.next = newNode;
  return true;
};

/**
 * Removes the last node from the list and returns the data of that node.
 *
 * @return {Object} the data of the removed node
 * @public
 */
LinkedList.prototype.pop = function() {
  if (!this.head) {
    return null;
  }

  var prev = this.head;
  var current = prev.next;

  if (!current) {
    this.head = null;
    return prev.data;
  }

  while (current.next) {
    prev = current;
    current = current.next;
  }
  prev.next = null;
  return current.data;
};

/**
 * Returns an array of all the data contained in the list.
 *
 * @return {Array} the array of all the data from the list
 */
LinkedList.prototype.toArray = function() {
  var array = [];
  var node = this.head;
  while (node) {
    array.push(node.data);
    node = node.next;
  }
  return array;
};

/**
 * Represents a node within a linked list. Each node has a 'data' property and a
 * pointer to the next node in the list.
 *
 * @constructor
 * @param {Object} data The data to initialize with the node
 */
var Node = function(data) {
  this.data = data;

  /**
   * Pointer to the next node.
   * @type {Node}
   */
  this.next = null;
};
