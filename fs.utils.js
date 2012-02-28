var dirname, existsSync, fs, makeDir, setExt, _, _ref,
  __hasProp = Object.prototype.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

fs = require('fs');

_ = require('underscore');

_ref = require('path'), existsSync = _ref.existsSync, dirname = _ref.dirname;

makeDir = function(path, options) {
  var mode, parent;
  if (options == null) options = {};
  mode = options.mode || 0755;
  parent = dirname(path);
  if (!existsSync(parent)) makeDir(parent, options);
  if (!existsSync(path)) {
    fs.mkdirSync(path, mode);
    if (_.isArray(options.createdDirs)) return options.createdDirs.push(path);
  }
};

setExt = function(file, ext) {
  return file.replace(/(\.[^.\/]*)?$/i, ext);
};

__extends(exports, {
  makeDir: makeDir,
  setExt: setExt
});
