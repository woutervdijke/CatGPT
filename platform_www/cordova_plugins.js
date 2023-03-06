cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "admob-plus-cordova.AdMob",
      "file": "plugins/admob-plus-cordova/www/admob.js",
      "pluginId": "admob-plus-cordova",
      "clobbers": [
        "admob"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    }
  ];
  module.exports.metadata = {
    "admob-plus-cordova": "1.28.0",
    "cordova-plugin-proguard": "2.2.0",
    "cordova-plugin-splashscreen": "6.0.2"
  };
});