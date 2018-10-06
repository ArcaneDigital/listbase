# listbase

Micro database for maintaining lists and queues

## Installation

```
npm install listbase --save
```

## Usage

### new ListBase({options})

- `name` `{String}` name of list

### Methods

- `add (item)` Adds item to list
- `remove (item)` Removes item from list
- `exists (item)` Checks if item is in list
- `length` Counts number of items in list

## Example

```javascript
const ListBase = require("listbase");

const q = new ListBase({ name: "queue" });

q.add("http://example.com");
q.add("http://google.com");

console.log("http://example.com", q.exists("http://example.com")); //true
console.log("https://www.w3.org/", q.exists("https://www.w3.org/")); // false

q.remove("http://example.com");
console.log("http://example.com", q.exists("http://example.com")); //false
```

## Maintainers

- [Jay Goodfellow](https://github.com/jaygoodfellow)
- [Arcane Digital Inc](https://github.com/arcanedigital)

## License

Copyright (c) 2017, Arcane & Jay Goodfellow.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
