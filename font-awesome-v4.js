var _require = require("fs"),
	readFileSync = _require.readFileSync;

var _require2 = require("path"),
	resolve = _require2.resolve;

var _require3 = require("./config.js"),
	fontName = _require3.fontName,
	mapName = _require3.mapName;

module.exports = {
	type: 'font',
	keymap: require("./" + mapName),
	ttf: readFileSync(resolve(__dirname, fontName)),
	css: readFileSync(resolve(__dirname, 'base.css')).toString('utf8')
};