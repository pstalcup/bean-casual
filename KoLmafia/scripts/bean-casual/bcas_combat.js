(function(e, a) { for(var i in a) e[i] = a[i]; if(a.__esModule) Object.defineProperty(e, "__esModule", { value: true }); }(exports,
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/libram/src/clan.ts":
/*!*****************************************!*\
  !*** ./node_modules/libram/src/clan.ts ***!
  \*****************************************/
/*! namespace exports */
/*! export addPlayerToWhitelist [provided] [no usage info] [missing usage info prevents renaming] */
/*! export get [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getCurrentFax [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getId [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getMeatInCoffer [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getName [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getRanks [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getWhitelist [provided] [no usage info] [missing usage info prevents renaming] */
/*! export join [provided] [no usage info] [missing usage info prevents renaming] */
/*! export putMeatInCoffer [provided] [no usage info] [missing usage info prevents renaming] */
/*! export removePlayerFromWhitelist [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWhitelist": () => /* binding */ getWhitelist,
/* harmony export */   "join": () => /* binding */ join,
/* harmony export */   "get": () => /* binding */ get,
/* harmony export */   "getId": () => /* binding */ getId,
/* harmony export */   "getName": () => /* binding */ getName,
/* harmony export */   "getCurrentFax": () => /* binding */ getCurrentFax,
/* harmony export */   "getRanks": () => /* binding */ getRanks,
/* harmony export */   "addPlayerToWhitelist": () => /* binding */ addPlayerToWhitelist,
/* harmony export */   "removePlayerFromWhitelist": () => /* binding */ removePlayerFromWhitelist,
/* harmony export */   "getMeatInCoffer": () => /* binding */ getMeatInCoffer,
/* harmony export */   "putMeatInCoffer": () => /* binding */ putMeatInCoffer
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kolmafia */ "kolmafia");
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'node-html-parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/libram/src/utils.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _wrapRegExp(re, groups) { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, undefined, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = _RegExp.call(this, re, flags); _groups.set(_this, groups || _groups.get(re)); return _this; } _inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === "string") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } else if (typeof substitution === "function") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (_typeof(args[args.length - 1]) !== "object") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var clanIdCache = {};
/**
 * Get list of clans to which the player is whitelisted
 */

function getWhitelist() {
  var root = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'node-html-parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("clan_signup.php"));
  return root.querySelectorAll('select[name="whichclan"] option').map(function (option) {
    return {
      id: Number.parseInt(option.getAttribute("value")),
      name: option.text
    };
  });
}
/**
 * Join a clan
 * @param clanIdOrName Clan id or name
 */

function join(clanIdOrName) {
  var clanId;

  if (typeof clanIdOrName === "string") {
    var _clanName = clanIdOrName.toLowerCase();

    if (_clanName === (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getClanName)().toLowerCase()) {
      return true;
    }

    if (!(_clanName in clanIdCache)) {
      var clan = getWhitelist().find(function (c) {
        return c.name.toLowerCase() === _clanName;
      });
      if (!clan) return false;
      clanIdCache[_clanName] = clan.id;
    }

    clanId = clanIdCache[_clanName];
  } else {
    clanId = clanIdOrName;

    if (clanId === (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getClanId)()) {
      return true;
    }
  }

  var result = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("showclan.php?recruiter=1&whichclan=".concat(clanId, "&pwd&whichclan=").concat(clanId, "&action=joinclan&apply=Apply+to+this+Clan&confirm=on"));
  return result.includes("clanhalltop.gif");
}
/**
 * Return the name and id of the current clan
 */

function get() {
  return {
    id: (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getClanId)(),
    name: (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getClanName)()
  };
}
/**
 * Return the id of the current clan
 */

function getId() {
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getClanId)();
}
/**
 * Return the name of the current clan
 */

function getName() {
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getClanName)();
}

var CLAN_LOG_FAX_PATTERN = /*#__PURE__*/_wrapRegExp(/([0-9]{2}\/[0-9]{2}\/[0-9]{2}, [0-9]{2}:[0-9]{2}(?:AM|PM): )<a (?:(?!>)[\s\S])+>((?:(?!<)[\s\S])+)<\/a>(?: faxed in a (.*?))<br>/, {
  monster: 3
});
/**
 * Return the monster that is currently in the current clan's fax machine if any
 */


function getCurrentFax() {
  var logs = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("clan_log.php");
  var lastFax = logs.match(CLAN_LOG_FAX_PATTERN);
  if (!lastFax) return null;

  var _lastFax = _slicedToArray(lastFax, 4),
      monsterName = _lastFax[3];

  if (!monsterName) return null;
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toMonster)(monsterName);
}

var CLAN_WHITELIST_DEGREE_PATTERN = /*#__PURE__*/_wrapRegExp(/(.*?) \(\xB0([0-9]+)\)/, {
  name: 1,
  degree: 2
});
/**
 * List available ranks (name, degree and id) from the current clan
 */


function getRanks() {
  var root = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'node-html-parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("clan_whitelist.php"));
  return root.querySelectorAll("select[name=level] option").map(function (option) {
    var match = option.text.match(CLAN_WHITELIST_DEGREE_PATTERN);
    var id = option.getAttribute("value");
    if (!match || !id) return null;

    var _match = _slicedToArray(match, 3),
        name = _match[1],
        degree = _match[2];

    return {
      name: name,
      degree: Number.parseInt(degree),
      id: Number.parseInt(id)
    };
  }).filter(_utils__WEBPACK_IMPORTED_MODULE_2__.notNull);
}

var toPlayerId = function toPlayerId(player) {
  return typeof player === "string" ? (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getPlayerId)(player) : player;
};
/**
 * Add a player to the current clan's whitelist.
 * If the player is already in the whitelist this will change their rank or title.
 * @param player Player id or name
 * @param rankName Rank to give the player. If not provided they will be given the lowest rank
 * @param title Title to give the player. If not provided, will be blank
 */


function addPlayerToWhitelist(player, rankName) {
  var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var playerId = toPlayerId(player);
  var ranks = getRanks();
  var rank = rankName ? ranks.find(function (r) {
    return r.name === rankName;
  }) : ranks.sort(function (a, b) {
    return a.degree - b.degree;
  })[0];
  if (!rank) return false;
  var result = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("clan_whitelist.php?action=add&pwd&addwho=".concat(playerId, "&level=").concat(rank.id, "&title=").concat(title));
  return result.includes("added to whitelist.") || result.includes("That player is already on the whitelist");
}
/**
 * Remove a player from the current clan's whitelist
 * @param player Player id or name
 */

