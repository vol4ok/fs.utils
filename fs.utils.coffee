fs = require 'fs'

makeDir = (path, options = {}) -> 
  mode = options.mode or 0755
  parent = dirname(path)
  makeDir(parent, options) unless existsSync(parent)
  unless existsSync(path)
    fs.mkdirSync(path, mode)
    options.createdDirs.push(path) if _.isArray(options.createdDirs)
    
setExt = (file, ext) -> file.replace(/(\.[^.\/]*)?$/i, ext)

exports extends {makeDir, setExt}