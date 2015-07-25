# linked-list

Linked list implementation written in JavaScript.

## Usage

```js
var LinkedList = require('./');

// Instantiate linked list object
var list = new LinkedList();

list.push('bird');
list.push('cat');
list.push('dog');

list.pop();  // 'dog'
list.pop();  // 'cat'
list.pop();  // 'bird'
```

## API

### LinkedList#push(data)

Adds a node with a data to the end of the list.

### LinkedList#pop()

Removes the last node from the list and returns the data of that node.

## Test

To run the test suit use `npm test`. This will call mocha test runner with parameters defined in `package.json`.

```
$ npm test
```

## See also

- [wooorm/linked-list](https://github.com/wooorm/linked-list)
- [jasonsjones/singly-linked-list](https://github.com/jasonsjones/singly-linked-list)
- [simplyianm/linked-list-js](https://github.com/simplyianm/linked-list-js)