function removePlayerFromWhitelist(player) {
  var playerId = toPlayerId(player);
  var result = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("clan_whitelist.php?action=updatewl&pwd&who=".concat(playerId, "&remove=Remove"));
  return result.includes("Whitelist updated.");
}
/**
 * Return the amount of meat in the current clan's coffer.
 */

function getMeatInCoffer() {
  var page = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("clan_stash.php");

  var _ref = page.match(/Your <b>Clan Coffer<\/b> contains ([\d,]+) Meat./) || ["0", "0"],
      _ref2 = _slicedToArray(_ref, 2),
      meat = _ref2[1];

  return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.parseNumber)(meat);
}
/**
 * Add the given amount of meat to the current clan's coffer.
 * @param amount Amount of meat to put in coffer
 */

function putMeatInCoffer(amount) {
  var result = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("clan_stash.php?pwd&action=contribute&howmuch=".concat(amount));
  return result.includes("You contributed");
}

/***/ }),

/***/ "./node_modules/libram/src/console.ts":
/*!********************************************!*\
  !*** ./node_modules/libram/src/console.ts ***!
  \********************************************/
/*! namespace exports */
/*! export error [provided] [no usage info] [missing usage info prevents renaming] */
/*! export info [provided] [no usage info] [missing usage info prevents renaming] */
/*! export log [provided] [no usage info] [missing usage info prevents renaming] */
/*! export trace [provided] [no usage info] [missing usage info prevents renaming] */
/*! export warn [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "log": () => /* binding */ log,
/* harmony export */   "info": () => /* binding */ info,
/* harmony export */   "warn": () => /* binding */ warn,
/* harmony export */   "error": () => /* binding */ error,
/* harmony export */   "trace": () => /* binding */ trace
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kolmafia */ "kolmafia");
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);


var logColor = function logColor(color) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var output = args.map(function (x) {
      return x.toString();
    }).join(" ");

    if (color) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(output, color);
    } else {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(output);
    }
  };
};

var log = logColor();
var info = logColor("blue");
var warn = logColor("red");
var error = logColor("red");
var trace = function trace() {};

/***/ }),

/***/ "./node_modules/libram/src/index.ts":
/*!******************************************!*\
  !*** ./node_modules/libram/src/index.ts ***!
  \******************************************/
/*! namespace exports */
/*! export $bounties [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$bounties */
/*! export $bounty [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$bounty */
/*! export $class [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$class */
/*! export $classes [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$classes */
/*! export $coinmaster [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$coinmaster */
/*! export $coinmasters [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$coinmasters */
/*! export $effect [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$effect */
/*! export $effects [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$effects */
/*! export $element [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$element */
/*! export $elements [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$elements */
/*! export $familiar [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$familiar */
/*! export $familiars [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$familiars */
/*! export $item [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$item */
/*! export $items [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$items */
/*! export $location [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$location */
/*! export $locations [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$locations */
/*! export $monster [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$monster */
/*! export $monsters [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$monsters */
/*! export $phyla [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$phyla */
/*! export $phylum [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$phylum */
/*! export $servant [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$servant */
/*! export $servants [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$servants */
/*! export $skill [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$skill */
/*! export $skills [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$skills */
/*! export $slot [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$slot */
/*! export $slots [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$slots */
/*! export $stat [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$stat */
/*! export $stats [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$stats */
/*! export $thrall [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$thrall */
/*! export $thralls [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/template-string.ts .$thralls */
/*! export clan [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/clan.ts */
/*!   export addPlayerToWhitelist [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export get [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export getCurrentFax [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export getId [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export getMeatInCoffer [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export getName [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export getRanks [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export getWhitelist [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export join [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export putMeatInCoffer [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export removePlayerFromWhitelist [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export console [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/console.ts */
/*!   export error [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export info [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export log [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export trace [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export warn [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export getActiveEffects [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.ts .getActiveEffects */
/*! export getActiveSongs [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.ts .getActiveSongs */
/*! export getMonsterLocations [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.ts .getMonsterLocations */
/*! export getRemainingLiver [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.ts .getRemainingLiver */
/*! export getRemainingSpleen [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.ts .getRemainingSpleen */
/*! export getRemainingStomach [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.ts .getRemainingStomach */
/*! export getSongCount [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.ts .getSongCount */
/*! export getSongLimit [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.ts .getSongLimit */
/*! export have [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.ts .have */
/*! export haveInCampsite [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.ts .haveInCampsite */
/*! export isSong [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/libram/src/lib.ts .isSong */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$bounties": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$bounties,
/* harmony export */   "$bounty": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$bounty,
/* harmony export */   "$class": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$class,
/* harmony export */   "$classes": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$classes,
/* harmony export */   "$coinmaster": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$coinmaster,
/* harmony export */   "$coinmasters": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$coinmasters,
/* harmony export */   "$effect": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$effect,
/* harmony export */   "$effects": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$effects,
/* harmony export */   "$element": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$element,
/* harmony export */   "$elements": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$elements,
/* harmony export */   "$familiar": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$familiar,
/* harmony export */   "$familiars": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$familiars,
/* harmony export */   "$item": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$item,
/* harmony export */   "$items": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$items,
/* harmony export */   "$location": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$location,
/* harmony export */   "$locations": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$locations,
/* harmony export */   "$monster": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$monster,
/* harmony export */   "$monsters": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$monsters,
/* harmony export */   "$phyla": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$phyla,
/* harmony export */   "$phylum": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$phylum,
/* harmony export */   "$servant": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$servant,
/* harmony export */   "$servants": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$servants,
/* harmony export */   "$skill": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$skill,
/* harmony export */   "$skills": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$skills,
/* harmony export */   "$slot": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$slot,
/* harmony export */   "$slots": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$slots,
/* harmony export */   "$stat": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$stat,
/* harmony export */   "$stats": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$stats,
/* harmony export */   "$thrall": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$thrall,
/* harmony export */   "$thralls": () => /* reexport safe */ _template_string__WEBPACK_IMPORTED_MODULE_0__.$thralls,
/* harmony export */   "getActiveEffects": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_1__.getActiveEffects,
/* harmony export */   "getActiveSongs": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_1__.getActiveSongs,
/* harmony export */   "getMonsterLocations": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_1__.getMonsterLocations,
/* harmony export */   "getRemainingLiver": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_1__.getRemainingLiver,
/* harmony export */   "getRemainingSpleen": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_1__.getRemainingSpleen,
/* harmony export */   "getRemainingStomach": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_1__.getRemainingStomach,
/* harmony export */   "getSongCount": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_1__.getSongCount,
/* harmony export */   "getSongLimit": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_1__.getSongLimit,
/* harmony export */   "have": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_1__.have,
/* harmony export */   "haveInCampsite": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_1__.haveInCampsite,
/* harmony export */   "isSong": () => /* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_1__.isSong,
/* harmony export */   "clan": () => /* reexport module object */ _clan__WEBPACK_IMPORTED_MODULE_2__,
/* harmony export */   "console": () => /* reexport module object */ _console__WEBPACK_IMPORTED_MODULE_3__
/* harmony export */ });
/* harmony import */ var _template_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template-string */ "./node_modules/libram/src/template-string.ts");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib */ "./node_modules/libram/src/lib.ts");
/* harmony import */ var _clan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clan */ "./node_modules/libram/src/clan.ts");
/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./console */ "./node_modules/libram/src/console.ts");







