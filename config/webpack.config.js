var path = require('path');
var webpack = require("webpack");

var root = path.normalize(path.join(__dirname, '..'));

var js_root = path.join(root, 'app/assets/javascripts');
var bower_components = path.join(root, 'vendor/assets/components');

module.exports = {
  context: js_root,
  entry: 'index',
  output: {
    path: js_root,
    filename: "application.js"
  },
  resolve: {
    root: [js_root, bower_components],
    modulesDirectories: ["web_modules", "node_modules", "bower_components"]
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    )
  ]
}
