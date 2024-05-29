import './index.css';var Ty = Object.defineProperty;
var Iy = (n, o, r) => o in n ? Ty(n, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[o] = r;
var Ir = (n, o, r) => (Iy(n, typeof o != "symbol" ? o + "" : o, r), r);
import { jsx as T, jsxs as j, Fragment as Yo } from "react/jsx-runtime";
import * as z from "react";
import at, { forwardRef as _e, createElement as q, useCallback as wt, Children as Bn, isValidElement as Zo, cloneElement as Ts, Fragment as Tu, createContext as Un, useMemo as vt, useContext as Br, useLayoutEffect as Iu, useRef as de, useEffect as be, useState as Te, useReducer as x1, memo as Ly, useImperativeHandle as My } from "react";
import * as Fy from "react-dom";
import y1, { flushSync as Lu, unstable_batchedUpdates as Ql, createPortal as ky } from "react-dom";
function ko() {
}
ko.prototype = {
  diff: function(o, r) {
    var s, c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = c.callback;
    typeof c == "function" && (l = c, c = {}), this.options = c;
    var u = this;
    function f(P) {
      return l ? (setTimeout(function() {
        l(void 0, P);
      }, 0), !0) : P;
    }
    o = this.castInput(o), r = this.castInput(r), o = this.removeEmpty(this.tokenize(o)), r = this.removeEmpty(this.tokenize(r));
    var h = r.length, v = o.length, b = 1, m = h + v;
    c.maxEditLength && (m = Math.min(m, c.maxEditLength));
    var C = (s = c.timeout) !== null && s !== void 0 ? s : 1 / 0, y = Date.now() + C, N = [{
      oldPos: -1,
      lastComponent: void 0
    }], w = this.extractCommon(N[0], r, o, 0);
    if (N[0].oldPos + 1 >= v && w + 1 >= h)
      return f([{
        value: this.join(r),
        count: r.length
      }]);
    var _ = -1 / 0, $ = 1 / 0;
    function R() {
      for (var P = Math.max(_, -b); P <= Math.min($, b); P += 2) {
        var I = void 0, M = N[P - 1], W = N[P + 1];
        M && (N[P - 1] = void 0);
        var U = !1;
        if (W) {
          var G = W.oldPos - P;
          U = W && 0 <= G && G < h;
        }
        var Z = M && M.oldPos + 1 < v;
        if (!U && !Z) {
          N[P] = void 0;
          continue;
        }
        if (!Z || U && M.oldPos + 1 < W.oldPos ? I = u.addToPath(W, !0, void 0, 0) : I = u.addToPath(M, void 0, !0, 1), w = u.extractCommon(I, r, o, P), I.oldPos + 1 >= v && w + 1 >= h)
          return f(Wy(u, I.lastComponent, r, o, u.useLongestToken));
        N[P] = I, I.oldPos + 1 >= v && ($ = Math.min($, P - 1)), w + 1 >= h && (_ = Math.max(_, P + 1));
      }
      b++;
    }
    if (l)
      (function P() {
        setTimeout(function() {
          if (b > m || Date.now() > y)
            return l();
          R() || P();
        }, 0);
      })();
    else
      for (; b <= m && Date.now() <= y; ) {
        var O = R();
        if (O)
          return O;
      }
  },
  addToPath: function(o, r, s, c) {
    var l = o.lastComponent;
    return l && l.added === r && l.removed === s ? {
      oldPos: o.oldPos + c,
      lastComponent: {
        count: l.count + 1,
        added: r,
        removed: s,
        previousComponent: l.previousComponent
      }
    } : {
      oldPos: o.oldPos + c,
      lastComponent: {
        count: 1,
        added: r,
        removed: s,
        previousComponent: l
      }
    };
  },
  extractCommon: function(o, r, s, c) {
    for (var l = r.length, u = s.length, f = o.oldPos, h = f - c, v = 0; h + 1 < l && f + 1 < u && this.equals(r[h + 1], s[f + 1]); )
      h++, f++, v++;
    return v && (o.lastComponent = {
      count: v,
      previousComponent: o.lastComponent
    }), o.oldPos = f, h;
  },
  equals: function(o, r) {
    return this.options.comparator ? this.options.comparator(o, r) : o === r || this.options.ignoreCase && o.toLowerCase() === r.toLowerCase();
  },
  removeEmpty: function(o) {
    for (var r = [], s = 0; s < o.length; s++)
      o[s] && r.push(o[s]);
    return r;
  },
  castInput: function(o) {
    return o;
  },
  tokenize: function(o) {
    return o.split("");
  },
  join: function(o) {
    return o.join("");
  }
};
function Wy(n, o, r, s, c) {
  for (var l = [], u; o; )
    l.push(o), u = o.previousComponent, delete o.previousComponent, o = u;
  l.reverse();
  for (var f = 0, h = l.length, v = 0, b = 0; f < h; f++) {
    var m = l[f];
    if (m.removed) {
      if (m.value = n.join(s.slice(b, b + m.count)), b += m.count, f && l[f - 1].added) {
        var y = l[f - 1];
        l[f - 1] = l[f], l[f] = y;
      }
    } else {
      if (!m.added && c) {
        var C = r.slice(v, v + m.count);
        C = C.map(function(w, _) {
          var $ = s[b + _];
          return $.length > w.length ? $ : w;
        }), m.value = n.join(C);
      } else
        m.value = n.join(r.slice(v, v + m.count));
      v += m.count, m.added || (b += m.count);
    }
  }
  var N = l[h - 1];
  return h > 1 && typeof N.value == "string" && (N.added || N.removed) && n.equals("", N.value) && (l[h - 2].value += N.value, l.pop()), l;
}
var By = new ko();
function jl(n, o, r) {
  return By.diff(n, o, r);
}
var ow = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/, iw = /\S/, mb = new ko();
mb.equals = function(n, o) {
  return this.options.ignoreCase && (n = n.toLowerCase(), o = o.toLowerCase()), n === o || this.options.ignoreWhitespace && !iw.test(n) && !iw.test(o);
};
mb.tokenize = function(n) {
  for (var o = n.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/), r = 0; r < o.length - 1; r++)
    !o[r + 1] && o[r + 2] && ow.test(o[r]) && ow.test(o[r + 2]) && (o[r] += o[r + 2], o.splice(r + 1, 2), r--);
  return o;
};
var wb = new ko();
wb.tokenize = function(n) {
  this.options.stripTrailingCr && (n = n.replace(/\r\n/g, `
`));
  var o = [], r = n.split(/(\n|\r\n)/);
  r[r.length - 1] || r.pop();
  for (var s = 0; s < r.length; s++) {
    var c = r[s];
    s % 2 && !this.options.newlineIsToken ? o[o.length - 1] += c : (this.options.ignoreWhitespace && (c = c.trim()), o.push(c));
  }
  return o;
};
var Uy = new ko();
Uy.tokenize = function(n) {
  return n.split(/(\S.+?[.!?])(?=\s+|$)/);
};
var zy = new ko();
zy.tokenize = function(n) {
  return n.split(/([{}:;,]|\s+)/);
};
function hu(n) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? hu = function(o) {
    return typeof o;
  } : hu = function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, hu(n);
}
var Hy = Object.prototype.toString, Rl = new ko();
Rl.useLongestToken = !0;
Rl.tokenize = wb.tokenize;
Rl.castInput = function(n) {
  var o = this.options, r = o.undefinedReplacement, s = o.stringifyReplacer, c = s === void 0 ? function(l, u) {
    return typeof u > "u" ? r : u;
  } : s;
  return typeof n == "string" ? n : JSON.stringify(Jm(n, null, null, c), c, "  ");
};
Rl.equals = function(n, o) {
  return ko.prototype.equals.call(Rl, n.replace(/,([\r\n])/g, "$1"), o.replace(/,([\r\n])/g, "$1"));
};
function Jm(n, o, r, s, c) {
  o = o || [], r = r || [], s && (n = s(c, n));
  var l;
  for (l = 0; l < o.length; l += 1)
    if (o[l] === n)
      return r[l];
  var u;
  if (Hy.call(n) === "[object Array]") {
    for (o.push(n), u = new Array(n.length), r.push(u), l = 0; l < n.length; l += 1)
      u[l] = Jm(n[l], o, r, s, c);
    return o.pop(), r.pop(), u;
  }
  if (n && n.toJSON && (n = n.toJSON()), hu(n) === "object" && n !== null) {
    o.push(n), u = {}, r.push(u);
    var f = [], h;
    for (h in n)
      n.hasOwnProperty(h) && f.push(h);
    for (f.sort(), l = 0; l < f.length; l += 1)
      h = f[l], u[h] = Jm(n[h], o, r, s, h);
    o.pop(), r.pop();
  } else
    u = n;
  return u;
}
var wu = new ko();
wu.tokenize = function(n) {
  return n.slice();
};
wu.join = wu.removeEmpty = function(n) {
  return n;
};
function gl(n, o, r) {
  return wu.diff(n, o, r);
}
var Wr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function C1(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var bu = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
bu.exports;
(function(n, o) {
  (function() {
    var r, s = "4.17.21", c = 200, l = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", f = "Invalid `variable` option passed into `_.template`", h = "__lodash_hash_undefined__", v = 500, b = "__lodash_placeholder__", m = 1, C = 2, y = 4, N = 1, w = 2, _ = 1, $ = 2, R = 4, O = 8, P = 16, I = 32, M = 64, W = 128, U = 256, G = 512, Z = 30, ne = "...", oe = 800, ye = 16, ee = 1, me = 2, ve = 3, De = 1 / 0, we = 9007199254740991, Y = 17976931348623157e292, le = 0 / 0, ae = 4294967295, he = ae - 1, $e = ae >>> 1, je = [
      ["ary", W],
      ["bind", _],
      ["bindKey", $],
      ["curry", O],
      ["curryRight", P],
      ["flip", G],
      ["partial", I],
      ["partialRight", M],
      ["rearg", U]
    ], Ue = "[object Arguments]", Le = "[object Array]", lt = "[object AsyncFunction]", Me = "[object Boolean]", Be = "[object Date]", ie = "[object DOMException]", We = "[object Error]", rt = "[object Function]", dn = "[object GeneratorFunction]", Ke = "[object Map]", ze = "[object Number]", gn = "[object Null]", bt = "[object Object]", Fn = "[object Promise]", ar = "[object Proxy]", Ot = "[object RegExp]", Xe = "[object Set]", fn = "[object String]", kn = "[object Symbol]", ei = "[object Undefined]", xt = "[object WeakMap]", Hn = "[object WeakSet]", Qt = "[object ArrayBuffer]", hn = "[object DataView]", pn = "[object Float32Array]", cr = "[object Float64Array]", wr = "[object Int8Array]", lr = "[object Int16Array]", ur = "[object Int32Array]", dr = "[object Uint8Array]", ut = "[object Uint8ClampedArray]", Bt = "[object Uint16Array]", Rt = "[object Uint32Array]", Ye = /\b__p \+= '';/g, ct = /\b(__p \+=) '' \+/g, dt = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Kt = /&(?:amp|lt|gt|quot|#39);/g, jt = /[&<>"']/g, vn = RegExp(Kt.source), Vt = RegExp(jt.source), Wn = /<%-([\s\S]+?)%>/g, Kr = /<%([\s\S]+?)%>/g, Mr = /<%=([\s\S]+?)%>/g, zo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ws = /^\w*$/, Fr = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, fr = /[\\^$.*+?()[\]{}|]/g, bs = RegExp(fr.source), kr = /^\s+/, td = /\s/, nd = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, rd = /\{\n\/\* \[wrapped with (.+)\] \*/, od = /,? & /, id = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, sd = /[()=,{}\[\]\/\s]/, ad = /\\(\\)?/g, cd = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Hs = /\w*$/, ld = /^[-+]0x[0-9a-f]+$/i, ud = /^0b[01]+$/i, dd = /^\[object .+?Constructor\]$/, fd = /^0o[0-7]+$/i, hd = /^(?:0|[1-9]\d*)$/, pd = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Vr = /($^)/, gd = /['\n\r\u2028\u2029\\]/g, qr = "\\ud800-\\udfff", vd = "\\u0300-\\u036f", md = "\\ufe20-\\ufe2f", wd = "\\u20d0-\\u20ff", Gs = vd + md + wd, Ks = "\\u2700-\\u27bf", Vs = "a-z\\xdf-\\xf6\\xf8-\\xff", bd = "\\xac\\xb1\\xd7\\xf7", xd = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", yd = "\\u2000-\\u206f", Cd = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", qs = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ys = "\\ufe0e\\ufe0f", Zs = bd + xd + yd + Cd, ti = "['’]", Nd = "[" + qr + "]", Xs = "[" + Zs + "]", Yr = "[" + Gs + "]", Js = "\\d+", _d = "[" + Ks + "]", Qs = "[" + Vs + "]", js = "[^" + qr + Zs + Js + Ks + Vs + qs + "]", ni = "\\ud83c[\\udffb-\\udfff]", $d = "(?:" + Yr + "|" + ni + ")", ea = "[^" + qr + "]", ri = "(?:\\ud83c[\\udde6-\\uddff]){2}", oi = "[\\ud800-\\udbff][\\udc00-\\udfff]", Gn = "[" + qs + "]", ta = "\\u200d", na = "(?:" + Qs + "|" + js + ")", Ed = "(?:" + Gn + "|" + js + ")", ra = "(?:" + ti + "(?:d|ll|m|re|s|t|ve))?", oa = "(?:" + ti + "(?:D|LL|M|RE|S|T|VE))?", ia = $d + "?", sa = "[" + Ys + "]?", Sd = "(?:" + ta + "(?:" + [ea, ri, oi].join("|") + ")" + sa + ia + ")*", Dd = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Od = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", aa = sa + ia + Sd, Rd = "(?:" + [_d, ri, oi].join("|") + ")" + aa, Pd = "(?:" + [ea + Yr + "?", Yr, ri, oi, Nd].join("|") + ")", Ad = RegExp(ti, "g"), Td = RegExp(Yr, "g"), ii = RegExp(ni + "(?=" + ni + ")|" + Pd + aa, "g"), Id = RegExp([
      Gn + "?" + Qs + "+" + ra + "(?=" + [Xs, Gn, "$"].join("|") + ")",
      Ed + "+" + oa + "(?=" + [Xs, Gn + na, "$"].join("|") + ")",
      Gn + "?" + na + "+" + ra,
      Gn + "+" + oa,
      Od,
      Dd,
      Js,
      Rd
    ].join("|"), "g"), Ld = RegExp("[" + ta + qr + Gs + Ys + "]"), Md = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Fd = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], kd = -1, Re = {};
    Re[pn] = Re[cr] = Re[wr] = Re[lr] = Re[ur] = Re[dr] = Re[ut] = Re[Bt] = Re[Rt] = !0, Re[Ue] = Re[Le] = Re[Qt] = Re[Me] = Re[hn] = Re[Be] = Re[We] = Re[rt] = Re[Ke] = Re[ze] = Re[bt] = Re[Ot] = Re[Xe] = Re[fn] = Re[xt] = !1;
    var Se = {};
    Se[Ue] = Se[Le] = Se[Qt] = Se[hn] = Se[Me] = Se[Be] = Se[pn] = Se[cr] = Se[wr] = Se[lr] = Se[ur] = Se[Ke] = Se[ze] = Se[bt] = Se[Ot] = Se[Xe] = Se[fn] = Se[kn] = Se[dr] = Se[ut] = Se[Bt] = Se[Rt] = !0, Se[We] = Se[rt] = Se[xt] = !1;
    var Wd = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, Bd = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Ud = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, zd = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Hd = parseFloat, Gd = parseInt, ca = typeof Wr == "object" && Wr && Wr.Object === Object && Wr, Kd = typeof self == "object" && self && self.Object === Object && self, Je = ca || Kd || Function("return this")(), si = o && !o.nodeType && o, Dn = si && !0 && n && !n.nodeType && n, la = Dn && Dn.exports === si, ai = la && ca.process, Pt = function() {
      try {
        var S = Dn && Dn.require && Dn.require("util").types;
        return S || ai && ai.binding && ai.binding("util");
      } catch {
      }
    }(), ua = Pt && Pt.isArrayBuffer, da = Pt && Pt.isDate, fa = Pt && Pt.isMap, ha = Pt && Pt.isRegExp, pa = Pt && Pt.isSet, ga = Pt && Pt.isTypedArray;
    function yt(S, L, A) {
      switch (A.length) {
        case 0:
          return S.call(L);
        case 1:
          return S.call(L, A[0]);
        case 2:
          return S.call(L, A[0], A[1]);
        case 3:
          return S.call(L, A[0], A[1], A[2]);
      }
      return S.apply(L, A);
    }
    function Vd(S, L, A, K) {
      for (var te = -1, xe = S == null ? 0 : S.length; ++te < xe; ) {
        var He = S[te];
        L(K, He, A(He), S);
      }
      return K;
    }
    function At(S, L) {
      for (var A = -1, K = S == null ? 0 : S.length; ++A < K && L(S[A], A, S) !== !1; )
        ;
      return S;
    }
    function qd(S, L) {
      for (var A = S == null ? 0 : S.length; A-- && L(S[A], A, S) !== !1; )
        ;
      return S;
    }
    function va(S, L) {
      for (var A = -1, K = S == null ? 0 : S.length; ++A < K; )
        if (!L(S[A], A, S))
          return !1;
      return !0;
    }
    function mn(S, L) {
      for (var A = -1, K = S == null ? 0 : S.length, te = 0, xe = []; ++A < K; ) {
        var He = S[A];
        L(He, A, S) && (xe[te++] = He);
      }
      return xe;
    }
    function Zr(S, L) {
      var A = S == null ? 0 : S.length;
      return !!A && Kn(S, L, 0) > -1;
    }
    function ci(S, L, A) {
      for (var K = -1, te = S == null ? 0 : S.length; ++K < te; )
        if (A(L, S[K]))
          return !0;
      return !1;
    }
    function Pe(S, L) {
      for (var A = -1, K = S == null ? 0 : S.length, te = Array(K); ++A < K; )
        te[A] = L(S[A], A, S);
      return te;
    }
    function wn(S, L) {
      for (var A = -1, K = L.length, te = S.length; ++A < K; )
        S[te + A] = L[A];
      return S;
    }
    function li(S, L, A, K) {
      var te = -1, xe = S == null ? 0 : S.length;
      for (K && xe && (A = S[++te]); ++te < xe; )
        A = L(A, S[te], te, S);
      return A;
    }
    function Yd(S, L, A, K) {
      var te = S == null ? 0 : S.length;
      for (K && te && (A = S[--te]); te--; )
        A = L(A, S[te], te, S);
      return A;
    }
    function ui(S, L) {
      for (var A = -1, K = S == null ? 0 : S.length; ++A < K; )
        if (L(S[A], A, S))
          return !0;
      return !1;
    }
    var Zd = di("length");
    function Xd(S) {
      return S.split("");
    }
    function Jd(S) {
      return S.match(id) || [];
    }
    function ma(S, L, A) {
      var K;
      return A(S, function(te, xe, He) {
        if (L(te, xe, He))
          return K = xe, !1;
      }), K;
    }
    function Xr(S, L, A, K) {
      for (var te = S.length, xe = A + (K ? 1 : -1); K ? xe-- : ++xe < te; )
        if (L(S[xe], xe, S))
          return xe;
      return -1;
    }
    function Kn(S, L, A) {
      return L === L ? uf(S, L, A) : Xr(S, wa, A);
    }
    function Qd(S, L, A, K) {
      for (var te = A - 1, xe = S.length; ++te < xe; )
        if (K(S[te], L))
          return te;
      return -1;
    }
    function wa(S) {
      return S !== S;
    }
    function ba(S, L) {
      var A = S == null ? 0 : S.length;
      return A ? hi(S, L) / A : le;
    }
    function di(S) {
      return function(L) {
        return L == null ? r : L[S];
      };
    }
    function fi(S) {
      return function(L) {
        return S == null ? r : S[L];
      };
    }
    function xa(S, L, A, K, te) {
      return te(S, function(xe, He, Ee) {
        A = K ? (K = !1, xe) : L(A, xe, He, Ee);
      }), A;
    }
    function jd(S, L) {
      var A = S.length;
      for (S.sort(L); A--; )
        S[A] = S[A].value;
      return S;
    }
    function hi(S, L) {
      for (var A, K = -1, te = S.length; ++K < te; ) {
        var xe = L(S[K]);
        xe !== r && (A = A === r ? xe : A + xe);
      }
      return A;
    }
    function pi(S, L) {
      for (var A = -1, K = Array(S); ++A < S; )
        K[A] = L(A);
      return K;
    }
    function ef(S, L) {
      return Pe(L, function(A) {
        return [A, S[A]];
      });
    }
    function ya(S) {
      return S && S.slice(0, $a(S) + 1).replace(kr, "");
    }
    function Ct(S) {
      return function(L) {
        return S(L);
      };
    }
    function gi(S, L) {
      return Pe(L, function(A) {
        return S[A];
      });
    }
    function br(S, L) {
      return S.has(L);
    }
    function Ca(S, L) {
      for (var A = -1, K = S.length; ++A < K && Kn(L, S[A], 0) > -1; )
        ;
      return A;
    }
    function Na(S, L) {
      for (var A = S.length; A-- && Kn(L, S[A], 0) > -1; )
        ;
      return A;
    }
    function tf(S, L) {
      for (var A = S.length, K = 0; A--; )
        S[A] === L && ++K;
      return K;
    }
    var nf = fi(Wd), rf = fi(Bd);
    function of(S) {
      return "\\" + zd[S];
    }
    function sf(S, L) {
      return S == null ? r : S[L];
    }
    function Vn(S) {
      return Ld.test(S);
    }
    function af(S) {
      return Md.test(S);
    }
    function cf(S) {
      for (var L, A = []; !(L = S.next()).done; )
        A.push(L.value);
      return A;
    }
    function vi(S) {
      var L = -1, A = Array(S.size);
      return S.forEach(function(K, te) {
        A[++L] = [te, K];
      }), A;
    }
    function _a(S, L) {
      return function(A) {
        return S(L(A));
      };
    }
    function bn(S, L) {
      for (var A = -1, K = S.length, te = 0, xe = []; ++A < K; ) {
        var He = S[A];
        (He === L || He === b) && (S[A] = b, xe[te++] = A);
      }
      return xe;
    }
    function Jr(S) {
      var L = -1, A = Array(S.size);
      return S.forEach(function(K) {
        A[++L] = K;
      }), A;
    }
    function lf(S) {
      var L = -1, A = Array(S.size);
      return S.forEach(function(K) {
        A[++L] = [K, K];
      }), A;
    }
    function uf(S, L, A) {
      for (var K = A - 1, te = S.length; ++K < te; )
        if (S[K] === L)
          return K;
      return -1;
    }
    function df(S, L, A) {
      for (var K = A + 1; K--; )
        if (S[K] === L)
          return K;
      return K;
    }
    function qn(S) {
      return Vn(S) ? hf(S) : Zd(S);
    }
    function Ut(S) {
      return Vn(S) ? pf(S) : Xd(S);
    }
    function $a(S) {
      for (var L = S.length; L-- && td.test(S.charAt(L)); )
        ;
      return L;
    }
    var ff = fi(Ud);
    function hf(S) {
      for (var L = ii.lastIndex = 0; ii.test(S); )
        ++L;
      return L;
    }
    function pf(S) {
      return S.match(ii) || [];
    }
    function gf(S) {
      return S.match(Id) || [];
    }
    var vf = function S(L) {
      L = L == null ? Je : Yn.defaults(Je.Object(), L, Yn.pick(Je, Fd));
      var A = L.Array, K = L.Date, te = L.Error, xe = L.Function, He = L.Math, Ee = L.Object, mi = L.RegExp, mf = L.String, Tt = L.TypeError, Qr = A.prototype, wf = xe.prototype, Zn = Ee.prototype, jr = L["__core-js_shared__"], eo = wf.toString, Ne = Zn.hasOwnProperty, bf = 0, Ea = function() {
        var e = /[^.]+$/.exec(jr && jr.keys && jr.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), to = Zn.toString, xf = eo.call(Ee), yf = Je._, Cf = mi(
        "^" + eo.call(Ne).replace(fr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), no = la ? L.Buffer : r, xn = L.Symbol, ro = L.Uint8Array, Sa = no ? no.allocUnsafe : r, oo = _a(Ee.getPrototypeOf, Ee), Da = Ee.create, Oa = Zn.propertyIsEnumerable, io = Qr.splice, Ra = xn ? xn.isConcatSpreadable : r, xr = xn ? xn.iterator : r, On = xn ? xn.toStringTag : r, so = function() {
        try {
          var e = In(Ee, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), Nf = L.clearTimeout !== Je.clearTimeout && L.clearTimeout, _f = K && K.now !== Je.Date.now && K.now, $f = L.setTimeout !== Je.setTimeout && L.setTimeout, ao = He.ceil, co = He.floor, wi = Ee.getOwnPropertySymbols, Ef = no ? no.isBuffer : r, Pa = L.isFinite, Sf = Qr.join, Df = _a(Ee.keys, Ee), Ge = He.max, tt = He.min, Of = K.now, Rf = L.parseInt, Aa = He.random, Pf = Qr.reverse, bi = In(L, "DataView"), yr = In(L, "Map"), xi = In(L, "Promise"), Xn = In(L, "Set"), Cr = In(L, "WeakMap"), Nr = In(Ee, "create"), lo = Cr && new Cr(), Jn = {}, Af = Ln(bi), Tf = Ln(yr), If = Ln(xi), Lf = Ln(Xn), Mf = Ln(Cr), uo = xn ? xn.prototype : r, _r = uo ? uo.valueOf : r, Ta = uo ? uo.toString : r;
      function p(e) {
        if (Ie(e) && !re(e) && !(e instanceof pe)) {
          if (e instanceof It)
            return e;
          if (Ne.call(e, "__wrapped__"))
            return Ic(e);
        }
        return new It(e);
      }
      var Qn = function() {
        function e() {
        }
        return function(t) {
          if (!Ae(t))
            return {};
          if (Da)
            return Da(t);
          e.prototype = t;
          var i = new e();
          return e.prototype = r, i;
        };
      }();
      function fo() {
      }
      function It(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = r;
      }
      p.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Wn,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Kr,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Mr,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: p
        }
      }, p.prototype = fo.prototype, p.prototype.constructor = p, It.prototype = Qn(fo.prototype), It.prototype.constructor = It;
      function pe(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ae, this.__views__ = [];
      }
      function Ff() {
        var e = new pe(this.__wrapped__);
        return e.__actions__ = ft(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = ft(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = ft(this.__views__), e;
      }
      function kf() {
        if (this.__filtered__) {
          var e = new pe(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function Wf() {
        var e = this.__wrapped__.value(), t = this.__dir__, i = re(e), a = t < 0, d = i ? e.length : 0, g = Jh(0, d, this.__views__), x = g.start, E = g.end, D = E - x, F = a ? E : x - 1, k = this.__iteratees__, B = k.length, H = 0, V = tt(D, this.__takeCount__);
        if (!i || !a && d == D && V == D)
          return rc(e, this.__actions__);
        var J = [];
        e:
          for (; D-- && H < V; ) {
            F += t;
            for (var ce = -1, Q = e[F]; ++ce < B; ) {
              var fe = k[ce], ge = fe.iteratee, $t = fe.type, st = ge(Q);
              if ($t == me)
                Q = st;
              else if (!st) {
                if ($t == ee)
                  continue e;
                break e;
              }
            }
            J[H++] = Q;
          }
        return J;
      }
      pe.prototype = Qn(fo.prototype), pe.prototype.constructor = pe;
      function Rn(e) {
        var t = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++t < i; ) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      function Bf() {
        this.__data__ = Nr ? Nr(null) : {}, this.size = 0;
      }
      function Uf(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      function zf(e) {
        var t = this.__data__;
        if (Nr) {
          var i = t[e];
          return i === h ? r : i;
        }
        return Ne.call(t, e) ? t[e] : r;
      }
      function Hf(e) {
        var t = this.__data__;
        return Nr ? t[e] !== r : Ne.call(t, e);
      }
      function Gf(e, t) {
        var i = this.__data__;
        return this.size += this.has(e) ? 0 : 1, i[e] = Nr && t === r ? h : t, this;
      }
      Rn.prototype.clear = Bf, Rn.prototype.delete = Uf, Rn.prototype.get = zf, Rn.prototype.has = Hf, Rn.prototype.set = Gf;
      function en(e) {
        var t = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++t < i; ) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      function Kf() {
        this.__data__ = [], this.size = 0;
      }
      function Vf(e) {
        var t = this.__data__, i = ho(t, e);
        if (i < 0)
          return !1;
        var a = t.length - 1;
        return i == a ? t.pop() : io.call(t, i, 1), --this.size, !0;
      }
      function qf(e) {
        var t = this.__data__, i = ho(t, e);
        return i < 0 ? r : t[i][1];
      }
      function Yf(e) {
        return ho(this.__data__, e) > -1;
      }
      function Zf(e, t) {
        var i = this.__data__, a = ho(i, e);
        return a < 0 ? (++this.size, i.push([e, t])) : i[a][1] = t, this;
      }
      en.prototype.clear = Kf, en.prototype.delete = Vf, en.prototype.get = qf, en.prototype.has = Yf, en.prototype.set = Zf;
      function tn(e) {
        var t = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++t < i; ) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      function Xf() {
        this.size = 0, this.__data__ = {
          hash: new Rn(),
          map: new (yr || en)(),
          string: new Rn()
        };
      }
      function Jf(e) {
        var t = $o(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      function Qf(e) {
        return $o(this, e).get(e);
      }
      function jf(e) {
        return $o(this, e).has(e);
      }
      function eh(e, t) {
        var i = $o(this, e), a = i.size;
        return i.set(e, t), this.size += i.size == a ? 0 : 1, this;
      }
      tn.prototype.clear = Xf, tn.prototype.delete = Jf, tn.prototype.get = Qf, tn.prototype.has = jf, tn.prototype.set = eh;
      function Pn(e) {
        var t = -1, i = e == null ? 0 : e.length;
        for (this.__data__ = new tn(); ++t < i; )
          this.add(e[t]);
      }
      function th(e) {
        return this.__data__.set(e, h), this;
      }
      function nh(e) {
        return this.__data__.has(e);
      }
      Pn.prototype.add = Pn.prototype.push = th, Pn.prototype.has = nh;
      function zt(e) {
        var t = this.__data__ = new en(e);
        this.size = t.size;
      }
      function rh() {
        this.__data__ = new en(), this.size = 0;
      }
      function oh(e) {
        var t = this.__data__, i = t.delete(e);
        return this.size = t.size, i;
      }
      function ih(e) {
        return this.__data__.get(e);
      }
      function sh(e) {
        return this.__data__.has(e);
      }
      function ah(e, t) {
        var i = this.__data__;
        if (i instanceof en) {
          var a = i.__data__;
          if (!yr || a.length < c - 1)
            return a.push([e, t]), this.size = ++i.size, this;
          i = this.__data__ = new tn(a);
        }
        return i.set(e, t), this.size = i.size, this;
      }
      zt.prototype.clear = rh, zt.prototype.delete = oh, zt.prototype.get = ih, zt.prototype.has = sh, zt.prototype.set = ah;
      function Ia(e, t) {
        var i = re(e), a = !i && Mn(e), d = !i && !a && $n(e), g = !i && !a && !d && nr(e), x = i || a || d || g, E = x ? pi(e.length, mf) : [], D = E.length;
        for (var F in e)
          (t || Ne.call(e, F)) && !(x && // Safari 9 has enumerable `arguments.length` in strict mode.
          (F == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          d && (F == "offset" || F == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          g && (F == "buffer" || F == "byteLength" || F == "byteOffset") || // Skip index properties.
          sn(F, D))) && E.push(F);
        return E;
      }
      function La(e) {
        var t = e.length;
        return t ? e[Pi(0, t - 1)] : r;
      }
      function ch(e, t) {
        return Eo(ft(e), An(t, 0, e.length));
      }
      function lh(e) {
        return Eo(ft(e));
      }
      function yi(e, t, i) {
        (i !== r && !Ht(e[t], i) || i === r && !(t in e)) && nn(e, t, i);
      }
      function $r(e, t, i) {
        var a = e[t];
        (!(Ne.call(e, t) && Ht(a, i)) || i === r && !(t in e)) && nn(e, t, i);
      }
      function ho(e, t) {
        for (var i = e.length; i--; )
          if (Ht(e[i][0], t))
            return i;
        return -1;
      }
      function uh(e, t, i, a) {
        return yn(e, function(d, g, x) {
          t(a, d, i(d), x);
        }), a;
      }
      function Ma(e, t) {
        return e && Yt(t, qe(t), e);
      }
      function dh(e, t) {
        return e && Yt(t, pt(t), e);
      }
      function nn(e, t, i) {
        t == "__proto__" && so ? so(e, t, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : e[t] = i;
      }
      function Ci(e, t) {
        for (var i = -1, a = t.length, d = A(a), g = e == null; ++i < a; )
          d[i] = g ? r : ns(e, t[i]);
        return d;
      }
      function An(e, t, i) {
        return e === e && (i !== r && (e = e <= i ? e : i), t !== r && (e = e >= t ? e : t)), e;
      }
      function Lt(e, t, i, a, d, g) {
        var x, E = t & m, D = t & C, F = t & y;
        if (i && (x = d ? i(e, a, d, g) : i(e)), x !== r)
          return x;
        if (!Ae(e))
          return e;
        var k = re(e);
        if (k) {
          if (x = jh(e), !E)
            return ft(e, x);
        } else {
          var B = nt(e), H = B == rt || B == dn;
          if ($n(e))
            return sc(e, E);
          if (B == bt || B == Ue || H && !d) {
            if (x = D || H ? {} : $c(e), !E)
              return D ? zh(e, dh(x, e)) : Uh(e, Ma(x, e));
          } else {
            if (!Se[B])
              return d ? e : {};
            x = ep(e, B, E);
          }
        }
        g || (g = new zt());
        var V = g.get(e);
        if (V)
          return V;
        g.set(e, x), el(e) ? e.forEach(function(Q) {
          x.add(Lt(Q, t, i, Q, e, g));
        }) : Qc(e) && e.forEach(function(Q, fe) {
          x.set(fe, Lt(Q, t, i, fe, e, g));
        });
        var J = F ? D ? zi : Ui : D ? pt : qe, ce = k ? r : J(e);
        return At(ce || e, function(Q, fe) {
          ce && (fe = Q, Q = e[fe]), $r(x, fe, Lt(Q, t, i, fe, e, g));
        }), x;
      }
      function fh(e) {
        var t = qe(e);
        return function(i) {
          return Fa(i, e, t);
        };
      }
      function Fa(e, t, i) {
        var a = i.length;
        if (e == null)
          return !a;
        for (e = Ee(e); a--; ) {
          var d = i[a], g = t[d], x = e[d];
          if (x === r && !(d in e) || !g(x))
            return !1;
        }
        return !0;
      }
      function ka(e, t, i) {
        if (typeof e != "function")
          throw new Tt(u);
        return Ar(function() {
          e.apply(r, i);
        }, t);
      }
      function Er(e, t, i, a) {
        var d = -1, g = Zr, x = !0, E = e.length, D = [], F = t.length;
        if (!E)
          return D;
        i && (t = Pe(t, Ct(i))), a ? (g = ci, x = !1) : t.length >= c && (g = br, x = !1, t = new Pn(t));
        e:
          for (; ++d < E; ) {
            var k = e[d], B = i == null ? k : i(k);
            if (k = a || k !== 0 ? k : 0, x && B === B) {
              for (var H = F; H--; )
                if (t[H] === B)
                  continue e;
              D.push(k);
            } else
              g(t, B, a) || D.push(k);
          }
        return D;
      }
      var yn = dc(qt), Wa = dc(_i, !0);
      function hh(e, t) {
        var i = !0;
        return yn(e, function(a, d, g) {
          return i = !!t(a, d, g), i;
        }), i;
      }
      function po(e, t, i) {
        for (var a = -1, d = e.length; ++a < d; ) {
          var g = e[a], x = t(g);
          if (x != null && (E === r ? x === x && !_t(x) : i(x, E)))
            var E = x, D = g;
        }
        return D;
      }
      function ph(e, t, i, a) {
        var d = e.length;
        for (i = se(i), i < 0 && (i = -i > d ? 0 : d + i), a = a === r || a > d ? d : se(a), a < 0 && (a += d), a = i > a ? 0 : nl(a); i < a; )
          e[i++] = t;
        return e;
      }
      function Ba(e, t) {
        var i = [];
        return yn(e, function(a, d, g) {
          t(a, d, g) && i.push(a);
        }), i;
      }
      function Qe(e, t, i, a, d) {
        var g = -1, x = e.length;
        for (i || (i = np), d || (d = []); ++g < x; ) {
          var E = e[g];
          t > 0 && i(E) ? t > 1 ? Qe(E, t - 1, i, a, d) : wn(d, E) : a || (d[d.length] = E);
        }
        return d;
      }
      var Ni = fc(), Ua = fc(!0);
      function qt(e, t) {
        return e && Ni(e, t, qe);
      }
      function _i(e, t) {
        return e && Ua(e, t, qe);
      }
      function go(e, t) {
        return mn(t, function(i) {
          return an(e[i]);
        });
      }
      function Tn(e, t) {
        t = Nn(t, e);
        for (var i = 0, a = t.length; e != null && i < a; )
          e = e[Zt(t[i++])];
        return i && i == a ? e : r;
      }
      function za(e, t, i) {
        var a = t(e);
        return re(e) ? a : wn(a, i(e));
      }
      function ot(e) {
        return e == null ? e === r ? ei : gn : On && On in Ee(e) ? Xh(e) : lp(e);
      }
      function $i(e, t) {
        return e > t;
      }
      function gh(e, t) {
        return e != null && Ne.call(e, t);
      }
      function vh(e, t) {
        return e != null && t in Ee(e);
      }
      function mh(e, t, i) {
        return e >= tt(t, i) && e < Ge(t, i);
      }
      function Ei(e, t, i) {
        for (var a = i ? ci : Zr, d = e[0].length, g = e.length, x = g, E = A(g), D = 1 / 0, F = []; x--; ) {
          var k = e[x];
          x && t && (k = Pe(k, Ct(t))), D = tt(k.length, D), E[x] = !i && (t || d >= 120 && k.length >= 120) ? new Pn(x && k) : r;
        }
        k = e[0];
        var B = -1, H = E[0];
        e:
          for (; ++B < d && F.length < D; ) {
            var V = k[B], J = t ? t(V) : V;
            if (V = i || V !== 0 ? V : 0, !(H ? br(H, J) : a(F, J, i))) {
              for (x = g; --x; ) {
                var ce = E[x];
                if (!(ce ? br(ce, J) : a(e[x], J, i)))
                  continue e;
              }
              H && H.push(J), F.push(V);
            }
          }
        return F;
      }
      function wh(e, t, i, a) {
        return qt(e, function(d, g, x) {
          t(a, i(d), g, x);
        }), a;
      }
      function Sr(e, t, i) {
        t = Nn(t, e), e = Oc(e, t);
        var a = e == null ? e : e[Zt(Ft(t))];
        return a == null ? r : yt(a, e, i);
      }
      function Ha(e) {
        return Ie(e) && ot(e) == Ue;
      }
      function bh(e) {
        return Ie(e) && ot(e) == Qt;
      }
      function xh(e) {
        return Ie(e) && ot(e) == Be;
      }
      function Dr(e, t, i, a, d) {
        return e === t ? !0 : e == null || t == null || !Ie(e) && !Ie(t) ? e !== e && t !== t : yh(e, t, i, a, Dr, d);
      }
      function yh(e, t, i, a, d, g) {
        var x = re(e), E = re(t), D = x ? Le : nt(e), F = E ? Le : nt(t);
        D = D == Ue ? bt : D, F = F == Ue ? bt : F;
        var k = D == bt, B = F == bt, H = D == F;
        if (H && $n(e)) {
          if (!$n(t))
            return !1;
          x = !0, k = !1;
        }
        if (H && !k)
          return g || (g = new zt()), x || nr(e) ? Cc(e, t, i, a, d, g) : Yh(e, t, D, i, a, d, g);
        if (!(i & N)) {
          var V = k && Ne.call(e, "__wrapped__"), J = B && Ne.call(t, "__wrapped__");
          if (V || J) {
            var ce = V ? e.value() : e, Q = J ? t.value() : t;
            return g || (g = new zt()), d(ce, Q, i, a, g);
          }
        }
        return H ? (g || (g = new zt()), Zh(e, t, i, a, d, g)) : !1;
      }
      function Ch(e) {
        return Ie(e) && nt(e) == Ke;
      }
      function Si(e, t, i, a) {
        var d = i.length, g = d, x = !a;
        if (e == null)
          return !g;
        for (e = Ee(e); d--; ) {
          var E = i[d];
          if (x && E[2] ? E[1] !== e[E[0]] : !(E[0] in e))
            return !1;
        }
        for (; ++d < g; ) {
          E = i[d];
          var D = E[0], F = e[D], k = E[1];
          if (x && E[2]) {
            if (F === r && !(D in e))
              return !1;
          } else {
            var B = new zt();
            if (a)
              var H = a(F, k, D, e, t, B);
            if (!(H === r ? Dr(k, F, N | w, a, B) : H))
              return !1;
          }
        }
        return !0;
      }
      function Ga(e) {
        if (!Ae(e) || op(e))
          return !1;
        var t = an(e) ? Cf : dd;
        return t.test(Ln(e));
      }
      function Nh(e) {
        return Ie(e) && ot(e) == Ot;
      }
      function _h(e) {
        return Ie(e) && nt(e) == Xe;
      }
      function $h(e) {
        return Ie(e) && Ao(e.length) && !!Re[ot(e)];
      }
      function Ka(e) {
        return typeof e == "function" ? e : e == null ? gt : typeof e == "object" ? re(e) ? Ya(e[0], e[1]) : qa(e) : hl(e);
      }
      function Di(e) {
        if (!Pr(e))
          return Df(e);
        var t = [];
        for (var i in Ee(e))
          Ne.call(e, i) && i != "constructor" && t.push(i);
        return t;
      }
      function Eh(e) {
        if (!Ae(e))
          return cp(e);
        var t = Pr(e), i = [];
        for (var a in e)
          a == "constructor" && (t || !Ne.call(e, a)) || i.push(a);
        return i;
      }
      function Oi(e, t) {
        return e < t;
      }
      function Va(e, t) {
        var i = -1, a = ht(e) ? A(e.length) : [];
        return yn(e, function(d, g, x) {
          a[++i] = t(d, g, x);
        }), a;
      }
      function qa(e) {
        var t = Gi(e);
        return t.length == 1 && t[0][2] ? Sc(t[0][0], t[0][1]) : function(i) {
          return i === e || Si(i, e, t);
        };
      }
      function Ya(e, t) {
        return Vi(e) && Ec(t) ? Sc(Zt(e), t) : function(i) {
          var a = ns(i, e);
          return a === r && a === t ? rs(i, e) : Dr(t, a, N | w);
        };
      }
      function vo(e, t, i, a, d) {
        e !== t && Ni(t, function(g, x) {
          if (d || (d = new zt()), Ae(g))
            Sh(e, t, x, i, vo, a, d);
          else {
            var E = a ? a(Yi(e, x), g, x + "", e, t, d) : r;
            E === r && (E = g), yi(e, x, E);
          }
        }, pt);
      }
      function Sh(e, t, i, a, d, g, x) {
        var E = Yi(e, i), D = Yi(t, i), F = x.get(D);
        if (F) {
          yi(e, i, F);
          return;
        }
        var k = g ? g(E, D, i + "", e, t, x) : r, B = k === r;
        if (B) {
          var H = re(D), V = !H && $n(D), J = !H && !V && nr(D);
          k = D, H || V || J ? re(E) ? k = E : Fe(E) ? k = ft(E) : V ? (B = !1, k = sc(D, !0)) : J ? (B = !1, k = ac(D, !0)) : k = [] : Tr(D) || Mn(D) ? (k = E, Mn(E) ? k = rl(E) : (!Ae(E) || an(E)) && (k = $c(D))) : B = !1;
        }
        B && (x.set(D, k), d(k, D, a, g, x), x.delete(D)), yi(e, i, k);
      }
      function Za(e, t) {
        var i = e.length;
        if (i)
          return t += t < 0 ? i : 0, sn(t, i) ? e[t] : r;
      }
      function Xa(e, t, i) {
        t.length ? t = Pe(t, function(g) {
          return re(g) ? function(x) {
            return Tn(x, g.length === 1 ? g[0] : g);
          } : g;
        }) : t = [gt];
        var a = -1;
        t = Pe(t, Ct(X()));
        var d = Va(e, function(g, x, E) {
          var D = Pe(t, function(F) {
            return F(g);
          });
          return { criteria: D, index: ++a, value: g };
        });
        return jd(d, function(g, x) {
          return Bh(g, x, i);
        });
      }
      function Dh(e, t) {
        return Ja(e, t, function(i, a) {
          return rs(e, a);
        });
      }
      function Ja(e, t, i) {
        for (var a = -1, d = t.length, g = {}; ++a < d; ) {
          var x = t[a], E = Tn(e, x);
          i(E, x) && Or(g, Nn(x, e), E);
        }
        return g;
      }
      function Oh(e) {
        return function(t) {
          return Tn(t, e);
        };
      }
      function Ri(e, t, i, a) {
        var d = a ? Qd : Kn, g = -1, x = t.length, E = e;
        for (e === t && (t = ft(t)), i && (E = Pe(e, Ct(i))); ++g < x; )
          for (var D = 0, F = t[g], k = i ? i(F) : F; (D = d(E, k, D, a)) > -1; )
            E !== e && io.call(E, D, 1), io.call(e, D, 1);
        return e;
      }
      function Qa(e, t) {
        for (var i = e ? t.length : 0, a = i - 1; i--; ) {
          var d = t[i];
          if (i == a || d !== g) {
            var g = d;
            sn(d) ? io.call(e, d, 1) : Ii(e, d);
          }
        }
        return e;
      }
      function Pi(e, t) {
        return e + co(Aa() * (t - e + 1));
      }
      function Rh(e, t, i, a) {
        for (var d = -1, g = Ge(ao((t - e) / (i || 1)), 0), x = A(g); g--; )
          x[a ? g : ++d] = e, e += i;
        return x;
      }
      function Ai(e, t) {
        var i = "";
        if (!e || t < 1 || t > we)
          return i;
        do
          t % 2 && (i += e), t = co(t / 2), t && (e += e);
        while (t);
        return i;
      }
      function ue(e, t) {
        return Zi(Dc(e, t, gt), e + "");
      }
      function Ph(e) {
        return La(rr(e));
      }
      function Ah(e, t) {
        var i = rr(e);
        return Eo(i, An(t, 0, i.length));
      }
      function Or(e, t, i, a) {
        if (!Ae(e))
          return e;
        t = Nn(t, e);
        for (var d = -1, g = t.length, x = g - 1, E = e; E != null && ++d < g; ) {
          var D = Zt(t[d]), F = i;
          if (D === "__proto__" || D === "constructor" || D === "prototype")
            return e;
          if (d != x) {
            var k = E[D];
            F = a ? a(k, D, E) : r, F === r && (F = Ae(k) ? k : sn(t[d + 1]) ? [] : {});
          }
          $r(E, D, F), E = E[D];
        }
        return e;
      }
      var ja = lo ? function(e, t) {
        return lo.set(e, t), e;
      } : gt, Th = so ? function(e, t) {
        return so(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: is(t),
          writable: !0
        });
      } : gt;
      function Ih(e) {
        return Eo(rr(e));
      }
      function Mt(e, t, i) {
        var a = -1, d = e.length;
        t < 0 && (t = -t > d ? 0 : d + t), i = i > d ? d : i, i < 0 && (i += d), d = t > i ? 0 : i - t >>> 0, t >>>= 0;
        for (var g = A(d); ++a < d; )
          g[a] = e[a + t];
        return g;
      }
      function Lh(e, t) {
        var i;
        return yn(e, function(a, d, g) {
          return i = t(a, d, g), !i;
        }), !!i;
      }
      function mo(e, t, i) {
        var a = 0, d = e == null ? a : e.length;
        if (typeof t == "number" && t === t && d <= $e) {
          for (; a < d; ) {
            var g = a + d >>> 1, x = e[g];
            x !== null && !_t(x) && (i ? x <= t : x < t) ? a = g + 1 : d = g;
          }
          return d;
        }
        return Ti(e, t, gt, i);
      }
      function Ti(e, t, i, a) {
        var d = 0, g = e == null ? 0 : e.length;
        if (g === 0)
          return 0;
        t = i(t);
        for (var x = t !== t, E = t === null, D = _t(t), F = t === r; d < g; ) {
          var k = co((d + g) / 2), B = i(e[k]), H = B !== r, V = B === null, J = B === B, ce = _t(B);
          if (x)
            var Q = a || J;
          else
            F ? Q = J && (a || H) : E ? Q = J && H && (a || !V) : D ? Q = J && H && !V && (a || !ce) : V || ce ? Q = !1 : Q = a ? B <= t : B < t;
          Q ? d = k + 1 : g = k;
        }
        return tt(g, he);
      }
      function ec(e, t) {
        for (var i = -1, a = e.length, d = 0, g = []; ++i < a; ) {
          var x = e[i], E = t ? t(x) : x;
          if (!i || !Ht(E, D)) {
            var D = E;
            g[d++] = x === 0 ? 0 : x;
          }
        }
        return g;
      }
      function tc(e) {
        return typeof e == "number" ? e : _t(e) ? le : +e;
      }
      function Nt(e) {
        if (typeof e == "string")
          return e;
        if (re(e))
          return Pe(e, Nt) + "";
        if (_t(e))
          return Ta ? Ta.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -De ? "-0" : t;
      }
      function Cn(e, t, i) {
        var a = -1, d = Zr, g = e.length, x = !0, E = [], D = E;
        if (i)
          x = !1, d = ci;
        else if (g >= c) {
          var F = t ? null : Vh(e);
          if (F)
            return Jr(F);
          x = !1, d = br, D = new Pn();
        } else
          D = t ? [] : E;
        e:
          for (; ++a < g; ) {
            var k = e[a], B = t ? t(k) : k;
            if (k = i || k !== 0 ? k : 0, x && B === B) {
              for (var H = D.length; H--; )
                if (D[H] === B)
                  continue e;
              t && D.push(B), E.push(k);
            } else
              d(D, B, i) || (D !== E && D.push(B), E.push(k));
          }
        return E;
      }
      function Ii(e, t) {
        return t = Nn(t, e), e = Oc(e, t), e == null || delete e[Zt(Ft(t))];
      }
      function nc(e, t, i, a) {
        return Or(e, t, i(Tn(e, t)), a);
      }
      function wo(e, t, i, a) {
        for (var d = e.length, g = a ? d : -1; (a ? g-- : ++g < d) && t(e[g], g, e); )
          ;
        return i ? Mt(e, a ? 0 : g, a ? g + 1 : d) : Mt(e, a ? g + 1 : 0, a ? d : g);
      }
      function rc(e, t) {
        var i = e;
        return i instanceof pe && (i = i.value()), li(t, function(a, d) {
          return d.func.apply(d.thisArg, wn([a], d.args));
        }, i);
      }
      function Li(e, t, i) {
        var a = e.length;
        if (a < 2)
          return a ? Cn(e[0]) : [];
        for (var d = -1, g = A(a); ++d < a; )
          for (var x = e[d], E = -1; ++E < a; )
            E != d && (g[d] = Er(g[d] || x, e[E], t, i));
        return Cn(Qe(g, 1), t, i);
      }
      function oc(e, t, i) {
        for (var a = -1, d = e.length, g = t.length, x = {}; ++a < d; ) {
          var E = a < g ? t[a] : r;
          i(x, e[a], E);
        }
        return x;
      }
      function Mi(e) {
        return Fe(e) ? e : [];
      }
      function Fi(e) {
        return typeof e == "function" ? e : gt;
      }
      function Nn(e, t) {
        return re(e) ? e : Vi(e, t) ? [e] : Tc(Ce(e));
      }
      var Mh = ue;
      function _n(e, t, i) {
        var a = e.length;
        return i = i === r ? a : i, !t && i >= a ? e : Mt(e, t, i);
      }
      var ic = Nf || function(e) {
        return Je.clearTimeout(e);
      };
      function sc(e, t) {
        if (t)
          return e.slice();
        var i = e.length, a = Sa ? Sa(i) : new e.constructor(i);
        return e.copy(a), a;
      }
      function ki(e) {
        var t = new e.constructor(e.byteLength);
        return new ro(t).set(new ro(e)), t;
      }
      function Fh(e, t) {
        var i = t ? ki(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.byteLength);
      }
      function kh(e) {
        var t = new e.constructor(e.source, Hs.exec(e));
        return t.lastIndex = e.lastIndex, t;
      }
      function Wh(e) {
        return _r ? Ee(_r.call(e)) : {};
      }
      function ac(e, t) {
        var i = t ? ki(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.length);
      }
      function cc(e, t) {
        if (e !== t) {
          var i = e !== r, a = e === null, d = e === e, g = _t(e), x = t !== r, E = t === null, D = t === t, F = _t(t);
          if (!E && !F && !g && e > t || g && x && D && !E && !F || a && x && D || !i && D || !d)
            return 1;
          if (!a && !g && !F && e < t || F && i && d && !a && !g || E && i && d || !x && d || !D)
            return -1;
        }
        return 0;
      }
      function Bh(e, t, i) {
        for (var a = -1, d = e.criteria, g = t.criteria, x = d.length, E = i.length; ++a < x; ) {
          var D = cc(d[a], g[a]);
          if (D) {
            if (a >= E)
              return D;
            var F = i[a];
            return D * (F == "desc" ? -1 : 1);
          }
        }
        return e.index - t.index;
      }
      function lc(e, t, i, a) {
        for (var d = -1, g = e.length, x = i.length, E = -1, D = t.length, F = Ge(g - x, 0), k = A(D + F), B = !a; ++E < D; )
          k[E] = t[E];
        for (; ++d < x; )
          (B || d < g) && (k[i[d]] = e[d]);
        for (; F--; )
          k[E++] = e[d++];
        return k;
      }
      function uc(e, t, i, a) {
        for (var d = -1, g = e.length, x = -1, E = i.length, D = -1, F = t.length, k = Ge(g - E, 0), B = A(k + F), H = !a; ++d < k; )
          B[d] = e[d];
        for (var V = d; ++D < F; )
          B[V + D] = t[D];
        for (; ++x < E; )
          (H || d < g) && (B[V + i[x]] = e[d++]);
        return B;
      }
      function ft(e, t) {
        var i = -1, a = e.length;
        for (t || (t = A(a)); ++i < a; )
          t[i] = e[i];
        return t;
      }
      function Yt(e, t, i, a) {
        var d = !i;
        i || (i = {});
        for (var g = -1, x = t.length; ++g < x; ) {
          var E = t[g], D = a ? a(i[E], e[E], E, i, e) : r;
          D === r && (D = e[E]), d ? nn(i, E, D) : $r(i, E, D);
        }
        return i;
      }
      function Uh(e, t) {
        return Yt(e, Ki(e), t);
      }
      function zh(e, t) {
        return Yt(e, Nc(e), t);
      }
      function bo(e, t) {
        return function(i, a) {
          var d = re(i) ? Vd : uh, g = t ? t() : {};
          return d(i, e, X(a, 2), g);
        };
      }
      function jn(e) {
        return ue(function(t, i) {
          var a = -1, d = i.length, g = d > 1 ? i[d - 1] : r, x = d > 2 ? i[2] : r;
          for (g = e.length > 3 && typeof g == "function" ? (d--, g) : r, x && it(i[0], i[1], x) && (g = d < 3 ? r : g, d = 1), t = Ee(t); ++a < d; ) {
            var E = i[a];
            E && e(t, E, a, g);
          }
          return t;
        });
      }
      function dc(e, t) {
        return function(i, a) {
          if (i == null)
            return i;
          if (!ht(i))
            return e(i, a);
          for (var d = i.length, g = t ? d : -1, x = Ee(i); (t ? g-- : ++g < d) && a(x[g], g, x) !== !1; )
            ;
          return i;
        };
      }
      function fc(e) {
        return function(t, i, a) {
          for (var d = -1, g = Ee(t), x = a(t), E = x.length; E--; ) {
            var D = x[e ? E : ++d];
            if (i(g[D], D, g) === !1)
              break;
          }
          return t;
        };
      }
      function Hh(e, t, i) {
        var a = t & _, d = Rr(e);
        function g() {
          var x = this && this !== Je && this instanceof g ? d : e;
          return x.apply(a ? i : this, arguments);
        }
        return g;
      }
      function hc(e) {
        return function(t) {
          t = Ce(t);
          var i = Vn(t) ? Ut(t) : r, a = i ? i[0] : t.charAt(0), d = i ? _n(i, 1).join("") : t.slice(1);
          return a[e]() + d;
        };
      }
      function er(e) {
        return function(t) {
          return li(dl(ul(t).replace(Ad, "")), e, "");
        };
      }
      function Rr(e) {
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new e();
            case 1:
              return new e(t[0]);
            case 2:
              return new e(t[0], t[1]);
            case 3:
              return new e(t[0], t[1], t[2]);
            case 4:
              return new e(t[0], t[1], t[2], t[3]);
            case 5:
              return new e(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var i = Qn(e.prototype), a = e.apply(i, t);
          return Ae(a) ? a : i;
        };
      }
      function Gh(e, t, i) {
        var a = Rr(e);
        function d() {
          for (var g = arguments.length, x = A(g), E = g, D = tr(d); E--; )
            x[E] = arguments[E];
          var F = g < 3 && x[0] !== D && x[g - 1] !== D ? [] : bn(x, D);
          if (g -= F.length, g < i)
            return wc(
              e,
              t,
              xo,
              d.placeholder,
              r,
              x,
              F,
              r,
              r,
              i - g
            );
          var k = this && this !== Je && this instanceof d ? a : e;
          return yt(k, this, x);
        }
        return d;
      }
      function pc(e) {
        return function(t, i, a) {
          var d = Ee(t);
          if (!ht(t)) {
            var g = X(i, 3);
            t = qe(t), i = function(E) {
              return g(d[E], E, d);
            };
          }
          var x = e(t, i, a);
          return x > -1 ? d[g ? t[x] : x] : r;
        };
      }
      function gc(e) {
        return on(function(t) {
          var i = t.length, a = i, d = It.prototype.thru;
          for (e && t.reverse(); a--; ) {
            var g = t[a];
            if (typeof g != "function")
              throw new Tt(u);
            if (d && !x && _o(g) == "wrapper")
              var x = new It([], !0);
          }
          for (a = x ? a : i; ++a < i; ) {
            g = t[a];
            var E = _o(g), D = E == "wrapper" ? Hi(g) : r;
            D && qi(D[0]) && D[1] == (W | O | I | U) && !D[4].length && D[9] == 1 ? x = x[_o(D[0])].apply(x, D[3]) : x = g.length == 1 && qi(g) ? x[E]() : x.thru(g);
          }
          return function() {
            var F = arguments, k = F[0];
            if (x && F.length == 1 && re(k))
              return x.plant(k).value();
            for (var B = 0, H = i ? t[B].apply(this, F) : k; ++B < i; )
              H = t[B].call(this, H);
            return H;
          };
        });
      }
      function xo(e, t, i, a, d, g, x, E, D, F) {
        var k = t & W, B = t & _, H = t & $, V = t & (O | P), J = t & G, ce = H ? r : Rr(e);
        function Q() {
          for (var fe = arguments.length, ge = A(fe), $t = fe; $t--; )
            ge[$t] = arguments[$t];
          if (V)
            var st = tr(Q), Et = tf(ge, st);
          if (a && (ge = lc(ge, a, d, V)), g && (ge = uc(ge, g, x, V)), fe -= Et, V && fe < F) {
            var ke = bn(ge, st);
            return wc(
              e,
              t,
              xo,
              Q.placeholder,
              i,
              ge,
              ke,
              E,
              D,
              F - fe
            );
          }
          var Gt = B ? i : this, ln = H ? Gt[e] : e;
          return fe = ge.length, E ? ge = up(ge, E) : J && fe > 1 && ge.reverse(), k && D < fe && (ge.length = D), this && this !== Je && this instanceof Q && (ln = ce || Rr(ln)), ln.apply(Gt, ge);
        }
        return Q;
      }
      function vc(e, t) {
        return function(i, a) {
          return wh(i, e, t(a), {});
        };
      }
      function yo(e, t) {
        return function(i, a) {
          var d;
          if (i === r && a === r)
            return t;
          if (i !== r && (d = i), a !== r) {
            if (d === r)
              return a;
            typeof i == "string" || typeof a == "string" ? (i = Nt(i), a = Nt(a)) : (i = tc(i), a = tc(a)), d = e(i, a);
          }
          return d;
        };
      }
      function Wi(e) {
        return on(function(t) {
          return t = Pe(t, Ct(X())), ue(function(i) {
            var a = this;
            return e(t, function(d) {
              return yt(d, a, i);
            });
          });
        });
      }
      function Co(e, t) {
        t = t === r ? " " : Nt(t);
        var i = t.length;
        if (i < 2)
          return i ? Ai(t, e) : t;
        var a = Ai(t, ao(e / qn(t)));
        return Vn(t) ? _n(Ut(a), 0, e).join("") : a.slice(0, e);
      }
      function Kh(e, t, i, a) {
        var d = t & _, g = Rr(e);
        function x() {
          for (var E = -1, D = arguments.length, F = -1, k = a.length, B = A(k + D), H = this && this !== Je && this instanceof x ? g : e; ++F < k; )
            B[F] = a[F];
          for (; D--; )
            B[F++] = arguments[++E];
          return yt(H, d ? i : this, B);
        }
        return x;
      }
      function mc(e) {
        return function(t, i, a) {
          return a && typeof a != "number" && it(t, i, a) && (i = a = r), t = cn(t), i === r ? (i = t, t = 0) : i = cn(i), a = a === r ? t < i ? 1 : -1 : cn(a), Rh(t, i, a, e);
        };
      }
      function No(e) {
        return function(t, i) {
          return typeof t == "string" && typeof i == "string" || (t = kt(t), i = kt(i)), e(t, i);
        };
      }
      function wc(e, t, i, a, d, g, x, E, D, F) {
        var k = t & O, B = k ? x : r, H = k ? r : x, V = k ? g : r, J = k ? r : g;
        t |= k ? I : M, t &= ~(k ? M : I), t & R || (t &= ~(_ | $));
        var ce = [
          e,
          t,
          d,
          V,
          B,
          J,
          H,
          E,
          D,
          F
        ], Q = i.apply(r, ce);
        return qi(e) && Rc(Q, ce), Q.placeholder = a, Pc(Q, e, t);
      }
      function Bi(e) {
        var t = He[e];
        return function(i, a) {
          if (i = kt(i), a = a == null ? 0 : tt(se(a), 292), a && Pa(i)) {
            var d = (Ce(i) + "e").split("e"), g = t(d[0] + "e" + (+d[1] + a));
            return d = (Ce(g) + "e").split("e"), +(d[0] + "e" + (+d[1] - a));
          }
          return t(i);
        };
      }
      var Vh = Xn && 1 / Jr(new Xn([, -0]))[1] == De ? function(e) {
        return new Xn(e);
      } : cs;
      function bc(e) {
        return function(t) {
          var i = nt(t);
          return i == Ke ? vi(t) : i == Xe ? lf(t) : ef(t, e(t));
        };
      }
      function rn(e, t, i, a, d, g, x, E) {
        var D = t & $;
        if (!D && typeof e != "function")
          throw new Tt(u);
        var F = a ? a.length : 0;
        if (F || (t &= ~(I | M), a = d = r), x = x === r ? x : Ge(se(x), 0), E = E === r ? E : se(E), F -= d ? d.length : 0, t & M) {
          var k = a, B = d;
          a = d = r;
        }
        var H = D ? r : Hi(e), V = [
          e,
          t,
          i,
          a,
          d,
          k,
          B,
          g,
          x,
          E
        ];
        if (H && ap(V, H), e = V[0], t = V[1], i = V[2], a = V[3], d = V[4], E = V[9] = V[9] === r ? D ? 0 : e.length : Ge(V[9] - F, 0), !E && t & (O | P) && (t &= ~(O | P)), !t || t == _)
          var J = Hh(e, t, i);
        else
          t == O || t == P ? J = Gh(e, t, E) : (t == I || t == (_ | I)) && !d.length ? J = Kh(e, t, i, a) : J = xo.apply(r, V);
        var ce = H ? ja : Rc;
        return Pc(ce(J, V), e, t);
      }
      function xc(e, t, i, a) {
        return e === r || Ht(e, Zn[i]) && !Ne.call(a, i) ? t : e;
      }
      function yc(e, t, i, a, d, g) {
        return Ae(e) && Ae(t) && (g.set(t, e), vo(e, t, r, yc, g), g.delete(t)), e;
      }
      function qh(e) {
        return Tr(e) ? r : e;
      }
      function Cc(e, t, i, a, d, g) {
        var x = i & N, E = e.length, D = t.length;
        if (E != D && !(x && D > E))
          return !1;
        var F = g.get(e), k = g.get(t);
        if (F && k)
          return F == t && k == e;
        var B = -1, H = !0, V = i & w ? new Pn() : r;
        for (g.set(e, t), g.set(t, e); ++B < E; ) {
          var J = e[B], ce = t[B];
          if (a)
            var Q = x ? a(ce, J, B, t, e, g) : a(J, ce, B, e, t, g);
          if (Q !== r) {
            if (Q)
              continue;
            H = !1;
            break;
          }
          if (V) {
            if (!ui(t, function(fe, ge) {
              if (!br(V, ge) && (J === fe || d(J, fe, i, a, g)))
                return V.push(ge);
            })) {
              H = !1;
              break;
            }
          } else if (!(J === ce || d(J, ce, i, a, g))) {
            H = !1;
            break;
          }
        }
        return g.delete(e), g.delete(t), H;
      }
      function Yh(e, t, i, a, d, g, x) {
        switch (i) {
          case hn:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            e = e.buffer, t = t.buffer;
          case Qt:
            return !(e.byteLength != t.byteLength || !g(new ro(e), new ro(t)));
          case Me:
          case Be:
          case ze:
            return Ht(+e, +t);
          case We:
            return e.name == t.name && e.message == t.message;
          case Ot:
          case fn:
            return e == t + "";
          case Ke:
            var E = vi;
          case Xe:
            var D = a & N;
            if (E || (E = Jr), e.size != t.size && !D)
              return !1;
            var F = x.get(e);
            if (F)
              return F == t;
            a |= w, x.set(e, t);
            var k = Cc(E(e), E(t), a, d, g, x);
            return x.delete(e), k;
          case kn:
            if (_r)
              return _r.call(e) == _r.call(t);
        }
        return !1;
      }
      function Zh(e, t, i, a, d, g) {
        var x = i & N, E = Ui(e), D = E.length, F = Ui(t), k = F.length;
        if (D != k && !x)
          return !1;
        for (var B = D; B--; ) {
          var H = E[B];
          if (!(x ? H in t : Ne.call(t, H)))
            return !1;
        }
        var V = g.get(e), J = g.get(t);
        if (V && J)
          return V == t && J == e;
        var ce = !0;
        g.set(e, t), g.set(t, e);
        for (var Q = x; ++B < D; ) {
          H = E[B];
          var fe = e[H], ge = t[H];
          if (a)
            var $t = x ? a(ge, fe, H, t, e, g) : a(fe, ge, H, e, t, g);
          if (!($t === r ? fe === ge || d(fe, ge, i, a, g) : $t)) {
            ce = !1;
            break;
          }
          Q || (Q = H == "constructor");
        }
        if (ce && !Q) {
          var st = e.constructor, Et = t.constructor;
          st != Et && "constructor" in e && "constructor" in t && !(typeof st == "function" && st instanceof st && typeof Et == "function" && Et instanceof Et) && (ce = !1);
        }
        return g.delete(e), g.delete(t), ce;
      }
      function on(e) {
        return Zi(Dc(e, r, Fc), e + "");
      }
      function Ui(e) {
        return za(e, qe, Ki);
      }
      function zi(e) {
        return za(e, pt, Nc);
      }
      var Hi = lo ? function(e) {
        return lo.get(e);
      } : cs;
      function _o(e) {
        for (var t = e.name + "", i = Jn[t], a = Ne.call(Jn, t) ? i.length : 0; a--; ) {
          var d = i[a], g = d.func;
          if (g == null || g == e)
            return d.name;
        }
        return t;
      }
      function tr(e) {
        var t = Ne.call(p, "placeholder") ? p : e;
        return t.placeholder;
      }
      function X() {
        var e = p.iteratee || ss;
        return e = e === ss ? Ka : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function $o(e, t) {
        var i = e.__data__;
        return rp(t) ? i[typeof t == "string" ? "string" : "hash"] : i.map;
      }
      function Gi(e) {
        for (var t = qe(e), i = t.length; i--; ) {
          var a = t[i], d = e[a];
          t[i] = [a, d, Ec(d)];
        }
        return t;
      }
      function In(e, t) {
        var i = sf(e, t);
        return Ga(i) ? i : r;
      }
      function Xh(e) {
        var t = Ne.call(e, On), i = e[On];
        try {
          e[On] = r;
          var a = !0;
        } catch {
        }
        var d = to.call(e);
        return a && (t ? e[On] = i : delete e[On]), d;
      }
      var Ki = wi ? function(e) {
        return e == null ? [] : (e = Ee(e), mn(wi(e), function(t) {
          return Oa.call(e, t);
        }));
      } : ls, Nc = wi ? function(e) {
        for (var t = []; e; )
          wn(t, Ki(e)), e = oo(e);
        return t;
      } : ls, nt = ot;
      (bi && nt(new bi(new ArrayBuffer(1))) != hn || yr && nt(new yr()) != Ke || xi && nt(xi.resolve()) != Fn || Xn && nt(new Xn()) != Xe || Cr && nt(new Cr()) != xt) && (nt = function(e) {
        var t = ot(e), i = t == bt ? e.constructor : r, a = i ? Ln(i) : "";
        if (a)
          switch (a) {
            case Af:
              return hn;
            case Tf:
              return Ke;
            case If:
              return Fn;
            case Lf:
              return Xe;
            case Mf:
              return xt;
          }
        return t;
      });
      function Jh(e, t, i) {
        for (var a = -1, d = i.length; ++a < d; ) {
          var g = i[a], x = g.size;
          switch (g.type) {
            case "drop":
              e += x;
              break;
            case "dropRight":
              t -= x;
              break;
            case "take":
              t = tt(t, e + x);
              break;
            case "takeRight":
              e = Ge(e, t - x);
              break;
          }
        }
        return { start: e, end: t };
      }
      function Qh(e) {
        var t = e.match(rd);
        return t ? t[1].split(od) : [];
      }
      function _c(e, t, i) {
        t = Nn(t, e);
        for (var a = -1, d = t.length, g = !1; ++a < d; ) {
          var x = Zt(t[a]);
          if (!(g = e != null && i(e, x)))
            break;
          e = e[x];
        }
        return g || ++a != d ? g : (d = e == null ? 0 : e.length, !!d && Ao(d) && sn(x, d) && (re(e) || Mn(e)));
      }
      function jh(e) {
        var t = e.length, i = new e.constructor(t);
        return t && typeof e[0] == "string" && Ne.call(e, "index") && (i.index = e.index, i.input = e.input), i;
      }
      function $c(e) {
        return typeof e.constructor == "function" && !Pr(e) ? Qn(oo(e)) : {};
      }
      function ep(e, t, i) {
        var a = e.constructor;
        switch (t) {
          case Qt:
            return ki(e);
          case Me:
          case Be:
            return new a(+e);
          case hn:
            return Fh(e, i);
          case pn:
          case cr:
          case wr:
          case lr:
          case ur:
          case dr:
          case ut:
          case Bt:
          case Rt:
            return ac(e, i);
          case Ke:
            return new a();
          case ze:
          case fn:
            return new a(e);
          case Ot:
            return kh(e);
          case Xe:
            return new a();
          case kn:
            return Wh(e);
        }
      }
      function tp(e, t) {
        var i = t.length;
        if (!i)
          return e;
        var a = i - 1;
        return t[a] = (i > 1 ? "& " : "") + t[a], t = t.join(i > 2 ? ", " : " "), e.replace(nd, `{
/* [wrapped with ` + t + `] */
`);
      }
      function np(e) {
        return re(e) || Mn(e) || !!(Ra && e && e[Ra]);
      }
      function sn(e, t) {
        var i = typeof e;
        return t = t ?? we, !!t && (i == "number" || i != "symbol" && hd.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      function it(e, t, i) {
        if (!Ae(i))
          return !1;
        var a = typeof t;
        return (a == "number" ? ht(i) && sn(t, i.length) : a == "string" && t in i) ? Ht(i[t], e) : !1;
      }
      function Vi(e, t) {
        if (re(e))
          return !1;
        var i = typeof e;
        return i == "number" || i == "symbol" || i == "boolean" || e == null || _t(e) ? !0 : ws.test(e) || !zo.test(e) || t != null && e in Ee(t);
      }
      function rp(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      function qi(e) {
        var t = _o(e), i = p[t];
        if (typeof i != "function" || !(t in pe.prototype))
          return !1;
        if (e === i)
          return !0;
        var a = Hi(i);
        return !!a && e === a[0];
      }
      function op(e) {
        return !!Ea && Ea in e;
      }
      var ip = jr ? an : us;
      function Pr(e) {
        var t = e && e.constructor, i = typeof t == "function" && t.prototype || Zn;
        return e === i;
      }
      function Ec(e) {
        return e === e && !Ae(e);
      }
      function Sc(e, t) {
        return function(i) {
          return i == null ? !1 : i[e] === t && (t !== r || e in Ee(i));
        };
      }
      function sp(e) {
        var t = Ro(e, function(a) {
          return i.size === v && i.clear(), a;
        }), i = t.cache;
        return t;
      }
      function ap(e, t) {
        var i = e[1], a = t[1], d = i | a, g = d < (_ | $ | W), x = a == W && i == O || a == W && i == U && e[7].length <= t[8] || a == (W | U) && t[7].length <= t[8] && i == O;
        if (!(g || x))
          return e;
        a & _ && (e[2] = t[2], d |= i & _ ? 0 : R);
        var E = t[3];
        if (E) {
          var D = e[3];
          e[3] = D ? lc(D, E, t[4]) : E, e[4] = D ? bn(e[3], b) : t[4];
        }
        return E = t[5], E && (D = e[5], e[5] = D ? uc(D, E, t[6]) : E, e[6] = D ? bn(e[5], b) : t[6]), E = t[7], E && (e[7] = E), a & W && (e[8] = e[8] == null ? t[8] : tt(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = d, e;
      }
      function cp(e) {
        var t = [];
        if (e != null)
          for (var i in Ee(e))
            t.push(i);
        return t;
      }
      function lp(e) {
        return to.call(e);
      }
      function Dc(e, t, i) {
        return t = Ge(t === r ? e.length - 1 : t, 0), function() {
          for (var a = arguments, d = -1, g = Ge(a.length - t, 0), x = A(g); ++d < g; )
            x[d] = a[t + d];
          d = -1;
          for (var E = A(t + 1); ++d < t; )
            E[d] = a[d];
          return E[t] = i(x), yt(e, this, E);
        };
      }
      function Oc(e, t) {
        return t.length < 2 ? e : Tn(e, Mt(t, 0, -1));
      }
      function up(e, t) {
        for (var i = e.length, a = tt(t.length, i), d = ft(e); a--; ) {
          var g = t[a];
          e[a] = sn(g, i) ? d[g] : r;
        }
        return e;
      }
      function Yi(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
          return e[t];
      }
      var Rc = Ac(ja), Ar = $f || function(e, t) {
        return Je.setTimeout(e, t);
      }, Zi = Ac(Th);
      function Pc(e, t, i) {
        var a = t + "";
        return Zi(e, tp(a, dp(Qh(a), i)));
      }
      function Ac(e) {
        var t = 0, i = 0;
        return function() {
          var a = Of(), d = ye - (a - i);
          if (i = a, d > 0) {
            if (++t >= oe)
              return arguments[0];
          } else
            t = 0;
          return e.apply(r, arguments);
        };
      }
      function Eo(e, t) {
        var i = -1, a = e.length, d = a - 1;
        for (t = t === r ? a : t; ++i < t; ) {
          var g = Pi(i, d), x = e[g];
          e[g] = e[i], e[i] = x;
        }
        return e.length = t, e;
      }
      var Tc = sp(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(Fr, function(i, a, d, g) {
          t.push(d ? g.replace(ad, "$1") : a || i);
        }), t;
      });
      function Zt(e) {
        if (typeof e == "string" || _t(e))
          return e;
        var t = e + "";
        return t == "0" && 1 / e == -De ? "-0" : t;
      }
      function Ln(e) {
        if (e != null) {
          try {
            return eo.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function dp(e, t) {
        return At(je, function(i) {
          var a = "_." + i[0];
          t & i[1] && !Zr(e, a) && e.push(a);
        }), e.sort();
      }
      function Ic(e) {
        if (e instanceof pe)
          return e.clone();
        var t = new It(e.__wrapped__, e.__chain__);
        return t.__actions__ = ft(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
      }
      function fp(e, t, i) {
        (i ? it(e, t, i) : t === r) ? t = 1 : t = Ge(se(t), 0);
        var a = e == null ? 0 : e.length;
        if (!a || t < 1)
          return [];
        for (var d = 0, g = 0, x = A(ao(a / t)); d < a; )
          x[g++] = Mt(e, d, d += t);
        return x;
      }
      function hp(e) {
        for (var t = -1, i = e == null ? 0 : e.length, a = 0, d = []; ++t < i; ) {
          var g = e[t];
          g && (d[a++] = g);
        }
        return d;
      }
      function pp() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var t = A(e - 1), i = arguments[0], a = e; a--; )
          t[a - 1] = arguments[a];
        return wn(re(i) ? ft(i) : [i], Qe(t, 1));
      }
      var gp = ue(function(e, t) {
        return Fe(e) ? Er(e, Qe(t, 1, Fe, !0)) : [];
      }), vp = ue(function(e, t) {
        var i = Ft(t);
        return Fe(i) && (i = r), Fe(e) ? Er(e, Qe(t, 1, Fe, !0), X(i, 2)) : [];
      }), mp = ue(function(e, t) {
        var i = Ft(t);
        return Fe(i) && (i = r), Fe(e) ? Er(e, Qe(t, 1, Fe, !0), r, i) : [];
      });
      function wp(e, t, i) {
        var a = e == null ? 0 : e.length;
        return a ? (t = i || t === r ? 1 : se(t), Mt(e, t < 0 ? 0 : t, a)) : [];
      }
      function bp(e, t, i) {
        var a = e == null ? 0 : e.length;
        return a ? (t = i || t === r ? 1 : se(t), t = a - t, Mt(e, 0, t < 0 ? 0 : t)) : [];
      }
      function xp(e, t) {
        return e && e.length ? wo(e, X(t, 3), !0, !0) : [];
      }
      function yp(e, t) {
        return e && e.length ? wo(e, X(t, 3), !0) : [];
      }
      function Cp(e, t, i, a) {
        var d = e == null ? 0 : e.length;
        return d ? (i && typeof i != "number" && it(e, t, i) && (i = 0, a = d), ph(e, t, i, a)) : [];
      }
      function Lc(e, t, i) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var d = i == null ? 0 : se(i);
        return d < 0 && (d = Ge(a + d, 0)), Xr(e, X(t, 3), d);
      }
      function Mc(e, t, i) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var d = a - 1;
        return i !== r && (d = se(i), d = i < 0 ? Ge(a + d, 0) : tt(d, a - 1)), Xr(e, X(t, 3), d, !0);
      }
      function Fc(e) {
        var t = e == null ? 0 : e.length;
        return t ? Qe(e, 1) : [];
      }
      function Np(e) {
        var t = e == null ? 0 : e.length;
        return t ? Qe(e, De) : [];
      }
      function _p(e, t) {
        var i = e == null ? 0 : e.length;
        return i ? (t = t === r ? 1 : se(t), Qe(e, t)) : [];
      }
      function $p(e) {
        for (var t = -1, i = e == null ? 0 : e.length, a = {}; ++t < i; ) {
          var d = e[t];
          a[d[0]] = d[1];
        }
        return a;
      }
      function kc(e) {
        return e && e.length ? e[0] : r;
      }
      function Ep(e, t, i) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var d = i == null ? 0 : se(i);
        return d < 0 && (d = Ge(a + d, 0)), Kn(e, t, d);
      }
      function Sp(e) {
        var t = e == null ? 0 : e.length;
        return t ? Mt(e, 0, -1) : [];
      }
      var Dp = ue(function(e) {
        var t = Pe(e, Mi);
        return t.length && t[0] === e[0] ? Ei(t) : [];
      }), Op = ue(function(e) {
        var t = Ft(e), i = Pe(e, Mi);
        return t === Ft(i) ? t = r : i.pop(), i.length && i[0] === e[0] ? Ei(i, X(t, 2)) : [];
      }), Rp = ue(function(e) {
        var t = Ft(e), i = Pe(e, Mi);
        return t = typeof t == "function" ? t : r, t && i.pop(), i.length && i[0] === e[0] ? Ei(i, r, t) : [];
      });
      function Pp(e, t) {
        return e == null ? "" : Sf.call(e, t);
      }
      function Ft(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : r;
      }
      function Ap(e, t, i) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var d = a;
        return i !== r && (d = se(i), d = d < 0 ? Ge(a + d, 0) : tt(d, a - 1)), t === t ? df(e, t, d) : Xr(e, wa, d, !0);
      }
      function Tp(e, t) {
        return e && e.length ? Za(e, se(t)) : r;
      }
      var Ip = ue(Wc);
      function Wc(e, t) {
        return e && e.length && t && t.length ? Ri(e, t) : e;
      }
      function Lp(e, t, i) {
        return e && e.length && t && t.length ? Ri(e, t, X(i, 2)) : e;
      }
      function Mp(e, t, i) {
        return e && e.length && t && t.length ? Ri(e, t, r, i) : e;
      }
      var Fp = on(function(e, t) {
        var i = e == null ? 0 : e.length, a = Ci(e, t);
        return Qa(e, Pe(t, function(d) {
          return sn(d, i) ? +d : d;
        }).sort(cc)), a;
      });
      function kp(e, t) {
        var i = [];
        if (!(e && e.length))
          return i;
        var a = -1, d = [], g = e.length;
        for (t = X(t, 3); ++a < g; ) {
          var x = e[a];
          t(x, a, e) && (i.push(x), d.push(a));
        }
        return Qa(e, d), i;
      }
      function Xi(e) {
        return e == null ? e : Pf.call(e);
      }
      function Wp(e, t, i) {
        var a = e == null ? 0 : e.length;
        return a ? (i && typeof i != "number" && it(e, t, i) ? (t = 0, i = a) : (t = t == null ? 0 : se(t), i = i === r ? a : se(i)), Mt(e, t, i)) : [];
      }
      function Bp(e, t) {
        return mo(e, t);
      }
      function Up(e, t, i) {
        return Ti(e, t, X(i, 2));
      }
      function zp(e, t) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var a = mo(e, t);
          if (a < i && Ht(e[a], t))
            return a;
        }
        return -1;
      }
      function Hp(e, t) {
        return mo(e, t, !0);
      }
      function Gp(e, t, i) {
        return Ti(e, t, X(i, 2), !0);
      }
      function Kp(e, t) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var a = mo(e, t, !0) - 1;
          if (Ht(e[a], t))
            return a;
        }
        return -1;
      }
      function Vp(e) {
        return e && e.length ? ec(e) : [];
      }
      function qp(e, t) {
        return e && e.length ? ec(e, X(t, 2)) : [];
      }
      function Yp(e) {
        var t = e == null ? 0 : e.length;
        return t ? Mt(e, 1, t) : [];
      }
      function Zp(e, t, i) {
        return e && e.length ? (t = i || t === r ? 1 : se(t), Mt(e, 0, t < 0 ? 0 : t)) : [];
      }
      function Xp(e, t, i) {
        var a = e == null ? 0 : e.length;
        return a ? (t = i || t === r ? 1 : se(t), t = a - t, Mt(e, t < 0 ? 0 : t, a)) : [];
      }
      function Jp(e, t) {
        return e && e.length ? wo(e, X(t, 3), !1, !0) : [];
      }
      function Qp(e, t) {
        return e && e.length ? wo(e, X(t, 3)) : [];
      }
      var jp = ue(function(e) {
        return Cn(Qe(e, 1, Fe, !0));
      }), eg = ue(function(e) {
        var t = Ft(e);
        return Fe(t) && (t = r), Cn(Qe(e, 1, Fe, !0), X(t, 2));
      }), tg = ue(function(e) {
        var t = Ft(e);
        return t = typeof t == "function" ? t : r, Cn(Qe(e, 1, Fe, !0), r, t);
      });
      function ng(e) {
        return e && e.length ? Cn(e) : [];
      }
      function rg(e, t) {
        return e && e.length ? Cn(e, X(t, 2)) : [];
      }
      function og(e, t) {
        return t = typeof t == "function" ? t : r, e && e.length ? Cn(e, r, t) : [];
      }
      function Ji(e) {
        if (!(e && e.length))
          return [];
        var t = 0;
        return e = mn(e, function(i) {
          if (Fe(i))
            return t = Ge(i.length, t), !0;
        }), pi(t, function(i) {
          return Pe(e, di(i));
        });
      }
      function Bc(e, t) {
        if (!(e && e.length))
          return [];
        var i = Ji(e);
        return t == null ? i : Pe(i, function(a) {
          return yt(t, r, a);
        });
      }
      var ig = ue(function(e, t) {
        return Fe(e) ? Er(e, t) : [];
      }), sg = ue(function(e) {
        return Li(mn(e, Fe));
      }), ag = ue(function(e) {
        var t = Ft(e);
        return Fe(t) && (t = r), Li(mn(e, Fe), X(t, 2));
      }), cg = ue(function(e) {
        var t = Ft(e);
        return t = typeof t == "function" ? t : r, Li(mn(e, Fe), r, t);
      }), lg = ue(Ji);
      function ug(e, t) {
        return oc(e || [], t || [], $r);
      }
      function dg(e, t) {
        return oc(e || [], t || [], Or);
      }
      var fg = ue(function(e) {
        var t = e.length, i = t > 1 ? e[t - 1] : r;
        return i = typeof i == "function" ? (e.pop(), i) : r, Bc(e, i);
      });
      function Uc(e) {
        var t = p(e);
        return t.__chain__ = !0, t;
      }
      function hg(e, t) {
        return t(e), e;
      }
      function So(e, t) {
        return t(e);
      }
      var pg = on(function(e) {
        var t = e.length, i = t ? e[0] : 0, a = this.__wrapped__, d = function(g) {
          return Ci(g, e);
        };
        return t > 1 || this.__actions__.length || !(a instanceof pe) || !sn(i) ? this.thru(d) : (a = a.slice(i, +i + (t ? 1 : 0)), a.__actions__.push({
          func: So,
          args: [d],
          thisArg: r
        }), new It(a, this.__chain__).thru(function(g) {
          return t && !g.length && g.push(r), g;
        }));
      });
      function gg() {
        return Uc(this);
      }
      function vg() {
        return new It(this.value(), this.__chain__);
      }
      function mg() {
        this.__values__ === r && (this.__values__ = tl(this.value()));
        var e = this.__index__ >= this.__values__.length, t = e ? r : this.__values__[this.__index__++];
        return { done: e, value: t };
      }
      function wg() {
        return this;
      }
      function bg(e) {
        for (var t, i = this; i instanceof fo; ) {
          var a = Ic(i);
          a.__index__ = 0, a.__values__ = r, t ? d.__wrapped__ = a : t = a;
          var d = a;
          i = i.__wrapped__;
        }
        return d.__wrapped__ = e, t;
      }
      function xg() {
        var e = this.__wrapped__;
        if (e instanceof pe) {
          var t = e;
          return this.__actions__.length && (t = new pe(this)), t = t.reverse(), t.__actions__.push({
            func: So,
            args: [Xi],
            thisArg: r
          }), new It(t, this.__chain__);
        }
        return this.thru(Xi);
      }
      function yg() {
        return rc(this.__wrapped__, this.__actions__);
      }
      var Cg = bo(function(e, t, i) {
        Ne.call(e, i) ? ++e[i] : nn(e, i, 1);
      });
      function Ng(e, t, i) {
        var a = re(e) ? va : hh;
        return i && it(e, t, i) && (t = r), a(e, X(t, 3));
      }
      function _g(e, t) {
        var i = re(e) ? mn : Ba;
        return i(e, X(t, 3));
      }
      var $g = pc(Lc), Eg = pc(Mc);
      function Sg(e, t) {
        return Qe(Do(e, t), 1);
      }
      function Dg(e, t) {
        return Qe(Do(e, t), De);
      }
      function Og(e, t, i) {
        return i = i === r ? 1 : se(i), Qe(Do(e, t), i);
      }
      function zc(e, t) {
        var i = re(e) ? At : yn;
        return i(e, X(t, 3));
      }
      function Hc(e, t) {
        var i = re(e) ? qd : Wa;
        return i(e, X(t, 3));
      }
      var Rg = bo(function(e, t, i) {
        Ne.call(e, i) ? e[i].push(t) : nn(e, i, [t]);
      });
      function Pg(e, t, i, a) {
        e = ht(e) ? e : rr(e), i = i && !a ? se(i) : 0;
        var d = e.length;
        return i < 0 && (i = Ge(d + i, 0)), To(e) ? i <= d && e.indexOf(t, i) > -1 : !!d && Kn(e, t, i) > -1;
      }
      var Ag = ue(function(e, t, i) {
        var a = -1, d = typeof t == "function", g = ht(e) ? A(e.length) : [];
        return yn(e, function(x) {
          g[++a] = d ? yt(t, x, i) : Sr(x, t, i);
        }), g;
      }), Tg = bo(function(e, t, i) {
        nn(e, i, t);
      });
      function Do(e, t) {
        var i = re(e) ? Pe : Va;
        return i(e, X(t, 3));
      }
      function Ig(e, t, i, a) {
        return e == null ? [] : (re(t) || (t = t == null ? [] : [t]), i = a ? r : i, re(i) || (i = i == null ? [] : [i]), Xa(e, t, i));
      }
      var Lg = bo(function(e, t, i) {
        e[i ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function Mg(e, t, i) {
        var a = re(e) ? li : xa, d = arguments.length < 3;
        return a(e, X(t, 4), i, d, yn);
      }
      function Fg(e, t, i) {
        var a = re(e) ? Yd : xa, d = arguments.length < 3;
        return a(e, X(t, 4), i, d, Wa);
      }
      function kg(e, t) {
        var i = re(e) ? mn : Ba;
        return i(e, Po(X(t, 3)));
      }
      function Wg(e) {
        var t = re(e) ? La : Ph;
        return t(e);
      }
      function Bg(e, t, i) {
        (i ? it(e, t, i) : t === r) ? t = 1 : t = se(t);
        var a = re(e) ? ch : Ah;
        return a(e, t);
      }
      function Ug(e) {
        var t = re(e) ? lh : Ih;
        return t(e);
      }
      function zg(e) {
        if (e == null)
          return 0;
        if (ht(e))
          return To(e) ? qn(e) : e.length;
        var t = nt(e);
        return t == Ke || t == Xe ? e.size : Di(e).length;
      }
      function Hg(e, t, i) {
        var a = re(e) ? ui : Lh;
        return i && it(e, t, i) && (t = r), a(e, X(t, 3));
      }
      var Gg = ue(function(e, t) {
        if (e == null)
          return [];
        var i = t.length;
        return i > 1 && it(e, t[0], t[1]) ? t = [] : i > 2 && it(t[0], t[1], t[2]) && (t = [t[0]]), Xa(e, Qe(t, 1), []);
      }), Oo = _f || function() {
        return Je.Date.now();
      };
      function Kg(e, t) {
        if (typeof t != "function")
          throw new Tt(u);
        return e = se(e), function() {
          if (--e < 1)
            return t.apply(this, arguments);
        };
      }
      function Gc(e, t, i) {
        return t = i ? r : t, t = e && t == null ? e.length : t, rn(e, W, r, r, r, r, t);
      }
      function Kc(e, t) {
        var i;
        if (typeof t != "function")
          throw new Tt(u);
        return e = se(e), function() {
          return --e > 0 && (i = t.apply(this, arguments)), e <= 1 && (t = r), i;
        };
      }
      var Qi = ue(function(e, t, i) {
        var a = _;
        if (i.length) {
          var d = bn(i, tr(Qi));
          a |= I;
        }
        return rn(e, a, t, i, d);
      }), Vc = ue(function(e, t, i) {
        var a = _ | $;
        if (i.length) {
          var d = bn(i, tr(Vc));
          a |= I;
        }
        return rn(t, a, e, i, d);
      });
      function qc(e, t, i) {
        t = i ? r : t;
        var a = rn(e, O, r, r, r, r, r, t);
        return a.placeholder = qc.placeholder, a;
      }
      function Yc(e, t, i) {
        t = i ? r : t;
        var a = rn(e, P, r, r, r, r, r, t);
        return a.placeholder = Yc.placeholder, a;
      }
      function Zc(e, t, i) {
        var a, d, g, x, E, D, F = 0, k = !1, B = !1, H = !0;
        if (typeof e != "function")
          throw new Tt(u);
        t = kt(t) || 0, Ae(i) && (k = !!i.leading, B = "maxWait" in i, g = B ? Ge(kt(i.maxWait) || 0, t) : g, H = "trailing" in i ? !!i.trailing : H);
        function V(ke) {
          var Gt = a, ln = d;
          return a = d = r, F = ke, x = e.apply(ln, Gt), x;
        }
        function J(ke) {
          return F = ke, E = Ar(fe, t), k ? V(ke) : x;
        }
        function ce(ke) {
          var Gt = ke - D, ln = ke - F, pl = t - Gt;
          return B ? tt(pl, g - ln) : pl;
        }
        function Q(ke) {
          var Gt = ke - D, ln = ke - F;
          return D === r || Gt >= t || Gt < 0 || B && ln >= g;
        }
        function fe() {
          var ke = Oo();
          if (Q(ke))
            return ge(ke);
          E = Ar(fe, ce(ke));
        }
        function ge(ke) {
          return E = r, H && a ? V(ke) : (a = d = r, x);
        }
        function $t() {
          E !== r && ic(E), F = 0, a = D = d = E = r;
        }
        function st() {
          return E === r ? x : ge(Oo());
        }
        function Et() {
          var ke = Oo(), Gt = Q(ke);
          if (a = arguments, d = this, D = ke, Gt) {
            if (E === r)
              return J(D);
            if (B)
              return ic(E), E = Ar(fe, t), V(D);
          }
          return E === r && (E = Ar(fe, t)), x;
        }
        return Et.cancel = $t, Et.flush = st, Et;
      }
      var Vg = ue(function(e, t) {
        return ka(e, 1, t);
      }), qg = ue(function(e, t, i) {
        return ka(e, kt(t) || 0, i);
      });
      function Yg(e) {
        return rn(e, G);
      }
      function Ro(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function")
          throw new Tt(u);
        var i = function() {
          var a = arguments, d = t ? t.apply(this, a) : a[0], g = i.cache;
          if (g.has(d))
            return g.get(d);
          var x = e.apply(this, a);
          return i.cache = g.set(d, x) || g, x;
        };
        return i.cache = new (Ro.Cache || tn)(), i;
      }
      Ro.Cache = tn;
      function Po(e) {
        if (typeof e != "function")
          throw new Tt(u);
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, t[0]);
            case 2:
              return !e.call(this, t[0], t[1]);
            case 3:
              return !e.call(this, t[0], t[1], t[2]);
          }
          return !e.apply(this, t);
        };
      }
      function Zg(e) {
        return Kc(2, e);
      }
      var Xg = Mh(function(e, t) {
        t = t.length == 1 && re(t[0]) ? Pe(t[0], Ct(X())) : Pe(Qe(t, 1), Ct(X()));
        var i = t.length;
        return ue(function(a) {
          for (var d = -1, g = tt(a.length, i); ++d < g; )
            a[d] = t[d].call(this, a[d]);
          return yt(e, this, a);
        });
      }), ji = ue(function(e, t) {
        var i = bn(t, tr(ji));
        return rn(e, I, r, t, i);
      }), Xc = ue(function(e, t) {
        var i = bn(t, tr(Xc));
        return rn(e, M, r, t, i);
      }), Jg = on(function(e, t) {
        return rn(e, U, r, r, r, t);
      });
      function Qg(e, t) {
        if (typeof e != "function")
          throw new Tt(u);
        return t = t === r ? t : se(t), ue(e, t);
      }
      function jg(e, t) {
        if (typeof e != "function")
          throw new Tt(u);
        return t = t == null ? 0 : Ge(se(t), 0), ue(function(i) {
          var a = i[t], d = _n(i, 0, t);
          return a && wn(d, a), yt(e, this, d);
        });
      }
      function ev(e, t, i) {
        var a = !0, d = !0;
        if (typeof e != "function")
          throw new Tt(u);
        return Ae(i) && (a = "leading" in i ? !!i.leading : a, d = "trailing" in i ? !!i.trailing : d), Zc(e, t, {
          leading: a,
          maxWait: t,
          trailing: d
        });
      }
      function tv(e) {
        return Gc(e, 1);
      }
      function nv(e, t) {
        return ji(Fi(t), e);
      }
      function rv() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return re(e) ? e : [e];
      }
      function ov(e) {
        return Lt(e, y);
      }
      function iv(e, t) {
        return t = typeof t == "function" ? t : r, Lt(e, y, t);
      }
      function sv(e) {
        return Lt(e, m | y);
      }
      function av(e, t) {
        return t = typeof t == "function" ? t : r, Lt(e, m | y, t);
      }
      function cv(e, t) {
        return t == null || Fa(e, t, qe(t));
      }
      function Ht(e, t) {
        return e === t || e !== e && t !== t;
      }
      var lv = No($i), uv = No(function(e, t) {
        return e >= t;
      }), Mn = Ha(function() {
        return arguments;
      }()) ? Ha : function(e) {
        return Ie(e) && Ne.call(e, "callee") && !Oa.call(e, "callee");
      }, re = A.isArray, dv = ua ? Ct(ua) : bh;
      function ht(e) {
        return e != null && Ao(e.length) && !an(e);
      }
      function Fe(e) {
        return Ie(e) && ht(e);
      }
      function fv(e) {
        return e === !0 || e === !1 || Ie(e) && ot(e) == Me;
      }
      var $n = Ef || us, hv = da ? Ct(da) : xh;
      function pv(e) {
        return Ie(e) && e.nodeType === 1 && !Tr(e);
      }
      function gv(e) {
        if (e == null)
          return !0;
        if (ht(e) && (re(e) || typeof e == "string" || typeof e.splice == "function" || $n(e) || nr(e) || Mn(e)))
          return !e.length;
        var t = nt(e);
        if (t == Ke || t == Xe)
          return !e.size;
        if (Pr(e))
          return !Di(e).length;
        for (var i in e)
          if (Ne.call(e, i))
            return !1;
        return !0;
      }
      function vv(e, t) {
        return Dr(e, t);
      }
      function mv(e, t, i) {
        i = typeof i == "function" ? i : r;
        var a = i ? i(e, t) : r;
        return a === r ? Dr(e, t, r, i) : !!a;
      }
      function es(e) {
        if (!Ie(e))
          return !1;
        var t = ot(e);
        return t == We || t == ie || typeof e.message == "string" && typeof e.name == "string" && !Tr(e);
      }
      function wv(e) {
        return typeof e == "number" && Pa(e);
      }
      function an(e) {
        if (!Ae(e))
          return !1;
        var t = ot(e);
        return t == rt || t == dn || t == lt || t == ar;
      }
      function Jc(e) {
        return typeof e == "number" && e == se(e);
      }
      function Ao(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= we;
      }
      function Ae(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      function Ie(e) {
        return e != null && typeof e == "object";
      }
      var Qc = fa ? Ct(fa) : Ch;
      function bv(e, t) {
        return e === t || Si(e, t, Gi(t));
      }
      function xv(e, t, i) {
        return i = typeof i == "function" ? i : r, Si(e, t, Gi(t), i);
      }
      function yv(e) {
        return jc(e) && e != +e;
      }
      function Cv(e) {
        if (ip(e))
          throw new te(l);
        return Ga(e);
      }
      function Nv(e) {
        return e === null;
      }
      function _v(e) {
        return e == null;
      }
      function jc(e) {
        return typeof e == "number" || Ie(e) && ot(e) == ze;
      }
      function Tr(e) {
        if (!Ie(e) || ot(e) != bt)
          return !1;
        var t = oo(e);
        if (t === null)
          return !0;
        var i = Ne.call(t, "constructor") && t.constructor;
        return typeof i == "function" && i instanceof i && eo.call(i) == xf;
      }
      var ts = ha ? Ct(ha) : Nh;
      function $v(e) {
        return Jc(e) && e >= -we && e <= we;
      }
      var el = pa ? Ct(pa) : _h;
      function To(e) {
        return typeof e == "string" || !re(e) && Ie(e) && ot(e) == fn;
      }
      function _t(e) {
        return typeof e == "symbol" || Ie(e) && ot(e) == kn;
      }
      var nr = ga ? Ct(ga) : $h;
      function Ev(e) {
        return e === r;
      }
      function Sv(e) {
        return Ie(e) && nt(e) == xt;
      }
      function Dv(e) {
        return Ie(e) && ot(e) == Hn;
      }
      var Ov = No(Oi), Rv = No(function(e, t) {
        return e <= t;
      });
      function tl(e) {
        if (!e)
          return [];
        if (ht(e))
          return To(e) ? Ut(e) : ft(e);
        if (xr && e[xr])
          return cf(e[xr]());
        var t = nt(e), i = t == Ke ? vi : t == Xe ? Jr : rr;
        return i(e);
      }
      function cn(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = kt(e), e === De || e === -De) {
          var t = e < 0 ? -1 : 1;
          return t * Y;
        }
        return e === e ? e : 0;
      }
      function se(e) {
        var t = cn(e), i = t % 1;
        return t === t ? i ? t - i : t : 0;
      }
      function nl(e) {
        return e ? An(se(e), 0, ae) : 0;
      }
      function kt(e) {
        if (typeof e == "number")
          return e;
        if (_t(e))
          return le;
        if (Ae(e)) {
          var t = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = Ae(t) ? t + "" : t;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = ya(e);
        var i = ud.test(e);
        return i || fd.test(e) ? Gd(e.slice(2), i ? 2 : 8) : ld.test(e) ? le : +e;
      }
      function rl(e) {
        return Yt(e, pt(e));
      }
      function Pv(e) {
        return e ? An(se(e), -we, we) : e === 0 ? e : 0;
      }
      function Ce(e) {
        return e == null ? "" : Nt(e);
      }
      var Av = jn(function(e, t) {
        if (Pr(t) || ht(t)) {
          Yt(t, qe(t), e);
          return;
        }
        for (var i in t)
          Ne.call(t, i) && $r(e, i, t[i]);
      }), ol = jn(function(e, t) {
        Yt(t, pt(t), e);
      }), Io = jn(function(e, t, i, a) {
        Yt(t, pt(t), e, a);
      }), Tv = jn(function(e, t, i, a) {
        Yt(t, qe(t), e, a);
      }), Iv = on(Ci);
      function Lv(e, t) {
        var i = Qn(e);
        return t == null ? i : Ma(i, t);
      }
      var Mv = ue(function(e, t) {
        e = Ee(e);
        var i = -1, a = t.length, d = a > 2 ? t[2] : r;
        for (d && it(t[0], t[1], d) && (a = 1); ++i < a; )
          for (var g = t[i], x = pt(g), E = -1, D = x.length; ++E < D; ) {
            var F = x[E], k = e[F];
            (k === r || Ht(k, Zn[F]) && !Ne.call(e, F)) && (e[F] = g[F]);
          }
        return e;
      }), Fv = ue(function(e) {
        return e.push(r, yc), yt(il, r, e);
      });
      function kv(e, t) {
        return ma(e, X(t, 3), qt);
      }
      function Wv(e, t) {
        return ma(e, X(t, 3), _i);
      }
      function Bv(e, t) {
        return e == null ? e : Ni(e, X(t, 3), pt);
      }
      function Uv(e, t) {
        return e == null ? e : Ua(e, X(t, 3), pt);
      }
      function zv(e, t) {
        return e && qt(e, X(t, 3));
      }
      function Hv(e, t) {
        return e && _i(e, X(t, 3));
      }
      function Gv(e) {
        return e == null ? [] : go(e, qe(e));
      }
      function Kv(e) {
        return e == null ? [] : go(e, pt(e));
      }
      function ns(e, t, i) {
        var a = e == null ? r : Tn(e, t);
        return a === r ? i : a;
      }
      function Vv(e, t) {
        return e != null && _c(e, t, gh);
      }
      function rs(e, t) {
        return e != null && _c(e, t, vh);
      }
      var qv = vc(function(e, t, i) {
        t != null && typeof t.toString != "function" && (t = to.call(t)), e[t] = i;
      }, is(gt)), Yv = vc(function(e, t, i) {
        t != null && typeof t.toString != "function" && (t = to.call(t)), Ne.call(e, t) ? e[t].push(i) : e[t] = [i];
      }, X), Zv = ue(Sr);
      function qe(e) {
        return ht(e) ? Ia(e) : Di(e);
      }
      function pt(e) {
        return ht(e) ? Ia(e, !0) : Eh(e);
      }
      function Xv(e, t) {
        var i = {};
        return t = X(t, 3), qt(e, function(a, d, g) {
          nn(i, t(a, d, g), a);
        }), i;
      }
      function Jv(e, t) {
        var i = {};
        return t = X(t, 3), qt(e, function(a, d, g) {
          nn(i, d, t(a, d, g));
        }), i;
      }
      var Qv = jn(function(e, t, i) {
        vo(e, t, i);
      }), il = jn(function(e, t, i, a) {
        vo(e, t, i, a);
      }), jv = on(function(e, t) {
        var i = {};
        if (e == null)
          return i;
        var a = !1;
        t = Pe(t, function(g) {
          return g = Nn(g, e), a || (a = g.length > 1), g;
        }), Yt(e, zi(e), i), a && (i = Lt(i, m | C | y, qh));
        for (var d = t.length; d--; )
          Ii(i, t[d]);
        return i;
      });
      function e0(e, t) {
        return sl(e, Po(X(t)));
      }
      var t0 = on(function(e, t) {
        return e == null ? {} : Dh(e, t);
      });
      function sl(e, t) {
        if (e == null)
          return {};
        var i = Pe(zi(e), function(a) {
          return [a];
        });
        return t = X(t), Ja(e, i, function(a, d) {
          return t(a, d[0]);
        });
      }
      function n0(e, t, i) {
        t = Nn(t, e);
        var a = -1, d = t.length;
        for (d || (d = 1, e = r); ++a < d; ) {
          var g = e == null ? r : e[Zt(t[a])];
          g === r && (a = d, g = i), e = an(g) ? g.call(e) : g;
        }
        return e;
      }
      function r0(e, t, i) {
        return e == null ? e : Or(e, t, i);
      }
      function o0(e, t, i, a) {
        return a = typeof a == "function" ? a : r, e == null ? e : Or(e, t, i, a);
      }
      var al = bc(qe), cl = bc(pt);
      function i0(e, t, i) {
        var a = re(e), d = a || $n(e) || nr(e);
        if (t = X(t, 4), i == null) {
          var g = e && e.constructor;
          d ? i = a ? new g() : [] : Ae(e) ? i = an(g) ? Qn(oo(e)) : {} : i = {};
        }
        return (d ? At : qt)(e, function(x, E, D) {
          return t(i, x, E, D);
        }), i;
      }
      function s0(e, t) {
        return e == null ? !0 : Ii(e, t);
      }
      function a0(e, t, i) {
        return e == null ? e : nc(e, t, Fi(i));
      }
      function c0(e, t, i, a) {
        return a = typeof a == "function" ? a : r, e == null ? e : nc(e, t, Fi(i), a);
      }
      function rr(e) {
        return e == null ? [] : gi(e, qe(e));
      }
      function l0(e) {
        return e == null ? [] : gi(e, pt(e));
      }
      function u0(e, t, i) {
        return i === r && (i = t, t = r), i !== r && (i = kt(i), i = i === i ? i : 0), t !== r && (t = kt(t), t = t === t ? t : 0), An(kt(e), t, i);
      }
      function d0(e, t, i) {
        return t = cn(t), i === r ? (i = t, t = 0) : i = cn(i), e = kt(e), mh(e, t, i);
      }
      function f0(e, t, i) {
        if (i && typeof i != "boolean" && it(e, t, i) && (t = i = r), i === r && (typeof t == "boolean" ? (i = t, t = r) : typeof e == "boolean" && (i = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = cn(e), t === r ? (t = e, e = 0) : t = cn(t)), e > t) {
          var a = e;
          e = t, t = a;
        }
        if (i || e % 1 || t % 1) {
          var d = Aa();
          return tt(e + d * (t - e + Hd("1e-" + ((d + "").length - 1))), t);
        }
        return Pi(e, t);
      }
      var h0 = er(function(e, t, i) {
        return t = t.toLowerCase(), e + (i ? ll(t) : t);
      });
      function ll(e) {
        return os(Ce(e).toLowerCase());
      }
      function ul(e) {
        return e = Ce(e), e && e.replace(pd, nf).replace(Td, "");
      }
      function p0(e, t, i) {
        e = Ce(e), t = Nt(t);
        var a = e.length;
        i = i === r ? a : An(se(i), 0, a);
        var d = i;
        return i -= t.length, i >= 0 && e.slice(i, d) == t;
      }
      function g0(e) {
        return e = Ce(e), e && Vt.test(e) ? e.replace(jt, rf) : e;
      }
      function v0(e) {
        return e = Ce(e), e && bs.test(e) ? e.replace(fr, "\\$&") : e;
      }
      var m0 = er(function(e, t, i) {
        return e + (i ? "-" : "") + t.toLowerCase();
      }), w0 = er(function(e, t, i) {
        return e + (i ? " " : "") + t.toLowerCase();
      }), b0 = hc("toLowerCase");
      function x0(e, t, i) {
        e = Ce(e), t = se(t);
        var a = t ? qn(e) : 0;
        if (!t || a >= t)
          return e;
        var d = (t - a) / 2;
        return Co(co(d), i) + e + Co(ao(d), i);
      }
      function y0(e, t, i) {
        e = Ce(e), t = se(t);
        var a = t ? qn(e) : 0;
        return t && a < t ? e + Co(t - a, i) : e;
      }
      function C0(e, t, i) {
        e = Ce(e), t = se(t);
        var a = t ? qn(e) : 0;
        return t && a < t ? Co(t - a, i) + e : e;
      }
      function N0(e, t, i) {
        return i || t == null ? t = 0 : t && (t = +t), Rf(Ce(e).replace(kr, ""), t || 0);
      }
      function _0(e, t, i) {
        return (i ? it(e, t, i) : t === r) ? t = 1 : t = se(t), Ai(Ce(e), t);
      }
      function $0() {
        var e = arguments, t = Ce(e[0]);
        return e.length < 3 ? t : t.replace(e[1], e[2]);
      }
      var E0 = er(function(e, t, i) {
        return e + (i ? "_" : "") + t.toLowerCase();
      });
      function S0(e, t, i) {
        return i && typeof i != "number" && it(e, t, i) && (t = i = r), i = i === r ? ae : i >>> 0, i ? (e = Ce(e), e && (typeof t == "string" || t != null && !ts(t)) && (t = Nt(t), !t && Vn(e)) ? _n(Ut(e), 0, i) : e.split(t, i)) : [];
      }
      var D0 = er(function(e, t, i) {
        return e + (i ? " " : "") + os(t);
      });
      function O0(e, t, i) {
        return e = Ce(e), i = i == null ? 0 : An(se(i), 0, e.length), t = Nt(t), e.slice(i, i + t.length) == t;
      }
      function R0(e, t, i) {
        var a = p.templateSettings;
        i && it(e, t, i) && (t = r), e = Ce(e), t = Io({}, t, a, xc);
        var d = Io({}, t.imports, a.imports, xc), g = qe(d), x = gi(d, g), E, D, F = 0, k = t.interpolate || Vr, B = "__p += '", H = mi(
          (t.escape || Vr).source + "|" + k.source + "|" + (k === Mr ? cd : Vr).source + "|" + (t.evaluate || Vr).source + "|$",
          "g"
        ), V = "//# sourceURL=" + (Ne.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++kd + "]") + `
`;
        e.replace(H, function(Q, fe, ge, $t, st, Et) {
          return ge || (ge = $t), B += e.slice(F, Et).replace(gd, of), fe && (E = !0, B += `' +
__e(` + fe + `) +
'`), st && (D = !0, B += `';
` + st + `;
__p += '`), ge && (B += `' +
((__t = (` + ge + `)) == null ? '' : __t) +
'`), F = Et + Q.length, Q;
        }), B += `';
`;
        var J = Ne.call(t, "variable") && t.variable;
        if (!J)
          B = `with (obj) {
` + B + `
}
`;
        else if (sd.test(J))
          throw new te(f);
        B = (D ? B.replace(Ye, "") : B).replace(ct, "$1").replace(dt, "$1;"), B = "function(" + (J || "obj") + `) {
` + (J ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (E ? ", __e = _.escape" : "") + (D ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + B + `return __p
}`;
        var ce = fl(function() {
          return xe(g, V + "return " + B).apply(r, x);
        });
        if (ce.source = B, es(ce))
          throw ce;
        return ce;
      }
      function P0(e) {
        return Ce(e).toLowerCase();
      }
      function A0(e) {
        return Ce(e).toUpperCase();
      }
      function T0(e, t, i) {
        if (e = Ce(e), e && (i || t === r))
          return ya(e);
        if (!e || !(t = Nt(t)))
          return e;
        var a = Ut(e), d = Ut(t), g = Ca(a, d), x = Na(a, d) + 1;
        return _n(a, g, x).join("");
      }
      function I0(e, t, i) {
        if (e = Ce(e), e && (i || t === r))
          return e.slice(0, $a(e) + 1);
        if (!e || !(t = Nt(t)))
          return e;
        var a = Ut(e), d = Na(a, Ut(t)) + 1;
        return _n(a, 0, d).join("");
      }
      function L0(e, t, i) {
        if (e = Ce(e), e && (i || t === r))
          return e.replace(kr, "");
        if (!e || !(t = Nt(t)))
          return e;
        var a = Ut(e), d = Ca(a, Ut(t));
        return _n(a, d).join("");
      }
      function M0(e, t) {
        var i = Z, a = ne;
        if (Ae(t)) {
          var d = "separator" in t ? t.separator : d;
          i = "length" in t ? se(t.length) : i, a = "omission" in t ? Nt(t.omission) : a;
        }
        e = Ce(e);
        var g = e.length;
        if (Vn(e)) {
          var x = Ut(e);
          g = x.length;
        }
        if (i >= g)
          return e;
        var E = i - qn(a);
        if (E < 1)
          return a;
        var D = x ? _n(x, 0, E).join("") : e.slice(0, E);
        if (d === r)
          return D + a;
        if (x && (E += D.length - E), ts(d)) {
          if (e.slice(E).search(d)) {
            var F, k = D;
            for (d.global || (d = mi(d.source, Ce(Hs.exec(d)) + "g")), d.lastIndex = 0; F = d.exec(k); )
              var B = F.index;
            D = D.slice(0, B === r ? E : B);
          }
        } else if (e.indexOf(Nt(d), E) != E) {
          var H = D.lastIndexOf(d);
          H > -1 && (D = D.slice(0, H));
        }
        return D + a;
      }
      function F0(e) {
        return e = Ce(e), e && vn.test(e) ? e.replace(Kt, ff) : e;
      }
      var k0 = er(function(e, t, i) {
        return e + (i ? " " : "") + t.toUpperCase();
      }), os = hc("toUpperCase");
      function dl(e, t, i) {
        return e = Ce(e), t = i ? r : t, t === r ? af(e) ? gf(e) : Jd(e) : e.match(t) || [];
      }
      var fl = ue(function(e, t) {
        try {
          return yt(e, r, t);
        } catch (i) {
          return es(i) ? i : new te(i);
        }
      }), W0 = on(function(e, t) {
        return At(t, function(i) {
          i = Zt(i), nn(e, i, Qi(e[i], e));
        }), e;
      });
      function B0(e) {
        var t = e == null ? 0 : e.length, i = X();
        return e = t ? Pe(e, function(a) {
          if (typeof a[1] != "function")
            throw new Tt(u);
          return [i(a[0]), a[1]];
        }) : [], ue(function(a) {
          for (var d = -1; ++d < t; ) {
            var g = e[d];
            if (yt(g[0], this, a))
              return yt(g[1], this, a);
          }
        });
      }
      function U0(e) {
        return fh(Lt(e, m));
      }
      function is(e) {
        return function() {
          return e;
        };
      }
      function z0(e, t) {
        return e == null || e !== e ? t : e;
      }
      var H0 = gc(), G0 = gc(!0);
      function gt(e) {
        return e;
      }
      function ss(e) {
        return Ka(typeof e == "function" ? e : Lt(e, m));
      }
      function K0(e) {
        return qa(Lt(e, m));
      }
      function V0(e, t) {
        return Ya(e, Lt(t, m));
      }
      var q0 = ue(function(e, t) {
        return function(i) {
          return Sr(i, e, t);
        };
      }), Y0 = ue(function(e, t) {
        return function(i) {
          return Sr(e, i, t);
        };
      });
      function as(e, t, i) {
        var a = qe(t), d = go(t, a);
        i == null && !(Ae(t) && (d.length || !a.length)) && (i = t, t = e, e = this, d = go(t, qe(t)));
        var g = !(Ae(i) && "chain" in i) || !!i.chain, x = an(e);
        return At(d, function(E) {
          var D = t[E];
          e[E] = D, x && (e.prototype[E] = function() {
            var F = this.__chain__;
            if (g || F) {
              var k = e(this.__wrapped__), B = k.__actions__ = ft(this.__actions__);
              return B.push({ func: D, args: arguments, thisArg: e }), k.__chain__ = F, k;
            }
            return D.apply(e, wn([this.value()], arguments));
          });
        }), e;
      }
      function Z0() {
        return Je._ === this && (Je._ = yf), this;
      }
      function cs() {
      }
      function X0(e) {
        return e = se(e), ue(function(t) {
          return Za(t, e);
        });
      }
      var J0 = Wi(Pe), Q0 = Wi(va), j0 = Wi(ui);
      function hl(e) {
        return Vi(e) ? di(Zt(e)) : Oh(e);
      }
      function em(e) {
        return function(t) {
          return e == null ? r : Tn(e, t);
        };
      }
      var tm = mc(), nm = mc(!0);
      function ls() {
        return [];
      }
      function us() {
        return !1;
      }
      function rm() {
        return {};
      }
      function om() {
        return "";
      }
      function im() {
        return !0;
      }
      function sm(e, t) {
        if (e = se(e), e < 1 || e > we)
          return [];
        var i = ae, a = tt(e, ae);
        t = X(t), e -= ae;
        for (var d = pi(a, t); ++i < e; )
          t(i);
        return d;
      }
      function am(e) {
        return re(e) ? Pe(e, Zt) : _t(e) ? [e] : ft(Tc(Ce(e)));
      }
      function cm(e) {
        var t = ++bf;
        return Ce(e) + t;
      }
      var lm = yo(function(e, t) {
        return e + t;
      }, 0), um = Bi("ceil"), dm = yo(function(e, t) {
        return e / t;
      }, 1), fm = Bi("floor");
      function hm(e) {
        return e && e.length ? po(e, gt, $i) : r;
      }
      function pm(e, t) {
        return e && e.length ? po(e, X(t, 2), $i) : r;
      }
      function gm(e) {
        return ba(e, gt);
      }
      function vm(e, t) {
        return ba(e, X(t, 2));
      }
      function mm(e) {
        return e && e.length ? po(e, gt, Oi) : r;
      }
      function wm(e, t) {
        return e && e.length ? po(e, X(t, 2), Oi) : r;
      }
      var bm = yo(function(e, t) {
        return e * t;
      }, 1), xm = Bi("round"), ym = yo(function(e, t) {
        return e - t;
      }, 0);
      function Cm(e) {
        return e && e.length ? hi(e, gt) : 0;
      }
      function Nm(e, t) {
        return e && e.length ? hi(e, X(t, 2)) : 0;
      }
      return p.after = Kg, p.ary = Gc, p.assign = Av, p.assignIn = ol, p.assignInWith = Io, p.assignWith = Tv, p.at = Iv, p.before = Kc, p.bind = Qi, p.bindAll = W0, p.bindKey = Vc, p.castArray = rv, p.chain = Uc, p.chunk = fp, p.compact = hp, p.concat = pp, p.cond = B0, p.conforms = U0, p.constant = is, p.countBy = Cg, p.create = Lv, p.curry = qc, p.curryRight = Yc, p.debounce = Zc, p.defaults = Mv, p.defaultsDeep = Fv, p.defer = Vg, p.delay = qg, p.difference = gp, p.differenceBy = vp, p.differenceWith = mp, p.drop = wp, p.dropRight = bp, p.dropRightWhile = xp, p.dropWhile = yp, p.fill = Cp, p.filter = _g, p.flatMap = Sg, p.flatMapDeep = Dg, p.flatMapDepth = Og, p.flatten = Fc, p.flattenDeep = Np, p.flattenDepth = _p, p.flip = Yg, p.flow = H0, p.flowRight = G0, p.fromPairs = $p, p.functions = Gv, p.functionsIn = Kv, p.groupBy = Rg, p.initial = Sp, p.intersection = Dp, p.intersectionBy = Op, p.intersectionWith = Rp, p.invert = qv, p.invertBy = Yv, p.invokeMap = Ag, p.iteratee = ss, p.keyBy = Tg, p.keys = qe, p.keysIn = pt, p.map = Do, p.mapKeys = Xv, p.mapValues = Jv, p.matches = K0, p.matchesProperty = V0, p.memoize = Ro, p.merge = Qv, p.mergeWith = il, p.method = q0, p.methodOf = Y0, p.mixin = as, p.negate = Po, p.nthArg = X0, p.omit = jv, p.omitBy = e0, p.once = Zg, p.orderBy = Ig, p.over = J0, p.overArgs = Xg, p.overEvery = Q0, p.overSome = j0, p.partial = ji, p.partialRight = Xc, p.partition = Lg, p.pick = t0, p.pickBy = sl, p.property = hl, p.propertyOf = em, p.pull = Ip, p.pullAll = Wc, p.pullAllBy = Lp, p.pullAllWith = Mp, p.pullAt = Fp, p.range = tm, p.rangeRight = nm, p.rearg = Jg, p.reject = kg, p.remove = kp, p.rest = Qg, p.reverse = Xi, p.sampleSize = Bg, p.set = r0, p.setWith = o0, p.shuffle = Ug, p.slice = Wp, p.sortBy = Gg, p.sortedUniq = Vp, p.sortedUniqBy = qp, p.split = S0, p.spread = jg, p.tail = Yp, p.take = Zp, p.takeRight = Xp, p.takeRightWhile = Jp, p.takeWhile = Qp, p.tap = hg, p.throttle = ev, p.thru = So, p.toArray = tl, p.toPairs = al, p.toPairsIn = cl, p.toPath = am, p.toPlainObject = rl, p.transform = i0, p.unary = tv, p.union = jp, p.unionBy = eg, p.unionWith = tg, p.uniq = ng, p.uniqBy = rg, p.uniqWith = og, p.unset = s0, p.unzip = Ji, p.unzipWith = Bc, p.update = a0, p.updateWith = c0, p.values = rr, p.valuesIn = l0, p.without = ig, p.words = dl, p.wrap = nv, p.xor = sg, p.xorBy = ag, p.xorWith = cg, p.zip = lg, p.zipObject = ug, p.zipObjectDeep = dg, p.zipWith = fg, p.entries = al, p.entriesIn = cl, p.extend = ol, p.extendWith = Io, as(p, p), p.add = lm, p.attempt = fl, p.camelCase = h0, p.capitalize = ll, p.ceil = um, p.clamp = u0, p.clone = ov, p.cloneDeep = sv, p.cloneDeepWith = av, p.cloneWith = iv, p.conformsTo = cv, p.deburr = ul, p.defaultTo = z0, p.divide = dm, p.endsWith = p0, p.eq = Ht, p.escape = g0, p.escapeRegExp = v0, p.every = Ng, p.find = $g, p.findIndex = Lc, p.findKey = kv, p.findLast = Eg, p.findLastIndex = Mc, p.findLastKey = Wv, p.floor = fm, p.forEach = zc, p.forEachRight = Hc, p.forIn = Bv, p.forInRight = Uv, p.forOwn = zv, p.forOwnRight = Hv, p.get = ns, p.gt = lv, p.gte = uv, p.has = Vv, p.hasIn = rs, p.head = kc, p.identity = gt, p.includes = Pg, p.indexOf = Ep, p.inRange = d0, p.invoke = Zv, p.isArguments = Mn, p.isArray = re, p.isArrayBuffer = dv, p.isArrayLike = ht, p.isArrayLikeObject = Fe, p.isBoolean = fv, p.isBuffer = $n, p.isDate = hv, p.isElement = pv, p.isEmpty = gv, p.isEqual = vv, p.isEqualWith = mv, p.isError = es, p.isFinite = wv, p.isFunction = an, p.isInteger = Jc, p.isLength = Ao, p.isMap = Qc, p.isMatch = bv, p.isMatchWith = xv, p.isNaN = yv, p.isNative = Cv, p.isNil = _v, p.isNull = Nv, p.isNumber = jc, p.isObject = Ae, p.isObjectLike = Ie, p.isPlainObject = Tr, p.isRegExp = ts, p.isSafeInteger = $v, p.isSet = el, p.isString = To, p.isSymbol = _t, p.isTypedArray = nr, p.isUndefined = Ev, p.isWeakMap = Sv, p.isWeakSet = Dv, p.join = Pp, p.kebabCase = m0, p.last = Ft, p.lastIndexOf = Ap, p.lowerCase = w0, p.lowerFirst = b0, p.lt = Ov, p.lte = Rv, p.max = hm, p.maxBy = pm, p.mean = gm, p.meanBy = vm, p.min = mm, p.minBy = wm, p.stubArray = ls, p.stubFalse = us, p.stubObject = rm, p.stubString = om, p.stubTrue = im, p.multiply = bm, p.nth = Tp, p.noConflict = Z0, p.noop = cs, p.now = Oo, p.pad = x0, p.padEnd = y0, p.padStart = C0, p.parseInt = N0, p.random = f0, p.reduce = Mg, p.reduceRight = Fg, p.repeat = _0, p.replace = $0, p.result = n0, p.round = xm, p.runInContext = S, p.sample = Wg, p.size = zg, p.snakeCase = E0, p.some = Hg, p.sortedIndex = Bp, p.sortedIndexBy = Up, p.sortedIndexOf = zp, p.sortedLastIndex = Hp, p.sortedLastIndexBy = Gp, p.sortedLastIndexOf = Kp, p.startCase = D0, p.startsWith = O0, p.subtract = ym, p.sum = Cm, p.sumBy = Nm, p.template = R0, p.times = sm, p.toFinite = cn, p.toInteger = se, p.toLength = nl, p.toLower = P0, p.toNumber = kt, p.toSafeInteger = Pv, p.toString = Ce, p.toUpper = A0, p.trim = T0, p.trimEnd = I0, p.trimStart = L0, p.truncate = M0, p.unescape = F0, p.uniqueId = cm, p.upperCase = k0, p.upperFirst = os, p.each = zc, p.eachRight = Hc, p.first = kc, as(p, function() {
        var e = {};
        return qt(p, function(t, i) {
          Ne.call(p.prototype, i) || (e[i] = t);
        }), e;
      }(), { chain: !1 }), p.VERSION = s, At(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        p[e].placeholder = p;
      }), At(["drop", "take"], function(e, t) {
        pe.prototype[e] = function(i) {
          i = i === r ? 1 : Ge(se(i), 0);
          var a = this.__filtered__ && !t ? new pe(this) : this.clone();
          return a.__filtered__ ? a.__takeCount__ = tt(i, a.__takeCount__) : a.__views__.push({
            size: tt(i, ae),
            type: e + (a.__dir__ < 0 ? "Right" : "")
          }), a;
        }, pe.prototype[e + "Right"] = function(i) {
          return this.reverse()[e](i).reverse();
        };
      }), At(["filter", "map", "takeWhile"], function(e, t) {
        var i = t + 1, a = i == ee || i == ve;
        pe.prototype[e] = function(d) {
          var g = this.clone();
          return g.__iteratees__.push({
            iteratee: X(d, 3),
            type: i
          }), g.__filtered__ = g.__filtered__ || a, g;
        };
      }), At(["head", "last"], function(e, t) {
        var i = "take" + (t ? "Right" : "");
        pe.prototype[e] = function() {
          return this[i](1).value()[0];
        };
      }), At(["initial", "tail"], function(e, t) {
        var i = "drop" + (t ? "" : "Right");
        pe.prototype[e] = function() {
          return this.__filtered__ ? new pe(this) : this[i](1);
        };
      }), pe.prototype.compact = function() {
        return this.filter(gt);
      }, pe.prototype.find = function(e) {
        return this.filter(e).head();
      }, pe.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, pe.prototype.invokeMap = ue(function(e, t) {
        return typeof e == "function" ? new pe(this) : this.map(function(i) {
          return Sr(i, e, t);
        });
      }), pe.prototype.reject = function(e) {
        return this.filter(Po(X(e)));
      }, pe.prototype.slice = function(e, t) {
        e = se(e);
        var i = this;
        return i.__filtered__ && (e > 0 || t < 0) ? new pe(i) : (e < 0 ? i = i.takeRight(-e) : e && (i = i.drop(e)), t !== r && (t = se(t), i = t < 0 ? i.dropRight(-t) : i.take(t - e)), i);
      }, pe.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, pe.prototype.toArray = function() {
        return this.take(ae);
      }, qt(pe.prototype, function(e, t) {
        var i = /^(?:filter|find|map|reject)|While$/.test(t), a = /^(?:head|last)$/.test(t), d = p[a ? "take" + (t == "last" ? "Right" : "") : t], g = a || /^find/.test(t);
        d && (p.prototype[t] = function() {
          var x = this.__wrapped__, E = a ? [1] : arguments, D = x instanceof pe, F = E[0], k = D || re(x), B = function(fe) {
            var ge = d.apply(p, wn([fe], E));
            return a && H ? ge[0] : ge;
          };
          k && i && typeof F == "function" && F.length != 1 && (D = k = !1);
          var H = this.__chain__, V = !!this.__actions__.length, J = g && !H, ce = D && !V;
          if (!g && k) {
            x = ce ? x : new pe(this);
            var Q = e.apply(x, E);
            return Q.__actions__.push({ func: So, args: [B], thisArg: r }), new It(Q, H);
          }
          return J && ce ? e.apply(this, E) : (Q = this.thru(B), J ? a ? Q.value()[0] : Q.value() : Q);
        });
      }), At(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var t = Qr[e], i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", a = /^(?:pop|shift)$/.test(e);
        p.prototype[e] = function() {
          var d = arguments;
          if (a && !this.__chain__) {
            var g = this.value();
            return t.apply(re(g) ? g : [], d);
          }
          return this[i](function(x) {
            return t.apply(re(x) ? x : [], d);
          });
        };
      }), qt(pe.prototype, function(e, t) {
        var i = p[t];
        if (i) {
          var a = i.name + "";
          Ne.call(Jn, a) || (Jn[a] = []), Jn[a].push({ name: t, func: i });
        }
      }), Jn[xo(r, $).name] = [{
        name: "wrapper",
        func: r
      }], pe.prototype.clone = Ff, pe.prototype.reverse = kf, pe.prototype.value = Wf, p.prototype.at = pg, p.prototype.chain = gg, p.prototype.commit = vg, p.prototype.next = mg, p.prototype.plant = bg, p.prototype.reverse = xg, p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = yg, p.prototype.first = p.prototype.head, xr && (p.prototype[xr] = wg), p;
    }, Yn = vf();
    Dn ? ((Dn.exports = Yn)._ = Yn, si._ = Yn) : Je._ = Yn;
  }).call(Wr);
})(bu, bu.exports);
var Gy = bu.exports;
const sw = /* @__PURE__ */ C1(Gy);
let _m = class {
  constructor(o, r) {
    Ir(this, "context");
    Ir(this, "route");
    Ir(this, "activeOptionIndex", null);
    Ir(this, "activeRowIndex", null);
    this.context = o, this.route = r;
  }
  parseIndex(o) {
    const r = this.activeOptionIndex !== null ? this.activeOptionIndex : this.getNodeData().selectedOption;
    return o === void 0 ? r : o;
  }
  getNodeId() {
    const [o, r] = this.route[this.route.length - 1];
    return r;
  }
  getNodeType() {
    const [o, r] = this.route[this.route.length - 1];
    return o;
  }
  getRoute() {
    return this.route;
  }
  getNodeData() {
    const o = this.getNodeId(), r = this.context.data.nodes[o];
    if (!r)
      throw new Error(`no node options entry for ${o}`);
    return r;
  }
  setNodeData(o) {
    return this.context.setNode(this, o);
  }
  setNodeOptionData(o, r) {
    return this.context.updateNodeOptionData(this.route, r, o);
  }
  getOptionContent(o) {
    const r = this.parseIndex(o), s = this.getNodeData(), c = s.options[r];
    if (!c) {
      const l = this.getNodeId();
      throw console.log("getOptionContent", l, r, s), new Error(`no node entry for ${l} - ${r}`);
    }
    return c;
  }
  updateOptionData(o, r) {
    const s = this.parseIndex(r), c = this.getNodeData(), l = c.options.slice(0, s), u = c.options.slice(s + 1), f = l.concat(o ? [o] : []).concat(u);
    return {
      selectedOption: c.selectedOption,
      description: c.description,
      collapsed: c.collapsed,
      options: f
    };
  }
  updateNodeData(o) {
    return this.getNodeId(), this.context.setNode(this, o);
  }
  getChildren(o) {
    const r = this.parseIndex(o);
    return this.getOptionContent(r).content.map(([u, f]) => {
      const h = this.route.concat([[u, f]]);
      if (u === "task")
        return this.context.getNode(h);
      throw new Error(`unknown type ${u}`);
    });
  }
  isChildOf(o) {
    const r = this.route;
    return o.route.every(([l, u], f) => {
      var h, v;
      return l == ((h = r[f]) == null ? void 0 : h[0]) && u == ((v = r[f]) == null ? void 0 : v[1]);
    });
  }
  /**
   * @param nthGen number of generations to go up
   * @returns [node: FosNode, childIndex: number, optionIndex: number]
   */
  getParent(o) {
    if (o > this.route.length)
      throw new Error(`node does not have ${o} ancestors`);
    if (o === 1) {
      const r = this.route.slice(0, this.route.length - o), s = this.context.getNode(r);
      if (s.activeOptionIndex = s.getNodeData().selectedOption, s.getChildren().forEach((c, l) => {
        c.getNodeId() === this.getNodeId() && c.getNodeType() === this.getNodeType() && (s.activeRowIndex = l);
      }), s.activeRowIndex === null)
        throw new Error("could not find child in parent");
      if (!s.activeOptionIndex)
        throw new Error("could not find active option index in parent");
      return [s, s.activeRowIndex, s.activeOptionIndex];
    } else {
      const [r, s, c] = this.getParent(o - 1);
      return r.getParent(1);
    }
  }
  addOption() {
    return this.context.addOptionToNode(this.route);
  }
  deleteOption(o) {
    const r = this.getNodeData();
    if (r.options.length === 1)
      throw new Error("cannot delete last option");
    const s = r.selectedOption ? r.selectedOption - 1 : 0, c = r.options.slice(0, o), l = r.options.slice(o + 1), u = c.concat(l), f = {
      selectedOption: r.selectedOption === o ? r.selectedOption : s,
      description: r.description,
      collapsed: r.collapsed,
      options: u
    };
    return this.context.setNode(this, f);
  }
  deleteRowByIndex(o, r) {
    const s = this.parseIndex(r), c = this.getOptionContent(s), l = c.content.slice(0, o).concat(c.content.slice(o + 1)), u = {
      description: c.description,
      data: c.data,
      content: l
    };
    return this.updateOptionData(u, s);
  }
  deleteNode() {
    const [o] = this.getParent(1), r = o.getOptionContent(), s = r.content.filter(([l, u]) => l !== this.getNodeType() || u !== this.getNodeId()), c = {
      ...r,
      content: s
    };
    if (sw.isEqual(this.context.data.focus.route, this.route)) {
      const l = this.moveFocusUp(-1);
      return l ? l.setOptionOnNode(o.getRoute(), c) : this.context.setOptionOnNode(o.getRoute(), c);
    } else
      return this.context.setOptionOnNode(o.getRoute(), c);
  }
  moveFocusUp(o) {
    try {
      const [r, s, c] = this.getParent(1), l = r.getChildren(c);
      if (s === 0) {
        const u = r.getRoute(), f = r.getNodeData().description, h = o ? o < 0 ? f.length + o : o : this.context.data.focus.char;
        return this.context.setFocus(u, h);
      } else {
        const u = l[s - 1], f = u.getNodeData(), h = u.getChildren();
        if (f.collapsed || h.length === 0) {
          const v = u.getRoute(), b = u.getNodeData().description, m = o ? o < 0 ? b.length + o : o : this.context.data.focus.char;
          return this.context.setFocus(v, m);
        } else {
          const v = u.getLastDescendent(), b = v.getRoute(), m = v.getNodeData().description, C = o ? o < 0 ? m.length + o : o : this.context.data.focus.char;
          return this.context.setFocus(b, C);
        }
      }
    } catch (r) {
      console.log("moveFocusDown - no parent", r);
      return;
    }
  }
  moveFocusDown(o = !1) {
    if (!this.getNodeData().collapsed && !o) {
      const r = this.getChildren();
      if (r.length > 0) {
        const c = r[0].getRoute();
        return this.context.setFocus(c, this.context.data.focus.char);
      }
    }
    try {
      const [r, s, c] = this.getParent(1), l = r.getChildren(c);
      if (s === l.length - 1)
        try {
          r.moveFocusDown(!0);
        } catch {
          return;
        }
      else {
        const f = l[s + 1].getRoute();
        return this.context.setFocus(f, this.context.data.focus.char);
      }
    } catch (r) {
      console.log("moveFocusDown - no parent", r);
      return;
    }
  }
  getLastDescendent(o = !0) {
    const r = this.getChildren(), s = this.getNodeData().collapsed;
    return r.length === 0 || o && s ? this : r[r.length - 1].getLastDescendent(o);
  }
  acceptMerge() {
    const o = this.getNodeData().mergeNode;
    if (!o)
      throw new Error("no merge node");
    if (!this.context.data.nodes[o])
      throw new Error("no merge node data");
    const [s, c, l] = this.getParent(1), u = s.getOptionContent(l);
    if (!u.content[c])
      throw console.log("acceptMerge - no current content", u, c, u.content), new Error("no current content");
    const f = u.content[c];
    if (!f)
      throw console.log("acceptMerge - no current content", u, c, u.content), new Error("no current content");
    const h = [f[0], o], v = u.content.slice(0, c), b = u.content.slice(c + 1), m = {
      ...u,
      content: [...v, h, ...b]
    }, y = s.setNodeOptionData(l, m).getNode(this.route), w = {
      ...y.getNodeData(),
      mergeNode: void 0
    };
    return y.setNodeData(w);
  }
  rejectMerge() {
    const o = this.getNodeData().mergeNode;
    if (!o)
      throw new Error("no merge node");
    if (!this.context.data.nodes[o])
      throw new Error("no merge node data");
    const c = {
      ...this.getNodeData(),
      mergeNode: void 0
    };
    return this.setNodeData(c);
  }
  bothMerge() {
    const o = this.getNodeData().mergeNode;
    if (!o)
      throw new Error("no merge node");
    if (!this.context.data.nodes[o])
      throw new Error("no merge node data");
    const [s, c, l] = this.getParent(1), u = s.getOptionContent(l), f = u.content[c];
    if (!f)
      throw console.log("acceptMerge - no current content", u, c, u.content), new Error("no current content");
    const h = [f[0], o], v = u.content.slice(0, c + 1), b = u.content.slice(c + 1), m = {
      ...u,
      content: [...v, h, ...b]
    }, y = s.setNodeOptionData(l, m).getNode(this.route), w = {
      ...y.getNodeData(),
      mergeNode: void 0
    };
    return y.setNodeData(w);
  }
  getMergeOptions() {
    const o = this.getNodeData().options, r = this.mergeNodeData().options, s = gl(o, r, { comparator: (f, h) => aw(jl(f.description, h.description)) || aw(gl(f.content, h.content)) });
    let c = 0, l = 0;
    return s.reduce((f, h) => {
      if (h.added) {
        const v = h.value.map((b, m) => {
          const C = l + m, y = r[C];
          if (!y)
            throw new Error("no merge node option");
          const N = y.description, w = y.content;
          return {
            description: jl(N, N),
            content: gl(w, w, { comparator: (_, $) => _[0] === $[0] && _[1] === $[1] })
          };
        });
        return l = h.count ? l + h.count : l, [...f, ...v];
      } else if (h.removed) {
        const v = h.value.map((b, m) => {
          const C = c + m, y = o[C];
          if (!y)
            throw new Error("no merge node option");
          const N = y.description, w = y.content;
          return {
            description: jl(N, N),
            content: gl(w, w, { comparator: (_, $) => _[0] === $[0] && _[1] === $[1] })
          };
        });
        return c = h.count ? c + h.count : c, [...f, ...v];
      } else {
        const v = h.value.map((b, m) => {
          const C = l + m, y = r[C];
          if (!y)
            throw new Error("no merge node option");
          const N = y.description, w = y.content, _ = c + m, $ = o[_];
          if (!$)
            throw new Error("no merge node option");
          const R = $.description, O = $.content;
          return {
            description: jl(R, N),
            content: gl(O, w, { comparator: (P, I) => P[0] === I[0] && P[1] === I[1] })
          };
        });
        return c = h.count ? c + h.count : c, [...f, ...v];
      }
    }, []);
  }
  hasMerge() {
    const o = this.getNodeData(), r = !!o.mergeNode, s = o.mergeNode ? !sw.isEqual(o, this.context.data.nodes[o.mergeNode] || {}) : !1;
    return r && s;
  }
  getMergedIndex() {
    const o = this.getNodeData(), r = o.mergeNode;
    if (!r)
      throw new Error("no merge node");
    const s = this.context.data.nodes[r];
    if (!s)
      throw new Error("no merge node data");
    const c = o.selectedOption, l = s.selectedOption;
    return l || c;
  }
  getMergeChildren(o) {
    if (o || (o = this.getMergedIndex()), !o)
      throw Error("no index");
    const s = this.getMergeOptions()[o];
    if (!s)
      throw new Error("no merged option");
    return s.content.reduce((u, f) => {
      const h = f.value.map(([b, m]) => {
        const C = this.route.concat([[b, m]]);
        return {
          ...f.added ? { added: !0 } : {},
          ...f.removed ? { removed: !0 } : {},
          node: this.context.getNode(C)
        };
      });
      return [...u, ...h];
    }, []);
  }
  mergeNodeData() {
    const o = this.getNodeData().mergeNode;
    if (!o)
      throw new Error("no merge node");
    const r = this.context.data.nodes[o];
    if (!r)
      throw new Error("no merge node data");
    return r;
  }
  mergeNodeContent() {
    const o = this.mergeNodeData(), r = o.selectedOption, s = o.options[r];
    if (!s)
      throw console.log("getMergeDescription - no merge content", s), new Error("no merge content");
    return s;
  }
  setPath(o) {
    return Object.keys(o).reduce((s, c, l) => {
      const u = s.getNode(this.getRoute()), f = u.getChildren();
      if (f.length === 0) {
        if (!o[c])
          throw console.log("path is not valid - key not found", o, c), new Error("path is not valid - key not found");
        if (Object.keys(o[c] || {}).length !== 0)
          throw console.log("path is not valid - key not empty at leaf", o, c), new Error("path is not valid");
        const h = parseInt(c);
        return u.setNodeData({
          ...u.getNodeData(),
          selectedOption: h
        });
      } else {
        const h = o[c];
        if (!h)
          throw console.log("path is not valid - key not found", o, c), new Error("path is not valid - key not found");
        if (h.length !== f.length)
          throw console.log("path is not valid - selections length different from children length", h.length, f.length, o, c, this.getNodeId()), new Error("path is not valid");
        const b = f.reduce((C, y, N) => {
          const w = C.getNode(y.getRoute()), _ = h[N];
          if (!_)
            throw console.log("path is not valid - selection not found for child", o, c), new Error("path is not valid - selection not found for child");
          const $ = Object.keys(_);
          if ($.length !== 1)
            throw console.log("path is not valid - selection keys length not 1", $, o, c), new Error("path is not valid");
          return w.setPath(_);
        }, s).getNode(u.getRoute());
        return b.setNodeData({
          ...b.getNodeData(),
          selectedOption: parseInt(c)
        });
      }
    }, this.context);
  }
  setData(o, r) {
    const s = this.parseIndex(r), c = this.getOptionContent(s), l = {
      ...c,
      data: {
        ...c.data,
        ...o
      }
    };
    return this.setNodeOptionData(s, l);
  }
  getData(o) {
    const r = this.parseIndex(o);
    return this.getOptionContent(r).data || {};
  }
};
const aw = (n) => {
  if (n.length === void 0 || isNaN(n.length))
    throw new Error("diff array is empty");
  const { total: o, changed: r } = n.reduce((s, c) => ({
    changed: c.added || c.removed ? s.changed + 1 : s.changed,
    total: s.total + 1
  }), { total: 0, changed: 0 });
  return r / o < 0.5;
};
let G3 = class pu {
  constructor(o, r) {
    Ir(this, "data");
    Ir(this, "updateData");
    Ir(this, "locked", !1);
    if (this.data = o, this.updateData = r, !o.nodes)
      throw console.log("FosContext - no nodes", o), new Error("no nodes");
  }
  setNodes(o, r, s) {
    if (!this.data.nodes)
      throw console.log("setNodes - no nodes", this.data), new Error("no nodes");
    const c = {
      ...this.data,
      nodes: o,
      focus: r || this.data.focus,
      trail: s || this.data.trail
    };
    this.locked = !0;
    const l = new pu(c, this.updateData);
    return this.updateData(c), this.locked = !1, l;
  }
  setTrail(o) {
    const r = { ...this.data, trail: o };
    return this.updateData(r), new pu(r, this.updateData);
  }
  setFocus(o, r) {
    const s = { ...this.data, focus: { route: o, char: r } };
    return this.updateData(s), new pu(s, this.updateData);
  }
  update() {
    this.updateData(this.data);
  }
  getNode(o) {
    return new _m(this, o);
  }
  setNode(o, r) {
    const s = o.getNodeId(), c = {
      ...this.data.nodes,
      [s]: r
    };
    return this.setNodes(c);
  }
  insertNode(o, r, s) {
    const c = this.newId(o), l = {
      ...this.data.nodes,
      [c]: o
    };
    return [this.setNodes(l), c];
  }
  updateNodeAtRoute(o, r) {
    const c = new _m(this, o).getNodeId(), l = {
      ...this.data.nodes,
      [c]: r
    };
    return this.setNodes(l);
  }
  updateNodeOptionData(o, r, s) {
    const l = this.getNode(o).updateOptionData(r, s);
    return this.updateNodeAtRoute(o, l);
  }
  getNodeOptionsAndObj(o) {
    const r = new _m(this, o), s = r.getNodeData(), c = r.getOptionContent();
    return [s, c, s.selectedOption];
  }
  newId(o) {
    return crypto.randomUUID();
  }
  addNewTaskToOption(o, r, s) {
    const c = this.getNode(o), l = {
      selectedOption: 0,
      collapsed: !1,
      description: "",
      options: [{
        description: "",
        data: {},
        content: []
      }]
    }, u = this.newId(l), f = c.getOptionContent(s), h = r === void 0 ? f.content.length : r, v = f.content.slice(0, h + 1), b = f.content.slice(h + 1), m = ["task", u], C = v.concat([m]).concat(b), y = {
      ...f,
      content: C
    }, N = c.updateOptionData(y, s), w = c.getNodeId(), _ = o.concat([m]), $ = {
      ...this.data.nodes,
      [w]: N,
      [u]: l
    };
    return console.log("route", o, _), this.setNodes($, { route: _, char: 0 });
  }
  setOptionOnNode(o, r, s) {
    const c = this.getNode(o), l = c.updateOptionData(r, s), u = this.setNode(c, l);
    return console.log("newNodes", u), u;
  }
  addOptionToNode(o, r, s) {
    const c = this.getNode(o), l = s === void 0 ? c.getNodeData().options.length : s, u = c.getNodeData(), f = {
      description: "",
      data: {},
      content: [],
      ...r
    }, h = u.options.slice(0, l), v = u.options.slice(l), b = {
      ...u,
      selectedOption: l,
      options: h.concat([f]).concat(v)
    }, m = c.updateNodeData(b);
    return console.log("newNodes", m), this.setNodes(m.data.nodes);
  }
  moveNodeLeft(o) {
    const r = this.getNode(o), [s, c, l] = r.getParent(1), [u, f, h] = r.getParent(2), v = s.getOptionContent(l), b = v.content.slice(0, c).concat(v.content.slice(c + 1)), m = {
      ...v,
      content: b
    }, C = u.getOptionContent(h), y = C.content.slice(0, f + 1), N = C.content.slice(f + 1), w = y.concat([[r.getNodeType(), r.getNodeId()]]).concat(N), _ = {
      ...C,
      content: w
    };
    console.log("moveNodeLeft", _, m);
    const R = this.setOptionOnNode(u.getRoute(), _, h).setOptionOnNode(s.getRoute(), m, l);
    this.setNodes(R.data.nodes);
  }
  addYoungerSibling(o) {
    console.log("addYoungerSibling", o);
    const r = this.getNode(o), [s, c, l] = r.getParent(1), u = this.addNewTaskToOption(s.getRoute(), c, l);
    this.setNodes(u.data.nodes, u.data.focus, u.data.trail);
  }
  moveNodeRight(o) {
    const r = this.getNode(o), [s, c, l] = r.getParent(1);
    if (c > 0) {
      const u = s.getChildren(l)[c - 1], f = u.getOptionContent(), h = f.content.concat([[r.getNodeType(), r.getNodeId()]]), v = {
        ...f,
        content: h
      }, b = s.getOptionContent(l), m = b.content.slice(0, c).concat(b.content.slice(c + 1)), C = {
        ...b,
        content: m
      };
      console.log("MoveNodeRight", m, h, v, C);
      const N = this.setOptionOnNode(u.getRoute(), v).setOptionOnNode(s.getRoute(), C, l);
      this.setNodes(N.data.nodes);
    } else
      throw new Error("cannot move right");
  }
  moveNodeUp(o) {
    throw new Error("not implemented");
  }
  moveNodeDown(o) {
    throw new Error("not implemented");
  }
  removeNodeFromParent(o) {
    throw new Error("not implemented");
  }
  deleteOption(o, r) {
    throw new Error("not implemented");
  }
  deleteNode(o) {
    throw new Error("not implemented");
  }
  snipNode(o) {
    throw new Error("not implemented");
  }
  deserializeTrailFromUrl(o) {
    const [r, ...s] = o.split("/").filter((b) => b !== ""), c = [["root", "root"]];
    if (!this.getNode(c).getNodeData().options[parseInt(r || "0")])
      throw new Error("firstNodeOption not found");
    return s.reduce((b, m) => {
      const [C, y] = m.split("-").map((O) => parseInt(O));
      if (!C || isNaN(C) || !y || isNaN(y))
        throw console.log("invalid row", m, o, r, s), new Error("invalid row");
      const w = this.getNode(b).getNodeData(), [_, $] = w.options.reduce((O, P) => {
        if (C < P.content.length) {
          const I = P.content[C];
          if (!I)
            throw new Error("row not found");
          return [0, I];
        } else
          return [O[0] - P.content.length, null];
      }, [C, null]);
      return [...b, $];
    }, c);
  }
  serializeTrailToUrl(o) {
    const [r, ...s] = o, c = this.getNode([r]).getNodeData(), u = `${c.selectedOption}/`, [f, h] = s.reduce((v, [b, m], C) => {
      const y = [r, ...o.slice(0, C + 1)], N = this.getNode(y).getNodeData(), w = N.selectedOption, _ = N.options.reduce((O, P, I) => I < w ? O + P.content.length : I === w ? O + P.content.findIndex(([M, W]) => M === M && W === W) : O, 0), $ = this.getNode(y).getNodeData();
      return [`${v}${_}-${N.selectedOption}/`, $];
    }, [u, c]);
    return f;
  }
  addChildrenToNode(o, r, s) {
    console.log("addChildrenToNode1");
    const c = o.parseIndex(s), l = o.getNodeData();
    console.log("addChildrenToNode2");
    const u = l.options.slice(0, c), f = l.options.slice(c + 1), h = o.getOptionContent(c), [v, b] = r.reduce((_, $) => {
      const [R, O] = _[0].insertNode($, o.getRoute(), c);
      return console.log("addChildrenToNode3"), [R, _[1].concat([[o.getNodeType(), O]])];
    }, [this, []]);
    console.log("addChildrenToNode4", v, b);
    const m = {
      ...h,
      content: [...h.content, ...b]
    }, C = [...u, m, ...f];
    console.log("addChildrenToNode5", m, C);
    const y = {
      selectedOption: l.selectedOption,
      description: l.description,
      collapsed: l.collapsed,
      options: C
    };
    console.log("addChildrenToNod6", y);
    const N = v.getNode(o.getRoute()), w = N.setNodeData(y);
    return console.log("addChildrenToNode7", N.context.data, w), this.setNodes(w.data.nodes);
  }
  moveNodeToTopChild(o, r, s) {
    const c = r.parseIndex(s), l = [o.getNodeType(), o.getNodeId()], u = r.getOptionContent(c), f = {
      ...u,
      content: [l, ...u.content]
    }, b = r.setNodeOptionData(c, f).getNode(o.getRoute()).deleteNode();
    return this.setNodes(b.data.nodes);
  }
  moveNodeToOlderSibling(o, r, s) {
    r.parseIndex(s);
    const c = [o.getNodeType(), o.getNodeId()], [l, u, f] = r.getParent(1), h = l.getOptionContent(f), v = u, b = h.content.slice(0, v), m = h.content.slice(v), C = b.concat([c]).concat(m), y = C.filter((_, $) => $ === v ? !0 : _[0] !== o.getNodeType() || _[1] !== o.getNodeId());
    console.log("moveNodeToOlderSibling", y, v, C, b, m);
    const N = {
      ...h,
      content: y
    }, w = l.setNodeOptionData(f, N);
    return this.setNodes(w.data.nodes);
  }
  moveNodeToYoungerSibling(o, r, s) {
    r.parseIndex(s);
    const c = [o.getNodeType(), o.getNodeId()], [l, u, f] = r.getParent(1), h = l.getOptionContent(f), v = u + 1, b = h.content.slice(0, v), m = h.content.slice(v), y = b.concat([c]).concat(m).filter((_, $) => $ === v ? !0 : _[0] !== o.getNodeType() || _[1] !== o.getNodeId()), N = {
      ...h,
      content: y
    }, w = l.setNodeOptionData(f, N);
    return this.setNodes(w.data.nodes);
  }
};
function vr(n, o) {
  if (n == null)
    return {};
  var r = {}, s = Object.keys(n), c, l;
  for (l = 0; l < s.length; l++)
    c = s[l], !(o.indexOf(c) >= 0) && (r[c] = n[c]);
  return r;
}
var Ky = ["color"], Mu = /* @__PURE__ */ _e(function(n, o) {
  var r = n.color, s = r === void 0 ? "currentColor" : r, c = vr(n, Ky);
  return q("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, c, {
    ref: o
  }), q("path", {
    d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
    fill: s,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Vy = ["color"], Fu = /* @__PURE__ */ _e(function(n, o) {
  var r = n.color, s = r === void 0 ? "currentColor" : r, c = vr(n, Vy);
  return q("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, c, {
    ref: o
  }), q("path", {
    d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
    fill: s,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), qy = ["color"], bb = /* @__PURE__ */ _e(function(n, o) {
  var r = n.color, s = r === void 0 ? "currentColor" : r, c = vr(n, qy);
  return q("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, c, {
    ref: o
  }), q("path", {
    d: "M7.85361 1.48959C7.65835 1.29432 7.34176 1.29432 7.1465 1.48959L1.48965 7.14644C1.29439 7.3417 1.29439 7.65829 1.48965 7.85355L3.9645 10.3284L1.64644 12.6464C1.45118 12.8417 1.45118 13.1583 1.64644 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.6716 11.0355L7.1465 13.5104C7.34176 13.7057 7.65835 13.7057 7.85361 13.5104L13.5105 7.85355C13.7057 7.65829 13.7057 7.3417 13.5105 7.14644L11.0356 4.67154L13.3535 2.35355C13.5488 2.15829 13.5488 1.84171 13.3535 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.3285 3.96443L7.85361 1.48959ZM9.62135 4.67154L7.50005 2.55025L2.55031 7.49999L4.6716 9.62129L9.62135 4.67154ZM5.37871 10.3284L7.50005 12.4497L12.4498 7.49999L10.3285 5.37865L5.37871 10.3284Z",
    fill: s,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Yy = ["color"], xb = /* @__PURE__ */ _e(function(n, o) {
  var r = n.color, s = r === void 0 ? "currentColor" : r, c = vr(n, Yy);
  return q("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, c, {
    ref: o
  }), q("path", {
    d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
    fill: s,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Zy = ["color"], yb = /* @__PURE__ */ _e(function(n, o) {
  var r = n.color, s = r === void 0 ? "currentColor" : r, c = vr(n, Zy);
  return q("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, c, {
    ref: o
  }), q("path", {
    d: "M7.49991 0.877075C3.84222 0.877075 0.877075 3.84222 0.877075 7.49991C0.877075 11.1576 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1576 14.1227 7.49991C14.1227 3.84222 11.1576 0.877075 7.49991 0.877075ZM1.82708 7.49991C1.82708 4.36689 4.36689 1.82707 7.49991 1.82707C10.6329 1.82707 13.1727 4.36689 13.1727 7.49991C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49991ZM8.37287 7.50006C8.37287 7.98196 7.98221 8.37263 7.5003 8.37263C7.01839 8.37263 6.62773 7.98196 6.62773 7.50006C6.62773 7.01815 7.01839 6.62748 7.5003 6.62748C7.98221 6.62748 8.37287 7.01815 8.37287 7.50006ZM9.32287 7.50006C9.32287 8.50664 8.50688 9.32263 7.5003 9.32263C6.49372 9.32263 5.67773 8.50664 5.67773 7.50006C5.67773 6.49348 6.49372 5.67748 7.5003 5.67748C8.50688 5.67748 9.32287 6.49348 9.32287 7.50006Z",
    fill: s,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Xy = ["color"], Jy = /* @__PURE__ */ _e(function(n, o) {
  var r = n.color, s = r === void 0 ? "currentColor" : r, c = vr(n, Xy);
  return q("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, c, {
    ref: o
  }), q("path", {
    d: "M5.5 4.625C6.12132 4.625 6.625 4.12132 6.625 3.5C6.625 2.87868 6.12132 2.375 5.5 2.375C4.87868 2.375 4.375 2.87868 4.375 3.5C4.375 4.12132 4.87868 4.625 5.5 4.625ZM9.5 4.625C10.1213 4.625 10.625 4.12132 10.625 3.5C10.625 2.87868 10.1213 2.375 9.5 2.375C8.87868 2.375 8.375 2.87868 8.375 3.5C8.375 4.12132 8.87868 4.625 9.5 4.625ZM10.625 7.5C10.625 8.12132 10.1213 8.625 9.5 8.625C8.87868 8.625 8.375 8.12132 8.375 7.5C8.375 6.87868 8.87868 6.375 9.5 6.375C10.1213 6.375 10.625 6.87868 10.625 7.5ZM5.5 8.625C6.12132 8.625 6.625 8.12132 6.625 7.5C6.625 6.87868 6.12132 6.375 5.5 6.375C4.87868 6.375 4.375 6.87868 4.375 7.5C4.375 8.12132 4.87868 8.625 5.5 8.625ZM10.625 11.5C10.625 12.1213 10.1213 12.625 9.5 12.625C8.87868 12.625 8.375 12.1213 8.375 11.5C8.375 10.8787 8.87868 10.375 9.5 10.375C10.1213 10.375 10.625 10.8787 10.625 11.5ZM5.5 12.625C6.12132 12.625 6.625 12.1213 6.625 11.5C6.625 10.8787 6.12132 10.375 5.5 10.375C4.87868 10.375 4.375 10.8787 4.375 11.5C4.375 12.1213 4.87868 12.625 5.5 12.625Z",
    fill: s,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Qy = ["color"], jy = /* @__PURE__ */ _e(function(n, o) {
  var r = n.color, s = r === void 0 ? "currentColor" : r, c = vr(n, Qy);
  return q("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, c, {
    ref: o
  }), q("path", {
    d: "M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z",
    fill: s,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), eC = ["color"], tC = /* @__PURE__ */ _e(function(n, o) {
  var r = n.color, s = r === void 0 ? "currentColor" : r, c = vr(n, eC);
  return q("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, c, {
    ref: o
  }), q("path", {
    d: "M13.9 0.499976C13.9 0.279062 13.7209 0.0999756 13.5 0.0999756C13.2791 0.0999756 13.1 0.279062 13.1 0.499976V1.09998H12.5C12.2791 1.09998 12.1 1.27906 12.1 1.49998C12.1 1.72089 12.2791 1.89998 12.5 1.89998H13.1V2.49998C13.1 2.72089 13.2791 2.89998 13.5 2.89998C13.7209 2.89998 13.9 2.72089 13.9 2.49998V1.89998H14.5C14.7209 1.89998 14.9 1.72089 14.9 1.49998C14.9 1.27906 14.7209 1.09998 14.5 1.09998H13.9V0.499976ZM11.8536 3.14642C12.0488 3.34168 12.0488 3.65826 11.8536 3.85353L10.8536 4.85353C10.6583 5.04879 10.3417 5.04879 10.1465 4.85353C9.9512 4.65827 9.9512 4.34169 10.1465 4.14642L11.1464 3.14643C11.3417 2.95116 11.6583 2.95116 11.8536 3.14642ZM9.85357 5.14642C10.0488 5.34168 10.0488 5.65827 9.85357 5.85353L2.85355 12.8535C2.65829 13.0488 2.34171 13.0488 2.14645 12.8535C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L9.14646 5.14642C9.34172 4.95116 9.65831 4.95116 9.85357 5.14642ZM13.5 5.09998C13.7209 5.09998 13.9 5.27906 13.9 5.49998V6.09998H14.5C14.7209 6.09998 14.9 6.27906 14.9 6.49998C14.9 6.72089 14.7209 6.89998 14.5 6.89998H13.9V7.49998C13.9 7.72089 13.7209 7.89998 13.5 7.89998C13.2791 7.89998 13.1 7.72089 13.1 7.49998V6.89998H12.5C12.2791 6.89998 12.1 6.72089 12.1 6.49998C12.1 6.27906 12.2791 6.09998 12.5 6.09998H13.1V5.49998C13.1 5.27906 13.2791 5.09998 13.5 5.09998ZM8.90002 0.499976C8.90002 0.279062 8.72093 0.0999756 8.50002 0.0999756C8.2791 0.0999756 8.10002 0.279062 8.10002 0.499976V1.09998H7.50002C7.2791 1.09998 7.10002 1.27906 7.10002 1.49998C7.10002 1.72089 7.2791 1.89998 7.50002 1.89998H8.10002V2.49998C8.10002 2.72089 8.2791 2.89998 8.50002 2.89998C8.72093 2.89998 8.90002 2.72089 8.90002 2.49998V1.89998H9.50002C9.72093 1.89998 9.90002 1.72089 9.90002 1.49998C9.90002 1.27906 9.72093 1.09998 9.50002 1.09998H8.90002V0.499976Z",
    fill: s,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), nC = ["color"], rC = /* @__PURE__ */ _e(function(n, o) {
  var r = n.color, s = r === void 0 ? "currentColor" : r, c = vr(n, nC);
  return q("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, c, {
    ref: o
  }), q("path", {
    d: "M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z",
    fill: s,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), oC = ["color"], iC = /* @__PURE__ */ _e(function(n, o) {
  var r = n.color, s = r === void 0 ? "currentColor" : r, c = vr(n, oC);
  return q("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, c, {
    ref: o
  }), q("path", {
    d: "M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z",
    fill: s,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), sC = ["color"], aC = /* @__PURE__ */ _e(function(n, o) {
  var r = n.color, s = r === void 0 ? "currentColor" : r, c = vr(n, sC);
  return q("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, c, {
    ref: o
  }), q("path", {
    d: "M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z",
    fill: s,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), cC = ["color"], lC = /* @__PURE__ */ _e(function(n, o) {
  var r = n.color, s = r === void 0 ? "currentColor" : r, c = vr(n, cC);
  return q("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, c, {
    ref: o
  }), q("path", {
    d: "M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z",
    fill: s,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
function Oe() {
  return Oe = Object.assign ? Object.assign.bind() : function(n) {
    for (var o = 1; o < arguments.length; o++) {
      var r = arguments[o];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (n[s] = r[s]);
    }
    return n;
  }, Oe.apply(this, arguments);
}
function uC(n, o) {
  typeof n == "function" ? n(o) : n != null && (n.current = o);
}
function Cb(...n) {
  return (o) => n.forEach(
    (r) => uC(r, o)
  );
}
function un(...n) {
  return wt(Cb(...n), n);
}
const Xo = /* @__PURE__ */ _e((n, o) => {
  const { children: r, ...s } = n, c = Bn.toArray(r), l = c.find(fC);
  if (l) {
    const u = l.props.children, f = c.map((h) => h === l ? Bn.count(u) > 1 ? Bn.only(null) : /* @__PURE__ */ Zo(u) ? u.props.children : null : h);
    return /* @__PURE__ */ q(Qm, Oe({}, s, {
      ref: o
    }), /* @__PURE__ */ Zo(u) ? /* @__PURE__ */ Ts(u, void 0, f) : null);
  }
  return /* @__PURE__ */ q(Qm, Oe({}, s, {
    ref: o
  }), r);
});
Xo.displayName = "Slot";
const Qm = /* @__PURE__ */ _e((n, o) => {
  const { children: r, ...s } = n;
  return /* @__PURE__ */ Zo(r) ? /* @__PURE__ */ Ts(r, {
    ...hC(s, r.props),
    ref: o ? Cb(o, r.ref) : r.ref
  }) : Bn.count(r) > 1 ? Bn.only(null) : null;
});
Qm.displayName = "SlotClone";
const dC = ({ children: n }) => /* @__PURE__ */ q(Tu, null, n);
function fC(n) {
  return /* @__PURE__ */ Zo(n) && n.type === dC;
}
function hC(n, o) {
  const r = {
    ...o
  };
  for (const s in o) {
    const c = n[s], l = o[s];
    /^on[A-Z]/.test(s) ? c && l ? r[s] = (...f) => {
      l(...f), c(...f);
    } : c && (r[s] = c) : s === "style" ? r[s] = {
      ...c,
      ...l
    } : s === "className" && (r[s] = [
      c,
      l
    ].filter(Boolean).join(" "));
  }
  return {
    ...n,
    ...r
  };
}
function Nb(n) {
  var o, r, s = "";
  if (typeof n == "string" || typeof n == "number")
    s += n;
  else if (typeof n == "object")
    if (Array.isArray(n))
      for (o = 0; o < n.length; o++)
        n[o] && (r = Nb(n[o])) && (s && (s += " "), s += r);
    else
      for (o in n)
        n[o] && (s && (s += " "), s += o);
  return s;
}
function _b() {
  for (var n, o, r = 0, s = ""; r < arguments.length; )
    (n = arguments[r++]) && (o = Nb(n)) && (s && (s += " "), s += o);
  return s;
}
const cw = (n) => typeof n == "boolean" ? "".concat(n) : n === 0 ? "0" : n, lw = _b, N1 = (n, o) => (r) => {
  var s;
  if ((o == null ? void 0 : o.variants) == null)
    return lw(n, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: c, defaultVariants: l } = o, u = Object.keys(c).map((v) => {
    const b = r == null ? void 0 : r[v], m = l == null ? void 0 : l[v];
    if (b === null)
      return null;
    const C = cw(b) || cw(m);
    return c[v][C];
  }), f = r && Object.entries(r).reduce((v, b) => {
    let [m, C] = b;
    return C === void 0 || (v[m] = C), v;
  }, {}), h = o == null || (s = o.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((v, b) => {
    let { class: m, className: C, ...y } = b;
    return Object.entries(y).every((N) => {
      let [w, _] = N;
      return Array.isArray(_) ? _.includes({
        ...l,
        ...f
      }[w]) : {
        ...l,
        ...f
      }[w] === _;
    }) ? [
      ...v,
      m,
      C
    ] : v;
  }, []);
  return lw(n, u, h, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
};
function pC() {
  for (var n = 0, o, r, s = ""; n < arguments.length; )
    (o = arguments[n++]) && (r = $b(o)) && (s && (s += " "), s += r);
  return s;
}
function $b(n) {
  if (typeof n == "string")
    return n;
  for (var o, r = "", s = 0; s < n.length; s++)
    n[s] && (o = $b(n[s])) && (r && (r += " "), r += o);
  return r;
}
var _1 = "-";
function gC(n) {
  var o = mC(n), r = n.conflictingClassGroups, s = n.conflictingClassGroupModifiers, c = s === void 0 ? {} : s;
  function l(f) {
    var h = f.split(_1);
    return h[0] === "" && h.length !== 1 && h.shift(), Eb(h, o) || vC(f);
  }
  function u(f, h) {
    var v = r[f] || [];
    return h && c[f] ? [].concat(v, c[f]) : v;
  }
  return {
    getClassGroupId: l,
    getConflictingClassGroupIds: u
  };
}
function Eb(n, o) {
  var u;
  if (n.length === 0)
    return o.classGroupId;
  var r = n[0], s = o.nextPart.get(r), c = s ? Eb(n.slice(1), s) : void 0;
  if (c)
    return c;
  if (o.validators.length !== 0) {
    var l = n.join(_1);
    return (u = o.validators.find(function(f) {
      var h = f.validator;
      return h(l);
    })) == null ? void 0 : u.classGroupId;
  }
}
var uw = /^\[(.+)\]$/;
function vC(n) {
  if (uw.test(n)) {
    var o = uw.exec(n)[1], r = o == null ? void 0 : o.substring(0, o.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function mC(n) {
  var o = n.theme, r = n.prefix, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, c = bC(Object.entries(n.classGroups), r);
  return c.forEach(function(l) {
    var u = l[0], f = l[1];
    jm(f, s, u, o);
  }), s;
}
function jm(n, o, r, s) {
  n.forEach(function(c) {
    if (typeof c == "string") {
      var l = c === "" ? o : dw(o, c);
      l.classGroupId = r;
      return;
    }
    if (typeof c == "function") {
      if (wC(c)) {
        jm(c(s), o, r, s);
        return;
      }
      o.validators.push({
        validator: c,
        classGroupId: r
      });
      return;
    }
    Object.entries(c).forEach(function(u) {
      var f = u[0], h = u[1];
      jm(h, dw(o, f), r, s);
    });
  });
}
function dw(n, o) {
  var r = n;
  return o.split(_1).forEach(function(s) {
    r.nextPart.has(s) || r.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(s);
  }), r;
}
function wC(n) {
  return n.isThemeGetter;
}
function bC(n, o) {
  return o ? n.map(function(r) {
    var s = r[0], c = r[1], l = c.map(function(u) {
      return typeof u == "string" ? o + u : typeof u == "object" ? Object.fromEntries(Object.entries(u).map(function(f) {
        var h = f[0], v = f[1];
        return [o + h, v];
      })) : u;
    });
    return [s, l];
  }) : n;
}
function xC(n) {
  if (n < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var o = 0, r = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  function c(l, u) {
    r.set(l, u), o++, o > n && (o = 0, s = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get: function(u) {
      var f = r.get(u);
      if (f !== void 0)
        return f;
      if ((f = s.get(u)) !== void 0)
        return c(u, f), f;
    },
    set: function(u, f) {
      r.has(u) ? r.set(u, f) : c(u, f);
    }
  };
}
var Sb = "!";
function yC(n) {
  var o = n.separator || ":", r = o.length === 1, s = o[0], c = o.length;
  return function(u) {
    for (var f = [], h = 0, v = 0, b, m = 0; m < u.length; m++) {
      var C = u[m];
      if (h === 0) {
        if (C === s && (r || u.slice(m, m + c) === o)) {
          f.push(u.slice(v, m)), v = m + c;
          continue;
        }
        if (C === "/") {
          b = m;
          continue;
        }
      }
      C === "[" ? h++ : C === "]" && h--;
    }
    var y = f.length === 0 ? u : u.substring(v), N = y.startsWith(Sb), w = N ? y.substring(1) : y, _ = b && b > v ? b - v : void 0;
    return {
      modifiers: f,
      hasImportantModifier: N,
      baseClassName: w,
      maybePostfixModifierPosition: _
    };
  };
}
function CC(n) {
  if (n.length <= 1)
    return n;
  var o = [], r = [];
  return n.forEach(function(s) {
    var c = s[0] === "[";
    c ? (o.push.apply(o, r.sort().concat([s])), r = []) : r.push(s);
  }), o.push.apply(o, r.sort()), o;
}
function NC(n) {
  return {
    cache: xC(n.cacheSize),
    splitModifiers: yC(n),
    ...gC(n)
  };
}
var _C = /\s+/;
function $C(n, o) {
  var r = o.splitModifiers, s = o.getClassGroupId, c = o.getConflictingClassGroupIds, l = /* @__PURE__ */ new Set();
  return n.trim().split(_C).map(function(u) {
    var f = r(u), h = f.modifiers, v = f.hasImportantModifier, b = f.baseClassName, m = f.maybePostfixModifierPosition, C = s(m ? b.substring(0, m) : b), y = !!m;
    if (!C) {
      if (!m)
        return {
          isTailwindClass: !1,
          originalClassName: u
        };
      if (C = s(b), !C)
        return {
          isTailwindClass: !1,
          originalClassName: u
        };
      y = !1;
    }
    var N = CC(h).join(":"), w = v ? N + Sb : N;
    return {
      isTailwindClass: !0,
      modifierId: w,
      classGroupId: C,
      originalClassName: u,
      hasPostfixModifier: y
    };
  }).reverse().filter(function(u) {
    if (!u.isTailwindClass)
      return !0;
    var f = u.modifierId, h = u.classGroupId, v = u.hasPostfixModifier, b = f + h;
    return l.has(b) ? !1 : (l.add(b), c(h, v).forEach(function(m) {
      return l.add(f + m);
    }), !0);
  }).reverse().map(function(u) {
    return u.originalClassName;
  }).join(" ");
}
function EC() {
  for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
    o[r] = arguments[r];
  var s, c, l, u = f;
  function f(v) {
    var b = o[0], m = o.slice(1), C = m.reduce(function(y, N) {
      return N(y);
    }, b());
    return s = NC(C), c = s.cache.get, l = s.cache.set, u = h, h(v);
  }
  function h(v) {
    var b = c(v);
    if (b)
      return b;
    var m = $C(v, s);
    return l(v, m), m;
  }
  return function() {
    return u(pC.apply(null, arguments));
  };
}
function Wt(n) {
  var o = function(s) {
    return s[n] || [];
  };
  return o.isThemeGetter = !0, o;
}
var Db = /^\[(?:([a-z-]+):)?(.+)\]$/i, SC = /^\d+\/\d+$/, DC = /* @__PURE__ */ new Set(["px", "full", "screen"]), OC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, RC = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, PC = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Lr(n) {
  return fs(n) || DC.has(n) || SC.test(n) || e1(n);
}
function e1(n) {
  return vs(n, "length", FC);
}
function AC(n) {
  return vs(n, "size", Ob);
}
function TC(n) {
  return vs(n, "position", Ob);
}
function IC(n) {
  return vs(n, "url", kC);
}
function eu(n) {
  return vs(n, "number", fs);
}
function fs(n) {
  return !Number.isNaN(Number(n));
}
function LC(n) {
  return n.endsWith("%") && fs(n.slice(0, -1));
}
function vl(n) {
  return fw(n) || vs(n, "number", fw);
}
function Ze(n) {
  return Db.test(n);
}
function ml() {
  return !0;
}
function Ho(n) {
  return OC.test(n);
}
function MC(n) {
  return vs(n, "", WC);
}
function vs(n, o, r) {
  var s = Db.exec(n);
  return s ? s[1] ? s[1] === o : r(s[2]) : !1;
}
function FC(n) {
  return RC.test(n);
}
function Ob() {
  return !1;
}
function kC(n) {
  return n.startsWith("url(");
}
function fw(n) {
  return Number.isInteger(Number(n));
}
function WC(n) {
  return PC.test(n);
}
function BC() {
  var n = Wt("colors"), o = Wt("spacing"), r = Wt("blur"), s = Wt("brightness"), c = Wt("borderColor"), l = Wt("borderRadius"), u = Wt("borderSpacing"), f = Wt("borderWidth"), h = Wt("contrast"), v = Wt("grayscale"), b = Wt("hueRotate"), m = Wt("invert"), C = Wt("gap"), y = Wt("gradientColorStops"), N = Wt("gradientColorStopPositions"), w = Wt("inset"), _ = Wt("margin"), $ = Wt("opacity"), R = Wt("padding"), O = Wt("saturate"), P = Wt("scale"), I = Wt("sepia"), M = Wt("skew"), W = Wt("space"), U = Wt("translate"), G = function() {
    return ["auto", "contain", "none"];
  }, Z = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, ne = function() {
    return ["auto", Ze, o];
  }, oe = function() {
    return [Ze, o];
  }, ye = function() {
    return ["", Lr];
  }, ee = function() {
    return ["auto", fs, Ze];
  }, me = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, ve = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, De = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, we = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, Y = function() {
    return ["", "0", Ze];
  }, le = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, ae = function() {
    return [fs, eu];
  }, he = function() {
    return [fs, Ze];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [ml],
      spacing: [Lr],
      blur: ["none", "", Ho, Ze],
      brightness: ae(),
      borderColor: [n],
      borderRadius: ["none", "", "full", Ho, Ze],
      borderSpacing: oe(),
      borderWidth: ye(),
      contrast: ae(),
      grayscale: Y(),
      hueRotate: he(),
      invert: Y(),
      gap: oe(),
      gradientColorStops: [n],
      gradientColorStopPositions: [LC, e1],
      inset: ne(),
      margin: ne(),
      opacity: ae(),
      padding: oe(),
      saturate: ae(),
      scale: ae(),
      sepia: Y(),
      skew: he(),
      space: oe(),
      translate: oe()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", Ze]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Ho]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": le()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": le()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(me(), [Ze])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Z()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Z()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Z()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: G()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": G()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": G()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [w]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [w]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [w]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [w]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [w]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [w]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [w]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [w]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [w]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", vl]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: ne()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", Ze]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Y()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Y()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", vl]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ml]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", vl]
        }, Ze]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ee()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ee()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ml]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [vl]
        }, Ze]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ee()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ee()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", Ze]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Ze]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [C]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [C]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [C]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(we())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal"].concat(we(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(we(), ["baseline"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [R]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [R]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [R]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [R]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [R]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [R]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [R]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [R]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [R]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [_]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [_]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [_]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [_]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [_]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [_]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [_]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [_]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [_]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [W]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [W]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", Ze, o]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", Ze, Lr]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [Ho]
        }, Ho, Ze]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Ze, o, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", Ze, Lr]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Ze, o, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Ho, e1]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", eu]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ml]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Ze]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", fs, eu]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ze, Lr]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Ze]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Ze]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [n]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [$]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [n]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [$]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(ve(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Lr]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ze, Lr]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [n]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: oe()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Ze]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", Ze]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [$]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(me(), [TC])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", AC]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, IC]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [n]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [N]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [N]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [N]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [y]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [y]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [y]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [l]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [l]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [l]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [l]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [l]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [l]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [l]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [l]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [l]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [l]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [l]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [l]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [l]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [l]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [l]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [f]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [f]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [f]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [f]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [f]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [f]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [f]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [f]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [f]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [$]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(ve(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [f]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [f]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [$]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: ve()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [c]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [c]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [c]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [c]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [c]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [c]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [c]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [c]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(ve())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ze, Lr]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Lr]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [n]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: ye()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [n]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [$]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Lr]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [n]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Ho, MC]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ml]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [$]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": De()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": De()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [s]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [h]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Ho, Ze]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [v]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [b]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [m]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [O]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [I]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [s]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [h]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [v]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [b]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [m]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [$]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [O]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [I]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [u]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [u]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [u]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Ze]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: he()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Ze]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: he()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Ze]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [P]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [P]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [P]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [vl, Ze]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [U]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [U]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [M]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [M]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Ze]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", n]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Ze]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [n]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": oe()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": oe()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": oe()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": oe()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": oe()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": oe()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": oe()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": oe()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": oe()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": oe()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": oe()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": oe()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": oe()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": oe()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": oe()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": oe()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": oe()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": oe()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", Ze]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [n, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Lr, eu]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [n, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
var UC = /* @__PURE__ */ EC(BC);
function Dt(...n) {
  return UC(_b(n));
}
const zC = N1(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Ve = z.forwardRef(
  ({ className: n, variant: o, size: r, asChild: s = !1, ...c }, l) => /* @__PURE__ */ T(
    s ? Xo : "button",
    {
      className: Dt(zC({ variant: o, size: r, className: n })),
      ref: l,
      ...c
    }
  )
);
Ve.displayName = "Button";
var HC = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const GC = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), KC = (n, o) => {
  const r = _e(
    ({ color: s = "currentColor", size: c = 24, strokeWidth: l = 2, absoluteStrokeWidth: u, children: f, ...h }, v) => q(
      "svg",
      {
        ref: v,
        ...HC,
        width: c,
        height: c,
        stroke: s,
        strokeWidth: u ? Number(l) * 24 / Number(c) : l,
        className: `lucide lucide-${GC(n)}`,
        ...h
      },
      [
        ...o.map(([b, m]) => q(b, m)),
        ...(Array.isArray(f) ? f : [f]) || []
      ]
    )
  );
  return r.displayName = `${n}`, r;
};
var Jt = KC;
const VC = Jt("Boxes", [
  [
    "path",
    {
      d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
      key: "lc1i9w"
    }
  ],
  ["path", { d: "m7 16.5-4.74-2.85", key: "1o9zyk" }],
  ["path", { d: "m7 16.5 5-3", key: "va8pkn" }],
  ["path", { d: "M7 16.5v5.17", key: "jnp8gn" }],
  [
    "path",
    {
      d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
      key: "8zsnat"
    }
  ],
  ["path", { d: "m17 16.5-5-3", key: "8arw3v" }],
  ["path", { d: "m17 16.5 4.74-2.85", key: "8rfmw" }],
  ["path", { d: "M17 16.5v5.17", key: "k6z78m" }],
  [
    "path",
    {
      d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
      key: "1xygjf"
    }
  ],
  ["path", { d: "M12 8 7.26 5.15", key: "1vbdud" }],
  ["path", { d: "m12 8 4.74-2.85", key: "3rx089" }],
  ["path", { d: "M12 13.5V8", key: "1io7kd" }]
]), Wo = Jt("BrainCircuit", [
  [
    "path",
    {
      d: "M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z",
      key: "ixwj2a"
    }
  ],
  ["path", { d: "M16 8V5c0-1.1.9-2 2-2", key: "13dx7u" }],
  ["path", { d: "M12 13h4", key: "1ku699" }],
  ["path", { d: "M12 18h6a2 2 0 0 1 2 2v1", key: "105ag5" }],
  ["path", { d: "M12 8h8", key: "1lhi5i" }],
  ["path", { d: "M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z", key: "1s25gz" }],
  ["path", { d: "M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z", key: "127460" }],
  ["path", { d: "M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z", key: "fys062" }],
  ["path", { d: "M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z", key: "1vib61" }]
]), qC = Jt("Check", [
  ["polyline", { points: "20 6 9 17 4 12", key: "10jjfj" }]
]), Rb = Jt("ChevronDownCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m16 10-4 4-4-4", key: "894hmk" }]
]), YC = Jt("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]), Pb = Jt("ChevronRightCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m10 8 4 4-4 4", key: "1wy4r4" }]
]), ZC = Jt("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), hw = Jt("CircleEllipsis", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M17 12h.01", key: "1m0b6t" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M7 12h.01", key: "eqddd0" }]
]), XC = Jt("Dices", [
  [
    "rect",
    {
      width: "12",
      height: "12",
      x: "2",
      y: "10",
      rx: "2",
      ry: "2",
      key: "6agr2n"
    }
  ],
  [
    "path",
    {
      d: "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",
      key: "1o487t"
    }
  ],
  ["path", { d: "M6 18h.01", key: "uhywen" }],
  ["path", { d: "M10 14h.01", key: "ssrbsk" }],
  ["path", { d: "M15 6h.01", key: "cblpky" }],
  ["path", { d: "M18 9h.01", key: "2061c0" }]
]), JC = Jt("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  [
    "path",
    { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }
  ]
]), QC = Jt("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]), Ab = Jt("FileText", [
  [
    "path",
    {
      d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
      key: "1nnpy2"
    }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["line", { x1: "16", x2: "8", y1: "13", y2: "13", key: "14keom" }],
  ["line", { x1: "16", x2: "8", y1: "17", y2: "17", key: "17nazh" }],
  ["line", { x1: "10", x2: "8", y1: "9", y2: "9", key: "1a5vjj" }]
]), jC = Jt("Merge", [
  ["path", { d: "m8 6 4-4 4 4", key: "ybng9g" }],
  ["path", { d: "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22", key: "1hyw0i" }],
  ["path", { d: "m20 22-5-5", key: "1m27yz" }]
]), e2 = Jt("PenSquare", [
  [
    "path",
    {
      d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
      key: "1qinfi"
    }
  ],
  [
    "path",
    { d: "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z", key: "w2jsv5" }
  ]
]), t2 = Jt("PlusCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
]), Tb = Jt("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]), n2 = Jt("Timer", [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
]), Ib = Jt("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]), Lb = Jt("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]), r2 = Jt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function Xt(n, o, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(c) {
    if (n == null || n(c), r === !1 || !c.defaultPrevented)
      return o == null ? void 0 : o(c);
  };
}
function kl(n, o = []) {
  let r = [];
  function s(l, u) {
    const f = /* @__PURE__ */ Un(u), h = r.length;
    r = [
      ...r,
      u
    ];
    function v(m) {
      const { scope: C, children: y, ...N } = m, w = (C == null ? void 0 : C[n][h]) || f, _ = vt(
        () => N,
        Object.values(N)
      );
      return /* @__PURE__ */ q(w.Provider, {
        value: _
      }, y);
    }
    function b(m, C) {
      const y = (C == null ? void 0 : C[n][h]) || f, N = Br(y);
      if (N)
        return N;
      if (u !== void 0)
        return u;
      throw new Error(`\`${m}\` must be used within \`${l}\``);
    }
    return v.displayName = l + "Provider", [
      v,
      b
    ];
  }
  const c = () => {
    const l = r.map((u) => /* @__PURE__ */ Un(u));
    return function(f) {
      const h = (f == null ? void 0 : f[n]) || l;
      return vt(
        () => ({
          [`__scope${n}`]: {
            ...f,
            [n]: h
          }
        }),
        [
          f,
          h
        ]
      );
    };
  };
  return c.scopeName = n, [
    s,
    o2(c, ...o)
  ];
}
function o2(...n) {
  const o = n[0];
  if (n.length === 1)
    return o;
  const r = () => {
    const s = n.map(
      (c) => ({
        useScope: c(),
        scopeName: c.scopeName
      })
    );
    return function(l) {
      const u = s.reduce((f, { useScope: h, scopeName: v }) => {
        const m = h(l)[`__scope${v}`];
        return {
          ...f,
          ...m
        };
      }, {});
      return vt(
        () => ({
          [`__scope${o.scopeName}`]: u
        }),
        [
          u
        ]
      );
    };
  };
  return r.scopeName = o.scopeName, r;
}
const Rs = globalThis != null && globalThis.document ? Iu : () => {
}, i2 = z["useId".toString()] || (() => {
});
let s2 = 0;
function gu(n) {
  const [o, r] = z.useState(i2());
  return Rs(() => {
    n || r(
      (s) => s ?? String(s2++)
    );
  }, [
    n
  ]), n || (o ? `radix-${o}` : "");
}
function pr(n) {
  const o = de(n);
  return be(() => {
    o.current = n;
  }), vt(
    () => (...r) => {
      var s;
      return (s = o.current) === null || s === void 0 ? void 0 : s.call(o, ...r);
    },
    []
  );
}
function $1({ prop: n, defaultProp: o, onChange: r = () => {
} }) {
  const [s, c] = a2({
    defaultProp: o,
    onChange: r
  }), l = n !== void 0, u = l ? n : s, f = pr(r), h = wt((v) => {
    if (l) {
      const m = typeof v == "function" ? v(n) : v;
      m !== n && f(m);
    } else
      c(v);
  }, [
    l,
    n,
    c,
    f
  ]);
  return [
    u,
    h
  ];
}
function a2({ defaultProp: n, onChange: o }) {
  const r = Te(n), [s] = r, c = de(s), l = pr(o);
  return be(() => {
    c.current !== s && (l(s), c.current = s);
  }, [
    s,
    c,
    l
  ]), r;
}
const c2 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], En = c2.reduce((n, o) => {
  const r = /* @__PURE__ */ _e((s, c) => {
    const { asChild: l, ...u } = s, f = l ? Xo : o;
    return be(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ q(f, Oe({}, u, {
      ref: c
    }));
  });
  return r.displayName = `Primitive.${o}`, {
    ...n,
    [o]: r
  };
}, {});
function Mb(n, o) {
  n && Lu(
    () => n.dispatchEvent(o)
  );
}
function Fb(n, o = globalThis == null ? void 0 : globalThis.document) {
  const r = pr(n);
  be(() => {
    const s = (c) => {
      c.key === "Escape" && r(c);
    };
    return o.addEventListener("keydown", s), () => o.removeEventListener("keydown", s);
  }, [
    r,
    o
  ]);
}
const t1 = "dismissableLayer.update", l2 = "dismissableLayer.pointerDownOutside", u2 = "dismissableLayer.focusOutside";
let pw;
const d2 = /* @__PURE__ */ Un({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), f2 = /* @__PURE__ */ _e((n, o) => {
  var r;
  const { disableOutsidePointerEvents: s = !1, onEscapeKeyDown: c, onPointerDownOutside: l, onFocusOutside: u, onInteractOutside: f, onDismiss: h, ...v } = n, b = Br(d2), [m, C] = Te(null), y = (r = m == null ? void 0 : m.ownerDocument) !== null && r !== void 0 ? r : globalThis == null ? void 0 : globalThis.document, [, N] = Te({}), w = un(
    o,
    (U) => C(U)
  ), _ = Array.from(b.layers), [$] = [
    ...b.layersWithOutsidePointerEventsDisabled
  ].slice(-1), R = _.indexOf($), O = m ? _.indexOf(m) : -1, P = b.layersWithOutsidePointerEventsDisabled.size > 0, I = O >= R, M = h2((U) => {
    const G = U.target, Z = [
      ...b.branches
    ].some(
      (ne) => ne.contains(G)
    );
    !I || Z || (l == null || l(U), f == null || f(U), U.defaultPrevented || h == null || h());
  }, y), W = p2((U) => {
    const G = U.target;
    [
      ...b.branches
    ].some(
      (ne) => ne.contains(G)
    ) || (u == null || u(U), f == null || f(U), U.defaultPrevented || h == null || h());
  }, y);
  return Fb((U) => {
    O === b.layers.size - 1 && (c == null || c(U), !U.defaultPrevented && h && (U.preventDefault(), h()));
  }, y), be(() => {
    if (m)
      return s && (b.layersWithOutsidePointerEventsDisabled.size === 0 && (pw = y.body.style.pointerEvents, y.body.style.pointerEvents = "none"), b.layersWithOutsidePointerEventsDisabled.add(m)), b.layers.add(m), gw(), () => {
        s && b.layersWithOutsidePointerEventsDisabled.size === 1 && (y.body.style.pointerEvents = pw);
      };
  }, [
    m,
    y,
    s,
    b
  ]), be(() => () => {
    m && (b.layers.delete(m), b.layersWithOutsidePointerEventsDisabled.delete(m), gw());
  }, [
    m,
    b
  ]), be(() => {
    const U = () => N({});
    return document.addEventListener(t1, U), () => document.removeEventListener(t1, U);
  }, []), /* @__PURE__ */ q(En.div, Oe({}, v, {
    ref: w,
    style: {
      pointerEvents: P ? I ? "auto" : "none" : void 0,
      ...n.style
    },
    onFocusCapture: Xt(n.onFocusCapture, W.onFocusCapture),
    onBlurCapture: Xt(n.onBlurCapture, W.onBlurCapture),
    onPointerDownCapture: Xt(n.onPointerDownCapture, M.onPointerDownCapture)
  }));
});
function h2(n, o = globalThis == null ? void 0 : globalThis.document) {
  const r = pr(n), s = de(!1), c = de(() => {
  });
  return be(() => {
    const l = (f) => {
      if (f.target && !s.current) {
        let v = function() {
          kb(l2, r, h, {
            discrete: !0
          });
        };
        const h = {
          originalEvent: f
        };
        f.pointerType === "touch" ? (o.removeEventListener("click", c.current), c.current = v, o.addEventListener("click", c.current, {
          once: !0
        })) : v();
      }
      s.current = !1;
    }, u = window.setTimeout(() => {
      o.addEventListener("pointerdown", l);
    }, 0);
    return () => {
      window.clearTimeout(u), o.removeEventListener("pointerdown", l), o.removeEventListener("click", c.current);
    };
  }, [
    o,
    r
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => s.current = !0
  };
}
function p2(n, o = globalThis == null ? void 0 : globalThis.document) {
  const r = pr(n), s = de(!1);
  return be(() => {
    const c = (l) => {
      l.target && !s.current && kb(u2, r, {
        originalEvent: l
      }, {
        discrete: !1
      });
    };
    return o.addEventListener("focusin", c), () => o.removeEventListener("focusin", c);
  }, [
    o,
    r
  ]), {
    onFocusCapture: () => s.current = !0,
    onBlurCapture: () => s.current = !1
  };
}
function gw() {
  const n = new CustomEvent(t1);
  document.dispatchEvent(n);
}
function kb(n, o, r, { discrete: s }) {
  const c = r.originalEvent.target, l = new CustomEvent(n, {
    bubbles: !1,
    cancelable: !0,
    detail: r
  });
  o && c.addEventListener(n, o, {
    once: !0
  }), s ? Mb(c, l) : c.dispatchEvent(l);
}
const $m = "focusScope.autoFocusOnMount", Em = "focusScope.autoFocusOnUnmount", vw = {
  bubbles: !1,
  cancelable: !0
}, g2 = /* @__PURE__ */ _e((n, o) => {
  const { loop: r = !1, trapped: s = !1, onMountAutoFocus: c, onUnmountAutoFocus: l, ...u } = n, [f, h] = Te(null), v = pr(c), b = pr(l), m = de(null), C = un(
    o,
    (w) => h(w)
  ), y = de({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  be(() => {
    if (s) {
      let w = function(O) {
        if (y.paused || !f)
          return;
        const P = O.target;
        f.contains(P) ? m.current = P : Ko(m.current, {
          select: !0
        });
      }, _ = function(O) {
        if (y.paused || !f)
          return;
        const P = O.relatedTarget;
        P !== null && (f.contains(P) || Ko(m.current, {
          select: !0
        }));
      }, $ = function(O) {
        const P = document.activeElement;
        for (const I of O)
          I.removedNodes.length > 0 && (f != null && f.contains(P) || Ko(f));
      };
      document.addEventListener("focusin", w), document.addEventListener("focusout", _);
      const R = new MutationObserver($);
      return f && R.observe(f, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", w), document.removeEventListener("focusout", _), R.disconnect();
      };
    }
  }, [
    s,
    f,
    y.paused
  ]), be(() => {
    if (f) {
      ww.add(y);
      const w = document.activeElement;
      if (!f.contains(w)) {
        const $ = new CustomEvent($m, vw);
        f.addEventListener($m, v), f.dispatchEvent($), $.defaultPrevented || (v2(y2(Wb(f)), {
          select: !0
        }), document.activeElement === w && Ko(f));
      }
      return () => {
        f.removeEventListener($m, v), setTimeout(() => {
          const $ = new CustomEvent(Em, vw);
          f.addEventListener(Em, b), f.dispatchEvent($), $.defaultPrevented || Ko(w ?? document.body, {
            select: !0
          }), f.removeEventListener(Em, b), ww.remove(y);
        }, 0);
      };
    }
  }, [
    f,
    v,
    b,
    y
  ]);
  const N = wt((w) => {
    if (!r && !s || y.paused)
      return;
    const _ = w.key === "Tab" && !w.altKey && !w.ctrlKey && !w.metaKey, $ = document.activeElement;
    if (_ && $) {
      const R = w.currentTarget, [O, P] = m2(R);
      O && P ? !w.shiftKey && $ === P ? (w.preventDefault(), r && Ko(O, {
        select: !0
      })) : w.shiftKey && $ === O && (w.preventDefault(), r && Ko(P, {
        select: !0
      })) : $ === R && w.preventDefault();
    }
  }, [
    r,
    s,
    y.paused
  ]);
  return /* @__PURE__ */ q(En.div, Oe({
    tabIndex: -1
  }, u, {
    ref: C,
    onKeyDown: N
  }));
});
function v2(n, { select: o = !1 } = {}) {
  const r = document.activeElement;
  for (const s of n)
    if (Ko(s, {
      select: o
    }), document.activeElement !== r)
      return;
}
function m2(n) {
  const o = Wb(n), r = mw(o, n), s = mw(o.reverse(), n);
  return [
    r,
    s
  ];
}
function Wb(n) {
  const o = [], r = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (s) => {
      const c = s.tagName === "INPUT" && s.type === "hidden";
      return s.disabled || s.hidden || c ? NodeFilter.FILTER_SKIP : s.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); )
    o.push(r.currentNode);
  return o;
}
function mw(n, o) {
  for (const r of n)
    if (!w2(r, {
      upTo: o
    }))
      return r;
}
function w2(n, { upTo: o }) {
  if (getComputedStyle(n).visibility === "hidden")
    return !0;
  for (; n; ) {
    if (o !== void 0 && n === o)
      return !1;
    if (getComputedStyle(n).display === "none")
      return !0;
    n = n.parentElement;
  }
  return !1;
}
function b2(n) {
  return n instanceof HTMLInputElement && "select" in n;
}
function Ko(n, { select: o = !1 } = {}) {
  if (n && n.focus) {
    const r = document.activeElement;
    n.focus({
      preventScroll: !0
    }), n !== r && b2(n) && o && n.select();
  }
}
const ww = x2();
function x2() {
  let n = [];
  return {
    add(o) {
      const r = n[0];
      o !== r && (r == null || r.pause()), n = bw(n, o), n.unshift(o);
    },
    remove(o) {
      var r;
      n = bw(n, o), (r = n[0]) === null || r === void 0 || r.resume();
    }
  };
}
function bw(n, o) {
  const r = [
    ...n
  ], s = r.indexOf(o);
  return s !== -1 && r.splice(s, 1), r;
}
function y2(n) {
  return n.filter(
    (o) => o.tagName !== "A"
  );
}
const C2 = /* @__PURE__ */ _e((n, o) => {
  var r;
  const { container: s = globalThis == null || (r = globalThis.document) === null || r === void 0 ? void 0 : r.body, ...c } = n;
  return s ? /* @__PURE__ */ y1.createPortal(/* @__PURE__ */ q(En.div, Oe({}, c, {
    ref: o
  })), s) : null;
});
function N2(n, o) {
  return x1((r, s) => {
    const c = o[r][s];
    return c ?? r;
  }, n);
}
const Is = (n) => {
  const { present: o, children: r } = n, s = _2(o), c = typeof r == "function" ? r({
    present: s.isPresent
  }) : Bn.only(r), l = un(s.ref, c.ref);
  return typeof r == "function" || s.isPresent ? /* @__PURE__ */ Ts(c, {
    ref: l
  }) : null;
};
Is.displayName = "Presence";
function _2(n) {
  const [o, r] = Te(), s = de({}), c = de(n), l = de("none"), u = n ? "mounted" : "unmounted", [f, h] = N2(u, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return be(() => {
    const v = tu(s.current);
    l.current = f === "mounted" ? v : "none";
  }, [
    f
  ]), Rs(() => {
    const v = s.current, b = c.current;
    if (b !== n) {
      const C = l.current, y = tu(v);
      n ? h("MOUNT") : y === "none" || (v == null ? void 0 : v.display) === "none" ? h("UNMOUNT") : h(b && C !== y ? "ANIMATION_OUT" : "UNMOUNT"), c.current = n;
    }
  }, [
    n,
    h
  ]), Rs(() => {
    if (o) {
      const v = (m) => {
        const y = tu(s.current).includes(m.animationName);
        m.target === o && y && Lu(
          () => h("ANIMATION_END")
        );
      }, b = (m) => {
        m.target === o && (l.current = tu(s.current));
      };
      return o.addEventListener("animationstart", b), o.addEventListener("animationcancel", v), o.addEventListener("animationend", v), () => {
        o.removeEventListener("animationstart", b), o.removeEventListener("animationcancel", v), o.removeEventListener("animationend", v);
      };
    } else
      h("ANIMATION_END");
  }, [
    o,
    h
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(f),
    ref: wt((v) => {
      v && (s.current = getComputedStyle(v)), r(v);
    }, [])
  };
}
function tu(n) {
  return (n == null ? void 0 : n.animationName) || "none";
}
let Sm = 0;
function Bb() {
  be(() => {
    var n, o;
    const r = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (n = r[0]) !== null && n !== void 0 ? n : xw()), document.body.insertAdjacentElement("beforeend", (o = r[1]) !== null && o !== void 0 ? o : xw()), Sm++, () => {
      Sm === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (s) => s.remove()
      ), Sm--;
    };
  }, []);
}
function xw() {
  const n = document.createElement("span");
  return n.setAttribute("data-radix-focus-guard", ""), n.tabIndex = 0, n.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", n;
}
var Sn = function() {
  return Sn = Object.assign || function(o) {
    for (var r, s = 1, c = arguments.length; s < c; s++) {
      r = arguments[s];
      for (var l in r)
        Object.prototype.hasOwnProperty.call(r, l) && (o[l] = r[l]);
    }
    return o;
  }, Sn.apply(this, arguments);
};
function E1(n, o) {
  var r = {};
  for (var s in n)
    Object.prototype.hasOwnProperty.call(n, s) && o.indexOf(s) < 0 && (r[s] = n[s]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, s = Object.getOwnPropertySymbols(n); c < s.length; c++)
      o.indexOf(s[c]) < 0 && Object.prototype.propertyIsEnumerable.call(n, s[c]) && (r[s[c]] = n[s[c]]);
  return r;
}
function Ub(n, o, r) {
  if (r || arguments.length === 2)
    for (var s = 0, c = o.length, l; s < c; s++)
      (l || !(s in o)) && (l || (l = Array.prototype.slice.call(o, 0, s)), l[s] = o[s]);
  return n.concat(l || Array.prototype.slice.call(o));
}
var Nl = "right-scroll-bar-position", _l = "width-before-scroll-bar", $2 = "with-scroll-bars-hidden", E2 = "--removed-body-scroll-bar-size";
function S2(n, o) {
  return typeof n == "function" ? n(o) : n && (n.current = o), n;
}
function D2(n, o) {
  var r = Te(function() {
    return {
      // value
      value: n,
      // last callback
      callback: o,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(s) {
          var c = r.value;
          c !== s && (r.value = s, r.callback(s, c));
        }
      }
    };
  })[0];
  return r.callback = o, r.facade;
}
function zb(n, o) {
  return D2(o || null, function(r) {
    return n.forEach(function(s) {
      return S2(s, r);
    });
  });
}
function O2(n) {
  return n;
}
function R2(n, o) {
  o === void 0 && (o = O2);
  var r = [], s = !1, c = {
    read: function() {
      if (s)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : n;
    },
    useMedium: function(l) {
      var u = o(l, s);
      return r.push(u), function() {
        r = r.filter(function(f) {
          return f !== u;
        });
      };
    },
    assignSyncMedium: function(l) {
      for (s = !0; r.length; ) {
        var u = r;
        r = [], u.forEach(l);
      }
      r = {
        push: function(f) {
          return l(f);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(l) {
      s = !0;
      var u = [];
      if (r.length) {
        var f = r;
        r = [], f.forEach(l), u = r;
      }
      var h = function() {
        var b = u;
        u = [], b.forEach(l);
      }, v = function() {
        return Promise.resolve().then(h);
      };
      v(), r = {
        push: function(b) {
          u.push(b), v();
        },
        filter: function(b) {
          return u = u.filter(b), r;
        }
      };
    }
  };
  return c;
}
function Hb(n) {
  n === void 0 && (n = {});
  var o = R2(null);
  return o.options = Sn({ async: !0, ssr: !1 }, n), o;
}
var Gb = function(n) {
  var o = n.sideCar, r = E1(n, ["sideCar"]);
  if (!o)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var s = o.read();
  if (!s)
    throw new Error("Sidecar medium not found");
  return z.createElement(s, Sn({}, r));
};
Gb.isSideCarExport = !0;
function Kb(n, o) {
  return n.useMedium(o), Gb;
}
var Vb = Hb(), Dm = function() {
}, ku = z.forwardRef(function(n, o) {
  var r = z.useRef(null), s = z.useState({
    onScrollCapture: Dm,
    onWheelCapture: Dm,
    onTouchMoveCapture: Dm
  }), c = s[0], l = s[1], u = n.forwardProps, f = n.children, h = n.className, v = n.removeScrollBar, b = n.enabled, m = n.shards, C = n.sideCar, y = n.noIsolation, N = n.inert, w = n.allowPinchZoom, _ = n.as, $ = _ === void 0 ? "div" : _, R = E1(n, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), O = C, P = zb([r, o]), I = Sn(Sn({}, R), c);
  return z.createElement(
    z.Fragment,
    null,
    b && z.createElement(O, { sideCar: Vb, removeScrollBar: v, shards: m, noIsolation: y, inert: N, setCallbacks: l, allowPinchZoom: !!w, lockRef: r }),
    u ? z.cloneElement(z.Children.only(f), Sn(Sn({}, I), { ref: P })) : z.createElement($, Sn({}, I, { className: h, ref: P }), f)
  );
});
ku.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ku.classNames = {
  fullWidth: _l,
  zeroRight: Nl
};
var yw, P2 = function() {
  if (yw)
    return yw;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function A2() {
  if (!document)
    return null;
  var n = document.createElement("style");
  n.type = "text/css";
  var o = P2();
  return o && n.setAttribute("nonce", o), n;
}
function T2(n, o) {
  n.styleSheet ? n.styleSheet.cssText = o : n.appendChild(document.createTextNode(o));
}
function I2(n) {
  var o = document.head || document.getElementsByTagName("head")[0];
  o.appendChild(n);
}
var L2 = function() {
  var n = 0, o = null;
  return {
    add: function(r) {
      n == 0 && (o = A2()) && (T2(o, r), I2(o)), n++;
    },
    remove: function() {
      n--, !n && o && (o.parentNode && o.parentNode.removeChild(o), o = null);
    }
  };
}, M2 = function() {
  var n = L2();
  return function(o, r) {
    z.useEffect(function() {
      return n.add(o), function() {
        n.remove();
      };
    }, [o && r]);
  };
}, S1 = function() {
  var n = M2(), o = function(r) {
    var s = r.styles, c = r.dynamic;
    return n(s, c), null;
  };
  return o;
}, F2 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Om = function(n) {
  return parseInt(n || "", 10) || 0;
}, k2 = function(n) {
  var o = window.getComputedStyle(document.body), r = o[n === "padding" ? "paddingLeft" : "marginLeft"], s = o[n === "padding" ? "paddingTop" : "marginTop"], c = o[n === "padding" ? "paddingRight" : "marginRight"];
  return [Om(r), Om(s), Om(c)];
}, W2 = function(n) {
  if (n === void 0 && (n = "margin"), typeof window > "u")
    return F2;
  var o = k2(n), r = document.documentElement.clientWidth, s = window.innerWidth;
  return {
    left: o[0],
    top: o[1],
    right: o[2],
    gap: Math.max(0, s - r + o[2] - o[0])
  };
}, B2 = S1(), U2 = function(n, o, r, s) {
  var c = n.left, l = n.top, u = n.right, f = n.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat($2, ` {
   overflow: hidden `).concat(s, `;
   padding-right: `).concat(f, "px ").concat(s, `;
  }
  body {
    overflow: hidden `).concat(s, `;
    overscroll-behavior: contain;
    `).concat([
    o && "position: relative ".concat(s, ";"),
    r === "margin" && `
    padding-left: `.concat(c, `px;
    padding-top: `).concat(l, `px;
    padding-right: `).concat(u, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(f, "px ").concat(s, `;
    `),
    r === "padding" && "padding-right: ".concat(f, "px ").concat(s, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Nl, ` {
    right: `).concat(f, "px ").concat(s, `;
  }
  
  .`).concat(_l, ` {
    margin-right: `).concat(f, "px ").concat(s, `;
  }
  
  .`).concat(Nl, " .").concat(Nl, ` {
    right: 0 `).concat(s, `;
  }
  
  .`).concat(_l, " .").concat(_l, ` {
    margin-right: 0 `).concat(s, `;
  }
  
  body {
    `).concat(E2, ": ").concat(f, `px;
  }
`);
}, qb = function(n) {
  var o = n.noRelative, r = n.noImportant, s = n.gapMode, c = s === void 0 ? "margin" : s, l = z.useMemo(function() {
    return W2(c);
  }, [c]);
  return z.createElement(B2, { styles: U2(l, !o, c, r ? "" : "!important") });
}, n1 = !1;
if (typeof window < "u")
  try {
    var nu = Object.defineProperty({}, "passive", {
      get: function() {
        return n1 = !0, !0;
      }
    });
    window.addEventListener("test", nu, nu), window.removeEventListener("test", nu, nu);
  } catch {
    n1 = !1;
  }
var xs = n1 ? { passive: !1 } : !1, z2 = function(n) {
  return n.tagName === "TEXTAREA";
}, Yb = function(n, o) {
  var r = window.getComputedStyle(n);
  return (
    // not-not-scrollable
    r[o] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !z2(n) && r[o] === "visible")
  );
}, H2 = function(n) {
  return Yb(n, "overflowY");
}, G2 = function(n) {
  return Yb(n, "overflowX");
}, Cw = function(n, o) {
  var r = o;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var s = Zb(n, r);
    if (s) {
      var c = Xb(n, r), l = c[1], u = c[2];
      if (l > u)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== document.body);
  return !1;
}, K2 = function(n) {
  var o = n.scrollTop, r = n.scrollHeight, s = n.clientHeight;
  return [
    o,
    r,
    s
  ];
}, V2 = function(n) {
  var o = n.scrollLeft, r = n.scrollWidth, s = n.clientWidth;
  return [
    o,
    r,
    s
  ];
}, Zb = function(n, o) {
  return n === "v" ? H2(o) : G2(o);
}, Xb = function(n, o) {
  return n === "v" ? K2(o) : V2(o);
}, q2 = function(n, o) {
  return n === "h" && o === "rtl" ? -1 : 1;
}, Y2 = function(n, o, r, s, c) {
  var l = q2(n, window.getComputedStyle(o).direction), u = l * s, f = r.target, h = o.contains(f), v = !1, b = u > 0, m = 0, C = 0;
  do {
    var y = Xb(n, f), N = y[0], w = y[1], _ = y[2], $ = w - _ - l * N;
    (N || $) && Zb(n, f) && (m += $, C += N), f = f.parentNode;
  } while (
    // portaled content
    !h && f !== document.body || // self content
    h && (o.contains(f) || o === f)
  );
  return (b && (c && m === 0 || !c && u > m) || !b && (c && C === 0 || !c && -u > C)) && (v = !0), v;
}, ru = function(n) {
  return "changedTouches" in n ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY] : [0, 0];
}, Nw = function(n) {
  return [n.deltaX, n.deltaY];
}, _w = function(n) {
  return n && "current" in n ? n.current : n;
}, Z2 = function(n, o) {
  return n[0] === o[0] && n[1] === o[1];
}, X2 = function(n) {
  return `
  .block-interactivity-`.concat(n, ` {pointer-events: none;}
  .allow-interactivity-`).concat(n, ` {pointer-events: all;}
`);
}, J2 = 0, ys = [];
function Q2(n) {
  var o = z.useRef([]), r = z.useRef([0, 0]), s = z.useRef(), c = z.useState(J2++)[0], l = z.useState(function() {
    return S1();
  })[0], u = z.useRef(n);
  z.useEffect(function() {
    u.current = n;
  }, [n]), z.useEffect(function() {
    if (n.inert) {
      document.body.classList.add("block-interactivity-".concat(c));
      var w = Ub([n.lockRef.current], (n.shards || []).map(_w), !0).filter(Boolean);
      return w.forEach(function(_) {
        return _.classList.add("allow-interactivity-".concat(c));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(c)), w.forEach(function(_) {
          return _.classList.remove("allow-interactivity-".concat(c));
        });
      };
    }
  }, [n.inert, n.lockRef.current, n.shards]);
  var f = z.useCallback(function(w, _) {
    if ("touches" in w && w.touches.length === 2)
      return !u.current.allowPinchZoom;
    var $ = ru(w), R = r.current, O = "deltaX" in w ? w.deltaX : R[0] - $[0], P = "deltaY" in w ? w.deltaY : R[1] - $[1], I, M = w.target, W = Math.abs(O) > Math.abs(P) ? "h" : "v";
    if ("touches" in w && W === "h" && M.type === "range")
      return !1;
    var U = Cw(W, M);
    if (!U)
      return !0;
    if (U ? I = W : (I = W === "v" ? "h" : "v", U = Cw(W, M)), !U)
      return !1;
    if (!s.current && "changedTouches" in w && (O || P) && (s.current = I), !I)
      return !0;
    var G = s.current || I;
    return Y2(G, _, w, G === "h" ? O : P, !0);
  }, []), h = z.useCallback(function(w) {
    var _ = w;
    if (!(!ys.length || ys[ys.length - 1] !== l)) {
      var $ = "deltaY" in _ ? Nw(_) : ru(_), R = o.current.filter(function(I) {
        return I.name === _.type && I.target === _.target && Z2(I.delta, $);
      })[0];
      if (R && R.should) {
        _.cancelable && _.preventDefault();
        return;
      }
      if (!R) {
        var O = (u.current.shards || []).map(_w).filter(Boolean).filter(function(I) {
          return I.contains(_.target);
        }), P = O.length > 0 ? f(_, O[0]) : !u.current.noIsolation;
        P && _.cancelable && _.preventDefault();
      }
    }
  }, []), v = z.useCallback(function(w, _, $, R) {
    var O = { name: w, delta: _, target: $, should: R };
    o.current.push(O), setTimeout(function() {
      o.current = o.current.filter(function(P) {
        return P !== O;
      });
    }, 1);
  }, []), b = z.useCallback(function(w) {
    r.current = ru(w), s.current = void 0;
  }, []), m = z.useCallback(function(w) {
    v(w.type, Nw(w), w.target, f(w, n.lockRef.current));
  }, []), C = z.useCallback(function(w) {
    v(w.type, ru(w), w.target, f(w, n.lockRef.current));
  }, []);
  z.useEffect(function() {
    return ys.push(l), n.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: C
    }), document.addEventListener("wheel", h, xs), document.addEventListener("touchmove", h, xs), document.addEventListener("touchstart", b, xs), function() {
      ys = ys.filter(function(w) {
        return w !== l;
      }), document.removeEventListener("wheel", h, xs), document.removeEventListener("touchmove", h, xs), document.removeEventListener("touchstart", b, xs);
    };
  }, []);
  var y = n.removeScrollBar, N = n.inert;
  return z.createElement(
    z.Fragment,
    null,
    N ? z.createElement(l, { styles: X2(c) }) : null,
    y ? z.createElement(qb, { gapMode: "margin" }) : null
  );
}
const j2 = Kb(Vb, Q2);
var Jb = z.forwardRef(function(n, o) {
  return z.createElement(ku, Sn({}, n, { ref: o, sideCar: j2 }));
});
Jb.classNames = ku.classNames;
const Qb = Jb;
var eN = function(n) {
  if (typeof document > "u")
    return null;
  var o = Array.isArray(n) ? n[0] : n;
  return o.ownerDocument.body;
}, Cs = /* @__PURE__ */ new WeakMap(), ou = /* @__PURE__ */ new WeakMap(), iu = {}, Rm = 0, jb = function(n) {
  return n && (n.host || jb(n.parentNode));
}, tN = function(n, o) {
  return o.map(function(r) {
    if (n.contains(r))
      return r;
    var s = jb(r);
    return s && n.contains(s) ? s : (console.error("aria-hidden", r, "in not contained inside", n, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, nN = function(n, o, r, s) {
  var c = tN(o, Array.isArray(n) ? n : [n]);
  iu[r] || (iu[r] = /* @__PURE__ */ new WeakMap());
  var l = iu[r], u = [], f = /* @__PURE__ */ new Set(), h = new Set(c), v = function(m) {
    !m || f.has(m) || (f.add(m), v(m.parentNode));
  };
  c.forEach(v);
  var b = function(m) {
    !m || h.has(m) || Array.prototype.forEach.call(m.children, function(C) {
      if (f.has(C))
        b(C);
      else {
        var y = C.getAttribute(s), N = y !== null && y !== "false", w = (Cs.get(C) || 0) + 1, _ = (l.get(C) || 0) + 1;
        Cs.set(C, w), l.set(C, _), u.push(C), w === 1 && N && ou.set(C, !0), _ === 1 && C.setAttribute(r, "true"), N || C.setAttribute(s, "true");
      }
    });
  };
  return b(o), f.clear(), Rm++, function() {
    u.forEach(function(m) {
      var C = Cs.get(m) - 1, y = l.get(m) - 1;
      Cs.set(m, C), l.set(m, y), C || (ou.has(m) || m.removeAttribute(s), ou.delete(m)), y || m.removeAttribute(r);
    }), Rm--, Rm || (Cs = /* @__PURE__ */ new WeakMap(), Cs = /* @__PURE__ */ new WeakMap(), ou = /* @__PURE__ */ new WeakMap(), iu = {});
  };
}, D1 = function(n, o, r) {
  r === void 0 && (r = "data-aria-hidden");
  var s = Array.from(Array.isArray(n) ? n : [n]), c = o || eN(n);
  return c ? (s.push.apply(s, Array.from(c.querySelectorAll("[aria-live]"))), nN(s, c, r, "aria-hidden")) : function() {
    return null;
  };
};
const ex = "Dialog", [tx, K3] = kl(ex), [rN, Gr] = tx(ex), oN = (n) => {
  const { __scopeDialog: o, children: r, open: s, defaultOpen: c, onOpenChange: l, modal: u = !0 } = n, f = de(null), h = de(null), [v = !1, b] = $1({
    prop: s,
    defaultProp: c,
    onChange: l
  });
  return /* @__PURE__ */ q(rN, {
    scope: o,
    triggerRef: f,
    contentRef: h,
    contentId: gu(),
    titleId: gu(),
    descriptionId: gu(),
    open: v,
    onOpenChange: b,
    onOpenToggle: wt(
      () => b(
        (m) => !m
      ),
      [
        b
      ]
    ),
    modal: u
  }, r);
}, nx = "DialogPortal", [iN, rx] = tx(nx, {
  forceMount: void 0
}), sN = (n) => {
  const { __scopeDialog: o, forceMount: r, children: s, container: c } = n, l = Gr(nx, o);
  return /* @__PURE__ */ q(iN, {
    scope: o,
    forceMount: r
  }, Bn.map(
    s,
    (u) => /* @__PURE__ */ q(Is, {
      present: r || l.open
    }, /* @__PURE__ */ q(C2, {
      asChild: !0,
      container: c
    }, u))
  ));
}, r1 = "DialogOverlay", aN = /* @__PURE__ */ _e((n, o) => {
  const r = rx(r1, n.__scopeDialog), { forceMount: s = r.forceMount, ...c } = n, l = Gr(r1, n.__scopeDialog);
  return l.modal ? /* @__PURE__ */ q(Is, {
    present: s || l.open
  }, /* @__PURE__ */ q(cN, Oe({}, c, {
    ref: o
  }))) : null;
}), cN = /* @__PURE__ */ _e((n, o) => {
  const { __scopeDialog: r, ...s } = n, c = Gr(r1, r);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ q(Qb, {
      as: Xo,
      allowPinchZoom: !0,
      shards: [
        c.contentRef
      ]
    }, /* @__PURE__ */ q(En.div, Oe({
      "data-state": ix(c.open)
    }, s, {
      ref: o,
      style: {
        pointerEvents: "auto",
        ...s.style
      }
    })))
  );
}), Pl = "DialogContent", lN = /* @__PURE__ */ _e((n, o) => {
  const r = rx(Pl, n.__scopeDialog), { forceMount: s = r.forceMount, ...c } = n, l = Gr(Pl, n.__scopeDialog);
  return /* @__PURE__ */ q(Is, {
    present: s || l.open
  }, l.modal ? /* @__PURE__ */ q(uN, Oe({}, c, {
    ref: o
  })) : /* @__PURE__ */ q(dN, Oe({}, c, {
    ref: o
  })));
}), uN = /* @__PURE__ */ _e((n, o) => {
  const r = Gr(Pl, n.__scopeDialog), s = de(null), c = un(o, r.contentRef, s);
  return be(() => {
    const l = s.current;
    if (l)
      return D1(l);
  }, []), /* @__PURE__ */ q(ox, Oe({}, n, {
    ref: c,
    trapFocus: r.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: Xt(n.onCloseAutoFocus, (l) => {
      var u;
      l.preventDefault(), (u = r.triggerRef.current) === null || u === void 0 || u.focus();
    }),
    onPointerDownOutside: Xt(n.onPointerDownOutside, (l) => {
      const u = l.detail.originalEvent, f = u.button === 0 && u.ctrlKey === !0;
      (u.button === 2 || f) && l.preventDefault();
    }),
    onFocusOutside: Xt(
      n.onFocusOutside,
      (l) => l.preventDefault()
    )
  }));
}), dN = /* @__PURE__ */ _e((n, o) => {
  const r = Gr(Pl, n.__scopeDialog), s = de(!1), c = de(!1);
  return /* @__PURE__ */ q(ox, Oe({}, n, {
    ref: o,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (l) => {
      var u;
      if ((u = n.onCloseAutoFocus) === null || u === void 0 || u.call(n, l), !l.defaultPrevented) {
        var f;
        s.current || (f = r.triggerRef.current) === null || f === void 0 || f.focus(), l.preventDefault();
      }
      s.current = !1, c.current = !1;
    },
    onInteractOutside: (l) => {
      var u, f;
      (u = n.onInteractOutside) === null || u === void 0 || u.call(n, l), l.defaultPrevented || (s.current = !0, l.detail.originalEvent.type === "pointerdown" && (c.current = !0));
      const h = l.target;
      ((f = r.triggerRef.current) === null || f === void 0 ? void 0 : f.contains(h)) && l.preventDefault(), l.detail.originalEvent.type === "focusin" && c.current && l.preventDefault();
    }
  }));
}), ox = /* @__PURE__ */ _e((n, o) => {
  const { __scopeDialog: r, trapFocus: s, onOpenAutoFocus: c, onCloseAutoFocus: l, ...u } = n, f = Gr(Pl, r), h = de(null), v = un(o, h);
  return Bb(), /* @__PURE__ */ q(Tu, null, /* @__PURE__ */ q(g2, {
    asChild: !0,
    loop: !0,
    trapped: s,
    onMountAutoFocus: c,
    onUnmountAutoFocus: l
  }, /* @__PURE__ */ q(f2, Oe({
    role: "dialog",
    id: f.contentId,
    "aria-describedby": f.descriptionId,
    "aria-labelledby": f.titleId,
    "data-state": ix(f.open)
  }, u, {
    ref: v,
    onDismiss: () => f.onOpenChange(!1)
  }))), !1);
}), fN = "DialogTitle", hN = /* @__PURE__ */ _e((n, o) => {
  const { __scopeDialog: r, ...s } = n, c = Gr(fN, r);
  return /* @__PURE__ */ q(En.h2, Oe({
    id: c.titleId
  }, s, {
    ref: o
  }));
}), pN = "DialogDescription", gN = /* @__PURE__ */ _e((n, o) => {
  const { __scopeDialog: r, ...s } = n, c = Gr(pN, r);
  return /* @__PURE__ */ q(En.p, Oe({
    id: c.descriptionId
  }, s, {
    ref: o
  }));
}), vN = "DialogClose", mN = /* @__PURE__ */ _e((n, o) => {
  const { __scopeDialog: r, ...s } = n, c = Gr(vN, r);
  return /* @__PURE__ */ q(En.button, Oe({
    type: "button"
  }, s, {
    ref: o,
    onClick: Xt(
      n.onClick,
      () => c.onOpenChange(!1)
    )
  }));
});
function ix(n) {
  return n ? "open" : "closed";
}
const wN = oN, Wu = sN, Bu = aN, Uu = lN, zu = hN, Hu = gN, sx = mN, ax = wN, cx = ({
  className: n,
  ...o
}) => /* @__PURE__ */ T(Wu, { className: Dt(n), ...o });
cx.displayName = Wu.displayName;
const lx = z.forwardRef(({ className: n, ...o }, r) => /* @__PURE__ */ T(
  Bu,
  {
    className: Dt(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      n
    ),
    ...o,
    ref: r
  }
));
lx.displayName = Bu.displayName;
const bN = N1(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), O1 = z.forwardRef(({ side: n = "right", className: o, children: r, ...s }, c) => /* @__PURE__ */ j(cx, { children: [
  /* @__PURE__ */ T(lx, {}),
  /* @__PURE__ */ j(
    Uu,
    {
      ref: c,
      className: Dt(bN({ side: n }), o),
      ...s,
      children: [
        r,
        /* @__PURE__ */ j(sx, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ T(xb, { className: "h-4 w-4" }),
          /* @__PURE__ */ T("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
O1.displayName = Uu.displayName;
const R1 = ({
  className: n,
  ...o
}) => /* @__PURE__ */ T(
  "div",
  {
    className: Dt(
      "flex flex-col space-y-2 text-center sm:text-left",
      n
    ),
    ...o
  }
);
R1.displayName = "SheetHeader";
const xN = z.forwardRef(({ className: n, ...o }, r) => /* @__PURE__ */ T(
  zu,
  {
    ref: r,
    className: Dt("text-lg font-semibold text-foreground", n),
    ...o
  }
));
xN.displayName = zu.displayName;
const yN = z.forwardRef(({ className: n, ...o }, r) => /* @__PURE__ */ T(
  Hu,
  {
    ref: r,
    className: Dt("text-sm text-muted-foreground", n),
    ...o
  }
));
yN.displayName = Hu.displayName;
const Gu = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Ls(n) {
  const o = Object.prototype.toString.call(n);
  return o === "[object Window]" || // In Electron context the Window object serializes to [object global]
  o === "[object global]";
}
function P1(n) {
  return "nodeType" in n;
}
function mr(n) {
  var o, r;
  return n ? Ls(n) ? n : P1(n) && (o = (r = n.ownerDocument) == null ? void 0 : r.defaultView) != null ? o : window : window;
}
function A1(n) {
  const {
    Document: o
  } = mr(n);
  return n instanceof o;
}
function Ms(n) {
  return Ls(n) ? !1 : n instanceof mr(n).HTMLElement;
}
function CN(n) {
  return n instanceof mr(n).SVGElement;
}
function Fs(n) {
  return n ? Ls(n) ? n.document : P1(n) ? A1(n) ? n : Ms(n) ? n.ownerDocument : document : document : document;
}
const Wl = Gu ? Iu : be;
function NN(n) {
  const o = de(n);
  return Wl(() => {
    o.current = n;
  }), wt(function() {
    for (var r = arguments.length, s = new Array(r), c = 0; c < r; c++)
      s[c] = arguments[c];
    return o.current == null ? void 0 : o.current(...s);
  }, []);
}
function _N() {
  const n = de(null), o = wt((s, c) => {
    n.current = setInterval(s, c);
  }, []), r = wt(() => {
    n.current !== null && (clearInterval(n.current), n.current = null);
  }, []);
  return [o, r];
}
function xu(n, o) {
  o === void 0 && (o = [n]);
  const r = de(n);
  return Wl(() => {
    r.current !== n && (r.current = n);
  }, o), r;
}
function Bl(n, o) {
  const r = de();
  return vt(
    () => {
      const s = n(r.current);
      return r.current = s, s;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...o]
  );
}
function T1(n) {
  const o = NN(n), r = de(null), s = wt(
    (c) => {
      c !== r.current && (o == null || o(c, r.current)), r.current = c;
    },
    //eslint-disable-next-line
    []
  );
  return [r, s];
}
let Pm = {};
function Ku(n, o) {
  return vt(() => {
    if (o)
      return o;
    const r = Pm[n] == null ? 0 : Pm[n] + 1;
    return Pm[n] = r, n + "-" + r;
  }, [n, o]);
}
function ux(n) {
  return function(o) {
    for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
      s[c - 1] = arguments[c];
    return s.reduce((l, u) => {
      const f = Object.entries(u);
      for (const [h, v] of f) {
        const b = l[h];
        b != null && (l[h] = b + n * v);
      }
      return l;
    }, {
      ...o
    });
  };
}
const Al = /* @__PURE__ */ ux(1), dx = /* @__PURE__ */ ux(-1);
function $N(n) {
  return "clientX" in n && "clientY" in n;
}
function EN(n) {
  if (!n)
    return !1;
  const {
    KeyboardEvent: o
  } = mr(n.target);
  return o && n instanceof o;
}
function SN(n) {
  if (!n)
    return !1;
  const {
    TouchEvent: o
  } = mr(n.target);
  return o && n instanceof o;
}
function o1(n) {
  if (SN(n)) {
    if (n.touches && n.touches.length) {
      const {
        clientX: o,
        clientY: r
      } = n.touches[0];
      return {
        x: o,
        y: r
      };
    } else if (n.changedTouches && n.changedTouches.length) {
      const {
        clientX: o,
        clientY: r
      } = n.changedTouches[0];
      return {
        x: o,
        y: r
      };
    }
  }
  return $N(n) ? {
    x: n.clientX,
    y: n.clientY
  } : null;
}
const yu = /* @__PURE__ */ Object.freeze({
  Translate: {
    toString(n) {
      if (!n)
        return;
      const {
        x: o,
        y: r
      } = n;
      return "translate3d(" + (o ? Math.round(o) : 0) + "px, " + (r ? Math.round(r) : 0) + "px, 0)";
    }
  },
  Scale: {
    toString(n) {
      if (!n)
        return;
      const {
        scaleX: o,
        scaleY: r
      } = n;
      return "scaleX(" + o + ") scaleY(" + r + ")";
    }
  },
  Transform: {
    toString(n) {
      if (n)
        return [yu.Translate.toString(n), yu.Scale.toString(n)].join(" ");
    }
  },
  Transition: {
    toString(n) {
      let {
        property: o,
        duration: r,
        easing: s
      } = n;
      return o + " " + r + "ms " + s;
    }
  }
});
function Ss(n, o, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(c) {
    if (n == null || n(c), r === !1 || !c.defaultPrevented)
      return o == null ? void 0 : o(c);
  };
}
function DN(n, o) {
  typeof n == "function" ? n(o) : n != null && (n.current = o);
}
function fx(...n) {
  return (o) => n.forEach(
    (r) => DN(r, o)
  );
}
function Ul(...n) {
  return wt(fx(...n), n);
}
function ON(n, o = []) {
  let r = [];
  function s(l, u) {
    const f = /* @__PURE__ */ Un(u), h = r.length;
    r = [
      ...r,
      u
    ];
    function v(m) {
      const { scope: C, children: y, ...N } = m, w = (C == null ? void 0 : C[n][h]) || f, _ = vt(
        () => N,
        Object.values(N)
      );
      return /* @__PURE__ */ q(w.Provider, {
        value: _
      }, y);
    }
    function b(m, C) {
      const y = (C == null ? void 0 : C[n][h]) || f, N = Br(y);
      if (N)
        return N;
      if (u !== void 0)
        return u;
      throw new Error(`\`${m}\` must be used within \`${l}\``);
    }
    return v.displayName = l + "Provider", [
      v,
      b
    ];
  }
  const c = () => {
    const l = r.map((u) => /* @__PURE__ */ Un(u));
    return function(f) {
      const h = (f == null ? void 0 : f[n]) || l;
      return vt(
        () => ({
          [`__scope${n}`]: {
            ...f,
            [n]: h
          }
        }),
        [
          f,
          h
        ]
      );
    };
  };
  return c.scopeName = n, [
    s,
    RN(c, ...o)
  ];
}
function RN(...n) {
  const o = n[0];
  if (n.length === 1)
    return o;
  const r = () => {
    const s = n.map(
      (c) => ({
        useScope: c(),
        scopeName: c.scopeName
      })
    );
    return function(l) {
      const u = s.reduce((f, { useScope: h, scopeName: v }) => {
        const m = h(l)[`__scope${v}`];
        return {
          ...f,
          ...m
        };
      }, {});
      return vt(
        () => ({
          [`__scope${o.scopeName}`]: u
        }),
        [
          u
        ]
      );
    };
  };
  return r.scopeName = o.scopeName, r;
}
const i1 = globalThis != null && globalThis.document ? Iu : () => {
}, PN = z["useId".toString()] || (() => {
});
let AN = 0;
function Am(n) {
  const [o, r] = z.useState(PN());
  return i1(() => {
    n || r(
      (s) => s ?? String(AN++)
    );
  }, [
    n
  ]), n || (o ? `radix-${o}` : "");
}
function hs(n) {
  const o = de(n);
  return be(() => {
    o.current = n;
  }), vt(
    () => (...r) => {
      var s;
      return (s = o.current) === null || s === void 0 ? void 0 : s.call(o, ...r);
    },
    []
  );
}
function TN({ prop: n, defaultProp: o, onChange: r = () => {
} }) {
  const [s, c] = IN({
    defaultProp: o,
    onChange: r
  }), l = n !== void 0, u = l ? n : s, f = hs(r), h = wt((v) => {
    if (l) {
      const m = typeof v == "function" ? v(n) : v;
      m !== n && f(m);
    } else
      c(v);
  }, [
    l,
    n,
    c,
    f
  ]);
  return [
    u,
    h
  ];
}
function IN({ defaultProp: n, onChange: o }) {
  const r = Te(n), [s] = r, c = de(s), l = hs(o);
  return be(() => {
    c.current !== s && (l(s), c.current = s);
  }, [
    s,
    c,
    l
  ]), r;
}
const I1 = /* @__PURE__ */ _e((n, o) => {
  const { children: r, ...s } = n, c = Bn.toArray(r), l = c.find(MN);
  if (l) {
    const u = l.props.children, f = c.map((h) => h === l ? Bn.count(u) > 1 ? Bn.only(null) : /* @__PURE__ */ Zo(u) ? u.props.children : null : h);
    return /* @__PURE__ */ q(s1, Oe({}, s, {
      ref: o
    }), /* @__PURE__ */ Zo(u) ? /* @__PURE__ */ Ts(u, void 0, f) : null);
  }
  return /* @__PURE__ */ q(s1, Oe({}, s, {
    ref: o
  }), r);
});
I1.displayName = "Slot";
const s1 = /* @__PURE__ */ _e((n, o) => {
  const { children: r, ...s } = n;
  return /* @__PURE__ */ Zo(r) ? /* @__PURE__ */ Ts(r, {
    ...FN(s, r.props),
    ref: fx(o, r.ref)
  }) : Bn.count(r) > 1 ? Bn.only(null) : null;
});
s1.displayName = "SlotClone";
const LN = ({ children: n }) => /* @__PURE__ */ q(Tu, null, n);
function MN(n) {
  return /* @__PURE__ */ Zo(n) && n.type === LN;
}
function FN(n, o) {
  const r = {
    ...o
  };
  for (const s in o) {
    const c = n[s], l = o[s];
    /^on[A-Z]/.test(s) ? r[s] = (...f) => {
      l == null || l(...f), c == null || c(...f);
    } : s === "style" ? r[s] = {
      ...c,
      ...l
    } : s === "className" && (r[s] = [
      c,
      l
    ].filter(Boolean).join(" "));
  }
  return {
    ...n,
    ...r
  };
}
const kN = [
  "a",
  "button",
  "div",
  "h2",
  "h3",
  "img",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], Vu = kN.reduce((n, o) => {
  const r = /* @__PURE__ */ _e((s, c) => {
    const { asChild: l, ...u } = s, f = l ? I1 : o;
    return be(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ q(f, Oe({}, u, {
      ref: c
    }));
  });
  return r.displayName = `Primitive.${o}`, {
    ...n,
    [o]: r
  };
}, {});
function WN(n, o) {
  n && Lu(
    () => n.dispatchEvent(o)
  );
}
function BN(n) {
  const o = hs(n);
  be(() => {
    const r = (s) => {
      s.key === "Escape" && o(s);
    };
    return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r);
  }, [
    o
  ]);
}
const a1 = "dismissableLayer.update", UN = "dismissableLayer.pointerDownOutside", zN = "dismissableLayer.focusOutside";
let $w;
const HN = /* @__PURE__ */ Un({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), GN = /* @__PURE__ */ _e((n, o) => {
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: s, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, onDismiss: f, ...h } = n, v = Br(HN), [b, m] = Te(null), [, C] = Te({}), y = Ul(
    o,
    (M) => m(M)
  ), N = Array.from(v.layers), [w] = [
    ...v.layersWithOutsidePointerEventsDisabled
  ].slice(-1), _ = N.indexOf(w), $ = b ? N.indexOf(b) : -1, R = v.layersWithOutsidePointerEventsDisabled.size > 0, O = $ >= _, P = KN((M) => {
    const W = M.target, U = [
      ...v.branches
    ].some(
      (G) => G.contains(W)
    );
    !O || U || (c == null || c(M), u == null || u(M), M.defaultPrevented || f == null || f());
  }), I = VN((M) => {
    const W = M.target;
    [
      ...v.branches
    ].some(
      (G) => G.contains(W)
    ) || (l == null || l(M), u == null || u(M), M.defaultPrevented || f == null || f());
  });
  return BN((M) => {
    $ === v.layers.size - 1 && (s == null || s(M), !M.defaultPrevented && f && (M.preventDefault(), f()));
  }), be(() => {
    if (b)
      return r && (v.layersWithOutsidePointerEventsDisabled.size === 0 && ($w = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), v.layersWithOutsidePointerEventsDisabled.add(b)), v.layers.add(b), Ew(), () => {
        r && v.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = $w);
      };
  }, [
    b,
    r,
    v
  ]), be(() => () => {
    b && (v.layers.delete(b), v.layersWithOutsidePointerEventsDisabled.delete(b), Ew());
  }, [
    b,
    v
  ]), be(() => {
    const M = () => C({});
    return document.addEventListener(a1, M), () => document.removeEventListener(a1, M);
  }, []), /* @__PURE__ */ q(Vu.div, Oe({}, h, {
    ref: y,
    style: {
      pointerEvents: R ? O ? "auto" : "none" : void 0,
      ...n.style
    },
    onFocusCapture: Ss(n.onFocusCapture, I.onFocusCapture),
    onBlurCapture: Ss(n.onBlurCapture, I.onBlurCapture),
    onPointerDownCapture: Ss(n.onPointerDownCapture, P.onPointerDownCapture)
  }));
});
function KN(n) {
  const o = hs(n), r = de(!1), s = de(() => {
  });
  return be(() => {
    const c = (u) => {
      if (u.target && !r.current) {
        let h = function() {
          hx(UN, o, f, {
            discrete: !0
          });
        };
        const f = {
          originalEvent: u
        };
        u.pointerType === "touch" ? (document.removeEventListener("click", s.current), s.current = h, document.addEventListener("click", s.current, {
          once: !0
        })) : h();
      }
      r.current = !1;
    }, l = window.setTimeout(() => {
      document.addEventListener("pointerdown", c);
    }, 0);
    return () => {
      window.clearTimeout(l), document.removeEventListener("pointerdown", c), document.removeEventListener("click", s.current);
    };
  }, [
    o
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function VN(n) {
  const o = hs(n), r = de(!1);
  return be(() => {
    const s = (c) => {
      c.target && !r.current && hx(zN, o, {
        originalEvent: c
      }, {
        discrete: !1
      });
    };
    return document.addEventListener("focusin", s), () => document.removeEventListener("focusin", s);
  }, [
    o
  ]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Ew() {
  const n = new CustomEvent(a1);
  document.dispatchEvent(n);
}
function hx(n, o, r, { discrete: s }) {
  const c = r.originalEvent.target, l = new CustomEvent(n, {
    bubbles: !1,
    cancelable: !0,
    detail: r
  });
  o && c.addEventListener(n, o, {
    once: !0
  }), s ? WN(c, l) : c.dispatchEvent(l);
}
const Tm = "focusScope.autoFocusOnMount", Im = "focusScope.autoFocusOnUnmount", Sw = {
  bubbles: !1,
  cancelable: !0
}, qN = /* @__PURE__ */ _e((n, o) => {
  const { loop: r = !1, trapped: s = !1, onMountAutoFocus: c, onUnmountAutoFocus: l, ...u } = n, [f, h] = Te(null), v = hs(c), b = hs(l), m = de(null), C = Ul(
    o,
    (w) => h(w)
  ), y = de({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  be(() => {
    if (s) {
      let w = function($) {
        if (y.paused || !f)
          return;
        const R = $.target;
        f.contains(R) ? m.current = R : ds(m.current, {
          select: !0
        });
      }, _ = function($) {
        y.paused || !f || f.contains($.relatedTarget) || ds(m.current, {
          select: !0
        });
      };
      return document.addEventListener("focusin", w), document.addEventListener("focusout", _), () => {
        document.removeEventListener("focusin", w), document.removeEventListener("focusout", _);
      };
    }
  }, [
    s,
    f,
    y.paused
  ]), be(() => {
    if (f) {
      Ow.add(y);
      const w = document.activeElement;
      if (!f.contains(w)) {
        const $ = new CustomEvent(Tm, Sw);
        f.addEventListener(Tm, v), f.dispatchEvent($), $.defaultPrevented || (YN(jN(px(f)), {
          select: !0
        }), document.activeElement === w && ds(f));
      }
      return () => {
        f.removeEventListener(Tm, v), setTimeout(() => {
          const $ = new CustomEvent(Im, Sw);
          f.addEventListener(Im, b), f.dispatchEvent($), $.defaultPrevented || ds(w ?? document.body, {
            select: !0
          }), f.removeEventListener(Im, b), Ow.remove(y);
        }, 0);
      };
    }
  }, [
    f,
    v,
    b,
    y
  ]);
  const N = wt((w) => {
    if (!r && !s || y.paused)
      return;
    const _ = w.key === "Tab" && !w.altKey && !w.ctrlKey && !w.metaKey, $ = document.activeElement;
    if (_ && $) {
      const R = w.currentTarget, [O, P] = ZN(R);
      O && P ? !w.shiftKey && $ === P ? (w.preventDefault(), r && ds(O, {
        select: !0
      })) : w.shiftKey && $ === O && (w.preventDefault(), r && ds(P, {
        select: !0
      })) : $ === R && w.preventDefault();
    }
  }, [
    r,
    s,
    y.paused
  ]);
  return /* @__PURE__ */ q(Vu.div, Oe({
    tabIndex: -1
  }, u, {
    ref: C,
    onKeyDown: N
  }));
});
function YN(n, { select: o = !1 } = {}) {
  const r = document.activeElement;
  for (const s of n)
    if (ds(s, {
      select: o
    }), document.activeElement !== r)
      return;
}
function ZN(n) {
  const o = px(n), r = Dw(o, n), s = Dw(o.reverse(), n);
  return [
    r,
    s
  ];
}
function px(n) {
  const o = [], r = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (s) => {
      const c = s.tagName === "INPUT" && s.type === "hidden";
      return s.disabled || s.hidden || c ? NodeFilter.FILTER_SKIP : s.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); )
    o.push(r.currentNode);
  return o;
}
function Dw(n, o) {
  for (const r of n)
    if (!XN(r, {
      upTo: o
    }))
      return r;
}
function XN(n, { upTo: o }) {
  if (getComputedStyle(n).visibility === "hidden")
    return !0;
  for (; n; ) {
    if (o !== void 0 && n === o)
      return !1;
    if (getComputedStyle(n).display === "none")
      return !0;
    n = n.parentElement;
  }
  return !1;
}
function JN(n) {
  return n instanceof HTMLInputElement && "select" in n;
}
function ds(n, { select: o = !1 } = {}) {
  if (n && n.focus) {
    const r = document.activeElement;
    n.focus({
      preventScroll: !0
    }), n !== r && JN(n) && o && n.select();
  }
}
const Ow = QN();
function QN() {
  let n = [];
  return {
    add(o) {
      const r = n[0];
      o !== r && (r == null || r.pause()), n = Rw(n, o), n.unshift(o);
    },
    remove(o) {
      var r;
      n = Rw(n, o), (r = n[0]) === null || r === void 0 || r.resume();
    }
  };
}
function Rw(n, o) {
  const r = [
    ...n
  ], s = r.indexOf(o);
  return s !== -1 && r.splice(s, 1), r;
}
function jN(n) {
  return n.filter(
    (o) => o.tagName !== "A"
  );
}
const e_ = /* @__PURE__ */ _e((n, o) => {
  var r;
  const { container: s = globalThis == null || (r = globalThis.document) === null || r === void 0 ? void 0 : r.body, ...c } = n;
  return s ? /* @__PURE__ */ y1.createPortal(/* @__PURE__ */ q(Vu.div, Oe({}, c, {
    ref: o
  })), s) : null;
});
function t_(n, o) {
  return x1((r, s) => {
    const c = o[r][s];
    return c ?? r;
  }, n);
}
const qu = (n) => {
  const { present: o, children: r } = n, s = n_(o), c = typeof r == "function" ? r({
    present: s.isPresent
  }) : Bn.only(r), l = Ul(s.ref, c.ref);
  return typeof r == "function" || s.isPresent ? /* @__PURE__ */ Ts(c, {
    ref: l
  }) : null;
};
qu.displayName = "Presence";
function n_(n) {
  const [o, r] = Te(), s = de({}), c = de(n), l = de("none"), u = n ? "mounted" : "unmounted", [f, h] = t_(u, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return be(() => {
    const v = su(s.current);
    l.current = f === "mounted" ? v : "none";
  }, [
    f
  ]), i1(() => {
    const v = s.current, b = c.current;
    if (b !== n) {
      const C = l.current, y = su(v);
      n ? h("MOUNT") : y === "none" || (v == null ? void 0 : v.display) === "none" ? h("UNMOUNT") : h(b && C !== y ? "ANIMATION_OUT" : "UNMOUNT"), c.current = n;
    }
  }, [
    n,
    h
  ]), i1(() => {
    if (o) {
      const v = (m) => {
        const y = su(s.current).includes(m.animationName);
        m.target === o && y && Lu(
          () => h("ANIMATION_END")
        );
      }, b = (m) => {
        m.target === o && (l.current = su(s.current));
      };
      return o.addEventListener("animationstart", b), o.addEventListener("animationcancel", v), o.addEventListener("animationend", v), () => {
        o.removeEventListener("animationstart", b), o.removeEventListener("animationcancel", v), o.removeEventListener("animationend", v);
      };
    } else
      h("ANIMATION_END");
  }, [
    o,
    h
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(f),
    ref: wt((v) => {
      v && (s.current = getComputedStyle(v)), r(v);
    }, [])
  };
}
function su(n) {
  return (n == null ? void 0 : n.animationName) || "none";
}
let Lm = 0;
function r_() {
  be(() => {
    var n, o;
    const r = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (n = r[0]) !== null && n !== void 0 ? n : Pw()), document.body.insertAdjacentElement("beforeend", (o = r[1]) !== null && o !== void 0 ? o : Pw()), Lm++, () => {
      Lm === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (s) => s.remove()
      ), Lm--;
    };
  }, []);
}
function Pw() {
  const n = document.createElement("span");
  return n.setAttribute("data-radix-focus-guard", ""), n.tabIndex = 0, n.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", n;
}
var gx = Hb(), Mm = function() {
}, Yu = z.forwardRef(function(n, o) {
  var r = z.useRef(null), s = z.useState({
    onScrollCapture: Mm,
    onWheelCapture: Mm,
    onTouchMoveCapture: Mm
  }), c = s[0], l = s[1], u = n.forwardProps, f = n.children, h = n.className, v = n.removeScrollBar, b = n.enabled, m = n.shards, C = n.sideCar, y = n.noIsolation, N = n.inert, w = n.allowPinchZoom, _ = n.as, $ = _ === void 0 ? "div" : _, R = E1(n, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), O = C, P = zb([r, o]), I = Sn(Sn({}, R), c);
  return z.createElement(
    z.Fragment,
    null,
    b && z.createElement(O, { sideCar: gx, removeScrollBar: v, shards: m, noIsolation: y, inert: N, setCallbacks: l, allowPinchZoom: !!w, lockRef: r }),
    u ? z.cloneElement(z.Children.only(f), Sn(Sn({}, I), { ref: P })) : z.createElement($, Sn({}, I, { className: h, ref: P }), f)
  );
});
Yu.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Yu.classNames = {
  fullWidth: _l,
  zeroRight: Nl
};
var c1 = !1;
if (typeof window < "u")
  try {
    var au = Object.defineProperty({}, "passive", {
      get: function() {
        return c1 = !0, !0;
      }
    });
    window.addEventListener("test", au, au), window.removeEventListener("test", au, au);
  } catch {
    c1 = !1;
  }
var Ns = c1 ? { passive: !1 } : !1, o_ = function(n) {
  var o = window.getComputedStyle(n);
  return o.overflowY !== "hidden" && // not-not-scrollable
  !(o.overflowY === o.overflowX && o.overflowY === "visible");
}, i_ = function(n) {
  var o = window.getComputedStyle(n);
  return o.overflowX !== "hidden" && // not-not-scrollable
  !(o.overflowY === o.overflowX && o.overflowX === "visible");
}, Aw = function(n, o) {
  var r = o;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var s = vx(n, r);
    if (s) {
      var c = mx(n, r), l = c[1], u = c[2];
      if (l > u)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== document.body);
  return !1;
}, s_ = function(n) {
  var o = n.scrollTop, r = n.scrollHeight, s = n.clientHeight;
  return [
    o,
    r,
    s
  ];
}, a_ = function(n) {
  var o = n.scrollLeft, r = n.scrollWidth, s = n.clientWidth;
  return [
    o,
    r,
    s
  ];
}, vx = function(n, o) {
  return n === "v" ? o_(o) : i_(o);
}, mx = function(n, o) {
  return n === "v" ? s_(o) : a_(o);
}, c_ = function(n, o) {
  return n === "h" && o === "rtl" ? -1 : 1;
}, l_ = function(n, o, r, s, c) {
  var l = c_(n, window.getComputedStyle(o).direction), u = l * s, f = r.target, h = o.contains(f), v = !1, b = u > 0, m = 0, C = 0;
  do {
    var y = mx(n, f), N = y[0], w = y[1], _ = y[2], $ = w - _ - l * N;
    (N || $) && vx(n, f) && (m += $, C += N), f = f.parentNode;
  } while (
    // portaled content
    !h && f !== document.body || // self content
    h && (o.contains(f) || o === f)
  );
  return (b && (c && m === 0 || !c && u > m) || !b && (c && C === 0 || !c && -u > C)) && (v = !0), v;
}, cu = function(n) {
  return "changedTouches" in n ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY] : [0, 0];
}, Tw = function(n) {
  return [n.deltaX, n.deltaY];
}, Iw = function(n) {
  return n && "current" in n ? n.current : n;
}, u_ = function(n, o) {
  return n[0] === o[0] && n[1] === o[1];
}, d_ = function(n) {
  return `
  .block-interactivity-`.concat(n, ` {pointer-events: none;}
  .allow-interactivity-`).concat(n, ` {pointer-events: all;}
`);
}, f_ = 0, _s = [];
function h_(n) {
  var o = z.useRef([]), r = z.useRef([0, 0]), s = z.useRef(), c = z.useState(f_++)[0], l = z.useState(function() {
    return S1();
  })[0], u = z.useRef(n);
  z.useEffect(function() {
    u.current = n;
  }, [n]), z.useEffect(function() {
    if (n.inert) {
      document.body.classList.add("block-interactivity-".concat(c));
      var w = Ub([n.lockRef.current], (n.shards || []).map(Iw), !0).filter(Boolean);
      return w.forEach(function(_) {
        return _.classList.add("allow-interactivity-".concat(c));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(c)), w.forEach(function(_) {
          return _.classList.remove("allow-interactivity-".concat(c));
        });
      };
    }
  }, [n.inert, n.lockRef.current, n.shards]);
  var f = z.useCallback(function(w, _) {
    if ("touches" in w && w.touches.length === 2)
      return !u.current.allowPinchZoom;
    var $ = cu(w), R = r.current, O = "deltaX" in w ? w.deltaX : R[0] - $[0], P = "deltaY" in w ? w.deltaY : R[1] - $[1], I, M = w.target, W = Math.abs(O) > Math.abs(P) ? "h" : "v";
    if ("touches" in w && W === "h" && M.type === "range")
      return !1;
    var U = Aw(W, M);
    if (!U)
      return !0;
    if (U ? I = W : (I = W === "v" ? "h" : "v", U = Aw(W, M)), !U)
      return !1;
    if (!s.current && "changedTouches" in w && (O || P) && (s.current = I), !I)
      return !0;
    var G = s.current || I;
    return l_(G, _, w, G === "h" ? O : P, !0);
  }, []), h = z.useCallback(function(w) {
    var _ = w;
    if (!(!_s.length || _s[_s.length - 1] !== l)) {
      var $ = "deltaY" in _ ? Tw(_) : cu(_), R = o.current.filter(function(I) {
        return I.name === _.type && I.target === _.target && u_(I.delta, $);
      })[0];
      if (R && R.should) {
        _.preventDefault();
        return;
      }
      if (!R) {
        var O = (u.current.shards || []).map(Iw).filter(Boolean).filter(function(I) {
          return I.contains(_.target);
        }), P = O.length > 0 ? f(_, O[0]) : !u.current.noIsolation;
        P && _.preventDefault();
      }
    }
  }, []), v = z.useCallback(function(w, _, $, R) {
    var O = { name: w, delta: _, target: $, should: R };
    o.current.push(O), setTimeout(function() {
      o.current = o.current.filter(function(P) {
        return P !== O;
      });
    }, 1);
  }, []), b = z.useCallback(function(w) {
    r.current = cu(w), s.current = void 0;
  }, []), m = z.useCallback(function(w) {
    v(w.type, Tw(w), w.target, f(w, n.lockRef.current));
  }, []), C = z.useCallback(function(w) {
    v(w.type, cu(w), w.target, f(w, n.lockRef.current));
  }, []);
  z.useEffect(function() {
    return _s.push(l), n.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: C
    }), document.addEventListener("wheel", h, Ns), document.addEventListener("touchmove", h, Ns), document.addEventListener("touchstart", b, Ns), function() {
      _s = _s.filter(function(w) {
        return w !== l;
      }), document.removeEventListener("wheel", h, Ns), document.removeEventListener("touchmove", h, Ns), document.removeEventListener("touchstart", b, Ns);
    };
  }, []);
  var y = n.removeScrollBar, N = n.inert;
  return z.createElement(
    z.Fragment,
    null,
    N ? z.createElement(l, { styles: d_(c) }) : null,
    y ? z.createElement(qb, { gapMode: "margin" }) : null
  );
}
const p_ = Kb(gx, h_);
var wx = z.forwardRef(function(n, o) {
  return z.createElement(Yu, Sn({}, n, { ref: o, sideCar: p_ }));
});
wx.classNames = Yu.classNames;
const g_ = wx, bx = "Dialog", [xx, V3] = ON(bx), [v_, ms] = xx(bx), m_ = (n) => {
  const { __scopeDialog: o, children: r, open: s, defaultOpen: c, onOpenChange: l, modal: u = !0 } = n, f = de(null), h = de(null), [v = !1, b] = TN({
    prop: s,
    defaultProp: c,
    onChange: l
  });
  return /* @__PURE__ */ q(v_, {
    scope: o,
    triggerRef: f,
    contentRef: h,
    contentId: Am(),
    titleId: Am(),
    descriptionId: Am(),
    open: v,
    onOpenChange: b,
    onOpenToggle: wt(
      () => b(
        (m) => !m
      ),
      [
        b
      ]
    ),
    modal: u
  }, r);
}, yx = "DialogPortal", [w_, Cx] = xx(yx, {
  forceMount: void 0
}), b_ = (n) => {
  const { __scopeDialog: o, forceMount: r, children: s, container: c } = n, l = ms(yx, o);
  return /* @__PURE__ */ q(w_, {
    scope: o,
    forceMount: r
  }, Bn.map(
    s,
    (u) => /* @__PURE__ */ q(qu, {
      present: r || l.open
    }, /* @__PURE__ */ q(e_, {
      asChild: !0,
      container: c
    }, u))
  ));
}, l1 = "DialogOverlay", x_ = /* @__PURE__ */ _e((n, o) => {
  const r = Cx(l1, n.__scopeDialog), { forceMount: s = r.forceMount, ...c } = n, l = ms(l1, n.__scopeDialog);
  return l.modal ? /* @__PURE__ */ q(qu, {
    present: s || l.open
  }, /* @__PURE__ */ q(y_, Oe({}, c, {
    ref: o
  }))) : null;
}), y_ = /* @__PURE__ */ _e((n, o) => {
  const { __scopeDialog: r, ...s } = n, c = ms(l1, r);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ q(g_, {
      as: I1,
      allowPinchZoom: !0,
      shards: [
        c.contentRef
      ]
    }, /* @__PURE__ */ q(Vu.div, Oe({
      "data-state": _x(c.open)
    }, s, {
      ref: o,
      style: {
        pointerEvents: "auto",
        ...s.style
      }
    })))
  );
}), Tl = "DialogContent", C_ = /* @__PURE__ */ _e((n, o) => {
  const r = Cx(Tl, n.__scopeDialog), { forceMount: s = r.forceMount, ...c } = n, l = ms(Tl, n.__scopeDialog);
  return /* @__PURE__ */ q(qu, {
    present: s || l.open
  }, l.modal ? /* @__PURE__ */ q(N_, Oe({}, c, {
    ref: o
  })) : /* @__PURE__ */ q(__, Oe({}, c, {
    ref: o
  })));
}), N_ = /* @__PURE__ */ _e((n, o) => {
  const r = ms(Tl, n.__scopeDialog), s = de(null), c = Ul(o, r.contentRef, s);
  return be(() => {
    const l = s.current;
    if (l)
      return D1(l);
  }, []), /* @__PURE__ */ q(Nx, Oe({}, n, {
    ref: c,
    trapFocus: r.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: Ss(n.onCloseAutoFocus, (l) => {
      var u;
      l.preventDefault(), (u = r.triggerRef.current) === null || u === void 0 || u.focus();
    }),
    onPointerDownOutside: Ss(n.onPointerDownOutside, (l) => {
      const u = l.detail.originalEvent, f = u.button === 0 && u.ctrlKey === !0;
      (u.button === 2 || f) && l.preventDefault();
    }),
    onFocusOutside: Ss(
      n.onFocusOutside,
      (l) => l.preventDefault()
    )
  }));
}), __ = /* @__PURE__ */ _e((n, o) => {
  const r = ms(Tl, n.__scopeDialog), s = de(!1);
  return /* @__PURE__ */ q(Nx, Oe({}, n, {
    ref: o,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (c) => {
      var l;
      if ((l = n.onCloseAutoFocus) === null || l === void 0 || l.call(n, c), !c.defaultPrevented) {
        var u;
        s.current || (u = r.triggerRef.current) === null || u === void 0 || u.focus(), c.preventDefault();
      }
      s.current = !1;
    },
    onInteractOutside: (c) => {
      var l, u;
      (l = n.onInteractOutside) === null || l === void 0 || l.call(n, c), c.defaultPrevented || (s.current = !0);
      const f = c.target;
      ((u = r.triggerRef.current) === null || u === void 0 ? void 0 : u.contains(f)) && c.preventDefault();
    }
  }));
}), Nx = /* @__PURE__ */ _e((n, o) => {
  const { __scopeDialog: r, trapFocus: s, onOpenAutoFocus: c, onCloseAutoFocus: l, ...u } = n, f = ms(Tl, r), h = de(null), v = Ul(o, h);
  return r_(), /* @__PURE__ */ q(Tu, null, /* @__PURE__ */ q(qN, {
    asChild: !0,
    loop: !0,
    trapped: s,
    onMountAutoFocus: c,
    onUnmountAutoFocus: l
  }, /* @__PURE__ */ q(GN, Oe({
    role: "dialog",
    id: f.contentId,
    "aria-describedby": f.descriptionId,
    "aria-labelledby": f.titleId,
    "data-state": _x(f.open)
  }, u, {
    ref: v,
    onDismiss: () => f.onOpenChange(!1)
  }))), !1);
});
function _x(n) {
  return n ? "open" : "closed";
}
const $_ = m_, E_ = b_, S_ = x_, D_ = C_;
var Lw = 1, O_ = 0.9, R_ = 0.3, Fm = 0.1, P_ = 0, km = 0.999, A_ = 0.9999, T_ = 0.99, Mw = /[\\\/\-_+.# \t"@\[\(\{&]/, I_ = /[\\\/\-_+.# \t"@\[\(\{&]/g;
function u1(n, o, r, s, c, l) {
  if (l === o.length)
    return c === n.length ? Lw : T_;
  for (var u = s.charAt(l), f = r.indexOf(u, c), h = 0, v, b, m; f >= 0; )
    v = u1(n, o, r, s, f + 1, l + 1), v > h && (f === c ? v *= Lw : Mw.test(n.charAt(f - 1)) ? (v *= O_, m = n.slice(c, f - 1).match(I_), m && c > 0 && (v *= Math.pow(km, m.length))) : Mw.test(n.slice(c, f - 1)) ? (v *= P_, c > 0 && (v *= Math.pow(km, f - c))) : (v *= R_, c > 0 && (v *= Math.pow(km, f - c))), n.charAt(f) !== o.charAt(l) && (v *= A_)), v < Fm && r.charAt(f - 1) === s.charAt(l + 1) && r.charAt(f - 1) !== s.charAt(l) && (b = u1(n, o, r, s, f + 1, l + 2), b * Fm > v && (v = b * Fm)), v > h && (h = v), f = r.indexOf(u, f + 1);
  return h;
}
function L_(n, o) {
  return u1(n, o, n.toLowerCase(), o.toLowerCase(), 0, 0);
}
var M_ = L_;
const F_ = /* @__PURE__ */ C1(M_);
var k_ = '[cmdk-list-sizer=""]', wl = '[cmdk-group=""]', Wm = '[cmdk-group-items=""]', W_ = '[cmdk-group-heading=""]', $x = '[cmdk-item=""]', Fw = `${$x}:not([aria-disabled="true"])`, d1 = "cmdk-item-select", Vo = "data-value", B_ = (n, o) => F_(n, o), Ex = z.createContext(void 0), zl = () => z.useContext(Ex), Sx = z.createContext(void 0), L1 = () => z.useContext(Sx), Dx = z.createContext(void 0), Ox = z.forwardRef((n, o) => {
  let r = z.useRef(null), s = $s(() => ({ search: "", value: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } })), c = $s(() => /* @__PURE__ */ new Set()), l = $s(() => /* @__PURE__ */ new Map()), u = $s(() => /* @__PURE__ */ new Map()), f = $s(() => /* @__PURE__ */ new Set()), h = Rx(n), { label: v, children: b, value: m, onValueChange: C, filter: y, shouldFilter: N, ...w } = n, _ = z.useId(), $ = z.useId(), R = z.useId(), O = J_();
  ks(() => {
    if (m !== void 0) {
      let Y = m.trim().toLowerCase();
      s.current.value = Y, O(6, Z), P.emit();
    }
  }, [m]);
  let P = z.useMemo(() => ({ subscribe: (Y) => (f.current.add(Y), () => f.current.delete(Y)), snapshot: () => s.current, setState: (Y, le, ae) => {
    var he, $e, je;
    if (!Object.is(s.current[Y], le)) {
      if (s.current[Y] = le, Y === "search")
        G(), W(), O(1, U);
      else if (Y === "value")
        if (((he = h.current) == null ? void 0 : he.value) !== void 0) {
          (je = ($e = h.current).onValueChange) == null || je.call($e, le);
          return;
        } else
          ae || O(5, Z);
      P.emit();
    }
  }, emit: () => {
    f.current.forEach((Y) => Y());
  } }), []), I = z.useMemo(() => ({ value: (Y, le) => {
    le !== u.current.get(Y) && (u.current.set(Y, le), s.current.filtered.items.set(Y, M(le)), O(2, () => {
      W(), P.emit();
    }));
  }, item: (Y, le) => (c.current.add(Y), le && (l.current.has(le) ? l.current.get(le).add(Y) : l.current.set(le, /* @__PURE__ */ new Set([Y]))), O(3, () => {
    G(), W(), s.current.value || U(), P.emit();
  }), () => {
    u.current.delete(Y), c.current.delete(Y), s.current.filtered.items.delete(Y), O(4, () => {
      G(), U(), P.emit();
    });
  }), group: (Y) => (l.current.has(Y) || l.current.set(Y, /* @__PURE__ */ new Set()), () => {
    u.current.delete(Y), l.current.delete(Y);
  }), filter: () => h.current.shouldFilter, label: v || n["aria-label"], listId: _, inputId: R, labelId: $ }), []);
  function M(Y) {
    var le;
    let ae = ((le = h.current) == null ? void 0 : le.filter) ?? B_;
    return Y ? ae(Y, s.current.search) : 0;
  }
  function W() {
    if (!r.current || !s.current.search || h.current.shouldFilter === !1)
      return;
    let Y = s.current.filtered.items, le = [];
    s.current.filtered.groups.forEach((he) => {
      let $e = l.current.get(he), je = 0;
      $e.forEach((Ue) => {
        let Le = Y.get(Ue);
        je = Math.max(Le, je);
      }), le.push([he, je]);
    });
    let ae = r.current.querySelector(k_);
    oe().sort((he, $e) => {
      let je = he.getAttribute(Vo), Ue = $e.getAttribute(Vo);
      return (Y.get(Ue) ?? 0) - (Y.get(je) ?? 0);
    }).forEach((he) => {
      let $e = he.closest(Wm);
      $e ? $e.appendChild(he.parentElement === $e ? he : he.closest(`${Wm} > *`)) : ae.appendChild(he.parentElement === ae ? he : he.closest(`${Wm} > *`));
    }), le.sort((he, $e) => $e[1] - he[1]).forEach((he) => {
      let $e = r.current.querySelector(`${wl}[${Vo}="${he[0]}"]`);
      $e == null || $e.parentElement.appendChild($e);
    });
  }
  function U() {
    let Y = oe().find((ae) => !ae.ariaDisabled), le = Y == null ? void 0 : Y.getAttribute(Vo);
    P.setState("value", le || void 0);
  }
  function G() {
    if (!s.current.search || h.current.shouldFilter === !1) {
      s.current.filtered.count = c.current.size;
      return;
    }
    s.current.filtered.groups = /* @__PURE__ */ new Set();
    let Y = 0;
    for (let le of c.current) {
      let ae = u.current.get(le), he = M(ae);
      s.current.filtered.items.set(le, he), he > 0 && Y++;
    }
    for (let [le, ae] of l.current)
      for (let he of ae)
        if (s.current.filtered.items.get(he) > 0) {
          s.current.filtered.groups.add(le);
          break;
        }
    s.current.filtered.count = Y;
  }
  function Z() {
    var Y, le, ae;
    let he = ne();
    he && (((Y = he.parentElement) == null ? void 0 : Y.firstChild) === he && ((ae = (le = he.closest(wl)) == null ? void 0 : le.querySelector(W_)) == null || ae.scrollIntoView({ block: "nearest" })), he.scrollIntoView({ block: "nearest" }));
  }
  function ne() {
    return r.current.querySelector(`${$x}[aria-selected="true"]`);
  }
  function oe() {
    return Array.from(r.current.querySelectorAll(Fw));
  }
  function ye(Y) {
    let le = oe()[Y];
    le && P.setState("value", le.getAttribute(Vo));
  }
  function ee(Y) {
    var le;
    let ae = ne(), he = oe(), $e = he.findIndex((Ue) => Ue === ae), je = he[$e + Y];
    (le = h.current) != null && le.loop && (je = $e + Y < 0 ? he[he.length - 1] : $e + Y === he.length ? he[0] : he[$e + Y]), je && P.setState("value", je.getAttribute(Vo));
  }
  function me(Y) {
    let le = ne(), ae = le == null ? void 0 : le.closest(wl), he;
    for (; ae && !he; )
      ae = Y > 0 ? Z_(ae, wl) : X_(ae, wl), he = ae == null ? void 0 : ae.querySelector(Fw);
    he ? P.setState("value", he.getAttribute(Vo)) : ee(Y);
  }
  let ve = () => ye(oe().length - 1), De = (Y) => {
    Y.preventDefault(), Y.metaKey ? ve() : Y.altKey ? me(1) : ee(1);
  }, we = (Y) => {
    Y.preventDefault(), Y.metaKey ? ye(0) : Y.altKey ? me(-1) : ee(-1);
  };
  return z.createElement("div", { ref: Hl([r, o]), ...w, "cmdk-root": "", onKeyDown: (Y) => {
    var le;
    if ((le = w.onKeyDown) == null || le.call(w, Y), !Y.defaultPrevented)
      switch (Y.key) {
        case "n":
        case "j": {
          Y.ctrlKey && De(Y);
          break;
        }
        case "ArrowDown": {
          De(Y);
          break;
        }
        case "p":
        case "k": {
          Y.ctrlKey && we(Y);
          break;
        }
        case "ArrowUp": {
          we(Y);
          break;
        }
        case "Home": {
          Y.preventDefault(), ye(0);
          break;
        }
        case "End": {
          Y.preventDefault(), ve();
          break;
        }
        case "Enter": {
          Y.preventDefault();
          let ae = ne();
          if (ae) {
            let he = new Event(d1);
            ae.dispatchEvent(he);
          }
        }
      }
  } }, z.createElement("label", { "cmdk-label": "", htmlFor: I.inputId, id: I.labelId, style: Q_ }, v), z.createElement(Sx.Provider, { value: P }, z.createElement(Ex.Provider, { value: I }, b)));
}), U_ = z.forwardRef((n, o) => {
  let r = z.useId(), s = z.useRef(null), c = z.useContext(Dx), l = zl(), u = Rx(n);
  ks(() => l.item(r, c), []);
  let f = Px(r, s, [n.value, n.children, s]), h = L1(), v = Ps(($) => $.value && $.value === f.current), b = Ps(($) => l.filter() === !1 ? !0 : $.search ? $.filtered.items.get(r) > 0 : !0);
  z.useEffect(() => {
    let $ = s.current;
    if (!(!$ || n.disabled))
      return $.addEventListener(d1, m), () => $.removeEventListener(d1, m);
  }, [b, n.onSelect, n.disabled]);
  function m() {
    var $, R;
    (R = ($ = u.current).onSelect) == null || R.call($, f.current);
  }
  function C() {
    h.setState("value", f.current, !0);
  }
  if (!b)
    return null;
  let { disabled: y, value: N, onSelect: w, ..._ } = n;
  return z.createElement("div", { ref: Hl([s, o]), ..._, "cmdk-item": "", role: "option", "aria-disabled": y || void 0, "aria-selected": v || void 0, "data-selected": v || void 0, onPointerMove: y ? void 0 : C, onClick: y ? void 0 : m }, n.children);
}), z_ = z.forwardRef((n, o) => {
  let { heading: r, children: s, ...c } = n, l = z.useId(), u = z.useRef(null), f = z.useRef(null), h = z.useId(), v = zl(), b = Ps((C) => v.filter() === !1 ? !0 : C.search ? C.filtered.groups.has(l) : !0);
  ks(() => v.group(l), []), Px(l, u, [n.value, n.heading, f]);
  let m = z.createElement(Dx.Provider, { value: l }, s);
  return z.createElement("div", { ref: Hl([u, o]), ...c, "cmdk-group": "", role: "presentation", hidden: b ? void 0 : !0 }, r && z.createElement("div", { ref: f, "cmdk-group-heading": "", "aria-hidden": !0, id: h }, r), z.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": r ? h : void 0 }, m));
}), H_ = z.forwardRef((n, o) => {
  let { alwaysRender: r, ...s } = n, c = z.useRef(null), l = Ps((u) => !u.search);
  return !r && !l ? null : z.createElement("div", { ref: Hl([c, o]), ...s, "cmdk-separator": "", role: "separator" });
}), G_ = z.forwardRef((n, o) => {
  let { onValueChange: r, ...s } = n, c = n.value != null, l = L1(), u = Ps((h) => h.search), f = zl();
  return z.useEffect(() => {
    n.value != null && l.setState("search", n.value);
  }, [n.value]), z.createElement("input", { ref: o, ...s, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": f.listId, "aria-labelledby": f.labelId, id: f.inputId, type: "text", value: c ? n.value : u, onChange: (h) => {
    c || l.setState("search", h.target.value), r == null || r(h.target.value);
  } });
}), K_ = z.forwardRef((n, o) => {
  let { children: r, ...s } = n, c = z.useRef(null), l = z.useRef(null), u = zl();
  return z.useEffect(() => {
    if (l.current && c.current) {
      let f = l.current, h = c.current, v, b = new ResizeObserver(() => {
        v = requestAnimationFrame(() => {
          let m = f.getBoundingClientRect().height;
          h.style.setProperty("--cmdk-list-height", m.toFixed(1) + "px");
        });
      });
      return b.observe(f), () => {
        cancelAnimationFrame(v), b.unobserve(f);
      };
    }
  }, []), z.createElement("div", { ref: Hl([c, o]), ...s, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: u.listId, "aria-labelledby": u.inputId }, z.createElement("div", { ref: l, "cmdk-list-sizer": "" }, r));
}), V_ = z.forwardRef((n, o) => {
  let { open: r, onOpenChange: s, container: c, ...l } = n;
  return z.createElement($_, { open: r, onOpenChange: s }, z.createElement(E_, { container: c }, z.createElement(S_, { "cmdk-overlay": "" }), z.createElement(D_, { "aria-label": n.label, "cmdk-dialog": "" }, z.createElement(Ox, { ref: o, ...l }))));
}), q_ = z.forwardRef((n, o) => {
  let r = z.useRef(!0), s = Ps((c) => c.filtered.count === 0);
  return z.useEffect(() => {
    r.current = !1;
  }, []), r.current || !s ? null : z.createElement("div", { ref: o, ...n, "cmdk-empty": "", role: "presentation" });
}), Y_ = z.forwardRef((n, o) => {
  let { progress: r, children: s, ...c } = n;
  return z.createElement("div", { ref: o, ...c, "cmdk-loading": "", role: "progressbar", "aria-valuenow": r, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, z.createElement("div", { "aria-hidden": !0 }, s));
}), zn = Object.assign(Ox, { List: K_, Item: U_, Input: G_, Group: z_, Separator: H_, Dialog: V_, Empty: q_, Loading: Y_ });
function Z_(n, o) {
  let r = n.nextElementSibling;
  for (; r; ) {
    if (r.matches(o))
      return r;
    r = r.nextElementSibling;
  }
}
function X_(n, o) {
  let r = n.previousElementSibling;
  for (; r; ) {
    if (r.matches(o))
      return r;
    r = r.previousElementSibling;
  }
}
function Rx(n) {
  let o = z.useRef(n);
  return ks(() => {
    o.current = n;
  }), o;
}
var ks = typeof window > "u" ? z.useEffect : z.useLayoutEffect;
function $s(n) {
  let o = z.useRef();
  return o.current === void 0 && (o.current = n()), o;
}
function Hl(n) {
  return (o) => {
    n.forEach((r) => {
      typeof r == "function" ? r(o) : r != null && (r.current = o);
    });
  };
}
function Ps(n) {
  let o = L1(), r = () => n(o.snapshot());
  return z.useSyncExternalStore(o.subscribe, r, r);
}
function Px(n, o, r) {
  let s = z.useRef(), c = zl();
  return ks(() => {
    var l;
    let u = (() => {
      var f;
      for (let h of r) {
        if (typeof h == "string")
          return h.trim().toLowerCase();
        if (typeof h == "object" && "current" in h && h.current)
          return (f = h.current.textContent) == null ? void 0 : f.trim().toLowerCase();
      }
    })();
    c.value(n, u), (l = o.current) == null || l.setAttribute(Vo, u), s.current = u;
  }), s;
}
var J_ = () => {
  let [n, o] = z.useState(), r = $s(() => /* @__PURE__ */ new Map());
  return ks(() => {
    r.current.forEach((s) => s()), r.current = /* @__PURE__ */ new Map();
  }, [n]), (s, c) => {
    r.current.set(s, c), o({});
  };
}, Q_ = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Ax = ({
  className: n,
  ...o
}) => /* @__PURE__ */ T(Wu, { className: Dt(n), ...o });
Ax.displayName = Wu.displayName;
const Tx = z.forwardRef(({ className: n, ...o }, r) => /* @__PURE__ */ T(
  Bu,
  {
    ref: r,
    className: Dt(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      n
    ),
    ...o
  }
));
Tx.displayName = Bu.displayName;
const j_ = z.forwardRef(({ className: n, children: o, ...r }, s) => /* @__PURE__ */ j(Ax, { children: [
  /* @__PURE__ */ T(Tx, {}),
  /* @__PURE__ */ j(
    Uu,
    {
      ref: s,
      className: Dt(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
        n
      ),
      ...r,
      children: [
        o,
        /* @__PURE__ */ j(sx, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ T(xb, { className: "h-4 w-4" }),
          /* @__PURE__ */ T("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
j_.displayName = Uu.displayName;
const e$ = z.forwardRef(({ className: n, ...o }, r) => /* @__PURE__ */ T(
  zu,
  {
    ref: r,
    className: Dt(
      "text-lg font-semibold leading-none tracking-tight",
      n
    ),
    ...o
  }
));
e$.displayName = zu.displayName;
const t$ = z.forwardRef(({ className: n, ...o }, r) => /* @__PURE__ */ T(
  Hu,
  {
    ref: r,
    className: Dt("text-sm text-muted-foreground", n),
    ...o
  }
));
t$.displayName = Hu.displayName;
const Gl = z.forwardRef(({ className: n, ...o }, r) => /* @__PURE__ */ T(
  zn,
  {
    ref: r,
    className: Dt(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      n
    ),
    ...o
  }
));
Gl.displayName = zn.displayName;
const M1 = z.forwardRef(({ className: n, ...o }, r) => (
  // eslint-disable-next-line react/no-unknown-property
  /* @__PURE__ */ j("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
    /* @__PURE__ */ T(rC, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
    /* @__PURE__ */ T(
      zn.Input,
      {
        ref: r,
        className: Dt(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          n
        ),
        ...o
      }
    )
  ] })
));
M1.displayName = zn.Input.displayName;
const n$ = z.forwardRef(({ className: n, ...o }, r) => /* @__PURE__ */ T(
  zn.List,
  {
    ref: r,
    className: Dt("max-h-[300px] overflow-y-auto overflow-x-hidden", n),
    ...o
  }
));
n$.displayName = zn.List.displayName;
const Kl = z.forwardRef((n, o) => /* @__PURE__ */ T(
  zn.Empty,
  {
    ref: o,
    className: "py-6 text-center text-sm",
    ...n
  }
));
Kl.displayName = zn.Empty.displayName;
const ps = z.forwardRef(({ className: n, ...o }, r) => /* @__PURE__ */ T(
  zn.Group,
  {
    ref: r,
    className: Dt(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      n
    ),
    ...o
  }
));
ps.displayName = zn.Group.displayName;
const r$ = z.forwardRef(({ className: n, ...o }, r) => /* @__PURE__ */ T(
  zn.Separator,
  {
    ref: r,
    className: Dt("-mx-1 h-px bg-border", n),
    ...o
  }
));
r$.displayName = zn.Separator.displayName;
const Vl = z.forwardRef(({ className: n, ...o }, r) => /* @__PURE__ */ T(
  zn.Item,
  {
    ref: r,
    className: Dt(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      n
    ),
    ...o
  }
));
Vl.displayName = zn.Item.displayName;
const f1 = "dismissableLayer.update", o$ = "dismissableLayer.pointerDownOutside", i$ = "dismissableLayer.focusOutside";
let kw;
const s$ = /* @__PURE__ */ Un({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), a$ = /* @__PURE__ */ _e((n, o) => {
  var r;
  const { disableOutsidePointerEvents: s = !1, onEscapeKeyDown: c, onPointerDownOutside: l, onFocusOutside: u, onInteractOutside: f, onDismiss: h, ...v } = n, b = Br(s$), [m, C] = Te(null), y = (r = m == null ? void 0 : m.ownerDocument) !== null && r !== void 0 ? r : globalThis == null ? void 0 : globalThis.document, [, N] = Te({}), w = un(
    o,
    (U) => C(U)
  ), _ = Array.from(b.layers), [$] = [
    ...b.layersWithOutsidePointerEventsDisabled
  ].slice(-1), R = _.indexOf($), O = m ? _.indexOf(m) : -1, P = b.layersWithOutsidePointerEventsDisabled.size > 0, I = O >= R, M = c$((U) => {
    const G = U.target, Z = [
      ...b.branches
    ].some(
      (ne) => ne.contains(G)
    );
    !I || Z || (l == null || l(U), f == null || f(U), U.defaultPrevented || h == null || h());
  }, y), W = l$((U) => {
    const G = U.target;
    [
      ...b.branches
    ].some(
      (ne) => ne.contains(G)
    ) || (u == null || u(U), f == null || f(U), U.defaultPrevented || h == null || h());
  }, y);
  return Fb((U) => {
    O === b.layers.size - 1 && (c == null || c(U), !U.defaultPrevented && h && (U.preventDefault(), h()));
  }, y), be(() => {
    if (m)
      return s && (b.layersWithOutsidePointerEventsDisabled.size === 0 && (kw = y.body.style.pointerEvents, y.body.style.pointerEvents = "none"), b.layersWithOutsidePointerEventsDisabled.add(m)), b.layers.add(m), Ww(), () => {
        s && b.layersWithOutsidePointerEventsDisabled.size === 1 && (y.body.style.pointerEvents = kw);
      };
  }, [
    m,
    y,
    s,
    b
  ]), be(() => () => {
    m && (b.layers.delete(m), b.layersWithOutsidePointerEventsDisabled.delete(m), Ww());
  }, [
    m,
    b
  ]), be(() => {
    const U = () => N({});
    return document.addEventListener(f1, U), () => document.removeEventListener(f1, U);
  }, []), /* @__PURE__ */ q(En.div, Oe({}, v, {
    ref: w,
    style: {
      pointerEvents: P ? I ? "auto" : "none" : void 0,
      ...n.style
    },
    onFocusCapture: Xt(n.onFocusCapture, W.onFocusCapture),
    onBlurCapture: Xt(n.onBlurCapture, W.onBlurCapture),
    onPointerDownCapture: Xt(n.onPointerDownCapture, M.onPointerDownCapture)
  }));
});
function c$(n, o = globalThis == null ? void 0 : globalThis.document) {
  const r = pr(n), s = de(!1), c = de(() => {
  });
  return be(() => {
    const l = (f) => {
      if (f.target && !s.current) {
        let v = function() {
          Ix(o$, r, h, {
            discrete: !0
          });
        };
        const h = {
          originalEvent: f
        };
        f.pointerType === "touch" ? (o.removeEventListener("click", c.current), c.current = v, o.addEventListener("click", c.current, {
          once: !0
        })) : v();
      } else
        o.removeEventListener("click", c.current);
      s.current = !1;
    }, u = window.setTimeout(() => {
      o.addEventListener("pointerdown", l);
    }, 0);
    return () => {
      window.clearTimeout(u), o.removeEventListener("pointerdown", l), o.removeEventListener("click", c.current);
    };
  }, [
    o,
    r
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => s.current = !0
  };
}
function l$(n, o = globalThis == null ? void 0 : globalThis.document) {
  const r = pr(n), s = de(!1);
  return be(() => {
    const c = (l) => {
      l.target && !s.current && Ix(i$, r, {
        originalEvent: l
      }, {
        discrete: !1
      });
    };
    return o.addEventListener("focusin", c), () => o.removeEventListener("focusin", c);
  }, [
    o,
    r
  ]), {
    onFocusCapture: () => s.current = !0,
    onBlurCapture: () => s.current = !1
  };
}
function Ww() {
  const n = new CustomEvent(f1);
  document.dispatchEvent(n);
}
function Ix(n, o, r, { discrete: s }) {
  const c = r.originalEvent.target, l = new CustomEvent(n, {
    bubbles: !1,
    cancelable: !0,
    detail: r
  });
  o && c.addEventListener(n, o, {
    once: !0
  }), s ? Mb(c, l) : c.dispatchEvent(l);
}
const Bm = "focusScope.autoFocusOnMount", Um = "focusScope.autoFocusOnUnmount", Bw = {
  bubbles: !1,
  cancelable: !0
}, u$ = /* @__PURE__ */ _e((n, o) => {
  const { loop: r = !1, trapped: s = !1, onMountAutoFocus: c, onUnmountAutoFocus: l, ...u } = n, [f, h] = Te(null), v = pr(c), b = pr(l), m = de(null), C = un(
    o,
    (w) => h(w)
  ), y = de({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  be(() => {
    if (s) {
      let w = function(O) {
        if (y.paused || !f)
          return;
        const P = O.target;
        f.contains(P) ? m.current = P : qo(m.current, {
          select: !0
        });
      }, _ = function(O) {
        if (y.paused || !f)
          return;
        const P = O.relatedTarget;
        P !== null && (f.contains(P) || qo(m.current, {
          select: !0
        }));
      }, $ = function(O) {
        if (document.activeElement === document.body)
          for (const I of O)
            I.removedNodes.length > 0 && qo(f);
      };
      document.addEventListener("focusin", w), document.addEventListener("focusout", _);
      const R = new MutationObserver($);
      return f && R.observe(f, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", w), document.removeEventListener("focusout", _), R.disconnect();
      };
    }
  }, [
    s,
    f,
    y.paused
  ]), be(() => {
    if (f) {
      zw.add(y);
      const w = document.activeElement;
      if (!f.contains(w)) {
        const $ = new CustomEvent(Bm, Bw);
        f.addEventListener(Bm, v), f.dispatchEvent($), $.defaultPrevented || (d$(v$(Lx(f)), {
          select: !0
        }), document.activeElement === w && qo(f));
      }
      return () => {
        f.removeEventListener(Bm, v), setTimeout(() => {
          const $ = new CustomEvent(Um, Bw);
          f.addEventListener(Um, b), f.dispatchEvent($), $.defaultPrevented || qo(w ?? document.body, {
            select: !0
          }), f.removeEventListener(Um, b), zw.remove(y);
        }, 0);
      };
    }
  }, [
    f,
    v,
    b,
    y
  ]);
  const N = wt((w) => {
    if (!r && !s || y.paused)
      return;
    const _ = w.key === "Tab" && !w.altKey && !w.ctrlKey && !w.metaKey, $ = document.activeElement;
    if (_ && $) {
      const R = w.currentTarget, [O, P] = f$(R);
      O && P ? !w.shiftKey && $ === P ? (w.preventDefault(), r && qo(O, {
        select: !0
      })) : w.shiftKey && $ === O && (w.preventDefault(), r && qo(P, {
        select: !0
      })) : $ === R && w.preventDefault();
    }
  }, [
    r,
    s,
    y.paused
  ]);
  return /* @__PURE__ */ q(En.div, Oe({
    tabIndex: -1
  }, u, {
    ref: C,
    onKeyDown: N
  }));
});
function d$(n, { select: o = !1 } = {}) {
  const r = document.activeElement;
  for (const s of n)
    if (qo(s, {
      select: o
    }), document.activeElement !== r)
      return;
}
function f$(n) {
  const o = Lx(n), r = Uw(o, n), s = Uw(o.reverse(), n);
  return [
    r,
    s
  ];
}
function Lx(n) {
  const o = [], r = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (s) => {
      const c = s.tagName === "INPUT" && s.type === "hidden";
      return s.disabled || s.hidden || c ? NodeFilter.FILTER_SKIP : s.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); )
    o.push(r.currentNode);
  return o;
}
function Uw(n, o) {
  for (const r of n)
    if (!h$(r, {
      upTo: o
    }))
      return r;
}
function h$(n, { upTo: o }) {
  if (getComputedStyle(n).visibility === "hidden")
    return !0;
  for (; n; ) {
    if (o !== void 0 && n === o)
      return !1;
    if (getComputedStyle(n).display === "none")
      return !0;
    n = n.parentElement;
  }
  return !1;
}
function p$(n) {
  return n instanceof HTMLInputElement && "select" in n;
}
function qo(n, { select: o = !1 } = {}) {
  if (n && n.focus) {
    const r = document.activeElement;
    n.focus({
      preventScroll: !0
    }), n !== r && p$(n) && o && n.select();
  }
}
const zw = g$();
function g$() {
  let n = [];
  return {
    add(o) {
      const r = n[0];
      o !== r && (r == null || r.pause()), n = Hw(n, o), n.unshift(o);
    },
    remove(o) {
      var r;
      n = Hw(n, o), (r = n[0]) === null || r === void 0 || r.resume();
    }
  };
}
function Hw(n, o) {
  const r = [
    ...n
  ], s = r.indexOf(o);
  return s !== -1 && r.splice(s, 1), r;
}
function v$(n) {
  return n.filter(
    (o) => o.tagName !== "A"
  );
}
const m$ = ["top", "right", "bottom", "left"], Jo = Math.min, ir = Math.max, Cu = Math.round, lu = Math.floor, Qo = (n) => ({
  x: n,
  y: n
}), w$ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, b$ = {
  start: "end",
  end: "start"
};
function h1(n, o, r) {
  return ir(n, Jo(o, r));
}
function Lo(n, o) {
  return typeof n == "function" ? n(o) : n;
}
function Mo(n) {
  return n.split("-")[0];
}
function Ws(n) {
  return n.split("-")[1];
}
function F1(n) {
  return n === "x" ? "y" : "x";
}
function k1(n) {
  return n === "y" ? "height" : "width";
}
function Bs(n) {
  return ["top", "bottom"].includes(Mo(n)) ? "y" : "x";
}
function W1(n) {
  return F1(Bs(n));
}
function x$(n, o, r) {
  r === void 0 && (r = !1);
  const s = Ws(n), c = W1(n), l = k1(c);
  let u = c === "x" ? s === (r ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return o.reference[l] > o.floating[l] && (u = Nu(u)), [u, Nu(u)];
}
function y$(n) {
  const o = Nu(n);
  return [p1(n), o, p1(o)];
}
function p1(n) {
  return n.replace(/start|end/g, (o) => b$[o]);
}
function C$(n, o, r) {
  const s = ["left", "right"], c = ["right", "left"], l = ["top", "bottom"], u = ["bottom", "top"];
  switch (n) {
    case "top":
    case "bottom":
      return r ? o ? c : s : o ? s : c;
    case "left":
    case "right":
      return o ? l : u;
    default:
      return [];
  }
}
function N$(n, o, r, s) {
  const c = Ws(n);
  let l = C$(Mo(n), r === "start", s);
  return c && (l = l.map((u) => u + "-" + c), o && (l = l.concat(l.map(p1)))), l;
}
function Nu(n) {
  return n.replace(/left|right|bottom|top/g, (o) => w$[o]);
}
function _$(n) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...n
  };
}
function Mx(n) {
  return typeof n != "number" ? _$(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function _u(n) {
  return {
    ...n,
    top: n.y,
    left: n.x,
    right: n.x + n.width,
    bottom: n.y + n.height
  };
}
function Gw(n, o, r) {
  let {
    reference: s,
    floating: c
  } = n;
  const l = Bs(o), u = W1(o), f = k1(u), h = Mo(o), v = l === "y", b = s.x + s.width / 2 - c.width / 2, m = s.y + s.height / 2 - c.height / 2, C = s[f] / 2 - c[f] / 2;
  let y;
  switch (h) {
    case "top":
      y = {
        x: b,
        y: s.y - c.height
      };
      break;
    case "bottom":
      y = {
        x: b,
        y: s.y + s.height
      };
      break;
    case "right":
      y = {
        x: s.x + s.width,
        y: m
      };
      break;
    case "left":
      y = {
        x: s.x - c.width,
        y: m
      };
      break;
    default:
      y = {
        x: s.x,
        y: s.y
      };
  }
  switch (Ws(o)) {
    case "start":
      y[u] -= C * (r && v ? -1 : 1);
      break;
    case "end":
      y[u] += C * (r && v ? -1 : 1);
      break;
  }
  return y;
}
const $$ = async (n, o, r) => {
  const {
    placement: s = "bottom",
    strategy: c = "absolute",
    middleware: l = [],
    platform: u
  } = r, f = l.filter(Boolean), h = await (u.isRTL == null ? void 0 : u.isRTL(o));
  let v = await u.getElementRects({
    reference: n,
    floating: o,
    strategy: c
  }), {
    x: b,
    y: m
  } = Gw(v, s, h), C = s, y = {}, N = 0;
  for (let w = 0; w < f.length; w++) {
    const {
      name: _,
      fn: $
    } = f[w], {
      x: R,
      y: O,
      data: P,
      reset: I
    } = await $({
      x: b,
      y: m,
      initialPlacement: s,
      placement: C,
      strategy: c,
      middlewareData: y,
      rects: v,
      platform: u,
      elements: {
        reference: n,
        floating: o
      }
    });
    if (b = R ?? b, m = O ?? m, y = {
      ...y,
      [_]: {
        ...y[_],
        ...P
      }
    }, I && N <= 50) {
      N++, typeof I == "object" && (I.placement && (C = I.placement), I.rects && (v = I.rects === !0 ? await u.getElementRects({
        reference: n,
        floating: o,
        strategy: c
      }) : I.rects), {
        x: b,
        y: m
      } = Gw(v, C, h)), w = -1;
      continue;
    }
  }
  return {
    x: b,
    y: m,
    placement: C,
    strategy: c,
    middlewareData: y
  };
};
async function Il(n, o) {
  var r;
  o === void 0 && (o = {});
  const {
    x: s,
    y: c,
    platform: l,
    rects: u,
    elements: f,
    strategy: h
  } = n, {
    boundary: v = "clippingAncestors",
    rootBoundary: b = "viewport",
    elementContext: m = "floating",
    altBoundary: C = !1,
    padding: y = 0
  } = Lo(o, n), N = Mx(y), _ = f[C ? m === "floating" ? "reference" : "floating" : m], $ = _u(await l.getClippingRect({
    element: (r = await (l.isElement == null ? void 0 : l.isElement(_))) == null || r ? _ : _.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(f.floating)),
    boundary: v,
    rootBoundary: b,
    strategy: h
  })), R = m === "floating" ? {
    ...u.floating,
    x: s,
    y: c
  } : u.reference, O = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(f.floating)), P = await (l.isElement == null ? void 0 : l.isElement(O)) ? await (l.getScale == null ? void 0 : l.getScale(O)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, I = _u(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: R,
    offsetParent: O,
    strategy: h
  }) : R);
  return {
    top: ($.top - I.top + N.top) / P.y,
    bottom: (I.bottom - $.bottom + N.bottom) / P.y,
    left: ($.left - I.left + N.left) / P.x,
    right: (I.right - $.right + N.right) / P.x
  };
}
const Kw = (n) => ({
  name: "arrow",
  options: n,
  async fn(o) {
    const {
      x: r,
      y: s,
      placement: c,
      rects: l,
      platform: u,
      elements: f
    } = o, {
      element: h,
      padding: v = 0
    } = Lo(n, o) || {};
    if (h == null)
      return {};
    const b = Mx(v), m = {
      x: r,
      y: s
    }, C = W1(c), y = k1(C), N = await u.getDimensions(h), w = C === "y", _ = w ? "top" : "left", $ = w ? "bottom" : "right", R = w ? "clientHeight" : "clientWidth", O = l.reference[y] + l.reference[C] - m[C] - l.floating[y], P = m[C] - l.reference[C], I = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(h));
    let M = I ? I[R] : 0;
    (!M || !await (u.isElement == null ? void 0 : u.isElement(I))) && (M = f.floating[R] || l.floating[y]);
    const W = O / 2 - P / 2, U = M / 2 - N[y] / 2 - 1, G = Jo(b[_], U), Z = Jo(b[$], U), ne = G, oe = M - N[y] - Z, ye = M / 2 - N[y] / 2 + W, ee = h1(ne, ye, oe), ve = Ws(c) != null && ye != ee && l.reference[y] / 2 - (ye < ne ? G : Z) - N[y] / 2 < 0 ? ye < ne ? ne - ye : oe - ye : 0;
    return {
      [C]: m[C] - ve,
      data: {
        [C]: ee,
        centerOffset: ye - ee + ve
      }
    };
  }
}), E$ = function(n) {
  return n === void 0 && (n = {}), {
    name: "flip",
    options: n,
    async fn(o) {
      var r;
      const {
        placement: s,
        middlewareData: c,
        rects: l,
        initialPlacement: u,
        platform: f,
        elements: h
      } = o, {
        mainAxis: v = !0,
        crossAxis: b = !0,
        fallbackPlacements: m,
        fallbackStrategy: C = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: N = !0,
        ...w
      } = Lo(n, o), _ = Mo(s), $ = Mo(u) === u, R = await (f.isRTL == null ? void 0 : f.isRTL(h.floating)), O = m || ($ || !N ? [Nu(u)] : y$(u));
      !m && y !== "none" && O.push(...N$(u, N, y, R));
      const P = [u, ...O], I = await Il(o, w), M = [];
      let W = ((r = c.flip) == null ? void 0 : r.overflows) || [];
      if (v && M.push(I[_]), b) {
        const ne = x$(s, l, R);
        M.push(I[ne[0]], I[ne[1]]);
      }
      if (W = [...W, {
        placement: s,
        overflows: M
      }], !M.every((ne) => ne <= 0)) {
        var U, G;
        const ne = (((U = c.flip) == null ? void 0 : U.index) || 0) + 1, oe = P[ne];
        if (oe)
          return {
            data: {
              index: ne,
              overflows: W
            },
            reset: {
              placement: oe
            }
          };
        let ye = (G = W.filter((ee) => ee.overflows[0] <= 0).sort((ee, me) => ee.overflows[1] - me.overflows[1])[0]) == null ? void 0 : G.placement;
        if (!ye)
          switch (C) {
            case "bestFit": {
              var Z;
              const ee = (Z = W.map((me) => [me.placement, me.overflows.filter((ve) => ve > 0).reduce((ve, De) => ve + De, 0)]).sort((me, ve) => me[1] - ve[1])[0]) == null ? void 0 : Z[0];
              ee && (ye = ee);
              break;
            }
            case "initialPlacement":
              ye = u;
              break;
          }
        if (s !== ye)
          return {
            reset: {
              placement: ye
            }
          };
      }
      return {};
    }
  };
};
function Vw(n, o) {
  return {
    top: n.top - o.height,
    right: n.right - o.width,
    bottom: n.bottom - o.height,
    left: n.left - o.width
  };
}
function qw(n) {
  return m$.some((o) => n[o] >= 0);
}
const S$ = function(n) {
  return n === void 0 && (n = {}), {
    name: "hide",
    options: n,
    async fn(o) {
      const {
        rects: r
      } = o, {
        strategy: s = "referenceHidden",
        ...c
      } = Lo(n, o);
      switch (s) {
        case "referenceHidden": {
          const l = await Il(o, {
            ...c,
            elementContext: "reference"
          }), u = Vw(l, r.reference);
          return {
            data: {
              referenceHiddenOffsets: u,
              referenceHidden: qw(u)
            }
          };
        }
        case "escaped": {
          const l = await Il(o, {
            ...c,
            altBoundary: !0
          }), u = Vw(l, r.floating);
          return {
            data: {
              escapedOffsets: u,
              escaped: qw(u)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function D$(n, o) {
  const {
    placement: r,
    platform: s,
    elements: c
  } = n, l = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), u = Mo(r), f = Ws(r), h = Bs(r) === "y", v = ["left", "top"].includes(u) ? -1 : 1, b = l && h ? -1 : 1, m = Lo(o, n);
  let {
    mainAxis: C,
    crossAxis: y,
    alignmentAxis: N
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...m
  };
  return f && typeof N == "number" && (y = f === "end" ? N * -1 : N), h ? {
    x: y * b,
    y: C * v
  } : {
    x: C * v,
    y: y * b
  };
}
const O$ = function(n) {
  return n === void 0 && (n = 0), {
    name: "offset",
    options: n,
    async fn(o) {
      const {
        x: r,
        y: s
      } = o, c = await D$(o, n);
      return {
        x: r + c.x,
        y: s + c.y,
        data: c
      };
    }
  };
}, R$ = function(n) {
  return n === void 0 && (n = {}), {
    name: "shift",
    options: n,
    async fn(o) {
      const {
        x: r,
        y: s,
        placement: c
      } = o, {
        mainAxis: l = !0,
        crossAxis: u = !1,
        limiter: f = {
          fn: (_) => {
            let {
              x: $,
              y: R
            } = _;
            return {
              x: $,
              y: R
            };
          }
        },
        ...h
      } = Lo(n, o), v = {
        x: r,
        y: s
      }, b = await Il(o, h), m = Bs(Mo(c)), C = F1(m);
      let y = v[C], N = v[m];
      if (l) {
        const _ = C === "y" ? "top" : "left", $ = C === "y" ? "bottom" : "right", R = y + b[_], O = y - b[$];
        y = h1(R, y, O);
      }
      if (u) {
        const _ = m === "y" ? "top" : "left", $ = m === "y" ? "bottom" : "right", R = N + b[_], O = N - b[$];
        N = h1(R, N, O);
      }
      const w = f.fn({
        ...o,
        [C]: y,
        [m]: N
      });
      return {
        ...w,
        data: {
          x: w.x - r,
          y: w.y - s
        }
      };
    }
  };
}, P$ = function(n) {
  return n === void 0 && (n = {}), {
    options: n,
    fn(o) {
      const {
        x: r,
        y: s,
        placement: c,
        rects: l,
        middlewareData: u
      } = o, {
        offset: f = 0,
        mainAxis: h = !0,
        crossAxis: v = !0
      } = Lo(n, o), b = {
        x: r,
        y: s
      }, m = Bs(c), C = F1(m);
      let y = b[C], N = b[m];
      const w = Lo(f, o), _ = typeof w == "number" ? {
        mainAxis: w,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...w
      };
      if (h) {
        const O = C === "y" ? "height" : "width", P = l.reference[C] - l.floating[O] + _.mainAxis, I = l.reference[C] + l.reference[O] - _.mainAxis;
        y < P ? y = P : y > I && (y = I);
      }
      if (v) {
        var $, R;
        const O = C === "y" ? "width" : "height", P = ["top", "left"].includes(Mo(c)), I = l.reference[m] - l.floating[O] + (P && (($ = u.offset) == null ? void 0 : $[m]) || 0) + (P ? 0 : _.crossAxis), M = l.reference[m] + l.reference[O] + (P ? 0 : ((R = u.offset) == null ? void 0 : R[m]) || 0) - (P ? _.crossAxis : 0);
        N < I ? N = I : N > M && (N = M);
      }
      return {
        [C]: y,
        [m]: N
      };
    }
  };
}, A$ = function(n) {
  return n === void 0 && (n = {}), {
    name: "size",
    options: n,
    async fn(o) {
      const {
        placement: r,
        rects: s,
        platform: c,
        elements: l
      } = o, {
        apply: u = () => {
        },
        ...f
      } = Lo(n, o), h = await Il(o, f), v = Mo(r), b = Ws(r), m = Bs(r) === "y", {
        width: C,
        height: y
      } = s.floating;
      let N, w;
      v === "top" || v === "bottom" ? (N = v, w = b === (await (c.isRTL == null ? void 0 : c.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (w = v, N = b === "end" ? "top" : "bottom");
      const _ = y - h[N], $ = C - h[w], R = !o.middlewareData.shift;
      let O = _, P = $;
      if (m) {
        const M = C - h.left - h.right;
        P = b || R ? Jo($, M) : M;
      } else {
        const M = y - h.top - h.bottom;
        O = b || R ? Jo(_, M) : M;
      }
      if (R && !b) {
        const M = ir(h.left, 0), W = ir(h.right, 0), U = ir(h.top, 0), G = ir(h.bottom, 0);
        m ? P = C - 2 * (M !== 0 || W !== 0 ? M + W : ir(h.left, h.right)) : O = y - 2 * (U !== 0 || G !== 0 ? U + G : ir(h.top, h.bottom));
      }
      await u({
        ...o,
        availableWidth: P,
        availableHeight: O
      });
      const I = await c.getDimensions(l.floating);
      return C !== I.width || y !== I.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function jo(n) {
  return Fx(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function sr(n) {
  var o;
  return (n == null || (o = n.ownerDocument) == null ? void 0 : o.defaultView) || window;
}
function Bo(n) {
  var o;
  return (o = (Fx(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : o.documentElement;
}
function Fx(n) {
  return n instanceof Node || n instanceof sr(n).Node;
}
function Fo(n) {
  return n instanceof Element || n instanceof sr(n).Element;
}
function Ur(n) {
  return n instanceof HTMLElement || n instanceof sr(n).HTMLElement;
}
function Yw(n) {
  return typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof sr(n).ShadowRoot;
}
function ql(n) {
  const {
    overflow: o,
    overflowX: r,
    overflowY: s,
    display: c
  } = gr(n);
  return /auto|scroll|overlay|hidden|clip/.test(o + s + r) && !["inline", "contents"].includes(c);
}
function T$(n) {
  return ["table", "td", "th"].includes(jo(n));
}
function B1(n) {
  const o = U1(), r = gr(n);
  return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !o && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !o && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((s) => (r.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (r.contain || "").includes(s));
}
function I$(n) {
  let o = As(n);
  for (; Ur(o) && !Zu(o); ) {
    if (B1(o))
      return o;
    o = As(o);
  }
  return null;
}
function U1() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Zu(n) {
  return ["html", "body", "#document"].includes(jo(n));
}
function gr(n) {
  return sr(n).getComputedStyle(n);
}
function Xu(n) {
  return Fo(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.pageXOffset,
    scrollTop: n.pageYOffset
  };
}
function As(n) {
  if (jo(n) === "html")
    return n;
  const o = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    Yw(n) && n.host || // Fallback.
    Bo(n)
  );
  return Yw(o) ? o.host : o;
}
function kx(n) {
  const o = As(n);
  return Zu(o) ? n.ownerDocument ? n.ownerDocument.body : n.body : Ur(o) && ql(o) ? o : kx(o);
}
function $u(n, o) {
  var r;
  o === void 0 && (o = []);
  const s = kx(n), c = s === ((r = n.ownerDocument) == null ? void 0 : r.body), l = sr(s);
  return c ? o.concat(l, l.visualViewport || [], ql(s) ? s : []) : o.concat(s, $u(s));
}
function Wx(n) {
  const o = gr(n);
  let r = parseFloat(o.width) || 0, s = parseFloat(o.height) || 0;
  const c = Ur(n), l = c ? n.offsetWidth : r, u = c ? n.offsetHeight : s, f = Cu(r) !== l || Cu(s) !== u;
  return f && (r = l, s = u), {
    width: r,
    height: s,
    $: f
  };
}
function z1(n) {
  return Fo(n) ? n : n.contextElement;
}
function Ds(n) {
  const o = z1(n);
  if (!Ur(o))
    return Qo(1);
  const r = o.getBoundingClientRect(), {
    width: s,
    height: c,
    $: l
  } = Wx(o);
  let u = (l ? Cu(r.width) : r.width) / s, f = (l ? Cu(r.height) : r.height) / c;
  return (!u || !Number.isFinite(u)) && (u = 1), (!f || !Number.isFinite(f)) && (f = 1), {
    x: u,
    y: f
  };
}
const L$ = /* @__PURE__ */ Qo(0);
function Bx(n) {
  const o = sr(n);
  return !U1() || !o.visualViewport ? L$ : {
    x: o.visualViewport.offsetLeft,
    y: o.visualViewport.offsetTop
  };
}
function M$(n, o, r) {
  return o === void 0 && (o = !1), !r || o && r !== sr(n) ? !1 : o;
}
function gs(n, o, r, s) {
  o === void 0 && (o = !1), r === void 0 && (r = !1);
  const c = n.getBoundingClientRect(), l = z1(n);
  let u = Qo(1);
  o && (s ? Fo(s) && (u = Ds(s)) : u = Ds(n));
  const f = M$(l, r, s) ? Bx(l) : Qo(0);
  let h = (c.left + f.x) / u.x, v = (c.top + f.y) / u.y, b = c.width / u.x, m = c.height / u.y;
  if (l) {
    const C = sr(l), y = s && Fo(s) ? sr(s) : s;
    let N = C.frameElement;
    for (; N && s && y !== C; ) {
      const w = Ds(N), _ = N.getBoundingClientRect(), $ = gr(N), R = _.left + (N.clientLeft + parseFloat($.paddingLeft)) * w.x, O = _.top + (N.clientTop + parseFloat($.paddingTop)) * w.y;
      h *= w.x, v *= w.y, b *= w.x, m *= w.y, h += R, v += O, N = sr(N).frameElement;
    }
  }
  return _u({
    width: b,
    height: m,
    x: h,
    y: v
  });
}
function F$(n) {
  let {
    rect: o,
    offsetParent: r,
    strategy: s
  } = n;
  const c = Ur(r), l = Bo(r);
  if (r === l)
    return o;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = Qo(1);
  const h = Qo(0);
  if ((c || !c && s !== "fixed") && ((jo(r) !== "body" || ql(l)) && (u = Xu(r)), Ur(r))) {
    const v = gs(r);
    f = Ds(r), h.x = v.x + r.clientLeft, h.y = v.y + r.clientTop;
  }
  return {
    width: o.width * f.x,
    height: o.height * f.y,
    x: o.x * f.x - u.scrollLeft * f.x + h.x,
    y: o.y * f.y - u.scrollTop * f.y + h.y
  };
}
function k$(n) {
  return Array.from(n.getClientRects());
}
function Ux(n) {
  return gs(Bo(n)).left + Xu(n).scrollLeft;
}
function W$(n) {
  const o = Bo(n), r = Xu(n), s = n.ownerDocument.body, c = ir(o.scrollWidth, o.clientWidth, s.scrollWidth, s.clientWidth), l = ir(o.scrollHeight, o.clientHeight, s.scrollHeight, s.clientHeight);
  let u = -r.scrollLeft + Ux(n);
  const f = -r.scrollTop;
  return gr(s).direction === "rtl" && (u += ir(o.clientWidth, s.clientWidth) - c), {
    width: c,
    height: l,
    x: u,
    y: f
  };
}
function B$(n, o) {
  const r = sr(n), s = Bo(n), c = r.visualViewport;
  let l = s.clientWidth, u = s.clientHeight, f = 0, h = 0;
  if (c) {
    l = c.width, u = c.height;
    const v = U1();
    (!v || v && o === "fixed") && (f = c.offsetLeft, h = c.offsetTop);
  }
  return {
    width: l,
    height: u,
    x: f,
    y: h
  };
}
function U$(n, o) {
  const r = gs(n, !0, o === "fixed"), s = r.top + n.clientTop, c = r.left + n.clientLeft, l = Ur(n) ? Ds(n) : Qo(1), u = n.clientWidth * l.x, f = n.clientHeight * l.y, h = c * l.x, v = s * l.y;
  return {
    width: u,
    height: f,
    x: h,
    y: v
  };
}
function Zw(n, o, r) {
  let s;
  if (o === "viewport")
    s = B$(n, r);
  else if (o === "document")
    s = W$(Bo(n));
  else if (Fo(o))
    s = U$(o, r);
  else {
    const c = Bx(n);
    s = {
      ...o,
      x: o.x - c.x,
      y: o.y - c.y
    };
  }
  return _u(s);
}
function zx(n, o) {
  const r = As(n);
  return r === o || !Fo(r) || Zu(r) ? !1 : gr(r).position === "fixed" || zx(r, o);
}
function z$(n, o) {
  const r = o.get(n);
  if (r)
    return r;
  let s = $u(n).filter((f) => Fo(f) && jo(f) !== "body"), c = null;
  const l = gr(n).position === "fixed";
  let u = l ? As(n) : n;
  for (; Fo(u) && !Zu(u); ) {
    const f = gr(u), h = B1(u);
    !h && f.position === "fixed" && (c = null), (l ? !h && !c : !h && f.position === "static" && !!c && ["absolute", "fixed"].includes(c.position) || ql(u) && !h && zx(n, u)) ? s = s.filter((b) => b !== u) : c = f, u = As(u);
  }
  return o.set(n, s), s;
}
function H$(n) {
  let {
    element: o,
    boundary: r,
    rootBoundary: s,
    strategy: c
  } = n;
  const u = [...r === "clippingAncestors" ? z$(o, this._c) : [].concat(r), s], f = u[0], h = u.reduce((v, b) => {
    const m = Zw(o, b, c);
    return v.top = ir(m.top, v.top), v.right = Jo(m.right, v.right), v.bottom = Jo(m.bottom, v.bottom), v.left = ir(m.left, v.left), v;
  }, Zw(o, f, c));
  return {
    width: h.right - h.left,
    height: h.bottom - h.top,
    x: h.left,
    y: h.top
  };
}
function G$(n) {
  return Wx(n);
}
function K$(n, o, r) {
  const s = Ur(o), c = Bo(o), l = r === "fixed", u = gs(n, !0, l, o);
  let f = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const h = Qo(0);
  if (s || !s && !l)
    if ((jo(o) !== "body" || ql(c)) && (f = Xu(o)), s) {
      const v = gs(o, !0, l, o);
      h.x = v.x + o.clientLeft, h.y = v.y + o.clientTop;
    } else
      c && (h.x = Ux(c));
  return {
    x: u.left + f.scrollLeft - h.x,
    y: u.top + f.scrollTop - h.y,
    width: u.width,
    height: u.height
  };
}
function Xw(n, o) {
  return !Ur(n) || gr(n).position === "fixed" ? null : o ? o(n) : n.offsetParent;
}
function Hx(n, o) {
  const r = sr(n);
  if (!Ur(n))
    return r;
  let s = Xw(n, o);
  for (; s && T$(s) && gr(s).position === "static"; )
    s = Xw(s, o);
  return s && (jo(s) === "html" || jo(s) === "body" && gr(s).position === "static" && !B1(s)) ? r : s || I$(n) || r;
}
const V$ = async function(n) {
  let {
    reference: o,
    floating: r,
    strategy: s
  } = n;
  const c = this.getOffsetParent || Hx, l = this.getDimensions;
  return {
    reference: K$(o, await c(r), s),
    floating: {
      x: 0,
      y: 0,
      ...await l(r)
    }
  };
};
function q$(n) {
  return gr(n).direction === "rtl";
}
const Y$ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: F$,
  getDocumentElement: Bo,
  getClippingRect: H$,
  getOffsetParent: Hx,
  getElementRects: V$,
  getClientRects: k$,
  getDimensions: G$,
  getScale: Ds,
  isElement: Fo,
  isRTL: q$
};
function Z$(n, o) {
  let r = null, s;
  const c = Bo(n);
  function l() {
    clearTimeout(s), r && r.disconnect(), r = null;
  }
  function u(f, h) {
    f === void 0 && (f = !1), h === void 0 && (h = 1), l();
    const {
      left: v,
      top: b,
      width: m,
      height: C
    } = n.getBoundingClientRect();
    if (f || o(), !m || !C)
      return;
    const y = lu(b), N = lu(c.clientWidth - (v + m)), w = lu(c.clientHeight - (b + C)), _ = lu(v), R = {
      rootMargin: -y + "px " + -N + "px " + -w + "px " + -_ + "px",
      threshold: ir(0, Jo(1, h)) || 1
    };
    let O = !0;
    function P(I) {
      const M = I[0].intersectionRatio;
      if (M !== h) {
        if (!O)
          return u();
        M ? u(!1, M) : s = setTimeout(() => {
          u(!1, 1e-7);
        }, 100);
      }
      O = !1;
    }
    try {
      r = new IntersectionObserver(P, {
        ...R,
        // Handle <iframe>s
        root: c.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(P, R);
    }
    r.observe(n);
  }
  return u(!0), l;
}
function X$(n, o, r, s) {
  s === void 0 && (s = {});
  const {
    ancestorScroll: c = !0,
    ancestorResize: l = !0,
    elementResize: u = typeof ResizeObserver == "function",
    layoutShift: f = typeof IntersectionObserver == "function",
    animationFrame: h = !1
  } = s, v = z1(n), b = c || l ? [...v ? $u(v) : [], ...$u(o)] : [];
  b.forEach(($) => {
    c && $.addEventListener("scroll", r, {
      passive: !0
    }), l && $.addEventListener("resize", r);
  });
  const m = v && f ? Z$(v, r) : null;
  let C = -1, y = null;
  u && (y = new ResizeObserver(($) => {
    let [R] = $;
    R && R.target === v && y && (y.unobserve(o), cancelAnimationFrame(C), C = requestAnimationFrame(() => {
      y && y.observe(o);
    })), r();
  }), v && !h && y.observe(v), y.observe(o));
  let N, w = h ? gs(n) : null;
  h && _();
  function _() {
    const $ = gs(n);
    w && ($.x !== w.x || $.y !== w.y || $.width !== w.width || $.height !== w.height) && r(), w = $, N = requestAnimationFrame(_);
  }
  return r(), () => {
    b.forEach(($) => {
      c && $.removeEventListener("scroll", r), l && $.removeEventListener("resize", r);
    }), m && m(), y && y.disconnect(), y = null, h && cancelAnimationFrame(N);
  };
}
const J$ = (n, o, r) => {
  const s = /* @__PURE__ */ new Map(), c = {
    platform: Y$,
    ...r
  }, l = {
    ...c.platform,
    _c: s
  };
  return $$(n, o, {
    ...c,
    platform: l
  });
}, Q$ = (n) => {
  function o(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: n,
    fn(r) {
      const {
        element: s,
        padding: c
      } = typeof n == "function" ? n(r) : n;
      return s && o(s) ? s.current != null ? Kw({
        element: s.current,
        padding: c
      }).fn(r) : {} : s ? Kw({
        element: s,
        padding: c
      }).fn(r) : {};
    }
  };
};
var vu = typeof document < "u" ? Iu : be;
function Eu(n, o) {
  if (n === o)
    return !0;
  if (typeof n != typeof o)
    return !1;
  if (typeof n == "function" && n.toString() === o.toString())
    return !0;
  let r, s, c;
  if (n && o && typeof n == "object") {
    if (Array.isArray(n)) {
      if (r = n.length, r != o.length)
        return !1;
      for (s = r; s-- !== 0; )
        if (!Eu(n[s], o[s]))
          return !1;
      return !0;
    }
    if (c = Object.keys(n), r = c.length, r !== Object.keys(o).length)
      return !1;
    for (s = r; s-- !== 0; )
      if (!{}.hasOwnProperty.call(o, c[s]))
        return !1;
    for (s = r; s-- !== 0; ) {
      const l = c[s];
      if (!(l === "_owner" && n.$$typeof) && !Eu(n[l], o[l]))
        return !1;
    }
    return !0;
  }
  return n !== n && o !== o;
}
function Gx(n) {
  return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Jw(n, o) {
  const r = Gx(n);
  return Math.round(o * r) / r;
}
function Qw(n) {
  const o = z.useRef(n);
  return vu(() => {
    o.current = n;
  }), o;
}
function j$(n) {
  n === void 0 && (n = {});
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: s = [],
    platform: c,
    elements: {
      reference: l,
      floating: u
    } = {},
    transform: f = !0,
    whileElementsMounted: h,
    open: v
  } = n, [b, m] = z.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: o,
    middlewareData: {},
    isPositioned: !1
  }), [C, y] = z.useState(s);
  Eu(C, s) || y(s);
  const [N, w] = z.useState(null), [_, $] = z.useState(null), R = z.useCallback((ve) => {
    ve != M.current && (M.current = ve, w(ve));
  }, [w]), O = z.useCallback((ve) => {
    ve !== W.current && (W.current = ve, $(ve));
  }, [$]), P = l || N, I = u || _, M = z.useRef(null), W = z.useRef(null), U = z.useRef(b), G = Qw(h), Z = Qw(c), ne = z.useCallback(() => {
    if (!M.current || !W.current)
      return;
    const ve = {
      placement: o,
      strategy: r,
      middleware: C
    };
    Z.current && (ve.platform = Z.current), J$(M.current, W.current, ve).then((De) => {
      const we = {
        ...De,
        isPositioned: !0
      };
      oe.current && !Eu(U.current, we) && (U.current = we, Fy.flushSync(() => {
        m(we);
      }));
    });
  }, [C, o, r, Z]);
  vu(() => {
    v === !1 && U.current.isPositioned && (U.current.isPositioned = !1, m((ve) => ({
      ...ve,
      isPositioned: !1
    })));
  }, [v]);
  const oe = z.useRef(!1);
  vu(() => (oe.current = !0, () => {
    oe.current = !1;
  }), []), vu(() => {
    if (P && (M.current = P), I && (W.current = I), P && I) {
      if (G.current)
        return G.current(P, I, ne);
      ne();
    }
  }, [P, I, ne, G]);
  const ye = z.useMemo(() => ({
    reference: M,
    floating: W,
    setReference: R,
    setFloating: O
  }), [R, O]), ee = z.useMemo(() => ({
    reference: P,
    floating: I
  }), [P, I]), me = z.useMemo(() => {
    const ve = {
      position: r,
      left: 0,
      top: 0
    };
    if (!ee.floating)
      return ve;
    const De = Jw(ee.floating, b.x), we = Jw(ee.floating, b.y);
    return f ? {
      ...ve,
      transform: "translate(" + De + "px, " + we + "px)",
      ...Gx(ee.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: De,
      top: we
    };
  }, [r, f, ee.floating, b.x, b.y]);
  return z.useMemo(() => ({
    ...b,
    update: ne,
    refs: ye,
    elements: ee,
    floatingStyles: me
  }), [b, ne, ye, ee, me]);
}
function Kx(n) {
  const [o, r] = Te(void 0);
  return Rs(() => {
    if (n) {
      r({
        width: n.offsetWidth,
        height: n.offsetHeight
      });
      const s = new ResizeObserver((c) => {
        if (!Array.isArray(c) || !c.length)
          return;
        const l = c[0];
        let u, f;
        if ("borderBoxSize" in l) {
          const h = l.borderBoxSize, v = Array.isArray(h) ? h[0] : h;
          u = v.inlineSize, f = v.blockSize;
        } else
          u = n.offsetWidth, f = n.offsetHeight;
        r({
          width: u,
          height: f
        });
      });
      return s.observe(n, {
        box: "border-box"
      }), () => s.unobserve(n);
    } else
      r(void 0);
  }, [
    n
  ]), o;
}
const Vx = "Popper", [qx, Yx] = kl(Vx), [eE, Zx] = qx(Vx), tE = (n) => {
  const { __scopePopper: o, children: r } = n, [s, c] = Te(null);
  return /* @__PURE__ */ q(eE, {
    scope: o,
    anchor: s,
    onAnchorChange: c
  }, r);
}, nE = "PopperAnchor", rE = /* @__PURE__ */ _e((n, o) => {
  const { __scopePopper: r, virtualRef: s, ...c } = n, l = Zx(nE, r), u = de(null), f = un(o, u);
  return be(() => {
    l.onAnchorChange((s == null ? void 0 : s.current) || u.current);
  }), s ? null : /* @__PURE__ */ q(En.div, Oe({}, c, {
    ref: f
  }));
}), Xx = "PopperContent", [oE, q3] = qx(Xx), iE = /* @__PURE__ */ _e((n, o) => {
  var r, s, c, l, u, f, h, v;
  const { __scopePopper: b, side: m = "bottom", sideOffset: C = 0, align: y = "center", alignOffset: N = 0, arrowPadding: w = 0, avoidCollisions: _ = !0, collisionBoundary: $ = [], collisionPadding: R = 0, sticky: O = "partial", hideWhenDetached: P = !1, updatePositionStrategy: I = "optimized", onPlaced: M, ...W } = n, U = Zx(Xx, b), [G, Z] = Te(null), ne = un(
    o,
    (ze) => Z(ze)
  ), [oe, ye] = Te(null), ee = Kx(oe), me = (r = ee == null ? void 0 : ee.width) !== null && r !== void 0 ? r : 0, ve = (s = ee == null ? void 0 : ee.height) !== null && s !== void 0 ? s : 0, De = m + (y !== "center" ? "-" + y : ""), we = typeof R == "number" ? R : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...R
  }, Y = Array.isArray($) ? $ : [
    $
  ], le = Y.length > 0, ae = {
    padding: we,
    boundary: Y.filter(sE),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: le
  }, { refs: he, floatingStyles: $e, placement: je, isPositioned: Ue, middlewareData: Le } = j$({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: De,
    whileElementsMounted: (...ze) => X$(...ze, {
      animationFrame: I === "always"
    }),
    elements: {
      reference: U.anchor
    },
    middleware: [
      O$({
        mainAxis: C + ve,
        alignmentAxis: N
      }),
      _ && R$({
        mainAxis: !0,
        crossAxis: !1,
        limiter: O === "partial" ? P$() : void 0,
        ...ae
      }),
      _ && E$({
        ...ae
      }),
      A$({
        ...ae,
        apply: ({ elements: ze, rects: gn, availableWidth: bt, availableHeight: Fn }) => {
          const { width: ar, height: Ot } = gn.reference, Xe = ze.floating.style;
          Xe.setProperty("--radix-popper-available-width", `${bt}px`), Xe.setProperty("--radix-popper-available-height", `${Fn}px`), Xe.setProperty("--radix-popper-anchor-width", `${ar}px`), Xe.setProperty("--radix-popper-anchor-height", `${Ot}px`);
        }
      }),
      oe && Q$({
        element: oe,
        padding: w
      }),
      aE({
        arrowWidth: me,
        arrowHeight: ve
      }),
      P && S$({
        strategy: "referenceHidden",
        ...ae
      })
    ]
  }), [lt, Me] = Jx(je), Be = pr(M);
  Rs(() => {
    Ue && (Be == null || Be());
  }, [
    Ue,
    Be
  ]);
  const ie = (c = Le.arrow) === null || c === void 0 ? void 0 : c.x, We = (l = Le.arrow) === null || l === void 0 ? void 0 : l.y, rt = ((u = Le.arrow) === null || u === void 0 ? void 0 : u.centerOffset) !== 0, [dn, Ke] = Te();
  return Rs(() => {
    G && Ke(window.getComputedStyle(G).zIndex);
  }, [
    G
  ]), /* @__PURE__ */ q("div", {
    ref: he.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...$e,
      transform: Ue ? $e.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: dn,
      "--radix-popper-transform-origin": [
        (f = Le.transformOrigin) === null || f === void 0 ? void 0 : f.x,
        (h = Le.transformOrigin) === null || h === void 0 ? void 0 : h.y
      ].join(" ")
    },
    dir: n.dir
  }, /* @__PURE__ */ q(oE, {
    scope: b,
    placedSide: lt,
    onArrowChange: ye,
    arrowX: ie,
    arrowY: We,
    shouldHideArrow: rt
  }, /* @__PURE__ */ q(En.div, Oe({
    "data-side": lt,
    "data-align": Me
  }, W, {
    ref: ne,
    style: {
      ...W.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: Ue ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (v = Le.hide) !== null && v !== void 0 && v.referenceHidden ? 0 : void 0
    }
  }))));
});
function sE(n) {
  return n !== null;
}
const aE = (n) => ({
  name: "transformOrigin",
  options: n,
  fn(o) {
    var r, s, c, l, u;
    const { placement: f, rects: h, middlewareData: v } = o, m = ((r = v.arrow) === null || r === void 0 ? void 0 : r.centerOffset) !== 0, C = m ? 0 : n.arrowWidth, y = m ? 0 : n.arrowHeight, [N, w] = Jx(f), _ = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[w], $ = ((s = (c = v.arrow) === null || c === void 0 ? void 0 : c.x) !== null && s !== void 0 ? s : 0) + C / 2, R = ((l = (u = v.arrow) === null || u === void 0 ? void 0 : u.y) !== null && l !== void 0 ? l : 0) + y / 2;
    let O = "", P = "";
    return N === "bottom" ? (O = m ? _ : `${$}px`, P = `${-y}px`) : N === "top" ? (O = m ? _ : `${$}px`, P = `${h.floating.height + y}px`) : N === "right" ? (O = `${-y}px`, P = m ? _ : `${R}px`) : N === "left" && (O = `${h.floating.width + y}px`, P = m ? _ : `${R}px`), {
      data: {
        x: O,
        y: P
      }
    };
  }
});
function Jx(n) {
  const [o, r = "center"] = n.split("-");
  return [
    o,
    r
  ];
}
const cE = tE, lE = rE, uE = iE, dE = /* @__PURE__ */ _e((n, o) => {
  var r;
  const { container: s = globalThis == null || (r = globalThis.document) === null || r === void 0 ? void 0 : r.body, ...c } = n;
  return s ? /* @__PURE__ */ y1.createPortal(/* @__PURE__ */ q(En.div, Oe({}, c, {
    ref: o
  })), s) : null;
}), Qx = "Popover", [jx, Y3] = kl(Qx, [
  Yx
]), H1 = Yx(), [fE, Us] = jx(Qx), hE = (n) => {
  const { __scopePopover: o, children: r, open: s, defaultOpen: c, onOpenChange: l, modal: u = !1 } = n, f = H1(o), h = de(null), [v, b] = Te(!1), [m = !1, C] = $1({
    prop: s,
    defaultProp: c,
    onChange: l
  });
  return /* @__PURE__ */ q(cE, f, /* @__PURE__ */ q(fE, {
    scope: o,
    contentId: gu(),
    triggerRef: h,
    open: m,
    onOpenChange: C,
    onOpenToggle: wt(
      () => C(
        (y) => !y
      ),
      [
        C
      ]
    ),
    hasCustomAnchor: v,
    onCustomAnchorAdd: wt(
      () => b(!0),
      []
    ),
    onCustomAnchorRemove: wt(
      () => b(!1),
      []
    ),
    modal: u
  }, r));
}, pE = "PopoverTrigger", gE = /* @__PURE__ */ _e((n, o) => {
  const { __scopePopover: r, ...s } = n, c = Us(pE, r), l = H1(r), u = un(o, c.triggerRef), f = /* @__PURE__ */ q(En.button, Oe({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": c.open,
    "aria-controls": c.contentId,
    "data-state": ny(c.open)
  }, s, {
    ref: u,
    onClick: Xt(n.onClick, c.onOpenToggle)
  }));
  return c.hasCustomAnchor ? f : /* @__PURE__ */ q(lE, Oe({
    asChild: !0
  }, l), f);
}), ey = "PopoverPortal", [vE, mE] = jx(ey, {
  forceMount: void 0
}), wE = (n) => {
  const { __scopePopover: o, forceMount: r, children: s, container: c } = n, l = Us(ey, o);
  return /* @__PURE__ */ q(vE, {
    scope: o,
    forceMount: r
  }, /* @__PURE__ */ q(Is, {
    present: r || l.open
  }, /* @__PURE__ */ q(dE, {
    asChild: !0,
    container: c
  }, s)));
}, Ll = "PopoverContent", bE = /* @__PURE__ */ _e((n, o) => {
  const r = mE(Ll, n.__scopePopover), { forceMount: s = r.forceMount, ...c } = n, l = Us(Ll, n.__scopePopover);
  return /* @__PURE__ */ q(Is, {
    present: s || l.open
  }, l.modal ? /* @__PURE__ */ q(xE, Oe({}, c, {
    ref: o
  })) : /* @__PURE__ */ q(yE, Oe({}, c, {
    ref: o
  })));
}), xE = /* @__PURE__ */ _e((n, o) => {
  const r = Us(Ll, n.__scopePopover), s = de(null), c = un(o, s), l = de(!1);
  return be(() => {
    const u = s.current;
    if (u)
      return D1(u);
  }, []), /* @__PURE__ */ q(Qb, {
    as: Xo,
    allowPinchZoom: !0
  }, /* @__PURE__ */ q(ty, Oe({}, n, {
    ref: c,
    trapFocus: r.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: Xt(n.onCloseAutoFocus, (u) => {
      var f;
      u.preventDefault(), l.current || (f = r.triggerRef.current) === null || f === void 0 || f.focus();
    }),
    onPointerDownOutside: Xt(n.onPointerDownOutside, (u) => {
      const f = u.detail.originalEvent, h = f.button === 0 && f.ctrlKey === !0, v = f.button === 2 || h;
      l.current = v;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: Xt(
      n.onFocusOutside,
      (u) => u.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), yE = /* @__PURE__ */ _e((n, o) => {
  const r = Us(Ll, n.__scopePopover), s = de(!1), c = de(!1);
  return /* @__PURE__ */ q(ty, Oe({}, n, {
    ref: o,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (l) => {
      var u;
      if ((u = n.onCloseAutoFocus) === null || u === void 0 || u.call(n, l), !l.defaultPrevented) {
        var f;
        s.current || (f = r.triggerRef.current) === null || f === void 0 || f.focus(), l.preventDefault();
      }
      s.current = !1, c.current = !1;
    },
    onInteractOutside: (l) => {
      var u, f;
      (u = n.onInteractOutside) === null || u === void 0 || u.call(n, l), l.defaultPrevented || (s.current = !0, l.detail.originalEvent.type === "pointerdown" && (c.current = !0));
      const h = l.target;
      ((f = r.triggerRef.current) === null || f === void 0 ? void 0 : f.contains(h)) && l.preventDefault(), l.detail.originalEvent.type === "focusin" && c.current && l.preventDefault();
    }
  }));
}), ty = /* @__PURE__ */ _e((n, o) => {
  const { __scopePopover: r, trapFocus: s, onOpenAutoFocus: c, onCloseAutoFocus: l, disableOutsidePointerEvents: u, onEscapeKeyDown: f, onPointerDownOutside: h, onFocusOutside: v, onInteractOutside: b, ...m } = n, C = Us(Ll, r), y = H1(r);
  return Bb(), /* @__PURE__ */ q(u$, {
    asChild: !0,
    loop: !0,
    trapped: s,
    onMountAutoFocus: c,
    onUnmountAutoFocus: l
  }, /* @__PURE__ */ q(a$, {
    asChild: !0,
    disableOutsidePointerEvents: u,
    onInteractOutside: b,
    onEscapeKeyDown: f,
    onPointerDownOutside: h,
    onFocusOutside: v,
    onDismiss: () => C.onOpenChange(!1)
  }, /* @__PURE__ */ q(uE, Oe({
    "data-state": ny(C.open),
    role: "dialog",
    id: C.contentId
  }, y, m, {
    ref: o,
    style: {
      ...m.style,
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }))));
});
function ny(n) {
  return n ? "open" : "closed";
}
const CE = hE, NE = gE, _E = wE, ry = bE, Ju = CE, Qu = NE, Yl = z.forwardRef(({ className: n, align: o = "center", sideOffset: r = 4, ...s }, c) => /* @__PURE__ */ T(_E, { children: /* @__PURE__ */ T(
  ry,
  {
    ref: c,
    align: o,
    sideOffset: r,
    className: Dt(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n
    ),
    ...s
  }
) }));
Yl.displayName = ry.displayName;
const $E = "_inputDiv_1bbzm_3", EE = "_emptyInputDiv_1bbzm_3", zm = {
  inputDiv: $E,
  emptyInputDiv: EE
}, SE = ({
  value: n,
  onChange: o,
  onFocus: r,
  onClick: s,
  onKeyDown: c,
  onKeyUp: l,
  style: u,
  className: f,
  disabled: h,
  autoFocus: v,
  placeholder: b,
  focusChar: m,
  getFocus: C,
  ...y
}) => {
  var I;
  const N = de(null), w = (N == null ? void 0 : N.current) === document.activeElement;
  be(() => {
    v && N.current && (console.log("GOT FOCUS"), N.current.focus());
  }, [v]), be(() => {
    w && N.current && OE(N.current, m || 0);
  }, [m]);
  const _ = () => {
    if (!N.current)
      return;
    const M = DE(N.current), W = N.current.innerText;
    o(W, M);
  }, $ = (M) => {
    N.current && _();
  }, R = (M) => {
    c && c(M), N.current && _();
  }, O = (M) => {
    l && l(M), N.current && _();
  }, P = (I = N.current) != null && I.innerText ? zm.inputDiv : zm.emptyInputDiv;
  return /* @__PURE__ */ T(
    "div",
    {
      ref: N,
      contentEditable: !h,
      placeholder: b,
      className: `h-full w-full border-none ${n ? "" : "empty"} ${f} ${P}`,
      style: {
        ...zm,
        ...u,
        position: "relative"
      },
      onInput: _,
      onFocus: $,
      onClick: s,
      onKeyDown: R,
      onKeyUp: O,
      suppressContentEditableWarning: !0,
      tabIndex: 0,
      children: n
    }
  );
}, DE = (n) => {
  var f;
  const o = window.getSelection();
  if (!o || o.rangeCount === 0)
    return console.warn("selection is null or rangeCount is 0"), 0;
  let r = 0;
  const s = o.getRangeAt(0), c = s.cloneRange();
  c.selectNodeContents(n), c.setEnd(s.endContainer, s.endOffset);
  const l = document.createNodeIterator(
    n,
    NodeFilter.SHOW_TEXT,
    null
  );
  let u;
  for (; u = l.nextNode(); )
    if (u === s.endContainer) {
      r += s.endOffset;
      break;
    } else
      r += ((f = u.textContent) == null ? void 0 : f.length) ?? 0;
  return r;
}, OE = (n, o) => {
  var f;
  const r = document.createRange(), s = window.getSelection(), c = document.createNodeIterator(
    n,
    NodeFilter.SHOW_TEXT,
    null
  );
  let l, u = 0;
  for (; l = c.nextNode(); ) {
    const h = ((f = l.textContent) == null ? void 0 : f.length) ?? 0;
    if (u + h >= o) {
      r.setStart(l, o - u), r.collapse(!0), s == null || s.removeAllRanges(), s == null || s.addRange(r);
      return;
    }
    u += h;
  }
  r.setStart(n, n.childNodes.length), r.collapse(!0), s == null || s.removeAllRanges(), s == null || s.addRange(r);
};
function RE({
  values: n,
  searchMessage: o = "Search...",
  selectMessage: r = "Select...",
  emptyMessage: s = "No results",
  defaultValue: c,
  selectedIndex: l,
  handleTextEdit: u,
  isDragging: f,
  draggingOver: h,
  draggingOn: v,
  handleChange: b,
  addYoungerSibling: m,
  moveLeft: C,
  moveRight: y,
  moveUp: N,
  moveDown: w,
  moveFocusUp: _,
  moveFocusDown: $,
  deleteOption: R,
  deleteRow: O,
  addOption: P,
  handleUndo: I,
  handleRedo: M,
  toggleCollapse: W,
  variant: U = "default",
  hasFocus: G,
  focusChar: Z,
  setFocus: ne,
  suggestOption: oe,
  getFocus: ye,
  locked: ee,
  ...me
}) {
  var Me, Be;
  const [ve, De] = z.useState(!1), [we, Y] = z.useState(c);
  z.useEffect(() => {
    if (l !== void 0) {
      if (n.length < 1)
        throw new Error("values.length < 1");
      Y(l.toString() || c || "0");
    }
  }, [l]);
  const le = (Me = n.find((ie) => ie.value === we)) == null ? void 0 : Me.label, ae = (ie, We) => {
    if (!ee)
      return u(ie, We), !1;
  }, he = (ie) => {
    if (ee) {
      ie.preventDefault(), ie.stopPropagation();
      return;
    }
    ie.key === " " && ie.stopPropagation(), ie.key === "ArrowUp" && ie.ctrlKey && ie.stopPropagation(), ie.key === "Enter" && (console.log("trying to prevent default"), ie.preventDefault(), ie.stopPropagation());
  }, $e = (ie) => {
    if (ee) {
      ie.preventDefault(), ie.stopPropagation();
      return;
    }
    if (ie.key === "Enter" && (ie.altKey ? P() : (console.log("addYoungerSibling - comboboxEditable"), m())), (ie.key === "z" || ie.key === "Z") && ie.ctrlKey && (ie.shiftKey ? (ie.preventDefault(), M(), ie.stopPropagation()) : (ie.preventDefault(), I(), ie.stopPropagation())), ie.key === "ArrowUp") {
      if (ie.altKey && ie.ctrlKey)
        console.log("test", we, n.length, (parseInt(we || "0") - 1 + n.length) % n.length), b(we ? ((parseInt(we) - 1 + n.length) % n.length).toString() : "0");
      else if (!ie.ctrlKey && !ie.shiftKey && !ie.metaKey && !ie.altKey) {
        _(), ie.preventDefault(), ie.stopPropagation();
        return;
      }
    }
    if (ie.key === "ArrowDown") {
      if (ie.altKey && ie.ctrlKey)
        b(we ? ((parseInt(we) + 1) % n.length).toString() : "0");
      else if (!ie.ctrlKey && !ie.shiftKey && !ie.metaKey && !ie.altKey) {
        ie.preventDefault(), ie.stopPropagation(), $();
        return;
      }
    }
    ie.key === "ArrowRight" && ie.altKey && ie.ctrlKey && y(), ie.key === "ArrowLeft" && ie.altKey && ie.ctrlKey && C(), ie.key === " " && ie.ctrlKey && W(), ie.key === "Backspace" && !le && (console.log("deleteRow - comboboxEditable", le), O());
  }, je = (ie) => {
    ee || R(ie);
  }, Ue = h ? {
    // backgroundColor: 'rgba(230, 220, 200, .03)',
  } : {}, Le = v ? {
    backgroundColor: "rgba(230, 220, 200, .07)",
    border: "1px solid rgba(230, 220, 200, .3)"
    // transform: 'scale(1.05)',
  } : {}, lt = f ? {
    backgroundColor: "rgba(230, 220, 200, .03)",
    opacity: "0.5"
  } : {};
  return /* @__PURE__ */ j(Ju, { open: ve, onOpenChange: De, children: [
    /* @__PURE__ */ T(Qu, { asChild: !0, children: /* @__PURE__ */ j(
      "div",
      {
        style: {
          position: "relative",
          opacity: 1,
          height: "auto",
          ...Le,
          ...Ue,
          display: "grid",
          gridTemplateColumns: "1fr .25rem",
          width: "calc(100% - 2rem)"
        },
        role: "combobox",
        className: " ",
        children: [
          /* @__PURE__ */ T(
            SE,
            {
              disabled: ee,
              autoFocus: G,
              placeholder: n.length > 1 ? "New Option" : "Enter a task to plan",
              className: "rounded-r-none w-full cursor-text",
              getFocus: ye,
              value: we ? ((Be = n.find((ie) => ie.value === we)) == null ? void 0 : Be.label) || "" : r,
              style: {
                width: "calc(100% - 1.25rem)",
                fontSize: "1rem",
                fontWeight: "normal",
                height: "auto",
                // ...dropStyle,
                // ...dropOnStyle,
                ...lt
              },
              onChange: ae,
              onClick: (ie) => {
                ie.stopPropagation();
              },
              onKeyDown: he,
              onKeyUp: $e,
              focusChar: Z
            }
          ),
          /* @__PURE__ */ T(
            "div",
            {
              className: "flex w-5 justify-center items-center flex p-0",
              "aria-expanded": ve,
              children: /* @__PURE__ */ T(Mu, { className: `h-4 ${n.length > 1 ? "text-teal-100/80" : "opacity-80 fill-white"}`, style: {
                padding: "0px 0px 0px 0px"
              } })
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ T(Yl, { className: "w-[200px] p-0", children: /* @__PURE__ */ j(Gl, { children: [
      /* @__PURE__ */ T(Kl, { children: s }),
      /* @__PURE__ */ T(ps, { children: n.map((ie, We) => /* @__PURE__ */ j(
        Vl,
        {
          value: ie.value,
          onSelect: (rt) => {
            Y(rt === we ? we : rt), b(rt), De(!1);
          },
          children: [
            ie.label || /* @__PURE__ */ T("span", { className: "opacity-50", children: "New Option" }),
            /* @__PURE__ */ T(
              Fu,
              {
                className: Dt(
                  "ml-auto h-4 w-4",
                  we === ie.value ? "opacity-100" : "opacity-0"
                )
              }
            ),
            n.length > 1 && we !== ie.value && /* @__PURE__ */ T("div", { children: /* @__PURE__ */ T(
              Ib,
              {
                className: "h-4 w-4 opacity-50 hover:opacity-100 cursor-pointer",
                color: "rgba(200, 100, 100, .7)",
                onClick: (rt) => {
                  rt.stopPropagation(), je(We);
                }
              }
            ) })
          ]
        },
        ie.value
      )) }),
      /* @__PURE__ */ T(ps, { children: /* @__PURE__ */ j("div", { className: "grid grid-cols-2 place-content-stretch gap-1", children: [
        /* @__PURE__ */ T("div", { className: "", children: /* @__PURE__ */ T(
          Ve,
          {
            onClick: () => {
              P(), De(!1);
            },
            className: "justify-center bg-gray-100/30 text-gray-900 hover:bg-gray-200 h-10 w-full",
            children: /* @__PURE__ */ T(Tb, { className: "h-4" })
          }
        ) }),
        /* @__PURE__ */ T("div", { className: "", children: /* @__PURE__ */ T(
          Ve,
          {
            onClick: () => {
              oe(), De(!1);
            },
            className: "bg-emerald-900 w-full",
            children: /* @__PURE__ */ T(Wo, { className: "h-4" })
          }
        ) })
      ] }) })
    ] }) })
  ] });
}
const PE = {
  display: "none"
};
function AE(n) {
  let {
    id: o,
    value: r
  } = n;
  return at.createElement("div", {
    id: o,
    style: PE
  }, r);
}
const TE = {
  position: "fixed",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  clipPath: "inset(100%)",
  whiteSpace: "nowrap"
};
function IE(n) {
  let {
    id: o,
    announcement: r
  } = n;
  return at.createElement("div", {
    id: o,
    style: TE,
    role: "status",
    "aria-live": "assertive",
    "aria-atomic": !0
  }, r);
}
function LE() {
  const [n, o] = Te("");
  return {
    announce: wt((s) => {
      s != null && o(s);
    }, []),
    announcement: n
  };
}
const ME = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, FE = {
  onDragStart(n) {
    return `Picked up draggable item ${n}.`;
  },
  onDragOver(n, o) {
    return o ? `Draggable item ${n} was moved over droppable area ${o}.` : `Draggable item ${n} is no longer over a droppable area.`;
  },
  onDragEnd(n, o) {
    return o ? `Draggable item ${n} was dropped over droppable area ${o}` : `Draggable item ${n} was dropped.`;
  },
  onDragCancel(n) {
    return `Dragging was cancelled. Draggable item ${n} was dropped.`;
  }
};
var St;
(function(n) {
  n.DragStart = "dragStart", n.DragMove = "dragMove", n.DragEnd = "dragEnd", n.DragCancel = "dragCancel", n.DragOver = "dragOver", n.RegisterDroppable = "registerDroppable", n.SetDroppableDisabled = "setDroppableDisabled", n.UnregisterDroppable = "unregisterDroppable";
})(St || (St = {}));
function Su(...n) {
}
class $l extends Map {
  get(o) {
    var r;
    return o != null && (r = super.get(o)) != null ? r : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter(({
      disabled: o
    }) => !o);
  }
  getNodeFor(o) {
    var r, s;
    return (r = (s = this.get(o)) == null ? void 0 : s.node.current) != null ? r : void 0;
  }
}
const kE = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: {},
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new $l(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: Su
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measureDroppableContainers: Su,
  windowRect: null,
  measuringScheduled: !1
}, WE = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: Su,
  draggableNodes: {},
  over: null,
  measureDroppableContainers: Su
}, G1 = /* @__PURE__ */ Un(WE), BE = /* @__PURE__ */ Un(kE);
function UE() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0
      },
      nodes: {},
      translate: {
        x: 0,
        y: 0
      }
    },
    droppable: {
      containers: new $l()
    }
  };
}
function zE(n, o) {
  switch (o.type) {
    case St.DragStart:
      return {
        ...n,
        draggable: {
          ...n.draggable,
          initialCoordinates: o.initialCoordinates,
          active: o.active
        }
      };
    case St.DragMove:
      return n.draggable.active ? {
        ...n,
        draggable: {
          ...n.draggable,
          translate: {
            x: o.coordinates.x - n.draggable.initialCoordinates.x,
            y: o.coordinates.y - n.draggable.initialCoordinates.y
          }
        }
      } : n;
    case St.DragEnd:
    case St.DragCancel:
      return {
        ...n,
        draggable: {
          ...n.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0
          },
          translate: {
            x: 0,
            y: 0
          }
        }
      };
    case St.RegisterDroppable: {
      const {
        element: r
      } = o, {
        id: s
      } = r, c = new $l(n.droppable.containers);
      return c.set(s, r), {
        ...n,
        droppable: {
          ...n.droppable,
          containers: c
        }
      };
    }
    case St.SetDroppableDisabled: {
      const {
        id: r,
        key: s,
        disabled: c
      } = o, l = n.droppable.containers.get(r);
      if (!l || s !== l.key)
        return n;
      const u = new $l(n.droppable.containers);
      return u.set(r, {
        ...l,
        disabled: c
      }), {
        ...n,
        droppable: {
          ...n.droppable,
          containers: u
        }
      };
    }
    case St.UnregisterDroppable: {
      const {
        id: r,
        key: s
      } = o, c = n.droppable.containers.get(r);
      if (!c || s !== c.key)
        return n;
      const l = new $l(n.droppable.containers);
      return l.delete(r), {
        ...n,
        droppable: {
          ...n.droppable,
          containers: l
        }
      };
    }
    default:
      return n;
  }
}
const oy = /* @__PURE__ */ Un({
  type: null,
  event: null
});
function HE({
  onDragStart: n,
  onDragMove: o,
  onDragOver: r,
  onDragEnd: s,
  onDragCancel: c
}) {
  const l = Br(oy), u = de(l);
  be(() => {
    if (l !== u.current) {
      const {
        type: f,
        event: h
      } = l;
      switch (f) {
        case St.DragStart:
          n == null || n(h);
          break;
        case St.DragMove:
          o == null || o(h);
          break;
        case St.DragOver:
          r == null || r(h);
          break;
        case St.DragCancel:
          c == null || c(h);
          break;
        case St.DragEnd:
          s == null || s(h);
          break;
      }
      u.current = l;
    }
  }, [l, n, o, r, s, c]);
}
function GE({
  announcements: n = FE,
  hiddenTextDescribedById: o,
  screenReaderInstructions: r
}) {
  const {
    announce: s,
    announcement: c
  } = LE(), l = Ku("DndLiveRegion"), [u, f] = Te(!1);
  return be(() => {
    f(!0);
  }, []), HE(vt(() => ({
    onDragStart({
      active: h
    }) {
      s(n.onDragStart(h.id));
    },
    onDragMove({
      active: h,
      over: v
    }) {
      n.onDragMove && s(n.onDragMove(h.id, v == null ? void 0 : v.id));
    },
    onDragOver({
      active: h,
      over: v
    }) {
      s(n.onDragOver(h.id, v == null ? void 0 : v.id));
    },
    onDragEnd({
      active: h,
      over: v
    }) {
      s(n.onDragEnd(h.id, v == null ? void 0 : v.id));
    },
    onDragCancel({
      active: h
    }) {
      s(n.onDragCancel(h.id));
    }
  }), [s, n])), u ? ky(at.createElement(at.Fragment, null, at.createElement(AE, {
    id: o,
    value: r.draggable
  }), at.createElement(IE, {
    id: l,
    announcement: c
  })), document.body) : null;
}
const zr = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function KE(n, o) {
  return Math.sqrt(Math.pow(n.x - o.x, 2) + Math.pow(n.y - o.y, 2));
}
function VE({
  data: {
    value: n
  }
}, {
  data: {
    value: o
  }
}) {
  return n - o;
}
function qE({
  data: {
    value: n
  }
}, {
  data: {
    value: o
  }
}) {
  return o - n;
}
function jw({
  left: n,
  top: o,
  height: r,
  width: s
}) {
  return [{
    x: n,
    y: o
  }, {
    x: n + s,
    y: o
  }, {
    x: n,
    y: o + r
  }, {
    x: n + s,
    y: o + r
  }];
}
function iy(n, o) {
  if (!n || n.length === 0)
    return null;
  const [r] = n;
  return o ? r[o] : r;
}
const YE = ({
  collisionRect: n,
  droppableContainers: o
}) => {
  const r = jw(n), s = [];
  for (const c of o) {
    const {
      id: l,
      rect: {
        current: u
      }
    } = c;
    if (u) {
      const f = jw(u), h = r.reduce((b, m, C) => b + KE(f[C], m), 0), v = Number((h / 4).toFixed(4));
      s.push({
        id: l,
        data: {
          droppableContainer: c,
          value: v
        }
      });
    }
  }
  return s.sort(VE);
};
function ZE(n, o) {
  const r = Math.max(o.top, n.top), s = Math.max(o.left, n.left), c = Math.min(o.left + o.width, n.left + n.width), l = Math.min(o.top + o.height, n.top + n.height), u = c - s, f = l - r;
  if (s < c && r < l) {
    const h = o.width * o.height, v = n.width * n.height, b = u * f, m = b / (h + v - b);
    return Number(m.toFixed(4));
  }
  return 0;
}
const XE = ({
  collisionRect: n,
  droppableContainers: o
}) => {
  const r = [];
  for (const s of o) {
    const {
      id: c,
      rect: {
        current: l
      }
    } = s;
    if (l) {
      const u = ZE(l, n);
      u > 0 && r.push({
        id: c,
        data: {
          droppableContainer: s,
          value: u
        }
      });
    }
  }
  return r.sort(qE);
};
function JE(n, o, r) {
  return {
    ...n,
    scaleX: o && r ? o.width / r.width : 1,
    scaleY: o && r ? o.height / r.height : 1
  };
}
function QE(n, o) {
  return n && o ? {
    x: n.left - o.left,
    y: n.top - o.top
  } : zr;
}
function jE(n) {
  return function(r, ...s) {
    return s.reduce((c, l) => ({
      ...c,
      top: c.top + n * l.y,
      bottom: c.bottom + n * l.y,
      left: c.left + n * l.x,
      right: c.right + n * l.x
    }), {
      ...r
    });
  };
}
const eS = /* @__PURE__ */ jE(1);
function tS(n, o, r) {
  let s, c, l, u, f;
  if (o.startsWith("matrix3d("))
    s = o.slice(9, -1).split(/, /), c = +s[0], l = +s[5], u = +s[12], f = +s[13];
  else if (o.startsWith("matrix("))
    s = o.slice(7, -1).split(/, /), c = +s[0], l = +s[3], u = +s[4], f = +s[5];
  else
    return n;
  const h = n.left - u - (1 - c) * parseFloat(r), v = n.top - f - (1 - l) * parseFloat(r.slice(r.indexOf(" ") + 1)), b = c ? n.width / c : n.width, m = l ? n.height / l : n.height;
  return {
    width: b,
    height: m,
    top: v,
    right: h + b,
    bottom: v + m,
    left: h
  };
}
const nS = {
  ignoreTransform: !1
};
function sy(n, o = nS) {
  let r = n.getBoundingClientRect();
  if (o.ignoreTransform) {
    const {
      getComputedStyle: v
    } = mr(n), {
      transform: b,
      transformOrigin: m
    } = v(n);
    b && (r = tS(r, b, m));
  }
  const {
    top: s,
    left: c,
    width: l,
    height: u,
    bottom: f,
    right: h
  } = r;
  return {
    top: s,
    left: c,
    width: l,
    height: u,
    bottom: f,
    right: h
  };
}
function Zl(n) {
  return sy(n, {
    ignoreTransform: !0
  });
}
function rS(n) {
  const o = n.innerWidth, r = n.innerHeight;
  return {
    top: 0,
    left: 0,
    right: o,
    bottom: r,
    width: o,
    height: r
  };
}
function oS(n, o = mr(n).getComputedStyle(n)) {
  return o.position === "fixed";
}
function iS(n, o = mr(n).getComputedStyle(n)) {
  const r = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].find((c) => {
    const l = o[c];
    return typeof l == "string" ? r.test(l) : !1;
  }) != null;
}
function K1(n) {
  const o = [];
  function r(s) {
    if (!s)
      return o;
    if (A1(s) && s.scrollingElement != null && !o.includes(s.scrollingElement))
      return o.push(s.scrollingElement), o;
    if (!Ms(s) || CN(s) || o.includes(s))
      return o;
    const {
      getComputedStyle: c
    } = mr(s), l = c(s);
    return s !== n && iS(s, l) && o.push(s), oS(s, l) ? o : r(s.parentNode);
  }
  return n ? r(n) : o;
}
function Hm(n) {
  return !Gu || !n ? null : Ls(n) ? n : P1(n) ? A1(n) || n === Fs(n).scrollingElement ? window : Ms(n) ? n : null : null;
}
function ay(n) {
  return Ls(n) ? n.scrollX : n.scrollLeft;
}
function cy(n) {
  return Ls(n) ? n.scrollY : n.scrollTop;
}
function g1(n) {
  return {
    x: ay(n),
    y: cy(n)
  };
}
var Es;
(function(n) {
  n[n.Forward = 1] = "Forward", n[n.Backward = -1] = "Backward";
})(Es || (Es = {}));
function ly(n) {
  const o = {
    x: 0,
    y: 0
  }, r = {
    x: n.scrollWidth - n.clientWidth,
    y: n.scrollHeight - n.clientHeight
  }, s = n.scrollTop <= o.y, c = n.scrollLeft <= o.x, l = n.scrollTop >= r.y, u = n.scrollLeft >= r.x;
  return {
    isTop: s,
    isLeft: c,
    isBottom: l,
    isRight: u,
    maxScroll: r,
    minScroll: o
  };
}
function sS(n) {
  return !Gu || !n ? !1 : n === document.scrollingElement;
}
const aS = {
  x: 0.2,
  y: 0.2
};
function cS(n, o, {
  top: r,
  left: s,
  right: c,
  bottom: l
}, u = 10, f = aS) {
  const {
    clientHeight: h,
    clientWidth: v
  } = n, b = sS(n) ? {
    top: 0,
    left: 0,
    right: v,
    bottom: h,
    width: v,
    height: h
  } : o, {
    isTop: m,
    isBottom: C,
    isLeft: y,
    isRight: N
  } = ly(n), w = {
    x: 0,
    y: 0
  }, _ = {
    x: 0,
    y: 0
  }, $ = {
    height: b.height * f.y,
    width: b.width * f.x
  };
  return !m && r <= b.top + $.height ? (w.y = Es.Backward, _.y = u * Math.abs((b.top + $.height - r) / $.height)) : !C && l >= b.bottom - $.height && (w.y = Es.Forward, _.y = u * Math.abs((b.bottom - $.height - l) / $.height)), !N && c >= b.right - $.width ? (w.x = Es.Forward, _.x = u * Math.abs((b.right - $.width - c) / $.width)) : !y && s <= b.left + $.width && (w.x = Es.Backward, _.x = u * Math.abs((b.left + $.width - s) / $.width)), {
    direction: w,
    speed: _
  };
}
function lS(n) {
  if (n === document.scrollingElement) {
    const {
      innerWidth: l,
      innerHeight: u
    } = window;
    return {
      top: 0,
      left: 0,
      right: l,
      bottom: u,
      width: l,
      height: u
    };
  }
  const {
    top: o,
    left: r,
    right: s,
    bottom: c
  } = n.getBoundingClientRect();
  return {
    top: o,
    left: r,
    right: s,
    bottom: c,
    width: n.clientWidth,
    height: n.clientHeight
  };
}
function uy(n) {
  return n.reduce((o, r) => Al(o, g1(r)), zr);
}
function uS(n) {
  return n.reduce((o, r) => o + ay(r), 0);
}
function dS(n) {
  return n.reduce((o, r) => o + cy(r), 0);
}
const fS = [["x", ["left", "right"], uS], ["y", ["top", "bottom"], dS]];
class V1 {
  constructor(o, r) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const s = K1(r), c = uy(s);
    this.rect = {
      ...o
    }, this.width = o.width, this.height = o.height;
    for (const [l, u, f] of fS)
      for (const h of u)
        Object.defineProperty(this, h, {
          get: () => {
            const v = f(s), b = c[l] - v;
            return this.rect[h] + b;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
var El;
(function(n) {
  n[n.Pointer = 0] = "Pointer", n[n.DraggableRect = 1] = "DraggableRect";
})(El || (El = {}));
var Du;
(function(n) {
  n[n.TreeOrder = 0] = "TreeOrder", n[n.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Du || (Du = {}));
function hS({
  acceleration: n,
  activator: o = El.Pointer,
  canScroll: r,
  draggingRect: s,
  enabled: c,
  interval: l = 5,
  order: u = Du.TreeOrder,
  pointerCoordinates: f,
  scrollableAncestors: h,
  scrollableAncestorRects: v,
  threshold: b
}) {
  const [m, C] = _N(), y = de({
    x: 1,
    y: 1
  }), N = vt(() => {
    switch (o) {
      case El.Pointer:
        return f ? {
          top: f.y,
          bottom: f.y,
          left: f.x,
          right: f.x
        } : null;
      case El.DraggableRect:
        return s;
    }
    return null;
  }, [o, s, f]), w = de(zr), _ = de(null), $ = wt(() => {
    const O = _.current;
    if (!O)
      return;
    const P = y.current.x * w.current.x, I = y.current.y * w.current.y;
    O.scrollBy(P, I);
  }, []), R = vt(() => u === Du.TreeOrder ? [...h].reverse() : h, [u, h]);
  be(
    () => {
      if (!c || !h.length || !N) {
        C();
        return;
      }
      for (const O of R) {
        if ((r == null ? void 0 : r(O)) === !1)
          continue;
        const P = h.indexOf(O), I = v[P];
        if (!I)
          continue;
        const {
          direction: M,
          speed: W
        } = cS(O, I, N, n, b);
        if (W.x > 0 || W.y > 0) {
          C(), _.current = O, m($, l), y.current = W, w.current = M;
          return;
        }
      }
      y.current = {
        x: 0,
        y: 0
      }, w.current = {
        x: 0,
        y: 0
      }, C();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      n,
      $,
      r,
      C,
      c,
      l,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(N),
      m,
      h,
      R,
      v,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(b)
    ]
  );
}
function pS(n, o) {
  const r = o !== null ? n[o] : void 0, s = r ? r.node.current : null;
  return Bl((c) => {
    var l;
    return o === null ? null : (l = s ?? c) != null ? l : null;
  }, [s, o]);
}
function gS(n, o) {
  return vt(() => n.reduce((r, s) => {
    const {
      sensor: c
    } = s, l = c.activators.map((u) => ({
      eventName: u.eventName,
      handler: o(u.handler, s)
    }));
    return [...r, ...l];
  }, []), [n, o]);
}
var Ml;
(function(n) {
  n[n.Always = 0] = "Always", n[n.BeforeDragging = 1] = "BeforeDragging", n[n.WhileDragging = 2] = "WhileDragging";
})(Ml || (Ml = {}));
var v1;
(function(n) {
  n.Optimized = "optimized";
})(v1 || (v1 = {}));
const eb = /* @__PURE__ */ new Map(), vS = {
  measure: Zl,
  strategy: Ml.WhileDragging,
  frequency: v1.Optimized
};
function mS(n, {
  dragging: o,
  dependencies: r,
  config: s
}) {
  const [c, l] = Te(null), u = c != null, {
    frequency: f,
    measure: h,
    strategy: v
  } = {
    ...vS,
    ...s
  }, b = de(n), m = wt((_ = []) => l(($) => $ ? $.concat(_) : _), []), C = de(null), y = w(), N = Bl((_) => {
    if (y && !o)
      return eb;
    const $ = c;
    if (!_ || _ === eb || b.current !== n || $ != null) {
      const R = /* @__PURE__ */ new Map();
      for (let O of n) {
        if (!O)
          continue;
        if ($ && $.length > 0 && !$.includes(O.id) && O.rect.current) {
          R.set(O.id, O.rect.current);
          continue;
        }
        const P = O.node.current, I = P ? new V1(h(P), P) : null;
        O.rect.current = I, I && R.set(O.id, I);
      }
      return R;
    }
    return _;
  }, [n, c, o, y, h]);
  return be(() => {
    b.current = n;
  }, [n]), be(
    () => {
      y || requestAnimationFrame(() => m());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [o, y]
  ), be(() => {
    u && l(null);
  }, [u]), be(
    () => {
      y || typeof f != "number" || C.current !== null || (C.current = setTimeout(() => {
        m(), C.current = null;
      }, f));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [f, y, m, ...r]
  ), {
    droppableRects: N,
    measureDroppableContainers: m,
    measuringScheduled: u
  };
  function w() {
    switch (v) {
      case Ml.Always:
        return !1;
      case Ml.BeforeDragging:
        return o;
      default:
        return !o;
    }
  }
}
function dy({
  onResize: n,
  disabled: o
}) {
  const r = vt(() => {
    if (o || typeof window > "u" || typeof window.ResizeObserver > "u")
      return;
    const {
      ResizeObserver: s
    } = window;
    return new s(n);
  }, [o, n]);
  return be(() => () => r == null ? void 0 : r.disconnect(), [r]), r;
}
function wS(n) {
  const [o, r] = Te(null), s = de(n), c = wt((l) => {
    const u = Hm(l.target);
    u && r((f) => f ? (f.set(u, g1(u)), new Map(f)) : null);
  }, []);
  return be(() => {
    const l = s.current;
    if (n !== l) {
      u(l);
      const f = n.map((h) => {
        const v = Hm(h);
        return v ? (v.addEventListener("scroll", c, {
          passive: !0
        }), [v, g1(v)]) : null;
      }).filter((h) => h != null);
      r(f.length ? new Map(f) : null), s.current = n;
    }
    return () => {
      u(n), u(l);
    };
    function u(f) {
      f.forEach((h) => {
        const v = Hm(h);
        v == null || v.removeEventListener("scroll", c);
      });
    }
  }, [c, n]), vt(() => n.length ? o ? Array.from(o.values()).reduce((l, u) => Al(l, u), zr) : uy(n) : zr, [n, o]);
}
const bS = [];
function xS(n) {
  const o = de(n), r = Bl((s) => n ? s && n && o.current && n.parentNode === o.current.parentNode ? s : K1(n) : bS, [n]);
  return be(() => {
    o.current = n;
  }, [n]), r;
}
function yS(n) {
  be(
    () => {
      if (!Gu)
        return;
      const o = n.map(({
        sensor: r
      }) => r.setup == null ? void 0 : r.setup());
      return () => {
        for (const r of o)
          r == null || r();
      };
    },
    // TO-DO: Sensors length could theoretically change which would not be a valid dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n.map(({
      sensor: o
    }) => o)
  );
}
function CS(n, o) {
  return vt(() => n.reduce((r, {
    eventName: s,
    handler: c
  }) => (r[s] = (l) => {
    c(l, o);
  }, r), {}), [n, o]);
}
const NS = /* @__PURE__ */ $S(Zl), _S = /* @__PURE__ */ ES(Zl);
function fy(n, o, r) {
  const s = de(n);
  return Bl((c) => n ? r || !c && n || n !== s.current ? Ms(n) && n.parentNode == null ? null : new V1(o(n), n) : c ?? null : null, [n, r, o]);
}
function $S(n) {
  return (o, r) => fy(o, n, r);
}
function ES(n) {
  const o = [];
  return function(s, c) {
    const l = de(s);
    return Bl((u) => s.length ? c || !u && s.length || s !== l.current ? s.map((f) => new V1(n(f), f)) : u ?? o : o, [s, c]);
  };
}
function SS(n) {
  return vt(() => n ? rS(n) : null, [n]);
}
function DS(n) {
  if (!n)
    return null;
  if (n.children.length > 1)
    return n;
  const o = n.children[0];
  return Ms(o) ? o : n;
}
function OS({
  measure: n = sy
}) {
  const [o, r] = Te(null), s = wt((h) => {
    for (const {
      target: v
    } of h)
      if (Ms(v)) {
        r((b) => {
          const m = n(v);
          return b ? {
            ...b,
            width: m.width,
            height: m.height
          } : m;
        });
        break;
      }
  }, [n]), c = dy({
    onResize: s
  }), l = wt((h) => {
    const v = DS(h);
    c == null || c.disconnect(), v && (c == null || c.observe(v)), r(v ? n(v) : null);
  }, [n, c]), [u, f] = T1(l);
  return vt(() => ({
    nodeRef: u,
    rect: o,
    setRef: f
  }), [o, u, f]);
}
function Gm(n, o) {
  return vt(
    () => ({
      sensor: n,
      options: o ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, o]
  );
}
function RS(...n) {
  return vt(
    () => [...n].filter((o) => o != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...n]
  );
}
class Sl {
  constructor(o) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((r) => {
        var s;
        return (s = this.target) == null ? void 0 : s.removeEventListener(...r);
      });
    }, this.target = o;
  }
  add(o, r, s) {
    var c;
    (c = this.target) == null || c.addEventListener(o, r, s), this.listeners.push([o, r, s]);
  }
}
function PS(n) {
  const {
    EventTarget: o
  } = mr(n);
  return n instanceof o ? n : Fs(n);
}
function Km(n, o) {
  const r = Math.abs(n.x), s = Math.abs(n.y);
  return typeof o == "number" ? Math.sqrt(r ** 2 + s ** 2) > o : "x" in o && "y" in o ? r > o.x && s > o.y : "x" in o ? r > o.x : "y" in o ? s > o.y : !1;
}
var hr;
(function(n) {
  n.Click = "click", n.DragStart = "dragstart", n.Keydown = "keydown", n.ContextMenu = "contextmenu", n.Resize = "resize", n.SelectionChange = "selectionchange", n.VisibilityChange = "visibilitychange";
})(hr || (hr = {}));
function tb(n) {
  n.preventDefault();
}
function AS(n) {
  n.stopPropagation();
}
var et;
(function(n) {
  n.Space = "Space", n.Down = "ArrowDown", n.Right = "ArrowRight", n.Left = "ArrowLeft", n.Up = "ArrowUp", n.Esc = "Escape", n.Enter = "Enter";
})(et || (et = {}));
const hy = {
  start: [et.Space, et.Enter],
  cancel: [et.Esc],
  end: [et.Space, et.Enter]
}, TS = (n, {
  currentCoordinates: o
}) => {
  switch (n.code) {
    case et.Right:
      return {
        ...o,
        x: o.x + 25
      };
    case et.Left:
      return {
        ...o,
        x: o.x - 25
      };
    case et.Down:
      return {
        ...o,
        y: o.y + 25
      };
    case et.Up:
      return {
        ...o,
        y: o.y - 25
      };
  }
};
class q1 {
  constructor(o) {
    this.props = void 0, this.autoScrollEnabled = !1, this.coordinates = zr, this.listeners = void 0, this.windowListeners = void 0, this.props = o;
    const {
      event: {
        target: r
      }
    } = o;
    this.props = o, this.listeners = new Sl(Fs(r)), this.windowListeners = new Sl(mr(r)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(hr.Resize, this.handleCancel), this.windowListeners.add(hr.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(hr.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: o,
      onStart: r
    } = this.props;
    if (!o.node.current)
      throw new Error("Active draggable node is undefined");
    const s = Zl(o.node.current), c = {
      x: s.left,
      y: s.top
    };
    this.coordinates = c, r(c);
  }
  handleKeyDown(o) {
    if (EN(o)) {
      const {
        coordinates: r
      } = this, {
        active: s,
        context: c,
        options: l
      } = this.props, {
        keyboardCodes: u = hy,
        coordinateGetter: f = TS,
        scrollBehavior: h = "smooth"
      } = l, {
        code: v
      } = o;
      if (u.end.includes(v)) {
        this.handleEnd(o);
        return;
      }
      if (u.cancel.includes(v)) {
        this.handleCancel(o);
        return;
      }
      const b = f(o, {
        active: s,
        context: c.current,
        currentCoordinates: r
      });
      if (b) {
        const m = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: C
        } = c.current;
        for (const y of C) {
          const N = o.code, w = dx(b, r), {
            isTop: _,
            isRight: $,
            isLeft: R,
            isBottom: O,
            maxScroll: P,
            minScroll: I
          } = ly(y), M = lS(y), W = {
            x: Math.min(N === et.Right ? M.right - M.width / 2 : M.right, Math.max(N === et.Right ? M.left : M.left + M.width / 2, b.x)),
            y: Math.min(N === et.Down ? M.bottom - M.height / 2 : M.bottom, Math.max(N === et.Down ? M.top : M.top + M.height / 2, b.y))
          }, U = N === et.Right && !$ || N === et.Left && !R, G = N === et.Down && !O || N === et.Up && !_;
          if (U && W.x !== b.x) {
            if (N === et.Right && y.scrollLeft + w.x <= P.x || N === et.Left && y.scrollLeft + w.x >= I.x) {
              y.scrollBy({
                left: w.x,
                behavior: h
              });
              return;
            }
            m.x = N === et.Right ? y.scrollLeft - P.x : y.scrollLeft - I.x, y.scrollBy({
              left: -m.x,
              behavior: h
            });
            break;
          } else if (G && W.y !== b.y) {
            if (N === et.Down && y.scrollTop + w.y <= P.y || N === et.Up && y.scrollTop + w.y >= I.y) {
              y.scrollBy({
                top: w.y,
                behavior: h
              });
              return;
            }
            m.y = N === et.Down ? y.scrollTop - P.y : y.scrollTop - I.y, y.scrollBy({
              top: -m.y,
              behavior: h
            });
            break;
          }
        }
        this.handleMove(o, Al(b, m));
      }
    }
  }
  handleMove(o, r) {
    const {
      onMove: s
    } = this.props;
    o.preventDefault(), s(r), this.coordinates = r;
  }
  handleEnd(o) {
    const {
      onEnd: r
    } = this.props;
    o.preventDefault(), this.detach(), r();
  }
  handleCancel(o) {
    const {
      onCancel: r
    } = this.props;
    o.preventDefault(), this.detach(), r();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll();
  }
}
q1.activators = [{
  eventName: "onKeyDown",
  handler: (n, {
    keyboardCodes: o = hy,
    onActivation: r
  }) => {
    const {
      code: s
    } = n.nativeEvent;
    return o.start.includes(s) ? (n.preventDefault(), r == null || r({
      event: n.nativeEvent
    }), !0) : !1;
  }
}];
function nb(n) {
  return !!(n && "distance" in n);
}
function rb(n) {
  return !!(n && "delay" in n);
}
class Y1 {
  constructor(o, r, s = PS(o.event.target)) {
    var c;
    this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = o, this.events = r;
    const {
      event: l
    } = o, {
      target: u
    } = l;
    this.props = o, this.events = r, this.document = Fs(u), this.documentListeners = new Sl(this.document), this.listeners = new Sl(s), this.windowListeners = new Sl(mr(u)), this.initialCoordinates = (c = o1(l)) != null ? c : zr, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    const {
      events: o,
      props: {
        options: {
          activationConstraint: r
        }
      }
    } = this;
    if (this.listeners.add(o.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(o.end.name, this.handleEnd), this.windowListeners.add(hr.Resize, this.handleCancel), this.windowListeners.add(hr.DragStart, tb), this.windowListeners.add(hr.VisibilityChange, this.handleCancel), this.windowListeners.add(hr.ContextMenu, tb), this.documentListeners.add(hr.Keydown, this.handleKeydown), r) {
      if (nb(r))
        return;
      if (rb(r)) {
        this.timeoutId = setTimeout(this.handleStart, r.delay);
        return;
      }
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  handleStart() {
    const {
      initialCoordinates: o
    } = this, {
      onStart: r
    } = this.props;
    o && (this.activated = !0, this.documentListeners.add(hr.Click, AS, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(hr.SelectionChange, this.removeTextSelection), r(o));
  }
  handleMove(o) {
    var r;
    const {
      activated: s,
      initialCoordinates: c,
      props: l
    } = this, {
      onMove: u,
      options: {
        activationConstraint: f
      }
    } = l;
    if (!c)
      return;
    const h = (r = o1(o)) != null ? r : zr, v = dx(c, h);
    if (!s && f) {
      if (rb(f))
        return Km(v, f.tolerance) ? this.handleCancel() : void 0;
      if (nb(f))
        return f.tolerance != null && Km(v, f.tolerance) ? this.handleCancel() : Km(v, f.distance) ? this.handleStart() : void 0;
    }
    o.cancelable && o.preventDefault(), u(h);
  }
  handleEnd() {
    const {
      onEnd: o
    } = this.props;
    this.detach(), o();
  }
  handleCancel() {
    const {
      onCancel: o
    } = this.props;
    this.detach(), o();
  }
  handleKeydown(o) {
    o.code === et.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var o;
    (o = this.document.getSelection()) == null || o.removeAllRanges();
  }
}
const IS = {
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class Z1 extends Y1 {
  constructor(o) {
    const {
      event: r
    } = o, s = Fs(r.target);
    super(o, IS, s);
  }
}
Z1.activators = [{
  eventName: "onPointerDown",
  handler: ({
    nativeEvent: n
  }, {
    onActivation: o
  }) => !n.isPrimary || n.button !== 0 ? !1 : (o == null || o({
    event: n
  }), !0)
}];
const LS = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var m1;
(function(n) {
  n[n.RightClick = 2] = "RightClick";
})(m1 || (m1 = {}));
class MS extends Y1 {
  constructor(o) {
    super(o, LS, Fs(o.event.target));
  }
}
MS.activators = [{
  eventName: "onMouseDown",
  handler: ({
    nativeEvent: n
  }, {
    onActivation: o
  }) => n.button === m1.RightClick ? !1 : (o == null || o({
    event: n
  }), !0)
}];
const Vm = {
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class py extends Y1 {
  constructor(o) {
    super(o, Vm);
  }
  static setup() {
    return window.addEventListener(Vm.move.name, o, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(Vm.move.name, o);
    };
    function o() {
    }
  }
}
py.activators = [{
  eventName: "onTouchStart",
  handler: ({
    nativeEvent: n
  }, {
    onActivation: o
  }) => {
    const {
      touches: r
    } = n;
    return r.length > 1 ? !1 : (o == null || o({
      event: n
    }), !0);
  }
}];
function FS(n, {
  transform: o,
  ...r
}) {
  return n != null && n.length ? n.reduce((s, c) => c({
    transform: s,
    ...r
  }), o) : o;
}
const kS = [{
  sensor: Z1,
  options: {}
}, {
  sensor: q1,
  options: {}
}], WS = {
  current: {}
}, gy = /* @__PURE__ */ Un({
  ...zr,
  scaleX: 1,
  scaleY: 1
}), BS = /* @__PURE__ */ Ly(function({
  id: o,
  autoScroll: r = !0,
  announcements: s,
  children: c,
  sensors: l = kS,
  collisionDetection: u = XE,
  measuring: f,
  modifiers: h,
  screenReaderInstructions: v = ME,
  ...b
}) {
  var m, C, y, N, w, _, $;
  const R = x1(zE, void 0, UE), [O, P] = R, [I, M] = Te(() => ({
    type: null,
    event: null
  })), [W, U] = Te(!1), {
    draggable: {
      active: G,
      nodes: Z,
      translate: ne
    },
    droppable: {
      containers: oe
    }
  } = O, ye = G ? Z[G] : null, ee = de({
    initial: null,
    translated: null
  }), me = vt(() => {
    var Ye;
    return G != null ? {
      id: G,
      // It's possible for the active node to unmount while dragging
      data: (Ye = ye == null ? void 0 : ye.data) != null ? Ye : WS,
      rect: ee
    } : null;
  }, [G, ye]), ve = de(null), [De, we] = Te(null), [Y, le] = Te(null), ae = xu(b, Object.values(b)), he = Ku("DndDescribedBy", o), $e = vt(() => oe.getEnabled(), [oe]), {
    droppableRects: je,
    measureDroppableContainers: Ue,
    measuringScheduled: Le
  } = mS($e, {
    dragging: W,
    dependencies: [ne.x, ne.y],
    config: f == null ? void 0 : f.droppable
  }), lt = pS(Z, G), Me = Y ? o1(Y) : null, Be = fy(lt, (m = f == null || (C = f.draggable) == null ? void 0 : C.measure) != null ? m : Zl), ie = NS(lt ? lt.parentElement : null), We = de({
    active: null,
    activeNode: lt,
    collisionRect: null,
    collisions: null,
    droppableRects: je,
    draggableNodes: Z,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: oe,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), rt = oe.getNodeFor((y = We.current.over) == null ? void 0 : y.id), dn = OS({
    measure: f == null || (N = f.dragOverlay) == null ? void 0 : N.measure
  }), Ke = (w = dn.nodeRef.current) != null ? w : lt, ze = (_ = dn.rect) != null ? _ : Be, gn = de(null), bt = gn.current, Fn = ze === Be ? QE(Be, bt) : zr, ar = SS(Ke ? Ke.ownerDocument.defaultView : null), Ot = xS(G ? rt ?? Ke : null), Xe = _S(Ot), fn = FS(h, {
    transform: {
      x: ne.x - Fn.x,
      y: ne.y - Fn.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: Y,
    active: me,
    activeNodeRect: Be,
    containerNodeRect: ie,
    draggingNodeRect: ze,
    over: We.current.over,
    overlayNodeRect: dn.rect,
    scrollableAncestors: Ot,
    scrollableAncestorRects: Xe,
    windowRect: ar
  }), kn = Me ? Al(Me, ne) : null, ei = wS(Ot), xt = Al(fn, ei), Hn = ze ? eS(ze, fn) : null, Qt = me && Hn ? u({
    active: me,
    collisionRect: Hn,
    droppableContainers: $e,
    pointerCoordinates: kn
  }) : null, hn = iy(Qt, "id"), [pn, cr] = Te(null), wr = JE(fn, ($ = pn == null ? void 0 : pn.rect) != null ? $ : null, Be), lr = wt(
    (Ye, {
      sensor: ct,
      options: dt
    }) => {
      if (!ve.current)
        return;
      const Kt = Z[ve.current];
      if (!Kt)
        return;
      const jt = new ct({
        active: ve.current,
        activeNode: Kt,
        event: Ye.nativeEvent,
        options: dt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: We,
        onStart(Vt) {
          const Wn = ve.current;
          if (!Wn)
            return;
          const Kr = Z[Wn];
          if (!Kr)
            return;
          const {
            onDragStart: Mr
          } = ae.current, zo = {
            active: {
              id: Wn,
              data: Kr.data,
              rect: ee
            }
          };
          Ql(() => {
            P({
              type: St.DragStart,
              initialCoordinates: Vt,
              active: Wn
            }), M({
              type: St.DragStart,
              event: zo
            });
          }), Mr == null || Mr(zo);
        },
        onMove(Vt) {
          P({
            type: St.DragMove,
            coordinates: Vt
          });
        },
        onEnd: vn(St.DragEnd),
        onCancel: vn(St.DragCancel)
      });
      Ql(() => {
        we(jt), le(Ye.nativeEvent);
      });
      function vn(Vt) {
        return async function() {
          const {
            active: Kr,
            collisions: Mr,
            over: zo,
            scrollAdjustedTranslate: ws
          } = We.current;
          let Fr = null;
          if (Kr && ws) {
            const {
              cancelDrop: fr
            } = ae.current;
            Fr = {
              active: Kr,
              collisions: Mr,
              delta: ws,
              over: zo
            }, Vt === St.DragEnd && typeof fr == "function" && await Promise.resolve(fr(Fr)) && (Vt = St.DragCancel);
          }
          ve.current = null, Ql(() => {
            if (P({
              type: Vt
            }), cr(null), U(!1), we(null), le(null), Fr && M({
              type: Vt,
              event: Fr
            }), Fr) {
              const {
                onDragCancel: fr,
                onDragEnd: bs
              } = ae.current, kr = Vt === St.DragEnd ? bs : fr;
              kr == null || kr(Fr);
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Z]
  ), ur = wt((Ye, ct) => (dt, Kt) => {
    const jt = dt.nativeEvent;
    // No active draggable
    ve.current !== null || // Event has already been captured
    jt.dndKit || jt.defaultPrevented || Ye(dt, ct.options) === !0 && (jt.dndKit = {
      capturedBy: ct.sensor
    }, ve.current = Kt, lr(dt, ct));
  }, [lr]), dr = gS(l, ur);
  yS(l), be(() => {
    G != null && U(!0);
  }, [G]), be(() => {
    me || (gn.current = null), me && Be && !gn.current && (gn.current = Be);
  }, [Be, me]), be(
    () => {
      const {
        onDragMove: Ye
      } = ae.current, {
        active: ct,
        collisions: dt,
        over: Kt
      } = We.current;
      if (!ct)
        return;
      const jt = {
        active: ct,
        collisions: dt,
        delta: {
          x: xt.x,
          y: xt.y
        },
        over: Kt
      };
      M({
        type: St.DragMove,
        event: jt
      }), Ye == null || Ye(jt);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [xt.x, xt.y]
  ), be(
    () => {
      const {
        active: Ye,
        collisions: ct,
        droppableContainers: dt,
        scrollAdjustedTranslate: Kt
      } = We.current;
      if (!Ye || !ve.current || !Kt)
        return;
      const {
        onDragOver: jt
      } = ae.current, vn = dt.get(hn), Vt = vn && vn.rect.current ? {
        id: vn.id,
        rect: vn.rect.current,
        data: vn.data,
        disabled: vn.disabled
      } : null, Wn = {
        active: Ye,
        collisions: ct,
        delta: {
          x: Kt.x,
          y: Kt.y
        },
        over: Vt
      };
      Ql(() => {
        cr(Vt), M({
          type: St.DragOver,
          event: Wn
        }), jt == null || jt(Wn);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [hn]
  ), Wl(() => {
    We.current = {
      active: me,
      activeNode: lt,
      collisionRect: Hn,
      collisions: Qt,
      droppableRects: je,
      draggableNodes: Z,
      draggingNode: Ke,
      draggingNodeRect: ze,
      droppableContainers: oe,
      over: pn,
      scrollableAncestors: Ot,
      scrollAdjustedTranslate: xt
    }, ee.current = {
      initial: ze,
      translated: Hn
    };
  }, [me, lt, Qt, Hn, Z, Ke, ze, je, oe, pn, Ot, xt]), hS({
    ...Rt(),
    draggingRect: Hn,
    pointerCoordinates: kn,
    scrollableAncestors: Ot,
    scrollableAncestorRects: Xe
  });
  const ut = vt(() => ({
    active: me,
    activeNode: lt,
    activeNodeRect: Be,
    activatorEvent: Y,
    collisions: Qt,
    containerNodeRect: ie,
    dragOverlay: dn,
    draggableNodes: Z,
    droppableContainers: oe,
    droppableRects: je,
    over: pn,
    measureDroppableContainers: Ue,
    scrollableAncestors: Ot,
    scrollableAncestorRects: Xe,
    measuringScheduled: Le,
    windowRect: ar
  }), [me, lt, Be, Y, Qt, ie, dn, Z, oe, je, pn, Ue, Ot, Xe, Le, ar]), Bt = vt(() => ({
    activatorEvent: Y,
    activators: dr,
    active: me,
    activeNodeRect: Be,
    ariaDescribedById: {
      draggable: he
    },
    dispatch: P,
    draggableNodes: Z,
    over: pn,
    measureDroppableContainers: Ue
  }), [Y, dr, me, Be, P, he, Z, pn, Ue]);
  return at.createElement(oy.Provider, {
    value: I
  }, at.createElement(G1.Provider, {
    value: Bt
  }, at.createElement(BE.Provider, {
    value: ut
  }, at.createElement(gy.Provider, {
    value: wr
  }, c))), at.createElement(GE, {
    announcements: s,
    hiddenTextDescribedById: he,
    screenReaderInstructions: v
  }));
  function Rt() {
    const Ye = (De == null ? void 0 : De.autoScrollEnabled) === !1, ct = typeof r == "object" ? r.enabled === !1 : r === !1, dt = !Ye && !ct;
    return typeof r == "object" ? {
      ...r,
      enabled: dt
    } : {
      enabled: dt
    };
  }
}), US = /* @__PURE__ */ Un(null), ob = "button", zS = "Droppable";
function vy({
  id: n,
  data: o,
  disabled: r = !1,
  attributes: s
}) {
  const c = Ku(zS), {
    activators: l,
    activatorEvent: u,
    active: f,
    activeNodeRect: h,
    ariaDescribedById: v,
    draggableNodes: b,
    over: m
  } = Br(G1), {
    role: C = ob,
    roleDescription: y = "draggable",
    tabIndex: N = 0
  } = s ?? {}, w = (f == null ? void 0 : f.id) === n, _ = Br(w ? gy : US), [$, R] = T1(), O = CS(l, n), P = xu(o);
  Wl(
    () => (b[n] = {
      id: n,
      key: c,
      node: $,
      data: P
    }, () => {
      const M = b[n];
      M && M.key === c && delete b[n];
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [b, n]
  );
  const I = vt(() => ({
    role: C,
    tabIndex: N,
    "aria-pressed": w && C === ob ? !0 : void 0,
    "aria-roledescription": y,
    "aria-describedby": v.draggable
  }), [C, N, w, y, v.draggable]);
  return {
    active: f,
    activatorEvent: u,
    activeNodeRect: h,
    attributes: I,
    isDragging: w,
    listeners: r ? void 0 : O,
    node: $,
    over: m,
    setNodeRef: R,
    transform: _
  };
}
const HS = "Droppable", GS = {
  timeout: 25
};
function X1({
  data: n,
  disabled: o = !1,
  id: r,
  resizeObserverConfig: s
}) {
  const c = Ku(HS), {
    active: l,
    dispatch: u,
    over: f,
    measureDroppableContainers: h
  } = Br(G1), v = de(!1), b = de(null), m = de(null), {
    disabled: C,
    updateMeasurementsFor: y,
    timeout: N
  } = {
    ...GS,
    ...s
  }, w = xu(y ?? r), _ = wt(
    () => {
      if (!v.current) {
        v.current = !0;
        return;
      }
      m.current != null && clearTimeout(m.current), m.current = setTimeout(() => {
        h(typeof w.current == "string" ? [w.current] : w.current), m.current = null;
      }, N);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [N]
  ), $ = dy({
    onResize: _,
    disabled: C || !l
  }), R = wt((M, W) => {
    $ && (W && ($.unobserve(W), v.current = !1), M && $.observe(M));
  }, [$]), [O, P] = T1(R), I = xu(n);
  return be(() => {
    !$ || !O.current || ($.disconnect(), v.current = !1, $.observe(O.current));
  }, [O, $]), Wl(
    () => (u({
      type: St.RegisterDroppable,
      element: {
        id: r,
        key: c,
        disabled: o,
        node: O,
        rect: b,
        data: I
      }
    }), () => u({
      type: St.UnregisterDroppable,
      key: c,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), be(
    () => {
      u({
        type: St.SetDroppableDisabled,
        id: r,
        key: c,
        disabled: o
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [o]
  ), {
    active: l,
    rect: b,
    isOver: (f == null ? void 0 : f.id) === r,
    node: O,
    over: f,
    setNodeRef: P
  };
}
var Ou = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Ou.exports;
(function(n, o) {
  (function() {
    var r, s = "4.17.21", c = 200, l = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", f = "Invalid `variable` option passed into `_.template`", h = "__lodash_hash_undefined__", v = 500, b = "__lodash_placeholder__", m = 1, C = 2, y = 4, N = 1, w = 2, _ = 1, $ = 2, R = 4, O = 8, P = 16, I = 32, M = 64, W = 128, U = 256, G = 512, Z = 30, ne = "...", oe = 800, ye = 16, ee = 1, me = 2, ve = 3, De = 1 / 0, we = 9007199254740991, Y = 17976931348623157e292, le = 0 / 0, ae = 4294967295, he = ae - 1, $e = ae >>> 1, je = [
      ["ary", W],
      ["bind", _],
      ["bindKey", $],
      ["curry", O],
      ["curryRight", P],
      ["flip", G],
      ["partial", I],
      ["partialRight", M],
      ["rearg", U]
    ], Ue = "[object Arguments]", Le = "[object Array]", lt = "[object AsyncFunction]", Me = "[object Boolean]", Be = "[object Date]", ie = "[object DOMException]", We = "[object Error]", rt = "[object Function]", dn = "[object GeneratorFunction]", Ke = "[object Map]", ze = "[object Number]", gn = "[object Null]", bt = "[object Object]", Fn = "[object Promise]", ar = "[object Proxy]", Ot = "[object RegExp]", Xe = "[object Set]", fn = "[object String]", kn = "[object Symbol]", ei = "[object Undefined]", xt = "[object WeakMap]", Hn = "[object WeakSet]", Qt = "[object ArrayBuffer]", hn = "[object DataView]", pn = "[object Float32Array]", cr = "[object Float64Array]", wr = "[object Int8Array]", lr = "[object Int16Array]", ur = "[object Int32Array]", dr = "[object Uint8Array]", ut = "[object Uint8ClampedArray]", Bt = "[object Uint16Array]", Rt = "[object Uint32Array]", Ye = /\b__p \+= '';/g, ct = /\b(__p \+=) '' \+/g, dt = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Kt = /&(?:amp|lt|gt|quot|#39);/g, jt = /[&<>"']/g, vn = RegExp(Kt.source), Vt = RegExp(jt.source), Wn = /<%-([\s\S]+?)%>/g, Kr = /<%([\s\S]+?)%>/g, Mr = /<%=([\s\S]+?)%>/g, zo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ws = /^\w*$/, Fr = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, fr = /[\\^$.*+?()[\]{}|]/g, bs = RegExp(fr.source), kr = /^\s+/, td = /\s/, nd = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, rd = /\{\n\/\* \[wrapped with (.+)\] \*/, od = /,? & /, id = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, sd = /[()=,{}\[\]\/\s]/, ad = /\\(\\)?/g, cd = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Hs = /\w*$/, ld = /^[-+]0x[0-9a-f]+$/i, ud = /^0b[01]+$/i, dd = /^\[object .+?Constructor\]$/, fd = /^0o[0-7]+$/i, hd = /^(?:0|[1-9]\d*)$/, pd = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Vr = /($^)/, gd = /['\n\r\u2028\u2029\\]/g, qr = "\\ud800-\\udfff", vd = "\\u0300-\\u036f", md = "\\ufe20-\\ufe2f", wd = "\\u20d0-\\u20ff", Gs = vd + md + wd, Ks = "\\u2700-\\u27bf", Vs = "a-z\\xdf-\\xf6\\xf8-\\xff", bd = "\\xac\\xb1\\xd7\\xf7", xd = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", yd = "\\u2000-\\u206f", Cd = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", qs = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ys = "\\ufe0e\\ufe0f", Zs = bd + xd + yd + Cd, ti = "['’]", Nd = "[" + qr + "]", Xs = "[" + Zs + "]", Yr = "[" + Gs + "]", Js = "\\d+", _d = "[" + Ks + "]", Qs = "[" + Vs + "]", js = "[^" + qr + Zs + Js + Ks + Vs + qs + "]", ni = "\\ud83c[\\udffb-\\udfff]", $d = "(?:" + Yr + "|" + ni + ")", ea = "[^" + qr + "]", ri = "(?:\\ud83c[\\udde6-\\uddff]){2}", oi = "[\\ud800-\\udbff][\\udc00-\\udfff]", Gn = "[" + qs + "]", ta = "\\u200d", na = "(?:" + Qs + "|" + js + ")", Ed = "(?:" + Gn + "|" + js + ")", ra = "(?:" + ti + "(?:d|ll|m|re|s|t|ve))?", oa = "(?:" + ti + "(?:D|LL|M|RE|S|T|VE))?", ia = $d + "?", sa = "[" + Ys + "]?", Sd = "(?:" + ta + "(?:" + [ea, ri, oi].join("|") + ")" + sa + ia + ")*", Dd = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Od = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", aa = sa + ia + Sd, Rd = "(?:" + [_d, ri, oi].join("|") + ")" + aa, Pd = "(?:" + [ea + Yr + "?", Yr, ri, oi, Nd].join("|") + ")", Ad = RegExp(ti, "g"), Td = RegExp(Yr, "g"), ii = RegExp(ni + "(?=" + ni + ")|" + Pd + aa, "g"), Id = RegExp([
      Gn + "?" + Qs + "+" + ra + "(?=" + [Xs, Gn, "$"].join("|") + ")",
      Ed + "+" + oa + "(?=" + [Xs, Gn + na, "$"].join("|") + ")",
      Gn + "?" + na + "+" + ra,
      Gn + "+" + oa,
      Od,
      Dd,
      Js,
      Rd
    ].join("|"), "g"), Ld = RegExp("[" + ta + qr + Gs + Ys + "]"), Md = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Fd = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], kd = -1, Re = {};
    Re[pn] = Re[cr] = Re[wr] = Re[lr] = Re[ur] = Re[dr] = Re[ut] = Re[Bt] = Re[Rt] = !0, Re[Ue] = Re[Le] = Re[Qt] = Re[Me] = Re[hn] = Re[Be] = Re[We] = Re[rt] = Re[Ke] = Re[ze] = Re[bt] = Re[Ot] = Re[Xe] = Re[fn] = Re[xt] = !1;
    var Se = {};
    Se[Ue] = Se[Le] = Se[Qt] = Se[hn] = Se[Me] = Se[Be] = Se[pn] = Se[cr] = Se[wr] = Se[lr] = Se[ur] = Se[Ke] = Se[ze] = Se[bt] = Se[Ot] = Se[Xe] = Se[fn] = Se[kn] = Se[dr] = Se[ut] = Se[Bt] = Se[Rt] = !0, Se[We] = Se[rt] = Se[xt] = !1;
    var Wd = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, Bd = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Ud = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, zd = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Hd = parseFloat, Gd = parseInt, ca = typeof Wr == "object" && Wr && Wr.Object === Object && Wr, Kd = typeof self == "object" && self && self.Object === Object && self, Je = ca || Kd || Function("return this")(), si = o && !o.nodeType && o, Dn = si && !0 && n && !n.nodeType && n, la = Dn && Dn.exports === si, ai = la && ca.process, Pt = function() {
      try {
        var S = Dn && Dn.require && Dn.require("util").types;
        return S || ai && ai.binding && ai.binding("util");
      } catch {
      }
    }(), ua = Pt && Pt.isArrayBuffer, da = Pt && Pt.isDate, fa = Pt && Pt.isMap, ha = Pt && Pt.isRegExp, pa = Pt && Pt.isSet, ga = Pt && Pt.isTypedArray;
    function yt(S, L, A) {
      switch (A.length) {
        case 0:
          return S.call(L);
        case 1:
          return S.call(L, A[0]);
        case 2:
          return S.call(L, A[0], A[1]);
        case 3:
          return S.call(L, A[0], A[1], A[2]);
      }
      return S.apply(L, A);
    }
    function Vd(S, L, A, K) {
      for (var te = -1, xe = S == null ? 0 : S.length; ++te < xe; ) {
        var He = S[te];
        L(K, He, A(He), S);
      }
      return K;
    }
    function At(S, L) {
      for (var A = -1, K = S == null ? 0 : S.length; ++A < K && L(S[A], A, S) !== !1; )
        ;
      return S;
    }
    function qd(S, L) {
      for (var A = S == null ? 0 : S.length; A-- && L(S[A], A, S) !== !1; )
        ;
      return S;
    }
    function va(S, L) {
      for (var A = -1, K = S == null ? 0 : S.length; ++A < K; )
        if (!L(S[A], A, S))
          return !1;
      return !0;
    }
    function mn(S, L) {
      for (var A = -1, K = S == null ? 0 : S.length, te = 0, xe = []; ++A < K; ) {
        var He = S[A];
        L(He, A, S) && (xe[te++] = He);
      }
      return xe;
    }
    function Zr(S, L) {
      var A = S == null ? 0 : S.length;
      return !!A && Kn(S, L, 0) > -1;
    }
    function ci(S, L, A) {
      for (var K = -1, te = S == null ? 0 : S.length; ++K < te; )
        if (A(L, S[K]))
          return !0;
      return !1;
    }
    function Pe(S, L) {
      for (var A = -1, K = S == null ? 0 : S.length, te = Array(K); ++A < K; )
        te[A] = L(S[A], A, S);
      return te;
    }
    function wn(S, L) {
      for (var A = -1, K = L.length, te = S.length; ++A < K; )
        S[te + A] = L[A];
      return S;
    }
    function li(S, L, A, K) {
      var te = -1, xe = S == null ? 0 : S.length;
      for (K && xe && (A = S[++te]); ++te < xe; )
        A = L(A, S[te], te, S);
      return A;
    }
    function Yd(S, L, A, K) {
      var te = S == null ? 0 : S.length;
      for (K && te && (A = S[--te]); te--; )
        A = L(A, S[te], te, S);
      return A;
    }
    function ui(S, L) {
      for (var A = -1, K = S == null ? 0 : S.length; ++A < K; )
        if (L(S[A], A, S))
          return !0;
      return !1;
    }
    var Zd = di("length");
    function Xd(S) {
      return S.split("");
    }
    function Jd(S) {
      return S.match(id) || [];
    }
    function ma(S, L, A) {
      var K;
      return A(S, function(te, xe, He) {
        if (L(te, xe, He))
          return K = xe, !1;
      }), K;
    }
    function Xr(S, L, A, K) {
      for (var te = S.length, xe = A + (K ? 1 : -1); K ? xe-- : ++xe < te; )
        if (L(S[xe], xe, S))
          return xe;
      return -1;
    }
    function Kn(S, L, A) {
      return L === L ? uf(S, L, A) : Xr(S, wa, A);
    }
    function Qd(S, L, A, K) {
      for (var te = A - 1, xe = S.length; ++te < xe; )
        if (K(S[te], L))
          return te;
      return -1;
    }
    function wa(S) {
      return S !== S;
    }
    function ba(S, L) {
      var A = S == null ? 0 : S.length;
      return A ? hi(S, L) / A : le;
    }
    function di(S) {
      return function(L) {
        return L == null ? r : L[S];
      };
    }
    function fi(S) {
      return function(L) {
        return S == null ? r : S[L];
      };
    }
    function xa(S, L, A, K, te) {
      return te(S, function(xe, He, Ee) {
        A = K ? (K = !1, xe) : L(A, xe, He, Ee);
      }), A;
    }
    function jd(S, L) {
      var A = S.length;
      for (S.sort(L); A--; )
        S[A] = S[A].value;
      return S;
    }
    function hi(S, L) {
      for (var A, K = -1, te = S.length; ++K < te; ) {
        var xe = L(S[K]);
        xe !== r && (A = A === r ? xe : A + xe);
      }
      return A;
    }
    function pi(S, L) {
      for (var A = -1, K = Array(S); ++A < S; )
        K[A] = L(A);
      return K;
    }
    function ef(S, L) {
      return Pe(L, function(A) {
        return [A, S[A]];
      });
    }
    function ya(S) {
      return S && S.slice(0, $a(S) + 1).replace(kr, "");
    }
    function Ct(S) {
      return function(L) {
        return S(L);
      };
    }
    function gi(S, L) {
      return Pe(L, function(A) {
        return S[A];
      });
    }
    function br(S, L) {
      return S.has(L);
    }
    function Ca(S, L) {
      for (var A = -1, K = S.length; ++A < K && Kn(L, S[A], 0) > -1; )
        ;
      return A;
    }
    function Na(S, L) {
      for (var A = S.length; A-- && Kn(L, S[A], 0) > -1; )
        ;
      return A;
    }
    function tf(S, L) {
      for (var A = S.length, K = 0; A--; )
        S[A] === L && ++K;
      return K;
    }
    var nf = fi(Wd), rf = fi(Bd);
    function of(S) {
      return "\\" + zd[S];
    }
    function sf(S, L) {
      return S == null ? r : S[L];
    }
    function Vn(S) {
      return Ld.test(S);
    }
    function af(S) {
      return Md.test(S);
    }
    function cf(S) {
      for (var L, A = []; !(L = S.next()).done; )
        A.push(L.value);
      return A;
    }
    function vi(S) {
      var L = -1, A = Array(S.size);
      return S.forEach(function(K, te) {
        A[++L] = [te, K];
      }), A;
    }
    function _a(S, L) {
      return function(A) {
        return S(L(A));
      };
    }
    function bn(S, L) {
      for (var A = -1, K = S.length, te = 0, xe = []; ++A < K; ) {
        var He = S[A];
        (He === L || He === b) && (S[A] = b, xe[te++] = A);
      }
      return xe;
    }
    function Jr(S) {
      var L = -1, A = Array(S.size);
      return S.forEach(function(K) {
        A[++L] = K;
      }), A;
    }
    function lf(S) {
      var L = -1, A = Array(S.size);
      return S.forEach(function(K) {
        A[++L] = [K, K];
      }), A;
    }
    function uf(S, L, A) {
      for (var K = A - 1, te = S.length; ++K < te; )
        if (S[K] === L)
          return K;
      return -1;
    }
    function df(S, L, A) {
      for (var K = A + 1; K--; )
        if (S[K] === L)
          return K;
      return K;
    }
    function qn(S) {
      return Vn(S) ? hf(S) : Zd(S);
    }
    function Ut(S) {
      return Vn(S) ? pf(S) : Xd(S);
    }
    function $a(S) {
      for (var L = S.length; L-- && td.test(S.charAt(L)); )
        ;
      return L;
    }
    var ff = fi(Ud);
    function hf(S) {
      for (var L = ii.lastIndex = 0; ii.test(S); )
        ++L;
      return L;
    }
    function pf(S) {
      return S.match(ii) || [];
    }
    function gf(S) {
      return S.match(Id) || [];
    }
    var vf = function S(L) {
      L = L == null ? Je : Yn.defaults(Je.Object(), L, Yn.pick(Je, Fd));
      var A = L.Array, K = L.Date, te = L.Error, xe = L.Function, He = L.Math, Ee = L.Object, mi = L.RegExp, mf = L.String, Tt = L.TypeError, Qr = A.prototype, wf = xe.prototype, Zn = Ee.prototype, jr = L["__core-js_shared__"], eo = wf.toString, Ne = Zn.hasOwnProperty, bf = 0, Ea = function() {
        var e = /[^.]+$/.exec(jr && jr.keys && jr.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), to = Zn.toString, xf = eo.call(Ee), yf = Je._, Cf = mi(
        "^" + eo.call(Ne).replace(fr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), no = la ? L.Buffer : r, xn = L.Symbol, ro = L.Uint8Array, Sa = no ? no.allocUnsafe : r, oo = _a(Ee.getPrototypeOf, Ee), Da = Ee.create, Oa = Zn.propertyIsEnumerable, io = Qr.splice, Ra = xn ? xn.isConcatSpreadable : r, xr = xn ? xn.iterator : r, On = xn ? xn.toStringTag : r, so = function() {
        try {
          var e = In(Ee, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), Nf = L.clearTimeout !== Je.clearTimeout && L.clearTimeout, _f = K && K.now !== Je.Date.now && K.now, $f = L.setTimeout !== Je.setTimeout && L.setTimeout, ao = He.ceil, co = He.floor, wi = Ee.getOwnPropertySymbols, Ef = no ? no.isBuffer : r, Pa = L.isFinite, Sf = Qr.join, Df = _a(Ee.keys, Ee), Ge = He.max, tt = He.min, Of = K.now, Rf = L.parseInt, Aa = He.random, Pf = Qr.reverse, bi = In(L, "DataView"), yr = In(L, "Map"), xi = In(L, "Promise"), Xn = In(L, "Set"), Cr = In(L, "WeakMap"), Nr = In(Ee, "create"), lo = Cr && new Cr(), Jn = {}, Af = Ln(bi), Tf = Ln(yr), If = Ln(xi), Lf = Ln(Xn), Mf = Ln(Cr), uo = xn ? xn.prototype : r, _r = uo ? uo.valueOf : r, Ta = uo ? uo.toString : r;
      function p(e) {
        if (Ie(e) && !re(e) && !(e instanceof pe)) {
          if (e instanceof It)
            return e;
          if (Ne.call(e, "__wrapped__"))
            return Ic(e);
        }
        return new It(e);
      }
      var Qn = function() {
        function e() {
        }
        return function(t) {
          if (!Ae(t))
            return {};
          if (Da)
            return Da(t);
          e.prototype = t;
          var i = new e();
          return e.prototype = r, i;
        };
      }();
      function fo() {
      }
      function It(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = r;
      }
      p.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Wn,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Kr,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Mr,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: p
        }
      }, p.prototype = fo.prototype, p.prototype.constructor = p, It.prototype = Qn(fo.prototype), It.prototype.constructor = It;
      function pe(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ae, this.__views__ = [];
      }
      function Ff() {
        var e = new pe(this.__wrapped__);
        return e.__actions__ = ft(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = ft(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = ft(this.__views__), e;
      }
      function kf() {
        if (this.__filtered__) {
          var e = new pe(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function Wf() {
        var e = this.__wrapped__.value(), t = this.__dir__, i = re(e), a = t < 0, d = i ? e.length : 0, g = Jh(0, d, this.__views__), x = g.start, E = g.end, D = E - x, F = a ? E : x - 1, k = this.__iteratees__, B = k.length, H = 0, V = tt(D, this.__takeCount__);
        if (!i || !a && d == D && V == D)
          return rc(e, this.__actions__);
        var J = [];
        e:
          for (; D-- && H < V; ) {
            F += t;
            for (var ce = -1, Q = e[F]; ++ce < B; ) {
              var fe = k[ce], ge = fe.iteratee, $t = fe.type, st = ge(Q);
              if ($t == me)
                Q = st;
              else if (!st) {
                if ($t == ee)
                  continue e;
                break e;
              }
            }
            J[H++] = Q;
          }
        return J;
      }
      pe.prototype = Qn(fo.prototype), pe.prototype.constructor = pe;
      function Rn(e) {
        var t = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++t < i; ) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      function Bf() {
        this.__data__ = Nr ? Nr(null) : {}, this.size = 0;
      }
      function Uf(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      function zf(e) {
        var t = this.__data__;
        if (Nr) {
          var i = t[e];
          return i === h ? r : i;
        }
        return Ne.call(t, e) ? t[e] : r;
      }
      function Hf(e) {
        var t = this.__data__;
        return Nr ? t[e] !== r : Ne.call(t, e);
      }
      function Gf(e, t) {
        var i = this.__data__;
        return this.size += this.has(e) ? 0 : 1, i[e] = Nr && t === r ? h : t, this;
      }
      Rn.prototype.clear = Bf, Rn.prototype.delete = Uf, Rn.prototype.get = zf, Rn.prototype.has = Hf, Rn.prototype.set = Gf;
      function en(e) {
        var t = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++t < i; ) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      function Kf() {
        this.__data__ = [], this.size = 0;
      }
      function Vf(e) {
        var t = this.__data__, i = ho(t, e);
        if (i < 0)
          return !1;
        var a = t.length - 1;
        return i == a ? t.pop() : io.call(t, i, 1), --this.size, !0;
      }
      function qf(e) {
        var t = this.__data__, i = ho(t, e);
        return i < 0 ? r : t[i][1];
      }
      function Yf(e) {
        return ho(this.__data__, e) > -1;
      }
      function Zf(e, t) {
        var i = this.__data__, a = ho(i, e);
        return a < 0 ? (++this.size, i.push([e, t])) : i[a][1] = t, this;
      }
      en.prototype.clear = Kf, en.prototype.delete = Vf, en.prototype.get = qf, en.prototype.has = Yf, en.prototype.set = Zf;
      function tn(e) {
        var t = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++t < i; ) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      function Xf() {
        this.size = 0, this.__data__ = {
          hash: new Rn(),
          map: new (yr || en)(),
          string: new Rn()
        };
      }
      function Jf(e) {
        var t = $o(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      function Qf(e) {
        return $o(this, e).get(e);
      }
      function jf(e) {
        return $o(this, e).has(e);
      }
      function eh(e, t) {
        var i = $o(this, e), a = i.size;
        return i.set(e, t), this.size += i.size == a ? 0 : 1, this;
      }
      tn.prototype.clear = Xf, tn.prototype.delete = Jf, tn.prototype.get = Qf, tn.prototype.has = jf, tn.prototype.set = eh;
      function Pn(e) {
        var t = -1, i = e == null ? 0 : e.length;
        for (this.__data__ = new tn(); ++t < i; )
          this.add(e[t]);
      }
      function th(e) {
        return this.__data__.set(e, h), this;
      }
      function nh(e) {
        return this.__data__.has(e);
      }
      Pn.prototype.add = Pn.prototype.push = th, Pn.prototype.has = nh;
      function zt(e) {
        var t = this.__data__ = new en(e);
        this.size = t.size;
      }
      function rh() {
        this.__data__ = new en(), this.size = 0;
      }
      function oh(e) {
        var t = this.__data__, i = t.delete(e);
        return this.size = t.size, i;
      }
      function ih(e) {
        return this.__data__.get(e);
      }
      function sh(e) {
        return this.__data__.has(e);
      }
      function ah(e, t) {
        var i = this.__data__;
        if (i instanceof en) {
          var a = i.__data__;
          if (!yr || a.length < c - 1)
            return a.push([e, t]), this.size = ++i.size, this;
          i = this.__data__ = new tn(a);
        }
        return i.set(e, t), this.size = i.size, this;
      }
      zt.prototype.clear = rh, zt.prototype.delete = oh, zt.prototype.get = ih, zt.prototype.has = sh, zt.prototype.set = ah;
      function Ia(e, t) {
        var i = re(e), a = !i && Mn(e), d = !i && !a && $n(e), g = !i && !a && !d && nr(e), x = i || a || d || g, E = x ? pi(e.length, mf) : [], D = E.length;
        for (var F in e)
          (t || Ne.call(e, F)) && !(x && // Safari 9 has enumerable `arguments.length` in strict mode.
          (F == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          d && (F == "offset" || F == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          g && (F == "buffer" || F == "byteLength" || F == "byteOffset") || // Skip index properties.
          sn(F, D))) && E.push(F);
        return E;
      }
      function La(e) {
        var t = e.length;
        return t ? e[Pi(0, t - 1)] : r;
      }
      function ch(e, t) {
        return Eo(ft(e), An(t, 0, e.length));
      }
      function lh(e) {
        return Eo(ft(e));
      }
      function yi(e, t, i) {
        (i !== r && !Ht(e[t], i) || i === r && !(t in e)) && nn(e, t, i);
      }
      function $r(e, t, i) {
        var a = e[t];
        (!(Ne.call(e, t) && Ht(a, i)) || i === r && !(t in e)) && nn(e, t, i);
      }
      function ho(e, t) {
        for (var i = e.length; i--; )
          if (Ht(e[i][0], t))
            return i;
        return -1;
      }
      function uh(e, t, i, a) {
        return yn(e, function(d, g, x) {
          t(a, d, i(d), x);
        }), a;
      }
      function Ma(e, t) {
        return e && Yt(t, qe(t), e);
      }
      function dh(e, t) {
        return e && Yt(t, pt(t), e);
      }
      function nn(e, t, i) {
        t == "__proto__" && so ? so(e, t, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : e[t] = i;
      }
      function Ci(e, t) {
        for (var i = -1, a = t.length, d = A(a), g = e == null; ++i < a; )
          d[i] = g ? r : ns(e, t[i]);
        return d;
      }
      function An(e, t, i) {
        return e === e && (i !== r && (e = e <= i ? e : i), t !== r && (e = e >= t ? e : t)), e;
      }
      function Lt(e, t, i, a, d, g) {
        var x, E = t & m, D = t & C, F = t & y;
        if (i && (x = d ? i(e, a, d, g) : i(e)), x !== r)
          return x;
        if (!Ae(e))
          return e;
        var k = re(e);
        if (k) {
          if (x = jh(e), !E)
            return ft(e, x);
        } else {
          var B = nt(e), H = B == rt || B == dn;
          if ($n(e))
            return sc(e, E);
          if (B == bt || B == Ue || H && !d) {
            if (x = D || H ? {} : $c(e), !E)
              return D ? zh(e, dh(x, e)) : Uh(e, Ma(x, e));
          } else {
            if (!Se[B])
              return d ? e : {};
            x = ep(e, B, E);
          }
        }
        g || (g = new zt());
        var V = g.get(e);
        if (V)
          return V;
        g.set(e, x), el(e) ? e.forEach(function(Q) {
          x.add(Lt(Q, t, i, Q, e, g));
        }) : Qc(e) && e.forEach(function(Q, fe) {
          x.set(fe, Lt(Q, t, i, fe, e, g));
        });
        var J = F ? D ? zi : Ui : D ? pt : qe, ce = k ? r : J(e);
        return At(ce || e, function(Q, fe) {
          ce && (fe = Q, Q = e[fe]), $r(x, fe, Lt(Q, t, i, fe, e, g));
        }), x;
      }
      function fh(e) {
        var t = qe(e);
        return function(i) {
          return Fa(i, e, t);
        };
      }
      function Fa(e, t, i) {
        var a = i.length;
        if (e == null)
          return !a;
        for (e = Ee(e); a--; ) {
          var d = i[a], g = t[d], x = e[d];
          if (x === r && !(d in e) || !g(x))
            return !1;
        }
        return !0;
      }
      function ka(e, t, i) {
        if (typeof e != "function")
          throw new Tt(u);
        return Ar(function() {
          e.apply(r, i);
        }, t);
      }
      function Er(e, t, i, a) {
        var d = -1, g = Zr, x = !0, E = e.length, D = [], F = t.length;
        if (!E)
          return D;
        i && (t = Pe(t, Ct(i))), a ? (g = ci, x = !1) : t.length >= c && (g = br, x = !1, t = new Pn(t));
        e:
          for (; ++d < E; ) {
            var k = e[d], B = i == null ? k : i(k);
            if (k = a || k !== 0 ? k : 0, x && B === B) {
              for (var H = F; H--; )
                if (t[H] === B)
                  continue e;
              D.push(k);
            } else
              g(t, B, a) || D.push(k);
          }
        return D;
      }
      var yn = dc(qt), Wa = dc(_i, !0);
      function hh(e, t) {
        var i = !0;
        return yn(e, function(a, d, g) {
          return i = !!t(a, d, g), i;
        }), i;
      }
      function po(e, t, i) {
        for (var a = -1, d = e.length; ++a < d; ) {
          var g = e[a], x = t(g);
          if (x != null && (E === r ? x === x && !_t(x) : i(x, E)))
            var E = x, D = g;
        }
        return D;
      }
      function ph(e, t, i, a) {
        var d = e.length;
        for (i = se(i), i < 0 && (i = -i > d ? 0 : d + i), a = a === r || a > d ? d : se(a), a < 0 && (a += d), a = i > a ? 0 : nl(a); i < a; )
          e[i++] = t;
        return e;
      }
      function Ba(e, t) {
        var i = [];
        return yn(e, function(a, d, g) {
          t(a, d, g) && i.push(a);
        }), i;
      }
      function Qe(e, t, i, a, d) {
        var g = -1, x = e.length;
        for (i || (i = np), d || (d = []); ++g < x; ) {
          var E = e[g];
          t > 0 && i(E) ? t > 1 ? Qe(E, t - 1, i, a, d) : wn(d, E) : a || (d[d.length] = E);
        }
        return d;
      }
      var Ni = fc(), Ua = fc(!0);
      function qt(e, t) {
        return e && Ni(e, t, qe);
      }
      function _i(e, t) {
        return e && Ua(e, t, qe);
      }
      function go(e, t) {
        return mn(t, function(i) {
          return an(e[i]);
        });
      }
      function Tn(e, t) {
        t = Nn(t, e);
        for (var i = 0, a = t.length; e != null && i < a; )
          e = e[Zt(t[i++])];
        return i && i == a ? e : r;
      }
      function za(e, t, i) {
        var a = t(e);
        return re(e) ? a : wn(a, i(e));
      }
      function ot(e) {
        return e == null ? e === r ? ei : gn : On && On in Ee(e) ? Xh(e) : lp(e);
      }
      function $i(e, t) {
        return e > t;
      }
      function gh(e, t) {
        return e != null && Ne.call(e, t);
      }
      function vh(e, t) {
        return e != null && t in Ee(e);
      }
      function mh(e, t, i) {
        return e >= tt(t, i) && e < Ge(t, i);
      }
      function Ei(e, t, i) {
        for (var a = i ? ci : Zr, d = e[0].length, g = e.length, x = g, E = A(g), D = 1 / 0, F = []; x--; ) {
          var k = e[x];
          x && t && (k = Pe(k, Ct(t))), D = tt(k.length, D), E[x] = !i && (t || d >= 120 && k.length >= 120) ? new Pn(x && k) : r;
        }
        k = e[0];
        var B = -1, H = E[0];
        e:
          for (; ++B < d && F.length < D; ) {
            var V = k[B], J = t ? t(V) : V;
            if (V = i || V !== 0 ? V : 0, !(H ? br(H, J) : a(F, J, i))) {
              for (x = g; --x; ) {
                var ce = E[x];
                if (!(ce ? br(ce, J) : a(e[x], J, i)))
                  continue e;
              }
              H && H.push(J), F.push(V);
            }
          }
        return F;
      }
      function wh(e, t, i, a) {
        return qt(e, function(d, g, x) {
          t(a, i(d), g, x);
        }), a;
      }
      function Sr(e, t, i) {
        t = Nn(t, e), e = Oc(e, t);
        var a = e == null ? e : e[Zt(Ft(t))];
        return a == null ? r : yt(a, e, i);
      }
      function Ha(e) {
        return Ie(e) && ot(e) == Ue;
      }
      function bh(e) {
        return Ie(e) && ot(e) == Qt;
      }
      function xh(e) {
        return Ie(e) && ot(e) == Be;
      }
      function Dr(e, t, i, a, d) {
        return e === t ? !0 : e == null || t == null || !Ie(e) && !Ie(t) ? e !== e && t !== t : yh(e, t, i, a, Dr, d);
      }
      function yh(e, t, i, a, d, g) {
        var x = re(e), E = re(t), D = x ? Le : nt(e), F = E ? Le : nt(t);
        D = D == Ue ? bt : D, F = F == Ue ? bt : F;
        var k = D == bt, B = F == bt, H = D == F;
        if (H && $n(e)) {
          if (!$n(t))
            return !1;
          x = !0, k = !1;
        }
        if (H && !k)
          return g || (g = new zt()), x || nr(e) ? Cc(e, t, i, a, d, g) : Yh(e, t, D, i, a, d, g);
        if (!(i & N)) {
          var V = k && Ne.call(e, "__wrapped__"), J = B && Ne.call(t, "__wrapped__");
          if (V || J) {
            var ce = V ? e.value() : e, Q = J ? t.value() : t;
            return g || (g = new zt()), d(ce, Q, i, a, g);
          }
        }
        return H ? (g || (g = new zt()), Zh(e, t, i, a, d, g)) : !1;
      }
      function Ch(e) {
        return Ie(e) && nt(e) == Ke;
      }
      function Si(e, t, i, a) {
        var d = i.length, g = d, x = !a;
        if (e == null)
          return !g;
        for (e = Ee(e); d--; ) {
          var E = i[d];
          if (x && E[2] ? E[1] !== e[E[0]] : !(E[0] in e))
            return !1;
        }
        for (; ++d < g; ) {
          E = i[d];
          var D = E[0], F = e[D], k = E[1];
          if (x && E[2]) {
            if (F === r && !(D in e))
              return !1;
          } else {
            var B = new zt();
            if (a)
              var H = a(F, k, D, e, t, B);
            if (!(H === r ? Dr(k, F, N | w, a, B) : H))
              return !1;
          }
        }
        return !0;
      }
      function Ga(e) {
        if (!Ae(e) || op(e))
          return !1;
        var t = an(e) ? Cf : dd;
        return t.test(Ln(e));
      }
      function Nh(e) {
        return Ie(e) && ot(e) == Ot;
      }
      function _h(e) {
        return Ie(e) && nt(e) == Xe;
      }
      function $h(e) {
        return Ie(e) && Ao(e.length) && !!Re[ot(e)];
      }
      function Ka(e) {
        return typeof e == "function" ? e : e == null ? gt : typeof e == "object" ? re(e) ? Ya(e[0], e[1]) : qa(e) : hl(e);
      }
      function Di(e) {
        if (!Pr(e))
          return Df(e);
        var t = [];
        for (var i in Ee(e))
          Ne.call(e, i) && i != "constructor" && t.push(i);
        return t;
      }
      function Eh(e) {
        if (!Ae(e))
          return cp(e);
        var t = Pr(e), i = [];
        for (var a in e)
          a == "constructor" && (t || !Ne.call(e, a)) || i.push(a);
        return i;
      }
      function Oi(e, t) {
        return e < t;
      }
      function Va(e, t) {
        var i = -1, a = ht(e) ? A(e.length) : [];
        return yn(e, function(d, g, x) {
          a[++i] = t(d, g, x);
        }), a;
      }
      function qa(e) {
        var t = Gi(e);
        return t.length == 1 && t[0][2] ? Sc(t[0][0], t[0][1]) : function(i) {
          return i === e || Si(i, e, t);
        };
      }
      function Ya(e, t) {
        return Vi(e) && Ec(t) ? Sc(Zt(e), t) : function(i) {
          var a = ns(i, e);
          return a === r && a === t ? rs(i, e) : Dr(t, a, N | w);
        };
      }
      function vo(e, t, i, a, d) {
        e !== t && Ni(t, function(g, x) {
          if (d || (d = new zt()), Ae(g))
            Sh(e, t, x, i, vo, a, d);
          else {
            var E = a ? a(Yi(e, x), g, x + "", e, t, d) : r;
            E === r && (E = g), yi(e, x, E);
          }
        }, pt);
      }
      function Sh(e, t, i, a, d, g, x) {
        var E = Yi(e, i), D = Yi(t, i), F = x.get(D);
        if (F) {
          yi(e, i, F);
          return;
        }
        var k = g ? g(E, D, i + "", e, t, x) : r, B = k === r;
        if (B) {
          var H = re(D), V = !H && $n(D), J = !H && !V && nr(D);
          k = D, H || V || J ? re(E) ? k = E : Fe(E) ? k = ft(E) : V ? (B = !1, k = sc(D, !0)) : J ? (B = !1, k = ac(D, !0)) : k = [] : Tr(D) || Mn(D) ? (k = E, Mn(E) ? k = rl(E) : (!Ae(E) || an(E)) && (k = $c(D))) : B = !1;
        }
        B && (x.set(D, k), d(k, D, a, g, x), x.delete(D)), yi(e, i, k);
      }
      function Za(e, t) {
        var i = e.length;
        if (i)
          return t += t < 0 ? i : 0, sn(t, i) ? e[t] : r;
      }
      function Xa(e, t, i) {
        t.length ? t = Pe(t, function(g) {
          return re(g) ? function(x) {
            return Tn(x, g.length === 1 ? g[0] : g);
          } : g;
        }) : t = [gt];
        var a = -1;
        t = Pe(t, Ct(X()));
        var d = Va(e, function(g, x, E) {
          var D = Pe(t, function(F) {
            return F(g);
          });
          return { criteria: D, index: ++a, value: g };
        });
        return jd(d, function(g, x) {
          return Bh(g, x, i);
        });
      }
      function Dh(e, t) {
        return Ja(e, t, function(i, a) {
          return rs(e, a);
        });
      }
      function Ja(e, t, i) {
        for (var a = -1, d = t.length, g = {}; ++a < d; ) {
          var x = t[a], E = Tn(e, x);
          i(E, x) && Or(g, Nn(x, e), E);
        }
        return g;
      }
      function Oh(e) {
        return function(t) {
          return Tn(t, e);
        };
      }
      function Ri(e, t, i, a) {
        var d = a ? Qd : Kn, g = -1, x = t.length, E = e;
        for (e === t && (t = ft(t)), i && (E = Pe(e, Ct(i))); ++g < x; )
          for (var D = 0, F = t[g], k = i ? i(F) : F; (D = d(E, k, D, a)) > -1; )
            E !== e && io.call(E, D, 1), io.call(e, D, 1);
        return e;
      }
      function Qa(e, t) {
        for (var i = e ? t.length : 0, a = i - 1; i--; ) {
          var d = t[i];
          if (i == a || d !== g) {
            var g = d;
            sn(d) ? io.call(e, d, 1) : Ii(e, d);
          }
        }
        return e;
      }
      function Pi(e, t) {
        return e + co(Aa() * (t - e + 1));
      }
      function Rh(e, t, i, a) {
        for (var d = -1, g = Ge(ao((t - e) / (i || 1)), 0), x = A(g); g--; )
          x[a ? g : ++d] = e, e += i;
        return x;
      }
      function Ai(e, t) {
        var i = "";
        if (!e || t < 1 || t > we)
          return i;
        do
          t % 2 && (i += e), t = co(t / 2), t && (e += e);
        while (t);
        return i;
      }
      function ue(e, t) {
        return Zi(Dc(e, t, gt), e + "");
      }
      function Ph(e) {
        return La(rr(e));
      }
      function Ah(e, t) {
        var i = rr(e);
        return Eo(i, An(t, 0, i.length));
      }
      function Or(e, t, i, a) {
        if (!Ae(e))
          return e;
        t = Nn(t, e);
        for (var d = -1, g = t.length, x = g - 1, E = e; E != null && ++d < g; ) {
          var D = Zt(t[d]), F = i;
          if (D === "__proto__" || D === "constructor" || D === "prototype")
            return e;
          if (d != x) {
            var k = E[D];
            F = a ? a(k, D, E) : r, F === r && (F = Ae(k) ? k : sn(t[d + 1]) ? [] : {});
          }
          $r(E, D, F), E = E[D];
        }
        return e;
      }
      var ja = lo ? function(e, t) {
        return lo.set(e, t), e;
      } : gt, Th = so ? function(e, t) {
        return so(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: is(t),
          writable: !0
        });
      } : gt;
      function Ih(e) {
        return Eo(rr(e));
      }
      function Mt(e, t, i) {
        var a = -1, d = e.length;
        t < 0 && (t = -t > d ? 0 : d + t), i = i > d ? d : i, i < 0 && (i += d), d = t > i ? 0 : i - t >>> 0, t >>>= 0;
        for (var g = A(d); ++a < d; )
          g[a] = e[a + t];
        return g;
      }
      function Lh(e, t) {
        var i;
        return yn(e, function(a, d, g) {
          return i = t(a, d, g), !i;
        }), !!i;
      }
      function mo(e, t, i) {
        var a = 0, d = e == null ? a : e.length;
        if (typeof t == "number" && t === t && d <= $e) {
          for (; a < d; ) {
            var g = a + d >>> 1, x = e[g];
            x !== null && !_t(x) && (i ? x <= t : x < t) ? a = g + 1 : d = g;
          }
          return d;
        }
        return Ti(e, t, gt, i);
      }
      function Ti(e, t, i, a) {
        var d = 0, g = e == null ? 0 : e.length;
        if (g === 0)
          return 0;
        t = i(t);
        for (var x = t !== t, E = t === null, D = _t(t), F = t === r; d < g; ) {
          var k = co((d + g) / 2), B = i(e[k]), H = B !== r, V = B === null, J = B === B, ce = _t(B);
          if (x)
            var Q = a || J;
          else
            F ? Q = J && (a || H) : E ? Q = J && H && (a || !V) : D ? Q = J && H && !V && (a || !ce) : V || ce ? Q = !1 : Q = a ? B <= t : B < t;
          Q ? d = k + 1 : g = k;
        }
        return tt(g, he);
      }
      function ec(e, t) {
        for (var i = -1, a = e.length, d = 0, g = []; ++i < a; ) {
          var x = e[i], E = t ? t(x) : x;
          if (!i || !Ht(E, D)) {
            var D = E;
            g[d++] = x === 0 ? 0 : x;
          }
        }
        return g;
      }
      function tc(e) {
        return typeof e == "number" ? e : _t(e) ? le : +e;
      }
      function Nt(e) {
        if (typeof e == "string")
          return e;
        if (re(e))
          return Pe(e, Nt) + "";
        if (_t(e))
          return Ta ? Ta.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -De ? "-0" : t;
      }
      function Cn(e, t, i) {
        var a = -1, d = Zr, g = e.length, x = !0, E = [], D = E;
        if (i)
          x = !1, d = ci;
        else if (g >= c) {
          var F = t ? null : Vh(e);
          if (F)
            return Jr(F);
          x = !1, d = br, D = new Pn();
        } else
          D = t ? [] : E;
        e:
          for (; ++a < g; ) {
            var k = e[a], B = t ? t(k) : k;
            if (k = i || k !== 0 ? k : 0, x && B === B) {
              for (var H = D.length; H--; )
                if (D[H] === B)
                  continue e;
              t && D.push(B), E.push(k);
            } else
              d(D, B, i) || (D !== E && D.push(B), E.push(k));
          }
        return E;
      }
      function Ii(e, t) {
        return t = Nn(t, e), e = Oc(e, t), e == null || delete e[Zt(Ft(t))];
      }
      function nc(e, t, i, a) {
        return Or(e, t, i(Tn(e, t)), a);
      }
      function wo(e, t, i, a) {
        for (var d = e.length, g = a ? d : -1; (a ? g-- : ++g < d) && t(e[g], g, e); )
          ;
        return i ? Mt(e, a ? 0 : g, a ? g + 1 : d) : Mt(e, a ? g + 1 : 0, a ? d : g);
      }
      function rc(e, t) {
        var i = e;
        return i instanceof pe && (i = i.value()), li(t, function(a, d) {
          return d.func.apply(d.thisArg, wn([a], d.args));
        }, i);
      }
      function Li(e, t, i) {
        var a = e.length;
        if (a < 2)
          return a ? Cn(e[0]) : [];
        for (var d = -1, g = A(a); ++d < a; )
          for (var x = e[d], E = -1; ++E < a; )
            E != d && (g[d] = Er(g[d] || x, e[E], t, i));
        return Cn(Qe(g, 1), t, i);
      }
      function oc(e, t, i) {
        for (var a = -1, d = e.length, g = t.length, x = {}; ++a < d; ) {
          var E = a < g ? t[a] : r;
          i(x, e[a], E);
        }
        return x;
      }
      function Mi(e) {
        return Fe(e) ? e : [];
      }
      function Fi(e) {
        return typeof e == "function" ? e : gt;
      }
      function Nn(e, t) {
        return re(e) ? e : Vi(e, t) ? [e] : Tc(Ce(e));
      }
      var Mh = ue;
      function _n(e, t, i) {
        var a = e.length;
        return i = i === r ? a : i, !t && i >= a ? e : Mt(e, t, i);
      }
      var ic = Nf || function(e) {
        return Je.clearTimeout(e);
      };
      function sc(e, t) {
        if (t)
          return e.slice();
        var i = e.length, a = Sa ? Sa(i) : new e.constructor(i);
        return e.copy(a), a;
      }
      function ki(e) {
        var t = new e.constructor(e.byteLength);
        return new ro(t).set(new ro(e)), t;
      }
      function Fh(e, t) {
        var i = t ? ki(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.byteLength);
      }
      function kh(e) {
        var t = new e.constructor(e.source, Hs.exec(e));
        return t.lastIndex = e.lastIndex, t;
      }
      function Wh(e) {
        return _r ? Ee(_r.call(e)) : {};
      }
      function ac(e, t) {
        var i = t ? ki(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.length);
      }
      function cc(e, t) {
        if (e !== t) {
          var i = e !== r, a = e === null, d = e === e, g = _t(e), x = t !== r, E = t === null, D = t === t, F = _t(t);
          if (!E && !F && !g && e > t || g && x && D && !E && !F || a && x && D || !i && D || !d)
            return 1;
          if (!a && !g && !F && e < t || F && i && d && !a && !g || E && i && d || !x && d || !D)
            return -1;
        }
        return 0;
      }
      function Bh(e, t, i) {
        for (var a = -1, d = e.criteria, g = t.criteria, x = d.length, E = i.length; ++a < x; ) {
          var D = cc(d[a], g[a]);
          if (D) {
            if (a >= E)
              return D;
            var F = i[a];
            return D * (F == "desc" ? -1 : 1);
          }
        }
        return e.index - t.index;
      }
      function lc(e, t, i, a) {
        for (var d = -1, g = e.length, x = i.length, E = -1, D = t.length, F = Ge(g - x, 0), k = A(D + F), B = !a; ++E < D; )
          k[E] = t[E];
        for (; ++d < x; )
          (B || d < g) && (k[i[d]] = e[d]);
        for (; F--; )
          k[E++] = e[d++];
        return k;
      }
      function uc(e, t, i, a) {
        for (var d = -1, g = e.length, x = -1, E = i.length, D = -1, F = t.length, k = Ge(g - E, 0), B = A(k + F), H = !a; ++d < k; )
          B[d] = e[d];
        for (var V = d; ++D < F; )
          B[V + D] = t[D];
        for (; ++x < E; )
          (H || d < g) && (B[V + i[x]] = e[d++]);
        return B;
      }
      function ft(e, t) {
        var i = -1, a = e.length;
        for (t || (t = A(a)); ++i < a; )
          t[i] = e[i];
        return t;
      }
      function Yt(e, t, i, a) {
        var d = !i;
        i || (i = {});
        for (var g = -1, x = t.length; ++g < x; ) {
          var E = t[g], D = a ? a(i[E], e[E], E, i, e) : r;
          D === r && (D = e[E]), d ? nn(i, E, D) : $r(i, E, D);
        }
        return i;
      }
      function Uh(e, t) {
        return Yt(e, Ki(e), t);
      }
      function zh(e, t) {
        return Yt(e, Nc(e), t);
      }
      function bo(e, t) {
        return function(i, a) {
          var d = re(i) ? Vd : uh, g = t ? t() : {};
          return d(i, e, X(a, 2), g);
        };
      }
      function jn(e) {
        return ue(function(t, i) {
          var a = -1, d = i.length, g = d > 1 ? i[d - 1] : r, x = d > 2 ? i[2] : r;
          for (g = e.length > 3 && typeof g == "function" ? (d--, g) : r, x && it(i[0], i[1], x) && (g = d < 3 ? r : g, d = 1), t = Ee(t); ++a < d; ) {
            var E = i[a];
            E && e(t, E, a, g);
          }
          return t;
        });
      }
      function dc(e, t) {
        return function(i, a) {
          if (i == null)
            return i;
          if (!ht(i))
            return e(i, a);
          for (var d = i.length, g = t ? d : -1, x = Ee(i); (t ? g-- : ++g < d) && a(x[g], g, x) !== !1; )
            ;
          return i;
        };
      }
      function fc(e) {
        return function(t, i, a) {
          for (var d = -1, g = Ee(t), x = a(t), E = x.length; E--; ) {
            var D = x[e ? E : ++d];
            if (i(g[D], D, g) === !1)
              break;
          }
          return t;
        };
      }
      function Hh(e, t, i) {
        var a = t & _, d = Rr(e);
        function g() {
          var x = this && this !== Je && this instanceof g ? d : e;
          return x.apply(a ? i : this, arguments);
        }
        return g;
      }
      function hc(e) {
        return function(t) {
          t = Ce(t);
          var i = Vn(t) ? Ut(t) : r, a = i ? i[0] : t.charAt(0), d = i ? _n(i, 1).join("") : t.slice(1);
          return a[e]() + d;
        };
      }
      function er(e) {
        return function(t) {
          return li(dl(ul(t).replace(Ad, "")), e, "");
        };
      }
      function Rr(e) {
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new e();
            case 1:
              return new e(t[0]);
            case 2:
              return new e(t[0], t[1]);
            case 3:
              return new e(t[0], t[1], t[2]);
            case 4:
              return new e(t[0], t[1], t[2], t[3]);
            case 5:
              return new e(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var i = Qn(e.prototype), a = e.apply(i, t);
          return Ae(a) ? a : i;
        };
      }
      function Gh(e, t, i) {
        var a = Rr(e);
        function d() {
          for (var g = arguments.length, x = A(g), E = g, D = tr(d); E--; )
            x[E] = arguments[E];
          var F = g < 3 && x[0] !== D && x[g - 1] !== D ? [] : bn(x, D);
          if (g -= F.length, g < i)
            return wc(
              e,
              t,
              xo,
              d.placeholder,
              r,
              x,
              F,
              r,
              r,
              i - g
            );
          var k = this && this !== Je && this instanceof d ? a : e;
          return yt(k, this, x);
        }
        return d;
      }
      function pc(e) {
        return function(t, i, a) {
          var d = Ee(t);
          if (!ht(t)) {
            var g = X(i, 3);
            t = qe(t), i = function(E) {
              return g(d[E], E, d);
            };
          }
          var x = e(t, i, a);
          return x > -1 ? d[g ? t[x] : x] : r;
        };
      }
      function gc(e) {
        return on(function(t) {
          var i = t.length, a = i, d = It.prototype.thru;
          for (e && t.reverse(); a--; ) {
            var g = t[a];
            if (typeof g != "function")
              throw new Tt(u);
            if (d && !x && _o(g) == "wrapper")
              var x = new It([], !0);
          }
          for (a = x ? a : i; ++a < i; ) {
            g = t[a];
            var E = _o(g), D = E == "wrapper" ? Hi(g) : r;
            D && qi(D[0]) && D[1] == (W | O | I | U) && !D[4].length && D[9] == 1 ? x = x[_o(D[0])].apply(x, D[3]) : x = g.length == 1 && qi(g) ? x[E]() : x.thru(g);
          }
          return function() {
            var F = arguments, k = F[0];
            if (x && F.length == 1 && re(k))
              return x.plant(k).value();
            for (var B = 0, H = i ? t[B].apply(this, F) : k; ++B < i; )
              H = t[B].call(this, H);
            return H;
          };
        });
      }
      function xo(e, t, i, a, d, g, x, E, D, F) {
        var k = t & W, B = t & _, H = t & $, V = t & (O | P), J = t & G, ce = H ? r : Rr(e);
        function Q() {
          for (var fe = arguments.length, ge = A(fe), $t = fe; $t--; )
            ge[$t] = arguments[$t];
          if (V)
            var st = tr(Q), Et = tf(ge, st);
          if (a && (ge = lc(ge, a, d, V)), g && (ge = uc(ge, g, x, V)), fe -= Et, V && fe < F) {
            var ke = bn(ge, st);
            return wc(
              e,
              t,
              xo,
              Q.placeholder,
              i,
              ge,
              ke,
              E,
              D,
              F - fe
            );
          }
          var Gt = B ? i : this, ln = H ? Gt[e] : e;
          return fe = ge.length, E ? ge = up(ge, E) : J && fe > 1 && ge.reverse(), k && D < fe && (ge.length = D), this && this !== Je && this instanceof Q && (ln = ce || Rr(ln)), ln.apply(Gt, ge);
        }
        return Q;
      }
      function vc(e, t) {
        return function(i, a) {
          return wh(i, e, t(a), {});
        };
      }
      function yo(e, t) {
        return function(i, a) {
          var d;
          if (i === r && a === r)
            return t;
          if (i !== r && (d = i), a !== r) {
            if (d === r)
              return a;
            typeof i == "string" || typeof a == "string" ? (i = Nt(i), a = Nt(a)) : (i = tc(i), a = tc(a)), d = e(i, a);
          }
          return d;
        };
      }
      function Wi(e) {
        return on(function(t) {
          return t = Pe(t, Ct(X())), ue(function(i) {
            var a = this;
            return e(t, function(d) {
              return yt(d, a, i);
            });
          });
        });
      }
      function Co(e, t) {
        t = t === r ? " " : Nt(t);
        var i = t.length;
        if (i < 2)
          return i ? Ai(t, e) : t;
        var a = Ai(t, ao(e / qn(t)));
        return Vn(t) ? _n(Ut(a), 0, e).join("") : a.slice(0, e);
      }
      function Kh(e, t, i, a) {
        var d = t & _, g = Rr(e);
        function x() {
          for (var E = -1, D = arguments.length, F = -1, k = a.length, B = A(k + D), H = this && this !== Je && this instanceof x ? g : e; ++F < k; )
            B[F] = a[F];
          for (; D--; )
            B[F++] = arguments[++E];
          return yt(H, d ? i : this, B);
        }
        return x;
      }
      function mc(e) {
        return function(t, i, a) {
          return a && typeof a != "number" && it(t, i, a) && (i = a = r), t = cn(t), i === r ? (i = t, t = 0) : i = cn(i), a = a === r ? t < i ? 1 : -1 : cn(a), Rh(t, i, a, e);
        };
      }
      function No(e) {
        return function(t, i) {
          return typeof t == "string" && typeof i == "string" || (t = kt(t), i = kt(i)), e(t, i);
        };
      }
      function wc(e, t, i, a, d, g, x, E, D, F) {
        var k = t & O, B = k ? x : r, H = k ? r : x, V = k ? g : r, J = k ? r : g;
        t |= k ? I : M, t &= ~(k ? M : I), t & R || (t &= ~(_ | $));
        var ce = [
          e,
          t,
          d,
          V,
          B,
          J,
          H,
          E,
          D,
          F
        ], Q = i.apply(r, ce);
        return qi(e) && Rc(Q, ce), Q.placeholder = a, Pc(Q, e, t);
      }
      function Bi(e) {
        var t = He[e];
        return function(i, a) {
          if (i = kt(i), a = a == null ? 0 : tt(se(a), 292), a && Pa(i)) {
            var d = (Ce(i) + "e").split("e"), g = t(d[0] + "e" + (+d[1] + a));
            return d = (Ce(g) + "e").split("e"), +(d[0] + "e" + (+d[1] - a));
          }
          return t(i);
        };
      }
      var Vh = Xn && 1 / Jr(new Xn([, -0]))[1] == De ? function(e) {
        return new Xn(e);
      } : cs;
      function bc(e) {
        return function(t) {
          var i = nt(t);
          return i == Ke ? vi(t) : i == Xe ? lf(t) : ef(t, e(t));
        };
      }
      function rn(e, t, i, a, d, g, x, E) {
        var D = t & $;
        if (!D && typeof e != "function")
          throw new Tt(u);
        var F = a ? a.length : 0;
        if (F || (t &= ~(I | M), a = d = r), x = x === r ? x : Ge(se(x), 0), E = E === r ? E : se(E), F -= d ? d.length : 0, t & M) {
          var k = a, B = d;
          a = d = r;
        }
        var H = D ? r : Hi(e), V = [
          e,
          t,
          i,
          a,
          d,
          k,
          B,
          g,
          x,
          E
        ];
        if (H && ap(V, H), e = V[0], t = V[1], i = V[2], a = V[3], d = V[4], E = V[9] = V[9] === r ? D ? 0 : e.length : Ge(V[9] - F, 0), !E && t & (O | P) && (t &= ~(O | P)), !t || t == _)
          var J = Hh(e, t, i);
        else
          t == O || t == P ? J = Gh(e, t, E) : (t == I || t == (_ | I)) && !d.length ? J = Kh(e, t, i, a) : J = xo.apply(r, V);
        var ce = H ? ja : Rc;
        return Pc(ce(J, V), e, t);
      }
      function xc(e, t, i, a) {
        return e === r || Ht(e, Zn[i]) && !Ne.call(a, i) ? t : e;
      }
      function yc(e, t, i, a, d, g) {
        return Ae(e) && Ae(t) && (g.set(t, e), vo(e, t, r, yc, g), g.delete(t)), e;
      }
      function qh(e) {
        return Tr(e) ? r : e;
      }
      function Cc(e, t, i, a, d, g) {
        var x = i & N, E = e.length, D = t.length;
        if (E != D && !(x && D > E))
          return !1;
        var F = g.get(e), k = g.get(t);
        if (F && k)
          return F == t && k == e;
        var B = -1, H = !0, V = i & w ? new Pn() : r;
        for (g.set(e, t), g.set(t, e); ++B < E; ) {
          var J = e[B], ce = t[B];
          if (a)
            var Q = x ? a(ce, J, B, t, e, g) : a(J, ce, B, e, t, g);
          if (Q !== r) {
            if (Q)
              continue;
            H = !1;
            break;
          }
          if (V) {
            if (!ui(t, function(fe, ge) {
              if (!br(V, ge) && (J === fe || d(J, fe, i, a, g)))
                return V.push(ge);
            })) {
              H = !1;
              break;
            }
          } else if (!(J === ce || d(J, ce, i, a, g))) {
            H = !1;
            break;
          }
        }
        return g.delete(e), g.delete(t), H;
      }
      function Yh(e, t, i, a, d, g, x) {
        switch (i) {
          case hn:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            e = e.buffer, t = t.buffer;
          case Qt:
            return !(e.byteLength != t.byteLength || !g(new ro(e), new ro(t)));
          case Me:
          case Be:
          case ze:
            return Ht(+e, +t);
          case We:
            return e.name == t.name && e.message == t.message;
          case Ot:
          case fn:
            return e == t + "";
          case Ke:
            var E = vi;
          case Xe:
            var D = a & N;
            if (E || (E = Jr), e.size != t.size && !D)
              return !1;
            var F = x.get(e);
            if (F)
              return F == t;
            a |= w, x.set(e, t);
            var k = Cc(E(e), E(t), a, d, g, x);
            return x.delete(e), k;
          case kn:
            if (_r)
              return _r.call(e) == _r.call(t);
        }
        return !1;
      }
      function Zh(e, t, i, a, d, g) {
        var x = i & N, E = Ui(e), D = E.length, F = Ui(t), k = F.length;
        if (D != k && !x)
          return !1;
        for (var B = D; B--; ) {
          var H = E[B];
          if (!(x ? H in t : Ne.call(t, H)))
            return !1;
        }
        var V = g.get(e), J = g.get(t);
        if (V && J)
          return V == t && J == e;
        var ce = !0;
        g.set(e, t), g.set(t, e);
        for (var Q = x; ++B < D; ) {
          H = E[B];
          var fe = e[H], ge = t[H];
          if (a)
            var $t = x ? a(ge, fe, H, t, e, g) : a(fe, ge, H, e, t, g);
          if (!($t === r ? fe === ge || d(fe, ge, i, a, g) : $t)) {
            ce = !1;
            break;
          }
          Q || (Q = H == "constructor");
        }
        if (ce && !Q) {
          var st = e.constructor, Et = t.constructor;
          st != Et && "constructor" in e && "constructor" in t && !(typeof st == "function" && st instanceof st && typeof Et == "function" && Et instanceof Et) && (ce = !1);
        }
        return g.delete(e), g.delete(t), ce;
      }
      function on(e) {
        return Zi(Dc(e, r, Fc), e + "");
      }
      function Ui(e) {
        return za(e, qe, Ki);
      }
      function zi(e) {
        return za(e, pt, Nc);
      }
      var Hi = lo ? function(e) {
        return lo.get(e);
      } : cs;
      function _o(e) {
        for (var t = e.name + "", i = Jn[t], a = Ne.call(Jn, t) ? i.length : 0; a--; ) {
          var d = i[a], g = d.func;
          if (g == null || g == e)
            return d.name;
        }
        return t;
      }
      function tr(e) {
        var t = Ne.call(p, "placeholder") ? p : e;
        return t.placeholder;
      }
      function X() {
        var e = p.iteratee || ss;
        return e = e === ss ? Ka : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function $o(e, t) {
        var i = e.__data__;
        return rp(t) ? i[typeof t == "string" ? "string" : "hash"] : i.map;
      }
      function Gi(e) {
        for (var t = qe(e), i = t.length; i--; ) {
          var a = t[i], d = e[a];
          t[i] = [a, d, Ec(d)];
        }
        return t;
      }
      function In(e, t) {
        var i = sf(e, t);
        return Ga(i) ? i : r;
      }
      function Xh(e) {
        var t = Ne.call(e, On), i = e[On];
        try {
          e[On] = r;
          var a = !0;
        } catch {
        }
        var d = to.call(e);
        return a && (t ? e[On] = i : delete e[On]), d;
      }
      var Ki = wi ? function(e) {
        return e == null ? [] : (e = Ee(e), mn(wi(e), function(t) {
          return Oa.call(e, t);
        }));
      } : ls, Nc = wi ? function(e) {
        for (var t = []; e; )
          wn(t, Ki(e)), e = oo(e);
        return t;
      } : ls, nt = ot;
      (bi && nt(new bi(new ArrayBuffer(1))) != hn || yr && nt(new yr()) != Ke || xi && nt(xi.resolve()) != Fn || Xn && nt(new Xn()) != Xe || Cr && nt(new Cr()) != xt) && (nt = function(e) {
        var t = ot(e), i = t == bt ? e.constructor : r, a = i ? Ln(i) : "";
        if (a)
          switch (a) {
            case Af:
              return hn;
            case Tf:
              return Ke;
            case If:
              return Fn;
            case Lf:
              return Xe;
            case Mf:
              return xt;
          }
        return t;
      });
      function Jh(e, t, i) {
        for (var a = -1, d = i.length; ++a < d; ) {
          var g = i[a], x = g.size;
          switch (g.type) {
            case "drop":
              e += x;
              break;
            case "dropRight":
              t -= x;
              break;
            case "take":
              t = tt(t, e + x);
              break;
            case "takeRight":
              e = Ge(e, t - x);
              break;
          }
        }
        return { start: e, end: t };
      }
      function Qh(e) {
        var t = e.match(rd);
        return t ? t[1].split(od) : [];
      }
      function _c(e, t, i) {
        t = Nn(t, e);
        for (var a = -1, d = t.length, g = !1; ++a < d; ) {
          var x = Zt(t[a]);
          if (!(g = e != null && i(e, x)))
            break;
          e = e[x];
        }
        return g || ++a != d ? g : (d = e == null ? 0 : e.length, !!d && Ao(d) && sn(x, d) && (re(e) || Mn(e)));
      }
      function jh(e) {
        var t = e.length, i = new e.constructor(t);
        return t && typeof e[0] == "string" && Ne.call(e, "index") && (i.index = e.index, i.input = e.input), i;
      }
      function $c(e) {
        return typeof e.constructor == "function" && !Pr(e) ? Qn(oo(e)) : {};
      }
      function ep(e, t, i) {
        var a = e.constructor;
        switch (t) {
          case Qt:
            return ki(e);
          case Me:
          case Be:
            return new a(+e);
          case hn:
            return Fh(e, i);
          case pn:
          case cr:
          case wr:
          case lr:
          case ur:
          case dr:
          case ut:
          case Bt:
          case Rt:
            return ac(e, i);
          case Ke:
            return new a();
          case ze:
          case fn:
            return new a(e);
          case Ot:
            return kh(e);
          case Xe:
            return new a();
          case kn:
            return Wh(e);
        }
      }
      function tp(e, t) {
        var i = t.length;
        if (!i)
          return e;
        var a = i - 1;
        return t[a] = (i > 1 ? "& " : "") + t[a], t = t.join(i > 2 ? ", " : " "), e.replace(nd, `{
/* [wrapped with ` + t + `] */
`);
      }
      function np(e) {
        return re(e) || Mn(e) || !!(Ra && e && e[Ra]);
      }
      function sn(e, t) {
        var i = typeof e;
        return t = t ?? we, !!t && (i == "number" || i != "symbol" && hd.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      function it(e, t, i) {
        if (!Ae(i))
          return !1;
        var a = typeof t;
        return (a == "number" ? ht(i) && sn(t, i.length) : a == "string" && t in i) ? Ht(i[t], e) : !1;
      }
      function Vi(e, t) {
        if (re(e))
          return !1;
        var i = typeof e;
        return i == "number" || i == "symbol" || i == "boolean" || e == null || _t(e) ? !0 : ws.test(e) || !zo.test(e) || t != null && e in Ee(t);
      }
      function rp(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      function qi(e) {
        var t = _o(e), i = p[t];
        if (typeof i != "function" || !(t in pe.prototype))
          return !1;
        if (e === i)
          return !0;
        var a = Hi(i);
        return !!a && e === a[0];
      }
      function op(e) {
        return !!Ea && Ea in e;
      }
      var ip = jr ? an : us;
      function Pr(e) {
        var t = e && e.constructor, i = typeof t == "function" && t.prototype || Zn;
        return e === i;
      }
      function Ec(e) {
        return e === e && !Ae(e);
      }
      function Sc(e, t) {
        return function(i) {
          return i == null ? !1 : i[e] === t && (t !== r || e in Ee(i));
        };
      }
      function sp(e) {
        var t = Ro(e, function(a) {
          return i.size === v && i.clear(), a;
        }), i = t.cache;
        return t;
      }
      function ap(e, t) {
        var i = e[1], a = t[1], d = i | a, g = d < (_ | $ | W), x = a == W && i == O || a == W && i == U && e[7].length <= t[8] || a == (W | U) && t[7].length <= t[8] && i == O;
        if (!(g || x))
          return e;
        a & _ && (e[2] = t[2], d |= i & _ ? 0 : R);
        var E = t[3];
        if (E) {
          var D = e[3];
          e[3] = D ? lc(D, E, t[4]) : E, e[4] = D ? bn(e[3], b) : t[4];
        }
        return E = t[5], E && (D = e[5], e[5] = D ? uc(D, E, t[6]) : E, e[6] = D ? bn(e[5], b) : t[6]), E = t[7], E && (e[7] = E), a & W && (e[8] = e[8] == null ? t[8] : tt(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = d, e;
      }
      function cp(e) {
        var t = [];
        if (e != null)
          for (var i in Ee(e))
            t.push(i);
        return t;
      }
      function lp(e) {
        return to.call(e);
      }
      function Dc(e, t, i) {
        return t = Ge(t === r ? e.length - 1 : t, 0), function() {
          for (var a = arguments, d = -1, g = Ge(a.length - t, 0), x = A(g); ++d < g; )
            x[d] = a[t + d];
          d = -1;
          for (var E = A(t + 1); ++d < t; )
            E[d] = a[d];
          return E[t] = i(x), yt(e, this, E);
        };
      }
      function Oc(e, t) {
        return t.length < 2 ? e : Tn(e, Mt(t, 0, -1));
      }
      function up(e, t) {
        for (var i = e.length, a = tt(t.length, i), d = ft(e); a--; ) {
          var g = t[a];
          e[a] = sn(g, i) ? d[g] : r;
        }
        return e;
      }
      function Yi(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
          return e[t];
      }
      var Rc = Ac(ja), Ar = $f || function(e, t) {
        return Je.setTimeout(e, t);
      }, Zi = Ac(Th);
      function Pc(e, t, i) {
        var a = t + "";
        return Zi(e, tp(a, dp(Qh(a), i)));
      }
      function Ac(e) {
        var t = 0, i = 0;
        return function() {
          var a = Of(), d = ye - (a - i);
          if (i = a, d > 0) {
            if (++t >= oe)
              return arguments[0];
          } else
            t = 0;
          return e.apply(r, arguments);
        };
      }
      function Eo(e, t) {
        var i = -1, a = e.length, d = a - 1;
        for (t = t === r ? a : t; ++i < t; ) {
          var g = Pi(i, d), x = e[g];
          e[g] = e[i], e[i] = x;
        }
        return e.length = t, e;
      }
      var Tc = sp(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(Fr, function(i, a, d, g) {
          t.push(d ? g.replace(ad, "$1") : a || i);
        }), t;
      });
      function Zt(e) {
        if (typeof e == "string" || _t(e))
          return e;
        var t = e + "";
        return t == "0" && 1 / e == -De ? "-0" : t;
      }
      function Ln(e) {
        if (e != null) {
          try {
            return eo.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function dp(e, t) {
        return At(je, function(i) {
          var a = "_." + i[0];
          t & i[1] && !Zr(e, a) && e.push(a);
        }), e.sort();
      }
      function Ic(e) {
        if (e instanceof pe)
          return e.clone();
        var t = new It(e.__wrapped__, e.__chain__);
        return t.__actions__ = ft(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
      }
      function fp(e, t, i) {
        (i ? it(e, t, i) : t === r) ? t = 1 : t = Ge(se(t), 0);
        var a = e == null ? 0 : e.length;
        if (!a || t < 1)
          return [];
        for (var d = 0, g = 0, x = A(ao(a / t)); d < a; )
          x[g++] = Mt(e, d, d += t);
        return x;
      }
      function hp(e) {
        for (var t = -1, i = e == null ? 0 : e.length, a = 0, d = []; ++t < i; ) {
          var g = e[t];
          g && (d[a++] = g);
        }
        return d;
      }
      function pp() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var t = A(e - 1), i = arguments[0], a = e; a--; )
          t[a - 1] = arguments[a];
        return wn(re(i) ? ft(i) : [i], Qe(t, 1));
      }
      var gp = ue(function(e, t) {
        return Fe(e) ? Er(e, Qe(t, 1, Fe, !0)) : [];
      }), vp = ue(function(e, t) {
        var i = Ft(t);
        return Fe(i) && (i = r), Fe(e) ? Er(e, Qe(t, 1, Fe, !0), X(i, 2)) : [];
      }), mp = ue(function(e, t) {
        var i = Ft(t);
        return Fe(i) && (i = r), Fe(e) ? Er(e, Qe(t, 1, Fe, !0), r, i) : [];
      });
      function wp(e, t, i) {
        var a = e == null ? 0 : e.length;
        return a ? (t = i || t === r ? 1 : se(t), Mt(e, t < 0 ? 0 : t, a)) : [];
      }
      function bp(e, t, i) {
        var a = e == null ? 0 : e.length;
        return a ? (t = i || t === r ? 1 : se(t), t = a - t, Mt(e, 0, t < 0 ? 0 : t)) : [];
      }
      function xp(e, t) {
        return e && e.length ? wo(e, X(t, 3), !0, !0) : [];
      }
      function yp(e, t) {
        return e && e.length ? wo(e, X(t, 3), !0) : [];
      }
      function Cp(e, t, i, a) {
        var d = e == null ? 0 : e.length;
        return d ? (i && typeof i != "number" && it(e, t, i) && (i = 0, a = d), ph(e, t, i, a)) : [];
      }
      function Lc(e, t, i) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var d = i == null ? 0 : se(i);
        return d < 0 && (d = Ge(a + d, 0)), Xr(e, X(t, 3), d);
      }
      function Mc(e, t, i) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var d = a - 1;
        return i !== r && (d = se(i), d = i < 0 ? Ge(a + d, 0) : tt(d, a - 1)), Xr(e, X(t, 3), d, !0);
      }
      function Fc(e) {
        var t = e == null ? 0 : e.length;
        return t ? Qe(e, 1) : [];
      }
      function Np(e) {
        var t = e == null ? 0 : e.length;
        return t ? Qe(e, De) : [];
      }
      function _p(e, t) {
        var i = e == null ? 0 : e.length;
        return i ? (t = t === r ? 1 : se(t), Qe(e, t)) : [];
      }
      function $p(e) {
        for (var t = -1, i = e == null ? 0 : e.length, a = {}; ++t < i; ) {
          var d = e[t];
          a[d[0]] = d[1];
        }
        return a;
      }
      function kc(e) {
        return e && e.length ? e[0] : r;
      }
      function Ep(e, t, i) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var d = i == null ? 0 : se(i);
        return d < 0 && (d = Ge(a + d, 0)), Kn(e, t, d);
      }
      function Sp(e) {
        var t = e == null ? 0 : e.length;
        return t ? Mt(e, 0, -1) : [];
      }
      var Dp = ue(function(e) {
        var t = Pe(e, Mi);
        return t.length && t[0] === e[0] ? Ei(t) : [];
      }), Op = ue(function(e) {
        var t = Ft(e), i = Pe(e, Mi);
        return t === Ft(i) ? t = r : i.pop(), i.length && i[0] === e[0] ? Ei(i, X(t, 2)) : [];
      }), Rp = ue(function(e) {
        var t = Ft(e), i = Pe(e, Mi);
        return t = typeof t == "function" ? t : r, t && i.pop(), i.length && i[0] === e[0] ? Ei(i, r, t) : [];
      });
      function Pp(e, t) {
        return e == null ? "" : Sf.call(e, t);
      }
      function Ft(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : r;
      }
      function Ap(e, t, i) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var d = a;
        return i !== r && (d = se(i), d = d < 0 ? Ge(a + d, 0) : tt(d, a - 1)), t === t ? df(e, t, d) : Xr(e, wa, d, !0);
      }
      function Tp(e, t) {
        return e && e.length ? Za(e, se(t)) : r;
      }
      var Ip = ue(Wc);
      function Wc(e, t) {
        return e && e.length && t && t.length ? Ri(e, t) : e;
      }
      function Lp(e, t, i) {
        return e && e.length && t && t.length ? Ri(e, t, X(i, 2)) : e;
      }
      function Mp(e, t, i) {
        return e && e.length && t && t.length ? Ri(e, t, r, i) : e;
      }
      var Fp = on(function(e, t) {
        var i = e == null ? 0 : e.length, a = Ci(e, t);
        return Qa(e, Pe(t, function(d) {
          return sn(d, i) ? +d : d;
        }).sort(cc)), a;
      });
      function kp(e, t) {
        var i = [];
        if (!(e && e.length))
          return i;
        var a = -1, d = [], g = e.length;
        for (t = X(t, 3); ++a < g; ) {
          var x = e[a];
          t(x, a, e) && (i.push(x), d.push(a));
        }
        return Qa(e, d), i;
      }
      function Xi(e) {
        return e == null ? e : Pf.call(e);
      }
      function Wp(e, t, i) {
        var a = e == null ? 0 : e.length;
        return a ? (i && typeof i != "number" && it(e, t, i) ? (t = 0, i = a) : (t = t == null ? 0 : se(t), i = i === r ? a : se(i)), Mt(e, t, i)) : [];
      }
      function Bp(e, t) {
        return mo(e, t);
      }
      function Up(e, t, i) {
        return Ti(e, t, X(i, 2));
      }
      function zp(e, t) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var a = mo(e, t);
          if (a < i && Ht(e[a], t))
            return a;
        }
        return -1;
      }
      function Hp(e, t) {
        return mo(e, t, !0);
      }
      function Gp(e, t, i) {
        return Ti(e, t, X(i, 2), !0);
      }
      function Kp(e, t) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var a = mo(e, t, !0) - 1;
          if (Ht(e[a], t))
            return a;
        }
        return -1;
      }
      function Vp(e) {
        return e && e.length ? ec(e) : [];
      }
      function qp(e, t) {
        return e && e.length ? ec(e, X(t, 2)) : [];
      }
      function Yp(e) {
        var t = e == null ? 0 : e.length;
        return t ? Mt(e, 1, t) : [];
      }
      function Zp(e, t, i) {
        return e && e.length ? (t = i || t === r ? 1 : se(t), Mt(e, 0, t < 0 ? 0 : t)) : [];
      }
      function Xp(e, t, i) {
        var a = e == null ? 0 : e.length;
        return a ? (t = i || t === r ? 1 : se(t), t = a - t, Mt(e, t < 0 ? 0 : t, a)) : [];
      }
      function Jp(e, t) {
        return e && e.length ? wo(e, X(t, 3), !1, !0) : [];
      }
      function Qp(e, t) {
        return e && e.length ? wo(e, X(t, 3)) : [];
      }
      var jp = ue(function(e) {
        return Cn(Qe(e, 1, Fe, !0));
      }), eg = ue(function(e) {
        var t = Ft(e);
        return Fe(t) && (t = r), Cn(Qe(e, 1, Fe, !0), X(t, 2));
      }), tg = ue(function(e) {
        var t = Ft(e);
        return t = typeof t == "function" ? t : r, Cn(Qe(e, 1, Fe, !0), r, t);
      });
      function ng(e) {
        return e && e.length ? Cn(e) : [];
      }
      function rg(e, t) {
        return e && e.length ? Cn(e, X(t, 2)) : [];
      }
      function og(e, t) {
        return t = typeof t == "function" ? t : r, e && e.length ? Cn(e, r, t) : [];
      }
      function Ji(e) {
        if (!(e && e.length))
          return [];
        var t = 0;
        return e = mn(e, function(i) {
          if (Fe(i))
            return t = Ge(i.length, t), !0;
        }), pi(t, function(i) {
          return Pe(e, di(i));
        });
      }
      function Bc(e, t) {
        if (!(e && e.length))
          return [];
        var i = Ji(e);
        return t == null ? i : Pe(i, function(a) {
          return yt(t, r, a);
        });
      }
      var ig = ue(function(e, t) {
        return Fe(e) ? Er(e, t) : [];
      }), sg = ue(function(e) {
        return Li(mn(e, Fe));
      }), ag = ue(function(e) {
        var t = Ft(e);
        return Fe(t) && (t = r), Li(mn(e, Fe), X(t, 2));
      }), cg = ue(function(e) {
        var t = Ft(e);
        return t = typeof t == "function" ? t : r, Li(mn(e, Fe), r, t);
      }), lg = ue(Ji);
      function ug(e, t) {
        return oc(e || [], t || [], $r);
      }
      function dg(e, t) {
        return oc(e || [], t || [], Or);
      }
      var fg = ue(function(e) {
        var t = e.length, i = t > 1 ? e[t - 1] : r;
        return i = typeof i == "function" ? (e.pop(), i) : r, Bc(e, i);
      });
      function Uc(e) {
        var t = p(e);
        return t.__chain__ = !0, t;
      }
      function hg(e, t) {
        return t(e), e;
      }
      function So(e, t) {
        return t(e);
      }
      var pg = on(function(e) {
        var t = e.length, i = t ? e[0] : 0, a = this.__wrapped__, d = function(g) {
          return Ci(g, e);
        };
        return t > 1 || this.__actions__.length || !(a instanceof pe) || !sn(i) ? this.thru(d) : (a = a.slice(i, +i + (t ? 1 : 0)), a.__actions__.push({
          func: So,
          args: [d],
          thisArg: r
        }), new It(a, this.__chain__).thru(function(g) {
          return t && !g.length && g.push(r), g;
        }));
      });
      function gg() {
        return Uc(this);
      }
      function vg() {
        return new It(this.value(), this.__chain__);
      }
      function mg() {
        this.__values__ === r && (this.__values__ = tl(this.value()));
        var e = this.__index__ >= this.__values__.length, t = e ? r : this.__values__[this.__index__++];
        return { done: e, value: t };
      }
      function wg() {
        return this;
      }
      function bg(e) {
        for (var t, i = this; i instanceof fo; ) {
          var a = Ic(i);
          a.__index__ = 0, a.__values__ = r, t ? d.__wrapped__ = a : t = a;
          var d = a;
          i = i.__wrapped__;
        }
        return d.__wrapped__ = e, t;
      }
      function xg() {
        var e = this.__wrapped__;
        if (e instanceof pe) {
          var t = e;
          return this.__actions__.length && (t = new pe(this)), t = t.reverse(), t.__actions__.push({
            func: So,
            args: [Xi],
            thisArg: r
          }), new It(t, this.__chain__);
        }
        return this.thru(Xi);
      }
      function yg() {
        return rc(this.__wrapped__, this.__actions__);
      }
      var Cg = bo(function(e, t, i) {
        Ne.call(e, i) ? ++e[i] : nn(e, i, 1);
      });
      function Ng(e, t, i) {
        var a = re(e) ? va : hh;
        return i && it(e, t, i) && (t = r), a(e, X(t, 3));
      }
      function _g(e, t) {
        var i = re(e) ? mn : Ba;
        return i(e, X(t, 3));
      }
      var $g = pc(Lc), Eg = pc(Mc);
      function Sg(e, t) {
        return Qe(Do(e, t), 1);
      }
      function Dg(e, t) {
        return Qe(Do(e, t), De);
      }
      function Og(e, t, i) {
        return i = i === r ? 1 : se(i), Qe(Do(e, t), i);
      }
      function zc(e, t) {
        var i = re(e) ? At : yn;
        return i(e, X(t, 3));
      }
      function Hc(e, t) {
        var i = re(e) ? qd : Wa;
        return i(e, X(t, 3));
      }
      var Rg = bo(function(e, t, i) {
        Ne.call(e, i) ? e[i].push(t) : nn(e, i, [t]);
      });
      function Pg(e, t, i, a) {
        e = ht(e) ? e : rr(e), i = i && !a ? se(i) : 0;
        var d = e.length;
        return i < 0 && (i = Ge(d + i, 0)), To(e) ? i <= d && e.indexOf(t, i) > -1 : !!d && Kn(e, t, i) > -1;
      }
      var Ag = ue(function(e, t, i) {
        var a = -1, d = typeof t == "function", g = ht(e) ? A(e.length) : [];
        return yn(e, function(x) {
          g[++a] = d ? yt(t, x, i) : Sr(x, t, i);
        }), g;
      }), Tg = bo(function(e, t, i) {
        nn(e, i, t);
      });
      function Do(e, t) {
        var i = re(e) ? Pe : Va;
        return i(e, X(t, 3));
      }
      function Ig(e, t, i, a) {
        return e == null ? [] : (re(t) || (t = t == null ? [] : [t]), i = a ? r : i, re(i) || (i = i == null ? [] : [i]), Xa(e, t, i));
      }
      var Lg = bo(function(e, t, i) {
        e[i ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function Mg(e, t, i) {
        var a = re(e) ? li : xa, d = arguments.length < 3;
        return a(e, X(t, 4), i, d, yn);
      }
      function Fg(e, t, i) {
        var a = re(e) ? Yd : xa, d = arguments.length < 3;
        return a(e, X(t, 4), i, d, Wa);
      }
      function kg(e, t) {
        var i = re(e) ? mn : Ba;
        return i(e, Po(X(t, 3)));
      }
      function Wg(e) {
        var t = re(e) ? La : Ph;
        return t(e);
      }
      function Bg(e, t, i) {
        (i ? it(e, t, i) : t === r) ? t = 1 : t = se(t);
        var a = re(e) ? ch : Ah;
        return a(e, t);
      }
      function Ug(e) {
        var t = re(e) ? lh : Ih;
        return t(e);
      }
      function zg(e) {
        if (e == null)
          return 0;
        if (ht(e))
          return To(e) ? qn(e) : e.length;
        var t = nt(e);
        return t == Ke || t == Xe ? e.size : Di(e).length;
      }
      function Hg(e, t, i) {
        var a = re(e) ? ui : Lh;
        return i && it(e, t, i) && (t = r), a(e, X(t, 3));
      }
      var Gg = ue(function(e, t) {
        if (e == null)
          return [];
        var i = t.length;
        return i > 1 && it(e, t[0], t[1]) ? t = [] : i > 2 && it(t[0], t[1], t[2]) && (t = [t[0]]), Xa(e, Qe(t, 1), []);
      }), Oo = _f || function() {
        return Je.Date.now();
      };
      function Kg(e, t) {
        if (typeof t != "function")
          throw new Tt(u);
        return e = se(e), function() {
          if (--e < 1)
            return t.apply(this, arguments);
        };
      }
      function Gc(e, t, i) {
        return t = i ? r : t, t = e && t == null ? e.length : t, rn(e, W, r, r, r, r, t);
      }
      function Kc(e, t) {
        var i;
        if (typeof t != "function")
          throw new Tt(u);
        return e = se(e), function() {
          return --e > 0 && (i = t.apply(this, arguments)), e <= 1 && (t = r), i;
        };
      }
      var Qi = ue(function(e, t, i) {
        var a = _;
        if (i.length) {
          var d = bn(i, tr(Qi));
          a |= I;
        }
        return rn(e, a, t, i, d);
      }), Vc = ue(function(e, t, i) {
        var a = _ | $;
        if (i.length) {
          var d = bn(i, tr(Vc));
          a |= I;
        }
        return rn(t, a, e, i, d);
      });
      function qc(e, t, i) {
        t = i ? r : t;
        var a = rn(e, O, r, r, r, r, r, t);
        return a.placeholder = qc.placeholder, a;
      }
      function Yc(e, t, i) {
        t = i ? r : t;
        var a = rn(e, P, r, r, r, r, r, t);
        return a.placeholder = Yc.placeholder, a;
      }
      function Zc(e, t, i) {
        var a, d, g, x, E, D, F = 0, k = !1, B = !1, H = !0;
        if (typeof e != "function")
          throw new Tt(u);
        t = kt(t) || 0, Ae(i) && (k = !!i.leading, B = "maxWait" in i, g = B ? Ge(kt(i.maxWait) || 0, t) : g, H = "trailing" in i ? !!i.trailing : H);
        function V(ke) {
          var Gt = a, ln = d;
          return a = d = r, F = ke, x = e.apply(ln, Gt), x;
        }
        function J(ke) {
          return F = ke, E = Ar(fe, t), k ? V(ke) : x;
        }
        function ce(ke) {
          var Gt = ke - D, ln = ke - F, pl = t - Gt;
          return B ? tt(pl, g - ln) : pl;
        }
        function Q(ke) {
          var Gt = ke - D, ln = ke - F;
          return D === r || Gt >= t || Gt < 0 || B && ln >= g;
        }
        function fe() {
          var ke = Oo();
          if (Q(ke))
            return ge(ke);
          E = Ar(fe, ce(ke));
        }
        function ge(ke) {
          return E = r, H && a ? V(ke) : (a = d = r, x);
        }
        function $t() {
          E !== r && ic(E), F = 0, a = D = d = E = r;
        }
        function st() {
          return E === r ? x : ge(Oo());
        }
        function Et() {
          var ke = Oo(), Gt = Q(ke);
          if (a = arguments, d = this, D = ke, Gt) {
            if (E === r)
              return J(D);
            if (B)
              return ic(E), E = Ar(fe, t), V(D);
          }
          return E === r && (E = Ar(fe, t)), x;
        }
        return Et.cancel = $t, Et.flush = st, Et;
      }
      var Vg = ue(function(e, t) {
        return ka(e, 1, t);
      }), qg = ue(function(e, t, i) {
        return ka(e, kt(t) || 0, i);
      });
      function Yg(e) {
        return rn(e, G);
      }
      function Ro(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function")
          throw new Tt(u);
        var i = function() {
          var a = arguments, d = t ? t.apply(this, a) : a[0], g = i.cache;
          if (g.has(d))
            return g.get(d);
          var x = e.apply(this, a);
          return i.cache = g.set(d, x) || g, x;
        };
        return i.cache = new (Ro.Cache || tn)(), i;
      }
      Ro.Cache = tn;
      function Po(e) {
        if (typeof e != "function")
          throw new Tt(u);
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, t[0]);
            case 2:
              return !e.call(this, t[0], t[1]);
            case 3:
              return !e.call(this, t[0], t[1], t[2]);
          }
          return !e.apply(this, t);
        };
      }
      function Zg(e) {
        return Kc(2, e);
      }
      var Xg = Mh(function(e, t) {
        t = t.length == 1 && re(t[0]) ? Pe(t[0], Ct(X())) : Pe(Qe(t, 1), Ct(X()));
        var i = t.length;
        return ue(function(a) {
          for (var d = -1, g = tt(a.length, i); ++d < g; )
            a[d] = t[d].call(this, a[d]);
          return yt(e, this, a);
        });
      }), ji = ue(function(e, t) {
        var i = bn(t, tr(ji));
        return rn(e, I, r, t, i);
      }), Xc = ue(function(e, t) {
        var i = bn(t, tr(Xc));
        return rn(e, M, r, t, i);
      }), Jg = on(function(e, t) {
        return rn(e, U, r, r, r, t);
      });
      function Qg(e, t) {
        if (typeof e != "function")
          throw new Tt(u);
        return t = t === r ? t : se(t), ue(e, t);
      }
      function jg(e, t) {
        if (typeof e != "function")
          throw new Tt(u);
        return t = t == null ? 0 : Ge(se(t), 0), ue(function(i) {
          var a = i[t], d = _n(i, 0, t);
          return a && wn(d, a), yt(e, this, d);
        });
      }
      function ev(e, t, i) {
        var a = !0, d = !0;
        if (typeof e != "function")
          throw new Tt(u);
        return Ae(i) && (a = "leading" in i ? !!i.leading : a, d = "trailing" in i ? !!i.trailing : d), Zc(e, t, {
          leading: a,
          maxWait: t,
          trailing: d
        });
      }
      function tv(e) {
        return Gc(e, 1);
      }
      function nv(e, t) {
        return ji(Fi(t), e);
      }
      function rv() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return re(e) ? e : [e];
      }
      function ov(e) {
        return Lt(e, y);
      }
      function iv(e, t) {
        return t = typeof t == "function" ? t : r, Lt(e, y, t);
      }
      function sv(e) {
        return Lt(e, m | y);
      }
      function av(e, t) {
        return t = typeof t == "function" ? t : r, Lt(e, m | y, t);
      }
      function cv(e, t) {
        return t == null || Fa(e, t, qe(t));
      }
      function Ht(e, t) {
        return e === t || e !== e && t !== t;
      }
      var lv = No($i), uv = No(function(e, t) {
        return e >= t;
      }), Mn = Ha(function() {
        return arguments;
      }()) ? Ha : function(e) {
        return Ie(e) && Ne.call(e, "callee") && !Oa.call(e, "callee");
      }, re = A.isArray, dv = ua ? Ct(ua) : bh;
      function ht(e) {
        return e != null && Ao(e.length) && !an(e);
      }
      function Fe(e) {
        return Ie(e) && ht(e);
      }
      function fv(e) {
        return e === !0 || e === !1 || Ie(e) && ot(e) == Me;
      }
      var $n = Ef || us, hv = da ? Ct(da) : xh;
      function pv(e) {
        return Ie(e) && e.nodeType === 1 && !Tr(e);
      }
      function gv(e) {
        if (e == null)
          return !0;
        if (ht(e) && (re(e) || typeof e == "string" || typeof e.splice == "function" || $n(e) || nr(e) || Mn(e)))
          return !e.length;
        var t = nt(e);
        if (t == Ke || t == Xe)
          return !e.size;
        if (Pr(e))
          return !Di(e).length;
        for (var i in e)
          if (Ne.call(e, i))
            return !1;
        return !0;
      }
      function vv(e, t) {
        return Dr(e, t);
      }
      function mv(e, t, i) {
        i = typeof i == "function" ? i : r;
        var a = i ? i(e, t) : r;
        return a === r ? Dr(e, t, r, i) : !!a;
      }
      function es(e) {
        if (!Ie(e))
          return !1;
        var t = ot(e);
        return t == We || t == ie || typeof e.message == "string" && typeof e.name == "string" && !Tr(e);
      }
      function wv(e) {
        return typeof e == "number" && Pa(e);
      }
      function an(e) {
        if (!Ae(e))
          return !1;
        var t = ot(e);
        return t == rt || t == dn || t == lt || t == ar;
      }
      function Jc(e) {
        return typeof e == "number" && e == se(e);
      }
      function Ao(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= we;
      }
      function Ae(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      function Ie(e) {
        return e != null && typeof e == "object";
      }
      var Qc = fa ? Ct(fa) : Ch;
      function bv(e, t) {
        return e === t || Si(e, t, Gi(t));
      }
      function xv(e, t, i) {
        return i = typeof i == "function" ? i : r, Si(e, t, Gi(t), i);
      }
      function yv(e) {
        return jc(e) && e != +e;
      }
      function Cv(e) {
        if (ip(e))
          throw new te(l);
        return Ga(e);
      }
      function Nv(e) {
        return e === null;
      }
      function _v(e) {
        return e == null;
      }
      function jc(e) {
        return typeof e == "number" || Ie(e) && ot(e) == ze;
      }
      function Tr(e) {
        if (!Ie(e) || ot(e) != bt)
          return !1;
        var t = oo(e);
        if (t === null)
          return !0;
        var i = Ne.call(t, "constructor") && t.constructor;
        return typeof i == "function" && i instanceof i && eo.call(i) == xf;
      }
      var ts = ha ? Ct(ha) : Nh;
      function $v(e) {
        return Jc(e) && e >= -we && e <= we;
      }
      var el = pa ? Ct(pa) : _h;
      function To(e) {
        return typeof e == "string" || !re(e) && Ie(e) && ot(e) == fn;
      }
      function _t(e) {
        return typeof e == "symbol" || Ie(e) && ot(e) == kn;
      }
      var nr = ga ? Ct(ga) : $h;
      function Ev(e) {
        return e === r;
      }
      function Sv(e) {
        return Ie(e) && nt(e) == xt;
      }
      function Dv(e) {
        return Ie(e) && ot(e) == Hn;
      }
      var Ov = No(Oi), Rv = No(function(e, t) {
        return e <= t;
      });
      function tl(e) {
        if (!e)
          return [];
        if (ht(e))
          return To(e) ? Ut(e) : ft(e);
        if (xr && e[xr])
          return cf(e[xr]());
        var t = nt(e), i = t == Ke ? vi : t == Xe ? Jr : rr;
        return i(e);
      }
      function cn(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = kt(e), e === De || e === -De) {
          var t = e < 0 ? -1 : 1;
          return t * Y;
        }
        return e === e ? e : 0;
      }
      function se(e) {
        var t = cn(e), i = t % 1;
        return t === t ? i ? t - i : t : 0;
      }
      function nl(e) {
        return e ? An(se(e), 0, ae) : 0;
      }
      function kt(e) {
        if (typeof e == "number")
          return e;
        if (_t(e))
          return le;
        if (Ae(e)) {
          var t = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = Ae(t) ? t + "" : t;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = ya(e);
        var i = ud.test(e);
        return i || fd.test(e) ? Gd(e.slice(2), i ? 2 : 8) : ld.test(e) ? le : +e;
      }
      function rl(e) {
        return Yt(e, pt(e));
      }
      function Pv(e) {
        return e ? An(se(e), -we, we) : e === 0 ? e : 0;
      }
      function Ce(e) {
        return e == null ? "" : Nt(e);
      }
      var Av = jn(function(e, t) {
        if (Pr(t) || ht(t)) {
          Yt(t, qe(t), e);
          return;
        }
        for (var i in t)
          Ne.call(t, i) && $r(e, i, t[i]);
      }), ol = jn(function(e, t) {
        Yt(t, pt(t), e);
      }), Io = jn(function(e, t, i, a) {
        Yt(t, pt(t), e, a);
      }), Tv = jn(function(e, t, i, a) {
        Yt(t, qe(t), e, a);
      }), Iv = on(Ci);
      function Lv(e, t) {
        var i = Qn(e);
        return t == null ? i : Ma(i, t);
      }
      var Mv = ue(function(e, t) {
        e = Ee(e);
        var i = -1, a = t.length, d = a > 2 ? t[2] : r;
        for (d && it(t[0], t[1], d) && (a = 1); ++i < a; )
          for (var g = t[i], x = pt(g), E = -1, D = x.length; ++E < D; ) {
            var F = x[E], k = e[F];
            (k === r || Ht(k, Zn[F]) && !Ne.call(e, F)) && (e[F] = g[F]);
          }
        return e;
      }), Fv = ue(function(e) {
        return e.push(r, yc), yt(il, r, e);
      });
      function kv(e, t) {
        return ma(e, X(t, 3), qt);
      }
      function Wv(e, t) {
        return ma(e, X(t, 3), _i);
      }
      function Bv(e, t) {
        return e == null ? e : Ni(e, X(t, 3), pt);
      }
      function Uv(e, t) {
        return e == null ? e : Ua(e, X(t, 3), pt);
      }
      function zv(e, t) {
        return e && qt(e, X(t, 3));
      }
      function Hv(e, t) {
        return e && _i(e, X(t, 3));
      }
      function Gv(e) {
        return e == null ? [] : go(e, qe(e));
      }
      function Kv(e) {
        return e == null ? [] : go(e, pt(e));
      }
      function ns(e, t, i) {
        var a = e == null ? r : Tn(e, t);
        return a === r ? i : a;
      }
      function Vv(e, t) {
        return e != null && _c(e, t, gh);
      }
      function rs(e, t) {
        return e != null && _c(e, t, vh);
      }
      var qv = vc(function(e, t, i) {
        t != null && typeof t.toString != "function" && (t = to.call(t)), e[t] = i;
      }, is(gt)), Yv = vc(function(e, t, i) {
        t != null && typeof t.toString != "function" && (t = to.call(t)), Ne.call(e, t) ? e[t].push(i) : e[t] = [i];
      }, X), Zv = ue(Sr);
      function qe(e) {
        return ht(e) ? Ia(e) : Di(e);
      }
      function pt(e) {
        return ht(e) ? Ia(e, !0) : Eh(e);
      }
      function Xv(e, t) {
        var i = {};
        return t = X(t, 3), qt(e, function(a, d, g) {
          nn(i, t(a, d, g), a);
        }), i;
      }
      function Jv(e, t) {
        var i = {};
        return t = X(t, 3), qt(e, function(a, d, g) {
          nn(i, d, t(a, d, g));
        }), i;
      }
      var Qv = jn(function(e, t, i) {
        vo(e, t, i);
      }), il = jn(function(e, t, i, a) {
        vo(e, t, i, a);
      }), jv = on(function(e, t) {
        var i = {};
        if (e == null)
          return i;
        var a = !1;
        t = Pe(t, function(g) {
          return g = Nn(g, e), a || (a = g.length > 1), g;
        }), Yt(e, zi(e), i), a && (i = Lt(i, m | C | y, qh));
        for (var d = t.length; d--; )
          Ii(i, t[d]);
        return i;
      });
      function e0(e, t) {
        return sl(e, Po(X(t)));
      }
      var t0 = on(function(e, t) {
        return e == null ? {} : Dh(e, t);
      });
      function sl(e, t) {
        if (e == null)
          return {};
        var i = Pe(zi(e), function(a) {
          return [a];
        });
        return t = X(t), Ja(e, i, function(a, d) {
          return t(a, d[0]);
        });
      }
      function n0(e, t, i) {
        t = Nn(t, e);
        var a = -1, d = t.length;
        for (d || (d = 1, e = r); ++a < d; ) {
          var g = e == null ? r : e[Zt(t[a])];
          g === r && (a = d, g = i), e = an(g) ? g.call(e) : g;
        }
        return e;
      }
      function r0(e, t, i) {
        return e == null ? e : Or(e, t, i);
      }
      function o0(e, t, i, a) {
        return a = typeof a == "function" ? a : r, e == null ? e : Or(e, t, i, a);
      }
      var al = bc(qe), cl = bc(pt);
      function i0(e, t, i) {
        var a = re(e), d = a || $n(e) || nr(e);
        if (t = X(t, 4), i == null) {
          var g = e && e.constructor;
          d ? i = a ? new g() : [] : Ae(e) ? i = an(g) ? Qn(oo(e)) : {} : i = {};
        }
        return (d ? At : qt)(e, function(x, E, D) {
          return t(i, x, E, D);
        }), i;
      }
      function s0(e, t) {
        return e == null ? !0 : Ii(e, t);
      }
      function a0(e, t, i) {
        return e == null ? e : nc(e, t, Fi(i));
      }
      function c0(e, t, i, a) {
        return a = typeof a == "function" ? a : r, e == null ? e : nc(e, t, Fi(i), a);
      }
      function rr(e) {
        return e == null ? [] : gi(e, qe(e));
      }
      function l0(e) {
        return e == null ? [] : gi(e, pt(e));
      }
      function u0(e, t, i) {
        return i === r && (i = t, t = r), i !== r && (i = kt(i), i = i === i ? i : 0), t !== r && (t = kt(t), t = t === t ? t : 0), An(kt(e), t, i);
      }
      function d0(e, t, i) {
        return t = cn(t), i === r ? (i = t, t = 0) : i = cn(i), e = kt(e), mh(e, t, i);
      }
      function f0(e, t, i) {
        if (i && typeof i != "boolean" && it(e, t, i) && (t = i = r), i === r && (typeof t == "boolean" ? (i = t, t = r) : typeof e == "boolean" && (i = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = cn(e), t === r ? (t = e, e = 0) : t = cn(t)), e > t) {
          var a = e;
          e = t, t = a;
        }
        if (i || e % 1 || t % 1) {
          var d = Aa();
          return tt(e + d * (t - e + Hd("1e-" + ((d + "").length - 1))), t);
        }
        return Pi(e, t);
      }
      var h0 = er(function(e, t, i) {
        return t = t.toLowerCase(), e + (i ? ll(t) : t);
      });
      function ll(e) {
        return os(Ce(e).toLowerCase());
      }
      function ul(e) {
        return e = Ce(e), e && e.replace(pd, nf).replace(Td, "");
      }
      function p0(e, t, i) {
        e = Ce(e), t = Nt(t);
        var a = e.length;
        i = i === r ? a : An(se(i), 0, a);
        var d = i;
        return i -= t.length, i >= 0 && e.slice(i, d) == t;
      }
      function g0(e) {
        return e = Ce(e), e && Vt.test(e) ? e.replace(jt, rf) : e;
      }
      function v0(e) {
        return e = Ce(e), e && bs.test(e) ? e.replace(fr, "\\$&") : e;
      }
      var m0 = er(function(e, t, i) {
        return e + (i ? "-" : "") + t.toLowerCase();
      }), w0 = er(function(e, t, i) {
        return e + (i ? " " : "") + t.toLowerCase();
      }), b0 = hc("toLowerCase");
      function x0(e, t, i) {
        e = Ce(e), t = se(t);
        var a = t ? qn(e) : 0;
        if (!t || a >= t)
          return e;
        var d = (t - a) / 2;
        return Co(co(d), i) + e + Co(ao(d), i);
      }
      function y0(e, t, i) {
        e = Ce(e), t = se(t);
        var a = t ? qn(e) : 0;
        return t && a < t ? e + Co(t - a, i) : e;
      }
      function C0(e, t, i) {
        e = Ce(e), t = se(t);
        var a = t ? qn(e) : 0;
        return t && a < t ? Co(t - a, i) + e : e;
      }
      function N0(e, t, i) {
        return i || t == null ? t = 0 : t && (t = +t), Rf(Ce(e).replace(kr, ""), t || 0);
      }
      function _0(e, t, i) {
        return (i ? it(e, t, i) : t === r) ? t = 1 : t = se(t), Ai(Ce(e), t);
      }
      function $0() {
        var e = arguments, t = Ce(e[0]);
        return e.length < 3 ? t : t.replace(e[1], e[2]);
      }
      var E0 = er(function(e, t, i) {
        return e + (i ? "_" : "") + t.toLowerCase();
      });
      function S0(e, t, i) {
        return i && typeof i != "number" && it(e, t, i) && (t = i = r), i = i === r ? ae : i >>> 0, i ? (e = Ce(e), e && (typeof t == "string" || t != null && !ts(t)) && (t = Nt(t), !t && Vn(e)) ? _n(Ut(e), 0, i) : e.split(t, i)) : [];
      }
      var D0 = er(function(e, t, i) {
        return e + (i ? " " : "") + os(t);
      });
      function O0(e, t, i) {
        return e = Ce(e), i = i == null ? 0 : An(se(i), 0, e.length), t = Nt(t), e.slice(i, i + t.length) == t;
      }
      function R0(e, t, i) {
        var a = p.templateSettings;
        i && it(e, t, i) && (t = r), e = Ce(e), t = Io({}, t, a, xc);
        var d = Io({}, t.imports, a.imports, xc), g = qe(d), x = gi(d, g), E, D, F = 0, k = t.interpolate || Vr, B = "__p += '", H = mi(
          (t.escape || Vr).source + "|" + k.source + "|" + (k === Mr ? cd : Vr).source + "|" + (t.evaluate || Vr).source + "|$",
          "g"
        ), V = "//# sourceURL=" + (Ne.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++kd + "]") + `
`;
        e.replace(H, function(Q, fe, ge, $t, st, Et) {
          return ge || (ge = $t), B += e.slice(F, Et).replace(gd, of), fe && (E = !0, B += `' +
__e(` + fe + `) +
'`), st && (D = !0, B += `';
` + st + `;
__p += '`), ge && (B += `' +
((__t = (` + ge + `)) == null ? '' : __t) +
'`), F = Et + Q.length, Q;
        }), B += `';
`;
        var J = Ne.call(t, "variable") && t.variable;
        if (!J)
          B = `with (obj) {
` + B + `
}
`;
        else if (sd.test(J))
          throw new te(f);
        B = (D ? B.replace(Ye, "") : B).replace(ct, "$1").replace(dt, "$1;"), B = "function(" + (J || "obj") + `) {
` + (J ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (E ? ", __e = _.escape" : "") + (D ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + B + `return __p
}`;
        var ce = fl(function() {
          return xe(g, V + "return " + B).apply(r, x);
        });
        if (ce.source = B, es(ce))
          throw ce;
        return ce;
      }
      function P0(e) {
        return Ce(e).toLowerCase();
      }
      function A0(e) {
        return Ce(e).toUpperCase();
      }
      function T0(e, t, i) {
        if (e = Ce(e), e && (i || t === r))
          return ya(e);
        if (!e || !(t = Nt(t)))
          return e;
        var a = Ut(e), d = Ut(t), g = Ca(a, d), x = Na(a, d) + 1;
        return _n(a, g, x).join("");
      }
      function I0(e, t, i) {
        if (e = Ce(e), e && (i || t === r))
          return e.slice(0, $a(e) + 1);
        if (!e || !(t = Nt(t)))
          return e;
        var a = Ut(e), d = Na(a, Ut(t)) + 1;
        return _n(a, 0, d).join("");
      }
      function L0(e, t, i) {
        if (e = Ce(e), e && (i || t === r))
          return e.replace(kr, "");
        if (!e || !(t = Nt(t)))
          return e;
        var a = Ut(e), d = Ca(a, Ut(t));
        return _n(a, d).join("");
      }
      function M0(e, t) {
        var i = Z, a = ne;
        if (Ae(t)) {
          var d = "separator" in t ? t.separator : d;
          i = "length" in t ? se(t.length) : i, a = "omission" in t ? Nt(t.omission) : a;
        }
        e = Ce(e);
        var g = e.length;
        if (Vn(e)) {
          var x = Ut(e);
          g = x.length;
        }
        if (i >= g)
          return e;
        var E = i - qn(a);
        if (E < 1)
          return a;
        var D = x ? _n(x, 0, E).join("") : e.slice(0, E);
        if (d === r)
          return D + a;
        if (x && (E += D.length - E), ts(d)) {
          if (e.slice(E).search(d)) {
            var F, k = D;
            for (d.global || (d = mi(d.source, Ce(Hs.exec(d)) + "g")), d.lastIndex = 0; F = d.exec(k); )
              var B = F.index;
            D = D.slice(0, B === r ? E : B);
          }
        } else if (e.indexOf(Nt(d), E) != E) {
          var H = D.lastIndexOf(d);
          H > -1 && (D = D.slice(0, H));
        }
        return D + a;
      }
      function F0(e) {
        return e = Ce(e), e && vn.test(e) ? e.replace(Kt, ff) : e;
      }
      var k0 = er(function(e, t, i) {
        return e + (i ? " " : "") + t.toUpperCase();
      }), os = hc("toUpperCase");
      function dl(e, t, i) {
        return e = Ce(e), t = i ? r : t, t === r ? af(e) ? gf(e) : Jd(e) : e.match(t) || [];
      }
      var fl = ue(function(e, t) {
        try {
          return yt(e, r, t);
        } catch (i) {
          return es(i) ? i : new te(i);
        }
      }), W0 = on(function(e, t) {
        return At(t, function(i) {
          i = Zt(i), nn(e, i, Qi(e[i], e));
        }), e;
      });
      function B0(e) {
        var t = e == null ? 0 : e.length, i = X();
        return e = t ? Pe(e, function(a) {
          if (typeof a[1] != "function")
            throw new Tt(u);
          return [i(a[0]), a[1]];
        }) : [], ue(function(a) {
          for (var d = -1; ++d < t; ) {
            var g = e[d];
            if (yt(g[0], this, a))
              return yt(g[1], this, a);
          }
        });
      }
      function U0(e) {
        return fh(Lt(e, m));
      }
      function is(e) {
        return function() {
          return e;
        };
      }
      function z0(e, t) {
        return e == null || e !== e ? t : e;
      }
      var H0 = gc(), G0 = gc(!0);
      function gt(e) {
        return e;
      }
      function ss(e) {
        return Ka(typeof e == "function" ? e : Lt(e, m));
      }
      function K0(e) {
        return qa(Lt(e, m));
      }
      function V0(e, t) {
        return Ya(e, Lt(t, m));
      }
      var q0 = ue(function(e, t) {
        return function(i) {
          return Sr(i, e, t);
        };
      }), Y0 = ue(function(e, t) {
        return function(i) {
          return Sr(e, i, t);
        };
      });
      function as(e, t, i) {
        var a = qe(t), d = go(t, a);
        i == null && !(Ae(t) && (d.length || !a.length)) && (i = t, t = e, e = this, d = go(t, qe(t)));
        var g = !(Ae(i) && "chain" in i) || !!i.chain, x = an(e);
        return At(d, function(E) {
          var D = t[E];
          e[E] = D, x && (e.prototype[E] = function() {
            var F = this.__chain__;
            if (g || F) {
              var k = e(this.__wrapped__), B = k.__actions__ = ft(this.__actions__);
              return B.push({ func: D, args: arguments, thisArg: e }), k.__chain__ = F, k;
            }
            return D.apply(e, wn([this.value()], arguments));
          });
        }), e;
      }
      function Z0() {
        return Je._ === this && (Je._ = yf), this;
      }
      function cs() {
      }
      function X0(e) {
        return e = se(e), ue(function(t) {
          return Za(t, e);
        });
      }
      var J0 = Wi(Pe), Q0 = Wi(va), j0 = Wi(ui);
      function hl(e) {
        return Vi(e) ? di(Zt(e)) : Oh(e);
      }
      function em(e) {
        return function(t) {
          return e == null ? r : Tn(e, t);
        };
      }
      var tm = mc(), nm = mc(!0);
      function ls() {
        return [];
      }
      function us() {
        return !1;
      }
      function rm() {
        return {};
      }
      function om() {
        return "";
      }
      function im() {
        return !0;
      }
      function sm(e, t) {
        if (e = se(e), e < 1 || e > we)
          return [];
        var i = ae, a = tt(e, ae);
        t = X(t), e -= ae;
        for (var d = pi(a, t); ++i < e; )
          t(i);
        return d;
      }
      function am(e) {
        return re(e) ? Pe(e, Zt) : _t(e) ? [e] : ft(Tc(Ce(e)));
      }
      function cm(e) {
        var t = ++bf;
        return Ce(e) + t;
      }
      var lm = yo(function(e, t) {
        return e + t;
      }, 0), um = Bi("ceil"), dm = yo(function(e, t) {
        return e / t;
      }, 1), fm = Bi("floor");
      function hm(e) {
        return e && e.length ? po(e, gt, $i) : r;
      }
      function pm(e, t) {
        return e && e.length ? po(e, X(t, 2), $i) : r;
      }
      function gm(e) {
        return ba(e, gt);
      }
      function vm(e, t) {
        return ba(e, X(t, 2));
      }
      function mm(e) {
        return e && e.length ? po(e, gt, Oi) : r;
      }
      function wm(e, t) {
        return e && e.length ? po(e, X(t, 2), Oi) : r;
      }
      var bm = yo(function(e, t) {
        return e * t;
      }, 1), xm = Bi("round"), ym = yo(function(e, t) {
        return e - t;
      }, 0);
      function Cm(e) {
        return e && e.length ? hi(e, gt) : 0;
      }
      function Nm(e, t) {
        return e && e.length ? hi(e, X(t, 2)) : 0;
      }
      return p.after = Kg, p.ary = Gc, p.assign = Av, p.assignIn = ol, p.assignInWith = Io, p.assignWith = Tv, p.at = Iv, p.before = Kc, p.bind = Qi, p.bindAll = W0, p.bindKey = Vc, p.castArray = rv, p.chain = Uc, p.chunk = fp, p.compact = hp, p.concat = pp, p.cond = B0, p.conforms = U0, p.constant = is, p.countBy = Cg, p.create = Lv, p.curry = qc, p.curryRight = Yc, p.debounce = Zc, p.defaults = Mv, p.defaultsDeep = Fv, p.defer = Vg, p.delay = qg, p.difference = gp, p.differenceBy = vp, p.differenceWith = mp, p.drop = wp, p.dropRight = bp, p.dropRightWhile = xp, p.dropWhile = yp, p.fill = Cp, p.filter = _g, p.flatMap = Sg, p.flatMapDeep = Dg, p.flatMapDepth = Og, p.flatten = Fc, p.flattenDeep = Np, p.flattenDepth = _p, p.flip = Yg, p.flow = H0, p.flowRight = G0, p.fromPairs = $p, p.functions = Gv, p.functionsIn = Kv, p.groupBy = Rg, p.initial = Sp, p.intersection = Dp, p.intersectionBy = Op, p.intersectionWith = Rp, p.invert = qv, p.invertBy = Yv, p.invokeMap = Ag, p.iteratee = ss, p.keyBy = Tg, p.keys = qe, p.keysIn = pt, p.map = Do, p.mapKeys = Xv, p.mapValues = Jv, p.matches = K0, p.matchesProperty = V0, p.memoize = Ro, p.merge = Qv, p.mergeWith = il, p.method = q0, p.methodOf = Y0, p.mixin = as, p.negate = Po, p.nthArg = X0, p.omit = jv, p.omitBy = e0, p.once = Zg, p.orderBy = Ig, p.over = J0, p.overArgs = Xg, p.overEvery = Q0, p.overSome = j0, p.partial = ji, p.partialRight = Xc, p.partition = Lg, p.pick = t0, p.pickBy = sl, p.property = hl, p.propertyOf = em, p.pull = Ip, p.pullAll = Wc, p.pullAllBy = Lp, p.pullAllWith = Mp, p.pullAt = Fp, p.range = tm, p.rangeRight = nm, p.rearg = Jg, p.reject = kg, p.remove = kp, p.rest = Qg, p.reverse = Xi, p.sampleSize = Bg, p.set = r0, p.setWith = o0, p.shuffle = Ug, p.slice = Wp, p.sortBy = Gg, p.sortedUniq = Vp, p.sortedUniqBy = qp, p.split = S0, p.spread = jg, p.tail = Yp, p.take = Zp, p.takeRight = Xp, p.takeRightWhile = Jp, p.takeWhile = Qp, p.tap = hg, p.throttle = ev, p.thru = So, p.toArray = tl, p.toPairs = al, p.toPairsIn = cl, p.toPath = am, p.toPlainObject = rl, p.transform = i0, p.unary = tv, p.union = jp, p.unionBy = eg, p.unionWith = tg, p.uniq = ng, p.uniqBy = rg, p.uniqWith = og, p.unset = s0, p.unzip = Ji, p.unzipWith = Bc, p.update = a0, p.updateWith = c0, p.values = rr, p.valuesIn = l0, p.without = ig, p.words = dl, p.wrap = nv, p.xor = sg, p.xorBy = ag, p.xorWith = cg, p.zip = lg, p.zipObject = ug, p.zipObjectDeep = dg, p.zipWith = fg, p.entries = al, p.entriesIn = cl, p.extend = ol, p.extendWith = Io, as(p, p), p.add = lm, p.attempt = fl, p.camelCase = h0, p.capitalize = ll, p.ceil = um, p.clamp = u0, p.clone = ov, p.cloneDeep = sv, p.cloneDeepWith = av, p.cloneWith = iv, p.conformsTo = cv, p.deburr = ul, p.defaultTo = z0, p.divide = dm, p.endsWith = p0, p.eq = Ht, p.escape = g0, p.escapeRegExp = v0, p.every = Ng, p.find = $g, p.findIndex = Lc, p.findKey = kv, p.findLast = Eg, p.findLastIndex = Mc, p.findLastKey = Wv, p.floor = fm, p.forEach = zc, p.forEachRight = Hc, p.forIn = Bv, p.forInRight = Uv, p.forOwn = zv, p.forOwnRight = Hv, p.get = ns, p.gt = lv, p.gte = uv, p.has = Vv, p.hasIn = rs, p.head = kc, p.identity = gt, p.includes = Pg, p.indexOf = Ep, p.inRange = d0, p.invoke = Zv, p.isArguments = Mn, p.isArray = re, p.isArrayBuffer = dv, p.isArrayLike = ht, p.isArrayLikeObject = Fe, p.isBoolean = fv, p.isBuffer = $n, p.isDate = hv, p.isElement = pv, p.isEmpty = gv, p.isEqual = vv, p.isEqualWith = mv, p.isError = es, p.isFinite = wv, p.isFunction = an, p.isInteger = Jc, p.isLength = Ao, p.isMap = Qc, p.isMatch = bv, p.isMatchWith = xv, p.isNaN = yv, p.isNative = Cv, p.isNil = _v, p.isNull = Nv, p.isNumber = jc, p.isObject = Ae, p.isObjectLike = Ie, p.isPlainObject = Tr, p.isRegExp = ts, p.isSafeInteger = $v, p.isSet = el, p.isString = To, p.isSymbol = _t, p.isTypedArray = nr, p.isUndefined = Ev, p.isWeakMap = Sv, p.isWeakSet = Dv, p.join = Pp, p.kebabCase = m0, p.last = Ft, p.lastIndexOf = Ap, p.lowerCase = w0, p.lowerFirst = b0, p.lt = Ov, p.lte = Rv, p.max = hm, p.maxBy = pm, p.mean = gm, p.meanBy = vm, p.min = mm, p.minBy = wm, p.stubArray = ls, p.stubFalse = us, p.stubObject = rm, p.stubString = om, p.stubTrue = im, p.multiply = bm, p.nth = Tp, p.noConflict = Z0, p.noop = cs, p.now = Oo, p.pad = x0, p.padEnd = y0, p.padStart = C0, p.parseInt = N0, p.random = f0, p.reduce = Mg, p.reduceRight = Fg, p.repeat = _0, p.replace = $0, p.result = n0, p.round = xm, p.runInContext = S, p.sample = Wg, p.size = zg, p.snakeCase = E0, p.some = Hg, p.sortedIndex = Bp, p.sortedIndexBy = Up, p.sortedIndexOf = zp, p.sortedLastIndex = Hp, p.sortedLastIndexBy = Gp, p.sortedLastIndexOf = Kp, p.startCase = D0, p.startsWith = O0, p.subtract = ym, p.sum = Cm, p.sumBy = Nm, p.template = R0, p.times = sm, p.toFinite = cn, p.toInteger = se, p.toLength = nl, p.toLower = P0, p.toNumber = kt, p.toSafeInteger = Pv, p.toString = Ce, p.toUpper = A0, p.trim = T0, p.trimEnd = I0, p.trimStart = L0, p.truncate = M0, p.unescape = F0, p.uniqueId = cm, p.upperCase = k0, p.upperFirst = os, p.each = zc, p.eachRight = Hc, p.first = kc, as(p, function() {
        var e = {};
        return qt(p, function(t, i) {
          Ne.call(p.prototype, i) || (e[i] = t);
        }), e;
      }(), { chain: !1 }), p.VERSION = s, At(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        p[e].placeholder = p;
      }), At(["drop", "take"], function(e, t) {
        pe.prototype[e] = function(i) {
          i = i === r ? 1 : Ge(se(i), 0);
          var a = this.__filtered__ && !t ? new pe(this) : this.clone();
          return a.__filtered__ ? a.__takeCount__ = tt(i, a.__takeCount__) : a.__views__.push({
            size: tt(i, ae),
            type: e + (a.__dir__ < 0 ? "Right" : "")
          }), a;
        }, pe.prototype[e + "Right"] = function(i) {
          return this.reverse()[e](i).reverse();
        };
      }), At(["filter", "map", "takeWhile"], function(e, t) {
        var i = t + 1, a = i == ee || i == ve;
        pe.prototype[e] = function(d) {
          var g = this.clone();
          return g.__iteratees__.push({
            iteratee: X(d, 3),
            type: i
          }), g.__filtered__ = g.__filtered__ || a, g;
        };
      }), At(["head", "last"], function(e, t) {
        var i = "take" + (t ? "Right" : "");
        pe.prototype[e] = function() {
          return this[i](1).value()[0];
        };
      }), At(["initial", "tail"], function(e, t) {
        var i = "drop" + (t ? "" : "Right");
        pe.prototype[e] = function() {
          return this.__filtered__ ? new pe(this) : this[i](1);
        };
      }), pe.prototype.compact = function() {
        return this.filter(gt);
      }, pe.prototype.find = function(e) {
        return this.filter(e).head();
      }, pe.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, pe.prototype.invokeMap = ue(function(e, t) {
        return typeof e == "function" ? new pe(this) : this.map(function(i) {
          return Sr(i, e, t);
        });
      }), pe.prototype.reject = function(e) {
        return this.filter(Po(X(e)));
      }, pe.prototype.slice = function(e, t) {
        e = se(e);
        var i = this;
        return i.__filtered__ && (e > 0 || t < 0) ? new pe(i) : (e < 0 ? i = i.takeRight(-e) : e && (i = i.drop(e)), t !== r && (t = se(t), i = t < 0 ? i.dropRight(-t) : i.take(t - e)), i);
      }, pe.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, pe.prototype.toArray = function() {
        return this.take(ae);
      }, qt(pe.prototype, function(e, t) {
        var i = /^(?:filter|find|map|reject)|While$/.test(t), a = /^(?:head|last)$/.test(t), d = p[a ? "take" + (t == "last" ? "Right" : "") : t], g = a || /^find/.test(t);
        d && (p.prototype[t] = function() {
          var x = this.__wrapped__, E = a ? [1] : arguments, D = x instanceof pe, F = E[0], k = D || re(x), B = function(fe) {
            var ge = d.apply(p, wn([fe], E));
            return a && H ? ge[0] : ge;
          };
          k && i && typeof F == "function" && F.length != 1 && (D = k = !1);
          var H = this.__chain__, V = !!this.__actions__.length, J = g && !H, ce = D && !V;
          if (!g && k) {
            x = ce ? x : new pe(this);
            var Q = e.apply(x, E);
            return Q.__actions__.push({ func: So, args: [B], thisArg: r }), new It(Q, H);
          }
          return J && ce ? e.apply(this, E) : (Q = this.thru(B), J ? a ? Q.value()[0] : Q.value() : Q);
        });
      }), At(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var t = Qr[e], i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", a = /^(?:pop|shift)$/.test(e);
        p.prototype[e] = function() {
          var d = arguments;
          if (a && !this.__chain__) {
            var g = this.value();
            return t.apply(re(g) ? g : [], d);
          }
          return this[i](function(x) {
            return t.apply(re(x) ? x : [], d);
          });
        };
      }), qt(pe.prototype, function(e, t) {
        var i = p[t];
        if (i) {
          var a = i.name + "";
          Ne.call(Jn, a) || (Jn[a] = []), Jn[a].push({ name: t, func: i });
        }
      }), Jn[xo(r, $).name] = [{
        name: "wrapper",
        func: r
      }], pe.prototype.clone = Ff, pe.prototype.reverse = kf, pe.prototype.value = Wf, p.prototype.at = pg, p.prototype.chain = gg, p.prototype.commit = vg, p.prototype.next = mg, p.prototype.plant = bg, p.prototype.reverse = xg, p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = yg, p.prototype.first = p.prototype.head, xr && (p.prototype[xr] = wg), p;
    }, Yn = vf();
    Dn ? ((Dn.exports = Yn)._ = Yn, si._ = Yn) : Je._ = Yn;
  }).call(Wr);
})(Ou, Ou.exports);
var KS = Ou.exports;
const Ru = /* @__PURE__ */ C1(KS);
function zs() {
  const [n, o] = Te({
    width: void 0,
    height: void 0
  });
  return be(() => {
    function r() {
      o({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    return window.addEventListener("resize", r), r(), () => window.removeEventListener("resize", r);
  }, []), n;
}
const J1 = async (n, o) => {
  const r = o.getRoute(), [s, ...c] = r;
  localStorage.getItem("token");
  const l = o.getNodeData().options.map((G) => G.description), u = c.map((G, Z) => {
    const ne = [s, ...c.slice(0, Z + 1)];
    return o.context.getNode(ne).getOptionContent().description;
  }), [f, ...h] = u.slice().reverse(), v = "You are part of a group of workers building a tree of subtasks to describe a project, which may be big or small.  As such, you do not provide information that is not directly related to the subtask at hand because it will probably be provided by another worker", b = `PLEASE OUTPUT A SINGLE VALID JSON OBJECT INCLUDING: (1) THE key "description" WITH A DESCRIPTION OF THE NEW ALTERNATIVE TASK  (2) THE KEY "steps" WITH AN ARRAY OF STRINGS < 50 CHARS PER ENTRY REPRESENTING THE NEW TASK'S SUBTASKS.`, m = `Please create an alternative task to the following tasks which serves the same purpose within its larger context: ${JSON.stringify(l)}.  For context, these are options of a subtask of ${h.join(" subtask of the task ")}.  Please be specific, representing a true alternative, not just an abstraction or restatement of the task.  Stop and consider "why would someone be doing this?" and then come up with another way to achieve that goal.  If there are already multiple existing alternatives, feel free to get creative and think outside the box.  `, y = `${b} ${m} Please output only single json array containing only strings.`;
  console.log("PROMPT", y, v);
  const w = (await n(v, y).catch((G) => {
    throw console.log("error", G), new Error("error getting suggestions");
  })).choices.map((G) => G.message.content);
  console.log("messages", w);
  const _ = w.map((G) => {
    const Z = G.match(/.*(\{[^{}]*\}).*/m);
    if (!Z || !Z[1])
      throw new Error(`Could not parse response: ${G}`);
    return JSON.parse(Z[1]);
  }), $ = _[0];
  if (console.log("alternative", $, _), _.length > 1 && console.warn("More than one alternative found", _), !$.description)
    throw console.log("messages", w), new Error("No description found");
  if (!$.steps || $.steps.length === 0)
    throw console.warn("No steps found for task", w), new Error("No steps found for task");
  const R = $.steps.map((G) => ({
    description: `generated step for ${$.description}: ${G}`,
    selectedOption: 0,
    collapsed: !1,
    options: [{
      description: G,
      data: {},
      content: []
    }]
  }));
  console.log("suggestion1");
  const O = o.getNodeData(), P = [...O.options, {
    description: $.description,
    data: {},
    content: []
  }], I = {
    ...O,
    selectedOption: P.length - 1,
    collapsed: !1,
    options: P
  }, M = o.setNodeData(I);
  console.log("inserted node", M.getNode(o.getRoute()).getNodeData(), o.getRoute());
  const W = M.getNode(o.getRoute());
  return [M.addChildrenToNode(W, R, I.selectedOption), null];
}, VS = ({
  node: n,
  rowDepth: o,
  handleTextEdit: r,
  handleChange: s,
  addYoungerSibling: c,
  moveLeft: l,
  moveRight: u,
  deleteRow: f,
  moveDown: h,
  moveUp: v,
  deleteOption: b,
  addOption: m,
  locked: C,
  toggleCollapse: y,
  dragOverInfo: N,
  dragging: w,
  dragItem: _,
  activeModule: $,
  options: R
}) => {
  const O = n.context, P = n.getNodeData().options.map((ze, gn) => ({ value: gn.toString(), label: ze.description })), I = n.getNodeData(), M = I.selectedOption;
  M === void 0 && console.log("selectedOption", I);
  const W = n.getChildren(M), U = n.getNodeId(), G = n.getNodeType(), Z = !!(w && w.node && n.isChildOf(w.node)), ne = `${G}-${U}`, oe = w && Z ? w.id : ne, {
    attributes: ye,
    listeners: ee,
    setNodeRef: me,
    transform: ve
    // transition,
  } = vy({ id: oe, data: { node: Z ? w.node : n } }), {
    setNodeRef: De,
    isOver: we
  } = X1({
    id: oe,
    disabled: Z || C,
    data: { node: n }
  }), Y = {
    transform: yu.Transform.toString(ve),
    // transition,
    ...w && w.id !== `${_ == null ? void 0 : _.id}` ? { opacity: 0.9 } : {}
  }, le = !!we && (N == null ? void 0 : N.position) === "on";
  w == null || w.id, w && w.id;
  const he = we && N && N.id === ne ? {
    ...N.position === "above" ? {
      paddingTop: "12px",
      // backgroundColor: 'rgba(230, 220, 200, .1)',
      // background: 'linear-gradient(rgba(230, 220, 200, .1) 0%, rgba(230, 220, 200, .1) 30%, rgba(230, 220, 200, 0) 30%, rgba(230, 220, 200, 0) 100%)',
      transition: "padding-top 0.3s ease padding-bottom 0.3s ease transform 0.3s ease",
      transform: "translateY(12px)"
    } : {},
    ...N.position === "below" ? {
      transform: "translateY(-12px)",
      transition: "padding-top 0.3s ease padding-bottom 0.3s ease transform 0.3s ease",
      // backgroundColor: 'rgba(230, 220, 200, .1)',
      // background: 'linear-gradient(rgba(230, 220, 200, 0) 0%, rgba(230, 220, 200, 0) 70%, rgba(230, 220, 200, .1) 70%, rgba(230, 220, 200, .1) 100%)',
      paddingBottom: "12px"
    } : {}
    // ...(dragOverInfo.position === 'on' ? {
    //   transform: 'scale(1.1)',
    // } : {}),
    // backgroundColor: 'rgba(255, 230, 230, 0.1)',
  } : {
    overflow: "hidden",
    backgroundColor: "transparent"
  }, $e = Ru.isEqual(O.data.focus.route, n.getRoute()), je = O.data.focus.char, Ue = (ze) => {
    console.log("setFocus", ze), ze !== je && O.setFocus(n.getRoute(), ze);
  }, Le = () => {
    n.moveFocusUp();
  }, lt = () => {
    n.moveFocusDown();
  }, Me = () => {
    console.log("undo", R == null ? void 0 : R.canUndo), R != null && R.canUndo && (R != null && R.undo) && (R == null || R.undo());
  }, Be = () => {
    console.log("redo", R == null ? void 0 : R.canRedo), R != null && R.canRedo && (R != null && R.redo) && (R == null || R.redo());
  }, ie = async () => {
    if (R != null && R.canPromptGPT && (R != null && R.promptGPT)) {
      const [ze, gn] = await J1(R.promptGPT, n);
      ze ? O.setNodes(ze.data.nodes) : R != null && R.toast && R.toast({
        title: "Error",
        description: "No suggestions could be generated",
        duration: 5e3
      });
    } else {
      console.error("No authedApi");
      const ze = new Error("No authedApi");
      throw ze.cause = "unauthorized", ze;
    }
  }, We = () => {
    console.log("HERE focus"), O.setFocus(n.getRoute(), je);
  }, rt = zs();
  rt.width && rt.width < 500;
  const dn = rt.width ? Math.floor((rt.width - 500) / 100) : 0, Ke = $ == null ? void 0 : $.RowComponent;
  return /* @__PURE__ */ j("div", { className: `w-full border-t ${$e ? "bg-white/5" : ""} max-w-svw border-box`, children: [
    /* @__PURE__ */ T("div", { style: { ...Y }, className: "flex w-full rounded-sm", ref: me, ...ye, ...ee, children: /* @__PURE__ */ j(
      "div",
      {
        style: {
          ...he,
          width: "calc(100%)",
          paddingLeft: `${(dn - o) * 1.5}rem`
        },
        ref: De,
        className: "flex items-center cursor-text ",
        children: [
          o > 0 && W.length > 0 && /* @__PURE__ */ T("div", { className: "right-box ", style: {
            width: "1.6rem"
          }, children: /* @__PURE__ */ T("div", { className: "pl-1", children: /* @__PURE__ */ T(
            "span",
            {
              onClick: y,
              className: "py-3 cursor-pointer",
              children: I.collapsed ? /* @__PURE__ */ T(Pb, { size: "15px" }) : /* @__PURE__ */ T(Rb, { size: "15px" })
            }
          ) }) }),
          /* @__PURE__ */ T("div", { className: "left-box", style: {
            width: "2rem"
          }, children: /* @__PURE__ */ T("span", { className: "px-1", children: /* @__PURE__ */ T(
            qS,
            {
              node: n,
              hasChildren: W.length > 0,
              context: O
            }
          ) }) }),
          /* @__PURE__ */ j("div", { className: "flex flex-initial grow", children: [
            /* @__PURE__ */ T("div", { className: "flex flex-initial grow", children: /* @__PURE__ */ T(
              RE,
              {
                className: "w-full bg-transparent",
                handleTextEdit: r,
                handleChange: s,
                getFocus: We,
                addYoungerSibling: c,
                moveLeft: l,
                moveRight: u,
                deleteRow: f,
                addOption: m,
                moveFocusDown: lt,
                moveFocusUp: Le,
                toggleCollapse: y,
                deleteOption: b,
                suggestOption: ie,
                moveDown: h,
                moveUp: v,
                handleRedo: Be,
                handleUndo: Me,
                selectedIndex: M,
                values: P,
                locked: O.locked || C,
                setFocus: Ue,
                draggingOver: !!we,
                draggingOn: le,
                isDragging: w ? w.id === `${_ == null ? void 0 : _.id}` : !1,
                hasFocus: $e,
                focusChar: je,
                variant: "text-mimic",
                defaultValue: M.toString()
              }
            ) }),
            Ke && /* @__PURE__ */ T("div", { className: "right-box", children: /* @__PURE__ */ T(Ke, { node: n, options: R }) })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ T("div", { className: " ", children: !I.collapsed && o > 0 && W.length > 0 && /* @__PURE__ */ T(
      ew,
      {
        rows: W,
        rowDepth: o - 1,
        context: O,
        dragging: w,
        dragOverInfo: N,
        parentNode: n,
        locked: O.locked || C,
        activeModule: $,
        options: R
      }
    ) })
  ] });
};
function qS({
  node: n,
  // allowedChildren,
  hasChildren: o,
  context: r
}) {
  const [s, c] = at.useState(!1), l = () => {
    u();
  }, u = () => {
    r.setTrail(n.getRoute());
  };
  return /* @__PURE__ */ j(Yo, { children: [
    /* @__PURE__ */ T(ax, { open: s, onOpenChange: c, children: /* @__PURE__ */ j(O1, { side: "left", children: [
      /* @__PURE__ */ T(R1, { children: "Actions" }),
      /* @__PURE__ */ T("div", { children: /* @__PURE__ */ T("div", { className: "flex items-center px-3", children: /* @__PURE__ */ j("div", { className: "flex w-60 justify-around", children: [
        /* @__PURE__ */ T(Ve, { variant: "destructive", onClick: () => {
          const v = r.snipNode(n.getRoute());
          v.updateData(v.data), c(!1);
        }, children: /* @__PURE__ */ T(bb, {}) }),
        /* @__PURE__ */ T(Ve, { variant: "destructive", onClick: () => {
          const v = r.deleteNode(n.getRoute());
          v.updateData(v.data), c(!1);
        }, children: /* @__PURE__ */ T(Lb, {}) })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ T(
      Ve,
      {
        variant: "secondary",
        style: { background: "transparent", padding: "10px 10px 10px 0px" },
        onKeyDown: (v) => {
          v.stopPropagation(), c(!0);
        },
        onClick: l,
        children: /* @__PURE__ */ T(yb, { style: {
          opacity: o ? 1 : 0.5
        } })
      }
    )
  ] });
}
const YS = N1(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 pl-4 py-2 pr-3",
        sm: "h-9 rounded-md pl-3 pr-3",
        lg: "h-11 rounded-md pl-8 pr-3",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), ju = z.forwardRef(
  ({ className: n, variant: o, size: r, asChild: s = !1, ...c }, l) => /* @__PURE__ */ T(
    s ? Xo : "button",
    {
      className: Dt(YS({ variant: o, size: r, className: n })),
      ref: l,
      ...c
    }
  )
);
ju.displayName = "StepButton";
function ZS({
  values: n,
  searchMessage: o = "Search...",
  selectMessage: r = "Select...",
  emptyMessage: s = "No results",
  // defaultValue,
  selectedIndex: c,
  // handleTextEdit,
  isDragging: l,
  // draggingOver,
  // draggingOn,
  handleChange: u,
  // addYoungerSibling,
  moveLeft: f,
  moveRight: h,
  moveUp: v,
  moveDown: b,
  moveFocusUp: m,
  moveFocusDown: C,
  // deleteOption,
  // deleteRow,
  // addOption,
  // handleUndo,
  // handleRedo,
  toggleCollapse: y,
  variant: N = "default",
  hasFocus: w,
  // focusChar,
  setFocus: _,
  // locked,
  added: $,
  removed: R,
  ...O
}) {
  const [P, I] = z.useState(!1), [M, W] = z.useState(c.toString() || "0");
  z.useEffect(() => {
    if (c !== void 0) {
      if (n.length < 1)
        throw new Error("values.length < 1");
      W(c.toString() || "0");
    }
  }, [c]);
  const U = {
    default: "w-[200px] justify-between",
    "text-mimic": "w-full justify-between text-left display-flex"
  }[N], G = {
    default: {},
    "text-mimic": {
      width: "50vw",
      fontSize: "1rem",
      fontWeight: "normal",
      paddingRight: "5px"
    }
  }[N];
  return z.useEffect(() => {
    console.log("hasFocus", w);
  }, [w]), /* @__PURE__ */ j(Ju, { open: P, onOpenChange: I, children: [
    /* @__PURE__ */ T(Qu, { asChild: !0, children: /* @__PURE__ */ j("div", { style: {
      position: "relative",
      opacity: 1
    }, children: [
      /* @__PURE__ */ T(
        ju,
        {
          variant: "outline",
          role: "combobox",
          size: "lg",
          "aria-expanded": P,
          className: `${U} text-right px-2  ${$ ? "ring-emerald-900" : R ? "ring-destructive-900" : "border-white"}`,
          style: {
            ...G
            // ...dropStyle,
            // border: '1px solid black',
          },
          ...O,
          children: /* @__PURE__ */ T("div", { className: "w-full justify-end items-end flex p-0", children: /* @__PURE__ */ T(Mu, { className: `h-4 ${n.length > 1 ? "text-teal-100/80" : "opacity-80 fill-white"}`, style: {
            padding: "0px 0px 0px 0px"
          } }) })
        }
      ),
      /* @__PURE__ */ T("div", { style: {
        zIndex: "3",
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%"
        // ...dropOnStyle
      }, className: "rounded-sm", children: /* @__PURE__ */ T("div", { className: "w-full px-3 py-2", children: n[parseInt(M)] || /* @__PURE__ */ T("span", { className: "opacity-50", children: "New Option" }) }) })
    ] }) }),
    /* @__PURE__ */ T(Yl, { className: "w-[200px] p-0", children: /* @__PURE__ */ j(Gl, { children: [
      /* @__PURE__ */ T(Kl, { children: s }),
      /* @__PURE__ */ T(ps, { children: n.map((Z, ne) => /* @__PURE__ */ j(
        Vl,
        {
          value: ne.toString(),
          onSelect: (oe) => {
            W(oe === M ? M : oe), u(oe), I(!1);
          },
          children: [
            Z || /* @__PURE__ */ T("span", { className: "opacity-50", children: "New Option" }),
            /* @__PURE__ */ T(
              Fu,
              {
                className: Dt(
                  "ml-auto h-4 w-4",
                  c === ne ? "opacity-100" : "opacity-0"
                )
              }
            )
          ]
        },
        ne
      )) })
    ] }) })
  ] });
}
const Q1 = ({
  parentNode: n,
  context: o,
  // value,
  dragging: r,
  rowDepth: s,
  dragOverInfo: c,
  locked: l,
  activeModule: u,
  options: f
}) => {
  const h = n.getMergeChildren();
  n.getMergedIndex();
  const v = h.map(({ node: C }, y) => {
    const N = C.getNodeId();
    return {
      id: `${C.getNodeType()}-${N}`,
      data: { node: C }
    };
  }), b = (C) => {
    o.setNodes(C.data.nodes);
  }, m = zs();
  return m.width !== void 0 && m.width < 500, /* @__PURE__ */ T("div", { children: h.length > 0 && h.map(({ node: C, added: y, removed: N }, w) => {
    const _ = C.getNodeData(), $ = (U) => {
      console.log("handleChange", U);
      const G = { ..._, selectedOption: parseInt(U) }, Z = o.setNode(C, G);
      b(Z);
    }, R = () => {
      const U = C.getNodeData(), G = { ...U, collapsed: !_.collapsed };
      console.log("collapseNodeData", U, _.collapsed, G), C.setNodeData(G);
    }, O = () => {
      console.log("moveLeft", w), o.moveNodeLeft(C.getRoute());
    }, P = () => {
      console.log("moveRight", w), o.moveNodeRight(C.getRoute());
    }, I = () => {
      console.log("moveUp", w);
    }, M = () => {
      console.log("moveDown", w);
    }, W = v[w];
    if (W === void 0)
      throw new Error("item is undefined");
    return /* @__PURE__ */ T("div", { className: `HERE-${w}`, children: /* @__PURE__ */ T(
      my,
      {
        node: C,
        dragItem: W,
        dragging: r,
        dragOverInfo: c,
        locked: l,
        moveLeft: O,
        moveRight: P,
        moveUp: I,
        moveDown: M,
        toggleCollapse: R,
        handleChange: $,
        rowDepth: s,
        added: y,
        removed: N,
        options: f
      }
    ) }, w);
  }) });
}, my = ({
  node: n,
  rowDepth: o,
  handleChange: r,
  moveLeft: s,
  moveRight: c,
  moveDown: l,
  moveUp: u,
  locked: f,
  toggleCollapse: h,
  dragOverInfo: v,
  dragging: b,
  dragItem: m,
  added: C,
  removed: y,
  options: N
}) => {
  const w = n.context, _ = n.getNodeData(), $ = _.selectedOption;
  $ === void 0 && console.log("selectedOption", _);
  const R = n.getChildren($), O = n.getNodeId(), P = n.getNodeType(), I = !!(b && b.node && n.isChildOf(b.node)), M = `${P}-${O}`, W = b && I ? b.id : M, {
    attributes: U,
    listeners: G,
    setNodeRef: Z,
    transform: ne
    // transition,
  } = vy({ id: W, data: { node: I ? b.node : n } }), {
    setNodeRef: oe,
    isOver: ye
  } = X1({
    id: W,
    disabled: I || f,
    data: { node: n }
  }), ee = {
    transform: yu.Transform.toString(ne),
    // transition,
    ...b && b.id !== `${m == null ? void 0 : m.id}` ? { opacity: 0.9 } : {}
  };
  ye && (v == null || v.position), b == null || b.id, b && b.id;
  const ve = ye && v && v.id === M ? {
    ...v.position === "above" ? {
      paddingTop: "12px",
      // backgroundColor: 'rgba(230, 220, 200, .1)',
      // background: 'linear-gradient(rgba(230, 220, 200, .1) 0%, rgba(230, 220, 200, .1) 30%, rgba(230, 220, 200, 0) 30%, rgba(230, 220, 200, 0) 100%)',
      transition: "padding-top 0.3s ease padding-bottom 0.3s ease transform 0.3s ease",
      transform: "translateY(12px)"
    } : {},
    ...v.position === "below" ? {
      transform: "translateY(-12px)",
      transition: "padding-top 0.3s ease padding-bottom 0.3s ease transform 0.3s ease",
      // backgroundColor: 'rgba(230, 220, 200, .1)',
      // background: 'linear-gradient(rgba(230, 220, 200, 0) 0%, rgba(230, 220, 200, 0) 70%, rgba(230, 220, 200, .1) 70%, rgba(230, 220, 200, .1) 100%)',
      paddingBottom: "12px"
    } : {}
    // ...(dragOverInfo.position === 'on' ? {
    //   transform: 'scale(1.1)',
    // } : {}),
    // backgroundColor: 'rgba(255, 230, 230, 0.1)',
  } : {
    overflow: "hidden",
    backgroundColor: "transparent"
  }, De = Ru.isEqual(w.data.focus.route, n.getRoute()), we = w.data.focus.char, Y = (Me) => {
    Me !== we && w.setFocus(n.getRoute(), Me);
  }, le = () => {
    n.moveFocusUp();
  }, ae = () => {
    n.moveFocusDown();
  }, he = zs(), $e = he.width && he.width < 500, je = () => {
    const Me = n.acceptMerge();
    Me.updateData(Me.data);
  }, Ue = () => {
    const Me = n.rejectMerge();
    Me.updateData(Me.data);
  }, Le = () => {
    const Me = n.bothMerge();
    Me.updateData(Me.data);
  }, lt = n.hasMerge() ? n.getMergeOptions().map((Me, Be) => /* @__PURE__ */ T(Yo, { children: Me.description.map((ie, We) => /* @__PURE__ */ T(
    "span",
    {
      className: `${ie.added ? "bg-emerald-950/90" : ie.removed ? "text-destructive bg-destructive-950/90" : ""}`,
      children: ie.value
    },
    We
  )) }), []) : n.getNodeData().options.map((Me, Be) => /* @__PURE__ */ T("span", { children: Me.description }, Be));
  return /* @__PURE__ */ j("div", { className: "w-full", children: [
    /* @__PURE__ */ T("div", { style: { ...ee }, className: "flex w-full rounded-sm", ref: Z, ...U, ...G, children: /* @__PURE__ */ j(
      "div",
      {
        style: ve,
        ref: oe,
        className: "flex items-center h-16 w-full",
        children: [
          /* @__PURE__ */ T("div", { className: "flex-none w-25 flex", children: /* @__PURE__ */ j("div", { className: `flex ${$e ? "w-25" : "w-100"} pl-3`, children: [
            o > 0 && R.length > 0 ? /* @__PURE__ */ T(
              "span",
              {
                onClick: h,
                className: "px-3 py-3",
                children: _.collapsed ? /* @__PURE__ */ T(Pb, { size: "15px" }) : /* @__PURE__ */ T(Rb, { size: "15px" })
              }
            ) : $e ? /* @__PURE__ */ T(Yo, {}) : /* @__PURE__ */ T("span", { className: "px-3", children: "    " }),
            /* @__PURE__ */ T("span", { className: "px-1", children: /* @__PURE__ */ T(
              XS,
              {
                node: n,
                hasChildren: R.length > 0,
                context: w
              }
            ) }),
            /* @__PURE__ */ T(
              "span",
              {
                className: "pr-1 py-3",
                style: {
                  opacity: (b == null ? void 0 : b.id) === `${m == null ? void 0 : m.id}` ? "1" : "0"
                },
                children: /* @__PURE__ */ T(Jy, {})
              }
            )
          ] }) }),
          /* @__PURE__ */ T("div", { className: "flex flex-initial w-full", children: /* @__PURE__ */ j("div", { className: "flex", style: {
            width: "60vw"
          }, children: [
            /* @__PURE__ */ T(
              ZS,
              {
                className: "w-full bg-transparent",
                handleChange: r,
                moveLeft: s,
                moveRight: c,
                moveFocusDown: ae,
                moveFocusUp: le,
                toggleCollapse: h,
                moveDown: l,
                moveUp: u,
                added: C,
                removed: y,
                selectedIndex: $,
                values: lt,
                setFocus: Y,
                isDragging: b ? b.id === `${m == null ? void 0 : m.id}` : !1,
                hasFocus: De,
                variant: "text-mimic",
                defaultValue: $.toString()
              }
            ),
            /* @__PURE__ */ j("div", { style: { minWidth: "80px" }, className: "flex items-center justify-end", children: [
              /* @__PURE__ */ j(Ve, { className: "bg-amber-200/70 p-1 h-7 ", onClick: Le, children: [
                /* @__PURE__ */ T(jC, { size: "1rem" }),
                " "
              ] }),
              /* @__PURE__ */ j(Ve, { className: "bg-emerald-700 p-1 h-7", onClick: je, children: [
                /* @__PURE__ */ T(qC, { size: "1rem" }),
                " "
              ] }),
              /* @__PURE__ */ j(Ve, { variant: "destructive", className: "p-1 h-7", onClick: Ue, children: [
                /* @__PURE__ */ T(r2, { size: "1rem" }),
                " "
              ] })
            ] })
          ] }) })
        ]
      }
    ) }),
    /* @__PURE__ */ T("div", { className: `${$e ? "pl-2" : "pl-8"}`, children: !_.collapsed && o > 0 && R.length > 0 && /* @__PURE__ */ T(
      Q1,
      {
        rowDepth: o - 1,
        context: w,
        dragging: b,
        dragOverInfo: v,
        parentNode: n,
        locked: !0,
        options: N
      }
    ) })
  ] });
};
function XS({
  node: n,
  // allowedChildren,
  hasChildren: o,
  context: r
}) {
  const [s, c] = at.useState(!1), l = () => {
    u();
  }, u = () => {
    r.setTrail(n.getRoute());
  };
  return /* @__PURE__ */ j(Yo, { children: [
    /* @__PURE__ */ T(ax, { open: s, onOpenChange: c, children: /* @__PURE__ */ j(O1, { side: "left", children: [
      /* @__PURE__ */ T(R1, { children: "Actions" }),
      /* @__PURE__ */ T("div", { children: /* @__PURE__ */ T("div", { className: "flex items-center px-3", children: /* @__PURE__ */ j("div", { className: "flex w-60 justify-around", children: [
        /* @__PURE__ */ T(Ve, { variant: "destructive", onClick: () => {
          const v = r.snipNode(n.getRoute());
          v.updateData(v.data), c(!1);
        }, children: /* @__PURE__ */ T(bb, {}) }),
        /* @__PURE__ */ T(Ve, { variant: "destructive", onClick: () => {
          const v = r.deleteNode(n.getRoute());
          v.updateData(v.data), c(!1);
        }, children: /* @__PURE__ */ T(Lb, {}) })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ T(
      Ve,
      {
        variant: "secondary",
        style: { background: "transparent", padding: "10px 10px 10px 0px" },
        onKeyDown: (v) => {
          v.stopPropagation(), c(!0);
        },
        onClick: l,
        children: /* @__PURE__ */ T(yb, { style: {
          opacity: o ? 1 : 0.5
        } })
      }
    )
  ] });
}
const j1 = async (n, o) => {
  const r = o.getRoute(), [s, ...c] = r;
  localStorage.getItem("token");
  const {
    description: l,
    content: u
  } = o.getOptionContent(), f = c.map((M, W) => {
    const U = [s, ...c.slice(0, W + 1)];
    return o.context.getNode(U).getOptionContent().description;
  }), [h, ...v] = f.slice().reverse(), b = "You are part of a group of workers building a tree of subtasks to describe a project, which may be big or small.  As such, you do not provide information that is not directly related to the subtask at hand because it will probably be provided by another worker", m = "PLEASE OUTPUT SINGLE VALID JSON ARRAY OF STRINGS < 50 CHARS PER ENTRY.  ", C = `Please create 3-7 subtasks of the following task: ${h}.  For context, this is a subtask of ${v.join(" subtask of the task ")}.  Please do not provide subtasks which are likely included in other branches.  If necessary, group information into a single subtask`, N = `${m} ${C} Please output only single json array containing only strings.`;
  console.log("PROMPT", N, b);
  const _ = (await n(b, N).catch((M) => {
    throw console.log("error", M), new Error("error getting suggestions");
  })).choices.map((M) => M.message.content);
  console.log("messages", _);
  const $ = _.map((M) => {
    const W = M.match(/.*(\[[^\][]*\]).*/m);
    if (!W || !W[1])
      throw new Error(`Could not parse response: ${M}`);
    return JSON.parse(W[1]);
  });
  if ($.length === 0)
    throw console.log("messages", _), new Error("No task sets found");
  $.length > 1 && console.warn("More than one task set found", _);
  const O = $[0].map((M) => ({
    description: `${l}: ${M}`,
    selectedOption: 0,
    collapsed: !1,
    options: [{
      description: M,
      data: {},
      content: []
    }]
  }));
  console.log("suggestion1");
  const P = o.getNodeData();
  if (u.length > 0) {
    console.log("suggestion1");
    const M = o.context.addOptionToNode(o.getRoute(), { description: l, data: {}, content: [] }), W = P.options.length, U = M.getNode(o.getRoute()), G = U.getNodeData();
    U.setNodeData({
      ...G,
      selectedOption: W
    });
  }
  return [o.context.addChildrenToNode(o, O), null];
}, Xl = async (n, o, {
  pattern: r,
  parsePattern: s,
  systemPromptBase: c,
  getUserPromptBase: l,
  systemPromptRecursive: u,
  getUserPromptRecursive: f,
  getResourceInfo: h,
  setResourceInfo: v,
  checkResourceInfo: b
}) => {
  const m = o.getRoute(), [C, ...y] = m;
  console.log("starting to suggest", o.getRoute(), o.context);
  const N = y.map(($, R) => {
    const O = [C, ...y.slice(0, R + 1)];
    return o.context.getNode(O).getOptionContent().description;
  }), w = async ($, R, O) => {
    const P = $.getOptionContent(R), I = $.getChildren(R);
    if (console.log("getChildTimes", $.getRoute(), $.getData(), $.context), I.length === 0) {
      const M = b($);
      if (console.log("resourceInfo", M), M)
        return $.context;
      {
        let W = $.context;
        const U = c, G = l(P.description, O, $);
        if (console.log("systemPrompt", U, G), !U || !G)
          throw new Error("missing prompt");
        const oe = (await n(U, G).catch((ee) => {
          throw console.log("error", ee), new Error("error getting suggestions");
        })).choices.map((ee) => {
          const me = ee.message.content.match(r);
          if (!me || !me[1])
            throw new Error(`Could not parse response: ${ee.message.content}`);
          return JSON.parse(me[1]);
        })[0], ye = W.getNode($.getRoute());
        return W = v(ye, s(oe, ye)), W;
      }
    } else {
      let M = $.context;
      for (const G of I) {
        const ne = G.getNodeData().options;
        let oe = 0;
        for (const ye of ne) {
          const ee = M.getNode(G.getRoute());
          M = await w(ee, oe++, [...O, ye.description]);
        }
      }
      const W = M.getNode($.getRoute()), U = b(W);
      if (console.log("resourceInfo", U), !U) {
        const G = u, Z = f(P.description, O, W);
        if (console.log("systemPrompt", G, Z), !G || !Z)
          throw new Error("missing prompt");
        const ye = (await n(G, Z).catch((me) => {
          throw console.log("error", me), new Error("error getting suggestions");
        })).choices.map((me) => {
          const ve = me.message.content.match(r);
          if (!ve || !ve[1])
            throw new Error(`Could not parse response: ${me.message.content}`);
          return JSON.parse(ve[1]);
        })[0], ee = M.getNode(W.getRoute());
        return M = v(M.getNode(ee.getRoute()), s(ye, ee)), M;
      }
      return M;
    }
  }, _ = await w(o, o.getNodeData().selectedOption, N);
  return console.log("contextWithTimes", _.data.nodes), _;
}, wy = (n) => {
  const o = Math.floor(n / 31536e6), r = n - o * (1e3 * 60 * 60 * 24 * 365), s = Math.floor(r / (1e3 * 60 * 60 * 24 * 30)), c = r - s * (1e3 * 60 * 60 * 24 * 30), l = Math.floor(c / (1e3 * 60 * 60 * 24 * 7)), u = c - l * (1e3 * 60 * 60 * 24 * 7), f = Math.floor(u / (1e3 * 60 * 60 * 24)), h = u - f * (1e3 * 60 * 60 * 24), v = Math.floor(h / (1e3 * 60 * 60)), b = h - v * (1e3 * 60 * 60), m = Math.floor(b / (1e3 * 60)), C = b - m * (1e3 * 60), y = Math.floor(C / 1e3), w = C - y * 1e3;
  return { years: o, months: s, weeks: l, days: f, hours: v, minutes: m, seconds: y, milliseconds: w };
}, by = (n) => {
  try {
    const o = n.milliseconds || 0, r = (n.seconds || 0) * 1e3, s = (n.minutes || 0) * 60 * 1e3, c = (n.hours || 0) * 60 * 60 * 1e3, l = (n.days || 0) * 24 * 60 * 60 * 1e3, u = (n.weeks || 0) * 7 * 24 * 60 * 60 * 1e3, f = (n.months || 0) * 30 * 24 * 60 * 60 * 1e3, h = (n.years || 0) * 365 * 24 * 60 * 60 * 1e3;
    return o + r + s + c + l + u + f + h;
  } catch (o) {
    throw console.error("Error converting duration to ms", n, o), o;
  }
}, uu = (n) => {
  const {
    years: o,
    months: r,
    weeks: s,
    days: c,
    hours: l,
    minutes: u,
    seconds: f,
    milliseconds: h
  } = wy(n), v = `${l}:`, b = u < 10 ? `0${u}` : `${u}`, m = f < 10 ? `0${f}` : `${f}`, C = o || r || s || c || l ? `.${(h / 1e3).toFixed(3).slice(2)}` : "";
  return `${o ? `${o} yr, ` : ""}${r ? `${r} mo, ` : ""}${s ? `${s} wk, ` : ""}${c ? `${c} days, ` : ""} ${v}${b}:${m}${C}`;
}, JS = ({ value: n, onUpdate: o, ...r }) => {
  const s = de(null), [c, l] = Te(0), [u, f] = Te(0);
  be(() => {
    const P = () => {
      if (s.current) {
        const I = s.current.offsetWidth, M = 60;
        l(Math.floor((I - 50) / M) || 1);
      }
    };
    return P(), window.addEventListener("resize", P), () => {
      window.removeEventListener("resize", P);
    };
  }, []);
  const h = () => {
    f((P) => Math.min(P + 1, O.length - c));
  }, v = () => {
    f((P) => Math.max(P - 1, 0));
  }, {
    years: b,
    months: m,
    weeks: C,
    days: y,
    hours: N,
    minutes: w,
    seconds: _,
    milliseconds: $
  } = wy(n), R = (P) => {
    const { name: I, value: M } = P.target, W = { years: b, months: m, weeks: C, days: y, hours: N, minutes: w, seconds: _, milliseconds: $ };
    W[I] = parseInt(M), o(by(W));
  }, O = [
    { label: "Years", name: "years", value: b },
    { label: "Months", name: "months", value: m },
    { label: "Weeks", name: "weeks", value: C },
    { label: "Days", name: "days", value: y },
    { label: "Hours", name: "hours", value: N },
    { label: "Minutes", name: "minutes", value: w },
    { label: "Seconds", name: "seconds", value: _ },
    { label: "Milliseconds", name: "milliseconds", value: $ }
  ];
  return /* @__PURE__ */ T("div", { className: r.className || "", style: { ...r.style || {} }, children: /* @__PURE__ */ j("div", { className: "flex", children: [
    c < O.length - 1 && /* @__PURE__ */ T("button", { onClick: v, disabled: u === 0, children: /* @__PURE__ */ T(YC, {}) }),
    /* @__PURE__ */ T("div", { ref: s, style: {
      width: "calc(100% - 20px)"
    }, children: O.slice(u, u + c).map(({ label: P, name: I, value: M }) => /* @__PURE__ */ T("div", { className: "w-16 text-xs mx-1 inline-block", children: /* @__PURE__ */ j("label", { className: "block", children: [
      P,
      ":",
      /* @__PURE__ */ T(
        "input",
        {
          type: "number",
          name: I,
          className: "w-full text-lg",
          value: M,
          onChange: R
        }
      )
    ] }) }, I)) }),
    c < O.length && /* @__PURE__ */ T("button", { onClick: h, disabled: u + c >= O.length, children: /* @__PURE__ */ T(ZC, {}) })
  ] }) });
}, QS = ({ node: n, options: o }) => {
  const r = Os(n), s = (y) => {
    Pu(n, y);
  }, c = async () => {
    n.setPath({ [n.getNodeData().selectedOption]: r.minPaths });
  }, l = async () => {
    n.setPath({ [n.getNodeData().selectedOption]: r.maxPaths });
  }, u = 'Take a deep breath.  Please respond only with a single valid JSON object with the optional keys "milliseconds", "seconds", "minutes", "hours", "days", "weeks", "months", or "years" and a number value', f = (y, N, w) => `How long does it take to ${y} in the as a subtask of ${N.join(" subtask of the task ")} please express in terms of milliseconds, seconds, minutes, hours, days, weeks, months, or years.`, h = 'Take a deep breath.  Please respond only with a single valid JSON object with the optional keys "milliseconds", "seconds", "minutes", "hours", "days", "weeks", "months", or "years" and a number value', v = (y, N, w) => {
    const _ = Os(w);
    return `How long does it take to ${y} in the as a subtask of ${N.join(" subtask of the task ")} please express in terms of milliseconds, seconds, minutes, hours, days, weeks, months, or years., but factoring out the time of its subtasks, which are estimated to take somewhere between ${_.min} and ${_.max}, averaging ${_.average}. This will leave only the marginal time, which is the information we want.`;
  }, b = /.*(\{[^{}]*\}).*/m, m = (y, N) => (console.log("parsePattern", y), { marginal: by(y) });
  return /* @__PURE__ */ j("div", { className: "w-full text-center overflow-hidden", children: [
    /* @__PURE__ */ j("div", { className: "mx-auto items-center justify-center gap-1.5 flex items-center", children: [
      /* @__PURE__ */ T(Ve, { variant: "secondary", className: "bg-emerald-900 inline-block w-14", onClick: async () => {
        if (o != null && o.canPromptGPT && (o != null && o.promptGPT)) {
          const y = await Xl(o.promptGPT, n, {
            systemPromptBase: u,
            getUserPromptBase: f,
            systemPromptRecursive: h,
            getUserPromptRecursive: v,
            pattern: b,
            parsePattern: m,
            getResourceInfo: Os,
            setResourceInfo: Pu,
            checkResourceInfo: jS
          });
          y ? n.context.setNodes(y.data.nodes) : o != null && o.toast && o.toast({
            title: "Error",
            description: "No suggestions could be generated",
            duration: 5e3
          });
        } else {
          console.error("No authedApi");
          const y = new Error("No authedApi");
          throw y.cause = "unauthorized", y;
        }
      }, title: "Get estimated duration", children: /* @__PURE__ */ T(Wo, {}) }),
      /* @__PURE__ */ T(JS, { value: r.marginal, onUpdate: (y) => s({ marginal: y }), className: "", style: {
        width: "calc(100% - 4rem)",
        maxWidth: "600px",
        display: "inline-block"
      } })
    ] }),
    /* @__PURE__ */ j("div", { className: "flex flex-row justify-stretch items-center mx-auto", style: { maxWidth: "600px" }, children: [
      /* @__PURE__ */ j("div", { className: "px-3 overflow-hidden w-1/2", children: [
        /* @__PURE__ */ j("div", { title: "Time of Currently Selected Path", children: [
          " Curr: ",
          uu(r.current),
          " "
        ] }),
        /* @__PURE__ */ j("div", { title: "Time of Average Path", children: [
          " Avg: ",
          uu(r.average),
          " "
        ] })
      ] }),
      /* @__PURE__ */ j("div", { className: "px-3 overflow-hidden w-1/2", children: [
        /* @__PURE__ */ j(Ve, { variant: "secondary", className: "bg-emerald-900 p-1", onClick: c, title: "Set min duration path", children: [
          " ",
          /* @__PURE__ */ j("div", { className: "w-full", children: [
            "Min: ",
            uu(r.min),
            " "
          ] })
        ] }),
        /* @__PURE__ */ j(Ve, { variant: "secondary", className: "bg-emerald-900 p-1", onClick: l, title: "Set max duration path", children: [
          " ",
          /* @__PURE__ */ j("div", { className: "w-full", children: [
            "Max: ",
            uu(r.max),
            " "
          ] })
        ] })
      ] })
    ] })
  ] });
}, Os = (n, o) => {
  var u, f;
  const r = n.parseIndex(o), s = n.getChildren(r), l = ((f = (u = n.getOptionContent(r).data) == null ? void 0 : u.duration) == null ? void 0 : f.marginal) || 0;
  if (s.length === 0)
    return {
      min: l,
      max: l,
      average: l,
      current: l,
      minPaths: [],
      maxPaths: [],
      marginal: l
    };
  {
    let h = 0, v = 0, b = 0, m = 0;
    const C = [], y = [];
    return s.forEach((N, w) => {
      const _ = N.getNodeData(), $ = _.options;
      let R = Number.MAX_SAFE_INTEGER, O = Number.MIN_SAFE_INTEGER, P = 0, I = 0;
      $.forEach((M, W) => {
        const U = Os(N, W);
        U.min < R && (R = U.min, U.minPaths), U.max > O && (O = U.max, U.maxPaths), P = (P * W + U.average) / (W + 1), W === _.selectedOption && (I = U.current);
      }), h += R, v += O, b += P, m += I;
    }), {
      min: h + l,
      max: v + l,
      average: b + l,
      current: m + l,
      minPaths: C,
      maxPaths: y,
      marginal: l
    };
  }
}, Pu = (n, o) => {
  const r = n.getData();
  return n.setData({
    ...r,
    duration: o
  });
}, jS = (n) => !!n.getData().duration, e5 = {
  icon: /* @__PURE__ */ T(n2, {}),
  name: "duration",
  HeadComponent: QS
}, t5 = e5, n5 = async (n, o) => {
  const r = o.getRoute(), [s, ...c] = r, l = c.map((h, v) => {
    const b = [s, ...c.slice(0, v + 1)];
    return o.context.getNode(b).getOptionContent().description;
  }), u = async (h, v, b, m) => {
    const C = h.getOptionContent(v), y = h.getChildren(v);
    if (y.length === 0) {
      let N = h.context, w, _;
      return ["duration"].forEach(async (R) => {
        var O;
        if (!((O = C.data) != null && O[R])) {
          switch (R) {
            case "cost":
              w = 'Take a deep breath.  Please respond only with a single valid JSON object with the key "cost" and a number value', _ = `How much does it cost to ${C.description} in the as a subtask of ${b.join(" subtask of the task ")}`;
              break;
            case "duration":
              w = 'Take a deep breath.  Please respond only with a single valid JSON object with the optional keys "milliseconds", "seconds", "minutes", "hours", "days", "weeks", "months", or "years" and a number value', _ = `How long does it take to ${C.description} in the as a subtask of ${b.join(" subtask of the task ")} please express in terms of milliseconds, seconds, minutes, hours, days, weeks, months, or years.`;
              break;
          }
          const M = (await n(w, _).catch((W) => {
            throw console.log("error", W), new Error("error getting suggestions");
          })).choices.map((W) => {
            const U = W.message.content.match(/.*(\{[^{}]*\}).*/m);
            if (!U || !U[1])
              throw new Error(`Could not parse response: ${W.message.content}`);
            return JSON.parse(U[1]);
          })[0];
          switch (R) {
            case "duration":
              N = Pu(N.getNode(h.getRoute()), { marginal: ib(M) });
              break;
          }
        }
      }), N;
    } else {
      let N = h.context;
      if (["duration"].forEach(async (_) => {
        var R;
        for (const O of y)
          O.getNodeData().options.forEach(async (M, W) => {
            const U = N.getNode(O.getRoute());
            N = await u(U, W, [...b, M.description]);
          });
        const $ = N.getNode(h.getRoute());
        if (!((R = C.data) != null && R[_])) {
          const O = Os($);
          let P, I;
          switch (_) {
            case "duration":
              P = 'Take a deep breath.  Please respond only with a single valid JSON object with the optional keys "milliseconds", "seconds", "minutes", "hours", "days", "weeks", "months", or "years" and a number value', I = `How long does it take to ${C.description} in the as a subtask of ${b.join(" subtask of the task ")} please express in terms of milliseconds, seconds, minutes, hours, days, weeks, months, or years., but factoring out the time of its subtasks, which are estimated to take somewhere between ${O.min} and ${O.max}, averaging ${O.average}. This will leave only the marginal time, which is the information we want.`;
              break;
            default:
              throw new Error(`Resource ${_} not recognized`);
          }
          const U = (await n(P, I).catch((G) => {
            throw console.log("error", G), new Error("error getting suggestions");
          })).choices.map((G) => {
            const Z = G.message.content.match(/.*(\{[^{}]*\}).*/m);
            if (!Z || !Z[1])
              throw new Error(`Could not parse response: ${G.message.content}`);
            return JSON.parse(Z[1]);
          })[0];
          switch (_) {
            case "duration":
              N = Pu(N.getNode(h.getRoute()), { marginal: ib(U) });
              break;
          }
        }
      }), Os(N.getNode(h.getRoute())).average > 30 * 60 * 1e3) {
        const [_, $] = await j1(n, h);
        if (!_)
          throw new Error("error getting suggestions");
        const O = _.getNode(h.getRoute()).getNodeData().options.length;
        N = _;
        for (const P of Array(O).keys()) {
          const I = N.getNode(h.getRoute()), [M, W] = await J1(n, I);
          if (!M)
            throw new Error("error getting suggestions");
          N = M;
        }
        N = await u(h, v, b);
      }
      return N;
    }
  };
  return await u(o, o.getNodeData().selectedOption, l);
}, ib = (n) => {
  const o = n.milliseconds || 0, r = (n.seconds || 0) * 1e3, s = (n.minutes || 0) * 60 * 1e3, c = (n.hours || 0) * 60 * 60 * 1e3, l = (n.days || 0) * 24 * 60 * 60 * 1e3, u = (n.weeks || 0) * 7 * 24 * 60 * 60 * 1e3, f = (n.months || 0) * 30 * 24 * 60 * 60 * 1e3, h = (n.years || 0) * 365 * 24 * 60 * 60 * 1e3;
  return o + r + s + c + l + u + f + h;
}, ew = ({
  parentNode: n,
  rows: o,
  context: r,
  // value,
  dragging: s,
  rowDepth: c,
  dragOverInfo: l,
  locked: u,
  activeModule: f,
  options: h
}) => {
  const v = (N) => {
    const w = r.addNewTaskToOption(n.getRoute(), N);
    r.setNodes(w.data.nodes);
  };
  at.useState(!1);
  const b = async () => {
    if (h != null && h.canPromptGPT && (h != null && h.promptGPT)) {
      const [N, w] = await j1(h.promptGPT, n);
      N ? r.setNodes(N.data.nodes) : h != null && h.toast && h.toast({
        title: "Error",
        description: "No suggestions could be generated",
        duration: 5e3
      });
    } else {
      console.error("No authedApi");
      const N = new Error("No authedApi");
      throw N.cause = "unauthorized", N;
    }
  }, m = async () => {
    if (h != null && h.canPromptGPT && (h != null && h.promptGPT)) {
      const N = await n5(h.promptGPT, n);
      N ? r.setNodes(N.data.nodes) : h != null && h.toast && h.toast({
        title: "Error",
        description: "No suggestions could be generated",
        duration: 5e3
      });
    } else {
      console.error("No authedApi");
      const N = new Error("No authedApi");
      throw N.cause = "unauthorized", N;
    }
  }, C = o.map((N, w) => {
    const _ = N.getNodeId();
    return {
      id: `${N.getNodeType()}-${_}`,
      data: { node: N }
    };
  }), y = zs();
  return y.width !== void 0 && y.width < 500, /* @__PURE__ */ j("div", { children: [
    o.length > 0 && o.map((N, w) => {
      const _ = () => {
        console.log("moveLeft", w), r.moveNodeLeft(N.getRoute());
      }, $ = () => {
        console.log("moveRight", w), r.moveNodeRight(N.getRoute());
      }, R = () => {
        console.log("deleteRow", w), N.deleteNode();
      }, O = () => {
        console.log("moveUp", w);
      }, P = () => {
        console.log("moveDown", w);
      }, I = (G) => {
        N.deleteOption(G);
      }, M = (G) => {
        console.log("handleAddOption", G);
        const Z = r.addOptionToNode(N.getRoute(), void 0, G);
        r.setNodes(Z.data.nodes);
      }, W = () => {
        r.addYoungerSibling(N.getRoute());
      }, U = C[w];
      if (U === void 0)
        throw new Error("item is undefined");
      return /* @__PURE__ */ T("div", { className: `HERE-${w}`, children: /* @__PURE__ */ T(
        r5,
        {
          item: U,
          node: N,
          context: r,
          locked: u,
          rowDepth: c,
          addOption: M,
          addYoungerSibling: () => W(),
          moveLeft: _,
          moveRight: $,
          deleteRow: R,
          moveDown: P,
          moveUp: O,
          deleteOption: I,
          dragging: s,
          dragOverInfo: l,
          index: w,
          activeModule: f,
          options: h
        }
      ) }, w);
    }),
    n.getRoute().length - r.data.trail.length === 0 && /* @__PURE__ */ j("div", { className: "py-3", children: [
      /* @__PURE__ */ T(
        Ve,
        {
          onClick: () => v(),
          className: " bg-secondary text-white-900 hover:bg-secondary/80 h-9 ml-3",
          children: /* @__PURE__ */ T(lC, { height: "1.5rem", width: "1.5rem" })
        }
      ),
      (h == null ? void 0 : h.promptGPT) && /* @__PURE__ */ T(Ve, { className: "bg-emerald-900 h-9 ml-3 hover:brightness-150 hover:bg-emerald-900", disabled: !(h != null && h.canPromptGPT), onClick: b, title: "Get suggested steps", children: /* @__PURE__ */ T(Wo, {}) }),
      (h == null ? void 0 : h.promptGPT) && /* @__PURE__ */ T(Ve, { className: "bg-emerald-900 h-9 ml-3 hover:brightness-150 hover:bg-emerald-900", disabled: !(h != null && h.canPromptGPT), onClick: m, title: "Get suggested steps", children: /* @__PURE__ */ T(tC, { height: "1.5rem", width: "1.5rem" }) })
    ] }, "-1")
  ] });
}, r5 = ({
  item: n,
  context: o,
  dragging: r,
  dragOverInfo: s,
  index: c,
  rowDepth: l,
  addYoungerSibling: u,
  moveLeft: f,
  moveUp: h,
  moveDown: v,
  deleteOption: b,
  moveRight: m,
  deleteRow: C,
  addOption: y,
  locked: N,
  node: w,
  options: _,
  activeModule: $
}) => {
  const R = w.getNodeData(), O = (M) => {
    console.log("handleChange", M);
    const W = { ...R, selectedOption: parseInt(M) }, U = o.setNode(w, W);
    U.updateData(U.data);
  }, P = (M, W) => {
    const U = { ...w.getOptionContent(), description: M }, G = w.updateOptionData(U), Z = o.setFocus(w.getRoute(), W), ne = Z.setNode(w, G);
    Z.updateData(ne.data);
  }, I = () => {
    const M = w.getNodeData(), W = { ...M, collapsed: !R.collapsed };
    console.log("collapseNodeData", M, R.collapsed, W), w.setNodeData(W), w.context.updateData(w.context.data);
  };
  return (
    // <RowComponent key={index} nodes={nodes} left={leftNode} right={rightNode} dragging={dragging} blank={false} updateRow={updateNodes} />
    /* @__PURE__ */ T("div", { className: "flex w-full", children: w.hasMerge() ? /* @__PURE__ */ T(
      my,
      {
        node: w,
        dragItem: n,
        dragging: r,
        dragOverInfo: s,
        locked: N,
        handleChange: O,
        moveRight: m,
        moveLeft: f,
        rowDepth: l,
        toggleCollapse: I,
        moveDown: v,
        moveUp: h,
        options: _
      }
    ) : /* @__PURE__ */ T(
      VS,
      {
        node: w,
        dragItem: n,
        dragging: r,
        dragOverInfo: s,
        locked: N,
        handleChange: O,
        handleTextEdit: P,
        addYoungerSibling: u,
        addOption: y,
        moveRight: m,
        moveLeft: f,
        deleteRow: C,
        rowDepth: l,
        toggleCollapse: I,
        moveDown: v,
        moveUp: h,
        deleteOption: b,
        activeModule: $,
        options: _
      }
    ) })
  );
};
var mt = function() {
  return mt = Object.assign || function(o) {
    for (var r, s = 1, c = arguments.length; s < c; s++) {
      r = arguments[s];
      for (var l in r)
        Object.prototype.hasOwnProperty.call(r, l) && (o[l] = r[l]);
    }
    return o;
  }, mt.apply(this, arguments);
};
function o5(n, o) {
  var r = {};
  for (var s in n)
    Object.prototype.hasOwnProperty.call(n, s) && o.indexOf(s) < 0 && (r[s] = n[s]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, s = Object.getOwnPropertySymbols(n); c < s.length; c++)
      o.indexOf(s[c]) < 0 && Object.prototype.propertyIsEnumerable.call(n, s[c]) && (r[s[c]] = n[s[c]]);
  return r;
}
function or(n, o, r) {
  if (r || arguments.length === 2)
    for (var s = 0, c = o.length, l; s < c; s++)
      (l || !(s in o)) && (l || (l = Array.prototype.slice.call(o, 0, s)), l[s] = o[s]);
  return n.concat(l || Array.prototype.slice.call(o));
}
var Hr = function(n) {
  return n.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}, i5 = { k: 1e3, m: 1e6, b: 1e9 }, s5 = function(n, o) {
  o === void 0 && (o = ".");
  var r = new RegExp("(\\d+(".concat(Hr(o), "\\d*)?)([kmb])$"), "i"), s = n.match(r);
  if (s) {
    var c = s[1], l = s[3], u = i5[l.toLowerCase()];
    return Number(c.replace(o, ".")) * u;
  }
}, a5 = function(n, o) {
  o === void 0 && (o = ",");
  var r = new RegExp(Hr(o), "g");
  return n.replace(r, "");
}, c5 = function(n, o) {
  var r = Hr(o.join("")), s = new RegExp("[^\\d".concat(r, "]"), "gi");
  return n.replace(s, "");
}, qm = function(n) {
  var o = n.value, r = n.groupSeparator, s = r === void 0 ? "," : r, c = n.decimalSeparator, l = c === void 0 ? "." : c, u = n.allowDecimals, f = u === void 0 ? !0 : u, h = n.decimalsLimit, v = h === void 0 ? 2 : h, b = n.allowNegativeValue, m = b === void 0 ? !0 : b, C = n.disableAbbreviations, y = C === void 0 ? !1 : C, N = n.prefix, w = N === void 0 ? "" : N, _ = n.transformRawValue, $ = _ === void 0 ? function(le) {
    return le;
  } : _, R = $(o);
  if (R === "-")
    return R;
  var O = y ? [] : ["k", "m", "b"], P = new RegExp("((^|\\D)-\\d)|(-".concat(Hr(w), ")")), I = P.test(R), M = RegExp("(\\d+)-?".concat(Hr(w))).exec(o) || [], W = M[0], U = M[1], G = w ? W ? R.replace(W, "").concat(U) : R.replace(w, "") : R, Z = a5(G, s), ne = c5(Z, or([
    s,
    l
  ], O, !0)), oe = ne;
  if (!y) {
    if (O.some(function(le) {
      return le === ne.toLowerCase().replace(l, "");
    }))
      return "";
    var ye = s5(ne, l);
    ye && (oe = String(ye));
  }
  var ee = I && m ? "-" : "";
  if (l && oe.includes(l)) {
    var me = ne.split(l), ve = me[0], De = me[1], we = v && De ? De.slice(0, v) : De, Y = f ? "".concat(l).concat(we) : "";
    return "".concat(ee).concat(ve).concat(Y);
  }
  return "".concat(ee).concat(oe);
}, l5 = function(n, o, r) {
  if (r !== void 0 && n.length > 1) {
    if (r === 0)
      return n.replace(o, "");
    if (n.includes(o)) {
      var s = n.split(o), c = s[0], l = s[1];
      if (l.length === r)
        return n;
      if (l.length > r)
        return "".concat(c).concat(o).concat(l.slice(0, r));
    }
    var u = n.length > r ? new RegExp("(\\d+)(\\d{".concat(r, "})")) : new RegExp("(\\d)(\\d+)"), f = n.match(u);
    if (f) {
      var c = f[1], l = f[2];
      return "".concat(c).concat(o).concat(l);
    }
  }
  return n;
}, xy = function(n, o) {
  var r = o.groupSeparator, s = r === void 0 ? "," : r, c = o.decimalSeparator, l = c === void 0 ? "." : c, u = new RegExp("\\d([^".concat(Hr(s)).concat(Hr(l), "0-9]+)")), f = n.match(u);
  return f ? f[1] : void 0;
}, bl = function(n) {
  var o = n.value, r = n.decimalSeparator, s = n.intlConfig, c = n.decimalScale, l = n.prefix, u = l === void 0 ? "" : l, f = n.suffix, h = f === void 0 ? "" : f;
  if (o === "" || o === void 0)
    return "";
  if (o === "-")
    return "-";
  var v = new RegExp("^\\d?-".concat(u ? "".concat(Hr(u), "?") : "", "\\d")).test(o), b = r !== "." ? u5(o, r, v) : o;
  r && r !== "-" && b.startsWith(r) && (b = "0" + b);
  var m = {
    minimumFractionDigits: c || 0,
    maximumFractionDigits: 20
  }, C = s ? new Intl.NumberFormat(s.locale, s.currency ? mt(mt({}, m), { style: "currency", currency: s.currency }) : m) : new Intl.NumberFormat(void 0, m), y = C.formatToParts(Number(b)), N = d5(y, n), w = xy(N, mt({}, n)), _ = o.slice(-1) === r ? r : "", $ = b.match(RegExp("\\d+\\.(\\d+)")) || [], R = $[1];
  return c === void 0 && R && r && (N.includes(r) ? N = N.replace(RegExp("(\\d+)(".concat(Hr(r), ")(\\d+)"), "g"), "$1$2".concat(R)) : w && !h ? N = N.replace(w, "".concat(r).concat(R).concat(w)) : N = "".concat(N).concat(r).concat(R)), h && _ ? "".concat(N).concat(_).concat(h) : w && _ ? N.replace(w, "".concat(_).concat(w)) : w && h ? N.replace(w, "".concat(_).concat(h)) : [N, _, h].join("");
}, u5 = function(n, o, r) {
  var s = n;
  return o && o !== "." && (s = s.replace(RegExp(Hr(o), "g"), "."), r && o === "-" && (s = "-".concat(s.slice(1)))), s;
}, d5 = function(n, o) {
  var r = o.prefix, s = o.groupSeparator, c = o.decimalSeparator, l = o.decimalScale, u = o.disableGroupSeparators, f = u === void 0 ? !1 : u;
  return n.reduce(function(h, v, b) {
    var m = v.type, C = v.value;
    return b === 0 && r ? m === "minusSign" ? [C, r] : m === "currency" ? or(or([], h, !0), [r], !1) : [r, C] : m === "currency" ? r ? h : or(or([], h, !0), [C], !1) : m === "group" ? f ? h : or(or([], h, !0), [s !== void 0 ? s : C], !1) : m === "decimal" ? l !== void 0 && l === 0 ? h : or(or([], h, !0), [c !== void 0 ? c : C], !1) : m === "fraction" ? or(or([], h, !0), [l !== void 0 ? C.slice(0, l) : C], !1) : or(or([], h, !0), [C], !1);
  }, [""]).join("");
}, f5 = {
  currencySymbol: "",
  groupSeparator: "",
  decimalSeparator: "",
  prefix: "",
  suffix: ""
}, h5 = function(n) {
  var o = n || {}, r = o.locale, s = o.currency, c = r ? new Intl.NumberFormat(r, s ? { currency: s, style: "currency" } : void 0) : new Intl.NumberFormat();
  return c.formatToParts(1000.1).reduce(function(l, u, f) {
    return u.type === "currency" ? f === 0 ? mt(mt({}, l), { currencySymbol: u.value, prefix: u.value }) : mt(mt({}, l), { currencySymbol: u.value, suffix: u.value }) : u.type === "group" ? mt(mt({}, l), { groupSeparator: u.value }) : u.type === "decimal" ? mt(mt({}, l), { decimalSeparator: u.value }) : l;
  }, f5);
}, sb = function(n) {
  return RegExp(/\d/, "gi").test(n);
}, p5 = function(n, o, r) {
  if (o === void 0 && (o = "."), r === void 0 || n === "" || n === void 0)
    return n;
  if (!n.match(/\d/g))
    return "";
  var s = n.split(o), c = s[0], l = s[1];
  if (r === 0)
    return c;
  var u = l || "";
  if (u.length < r)
    for (; u.length < r; )
      u += "0";
  else
    u = u.slice(0, r);
  return "".concat(c).concat(o).concat(u);
}, g5 = function(n) {
  var o = n.selectionStart, r = n.value, s = n.lastKeyStroke, c = n.stateValue, l = n.groupSeparator, u = o, f = r;
  if (c && u) {
    var h = r.split("");
    return s === "Backspace" && c[u] === l && (h.splice(u - 1, 1), u -= 1), s === "Delete" && c[u] === l && (h.splice(u, 1), u += 1), f = h.join(""), { modifiedValue: f, cursorPosition: u };
  }
  return { modifiedValue: f, cursorPosition: o };
}, tw = _e(function(n, o) {
  var r = n.allowDecimals, s = r === void 0 ? !0 : r, c = n.allowNegativeValue, l = c === void 0 ? !0 : c, u = n.id, f = n.name, h = n.className, v = n.customInput, b = n.decimalsLimit, m = n.defaultValue, C = n.disabled, y = C === void 0 ? !1 : C, N = n.maxLength, w = n.value, _ = n.onValueChange, $ = n.fixedDecimalLength, R = n.placeholder, O = n.decimalScale, P = n.prefix, I = n.suffix, M = n.intlConfig, W = n.step, U = n.min, G = n.max, Z = n.disableGroupSeparators, ne = Z === void 0 ? !1 : Z, oe = n.disableAbbreviations, ye = oe === void 0 ? !1 : oe, ee = n.decimalSeparator, me = n.groupSeparator, ve = n.onChange, De = n.onFocus, we = n.onBlur, Y = n.onKeyDown, le = n.onKeyUp, ae = n.transformRawValue, he = n.formatValueOnBlur, $e = he === void 0 ? !0 : he, je = o5(n, ["allowDecimals", "allowNegativeValue", "id", "name", "className", "customInput", "decimalsLimit", "defaultValue", "disabled", "maxLength", "value", "onValueChange", "fixedDecimalLength", "placeholder", "decimalScale", "prefix", "suffix", "intlConfig", "step", "min", "max", "disableGroupSeparators", "disableAbbreviations", "decimalSeparator", "groupSeparator", "onChange", "onFocus", "onBlur", "onKeyDown", "onKeyUp", "transformRawValue", "formatValueOnBlur"]);
  if (ee && sb(ee))
    throw new Error("decimalSeparator cannot be a number");
  if (me && sb(me))
    throw new Error("groupSeparator cannot be a number");
  var Ue = vt(function() {
    return h5(M);
  }, [M]), Le = ee || Ue.decimalSeparator || "", lt = me || Ue.groupSeparator || "";
  if (Le && lt && Le === lt && ne === !1)
    throw new Error("decimalSeparator cannot be the same as groupSeparator");
  var Me = {
    decimalSeparator: Le,
    groupSeparator: lt,
    disableGroupSeparators: ne,
    intlConfig: M,
    prefix: P || Ue.prefix,
    suffix: I
  }, Be = {
    decimalSeparator: Le,
    groupSeparator: lt,
    allowDecimals: s,
    decimalsLimit: b || $ || 2,
    allowNegativeValue: l,
    disableAbbreviations: ye,
    prefix: P || Ue.prefix,
    transformRawValue: ae
  }, ie = Te(function() {
    return m != null ? bl(mt(mt({}, Me), { decimalScale: O, value: String(m) })) : w != null ? bl(mt(mt({}, Me), { decimalScale: O, value: String(w) })) : "";
  }), We = ie[0], rt = ie[1], dn = Te(!1), Ke = dn[0], ze = dn[1], gn = Te(0), bt = gn[0], Fn = gn[1], ar = Te(0), Ot = ar[0], Xe = ar[1], fn = Te(null), kn = fn[0], ei = fn[1], xt = de(null);
  My(o, function() {
    return xt.current;
  });
  var Hn = function(ut, Bt) {
    ze(!0);
    var Rt = g5({
      selectionStart: Bt,
      value: ut,
      lastKeyStroke: kn,
      stateValue: We,
      groupSeparator: lt
    }), Ye = Rt.modifiedValue, ct = Rt.cursorPosition, dt = qm(mt({ value: Ye }, Be));
    if (!(N && dt.replace(/-/g, "").length > N)) {
      if (dt === "" || dt === "-" || dt === Le) {
        _ && _(void 0, f, { float: null, formatted: "", value: "" }), rt(dt), Fn(1);
        return;
      }
      var Kt = Le ? dt.replace(Le, ".") : dt, jt = parseFloat(Kt), vn = bl(mt({ value: dt }, Me));
      if (ct != null) {
        var Vt = ct + (vn.length - ut.length);
        Vt = Vt <= 0 ? P ? P.length : 0 : Vt, Fn(Vt), Xe(Ot + 1);
      }
      if (rt(vn), _) {
        var Wn = {
          float: jt,
          formatted: vn,
          value: dt
        };
        _(dt, f, Wn);
      }
    }
  }, Qt = function(ut) {
    var Bt = ut.target, Rt = Bt.value, Ye = Bt.selectionStart;
    Hn(Rt, Ye), ve && ve(ut);
  }, hn = function(ut) {
    return De && De(ut), We ? We.length : 0;
  }, pn = function(ut) {
    var Bt = ut.target.value, Rt = qm(mt({ value: Bt }, Be));
    if (Rt === "-" || Rt === Le || !Rt) {
      rt(""), we && we(ut);
      return;
    }
    var Ye = l5(Rt, Le, $), ct = p5(Ye, Le, O !== void 0 ? O : $), dt = parseFloat(ct.replace(Le, ".")), Kt = bl(mt(mt({}, Me), { value: ct }));
    _ && $e && _(ct, f, {
      float: dt,
      formatted: Kt,
      value: ct
    }), rt(Kt), we && we(ut);
  }, cr = function(ut) {
    var Bt = ut.key;
    if (ei(Bt), W && (Bt === "ArrowUp" || Bt === "ArrowDown")) {
      ut.preventDefault(), Fn(We.length);
      var Rt = parseFloat(w != null ? String(w).replace(Le, ".") : qm(mt({ value: We }, Be))) || 0, Ye = Bt === "ArrowUp" ? Rt + W : Rt - W;
      if (U !== void 0 && Ye < Number(U) || G !== void 0 && Ye > Number(G))
        return;
      var ct = String(W).includes(".") ? Number(String(W).split(".")[1].length) : void 0;
      Hn(String(ct ? Ye.toFixed(ct) : Ye).replace(".", Le));
    }
    Y && Y(ut);
  }, wr = function(ut) {
    var Bt = ut.key, Rt = ut.currentTarget.selectionStart;
    if (Bt !== "ArrowUp" && Bt !== "ArrowDown" && We !== "-") {
      var Ye = xy(We, { groupSeparator: lt, decimalSeparator: Le });
      if (Ye && Rt && Rt > We.length - Ye.length && xt.current) {
        var ct = We.length - Ye.length;
        xt.current.setSelectionRange(ct, ct);
      }
    }
    le && le(ut);
  };
  be(function() {
    w == null && m == null && rt("");
  }, [m, w]), be(function() {
    Ke && We !== "-" && xt.current && document.activeElement === xt.current && xt.current.setSelectionRange(bt, bt);
  }, [We, bt, xt, Ke, Ot]);
  var lr = function() {
    return w != null && We !== "-" && (!Le || We !== Le) ? bl(mt(mt({}, Me), { decimalScale: Ke ? void 0 : O, value: String(w) })) : We;
  }, ur = mt({ type: "text", inputMode: "decimal", id: u, name: f, className: h, onChange: Qt, onBlur: pn, onFocus: hn, onKeyDown: cr, onKeyUp: wr, placeholder: R, disabled: y, value: lr(), ref: xt }, je);
  if (v) {
    var dr = v;
    return at.createElement(dr, mt({}, ur));
  }
  return at.createElement("input", mt({}, ur));
});
tw.displayName = "CurrencyInput";
function yy(n, [o, r]) {
  return Math.min(r, Math.max(o, n));
}
const v5 = /* @__PURE__ */ Un(void 0);
function m5(n) {
  const o = Br(v5);
  return n || o || "ltr";
}
function w5(n) {
  const o = de({
    value: n,
    previous: n
  });
  return vt(() => (o.current.value !== n && (o.current.previous = o.current.value, o.current.value = n), o.current.previous), [
    n
  ]);
}
function b5(n) {
  const o = n + "CollectionProvider", [r, s] = kl(o), [c, l] = r(o, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), u = (y) => {
    const { scope: N, children: w } = y, _ = at.useRef(null), $ = at.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ at.createElement(c, {
      scope: N,
      itemMap: $,
      collectionRef: _
    }, w);
  }, f = n + "CollectionSlot", h = /* @__PURE__ */ at.forwardRef((y, N) => {
    const { scope: w, children: _ } = y, $ = l(f, w), R = un(N, $.collectionRef);
    return /* @__PURE__ */ at.createElement(Xo, {
      ref: R
    }, _);
  }), v = n + "CollectionItemSlot", b = "data-radix-collection-item", m = /* @__PURE__ */ at.forwardRef((y, N) => {
    const { scope: w, children: _, ...$ } = y, R = at.useRef(null), O = un(N, R), P = l(v, w);
    return at.useEffect(() => (P.itemMap.set(R, {
      ref: R,
      ...$
    }), () => void P.itemMap.delete(R))), /* @__PURE__ */ at.createElement(Xo, {
      [b]: "",
      ref: O
    }, _);
  });
  function C(y) {
    const N = l(n + "CollectionConsumer", y);
    return at.useCallback(() => {
      const _ = N.collectionRef.current;
      if (!_)
        return [];
      const $ = Array.from(_.querySelectorAll(`[${b}]`));
      return Array.from(N.itemMap.values()).sort(
        (P, I) => $.indexOf(P.ref.current) - $.indexOf(I.ref.current)
      );
    }, [
      N.collectionRef,
      N.itemMap
    ]);
  }
  return [
    {
      Provider: u,
      Slot: h,
      ItemSlot: m
    },
    C,
    s
  ];
}
const Cy = [
  "PageUp",
  "PageDown"
], Ny = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], _y = {
  "from-left": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowLeft"
  ],
  "from-right": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowRight"
  ],
  "from-bottom": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowLeft"
  ],
  "from-top": [
    "Home",
    "PageDown",
    "ArrowUp",
    "ArrowLeft"
  ]
}, Jl = "Slider", [w1, x5, y5] = b5(Jl), [$y, Z3] = kl(Jl, [
  y5
]), [C5, ed] = $y(Jl), N5 = /* @__PURE__ */ _e((n, o) => {
  const { name: r, min: s = 0, max: c = 100, step: l = 1, orientation: u = "horizontal", disabled: f = !1, minStepsBetweenThumbs: h = 0, defaultValue: v = [
    s
  ], value: b, onValueChange: m = () => {
  }, onValueCommit: C = () => {
  }, inverted: y = !1, ...N } = n, [w, _] = Te(null), $ = un(
    o,
    (ee) => _(ee)
  ), R = de(/* @__PURE__ */ new Set()), O = de(0), P = u === "horizontal", I = w ? !!w.closest("form") : !0, M = P ? _5 : $5, [W = [], U] = $1({
    prop: b,
    defaultProp: v,
    onChange: (ee) => {
      var me;
      (me = [
        ...R.current
      ][O.current]) === null || me === void 0 || me.focus(), m(ee);
    }
  }), G = de(W);
  function Z(ee) {
    const me = I5(W, ee);
    ye(ee, me);
  }
  function ne(ee) {
    ye(ee, O.current);
  }
  function oe() {
    const ee = G.current[O.current];
    W[O.current] !== ee && C(W);
  }
  function ye(ee, me, { commit: ve } = {
    commit: !1
  }) {
    const De = k5(l), we = W5(Math.round((ee - s) / l) * l + s, De), Y = yy(we, [
      s,
      c
    ]);
    U((le = []) => {
      const ae = A5(le, Y, me);
      if (F5(ae, h * l)) {
        O.current = ae.indexOf(Y);
        const he = String(ae) !== String(le);
        return he && ve && C(ae), he ? ae : le;
      } else
        return le;
    });
  }
  return /* @__PURE__ */ q(C5, {
    scope: n.__scopeSlider,
    disabled: f,
    min: s,
    max: c,
    valueIndexToChangeRef: O,
    thumbs: R.current,
    values: W,
    orientation: u
  }, /* @__PURE__ */ q(w1.Provider, {
    scope: n.__scopeSlider
  }, /* @__PURE__ */ q(w1.Slot, {
    scope: n.__scopeSlider
  }, /* @__PURE__ */ q(M, Oe({
    "aria-disabled": f,
    "data-disabled": f ? "" : void 0
  }, N, {
    ref: $,
    onPointerDown: Xt(N.onPointerDown, () => {
      f || (G.current = W);
    }),
    min: s,
    max: c,
    inverted: y,
    onSlideStart: f ? void 0 : Z,
    onSlideMove: f ? void 0 : ne,
    onSlideEnd: f ? void 0 : oe,
    onHomeKeyDown: () => !f && ye(s, 0, {
      commit: !0
    }),
    onEndKeyDown: () => !f && ye(c, W.length - 1, {
      commit: !0
    }),
    onStepKeyDown: ({ event: ee, direction: me }) => {
      if (!f) {
        const we = Cy.includes(ee.key) || ee.shiftKey && Ny.includes(ee.key) ? 10 : 1, Y = O.current, le = W[Y], ae = l * we * me;
        ye(le + ae, Y, {
          commit: !0
        });
      }
    }
  })))), I && W.map(
    (ee, me) => /* @__PURE__ */ q(P5, {
      key: me,
      name: r ? r + (W.length > 1 ? "[]" : "") : void 0,
      value: ee
    })
  ));
}), [Ey, Sy] = $y(Jl, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), _5 = /* @__PURE__ */ _e((n, o) => {
  const { min: r, max: s, dir: c, inverted: l, onSlideStart: u, onSlideMove: f, onSlideEnd: h, onStepKeyDown: v, ...b } = n, [m, C] = Te(null), y = un(
    o,
    (O) => C(O)
  ), N = de(), w = m5(c), _ = w === "ltr", $ = _ && !l || !_ && l;
  function R(O) {
    const P = N.current || m.getBoundingClientRect(), I = [
      0,
      P.width
    ], W = nw(I, $ ? [
      r,
      s
    ] : [
      s,
      r
    ]);
    return N.current = P, W(O - P.left);
  }
  return /* @__PURE__ */ q(Ey, {
    scope: n.__scopeSlider,
    startEdge: $ ? "left" : "right",
    endEdge: $ ? "right" : "left",
    direction: $ ? 1 : -1,
    size: "width"
  }, /* @__PURE__ */ q(Dy, Oe({
    dir: w,
    "data-orientation": "horizontal"
  }, b, {
    ref: y,
    style: {
      ...b.style,
      "--radix-slider-thumb-transform": "translateX(-50%)"
    },
    onSlideStart: (O) => {
      const P = R(O.clientX);
      u == null || u(P);
    },
    onSlideMove: (O) => {
      const P = R(O.clientX);
      f == null || f(P);
    },
    onSlideEnd: () => {
      N.current = void 0, h == null || h();
    },
    onStepKeyDown: (O) => {
      const I = _y[$ ? "from-left" : "from-right"].includes(O.key);
      v == null || v({
        event: O,
        direction: I ? -1 : 1
      });
    }
  })));
}), $5 = /* @__PURE__ */ _e((n, o) => {
  const { min: r, max: s, inverted: c, onSlideStart: l, onSlideMove: u, onSlideEnd: f, onStepKeyDown: h, ...v } = n, b = de(null), m = un(o, b), C = de(), y = !c;
  function N(w) {
    const _ = C.current || b.current.getBoundingClientRect(), $ = [
      0,
      _.height
    ], O = nw($, y ? [
      s,
      r
    ] : [
      r,
      s
    ]);
    return C.current = _, O(w - _.top);
  }
  return /* @__PURE__ */ q(Ey, {
    scope: n.__scopeSlider,
    startEdge: y ? "bottom" : "top",
    endEdge: y ? "top" : "bottom",
    size: "height",
    direction: y ? 1 : -1
  }, /* @__PURE__ */ q(Dy, Oe({
    "data-orientation": "vertical"
  }, v, {
    ref: m,
    style: {
      ...v.style,
      "--radix-slider-thumb-transform": "translateY(50%)"
    },
    onSlideStart: (w) => {
      const _ = N(w.clientY);
      l == null || l(_);
    },
    onSlideMove: (w) => {
      const _ = N(w.clientY);
      u == null || u(_);
    },
    onSlideEnd: () => {
      C.current = void 0, f == null || f();
    },
    onStepKeyDown: (w) => {
      const $ = _y[y ? "from-bottom" : "from-top"].includes(w.key);
      h == null || h({
        event: w,
        direction: $ ? -1 : 1
      });
    }
  })));
}), Dy = /* @__PURE__ */ _e((n, o) => {
  const { __scopeSlider: r, onSlideStart: s, onSlideMove: c, onSlideEnd: l, onHomeKeyDown: u, onEndKeyDown: f, onStepKeyDown: h, ...v } = n, b = ed(Jl, r);
  return /* @__PURE__ */ q(En.span, Oe({}, v, {
    ref: o,
    onKeyDown: Xt(n.onKeyDown, (m) => {
      m.key === "Home" ? (u(m), m.preventDefault()) : m.key === "End" ? (f(m), m.preventDefault()) : Cy.concat(Ny).includes(m.key) && (h(m), m.preventDefault());
    }),
    onPointerDown: Xt(n.onPointerDown, (m) => {
      const C = m.target;
      C.setPointerCapture(m.pointerId), m.preventDefault(), b.thumbs.has(C) ? C.focus() : s(m);
    }),
    onPointerMove: Xt(n.onPointerMove, (m) => {
      m.target.hasPointerCapture(m.pointerId) && c(m);
    }),
    onPointerUp: Xt(n.onPointerUp, (m) => {
      const C = m.target;
      C.hasPointerCapture(m.pointerId) && (C.releasePointerCapture(m.pointerId), l(m));
    })
  }));
}), E5 = "SliderTrack", S5 = /* @__PURE__ */ _e((n, o) => {
  const { __scopeSlider: r, ...s } = n, c = ed(E5, r);
  return /* @__PURE__ */ q(En.span, Oe({
    "data-disabled": c.disabled ? "" : void 0,
    "data-orientation": c.orientation
  }, s, {
    ref: o
  }));
}), ab = "SliderRange", D5 = /* @__PURE__ */ _e((n, o) => {
  const { __scopeSlider: r, ...s } = n, c = ed(ab, r), l = Sy(ab, r), u = de(null), f = un(o, u), h = c.values.length, v = c.values.map(
    (C) => Oy(C, c.min, c.max)
  ), b = h > 1 ? Math.min(...v) : 0, m = 100 - Math.max(...v);
  return /* @__PURE__ */ q(En.span, Oe({
    "data-orientation": c.orientation,
    "data-disabled": c.disabled ? "" : void 0
  }, s, {
    ref: f,
    style: {
      ...n.style,
      [l.startEdge]: b + "%",
      [l.endEdge]: m + "%"
    }
  }));
}), cb = "SliderThumb", O5 = /* @__PURE__ */ _e((n, o) => {
  const r = x5(n.__scopeSlider), [s, c] = Te(null), l = un(
    o,
    (f) => c(f)
  ), u = vt(
    () => s ? r().findIndex(
      (f) => f.ref.current === s
    ) : -1,
    [
      r,
      s
    ]
  );
  return /* @__PURE__ */ q(R5, Oe({}, n, {
    ref: l,
    index: u
  }));
}), R5 = /* @__PURE__ */ _e((n, o) => {
  const { __scopeSlider: r, index: s, ...c } = n, l = ed(cb, r), u = Sy(cb, r), [f, h] = Te(null), v = un(
    o,
    (_) => h(_)
  ), b = Kx(f), m = l.values[s], C = m === void 0 ? 0 : Oy(m, l.min, l.max), y = T5(s, l.values.length), N = b == null ? void 0 : b[u.size], w = N ? L5(N, C, u.direction) : 0;
  return be(() => {
    if (f)
      return l.thumbs.add(f), () => {
        l.thumbs.delete(f);
      };
  }, [
    f,
    l.thumbs
  ]), /* @__PURE__ */ q("span", {
    style: {
      transform: "var(--radix-slider-thumb-transform)",
      position: "absolute",
      [u.startEdge]: `calc(${C}% + ${w}px)`
    }
  }, /* @__PURE__ */ q(w1.ItemSlot, {
    scope: n.__scopeSlider
  }, /* @__PURE__ */ q(En.span, Oe({
    role: "slider",
    "aria-label": n["aria-label"] || y,
    "aria-valuemin": l.min,
    "aria-valuenow": m,
    "aria-valuemax": l.max,
    "aria-orientation": l.orientation,
    "data-orientation": l.orientation,
    "data-disabled": l.disabled ? "" : void 0,
    tabIndex: l.disabled ? void 0 : 0
  }, c, {
    ref: v,
    style: m === void 0 ? {
      display: "none"
    } : n.style,
    onFocus: Xt(n.onFocus, () => {
      l.valueIndexToChangeRef.current = s;
    })
  }))));
}), P5 = (n) => {
  const { value: o, ...r } = n, s = de(null), c = w5(o);
  return be(() => {
    const l = s.current, u = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(u, "value").set;
    if (c !== o && h) {
      const v = new Event("input", {
        bubbles: !0
      });
      h.call(l, o), l.dispatchEvent(v);
    }
  }, [
    c,
    o
  ]), /* @__PURE__ */ q("input", Oe({
    style: {
      display: "none"
    }
  }, r, {
    ref: s,
    defaultValue: o
  }));
};
function A5(n = [], o, r) {
  const s = [
    ...n
  ];
  return s[r] = o, s.sort(
    (c, l) => c - l
  );
}
function Oy(n, o, r) {
  const l = 100 / (r - o) * (n - o);
  return yy(l, [
    0,
    100
  ]);
}
function T5(n, o) {
  return o > 2 ? `Value ${n + 1} of ${o}` : o === 2 ? [
    "Minimum",
    "Maximum"
  ][n] : void 0;
}
function I5(n, o) {
  if (n.length === 1)
    return 0;
  const r = n.map(
    (c) => Math.abs(c - o)
  ), s = Math.min(...r);
  return r.indexOf(s);
}
function L5(n, o, r) {
  const s = n / 2, l = nw([
    0,
    50
  ], [
    0,
    s
  ]);
  return (s - l(o) * r) * r;
}
function M5(n) {
  return n.slice(0, -1).map(
    (o, r) => n[r + 1] - o
  );
}
function F5(n, o) {
  if (o > 0) {
    const r = M5(n);
    return Math.min(...r) >= o;
  }
  return !0;
}
function nw(n, o) {
  return (r) => {
    if (n[0] === n[1] || o[0] === o[1])
      return o[0];
    const s = (o[1] - o[0]) / (n[1] - n[0]);
    return o[0] + s * (r - n[0]);
  };
}
function k5(n) {
  return (String(n).split(".")[1] || "").length;
}
function W5(n, o) {
  const r = Math.pow(10, o);
  return Math.round(n * r) / r;
}
const B5 = N5, U5 = S5, z5 = D5, H5 = O5, G5 = ({ node: n, options: o }) => {
  var y;
  const r = yl(n), s = 'Take a deep breath.  Please respond only with a single valid JSON object with the key "cost" and a number value', c = (N, w, _) => `How much does it cost to ${N} in the as a subtask of ${w.join(" subtask of the task ")}`, l = 'Take a deep breath.  Please respond only with a single valid JSON object with the key "cost" and a number value', u = (N, w, _) => {
    const $ = yl(_);
    return `How much does it cost to ${N} in the as a subtask of ${w.join(" subtask of the task ")}, but factoring out the cost of its subtasks, which are estimated to cost somewhere between $${$.min} and $${$.max}, averaging $${$.average}.  This will leave only the marginal cost, which is the information we want.`;
  }, f = /.*(\{[^{}]*\}).*/m, h = (N, w) => {
    var R;
    const _ = N, $ = (R = w.getData().cost) == null ? void 0 : R.budget;
    return { marginal: parseFloat(_.cost), budget: $ };
  }, v = async () => {
    if (o != null && o.canPromptGPT && (o != null && o.promptGPT)) {
      const N = await Xl(o.promptGPT, n, {
        systemPromptBase: s,
        getUserPromptBase: c,
        systemPromptRecursive: l,
        getUserPromptRecursive: u,
        pattern: f,
        parsePattern: h,
        getResourceInfo: yl,
        setResourceInfo: lb,
        checkResourceInfo: K5
      });
      N ? n.context.setNodes(N.data.nodes) : o != null && o.toast && (o == null || o.toast({
        title: "Error",
        description: "No suggestions could be generated",
        duration: 5e3
      }));
    } else {
      console.error("No authedApi");
      const N = new Error("No authedApi");
      throw N.cause = "unauthorized", N;
    }
  }, b = (N) => {
    if (!N)
      return;
    const w = yl(n);
    lb(n, { marginal: N, budget: w.budget });
  }, m = async () => {
    n.setPath({ [n.getNodeData().selectedOption]: r.minPaths });
  }, C = async () => {
    n.setPath({ [n.getNodeData().selectedOption]: r.maxPaths });
  };
  return /* @__PURE__ */ j("div", { className: "flex flex-row flex-wrap items-center justify-center", children: [
    /* @__PURE__ */ j("div", { className: "flex flex-row w-1/2 min-w-96 items-center justify-center flex-wrap", children: [
      /* @__PURE__ */ T(V5, { value: r.marginal, onChange: (N) => b(N), handleSuggestCost: v }),
      /* @__PURE__ */ T(Y5, { value: (y = r.budget) == null ? void 0 : y.available, budgetInfo: r.budget, step: 1, bgValue: 75, onChange: () => console.log("slider") })
    ] }),
    /* @__PURE__ */ j("div", { className: "flex flex-row justify-center items-center w-1/2 min-w-96", children: [
      /* @__PURE__ */ j("div", { className: "overflow-hidden w-1/2 text-center text-sm", children: [
        /* @__PURE__ */ j("div", { className: "mx-auto", children: [
          " Curr: ",
          du(r.current),
          " "
        ] }),
        /* @__PURE__ */ j("div", { children: [
          " Avg: ",
          du(r.average),
          " "
        ] })
      ] }),
      /* @__PURE__ */ j("div", { className: "overflow-hidden w-1/2 text-center", children: [
        /* @__PURE__ */ j(Ve, { variant: "secondary", className: "bg-emerald-900 p-1 text-xs mx-auto", onClick: m, title: "Set min cost path", children: [
          " ",
          /* @__PURE__ */ j("div", { children: [
            "Min: ",
            du(r.min)
          ] }),
          " "
        ] }),
        /* @__PURE__ */ j(Ve, { variant: "secondary", className: "bg-emerald-900 p-1 text-xs mx-auto", onClick: C, title: "Set max cost path", children: [
          " ",
          /* @__PURE__ */ j("div", { children: [
            "Max: ",
            du(r.max)
          ] }),
          " "
        ] })
      ] })
    ] })
  ] });
}, lb = (n, { marginal: o, budget: r }) => {
  const c = {
    ...n.getData(),
    cost: {
      marginal: o,
      budget: r
    }
  };
  return n.setData(c);
}, yl = (n, o) => {
  var u, f;
  const r = n.parseIndex(o), s = n.getChildren(r), l = ((f = (u = n.getOptionContent(r).data) == null ? void 0 : u.cost) == null ? void 0 : f.marginal) || 0;
  if (s.length === 0)
    return {
      min: l,
      max: l,
      average: l,
      current: l,
      minPaths: [],
      maxPaths: [],
      marginal: l
    };
  {
    let h = 0, v = 0, b = 0, m = 0;
    const C = [], y = [];
    return s.forEach((N, w) => {
      const _ = N.getNodeData(), $ = _.options;
      let R = Number.MAX_SAFE_INTEGER, O = Number.MIN_SAFE_INTEGER, P = 0, I = 0;
      $.forEach((M, W) => {
        const U = yl(N, W);
        U.min < R && (R = U.min, U.minPaths), U.max > O && (O = U.max, U.maxPaths), P = (P * W + U.average) / (W + 1), W === _.selectedOption && (I = U.current);
      }), h += R, v += O, b += P, m += I;
    }), {
      min: h + l,
      max: v + l,
      average: b + l,
      current: m + l,
      minPaths: C,
      maxPaths: y,
      marginal: l
    };
  }
}, K5 = (n) => !!n.getData().cost, du = (n) => `${n.toLocaleString("en-US", { style: "currency", currency: "USD" })}`, V5 = ({
  value: n,
  onChange: o,
  handleSuggestCost: r
}) => /* @__PURE__ */ T("div", { className: "w-auto", children: /* @__PURE__ */ j("div", { className: "flex flex-row items-center justify-center", children: [
  /* @__PURE__ */ T(Ve, { variant: "secondary", className: "bg-emerald-900 h-10 p-2 rounded-r-none rounded-l-", onClick: r, title: "Get estimated cost", children: /* @__PURE__ */ T(Wo, {}) }),
  /* @__PURE__ */ T(
    tw,
    {
      id: "cost",
      className: "h-10 w-20",
      name: "cost",
      placeholder: "enter cost",
      defaultValue: n,
      decimalsLimit: 2,
      prefix: "$",
      onValueChange: (s) => o(s !== void 0 ? parseFloat(s) : s)
    }
  )
] }) }), q5 = ({ value: n, onChange: o }) => /* @__PURE__ */ T(
  tw,
  {
    id: "cost",
    name: "cost",
    placeholder: "enter budget",
    className: "w-24 m-w-20",
    defaultValue: n,
    decimalsLimit: 2,
    prefix: "$",
    onValueChange: (r) => o(r !== void 0 ? parseFloat(r) : r)
  }
), Y5 = (n) => {
  var o;
  return /* @__PURE__ */ j("div", { className: "w-full align-middle py-5 flex-row flex flex-wrap justify-center item-center", children: [
    n.value !== void 0 && /* @__PURE__ */ T("div", { className: "min-w-20 grow-1 w-2/3", children: /* @__PURE__ */ j(
      B5,
      {
        className: Dt(
          "relative flex w-full touch-none select-none items-center"
        ),
        defaultValue: [n.value],
        max: (o = n.budgetInfo) == null ? void 0 : o.available,
        step: n.step,
        children: [
          /* @__PURE__ */ T(U5, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-gradient-to-r from-emerald-900 to-destructive via-70% via-emerald-900", children: /* @__PURE__ */ T(z5, { className: "absolute h-full bg-black/30" }) }),
          /* @__PURE__ */ T(H5, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-transparent ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ T("div", { className: "grow-1 w-24 overflow-hidden", children: /* @__PURE__ */ T(q5, { value: n.value, onChange: n.onChange }) })
  ] });
}, Z5 = {
  icon: /* @__PURE__ */ T(JC, {}),
  name: "cost",
  HeadComponent: G5
}, X5 = Z5, rw = z.forwardRef(
  ({ className: n, ...o }, r) => /* @__PURE__ */ T(
    "textarea",
    {
      className: Dt(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        n
      ),
      ref: r,
      ...o
    }
  )
);
rw.displayName = "Textarea";
function J5({
  // items,
  searchMessage: n = "Search...",
  selectMessage: o = "Select...",
  emptyMessage: r = "No results",
  node: s,
  // defaultValue,
  // selectedIndex,
  // handleTextEdit,
  // handleChange,
  // deleteOption,
  // addOption,
  // toggleCollapse,
  variant: c = "default",
  canSuggestOption: l,
  suggestOption: u,
  ...f
}) {
  const h = s.getNodeData(), v = h.selectedOption, [b, m] = z.useState(!1), C = h.options.map((W, U) => ({
    description: W.description,
    saveDescription: (G) => {
      const Z = {
        ...W,
        description: G
      };
      s.setNodeOptionData(U, Z);
    },
    delete: () => {
      s.deleteOption(U);
    }
  })), y = (W) => {
    console.log("handleChange", W);
    const G = {
      ...s.getNodeData(),
      selectedOption: W
    };
    s.setNodeData(G);
  }, N = () => {
    s.addOption();
  }, w = C[v];
  if (!w)
    throw console.log("no item", v, C), new Error("no item");
  const _ = (W) => (W.preventDefault(), w.saveDescription(W.target.value), !1), $ = (W) => {
    W.key === " " && W.stopPropagation();
  }, R = (W) => {
    console.log("keypress", W.key, v), W.key === "ArrowUp" && W.altKey && (console.log("test", v, C.length, (v - 1 + C.length) % C.length), y(v ? (v - 1 + C.length) % C.length : 0)), W.key === "ArrowDown" && W.altKey && y(v ? (v + 1) % C.length : 0);
  }, O = z.useRef(null), P = 80, I = {
    default: "w-[200px] justify-between",
    "text-mimic": "w-full justify-between text-left display-flex"
  }[c], M = {
    default: {},
    "text-mimic": {
      height: `${P}px`,
      fontSize: "1rem",
      fontWeight: "normal",
      paddingRight: "5px"
    }
  }[c];
  return /* @__PURE__ */ j(Ju, { open: b, onOpenChange: m, children: [
    /* @__PURE__ */ T(Qu, { asChild: !0, children: /* @__PURE__ */ j("div", { style: {
      position: "relative",
      zIndex: "0",
      height: `${P}px`,
      width: "100%"
    }, children: [
      /* @__PURE__ */ T(
        ju,
        {
          variant: "outline",
          role: "combobox",
          size: "lg",
          "aria-expanded": b,
          className: `${I} text-right px-2`,
          style: {
            ...M,
            width: "calc(100%)",
            height: `${P}px`,
            zIndex: "0"
          },
          ...f,
          children: /* @__PURE__ */ T("div", { className: "w-full justify-end items-end flex p-0", children: /* @__PURE__ */ T(Mu, { className: "h-4 opacity-50", style: {
            padding: "0px 0px 0px 0px"
          } }) })
        }
      ),
      /* @__PURE__ */ T("div", { style: {
        zIndex: "1",
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%"
      }, children: /* @__PURE__ */ T(
        rw,
        {
          ref: O,
          className: "rounded-r-none",
          value: w ? w.description : o,
          style: {
            width: "calc(100% - 2rem)",
            fontSize: "1.2rem",
            fontWeight: "normal",
            // height: 'calc(100% - 3px)',
            height: `${P}px`,
            overflow: "hidden",
            scrollbarWidth: "none",
            scrollbarGutter: "none"
          },
          onChange: _,
          onFocus: (W) => {
            console.log("here"), W.stopPropagation();
          },
          onClick: (W) => {
            console.log("here"), W.stopPropagation();
          },
          onKeyDown: $,
          onKeyUp: R
        }
      ) })
    ] }) }),
    /* @__PURE__ */ T(Yl, { className: "w-[200px] p-0", children: /* @__PURE__ */ j(Gl, { children: [
      /* @__PURE__ */ T(M1, { placeholder: n, className: "h-9" }),
      /* @__PURE__ */ T(Kl, { children: r }),
      /* @__PURE__ */ T(ps, { children: C.map((W, U) => /* @__PURE__ */ j(
        Vl,
        {
          value: U.toString(),
          onSelect: (G) => {
            const Z = parseInt(G);
            if (isNaN(Z) || !Z === void 0)
              throw new Error("invalid value");
            y(Z), m(!1);
          },
          children: [
            W.description,
            /* @__PURE__ */ T(
              Fu,
              {
                className: Dt(
                  "ml-auto h-4 w-4",
                  v === U ? "opacity-100" : "opacity-0"
                )
              }
            ),
            C.length > 1 && /* @__PURE__ */ T("div", { children: /* @__PURE__ */ T(
              Ib,
              {
                className: "h-4 w-4 opacity-50 hover:opacity-100 cursor-pointer",
                color: "rgba(200, 100, 100, .7)",
                onClick: (G) => {
                  G.stopPropagation(), W.delete();
                }
              }
            ) })
          ]
        },
        U
      )) }),
      /* @__PURE__ */ T(ps, { children: /* @__PURE__ */ j("div", { className: "grid grid-cols-2 place-content-stretch gap-1", children: [
        /* @__PURE__ */ T("div", { className: "", children: /* @__PURE__ */ T(
          Ve,
          {
            onClick: () => {
              N(), m(!1);
            },
            className: "justify-center bg-gray-100/30 text-gray-900 hover:bg-gray-200 h-10 w-full",
            children: /* @__PURE__ */ T(Tb, { className: "h-4" })
          }
        ) }),
        /* @__PURE__ */ T("div", { className: "", children: /* @__PURE__ */ T(
          Ve,
          {
            onClick: () => {
              u(), m(!1);
            },
            disabled: !l,
            className: "bg-emerald-900 w-full",
            children: /* @__PURE__ */ T(Wo, { className: "h-4" })
          }
        ) })
      ] }) })
    ] }) })
  ] });
}
const Q5 = ({ node: n, options: o }) => /* @__PURE__ */ T("div", { children: /* @__PURE__ */ T(J5, { node: n, suggestOption: async () => {
  if (o != null && o.canPromptGPT && (o != null && o.promptGPT)) {
    const [s, c] = await J1(o.promptGPT, n);
    s ? n.context.setNodes(s.data.nodes) : o != null && o.toast && o.toast({
      title: "Error",
      description: "No suggestions could be generated",
      duration: 5e3
    });
  } else {
    console.error("No authedApi");
    const s = new Error("No authedApi");
    throw s.cause = "unauthorized", s;
  }
}, canSuggestOption: (o == null ? void 0 : o.canPromptGPT) || !1 }) }), j5 = {
  icon: /* @__PURE__ */ T(e2, {}),
  name: "workflow",
  HeadComponent: Q5
}, e3 = j5, t3 = ({ node: n, options: o }) => {
  const r = (w) => {
    ub(n, w);
  }, s = Dl(n), c = async () => {
    n.setPath(s.minProbabilitySuccessPath);
  }, l = async () => {
    n.setPath(s.maxProbabilitySuccessPath);
  }, u = async () => {
    n.setPath(s.minProbabilityFailurePath);
  }, f = async () => {
    n.setPath(s.maxProbabilityFailurePath);
  }, h = 'Take a deep breath.  Please respond only with a single valid JSON object with the keys "probabilitySuccess" and "probabilityFailure" and a number value between 1-100 representing the percentage of success and failure respectively', v = (w, _, $) => `How likely is it that the following will lead to success or failure respectively ${w} in the context of the task ${_.join(" subtask of the task ")} please express as a percentage (0-100)`, b = 'Take a deep breath.  Please respond only with a single valid JSON object with the keys "probabilitySuccess" and "probabilityFailure" and a number value between 1-100 representing the percentage of success and failure respectively', m = (w, _, $) => {
    const R = Dl($);
    return `How likely is it that the following will lead to success or failure respectively ${w} in the context of the task ${_.join(" subtask of the task ")} please express as a percentage (0-100), but factoring out the probability of its subtasks, which are estimated to be likely somewhere between ${R.minSuccess * 100} and ${R.maxSuccess * 100}, averaging ${R.averageSuccess * 100} to succeed and somewhere between ${R.minFailure * 100} and ${R.maxFailure * 100}, averaging ${R.averageFailure * 100} to fail. This should leave only the marginal probability, which is the information we want.`;
  }, C = /.*(\{[^{}]*\}).*/m, y = (w, _) => {
    const $ = w, R = $.probabilitySuccess, O = $.probabilityFailure;
    return {
      marginSuccess: R / 100,
      marginFailure: O / 100
    };
  };
  return /* @__PURE__ */ j("div", { className: "w-full text-center overflow-hidden", children: [
    /* @__PURE__ */ j("div", { className: "mx-auto items-center justify-center gap-1.5 flex items-center", children: [
      /* @__PURE__ */ T(Ve, { variant: "secondary", className: "bg-emerald-900 inline-block w-14", onClick: async () => {
        if (o != null && o.canPromptGPT && (o != null && o.promptGPT)) {
          const w = await Xl(o.promptGPT, n, {
            systemPromptBase: h,
            getUserPromptBase: v,
            systemPromptRecursive: b,
            getUserPromptRecursive: m,
            pattern: C,
            parsePattern: y,
            getResourceInfo: Dl,
            setResourceInfo: ub,
            checkResourceInfo: i3
          });
          w ? n.context.setNodes(w.data.nodes) : o != null && o.toast && o.toast({
            title: "Error",
            description: "No suggestions could be generated",
            duration: 5e3
          });
        } else {
          console.error("No authedApi");
          const w = new Error("No authedApi");
          throw w.cause = "unauthorized", w;
        }
      }, title: "Get estimated probabilities", children: /* @__PURE__ */ T(Wo, {}) }),
      /* @__PURE__ */ T(n3, { value: s, onUpdate: (w) => r(w) })
    ] }),
    /* @__PURE__ */ j("div", { className: "flex flex-row justify-stretch items-center mx-auto", style: { maxWidth: "600px" }, children: [
      /* @__PURE__ */ j("div", { className: "px-3 overflow-hidden w-1/2", children: [
        /* @__PURE__ */ j("div", { title: "Probability of success of Currently Selected Path", children: [
          " Curr: ",
          Go(s.currentSuccess),
          " "
        ] }),
        /* @__PURE__ */ j("div", { title: "Probability of success of Average Path", children: [
          " Avg: ",
          Go(s.averageSuccess),
          " "
        ] })
      ] }),
      /* @__PURE__ */ j("div", { className: "px-3 overflow-hidden w-1/2", children: [
        /* @__PURE__ */ j(Ve, { variant: "secondary", className: "bg-emerald-900 p-1", onClick: c, title: "Set min probability success path", children: [
          " ",
          /* @__PURE__ */ j("div", { className: "w-full", children: [
            "Min: ",
            Go(s.minSuccess),
            " "
          ] })
        ] }),
        /* @__PURE__ */ j(Ve, { variant: "secondary", className: "bg-emerald-900 p-1", onClick: l, title: "Set max probability success path", children: [
          " ",
          /* @__PURE__ */ j("div", { className: "w-full", children: [
            "Max: ",
            Go(s.maxSuccess),
            " "
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ j("div", { className: "flex flex-row justify-stretch items-center mx-auto", style: { maxWidth: "600px" }, children: [
      /* @__PURE__ */ j("div", { className: "px-3 overflow-hidden w-1/2", children: [
        /* @__PURE__ */ j("div", { title: "Time of Currently Selected Path", children: [
          " Curr: ",
          Go(s.currentFailure),
          " "
        ] }),
        /* @__PURE__ */ j("div", { title: "Time of Average Path", children: [
          " Avg: ",
          Go(s.averageFailure),
          " "
        ] })
      ] }),
      /* @__PURE__ */ j("div", { className: "px-3 overflow-hidden w-1/2", children: [
        /* @__PURE__ */ j(Ve, { variant: "secondary", className: "bg-emerald-900 p-1", onClick: u, title: "Set min probability failure path", children: [
          " ",
          /* @__PURE__ */ j("div", { className: "w-full", children: [
            "Min: ",
            Go(s.minFailure),
            " "
          ] })
        ] }),
        /* @__PURE__ */ j(Ve, { variant: "secondary", className: "bg-emerald-900 p-1", onClick: f, title: "Set max probability failure path", children: [
          " ",
          /* @__PURE__ */ j("div", { className: "w-full", children: [
            "Max: ",
            Go(s.maxFailure),
            " "
          ] })
        ] })
      ] })
    ] })
  ] });
}, ub = (n, o) => {
  const r = n.getData();
  return n.setData({
    ...r,
    probability: o
  });
}, Dl = (n, o) => {
  const r = n.getData(o);
  console.log("nodeData", r);
  const s = o3(n), c = r3(n);
  return {
    ...s,
    ...c
  };
}, Go = (n) => `${n.toLocaleString("en-US", { style: "percent", minimumFractionDigits: 2 })}`, n3 = ({
  value: n,
  onUpdate: o
}) => /* @__PURE__ */ T("div", { className: "w-auto", children: /* @__PURE__ */ T("div", { className: "flex flex-row items-center justify-center" }) }), r3 = (n, o) => {
  var u, f;
  const r = n.parseIndex(o), s = n.getChildren(r), l = ((f = (u = n.getOptionContent(r).data) == null ? void 0 : u.probability) == null ? void 0 : f.marginFailure) || 0;
  if (s.length === 0)
    return {
      minFailure: l,
      maxFailure: l,
      averageFailure: l,
      currentFailure: l,
      minProbabilityFailurePath: [],
      maxProbabilityFailurePath: [],
      marginFailure: l
    };
  {
    let h = 0, v = 0, b = 0, m = 0;
    const C = [], y = [];
    return s.forEach((N, w) => {
      const _ = N.getNodeData(), $ = _.options;
      let R = Number.MAX_SAFE_INTEGER, O = Number.MIN_SAFE_INTEGER, P = 0, I = 0;
      $.forEach((M, W) => {
        const U = Dl(N, W);
        U.minFailure < R && (R = U.minFailure, U.minProbabilityFailurePath), U.maxFailure > O && (O = U.maxFailure, U.maxProbabilityFailurePath), P = (P * W + U.averageFailure) / (W + 1), W === _.selectedOption && (I = U.currentFailure);
      }), h += R, v += O, b += P, m += I;
    }), {
      minFailure: h + l,
      maxFailure: v + l,
      averageFailure: b + l,
      currentFailure: m + l,
      minProbabilityFailurePath: C,
      maxProbabilityFailurePath: y,
      marginFailure: l
    };
  }
}, o3 = (n, o) => {
  var u, f;
  const r = n.parseIndex(o), s = n.getChildren(r), l = ((f = (u = n.getOptionContent(r).data) == null ? void 0 : u.probability) == null ? void 0 : f.marginSuccess) || 0;
  if (s.length === 0)
    return {
      minSuccess: l,
      maxSuccess: l,
      averageSuccess: l,
      currentSuccess: l,
      minProbabilitySuccessPath: [],
      maxProbabilitySuccessPath: [],
      marginSuccess: l
    };
  {
    let h = 0, v = 0, b = 0, m = 0;
    const C = [], y = [];
    return s.forEach((N, w) => {
      const _ = N.getNodeData(), $ = _.options;
      let R = Number.MAX_SAFE_INTEGER, O = Number.MIN_SAFE_INTEGER, P = 0, I = 0;
      $.forEach((M, W) => {
        const U = Dl(N, W);
        U.minSuccess < R && (R = U.minSuccess, U.minProbabilitySuccessPath), U.maxSuccess > O && (O = U.maxSuccess, U.maxProbabilitySuccessPath), P = (P * W + U.averageSuccess) / (W + 1), W === _.selectedOption && (I = U.currentSuccess);
      }), h += R, v += O, b += P, m += I;
    }), {
      minSuccess: h + l,
      maxSuccess: v + l,
      averageSuccess: b + l,
      currentSuccess: m + l,
      minProbabilitySuccessPath: C,
      maxProbabilitySuccessPath: y,
      marginSuccess: l
    };
  }
}, i3 = (n) => !!n.getData().probability, s3 = {
  icon: /* @__PURE__ */ T(XC, {}),
  name: "probability",
  HeadComponent: t3
}, a3 = s3, c3 = ({ node: n, options: o }) => {
  const r = Cl(n), s = (C) => {
    db(n, { content: C });
  }, c = async () => {
    const C = r.aggregated || "", y = new Blob([C], { type: "text/plain" }), N = URL.createObjectURL(y);
    window.open(N, "_blank"), setTimeout(() => URL.revokeObjectURL(N), 100);
  }, l = 'Take a deep breath.  Please respond only with a single valid JSON object with the key "document" and a string value', u = (C, y, N) => `Please provide text which is the fulfillment of these instructions: ${C} in the context of the task ${y.join(" subtask of the task ")}`, f = 'Take a deep breath.  Please respond only with a single valid JSON object with the key "document" and a string value', h = (C, y, N) => (Cl(N), `Please provide text which is the fulfillment of these instructions:${C} in the context of the task ${y.join(" subtask of the task ")}, but the following pieces are already written as part of child tasks.  Please insert them with the template format eg {{ 0 }} for child #0.  Do not be redundant with that information: 
${N.getChildren().map((w, _) => `{{${_}}} : ${Cl(w).aggregated}`).join(`
`)}`), v = /.*(\{[^{}]*\}).*/m, b = (C, y) => ({ content: C.document });
  return /* @__PURE__ */ j("div", { className: "w-full text-center overflow-hidden flex flex-row", children: [
    /* @__PURE__ */ j("div", { className: "p-0", children: [
      /* @__PURE__ */ T(Ve, { variant: "secondary", className: "bg-emerald-900 inline-block p-2", onClick: async () => {
        if (console.log("suggesting document"), o != null && o.canPromptGPT && (o != null && o.promptGPT)) {
          const C = await Xl(o.promptGPT, n, {
            systemPromptBase: l,
            getUserPromptBase: u,
            systemPromptRecursive: f,
            getUserPromptRecursive: h,
            pattern: v,
            parsePattern: b,
            getResourceInfo: Cl,
            setResourceInfo: db,
            checkResourceInfo: fb
          });
          C ? n.context.setNodes(C.data.nodes) : o != null && o.toast && o.toast({
            title: "Error",
            description: "No suggestions could be generated",
            duration: 5e3
          });
        } else {
          console.error("No authedApi");
          const C = new Error("No authedApi");
          throw C.cause = "unauthorized", C;
        }
      }, title: "Execute prompt", disabled: fb(n), children: /* @__PURE__ */ T(Wo, {}) }),
      /* @__PURE__ */ T(Ve, { variant: "secondary", className: "bg-emerald-900 inline-block p-2", onClick: c, title: "Execute prompt", children: /* @__PURE__ */ T(QC, {}) })
    ] }),
    /* @__PURE__ */ T("div", { className: "w-full", children: /* @__PURE__ */ T(rw, { value: r == null ? void 0 : r.content, onChange: (C) => s(C.target.value) }) })
  ] });
}, l3 = ({ node: n }) => /* @__PURE__ */ T("div", { children: /* @__PURE__ */ T(Ve, { variant: "secondary", className: "bg-emerald-900 p-1", title: "Insert Child Document", onClick: () => {
}, children: /* @__PURE__ */ T(Ab, { size: "1rem" }) }) }), Cl = (n) => {
  var s, c, l, u;
  const o = n.getData(), r = n.getChildren();
  if (r.length) {
    const f = r.reduce((h, v, b) => {
      const m = Cl(v);
      return h.replace(`{{${b + 1}}}`, m.aggregated || "");
    }, ((l = o.document) == null ? void 0 : l.content) || "");
    return {
      content: ((u = o.document) == null ? void 0 : u.content) || "",
      aggregated: f
    };
  } else
    return {
      content: ((s = o.document) == null ? void 0 : s.content) || "",
      aggregated: ((c = o.document) == null ? void 0 : c.content) || ""
    };
}, db = (n, o) => {
  const r = n.getData();
  return n.setData({
    ...r,
    document: o
  });
}, fb = (n) => {
  const o = n.getData();
  return !!o.document && !!o.document.content;
}, u3 = {
  icon: /* @__PURE__ */ T(Ab, {}),
  name: "document",
  HeadComponent: c3,
  RowComponent: l3
}, d3 = u3, Ry = z.forwardRef(
  ({ className: n, type: o, ...r }, s) => /* @__PURE__ */ T(
    "input",
    {
      type: o,
      className: Dt(
        "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        n
      ),
      ref: s,
      ...r
    }
  )
);
Ry.displayName = "Input";
const f3 = ({
  node: n,
  options: o
}) => {
  const r = Ym(n), s = (C, y) => {
    hb(n, y);
  }, c = 'Take a deep breath.  Please respond only with a single valid JSON object with the key "resources" and an array of strings', l = (C, y, N) => `Please provide a list of required resources in order to complete this task: ${C} in the context of the task ${y.join(" subtask of the task ")}.  A resource is anything that is needed to complete the task, such as a tool, a person, a piece of information, or a physical object.  Please be thorough and specific. and focus on this particular task because other workers will be providing information about other tasks.`, u = 'Take a deep breath.  Please respond only with a single valid JSON object with the key "document" and an array of strings', f = (C, y, N) => (Ym(N), `Please provide a list of required resources in order to complete this task: ${C} in the context of the task ${y.join(" subtask of the task ")}, but the following resource are already accounted for, so please don't include them.A resource is anything that is needed to complete the task, such as a tool, a person, a piece of information, or a physical object.  Please be thorough and specific. and focus on this particular task because other workers will be providing information about other tasks.`), h = /.*(\{[^{}]*\}).*/m, v = (C, y) => ({ required: C.resources, available: [] }), b = async () => {
    if (o != null && o.canPromptGPT && (o != null && o.promptGPT)) {
      const C = await Xl(o == null ? void 0 : o.promptGPT, n, {
        systemPromptBase: c,
        getUserPromptBase: l,
        systemPromptRecursive: u,
        getUserPromptRecursive: f,
        pattern: h,
        parsePattern: v,
        getResourceInfo: Ym,
        setResourceInfo: hb,
        checkResourceInfo: h3
      });
      C ? n.context.setNodes(C.data.nodes) : o != null && o.toast && (o == null || o.toast({
        title: "Error",
        description: "No suggestions could be generated",
        duration: 5e3
      }));
    } else {
      console.error("No authedApi");
      const C = new Error("No authedApi");
      throw C.cause = "unauthorized", C;
    }
  }, m = (C, y) => () => {
    const N = {
      ...r,
      requiredForThis: r.requiredForThis.map((_, $) => $ === C ? y : _)
    }, w = {
      required: N.requiredForThis,
      available: N.available
    };
    s(C, w);
  };
  return /* @__PURE__ */ j("div", { className: "w-full text-center overflow-hidden flex flex-row", children: [
    /* @__PURE__ */ T("div", { children: /* @__PURE__ */ T(Ve, { variant: "secondary", className: "bg-emerald-900 inline-block w-14", onClick: b, title: "Suggest required resources", children: /* @__PURE__ */ T(Wo, {}) }) }),
    /* @__PURE__ */ j("div", { className: "flex flex-row flex-wrap justify-center", children: [
      r.requiredForCurrent.map((C, y) => /* @__PURE__ */ T("div", { className: "flex flex-row items-center justify-center flex-wrap w-48", children: r.requiredForThis.includes(C) ? /* @__PURE__ */ T(Ry, { value: C, onChange: (N) => m(y, N.target.value), className: "inline-block" }) : /* @__PURE__ */ T("div", { children: C }) }, y)),
      /* @__PURE__ */ T(Ve, { variant: "secondary", className: "bg-emerald-900 inline-block w-14", onClick: b, title: "Add required resources", children: /* @__PURE__ */ T(t2, {}) })
    ] })
  ] });
}, Ym = (n) => (n.getData(), {
  requiredForThis: ["resource1", "resource2"],
  available: ["resource1", "resource3"],
  requiredForCurrent: ["resource1", "resource2"],
  minRequired: ["resource1"],
  allPossibleRequired: ["resource1", "resource2", "resource3"]
}), hb = (n, o) => {
  const r = n.getData();
  return n.setData({
    ...r,
    resources: o
  });
}, h3 = (n) => !!n.getData().resources, p3 = {
  icon: /* @__PURE__ */ T(VC, {}),
  name: "resources",
  HeadComponent: f3
}, g3 = p3, Zm = {
  cost: X5,
  workflow: e3,
  duration: t5,
  probability: a3,
  fosDocument: d3,
  resources: g3
};
function v3({
  context: n,
  node: o,
  dragging: r,
  dragOverInfo: s,
  // trail,
  // updateTrail,
  options: c
}) {
  const l = Object.keys(Zm).map((m) => Zm[m]), [u, f] = Te(o.getRoute().length > 1 ? Zm.workflow : void 0), h = o.getChildren(), v = zs(), b = at.useMemo(() => v.width !== void 0 ? Math.floor((v.width - 500) / 100) : 0, [v]);
  return /* @__PURE__ */ j("div", { children: [
    /* @__PURE__ */ T("div", { style: { padding: "15px 0px" }, children: /* @__PURE__ */ T(m3, { node: o, context: n, activeModule: u, setActiveModule: f, availableModules: l, options: c }) }),
    /* @__PURE__ */ T("div", { children: o.hasMerge() ? /* @__PURE__ */ T(Q1, { rowDepth: b, context: n, dragging: r, parentNode: o, dragOverInfo: s, locked: n.locked, activeModule: u, options: c }) : /* @__PURE__ */ T(ew, { rows: h, rowDepth: b, context: n, dragging: r, parentNode: o, dragOverInfo: s, locked: n.locked, activeModule: u, options: c }) })
  ] });
}
const m3 = ({
  node: n,
  context: o,
  activeModule: r,
  setActiveModule: s,
  availableModules: c,
  options: l
}) => {
  const [u, f] = at.useState(!1), h = () => {
    u ? r !== void 0 ? s(void 0) : f(!1) : f(!0);
  }, v = (m) => {
    s(m), f(!1);
  }, b = (r == null ? void 0 : r.HeadComponent) || (() => /* @__PURE__ */ T(Yo, {}));
  return /* @__PURE__ */ T(Yo, { children: /* @__PURE__ */ T("div", { children: /* @__PURE__ */ T("div", { children: /* @__PURE__ */ j("div", { className: "flex-row flex w-full px-1 ", children: [
    /* @__PURE__ */ T("div", { className: `px-0 flex-grow overflow-x-hidden transition-all duration-500 ${u ? "w-none" : ""}`, children: /* @__PURE__ */ T(b, { node: n, options: l }) }),
    /* @__PURE__ */ j("div", { className: "px-3 flex flex-row w-auto transition-all duration-500 items-stretch", children: [
      u && c.map((m, C) => /* @__PURE__ */ T(Ve, { onClick: () => v(m), variant: "ghost", className: `h-full ${(r == null ? void 0 : r.name) === m.name ? "bg-stone-900" : "bg-stone-700"}`, children: m.icon }, C)),
      /* @__PURE__ */ T("div", { className: "overflow-x-hidden h-full", children: /* @__PURE__ */ T(Ve, { onClick: h, variant: "ghost", className: "self-center h-full", children: u ? /* @__PURE__ */ T(hw, { className: "rotate-90" }) : /* @__PURE__ */ T(hw, {}) }) })
    ] })
  ] }) }) }) });
};
function w3({
  // items,
  searchMessage: n = "Search...",
  selectMessage: o = "Select...",
  emptyMessage: r = "No results",
  node: s,
  // defaultValue,
  // selectedIndex,
  // handleTextEdit,
  // handleChange,
  // deleteOption,
  // addOption,
  // toggleCollapse,
  variant: c = "default",
  ...l
}) {
  const f = s.getNodeData().selectedOption, [h, v] = z.useState(!1), b = s.hasMerge() ? s.getMergeOptions().map((w, _) => (console.log("option", w.description), /* @__PURE__ */ T(Yo, { children: w.description.map(($, R) => /* @__PURE__ */ T(
    "span",
    {
      className: `${$.added ? "bg-emerald-950/90" : $.removed ? "bg-destructive-950/90" : ""}`,
      children: $.value
    },
    R
  )) })), []) : s.getNodeData().options.map((w, _) => /* @__PURE__ */ T("span", { children: w.description }, _)), m = (w) => {
    console.log("handleChange", w);
    const $ = {
      ...s.getNodeData(),
      selectedOption: w
    };
    s.setNodeData($);
  }, C = {
    default: "w-[200px] justify-between",
    "text-mimic": "w-full justify-between text-left display-flex"
  }[c], y = {
    default: {},
    "text-mimic": {
      width: "50vw",
      fontSize: "1rem",
      fontWeight: "normal",
      paddingRight: "5px"
    }
  }[c], N = b[f];
  if (!N)
    throw console.log("no item", f, b), new Error("no item");
  return /* @__PURE__ */ j(Ju, { open: h, onOpenChange: v, children: [
    /* @__PURE__ */ T(Qu, { asChild: !0, children: /* @__PURE__ */ j("div", { style: {
      position: "relative",
      zIndex: "0"
    }, children: [
      /* @__PURE__ */ T(
        ju,
        {
          variant: "outline",
          role: "combobox",
          size: "lg",
          "aria-expanded": h,
          className: `${C} text-right px-2`,
          style: {
            ...y,
            zIndex: "0"
          },
          ...l,
          children: /* @__PURE__ */ T("div", { className: "w-full justify-end items-end flex p-0", children: /* @__PURE__ */ T(Mu, { className: "h-4 opacity-50", style: {
            padding: "0px 0px 0px 0px"
          } }) })
        }
      ),
      /* @__PURE__ */ T("div", { style: {
        zIndex: "1",
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%"
      }, children: /* @__PURE__ */ T("div", { className: "w-full px-3 py-2", children: N }) })
    ] }) }),
    /* @__PURE__ */ T(Yl, { className: "w-[200px] p-0", children: /* @__PURE__ */ j(Gl, { children: [
      /* @__PURE__ */ T(M1, { placeholder: n, className: "h-9" }),
      /* @__PURE__ */ T(Kl, { children: r }),
      /* @__PURE__ */ T(ps, { children: b.map((w, _) => /* @__PURE__ */ j(
        Vl,
        {
          onSelect: ($) => {
            m(_), v(!1);
          },
          children: [
            w,
            /* @__PURE__ */ T(
              Fu,
              {
                className: Dt(
                  "ml-auto h-4 w-4",
                  f === _ ? "opacity-100" : "opacity-0"
                )
              }
            )
          ]
        },
        _
      )) })
    ] }) })
  ] });
}
function b3({
  context: n,
  // updateNodes,
  node: o,
  // updateNodes,
  dragging: r,
  dragOverInfo: s,
  // trail,
  // updateTrail,
  options: c
}) {
  const l = o.getChildren(), u = zs(), f = at.useMemo(() => u.width !== void 0 ? Math.floor((u.width - 500) / 100) : 0, [u]);
  return /* @__PURE__ */ j("div", { children: [
    o.getRoute().length > 1 && /* @__PURE__ */ T("div", { style: { padding: "15px 0px" }, children: /* @__PURE__ */ T(x3, { node: o, context: n, options: c }) }),
    /* @__PURE__ */ T("div", { children: o.hasMerge() ? /* @__PURE__ */ T(Q1, { rowDepth: f, context: n, dragging: r, parentNode: o, dragOverInfo: s, locked: n.locked, options: c }) : /* @__PURE__ */ T(ew, { rows: l, rowDepth: f, context: n, dragging: r, parentNode: o, dragOverInfo: s, locked: n.locked, options: c }) })
  ] });
}
const x3 = ({
  node: n,
  context: o,
  options: r
}) => {
  const [s, c] = at.useState(!1), l = async () => {
    if (!(r != null && r.promptGPT) || !(r != null && r.canPromptGPT))
      return;
    const [u, f] = await j1(r == null ? void 0 : r.promptGPT, n);
    u && o.setNodes(u.data.nodes);
  };
  return /* @__PURE__ */ T(Yo, { children: /* @__PURE__ */ T("div", { children: /* @__PURE__ */ T("div", { children: /* @__PURE__ */ j("div", { className: "flex-row flex w-full px-1", children: [
    /* @__PURE__ */ T("div", { className: "px-3", children: /* @__PURE__ */ T(Ve, { onClick: () => c(!s), variant: "ghost", children: s ? /* @__PURE__ */ T(iC, {}) : /* @__PURE__ */ T(aC, {}) }) }),
    /* @__PURE__ */ T("div", { className: "px-0", children: /* @__PURE__ */ T(y3, { node: n }) }),
    s && /* @__PURE__ */ T("div", { className: "px-3", children: (r == null ? void 0 : r.promptGPT) && /* @__PURE__ */ T(Ve, { variant: "secondary", className: "bg-emerald-900", disabled: !(r != null && r.canPromptGPT), onClick: l, children: /* @__PURE__ */ T(Wo, {}) }) })
  ] }) }) }) });
}, y3 = ({
  node: n
}) => /* @__PURE__ */ T("div", { children: /* @__PURE__ */ T(w3, { node: n }) }), C3 = [et.Down, et.Right, et.Up, et.Left], N3 = (n, {
  context: {
    active: o,
    droppableContainers: r,
    collisionRect: s,
    scrollableAncestors: c
  }
}) => {
  if (C3.includes(n.code)) {
    if (n.preventDefault(), !o || !s)
      return;
    const l = [];
    r.getEnabled().forEach((h) => {
      if (!h || h != null && h.disabled)
        return;
      const v = h == null ? void 0 : h.rect.current;
      if (v)
        switch (n.code) {
          case et.Down:
            s.top + s.height <= v.top && l.push(h);
            break;
          case et.Up:
            s.top >= v.top + v.height && l.push(h);
            break;
          case et.Left:
            s.left >= v.left + v.width && l.push(h);
            break;
          case et.Right:
            s.left + s.width <= v.left && l.push(h);
            break;
        }
    });
    const u = YE({
      active: o,
      collisionRect: s,
      droppableContainers: l,
      pointerCoordinates: null
    }), f = iy(u, "id");
    if (f != null) {
      const h = r.get(f), v = h == null ? void 0 : h.node.current, b = h == null ? void 0 : h.rect.current;
      if (v && b) {
        const y = K1(v).some((w, _) => c[_] !== w) ? {
          x: 0,
          y: 0
        } : {
          x: s.width - b.width,
          y: s.height - b.height
        };
        return {
          x: b.left - y.x,
          y: b.top - y.y
        };
      }
    }
  }
};
function Uo() {
}
Uo.prototype = {
  diff: function(o, r) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, c = s.callback;
    typeof s == "function" && (c = s, s = {}), this.options = s;
    var l = this;
    function u(w) {
      return c ? (setTimeout(function() {
        c(void 0, w);
      }, 0), !0) : w;
    }
    o = this.castInput(o), r = this.castInput(r), o = this.removeEmpty(this.tokenize(o)), r = this.removeEmpty(this.tokenize(r));
    var f = r.length, h = o.length, v = 1, b = f + h;
    s.maxEditLength && (b = Math.min(b, s.maxEditLength));
    var m = [{
      newPos: -1,
      components: []
    }], C = this.extractCommon(m[0], r, o, 0);
    if (m[0].newPos + 1 >= f && C + 1 >= h)
      return u([{
        value: this.join(r),
        count: r.length
      }]);
    function y() {
      for (var w = -1 * v; w <= v; w += 2) {
        var _ = void 0, $ = m[w - 1], R = m[w + 1], O = (R ? R.newPos : 0) - w;
        $ && (m[w - 1] = void 0);
        var P = $ && $.newPos + 1 < f, I = R && 0 <= O && O < h;
        if (!P && !I) {
          m[w] = void 0;
          continue;
        }
        if (!P || I && $.newPos < R.newPos ? (_ = $3(R), l.pushComponent(_.components, void 0, !0)) : (_ = $, _.newPos++, l.pushComponent(_.components, !0, void 0)), O = l.extractCommon(_, r, o, w), _.newPos + 1 >= f && O + 1 >= h)
          return u(_3(l, _.components, r, o, l.useLongestToken));
        m[w] = _;
      }
      v++;
    }
    if (c)
      (function w() {
        setTimeout(function() {
          if (v > b)
            return c();
          y() || w();
        }, 0);
      })();
    else
      for (; v <= b; ) {
        var N = y();
        if (N)
          return N;
      }
  },
  pushComponent: function(o, r, s) {
    var c = o[o.length - 1];
    c && c.added === r && c.removed === s ? o[o.length - 1] = {
      count: c.count + 1,
      added: r,
      removed: s
    } : o.push({
      count: 1,
      added: r,
      removed: s
    });
  },
  extractCommon: function(o, r, s, c) {
    for (var l = r.length, u = s.length, f = o.newPos, h = f - c, v = 0; f + 1 < l && h + 1 < u && this.equals(r[f + 1], s[h + 1]); )
      f++, h++, v++;
    return v && o.components.push({
      count: v
    }), o.newPos = f, h;
  },
  equals: function(o, r) {
    return this.options.comparator ? this.options.comparator(o, r) : o === r || this.options.ignoreCase && o.toLowerCase() === r.toLowerCase();
  },
  removeEmpty: function(o) {
    for (var r = [], s = 0; s < o.length; s++)
      o[s] && r.push(o[s]);
    return r;
  },
  castInput: function(o) {
    return o;
  },
  tokenize: function(o) {
    return o.split("");
  },
  join: function(o) {
    return o.join("");
  }
};
function _3(n, o, r, s, c) {
  for (var l = 0, u = o.length, f = 0, h = 0; l < u; l++) {
    var v = o[l];
    if (v.removed) {
      if (v.value = n.join(s.slice(h, h + v.count)), h += v.count, l && o[l - 1].added) {
        var m = o[l - 1];
        o[l - 1] = o[l], o[l] = m;
      }
    } else {
      if (!v.added && c) {
        var b = r.slice(f, f + v.count);
        b = b.map(function(y, N) {
          var w = s[h + N];
          return w.length > y.length ? w : y;
        }), v.value = n.join(b);
      } else
        v.value = n.join(r.slice(f, f + v.count));
      f += v.count, v.added || (h += v.count);
    }
  }
  var C = o[u - 1];
  return u > 1 && typeof C.value == "string" && (C.added || C.removed) && n.equals("", C.value) && (o[u - 2].value += C.value, o.pop()), o;
}
function $3(n) {
  return {
    newPos: n.newPos,
    components: n.components.slice(0)
  };
}
var E3 = new Uo();
function fu(n, o, r) {
  return E3.diff(n, o, r);
}
var pb = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/, gb = /\S/, Py = new Uo();
Py.equals = function(n, o) {
  return this.options.ignoreCase && (n = n.toLowerCase(), o = o.toLowerCase()), n === o || this.options.ignoreWhitespace && !gb.test(n) && !gb.test(o);
};
Py.tokenize = function(n) {
  for (var o = n.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/), r = 0; r < o.length - 1; r++)
    !o[r + 1] && o[r + 2] && pb.test(o[r]) && pb.test(o[r + 2]) && (o[r] += o[r + 2], o.splice(r + 1, 2), r--);
  return o;
};
var Ay = new Uo();
Ay.tokenize = function(n) {
  var o = [], r = n.split(/(\n|\r\n)/);
  r[r.length - 1] || r.pop();
  for (var s = 0; s < r.length; s++) {
    var c = r[s];
    s % 2 && !this.options.newlineIsToken ? o[o.length - 1] += c : (this.options.ignoreWhitespace && (c = c.trim()), o.push(c));
  }
  return o;
};
var S3 = new Uo();
S3.tokenize = function(n) {
  return n.split(/(\S.+?[.!?])(?=\s+|$)/);
};
var D3 = new Uo();
D3.tokenize = function(n) {
  return n.split(/([{}:;,]|\s+)/);
};
function mu(n) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? mu = function(o) {
    return typeof o;
  } : mu = function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, mu(n);
}
var O3 = Object.prototype.toString, Fl = new Uo();
Fl.useLongestToken = !0;
Fl.tokenize = Ay.tokenize;
Fl.castInput = function(n) {
  var o = this.options, r = o.undefinedReplacement, s = o.stringifyReplacer, c = s === void 0 ? function(l, u) {
    return typeof u > "u" ? r : u;
  } : s;
  return typeof n == "string" ? n : JSON.stringify(b1(n, null, null, c), c, "  ");
};
Fl.equals = function(n, o) {
  return Uo.prototype.equals.call(Fl, n.replace(/,([\r\n])/g, "$1"), o.replace(/,([\r\n])/g, "$1"));
};
function b1(n, o, r, s, c) {
  o = o || [], r = r || [], s && (n = s(c, n));
  var l;
  for (l = 0; l < o.length; l += 1)
    if (o[l] === n)
      return r[l];
  var u;
  if (O3.call(n) === "[object Array]") {
    for (o.push(n), u = new Array(n.length), r.push(u), l = 0; l < n.length; l += 1)
      u[l] = b1(n[l], o, r, s, c);
    return o.pop(), r.pop(), u;
  }
  if (n && n.toJSON && (n = n.toJSON()), mu(n) === "object" && n !== null) {
    o.push(n), u = {}, r.push(u);
    var f = [], h;
    for (h in n)
      n.hasOwnProperty(h) && f.push(h);
    for (f.sort(), l = 0; l < f.length; l += 1)
      h = f[l], u[h] = b1(n[h], o, r, s, h);
    o.pop(), r.pop();
  } else
    u = n;
  return u;
}
var Au = new Uo();
Au.tokenize = function(n) {
  return n.slice();
};
Au.join = Au.removeEmpty = function(n) {
  return n;
};
function xl(n, o, r) {
  return Au.diff(n, o, r);
}
class Xm {
  constructor(o, r) {
    Ir(this, "activeOptionIndex", null);
    Ir(this, "activeRowIndex", null);
    this.context = o, this.route = r;
  }
  parseIndex(o) {
    const r = this.activeOptionIndex !== null ? this.activeOptionIndex : this.getNodeData().selectedOption;
    return o === void 0 ? r : o;
  }
  getNodeId() {
    const [o, r] = this.route[this.route.length - 1];
    return r;
  }
  getNodeType() {
    const [o, r] = this.route[this.route.length - 1];
    return o;
  }
  getRoute() {
    return this.route;
  }
  getNodeData() {
    const o = this.getNodeId(), r = this.context.data.nodes[o];
    if (!r)
      throw new Error(`no node options entry for ${o}`);
    return r;
  }
  setNodeData(o) {
    return this.context.setNode(this, o);
  }
  setNodeOptionData(o, r) {
    return this.context.updateNodeOptionData(this.route, r, o);
  }
  getOptionContent(o) {
    const r = this.parseIndex(o), s = this.getNodeData(), c = s.options[r];
    if (!c) {
      const l = this.getNodeId();
      throw console.log("getOptionContent", l, r, s), new Error(`no node entry for ${l} - ${r}`);
    }
    return c;
  }
  updateOptionData(o, r) {
    const s = this.parseIndex(r), c = this.getNodeData(), l = c.options.slice(0, s), u = c.options.slice(s + 1), f = l.concat(o ? [o] : []).concat(u);
    return {
      selectedOption: c.selectedOption,
      description: c.description,
      collapsed: c.collapsed,
      options: f
    };
  }
  updateNodeData(o) {
    return this.getNodeId(), this.context.setNode(this, o);
  }
  getChildren(o) {
    const r = this.parseIndex(o);
    return this.getOptionContent(r).content.map(([u, f]) => {
      const h = this.route.concat([[u, f]]);
      if (u === "task")
        return this.context.getNode(h);
      throw new Error(`unknown type ${u}`);
    });
  }
  isChildOf(o) {
    const r = this.route;
    return o.route.every(([l, u], f) => {
      var h, v;
      return l == ((h = r[f]) == null ? void 0 : h[0]) && u == ((v = r[f]) == null ? void 0 : v[1]);
    });
  }
  /**
   * @param nthGen number of generations to go up
   * @returns [node: FosNode, childIndex: number, optionIndex: number]
   */
  getParent(o) {
    if (o > this.route.length)
      throw new Error(`node does not have ${o} ancestors`);
    if (o === 1) {
      const r = this.route.slice(0, this.route.length - o), s = this.context.getNode(r);
      if (s.activeOptionIndex = s.getNodeData().selectedOption, s.getChildren().forEach((c, l) => {
        c.getNodeId() === this.getNodeId() && c.getNodeType() === this.getNodeType() && (s.activeRowIndex = l);
      }), s.activeRowIndex === null)
        throw new Error("could not find child in parent");
      return [s, s.activeRowIndex, s.activeOptionIndex];
    } else {
      const [r, s, c] = this.getParent(o - 1);
      return r.getParent(1);
    }
  }
  addOption() {
    return this.context.addOptionToNode(this.route);
  }
  deleteOption(o) {
    const r = this.getNodeData();
    if (r.options.length === 1)
      throw new Error("cannot delete last option");
    const s = r.selectedOption ? r.selectedOption - 1 : 0, c = r.options.slice(0, o), l = r.options.slice(o + 1), u = c.concat(l), f = {
      selectedOption: r.selectedOption === o ? r.selectedOption : s,
      description: r.description,
      collapsed: r.collapsed,
      options: u
    };
    return this.context.setNode(this, f);
  }
  deleteRowByIndex(o, r) {
    const s = this.parseIndex(r), c = this.getOptionContent(s), l = c.content.slice(0, o).concat(c.content.slice(o + 1)), u = {
      description: c.description,
      data: c.data,
      content: l
    };
    return this.updateOptionData(u, s);
  }
  deleteNode() {
    const [o] = this.getParent(1), r = o.getOptionContent(), s = r.content.filter(([l, u]) => l !== this.getNodeType() || u !== this.getNodeId()), c = {
      ...r,
      content: s
    };
    if (Ru.isEqual(this.context.data.focus.route, this.route)) {
      const l = this.moveFocusUp(-1);
      return l ? l.setOptionOnNode(o.getRoute(), c) : this.context.setOptionOnNode(o.getRoute(), c);
    } else
      return this.context.setOptionOnNode(o.getRoute(), c);
  }
  moveFocusUp(o) {
    try {
      const [r, s, c] = this.getParent(1), l = r.getChildren(c);
      if (s === 0) {
        const u = r.getRoute(), f = r.getNodeData().description, h = o ? o < 0 ? f.length + o : o : this.context.data.focus.char;
        return this.context.setFocus(u, h);
      } else {
        const u = l[s - 1], f = u.getNodeData(), h = u.getChildren();
        if (f.collapsed || h.length === 0) {
          const v = u.getRoute(), b = u.getNodeData().description, m = o ? o < 0 ? b.length + o : o : this.context.data.focus.char;
          return this.context.setFocus(v, m);
        } else {
          const v = u.getLastDescendent(), b = v.getRoute(), m = v.getNodeData().description, C = o ? o < 0 ? m.length + o : o : this.context.data.focus.char;
          return this.context.setFocus(b, C);
        }
      }
    } catch (r) {
      console.log("moveFocusDown - no parent", r);
      return;
    }
  }
  moveFocusDown(o = !1) {
    if (!this.getNodeData().collapsed && !o) {
      const r = this.getChildren();
      if (r.length > 0) {
        const c = r[0].getRoute();
        return this.context.setFocus(c, this.context.data.focus.char);
      }
    }
    try {
      const [r, s, c] = this.getParent(1), l = r.getChildren(c);
      if (s === l.length - 1)
        try {
          r.moveFocusDown(!0);
        } catch {
          return;
        }
      else {
        const f = l[s + 1].getRoute();
        return this.context.setFocus(f, this.context.data.focus.char);
      }
    } catch (r) {
      console.log("moveFocusDown - no parent", r);
      return;
    }
  }
  getLastDescendent(o = !0) {
    const r = this.getChildren(), s = this.getNodeData().collapsed;
    return r.length === 0 || o && s ? this : r[r.length - 1].getLastDescendent(o);
  }
  acceptMerge() {
    const o = this.getNodeData().mergeNode;
    if (!o)
      throw new Error("no merge node");
    if (!this.context.data.nodes[o])
      throw new Error("no merge node data");
    const [s, c, l] = this.getParent(1), u = s.getOptionContent(l);
    if (!u.content[c])
      throw console.log("acceptMerge - no current content", u, c, u.content), new Error("no current content");
    const f = u.content[c];
    if (!f)
      throw console.log("acceptMerge - no current content", u, c, u.content), new Error("no current content");
    const h = [f[0], o], v = u.content.slice(0, c), b = u.content.slice(c + 1), m = {
      ...u,
      content: [...v, h, ...b]
    }, y = s.setNodeOptionData(l, m).getNode(this.route), w = {
      ...y.getNodeData(),
      mergeNode: void 0
    };
    return y.setNodeData(w);
  }
  rejectMerge() {
    const o = this.getNodeData().mergeNode;
    if (!o)
      throw new Error("no merge node");
    if (!this.context.data.nodes[o])
      throw new Error("no merge node data");
    const c = {
      ...this.getNodeData(),
      mergeNode: void 0
    };
    return this.setNodeData(c);
  }
  bothMerge() {
    const o = this.getNodeData().mergeNode;
    if (!o)
      throw new Error("no merge node");
    if (!this.context.data.nodes[o])
      throw new Error("no merge node data");
    const [s, c, l] = this.getParent(1), u = s.getOptionContent(l), f = u.content[c];
    if (!f)
      throw console.log("acceptMerge - no current content", u, c, u.content), new Error("no current content");
    const h = [f[0], o], v = u.content.slice(0, c + 1), b = u.content.slice(c + 1), m = {
      ...u,
      content: [...v, h, ...b]
    }, y = s.setNodeOptionData(l, m).getNode(this.route), w = {
      ...y.getNodeData(),
      mergeNode: void 0
    };
    return y.setNodeData(w);
  }
  getMergeOptions() {
    const o = this.getNodeData().options, r = this.mergeNodeData().options, s = xl(o, r, { comparator: (f, h) => vb(fu(f.description, h.description)) || vb(xl(f.content, h.content)) });
    let c = 0, l = 0;
    return s.reduce((f, h) => {
      if (h.added) {
        const v = h.value.map((b, m) => {
          const C = l + m, y = r[C];
          if (!y)
            throw new Error("no merge node option");
          const N = y.description, w = y.content;
          return {
            description: fu(N, N),
            content: xl(w, w, { comparator: (_, $) => _[0] === $[0] && _[1] === $[1] })
          };
        });
        return l = h.count ? l + h.count : l, [...f, ...v];
      } else if (h.removed) {
        const v = h.value.map((b, m) => {
          const C = c + m, y = o[C];
          if (!y)
            throw new Error("no merge node option");
          const N = y.description, w = y.content;
          return {
            description: fu(N, N),
            content: xl(w, w, { comparator: (_, $) => _[0] === $[0] && _[1] === $[1] })
          };
        });
        return c = h.count ? c + h.count : c, [...f, ...v];
      } else {
        const v = h.value.map((b, m) => {
          const C = l + m, y = r[C];
          if (!y)
            throw new Error("no merge node option");
          const N = y.description, w = y.content, _ = c + m, $ = o[_];
          if (!$)
            throw new Error("no merge node option");
          const R = $.description, O = $.content;
          return {
            description: fu(R, N),
            content: xl(O, w, { comparator: (P, I) => P[0] === I[0] && P[1] === I[1] })
          };
        });
        return c = h.count ? c + h.count : c, [...f, ...v];
      }
    }, []);
  }
  hasMerge() {
    const o = this.getNodeData(), r = !!o.mergeNode, s = o.mergeNode ? !Ru.isEqual(o, this.context.data.nodes[o.mergeNode] || {}) : !1;
    return r && s;
  }
  getMergedIndex() {
    const o = this.getNodeData(), r = o.mergeNode;
    if (!r)
      throw new Error("no merge node");
    const s = this.context.data.nodes[r];
    if (!s)
      throw new Error("no merge node data");
    const c = o.selectedOption, l = s.selectedOption;
    return l || c;
  }
  getMergeChildren(o) {
    o || (o = this.getMergedIndex());
    const s = this.getMergeOptions()[o];
    if (!s)
      throw new Error("no merged option");
    return s.content.reduce((u, f) => {
      const h = f.value.map(([b, m]) => {
        const C = this.route.concat([[b, m]]);
        return {
          ...f.added ? { added: !0 } : {},
          ...f.removed ? { removed: !0 } : {},
          node: this.context.getNode(C)
        };
      });
      return [...u, ...h];
    }, []);
  }
  mergeNodeData() {
    const o = this.getNodeData().mergeNode;
    if (!o)
      throw new Error("no merge node");
    const r = this.context.data.nodes[o];
    if (!r)
      throw new Error("no merge node data");
    return r;
  }
  mergeNodeContent() {
    const o = this.mergeNodeData(), r = o.selectedOption, s = o.options[r];
    if (!s)
      throw console.log("getMergeDescription - no merge content", s), new Error("no merge content");
    return s;
  }
  setPath(o) {
    return Object.keys(o).reduce((s, c, l) => {
      const u = s.getNode(this.getRoute()), f = u.getChildren();
      if (f.length === 0) {
        if (!o[c])
          throw console.log("path is not valid - key not found", o, c), new Error("path is not valid - key not found");
        if (Object.keys(o[c] || {}).length !== 0)
          throw console.log("path is not valid - key not empty at leaf", o, c), new Error("path is not valid");
        const h = parseInt(c);
        return u.setNodeData({
          ...u.getNodeData(),
          selectedOption: h
        });
      } else {
        const h = o[c];
        if (!h)
          throw console.log("path is not valid - key not found", o, c), new Error("path is not valid - key not found");
        if (h.length !== f.length)
          throw console.log("path is not valid - selections length different from children length", h.length, f.length, o, c, this.getNodeId()), new Error("path is not valid");
        const b = f.reduce((C, y, N) => {
          const w = C.getNode(y.getRoute()), _ = h[N];
          if (!_)
            throw console.log("path is not valid - selection not found for child", o, c), new Error("path is not valid - selection not found for child");
          const $ = Object.keys(_);
          if ($.length !== 1)
            throw console.log("path is not valid - selection keys length not 1", $, o, c), new Error("path is not valid");
          return w.setPath(_);
        }, s).getNode(u.getRoute());
        return b.setNodeData({
          ...b.getNodeData(),
          selectedOption: parseInt(c)
        });
      }
    }, this.context);
  }
  setData(o, r) {
    const s = this.parseIndex(r), c = this.getOptionContent(s), l = {
      ...c,
      data: {
        ...c.data,
        ...o
      }
    };
    return this.setNodeOptionData(s, l);
  }
  getData(o) {
    const r = this.parseIndex(o);
    return this.getOptionContent(r).data || {};
  }
}
const vb = (n) => {
  if (n.length === void 0 || isNaN(n.length))
    throw new Error("diff array is empty");
  const {
    total: o,
    changed: r
  } = n.reduce((s, c) => ({
    changed: c.added || c.removed ? s.changed + 1 : s.changed,
    total: s.total + 1
  }), { total: 0, changed: 0 });
  return r / o < 0.5;
};
class Ol {
  constructor(o, r) {
    Ir(this, "locked", !1);
    if (this.data = o, this.updateData = r, !o.nodes)
      throw console.log("FosContext - no nodes", o), new Error("no nodes");
  }
  setNodes(o, r, s) {
    if (!this.data.nodes)
      throw console.log("setNodes - no nodes", this.data), new Error("no nodes");
    const c = {
      ...this.data,
      nodes: o,
      focus: r || this.data.focus,
      trail: s || this.data.trail
    };
    this.locked = !0;
    const l = new Ol(c, this.updateData);
    return this.updateData(c), this.locked = !1, l;
  }
  setTrail(o) {
    const r = { ...this.data, trail: o };
    return this.updateData(r), new Ol(r, this.updateData);
  }
  setFocus(o, r) {
    const s = { ...this.data, focus: { route: o, char: r } };
    return this.updateData(s), new Ol(s, this.updateData);
  }
  getNode(o) {
    return new Xm(this, o);
  }
  setNode(o, r) {
    const s = o.getNodeId(), c = {
      ...this.data.nodes,
      [s]: r
    };
    return this.setNodes(c);
  }
  insertNode(o, r, s) {
    const c = this.newId(o), l = {
      ...this.data.nodes,
      [c]: o
    };
    return [this.setNodes(l), c];
  }
  updateNodeAtRoute(o, r) {
    const c = new Xm(this, o).getNodeId(), l = {
      ...this.data.nodes,
      [c]: r
    };
    return this.setNodes(l);
  }
  updateNodeOptionData(o, r, s) {
    const l = this.getNode(o).updateOptionData(r, s);
    return this.updateNodeAtRoute(o, l);
  }
  getNodeOptionsAndObj(o) {
    const r = new Xm(this, o), s = r.getNodeData(), c = r.getOptionContent();
    return [s, c, s.selectedOption];
  }
  newId(o) {
    return crypto.randomUUID();
  }
  addNewTaskToOption(o, r, s) {
    const c = this.getNode(o), l = {
      selectedOption: 0,
      collapsed: !1,
      description: "",
      options: [{
        description: "",
        data: {},
        content: []
      }]
    }, u = this.newId(l), f = c.getOptionContent(s), h = r === void 0 ? f.content.length : r, v = f.content.slice(0, h + 1), b = f.content.slice(h + 1), m = ["task", u], C = v.concat([m]).concat(b), y = {
      ...f,
      content: C
    }, N = c.updateOptionData(y, s), w = c.getNodeId(), _ = o.concat([m]), $ = {
      ...this.data.nodes,
      [w]: N,
      [u]: l
    };
    return console.log("route", o, _), this.setNodes($, { route: _, char: 0 });
  }
  setOptionOnNode(o, r, s) {
    const c = this.getNode(o), l = c.updateOptionData(r, s), u = this.setNode(c, l);
    return console.log("newNodes", u), u;
  }
  addOptionToNode(o, r, s) {
    const c = this.getNode(o), l = s === void 0 ? c.getNodeData().options.length : s, u = c.getNodeData(), f = {
      description: "",
      data: {},
      content: [],
      ...r
    }, h = u.options.slice(0, l), v = u.options.slice(l), b = {
      ...u,
      selectedOption: l,
      options: h.concat([f]).concat(v)
    }, m = c.updateNodeData(b);
    return console.log("newNodes", m), this.setNodes(m.data.nodes);
  }
  moveNodeLeft(o) {
    const r = this.getNode(o), [s, c, l] = r.getParent(1), [u, f, h] = r.getParent(2), v = s.getOptionContent(l), b = v.content.slice(0, c).concat(v.content.slice(c + 1)), m = {
      ...v,
      content: b
    }, C = u.getOptionContent(h), y = C.content.slice(0, f + 1), N = C.content.slice(f + 1), w = y.concat([[r.getNodeType(), r.getNodeId()]]).concat(N), _ = {
      ...C,
      content: w
    };
    console.log("moveNodeLeft", _, m);
    const R = this.setOptionOnNode(u.getRoute(), _, h).setOptionOnNode(s.getRoute(), m, l);
    this.setNodes(R.data.nodes);
  }
  addYoungerSibling(o) {
    console.log("addYoungerSibling", o);
    const r = this.getNode(o), [s, c, l] = r.getParent(1), u = this.addNewTaskToOption(s.getRoute(), c, l);
    this.setNodes(u.data.nodes, u.data.focus, u.data.trail);
  }
  moveNodeRight(o) {
    const r = this.getNode(o), [s, c, l] = r.getParent(1);
    if (c > 0) {
      const u = s.getChildren(l)[c - 1], f = u.getOptionContent(), h = f.content.concat([[r.getNodeType(), r.getNodeId()]]), v = {
        ...f,
        content: h
      }, b = s.getOptionContent(l), m = b.content.slice(0, c).concat(b.content.slice(c + 1)), C = {
        ...b,
        content: m
      };
      console.log("MoveNodeRight", m, h, v, C);
      const N = this.setOptionOnNode(u.getRoute(), v).setOptionOnNode(s.getRoute(), C, l);
      this.setNodes(N.data.nodes);
    } else
      throw new Error("cannot move right");
  }
  moveNodeUp(o) {
    throw new Error("not implemented");
  }
  moveNodeDown(o) {
    throw new Error("not implemented");
  }
  removeNodeFromParent(o) {
    throw new Error("not implemented");
  }
  deleteOption(o, r) {
    throw new Error("not implemented");
  }
  deleteNode(o) {
    throw new Error("not implemented");
  }
  snipNode(o) {
    throw new Error("not implemented");
  }
  deserializeTrailFromUrl(o) {
    const [r, ...s] = o.split("/").filter((b) => b !== ""), c = [["root", "root"]];
    if (!this.getNode(c).getNodeData().options[parseInt(r || "0")])
      throw new Error("firstNodeOption not found");
    return s.reduce((b, m) => {
      const [C, y] = m.split("-").map((O) => parseInt(O));
      if (!C || isNaN(C) || !y || isNaN(y))
        throw console.log("invalid row", m, o, r, s), new Error("invalid row");
      const w = this.getNode(b).getNodeData(), [_, $] = w.options.reduce((O, P) => {
        if (C < P.content.length) {
          const I = P.content[C];
          if (!I)
            throw new Error("row not found");
          return [0, I];
        } else
          return [O[0] - P.content.length, null];
      }, [C, null]);
      return [...b, $];
    }, c);
  }
  serializeTrailToUrl(o) {
    const [r, ...s] = o, c = this.getNode([r]).getNodeData(), u = `${c.selectedOption}/`, [f, h] = s.reduce((v, [b, m], C) => {
      const y = [r, ...o.slice(0, C + 1)], N = this.getNode(y).getNodeData(), w = N.selectedOption, _ = N.options.reduce((O, P, I) => I < w ? O + P.content.length : I === w ? O + P.content.findIndex(([M, W]) => M === M && W === W) : O, 0), $ = this.getNode(y).getNodeData();
      return [`${v}${_}-${N.selectedOption}/`, $];
    }, [u, c]);
    return f;
  }
  addChildrenToNode(o, r, s) {
    console.log("addChildrenToNode1");
    const c = o.parseIndex(s), l = o.getNodeData();
    console.log("addChildrenToNode2");
    const u = l.options.slice(0, c), f = l.options.slice(c + 1), h = o.getOptionContent(c), [v, b] = r.reduce((_, $) => {
      const [R, O] = _[0].insertNode($, o.getRoute(), c);
      return console.log("addChildrenToNode3"), [R, _[1].concat([[o.getNodeType(), O]])];
    }, [this, []]);
    console.log("addChildrenToNode4", v, b);
    const m = {
      ...h,
      content: [...h.content, ...b]
    }, C = [...u, m, ...f];
    console.log("addChildrenToNode5", m, C);
    const y = {
      selectedOption: l.selectedOption,
      description: l.description,
      collapsed: l.collapsed,
      options: C
    };
    console.log("addChildrenToNod6", y);
    const N = v.getNode(o.getRoute()), w = N.setNodeData(y);
    return console.log("addChildrenToNode7", N.context.data, w), this.setNodes(w.data.nodes);
  }
  moveNodeToTopChild(o, r, s) {
    const c = r.parseIndex(s), l = [o.getNodeType(), o.getNodeId()], u = r.getOptionContent(c), f = {
      ...u,
      content: [l, ...u.content]
    }, b = r.setNodeOptionData(c, f).getNode(o.getRoute()).deleteNode();
    return this.setNodes(b.data.nodes);
  }
  moveNodeToOlderSibling(o, r, s) {
    r.parseIndex(s);
    const c = [o.getNodeType(), o.getNodeId()], [l, u, f] = r.getParent(1), h = l.getOptionContent(f), v = u, b = h.content.slice(0, v), m = h.content.slice(v), C = b.concat([c]).concat(m), y = C.filter((_, $) => $ === v ? !0 : _[0] !== o.getNodeType() || _[1] !== o.getNodeId());
    console.log("moveNodeToOlderSibling", y, v, C, b, m);
    const N = {
      ...h,
      content: y
    }, w = l.setNodeOptionData(f, N);
    return this.setNodes(w.data.nodes);
  }
  moveNodeToYoungerSibling(o, r, s) {
    r.parseIndex(s);
    const c = [o.getNodeType(), o.getNodeId()], [l, u, f] = r.getParent(1), h = l.getOptionContent(f), v = u + 1, b = h.content.slice(0, v), m = h.content.slice(v), y = b.concat([c]).concat(m).filter((_, $) => $ === v ? !0 : _[0] !== o.getNodeType() || _[1] !== o.getNodeId()), N = {
      ...h,
      content: y
    }, w = l.setNodeOptionData(f, N);
    return this.setNodes(w.data.nodes);
  }
}
const R3 = [["root", "root"]], P3 = {
  root: {
    selectedOption: 0,
    collapsed: !1,
    description: "root",
    options: [{
      description: "My Goals",
      data: {},
      content: [
        ["task", "startTask"]
      ]
    }]
  },
  startTask: {
    selectedOption: 0,
    collapsed: !1,
    description: "startTask",
    options: [{
      description: "",
      data: {},
      content: []
    }]
  }
}, A3 = {
  nodes: P3,
  trail: R3,
  focus: {
    route: [["root", "root"]],
    char: 0
  },
  previousHash: ""
}, T3 = A3, I3 = {
  theme: "system",
  setTheme: () => null
}, L3 = Un(I3);
function M3({
  children: n,
  defaultTheme: o = "system",
  storageKey: r = "vite-ui-theme",
  rootSelector: s = ".fos-root",
  ...c
}) {
  const [l, u] = Te(
    () => localStorage.getItem(r) || o
  );
  be(() => {
    const h = document.querySelector(s);
    if (!h)
      throw new Error("Root element does not exist in DOM");
    if (h.classList.remove("light", "dark"), l === "system") {
      const v = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      h.classList.add(v);
    }
    h.classList.add(l);
  }, [l]);
  const f = {
    theme: l,
    setTheme: (h) => {
      localStorage.setItem(r, h), u(h);
    }
  };
  return /* @__PURE__ */ T(L3.Provider, { ...c, value: f, children: n });
}
const F3 = ({
  data: n,
  setData: o,
  options: r
}) => {
  const s = at.useMemo(() => {
    const $ = (P) => {
      console.log("Setting Data", P.focus), o(P);
    }, R = n || T3;
    return new Ol(R, $);
  }, [n, o]), [c, l] = Te(null), [u, f] = Te(null), h = RS(
    Gm(Z1, {
      activationConstraint: {
        delay: 250,
        tolerance: 5
      }
    }),
    Gm(q1, {
      coordinateGetter: N3
    }),
    Gm(py, {
      activationConstraint: {
        delay: 250,
        tolerance: 5
      }
    })
  ), v = ($, R) => {
    var ee;
    if (!$ || !R)
      return null;
    const O = R.rect.current.translated;
    if (!O)
      return null;
    const P = (u == null ? void 0 : u.position) || "on", I = P === "below" ? 1 : P === "above" ? -1 : 0, M = O.top + O.height / 2 + I * 12, W = $.rect.top + $.rect.height / 2, U = O.height / 5, G = M < W - U, Z = M > W + U, ne = !G && !Z;
    G && console.log("above", $.id), Z && console.log("below", $.id), ne && console.log("on", $.id);
    const oe = ne ? "on" : G ? "above" : "below";
    return { id: $.id, position: oe, node: (ee = $.data.current) == null ? void 0 : ee.node };
  };
  function b($) {
    const { active: R } = $;
    R && R.data.current && l({ id: R.id, node: R.data.current.node });
  }
  function m($) {
    const { over: R, active: O } = $, P = v(R, O);
    P && (P.id !== (u == null ? void 0 : u.id) || P.position !== (u == null ? void 0 : u.position)) && f(P);
  }
  function C($) {
    const { active: R, over: O } = $;
    console.log("drag end", R, O, $, u);
    const P = u;
    if (console.log("dragInfo", u), !O || !O.data.current) {
      l(null), f(null);
      return;
    }
    if (!R || !R.data.current) {
      l(null), f(null);
      return;
    }
    if (R.id === (O == null ? void 0 : O.id)) {
      l(null), f(null);
      return;
    }
    if (!u)
      throw new Error("no dragInfo, but over is not null");
    const I = R.data.current.node, M = O.data.current.node;
    (P == null ? void 0 : P.position) === "on" ? s.moveNodeToTopChild(I, M) : (P == null ? void 0 : P.position) === "above" ? s.moveNodeToOlderSibling(I, M) : (P == null ? void 0 : P.position) === "below" && s.moveNodeToYoungerSibling(I, M), l(null), f(null);
  }
  const y = s.data.trail, N = ($) => {
    s.setTrail($);
  }, w = s.getNode(y), _ = ($) => {
    var O, P;
    if (!$.active.rect.current.translated || !$.active.rect.current.initial)
      return [];
    if (!$.active.rect.current.translated)
      return [];
    const R = $.droppableContainers.map((I) => {
      if (!I.rect.current)
        return null;
      I.rect.current.top;
      const M = I.rect.current.top + 12;
      I.rect.current.top + I.rect.current.height;
      const W = I.rect.current.top + I.rect.current.height - 12;
      I.rect.current.top + I.rect.current.height / 3, $.active.rect.current.translated.top, $.active.rect.current.translated.top + $.active.rect.current.translated.height;
      const U = $.active.rect.current.translated.top + $.active.rect.current.translated.height / 2;
      return U > M && U < W ? I : null;
    }).filter((I) => I !== null);
    if (R.length > 1) {
      const I = ((O = $.active.rect.current.translated) == null ? void 0 : O.left) - ((P = $.active.rect.current.initial) == null ? void 0 : P.left) / window.innerWidth, M = R.filter((Z) => Z !== null && Z.rect.current).map((Z) => Z.rect.current.width + 10).reduce((Z, ne) => Z + ne), W = M < window.innerWidth ? M : window.innerWidth, [U, G] = R.reduce((Z, ne) => {
        if (!ne || !ne.rect.current || !$.active.rect.current.translated || !$.active.rect.current.initial)
          return Z;
        const ye = ne.rect.current.left + ne.rect.current.width / 2 - W / 2, ee = Math.abs(ye - I);
        return Z[0] < ee ? Z : [ee, ne];
      }, [window.innerWidth, null]);
      return G === null ? [] : [{ id: G.id }];
    } else
      return R[0] ? [{ id: R[0].id }] : [];
  };
  return /* @__PURE__ */ T(M3, { defaultTheme: (r == null ? void 0 : r.theme) || "system", children: /* @__PURE__ */ T(
    BS,
    {
      sensors: h,
      collisionDetection: _,
      onDragStart: b,
      onDragEnd: C,
      onDragOver: m,
      children: /* @__PURE__ */ j("div", { className: "w-full fos-root", children: [
        /* @__PURE__ */ T("div", { className: "flex w-full px-3 items-center overflow-x-scroll no-scrollbar", children: y.length > 1 && y.map(($, R) => {
          const O = y.slice(0, R + 1);
          return /* @__PURE__ */ T(k3, { index: R, breadcrumbTrail: O, item: $, trail: y, context: s, setTrail: N, dragging: c, dragOverInfo: u }, R);
        }) }),
        /* @__PURE__ */ T("div", { className: "w-full", children: w.hasMerge() ? /* @__PURE__ */ T(b3, { context: s, node: w, dragging: c, dragOverInfo: u, options: r || {} }) : /* @__PURE__ */ T(v3, { context: s, node: w, dragging: c, dragOverInfo: u, options: r || {} }) })
      ] })
    }
  ) });
}, X3 = F3, k3 = ({
  index: n,
  breadcrumbTrail: o,
  item: r,
  trail: s,
  context: c,
  dragging: l,
  dragOverInfo: u,
  setTrail: f
}) => {
  const h = c.getNode(o), v = h.getNodeId(), b = h.getNodeType(), {
    isOver: m,
    setNodeRef: C,
    node: y
  } = X1({
    id: `${b}-${v}`,
    data: { node: h }
  }), w = c.getNode(o).getOptionContent(), _ = w.description.length > 20 ? w.description.slice(0, 17) + "..." : w.description, $ = o.length === 1 ? /* @__PURE__ */ T(jy, {}) : _;
  return /* @__PURE__ */ T("div", { className: m ? "scale-110 py-0 px-1" : "py-2 px-1", ref: C, children: /* @__PURE__ */ T(Ve, { onClick: () => {
    f(o);
  }, variant: "secondary", disabled: n === s.length - 1, children: $ }, n + 1) });
};
export {
  G3 as FosContext,
  _m as FosNode,
  X3 as default
};