/***/ }),

/***/ "./node_modules/libram/src/lib.ts":
/*!****************************************!*\
  !*** ./node_modules/libram/src/lib.ts ***!
  \****************************************/
/*! namespace exports */
/*! export getActiveEffects [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getActiveSongs [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getMonsterLocations [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getRemainingLiver [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getRemainingSpleen [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getRemainingStomach [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getSongCount [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getSongLimit [provided] [no usage info] [missing usage info prevents renaming] */
/*! export have [provided] [no usage info] [missing usage info prevents renaming] */
/*! export haveInCampsite [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isSong [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSongLimit": () => /* binding */ getSongLimit,
/* harmony export */   "isSong": () => /* binding */ isSong,
/* harmony export */   "getActiveEffects": () => /* binding */ getActiveEffects,
/* harmony export */   "getActiveSongs": () => /* binding */ getActiveSongs,
/* harmony export */   "getSongCount": () => /* binding */ getSongCount,
/* harmony export */   "getMonsterLocations": () => /* binding */ getMonsterLocations,
/* harmony export */   "getRemainingLiver": () => /* binding */ getRemainingLiver,
/* harmony export */   "getRemainingStomach": () => /* binding */ getRemainingStomach,
/* harmony export */   "getRemainingSpleen": () => /* binding */ getRemainingSpleen,
/* harmony export */   "have": () => /* binding */ have,
/* harmony export */   "haveInCampsite": () => /* binding */ haveInCampsite
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kolmafia */ "kolmafia");
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _template_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template-string */ "./node_modules/libram/src/template-string.ts");
function _templateObject() {
  var data = _taggedTemplateLiteral(["Accordion Thief"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



/**
 * Returns the current maximum Accordion Thief songs the player can have in their head
 */

function getSongLimit() {
  return 3 + ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.booleanModifier)("Four Songs") ? 1 : 0) + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.numericModifier)("Additional Song");
}
/**
 * Return whether the Skill or Effect provided is an Accordion Thief song
 * @param skillOrEffect The Skill or Effect
 */

function isSong(skillOrEffect) {
  var skill = skillOrEffect instanceof Effect ? (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toSkill)(skillOrEffect) : skillOrEffect;
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(skill["class"]) === (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)((0,_template_string__WEBPACK_IMPORTED_MODULE_1__.$class)(_templateObject())) && skill.buff;
}
/**
 * List all active Effects
 */

function getActiveEffects() {
  return Object.keys((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myEffects)()).map(function (e) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toEffect)(e);
  });
}
/**
 * List currently active Accordion Thief songs
 */

function getActiveSongs() {
  return getActiveEffects().filter(isSong);
}
/**
 * List number of active Accordion Thief songs
 */

function getSongCount() {
  return getActiveSongs().length;
}
/**
 * Return the locations in which the given monster can be encountered naturally
 * @param monster Monster to find
 */

function getMonsterLocations(monster) {
  return Location.all().filter(function (location) {
    return monster.name in (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.appearanceRates)(location);
  });
}
/**
 * Return the player's remaining liver space
 */

function getRemainingLiver() {
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.inebrietyLimit)() - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myInebriety)();
}
/**
 * Return the player's remaining stomach space
 */

function getRemainingStomach() {
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.fullnessLimit)() - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFullness)();
}
/**
 * Return the player's remaining spleen space
 */

function getRemainingSpleen() {
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.spleenLimit)() - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.mySpleenUse)();
}
/**
 * Return whether the player "has" any entity which one could feasibly "have".
 */

function have(thing) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (thing instanceof Effect) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)(thing) >= quantity;
  }

  if (thing instanceof Familiar) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveFamiliar)(thing);
  }

  if (thing instanceof Item) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(thing) >= quantity;
  }

  if (thing instanceof Servant) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveServant)(thing);
  }

  if (thing instanceof Skill) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveSkill)(thing);
  }

  if (thing instanceof Thrall) {
    var thrall = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myThrall)();
    return thrall.id === thing.id && thrall.level >= quantity;
  }

  return false;
}
/**
 * Return whether an item is in the player's campsite
 */

function haveInCampsite(item) {
  return Object.keys((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getCampground)()).map(function (i) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toItem)(i);
  }).find(function (i) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(i) === (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(item);
  }) !== undefined;
}

/***/ }),

/***/ "./node_modules/libram/src/template-string.ts":
/*!****************************************************!*\
  !*** ./node_modules/libram/src/template-string.ts ***!
  \****************************************************/
/*! namespace exports */
/*! export $bounties [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $bounty [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $class [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $classes [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $coinmaster [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $coinmasters [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $effect [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $effects [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $element [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $elements [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $familiar [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $familiars [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $item [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $items [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $location [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $locations [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $monster [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $monsters [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $phyla [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $phylum [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $servant [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $servants [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $skill [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $skills [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $slot [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $slots [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $stat [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $stats [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $thrall [provided] [no usage info] [missing usage info prevents renaming] */
/*! export $thralls [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$bounty": () => /* binding */ $bounty,
/* harmony export */   "$bounties": () => /* binding */ $bounties,
/* harmony export */   "$class": () => /* binding */ $class,
/* harmony export */   "$classes": () => /* binding */ $classes,
/* harmony export */   "$coinmaster": () => /* binding */ $coinmaster,
/* harmony export */   "$coinmasters": () => /* binding */ $coinmasters,
/* harmony export */   "$effect": () => /* binding */ $effect,
/* harmony export */   "$effects": () => /* binding */ $effects,
/* harmony export */   "$element": () => /* binding */ $element,
/* harmony export */   "$elements": () => /* binding */ $elements,
/* harmony export */   "$familiar": () => /* binding */ $familiar,
/* harmony export */   "$familiars": () => /* binding */ $familiars,
/* harmony export */   "$item": () => /* binding */ $item,
/* harmony export */   "$items": () => /* binding */ $items,
/* harmony export */   "$location": () => /* binding */ $location,
/* harmony export */   "$locations": () => /* binding */ $locations,
/* harmony export */   "$monster": () => /* binding */ $monster,
/* harmony export */   "$monsters": () => /* binding */ $monsters,
/* harmony export */   "$phylum": () => /* binding */ $phylum,
/* harmony export */   "$phyla": () => /* binding */ $phyla,
/* harmony export */   "$servant": () => /* binding */ $servant,
/* harmony export */   "$servants": () => /* binding */ $servants,
/* harmony export */   "$skill": () => /* binding */ $skill,
/* harmony export */   "$skills": () => /* binding */ $skills,
/* harmony export */   "$slot": () => /* binding */ $slot,
/* harmony export */   "$slots": () => /* binding */ $slots,
/* harmony export */   "$stat": () => /* binding */ $stat,
/* harmony export */   "$stats": () => /* binding */ $stats,
/* harmony export */   "$thrall": () => /* binding */ $thrall,
/* harmony export */   "$thralls": () => /* binding */ $thralls
/* harmony export */ });
var concatTemplateString = function concatTemplateString(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    placeholders[_key - 1] = arguments[_key];
  }

  return literals.reduce(function (acc, literal, i) {
    return acc + literal + (placeholders[i] || "");
  }, "");
};

