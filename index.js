'use strict';

const hapi = require('hapi');

module.exports = (mod, enableDebug) => {

  const debugSettings = {
    log: ['error'],
    request: ['error'],
  };

  return new Promise((resolve, reject) => {
    const server = new hapi.Server({
      debug: enableDebug ? debugSettings : false,
    });
    server.connection({ port: 9999 }); // never started
    if (mod === undefined) return resolve(server);
    server.register(mod, e => {
      if (e) return reject(e);
      resolve(server);
    });
  });
};
