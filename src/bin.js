#!/usr/bin/env node
var electron = require('electron');
var spawn = require('cross-spawn');

var result = spawn.sync(
  electron,
  [require.resolve('./index')],
  {stdio: 'ignore'}
);
process.exit(result.status);