var createSingleConstant = function createSingleConstant(Type) {
  return function (literals) {
    for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      placeholders[_key2 - 1] = arguments[_key2];
    }

    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    return Type.get(input);
  };
};

var createPluralConstant = function createPluralConstant(Type) {
  return function (literals) {
    for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      placeholders[_key3 - 1] = arguments[_key3];
    }

    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));

    if (input === "") {
      return Type.all();
    }

    return Type.get(input.split(","));
  };
};
/**
 * A Bounty specified by name.
 */


var $bounty = createSingleConstant(Bounty);
/**
 * A list of Bounties specified by a comma-separated list of names.
 * For a list of all possible Bounties, leave the template string blank.
 */

var $bounties = createPluralConstant(Bounty);
/**
 * A Class specified by name.
 */

var $class = createSingleConstant(Class);
/**
 * A list of Classes specified by a comma-separated list of names.
 * For a list of all possible Classes, leave the template string blank.
 */

var $classes = createPluralConstant(Class);
/**
 * A Coinmaster specified by name.
 */

var $coinmaster = createSingleConstant(Coinmaster);
/**
 * A list of Coinmasters specified by a comma-separated list of names.
 * For a list of all possible Coinmasters, leave the template string blank.
 */

var $coinmasters = createPluralConstant(Coinmaster);
/**
 * An Effect specified by name.
 */

var $effect = createSingleConstant(Effect);
/**
 * A list of Effects specified by a comma-separated list of names.
 * For a list of all possible Effects, leave the template string blank.
 */

var $effects = createPluralConstant(Effect);
/**
 * An Element specified by name.
 */

var $element = createSingleConstant(Element);
/**
 * A list of Elements specified by a comma-separated list of names.
 * For a list of all possible Elements, leave the template string blank.
 */

var $elements = createPluralConstant(Element);
/**
 * A Familiar specified by name.
 */

var $familiar = createSingleConstant(Familiar);
/**
 * A list of Familiars specified by a comma-separated list of names.
 * For a list of all possible Familiars, leave the template string blank.
 */

var $familiars = createPluralConstant(Familiar);
/**
 * An Item specified by name.
 */

var $item = createSingleConstant(Item);
/**
 * A list of Items specified by a comma-separated list of names.
 * For a list of all possible Items, leave the template string blank.
 */

var $items = createPluralConstant(Item);
/**
 * A Location specified by name.
 */

var $location = createSingleConstant(Location);
/**
 * A list of Locations specified by a comma-separated list of names.
 * For a list of all possible Locations, leave the template string blank.
 */

var $locations = createPluralConstant(Location);
/**
 * A Monster specified by name.
 */

var $monster = createSingleConstant(Monster);
/**
 * A list of Monsters specified by a comma-separated list of names.
 * For a list of all possible Monsters, leave the template string blank.
 */

var $monsters = createPluralConstant(Monster);
/**
 * A Phylum specified by name.
 */

var $phylum = createSingleConstant(Phylum);
/**
 * A list of Phyla specified by a comma-separated list of names.
 * For a list of all possible Phyla, leave the template string blank.
 */

var $phyla = createPluralConstant(Phylum);
/**
 * A Servant specified by name.
 */

var $servant = createSingleConstant(Servant);
/**
 * A list of Servants specified by a comma-separated list of names.
 * For a list of all possible Servants, leave the template string blank.
 */

var $servants = createPluralConstant(Servant);
/**
 * A Skill specified by name.
 */

var $skill = createSingleConstant(Skill);
/**
 * A list of Skills specified by a comma-separated list of names.
 * For a list of all possible Skills, leave the template string blank.
 */

var $skills = createPluralConstant(Skill);
/**
 * A Slot specified by name.
 */

var $slot = createSingleConstant(Slot);
/**
 * A list of Slots specified by a comma-separated list of names.
 * For a list of all possible Slots, leave the template string blank.
 */

var $slots = createPluralConstant(Slot);
/**
 * A Stat specified by name.
 */

var $stat = createSingleConstant(Stat);
/**
 * A list of Stats specified by a comma-separated list of names.
 * For a list of all possible Stats, leave the template string blank.
 */

var $stats = createPluralConstant(Stat);
/**
 * A Thrall specified by name.
 */

var $thrall = createSingleConstant(Thrall);
/**
 * A list of Thralls specified by a comma-separated list of names.
 * For a list of all possible Thralls, leave the template string blank.
 */

var $thralls = createPluralConstant(Thrall);

/***/ }),

/***/ "./node_modules/libram/src/utils.ts":
/*!******************************************!*\
  !*** ./node_modules/libram/src/utils.ts ***!
  \******************************************/
/*! namespace exports */
/*! export notNull [provided] [no usage info] [missing usage info prevents renaming] */
/*! export parseNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "notNull": () => /* binding */ notNull,
/* harmony export */   "parseNumber": () => /* binding */ parseNumber
/* harmony export */ });
function notNull(value) {
  return value !== null;
}
function parseNumber(n) {
  return Number.parseInt(n.replace(/,/g, ""));
}

/***/ }),

/***/ "./src/combat.ts":
/*!***********************!*\
  !*** ./src/combat.ts ***!
  \***********************/
