/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  type: phaser__WEBPACK_IMPORTED_MODULE_0___default.a.AUTO,\n  parent: 'content',\n  width: 800,\n  height: 800,\n  localStorageName: 'phaseres6webpack',\n  physics: {\n    default: 'arcade',\n    arcade: {\n      gravity: {\n        y: 150\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scenes_Boot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/Boot */ \"./src/scenes/Boot.js\");\n/* harmony import */ var _scenes_Splash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/Splash */ \"./src/scenes/Splash.js\");\n/* harmony import */ var _scenes_Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/Game */ \"./src/scenes/Game.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar gameConfig = Object.assign(_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n  scene: [_scenes_Boot__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _scenes_Splash__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _scenes_Game__WEBPACK_IMPORTED_MODULE_3__[\"default\"]]\n});\n\nvar Game =\n/*#__PURE__*/\nfunction (_Phaser$Game) {\n  _inherits(Game, _Phaser$Game);\n\n  function Game() {\n    _classCallCheck(this, Game);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Game).call(this, gameConfig));\n  }\n\n  return Game;\n}(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Game);\n\nwindow.game = new Game();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/scenes/Boot.js":
/*!****************************!*\
  !*** ./src/scenes/Boot.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webfontloader */ \"./node_modules/webfontloader/webfontloader.js\");\n/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar _default =\n/*#__PURE__*/\nfunction (_Phaser$Scene) {\n  _inherits(_default, _Phaser$Scene);\n\n  function _default() {\n    _classCallCheck(this, _default);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, {\n      key: 'BootScene'\n    }));\n  }\n\n  _createClass(_default, [{\n    key: \"preload\",\n    value: function preload() {\n      this.fontsReady = false;\n      this.fontsLoaded = this.fontsLoaded.bind(this);\n      this.add.text(100, 100, 'loading fonts...'); // this.load.image('loaderBg', './assets/images/loader-bg.png')\n      //this.load.image('loaderBar', './assets/images/loader-bar.png')\n      // this.load.json('fontJSON','../../assets/font.json');\n      //Con esto importamos la fuente que esta ya creada\n      // const fontJSON = this.cache.json.get('fontJSON');\n      // this.cache.bitmapFont.add('pixel',Phaser.GameObjects.RetroFont.Parse(this,fontJSON));\n      // this.scene.start('Menu');\n\n      webfontloader__WEBPACK_IMPORTED_MODULE_1___default.a.load({\n        google: {\n          families: ['Bangers']\n        },\n        active: this.fontsLoaded\n      });\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      if (this.fontsReady) {\n        this.scene.start('SplashScene');\n      }\n    }\n  }, {\n    key: \"fontsLoaded\",\n    value: function fontsLoaded() {\n      this.fontsReady = true;\n    }\n  }]);\n\n  return _default;\n}(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene);\n\n\n\n//# sourceURL=webpack:///./src/scenes/Boot.js?");

/***/ }),

