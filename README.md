# how-long

Return how long proto chain is.

## Usage

```
const o = { a: 1, b: 2, c: 3 };
const o2 = Object.create(o);

const how = new HowLong(o);
const long = new HowLong(o2);
const win = new HowLong(window);

const pp = Object.getPrototypeOf(how);
const pp2 = Object.getPrototypeOf(long);
const ppwindow = Object.getPrototypeOf(win);

pp:
Object {value: 1}

pp2:
Object {value: 2}

ppwindow:
Object {value: 4}
```