/*! namespace exports */
/*! export MODE_CUSTOM [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export MODE_FIND_MONSTER_THEN [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export MODE_FIND_MONSTER_WITH_BANISHES_THEN [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export MODE_KILL [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export MODE_NULL [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export MODE_RUN_UNLESS_FREE [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export Macro [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export adventureCopy [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export adventureKill [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export adventureMacro [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export adventureRunUnlessFree [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export findMonsterSaberYr [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export findMonsterThen [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export getArg1 [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export getArg2 [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export getMode [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export main [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export saberYr [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! export setMode [provided] [maybe used in bcas_combat (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in bcas_combat (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Macro": () => /* binding */ Macro,
/* harmony export */   "MODE_NULL": () => /* binding */ MODE_NULL,
/* harmony export */   "MODE_CUSTOM": () => /* binding */ MODE_CUSTOM,
/* harmony export */   "MODE_FIND_MONSTER_THEN": () => /* binding */ MODE_FIND_MONSTER_THEN,
/* harmony export */   "MODE_FIND_MONSTER_WITH_BANISHES_THEN": () => /* binding */ MODE_FIND_MONSTER_WITH_BANISHES_THEN,
/* harmony export */   "MODE_RUN_UNLESS_FREE": () => /* binding */ MODE_RUN_UNLESS_FREE,
/* harmony export */   "MODE_KILL": () => /* binding */ MODE_KILL,
/* harmony export */   "setMode": () => /* binding */ setMode,
/* harmony export */   "getMode": () => /* binding */ getMode,
/* harmony export */   "getArg1": () => /* binding */ getArg1,
/* harmony export */   "getArg2": () => /* binding */ getArg2,
/* harmony export */   "main": () => /* binding */ main,
/* harmony export */   "saberYr": () => /* binding */ saberYr,
/* harmony export */   "adventureMacro": () => /* binding */ adventureMacro,
/* harmony export */   "adventureKill": () => /* binding */ adventureKill,
/* harmony export */   "findMonsterThen": () => /* binding */ findMonsterThen,
/* harmony export */   "findMonsterSaberYr": () => /* binding */ findMonsterSaberYr,
/* harmony export */   "adventureCopy": () => /* binding */ adventureCopy,
/* harmony export */   "adventureRunUnlessFree": () => /* binding */ adventureRunUnlessFree
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kolmafia */ "kolmafia");
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var libram_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libram/src */ "./node_modules/libram/src/index.ts");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib */ "./src/lib.ts");
function _templateObject29() {
  var data = _taggedTemplateLiteral(["Lecture on Relativity"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["Use the Force"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["Snokebomb"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["Snokebomb"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["Reflex Hammer"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["Reflex Hammer"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["Saucegeyser"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["Sing Along"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["Curse of Weaksauce"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["Louder Than Bomb"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["Louder Than Bomb"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["Creepy Grin"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["Creepy Grin"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["Snokebomb"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["Snokebomb"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["Reflex Hammer"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["Reflex Hammer"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["CHEAT CODE: Replace Enemy"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["CHEAT CODE: Replace Enemy"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["Macrometeorite"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["Macrometeorite"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["Snokebomb"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["Snokebomb"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["Ode to Booze"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["Frumious Bandersnatch"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["Pair of Stomping Boots"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["Saucestorm"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["Saucegeyser"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["Stuffed Mortar Shell"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // multiFight() stolen from Aenimus: https://github.com/Aenimus/aen_cocoabo_farm/blob/master/scripts/aen_combat.ash.
// Thanks! Licensed under MIT license.

function multiFight() {
  while ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.inMultiFight)()) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runCombat)();
  }

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.choiceFollowsFight)()) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)('choice.php');
}

var Macro = /*#__PURE__*/function () {
  function Macro() {
    _classCallCheck(this, Macro);

    _defineProperty(this, "components", []);
  }

  _createClass(Macro, [{
    key: "toString",
    value: function toString() {
      return this.components.join(';');
    }
  }, {
    key: "step",
    value: function step() {
      for (var _len = arguments.length, nextSteps = new Array(_len), _key = 0; _key < _len; _key++) {
        nextSteps[_key] = arguments[_key];
      }

      this.components = this.components.concat(nextSteps.filter(function (s) {
        return s.length > 0;
      }));
      return this;
    }
  }, {
    key: "submit",
    value: function submit() {
      var _final = this.toString();

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Submitting macro: ".concat(_final));
      return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)('fight.php?action=macro&macrotext=' + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.urlEncode)(_final), true, true);
    }
  }, {
    key: "mIf",
    value: function mIf(condition) {
      var _this$step;

      for (var _len2 = arguments.length, next = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        next[_key2 - 1] = arguments[_key2];
      }

      return (_this$step = this.step("if ".concat(condition))).step.apply(_this$step, next).step('endif');
    }
  }, {
    key: "externalIf",
    value: function externalIf(condition) {
      for (var _len3 = arguments.length, next = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        next[_key3 - 1] = arguments[_key3];
      }

      return condition ? this.step.apply(this, next) : this;
    }
  }, {
    key: "repeat",
    value: function repeat() {
      return this.step('repeat');
    }
  }, {
    key: "repeatSubmit",
    value: function repeatSubmit() {
      return this.step('repeat').submit();
    }
  }, {
    key: "skill",
    value: function skill(sk) {
      var name = sk.name.replace('%fn, ', '');
      return this.mIf("hasskill ".concat(name), "skill ".concat(name));
    }
  }, {
    key: "skillRepeat",
    value: function skillRepeat(sk) {
      var name = sk.name.replace('%fn, ', '');
      return this.mIf("hasskill ".concat(name), "skill ".concat(name, ";repeat"));
    }
  }, {
    key: "item",
    value: function item(it) {
      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(it) > 0) {
        return this.step("use ".concat(it.name));
      } else return this;
    }
  }, {
    key: "kill",
    value: function kill() {
      return this.skill((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject())).skillRepeat((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject2())).skillRepeat((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject3()));
    }
  }], [{
    key: "step",
    value: function step() {
      var _Macro;

      return (_Macro = new Macro()).step.apply(_Macro, arguments);
    }
  }, {
    key: "monster",
    value: function monster(foe) {
      return "monstername \"".concat(foe.name);
    }
  }, {
    key: "mIf",
    value: function mIf(condition) {
      var _Macro2;

      for (var _len4 = arguments.length, next = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        next[_key4 - 1] = arguments[_key4];
      }

      return (_Macro2 = new Macro()).mIf.apply(_Macro2, [condition].concat(next));
    }
  }, {
    key: "externalIf",
    value: function externalIf(condition) {
      var _Macro3;

      for (var _len5 = arguments.length, next = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        next[_key5 - 1] = arguments[_key5];
      }

      return (_Macro3 = new Macro()).externalIf.apply(_Macro3, [condition].concat(next));
    }
  }, {
    key: "skill",
    value: function skill(sk) {
      return new Macro().skill(sk);
    }
  }, {
    key: "skillRepeat",
    value: function skillRepeat(sk) {
      return new Macro().skillRepeat(sk);
    }
  }, {
    key: "item",
    value: function item(it) {
      return new Macro().item(it);
    }
  }, {
    key: "kill",
    value: function kill() {
      return new Macro().kill();
    }
  }]);

  return Macro;
}();
var MODE_NULL = '';
var MODE_CUSTOM = 'custom';
var MODE_FIND_MONSTER_THEN = 'findthen';
var MODE_FIND_MONSTER_WITH_BANISHES_THEN = 'findbanishthen';
var MODE_RUN_UNLESS_FREE = 'rununlessfree';
var MODE_KILL = 'kill';
function setMode(mode) {
  var arg1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var arg2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)('bcas_combatMode', mode);
  if (arg1 !== null) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)('bcas_combatArg1', arg1);
  if (arg2 !== null) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)('bcas_combatArg2', arg2);
}
function getMode() {
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)('bcas_combatMode');
}
function getArg1() {
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)('bcas_combatArg1');
}
function getArg2() {
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)('bcas_combatArg2');
}

function banishedMonsters() {
  var banishedstring = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)('banishedMonsters');
  var banishedComponents = banishedstring.split(':');
  var result = {};
  if (banishedComponents.length < 3) return result;

  for (var idx = 0; idx < banishedComponents.length / 3 - 1; idx++) {
    var foe = Monster.get(banishedComponents[idx * 3]);
    var banisher = banishedComponents[idx * 3 + 1];
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Banished ".concat(foe.name, " using ").concat(banisher));
    result[banisher] = foe;
  }

  return result;
}

function usedBanisherInZone(banished, banisher, loc) {
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Checking to see if we've used ".concat(banisher, " in ").concat(loc, "."));
  if (banished[banisher] === undefined) return false;
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Used it to banish ".concat(banished[banisher].name));
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getLocationMonsters)(loc)[banished[banisher].name] === undefined;
}

function canFamiliarRun() {
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFamiliar)() === (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$familiar)(_templateObject4()) || (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFamiliar)() === (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$familiar)(_templateObject5()) && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject6())) > 0 && (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('_banderRunaways') < (0,_lib__WEBPACK_IMPORTED_MODULE_2__.myFamiliarWeight)() / 5;
}

function runawayWithTracking() {
  var banderRunaways = (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('_banderRunaways');
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runaway)();

  if ((0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('_banderRunaways') === banderRunaways) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)('WARNING: Mafia is not tracking bander runaways correctly.');
    (0,_lib__WEBPACK_IMPORTED_MODULE_2__.setPropertyInt)('_banderRunaways', banderRunaways + 1);
  }
}

function main(initround, foe) {
  var mode = getMode();
  var loc = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myLocation)();

  if (mode === MODE_CUSTOM) {
    Macro.step(getArg1()).repeatSubmit();
  } else if (mode === MODE_FIND_MONSTER_THEN) {
    var monsterId = parseInt(getArg1(), 10);
    var desired = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toMonster)(monsterId);
    var banished = banishedMonsters();

    if (foe === desired) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)('bcas_combatFound', 'true');

      if (getArg2() === "kill") {
        new Macro().kill().submit();
      } else {
        new Macro().step(getArg2()).repeatSubmit();
      }
    } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMp)() >= 50 && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject7())) && (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('_snokebombUsed') < 3 && !usedBanisherInZone(banished, 'snokebomb', loc)) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject8()));
      /* } else if (haveSkill($skill`Reflex Hammer`) && getPropertyInt("ReflexHammerUsed") < 3 && !usedBanisherInZone(banished, "Reflex Hammer", loc)) {
          useSkill(1, $skill`Reflex Hammer`); */
    } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject9())) && (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('_macrometeoriteUses') < 10) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject10()));
    } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject11())) && (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('_powerfulGloveBatteryPowerUsed') <= 80) {
      var originalBattery = (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('_powerfulGloveBatteryPowerUsed');
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject12()));
      var newBattery = (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('_powerfulGloveBatteryPowerUsed');

      if (newBattery === originalBattery) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)('WARNING: Mafia is not updating PG battery charge.');
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)('_powerfulGloveBatteryPowerUsed', '' + (newBattery + 10));
      } // Hopefully at this point it comes back to the consult script.

    }
  } else if (mode === MODE_FIND_MONSTER_WITH_BANISHES_THEN) {
    // TODO: https://kol.coldfront.net/thekolwiki/index.php/Banishing
    // A
    var _monsterId = parseInt(getArg1(), 10);

    var _desired = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toMonster)(_monsterId);

    var _banished = banishedMonsters();

    if (foe === _desired) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)('bcas_combatFound', 'true');

      if (getArg2() === "kill") {
        new Macro().kill().submit();
      } else {
        new Macro().step(getArg2()).repeatSubmit();
      }
    } else if (canFamiliarRun()) {
      runawayWithTracking();
    } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject13())) && (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('_reflexHammerUsed') < 3 && !usedBanisherInZone(_banished, 'reflex hammer', loc)) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject14()));
    } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMp)() >= 50 && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject15())) && (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('_snokebombUsed') < 3 && !usedBanisherInZone(_banished, 'snokebomb', loc)) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject16()));
    } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject17())) && !(0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyBoolean)('_creepyGrinUsed')) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject18()));
    } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject19())) > 0 && !usedBanisherInZone(_banished, 'louder than bomb', loc)) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$item)(_templateObject20()));
    } else {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)("Ran out of banishes!");
    }
  } else if (mode === MODE_RUN_UNLESS_FREE) {
    if (foe.attributes.includes('FREE')) {
      new Macro().skill((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject21())).skill((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject22())).skill((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject23())).repeatSubmit();
    } else if (canFamiliarRun()) {
      runawayWithTracking();
    } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject24())) && (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('_reflexHammerUsed') < 3) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject25()));
    } else if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMp)() >= 50 && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject26())) && (0,_lib__WEBPACK_IMPORTED_MODULE_2__.getPropertyInt)('_snokebombUsed') < 3) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject27()));
    } else {
      // non-free, whatever
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runaway)();
    }
  } else if (mode === MODE_KILL) {
    Macro.kill().submit();
  } else {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)('Unrecognized mode.');
  }

  multiFight();
}
function saberYr() {
  if (!(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.handlingChoice)()) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)('No choice?');

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.lastChoice)() === 1387 && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.count)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableChoiceOptions)()) > 0) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runChoice)(3);
  }
}
function adventureMacro(loc, macro) {
  setMode(MODE_CUSTOM, macro.toString());
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.adv1)(loc, -1, '');
  setMode(MODE_NULL, '');
}
function adventureKill(loc) {
  adventureMacro(loc, Macro.kill());
}
function findMonsterThen(loc, foe, macro) {
  setMode(MODE_FIND_MONSTER_THEN, foe.id.toString(), macro.toString());
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)('bcas_combatFound', 'false');

  while ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)('bcas_combatFound') !== 'true') {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.adv1)(loc, -1, '');
  }

  setMode(MODE_NULL, '');
}
function findMonsterSaberYr(loc, foe) {
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)('choiceAdventure1387', '3');
  findMonsterThen(loc, foe, Macro.skill((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject28())));
}
function adventureCopy(loc, foe) {
  setMode(MODE_CUSTOM, Macro.mIf("!monstername \"".concat(foe.name), 'abort').skill((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject29())).kill().toString());
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.adv1)(loc, -1, '');
  setMode(MODE_NULL, '');
}
function adventureRunUnlessFree(loc) {
  setMode(MODE_RUN_UNLESS_FREE);
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.adv1)(loc, -1, '');
  setMode(MODE_NULL);
}