/***/ "./src/scenes/Game.js":
/*!****************************!*\
  !*** ./src/scenes/Game.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sprites_Character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sprites/Character */ \"./src/sprites/Character.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/* globals __DEV__ */\n\n/* globals __DEV__ */\n\n\nvar mouseInput;\nvar giraffeTween;\nvar alienTween;\nvar firstY = 0;\nvar firstX = 0;\nvar position = false;\nvar text;\nvar textTime;\nvar timedEvent;\nvar finalText;\nvar bear;\nvar monkey;\nvar crocodile;\nvar alien;\nvar giraffe;\nvar moose;\nvar alienLife = 3;\nvar button1;\nvar downloadText;\nvar titleText;\nvar heart1;\nvar heart2;\nvar heart3;\nvar alienTween;\nvar byeCards;\n\nvar GameScene =\n/*#__PURE__*/\nfunction (_Phaser$Scene) {\n  _inherits(GameScene, _Phaser$Scene);\n\n  function GameScene() {\n    _classCallCheck(this, GameScene);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(GameScene).call(this, {\n      key: 'GameScene'\n    }));\n  }\n\n  _createClass(GameScene, [{\n    key: \"init\",\n    value: function init() {}\n  }, {\n    key: \"preload\",\n    value: function preload() {}\n  }, {\n    key: \"create\",\n    value: function create() {\n      //el fondo\n      mouseInput = this.input;\n      this.add.image(400, 300, 'background');\n      text = this.add.text(250, 380, 'Drag the bear to the board', {\n        font: '30px Bangers',\n        fill: '#4A70DE'\n      });\n      var dog = this.dog;\n      dog = new _sprites_Character__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        scene: this,\n        x: 300,\n        y: 690,\n        asset: 'dog'\n      });\n      var frog = this.frog;\n      frog = new _sprites_Character__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        scene: this,\n        x: 500,\n        y: 700,\n        asset: 'frog'\n      });\n      var gorilla = this.gorilla;\n      gorilla = new _sprites_Character__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        scene: this,\n        x: 700,\n        y: 700,\n        asset: 'gorilla'\n      });\n      bear = this.add.image(80, 700, 'bear');\n      alien = this.add.image(400, 200, 'alien');\n      crocodile = this.add.image(180, 500, 'crocodile');\n      monkey = this.add.image(640, 500, 'monkey');\n      button1 = this.add.image(400, 500, 'button');\n      giraffe = this.add.image(500, 220, 'giraffe');\n      moose = this.add.image(300, 220, 'moose');\n      heart1 = this.add.image(350, 110, 'heart');\n      heart2 = this.add.image(400, 110, 'heart');\n      heart3 = this.add.image(450, 110, 'heart');\n      giraffe.setVisible(false);\n      moose.setVisible(false);\n      button1.visible = false;\n      /**\n       * Aqui voy a hacer los tween de los animalillos\n       * \n       */\n\n      dog.setInteractive({\n        draggable: true\n      });\n      frog.setInteractive({\n        draggable: true\n      });\n      bear.setInteractive({\n        draggable: true\n      });\n      bear.on('drag', function (pointer, gameObject, dragX, dragY) {\n        //Arrastro dependiendo de la posicion del raton\n        bear.x = mouseInput.x;\n        bear.y = mouseInput.y; //controlo que no se salga sus dos posibles casillas\n\n        if (bear.y < 650 || bear.x > 150) {\n          bear.y = 500;\n          bear.x = 400;\n          console.log('estoy aqui');\n        } else {\n          bear.y = 700;\n          bear.x = 80;\n        }\n      }); //Aqui tenemos el temporizador de 5 segundos (Tengo que poner esto en un texto para que se vea el tiempo pasar en el juego)\n\n      timedEvent = this.time.addEvent({\n        delay: 5000,\n        callback: startBattle,\n        callbackScope: this\n      }); //Los diferentes textos que iran apareciendo \n\n      textTime = this.add.text(32, 32, '', {\n        font: '30px Bangers',\n        fill: '#74A016'\n      });\n      textTime.setText('The battle starts in 5 seconds');\n      finalText = this.add.text(1000, 360, '', {\n        font: '80px Bangers',\n        fill: '#C85213'\n      }).setOrigin(0, 0);\n      titleText = this.add.text(-1000, 290, '', {\n        font: '80px Bangers',\n        fill: '#74A016'\n      }).setOrigin(0, 0);\n      this.add.existing(button1);\n      this.add.existing(bear);\n      this.add.existing(alien);\n      this.add.existing(dog);\n      this.add.existing(frog);\n      this.add.existing(gorilla);\n      this.add.existing(crocodile);\n      this.add.existing(monkey);\n      this.add.existing(moose);\n      this.add.existing(giraffe);\n      this.add.existing(heart1);\n      this.add.existing(heart2);\n      this.add.existing(heart3);\n      this.tweens.add({\n        targets: [alien, heart1, heart2, heart3],\n        duration: 800,\n        x: '500',\n        repeat: -1,\n        yoyo: true,\n        ease: 'Sine.easeInOut',\n        delay: function delay(i, total, target) {\n          return i * 100;\n        }\n      });\n      this.tweens.add(_defineProperty({\n        targets: [dog, frog, gorilla, bear, crocodile, monkey],\n        duration: 1000,\n        repeat: -1,\n        yoyo: true,\n        rotation: 0.4,\n        delay: 500,\n        ease: 'Sine.easeInOut'\n      }, \"delay\", function delay(i, total, target) {\n        return i * 100;\n      })); //Con esta maravilla podemos crear el tween y usarlo desde una funcion o cualquier lado sin que nos de fallitos del scope\n\n      giraffeTween = this.tweens.createTimeline();\n      giraffeTween.add({\n        targets: alien,\n        duration: 2000,\n        rotation: 0.05,\n        y: 2000\n      });\n      giraffeTween.add({\n        targets: [crocodile, bear, monkey],\n        duration: 200,\n        y: monkey.y - 50,\n        yoyo: true,\n        repeat: 3,\n        ease: 'Power0',\n        onComplete: finalScreen\n      });\n      giraffeTween.add({\n        targets: [titleText, finalText],\n        x: 200,\n        duration: 200,\n        ease: 'Power3'\n      })\n      /**giraffeTween.add({\n        targets: [titleText,finalText],\n        y: 400,\n        yoyo: true,\n        duration: 200,\n        repeat:1,\n        ease: 'Power3',\n        \n      })*/\n      / giraffeTween.add({\n        targets: [giraffe, moose],\n        duration: 1000,\n        y: '180',\n        repeat: -1,\n        yoyo: true,\n        ease: 'Power1'\n      });\n      downloadText = this.add.text(320, 477, '', {\n        font: '30px Bangers',\n        fill: '#DA6134'\n      }); //Hago esto para poder usarlos bien en las funciones de momento\n\n      this.dog = dog;\n      this.bear = bear;\n      this.gorilla = gorilla;\n      this.frog = frog;\n      this.crocodile = crocodile;\n      this.monkey = monkey;\n      this.button1 = button1;\n      this.moose = moose;\n      this.giraffe = giraffe;\n      this.alienTween = alienTween;\n      this.heart1 = heart1;\n      this.heart2 = heart2;\n      this.heart3 = heart3;\n    }\n  }, {\n    key: \"update\",\n    value: function update() {}\n  }]);\n\n  return GameScene;\n}(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene);\n\nfunction startBattle() {\n  text.setText('Click to start!');\n  textTime.destroy(); //Si el usuario no movio la ficha se coloca sola\n\n  bear.y = 500;\n  bear.x = 400;\n  this.input.on('pointerdown', function (pointer) {\n    var _this = this;\n\n    text.setText('');\n    console.log('down'); //textTime.setText('')\n    //No se porque se sigue pudiendo arrastrar si lo he puesto en false\n    // this.bear.setInteractive({ draggable:  false})\n\n    byeCards = this.tweens.add({\n      targets: [this.gorilla, this.dog, this.frog],\n      duration: 1000,\n      y: 1000,\n      rotation: 0.4,\n      onComplete: function onComplete() {\n        _this.gorilla.destroy();\n\n        _this.dog.destroy();\n\n        _this.frog.destroy();\n      }\n    });\n    /*this.dog.visible = false\n    this.frog.visible = false\n    this.gorilla.visible = false*/\n    //El ataque del oso\n    // console.log(alienLife)\n    //Animacion del oso atacando hacia la posicion del alien\n\n    this.tweens.add({\n      targets: this.bear,\n      y: 300,\n      duration: 500,\n      //Cada vez que realiza la accion llama al metodo que resta vida al alien\n      onUpdateCallback: killAlien,\n      callbackScope: this.scene,\n      onComplete: function onComplete() {\n        return heart1.setVisible(false);\n      },\n      ease: function ease(t) {\n        return Math.pow(Math.sin(t * 3), 3);\n      },\n      delay: 800,\n      repeat: 0\n    });\n    this.tweens.add({\n      targets: this.monkey,\n      y: 300,\n      x: monkey.x - 150,\n      duration: 500,\n      //Cada vez que realiza la accion llama al metodo que resta vida al alien\n      onStart: killAlien,\n      onComplete: function onComplete() {\n        return heart2.setVisible(false);\n      },\n      ease: function ease(t) {\n        return Math.pow(Math.sin(t * 3), 3);\n      },\n      delay: 1200,\n      repeat: 0\n    });\n    this.tweens.add({\n      targets: this.crocodile,\n      y: 300,\n      x: crocodile.x + 150,\n      duration: 400,\n      //Cada vez que realiza la accion llama al metodo que resta vida al alien\n      onComplete: killAlien,\n      onStart: function onStart() {\n        return heart3.setVisible(false);\n      },\n      ease: function ease(t) {\n        return Math.pow(Math.sin(t * 3), 3);\n      },\n      delay: 1400,\n      repeat: 0\n    }); //text.setText('')\n  }, this);\n}\n\nfunction killAlien() {\n  console.log(this); //console.log(alienLife)\n  //text.setText('')\n\n  if (alienLife > 0) {\n    alienLife--;\n    console.log('La vida del alien es de: ' + alienLife);\n  }\n\n  if (alienLife == 0) {\n    giraffeTween.play();\n    console.log('ded'); //finalScreen()\n  }\n}\n\nfunction finalScreen() {\n  bear.visible = false;\n  crocodile.visible = false;\n  monkey.visible = false;\n  alien.visible = false;\n  titleText.setText('SAFARY ATTACK');\n  finalText.setText('VICTORY!!!');\n  downloadText.setText('DOWNLOAD HERE');\n  button1.visible = true;\n  giraffe.rotation = +0.5;\n  moose.rotation = -0.5;\n  giraffe.setVisible(true);\n  moose.setVisible(true);\n  console.log(this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameScene);\n\n//# sourceURL=webpack:///./src/scenes/Game.js?");

