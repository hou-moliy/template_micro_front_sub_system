
// 导入组件，组件必须声明 name
const { microMain, render } = require("./mainMicro.js");
const { publicPath } = require("./publicPath.js");
exports = module.exports = { publicPath, microMain, render };