/***/ }),

/***/ "./src/lib.ts":
/*!********************!*\
  !*** ./src/lib.ts ***!
  \********************/
/*! namespace exports */
/*! export cheaper [provided] [no usage info] [missing usage info prevents renaming] */
/*! export chewSafe [provided] [no usage info] [missing usage info prevents renaming] */
/*! export clamp [provided] [no usage info] [missing usage info prevents renaming] */
/*! export drinkSafe [provided] [no usage info] [missing usage info prevents renaming] */
/*! export eatSafe [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ensureEffect [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ensureItem [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ensureOde [provided] [no usage info] [missing usage info prevents renaming] */
/*! export get [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getCapped [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getPropertyBoolean [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getPropertyInt [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getPropertyString [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getStep [provided] [no usage info] [missing usage info prevents renaming] */
/*! export itemPriority [provided] [no usage info] [missing usage info prevents renaming] */
/*! export maximizeCached [provided] [no usage info] [missing usage info prevents renaming] */
/*! export myFamiliarWeight [provided] [no usage info] [missing usage info prevents renaming] */
/*! export openSongSlot [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setChoice [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setClan [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setPropertyInt [provided] [no usage info] [missing usage info prevents renaming] */
/*! export shrug [provided] [no usage info] [missing usage info prevents renaming] */
/*! export totalAmount [provided] [no usage info] [missing usage info prevents renaming] */
/*! export tryEnsureEffect [provided] [no usage info] [missing usage info prevents renaming] */
/*! export tryEnsureSkill [provided] [no usage info] [missing usage info prevents renaming] */
/*! export tryEnsureSong [provided] [no usage info] [missing usage info prevents renaming] */
/*! export trySynthesize [provided] [no usage info] [missing usage info prevents renaming] */
/*! export tryUse [provided] [no usage info] [missing usage info prevents renaming] */
/*! export useIfUnused [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clamp": () => /* binding */ clamp,
/* harmony export */   "getPropertyString": () => /* binding */ getPropertyString,
/* harmony export */   "getPropertyInt": () => /* binding */ getPropertyInt,
/* harmony export */   "getPropertyBoolean": () => /* binding */ getPropertyBoolean,
/* harmony export */   "setPropertyInt": () => /* binding */ setPropertyInt,
/* harmony export */   "itemPriority": () => /* binding */ itemPriority,
/* harmony export */   "cheaper": () => /* binding */ cheaper,
/* harmony export */   "getCapped": () => /* binding */ getCapped,
/* harmony export */   "get": () => /* binding */ get,
/* harmony export */   "eatSafe": () => /* binding */ eatSafe,
/* harmony export */   "drinkSafe": () => /* binding */ drinkSafe,
/* harmony export */   "chewSafe": () => /* binding */ chewSafe,
/* harmony export */   "useIfUnused": () => /* binding */ useIfUnused,
/* harmony export */   "totalAmount": () => /* binding */ totalAmount,
/* harmony export */   "setChoice": () => /* binding */ setChoice,
/* harmony export */   "myFamiliarWeight": () => /* binding */ myFamiliarWeight,
/* harmony export */   "ensureEffect": () => /* binding */ ensureEffect,
/* harmony export */   "tryEnsureEffect": () => /* binding */ tryEnsureEffect,
/* harmony export */   "tryEnsureSkill": () => /* binding */ tryEnsureSkill,
/* harmony export */   "trySynthesize": () => /* binding */ trySynthesize,
/* harmony export */   "shrug": () => /* binding */ shrug,
/* harmony export */   "openSongSlot": () => /* binding */ openSongSlot,
/* harmony export */   "tryEnsureSong": () => /* binding */ tryEnsureSong,
/* harmony export */   "ensureOde": () => /* binding */ ensureOde,
/* harmony export */   "tryUse": () => /* binding */ tryUse,
/* harmony export */   "ensureItem": () => /* binding */ ensureItem,
/* harmony export */   "setClan": () => /* binding */ setClan,
/* harmony export */   "maximizeCached": () => /* binding */ maximizeCached,
/* harmony export */   "getStep": () => /* binding */ getStep
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kolmafia */ "kolmafia");
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var libram_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libram/src */ "./node_modules/libram/src/index.ts");
function _templateObject5() {
  var data = _taggedTemplateLiteral(["The Ode to Booze"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["Ode to Booze"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["Ode to Booze"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["Sweet Synthesis"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["none"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function clamp(n, min, max) {
  return Math.max(min, Math.min(n, max));
}
function getPropertyString(name, def) {
  var str = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)(name);
  return str === '' ? def : str;
}
function getPropertyInt(name) {
  var default_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var str = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)(name);

  if (str === '') {
    if (default_ === null) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)("Unknown property ".concat(name, "."));else return default_;
  }

  return parseInt(str, 10);
}
function getPropertyBoolean(name) {
  var default_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var str = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)(name);

  if (str === '') {
    if (default_ === null) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)("Unknown property ".concat(name, "."));else return default_;
  }

  return str === 'true';
}
function setPropertyInt(name, value) {
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)(name, value.toString());
}
function itemPriority() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }

  if (items.length === 1) return items[0];else return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.itemAmount)(items[0]) > 0 ? items[0] : itemPriority.apply(void 0, _toConsumableArray(items.slice(1)));
}
function cheaper() {
  for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    items[_key2] = arguments[_key2];
  }

  if (items.length === 1) return items[0];else return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.itemAmount)(items[0]) > 0 ? items[0] : itemPriority.apply(void 0, _toConsumableArray(items.slice(1)));
}
var priceCaps = {
  'jar of fermented pickle juice': 75000,
  "Frosty's frosty mug": 45000,
  'extra-greasy slider': 45000,
  "Ol' Scratch's salad fork": 45000,
  'transdermal smoke patch': 7000,
  'voodoo snuff': 36000,
  'blood-drive sticker': 210000,
  'spice melange': 500000,
  'splendid martini': 10000
};
function getCapped(qty, item, maxPrice) {
  if (qty > 15) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)('bad get!');
  var remaining = qty - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.itemAmount)(item);
  if (remaining <= 0) return;
  var getCloset = Math.min(remaining, (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.closetAmount)(item));
  if (!(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.takeCloset)(getCloset, item)) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)('failed to remove from closet');
  remaining -= getCloset;
  if (remaining <= 0) return;
  var getMall = Math.min(remaining, (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.shopAmount)(item));
  if (!(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.takeShop)(getMall, item)) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)('failed to remove from shop');
  remaining -= getMall;
  if (remaining <= 0) return;
  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.buy)(remaining, item, maxPrice) < remaining) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)("Mall price too high for ".concat(item.name, "."));
}
function get(qty, item) {
  getCapped(qty, item, priceCaps[item.name]);
}
function eatSafe(qty, item) {
  get(1, item);
  if (!(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.eat)(qty, item)) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)('Failed to eat safely');
}
function drinkSafe(qty, item) {
  get(1, item);
  if (!(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.drink)(qty, item)) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)('Failed to drink safely');
}
function chewSafe(qty, item) {
  get(1, item);
  if (!(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.chew)(qty, item)) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)('Failed to chew safely');
}

