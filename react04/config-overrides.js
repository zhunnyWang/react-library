const { injectBabelPlugin } = require("react-app-rewired");
module.exports = function override (config, env) {
  //antd按需引用
  config = injectBabelPlugin(
    // 在默认配置基础上注入
    // 插件名，插件配置
    ["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }],
    config
  );

  //装饰器
  // config = injectBabelPlugin(
  //   ["@babel/plugin-proposal-decorators", { legacy: true }],
  //   config
  // );

  return config;
};