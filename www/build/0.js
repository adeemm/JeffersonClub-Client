webpackJsonp([0],Array(267).concat([
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPageModule", function() { return EventsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic2_calendar__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events__ = __webpack_require__(402);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EventsPageModule = (function () {
    function EventsPageModule() {
    }
    return EventsPageModule;
}());
EventsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__events__["a" /* EventsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic2_calendar__["a" /* NgCalendarModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__events__["a" /* EventsPage */])
        ],
    })
], EventsPageModule);

//# sourceMappingURL=events.module.js.map

/***/ }),
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {//! moment.js
//! version : 2.18.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
     true ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}

function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

function isObjectEmpty(obj) {
    var k;
    for (k in obj) {
        // even if its not own property I'd still call it non-empty
        return false;
    }
    return true;
}

function isUndefined(input) {
    return input === void 0;
}

function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}

function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}

function extend(a, b) {
    for (var i in b) {
        if (hasOwnProp(b, i)) {
            a[i] = b[i];
        }
    }

    if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}

function createUTC (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
}

function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty           : false,
        unusedTokens    : [],
        unusedInput     : [],
        overflow        : -2,
        charsLeftOver   : 0,
        nullInput       : false,
        invalidMonth    : null,
        invalidFormat   : false,
        userInvalidated : false,
        iso             : false,
        parsedDateParts : [],
        meridiem        : null,
        rfc2822         : false,
        weekdayMismatch : false
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}

var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}

var some$1 = some;

function isValid(m) {
    if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some$1.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid (flags) {
    var m = createUTC(NaN);
    if (flags != null) {
        extend(getParsingFlags(m), flags);
    }
    else {
        getParsingFlags(m).userInvalidated = true;
    }

    return m;
}

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = hooks.momentProperties = [];

function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
        to._i = from._i;
    }
    if (!isUndefined(from._f)) {
        to._f = from._f;
    }
    if (!isUndefined(from._l)) {
        to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
        to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
        to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

var updateInProgress = false;

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment (obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
}

function absFloor (number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}

function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }

    return value;
}

// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false &&
            (typeof console !==  'undefined') && console.warn) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return extend(function () {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [];
            var arg;
            for (var i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (var key in arguments[0]) {
                        arg += key + ': ' + arguments[0][key] + ', ';
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments[i];
                }
                args.push(arg);
            }
            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

function set (config) {
    var prop, i;
    for (i in config) {
        prop = config[i];
        if (isFunction(prop)) {
            this[i] = prop;
        } else {
            this['_' + i] = prop;
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            '|' + (/\d{1,2}/).source);
}

function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
        }
    }
    return res;
}

function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}

var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i, res = [];
        for (i in obj) {
            if (hasOwnProp(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

var keys$1 = keys;

var defaultCalendar = {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
};

function calendar (key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
}

var defaultLongDateFormat = {
    LTS  : 'h:mm:ss A',
    LT   : 'h:mm A',
    L    : 'MM/DD/YYYY',
    LL   : 'MMMM D, YYYY',
    LLL  : 'MMMM D, YYYY h:mm A',
    LLLL : 'dddd, MMMM D, YYYY h:mm A'
};

function longDateFormat (key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
        return val.slice(1);
    });

    return this._longDateFormat[key];
}

var defaultInvalidDate = 'Invalid date';

function invalidDate () {
    return this._invalidDate;
}

var defaultOrdinal = '%d';
var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

function ordinal (number) {
    return this._ordinal.replace('%d', number);
}

var defaultRelativeTime = {
    future : 'in %s',
    past   : '%s ago',
    s  : 'a few seconds',
    ss : '%d seconds',
    m  : 'a minute',
    mm : '%d minutes',
    h  : 'an hour',
    hh : '%d hours',
    d  : 'a day',
    dd : '%d days',
    M  : 'a month',
    MM : '%d months',
    y  : 'a year',
    yy : '%d years'
};

function relativeTime (number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ?
        output(number, withoutSuffix, string, isFuture) :
        output.replace(/%d/i, number);
}

function pastFuture (diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
}

var aliases = {};

function addUnitAlias (unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}

var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [];
    for (var u in unitsObj) {
        units.push({unit: u, priority: priorities[u]});
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}

function makeGetSet (unit, keepTime) {
    return function (value) {
        if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

function get (mom, unit) {
    return mom.isValid() ?
        mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}

function set$1 (mom, unit, value) {
    if (mom.isValid()) {
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }
}

// MOMENTS

function stringGet (units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
        return this[units]();
    }
    return this;
}


function stringSet (units, value) {
    if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);
        for (var i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units](value);
        }
    }
    return this;
}

function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

var formatFunctions = {};

var formatTokenFunctions = {};

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken (token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens), i, length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '', i;
        for (i = 0; i < length; i++) {
            output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}

var match1         = /\d/;            //       0 - 9
var match2         = /\d\d/;          //      00 - 99
var match3         = /\d{3}/;         //     000 - 999
var match4         = /\d{4}/;         //    0000 - 9999
var match6         = /[+-]?\d{6}/;    // -999999 - 999999
var match1to2      = /\d\d?/;         //       0 - 99
var match3to4      = /\d\d\d\d?/;     //     999 - 9999
var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3      = /\d{1,3}/;       //       0 - 999
var match1to4      = /\d{1,4}/;       //       0 - 9999
var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

var matchUnsigned  = /\d+/;           //       0 - inf
var matchSigned    = /[+-]?\d+/;      //    -inf - inf

var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


var regexes = {};

function addRegexToken (token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}

function getParseRegexForToken (token, config) {
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
    }));
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var tokens = {};

function addParseToken (token, callback) {
    var i, func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if (isNumber(callback)) {
        func = function (input, array) {
            array[callback] = toInt(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken (token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}

var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;

var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}

var indexOf$1 = indexOf;

function daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
}

// FORMATTING

addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

addUnitAlias('month', 'M');

// PRIORITY

addUnitPriority('month', 8);

// PARSING

addRegexToken('M',    match1to2);
addRegexToken('MM',   match1to2, match2);
addRegexToken('MMM',  function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
});

addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[MONTH] = month;
    } else {
        getParsingFlags(config).invalidMonth = input;
    }
});

// LOCALES

var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths (m, format) {
    if (!m) {
        return isArray(this._months) ? this._months :
            this._months['standalone'];
    }
    return isArray(this._months) ? this._months[m.month()] :
        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}

var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
function localeMonthsShort (m, format) {
    if (!m) {
        return isArray(this._monthsShort) ? this._monthsShort :
            this._monthsShort['standalone'];
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
        this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse (monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }
        if (!strict && !this._monthsParse[i]) {
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
            return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
            return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth (mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = toInt(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!isNumber(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth (value) {
    if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
    } else {
        return get(this, 'Month');
    }
}

function getDaysInMonth () {
    return daysInMonth(this.year(), this.month());
}

var defaultMonthsShortRegex = matchWord;
function monthsShortRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    }
}

var defaultMonthsRegex = matchWord;
function monthsRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    }
}

function computeMonthsParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
}

// FORMATTING

addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
});

addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

addFormatToken(0, ['YYYY',   4],       0, 'year');
addFormatToken(0, ['YYYYY',  5],       0, 'year');
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

addUnitAlias('year', 'y');

// PRIORITIES

addUnitPriority('year', 1);

// PARSING

addRegexToken('Y',      matchSigned);
addRegexToken('YY',     match1to2, match2);
addRegexToken('YYYY',   match1to4, match4);
addRegexToken('YYYYY',  match1to6, match6);
addRegexToken('YYYYYY', match1to6, match6);

addParseToken(['YYYYY', 'YYYYYY'], YEAR);
addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// HOOKS

hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = makeGetSet('FullYear', true);

function getIsLeapYear () {
    return isLeapYear(this.year());
}

function createDate (y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date = new Date(y, m, d, h, M, s, ms);

    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}

function createUTCDate (y) {
    var date = new Date(Date.UTC.apply(null, arguments));

    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}

// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear, resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek, resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

// FORMATTING

addFormatToken('w', ['ww', 2], 'wo', 'week');
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

addUnitAlias('week', 'w');
addUnitAlias('isoWeek', 'W');

// PRIORITIES

addUnitPriority('week', 5);
addUnitPriority('isoWeek', 5);

// PARSING

addRegexToken('w',  match1to2);
addRegexToken('ww', match1to2, match2);
addRegexToken('W',  match1to2);
addRegexToken('WW', match1to2, match2);

addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
});

// HELPERS

// LOCALES

function localeWeek (mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow : 0, // Sunday is the first day of the week.
    doy : 6  // The week that contains Jan 1st is the first week of the year.
};

function localeFirstDayOfWeek () {
    return this._week.dow;
}

function localeFirstDayOfYear () {
    return this._week.doy;
}

// MOMENTS

function getSetWeek (input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek (input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}

// FORMATTING

addFormatToken('d', 0, 'do', 'day');

addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

addFormatToken('e', 0, 0, 'weekday');
addFormatToken('E', 0, 0, 'isoWeekday');

// ALIASES

addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E');

// PRIORITY
addUnitPriority('day', 11);
addUnitPriority('weekday', 11);
addUnitPriority('isoWeekday', 11);

// PARSING

addRegexToken('d',    match1to2);
addRegexToken('e',    match1to2);
addRegexToken('E',    match1to2);
addRegexToken('dd',   function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
addRegexToken('ddd',   function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
addRegexToken('dddd',   function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        getParsingFlags(config).invalidWeekday = input;
    }
});

addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
function localeWeekdays (m, format) {
    if (!m) {
        return isArray(this._weekdays) ? this._weekdays :
            this._weekdays['standalone'];
    }
    return isArray(this._weekdays) ? this._weekdays[m.day()] :
        this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
}

var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
function localeWeekdaysShort (m) {
    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}

var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
function localeWeekdaysMin (m) {
    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse$1(weekdayName, format, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = indexOf$1.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse (weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = createUTC([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
        }
        if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

var defaultWeekdaysRegex = matchWord;
function weekdaysRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ?
            this._weekdaysStrictRegex : this._weekdaysRegex;
    }
}

var defaultWeekdaysShortRegex = matchWord;
function weekdaysShortRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ?
            this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
}

var defaultWeekdaysMinRegex = matchWord;
function weekdaysMinRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ?
            this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
}


function computeWeekdaysParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this.weekdaysMin(mom, '');
        shortp = this.weekdaysShort(mom, '');
        longp = this.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}

// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

addFormatToken('H', ['HH', 2], 0, 'hour');
addFormatToken('h', ['hh', 2], 0, hFormat);
addFormatToken('k', ['kk', 2], 0, kFormat);

addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});

addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
});

addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

function meridiem (token, lowercase) {
    addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

addUnitAlias('hour', 'h');

// PRIORITY
addUnitPriority('hour', 13);

// PARSING

function matchMeridiem (isStrict, locale) {
    return locale._meridiemParse;
}

addRegexToken('a',  matchMeridiem);
addRegexToken('A',  matchMeridiem);
addRegexToken('H',  match1to2);
addRegexToken('h',  match1to2);
addRegexToken('k',  match1to2);
addRegexToken('HH', match1to2, match2);
addRegexToken('hh', match1to2, match2);
addRegexToken('kk', match1to2, match2);

addRegexToken('hmm', match3to4);
addRegexToken('hmmss', match5to6);
addRegexToken('Hmm', match3to4);
addRegexToken('Hmmss', match5to6);

addParseToken(['H', 'HH'], HOUR);
addParseToken(['k', 'kk'], function (input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
});
addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
});
addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
});
addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
});

// LOCALES

function localeIsPM (input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return ((input + '').toLowerCase().charAt(0) === 'p');
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem (hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
var getSetHour = makeGetSet('Hours', true);

// months
// week
// weekdays
// meridiem
var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse
};

// internal storage for locale config files
var locales = {};
var localeFamilies = {};
var globalLocale;

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0, j, next, locale, split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}

function loadLocale(name) {
    var oldLocale = null;
    // TODO: Find a better way to register and load all the locales in Node
    if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
        try {
            oldLocale = globalLocale._abbr;
            __webpack_require__(404)("./" + name);
            // because defineLocale currently also sets the global locale, we
            // want to undo that for lazy loaded locales
            getSetGlobalLocale(oldLocale);
        } catch (e) { }
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale (key, values) {
    var data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        }
    }

    return globalLocale._abbr;
}

function defineLocale (name, config) {
    if (config !== null) {
        var parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                    name: name,
                    config: config
                });
                return null;
            }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);


        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale, parentConfig = baseConfig;
        // MERGE
        if (locales[name] != null) {
            parentConfig = locales[name]._config;
        }
        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale (key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return keys$1(locales);
}

function checkOverflow (m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
        overflow =
            a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
            a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
            a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
            a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
            -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
        }
        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
        }
        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
    }

    return m;
}

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/],
    ['YYYYMMDD', /\d{8}/],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/]
];

// iso time formats and regexes
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];

var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
function configFromISO(config) {
    var i, l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime, dateFormat, timeFormat, tzFormat;

    if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
    } else {
        config._isValid = false;
    }
}

// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
var basicRfcRegex = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;

// date and time from ref 2822 format
function configFromRFC2822(config) {
    var string, match, dayFormat,
        dateFormat, timeFormat, tzFormat;
    var timezones = {
        ' GMT': ' +0000',
        ' EDT': ' -0400',
        ' EST': ' -0500',
        ' CDT': ' -0500',
        ' CST': ' -0600',
        ' MDT': ' -0600',
        ' MST': ' -0700',
        ' PDT': ' -0700',
        ' PST': ' -0800'
    };
    var military = 'YXWVUTSRQPONZABCDEFGHIKLM';
    var timezone, timezoneIndex;

    string = config._i
        .replace(/\([^\)]*\)|[\n\t]/g, ' ') // Remove comments and folding whitespace
        .replace(/(\s\s+)/g, ' ') // Replace multiple-spaces with a single space
        .replace(/^\s|\s$/g, ''); // Remove leading and trailing spaces
    match = basicRfcRegex.exec(string);

    if (match) {
        dayFormat = match[1] ? 'ddd' + ((match[1].length === 5) ? ', ' : ' ') : '';
        dateFormat = 'D MMM ' + ((match[2].length > 10) ? 'YYYY ' : 'YY ');
        timeFormat = 'HH:mm' + (match[4] ? ':ss' : '');

        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
        if (match[1]) { // day of week given
            var momentDate = new Date(match[2]);
            var momentDay = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][momentDate.getDay()];

            if (match[1].substr(0,3) !== momentDay) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return;
            }
        }

        switch (match[5].length) {
            case 2: // military
                if (timezoneIndex === 0) {
                    timezone = ' +0000';
                } else {
                    timezoneIndex = military.indexOf(match[5][1].toUpperCase()) - 12;
                    timezone = ((timezoneIndex < 0) ? ' -' : ' +') +
                        (('' + timezoneIndex).replace(/^-?/, '0')).match(/..$/)[0] + '00';
                }
                break;
            case 4: // Zone
                timezone = timezones[match[5]];
                break;
            default: // UT or +/-9999
                timezone = timezones[' GMT'];
        }
        match[5] = timezone;
        config._i = match.splice(1).join('');
        tzFormat = ' ZZ';
        config._f = dayFormat + dateFormat + timeFormat + tzFormat;
        configFromStringAndFormat(config);
        getParsingFlags(config).rfc2822 = true;
    } else {
        config._isValid = false;
    }
}

// date from iso format or fallback
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    configFromRFC2822(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    // Final attempt, use Input Fallback
    hooks.createFromInputFallback(config);
}

hooks.createFromInputFallback = deprecate(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
    'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
    'discouraged and will be removed in an upcoming major release. Please refer to ' +
    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);

// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray (config) {
    var i, date, input = [], currentDate, yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[HOUR] = 24;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        var curWeek = weekOfYear(createLocal(), dow, doy);

        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

        // Default to current week.
        week = defaults(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
    } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}

// constant that refers to the ISO standard
hooks.ISO_8601 = function () {};

// constant that refers to the RFC 2822 form
hooks.RFC_2822 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
    }
    if (config._f === hooks.RFC_2822) {
        configFromRFC2822(config);
        return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i, parsedInput, tokens, token, skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;

    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    configFromArray(config);
    checkOverflow(config);
}


function meridiemFixWrap (locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}

// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,

        scoreToBeat,
        i,
        currentScore;

    if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
            continue;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;

        //or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }

    extend(config, bestMoment || tempConfig);
}

function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
    });

    configFromArray(config);
}

function createFromConfig (config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig (config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || (format === undefined && input === '')) {
        return createInvalid({nullInput: true});
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
        return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
        config._d = input;
    } else if (isArray(format)) {
        configFromStringAndArray(config);
    } else if (format) {
        configFromStringAndFormat(config);
    }  else {
        configFromInput(config);
    }

    if (!isValid(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if (isUndefined(input)) {
        config._d = new Date(hooks.now());
    } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        configFromString(config);
    } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        configFromArray(config);
    } else if (isObject(input)) {
        configFromObject(config);
    } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        hooks.createFromInputFallback(config);
    }
}

function createLocalOrUTC (input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if ((isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}

function createLocal (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
}

var prototypeMin = deprecate(
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

var prototypeMax = deprecate(
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}

var now = function () {
    return Date.now ? Date.now() : +(new Date());
};

var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

function isDurationValid(m) {
    for (var key in m) {
        if (!(ordering.indexOf(key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
        }
    }

    var unitHasDecimal = false;
    for (var i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
            if (unitHasDecimal) {
                return false; // only allow non-integers for smallest unit
            }
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }

    return true;
}

function isValid$1() {
    return this._isValid;
}

function createInvalid$1() {
    return createDuration(NaN);
}

function Duration (duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    this._isValid = isDurationValid(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds = +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days +
        weeks * 7;
    // It is impossible translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months +
        quarters * 3 +
        years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
}

function isDuration (obj) {
    return obj instanceof Duration;
}

function absRound (number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}

// FORMATTING

function offset (token, separator) {
    addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset();
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

addRegexToken('Z',  matchShortOffset);
addRegexToken('ZZ', matchShortOffset);
addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
        return null;
    }

    var chunk   = matches[matches.length - 1] || [];
    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ?
      0 :
      parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        hooks.updateOffset(res, false);
        return res;
    } else {
        return createLocal(input).local();
    }
}

function getDateOffset (m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset (input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone (input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC (keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal (keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset () {
    if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        }
        else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset (input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime () {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted () {
    if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {};

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() &&
            compareArrays(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal () {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset () {
    return this.isValid() ? this._isUTC : false;
}

function isUtc () {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}

// ASP.NET json date format regex
var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

function createDuration (input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if (isDuration(input)) {
        duration = {
            ms : input._milliseconds,
            d  : input._days,
            M  : input._months
        };
    } else if (isNumber(input)) {
        duration = {};
        if (key) {
            duration[key] = input;
        } else {
            duration.milliseconds = input;
        }
    } else if (!!(match = aspNetRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y  : 0,
            d  : toInt(match[DATE])                         * sign,
            h  : toInt(match[HOUR])                         * sign,
            m  : toInt(match[MINUTE])                       * sign,
            s  : toInt(match[SECOND])                       * sign,
            ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
        };
    } else if (!!(match = isoRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y : parseIso(match[2], sign),
            M : parseIso(match[3], sign),
            w : parseIso(match[4], sign),
            d : parseIso(match[5], sign),
            h : parseIso(match[6], sign),
            m : parseIso(match[7], sign),
            s : parseIso(match[8], sign)
        };
    } else if (duration == null) {// checks for null or undefined
        duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
    }

    return ret;
}

createDuration.fn = Duration.prototype;
createDuration.invalid = createInvalid$1;

function parseIso (inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {milliseconds: 0, months: 0};

    res.months = other.month() - base.month() +
        (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return {milliseconds: 0, months: 0};
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}

// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
            'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val; val = period; period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract (mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (days) {
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }
    if (months) {
        setMonth(mom, get(mom, 'Month') + months * isAdding);
    }
    if (updateOffset) {
        hooks.updateOffset(mom, days || months);
    }
}

var add      = createAdder(1, 'add');
var subtract = createAdder(-1, 'subtract');

function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
            diff < 0 ? 'lastDay' :
            diff < 1 ? 'sameDay' :
            diff < 2 ? 'nextDay' :
            diff < 7 ? 'nextWeek' : 'sameElse';
}

function calendar$1 (time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';

    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
}

function clone () {
    return new Moment(this);
}

function isAfter (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween (from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
        (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
}

function isSame (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
}

function isSameOrAfter (input, units) {
    return this.isSame(input, units) || this.isAfter(input,units);
}

function isSameOrBefore (input, units) {
    return this.isSame(input, units) || this.isBefore(input,units);
}

function diff (input, units, asFloat) {
    var that,
        zoneDelta,
        delta, output;

    if (!this.isValid()) {
        return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    if (units === 'year' || units === 'month' || units === 'quarter') {
        output = monthDiff(this, that);
        if (units === 'quarter') {
            output = output / 3;
        } else if (units === 'year') {
            output = output / 12;
        }
    } else {
        delta = this - that;
        output = units === 'second' ? delta / 1e3 : // 1000
            units === 'minute' ? delta / 6e4 : // 1000 * 60
            units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
            units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
            units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
            delta;
    }
    return asFloat ? output : absFloor(output);
}

function monthDiff (a, b) {
    // difference in months
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2, adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}

hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString () {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString() {
    if (!this.isValid()) {
        return null;
    }
    var m = this.clone().utc();
    if (m.year() < 0 || m.year() > 9999) {
        return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    }
    if (isFunction(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        return this.toDate().toISOString();
    }
    return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect () {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment';
    var zone = '';
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    var prefix = '[' + func + '("]';
    var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format (inputString) {
    if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
}

function from (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
}

function to (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow (withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
}

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale (key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = deprecate(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData () {
    return this._locale;
}

function startOf (units) {
    units = normalizeUnits(units);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
    }

    // weeks are a special case
    if (units === 'week') {
        this.weekday(0);
    }
    if (units === 'isoWeek') {
        this.isoWeekday(1);
    }

    // quarters are also special
    if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
}

function endOf (units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
        return this;
    }

    // 'date' is an alias for 'day', so it should be considered as such.
    if (units === 'date') {
        units = 'day';
    }

    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
}

function valueOf () {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
}

function unix () {
    return Math.floor(this.valueOf() / 1000);
}

function toDate () {
    return new Date(this.valueOf());
}

function toArray () {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}

function toObject () {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
    };
}

function toJSON () {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}

function isValid$2 () {
    return isValid(this);
}

function parsingFlags () {
    return extend({}, getParsingFlags(this));
}

function invalidAt () {
    return getParsingFlags(this).overflow;
}

function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    };
}

// FORMATTING

addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken (token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg',     'weekYear');
addWeekYearFormatToken('ggggg',    'weekYear');
addWeekYearFormatToken('GGGG',  'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

addUnitAlias('weekYear', 'gg');
addUnitAlias('isoWeekYear', 'GG');

// PRIORITY

addUnitPriority('weekYear', 1);
addUnitPriority('isoWeekYear', 1);


// PARSING

addRegexToken('G',      matchSigned);
addRegexToken('g',      matchSigned);
addRegexToken('GG',     match1to2, match2);
addRegexToken('gg',     match1to2, match2);
addRegexToken('GGGG',   match1to4, match4);
addRegexToken('gggg',   match1to4, match4);
addRegexToken('GGGGG',  match1to6, match6);
addRegexToken('ggggg',  match1to6, match6);

addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
});

addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy);
}

function getSetISOWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input, this.isoWeek(), this.isoWeekday(), 1, 4);
}

function getISOWeeksInYear () {
    return weeksInYear(this.year(), 1, 4);
}

function getWeeksInYear () {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return weekOfYear(this, dow, doy).year;
    } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PRIORITY

addUnitPriority('quarter', 7);

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}

// FORMATTING

addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

addUnitAlias('date', 'D');

// PRIOROITY
addUnitPriority('date', 9);

// PARSING

addRegexToken('D',  match1to2);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict ?
      (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
      locale._dayOfMonthOrdinalParseLenient;
});

addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0], 10);
});

// MOMENTS

var getSetDayOfMonth = makeGetSet('Date', true);

// FORMATTING

addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

addUnitAlias('dayOfYear', 'DDD');

// PRIORITY
addUnitPriority('dayOfYear', 4);

// PARSING

addRegexToken('DDD',  match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear (input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
}

// FORMATTING

addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

addUnitAlias('minute', 'm');

// PRIORITY

addUnitPriority('minute', 14);

// PARSING

addRegexToken('m',  match1to2);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

var getSetMinute = makeGetSet('Minutes', false);

// FORMATTING

addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

addUnitAlias('second', 's');

// PRIORITY

addUnitPriority('second', 15);

// PARSING

addRegexToken('s',  match1to2);
addRegexToken('ss', match1to2, match2);
addParseToken(['s', 'ss'], SECOND);

// MOMENTS

var getSetSecond = makeGetSet('Seconds', false);

// FORMATTING

addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

addFormatToken(0, ['SSS', 3], 0, 'millisecond');
addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});


// ALIASES

addUnitAlias('millisecond', 'ms');

// PRIORITY

addUnitPriority('millisecond', 16);

// PARSING

addRegexToken('S',    match1to3, match1);
addRegexToken('SS',   match1to3, match2);
addRegexToken('SSS',  match1to3, match3);

var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
}

function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
}
// MOMENTS

var getSetMillisecond = makeGetSet('Milliseconds', false);

// FORMATTING

addFormatToken('z',  0, 0, 'zoneAbbr');
addFormatToken('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr () {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName () {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}

var proto = Moment.prototype;

proto.add               = add;
proto.calendar          = calendar$1;
proto.clone             = clone;
proto.diff              = diff;
proto.endOf             = endOf;
proto.format            = format;
proto.from              = from;
proto.fromNow           = fromNow;
proto.to                = to;
proto.toNow             = toNow;
proto.get               = stringGet;
proto.invalidAt         = invalidAt;
proto.isAfter           = isAfter;
proto.isBefore          = isBefore;
proto.isBetween         = isBetween;
proto.isSame            = isSame;
proto.isSameOrAfter     = isSameOrAfter;
proto.isSameOrBefore    = isSameOrBefore;
proto.isValid           = isValid$2;
proto.lang              = lang;
proto.locale            = locale;
proto.localeData        = localeData;
proto.max               = prototypeMax;
proto.min               = prototypeMin;
proto.parsingFlags      = parsingFlags;
proto.set               = stringSet;
proto.startOf           = startOf;
proto.subtract          = subtract;
proto.toArray           = toArray;
proto.toObject          = toObject;
proto.toDate            = toDate;
proto.toISOString       = toISOString;
proto.inspect           = inspect;
proto.toJSON            = toJSON;
proto.toString          = toString;
proto.unix              = unix;
proto.valueOf           = valueOf;
proto.creationData      = creationData;

// Year
proto.year       = getSetYear;
proto.isLeapYear = getIsLeapYear;

// Week Year
proto.weekYear    = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;

// Quarter
proto.quarter = proto.quarters = getSetQuarter;

// Month
proto.month       = getSetMonth;
proto.daysInMonth = getDaysInMonth;

// Week
proto.week           = proto.weeks        = getSetWeek;
proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
proto.weeksInYear    = getWeeksInYear;
proto.isoWeeksInYear = getISOWeeksInYear;

// Day
proto.date       = getSetDayOfMonth;
proto.day        = proto.days             = getSetDayOfWeek;
proto.weekday    = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear  = getSetDayOfYear;

// Hour
proto.hour = proto.hours = getSetHour;

// Minute
proto.minute = proto.minutes = getSetMinute;

// Second
proto.second = proto.seconds = getSetSecond;

// Millisecond
proto.millisecond = proto.milliseconds = getSetMillisecond;

// Offset
proto.utcOffset            = getSetOffset;
proto.utc                  = setOffsetToUTC;
proto.local                = setOffsetToLocal;
proto.parseZone            = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST                = isDaylightSavingTime;
proto.isLocal              = isLocal;
proto.isUtcOffset          = isUtcOffset;
proto.isUtc                = isUtc;
proto.isUTC                = isUtc;

// Timezone
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;

// Deprecations
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

function createUnix (input) {
    return createLocal(input * 1000);
}

function createInZone () {
    return createLocal.apply(null, arguments).parseZone();
}

function preParsePostFormat (string) {
    return string;
}

var proto$1 = Locale.prototype;

proto$1.calendar        = calendar;
proto$1.longDateFormat  = longDateFormat;
proto$1.invalidDate     = invalidDate;
proto$1.ordinal         = ordinal;
proto$1.preparse        = preParsePostFormat;
proto$1.postformat      = preParsePostFormat;
proto$1.relativeTime    = relativeTime;
proto$1.pastFuture      = pastFuture;
proto$1.set             = set;

// Month
proto$1.months            =        localeMonths;
proto$1.monthsShort       =        localeMonthsShort;
proto$1.monthsParse       =        localeMonthsParse;
proto$1.monthsRegex       = monthsRegex;
proto$1.monthsShortRegex  = monthsShortRegex;

// Week
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;

// Day of Week
proto$1.weekdays       =        localeWeekdays;
proto$1.weekdaysMin    =        localeWeekdaysMin;
proto$1.weekdaysShort  =        localeWeekdaysShort;
proto$1.weekdaysParse  =        localeWeekdaysParse;

proto$1.weekdaysRegex       =        weekdaysRegex;
proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

// Hours
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;

function get$1 (format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl (format, index, field) {
    if (isNumber(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get$1(format, index, field, 'month');
    }

    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get$1(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl (localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
        return get$1(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
        out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths (format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort (format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}

getSetGlobalLocale('en', {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (toInt(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

// Side effect imports
hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

var mathAbs = Math.abs;

function abs () {
    var data           = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days         = mathAbs(this._days);
    this._months       = mathAbs(this._months);

    data.milliseconds  = mathAbs(data.milliseconds);
    data.seconds       = mathAbs(data.seconds);
    data.minutes       = mathAbs(data.minutes);
    data.hours         = mathAbs(data.hours);
    data.months        = mathAbs(data.months);
    data.years         = mathAbs(data.years);

    return this;
}

function addSubtract$1 (duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days         += direction * other._days;
    duration._months       += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add$1 (input, value) {
    return addSubtract$1(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract$1 (input, value) {
    return addSubtract$1(this, input, value, -1);
}

function absCeil (number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}

function bubble () {
    var milliseconds = this._milliseconds;
    var days         = this._days;
    var months       = this._months;
    var data         = this._data;
    var seconds, minutes, hours, years, monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds           = absFloor(milliseconds / 1000);
    data.seconds      = seconds % 60;

    minutes           = absFloor(seconds / 60);
    data.minutes      = minutes % 60;

    hours             = absFloor(minutes / 60);
    data.hours        = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days   = days;
    data.months = months;
    data.years  = years;

    return this;
}

function daysToMonths (days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
}

function monthsToDays (months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
}

function as (units) {
    if (!this.isValid()) {
        return NaN;
    }
    var days;
    var months;
    var milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
        days   = this._days   + milliseconds / 864e5;
        months = this._months + daysToMonths(days);
        return units === 'month' ? months : months / 12;
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week'   : return days / 7     + milliseconds / 6048e5;
            case 'day'    : return days         + milliseconds / 864e5;
            case 'hour'   : return days * 24    + milliseconds / 36e5;
            case 'minute' : return days * 1440  + milliseconds / 6e4;
            case 'second' : return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
            default: throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf$1 () {
    if (!this.isValid()) {
        return NaN;
    }
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        toInt(this._months / 12) * 31536e6
    );
}

function makeAs (alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms');
var asSeconds      = makeAs('s');
var asMinutes      = makeAs('m');
var asHours        = makeAs('h');
var asDays         = makeAs('d');
var asWeeks        = makeAs('w');
var asMonths       = makeAs('M');
var asYears        = makeAs('y');

function get$2 (units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + 's']() : NaN;
}

function makeGetter(name) {
    return function () {
        return this.isValid() ? this._data[name] : NaN;
    };
}

var milliseconds = makeGetter('milliseconds');
var seconds      = makeGetter('seconds');
var minutes      = makeGetter('minutes');
var hours        = makeGetter('hours');
var days         = makeGetter('days');
var months       = makeGetter('months');
var years        = makeGetter('years');

function weeks () {
    return absFloor(this.days() / 7);
}

var round = Math.round;
var thresholds = {
    ss: 44,         // a few seconds to seconds
    s : 45,         // seconds to minute
    m : 45,         // minutes to hour
    h : 22,         // hours to day
    d : 26,         // days to month
    M : 11          // months to year
};

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds  = round(duration.as('s'));
    var minutes  = round(duration.as('m'));
    var hours    = round(duration.as('h'));
    var days     = round(duration.as('d'));
    var months   = round(duration.as('M'));
    var years    = round(duration.as('y'));

    var a = seconds <= thresholds.ss && ['s', seconds]  ||
            seconds < thresholds.s   && ['ss', seconds] ||
            minutes <= 1             && ['m']           ||
            minutes < thresholds.m   && ['mm', minutes] ||
            hours   <= 1             && ['h']           ||
            hours   < thresholds.h   && ['hh', hours]   ||
            days    <= 1             && ['d']           ||
            days    < thresholds.d   && ['dd', days]    ||
            months  <= 1             && ['M']           ||
            months  < thresholds.M   && ['MM', months]  ||
            years   <= 1             && ['y']           || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding (roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof(roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold (threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
        thresholds.ss = limit - 1;
    }
    return true;
}

function humanize (withSuffix) {
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}

var abs$1 = Math.abs;

function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var seconds = abs$1(this._milliseconds) / 1000;
    var days         = abs$1(this._days);
    var months       = abs$1(this._months);
    var minutes, hours, years;

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes           = absFloor(seconds / 60);
    hours             = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years  = absFloor(months / 12);
    months %= 12;


    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds;
    var total = this.asSeconds();

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    return (total < 0 ? '-' : '') +
        'P' +
        (Y ? Y + 'Y' : '') +
        (M ? M + 'M' : '') +
        (D ? D + 'D' : '') +
        ((h || m || s) ? 'T' : '') +
        (h ? h + 'H' : '') +
        (m ? m + 'M' : '') +
        (s ? s + 'S' : '');
}

var proto$2 = Duration.prototype;

proto$2.isValid        = isValid$1;
proto$2.abs            = abs;
proto$2.add            = add$1;
proto$2.subtract       = subtract$1;
proto$2.as             = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds      = asSeconds;
proto$2.asMinutes      = asMinutes;
proto$2.asHours        = asHours;
proto$2.asDays         = asDays;
proto$2.asWeeks        = asWeeks;
proto$2.asMonths       = asMonths;
proto$2.asYears        = asYears;
proto$2.valueOf        = valueOf$1;
proto$2._bubble        = bubble;
proto$2.get            = get$2;
proto$2.milliseconds   = milliseconds;
proto$2.seconds        = seconds;
proto$2.minutes        = minutes;
proto$2.hours          = hours;
proto$2.days           = days;
proto$2.weeks          = weeks;
proto$2.months         = months;
proto$2.years          = years;
proto$2.humanize       = humanize;
proto$2.toISOString    = toISOString$1;
proto$2.toString       = toISOString$1;
proto$2.toJSON         = toISOString$1;
proto$2.locale         = locale;
proto$2.localeData     = localeData;

// Deprecations
proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$2.lang = lang;

// Side effect imports

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
});

// Side effect imports


hooks.version = '2.18.1';

setHookCallback(createLocal);

hooks.fn                    = proto;
hooks.min                   = min;
hooks.max                   = max;
hooks.now                   = now;
hooks.utc                   = createUTC;
hooks.unix                  = createUnix;
hooks.months                = listMonths;
hooks.isDate                = isDate;
hooks.locale                = getSetGlobalLocale;
hooks.invalid               = createInvalid;
hooks.duration              = createDuration;
hooks.isMoment              = isMoment;
hooks.weekdays              = listWeekdays;
hooks.parseZone             = createInZone;
hooks.localeData            = getLocale;
hooks.isDuration            = isDuration;
hooks.monthsShort           = listMonthsShort;
hooks.weekdaysMin           = listWeekdaysMin;
hooks.defineLocale          = defineLocale;
hooks.updateLocale          = updateLocale;
hooks.locales               = listLocales;
hooks.weekdaysShort         = listWeekdaysShort;
hooks.normalizeUnits        = normalizeUnits;
hooks.relativeTimeRounding = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat        = getCalendarFormat;
hooks.prototype             = proto;

return hooks;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(403)(module)))

/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);


var CalendarService = (function () {
    function CalendarService() {
        this.currentDateChangedFromParent = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.currentDateChangedFromChildren = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.eventSourceChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.currentDateChangedFromParent$ = this.currentDateChangedFromParent.asObservable();
        this.currentDateChangedFromChildren$ = this.currentDateChangedFromChildren.asObservable();
        this.eventSourceChanged$ = this.eventSourceChanged.asObservable();
    }
    CalendarService.prototype.setCurrentDate = function (val, fromParent) {
        if (fromParent === void 0) { fromParent = false; }
        this._currentDate = val;
        if (fromParent) {
            this.currentDateChangedFromParent.next(val);
        }
        else {
            this.currentDateChangedFromChildren.next(val);
        }
    };
    Object.defineProperty(CalendarService.prototype, "currentDate", {
        get: function () {
            return this._currentDate;
        },
        enumerable: true,
        configurable: true
    });
    CalendarService.prototype.rangeChanged = function (component) {
        if (this.queryMode === 'local') {
            if (component.eventSource && component.onDataLoaded) {
                component.onDataLoaded();
            }
        }
        else if (this.queryMode === 'remote') {
            component.onRangeChanged.emit(component.range);
        }
    };
    CalendarService.prototype.getStep = function (mode) {
        switch (mode) {
            case 'month':
                return {
                    years: 0,
                    months: 1,
                    days: 0
                };
            case 'week':
                return {
                    years: 0,
                    months: 0,
                    days: 7
                };
            case 'day':
                return {
                    years: 0,
                    months: 0,
                    days: 1
                };
        }
    };
    CalendarService.prototype.getAdjacentCalendarDate = function (mode, direction) {
        var step = this.getStep(mode);
        var calculateCalendarDate = new Date(this.currentDate.getTime()), year = calculateCalendarDate.getFullYear() + direction * step.years, month = calculateCalendarDate.getMonth() + direction * step.months, date = calculateCalendarDate.getDate() + direction * step.days;
        calculateCalendarDate.setFullYear(year, month, date);
        if (mode === 'month') {
            var firstDayInNextMonth = new Date(year, month + 1, 1);
            if (firstDayInNextMonth.getTime() <= calculateCalendarDate.getTime()) {
                calculateCalendarDate = new Date(firstDayInNextMonth.getTime() - 24 * 60 * 60 * 1000);
            }
        }
        return calculateCalendarDate;
    };
    CalendarService.prototype.getAdjacentViewStartTime = function (component, direction) {
        var adjacentCalendarDate = this.getAdjacentCalendarDate(component.mode, direction);
        return component.getRange(adjacentCalendarDate).startTime;
    };
    CalendarService.prototype.populateAdjacentViews = function (component) {
        var currentViewStartDate, currentViewData, toUpdateViewIndex, currentViewIndex = component.currentViewIndex;
        if (component.direction === 1) {
            currentViewStartDate = this.getAdjacentViewStartTime(component, 1);
            toUpdateViewIndex = (currentViewIndex + 1) % 3;
            component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
        }
        else if (component.direction === -1) {
            currentViewStartDate = this.getAdjacentViewStartTime(component, -1);
            toUpdateViewIndex = (currentViewIndex + 2) % 3;
            component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
        }
        else {
            if (!component.views) {
                currentViewData = [];
                currentViewStartDate = component.range.startTime;
                currentViewData.push(component.getViewData(currentViewStartDate));
                currentViewStartDate = this.getAdjacentViewStartTime(component, 1);
                currentViewData.push(component.getViewData(currentViewStartDate));
                currentViewStartDate = this.getAdjacentViewStartTime(component, -1);
                currentViewData.push(component.getViewData(currentViewStartDate));
                component.views = currentViewData;
            }
            else {
                currentViewStartDate = component.range.startTime;
                component.views[currentViewIndex] = component.getViewData(currentViewStartDate);
                currentViewStartDate = this.getAdjacentViewStartTime(component, -1);
                toUpdateViewIndex = (currentViewIndex + 2) % 3;
                component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
                currentViewStartDate = this.getAdjacentViewStartTime(component, 1);
                toUpdateViewIndex = (currentViewIndex + 1) % 3;
                component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
            }
        }
    };
    CalendarService.prototype.loadEvents = function () {
        this.eventSourceChanged.next();
    };
    return CalendarService;
}());

CalendarService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
CalendarService.ctorParameters = function () { return []; };
//# sourceMappingURL=calendar.service.js.map

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Afrikaans [af]
//! author : Werner Mollentze : https://github.com/wernerm

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var af = moment.defineLocale('af', {
    months : 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
    monthsShort : 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
    weekdays : 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
    weekdaysShort : 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
    weekdaysMin : 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
    meridiemParse: /vm|nm/i,
    isPM : function (input) {
        return /^nm$/i.test(input);
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours < 12) {
            return isLower ? 'vm' : 'VM';
        } else {
            return isLower ? 'nm' : 'NM';
        }
    },
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Vandag om] LT',
        nextDay : '[Môre om] LT',
        nextWeek : 'dddd [om] LT',
        lastDay : '[Gister om] LT',
        lastWeek : '[Laas] dddd [om] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'oor %s',
        past : '%s gelede',
        s : '\'n paar sekondes',
        m : '\'n minuut',
        mm : '%d minute',
        h : '\'n uur',
        hh : '%d ure',
        d : '\'n dag',
        dd : '%d dae',
        M : '\'n maand',
        MM : '%d maande',
        y : '\'n jaar',
        yy : '%d jaar'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal : function (number) {
        return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de'); // Thanks to Joris Röling : https://github.com/jjupiter
    },
    week : {
        dow : 1, // Maandag is die eerste dag van die week.
        doy : 4  // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
    }
});

return af;

})));


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Arabic [ar]
//! author : Abdel Said: https://github.com/abdelsaid
//! author : Ahmed Elkhatib
//! author : forabi https://github.com/forabi

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var symbolMap = {
    '1': '١',
    '2': '٢',
    '3': '٣',
    '4': '٤',
    '5': '٥',
    '6': '٦',
    '7': '٧',
    '8': '٨',
    '9': '٩',
    '0': '٠'
};
var numberMap = {
    '١': '1',
    '٢': '2',
    '٣': '3',
    '٤': '4',
    '٥': '5',
    '٦': '6',
    '٧': '7',
    '٨': '8',
    '٩': '9',
    '٠': '0'
};
var pluralForm = function (n) {
    return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
};
var plurals = {
    s : ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
    m : ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
    h : ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
    d : ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
    M : ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
    y : ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
};
var pluralize = function (u) {
    return function (number, withoutSuffix, string, isFuture) {
        var f = pluralForm(number),
            str = plurals[u][pluralForm(number)];
        if (f === 2) {
            str = str[withoutSuffix ? 0 : 1];
        }
        return str.replace(/%d/i, number);
    };
};
var months = [
    'كانون الثاني يناير',
    'شباط فبراير',
    'آذار مارس',
    'نيسان أبريل',
    'أيار مايو',
    'حزيران يونيو',
    'تموز يوليو',
    'آب أغسطس',
    'أيلول سبتمبر',
    'تشرين الأول أكتوبر',
    'تشرين الثاني نوفمبر',
    'كانون الأول ديسمبر'
];

var ar = moment.defineLocale('ar', {
    months : months,
    monthsShort : months,
    weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'D/\u200FM/\u200FYYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /ص|م/,
    isPM : function (input) {
        return 'م' === input;
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ص';
        } else {
            return 'م';
        }
    },
    calendar : {
        sameDay: '[اليوم عند الساعة] LT',
        nextDay: '[غدًا عند الساعة] LT',
        nextWeek: 'dddd [عند الساعة] LT',
        lastDay: '[أمس عند الساعة] LT',
        lastWeek: 'dddd [عند الساعة] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'بعد %s',
        past : 'منذ %s',
        s : pluralize('s'),
        m : pluralize('m'),
        mm : pluralize('m'),
        h : pluralize('h'),
        hh : pluralize('h'),
        d : pluralize('d'),
        dd : pluralize('d'),
        M : pluralize('M'),
        MM : pluralize('M'),
        y : pluralize('y'),
        yy : pluralize('y')
    },
    preparse: function (string) {
        return string.replace(/\u200f/g, '').replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
            return numberMap[match];
        }).replace(/،/g, ',');
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        }).replace(/,/g, '،');
    },
    week : {
        dow : 6, // Saturday is the first day of the week.
        doy : 12  // The week that contains Jan 1st is the first week of the year.
    }
});

return ar;

})));


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Arabic (Algeria) [ar-dz]
//! author : Noureddine LOUAHEDJ : https://github.com/noureddineme

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var arDz = moment.defineLocale('ar-dz', {
    months : 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    monthsShort : 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort : 'احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin : 'أح_إث_ثلا_أر_خم_جم_سب'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[اليوم على الساعة] LT',
        nextDay: '[غدا على الساعة] LT',
        nextWeek: 'dddd [على الساعة] LT',
        lastDay: '[أمس على الساعة] LT',
        lastWeek: 'dddd [على الساعة] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'في %s',
        past : 'منذ %s',
        s : 'ثوان',
        m : 'دقيقة',
        mm : '%d دقائق',
        h : 'ساعة',
        hh : '%d ساعات',
        d : 'يوم',
        dd : '%d أيام',
        M : 'شهر',
        MM : '%d أشهر',
        y : 'سنة',
        yy : '%d سنوات'
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 4  // The week that contains Jan 1st is the first week of the year.
    }
});

return arDz;

})));


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Arabic (Kuwait) [ar-kw]
//! author : Nusret Parlak: https://github.com/nusretparlak

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var arKw = moment.defineLocale('ar-kw', {
    months : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
    monthsShort : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
    weekdays : 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort : 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[اليوم على الساعة] LT',
        nextDay: '[غدا على الساعة] LT',
        nextWeek: 'dddd [على الساعة] LT',
        lastDay: '[أمس على الساعة] LT',
        lastWeek: 'dddd [على الساعة] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'في %s',
        past : 'منذ %s',
        s : 'ثوان',
        m : 'دقيقة',
        mm : '%d دقائق',
        h : 'ساعة',
        hh : '%d ساعات',
        d : 'يوم',
        dd : '%d أيام',
        M : 'شهر',
        MM : '%d أشهر',
        y : 'سنة',
        yy : '%d سنوات'
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 12  // The week that contains Jan 1st is the first week of the year.
    }
});

return arKw;

})));


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Arabic (Lybia) [ar-ly]
//! author : Ali Hmer: https://github.com/kikoanis

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var symbolMap = {
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '0': '0'
};
var pluralForm = function (n) {
    return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
};
var plurals = {
    s : ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
    m : ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
    h : ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
    d : ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
    M : ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
    y : ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
};
var pluralize = function (u) {
    return function (number, withoutSuffix, string, isFuture) {
        var f = pluralForm(number),
            str = plurals[u][pluralForm(number)];
        if (f === 2) {
            str = str[withoutSuffix ? 0 : 1];
        }
        return str.replace(/%d/i, number);
    };
};
var months = [
    'يناير',
    'فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر'
];

var arLy = moment.defineLocale('ar-ly', {
    months : months,
    monthsShort : months,
    weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'D/\u200FM/\u200FYYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /ص|م/,
    isPM : function (input) {
        return 'م' === input;
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ص';
        } else {
            return 'م';
        }
    },
    calendar : {
        sameDay: '[اليوم عند الساعة] LT',
        nextDay: '[غدًا عند الساعة] LT',
        nextWeek: 'dddd [عند الساعة] LT',
        lastDay: '[أمس عند الساعة] LT',
        lastWeek: 'dddd [عند الساعة] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'بعد %s',
        past : 'منذ %s',
        s : pluralize('s'),
        m : pluralize('m'),
        mm : pluralize('m'),
        h : pluralize('h'),
        hh : pluralize('h'),
        d : pluralize('d'),
        dd : pluralize('d'),
        M : pluralize('M'),
        MM : pluralize('M'),
        y : pluralize('y'),
        yy : pluralize('y')
    },
    preparse: function (string) {
        return string.replace(/\u200f/g, '').replace(/،/g, ',');
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        }).replace(/,/g, '،');
    },
    week : {
        dow : 6, // Saturday is the first day of the week.
        doy : 12  // The week that contains Jan 1st is the first week of the year.
    }
});

return arLy;

})));


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Arabic (Morocco) [ar-ma]
//! author : ElFadili Yassine : https://github.com/ElFadiliY
//! author : Abdel Said : https://github.com/abdelsaid

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var arMa = moment.defineLocale('ar-ma', {
    months : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
    monthsShort : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
    weekdays : 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort : 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[اليوم على الساعة] LT',
        nextDay: '[غدا على الساعة] LT',
        nextWeek: 'dddd [على الساعة] LT',
        lastDay: '[أمس على الساعة] LT',
        lastWeek: 'dddd [على الساعة] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'في %s',
        past : 'منذ %s',
        s : 'ثوان',
        m : 'دقيقة',
        mm : '%d دقائق',
        h : 'ساعة',
        hh : '%d ساعات',
        d : 'يوم',
        dd : '%d أيام',
        M : 'شهر',
        MM : '%d أشهر',
        y : 'سنة',
        yy : '%d سنوات'
    },
    week : {
        dow : 6, // Saturday is the first day of the week.
        doy : 12  // The week that contains Jan 1st is the first week of the year.
    }
});

return arMa;

})));


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Arabic (Saudi Arabia) [ar-sa]
//! author : Suhail Alkowaileet : https://github.com/xsoh

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var symbolMap = {
    '1': '١',
    '2': '٢',
    '3': '٣',
    '4': '٤',
    '5': '٥',
    '6': '٦',
    '7': '٧',
    '8': '٨',
    '9': '٩',
    '0': '٠'
};
var numberMap = {
    '١': '1',
    '٢': '2',
    '٣': '3',
    '٤': '4',
    '٥': '5',
    '٦': '6',
    '٧': '7',
    '٨': '8',
    '٩': '9',
    '٠': '0'
};

var arSa = moment.defineLocale('ar-sa', {
    months : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    monthsShort : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /ص|م/,
    isPM : function (input) {
        return 'م' === input;
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ص';
        } else {
            return 'م';
        }
    },
    calendar : {
        sameDay: '[اليوم على الساعة] LT',
        nextDay: '[غدا على الساعة] LT',
        nextWeek: 'dddd [على الساعة] LT',
        lastDay: '[أمس على الساعة] LT',
        lastWeek: 'dddd [على الساعة] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'في %s',
        past : 'منذ %s',
        s : 'ثوان',
        m : 'دقيقة',
        mm : '%d دقائق',
        h : 'ساعة',
        hh : '%d ساعات',
        d : 'يوم',
        dd : '%d أيام',
        M : 'شهر',
        MM : '%d أشهر',
        y : 'سنة',
        yy : '%d سنوات'
    },
    preparse: function (string) {
        return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
            return numberMap[match];
        }).replace(/،/g, ',');
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        }).replace(/,/g, '،');
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

return arSa;

})));


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale  :  Arabic (Tunisia) [ar-tn]
//! author : Nader Toukabri : https://github.com/naderio

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var arTn = moment.defineLocale('ar-tn', {
    months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact : true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[اليوم على الساعة] LT',
        nextDay: '[غدا على الساعة] LT',
        nextWeek: 'dddd [على الساعة] LT',
        lastDay: '[أمس على الساعة] LT',
        lastWeek: 'dddd [على الساعة] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'في %s',
        past: 'منذ %s',
        s: 'ثوان',
        m: 'دقيقة',
        mm: '%d دقائق',
        h: 'ساعة',
        hh: '%d ساعات',
        d: 'يوم',
        dd: '%d أيام',
        M: 'شهر',
        MM: '%d أشهر',
        y: 'سنة',
        yy: '%d سنوات'
    },
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
});

return arTn;

})));


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Azerbaijani [az]
//! author : topchiyev : https://github.com/topchiyev

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var suffixes = {
    1: '-inci',
    5: '-inci',
    8: '-inci',
    70: '-inci',
    80: '-inci',
    2: '-nci',
    7: '-nci',
    20: '-nci',
    50: '-nci',
    3: '-üncü',
    4: '-üncü',
    100: '-üncü',
    6: '-ncı',
    9: '-uncu',
    10: '-uncu',
    30: '-uncu',
    60: '-ıncı',
    90: '-ıncı'
};

var az = moment.defineLocale('az', {
    months : 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
    monthsShort : 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
    weekdays : 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
    weekdaysShort : 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
    weekdaysMin : 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[bugün saat] LT',
        nextDay : '[sabah saat] LT',
        nextWeek : '[gələn həftə] dddd [saat] LT',
        lastDay : '[dünən] LT',
        lastWeek : '[keçən həftə] dddd [saat] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s sonra',
        past : '%s əvvəl',
        s : 'birneçə saniyyə',
        m : 'bir dəqiqə',
        mm : '%d dəqiqə',
        h : 'bir saat',
        hh : '%d saat',
        d : 'bir gün',
        dd : '%d gün',
        M : 'bir ay',
        MM : '%d ay',
        y : 'bir il',
        yy : '%d il'
    },
    meridiemParse: /gecə|səhər|gündüz|axşam/,
    isPM : function (input) {
        return /^(gündüz|axşam)$/.test(input);
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'gecə';
        } else if (hour < 12) {
            return 'səhər';
        } else if (hour < 17) {
            return 'gündüz';
        } else {
            return 'axşam';
        }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
    ordinal : function (number) {
        if (number === 0) {  // special case for zero
            return number + '-ıncı';
        }
        var a = number % 10,
            b = number % 100 - a,
            c = number >= 100 ? 100 : null;
        return number + (suffixes[a] || suffixes[b] || suffixes[c]);
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return az;

})));


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Belarusian [be]
//! author : Dmitry Demidov : https://github.com/demidov91
//! author: Praleska: http://praleska.pro/
//! Author : Menelion Elensúle : https://github.com/Oire

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


function plural(word, num) {
    var forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
}
function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
        'mm': withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
        'hh': withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
        'dd': 'дзень_дні_дзён',
        'MM': 'месяц_месяцы_месяцаў',
        'yy': 'год_гады_гадоў'
    };
    if (key === 'm') {
        return withoutSuffix ? 'хвіліна' : 'хвіліну';
    }
    else if (key === 'h') {
        return withoutSuffix ? 'гадзіна' : 'гадзіну';
    }
    else {
        return number + ' ' + plural(format[key], +number);
    }
}

var be = moment.defineLocale('be', {
    months : {
        format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_'),
        standalone: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_')
    },
    monthsShort : 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
    weekdays : {
        format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
        standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
        isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
    },
    weekdaysShort : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
    weekdaysMin : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY г.',
        LLL : 'D MMMM YYYY г., HH:mm',
        LLLL : 'dddd, D MMMM YYYY г., HH:mm'
    },
    calendar : {
        sameDay: '[Сёння ў] LT',
        nextDay: '[Заўтра ў] LT',
        lastDay: '[Учора ў] LT',
        nextWeek: function () {
            return '[У] dddd [ў] LT';
        },
        lastWeek: function () {
            switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                    return '[У мінулую] dddd [ў] LT';
                case 1:
                case 2:
                case 4:
                    return '[У мінулы] dddd [ў] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : 'праз %s',
        past : '%s таму',
        s : 'некалькі секунд',
        m : relativeTimeWithPlural,
        mm : relativeTimeWithPlural,
        h : relativeTimeWithPlural,
        hh : relativeTimeWithPlural,
        d : 'дзень',
        dd : relativeTimeWithPlural,
        M : 'месяц',
        MM : relativeTimeWithPlural,
        y : 'год',
        yy : relativeTimeWithPlural
    },
    meridiemParse: /ночы|раніцы|дня|вечара/,
    isPM : function (input) {
        return /^(дня|вечара)$/.test(input);
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'ночы';
        } else if (hour < 12) {
            return 'раніцы';
        } else if (hour < 17) {
            return 'дня';
        } else {
            return 'вечара';
        }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
    ordinal: function (number, period) {
        switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
            case 'w':
            case 'W':
                return (number % 10 === 2 || number % 10 === 3) && (number % 100 !== 12 && number % 100 !== 13) ? number + '-і' : number + '-ы';
            case 'D':
                return number + '-га';
            default:
                return number;
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return be;

})));


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Bulgarian [bg]
//! author : Krasen Borisov : https://github.com/kraz

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var bg = moment.defineLocale('bg', {
    months : 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
    monthsShort : 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
    weekdays : 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
    weekdaysShort : 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
    weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'D.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY H:mm',
        LLLL : 'dddd, D MMMM YYYY H:mm'
    },
    calendar : {
        sameDay : '[Днес в] LT',
        nextDay : '[Утре в] LT',
        nextWeek : 'dddd [в] LT',
        lastDay : '[Вчера в] LT',
        lastWeek : function () {
            switch (this.day()) {
                case 0:
                case 3:
                case 6:
                    return '[В изминалата] dddd [в] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[В изминалия] dddd [в] LT';
            }
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'след %s',
        past : 'преди %s',
        s : 'няколко секунди',
        m : 'минута',
        mm : '%d минути',
        h : 'час',
        hh : '%d часа',
        d : 'ден',
        dd : '%d дни',
        M : 'месец',
        MM : '%d месеца',
        y : 'година',
        yy : '%d години'
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
    ordinal : function (number) {
        var lastDigit = number % 10,
            last2Digits = number % 100;
        if (number === 0) {
            return number + '-ев';
        } else if (last2Digits === 0) {
            return number + '-ен';
        } else if (last2Digits > 10 && last2Digits < 20) {
            return number + '-ти';
        } else if (lastDigit === 1) {
            return number + '-ви';
        } else if (lastDigit === 2) {
            return number + '-ри';
        } else if (lastDigit === 7 || lastDigit === 8) {
            return number + '-ми';
        } else {
            return number + '-ти';
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return bg;

})));


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Bengali [bn]
//! author : Kaushik Gandhi : https://github.com/kaushikgandhi

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var symbolMap = {
    '1': '১',
    '2': '২',
    '3': '৩',
    '4': '৪',
    '5': '৫',
    '6': '৬',
    '7': '৭',
    '8': '৮',
    '9': '৯',
    '0': '০'
};
var numberMap = {
    '১': '1',
    '২': '2',
    '৩': '3',
    '৪': '4',
    '৫': '5',
    '৬': '6',
    '৭': '7',
    '৮': '8',
    '৯': '9',
    '০': '0'
};

var bn = moment.defineLocale('bn', {
    months : 'জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
    monthsShort : 'জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে'.split('_'),
    weekdays : 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার'.split('_'),
    weekdaysShort : 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি'.split('_'),
    weekdaysMin : 'রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি'.split('_'),
    longDateFormat : {
        LT : 'A h:mm সময়',
        LTS : 'A h:mm:ss সময়',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, A h:mm সময়',
        LLLL : 'dddd, D MMMM YYYY, A h:mm সময়'
    },
    calendar : {
        sameDay : '[আজ] LT',
        nextDay : '[আগামীকাল] LT',
        nextWeek : 'dddd, LT',
        lastDay : '[গতকাল] LT',
        lastWeek : '[গত] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s পরে',
        past : '%s আগে',
        s : 'কয়েক সেকেন্ড',
        m : 'এক মিনিট',
        mm : '%d মিনিট',
        h : 'এক ঘন্টা',
        hh : '%d ঘন্টা',
        d : 'এক দিন',
        dd : '%d দিন',
        M : 'এক মাস',
        MM : '%d মাস',
        y : 'এক বছর',
        yy : '%d বছর'
    },
    preparse: function (string) {
        return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
            return numberMap[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        });
    },
    meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if ((meridiem === 'রাত' && hour >= 4) ||
                (meridiem === 'দুপুর' && hour < 5) ||
                meridiem === 'বিকাল') {
            return hour + 12;
        } else {
            return hour;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'রাত';
        } else if (hour < 10) {
            return 'সকাল';
        } else if (hour < 17) {
            return 'দুপুর';
        } else if (hour < 20) {
            return 'বিকাল';
        } else {
            return 'রাত';
        }
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

return bn;

})));


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Tibetan [bo]
//! author : Thupten N. Chakrishar : https://github.com/vajradog

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var symbolMap = {
    '1': '༡',
    '2': '༢',
    '3': '༣',
    '4': '༤',
    '5': '༥',
    '6': '༦',
    '7': '༧',
    '8': '༨',
    '9': '༩',
    '0': '༠'
};
var numberMap = {
    '༡': '1',
    '༢': '2',
    '༣': '3',
    '༤': '4',
    '༥': '5',
    '༦': '6',
    '༧': '7',
    '༨': '8',
    '༩': '9',
    '༠': '0'
};

var bo = moment.defineLocale('bo', {
    months : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
    monthsShort : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
    weekdays : 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
    weekdaysShort : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
    weekdaysMin : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
    longDateFormat : {
        LT : 'A h:mm',
        LTS : 'A h:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, A h:mm',
        LLLL : 'dddd, D MMMM YYYY, A h:mm'
    },
    calendar : {
        sameDay : '[དི་རིང] LT',
        nextDay : '[སང་ཉིན] LT',
        nextWeek : '[བདུན་ཕྲག་རྗེས་མ], LT',
        lastDay : '[ཁ་སང] LT',
        lastWeek : '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s ལ་',
        past : '%s སྔན་ལ',
        s : 'ལམ་སང',
        m : 'སྐར་མ་གཅིག',
        mm : '%d སྐར་མ',
        h : 'ཆུ་ཚོད་གཅིག',
        hh : '%d ཆུ་ཚོད',
        d : 'ཉིན་གཅིག',
        dd : '%d ཉིན་',
        M : 'ཟླ་བ་གཅིག',
        MM : '%d ཟླ་བ',
        y : 'ལོ་གཅིག',
        yy : '%d ལོ'
    },
    preparse: function (string) {
        return string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (match) {
            return numberMap[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        });
    },
    meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if ((meridiem === 'མཚན་མོ' && hour >= 4) ||
                (meridiem === 'ཉིན་གུང' && hour < 5) ||
                meridiem === 'དགོང་དག') {
            return hour + 12;
        } else {
            return hour;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'མཚན་མོ';
        } else if (hour < 10) {
            return 'ཞོགས་ཀས';
        } else if (hour < 17) {
            return 'ཉིན་གུང';
        } else if (hour < 20) {
            return 'དགོང་དག';
        } else {
            return 'མཚན་མོ';
        }
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

return bo;

})));


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Breton [br]
//! author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


function relativeTimeWithMutation(number, withoutSuffix, key) {
    var format = {
        'mm': 'munutenn',
        'MM': 'miz',
        'dd': 'devezh'
    };
    return number + ' ' + mutation(format[key], number);
}
function specialMutationForYears(number) {
    switch (lastNumber(number)) {
        case 1:
        case 3:
        case 4:
        case 5:
        case 9:
            return number + ' bloaz';
        default:
            return number + ' vloaz';
    }
}
function lastNumber(number) {
    if (number > 9) {
        return lastNumber(number % 10);
    }
    return number;
}
function mutation(text, number) {
    if (number === 2) {
        return softMutation(text);
    }
    return text;
}
function softMutation(text) {
    var mutationTable = {
        'm': 'v',
        'b': 'v',
        'd': 'z'
    };
    if (mutationTable[text.charAt(0)] === undefined) {
        return text;
    }
    return mutationTable[text.charAt(0)] + text.substring(1);
}

var br = moment.defineLocale('br', {
    months : 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
    monthsShort : 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
    weekdays : 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
    weekdaysShort : 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
    weekdaysMin : 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'h[e]mm A',
        LTS : 'h[e]mm:ss A',
        L : 'DD/MM/YYYY',
        LL : 'D [a viz] MMMM YYYY',
        LLL : 'D [a viz] MMMM YYYY h[e]mm A',
        LLLL : 'dddd, D [a viz] MMMM YYYY h[e]mm A'
    },
    calendar : {
        sameDay : '[Hiziv da] LT',
        nextDay : '[Warc\'hoazh da] LT',
        nextWeek : 'dddd [da] LT',
        lastDay : '[Dec\'h da] LT',
        lastWeek : 'dddd [paset da] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'a-benn %s',
        past : '%s \'zo',
        s : 'un nebeud segondennoù',
        m : 'ur vunutenn',
        mm : relativeTimeWithMutation,
        h : 'un eur',
        hh : '%d eur',
        d : 'un devezh',
        dd : relativeTimeWithMutation,
        M : 'ur miz',
        MM : relativeTimeWithMutation,
        y : 'ur bloaz',
        yy : specialMutationForYears
    },
    dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
    ordinal : function (number) {
        var output = (number === 1) ? 'añ' : 'vet';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return br;

})));


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Bosnian [bs]
//! author : Nedim Cholich : https://github.com/frontyard
//! based on (hr) translation by Bojan Marković

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


function translate(number, withoutSuffix, key) {
    var result = number + ' ';
    switch (key) {
        case 'm':
            return withoutSuffix ? 'jedna minuta' : 'jedne minute';
        case 'mm':
            if (number === 1) {
                result += 'minuta';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'minute';
            } else {
                result += 'minuta';
            }
            return result;
        case 'h':
            return withoutSuffix ? 'jedan sat' : 'jednog sata';
        case 'hh':
            if (number === 1) {
                result += 'sat';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'sata';
            } else {
                result += 'sati';
            }
            return result;
        case 'dd':
            if (number === 1) {
                result += 'dan';
            } else {
                result += 'dana';
            }
            return result;
        case 'MM':
            if (number === 1) {
                result += 'mjesec';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'mjeseca';
            } else {
                result += 'mjeseci';
            }
            return result;
        case 'yy':
            if (number === 1) {
                result += 'godina';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'godine';
            } else {
                result += 'godina';
            }
            return result;
    }
}

var bs = moment.defineLocale('bs', {
    months : 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
    monthsShort : 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
    weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
    weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY H:mm',
        LLLL : 'dddd, D. MMMM YYYY H:mm'
    },
    calendar : {
        sameDay  : '[danas u] LT',
        nextDay  : '[sutra u] LT',
        nextWeek : function () {
            switch (this.day()) {
                case 0:
                    return '[u] [nedjelju] [u] LT';
                case 3:
                    return '[u] [srijedu] [u] LT';
                case 6:
                    return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[u] dddd [u] LT';
            }
        },
        lastDay  : '[jučer u] LT',
        lastWeek : function () {
            switch (this.day()) {
                case 0:
                case 3:
                    return '[prošlu] dddd [u] LT';
                case 6:
                    return '[prošle] [subote] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[prošli] dddd [u] LT';
            }
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'za %s',
        past   : 'prije %s',
        s      : 'par sekundi',
        m      : translate,
        mm     : translate,
        h      : translate,
        hh     : translate,
        d      : 'dan',
        dd     : translate,
        M      : 'mjesec',
        MM     : translate,
        y      : 'godinu',
        yy     : translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return bs;

})));


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Catalan [ca]
//! author : Juan G. Hurtado : https://github.com/juanghurtado

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var ca = moment.defineLocale('ca', {
    months : {
        standalone: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
        format: 'de gener_de febrer_de març_d\'abril_de maig_de juny_de juliol_d\'agost_de setembre_d\'octubre_de novembre_de desembre'.split('_'),
        isFormat: /D[oD]?(\s)+MMMM/
    },
    monthsShort : 'gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.'.split('_'),
    monthsParseExact : true,
    weekdays : 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
    weekdaysShort : 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
    weekdaysMin : 'Dg_Dl_Dt_Dc_Dj_Dv_Ds'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD/MM/YYYY',
        LL : '[el] D MMMM [de] YYYY',
        ll : 'D MMM YYYY',
        LLL : '[el] D MMMM [de] YYYY [a les] H:mm',
        lll : 'D MMM YYYY, H:mm',
        LLLL : '[el] dddd D MMMM [de] YYYY [a les] H:mm',
        llll : 'ddd D MMM YYYY, H:mm'
    },
    calendar : {
        sameDay : function () {
            return '[avui a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
        },
        nextDay : function () {
            return '[demà a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
        },
        nextWeek : function () {
            return 'dddd [a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
        },
        lastDay : function () {
            return '[ahir a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
        },
        lastWeek : function () {
            return '[el] dddd [passat a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'd\'aquí %s',
        past : 'fa %s',
        s : 'uns segons',
        m : 'un minut',
        mm : '%d minuts',
        h : 'una hora',
        hh : '%d hores',
        d : 'un dia',
        dd : '%d dies',
        M : 'un mes',
        MM : '%d mesos',
        y : 'un any',
        yy : '%d anys'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
    ordinal : function (number, period) {
        var output = (number === 1) ? 'r' :
            (number === 2) ? 'n' :
            (number === 3) ? 'r' :
            (number === 4) ? 't' : 'è';
        if (period === 'w' || period === 'W') {
            output = 'a';
        }
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return ca;

})));


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Czech [cs]
//! author : petrbela : https://github.com/petrbela

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_');
var monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
function plural(n) {
    return (n > 1) && (n < 5) && (~~(n / 10) !== 1);
}
function translate(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    switch (key) {
        case 's':  // a few seconds / in a few seconds / a few seconds ago
            return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
        case 'm':  // a minute / in a minute / a minute ago
            return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'minuty' : 'minut');
            } else {
                return result + 'minutami';
            }
            break;
        case 'h':  // an hour / in an hour / an hour ago
            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
        case 'hh': // 9 hours / in 9 hours / 9 hours ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'hodiny' : 'hodin');
            } else {
                return result + 'hodinami';
            }
            break;
        case 'd':  // a day / in a day / a day ago
            return (withoutSuffix || isFuture) ? 'den' : 'dnem';
        case 'dd': // 9 days / in 9 days / 9 days ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'dny' : 'dní');
            } else {
                return result + 'dny';
            }
            break;
        case 'M':  // a month / in a month / a month ago
            return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
        case 'MM': // 9 months / in 9 months / 9 months ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'měsíce' : 'měsíců');
            } else {
                return result + 'měsíci';
            }
            break;
        case 'y':  // a year / in a year / a year ago
            return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
        case 'yy': // 9 years / in 9 years / 9 years ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'roky' : 'let');
            } else {
                return result + 'lety';
            }
            break;
    }
}

var cs = moment.defineLocale('cs', {
    months : months,
    monthsShort : monthsShort,
    monthsParse : (function (months, monthsShort) {
        var i, _monthsParse = [];
        for (i = 0; i < 12; i++) {
            // use custom parser to solve problem with July (červenec)
            _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
        }
        return _monthsParse;
    }(months, monthsShort)),
    shortMonthsParse : (function (monthsShort) {
        var i, _shortMonthsParse = [];
        for (i = 0; i < 12; i++) {
            _shortMonthsParse[i] = new RegExp('^' + monthsShort[i] + '$', 'i');
        }
        return _shortMonthsParse;
    }(monthsShort)),
    longMonthsParse : (function (months) {
        var i, _longMonthsParse = [];
        for (i = 0; i < 12; i++) {
            _longMonthsParse[i] = new RegExp('^' + months[i] + '$', 'i');
        }
        return _longMonthsParse;
    }(months)),
    weekdays : 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
    weekdaysShort : 'ne_po_út_st_čt_pá_so'.split('_'),
    weekdaysMin : 'ne_po_út_st_čt_pá_so'.split('_'),
    longDateFormat : {
        LT: 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY H:mm',
        LLLL : 'dddd D. MMMM YYYY H:mm',
        l : 'D. M. YYYY'
    },
    calendar : {
        sameDay: '[dnes v] LT',
        nextDay: '[zítra v] LT',
        nextWeek: function () {
            switch (this.day()) {
                case 0:
                    return '[v neděli v] LT';
                case 1:
                case 2:
                    return '[v] dddd [v] LT';
                case 3:
                    return '[ve středu v] LT';
                case 4:
                    return '[ve čtvrtek v] LT';
                case 5:
                    return '[v pátek v] LT';
                case 6:
                    return '[v sobotu v] LT';
            }
        },
        lastDay: '[včera v] LT',
        lastWeek: function () {
            switch (this.day()) {
                case 0:
                    return '[minulou neděli v] LT';
                case 1:
                case 2:
                    return '[minulé] dddd [v] LT';
                case 3:
                    return '[minulou středu v] LT';
                case 4:
                case 5:
                    return '[minulý] dddd [v] LT';
                case 6:
                    return '[minulou sobotu v] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : 'za %s',
        past : 'před %s',
        s : translate,
        m : translate,
        mm : translate,
        h : translate,
        hh : translate,
        d : translate,
        dd : translate,
        M : translate,
        MM : translate,
        y : translate,
        yy : translate
    },
    dayOfMonthOrdinalParse : /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return cs;

})));


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Chuvash [cv]
//! author : Anatoly Mironov : https://github.com/mirontoli

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var cv = moment.defineLocale('cv', {
    months : 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
    monthsShort : 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
    weekdays : 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
    weekdaysShort : 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
    weekdaysMin : 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD-MM-YYYY',
        LL : 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
        LLL : 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
        LLLL : 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm'
    },
    calendar : {
        sameDay: '[Паян] LT [сехетре]',
        nextDay: '[Ыран] LT [сехетре]',
        lastDay: '[Ӗнер] LT [сехетре]',
        nextWeek: '[Ҫитес] dddd LT [сехетре]',
        lastWeek: '[Иртнӗ] dddd LT [сехетре]',
        sameElse: 'L'
    },
    relativeTime : {
        future : function (output) {
            var affix = /сехет$/i.exec(output) ? 'рен' : /ҫул$/i.exec(output) ? 'тан' : 'ран';
            return output + affix;
        },
        past : '%s каялла',
        s : 'пӗр-ик ҫеккунт',
        m : 'пӗр минут',
        mm : '%d минут',
        h : 'пӗр сехет',
        hh : '%d сехет',
        d : 'пӗр кун',
        dd : '%d кун',
        M : 'пӗр уйӑх',
        MM : '%d уйӑх',
        y : 'пӗр ҫул',
        yy : '%d ҫул'
    },
    dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
    ordinal : '%d-мӗш',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return cv;

})));


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Welsh [cy]
//! author : Robert Allen : https://github.com/robgallen
//! author : https://github.com/ryangreaves

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var cy = moment.defineLocale('cy', {
    months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
    monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
    weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
    weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
    weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
    weekdaysParseExact : true,
    // time formats are the same as en-gb
    longDateFormat: {
        LT: 'HH:mm',
        LTS : 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Heddiw am] LT',
        nextDay: '[Yfory am] LT',
        nextWeek: 'dddd [am] LT',
        lastDay: '[Ddoe am] LT',
        lastWeek: 'dddd [diwethaf am] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'mewn %s',
        past: '%s yn ôl',
        s: 'ychydig eiliadau',
        m: 'munud',
        mm: '%d munud',
        h: 'awr',
        hh: '%d awr',
        d: 'diwrnod',
        dd: '%d diwrnod',
        M: 'mis',
        MM: '%d mis',
        y: 'blwyddyn',
        yy: '%d flynedd'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
    // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
    ordinal: function (number) {
        var b = number,
            output = '',
            lookup = [
                '', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', // 1af to 10fed
                'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed
            ];
        if (b > 20) {
            if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
                output = 'fed'; // not 30ain, 70ain or 90ain
            } else {
                output = 'ain';
            }
        } else if (b > 0) {
            output = lookup[b];
        }
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return cy;

})));


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Danish [da]
//! author : Ulrik Nielsen : https://github.com/mrbase

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var da = moment.defineLocale('da', {
    months : 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
    monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
    weekdaysShort : 'søn_man_tir_ons_tor_fre_lør'.split('_'),
    weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY HH:mm',
        LLLL : 'dddd [d.] D. MMMM YYYY [kl.] HH:mm'
    },
    calendar : {
        sameDay : '[i dag kl.] LT',
        nextDay : '[i morgen kl.] LT',
        nextWeek : 'på dddd [kl.] LT',
        lastDay : '[i går kl.] LT',
        lastWeek : '[i] dddd[s kl.] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'om %s',
        past : '%s siden',
        s : 'få sekunder',
        m : 'et minut',
        mm : '%d minutter',
        h : 'en time',
        hh : '%d timer',
        d : 'en dag',
        dd : '%d dage',
        M : 'en måned',
        MM : '%d måneder',
        y : 'et år',
        yy : '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return da;

})));


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : German [de]
//! author : lluchs : https://github.com/lluchs
//! author: Menelion Elensúle: https://github.com/Oire
//! author : Mikolaj Dadela : https://github.com/mik01aj

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
        'm': ['eine Minute', 'einer Minute'],
        'h': ['eine Stunde', 'einer Stunde'],
        'd': ['ein Tag', 'einem Tag'],
        'dd': [number + ' Tage', number + ' Tagen'],
        'M': ['ein Monat', 'einem Monat'],
        'MM': [number + ' Monate', number + ' Monaten'],
        'y': ['ein Jahr', 'einem Jahr'],
        'yy': [number + ' Jahre', number + ' Jahren']
    };
    return withoutSuffix ? format[key][0] : format[key][1];
}

var de = moment.defineLocale('de', {
    months : 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort : 'Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
    monthsParseExact : true,
    weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
    weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
    weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY HH:mm',
        LLLL : 'dddd, D. MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[heute um] LT [Uhr]',
        sameElse: 'L',
        nextDay: '[morgen um] LT [Uhr]',
        nextWeek: 'dddd [um] LT [Uhr]',
        lastDay: '[gestern um] LT [Uhr]',
        lastWeek: '[letzten] dddd [um] LT [Uhr]'
    },
    relativeTime : {
        future : 'in %s',
        past : 'vor %s',
        s : 'ein paar Sekunden',
        m : processRelativeTime,
        mm : '%d Minuten',
        h : processRelativeTime,
        hh : '%d Stunden',
        d : processRelativeTime,
        dd : processRelativeTime,
        M : processRelativeTime,
        MM : processRelativeTime,
        y : processRelativeTime,
        yy : processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return de;

})));


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : German (Austria) [de-at]
//! author : lluchs : https://github.com/lluchs
//! author: Menelion Elensúle: https://github.com/Oire
//! author : Martin Groller : https://github.com/MadMG
//! author : Mikolaj Dadela : https://github.com/mik01aj

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
        'm': ['eine Minute', 'einer Minute'],
        'h': ['eine Stunde', 'einer Stunde'],
        'd': ['ein Tag', 'einem Tag'],
        'dd': [number + ' Tage', number + ' Tagen'],
        'M': ['ein Monat', 'einem Monat'],
        'MM': [number + ' Monate', number + ' Monaten'],
        'y': ['ein Jahr', 'einem Jahr'],
        'yy': [number + ' Jahre', number + ' Jahren']
    };
    return withoutSuffix ? format[key][0] : format[key][1];
}

var deAt = moment.defineLocale('de-at', {
    months : 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort : 'Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
    monthsParseExact : true,
    weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
    weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
    weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY HH:mm',
        LLLL : 'dddd, D. MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[heute um] LT [Uhr]',
        sameElse: 'L',
        nextDay: '[morgen um] LT [Uhr]',
        nextWeek: 'dddd [um] LT [Uhr]',
        lastDay: '[gestern um] LT [Uhr]',
        lastWeek: '[letzten] dddd [um] LT [Uhr]'
    },
    relativeTime : {
        future : 'in %s',
        past : 'vor %s',
        s : 'ein paar Sekunden',
        m : processRelativeTime,
        mm : '%d Minuten',
        h : processRelativeTime,
        hh : '%d Stunden',
        d : processRelativeTime,
        dd : processRelativeTime,
        M : processRelativeTime,
        MM : processRelativeTime,
        y : processRelativeTime,
        yy : processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return deAt;

})));


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : German (Switzerland) [de-ch]
//! author : sschueller : https://github.com/sschueller

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


// based on: https://www.bk.admin.ch/dokumentation/sprachen/04915/05016/index.html?lang=de#

function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
        'm': ['eine Minute', 'einer Minute'],
        'h': ['eine Stunde', 'einer Stunde'],
        'd': ['ein Tag', 'einem Tag'],
        'dd': [number + ' Tage', number + ' Tagen'],
        'M': ['ein Monat', 'einem Monat'],
        'MM': [number + ' Monate', number + ' Monaten'],
        'y': ['ein Jahr', 'einem Jahr'],
        'yy': [number + ' Jahre', number + ' Jahren']
    };
    return withoutSuffix ? format[key][0] : format[key][1];
}

var deCh = moment.defineLocale('de-ch', {
    months : 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort : 'Jan._Febr._März_April_Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.'.split('_'),
    monthsParseExact : true,
    weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
    weekdaysShort : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT: 'HH.mm',
        LTS: 'HH.mm.ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY HH.mm',
        LLLL : 'dddd, D. MMMM YYYY HH.mm'
    },
    calendar : {
        sameDay: '[heute um] LT [Uhr]',
        sameElse: 'L',
        nextDay: '[morgen um] LT [Uhr]',
        nextWeek: 'dddd [um] LT [Uhr]',
        lastDay: '[gestern um] LT [Uhr]',
        lastWeek: '[letzten] dddd [um] LT [Uhr]'
    },
    relativeTime : {
        future : 'in %s',
        past : 'vor %s',
        s : 'ein paar Sekunden',
        m : processRelativeTime,
        mm : '%d Minuten',
        h : processRelativeTime,
        hh : '%d Stunden',
        d : processRelativeTime,
        dd : processRelativeTime,
        M : processRelativeTime,
        MM : processRelativeTime,
        y : processRelativeTime,
        yy : processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return deCh;

})));


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Maldivian [dv]
//! author : Jawish Hameed : https://github.com/jawish

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var months = [
    'ޖެނުއަރީ',
    'ފެބްރުއަރީ',
    'މާރިޗު',
    'އޭޕްރީލު',
    'މޭ',
    'ޖޫން',
    'ޖުލައި',
    'އޯގަސްޓު',
    'ސެޕްޓެމްބަރު',
    'އޮކްޓޯބަރު',
    'ނޮވެމްބަރު',
    'ޑިސެމްބަރު'
];
var weekdays = [
    'އާދިއްތަ',
    'ހޯމަ',
    'އަންގާރަ',
    'ބުދަ',
    'ބުރާސްފަތި',
    'ހުކުރު',
    'ހޮނިހިރު'
];

var dv = moment.defineLocale('dv', {
    months : months,
    monthsShort : months,
    weekdays : weekdays,
    weekdaysShort : weekdays,
    weekdaysMin : 'އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި'.split('_'),
    longDateFormat : {

        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'D/M/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /މކ|މފ/,
    isPM : function (input) {
        return 'މފ' === input;
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return 'މކ';
        } else {
            return 'މފ';
        }
    },
    calendar : {
        sameDay : '[މިއަދު] LT',
        nextDay : '[މާދަމާ] LT',
        nextWeek : 'dddd LT',
        lastDay : '[އިއްޔެ] LT',
        lastWeek : '[ފާއިތުވި] dddd LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'ތެރޭގައި %s',
        past : 'ކުރިން %s',
        s : 'ސިކުންތުކޮޅެއް',
        m : 'މިނިޓެއް',
        mm : 'މިނިޓު %d',
        h : 'ގަޑިއިރެއް',
        hh : 'ގަޑިއިރު %d',
        d : 'ދުވަހެއް',
        dd : 'ދުވަސް %d',
        M : 'މަހެއް',
        MM : 'މަސް %d',
        y : 'އަހަރެއް',
        yy : 'އަހަރު %d'
    },
    preparse: function (string) {
        return string.replace(/،/g, ',');
    },
    postformat: function (string) {
        return string.replace(/,/g, '،');
    },
    week : {
        dow : 7,  // Sunday is the first day of the week.
        doy : 12  // The week that contains Jan 1st is the first week of the year.
    }
});

return dv;

})));


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Greek [el]
//! author : Aggelos Karalias : https://github.com/mehiel

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';

function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}


var el = moment.defineLocale('el', {
    monthsNominativeEl : 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
    monthsGenitiveEl : 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
    months : function (momentToFormat, format) {
        if (!momentToFormat) {
            return this._monthsNominativeEl;
        } else if (/D/.test(format.substring(0, format.indexOf('MMMM')))) { // if there is a day number before 'MMMM'
            return this._monthsGenitiveEl[momentToFormat.month()];
        } else {
            return this._monthsNominativeEl[momentToFormat.month()];
        }
    },
    monthsShort : 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
    weekdays : 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
    weekdaysShort : 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
    weekdaysMin : 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
    meridiem : function (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'μμ' : 'ΜΜ';
        } else {
            return isLower ? 'πμ' : 'ΠΜ';
        }
    },
    isPM : function (input) {
        return ((input + '').toLowerCase()[0] === 'μ');
    },
    meridiemParse : /[ΠΜ]\.?Μ?\.?/i,
    longDateFormat : {
        LT : 'h:mm A',
        LTS : 'h:mm:ss A',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY h:mm A',
        LLLL : 'dddd, D MMMM YYYY h:mm A'
    },
    calendarEl : {
        sameDay : '[Σήμερα {}] LT',
        nextDay : '[Αύριο {}] LT',
        nextWeek : 'dddd [{}] LT',
        lastDay : '[Χθες {}] LT',
        lastWeek : function () {
            switch (this.day()) {
                case 6:
                    return '[το προηγούμενο] dddd [{}] LT';
                default:
                    return '[την προηγούμενη] dddd [{}] LT';
            }
        },
        sameElse : 'L'
    },
    calendar : function (key, mom) {
        var output = this._calendarEl[key],
            hours = mom && mom.hours();
        if (isFunction(output)) {
            output = output.apply(mom);
        }
        return output.replace('{}', (hours % 12 === 1 ? 'στη' : 'στις'));
    },
    relativeTime : {
        future : 'σε %s',
        past : '%s πριν',
        s : 'λίγα δευτερόλεπτα',
        m : 'ένα λεπτό',
        mm : '%d λεπτά',
        h : 'μία ώρα',
        hh : '%d ώρες',
        d : 'μία μέρα',
        dd : '%d μέρες',
        M : 'ένας μήνας',
        MM : '%d μήνες',
        y : 'ένας χρόνος',
        yy : '%d χρόνια'
    },
    dayOfMonthOrdinalParse: /\d{1,2}η/,
    ordinal: '%dη',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4st is the first week of the year.
    }
});

return el;

})));


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : English (Australia) [en-au]
//! author : Jared Morse : https://github.com/jarcoal

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var enAu = moment.defineLocale('en-au', {
    months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat : {
        LT : 'h:mm A',
        LTS : 'h:mm:ss A',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY h:mm A',
        LLLL : 'dddd, D MMMM YYYY h:mm A'
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'in %s',
        past : '%s ago',
        s : 'a few seconds',
        m : 'a minute',
        mm : '%d minutes',
        h : 'an hour',
        hh : '%d hours',
        d : 'a day',
        dd : '%d days',
        M : 'a month',
        MM : '%d months',
        y : 'a year',
        yy : '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return enAu;

})));


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : English (Canada) [en-ca]
//! author : Jonathan Abourbih : https://github.com/jonbca

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var enCa = moment.defineLocale('en-ca', {
    months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat : {
        LT : 'h:mm A',
        LTS : 'h:mm:ss A',
        L : 'YYYY-MM-DD',
        LL : 'MMMM D, YYYY',
        LLL : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'in %s',
        past : '%s ago',
        s : 'a few seconds',
        m : 'a minute',
        mm : '%d minutes',
        h : 'an hour',
        hh : '%d hours',
        d : 'a day',
        dd : '%d days',
        M : 'a month',
        MM : '%d months',
        y : 'a year',
        yy : '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

return enCa;

})));


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : English (United Kingdom) [en-gb]
//! author : Chris Gedrim : https://github.com/chrisgedrim

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var enGb = moment.defineLocale('en-gb', {
    months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'in %s',
        past : '%s ago',
        s : 'a few seconds',
        m : 'a minute',
        mm : '%d minutes',
        h : 'an hour',
        hh : '%d hours',
        d : 'a day',
        dd : '%d days',
        M : 'a month',
        MM : '%d months',
        y : 'a year',
        yy : '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return enGb;

})));


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : English (Ireland) [en-ie]
//! author : Chris Cartlidge : https://github.com/chriscartlidge

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var enIe = moment.defineLocale('en-ie', {
    months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD-MM-YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'in %s',
        past : '%s ago',
        s : 'a few seconds',
        m : 'a minute',
        mm : '%d minutes',
        h : 'an hour',
        hh : '%d hours',
        d : 'a day',
        dd : '%d days',
        M : 'a month',
        MM : '%d months',
        y : 'a year',
        yy : '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return enIe;

})));


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : English (New Zealand) [en-nz]
//! author : Luke McGregor : https://github.com/lukemcgregor

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var enNz = moment.defineLocale('en-nz', {
    months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat : {
        LT : 'h:mm A',
        LTS : 'h:mm:ss A',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY h:mm A',
        LLLL : 'dddd, D MMMM YYYY h:mm A'
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'in %s',
        past : '%s ago',
        s : 'a few seconds',
        m : 'a minute',
        mm : '%d minutes',
        h : 'an hour',
        hh : '%d hours',
        d : 'a day',
        dd : '%d days',
        M : 'a month',
        MM : '%d months',
        y : 'a year',
        yy : '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return enNz;

})));


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Esperanto [eo]
//! author : Colin Dean : https://github.com/colindean
//! author : Mia Nordentoft Imperatori : https://github.com/miestasmia
//! comment : miestasmia corrected the translation by colindean

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var eo = moment.defineLocale('eo', {
    months : 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
    monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
    weekdays : 'dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato'.split('_'),
    weekdaysShort : 'dim_lun_mard_merk_ĵaŭ_ven_sab'.split('_'),
    weekdaysMin : 'di_lu_ma_me_ĵa_ve_sa'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'YYYY-MM-DD',
        LL : 'D[-a de] MMMM, YYYY',
        LLL : 'D[-a de] MMMM, YYYY HH:mm',
        LLLL : 'dddd, [la] D[-a de] MMMM, YYYY HH:mm'
    },
    meridiemParse: /[ap]\.t\.m/i,
    isPM: function (input) {
        return input.charAt(0).toLowerCase() === 'p';
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'p.t.m.' : 'P.T.M.';
        } else {
            return isLower ? 'a.t.m.' : 'A.T.M.';
        }
    },
    calendar : {
        sameDay : '[Hodiaŭ je] LT',
        nextDay : '[Morgaŭ je] LT',
        nextWeek : 'dddd [je] LT',
        lastDay : '[Hieraŭ je] LT',
        lastWeek : '[pasinta] dddd [je] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'post %s',
        past : 'antaŭ %s',
        s : 'sekundoj',
        m : 'minuto',
        mm : '%d minutoj',
        h : 'horo',
        hh : '%d horoj',
        d : 'tago',//ne 'diurno', ĉar estas uzita por proksimumo
        dd : '%d tagoj',
        M : 'monato',
        MM : '%d monatoj',
        y : 'jaro',
        yy : '%d jaroj'
    },
    dayOfMonthOrdinalParse: /\d{1,2}a/,
    ordinal : '%da',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return eo;

})));


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Spanish [es]
//! author : Julio Napurí : https://github.com/julionc

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_');
var monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

var es = moment.defineLocale('es', {
    months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    monthsShort : function (m, format) {
        if (!m) {
            return monthsShortDot;
        } else if (/-MMM-/.test(format)) {
            return monthsShort[m.month()];
        } else {
            return monthsShortDot[m.month()];
        }
    },
    monthsParseExact : true,
    weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin : 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D [de] MMMM [de] YYYY',
        LLL : 'D [de] MMMM [de] YYYY H:mm',
        LLLL : 'dddd, D [de] MMMM [de] YYYY H:mm'
    },
    calendar : {
        sameDay : function () {
            return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        nextDay : function () {
            return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        nextWeek : function () {
            return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        lastDay : function () {
            return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        lastWeek : function () {
            return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'en %s',
        past : 'hace %s',
        s : 'unos segundos',
        m : 'un minuto',
        mm : '%d minutos',
        h : 'una hora',
        hh : '%d horas',
        d : 'un día',
        dd : '%d días',
        M : 'un mes',
        MM : '%d meses',
        y : 'un año',
        yy : '%d años'
    },
    dayOfMonthOrdinalParse : /\d{1,2}º/,
    ordinal : '%dº',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return es;

})));


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Spanish (Dominican Republic) [es-do]

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_');
var monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

var esDo = moment.defineLocale('es-do', {
    months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    monthsShort : function (m, format) {
        if (!m) {
            return monthsShortDot;
        } else if (/-MMM-/.test(format)) {
            return monthsShort[m.month()];
        } else {
            return monthsShortDot[m.month()];
        }
    },
    monthsParseExact : true,
    weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin : 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'h:mm A',
        LTS : 'h:mm:ss A',
        L : 'DD/MM/YYYY',
        LL : 'D [de] MMMM [de] YYYY',
        LLL : 'D [de] MMMM [de] YYYY h:mm A',
        LLLL : 'dddd, D [de] MMMM [de] YYYY h:mm A'
    },
    calendar : {
        sameDay : function () {
            return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        nextDay : function () {
            return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        nextWeek : function () {
            return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        lastDay : function () {
            return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        lastWeek : function () {
            return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'en %s',
        past : 'hace %s',
        s : 'unos segundos',
        m : 'un minuto',
        mm : '%d minutos',
        h : 'una hora',
        hh : '%d horas',
        d : 'un día',
        dd : '%d días',
        M : 'un mes',
        MM : '%d meses',
        y : 'un año',
        yy : '%d años'
    },
    dayOfMonthOrdinalParse : /\d{1,2}º/,
    ordinal : '%dº',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return esDo;

})));


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Estonian [et]
//! author : Henry Kehlmann : https://github.com/madhenry
//! improvements : Illimar Tambek : https://github.com/ragulka

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
        's' : ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
        'm' : ['ühe minuti', 'üks minut'],
        'mm': [number + ' minuti', number + ' minutit'],
        'h' : ['ühe tunni', 'tund aega', 'üks tund'],
        'hh': [number + ' tunni', number + ' tundi'],
        'd' : ['ühe päeva', 'üks päev'],
        'M' : ['kuu aja', 'kuu aega', 'üks kuu'],
        'MM': [number + ' kuu', number + ' kuud'],
        'y' : ['ühe aasta', 'aasta', 'üks aasta'],
        'yy': [number + ' aasta', number + ' aastat']
    };
    if (withoutSuffix) {
        return format[key][2] ? format[key][2] : format[key][1];
    }
    return isFuture ? format[key][0] : format[key][1];
}

var et = moment.defineLocale('et', {
    months        : 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
    monthsShort   : 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
    weekdays      : 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
    weekdaysShort : 'P_E_T_K_N_R_L'.split('_'),
    weekdaysMin   : 'P_E_T_K_N_R_L'.split('_'),
    longDateFormat : {
        LT   : 'H:mm',
        LTS : 'H:mm:ss',
        L    : 'DD.MM.YYYY',
        LL   : 'D. MMMM YYYY',
        LLL  : 'D. MMMM YYYY H:mm',
        LLLL : 'dddd, D. MMMM YYYY H:mm'
    },
    calendar : {
        sameDay  : '[Täna,] LT',
        nextDay  : '[Homme,] LT',
        nextWeek : '[Järgmine] dddd LT',
        lastDay  : '[Eile,] LT',
        lastWeek : '[Eelmine] dddd LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s pärast',
        past   : '%s tagasi',
        s      : processRelativeTime,
        m      : processRelativeTime,
        mm     : processRelativeTime,
        h      : processRelativeTime,
        hh     : processRelativeTime,
        d      : processRelativeTime,
        dd     : '%d päeva',
        M      : processRelativeTime,
        MM     : processRelativeTime,
        y      : processRelativeTime,
        yy     : processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return et;

})));


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Basque [eu]
//! author : Eneko Illarramendi : https://github.com/eillarra

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var eu = moment.defineLocale('eu', {
    months : 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
    monthsShort : 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
    monthsParseExact : true,
    weekdays : 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
    weekdaysShort : 'ig._al._ar._az._og._ol._lr.'.split('_'),
    weekdaysMin : 'ig_al_ar_az_og_ol_lr'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'YYYY-MM-DD',
        LL : 'YYYY[ko] MMMM[ren] D[a]',
        LLL : 'YYYY[ko] MMMM[ren] D[a] HH:mm',
        LLLL : 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
        l : 'YYYY-M-D',
        ll : 'YYYY[ko] MMM D[a]',
        lll : 'YYYY[ko] MMM D[a] HH:mm',
        llll : 'ddd, YYYY[ko] MMM D[a] HH:mm'
    },
    calendar : {
        sameDay : '[gaur] LT[etan]',
        nextDay : '[bihar] LT[etan]',
        nextWeek : 'dddd LT[etan]',
        lastDay : '[atzo] LT[etan]',
        lastWeek : '[aurreko] dddd LT[etan]',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s barru',
        past : 'duela %s',
        s : 'segundo batzuk',
        m : 'minutu bat',
        mm : '%d minutu',
        h : 'ordu bat',
        hh : '%d ordu',
        d : 'egun bat',
        dd : '%d egun',
        M : 'hilabete bat',
        MM : '%d hilabete',
        y : 'urte bat',
        yy : '%d urte'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return eu;

})));


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Persian [fa]
//! author : Ebrahim Byagowi : https://github.com/ebraminio

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var symbolMap = {
    '1': '۱',
    '2': '۲',
    '3': '۳',
    '4': '۴',
    '5': '۵',
    '6': '۶',
    '7': '۷',
    '8': '۸',
    '9': '۹',
    '0': '۰'
};
var numberMap = {
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9',
    '۰': '0'
};

var fa = moment.defineLocale('fa', {
    months : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
    monthsShort : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
    weekdays : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
    weekdaysShort : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
    weekdaysMin : 'ی_د_س_چ_پ_ج_ش'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    meridiemParse: /قبل از ظهر|بعد از ظهر/,
    isPM: function (input) {
        return /بعد از ظهر/.test(input);
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return 'قبل از ظهر';
        } else {
            return 'بعد از ظهر';
        }
    },
    calendar : {
        sameDay : '[امروز ساعت] LT',
        nextDay : '[فردا ساعت] LT',
        nextWeek : 'dddd [ساعت] LT',
        lastDay : '[دیروز ساعت] LT',
        lastWeek : 'dddd [پیش] [ساعت] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'در %s',
        past : '%s پیش',
        s : 'چند ثانیه',
        m : 'یک دقیقه',
        mm : '%d دقیقه',
        h : 'یک ساعت',
        hh : '%d ساعت',
        d : 'یک روز',
        dd : '%d روز',
        M : 'یک ماه',
        MM : '%d ماه',
        y : 'یک سال',
        yy : '%d سال'
    },
    preparse: function (string) {
        return string.replace(/[۰-۹]/g, function (match) {
            return numberMap[match];
        }).replace(/،/g, ',');
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        }).replace(/,/g, '،');
    },
    dayOfMonthOrdinalParse: /\d{1,2}م/,
    ordinal : '%dم',
    week : {
        dow : 6, // Saturday is the first day of the week.
        doy : 12 // The week that contains Jan 1st is the first week of the year.
    }
});

return fa;

})));


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Finnish [fi]
//! author : Tarmo Aidantausta : https://github.com/bleadof

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' ');
var numbersFuture = [
        'nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden',
        numbersPast[7], numbersPast[8], numbersPast[9]
    ];
function translate(number, withoutSuffix, key, isFuture) {
    var result = '';
    switch (key) {
        case 's':
            return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
        case 'm':
            return isFuture ? 'minuutin' : 'minuutti';
        case 'mm':
            result = isFuture ? 'minuutin' : 'minuuttia';
            break;
        case 'h':
            return isFuture ? 'tunnin' : 'tunti';
        case 'hh':
            result = isFuture ? 'tunnin' : 'tuntia';
            break;
        case 'd':
            return isFuture ? 'päivän' : 'päivä';
        case 'dd':
            result = isFuture ? 'päivän' : 'päivää';
            break;
        case 'M':
            return isFuture ? 'kuukauden' : 'kuukausi';
        case 'MM':
            result = isFuture ? 'kuukauden' : 'kuukautta';
            break;
        case 'y':
            return isFuture ? 'vuoden' : 'vuosi';
        case 'yy':
            result = isFuture ? 'vuoden' : 'vuotta';
            break;
    }
    result = verbalNumber(number, isFuture) + ' ' + result;
    return result;
}
function verbalNumber(number, isFuture) {
    return number < 10 ? (isFuture ? numbersFuture[number] : numbersPast[number]) : number;
}

var fi = moment.defineLocale('fi', {
    months : 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
    monthsShort : 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
    weekdays : 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
    weekdaysShort : 'su_ma_ti_ke_to_pe_la'.split('_'),
    weekdaysMin : 'su_ma_ti_ke_to_pe_la'.split('_'),
    longDateFormat : {
        LT : 'HH.mm',
        LTS : 'HH.mm.ss',
        L : 'DD.MM.YYYY',
        LL : 'Do MMMM[ta] YYYY',
        LLL : 'Do MMMM[ta] YYYY, [klo] HH.mm',
        LLLL : 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
        l : 'D.M.YYYY',
        ll : 'Do MMM YYYY',
        lll : 'Do MMM YYYY, [klo] HH.mm',
        llll : 'ddd, Do MMM YYYY, [klo] HH.mm'
    },
    calendar : {
        sameDay : '[tänään] [klo] LT',
        nextDay : '[huomenna] [klo] LT',
        nextWeek : 'dddd [klo] LT',
        lastDay : '[eilen] [klo] LT',
        lastWeek : '[viime] dddd[na] [klo] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s päästä',
        past : '%s sitten',
        s : translate,
        m : translate,
        mm : translate,
        h : translate,
        hh : translate,
        d : translate,
        dd : translate,
        M : translate,
        MM : translate,
        y : translate,
        yy : translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return fi;

})));


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Faroese [fo]
//! author : Ragnar Johannesen : https://github.com/ragnar123

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var fo = moment.defineLocale('fo', {
    months : 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
    monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
    weekdays : 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
    weekdaysShort : 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
    weekdaysMin : 'su_má_tý_mi_hó_fr_le'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D. MMMM, YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Í dag kl.] LT',
        nextDay : '[Í morgin kl.] LT',
        nextWeek : 'dddd [kl.] LT',
        lastDay : '[Í gjár kl.] LT',
        lastWeek : '[síðstu] dddd [kl] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'um %s',
        past : '%s síðani',
        s : 'fá sekund',
        m : 'ein minutt',
        mm : '%d minuttir',
        h : 'ein tími',
        hh : '%d tímar',
        d : 'ein dagur',
        dd : '%d dagar',
        M : 'ein mánaði',
        MM : '%d mánaðir',
        y : 'eitt ár',
        yy : '%d ár'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return fo;

})));


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : French [fr]
//! author : John Fischer : https://github.com/jfroffice

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var fr = moment.defineLocale('fr', {
    months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact : true,
    weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Aujourd’hui à] LT',
        nextDay : '[Demain à] LT',
        nextWeek : 'dddd [à] LT',
        lastDay : '[Hier à] LT',
        lastWeek : 'dddd [dernier à] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'dans %s',
        past : 'il y a %s',
        s : 'quelques secondes',
        m : 'une minute',
        mm : '%d minutes',
        h : 'une heure',
        hh : '%d heures',
        d : 'un jour',
        dd : '%d jours',
        M : 'un mois',
        MM : '%d mois',
        y : 'un an',
        yy : '%d ans'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
    ordinal : function (number, period) {
        switch (period) {
            // TODO: Return 'e' when day of month > 1. Move this case inside
            // block for masculine words below.
            // See https://github.com/moment/moment/issues/3375
            case 'D':
                return number + (number === 1 ? 'er' : '');

            // Words with masculine grammatical gender: mois, trimestre, jour
            default:
            case 'M':
            case 'Q':
            case 'DDD':
            case 'd':
                return number + (number === 1 ? 'er' : 'e');

            // Words with feminine grammatical gender: semaine
            case 'w':
            case 'W':
                return number + (number === 1 ? 're' : 'e');
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return fr;

})));


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : French (Canada) [fr-ca]
//! author : Jonathan Abourbih : https://github.com/jonbca

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var frCa = moment.defineLocale('fr-ca', {
    months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact : true,
    weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'YYYY-MM-DD',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Aujourd’hui à] LT',
        nextDay : '[Demain à] LT',
        nextWeek : 'dddd [à] LT',
        lastDay : '[Hier à] LT',
        lastWeek : 'dddd [dernier à] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'dans %s',
        past : 'il y a %s',
        s : 'quelques secondes',
        m : 'une minute',
        mm : '%d minutes',
        h : 'une heure',
        hh : '%d heures',
        d : 'un jour',
        dd : '%d jours',
        M : 'un mois',
        MM : '%d mois',
        y : 'un an',
        yy : '%d ans'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
    ordinal : function (number, period) {
        switch (period) {
            // Words with masculine grammatical gender: mois, trimestre, jour
            default:
            case 'M':
            case 'Q':
            case 'D':
            case 'DDD':
            case 'd':
                return number + (number === 1 ? 'er' : 'e');

            // Words with feminine grammatical gender: semaine
            case 'w':
            case 'W':
                return number + (number === 1 ? 're' : 'e');
        }
    }
});

return frCa;

})));


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : French (Switzerland) [fr-ch]
//! author : Gaspard Bucher : https://github.com/gaspard

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var frCh = moment.defineLocale('fr-ch', {
    months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact : true,
    weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Aujourd’hui à] LT',
        nextDay : '[Demain à] LT',
        nextWeek : 'dddd [à] LT',
        lastDay : '[Hier à] LT',
        lastWeek : 'dddd [dernier à] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'dans %s',
        past : 'il y a %s',
        s : 'quelques secondes',
        m : 'une minute',
        mm : '%d minutes',
        h : 'une heure',
        hh : '%d heures',
        d : 'un jour',
        dd : '%d jours',
        M : 'un mois',
        MM : '%d mois',
        y : 'un an',
        yy : '%d ans'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
    ordinal : function (number, period) {
        switch (period) {
            // Words with masculine grammatical gender: mois, trimestre, jour
            default:
            case 'M':
            case 'Q':
            case 'D':
            case 'DDD':
            case 'd':
                return number + (number === 1 ? 'er' : 'e');

            // Words with feminine grammatical gender: semaine
            case 'w':
            case 'W':
                return number + (number === 1 ? 're' : 'e');
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return frCh;

})));


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Frisian [fy]
//! author : Robin van der Vliet : https://github.com/robin0van0der0v

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_');
var monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');

var fy = moment.defineLocale('fy', {
    months : 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
    monthsShort : function (m, format) {
        if (!m) {
            return monthsShortWithDots;
        } else if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots[m.month()];
        } else {
            return monthsShortWithDots[m.month()];
        }
    },
    monthsParseExact : true,
    weekdays : 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
    weekdaysShort : 'si._mo._ti._wo._to._fr._so.'.split('_'),
    weekdaysMin : 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD-MM-YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[hjoed om] LT',
        nextDay: '[moarn om] LT',
        nextWeek: 'dddd [om] LT',
        lastDay: '[juster om] LT',
        lastWeek: '[ôfrûne] dddd [om] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'oer %s',
        past : '%s lyn',
        s : 'in pear sekonden',
        m : 'ien minút',
        mm : '%d minuten',
        h : 'ien oere',
        hh : '%d oeren',
        d : 'ien dei',
        dd : '%d dagen',
        M : 'ien moanne',
        MM : '%d moannen',
        y : 'ien jier',
        yy : '%d jierren'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal : function (number) {
        return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return fy;

})));


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Scottish Gaelic [gd]
//! author : Jon Ashdown : https://github.com/jonashdown

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var months = [
    'Am Faoilleach', 'An Gearran', 'Am Màrt', 'An Giblean', 'An Cèitean', 'An t-Ògmhios', 'An t-Iuchar', 'An Lùnastal', 'An t-Sultain', 'An Dàmhair', 'An t-Samhain', 'An Dùbhlachd'
];

var monthsShort = ['Faoi', 'Gear', 'Màrt', 'Gibl', 'Cèit', 'Ògmh', 'Iuch', 'Lùn', 'Sult', 'Dàmh', 'Samh', 'Dùbh'];

var weekdays = ['Didòmhnaich', 'Diluain', 'Dimàirt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne'];

var weekdaysShort = ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'];

var weekdaysMin = ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'];

var gd = moment.defineLocale('gd', {
    months : months,
    monthsShort : monthsShort,
    monthsParseExact : true,
    weekdays : weekdays,
    weekdaysShort : weekdaysShort,
    weekdaysMin : weekdaysMin,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[An-diugh aig] LT',
        nextDay : '[A-màireach aig] LT',
        nextWeek : 'dddd [aig] LT',
        lastDay : '[An-dè aig] LT',
        lastWeek : 'dddd [seo chaidh] [aig] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'ann an %s',
        past : 'bho chionn %s',
        s : 'beagan diogan',
        m : 'mionaid',
        mm : '%d mionaidean',
        h : 'uair',
        hh : '%d uairean',
        d : 'latha',
        dd : '%d latha',
        M : 'mìos',
        MM : '%d mìosan',
        y : 'bliadhna',
        yy : '%d bliadhna'
    },
    dayOfMonthOrdinalParse : /\d{1,2}(d|na|mh)/,
    ordinal : function (number) {
        var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return gd;

})));


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Galician [gl]
//! author : Juan G. Hurtado : https://github.com/juanghurtado

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var gl = moment.defineLocale('gl', {
    months : 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
    monthsShort : 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays : 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
    weekdaysShort : 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
    weekdaysMin : 'do_lu_ma_mé_xo_ve_sá'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D [de] MMMM [de] YYYY',
        LLL : 'D [de] MMMM [de] YYYY H:mm',
        LLLL : 'dddd, D [de] MMMM [de] YYYY H:mm'
    },
    calendar : {
        sameDay : function () {
            return '[hoxe ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
        },
        nextDay : function () {
            return '[mañá ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
        },
        nextWeek : function () {
            return 'dddd [' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
        },
        lastDay : function () {
            return '[onte ' + ((this.hours() !== 1) ? 'á' : 'a') + '] LT';
        },
        lastWeek : function () {
            return '[o] dddd [pasado ' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : function (str) {
            if (str.indexOf('un') === 0) {
                return 'n' + str;
            }
            return 'en ' + str;
        },
        past : 'hai %s',
        s : 'uns segundos',
        m : 'un minuto',
        mm : '%d minutos',
        h : 'unha hora',
        hh : '%d horas',
        d : 'un día',
        dd : '%d días',
        M : 'un mes',
        MM : '%d meses',
        y : 'un ano',
        yy : '%d anos'
    },
    dayOfMonthOrdinalParse : /\d{1,2}º/,
    ordinal : '%dº',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return gl;

})));


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Konkani Latin script [gom-latn]
//! author : The Discoverer : https://github.com/WikiDiscoverer

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
        's': ['thodde secondanim', 'thodde second'],
        'm': ['eka mintan', 'ek minute'],
        'mm': [number + ' mintanim', number + ' mintam'],
        'h': ['eka horan', 'ek hor'],
        'hh': [number + ' horanim', number + ' hor'],
        'd': ['eka disan', 'ek dis'],
        'dd': [number + ' disanim', number + ' dis'],
        'M': ['eka mhoinean', 'ek mhoino'],
        'MM': [number + ' mhoineanim', number + ' mhoine'],
        'y': ['eka vorsan', 'ek voros'],
        'yy': [number + ' vorsanim', number + ' vorsam']
    };
    return withoutSuffix ? format[key][0] : format[key][1];
}

var gomLatn = moment.defineLocale('gom-latn', {
    months : 'Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr'.split('_'),
    monthsShort : 'Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.'.split('_'),
    monthsParseExact : true,
    weekdays : 'Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son\'var'.split('_'),
    weekdaysShort : 'Ait._Som._Mon._Bud._Bre._Suk._Son.'.split('_'),
    weekdaysMin : 'Ai_Sm_Mo_Bu_Br_Su_Sn'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'A h:mm [vazta]',
        LTS : 'A h:mm:ss [vazta]',
        L : 'DD-MM-YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY A h:mm [vazta]',
        LLLL : 'dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]',
        llll: 'ddd, D MMM YYYY, A h:mm [vazta]'
    },
    calendar : {
        sameDay: '[Aiz] LT',
        nextDay: '[Faleam] LT',
        nextWeek: '[Ieta to] dddd[,] LT',
        lastDay: '[Kal] LT',
        lastWeek: '[Fatlo] dddd[,] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : '%s',
        past : '%s adim',
        s : processRelativeTime,
        m : processRelativeTime,
        mm : processRelativeTime,
        h : processRelativeTime,
        hh : processRelativeTime,
        d : processRelativeTime,
        dd : processRelativeTime,
        M : processRelativeTime,
        MM : processRelativeTime,
        y : processRelativeTime,
        yy : processRelativeTime
    },
    dayOfMonthOrdinalParse : /\d{1,2}(er)/,
    ordinal : function (number, period) {
        switch (period) {
            // the ordinal 'er' only applies to day of the month
            case 'D':
                return number + 'er';
            default:
            case 'M':
            case 'Q':
            case 'DDD':
            case 'd':
            case 'w':
            case 'W':
                return number;
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    },
    meridiemParse: /rati|sokalli|donparam|sanje/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'rati') {
            return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'sokalli') {
            return hour;
        } else if (meridiem === 'donparam') {
            return hour > 12 ? hour : hour + 12;
        } else if (meridiem === 'sanje') {
            return hour + 12;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'rati';
        } else if (hour < 12) {
            return 'sokalli';
        } else if (hour < 16) {
            return 'donparam';
        } else if (hour < 20) {
            return 'sanje';
        } else {
            return 'rati';
        }
    }
});

return gomLatn;

})));


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Hebrew [he]
//! author : Tomer Cohen : https://github.com/tomer
//! author : Moshe Simantov : https://github.com/DevelopmentIL
//! author : Tal Ater : https://github.com/TalAter

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var he = moment.defineLocale('he', {
    months : 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
    monthsShort : 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
    weekdays : 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
    weekdaysShort : 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
    weekdaysMin : 'א_ב_ג_ד_ה_ו_ש'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D [ב]MMMM YYYY',
        LLL : 'D [ב]MMMM YYYY HH:mm',
        LLLL : 'dddd, D [ב]MMMM YYYY HH:mm',
        l : 'D/M/YYYY',
        ll : 'D MMM YYYY',
        lll : 'D MMM YYYY HH:mm',
        llll : 'ddd, D MMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[היום ב־]LT',
        nextDay : '[מחר ב־]LT',
        nextWeek : 'dddd [בשעה] LT',
        lastDay : '[אתמול ב־]LT',
        lastWeek : '[ביום] dddd [האחרון בשעה] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'בעוד %s',
        past : 'לפני %s',
        s : 'מספר שניות',
        m : 'דקה',
        mm : '%d דקות',
        h : 'שעה',
        hh : function (number) {
            if (number === 2) {
                return 'שעתיים';
            }
            return number + ' שעות';
        },
        d : 'יום',
        dd : function (number) {
            if (number === 2) {
                return 'יומיים';
            }
            return number + ' ימים';
        },
        M : 'חודש',
        MM : function (number) {
            if (number === 2) {
                return 'חודשיים';
            }
            return number + ' חודשים';
        },
        y : 'שנה',
        yy : function (number) {
            if (number === 2) {
                return 'שנתיים';
            } else if (number % 10 === 0 && number !== 10) {
                return number + ' שנה';
            }
            return number + ' שנים';
        }
    },
    meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
    isPM : function (input) {
        return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 5) {
            return 'לפנות בוקר';
        } else if (hour < 10) {
            return 'בבוקר';
        } else if (hour < 12) {
            return isLower ? 'לפנה"צ' : 'לפני הצהריים';
        } else if (hour < 18) {
            return isLower ? 'אחה"צ' : 'אחרי הצהריים';
        } else {
            return 'בערב';
        }
    }
});

return he;

})));


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Hindi [hi]
//! author : Mayank Singhal : https://github.com/mayanksinghal

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var symbolMap = {
    '1': '१',
    '2': '२',
    '3': '३',
    '4': '४',
    '5': '५',
    '6': '६',
    '7': '७',
    '8': '८',
    '9': '९',
    '0': '०'
};
var numberMap = {
    '१': '1',
    '२': '2',
    '३': '3',
    '४': '4',
    '५': '5',
    '६': '6',
    '७': '7',
    '८': '8',
    '९': '9',
    '०': '0'
};

var hi = moment.defineLocale('hi', {
    months : 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
    monthsShort : 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
    monthsParseExact: true,
    weekdays : 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
    weekdaysShort : 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
    weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
    longDateFormat : {
        LT : 'A h:mm बजे',
        LTS : 'A h:mm:ss बजे',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, A h:mm बजे',
        LLLL : 'dddd, D MMMM YYYY, A h:mm बजे'
    },
    calendar : {
        sameDay : '[आज] LT',
        nextDay : '[कल] LT',
        nextWeek : 'dddd, LT',
        lastDay : '[कल] LT',
        lastWeek : '[पिछले] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s में',
        past : '%s पहले',
        s : 'कुछ ही क्षण',
        m : 'एक मिनट',
        mm : '%d मिनट',
        h : 'एक घंटा',
        hh : '%d घंटे',
        d : 'एक दिन',
        dd : '%d दिन',
        M : 'एक महीने',
        MM : '%d महीने',
        y : 'एक वर्ष',
        yy : '%d वर्ष'
    },
    preparse: function (string) {
        return string.replace(/[१२३४५६७८९०]/g, function (match) {
            return numberMap[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        });
    },
    // Hindi notation for meridiems are quite fuzzy in practice. While there exists
    // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
    meridiemParse: /रात|सुबह|दोपहर|शाम/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'रात') {
            return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'सुबह') {
            return hour;
        } else if (meridiem === 'दोपहर') {
            return hour >= 10 ? hour : hour + 12;
        } else if (meridiem === 'शाम') {
            return hour + 12;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'रात';
        } else if (hour < 10) {
            return 'सुबह';
        } else if (hour < 17) {
            return 'दोपहर';
        } else if (hour < 20) {
            return 'शाम';
        } else {
            return 'रात';
        }
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

return hi;

})));


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Croatian [hr]
//! author : Bojan Marković : https://github.com/bmarkovic

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


function translate(number, withoutSuffix, key) {
    var result = number + ' ';
    switch (key) {
        case 'm':
            return withoutSuffix ? 'jedna minuta' : 'jedne minute';
        case 'mm':
            if (number === 1) {
                result += 'minuta';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'minute';
            } else {
                result += 'minuta';
            }
            return result;
        case 'h':
            return withoutSuffix ? 'jedan sat' : 'jednog sata';
        case 'hh':
            if (number === 1) {
                result += 'sat';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'sata';
            } else {
                result += 'sati';
            }
            return result;
        case 'dd':
            if (number === 1) {
                result += 'dan';
            } else {
                result += 'dana';
            }
            return result;
        case 'MM':
            if (number === 1) {
                result += 'mjesec';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'mjeseca';
            } else {
                result += 'mjeseci';
            }
            return result;
        case 'yy':
            if (number === 1) {
                result += 'godina';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'godine';
            } else {
                result += 'godina';
            }
            return result;
    }
}

var hr = moment.defineLocale('hr', {
    months : {
        format: 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_'),
        standalone: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_')
    },
    monthsShort : 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
    monthsParseExact: true,
    weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
    weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
    weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY H:mm',
        LLLL : 'dddd, D. MMMM YYYY H:mm'
    },
    calendar : {
        sameDay  : '[danas u] LT',
        nextDay  : '[sutra u] LT',
        nextWeek : function () {
            switch (this.day()) {
                case 0:
                    return '[u] [nedjelju] [u] LT';
                case 3:
                    return '[u] [srijedu] [u] LT';
                case 6:
                    return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[u] dddd [u] LT';
            }
        },
        lastDay  : '[jučer u] LT',
        lastWeek : function () {
            switch (this.day()) {
                case 0:
                case 3:
                    return '[prošlu] dddd [u] LT';
                case 6:
                    return '[prošle] [subote] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[prošli] dddd [u] LT';
            }
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'za %s',
        past   : 'prije %s',
        s      : 'par sekundi',
        m      : translate,
        mm     : translate,
        h      : translate,
        hh     : translate,
        d      : 'dan',
        dd     : translate,
        M      : 'mjesec',
        MM     : translate,
        y      : 'godinu',
        yy     : translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return hr;

})));


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Hungarian [hu]
//! author : Adam Brunner : https://github.com/adambrunner

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
function translate(number, withoutSuffix, key, isFuture) {
    var num = number,
        suffix;
    switch (key) {
        case 's':
            return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
        case 'm':
            return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'mm':
            return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'h':
            return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
        case 'hh':
            return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
        case 'd':
            return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'dd':
            return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'M':
            return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
        case 'MM':
            return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
        case 'y':
            return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
        case 'yy':
            return num + (isFuture || withoutSuffix ? ' év' : ' éve');
    }
    return '';
}
function week(isFuture) {
    return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
}

var hu = moment.defineLocale('hu', {
    months : 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
    monthsShort : 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
    weekdays : 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
    weekdaysShort : 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
    weekdaysMin : 'v_h_k_sze_cs_p_szo'.split('_'),
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'YYYY.MM.DD.',
        LL : 'YYYY. MMMM D.',
        LLL : 'YYYY. MMMM D. H:mm',
        LLLL : 'YYYY. MMMM D., dddd H:mm'
    },
    meridiemParse: /de|du/i,
    isPM: function (input) {
        return input.charAt(1).toLowerCase() === 'u';
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours < 12) {
            return isLower === true ? 'de' : 'DE';
        } else {
            return isLower === true ? 'du' : 'DU';
        }
    },
    calendar : {
        sameDay : '[ma] LT[-kor]',
        nextDay : '[holnap] LT[-kor]',
        nextWeek : function () {
            return week.call(this, true);
        },
        lastDay : '[tegnap] LT[-kor]',
        lastWeek : function () {
            return week.call(this, false);
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s múlva',
        past : '%s',
        s : translate,
        m : translate,
        mm : translate,
        h : translate,
        hh : translate,
        d : translate,
        dd : translate,
        M : translate,
        MM : translate,
        y : translate,
        yy : translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return hu;

})));


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Armenian [hy-am]
//! author : Armendarabyan : https://github.com/armendarabyan

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var hyAm = moment.defineLocale('hy-am', {
    months : {
        format: 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_'),
        standalone: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_')
    },
    monthsShort : 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_'),
    weekdays : 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_'),
    weekdaysShort : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
    weekdaysMin : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY թ.',
        LLL : 'D MMMM YYYY թ., HH:mm',
        LLLL : 'dddd, D MMMM YYYY թ., HH:mm'
    },
    calendar : {
        sameDay: '[այսօր] LT',
        nextDay: '[վաղը] LT',
        lastDay: '[երեկ] LT',
        nextWeek: function () {
            return 'dddd [օրը ժամը] LT';
        },
        lastWeek: function () {
            return '[անցած] dddd [օրը ժամը] LT';
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : '%s հետո',
        past : '%s առաջ',
        s : 'մի քանի վայրկյան',
        m : 'րոպե',
        mm : '%d րոպե',
        h : 'ժամ',
        hh : '%d ժամ',
        d : 'օր',
        dd : '%d օր',
        M : 'ամիս',
        MM : '%d ամիս',
        y : 'տարի',
        yy : '%d տարի'
    },
    meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
    isPM: function (input) {
        return /^(ցերեկվա|երեկոյան)$/.test(input);
    },
    meridiem : function (hour) {
        if (hour < 4) {
            return 'գիշերվա';
        } else if (hour < 12) {
            return 'առավոտվա';
        } else if (hour < 17) {
            return 'ցերեկվա';
        } else {
            return 'երեկոյան';
        }
    },
    dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
    ordinal: function (number, period) {
        switch (period) {
            case 'DDD':
            case 'w':
            case 'W':
            case 'DDDo':
                if (number === 1) {
                    return number + '-ին';
                }
                return number + '-րդ';
            default:
                return number;
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return hyAm;

})));


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Indonesian [id]
//! author : Mohammad Satrio Utomo : https://github.com/tyok
//! reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var id = moment.defineLocale('id', {
    months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
    monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
    weekdays : 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
    weekdaysShort : 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
    weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
    longDateFormat : {
        LT : 'HH.mm',
        LTS : 'HH.mm.ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY [pukul] HH.mm',
        LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
    },
    meridiemParse: /pagi|siang|sore|malam/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'pagi') {
            return hour;
        } else if (meridiem === 'siang') {
            return hour >= 11 ? hour : hour + 12;
        } else if (meridiem === 'sore' || meridiem === 'malam') {
            return hour + 12;
        }
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours < 11) {
            return 'pagi';
        } else if (hours < 15) {
            return 'siang';
        } else if (hours < 19) {
            return 'sore';
        } else {
            return 'malam';
        }
    },
    calendar : {
        sameDay : '[Hari ini pukul] LT',
        nextDay : '[Besok pukul] LT',
        nextWeek : 'dddd [pukul] LT',
        lastDay : '[Kemarin pukul] LT',
        lastWeek : 'dddd [lalu pukul] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'dalam %s',
        past : '%s yang lalu',
        s : 'beberapa detik',
        m : 'semenit',
        mm : '%d menit',
        h : 'sejam',
        hh : '%d jam',
        d : 'sehari',
        dd : '%d hari',
        M : 'sebulan',
        MM : '%d bulan',
        y : 'setahun',
        yy : '%d tahun'
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return id;

})));


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Icelandic [is]
//! author : Hinrik Örn Sigurðsson : https://github.com/hinrik

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


function plural(n) {
    if (n % 100 === 11) {
        return true;
    } else if (n % 10 === 1) {
        return false;
    }
    return true;
}
function translate(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    switch (key) {
        case 's':
            return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
        case 'm':
            return withoutSuffix ? 'mínúta' : 'mínútu';
        case 'mm':
            if (plural(number)) {
                return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
            } else if (withoutSuffix) {
                return result + 'mínúta';
            }
            return result + 'mínútu';
        case 'hh':
            if (plural(number)) {
                return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
            }
            return result + 'klukkustund';
        case 'd':
            if (withoutSuffix) {
                return 'dagur';
            }
            return isFuture ? 'dag' : 'degi';
        case 'dd':
            if (plural(number)) {
                if (withoutSuffix) {
                    return result + 'dagar';
                }
                return result + (isFuture ? 'daga' : 'dögum');
            } else if (withoutSuffix) {
                return result + 'dagur';
            }
            return result + (isFuture ? 'dag' : 'degi');
        case 'M':
            if (withoutSuffix) {
                return 'mánuður';
            }
            return isFuture ? 'mánuð' : 'mánuði';
        case 'MM':
            if (plural(number)) {
                if (withoutSuffix) {
                    return result + 'mánuðir';
                }
                return result + (isFuture ? 'mánuði' : 'mánuðum');
            } else if (withoutSuffix) {
                return result + 'mánuður';
            }
            return result + (isFuture ? 'mánuð' : 'mánuði');
        case 'y':
            return withoutSuffix || isFuture ? 'ár' : 'ári';
        case 'yy':
            if (plural(number)) {
                return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
            }
            return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
    }
}

var is = moment.defineLocale('is', {
    months : 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
    monthsShort : 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
    weekdays : 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
    weekdaysShort : 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
    weekdaysMin : 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY [kl.] H:mm',
        LLLL : 'dddd, D. MMMM YYYY [kl.] H:mm'
    },
    calendar : {
        sameDay : '[í dag kl.] LT',
        nextDay : '[á morgun kl.] LT',
        nextWeek : 'dddd [kl.] LT',
        lastDay : '[í gær kl.] LT',
        lastWeek : '[síðasta] dddd [kl.] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'eftir %s',
        past : 'fyrir %s síðan',
        s : translate,
        m : translate,
        mm : translate,
        h : 'klukkustund',
        hh : translate,
        d : translate,
        dd : translate,
        M : translate,
        MM : translate,
        y : translate,
        yy : translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return is;

})));


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Italian [it]
//! author : Lorenzo : https://github.com/aliem
//! author: Mattia Larentis: https://github.com/nostalgiaz

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var it = moment.defineLocale('it', {
    months : 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
    monthsShort : 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
    weekdays : 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
    weekdaysShort : 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
    weekdaysMin : 'do_lu_ma_me_gi_ve_sa'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[Oggi alle] LT',
        nextDay: '[Domani alle] LT',
        nextWeek: 'dddd [alle] LT',
        lastDay: '[Ieri alle] LT',
        lastWeek: function () {
            switch (this.day()) {
                case 0:
                    return '[la scorsa] dddd [alle] LT';
                default:
                    return '[lo scorso] dddd [alle] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : function (s) {
            return ((/^[0-9].+$/).test(s) ? 'tra' : 'in') + ' ' + s;
        },
        past : '%s fa',
        s : 'alcuni secondi',
        m : 'un minuto',
        mm : '%d minuti',
        h : 'un\'ora',
        hh : '%d ore',
        d : 'un giorno',
        dd : '%d giorni',
        M : 'un mese',
        MM : '%d mesi',
        y : 'un anno',
        yy : '%d anni'
    },
    dayOfMonthOrdinalParse : /\d{1,2}º/,
    ordinal: '%dº',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return it;

})));


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Japanese [ja]
//! author : LI Long : https://github.com/baryon

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var ja = moment.defineLocale('ja', {
    months : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays : '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
    weekdaysShort : '日_月_火_水_木_金_土'.split('_'),
    weekdaysMin : '日_月_火_水_木_金_土'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'YYYY/MM/DD',
        LL : 'YYYY年M月D日',
        LLL : 'YYYY年M月D日 HH:mm',
        LLLL : 'YYYY年M月D日 HH:mm dddd',
        l : 'YYYY/MM/DD',
        ll : 'YYYY年M月D日',
        lll : 'YYYY年M月D日 HH:mm',
        llll : 'YYYY年M月D日 HH:mm dddd'
    },
    meridiemParse: /午前|午後/i,
    isPM : function (input) {
        return input === '午後';
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return '午前';
        } else {
            return '午後';
        }
    },
    calendar : {
        sameDay : '[今日] LT',
        nextDay : '[明日] LT',
        nextWeek : '[来週]dddd LT',
        lastDay : '[昨日] LT',
        lastWeek : '[前週]dddd LT',
        sameElse : 'L'
    },
    dayOfMonthOrdinalParse : /\d{1,2}日/,
    ordinal : function (number, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return number + '日';
            default:
                return number;
        }
    },
    relativeTime : {
        future : '%s後',
        past : '%s前',
        s : '数秒',
        m : '1分',
        mm : '%d分',
        h : '1時間',
        hh : '%d時間',
        d : '1日',
        dd : '%d日',
        M : '1ヶ月',
        MM : '%dヶ月',
        y : '1年',
        yy : '%d年'
    }
});

return ja;

})));


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Javanese [jv]
//! author : Rony Lantip : https://github.com/lantip
//! reference: http://jv.wikipedia.org/wiki/Basa_Jawa

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var jv = moment.defineLocale('jv', {
    months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
    monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
    weekdays : 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
    weekdaysShort : 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
    weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
    longDateFormat : {
        LT : 'HH.mm',
        LTS : 'HH.mm.ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY [pukul] HH.mm',
        LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
    },
    meridiemParse: /enjing|siyang|sonten|ndalu/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'enjing') {
            return hour;
        } else if (meridiem === 'siyang') {
            return hour >= 11 ? hour : hour + 12;
        } else if (meridiem === 'sonten' || meridiem === 'ndalu') {
            return hour + 12;
        }
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours < 11) {
            return 'enjing';
        } else if (hours < 15) {
            return 'siyang';
        } else if (hours < 19) {
            return 'sonten';
        } else {
            return 'ndalu';
        }
    },
    calendar : {
        sameDay : '[Dinten puniko pukul] LT',
        nextDay : '[Mbenjang pukul] LT',
        nextWeek : 'dddd [pukul] LT',
        lastDay : '[Kala wingi pukul] LT',
        lastWeek : 'dddd [kepengker pukul] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'wonten ing %s',
        past : '%s ingkang kepengker',
        s : 'sawetawis detik',
        m : 'setunggal menit',
        mm : '%d menit',
        h : 'setunggal jam',
        hh : '%d jam',
        d : 'sedinten',
        dd : '%d dinten',
        M : 'sewulan',
        MM : '%d wulan',
        y : 'setaun',
        yy : '%d taun'
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return jv;

})));


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Georgian [ka]
//! author : Irakli Janiashvili : https://github.com/irakli-janiashvili

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var ka = moment.defineLocale('ka', {
    months : {
        standalone: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
        format: 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_')
    },
    monthsShort : 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
    weekdays : {
        standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
        format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
        isFormat: /(წინა|შემდეგ)/
    },
    weekdaysShort : 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
    weekdaysMin : 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
    longDateFormat : {
        LT : 'h:mm A',
        LTS : 'h:mm:ss A',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY h:mm A',
        LLLL : 'dddd, D MMMM YYYY h:mm A'
    },
    calendar : {
        sameDay : '[დღეს] LT[-ზე]',
        nextDay : '[ხვალ] LT[-ზე]',
        lastDay : '[გუშინ] LT[-ზე]',
        nextWeek : '[შემდეგ] dddd LT[-ზე]',
        lastWeek : '[წინა] dddd LT-ზე',
        sameElse : 'L'
    },
    relativeTime : {
        future : function (s) {
            return (/(წამი|წუთი|საათი|წელი)/).test(s) ?
                s.replace(/ი$/, 'ში') :
                s + 'ში';
        },
        past : function (s) {
            if ((/(წამი|წუთი|საათი|დღე|თვე)/).test(s)) {
                return s.replace(/(ი|ე)$/, 'ის უკან');
            }
            if ((/წელი/).test(s)) {
                return s.replace(/წელი$/, 'წლის უკან');
            }
        },
        s : 'რამდენიმე წამი',
        m : 'წუთი',
        mm : '%d წუთი',
        h : 'საათი',
        hh : '%d საათი',
        d : 'დღე',
        dd : '%d დღე',
        M : 'თვე',
        MM : '%d თვე',
        y : 'წელი',
        yy : '%d წელი'
    },
    dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
    ordinal : function (number) {
        if (number === 0) {
            return number;
        }
        if (number === 1) {
            return number + '-ლი';
        }
        if ((number < 20) || (number <= 100 && (number % 20 === 0)) || (number % 100 === 0)) {
            return 'მე-' + number;
        }
        return number + '-ე';
    },
    week : {
        dow : 1,
        doy : 7
    }
});

return ka;

})));


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Kazakh [kk]
//! authors : Nurlan Rakhimzhanov : https://github.com/nurlan

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var suffixes = {
    0: '-ші',
    1: '-ші',
    2: '-ші',
    3: '-ші',
    4: '-ші',
    5: '-ші',
    6: '-шы',
    7: '-ші',
    8: '-ші',
    9: '-шы',
    10: '-шы',
    20: '-шы',
    30: '-шы',
    40: '-шы',
    50: '-ші',
    60: '-шы',
    70: '-ші',
    80: '-ші',
    90: '-шы',
    100: '-ші'
};

var kk = moment.defineLocale('kk', {
    months : 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
    monthsShort : 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
    weekdays : 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
    weekdaysShort : 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
    weekdaysMin : 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Бүгін сағат] LT',
        nextDay : '[Ертең сағат] LT',
        nextWeek : 'dddd [сағат] LT',
        lastDay : '[Кеше сағат] LT',
        lastWeek : '[Өткен аптаның] dddd [сағат] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s ішінде',
        past : '%s бұрын',
        s : 'бірнеше секунд',
        m : 'бір минут',
        mm : '%d минут',
        h : 'бір сағат',
        hh : '%d сағат',
        d : 'бір күн',
        dd : '%d күн',
        M : 'бір ай',
        MM : '%d ай',
        y : 'бір жыл',
        yy : '%d жыл'
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
    ordinal : function (number) {
        var a = number % 10,
            b = number >= 100 ? 100 : null;
        return number + (suffixes[number] || suffixes[a] || suffixes[b]);
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return kk;

})));


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Cambodian [km]
//! author : Kruy Vanna : https://github.com/kruyvanna

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var km = moment.defineLocale('km', {
    months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
    monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
    weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
    weekdaysShort: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
    weekdaysMin: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS : 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[ថ្ងៃនេះ ម៉ោង] LT',
        nextDay: '[ស្អែក ម៉ោង] LT',
        nextWeek: 'dddd [ម៉ោង] LT',
        lastDay: '[ម្សិលមិញ ម៉ោង] LT',
        lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%sទៀត',
        past: '%sមុន',
        s: 'ប៉ុន្មានវិនាទី',
        m: 'មួយនាទី',
        mm: '%d នាទី',
        h: 'មួយម៉ោង',
        hh: '%d ម៉ោង',
        d: 'មួយថ្ងៃ',
        dd: '%d ថ្ងៃ',
        M: 'មួយខែ',
        MM: '%d ខែ',
        y: 'មួយឆ្នាំ',
        yy: '%d ឆ្នាំ'
    },
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
});

return km;

})));


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Kannada [kn]
//! author : Rajeev Naik : https://github.com/rajeevnaikte

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var symbolMap = {
    '1': '೧',
    '2': '೨',
    '3': '೩',
    '4': '೪',
    '5': '೫',
    '6': '೬',
    '7': '೭',
    '8': '೮',
    '9': '೯',
    '0': '೦'
};
var numberMap = {
    '೧': '1',
    '೨': '2',
    '೩': '3',
    '೪': '4',
    '೫': '5',
    '೬': '6',
    '೭': '7',
    '೮': '8',
    '೯': '9',
    '೦': '0'
};

var kn = moment.defineLocale('kn', {
    months : 'ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್'.split('_'),
    monthsShort : 'ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬ_ಅಕ್ಟೋಬ_ನವೆಂಬ_ಡಿಸೆಂಬ'.split('_'),
    monthsParseExact: true,
    weekdays : 'ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ'.split('_'),
    weekdaysShort : 'ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ'.split('_'),
    weekdaysMin : 'ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ'.split('_'),
    longDateFormat : {
        LT : 'A h:mm',
        LTS : 'A h:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, A h:mm',
        LLLL : 'dddd, D MMMM YYYY, A h:mm'
    },
    calendar : {
        sameDay : '[ಇಂದು] LT',
        nextDay : '[ನಾಳೆ] LT',
        nextWeek : 'dddd, LT',
        lastDay : '[ನಿನ್ನೆ] LT',
        lastWeek : '[ಕೊನೆಯ] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s ನಂತರ',
        past : '%s ಹಿಂದೆ',
        s : 'ಕೆಲವು ಕ್ಷಣಗಳು',
        m : 'ಒಂದು ನಿಮಿಷ',
        mm : '%d ನಿಮಿಷ',
        h : 'ಒಂದು ಗಂಟೆ',
        hh : '%d ಗಂಟೆ',
        d : 'ಒಂದು ದಿನ',
        dd : '%d ದಿನ',
        M : 'ಒಂದು ತಿಂಗಳು',
        MM : '%d ತಿಂಗಳು',
        y : 'ಒಂದು ವರ್ಷ',
        yy : '%d ವರ್ಷ'
    },
    preparse: function (string) {
        return string.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (match) {
            return numberMap[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        });
    },
    meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'ರಾತ್ರಿ') {
            return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'ಬೆಳಿಗ್ಗೆ') {
            return hour;
        } else if (meridiem === 'ಮಧ್ಯಾಹ್ನ') {
            return hour >= 10 ? hour : hour + 12;
        } else if (meridiem === 'ಸಂಜೆ') {
            return hour + 12;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'ರಾತ್ರಿ';
        } else if (hour < 10) {
            return 'ಬೆಳಿಗ್ಗೆ';
        } else if (hour < 17) {
            return 'ಮಧ್ಯಾಹ್ನ';
        } else if (hour < 20) {
            return 'ಸಂಜೆ';
        } else {
            return 'ರಾತ್ರಿ';
        }
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
    ordinal : function (number) {
        return number + 'ನೇ';
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

return kn;

})));


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Korean [ko]
//! author : Kyungwook, Park : https://github.com/kyungw00k
//! author : Jeeeyul Lee <jeeeyul@gmail.com>

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var ko = moment.defineLocale('ko', {
    months : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    monthsShort : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    weekdays : '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
    weekdaysShort : '일_월_화_수_목_금_토'.split('_'),
    weekdaysMin : '일_월_화_수_목_금_토'.split('_'),
    longDateFormat : {
        LT : 'A h:mm',
        LTS : 'A h:mm:ss',
        L : 'YYYY.MM.DD',
        LL : 'YYYY년 MMMM D일',
        LLL : 'YYYY년 MMMM D일 A h:mm',
        LLLL : 'YYYY년 MMMM D일 dddd A h:mm',
        l : 'YYYY.MM.DD',
        ll : 'YYYY년 MMMM D일',
        lll : 'YYYY년 MMMM D일 A h:mm',
        llll : 'YYYY년 MMMM D일 dddd A h:mm'
    },
    calendar : {
        sameDay : '오늘 LT',
        nextDay : '내일 LT',
        nextWeek : 'dddd LT',
        lastDay : '어제 LT',
        lastWeek : '지난주 dddd LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s 후',
        past : '%s 전',
        s : '몇 초',
        ss : '%d초',
        m : '1분',
        mm : '%d분',
        h : '한 시간',
        hh : '%d시간',
        d : '하루',
        dd : '%d일',
        M : '한 달',
        MM : '%d달',
        y : '일 년',
        yy : '%d년'
    },
    dayOfMonthOrdinalParse : /\d{1,2}일/,
    ordinal : '%d일',
    meridiemParse : /오전|오후/,
    isPM : function (token) {
        return token === '오후';
    },
    meridiem : function (hour, minute, isUpper) {
        return hour < 12 ? '오전' : '오후';
    }
});

return ko;

})));


/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Kyrgyz [ky]
//! author : Chyngyz Arystan uulu : https://github.com/chyngyz

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';



var suffixes = {
    0: '-чү',
    1: '-чи',
    2: '-чи',
    3: '-чү',
    4: '-чү',
    5: '-чи',
    6: '-чы',
    7: '-чи',
    8: '-чи',
    9: '-чу',
    10: '-чу',
    20: '-чы',
    30: '-чу',
    40: '-чы',
    50: '-чү',
    60: '-чы',
    70: '-чи',
    80: '-чи',
    90: '-чу',
    100: '-чү'
};

var ky = moment.defineLocale('ky', {
    months : 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
    monthsShort : 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
    weekdays : 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split('_'),
    weekdaysShort : 'Жек_Дүй_Шей_Шар_Бей_Жум_Ише'.split('_'),
    weekdaysMin : 'Жк_Дй_Шй_Шр_Бй_Жм_Иш'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Бүгүн саат] LT',
        nextDay : '[Эртең саат] LT',
        nextWeek : 'dddd [саат] LT',
        lastDay : '[Кече саат] LT',
        lastWeek : '[Өткен аптанын] dddd [күнү] [саат] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s ичинде',
        past : '%s мурун',
        s : 'бирнече секунд',
        m : 'бир мүнөт',
        mm : '%d мүнөт',
        h : 'бир саат',
        hh : '%d саат',
        d : 'бир күн',
        dd : '%d күн',
        M : 'бир ай',
        MM : '%d ай',
        y : 'бир жыл',
        yy : '%d жыл'
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
    ordinal : function (number) {
        var a = number % 10,
            b = number >= 100 ? 100 : null;
        return number + (suffixes[number] || suffixes[a] || suffixes[b]);
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return ky;

})));


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Luxembourgish [lb]
//! author : mweimerskirch : https://github.com/mweimerskirch
//! author : David Raison : https://github.com/kwisatz

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
        'm': ['eng Minutt', 'enger Minutt'],
        'h': ['eng Stonn', 'enger Stonn'],
        'd': ['een Dag', 'engem Dag'],
        'M': ['ee Mount', 'engem Mount'],
        'y': ['ee Joer', 'engem Joer']
    };
    return withoutSuffix ? format[key][0] : format[key][1];
}
function processFutureTime(string) {
    var number = string.substr(0, string.indexOf(' '));
    if (eifelerRegelAppliesToNumber(number)) {
        return 'a ' + string;
    }
    return 'an ' + string;
}
function processPastTime(string) {
    var number = string.substr(0, string.indexOf(' '));
    if (eifelerRegelAppliesToNumber(number)) {
        return 'viru ' + string;
    }
    return 'virun ' + string;
}
/**
 * Returns true if the word before the given number loses the '-n' ending.
 * e.g. 'an 10 Deeg' but 'a 5 Deeg'
 *
 * @param number {integer}
 * @returns {boolean}
 */
function eifelerRegelAppliesToNumber(number) {
    number = parseInt(number, 10);
    if (isNaN(number)) {
        return false;
    }
    if (number < 0) {
        // Negative Number --> always true
        return true;
    } else if (number < 10) {
        // Only 1 digit
        if (4 <= number && number <= 7) {
            return true;
        }
        return false;
    } else if (number < 100) {
        // 2 digits
        var lastDigit = number % 10, firstDigit = number / 10;
        if (lastDigit === 0) {
            return eifelerRegelAppliesToNumber(firstDigit);
        }
        return eifelerRegelAppliesToNumber(lastDigit);
    } else if (number < 10000) {
        // 3 or 4 digits --> recursively check first digit
        while (number >= 10) {
            number = number / 10;
        }
        return eifelerRegelAppliesToNumber(number);
    } else {
        // Anything larger than 4 digits: recursively check first n-3 digits
        number = number / 1000;
        return eifelerRegelAppliesToNumber(number);
    }
}

var lb = moment.defineLocale('lb', {
    months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
    monthsParseExact : true,
    weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
    weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
    weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat: {
        LT: 'H:mm [Auer]',
        LTS: 'H:mm:ss [Auer]',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm [Auer]',
        LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'
    },
    calendar: {
        sameDay: '[Haut um] LT',
        sameElse: 'L',
        nextDay: '[Muer um] LT',
        nextWeek: 'dddd [um] LT',
        lastDay: '[Gëschter um] LT',
        lastWeek: function () {
            // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
            switch (this.day()) {
                case 2:
                case 4:
                    return '[Leschten] dddd [um] LT';
                default:
                    return '[Leschte] dddd [um] LT';
            }
        }
    },
    relativeTime : {
        future : processFutureTime,
        past : processPastTime,
        s : 'e puer Sekonnen',
        m : processRelativeTime,
        mm : '%d Minutten',
        h : processRelativeTime,
        hh : '%d Stonnen',
        d : processRelativeTime,
        dd : '%d Deeg',
        M : processRelativeTime,
        MM : '%d Méint',
        y : processRelativeTime,
        yy : '%d Joer'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return lb;

})));


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Lao [lo]
//! author : Ryan Hart : https://github.com/ryanhart2

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var lo = moment.defineLocale('lo', {
    months : 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
    monthsShort : 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
    weekdays : 'ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
    weekdaysShort : 'ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
    weekdaysMin : 'ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'ວັນdddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
    isPM: function (input) {
        return input === 'ຕອນແລງ';
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ຕອນເຊົ້າ';
        } else {
            return 'ຕອນແລງ';
        }
    },
    calendar : {
        sameDay : '[ມື້ນີ້ເວລາ] LT',
        nextDay : '[ມື້ອື່ນເວລາ] LT',
        nextWeek : '[ວັນ]dddd[ໜ້າເວລາ] LT',
        lastDay : '[ມື້ວານນີ້ເວລາ] LT',
        lastWeek : '[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'ອີກ %s',
        past : '%sຜ່ານມາ',
        s : 'ບໍ່ເທົ່າໃດວິນາທີ',
        m : '1 ນາທີ',
        mm : '%d ນາທີ',
        h : '1 ຊົ່ວໂມງ',
        hh : '%d ຊົ່ວໂມງ',
        d : '1 ມື້',
        dd : '%d ມື້',
        M : '1 ເດືອນ',
        MM : '%d ເດືອນ',
        y : '1 ປີ',
        yy : '%d ປີ'
    },
    dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
    ordinal : function (number) {
        return 'ທີ່' + number;
    }
});

return lo;

})));


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Lithuanian [lt]
//! author : Mindaugas Mozūras : https://github.com/mmozuras

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var units = {
    'm' : 'minutė_minutės_minutę',
    'mm': 'minutės_minučių_minutes',
    'h' : 'valanda_valandos_valandą',
    'hh': 'valandos_valandų_valandas',
    'd' : 'diena_dienos_dieną',
    'dd': 'dienos_dienų_dienas',
    'M' : 'mėnuo_mėnesio_mėnesį',
    'MM': 'mėnesiai_mėnesių_mėnesius',
    'y' : 'metai_metų_metus',
    'yy': 'metai_metų_metus'
};
function translateSeconds(number, withoutSuffix, key, isFuture) {
    if (withoutSuffix) {
        return 'kelios sekundės';
    } else {
        return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
    }
}
function translateSingular(number, withoutSuffix, key, isFuture) {
    return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
}
function special(number) {
    return number % 10 === 0 || (number > 10 && number < 20);
}
function forms(key) {
    return units[key].split('_');
}
function translate(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    if (number === 1) {
        return result + translateSingular(number, withoutSuffix, key[0], isFuture);
    } else if (withoutSuffix) {
        return result + (special(number) ? forms(key)[1] : forms(key)[0]);
    } else {
        if (isFuture) {
            return result + forms(key)[1];
        } else {
            return result + (special(number) ? forms(key)[1] : forms(key)[2]);
        }
    }
}
var lt = moment.defineLocale('lt', {
    months : {
        format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
        standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
        isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
    },
    monthsShort : 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
    weekdays : {
        format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
        standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
        isFormat: /dddd HH:mm/
    },
    weekdaysShort : 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
    weekdaysMin : 'S_P_A_T_K_Pn_Š'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'YYYY-MM-DD',
        LL : 'YYYY [m.] MMMM D [d.]',
        LLL : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
        LLLL : 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
        l : 'YYYY-MM-DD',
        ll : 'YYYY [m.] MMMM D [d.]',
        lll : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
        llll : 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
    },
    calendar : {
        sameDay : '[Šiandien] LT',
        nextDay : '[Rytoj] LT',
        nextWeek : 'dddd LT',
        lastDay : '[Vakar] LT',
        lastWeek : '[Praėjusį] dddd LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'po %s',
        past : 'prieš %s',
        s : translateSeconds,
        m : translateSingular,
        mm : translate,
        h : translateSingular,
        hh : translate,
        d : translateSingular,
        dd : translate,
        M : translateSingular,
        MM : translate,
        y : translateSingular,
        yy : translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}-oji/,
    ordinal : function (number) {
        return number + '-oji';
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return lt;

})));


/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Latvian [lv]
//! author : Kristaps Karlsons : https://github.com/skakri
//! author : Jānis Elmeris : https://github.com/JanisE

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var units = {
    'm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
    'mm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
    'h': 'stundas_stundām_stunda_stundas'.split('_'),
    'hh': 'stundas_stundām_stunda_stundas'.split('_'),
    'd': 'dienas_dienām_diena_dienas'.split('_'),
    'dd': 'dienas_dienām_diena_dienas'.split('_'),
    'M': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
    'MM': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
    'y': 'gada_gadiem_gads_gadi'.split('_'),
    'yy': 'gada_gadiem_gads_gadi'.split('_')
};
/**
 * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
 */
function format(forms, number, withoutSuffix) {
    if (withoutSuffix) {
        // E.g. "21 minūte", "3 minūtes".
        return number % 10 === 1 && number % 100 !== 11 ? forms[2] : forms[3];
    } else {
        // E.g. "21 minūtes" as in "pēc 21 minūtes".
        // E.g. "3 minūtēm" as in "pēc 3 minūtēm".
        return number % 10 === 1 && number % 100 !== 11 ? forms[0] : forms[1];
    }
}
function relativeTimeWithPlural(number, withoutSuffix, key) {
    return number + ' ' + format(units[key], number, withoutSuffix);
}
function relativeTimeWithSingular(number, withoutSuffix, key) {
    return format(units[key], number, withoutSuffix);
}
function relativeSeconds(number, withoutSuffix) {
    return withoutSuffix ? 'dažas sekundes' : 'dažām sekundēm';
}

var lv = moment.defineLocale('lv', {
    months : 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
    monthsShort : 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
    weekdays : 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
    weekdaysShort : 'Sv_P_O_T_C_Pk_S'.split('_'),
    weekdaysMin : 'Sv_P_O_T_C_Pk_S'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY.',
        LL : 'YYYY. [gada] D. MMMM',
        LLL : 'YYYY. [gada] D. MMMM, HH:mm',
        LLLL : 'YYYY. [gada] D. MMMM, dddd, HH:mm'
    },
    calendar : {
        sameDay : '[Šodien pulksten] LT',
        nextDay : '[Rīt pulksten] LT',
        nextWeek : 'dddd [pulksten] LT',
        lastDay : '[Vakar pulksten] LT',
        lastWeek : '[Pagājušā] dddd [pulksten] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'pēc %s',
        past : 'pirms %s',
        s : relativeSeconds,
        m : relativeTimeWithSingular,
        mm : relativeTimeWithPlural,
        h : relativeTimeWithSingular,
        hh : relativeTimeWithPlural,
        d : relativeTimeWithSingular,
        dd : relativeTimeWithPlural,
        M : relativeTimeWithSingular,
        MM : relativeTimeWithPlural,
        y : relativeTimeWithSingular,
        yy : relativeTimeWithPlural
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return lv;

})));


/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Montenegrin [me]
//! author : Miodrag Nikač <miodrag@restartit.me> : https://github.com/miodragnikac

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var translator = {
    words: { //Different grammatical cases
        m: ['jedan minut', 'jednog minuta'],
        mm: ['minut', 'minuta', 'minuta'],
        h: ['jedan sat', 'jednog sata'],
        hh: ['sat', 'sata', 'sati'],
        dd: ['dan', 'dana', 'dana'],
        MM: ['mjesec', 'mjeseca', 'mjeseci'],
        yy: ['godina', 'godine', 'godina']
    },
    correctGrammaticalCase: function (number, wordKey) {
        return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
    },
    translate: function (number, withoutSuffix, key) {
        var wordKey = translator.words[key];
        if (key.length === 1) {
            return withoutSuffix ? wordKey[0] : wordKey[1];
        } else {
            return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
        }
    }
};

var me = moment.defineLocale('me', {
    months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
    monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
    monthsParseExact : true,
    weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
    weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
    weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
    weekdaysParseExact : true,
    longDateFormat: {
        LT: 'H:mm',
        LTS : 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[danas u] LT',
        nextDay: '[sjutra u] LT',

        nextWeek: function () {
            switch (this.day()) {
                case 0:
                    return '[u] [nedjelju] [u] LT';
                case 3:
                    return '[u] [srijedu] [u] LT';
                case 6:
                    return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[u] dddd [u] LT';
            }
        },
        lastDay  : '[juče u] LT',
        lastWeek : function () {
            var lastWeekDays = [
                '[prošle] [nedjelje] [u] LT',
                '[prošlog] [ponedjeljka] [u] LT',
                '[prošlog] [utorka] [u] LT',
                '[prošle] [srijede] [u] LT',
                '[prošlog] [četvrtka] [u] LT',
                '[prošlog] [petka] [u] LT',
                '[prošle] [subote] [u] LT'
            ];
            return lastWeekDays[this.day()];
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'za %s',
        past   : 'prije %s',
        s      : 'nekoliko sekundi',
        m      : translator.translate,
        mm     : translator.translate,
        h      : translator.translate,
        hh     : translator.translate,
        d      : 'dan',
        dd     : translator.translate,
        M      : 'mjesec',
        MM     : translator.translate,
        y      : 'godinu',
        yy     : translator.translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return me;

})));


/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Maori [mi]
//! author : John Corrigan <robbiecloset@gmail.com> : https://github.com/johnideal

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var mi = moment.defineLocale('mi', {
    months: 'Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea'.split('_'),
    monthsShort: 'Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki'.split('_'),
    monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
    monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
    monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
    monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
    weekdays: 'Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei'.split('_'),
    weekdaysShort: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
    weekdaysMin: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY [i] HH:mm',
        LLLL: 'dddd, D MMMM YYYY [i] HH:mm'
    },
    calendar: {
        sameDay: '[i teie mahana, i] LT',
        nextDay: '[apopo i] LT',
        nextWeek: 'dddd [i] LT',
        lastDay: '[inanahi i] LT',
        lastWeek: 'dddd [whakamutunga i] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'i roto i %s',
        past: '%s i mua',
        s: 'te hēkona ruarua',
        m: 'he meneti',
        mm: '%d meneti',
        h: 'te haora',
        hh: '%d haora',
        d: 'he ra',
        dd: '%d ra',
        M: 'he marama',
        MM: '%d marama',
        y: 'he tau',
        yy: '%d tau'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return mi;

})));


/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Macedonian [mk]
//! author : Borislav Mickov : https://github.com/B0k0

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var mk = moment.defineLocale('mk', {
    months : 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
    monthsShort : 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
    weekdays : 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
    weekdaysShort : 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
    weekdaysMin : 'нe_пo_вт_ср_че_пе_сa'.split('_'),
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'D.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY H:mm',
        LLLL : 'dddd, D MMMM YYYY H:mm'
    },
    calendar : {
        sameDay : '[Денес во] LT',
        nextDay : '[Утре во] LT',
        nextWeek : '[Во] dddd [во] LT',
        lastDay : '[Вчера во] LT',
        lastWeek : function () {
            switch (this.day()) {
                case 0:
                case 3:
                case 6:
                    return '[Изминатата] dddd [во] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[Изминатиот] dddd [во] LT';
            }
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'после %s',
        past : 'пред %s',
        s : 'неколку секунди',
        m : 'минута',
        mm : '%d минути',
        h : 'час',
        hh : '%d часа',
        d : 'ден',
        dd : '%d дена',
        M : 'месец',
        MM : '%d месеци',
        y : 'година',
        yy : '%d години'
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
    ordinal : function (number) {
        var lastDigit = number % 10,
            last2Digits = number % 100;
        if (number === 0) {
            return number + '-ев';
        } else if (last2Digits === 0) {
            return number + '-ен';
        } else if (last2Digits > 10 && last2Digits < 20) {
            return number + '-ти';
        } else if (lastDigit === 1) {
            return number + '-ви';
        } else if (lastDigit === 2) {
            return number + '-ри';
        } else if (lastDigit === 7 || lastDigit === 8) {
            return number + '-ми';
        } else {
            return number + '-ти';
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return mk;

})));


/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Malayalam [ml]
//! author : Floyd Pink : https://github.com/floydpink

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var ml = moment.defineLocale('ml', {
    months : 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
    monthsShort : 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
    monthsParseExact : true,
    weekdays : 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
    weekdaysShort : 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
    weekdaysMin : 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
    longDateFormat : {
        LT : 'A h:mm -നു',
        LTS : 'A h:mm:ss -നു',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, A h:mm -നു',
        LLLL : 'dddd, D MMMM YYYY, A h:mm -നു'
    },
    calendar : {
        sameDay : '[ഇന്ന്] LT',
        nextDay : '[നാളെ] LT',
        nextWeek : 'dddd, LT',
        lastDay : '[ഇന്നലെ] LT',
        lastWeek : '[കഴിഞ്ഞ] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s കഴിഞ്ഞ്',
        past : '%s മുൻപ്',
        s : 'അൽപ നിമിഷങ്ങൾ',
        m : 'ഒരു മിനിറ്റ്',
        mm : '%d മിനിറ്റ്',
        h : 'ഒരു മണിക്കൂർ',
        hh : '%d മണിക്കൂർ',
        d : 'ഒരു ദിവസം',
        dd : '%d ദിവസം',
        M : 'ഒരു മാസം',
        MM : '%d മാസം',
        y : 'ഒരു വർഷം',
        yy : '%d വർഷം'
    },
    meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if ((meridiem === 'രാത്രി' && hour >= 4) ||
                meridiem === 'ഉച്ച കഴിഞ്ഞ്' ||
                meridiem === 'വൈകുന്നേരം') {
            return hour + 12;
        } else {
            return hour;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'രാത്രി';
        } else if (hour < 12) {
            return 'രാവിലെ';
        } else if (hour < 17) {
            return 'ഉച്ച കഴിഞ്ഞ്';
        } else if (hour < 20) {
            return 'വൈകുന്നേരം';
        } else {
            return 'രാത്രി';
        }
    }
});

return ml;

})));


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Marathi [mr]
//! author : Harshad Kale : https://github.com/kalehv
//! author : Vivek Athalye : https://github.com/vnathalye

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var symbolMap = {
    '1': '१',
    '2': '२',
    '3': '३',
    '4': '४',
    '5': '५',
    '6': '६',
    '7': '७',
    '8': '८',
    '9': '९',
    '0': '०'
};
var numberMap = {
    '१': '1',
    '२': '2',
    '३': '3',
    '४': '4',
    '५': '5',
    '६': '6',
    '७': '7',
    '८': '8',
    '९': '9',
    '०': '0'
};

function relativeTimeMr(number, withoutSuffix, string, isFuture)
{
    var output = '';
    if (withoutSuffix) {
        switch (string) {
            case 's': output = 'काही सेकंद'; break;
            case 'm': output = 'एक मिनिट'; break;
            case 'mm': output = '%d मिनिटे'; break;
            case 'h': output = 'एक तास'; break;
            case 'hh': output = '%d तास'; break;
            case 'd': output = 'एक दिवस'; break;
            case 'dd': output = '%d दिवस'; break;
            case 'M': output = 'एक महिना'; break;
            case 'MM': output = '%d महिने'; break;
            case 'y': output = 'एक वर्ष'; break;
            case 'yy': output = '%d वर्षे'; break;
        }
    }
    else {
        switch (string) {
            case 's': output = 'काही सेकंदां'; break;
            case 'm': output = 'एका मिनिटा'; break;
            case 'mm': output = '%d मिनिटां'; break;
            case 'h': output = 'एका तासा'; break;
            case 'hh': output = '%d तासां'; break;
            case 'd': output = 'एका दिवसा'; break;
            case 'dd': output = '%d दिवसां'; break;
            case 'M': output = 'एका महिन्या'; break;
            case 'MM': output = '%d महिन्यां'; break;
            case 'y': output = 'एका वर्षा'; break;
            case 'yy': output = '%d वर्षां'; break;
        }
    }
    return output.replace(/%d/i, number);
}

var mr = moment.defineLocale('mr', {
    months : 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
    monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
    monthsParseExact : true,
    weekdays : 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
    weekdaysShort : 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
    weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
    longDateFormat : {
        LT : 'A h:mm वाजता',
        LTS : 'A h:mm:ss वाजता',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, A h:mm वाजता',
        LLLL : 'dddd, D MMMM YYYY, A h:mm वाजता'
    },
    calendar : {
        sameDay : '[आज] LT',
        nextDay : '[उद्या] LT',
        nextWeek : 'dddd, LT',
        lastDay : '[काल] LT',
        lastWeek: '[मागील] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future: '%sमध्ये',
        past: '%sपूर्वी',
        s: relativeTimeMr,
        m: relativeTimeMr,
        mm: relativeTimeMr,
        h: relativeTimeMr,
        hh: relativeTimeMr,
        d: relativeTimeMr,
        dd: relativeTimeMr,
        M: relativeTimeMr,
        MM: relativeTimeMr,
        y: relativeTimeMr,
        yy: relativeTimeMr
    },
    preparse: function (string) {
        return string.replace(/[१२३४५६७८९०]/g, function (match) {
            return numberMap[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        });
    },
    meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'रात्री') {
            return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'सकाळी') {
            return hour;
        } else if (meridiem === 'दुपारी') {
            return hour >= 10 ? hour : hour + 12;
        } else if (meridiem === 'सायंकाळी') {
            return hour + 12;
        }
    },
    meridiem: function (hour, minute, isLower) {
        if (hour < 4) {
            return 'रात्री';
        } else if (hour < 10) {
            return 'सकाळी';
        } else if (hour < 17) {
            return 'दुपारी';
        } else if (hour < 20) {
            return 'सायंकाळी';
        } else {
            return 'रात्री';
        }
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

return mr;

})));


/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Malay [ms]
//! author : Weldan Jamili : https://github.com/weldan

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var ms = moment.defineLocale('ms', {
    months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
    monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
    weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
    weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
    weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
    longDateFormat : {
        LT : 'HH.mm',
        LTS : 'HH.mm.ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY [pukul] HH.mm',
        LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
    },
    meridiemParse: /pagi|tengahari|petang|malam/,
    meridiemHour: function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'pagi') {
            return hour;
        } else if (meridiem === 'tengahari') {
            return hour >= 11 ? hour : hour + 12;
        } else if (meridiem === 'petang' || meridiem === 'malam') {
            return hour + 12;
        }
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours < 11) {
            return 'pagi';
        } else if (hours < 15) {
            return 'tengahari';
        } else if (hours < 19) {
            return 'petang';
        } else {
            return 'malam';
        }
    },
    calendar : {
        sameDay : '[Hari ini pukul] LT',
        nextDay : '[Esok pukul] LT',
        nextWeek : 'dddd [pukul] LT',
        lastDay : '[Kelmarin pukul] LT',
        lastWeek : 'dddd [lepas pukul] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'dalam %s',
        past : '%s yang lepas',
        s : 'beberapa saat',
        m : 'seminit',
        mm : '%d minit',
        h : 'sejam',
        hh : '%d jam',
        d : 'sehari',
        dd : '%d hari',
        M : 'sebulan',
        MM : '%d bulan',
        y : 'setahun',
        yy : '%d tahun'
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return ms;

})));


/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Malay [ms-my]
//! note : DEPRECATED, the correct one is [ms]
//! author : Weldan Jamili : https://github.com/weldan

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var msMy = moment.defineLocale('ms-my', {
    months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
    monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
    weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
    weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
    weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
    longDateFormat : {
        LT : 'HH.mm',
        LTS : 'HH.mm.ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY [pukul] HH.mm',
        LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
    },
    meridiemParse: /pagi|tengahari|petang|malam/,
    meridiemHour: function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'pagi') {
            return hour;
        } else if (meridiem === 'tengahari') {
            return hour >= 11 ? hour : hour + 12;
        } else if (meridiem === 'petang' || meridiem === 'malam') {
            return hour + 12;
        }
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours < 11) {
            return 'pagi';
        } else if (hours < 15) {
            return 'tengahari';
        } else if (hours < 19) {
            return 'petang';
        } else {
            return 'malam';
        }
    },
    calendar : {
        sameDay : '[Hari ini pukul] LT',
        nextDay : '[Esok pukul] LT',
        nextWeek : 'dddd [pukul] LT',
        lastDay : '[Kelmarin pukul] LT',
        lastWeek : 'dddd [lepas pukul] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'dalam %s',
        past : '%s yang lepas',
        s : 'beberapa saat',
        m : 'seminit',
        mm : '%d minit',
        h : 'sejam',
        hh : '%d jam',
        d : 'sehari',
        dd : '%d hari',
        M : 'sebulan',
        MM : '%d bulan',
        y : 'setahun',
        yy : '%d tahun'
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return msMy;

})));


/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Burmese [my]
//! author : Squar team, mysquar.com
//! author : David Rossellat : https://github.com/gholadr
//! author : Tin Aung Lin : https://github.com/thanyawzinmin

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var symbolMap = {
    '1': '၁',
    '2': '၂',
    '3': '၃',
    '4': '၄',
    '5': '၅',
    '6': '၆',
    '7': '၇',
    '8': '၈',
    '9': '၉',
    '0': '၀'
};
var numberMap = {
    '၁': '1',
    '၂': '2',
    '၃': '3',
    '၄': '4',
    '၅': '5',
    '၆': '6',
    '၇': '7',
    '၈': '8',
    '၉': '9',
    '၀': '0'
};

var my = moment.defineLocale('my', {
    months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
    monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
    weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
    weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
    weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),

    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[ယနေ.] LT [မှာ]',
        nextDay: '[မနက်ဖြန်] LT [မှာ]',
        nextWeek: 'dddd LT [မှာ]',
        lastDay: '[မနေ.က] LT [မှာ]',
        lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'လာမည့် %s မှာ',
        past: 'လွန်ခဲ့သော %s က',
        s: 'စက္ကန်.အနည်းငယ်',
        m: 'တစ်မိနစ်',
        mm: '%d မိနစ်',
        h: 'တစ်နာရီ',
        hh: '%d နာရီ',
        d: 'တစ်ရက်',
        dd: '%d ရက်',
        M: 'တစ်လ',
        MM: '%d လ',
        y: 'တစ်နှစ်',
        yy: '%d နှစ်'
    },
    preparse: function (string) {
        return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (match) {
            return numberMap[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        });
    },
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 1st is the first week of the year.
    }
});

return my;

})));


/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Norwegian Bokmål [nb]
//! authors : Espen Hovlandsdal : https://github.com/rexxars
//!           Sigurd Gartmann : https://github.com/sigurdga

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var nb = moment.defineLocale('nb', {
    months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
    monthsShort : 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
    monthsParseExact : true,
    weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
    weekdaysShort : 'sø._ma._ti._on._to._fr._lø.'.split('_'),
    weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY [kl.] HH:mm',
        LLLL : 'dddd D. MMMM YYYY [kl.] HH:mm'
    },
    calendar : {
        sameDay: '[i dag kl.] LT',
        nextDay: '[i morgen kl.] LT',
        nextWeek: 'dddd [kl.] LT',
        lastDay: '[i går kl.] LT',
        lastWeek: '[forrige] dddd [kl.] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'om %s',
        past : '%s siden',
        s : 'noen sekunder',
        m : 'ett minutt',
        mm : '%d minutter',
        h : 'en time',
        hh : '%d timer',
        d : 'en dag',
        dd : '%d dager',
        M : 'en måned',
        MM : '%d måneder',
        y : 'ett år',
        yy : '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return nb;

})));


/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Nepalese [ne]
//! author : suvash : https://github.com/suvash

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var symbolMap = {
    '1': '१',
    '2': '२',
    '3': '३',
    '4': '४',
    '5': '५',
    '6': '६',
    '7': '७',
    '8': '८',
    '9': '९',
    '0': '०'
};
var numberMap = {
    '१': '1',
    '२': '2',
    '३': '3',
    '४': '4',
    '५': '5',
    '६': '6',
    '७': '7',
    '८': '8',
    '९': '9',
    '०': '0'
};

var ne = moment.defineLocale('ne', {
    months : 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
    monthsShort : 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
    monthsParseExact : true,
    weekdays : 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
    weekdaysShort : 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
    weekdaysMin : 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'Aको h:mm बजे',
        LTS : 'Aको h:mm:ss बजे',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, Aको h:mm बजे',
        LLLL : 'dddd, D MMMM YYYY, Aको h:mm बजे'
    },
    preparse: function (string) {
        return string.replace(/[१२३४५६७८९०]/g, function (match) {
            return numberMap[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        });
    },
    meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'राति') {
            return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'बिहान') {
            return hour;
        } else if (meridiem === 'दिउँसो') {
            return hour >= 10 ? hour : hour + 12;
        } else if (meridiem === 'साँझ') {
            return hour + 12;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 3) {
            return 'राति';
        } else if (hour < 12) {
            return 'बिहान';
        } else if (hour < 16) {
            return 'दिउँसो';
        } else if (hour < 20) {
            return 'साँझ';
        } else {
            return 'राति';
        }
    },
    calendar : {
        sameDay : '[आज] LT',
        nextDay : '[भोलि] LT',
        nextWeek : '[आउँदो] dddd[,] LT',
        lastDay : '[हिजो] LT',
        lastWeek : '[गएको] dddd[,] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%sमा',
        past : '%s अगाडि',
        s : 'केही क्षण',
        m : 'एक मिनेट',
        mm : '%d मिनेट',
        h : 'एक घण्टा',
        hh : '%d घण्टा',
        d : 'एक दिन',
        dd : '%d दिन',
        M : 'एक महिना',
        MM : '%d महिना',
        y : 'एक बर्ष',
        yy : '%d बर्ष'
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

return ne;

})));


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Dutch [nl]
//! author : Joris Röling : https://github.com/jorisroling
//! author : Jacob Middag : https://github.com/middagj

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_');
var monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

var monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
var monthsRegex = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;

var nl = moment.defineLocale('nl', {
    months : 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
    monthsShort : function (m, format) {
        if (!m) {
            return monthsShortWithDots;
        } else if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots[m.month()];
        } else {
            return monthsShortWithDots[m.month()];
        }
    },

    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,

    monthsParse : monthsParse,
    longMonthsParse : monthsParse,
    shortMonthsParse : monthsParse,

    weekdays : 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
    weekdaysShort : 'zo._ma._di._wo._do._vr._za.'.split('_'),
    weekdaysMin : 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD-MM-YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[vandaag om] LT',
        nextDay: '[morgen om] LT',
        nextWeek: 'dddd [om] LT',
        lastDay: '[gisteren om] LT',
        lastWeek: '[afgelopen] dddd [om] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'over %s',
        past : '%s geleden',
        s : 'een paar seconden',
        m : 'één minuut',
        mm : '%d minuten',
        h : 'één uur',
        hh : '%d uur',
        d : 'één dag',
        dd : '%d dagen',
        M : 'één maand',
        MM : '%d maanden',
        y : 'één jaar',
        yy : '%d jaar'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal : function (number) {
        return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return nl;

})));


/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Dutch (Belgium) [nl-be]
//! author : Joris Röling : https://github.com/jorisroling
//! author : Jacob Middag : https://github.com/middagj

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_');
var monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

var monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
var monthsRegex = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;

var nlBe = moment.defineLocale('nl-be', {
    months : 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
    monthsShort : function (m, format) {
        if (!m) {
            return monthsShortWithDots;
        } else if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots[m.month()];
        } else {
            return monthsShortWithDots[m.month()];
        }
    },

    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,

    monthsParse : monthsParse,
    longMonthsParse : monthsParse,
    shortMonthsParse : monthsParse,

    weekdays : 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
    weekdaysShort : 'zo._ma._di._wo._do._vr._za.'.split('_'),
    weekdaysMin : 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[vandaag om] LT',
        nextDay: '[morgen om] LT',
        nextWeek: 'dddd [om] LT',
        lastDay: '[gisteren om] LT',
        lastWeek: '[afgelopen] dddd [om] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'over %s',
        past : '%s geleden',
        s : 'een paar seconden',
        m : 'één minuut',
        mm : '%d minuten',
        h : 'één uur',
        hh : '%d uur',
        d : 'één dag',
        dd : '%d dagen',
        M : 'één maand',
        MM : '%d maanden',
        y : 'één jaar',
        yy : '%d jaar'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal : function (number) {
        return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return nlBe;

})));


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Nynorsk [nn]
//! author : https://github.com/mechuwind

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var nn = moment.defineLocale('nn', {
    months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
    monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
    weekdays : 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
    weekdaysShort : 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
    weekdaysMin : 'su_må_ty_on_to_fr_lø'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY [kl.] H:mm',
        LLLL : 'dddd D. MMMM YYYY [kl.] HH:mm'
    },
    calendar : {
        sameDay: '[I dag klokka] LT',
        nextDay: '[I morgon klokka] LT',
        nextWeek: 'dddd [klokka] LT',
        lastDay: '[I går klokka] LT',
        lastWeek: '[Føregåande] dddd [klokka] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'om %s',
        past : '%s sidan',
        s : 'nokre sekund',
        m : 'eit minutt',
        mm : '%d minutt',
        h : 'ein time',
        hh : '%d timar',
        d : 'ein dag',
        dd : '%d dagar',
        M : 'ein månad',
        MM : '%d månader',
        y : 'eit år',
        yy : '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return nn;

})));


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Punjabi (India) [pa-in]
//! author : Harpreet Singh : https://github.com/harpreetkhalsagtbit

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var symbolMap = {
    '1': '੧',
    '2': '੨',
    '3': '੩',
    '4': '੪',
    '5': '੫',
    '6': '੬',
    '7': '੭',
    '8': '੮',
    '9': '੯',
    '0': '੦'
};
var numberMap = {
    '੧': '1',
    '੨': '2',
    '੩': '3',
    '੪': '4',
    '੫': '5',
    '੬': '6',
    '੭': '7',
    '੮': '8',
    '੯': '9',
    '੦': '0'
};

var paIn = moment.defineLocale('pa-in', {
    // There are months name as per Nanakshahi Calender but they are not used as rigidly in modern Punjabi.
    months : 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
    monthsShort : 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
    weekdays : 'ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ'.split('_'),
    weekdaysShort : 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
    weekdaysMin : 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
    longDateFormat : {
        LT : 'A h:mm ਵਜੇ',
        LTS : 'A h:mm:ss ਵਜੇ',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, A h:mm ਵਜੇ',
        LLLL : 'dddd, D MMMM YYYY, A h:mm ਵਜੇ'
    },
    calendar : {
        sameDay : '[ਅਜ] LT',
        nextDay : '[ਕਲ] LT',
        nextWeek : 'dddd, LT',
        lastDay : '[ਕਲ] LT',
        lastWeek : '[ਪਿਛਲੇ] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s ਵਿੱਚ',
        past : '%s ਪਿਛਲੇ',
        s : 'ਕੁਝ ਸਕਿੰਟ',
        m : 'ਇਕ ਮਿੰਟ',
        mm : '%d ਮਿੰਟ',
        h : 'ਇੱਕ ਘੰਟਾ',
        hh : '%d ਘੰਟੇ',
        d : 'ਇੱਕ ਦਿਨ',
        dd : '%d ਦਿਨ',
        M : 'ਇੱਕ ਮਹੀਨਾ',
        MM : '%d ਮਹੀਨੇ',
        y : 'ਇੱਕ ਸਾਲ',
        yy : '%d ਸਾਲ'
    },
    preparse: function (string) {
        return string.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (match) {
            return numberMap[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        });
    },
    // Punjabi notation for meridiems are quite fuzzy in practice. While there exists
    // a rigid notion of a 'Pahar' it is not used as rigidly in modern Punjabi.
    meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'ਰਾਤ') {
            return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'ਸਵੇਰ') {
            return hour;
        } else if (meridiem === 'ਦੁਪਹਿਰ') {
            return hour >= 10 ? hour : hour + 12;
        } else if (meridiem === 'ਸ਼ਾਮ') {
            return hour + 12;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'ਰਾਤ';
        } else if (hour < 10) {
            return 'ਸਵੇਰ';
        } else if (hour < 17) {
            return 'ਦੁਪਹਿਰ';
        } else if (hour < 20) {
            return 'ਸ਼ਾਮ';
        } else {
            return 'ਰਾਤ';
        }
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

return paIn;

})));


/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Polish [pl]
//! author : Rafal Hirsz : https://github.com/evoL

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_');
var monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
function plural(n) {
    return (n % 10 < 5) && (n % 10 > 1) && ((~~(n / 10) % 10) !== 1);
}
function translate(number, withoutSuffix, key) {
    var result = number + ' ';
    switch (key) {
        case 'm':
            return withoutSuffix ? 'minuta' : 'minutę';
        case 'mm':
            return result + (plural(number) ? 'minuty' : 'minut');
        case 'h':
            return withoutSuffix  ? 'godzina'  : 'godzinę';
        case 'hh':
            return result + (plural(number) ? 'godziny' : 'godzin');
        case 'MM':
            return result + (plural(number) ? 'miesiące' : 'miesięcy');
        case 'yy':
            return result + (plural(number) ? 'lata' : 'lat');
    }
}

var pl = moment.defineLocale('pl', {
    months : function (momentToFormat, format) {
        if (!momentToFormat) {
            return monthsNominative;
        } else if (format === '') {
            // Hack: if format empty we know this is used to generate
            // RegExp by moment. Give then back both valid forms of months
            // in RegExp ready format.
            return '(' + monthsSubjective[momentToFormat.month()] + '|' + monthsNominative[momentToFormat.month()] + ')';
        } else if (/D MMMM/.test(format)) {
            return monthsSubjective[momentToFormat.month()];
        } else {
            return monthsNominative[momentToFormat.month()];
        }
    },
    monthsShort : 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
    weekdays : 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
    weekdaysShort : 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
    weekdaysMin : 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[Dziś o] LT',
        nextDay: '[Jutro o] LT',
        nextWeek: '[W] dddd [o] LT',
        lastDay: '[Wczoraj o] LT',
        lastWeek: function () {
            switch (this.day()) {
                case 0:
                    return '[W zeszłą niedzielę o] LT';
                case 3:
                    return '[W zeszłą środę o] LT';
                case 6:
                    return '[W zeszłą sobotę o] LT';
                default:
                    return '[W zeszły] dddd [o] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : 'za %s',
        past : '%s temu',
        s : 'kilka sekund',
        m : translate,
        mm : translate,
        h : translate,
        hh : translate,
        d : '1 dzień',
        dd : '%d dni',
        M : 'miesiąc',
        MM : translate,
        y : 'rok',
        yy : translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return pl;

})));


/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Portuguese [pt]
//! author : Jefferson : https://github.com/jalex79

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var pt = moment.defineLocale('pt', {
    months : 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
    monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
    weekdays : 'Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado'.split('_'),
    weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
    weekdaysMin : 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D [de] MMMM [de] YYYY',
        LLL : 'D [de] MMMM [de] YYYY HH:mm',
        LLLL : 'dddd, D [de] MMMM [de] YYYY HH:mm'
    },
    calendar : {
        sameDay: '[Hoje às] LT',
        nextDay: '[Amanhã às] LT',
        nextWeek: 'dddd [às] LT',
        lastDay: '[Ontem às] LT',
        lastWeek: function () {
            return (this.day() === 0 || this.day() === 6) ?
                '[Último] dddd [às] LT' : // Saturday + Sunday
                '[Última] dddd [às] LT'; // Monday - Friday
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : 'em %s',
        past : 'há %s',
        s : 'segundos',
        m : 'um minuto',
        mm : '%d minutos',
        h : 'uma hora',
        hh : '%d horas',
        d : 'um dia',
        dd : '%d dias',
        M : 'um mês',
        MM : '%d meses',
        y : 'um ano',
        yy : '%d anos'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal : '%dº',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return pt;

})));


/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Portuguese (Brazil) [pt-br]
//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var ptBr = moment.defineLocale('pt-br', {
    months : 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
    monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
    weekdays : 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
    weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
    weekdaysMin : 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D [de] MMMM [de] YYYY',
        LLL : 'D [de] MMMM [de] YYYY [às] HH:mm',
        LLLL : 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
    },
    calendar : {
        sameDay: '[Hoje às] LT',
        nextDay: '[Amanhã às] LT',
        nextWeek: 'dddd [às] LT',
        lastDay: '[Ontem às] LT',
        lastWeek: function () {
            return (this.day() === 0 || this.day() === 6) ?
                '[Último] dddd [às] LT' : // Saturday + Sunday
                '[Última] dddd [às] LT'; // Monday - Friday
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : 'em %s',
        past : '%s atrás',
        s : 'poucos segundos',
        m : 'um minuto',
        mm : '%d minutos',
        h : 'uma hora',
        hh : '%d horas',
        d : 'um dia',
        dd : '%d dias',
        M : 'um mês',
        MM : '%d meses',
        y : 'um ano',
        yy : '%d anos'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal : '%dº'
});

return ptBr;

})));


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Romanian [ro]
//! author : Vlad Gurdiga : https://github.com/gurdiga
//! author : Valentin Agachi : https://github.com/avaly

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
            'mm': 'minute',
            'hh': 'ore',
            'dd': 'zile',
            'MM': 'luni',
            'yy': 'ani'
        },
        separator = ' ';
    if (number % 100 >= 20 || (number >= 100 && number % 100 === 0)) {
        separator = ' de ';
    }
    return number + separator + format[key];
}

var ro = moment.defineLocale('ro', {
    months : 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
    monthsShort : 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays : 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
    weekdaysShort : 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
    weekdaysMin : 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY H:mm',
        LLLL : 'dddd, D MMMM YYYY H:mm'
    },
    calendar : {
        sameDay: '[azi la] LT',
        nextDay: '[mâine la] LT',
        nextWeek: 'dddd [la] LT',
        lastDay: '[ieri la] LT',
        lastWeek: '[fosta] dddd [la] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'peste %s',
        past : '%s în urmă',
        s : 'câteva secunde',
        m : 'un minut',
        mm : relativeTimeWithPlural,
        h : 'o oră',
        hh : relativeTimeWithPlural,
        d : 'o zi',
        dd : relativeTimeWithPlural,
        M : 'o lună',
        MM : relativeTimeWithPlural,
        y : 'un an',
        yy : relativeTimeWithPlural
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return ro;

})));


/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Russian [ru]
//! author : Viktorminator : https://github.com/Viktorminator
//! Author : Menelion Elensúle : https://github.com/Oire
//! author : Коренберг Марк : https://github.com/socketpair

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


function plural(word, num) {
    var forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
}
function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
        'mm': withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
        'hh': 'час_часа_часов',
        'dd': 'день_дня_дней',
        'MM': 'месяц_месяца_месяцев',
        'yy': 'год_года_лет'
    };
    if (key === 'm') {
        return withoutSuffix ? 'минута' : 'минуту';
    }
    else {
        return number + ' ' + plural(format[key], +number);
    }
}
var monthsParse = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];

// http://new.gramota.ru/spravka/rules/139-prop : § 103
// Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
// CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
var ru = moment.defineLocale('ru', {
    months : {
        format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
        standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
    },
    monthsShort : {
        // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
        format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
        standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
    },
    weekdays : {
        standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
        format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
        isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
    },
    weekdaysShort : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    weekdaysMin : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    monthsParse : monthsParse,
    longMonthsParse : monthsParse,
    shortMonthsParse : monthsParse,

    // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
    monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,

    // копия предыдущего
    monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,

    // полные названия с падежами
    monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,

    // Выражение, которое соотвествует только сокращённым формам
    monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY г.',
        LLL : 'D MMMM YYYY г., HH:mm',
        LLLL : 'dddd, D MMMM YYYY г., HH:mm'
    },
    calendar : {
        sameDay: '[Сегодня в] LT',
        nextDay: '[Завтра в] LT',
        lastDay: '[Вчера в] LT',
        nextWeek: function (now) {
            if (now.week() !== this.week()) {
                switch (this.day()) {
                    case 0:
                        return '[В следующее] dddd [в] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[В следующий] dddd [в] LT';
                    case 3:
                    case 5:
                    case 6:
                        return '[В следующую] dddd [в] LT';
                }
            } else {
                if (this.day() === 2) {
                    return '[Во] dddd [в] LT';
                } else {
                    return '[В] dddd [в] LT';
                }
            }
        },
        lastWeek: function (now) {
            if (now.week() !== this.week()) {
                switch (this.day()) {
                    case 0:
                        return '[В прошлое] dddd [в] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[В прошлый] dddd [в] LT';
                    case 3:
                    case 5:
                    case 6:
                        return '[В прошлую] dddd [в] LT';
                }
            } else {
                if (this.day() === 2) {
                    return '[Во] dddd [в] LT';
                } else {
                    return '[В] dddd [в] LT';
                }
            }
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : 'через %s',
        past : '%s назад',
        s : 'несколько секунд',
        m : relativeTimeWithPlural,
        mm : relativeTimeWithPlural,
        h : 'час',
        hh : relativeTimeWithPlural,
        d : 'день',
        dd : relativeTimeWithPlural,
        M : 'месяц',
        MM : relativeTimeWithPlural,
        y : 'год',
        yy : relativeTimeWithPlural
    },
    meridiemParse: /ночи|утра|дня|вечера/i,
    isPM : function (input) {
        return /^(дня|вечера)$/.test(input);
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'ночи';
        } else if (hour < 12) {
            return 'утра';
        } else if (hour < 17) {
            return 'дня';
        } else {
            return 'вечера';
        }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
    ordinal: function (number, period) {
        switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
                return number + '-й';
            case 'D':
                return number + '-го';
            case 'w':
            case 'W':
                return number + '-я';
            default:
                return number;
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return ru;

})));


/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Sindhi [sd]
//! author : Narain Sagar : https://github.com/narainsagar

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var months = [
    'جنوري',
    'فيبروري',
    'مارچ',
    'اپريل',
    'مئي',
    'جون',
    'جولاءِ',
    'آگسٽ',
    'سيپٽمبر',
    'آڪٽوبر',
    'نومبر',
    'ڊسمبر'
];
var days = [
    'آچر',
    'سومر',
    'اڱارو',
    'اربع',
    'خميس',
    'جمع',
    'ڇنڇر'
];

var sd = moment.defineLocale('sd', {
    months : months,
    monthsShort : months,
    weekdays : days,
    weekdaysShort : days,
    weekdaysMin : days,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd، D MMMM YYYY HH:mm'
    },
    meridiemParse: /صبح|شام/,
    isPM : function (input) {
        return 'شام' === input;
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return 'صبح';
        }
        return 'شام';
    },
    calendar : {
        sameDay : '[اڄ] LT',
        nextDay : '[سڀاڻي] LT',
        nextWeek : 'dddd [اڳين هفتي تي] LT',
        lastDay : '[ڪالهه] LT',
        lastWeek : '[گزريل هفتي] dddd [تي] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s پوء',
        past : '%s اڳ',
        s : 'چند سيڪنڊ',
        m : 'هڪ منٽ',
        mm : '%d منٽ',
        h : 'هڪ ڪلاڪ',
        hh : '%d ڪلاڪ',
        d : 'هڪ ڏينهن',
        dd : '%d ڏينهن',
        M : 'هڪ مهينو',
        MM : '%d مهينا',
        y : 'هڪ سال',
        yy : '%d سال'
    },
    preparse: function (string) {
        return string.replace(/،/g, ',');
    },
    postformat: function (string) {
        return string.replace(/,/g, '،');
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return sd;

})));


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Northern Sami [se]
//! authors : Bård Rolstad Henriksen : https://github.com/karamell

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';



var se = moment.defineLocale('se', {
    months : 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split('_'),
    monthsShort : 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split('_'),
    weekdays : 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split('_'),
    weekdaysShort : 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
    weekdaysMin : 's_v_m_g_d_b_L'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'MMMM D. [b.] YYYY',
        LLL : 'MMMM D. [b.] YYYY [ti.] HH:mm',
        LLLL : 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm'
    },
    calendar : {
        sameDay: '[otne ti] LT',
        nextDay: '[ihttin ti] LT',
        nextWeek: 'dddd [ti] LT',
        lastDay: '[ikte ti] LT',
        lastWeek: '[ovddit] dddd [ti] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : '%s geažes',
        past : 'maŋit %s',
        s : 'moadde sekunddat',
        m : 'okta minuhta',
        mm : '%d minuhtat',
        h : 'okta diimmu',
        hh : '%d diimmut',
        d : 'okta beaivi',
        dd : '%d beaivvit',
        M : 'okta mánnu',
        MM : '%d mánut',
        y : 'okta jahki',
        yy : '%d jagit'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return se;

})));


/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Sinhalese [si]
//! author : Sampath Sitinamaluwa : https://github.com/sampathsris

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


/*jshint -W100*/
var si = moment.defineLocale('si', {
    months : 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split('_'),
    monthsShort : 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
    weekdays : 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
    weekdaysShort : 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
    weekdaysMin : 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'a h:mm',
        LTS : 'a h:mm:ss',
        L : 'YYYY/MM/DD',
        LL : 'YYYY MMMM D',
        LLL : 'YYYY MMMM D, a h:mm',
        LLLL : 'YYYY MMMM D [වැනි] dddd, a h:mm:ss'
    },
    calendar : {
        sameDay : '[අද] LT[ට]',
        nextDay : '[හෙට] LT[ට]',
        nextWeek : 'dddd LT[ට]',
        lastDay : '[ඊයේ] LT[ට]',
        lastWeek : '[පසුගිය] dddd LT[ට]',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%sකින්',
        past : '%sකට පෙර',
        s : 'තත්පර කිහිපය',
        m : 'මිනිත්තුව',
        mm : 'මිනිත්තු %d',
        h : 'පැය',
        hh : 'පැය %d',
        d : 'දිනය',
        dd : 'දින %d',
        M : 'මාසය',
        MM : 'මාස %d',
        y : 'වසර',
        yy : 'වසර %d'
    },
    dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
    ordinal : function (number) {
        return number + ' වැනි';
    },
    meridiemParse : /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
    isPM : function (input) {
        return input === 'ප.ව.' || input === 'පස් වරු';
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'ප.ව.' : 'පස් වරු';
        } else {
            return isLower ? 'පෙ.ව.' : 'පෙර වරු';
        }
    }
});

return si;

})));


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Slovak [sk]
//! author : Martin Minka : https://github.com/k2s
//! based on work of petrbela : https://github.com/petrbela

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var months = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_');
var monthsShort = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
function plural(n) {
    return (n > 1) && (n < 5);
}
function translate(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    switch (key) {
        case 's':  // a few seconds / in a few seconds / a few seconds ago
            return (withoutSuffix || isFuture) ? 'pár sekúnd' : 'pár sekundami';
        case 'm':  // a minute / in a minute / a minute ago
            return withoutSuffix ? 'minúta' : (isFuture ? 'minútu' : 'minútou');
        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'minúty' : 'minút');
            } else {
                return result + 'minútami';
            }
            break;
        case 'h':  // an hour / in an hour / an hour ago
            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
        case 'hh': // 9 hours / in 9 hours / 9 hours ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'hodiny' : 'hodín');
            } else {
                return result + 'hodinami';
            }
            break;
        case 'd':  // a day / in a day / a day ago
            return (withoutSuffix || isFuture) ? 'deň' : 'dňom';
        case 'dd': // 9 days / in 9 days / 9 days ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'dni' : 'dní');
            } else {
                return result + 'dňami';
            }
            break;
        case 'M':  // a month / in a month / a month ago
            return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom';
        case 'MM': // 9 months / in 9 months / 9 months ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'mesiace' : 'mesiacov');
            } else {
                return result + 'mesiacmi';
            }
            break;
        case 'y':  // a year / in a year / a year ago
            return (withoutSuffix || isFuture) ? 'rok' : 'rokom';
        case 'yy': // 9 years / in 9 years / 9 years ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'roky' : 'rokov');
            } else {
                return result + 'rokmi';
            }
            break;
    }
}

var sk = moment.defineLocale('sk', {
    months : months,
    monthsShort : monthsShort,
    weekdays : 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
    weekdaysShort : 'ne_po_ut_st_št_pi_so'.split('_'),
    weekdaysMin : 'ne_po_ut_st_št_pi_so'.split('_'),
    longDateFormat : {
        LT: 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY H:mm',
        LLLL : 'dddd D. MMMM YYYY H:mm'
    },
    calendar : {
        sameDay: '[dnes o] LT',
        nextDay: '[zajtra o] LT',
        nextWeek: function () {
            switch (this.day()) {
                case 0:
                    return '[v nedeľu o] LT';
                case 1:
                case 2:
                    return '[v] dddd [o] LT';
                case 3:
                    return '[v stredu o] LT';
                case 4:
                    return '[vo štvrtok o] LT';
                case 5:
                    return '[v piatok o] LT';
                case 6:
                    return '[v sobotu o] LT';
            }
        },
        lastDay: '[včera o] LT',
        lastWeek: function () {
            switch (this.day()) {
                case 0:
                    return '[minulú nedeľu o] LT';
                case 1:
                case 2:
                    return '[minulý] dddd [o] LT';
                case 3:
                    return '[minulú stredu o] LT';
                case 4:
                case 5:
                    return '[minulý] dddd [o] LT';
                case 6:
                    return '[minulú sobotu o] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : 'za %s',
        past : 'pred %s',
        s : translate,
        m : translate,
        mm : translate,
        h : translate,
        hh : translate,
        d : translate,
        dd : translate,
        M : translate,
        MM : translate,
        y : translate,
        yy : translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return sk;

})));


/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Slovenian [sl]
//! author : Robert Sedovšek : https://github.com/sedovsek

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    switch (key) {
        case 's':
            return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';
        case 'm':
            return withoutSuffix ? 'ena minuta' : 'eno minuto';
        case 'mm':
            if (number === 1) {
                result += withoutSuffix ? 'minuta' : 'minuto';
            } else if (number === 2) {
                result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
            } else if (number < 5) {
                result += withoutSuffix || isFuture ? 'minute' : 'minutami';
            } else {
                result += withoutSuffix || isFuture ? 'minut' : 'minutami';
            }
            return result;
        case 'h':
            return withoutSuffix ? 'ena ura' : 'eno uro';
        case 'hh':
            if (number === 1) {
                result += withoutSuffix ? 'ura' : 'uro';
            } else if (number === 2) {
                result += withoutSuffix || isFuture ? 'uri' : 'urama';
            } else if (number < 5) {
                result += withoutSuffix || isFuture ? 'ure' : 'urami';
            } else {
                result += withoutSuffix || isFuture ? 'ur' : 'urami';
            }
            return result;
        case 'd':
            return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
        case 'dd':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'dan' : 'dnem';
            } else if (number === 2) {
                result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
            } else {
                result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
            }
            return result;
        case 'M':
            return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
        case 'MM':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
            } else if (number === 2) {
                result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
            } else if (number < 5) {
                result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
            } else {
                result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
            }
            return result;
        case 'y':
            return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
        case 'yy':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'leto' : 'letom';
            } else if (number === 2) {
                result += withoutSuffix || isFuture ? 'leti' : 'letoma';
            } else if (number < 5) {
                result += withoutSuffix || isFuture ? 'leta' : 'leti';
            } else {
                result += withoutSuffix || isFuture ? 'let' : 'leti';
            }
            return result;
    }
}

var sl = moment.defineLocale('sl', {
    months : 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
    monthsShort : 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays : 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
    weekdaysShort : 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
    weekdaysMin : 'ne_po_to_sr_če_pe_so'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY H:mm',
        LLLL : 'dddd, D. MMMM YYYY H:mm'
    },
    calendar : {
        sameDay  : '[danes ob] LT',
        nextDay  : '[jutri ob] LT',

        nextWeek : function () {
            switch (this.day()) {
                case 0:
                    return '[v] [nedeljo] [ob] LT';
                case 3:
                    return '[v] [sredo] [ob] LT';
                case 6:
                    return '[v] [soboto] [ob] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[v] dddd [ob] LT';
            }
        },
        lastDay  : '[včeraj ob] LT',
        lastWeek : function () {
            switch (this.day()) {
                case 0:
                    return '[prejšnjo] [nedeljo] [ob] LT';
                case 3:
                    return '[prejšnjo] [sredo] [ob] LT';
                case 6:
                    return '[prejšnjo] [soboto] [ob] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[prejšnji] dddd [ob] LT';
            }
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'čez %s',
        past   : 'pred %s',
        s      : processRelativeTime,
        m      : processRelativeTime,
        mm     : processRelativeTime,
        h      : processRelativeTime,
        hh     : processRelativeTime,
        d      : processRelativeTime,
        dd     : processRelativeTime,
        M      : processRelativeTime,
        MM     : processRelativeTime,
        y      : processRelativeTime,
        yy     : processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return sl;

})));


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Albanian [sq]
//! author : Flakërim Ismani : https://github.com/flakerimi
//! author : Menelion Elensúle : https://github.com/Oire
//! author : Oerd Cukalla : https://github.com/oerd

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var sq = moment.defineLocale('sq', {
    months : 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
    monthsShort : 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
    weekdays : 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
    weekdaysShort : 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
    weekdaysMin : 'D_H_Ma_Më_E_P_Sh'.split('_'),
    weekdaysParseExact : true,
    meridiemParse: /PD|MD/,
    isPM: function (input) {
        return input.charAt(0) === 'M';
    },
    meridiem : function (hours, minutes, isLower) {
        return hours < 12 ? 'PD' : 'MD';
    },
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Sot në] LT',
        nextDay : '[Nesër në] LT',
        nextWeek : 'dddd [në] LT',
        lastDay : '[Dje në] LT',
        lastWeek : 'dddd [e kaluar në] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'në %s',
        past : '%s më parë',
        s : 'disa sekonda',
        m : 'një minutë',
        mm : '%d minuta',
        h : 'një orë',
        hh : '%d orë',
        d : 'një ditë',
        dd : '%d ditë',
        M : 'një muaj',
        MM : '%d muaj',
        y : 'një vit',
        yy : '%d vite'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return sq;

})));


/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Serbian [sr]
//! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var translator = {
    words: { //Different grammatical cases
        m: ['jedan minut', 'jedne minute'],
        mm: ['minut', 'minute', 'minuta'],
        h: ['jedan sat', 'jednog sata'],
        hh: ['sat', 'sata', 'sati'],
        dd: ['dan', 'dana', 'dana'],
        MM: ['mesec', 'meseca', 'meseci'],
        yy: ['godina', 'godine', 'godina']
    },
    correctGrammaticalCase: function (number, wordKey) {
        return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
    },
    translate: function (number, withoutSuffix, key) {
        var wordKey = translator.words[key];
        if (key.length === 1) {
            return withoutSuffix ? wordKey[0] : wordKey[1];
        } else {
            return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
        }
    }
};

var sr = moment.defineLocale('sr', {
    months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
    monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split('_'),
    weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
    weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
    weekdaysParseExact : true,
    longDateFormat: {
        LT: 'H:mm',
        LTS : 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[danas u] LT',
        nextDay: '[sutra u] LT',
        nextWeek: function () {
            switch (this.day()) {
                case 0:
                    return '[u] [nedelju] [u] LT';
                case 3:
                    return '[u] [sredu] [u] LT';
                case 6:
                    return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[u] dddd [u] LT';
            }
        },
        lastDay  : '[juče u] LT',
        lastWeek : function () {
            var lastWeekDays = [
                '[prošle] [nedelje] [u] LT',
                '[prošlog] [ponedeljka] [u] LT',
                '[prošlog] [utorka] [u] LT',
                '[prošle] [srede] [u] LT',
                '[prošlog] [četvrtka] [u] LT',
                '[prošlog] [petka] [u] LT',
                '[prošle] [subote] [u] LT'
            ];
            return lastWeekDays[this.day()];
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'za %s',
        past   : 'pre %s',
        s      : 'nekoliko sekundi',
        m      : translator.translate,
        mm     : translator.translate,
        h      : translator.translate,
        hh     : translator.translate,
        d      : 'dan',
        dd     : translator.translate,
        M      : 'mesec',
        MM     : translator.translate,
        y      : 'godinu',
        yy     : translator.translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return sr;

})));


/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Serbian Cyrillic [sr-cyrl]
//! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var translator = {
    words: { //Different grammatical cases
        m: ['један минут', 'једне минуте'],
        mm: ['минут', 'минуте', 'минута'],
        h: ['један сат', 'једног сата'],
        hh: ['сат', 'сата', 'сати'],
        dd: ['дан', 'дана', 'дана'],
        MM: ['месец', 'месеца', 'месеци'],
        yy: ['година', 'године', 'година']
    },
    correctGrammaticalCase: function (number, wordKey) {
        return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
    },
    translate: function (number, withoutSuffix, key) {
        var wordKey = translator.words[key];
        if (key.length === 1) {
            return withoutSuffix ? wordKey[0] : wordKey[1];
        } else {
            return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
        }
    }
};

var srCyrl = moment.defineLocale('sr-cyrl', {
    months: 'јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар'.split('_'),
    monthsShort: 'јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.'.split('_'),
    monthsParseExact: true,
    weekdays: 'недеља_понедељак_уторак_среда_четвртак_петак_субота'.split('_'),
    weekdaysShort: 'нед._пон._уто._сре._чет._пет._суб.'.split('_'),
    weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
    weekdaysParseExact : true,
    longDateFormat: {
        LT: 'H:mm',
        LTS : 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[данас у] LT',
        nextDay: '[сутра у] LT',
        nextWeek: function () {
            switch (this.day()) {
                case 0:
                    return '[у] [недељу] [у] LT';
                case 3:
                    return '[у] [среду] [у] LT';
                case 6:
                    return '[у] [суботу] [у] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[у] dddd [у] LT';
            }
        },
        lastDay  : '[јуче у] LT',
        lastWeek : function () {
            var lastWeekDays = [
                '[прошле] [недеље] [у] LT',
                '[прошлог] [понедељка] [у] LT',
                '[прошлог] [уторка] [у] LT',
                '[прошле] [среде] [у] LT',
                '[прошлог] [четвртка] [у] LT',
                '[прошлог] [петка] [у] LT',
                '[прошле] [суботе] [у] LT'
            ];
            return lastWeekDays[this.day()];
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'за %s',
        past   : 'пре %s',
        s      : 'неколико секунди',
        m      : translator.translate,
        mm     : translator.translate,
        h      : translator.translate,
        hh     : translator.translate,
        d      : 'дан',
        dd     : translator.translate,
        M      : 'месец',
        MM     : translator.translate,
        y      : 'годину',
        yy     : translator.translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return srCyrl;

})));


/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : siSwati [ss]
//! author : Nicolai Davies<mail@nicolai.io> : https://github.com/nicolaidavies

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';



var ss = moment.defineLocale('ss', {
    months : "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split('_'),
    monthsShort : 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
    weekdays : 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split('_'),
    weekdaysShort : 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
    weekdaysMin : 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'h:mm A',
        LTS : 'h:mm:ss A',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY h:mm A',
        LLLL : 'dddd, D MMMM YYYY h:mm A'
    },
    calendar : {
        sameDay : '[Namuhla nga] LT',
        nextDay : '[Kusasa nga] LT',
        nextWeek : 'dddd [nga] LT',
        lastDay : '[Itolo nga] LT',
        lastWeek : 'dddd [leliphelile] [nga] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'nga %s',
        past : 'wenteka nga %s',
        s : 'emizuzwana lomcane',
        m : 'umzuzu',
        mm : '%d emizuzu',
        h : 'lihora',
        hh : '%d emahora',
        d : 'lilanga',
        dd : '%d emalanga',
        M : 'inyanga',
        MM : '%d tinyanga',
        y : 'umnyaka',
        yy : '%d iminyaka'
    },
    meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
    meridiem : function (hours, minutes, isLower) {
        if (hours < 11) {
            return 'ekuseni';
        } else if (hours < 15) {
            return 'emini';
        } else if (hours < 19) {
            return 'entsambama';
        } else {
            return 'ebusuku';
        }
    },
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'ekuseni') {
            return hour;
        } else if (meridiem === 'emini') {
            return hour >= 11 ? hour : hour + 12;
        } else if (meridiem === 'entsambama' || meridiem === 'ebusuku') {
            if (hour === 0) {
                return 0;
            }
            return hour + 12;
        }
    },
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal : '%d',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return ss;

})));


/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Swedish [sv]
//! author : Jens Alm : https://github.com/ulmus

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var sv = moment.defineLocale('sv', {
    months : 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
    monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    weekdays : 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
    weekdaysShort : 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
    weekdaysMin : 'sö_må_ti_on_to_fr_lö'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'YYYY-MM-DD',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY [kl.] HH:mm',
        LLLL : 'dddd D MMMM YYYY [kl.] HH:mm',
        lll : 'D MMM YYYY HH:mm',
        llll : 'ddd D MMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[Idag] LT',
        nextDay: '[Imorgon] LT',
        lastDay: '[Igår] LT',
        nextWeek: '[På] dddd LT',
        lastWeek: '[I] dddd[s] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'om %s',
        past : 'för %s sedan',
        s : 'några sekunder',
        m : 'en minut',
        mm : '%d minuter',
        h : 'en timme',
        hh : '%d timmar',
        d : 'en dag',
        dd : '%d dagar',
        M : 'en månad',
        MM : '%d månader',
        y : 'ett år',
        yy : '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (~~(number % 100 / 10) === 1) ? 'e' :
            (b === 1) ? 'a' :
            (b === 2) ? 'a' :
            (b === 3) ? 'e' : 'e';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return sv;

})));


/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Swahili [sw]
//! author : Fahad Kassim : https://github.com/fadsel

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var sw = moment.defineLocale('sw', {
    months : 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
    monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
    weekdays : 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
    weekdaysShort : 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
    weekdaysMin : 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[leo saa] LT',
        nextDay : '[kesho saa] LT',
        nextWeek : '[wiki ijayo] dddd [saat] LT',
        lastDay : '[jana] LT',
        lastWeek : '[wiki iliyopita] dddd [saat] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s baadaye',
        past : 'tokea %s',
        s : 'hivi punde',
        m : 'dakika moja',
        mm : 'dakika %d',
        h : 'saa limoja',
        hh : 'masaa %d',
        d : 'siku moja',
        dd : 'masiku %d',
        M : 'mwezi mmoja',
        MM : 'miezi %d',
        y : 'mwaka mmoja',
        yy : 'miaka %d'
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return sw;

})));


/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Tamil [ta]
//! author : Arjunkumar Krishnamoorthy : https://github.com/tk120404

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var symbolMap = {
    '1': '௧',
    '2': '௨',
    '3': '௩',
    '4': '௪',
    '5': '௫',
    '6': '௬',
    '7': '௭',
    '8': '௮',
    '9': '௯',
    '0': '௦'
};
var numberMap = {
    '௧': '1',
    '௨': '2',
    '௩': '3',
    '௪': '4',
    '௫': '5',
    '௬': '6',
    '௭': '7',
    '௮': '8',
    '௯': '9',
    '௦': '0'
};

var ta = moment.defineLocale('ta', {
    months : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
    monthsShort : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
    weekdays : 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
    weekdaysShort : 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
    weekdaysMin : 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, HH:mm',
        LLLL : 'dddd, D MMMM YYYY, HH:mm'
    },
    calendar : {
        sameDay : '[இன்று] LT',
        nextDay : '[நாளை] LT',
        nextWeek : 'dddd, LT',
        lastDay : '[நேற்று] LT',
        lastWeek : '[கடந்த வாரம்] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s இல்',
        past : '%s முன்',
        s : 'ஒரு சில விநாடிகள்',
        m : 'ஒரு நிமிடம்',
        mm : '%d நிமிடங்கள்',
        h : 'ஒரு மணி நேரம்',
        hh : '%d மணி நேரம்',
        d : 'ஒரு நாள்',
        dd : '%d நாட்கள்',
        M : 'ஒரு மாதம்',
        MM : '%d மாதங்கள்',
        y : 'ஒரு வருடம்',
        yy : '%d ஆண்டுகள்'
    },
    dayOfMonthOrdinalParse: /\d{1,2}வது/,
    ordinal : function (number) {
        return number + 'வது';
    },
    preparse: function (string) {
        return string.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (match) {
            return numberMap[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        });
    },
    // refer http://ta.wikipedia.org/s/1er1
    meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
    meridiem : function (hour, minute, isLower) {
        if (hour < 2) {
            return ' யாமம்';
        } else if (hour < 6) {
            return ' வைகறை';  // வைகறை
        } else if (hour < 10) {
            return ' காலை'; // காலை
        } else if (hour < 14) {
            return ' நண்பகல்'; // நண்பகல்
        } else if (hour < 18) {
            return ' எற்பாடு'; // எற்பாடு
        } else if (hour < 22) {
            return ' மாலை'; // மாலை
        } else {
            return ' யாமம்';
        }
    },
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'யாமம்') {
            return hour < 2 ? hour : hour + 12;
        } else if (meridiem === 'வைகறை' || meridiem === 'காலை') {
            return hour;
        } else if (meridiem === 'நண்பகல்') {
            return hour >= 10 ? hour : hour + 12;
        } else {
            return hour + 12;
        }
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

return ta;

})));


/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Telugu [te]
//! author : Krishna Chaitanya Thota : https://github.com/kcthota

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var te = moment.defineLocale('te', {
    months : 'జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్'.split('_'),
    monthsShort : 'జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.'.split('_'),
    monthsParseExact : true,
    weekdays : 'ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం'.split('_'),
    weekdaysShort : 'ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని'.split('_'),
    weekdaysMin : 'ఆ_సో_మం_బు_గు_శు_శ'.split('_'),
    longDateFormat : {
        LT : 'A h:mm',
        LTS : 'A h:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, A h:mm',
        LLLL : 'dddd, D MMMM YYYY, A h:mm'
    },
    calendar : {
        sameDay : '[నేడు] LT',
        nextDay : '[రేపు] LT',
        nextWeek : 'dddd, LT',
        lastDay : '[నిన్న] LT',
        lastWeek : '[గత] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s లో',
        past : '%s క్రితం',
        s : 'కొన్ని క్షణాలు',
        m : 'ఒక నిమిషం',
        mm : '%d నిమిషాలు',
        h : 'ఒక గంట',
        hh : '%d గంటలు',
        d : 'ఒక రోజు',
        dd : '%d రోజులు',
        M : 'ఒక నెల',
        MM : '%d నెలలు',
        y : 'ఒక సంవత్సరం',
        yy : '%d సంవత్సరాలు'
    },
    dayOfMonthOrdinalParse : /\d{1,2}వ/,
    ordinal : '%dవ',
    meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'రాత్రి') {
            return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'ఉదయం') {
            return hour;
        } else if (meridiem === 'మధ్యాహ్నం') {
            return hour >= 10 ? hour : hour + 12;
        } else if (meridiem === 'సాయంత్రం') {
            return hour + 12;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'రాత్రి';
        } else if (hour < 10) {
            return 'ఉదయం';
        } else if (hour < 17) {
            return 'మధ్యాహ్నం';
        } else if (hour < 20) {
            return 'సాయంత్రం';
        } else {
            return 'రాత్రి';
        }
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

return te;

})));


/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Tetun Dili (East Timor) [tet]
//! author : Joshua Brooks : https://github.com/joshbrooks
//! author : Onorio De J. Afonso : https://github.com/marobo

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var tet = moment.defineLocale('tet', {
    months : 'Janeiru_Fevereiru_Marsu_Abril_Maiu_Juniu_Juliu_Augustu_Setembru_Outubru_Novembru_Dezembru'.split('_'),
    monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Aug_Set_Out_Nov_Dez'.split('_'),
    weekdays : 'Domingu_Segunda_Tersa_Kuarta_Kinta_Sexta_Sabadu'.split('_'),
    weekdaysShort : 'Dom_Seg_Ters_Kua_Kint_Sext_Sab'.split('_'),
    weekdaysMin : 'Do_Seg_Te_Ku_Ki_Sex_Sa'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[Ohin iha] LT',
        nextDay: '[Aban iha] LT',
        nextWeek: 'dddd [iha] LT',
        lastDay: '[Horiseik iha] LT',
        lastWeek: 'dddd [semana kotuk] [iha] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'iha %s',
        past : '%s liuba',
        s : 'minutu balun',
        m : 'minutu ida',
        mm : 'minutus %d',
        h : 'horas ida',
        hh : 'horas %d',
        d : 'loron ida',
        dd : 'loron %d',
        M : 'fulan ida',
        MM : 'fulan %d',
        y : 'tinan ida',
        yy : 'tinan %d'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return tet;

})));


/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Thai [th]
//! author : Kridsada Thanabulpong : https://github.com/sirn

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var th = moment.defineLocale('th', {
    months : 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
    monthsShort : 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
    monthsParseExact: true,
    weekdays : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
    weekdaysShort : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'), // yes, three characters difference
    weekdaysMin : 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY เวลา H:mm',
        LLLL : 'วันddddที่ D MMMM YYYY เวลา H:mm'
    },
    meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
    isPM: function (input) {
        return input === 'หลังเที่ยง';
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ก่อนเที่ยง';
        } else {
            return 'หลังเที่ยง';
        }
    },
    calendar : {
        sameDay : '[วันนี้ เวลา] LT',
        nextDay : '[พรุ่งนี้ เวลา] LT',
        nextWeek : 'dddd[หน้า เวลา] LT',
        lastDay : '[เมื่อวานนี้ เวลา] LT',
        lastWeek : '[วัน]dddd[ที่แล้ว เวลา] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'อีก %s',
        past : '%sที่แล้ว',
        s : 'ไม่กี่วินาที',
        m : '1 นาที',
        mm : '%d นาที',
        h : '1 ชั่วโมง',
        hh : '%d ชั่วโมง',
        d : '1 วัน',
        dd : '%d วัน',
        M : '1 เดือน',
        MM : '%d เดือน',
        y : '1 ปี',
        yy : '%d ปี'
    }
});

return th;

})));


/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Tagalog (Philippines) [tl-ph]
//! author : Dan Hagman : https://github.com/hagmandan

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var tlPh = moment.defineLocale('tl-ph', {
    months : 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
    monthsShort : 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
    weekdays : 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
    weekdaysShort : 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
    weekdaysMin : 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'MM/D/YYYY',
        LL : 'MMMM D, YYYY',
        LLL : 'MMMM D, YYYY HH:mm',
        LLLL : 'dddd, MMMM DD, YYYY HH:mm'
    },
    calendar : {
        sameDay: 'LT [ngayong araw]',
        nextDay: '[Bukas ng] LT',
        nextWeek: 'LT [sa susunod na] dddd',
        lastDay: 'LT [kahapon]',
        lastWeek: 'LT [noong nakaraang] dddd',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'sa loob ng %s',
        past : '%s ang nakalipas',
        s : 'ilang segundo',
        m : 'isang minuto',
        mm : '%d minuto',
        h : 'isang oras',
        hh : '%d oras',
        d : 'isang araw',
        dd : '%d araw',
        M : 'isang buwan',
        MM : '%d buwan',
        y : 'isang taon',
        yy : '%d taon'
    },
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal : function (number) {
        return number;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return tlPh;

})));


/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Klingon [tlh]
//! author : Dominika Kruk : https://github.com/amaranthrose

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var numbersNouns = 'pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');

function translateFuture(output) {
    var time = output;
    time = (output.indexOf('jaj') !== -1) ?
    time.slice(0, -3) + 'leS' :
    (output.indexOf('jar') !== -1) ?
    time.slice(0, -3) + 'waQ' :
    (output.indexOf('DIS') !== -1) ?
    time.slice(0, -3) + 'nem' :
    time + ' pIq';
    return time;
}

function translatePast(output) {
    var time = output;
    time = (output.indexOf('jaj') !== -1) ?
    time.slice(0, -3) + 'Hu’' :
    (output.indexOf('jar') !== -1) ?
    time.slice(0, -3) + 'wen' :
    (output.indexOf('DIS') !== -1) ?
    time.slice(0, -3) + 'ben' :
    time + ' ret';
    return time;
}

function translate(number, withoutSuffix, string, isFuture) {
    var numberNoun = numberAsNoun(number);
    switch (string) {
        case 'mm':
            return numberNoun + ' tup';
        case 'hh':
            return numberNoun + ' rep';
        case 'dd':
            return numberNoun + ' jaj';
        case 'MM':
            return numberNoun + ' jar';
        case 'yy':
            return numberNoun + ' DIS';
    }
}

function numberAsNoun(number) {
    var hundred = Math.floor((number % 1000) / 100),
    ten = Math.floor((number % 100) / 10),
    one = number % 10,
    word = '';
    if (hundred > 0) {
        word += numbersNouns[hundred] + 'vatlh';
    }
    if (ten > 0) {
        word += ((word !== '') ? ' ' : '') + numbersNouns[ten] + 'maH';
    }
    if (one > 0) {
        word += ((word !== '') ? ' ' : '') + numbersNouns[one];
    }
    return (word === '') ? 'pagh' : word;
}

var tlh = moment.defineLocale('tlh', {
    months : 'tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’'.split('_'),
    monthsShort : 'jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’'.split('_'),
    monthsParseExact : true,
    weekdays : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
    weekdaysShort : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
    weekdaysMin : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[DaHjaj] LT',
        nextDay: '[wa’leS] LT',
        nextWeek: 'LLL',
        lastDay: '[wa’Hu’] LT',
        lastWeek: 'LLL',
        sameElse: 'L'
    },
    relativeTime : {
        future : translateFuture,
        past : translatePast,
        s : 'puS lup',
        m : 'wa’ tup',
        mm : translate,
        h : 'wa’ rep',
        hh : translate,
        d : 'wa’ jaj',
        dd : translate,
        M : 'wa’ jar',
        MM : translate,
        y : 'wa’ DIS',
        yy : translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return tlh;

})));


/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Turkish [tr]
//! authors : Erhan Gundogan : https://github.com/erhangundogan,
//!           Burak Yiğit Kaya: https://github.com/BYK

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var suffixes = {
    1: '\'inci',
    5: '\'inci',
    8: '\'inci',
    70: '\'inci',
    80: '\'inci',
    2: '\'nci',
    7: '\'nci',
    20: '\'nci',
    50: '\'nci',
    3: '\'üncü',
    4: '\'üncü',
    100: '\'üncü',
    6: '\'ncı',
    9: '\'uncu',
    10: '\'uncu',
    30: '\'uncu',
    60: '\'ıncı',
    90: '\'ıncı'
};

var tr = moment.defineLocale('tr', {
    months : 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
    monthsShort : 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
    weekdays : 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
    weekdaysShort : 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
    weekdaysMin : 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[bugün saat] LT',
        nextDay : '[yarın saat] LT',
        nextWeek : '[haftaya] dddd [saat] LT',
        lastDay : '[dün] LT',
        lastWeek : '[geçen hafta] dddd [saat] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s sonra',
        past : '%s önce',
        s : 'birkaç saniye',
        m : 'bir dakika',
        mm : '%d dakika',
        h : 'bir saat',
        hh : '%d saat',
        d : 'bir gün',
        dd : '%d gün',
        M : 'bir ay',
        MM : '%d ay',
        y : 'bir yıl',
        yy : '%d yıl'
    },
    dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
    ordinal : function (number) {
        if (number === 0) {  // special case for zero
            return number + '\'ıncı';
        }
        var a = number % 10,
            b = number % 100 - a,
            c = number >= 100 ? 100 : null;
        return number + (suffixes[a] || suffixes[b] || suffixes[c]);
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return tr;

})));


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Talossan [tzl]
//! author : Robin van der Vliet : https://github.com/robin0van0der0v
//! author : Iustì Canun

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


// After the year there should be a slash and the amount of years since December 26, 1979 in Roman numerals.
// This is currently too difficult (maybe even impossible) to add.
var tzl = moment.defineLocale('tzl', {
    months : 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
    monthsShort : 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
    weekdays : 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
    weekdaysShort : 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
    weekdaysMin : 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
    longDateFormat : {
        LT : 'HH.mm',
        LTS : 'HH.mm.ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM [dallas] YYYY',
        LLL : 'D. MMMM [dallas] YYYY HH.mm',
        LLLL : 'dddd, [li] D. MMMM [dallas] YYYY HH.mm'
    },
    meridiemParse: /d\'o|d\'a/i,
    isPM : function (input) {
        return 'd\'o' === input.toLowerCase();
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'd\'o' : 'D\'O';
        } else {
            return isLower ? 'd\'a' : 'D\'A';
        }
    },
    calendar : {
        sameDay : '[oxhi à] LT',
        nextDay : '[demà à] LT',
        nextWeek : 'dddd [à] LT',
        lastDay : '[ieiri à] LT',
        lastWeek : '[sür el] dddd [lasteu à] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'osprei %s',
        past : 'ja%s',
        s : processRelativeTime,
        m : processRelativeTime,
        mm : processRelativeTime,
        h : processRelativeTime,
        hh : processRelativeTime,
        d : processRelativeTime,
        dd : processRelativeTime,
        M : processRelativeTime,
        MM : processRelativeTime,
        y : processRelativeTime,
        yy : processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
        's': ['viensas secunds', '\'iensas secunds'],
        'm': ['\'n míut', '\'iens míut'],
        'mm': [number + ' míuts', '' + number + ' míuts'],
        'h': ['\'n þora', '\'iensa þora'],
        'hh': [number + ' þoras', '' + number + ' þoras'],
        'd': ['\'n ziua', '\'iensa ziua'],
        'dd': [number + ' ziuas', '' + number + ' ziuas'],
        'M': ['\'n mes', '\'iens mes'],
        'MM': [number + ' mesen', '' + number + ' mesen'],
        'y': ['\'n ar', '\'iens ar'],
        'yy': [number + ' ars', '' + number + ' ars']
    };
    return isFuture ? format[key][0] : (withoutSuffix ? format[key][0] : format[key][1]);
}

return tzl;

})));


/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Central Atlas Tamazight [tzm]
//! author : Abdel Said : https://github.com/abdelsaid

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var tzm = moment.defineLocale('tzm', {
    months : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
    monthsShort : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
    weekdays : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
    weekdaysShort : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
    weekdaysMin : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS: 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
        nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
        nextWeek: 'dddd [ⴴ] LT',
        lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
        lastWeek: 'dddd [ⴴ] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
        past : 'ⵢⴰⵏ %s',
        s : 'ⵉⵎⵉⴽ',
        m : 'ⵎⵉⵏⵓⴺ',
        mm : '%d ⵎⵉⵏⵓⴺ',
        h : 'ⵙⴰⵄⴰ',
        hh : '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
        d : 'ⴰⵙⵙ',
        dd : '%d oⵙⵙⴰⵏ',
        M : 'ⴰⵢoⵓⵔ',
        MM : '%d ⵉⵢⵢⵉⵔⵏ',
        y : 'ⴰⵙⴳⴰⵙ',
        yy : '%d ⵉⵙⴳⴰⵙⵏ'
    },
    week : {
        dow : 6, // Saturday is the first day of the week.
        doy : 12  // The week that contains Jan 1st is the first week of the year.
    }
});

return tzm;

})));


/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Central Atlas Tamazight Latin [tzm-latn]
//! author : Abdel Said : https://github.com/abdelsaid

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var tzmLatn = moment.defineLocale('tzm-latn', {
    months : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
    monthsShort : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
    weekdays : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
    weekdaysShort : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
    weekdaysMin : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[asdkh g] LT',
        nextDay: '[aska g] LT',
        nextWeek: 'dddd [g] LT',
        lastDay: '[assant g] LT',
        lastWeek: 'dddd [g] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'dadkh s yan %s',
        past : 'yan %s',
        s : 'imik',
        m : 'minuḍ',
        mm : '%d minuḍ',
        h : 'saɛa',
        hh : '%d tassaɛin',
        d : 'ass',
        dd : '%d ossan',
        M : 'ayowr',
        MM : '%d iyyirn',
        y : 'asgas',
        yy : '%d isgasn'
    },
    week : {
        dow : 6, // Saturday is the first day of the week.
        doy : 12  // The week that contains Jan 1st is the first week of the year.
    }
});

return tzmLatn;

})));


/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Ukrainian [uk]
//! author : zemlanin : https://github.com/zemlanin
//! Author : Menelion Elensúle : https://github.com/Oire

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


function plural(word, num) {
    var forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
}
function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
        'mm': withoutSuffix ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
        'hh': withoutSuffix ? 'година_години_годин' : 'годину_години_годин',
        'dd': 'день_дні_днів',
        'MM': 'місяць_місяці_місяців',
        'yy': 'рік_роки_років'
    };
    if (key === 'm') {
        return withoutSuffix ? 'хвилина' : 'хвилину';
    }
    else if (key === 'h') {
        return withoutSuffix ? 'година' : 'годину';
    }
    else {
        return number + ' ' + plural(format[key], +number);
    }
}
function weekdaysCaseReplace(m, format) {
    var weekdays = {
        'nominative': 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
        'accusative': 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
        'genitive': 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
    };

    if (!m) {
        return weekdays['nominative'];
    }

    var nounCase = (/(\[[ВвУу]\]) ?dddd/).test(format) ?
        'accusative' :
        ((/\[?(?:минулої|наступної)? ?\] ?dddd/).test(format) ?
            'genitive' :
            'nominative');
    return weekdays[nounCase][m.day()];
}
function processHoursFunction(str) {
    return function () {
        return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
    };
}

var uk = moment.defineLocale('uk', {
    months : {
        'format': 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_'),
        'standalone': 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_')
    },
    monthsShort : 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
    weekdays : weekdaysCaseReplace,
    weekdaysShort : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY р.',
        LLL : 'D MMMM YYYY р., HH:mm',
        LLLL : 'dddd, D MMMM YYYY р., HH:mm'
    },
    calendar : {
        sameDay: processHoursFunction('[Сьогодні '),
        nextDay: processHoursFunction('[Завтра '),
        lastDay: processHoursFunction('[Вчора '),
        nextWeek: processHoursFunction('[У] dddd ['),
        lastWeek: function () {
            switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                    return processHoursFunction('[Минулої] dddd [').call(this);
                case 1:
                case 2:
                case 4:
                    return processHoursFunction('[Минулого] dddd [').call(this);
            }
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : 'за %s',
        past : '%s тому',
        s : 'декілька секунд',
        m : relativeTimeWithPlural,
        mm : relativeTimeWithPlural,
        h : 'годину',
        hh : relativeTimeWithPlural,
        d : 'день',
        dd : relativeTimeWithPlural,
        M : 'місяць',
        MM : relativeTimeWithPlural,
        y : 'рік',
        yy : relativeTimeWithPlural
    },
    // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
    meridiemParse: /ночі|ранку|дня|вечора/,
    isPM: function (input) {
        return /^(дня|вечора)$/.test(input);
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'ночі';
        } else if (hour < 12) {
            return 'ранку';
        } else if (hour < 17) {
            return 'дня';
        } else {
            return 'вечора';
        }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
    ordinal: function (number, period) {
        switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
            case 'w':
            case 'W':
                return number + '-й';
            case 'D':
                return number + '-го';
            default:
                return number;
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return uk;

})));


/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Urdu [ur]
//! author : Sawood Alam : https://github.com/ibnesayeed
//! author : Zack : https://github.com/ZackVision

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var months = [
    'جنوری',
    'فروری',
    'مارچ',
    'اپریل',
    'مئی',
    'جون',
    'جولائی',
    'اگست',
    'ستمبر',
    'اکتوبر',
    'نومبر',
    'دسمبر'
];
var days = [
    'اتوار',
    'پیر',
    'منگل',
    'بدھ',
    'جمعرات',
    'جمعہ',
    'ہفتہ'
];

var ur = moment.defineLocale('ur', {
    months : months,
    monthsShort : months,
    weekdays : days,
    weekdaysShort : days,
    weekdaysMin : days,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd، D MMMM YYYY HH:mm'
    },
    meridiemParse: /صبح|شام/,
    isPM : function (input) {
        return 'شام' === input;
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 12) {
            return 'صبح';
        }
        return 'شام';
    },
    calendar : {
        sameDay : '[آج بوقت] LT',
        nextDay : '[کل بوقت] LT',
        nextWeek : 'dddd [بوقت] LT',
        lastDay : '[گذشتہ روز بوقت] LT',
        lastWeek : '[گذشتہ] dddd [بوقت] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s بعد',
        past : '%s قبل',
        s : 'چند سیکنڈ',
        m : 'ایک منٹ',
        mm : '%d منٹ',
        h : 'ایک گھنٹہ',
        hh : '%d گھنٹے',
        d : 'ایک دن',
        dd : '%d دن',
        M : 'ایک ماہ',
        MM : '%d ماہ',
        y : 'ایک سال',
        yy : '%d سال'
    },
    preparse: function (string) {
        return string.replace(/،/g, ',');
    },
    postformat: function (string) {
        return string.replace(/,/g, '،');
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return ur;

})));


/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Uzbek [uz]
//! author : Sardor Muminov : https://github.com/muminoff

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var uz = moment.defineLocale('uz', {
    months : 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
    monthsShort : 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
    weekdays : 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
    weekdaysShort : 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
    weekdaysMin : 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'D MMMM YYYY, dddd HH:mm'
    },
    calendar : {
        sameDay : '[Бугун соат] LT [да]',
        nextDay : '[Эртага] LT [да]',
        nextWeek : 'dddd [куни соат] LT [да]',
        lastDay : '[Кеча соат] LT [да]',
        lastWeek : '[Утган] dddd [куни соат] LT [да]',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'Якин %s ичида',
        past : 'Бир неча %s олдин',
        s : 'фурсат',
        m : 'бир дакика',
        mm : '%d дакика',
        h : 'бир соат',
        hh : '%d соат',
        d : 'бир кун',
        dd : '%d кун',
        M : 'бир ой',
        MM : '%d ой',
        y : 'бир йил',
        yy : '%d йил'
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 4th is the first week of the year.
    }
});

return uz;

})));


/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Uzbek Latin [uz-latn]
//! author : Rasulbek Mirzayev : github.com/Rasulbeeek

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var uzLatn = moment.defineLocale('uz-latn', {
    months : 'Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr'.split('_'),
    monthsShort : 'Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek'.split('_'),
    weekdays : 'Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba'.split('_'),
    weekdaysShort : 'Yak_Dush_Sesh_Chor_Pay_Jum_Shan'.split('_'),
    weekdaysMin : 'Ya_Du_Se_Cho_Pa_Ju_Sha'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'D MMMM YYYY, dddd HH:mm'
    },
    calendar : {
        sameDay : '[Bugun soat] LT [da]',
        nextDay : '[Ertaga] LT [da]',
        nextWeek : 'dddd [kuni soat] LT [da]',
        lastDay : '[Kecha soat] LT [da]',
        lastWeek : '[O\'tgan] dddd [kuni soat] LT [da]',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'Yaqin %s ichida',
        past : 'Bir necha %s oldin',
        s : 'soniya',
        m : 'bir daqiqa',
        mm : '%d daqiqa',
        h : 'bir soat',
        hh : '%d soat',
        d : 'bir kun',
        dd : '%d kun',
        M : 'bir oy',
        MM : '%d oy',
        y : 'bir yil',
        yy : '%d yil'
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return uzLatn;

})));


/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Vietnamese [vi]
//! author : Bang Nguyen : https://github.com/bangnk

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var vi = moment.defineLocale('vi', {
    months : 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
    monthsShort : 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
    monthsParseExact : true,
    weekdays : 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
    weekdaysShort : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
    weekdaysMin : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
    weekdaysParseExact : true,
    meridiemParse: /sa|ch/i,
    isPM : function (input) {
        return /^ch$/i.test(input);
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours < 12) {
            return isLower ? 'sa' : 'SA';
        } else {
            return isLower ? 'ch' : 'CH';
        }
    },
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM [năm] YYYY',
        LLL : 'D MMMM [năm] YYYY HH:mm',
        LLLL : 'dddd, D MMMM [năm] YYYY HH:mm',
        l : 'DD/M/YYYY',
        ll : 'D MMM YYYY',
        lll : 'D MMM YYYY HH:mm',
        llll : 'ddd, D MMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[Hôm nay lúc] LT',
        nextDay: '[Ngày mai lúc] LT',
        nextWeek: 'dddd [tuần tới lúc] LT',
        lastDay: '[Hôm qua lúc] LT',
        lastWeek: 'dddd [tuần rồi lúc] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : '%s tới',
        past : '%s trước',
        s : 'vài giây',
        m : 'một phút',
        mm : '%d phút',
        h : 'một giờ',
        hh : '%d giờ',
        d : 'một ngày',
        dd : '%d ngày',
        M : 'một tháng',
        MM : '%d tháng',
        y : 'một năm',
        yy : '%d năm'
    },
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal : function (number) {
        return number;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return vi;

})));


/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Pseudo [x-pseudo]
//! author : Andrew Hood : https://github.com/andrewhood125

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var xPseudo = moment.defineLocale('x-pseudo', {
    months : 'J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér'.split('_'),
    monthsShort : 'J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc'.split('_'),
    monthsParseExact : true,
    weekdays : 'S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý'.split('_'),
    weekdaysShort : 'S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát'.split('_'),
    weekdaysMin : 'S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd, D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[T~ódá~ý át] LT',
        nextDay : '[T~ómó~rró~w át] LT',
        nextWeek : 'dddd [át] LT',
        lastDay : '[Ý~ést~érdá~ý át] LT',
        lastWeek : '[L~ást] dddd [át] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'í~ñ %s',
        past : '%s á~gó',
        s : 'á ~féw ~sécó~ñds',
        m : 'á ~míñ~úté',
        mm : '%d m~íñú~tés',
        h : 'á~ñ hó~úr',
        hh : '%d h~óúrs',
        d : 'á ~dáý',
        dd : '%d d~áýs',
        M : 'á ~móñ~th',
        MM : '%d m~óñt~hs',
        y : 'á ~ýéár',
        yy : '%d ý~éárs'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return xPseudo;

})));


/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Yoruba Nigeria [yo]
//! author : Atolagbe Abisoye : https://github.com/andela-batolagbe

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var yo = moment.defineLocale('yo', {
    months : 'Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀'.split('_'),
    monthsShort : 'Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀'.split('_'),
    weekdays : 'Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta'.split('_'),
    weekdaysShort : 'Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá'.split('_'),
    weekdaysMin : 'Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb'.split('_'),
    longDateFormat : {
        LT : 'h:mm A',
        LTS : 'h:mm:ss A',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY h:mm A',
        LLLL : 'dddd, D MMMM YYYY h:mm A'
    },
    calendar : {
        sameDay : '[Ònì ni] LT',
        nextDay : '[Ọ̀la ni] LT',
        nextWeek : 'dddd [Ọsẹ̀ tón\'bọ] [ni] LT',
        lastDay : '[Àna ni] LT',
        lastWeek : 'dddd [Ọsẹ̀ tólọ́] [ni] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'ní %s',
        past : '%s kọjá',
        s : 'ìsẹjú aayá die',
        m : 'ìsẹjú kan',
        mm : 'ìsẹjú %d',
        h : 'wákati kan',
        hh : 'wákati %d',
        d : 'ọjọ́ kan',
        dd : 'ọjọ́ %d',
        M : 'osù kan',
        MM : 'osù %d',
        y : 'ọdún kan',
        yy : 'ọdún %d'
    },
    dayOfMonthOrdinalParse : /ọjọ́\s\d{1,2}/,
    ordinal : 'ọjọ́ %d',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4 // The week that contains Jan 4th is the first week of the year.
    }
});

return yo;

})));


/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Chinese (China) [zh-cn]
//! author : suupic : https://github.com/suupic
//! author : Zeno Zeng : https://github.com/zenozeng

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var zhCn = moment.defineLocale('zh-cn', {
    months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort : '周日_周一_周二_周三_周四_周五_周六'.split('_'),
    weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'YYYY年MMMD日',
        LL : 'YYYY年MMMD日',
        LLL : 'YYYY年MMMD日Ah点mm分',
        LLLL : 'YYYY年MMMD日ddddAh点mm分',
        l : 'YYYY年MMMD日',
        ll : 'YYYY年MMMD日',
        lll : 'YYYY年MMMD日 HH:mm',
        llll : 'YYYY年MMMD日dddd HH:mm'
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour: function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === '凌晨' || meridiem === '早上' ||
                meridiem === '上午') {
            return hour;
        } else if (meridiem === '下午' || meridiem === '晚上') {
            return hour + 12;
        } else {
            // '中午'
            return hour >= 11 ? hour : hour + 12;
        }
    },
    meridiem : function (hour, minute, isLower) {
        var hm = hour * 100 + minute;
        if (hm < 600) {
            return '凌晨';
        } else if (hm < 900) {
            return '早上';
        } else if (hm < 1130) {
            return '上午';
        } else if (hm < 1230) {
            return '中午';
        } else if (hm < 1800) {
            return '下午';
        } else {
            return '晚上';
        }
    },
    calendar : {
        sameDay : '[今天]LT',
        nextDay : '[明天]LT',
        nextWeek : '[下]ddddLT',
        lastDay : '[昨天]LT',
        lastWeek : '[上]ddddLT',
        sameElse : 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
    ordinal : function (number, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return number + '日';
            case 'M':
                return number + '月';
            case 'w':
            case 'W':
                return number + '周';
            default:
                return number;
        }
    },
    relativeTime : {
        future : '%s内',
        past : '%s前',
        s : '几秒',
        m : '1 分钟',
        mm : '%d 分钟',
        h : '1 小时',
        hh : '%d 小时',
        d : '1 天',
        dd : '%d 天',
        M : '1 个月',
        MM : '%d 个月',
        y : '1 年',
        yy : '%d 年'
    },
    week : {
        // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return zhCn;

})));


/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Chinese (Hong Kong) [zh-hk]
//! author : Ben : https://github.com/ben-lin
//! author : Chris Lam : https://github.com/hehachris
//! author : Konstantin : https://github.com/skfd

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var zhHk = moment.defineLocale('zh-hk', {
    months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort : '週日_週一_週二_週三_週四_週五_週六'.split('_'),
    weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'YYYY年MMMD日',
        LL : 'YYYY年MMMD日',
        LLL : 'YYYY年MMMD日 HH:mm',
        LLLL : 'YYYY年MMMD日dddd HH:mm',
        l : 'YYYY年MMMD日',
        ll : 'YYYY年MMMD日',
        lll : 'YYYY年MMMD日 HH:mm',
        llll : 'YYYY年MMMD日dddd HH:mm'
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
            return hour;
        } else if (meridiem === '中午') {
            return hour >= 11 ? hour : hour + 12;
        } else if (meridiem === '下午' || meridiem === '晚上') {
            return hour + 12;
        }
    },
    meridiem : function (hour, minute, isLower) {
        var hm = hour * 100 + minute;
        if (hm < 600) {
            return '凌晨';
        } else if (hm < 900) {
            return '早上';
        } else if (hm < 1130) {
            return '上午';
        } else if (hm < 1230) {
            return '中午';
        } else if (hm < 1800) {
            return '下午';
        } else {
            return '晚上';
        }
    },
    calendar : {
        sameDay : '[今天]LT',
        nextDay : '[明天]LT',
        nextWeek : '[下]ddddLT',
        lastDay : '[昨天]LT',
        lastWeek : '[上]ddddLT',
        sameElse : 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
    ordinal : function (number, period) {
        switch (period) {
            case 'd' :
            case 'D' :
            case 'DDD' :
                return number + '日';
            case 'M' :
                return number + '月';
            case 'w' :
            case 'W' :
                return number + '週';
            default :
                return number;
        }
    },
    relativeTime : {
        future : '%s內',
        past : '%s前',
        s : '幾秒',
        m : '1 分鐘',
        mm : '%d 分鐘',
        h : '1 小時',
        hh : '%d 小時',
        d : '1 天',
        dd : '%d 天',
        M : '1 個月',
        MM : '%d 個月',
        y : '1 年',
        yy : '%d 年'
    }
});

return zhHk;

})));


/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Chinese (Taiwan) [zh-tw]
//! author : Ben : https://github.com/ben-lin
//! author : Chris Lam : https://github.com/hehachris

;(function (global, factory) {
    true ? factory(__webpack_require__(271)) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var zhTw = moment.defineLocale('zh-tw', {
    months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort : '週日_週一_週二_週三_週四_週五_週六'.split('_'),
    weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'YYYY年MMMD日',
        LL : 'YYYY年MMMD日',
        LLL : 'YYYY年MMMD日 HH:mm',
        LLLL : 'YYYY年MMMD日dddd HH:mm',
        l : 'YYYY年MMMD日',
        ll : 'YYYY年MMMD日',
        lll : 'YYYY年MMMD日 HH:mm',
        llll : 'YYYY年MMMD日dddd HH:mm'
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
            return hour;
        } else if (meridiem === '中午') {
            return hour >= 11 ? hour : hour + 12;
        } else if (meridiem === '下午' || meridiem === '晚上') {
            return hour + 12;
        }
    },
    meridiem : function (hour, minute, isLower) {
        var hm = hour * 100 + minute;
        if (hm < 600) {
            return '凌晨';
        } else if (hm < 900) {
            return '早上';
        } else if (hm < 1130) {
            return '上午';
        } else if (hm < 1230) {
            return '中午';
        } else if (hm < 1800) {
            return '下午';
        } else {
            return '晚上';
        }
    },
    calendar : {
        sameDay : '[今天]LT',
        nextDay : '[明天]LT',
        nextWeek : '[下]ddddLT',
        lastDay : '[昨天]LT',
        lastWeek : '[上]ddddLT',
        sameElse : 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
    ordinal : function (number, period) {
        switch (period) {
            case 'd' :
            case 'D' :
            case 'DDD' :
                return number + '日';
            case 'M' :
                return number + '月';
            case 'w' :
            case 'W' :
                return number + '週';
            default :
                return number;
        }
    },
    relativeTime : {
        future : '%s內',
        past : '%s前',
        s : '幾秒',
        m : '1 分鐘',
        mm : '%d 分鐘',
        h : '1 小時',
        hh : '%d 小時',
        d : '1 天',
        dd : '%d 天',
        M : '1 個月',
        MM : '%d 個月',
        y : '1 年',
        yy : '%d 年'
    }
});

return zhTw;

})));


/***/ }),
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calendar_module__ = __webpack_require__(392);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__calendar_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),
/* 392 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgCalendarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_intl__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_intl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_intl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_intl_locale_data_jsonp_en__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_intl_locale_data_jsonp_en___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_intl_locale_data_jsonp_en__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__monthview__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__weekview__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dayview__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calendar__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__init_position_scroll__ = __webpack_require__(401);









var NgCalendarModule = (function () {
    function NgCalendarModule() {
    }
    return NgCalendarModule;
}());

NgCalendarModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_4__monthview__["a" /* MonthViewComponent */], __WEBPACK_IMPORTED_MODULE_5__weekview__["a" /* WeekViewComponent */], __WEBPACK_IMPORTED_MODULE_6__dayview__["a" /* DayViewComponent */], __WEBPACK_IMPORTED_MODULE_7__calendar__["a" /* CalendarComponent */], __WEBPACK_IMPORTED_MODULE_8__init_position_scroll__["a" /* initPositionScrollComponent */]
                ],
                imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */]],
                exports: [__WEBPACK_IMPORTED_MODULE_7__calendar__["a" /* CalendarComponent */]],
                entryComponents: [__WEBPACK_IMPORTED_MODULE_7__calendar__["a" /* CalendarComponent */]]
            },] },
];
NgCalendarModule.ctorParameters = function () { return []; };
//# sourceMappingURL=calendar.module.js.map

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Expose `IntlPolyfill` as global to add locale data into runtime later on.
global.IntlPolyfill = __webpack_require__(394);

// Require all locale data for `Intl`. This module will be
// ignored when bundling for the browser with Browserify/Webpack.
__webpack_require__(395);

// hack to export the polyfill as global Intl if needed
if (!global.Intl) {
    global.Intl = global.IntlPolyfill;
    global.IntlPolyfill.__applyLocaleSensitivePrototypes();
}

// providing an idiomatic api for the nodejs version of this module
module.exports = global.IntlPolyfill;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(103)))

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

var jsx = function () {
  var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7;
  return function createRawReactElement(type, props, key, children) {
    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;

    if (!props && childrenLength !== 0) {
      props = {};
    }

    if (props && defaultProps) {
      for (var propName in defaultProps) {
        if (props[propName] === void 0) {
          props[propName] = defaultProps[propName];
        }
      }
    } else if (!props) {
      props = defaultProps || {};
    }

    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = Array(childrenLength);

      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 3];
      }

      props.children = childArray;
    }

    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: type,
      key: key === undefined ? null : '' + key,
      ref: null,
      props: props,
      _owner: null
    };
  };
}();

var asyncToGenerator = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            return step("next", value);
          }, function (err) {
            return step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineEnumerableProperties = function (obj, descs) {
  for (var key in descs) {
    var desc = descs[key];
    desc.configurable = desc.enumerable = true;
    if ("value" in desc) desc.writable = true;
    Object.defineProperty(obj, key, desc);
  }

  return obj;
};

var defaults = function (obj, defaults) {
  var keys = Object.getOwnPropertyNames(defaults);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = Object.getOwnPropertyDescriptor(defaults, key);

    if (value && value.configurable && obj[key] === undefined) {
      Object.defineProperty(obj, key, value);
    }
  }

  return obj;
};

var defineProperty$1 = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var _instanceof = function (left, right) {
  if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
    return right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
};

var interopRequireDefault = function (obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
};

var interopRequireWildcard = function (obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
};

var newArrowCheck = function (innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
};

var objectDestructuringEmpty = function (obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var selfGlobal = typeof global === "undefined" ? self : global;

var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var slicedToArrayLoose = function (arr, i) {
  if (Array.isArray(arr)) {
    return arr;
  } else if (Symbol.iterator in Object(arr)) {
    var _arr = [];

    for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      _arr.push(_step.value);

      if (i && _arr.length === i) break;
    }

    return _arr;
  } else {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }
};

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var taggedTemplateLiteralLoose = function (strings, raw) {
  strings.raw = raw;
  return strings;
};

var temporalRef = function (val, name, undef) {
  if (val === undef) {
    throw new ReferenceError(name + " is not defined - temporal dead zone");
  } else {
    return val;
  }
};

var temporalUndefined = {};

var toArray = function (arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};



var babelHelpers$1 = Object.freeze({
  jsx: jsx,
  asyncToGenerator: asyncToGenerator,
  classCallCheck: classCallCheck,
  createClass: createClass,
  defineEnumerableProperties: defineEnumerableProperties,
  defaults: defaults,
  defineProperty: defineProperty$1,
  get: get,
  inherits: inherits,
  interopRequireDefault: interopRequireDefault,
  interopRequireWildcard: interopRequireWildcard,
  newArrowCheck: newArrowCheck,
  objectDestructuringEmpty: objectDestructuringEmpty,
  objectWithoutProperties: objectWithoutProperties,
  possibleConstructorReturn: possibleConstructorReturn,
  selfGlobal: selfGlobal,
  set: set,
  slicedToArray: slicedToArray,
  slicedToArrayLoose: slicedToArrayLoose,
  taggedTemplateLiteral: taggedTemplateLiteral,
  taggedTemplateLiteralLoose: taggedTemplateLiteralLoose,
  temporalRef: temporalRef,
  temporalUndefined: temporalUndefined,
  toArray: toArray,
  toConsumableArray: toConsumableArray,
  typeof: _typeof,
  extends: _extends,
  instanceof: _instanceof
});

var realDefineProp = function () {
    var sentinel = function sentinel() {};
    try {
        Object.defineProperty(sentinel, 'a', {
            get: function get() {
                return 1;
            }
        });
        Object.defineProperty(sentinel, 'prototype', { writable: false });
        return sentinel.a === 1 && sentinel.prototype instanceof Object;
    } catch (e) {
        return false;
    }
}();

// Need a workaround for getters in ES3
var es3 = !realDefineProp && !Object.prototype.__defineGetter__;

// We use this a lot (and need it for proto-less objects)
var hop = Object.prototype.hasOwnProperty;

// Naive defineProperty for compatibility
var defineProperty = realDefineProp ? Object.defineProperty : function (obj, name, desc) {
    if ('get' in desc && obj.__defineGetter__) obj.__defineGetter__(name, desc.get);else if (!hop.call(obj, name) || 'value' in desc) obj[name] = desc.value;
};

// Array.prototype.indexOf, as good as we need it to be
var arrIndexOf = Array.prototype.indexOf || function (search) {
    /*jshint validthis:true */
    var t = this;
    if (!t.length) return -1;

    for (var i = arguments[1] || 0, max = t.length; i < max; i++) {
        if (t[i] === search) return i;
    }

    return -1;
};

// Create an object with the specified prototype (2nd arg required for Record)
var objCreate = Object.create || function (proto, props) {
    var obj = void 0;

    function F() {}
    F.prototype = proto;
    obj = new F();

    for (var k in props) {
        if (hop.call(props, k)) defineProperty(obj, k, props[k]);
    }

    return obj;
};

// Snapshot some (hopefully still) native built-ins
var arrSlice = Array.prototype.slice;
var arrConcat = Array.prototype.concat;
var arrPush = Array.prototype.push;
var arrJoin = Array.prototype.join;
var arrShift = Array.prototype.shift;

// Naive Function.prototype.bind for compatibility
var fnBind = Function.prototype.bind || function (thisObj) {
    var fn = this,
        args = arrSlice.call(arguments, 1);

    // All our (presently) bound functions have either 1 or 0 arguments. By returning
    // different function signatures, we can pass some tests in ES3 environments
    if (fn.length === 1) {
        return function () {
            return fn.apply(thisObj, arrConcat.call(args, arrSlice.call(arguments)));
        };
    }
    return function () {
        return fn.apply(thisObj, arrConcat.call(args, arrSlice.call(arguments)));
    };
};

// Object housing internal properties for constructors
var internals = objCreate(null);

// Keep internal properties internal
var secret = Math.random();

// Helper functions
// ================

/**
 * A function to deal with the inaccuracy of calculating log10 in pre-ES6
 * JavaScript environments. Math.log(num) / Math.LN10 was responsible for
 * causing issue #62.
 */
function log10Floor(n) {
    // ES6 provides the more accurate Math.log10
    if (typeof Math.log10 === 'function') return Math.floor(Math.log10(n));

    var x = Math.round(Math.log(n) * Math.LOG10E);
    return x - (Number('1e' + x) > n);
}

/**
 * A map that doesn't contain Object in its prototype chain
 */
function Record(obj) {
    // Copy only own properties over unless this object is already a Record instance
    for (var k in obj) {
        if (obj instanceof Record || hop.call(obj, k)) defineProperty(this, k, { value: obj[k], enumerable: true, writable: true, configurable: true });
    }
}
Record.prototype = objCreate(null);

/**
 * An ordered list
 */
function List() {
    defineProperty(this, 'length', { writable: true, value: 0 });

    if (arguments.length) arrPush.apply(this, arrSlice.call(arguments));
}
List.prototype = objCreate(null);

/**
 * Constructs a regular expression to restore tainted RegExp properties
 */
function createRegExpRestore() {
    if (internals.disableRegExpRestore) {
        return function () {/* no-op */};
    }

    var regExpCache = {
        lastMatch: RegExp.lastMatch || '',
        leftContext: RegExp.leftContext,
        multiline: RegExp.multiline,
        input: RegExp.input
    },
        has = false;

    // Create a snapshot of all the 'captured' properties
    for (var i = 1; i <= 9; i++) {
        has = (regExpCache['$' + i] = RegExp['$' + i]) || has;
    }return function () {
        // Now we've snapshotted some properties, escape the lastMatch string
        var esc = /[.?*+^$[\]\\(){}|-]/g,
            lm = regExpCache.lastMatch.replace(esc, '\\$&'),
            reg = new List();

        // If any of the captured strings were non-empty, iterate over them all
        if (has) {
            for (var _i = 1; _i <= 9; _i++) {
                var m = regExpCache['$' + _i];

                // If it's empty, add an empty capturing group
                if (!m) lm = '()' + lm;

                // Else find the string in lm and escape & wrap it to capture it
                else {
                        m = m.replace(esc, '\\$&');
                        lm = lm.replace(m, '(' + m + ')');
                    }

                // Push it to the reg and chop lm to make sure further groups come after
                arrPush.call(reg, lm.slice(0, lm.indexOf('(') + 1));
                lm = lm.slice(lm.indexOf('(') + 1);
            }
        }

        var exprStr = arrJoin.call(reg, '') + lm;

        // Shorten the regex by replacing each part of the expression with a match
        // for a string of that exact length.  This is safe for the type of
        // expressions generated above, because the expression matches the whole
        // match string, so we know each group and each segment between capturing
        // groups can be matched by its length alone.
        exprStr = exprStr.replace(/(\\\(|\\\)|[^()])+/g, function (match) {
            return '[\\s\\S]{' + match.replace('\\', '').length + '}';
        });

        // Create the regular expression that will reconstruct the RegExp properties
        var expr = new RegExp(exprStr, regExpCache.multiline ? 'gm' : 'g');

        // Set the lastIndex of the generated expression to ensure that the match
        // is found in the correct index.
        expr.lastIndex = regExpCache.leftContext.length;

        expr.exec(regExpCache.input);
    };
}

/**
 * Mimics ES5's abstract ToObject() function
 */
function toObject(arg) {
    if (arg === null) throw new TypeError('Cannot convert null or undefined to object');

    if ((typeof arg === 'undefined' ? 'undefined' : babelHelpers$1['typeof'](arg)) === 'object') return arg;
    return Object(arg);
}

function toNumber(arg) {
    if (typeof arg === 'number') return arg;
    return Number(arg);
}

function toInteger(arg) {
    var number = toNumber(arg);
    if (isNaN(number)) return 0;
    if (number === +0 || number === -0 || number === +Infinity || number === -Infinity) return number;
    if (number < 0) return Math.floor(Math.abs(number)) * -1;
    return Math.floor(Math.abs(number));
}

function toLength(arg) {
    var len = toInteger(arg);
    if (len <= 0) return 0;
    if (len === Infinity) return Math.pow(2, 53) - 1;
    return Math.min(len, Math.pow(2, 53) - 1);
}

/**
 * Returns "internal" properties for an object
 */
function getInternalProperties(obj) {
    if (hop.call(obj, '__getInternalProperties')) return obj.__getInternalProperties(secret);

    return objCreate(null);
}

/**
* Defines regular expressions for various operations related to the BCP 47 syntax,
* as defined at http://tools.ietf.org/html/bcp47#section-2.1
*/

// extlang       = 3ALPHA              ; selected ISO 639 codes
//                 *2("-" 3ALPHA)      ; permanently reserved
var extlang = '[a-z]{3}(?:-[a-z]{3}){0,2}';

// language      = 2*3ALPHA            ; shortest ISO 639 code
//                 ["-" extlang]       ; sometimes followed by
//                                     ; extended language subtags
//               / 4ALPHA              ; or reserved for future use
//               / 5*8ALPHA            ; or registered language subtag
var language = '(?:[a-z]{2,3}(?:-' + extlang + ')?|[a-z]{4}|[a-z]{5,8})';

// script        = 4ALPHA              ; ISO 15924 code
var script = '[a-z]{4}';

// region        = 2ALPHA              ; ISO 3166-1 code
//               / 3DIGIT              ; UN M.49 code
var region = '(?:[a-z]{2}|\\d{3})';

// variant       = 5*8alphanum         ; registered variants
//               / (DIGIT 3alphanum)
var variant = '(?:[a-z0-9]{5,8}|\\d[a-z0-9]{3})';

//                                     ; Single alphanumerics
//                                     ; "x" reserved for private use
// singleton     = DIGIT               ; 0 - 9
//               / %x41-57             ; A - W
//               / %x59-5A             ; Y - Z
//               / %x61-77             ; a - w
//               / %x79-7A             ; y - z
var singleton = '[0-9a-wy-z]';

// extension     = singleton 1*("-" (2*8alphanum))
var extension = singleton + '(?:-[a-z0-9]{2,8})+';

// privateuse    = "x" 1*("-" (1*8alphanum))
var privateuse = 'x(?:-[a-z0-9]{1,8})+';

// irregular     = "en-GB-oed"         ; irregular tags do not match
//               / "i-ami"             ; the 'langtag' production and
//               / "i-bnn"             ; would not otherwise be
//               / "i-default"         ; considered 'well-formed'
//               / "i-enochian"        ; These tags are all valid,
//               / "i-hak"             ; but most are deprecated
//               / "i-klingon"         ; in favor of more modern
//               / "i-lux"             ; subtags or subtag
//               / "i-mingo"           ; combination
//               / "i-navajo"
//               / "i-pwn"
//               / "i-tao"
//               / "i-tay"
//               / "i-tsu"
//               / "sgn-BE-FR"
//               / "sgn-BE-NL"
//               / "sgn-CH-DE"
var irregular = '(?:en-GB-oed' + '|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)' + '|sgn-(?:BE-FR|BE-NL|CH-DE))';

// regular       = "art-lojban"        ; these tags match the 'langtag'
//               / "cel-gaulish"       ; production, but their subtags
//               / "no-bok"            ; are not extended language
//               / "no-nyn"            ; or variant subtags: their meaning
//               / "zh-guoyu"          ; is defined by their registration
//               / "zh-hakka"          ; and all of these are deprecated
//               / "zh-min"            ; in favor of a more modern
//               / "zh-min-nan"        ; subtag or sequence of subtags
//               / "zh-xiang"
var regular = '(?:art-lojban|cel-gaulish|no-bok|no-nyn' + '|zh-(?:guoyu|hakka|min|min-nan|xiang))';

// grandfathered = irregular           ; non-redundant tags registered
//               / regular             ; during the RFC 3066 era
var grandfathered = '(?:' + irregular + '|' + regular + ')';

// langtag       = language
//                 ["-" script]
//                 ["-" region]
//                 *("-" variant)
//                 *("-" extension)
//                 ["-" privateuse]
var langtag = language + '(?:-' + script + ')?(?:-' + region + ')?(?:-' + variant + ')*(?:-' + extension + ')*(?:-' + privateuse + ')?';

// Language-Tag  = langtag             ; normal language tags
//               / privateuse          ; private use tag
//               / grandfathered       ; grandfathered tags
var expBCP47Syntax = RegExp('^(?:' + langtag + '|' + privateuse + '|' + grandfathered + ')$', 'i');

// Match duplicate variants in a language tag
var expVariantDupes = RegExp('^(?!x).*?-(' + variant + ')-(?:\\w{4,8}-(?!x-))*\\1\\b', 'i');

// Match duplicate singletons in a language tag (except in private use)
var expSingletonDupes = RegExp('^(?!x).*?-(' + singleton + ')-(?:\\w+-(?!x-))*\\1\\b', 'i');

// Match all extension sequences
var expExtSequences = RegExp('-' + extension, 'ig');

// Default locale is the first-added locale data for us
var defaultLocale = void 0;
function setDefaultLocale(locale) {
    defaultLocale = locale;
}

// IANA Subtag Registry redundant tag and subtag maps
var redundantTags = {
    tags: {
        "art-lojban": "jbo",
        "i-ami": "ami",
        "i-bnn": "bnn",
        "i-hak": "hak",
        "i-klingon": "tlh",
        "i-lux": "lb",
        "i-navajo": "nv",
        "i-pwn": "pwn",
        "i-tao": "tao",
        "i-tay": "tay",
        "i-tsu": "tsu",
        "no-bok": "nb",
        "no-nyn": "nn",
        "sgn-BE-FR": "sfb",
        "sgn-BE-NL": "vgt",
        "sgn-CH-DE": "sgg",
        "zh-guoyu": "cmn",
        "zh-hakka": "hak",
        "zh-min-nan": "nan",
        "zh-xiang": "hsn",
        "sgn-BR": "bzs",
        "sgn-CO": "csn",
        "sgn-DE": "gsg",
        "sgn-DK": "dsl",
        "sgn-ES": "ssp",
        "sgn-FR": "fsl",
        "sgn-GB": "bfi",
        "sgn-GR": "gss",
        "sgn-IE": "isg",
        "sgn-IT": "ise",
        "sgn-JP": "jsl",
        "sgn-MX": "mfs",
        "sgn-NI": "ncs",
        "sgn-NL": "dse",
        "sgn-NO": "nsl",
        "sgn-PT": "psr",
        "sgn-SE": "swl",
        "sgn-US": "ase",
        "sgn-ZA": "sfs",
        "zh-cmn": "cmn",
        "zh-cmn-Hans": "cmn-Hans",
        "zh-cmn-Hant": "cmn-Hant",
        "zh-gan": "gan",
        "zh-wuu": "wuu",
        "zh-yue": "yue"
    },
    subtags: {
        BU: "MM",
        DD: "DE",
        FX: "FR",
        TP: "TL",
        YD: "YE",
        ZR: "CD",
        heploc: "alalc97",
        'in': "id",
        iw: "he",
        ji: "yi",
        jw: "jv",
        mo: "ro",
        ayx: "nun",
        bjd: "drl",
        ccq: "rki",
        cjr: "mom",
        cka: "cmr",
        cmk: "xch",
        drh: "khk",
        drw: "prs",
        gav: "dev",
        hrr: "jal",
        ibi: "opa",
        kgh: "kml",
        lcq: "ppr",
        mst: "mry",
        myt: "mry",
        sca: "hle",
        tie: "ras",
        tkk: "twm",
        tlw: "weo",
        tnf: "prs",
        ybd: "rki",
        yma: "lrr"
    },
    extLang: {
        aao: ["aao", "ar"],
        abh: ["abh", "ar"],
        abv: ["abv", "ar"],
        acm: ["acm", "ar"],
        acq: ["acq", "ar"],
        acw: ["acw", "ar"],
        acx: ["acx", "ar"],
        acy: ["acy", "ar"],
        adf: ["adf", "ar"],
        ads: ["ads", "sgn"],
        aeb: ["aeb", "ar"],
        aec: ["aec", "ar"],
        aed: ["aed", "sgn"],
        aen: ["aen", "sgn"],
        afb: ["afb", "ar"],
        afg: ["afg", "sgn"],
        ajp: ["ajp", "ar"],
        apc: ["apc", "ar"],
        apd: ["apd", "ar"],
        arb: ["arb", "ar"],
        arq: ["arq", "ar"],
        ars: ["ars", "ar"],
        ary: ["ary", "ar"],
        arz: ["arz", "ar"],
        ase: ["ase", "sgn"],
        asf: ["asf", "sgn"],
        asp: ["asp", "sgn"],
        asq: ["asq", "sgn"],
        asw: ["asw", "sgn"],
        auz: ["auz", "ar"],
        avl: ["avl", "ar"],
        ayh: ["ayh", "ar"],
        ayl: ["ayl", "ar"],
        ayn: ["ayn", "ar"],
        ayp: ["ayp", "ar"],
        bbz: ["bbz", "ar"],
        bfi: ["bfi", "sgn"],
        bfk: ["bfk", "sgn"],
        bjn: ["bjn", "ms"],
        bog: ["bog", "sgn"],
        bqn: ["bqn", "sgn"],
        bqy: ["bqy", "sgn"],
        btj: ["btj", "ms"],
        bve: ["bve", "ms"],
        bvl: ["bvl", "sgn"],
        bvu: ["bvu", "ms"],
        bzs: ["bzs", "sgn"],
        cdo: ["cdo", "zh"],
        cds: ["cds", "sgn"],
        cjy: ["cjy", "zh"],
        cmn: ["cmn", "zh"],
        coa: ["coa", "ms"],
        cpx: ["cpx", "zh"],
        csc: ["csc", "sgn"],
        csd: ["csd", "sgn"],
        cse: ["cse", "sgn"],
        csf: ["csf", "sgn"],
        csg: ["csg", "sgn"],
        csl: ["csl", "sgn"],
        csn: ["csn", "sgn"],
        csq: ["csq", "sgn"],
        csr: ["csr", "sgn"],
        czh: ["czh", "zh"],
        czo: ["czo", "zh"],
        doq: ["doq", "sgn"],
        dse: ["dse", "sgn"],
        dsl: ["dsl", "sgn"],
        dup: ["dup", "ms"],
        ecs: ["ecs", "sgn"],
        esl: ["esl", "sgn"],
        esn: ["esn", "sgn"],
        eso: ["eso", "sgn"],
        eth: ["eth", "sgn"],
        fcs: ["fcs", "sgn"],
        fse: ["fse", "sgn"],
        fsl: ["fsl", "sgn"],
        fss: ["fss", "sgn"],
        gan: ["gan", "zh"],
        gds: ["gds", "sgn"],
        gom: ["gom", "kok"],
        gse: ["gse", "sgn"],
        gsg: ["gsg", "sgn"],
        gsm: ["gsm", "sgn"],
        gss: ["gss", "sgn"],
        gus: ["gus", "sgn"],
        hab: ["hab", "sgn"],
        haf: ["haf", "sgn"],
        hak: ["hak", "zh"],
        hds: ["hds", "sgn"],
        hji: ["hji", "ms"],
        hks: ["hks", "sgn"],
        hos: ["hos", "sgn"],
        hps: ["hps", "sgn"],
        hsh: ["hsh", "sgn"],
        hsl: ["hsl", "sgn"],
        hsn: ["hsn", "zh"],
        icl: ["icl", "sgn"],
        ils: ["ils", "sgn"],
        inl: ["inl", "sgn"],
        ins: ["ins", "sgn"],
        ise: ["ise", "sgn"],
        isg: ["isg", "sgn"],
        isr: ["isr", "sgn"],
        jak: ["jak", "ms"],
        jax: ["jax", "ms"],
        jcs: ["jcs", "sgn"],
        jhs: ["jhs", "sgn"],
        jls: ["jls", "sgn"],
        jos: ["jos", "sgn"],
        jsl: ["jsl", "sgn"],
        jus: ["jus", "sgn"],
        kgi: ["kgi", "sgn"],
        knn: ["knn", "kok"],
        kvb: ["kvb", "ms"],
        kvk: ["kvk", "sgn"],
        kvr: ["kvr", "ms"],
        kxd: ["kxd", "ms"],
        lbs: ["lbs", "sgn"],
        lce: ["lce", "ms"],
        lcf: ["lcf", "ms"],
        liw: ["liw", "ms"],
        lls: ["lls", "sgn"],
        lsg: ["lsg", "sgn"],
        lsl: ["lsl", "sgn"],
        lso: ["lso", "sgn"],
        lsp: ["lsp", "sgn"],
        lst: ["lst", "sgn"],
        lsy: ["lsy", "sgn"],
        ltg: ["ltg", "lv"],
        lvs: ["lvs", "lv"],
        lzh: ["lzh", "zh"],
        max: ["max", "ms"],
        mdl: ["mdl", "sgn"],
        meo: ["meo", "ms"],
        mfa: ["mfa", "ms"],
        mfb: ["mfb", "ms"],
        mfs: ["mfs", "sgn"],
        min: ["min", "ms"],
        mnp: ["mnp", "zh"],
        mqg: ["mqg", "ms"],
        mre: ["mre", "sgn"],
        msd: ["msd", "sgn"],
        msi: ["msi", "ms"],
        msr: ["msr", "sgn"],
        mui: ["mui", "ms"],
        mzc: ["mzc", "sgn"],
        mzg: ["mzg", "sgn"],
        mzy: ["mzy", "sgn"],
        nan: ["nan", "zh"],
        nbs: ["nbs", "sgn"],
        ncs: ["ncs", "sgn"],
        nsi: ["nsi", "sgn"],
        nsl: ["nsl", "sgn"],
        nsp: ["nsp", "sgn"],
        nsr: ["nsr", "sgn"],
        nzs: ["nzs", "sgn"],
        okl: ["okl", "sgn"],
        orn: ["orn", "ms"],
        ors: ["ors", "ms"],
        pel: ["pel", "ms"],
        pga: ["pga", "ar"],
        pks: ["pks", "sgn"],
        prl: ["prl", "sgn"],
        prz: ["prz", "sgn"],
        psc: ["psc", "sgn"],
        psd: ["psd", "sgn"],
        pse: ["pse", "ms"],
        psg: ["psg", "sgn"],
        psl: ["psl", "sgn"],
        pso: ["pso", "sgn"],
        psp: ["psp", "sgn"],
        psr: ["psr", "sgn"],
        pys: ["pys", "sgn"],
        rms: ["rms", "sgn"],
        rsi: ["rsi", "sgn"],
        rsl: ["rsl", "sgn"],
        sdl: ["sdl", "sgn"],
        sfb: ["sfb", "sgn"],
        sfs: ["sfs", "sgn"],
        sgg: ["sgg", "sgn"],
        sgx: ["sgx", "sgn"],
        shu: ["shu", "ar"],
        slf: ["slf", "sgn"],
        sls: ["sls", "sgn"],
        sqk: ["sqk", "sgn"],
        sqs: ["sqs", "sgn"],
        ssh: ["ssh", "ar"],
        ssp: ["ssp", "sgn"],
        ssr: ["ssr", "sgn"],
        svk: ["svk", "sgn"],
        swc: ["swc", "sw"],
        swh: ["swh", "sw"],
        swl: ["swl", "sgn"],
        syy: ["syy", "sgn"],
        tmw: ["tmw", "ms"],
        tse: ["tse", "sgn"],
        tsm: ["tsm", "sgn"],
        tsq: ["tsq", "sgn"],
        tss: ["tss", "sgn"],
        tsy: ["tsy", "sgn"],
        tza: ["tza", "sgn"],
        ugn: ["ugn", "sgn"],
        ugy: ["ugy", "sgn"],
        ukl: ["ukl", "sgn"],
        uks: ["uks", "sgn"],
        urk: ["urk", "ms"],
        uzn: ["uzn", "uz"],
        uzs: ["uzs", "uz"],
        vgt: ["vgt", "sgn"],
        vkk: ["vkk", "ms"],
        vkt: ["vkt", "ms"],
        vsi: ["vsi", "sgn"],
        vsl: ["vsl", "sgn"],
        vsv: ["vsv", "sgn"],
        wuu: ["wuu", "zh"],
        xki: ["xki", "sgn"],
        xml: ["xml", "sgn"],
        xmm: ["xmm", "ms"],
        xms: ["xms", "sgn"],
        yds: ["yds", "sgn"],
        ysl: ["ysl", "sgn"],
        yue: ["yue", "zh"],
        zib: ["zib", "sgn"],
        zlm: ["zlm", "ms"],
        zmi: ["zmi", "ms"],
        zsl: ["zsl", "sgn"],
        zsm: ["zsm", "ms"]
    }
};

/**
 * Convert only a-z to uppercase as per section 6.1 of the spec
 */
function toLatinUpperCase(str) {
    var i = str.length;

    while (i--) {
        var ch = str.charAt(i);

        if (ch >= "a" && ch <= "z") str = str.slice(0, i) + ch.toUpperCase() + str.slice(i + 1);
    }

    return str;
}

/**
 * The IsStructurallyValidLanguageTag abstract operation verifies that the locale
 * argument (which must be a String value)
 *
 * - represents a well-formed BCP 47 language tag as specified in RFC 5646 section
 *   2.1, or successor,
 * - does not include duplicate variant subtags, and
 * - does not include duplicate singleton subtags.
 *
 * The abstract operation returns true if locale can be generated from the ABNF
 * grammar in section 2.1 of the RFC, starting with Language-Tag, and does not
 * contain duplicate variant or singleton subtags (other than as a private use
 * subtag). It returns false otherwise. Terminal value characters in the grammar are
 * interpreted as the Unicode equivalents of the ASCII octet values given.
 */
function /* 6.2.2 */IsStructurallyValidLanguageTag(locale) {
    // represents a well-formed BCP 47 language tag as specified in RFC 5646
    if (!expBCP47Syntax.test(locale)) return false;

    // does not include duplicate variant subtags, and
    if (expVariantDupes.test(locale)) return false;

    // does not include duplicate singleton subtags.
    if (expSingletonDupes.test(locale)) return false;

    return true;
}

/**
 * The CanonicalizeLanguageTag abstract operation returns the canonical and case-
 * regularized form of the locale argument (which must be a String value that is
 * a structurally valid BCP 47 language tag as verified by the
 * IsStructurallyValidLanguageTag abstract operation). It takes the steps
 * specified in RFC 5646 section 4.5, or successor, to bring the language tag
 * into canonical form, and to regularize the case of the subtags, but does not
 * take the steps to bring a language tag into “extlang form” and to reorder
 * variant subtags.

 * The specifications for extensions to BCP 47 language tags, such as RFC 6067,
 * may include canonicalization rules for the extension subtag sequences they
 * define that go beyond the canonicalization rules of RFC 5646 section 4.5.
 * Implementations are allowed, but not required, to apply these additional rules.
 */
function /* 6.2.3 */CanonicalizeLanguageTag(locale) {
    var match = void 0,
        parts = void 0;

    // A language tag is in 'canonical form' when the tag is well-formed
    // according to the rules in Sections 2.1 and 2.2

    // Section 2.1 says all subtags use lowercase...
    locale = locale.toLowerCase();

    // ...with 2 exceptions: 'two-letter and four-letter subtags that neither
    // appear at the start of the tag nor occur after singletons.  Such two-letter
    // subtags are all uppercase (as in the tags "en-CA-x-ca" or "sgn-BE-FR") and
    // four-letter subtags are titlecase (as in the tag "az-Latn-x-latn").
    parts = locale.split('-');
    for (var i = 1, max = parts.length; i < max; i++) {
        // Two-letter subtags are all uppercase
        if (parts[i].length === 2) parts[i] = parts[i].toUpperCase();

        // Four-letter subtags are titlecase
        else if (parts[i].length === 4) parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1);

            // Is it a singleton?
            else if (parts[i].length === 1 && parts[i] !== 'x') break;
    }
    locale = arrJoin.call(parts, '-');

    // The steps laid out in RFC 5646 section 4.5 are as follows:

    // 1.  Extension sequences are ordered into case-insensitive ASCII order
    //     by singleton subtag.
    if ((match = locale.match(expExtSequences)) && match.length > 1) {
        // The built-in sort() sorts by ASCII order, so use that
        match.sort();

        // Replace all extensions with the joined, sorted array
        locale = locale.replace(RegExp('(?:' + expExtSequences.source + ')+', 'i'), arrJoin.call(match, ''));
    }

    // 2.  Redundant or grandfathered tags are replaced by their 'Preferred-
    //     Value', if there is one.
    if (hop.call(redundantTags.tags, locale)) locale = redundantTags.tags[locale];

    // 3.  Subtags are replaced by their 'Preferred-Value', if there is one.
    //     For extlangs, the original primary language subtag is also
    //     replaced if there is a primary language subtag in the 'Preferred-
    //     Value'.
    parts = locale.split('-');

    for (var _i = 1, _max = parts.length; _i < _max; _i++) {
        if (hop.call(redundantTags.subtags, parts[_i])) parts[_i] = redundantTags.subtags[parts[_i]];else if (hop.call(redundantTags.extLang, parts[_i])) {
            parts[_i] = redundantTags.extLang[parts[_i]][0];

            // For extlang tags, the prefix needs to be removed if it is redundant
            if (_i === 1 && redundantTags.extLang[parts[1]][1] === parts[0]) {
                parts = arrSlice.call(parts, _i++);
                _max -= 1;
            }
        }
    }

    return arrJoin.call(parts, '-');
}

/**
 * The DefaultLocale abstract operation returns a String value representing the
 * structurally valid (6.2.2) and canonicalized (6.2.3) BCP 47 language tag for the
 * host environment’s current locale.
 */
function /* 6.2.4 */DefaultLocale() {
    return defaultLocale;
}

// Sect 6.3 Currency Codes
// =======================

var expCurrencyCode = /^[A-Z]{3}$/;

/**
 * The IsWellFormedCurrencyCode abstract operation verifies that the currency argument
 * (after conversion to a String value) represents a well-formed 3-letter ISO currency
 * code. The following steps are taken:
 */
function /* 6.3.1 */IsWellFormedCurrencyCode(currency) {
    // 1. Let `c` be ToString(currency)
    var c = String(currency);

    // 2. Let `normalized` be the result of mapping c to upper case as described
    //    in 6.1.
    var normalized = toLatinUpperCase(c);

    // 3. If the string length of normalized is not 3, return false.
    // 4. If normalized contains any character that is not in the range "A" to "Z"
    //    (U+0041 to U+005A), return false.
    if (expCurrencyCode.test(normalized) === false) return false;

    // 5. Return true
    return true;
}

var expUnicodeExSeq = /-u(?:-[0-9a-z]{2,8})+/gi; // See `extension` below

function /* 9.2.1 */CanonicalizeLocaleList(locales) {
    // The abstract operation CanonicalizeLocaleList takes the following steps:

    // 1. If locales is undefined, then a. Return a new empty List
    if (locales === undefined) return new List();

    // 2. Let seen be a new empty List.
    var seen = new List();

    // 3. If locales is a String value, then
    //    a. Let locales be a new array created as if by the expression new
    //    Array(locales) where Array is the standard built-in constructor with
    //    that name and locales is the value of locales.
    locales = typeof locales === 'string' ? [locales] : locales;

    // 4. Let O be ToObject(locales).
    var O = toObject(locales);

    // 5. Let lenValue be the result of calling the [[Get]] internal method of
    //    O with the argument "length".
    // 6. Let len be ToUint32(lenValue).
    var len = toLength(O.length);

    // 7. Let k be 0.
    var k = 0;

    // 8. Repeat, while k < len
    while (k < len) {
        // a. Let Pk be ToString(k).
        var Pk = String(k);

        // b. Let kPresent be the result of calling the [[HasProperty]] internal
        //    method of O with argument Pk.
        var kPresent = Pk in O;

        // c. If kPresent is true, then
        if (kPresent) {
            // i. Let kValue be the result of calling the [[Get]] internal
            //     method of O with argument Pk.
            var kValue = O[Pk];

            // ii. If the type of kValue is not String or Object, then throw a
            //     TypeError exception.
            if (kValue === null || typeof kValue !== 'string' && (typeof kValue === "undefined" ? "undefined" : babelHelpers$1["typeof"](kValue)) !== 'object') throw new TypeError('String or Object type expected');

            // iii. Let tag be ToString(kValue).
            var tag = String(kValue);

            // iv. If the result of calling the abstract operation
            //     IsStructurallyValidLanguageTag (defined in 6.2.2), passing tag as
            //     the argument, is false, then throw a RangeError exception.
            if (!IsStructurallyValidLanguageTag(tag)) throw new RangeError("'" + tag + "' is not a structurally valid language tag");

            // v. Let tag be the result of calling the abstract operation
            //    CanonicalizeLanguageTag (defined in 6.2.3), passing tag as the
            //    argument.
            tag = CanonicalizeLanguageTag(tag);

            // vi. If tag is not an element of seen, then append tag as the last
            //     element of seen.
            if (arrIndexOf.call(seen, tag) === -1) arrPush.call(seen, tag);
        }

        // d. Increase k by 1.
        k++;
    }

    // 9. Return seen.
    return seen;
}

/**
 * The BestAvailableLocale abstract operation compares the provided argument
 * locale, which must be a String value with a structurally valid and
 * canonicalized BCP 47 language tag, against the locales in availableLocales and
 * returns either the longest non-empty prefix of locale that is an element of
 * availableLocales, or undefined if there is no such element. It uses the
 * fallback mechanism of RFC 4647, section 3.4. The following steps are taken:
 */
function /* 9.2.2 */BestAvailableLocale(availableLocales, locale) {
    // 1. Let candidate be locale
    var candidate = locale;

    // 2. Repeat
    while (candidate) {
        // a. If availableLocales contains an element equal to candidate, then return
        // candidate.
        if (arrIndexOf.call(availableLocales, candidate) > -1) return candidate;

        // b. Let pos be the character index of the last occurrence of "-"
        // (U+002D) within candidate. If that character does not occur, return
        // undefined.
        var pos = candidate.lastIndexOf('-');

        if (pos < 0) return;

        // c. If pos ≥ 2 and the character "-" occurs at index pos-2 of candidate,
        //    then decrease pos by 2.
        if (pos >= 2 && candidate.charAt(pos - 2) === '-') pos -= 2;

        // d. Let candidate be the substring of candidate from position 0, inclusive,
        //    to position pos, exclusive.
        candidate = candidate.substring(0, pos);
    }
}

/**
 * The LookupMatcher abstract operation compares requestedLocales, which must be
 * a List as returned by CanonicalizeLocaleList, against the locales in
 * availableLocales and determines the best available language to meet the
 * request. The following steps are taken:
 */
function /* 9.2.3 */LookupMatcher(availableLocales, requestedLocales) {
    // 1. Let i be 0.
    var i = 0;

    // 2. Let len be the number of elements in requestedLocales.
    var len = requestedLocales.length;

    // 3. Let availableLocale be undefined.
    var availableLocale = void 0;

    var locale = void 0,
        noExtensionsLocale = void 0;

    // 4. Repeat while i < len and availableLocale is undefined:
    while (i < len && !availableLocale) {
        // a. Let locale be the element of requestedLocales at 0-origined list
        //    position i.
        locale = requestedLocales[i];

        // b. Let noExtensionsLocale be the String value that is locale with all
        //    Unicode locale extension sequences removed.
        noExtensionsLocale = String(locale).replace(expUnicodeExSeq, '');

        // c. Let availableLocale be the result of calling the
        //    BestAvailableLocale abstract operation (defined in 9.2.2) with
        //    arguments availableLocales and noExtensionsLocale.
        availableLocale = BestAvailableLocale(availableLocales, noExtensionsLocale);

        // d. Increase i by 1.
        i++;
    }

    // 5. Let result be a new Record.
    var result = new Record();

    // 6. If availableLocale is not undefined, then
    if (availableLocale !== undefined) {
        // a. Set result.[[locale]] to availableLocale.
        result['[[locale]]'] = availableLocale;

        // b. If locale and noExtensionsLocale are not the same String value, then
        if (String(locale) !== String(noExtensionsLocale)) {
            // i. Let extension be the String value consisting of the first
            //    substring of locale that is a Unicode locale extension sequence.
            var extension = locale.match(expUnicodeExSeq)[0];

            // ii. Let extensionIndex be the character position of the initial
            //     "-" of the first Unicode locale extension sequence within locale.
            var extensionIndex = locale.indexOf('-u-');

            // iii. Set result.[[extension]] to extension.
            result['[[extension]]'] = extension;

            // iv. Set result.[[extensionIndex]] to extensionIndex.
            result['[[extensionIndex]]'] = extensionIndex;
        }
    }
    // 7. Else
    else
        // a. Set result.[[locale]] to the value returned by the DefaultLocale abstract
        //    operation (defined in 6.2.4).
        result['[[locale]]'] = DefaultLocale();

    // 8. Return result
    return result;
}

/**
 * The BestFitMatcher abstract operation compares requestedLocales, which must be
 * a List as returned by CanonicalizeLocaleList, against the locales in
 * availableLocales and determines the best available language to meet the
 * request. The algorithm is implementation dependent, but should produce results
 * that a typical user of the requested locales would perceive as at least as
 * good as those produced by the LookupMatcher abstract operation. Options
 * specified through Unicode locale extension sequences must be ignored by the
 * algorithm. Information about such subsequences is returned separately.
 * The abstract operation returns a record with a [[locale]] field, whose value
 * is the language tag of the selected locale, which must be an element of
 * availableLocales. If the language tag of the request locale that led to the
 * selected locale contained a Unicode locale extension sequence, then the
 * returned record also contains an [[extension]] field whose value is the first
 * Unicode locale extension sequence, and an [[extensionIndex]] field whose value
 * is the index of the first Unicode locale extension sequence within the request
 * locale language tag.
 */
function /* 9.2.4 */BestFitMatcher(availableLocales, requestedLocales) {
    return LookupMatcher(availableLocales, requestedLocales);
}

/**
 * The ResolveLocale abstract operation compares a BCP 47 language priority list
 * requestedLocales against the locales in availableLocales and determines the
 * best available language to meet the request. availableLocales and
 * requestedLocales must be provided as List values, options as a Record.
 */
function /* 9.2.5 */ResolveLocale(availableLocales, requestedLocales, options, relevantExtensionKeys, localeData) {
    if (availableLocales.length === 0) {
        throw new ReferenceError('No locale data has been provided for this object yet.');
    }

    // The following steps are taken:
    // 1. Let matcher be the value of options.[[localeMatcher]].
    var matcher = options['[[localeMatcher]]'];

    var r = void 0;

    // 2. If matcher is "lookup", then
    if (matcher === 'lookup')
        // a. Let r be the result of calling the LookupMatcher abstract operation
        //    (defined in 9.2.3) with arguments availableLocales and
        //    requestedLocales.
        r = LookupMatcher(availableLocales, requestedLocales);

        // 3. Else
    else
        // a. Let r be the result of calling the BestFitMatcher abstract
        //    operation (defined in 9.2.4) with arguments availableLocales and
        //    requestedLocales.
        r = BestFitMatcher(availableLocales, requestedLocales);

    // 4. Let foundLocale be the value of r.[[locale]].
    var foundLocale = r['[[locale]]'];

    var extensionSubtags = void 0,
        extensionSubtagsLength = void 0;

    // 5. If r has an [[extension]] field, then
    if (hop.call(r, '[[extension]]')) {
        // a. Let extension be the value of r.[[extension]].
        var extension = r['[[extension]]'];
        // b. Let split be the standard built-in function object defined in ES5,
        //    15.5.4.14.
        var split = String.prototype.split;
        // c. Let extensionSubtags be the result of calling the [[Call]] internal
        //    method of split with extension as the this value and an argument
        //    list containing the single item "-".
        extensionSubtags = split.call(extension, '-');
        // d. Let extensionSubtagsLength be the result of calling the [[Get]]
        //    internal method of extensionSubtags with argument "length".
        extensionSubtagsLength = extensionSubtags.length;
    }

    // 6. Let result be a new Record.
    var result = new Record();

    // 7. Set result.[[dataLocale]] to foundLocale.
    result['[[dataLocale]]'] = foundLocale;

    // 8. Let supportedExtension be "-u".
    var supportedExtension = '-u';
    // 9. Let i be 0.
    var i = 0;
    // 10. Let len be the result of calling the [[Get]] internal method of
    //     relevantExtensionKeys with argument "length".
    var len = relevantExtensionKeys.length;

    // 11 Repeat while i < len:
    while (i < len) {
        // a. Let key be the result of calling the [[Get]] internal method of
        //    relevantExtensionKeys with argument ToString(i).
        var key = relevantExtensionKeys[i];
        // b. Let foundLocaleData be the result of calling the [[Get]] internal
        //    method of localeData with the argument foundLocale.
        var foundLocaleData = localeData[foundLocale];
        // c. Let keyLocaleData be the result of calling the [[Get]] internal
        //    method of foundLocaleData with the argument key.
        var keyLocaleData = foundLocaleData[key];
        // d. Let value be the result of calling the [[Get]] internal method of
        //    keyLocaleData with argument "0".
        var value = keyLocaleData['0'];
        // e. Let supportedExtensionAddition be "".
        var supportedExtensionAddition = '';
        // f. Let indexOf be the standard built-in function object defined in
        //    ES5, 15.4.4.14.
        var indexOf = arrIndexOf;

        // g. If extensionSubtags is not undefined, then
        if (extensionSubtags !== undefined) {
            // i. Let keyPos be the result of calling the [[Call]] internal
            //    method of indexOf with extensionSubtags as the this value and
            // an argument list containing the single item key.
            var keyPos = indexOf.call(extensionSubtags, key);

            // ii. If keyPos ≠ -1, then
            if (keyPos !== -1) {
                // 1. If keyPos + 1 < extensionSubtagsLength and the length of the
                //    result of calling the [[Get]] internal method of
                //    extensionSubtags with argument ToString(keyPos +1) is greater
                //    than 2, then
                if (keyPos + 1 < extensionSubtagsLength && extensionSubtags[keyPos + 1].length > 2) {
                    // a. Let requestedValue be the result of calling the [[Get]]
                    //    internal method of extensionSubtags with argument
                    //    ToString(keyPos + 1).
                    var requestedValue = extensionSubtags[keyPos + 1];
                    // b. Let valuePos be the result of calling the [[Call]]
                    //    internal method of indexOf with keyLocaleData as the
                    //    this value and an argument list containing the single
                    //    item requestedValue.
                    var valuePos = indexOf.call(keyLocaleData, requestedValue);

                    // c. If valuePos ≠ -1, then
                    if (valuePos !== -1) {
                        // i. Let value be requestedValue.
                        value = requestedValue,
                        // ii. Let supportedExtensionAddition be the
                        //     concatenation of "-", key, "-", and value.
                        supportedExtensionAddition = '-' + key + '-' + value;
                    }
                }
                // 2. Else
                else {
                        // a. Let valuePos be the result of calling the [[Call]]
                        // internal method of indexOf with keyLocaleData as the this
                        // value and an argument list containing the single item
                        // "true".
                        var _valuePos = indexOf(keyLocaleData, 'true');

                        // b. If valuePos ≠ -1, then
                        if (_valuePos !== -1)
                            // i. Let value be "true".
                            value = 'true';
                    }
            }
        }
        // h. If options has a field [[<key>]], then
        if (hop.call(options, '[[' + key + ']]')) {
            // i. Let optionsValue be the value of options.[[<key>]].
            var optionsValue = options['[[' + key + ']]'];

            // ii. If the result of calling the [[Call]] internal method of indexOf
            //     with keyLocaleData as the this value and an argument list
            //     containing the single item optionsValue is not -1, then
            if (indexOf.call(keyLocaleData, optionsValue) !== -1) {
                // 1. If optionsValue is not equal to value, then
                if (optionsValue !== value) {
                    // a. Let value be optionsValue.
                    value = optionsValue;
                    // b. Let supportedExtensionAddition be "".
                    supportedExtensionAddition = '';
                }
            }
        }
        // i. Set result.[[<key>]] to value.
        result['[[' + key + ']]'] = value;

        // j. Append supportedExtensionAddition to supportedExtension.
        supportedExtension += supportedExtensionAddition;

        // k. Increase i by 1.
        i++;
    }
    // 12. If the length of supportedExtension is greater than 2, then
    if (supportedExtension.length > 2) {
        // a.
        var privateIndex = foundLocale.indexOf("-x-");
        // b.
        if (privateIndex === -1) {
            // i.
            foundLocale = foundLocale + supportedExtension;
        }
        // c.
        else {
                // i.
                var preExtension = foundLocale.substring(0, privateIndex);
                // ii.
                var postExtension = foundLocale.substring(privateIndex);
                // iii.
                foundLocale = preExtension + supportedExtension + postExtension;
            }
        // d. asserting - skipping
        // e.
        foundLocale = CanonicalizeLanguageTag(foundLocale);
    }
    // 13. Set result.[[locale]] to foundLocale.
    result['[[locale]]'] = foundLocale;

    // 14. Return result.
    return result;
}

/**
 * The LookupSupportedLocales abstract operation returns the subset of the
 * provided BCP 47 language priority list requestedLocales for which
 * availableLocales has a matching locale when using the BCP 47 Lookup algorithm.
 * Locales appear in the same order in the returned list as in requestedLocales.
 * The following steps are taken:
 */
function /* 9.2.6 */LookupSupportedLocales(availableLocales, requestedLocales) {
    // 1. Let len be the number of elements in requestedLocales.
    var len = requestedLocales.length;
    // 2. Let subset be a new empty List.
    var subset = new List();
    // 3. Let k be 0.
    var k = 0;

    // 4. Repeat while k < len
    while (k < len) {
        // a. Let locale be the element of requestedLocales at 0-origined list
        //    position k.
        var locale = requestedLocales[k];
        // b. Let noExtensionsLocale be the String value that is locale with all
        //    Unicode locale extension sequences removed.
        var noExtensionsLocale = String(locale).replace(expUnicodeExSeq, '');
        // c. Let availableLocale be the result of calling the
        //    BestAvailableLocale abstract operation (defined in 9.2.2) with
        //    arguments availableLocales and noExtensionsLocale.
        var availableLocale = BestAvailableLocale(availableLocales, noExtensionsLocale);

        // d. If availableLocale is not undefined, then append locale to the end of
        //    subset.
        if (availableLocale !== undefined) arrPush.call(subset, locale);

        // e. Increment k by 1.
        k++;
    }

    // 5. Let subsetArray be a new Array object whose elements are the same
    //    values in the same order as the elements of subset.
    var subsetArray = arrSlice.call(subset);

    // 6. Return subsetArray.
    return subsetArray;
}

/**
 * The BestFitSupportedLocales abstract operation returns the subset of the
 * provided BCP 47 language priority list requestedLocales for which
 * availableLocales has a matching locale when using the Best Fit Matcher
 * algorithm. Locales appear in the same order in the returned list as in
 * requestedLocales. The steps taken are implementation dependent.
 */
function /*9.2.7 */BestFitSupportedLocales(availableLocales, requestedLocales) {
    // ###TODO: implement this function as described by the specification###
    return LookupSupportedLocales(availableLocales, requestedLocales);
}

/**
 * The SupportedLocales abstract operation returns the subset of the provided BCP
 * 47 language priority list requestedLocales for which availableLocales has a
 * matching locale. Two algorithms are available to match the locales: the Lookup
 * algorithm described in RFC 4647 section 3.4, and an implementation dependent
 * best-fit algorithm. Locales appear in the same order in the returned list as
 * in requestedLocales. The following steps are taken:
 */
function /*9.2.8 */SupportedLocales(availableLocales, requestedLocales, options) {
    var matcher = void 0,
        subset = void 0;

    // 1. If options is not undefined, then
    if (options !== undefined) {
        // a. Let options be ToObject(options).
        options = new Record(toObject(options));
        // b. Let matcher be the result of calling the [[Get]] internal method of
        //    options with argument "localeMatcher".
        matcher = options.localeMatcher;

        // c. If matcher is not undefined, then
        if (matcher !== undefined) {
            // i. Let matcher be ToString(matcher).
            matcher = String(matcher);

            // ii. If matcher is not "lookup" or "best fit", then throw a RangeError
            //     exception.
            if (matcher !== 'lookup' && matcher !== 'best fit') throw new RangeError('matcher should be "lookup" or "best fit"');
        }
    }
    // 2. If matcher is undefined or "best fit", then
    if (matcher === undefined || matcher === 'best fit')
        // a. Let subset be the result of calling the BestFitSupportedLocales
        //    abstract operation (defined in 9.2.7) with arguments
        //    availableLocales and requestedLocales.
        subset = BestFitSupportedLocales(availableLocales, requestedLocales);
        // 3. Else
    else
        // a. Let subset be the result of calling the LookupSupportedLocales
        //    abstract operation (defined in 9.2.6) with arguments
        //    availableLocales and requestedLocales.
        subset = LookupSupportedLocales(availableLocales, requestedLocales);

    // 4. For each named own property name P of subset,
    for (var P in subset) {
        if (!hop.call(subset, P)) continue;

        // a. Let desc be the result of calling the [[GetOwnProperty]] internal
        //    method of subset with P.
        // b. Set desc.[[Writable]] to false.
        // c. Set desc.[[Configurable]] to false.
        // d. Call the [[DefineOwnProperty]] internal method of subset with P, desc,
        //    and true as arguments.
        defineProperty(subset, P, {
            writable: false, configurable: false, value: subset[P]
        });
    }
    // "Freeze" the array so no new elements can be added
    defineProperty(subset, 'length', { writable: false });

    // 5. Return subset
    return subset;
}

/**
 * The GetOption abstract operation extracts the value of the property named
 * property from the provided options object, converts it to the required type,
 * checks whether it is one of a List of allowed values, and fills in a fallback
 * value if necessary.
 */
function /*9.2.9 */GetOption(options, property, type, values, fallback) {
    // 1. Let value be the result of calling the [[Get]] internal method of
    //    options with argument property.
    var value = options[property];

    // 2. If value is not undefined, then
    if (value !== undefined) {
        // a. Assert: type is "boolean" or "string".
        // b. If type is "boolean", then let value be ToBoolean(value).
        // c. If type is "string", then let value be ToString(value).
        value = type === 'boolean' ? Boolean(value) : type === 'string' ? String(value) : value;

        // d. If values is not undefined, then
        if (values !== undefined) {
            // i. If values does not contain an element equal to value, then throw a
            //    RangeError exception.
            if (arrIndexOf.call(values, value) === -1) throw new RangeError("'" + value + "' is not an allowed value for `" + property + '`');
        }

        // e. Return value.
        return value;
    }
    // Else return fallback.
    return fallback;
}

/**
 * The GetNumberOption abstract operation extracts a property value from the
 * provided options object, converts it to a Number value, checks whether it is
 * in the allowed range, and fills in a fallback value if necessary.
 */
function /* 9.2.10 */GetNumberOption(options, property, minimum, maximum, fallback) {
    // 1. Let value be the result of calling the [[Get]] internal method of
    //    options with argument property.
    var value = options[property];

    // 2. If value is not undefined, then
    if (value !== undefined) {
        // a. Let value be ToNumber(value).
        value = Number(value);

        // b. If value is NaN or less than minimum or greater than maximum, throw a
        //    RangeError exception.
        if (isNaN(value) || value < minimum || value > maximum) throw new RangeError('Value is not a number or outside accepted range');

        // c. Return floor(value).
        return Math.floor(value);
    }
    // 3. Else return fallback.
    return fallback;
}

// 8 The Intl Object
var Intl = {};

// 8.2 Function Properties of the Intl Object

// 8.2.1
// @spec[tc39/ecma402/master/spec/intl.html]
// @clause[sec-intl.getcanonicallocales]
function getCanonicalLocales(locales) {
    // 1. Let ll be ? CanonicalizeLocaleList(locales).
    var ll = CanonicalizeLocaleList(locales);
    // 2. Return CreateArrayFromList(ll).
    {
        var result = [];

        var len = ll.length;
        var k = 0;

        while (k < len) {
            result[k] = ll[k];
            k++;
        }
        return result;
    }
}

Object.defineProperty(Intl, 'getCanonicalLocales', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: getCanonicalLocales
});

// Currency minor units output from get-4217 grunt task, formatted
var currencyMinorUnits = {
    BHD: 3, BYR: 0, XOF: 0, BIF: 0, XAF: 0, CLF: 4, CLP: 0, KMF: 0, DJF: 0,
    XPF: 0, GNF: 0, ISK: 0, IQD: 3, JPY: 0, JOD: 3, KRW: 0, KWD: 3, LYD: 3,
    OMR: 3, PYG: 0, RWF: 0, TND: 3, UGX: 0, UYI: 0, VUV: 0, VND: 0
};

// Define the NumberFormat constructor internally so it cannot be tainted
function NumberFormatConstructor() {
    var locales = arguments[0];
    var options = arguments[1];

    if (!this || this === Intl) {
        return new Intl.NumberFormat(locales, options);
    }

    return InitializeNumberFormat(toObject(this), locales, options);
}

defineProperty(Intl, 'NumberFormat', {
    configurable: true,
    writable: true,
    value: NumberFormatConstructor
});

// Must explicitly set prototypes as unwritable
defineProperty(Intl.NumberFormat, 'prototype', {
    writable: false
});

/**
 * The abstract operation InitializeNumberFormat accepts the arguments
 * numberFormat (which must be an object), locales, and options. It initializes
 * numberFormat as a NumberFormat object.
 */
function /*11.1.1.1 */InitializeNumberFormat(numberFormat, locales, options) {
    // This will be a internal properties object if we're not already initialized
    var internal = getInternalProperties(numberFormat);

    // Create an object whose props can be used to restore the values of RegExp props
    var regexpRestore = createRegExpRestore();

    // 1. If numberFormat has an [[initializedIntlObject]] internal property with
    // value true, throw a TypeError exception.
    if (internal['[[initializedIntlObject]]'] === true) throw new TypeError('`this` object has already been initialized as an Intl object');

    // Need this to access the `internal` object
    defineProperty(numberFormat, '__getInternalProperties', {
        value: function value() {
            // NOTE: Non-standard, for internal use only
            if (arguments[0] === secret) return internal;
        }
    });

    // 2. Set the [[initializedIntlObject]] internal property of numberFormat to true.
    internal['[[initializedIntlObject]]'] = true;

    // 3. Let requestedLocales be the result of calling the CanonicalizeLocaleList
    //    abstract operation (defined in 9.2.1) with argument locales.
    var requestedLocales = CanonicalizeLocaleList(locales);

    // 4. If options is undefined, then
    if (options === undefined)
        // a. Let options be the result of creating a new object as if by the
        // expression new Object() where Object is the standard built-in constructor
        // with that name.
        options = {};

        // 5. Else
    else
        // a. Let options be ToObject(options).
        options = toObject(options);

    // 6. Let opt be a new Record.
    var opt = new Record(),


    // 7. Let matcher be the result of calling the GetOption abstract operation
    //    (defined in 9.2.9) with the arguments options, "localeMatcher", "string",
    //    a List containing the two String values "lookup" and "best fit", and
    //    "best fit".
    matcher = GetOption(options, 'localeMatcher', 'string', new List('lookup', 'best fit'), 'best fit');

    // 8. Set opt.[[localeMatcher]] to matcher.
    opt['[[localeMatcher]]'] = matcher;

    // 9. Let NumberFormat be the standard built-in object that is the initial value
    //    of Intl.NumberFormat.
    // 10. Let localeData be the value of the [[localeData]] internal property of
    //     NumberFormat.
    var localeData = internals.NumberFormat['[[localeData]]'];

    // 11. Let r be the result of calling the ResolveLocale abstract operation
    //     (defined in 9.2.5) with the [[availableLocales]] internal property of
    //     NumberFormat, requestedLocales, opt, the [[relevantExtensionKeys]]
    //     internal property of NumberFormat, and localeData.
    var r = ResolveLocale(internals.NumberFormat['[[availableLocales]]'], requestedLocales, opt, internals.NumberFormat['[[relevantExtensionKeys]]'], localeData);

    // 12. Set the [[locale]] internal property of numberFormat to the value of
    //     r.[[locale]].
    internal['[[locale]]'] = r['[[locale]]'];

    // 13. Set the [[numberingSystem]] internal property of numberFormat to the value
    //     of r.[[nu]].
    internal['[[numberingSystem]]'] = r['[[nu]]'];

    // The specification doesn't tell us to do this, but it's helpful later on
    internal['[[dataLocale]]'] = r['[[dataLocale]]'];

    // 14. Let dataLocale be the value of r.[[dataLocale]].
    var dataLocale = r['[[dataLocale]]'];

    // 15. Let s be the result of calling the GetOption abstract operation with the
    //     arguments options, "style", "string", a List containing the three String
    //     values "decimal", "percent", and "currency", and "decimal".
    var s = GetOption(options, 'style', 'string', new List('decimal', 'percent', 'currency'), 'decimal');

    // 16. Set the [[style]] internal property of numberFormat to s.
    internal['[[style]]'] = s;

    // 17. Let c be the result of calling the GetOption abstract operation with the
    //     arguments options, "currency", "string", undefined, and undefined.
    var c = GetOption(options, 'currency', 'string');

    // 18. If c is not undefined and the result of calling the
    //     IsWellFormedCurrencyCode abstract operation (defined in 6.3.1) with
    //     argument c is false, then throw a RangeError exception.
    if (c !== undefined && !IsWellFormedCurrencyCode(c)) throw new RangeError("'" + c + "' is not a valid currency code");

    // 19. If s is "currency" and c is undefined, throw a TypeError exception.
    if (s === 'currency' && c === undefined) throw new TypeError('Currency code is required when style is currency');

    var cDigits = void 0;

    // 20. If s is "currency", then
    if (s === 'currency') {
        // a. Let c be the result of converting c to upper case as specified in 6.1.
        c = c.toUpperCase();

        // b. Set the [[currency]] internal property of numberFormat to c.
        internal['[[currency]]'] = c;

        // c. Let cDigits be the result of calling the CurrencyDigits abstract
        //    operation (defined below) with argument c.
        cDigits = CurrencyDigits(c);
    }

    // 21. Let cd be the result of calling the GetOption abstract operation with the
    //     arguments options, "currencyDisplay", "string", a List containing the
    //     three String values "code", "symbol", and "name", and "symbol".
    var cd = GetOption(options, 'currencyDisplay', 'string', new List('code', 'symbol', 'name'), 'symbol');

    // 22. If s is "currency", then set the [[currencyDisplay]] internal property of
    //     numberFormat to cd.
    if (s === 'currency') internal['[[currencyDisplay]]'] = cd;

    // 23. Let mnid be the result of calling the GetNumberOption abstract operation
    //     (defined in 9.2.10) with arguments options, "minimumIntegerDigits", 1, 21,
    //     and 1.
    var mnid = GetNumberOption(options, 'minimumIntegerDigits', 1, 21, 1);

    // 24. Set the [[minimumIntegerDigits]] internal property of numberFormat to mnid.
    internal['[[minimumIntegerDigits]]'] = mnid;

    // 25. If s is "currency", then let mnfdDefault be cDigits; else let mnfdDefault
    //     be 0.
    var mnfdDefault = s === 'currency' ? cDigits : 0;

    // 26. Let mnfd be the result of calling the GetNumberOption abstract operation
    //     with arguments options, "minimumFractionDigits", 0, 20, and mnfdDefault.
    var mnfd = GetNumberOption(options, 'minimumFractionDigits', 0, 20, mnfdDefault);

    // 27. Set the [[minimumFractionDigits]] internal property of numberFormat to mnfd.
    internal['[[minimumFractionDigits]]'] = mnfd;

    // 28. If s is "currency", then let mxfdDefault be max(mnfd, cDigits); else if s
    //     is "percent", then let mxfdDefault be max(mnfd, 0); else let mxfdDefault
    //     be max(mnfd, 3).
    var mxfdDefault = s === 'currency' ? Math.max(mnfd, cDigits) : s === 'percent' ? Math.max(mnfd, 0) : Math.max(mnfd, 3);

    // 29. Let mxfd be the result of calling the GetNumberOption abstract operation
    //     with arguments options, "maximumFractionDigits", mnfd, 20, and mxfdDefault.
    var mxfd = GetNumberOption(options, 'maximumFractionDigits', mnfd, 20, mxfdDefault);

    // 30. Set the [[maximumFractionDigits]] internal property of numberFormat to mxfd.
    internal['[[maximumFractionDigits]]'] = mxfd;

    // 31. Let mnsd be the result of calling the [[Get]] internal method of options
    //     with argument "minimumSignificantDigits".
    var mnsd = options.minimumSignificantDigits;

    // 32. Let mxsd be the result of calling the [[Get]] internal method of options
    //     with argument "maximumSignificantDigits".
    var mxsd = options.maximumSignificantDigits;

    // 33. If mnsd is not undefined or mxsd is not undefined, then:
    if (mnsd !== undefined || mxsd !== undefined) {
        // a. Let mnsd be the result of calling the GetNumberOption abstract
        //    operation with arguments options, "minimumSignificantDigits", 1, 21,
        //    and 1.
        mnsd = GetNumberOption(options, 'minimumSignificantDigits', 1, 21, 1);

        // b. Let mxsd be the result of calling the GetNumberOption abstract
        //     operation with arguments options, "maximumSignificantDigits", mnsd,
        //     21, and 21.
        mxsd = GetNumberOption(options, 'maximumSignificantDigits', mnsd, 21, 21);

        // c. Set the [[minimumSignificantDigits]] internal property of numberFormat
        //    to mnsd, and the [[maximumSignificantDigits]] internal property of
        //    numberFormat to mxsd.
        internal['[[minimumSignificantDigits]]'] = mnsd;
        internal['[[maximumSignificantDigits]]'] = mxsd;
    }
    // 34. Let g be the result of calling the GetOption abstract operation with the
    //     arguments options, "useGrouping", "boolean", undefined, and true.
    var g = GetOption(options, 'useGrouping', 'boolean', undefined, true);

    // 35. Set the [[useGrouping]] internal property of numberFormat to g.
    internal['[[useGrouping]]'] = g;

    // 36. Let dataLocaleData be the result of calling the [[Get]] internal method of
    //     localeData with argument dataLocale.
    var dataLocaleData = localeData[dataLocale];

    // 37. Let patterns be the result of calling the [[Get]] internal method of
    //     dataLocaleData with argument "patterns".
    var patterns = dataLocaleData.patterns;

    // 38. Assert: patterns is an object (see 11.2.3)

    // 39. Let stylePatterns be the result of calling the [[Get]] internal method of
    //     patterns with argument s.
    var stylePatterns = patterns[s];

    // 40. Set the [[positivePattern]] internal property of numberFormat to the
    //     result of calling the [[Get]] internal method of stylePatterns with the
    //     argument "positivePattern".
    internal['[[positivePattern]]'] = stylePatterns.positivePattern;

    // 41. Set the [[negativePattern]] internal property of numberFormat to the
    //     result of calling the [[Get]] internal method of stylePatterns with the
    //     argument "negativePattern".
    internal['[[negativePattern]]'] = stylePatterns.negativePattern;

    // 42. Set the [[boundFormat]] internal property of numberFormat to undefined.
    internal['[[boundFormat]]'] = undefined;

    // 43. Set the [[initializedNumberFormat]] internal property of numberFormat to
    //     true.
    internal['[[initializedNumberFormat]]'] = true;

    // In ES3, we need to pre-bind the format() function
    if (es3) numberFormat.format = GetFormatNumber.call(numberFormat);

    // Restore the RegExp properties
    regexpRestore();

    // Return the newly initialised object
    return numberFormat;
}

function CurrencyDigits(currency) {
    // When the CurrencyDigits abstract operation is called with an argument currency
    // (which must be an upper case String value), the following steps are taken:

    // 1. If the ISO 4217 currency and funds code list contains currency as an
    // alphabetic code, then return the minor unit value corresponding to the
    // currency from the list; else return 2.
    return currencyMinorUnits[currency] !== undefined ? currencyMinorUnits[currency] : 2;
}

/* 11.2.3 */internals.NumberFormat = {
    '[[availableLocales]]': [],
    '[[relevantExtensionKeys]]': ['nu'],
    '[[localeData]]': {}
};

/**
 * When the supportedLocalesOf method of Intl.NumberFormat is called, the
 * following steps are taken:
 */
/* 11.2.2 */
defineProperty(Intl.NumberFormat, 'supportedLocalesOf', {
    configurable: true,
    writable: true,
    value: fnBind.call(function (locales) {
        // Bound functions only have the `this` value altered if being used as a constructor,
        // this lets us imitate a native function that has no constructor
        if (!hop.call(this, '[[availableLocales]]')) throw new TypeError('supportedLocalesOf() is not a constructor');

        // Create an object whose props can be used to restore the values of RegExp props
        var regexpRestore = createRegExpRestore(),


        // 1. If options is not provided, then let options be undefined.
        options = arguments[1],


        // 2. Let availableLocales be the value of the [[availableLocales]] internal
        //    property of the standard built-in object that is the initial value of
        //    Intl.NumberFormat.

        availableLocales = this['[[availableLocales]]'],


        // 3. Let requestedLocales be the result of calling the CanonicalizeLocaleList
        //    abstract operation (defined in 9.2.1) with argument locales.
        requestedLocales = CanonicalizeLocaleList(locales);

        // Restore the RegExp properties
        regexpRestore();

        // 4. Return the result of calling the SupportedLocales abstract operation
        //    (defined in 9.2.8) with arguments availableLocales, requestedLocales,
        //    and options.
        return SupportedLocales(availableLocales, requestedLocales, options);
    }, internals.NumberFormat)
});

/**
 * This named accessor property returns a function that formats a number
 * according to the effective locale and the formatting options of this
 * NumberFormat object.
 */
/* 11.3.2 */defineProperty(Intl.NumberFormat.prototype, 'format', {
    configurable: true,
    get: GetFormatNumber
});

function GetFormatNumber() {
    var internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);

    // Satisfy test 11.3_b
    if (!internal || !internal['[[initializedNumberFormat]]']) throw new TypeError('`this` value for format() is not an initialized Intl.NumberFormat object.');

    // The value of the [[Get]] attribute is a function that takes the following
    // steps:

    // 1. If the [[boundFormat]] internal property of this NumberFormat object
    //    is undefined, then:
    if (internal['[[boundFormat]]'] === undefined) {
        // a. Let F be a Function object, with internal properties set as
        //    specified for built-in functions in ES5, 15, or successor, and the
        //    length property set to 1, that takes the argument value and
        //    performs the following steps:
        var F = function F(value) {
            // i. If value is not provided, then let value be undefined.
            // ii. Let x be ToNumber(value).
            // iii. Return the result of calling the FormatNumber abstract
            //      operation (defined below) with arguments this and x.
            return FormatNumber(this, /* x = */Number(value));
        };

        // b. Let bind be the standard built-in function object defined in ES5,
        //    15.3.4.5.
        // c. Let bf be the result of calling the [[Call]] internal method of
        //    bind with F as the this value and an argument list containing
        //    the single item this.
        var bf = fnBind.call(F, this);

        // d. Set the [[boundFormat]] internal property of this NumberFormat
        //    object to bf.
        internal['[[boundFormat]]'] = bf;
    }
    // Return the value of the [[boundFormat]] internal property of this
    // NumberFormat object.
    return internal['[[boundFormat]]'];
}

function formatToParts() {
    var value = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

    var internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);
    if (!internal || !internal['[[initializedNumberFormat]]']) throw new TypeError('`this` value for formatToParts() is not an initialized Intl.NumberFormat object.');

    var x = Number(value);
    return FormatNumberToParts(this, x);
}

Object.defineProperty(Intl.NumberFormat.prototype, 'formatToParts', {
    configurable: true,
    enumerable: false,
    writable: true,
    value: formatToParts
});

/*
 * @spec[stasm/ecma402/number-format-to-parts/spec/numberformat.html]
 * @clause[sec-formatnumbertoparts]
 */
function FormatNumberToParts(numberFormat, x) {
    // 1. Let parts be ? PartitionNumberPattern(numberFormat, x).
    var parts = PartitionNumberPattern(numberFormat, x);
    // 2. Let result be ArrayCreate(0).
    var result = [];
    // 3. Let n be 0.
    var n = 0;
    // 4. For each part in parts, do:
    for (var i = 0; parts.length > i; i++) {
        var part = parts[i];
        // a. Let O be ObjectCreate(%ObjectPrototype%).
        var O = {};
        // a. Perform ? CreateDataPropertyOrThrow(O, "type", part.[[type]]).
        O.type = part['[[type]]'];
        // a. Perform ? CreateDataPropertyOrThrow(O, "value", part.[[value]]).
        O.value = part['[[value]]'];
        // a. Perform ? CreateDataPropertyOrThrow(result, ? ToString(n), O).
        result[n] = O;
        // a. Increment n by 1.
        n += 1;
    }
    // 5. Return result.
    return result;
}

/*
 * @spec[stasm/ecma402/number-format-to-parts/spec/numberformat.html]
 * @clause[sec-partitionnumberpattern]
 */
function PartitionNumberPattern(numberFormat, x) {

    var internal = getInternalProperties(numberFormat),
        locale = internal['[[dataLocale]]'],
        nums = internal['[[numberingSystem]]'],
        data = internals.NumberFormat['[[localeData]]'][locale],
        ild = data.symbols[nums] || data.symbols.latn,
        pattern = void 0;

    // 1. If x is not NaN and x < 0, then:
    if (!isNaN(x) && x < 0) {
        // a. Let x be -x.
        x = -x;
        // a. Let pattern be the value of numberFormat.[[negativePattern]].
        pattern = internal['[[negativePattern]]'];
    }
    // 2. Else,
    else {
            // a. Let pattern be the value of numberFormat.[[positivePattern]].
            pattern = internal['[[positivePattern]]'];
        }
    // 3. Let result be a new empty List.
    var result = new List();
    // 4. Let beginIndex be Call(%StringProto_indexOf%, pattern, "{", 0).
    var beginIndex = pattern.indexOf('{', 0);
    // 5. Let endIndex be 0.
    var endIndex = 0;
    // 6. Let nextIndex be 0.
    var nextIndex = 0;
    // 7. Let length be the number of code units in pattern.
    var length = pattern.length;
    // 8. Repeat while beginIndex is an integer index into pattern:
    while (beginIndex > -1 && beginIndex < length) {
        // a. Set endIndex to Call(%StringProto_indexOf%, pattern, "}", beginIndex)
        endIndex = pattern.indexOf('}', beginIndex);
        // a. If endIndex = -1, throw new Error exception.
        if (endIndex === -1) throw new Error();
        // a. If beginIndex is greater than nextIndex, then:
        if (beginIndex > nextIndex) {
            // i. Let literal be a substring of pattern from position nextIndex, inclusive, to position beginIndex, exclusive.
            var literal = pattern.substring(nextIndex, beginIndex);
            // ii. Add new part record { [[type]]: "literal", [[value]]: literal } as a new element of the list result.
            arrPush.call(result, { '[[type]]': 'literal', '[[value]]': literal });
        }
        // a. Let p be the substring of pattern from position beginIndex, exclusive, to position endIndex, exclusive.
        var p = pattern.substring(beginIndex + 1, endIndex);
        // a. If p is equal "number", then:
        if (p === "number") {
            // i. If x is NaN,
            if (isNaN(x)) {
                // 1. Let n be an ILD String value indicating the NaN value.
                var n = ild.nan;
                // 2. Add new part record { [[type]]: "nan", [[value]]: n } as a new element of the list result.
                arrPush.call(result, { '[[type]]': 'nan', '[[value]]': n });
            }
            // ii. Else if isFinite(x) is false,
            else if (!isFinite(x)) {
                    // 1. Let n be an ILD String value indicating infinity.
                    var _n = ild.infinity;
                    // 2. Add new part record { [[type]]: "infinity", [[value]]: n } as a new element of the list result.
                    arrPush.call(result, { '[[type]]': 'infinity', '[[value]]': _n });
                }
                // iii. Else,
                else {
                        // 1. If the value of numberFormat.[[style]] is "percent" and isFinite(x), let x be 100 × x.
                        if (internal['[[style]]'] === 'percent' && isFinite(x)) x *= 100;

                        var _n2 = void 0;
                        // 2. If the numberFormat.[[minimumSignificantDigits]] and numberFormat.[[maximumSignificantDigits]] are present, then
                        if (hop.call(internal, '[[minimumSignificantDigits]]') && hop.call(internal, '[[maximumSignificantDigits]]')) {
                            // a. Let n be ToRawPrecision(x, numberFormat.[[minimumSignificantDigits]], numberFormat.[[maximumSignificantDigits]]).
                            _n2 = ToRawPrecision(x, internal['[[minimumSignificantDigits]]'], internal['[[maximumSignificantDigits]]']);
                        }
                        // 3. Else,
                        else {
                                // a. Let n be ToRawFixed(x, numberFormat.[[minimumIntegerDigits]], numberFormat.[[minimumFractionDigits]], numberFormat.[[maximumFractionDigits]]).
                                _n2 = ToRawFixed(x, internal['[[minimumIntegerDigits]]'], internal['[[minimumFractionDigits]]'], internal['[[maximumFractionDigits]]']);
                            }
                        // 4. If the value of the numberFormat.[[numberingSystem]] matches one of the values in the "Numbering System" column of Table 2 below, then
                        if (numSys[nums]) {
                            (function () {
                                // a. Let digits be an array whose 10 String valued elements are the UTF-16 string representations of the 10 digits specified in the "Digits" column of the matching row in Table 2.
                                var digits = numSys[nums];
                                // a. Replace each digit in n with the value of digits[digit].
                                _n2 = String(_n2).replace(/\d/g, function (digit) {
                                    return digits[digit];
                                });
                            })();
                        }
                        // 5. Else use an implementation dependent algorithm to map n to the appropriate representation of n in the given numbering system.
                        else _n2 = String(_n2); // ###TODO###

                        var integer = void 0;
                        var fraction = void 0;
                        // 6. Let decimalSepIndex be Call(%StringProto_indexOf%, n, ".", 0).
                        var decimalSepIndex = _n2.indexOf('.', 0);
                        // 7. If decimalSepIndex > 0, then:
                        if (decimalSepIndex > 0) {
                            // a. Let integer be the substring of n from position 0, inclusive, to position decimalSepIndex, exclusive.
                            integer = _n2.substring(0, decimalSepIndex);
                            // a. Let fraction be the substring of n from position decimalSepIndex, exclusive, to the end of n.
                            fraction = _n2.substring(decimalSepIndex + 1, decimalSepIndex.length);
                        }
                        // 8. Else:
                        else {
                                // a. Let integer be n.
                                integer = _n2;
                                // a. Let fraction be undefined.
                                fraction = undefined;
                            }
                        // 9. If the value of the numberFormat.[[useGrouping]] is true,
                        if (internal['[[useGrouping]]'] === true) {
                            // a. Let groupSepSymbol be the ILND String representing the grouping separator.
                            var groupSepSymbol = ild.group;
                            // a. Let groups be a List whose elements are, in left to right order, the substrings defined by ILND set of locations within the integer.
                            var groups = [];
                            // ----> implementation:
                            // Primary group represents the group closest to the decimal
                            var pgSize = data.patterns.primaryGroupSize || 3;
                            // Secondary group is every other group
                            var sgSize = data.patterns.secondaryGroupSize || pgSize;
                            // Group only if necessary
                            if (integer.length > pgSize) {
                                // Index of the primary grouping separator
                                var end = integer.length - pgSize;
                                // Starting index for our loop
                                var idx = end % sgSize;
                                var start = integer.slice(0, idx);
                                if (start.length) arrPush.call(groups, start);
                                // Loop to separate into secondary grouping digits
                                while (idx < end) {
                                    arrPush.call(groups, integer.slice(idx, idx + sgSize));
                                    idx += sgSize;
                                }
                                // Add the primary grouping digits
                                arrPush.call(groups, integer.slice(end));
                            } else {
                                arrPush.call(groups, integer);
                            }
                            // a. Assert: The number of elements in groups List is greater than 0.
                            if (groups.length === 0) throw new Error();
                            // a. Repeat, while groups List is not empty:
                            while (groups.length) {
                                // i. Remove the first element from groups and let integerGroup be the value of that element.
                                var integerGroup = arrShift.call(groups);
                                // ii. Add new part record { [[type]]: "integer", [[value]]: integerGroup } as a new element of the list result.
                                arrPush.call(result, { '[[type]]': 'integer', '[[value]]': integerGroup });
                                // iii. If groups List is not empty, then:
                                if (groups.length) {
                                    // 1. Add new part record { [[type]]: "group", [[value]]: groupSepSymbol } as a new element of the list result.
                                    arrPush.call(result, { '[[type]]': 'group', '[[value]]': groupSepSymbol });
                                }
                            }
                        }
                        // 10. Else,
                        else {
                                // a. Add new part record { [[type]]: "integer", [[value]]: integer } as a new element of the list result.
                                arrPush.call(result, { '[[type]]': 'integer', '[[value]]': integer });
                            }
                        // 11. If fraction is not undefined, then:
                        if (fraction !== undefined) {
                            // a. Let decimalSepSymbol be the ILND String representing the decimal separator.
                            var decimalSepSymbol = ild.decimal;
                            // a. Add new part record { [[type]]: "decimal", [[value]]: decimalSepSymbol } as a new element of the list result.
                            arrPush.call(result, { '[[type]]': 'decimal', '[[value]]': decimalSepSymbol });
                            // a. Add new part record { [[type]]: "fraction", [[value]]: fraction } as a new element of the list result.
                            arrPush.call(result, { '[[type]]': 'fraction', '[[value]]': fraction });
                        }
                    }
        }
        // a. Else if p is equal "plusSign", then:
        else if (p === "plusSign") {
                // i. Let plusSignSymbol be the ILND String representing the plus sign.
                var plusSignSymbol = ild.plusSign;
                // ii. Add new part record { [[type]]: "plusSign", [[value]]: plusSignSymbol } as a new element of the list result.
                arrPush.call(result, { '[[type]]': 'plusSign', '[[value]]': plusSignSymbol });
            }
            // a. Else if p is equal "minusSign", then:
            else if (p === "minusSign") {
                    // i. Let minusSignSymbol be the ILND String representing the minus sign.
                    var minusSignSymbol = ild.minusSign;
                    // ii. Add new part record { [[type]]: "minusSign", [[value]]: minusSignSymbol } as a new element of the list result.
                    arrPush.call(result, { '[[type]]': 'minusSign', '[[value]]': minusSignSymbol });
                }
                // a. Else if p is equal "percentSign" and numberFormat.[[style]] is "percent", then:
                else if (p === "percentSign" && internal['[[style]]'] === "percent") {
                        // i. Let percentSignSymbol be the ILND String representing the percent sign.
                        var percentSignSymbol = ild.percentSign;
                        // ii. Add new part record { [[type]]: "percentSign", [[value]]: percentSignSymbol } as a new element of the list result.
                        arrPush.call(result, { '[[type]]': 'literal', '[[value]]': percentSignSymbol });
                    }
                    // a. Else if p is equal "currency" and numberFormat.[[style]] is "currency", then:
                    else if (p === "currency" && internal['[[style]]'] === "currency") {
                            // i. Let currency be the value of numberFormat.[[currency]].
                            var currency = internal['[[currency]]'];

                            var cd = void 0;

                            // ii. If numberFormat.[[currencyDisplay]] is "code", then
                            if (internal['[[currencyDisplay]]'] === "code") {
                                // 1. Let cd be currency.
                                cd = currency;
                            }
                            // iii. Else if numberFormat.[[currencyDisplay]] is "symbol", then
                            else if (internal['[[currencyDisplay]]'] === "symbol") {
                                    // 1. Let cd be an ILD string representing currency in short form. If the implementation does not have such a representation of currency, use currency itself.
                                    cd = data.currencies[currency] || currency;
                                }
                                // iv. Else if numberFormat.[[currencyDisplay]] is "name", then
                                else if (internal['[[currencyDisplay]]'] === "name") {
                                        // 1. Let cd be an ILD string representing currency in long form. If the implementation does not have such a representation of currency, then use currency itself.
                                        cd = currency;
                                    }
                            // v. Add new part record { [[type]]: "currency", [[value]]: cd } as a new element of the list result.
                            arrPush.call(result, { '[[type]]': 'currency', '[[value]]': cd });
                        }
                        // a. Else,
                        else {
                                // i. Let literal be the substring of pattern from position beginIndex, inclusive, to position endIndex, inclusive.
                                var _literal = pattern.substring(beginIndex, endIndex);
                                // ii. Add new part record { [[type]]: "literal", [[value]]: literal } as a new element of the list result.
                                arrPush.call(result, { '[[type]]': 'literal', '[[value]]': _literal });
                            }
        // a. Set nextIndex to endIndex + 1.
        nextIndex = endIndex + 1;
        // a. Set beginIndex to Call(%StringProto_indexOf%, pattern, "{", nextIndex)
        beginIndex = pattern.indexOf('{', nextIndex);
    }
    // 9. If nextIndex is less than length, then:
    if (nextIndex < length) {
        // a. Let literal be the substring of pattern from position nextIndex, inclusive, to position length, exclusive.
        var _literal2 = pattern.substring(nextIndex, length);
        // a. Add new part record { [[type]]: "literal", [[value]]: literal } as a new element of the list result.
        arrPush.call(result, { '[[type]]': 'literal', '[[value]]': _literal2 });
    }
    // 10. Return result.
    return result;
}

/*
 * @spec[stasm/ecma402/number-format-to-parts/spec/numberformat.html]
 * @clause[sec-formatnumber]
 */
function FormatNumber(numberFormat, x) {
    // 1. Let parts be ? PartitionNumberPattern(numberFormat, x).
    var parts = PartitionNumberPattern(numberFormat, x);
    // 2. Let result be an empty String.
    var result = '';
    // 3. For each part in parts, do:
    for (var i = 0; parts.length > i; i++) {
        var part = parts[i];
        // a. Set result to a String value produced by concatenating result and part.[[value]].
        result += part['[[value]]'];
    }
    // 4. Return result.
    return result;
}

/**
 * When the ToRawPrecision abstract operation is called with arguments x (which
 * must be a finite non-negative number), minPrecision, and maxPrecision (both
 * must be integers between 1 and 21) the following steps are taken:
 */
function ToRawPrecision(x, minPrecision, maxPrecision) {
    // 1. Let p be maxPrecision.
    var p = maxPrecision;

    var m = void 0,
        e = void 0;

    // 2. If x = 0, then
    if (x === 0) {
        // a. Let m be the String consisting of p occurrences of the character "0".
        m = arrJoin.call(Array(p + 1), '0');
        // b. Let e be 0.
        e = 0;
    }
    // 3. Else
    else {
            // a. Let e and n be integers such that 10ᵖ⁻¹ ≤ n < 10ᵖ and for which the
            //    exact mathematical value of n × 10ᵉ⁻ᵖ⁺¹ – x is as close to zero as
            //    possible. If there are two such sets of e and n, pick the e and n for
            //    which n × 10ᵉ⁻ᵖ⁺¹ is larger.
            e = log10Floor(Math.abs(x));

            // Easier to get to m from here
            var f = Math.round(Math.exp(Math.abs(e - p + 1) * Math.LN10));

            // b. Let m be the String consisting of the digits of the decimal
            //    representation of n (in order, with no leading zeroes)
            m = String(Math.round(e - p + 1 < 0 ? x * f : x / f));
        }

    // 4. If e ≥ p, then
    if (e >= p)
        // a. Return the concatenation of m and e-p+1 occurrences of the character "0".
        return m + arrJoin.call(Array(e - p + 1 + 1), '0');

        // 5. If e = p-1, then
    else if (e === p - 1)
            // a. Return m.
            return m;

            // 6. If e ≥ 0, then
        else if (e >= 0)
                // a. Let m be the concatenation of the first e+1 characters of m, the character
                //    ".", and the remaining p–(e+1) characters of m.
                m = m.slice(0, e + 1) + '.' + m.slice(e + 1);

                // 7. If e < 0, then
            else if (e < 0)
                    // a. Let m be the concatenation of the String "0.", –(e+1) occurrences of the
                    //    character "0", and the string m.
                    m = '0.' + arrJoin.call(Array(-(e + 1) + 1), '0') + m;

    // 8. If m contains the character ".", and maxPrecision > minPrecision, then
    if (m.indexOf(".") >= 0 && maxPrecision > minPrecision) {
        // a. Let cut be maxPrecision – minPrecision.
        var cut = maxPrecision - minPrecision;

        // b. Repeat while cut > 0 and the last character of m is "0":
        while (cut > 0 && m.charAt(m.length - 1) === '0') {
            //  i. Remove the last character from m.
            m = m.slice(0, -1);

            //  ii. Decrease cut by 1.
            cut--;
        }

        // c. If the last character of m is ".", then
        if (m.charAt(m.length - 1) === '.')
            //    i. Remove the last character from m.
            m = m.slice(0, -1);
    }
    // 9. Return m.
    return m;
}

/**
 * @spec[tc39/ecma402/master/spec/numberformat.html]
 * @clause[sec-torawfixed]
 * When the ToRawFixed abstract operation is called with arguments x (which must
 * be a finite non-negative number), minInteger (which must be an integer between
 * 1 and 21), minFraction, and maxFraction (which must be integers between 0 and
 * 20) the following steps are taken:
 */
function ToRawFixed(x, minInteger, minFraction, maxFraction) {
    // 1. Let f be maxFraction.
    var f = maxFraction;
    // 2. Let n be an integer for which the exact mathematical value of n ÷ 10f – x is as close to zero as possible. If there are two such n, pick the larger n.
    var n = Math.pow(10, f) * x; // diverging...
    // 3. If n = 0, let m be the String "0". Otherwise, let m be the String consisting of the digits of the decimal representation of n (in order, with no leading zeroes).
    var m = n === 0 ? "0" : n.toFixed(0); // divering...

    {
        // this diversion is needed to take into consideration big numbers, e.g.:
        // 1.2344501e+37 -> 12344501000000000000000000000000000000
        var idx = void 0;
        var exp = (idx = m.indexOf('e')) > -1 ? m.slice(idx + 1) : 0;
        if (exp) {
            m = m.slice(0, idx).replace('.', '');
            m += arrJoin.call(Array(exp - (m.length - 1) + 1), '0');
        }
    }

    var int = void 0;
    // 4. If f ≠ 0, then
    if (f !== 0) {
        // a. Let k be the number of characters in m.
        var k = m.length;
        // a. If k ≤ f, then
        if (k <= f) {
            // i. Let z be the String consisting of f+1–k occurrences of the character "0".
            var z = arrJoin.call(Array(f + 1 - k + 1), '0');
            // ii. Let m be the concatenation of Strings z and m.
            m = z + m;
            // iii. Let k be f+1.
            k = f + 1;
        }
        // a. Let a be the first k–f characters of m, and let b be the remaining f characters of m.
        var a = m.substring(0, k - f),
            b = m.substring(k - f, m.length);
        // a. Let m be the concatenation of the three Strings a, ".", and b.
        m = a + "." + b;
        // a. Let int be the number of characters in a.
        int = a.length;
    }
    // 5. Else, let int be the number of characters in m.
    else int = m.length;
    // 6. Let cut be maxFraction – minFraction.
    var cut = maxFraction - minFraction;
    // 7. Repeat while cut > 0 and the last character of m is "0":
    while (cut > 0 && m.slice(-1) === "0") {
        // a. Remove the last character from m.
        m = m.slice(0, -1);
        // a. Decrease cut by 1.
        cut--;
    }
    // 8. If the last character of m is ".", then
    if (m.slice(-1) === ".") {
        // a. Remove the last character from m.
        m = m.slice(0, -1);
    }
    // 9. If int < minInteger, then
    if (int < minInteger) {
        // a. Let z be the String consisting of minInteger–int occurrences of the character "0".
        var _z = arrJoin.call(Array(minInteger - int + 1), '0');
        // a. Let m be the concatenation of Strings z and m.
        m = _z + m;
    }
    // 10. Return m.
    return m;
}

// Sect 11.3.2 Table 2, Numbering systems
// ======================================
var numSys = {
    arab: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
    arabext: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
    bali: ["᭐", "᭑", "᭒", "᭓", "᭔", "᭕", "᭖", "᭗", "᭘", "᭙"],
    beng: ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"],
    deva: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
    fullwide: ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"],
    gujr: ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"],
    guru: ["੦", "੧", "੨", "੩", "੪", "੫", "੬", "੭", "੮", "੯"],
    hanidec: ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
    khmr: ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"],
    knda: ["೦", "೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯"],
    laoo: ["໐", "໑", "໒", "໓", "໔", "໕", "໖", "໗", "໘", "໙"],
    latn: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    limb: ["᥆", "᥇", "᥈", "᥉", "᥊", "᥋", "᥌", "᥍", "᥎", "᥏"],
    mlym: ["൦", "൧", "൨", "൩", "൪", "൫", "൬", "൭", "൮", "൯"],
    mong: ["᠐", "᠑", "᠒", "᠓", "᠔", "᠕", "᠖", "᠗", "᠘", "᠙"],
    mymr: ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"],
    orya: ["୦", "୧", "୨", "୩", "୪", "୫", "୬", "୭", "୮", "୯"],
    tamldec: ["௦", "௧", "௨", "௩", "௪", "௫", "௬", "௭", "௮", "௯"],
    telu: ["౦", "౧", "౨", "౩", "౪", "౫", "౬", "౭", "౮", "౯"],
    thai: ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"],
    tibt: ["༠", "༡", "༢", "༣", "༤", "༥", "༦", "༧", "༨", "༩"]
};

/**
 * This function provides access to the locale and formatting options computed
 * during initialization of the object.
 *
 * The function returns a new object whose properties and attributes are set as
 * if constructed by an object literal assigning to each of the following
 * properties the value of the corresponding internal property of this
 * NumberFormat object (see 11.4): locale, numberingSystem, style, currency,
 * currencyDisplay, minimumIntegerDigits, minimumFractionDigits,
 * maximumFractionDigits, minimumSignificantDigits, maximumSignificantDigits, and
 * useGrouping. Properties whose corresponding internal properties are not present
 * are not assigned.
 */
/* 11.3.3 */defineProperty(Intl.NumberFormat.prototype, 'resolvedOptions', {
    configurable: true,
    writable: true,
    value: function value() {
        var prop = void 0,
            descs = new Record(),
            props = ['locale', 'numberingSystem', 'style', 'currency', 'currencyDisplay', 'minimumIntegerDigits', 'minimumFractionDigits', 'maximumFractionDigits', 'minimumSignificantDigits', 'maximumSignificantDigits', 'useGrouping'],
            internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);

        // Satisfy test 11.3_b
        if (!internal || !internal['[[initializedNumberFormat]]']) throw new TypeError('`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.');

        for (var i = 0, max = props.length; i < max; i++) {
            if (hop.call(internal, prop = '[[' + props[i] + ']]')) descs[props[i]] = { value: internal[prop], writable: true, configurable: true, enumerable: true };
        }

        return objCreate({}, descs);
    }
});

/* jslint esnext: true */

// Match these datetime components in a CLDR pattern, except those in single quotes
var expDTComponents = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
// trim patterns after transformations
var expPatternTrimmer = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
// Skip over patterns with these datetime components because we don't have data
// to back them up:
// timezone, weekday, amoung others
var unwantedDTCs = /[rqQASjJgwWIQq]/; // xXVO were removed from this list in favor of computing matches with timeZoneName values but printing as empty string

var dtKeys = ["era", "year", "month", "day", "weekday", "quarter"];
var tmKeys = ["hour", "minute", "second", "hour12", "timeZoneName"];

function isDateFormatOnly(obj) {
    for (var i = 0; i < tmKeys.length; i += 1) {
        if (obj.hasOwnProperty(tmKeys[i])) {
            return false;
        }
    }
    return true;
}

function isTimeFormatOnly(obj) {
    for (var i = 0; i < dtKeys.length; i += 1) {
        if (obj.hasOwnProperty(dtKeys[i])) {
            return false;
        }
    }
    return true;
}

function joinDateAndTimeFormats(dateFormatObj, timeFormatObj) {
    var o = { _: {} };
    for (var i = 0; i < dtKeys.length; i += 1) {
        if (dateFormatObj[dtKeys[i]]) {
            o[dtKeys[i]] = dateFormatObj[dtKeys[i]];
        }
        if (dateFormatObj._[dtKeys[i]]) {
            o._[dtKeys[i]] = dateFormatObj._[dtKeys[i]];
        }
    }
    for (var j = 0; j < tmKeys.length; j += 1) {
        if (timeFormatObj[tmKeys[j]]) {
            o[tmKeys[j]] = timeFormatObj[tmKeys[j]];
        }
        if (timeFormatObj._[tmKeys[j]]) {
            o._[tmKeys[j]] = timeFormatObj._[tmKeys[j]];
        }
    }
    return o;
}

function computeFinalPatterns(formatObj) {
    // From http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Format_Patterns:
    //  'In patterns, two single quotes represents a literal single quote, either
    //   inside or outside single quotes. Text within single quotes is not
    //   interpreted in any way (except for two adjacent single quotes).'
    formatObj.pattern12 = formatObj.extendedPattern.replace(/'([^']*)'/g, function ($0, literal) {
        return literal ? literal : "'";
    });

    // pattern 12 is always the default. we can produce the 24 by removing {ampm}
    formatObj.pattern = formatObj.pattern12.replace('{ampm}', '').replace(expPatternTrimmer, '');
    return formatObj;
}

function expDTComponentsMeta($0, formatObj) {
    switch ($0.charAt(0)) {
        // --- Era
        case 'G':
            formatObj.era = ['short', 'short', 'short', 'long', 'narrow'][$0.length - 1];
            return '{era}';

        // --- Year
        case 'y':
        case 'Y':
        case 'u':
        case 'U':
        case 'r':
            formatObj.year = $0.length === 2 ? '2-digit' : 'numeric';
            return '{year}';

        // --- Quarter (not supported in this polyfill)
        case 'Q':
        case 'q':
            formatObj.quarter = ['numeric', '2-digit', 'short', 'long', 'narrow'][$0.length - 1];
            return '{quarter}';

        // --- Month
        case 'M':
        case 'L':
            formatObj.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][$0.length - 1];
            return '{month}';

        // --- Week (not supported in this polyfill)
        case 'w':
            // week of the year
            formatObj.week = $0.length === 2 ? '2-digit' : 'numeric';
            return '{weekday}';
        case 'W':
            // week of the month
            formatObj.week = 'numeric';
            return '{weekday}';

        // --- Day
        case 'd':
            // day of the month
            formatObj.day = $0.length === 2 ? '2-digit' : 'numeric';
            return '{day}';
        case 'D': // day of the year
        case 'F': // day of the week
        case 'g':
            // 1..n: Modified Julian day
            formatObj.day = 'numeric';
            return '{day}';

        // --- Week Day
        case 'E':
            // day of the week
            formatObj.weekday = ['short', 'short', 'short', 'long', 'narrow', 'short'][$0.length - 1];
            return '{weekday}';
        case 'e':
            // local day of the week
            formatObj.weekday = ['numeric', '2-digit', 'short', 'long', 'narrow', 'short'][$0.length - 1];
            return '{weekday}';
        case 'c':
            // stand alone local day of the week
            formatObj.weekday = ['numeric', undefined, 'short', 'long', 'narrow', 'short'][$0.length - 1];
            return '{weekday}';

        // --- Period
        case 'a': // AM, PM
        case 'b': // am, pm, noon, midnight
        case 'B':
            // flexible day periods
            formatObj.hour12 = true;
            return '{ampm}';

        // --- Hour
        case 'h':
        case 'H':
            formatObj.hour = $0.length === 2 ? '2-digit' : 'numeric';
            return '{hour}';
        case 'k':
        case 'K':
            formatObj.hour12 = true; // 12-hour-cycle time formats (using h or K)
            formatObj.hour = $0.length === 2 ? '2-digit' : 'numeric';
            return '{hour}';

        // --- Minute
        case 'm':
            formatObj.minute = $0.length === 2 ? '2-digit' : 'numeric';
            return '{minute}';

        // --- Second
        case 's':
            formatObj.second = $0.length === 2 ? '2-digit' : 'numeric';
            return '{second}';
        case 'S':
        case 'A':
            formatObj.second = 'numeric';
            return '{second}';

        // --- Timezone
        case 'z': // 1..3, 4: specific non-location format
        case 'Z': // 1..3, 4, 5: The ISO8601 varios formats
        case 'O': // 1, 4: miliseconds in day short, long
        case 'v': // 1, 4: generic non-location format
        case 'V': // 1, 2, 3, 4: time zone ID or city
        case 'X': // 1, 2, 3, 4: The ISO8601 varios formats
        case 'x':
            // 1, 2, 3, 4: The ISO8601 varios formats
            // this polyfill only supports much, for now, we are just doing something dummy
            formatObj.timeZoneName = $0.length < 4 ? 'short' : 'long';
            return '{timeZoneName}';
    }
}

/**
 * Converts the CLDR availableFormats into the objects and patterns required by
 * the ECMAScript Internationalization API specification.
 */
function createDateTimeFormat(skeleton, pattern) {
    // we ignore certain patterns that are unsupported to avoid this expensive op.
    if (unwantedDTCs.test(pattern)) return undefined;

    var formatObj = {
        originalPattern: pattern,
        _: {}
    };

    // Replace the pattern string with the one required by the specification, whilst
    // at the same time evaluating it for the subsets and formats
    formatObj.extendedPattern = pattern.replace(expDTComponents, function ($0) {
        // See which symbol we're dealing with
        return expDTComponentsMeta($0, formatObj._);
    });

    // Match the skeleton string with the one required by the specification
    // this implementation is based on the Date Field Symbol Table:
    // http://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
    // Note: we are adding extra data to the formatObject even though this polyfill
    //       might not support it.
    skeleton.replace(expDTComponents, function ($0) {
        // See which symbol we're dealing with
        return expDTComponentsMeta($0, formatObj);
    });

    return computeFinalPatterns(formatObj);
}

/**
 * Processes DateTime formats from CLDR to an easier-to-parse format.
 * the result of this operation should be cached the first time a particular
 * calendar is analyzed.
 *
 * The specification requires we support at least the following subsets of
 * date/time components:
 *
 *   - 'weekday', 'year', 'month', 'day', 'hour', 'minute', 'second'
 *   - 'weekday', 'year', 'month', 'day'
 *   - 'year', 'month', 'day'
 *   - 'year', 'month'
 *   - 'month', 'day'
 *   - 'hour', 'minute', 'second'
 *   - 'hour', 'minute'
 *
 * We need to cherry pick at least these subsets from the CLDR data and convert
 * them into the pattern objects used in the ECMA-402 API.
 */
function createDateTimeFormats(formats) {
    var availableFormats = formats.availableFormats;
    var timeFormats = formats.timeFormats;
    var dateFormats = formats.dateFormats;
    var result = [];
    var skeleton = void 0,
        pattern = void 0,
        computed = void 0,
        i = void 0,
        j = void 0;
    var timeRelatedFormats = [];
    var dateRelatedFormats = [];

    // Map available (custom) formats into a pattern for createDateTimeFormats
    for (skeleton in availableFormats) {
        if (availableFormats.hasOwnProperty(skeleton)) {
            pattern = availableFormats[skeleton];
            computed = createDateTimeFormat(skeleton, pattern);
            if (computed) {
                result.push(computed);
                // in some cases, the format is only displaying date specific props
                // or time specific props, in which case we need to also produce the
                // combined formats.
                if (isDateFormatOnly(computed)) {
                    dateRelatedFormats.push(computed);
                } else if (isTimeFormatOnly(computed)) {
                    timeRelatedFormats.push(computed);
                }
            }
        }
    }

    // Map time formats into a pattern for createDateTimeFormats
    for (skeleton in timeFormats) {
        if (timeFormats.hasOwnProperty(skeleton)) {
            pattern = timeFormats[skeleton];
            computed = createDateTimeFormat(skeleton, pattern);
            if (computed) {
                result.push(computed);
                timeRelatedFormats.push(computed);
            }
        }
    }

    // Map date formats into a pattern for createDateTimeFormats
    for (skeleton in dateFormats) {
        if (dateFormats.hasOwnProperty(skeleton)) {
            pattern = dateFormats[skeleton];
            computed = createDateTimeFormat(skeleton, pattern);
            if (computed) {
                result.push(computed);
                dateRelatedFormats.push(computed);
            }
        }
    }

    // combine custom time and custom date formats when they are orthogonals to complete the
    // formats supported by CLDR.
    // This Algo is based on section "Missing Skeleton Fields" from:
    // http://unicode.org/reports/tr35/tr35-dates.html#availableFormats_appendItems
    for (i = 0; i < timeRelatedFormats.length; i += 1) {
        for (j = 0; j < dateRelatedFormats.length; j += 1) {
            if (dateRelatedFormats[j].month === 'long') {
                pattern = dateRelatedFormats[j].weekday ? formats.full : formats.long;
            } else if (dateRelatedFormats[j].month === 'short') {
                pattern = formats.medium;
            } else {
                pattern = formats.short;
            }
            computed = joinDateAndTimeFormats(dateRelatedFormats[j], timeRelatedFormats[i]);
            computed.originalPattern = pattern;
            computed.extendedPattern = pattern.replace('{0}', timeRelatedFormats[i].extendedPattern).replace('{1}', dateRelatedFormats[j].extendedPattern).replace(/^[,\s]+|[,\s]+$/gi, '');
            result.push(computeFinalPatterns(computed));
        }
    }

    return result;
}

// this represents the exceptions of the rule that are not covered by CLDR availableFormats
// for single property configurations, they play no role when using multiple properties, and
// those that are not in this table, are not exceptions or are not covered by the data we
// provide.
var validSyntheticProps = {
    second: {
        numeric: 's',
        '2-digit': 'ss'
    },
    minute: {
        numeric: 'm',
        '2-digit': 'mm'
    },
    year: {
        numeric: 'y',
        '2-digit': 'yy'
    },
    day: {
        numeric: 'd',
        '2-digit': 'dd'
    },
    month: {
        numeric: 'L',
        '2-digit': 'LL',
        narrow: 'LLLLL',
        short: 'LLL',
        long: 'LLLL'
    },
    weekday: {
        narrow: 'ccccc',
        short: 'ccc',
        long: 'cccc'
    }
};

function generateSyntheticFormat(propName, propValue) {
    if (validSyntheticProps[propName] && validSyntheticProps[propName][propValue]) {
        var _ref2;

        return _ref2 = {
            originalPattern: validSyntheticProps[propName][propValue],
            _: defineProperty$1({}, propName, propValue),
            extendedPattern: "{" + propName + "}"
        }, defineProperty$1(_ref2, propName, propValue), defineProperty$1(_ref2, "pattern12", "{" + propName + "}"), defineProperty$1(_ref2, "pattern", "{" + propName + "}"), _ref2;
    }
}

// An object map of date component keys, saves using a regex later
var dateWidths = objCreate(null, { narrow: {}, short: {}, long: {} });

/**
 * Returns a string for a date component, resolved using multiple inheritance as specified
 * as specified in the Unicode Technical Standard 35.
 */
function resolveDateString(data, ca, component, width, key) {
    // From http://www.unicode.org/reports/tr35/tr35.html#Multiple_Inheritance:
    // 'In clearly specified instances, resources may inherit from within the same locale.
    //  For example, ... the Buddhist calendar inherits from the Gregorian calendar.'
    var obj = data[ca] && data[ca][component] ? data[ca][component] : data.gregory[component],


    // "sideways" inheritance resolves strings when a key doesn't exist
    alts = {
        narrow: ['short', 'long'],
        short: ['long', 'narrow'],
        long: ['short', 'narrow']
    },


    //
    resolved = hop.call(obj, width) ? obj[width] : hop.call(obj, alts[width][0]) ? obj[alts[width][0]] : obj[alts[width][1]];

    // `key` wouldn't be specified for components 'dayPeriods'
    return key !== null ? resolved[key] : resolved;
}

// Define the DateTimeFormat constructor internally so it cannot be tainted
function DateTimeFormatConstructor() {
    var locales = arguments[0];
    var options = arguments[1];

    if (!this || this === Intl) {
        return new Intl.DateTimeFormat(locales, options);
    }
    return InitializeDateTimeFormat(toObject(this), locales, options);
}

defineProperty(Intl, 'DateTimeFormat', {
    configurable: true,
    writable: true,
    value: DateTimeFormatConstructor
});

// Must explicitly set prototypes as unwritable
defineProperty(DateTimeFormatConstructor, 'prototype', {
    writable: false
});

/**
 * The abstract operation InitializeDateTimeFormat accepts the arguments dateTimeFormat
 * (which must be an object), locales, and options. It initializes dateTimeFormat as a
 * DateTimeFormat object.
 */
function /* 12.1.1.1 */InitializeDateTimeFormat(dateTimeFormat, locales, options) {
    // This will be a internal properties object if we're not already initialized
    var internal = getInternalProperties(dateTimeFormat);

    // Create an object whose props can be used to restore the values of RegExp props
    var regexpRestore = createRegExpRestore();

    // 1. If dateTimeFormat has an [[initializedIntlObject]] internal property with
    //    value true, throw a TypeError exception.
    if (internal['[[initializedIntlObject]]'] === true) throw new TypeError('`this` object has already been initialized as an Intl object');

    // Need this to access the `internal` object
    defineProperty(dateTimeFormat, '__getInternalProperties', {
        value: function value() {
            // NOTE: Non-standard, for internal use only
            if (arguments[0] === secret) return internal;
        }
    });

    // 2. Set the [[initializedIntlObject]] internal property of numberFormat to true.
    internal['[[initializedIntlObject]]'] = true;

    // 3. Let requestedLocales be the result of calling the CanonicalizeLocaleList
    //    abstract operation (defined in 9.2.1) with argument locales.
    var requestedLocales = CanonicalizeLocaleList(locales);

    // 4. Let options be the result of calling the ToDateTimeOptions abstract
    //    operation (defined below) with arguments options, "any", and "date".
    options = ToDateTimeOptions(options, 'any', 'date');

    // 5. Let opt be a new Record.
    var opt = new Record();

    // 6. Let matcher be the result of calling the GetOption abstract operation
    //    (defined in 9.2.9) with arguments options, "localeMatcher", "string", a List
    //    containing the two String values "lookup" and "best fit", and "best fit".
    var matcher = GetOption(options, 'localeMatcher', 'string', new List('lookup', 'best fit'), 'best fit');

    // 7. Set opt.[[localeMatcher]] to matcher.
    opt['[[localeMatcher]]'] = matcher;

    // 8. Let DateTimeFormat be the standard built-in object that is the initial
    //    value of Intl.DateTimeFormat.
    var DateTimeFormat = internals.DateTimeFormat; // This is what we *really* need

    // 9. Let localeData be the value of the [[localeData]] internal property of
    //    DateTimeFormat.
    var localeData = DateTimeFormat['[[localeData]]'];

    // 10. Let r be the result of calling the ResolveLocale abstract operation
    //     (defined in 9.2.5) with the [[availableLocales]] internal property of
    //      DateTimeFormat, requestedLocales, opt, the [[relevantExtensionKeys]]
    //      internal property of DateTimeFormat, and localeData.
    var r = ResolveLocale(DateTimeFormat['[[availableLocales]]'], requestedLocales, opt, DateTimeFormat['[[relevantExtensionKeys]]'], localeData);

    // 11. Set the [[locale]] internal property of dateTimeFormat to the value of
    //     r.[[locale]].
    internal['[[locale]]'] = r['[[locale]]'];

    // 12. Set the [[calendar]] internal property of dateTimeFormat to the value of
    //     r.[[ca]].
    internal['[[calendar]]'] = r['[[ca]]'];

    // 13. Set the [[numberingSystem]] internal property of dateTimeFormat to the value of
    //     r.[[nu]].
    internal['[[numberingSystem]]'] = r['[[nu]]'];

    // The specification doesn't tell us to do this, but it's helpful later on
    internal['[[dataLocale]]'] = r['[[dataLocale]]'];

    // 14. Let dataLocale be the value of r.[[dataLocale]].
    var dataLocale = r['[[dataLocale]]'];

    // 15. Let tz be the result of calling the [[Get]] internal method of options with
    //     argument "timeZone".
    var tz = options.timeZone;

    // 16. If tz is not undefined, then
    if (tz !== undefined) {
        // a. Let tz be ToString(tz).
        // b. Convert tz to upper case as described in 6.1.
        //    NOTE: If an implementation accepts additional time zone values, as permitted
        //          under certain conditions by the Conformance clause, different casing
        //          rules apply.
        tz = toLatinUpperCase(tz);

        // c. If tz is not "UTC", then throw a RangeError exception.
        // ###TODO: accept more time zones###
        if (tz !== 'UTC') throw new RangeError('timeZone is not supported.');
    }

    // 17. Set the [[timeZone]] internal property of dateTimeFormat to tz.
    internal['[[timeZone]]'] = tz;

    // 18. Let opt be a new Record.
    opt = new Record();

    // 19. For each row of Table 3, except the header row, do:
    for (var prop in dateTimeComponents) {
        if (!hop.call(dateTimeComponents, prop)) continue;

        // 20. Let prop be the name given in the Property column of the row.
        // 21. Let value be the result of calling the GetOption abstract operation,
        //     passing as argument options, the name given in the Property column of the
        //     row, "string", a List containing the strings given in the Values column of
        //     the row, and undefined.
        var value = GetOption(options, prop, 'string', dateTimeComponents[prop]);

        // 22. Set opt.[[<prop>]] to value.
        opt['[[' + prop + ']]'] = value;
    }

    // Assigned a value below
    var bestFormat = void 0;

    // 23. Let dataLocaleData be the result of calling the [[Get]] internal method of
    //     localeData with argument dataLocale.
    var dataLocaleData = localeData[dataLocale];

    // 24. Let formats be the result of calling the [[Get]] internal method of
    //     dataLocaleData with argument "formats".
    //     Note: we process the CLDR formats into the spec'd structure
    var formats = ToDateTimeFormats(dataLocaleData.formats);

    // 25. Let matcher be the result of calling the GetOption abstract operation with
    //     arguments options, "formatMatcher", "string", a List containing the two String
    //     values "basic" and "best fit", and "best fit".
    matcher = GetOption(options, 'formatMatcher', 'string', new List('basic', 'best fit'), 'best fit');

    // Optimization: caching the processed formats as a one time operation by
    // replacing the initial structure from localeData
    dataLocaleData.formats = formats;

    // 26. If matcher is "basic", then
    if (matcher === 'basic') {
        // 27. Let bestFormat be the result of calling the BasicFormatMatcher abstract
        //     operation (defined below) with opt and formats.
        bestFormat = BasicFormatMatcher(opt, formats);

        // 28. Else
    } else {
        {
            // diverging
            var _hr = GetOption(options, 'hour12', 'boolean' /*, undefined, undefined*/);
            opt.hour12 = _hr === undefined ? dataLocaleData.hour12 : _hr;
        }
        // 29. Let bestFormat be the result of calling the BestFitFormatMatcher
        //     abstract operation (defined below) with opt and formats.
        bestFormat = BestFitFormatMatcher(opt, formats);
    }

    // 30. For each row in Table 3, except the header row, do
    for (var _prop in dateTimeComponents) {
        if (!hop.call(dateTimeComponents, _prop)) continue;

        // a. Let prop be the name given in the Property column of the row.
        // b. Let pDesc be the result of calling the [[GetOwnProperty]] internal method of
        //    bestFormat with argument prop.
        // c. If pDesc is not undefined, then
        if (hop.call(bestFormat, _prop)) {
            // i. Let p be the result of calling the [[Get]] internal method of bestFormat
            //    with argument prop.
            var p = bestFormat[_prop];
            {
                // diverging
                p = bestFormat._ && hop.call(bestFormat._, _prop) ? bestFormat._[_prop] : p;
            }

            // ii. Set the [[<prop>]] internal property of dateTimeFormat to p.
            internal['[[' + _prop + ']]'] = p;
        }
    }

    var pattern = void 0; // Assigned a value below

    // 31. Let hr12 be the result of calling the GetOption abstract operation with
    //     arguments options, "hour12", "boolean", undefined, and undefined.
    var hr12 = GetOption(options, 'hour12', 'boolean' /*, undefined, undefined*/);

    // 32. If dateTimeFormat has an internal property [[hour]], then
    if (internal['[[hour]]']) {
        // a. If hr12 is undefined, then let hr12 be the result of calling the [[Get]]
        //    internal method of dataLocaleData with argument "hour12".
        hr12 = hr12 === undefined ? dataLocaleData.hour12 : hr12;

        // b. Set the [[hour12]] internal property of dateTimeFormat to hr12.
        internal['[[hour12]]'] = hr12;

        // c. If hr12 is true, then
        if (hr12 === true) {
            // i. Let hourNo0 be the result of calling the [[Get]] internal method of
            //    dataLocaleData with argument "hourNo0".
            var hourNo0 = dataLocaleData.hourNo0;

            // ii. Set the [[hourNo0]] internal property of dateTimeFormat to hourNo0.
            internal['[[hourNo0]]'] = hourNo0;

            // iii. Let pattern be the result of calling the [[Get]] internal method of
            //      bestFormat with argument "pattern12".
            pattern = bestFormat.pattern12;
        }

        // d. Else
        else
            // i. Let pattern be the result of calling the [[Get]] internal method of
            //    bestFormat with argument "pattern".
            pattern = bestFormat.pattern;
    }

    // 33. Else
    else
        // a. Let pattern be the result of calling the [[Get]] internal method of
        //    bestFormat with argument "pattern".
        pattern = bestFormat.pattern;

    // 34. Set the [[pattern]] internal property of dateTimeFormat to pattern.
    internal['[[pattern]]'] = pattern;

    // 35. Set the [[boundFormat]] internal property of dateTimeFormat to undefined.
    internal['[[boundFormat]]'] = undefined;

    // 36. Set the [[initializedDateTimeFormat]] internal property of dateTimeFormat to
    //     true.
    internal['[[initializedDateTimeFormat]]'] = true;

    // In ES3, we need to pre-bind the format() function
    if (es3) dateTimeFormat.format = GetFormatDateTime.call(dateTimeFormat);

    // Restore the RegExp properties
    regexpRestore();

    // Return the newly initialised object
    return dateTimeFormat;
}

/**
 * Several DateTimeFormat algorithms use values from the following table, which provides
 * property names and allowable values for the components of date and time formats:
 */
var dateTimeComponents = {
    weekday: ["narrow", "short", "long"],
    era: ["narrow", "short", "long"],
    year: ["2-digit", "numeric"],
    month: ["2-digit", "numeric", "narrow", "short", "long"],
    day: ["2-digit", "numeric"],
    hour: ["2-digit", "numeric"],
    minute: ["2-digit", "numeric"],
    second: ["2-digit", "numeric"],
    timeZoneName: ["short", "long"]
};

/**
 * When the ToDateTimeOptions abstract operation is called with arguments options,
 * required, and defaults, the following steps are taken:
 */
function ToDateTimeFormats(formats) {
    if (Object.prototype.toString.call(formats) === '[object Array]') {
        return formats;
    }
    return createDateTimeFormats(formats);
}

/**
 * When the ToDateTimeOptions abstract operation is called with arguments options,
 * required, and defaults, the following steps are taken:
 */
function ToDateTimeOptions(options, required, defaults) {
    // 1. If options is undefined, then let options be null, else let options be
    //    ToObject(options).
    if (options === undefined) options = null;else {
        // (#12) options needs to be a Record, but it also needs to inherit properties
        var opt2 = toObject(options);
        options = new Record();

        for (var k in opt2) {
            options[k] = opt2[k];
        }
    }

    // 2. Let create be the standard built-in function object defined in ES5, 15.2.3.5.
    var create = objCreate;

    // 3. Let options be the result of calling the [[Call]] internal method of create with
    //    undefined as the this value and an argument list containing the single item
    //    options.
    options = create(options);

    // 4. Let needDefaults be true.
    var needDefaults = true;

    // 5. If required is "date" or "any", then
    if (required === 'date' || required === 'any') {
        // a. For each of the property names "weekday", "year", "month", "day":
        // i. If the result of calling the [[Get]] internal method of options with the
        //    property name is not undefined, then let needDefaults be false.
        if (options.weekday !== undefined || options.year !== undefined || options.month !== undefined || options.day !== undefined) needDefaults = false;
    }

    // 6. If required is "time" or "any", then
    if (required === 'time' || required === 'any') {
        // a. For each of the property names "hour", "minute", "second":
        // i. If the result of calling the [[Get]] internal method of options with the
        //    property name is not undefined, then let needDefaults be false.
        if (options.hour !== undefined || options.minute !== undefined || options.second !== undefined) needDefaults = false;
    }

    // 7. If needDefaults is true and defaults is either "date" or "all", then
    if (needDefaults && (defaults === 'date' || defaults === 'all'))
        // a. For each of the property names "year", "month", "day":
        // i. Call the [[DefineOwnProperty]] internal method of options with the
        //    property name, Property Descriptor {[[Value]]: "numeric", [[Writable]]:
        //    true, [[Enumerable]]: true, [[Configurable]]: true}, and false.
        options.year = options.month = options.day = 'numeric';

    // 8. If needDefaults is true and defaults is either "time" or "all", then
    if (needDefaults && (defaults === 'time' || defaults === 'all'))
        // a. For each of the property names "hour", "minute", "second":
        // i. Call the [[DefineOwnProperty]] internal method of options with the
        //    property name, Property Descriptor {[[Value]]: "numeric", [[Writable]]:
        //    true, [[Enumerable]]: true, [[Configurable]]: true}, and false.
        options.hour = options.minute = options.second = 'numeric';

    // 9. Return options.
    return options;
}

/**
 * When the BasicFormatMatcher abstract operation is called with two arguments options and
 * formats, the following steps are taken:
 */
function BasicFormatMatcher(options, formats) {
    // 1. Let removalPenalty be 120.
    var removalPenalty = 120;

    // 2. Let additionPenalty be 20.
    var additionPenalty = 20;

    // 3. Let longLessPenalty be 8.
    var longLessPenalty = 8;

    // 4. Let longMorePenalty be 6.
    var longMorePenalty = 6;

    // 5. Let shortLessPenalty be 6.
    var shortLessPenalty = 6;

    // 6. Let shortMorePenalty be 3.
    var shortMorePenalty = 3;

    // 7. Let bestScore be -Infinity.
    var bestScore = -Infinity;

    // 8. Let bestFormat be undefined.
    var bestFormat = void 0;

    // 9. Let i be 0.
    var i = 0;

    // 10. Assert: formats is an Array object.

    // 11. Let len be the result of calling the [[Get]] internal method of formats with argument "length".
    var len = formats.length;

    // 12. Repeat while i < len:
    while (i < len) {
        // a. Let format be the result of calling the [[Get]] internal method of formats with argument ToString(i).
        var format = formats[i];

        // b. Let score be 0.
        var score = 0;

        // c. For each property shown in Table 3:
        for (var property in dateTimeComponents) {
            if (!hop.call(dateTimeComponents, property)) continue;

            // i. Let optionsProp be options.[[<property>]].
            var optionsProp = options['[[' + property + ']]'];

            // ii. Let formatPropDesc be the result of calling the [[GetOwnProperty]] internal method of format
            //     with argument property.
            // iii. If formatPropDesc is not undefined, then
            //     1. Let formatProp be the result of calling the [[Get]] internal method of format with argument property.
            var formatProp = hop.call(format, property) ? format[property] : undefined;

            // iv. If optionsProp is undefined and formatProp is not undefined, then decrease score by
            //     additionPenalty.
            if (optionsProp === undefined && formatProp !== undefined) score -= additionPenalty;

            // v. Else if optionsProp is not undefined and formatProp is undefined, then decrease score by
            //    removalPenalty.
            else if (optionsProp !== undefined && formatProp === undefined) score -= removalPenalty;

                // vi. Else
                else {
                        // 1. Let values be the array ["2-digit", "numeric", "narrow", "short",
                        //    "long"].
                        var values = ['2-digit', 'numeric', 'narrow', 'short', 'long'];

                        // 2. Let optionsPropIndex be the index of optionsProp within values.
                        var optionsPropIndex = arrIndexOf.call(values, optionsProp);

                        // 3. Let formatPropIndex be the index of formatProp within values.
                        var formatPropIndex = arrIndexOf.call(values, formatProp);

                        // 4. Let delta be max(min(formatPropIndex - optionsPropIndex, 2), -2).
                        var delta = Math.max(Math.min(formatPropIndex - optionsPropIndex, 2), -2);

                        // 5. If delta = 2, decrease score by longMorePenalty.
                        if (delta === 2) score -= longMorePenalty;

                        // 6. Else if delta = 1, decrease score by shortMorePenalty.
                        else if (delta === 1) score -= shortMorePenalty;

                            // 7. Else if delta = -1, decrease score by shortLessPenalty.
                            else if (delta === -1) score -= shortLessPenalty;

                                // 8. Else if delta = -2, decrease score by longLessPenalty.
                                else if (delta === -2) score -= longLessPenalty;
                    }
        }

        // d. If score > bestScore, then
        if (score > bestScore) {
            // i. Let bestScore be score.
            bestScore = score;

            // ii. Let bestFormat be format.
            bestFormat = format;
        }

        // e. Increase i by 1.
        i++;
    }

    // 13. Return bestFormat.
    return bestFormat;
}

/**
 * When the BestFitFormatMatcher abstract operation is called with two arguments options
 * and formats, it performs implementation dependent steps, which should return a set of
 * component representations that a typical user of the selected locale would perceive as
 * at least as good as the one returned by BasicFormatMatcher.
 *
 * This polyfill defines the algorithm to be the same as BasicFormatMatcher,
 * with the addition of bonus points awarded where the requested format is of
 * the same data type as the potentially matching format.
 *
 * This algo relies on the concept of closest distance matching described here:
 * http://unicode.org/reports/tr35/tr35-dates.html#Matching_Skeletons
 * Typically a “best match” is found using a closest distance match, such as:
 *
 * Symbols requesting a best choice for the locale are replaced.
 *      j → one of {H, k, h, K}; C → one of {a, b, B}
 * -> Covered by cldr.js matching process
 *
 * For fields with symbols representing the same type (year, month, day, etc):
 *     Most symbols have a small distance from each other.
 *         M ≅ L; E ≅ c; a ≅ b ≅ B; H ≅ k ≅ h ≅ K; ...
 *     -> Covered by cldr.js matching process
 *
 *     Width differences among fields, other than those marking text vs numeric, are given small distance from each other.
 *         MMM ≅ MMMM
 *         MM ≅ M
 *     Numeric and text fields are given a larger distance from each other.
 *         MMM ≈ MM
 *     Symbols representing substantial differences (week of year vs week of month) are given much larger a distances from each other.
 *         d ≋ D; ...
 *     Missing or extra fields cause a match to fail. (But see Missing Skeleton Fields).
 *
 *
 * For example,
 *
 *     { month: 'numeric', day: 'numeric' }
 *
 * should match
 *
 *     { month: '2-digit', day: '2-digit' }
 *
 * rather than
 *
 *     { month: 'short', day: 'numeric' }
 *
 * This makes sense because a user requesting a formatted date with numeric parts would
 * not expect to see the returned format containing narrow, short or long part names
 */
function BestFitFormatMatcher(options, formats) {
    /** Diverging: this block implements the hack for single property configuration, eg.:
     *
     *      `new Intl.DateTimeFormat('en', {day: 'numeric'})`
     *
     * should produce a single digit with the day of the month. This is needed because
     * CLDR `availableFormats` data structure doesn't cover these cases.
     */
    {
        var optionsPropNames = [];
        for (var property in dateTimeComponents) {
            if (!hop.call(dateTimeComponents, property)) continue;

            if (options['[[' + property + ']]'] !== undefined) {
                optionsPropNames.push(property);
            }
        }
        if (optionsPropNames.length === 1) {
            var _bestFormat = generateSyntheticFormat(optionsPropNames[0], options['[[' + optionsPropNames[0] + ']]']);
            if (_bestFormat) {
                return _bestFormat;
            }
        }
    }

    // 1. Let removalPenalty be 120.
    var removalPenalty = 120;

    // 2. Let additionPenalty be 20.
    var additionPenalty = 20;

    // 3. Let longLessPenalty be 8.
    var longLessPenalty = 8;

    // 4. Let longMorePenalty be 6.
    var longMorePenalty = 6;

    // 5. Let shortLessPenalty be 6.
    var shortLessPenalty = 6;

    // 6. Let shortMorePenalty be 3.
    var shortMorePenalty = 3;

    var patternPenalty = 2;

    var hour12Penalty = 1;

    // 7. Let bestScore be -Infinity.
    var bestScore = -Infinity;

    // 8. Let bestFormat be undefined.
    var bestFormat = void 0;

    // 9. Let i be 0.
    var i = 0;

    // 10. Assert: formats is an Array object.

    // 11. Let len be the result of calling the [[Get]] internal method of formats with argument "length".
    var len = formats.length;

    // 12. Repeat while i < len:
    while (i < len) {
        // a. Let format be the result of calling the [[Get]] internal method of formats with argument ToString(i).
        var format = formats[i];

        // b. Let score be 0.
        var score = 0;

        // c. For each property shown in Table 3:
        for (var _property in dateTimeComponents) {
            if (!hop.call(dateTimeComponents, _property)) continue;

            // i. Let optionsProp be options.[[<property>]].
            var optionsProp = options['[[' + _property + ']]'];

            // ii. Let formatPropDesc be the result of calling the [[GetOwnProperty]] internal method of format
            //     with argument property.
            // iii. If formatPropDesc is not undefined, then
            //     1. Let formatProp be the result of calling the [[Get]] internal method of format with argument property.
            var formatProp = hop.call(format, _property) ? format[_property] : undefined;

            // Diverging: using the default properties produced by the pattern/skeleton
            // to match it with user options, and apply a penalty
            var patternProp = hop.call(format._, _property) ? format._[_property] : undefined;
            if (optionsProp !== patternProp) {
                score -= patternPenalty;
            }

            // iv. If optionsProp is undefined and formatProp is not undefined, then decrease score by
            //     additionPenalty.
            if (optionsProp === undefined && formatProp !== undefined) score -= additionPenalty;

            // v. Else if optionsProp is not undefined and formatProp is undefined, then decrease score by
            //    removalPenalty.
            else if (optionsProp !== undefined && formatProp === undefined) score -= removalPenalty;

                // vi. Else
                else {
                        // 1. Let values be the array ["2-digit", "numeric", "narrow", "short",
                        //    "long"].
                        var values = ['2-digit', 'numeric', 'narrow', 'short', 'long'];

                        // 2. Let optionsPropIndex be the index of optionsProp within values.
                        var optionsPropIndex = arrIndexOf.call(values, optionsProp);

                        // 3. Let formatPropIndex be the index of formatProp within values.
                        var formatPropIndex = arrIndexOf.call(values, formatProp);

                        // 4. Let delta be max(min(formatPropIndex - optionsPropIndex, 2), -2).
                        var delta = Math.max(Math.min(formatPropIndex - optionsPropIndex, 2), -2);

                        {
                            // diverging from spec
                            // When the bestFit argument is true, subtract additional penalty where data types are not the same
                            if (formatPropIndex <= 1 && optionsPropIndex >= 2 || formatPropIndex >= 2 && optionsPropIndex <= 1) {
                                // 5. If delta = 2, decrease score by longMorePenalty.
                                if (delta > 0) score -= longMorePenalty;else if (delta < 0) score -= longLessPenalty;
                            } else {
                                // 5. If delta = 2, decrease score by longMorePenalty.
                                if (delta > 1) score -= shortMorePenalty;else if (delta < -1) score -= shortLessPenalty;
                            }
                        }
                    }
        }

        {
            // diverging to also take into consideration differences between 12 or 24 hours
            // which is special for the best fit only.
            if (format._.hour12 !== options.hour12) {
                score -= hour12Penalty;
            }
        }

        // d. If score > bestScore, then
        if (score > bestScore) {
            // i. Let bestScore be score.
            bestScore = score;
            // ii. Let bestFormat be format.
            bestFormat = format;
        }

        // e. Increase i by 1.
        i++;
    }

    // 13. Return bestFormat.
    return bestFormat;
}

/* 12.2.3 */internals.DateTimeFormat = {
    '[[availableLocales]]': [],
    '[[relevantExtensionKeys]]': ['ca', 'nu'],
    '[[localeData]]': {}
};

/**
 * When the supportedLocalesOf method of Intl.DateTimeFormat is called, the
 * following steps are taken:
 */
/* 12.2.2 */
defineProperty(Intl.DateTimeFormat, 'supportedLocalesOf', {
    configurable: true,
    writable: true,
    value: fnBind.call(function (locales) {
        // Bound functions only have the `this` value altered if being used as a constructor,
        // this lets us imitate a native function that has no constructor
        if (!hop.call(this, '[[availableLocales]]')) throw new TypeError('supportedLocalesOf() is not a constructor');

        // Create an object whose props can be used to restore the values of RegExp props
        var regexpRestore = createRegExpRestore(),


        // 1. If options is not provided, then let options be undefined.
        options = arguments[1],


        // 2. Let availableLocales be the value of the [[availableLocales]] internal
        //    property of the standard built-in object that is the initial value of
        //    Intl.NumberFormat.

        availableLocales = this['[[availableLocales]]'],


        // 3. Let requestedLocales be the result of calling the CanonicalizeLocaleList
        //    abstract operation (defined in 9.2.1) with argument locales.
        requestedLocales = CanonicalizeLocaleList(locales);

        // Restore the RegExp properties
        regexpRestore();

        // 4. Return the result of calling the SupportedLocales abstract operation
        //    (defined in 9.2.8) with arguments availableLocales, requestedLocales,
        //    and options.
        return SupportedLocales(availableLocales, requestedLocales, options);
    }, internals.NumberFormat)
});

/**
 * This named accessor property returns a function that formats a number
 * according to the effective locale and the formatting options of this
 * DateTimeFormat object.
 */
/* 12.3.2 */defineProperty(Intl.DateTimeFormat.prototype, 'format', {
    configurable: true,
    get: GetFormatDateTime
});

function GetFormatDateTime() {
    var internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);

    // Satisfy test 12.3_b
    if (!internal || !internal['[[initializedDateTimeFormat]]']) throw new TypeError('`this` value for format() is not an initialized Intl.DateTimeFormat object.');

    // The value of the [[Get]] attribute is a function that takes the following
    // steps:

    // 1. If the [[boundFormat]] internal property of this DateTimeFormat object
    //    is undefined, then:
    if (internal['[[boundFormat]]'] === undefined) {
        // a. Let F be a Function object, with internal properties set as
        //    specified for built-in functions in ES5, 15, or successor, and the
        //    length property set to 0, that takes the argument date and
        //    performs the following steps:
        var F = function F() {
            var date = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

            //   i. If date is not provided or is undefined, then let x be the
            //      result as if by the expression Date.now() where Date.now is
            //      the standard built-in function defined in ES5, 15.9.4.4.
            //  ii. Else let x be ToNumber(date).
            // iii. Return the result of calling the FormatDateTime abstract
            //      operation (defined below) with arguments this and x.
            var x = date === undefined ? Date.now() : toNumber(date);
            return FormatDateTime(this, x);
        };
        // b. Let bind be the standard built-in function object defined in ES5,
        //    15.3.4.5.
        // c. Let bf be the result of calling the [[Call]] internal method of
        //    bind with F as the this value and an argument list containing
        //    the single item this.
        var bf = fnBind.call(F, this);
        // d. Set the [[boundFormat]] internal property of this NumberFormat
        //    object to bf.
        internal['[[boundFormat]]'] = bf;
    }
    // Return the value of the [[boundFormat]] internal property of this
    // NumberFormat object.
    return internal['[[boundFormat]]'];
}

function formatToParts$1() {
    var date = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

    var internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);

    if (!internal || !internal['[[initializedDateTimeFormat]]']) throw new TypeError('`this` value for formatToParts() is not an initialized Intl.DateTimeFormat object.');

    var x = date === undefined ? Date.now() : toNumber(date);
    return FormatToPartsDateTime(this, x);
}

Object.defineProperty(Intl.DateTimeFormat.prototype, 'formatToParts', {
    enumerable: false,
    writable: true,
    configurable: true,
    value: formatToParts$1
});

function CreateDateTimeParts(dateTimeFormat, x) {
    // 1. If x is not a finite Number, then throw a RangeError exception.
    if (!isFinite(x)) throw new RangeError('Invalid valid date passed to format');

    var internal = dateTimeFormat.__getInternalProperties(secret);

    // Creating restore point for properties on the RegExp object... please wait
    /* let regexpRestore = */createRegExpRestore(); // ###TODO: review this

    // 2. Let locale be the value of the [[locale]] internal property of dateTimeFormat.
    var locale = internal['[[locale]]'];

    // 3. Let nf be the result of creating a new NumberFormat object as if by the
    // expression new Intl.NumberFormat([locale], {useGrouping: false}) where
    // Intl.NumberFormat is the standard built-in constructor defined in 11.1.3.
    var nf = new Intl.NumberFormat([locale], { useGrouping: false });

    // 4. Let nf2 be the result of creating a new NumberFormat object as if by the
    // expression new Intl.NumberFormat([locale], {minimumIntegerDigits: 2, useGrouping:
    // false}) where Intl.NumberFormat is the standard built-in constructor defined in
    // 11.1.3.
    var nf2 = new Intl.NumberFormat([locale], { minimumIntegerDigits: 2, useGrouping: false });

    // 5. Let tm be the result of calling the ToLocalTime abstract operation (defined
    // below) with x, the value of the [[calendar]] internal property of dateTimeFormat,
    // and the value of the [[timeZone]] internal property of dateTimeFormat.
    var tm = ToLocalTime(x, internal['[[calendar]]'], internal['[[timeZone]]']);

    // 6. Let result be the value of the [[pattern]] internal property of dateTimeFormat.
    var pattern = internal['[[pattern]]'];

    // 7.
    var result = new List();

    // 8.
    var index = 0;

    // 9.
    var beginIndex = pattern.indexOf('{');

    // 10.
    var endIndex = 0;

    // Need the locale minus any extensions
    var dataLocale = internal['[[dataLocale]]'];

    // Need the calendar data from CLDR
    var localeData = internals.DateTimeFormat['[[localeData]]'][dataLocale].calendars;
    var ca = internal['[[calendar]]'];

    // 11.
    while (beginIndex !== -1) {
        var fv = void 0;
        // a.
        endIndex = pattern.indexOf('}', beginIndex);
        // b.
        if (endIndex === -1) {
            throw new Error('Unclosed pattern');
        }
        // c.
        if (beginIndex > index) {
            arrPush.call(result, {
                type: 'literal',
                value: pattern.substring(index, beginIndex)
            });
        }
        // d.
        var p = pattern.substring(beginIndex + 1, endIndex);
        // e.
        if (dateTimeComponents.hasOwnProperty(p)) {
            //   i. Let f be the value of the [[<p>]] internal property of dateTimeFormat.
            var f = internal['[[' + p + ']]'];
            //  ii. Let v be the value of tm.[[<p>]].
            var v = tm['[[' + p + ']]'];
            // iii. If p is "year" and v ≤ 0, then let v be 1 - v.
            if (p === 'year' && v <= 0) {
                v = 1 - v;
            }
            //  iv. If p is "month", then increase v by 1.
            else if (p === 'month') {
                    v++;
                }
                //   v. If p is "hour" and the value of the [[hour12]] internal property of
                //      dateTimeFormat is true, then
                else if (p === 'hour' && internal['[[hour12]]'] === true) {
                        // 1. Let v be v modulo 12.
                        v = v % 12;
                        // 2. If v is 0 and the value of the [[hourNo0]] internal property of
                        //    dateTimeFormat is true, then let v be 12.
                        if (v === 0 && internal['[[hourNo0]]'] === true) {
                            v = 12;
                        }
                    }

            //  vi. If f is "numeric", then
            if (f === 'numeric') {
                // 1. Let fv be the result of calling the FormatNumber abstract operation
                //    (defined in 11.3.2) with arguments nf and v.
                fv = FormatNumber(nf, v);
            }
            // vii. Else if f is "2-digit", then
            else if (f === '2-digit') {
                    // 1. Let fv be the result of calling the FormatNumber abstract operation
                    //    with arguments nf2 and v.
                    fv = FormatNumber(nf2, v);
                    // 2. If the length of fv is greater than 2, let fv be the substring of fv
                    //    containing the last two characters.
                    if (fv.length > 2) {
                        fv = fv.slice(-2);
                    }
                }
                // viii. Else if f is "narrow", "short", or "long", then let fv be a String
                //     value representing f in the desired form; the String value depends upon
                //     the implementation and the effective locale and calendar of
                //     dateTimeFormat. If p is "month", then the String value may also depend
                //     on whether dateTimeFormat has a [[day]] internal property. If p is
                //     "timeZoneName", then the String value may also depend on the value of
                //     the [[inDST]] field of tm.
                else if (f in dateWidths) {
                        switch (p) {
                            case 'month':
                                fv = resolveDateString(localeData, ca, 'months', f, tm['[[' + p + ']]']);
                                break;

                            case 'weekday':
                                try {
                                    fv = resolveDateString(localeData, ca, 'days', f, tm['[[' + p + ']]']);
                                    // fv = resolveDateString(ca.days, f)[tm['[['+ p +']]']];
                                } catch (e) {
                                    throw new Error('Could not find weekday data for locale ' + locale);
                                }
                                break;

                            case 'timeZoneName':
                                fv = ''; // ###TODO
                                break;

                            case 'era':
                                try {
                                    fv = resolveDateString(localeData, ca, 'eras', f, tm['[[' + p + ']]']);
                                } catch (e) {
                                    throw new Error('Could not find era data for locale ' + locale);
                                }
                                break;

                            default:
                                fv = tm['[[' + p + ']]'];
                        }
                    }
            // ix
            arrPush.call(result, {
                type: p,
                value: fv
            });
            // f.
        } else if (p === 'ampm') {
            // i.
            var _v = tm['[[hour]]'];
            // ii./iii.
            fv = resolveDateString(localeData, ca, 'dayPeriods', _v > 11 ? 'pm' : 'am', null);
            // iv.
            arrPush.call(result, {
                type: 'dayPeriod',
                value: fv
            });
            // g.
        } else {
            arrPush.call(result, {
                type: 'literal',
                value: pattern.substring(beginIndex, endIndex + 1)
            });
        }
        // h.
        index = endIndex + 1;
        // i.
        beginIndex = pattern.indexOf('{', index);
    }
    // 12.
    if (endIndex < pattern.length - 1) {
        arrPush.call(result, {
            type: 'literal',
            value: pattern.substr(endIndex + 1)
        });
    }
    // 13.
    return result;
}

/**
 * When the FormatDateTime abstract operation is called with arguments dateTimeFormat
 * (which must be an object initialized as a DateTimeFormat) and x (which must be a Number
 * value), it returns a String value representing x (interpreted as a time value as
 * specified in ES5, 15.9.1.1) according to the effective locale and the formatting
 * options of dateTimeFormat.
 */
function FormatDateTime(dateTimeFormat, x) {
    var parts = CreateDateTimeParts(dateTimeFormat, x);
    var result = '';

    for (var i = 0; parts.length > i; i++) {
        var part = parts[i];
        result += part.value;
    }
    return result;
}

function FormatToPartsDateTime(dateTimeFormat, x) {
    var parts = CreateDateTimeParts(dateTimeFormat, x);
    var result = [];
    for (var i = 0; parts.length > i; i++) {
        var part = parts[i];
        result.push({
            type: part.type,
            value: part.value
        });
    }
    return result;
}

/**
 * When the ToLocalTime abstract operation is called with arguments date, calendar, and
 * timeZone, the following steps are taken:
 */
function ToLocalTime(date, calendar, timeZone) {
    // 1. Apply calendrical calculations on date for the given calendar and time zone to
    //    produce weekday, era, year, month, day, hour, minute, second, and inDST values.
    //    The calculations should use best available information about the specified
    //    calendar and time zone. If the calendar is "gregory", then the calculations must
    //    match the algorithms specified in ES5, 15.9.1, except that calculations are not
    //    bound by the restrictions on the use of best available information on time zones
    //    for local time zone adjustment and daylight saving time adjustment imposed by
    //    ES5, 15.9.1.7 and 15.9.1.8.
    // ###TODO###
    var d = new Date(date),
        m = 'get' + (timeZone || '');

    // 2. Return a Record with fields [[weekday]], [[era]], [[year]], [[month]], [[day]],
    //    [[hour]], [[minute]], [[second]], and [[inDST]], each with the corresponding
    //    calculated value.
    return new Record({
        '[[weekday]]': d[m + 'Day'](),
        '[[era]]': +(d[m + 'FullYear']() >= 0),
        '[[year]]': d[m + 'FullYear'](),
        '[[month]]': d[m + 'Month'](),
        '[[day]]': d[m + 'Date'](),
        '[[hour]]': d[m + 'Hours'](),
        '[[minute]]': d[m + 'Minutes'](),
        '[[second]]': d[m + 'Seconds'](),
        '[[inDST]]': false // ###TODO###
    });
}

/**
 * The function returns a new object whose properties and attributes are set as if
 * constructed by an object literal assigning to each of the following properties the
 * value of the corresponding internal property of this DateTimeFormat object (see 12.4):
 * locale, calendar, numberingSystem, timeZone, hour12, weekday, era, year, month, day,
 * hour, minute, second, and timeZoneName. Properties whose corresponding internal
 * properties are not present are not assigned.
 */
/* 12.3.3 */defineProperty(Intl.DateTimeFormat.prototype, 'resolvedOptions', {
    writable: true,
    configurable: true,
    value: function value() {
        var prop = void 0,
            descs = new Record(),
            props = ['locale', 'calendar', 'numberingSystem', 'timeZone', 'hour12', 'weekday', 'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName'],
            internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);

        // Satisfy test 12.3_b
        if (!internal || !internal['[[initializedDateTimeFormat]]']) throw new TypeError('`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.');

        for (var i = 0, max = props.length; i < max; i++) {
            if (hop.call(internal, prop = '[[' + props[i] + ']]')) descs[props[i]] = { value: internal[prop], writable: true, configurable: true, enumerable: true };
        }

        return objCreate({}, descs);
    }
});

var ls = Intl.__localeSensitiveProtos = {
    Number: {},
    Date: {}
};

/**
 * When the toLocaleString method is called with optional arguments locales and options,
 * the following steps are taken:
 */
/* 13.2.1 */ls.Number.toLocaleString = function () {
    // Satisfy test 13.2.1_1
    if (Object.prototype.toString.call(this) !== '[object Number]') throw new TypeError('`this` value must be a number for Number.prototype.toLocaleString()');

    // 1. Let x be this Number value (as defined in ES5, 15.7.4).
    // 2. If locales is not provided, then let locales be undefined.
    // 3. If options is not provided, then let options be undefined.
    // 4. Let numberFormat be the result of creating a new object as if by the
    //    expression new Intl.NumberFormat(locales, options) where
    //    Intl.NumberFormat is the standard built-in constructor defined in 11.1.3.
    // 5. Return the result of calling the FormatNumber abstract operation
    //    (defined in 11.3.2) with arguments numberFormat and x.
    return FormatNumber(new NumberFormatConstructor(arguments[0], arguments[1]), this);
};

/**
 * When the toLocaleString method is called with optional arguments locales and options,
 * the following steps are taken:
 */
/* 13.3.1 */ls.Date.toLocaleString = function () {
    // Satisfy test 13.3.0_1
    if (Object.prototype.toString.call(this) !== '[object Date]') throw new TypeError('`this` value must be a Date instance for Date.prototype.toLocaleString()');

    // 1. Let x be this time value (as defined in ES5, 15.9.5).
    var x = +this;

    // 2. If x is NaN, then return "Invalid Date".
    if (isNaN(x)) return 'Invalid Date';

    // 3. If locales is not provided, then let locales be undefined.
    var locales = arguments[0];

    // 4. If options is not provided, then let options be undefined.
    var options = arguments[1];

    // 5. Let options be the result of calling the ToDateTimeOptions abstract
    //    operation (defined in 12.1.1) with arguments options, "any", and "all".
    options = ToDateTimeOptions(options, 'any', 'all');

    // 6. Let dateTimeFormat be the result of creating a new object as if by the
    //    expression new Intl.DateTimeFormat(locales, options) where
    //    Intl.DateTimeFormat is the standard built-in constructor defined in 12.1.3.
    var dateTimeFormat = new DateTimeFormatConstructor(locales, options);

    // 7. Return the result of calling the FormatDateTime abstract operation (defined
    //    in 12.3.2) with arguments dateTimeFormat and x.
    return FormatDateTime(dateTimeFormat, x);
};

/**
 * When the toLocaleDateString method is called with optional arguments locales and
 * options, the following steps are taken:
 */
/* 13.3.2 */ls.Date.toLocaleDateString = function () {
    // Satisfy test 13.3.0_1
    if (Object.prototype.toString.call(this) !== '[object Date]') throw new TypeError('`this` value must be a Date instance for Date.prototype.toLocaleDateString()');

    // 1. Let x be this time value (as defined in ES5, 15.9.5).
    var x = +this;

    // 2. If x is NaN, then return "Invalid Date".
    if (isNaN(x)) return 'Invalid Date';

    // 3. If locales is not provided, then let locales be undefined.
    var locales = arguments[0],


    // 4. If options is not provided, then let options be undefined.
    options = arguments[1];

    // 5. Let options be the result of calling the ToDateTimeOptions abstract
    //    operation (defined in 12.1.1) with arguments options, "date", and "date".
    options = ToDateTimeOptions(options, 'date', 'date');

    // 6. Let dateTimeFormat be the result of creating a new object as if by the
    //    expression new Intl.DateTimeFormat(locales, options) where
    //    Intl.DateTimeFormat is the standard built-in constructor defined in 12.1.3.
    var dateTimeFormat = new DateTimeFormatConstructor(locales, options);

    // 7. Return the result of calling the FormatDateTime abstract operation (defined
    //    in 12.3.2) with arguments dateTimeFormat and x.
    return FormatDateTime(dateTimeFormat, x);
};

/**
 * When the toLocaleTimeString method is called with optional arguments locales and
 * options, the following steps are taken:
 */
/* 13.3.3 */ls.Date.toLocaleTimeString = function () {
    // Satisfy test 13.3.0_1
    if (Object.prototype.toString.call(this) !== '[object Date]') throw new TypeError('`this` value must be a Date instance for Date.prototype.toLocaleTimeString()');

    // 1. Let x be this time value (as defined in ES5, 15.9.5).
    var x = +this;

    // 2. If x is NaN, then return "Invalid Date".
    if (isNaN(x)) return 'Invalid Date';

    // 3. If locales is not provided, then let locales be undefined.
    var locales = arguments[0];

    // 4. If options is not provided, then let options be undefined.
    var options = arguments[1];

    // 5. Let options be the result of calling the ToDateTimeOptions abstract
    //    operation (defined in 12.1.1) with arguments options, "time", and "time".
    options = ToDateTimeOptions(options, 'time', 'time');

    // 6. Let dateTimeFormat be the result of creating a new object as if by the
    //    expression new Intl.DateTimeFormat(locales, options) where
    //    Intl.DateTimeFormat is the standard built-in constructor defined in 12.1.3.
    var dateTimeFormat = new DateTimeFormatConstructor(locales, options);

    // 7. Return the result of calling the FormatDateTime abstract operation (defined
    //    in 12.3.2) with arguments dateTimeFormat and x.
    return FormatDateTime(dateTimeFormat, x);
};

defineProperty(Intl, '__applyLocaleSensitivePrototypes', {
    writable: true,
    configurable: true,
    value: function value() {
        defineProperty(Number.prototype, 'toLocaleString', { writable: true, configurable: true, value: ls.Number.toLocaleString });
        // Need this here for IE 8, to avoid the _DontEnum_ bug
        defineProperty(Date.prototype, 'toLocaleString', { writable: true, configurable: true, value: ls.Date.toLocaleString });

        for (var k in ls.Date) {
            if (hop.call(ls.Date, k)) defineProperty(Date.prototype, k, { writable: true, configurable: true, value: ls.Date[k] });
        }
    }
});

/**
 * Can't really ship a single script with data for hundreds of locales, so we provide
 * this __addLocaleData method as a means for the developer to add the data on an
 * as-needed basis
 */
defineProperty(Intl, '__addLocaleData', {
    value: function value(data) {
        if (!IsStructurallyValidLanguageTag(data.locale)) throw new Error("Object passed doesn't identify itself with a valid language tag");

        addLocaleData(data, data.locale);
    }
});

function addLocaleData(data, tag) {
    // Both NumberFormat and DateTimeFormat require number data, so throw if it isn't present
    if (!data.number) throw new Error("Object passed doesn't contain locale data for Intl.NumberFormat");

    var locale = void 0,
        locales = [tag],
        parts = tag.split('-');

    // Create fallbacks for locale data with scripts, e.g. Latn, Hans, Vaii, etc
    if (parts.length > 2 && parts[1].length === 4) arrPush.call(locales, parts[0] + '-' + parts[2]);

    while (locale = arrShift.call(locales)) {
        // Add to NumberFormat internal properties as per 11.2.3
        arrPush.call(internals.NumberFormat['[[availableLocales]]'], locale);
        internals.NumberFormat['[[localeData]]'][locale] = data.number;

        // ...and DateTimeFormat internal properties as per 12.2.3
        if (data.date) {
            data.date.nu = data.number.nu;
            arrPush.call(internals.DateTimeFormat['[[availableLocales]]'], locale);
            internals.DateTimeFormat['[[localeData]]'][locale] = data.date;
        }
    }

    // If this is the first set of locale data added, make it the default
    if (defaultLocale === undefined) setDefaultLocale(tag);
}

defineProperty(Intl, '__disableRegExpRestore', {
    value: function value() {
        internals.disableRegExpRestore = true;
    }
});

module.exports = Intl;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(103)))

/***/ }),
/* 395 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 396 */
/***/ (function(module, exports) {

IntlPolyfill.__addLocaleData({locale:"en",date:{ca:["gregory","buddhist","chinese","coptic","dangi","ethioaa","ethiopic","generic","hebrew","indian","islamic","islamicc","japanese","persian","roc"],hourNo0:true,hour12:true,formats:{short:"{1}, {0}",medium:"{1}, {0}",full:"{1} 'at' {0}",long:"{1} 'at' {0}",availableFormats:{"d":"d","E":"ccc",Ed:"d E",Ehm:"E h:mm a",EHm:"E HH:mm",Ehms:"E h:mm:ss a",EHms:"E HH:mm:ss",Gy:"y G",GyMMM:"MMM y G",GyMMMd:"MMM d, y G",GyMMMEd:"E, MMM d, y G","h":"h a","H":"HH",hm:"h:mm a",Hm:"HH:mm",hms:"h:mm:ss a",Hms:"HH:mm:ss",hmsv:"h:mm:ss a v",Hmsv:"HH:mm:ss v",hmv:"h:mm a v",Hmv:"HH:mm v","M":"L",Md:"M/d",MEd:"E, M/d",MMM:"LLL",MMMd:"MMM d",MMMEd:"E, MMM d",MMMMd:"MMMM d",ms:"mm:ss","y":"y",yM:"M/y",yMd:"M/d/y",yMEd:"E, M/d/y",yMMM:"MMM y",yMMMd:"MMM d, y",yMMMEd:"E, MMM d, y",yMMMM:"MMMM y",yQQQ:"QQQ y",yQQQQ:"QQQQ y"},dateFormats:{yMMMMEEEEd:"EEEE, MMMM d, y",yMMMMd:"MMMM d, y",yMMMd:"MMM d, y",yMd:"M/d/yy"},timeFormats:{hmmsszzzz:"h:mm:ss a zzzz",hmsz:"h:mm:ss a z",hms:"h:mm:ss a",hm:"h:mm a"}},calendars:{buddhist:{months:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],long:["January","February","March","April","May","June","July","August","September","October","November","December"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["BE"],short:["BE"],long:["BE"]},dayPeriods:{am:"AM",pm:"PM"}},chinese:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Mo1","Mo2","Mo3","Mo4","Mo5","Mo6","Mo7","Mo8","Mo9","Mo10","Mo11","Mo12"],long:["Month1","Month2","Month3","Month4","Month5","Month6","Month7","Month8","Month9","Month10","Month11","Month12"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},dayPeriods:{am:"AM",pm:"PM"}},coptic:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12","13"],short:["Tout","Baba","Hator","Kiahk","Toba","Amshir","Baramhat","Baramouda","Bashans","Paona","Epep","Mesra","Nasie"],long:["Tout","Baba","Hator","Kiahk","Toba","Amshir","Baramhat","Baramouda","Bashans","Paona","Epep","Mesra","Nasie"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["ERA0","ERA1"],short:["ERA0","ERA1"],long:["ERA0","ERA1"]},dayPeriods:{am:"AM",pm:"PM"}},dangi:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Mo1","Mo2","Mo3","Mo4","Mo5","Mo6","Mo7","Mo8","Mo9","Mo10","Mo11","Mo12"],long:["Month1","Month2","Month3","Month4","Month5","Month6","Month7","Month8","Month9","Month10","Month11","Month12"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},dayPeriods:{am:"AM",pm:"PM"}},ethiopic:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12","13"],short:["Meskerem","Tekemt","Hedar","Tahsas","Ter","Yekatit","Megabit","Miazia","Genbot","Sene","Hamle","Nehasse","Pagumen"],long:["Meskerem","Tekemt","Hedar","Tahsas","Ter","Yekatit","Megabit","Miazia","Genbot","Sene","Hamle","Nehasse","Pagumen"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["ERA0","ERA1"],short:["ERA0","ERA1"],long:["ERA0","ERA1"]},dayPeriods:{am:"AM",pm:"PM"}},ethioaa:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12","13"],short:["Meskerem","Tekemt","Hedar","Tahsas","Ter","Yekatit","Megabit","Miazia","Genbot","Sene","Hamle","Nehasse","Pagumen"],long:["Meskerem","Tekemt","Hedar","Tahsas","Ter","Yekatit","Megabit","Miazia","Genbot","Sene","Hamle","Nehasse","Pagumen"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["ERA0"],short:["ERA0"],long:["ERA0"]},dayPeriods:{am:"AM",pm:"PM"}},generic:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["M01","M02","M03","M04","M05","M06","M07","M08","M09","M10","M11","M12"],long:["M01","M02","M03","M04","M05","M06","M07","M08","M09","M10","M11","M12"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["ERA0","ERA1"],short:["ERA0","ERA1"],long:["ERA0","ERA1"]},dayPeriods:{am:"AM",pm:"PM"}},gregory:{months:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],long:["January","February","March","April","May","June","July","August","September","October","November","December"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["B","A","BCE","CE"],short:["BC","AD","BCE","CE"],long:["Before Christ","Anno Domini","Before Common Era","Common Era"]},dayPeriods:{am:"AM",pm:"PM"}},hebrew:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12","13","7"],short:["Tishri","Heshvan","Kislev","Tevet","Shevat","Adar I","Adar","Nisan","Iyar","Sivan","Tamuz","Av","Elul","Adar II"],long:["Tishri","Heshvan","Kislev","Tevet","Shevat","Adar I","Adar","Nisan","Iyar","Sivan","Tamuz","Av","Elul","Adar II"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["AM"],short:["AM"],long:["AM"]},dayPeriods:{am:"AM",pm:"PM"}},indian:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Chaitra","Vaisakha","Jyaistha","Asadha","Sravana","Bhadra","Asvina","Kartika","Agrahayana","Pausa","Magha","Phalguna"],long:["Chaitra","Vaisakha","Jyaistha","Asadha","Sravana","Bhadra","Asvina","Kartika","Agrahayana","Pausa","Magha","Phalguna"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["Saka"],short:["Saka"],long:["Saka"]},dayPeriods:{am:"AM",pm:"PM"}},islamic:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Muh.","Saf.","Rab. I","Rab. II","Jum. I","Jum. II","Raj.","Sha.","Ram.","Shaw.","Dhuʻl-Q.","Dhuʻl-H."],long:["Muharram","Safar","Rabiʻ I","Rabiʻ II","Jumada I","Jumada II","Rajab","Shaʻban","Ramadan","Shawwal","Dhuʻl-Qiʻdah","Dhuʻl-Hijjah"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["AH"],short:["AH"],long:["AH"]},dayPeriods:{am:"AM",pm:"PM"}},islamicc:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Muh.","Saf.","Rab. I","Rab. II","Jum. I","Jum. II","Raj.","Sha.","Ram.","Shaw.","Dhuʻl-Q.","Dhuʻl-H."],long:["Muharram","Safar","Rabiʻ I","Rabiʻ II","Jumada I","Jumada II","Rajab","Shaʻban","Ramadan","Shawwal","Dhuʻl-Qiʻdah","Dhuʻl-Hijjah"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["AH"],short:["AH"],long:["AH"]},dayPeriods:{am:"AM",pm:"PM"}},japanese:{months:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],long:["January","February","March","April","May","June","July","August","September","October","November","December"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["Taika (645–650)","Hakuchi (650–671)","Hakuhō (672–686)","Shuchō (686–701)","Taihō (701–704)","Keiun (704–708)","Wadō (708–715)","Reiki (715–717)","Yōrō (717–724)","Jinki (724–729)","Tenpyō (729–749)","Tenpyō-kampō (749-749)","Tenpyō-shōhō (749-757)","Tenpyō-hōji (757-765)","Tenpyō-jingo (765-767)","Jingo-keiun (767-770)","Hōki (770–780)","Ten-ō (781-782)","Enryaku (782–806)","Daidō (806–810)","Kōnin (810–824)","Tenchō (824–834)","Jōwa (834–848)","Kajō (848–851)","Ninju (851–854)","Saikō (854–857)","Ten-an (857-859)","Jōgan (859–877)","Gangyō (877–885)","Ninna (885–889)","Kanpyō (889–898)","Shōtai (898–901)","Engi (901–923)","Enchō (923–931)","Jōhei (931–938)","Tengyō (938–947)","Tenryaku (947–957)","Tentoku (957–961)","Ōwa (961–964)","Kōhō (964–968)","Anna (968–970)","Tenroku (970–973)","Ten’en (973–976)","Jōgen (976–978)","Tengen (978–983)","Eikan (983–985)","Kanna (985–987)","Eien (987–989)","Eiso (989–990)","Shōryaku (990–995)","Chōtoku (995–999)","Chōhō (999–1004)","Kankō (1004–1012)","Chōwa (1012–1017)","Kannin (1017–1021)","Jian (1021–1024)","Manju (1024–1028)","Chōgen (1028–1037)","Chōryaku (1037–1040)","Chōkyū (1040–1044)","Kantoku (1044–1046)","Eishō (1046–1053)","Tengi (1053–1058)","Kōhei (1058–1065)","Jiryaku (1065–1069)","Enkyū (1069–1074)","Shōho (1074–1077)","Shōryaku (1077–1081)","Eihō (1081–1084)","Ōtoku (1084–1087)","Kanji (1087–1094)","Kahō (1094–1096)","Eichō (1096–1097)","Jōtoku (1097–1099)","Kōwa (1099–1104)","Chōji (1104–1106)","Kashō (1106–1108)","Tennin (1108–1110)","Ten-ei (1110-1113)","Eikyū (1113–1118)","Gen’ei (1118–1120)","Hōan (1120–1124)","Tenji (1124–1126)","Daiji (1126–1131)","Tenshō (1131–1132)","Chōshō (1132–1135)","Hōen (1135–1141)","Eiji (1141–1142)","Kōji (1142–1144)","Ten’yō (1144–1145)","Kyūan (1145–1151)","Ninpei (1151–1154)","Kyūju (1154–1156)","Hōgen (1156–1159)","Heiji (1159–1160)","Eiryaku (1160–1161)","Ōho (1161–1163)","Chōkan (1163–1165)","Eiman (1165–1166)","Nin’an (1166–1169)","Kaō (1169–1171)","Shōan (1171–1175)","Angen (1175–1177)","Jishō (1177–1181)","Yōwa (1181–1182)","Juei (1182–1184)","Genryaku (1184–1185)","Bunji (1185–1190)","Kenkyū (1190–1199)","Shōji (1199–1201)","Kennin (1201–1204)","Genkyū (1204–1206)","Ken’ei (1206–1207)","Jōgen (1207–1211)","Kenryaku (1211–1213)","Kenpō (1213–1219)","Jōkyū (1219–1222)","Jōō (1222–1224)","Gennin (1224–1225)","Karoku (1225–1227)","Antei (1227–1229)","Kanki (1229–1232)","Jōei (1232–1233)","Tenpuku (1233–1234)","Bunryaku (1234–1235)","Katei (1235–1238)","Ryakunin (1238–1239)","En’ō (1239–1240)","Ninji (1240–1243)","Kangen (1243–1247)","Hōji (1247–1249)","Kenchō (1249–1256)","Kōgen (1256–1257)","Shōka (1257–1259)","Shōgen (1259–1260)","Bun’ō (1260–1261)","Kōchō (1261–1264)","Bun’ei (1264–1275)","Kenji (1275–1278)","Kōan (1278–1288)","Shōō (1288–1293)","Einin (1293–1299)","Shōan (1299–1302)","Kengen (1302–1303)","Kagen (1303–1306)","Tokuji (1306–1308)","Enkyō (1308–1311)","Ōchō (1311–1312)","Shōwa (1312–1317)","Bunpō (1317–1319)","Genō (1319–1321)","Genkō (1321–1324)","Shōchū (1324–1326)","Karyaku (1326–1329)","Gentoku (1329–1331)","Genkō (1331–1334)","Kenmu (1334–1336)","Engen (1336–1340)","Kōkoku (1340–1346)","Shōhei (1346–1370)","Kentoku (1370–1372)","Bunchū (1372–1375)","Tenju (1375–1379)","Kōryaku (1379–1381)","Kōwa (1381–1384)","Genchū (1384–1392)","Meitoku (1384–1387)","Kakei (1387–1389)","Kōō (1389–1390)","Meitoku (1390–1394)","Ōei (1394–1428)","Shōchō (1428–1429)","Eikyō (1429–1441)","Kakitsu (1441–1444)","Bun’an (1444–1449)","Hōtoku (1449–1452)","Kyōtoku (1452–1455)","Kōshō (1455–1457)","Chōroku (1457–1460)","Kanshō (1460–1466)","Bunshō (1466–1467)","Ōnin (1467–1469)","Bunmei (1469–1487)","Chōkyō (1487–1489)","Entoku (1489–1492)","Meiō (1492–1501)","Bunki (1501–1504)","Eishō (1504–1521)","Taiei (1521–1528)","Kyōroku (1528–1532)","Tenbun (1532–1555)","Kōji (1555–1558)","Eiroku (1558–1570)","Genki (1570–1573)","Tenshō (1573–1592)","Bunroku (1592–1596)","Keichō (1596–1615)","Genna (1615–1624)","Kan’ei (1624–1644)","Shōho (1644–1648)","Keian (1648–1652)","Jōō (1652–1655)","Meireki (1655–1658)","Manji (1658–1661)","Kanbun (1661–1673)","Enpō (1673–1681)","Tenna (1681–1684)","Jōkyō (1684–1688)","Genroku (1688–1704)","Hōei (1704–1711)","Shōtoku (1711–1716)","Kyōhō (1716–1736)","Genbun (1736–1741)","Kanpō (1741–1744)","Enkyō (1744–1748)","Kan’en (1748–1751)","Hōreki (1751–1764)","Meiwa (1764–1772)","An’ei (1772–1781)","Tenmei (1781–1789)","Kansei (1789–1801)","Kyōwa (1801–1804)","Bunka (1804–1818)","Bunsei (1818–1830)","Tenpō (1830–1844)","Kōka (1844–1848)","Kaei (1848–1854)","Ansei (1854–1860)","Man’en (1860–1861)","Bunkyū (1861–1864)","Genji (1864–1865)","Keiō (1865–1868)","M","T","S","H"],short:["Taika (645–650)","Hakuchi (650–671)","Hakuhō (672–686)","Shuchō (686–701)","Taihō (701–704)","Keiun (704–708)","Wadō (708–715)","Reiki (715–717)","Yōrō (717–724)","Jinki (724–729)","Tenpyō (729–749)","Tenpyō-kampō (749-749)","Tenpyō-shōhō (749-757)","Tenpyō-hōji (757-765)","Tenpyō-jingo (765-767)","Jingo-keiun (767-770)","Hōki (770–780)","Ten-ō (781-782)","Enryaku (782–806)","Daidō (806–810)","Kōnin (810–824)","Tenchō (824–834)","Jōwa (834–848)","Kajō (848–851)","Ninju (851–854)","Saikō (854–857)","Ten-an (857-859)","Jōgan (859–877)","Gangyō (877–885)","Ninna (885–889)","Kanpyō (889–898)","Shōtai (898–901)","Engi (901–923)","Enchō (923–931)","Jōhei (931–938)","Tengyō (938–947)","Tenryaku (947–957)","Tentoku (957–961)","Ōwa (961–964)","Kōhō (964–968)","Anna (968–970)","Tenroku (970–973)","Ten’en (973–976)","Jōgen (976–978)","Tengen (978–983)","Eikan (983–985)","Kanna (985–987)","Eien (987–989)","Eiso (989–990)","Shōryaku (990–995)","Chōtoku (995–999)","Chōhō (999–1004)","Kankō (1004–1012)","Chōwa (1012–1017)","Kannin (1017–1021)","Jian (1021–1024)","Manju (1024–1028)","Chōgen (1028–1037)","Chōryaku (1037–1040)","Chōkyū (1040–1044)","Kantoku (1044–1046)","Eishō (1046–1053)","Tengi (1053–1058)","Kōhei (1058–1065)","Jiryaku (1065–1069)","Enkyū (1069–1074)","Shōho (1074–1077)","Shōryaku (1077–1081)","Eihō (1081–1084)","Ōtoku (1084–1087)","Kanji (1087–1094)","Kahō (1094–1096)","Eichō (1096–1097)","Jōtoku (1097–1099)","Kōwa (1099–1104)","Chōji (1104–1106)","Kashō (1106–1108)","Tennin (1108–1110)","Ten-ei (1110-1113)","Eikyū (1113–1118)","Gen’ei (1118–1120)","Hōan (1120–1124)","Tenji (1124–1126)","Daiji (1126–1131)","Tenshō (1131–1132)","Chōshō (1132–1135)","Hōen (1135–1141)","Eiji (1141–1142)","Kōji (1142–1144)","Ten’yō (1144–1145)","Kyūan (1145–1151)","Ninpei (1151–1154)","Kyūju (1154–1156)","Hōgen (1156–1159)","Heiji (1159–1160)","Eiryaku (1160–1161)","Ōho (1161–1163)","Chōkan (1163–1165)","Eiman (1165–1166)","Nin’an (1166–1169)","Kaō (1169–1171)","Shōan (1171–1175)","Angen (1175–1177)","Jishō (1177–1181)","Yōwa (1181–1182)","Juei (1182–1184)","Genryaku (1184–1185)","Bunji (1185–1190)","Kenkyū (1190–1199)","Shōji (1199–1201)","Kennin (1201–1204)","Genkyū (1204–1206)","Ken’ei (1206–1207)","Jōgen (1207–1211)","Kenryaku (1211–1213)","Kenpō (1213–1219)","Jōkyū (1219–1222)","Jōō (1222–1224)","Gennin (1224–1225)","Karoku (1225–1227)","Antei (1227–1229)","Kanki (1229–1232)","Jōei (1232–1233)","Tenpuku (1233–1234)","Bunryaku (1234–1235)","Katei (1235–1238)","Ryakunin (1238–1239)","En’ō (1239–1240)","Ninji (1240–1243)","Kangen (1243–1247)","Hōji (1247–1249)","Kenchō (1249–1256)","Kōgen (1256–1257)","Shōka (1257–1259)","Shōgen (1259–1260)","Bun’ō (1260–1261)","Kōchō (1261–1264)","Bun’ei (1264–1275)","Kenji (1275–1278)","Kōan (1278–1288)","Shōō (1288–1293)","Einin (1293–1299)","Shōan (1299–1302)","Kengen (1302–1303)","Kagen (1303–1306)","Tokuji (1306–1308)","Enkyō (1308–1311)","Ōchō (1311–1312)","Shōwa (1312–1317)","Bunpō (1317–1319)","Genō (1319–1321)","Genkō (1321–1324)","Shōchū (1324–1326)","Karyaku (1326–1329)","Gentoku (1329–1331)","Genkō (1331–1334)","Kenmu (1334–1336)","Engen (1336–1340)","Kōkoku (1340–1346)","Shōhei (1346–1370)","Kentoku (1370–1372)","Bunchū (1372–1375)","Tenju (1375–1379)","Kōryaku (1379–1381)","Kōwa (1381–1384)","Genchū (1384–1392)","Meitoku (1384–1387)","Kakei (1387–1389)","Kōō (1389–1390)","Meitoku (1390–1394)","Ōei (1394–1428)","Shōchō (1428–1429)","Eikyō (1429–1441)","Kakitsu (1441–1444)","Bun’an (1444–1449)","Hōtoku (1449–1452)","Kyōtoku (1452–1455)","Kōshō (1455–1457)","Chōroku (1457–1460)","Kanshō (1460–1466)","Bunshō (1466–1467)","Ōnin (1467–1469)","Bunmei (1469–1487)","Chōkyō (1487–1489)","Entoku (1489–1492)","Meiō (1492–1501)","Bunki (1501–1504)","Eishō (1504–1521)","Taiei (1521–1528)","Kyōroku (1528–1532)","Tenbun (1532–1555)","Kōji (1555–1558)","Eiroku (1558–1570)","Genki (1570–1573)","Tenshō (1573–1592)","Bunroku (1592–1596)","Keichō (1596–1615)","Genna (1615–1624)","Kan’ei (1624–1644)","Shōho (1644–1648)","Keian (1648–1652)","Jōō (1652–1655)","Meireki (1655–1658)","Manji (1658–1661)","Kanbun (1661–1673)","Enpō (1673–1681)","Tenna (1681–1684)","Jōkyō (1684–1688)","Genroku (1688–1704)","Hōei (1704–1711)","Shōtoku (1711–1716)","Kyōhō (1716–1736)","Genbun (1736–1741)","Kanpō (1741–1744)","Enkyō (1744–1748)","Kan’en (1748–1751)","Hōreki (1751–1764)","Meiwa (1764–1772)","An’ei (1772–1781)","Tenmei (1781–1789)","Kansei (1789–1801)","Kyōwa (1801–1804)","Bunka (1804–1818)","Bunsei (1818–1830)","Tenpō (1830–1844)","Kōka (1844–1848)","Kaei (1848–1854)","Ansei (1854–1860)","Man’en (1860–1861)","Bunkyū (1861–1864)","Genji (1864–1865)","Keiō (1865–1868)","Meiji","Taishō","Shōwa","Heisei"],long:["Taika (645–650)","Hakuchi (650–671)","Hakuhō (672–686)","Shuchō (686–701)","Taihō (701–704)","Keiun (704–708)","Wadō (708–715)","Reiki (715–717)","Yōrō (717–724)","Jinki (724–729)","Tenpyō (729–749)","Tenpyō-kampō (749-749)","Tenpyō-shōhō (749-757)","Tenpyō-hōji (757-765)","Tenpyō-jingo (765-767)","Jingo-keiun (767-770)","Hōki (770–780)","Ten-ō (781-782)","Enryaku (782–806)","Daidō (806–810)","Kōnin (810–824)","Tenchō (824–834)","Jōwa (834–848)","Kajō (848–851)","Ninju (851–854)","Saikō (854–857)","Ten-an (857-859)","Jōgan (859–877)","Gangyō (877–885)","Ninna (885–889)","Kanpyō (889–898)","Shōtai (898–901)","Engi (901–923)","Enchō (923–931)","Jōhei (931–938)","Tengyō (938–947)","Tenryaku (947–957)","Tentoku (957–961)","Ōwa (961–964)","Kōhō (964–968)","Anna (968–970)","Tenroku (970–973)","Ten’en (973–976)","Jōgen (976–978)","Tengen (978–983)","Eikan (983–985)","Kanna (985–987)","Eien (987–989)","Eiso (989–990)","Shōryaku (990–995)","Chōtoku (995–999)","Chōhō (999–1004)","Kankō (1004–1012)","Chōwa (1012–1017)","Kannin (1017–1021)","Jian (1021–1024)","Manju (1024–1028)","Chōgen (1028–1037)","Chōryaku (1037–1040)","Chōkyū (1040–1044)","Kantoku (1044–1046)","Eishō (1046–1053)","Tengi (1053–1058)","Kōhei (1058–1065)","Jiryaku (1065–1069)","Enkyū (1069–1074)","Shōho (1074–1077)","Shōryaku (1077–1081)","Eihō (1081–1084)","Ōtoku (1084–1087)","Kanji (1087–1094)","Kahō (1094–1096)","Eichō (1096–1097)","Jōtoku (1097–1099)","Kōwa (1099–1104)","Chōji (1104–1106)","Kashō (1106–1108)","Tennin (1108–1110)","Ten-ei (1110-1113)","Eikyū (1113–1118)","Gen’ei (1118–1120)","Hōan (1120–1124)","Tenji (1124–1126)","Daiji (1126–1131)","Tenshō (1131–1132)","Chōshō (1132–1135)","Hōen (1135–1141)","Eiji (1141–1142)","Kōji (1142–1144)","Ten’yō (1144–1145)","Kyūan (1145–1151)","Ninpei (1151–1154)","Kyūju (1154–1156)","Hōgen (1156–1159)","Heiji (1159–1160)","Eiryaku (1160–1161)","Ōho (1161–1163)","Chōkan (1163–1165)","Eiman (1165–1166)","Nin’an (1166–1169)","Kaō (1169–1171)","Shōan (1171–1175)","Angen (1175–1177)","Jishō (1177–1181)","Yōwa (1181–1182)","Juei (1182–1184)","Genryaku (1184–1185)","Bunji (1185–1190)","Kenkyū (1190–1199)","Shōji (1199–1201)","Kennin (1201–1204)","Genkyū (1204–1206)","Ken’ei (1206–1207)","Jōgen (1207–1211)","Kenryaku (1211–1213)","Kenpō (1213–1219)","Jōkyū (1219–1222)","Jōō (1222–1224)","Gennin (1224–1225)","Karoku (1225–1227)","Antei (1227–1229)","Kanki (1229–1232)","Jōei (1232–1233)","Tenpuku (1233–1234)","Bunryaku (1234–1235)","Katei (1235–1238)","Ryakunin (1238–1239)","En’ō (1239–1240)","Ninji (1240–1243)","Kangen (1243–1247)","Hōji (1247–1249)","Kenchō (1249–1256)","Kōgen (1256–1257)","Shōka (1257–1259)","Shōgen (1259–1260)","Bun’ō (1260–1261)","Kōchō (1261–1264)","Bun’ei (1264–1275)","Kenji (1275–1278)","Kōan (1278–1288)","Shōō (1288–1293)","Einin (1293–1299)","Shōan (1299–1302)","Kengen (1302–1303)","Kagen (1303–1306)","Tokuji (1306–1308)","Enkyō (1308–1311)","Ōchō (1311–1312)","Shōwa (1312–1317)","Bunpō (1317–1319)","Genō (1319–1321)","Genkō (1321–1324)","Shōchū (1324–1326)","Karyaku (1326–1329)","Gentoku (1329–1331)","Genkō (1331–1334)","Kenmu (1334–1336)","Engen (1336–1340)","Kōkoku (1340–1346)","Shōhei (1346–1370)","Kentoku (1370–1372)","Bunchū (1372–1375)","Tenju (1375–1379)","Kōryaku (1379–1381)","Kōwa (1381–1384)","Genchū (1384–1392)","Meitoku (1384–1387)","Kakei (1387–1389)","Kōō (1389–1390)","Meitoku (1390–1394)","Ōei (1394–1428)","Shōchō (1428–1429)","Eikyō (1429–1441)","Kakitsu (1441–1444)","Bun’an (1444–1449)","Hōtoku (1449–1452)","Kyōtoku (1452–1455)","Kōshō (1455–1457)","Chōroku (1457–1460)","Kanshō (1460–1466)","Bunshō (1466–1467)","Ōnin (1467–1469)","Bunmei (1469–1487)","Chōkyō (1487–1489)","Entoku (1489–1492)","Meiō (1492–1501)","Bunki (1501–1504)","Eishō (1504–1521)","Taiei (1521–1528)","Kyōroku (1528–1532)","Tenbun (1532–1555)","Kōji (1555–1558)","Eiroku (1558–1570)","Genki (1570–1573)","Tenshō (1573–1592)","Bunroku (1592–1596)","Keichō (1596–1615)","Genna (1615–1624)","Kan’ei (1624–1644)","Shōho (1644–1648)","Keian (1648–1652)","Jōō (1652–1655)","Meireki (1655–1658)","Manji (1658–1661)","Kanbun (1661–1673)","Enpō (1673–1681)","Tenna (1681–1684)","Jōkyō (1684–1688)","Genroku (1688–1704)","Hōei (1704–1711)","Shōtoku (1711–1716)","Kyōhō (1716–1736)","Genbun (1736–1741)","Kanpō (1741–1744)","Enkyō (1744–1748)","Kan’en (1748–1751)","Hōreki (1751–1764)","Meiwa (1764–1772)","An’ei (1772–1781)","Tenmei (1781–1789)","Kansei (1789–1801)","Kyōwa (1801–1804)","Bunka (1804–1818)","Bunsei (1818–1830)","Tenpō (1830–1844)","Kōka (1844–1848)","Kaei (1848–1854)","Ansei (1854–1860)","Man’en (1860–1861)","Bunkyū (1861–1864)","Genji (1864–1865)","Keiō (1865–1868)","Meiji","Taishō","Shōwa","Heisei"]},dayPeriods:{am:"AM",pm:"PM"}},persian:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Farvardin","Ordibehesht","Khordad","Tir","Mordad","Shahrivar","Mehr","Aban","Azar","Dey","Bahman","Esfand"],long:["Farvardin","Ordibehesht","Khordad","Tir","Mordad","Shahrivar","Mehr","Aban","Azar","Dey","Bahman","Esfand"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["AP"],short:["AP"],long:["AP"]},dayPeriods:{am:"AM",pm:"PM"}},roc:{months:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],long:["January","February","March","April","May","June","July","August","September","October","November","December"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["Before R.O.C.","Minguo"],short:["Before R.O.C.","Minguo"],long:["Before R.O.C.","Minguo"]},dayPeriods:{am:"AM",pm:"PM"}}}},number:{nu:["latn"],patterns:{decimal:{positivePattern:"{number}",negativePattern:"{minusSign}{number}"},currency:{positivePattern:"{currency}{number}",negativePattern:"{minusSign}{currency}{number}"},percent:{positivePattern:"{number}{percentSign}",negativePattern:"{minusSign}{number}{percentSign}"}},symbols:{latn:{decimal:".",group:",",nan:"NaN",plusSign:"+",minusSign:"-",percentSign:"%",infinity:"∞"}},currencies:{AUD:"A$",BRL:"R$",CAD:"CA$",CNY:"CN¥",EUR:"€",GBP:"£",HKD:"HK$",ILS:"₪",INR:"₹",JPY:"¥",KRW:"₩",MXN:"MX$",NZD:"NZ$",TWD:"NT$",USD:"$",VND:"₫",XAF:"FCFA",XCD:"EC$",XOF:"CFA",XPF:"CFPF"}}});

/***/ }),
/* 397 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonthViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar_service__ = __webpack_require__(272);



var MonthViewComponent = (function () {
    function MonthViewComponent(calendarService) {
        this.calendarService = calendarService;
        this.autoSelect = true;
        this.dir = "";
        this.onRangeChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onEventSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onTimeSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */](true);
        this.onTitleChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */](true);
        this.views = [];
        this.currentViewIndex = 0;
        this.mode = 'month';
        this.direction = 0;
        this.moveOnSelected = false;
        this.inited = false;
        this.callbackOnInit = true;
    }
    MonthViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dateFormatter && this.dateFormatter.formatMonthViewDay) {
            this.formatDayLabel = this.dateFormatter.formatMonthViewDay;
        }
        else {
            var dayLabelDatePipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */]('en-US');
            this.formatDayLabel = function (date) {
                return dayLabelDatePipe.transform(date, this.formatDay);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatMonthViewDayHeader) {
            this.formatDayHeaderLabel = this.dateFormatter.formatMonthViewDayHeader;
        }
        else {
            var datePipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */](this.locale);
            this.formatDayHeaderLabel = function (date) {
                return datePipe.transform(date, this.formatDayHeader);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatMonthViewTitle) {
            this.formatTitle = this.dateFormatter.formatMonthViewTitle;
        }
        else {
            var datePipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */](this.locale);
            this.formatTitle = function (date) {
                return datePipe.transform(date, this.formatMonthTitle);
            };
        }
        if (this.lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(true);
        }
        if (this.lockSwipes) {
            this.slider.lockSwipes(true);
        }
        this.refreshView();
        this.inited = true;
        this.currentDateChangedFromParentSubscription = this.calendarService.currentDateChangedFromParent$.subscribe(function (currentDate) {
            _this.refreshView();
        });
        this.eventSourceChangedSubscription = this.calendarService.eventSourceChanged$.subscribe(function () {
            _this.onDataLoaded();
        });
    };
    MonthViewComponent.prototype.ngOnDestroy = function () {
        if (this.currentDateChangedFromParentSubscription) {
            this.currentDateChangedFromParentSubscription.unsubscribe();
            this.currentDateChangedFromParentSubscription = null;
        }
        if (this.eventSourceChangedSubscription) {
            this.eventSourceChangedSubscription.unsubscribe();
            this.eventSourceChangedSubscription = null;
        }
    };
    MonthViewComponent.prototype.ngOnChanges = function (changes) {
        if (!this.inited)
            return;
        var eventSourceChange = changes['eventSource'];
        if (eventSourceChange && eventSourceChange.currentValue) {
            this.onDataLoaded();
        }
        var lockSwipeToPrev = changes['lockSwipeToPrev'];
        if (lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(lockSwipeToPrev.currentValue);
        }
        var lockSwipes = changes['lockSwipes'];
        if (lockSwipes) {
            this.slider.lockSwipes(lockSwipes.currentValue);
        }
    };
    MonthViewComponent.prototype.ngAfterViewInit = function () {
        var title = this.getTitle();
        this.onTitleChanged.emit(title);
    };
    MonthViewComponent.prototype.onSlideChanged = function () {
        if (this.callbackOnInit) {
            this.callbackOnInit = false;
            return;
        }
        var currentSlideIndex = this.slider.getActiveIndex(), direction = 0, currentViewIndex = this.currentViewIndex;
        currentSlideIndex = (currentSlideIndex + 2) % 3;
        if (currentSlideIndex - currentViewIndex === 1) {
            direction = 1;
        }
        else if (currentSlideIndex === 0 && currentViewIndex === 2) {
            direction = 1;
            this.slider.slideTo(1, 0, false);
        }
        else if (currentViewIndex - currentSlideIndex === 1) {
            direction = -1;
        }
        else if (currentSlideIndex === 2 && currentViewIndex === 0) {
            direction = -1;
            this.slider.slideTo(3, 0, false);
        }
        this.currentViewIndex = currentSlideIndex;
        this.move(direction);
    };
    MonthViewComponent.prototype.move = function (direction) {
        if (direction === 0)
            return;
        this.direction = direction;
        if (!this.moveOnSelected) {
            var adjacentDate = this.calendarService.getAdjacentCalendarDate(this.mode, direction);
            this.calendarService.setCurrentDate(adjacentDate);
        }
        this.refreshView();
        this.direction = 0;
        this.moveOnSelected = false;
    };
    MonthViewComponent.prototype.createDateObject = function (date) {
        var disabled = false;
        if (this.markDisabled) {
            disabled = this.markDisabled(date);
        }
        return {
            date: date,
            events: [],
            label: this.formatDayLabel(date),
            secondary: false,
            disabled: disabled
        };
    };
    MonthViewComponent.getDates = function (startDate, n) {
        var dates = new Array(n), current = new Date(startDate.getTime()), i = 0;
        current.setHours(12);
        while (i < n) {
            dates[i++] = new Date(current.getTime());
            current.setDate(current.getDate() + 1);
        }
        return dates;
    };
    MonthViewComponent.prototype.getViewData = function (startTime) {
        var startDate = startTime, date = startDate.getDate(), month = (startDate.getMonth() + (date !== 1 ? 1 : 0)) % 12;
        var dates = MonthViewComponent.getDates(startDate, 42);
        var days = [];
        for (var i = 0; i < 42; i++) {
            var dateObject = this.createDateObject(dates[i]);
            dateObject.secondary = dates[i].getMonth() !== month;
            days[i] = dateObject;
        }
        var dayHeaders = [];
        for (var i = 0; i < 7; i++) {
            dayHeaders.push(this.formatDayHeaderLabel(days[i].date));
        }
        return {
            dates: days,
            dayHeaders: dayHeaders
        };
    };
    MonthViewComponent.prototype.getHighlightClass = function (date) {
        var className = '';
        if (date.hasEvent) {
            if (date.secondary) {
                className = 'monthview-secondary-with-event';
            }
            else {
                className = 'monthview-primary-with-event';
            }
        }
        if (date.selected) {
            if (className) {
                className += ' ';
            }
            className += 'monthview-selected';
        }
        if (date.current) {
            if (className) {
                className += ' ';
            }
            className += 'monthview-current';
        }
        if (date.secondary) {
            if (className) {
                className += ' ';
            }
            className += 'text-muted';
        }
        if (date.disabled) {
            if (className) {
                className += ' ';
            }
            className += 'monthview-disabled';
        }
        return className;
    };
    MonthViewComponent.prototype.getRange = function (currentDate) {
        var year = currentDate.getFullYear(), month = currentDate.getMonth(), firstDayOfMonth = new Date(year, month, 1), difference = this.startingDayMonth - firstDayOfMonth.getDay(), numDisplayedFromPreviousMonth = (difference > 0) ? 7 - difference : -difference, startDate = new Date(firstDayOfMonth.getTime());
        if (numDisplayedFromPreviousMonth > 0) {
            startDate.setDate(-numDisplayedFromPreviousMonth + 1);
        }
        var endDate = new Date(startDate.getTime());
        endDate.setDate(endDate.getDate() + 42);
        return {
            startTime: startDate,
            endTime: endDate
        };
    };
    MonthViewComponent.prototype.onDataLoaded = function () {
        var range = this.range, eventSource = this.eventSource, len = eventSource ? eventSource.length : 0, startTime = range.startTime, endTime = range.endTime, utcStartTime = new Date(Date.UTC(startTime.getFullYear(), startTime.getMonth(), startTime.getDate())), utcEndTime = new Date(Date.UTC(endTime.getFullYear(), endTime.getMonth(), endTime.getDate())), currentViewIndex = this.currentViewIndex, dates = this.views[currentViewIndex].dates, oneDay = 86400000, eps = 0.0006;
        for (var r = 0; r < 42; r += 1) {
            if (dates[r].hasEvent) {
                dates[r].hasEvent = false;
                dates[r].events = [];
            }
        }
        for (var i = 0; i < len; i += 1) {
            var event_1 = eventSource[i], eventStartTime = new Date(event_1.startTime.getTime()), eventEndTime = new Date(event_1.endTime.getTime()), st = void 0, et = void 0;
            if (event_1.allDay) {
                if (eventEndTime <= utcStartTime || eventStartTime >= utcEndTime) {
                    continue;
                }
                else {
                    st = utcStartTime;
                    et = utcEndTime;
                }
            }
            else {
                if (eventEndTime <= startTime || eventStartTime >= endTime) {
                    continue;
                }
                else {
                    st = startTime;
                    et = endTime;
                }
            }
            var timeDiff = void 0;
            var timeDifferenceStart = void 0;
            if (eventStartTime <= st) {
                timeDifferenceStart = 0;
            }
            else {
                timeDiff = eventStartTime.getTime() - st.getTime();
                if (!event_1.allDay) {
                    timeDiff = timeDiff - (eventStartTime.getTimezoneOffset() - st.getTimezoneOffset()) * 60000;
                }
                timeDifferenceStart = timeDiff / oneDay;
            }
            var timeDifferenceEnd = void 0;
            if (eventEndTime >= et) {
                timeDiff = et.getTime() - st.getTime();
                if (!event_1.allDay) {
                    timeDiff = timeDiff - (et.getTimezoneOffset() - st.getTimezoneOffset()) * 60000;
                }
                timeDifferenceEnd = timeDiff / oneDay;
            }
            else {
                timeDiff = eventEndTime.getTime() - st.getTime();
                if (!event_1.allDay) {
                    timeDiff = timeDiff - (eventEndTime.getTimezoneOffset() - st.getTimezoneOffset()) * 60000;
                }
                timeDifferenceEnd = timeDiff / oneDay;
            }
            var index = Math.floor(timeDifferenceStart);
            while (index < timeDifferenceEnd - eps) {
                dates[index].hasEvent = true;
                var eventSet = dates[index].events;
                if (eventSet) {
                    eventSet.push(event_1);
                }
                else {
                    eventSet = [];
                    eventSet.push(event_1);
                    dates[index].events = eventSet;
                }
                index += 1;
            }
        }
        for (var r = 0; r < 42; r += 1) {
            if (dates[r].hasEvent) {
                dates[r].events.sort(this.compareEvent);
            }
        }
        if (this.autoSelect) {
            var findSelected = false;
            for (var r = 0; r < 42; r += 1) {
                if (dates[r].selected) {
                    this.selectedDate = dates[r];
                    findSelected = true;
                    break;
                }
            }
            if (findSelected) {
                this.onTimeSelected.emit({
                    selectedTime: this.selectedDate.date,
                    events: this.selectedDate.events,
                    disabled: this.selectedDate.disabled
                });
            }
        }
    };
    ;
    MonthViewComponent.prototype.refreshView = function () {
        this.range = this.getRange(this.calendarService.currentDate);
        if (this.inited) {
            var title = this.getTitle();
            this.onTitleChanged.emit(title);
        }
        this.calendarService.populateAdjacentViews(this);
        this.updateCurrentView(this.range.startTime, this.views[this.currentViewIndex]);
        this.calendarService.rangeChanged(this);
    };
    MonthViewComponent.prototype.getTitle = function () {
        var currentViewStartDate = this.range.startTime, date = currentViewStartDate.getDate(), month = (currentViewStartDate.getMonth() + (date !== 1 ? 1 : 0)) % 12, year = currentViewStartDate.getFullYear() + (date !== 1 && month === 0 ? 1 : 0), headerDate = new Date(year, month, 1);
        return this.formatTitle(headerDate);
    };
    MonthViewComponent.prototype.compareEvent = function (event1, event2) {
        if (event1.allDay) {
            return 1;
        }
        else if (event2.allDay) {
            return -1;
        }
        else {
            return (event1.startTime.getTime() - event2.startTime.getTime());
        }
    };
    MonthViewComponent.prototype.select = function (viewDate) {
        if (!this.views)
            return;
        var selectedDate = viewDate.date, events = viewDate.events;
        if (!viewDate.disabled) {
            var dates = this.views[this.currentViewIndex].dates, currentCalendarDate = this.calendarService.currentDate, currentMonth = currentCalendarDate.getMonth(), currentYear = currentCalendarDate.getFullYear(), selectedMonth = selectedDate.getMonth(), selectedYear = selectedDate.getFullYear(), direction = 0;
            if (currentYear === selectedYear) {
                if (currentMonth !== selectedMonth) {
                    direction = currentMonth < selectedMonth ? 1 : -1;
                }
            }
            else {
                direction = currentYear < selectedYear ? 1 : -1;
            }
            this.calendarService.setCurrentDate(selectedDate);
            if (direction === 0) {
                var currentViewStartDate = this.range.startTime, oneDay = 86400000, selectedDayDifference = Math.floor((selectedDate.getTime() - currentViewStartDate.getTime() - (selectedDate.getTimezoneOffset() - currentViewStartDate.getTimezoneOffset()) * 60000) / oneDay);
                for (var r = 0; r < 42; r += 1) {
                    dates[r].selected = false;
                }
                if (selectedDayDifference >= 0 && selectedDayDifference < 42) {
                    dates[selectedDayDifference].selected = true;
                    this.selectedDate = dates[selectedDayDifference];
                }
            }
            else {
                this.moveOnSelected = true;
                this.slideView(direction);
            }
        }
        this.onTimeSelected.emit({ selectedTime: selectedDate, events: events, disabled: viewDate.disabled });
    };
    MonthViewComponent.prototype.slideView = function (direction) {
        if (direction === 1) {
            this.slider.slideNext();
        }
        else if (direction === -1) {
            this.slider.slidePrev();
        }
    };
    MonthViewComponent.prototype.updateCurrentView = function (currentViewStartDate, view) {
        var currentCalendarDate = this.calendarService.currentDate, today = new Date(), oneDay = 86400000, selectedDayDifference = Math.floor((currentCalendarDate.getTime() - currentViewStartDate.getTime() - (currentCalendarDate.getTimezoneOffset() - currentViewStartDate.getTimezoneOffset()) * 60000) / oneDay), currentDayDifference = Math.floor((today.getTime() - currentViewStartDate.getTime() - (today.getTimezoneOffset() - currentViewStartDate.getTimezoneOffset()) * 60000) / oneDay);
        for (var r = 0; r < 42; r += 1) {
            view.dates[r].selected = false;
        }
        if (selectedDayDifference >= 0 && selectedDayDifference < 42 && !view.dates[selectedDayDifference].disabled && (this.autoSelect || this.moveOnSelected)) {
            view.dates[selectedDayDifference].selected = true;
            this.selectedDate = view.dates[selectedDayDifference];
        }
        else {
            this.selectedDate = {
                date: null,
                events: [],
                label: null,
                secondary: null,
                disabled: false
            };
        }
        if (currentDayDifference >= 0 && currentDayDifference < 42) {
            view.dates[currentDayDifference].current = true;
        }
    };
    MonthViewComponent.prototype.eventSelected = function (event) {
        this.onEventSelected.emit(event);
    };
    return MonthViewComponent;
}());

MonthViewComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'monthview',
                template: "\n        <div>\n            <ion-slides #monthSlider [loop]=\"true\" [dir]=\"dir\" (ionSlideDidChange)=\"onSlideChanged()\">\n                <ion-slide>\n                    <table *ngIf=\"0===currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr>\n                            <th *ngFor=\"let dayHeader of views[0].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\" tappable (click)=\"select(views[0].dates[row*7+col])\"\n                                [ngClass]=\"getHighlightClass(views[0].dates[row*7+col])\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewDisplayEventTemplate\"\n                                [ngOutletContext]=\"{view: views[0], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                    <table *ngIf=\"0!==currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr class=\"text-center\">\n                            <th *ngFor=\"let dayHeader of views[0].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewInactiveDisplayEventTemplate\"\n                                [ngOutletContext]=\"{view: views[0], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        <tr>\n                        </tbody>\n                    </table>\n                </ion-slide>\n                <ion-slide>\n                    <table *ngIf=\"1===currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr>\n                            <th *ngFor=\"let dayHeader of views[1].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\" tappable (click)=\"select(views[1].dates[row*7+col])\"\n                                [ngClass]=\"getHighlightClass(views[1].dates[row*7+col])\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewDisplayEventTemplate\"\n                                [ngOutletContext]=\"{view: views[1], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                    <table *ngIf=\"1!==currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr class=\"text-center\">\n                            <th *ngFor=\"let dayHeader of views[1].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewInactiveDisplayEventTemplate\"\n                                [ngOutletContext]=\"{view: views[1], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        <tr>\n                        </tbody>\n                    </table>\n                </ion-slide>\n                <ion-slide>\n                    <table *ngIf=\"2===currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr>\n                            <th *ngFor=\"let dayHeader of views[2].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\" tappable (click)=\"select(views[2].dates[row*7+col])\"\n                                [ngClass]=\"getHighlightClass(views[2].dates[row*7+col])\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewDisplayEventTemplate\"\n                                [ngOutletContext]=\"{view: views[2], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                    <table *ngIf=\"2!==currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr class=\"text-center\">\n                            <th *ngFor=\"let dayHeader of views[2].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewInactiveDisplayEventTemplate\"\n                                [ngOutletContext]=\"{view: views[2], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        <tr>\n                        </tbody>\n                    </table>\n                </ion-slide>\n            </ion-slides>\n            <ng-template [ngTemplateOutlet]=\"monthviewEventDetailTemplate\"\n            [ngOutletContext]=\"{showEventDetail:showEventDetail, selectedDate: selectedDate, noEventsLabel: noEventsLabel}\">\n            </ng-template>\n        </div>\n    ",
                styles: ["\n        .text-muted {\n          color: #999;\n        }\n\n        .table-fixed {\n          table-layout: fixed;\n        }\n\n        .table {\n          width: 100%;\n          max-width: 100%;\n          background-color: transparent;\n        }\n\n        .table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td,\n        .table > tbody > tr > td, .table > tfoot > tr > td {\n          padding: 8px;\n          line-height: 20px;\n          vertical-align: top;\n        }\n\n        .table > thead > tr > th {\n          vertical-align: bottom;\n          border-bottom: 2px solid #ddd;\n        }\n\n        .table > thead:first-child > tr:first-child > th, .table > thead:first-child > tr:first-child > td {\n          border-top: 0\n        }\n\n        .table > tbody + tbody {\n          border-top: 2px solid #ddd;\n        }\n\n        .table-bordered {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th,\n        .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > thead > tr > td {\n          border-bottom-width: 2px;\n        }\n\n        .table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th {\n          background-color: #f9f9f9\n        }\n\n        .monthview-primary-with-event {\n          background-color: #3a87ad;\n          color: white;\n        }\n\n        .monthview-current {\n          background-color: #f0f0f0;\n        }\n\n        .monthview-selected {\n          background-color: #009900;\n          color: white;\n        }\n\n        .monthview-datetable td.monthview-disabled {\n            color: lightgrey;\n            cursor: default;\n        }\n\n        .monthview-datetable th {\n          text-align: center;\n        }\n\n        .monthview-datetable td {\n          cursor: pointer;\n          text-align: center;\n        }\n\n        .monthview-secondary-with-event {\n          background-color: #d9edf7;\n        }\n\n        ::-webkit-scrollbar,\n        *::-webkit-scrollbar {\n          display: none;\n        }\n    "]
            },] },
];
MonthViewComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__calendar_service__["a" /* CalendarService */], },
]; };
MonthViewComponent.propDecorators = {
    'slider': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */], args: ['monthSlider',] },],
    'monthviewDisplayEventTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'monthviewInactiveDisplayEventTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'monthviewEventDetailTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'formatDay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'formatDayHeader': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'formatMonthTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'eventSource': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'startingDayMonth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'showEventDetail': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'noEventsLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'autoSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'markDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'locale': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'dateFormatter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'dir': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'lockSwipeToPrev': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'lockSwipes': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'onRangeChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */] },],
    'onEventSelected': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */] },],
    'onTimeSelected': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */] },],
    'onTitleChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */] },],
};
//# sourceMappingURL=monthview.js.map

/***/ }),
/* 398 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeekViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar_service__ = __webpack_require__(272);



var WeekViewComponent = (function () {
    function WeekViewComponent(calendarService, elm) {
        this.calendarService = calendarService;
        this.elm = elm;
        this.class = true;
        this.dir = "";
        this.scrollToHour = 0;
        this.onRangeChanged = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
        this.onEventSelected = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
        this.onTimeSelected = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
        this.onTitleChanged = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */](true);
        this.views = [];
        this.currentViewIndex = 0;
        this.direction = 0;
        this.mode = 'week';
        this.inited = false;
        this.callbackOnInit = true;
    }
    WeekViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dateFormatter && this.dateFormatter.formatWeekViewDayHeader) {
            this.formatDayHeader = this.dateFormatter.formatWeekViewDayHeader;
        }
        else {
            var datePipe = new __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */](this.locale);
            this.formatDayHeader = function (date) {
                return datePipe.transform(date, this.formatWeekViewDayHeader);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatWeekViewTitle) {
            this.formatTitle = this.dateFormatter.formatWeekViewTitle;
        }
        else {
            var datePipe = new __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */](this.locale);
            this.formatTitle = function (date) {
                return datePipe.transform(date, this.formatWeekTitle);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatWeekViewHourColumn) {
            this.formatHourColumnLabel = this.dateFormatter.formatWeekViewHourColumn;
        }
        else {
            var datePipe = new __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */](this.locale);
            this.formatHourColumnLabel = function (date) {
                return datePipe.transform(date, this.formatHourColumn);
            };
        }
        if (this.lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(true);
        }
        if (this.lockSwipes) {
            this.slider.lockSwipes(true);
        }
        this.refreshView();
        this.hourColumnLabels = this.getHourColumnLabels();
        this.inited = true;
        this.currentDateChangedFromParentSubscription = this.calendarService.currentDateChangedFromParent$.subscribe(function (currentDate) {
            _this.refreshView();
        });
        this.eventSourceChangedSubscription = this.calendarService.eventSourceChanged$.subscribe(function () {
            _this.onDataLoaded();
        });
    };
    WeekViewComponent.prototype.ngAfterViewInit = function () {
        var title = this.getTitle();
        this.onTitleChanged.emit(title);
        if (this.scrollToHour > 0) {
            var hourColumns_1 = this.elm.nativeElement.querySelector('.weekview-normal-event-container').querySelectorAll('.calendar-hour-column');
            var me = this;
            setTimeout(function () {
                me.initScrollPosition = hourColumns_1[me.scrollToHour].offsetTop;
            }, 0);
        }
    };
    WeekViewComponent.prototype.ngOnChanges = function (changes) {
        if (!this.inited)
            return;
        var eventSourceChange = changes['eventSource'];
        if (eventSourceChange && eventSourceChange.currentValue) {
            this.onDataLoaded();
        }
        var lockSwipeToPrev = changes['lockSwipeToPrev'];
        if (lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(lockSwipeToPrev.currentValue);
        }
        var lockSwipes = changes['lockSwipesv'];
        if (lockSwipes) {
            this.slider.lockSwipes(lockSwipes.currentValue);
        }
    };
    WeekViewComponent.prototype.ngOnDestroy = function () {
        if (this.currentDateChangedFromParentSubscription) {
            this.currentDateChangedFromParentSubscription.unsubscribe();
            this.currentDateChangedFromParentSubscription = null;
        }
        if (this.eventSourceChangedSubscription) {
            this.eventSourceChangedSubscription.unsubscribe();
            this.eventSourceChangedSubscription = null;
        }
    };
    WeekViewComponent.prototype.onSlideChanged = function () {
        if (this.callbackOnInit) {
            this.callbackOnInit = false;
            return;
        }
        var currentSlideIndex = this.slider.getActiveIndex(), direction = 0, currentViewIndex = this.currentViewIndex;
        currentSlideIndex = (currentSlideIndex + 2) % 3;
        if (currentSlideIndex - currentViewIndex === 1) {
            direction = 1;
        }
        else if (currentSlideIndex === 0 && currentViewIndex === 2) {
            direction = 1;
            this.slider.slideTo(1, 0, false);
        }
        else if (currentViewIndex - currentSlideIndex === 1) {
            direction = -1;
        }
        else if (currentSlideIndex === 2 && currentViewIndex === 0) {
            direction = -1;
            this.slider.slideTo(3, 0, false);
        }
        this.currentViewIndex = currentSlideIndex;
        this.move(direction);
    };
    WeekViewComponent.prototype.move = function (direction) {
        if (direction === 0) {
            return;
        }
        this.direction = direction;
        var adjacent = this.calendarService.getAdjacentCalendarDate(this.mode, direction);
        this.calendarService.setCurrentDate(adjacent);
        this.refreshView();
        this.direction = 0;
    };
    WeekViewComponent.createDateObjects = function (startTime) {
        var times = [], currentHour = startTime.getHours(), currentDate = startTime.getDate();
        for (var hour = 0; hour < 24; hour += 1) {
            var row = [];
            for (var day = 0; day < 7; day += 1) {
                var time = new Date(startTime.getTime());
                time.setHours(currentHour + hour);
                time.setDate(currentDate + day);
                row.push({
                    events: [],
                    time: time
                });
            }
            times.push(row);
        }
        return times;
    };
    WeekViewComponent.getDates = function (startTime, n) {
        var dates = new Array(n), current = new Date(startTime.getTime()), i = 0;
        current.setHours(12);
        while (i < n) {
            dates[i++] = {
                date: new Date(current.getTime()),
                events: []
            };
            current.setDate(current.getDate() + 1);
        }
        return dates;
    };
    WeekViewComponent.prototype.getHourColumnLabels = function () {
        var hourColumnLabels = [];
        for (var hour = 0, length_1 = this.views[0].rows.length; hour < length_1; hour += 1) {
            hourColumnLabels.push(this.formatHourColumnLabel(this.views[0].rows[hour][0].time));
        }
        return hourColumnLabels;
    };
    WeekViewComponent.prototype.getViewData = function (startTime) {
        var dates = WeekViewComponent.getDates(startTime, 7);
        var dayHeaders = [];
        for (var i = 0; i < 7; i++) {
            dayHeaders.push(this.formatDayHeader(dates[i].date));
        }
        return {
            rows: WeekViewComponent.createDateObjects(startTime),
            dates: dates,
            dayHeaders: dayHeaders
        };
    };
    WeekViewComponent.prototype.getRange = function (currentDate) {
        var year = currentDate.getFullYear(), month = currentDate.getMonth(), date = currentDate.getDate(), day = currentDate.getDay(), difference = day - this.startingDayWeek;
        if (difference < 0) {
            difference += 7;
        }
        var firstDayOfWeek = new Date(year, month, date - difference);
        var endTime = new Date(year, month, date - difference + 7);
        return {
            startTime: firstDayOfWeek,
            endTime: endTime
        };
    };
    WeekViewComponent.prototype.onDataLoaded = function () {
        var eventSource = this.eventSource, len = eventSource ? eventSource.length : 0, startTime = this.range.startTime, endTime = this.range.endTime, utcStartTime = new Date(Date.UTC(startTime.getFullYear(), startTime.getMonth(), startTime.getDate())), utcEndTime = new Date(Date.UTC(endTime.getFullYear(), endTime.getMonth(), endTime.getDate())), currentViewIndex = this.currentViewIndex, rows = this.views[currentViewIndex].rows, dates = this.views[currentViewIndex].dates, oneHour = 3600000, oneDay = 86400000, eps = 0.016, allDayEventInRange = false, normalEventInRange = false;
        for (var i = 0; i < 7; i += 1) {
            dates[i].events = [];
        }
        for (var day = 0; day < 7; day += 1) {
            for (var hour = 0; hour < 24; hour += 1) {
                rows[hour][day].events = [];
            }
        }
        for (var i = 0; i < len; i += 1) {
            var event_1 = eventSource[i];
            var eventStartTime = new Date(event_1.startTime.getTime());
            var eventEndTime = new Date(event_1.endTime.getTime());
            if (event_1.allDay) {
                if (eventEndTime <= utcStartTime || eventStartTime >= utcEndTime) {
                    continue;
                }
                else {
                    allDayEventInRange = true;
                    var allDayStartIndex = void 0;
                    if (eventStartTime <= utcStartTime) {
                        allDayStartIndex = 0;
                    }
                    else {
                        allDayStartIndex = Math.floor((eventStartTime.getTime() - utcStartTime.getTime()) / oneDay);
                    }
                    var allDayEndIndex = void 0;
                    if (eventEndTime >= utcEndTime) {
                        allDayEndIndex = Math.ceil((utcEndTime.getTime() - utcStartTime.getTime()) / oneDay);
                    }
                    else {
                        allDayEndIndex = Math.ceil((eventEndTime.getTime() - utcStartTime.getTime()) / oneDay);
                    }
                    var displayAllDayEvent = {
                        event: event_1,
                        startIndex: allDayStartIndex,
                        endIndex: allDayEndIndex
                    };
                    var eventSet = dates[allDayStartIndex].events;
                    if (eventSet) {
                        eventSet.push(displayAllDayEvent);
                    }
                    else {
                        eventSet = [];
                        eventSet.push(displayAllDayEvent);
                        dates[allDayStartIndex].events = eventSet;
                    }
                }
            }
            else {
                if (eventEndTime <= startTime || eventStartTime >= endTime) {
                    continue;
                }
                else {
                    normalEventInRange = true;
                    var timeDiff = void 0;
                    var timeDifferenceStart = void 0;
                    if (eventStartTime <= startTime) {
                        timeDifferenceStart = 0;
                    }
                    else {
                        timeDiff = eventStartTime.getTime() - startTime.getTime() - (eventStartTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                        timeDifferenceStart = timeDiff / oneHour;
                    }
                    var timeDifferenceEnd = void 0;
                    if (eventEndTime >= endTime) {
                        timeDiff = endTime.getTime() - startTime.getTime() - (endTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                        timeDifferenceEnd = timeDiff / oneHour;
                    }
                    else {
                        timeDiff = eventEndTime.getTime() - startTime.getTime() - (eventEndTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                        timeDifferenceEnd = timeDiff / oneHour;
                    }
                    var startIndex = Math.floor(timeDifferenceStart), endIndex = Math.ceil(timeDifferenceEnd - eps), startRowIndex = startIndex % 24, dayIndex = Math.floor(startIndex / 24), endOfDay = dayIndex * 24, startOffset = 0, endOffset = 0;
                    if (this.hourParts !== 1) {
                        startOffset = Math.floor((timeDifferenceStart - startIndex) * this.hourParts);
                    }
                    do {
                        endOfDay += 24;
                        var endRowIndex = void 0;
                        if (endOfDay <= endIndex) {
                            endRowIndex = 24;
                        }
                        else {
                            endRowIndex = endIndex % 24;
                            if (this.hourParts !== 1) {
                                endOffset = Math.floor((endIndex - timeDifferenceEnd) * this.hourParts);
                            }
                        }
                        var displayEvent = {
                            event: event_1,
                            startIndex: startRowIndex,
                            endIndex: endRowIndex,
                            startOffset: startOffset,
                            endOffset: endOffset
                        };
                        var eventSet = rows[startRowIndex][dayIndex].events;
                        if (eventSet) {
                            eventSet.push(displayEvent);
                        }
                        else {
                            eventSet = [];
                            eventSet.push(displayEvent);
                            rows[startRowIndex][dayIndex].events = eventSet;
                        }
                        startRowIndex = 0;
                        startOffset = 0;
                        dayIndex += 1;
                    } while (endOfDay < endIndex);
                }
            }
        }
        if (normalEventInRange) {
            for (var day = 0; day < 7; day += 1) {
                var orderedEvents = [];
                for (var hour = 0; hour < 24; hour += 1) {
                    if (rows[hour][day].events) {
                        rows[hour][day].events.sort(WeekViewComponent.compareEventByStartOffset);
                        orderedEvents = orderedEvents.concat(rows[hour][day].events);
                    }
                }
                if (orderedEvents.length > 0) {
                    this.placeEvents(orderedEvents);
                }
            }
        }
        if (allDayEventInRange) {
            var orderedAllDayEvents = [];
            for (var day = 0; day < 7; day += 1) {
                if (dates[day].events) {
                    orderedAllDayEvents = orderedAllDayEvents.concat(dates[day].events);
                }
            }
            if (orderedAllDayEvents.length > 0) {
                this.placeAllDayEvents(orderedAllDayEvents);
            }
        }
    };
    WeekViewComponent.prototype.refreshView = function () {
        this.range = this.getRange(this.calendarService.currentDate);
        if (this.inited) {
            var title = this.getTitle();
            this.onTitleChanged.emit(title);
        }
        this.calendarService.populateAdjacentViews(this);
        this.calendarService.rangeChanged(this);
    };
    WeekViewComponent.prototype.getTitle = function () {
        var firstDayOfWeek = this.range.startTime, weekFormat = '$n', weekNumberIndex = this.formatWeekTitle.indexOf(weekFormat), title = this.formatTitle(firstDayOfWeek);
        if (weekNumberIndex !== -1) {
            var weekNumber = String(WeekViewComponent.getISO8601WeekNumber(firstDayOfWeek));
            title = title.replace(weekFormat, weekNumber);
        }
        return title;
    };
    WeekViewComponent.getISO8601WeekNumber = function (date) {
        var dayOfWeekOnFirst = (new Date(date.getFullYear(), 0, 1)).getDay();
        var firstThurs = new Date(date.getFullYear(), 0, ((dayOfWeekOnFirst <= 4) ? 5 : 12) - dayOfWeekOnFirst);
        var thisThurs = new Date(date.getFullYear(), date.getMonth(), date.getDate() + (4 - date.getDay()));
        var diff = +thisThurs - +firstThurs;
        return (1 + Math.round(diff / 6.048e8));
    };
    WeekViewComponent.compareEventByStartOffset = function (eventA, eventB) {
        return eventA.startOffset - eventB.startOffset;
    };
    WeekViewComponent.prototype.select = function (selectedTime, events) {
        var disabled = false;
        if (this.markDisabled) {
            disabled = this.markDisabled(selectedTime);
        }
        this.onTimeSelected.emit({
            selectedTime: selectedTime,
            events: events.map(function (e) { return e.event; }),
            disabled: disabled
        });
    };
    WeekViewComponent.prototype.placeEvents = function (orderedEvents) {
        this.calculatePosition(orderedEvents);
        WeekViewComponent.calculateWidth(orderedEvents);
    };
    WeekViewComponent.prototype.placeAllDayEvents = function (orderedEvents) {
        this.calculatePosition(orderedEvents);
    };
    WeekViewComponent.prototype.overlap = function (event1, event2) {
        var earlyEvent = event1, lateEvent = event2;
        if (event1.startIndex > event2.startIndex || (event1.startIndex === event2.startIndex && event1.startOffset > event2.startOffset)) {
            earlyEvent = event2;
            lateEvent = event1;
        }
        if (earlyEvent.endIndex <= lateEvent.startIndex) {
            return false;
        }
        else {
            return !(earlyEvent.endIndex - lateEvent.startIndex === 1 && earlyEvent.endOffset + lateEvent.startOffset > this.hourParts);
        }
    };
    WeekViewComponent.prototype.calculatePosition = function (events) {
        var len = events.length, maxColumn = 0, isForbidden = new Array(len);
        for (var i = 0; i < len; i += 1) {
            var col = void 0;
            for (col = 0; col < maxColumn; col += 1) {
                isForbidden[col] = false;
            }
            for (var j = 0; j < i; j += 1) {
                if (this.overlap(events[i], events[j])) {
                    isForbidden[events[j].position] = true;
                }
            }
            for (col = 0; col < maxColumn; col += 1) {
                if (!isForbidden[col]) {
                    break;
                }
            }
            if (col < maxColumn) {
                events[i].position = col;
            }
            else {
                events[i].position = maxColumn++;
            }
        }
        if (this.dir === 'rtl') {
            for (var i = 0; i < len; i += 1) {
                events[i].position = maxColumn - 1 - events[i].position;
            }
        }
    };
    WeekViewComponent.calculateWidth = function (orderedEvents) {
        var cells = new Array(24);
        orderedEvents.sort(function (eventA, eventB) {
            return eventB.position - eventA.position;
        });
        for (var i_1 = 0; i_1 < 24; i_1 += 1) {
            cells[i_1] = {
                calculated: false,
                events: []
            };
        }
        var len = orderedEvents.length;
        for (var i_2 = 0; i_2 < len; i_2 += 1) {
            var event_2 = orderedEvents[i_2];
            var index = event_2.startIndex;
            while (index < event_2.endIndex) {
                cells[index].events.push(event_2);
                index += 1;
            }
        }
        var i = 0;
        while (i < len) {
            var event_3 = orderedEvents[i];
            if (!event_3.overlapNumber) {
                var overlapNumber = event_3.position + 1;
                event_3.overlapNumber = overlapNumber;
                var eventQueue = [event_3];
                while ((event_3 = eventQueue.shift())) {
                    var index = event_3.startIndex;
                    while (index < event_3.endIndex) {
                        if (!cells[index].calculated) {
                            cells[index].calculated = true;
                            if (cells[index].events) {
                                var eventCountInCell = cells[index].events.length;
                                for (var j = 0; j < eventCountInCell; j += 1) {
                                    var currentEventInCell = cells[index].events[j];
                                    if (!currentEventInCell.overlapNumber) {
                                        currentEventInCell.overlapNumber = overlapNumber;
                                        eventQueue.push(currentEventInCell);
                                    }
                                }
                            }
                        }
                        index += 1;
                    }
                }
            }
            i += 1;
        }
    };
    WeekViewComponent.prototype.eventSelected = function (event) {
        this.onEventSelected.emit(event);
    };
    WeekViewComponent.prototype.setScrollPosition = function (scrollPosition) {
        this.initScrollPosition = scrollPosition;
    };
    return WeekViewComponent;
}());

WeekViewComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */], args: [{
                selector: 'weekview',
                template: "\n        <ion-slides #weekSlider [loop]=\"true\" [dir]=\"dir\" (ionSlideDidChange)=\"onSlideChanged()\">\n            <ion-slide>\n                <table class=\"table table-bordered table-fixed weekview-header\">\n                    <thead>\n                    <tr>\n                        <th class=\"calendar-hour-column\"></th>\n                        <th class=\"weekview-header text-center\" *ngFor=\"let dayHeader of views[0].dayHeaders\">{{dayHeader}}\n                        </th>\n                    </tr>\n                    </thead>\n                </table>\n                <div *ngIf=\"0===currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <ion-scroll scrollY=\"true\" class=\"weekview-allday-content-wrapper\" zoom=\"false\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[0].dates\" class=\"calendar-cell\">\n                                        <div [ngClass]=\"{'calendar-event-wrap': day.events}\" *ngIf=\"day.events\"\n                                             [ngStyle]=\"{height: 25*day.events.length+'px'}\">\n                                            <div *ngFor=\"let displayEvent of day.events\" class=\"calendar-event\" tappable\n                                                 (click)=\"eventSelected(displayEvent.event)\"\n                                                 [ngStyle]=\"{top: 25*displayEvent.position+'px', width: 100*(displayEvent.endIndex-displayEvent.startIndex)+'%', height: '25px'}\">\n                                                <ng-template [ngTemplateOutlet]=\"weekviewAllDayEventTemplate\"\n                                                    [ngOutletContext]=\"{displayEvent:displayEvent}\">\n                                                </ng-template>\n                                            </div>\n                                        </div>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </ion-scroll>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\" [emitEvent]=\"preserveScrollPosition\" (onScroll)=\"setScrollPosition($event)\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[0].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\" tappable (click)=\"select(tm.time, tm.events)\">\n                                    <div [ngClass]=\"{'calendar-event-wrap': tm.events}\" *ngIf=\"tm.events\">\n                                        <div *ngFor=\"let displayEvent of tm.events\" class=\"calendar-event\" tappable\n                                             (click)=\"eventSelected(displayEvent.event)\"\n                                             [ngStyle]=\"{top: (37*displayEvent.startOffset/hourParts)+'px',left: 100/displayEvent.overlapNumber*displayEvent.position+'%', width: 100/displayEvent.overlapNumber+'%', height: 37*(displayEvent.endIndex -displayEvent.startIndex - (displayEvent.endOffset + displayEvent.startOffset)/hourParts)+'px'}\">\n                                             <ng-template [ngTemplateOutlet]=\"weekviewNormalEventTemplate\"\n                                                 [ngOutletContext]=\"{displayEvent:displayEvent}\">\n                                             </ng-template>\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n                <div *ngIf=\"0!==currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <ion-scroll scrollY=\"true\" class=\"weekview-allday-content-wrapper\" zoom=\"false\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[0].dates\" class=\"calendar-cell\">\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </ion-scroll>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[0].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\">\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <table class=\"table table-bordered table-fixed weekview-header\">\n                    <thead>\n                    <tr>\n                        <th class=\"calendar-hour-column\"></th>\n                        <th class=\"weekview-header text-center\" *ngFor=\"let dayHeader of views[1].dayHeaders\">{{dayHeader}}\n                        </th>\n                    </tr>\n                    </thead>\n                </table>\n                <div *ngIf=\"1===currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <ion-scroll scrollY=\"true\" class=\"weekview-allday-content-wrapper\" zoom=\"false\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[1].dates\" class=\"calendar-cell\">\n                                        <div [ngClass]=\"{'calendar-event-wrap': day.events}\" *ngIf=\"day.events\"\n                                             [ngStyle]=\"{height: 25*day.events.length+'px'}\">\n                                            <div *ngFor=\"let displayEvent of day.events\" class=\"calendar-event\" tappable\n                                                 (click)=\"eventSelected(displayEvent.event)\"\n                                                 [ngStyle]=\"{top: 25*displayEvent.position+'px', width: 100*(displayEvent.endIndex-displayEvent.startIndex)+'%', height: '25px'}\">\n                                                <ng-template [ngTemplateOutlet]=\"weekviewAllDayEventTemplate\"\n                                                    [ngOutletContext]=\"{displayEvent:displayEvent}\">\n                                                </ng-template>\n                                            </div>\n                                        </div>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </ion-scroll>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\" [emitEvent]=\"preserveScrollPosition\" (onScroll)=\"setScrollPosition($event)\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[1].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\" tappable (click)=\"select(tm.time, tm.events)\">\n                                    <div [ngClass]=\"{'calendar-event-wrap': tm.events}\" *ngIf=\"tm.events\">\n                                        <div *ngFor=\"let displayEvent of tm.events\" class=\"calendar-event\" tappable\n                                             (click)=\"eventSelected(displayEvent.event)\"\n                                             [ngStyle]=\"{top: (37*displayEvent.startOffset/hourParts)+'px',left: 100/displayEvent.overlapNumber*displayEvent.position+'%', width: 100/displayEvent.overlapNumber+'%', height: 37*(displayEvent.endIndex -displayEvent.startIndex - (displayEvent.endOffset + displayEvent.startOffset)/hourParts)+'px'}\">\n                                             <ng-template [ngTemplateOutlet]=\"weekviewNormalEventTemplate\"\n                                                 [ngOutletContext]=\"{displayEvent:displayEvent}\">\n                                             </ng-template>\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n                <div *ngIf=\"1!==currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <ion-scroll scrollY=\"true\" class=\"weekview-allday-content-wrapper\" zoom=\"false\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[1].dates\" class=\"calendar-cell\">\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </ion-scroll>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[1].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\">\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <table class=\"table table-bordered table-fixed weekview-header\">\n                    <thead>\n                    <tr>\n                        <th class=\"calendar-hour-column\"></th>\n                        <th class=\"weekview-header text-center\" *ngFor=\"let dayHeader of views[2].dayHeaders\">{{dayHeader}}\n                        </th>\n                    </tr>\n                    </thead>\n                </table>\n                <div *ngIf=\"2===currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <ion-scroll scrollY=\"true\" class=\"weekview-allday-content-wrapper\" zoom=\"false\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[2].dates\" class=\"calendar-cell\">\n                                        <div [ngClass]=\"{'calendar-event-wrap': day.events}\" *ngIf=\"day.events\"\n                                             [ngStyle]=\"{height: 25*day.events.length+'px'}\">\n                                            <div *ngFor=\"let displayEvent of day.events\" class=\"calendar-event\" tappable\n                                                 (click)=\"eventSelected(displayEvent.event)\"\n                                                 [ngStyle]=\"{top: 25*displayEvent.position+'px', width: 100*(displayEvent.endIndex-displayEvent.startIndex)+'%', height: '25px'}\">\n                                                <ng-template [ngTemplateOutlet]=\"weekviewAllDayEventTemplate\"\n                                                    [ngOutletContext]=\"{displayEvent:displayEvent}\">\n                                                </ng-template>\n                                            </div>\n                                        </div>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </ion-scroll>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\" [emitEvent]=\"preserveScrollPosition\" (onScroll)=\"setScrollPosition($event)\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[2].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\" tappable (click)=\"select(tm.time, tm.events)\">\n                                    <div [ngClass]=\"{'calendar-event-wrap': tm.events}\" *ngIf=\"tm.events\">\n                                        <div *ngFor=\"let displayEvent of tm.events\" class=\"calendar-event\" tappable\n                                             (click)=\"eventSelected(displayEvent.event)\"\n                                             [ngStyle]=\"{top: (37*displayEvent.startOffset/hourParts)+'px',left: 100/displayEvent.overlapNumber*displayEvent.position+'%', width: 100/displayEvent.overlapNumber+'%', height: 37*(displayEvent.endIndex -displayEvent.startIndex - (displayEvent.endOffset + displayEvent.startOffset)/hourParts)+'px'}\">\n                                             <ng-template [ngTemplateOutlet]=\"weekviewNormalEventTemplate\"\n                                                 [ngOutletContext]=\"{displayEvent:displayEvent}\">\n                                             </ng-template>\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n                <div *ngIf=\"2!==currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <ion-scroll scrollY=\"true\" class=\"weekview-allday-content-wrapper\" zoom=\"false\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[2].dates\" class=\"calendar-cell\">\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </ion-scroll>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[2].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\">\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n            </ion-slide>\n        </ion-slides>\n    ",
                styles: ["\n        .table-fixed {\n          table-layout: fixed;\n        }\n\n        .table {\n          width: 100%;\n          max-width: 100%;\n          background-color: transparent;\n        }\n\n        .table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td,\n        .table > tbody > tr > td, .table > tfoot > tr > td {\n          padding: 8px;\n          line-height: 20px;\n          vertical-align: top;\n        }\n\n        .table > thead > tr > th {\n          vertical-align: bottom;\n          border-bottom: 2px solid #ddd;\n        }\n\n        .table > thead:first-child > tr:first-child > th, .table > thead:first-child > tr:first-child > td {\n          border-top: 0\n        }\n\n        .table > tbody + tbody {\n          border-top: 2px solid #ddd;\n        }\n\n        .table-bordered {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th,\n        .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > thead > tr > td {\n          border-bottom-width: 2px;\n        }\n\n        .table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th {\n          background-color: #f9f9f9\n        }\n\n        .calendar-hour-column {\n          width: 50px;\n          white-space: nowrap;\n        }\n\n        .calendar-event-wrap {\n          position: relative;\n          width: 100%;\n          height: 100%;\n        }\n\n        .calendar-event {\n          position: absolute;\n          padding: 2px;\n          cursor: pointer;\n          z-index: 10000;\n        }\n\n        .calendar-cell {\n          padding: 0 !important;\n          height: 37px;\n        }\n\n        .weekview-allday-label {\n          float: left;\n          height: 100%;\n          line-height: 50px;\n          text-align: center;\n          width: 50px;\n        }\n\n        [dir=\"rtl\"] .weekview-allday-label {\n            float: right;\n            border-right: 1px solid #ddd;\n        }\n\n        .weekview-allday-content-wrapper {\n          margin-left: 50px;\n          overflow: hidden;\n          height: 51px;\n        }\n\n        [dir=\"rtl\"] .weekview-allday-content-wrapper {\n          margin-left: 0;\n          margin-right: 50px;\n        }\n\n        .weekview-allday-content-table {\n          min-height: 50px;\n        }\n\n        .weekview-allday-content-table td {\n          border-left: 1px solid #ddd;\n          border-right: 1px solid #ddd;\n        }\n\n        .weekview-header th {\n          overflow: hidden;\n          white-space: nowrap;\n          font-size: 14px;\n        }\n\n        .weekview-allday-table {\n          height: 50px;\n          position: relative;\n          border-bottom: 1px solid #ddd;\n          font-size: 14px;\n        }\n\n        .weekview-normal-event-container {\n          margin-top: 87px;\n          overflow: hidden;\n          left: 0;\n          right: 0;\n          top: 0;\n          bottom: 0;\n          position: absolute;\n          font-size: 14px;\n        }\n\n        .weekview .slide-zoom {\n          height: 100%;\n        }\n\n        .weekview-allday-content-wrapper scroll-content {\n          width: 100%;\n        }\n\n        ::-webkit-scrollbar,\n        *::-webkit-scrollbar {\n          display: none;\n        }\n\n        .table > tbody > tr > td.calendar-hour-column {\n          padding-left: 0;\n          padding-right: 0;\n          vertical-align: middle;\n        }\n\n        @media (max-width: 750px) {\n          .weekview-allday-label, .calendar-hour-column {\n            width: 31px;\n            font-size: 12px;\n          }\n\n          .weekview-allday-label {\n            padding-top: 4px;\n          }\n\n          .table > tbody > tr > td.calendar-hour-column {\n            padding-left: 0;\n            padding-right: 0;\n            vertical-align: middle;\n            line-height: 12px;\n          }\n\n          .table > thead > tr > th.weekview-header {\n            padding-left: 0;\n            padding-right: 0;\n            font-size: 12px;\n          }\n\n          .weekview-allday-label {\n            line-height: 20px;\n          }\n\n          .weekview-allday-content-wrapper {\n            margin-left: 31px;\n          }\n\n          [dir=\"rtl\"] .weekview-allday-content-wrapper {\n            margin-left: 0;\n            margin-right: 31px;\n          }\n        }\n    "],
                encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* ViewEncapsulation */].None
            },] },
];
WeekViewComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__calendar_service__["a" /* CalendarService */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
]; };
WeekViewComponent.propDecorators = {
    'slider': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewChild */], args: ['weekSlider',] },],
    'class': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* HostBinding */], args: ['class.weekview',] },],
    'weekviewAllDayEventTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'weekviewNormalEventTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'formatWeekTitle': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'formatWeekViewDayHeader': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'formatHourColumn': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'startingDayWeek': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'allDayLabel': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'hourParts': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'eventSource': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'markDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'locale': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'dateFormatter': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'dir': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'scrollToHour': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'preserveScrollPosition': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'lockSwipeToPrev': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'lockSwipes': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'onRangeChanged': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["S" /* Output */] },],
    'onEventSelected': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["S" /* Output */] },],
    'onTimeSelected': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["S" /* Output */] },],
    'onTitleChanged': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["S" /* Output */] },],
};
//# sourceMappingURL=weekview.js.map

/***/ }),
/* 399 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DayViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar_service__ = __webpack_require__(272);



var DayViewComponent = (function () {
    function DayViewComponent(calendarService, elm) {
        this.calendarService = calendarService;
        this.elm = elm;
        this.class = true;
        this.dir = "";
        this.scrollToHour = 0;
        this.onRangeChanged = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
        this.onEventSelected = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
        this.onTimeSelected = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
        this.onTitleChanged = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */](true);
        this.slideOption = {
            runCallbacksOnInit: false,
            loop: true
        };
        this.views = [];
        this.currentViewIndex = 0;
        this.direction = 0;
        this.mode = 'day';
        this.inited = false;
        this.callbackOnInit = true;
    }
    DayViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dateFormatter && this.dateFormatter.formatDayViewTitle) {
            this.formatTitle = this.dateFormatter.formatDayViewTitle;
        }
        else {
            var datePipe = new __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */](this.locale);
            this.formatTitle = function (date) {
                return datePipe.transform(date, this.formatDayTitle);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatDayViewHourColumn) {
            this.formatHourColumnLabel = this.dateFormatter.formatDayViewHourColumn;
        }
        else {
            var datePipe = new __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */](this.locale);
            this.formatHourColumnLabel = function (date) {
                return datePipe.transform(date, this.formatHourColumn);
            };
        }
        if (this.lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(true);
        }
        if (this.lockSwipes) {
            this.slider.lockSwipes(true);
        }
        this.refreshView();
        this.hourColumnLabels = this.getHourColumnLabels();
        this.inited = true;
        this.currentDateChangedFromParentSubscription = this.calendarService.currentDateChangedFromParent$.subscribe(function (currentDate) {
            _this.refreshView();
        });
        this.eventSourceChangedSubscription = this.calendarService.eventSourceChanged$.subscribe(function () {
            _this.onDataLoaded();
        });
    };
    DayViewComponent.prototype.ngAfterViewInit = function () {
        var title = this.getTitle();
        this.onTitleChanged.emit(title);
        if (this.scrollToHour > 0) {
            var hourColumns_1 = this.elm.nativeElement.querySelector('.dayview-normal-event-container').querySelectorAll('.calendar-hour-column');
            var me = this;
            setTimeout(function () {
                me.initScrollPosition = hourColumns_1[me.scrollToHour].offsetTop;
            }, 0);
        }
    };
    DayViewComponent.prototype.ngOnChanges = function (changes) {
        if (!this.inited)
            return;
        var eventSourceChange = changes['eventSource'];
        if (eventSourceChange && eventSourceChange.currentValue) {
            this.onDataLoaded();
        }
        var lockSwipeToPrev = changes['lockSwipeToPrev'];
        if (lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(lockSwipeToPrev.currentValue);
        }
        var lockSwipes = changes['lockSwipes'];
        if (lockSwipes) {
            this.slider.lockSwipes(lockSwipes.currentValue);
        }
    };
    DayViewComponent.prototype.ngOnDestroy = function () {
        if (this.currentDateChangedFromParentSubscription) {
            this.currentDateChangedFromParentSubscription.unsubscribe();
            this.currentDateChangedFromParentSubscription = null;
        }
        if (this.eventSourceChangedSubscription) {
            this.eventSourceChangedSubscription.unsubscribe();
            this.eventSourceChangedSubscription = null;
        }
    };
    DayViewComponent.prototype.onSlideChanged = function () {
        if (this.callbackOnInit) {
            this.callbackOnInit = false;
            return;
        }
        var currentSlideIndex = this.slider.getActiveIndex(), direction = 0, currentViewIndex = this.currentViewIndex;
        currentSlideIndex = (currentSlideIndex + 2) % 3;
        if (currentSlideIndex - currentViewIndex === 1) {
            direction = 1;
        }
        else if (currentSlideIndex === 0 && currentViewIndex === 2) {
            direction = 1;
            this.slider.slideTo(1, 0, false);
        }
        else if (currentViewIndex - currentSlideIndex === 1) {
            direction = -1;
        }
        else if (currentSlideIndex === 2 && currentViewIndex === 0) {
            direction = -1;
            this.slider.slideTo(3, 0, false);
        }
        this.currentViewIndex = currentSlideIndex;
        this.move(direction);
    };
    DayViewComponent.prototype.move = function (direction) {
        if (direction === 0)
            return;
        this.direction = direction;
        var adjacentDate = this.calendarService.getAdjacentCalendarDate(this.mode, direction);
        this.calendarService.setCurrentDate(adjacentDate);
        this.refreshView();
        this.direction = 0;
    };
    DayViewComponent.createDateObjects = function (startTime) {
        var rows = [], time, currentHour = startTime.getHours(), currentDate = startTime.getDate();
        for (var hour = 0; hour < 24; hour += 1) {
            time = new Date(startTime.getTime());
            time.setHours(currentHour + hour);
            time.setDate(currentDate);
            rows.push({
                time: time,
                events: []
            });
        }
        return rows;
    };
    DayViewComponent.prototype.getHourColumnLabels = function () {
        var hourColumnLabels = [];
        for (var hour = 0, length_1 = this.views[0].rows.length; hour < length_1; hour += 1) {
            hourColumnLabels.push(this.formatHourColumnLabel(this.views[0].rows[hour].time));
        }
        return hourColumnLabels;
    };
    DayViewComponent.prototype.getViewData = function (startTime) {
        return {
            rows: DayViewComponent.createDateObjects(startTime),
            allDayEvents: []
        };
    };
    DayViewComponent.prototype.getRange = function (currentDate) {
        var year = currentDate.getFullYear(), month = currentDate.getMonth(), date = currentDate.getDate(), startTime = new Date(year, month, date), endTime = new Date(year, month, date + 1);
        return {
            startTime: startTime,
            endTime: endTime
        };
    };
    DayViewComponent.prototype.onDataLoaded = function () {
        var eventSource = this.eventSource, len = eventSource ? eventSource.length : 0, startTime = this.range.startTime, endTime = this.range.endTime, utcStartTime = new Date(Date.UTC(startTime.getFullYear(), startTime.getMonth(), startTime.getDate())), utcEndTime = new Date(Date.UTC(endTime.getFullYear(), endTime.getMonth(), endTime.getDate())), currentViewIndex = this.currentViewIndex, rows = this.views[currentViewIndex].rows, allDayEvents = this.views[currentViewIndex].allDayEvents = [], oneHour = 3600000, eps = 0.016, normalEventInRange = false;
        for (var hour = 0; hour < 24; hour += 1) {
            rows[hour].events = [];
        }
        for (var i = 0; i < len; i += 1) {
            var event_1 = eventSource[i];
            var eventStartTime = new Date(event_1.startTime.getTime());
            var eventEndTime = new Date(event_1.endTime.getTime());
            if (event_1.allDay) {
                if (eventEndTime <= utcStartTime || eventStartTime >= utcEndTime) {
                    continue;
                }
                else {
                    allDayEvents.push({
                        event: event_1
                    });
                }
            }
            else {
                if (eventEndTime <= startTime || eventStartTime >= endTime) {
                    continue;
                }
                else {
                    normalEventInRange = true;
                }
                var timeDiff = void 0;
                var timeDifferenceStart = void 0;
                if (eventStartTime <= startTime) {
                    timeDifferenceStart = 0;
                }
                else {
                    timeDiff = eventStartTime.getTime() - startTime.getTime() - (eventStartTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                    timeDifferenceStart = timeDiff / oneHour;
                }
                var timeDifferenceEnd = void 0;
                if (eventEndTime >= endTime) {
                    timeDiff = endTime.getTime() - startTime.getTime() - (endTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                    timeDifferenceEnd = timeDiff / oneHour;
                }
                else {
                    timeDiff = eventEndTime.getTime() - startTime.getTime() - (eventEndTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                    timeDifferenceEnd = timeDiff / oneHour;
                }
                var startIndex = Math.floor(timeDifferenceStart);
                var endIndex = Math.ceil(timeDifferenceEnd - eps);
                var startOffset = 0;
                var endOffset = 0;
                if (this.hourParts !== 1) {
                    startOffset = Math.floor((timeDifferenceStart - startIndex) * this.hourParts);
                    endOffset = Math.floor((endIndex - timeDifferenceEnd) * this.hourParts);
                }
                var displayEvent = {
                    event: event_1,
                    startIndex: startIndex,
                    endIndex: endIndex,
                    startOffset: startOffset,
                    endOffset: endOffset
                };
                var eventSet = rows[startIndex].events;
                if (eventSet) {
                    eventSet.push(displayEvent);
                }
                else {
                    eventSet = [];
                    eventSet.push(displayEvent);
                    rows[startIndex].events = eventSet;
                }
            }
        }
        if (normalEventInRange) {
            var orderedEvents = [];
            for (var hour = 0; hour < 24; hour += 1) {
                if (rows[hour].events) {
                    rows[hour].events.sort(DayViewComponent.compareEventByStartOffset);
                    orderedEvents = orderedEvents.concat(rows[hour].events);
                }
            }
            if (orderedEvents.length > 0) {
                this.placeEvents(orderedEvents);
            }
        }
    };
    DayViewComponent.prototype.refreshView = function () {
        this.range = this.getRange(this.calendarService.currentDate);
        if (this.inited) {
            var title = this.getTitle();
            this.onTitleChanged.emit(title);
        }
        this.calendarService.populateAdjacentViews(this);
        this.calendarService.rangeChanged(this);
    };
    DayViewComponent.prototype.getTitle = function () {
        var startingDate = this.range.startTime;
        return this.formatTitle(startingDate);
    };
    DayViewComponent.compareEventByStartOffset = function (eventA, eventB) {
        return eventA.startOffset - eventB.startOffset;
    };
    DayViewComponent.prototype.select = function (selectedTime, events) {
        var disabled = false;
        if (this.markDisabled) {
            disabled = this.markDisabled(selectedTime);
        }
        this.onTimeSelected.emit({
            selectedTime: selectedTime,
            events: events.map(function (e) { return e.event; }),
            disabled: disabled
        });
    };
    DayViewComponent.prototype.placeEvents = function (orderedEvents) {
        this.calculatePosition(orderedEvents);
        DayViewComponent.calculateWidth(orderedEvents);
    };
    DayViewComponent.prototype.placeAllDayEvents = function (orderedEvents) {
        this.calculatePosition(orderedEvents);
    };
    DayViewComponent.prototype.overlap = function (event1, event2) {
        var earlyEvent = event1, lateEvent = event2;
        if (event1.startIndex > event2.startIndex || (event1.startIndex === event2.startIndex && event1.startOffset > event2.startOffset)) {
            earlyEvent = event2;
            lateEvent = event1;
        }
        if (earlyEvent.endIndex <= lateEvent.startIndex) {
            return false;
        }
        else {
            return !(earlyEvent.endIndex - lateEvent.startIndex === 1 && earlyEvent.endOffset + lateEvent.startOffset > this.hourParts);
        }
    };
    DayViewComponent.prototype.calculatePosition = function (events) {
        var len = events.length, maxColumn = 0, col, isForbidden = new Array(len);
        for (var i = 0; i < len; i += 1) {
            for (col = 0; col < maxColumn; col += 1) {
                isForbidden[col] = false;
            }
            for (var j = 0; j < i; j += 1) {
                if (this.overlap(events[i], events[j])) {
                    isForbidden[events[j].position] = true;
                }
            }
            for (col = 0; col < maxColumn; col += 1) {
                if (!isForbidden[col]) {
                    break;
                }
            }
            if (col < maxColumn) {
                events[i].position = col;
            }
            else {
                events[i].position = maxColumn++;
            }
        }
        if (this.dir === 'rtl') {
            for (var i = 0; i < len; i += 1) {
                events[i].position = maxColumn - 1 - events[i].position;
            }
        }
    };
    DayViewComponent.calculateWidth = function (orderedEvents) {
        var cells = new Array(24);
        orderedEvents.sort(function (eventA, eventB) {
            return eventB.position - eventA.position;
        });
        for (var i_1 = 0; i_1 < 24; i_1 += 1) {
            cells[i_1] = {
                calculated: false,
                events: []
            };
        }
        var len = orderedEvents.length;
        for (var i_2 = 0; i_2 < len; i_2 += 1) {
            var event_2 = orderedEvents[i_2];
            var index = event_2.startIndex;
            while (index < event_2.endIndex) {
                cells[index].events.push(event_2);
                index += 1;
            }
        }
        var i = 0;
        while (i < len) {
            var event_3 = orderedEvents[i];
            if (!event_3.overlapNumber) {
                var overlapNumber = event_3.position + 1;
                event_3.overlapNumber = overlapNumber;
                var eventQueue = [event_3];
                while ((event_3 = eventQueue.shift())) {
                    var index = event_3.startIndex;
                    while (index < event_3.endIndex) {
                        if (!cells[index].calculated) {
                            cells[index].calculated = true;
                            if (cells[index].events) {
                                var eventCountInCell = cells[index].events.length;
                                for (var j = 0; j < eventCountInCell; j += 1) {
                                    var currentEventInCell = cells[index].events[j];
                                    if (!currentEventInCell.overlapNumber) {
                                        currentEventInCell.overlapNumber = overlapNumber;
                                        eventQueue.push(currentEventInCell);
                                    }
                                }
                            }
                        }
                        index += 1;
                    }
                }
            }
            i += 1;
        }
    };
    DayViewComponent.prototype.eventSelected = function (event) {
        this.onEventSelected.emit(event);
    };
    DayViewComponent.prototype.setScrollPosition = function (scrollPosition) {
        this.initScrollPosition = scrollPosition;
    };
    return DayViewComponent;
}());

DayViewComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */], args: [{
                selector: 'dayview',
                template: "\n        <ion-slides #daySlider [loop]=\"true\" [dir]=\"dir\" (ionSlideDidChange)=\"onSlideChanged()\">\n            <ion-slide>\n                <div class=\"dayview-allday-table\">\n                    <div class=\"dayview-allday-label\">{{allDayLabel}}</div>\n                    <ion-scroll scrollY=\"true\" zoom=\"false\" class=\"dayview-allday-content-wrapper\">\n                        <table class=\"table table-bordered dayview-allday-content-table\">\n                            <tbody>\n                            <tr>\n                                <td class=\"calendar-cell\" [ngClass]=\"{'calendar-event-wrap':views[0].allDayEvents.length>0}\"\n                                    [ngStyle]=\"{height: 25*views[0].allDayEvents.length+'px'}\"\n                                    *ngIf=\"0===currentViewIndex\">\n                                    <div *ngFor=\"let displayEvent of views[0].allDayEvents; let eventIndex=index\"\n                                         class=\"calendar-event\" tappable\n                                         (click)=\"eventSelected(displayEvent.event)\"\n                                         [ngStyle]=\"{top: 25*eventIndex+'px',width: '100%',height:'25px'}\">\n                                        <ng-template [ngTemplateOutlet]=\"dayviewAllDayEventTemplate\"\n                                            [ngOutletContext]=\"{displayEvent:displayEvent}\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                                <td class=\"calendar-cell\" *ngIf=\"0!==currentViewIndex\">\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </ion-scroll>\n                </div>\n                <init-position-scroll *ngIf=\"0===currentViewIndex\" class=\"dayview-normal-event-container\" [initPosition]=\"initScrollPosition\" [emitEvent]=\"preserveScrollPosition\" (onScroll)=\"setScrollPosition($event)\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[0].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\" tappable (click)=\"select(tm.time, tm.events)\">\n                                <div [ngClass]=\"{'calendar-event-wrap': tm.events}\" *ngIf=\"tm.events\">\n                                    <div *ngFor=\"let displayEvent of tm.events\" class=\"calendar-event\" tappable\n                                         (click)=\"eventSelected(displayEvent.event)\"\n                                         [ngStyle]=\"{top: (37*displayEvent.startOffset/hourParts)+'px', left: 100/displayEvent.overlapNumber*displayEvent.position+'%', width: 100/displayEvent.overlapNumber+'%', height: 37*(displayEvent.endIndex -displayEvent.startIndex - (displayEvent.endOffset + displayEvent.startOffset)/hourParts)+'px'}\">\n                                         <ng-template [ngTemplateOutlet]=\"dayviewNormalEventTemplate\"\n                                             [ngOutletContext]=\"{displayEvent:displayEvent}\">\n                                         </ng-template>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n                <init-position-scroll *ngIf=\"0!==currentViewIndex\" class=\"dayview-normal-event-container\" [initPosition]=\"initScrollPosition\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[0].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\">\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n            </ion-slide>\n            <ion-slide>\n                <div class=\"dayview-allday-table\">\n                    <div class=\"dayview-allday-label\">{{allDayLabel}}</div>\n                    <ion-scroll scrollY=\"true\" zoom=\"false\" class=\"dayview-allday-content-wrapper\">\n                        <table class=\"table table-bordered dayview-allday-content-table\">\n                            <tbody>\n                            <tr>\n                                <td class=\"calendar-cell\" [ngClass]=\"{'calendar-event-wrap':views[1].allDayEvents.length>0}\"\n                                    [ngStyle]=\"{height: 25*views[1].allDayEvents.length+'px'}\"\n                                    *ngIf=\"1===currentViewIndex\">\n                                    <div *ngFor=\"let displayEvent of views[1].allDayEvents; let eventIndex=index\"\n                                         class=\"calendar-event\" tappable\n                                         (click)=\"eventSelected(displayEvent.event)\"\n                                         [ngStyle]=\"{top: 25*eventIndex+'px',width: '100%',height:'25px'}\">\n                                        <ng-template [ngTemplateOutlet]=\"dayviewAllDayEventTemplate\"\n                                            [ngOutletContext]=\"{displayEvent:displayEvent}\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                                <td class=\"calendar-cell\" *ngIf=\"1!==currentViewIndex\">\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </ion-scroll>\n                </div>\n                <init-position-scroll *ngIf=\"1===currentViewIndex\" class=\"dayview-normal-event-container\" [initPosition]=\"initScrollPosition\" [emitEvent]=\"preserveScrollPosition\" (onScroll)=\"setScrollPosition($event)\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[1].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\" tappable (click)=\"select(tm.time, tm.events)\">\n                                <div [ngClass]=\"{'calendar-event-wrap': tm.events}\" *ngIf=\"tm.events\">\n                                    <div *ngFor=\"let displayEvent of tm.events\" class=\"calendar-event\" tappable\n                                         (click)=\"eventSelected(displayEvent.event)\"\n                                         [ngStyle]=\"{top: (37*displayEvent.startOffset/hourParts)+'px', left: 100/displayEvent.overlapNumber*displayEvent.position+'%', width: 100/displayEvent.overlapNumber+'%', height: 37*(displayEvent.endIndex -displayEvent.startIndex - (displayEvent.endOffset + displayEvent.startOffset)/hourParts)+'px'}\">\n                                         <ng-template [ngTemplateOutlet]=\"dayviewNormalEventTemplate\"\n                                             [ngOutletContext]=\"{displayEvent:displayEvent}\">\n                                         </ng-template>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n                <init-position-scroll *ngIf=\"1!==currentViewIndex\" class=\"dayview-normal-event-container\" [initPosition]=\"initScrollPosition\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[1].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\">\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n            </ion-slide>\n            <ion-slide>\n                <div class=\"dayview-allday-table\">\n                    <div class=\"dayview-allday-label\">{{allDayLabel}}</div>\n                    <ion-scroll scrollY=\"true\" zoom=\"false\" class=\"dayview-allday-content-wrapper\">\n                        <table class=\"table table-bordered dayview-allday-content-table\">\n                            <tbody>\n                            <tr>\n                                <td class=\"calendar-cell\" [ngClass]=\"{'calendar-event-wrap':views[2].allDayEvents.length>0}\"\n                                    [ngStyle]=\"{height: 25*views[2].allDayEvents.length+'px'}\"\n                                    *ngIf=\"2===currentViewIndex\">\n                                    <div *ngFor=\"let displayEvent of views[2].allDayEvents; let eventIndex=index\"\n                                         class=\"calendar-event\" tappable\n                                         (click)=\"eventSelected(displayEvent.event)\"\n                                         [ngStyle]=\"{top: 25*eventIndex+'px',width: '100%',height:'25px'}\">\n                                        <ng-template [ngTemplateOutlet]=\"dayviewAllDayEventTemplate\"\n                                            [ngOutletContext]=\"{displayEvent:displayEvent}\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                                <td class=\"calendar-cell\" *ngIf=\"2!==currentViewIndex\">\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </ion-scroll>\n                </div>\n                <init-position-scroll *ngIf=\"2===currentViewIndex\" class=\"dayview-normal-event-container\" [initPosition]=\"initScrollPosition\" [emitEvent]=\"preserveScrollPosition\" (onScroll)=\"setScrollPosition($event)\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[2].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\" tappable (click)=\"select(tm.time, tm.events)\">\n                                <div [ngClass]=\"{'calendar-event-wrap': tm.events}\" *ngIf=\"tm.events\">\n                                    <div *ngFor=\"let displayEvent of tm.events\" class=\"calendar-event\" tappable\n                                         (click)=\"eventSelected(displayEvent.event)\"\n                                         [ngStyle]=\"{top: (37*displayEvent.startOffset/hourParts)+'px', left: 100/displayEvent.overlapNumber*displayEvent.position+'%', width: 100/displayEvent.overlapNumber+'%', height: 37*(displayEvent.endIndex -displayEvent.startIndex - (displayEvent.endOffset + displayEvent.startOffset)/hourParts)+'px'}\">\n                                         <ng-template [ngTemplateOutlet]=\"dayviewNormalEventTemplate\"\n                                             [ngOutletContext]=\"{displayEvent:displayEvent}\">\n                                         </ng-template>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n                <init-position-scroll *ngIf=\"2!==currentViewIndex\" class=\"dayview-normal-event-container\" [initPosition]=\"initScrollPosition\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[2].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\">\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n            </ion-slide>\n        </ion-slides>\n    ",
                styles: ["\n        .table-fixed {\n          table-layout: fixed;\n        }\n\n        .table {\n          width: 100%;\n          max-width: 100%;\n          background-color: transparent;\n        }\n\n        .table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td,\n        .table > tbody > tr > td, .table > tfoot > tr > td {\n          padding: 8px;\n          line-height: 20px;\n          vertical-align: top;\n        }\n\n        .table > thead > tr > th {\n          vertical-align: bottom;\n          border-bottom: 2px solid #ddd;\n        }\n\n        .table > thead:first-child > tr:first-child > th, .table > thead:first-child > tr:first-child > td {\n          border-top: 0\n        }\n\n        .table > tbody + tbody {\n          border-top: 2px solid #ddd;\n        }\n\n        .table-bordered {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th,\n        .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > thead > tr > td {\n          border-bottom-width: 2px;\n        }\n\n        .table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th {\n          background-color: #f9f9f9\n        }\n\n        .calendar-hour-column {\n          width: 50px;\n          white-space: nowrap;\n        }\n\n        .calendar-event-wrap {\n          position: relative;\n          width: 100%;\n          height: 100%;\n        }\n\n        .calendar-event {\n          position: absolute;\n          padding: 2px;\n          cursor: pointer;\n          z-index: 10000;\n        }\n\n        .calendar-cell {\n          padding: 0 !important;\n          height: 37px;\n        }\n\n        .dayview-allday-label {\n          float: left;\n          height: 100%;\n          line-height: 50px;\n          text-align: center;\n          width: 50px;\n        }\n\n        [dir=\"rtl\"] .dayview-allday-label {\n            border-right: 1px solid #ddd;\n            float: right;\n        }\n\n        .dayview-allday-content-wrapper {\n          margin-left: 50px;\n          overflow: hidden;\n          height: 51px;\n        }\n\n        [dir=\"rtl\"] .dayview-allday-content-wrapper {\n          margin-left: 0;\n          margin-right: 50px;\n        }\n\n        .dayview-allday-content-table {\n          min-height: 50px;\n        }\n\n        .dayview-allday-content-table td {\n          border-left: 1px solid #ddd;\n          border-right: 1px solid #ddd;\n        }\n\n        .dayview-allday-table {\n          height: 50px;\n          position: relative;\n          border-bottom: 1px solid #ddd;\n          font-size: 14px;\n        }\n\n        .dayview-normal-event-container {\n          margin-top: 50px;\n          overflow: hidden;\n          left: 0;\n          right: 0;\n          top: 0;\n          bottom: 0;\n          position: absolute;\n          font-size: 14px;\n        }\n\n        .dayview .slide-zoom {\n          height: 100%;\n        }\n\n        .dayview-allday-content-wrapper scroll-content {\n          width: 100%;\n        }\n\n        ::-webkit-scrollbar,\n        *::-webkit-scrollbar {\n          display: none;\n        }\n\n        .table > tbody > tr > td.calendar-hour-column {\n          padding-left: 0;\n          padding-right: 0;\n          vertical-align: middle;\n        }\n\n        @media (max-width: 750px) {\n          .dayview-allday-label, .calendar-hour-column {\n            width: 31px;\n            font-size: 12px;\n          }\n\n          .dayview-allday-label {\n            padding-top: 4px;\n          }\n\n          .table > tbody > tr > td.calendar-hour-column {\n            padding-left: 0;\n            padding-right: 0;\n            vertical-align: middle;\n            line-height: 12px;\n          }\n\n          .dayview-allday-label {\n            line-height: 20px;\n          }\n\n          .dayview-allday-content-wrapper {\n            margin-left: 31px;\n          }\n\n          [dir=\"rtl\"] .dayview-allday-content-wrapper {\n            margin-left: 0;\n            margin-right: 31px;\n          }\n        }\n    "],
                encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* ViewEncapsulation */].None
            },] },
];
DayViewComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__calendar_service__["a" /* CalendarService */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
]; };
DayViewComponent.propDecorators = {
    'slider': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewChild */], args: ['daySlider',] },],
    'class': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* HostBinding */], args: ['class.dayview',] },],
    'dayviewAllDayEventTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'dayviewNormalEventTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'formatHourColumn': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'formatDayTitle': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'allDayLabel': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'hourParts': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'eventSource': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'markDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'locale': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'dateFormatter': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'dir': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'scrollToHour': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'preserveScrollPosition': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'lockSwipeToPrev': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'lockSwipes': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'onRangeChanged': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["S" /* Output */] },],
    'onEventSelected': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["S" /* Output */] },],
    'onTimeSelected': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["S" /* Output */] },],
    'onTitleChanged': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["S" /* Output */] },],
};
//# sourceMappingURL=dayview.js.map

/***/ }),
/* 400 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Step */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_service__ = __webpack_require__(272);


var Step;
(function (Step) {
    Step[Step["QuarterHour"] = 15] = "QuarterHour";
    Step[Step["HalfHour"] = 30] = "HalfHour";
    Step[Step["Hour"] = 60] = "Hour";
})(Step || (Step = {}));
var CalendarComponent = (function () {
    function CalendarComponent(calendarService, locale) {
        this.calendarService = calendarService;
        this.locale = locale;
        this.eventSource = [];
        this.calendarMode = 'month';
        this.formatDay = 'd';
        this.formatDayHeader = 'EEE';
        this.formatDayTitle = 'MMMM dd, yyyy';
        this.formatWeekTitle = 'MMMM yyyy, Week $n';
        this.formatMonthTitle = 'MMMM yyyy';
        this.formatWeekViewDayHeader = 'EEE d';
        this.formatHourColumn = 'j';
        this.showEventDetail = true;
        this.startingDayMonth = 0;
        this.startingDayWeek = 0;
        this.allDayLabel = 'all day';
        this.noEventsLabel = 'No Events';
        this.queryMode = 'local';
        this.step = Step.Hour;
        this.autoSelect = true;
        this.dir = "";
        this.scrollToHour = 0;
        this.preserveScrollPosition = false;
        this.lockSwipeToPrev = false;
        this.lockSwipes = false;
        this.onCurrentDateChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onRangeChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onEventSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onTimeSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onTitleChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.hourParts = 1;
    }
    Object.defineProperty(CalendarComponent.prototype, "currentDate", {
        get: function () {
            return this._currentDate;
        },
        set: function (val) {
            if (!val) {
                val = new Date();
            }
            this._currentDate = val;
            this.calendarService.setCurrentDate(val, true);
            this.onCurrentDateChanged.emit(this._currentDate);
        },
        enumerable: true,
        configurable: true
    });
    CalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.autoSelect) {
            if (this.autoSelect.toString() === 'false') {
                this.autoSelect = false;
            }
            else {
                this.autoSelect = true;
            }
        }
        this.hourParts = 60 / this.step;
        this.calendarService.queryMode = this.queryMode;
        this.currentDateChangedFromChildrenSubscription = this.calendarService.currentDateChangedFromChildren$.subscribe(function (currentDate) {
            _this._currentDate = currentDate;
            _this.onCurrentDateChanged.emit(currentDate);
        });
    };
    CalendarComponent.prototype.ngOnDestroy = function () {
        if (this.currentDateChangedFromChildrenSubscription) {
            this.currentDateChangedFromChildrenSubscription.unsubscribe();
            this.currentDateChangedFromChildrenSubscription = null;
        }
    };
    CalendarComponent.prototype.rangeChanged = function (range) {
        this.onRangeChanged.emit(range);
    };
    CalendarComponent.prototype.eventSelected = function (event) {
        this.onEventSelected.emit(event);
    };
    CalendarComponent.prototype.timeSelected = function (timeSelected) {
        this.onTimeSelected.emit(timeSelected);
    };
    CalendarComponent.prototype.titleChanged = function (title) {
        this.onTitleChanged.emit(title);
    };
    CalendarComponent.prototype.loadEvents = function () {
        this.calendarService.loadEvents();
    };
    return CalendarComponent;
}());

CalendarComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'calendar',
                template: "\n        <ng-template #monthviewDefaultDisplayEventTemplate let-view=\"view\" let-row=\"row\" let-col=\"col\">\n            {{view.dates[row*7+col].label}}\n        </ng-template>\n        <ng-template #monthviewDefaultEventDetailTemplate let-showEventDetail=\"showEventDetail\" let-selectedDate=\"selectedDate\" let-noEventsLabel=\"noEventsLabel\">\n            <ion-list class=\"event-detail-container\" has-bouncing=\"false\" *ngIf=\"showEventDetail\" overflow-scroll=\"false\">\n                <ion-item *ngFor=\"let event of selectedDate?.events\" (click)=\"eventSelected(event)\">\n                        <span *ngIf=\"!event.allDay\" class=\"monthview-eventdetail-timecolumn\">{{event.startTime|date: 'HH:mm'}}\n                            -\n                            {{event.endTime|date: 'HH:mm'}}\n                        </span>\n                    <span *ngIf=\"event.allDay\" class=\"monthview-eventdetail-timecolumn\">{{allDayLabel}}</span>\n                    <span class=\"event-detail\">  |  {{event.title}}</span>\n                </ion-item>\n                <ion-item *ngIf=\"selectedDate?.events.length==0\">\n                    <div class=\"no-events-label\">{{noEventsLabel}}</div>\n                </ion-item>\n            </ion-list>\n        </ng-template>\n        <ng-template #defaultAllDayEventTemplate let-displayEvent=\"displayEvent\">\n            <div class=\"calendar-event-inner\">{{displayEvent.event.title}}</div>\n        </ng-template>\n        <ng-template #defaultNormalEventTemplate let-displayEvent=\"displayEvent\">\n            <div class=\"calendar-event-inner\">{{displayEvent.event.title}}</div>\n        </ng-template>\n\n        <div [ngSwitch]=\"calendarMode\" class=\"{{calendarMode}}view-container\">\n            <monthview *ngSwitchCase=\"'month'\"\n                [formatDay]=\"formatDay\"\n                [formatDayHeader]=\"formatDayHeader\"\n                [formatMonthTitle]=\"formatMonthTitle\"\n                [startingDayMonth]=\"startingDayMonth\"\n                [showEventDetail]=\"showEventDetail\"\n                [noEventsLabel]=\"noEventsLabel\"\n                [autoSelect]=\"autoSelect\"\n                [eventSource]=\"eventSource\"\n                [markDisabled]=\"markDisabled\"\n                [monthviewDisplayEventTemplate]=\"monthviewDisplayEventTemplate||monthviewDefaultDisplayEventTemplate\"\n                [monthviewInactiveDisplayEventTemplate]=\"monthviewInactiveDisplayEventTemplate||monthviewDefaultDisplayEventTemplate\"\n                [monthviewEventDetailTemplate]=\"monthviewEventDetailTemplate||monthviewDefaultEventDetailTemplate\"\n                [locale]=\"locale\"\n                [dateFormatter]=\"dateFormatter\"\n                [dir]=\"dir\"\n                [lockSwipeToPrev]=\"lockSwipeToPrev\"\n                [lockSwipes]=\"lockSwipes\"\n                (onRangeChanged)=\"rangeChanged($event)\"\n                (onEventSelected)=\"eventSelected($event)\"\n                (onTimeSelected)=\"timeSelected($event)\"\n                (onTitleChanged)=\"titleChanged($event)\">\n            </monthview>\n            <weekview *ngSwitchCase=\"'week'\"\n                [formatWeekTitle]=\"formatWeekTitle\"\n                [formatWeekViewDayHeader]=\"formatWeekViewDayHeader\"\n                [formatHourColumn]=\"formatHourColumn\"\n                [startingDayWeek]=\"startingDayWeek\"\n                [allDayLabel]=\"allDayLabel\"\n                [hourParts]=\"hourParts\"\n                [eventSource]=\"eventSource\"\n                [markDisabled]=\"markDisabled\"\n                [weekviewAllDayEventTemplate]=\"weekviewAllDayEventTemplate||defaultAllDayEventTemplate\"\n                [weekviewNormalEventTemplate]=\"weekviewNormalEventTemplate||defaultNormalEventTemplate\"\n                [locale]=\"locale\"\n                [dateFormatter]=\"dateFormatter\"\n                [dir]=\"dir\"\n                [scrollToHour]=\"scrollToHour\"\n                [preserveScrollPosition]=\"preserveScrollPosition\"\n                [lockSwipeToPrev]=\"lockSwipeToPrev\"\n                [lockSwipes]=\"lockSwipes\"\n                (onRangeChanged)=\"rangeChanged($event)\"\n                (onEventSelected)=\"eventSelected($event)\"\n                (onTimeSelected)=\"timeSelected($event)\"\n                (onTitleChanged)=\"titleChanged($event)\">\n            </weekview>\n            <dayview *ngSwitchCase=\"'day'\"\n                [formatDayTitle]=\"formatDayTitle\"\n                [formatHourColumn]=\"formatHourColumn\"\n                [allDayLabel]=\"allDayLabel\"\n                [hourParts]=\"hourParts\"\n                [eventSource]=\"eventSource\"\n                [markDisabled]=\"markDisabled\"\n                [dayviewAllDayEventTemplate]=\"dayviewAllDayEventTemplate||defaultAllDayEventTemplate\"\n                [dayviewNormalEventTemplate]=\"dayviewNormalEventTemplate||defaultNormalEventTemplate\"\n                [locale]=\"locale\"\n                [dateFormatter]=\"dateFormatter\"\n                [dir]=\"dir\"\n                [scrollToHour]=\"scrollToHour\"\n                [preserveScrollPosition]=\"preserveScrollPosition\"\n                [lockSwipeToPrev]=\"lockSwipeToPrev\"\n                [lockSwipes]=\"lockSwipes\"\n                (onRangeChanged)=\"rangeChanged($event)\"\n                (onEventSelected)=\"eventSelected($event)\"\n                (onTimeSelected)=\"timeSelected($event)\"\n                (onTitleChanged)=\"titleChanged($event)\">\n            </dayview>\n        </div>\n    ",
                styles: ["\n        :host > div { height: 100%; }\n\n        .event-detail-container {\n          border-top: 2px darkgrey solid;\n        }\n\n        .no-events-label {\n          font-weight: bold;\n          color: darkgrey;\n          text-align: center;\n        }\n\n        .event-detail {\n          cursor: pointer;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n        }\n\n        .monthview-eventdetail-timecolumn {\n          width: 110px;\n          overflow: hidden;\n        }\n\n        .calendar-event-inner {\n          overflow: hidden;\n          background-color: #3a87ad;\n          color: white;\n          height: 100%;\n          width: 100%;\n          padding: 2px;\n          line-height: 15px;\n        }\n\n        @media (max-width: 750px) {\n          .calendar-event-inner {\n            font-size: 12px;\n          }\n        }\n    "],
                providers: [__WEBPACK_IMPORTED_MODULE_1__calendar_service__["a" /* CalendarService */]]
            },] },
];
CalendarComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__calendar_service__["a" /* CalendarService */], },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* LOCALE_ID */],] },] },
]; };
CalendarComponent.propDecorators = {
    'currentDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'eventSource': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'calendarMode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'formatDay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'formatDayHeader': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'formatDayTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'formatWeekTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'formatMonthTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'formatWeekViewDayHeader': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'formatHourColumn': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'showEventDetail': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'startingDayMonth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'startingDayWeek': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'allDayLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'noEventsLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'queryMode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'step': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'autoSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'markDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'monthviewDisplayEventTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'monthviewInactiveDisplayEventTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'monthviewEventDetailTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'weekviewAllDayEventTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'weekviewNormalEventTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'dayviewAllDayEventTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'dayviewNormalEventTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'dateFormatter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'dir': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'scrollToHour': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'preserveScrollPosition': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'lockSwipeToPrev': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'lockSwipes': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'onCurrentDateChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */] },],
    'onRangeChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */] },],
    'onEventSelected': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */] },],
    'onTimeSelected': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */] },],
    'onTitleChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */] },],
};
//# sourceMappingURL=calendar.js.map

/***/ }),
/* 401 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initPositionScrollComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var initPositionScrollComponent = (function (_super) {
    __extends(initPositionScrollComponent, _super);
    function initPositionScrollComponent(el) {
        var _this = _super.call(this, el) || this;
        _this.onScroll = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
        _this.listenerAttached = false;
        _this.element = el;
        return _this;
    }
    initPositionScrollComponent.prototype.ngOnChanges = function (changes) {
        var initPosition = changes['initPosition'];
        if (initPosition && initPosition.currentValue !== undefined && this.scrollContent) {
            this.scrollContent.scrollTop = initPosition.currentValue;
        }
    };
    initPositionScrollComponent.prototype.ngAfterViewInit = function () {
        var scrollContent = this.scrollContent = this.element.nativeElement.querySelector('.scroll-content');
        if (this.initPosition !== undefined) {
            scrollContent.scrollTop = this.initPosition;
        }
        if (this.emitEvent && !this.listenerAttached) {
            var onScroll_1 = this.onScroll;
            this.handler = function () {
                onScroll_1.emit(scrollContent.scrollTop);
            };
            this.listenerAttached = true;
            scrollContent.addEventListener('scroll', this.handler);
        }
    };
    initPositionScrollComponent.prototype.ngOnDestroy = function () {
        if (this.listenerAttached) {
            this.scrollContent.removeEventListener('scroll', this.handler);
        }
    };
    return initPositionScrollComponent;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* Scroll */]));

initPositionScrollComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */], args: [{
                selector: 'init-position-scroll',
                template: "\n        <ion-scroll scrollY=\"true\" zoom=\"false\" style=\"height:100%\">\n            <ng-content></ng-content>\n        </ion-scroll>\n    "
            },] },
];
initPositionScrollComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
]; };
initPositionScrollComponent.propDecorators = {
    'initPosition': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'emitEvent': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */] },],
    'onScroll': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["S" /* Output */] },],
};
//# sourceMappingURL=init-position-scroll.js.map

/***/ }),
/* 402 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventsPage = (function () {
    function EventsPage(navCtrl, navParams, modalCtrl, alertCtrl, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        this.eventSource = [];
        this.selectedDay = new Date();
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        };
        var added = this.eventSource;
        //month - 1
        if (this.service.events.total_rows != 0) {
            var length_1 = this.service.events.rows.length;
            var tz = new Date().getTimezoneOffset();
            for (var i = 0; i < length_1; i++) {
                var element = this.service.events.rows[i];
                added.push({
                    title: element.value.title,
                    startTime: new Date(new Date(element.key).getTime() + tz * 60000),
                    endTime: new Date(new Date(element.value.end).getTime() + tz * 60000),
                    allDay: false
                });
            }
        }
        // added.push({
        //     title: head,
        //     startTime: start,
        //     endTime: end,
        //     allDay: all
        // });
        this.eventSource = added;
    }
    EventsPage.prototype.changeMonth = function (action) {
        if (action == 1)
            this.calendar.currentDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.calendar.currentDate).subtract(1, 'month').toDate();
        else if (action == 2)
            this.calendar.currentDate = new Date();
        else
            this.calendar.currentDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.calendar.currentDate).add(1, 'month').toDate();
    };
    EventsPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    EventsPage.prototype.onEventSelected = function (event) {
        var start = __WEBPACK_IMPORTED_MODULE_2_moment__(event.startTime).format('LLLL');
        var end = __WEBPACK_IMPORTED_MODULE_2_moment__(event.endTime).format('LLLL');
        var alert = this.alertCtrl.create({
            title: '' + event.title,
            subTitle: 'From: ' + start + '<br>To: ' + end,
            buttons: ['OK']
        });
        alert.present();
    };
    EventsPage.prototype.onTimeSelected = function (ev) {
        this.selectedDay = ev.selectedTime;
    };
    return EventsPage;
}());
EventsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-events',template:/*ion-inline-start:"/Users/adeem/Desktop/JeffersonClub/client/src/pages/events/events.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ monthNames[selectedDay.getMonth()] }} - {{ selectedDay.getFullYear() }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ng-template #template let-showEventDetail="showEventDetail" let-selectedDate="selectedDate" let-noEventsLabel="noEventsLabel">\n<ion-list class="event-detail-container" has-bouncing="false" *ngIf="showEventDetail" overflow-scroll="false">\n  <ion-item *ngFor="let event of selectedDate?.events" (click)="onEventSelected(event)">\n    <span *ngIf="!event.allDay" class="monthview-eventdetail-timecolumn">{{event.startTime|date: \'hh:mm a\'}}\n                            -\n                            {{event.endTime|date: \'hh:mm a\'}}\n    </span>\n    <span *ngIf="event.allDay" class="monthview-eventdetail-timecolumn">All Day</span>\n    <span class="event-detail">  |  {{event.title}}</span>\n  </ion-item>\n  <ion-item *ngIf="selectedDate?.events.length==0">\n    <div class="no-events-label" style="color: gray; font-weight: bold; text-align: center">{{noEventsLabel}}</div>\n  </ion-item>\n</ion-list>\n</ng-template>\n\n<ion-content>\n  <calendar\n          [eventSource]="eventSource"\n          [calendarMode]="calendar.mode"\n          [currentDate]="calendar.currentDate"\n          [monthviewEventDetailTemplate]="template"\n          (onEventSelected)="onEventSelected($event)"\n          (onTitleChanged)="onViewTitleChanged($event)"\n          (onTimeSelected)="onTimeSelected($event)"\n          startingDayMonth="1"\n          step="30"\n          class="calendar">\n  </calendar>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar id="foot">\n    <ion-grid>\n      <ion-row no-padding no-margin>\n        <ion-col>\n          <button ion-button icon-left clear small (click)="changeMonth(1)">\n            <ion-icon name="arrow-back"></ion-icon>\n            Last Month\n          </button>\n        </ion-col>\n\n        <ion-col style="text-align: center">\n          <button ion-button clear small (click)="changeMonth(2)">\n            Today\n          </button>\n        </ion-col>\n\n        <ion-col>\n          <button ion-button icon-right clear small (click)="changeMonth(3)">\n            Next Month\n            <ion-icon name="arrow-forward"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/adeem/Desktop/JeffersonClub/client/src/pages/events/events.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* Service */]])
], EventsPage);

//# sourceMappingURL=events.js.map

/***/ }),
/* 403 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 273,
	"./af.js": 273,
	"./ar": 274,
	"./ar-dz": 275,
	"./ar-dz.js": 275,
	"./ar-kw": 276,
	"./ar-kw.js": 276,
	"./ar-ly": 277,
	"./ar-ly.js": 277,
	"./ar-ma": 278,
	"./ar-ma.js": 278,
	"./ar-sa": 279,
	"./ar-sa.js": 279,
	"./ar-tn": 280,
	"./ar-tn.js": 280,
	"./ar.js": 274,
	"./az": 281,
	"./az.js": 281,
	"./be": 282,
	"./be.js": 282,
	"./bg": 283,
	"./bg.js": 283,
	"./bn": 284,
	"./bn.js": 284,
	"./bo": 285,
	"./bo.js": 285,
	"./br": 286,
	"./br.js": 286,
	"./bs": 287,
	"./bs.js": 287,
	"./ca": 288,
	"./ca.js": 288,
	"./cs": 289,
	"./cs.js": 289,
	"./cv": 290,
	"./cv.js": 290,
	"./cy": 291,
	"./cy.js": 291,
	"./da": 292,
	"./da.js": 292,
	"./de": 293,
	"./de-at": 294,
	"./de-at.js": 294,
	"./de-ch": 295,
	"./de-ch.js": 295,
	"./de.js": 293,
	"./dv": 296,
	"./dv.js": 296,
	"./el": 297,
	"./el.js": 297,
	"./en-au": 298,
	"./en-au.js": 298,
	"./en-ca": 299,
	"./en-ca.js": 299,
	"./en-gb": 300,
	"./en-gb.js": 300,
	"./en-ie": 301,
	"./en-ie.js": 301,
	"./en-nz": 302,
	"./en-nz.js": 302,
	"./eo": 303,
	"./eo.js": 303,
	"./es": 304,
	"./es-do": 305,
	"./es-do.js": 305,
	"./es.js": 304,
	"./et": 306,
	"./et.js": 306,
	"./eu": 307,
	"./eu.js": 307,
	"./fa": 308,
	"./fa.js": 308,
	"./fi": 309,
	"./fi.js": 309,
	"./fo": 310,
	"./fo.js": 310,
	"./fr": 311,
	"./fr-ca": 312,
	"./fr-ca.js": 312,
	"./fr-ch": 313,
	"./fr-ch.js": 313,
	"./fr.js": 311,
	"./fy": 314,
	"./fy.js": 314,
	"./gd": 315,
	"./gd.js": 315,
	"./gl": 316,
	"./gl.js": 316,
	"./gom-latn": 317,
	"./gom-latn.js": 317,
	"./he": 318,
	"./he.js": 318,
	"./hi": 319,
	"./hi.js": 319,
	"./hr": 320,
	"./hr.js": 320,
	"./hu": 321,
	"./hu.js": 321,
	"./hy-am": 322,
	"./hy-am.js": 322,
	"./id": 323,
	"./id.js": 323,
	"./is": 324,
	"./is.js": 324,
	"./it": 325,
	"./it.js": 325,
	"./ja": 326,
	"./ja.js": 326,
	"./jv": 327,
	"./jv.js": 327,
	"./ka": 328,
	"./ka.js": 328,
	"./kk": 329,
	"./kk.js": 329,
	"./km": 330,
	"./km.js": 330,
	"./kn": 331,
	"./kn.js": 331,
	"./ko": 332,
	"./ko.js": 332,
	"./ky": 333,
	"./ky.js": 333,
	"./lb": 334,
	"./lb.js": 334,
	"./lo": 335,
	"./lo.js": 335,
	"./lt": 336,
	"./lt.js": 336,
	"./lv": 337,
	"./lv.js": 337,
	"./me": 338,
	"./me.js": 338,
	"./mi": 339,
	"./mi.js": 339,
	"./mk": 340,
	"./mk.js": 340,
	"./ml": 341,
	"./ml.js": 341,
	"./mr": 342,
	"./mr.js": 342,
	"./ms": 343,
	"./ms-my": 344,
	"./ms-my.js": 344,
	"./ms.js": 343,
	"./my": 345,
	"./my.js": 345,
	"./nb": 346,
	"./nb.js": 346,
	"./ne": 347,
	"./ne.js": 347,
	"./nl": 348,
	"./nl-be": 349,
	"./nl-be.js": 349,
	"./nl.js": 348,
	"./nn": 350,
	"./nn.js": 350,
	"./pa-in": 351,
	"./pa-in.js": 351,
	"./pl": 352,
	"./pl.js": 352,
	"./pt": 353,
	"./pt-br": 354,
	"./pt-br.js": 354,
	"./pt.js": 353,
	"./ro": 355,
	"./ro.js": 355,
	"./ru": 356,
	"./ru.js": 356,
	"./sd": 357,
	"./sd.js": 357,
	"./se": 358,
	"./se.js": 358,
	"./si": 359,
	"./si.js": 359,
	"./sk": 360,
	"./sk.js": 360,
	"./sl": 361,
	"./sl.js": 361,
	"./sq": 362,
	"./sq.js": 362,
	"./sr": 363,
	"./sr-cyrl": 364,
	"./sr-cyrl.js": 364,
	"./sr.js": 363,
	"./ss": 365,
	"./ss.js": 365,
	"./sv": 366,
	"./sv.js": 366,
	"./sw": 367,
	"./sw.js": 367,
	"./ta": 368,
	"./ta.js": 368,
	"./te": 369,
	"./te.js": 369,
	"./tet": 370,
	"./tet.js": 370,
	"./th": 371,
	"./th.js": 371,
	"./tl-ph": 372,
	"./tl-ph.js": 372,
	"./tlh": 373,
	"./tlh.js": 373,
	"./tr": 374,
	"./tr.js": 374,
	"./tzl": 375,
	"./tzl.js": 375,
	"./tzm": 376,
	"./tzm-latn": 377,
	"./tzm-latn.js": 377,
	"./tzm.js": 376,
	"./uk": 378,
	"./uk.js": 378,
	"./ur": 379,
	"./ur.js": 379,
	"./uz": 380,
	"./uz-latn": 381,
	"./uz-latn.js": 381,
	"./uz.js": 380,
	"./vi": 382,
	"./vi.js": 382,
	"./x-pseudo": 383,
	"./x-pseudo.js": 383,
	"./yo": 384,
	"./yo.js": 384,
	"./zh-cn": 385,
	"./zh-cn.js": 385,
	"./zh-hk": 386,
	"./zh-hk.js": 386,
	"./zh-tw": 387,
	"./zh-tw.js": 387
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 404;

/***/ })
]));
//# sourceMappingURL=0.js.map