function propTrue(prop) {
  if (typeof prop === 'boolean') {
    return prop;
  } else {
    return getPropertyBoolean(prop);
  }
}

function useIfUnused(item, prop, maxPrice) {
  if (!propTrue(prop)) {
    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.mallPrice)(item) <= maxPrice) {
      getCapped(1, item, maxPrice);
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(1, item);
    } else {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Skipping ".concat(item.name, "; too expensive (").concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.mallPrice)(item), " > ").concat(maxPrice, ")."));
    }
  }
}
function totalAmount(item) {
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.shopAmount)(item) + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.itemAmount)(item);
}
function setChoice(adv, choice) {
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)("choiceAdventure".concat(adv), "".concat(choice));
}
function myFamiliarWeight() {
  return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.familiarWeight)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFamiliar)()) + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.weightAdjustment)();
}
function ensureEffect(ef) {
  var turns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (!tryEnsureEffect(ef, turns)) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)('Failed to get effect ' + ef.name + '.');
  }
}
function tryEnsureEffect(ef) {
  var turns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)(ef) < turns) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)(ef["default"]) && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)(ef) > 0;
  }

  return true;
}
function tryEnsureSkill(sk) {
  var ef = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toEffect)(sk);

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveSkill)(sk) && ef !== (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject()) && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)(ef) === 0) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, sk);
  }
}
function trySynthesize(ef) {
  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)(ef) === 0 && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveSkill)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject2()))) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sweetSynthesis)(ef);
}
function shrug(ef) {
  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)(ef) > 0) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)('shrug ' + ef.name);
  }
} // Mechanics for managing song slots.
// We have Stevedave's, Ur-Kel's on at all times during leveling; third and fourth slots are variable.

