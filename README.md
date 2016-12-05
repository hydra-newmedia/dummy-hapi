# hapi-dummy

Creates a simple hapi server for testing, that registers one or more plugins.

## Examples

### One module

```js
const dh = require('hapi-dummy');
dh(require('hapi-forest')).then(server => {
  console.log(server);
});
```

### Module with options

```js
dh({
  require('hapi-swagger'),
  options: {
    info: 'test api',
    version: '1.0.0',
  }
}).then(server => {
  console.log(server);
});
```

### Multiple plugins

```js
dh([
  require('hapi-forest'),
  {
    require('hapi-swagger'),
    options: {
      info: 'test api',
      version: '1.0.0',
    }
  }
]).then(server => {
  console.log(server);
});
```

### With hapi debug mode enabled

```js
dh(require('hapi-forest'), true).then(server => {
  console.log(server);
});
```