/***/ }),

/***/ "./src/scenes/Splash.js":
/*!******************************!*\
  !*** ./src/scenes/Splash.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar _default =\n/*#__PURE__*/\nfunction (_Phaser$Scene) {\n  _inherits(_default, _Phaser$Scene);\n\n  function _default() {\n    _classCallCheck(this, _default);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, {\n      key: 'SplashScene'\n    }));\n  }\n\n  _createClass(_default, [{\n    key: \"preload\",\n    value: function preload() {\n      //\n      // load your assets\n      //\n      this.load.image('background', 'assets/Backgrounds/backgroundColorFall.png');\n      this.load.image('alien', 'assets/images/shipBlue_manned.png');\n      this.load.image('bear', 'assets/images/animal/bear.png');\n      this.load.image('crocodile', 'assets/images/animal/crocodile.png');\n      this.load.image('dog', 'assets/images/animal/dog.png');\n      this.load.image('frog', 'assets/images/animal/frog.png');\n      this.load.image('gorilla', 'assets/images/animal/gorilla.png');\n      this.load.image('monkey', 'assets/images/animal/monkey.png');\n      this.load.image('button', 'assets/images/button.png');\n      this.load.image('moose', 'assets/images/moose.png');\n      this.load.image('giraffe', 'assets/images/giraffe.png');\n      this.load.image('heart', 'assets/images/heart.png');\n    }\n  }, {\n    key: \"create\",\n    value: function create() {\n      this.scene.start('GameScene');\n    }\n  }, {\n    key: \"update\",\n    value: function update() {}\n  }]);\n\n  return _default;\n}(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene);\n\n\n\n//# sourceURL=webpack:///./src/scenes/Splash.js?");

/***/ }),

/***/ "./src/sprites/Character.js":
/*!**********************************!*\
  !*** ./src/sprites/Character.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar _default =\n/*#__PURE__*/\nfunction (_Phaser$GameObjects$S) {\n  _inherits(_default, _Phaser$GameObjects$S);\n\n  function _default(_ref) {\n    var scene = _ref.scene,\n        x = _ref.x,\n        y = _ref.y,\n        asset = _ref.asset;\n\n    _classCallCheck(this, _default);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, scene, x, y, asset));\n  }\n\n  return _default;\n}(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.GameObjects.Sprite);\n\n\n\n//# sourceURL=webpack:///./src/sprites/Character.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\agora\\Documents\\Clases\\Practicas\\Proyecto Phaser 1\\phaser-es6-webpack-phaser3\\src\\main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ })

/******/ });