var songSlots = [Effect.get(["Stevedave's Shanty of Superiority", "Fat Leon's Phat Loot Lyric"]), Effect.get(["Ur-Kel's Aria of Annoyance"]), Effect.get(['Power Ballad of the Arrowsmith', 'The Magical Mojomuscular Melody', 'The Moxious Madrigal', 'Ode to Booze', "Jackasses' Symphony of Destruction"]), Effect.get(["Carlweather's Cantata of Confrontation", 'The Sonata of Sneakiness', 'Polka of Plenty'])];
function openSongSlot(song) {
  var _iterator = _createForOfIteratorHelper(songSlots),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var songSlot = _step.value;

      if (songSlot.includes(song)) {
        var _iterator2 = _createForOfIteratorHelper(songSlot),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var shruggable = _step2.value;
            shrug(shruggable);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
function tryEnsureSong(sk) {
  var ef = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toEffect)(sk);

  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)(ef) === 0) {
    openSongSlot(ef);

    if (!(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)(ef["default"]) || (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)(ef) === 0) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)('Failed to get effect ' + ef.name + '.');
    }
  } else {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)('Already have effect ' + ef.name + '.');
  }
}
function ensureOde() {
  var turns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  while ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveEffect)((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject3())) < turns) {
    openSongSlot((0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$effect)(_templateObject4()));
    if (!(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.useSkill)(1, (0,libram_src__WEBPACK_IMPORTED_MODULE_1__.$skill)(_templateObject5()))) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)("Couldn't get Ode for some reason.");
  }
}
function tryUse(quantity, it) {
  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(it) > 0) {
    return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.use)(quantity, it);
  } else {
    return false;
  }
}
function ensureItem(qty, it, maxPrice) {
  var remaining = qty - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.itemAmount)(it);
  if (remaining <= 0) return;
  var getCloset = Math.min(remaining, (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.closetAmount)(it));
  if (!(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.takeCloset)(getCloset, it)) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)();
  remaining -= getCloset;
  if (remaining <= 0) return;
  var getMall = Math.min(remaining, (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.shopAmount)(it));
  if (!(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.takeShop)(getMall, it)) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)();
  remaining -= getMall;
  if (remaining <= 0) return;

  if (!(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.retrieveItem)(remaining, it)) {
    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.buy)(remaining, it, maxPrice) < remaining) (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)("Mall price too high for ".concat(it.name, "."));
  }
}
var clanCache = {};
function setClan(target) {
  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getClanName)() !== target) {
    if (clanCache[target] === undefined) {
      var recruiter = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)('clan_signup.php');
      var clanRe = /<option value=([0-9]+)>([^<]+)<\/option>/g;
      var result;

      while ((result = clanRe.exec(recruiter)) !== null) {
        clanCache[result[2]] = parseInt(result[1], 10);
      }
    }

    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("showclan.php?whichclan=".concat(clanCache[target], "&action=joinclan&confirm=on&pwd"));

    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getClanName)() !== target) {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)("failed to switch clans to ".concat(target, ". Did you spell it correctly? Are you whitelisted?"));
    }
  }

  return true;
}
function maximizeCached(objective) {
  objective += objective.length > 0 ? ', equip Powerful Glove' : 'equip Powerful Glove';
  if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)('bcas_objective') === objective) return;
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)('bcas_objective', objective);
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.maximize)(objective, false);
}
function getStep(questName) {
  var stringStep = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)(questName);
  if (stringStep === 'unstarted') return -1;else if (stringStep === 'started') return 0;else if (stringStep === 'finished') return 999;else {
    if (stringStep.substring(0, 4) !== 'step') {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)('Quest state parsing error.');
    }

    return parseInt(stringStep.substring(4), 10);
  }
}

/***/ }),

/***/ "kolmafia":
/*!***************************!*\
  !*** external "kolmafia" ***!
  \***************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("kolmafia");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/combat.ts");
/******/ })()

));