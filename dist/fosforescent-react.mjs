var mx = Object.defineProperty;
var wx = (e, n, r) => n in e ? mx(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r;
var fs = (e, n, r) => (wx(e, typeof n != "symbol" ? n + "" : n, r), r);
import { jsx as _, jsxs as q, Fragment as hr } from "react/jsx-runtime";
import * as M from "react";
import Me, { forwardRef as le, createElement as U, useCallback as He, Children as Wt, isValidElement as pr, cloneElement as po, Fragment as Hs, createContext as jt, useMemo as We, useContext as En, useLayoutEffect as Vs, useRef as J, useEffect as se, useState as me, useReducer as pl, memo as bx, useImperativeHandle as yx } from "react";
import * as xx from "react-dom";
import gl, { flushSync as Gs, unstable_batchedUpdates as hs, createPortal as Cx } from "react-dom";
function fn(e, n) {
  if (e == null)
    return {};
  var r = {}, i = Object.keys(e), s, c;
  for (c = 0; c < i.length; c++)
    s = i[c], !(n.indexOf(s) >= 0) && (r[s] = e[s]);
  return r;
}
var $x = ["color"], Ks = /* @__PURE__ */ le(function(e, n) {
  var r = e.color, i = r === void 0 ? "currentColor" : r, s = fn(e, $x);
  return U("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, s, {
    ref: n
  }), U("path", {
    d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
    fill: i,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Nx = ["color"], Ys = /* @__PURE__ */ le(function(e, n) {
  var r = e.color, i = r === void 0 ? "currentColor" : r, s = fn(e, Nx);
  return U("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, s, {
    ref: n
  }), U("path", {
    d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
    fill: i,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Sx = ["color"], Ih = /* @__PURE__ */ le(function(e, n) {
  var r = e.color, i = r === void 0 ? "currentColor" : r, s = fn(e, Sx);
  return U("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, s, {
    ref: n
  }), U("path", {
    d: "M7.85361 1.48959C7.65835 1.29432 7.34176 1.29432 7.1465 1.48959L1.48965 7.14644C1.29439 7.3417 1.29439 7.65829 1.48965 7.85355L3.9645 10.3284L1.64644 12.6464C1.45118 12.8417 1.45118 13.1583 1.64644 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.6716 11.0355L7.1465 13.5104C7.34176 13.7057 7.65835 13.7057 7.85361 13.5104L13.5105 7.85355C13.7057 7.65829 13.7057 7.3417 13.5105 7.14644L11.0356 4.67154L13.3535 2.35355C13.5488 2.15829 13.5488 1.84171 13.3535 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.3285 3.96443L7.85361 1.48959ZM9.62135 4.67154L7.50005 2.55025L2.55031 7.49999L4.6716 9.62129L9.62135 4.67154ZM5.37871 10.3284L7.50005 12.4497L12.4498 7.49999L10.3285 5.37865L5.37871 10.3284Z",
    fill: i,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Ex = ["color"], kh = /* @__PURE__ */ le(function(e, n) {
  var r = e.color, i = r === void 0 ? "currentColor" : r, s = fn(e, Ex);
  return U("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, s, {
    ref: n
  }), U("path", {
    d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
    fill: i,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Dx = ["color"], Mh = /* @__PURE__ */ le(function(e, n) {
  var r = e.color, i = r === void 0 ? "currentColor" : r, s = fn(e, Dx);
  return U("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, s, {
    ref: n
  }), U("path", {
    d: "M7.49991 0.877075C3.84222 0.877075 0.877075 3.84222 0.877075 7.49991C0.877075 11.1576 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1576 14.1227 7.49991C14.1227 3.84222 11.1576 0.877075 7.49991 0.877075ZM1.82708 7.49991C1.82708 4.36689 4.36689 1.82707 7.49991 1.82707C10.6329 1.82707 13.1727 4.36689 13.1727 7.49991C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49991ZM8.37287 7.50006C8.37287 7.98196 7.98221 8.37263 7.5003 8.37263C7.01839 8.37263 6.62773 7.98196 6.62773 7.50006C6.62773 7.01815 7.01839 6.62748 7.5003 6.62748C7.98221 6.62748 8.37287 7.01815 8.37287 7.50006ZM9.32287 7.50006C9.32287 8.50664 8.50688 9.32263 7.5003 9.32263C6.49372 9.32263 5.67773 8.50664 5.67773 7.50006C5.67773 6.49348 6.49372 5.67748 7.5003 5.67748C8.50688 5.67748 9.32287 6.49348 9.32287 7.50006Z",
    fill: i,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), _x = ["color"], Px = /* @__PURE__ */ le(function(e, n) {
  var r = e.color, i = r === void 0 ? "currentColor" : r, s = fn(e, _x);
  return U("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, s, {
    ref: n
  }), U("path", {
    d: "M5.5 4.625C6.12132 4.625 6.625 4.12132 6.625 3.5C6.625 2.87868 6.12132 2.375 5.5 2.375C4.87868 2.375 4.375 2.87868 4.375 3.5C4.375 4.12132 4.87868 4.625 5.5 4.625ZM9.5 4.625C10.1213 4.625 10.625 4.12132 10.625 3.5C10.625 2.87868 10.1213 2.375 9.5 2.375C8.87868 2.375 8.375 2.87868 8.375 3.5C8.375 4.12132 8.87868 4.625 9.5 4.625ZM10.625 7.5C10.625 8.12132 10.1213 8.625 9.5 8.625C8.87868 8.625 8.375 8.12132 8.375 7.5C8.375 6.87868 8.87868 6.375 9.5 6.375C10.1213 6.375 10.625 6.87868 10.625 7.5ZM5.5 8.625C6.12132 8.625 6.625 8.12132 6.625 7.5C6.625 6.87868 6.12132 6.375 5.5 6.375C4.87868 6.375 4.375 6.87868 4.375 7.5C4.375 8.12132 4.87868 8.625 5.5 8.625ZM10.625 11.5C10.625 12.1213 10.1213 12.625 9.5 12.625C8.87868 12.625 8.375 12.1213 8.375 11.5C8.375 10.8787 8.87868 10.375 9.5 10.375C10.1213 10.375 10.625 10.8787 10.625 11.5ZM5.5 12.625C6.12132 12.625 6.625 12.1213 6.625 11.5C6.625 10.8787 6.12132 10.375 5.5 10.375C4.87868 10.375 4.375 10.8787 4.375 11.5C4.375 12.1213 4.87868 12.625 5.5 12.625Z",
    fill: i,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Ox = ["color"], Rx = /* @__PURE__ */ le(function(e, n) {
  var r = e.color, i = r === void 0 ? "currentColor" : r, s = fn(e, Ox);
  return U("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, s, {
    ref: n
  }), U("path", {
    d: "M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z",
    fill: i,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Ax = ["color"], Tx = /* @__PURE__ */ le(function(e, n) {
  var r = e.color, i = r === void 0 ? "currentColor" : r, s = fn(e, Ax);
  return U("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, s, {
    ref: n
  }), U("path", {
    d: "M13.9 0.499976C13.9 0.279062 13.7209 0.0999756 13.5 0.0999756C13.2791 0.0999756 13.1 0.279062 13.1 0.499976V1.09998H12.5C12.2791 1.09998 12.1 1.27906 12.1 1.49998C12.1 1.72089 12.2791 1.89998 12.5 1.89998H13.1V2.49998C13.1 2.72089 13.2791 2.89998 13.5 2.89998C13.7209 2.89998 13.9 2.72089 13.9 2.49998V1.89998H14.5C14.7209 1.89998 14.9 1.72089 14.9 1.49998C14.9 1.27906 14.7209 1.09998 14.5 1.09998H13.9V0.499976ZM11.8536 3.14642C12.0488 3.34168 12.0488 3.65826 11.8536 3.85353L10.8536 4.85353C10.6583 5.04879 10.3417 5.04879 10.1465 4.85353C9.9512 4.65827 9.9512 4.34169 10.1465 4.14642L11.1464 3.14643C11.3417 2.95116 11.6583 2.95116 11.8536 3.14642ZM9.85357 5.14642C10.0488 5.34168 10.0488 5.65827 9.85357 5.85353L2.85355 12.8535C2.65829 13.0488 2.34171 13.0488 2.14645 12.8535C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L9.14646 5.14642C9.34172 4.95116 9.65831 4.95116 9.85357 5.14642ZM13.5 5.09998C13.7209 5.09998 13.9 5.27906 13.9 5.49998V6.09998H14.5C14.7209 6.09998 14.9 6.27906 14.9 6.49998C14.9 6.72089 14.7209 6.89998 14.5 6.89998H13.9V7.49998C13.9 7.72089 13.7209 7.89998 13.5 7.89998C13.2791 7.89998 13.1 7.72089 13.1 7.49998V6.89998H12.5C12.2791 6.89998 12.1 6.72089 12.1 6.49998C12.1 6.27906 12.2791 6.09998 12.5 6.09998H13.1V5.49998C13.1 5.27906 13.2791 5.09998 13.5 5.09998ZM8.90002 0.499976C8.90002 0.279062 8.72093 0.0999756 8.50002 0.0999756C8.2791 0.0999756 8.10002 0.279062 8.10002 0.499976V1.09998H7.50002C7.2791 1.09998 7.10002 1.27906 7.10002 1.49998C7.10002 1.72089 7.2791 1.89998 7.50002 1.89998H8.10002V2.49998C8.10002 2.72089 8.2791 2.89998 8.50002 2.89998C8.72093 2.89998 8.90002 2.72089 8.90002 2.49998V1.89998H9.50002C9.72093 1.89998 9.90002 1.72089 9.90002 1.49998C9.90002 1.27906 9.72093 1.09998 9.50002 1.09998H8.90002V0.499976Z",
    fill: i,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Ix = ["color"], kx = /* @__PURE__ */ le(function(e, n) {
  var r = e.color, i = r === void 0 ? "currentColor" : r, s = fn(e, Ix);
  return U("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, s, {
    ref: n
  }), U("path", {
    d: "M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z",
    fill: i,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Mx = ["color"], Lx = /* @__PURE__ */ le(function(e, n) {
  var r = e.color, i = r === void 0 ? "currentColor" : r, s = fn(e, Mx);
  return U("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, s, {
    ref: n
  }), U("path", {
    d: "M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z",
    fill: i,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Fx = ["color"], Wx = /* @__PURE__ */ le(function(e, n) {
  var r = e.color, i = r === void 0 ? "currentColor" : r, s = fn(e, Fx);
  return U("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, s, {
    ref: n
  }), U("path", {
    d: "M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z",
    fill: i,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Bx = ["color"], Ux = /* @__PURE__ */ le(function(e, n) {
  var r = e.color, i = r === void 0 ? "currentColor" : r, s = fn(e, Bx);
  return U("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, s, {
    ref: n
  }), U("path", {
    d: "M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z",
    fill: i,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
function fe() {
  return fe = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, fe.apply(this, arguments);
}
function zx(e, n) {
  typeof e == "function" ? e(n) : e != null && (e.current = n);
}
function Lh(...e) {
  return (n) => e.forEach(
    (r) => zx(r, n)
  );
}
function mt(...e) {
  return He(Lh(...e), e);
}
const gr = /* @__PURE__ */ le((e, n) => {
  const { children: r, ...i } = e, s = Wt.toArray(r), c = s.find(Vx);
  if (c) {
    const l = c.props.children, u = s.map((d) => d === c ? Wt.count(l) > 1 ? Wt.only(null) : /* @__PURE__ */ pr(l) ? l.props.children : null : d);
    return /* @__PURE__ */ U(Kc, fe({}, i, {
      ref: n
    }), /* @__PURE__ */ pr(l) ? /* @__PURE__ */ po(l, void 0, u) : null);
  }
  return /* @__PURE__ */ U(Kc, fe({}, i, {
    ref: n
  }), r);
});
gr.displayName = "Slot";
const Kc = /* @__PURE__ */ le((e, n) => {
  const { children: r, ...i } = e;
  return /* @__PURE__ */ pr(r) ? /* @__PURE__ */ po(r, {
    ...Gx(i, r.props),
    ref: n ? Lh(n, r.ref) : r.ref
  }) : Wt.count(r) > 1 ? Wt.only(null) : null;
});
Kc.displayName = "SlotClone";
const Hx = ({ children: e }) => /* @__PURE__ */ U(Hs, null, e);
function Vx(e) {
  return /* @__PURE__ */ pr(e) && e.type === Hx;
}
function Gx(e, n) {
  const r = {
    ...n
  };
  for (const i in n) {
    const s = e[i], c = n[i];
    /^on[A-Z]/.test(i) ? s && c ? r[i] = (...u) => {
      c(...u), s(...u);
    } : s && (r[i] = s) : i === "style" ? r[i] = {
      ...s,
      ...c
    } : i === "className" && (r[i] = [
      s,
      c
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...r
  };
}
function Fh(e) {
  var n, r, i = "";
  if (typeof e == "string" || typeof e == "number")
    i += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (n = 0; n < e.length; n++)
        e[n] && (r = Fh(e[n])) && (i && (i += " "), i += r);
    else
      for (n in e)
        e[n] && (i && (i += " "), i += n);
  return i;
}
function Wh() {
  for (var e, n, r = 0, i = ""; r < arguments.length; )
    (e = arguments[r++]) && (n = Fh(e)) && (i && (i += " "), i += n);
  return i;
}
const Nf = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Sf = Wh, vl = (e, n) => (r) => {
  var i;
  if ((n == null ? void 0 : n.variants) == null)
    return Sf(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: s, defaultVariants: c } = n, l = Object.keys(s).map((h) => {
    const v = r == null ? void 0 : r[h], g = c == null ? void 0 : c[h];
    if (v === null)
      return null;
    const b = Nf(v) || Nf(g);
    return s[h][b];
  }), u = r && Object.entries(r).reduce((h, v) => {
    let [g, b] = v;
    return b === void 0 || (h[g] = b), h;
  }, {}), d = n == null || (i = n.compoundVariants) === null || i === void 0 ? void 0 : i.reduce((h, v) => {
    let { class: g, className: b, ...m } = v;
    return Object.entries(m).every((C) => {
      let [p, y] = C;
      return Array.isArray(y) ? y.includes({
        ...c,
        ...u
      }[p]) : {
        ...c,
        ...u
      }[p] === y;
    }) ? [
      ...h,
      g,
      b
    ] : h;
  }, []);
  return Sf(e, l, d, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
};
function Kx() {
  for (var e = 0, n, r, i = ""; e < arguments.length; )
    (n = arguments[e++]) && (r = Bh(n)) && (i && (i += " "), i += r);
  return i;
}
function Bh(e) {
  if (typeof e == "string")
    return e;
  for (var n, r = "", i = 0; i < e.length; i++)
    e[i] && (n = Bh(e[i])) && (r && (r += " "), r += n);
  return r;
}
var ml = "-";
function Yx(e) {
  var n = Zx(e), r = e.conflictingClassGroups, i = e.conflictingClassGroupModifiers, s = i === void 0 ? {} : i;
  function c(u) {
    var d = u.split(ml);
    return d[0] === "" && d.length !== 1 && d.shift(), Uh(d, n) || qx(u);
  }
  function l(u, d) {
    var h = r[u] || [];
    return d && s[u] ? [].concat(h, s[u]) : h;
  }
  return {
    getClassGroupId: c,
    getConflictingClassGroupIds: l
  };
}
function Uh(e, n) {
  var l;
  if (e.length === 0)
    return n.classGroupId;
  var r = e[0], i = n.nextPart.get(r), s = i ? Uh(e.slice(1), i) : void 0;
  if (s)
    return s;
  if (n.validators.length !== 0) {
    var c = e.join(ml);
    return (l = n.validators.find(function(u) {
      var d = u.validator;
      return d(c);
    })) == null ? void 0 : l.classGroupId;
  }
}
var Ef = /^\[(.+)\]$/;
function qx(e) {
  if (Ef.test(e)) {
    var n = Ef.exec(e)[1], r = n == null ? void 0 : n.substring(0, n.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function Zx(e) {
  var n = e.theme, r = e.prefix, i = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, s = jx(Object.entries(e.classGroups), r);
  return s.forEach(function(c) {
    var l = c[0], u = c[1];
    Yc(u, i, l, n);
  }), i;
}
function Yc(e, n, r, i) {
  e.forEach(function(s) {
    if (typeof s == "string") {
      var c = s === "" ? n : Df(n, s);
      c.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (Xx(s)) {
        Yc(s(i), n, r, i);
        return;
      }
      n.validators.push({
        validator: s,
        classGroupId: r
      });
      return;
    }
    Object.entries(s).forEach(function(l) {
      var u = l[0], d = l[1];
      Yc(d, Df(n, u), r, i);
    });
  });
}
function Df(e, n) {
  var r = e;
  return n.split(ml).forEach(function(i) {
    r.nextPart.has(i) || r.nextPart.set(i, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(i);
  }), r;
}
function Xx(e) {
  return e.isThemeGetter;
}
function jx(e, n) {
  return n ? e.map(function(r) {
    var i = r[0], s = r[1], c = s.map(function(l) {
      return typeof l == "string" ? n + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(function(u) {
        var d = u[0], h = u[1];
        return [n + d, h];
      })) : l;
    });
    return [i, c];
  }) : e;
}
function Jx(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var n = 0, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  function s(c, l) {
    r.set(c, l), n++, n > e && (n = 0, i = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get: function(l) {
      var u = r.get(l);
      if (u !== void 0)
        return u;
      if ((u = i.get(l)) !== void 0)
        return s(l, u), u;
    },
    set: function(l, u) {
      r.has(l) ? r.set(l, u) : s(l, u);
    }
  };
}
var zh = "!";
function Qx(e) {
  var n = e.separator || ":", r = n.length === 1, i = n[0], s = n.length;
  return function(l) {
    for (var u = [], d = 0, h = 0, v, g = 0; g < l.length; g++) {
      var b = l[g];
      if (d === 0) {
        if (b === i && (r || l.slice(g, g + s) === n)) {
          u.push(l.slice(h, g)), h = g + s;
          continue;
        }
        if (b === "/") {
          v = g;
          continue;
        }
      }
      b === "[" ? d++ : b === "]" && d--;
    }
    var m = u.length === 0 ? l : l.substring(h), C = m.startsWith(zh), p = C ? m.substring(1) : m, y = v && v > h ? v - h : void 0;
    return {
      modifiers: u,
      hasImportantModifier: C,
      baseClassName: p,
      maybePostfixModifierPosition: y
    };
  };
}
function e2(e) {
  if (e.length <= 1)
    return e;
  var n = [], r = [];
  return e.forEach(function(i) {
    var s = i[0] === "[";
    s ? (n.push.apply(n, r.sort().concat([i])), r = []) : r.push(i);
  }), n.push.apply(n, r.sort()), n;
}
function t2(e) {
  return {
    cache: Jx(e.cacheSize),
    splitModifiers: Qx(e),
    ...Yx(e)
  };
}
var n2 = /\s+/;
function r2(e, n) {
  var r = n.splitModifiers, i = n.getClassGroupId, s = n.getConflictingClassGroupIds, c = /* @__PURE__ */ new Set();
  return e.trim().split(n2).map(function(l) {
    var u = r(l), d = u.modifiers, h = u.hasImportantModifier, v = u.baseClassName, g = u.maybePostfixModifierPosition, b = i(g ? v.substring(0, g) : v), m = !!g;
    if (!b) {
      if (!g)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      if (b = i(v), !b)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      m = !1;
    }
    var C = e2(d).join(":"), p = h ? C + zh : C;
    return {
      isTailwindClass: !0,
      modifierId: p,
      classGroupId: b,
      originalClassName: l,
      hasPostfixModifier: m
    };
  }).reverse().filter(function(l) {
    if (!l.isTailwindClass)
      return !0;
    var u = l.modifierId, d = l.classGroupId, h = l.hasPostfixModifier, v = u + d;
    return c.has(v) ? !1 : (c.add(v), s(d, h).forEach(function(g) {
      return c.add(u + g);
    }), !0);
  }).reverse().map(function(l) {
    return l.originalClassName;
  }).join(" ");
}
function o2() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  var i, s, c, l = u;
  function u(h) {
    var v = n[0], g = n.slice(1), b = g.reduce(function(m, C) {
      return C(m);
    }, v());
    return i = t2(b), s = i.cache.get, c = i.cache.set, l = d, d(h);
  }
  function d(h) {
    var v = s(h);
    if (v)
      return v;
    var g = r2(h, i);
    return c(h, g), g;
  }
  return function() {
    return l(Kx.apply(null, arguments));
  };
}
function Je(e) {
  var n = function(i) {
    return i[e] || [];
  };
  return n.isThemeGetter = !0, n;
}
var Hh = /^\[(?:([a-z-]+):)?(.+)\]$/i, i2 = /^\d+\/\d+$/, s2 = /* @__PURE__ */ new Set(["px", "full", "screen"]), a2 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, c2 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, l2 = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function xn(e) {
  return Ar(e) || s2.has(e) || i2.test(e) || qc(e);
}
function qc(e) {
  return Mr(e, "length", g2);
}
function u2(e) {
  return Mr(e, "size", Vh);
}
function d2(e) {
  return Mr(e, "position", Vh);
}
function f2(e) {
  return Mr(e, "url", v2);
}
function ps(e) {
  return Mr(e, "number", Ar);
}
function Ar(e) {
  return !Number.isNaN(Number(e));
}
function h2(e) {
  return e.endsWith("%") && Ar(e.slice(0, -1));
}
function Bo(e) {
  return _f(e) || Mr(e, "number", _f);
}
function _e(e) {
  return Hh.test(e);
}
function Uo() {
  return !0;
}
function cr(e) {
  return a2.test(e);
}
function p2(e) {
  return Mr(e, "", m2);
}
function Mr(e, n, r) {
  var i = Hh.exec(e);
  return i ? i[1] ? i[1] === n : r(i[2]) : !1;
}
function g2(e) {
  return c2.test(e);
}
function Vh() {
  return !1;
}
function v2(e) {
  return e.startsWith("url(");
}
function _f(e) {
  return Number.isInteger(Number(e));
}
function m2(e) {
  return l2.test(e);
}
function w2() {
  var e = Je("colors"), n = Je("spacing"), r = Je("blur"), i = Je("brightness"), s = Je("borderColor"), c = Je("borderRadius"), l = Je("borderSpacing"), u = Je("borderWidth"), d = Je("contrast"), h = Je("grayscale"), v = Je("hueRotate"), g = Je("invert"), b = Je("gap"), m = Je("gradientColorStops"), C = Je("gradientColorStopPositions"), p = Je("inset"), y = Je("margin"), x = Je("opacity"), D = Je("padding"), N = Je("saturate"), E = Je("scale"), O = Je("sepia"), T = Je("skew"), R = Je("space"), I = Je("translate"), W = function() {
    return ["auto", "contain", "none"];
  }, K = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, j = function() {
    return ["auto", _e, n];
  }, X = function() {
    return [_e, n];
  }, ae = function() {
    return ["", xn];
  }, Z = function() {
    return ["auto", Ar, _e];
  }, ne = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, oe = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, ue = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, ve = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, V = function() {
    return ["", "0", _e];
  }, ee = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, te = function() {
    return [Ar, ps];
  }, re = function() {
    return [Ar, _e];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Uo],
      spacing: [xn],
      blur: ["none", "", cr, _e],
      brightness: te(),
      borderColor: [e],
      borderRadius: ["none", "", "full", cr, _e],
      borderSpacing: X(),
      borderWidth: ae(),
      contrast: te(),
      grayscale: V(),
      hueRotate: re(),
      invert: V(),
      gap: X(),
      gradientColorStops: [e],
      gradientColorStopPositions: [h2, qc],
      inset: j(),
      margin: j(),
      opacity: te(),
      padding: X(),
      saturate: te(),
      scale: te(),
      sepia: V(),
      skew: re(),
      space: X(),
      translate: X()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", _e]
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
        columns: [cr]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ee()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ee()
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
        object: [].concat(ne(), [_e])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: K()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": K()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": K()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: W()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": W()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": W()
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
        inset: [p]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [p]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [p]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [p]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [p]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [p]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [p]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [p]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [p]
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
        z: ["auto", Bo]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: j()
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
        flex: ["1", "auto", "initial", "none", _e]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: V()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: V()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Bo]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Uo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Bo]
        }, _e]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Z()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Uo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Bo]
        }, _e]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Z()
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
        "auto-cols": ["auto", "min", "max", "fr", _e]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", _e]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [b]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [b]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [b]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(ve())
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
        content: ["normal"].concat(ve(), ["baseline"])
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
        "place-content": [].concat(ve(), ["baseline"])
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
        p: [D]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [D]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [D]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [D]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [D]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [D]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [D]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [D]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [D]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [y]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [y]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [y]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [y]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [y]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [y]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [y]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [y]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [y]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [R]
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
        "space-y": [R]
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
        w: ["auto", "min", "max", "fit", _e, n]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", _e, xn]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [cr]
        }, cr, _e]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [_e, n, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", _e, xn]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [_e, n, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", cr, qc]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ps]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Uo]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", _e]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ar, ps]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", _e, xn]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", _e]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", _e]
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
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [x]
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
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [x]
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
        decoration: [].concat(oe(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", xn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", _e, xn]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
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
        indent: X()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", _e]
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
        content: ["none", _e]
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
        "bg-opacity": [x]
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
        bg: [].concat(ne(), [d2])
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
        bg: ["auto", "cover", "contain", u2]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, f2]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [C]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [C]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [C]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [m]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [m]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [c]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [c]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [c]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [c]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [c]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [c]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [c]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [c]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [c]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [c]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [c]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [c]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [c]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [c]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [c]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [u]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [u]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [u]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [u]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [u]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [u]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [u]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [u]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [u]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [x]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(oe(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [u]
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
        "divide-y": [u]
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
        "divide-opacity": [x]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: oe()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [s]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [s]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [s]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [s]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [s]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [s]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [s]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [s]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(oe())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [_e, xn]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [xn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: ae()
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
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [x]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [xn]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", cr, p2]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Uo]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [x]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": ue()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ue()
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
        brightness: [i]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [d]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", cr, _e]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [h]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [v]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [g]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [N]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [O]
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
        "backdrop-brightness": [i]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [d]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [h]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [v]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [g]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [x]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [N]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [O]
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
        "border-spacing": [l]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [l]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [l]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", _e]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: re()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", _e]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: re()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", _e]
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
        scale: [E]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [E]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [E]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Bo, _e]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [I]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [I]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [T]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [T]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", _e]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", _e]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
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
        "scroll-m": X()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": X()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": X()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": X()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": X()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": X()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": X()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": X()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": X()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": X()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": X()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": X()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": X()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": X()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": X()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": X()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": X()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": X()
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
        "will-change": ["auto", "scroll", "contents", "transform", _e]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [xn, ps]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
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
var b2 = /* @__PURE__ */ o2(w2);
function Ye(...e) {
  return b2(Wh(e));
}
const y2 = vl(
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
), Se = M.forwardRef(
  ({ className: e, variant: n, size: r, asChild: i = !1, ...s }, c) => /* @__PURE__ */ _(
    i ? gr : "button",
    {
      className: Ye(y2({ variant: n, size: r, className: e })),
      ref: c,
      ...s
    }
  )
);
Se.displayName = "Button";
var x2 = {
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
const C2 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), $2 = (e, n) => {
  const r = le(
    ({ color: i = "currentColor", size: s = 24, strokeWidth: c = 2, absoluteStrokeWidth: l, children: u, ...d }, h) => U(
      "svg",
      {
        ref: h,
        ...x2,
        width: s,
        height: s,
        stroke: i,
        strokeWidth: l ? Number(c) * 24 / Number(s) : c,
        className: `lucide lucide-${C2(e)}`,
        ...d
      },
      [
        ...n.map(([v, g]) => U(v, g)),
        ...(Array.isArray(u) ? u : [u]) || []
      ]
    )
  );
  return r.displayName = `${e}`, r;
};
var dt = $2;
const N2 = dt("Boxes", [
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
]), Vn = dt("BrainCircuit", [
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
]), S2 = dt("Check", [
  ["polyline", { points: "20 6 9 17 4 12", key: "10jjfj" }]
]), Gh = dt("ChevronDownCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m16 10-4 4-4-4", key: "894hmk" }]
]), E2 = dt("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]), Kh = dt("ChevronRightCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m10 8 4 4-4 4", key: "1wy4r4" }]
]), D2 = dt("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), Pf = dt("CircleEllipsis", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M17 12h.01", key: "1m0b6t" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M7 12h.01", key: "eqddd0" }]
]), _2 = dt("Dices", [
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
]), P2 = dt("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  [
    "path",
    { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }
  ]
]), O2 = dt("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]), Yh = dt("FileText", [
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
]), R2 = dt("Merge", [
  ["path", { d: "m8 6 4-4 4 4", key: "ybng9g" }],
  ["path", { d: "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22", key: "1hyw0i" }],
  ["path", { d: "m20 22-5-5", key: "1m27yz" }]
]), A2 = dt("PenSquare", [
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
]), T2 = dt("PlusCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
]), qh = dt("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]), I2 = dt("Timer", [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
]), Zh = dt("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]), Xh = dt("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]), k2 = dt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function ut(e, n, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(s) {
    if (e == null || e(s), r === !1 || !s.defaultPrevented)
      return n == null ? void 0 : n(s);
  };
}
function ci(e, n = []) {
  let r = [];
  function i(c, l) {
    const u = /* @__PURE__ */ jt(l), d = r.length;
    r = [
      ...r,
      l
    ];
    function h(g) {
      const { scope: b, children: m, ...C } = g, p = (b == null ? void 0 : b[e][d]) || u, y = We(
        () => C,
        Object.values(C)
      );
      return /* @__PURE__ */ U(p.Provider, {
        value: y
      }, m);
    }
    function v(g, b) {
      const m = (b == null ? void 0 : b[e][d]) || u, C = En(m);
      if (C)
        return C;
      if (l !== void 0)
        return l;
      throw new Error(`\`${g}\` must be used within \`${c}\``);
    }
    return h.displayName = c + "Provider", [
      h,
      v
    ];
  }
  const s = () => {
    const c = r.map((l) => /* @__PURE__ */ jt(l));
    return function(u) {
      const d = (u == null ? void 0 : u[e]) || c;
      return We(
        () => ({
          [`__scope${e}`]: {
            ...u,
            [e]: d
          }
        }),
        [
          u,
          d
        ]
      );
    };
  };
  return s.scopeName = e, [
    i,
    M2(s, ...n)
  ];
}
function M2(...e) {
  const n = e[0];
  if (e.length === 1)
    return n;
  const r = () => {
    const i = e.map(
      (s) => ({
        useScope: s(),
        scopeName: s.scopeName
      })
    );
    return function(c) {
      const l = i.reduce((u, { useScope: d, scopeName: h }) => {
        const g = d(c)[`__scope${h}`];
        return {
          ...u,
          ...g
        };
      }, {});
      return We(
        () => ({
          [`__scope${n.scopeName}`]: l
        }),
        [
          l
        ]
      );
    };
  };
  return r.scopeName = n.scopeName, r;
}
const uo = globalThis != null && globalThis.document ? Vs : () => {
}, L2 = M["useId".toString()] || (() => {
});
let F2 = 0;
function Ds(e) {
  const [n, r] = M.useState(L2());
  return uo(() => {
    e || r(
      (i) => i ?? String(F2++)
    );
  }, [
    e
  ]), e || (n ? `radix-${n}` : "");
}
function un(e) {
  const n = J(e);
  return se(() => {
    n.current = e;
  }), We(
    () => (...r) => {
      var i;
      return (i = n.current) === null || i === void 0 ? void 0 : i.call(n, ...r);
    },
    []
  );
}
function wl({ prop: e, defaultProp: n, onChange: r = () => {
} }) {
  const [i, s] = W2({
    defaultProp: n,
    onChange: r
  }), c = e !== void 0, l = c ? e : i, u = un(r), d = He((h) => {
    if (c) {
      const g = typeof h == "function" ? h(e) : h;
      g !== e && u(g);
    } else
      s(h);
  }, [
    c,
    e,
    s,
    u
  ]);
  return [
    l,
    d
  ];
}
function W2({ defaultProp: e, onChange: n }) {
  const r = me(e), [i] = r, s = J(i), c = un(n);
  return se(() => {
    s.current !== i && (c(i), s.current = i);
  }, [
    i,
    s,
    c
  ]), r;
}
const B2 = [
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
], $t = B2.reduce((e, n) => {
  const r = /* @__PURE__ */ le((i, s) => {
    const { asChild: c, ...l } = i, u = c ? gr : n;
    return se(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ U(u, fe({}, l, {
      ref: s
    }));
  });
  return r.displayName = `Primitive.${n}`, {
    ...e,
    [n]: r
  };
}, {});
function jh(e, n) {
  e && Gs(
    () => e.dispatchEvent(n)
  );
}
function Jh(e, n = globalThis == null ? void 0 : globalThis.document) {
  const r = un(e);
  se(() => {
    const i = (s) => {
      s.key === "Escape" && r(s);
    };
    return n.addEventListener("keydown", i), () => n.removeEventListener("keydown", i);
  }, [
    r,
    n
  ]);
}
const Zc = "dismissableLayer.update", U2 = "dismissableLayer.pointerDownOutside", z2 = "dismissableLayer.focusOutside";
let Of;
const H2 = /* @__PURE__ */ jt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), V2 = /* @__PURE__ */ le((e, n) => {
  var r;
  const { disableOutsidePointerEvents: i = !1, onEscapeKeyDown: s, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, onDismiss: d, ...h } = e, v = En(H2), [g, b] = me(null), m = (r = g == null ? void 0 : g.ownerDocument) !== null && r !== void 0 ? r : globalThis == null ? void 0 : globalThis.document, [, C] = me({}), p = mt(
    n,
    (I) => b(I)
  ), y = Array.from(v.layers), [x] = [
    ...v.layersWithOutsidePointerEventsDisabled
  ].slice(-1), D = y.indexOf(x), N = g ? y.indexOf(g) : -1, E = v.layersWithOutsidePointerEventsDisabled.size > 0, O = N >= D, T = G2((I) => {
    const W = I.target, K = [
      ...v.branches
    ].some(
      (j) => j.contains(W)
    );
    !O || K || (c == null || c(I), u == null || u(I), I.defaultPrevented || d == null || d());
  }, m), R = K2((I) => {
    const W = I.target;
    [
      ...v.branches
    ].some(
      (j) => j.contains(W)
    ) || (l == null || l(I), u == null || u(I), I.defaultPrevented || d == null || d());
  }, m);
  return Jh((I) => {
    N === v.layers.size - 1 && (s == null || s(I), !I.defaultPrevented && d && (I.preventDefault(), d()));
  }, m), se(() => {
    if (g)
      return i && (v.layersWithOutsidePointerEventsDisabled.size === 0 && (Of = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), v.layersWithOutsidePointerEventsDisabled.add(g)), v.layers.add(g), Rf(), () => {
        i && v.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Of);
      };
  }, [
    g,
    m,
    i,
    v
  ]), se(() => () => {
    g && (v.layers.delete(g), v.layersWithOutsidePointerEventsDisabled.delete(g), Rf());
  }, [
    g,
    v
  ]), se(() => {
    const I = () => C({});
    return document.addEventListener(Zc, I), () => document.removeEventListener(Zc, I);
  }, []), /* @__PURE__ */ U($t.div, fe({}, h, {
    ref: p,
    style: {
      pointerEvents: E ? O ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: ut(e.onFocusCapture, R.onFocusCapture),
    onBlurCapture: ut(e.onBlurCapture, R.onBlurCapture),
    onPointerDownCapture: ut(e.onPointerDownCapture, T.onPointerDownCapture)
  }));
});
function G2(e, n = globalThis == null ? void 0 : globalThis.document) {
  const r = un(e), i = J(!1), s = J(() => {
  });
  return se(() => {
    const c = (u) => {
      if (u.target && !i.current) {
        let h = function() {
          Qh(U2, r, d, {
            discrete: !0
          });
        };
        const d = {
          originalEvent: u
        };
        u.pointerType === "touch" ? (n.removeEventListener("click", s.current), s.current = h, n.addEventListener("click", s.current, {
          once: !0
        })) : h();
      }
      i.current = !1;
    }, l = window.setTimeout(() => {
      n.addEventListener("pointerdown", c);
    }, 0);
    return () => {
      window.clearTimeout(l), n.removeEventListener("pointerdown", c), n.removeEventListener("click", s.current);
    };
  }, [
    n,
    r
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => i.current = !0
  };
}
function K2(e, n = globalThis == null ? void 0 : globalThis.document) {
  const r = un(e), i = J(!1);
  return se(() => {
    const s = (c) => {
      c.target && !i.current && Qh(z2, r, {
        originalEvent: c
      }, {
        discrete: !1
      });
    };
    return n.addEventListener("focusin", s), () => n.removeEventListener("focusin", s);
  }, [
    n,
    r
  ]), {
    onFocusCapture: () => i.current = !0,
    onBlurCapture: () => i.current = !1
  };
}
function Rf() {
  const e = new CustomEvent(Zc);
  document.dispatchEvent(e);
}
function Qh(e, n, r, { discrete: i }) {
  const s = r.originalEvent.target, c = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: r
  });
  n && s.addEventListener(e, n, {
    once: !0
  }), i ? jh(s, c) : s.dispatchEvent(c);
}
const xc = "focusScope.autoFocusOnMount", Cc = "focusScope.autoFocusOnUnmount", Af = {
  bubbles: !1,
  cancelable: !0
}, Y2 = /* @__PURE__ */ le((e, n) => {
  const { loop: r = !1, trapped: i = !1, onMountAutoFocus: s, onUnmountAutoFocus: c, ...l } = e, [u, d] = me(null), h = un(s), v = un(c), g = J(null), b = mt(
    n,
    (p) => d(p)
  ), m = J({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  se(() => {
    if (i) {
      let p = function(N) {
        if (m.paused || !u)
          return;
        const E = N.target;
        u.contains(E) ? g.current = E : ur(g.current, {
          select: !0
        });
      }, y = function(N) {
        if (m.paused || !u)
          return;
        const E = N.relatedTarget;
        E !== null && (u.contains(E) || ur(g.current, {
          select: !0
        }));
      }, x = function(N) {
        const E = document.activeElement;
        for (const O of N)
          O.removedNodes.length > 0 && (u != null && u.contains(E) || ur(u));
      };
      document.addEventListener("focusin", p), document.addEventListener("focusout", y);
      const D = new MutationObserver(x);
      return u && D.observe(u, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", y), D.disconnect();
      };
    }
  }, [
    i,
    u,
    m.paused
  ]), se(() => {
    if (u) {
      If.add(m);
      const p = document.activeElement;
      if (!u.contains(p)) {
        const x = new CustomEvent(xc, Af);
        u.addEventListener(xc, h), u.dispatchEvent(x), x.defaultPrevented || (q2(Q2(ep(u)), {
          select: !0
        }), document.activeElement === p && ur(u));
      }
      return () => {
        u.removeEventListener(xc, h), setTimeout(() => {
          const x = new CustomEvent(Cc, Af);
          u.addEventListener(Cc, v), u.dispatchEvent(x), x.defaultPrevented || ur(p ?? document.body, {
            select: !0
          }), u.removeEventListener(Cc, v), If.remove(m);
        }, 0);
      };
    }
  }, [
    u,
    h,
    v,
    m
  ]);
  const C = He((p) => {
    if (!r && !i || m.paused)
      return;
    const y = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, x = document.activeElement;
    if (y && x) {
      const D = p.currentTarget, [N, E] = Z2(D);
      N && E ? !p.shiftKey && x === E ? (p.preventDefault(), r && ur(N, {
        select: !0
      })) : p.shiftKey && x === N && (p.preventDefault(), r && ur(E, {
        select: !0
      })) : x === D && p.preventDefault();
    }
  }, [
    r,
    i,
    m.paused
  ]);
  return /* @__PURE__ */ U($t.div, fe({
    tabIndex: -1
  }, l, {
    ref: b,
    onKeyDown: C
  }));
});
function q2(e, { select: n = !1 } = {}) {
  const r = document.activeElement;
  for (const i of e)
    if (ur(i, {
      select: n
    }), document.activeElement !== r)
      return;
}
function Z2(e) {
  const n = ep(e), r = Tf(n, e), i = Tf(n.reverse(), e);
  return [
    r,
    i
  ];
}
function ep(e) {
  const n = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (i) => {
      const s = i.tagName === "INPUT" && i.type === "hidden";
      return i.disabled || i.hidden || s ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); )
    n.push(r.currentNode);
  return n;
}
function Tf(e, n) {
  for (const r of e)
    if (!X2(r, {
      upTo: n
    }))
      return r;
}
function X2(e, { upTo: n }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (n !== void 0 && e === n)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function j2(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ur(e, { select: n = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== r && j2(e) && n && e.select();
  }
}
const If = J2();
function J2() {
  let e = [];
  return {
    add(n) {
      const r = e[0];
      n !== r && (r == null || r.pause()), e = kf(e, n), e.unshift(n);
    },
    remove(n) {
      var r;
      e = kf(e, n), (r = e[0]) === null || r === void 0 || r.resume();
    }
  };
}
function kf(e, n) {
  const r = [
    ...e
  ], i = r.indexOf(n);
  return i !== -1 && r.splice(i, 1), r;
}
function Q2(e) {
  return e.filter(
    (n) => n.tagName !== "A"
  );
}
const eC = /* @__PURE__ */ le((e, n) => {
  var r;
  const { container: i = globalThis == null || (r = globalThis.document) === null || r === void 0 ? void 0 : r.body, ...s } = e;
  return i ? /* @__PURE__ */ gl.createPortal(/* @__PURE__ */ U($t.div, fe({}, s, {
    ref: n
  })), i) : null;
});
function tC(e, n) {
  return pl((r, i) => {
    const s = n[r][i];
    return s ?? r;
  }, e);
}
const go = (e) => {
  const { present: n, children: r } = e, i = nC(n), s = typeof r == "function" ? r({
    present: i.isPresent
  }) : Wt.only(r), c = mt(i.ref, s.ref);
  return typeof r == "function" || i.isPresent ? /* @__PURE__ */ po(s, {
    ref: c
  }) : null;
};
go.displayName = "Presence";
function nC(e) {
  const [n, r] = me(), i = J({}), s = J(e), c = J("none"), l = e ? "mounted" : "unmounted", [u, d] = tC(l, {
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
  return se(() => {
    const h = gs(i.current);
    c.current = u === "mounted" ? h : "none";
  }, [
    u
  ]), uo(() => {
    const h = i.current, v = s.current;
    if (v !== e) {
      const b = c.current, m = gs(h);
      e ? d("MOUNT") : m === "none" || (h == null ? void 0 : h.display) === "none" ? d("UNMOUNT") : d(v && b !== m ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [
    e,
    d
  ]), uo(() => {
    if (n) {
      const h = (g) => {
        const m = gs(i.current).includes(g.animationName);
        g.target === n && m && Gs(
          () => d("ANIMATION_END")
        );
      }, v = (g) => {
        g.target === n && (c.current = gs(i.current));
      };
      return n.addEventListener("animationstart", v), n.addEventListener("animationcancel", h), n.addEventListener("animationend", h), () => {
        n.removeEventListener("animationstart", v), n.removeEventListener("animationcancel", h), n.removeEventListener("animationend", h);
      };
    } else
      d("ANIMATION_END");
  }, [
    n,
    d
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(u),
    ref: He((h) => {
      h && (i.current = getComputedStyle(h)), r(h);
    }, [])
  };
}
function gs(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let $c = 0;
function tp() {
  se(() => {
    var e, n;
    const r = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = r[0]) !== null && e !== void 0 ? e : Mf()), document.body.insertAdjacentElement("beforeend", (n = r[1]) !== null && n !== void 0 ? n : Mf()), $c++, () => {
      $c === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (i) => i.remove()
      ), $c--;
    };
  }, []);
}
function Mf() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var Dt = function() {
  return Dt = Object.assign || function(n) {
    for (var r, i = 1, s = arguments.length; i < s; i++) {
      r = arguments[i];
      for (var c in r)
        Object.prototype.hasOwnProperty.call(r, c) && (n[c] = r[c]);
    }
    return n;
  }, Dt.apply(this, arguments);
};
function bl(e, n) {
  var r = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0 && (r[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, i = Object.getOwnPropertySymbols(e); s < i.length; s++)
      n.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[s]) && (r[i[s]] = e[i[s]]);
  return r;
}
function np(e, n, r) {
  if (r || arguments.length === 2)
    for (var i = 0, s = n.length, c; i < s; i++)
      (c || !(i in n)) && (c || (c = Array.prototype.slice.call(n, 0, i)), c[i] = n[i]);
  return e.concat(c || Array.prototype.slice.call(n));
}
var qo = "right-scroll-bar-position", Zo = "width-before-scroll-bar", rC = "with-scroll-bars-hidden", oC = "--removed-body-scroll-bar-size";
function iC(e, n) {
  return typeof e == "function" ? e(n) : e && (e.current = n), e;
}
function sC(e, n) {
  var r = me(function() {
    return {
      // value
      value: e,
      // last callback
      callback: n,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(i) {
          var s = r.value;
          s !== i && (r.value = i, r.callback(i, s));
        }
      }
    };
  })[0];
  return r.callback = n, r.facade;
}
function rp(e, n) {
  return sC(n || null, function(r) {
    return e.forEach(function(i) {
      return iC(i, r);
    });
  });
}
function aC(e) {
  return e;
}
function cC(e, n) {
  n === void 0 && (n = aC);
  var r = [], i = !1, s = {
    read: function() {
      if (i)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(c) {
      var l = n(c, i);
      return r.push(l), function() {
        r = r.filter(function(u) {
          return u !== l;
        });
      };
    },
    assignSyncMedium: function(c) {
      for (i = !0; r.length; ) {
        var l = r;
        r = [], l.forEach(c);
      }
      r = {
        push: function(u) {
          return c(u);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(c) {
      i = !0;
      var l = [];
      if (r.length) {
        var u = r;
        r = [], u.forEach(c), l = r;
      }
      var d = function() {
        var v = l;
        l = [], v.forEach(c);
      }, h = function() {
        return Promise.resolve().then(d);
      };
      h(), r = {
        push: function(v) {
          l.push(v), h();
        },
        filter: function(v) {
          return l = l.filter(v), r;
        }
      };
    }
  };
  return s;
}
function op(e) {
  e === void 0 && (e = {});
  var n = cC(null);
  return n.options = Dt({ async: !0, ssr: !1 }, e), n;
}
var ip = function(e) {
  var n = e.sideCar, r = bl(e, ["sideCar"]);
  if (!n)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var i = n.read();
  if (!i)
    throw new Error("Sidecar medium not found");
  return M.createElement(i, Dt({}, r));
};
ip.isSideCarExport = !0;
function sp(e, n) {
  return e.useMedium(n), ip;
}
var ap = op(), Nc = function() {
}, qs = M.forwardRef(function(e, n) {
  var r = M.useRef(null), i = M.useState({
    onScrollCapture: Nc,
    onWheelCapture: Nc,
    onTouchMoveCapture: Nc
  }), s = i[0], c = i[1], l = e.forwardProps, u = e.children, d = e.className, h = e.removeScrollBar, v = e.enabled, g = e.shards, b = e.sideCar, m = e.noIsolation, C = e.inert, p = e.allowPinchZoom, y = e.as, x = y === void 0 ? "div" : y, D = bl(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), N = b, E = rp([r, n]), O = Dt(Dt({}, D), s);
  return M.createElement(
    M.Fragment,
    null,
    v && M.createElement(N, { sideCar: ap, removeScrollBar: h, shards: g, noIsolation: m, inert: C, setCallbacks: c, allowPinchZoom: !!p, lockRef: r }),
    l ? M.cloneElement(M.Children.only(u), Dt(Dt({}, O), { ref: E })) : M.createElement(x, Dt({}, O, { className: d, ref: E }), u)
  );
});
qs.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
qs.classNames = {
  fullWidth: Zo,
  zeroRight: qo
};
var Lf, lC = function() {
  if (Lf)
    return Lf;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function uC() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var n = lC();
  return n && e.setAttribute("nonce", n), e;
}
function dC(e, n) {
  e.styleSheet ? e.styleSheet.cssText = n : e.appendChild(document.createTextNode(n));
}
function fC(e) {
  var n = document.head || document.getElementsByTagName("head")[0];
  n.appendChild(e);
}
var hC = function() {
  var e = 0, n = null;
  return {
    add: function(r) {
      e == 0 && (n = uC()) && (dC(n, r), fC(n)), e++;
    },
    remove: function() {
      e--, !e && n && (n.parentNode && n.parentNode.removeChild(n), n = null);
    }
  };
}, pC = function() {
  var e = hC();
  return function(n, r) {
    M.useEffect(function() {
      return e.add(n), function() {
        e.remove();
      };
    }, [n && r]);
  };
}, yl = function() {
  var e = pC(), n = function(r) {
    var i = r.styles, s = r.dynamic;
    return e(i, s), null;
  };
  return n;
}, gC = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Sc = function(e) {
  return parseInt(e || "", 10) || 0;
}, vC = function(e) {
  var n = window.getComputedStyle(document.body), r = n[e === "padding" ? "paddingLeft" : "marginLeft"], i = n[e === "padding" ? "paddingTop" : "marginTop"], s = n[e === "padding" ? "paddingRight" : "marginRight"];
  return [Sc(r), Sc(i), Sc(s)];
}, mC = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return gC;
  var n = vC(e), r = document.documentElement.clientWidth, i = window.innerWidth;
  return {
    left: n[0],
    top: n[1],
    right: n[2],
    gap: Math.max(0, i - r + n[2] - n[0])
  };
}, wC = yl(), bC = function(e, n, r, i) {
  var s = e.left, c = e.top, l = e.right, u = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(rC, ` {
   overflow: hidden `).concat(i, `;
   padding-right: `).concat(u, "px ").concat(i, `;
  }
  body {
    overflow: hidden `).concat(i, `;
    overscroll-behavior: contain;
    `).concat([
    n && "position: relative ".concat(i, ";"),
    r === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(c, `px;
    padding-right: `).concat(l, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(u, "px ").concat(i, `;
    `),
    r === "padding" && "padding-right: ".concat(u, "px ").concat(i, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(qo, ` {
    right: `).concat(u, "px ").concat(i, `;
  }
  
  .`).concat(Zo, ` {
    margin-right: `).concat(u, "px ").concat(i, `;
  }
  
  .`).concat(qo, " .").concat(qo, ` {
    right: 0 `).concat(i, `;
  }
  
  .`).concat(Zo, " .").concat(Zo, ` {
    margin-right: 0 `).concat(i, `;
  }
  
  body {
    `).concat(oC, ": ").concat(u, `px;
  }
`);
}, cp = function(e) {
  var n = e.noRelative, r = e.noImportant, i = e.gapMode, s = i === void 0 ? "margin" : i, c = M.useMemo(function() {
    return mC(s);
  }, [s]);
  return M.createElement(wC, { styles: bC(c, !n, s, r ? "" : "!important") });
}, Xc = !1;
if (typeof window < "u")
  try {
    var vs = Object.defineProperty({}, "passive", {
      get: function() {
        return Xc = !0, !0;
      }
    });
    window.addEventListener("test", vs, vs), window.removeEventListener("test", vs, vs);
  } catch {
    Xc = !1;
  }
var eo = Xc ? { passive: !1 } : !1, yC = function(e) {
  return e.tagName === "TEXTAREA";
}, lp = function(e, n) {
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[n] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !yC(e) && r[n] === "visible")
  );
}, xC = function(e) {
  return lp(e, "overflowY");
}, CC = function(e) {
  return lp(e, "overflowX");
}, Ff = function(e, n) {
  var r = n;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var i = up(e, r);
    if (i) {
      var s = dp(e, r), c = s[1], l = s[2];
      if (c > l)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== document.body);
  return !1;
}, $C = function(e) {
  var n = e.scrollTop, r = e.scrollHeight, i = e.clientHeight;
  return [
    n,
    r,
    i
  ];
}, NC = function(e) {
  var n = e.scrollLeft, r = e.scrollWidth, i = e.clientWidth;
  return [
    n,
    r,
    i
  ];
}, up = function(e, n) {
  return e === "v" ? xC(n) : CC(n);
}, dp = function(e, n) {
  return e === "v" ? $C(n) : NC(n);
}, SC = function(e, n) {
  return e === "h" && n === "rtl" ? -1 : 1;
}, EC = function(e, n, r, i, s) {
  var c = SC(e, window.getComputedStyle(n).direction), l = c * i, u = r.target, d = n.contains(u), h = !1, v = l > 0, g = 0, b = 0;
  do {
    var m = dp(e, u), C = m[0], p = m[1], y = m[2], x = p - y - c * C;
    (C || x) && up(e, u) && (g += x, b += C), u = u.parentNode;
  } while (
    // portaled content
    !d && u !== document.body || // self content
    d && (n.contains(u) || n === u)
  );
  return (v && (s && g === 0 || !s && l > g) || !v && (s && b === 0 || !s && -l > b)) && (h = !0), h;
}, ms = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Wf = function(e) {
  return [e.deltaX, e.deltaY];
}, Bf = function(e) {
  return e && "current" in e ? e.current : e;
}, DC = function(e, n) {
  return e[0] === n[0] && e[1] === n[1];
}, _C = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, PC = 0, to = [];
function OC(e) {
  var n = M.useRef([]), r = M.useRef([0, 0]), i = M.useRef(), s = M.useState(PC++)[0], c = M.useState(function() {
    return yl();
  })[0], l = M.useRef(e);
  M.useEffect(function() {
    l.current = e;
  }, [e]), M.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var p = np([e.lockRef.current], (e.shards || []).map(Bf), !0).filter(Boolean);
      return p.forEach(function(y) {
        return y.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), p.forEach(function(y) {
          return y.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var u = M.useCallback(function(p, y) {
    if ("touches" in p && p.touches.length === 2)
      return !l.current.allowPinchZoom;
    var x = ms(p), D = r.current, N = "deltaX" in p ? p.deltaX : D[0] - x[0], E = "deltaY" in p ? p.deltaY : D[1] - x[1], O, T = p.target, R = Math.abs(N) > Math.abs(E) ? "h" : "v";
    if ("touches" in p && R === "h" && T.type === "range")
      return !1;
    var I = Ff(R, T);
    if (!I)
      return !0;
    if (I ? O = R : (O = R === "v" ? "h" : "v", I = Ff(R, T)), !I)
      return !1;
    if (!i.current && "changedTouches" in p && (N || E) && (i.current = O), !O)
      return !0;
    var W = i.current || O;
    return EC(W, y, p, W === "h" ? N : E, !0);
  }, []), d = M.useCallback(function(p) {
    var y = p;
    if (!(!to.length || to[to.length - 1] !== c)) {
      var x = "deltaY" in y ? Wf(y) : ms(y), D = n.current.filter(function(O) {
        return O.name === y.type && O.target === y.target && DC(O.delta, x);
      })[0];
      if (D && D.should) {
        y.cancelable && y.preventDefault();
        return;
      }
      if (!D) {
        var N = (l.current.shards || []).map(Bf).filter(Boolean).filter(function(O) {
          return O.contains(y.target);
        }), E = N.length > 0 ? u(y, N[0]) : !l.current.noIsolation;
        E && y.cancelable && y.preventDefault();
      }
    }
  }, []), h = M.useCallback(function(p, y, x, D) {
    var N = { name: p, delta: y, target: x, should: D };
    n.current.push(N), setTimeout(function() {
      n.current = n.current.filter(function(E) {
        return E !== N;
      });
    }, 1);
  }, []), v = M.useCallback(function(p) {
    r.current = ms(p), i.current = void 0;
  }, []), g = M.useCallback(function(p) {
    h(p.type, Wf(p), p.target, u(p, e.lockRef.current));
  }, []), b = M.useCallback(function(p) {
    h(p.type, ms(p), p.target, u(p, e.lockRef.current));
  }, []);
  M.useEffect(function() {
    return to.push(c), e.setCallbacks({
      onScrollCapture: g,
      onWheelCapture: g,
      onTouchMoveCapture: b
    }), document.addEventListener("wheel", d, eo), document.addEventListener("touchmove", d, eo), document.addEventListener("touchstart", v, eo), function() {
      to = to.filter(function(p) {
        return p !== c;
      }), document.removeEventListener("wheel", d, eo), document.removeEventListener("touchmove", d, eo), document.removeEventListener("touchstart", v, eo);
    };
  }, []);
  var m = e.removeScrollBar, C = e.inert;
  return M.createElement(
    M.Fragment,
    null,
    C ? M.createElement(c, { styles: _C(s) }) : null,
    m ? M.createElement(cp, { gapMode: "margin" }) : null
  );
}
const RC = sp(ap, OC);
var fp = M.forwardRef(function(e, n) {
  return M.createElement(qs, Dt({}, e, { ref: n, sideCar: RC }));
});
fp.classNames = qs.classNames;
const hp = fp;
var AC = function(e) {
  if (typeof document > "u")
    return null;
  var n = Array.isArray(e) ? e[0] : e;
  return n.ownerDocument.body;
}, no = /* @__PURE__ */ new WeakMap(), ws = /* @__PURE__ */ new WeakMap(), bs = {}, Ec = 0, pp = function(e) {
  return e && (e.host || pp(e.parentNode));
}, TC = function(e, n) {
  return n.map(function(r) {
    if (e.contains(r))
      return r;
    var i = pp(r);
    return i && e.contains(i) ? i : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, IC = function(e, n, r, i) {
  var s = TC(n, Array.isArray(e) ? e : [e]);
  bs[r] || (bs[r] = /* @__PURE__ */ new WeakMap());
  var c = bs[r], l = [], u = /* @__PURE__ */ new Set(), d = new Set(s), h = function(g) {
    !g || u.has(g) || (u.add(g), h(g.parentNode));
  };
  s.forEach(h);
  var v = function(g) {
    !g || d.has(g) || Array.prototype.forEach.call(g.children, function(b) {
      if (u.has(b))
        v(b);
      else {
        var m = b.getAttribute(i), C = m !== null && m !== "false", p = (no.get(b) || 0) + 1, y = (c.get(b) || 0) + 1;
        no.set(b, p), c.set(b, y), l.push(b), p === 1 && C && ws.set(b, !0), y === 1 && b.setAttribute(r, "true"), C || b.setAttribute(i, "true");
      }
    });
  };
  return v(n), u.clear(), Ec++, function() {
    l.forEach(function(g) {
      var b = no.get(g) - 1, m = c.get(g) - 1;
      no.set(g, b), c.set(g, m), b || (ws.has(g) || g.removeAttribute(i), ws.delete(g)), m || g.removeAttribute(r);
    }), Ec--, Ec || (no = /* @__PURE__ */ new WeakMap(), no = /* @__PURE__ */ new WeakMap(), ws = /* @__PURE__ */ new WeakMap(), bs = {});
  };
}, xl = function(e, n, r) {
  r === void 0 && (r = "data-aria-hidden");
  var i = Array.from(Array.isArray(e) ? e : [e]), s = n || AC(e);
  return s ? (i.push.apply(i, Array.from(s.querySelectorAll("[aria-live]"))), IC(i, s, r, "aria-hidden")) : function() {
    return null;
  };
};
const gp = "Dialog", [vp, gS] = ci(gp), [kC, On] = vp(gp), MC = (e) => {
  const { __scopeDialog: n, children: r, open: i, defaultOpen: s, onOpenChange: c, modal: l = !0 } = e, u = J(null), d = J(null), [h = !1, v] = wl({
    prop: i,
    defaultProp: s,
    onChange: c
  });
  return /* @__PURE__ */ U(kC, {
    scope: n,
    triggerRef: u,
    contentRef: d,
    contentId: Ds(),
    titleId: Ds(),
    descriptionId: Ds(),
    open: h,
    onOpenChange: v,
    onOpenToggle: He(
      () => v(
        (g) => !g
      ),
      [
        v
      ]
    ),
    modal: l
  }, r);
}, mp = "DialogPortal", [LC, wp] = vp(mp, {
  forceMount: void 0
}), FC = (e) => {
  const { __scopeDialog: n, forceMount: r, children: i, container: s } = e, c = On(mp, n);
  return /* @__PURE__ */ U(LC, {
    scope: n,
    forceMount: r
  }, Wt.map(
    i,
    (l) => /* @__PURE__ */ U(go, {
      present: r || c.open
    }, /* @__PURE__ */ U(eC, {
      asChild: !0,
      container: s
    }, l))
  ));
}, jc = "DialogOverlay", WC = /* @__PURE__ */ le((e, n) => {
  const r = wp(jc, e.__scopeDialog), { forceMount: i = r.forceMount, ...s } = e, c = On(jc, e.__scopeDialog);
  return c.modal ? /* @__PURE__ */ U(go, {
    present: i || c.open
  }, /* @__PURE__ */ U(BC, fe({}, s, {
    ref: n
  }))) : null;
}), BC = /* @__PURE__ */ le((e, n) => {
  const { __scopeDialog: r, ...i } = e, s = On(jc, r);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ U(hp, {
      as: gr,
      allowPinchZoom: !0,
      shards: [
        s.contentRef
      ]
    }, /* @__PURE__ */ U($t.div, fe({
      "data-state": yp(s.open)
    }, i, {
      ref: n,
      style: {
        pointerEvents: "auto",
        ...i.style
      }
    })))
  );
}), ti = "DialogContent", UC = /* @__PURE__ */ le((e, n) => {
  const r = wp(ti, e.__scopeDialog), { forceMount: i = r.forceMount, ...s } = e, c = On(ti, e.__scopeDialog);
  return /* @__PURE__ */ U(go, {
    present: i || c.open
  }, c.modal ? /* @__PURE__ */ U(zC, fe({}, s, {
    ref: n
  })) : /* @__PURE__ */ U(HC, fe({}, s, {
    ref: n
  })));
}), zC = /* @__PURE__ */ le((e, n) => {
  const r = On(ti, e.__scopeDialog), i = J(null), s = mt(n, r.contentRef, i);
  return se(() => {
    const c = i.current;
    if (c)
      return xl(c);
  }, []), /* @__PURE__ */ U(bp, fe({}, e, {
    ref: s,
    trapFocus: r.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: ut(e.onCloseAutoFocus, (c) => {
      var l;
      c.preventDefault(), (l = r.triggerRef.current) === null || l === void 0 || l.focus();
    }),
    onPointerDownOutside: ut(e.onPointerDownOutside, (c) => {
      const l = c.detail.originalEvent, u = l.button === 0 && l.ctrlKey === !0;
      (l.button === 2 || u) && c.preventDefault();
    }),
    onFocusOutside: ut(
      e.onFocusOutside,
      (c) => c.preventDefault()
    )
  }));
}), HC = /* @__PURE__ */ le((e, n) => {
  const r = On(ti, e.__scopeDialog), i = J(!1), s = J(!1);
  return /* @__PURE__ */ U(bp, fe({}, e, {
    ref: n,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (c) => {
      var l;
      if ((l = e.onCloseAutoFocus) === null || l === void 0 || l.call(e, c), !c.defaultPrevented) {
        var u;
        i.current || (u = r.triggerRef.current) === null || u === void 0 || u.focus(), c.preventDefault();
      }
      i.current = !1, s.current = !1;
    },
    onInteractOutside: (c) => {
      var l, u;
      (l = e.onInteractOutside) === null || l === void 0 || l.call(e, c), c.defaultPrevented || (i.current = !0, c.detail.originalEvent.type === "pointerdown" && (s.current = !0));
      const d = c.target;
      ((u = r.triggerRef.current) === null || u === void 0 ? void 0 : u.contains(d)) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && s.current && c.preventDefault();
    }
  }));
}), bp = /* @__PURE__ */ le((e, n) => {
  const { __scopeDialog: r, trapFocus: i, onOpenAutoFocus: s, onCloseAutoFocus: c, ...l } = e, u = On(ti, r), d = J(null), h = mt(n, d);
  return tp(), /* @__PURE__ */ U(Hs, null, /* @__PURE__ */ U(Y2, {
    asChild: !0,
    loop: !0,
    trapped: i,
    onMountAutoFocus: s,
    onUnmountAutoFocus: c
  }, /* @__PURE__ */ U(V2, fe({
    role: "dialog",
    id: u.contentId,
    "aria-describedby": u.descriptionId,
    "aria-labelledby": u.titleId,
    "data-state": yp(u.open)
  }, l, {
    ref: h,
    onDismiss: () => u.onOpenChange(!1)
  }))), !1);
}), VC = "DialogTitle", GC = /* @__PURE__ */ le((e, n) => {
  const { __scopeDialog: r, ...i } = e, s = On(VC, r);
  return /* @__PURE__ */ U($t.h2, fe({
    id: s.titleId
  }, i, {
    ref: n
  }));
}), KC = "DialogDescription", YC = /* @__PURE__ */ le((e, n) => {
  const { __scopeDialog: r, ...i } = e, s = On(KC, r);
  return /* @__PURE__ */ U($t.p, fe({
    id: s.descriptionId
  }, i, {
    ref: n
  }));
}), qC = "DialogClose", ZC = /* @__PURE__ */ le((e, n) => {
  const { __scopeDialog: r, ...i } = e, s = On(qC, r);
  return /* @__PURE__ */ U($t.button, fe({
    type: "button"
  }, i, {
    ref: n,
    onClick: ut(
      e.onClick,
      () => s.onOpenChange(!1)
    )
  }));
});
function yp(e) {
  return e ? "open" : "closed";
}
const XC = MC, Zs = FC, Xs = WC, js = UC, Js = GC, Qs = YC, xp = ZC, Cp = XC, $p = ({
  className: e,
  ...n
}) => /* @__PURE__ */ _(Zs, { className: Ye(e), ...n });
$p.displayName = Zs.displayName;
const Np = M.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ _(
  Xs,
  {
    className: Ye(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...n,
    ref: r
  }
));
Np.displayName = Xs.displayName;
const jC = vl(
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
), Cl = M.forwardRef(({ side: e = "right", className: n, children: r, ...i }, s) => /* @__PURE__ */ q($p, { children: [
  /* @__PURE__ */ _(Np, {}),
  /* @__PURE__ */ q(
    js,
    {
      ref: s,
      className: Ye(jC({ side: e }), n),
      ...i,
      children: [
        r,
        /* @__PURE__ */ q(xp, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ _(kh, { className: "h-4 w-4" }),
          /* @__PURE__ */ _("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Cl.displayName = js.displayName;
const $l = ({
  className: e,
  ...n
}) => /* @__PURE__ */ _(
  "div",
  {
    className: Ye(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...n
  }
);
$l.displayName = "SheetHeader";
const JC = M.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ _(
  Js,
  {
    ref: r,
    className: Ye("text-lg font-semibold text-foreground", e),
    ...n
  }
));
JC.displayName = Js.displayName;
const QC = M.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ _(
  Qs,
  {
    ref: r,
    className: Ye("text-sm text-muted-foreground", e),
    ...n
  }
));
QC.displayName = Qs.displayName;
const ea = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function vo(e) {
  const n = Object.prototype.toString.call(e);
  return n === "[object Window]" || // In Electron context the Window object serializes to [object global]
  n === "[object global]";
}
function Nl(e) {
  return "nodeType" in e;
}
function hn(e) {
  var n, r;
  return e ? vo(e) ? e : Nl(e) && (n = (r = e.ownerDocument) == null ? void 0 : r.defaultView) != null ? n : window : window;
}
function Sl(e) {
  const {
    Document: n
  } = hn(e);
  return e instanceof n;
}
function mo(e) {
  return vo(e) ? !1 : e instanceof hn(e).HTMLElement;
}
function e$(e) {
  return e instanceof hn(e).SVGElement;
}
function wo(e) {
  return e ? vo(e) ? e.document : Nl(e) ? Sl(e) ? e : mo(e) ? e.ownerDocument : document : document : document;
}
const li = ea ? Vs : se;
function t$(e) {
  const n = J(e);
  return li(() => {
    n.current = e;
  }), He(function() {
    for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
      i[s] = arguments[s];
    return n.current == null ? void 0 : n.current(...i);
  }, []);
}
function n$() {
  const e = J(null), n = He((i, s) => {
    e.current = setInterval(i, s);
  }, []), r = He(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [n, r];
}
function Os(e, n) {
  n === void 0 && (n = [e]);
  const r = J(e);
  return li(() => {
    r.current !== e && (r.current = e);
  }, n), r;
}
function ui(e, n) {
  const r = J();
  return We(
    () => {
      const i = e(r.current);
      return r.current = i, i;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...n]
  );
}
function El(e) {
  const n = t$(e), r = J(null), i = He(
    (s) => {
      s !== r.current && (n == null || n(s, r.current)), r.current = s;
    },
    //eslint-disable-next-line
    []
  );
  return [r, i];
}
let Dc = {};
function ta(e, n) {
  return We(() => {
    if (n)
      return n;
    const r = Dc[e] == null ? 0 : Dc[e] + 1;
    return Dc[e] = r, e + "-" + r;
  }, [e, n]);
}
function Sp(e) {
  return function(n) {
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
      i[s - 1] = arguments[s];
    return i.reduce((c, l) => {
      const u = Object.entries(l);
      for (const [d, h] of u) {
        const v = c[d];
        v != null && (c[d] = v + e * h);
      }
      return c;
    }, {
      ...n
    });
  };
}
const ni = /* @__PURE__ */ Sp(1), Ep = /* @__PURE__ */ Sp(-1);
function r$(e) {
  return "clientX" in e && "clientY" in e;
}
function o$(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: n
  } = hn(e.target);
  return n && e instanceof n;
}
function i$(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: n
  } = hn(e.target);
  return n && e instanceof n;
}
function Jc(e) {
  if (i$(e)) {
    if (e.touches && e.touches.length) {
      const {
        clientX: n,
        clientY: r
      } = e.touches[0];
      return {
        x: n,
        y: r
      };
    } else if (e.changedTouches && e.changedTouches.length) {
      const {
        clientX: n,
        clientY: r
      } = e.changedTouches[0];
      return {
        x: n,
        y: r
      };
    }
  }
  return r$(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const Rs = /* @__PURE__ */ Object.freeze({
  Translate: {
    toString(e) {
      if (!e)
        return;
      const {
        x: n,
        y: r
      } = e;
      return "translate3d(" + (n ? Math.round(n) : 0) + "px, " + (r ? Math.round(r) : 0) + "px, 0)";
    }
  },
  Scale: {
    toString(e) {
      if (!e)
        return;
      const {
        scaleX: n,
        scaleY: r
      } = e;
      return "scaleX(" + n + ") scaleY(" + r + ")";
    }
  },
  Transform: {
    toString(e) {
      if (e)
        return [Rs.Translate.toString(e), Rs.Scale.toString(e)].join(" ");
    }
  },
  Transition: {
    toString(e) {
      let {
        property: n,
        duration: r,
        easing: i
      } = e;
      return n + " " + r + "ms " + i;
    }
  }
});
function ao(e, n, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(s) {
    if (e == null || e(s), r === !1 || !s.defaultPrevented)
      return n == null ? void 0 : n(s);
  };
}
function s$(e, n) {
  typeof e == "function" ? e(n) : e != null && (e.current = n);
}
function Dp(...e) {
  return (n) => e.forEach(
    (r) => s$(r, n)
  );
}
function di(...e) {
  return He(Dp(...e), e);
}
function a$(e, n = []) {
  let r = [];
  function i(c, l) {
    const u = /* @__PURE__ */ jt(l), d = r.length;
    r = [
      ...r,
      l
    ];
    function h(g) {
      const { scope: b, children: m, ...C } = g, p = (b == null ? void 0 : b[e][d]) || u, y = We(
        () => C,
        Object.values(C)
      );
      return /* @__PURE__ */ U(p.Provider, {
        value: y
      }, m);
    }
    function v(g, b) {
      const m = (b == null ? void 0 : b[e][d]) || u, C = En(m);
      if (C)
        return C;
      if (l !== void 0)
        return l;
      throw new Error(`\`${g}\` must be used within \`${c}\``);
    }
    return h.displayName = c + "Provider", [
      h,
      v
    ];
  }
  const s = () => {
    const c = r.map((l) => /* @__PURE__ */ jt(l));
    return function(u) {
      const d = (u == null ? void 0 : u[e]) || c;
      return We(
        () => ({
          [`__scope${e}`]: {
            ...u,
            [e]: d
          }
        }),
        [
          u,
          d
        ]
      );
    };
  };
  return s.scopeName = e, [
    i,
    c$(s, ...n)
  ];
}
function c$(...e) {
  const n = e[0];
  if (e.length === 1)
    return n;
  const r = () => {
    const i = e.map(
      (s) => ({
        useScope: s(),
        scopeName: s.scopeName
      })
    );
    return function(c) {
      const l = i.reduce((u, { useScope: d, scopeName: h }) => {
        const g = d(c)[`__scope${h}`];
        return {
          ...u,
          ...g
        };
      }, {});
      return We(
        () => ({
          [`__scope${n.scopeName}`]: l
        }),
        [
          l
        ]
      );
    };
  };
  return r.scopeName = n.scopeName, r;
}
const Qc = globalThis != null && globalThis.document ? Vs : () => {
}, l$ = M["useId".toString()] || (() => {
});
let u$ = 0;
function _c(e) {
  const [n, r] = M.useState(l$());
  return Qc(() => {
    e || r(
      (i) => i ?? String(u$++)
    );
  }, [
    e
  ]), e || (n ? `radix-${n}` : "");
}
function Tr(e) {
  const n = J(e);
  return se(() => {
    n.current = e;
  }), We(
    () => (...r) => {
      var i;
      return (i = n.current) === null || i === void 0 ? void 0 : i.call(n, ...r);
    },
    []
  );
}
function d$({ prop: e, defaultProp: n, onChange: r = () => {
} }) {
  const [i, s] = f$({
    defaultProp: n,
    onChange: r
  }), c = e !== void 0, l = c ? e : i, u = Tr(r), d = He((h) => {
    if (c) {
      const g = typeof h == "function" ? h(e) : h;
      g !== e && u(g);
    } else
      s(h);
  }, [
    c,
    e,
    s,
    u
  ]);
  return [
    l,
    d
  ];
}
function f$({ defaultProp: e, onChange: n }) {
  const r = me(e), [i] = r, s = J(i), c = Tr(n);
  return se(() => {
    s.current !== i && (c(i), s.current = i);
  }, [
    i,
    s,
    c
  ]), r;
}
const Dl = /* @__PURE__ */ le((e, n) => {
  const { children: r, ...i } = e, s = Wt.toArray(r), c = s.find(p$);
  if (c) {
    const l = c.props.children, u = s.map((d) => d === c ? Wt.count(l) > 1 ? Wt.only(null) : /* @__PURE__ */ pr(l) ? l.props.children : null : d);
    return /* @__PURE__ */ U(el, fe({}, i, {
      ref: n
    }), /* @__PURE__ */ pr(l) ? /* @__PURE__ */ po(l, void 0, u) : null);
  }
  return /* @__PURE__ */ U(el, fe({}, i, {
    ref: n
  }), r);
});
Dl.displayName = "Slot";
const el = /* @__PURE__ */ le((e, n) => {
  const { children: r, ...i } = e;
  return /* @__PURE__ */ pr(r) ? /* @__PURE__ */ po(r, {
    ...g$(i, r.props),
    ref: Dp(n, r.ref)
  }) : Wt.count(r) > 1 ? Wt.only(null) : null;
});
el.displayName = "SlotClone";
const h$ = ({ children: e }) => /* @__PURE__ */ U(Hs, null, e);
function p$(e) {
  return /* @__PURE__ */ pr(e) && e.type === h$;
}
function g$(e, n) {
  const r = {
    ...n
  };
  for (const i in n) {
    const s = e[i], c = n[i];
    /^on[A-Z]/.test(i) ? r[i] = (...u) => {
      c == null || c(...u), s == null || s(...u);
    } : i === "style" ? r[i] = {
      ...s,
      ...c
    } : i === "className" && (r[i] = [
      s,
      c
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...r
  };
}
const v$ = [
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
], na = v$.reduce((e, n) => {
  const r = /* @__PURE__ */ le((i, s) => {
    const { asChild: c, ...l } = i, u = c ? Dl : n;
    return se(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ U(u, fe({}, l, {
      ref: s
    }));
  });
  return r.displayName = `Primitive.${n}`, {
    ...e,
    [n]: r
  };
}, {});
function m$(e, n) {
  e && Gs(
    () => e.dispatchEvent(n)
  );
}
function w$(e) {
  const n = Tr(e);
  se(() => {
    const r = (i) => {
      i.key === "Escape" && n(i);
    };
    return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r);
  }, [
    n
  ]);
}
const tl = "dismissableLayer.update", b$ = "dismissableLayer.pointerDownOutside", y$ = "dismissableLayer.focusOutside";
let Uf;
const x$ = /* @__PURE__ */ jt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), C$ = /* @__PURE__ */ le((e, n) => {
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: i, onPointerDownOutside: s, onFocusOutside: c, onInteractOutside: l, onDismiss: u, ...d } = e, h = En(x$), [v, g] = me(null), [, b] = me({}), m = di(
    n,
    (T) => g(T)
  ), C = Array.from(h.layers), [p] = [
    ...h.layersWithOutsidePointerEventsDisabled
  ].slice(-1), y = C.indexOf(p), x = v ? C.indexOf(v) : -1, D = h.layersWithOutsidePointerEventsDisabled.size > 0, N = x >= y, E = $$((T) => {
    const R = T.target, I = [
      ...h.branches
    ].some(
      (W) => W.contains(R)
    );
    !N || I || (s == null || s(T), l == null || l(T), T.defaultPrevented || u == null || u());
  }), O = N$((T) => {
    const R = T.target;
    [
      ...h.branches
    ].some(
      (W) => W.contains(R)
    ) || (c == null || c(T), l == null || l(T), T.defaultPrevented || u == null || u());
  });
  return w$((T) => {
    x === h.layers.size - 1 && (i == null || i(T), !T.defaultPrevented && u && (T.preventDefault(), u()));
  }), se(() => {
    if (v)
      return r && (h.layersWithOutsidePointerEventsDisabled.size === 0 && (Uf = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), h.layersWithOutsidePointerEventsDisabled.add(v)), h.layers.add(v), zf(), () => {
        r && h.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = Uf);
      };
  }, [
    v,
    r,
    h
  ]), se(() => () => {
    v && (h.layers.delete(v), h.layersWithOutsidePointerEventsDisabled.delete(v), zf());
  }, [
    v,
    h
  ]), se(() => {
    const T = () => b({});
    return document.addEventListener(tl, T), () => document.removeEventListener(tl, T);
  }, []), /* @__PURE__ */ U(na.div, fe({}, d, {
    ref: m,
    style: {
      pointerEvents: D ? N ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: ao(e.onFocusCapture, O.onFocusCapture),
    onBlurCapture: ao(e.onBlurCapture, O.onBlurCapture),
    onPointerDownCapture: ao(e.onPointerDownCapture, E.onPointerDownCapture)
  }));
});
function $$(e) {
  const n = Tr(e), r = J(!1), i = J(() => {
  });
  return se(() => {
    const s = (l) => {
      if (l.target && !r.current) {
        let d = function() {
          _p(b$, n, u, {
            discrete: !0
          });
        };
        const u = {
          originalEvent: l
        };
        l.pointerType === "touch" ? (document.removeEventListener("click", i.current), i.current = d, document.addEventListener("click", i.current, {
          once: !0
        })) : d();
      }
      r.current = !1;
    }, c = window.setTimeout(() => {
      document.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(c), document.removeEventListener("pointerdown", s), document.removeEventListener("click", i.current);
    };
  }, [
    n
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function N$(e) {
  const n = Tr(e), r = J(!1);
  return se(() => {
    const i = (s) => {
      s.target && !r.current && _p(y$, n, {
        originalEvent: s
      }, {
        discrete: !1
      });
    };
    return document.addEventListener("focusin", i), () => document.removeEventListener("focusin", i);
  }, [
    n
  ]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function zf() {
  const e = new CustomEvent(tl);
  document.dispatchEvent(e);
}
function _p(e, n, r, { discrete: i }) {
  const s = r.originalEvent.target, c = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: r
  });
  n && s.addEventListener(e, n, {
    once: !0
  }), i ? m$(s, c) : s.dispatchEvent(c);
}
const Pc = "focusScope.autoFocusOnMount", Oc = "focusScope.autoFocusOnUnmount", Hf = {
  bubbles: !1,
  cancelable: !0
}, S$ = /* @__PURE__ */ le((e, n) => {
  const { loop: r = !1, trapped: i = !1, onMountAutoFocus: s, onUnmountAutoFocus: c, ...l } = e, [u, d] = me(null), h = Tr(s), v = Tr(c), g = J(null), b = di(
    n,
    (p) => d(p)
  ), m = J({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  se(() => {
    if (i) {
      let p = function(x) {
        if (m.paused || !u)
          return;
        const D = x.target;
        u.contains(D) ? g.current = D : Rr(g.current, {
          select: !0
        });
      }, y = function(x) {
        m.paused || !u || u.contains(x.relatedTarget) || Rr(g.current, {
          select: !0
        });
      };
      return document.addEventListener("focusin", p), document.addEventListener("focusout", y), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", y);
      };
    }
  }, [
    i,
    u,
    m.paused
  ]), se(() => {
    if (u) {
      Gf.add(m);
      const p = document.activeElement;
      if (!u.contains(p)) {
        const x = new CustomEvent(Pc, Hf);
        u.addEventListener(Pc, h), u.dispatchEvent(x), x.defaultPrevented || (E$(R$(Pp(u)), {
          select: !0
        }), document.activeElement === p && Rr(u));
      }
      return () => {
        u.removeEventListener(Pc, h), setTimeout(() => {
          const x = new CustomEvent(Oc, Hf);
          u.addEventListener(Oc, v), u.dispatchEvent(x), x.defaultPrevented || Rr(p ?? document.body, {
            select: !0
          }), u.removeEventListener(Oc, v), Gf.remove(m);
        }, 0);
      };
    }
  }, [
    u,
    h,
    v,
    m
  ]);
  const C = He((p) => {
    if (!r && !i || m.paused)
      return;
    const y = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, x = document.activeElement;
    if (y && x) {
      const D = p.currentTarget, [N, E] = D$(D);
      N && E ? !p.shiftKey && x === E ? (p.preventDefault(), r && Rr(N, {
        select: !0
      })) : p.shiftKey && x === N && (p.preventDefault(), r && Rr(E, {
        select: !0
      })) : x === D && p.preventDefault();
    }
  }, [
    r,
    i,
    m.paused
  ]);
  return /* @__PURE__ */ U(na.div, fe({
    tabIndex: -1
  }, l, {
    ref: b,
    onKeyDown: C
  }));
});
function E$(e, { select: n = !1 } = {}) {
  const r = document.activeElement;
  for (const i of e)
    if (Rr(i, {
      select: n
    }), document.activeElement !== r)
      return;
}
function D$(e) {
  const n = Pp(e), r = Vf(n, e), i = Vf(n.reverse(), e);
  return [
    r,
    i
  ];
}
function Pp(e) {
  const n = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (i) => {
      const s = i.tagName === "INPUT" && i.type === "hidden";
      return i.disabled || i.hidden || s ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); )
    n.push(r.currentNode);
  return n;
}
function Vf(e, n) {
  for (const r of e)
    if (!_$(r, {
      upTo: n
    }))
      return r;
}
function _$(e, { upTo: n }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (n !== void 0 && e === n)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function P$(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Rr(e, { select: n = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== r && P$(e) && n && e.select();
  }
}
const Gf = O$();
function O$() {
  let e = [];
  return {
    add(n) {
      const r = e[0];
      n !== r && (r == null || r.pause()), e = Kf(e, n), e.unshift(n);
    },
    remove(n) {
      var r;
      e = Kf(e, n), (r = e[0]) === null || r === void 0 || r.resume();
    }
  };
}
function Kf(e, n) {
  const r = [
    ...e
  ], i = r.indexOf(n);
  return i !== -1 && r.splice(i, 1), r;
}
function R$(e) {
  return e.filter(
    (n) => n.tagName !== "A"
  );
}
const A$ = /* @__PURE__ */ le((e, n) => {
  var r;
  const { container: i = globalThis == null || (r = globalThis.document) === null || r === void 0 ? void 0 : r.body, ...s } = e;
  return i ? /* @__PURE__ */ gl.createPortal(/* @__PURE__ */ U(na.div, fe({}, s, {
    ref: n
  })), i) : null;
});
function T$(e, n) {
  return pl((r, i) => {
    const s = n[r][i];
    return s ?? r;
  }, e);
}
const ra = (e) => {
  const { present: n, children: r } = e, i = I$(n), s = typeof r == "function" ? r({
    present: i.isPresent
  }) : Wt.only(r), c = di(i.ref, s.ref);
  return typeof r == "function" || i.isPresent ? /* @__PURE__ */ po(s, {
    ref: c
  }) : null;
};
ra.displayName = "Presence";
function I$(e) {
  const [n, r] = me(), i = J({}), s = J(e), c = J("none"), l = e ? "mounted" : "unmounted", [u, d] = T$(l, {
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
  return se(() => {
    const h = ys(i.current);
    c.current = u === "mounted" ? h : "none";
  }, [
    u
  ]), Qc(() => {
    const h = i.current, v = s.current;
    if (v !== e) {
      const b = c.current, m = ys(h);
      e ? d("MOUNT") : m === "none" || (h == null ? void 0 : h.display) === "none" ? d("UNMOUNT") : d(v && b !== m ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [
    e,
    d
  ]), Qc(() => {
    if (n) {
      const h = (g) => {
        const m = ys(i.current).includes(g.animationName);
        g.target === n && m && Gs(
          () => d("ANIMATION_END")
        );
      }, v = (g) => {
        g.target === n && (c.current = ys(i.current));
      };
      return n.addEventListener("animationstart", v), n.addEventListener("animationcancel", h), n.addEventListener("animationend", h), () => {
        n.removeEventListener("animationstart", v), n.removeEventListener("animationcancel", h), n.removeEventListener("animationend", h);
      };
    } else
      d("ANIMATION_END");
  }, [
    n,
    d
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(u),
    ref: He((h) => {
      h && (i.current = getComputedStyle(h)), r(h);
    }, [])
  };
}
function ys(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let Rc = 0;
function k$() {
  se(() => {
    var e, n;
    const r = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = r[0]) !== null && e !== void 0 ? e : Yf()), document.body.insertAdjacentElement("beforeend", (n = r[1]) !== null && n !== void 0 ? n : Yf()), Rc++, () => {
      Rc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (i) => i.remove()
      ), Rc--;
    };
  }, []);
}
function Yf() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var Op = op(), Ac = function() {
}, oa = M.forwardRef(function(e, n) {
  var r = M.useRef(null), i = M.useState({
    onScrollCapture: Ac,
    onWheelCapture: Ac,
    onTouchMoveCapture: Ac
  }), s = i[0], c = i[1], l = e.forwardProps, u = e.children, d = e.className, h = e.removeScrollBar, v = e.enabled, g = e.shards, b = e.sideCar, m = e.noIsolation, C = e.inert, p = e.allowPinchZoom, y = e.as, x = y === void 0 ? "div" : y, D = bl(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), N = b, E = rp([r, n]), O = Dt(Dt({}, D), s);
  return M.createElement(
    M.Fragment,
    null,
    v && M.createElement(N, { sideCar: Op, removeScrollBar: h, shards: g, noIsolation: m, inert: C, setCallbacks: c, allowPinchZoom: !!p, lockRef: r }),
    l ? M.cloneElement(M.Children.only(u), Dt(Dt({}, O), { ref: E })) : M.createElement(x, Dt({}, O, { className: d, ref: E }), u)
  );
});
oa.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
oa.classNames = {
  fullWidth: Zo,
  zeroRight: qo
};
var nl = !1;
if (typeof window < "u")
  try {
    var xs = Object.defineProperty({}, "passive", {
      get: function() {
        return nl = !0, !0;
      }
    });
    window.addEventListener("test", xs, xs), window.removeEventListener("test", xs, xs);
  } catch {
    nl = !1;
  }
var ro = nl ? { passive: !1 } : !1, M$ = function(e) {
  var n = window.getComputedStyle(e);
  return n.overflowY !== "hidden" && // not-not-scrollable
  !(n.overflowY === n.overflowX && n.overflowY === "visible");
}, L$ = function(e) {
  var n = window.getComputedStyle(e);
  return n.overflowX !== "hidden" && // not-not-scrollable
  !(n.overflowY === n.overflowX && n.overflowX === "visible");
}, qf = function(e, n) {
  var r = n;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var i = Rp(e, r);
    if (i) {
      var s = Ap(e, r), c = s[1], l = s[2];
      if (c > l)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== document.body);
  return !1;
}, F$ = function(e) {
  var n = e.scrollTop, r = e.scrollHeight, i = e.clientHeight;
  return [
    n,
    r,
    i
  ];
}, W$ = function(e) {
  var n = e.scrollLeft, r = e.scrollWidth, i = e.clientWidth;
  return [
    n,
    r,
    i
  ];
}, Rp = function(e, n) {
  return e === "v" ? M$(n) : L$(n);
}, Ap = function(e, n) {
  return e === "v" ? F$(n) : W$(n);
}, B$ = function(e, n) {
  return e === "h" && n === "rtl" ? -1 : 1;
}, U$ = function(e, n, r, i, s) {
  var c = B$(e, window.getComputedStyle(n).direction), l = c * i, u = r.target, d = n.contains(u), h = !1, v = l > 0, g = 0, b = 0;
  do {
    var m = Ap(e, u), C = m[0], p = m[1], y = m[2], x = p - y - c * C;
    (C || x) && Rp(e, u) && (g += x, b += C), u = u.parentNode;
  } while (
    // portaled content
    !d && u !== document.body || // self content
    d && (n.contains(u) || n === u)
  );
  return (v && (s && g === 0 || !s && l > g) || !v && (s && b === 0 || !s && -l > b)) && (h = !0), h;
}, Cs = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Zf = function(e) {
  return [e.deltaX, e.deltaY];
}, Xf = function(e) {
  return e && "current" in e ? e.current : e;
}, z$ = function(e, n) {
  return e[0] === n[0] && e[1] === n[1];
}, H$ = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, V$ = 0, oo = [];
function G$(e) {
  var n = M.useRef([]), r = M.useRef([0, 0]), i = M.useRef(), s = M.useState(V$++)[0], c = M.useState(function() {
    return yl();
  })[0], l = M.useRef(e);
  M.useEffect(function() {
    l.current = e;
  }, [e]), M.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var p = np([e.lockRef.current], (e.shards || []).map(Xf), !0).filter(Boolean);
      return p.forEach(function(y) {
        return y.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), p.forEach(function(y) {
          return y.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var u = M.useCallback(function(p, y) {
    if ("touches" in p && p.touches.length === 2)
      return !l.current.allowPinchZoom;
    var x = Cs(p), D = r.current, N = "deltaX" in p ? p.deltaX : D[0] - x[0], E = "deltaY" in p ? p.deltaY : D[1] - x[1], O, T = p.target, R = Math.abs(N) > Math.abs(E) ? "h" : "v";
    if ("touches" in p && R === "h" && T.type === "range")
      return !1;
    var I = qf(R, T);
    if (!I)
      return !0;
    if (I ? O = R : (O = R === "v" ? "h" : "v", I = qf(R, T)), !I)
      return !1;
    if (!i.current && "changedTouches" in p && (N || E) && (i.current = O), !O)
      return !0;
    var W = i.current || O;
    return U$(W, y, p, W === "h" ? N : E, !0);
  }, []), d = M.useCallback(function(p) {
    var y = p;
    if (!(!oo.length || oo[oo.length - 1] !== c)) {
      var x = "deltaY" in y ? Zf(y) : Cs(y), D = n.current.filter(function(O) {
        return O.name === y.type && O.target === y.target && z$(O.delta, x);
      })[0];
      if (D && D.should) {
        y.preventDefault();
        return;
      }
      if (!D) {
        var N = (l.current.shards || []).map(Xf).filter(Boolean).filter(function(O) {
          return O.contains(y.target);
        }), E = N.length > 0 ? u(y, N[0]) : !l.current.noIsolation;
        E && y.preventDefault();
      }
    }
  }, []), h = M.useCallback(function(p, y, x, D) {
    var N = { name: p, delta: y, target: x, should: D };
    n.current.push(N), setTimeout(function() {
      n.current = n.current.filter(function(E) {
        return E !== N;
      });
    }, 1);
  }, []), v = M.useCallback(function(p) {
    r.current = Cs(p), i.current = void 0;
  }, []), g = M.useCallback(function(p) {
    h(p.type, Zf(p), p.target, u(p, e.lockRef.current));
  }, []), b = M.useCallback(function(p) {
    h(p.type, Cs(p), p.target, u(p, e.lockRef.current));
  }, []);
  M.useEffect(function() {
    return oo.push(c), e.setCallbacks({
      onScrollCapture: g,
      onWheelCapture: g,
      onTouchMoveCapture: b
    }), document.addEventListener("wheel", d, ro), document.addEventListener("touchmove", d, ro), document.addEventListener("touchstart", v, ro), function() {
      oo = oo.filter(function(p) {
        return p !== c;
      }), document.removeEventListener("wheel", d, ro), document.removeEventListener("touchmove", d, ro), document.removeEventListener("touchstart", v, ro);
    };
  }, []);
  var m = e.removeScrollBar, C = e.inert;
  return M.createElement(
    M.Fragment,
    null,
    C ? M.createElement(c, { styles: H$(s) }) : null,
    m ? M.createElement(cp, { gapMode: "margin" }) : null
  );
}
const K$ = sp(Op, G$);
var Tp = M.forwardRef(function(e, n) {
  return M.createElement(oa, Dt({}, e, { ref: n, sideCar: K$ }));
});
Tp.classNames = oa.classNames;
const Y$ = Tp, Ip = "Dialog", [kp, vS] = a$(Ip), [q$, Lr] = kp(Ip), Z$ = (e) => {
  const { __scopeDialog: n, children: r, open: i, defaultOpen: s, onOpenChange: c, modal: l = !0 } = e, u = J(null), d = J(null), [h = !1, v] = d$({
    prop: i,
    defaultProp: s,
    onChange: c
  });
  return /* @__PURE__ */ U(q$, {
    scope: n,
    triggerRef: u,
    contentRef: d,
    contentId: _c(),
    titleId: _c(),
    descriptionId: _c(),
    open: h,
    onOpenChange: v,
    onOpenToggle: He(
      () => v(
        (g) => !g
      ),
      [
        v
      ]
    ),
    modal: l
  }, r);
}, Mp = "DialogPortal", [X$, Lp] = kp(Mp, {
  forceMount: void 0
}), j$ = (e) => {
  const { __scopeDialog: n, forceMount: r, children: i, container: s } = e, c = Lr(Mp, n);
  return /* @__PURE__ */ U(X$, {
    scope: n,
    forceMount: r
  }, Wt.map(
    i,
    (l) => /* @__PURE__ */ U(ra, {
      present: r || c.open
    }, /* @__PURE__ */ U(A$, {
      asChild: !0,
      container: s
    }, l))
  ));
}, rl = "DialogOverlay", J$ = /* @__PURE__ */ le((e, n) => {
  const r = Lp(rl, e.__scopeDialog), { forceMount: i = r.forceMount, ...s } = e, c = Lr(rl, e.__scopeDialog);
  return c.modal ? /* @__PURE__ */ U(ra, {
    present: i || c.open
  }, /* @__PURE__ */ U(Q$, fe({}, s, {
    ref: n
  }))) : null;
}), Q$ = /* @__PURE__ */ le((e, n) => {
  const { __scopeDialog: r, ...i } = e, s = Lr(rl, r);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ U(Y$, {
      as: Dl,
      allowPinchZoom: !0,
      shards: [
        s.contentRef
      ]
    }, /* @__PURE__ */ U(na.div, fe({
      "data-state": Wp(s.open)
    }, i, {
      ref: n,
      style: {
        pointerEvents: "auto",
        ...i.style
      }
    })))
  );
}), ri = "DialogContent", e5 = /* @__PURE__ */ le((e, n) => {
  const r = Lp(ri, e.__scopeDialog), { forceMount: i = r.forceMount, ...s } = e, c = Lr(ri, e.__scopeDialog);
  return /* @__PURE__ */ U(ra, {
    present: i || c.open
  }, c.modal ? /* @__PURE__ */ U(t5, fe({}, s, {
    ref: n
  })) : /* @__PURE__ */ U(n5, fe({}, s, {
    ref: n
  })));
}), t5 = /* @__PURE__ */ le((e, n) => {
  const r = Lr(ri, e.__scopeDialog), i = J(null), s = di(n, r.contentRef, i);
  return se(() => {
    const c = i.current;
    if (c)
      return xl(c);
  }, []), /* @__PURE__ */ U(Fp, fe({}, e, {
    ref: s,
    trapFocus: r.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: ao(e.onCloseAutoFocus, (c) => {
      var l;
      c.preventDefault(), (l = r.triggerRef.current) === null || l === void 0 || l.focus();
    }),
    onPointerDownOutside: ao(e.onPointerDownOutside, (c) => {
      const l = c.detail.originalEvent, u = l.button === 0 && l.ctrlKey === !0;
      (l.button === 2 || u) && c.preventDefault();
    }),
    onFocusOutside: ao(
      e.onFocusOutside,
      (c) => c.preventDefault()
    )
  }));
}), n5 = /* @__PURE__ */ le((e, n) => {
  const r = Lr(ri, e.__scopeDialog), i = J(!1);
  return /* @__PURE__ */ U(Fp, fe({}, e, {
    ref: n,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (s) => {
      var c;
      if ((c = e.onCloseAutoFocus) === null || c === void 0 || c.call(e, s), !s.defaultPrevented) {
        var l;
        i.current || (l = r.triggerRef.current) === null || l === void 0 || l.focus(), s.preventDefault();
      }
      i.current = !1;
    },
    onInteractOutside: (s) => {
      var c, l;
      (c = e.onInteractOutside) === null || c === void 0 || c.call(e, s), s.defaultPrevented || (i.current = !0);
      const u = s.target;
      ((l = r.triggerRef.current) === null || l === void 0 ? void 0 : l.contains(u)) && s.preventDefault();
    }
  }));
}), Fp = /* @__PURE__ */ le((e, n) => {
  const { __scopeDialog: r, trapFocus: i, onOpenAutoFocus: s, onCloseAutoFocus: c, ...l } = e, u = Lr(ri, r), d = J(null), h = di(n, d);
  return k$(), /* @__PURE__ */ U(Hs, null, /* @__PURE__ */ U(S$, {
    asChild: !0,
    loop: !0,
    trapped: i,
    onMountAutoFocus: s,
    onUnmountAutoFocus: c
  }, /* @__PURE__ */ U(C$, fe({
    role: "dialog",
    id: u.contentId,
    "aria-describedby": u.descriptionId,
    "aria-labelledby": u.titleId,
    "data-state": Wp(u.open)
  }, l, {
    ref: h,
    onDismiss: () => u.onOpenChange(!1)
  }))), !1);
});
function Wp(e) {
  return e ? "open" : "closed";
}
const r5 = Z$, o5 = j$, i5 = J$, s5 = e5;
var zo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Bp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jf = 1, a5 = 0.9, c5 = 0.3, Tc = 0.1, l5 = 0, Ic = 0.999, u5 = 0.9999, d5 = 0.99, Jf = /[\\\/\-_+.# \t"@\[\(\{&]/, f5 = /[\\\/\-_+.# \t"@\[\(\{&]/g;
function ol(e, n, r, i, s, c) {
  if (c === n.length)
    return s === e.length ? jf : d5;
  for (var l = i.charAt(c), u = r.indexOf(l, s), d = 0, h, v, g; u >= 0; )
    h = ol(e, n, r, i, u + 1, c + 1), h > d && (u === s ? h *= jf : Jf.test(e.charAt(u - 1)) ? (h *= a5, g = e.slice(s, u - 1).match(f5), g && s > 0 && (h *= Math.pow(Ic, g.length))) : Jf.test(e.slice(s, u - 1)) ? (h *= l5, s > 0 && (h *= Math.pow(Ic, u - s))) : (h *= c5, s > 0 && (h *= Math.pow(Ic, u - s))), e.charAt(u) !== n.charAt(c) && (h *= u5)), h < Tc && r.charAt(u - 1) === i.charAt(c + 1) && r.charAt(u - 1) !== i.charAt(c) && (v = ol(e, n, r, i, u + 1, c + 2), v * Tc > h && (h = v * Tc)), h > d && (d = h), u = r.indexOf(l, u + 1);
  return d;
}
function h5(e, n) {
  return ol(e, n, e.toLowerCase(), n.toLowerCase(), 0, 0);
}
var p5 = h5;
const g5 = /* @__PURE__ */ Bp(p5);
var v5 = '[cmdk-list-sizer=""]', Ho = '[cmdk-group=""]', kc = '[cmdk-group-items=""]', m5 = '[cmdk-group-heading=""]', Up = '[cmdk-item=""]', Qf = `${Up}:not([aria-disabled="true"])`, il = "cmdk-item-select", dr = "data-value", w5 = (e, n) => g5(e, n), zp = M.createContext(void 0), fi = () => M.useContext(zp), Hp = M.createContext(void 0), _l = () => M.useContext(Hp), Vp = M.createContext(void 0), Gp = M.forwardRef((e, n) => {
  let r = M.useRef(null), i = io(() => ({ search: "", value: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } })), s = io(() => /* @__PURE__ */ new Set()), c = io(() => /* @__PURE__ */ new Map()), l = io(() => /* @__PURE__ */ new Map()), u = io(() => /* @__PURE__ */ new Set()), d = Kp(e), { label: h, children: v, value: g, onValueChange: b, filter: m, shouldFilter: C, ...p } = e, y = M.useId(), x = M.useId(), D = M.useId(), N = P5();
  bo(() => {
    if (g !== void 0) {
      let V = g.trim().toLowerCase();
      i.current.value = V, N(6, K), E.emit();
    }
  }, [g]);
  let E = M.useMemo(() => ({ subscribe: (V) => (u.current.add(V), () => u.current.delete(V)), snapshot: () => i.current, setState: (V, ee, te) => {
    var re, de, Te;
    if (!Object.is(i.current[V], ee)) {
      if (i.current[V] = ee, V === "search")
        W(), R(), N(1, I);
      else if (V === "value")
        if (((re = d.current) == null ? void 0 : re.value) !== void 0) {
          (Te = (de = d.current).onValueChange) == null || Te.call(de, ee);
          return;
        } else
          te || N(5, K);
      E.emit();
    }
  }, emit: () => {
    u.current.forEach((V) => V());
  } }), []), O = M.useMemo(() => ({ value: (V, ee) => {
    ee !== l.current.get(V) && (l.current.set(V, ee), i.current.filtered.items.set(V, T(ee)), N(2, () => {
      R(), E.emit();
    }));
  }, item: (V, ee) => (s.current.add(V), ee && (c.current.has(ee) ? c.current.get(ee).add(V) : c.current.set(ee, /* @__PURE__ */ new Set([V]))), N(3, () => {
    W(), R(), i.current.value || I(), E.emit();
  }), () => {
    l.current.delete(V), s.current.delete(V), i.current.filtered.items.delete(V), N(4, () => {
      W(), I(), E.emit();
    });
  }), group: (V) => (c.current.has(V) || c.current.set(V, /* @__PURE__ */ new Set()), () => {
    l.current.delete(V), c.current.delete(V);
  }), filter: () => d.current.shouldFilter, label: h || e["aria-label"], listId: y, inputId: D, labelId: x }), []);
  function T(V) {
    var ee;
    let te = ((ee = d.current) == null ? void 0 : ee.filter) ?? w5;
    return V ? te(V, i.current.search) : 0;
  }
  function R() {
    if (!r.current || !i.current.search || d.current.shouldFilter === !1)
      return;
    let V = i.current.filtered.items, ee = [];
    i.current.filtered.groups.forEach((re) => {
      let de = c.current.get(re), Te = 0;
      de.forEach((Oe) => {
        let $e = V.get(Oe);
        Te = Math.max($e, Te);
      }), ee.push([re, Te]);
    });
    let te = r.current.querySelector(v5);
    X().sort((re, de) => {
      let Te = re.getAttribute(dr), Oe = de.getAttribute(dr);
      return (V.get(Oe) ?? 0) - (V.get(Te) ?? 0);
    }).forEach((re) => {
      let de = re.closest(kc);
      de ? de.appendChild(re.parentElement === de ? re : re.closest(`${kc} > *`)) : te.appendChild(re.parentElement === te ? re : re.closest(`${kc} > *`));
    }), ee.sort((re, de) => de[1] - re[1]).forEach((re) => {
      let de = r.current.querySelector(`${Ho}[${dr}="${re[0]}"]`);
      de == null || de.parentElement.appendChild(de);
    });
  }
  function I() {
    let V = X().find((te) => !te.ariaDisabled), ee = V == null ? void 0 : V.getAttribute(dr);
    E.setState("value", ee || void 0);
  }
  function W() {
    if (!i.current.search || d.current.shouldFilter === !1) {
      i.current.filtered.count = s.current.size;
      return;
    }
    i.current.filtered.groups = /* @__PURE__ */ new Set();
    let V = 0;
    for (let ee of s.current) {
      let te = l.current.get(ee), re = T(te);
      i.current.filtered.items.set(ee, re), re > 0 && V++;
    }
    for (let [ee, te] of c.current)
      for (let re of te)
        if (i.current.filtered.items.get(re) > 0) {
          i.current.filtered.groups.add(ee);
          break;
        }
    i.current.filtered.count = V;
  }
  function K() {
    var V, ee, te;
    let re = j();
    re && (((V = re.parentElement) == null ? void 0 : V.firstChild) === re && ((te = (ee = re.closest(Ho)) == null ? void 0 : ee.querySelector(m5)) == null || te.scrollIntoView({ block: "nearest" })), re.scrollIntoView({ block: "nearest" }));
  }
  function j() {
    return r.current.querySelector(`${Up}[aria-selected="true"]`);
  }
  function X() {
    return Array.from(r.current.querySelectorAll(Qf));
  }
  function ae(V) {
    let ee = X()[V];
    ee && E.setState("value", ee.getAttribute(dr));
  }
  function Z(V) {
    var ee;
    let te = j(), re = X(), de = re.findIndex((Oe) => Oe === te), Te = re[de + V];
    (ee = d.current) != null && ee.loop && (Te = de + V < 0 ? re[re.length - 1] : de + V === re.length ? re[0] : re[de + V]), Te && E.setState("value", Te.getAttribute(dr));
  }
  function ne(V) {
    let ee = j(), te = ee == null ? void 0 : ee.closest(Ho), re;
    for (; te && !re; )
      te = V > 0 ? D5(te, Ho) : _5(te, Ho), re = te == null ? void 0 : te.querySelector(Qf);
    re ? E.setState("value", re.getAttribute(dr)) : Z(V);
  }
  let oe = () => ae(X().length - 1), ue = (V) => {
    V.preventDefault(), V.metaKey ? oe() : V.altKey ? ne(1) : Z(1);
  }, ve = (V) => {
    V.preventDefault(), V.metaKey ? ae(0) : V.altKey ? ne(-1) : Z(-1);
  };
  return M.createElement("div", { ref: hi([r, n]), ...p, "cmdk-root": "", onKeyDown: (V) => {
    var ee;
    if ((ee = p.onKeyDown) == null || ee.call(p, V), !V.defaultPrevented)
      switch (V.key) {
        case "n":
        case "j": {
          V.ctrlKey && ue(V);
          break;
        }
        case "ArrowDown": {
          ue(V);
          break;
        }
        case "p":
        case "k": {
          V.ctrlKey && ve(V);
          break;
        }
        case "ArrowUp": {
          ve(V);
          break;
        }
        case "Home": {
          V.preventDefault(), ae(0);
          break;
        }
        case "End": {
          V.preventDefault(), oe();
          break;
        }
        case "Enter": {
          V.preventDefault();
          let te = j();
          if (te) {
            let re = new Event(il);
            te.dispatchEvent(re);
          }
        }
      }
  } }, M.createElement("label", { "cmdk-label": "", htmlFor: O.inputId, id: O.labelId, style: O5 }, h), M.createElement(Hp.Provider, { value: E }, M.createElement(zp.Provider, { value: O }, v)));
}), b5 = M.forwardRef((e, n) => {
  let r = M.useId(), i = M.useRef(null), s = M.useContext(Vp), c = fi(), l = Kp(e);
  bo(() => c.item(r, s), []);
  let u = Yp(r, i, [e.value, e.children, i]), d = _l(), h = fo((x) => x.value && x.value === u.current), v = fo((x) => c.filter() === !1 ? !0 : x.search ? x.filtered.items.get(r) > 0 : !0);
  M.useEffect(() => {
    let x = i.current;
    if (!(!x || e.disabled))
      return x.addEventListener(il, g), () => x.removeEventListener(il, g);
  }, [v, e.onSelect, e.disabled]);
  function g() {
    var x, D;
    (D = (x = l.current).onSelect) == null || D.call(x, u.current);
  }
  function b() {
    d.setState("value", u.current, !0);
  }
  if (!v)
    return null;
  let { disabled: m, value: C, onSelect: p, ...y } = e;
  return M.createElement("div", { ref: hi([i, n]), ...y, "cmdk-item": "", role: "option", "aria-disabled": m || void 0, "aria-selected": h || void 0, "data-selected": h || void 0, onPointerMove: m ? void 0 : b, onClick: m ? void 0 : g }, e.children);
}), y5 = M.forwardRef((e, n) => {
  let { heading: r, children: i, ...s } = e, c = M.useId(), l = M.useRef(null), u = M.useRef(null), d = M.useId(), h = fi(), v = fo((b) => h.filter() === !1 ? !0 : b.search ? b.filtered.groups.has(c) : !0);
  bo(() => h.group(c), []), Yp(c, l, [e.value, e.heading, u]);
  let g = M.createElement(Vp.Provider, { value: c }, i);
  return M.createElement("div", { ref: hi([l, n]), ...s, "cmdk-group": "", role: "presentation", hidden: v ? void 0 : !0 }, r && M.createElement("div", { ref: u, "cmdk-group-heading": "", "aria-hidden": !0, id: d }, r), M.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": r ? d : void 0 }, g));
}), x5 = M.forwardRef((e, n) => {
  let { alwaysRender: r, ...i } = e, s = M.useRef(null), c = fo((l) => !l.search);
  return !r && !c ? null : M.createElement("div", { ref: hi([s, n]), ...i, "cmdk-separator": "", role: "separator" });
}), C5 = M.forwardRef((e, n) => {
  let { onValueChange: r, ...i } = e, s = e.value != null, c = _l(), l = fo((d) => d.search), u = fi();
  return M.useEffect(() => {
    e.value != null && c.setState("search", e.value);
  }, [e.value]), M.createElement("input", { ref: n, ...i, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": u.listId, "aria-labelledby": u.labelId, id: u.inputId, type: "text", value: s ? e.value : l, onChange: (d) => {
    s || c.setState("search", d.target.value), r == null || r(d.target.value);
  } });
}), $5 = M.forwardRef((e, n) => {
  let { children: r, ...i } = e, s = M.useRef(null), c = M.useRef(null), l = fi();
  return M.useEffect(() => {
    if (c.current && s.current) {
      let u = c.current, d = s.current, h, v = new ResizeObserver(() => {
        h = requestAnimationFrame(() => {
          let g = u.getBoundingClientRect().height;
          d.style.setProperty("--cmdk-list-height", g.toFixed(1) + "px");
        });
      });
      return v.observe(u), () => {
        cancelAnimationFrame(h), v.unobserve(u);
      };
    }
  }, []), M.createElement("div", { ref: hi([s, n]), ...i, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: l.listId, "aria-labelledby": l.inputId }, M.createElement("div", { ref: c, "cmdk-list-sizer": "" }, r));
}), N5 = M.forwardRef((e, n) => {
  let { open: r, onOpenChange: i, container: s, ...c } = e;
  return M.createElement(r5, { open: r, onOpenChange: i }, M.createElement(o5, { container: s }, M.createElement(i5, { "cmdk-overlay": "" }), M.createElement(s5, { "aria-label": e.label, "cmdk-dialog": "" }, M.createElement(Gp, { ref: n, ...c }))));
}), S5 = M.forwardRef((e, n) => {
  let r = M.useRef(!0), i = fo((s) => s.filtered.count === 0);
  return M.useEffect(() => {
    r.current = !1;
  }, []), r.current || !i ? null : M.createElement("div", { ref: n, ...e, "cmdk-empty": "", role: "presentation" });
}), E5 = M.forwardRef((e, n) => {
  let { progress: r, children: i, ...s } = e;
  return M.createElement("div", { ref: n, ...s, "cmdk-loading": "", role: "progressbar", "aria-valuenow": r, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, M.createElement("div", { "aria-hidden": !0 }, i));
}), Bt = Object.assign(Gp, { List: $5, Item: b5, Input: C5, Group: y5, Separator: x5, Dialog: N5, Empty: S5, Loading: E5 });
function D5(e, n) {
  let r = e.nextElementSibling;
  for (; r; ) {
    if (r.matches(n))
      return r;
    r = r.nextElementSibling;
  }
}
function _5(e, n) {
  let r = e.previousElementSibling;
  for (; r; ) {
    if (r.matches(n))
      return r;
    r = r.previousElementSibling;
  }
}
function Kp(e) {
  let n = M.useRef(e);
  return bo(() => {
    n.current = e;
  }), n;
}
var bo = typeof window > "u" ? M.useEffect : M.useLayoutEffect;
function io(e) {
  let n = M.useRef();
  return n.current === void 0 && (n.current = e()), n;
}
function hi(e) {
  return (n) => {
    e.forEach((r) => {
      typeof r == "function" ? r(n) : r != null && (r.current = n);
    });
  };
}
function fo(e) {
  let n = _l(), r = () => e(n.snapshot());
  return M.useSyncExternalStore(n.subscribe, r, r);
}
function Yp(e, n, r) {
  let i = M.useRef(), s = fi();
  return bo(() => {
    var c;
    let l = (() => {
      var u;
      for (let d of r) {
        if (typeof d == "string")
          return d.trim().toLowerCase();
        if (typeof d == "object" && "current" in d && d.current)
          return (u = d.current.textContent) == null ? void 0 : u.trim().toLowerCase();
      }
    })();
    s.value(e, l), (c = n.current) == null || c.setAttribute(dr, l), i.current = l;
  }), i;
}
var P5 = () => {
  let [e, n] = M.useState(), r = io(() => /* @__PURE__ */ new Map());
  return bo(() => {
    r.current.forEach((i) => i()), r.current = /* @__PURE__ */ new Map();
  }, [e]), (i, s) => {
    r.current.set(i, s), n({});
  };
}, O5 = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const qp = ({
  className: e,
  ...n
}) => /* @__PURE__ */ _(Zs, { className: Ye(e), ...n });
qp.displayName = Zs.displayName;
const Zp = M.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ _(
  Xs,
  {
    ref: r,
    className: Ye(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...n
  }
));
Zp.displayName = Xs.displayName;
const R5 = M.forwardRef(({ className: e, children: n, ...r }, i) => /* @__PURE__ */ q(qp, { children: [
  /* @__PURE__ */ _(Zp, {}),
  /* @__PURE__ */ q(
    js,
    {
      ref: i,
      className: Ye(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ q(xp, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ _(kh, { className: "h-4 w-4" }),
          /* @__PURE__ */ _("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
R5.displayName = js.displayName;
const A5 = M.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ _(
  Js,
  {
    ref: r,
    className: Ye(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...n
  }
));
A5.displayName = Js.displayName;
const T5 = M.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ _(
  Qs,
  {
    ref: r,
    className: Ye("text-sm text-muted-foreground", e),
    ...n
  }
));
T5.displayName = Qs.displayName;
const pi = M.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ _(
  Bt,
  {
    ref: r,
    className: Ye(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...n
  }
));
pi.displayName = Bt.displayName;
const Pl = M.forwardRef(({ className: e, ...n }, r) => (
  // eslint-disable-next-line react/no-unknown-property
  /* @__PURE__ */ q("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
    /* @__PURE__ */ _(kx, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
    /* @__PURE__ */ _(
      Bt.Input,
      {
        ref: r,
        className: Ye(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          e
        ),
        ...n
      }
    )
  ] })
));
Pl.displayName = Bt.Input.displayName;
const I5 = M.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ _(
  Bt.List,
  {
    ref: r,
    className: Ye("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...n
  }
));
I5.displayName = Bt.List.displayName;
const gi = M.forwardRef((e, n) => /* @__PURE__ */ _(
  Bt.Empty,
  {
    ref: n,
    className: "py-6 text-center text-sm",
    ...e
  }
));
gi.displayName = Bt.Empty.displayName;
const Ir = M.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ _(
  Bt.Group,
  {
    ref: r,
    className: Ye(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...n
  }
));
Ir.displayName = Bt.Group.displayName;
const k5 = M.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ _(
  Bt.Separator,
  {
    ref: r,
    className: Ye("-mx-1 h-px bg-border", e),
    ...n
  }
));
k5.displayName = Bt.Separator.displayName;
const vi = M.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ _(
  Bt.Item,
  {
    ref: r,
    className: Ye(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n
  }
));
vi.displayName = Bt.Item.displayName;
const sl = "dismissableLayer.update", M5 = "dismissableLayer.pointerDownOutside", L5 = "dismissableLayer.focusOutside";
let eh;
const F5 = /* @__PURE__ */ jt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), W5 = /* @__PURE__ */ le((e, n) => {
  var r;
  const { disableOutsidePointerEvents: i = !1, onEscapeKeyDown: s, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, onDismiss: d, ...h } = e, v = En(F5), [g, b] = me(null), m = (r = g == null ? void 0 : g.ownerDocument) !== null && r !== void 0 ? r : globalThis == null ? void 0 : globalThis.document, [, C] = me({}), p = mt(
    n,
    (I) => b(I)
  ), y = Array.from(v.layers), [x] = [
    ...v.layersWithOutsidePointerEventsDisabled
  ].slice(-1), D = y.indexOf(x), N = g ? y.indexOf(g) : -1, E = v.layersWithOutsidePointerEventsDisabled.size > 0, O = N >= D, T = B5((I) => {
    const W = I.target, K = [
      ...v.branches
    ].some(
      (j) => j.contains(W)
    );
    !O || K || (c == null || c(I), u == null || u(I), I.defaultPrevented || d == null || d());
  }, m), R = U5((I) => {
    const W = I.target;
    [
      ...v.branches
    ].some(
      (j) => j.contains(W)
    ) || (l == null || l(I), u == null || u(I), I.defaultPrevented || d == null || d());
  }, m);
  return Jh((I) => {
    N === v.layers.size - 1 && (s == null || s(I), !I.defaultPrevented && d && (I.preventDefault(), d()));
  }, m), se(() => {
    if (g)
      return i && (v.layersWithOutsidePointerEventsDisabled.size === 0 && (eh = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), v.layersWithOutsidePointerEventsDisabled.add(g)), v.layers.add(g), th(), () => {
        i && v.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = eh);
      };
  }, [
    g,
    m,
    i,
    v
  ]), se(() => () => {
    g && (v.layers.delete(g), v.layersWithOutsidePointerEventsDisabled.delete(g), th());
  }, [
    g,
    v
  ]), se(() => {
    const I = () => C({});
    return document.addEventListener(sl, I), () => document.removeEventListener(sl, I);
  }, []), /* @__PURE__ */ U($t.div, fe({}, h, {
    ref: p,
    style: {
      pointerEvents: E ? O ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: ut(e.onFocusCapture, R.onFocusCapture),
    onBlurCapture: ut(e.onBlurCapture, R.onBlurCapture),
    onPointerDownCapture: ut(e.onPointerDownCapture, T.onPointerDownCapture)
  }));
});
function B5(e, n = globalThis == null ? void 0 : globalThis.document) {
  const r = un(e), i = J(!1), s = J(() => {
  });
  return se(() => {
    const c = (u) => {
      if (u.target && !i.current) {
        let h = function() {
          Xp(M5, r, d, {
            discrete: !0
          });
        };
        const d = {
          originalEvent: u
        };
        u.pointerType === "touch" ? (n.removeEventListener("click", s.current), s.current = h, n.addEventListener("click", s.current, {
          once: !0
        })) : h();
      } else
        n.removeEventListener("click", s.current);
      i.current = !1;
    }, l = window.setTimeout(() => {
      n.addEventListener("pointerdown", c);
    }, 0);
    return () => {
      window.clearTimeout(l), n.removeEventListener("pointerdown", c), n.removeEventListener("click", s.current);
    };
  }, [
    n,
    r
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => i.current = !0
  };
}
function U5(e, n = globalThis == null ? void 0 : globalThis.document) {
  const r = un(e), i = J(!1);
  return se(() => {
    const s = (c) => {
      c.target && !i.current && Xp(L5, r, {
        originalEvent: c
      }, {
        discrete: !1
      });
    };
    return n.addEventListener("focusin", s), () => n.removeEventListener("focusin", s);
  }, [
    n,
    r
  ]), {
    onFocusCapture: () => i.current = !0,
    onBlurCapture: () => i.current = !1
  };
}
function th() {
  const e = new CustomEvent(sl);
  document.dispatchEvent(e);
}
function Xp(e, n, r, { discrete: i }) {
  const s = r.originalEvent.target, c = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: r
  });
  n && s.addEventListener(e, n, {
    once: !0
  }), i ? jh(s, c) : s.dispatchEvent(c);
}
const Mc = "focusScope.autoFocusOnMount", Lc = "focusScope.autoFocusOnUnmount", nh = {
  bubbles: !1,
  cancelable: !0
}, z5 = /* @__PURE__ */ le((e, n) => {
  const { loop: r = !1, trapped: i = !1, onMountAutoFocus: s, onUnmountAutoFocus: c, ...l } = e, [u, d] = me(null), h = un(s), v = un(c), g = J(null), b = mt(
    n,
    (p) => d(p)
  ), m = J({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  se(() => {
    if (i) {
      let p = function(N) {
        if (m.paused || !u)
          return;
        const E = N.target;
        u.contains(E) ? g.current = E : fr(g.current, {
          select: !0
        });
      }, y = function(N) {
        if (m.paused || !u)
          return;
        const E = N.relatedTarget;
        E !== null && (u.contains(E) || fr(g.current, {
          select: !0
        }));
      }, x = function(N) {
        if (document.activeElement === document.body)
          for (const O of N)
            O.removedNodes.length > 0 && fr(u);
      };
      document.addEventListener("focusin", p), document.addEventListener("focusout", y);
      const D = new MutationObserver(x);
      return u && D.observe(u, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", y), D.disconnect();
      };
    }
  }, [
    i,
    u,
    m.paused
  ]), se(() => {
    if (u) {
      oh.add(m);
      const p = document.activeElement;
      if (!u.contains(p)) {
        const x = new CustomEvent(Mc, nh);
        u.addEventListener(Mc, h), u.dispatchEvent(x), x.defaultPrevented || (H5(q5(jp(u)), {
          select: !0
        }), document.activeElement === p && fr(u));
      }
      return () => {
        u.removeEventListener(Mc, h), setTimeout(() => {
          const x = new CustomEvent(Lc, nh);
          u.addEventListener(Lc, v), u.dispatchEvent(x), x.defaultPrevented || fr(p ?? document.body, {
            select: !0
          }), u.removeEventListener(Lc, v), oh.remove(m);
        }, 0);
      };
    }
  }, [
    u,
    h,
    v,
    m
  ]);
  const C = He((p) => {
    if (!r && !i || m.paused)
      return;
    const y = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, x = document.activeElement;
    if (y && x) {
      const D = p.currentTarget, [N, E] = V5(D);
      N && E ? !p.shiftKey && x === E ? (p.preventDefault(), r && fr(N, {
        select: !0
      })) : p.shiftKey && x === N && (p.preventDefault(), r && fr(E, {
        select: !0
      })) : x === D && p.preventDefault();
    }
  }, [
    r,
    i,
    m.paused
  ]);
  return /* @__PURE__ */ U($t.div, fe({
    tabIndex: -1
  }, l, {
    ref: b,
    onKeyDown: C
  }));
});
function H5(e, { select: n = !1 } = {}) {
  const r = document.activeElement;
  for (const i of e)
    if (fr(i, {
      select: n
    }), document.activeElement !== r)
      return;
}
function V5(e) {
  const n = jp(e), r = rh(n, e), i = rh(n.reverse(), e);
  return [
    r,
    i
  ];
}
function jp(e) {
  const n = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (i) => {
      const s = i.tagName === "INPUT" && i.type === "hidden";
      return i.disabled || i.hidden || s ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); )
    n.push(r.currentNode);
  return n;
}
function rh(e, n) {
  for (const r of e)
    if (!G5(r, {
      upTo: n
    }))
      return r;
}
function G5(e, { upTo: n }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (n !== void 0 && e === n)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function K5(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function fr(e, { select: n = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== r && K5(e) && n && e.select();
  }
}
const oh = Y5();
function Y5() {
  let e = [];
  return {
    add(n) {
      const r = e[0];
      n !== r && (r == null || r.pause()), e = ih(e, n), e.unshift(n);
    },
    remove(n) {
      var r;
      e = ih(e, n), (r = e[0]) === null || r === void 0 || r.resume();
    }
  };
}
function ih(e, n) {
  const r = [
    ...e
  ], i = r.indexOf(n);
  return i !== -1 && r.splice(i, 1), r;
}
function q5(e) {
  return e.filter(
    (n) => n.tagName !== "A"
  );
}
const Z5 = ["top", "right", "bottom", "left"], vr = Math.min, Zt = Math.max, As = Math.round, $s = Math.floor, mr = (e) => ({
  x: e,
  y: e
}), X5 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, j5 = {
  start: "end",
  end: "start"
};
function al(e, n, r) {
  return Zt(e, vr(n, r));
}
function Un(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function zn(e) {
  return e.split("-")[0];
}
function yo(e) {
  return e.split("-")[1];
}
function Ol(e) {
  return e === "x" ? "y" : "x";
}
function Rl(e) {
  return e === "y" ? "height" : "width";
}
function xo(e) {
  return ["top", "bottom"].includes(zn(e)) ? "y" : "x";
}
function Al(e) {
  return Ol(xo(e));
}
function J5(e, n, r) {
  r === void 0 && (r = !1);
  const i = yo(e), s = Al(e), c = Rl(s);
  let l = s === "x" ? i === (r ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return n.reference[c] > n.floating[c] && (l = Ts(l)), [l, Ts(l)];
}
function Q5(e) {
  const n = Ts(e);
  return [cl(e), n, cl(n)];
}
function cl(e) {
  return e.replace(/start|end/g, (n) => j5[n]);
}
function eN(e, n, r) {
  const i = ["left", "right"], s = ["right", "left"], c = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? n ? s : i : n ? i : s;
    case "left":
    case "right":
      return n ? c : l;
    default:
      return [];
  }
}
function tN(e, n, r, i) {
  const s = yo(e);
  let c = eN(zn(e), r === "start", i);
  return s && (c = c.map((l) => l + "-" + s), n && (c = c.concat(c.map(cl)))), c;
}
function Ts(e) {
  return e.replace(/left|right|bottom|top/g, (n) => X5[n]);
}
function nN(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Jp(e) {
  return typeof e != "number" ? nN(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Is(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function sh(e, n, r) {
  let {
    reference: i,
    floating: s
  } = e;
  const c = xo(n), l = Al(n), u = Rl(l), d = zn(n), h = c === "y", v = i.x + i.width / 2 - s.width / 2, g = i.y + i.height / 2 - s.height / 2, b = i[u] / 2 - s[u] / 2;
  let m;
  switch (d) {
    case "top":
      m = {
        x: v,
        y: i.y - s.height
      };
      break;
    case "bottom":
      m = {
        x: v,
        y: i.y + i.height
      };
      break;
    case "right":
      m = {
        x: i.x + i.width,
        y: g
      };
      break;
    case "left":
      m = {
        x: i.x - s.width,
        y: g
      };
      break;
    default:
      m = {
        x: i.x,
        y: i.y
      };
  }
  switch (yo(n)) {
    case "start":
      m[l] -= b * (r && h ? -1 : 1);
      break;
    case "end":
      m[l] += b * (r && h ? -1 : 1);
      break;
  }
  return m;
}
const rN = async (e, n, r) => {
  const {
    placement: i = "bottom",
    strategy: s = "absolute",
    middleware: c = [],
    platform: l
  } = r, u = c.filter(Boolean), d = await (l.isRTL == null ? void 0 : l.isRTL(n));
  let h = await l.getElementRects({
    reference: e,
    floating: n,
    strategy: s
  }), {
    x: v,
    y: g
  } = sh(h, i, d), b = i, m = {}, C = 0;
  for (let p = 0; p < u.length; p++) {
    const {
      name: y,
      fn: x
    } = u[p], {
      x: D,
      y: N,
      data: E,
      reset: O
    } = await x({
      x: v,
      y: g,
      initialPlacement: i,
      placement: b,
      strategy: s,
      middlewareData: m,
      rects: h,
      platform: l,
      elements: {
        reference: e,
        floating: n
      }
    });
    if (v = D ?? v, g = N ?? g, m = {
      ...m,
      [y]: {
        ...m[y],
        ...E
      }
    }, O && C <= 50) {
      C++, typeof O == "object" && (O.placement && (b = O.placement), O.rects && (h = O.rects === !0 ? await l.getElementRects({
        reference: e,
        floating: n,
        strategy: s
      }) : O.rects), {
        x: v,
        y: g
      } = sh(h, b, d)), p = -1;
      continue;
    }
  }
  return {
    x: v,
    y: g,
    placement: b,
    strategy: s,
    middlewareData: m
  };
};
async function oi(e, n) {
  var r;
  n === void 0 && (n = {});
  const {
    x: i,
    y: s,
    platform: c,
    rects: l,
    elements: u,
    strategy: d
  } = e, {
    boundary: h = "clippingAncestors",
    rootBoundary: v = "viewport",
    elementContext: g = "floating",
    altBoundary: b = !1,
    padding: m = 0
  } = Un(n, e), C = Jp(m), y = u[b ? g === "floating" ? "reference" : "floating" : g], x = Is(await c.getClippingRect({
    element: (r = await (c.isElement == null ? void 0 : c.isElement(y))) == null || r ? y : y.contextElement || await (c.getDocumentElement == null ? void 0 : c.getDocumentElement(u.floating)),
    boundary: h,
    rootBoundary: v,
    strategy: d
  })), D = g === "floating" ? {
    ...l.floating,
    x: i,
    y: s
  } : l.reference, N = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(u.floating)), E = await (c.isElement == null ? void 0 : c.isElement(N)) ? await (c.getScale == null ? void 0 : c.getScale(N)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, O = Is(c.convertOffsetParentRelativeRectToViewportRelativeRect ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: D,
    offsetParent: N,
    strategy: d
  }) : D);
  return {
    top: (x.top - O.top + C.top) / E.y,
    bottom: (O.bottom - x.bottom + C.bottom) / E.y,
    left: (x.left - O.left + C.left) / E.x,
    right: (O.right - x.right + C.right) / E.x
  };
}
const ah = (e) => ({
  name: "arrow",
  options: e,
  async fn(n) {
    const {
      x: r,
      y: i,
      placement: s,
      rects: c,
      platform: l,
      elements: u
    } = n, {
      element: d,
      padding: h = 0
    } = Un(e, n) || {};
    if (d == null)
      return {};
    const v = Jp(h), g = {
      x: r,
      y: i
    }, b = Al(s), m = Rl(b), C = await l.getDimensions(d), p = b === "y", y = p ? "top" : "left", x = p ? "bottom" : "right", D = p ? "clientHeight" : "clientWidth", N = c.reference[m] + c.reference[b] - g[b] - c.floating[m], E = g[b] - c.reference[b], O = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
    let T = O ? O[D] : 0;
    (!T || !await (l.isElement == null ? void 0 : l.isElement(O))) && (T = u.floating[D] || c.floating[m]);
    const R = N / 2 - E / 2, I = T / 2 - C[m] / 2 - 1, W = vr(v[y], I), K = vr(v[x], I), j = W, X = T - C[m] - K, ae = T / 2 - C[m] / 2 + R, Z = al(j, ae, X), oe = yo(s) != null && ae != Z && c.reference[m] / 2 - (ae < j ? W : K) - C[m] / 2 < 0 ? ae < j ? j - ae : X - ae : 0;
    return {
      [b]: g[b] - oe,
      data: {
        [b]: Z,
        centerOffset: ae - Z + oe
      }
    };
  }
}), oN = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(n) {
      var r;
      const {
        placement: i,
        middlewareData: s,
        rects: c,
        initialPlacement: l,
        platform: u,
        elements: d
      } = n, {
        mainAxis: h = !0,
        crossAxis: v = !0,
        fallbackPlacements: g,
        fallbackStrategy: b = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: C = !0,
        ...p
      } = Un(e, n), y = zn(i), x = zn(l) === l, D = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), N = g || (x || !C ? [Ts(l)] : Q5(l));
      !g && m !== "none" && N.push(...tN(l, C, m, D));
      const E = [l, ...N], O = await oi(n, p), T = [];
      let R = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (h && T.push(O[y]), v) {
        const j = J5(i, c, D);
        T.push(O[j[0]], O[j[1]]);
      }
      if (R = [...R, {
        placement: i,
        overflows: T
      }], !T.every((j) => j <= 0)) {
        var I, W;
        const j = (((I = s.flip) == null ? void 0 : I.index) || 0) + 1, X = E[j];
        if (X)
          return {
            data: {
              index: j,
              overflows: R
            },
            reset: {
              placement: X
            }
          };
        let ae = (W = R.filter((Z) => Z.overflows[0] <= 0).sort((Z, ne) => Z.overflows[1] - ne.overflows[1])[0]) == null ? void 0 : W.placement;
        if (!ae)
          switch (b) {
            case "bestFit": {
              var K;
              const Z = (K = R.map((ne) => [ne.placement, ne.overflows.filter((oe) => oe > 0).reduce((oe, ue) => oe + ue, 0)]).sort((ne, oe) => ne[1] - oe[1])[0]) == null ? void 0 : K[0];
              Z && (ae = Z);
              break;
            }
            case "initialPlacement":
              ae = l;
              break;
          }
        if (i !== ae)
          return {
            reset: {
              placement: ae
            }
          };
      }
      return {};
    }
  };
};
function ch(e, n) {
  return {
    top: e.top - n.height,
    right: e.right - n.width,
    bottom: e.bottom - n.height,
    left: e.left - n.width
  };
}
function lh(e) {
  return Z5.some((n) => e[n] >= 0);
}
const iN = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(n) {
      const {
        rects: r
      } = n, {
        strategy: i = "referenceHidden",
        ...s
      } = Un(e, n);
      switch (i) {
        case "referenceHidden": {
          const c = await oi(n, {
            ...s,
            elementContext: "reference"
          }), l = ch(c, r.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: lh(l)
            }
          };
        }
        case "escaped": {
          const c = await oi(n, {
            ...s,
            altBoundary: !0
          }), l = ch(c, r.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: lh(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function sN(e, n) {
  const {
    placement: r,
    platform: i,
    elements: s
  } = e, c = await (i.isRTL == null ? void 0 : i.isRTL(s.floating)), l = zn(r), u = yo(r), d = xo(r) === "y", h = ["left", "top"].includes(l) ? -1 : 1, v = c && d ? -1 : 1, g = Un(n, e);
  let {
    mainAxis: b,
    crossAxis: m,
    alignmentAxis: C
  } = typeof g == "number" ? {
    mainAxis: g,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...g
  };
  return u && typeof C == "number" && (m = u === "end" ? C * -1 : C), d ? {
    x: m * v,
    y: b * h
  } : {
    x: b * h,
    y: m * v
  };
}
const aN = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(n) {
      const {
        x: r,
        y: i
      } = n, s = await sN(n, e);
      return {
        x: r + s.x,
        y: i + s.y,
        data: s
      };
    }
  };
}, cN = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(n) {
      const {
        x: r,
        y: i,
        placement: s
      } = n, {
        mainAxis: c = !0,
        crossAxis: l = !1,
        limiter: u = {
          fn: (y) => {
            let {
              x,
              y: D
            } = y;
            return {
              x,
              y: D
            };
          }
        },
        ...d
      } = Un(e, n), h = {
        x: r,
        y: i
      }, v = await oi(n, d), g = xo(zn(s)), b = Ol(g);
      let m = h[b], C = h[g];
      if (c) {
        const y = b === "y" ? "top" : "left", x = b === "y" ? "bottom" : "right", D = m + v[y], N = m - v[x];
        m = al(D, m, N);
      }
      if (l) {
        const y = g === "y" ? "top" : "left", x = g === "y" ? "bottom" : "right", D = C + v[y], N = C - v[x];
        C = al(D, C, N);
      }
      const p = u.fn({
        ...n,
        [b]: m,
        [g]: C
      });
      return {
        ...p,
        data: {
          x: p.x - r,
          y: p.y - i
        }
      };
    }
  };
}, lN = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(n) {
      const {
        x: r,
        y: i,
        placement: s,
        rects: c,
        middlewareData: l
      } = n, {
        offset: u = 0,
        mainAxis: d = !0,
        crossAxis: h = !0
      } = Un(e, n), v = {
        x: r,
        y: i
      }, g = xo(s), b = Ol(g);
      let m = v[b], C = v[g];
      const p = Un(u, n), y = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...p
      };
      if (d) {
        const N = b === "y" ? "height" : "width", E = c.reference[b] - c.floating[N] + y.mainAxis, O = c.reference[b] + c.reference[N] - y.mainAxis;
        m < E ? m = E : m > O && (m = O);
      }
      if (h) {
        var x, D;
        const N = b === "y" ? "width" : "height", E = ["top", "left"].includes(zn(s)), O = c.reference[g] - c.floating[N] + (E && ((x = l.offset) == null ? void 0 : x[g]) || 0) + (E ? 0 : y.crossAxis), T = c.reference[g] + c.reference[N] + (E ? 0 : ((D = l.offset) == null ? void 0 : D[g]) || 0) - (E ? y.crossAxis : 0);
        C < O ? C = O : C > T && (C = T);
      }
      return {
        [b]: m,
        [g]: C
      };
    }
  };
}, uN = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(n) {
      const {
        placement: r,
        rects: i,
        platform: s,
        elements: c
      } = n, {
        apply: l = () => {
        },
        ...u
      } = Un(e, n), d = await oi(n, u), h = zn(r), v = yo(r), g = xo(r) === "y", {
        width: b,
        height: m
      } = i.floating;
      let C, p;
      h === "top" || h === "bottom" ? (C = h, p = v === (await (s.isRTL == null ? void 0 : s.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (p = h, C = v === "end" ? "top" : "bottom");
      const y = m - d[C], x = b - d[p], D = !n.middlewareData.shift;
      let N = y, E = x;
      if (g) {
        const T = b - d.left - d.right;
        E = v || D ? vr(x, T) : T;
      } else {
        const T = m - d.top - d.bottom;
        N = v || D ? vr(y, T) : T;
      }
      if (D && !v) {
        const T = Zt(d.left, 0), R = Zt(d.right, 0), I = Zt(d.top, 0), W = Zt(d.bottom, 0);
        g ? E = b - 2 * (T !== 0 || R !== 0 ? T + R : Zt(d.left, d.right)) : N = m - 2 * (I !== 0 || W !== 0 ? I + W : Zt(d.top, d.bottom));
      }
      await l({
        ...n,
        availableWidth: E,
        availableHeight: N
      });
      const O = await s.getDimensions(c.floating);
      return b !== O.width || m !== O.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function wr(e) {
  return Qp(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Xt(e) {
  var n;
  return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Gn(e) {
  var n;
  return (n = (Qp(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement;
}
function Qp(e) {
  return e instanceof Node || e instanceof Xt(e).Node;
}
function Hn(e) {
  return e instanceof Element || e instanceof Xt(e).Element;
}
function Dn(e) {
  return e instanceof HTMLElement || e instanceof Xt(e).HTMLElement;
}
function uh(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Xt(e).ShadowRoot;
}
function mi(e) {
  const {
    overflow: n,
    overflowX: r,
    overflowY: i,
    display: s
  } = dn(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + i + r) && !["inline", "contents"].includes(s);
}
function dN(e) {
  return ["table", "td", "th"].includes(wr(e));
}
function Tl(e) {
  const n = Il(), r = dn(e);
  return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !n && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !n && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((i) => (r.willChange || "").includes(i)) || ["paint", "layout", "strict", "content"].some((i) => (r.contain || "").includes(i));
}
function fN(e) {
  let n = ho(e);
  for (; Dn(n) && !ia(n); ) {
    if (Tl(n))
      return n;
    n = ho(n);
  }
  return null;
}
function Il() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ia(e) {
  return ["html", "body", "#document"].includes(wr(e));
}
function dn(e) {
  return Xt(e).getComputedStyle(e);
}
function sa(e) {
  return Hn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function ho(e) {
  if (wr(e) === "html")
    return e;
  const n = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    uh(e) && e.host || // Fallback.
    Gn(e)
  );
  return uh(n) ? n.host : n;
}
function eg(e) {
  const n = ho(e);
  return ia(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : Dn(n) && mi(n) ? n : eg(n);
}
function ks(e, n) {
  var r;
  n === void 0 && (n = []);
  const i = eg(e), s = i === ((r = e.ownerDocument) == null ? void 0 : r.body), c = Xt(i);
  return s ? n.concat(c, c.visualViewport || [], mi(i) ? i : []) : n.concat(i, ks(i));
}
function tg(e) {
  const n = dn(e);
  let r = parseFloat(n.width) || 0, i = parseFloat(n.height) || 0;
  const s = Dn(e), c = s ? e.offsetWidth : r, l = s ? e.offsetHeight : i, u = As(r) !== c || As(i) !== l;
  return u && (r = c, i = l), {
    width: r,
    height: i,
    $: u
  };
}
function kl(e) {
  return Hn(e) ? e : e.contextElement;
}
function co(e) {
  const n = kl(e);
  if (!Dn(n))
    return mr(1);
  const r = n.getBoundingClientRect(), {
    width: i,
    height: s,
    $: c
  } = tg(n);
  let l = (c ? As(r.width) : r.width) / i, u = (c ? As(r.height) : r.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: l,
    y: u
  };
}
const hN = /* @__PURE__ */ mr(0);
function ng(e) {
  const n = Xt(e);
  return !Il() || !n.visualViewport ? hN : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function pN(e, n, r) {
  return n === void 0 && (n = !1), !r || n && r !== Xt(e) ? !1 : n;
}
function kr(e, n, r, i) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  const s = e.getBoundingClientRect(), c = kl(e);
  let l = mr(1);
  n && (i ? Hn(i) && (l = co(i)) : l = co(e));
  const u = pN(c, r, i) ? ng(c) : mr(0);
  let d = (s.left + u.x) / l.x, h = (s.top + u.y) / l.y, v = s.width / l.x, g = s.height / l.y;
  if (c) {
    const b = Xt(c), m = i && Hn(i) ? Xt(i) : i;
    let C = b.frameElement;
    for (; C && i && m !== b; ) {
      const p = co(C), y = C.getBoundingClientRect(), x = dn(C), D = y.left + (C.clientLeft + parseFloat(x.paddingLeft)) * p.x, N = y.top + (C.clientTop + parseFloat(x.paddingTop)) * p.y;
      d *= p.x, h *= p.y, v *= p.x, g *= p.y, d += D, h += N, C = Xt(C).frameElement;
    }
  }
  return Is({
    width: v,
    height: g,
    x: d,
    y: h
  });
}
function gN(e) {
  let {
    rect: n,
    offsetParent: r,
    strategy: i
  } = e;
  const s = Dn(r), c = Gn(r);
  if (r === c)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = mr(1);
  const d = mr(0);
  if ((s || !s && i !== "fixed") && ((wr(r) !== "body" || mi(c)) && (l = sa(r)), Dn(r))) {
    const h = kr(r);
    u = co(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y
  };
}
function vN(e) {
  return Array.from(e.getClientRects());
}
function rg(e) {
  return kr(Gn(e)).left + sa(e).scrollLeft;
}
function mN(e) {
  const n = Gn(e), r = sa(e), i = e.ownerDocument.body, s = Zt(n.scrollWidth, n.clientWidth, i.scrollWidth, i.clientWidth), c = Zt(n.scrollHeight, n.clientHeight, i.scrollHeight, i.clientHeight);
  let l = -r.scrollLeft + rg(e);
  const u = -r.scrollTop;
  return dn(i).direction === "rtl" && (l += Zt(n.clientWidth, i.clientWidth) - s), {
    width: s,
    height: c,
    x: l,
    y: u
  };
}
function wN(e, n) {
  const r = Xt(e), i = Gn(e), s = r.visualViewport;
  let c = i.clientWidth, l = i.clientHeight, u = 0, d = 0;
  if (s) {
    c = s.width, l = s.height;
    const h = Il();
    (!h || h && n === "fixed") && (u = s.offsetLeft, d = s.offsetTop);
  }
  return {
    width: c,
    height: l,
    x: u,
    y: d
  };
}
function bN(e, n) {
  const r = kr(e, !0, n === "fixed"), i = r.top + e.clientTop, s = r.left + e.clientLeft, c = Dn(e) ? co(e) : mr(1), l = e.clientWidth * c.x, u = e.clientHeight * c.y, d = s * c.x, h = i * c.y;
  return {
    width: l,
    height: u,
    x: d,
    y: h
  };
}
function dh(e, n, r) {
  let i;
  if (n === "viewport")
    i = wN(e, r);
  else if (n === "document")
    i = mN(Gn(e));
  else if (Hn(n))
    i = bN(n, r);
  else {
    const s = ng(e);
    i = {
      ...n,
      x: n.x - s.x,
      y: n.y - s.y
    };
  }
  return Is(i);
}
function og(e, n) {
  const r = ho(e);
  return r === n || !Hn(r) || ia(r) ? !1 : dn(r).position === "fixed" || og(r, n);
}
function yN(e, n) {
  const r = n.get(e);
  if (r)
    return r;
  let i = ks(e).filter((u) => Hn(u) && wr(u) !== "body"), s = null;
  const c = dn(e).position === "fixed";
  let l = c ? ho(e) : e;
  for (; Hn(l) && !ia(l); ) {
    const u = dn(l), d = Tl(l);
    !d && u.position === "fixed" && (s = null), (c ? !d && !s : !d && u.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || mi(l) && !d && og(e, l)) ? i = i.filter((v) => v !== l) : s = u, l = ho(l);
  }
  return n.set(e, i), i;
}
function xN(e) {
  let {
    element: n,
    boundary: r,
    rootBoundary: i,
    strategy: s
  } = e;
  const l = [...r === "clippingAncestors" ? yN(n, this._c) : [].concat(r), i], u = l[0], d = l.reduce((h, v) => {
    const g = dh(n, v, s);
    return h.top = Zt(g.top, h.top), h.right = vr(g.right, h.right), h.bottom = vr(g.bottom, h.bottom), h.left = Zt(g.left, h.left), h;
  }, dh(n, u, s));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function CN(e) {
  return tg(e);
}
function $N(e, n, r) {
  const i = Dn(n), s = Gn(n), c = r === "fixed", l = kr(e, !0, c, n);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = mr(0);
  if (i || !i && !c)
    if ((wr(n) !== "body" || mi(s)) && (u = sa(n)), i) {
      const h = kr(n, !0, c, n);
      d.x = h.x + n.clientLeft, d.y = h.y + n.clientTop;
    } else
      s && (d.x = rg(s));
  return {
    x: l.left + u.scrollLeft - d.x,
    y: l.top + u.scrollTop - d.y,
    width: l.width,
    height: l.height
  };
}
function fh(e, n) {
  return !Dn(e) || dn(e).position === "fixed" ? null : n ? n(e) : e.offsetParent;
}
function ig(e, n) {
  const r = Xt(e);
  if (!Dn(e))
    return r;
  let i = fh(e, n);
  for (; i && dN(i) && dn(i).position === "static"; )
    i = fh(i, n);
  return i && (wr(i) === "html" || wr(i) === "body" && dn(i).position === "static" && !Tl(i)) ? r : i || fN(e) || r;
}
const NN = async function(e) {
  let {
    reference: n,
    floating: r,
    strategy: i
  } = e;
  const s = this.getOffsetParent || ig, c = this.getDimensions;
  return {
    reference: $N(n, await s(r), i),
    floating: {
      x: 0,
      y: 0,
      ...await c(r)
    }
  };
};
function SN(e) {
  return dn(e).direction === "rtl";
}
const EN = {
  convertOffsetParentRelativeRectToViewportRelativeRect: gN,
  getDocumentElement: Gn,
  getClippingRect: xN,
  getOffsetParent: ig,
  getElementRects: NN,
  getClientRects: vN,
  getDimensions: CN,
  getScale: co,
  isElement: Hn,
  isRTL: SN
};
function DN(e, n) {
  let r = null, i;
  const s = Gn(e);
  function c() {
    clearTimeout(i), r && r.disconnect(), r = null;
  }
  function l(u, d) {
    u === void 0 && (u = !1), d === void 0 && (d = 1), c();
    const {
      left: h,
      top: v,
      width: g,
      height: b
    } = e.getBoundingClientRect();
    if (u || n(), !g || !b)
      return;
    const m = $s(v), C = $s(s.clientWidth - (h + g)), p = $s(s.clientHeight - (v + b)), y = $s(h), D = {
      rootMargin: -m + "px " + -C + "px " + -p + "px " + -y + "px",
      threshold: Zt(0, vr(1, d)) || 1
    };
    let N = !0;
    function E(O) {
      const T = O[0].intersectionRatio;
      if (T !== d) {
        if (!N)
          return l();
        T ? l(!1, T) : i = setTimeout(() => {
          l(!1, 1e-7);
        }, 100);
      }
      N = !1;
    }
    try {
      r = new IntersectionObserver(E, {
        ...D,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(E, D);
    }
    r.observe(e);
  }
  return l(!0), c;
}
function _N(e, n, r, i) {
  i === void 0 && (i = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: c = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = i, h = kl(e), v = s || c ? [...h ? ks(h) : [], ...ks(n)] : [];
  v.forEach((x) => {
    s && x.addEventListener("scroll", r, {
      passive: !0
    }), c && x.addEventListener("resize", r);
  });
  const g = h && u ? DN(h, r) : null;
  let b = -1, m = null;
  l && (m = new ResizeObserver((x) => {
    let [D] = x;
    D && D.target === h && m && (m.unobserve(n), cancelAnimationFrame(b), b = requestAnimationFrame(() => {
      m && m.observe(n);
    })), r();
  }), h && !d && m.observe(h), m.observe(n));
  let C, p = d ? kr(e) : null;
  d && y();
  function y() {
    const x = kr(e);
    p && (x.x !== p.x || x.y !== p.y || x.width !== p.width || x.height !== p.height) && r(), p = x, C = requestAnimationFrame(y);
  }
  return r(), () => {
    v.forEach((x) => {
      s && x.removeEventListener("scroll", r), c && x.removeEventListener("resize", r);
    }), g && g(), m && m.disconnect(), m = null, d && cancelAnimationFrame(C);
  };
}
const PN = (e, n, r) => {
  const i = /* @__PURE__ */ new Map(), s = {
    platform: EN,
    ...r
  }, c = {
    ...s.platform,
    _c: i
  };
  return rN(e, n, {
    ...s,
    platform: c
  });
}, ON = (e) => {
  function n(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(r) {
      const {
        element: i,
        padding: s
      } = typeof e == "function" ? e(r) : e;
      return i && n(i) ? i.current != null ? ah({
        element: i.current,
        padding: s
      }).fn(r) : {} : i ? ah({
        element: i,
        padding: s
      }).fn(r) : {};
    }
  };
};
var _s = typeof document < "u" ? Vs : se;
function Ms(e, n) {
  if (e === n)
    return !0;
  if (typeof e != typeof n)
    return !1;
  if (typeof e == "function" && e.toString() === n.toString())
    return !0;
  let r, i, s;
  if (e && n && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r != n.length)
        return !1;
      for (i = r; i-- !== 0; )
        if (!Ms(e[i], n[i]))
          return !1;
      return !0;
    }
    if (s = Object.keys(e), r = s.length, r !== Object.keys(n).length)
      return !1;
    for (i = r; i-- !== 0; )
      if (!{}.hasOwnProperty.call(n, s[i]))
        return !1;
    for (i = r; i-- !== 0; ) {
      const c = s[i];
      if (!(c === "_owner" && e.$$typeof) && !Ms(e[c], n[c]))
        return !1;
    }
    return !0;
  }
  return e !== e && n !== n;
}
function sg(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function hh(e, n) {
  const r = sg(e);
  return Math.round(n * r) / r;
}
function ph(e) {
  const n = M.useRef(e);
  return _s(() => {
    n.current = e;
  }), n;
}
function RN(e) {
  e === void 0 && (e = {});
  const {
    placement: n = "bottom",
    strategy: r = "absolute",
    middleware: i = [],
    platform: s,
    elements: {
      reference: c,
      floating: l
    } = {},
    transform: u = !0,
    whileElementsMounted: d,
    open: h
  } = e, [v, g] = M.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: n,
    middlewareData: {},
    isPositioned: !1
  }), [b, m] = M.useState(i);
  Ms(b, i) || m(i);
  const [C, p] = M.useState(null), [y, x] = M.useState(null), D = M.useCallback((oe) => {
    oe != T.current && (T.current = oe, p(oe));
  }, [p]), N = M.useCallback((oe) => {
    oe !== R.current && (R.current = oe, x(oe));
  }, [x]), E = c || C, O = l || y, T = M.useRef(null), R = M.useRef(null), I = M.useRef(v), W = ph(d), K = ph(s), j = M.useCallback(() => {
    if (!T.current || !R.current)
      return;
    const oe = {
      placement: n,
      strategy: r,
      middleware: b
    };
    K.current && (oe.platform = K.current), PN(T.current, R.current, oe).then((ue) => {
      const ve = {
        ...ue,
        isPositioned: !0
      };
      X.current && !Ms(I.current, ve) && (I.current = ve, xx.flushSync(() => {
        g(ve);
      }));
    });
  }, [b, n, r, K]);
  _s(() => {
    h === !1 && I.current.isPositioned && (I.current.isPositioned = !1, g((oe) => ({
      ...oe,
      isPositioned: !1
    })));
  }, [h]);
  const X = M.useRef(!1);
  _s(() => (X.current = !0, () => {
    X.current = !1;
  }), []), _s(() => {
    if (E && (T.current = E), O && (R.current = O), E && O) {
      if (W.current)
        return W.current(E, O, j);
      j();
    }
  }, [E, O, j, W]);
  const ae = M.useMemo(() => ({
    reference: T,
    floating: R,
    setReference: D,
    setFloating: N
  }), [D, N]), Z = M.useMemo(() => ({
    reference: E,
    floating: O
  }), [E, O]), ne = M.useMemo(() => {
    const oe = {
      position: r,
      left: 0,
      top: 0
    };
    if (!Z.floating)
      return oe;
    const ue = hh(Z.floating, v.x), ve = hh(Z.floating, v.y);
    return u ? {
      ...oe,
      transform: "translate(" + ue + "px, " + ve + "px)",
      ...sg(Z.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: ue,
      top: ve
    };
  }, [r, u, Z.floating, v.x, v.y]);
  return M.useMemo(() => ({
    ...v,
    update: j,
    refs: ae,
    elements: Z,
    floatingStyles: ne
  }), [v, j, ae, Z, ne]);
}
function ag(e) {
  const [n, r] = me(void 0);
  return uo(() => {
    if (e) {
      r({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const i = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const c = s[0];
        let l, u;
        if ("borderBoxSize" in c) {
          const d = c.borderBoxSize, h = Array.isArray(d) ? d[0] : d;
          l = h.inlineSize, u = h.blockSize;
        } else
          l = e.offsetWidth, u = e.offsetHeight;
        r({
          width: l,
          height: u
        });
      });
      return i.observe(e, {
        box: "border-box"
      }), () => i.unobserve(e);
    } else
      r(void 0);
  }, [
    e
  ]), n;
}
const cg = "Popper", [lg, ug] = ci(cg), [AN, dg] = lg(cg), TN = (e) => {
  const { __scopePopper: n, children: r } = e, [i, s] = me(null);
  return /* @__PURE__ */ U(AN, {
    scope: n,
    anchor: i,
    onAnchorChange: s
  }, r);
}, IN = "PopperAnchor", kN = /* @__PURE__ */ le((e, n) => {
  const { __scopePopper: r, virtualRef: i, ...s } = e, c = dg(IN, r), l = J(null), u = mt(n, l);
  return se(() => {
    c.onAnchorChange((i == null ? void 0 : i.current) || l.current);
  }), i ? null : /* @__PURE__ */ U($t.div, fe({}, s, {
    ref: u
  }));
}), fg = "PopperContent", [MN, mS] = lg(fg), LN = /* @__PURE__ */ le((e, n) => {
  var r, i, s, c, l, u, d, h;
  const { __scopePopper: v, side: g = "bottom", sideOffset: b = 0, align: m = "center", alignOffset: C = 0, arrowPadding: p = 0, avoidCollisions: y = !0, collisionBoundary: x = [], collisionPadding: D = 0, sticky: N = "partial", hideWhenDetached: E = !1, updatePositionStrategy: O = "optimized", onPlaced: T, ...R } = e, I = dg(fg, v), [W, K] = me(null), j = mt(
    n,
    (Ie) => K(Ie)
  ), [X, ae] = me(null), Z = ag(X), ne = (r = Z == null ? void 0 : Z.width) !== null && r !== void 0 ? r : 0, oe = (i = Z == null ? void 0 : Z.height) !== null && i !== void 0 ? i : 0, ue = g + (m !== "center" ? "-" + m : ""), ve = typeof D == "number" ? D : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...D
  }, V = Array.isArray(x) ? x : [
    x
  ], ee = V.length > 0, te = {
    padding: ve,
    boundary: V.filter(FN),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: ee
  }, { refs: re, floatingStyles: de, placement: Te, isPositioned: Oe, middlewareData: $e } = RN({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: ue,
    whileElementsMounted: (...Ie) => _N(...Ie, {
      animationFrame: O === "always"
    }),
    elements: {
      reference: I.anchor
    },
    middleware: [
      aN({
        mainAxis: b + oe,
        alignmentAxis: C
      }),
      y && cN({
        mainAxis: !0,
        crossAxis: !1,
        limiter: N === "partial" ? lN() : void 0,
        ...te
      }),
      y && oN({
        ...te
      }),
      uN({
        ...te,
        apply: ({ elements: Ie, rects: Pt, availableWidth: yt, availableHeight: pn }) => {
          const { width: Cn, height: ht } = Pt.reference, tt = Ie.floating.style;
          tt.setProperty("--radix-popper-available-width", `${yt}px`), tt.setProperty("--radix-popper-available-height", `${pn}px`), tt.setProperty("--radix-popper-anchor-width", `${Cn}px`), tt.setProperty("--radix-popper-anchor-height", `${ht}px`);
        }
      }),
      X && ON({
        element: X,
        padding: p
      }),
      WN({
        arrowWidth: ne,
        arrowHeight: oe
      }),
      E && iN({
        strategy: "referenceHidden",
        ...te
      })
    ]
  }), [Be, et] = hg(Te), G = un(T);
  uo(() => {
    Oe && (G == null || G());
  }, [
    Oe,
    G
  ]);
  const ft = (s = $e.arrow) === null || s === void 0 ? void 0 : s.x, ye = (c = $e.arrow) === null || c === void 0 ? void 0 : c.y, rt = ((l = $e.arrow) === null || l === void 0 ? void 0 : l.centerOffset) !== 0, [_t, qe] = me();
  return uo(() => {
    W && qe(window.getComputedStyle(W).zIndex);
  }, [
    W
  ]), /* @__PURE__ */ U("div", {
    ref: re.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...de,
      transform: Oe ? de.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: _t,
      "--radix-popper-transform-origin": [
        (u = $e.transformOrigin) === null || u === void 0 ? void 0 : u.x,
        (d = $e.transformOrigin) === null || d === void 0 ? void 0 : d.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ U(MN, {
    scope: v,
    placedSide: Be,
    onArrowChange: ae,
    arrowX: ft,
    arrowY: ye,
    shouldHideArrow: rt
  }, /* @__PURE__ */ U($t.div, fe({
    "data-side": Be,
    "data-align": et
  }, R, {
    ref: j,
    style: {
      ...R.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: Oe ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (h = $e.hide) !== null && h !== void 0 && h.referenceHidden ? 0 : void 0
    }
  }))));
});
function FN(e) {
  return e !== null;
}
const WN = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(n) {
    var r, i, s, c, l;
    const { placement: u, rects: d, middlewareData: h } = n, g = ((r = h.arrow) === null || r === void 0 ? void 0 : r.centerOffset) !== 0, b = g ? 0 : e.arrowWidth, m = g ? 0 : e.arrowHeight, [C, p] = hg(u), y = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[p], x = ((i = (s = h.arrow) === null || s === void 0 ? void 0 : s.x) !== null && i !== void 0 ? i : 0) + b / 2, D = ((c = (l = h.arrow) === null || l === void 0 ? void 0 : l.y) !== null && c !== void 0 ? c : 0) + m / 2;
    let N = "", E = "";
    return C === "bottom" ? (N = g ? y : `${x}px`, E = `${-m}px`) : C === "top" ? (N = g ? y : `${x}px`, E = `${d.floating.height + m}px`) : C === "right" ? (N = `${-m}px`, E = g ? y : `${D}px`) : C === "left" && (N = `${d.floating.width + m}px`, E = g ? y : `${D}px`), {
      data: {
        x: N,
        y: E
      }
    };
  }
});
function hg(e) {
  const [n, r = "center"] = e.split("-");
  return [
    n,
    r
  ];
}
const BN = TN, UN = kN, zN = LN, HN = /* @__PURE__ */ le((e, n) => {
  var r;
  const { container: i = globalThis == null || (r = globalThis.document) === null || r === void 0 ? void 0 : r.body, ...s } = e;
  return i ? /* @__PURE__ */ gl.createPortal(/* @__PURE__ */ U($t.div, fe({}, s, {
    ref: n
  })), i) : null;
}), pg = "Popover", [gg, wS] = ci(pg, [
  ug
]), Ml = ug(), [VN, Co] = gg(pg), GN = (e) => {
  const { __scopePopover: n, children: r, open: i, defaultOpen: s, onOpenChange: c, modal: l = !1 } = e, u = Ml(n), d = J(null), [h, v] = me(!1), [g = !1, b] = wl({
    prop: i,
    defaultProp: s,
    onChange: c
  });
  return /* @__PURE__ */ U(BN, u, /* @__PURE__ */ U(VN, {
    scope: n,
    contentId: Ds(),
    triggerRef: d,
    open: g,
    onOpenChange: b,
    onOpenToggle: He(
      () => b(
        (m) => !m
      ),
      [
        b
      ]
    ),
    hasCustomAnchor: h,
    onCustomAnchorAdd: He(
      () => v(!0),
      []
    ),
    onCustomAnchorRemove: He(
      () => v(!1),
      []
    ),
    modal: l
  }, r));
}, KN = "PopoverTrigger", YN = /* @__PURE__ */ le((e, n) => {
  const { __scopePopover: r, ...i } = e, s = Co(KN, r), c = Ml(r), l = mt(n, s.triggerRef), u = /* @__PURE__ */ U($t.button, fe({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": s.open,
    "aria-controls": s.contentId,
    "data-state": wg(s.open)
  }, i, {
    ref: l,
    onClick: ut(e.onClick, s.onOpenToggle)
  }));
  return s.hasCustomAnchor ? u : /* @__PURE__ */ U(UN, fe({
    asChild: !0
  }, c), u);
}), vg = "PopoverPortal", [qN, ZN] = gg(vg, {
  forceMount: void 0
}), XN = (e) => {
  const { __scopePopover: n, forceMount: r, children: i, container: s } = e, c = Co(vg, n);
  return /* @__PURE__ */ U(qN, {
    scope: n,
    forceMount: r
  }, /* @__PURE__ */ U(go, {
    present: r || c.open
  }, /* @__PURE__ */ U(HN, {
    asChild: !0,
    container: s
  }, i)));
}, ii = "PopoverContent", jN = /* @__PURE__ */ le((e, n) => {
  const r = ZN(ii, e.__scopePopover), { forceMount: i = r.forceMount, ...s } = e, c = Co(ii, e.__scopePopover);
  return /* @__PURE__ */ U(go, {
    present: i || c.open
  }, c.modal ? /* @__PURE__ */ U(JN, fe({}, s, {
    ref: n
  })) : /* @__PURE__ */ U(QN, fe({}, s, {
    ref: n
  })));
}), JN = /* @__PURE__ */ le((e, n) => {
  const r = Co(ii, e.__scopePopover), i = J(null), s = mt(n, i), c = J(!1);
  return se(() => {
    const l = i.current;
    if (l)
      return xl(l);
  }, []), /* @__PURE__ */ U(hp, {
    as: gr,
    allowPinchZoom: !0
  }, /* @__PURE__ */ U(mg, fe({}, e, {
    ref: s,
    trapFocus: r.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: ut(e.onCloseAutoFocus, (l) => {
      var u;
      l.preventDefault(), c.current || (u = r.triggerRef.current) === null || u === void 0 || u.focus();
    }),
    onPointerDownOutside: ut(e.onPointerDownOutside, (l) => {
      const u = l.detail.originalEvent, d = u.button === 0 && u.ctrlKey === !0, h = u.button === 2 || d;
      c.current = h;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: ut(
      e.onFocusOutside,
      (l) => l.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), QN = /* @__PURE__ */ le((e, n) => {
  const r = Co(ii, e.__scopePopover), i = J(!1), s = J(!1);
  return /* @__PURE__ */ U(mg, fe({}, e, {
    ref: n,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (c) => {
      var l;
      if ((l = e.onCloseAutoFocus) === null || l === void 0 || l.call(e, c), !c.defaultPrevented) {
        var u;
        i.current || (u = r.triggerRef.current) === null || u === void 0 || u.focus(), c.preventDefault();
      }
      i.current = !1, s.current = !1;
    },
    onInteractOutside: (c) => {
      var l, u;
      (l = e.onInteractOutside) === null || l === void 0 || l.call(e, c), c.defaultPrevented || (i.current = !0, c.detail.originalEvent.type === "pointerdown" && (s.current = !0));
      const d = c.target;
      ((u = r.triggerRef.current) === null || u === void 0 ? void 0 : u.contains(d)) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && s.current && c.preventDefault();
    }
  }));
}), mg = /* @__PURE__ */ le((e, n) => {
  const { __scopePopover: r, trapFocus: i, onOpenAutoFocus: s, onCloseAutoFocus: c, disableOutsidePointerEvents: l, onEscapeKeyDown: u, onPointerDownOutside: d, onFocusOutside: h, onInteractOutside: v, ...g } = e, b = Co(ii, r), m = Ml(r);
  return tp(), /* @__PURE__ */ U(z5, {
    asChild: !0,
    loop: !0,
    trapped: i,
    onMountAutoFocus: s,
    onUnmountAutoFocus: c
  }, /* @__PURE__ */ U(W5, {
    asChild: !0,
    disableOutsidePointerEvents: l,
    onInteractOutside: v,
    onEscapeKeyDown: u,
    onPointerDownOutside: d,
    onFocusOutside: h,
    onDismiss: () => b.onOpenChange(!1)
  }, /* @__PURE__ */ U(zN, fe({
    "data-state": wg(b.open),
    role: "dialog",
    id: b.contentId
  }, m, g, {
    ref: n,
    style: {
      ...g.style,
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }))));
});
function wg(e) {
  return e ? "open" : "closed";
}
const e3 = GN, t3 = YN, n3 = XN, bg = jN, aa = e3, ca = t3, wi = M.forwardRef(({ className: e, align: n = "center", sideOffset: r = 4, ...i }, s) => /* @__PURE__ */ _(n3, { children: /* @__PURE__ */ _(
  bg,
  {
    ref: s,
    align: n,
    sideOffset: r,
    className: Ye(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...i
  }
) }));
wi.displayName = bg.displayName;
const r3 = ({
  value: e,
  onChange: n,
  onFocus: r,
  onClick: i,
  onKeyDown: s,
  onKeyUp: c,
  style: l,
  className: u,
  disabled: d,
  autoFocus: h,
  placeholder: v,
  focusChar: g,
  ...b
}) => {
  const m = J(null);
  se(() => {
    h && m.current && (console.log("here", g, h), m.current.focus());
  }, [h]);
  const C = () => {
    if (console.log("input", m.current), !m.current)
      return;
    const O = gh(m.current);
    console.log("updateInput", O), n(e || "", O), o3(m.current, O);
  }, p = (O) => {
    C();
  }, y = (O) => {
    if (!m.current)
      return;
    const T = gh(m.current);
    r && r(T);
  };
  se(() => {
    m.current && (e === void 0 ? m.current.innerText = "" : m.current.innerText = e);
  }, [e]);
  const x = (O) => {
    e !== void 0 && C();
  };
  se(() => {
    m.current && (e ? m.current.innerText = e : m.current.innerText = "");
  }, [e]);
  const D = (O) => {
    s && s(O);
  }, N = (O) => {
    c && c(O);
  }, E = (m == null ? void 0 : m.current) === document.activeElement;
  return /* @__PURE__ */ q(
    "div",
    {
      ref: m,
      contentEditable: !d,
      autoFocus: h,
      placeholder: v,
      className: `h-full w-full border-none ${e ? "text-white" : "text-white/50"} ${u}`,
      style: {
        ...l,
        position: "relative"
      },
      onInput: x,
      onFocus: y,
      onBlur: p,
      onClick: i,
      onKeyDown: D,
      onKeyUp: N,
      ...b,
      suppressContentEditableWarning: !0,
      children: [
        e || "",
        !e && !E && /* @__PURE__ */ _("span", { children: v })
      ]
    }
  );
}, gh = (e) => {
  var u;
  const n = window.getSelection();
  if (!n || n.rangeCount === 0)
    return console.warn("selection is null or rangeCount is 0"), 0;
  let r = 0;
  const i = n.getRangeAt(0), s = i.cloneRange();
  s.selectNodeContents(e), s.setEnd(i.endContainer, i.endOffset);
  const c = document.createNodeIterator(
    e,
    NodeFilter.SHOW_TEXT,
    null
  );
  let l;
  for (; l = c.nextNode(); )
    if (l === i.endContainer) {
      r += i.endOffset;
      break;
    } else
      r += ((u = l.textContent) == null ? void 0 : u.length) ?? 0;
  return r;
}, o3 = (e, n) => {
  var u;
  const r = document.createRange(), i = window.getSelection(), s = document.createNodeIterator(
    e,
    NodeFilter.SHOW_TEXT,
    null
  );
  let c, l = 0;
  for (; c = s.nextNode(); ) {
    const d = ((u = c.textContent) == null ? void 0 : u.length) ?? 0;
    if (l + d >= n) {
      r.setStart(c, n - l), r.collapse(!0), i == null || i.removeAllRanges(), i == null || i.addRange(r);
      return;
    }
    l += d;
  }
  r.setStart(e, e.childNodes.length), r.collapse(!0), i == null || i.removeAllRanges(), i == null || i.addRange(r);
};
function i3({
  values: e,
  searchMessage: n = "Search...",
  selectMessage: r = "Select...",
  emptyMessage: i = "No results",
  defaultValue: s,
  selectedIndex: c,
  handleTextEdit: l,
  isDragging: u,
  draggingOver: d,
  draggingOn: h,
  handleChange: v,
  addYoungerSibling: g,
  moveLeft: b,
  moveRight: m,
  moveUp: C,
  moveDown: p,
  moveFocusUp: y,
  moveFocusDown: x,
  deleteOption: D,
  deleteRow: N,
  addOption: E,
  handleUndo: O,
  handleRedo: T,
  toggleCollapse: R,
  variant: I = "default",
  hasFocus: W,
  focusChar: K,
  setFocus: j,
  suggestOption: X,
  locked: ae,
  ...Z
}) {
  var Be, et;
  const [ne, oe] = M.useState(!1), [ue, ve] = M.useState(s);
  M.useEffect(() => {
    if (c !== void 0) {
      if (e.length < 1)
        throw new Error("values.length < 1");
      ve(c.toString() || s || "0");
    }
  }, [c]);
  const V = (Be = e.find((G) => G.value === ue)) == null ? void 0 : Be.label, ee = (G, ft) => {
    if (!ae)
      return l(G, ft), !1;
  }, te = (G) => {
    if (ae) {
      G.preventDefault(), G.stopPropagation();
      return;
    }
    G.key === " " && G.stopPropagation(), G.key === "ArrowUp" && G.ctrlKey && G.stopPropagation(), G.key === "Enter" && (console.log("trying to prevent default"), G.preventDefault(), G.stopPropagation());
  }, re = (G) => {
    if (ae) {
      G.preventDefault(), G.stopPropagation();
      return;
    }
    if (G.key === "Enter" && (G.altKey ? E() : (console.log("addYoungerSibling - comboboxEditable"), g())), (G.key === "z" || G.key === "Z") && G.ctrlKey && (G.shiftKey ? (G.preventDefault(), T(), G.stopPropagation()) : (G.preventDefault(), O(), G.stopPropagation())), G.key === "ArrowUp") {
      if (G.altKey && G.ctrlKey)
        console.log("test", ue, e.length, (parseInt(ue || "0") - 1 + e.length) % e.length), v(ue ? ((parseInt(ue) - 1 + e.length) % e.length).toString() : "0");
      else if (!G.ctrlKey && !G.shiftKey && !G.metaKey && !G.altKey) {
        y(), G.preventDefault(), G.stopPropagation();
        return;
      }
    }
    if (G.key === "ArrowDown") {
      if (G.altKey && G.ctrlKey)
        v(ue ? ((parseInt(ue) + 1) % e.length).toString() : "0");
      else if (!G.ctrlKey && !G.shiftKey && !G.metaKey && !G.altKey) {
        G.preventDefault(), G.stopPropagation(), x();
        return;
      }
    }
    G.key === "ArrowRight" && G.altKey && G.ctrlKey && m(), G.key === "ArrowLeft" && G.altKey && G.ctrlKey && b(), G.key === " " && G.ctrlKey && R(), G.key === "Backspace" && !V && (console.log("deleteRow - comboboxEditable", V), N());
  }, de = (G) => {
    ae || D(G);
  }, Te = d ? {
    // backgroundColor: 'rgba(230, 220, 200, .03)',
  } : {}, Oe = h ? {
    backgroundColor: "rgba(230, 220, 200, .07)",
    border: "1px solid rgba(230, 220, 200, .3)"
    // transform: 'scale(1.05)',
  } : {}, $e = u ? {
    backgroundColor: "rgba(230, 220, 200, .03)",
    opacity: "0.5"
  } : {};
  return /* @__PURE__ */ q(aa, { open: ne, onOpenChange: oe, children: [
    /* @__PURE__ */ _(ca, { asChild: !0, children: /* @__PURE__ */ q(
      "div",
      {
        style: {
          position: "relative",
          opacity: 1,
          height: "auto",
          ...Oe,
          ...Te,
          display: "grid",
          gridTemplateColumns: "1fr .25rem",
          width: "calc(100% - 2rem)"
        },
        role: "combobox",
        className: " ",
        children: [
          /* @__PURE__ */ _(
            r3,
            {
              disabled: ae,
              autoFocus: W,
              placeholder: e.length > 1 ? "New Option" : "Enter a task to plan",
              className: "rounded-r-none w-full cursor-text",
              value: ue ? (et = e.find((G) => G.value === ue)) == null ? void 0 : et.label : r,
              style: {
                width: "calc(100% - 1.25rem)",
                fontSize: "1rem",
                fontWeight: "normal",
                height: "auto",
                // ...dropStyle,
                // ...dropOnStyle,
                ...$e
              },
              onChange: ee,
              onClick: (G) => {
                G.stopPropagation();
              },
              onKeyDown: te,
              onKeyUp: re,
              onFocus: (G) => j(G),
              focusChar: K
            }
          ),
          /* @__PURE__ */ _(
            "div",
            {
              className: "flex w-5 justify-center items-center flex p-0",
              "aria-expanded": ne,
              children: /* @__PURE__ */ _(Ks, { className: `h-4 ${e.length > 1 ? "text-teal-100/80" : "opacity-80 fill-white"}`, style: {
                padding: "0px 0px 0px 0px"
              } })
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ _(wi, { className: "w-[200px] p-0", children: /* @__PURE__ */ q(pi, { children: [
      /* @__PURE__ */ _(gi, { children: i }),
      /* @__PURE__ */ _(Ir, { children: e.map((G, ft) => /* @__PURE__ */ q(
        vi,
        {
          value: G.value,
          onSelect: (ye) => {
            ve(ye === ue ? ue : ye), v(ye), oe(!1);
          },
          children: [
            G.label || /* @__PURE__ */ _("span", { className: "opacity-50", children: "New Option" }),
            /* @__PURE__ */ _(
              Ys,
              {
                className: Ye(
                  "ml-auto h-4 w-4",
                  ue === G.value ? "opacity-100" : "opacity-0"
                )
              }
            ),
            e.length > 1 && ue !== G.value && /* @__PURE__ */ _("div", { children: /* @__PURE__ */ _(
              Zh,
              {
                className: "h-4 w-4 opacity-50 hover:opacity-100 cursor-pointer",
                color: "rgba(200, 100, 100, .7)",
                onClick: (ye) => {
                  ye.stopPropagation(), de(ft);
                }
              }
            ) })
          ]
        },
        G.value
      )) }),
      /* @__PURE__ */ _(Ir, { children: /* @__PURE__ */ q("div", { className: "grid grid-cols-2 place-content-stretch gap-1", children: [
        /* @__PURE__ */ _("div", { className: "", children: /* @__PURE__ */ _(
          Se,
          {
            onClick: () => {
              E(), oe(!1);
            },
            className: "justify-center bg-gray-100/30 text-gray-900 hover:bg-gray-200 h-10 w-full",
            children: /* @__PURE__ */ _(qh, { className: "h-4" })
          }
        ) }),
        /* @__PURE__ */ _("div", { className: "", children: /* @__PURE__ */ _(
          Se,
          {
            onClick: () => {
              X(), oe(!1);
            },
            className: "bg-emerald-900 w-full",
            children: /* @__PURE__ */ _(Vn, { className: "h-4" })
          }
        ) })
      ] }) })
    ] }) })
  ] });
}
const s3 = {
  display: "none"
};
function a3(e) {
  let {
    id: n,
    value: r
  } = e;
  return Me.createElement("div", {
    id: n,
    style: s3
  }, r);
}
const c3 = {
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
function l3(e) {
  let {
    id: n,
    announcement: r
  } = e;
  return Me.createElement("div", {
    id: n,
    style: c3,
    role: "status",
    "aria-live": "assertive",
    "aria-atomic": !0
  }, r);
}
function u3() {
  const [e, n] = me("");
  return {
    announce: He((i) => {
      i != null && n(i);
    }, []),
    announcement: e
  };
}
const d3 = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, f3 = {
  onDragStart(e) {
    return `Picked up draggable item ${e}.`;
  },
  onDragOver(e, n) {
    return n ? `Draggable item ${e} was moved over droppable area ${n}.` : `Draggable item ${e} is no longer over a droppable area.`;
  },
  onDragEnd(e, n) {
    return n ? `Draggable item ${e} was dropped over droppable area ${n}` : `Draggable item ${e} was dropped.`;
  },
  onDragCancel(e) {
    return `Dragging was cancelled. Draggable item ${e} was dropped.`;
  }
};
var Ke;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(Ke || (Ke = {}));
function Ls(...e) {
}
class Xo extends Map {
  get(n) {
    var r;
    return n != null && (r = super.get(n)) != null ? r : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter(({
      disabled: n
    }) => !n);
  }
  getNodeFor(n) {
    var r, i;
    return (r = (i = this.get(n)) == null ? void 0 : i.node.current) != null ? r : void 0;
  }
}
const h3 = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: {},
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Xo(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: Ls
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measureDroppableContainers: Ls,
  windowRect: null,
  measuringScheduled: !1
}, p3 = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: Ls,
  draggableNodes: {},
  over: null,
  measureDroppableContainers: Ls
}, Ll = /* @__PURE__ */ jt(p3), g3 = /* @__PURE__ */ jt(h3);
function v3() {
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
      containers: new Xo()
    }
  };
}
function m3(e, n) {
  switch (n.type) {
    case Ke.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: n.initialCoordinates,
          active: n.active
        }
      };
    case Ke.DragMove:
      return e.draggable.active ? {
        ...e,
        draggable: {
          ...e.draggable,
          translate: {
            x: n.coordinates.x - e.draggable.initialCoordinates.x,
            y: n.coordinates.y - e.draggable.initialCoordinates.y
          }
        }
      } : e;
    case Ke.DragEnd:
    case Ke.DragCancel:
      return {
        ...e,
        draggable: {
          ...e.draggable,
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
    case Ke.RegisterDroppable: {
      const {
        element: r
      } = n, {
        id: i
      } = r, s = new Xo(e.droppable.containers);
      return s.set(i, r), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: s
        }
      };
    }
    case Ke.SetDroppableDisabled: {
      const {
        id: r,
        key: i,
        disabled: s
      } = n, c = e.droppable.containers.get(r);
      if (!c || i !== c.key)
        return e;
      const l = new Xo(e.droppable.containers);
      return l.set(r, {
        ...c,
        disabled: s
      }), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: l
        }
      };
    }
    case Ke.UnregisterDroppable: {
      const {
        id: r,
        key: i
      } = n, s = e.droppable.containers.get(r);
      if (!s || i !== s.key)
        return e;
      const c = new Xo(e.droppable.containers);
      return c.delete(r), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: c
        }
      };
    }
    default:
      return e;
  }
}
const yg = /* @__PURE__ */ jt({
  type: null,
  event: null
});
function w3({
  onDragStart: e,
  onDragMove: n,
  onDragOver: r,
  onDragEnd: i,
  onDragCancel: s
}) {
  const c = En(yg), l = J(c);
  se(() => {
    if (c !== l.current) {
      const {
        type: u,
        event: d
      } = c;
      switch (u) {
        case Ke.DragStart:
          e == null || e(d);
          break;
        case Ke.DragMove:
          n == null || n(d);
          break;
        case Ke.DragOver:
          r == null || r(d);
          break;
        case Ke.DragCancel:
          s == null || s(d);
          break;
        case Ke.DragEnd:
          i == null || i(d);
          break;
      }
      l.current = c;
    }
  }, [c, e, n, r, i, s]);
}
function b3({
  announcements: e = f3,
  hiddenTextDescribedById: n,
  screenReaderInstructions: r
}) {
  const {
    announce: i,
    announcement: s
  } = u3(), c = ta("DndLiveRegion"), [l, u] = me(!1);
  return se(() => {
    u(!0);
  }, []), w3(We(() => ({
    onDragStart({
      active: d
    }) {
      i(e.onDragStart(d.id));
    },
    onDragMove({
      active: d,
      over: h
    }) {
      e.onDragMove && i(e.onDragMove(d.id, h == null ? void 0 : h.id));
    },
    onDragOver({
      active: d,
      over: h
    }) {
      i(e.onDragOver(d.id, h == null ? void 0 : h.id));
    },
    onDragEnd({
      active: d,
      over: h
    }) {
      i(e.onDragEnd(d.id, h == null ? void 0 : h.id));
    },
    onDragCancel({
      active: d
    }) {
      i(e.onDragCancel(d.id));
    }
  }), [i, e])), l ? Cx(Me.createElement(Me.Fragment, null, Me.createElement(a3, {
    id: n,
    value: r.draggable
  }), Me.createElement(l3, {
    id: c,
    announcement: s
  })), document.body) : null;
}
const _n = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function y3(e, n) {
  return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2));
}
function x3({
  data: {
    value: e
  }
}, {
  data: {
    value: n
  }
}) {
  return e - n;
}
function C3({
  data: {
    value: e
  }
}, {
  data: {
    value: n
  }
}) {
  return n - e;
}
function vh({
  left: e,
  top: n,
  height: r,
  width: i
}) {
  return [{
    x: e,
    y: n
  }, {
    x: e + i,
    y: n
  }, {
    x: e,
    y: n + r
  }, {
    x: e + i,
    y: n + r
  }];
}
function xg(e, n) {
  if (!e || e.length === 0)
    return null;
  const [r] = e;
  return n ? r[n] : r;
}
const $3 = ({
  collisionRect: e,
  droppableContainers: n
}) => {
  const r = vh(e), i = [];
  for (const s of n) {
    const {
      id: c,
      rect: {
        current: l
      }
    } = s;
    if (l) {
      const u = vh(l), d = r.reduce((v, g, b) => v + y3(u[b], g), 0), h = Number((d / 4).toFixed(4));
      i.push({
        id: c,
        data: {
          droppableContainer: s,
          value: h
        }
      });
    }
  }
  return i.sort(x3);
};
function N3(e, n) {
  const r = Math.max(n.top, e.top), i = Math.max(n.left, e.left), s = Math.min(n.left + n.width, e.left + e.width), c = Math.min(n.top + n.height, e.top + e.height), l = s - i, u = c - r;
  if (i < s && r < c) {
    const d = n.width * n.height, h = e.width * e.height, v = l * u, g = v / (d + h - v);
    return Number(g.toFixed(4));
  }
  return 0;
}
const S3 = ({
  collisionRect: e,
  droppableContainers: n
}) => {
  const r = [];
  for (const i of n) {
    const {
      id: s,
      rect: {
        current: c
      }
    } = i;
    if (c) {
      const l = N3(c, e);
      l > 0 && r.push({
        id: s,
        data: {
          droppableContainer: i,
          value: l
        }
      });
    }
  }
  return r.sort(C3);
};
function E3(e, n, r) {
  return {
    ...e,
    scaleX: n && r ? n.width / r.width : 1,
    scaleY: n && r ? n.height / r.height : 1
  };
}
function D3(e, n) {
  return e && n ? {
    x: e.left - n.left,
    y: e.top - n.top
  } : _n;
}
function _3(e) {
  return function(r, ...i) {
    return i.reduce((s, c) => ({
      ...s,
      top: s.top + e * c.y,
      bottom: s.bottom + e * c.y,
      left: s.left + e * c.x,
      right: s.right + e * c.x
    }), {
      ...r
    });
  };
}
const P3 = /* @__PURE__ */ _3(1);
function O3(e, n, r) {
  let i, s, c, l, u;
  if (n.startsWith("matrix3d("))
    i = n.slice(9, -1).split(/, /), s = +i[0], c = +i[5], l = +i[12], u = +i[13];
  else if (n.startsWith("matrix("))
    i = n.slice(7, -1).split(/, /), s = +i[0], c = +i[3], l = +i[4], u = +i[5];
  else
    return e;
  const d = e.left - l - (1 - s) * parseFloat(r), h = e.top - u - (1 - c) * parseFloat(r.slice(r.indexOf(" ") + 1)), v = s ? e.width / s : e.width, g = c ? e.height / c : e.height;
  return {
    width: v,
    height: g,
    top: h,
    right: d + v,
    bottom: h + g,
    left: d
  };
}
const R3 = {
  ignoreTransform: !1
};
function Cg(e, n = R3) {
  let r = e.getBoundingClientRect();
  if (n.ignoreTransform) {
    const {
      getComputedStyle: h
    } = hn(e), {
      transform: v,
      transformOrigin: g
    } = h(e);
    v && (r = O3(r, v, g));
  }
  const {
    top: i,
    left: s,
    width: c,
    height: l,
    bottom: u,
    right: d
  } = r;
  return {
    top: i,
    left: s,
    width: c,
    height: l,
    bottom: u,
    right: d
  };
}
function bi(e) {
  return Cg(e, {
    ignoreTransform: !0
  });
}
function A3(e) {
  const n = e.innerWidth, r = e.innerHeight;
  return {
    top: 0,
    left: 0,
    right: n,
    bottom: r,
    width: n,
    height: r
  };
}
function T3(e, n = hn(e).getComputedStyle(e)) {
  return n.position === "fixed";
}
function I3(e, n = hn(e).getComputedStyle(e)) {
  const r = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].find((s) => {
    const c = n[s];
    return typeof c == "string" ? r.test(c) : !1;
  }) != null;
}
function Fl(e) {
  const n = [];
  function r(i) {
    if (!i)
      return n;
    if (Sl(i) && i.scrollingElement != null && !n.includes(i.scrollingElement))
      return n.push(i.scrollingElement), n;
    if (!mo(i) || e$(i) || n.includes(i))
      return n;
    const {
      getComputedStyle: s
    } = hn(i), c = s(i);
    return i !== e && I3(i, c) && n.push(i), T3(i, c) ? n : r(i.parentNode);
  }
  return e ? r(e) : n;
}
function Fc(e) {
  return !ea || !e ? null : vo(e) ? e : Nl(e) ? Sl(e) || e === wo(e).scrollingElement ? window : mo(e) ? e : null : null;
}
function $g(e) {
  return vo(e) ? e.scrollX : e.scrollLeft;
}
function Ng(e) {
  return vo(e) ? e.scrollY : e.scrollTop;
}
function ll(e) {
  return {
    x: $g(e),
    y: Ng(e)
  };
}
var so;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(so || (so = {}));
function Sg(e) {
  const n = {
    x: 0,
    y: 0
  }, r = {
    x: e.scrollWidth - e.clientWidth,
    y: e.scrollHeight - e.clientHeight
  }, i = e.scrollTop <= n.y, s = e.scrollLeft <= n.x, c = e.scrollTop >= r.y, l = e.scrollLeft >= r.x;
  return {
    isTop: i,
    isLeft: s,
    isBottom: c,
    isRight: l,
    maxScroll: r,
    minScroll: n
  };
}
function k3(e) {
  return !ea || !e ? !1 : e === document.scrollingElement;
}
const M3 = {
  x: 0.2,
  y: 0.2
};
function L3(e, n, {
  top: r,
  left: i,
  right: s,
  bottom: c
}, l = 10, u = M3) {
  const {
    clientHeight: d,
    clientWidth: h
  } = e, v = k3(e) ? {
    top: 0,
    left: 0,
    right: h,
    bottom: d,
    width: h,
    height: d
  } : n, {
    isTop: g,
    isBottom: b,
    isLeft: m,
    isRight: C
  } = Sg(e), p = {
    x: 0,
    y: 0
  }, y = {
    x: 0,
    y: 0
  }, x = {
    height: v.height * u.y,
    width: v.width * u.x
  };
  return !g && r <= v.top + x.height ? (p.y = so.Backward, y.y = l * Math.abs((v.top + x.height - r) / x.height)) : !b && c >= v.bottom - x.height && (p.y = so.Forward, y.y = l * Math.abs((v.bottom - x.height - c) / x.height)), !C && s >= v.right - x.width ? (p.x = so.Forward, y.x = l * Math.abs((v.right - x.width - s) / x.width)) : !m && i <= v.left + x.width && (p.x = so.Backward, y.x = l * Math.abs((v.left + x.width - i) / x.width)), {
    direction: p,
    speed: y
  };
}
function F3(e) {
  if (e === document.scrollingElement) {
    const {
      innerWidth: c,
      innerHeight: l
    } = window;
    return {
      top: 0,
      left: 0,
      right: c,
      bottom: l,
      width: c,
      height: l
    };
  }
  const {
    top: n,
    left: r,
    right: i,
    bottom: s
  } = e.getBoundingClientRect();
  return {
    top: n,
    left: r,
    right: i,
    bottom: s,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function Eg(e) {
  return e.reduce((n, r) => ni(n, ll(r)), _n);
}
function W3(e) {
  return e.reduce((n, r) => n + $g(r), 0);
}
function B3(e) {
  return e.reduce((n, r) => n + Ng(r), 0);
}
const U3 = [["x", ["left", "right"], W3], ["y", ["top", "bottom"], B3]];
class Wl {
  constructor(n, r) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const i = Fl(r), s = Eg(i);
    this.rect = {
      ...n
    }, this.width = n.width, this.height = n.height;
    for (const [c, l, u] of U3)
      for (const d of l)
        Object.defineProperty(this, d, {
          get: () => {
            const h = u(i), v = s[c] - h;
            return this.rect[d] + v;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
var jo;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(jo || (jo = {}));
var Fs;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Fs || (Fs = {}));
function z3({
  acceleration: e,
  activator: n = jo.Pointer,
  canScroll: r,
  draggingRect: i,
  enabled: s,
  interval: c = 5,
  order: l = Fs.TreeOrder,
  pointerCoordinates: u,
  scrollableAncestors: d,
  scrollableAncestorRects: h,
  threshold: v
}) {
  const [g, b] = n$(), m = J({
    x: 1,
    y: 1
  }), C = We(() => {
    switch (n) {
      case jo.Pointer:
        return u ? {
          top: u.y,
          bottom: u.y,
          left: u.x,
          right: u.x
        } : null;
      case jo.DraggableRect:
        return i;
    }
    return null;
  }, [n, i, u]), p = J(_n), y = J(null), x = He(() => {
    const N = y.current;
    if (!N)
      return;
    const E = m.current.x * p.current.x, O = m.current.y * p.current.y;
    N.scrollBy(E, O);
  }, []), D = We(() => l === Fs.TreeOrder ? [...d].reverse() : d, [l, d]);
  se(
    () => {
      if (!s || !d.length || !C) {
        b();
        return;
      }
      for (const N of D) {
        if ((r == null ? void 0 : r(N)) === !1)
          continue;
        const E = d.indexOf(N), O = h[E];
        if (!O)
          continue;
        const {
          direction: T,
          speed: R
        } = L3(N, O, C, e, v);
        if (R.x > 0 || R.y > 0) {
          b(), y.current = N, g(x, c), m.current = R, p.current = T;
          return;
        }
      }
      m.current = {
        x: 0,
        y: 0
      }, p.current = {
        x: 0,
        y: 0
      }, b();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      e,
      x,
      r,
      b,
      s,
      c,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(C),
      g,
      d,
      D,
      h,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(v)
    ]
  );
}
function H3(e, n) {
  const r = n !== null ? e[n] : void 0, i = r ? r.node.current : null;
  return ui((s) => {
    var c;
    return n === null ? null : (c = i ?? s) != null ? c : null;
  }, [i, n]);
}
function V3(e, n) {
  return We(() => e.reduce((r, i) => {
    const {
      sensor: s
    } = i, c = s.activators.map((l) => ({
      eventName: l.eventName,
      handler: n(l.handler, i)
    }));
    return [...r, ...c];
  }, []), [e, n]);
}
var si;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(si || (si = {}));
var ul;
(function(e) {
  e.Optimized = "optimized";
})(ul || (ul = {}));
const mh = /* @__PURE__ */ new Map(), G3 = {
  measure: bi,
  strategy: si.WhileDragging,
  frequency: ul.Optimized
};
function K3(e, {
  dragging: n,
  dependencies: r,
  config: i
}) {
  const [s, c] = me(null), l = s != null, {
    frequency: u,
    measure: d,
    strategy: h
  } = {
    ...G3,
    ...i
  }, v = J(e), g = He((y = []) => c((x) => x ? x.concat(y) : y), []), b = J(null), m = p(), C = ui((y) => {
    if (m && !n)
      return mh;
    const x = s;
    if (!y || y === mh || v.current !== e || x != null) {
      const D = /* @__PURE__ */ new Map();
      for (let N of e) {
        if (!N)
          continue;
        if (x && x.length > 0 && !x.includes(N.id) && N.rect.current) {
          D.set(N.id, N.rect.current);
          continue;
        }
        const E = N.node.current, O = E ? new Wl(d(E), E) : null;
        N.rect.current = O, O && D.set(N.id, O);
      }
      return D;
    }
    return y;
  }, [e, s, n, m, d]);
  return se(() => {
    v.current = e;
  }, [e]), se(
    () => {
      m || requestAnimationFrame(() => g());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, m]
  ), se(() => {
    l && c(null);
  }, [l]), se(
    () => {
      m || typeof u != "number" || b.current !== null || (b.current = setTimeout(() => {
        g(), b.current = null;
      }, u));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, m, g, ...r]
  ), {
    droppableRects: C,
    measureDroppableContainers: g,
    measuringScheduled: l
  };
  function p() {
    switch (h) {
      case si.Always:
        return !1;
      case si.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function Dg({
  onResize: e,
  disabled: n
}) {
  const r = We(() => {
    if (n || typeof window > "u" || typeof window.ResizeObserver > "u")
      return;
    const {
      ResizeObserver: i
    } = window;
    return new i(e);
  }, [n, e]);
  return se(() => () => r == null ? void 0 : r.disconnect(), [r]), r;
}
function Y3(e) {
  const [n, r] = me(null), i = J(e), s = He((c) => {
    const l = Fc(c.target);
    l && r((u) => u ? (u.set(l, ll(l)), new Map(u)) : null);
  }, []);
  return se(() => {
    const c = i.current;
    if (e !== c) {
      l(c);
      const u = e.map((d) => {
        const h = Fc(d);
        return h ? (h.addEventListener("scroll", s, {
          passive: !0
        }), [h, ll(h)]) : null;
      }).filter((d) => d != null);
      r(u.length ? new Map(u) : null), i.current = e;
    }
    return () => {
      l(e), l(c);
    };
    function l(u) {
      u.forEach((d) => {
        const h = Fc(d);
        h == null || h.removeEventListener("scroll", s);
      });
    }
  }, [s, e]), We(() => e.length ? n ? Array.from(n.values()).reduce((c, l) => ni(c, l), _n) : Eg(e) : _n, [e, n]);
}
const q3 = [];
function Z3(e) {
  const n = J(e), r = ui((i) => e ? i && e && n.current && e.parentNode === n.current.parentNode ? i : Fl(e) : q3, [e]);
  return se(() => {
    n.current = e;
  }, [e]), r;
}
function X3(e) {
  se(
    () => {
      if (!ea)
        return;
      const n = e.map(({
        sensor: r
      }) => r.setup == null ? void 0 : r.setup());
      return () => {
        for (const r of n)
          r == null || r();
      };
    },
    // TO-DO: Sensors length could theoretically change which would not be a valid dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e.map(({
      sensor: n
    }) => n)
  );
}
function j3(e, n) {
  return We(() => e.reduce((r, {
    eventName: i,
    handler: s
  }) => (r[i] = (c) => {
    s(c, n);
  }, r), {}), [e, n]);
}
const J3 = /* @__PURE__ */ e7(bi), Q3 = /* @__PURE__ */ t7(bi);
function _g(e, n, r) {
  const i = J(e);
  return ui((s) => e ? r || !s && e || e !== i.current ? mo(e) && e.parentNode == null ? null : new Wl(n(e), e) : s ?? null : null, [e, r, n]);
}
function e7(e) {
  return (n, r) => _g(n, e, r);
}
function t7(e) {
  const n = [];
  return function(i, s) {
    const c = J(i);
    return ui((l) => i.length ? s || !l && i.length || i !== c.current ? i.map((u) => new Wl(e(u), u)) : l ?? n : n, [i, s]);
  };
}
function n7(e) {
  return We(() => e ? A3(e) : null, [e]);
}
function r7(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const n = e.children[0];
  return mo(n) ? n : e;
}
function o7({
  measure: e = Cg
}) {
  const [n, r] = me(null), i = He((d) => {
    for (const {
      target: h
    } of d)
      if (mo(h)) {
        r((v) => {
          const g = e(h);
          return v ? {
            ...v,
            width: g.width,
            height: g.height
          } : g;
        });
        break;
      }
  }, [e]), s = Dg({
    onResize: i
  }), c = He((d) => {
    const h = r7(d);
    s == null || s.disconnect(), h && (s == null || s.observe(h)), r(h ? e(h) : null);
  }, [e, s]), [l, u] = El(c);
  return We(() => ({
    nodeRef: l,
    rect: n,
    setRef: u
  }), [n, l, u]);
}
function Wc(e, n) {
  return We(
    () => ({
      sensor: e,
      options: n ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, n]
  );
}
function i7(...e) {
  return We(
    () => [...e].filter((n) => n != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
class Jo {
  constructor(n) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((r) => {
        var i;
        return (i = this.target) == null ? void 0 : i.removeEventListener(...r);
      });
    }, this.target = n;
  }
  add(n, r, i) {
    var s;
    (s = this.target) == null || s.addEventListener(n, r, i), this.listeners.push([n, r, i]);
  }
}
function s7(e) {
  const {
    EventTarget: n
  } = hn(e);
  return e instanceof n ? e : wo(e);
}
function Bc(e, n) {
  const r = Math.abs(e.x), i = Math.abs(e.y);
  return typeof n == "number" ? Math.sqrt(r ** 2 + i ** 2) > n : "x" in n && "y" in n ? r > n.x && i > n.y : "x" in n ? r > n.x : "y" in n ? i > n.y : !1;
}
var ln;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(ln || (ln = {}));
function wh(e) {
  e.preventDefault();
}
function a7(e) {
  e.stopPropagation();
}
var Ae;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter";
})(Ae || (Ae = {}));
const Pg = {
  start: [Ae.Space, Ae.Enter],
  cancel: [Ae.Esc],
  end: [Ae.Space, Ae.Enter]
}, c7 = (e, {
  currentCoordinates: n
}) => {
  switch (e.code) {
    case Ae.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case Ae.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case Ae.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case Ae.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
class Bl {
  constructor(n) {
    this.props = void 0, this.autoScrollEnabled = !1, this.coordinates = _n, this.listeners = void 0, this.windowListeners = void 0, this.props = n;
    const {
      event: {
        target: r
      }
    } = n;
    this.props = n, this.listeners = new Jo(wo(r)), this.windowListeners = new Jo(hn(r)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(ln.Resize, this.handleCancel), this.windowListeners.add(ln.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(ln.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: n,
      onStart: r
    } = this.props;
    if (!n.node.current)
      throw new Error("Active draggable node is undefined");
    const i = bi(n.node.current), s = {
      x: i.left,
      y: i.top
    };
    this.coordinates = s, r(s);
  }
  handleKeyDown(n) {
    if (o$(n)) {
      const {
        coordinates: r
      } = this, {
        active: i,
        context: s,
        options: c
      } = this.props, {
        keyboardCodes: l = Pg,
        coordinateGetter: u = c7,
        scrollBehavior: d = "smooth"
      } = c, {
        code: h
      } = n;
      if (l.end.includes(h)) {
        this.handleEnd(n);
        return;
      }
      if (l.cancel.includes(h)) {
        this.handleCancel(n);
        return;
      }
      const v = u(n, {
        active: i,
        context: s.current,
        currentCoordinates: r
      });
      if (v) {
        const g = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: b
        } = s.current;
        for (const m of b) {
          const C = n.code, p = Ep(v, r), {
            isTop: y,
            isRight: x,
            isLeft: D,
            isBottom: N,
            maxScroll: E,
            minScroll: O
          } = Sg(m), T = F3(m), R = {
            x: Math.min(C === Ae.Right ? T.right - T.width / 2 : T.right, Math.max(C === Ae.Right ? T.left : T.left + T.width / 2, v.x)),
            y: Math.min(C === Ae.Down ? T.bottom - T.height / 2 : T.bottom, Math.max(C === Ae.Down ? T.top : T.top + T.height / 2, v.y))
          }, I = C === Ae.Right && !x || C === Ae.Left && !D, W = C === Ae.Down && !N || C === Ae.Up && !y;
          if (I && R.x !== v.x) {
            if (C === Ae.Right && m.scrollLeft + p.x <= E.x || C === Ae.Left && m.scrollLeft + p.x >= O.x) {
              m.scrollBy({
                left: p.x,
                behavior: d
              });
              return;
            }
            g.x = C === Ae.Right ? m.scrollLeft - E.x : m.scrollLeft - O.x, m.scrollBy({
              left: -g.x,
              behavior: d
            });
            break;
          } else if (W && R.y !== v.y) {
            if (C === Ae.Down && m.scrollTop + p.y <= E.y || C === Ae.Up && m.scrollTop + p.y >= O.y) {
              m.scrollBy({
                top: p.y,
                behavior: d
              });
              return;
            }
            g.y = C === Ae.Down ? m.scrollTop - E.y : m.scrollTop - O.y, m.scrollBy({
              top: -g.y,
              behavior: d
            });
            break;
          }
        }
        this.handleMove(n, ni(v, g));
      }
    }
  }
  handleMove(n, r) {
    const {
      onMove: i
    } = this.props;
    n.preventDefault(), i(r), this.coordinates = r;
  }
  handleEnd(n) {
    const {
      onEnd: r
    } = this.props;
    n.preventDefault(), this.detach(), r();
  }
  handleCancel(n) {
    const {
      onCancel: r
    } = this.props;
    n.preventDefault(), this.detach(), r();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll();
  }
}
Bl.activators = [{
  eventName: "onKeyDown",
  handler: (e, {
    keyboardCodes: n = Pg,
    onActivation: r
  }) => {
    const {
      code: i
    } = e.nativeEvent;
    return n.start.includes(i) ? (e.preventDefault(), r == null || r({
      event: e.nativeEvent
    }), !0) : !1;
  }
}];
function bh(e) {
  return !!(e && "distance" in e);
}
function yh(e) {
  return !!(e && "delay" in e);
}
class Ul {
  constructor(n, r, i = s7(n.event.target)) {
    var s;
    this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = n, this.events = r;
    const {
      event: c
    } = n, {
      target: l
    } = c;
    this.props = n, this.events = r, this.document = wo(l), this.documentListeners = new Jo(this.document), this.listeners = new Jo(i), this.windowListeners = new Jo(hn(l)), this.initialCoordinates = (s = Jc(c)) != null ? s : _n, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    const {
      events: n,
      props: {
        options: {
          activationConstraint: r
        }
      }
    } = this;
    if (this.listeners.add(n.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(n.end.name, this.handleEnd), this.windowListeners.add(ln.Resize, this.handleCancel), this.windowListeners.add(ln.DragStart, wh), this.windowListeners.add(ln.VisibilityChange, this.handleCancel), this.windowListeners.add(ln.ContextMenu, wh), this.documentListeners.add(ln.Keydown, this.handleKeydown), r) {
      if (bh(r))
        return;
      if (yh(r)) {
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
      initialCoordinates: n
    } = this, {
      onStart: r
    } = this.props;
    n && (this.activated = !0, this.documentListeners.add(ln.Click, a7, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(ln.SelectionChange, this.removeTextSelection), r(n));
  }
  handleMove(n) {
    var r;
    const {
      activated: i,
      initialCoordinates: s,
      props: c
    } = this, {
      onMove: l,
      options: {
        activationConstraint: u
      }
    } = c;
    if (!s)
      return;
    const d = (r = Jc(n)) != null ? r : _n, h = Ep(s, d);
    if (!i && u) {
      if (yh(u))
        return Bc(h, u.tolerance) ? this.handleCancel() : void 0;
      if (bh(u))
        return u.tolerance != null && Bc(h, u.tolerance) ? this.handleCancel() : Bc(h, u.distance) ? this.handleStart() : void 0;
    }
    n.cancelable && n.preventDefault(), l(d);
  }
  handleEnd() {
    const {
      onEnd: n
    } = this.props;
    this.detach(), n();
  }
  handleCancel() {
    const {
      onCancel: n
    } = this.props;
    this.detach(), n();
  }
  handleKeydown(n) {
    n.code === Ae.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var n;
    (n = this.document.getSelection()) == null || n.removeAllRanges();
  }
}
const l7 = {
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class zl extends Ul {
  constructor(n) {
    const {
      event: r
    } = n, i = wo(r.target);
    super(n, l7, i);
  }
}
zl.activators = [{
  eventName: "onPointerDown",
  handler: ({
    nativeEvent: e
  }, {
    onActivation: n
  }) => !e.isPrimary || e.button !== 0 ? !1 : (n == null || n({
    event: e
  }), !0)
}];
const u7 = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var dl;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(dl || (dl = {}));
class d7 extends Ul {
  constructor(n) {
    super(n, u7, wo(n.event.target));
  }
}
d7.activators = [{
  eventName: "onMouseDown",
  handler: ({
    nativeEvent: e
  }, {
    onActivation: n
  }) => e.button === dl.RightClick ? !1 : (n == null || n({
    event: e
  }), !0)
}];
const Uc = {
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class Og extends Ul {
  constructor(n) {
    super(n, Uc);
  }
  static setup() {
    return window.addEventListener(Uc.move.name, n, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(Uc.move.name, n);
    };
    function n() {
    }
  }
}
Og.activators = [{
  eventName: "onTouchStart",
  handler: ({
    nativeEvent: e
  }, {
    onActivation: n
  }) => {
    const {
      touches: r
    } = e;
    return r.length > 1 ? !1 : (n == null || n({
      event: e
    }), !0);
  }
}];
function f7(e, {
  transform: n,
  ...r
}) {
  return e != null && e.length ? e.reduce((i, s) => s({
    transform: i,
    ...r
  }), n) : n;
}
const h7 = [{
  sensor: zl,
  options: {}
}, {
  sensor: Bl,
  options: {}
}], p7 = {
  current: {}
}, Rg = /* @__PURE__ */ jt({
  ..._n,
  scaleX: 1,
  scaleY: 1
}), g7 = /* @__PURE__ */ bx(function({
  id: n,
  autoScroll: r = !0,
  announcements: i,
  children: s,
  sensors: c = h7,
  collisionDetection: l = S3,
  measuring: u,
  modifiers: d,
  screenReaderInstructions: h = d3,
  ...v
}) {
  var g, b, m, C, p, y, x;
  const D = pl(m3, void 0, v3), [N, E] = D, [O, T] = me(() => ({
    type: null,
    event: null
  })), [R, I] = me(!1), {
    draggable: {
      active: W,
      nodes: K,
      translate: j
    },
    droppable: {
      containers: X
    }
  } = N, ae = W ? K[W] : null, Z = J({
    initial: null,
    translated: null
  }), ne = We(() => {
    var Re;
    return W != null ? {
      id: W,
      // It's possible for the active node to unmount while dragging
      data: (Re = ae == null ? void 0 : ae.data) != null ? Re : p7,
      rect: Z
    } : null;
  }, [W, ae]), oe = J(null), [ue, ve] = me(null), [V, ee] = me(null), te = Os(v, Object.values(v)), re = ta("DndDescribedBy", n), de = We(() => X.getEnabled(), [X]), {
    droppableRects: Te,
    measureDroppableContainers: Oe,
    measuringScheduled: $e
  } = K3(de, {
    dragging: R,
    dependencies: [j.x, j.y],
    config: u == null ? void 0 : u.droppable
  }), Be = H3(K, W), et = V ? Jc(V) : null, G = _g(Be, (g = u == null || (b = u.draggable) == null ? void 0 : b.measure) != null ? g : bi), ft = J3(Be ? Be.parentElement : null), ye = J({
    active: null,
    activeNode: Be,
    collisionRect: null,
    collisions: null,
    droppableRects: Te,
    draggableNodes: K,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: X,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), rt = X.getNodeFor((m = ye.current.over) == null ? void 0 : m.id), _t = o7({
    measure: u == null || (C = u.dragOverlay) == null ? void 0 : C.measure
  }), qe = (p = _t.nodeRef.current) != null ? p : Be, Ie = (y = _t.rect) != null ? y : G, Pt = J(null), yt = Pt.current, pn = Ie === G ? D3(G, yt) : _n, Cn = n7(qe ? qe.ownerDocument.defaultView : null), ht = Z3(W ? rt ?? qe : null), tt = Q3(ht), Jt = f7(d, {
    transform: {
      x: j.x - pn.x,
      y: j.y - pn.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: V,
    active: ne,
    activeNodeRect: G,
    containerNodeRect: ft,
    draggingNodeRect: Ie,
    over: ye.current.over,
    overlayNodeRect: _t.rect,
    scrollableAncestors: ht,
    scrollableAncestorRects: tt,
    windowRect: Cn
  }), Rn = et ? ni(et, j) : null, No = Y3(ht), it = ni(Jt, No), gn = Ie ? P3(Ie, Jt) : null, Ut = ne && gn ? l({
    active: ne,
    collisionRect: gn,
    droppableContainers: de,
    pointerCoordinates: Rn
  }) : null, vn = xg(Ut, "id"), [It, Yn] = me(null), br = E3(Jt, (x = It == null ? void 0 : It.rect) != null ? x : null, G), qn = He(
    (Re, {
      sensor: Ue,
      options: Ve
    }) => {
      if (!oe.current)
        return;
      const wt = K[oe.current];
      if (!wt)
        return;
      const Nt = new Ue({
        active: oe.current,
        activeNode: wt,
        event: Re.nativeEvent,
        options: Ve,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: ye,
        onStart(pt) {
          const Qt = oe.current;
          if (!Qt)
            return;
          const yr = K[Qt];
          if (!yr)
            return;
          const {
            onDragStart: xr
          } = te.current, Fr = {
            active: {
              id: Qt,
              data: yr.data,
              rect: Z
            }
          };
          hs(() => {
            E({
              type: Ke.DragStart,
              initialCoordinates: pt,
              active: Qt
            }), T({
              type: Ke.DragStart,
              event: Fr
            });
          }), xr == null || xr(Fr);
        },
        onMove(pt) {
          E({
            type: Ke.DragMove,
            coordinates: pt
          });
        },
        onEnd: Ot(Ke.DragEnd),
        onCancel: Ot(Ke.DragCancel)
      });
      hs(() => {
        ve(Nt), ee(Re.nativeEvent);
      });
      function Ot(pt) {
        return async function() {
          const {
            active: yr,
            collisions: xr,
            over: Fr,
            scrollAdjustedTranslate: Ci
          } = ye.current;
          let jn = null;
          if (yr && Ci) {
            const {
              cancelDrop: Jn
            } = te.current;
            jn = {
              active: yr,
              collisions: xr,
              delta: Ci,
              over: Fr
            }, pt === Ke.DragEnd && typeof Jn == "function" && await Promise.resolve(Jn(jn)) && (pt = Ke.DragCancel);
          }
          oe.current = null, hs(() => {
            if (E({
              type: pt
            }), Yn(null), I(!1), ve(null), ee(null), jn && T({
              type: pt,
              event: jn
            }), jn) {
              const {
                onDragCancel: Jn,
                onDragEnd: $i
              } = te.current, Wr = pt === Ke.DragEnd ? $i : Jn;
              Wr == null || Wr(jn);
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [K]
  ), Zn = He((Re, Ue) => (Ve, wt) => {
    const Nt = Ve.nativeEvent;
    // No active draggable
    oe.current !== null || // Event has already been captured
    Nt.dndKit || Nt.defaultPrevented || Re(Ve, Ue.options) === !0 && (Nt.dndKit = {
      capturedBy: Ue.sensor
    }, oe.current = wt, qn(Ve, Ue));
  }, [qn]), Xn = V3(c, Zn);
  X3(c), se(() => {
    W != null && I(!0);
  }, [W]), se(() => {
    ne || (Pt.current = null), ne && G && !Pt.current && (Pt.current = G);
  }, [G, ne]), se(
    () => {
      const {
        onDragMove: Re
      } = te.current, {
        active: Ue,
        collisions: Ve,
        over: wt
      } = ye.current;
      if (!Ue)
        return;
      const Nt = {
        active: Ue,
        collisions: Ve,
        delta: {
          x: it.x,
          y: it.y
        },
        over: wt
      };
      T({
        type: Ke.DragMove,
        event: Nt
      }), Re == null || Re(Nt);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [it.x, it.y]
  ), se(
    () => {
      const {
        active: Re,
        collisions: Ue,
        droppableContainers: Ve,
        scrollAdjustedTranslate: wt
      } = ye.current;
      if (!Re || !oe.current || !wt)
        return;
      const {
        onDragOver: Nt
      } = te.current, Ot = Ve.get(vn), pt = Ot && Ot.rect.current ? {
        id: Ot.id,
        rect: Ot.rect.current,
        data: Ot.data,
        disabled: Ot.disabled
      } : null, Qt = {
        active: Re,
        collisions: Ue,
        delta: {
          x: wt.x,
          y: wt.y
        },
        over: pt
      };
      hs(() => {
        Yn(pt), T({
          type: Ke.DragOver,
          event: Qt
        }), Nt == null || Nt(Qt);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [vn]
  ), li(() => {
    ye.current = {
      active: ne,
      activeNode: Be,
      collisionRect: gn,
      collisions: Ut,
      droppableRects: Te,
      draggableNodes: K,
      draggingNode: qe,
      draggingNodeRect: Ie,
      droppableContainers: X,
      over: It,
      scrollableAncestors: ht,
      scrollAdjustedTranslate: it
    }, Z.current = {
      initial: Ie,
      translated: gn
    };
  }, [ne, Be, Ut, gn, K, qe, Ie, Te, X, It, ht, it]), z3({
    ...st(),
    draggingRect: gn,
    pointerCoordinates: Rn,
    scrollableAncestors: ht,
    scrollableAncestorRects: tt
  });
  const Xe = We(() => ({
    active: ne,
    activeNode: Be,
    activeNodeRect: G,
    activatorEvent: V,
    collisions: Ut,
    containerNodeRect: ft,
    dragOverlay: _t,
    draggableNodes: K,
    droppableContainers: X,
    droppableRects: Te,
    over: It,
    measureDroppableContainers: Oe,
    scrollableAncestors: ht,
    scrollableAncestorRects: tt,
    measuringScheduled: $e,
    windowRect: Cn
  }), [ne, Be, G, V, Ut, ft, _t, K, X, Te, It, Oe, ht, tt, $e, Cn]), lt = We(() => ({
    activatorEvent: V,
    activators: Xn,
    active: ne,
    activeNodeRect: G,
    ariaDescribedById: {
      draggable: re
    },
    dispatch: E,
    draggableNodes: K,
    over: It,
    measureDroppableContainers: Oe
  }), [V, Xn, ne, G, E, re, K, It, Oe]);
  return Me.createElement(yg.Provider, {
    value: O
  }, Me.createElement(Ll.Provider, {
    value: lt
  }, Me.createElement(g3.Provider, {
    value: Xe
  }, Me.createElement(Rg.Provider, {
    value: br
  }, s))), Me.createElement(b3, {
    announcements: i,
    hiddenTextDescribedById: re,
    screenReaderInstructions: h
  }));
  function st() {
    const Re = (ue == null ? void 0 : ue.autoScrollEnabled) === !1, Ue = typeof r == "object" ? r.enabled === !1 : r === !1, Ve = !Re && !Ue;
    return typeof r == "object" ? {
      ...r,
      enabled: Ve
    } : {
      enabled: Ve
    };
  }
}), v7 = /* @__PURE__ */ jt(null), xh = "button", m7 = "Droppable";
function Ag({
  id: e,
  data: n,
  disabled: r = !1,
  attributes: i
}) {
  const s = ta(m7), {
    activators: c,
    activatorEvent: l,
    active: u,
    activeNodeRect: d,
    ariaDescribedById: h,
    draggableNodes: v,
    over: g
  } = En(Ll), {
    role: b = xh,
    roleDescription: m = "draggable",
    tabIndex: C = 0
  } = i ?? {}, p = (u == null ? void 0 : u.id) === e, y = En(p ? Rg : v7), [x, D] = El(), N = j3(c, e), E = Os(n);
  li(
    () => (v[e] = {
      id: e,
      key: s,
      node: x,
      data: E
    }, () => {
      const T = v[e];
      T && T.key === s && delete v[e];
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [v, e]
  );
  const O = We(() => ({
    role: b,
    tabIndex: C,
    "aria-pressed": p && b === xh ? !0 : void 0,
    "aria-roledescription": m,
    "aria-describedby": h.draggable
  }), [b, C, p, m, h.draggable]);
  return {
    active: u,
    activatorEvent: l,
    activeNodeRect: d,
    attributes: O,
    isDragging: p,
    listeners: r ? void 0 : N,
    node: x,
    over: g,
    setNodeRef: D,
    transform: y
  };
}
const w7 = "Droppable", b7 = {
  timeout: 25
};
function Hl({
  data: e,
  disabled: n = !1,
  id: r,
  resizeObserverConfig: i
}) {
  const s = ta(w7), {
    active: c,
    dispatch: l,
    over: u,
    measureDroppableContainers: d
  } = En(Ll), h = J(!1), v = J(null), g = J(null), {
    disabled: b,
    updateMeasurementsFor: m,
    timeout: C
  } = {
    ...b7,
    ...i
  }, p = Os(m ?? r), y = He(
    () => {
      if (!h.current) {
        h.current = !0;
        return;
      }
      g.current != null && clearTimeout(g.current), g.current = setTimeout(() => {
        d(typeof p.current == "string" ? [p.current] : p.current), g.current = null;
      }, C);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [C]
  ), x = Dg({
    onResize: y,
    disabled: b || !c
  }), D = He((T, R) => {
    x && (R && (x.unobserve(R), h.current = !1), T && x.observe(T));
  }, [x]), [N, E] = El(D), O = Os(e);
  return se(() => {
    !x || !N.current || (x.disconnect(), h.current = !1, x.observe(N.current));
  }, [N, x]), li(
    () => (l({
      type: Ke.RegisterDroppable,
      element: {
        id: r,
        key: s,
        disabled: n,
        node: N,
        rect: v,
        data: O
      }
    }), () => l({
      type: Ke.UnregisterDroppable,
      key: s,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), se(
    () => {
      l({
        type: Ke.SetDroppableDisabled,
        id: r,
        key: s,
        disabled: n
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  ), {
    active: c,
    rect: v,
    isOver: (u == null ? void 0 : u.id) === r,
    node: N,
    over: u,
    setNodeRef: E
  };
}
var Ws = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Ws.exports;
(function(e, n) {
  (function() {
    var r, i = "4.17.21", s = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", u = "Invalid `variable` option passed into `_.template`", d = "__lodash_hash_undefined__", h = 500, v = "__lodash_placeholder__", g = 1, b = 2, m = 4, C = 1, p = 2, y = 1, x = 2, D = 4, N = 8, E = 16, O = 32, T = 64, R = 128, I = 256, W = 512, K = 30, j = "...", X = 800, ae = 16, Z = 1, ne = 2, oe = 3, ue = 1 / 0, ve = 9007199254740991, V = 17976931348623157e292, ee = 0 / 0, te = 4294967295, re = te - 1, de = te >>> 1, Te = [
      ["ary", R],
      ["bind", y],
      ["bindKey", x],
      ["curry", N],
      ["curryRight", E],
      ["flip", W],
      ["partial", O],
      ["partialRight", T],
      ["rearg", I]
    ], Oe = "[object Arguments]", $e = "[object Array]", Be = "[object AsyncFunction]", et = "[object Boolean]", G = "[object Date]", ft = "[object DOMException]", ye = "[object Error]", rt = "[object Function]", _t = "[object GeneratorFunction]", qe = "[object Map]", Ie = "[object Number]", Pt = "[object Null]", yt = "[object Object]", pn = "[object Promise]", Cn = "[object Proxy]", ht = "[object RegExp]", tt = "[object Set]", Jt = "[object String]", Rn = "[object Symbol]", No = "[object Undefined]", it = "[object WeakMap]", gn = "[object WeakSet]", Ut = "[object ArrayBuffer]", vn = "[object DataView]", It = "[object Float32Array]", Yn = "[object Float64Array]", br = "[object Int8Array]", qn = "[object Int16Array]", Zn = "[object Int32Array]", Xn = "[object Uint8Array]", Xe = "[object Uint8ClampedArray]", lt = "[object Uint16Array]", st = "[object Uint32Array]", Re = /\b__p \+= '';/g, Ue = /\b(__p \+=) '' \+/g, Ve = /(__e\(.*?\)|\b__t\)) \+\n'';/g, wt = /&(?:amp|lt|gt|quot|#39);/g, Nt = /[&<>"']/g, Ot = RegExp(wt.source), pt = RegExp(Nt.source), Qt = /<%-([\s\S]+?)%>/g, yr = /<%([\s\S]+?)%>/g, xr = /<%=([\s\S]+?)%>/g, Fr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ci = /^\w*$/, jn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Jn = /[\\^$.*+?()[\]{}|]/g, $i = RegExp(Jn.source), Wr = /^\s+/, Zg = /\s/, Xg = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, jg = /\{\n\/\* \[wrapped with (.+)\] \*/, Jg = /,? & /, Qg = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, ev = /[()=,{}\[\]\/\s]/, tv = /\\(\\)?/g, nv = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, jl = /\w*$/, rv = /^[-+]0x[0-9a-f]+$/i, ov = /^0b[01]+$/i, iv = /^\[object .+?Constructor\]$/, sv = /^0o[0-7]+$/i, av = /^(?:0|[1-9]\d*)$/, cv = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ni = /($^)/, lv = /['\n\r\u2028\u2029\\]/g, Si = "\\ud800-\\udfff", uv = "\\u0300-\\u036f", dv = "\\ufe20-\\ufe2f", fv = "\\u20d0-\\u20ff", Jl = uv + dv + fv, Ql = "\\u2700-\\u27bf", eu = "a-z\\xdf-\\xf6\\xf8-\\xff", hv = "\\xac\\xb1\\xd7\\xf7", pv = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", gv = "\\u2000-\\u206f", vv = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", tu = "A-Z\\xc0-\\xd6\\xd8-\\xde", nu = "\\ufe0e\\ufe0f", ru = hv + pv + gv + vv, da = "['’]", mv = "[" + Si + "]", ou = "[" + ru + "]", Ei = "[" + Jl + "]", iu = "\\d+", wv = "[" + Ql + "]", su = "[" + eu + "]", au = "[^" + Si + ru + iu + Ql + eu + tu + "]", fa = "\\ud83c[\\udffb-\\udfff]", bv = "(?:" + Ei + "|" + fa + ")", cu = "[^" + Si + "]", ha = "(?:\\ud83c[\\udde6-\\uddff]){2}", pa = "[\\ud800-\\udbff][\\udc00-\\udfff]", Br = "[" + tu + "]", lu = "\\u200d", uu = "(?:" + su + "|" + au + ")", yv = "(?:" + Br + "|" + au + ")", du = "(?:" + da + "(?:d|ll|m|re|s|t|ve))?", fu = "(?:" + da + "(?:D|LL|M|RE|S|T|VE))?", hu = bv + "?", pu = "[" + nu + "]?", xv = "(?:" + lu + "(?:" + [cu, ha, pa].join("|") + ")" + pu + hu + ")*", Cv = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", $v = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", gu = pu + hu + xv, Nv = "(?:" + [wv, ha, pa].join("|") + ")" + gu, Sv = "(?:" + [cu + Ei + "?", Ei, ha, pa, mv].join("|") + ")", Ev = RegExp(da, "g"), Dv = RegExp(Ei, "g"), ga = RegExp(fa + "(?=" + fa + ")|" + Sv + gu, "g"), _v = RegExp([
      Br + "?" + su + "+" + du + "(?=" + [ou, Br, "$"].join("|") + ")",
      yv + "+" + fu + "(?=" + [ou, Br + uu, "$"].join("|") + ")",
      Br + "?" + uu + "+" + du,
      Br + "+" + fu,
      $v,
      Cv,
      iu,
      Nv
    ].join("|"), "g"), Pv = RegExp("[" + lu + Si + Jl + nu + "]"), Ov = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Rv = [
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
    ], Av = -1, je = {};
    je[It] = je[Yn] = je[br] = je[qn] = je[Zn] = je[Xn] = je[Xe] = je[lt] = je[st] = !0, je[Oe] = je[$e] = je[Ut] = je[et] = je[vn] = je[G] = je[ye] = je[rt] = je[qe] = je[Ie] = je[yt] = je[ht] = je[tt] = je[Jt] = je[it] = !1;
    var Ze = {};
    Ze[Oe] = Ze[$e] = Ze[Ut] = Ze[vn] = Ze[et] = Ze[G] = Ze[It] = Ze[Yn] = Ze[br] = Ze[qn] = Ze[Zn] = Ze[qe] = Ze[Ie] = Ze[yt] = Ze[ht] = Ze[tt] = Ze[Jt] = Ze[Rn] = Ze[Xn] = Ze[Xe] = Ze[lt] = Ze[st] = !0, Ze[ye] = Ze[rt] = Ze[it] = !1;
    var Tv = {
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
    }, Iv = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, kv = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Mv = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Lv = parseFloat, Fv = parseInt, vu = typeof zo == "object" && zo && zo.Object === Object && zo, Wv = typeof self == "object" && self && self.Object === Object && self, xt = vu || Wv || Function("return this")(), va = n && !n.nodeType && n, Cr = va && !0 && e && !e.nodeType && e, mu = Cr && Cr.exports === va, ma = mu && vu.process, en = function() {
      try {
        var k = Cr && Cr.require && Cr.require("util").types;
        return k || ma && ma.binding && ma.binding("util");
      } catch {
      }
    }(), wu = en && en.isArrayBuffer, bu = en && en.isDate, yu = en && en.isMap, xu = en && en.isRegExp, Cu = en && en.isSet, $u = en && en.isTypedArray;
    function zt(k, B, F) {
      switch (F.length) {
        case 0:
          return k.call(B);
        case 1:
          return k.call(B, F[0]);
        case 2:
          return k.call(B, F[0], F[1]);
        case 3:
          return k.call(B, F[0], F[1], F[2]);
      }
      return k.apply(B, F);
    }
    function Bv(k, B, F, ie) {
      for (var we = -1, ke = k == null ? 0 : k.length; ++we < ke; ) {
        var gt = k[we];
        B(ie, gt, F(gt), k);
      }
      return ie;
    }
    function tn(k, B) {
      for (var F = -1, ie = k == null ? 0 : k.length; ++F < ie && B(k[F], F, k) !== !1; )
        ;
      return k;
    }
    function Uv(k, B) {
      for (var F = k == null ? 0 : k.length; F-- && B(k[F], F, k) !== !1; )
        ;
      return k;
    }
    function Nu(k, B) {
      for (var F = -1, ie = k == null ? 0 : k.length; ++F < ie; )
        if (!B(k[F], F, k))
          return !1;
      return !0;
    }
    function Qn(k, B) {
      for (var F = -1, ie = k == null ? 0 : k.length, we = 0, ke = []; ++F < ie; ) {
        var gt = k[F];
        B(gt, F, k) && (ke[we++] = gt);
      }
      return ke;
    }
    function Di(k, B) {
      var F = k == null ? 0 : k.length;
      return !!F && Ur(k, B, 0) > -1;
    }
    function wa(k, B, F) {
      for (var ie = -1, we = k == null ? 0 : k.length; ++ie < we; )
        if (F(B, k[ie]))
          return !0;
      return !1;
    }
    function Qe(k, B) {
      for (var F = -1, ie = k == null ? 0 : k.length, we = Array(ie); ++F < ie; )
        we[F] = B(k[F], F, k);
      return we;
    }
    function er(k, B) {
      for (var F = -1, ie = B.length, we = k.length; ++F < ie; )
        k[we + F] = B[F];
      return k;
    }
    function ba(k, B, F, ie) {
      var we = -1, ke = k == null ? 0 : k.length;
      for (ie && ke && (F = k[++we]); ++we < ke; )
        F = B(F, k[we], we, k);
      return F;
    }
    function zv(k, B, F, ie) {
      var we = k == null ? 0 : k.length;
      for (ie && we && (F = k[--we]); we--; )
        F = B(F, k[we], we, k);
      return F;
    }
    function ya(k, B) {
      for (var F = -1, ie = k == null ? 0 : k.length; ++F < ie; )
        if (B(k[F], F, k))
          return !0;
      return !1;
    }
    var Hv = xa("length");
    function Vv(k) {
      return k.split("");
    }
    function Gv(k) {
      return k.match(Qg) || [];
    }
    function Su(k, B, F) {
      var ie;
      return F(k, function(we, ke, gt) {
        if (B(we, ke, gt))
          return ie = ke, !1;
      }), ie;
    }
    function _i(k, B, F, ie) {
      for (var we = k.length, ke = F + (ie ? 1 : -1); ie ? ke-- : ++ke < we; )
        if (B(k[ke], ke, k))
          return ke;
      return -1;
    }
    function Ur(k, B, F) {
      return B === B ? rm(k, B, F) : _i(k, Eu, F);
    }
    function Kv(k, B, F, ie) {
      for (var we = F - 1, ke = k.length; ++we < ke; )
        if (ie(k[we], B))
          return we;
      return -1;
    }
    function Eu(k) {
      return k !== k;
    }
    function Du(k, B) {
      var F = k == null ? 0 : k.length;
      return F ? $a(k, B) / F : ee;
    }
    function xa(k) {
      return function(B) {
        return B == null ? r : B[k];
      };
    }
    function Ca(k) {
      return function(B) {
        return k == null ? r : k[B];
      };
    }
    function _u(k, B, F, ie, we) {
      return we(k, function(ke, gt, Ge) {
        F = ie ? (ie = !1, ke) : B(F, ke, gt, Ge);
      }), F;
    }
    function Yv(k, B) {
      var F = k.length;
      for (k.sort(B); F--; )
        k[F] = k[F].value;
      return k;
    }
    function $a(k, B) {
      for (var F, ie = -1, we = k.length; ++ie < we; ) {
        var ke = B(k[ie]);
        ke !== r && (F = F === r ? ke : F + ke);
      }
      return F;
    }
    function Na(k, B) {
      for (var F = -1, ie = Array(k); ++F < k; )
        ie[F] = B(F);
      return ie;
    }
    function qv(k, B) {
      return Qe(B, function(F) {
        return [F, k[F]];
      });
    }
    function Pu(k) {
      return k && k.slice(0, Tu(k) + 1).replace(Wr, "");
    }
    function Ht(k) {
      return function(B) {
        return k(B);
      };
    }
    function Sa(k, B) {
      return Qe(B, function(F) {
        return k[F];
      });
    }
    function So(k, B) {
      return k.has(B);
    }
    function Ou(k, B) {
      for (var F = -1, ie = k.length; ++F < ie && Ur(B, k[F], 0) > -1; )
        ;
      return F;
    }
    function Ru(k, B) {
      for (var F = k.length; F-- && Ur(B, k[F], 0) > -1; )
        ;
      return F;
    }
    function Zv(k, B) {
      for (var F = k.length, ie = 0; F--; )
        k[F] === B && ++ie;
      return ie;
    }
    var Xv = Ca(Tv), jv = Ca(Iv);
    function Jv(k) {
      return "\\" + Mv[k];
    }
    function Qv(k, B) {
      return k == null ? r : k[B];
    }
    function zr(k) {
      return Pv.test(k);
    }
    function em(k) {
      return Ov.test(k);
    }
    function tm(k) {
      for (var B, F = []; !(B = k.next()).done; )
        F.push(B.value);
      return F;
    }
    function Ea(k) {
      var B = -1, F = Array(k.size);
      return k.forEach(function(ie, we) {
        F[++B] = [we, ie];
      }), F;
    }
    function Au(k, B) {
      return function(F) {
        return k(B(F));
      };
    }
    function tr(k, B) {
      for (var F = -1, ie = k.length, we = 0, ke = []; ++F < ie; ) {
        var gt = k[F];
        (gt === B || gt === v) && (k[F] = v, ke[we++] = F);
      }
      return ke;
    }
    function Pi(k) {
      var B = -1, F = Array(k.size);
      return k.forEach(function(ie) {
        F[++B] = ie;
      }), F;
    }
    function nm(k) {
      var B = -1, F = Array(k.size);
      return k.forEach(function(ie) {
        F[++B] = [ie, ie];
      }), F;
    }
    function rm(k, B, F) {
      for (var ie = F - 1, we = k.length; ++ie < we; )
        if (k[ie] === B)
          return ie;
      return -1;
    }
    function om(k, B, F) {
      for (var ie = F + 1; ie--; )
        if (k[ie] === B)
          return ie;
      return ie;
    }
    function Hr(k) {
      return zr(k) ? sm(k) : Hv(k);
    }
    function mn(k) {
      return zr(k) ? am(k) : Vv(k);
    }
    function Tu(k) {
      for (var B = k.length; B-- && Zg.test(k.charAt(B)); )
        ;
      return B;
    }
    var im = Ca(kv);
    function sm(k) {
      for (var B = ga.lastIndex = 0; ga.test(k); )
        ++B;
      return B;
    }
    function am(k) {
      return k.match(ga) || [];
    }
    function cm(k) {
      return k.match(_v) || [];
    }
    var lm = function k(B) {
      B = B == null ? xt : Vr.defaults(xt.Object(), B, Vr.pick(xt, Rv));
      var F = B.Array, ie = B.Date, we = B.Error, ke = B.Function, gt = B.Math, Ge = B.Object, Da = B.RegExp, um = B.String, nn = B.TypeError, Oi = F.prototype, dm = ke.prototype, Gr = Ge.prototype, Ri = B["__core-js_shared__"], Ai = dm.toString, Fe = Gr.hasOwnProperty, fm = 0, Iu = function() {
        var t = /[^.]+$/.exec(Ri && Ri.keys && Ri.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), Ti = Gr.toString, hm = Ai.call(Ge), pm = xt._, gm = Da(
        "^" + Ai.call(Fe).replace(Jn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ii = mu ? B.Buffer : r, nr = B.Symbol, ki = B.Uint8Array, ku = Ii ? Ii.allocUnsafe : r, Mi = Au(Ge.getPrototypeOf, Ge), Mu = Ge.create, Lu = Gr.propertyIsEnumerable, Li = Oi.splice, Fu = nr ? nr.isConcatSpreadable : r, Eo = nr ? nr.iterator : r, $r = nr ? nr.toStringTag : r, Fi = function() {
        try {
          var t = _r(Ge, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), vm = B.clearTimeout !== xt.clearTimeout && B.clearTimeout, mm = ie && ie.now !== xt.Date.now && ie.now, wm = B.setTimeout !== xt.setTimeout && B.setTimeout, Wi = gt.ceil, Bi = gt.floor, _a = Ge.getOwnPropertySymbols, bm = Ii ? Ii.isBuffer : r, Wu = B.isFinite, ym = Oi.join, xm = Au(Ge.keys, Ge), vt = gt.max, St = gt.min, Cm = ie.now, $m = B.parseInt, Bu = gt.random, Nm = Oi.reverse, Pa = _r(B, "DataView"), Do = _r(B, "Map"), Oa = _r(B, "Promise"), Kr = _r(B, "Set"), _o = _r(B, "WeakMap"), Po = _r(Ge, "create"), Ui = _o && new _o(), Yr = {}, Sm = Pr(Pa), Em = Pr(Do), Dm = Pr(Oa), _m = Pr(Kr), Pm = Pr(_o), zi = nr ? nr.prototype : r, Oo = zi ? zi.valueOf : r, Uu = zi ? zi.toString : r;
      function $(t) {
        if (ot(t) && !be(t) && !(t instanceof De)) {
          if (t instanceof rn)
            return t;
          if (Fe.call(t, "__wrapped__"))
            return zd(t);
        }
        return new rn(t);
      }
      var qr = function() {
        function t() {
        }
        return function(o) {
          if (!nt(o))
            return {};
          if (Mu)
            return Mu(o);
          t.prototype = o;
          var a = new t();
          return t.prototype = r, a;
        };
      }();
      function Hi() {
      }
      function rn(t, o) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = r;
      }
      $.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Qt,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: yr,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: xr,
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
          _: $
        }
      }, $.prototype = Hi.prototype, $.prototype.constructor = $, rn.prototype = qr(Hi.prototype), rn.prototype.constructor = rn;
      function De(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = te, this.__views__ = [];
      }
      function Om() {
        var t = new De(this.__wrapped__);
        return t.__actions__ = kt(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = kt(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = kt(this.__views__), t;
      }
      function Rm() {
        if (this.__filtered__) {
          var t = new De(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function Am() {
        var t = this.__wrapped__.value(), o = this.__dir__, a = be(t), f = o < 0, w = a ? t.length : 0, S = V0(0, w, this.__views__), P = S.start, A = S.end, L = A - P, z = f ? A : P - 1, H = this.__iteratees__, Y = H.length, Q = 0, ce = St(L, this.__takeCount__);
        if (!a || !f && w == L && ce == L)
          return dd(t, this.__actions__);
        var pe = [];
        e:
          for (; L-- && Q < ce; ) {
            z += o;
            for (var Ce = -1, ge = t[z]; ++Ce < Y; ) {
              var Ee = H[Ce], Pe = Ee.iteratee, Kt = Ee.type, Tt = Pe(ge);
              if (Kt == ne)
                ge = Tt;
              else if (!Tt) {
                if (Kt == Z)
                  continue e;
                break e;
              }
            }
            pe[Q++] = ge;
          }
        return pe;
      }
      De.prototype = qr(Hi.prototype), De.prototype.constructor = De;
      function Nr(t) {
        var o = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++o < a; ) {
          var f = t[o];
          this.set(f[0], f[1]);
        }
      }
      function Tm() {
        this.__data__ = Po ? Po(null) : {}, this.size = 0;
      }
      function Im(t) {
        var o = this.has(t) && delete this.__data__[t];
        return this.size -= o ? 1 : 0, o;
      }
      function km(t) {
        var o = this.__data__;
        if (Po) {
          var a = o[t];
          return a === d ? r : a;
        }
        return Fe.call(o, t) ? o[t] : r;
      }
      function Mm(t) {
        var o = this.__data__;
        return Po ? o[t] !== r : Fe.call(o, t);
      }
      function Lm(t, o) {
        var a = this.__data__;
        return this.size += this.has(t) ? 0 : 1, a[t] = Po && o === r ? d : o, this;
      }
      Nr.prototype.clear = Tm, Nr.prototype.delete = Im, Nr.prototype.get = km, Nr.prototype.has = Mm, Nr.prototype.set = Lm;
      function An(t) {
        var o = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++o < a; ) {
          var f = t[o];
          this.set(f[0], f[1]);
        }
      }
      function Fm() {
        this.__data__ = [], this.size = 0;
      }
      function Wm(t) {
        var o = this.__data__, a = Vi(o, t);
        if (a < 0)
          return !1;
        var f = o.length - 1;
        return a == f ? o.pop() : Li.call(o, a, 1), --this.size, !0;
      }
      function Bm(t) {
        var o = this.__data__, a = Vi(o, t);
        return a < 0 ? r : o[a][1];
      }
      function Um(t) {
        return Vi(this.__data__, t) > -1;
      }
      function zm(t, o) {
        var a = this.__data__, f = Vi(a, t);
        return f < 0 ? (++this.size, a.push([t, o])) : a[f][1] = o, this;
      }
      An.prototype.clear = Fm, An.prototype.delete = Wm, An.prototype.get = Bm, An.prototype.has = Um, An.prototype.set = zm;
      function Tn(t) {
        var o = -1, a = t == null ? 0 : t.length;
        for (this.clear(); ++o < a; ) {
          var f = t[o];
          this.set(f[0], f[1]);
        }
      }
      function Hm() {
        this.size = 0, this.__data__ = {
          hash: new Nr(),
          map: new (Do || An)(),
          string: new Nr()
        };
      }
      function Vm(t) {
        var o = ns(this, t).delete(t);
        return this.size -= o ? 1 : 0, o;
      }
      function Gm(t) {
        return ns(this, t).get(t);
      }
      function Km(t) {
        return ns(this, t).has(t);
      }
      function Ym(t, o) {
        var a = ns(this, t), f = a.size;
        return a.set(t, o), this.size += a.size == f ? 0 : 1, this;
      }
      Tn.prototype.clear = Hm, Tn.prototype.delete = Vm, Tn.prototype.get = Gm, Tn.prototype.has = Km, Tn.prototype.set = Ym;
      function Sr(t) {
        var o = -1, a = t == null ? 0 : t.length;
        for (this.__data__ = new Tn(); ++o < a; )
          this.add(t[o]);
      }
      function qm(t) {
        return this.__data__.set(t, d), this;
      }
      function Zm(t) {
        return this.__data__.has(t);
      }
      Sr.prototype.add = Sr.prototype.push = qm, Sr.prototype.has = Zm;
      function wn(t) {
        var o = this.__data__ = new An(t);
        this.size = o.size;
      }
      function Xm() {
        this.__data__ = new An(), this.size = 0;
      }
      function jm(t) {
        var o = this.__data__, a = o.delete(t);
        return this.size = o.size, a;
      }
      function Jm(t) {
        return this.__data__.get(t);
      }
      function Qm(t) {
        return this.__data__.has(t);
      }
      function e0(t, o) {
        var a = this.__data__;
        if (a instanceof An) {
          var f = a.__data__;
          if (!Do || f.length < s - 1)
            return f.push([t, o]), this.size = ++a.size, this;
          a = this.__data__ = new Tn(f);
        }
        return a.set(t, o), this.size = a.size, this;
      }
      wn.prototype.clear = Xm, wn.prototype.delete = jm, wn.prototype.get = Jm, wn.prototype.has = Qm, wn.prototype.set = e0;
      function zu(t, o) {
        var a = be(t), f = !a && Or(t), w = !a && !f && ar(t), S = !a && !f && !w && Jr(t), P = a || f || w || S, A = P ? Na(t.length, um) : [], L = A.length;
        for (var z in t)
          (o || Fe.call(t, z)) && !(P && // Safari 9 has enumerable `arguments.length` in strict mode.
          (z == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          w && (z == "offset" || z == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          S && (z == "buffer" || z == "byteLength" || z == "byteOffset") || // Skip index properties.
          Ln(z, L))) && A.push(z);
        return A;
      }
      function Hu(t) {
        var o = t.length;
        return o ? t[Ua(0, o - 1)] : r;
      }
      function t0(t, o) {
        return rs(kt(t), Er(o, 0, t.length));
      }
      function n0(t) {
        return rs(kt(t));
      }
      function Ra(t, o, a) {
        (a !== r && !bn(t[o], a) || a === r && !(o in t)) && In(t, o, a);
      }
      function Ro(t, o, a) {
        var f = t[o];
        (!(Fe.call(t, o) && bn(f, a)) || a === r && !(o in t)) && In(t, o, a);
      }
      function Vi(t, o) {
        for (var a = t.length; a--; )
          if (bn(t[a][0], o))
            return a;
        return -1;
      }
      function r0(t, o, a, f) {
        return rr(t, function(w, S, P) {
          o(f, w, a(w), P);
        }), f;
      }
      function Vu(t, o) {
        return t && Nn(o, bt(o), t);
      }
      function o0(t, o) {
        return t && Nn(o, Lt(o), t);
      }
      function In(t, o, a) {
        o == "__proto__" && Fi ? Fi(t, o, {
          configurable: !0,
          enumerable: !0,
          value: a,
          writable: !0
        }) : t[o] = a;
      }
      function Aa(t, o) {
        for (var a = -1, f = o.length, w = F(f), S = t == null; ++a < f; )
          w[a] = S ? r : fc(t, o[a]);
        return w;
      }
      function Er(t, o, a) {
        return t === t && (a !== r && (t = t <= a ? t : a), o !== r && (t = t >= o ? t : o)), t;
      }
      function on(t, o, a, f, w, S) {
        var P, A = o & g, L = o & b, z = o & m;
        if (a && (P = w ? a(t, f, w, S) : a(t)), P !== r)
          return P;
        if (!nt(t))
          return t;
        var H = be(t);
        if (H) {
          if (P = K0(t), !A)
            return kt(t, P);
        } else {
          var Y = Et(t), Q = Y == rt || Y == _t;
          if (ar(t))
            return pd(t, A);
          if (Y == yt || Y == Oe || Q && !w) {
            if (P = L || Q ? {} : Td(t), !A)
              return L ? k0(t, o0(P, t)) : I0(t, Vu(P, t));
          } else {
            if (!Ze[Y])
              return w ? t : {};
            P = Y0(t, Y, A);
          }
        }
        S || (S = new wn());
        var ce = S.get(t);
        if (ce)
          return ce;
        S.set(t, P), lf(t) ? t.forEach(function(ge) {
          P.add(on(ge, o, a, ge, t, S));
        }) : af(t) && t.forEach(function(ge, Ee) {
          P.set(Ee, on(ge, o, a, Ee, t, S));
        });
        var pe = z ? L ? Ja : ja : L ? Lt : bt, Ce = H ? r : pe(t);
        return tn(Ce || t, function(ge, Ee) {
          Ce && (Ee = ge, ge = t[Ee]), Ro(P, Ee, on(ge, o, a, Ee, t, S));
        }), P;
      }
      function i0(t) {
        var o = bt(t);
        return function(a) {
          return Gu(a, t, o);
        };
      }
      function Gu(t, o, a) {
        var f = a.length;
        if (t == null)
          return !f;
        for (t = Ge(t); f--; ) {
          var w = a[f], S = o[w], P = t[w];
          if (P === r && !(w in t) || !S(P))
            return !1;
        }
        return !0;
      }
      function Ku(t, o, a) {
        if (typeof t != "function")
          throw new nn(l);
        return Fo(function() {
          t.apply(r, a);
        }, o);
      }
      function Ao(t, o, a, f) {
        var w = -1, S = Di, P = !0, A = t.length, L = [], z = o.length;
        if (!A)
          return L;
        a && (o = Qe(o, Ht(a))), f ? (S = wa, P = !1) : o.length >= s && (S = So, P = !1, o = new Sr(o));
        e:
          for (; ++w < A; ) {
            var H = t[w], Y = a == null ? H : a(H);
            if (H = f || H !== 0 ? H : 0, P && Y === Y) {
              for (var Q = z; Q--; )
                if (o[Q] === Y)
                  continue e;
              L.push(H);
            } else
              S(o, Y, f) || L.push(H);
          }
        return L;
      }
      var rr = bd($n), Yu = bd(Ia, !0);
      function s0(t, o) {
        var a = !0;
        return rr(t, function(f, w, S) {
          return a = !!o(f, w, S), a;
        }), a;
      }
      function Gi(t, o, a) {
        for (var f = -1, w = t.length; ++f < w; ) {
          var S = t[f], P = o(S);
          if (P != null && (A === r ? P === P && !Gt(P) : a(P, A)))
            var A = P, L = S;
        }
        return L;
      }
      function a0(t, o, a, f) {
        var w = t.length;
        for (a = xe(a), a < 0 && (a = -a > w ? 0 : w + a), f = f === r || f > w ? w : xe(f), f < 0 && (f += w), f = a > f ? 0 : df(f); a < f; )
          t[a++] = o;
        return t;
      }
      function qu(t, o) {
        var a = [];
        return rr(t, function(f, w, S) {
          o(f, w, S) && a.push(f);
        }), a;
      }
      function Ct(t, o, a, f, w) {
        var S = -1, P = t.length;
        for (a || (a = Z0), w || (w = []); ++S < P; ) {
          var A = t[S];
          o > 0 && a(A) ? o > 1 ? Ct(A, o - 1, a, f, w) : er(w, A) : f || (w[w.length] = A);
        }
        return w;
      }
      var Ta = yd(), Zu = yd(!0);
      function $n(t, o) {
        return t && Ta(t, o, bt);
      }
      function Ia(t, o) {
        return t && Zu(t, o, bt);
      }
      function Ki(t, o) {
        return Qn(o, function(a) {
          return Fn(t[a]);
        });
      }
      function Dr(t, o) {
        o = ir(o, t);
        for (var a = 0, f = o.length; t != null && a < f; )
          t = t[Sn(o[a++])];
        return a && a == f ? t : r;
      }
      function Xu(t, o, a) {
        var f = o(t);
        return be(t) ? f : er(f, a(t));
      }
      function Rt(t) {
        return t == null ? t === r ? No : Pt : $r && $r in Ge(t) ? H0(t) : n1(t);
      }
      function ka(t, o) {
        return t > o;
      }
      function c0(t, o) {
        return t != null && Fe.call(t, o);
      }
      function l0(t, o) {
        return t != null && o in Ge(t);
      }
      function u0(t, o, a) {
        return t >= St(o, a) && t < vt(o, a);
      }
      function Ma(t, o, a) {
        for (var f = a ? wa : Di, w = t[0].length, S = t.length, P = S, A = F(S), L = 1 / 0, z = []; P--; ) {
          var H = t[P];
          P && o && (H = Qe(H, Ht(o))), L = St(H.length, L), A[P] = !a && (o || w >= 120 && H.length >= 120) ? new Sr(P && H) : r;
        }
        H = t[0];
        var Y = -1, Q = A[0];
        e:
          for (; ++Y < w && z.length < L; ) {
            var ce = H[Y], pe = o ? o(ce) : ce;
            if (ce = a || ce !== 0 ? ce : 0, !(Q ? So(Q, pe) : f(z, pe, a))) {
              for (P = S; --P; ) {
                var Ce = A[P];
                if (!(Ce ? So(Ce, pe) : f(t[P], pe, a)))
                  continue e;
              }
              Q && Q.push(pe), z.push(ce);
            }
          }
        return z;
      }
      function d0(t, o, a, f) {
        return $n(t, function(w, S, P) {
          o(f, a(w), S, P);
        }), f;
      }
      function To(t, o, a) {
        o = ir(o, t), t = Ld(t, o);
        var f = t == null ? t : t[Sn(an(o))];
        return f == null ? r : zt(f, t, a);
      }
      function ju(t) {
        return ot(t) && Rt(t) == Oe;
      }
      function f0(t) {
        return ot(t) && Rt(t) == Ut;
      }
      function h0(t) {
        return ot(t) && Rt(t) == G;
      }
      function Io(t, o, a, f, w) {
        return t === o ? !0 : t == null || o == null || !ot(t) && !ot(o) ? t !== t && o !== o : p0(t, o, a, f, Io, w);
      }
      function p0(t, o, a, f, w, S) {
        var P = be(t), A = be(o), L = P ? $e : Et(t), z = A ? $e : Et(o);
        L = L == Oe ? yt : L, z = z == Oe ? yt : z;
        var H = L == yt, Y = z == yt, Q = L == z;
        if (Q && ar(t)) {
          if (!ar(o))
            return !1;
          P = !0, H = !1;
        }
        if (Q && !H)
          return S || (S = new wn()), P || Jr(t) ? Od(t, o, a, f, w, S) : U0(t, o, L, a, f, w, S);
        if (!(a & C)) {
          var ce = H && Fe.call(t, "__wrapped__"), pe = Y && Fe.call(o, "__wrapped__");
          if (ce || pe) {
            var Ce = ce ? t.value() : t, ge = pe ? o.value() : o;
            return S || (S = new wn()), w(Ce, ge, a, f, S);
          }
        }
        return Q ? (S || (S = new wn()), z0(t, o, a, f, w, S)) : !1;
      }
      function g0(t) {
        return ot(t) && Et(t) == qe;
      }
      function La(t, o, a, f) {
        var w = a.length, S = w, P = !f;
        if (t == null)
          return !S;
        for (t = Ge(t); w--; ) {
          var A = a[w];
          if (P && A[2] ? A[1] !== t[A[0]] : !(A[0] in t))
            return !1;
        }
        for (; ++w < S; ) {
          A = a[w];
          var L = A[0], z = t[L], H = A[1];
          if (P && A[2]) {
            if (z === r && !(L in t))
              return !1;
          } else {
            var Y = new wn();
            if (f)
              var Q = f(z, H, L, t, o, Y);
            if (!(Q === r ? Io(H, z, C | p, f, Y) : Q))
              return !1;
          }
        }
        return !0;
      }
      function Ju(t) {
        if (!nt(t) || j0(t))
          return !1;
        var o = Fn(t) ? gm : iv;
        return o.test(Pr(t));
      }
      function v0(t) {
        return ot(t) && Rt(t) == ht;
      }
      function m0(t) {
        return ot(t) && Et(t) == tt;
      }
      function w0(t) {
        return ot(t) && ls(t.length) && !!je[Rt(t)];
      }
      function Qu(t) {
        return typeof t == "function" ? t : t == null ? Ft : typeof t == "object" ? be(t) ? nd(t[0], t[1]) : td(t) : Cf(t);
      }
      function Fa(t) {
        if (!Lo(t))
          return xm(t);
        var o = [];
        for (var a in Ge(t))
          Fe.call(t, a) && a != "constructor" && o.push(a);
        return o;
      }
      function b0(t) {
        if (!nt(t))
          return t1(t);
        var o = Lo(t), a = [];
        for (var f in t)
          f == "constructor" && (o || !Fe.call(t, f)) || a.push(f);
        return a;
      }
      function Wa(t, o) {
        return t < o;
      }
      function ed(t, o) {
        var a = -1, f = Mt(t) ? F(t.length) : [];
        return rr(t, function(w, S, P) {
          f[++a] = o(w, S, P);
        }), f;
      }
      function td(t) {
        var o = ec(t);
        return o.length == 1 && o[0][2] ? kd(o[0][0], o[0][1]) : function(a) {
          return a === t || La(a, t, o);
        };
      }
      function nd(t, o) {
        return nc(t) && Id(o) ? kd(Sn(t), o) : function(a) {
          var f = fc(a, t);
          return f === r && f === o ? hc(a, t) : Io(o, f, C | p);
        };
      }
      function Yi(t, o, a, f, w) {
        t !== o && Ta(o, function(S, P) {
          if (w || (w = new wn()), nt(S))
            y0(t, o, P, a, Yi, f, w);
          else {
            var A = f ? f(oc(t, P), S, P + "", t, o, w) : r;
            A === r && (A = S), Ra(t, P, A);
          }
        }, Lt);
      }
      function y0(t, o, a, f, w, S, P) {
        var A = oc(t, a), L = oc(o, a), z = P.get(L);
        if (z) {
          Ra(t, a, z);
          return;
        }
        var H = S ? S(A, L, a + "", t, o, P) : r, Y = H === r;
        if (Y) {
          var Q = be(L), ce = !Q && ar(L), pe = !Q && !ce && Jr(L);
          H = L, Q || ce || pe ? be(A) ? H = A : at(A) ? H = kt(A) : ce ? (Y = !1, H = pd(L, !0)) : pe ? (Y = !1, H = gd(L, !0)) : H = [] : Wo(L) || Or(L) ? (H = A, Or(A) ? H = ff(A) : (!nt(A) || Fn(A)) && (H = Td(L))) : Y = !1;
        }
        Y && (P.set(L, H), w(H, L, f, S, P), P.delete(L)), Ra(t, a, H);
      }
      function rd(t, o) {
        var a = t.length;
        if (a)
          return o += o < 0 ? a : 0, Ln(o, a) ? t[o] : r;
      }
      function od(t, o, a) {
        o.length ? o = Qe(o, function(S) {
          return be(S) ? function(P) {
            return Dr(P, S.length === 1 ? S[0] : S);
          } : S;
        }) : o = [Ft];
        var f = -1;
        o = Qe(o, Ht(he()));
        var w = ed(t, function(S, P, A) {
          var L = Qe(o, function(z) {
            return z(S);
          });
          return { criteria: L, index: ++f, value: S };
        });
        return Yv(w, function(S, P) {
          return T0(S, P, a);
        });
      }
      function x0(t, o) {
        return id(t, o, function(a, f) {
          return hc(t, f);
        });
      }
      function id(t, o, a) {
        for (var f = -1, w = o.length, S = {}; ++f < w; ) {
          var P = o[f], A = Dr(t, P);
          a(A, P) && ko(S, ir(P, t), A);
        }
        return S;
      }
      function C0(t) {
        return function(o) {
          return Dr(o, t);
        };
      }
      function Ba(t, o, a, f) {
        var w = f ? Kv : Ur, S = -1, P = o.length, A = t;
        for (t === o && (o = kt(o)), a && (A = Qe(t, Ht(a))); ++S < P; )
          for (var L = 0, z = o[S], H = a ? a(z) : z; (L = w(A, H, L, f)) > -1; )
            A !== t && Li.call(A, L, 1), Li.call(t, L, 1);
        return t;
      }
      function sd(t, o) {
        for (var a = t ? o.length : 0, f = a - 1; a--; ) {
          var w = o[a];
          if (a == f || w !== S) {
            var S = w;
            Ln(w) ? Li.call(t, w, 1) : Va(t, w);
          }
        }
        return t;
      }
      function Ua(t, o) {
        return t + Bi(Bu() * (o - t + 1));
      }
      function $0(t, o, a, f) {
        for (var w = -1, S = vt(Wi((o - t) / (a || 1)), 0), P = F(S); S--; )
          P[f ? S : ++w] = t, t += a;
        return P;
      }
      function za(t, o) {
        var a = "";
        if (!t || o < 1 || o > ve)
          return a;
        do
          o % 2 && (a += t), o = Bi(o / 2), o && (t += t);
        while (o);
        return a;
      }
      function Ne(t, o) {
        return ic(Md(t, o, Ft), t + "");
      }
      function N0(t) {
        return Hu(Qr(t));
      }
      function S0(t, o) {
        var a = Qr(t);
        return rs(a, Er(o, 0, a.length));
      }
      function ko(t, o, a, f) {
        if (!nt(t))
          return t;
        o = ir(o, t);
        for (var w = -1, S = o.length, P = S - 1, A = t; A != null && ++w < S; ) {
          var L = Sn(o[w]), z = a;
          if (L === "__proto__" || L === "constructor" || L === "prototype")
            return t;
          if (w != P) {
            var H = A[L];
            z = f ? f(H, L, A) : r, z === r && (z = nt(H) ? H : Ln(o[w + 1]) ? [] : {});
          }
          Ro(A, L, z), A = A[L];
        }
        return t;
      }
      var ad = Ui ? function(t, o) {
        return Ui.set(t, o), t;
      } : Ft, E0 = Fi ? function(t, o) {
        return Fi(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: gc(o),
          writable: !0
        });
      } : Ft;
      function D0(t) {
        return rs(Qr(t));
      }
      function sn(t, o, a) {
        var f = -1, w = t.length;
        o < 0 && (o = -o > w ? 0 : w + o), a = a > w ? w : a, a < 0 && (a += w), w = o > a ? 0 : a - o >>> 0, o >>>= 0;
        for (var S = F(w); ++f < w; )
          S[f] = t[f + o];
        return S;
      }
      function _0(t, o) {
        var a;
        return rr(t, function(f, w, S) {
          return a = o(f, w, S), !a;
        }), !!a;
      }
      function qi(t, o, a) {
        var f = 0, w = t == null ? f : t.length;
        if (typeof o == "number" && o === o && w <= de) {
          for (; f < w; ) {
            var S = f + w >>> 1, P = t[S];
            P !== null && !Gt(P) && (a ? P <= o : P < o) ? f = S + 1 : w = S;
          }
          return w;
        }
        return Ha(t, o, Ft, a);
      }
      function Ha(t, o, a, f) {
        var w = 0, S = t == null ? 0 : t.length;
        if (S === 0)
          return 0;
        o = a(o);
        for (var P = o !== o, A = o === null, L = Gt(o), z = o === r; w < S; ) {
          var H = Bi((w + S) / 2), Y = a(t[H]), Q = Y !== r, ce = Y === null, pe = Y === Y, Ce = Gt(Y);
          if (P)
            var ge = f || pe;
          else
            z ? ge = pe && (f || Q) : A ? ge = pe && Q && (f || !ce) : L ? ge = pe && Q && !ce && (f || !Ce) : ce || Ce ? ge = !1 : ge = f ? Y <= o : Y < o;
          ge ? w = H + 1 : S = H;
        }
        return St(S, re);
      }
      function cd(t, o) {
        for (var a = -1, f = t.length, w = 0, S = []; ++a < f; ) {
          var P = t[a], A = o ? o(P) : P;
          if (!a || !bn(A, L)) {
            var L = A;
            S[w++] = P === 0 ? 0 : P;
          }
        }
        return S;
      }
      function ld(t) {
        return typeof t == "number" ? t : Gt(t) ? ee : +t;
      }
      function Vt(t) {
        if (typeof t == "string")
          return t;
        if (be(t))
          return Qe(t, Vt) + "";
        if (Gt(t))
          return Uu ? Uu.call(t) : "";
        var o = t + "";
        return o == "0" && 1 / t == -ue ? "-0" : o;
      }
      function or(t, o, a) {
        var f = -1, w = Di, S = t.length, P = !0, A = [], L = A;
        if (a)
          P = !1, w = wa;
        else if (S >= s) {
          var z = o ? null : W0(t);
          if (z)
            return Pi(z);
          P = !1, w = So, L = new Sr();
        } else
          L = o ? [] : A;
        e:
          for (; ++f < S; ) {
            var H = t[f], Y = o ? o(H) : H;
            if (H = a || H !== 0 ? H : 0, P && Y === Y) {
              for (var Q = L.length; Q--; )
                if (L[Q] === Y)
                  continue e;
              o && L.push(Y), A.push(H);
            } else
              w(L, Y, a) || (L !== A && L.push(Y), A.push(H));
          }
        return A;
      }
      function Va(t, o) {
        return o = ir(o, t), t = Ld(t, o), t == null || delete t[Sn(an(o))];
      }
      function ud(t, o, a, f) {
        return ko(t, o, a(Dr(t, o)), f);
      }
      function Zi(t, o, a, f) {
        for (var w = t.length, S = f ? w : -1; (f ? S-- : ++S < w) && o(t[S], S, t); )
          ;
        return a ? sn(t, f ? 0 : S, f ? S + 1 : w) : sn(t, f ? S + 1 : 0, f ? w : S);
      }
      function dd(t, o) {
        var a = t;
        return a instanceof De && (a = a.value()), ba(o, function(f, w) {
          return w.func.apply(w.thisArg, er([f], w.args));
        }, a);
      }
      function Ga(t, o, a) {
        var f = t.length;
        if (f < 2)
          return f ? or(t[0]) : [];
        for (var w = -1, S = F(f); ++w < f; )
          for (var P = t[w], A = -1; ++A < f; )
            A != w && (S[w] = Ao(S[w] || P, t[A], o, a));
        return or(Ct(S, 1), o, a);
      }
      function fd(t, o, a) {
        for (var f = -1, w = t.length, S = o.length, P = {}; ++f < w; ) {
          var A = f < S ? o[f] : r;
          a(P, t[f], A);
        }
        return P;
      }
      function Ka(t) {
        return at(t) ? t : [];
      }
      function Ya(t) {
        return typeof t == "function" ? t : Ft;
      }
      function ir(t, o) {
        return be(t) ? t : nc(t, o) ? [t] : Ud(Le(t));
      }
      var P0 = Ne;
      function sr(t, o, a) {
        var f = t.length;
        return a = a === r ? f : a, !o && a >= f ? t : sn(t, o, a);
      }
      var hd = vm || function(t) {
        return xt.clearTimeout(t);
      };
      function pd(t, o) {
        if (o)
          return t.slice();
        var a = t.length, f = ku ? ku(a) : new t.constructor(a);
        return t.copy(f), f;
      }
      function qa(t) {
        var o = new t.constructor(t.byteLength);
        return new ki(o).set(new ki(t)), o;
      }
      function O0(t, o) {
        var a = o ? qa(t.buffer) : t.buffer;
        return new t.constructor(a, t.byteOffset, t.byteLength);
      }
      function R0(t) {
        var o = new t.constructor(t.source, jl.exec(t));
        return o.lastIndex = t.lastIndex, o;
      }
      function A0(t) {
        return Oo ? Ge(Oo.call(t)) : {};
      }
      function gd(t, o) {
        var a = o ? qa(t.buffer) : t.buffer;
        return new t.constructor(a, t.byteOffset, t.length);
      }
      function vd(t, o) {
        if (t !== o) {
          var a = t !== r, f = t === null, w = t === t, S = Gt(t), P = o !== r, A = o === null, L = o === o, z = Gt(o);
          if (!A && !z && !S && t > o || S && P && L && !A && !z || f && P && L || !a && L || !w)
            return 1;
          if (!f && !S && !z && t < o || z && a && w && !f && !S || A && a && w || !P && w || !L)
            return -1;
        }
        return 0;
      }
      function T0(t, o, a) {
        for (var f = -1, w = t.criteria, S = o.criteria, P = w.length, A = a.length; ++f < P; ) {
          var L = vd(w[f], S[f]);
          if (L) {
            if (f >= A)
              return L;
            var z = a[f];
            return L * (z == "desc" ? -1 : 1);
          }
        }
        return t.index - o.index;
      }
      function md(t, o, a, f) {
        for (var w = -1, S = t.length, P = a.length, A = -1, L = o.length, z = vt(S - P, 0), H = F(L + z), Y = !f; ++A < L; )
          H[A] = o[A];
        for (; ++w < P; )
          (Y || w < S) && (H[a[w]] = t[w]);
        for (; z--; )
          H[A++] = t[w++];
        return H;
      }
      function wd(t, o, a, f) {
        for (var w = -1, S = t.length, P = -1, A = a.length, L = -1, z = o.length, H = vt(S - A, 0), Y = F(H + z), Q = !f; ++w < H; )
          Y[w] = t[w];
        for (var ce = w; ++L < z; )
          Y[ce + L] = o[L];
        for (; ++P < A; )
          (Q || w < S) && (Y[ce + a[P]] = t[w++]);
        return Y;
      }
      function kt(t, o) {
        var a = -1, f = t.length;
        for (o || (o = F(f)); ++a < f; )
          o[a] = t[a];
        return o;
      }
      function Nn(t, o, a, f) {
        var w = !a;
        a || (a = {});
        for (var S = -1, P = o.length; ++S < P; ) {
          var A = o[S], L = f ? f(a[A], t[A], A, a, t) : r;
          L === r && (L = t[A]), w ? In(a, A, L) : Ro(a, A, L);
        }
        return a;
      }
      function I0(t, o) {
        return Nn(t, tc(t), o);
      }
      function k0(t, o) {
        return Nn(t, Rd(t), o);
      }
      function Xi(t, o) {
        return function(a, f) {
          var w = be(a) ? Bv : r0, S = o ? o() : {};
          return w(a, t, he(f, 2), S);
        };
      }
      function Zr(t) {
        return Ne(function(o, a) {
          var f = -1, w = a.length, S = w > 1 ? a[w - 1] : r, P = w > 2 ? a[2] : r;
          for (S = t.length > 3 && typeof S == "function" ? (w--, S) : r, P && At(a[0], a[1], P) && (S = w < 3 ? r : S, w = 1), o = Ge(o); ++f < w; ) {
            var A = a[f];
            A && t(o, A, f, S);
          }
          return o;
        });
      }
      function bd(t, o) {
        return function(a, f) {
          if (a == null)
            return a;
          if (!Mt(a))
            return t(a, f);
          for (var w = a.length, S = o ? w : -1, P = Ge(a); (o ? S-- : ++S < w) && f(P[S], S, P) !== !1; )
            ;
          return a;
        };
      }
      function yd(t) {
        return function(o, a, f) {
          for (var w = -1, S = Ge(o), P = f(o), A = P.length; A--; ) {
            var L = P[t ? A : ++w];
            if (a(S[L], L, S) === !1)
              break;
          }
          return o;
        };
      }
      function M0(t, o, a) {
        var f = o & y, w = Mo(t);
        function S() {
          var P = this && this !== xt && this instanceof S ? w : t;
          return P.apply(f ? a : this, arguments);
        }
        return S;
      }
      function xd(t) {
        return function(o) {
          o = Le(o);
          var a = zr(o) ? mn(o) : r, f = a ? a[0] : o.charAt(0), w = a ? sr(a, 1).join("") : o.slice(1);
          return f[t]() + w;
        };
      }
      function Xr(t) {
        return function(o) {
          return ba(yf(bf(o).replace(Ev, "")), t, "");
        };
      }
      function Mo(t) {
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return new t();
            case 1:
              return new t(o[0]);
            case 2:
              return new t(o[0], o[1]);
            case 3:
              return new t(o[0], o[1], o[2]);
            case 4:
              return new t(o[0], o[1], o[2], o[3]);
            case 5:
              return new t(o[0], o[1], o[2], o[3], o[4]);
            case 6:
              return new t(o[0], o[1], o[2], o[3], o[4], o[5]);
            case 7:
              return new t(o[0], o[1], o[2], o[3], o[4], o[5], o[6]);
          }
          var a = qr(t.prototype), f = t.apply(a, o);
          return nt(f) ? f : a;
        };
      }
      function L0(t, o, a) {
        var f = Mo(t);
        function w() {
          for (var S = arguments.length, P = F(S), A = S, L = jr(w); A--; )
            P[A] = arguments[A];
          var z = S < 3 && P[0] !== L && P[S - 1] !== L ? [] : tr(P, L);
          if (S -= z.length, S < a)
            return Ed(
              t,
              o,
              ji,
              w.placeholder,
              r,
              P,
              z,
              r,
              r,
              a - S
            );
          var H = this && this !== xt && this instanceof w ? f : t;
          return zt(H, this, P);
        }
        return w;
      }
      function Cd(t) {
        return function(o, a, f) {
          var w = Ge(o);
          if (!Mt(o)) {
            var S = he(a, 3);
            o = bt(o), a = function(A) {
              return S(w[A], A, w);
            };
          }
          var P = t(o, a, f);
          return P > -1 ? w[S ? o[P] : P] : r;
        };
      }
      function $d(t) {
        return Mn(function(o) {
          var a = o.length, f = a, w = rn.prototype.thru;
          for (t && o.reverse(); f--; ) {
            var S = o[f];
            if (typeof S != "function")
              throw new nn(l);
            if (w && !P && ts(S) == "wrapper")
              var P = new rn([], !0);
          }
          for (f = P ? f : a; ++f < a; ) {
            S = o[f];
            var A = ts(S), L = A == "wrapper" ? Qa(S) : r;
            L && rc(L[0]) && L[1] == (R | N | O | I) && !L[4].length && L[9] == 1 ? P = P[ts(L[0])].apply(P, L[3]) : P = S.length == 1 && rc(S) ? P[A]() : P.thru(S);
          }
          return function() {
            var z = arguments, H = z[0];
            if (P && z.length == 1 && be(H))
              return P.plant(H).value();
            for (var Y = 0, Q = a ? o[Y].apply(this, z) : H; ++Y < a; )
              Q = o[Y].call(this, Q);
            return Q;
          };
        });
      }
      function ji(t, o, a, f, w, S, P, A, L, z) {
        var H = o & R, Y = o & y, Q = o & x, ce = o & (N | E), pe = o & W, Ce = Q ? r : Mo(t);
        function ge() {
          for (var Ee = arguments.length, Pe = F(Ee), Kt = Ee; Kt--; )
            Pe[Kt] = arguments[Kt];
          if (ce)
            var Tt = jr(ge), Yt = Zv(Pe, Tt);
          if (f && (Pe = md(Pe, f, w, ce)), S && (Pe = wd(Pe, S, P, ce)), Ee -= Yt, ce && Ee < z) {
            var ct = tr(Pe, Tt);
            return Ed(
              t,
              o,
              ji,
              ge.placeholder,
              a,
              Pe,
              ct,
              A,
              L,
              z - Ee
            );
          }
          var yn = Y ? a : this, Bn = Q ? yn[t] : t;
          return Ee = Pe.length, A ? Pe = r1(Pe, A) : pe && Ee > 1 && Pe.reverse(), H && L < Ee && (Pe.length = L), this && this !== xt && this instanceof ge && (Bn = Ce || Mo(Bn)), Bn.apply(yn, Pe);
        }
        return ge;
      }
      function Nd(t, o) {
        return function(a, f) {
          return d0(a, t, o(f), {});
        };
      }
      function Ji(t, o) {
        return function(a, f) {
          var w;
          if (a === r && f === r)
            return o;
          if (a !== r && (w = a), f !== r) {
            if (w === r)
              return f;
            typeof a == "string" || typeof f == "string" ? (a = Vt(a), f = Vt(f)) : (a = ld(a), f = ld(f)), w = t(a, f);
          }
          return w;
        };
      }
      function Za(t) {
        return Mn(function(o) {
          return o = Qe(o, Ht(he())), Ne(function(a) {
            var f = this;
            return t(o, function(w) {
              return zt(w, f, a);
            });
          });
        });
      }
      function Qi(t, o) {
        o = o === r ? " " : Vt(o);
        var a = o.length;
        if (a < 2)
          return a ? za(o, t) : o;
        var f = za(o, Wi(t / Hr(o)));
        return zr(o) ? sr(mn(f), 0, t).join("") : f.slice(0, t);
      }
      function F0(t, o, a, f) {
        var w = o & y, S = Mo(t);
        function P() {
          for (var A = -1, L = arguments.length, z = -1, H = f.length, Y = F(H + L), Q = this && this !== xt && this instanceof P ? S : t; ++z < H; )
            Y[z] = f[z];
          for (; L--; )
            Y[z++] = arguments[++A];
          return zt(Q, w ? a : this, Y);
        }
        return P;
      }
      function Sd(t) {
        return function(o, a, f) {
          return f && typeof f != "number" && At(o, a, f) && (a = f = r), o = Wn(o), a === r ? (a = o, o = 0) : a = Wn(a), f = f === r ? o < a ? 1 : -1 : Wn(f), $0(o, a, f, t);
        };
      }
      function es(t) {
        return function(o, a) {
          return typeof o == "string" && typeof a == "string" || (o = cn(o), a = cn(a)), t(o, a);
        };
      }
      function Ed(t, o, a, f, w, S, P, A, L, z) {
        var H = o & N, Y = H ? P : r, Q = H ? r : P, ce = H ? S : r, pe = H ? r : S;
        o |= H ? O : T, o &= ~(H ? T : O), o & D || (o &= ~(y | x));
        var Ce = [
          t,
          o,
          w,
          ce,
          Y,
          pe,
          Q,
          A,
          L,
          z
        ], ge = a.apply(r, Ce);
        return rc(t) && Fd(ge, Ce), ge.placeholder = f, Wd(ge, t, o);
      }
      function Xa(t) {
        var o = gt[t];
        return function(a, f) {
          if (a = cn(a), f = f == null ? 0 : St(xe(f), 292), f && Wu(a)) {
            var w = (Le(a) + "e").split("e"), S = o(w[0] + "e" + (+w[1] + f));
            return w = (Le(S) + "e").split("e"), +(w[0] + "e" + (+w[1] - f));
          }
          return o(a);
        };
      }
      var W0 = Kr && 1 / Pi(new Kr([, -0]))[1] == ue ? function(t) {
        return new Kr(t);
      } : wc;
      function Dd(t) {
        return function(o) {
          var a = Et(o);
          return a == qe ? Ea(o) : a == tt ? nm(o) : qv(o, t(o));
        };
      }
      function kn(t, o, a, f, w, S, P, A) {
        var L = o & x;
        if (!L && typeof t != "function")
          throw new nn(l);
        var z = f ? f.length : 0;
        if (z || (o &= ~(O | T), f = w = r), P = P === r ? P : vt(xe(P), 0), A = A === r ? A : xe(A), z -= w ? w.length : 0, o & T) {
          var H = f, Y = w;
          f = w = r;
        }
        var Q = L ? r : Qa(t), ce = [
          t,
          o,
          a,
          f,
          w,
          H,
          Y,
          S,
          P,
          A
        ];
        if (Q && e1(ce, Q), t = ce[0], o = ce[1], a = ce[2], f = ce[3], w = ce[4], A = ce[9] = ce[9] === r ? L ? 0 : t.length : vt(ce[9] - z, 0), !A && o & (N | E) && (o &= ~(N | E)), !o || o == y)
          var pe = M0(t, o, a);
        else
          o == N || o == E ? pe = L0(t, o, A) : (o == O || o == (y | O)) && !w.length ? pe = F0(t, o, a, f) : pe = ji.apply(r, ce);
        var Ce = Q ? ad : Fd;
        return Wd(Ce(pe, ce), t, o);
      }
      function _d(t, o, a, f) {
        return t === r || bn(t, Gr[a]) && !Fe.call(f, a) ? o : t;
      }
      function Pd(t, o, a, f, w, S) {
        return nt(t) && nt(o) && (S.set(o, t), Yi(t, o, r, Pd, S), S.delete(o)), t;
      }
      function B0(t) {
        return Wo(t) ? r : t;
      }
      function Od(t, o, a, f, w, S) {
        var P = a & C, A = t.length, L = o.length;
        if (A != L && !(P && L > A))
          return !1;
        var z = S.get(t), H = S.get(o);
        if (z && H)
          return z == o && H == t;
        var Y = -1, Q = !0, ce = a & p ? new Sr() : r;
        for (S.set(t, o), S.set(o, t); ++Y < A; ) {
          var pe = t[Y], Ce = o[Y];
          if (f)
            var ge = P ? f(Ce, pe, Y, o, t, S) : f(pe, Ce, Y, t, o, S);
          if (ge !== r) {
            if (ge)
              continue;
            Q = !1;
            break;
          }
          if (ce) {
            if (!ya(o, function(Ee, Pe) {
              if (!So(ce, Pe) && (pe === Ee || w(pe, Ee, a, f, S)))
                return ce.push(Pe);
            })) {
              Q = !1;
              break;
            }
          } else if (!(pe === Ce || w(pe, Ce, a, f, S))) {
            Q = !1;
            break;
          }
        }
        return S.delete(t), S.delete(o), Q;
      }
      function U0(t, o, a, f, w, S, P) {
        switch (a) {
          case vn:
            if (t.byteLength != o.byteLength || t.byteOffset != o.byteOffset)
              return !1;
            t = t.buffer, o = o.buffer;
          case Ut:
            return !(t.byteLength != o.byteLength || !S(new ki(t), new ki(o)));
          case et:
          case G:
          case Ie:
            return bn(+t, +o);
          case ye:
            return t.name == o.name && t.message == o.message;
          case ht:
          case Jt:
            return t == o + "";
          case qe:
            var A = Ea;
          case tt:
            var L = f & C;
            if (A || (A = Pi), t.size != o.size && !L)
              return !1;
            var z = P.get(t);
            if (z)
              return z == o;
            f |= p, P.set(t, o);
            var H = Od(A(t), A(o), f, w, S, P);
            return P.delete(t), H;
          case Rn:
            if (Oo)
              return Oo.call(t) == Oo.call(o);
        }
        return !1;
      }
      function z0(t, o, a, f, w, S) {
        var P = a & C, A = ja(t), L = A.length, z = ja(o), H = z.length;
        if (L != H && !P)
          return !1;
        for (var Y = L; Y--; ) {
          var Q = A[Y];
          if (!(P ? Q in o : Fe.call(o, Q)))
            return !1;
        }
        var ce = S.get(t), pe = S.get(o);
        if (ce && pe)
          return ce == o && pe == t;
        var Ce = !0;
        S.set(t, o), S.set(o, t);
        for (var ge = P; ++Y < L; ) {
          Q = A[Y];
          var Ee = t[Q], Pe = o[Q];
          if (f)
            var Kt = P ? f(Pe, Ee, Q, o, t, S) : f(Ee, Pe, Q, t, o, S);
          if (!(Kt === r ? Ee === Pe || w(Ee, Pe, a, f, S) : Kt)) {
            Ce = !1;
            break;
          }
          ge || (ge = Q == "constructor");
        }
        if (Ce && !ge) {
          var Tt = t.constructor, Yt = o.constructor;
          Tt != Yt && "constructor" in t && "constructor" in o && !(typeof Tt == "function" && Tt instanceof Tt && typeof Yt == "function" && Yt instanceof Yt) && (Ce = !1);
        }
        return S.delete(t), S.delete(o), Ce;
      }
      function Mn(t) {
        return ic(Md(t, r, Gd), t + "");
      }
      function ja(t) {
        return Xu(t, bt, tc);
      }
      function Ja(t) {
        return Xu(t, Lt, Rd);
      }
      var Qa = Ui ? function(t) {
        return Ui.get(t);
      } : wc;
      function ts(t) {
        for (var o = t.name + "", a = Yr[o], f = Fe.call(Yr, o) ? a.length : 0; f--; ) {
          var w = a[f], S = w.func;
          if (S == null || S == t)
            return w.name;
        }
        return o;
      }
      function jr(t) {
        var o = Fe.call($, "placeholder") ? $ : t;
        return o.placeholder;
      }
      function he() {
        var t = $.iteratee || vc;
        return t = t === vc ? Qu : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function ns(t, o) {
        var a = t.__data__;
        return X0(o) ? a[typeof o == "string" ? "string" : "hash"] : a.map;
      }
      function ec(t) {
        for (var o = bt(t), a = o.length; a--; ) {
          var f = o[a], w = t[f];
          o[a] = [f, w, Id(w)];
        }
        return o;
      }
      function _r(t, o) {
        var a = Qv(t, o);
        return Ju(a) ? a : r;
      }
      function H0(t) {
        var o = Fe.call(t, $r), a = t[$r];
        try {
          t[$r] = r;
          var f = !0;
        } catch {
        }
        var w = Ti.call(t);
        return f && (o ? t[$r] = a : delete t[$r]), w;
      }
      var tc = _a ? function(t) {
        return t == null ? [] : (t = Ge(t), Qn(_a(t), function(o) {
          return Lu.call(t, o);
        }));
      } : bc, Rd = _a ? function(t) {
        for (var o = []; t; )
          er(o, tc(t)), t = Mi(t);
        return o;
      } : bc, Et = Rt;
      (Pa && Et(new Pa(new ArrayBuffer(1))) != vn || Do && Et(new Do()) != qe || Oa && Et(Oa.resolve()) != pn || Kr && Et(new Kr()) != tt || _o && Et(new _o()) != it) && (Et = function(t) {
        var o = Rt(t), a = o == yt ? t.constructor : r, f = a ? Pr(a) : "";
        if (f)
          switch (f) {
            case Sm:
              return vn;
            case Em:
              return qe;
            case Dm:
              return pn;
            case _m:
              return tt;
            case Pm:
              return it;
          }
        return o;
      });
      function V0(t, o, a) {
        for (var f = -1, w = a.length; ++f < w; ) {
          var S = a[f], P = S.size;
          switch (S.type) {
            case "drop":
              t += P;
              break;
            case "dropRight":
              o -= P;
              break;
            case "take":
              o = St(o, t + P);
              break;
            case "takeRight":
              t = vt(t, o - P);
              break;
          }
        }
        return { start: t, end: o };
      }
      function G0(t) {
        var o = t.match(jg);
        return o ? o[1].split(Jg) : [];
      }
      function Ad(t, o, a) {
        o = ir(o, t);
        for (var f = -1, w = o.length, S = !1; ++f < w; ) {
          var P = Sn(o[f]);
          if (!(S = t != null && a(t, P)))
            break;
          t = t[P];
        }
        return S || ++f != w ? S : (w = t == null ? 0 : t.length, !!w && ls(w) && Ln(P, w) && (be(t) || Or(t)));
      }
      function K0(t) {
        var o = t.length, a = new t.constructor(o);
        return o && typeof t[0] == "string" && Fe.call(t, "index") && (a.index = t.index, a.input = t.input), a;
      }
      function Td(t) {
        return typeof t.constructor == "function" && !Lo(t) ? qr(Mi(t)) : {};
      }
      function Y0(t, o, a) {
        var f = t.constructor;
        switch (o) {
          case Ut:
            return qa(t);
          case et:
          case G:
            return new f(+t);
          case vn:
            return O0(t, a);
          case It:
          case Yn:
          case br:
          case qn:
          case Zn:
          case Xn:
          case Xe:
          case lt:
          case st:
            return gd(t, a);
          case qe:
            return new f();
          case Ie:
          case Jt:
            return new f(t);
          case ht:
            return R0(t);
          case tt:
            return new f();
          case Rn:
            return A0(t);
        }
      }
      function q0(t, o) {
        var a = o.length;
        if (!a)
          return t;
        var f = a - 1;
        return o[f] = (a > 1 ? "& " : "") + o[f], o = o.join(a > 2 ? ", " : " "), t.replace(Xg, `{
/* [wrapped with ` + o + `] */
`);
      }
      function Z0(t) {
        return be(t) || Or(t) || !!(Fu && t && t[Fu]);
      }
      function Ln(t, o) {
        var a = typeof t;
        return o = o ?? ve, !!o && (a == "number" || a != "symbol" && av.test(t)) && t > -1 && t % 1 == 0 && t < o;
      }
      function At(t, o, a) {
        if (!nt(a))
          return !1;
        var f = typeof o;
        return (f == "number" ? Mt(a) && Ln(o, a.length) : f == "string" && o in a) ? bn(a[o], t) : !1;
      }
      function nc(t, o) {
        if (be(t))
          return !1;
        var a = typeof t;
        return a == "number" || a == "symbol" || a == "boolean" || t == null || Gt(t) ? !0 : Ci.test(t) || !Fr.test(t) || o != null && t in Ge(o);
      }
      function X0(t) {
        var o = typeof t;
        return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? t !== "__proto__" : t === null;
      }
      function rc(t) {
        var o = ts(t), a = $[o];
        if (typeof a != "function" || !(o in De.prototype))
          return !1;
        if (t === a)
          return !0;
        var f = Qa(a);
        return !!f && t === f[0];
      }
      function j0(t) {
        return !!Iu && Iu in t;
      }
      var J0 = Ri ? Fn : yc;
      function Lo(t) {
        var o = t && t.constructor, a = typeof o == "function" && o.prototype || Gr;
        return t === a;
      }
      function Id(t) {
        return t === t && !nt(t);
      }
      function kd(t, o) {
        return function(a) {
          return a == null ? !1 : a[t] === o && (o !== r || t in Ge(a));
        };
      }
      function Q0(t) {
        var o = as(t, function(f) {
          return a.size === h && a.clear(), f;
        }), a = o.cache;
        return o;
      }
      function e1(t, o) {
        var a = t[1], f = o[1], w = a | f, S = w < (y | x | R), P = f == R && a == N || f == R && a == I && t[7].length <= o[8] || f == (R | I) && o[7].length <= o[8] && a == N;
        if (!(S || P))
          return t;
        f & y && (t[2] = o[2], w |= a & y ? 0 : D);
        var A = o[3];
        if (A) {
          var L = t[3];
          t[3] = L ? md(L, A, o[4]) : A, t[4] = L ? tr(t[3], v) : o[4];
        }
        return A = o[5], A && (L = t[5], t[5] = L ? wd(L, A, o[6]) : A, t[6] = L ? tr(t[5], v) : o[6]), A = o[7], A && (t[7] = A), f & R && (t[8] = t[8] == null ? o[8] : St(t[8], o[8])), t[9] == null && (t[9] = o[9]), t[0] = o[0], t[1] = w, t;
      }
      function t1(t) {
        var o = [];
        if (t != null)
          for (var a in Ge(t))
            o.push(a);
        return o;
      }
      function n1(t) {
        return Ti.call(t);
      }
      function Md(t, o, a) {
        return o = vt(o === r ? t.length - 1 : o, 0), function() {
          for (var f = arguments, w = -1, S = vt(f.length - o, 0), P = F(S); ++w < S; )
            P[w] = f[o + w];
          w = -1;
          for (var A = F(o + 1); ++w < o; )
            A[w] = f[w];
          return A[o] = a(P), zt(t, this, A);
        };
      }
      function Ld(t, o) {
        return o.length < 2 ? t : Dr(t, sn(o, 0, -1));
      }
      function r1(t, o) {
        for (var a = t.length, f = St(o.length, a), w = kt(t); f--; ) {
          var S = o[f];
          t[f] = Ln(S, a) ? w[S] : r;
        }
        return t;
      }
      function oc(t, o) {
        if (!(o === "constructor" && typeof t[o] == "function") && o != "__proto__")
          return t[o];
      }
      var Fd = Bd(ad), Fo = wm || function(t, o) {
        return xt.setTimeout(t, o);
      }, ic = Bd(E0);
      function Wd(t, o, a) {
        var f = o + "";
        return ic(t, q0(f, o1(G0(f), a)));
      }
      function Bd(t) {
        var o = 0, a = 0;
        return function() {
          var f = Cm(), w = ae - (f - a);
          if (a = f, w > 0) {
            if (++o >= X)
              return arguments[0];
          } else
            o = 0;
          return t.apply(r, arguments);
        };
      }
      function rs(t, o) {
        var a = -1, f = t.length, w = f - 1;
        for (o = o === r ? f : o; ++a < o; ) {
          var S = Ua(a, w), P = t[S];
          t[S] = t[a], t[a] = P;
        }
        return t.length = o, t;
      }
      var Ud = Q0(function(t) {
        var o = [];
        return t.charCodeAt(0) === 46 && o.push(""), t.replace(jn, function(a, f, w, S) {
          o.push(w ? S.replace(tv, "$1") : f || a);
        }), o;
      });
      function Sn(t) {
        if (typeof t == "string" || Gt(t))
          return t;
        var o = t + "";
        return o == "0" && 1 / t == -ue ? "-0" : o;
      }
      function Pr(t) {
        if (t != null) {
          try {
            return Ai.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function o1(t, o) {
        return tn(Te, function(a) {
          var f = "_." + a[0];
          o & a[1] && !Di(t, f) && t.push(f);
        }), t.sort();
      }
      function zd(t) {
        if (t instanceof De)
          return t.clone();
        var o = new rn(t.__wrapped__, t.__chain__);
        return o.__actions__ = kt(t.__actions__), o.__index__ = t.__index__, o.__values__ = t.__values__, o;
      }
      function i1(t, o, a) {
        (a ? At(t, o, a) : o === r) ? o = 1 : o = vt(xe(o), 0);
        var f = t == null ? 0 : t.length;
        if (!f || o < 1)
          return [];
        for (var w = 0, S = 0, P = F(Wi(f / o)); w < f; )
          P[S++] = sn(t, w, w += o);
        return P;
      }
      function s1(t) {
        for (var o = -1, a = t == null ? 0 : t.length, f = 0, w = []; ++o < a; ) {
          var S = t[o];
          S && (w[f++] = S);
        }
        return w;
      }
      function a1() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var o = F(t - 1), a = arguments[0], f = t; f--; )
          o[f - 1] = arguments[f];
        return er(be(a) ? kt(a) : [a], Ct(o, 1));
      }
      var c1 = Ne(function(t, o) {
        return at(t) ? Ao(t, Ct(o, 1, at, !0)) : [];
      }), l1 = Ne(function(t, o) {
        var a = an(o);
        return at(a) && (a = r), at(t) ? Ao(t, Ct(o, 1, at, !0), he(a, 2)) : [];
      }), u1 = Ne(function(t, o) {
        var a = an(o);
        return at(a) && (a = r), at(t) ? Ao(t, Ct(o, 1, at, !0), r, a) : [];
      });
      function d1(t, o, a) {
        var f = t == null ? 0 : t.length;
        return f ? (o = a || o === r ? 1 : xe(o), sn(t, o < 0 ? 0 : o, f)) : [];
      }
      function f1(t, o, a) {
        var f = t == null ? 0 : t.length;
        return f ? (o = a || o === r ? 1 : xe(o), o = f - o, sn(t, 0, o < 0 ? 0 : o)) : [];
      }
      function h1(t, o) {
        return t && t.length ? Zi(t, he(o, 3), !0, !0) : [];
      }
      function p1(t, o) {
        return t && t.length ? Zi(t, he(o, 3), !0) : [];
      }
      function g1(t, o, a, f) {
        var w = t == null ? 0 : t.length;
        return w ? (a && typeof a != "number" && At(t, o, a) && (a = 0, f = w), a0(t, o, a, f)) : [];
      }
      function Hd(t, o, a) {
        var f = t == null ? 0 : t.length;
        if (!f)
          return -1;
        var w = a == null ? 0 : xe(a);
        return w < 0 && (w = vt(f + w, 0)), _i(t, he(o, 3), w);
      }
      function Vd(t, o, a) {
        var f = t == null ? 0 : t.length;
        if (!f)
          return -1;
        var w = f - 1;
        return a !== r && (w = xe(a), w = a < 0 ? vt(f + w, 0) : St(w, f - 1)), _i(t, he(o, 3), w, !0);
      }
      function Gd(t) {
        var o = t == null ? 0 : t.length;
        return o ? Ct(t, 1) : [];
      }
      function v1(t) {
        var o = t == null ? 0 : t.length;
        return o ? Ct(t, ue) : [];
      }
      function m1(t, o) {
        var a = t == null ? 0 : t.length;
        return a ? (o = o === r ? 1 : xe(o), Ct(t, o)) : [];
      }
      function w1(t) {
        for (var o = -1, a = t == null ? 0 : t.length, f = {}; ++o < a; ) {
          var w = t[o];
          f[w[0]] = w[1];
        }
        return f;
      }
      function Kd(t) {
        return t && t.length ? t[0] : r;
      }
      function b1(t, o, a) {
        var f = t == null ? 0 : t.length;
        if (!f)
          return -1;
        var w = a == null ? 0 : xe(a);
        return w < 0 && (w = vt(f + w, 0)), Ur(t, o, w);
      }
      function y1(t) {
        var o = t == null ? 0 : t.length;
        return o ? sn(t, 0, -1) : [];
      }
      var x1 = Ne(function(t) {
        var o = Qe(t, Ka);
        return o.length && o[0] === t[0] ? Ma(o) : [];
      }), C1 = Ne(function(t) {
        var o = an(t), a = Qe(t, Ka);
        return o === an(a) ? o = r : a.pop(), a.length && a[0] === t[0] ? Ma(a, he(o, 2)) : [];
      }), $1 = Ne(function(t) {
        var o = an(t), a = Qe(t, Ka);
        return o = typeof o == "function" ? o : r, o && a.pop(), a.length && a[0] === t[0] ? Ma(a, r, o) : [];
      });
      function N1(t, o) {
        return t == null ? "" : ym.call(t, o);
      }
      function an(t) {
        var o = t == null ? 0 : t.length;
        return o ? t[o - 1] : r;
      }
      function S1(t, o, a) {
        var f = t == null ? 0 : t.length;
        if (!f)
          return -1;
        var w = f;
        return a !== r && (w = xe(a), w = w < 0 ? vt(f + w, 0) : St(w, f - 1)), o === o ? om(t, o, w) : _i(t, Eu, w, !0);
      }
      function E1(t, o) {
        return t && t.length ? rd(t, xe(o)) : r;
      }
      var D1 = Ne(Yd);
      function Yd(t, o) {
        return t && t.length && o && o.length ? Ba(t, o) : t;
      }
      function _1(t, o, a) {
        return t && t.length && o && o.length ? Ba(t, o, he(a, 2)) : t;
      }
      function P1(t, o, a) {
        return t && t.length && o && o.length ? Ba(t, o, r, a) : t;
      }
      var O1 = Mn(function(t, o) {
        var a = t == null ? 0 : t.length, f = Aa(t, o);
        return sd(t, Qe(o, function(w) {
          return Ln(w, a) ? +w : w;
        }).sort(vd)), f;
      });
      function R1(t, o) {
        var a = [];
        if (!(t && t.length))
          return a;
        var f = -1, w = [], S = t.length;
        for (o = he(o, 3); ++f < S; ) {
          var P = t[f];
          o(P, f, t) && (a.push(P), w.push(f));
        }
        return sd(t, w), a;
      }
      function sc(t) {
        return t == null ? t : Nm.call(t);
      }
      function A1(t, o, a) {
        var f = t == null ? 0 : t.length;
        return f ? (a && typeof a != "number" && At(t, o, a) ? (o = 0, a = f) : (o = o == null ? 0 : xe(o), a = a === r ? f : xe(a)), sn(t, o, a)) : [];
      }
      function T1(t, o) {
        return qi(t, o);
      }
      function I1(t, o, a) {
        return Ha(t, o, he(a, 2));
      }
      function k1(t, o) {
        var a = t == null ? 0 : t.length;
        if (a) {
          var f = qi(t, o);
          if (f < a && bn(t[f], o))
            return f;
        }
        return -1;
      }
      function M1(t, o) {
        return qi(t, o, !0);
      }
      function L1(t, o, a) {
        return Ha(t, o, he(a, 2), !0);
      }
      function F1(t, o) {
        var a = t == null ? 0 : t.length;
        if (a) {
          var f = qi(t, o, !0) - 1;
          if (bn(t[f], o))
            return f;
        }
        return -1;
      }
      function W1(t) {
        return t && t.length ? cd(t) : [];
      }
      function B1(t, o) {
        return t && t.length ? cd(t, he(o, 2)) : [];
      }
      function U1(t) {
        var o = t == null ? 0 : t.length;
        return o ? sn(t, 1, o) : [];
      }
      function z1(t, o, a) {
        return t && t.length ? (o = a || o === r ? 1 : xe(o), sn(t, 0, o < 0 ? 0 : o)) : [];
      }
      function H1(t, o, a) {
        var f = t == null ? 0 : t.length;
        return f ? (o = a || o === r ? 1 : xe(o), o = f - o, sn(t, o < 0 ? 0 : o, f)) : [];
      }
      function V1(t, o) {
        return t && t.length ? Zi(t, he(o, 3), !1, !0) : [];
      }
      function G1(t, o) {
        return t && t.length ? Zi(t, he(o, 3)) : [];
      }
      var K1 = Ne(function(t) {
        return or(Ct(t, 1, at, !0));
      }), Y1 = Ne(function(t) {
        var o = an(t);
        return at(o) && (o = r), or(Ct(t, 1, at, !0), he(o, 2));
      }), q1 = Ne(function(t) {
        var o = an(t);
        return o = typeof o == "function" ? o : r, or(Ct(t, 1, at, !0), r, o);
      });
      function Z1(t) {
        return t && t.length ? or(t) : [];
      }
      function X1(t, o) {
        return t && t.length ? or(t, he(o, 2)) : [];
      }
      function j1(t, o) {
        return o = typeof o == "function" ? o : r, t && t.length ? or(t, r, o) : [];
      }
      function ac(t) {
        if (!(t && t.length))
          return [];
        var o = 0;
        return t = Qn(t, function(a) {
          if (at(a))
            return o = vt(a.length, o), !0;
        }), Na(o, function(a) {
          return Qe(t, xa(a));
        });
      }
      function qd(t, o) {
        if (!(t && t.length))
          return [];
        var a = ac(t);
        return o == null ? a : Qe(a, function(f) {
          return zt(o, r, f);
        });
      }
      var J1 = Ne(function(t, o) {
        return at(t) ? Ao(t, o) : [];
      }), Q1 = Ne(function(t) {
        return Ga(Qn(t, at));
      }), ew = Ne(function(t) {
        var o = an(t);
        return at(o) && (o = r), Ga(Qn(t, at), he(o, 2));
      }), tw = Ne(function(t) {
        var o = an(t);
        return o = typeof o == "function" ? o : r, Ga(Qn(t, at), r, o);
      }), nw = Ne(ac);
      function rw(t, o) {
        return fd(t || [], o || [], Ro);
      }
      function ow(t, o) {
        return fd(t || [], o || [], ko);
      }
      var iw = Ne(function(t) {
        var o = t.length, a = o > 1 ? t[o - 1] : r;
        return a = typeof a == "function" ? (t.pop(), a) : r, qd(t, a);
      });
      function Zd(t) {
        var o = $(t);
        return o.__chain__ = !0, o;
      }
      function sw(t, o) {
        return o(t), t;
      }
      function os(t, o) {
        return o(t);
      }
      var aw = Mn(function(t) {
        var o = t.length, a = o ? t[0] : 0, f = this.__wrapped__, w = function(S) {
          return Aa(S, t);
        };
        return o > 1 || this.__actions__.length || !(f instanceof De) || !Ln(a) ? this.thru(w) : (f = f.slice(a, +a + (o ? 1 : 0)), f.__actions__.push({
          func: os,
          args: [w],
          thisArg: r
        }), new rn(f, this.__chain__).thru(function(S) {
          return o && !S.length && S.push(r), S;
        }));
      });
      function cw() {
        return Zd(this);
      }
      function lw() {
        return new rn(this.value(), this.__chain__);
      }
      function uw() {
        this.__values__ === r && (this.__values__ = uf(this.value()));
        var t = this.__index__ >= this.__values__.length, o = t ? r : this.__values__[this.__index__++];
        return { done: t, value: o };
      }
      function dw() {
        return this;
      }
      function fw(t) {
        for (var o, a = this; a instanceof Hi; ) {
          var f = zd(a);
          f.__index__ = 0, f.__values__ = r, o ? w.__wrapped__ = f : o = f;
          var w = f;
          a = a.__wrapped__;
        }
        return w.__wrapped__ = t, o;
      }
      function hw() {
        var t = this.__wrapped__;
        if (t instanceof De) {
          var o = t;
          return this.__actions__.length && (o = new De(this)), o = o.reverse(), o.__actions__.push({
            func: os,
            args: [sc],
            thisArg: r
          }), new rn(o, this.__chain__);
        }
        return this.thru(sc);
      }
      function pw() {
        return dd(this.__wrapped__, this.__actions__);
      }
      var gw = Xi(function(t, o, a) {
        Fe.call(t, a) ? ++t[a] : In(t, a, 1);
      });
      function vw(t, o, a) {
        var f = be(t) ? Nu : s0;
        return a && At(t, o, a) && (o = r), f(t, he(o, 3));
      }
      function mw(t, o) {
        var a = be(t) ? Qn : qu;
        return a(t, he(o, 3));
      }
      var ww = Cd(Hd), bw = Cd(Vd);
      function yw(t, o) {
        return Ct(is(t, o), 1);
      }
      function xw(t, o) {
        return Ct(is(t, o), ue);
      }
      function Cw(t, o, a) {
        return a = a === r ? 1 : xe(a), Ct(is(t, o), a);
      }
      function Xd(t, o) {
        var a = be(t) ? tn : rr;
        return a(t, he(o, 3));
      }
      function jd(t, o) {
        var a = be(t) ? Uv : Yu;
        return a(t, he(o, 3));
      }
      var $w = Xi(function(t, o, a) {
        Fe.call(t, a) ? t[a].push(o) : In(t, a, [o]);
      });
      function Nw(t, o, a, f) {
        t = Mt(t) ? t : Qr(t), a = a && !f ? xe(a) : 0;
        var w = t.length;
        return a < 0 && (a = vt(w + a, 0)), us(t) ? a <= w && t.indexOf(o, a) > -1 : !!w && Ur(t, o, a) > -1;
      }
      var Sw = Ne(function(t, o, a) {
        var f = -1, w = typeof o == "function", S = Mt(t) ? F(t.length) : [];
        return rr(t, function(P) {
          S[++f] = w ? zt(o, P, a) : To(P, o, a);
        }), S;
      }), Ew = Xi(function(t, o, a) {
        In(t, a, o);
      });
      function is(t, o) {
        var a = be(t) ? Qe : ed;
        return a(t, he(o, 3));
      }
      function Dw(t, o, a, f) {
        return t == null ? [] : (be(o) || (o = o == null ? [] : [o]), a = f ? r : a, be(a) || (a = a == null ? [] : [a]), od(t, o, a));
      }
      var _w = Xi(function(t, o, a) {
        t[a ? 0 : 1].push(o);
      }, function() {
        return [[], []];
      });
      function Pw(t, o, a) {
        var f = be(t) ? ba : _u, w = arguments.length < 3;
        return f(t, he(o, 4), a, w, rr);
      }
      function Ow(t, o, a) {
        var f = be(t) ? zv : _u, w = arguments.length < 3;
        return f(t, he(o, 4), a, w, Yu);
      }
      function Rw(t, o) {
        var a = be(t) ? Qn : qu;
        return a(t, cs(he(o, 3)));
      }
      function Aw(t) {
        var o = be(t) ? Hu : N0;
        return o(t);
      }
      function Tw(t, o, a) {
        (a ? At(t, o, a) : o === r) ? o = 1 : o = xe(o);
        var f = be(t) ? t0 : S0;
        return f(t, o);
      }
      function Iw(t) {
        var o = be(t) ? n0 : D0;
        return o(t);
      }
      function kw(t) {
        if (t == null)
          return 0;
        if (Mt(t))
          return us(t) ? Hr(t) : t.length;
        var o = Et(t);
        return o == qe || o == tt ? t.size : Fa(t).length;
      }
      function Mw(t, o, a) {
        var f = be(t) ? ya : _0;
        return a && At(t, o, a) && (o = r), f(t, he(o, 3));
      }
      var Lw = Ne(function(t, o) {
        if (t == null)
          return [];
        var a = o.length;
        return a > 1 && At(t, o[0], o[1]) ? o = [] : a > 2 && At(o[0], o[1], o[2]) && (o = [o[0]]), od(t, Ct(o, 1), []);
      }), ss = mm || function() {
        return xt.Date.now();
      };
      function Fw(t, o) {
        if (typeof o != "function")
          throw new nn(l);
        return t = xe(t), function() {
          if (--t < 1)
            return o.apply(this, arguments);
        };
      }
      function Jd(t, o, a) {
        return o = a ? r : o, o = t && o == null ? t.length : o, kn(t, R, r, r, r, r, o);
      }
      function Qd(t, o) {
        var a;
        if (typeof o != "function")
          throw new nn(l);
        return t = xe(t), function() {
          return --t > 0 && (a = o.apply(this, arguments)), t <= 1 && (o = r), a;
        };
      }
      var cc = Ne(function(t, o, a) {
        var f = y;
        if (a.length) {
          var w = tr(a, jr(cc));
          f |= O;
        }
        return kn(t, f, o, a, w);
      }), ef = Ne(function(t, o, a) {
        var f = y | x;
        if (a.length) {
          var w = tr(a, jr(ef));
          f |= O;
        }
        return kn(o, f, t, a, w);
      });
      function tf(t, o, a) {
        o = a ? r : o;
        var f = kn(t, N, r, r, r, r, r, o);
        return f.placeholder = tf.placeholder, f;
      }
      function nf(t, o, a) {
        o = a ? r : o;
        var f = kn(t, E, r, r, r, r, r, o);
        return f.placeholder = nf.placeholder, f;
      }
      function rf(t, o, a) {
        var f, w, S, P, A, L, z = 0, H = !1, Y = !1, Q = !0;
        if (typeof t != "function")
          throw new nn(l);
        o = cn(o) || 0, nt(a) && (H = !!a.leading, Y = "maxWait" in a, S = Y ? vt(cn(a.maxWait) || 0, o) : S, Q = "trailing" in a ? !!a.trailing : Q);
        function ce(ct) {
          var yn = f, Bn = w;
          return f = w = r, z = ct, P = t.apply(Bn, yn), P;
        }
        function pe(ct) {
          return z = ct, A = Fo(Ee, o), H ? ce(ct) : P;
        }
        function Ce(ct) {
          var yn = ct - L, Bn = ct - z, $f = o - yn;
          return Y ? St($f, S - Bn) : $f;
        }
        function ge(ct) {
          var yn = ct - L, Bn = ct - z;
          return L === r || yn >= o || yn < 0 || Y && Bn >= S;
        }
        function Ee() {
          var ct = ss();
          if (ge(ct))
            return Pe(ct);
          A = Fo(Ee, Ce(ct));
        }
        function Pe(ct) {
          return A = r, Q && f ? ce(ct) : (f = w = r, P);
        }
        function Kt() {
          A !== r && hd(A), z = 0, f = L = w = A = r;
        }
        function Tt() {
          return A === r ? P : Pe(ss());
        }
        function Yt() {
          var ct = ss(), yn = ge(ct);
          if (f = arguments, w = this, L = ct, yn) {
            if (A === r)
              return pe(L);
            if (Y)
              return hd(A), A = Fo(Ee, o), ce(L);
          }
          return A === r && (A = Fo(Ee, o)), P;
        }
        return Yt.cancel = Kt, Yt.flush = Tt, Yt;
      }
      var Ww = Ne(function(t, o) {
        return Ku(t, 1, o);
      }), Bw = Ne(function(t, o, a) {
        return Ku(t, cn(o) || 0, a);
      });
      function Uw(t) {
        return kn(t, W);
      }
      function as(t, o) {
        if (typeof t != "function" || o != null && typeof o != "function")
          throw new nn(l);
        var a = function() {
          var f = arguments, w = o ? o.apply(this, f) : f[0], S = a.cache;
          if (S.has(w))
            return S.get(w);
          var P = t.apply(this, f);
          return a.cache = S.set(w, P) || S, P;
        };
        return a.cache = new (as.Cache || Tn)(), a;
      }
      as.Cache = Tn;
      function cs(t) {
        if (typeof t != "function")
          throw new nn(l);
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return !t.call(this);
            case 1:
              return !t.call(this, o[0]);
            case 2:
              return !t.call(this, o[0], o[1]);
            case 3:
              return !t.call(this, o[0], o[1], o[2]);
          }
          return !t.apply(this, o);
        };
      }
      function zw(t) {
        return Qd(2, t);
      }
      var Hw = P0(function(t, o) {
        o = o.length == 1 && be(o[0]) ? Qe(o[0], Ht(he())) : Qe(Ct(o, 1), Ht(he()));
        var a = o.length;
        return Ne(function(f) {
          for (var w = -1, S = St(f.length, a); ++w < S; )
            f[w] = o[w].call(this, f[w]);
          return zt(t, this, f);
        });
      }), lc = Ne(function(t, o) {
        var a = tr(o, jr(lc));
        return kn(t, O, r, o, a);
      }), of = Ne(function(t, o) {
        var a = tr(o, jr(of));
        return kn(t, T, r, o, a);
      }), Vw = Mn(function(t, o) {
        return kn(t, I, r, r, r, o);
      });
      function Gw(t, o) {
        if (typeof t != "function")
          throw new nn(l);
        return o = o === r ? o : xe(o), Ne(t, o);
      }
      function Kw(t, o) {
        if (typeof t != "function")
          throw new nn(l);
        return o = o == null ? 0 : vt(xe(o), 0), Ne(function(a) {
          var f = a[o], w = sr(a, 0, o);
          return f && er(w, f), zt(t, this, w);
        });
      }
      function Yw(t, o, a) {
        var f = !0, w = !0;
        if (typeof t != "function")
          throw new nn(l);
        return nt(a) && (f = "leading" in a ? !!a.leading : f, w = "trailing" in a ? !!a.trailing : w), rf(t, o, {
          leading: f,
          maxWait: o,
          trailing: w
        });
      }
      function qw(t) {
        return Jd(t, 1);
      }
      function Zw(t, o) {
        return lc(Ya(o), t);
      }
      function Xw() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return be(t) ? t : [t];
      }
      function jw(t) {
        return on(t, m);
      }
      function Jw(t, o) {
        return o = typeof o == "function" ? o : r, on(t, m, o);
      }
      function Qw(t) {
        return on(t, g | m);
      }
      function eb(t, o) {
        return o = typeof o == "function" ? o : r, on(t, g | m, o);
      }
      function tb(t, o) {
        return o == null || Gu(t, o, bt(o));
      }
      function bn(t, o) {
        return t === o || t !== t && o !== o;
      }
      var nb = es(ka), rb = es(function(t, o) {
        return t >= o;
      }), Or = ju(function() {
        return arguments;
      }()) ? ju : function(t) {
        return ot(t) && Fe.call(t, "callee") && !Lu.call(t, "callee");
      }, be = F.isArray, ob = wu ? Ht(wu) : f0;
      function Mt(t) {
        return t != null && ls(t.length) && !Fn(t);
      }
      function at(t) {
        return ot(t) && Mt(t);
      }
      function ib(t) {
        return t === !0 || t === !1 || ot(t) && Rt(t) == et;
      }
      var ar = bm || yc, sb = bu ? Ht(bu) : h0;
      function ab(t) {
        return ot(t) && t.nodeType === 1 && !Wo(t);
      }
      function cb(t) {
        if (t == null)
          return !0;
        if (Mt(t) && (be(t) || typeof t == "string" || typeof t.splice == "function" || ar(t) || Jr(t) || Or(t)))
          return !t.length;
        var o = Et(t);
        if (o == qe || o == tt)
          return !t.size;
        if (Lo(t))
          return !Fa(t).length;
        for (var a in t)
          if (Fe.call(t, a))
            return !1;
        return !0;
      }
      function lb(t, o) {
        return Io(t, o);
      }
      function ub(t, o, a) {
        a = typeof a == "function" ? a : r;
        var f = a ? a(t, o) : r;
        return f === r ? Io(t, o, r, a) : !!f;
      }
      function uc(t) {
        if (!ot(t))
          return !1;
        var o = Rt(t);
        return o == ye || o == ft || typeof t.message == "string" && typeof t.name == "string" && !Wo(t);
      }
      function db(t) {
        return typeof t == "number" && Wu(t);
      }
      function Fn(t) {
        if (!nt(t))
          return !1;
        var o = Rt(t);
        return o == rt || o == _t || o == Be || o == Cn;
      }
      function sf(t) {
        return typeof t == "number" && t == xe(t);
      }
      function ls(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= ve;
      }
      function nt(t) {
        var o = typeof t;
        return t != null && (o == "object" || o == "function");
      }
      function ot(t) {
        return t != null && typeof t == "object";
      }
      var af = yu ? Ht(yu) : g0;
      function fb(t, o) {
        return t === o || La(t, o, ec(o));
      }
      function hb(t, o, a) {
        return a = typeof a == "function" ? a : r, La(t, o, ec(o), a);
      }
      function pb(t) {
        return cf(t) && t != +t;
      }
      function gb(t) {
        if (J0(t))
          throw new we(c);
        return Ju(t);
      }
      function vb(t) {
        return t === null;
      }
      function mb(t) {
        return t == null;
      }
      function cf(t) {
        return typeof t == "number" || ot(t) && Rt(t) == Ie;
      }
      function Wo(t) {
        if (!ot(t) || Rt(t) != yt)
          return !1;
        var o = Mi(t);
        if (o === null)
          return !0;
        var a = Fe.call(o, "constructor") && o.constructor;
        return typeof a == "function" && a instanceof a && Ai.call(a) == hm;
      }
      var dc = xu ? Ht(xu) : v0;
      function wb(t) {
        return sf(t) && t >= -ve && t <= ve;
      }
      var lf = Cu ? Ht(Cu) : m0;
      function us(t) {
        return typeof t == "string" || !be(t) && ot(t) && Rt(t) == Jt;
      }
      function Gt(t) {
        return typeof t == "symbol" || ot(t) && Rt(t) == Rn;
      }
      var Jr = $u ? Ht($u) : w0;
      function bb(t) {
        return t === r;
      }
      function yb(t) {
        return ot(t) && Et(t) == it;
      }
      function xb(t) {
        return ot(t) && Rt(t) == gn;
      }
      var Cb = es(Wa), $b = es(function(t, o) {
        return t <= o;
      });
      function uf(t) {
        if (!t)
          return [];
        if (Mt(t))
          return us(t) ? mn(t) : kt(t);
        if (Eo && t[Eo])
          return tm(t[Eo]());
        var o = Et(t), a = o == qe ? Ea : o == tt ? Pi : Qr;
        return a(t);
      }
      function Wn(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = cn(t), t === ue || t === -ue) {
          var o = t < 0 ? -1 : 1;
          return o * V;
        }
        return t === t ? t : 0;
      }
      function xe(t) {
        var o = Wn(t), a = o % 1;
        return o === o ? a ? o - a : o : 0;
      }
      function df(t) {
        return t ? Er(xe(t), 0, te) : 0;
      }
      function cn(t) {
        if (typeof t == "number")
          return t;
        if (Gt(t))
          return ee;
        if (nt(t)) {
          var o = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = nt(o) ? o + "" : o;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = Pu(t);
        var a = ov.test(t);
        return a || sv.test(t) ? Fv(t.slice(2), a ? 2 : 8) : rv.test(t) ? ee : +t;
      }
      function ff(t) {
        return Nn(t, Lt(t));
      }
      function Nb(t) {
        return t ? Er(xe(t), -ve, ve) : t === 0 ? t : 0;
      }
      function Le(t) {
        return t == null ? "" : Vt(t);
      }
      var Sb = Zr(function(t, o) {
        if (Lo(o) || Mt(o)) {
          Nn(o, bt(o), t);
          return;
        }
        for (var a in o)
          Fe.call(o, a) && Ro(t, a, o[a]);
      }), hf = Zr(function(t, o) {
        Nn(o, Lt(o), t);
      }), ds = Zr(function(t, o, a, f) {
        Nn(o, Lt(o), t, f);
      }), Eb = Zr(function(t, o, a, f) {
        Nn(o, bt(o), t, f);
      }), Db = Mn(Aa);
      function _b(t, o) {
        var a = qr(t);
        return o == null ? a : Vu(a, o);
      }
      var Pb = Ne(function(t, o) {
        t = Ge(t);
        var a = -1, f = o.length, w = f > 2 ? o[2] : r;
        for (w && At(o[0], o[1], w) && (f = 1); ++a < f; )
          for (var S = o[a], P = Lt(S), A = -1, L = P.length; ++A < L; ) {
            var z = P[A], H = t[z];
            (H === r || bn(H, Gr[z]) && !Fe.call(t, z)) && (t[z] = S[z]);
          }
        return t;
      }), Ob = Ne(function(t) {
        return t.push(r, Pd), zt(pf, r, t);
      });
      function Rb(t, o) {
        return Su(t, he(o, 3), $n);
      }
      function Ab(t, o) {
        return Su(t, he(o, 3), Ia);
      }
      function Tb(t, o) {
        return t == null ? t : Ta(t, he(o, 3), Lt);
      }
      function Ib(t, o) {
        return t == null ? t : Zu(t, he(o, 3), Lt);
      }
      function kb(t, o) {
        return t && $n(t, he(o, 3));
      }
      function Mb(t, o) {
        return t && Ia(t, he(o, 3));
      }
      function Lb(t) {
        return t == null ? [] : Ki(t, bt(t));
      }
      function Fb(t) {
        return t == null ? [] : Ki(t, Lt(t));
      }
      function fc(t, o, a) {
        var f = t == null ? r : Dr(t, o);
        return f === r ? a : f;
      }
      function Wb(t, o) {
        return t != null && Ad(t, o, c0);
      }
      function hc(t, o) {
        return t != null && Ad(t, o, l0);
      }
      var Bb = Nd(function(t, o, a) {
        o != null && typeof o.toString != "function" && (o = Ti.call(o)), t[o] = a;
      }, gc(Ft)), Ub = Nd(function(t, o, a) {
        o != null && typeof o.toString != "function" && (o = Ti.call(o)), Fe.call(t, o) ? t[o].push(a) : t[o] = [a];
      }, he), zb = Ne(To);
      function bt(t) {
        return Mt(t) ? zu(t) : Fa(t);
      }
      function Lt(t) {
        return Mt(t) ? zu(t, !0) : b0(t);
      }
      function Hb(t, o) {
        var a = {};
        return o = he(o, 3), $n(t, function(f, w, S) {
          In(a, o(f, w, S), f);
        }), a;
      }
      function Vb(t, o) {
        var a = {};
        return o = he(o, 3), $n(t, function(f, w, S) {
          In(a, w, o(f, w, S));
        }), a;
      }
      var Gb = Zr(function(t, o, a) {
        Yi(t, o, a);
      }), pf = Zr(function(t, o, a, f) {
        Yi(t, o, a, f);
      }), Kb = Mn(function(t, o) {
        var a = {};
        if (t == null)
          return a;
        var f = !1;
        o = Qe(o, function(S) {
          return S = ir(S, t), f || (f = S.length > 1), S;
        }), Nn(t, Ja(t), a), f && (a = on(a, g | b | m, B0));
        for (var w = o.length; w--; )
          Va(a, o[w]);
        return a;
      });
      function Yb(t, o) {
        return gf(t, cs(he(o)));
      }
      var qb = Mn(function(t, o) {
        return t == null ? {} : x0(t, o);
      });
      function gf(t, o) {
        if (t == null)
          return {};
        var a = Qe(Ja(t), function(f) {
          return [f];
        });
        return o = he(o), id(t, a, function(f, w) {
          return o(f, w[0]);
        });
      }
      function Zb(t, o, a) {
        o = ir(o, t);
        var f = -1, w = o.length;
        for (w || (w = 1, t = r); ++f < w; ) {
          var S = t == null ? r : t[Sn(o[f])];
          S === r && (f = w, S = a), t = Fn(S) ? S.call(t) : S;
        }
        return t;
      }
      function Xb(t, o, a) {
        return t == null ? t : ko(t, o, a);
      }
      function jb(t, o, a, f) {
        return f = typeof f == "function" ? f : r, t == null ? t : ko(t, o, a, f);
      }
      var vf = Dd(bt), mf = Dd(Lt);
      function Jb(t, o, a) {
        var f = be(t), w = f || ar(t) || Jr(t);
        if (o = he(o, 4), a == null) {
          var S = t && t.constructor;
          w ? a = f ? new S() : [] : nt(t) ? a = Fn(S) ? qr(Mi(t)) : {} : a = {};
        }
        return (w ? tn : $n)(t, function(P, A, L) {
          return o(a, P, A, L);
        }), a;
      }
      function Qb(t, o) {
        return t == null ? !0 : Va(t, o);
      }
      function ey(t, o, a) {
        return t == null ? t : ud(t, o, Ya(a));
      }
      function ty(t, o, a, f) {
        return f = typeof f == "function" ? f : r, t == null ? t : ud(t, o, Ya(a), f);
      }
      function Qr(t) {
        return t == null ? [] : Sa(t, bt(t));
      }
      function ny(t) {
        return t == null ? [] : Sa(t, Lt(t));
      }
      function ry(t, o, a) {
        return a === r && (a = o, o = r), a !== r && (a = cn(a), a = a === a ? a : 0), o !== r && (o = cn(o), o = o === o ? o : 0), Er(cn(t), o, a);
      }
      function oy(t, o, a) {
        return o = Wn(o), a === r ? (a = o, o = 0) : a = Wn(a), t = cn(t), u0(t, o, a);
      }
      function iy(t, o, a) {
        if (a && typeof a != "boolean" && At(t, o, a) && (o = a = r), a === r && (typeof o == "boolean" ? (a = o, o = r) : typeof t == "boolean" && (a = t, t = r)), t === r && o === r ? (t = 0, o = 1) : (t = Wn(t), o === r ? (o = t, t = 0) : o = Wn(o)), t > o) {
          var f = t;
          t = o, o = f;
        }
        if (a || t % 1 || o % 1) {
          var w = Bu();
          return St(t + w * (o - t + Lv("1e-" + ((w + "").length - 1))), o);
        }
        return Ua(t, o);
      }
      var sy = Xr(function(t, o, a) {
        return o = o.toLowerCase(), t + (a ? wf(o) : o);
      });
      function wf(t) {
        return pc(Le(t).toLowerCase());
      }
      function bf(t) {
        return t = Le(t), t && t.replace(cv, Xv).replace(Dv, "");
      }
      function ay(t, o, a) {
        t = Le(t), o = Vt(o);
        var f = t.length;
        a = a === r ? f : Er(xe(a), 0, f);
        var w = a;
        return a -= o.length, a >= 0 && t.slice(a, w) == o;
      }
      function cy(t) {
        return t = Le(t), t && pt.test(t) ? t.replace(Nt, jv) : t;
      }
      function ly(t) {
        return t = Le(t), t && $i.test(t) ? t.replace(Jn, "\\$&") : t;
      }
      var uy = Xr(function(t, o, a) {
        return t + (a ? "-" : "") + o.toLowerCase();
      }), dy = Xr(function(t, o, a) {
        return t + (a ? " " : "") + o.toLowerCase();
      }), fy = xd("toLowerCase");
      function hy(t, o, a) {
        t = Le(t), o = xe(o);
        var f = o ? Hr(t) : 0;
        if (!o || f >= o)
          return t;
        var w = (o - f) / 2;
        return Qi(Bi(w), a) + t + Qi(Wi(w), a);
      }
      function py(t, o, a) {
        t = Le(t), o = xe(o);
        var f = o ? Hr(t) : 0;
        return o && f < o ? t + Qi(o - f, a) : t;
      }
      function gy(t, o, a) {
        t = Le(t), o = xe(o);
        var f = o ? Hr(t) : 0;
        return o && f < o ? Qi(o - f, a) + t : t;
      }
      function vy(t, o, a) {
        return a || o == null ? o = 0 : o && (o = +o), $m(Le(t).replace(Wr, ""), o || 0);
      }
      function my(t, o, a) {
        return (a ? At(t, o, a) : o === r) ? o = 1 : o = xe(o), za(Le(t), o);
      }
      function wy() {
        var t = arguments, o = Le(t[0]);
        return t.length < 3 ? o : o.replace(t[1], t[2]);
      }
      var by = Xr(function(t, o, a) {
        return t + (a ? "_" : "") + o.toLowerCase();
      });
      function yy(t, o, a) {
        return a && typeof a != "number" && At(t, o, a) && (o = a = r), a = a === r ? te : a >>> 0, a ? (t = Le(t), t && (typeof o == "string" || o != null && !dc(o)) && (o = Vt(o), !o && zr(t)) ? sr(mn(t), 0, a) : t.split(o, a)) : [];
      }
      var xy = Xr(function(t, o, a) {
        return t + (a ? " " : "") + pc(o);
      });
      function Cy(t, o, a) {
        return t = Le(t), a = a == null ? 0 : Er(xe(a), 0, t.length), o = Vt(o), t.slice(a, a + o.length) == o;
      }
      function $y(t, o, a) {
        var f = $.templateSettings;
        a && At(t, o, a) && (o = r), t = Le(t), o = ds({}, o, f, _d);
        var w = ds({}, o.imports, f.imports, _d), S = bt(w), P = Sa(w, S), A, L, z = 0, H = o.interpolate || Ni, Y = "__p += '", Q = Da(
          (o.escape || Ni).source + "|" + H.source + "|" + (H === xr ? nv : Ni).source + "|" + (o.evaluate || Ni).source + "|$",
          "g"
        ), ce = "//# sourceURL=" + (Fe.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Av + "]") + `
`;
        t.replace(Q, function(ge, Ee, Pe, Kt, Tt, Yt) {
          return Pe || (Pe = Kt), Y += t.slice(z, Yt).replace(lv, Jv), Ee && (A = !0, Y += `' +
__e(` + Ee + `) +
'`), Tt && (L = !0, Y += `';
` + Tt + `;
__p += '`), Pe && (Y += `' +
((__t = (` + Pe + `)) == null ? '' : __t) +
'`), z = Yt + ge.length, ge;
        }), Y += `';
`;
        var pe = Fe.call(o, "variable") && o.variable;
        if (!pe)
          Y = `with (obj) {
` + Y + `
}
`;
        else if (ev.test(pe))
          throw new we(u);
        Y = (L ? Y.replace(Re, "") : Y).replace(Ue, "$1").replace(Ve, "$1;"), Y = "function(" + (pe || "obj") + `) {
` + (pe ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (A ? ", __e = _.escape" : "") + (L ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + Y + `return __p
}`;
        var Ce = xf(function() {
          return ke(S, ce + "return " + Y).apply(r, P);
        });
        if (Ce.source = Y, uc(Ce))
          throw Ce;
        return Ce;
      }
      function Ny(t) {
        return Le(t).toLowerCase();
      }
      function Sy(t) {
        return Le(t).toUpperCase();
      }
      function Ey(t, o, a) {
        if (t = Le(t), t && (a || o === r))
          return Pu(t);
        if (!t || !(o = Vt(o)))
          return t;
        var f = mn(t), w = mn(o), S = Ou(f, w), P = Ru(f, w) + 1;
        return sr(f, S, P).join("");
      }
      function Dy(t, o, a) {
        if (t = Le(t), t && (a || o === r))
          return t.slice(0, Tu(t) + 1);
        if (!t || !(o = Vt(o)))
          return t;
        var f = mn(t), w = Ru(f, mn(o)) + 1;
        return sr(f, 0, w).join("");
      }
      function _y(t, o, a) {
        if (t = Le(t), t && (a || o === r))
          return t.replace(Wr, "");
        if (!t || !(o = Vt(o)))
          return t;
        var f = mn(t), w = Ou(f, mn(o));
        return sr(f, w).join("");
      }
      function Py(t, o) {
        var a = K, f = j;
        if (nt(o)) {
          var w = "separator" in o ? o.separator : w;
          a = "length" in o ? xe(o.length) : a, f = "omission" in o ? Vt(o.omission) : f;
        }
        t = Le(t);
        var S = t.length;
        if (zr(t)) {
          var P = mn(t);
          S = P.length;
        }
        if (a >= S)
          return t;
        var A = a - Hr(f);
        if (A < 1)
          return f;
        var L = P ? sr(P, 0, A).join("") : t.slice(0, A);
        if (w === r)
          return L + f;
        if (P && (A += L.length - A), dc(w)) {
          if (t.slice(A).search(w)) {
            var z, H = L;
            for (w.global || (w = Da(w.source, Le(jl.exec(w)) + "g")), w.lastIndex = 0; z = w.exec(H); )
              var Y = z.index;
            L = L.slice(0, Y === r ? A : Y);
          }
        } else if (t.indexOf(Vt(w), A) != A) {
          var Q = L.lastIndexOf(w);
          Q > -1 && (L = L.slice(0, Q));
        }
        return L + f;
      }
      function Oy(t) {
        return t = Le(t), t && Ot.test(t) ? t.replace(wt, im) : t;
      }
      var Ry = Xr(function(t, o, a) {
        return t + (a ? " " : "") + o.toUpperCase();
      }), pc = xd("toUpperCase");
      function yf(t, o, a) {
        return t = Le(t), o = a ? r : o, o === r ? em(t) ? cm(t) : Gv(t) : t.match(o) || [];
      }
      var xf = Ne(function(t, o) {
        try {
          return zt(t, r, o);
        } catch (a) {
          return uc(a) ? a : new we(a);
        }
      }), Ay = Mn(function(t, o) {
        return tn(o, function(a) {
          a = Sn(a), In(t, a, cc(t[a], t));
        }), t;
      });
      function Ty(t) {
        var o = t == null ? 0 : t.length, a = he();
        return t = o ? Qe(t, function(f) {
          if (typeof f[1] != "function")
            throw new nn(l);
          return [a(f[0]), f[1]];
        }) : [], Ne(function(f) {
          for (var w = -1; ++w < o; ) {
            var S = t[w];
            if (zt(S[0], this, f))
              return zt(S[1], this, f);
          }
        });
      }
      function Iy(t) {
        return i0(on(t, g));
      }
      function gc(t) {
        return function() {
          return t;
        };
      }
      function ky(t, o) {
        return t == null || t !== t ? o : t;
      }
      var My = $d(), Ly = $d(!0);
      function Ft(t) {
        return t;
      }
      function vc(t) {
        return Qu(typeof t == "function" ? t : on(t, g));
      }
      function Fy(t) {
        return td(on(t, g));
      }
      function Wy(t, o) {
        return nd(t, on(o, g));
      }
      var By = Ne(function(t, o) {
        return function(a) {
          return To(a, t, o);
        };
      }), Uy = Ne(function(t, o) {
        return function(a) {
          return To(t, a, o);
        };
      });
      function mc(t, o, a) {
        var f = bt(o), w = Ki(o, f);
        a == null && !(nt(o) && (w.length || !f.length)) && (a = o, o = t, t = this, w = Ki(o, bt(o)));
        var S = !(nt(a) && "chain" in a) || !!a.chain, P = Fn(t);
        return tn(w, function(A) {
          var L = o[A];
          t[A] = L, P && (t.prototype[A] = function() {
            var z = this.__chain__;
            if (S || z) {
              var H = t(this.__wrapped__), Y = H.__actions__ = kt(this.__actions__);
              return Y.push({ func: L, args: arguments, thisArg: t }), H.__chain__ = z, H;
            }
            return L.apply(t, er([this.value()], arguments));
          });
        }), t;
      }
      function zy() {
        return xt._ === this && (xt._ = pm), this;
      }
      function wc() {
      }
      function Hy(t) {
        return t = xe(t), Ne(function(o) {
          return rd(o, t);
        });
      }
      var Vy = Za(Qe), Gy = Za(Nu), Ky = Za(ya);
      function Cf(t) {
        return nc(t) ? xa(Sn(t)) : C0(t);
      }
      function Yy(t) {
        return function(o) {
          return t == null ? r : Dr(t, o);
        };
      }
      var qy = Sd(), Zy = Sd(!0);
      function bc() {
        return [];
      }
      function yc() {
        return !1;
      }
      function Xy() {
        return {};
      }
      function jy() {
        return "";
      }
      function Jy() {
        return !0;
      }
      function Qy(t, o) {
        if (t = xe(t), t < 1 || t > ve)
          return [];
        var a = te, f = St(t, te);
        o = he(o), t -= te;
        for (var w = Na(f, o); ++a < t; )
          o(a);
        return w;
      }
      function ex(t) {
        return be(t) ? Qe(t, Sn) : Gt(t) ? [t] : kt(Ud(Le(t)));
      }
      function tx(t) {
        var o = ++fm;
        return Le(t) + o;
      }
      var nx = Ji(function(t, o) {
        return t + o;
      }, 0), rx = Xa("ceil"), ox = Ji(function(t, o) {
        return t / o;
      }, 1), ix = Xa("floor");
      function sx(t) {
        return t && t.length ? Gi(t, Ft, ka) : r;
      }
      function ax(t, o) {
        return t && t.length ? Gi(t, he(o, 2), ka) : r;
      }
      function cx(t) {
        return Du(t, Ft);
      }
      function lx(t, o) {
        return Du(t, he(o, 2));
      }
      function ux(t) {
        return t && t.length ? Gi(t, Ft, Wa) : r;
      }
      function dx(t, o) {
        return t && t.length ? Gi(t, he(o, 2), Wa) : r;
      }
      var fx = Ji(function(t, o) {
        return t * o;
      }, 1), hx = Xa("round"), px = Ji(function(t, o) {
        return t - o;
      }, 0);
      function gx(t) {
        return t && t.length ? $a(t, Ft) : 0;
      }
      function vx(t, o) {
        return t && t.length ? $a(t, he(o, 2)) : 0;
      }
      return $.after = Fw, $.ary = Jd, $.assign = Sb, $.assignIn = hf, $.assignInWith = ds, $.assignWith = Eb, $.at = Db, $.before = Qd, $.bind = cc, $.bindAll = Ay, $.bindKey = ef, $.castArray = Xw, $.chain = Zd, $.chunk = i1, $.compact = s1, $.concat = a1, $.cond = Ty, $.conforms = Iy, $.constant = gc, $.countBy = gw, $.create = _b, $.curry = tf, $.curryRight = nf, $.debounce = rf, $.defaults = Pb, $.defaultsDeep = Ob, $.defer = Ww, $.delay = Bw, $.difference = c1, $.differenceBy = l1, $.differenceWith = u1, $.drop = d1, $.dropRight = f1, $.dropRightWhile = h1, $.dropWhile = p1, $.fill = g1, $.filter = mw, $.flatMap = yw, $.flatMapDeep = xw, $.flatMapDepth = Cw, $.flatten = Gd, $.flattenDeep = v1, $.flattenDepth = m1, $.flip = Uw, $.flow = My, $.flowRight = Ly, $.fromPairs = w1, $.functions = Lb, $.functionsIn = Fb, $.groupBy = $w, $.initial = y1, $.intersection = x1, $.intersectionBy = C1, $.intersectionWith = $1, $.invert = Bb, $.invertBy = Ub, $.invokeMap = Sw, $.iteratee = vc, $.keyBy = Ew, $.keys = bt, $.keysIn = Lt, $.map = is, $.mapKeys = Hb, $.mapValues = Vb, $.matches = Fy, $.matchesProperty = Wy, $.memoize = as, $.merge = Gb, $.mergeWith = pf, $.method = By, $.methodOf = Uy, $.mixin = mc, $.negate = cs, $.nthArg = Hy, $.omit = Kb, $.omitBy = Yb, $.once = zw, $.orderBy = Dw, $.over = Vy, $.overArgs = Hw, $.overEvery = Gy, $.overSome = Ky, $.partial = lc, $.partialRight = of, $.partition = _w, $.pick = qb, $.pickBy = gf, $.property = Cf, $.propertyOf = Yy, $.pull = D1, $.pullAll = Yd, $.pullAllBy = _1, $.pullAllWith = P1, $.pullAt = O1, $.range = qy, $.rangeRight = Zy, $.rearg = Vw, $.reject = Rw, $.remove = R1, $.rest = Gw, $.reverse = sc, $.sampleSize = Tw, $.set = Xb, $.setWith = jb, $.shuffle = Iw, $.slice = A1, $.sortBy = Lw, $.sortedUniq = W1, $.sortedUniqBy = B1, $.split = yy, $.spread = Kw, $.tail = U1, $.take = z1, $.takeRight = H1, $.takeRightWhile = V1, $.takeWhile = G1, $.tap = sw, $.throttle = Yw, $.thru = os, $.toArray = uf, $.toPairs = vf, $.toPairsIn = mf, $.toPath = ex, $.toPlainObject = ff, $.transform = Jb, $.unary = qw, $.union = K1, $.unionBy = Y1, $.unionWith = q1, $.uniq = Z1, $.uniqBy = X1, $.uniqWith = j1, $.unset = Qb, $.unzip = ac, $.unzipWith = qd, $.update = ey, $.updateWith = ty, $.values = Qr, $.valuesIn = ny, $.without = J1, $.words = yf, $.wrap = Zw, $.xor = Q1, $.xorBy = ew, $.xorWith = tw, $.zip = nw, $.zipObject = rw, $.zipObjectDeep = ow, $.zipWith = iw, $.entries = vf, $.entriesIn = mf, $.extend = hf, $.extendWith = ds, mc($, $), $.add = nx, $.attempt = xf, $.camelCase = sy, $.capitalize = wf, $.ceil = rx, $.clamp = ry, $.clone = jw, $.cloneDeep = Qw, $.cloneDeepWith = eb, $.cloneWith = Jw, $.conformsTo = tb, $.deburr = bf, $.defaultTo = ky, $.divide = ox, $.endsWith = ay, $.eq = bn, $.escape = cy, $.escapeRegExp = ly, $.every = vw, $.find = ww, $.findIndex = Hd, $.findKey = Rb, $.findLast = bw, $.findLastIndex = Vd, $.findLastKey = Ab, $.floor = ix, $.forEach = Xd, $.forEachRight = jd, $.forIn = Tb, $.forInRight = Ib, $.forOwn = kb, $.forOwnRight = Mb, $.get = fc, $.gt = nb, $.gte = rb, $.has = Wb, $.hasIn = hc, $.head = Kd, $.identity = Ft, $.includes = Nw, $.indexOf = b1, $.inRange = oy, $.invoke = zb, $.isArguments = Or, $.isArray = be, $.isArrayBuffer = ob, $.isArrayLike = Mt, $.isArrayLikeObject = at, $.isBoolean = ib, $.isBuffer = ar, $.isDate = sb, $.isElement = ab, $.isEmpty = cb, $.isEqual = lb, $.isEqualWith = ub, $.isError = uc, $.isFinite = db, $.isFunction = Fn, $.isInteger = sf, $.isLength = ls, $.isMap = af, $.isMatch = fb, $.isMatchWith = hb, $.isNaN = pb, $.isNative = gb, $.isNil = mb, $.isNull = vb, $.isNumber = cf, $.isObject = nt, $.isObjectLike = ot, $.isPlainObject = Wo, $.isRegExp = dc, $.isSafeInteger = wb, $.isSet = lf, $.isString = us, $.isSymbol = Gt, $.isTypedArray = Jr, $.isUndefined = bb, $.isWeakMap = yb, $.isWeakSet = xb, $.join = N1, $.kebabCase = uy, $.last = an, $.lastIndexOf = S1, $.lowerCase = dy, $.lowerFirst = fy, $.lt = Cb, $.lte = $b, $.max = sx, $.maxBy = ax, $.mean = cx, $.meanBy = lx, $.min = ux, $.minBy = dx, $.stubArray = bc, $.stubFalse = yc, $.stubObject = Xy, $.stubString = jy, $.stubTrue = Jy, $.multiply = fx, $.nth = E1, $.noConflict = zy, $.noop = wc, $.now = ss, $.pad = hy, $.padEnd = py, $.padStart = gy, $.parseInt = vy, $.random = iy, $.reduce = Pw, $.reduceRight = Ow, $.repeat = my, $.replace = wy, $.result = Zb, $.round = hx, $.runInContext = k, $.sample = Aw, $.size = kw, $.snakeCase = by, $.some = Mw, $.sortedIndex = T1, $.sortedIndexBy = I1, $.sortedIndexOf = k1, $.sortedLastIndex = M1, $.sortedLastIndexBy = L1, $.sortedLastIndexOf = F1, $.startCase = xy, $.startsWith = Cy, $.subtract = px, $.sum = gx, $.sumBy = vx, $.template = $y, $.times = Qy, $.toFinite = Wn, $.toInteger = xe, $.toLength = df, $.toLower = Ny, $.toNumber = cn, $.toSafeInteger = Nb, $.toString = Le, $.toUpper = Sy, $.trim = Ey, $.trimEnd = Dy, $.trimStart = _y, $.truncate = Py, $.unescape = Oy, $.uniqueId = tx, $.upperCase = Ry, $.upperFirst = pc, $.each = Xd, $.eachRight = jd, $.first = Kd, mc($, function() {
        var t = {};
        return $n($, function(o, a) {
          Fe.call($.prototype, a) || (t[a] = o);
        }), t;
      }(), { chain: !1 }), $.VERSION = i, tn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        $[t].placeholder = $;
      }), tn(["drop", "take"], function(t, o) {
        De.prototype[t] = function(a) {
          a = a === r ? 1 : vt(xe(a), 0);
          var f = this.__filtered__ && !o ? new De(this) : this.clone();
          return f.__filtered__ ? f.__takeCount__ = St(a, f.__takeCount__) : f.__views__.push({
            size: St(a, te),
            type: t + (f.__dir__ < 0 ? "Right" : "")
          }), f;
        }, De.prototype[t + "Right"] = function(a) {
          return this.reverse()[t](a).reverse();
        };
      }), tn(["filter", "map", "takeWhile"], function(t, o) {
        var a = o + 1, f = a == Z || a == oe;
        De.prototype[t] = function(w) {
          var S = this.clone();
          return S.__iteratees__.push({
            iteratee: he(w, 3),
            type: a
          }), S.__filtered__ = S.__filtered__ || f, S;
        };
      }), tn(["head", "last"], function(t, o) {
        var a = "take" + (o ? "Right" : "");
        De.prototype[t] = function() {
          return this[a](1).value()[0];
        };
      }), tn(["initial", "tail"], function(t, o) {
        var a = "drop" + (o ? "" : "Right");
        De.prototype[t] = function() {
          return this.__filtered__ ? new De(this) : this[a](1);
        };
      }), De.prototype.compact = function() {
        return this.filter(Ft);
      }, De.prototype.find = function(t) {
        return this.filter(t).head();
      }, De.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, De.prototype.invokeMap = Ne(function(t, o) {
        return typeof t == "function" ? new De(this) : this.map(function(a) {
          return To(a, t, o);
        });
      }), De.prototype.reject = function(t) {
        return this.filter(cs(he(t)));
      }, De.prototype.slice = function(t, o) {
        t = xe(t);
        var a = this;
        return a.__filtered__ && (t > 0 || o < 0) ? new De(a) : (t < 0 ? a = a.takeRight(-t) : t && (a = a.drop(t)), o !== r && (o = xe(o), a = o < 0 ? a.dropRight(-o) : a.take(o - t)), a);
      }, De.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, De.prototype.toArray = function() {
        return this.take(te);
      }, $n(De.prototype, function(t, o) {
        var a = /^(?:filter|find|map|reject)|While$/.test(o), f = /^(?:head|last)$/.test(o), w = $[f ? "take" + (o == "last" ? "Right" : "") : o], S = f || /^find/.test(o);
        w && ($.prototype[o] = function() {
          var P = this.__wrapped__, A = f ? [1] : arguments, L = P instanceof De, z = A[0], H = L || be(P), Y = function(Ee) {
            var Pe = w.apply($, er([Ee], A));
            return f && Q ? Pe[0] : Pe;
          };
          H && a && typeof z == "function" && z.length != 1 && (L = H = !1);
          var Q = this.__chain__, ce = !!this.__actions__.length, pe = S && !Q, Ce = L && !ce;
          if (!S && H) {
            P = Ce ? P : new De(this);
            var ge = t.apply(P, A);
            return ge.__actions__.push({ func: os, args: [Y], thisArg: r }), new rn(ge, Q);
          }
          return pe && Ce ? t.apply(this, A) : (ge = this.thru(Y), pe ? f ? ge.value()[0] : ge.value() : ge);
        });
      }), tn(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var o = Oi[t], a = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", f = /^(?:pop|shift)$/.test(t);
        $.prototype[t] = function() {
          var w = arguments;
          if (f && !this.__chain__) {
            var S = this.value();
            return o.apply(be(S) ? S : [], w);
          }
          return this[a](function(P) {
            return o.apply(be(P) ? P : [], w);
          });
        };
      }), $n(De.prototype, function(t, o) {
        var a = $[o];
        if (a) {
          var f = a.name + "";
          Fe.call(Yr, f) || (Yr[f] = []), Yr[f].push({ name: o, func: a });
        }
      }), Yr[ji(r, x).name] = [{
        name: "wrapper",
        func: r
      }], De.prototype.clone = Om, De.prototype.reverse = Rm, De.prototype.value = Am, $.prototype.at = aw, $.prototype.chain = cw, $.prototype.commit = lw, $.prototype.next = uw, $.prototype.plant = fw, $.prototype.reverse = hw, $.prototype.toJSON = $.prototype.valueOf = $.prototype.value = pw, $.prototype.first = $.prototype.head, Eo && ($.prototype[Eo] = dw), $;
    }, Vr = lm();
    Cr ? ((Cr.exports = Vr)._ = Vr, va._ = Vr) : xt._ = Vr;
  }).call(zo);
})(Ws, Ws.exports);
var y7 = Ws.exports;
const Bs = /* @__PURE__ */ Bp(y7);
function $o() {
  const [e, n] = me({
    width: void 0,
    height: void 0
  });
  return se(() => {
    function r() {
      n({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    return window.addEventListener("resize", r), r(), () => window.removeEventListener("resize", r);
  }, []), e;
}
const Vl = async (e, n) => {
  const r = n.getRoute(), [i, ...s] = r;
  localStorage.getItem("token");
  const c = n.getNodeData().options.map((W) => W.description), l = s.map((W, K) => {
    const j = [i, ...s.slice(0, K + 1)];
    return n.context.getNode(j).getOptionContent().description;
  }), [u, ...d] = l.slice().reverse(), h = "You are part of a group of workers building a tree of subtasks to describe a project, which may be big or small.  As such, you do not provide information that is not directly related to the subtask at hand because it will probably be provided by another worker", v = `PLEASE OUTPUT A SINGLE VALID JSON OBJECT INCLUDING: (1) THE key "description" WITH A DESCRIPTION OF THE NEW ALTERNATIVE TASK  (2) THE KEY "steps" WITH AN ARRAY OF STRINGS < 50 CHARS PER ENTRY REPRESENTING THE NEW TASK'S SUBTASKS.`, g = `Please create an alternative task to the following tasks which serves the same purpose within its larger context: ${JSON.stringify(c)}.  For context, these are options of a subtask of ${d.join(" subtask of the task ")}.  Please be specific, representing a true alternative, not just an abstraction or restatement of the task.  Stop and consider "why would someone be doing this?" and then come up with another way to achieve that goal.  If there are already multiple existing alternatives, feel free to get creative and think outside the box.  `, m = `${v} ${g} Please output only single json array containing only strings.`;
  console.log("PROMPT", m, h);
  const p = (await e(h, m).catch((W) => {
    throw console.log("error", W), new Error("error getting suggestions");
  })).choices.map((W) => W.message.content);
  console.log("messages", p);
  const y = p.map((W) => {
    const K = W.match(/.*(\{[^{}]*\}).*/m);
    if (!K || !K[1])
      throw new Error(`Could not parse response: ${W}`);
    return JSON.parse(K[1]);
  }), x = y[0];
  if (console.log("alternative", x, y), y.length > 1 && console.warn("More than one alternative found", y), !x.description)
    throw console.log("messages", p), new Error("No description found");
  if (!x.steps || x.steps.length === 0)
    throw console.warn("No steps found for task", p), new Error("No steps found for task");
  const D = x.steps.map((W) => ({
    description: `generated step for ${x.description}: ${W}`,
    selectedOption: 0,
    collapsed: !1,
    options: [{
      description: W,
      data: {},
      content: []
    }]
  }));
  console.log("suggestion1");
  const N = n.getNodeData(), E = [...N.options, {
    description: x.description,
    data: {},
    content: []
  }], O = {
    ...N,
    selectedOption: E.length - 1,
    collapsed: !1,
    options: E
  }, T = n.setNodeData(O);
  console.log("inserted node", T.getNode(n.getRoute()).getNodeData(), n.getRoute());
  const R = T.getNode(n.getRoute());
  return [T.addChildrenToNode(R, D, O.selectedOption), null];
}, x7 = ({
  node: e,
  updateNodes: n,
  rowDepth: r,
  handleTextEdit: i,
  handleChange: s,
  addYoungerSibling: c,
  moveLeft: l,
  moveRight: u,
  deleteRow: d,
  moveDown: h,
  moveUp: v,
  deleteOption: g,
  addOption: b,
  locked: m,
  toggleCollapse: C,
  dragOverInfo: p,
  dragging: y,
  dragItem: x,
  activeModule: D,
  options: N
}) => {
  const E = e.context, O = e.getNodeData().options.map((Ie, Pt) => ({ value: Pt.toString(), label: Ie.description })), T = e.getNodeData(), R = T.selectedOption;
  R === void 0 && console.log("selectedOption", T);
  const I = e.getChildren(R), W = e.getNodeId(), K = e.getNodeType(), j = !!(y && y.node && e.isChildOf(y.node)), X = `${K}-${W}`, ae = y && j ? y.id : X, {
    attributes: Z,
    listeners: ne,
    setNodeRef: oe,
    transform: ue
    // transition,
  } = Ag({ id: ae, data: { node: j ? y.node : e } }), {
    setNodeRef: ve,
    isOver: V
  } = Hl({
    id: ae,
    disabled: j || m,
    data: { node: e }
  }), ee = {
    transform: Rs.Transform.toString(ue),
    // transition,
    ...y && y.id !== `${x == null ? void 0 : x.id}` ? { opacity: 0.9 } : {}
  }, te = !!V && (p == null ? void 0 : p.position) === "on";
  y == null || y.id, y && y.id;
  const de = V && p && p.id === X ? {
    ...p.position === "above" ? {
      paddingTop: "12px",
      // backgroundColor: 'rgba(230, 220, 200, .1)',
      // background: 'linear-gradient(rgba(230, 220, 200, .1) 0%, rgba(230, 220, 200, .1) 30%, rgba(230, 220, 200, 0) 30%, rgba(230, 220, 200, 0) 100%)',
      transition: "padding-top 0.3s ease padding-bottom 0.3s ease transform 0.3s ease",
      transform: "translateY(12px)"
    } : {},
    ...p.position === "below" ? {
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
  }, Te = Bs.isEqual(E.data.focus.route, e.getRoute()), Oe = E.data.focus.char, $e = (Ie) => {
    console.log("setFocus", Ie), Ie !== Oe && E.setFocus(e.getRoute(), Ie);
  }, Be = () => {
    e.moveFocusUp();
  }, et = () => {
    e.moveFocusDown();
  }, G = () => {
    console.log("undo", N == null ? void 0 : N.canUndo), N != null && N.canUndo && (N != null && N.undo) && (N == null || N.undo());
  }, ft = () => {
    console.log("redo", N == null ? void 0 : N.canRedo), N != null && N.canRedo && (N != null && N.redo) && (N == null || N.redo());
  }, ye = async () => {
    if (N != null && N.canPromptGPT && (N != null && N.promptGPT)) {
      const [Ie, Pt] = await Vl(N.promptGPT, e);
      Ie ? E.setNodes(Ie.data.nodes) : N != null && N.toast && N.toast({
        title: "Error",
        description: "No suggestions could be generated",
        duration: 5e3
      });
    } else {
      console.error("No authedApi");
      const Ie = new Error("No authedApi");
      throw Ie.cause = "unauthorized", Ie;
    }
  }, rt = $o();
  rt.width && rt.width < 500;
  const _t = rt.width ? Math.floor((rt.width - 500) / 100) : 0, qe = D == null ? void 0 : D.RowComponent;
  return /* @__PURE__ */ q("div", { className: `w-full border-t ${Te ? "bg-white/5" : ""} max-w-svw border-box`, children: [
    /* @__PURE__ */ _("div", { style: { ...ee }, className: "flex w-full rounded-sm", ref: oe, ...Z, ...ne, children: /* @__PURE__ */ q(
      "div",
      {
        style: {
          ...de,
          width: "calc(100%)",
          paddingLeft: `${(_t - r) * 1.5}rem`
        },
        ref: ve,
        className: "flex items-center cursor-text ",
        children: [
          r > 0 && I.length > 0 && /* @__PURE__ */ _("div", { className: "right-box ", style: {
            width: "1.6rem"
          }, children: /* @__PURE__ */ _("div", { className: "pl-1", children: /* @__PURE__ */ _(
            "span",
            {
              onClick: C,
              className: "py-3 cursor-pointer",
              children: T.collapsed ? /* @__PURE__ */ _(Kh, { size: "15px" }) : /* @__PURE__ */ _(Gh, { size: "15px" })
            }
          ) }) }),
          /* @__PURE__ */ _("div", { className: "left-box", style: {
            width: "2rem"
          }, children: /* @__PURE__ */ _("span", { className: "px-1", children: /* @__PURE__ */ _(
            C7,
            {
              node: e,
              hasChildren: I.length > 0,
              context: E,
              updateNodes: n
            }
          ) }) }),
          /* @__PURE__ */ q("div", { className: "flex flex-initial grow", children: [
            /* @__PURE__ */ _("div", { className: "flex flex-initial grow", children: /* @__PURE__ */ _(
              i3,
              {
                className: "w-full bg-transparent",
                handleTextEdit: i,
                handleChange: s,
                addYoungerSibling: c,
                moveLeft: l,
                moveRight: u,
                deleteRow: d,
                addOption: b,
                moveFocusDown: et,
                moveFocusUp: Be,
                toggleCollapse: C,
                deleteOption: g,
                suggestOption: ye,
                moveDown: h,
                moveUp: v,
                handleRedo: ft,
                handleUndo: G,
                selectedIndex: R,
                values: O,
                locked: E.locked || m,
                setFocus: $e,
                draggingOver: !!V,
                draggingOn: te,
                isDragging: y ? y.id === `${x == null ? void 0 : x.id}` : !1,
                hasFocus: Te,
                focusChar: Oe,
                variant: "text-mimic",
                defaultValue: R.toString()
              }
            ) }),
            qe && /* @__PURE__ */ _("div", { className: "right-box", children: /* @__PURE__ */ _(qe, { node: e, options: N }) })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ _("div", { className: " ", children: !T.collapsed && r > 0 && I.length > 0 && /* @__PURE__ */ _(
      Yl,
      {
        rows: I,
        rowDepth: r - 1,
        context: E,
        dragging: y,
        dragOverInfo: p,
        parentNode: e,
        locked: E.locked || m,
        activeModule: D,
        options: N
      }
    ) })
  ] });
};
function C7({
  node: e,
  // allowedChildren,
  hasChildren: n,
  context: r,
  updateNodes: i
}) {
  const [s, c] = Me.useState(!1), l = () => {
    u();
  }, u = () => {
    r.setTrail(e.getRoute());
  };
  return /* @__PURE__ */ q(hr, { children: [
    /* @__PURE__ */ _(Cp, { open: s, onOpenChange: c, children: /* @__PURE__ */ q(Cl, { side: "left", children: [
      /* @__PURE__ */ _($l, { children: "Actions" }),
      /* @__PURE__ */ _("div", { children: /* @__PURE__ */ _("div", { className: "flex items-center px-3", children: /* @__PURE__ */ q("div", { className: "flex w-60 justify-around", children: [
        /* @__PURE__ */ _(Se, { variant: "destructive", onClick: () => {
          const v = r.snipNode(e.getRoute());
          i(v), c(!1);
        }, children: /* @__PURE__ */ _(Ih, {}) }),
        /* @__PURE__ */ _(Se, { variant: "destructive", onClick: () => {
          const v = r.deleteNode(e.getRoute());
          i(v), c(!1);
        }, children: /* @__PURE__ */ _(Xh, {}) })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ _(
      Se,
      {
        variant: "secondary",
        style: { background: "transparent", padding: "10px 10px 10px 0px" },
        onKeyDown: (v) => {
          v.stopPropagation(), c(!0);
        },
        onClick: l,
        children: /* @__PURE__ */ _(Mh, { style: {
          opacity: n ? 1 : 0.5
        } })
      }
    )
  ] });
}
const $7 = vl(
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
), la = M.forwardRef(
  ({ className: e, variant: n, size: r, asChild: i = !1, ...s }, c) => /* @__PURE__ */ _(
    i ? gr : "button",
    {
      className: Ye($7({ variant: n, size: r, className: e })),
      ref: c,
      ...s
    }
  )
);
la.displayName = "StepButton";
function N7({
  values: e,
  searchMessage: n = "Search...",
  selectMessage: r = "Select...",
  emptyMessage: i = "No results",
  // defaultValue,
  selectedIndex: s,
  // handleTextEdit,
  isDragging: c,
  // draggingOver,
  // draggingOn,
  handleChange: l,
  // addYoungerSibling,
  moveLeft: u,
  moveRight: d,
  moveUp: h,
  moveDown: v,
  moveFocusUp: g,
  moveFocusDown: b,
  // deleteOption,
  // deleteRow,
  // addOption,
  // handleUndo,
  // handleRedo,
  toggleCollapse: m,
  variant: C = "default",
  hasFocus: p,
  // focusChar,
  setFocus: y,
  // locked,
  added: x,
  removed: D,
  ...N
}) {
  const [E, O] = M.useState(!1), [T, R] = M.useState(s.toString() || "0");
  M.useEffect(() => {
    if (s !== void 0) {
      if (e.length < 1)
        throw new Error("values.length < 1");
      R(s.toString() || "0");
    }
  }, [s]);
  const I = {
    default: "w-[200px] justify-between",
    "text-mimic": "w-full justify-between text-left display-flex"
  }[C], W = {
    default: {},
    "text-mimic": {
      width: "50vw",
      fontSize: "1rem",
      fontWeight: "normal",
      paddingRight: "5px"
    }
  }[C];
  return M.useEffect(() => {
    console.log("hasFocus", p);
  }, [p]), /* @__PURE__ */ q(aa, { open: E, onOpenChange: O, children: [
    /* @__PURE__ */ _(ca, { asChild: !0, children: /* @__PURE__ */ q("div", { style: {
      position: "relative",
      opacity: 1
    }, children: [
      /* @__PURE__ */ _(
        la,
        {
          variant: "outline",
          role: "combobox",
          size: "lg",
          "aria-expanded": E,
          className: `${I} text-right px-2  ${x ? "ring-emerald-900" : D ? "ring-destructive-900" : "border-white"}`,
          style: {
            ...W
            // ...dropStyle,
            // border: '1px solid black',
          },
          ...N,
          children: /* @__PURE__ */ _("div", { className: "w-full justify-end items-end flex p-0", children: /* @__PURE__ */ _(Ks, { className: `h-4 ${e.length > 1 ? "text-teal-100/80" : "opacity-80 fill-white"}`, style: {
            padding: "0px 0px 0px 0px"
          } }) })
        }
      ),
      /* @__PURE__ */ _("div", { style: {
        zIndex: "3",
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%"
        // ...dropOnStyle
      }, className: "rounded-sm", children: /* @__PURE__ */ _("div", { className: "w-full px-3 py-2", children: e[parseInt(T)] || /* @__PURE__ */ _("span", { className: "opacity-50", children: "New Option" }) }) })
    ] }) }),
    /* @__PURE__ */ _(wi, { className: "w-[200px] p-0", children: /* @__PURE__ */ q(pi, { children: [
      /* @__PURE__ */ _(gi, { children: i }),
      /* @__PURE__ */ _(Ir, { children: e.map((K, j) => /* @__PURE__ */ q(
        vi,
        {
          value: j.toString(),
          onSelect: (X) => {
            R(X === T ? T : X), l(X), O(!1);
          },
          children: [
            K || /* @__PURE__ */ _("span", { className: "opacity-50", children: "New Option" }),
            /* @__PURE__ */ _(
              Ys,
              {
                className: Ye(
                  "ml-auto h-4 w-4",
                  s === j ? "opacity-100" : "opacity-0"
                )
              }
            )
          ]
        },
        j
      )) })
    ] }) })
  ] });
}
const Gl = ({
  parentNode: e,
  context: n,
  // value,
  dragging: r,
  rowDepth: i,
  dragOverInfo: s,
  locked: c,
  activeModule: l,
  options: u
}) => {
  const d = e.getMergeChildren();
  e.getMergedIndex();
  const h = d.map(({ node: b }, m) => {
    const C = b.getNodeId();
    return {
      id: `${b.getNodeType()}-${C}`,
      data: { node: b }
    };
  }), v = (b) => {
    n.setNodes(b.data.nodes);
  }, g = $o();
  return g.width !== void 0 && g.width < 500, /* @__PURE__ */ _("div", { children: d.length > 0 && d.map(({ node: b, added: m, removed: C }, p) => {
    const y = b.getNodeData(), x = (I) => {
      console.log("handleChange", I);
      const W = { ...y, selectedOption: parseInt(I) }, K = n.setNode(b, W);
      v(K);
    }, D = () => {
      const I = b.getNodeData(), W = { ...I, collapsed: !y.collapsed };
      console.log("collapseNodeData", I, y.collapsed, W), b.setNodeData(W);
    }, N = () => {
      console.log("moveLeft", p), n.moveNodeLeft(b.getRoute());
    }, E = () => {
      console.log("moveRight", p), n.moveNodeRight(b.getRoute());
    }, O = () => {
      console.log("moveUp", p);
    }, T = () => {
      console.log("moveDown", p);
    }, R = h[p];
    if (R === void 0)
      throw new Error("item is undefined");
    return /* @__PURE__ */ _("div", { className: `HERE-${p}`, children: /* @__PURE__ */ _(
      Tg,
      {
        node: b,
        dragItem: R,
        updateNodes: v,
        dragging: r,
        dragOverInfo: s,
        locked: c,
        moveLeft: N,
        moveRight: E,
        moveUp: O,
        moveDown: T,
        toggleCollapse: D,
        handleChange: x,
        rowDepth: i,
        added: m,
        removed: C,
        options: u
      }
    ) }, p);
  }) });
}, Tg = ({
  node: e,
  updateNodes: n,
  rowDepth: r,
  handleChange: i,
  moveLeft: s,
  moveRight: c,
  moveDown: l,
  moveUp: u,
  locked: d,
  toggleCollapse: h,
  dragOverInfo: v,
  dragging: g,
  dragItem: b,
  added: m,
  removed: C,
  options: p
}) => {
  const y = e.context, x = e.getNodeData(), D = x.selectedOption;
  D === void 0 && console.log("selectedOption", x);
  const N = e.getChildren(D), E = e.getNodeId(), O = e.getNodeType(), T = !!(g && g.node && e.isChildOf(g.node)), R = `${O}-${E}`, I = g && T ? g.id : R, {
    attributes: W,
    listeners: K,
    setNodeRef: j,
    transform: X
    // transition,
  } = Ag({ id: I, data: { node: T ? g.node : e } }), {
    setNodeRef: ae,
    isOver: Z
  } = Hl({
    id: I,
    disabled: T || d,
    data: { node: e }
  }), ne = {
    transform: Rs.Transform.toString(X),
    // transition,
    ...g && g.id !== `${b == null ? void 0 : b.id}` ? { opacity: 0.9 } : {}
  };
  Z && (v == null || v.position), g == null || g.id, g && g.id;
  const ue = Z && v && v.id === R ? {
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
  }, ve = Bs.isEqual(y.data.focus.route, e.getRoute()), V = y.data.focus.char, ee = (G) => {
    G !== V && y.setFocus(e.getRoute(), G);
  }, te = () => {
    e.moveFocusUp();
  }, re = () => {
    e.moveFocusDown();
  }, de = $o(), Te = de.width && de.width < 500, Oe = () => {
    const G = e.acceptMerge();
    n(G);
  }, $e = () => {
    const G = e.rejectMerge();
    n(G);
  }, Be = () => {
    const G = e.bothMerge();
    n(G);
  }, et = e.hasMerge() ? e.getMergeOptions().map((G, ft) => /* @__PURE__ */ _(hr, { children: G.description.map((ye, rt) => /* @__PURE__ */ _(
    "span",
    {
      className: `${ye.added ? "bg-emerald-950/90" : ye.removed ? "text-destructive bg-destructive-950/90" : ""}`,
      children: ye.value
    },
    rt
  )) }), []) : e.getNodeData().options.map((G, ft) => /* @__PURE__ */ _("span", { children: G.description }, ft));
  return /* @__PURE__ */ q("div", { className: "w-full", children: [
    /* @__PURE__ */ _("div", { style: { ...ne }, className: "flex w-full rounded-sm", ref: j, ...W, ...K, children: /* @__PURE__ */ q(
      "div",
      {
        style: ue,
        ref: ae,
        className: "flex items-center h-16 w-full",
        children: [
          /* @__PURE__ */ _("div", { className: "flex-none w-25 flex", children: /* @__PURE__ */ q("div", { className: `flex ${Te ? "w-25" : "w-100"} pl-3`, children: [
            r > 0 && N.length > 0 ? /* @__PURE__ */ _(
              "span",
              {
                onClick: h,
                className: "px-3 py-3",
                children: x.collapsed ? /* @__PURE__ */ _(Kh, { size: "15px" }) : /* @__PURE__ */ _(Gh, { size: "15px" })
              }
            ) : Te ? /* @__PURE__ */ _(hr, {}) : /* @__PURE__ */ _("span", { className: "px-3", children: "    " }),
            /* @__PURE__ */ _("span", { className: "px-1", children: /* @__PURE__ */ _(
              S7,
              {
                node: e,
                hasChildren: N.length > 0,
                context: y,
                updateNodes: n
              }
            ) }),
            /* @__PURE__ */ _(
              "span",
              {
                className: "pr-1 py-3",
                style: {
                  opacity: (g == null ? void 0 : g.id) === `${b == null ? void 0 : b.id}` ? "1" : "0"
                },
                children: /* @__PURE__ */ _(Px, {})
              }
            )
          ] }) }),
          /* @__PURE__ */ _("div", { className: "flex flex-initial w-full", children: /* @__PURE__ */ q("div", { className: "flex", style: {
            width: "60vw"
          }, children: [
            /* @__PURE__ */ _(
              N7,
              {
                className: "w-full bg-transparent",
                handleChange: i,
                moveLeft: s,
                moveRight: c,
                moveFocusDown: re,
                moveFocusUp: te,
                toggleCollapse: h,
                moveDown: l,
                moveUp: u,
                added: m,
                removed: C,
                selectedIndex: D,
                values: et,
                setFocus: ee,
                isDragging: g ? g.id === `${b == null ? void 0 : b.id}` : !1,
                hasFocus: ve,
                variant: "text-mimic",
                defaultValue: D.toString()
              }
            ),
            /* @__PURE__ */ q("div", { style: { minWidth: "80px" }, className: "flex items-center justify-end", children: [
              /* @__PURE__ */ q(Se, { className: "bg-amber-200/70 p-1 h-7 ", onClick: Be, children: [
                /* @__PURE__ */ _(R2, { size: "1rem" }),
                " "
              ] }),
              /* @__PURE__ */ q(Se, { className: "bg-emerald-700 p-1 h-7", onClick: Oe, children: [
                /* @__PURE__ */ _(S2, { size: "1rem" }),
                " "
              ] }),
              /* @__PURE__ */ q(Se, { variant: "destructive", className: "p-1 h-7", onClick: $e, children: [
                /* @__PURE__ */ _(k2, { size: "1rem" }),
                " "
              ] })
            ] })
          ] }) })
        ]
      }
    ) }),
    /* @__PURE__ */ _("div", { className: `${Te ? "pl-2" : "pl-8"}`, children: !x.collapsed && r > 0 && N.length > 0 && /* @__PURE__ */ _(
      Gl,
      {
        rowDepth: r - 1,
        context: y,
        dragging: g,
        dragOverInfo: v,
        parentNode: e,
        locked: !0,
        options: p
      }
    ) })
  ] });
};
function S7({
  node: e,
  // allowedChildren,
  hasChildren: n,
  context: r,
  updateNodes: i
}) {
  const [s, c] = Me.useState(!1), l = () => {
    u();
  }, u = () => {
    r.setTrail(e.getRoute());
  };
  return /* @__PURE__ */ q(hr, { children: [
    /* @__PURE__ */ _(Cp, { open: s, onOpenChange: c, children: /* @__PURE__ */ q(Cl, { side: "left", children: [
      /* @__PURE__ */ _($l, { children: "Actions" }),
      /* @__PURE__ */ _("div", { children: /* @__PURE__ */ _("div", { className: "flex items-center px-3", children: /* @__PURE__ */ q("div", { className: "flex w-60 justify-around", children: [
        /* @__PURE__ */ _(Se, { variant: "destructive", onClick: () => {
          const v = r.snipNode(e.getRoute());
          i(v), c(!1);
        }, children: /* @__PURE__ */ _(Ih, {}) }),
        /* @__PURE__ */ _(Se, { variant: "destructive", onClick: () => {
          const v = r.deleteNode(e.getRoute());
          i(v), c(!1);
        }, children: /* @__PURE__ */ _(Xh, {}) })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ _(
      Se,
      {
        variant: "secondary",
        style: { background: "transparent", padding: "10px 10px 10px 0px" },
        onKeyDown: (v) => {
          v.stopPropagation(), c(!0);
        },
        onClick: l,
        children: /* @__PURE__ */ _(Mh, { style: {
          opacity: n ? 1 : 0.5
        } })
      }
    )
  ] });
}
const Kl = async (e, n) => {
  const r = n.getRoute(), [i, ...s] = r;
  localStorage.getItem("token");
  const {
    description: c,
    content: l
  } = n.getOptionContent(), u = s.map((T, R) => {
    const I = [i, ...s.slice(0, R + 1)];
    return n.context.getNode(I).getOptionContent().description;
  }), [d, ...h] = u.slice().reverse(), v = "You are part of a group of workers building a tree of subtasks to describe a project, which may be big or small.  As such, you do not provide information that is not directly related to the subtask at hand because it will probably be provided by another worker", g = "PLEASE OUTPUT SINGLE VALID JSON ARRAY OF STRINGS < 50 CHARS PER ENTRY.  ", b = `Please create 3-7 subtasks of the following task: ${d}.  For context, this is a subtask of ${h.join(" subtask of the task ")}.  Please do not provide subtasks which are likely included in other branches.  If necessary, group information into a single subtask`, C = `${g} ${b} Please output only single json array containing only strings.`;
  console.log("PROMPT", C, v);
  const y = (await e(v, C).catch((T) => {
    throw console.log("error", T), new Error("error getting suggestions");
  })).choices.map((T) => T.message.content);
  console.log("messages", y);
  const x = y.map((T) => {
    const R = T.match(/.*(\[[^\][]*\]).*/m);
    if (!R || !R[1])
      throw new Error(`Could not parse response: ${T}`);
    return JSON.parse(R[1]);
  });
  if (x.length === 0)
    throw console.log("messages", y), new Error("No task sets found");
  x.length > 1 && console.warn("More than one task set found", y);
  const N = x[0].map((T) => ({
    description: `${c}: ${T}`,
    selectedOption: 0,
    collapsed: !1,
    options: [{
      description: T,
      data: {},
      content: []
    }]
  }));
  console.log("suggestion1");
  const E = n.getNodeData();
  if (l.length > 0) {
    console.log("suggestion1");
    const T = n.context.addOptionToNode(n.getRoute(), { description: c, data: {}, content: [] }), R = E.options.length, I = T.getNode(n.getRoute()), W = I.getNodeData();
    I.setNodeData({
      ...W,
      selectedOption: R
    });
  }
  return [n.context.addChildrenToNode(n, N), null];
}, yi = async (e, n, {
  pattern: r,
  parsePattern: i,
  systemPromptBase: s,
  getUserPromptBase: c,
  systemPromptRecursive: l,
  getUserPromptRecursive: u,
  getResourceInfo: d,
  setResourceInfo: h,
  checkResourceInfo: v
}) => {
  const g = n.getRoute(), [b, ...m] = g;
  console.log("starting to suggest", n.getRoute(), n.context);
  const C = m.map((x, D) => {
    const N = [b, ...m.slice(0, D + 1)];
    return n.context.getNode(N).getOptionContent().description;
  }), p = async (x, D, N) => {
    const E = x.getOptionContent(D), O = x.getChildren(D);
    if (console.log("getChildTimes", x.getRoute(), x.getData(), x.context), O.length === 0) {
      const T = v(x);
      if (console.log("resourceInfo", T), T)
        return x.context;
      {
        let R = x.context;
        const I = s, W = c(E.description, N, x);
        if (console.log("systemPrompt", I, W), !I || !W)
          throw new Error("missing prompt");
        const X = (await e(I, W).catch((Z) => {
          throw console.log("error", Z), new Error("error getting suggestions");
        })).choices.map((Z) => {
          const ne = Z.message.content.match(r);
          if (!ne || !ne[1])
            throw new Error(`Could not parse response: ${Z.message.content}`);
          return JSON.parse(ne[1]);
        })[0], ae = R.getNode(x.getRoute());
        return R = h(ae, i(X, ae)), R;
      }
    } else {
      let T = x.context;
      for (const W of O) {
        const j = W.getNodeData().options;
        let X = 0;
        for (const ae of j) {
          const Z = T.getNode(W.getRoute());
          T = await p(Z, X++, [...N, ae.description]);
        }
      }
      const R = T.getNode(x.getRoute()), I = v(R);
      if (console.log("resourceInfo", I), !I) {
        const W = l, K = u(E.description, N, R);
        if (console.log("systemPrompt", W, K), !W || !K)
          throw new Error("missing prompt");
        const ae = (await e(W, K).catch((ne) => {
          throw console.log("error", ne), new Error("error getting suggestions");
        })).choices.map((ne) => {
          const oe = ne.message.content.match(r);
          if (!oe || !oe[1])
            throw new Error(`Could not parse response: ${ne.message.content}`);
          return JSON.parse(oe[1]);
        })[0], Z = T.getNode(R.getRoute());
        return T = h(T.getNode(Z.getRoute()), i(ae, Z)), T;
      }
      return T;
    }
  }, y = await p(n, n.getNodeData().selectedOption, C);
  return console.log("contextWithTimes", y.data.nodes), y;
}, Ig = (e) => {
  const n = Math.floor(e / 31536e6), r = e - n * (1e3 * 60 * 60 * 24 * 365), i = Math.floor(r / (1e3 * 60 * 60 * 24 * 30)), s = r - i * (1e3 * 60 * 60 * 24 * 30), c = Math.floor(s / (1e3 * 60 * 60 * 24 * 7)), l = s - c * (1e3 * 60 * 60 * 24 * 7), u = Math.floor(l / (1e3 * 60 * 60 * 24)), d = l - u * (1e3 * 60 * 60 * 24), h = Math.floor(d / (1e3 * 60 * 60)), v = d - h * (1e3 * 60 * 60), g = Math.floor(v / (1e3 * 60)), b = v - g * (1e3 * 60), m = Math.floor(b / 1e3), p = b - m * 1e3;
  return { years: n, months: i, weeks: c, days: u, hours: h, minutes: g, seconds: m, milliseconds: p };
}, kg = (e) => {
  try {
    const n = e.milliseconds || 0, r = (e.seconds || 0) * 1e3, i = (e.minutes || 0) * 60 * 1e3, s = (e.hours || 0) * 60 * 60 * 1e3, c = (e.days || 0) * 24 * 60 * 60 * 1e3, l = (e.weeks || 0) * 7 * 24 * 60 * 60 * 1e3, u = (e.months || 0) * 30 * 24 * 60 * 60 * 1e3, d = (e.years || 0) * 365 * 24 * 60 * 60 * 1e3;
    return n + r + i + s + c + l + u + d;
  } catch (n) {
    throw console.error("Error converting duration to ms", e, n), n;
  }
}, Ns = (e) => {
  const {
    years: n,
    months: r,
    weeks: i,
    days: s,
    hours: c,
    minutes: l,
    seconds: u,
    milliseconds: d
  } = Ig(e), h = `${c}:`, v = l < 10 ? `0${l}` : `${l}`, g = u < 10 ? `0${u}` : `${u}`, b = n || r || i || s || c ? `.${(d / 1e3).toFixed(3).slice(2)}` : "";
  return `${n ? `${n} yr, ` : ""}${r ? `${r} mo, ` : ""}${i ? `${i} wk, ` : ""}${s ? `${s} days, ` : ""} ${h}${v}:${g}${b}`;
}, E7 = ({ value: e, onUpdate: n, ...r }) => {
  const i = J(null), [s, c] = me(0), [l, u] = me(0);
  se(() => {
    const E = () => {
      if (i.current) {
        const O = i.current.offsetWidth, T = 60;
        c(Math.floor((O - 50) / T) || 1);
      }
    };
    return E(), window.addEventListener("resize", E), () => {
      window.removeEventListener("resize", E);
    };
  }, []);
  const d = () => {
    u((E) => Math.min(E + 1, N.length - s));
  }, h = () => {
    u((E) => Math.max(E - 1, 0));
  }, {
    years: v,
    months: g,
    weeks: b,
    days: m,
    hours: C,
    minutes: p,
    seconds: y,
    milliseconds: x
  } = Ig(e), D = (E) => {
    const { name: O, value: T } = E.target, R = { years: v, months: g, weeks: b, days: m, hours: C, minutes: p, seconds: y, milliseconds: x };
    R[O] = parseInt(T), n(kg(R));
  }, N = [
    { label: "Years", name: "years", value: v },
    { label: "Months", name: "months", value: g },
    { label: "Weeks", name: "weeks", value: b },
    { label: "Days", name: "days", value: m },
    { label: "Hours", name: "hours", value: C },
    { label: "Minutes", name: "minutes", value: p },
    { label: "Seconds", name: "seconds", value: y },
    { label: "Milliseconds", name: "milliseconds", value: x }
  ];
  return /* @__PURE__ */ _("div", { className: r.className || "", style: { ...r.style || {} }, children: /* @__PURE__ */ q("div", { className: "flex", children: [
    s < N.length - 1 && /* @__PURE__ */ _("button", { onClick: h, disabled: l === 0, children: /* @__PURE__ */ _(E2, {}) }),
    /* @__PURE__ */ _("div", { ref: i, style: {
      width: "calc(100% - 20px)"
    }, children: N.slice(l, l + s).map(({ label: E, name: O, value: T }) => /* @__PURE__ */ _("div", { className: "w-16 text-xs mx-1 inline-block", children: /* @__PURE__ */ q("label", { className: "block", children: [
      E,
      ":",
      /* @__PURE__ */ _(
        "input",
        {
          type: "number",
          name: O,
          className: "w-full text-lg",
          value: T,
          onChange: D
        }
      )
    ] }) }, O)) }),
    s < N.length && /* @__PURE__ */ _("button", { onClick: d, disabled: l + s >= N.length, children: /* @__PURE__ */ _(D2, {}) })
  ] }) });
}, D7 = ({ node: e, options: n }) => {
  const r = lo(e), i = (m) => {
    Us(e, m);
  }, s = async () => {
    e.setPath({ [e.getNodeData().selectedOption]: r.minPaths });
  }, c = async () => {
    e.setPath({ [e.getNodeData().selectedOption]: r.maxPaths });
  }, l = 'Take a deep breath.  Please respond only with a single valid JSON object with the optional keys "milliseconds", "seconds", "minutes", "hours", "days", "weeks", "months", or "years" and a number value', u = (m, C, p) => `How long does it take to ${m} in the as a subtask of ${C.join(" subtask of the task ")} please express in terms of milliseconds, seconds, minutes, hours, days, weeks, months, or years.`, d = 'Take a deep breath.  Please respond only with a single valid JSON object with the optional keys "milliseconds", "seconds", "minutes", "hours", "days", "weeks", "months", or "years" and a number value', h = (m, C, p) => {
    const y = lo(p);
    return `How long does it take to ${m} in the as a subtask of ${C.join(" subtask of the task ")} please express in terms of milliseconds, seconds, minutes, hours, days, weeks, months, or years., but factoring out the time of its subtasks, which are estimated to take somewhere between ${y.min} and ${y.max}, averaging ${y.average}. This will leave only the marginal time, which is the information we want.`;
  }, v = /.*(\{[^{}]*\}).*/m, g = (m, C) => (console.log("parsePattern", m), { marginal: kg(m) });
  return /* @__PURE__ */ q("div", { className: "w-full text-center overflow-hidden", children: [
    /* @__PURE__ */ q("div", { className: "mx-auto items-center justify-center gap-1.5 flex items-center", children: [
      /* @__PURE__ */ _(Se, { variant: "secondary", className: "bg-emerald-900 inline-block w-14", onClick: async () => {
        if (n != null && n.canPromptGPT && (n != null && n.promptGPT)) {
          const m = await yi(n.promptGPT, e, {
            systemPromptBase: l,
            getUserPromptBase: u,
            systemPromptRecursive: d,
            getUserPromptRecursive: h,
            pattern: v,
            parsePattern: g,
            getResourceInfo: lo,
            setResourceInfo: Us,
            checkResourceInfo: _7
          });
          m ? e.context.setNodes(m.data.nodes) : n != null && n.toast && n.toast({
            title: "Error",
            description: "No suggestions could be generated",
            duration: 5e3
          });
        } else {
          console.error("No authedApi");
          const m = new Error("No authedApi");
          throw m.cause = "unauthorized", m;
        }
      }, title: "Get estimated duration", children: /* @__PURE__ */ _(Vn, {}) }),
      /* @__PURE__ */ _(E7, { value: r.marginal, onUpdate: (m) => i({ marginal: m }), className: "", style: {
        width: "calc(100% - 4rem)",
        maxWidth: "600px",
        display: "inline-block"
      } })
    ] }),
    /* @__PURE__ */ q("div", { className: "flex flex-row justify-stretch items-center mx-auto", style: { maxWidth: "600px" }, children: [
      /* @__PURE__ */ q("div", { className: "px-3 overflow-hidden w-1/2", children: [
        /* @__PURE__ */ q("div", { title: "Time of Currently Selected Path", children: [
          " Curr: ",
          Ns(r.current),
          " "
        ] }),
        /* @__PURE__ */ q("div", { title: "Time of Average Path", children: [
          " Avg: ",
          Ns(r.average),
          " "
        ] })
      ] }),
      /* @__PURE__ */ q("div", { className: "px-3 overflow-hidden w-1/2", children: [
        /* @__PURE__ */ q(Se, { variant: "secondary", className: "bg-emerald-900 p-1", onClick: s, title: "Set min duration path", children: [
          " ",
          /* @__PURE__ */ q("div", { className: "w-full", children: [
            "Min: ",
            Ns(r.min),
            " "
          ] })
        ] }),
        /* @__PURE__ */ q(Se, { variant: "secondary", className: "bg-emerald-900 p-1", onClick: c, title: "Set max duration path", children: [
          " ",
          /* @__PURE__ */ q("div", { className: "w-full", children: [
            "Max: ",
            Ns(r.max),
            " "
          ] })
        ] })
      ] })
    ] })
  ] });
}, lo = (e, n) => {
  var l, u;
  const r = e.parseIndex(n), i = e.getChildren(r), c = ((u = (l = e.getOptionContent(r).data) == null ? void 0 : l.duration) == null ? void 0 : u.marginal) || 0;
  if (i.length === 0)
    return {
      min: c,
      max: c,
      average: c,
      current: c,
      minPaths: [],
      maxPaths: [],
      marginal: c
    };
  {
    let d = 0, h = 0, v = 0, g = 0;
    const b = [], m = [];
    return i.forEach((C, p) => {
      const y = C.getNodeData(), x = y.options;
      let D = Number.MAX_SAFE_INTEGER, N = Number.MIN_SAFE_INTEGER, E = 0, O = 0;
      x.forEach((T, R) => {
        const I = lo(C, R);
        I.min < D && (D = I.min, I.minPaths), I.max > N && (N = I.max, I.maxPaths), E = (E * R + I.average) / (R + 1), R === y.selectedOption && (O = I.current);
      }), d += D, h += N, v += E, g += O;
    }), {
      min: d + c,
      max: h + c,
      average: v + c,
      current: g + c,
      minPaths: b,
      maxPaths: m,
      marginal: c
    };
  }
}, Us = (e, n) => {
  const r = e.getData();
  return e.setData({
    ...r,
    duration: n
  });
}, _7 = (e) => !!e.getData().duration, P7 = {
  icon: /* @__PURE__ */ _(I2, {}),
  name: "duration",
  HeadComponent: D7
}, O7 = P7, R7 = async (e, n) => {
  const r = n.getRoute(), [i, ...s] = r, c = s.map((d, h) => {
    const v = [i, ...s.slice(0, h + 1)];
    return n.context.getNode(v).getOptionContent().description;
  }), l = async (d, h, v, g) => {
    const b = d.getOptionContent(h), m = d.getChildren(h);
    if (m.length === 0) {
      let C = d.context, p, y;
      return ["duration"].forEach(async (D) => {
        var N;
        if (!((N = b.data) != null && N[D])) {
          switch (D) {
            case "cost":
              p = 'Take a deep breath.  Please respond only with a single valid JSON object with the key "cost" and a number value', y = `How much does it cost to ${b.description} in the as a subtask of ${v.join(" subtask of the task ")}`;
              break;
            case "duration":
              p = 'Take a deep breath.  Please respond only with a single valid JSON object with the optional keys "milliseconds", "seconds", "minutes", "hours", "days", "weeks", "months", or "years" and a number value', y = `How long does it take to ${b.description} in the as a subtask of ${v.join(" subtask of the task ")} please express in terms of milliseconds, seconds, minutes, hours, days, weeks, months, or years.`;
              break;
          }
          const T = (await e(p, y).catch((R) => {
            throw console.log("error", R), new Error("error getting suggestions");
          })).choices.map((R) => {
            const I = R.message.content.match(/.*(\{[^{}]*\}).*/m);
            if (!I || !I[1])
              throw new Error(`Could not parse response: ${R.message.content}`);
            return JSON.parse(I[1]);
          })[0];
          switch (D) {
            case "duration":
              C = Us(C.getNode(d.getRoute()), { marginal: Ch(T) });
              break;
          }
        }
      }), C;
    } else {
      let C = d.context;
      if (["duration"].forEach(async (y) => {
        var D;
        for (const N of m)
          N.getNodeData().options.forEach(async (T, R) => {
            const I = C.getNode(N.getRoute());
            C = await l(I, R, [...v, T.description]);
          });
        const x = C.getNode(d.getRoute());
        if (!((D = b.data) != null && D[y])) {
          const N = lo(x);
          let E, O;
          switch (y) {
            case "duration":
              E = 'Take a deep breath.  Please respond only with a single valid JSON object with the optional keys "milliseconds", "seconds", "minutes", "hours", "days", "weeks", "months", or "years" and a number value', O = `How long does it take to ${b.description} in the as a subtask of ${v.join(" subtask of the task ")} please express in terms of milliseconds, seconds, minutes, hours, days, weeks, months, or years., but factoring out the time of its subtasks, which are estimated to take somewhere between ${N.min} and ${N.max}, averaging ${N.average}. This will leave only the marginal time, which is the information we want.`;
              break;
            default:
              throw new Error(`Resource ${y} not recognized`);
          }
          const I = (await e(E, O).catch((W) => {
            throw console.log("error", W), new Error("error getting suggestions");
          })).choices.map((W) => {
            const K = W.message.content.match(/.*(\{[^{}]*\}).*/m);
            if (!K || !K[1])
              throw new Error(`Could not parse response: ${W.message.content}`);
            return JSON.parse(K[1]);
          })[0];
          switch (y) {
            case "duration":
              C = Us(C.getNode(d.getRoute()), { marginal: Ch(I) });
              break;
          }
        }
      }), lo(C.getNode(d.getRoute())).average > 30 * 60 * 1e3) {
        const [y, x] = await Kl(e, d);
        if (!y)
          throw new Error("error getting suggestions");
        const N = y.getNode(d.getRoute()).getNodeData().options.length;
        C = y;
        for (const E of Array(N).keys()) {
          const O = C.getNode(d.getRoute()), [T, R] = await Vl(e, O);
          if (!T)
            throw new Error("error getting suggestions");
          C = T;
        }
        C = await l(d, h, v);
      }
      return C;
    }
  };
  return await l(n, n.getNodeData().selectedOption, c);
}, Ch = (e) => {
  const n = e.milliseconds || 0, r = (e.seconds || 0) * 1e3, i = (e.minutes || 0) * 60 * 1e3, s = (e.hours || 0) * 60 * 60 * 1e3, c = (e.days || 0) * 24 * 60 * 60 * 1e3, l = (e.weeks || 0) * 7 * 24 * 60 * 60 * 1e3, u = (e.months || 0) * 30 * 24 * 60 * 60 * 1e3, d = (e.years || 0) * 365 * 24 * 60 * 60 * 1e3;
  return n + r + i + s + c + l + u + d;
}, Yl = ({
  parentNode: e,
  rows: n,
  context: r,
  // value,
  dragging: i,
  rowDepth: s,
  dragOverInfo: c,
  locked: l,
  activeModule: u,
  options: d
}) => {
  const h = (p) => {
    const y = r.addNewTaskToOption(e.getRoute(), p);
    r.setNodes(y.data.nodes);
  };
  Me.useState(!1);
  const v = async () => {
    if (d != null && d.canPromptGPT && (d != null && d.promptGPT)) {
      const [p, y] = await Kl(d.promptGPT, e);
      p ? r.setNodes(p.data.nodes) : d != null && d.toast && d.toast({
        title: "Error",
        description: "No suggestions could be generated",
        duration: 5e3
      });
    } else {
      console.error("No authedApi");
      const p = new Error("No authedApi");
      throw p.cause = "unauthorized", p;
    }
  }, g = async () => {
    if (d != null && d.canPromptGPT && (d != null && d.promptGPT)) {
      const p = await R7(d.promptGPT, e);
      p ? r.setNodes(p.data.nodes) : d != null && d.toast && d.toast({
        title: "Error",
        description: "No suggestions could be generated",
        duration: 5e3
      });
    } else {
      console.error("No authedApi");
      const p = new Error("No authedApi");
      throw p.cause = "unauthorized", p;
    }
  }, b = n.map((p, y) => {
    const x = p.getNodeId();
    return {
      id: `${p.getNodeType()}-${x}`,
      data: { node: p }
    };
  }), m = (p) => {
    r.setNodes(p.data.nodes);
  }, C = $o();
  return C.width !== void 0 && C.width < 500, /* @__PURE__ */ q("div", { children: [
    n.length > 0 && n.map((p, y) => {
      const x = () => {
        console.log("moveLeft", y), r.moveNodeLeft(p.getRoute());
      }, D = () => {
        console.log("moveRight", y), r.moveNodeRight(p.getRoute());
      }, N = () => {
        console.log("deleteRow", y), p.deleteNode();
      }, E = () => {
        console.log("moveUp", y);
      }, O = () => {
        console.log("moveDown", y);
      }, T = (K) => {
        p.deleteOption(K);
      }, R = (K) => {
        console.log("handleAddOption", K);
        const j = r.addOptionToNode(p.getRoute(), void 0, K);
        m(j);
      }, I = () => {
        r.addYoungerSibling(p.getRoute());
      }, W = b[y];
      if (W === void 0)
        throw new Error("item is undefined");
      return /* @__PURE__ */ _("div", { className: `HERE-${y}`, children: /* @__PURE__ */ _(
        A7,
        {
          item: W,
          node: p,
          context: r,
          locked: l,
          rowDepth: s,
          addOption: R,
          addYoungerSibling: () => I(),
          moveLeft: x,
          moveRight: D,
          deleteRow: N,
          updateNodes: m,
          moveDown: O,
          moveUp: E,
          deleteOption: T,
          dragging: i,
          dragOverInfo: c,
          index: y,
          activeModule: u,
          options: d
        }
      ) }, y);
    }),
    e.getRoute().length - r.data.trail.length === 0 && /* @__PURE__ */ q("div", { className: "py-3", children: [
      /* @__PURE__ */ _(
        Se,
        {
          onClick: () => h(),
          className: " bg-secondary text-white-900 hover:bg-secondary/80 h-9 ml-3",
          children: /* @__PURE__ */ _(Ux, { height: "1.5rem", width: "1.5rem" })
        }
      ),
      (d == null ? void 0 : d.promptGPT) && /* @__PURE__ */ _(Se, { className: "bg-emerald-900 h-9 ml-3 hover:brightness-150 hover:bg-emerald-900", disabled: !(d != null && d.canPromptGPT), onClick: v, title: "Get suggested steps", children: /* @__PURE__ */ _(Vn, {}) }),
      (d == null ? void 0 : d.promptGPT) && /* @__PURE__ */ _(Se, { className: "bg-emerald-900 h-9 ml-3 hover:brightness-150 hover:bg-emerald-900", disabled: !(d != null && d.canPromptGPT), onClick: g, title: "Get suggested steps", children: /* @__PURE__ */ _(Tx, { height: "1.5rem", width: "1.5rem" }) })
    ] }, "-1")
  ] });
}, A7 = ({
  item: e,
  context: n,
  dragging: r,
  dragOverInfo: i,
  index: s,
  updateNodes: c,
  rowDepth: l,
  addYoungerSibling: u,
  moveLeft: d,
  moveUp: h,
  moveDown: v,
  deleteOption: g,
  moveRight: b,
  deleteRow: m,
  addOption: C,
  locked: p,
  node: y,
  options: x,
  activeModule: D
}) => {
  const N = y.getNodeData(), E = (R) => {
    console.log("handleChange", R);
    const I = { ...N, selectedOption: parseInt(R) }, W = n.setNode(y, I);
    c(W);
  }, O = (R, I) => {
    const W = { ...y.getOptionContent(), description: R }, K = y.updateOptionData(W), X = n.setNode(y, K).setFocus(y.getRoute(), I);
    c(X);
  }, T = () => {
    const R = y.getNodeData(), I = { ...R, collapsed: !N.collapsed };
    console.log("collapseNodeData", R, N.collapsed, I), y.setNodeData(I);
  };
  return (
    // <RowComponent key={index} nodes={nodes} left={leftNode} right={rightNode} dragging={dragging} blank={false} updateRow={updateNodes} />
    /* @__PURE__ */ _("div", { className: "flex w-full", children: y.hasMerge() ? /* @__PURE__ */ _(
      Tg,
      {
        node: y,
        dragItem: e,
        updateNodes: c,
        dragging: r,
        dragOverInfo: i,
        locked: p,
        handleChange: E,
        moveRight: b,
        moveLeft: d,
        rowDepth: l,
        toggleCollapse: T,
        moveDown: v,
        moveUp: h,
        options: x
      }
    ) : /* @__PURE__ */ _(
      x7,
      {
        node: y,
        dragItem: e,
        updateNodes: c,
        dragging: r,
        dragOverInfo: i,
        locked: p,
        handleChange: E,
        handleTextEdit: O,
        addYoungerSibling: u,
        addOption: C,
        moveRight: b,
        moveLeft: d,
        deleteRow: m,
        rowDepth: l,
        toggleCollapse: T,
        moveDown: v,
        moveUp: h,
        deleteOption: g,
        activeModule: D,
        options: x
      }
    ) })
  );
};
var ze = function() {
  return ze = Object.assign || function(n) {
    for (var r, i = 1, s = arguments.length; i < s; i++) {
      r = arguments[i];
      for (var c in r)
        Object.prototype.hasOwnProperty.call(r, c) && (n[c] = r[c]);
    }
    return n;
  }, ze.apply(this, arguments);
};
function T7(e, n) {
  var r = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0 && (r[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, i = Object.getOwnPropertySymbols(e); s < i.length; s++)
      n.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[s]) && (r[i[s]] = e[i[s]]);
  return r;
}
function qt(e, n, r) {
  if (r || arguments.length === 2)
    for (var i = 0, s = n.length, c; i < s; i++)
      (c || !(i in n)) && (c || (c = Array.prototype.slice.call(n, 0, i)), c[i] = n[i]);
  return e.concat(c || Array.prototype.slice.call(n));
}
var Pn = function(e) {
  return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}, I7 = { k: 1e3, m: 1e6, b: 1e9 }, k7 = function(e, n) {
  n === void 0 && (n = ".");
  var r = new RegExp("(\\d+(".concat(Pn(n), "\\d*)?)([kmb])$"), "i"), i = e.match(r);
  if (i) {
    var s = i[1], c = i[3], l = I7[c.toLowerCase()];
    return Number(s.replace(n, ".")) * l;
  }
}, M7 = function(e, n) {
  n === void 0 && (n = ",");
  var r = new RegExp(Pn(n), "g");
  return e.replace(r, "");
}, L7 = function(e, n) {
  var r = Pn(n.join("")), i = new RegExp("[^\\d".concat(r, "]"), "gi");
  return e.replace(i, "");
}, zc = function(e) {
  var n = e.value, r = e.groupSeparator, i = r === void 0 ? "," : r, s = e.decimalSeparator, c = s === void 0 ? "." : s, l = e.allowDecimals, u = l === void 0 ? !0 : l, d = e.decimalsLimit, h = d === void 0 ? 2 : d, v = e.allowNegativeValue, g = v === void 0 ? !0 : v, b = e.disableAbbreviations, m = b === void 0 ? !1 : b, C = e.prefix, p = C === void 0 ? "" : C, y = e.transformRawValue, x = y === void 0 ? function(ee) {
    return ee;
  } : y, D = x(n);
  if (D === "-")
    return D;
  var N = m ? [] : ["k", "m", "b"], E = new RegExp("((^|\\D)-\\d)|(-".concat(Pn(p), ")")), O = E.test(D), T = RegExp("(\\d+)-?".concat(Pn(p))).exec(n) || [], R = T[0], I = T[1], W = p ? R ? D.replace(R, "").concat(I) : D.replace(p, "") : D, K = M7(W, i), j = L7(K, qt([
    i,
    c
  ], N, !0)), X = j;
  if (!m) {
    if (N.some(function(ee) {
      return ee === j.toLowerCase().replace(c, "");
    }))
      return "";
    var ae = k7(j, c);
    ae && (X = String(ae));
  }
  var Z = O && g ? "-" : "";
  if (c && X.includes(c)) {
    var ne = j.split(c), oe = ne[0], ue = ne[1], ve = h && ue ? ue.slice(0, h) : ue, V = u ? "".concat(c).concat(ve) : "";
    return "".concat(Z).concat(oe).concat(V);
  }
  return "".concat(Z).concat(X);
}, F7 = function(e, n, r) {
  if (r !== void 0 && e.length > 1) {
    if (r === 0)
      return e.replace(n, "");
    if (e.includes(n)) {
      var i = e.split(n), s = i[0], c = i[1];
      if (c.length === r)
        return e;
      if (c.length > r)
        return "".concat(s).concat(n).concat(c.slice(0, r));
    }
    var l = e.length > r ? new RegExp("(\\d+)(\\d{".concat(r, "})")) : new RegExp("(\\d)(\\d+)"), u = e.match(l);
    if (u) {
      var s = u[1], c = u[2];
      return "".concat(s).concat(n).concat(c);
    }
  }
  return e;
}, Mg = function(e, n) {
  var r = n.groupSeparator, i = r === void 0 ? "," : r, s = n.decimalSeparator, c = s === void 0 ? "." : s, l = new RegExp("\\d([^".concat(Pn(i)).concat(Pn(c), "0-9]+)")), u = e.match(l);
  return u ? u[1] : void 0;
}, Vo = function(e) {
  var n = e.value, r = e.decimalSeparator, i = e.intlConfig, s = e.decimalScale, c = e.prefix, l = c === void 0 ? "" : c, u = e.suffix, d = u === void 0 ? "" : u;
  if (n === "" || n === void 0)
    return "";
  if (n === "-")
    return "-";
  var h = new RegExp("^\\d?-".concat(l ? "".concat(Pn(l), "?") : "", "\\d")).test(n), v = r !== "." ? W7(n, r, h) : n;
  r && r !== "-" && v.startsWith(r) && (v = "0" + v);
  var g = {
    minimumFractionDigits: s || 0,
    maximumFractionDigits: 20
  }, b = i ? new Intl.NumberFormat(i.locale, i.currency ? ze(ze({}, g), { style: "currency", currency: i.currency }) : g) : new Intl.NumberFormat(void 0, g), m = b.formatToParts(Number(v)), C = B7(m, e), p = Mg(C, ze({}, e)), y = n.slice(-1) === r ? r : "", x = v.match(RegExp("\\d+\\.(\\d+)")) || [], D = x[1];
  return s === void 0 && D && r && (C.includes(r) ? C = C.replace(RegExp("(\\d+)(".concat(Pn(r), ")(\\d+)"), "g"), "$1$2".concat(D)) : p && !d ? C = C.replace(p, "".concat(r).concat(D).concat(p)) : C = "".concat(C).concat(r).concat(D)), d && y ? "".concat(C).concat(y).concat(d) : p && y ? C.replace(p, "".concat(y).concat(p)) : p && d ? C.replace(p, "".concat(y).concat(d)) : [C, y, d].join("");
}, W7 = function(e, n, r) {
  var i = e;
  return n && n !== "." && (i = i.replace(RegExp(Pn(n), "g"), "."), r && n === "-" && (i = "-".concat(i.slice(1)))), i;
}, B7 = function(e, n) {
  var r = n.prefix, i = n.groupSeparator, s = n.decimalSeparator, c = n.decimalScale, l = n.disableGroupSeparators, u = l === void 0 ? !1 : l;
  return e.reduce(function(d, h, v) {
    var g = h.type, b = h.value;
    return v === 0 && r ? g === "minusSign" ? [b, r] : g === "currency" ? qt(qt([], d, !0), [r], !1) : [r, b] : g === "currency" ? r ? d : qt(qt([], d, !0), [b], !1) : g === "group" ? u ? d : qt(qt([], d, !0), [i !== void 0 ? i : b], !1) : g === "decimal" ? c !== void 0 && c === 0 ? d : qt(qt([], d, !0), [s !== void 0 ? s : b], !1) : g === "fraction" ? qt(qt([], d, !0), [c !== void 0 ? b.slice(0, c) : b], !1) : qt(qt([], d, !0), [b], !1);
  }, [""]).join("");
}, U7 = {
  currencySymbol: "",
  groupSeparator: "",
  decimalSeparator: "",
  prefix: "",
  suffix: ""
}, z7 = function(e) {
  var n = e || {}, r = n.locale, i = n.currency, s = r ? new Intl.NumberFormat(r, i ? { currency: i, style: "currency" } : void 0) : new Intl.NumberFormat();
  return s.formatToParts(1000.1).reduce(function(c, l, u) {
    return l.type === "currency" ? u === 0 ? ze(ze({}, c), { currencySymbol: l.value, prefix: l.value }) : ze(ze({}, c), { currencySymbol: l.value, suffix: l.value }) : l.type === "group" ? ze(ze({}, c), { groupSeparator: l.value }) : l.type === "decimal" ? ze(ze({}, c), { decimalSeparator: l.value }) : c;
  }, U7);
}, $h = function(e) {
  return RegExp(/\d/, "gi").test(e);
}, H7 = function(e, n, r) {
  if (n === void 0 && (n = "."), r === void 0 || e === "" || e === void 0)
    return e;
  if (!e.match(/\d/g))
    return "";
  var i = e.split(n), s = i[0], c = i[1];
  if (r === 0)
    return s;
  var l = c || "";
  if (l.length < r)
    for (; l.length < r; )
      l += "0";
  else
    l = l.slice(0, r);
  return "".concat(s).concat(n).concat(l);
}, V7 = function(e) {
  var n = e.selectionStart, r = e.value, i = e.lastKeyStroke, s = e.stateValue, c = e.groupSeparator, l = n, u = r;
  if (s && l) {
    var d = r.split("");
    return i === "Backspace" && s[l] === c && (d.splice(l - 1, 1), l -= 1), i === "Delete" && s[l] === c && (d.splice(l, 1), l += 1), u = d.join(""), { modifiedValue: u, cursorPosition: l };
  }
  return { modifiedValue: u, cursorPosition: n };
}, ql = le(function(e, n) {
  var r = e.allowDecimals, i = r === void 0 ? !0 : r, s = e.allowNegativeValue, c = s === void 0 ? !0 : s, l = e.id, u = e.name, d = e.className, h = e.customInput, v = e.decimalsLimit, g = e.defaultValue, b = e.disabled, m = b === void 0 ? !1 : b, C = e.maxLength, p = e.value, y = e.onValueChange, x = e.fixedDecimalLength, D = e.placeholder, N = e.decimalScale, E = e.prefix, O = e.suffix, T = e.intlConfig, R = e.step, I = e.min, W = e.max, K = e.disableGroupSeparators, j = K === void 0 ? !1 : K, X = e.disableAbbreviations, ae = X === void 0 ? !1 : X, Z = e.decimalSeparator, ne = e.groupSeparator, oe = e.onChange, ue = e.onFocus, ve = e.onBlur, V = e.onKeyDown, ee = e.onKeyUp, te = e.transformRawValue, re = e.formatValueOnBlur, de = re === void 0 ? !0 : re, Te = T7(e, ["allowDecimals", "allowNegativeValue", "id", "name", "className", "customInput", "decimalsLimit", "defaultValue", "disabled", "maxLength", "value", "onValueChange", "fixedDecimalLength", "placeholder", "decimalScale", "prefix", "suffix", "intlConfig", "step", "min", "max", "disableGroupSeparators", "disableAbbreviations", "decimalSeparator", "groupSeparator", "onChange", "onFocus", "onBlur", "onKeyDown", "onKeyUp", "transformRawValue", "formatValueOnBlur"]);
  if (Z && $h(Z))
    throw new Error("decimalSeparator cannot be a number");
  if (ne && $h(ne))
    throw new Error("groupSeparator cannot be a number");
  var Oe = We(function() {
    return z7(T);
  }, [T]), $e = Z || Oe.decimalSeparator || "", Be = ne || Oe.groupSeparator || "";
  if ($e && Be && $e === Be && j === !1)
    throw new Error("decimalSeparator cannot be the same as groupSeparator");
  var et = {
    decimalSeparator: $e,
    groupSeparator: Be,
    disableGroupSeparators: j,
    intlConfig: T,
    prefix: E || Oe.prefix,
    suffix: O
  }, G = {
    decimalSeparator: $e,
    groupSeparator: Be,
    allowDecimals: i,
    decimalsLimit: v || x || 2,
    allowNegativeValue: c,
    disableAbbreviations: ae,
    prefix: E || Oe.prefix,
    transformRawValue: te
  }, ft = me(function() {
    return g != null ? Vo(ze(ze({}, et), { decimalScale: N, value: String(g) })) : p != null ? Vo(ze(ze({}, et), { decimalScale: N, value: String(p) })) : "";
  }), ye = ft[0], rt = ft[1], _t = me(!1), qe = _t[0], Ie = _t[1], Pt = me(0), yt = Pt[0], pn = Pt[1], Cn = me(0), ht = Cn[0], tt = Cn[1], Jt = me(null), Rn = Jt[0], No = Jt[1], it = J(null);
  yx(n, function() {
    return it.current;
  });
  var gn = function(Xe, lt) {
    Ie(!0);
    var st = V7({
      selectionStart: lt,
      value: Xe,
      lastKeyStroke: Rn,
      stateValue: ye,
      groupSeparator: Be
    }), Re = st.modifiedValue, Ue = st.cursorPosition, Ve = zc(ze({ value: Re }, G));
    if (!(C && Ve.replace(/-/g, "").length > C)) {
      if (Ve === "" || Ve === "-" || Ve === $e) {
        y && y(void 0, u, { float: null, formatted: "", value: "" }), rt(Ve), pn(1);
        return;
      }
      var wt = $e ? Ve.replace($e, ".") : Ve, Nt = parseFloat(wt), Ot = Vo(ze({ value: Ve }, et));
      if (Ue != null) {
        var pt = Ue + (Ot.length - Xe.length);
        pt = pt <= 0 ? E ? E.length : 0 : pt, pn(pt), tt(ht + 1);
      }
      if (rt(Ot), y) {
        var Qt = {
          float: Nt,
          formatted: Ot,
          value: Ve
        };
        y(Ve, u, Qt);
      }
    }
  }, Ut = function(Xe) {
    var lt = Xe.target, st = lt.value, Re = lt.selectionStart;
    gn(st, Re), oe && oe(Xe);
  }, vn = function(Xe) {
    return ue && ue(Xe), ye ? ye.length : 0;
  }, It = function(Xe) {
    var lt = Xe.target.value, st = zc(ze({ value: lt }, G));
    if (st === "-" || st === $e || !st) {
      rt(""), ve && ve(Xe);
      return;
    }
    var Re = F7(st, $e, x), Ue = H7(Re, $e, N !== void 0 ? N : x), Ve = parseFloat(Ue.replace($e, ".")), wt = Vo(ze(ze({}, et), { value: Ue }));
    y && de && y(Ue, u, {
      float: Ve,
      formatted: wt,
      value: Ue
    }), rt(wt), ve && ve(Xe);
  }, Yn = function(Xe) {
    var lt = Xe.key;
    if (No(lt), R && (lt === "ArrowUp" || lt === "ArrowDown")) {
      Xe.preventDefault(), pn(ye.length);
      var st = parseFloat(p != null ? String(p).replace($e, ".") : zc(ze({ value: ye }, G))) || 0, Re = lt === "ArrowUp" ? st + R : st - R;
      if (I !== void 0 && Re < Number(I) || W !== void 0 && Re > Number(W))
        return;
      var Ue = String(R).includes(".") ? Number(String(R).split(".")[1].length) : void 0;
      gn(String(Ue ? Re.toFixed(Ue) : Re).replace(".", $e));
    }
    V && V(Xe);
  }, br = function(Xe) {
    var lt = Xe.key, st = Xe.currentTarget.selectionStart;
    if (lt !== "ArrowUp" && lt !== "ArrowDown" && ye !== "-") {
      var Re = Mg(ye, { groupSeparator: Be, decimalSeparator: $e });
      if (Re && st && st > ye.length - Re.length && it.current) {
        var Ue = ye.length - Re.length;
        it.current.setSelectionRange(Ue, Ue);
      }
    }
    ee && ee(Xe);
  };
  se(function() {
    p == null && g == null && rt("");
  }, [g, p]), se(function() {
    qe && ye !== "-" && it.current && document.activeElement === it.current && it.current.setSelectionRange(yt, yt);
  }, [ye, yt, it, qe, ht]);
  var qn = function() {
    return p != null && ye !== "-" && (!$e || ye !== $e) ? Vo(ze(ze({}, et), { decimalScale: qe ? void 0 : N, value: String(p) })) : ye;
  }, Zn = ze({ type: "text", inputMode: "decimal", id: l, name: u, className: d, onChange: Ut, onBlur: It, onFocus: vn, onKeyDown: Yn, onKeyUp: br, placeholder: D, disabled: m, value: qn(), ref: it }, Te);
  if (h) {
    var Xn = h;
    return Me.createElement(Xn, ze({}, Zn));
  }
  return Me.createElement("input", ze({}, Zn));
});
ql.displayName = "CurrencyInput";
function Lg(e, [n, r]) {
  return Math.min(r, Math.max(n, e));
}
const G7 = /* @__PURE__ */ jt(void 0);
function K7(e) {
  const n = En(G7);
  return e || n || "ltr";
}
function Y7(e) {
  const n = J({
    value: e,
    previous: e
  });
  return We(() => (n.current.value !== e && (n.current.previous = n.current.value, n.current.value = e), n.current.previous), [
    e
  ]);
}
function q7(e) {
  const n = e + "CollectionProvider", [r, i] = ci(n), [s, c] = r(n, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), l = (m) => {
    const { scope: C, children: p } = m, y = Me.useRef(null), x = Me.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ Me.createElement(s, {
      scope: C,
      itemMap: x,
      collectionRef: y
    }, p);
  }, u = e + "CollectionSlot", d = /* @__PURE__ */ Me.forwardRef((m, C) => {
    const { scope: p, children: y } = m, x = c(u, p), D = mt(C, x.collectionRef);
    return /* @__PURE__ */ Me.createElement(gr, {
      ref: D
    }, y);
  }), h = e + "CollectionItemSlot", v = "data-radix-collection-item", g = /* @__PURE__ */ Me.forwardRef((m, C) => {
    const { scope: p, children: y, ...x } = m, D = Me.useRef(null), N = mt(C, D), E = c(h, p);
    return Me.useEffect(() => (E.itemMap.set(D, {
      ref: D,
      ...x
    }), () => void E.itemMap.delete(D))), /* @__PURE__ */ Me.createElement(gr, {
      [v]: "",
      ref: N
    }, y);
  });
  function b(m) {
    const C = c(e + "CollectionConsumer", m);
    return Me.useCallback(() => {
      const y = C.collectionRef.current;
      if (!y)
        return [];
      const x = Array.from(y.querySelectorAll(`[${v}]`));
      return Array.from(C.itemMap.values()).sort(
        (E, O) => x.indexOf(E.ref.current) - x.indexOf(O.ref.current)
      );
    }, [
      C.collectionRef,
      C.itemMap
    ]);
  }
  return [
    {
      Provider: l,
      Slot: d,
      ItemSlot: g
    },
    b,
    i
  ];
}
const Fg = [
  "PageUp",
  "PageDown"
], Wg = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Bg = {
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
}, xi = "Slider", [fl, Z7, X7] = q7(xi), [Ug, bS] = ci(xi, [
  X7
]), [j7, ua] = Ug(xi), J7 = /* @__PURE__ */ le((e, n) => {
  const { name: r, min: i = 0, max: s = 100, step: c = 1, orientation: l = "horizontal", disabled: u = !1, minStepsBetweenThumbs: d = 0, defaultValue: h = [
    i
  ], value: v, onValueChange: g = () => {
  }, onValueCommit: b = () => {
  }, inverted: m = !1, ...C } = e, [p, y] = me(null), x = mt(
    n,
    (Z) => y(Z)
  ), D = J(/* @__PURE__ */ new Set()), N = J(0), E = l === "horizontal", O = p ? !!p.closest("form") : !0, T = E ? Q7 : e6, [R = [], I] = wl({
    prop: v,
    defaultProp: h,
    onChange: (Z) => {
      var ne;
      (ne = [
        ...D.current
      ][N.current]) === null || ne === void 0 || ne.focus(), g(Z);
    }
  }), W = J(R);
  function K(Z) {
    const ne = l6(R, Z);
    ae(Z, ne);
  }
  function j(Z) {
    ae(Z, N.current);
  }
  function X() {
    const Z = W.current[N.current];
    R[N.current] !== Z && b(R);
  }
  function ae(Z, ne, { commit: oe } = {
    commit: !1
  }) {
    const ue = h6(c), ve = p6(Math.round((Z - i) / c) * c + i, ue), V = Lg(ve, [
      i,
      s
    ]);
    I((ee = []) => {
      const te = a6(ee, V, ne);
      if (f6(te, d * c)) {
        N.current = te.indexOf(V);
        const re = String(te) !== String(ee);
        return re && oe && b(te), re ? te : ee;
      } else
        return ee;
    });
  }
  return /* @__PURE__ */ U(j7, {
    scope: e.__scopeSlider,
    disabled: u,
    min: i,
    max: s,
    valueIndexToChangeRef: N,
    thumbs: D.current,
    values: R,
    orientation: l
  }, /* @__PURE__ */ U(fl.Provider, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ U(fl.Slot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ U(T, fe({
    "aria-disabled": u,
    "data-disabled": u ? "" : void 0
  }, C, {
    ref: x,
    onPointerDown: ut(C.onPointerDown, () => {
      u || (W.current = R);
    }),
    min: i,
    max: s,
    inverted: m,
    onSlideStart: u ? void 0 : K,
    onSlideMove: u ? void 0 : j,
    onSlideEnd: u ? void 0 : X,
    onHomeKeyDown: () => !u && ae(i, 0, {
      commit: !0
    }),
    onEndKeyDown: () => !u && ae(s, R.length - 1, {
      commit: !0
    }),
    onStepKeyDown: ({ event: Z, direction: ne }) => {
      if (!u) {
        const ve = Fg.includes(Z.key) || Z.shiftKey && Wg.includes(Z.key) ? 10 : 1, V = N.current, ee = R[V], te = c * ve * ne;
        ae(ee + te, V, {
          commit: !0
        });
      }
    }
  })))), O && R.map(
    (Z, ne) => /* @__PURE__ */ U(s6, {
      key: ne,
      name: r ? r + (R.length > 1 ? "[]" : "") : void 0,
      value: Z
    })
  ));
}), [zg, Hg] = Ug(xi, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), Q7 = /* @__PURE__ */ le((e, n) => {
  const { min: r, max: i, dir: s, inverted: c, onSlideStart: l, onSlideMove: u, onSlideEnd: d, onStepKeyDown: h, ...v } = e, [g, b] = me(null), m = mt(
    n,
    (N) => b(N)
  ), C = J(), p = K7(s), y = p === "ltr", x = y && !c || !y && c;
  function D(N) {
    const E = C.current || g.getBoundingClientRect(), O = [
      0,
      E.width
    ], R = Zl(O, x ? [
      r,
      i
    ] : [
      i,
      r
    ]);
    return C.current = E, R(N - E.left);
  }
  return /* @__PURE__ */ U(zg, {
    scope: e.__scopeSlider,
    startEdge: x ? "left" : "right",
    endEdge: x ? "right" : "left",
    direction: x ? 1 : -1,
    size: "width"
  }, /* @__PURE__ */ U(Vg, fe({
    dir: p,
    "data-orientation": "horizontal"
  }, v, {
    ref: m,
    style: {
      ...v.style,
      "--radix-slider-thumb-transform": "translateX(-50%)"
    },
    onSlideStart: (N) => {
      const E = D(N.clientX);
      l == null || l(E);
    },
    onSlideMove: (N) => {
      const E = D(N.clientX);
      u == null || u(E);
    },
    onSlideEnd: () => {
      C.current = void 0, d == null || d();
    },
    onStepKeyDown: (N) => {
      const O = Bg[x ? "from-left" : "from-right"].includes(N.key);
      h == null || h({
        event: N,
        direction: O ? -1 : 1
      });
    }
  })));
}), e6 = /* @__PURE__ */ le((e, n) => {
  const { min: r, max: i, inverted: s, onSlideStart: c, onSlideMove: l, onSlideEnd: u, onStepKeyDown: d, ...h } = e, v = J(null), g = mt(n, v), b = J(), m = !s;
  function C(p) {
    const y = b.current || v.current.getBoundingClientRect(), x = [
      0,
      y.height
    ], N = Zl(x, m ? [
      i,
      r
    ] : [
      r,
      i
    ]);
    return b.current = y, N(p - y.top);
  }
  return /* @__PURE__ */ U(zg, {
    scope: e.__scopeSlider,
    startEdge: m ? "bottom" : "top",
    endEdge: m ? "top" : "bottom",
    size: "height",
    direction: m ? 1 : -1
  }, /* @__PURE__ */ U(Vg, fe({
    "data-orientation": "vertical"
  }, h, {
    ref: g,
    style: {
      ...h.style,
      "--radix-slider-thumb-transform": "translateY(50%)"
    },
    onSlideStart: (p) => {
      const y = C(p.clientY);
      c == null || c(y);
    },
    onSlideMove: (p) => {
      const y = C(p.clientY);
      l == null || l(y);
    },
    onSlideEnd: () => {
      b.current = void 0, u == null || u();
    },
    onStepKeyDown: (p) => {
      const x = Bg[m ? "from-bottom" : "from-top"].includes(p.key);
      d == null || d({
        event: p,
        direction: x ? -1 : 1
      });
    }
  })));
}), Vg = /* @__PURE__ */ le((e, n) => {
  const { __scopeSlider: r, onSlideStart: i, onSlideMove: s, onSlideEnd: c, onHomeKeyDown: l, onEndKeyDown: u, onStepKeyDown: d, ...h } = e, v = ua(xi, r);
  return /* @__PURE__ */ U($t.span, fe({}, h, {
    ref: n,
    onKeyDown: ut(e.onKeyDown, (g) => {
      g.key === "Home" ? (l(g), g.preventDefault()) : g.key === "End" ? (u(g), g.preventDefault()) : Fg.concat(Wg).includes(g.key) && (d(g), g.preventDefault());
    }),
    onPointerDown: ut(e.onPointerDown, (g) => {
      const b = g.target;
      b.setPointerCapture(g.pointerId), g.preventDefault(), v.thumbs.has(b) ? b.focus() : i(g);
    }),
    onPointerMove: ut(e.onPointerMove, (g) => {
      g.target.hasPointerCapture(g.pointerId) && s(g);
    }),
    onPointerUp: ut(e.onPointerUp, (g) => {
      const b = g.target;
      b.hasPointerCapture(g.pointerId) && (b.releasePointerCapture(g.pointerId), c(g));
    })
  }));
}), t6 = "SliderTrack", n6 = /* @__PURE__ */ le((e, n) => {
  const { __scopeSlider: r, ...i } = e, s = ua(t6, r);
  return /* @__PURE__ */ U($t.span, fe({
    "data-disabled": s.disabled ? "" : void 0,
    "data-orientation": s.orientation
  }, i, {
    ref: n
  }));
}), Nh = "SliderRange", r6 = /* @__PURE__ */ le((e, n) => {
  const { __scopeSlider: r, ...i } = e, s = ua(Nh, r), c = Hg(Nh, r), l = J(null), u = mt(n, l), d = s.values.length, h = s.values.map(
    (b) => Gg(b, s.min, s.max)
  ), v = d > 1 ? Math.min(...h) : 0, g = 100 - Math.max(...h);
  return /* @__PURE__ */ U($t.span, fe({
    "data-orientation": s.orientation,
    "data-disabled": s.disabled ? "" : void 0
  }, i, {
    ref: u,
    style: {
      ...e.style,
      [c.startEdge]: v + "%",
      [c.endEdge]: g + "%"
    }
  }));
}), Sh = "SliderThumb", o6 = /* @__PURE__ */ le((e, n) => {
  const r = Z7(e.__scopeSlider), [i, s] = me(null), c = mt(
    n,
    (u) => s(u)
  ), l = We(
    () => i ? r().findIndex(
      (u) => u.ref.current === i
    ) : -1,
    [
      r,
      i
    ]
  );
  return /* @__PURE__ */ U(i6, fe({}, e, {
    ref: c,
    index: l
  }));
}), i6 = /* @__PURE__ */ le((e, n) => {
  const { __scopeSlider: r, index: i, ...s } = e, c = ua(Sh, r), l = Hg(Sh, r), [u, d] = me(null), h = mt(
    n,
    (y) => d(y)
  ), v = ag(u), g = c.values[i], b = g === void 0 ? 0 : Gg(g, c.min, c.max), m = c6(i, c.values.length), C = v == null ? void 0 : v[l.size], p = C ? u6(C, b, l.direction) : 0;
  return se(() => {
    if (u)
      return c.thumbs.add(u), () => {
        c.thumbs.delete(u);
      };
  }, [
    u,
    c.thumbs
  ]), /* @__PURE__ */ U("span", {
    style: {
      transform: "var(--radix-slider-thumb-transform)",
      position: "absolute",
      [l.startEdge]: `calc(${b}% + ${p}px)`
    }
  }, /* @__PURE__ */ U(fl.ItemSlot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ U($t.span, fe({
    role: "slider",
    "aria-label": e["aria-label"] || m,
    "aria-valuemin": c.min,
    "aria-valuenow": g,
    "aria-valuemax": c.max,
    "aria-orientation": c.orientation,
    "data-orientation": c.orientation,
    "data-disabled": c.disabled ? "" : void 0,
    tabIndex: c.disabled ? void 0 : 0
  }, s, {
    ref: h,
    style: g === void 0 ? {
      display: "none"
    } : e.style,
    onFocus: ut(e.onFocus, () => {
      c.valueIndexToChangeRef.current = i;
    })
  }))));
}), s6 = (e) => {
  const { value: n, ...r } = e, i = J(null), s = Y7(n);
  return se(() => {
    const c = i.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "value").set;
    if (s !== n && d) {
      const h = new Event("input", {
        bubbles: !0
      });
      d.call(c, n), c.dispatchEvent(h);
    }
  }, [
    s,
    n
  ]), /* @__PURE__ */ U("input", fe({
    style: {
      display: "none"
    }
  }, r, {
    ref: i,
    defaultValue: n
  }));
};
function a6(e = [], n, r) {
  const i = [
    ...e
  ];
  return i[r] = n, i.sort(
    (s, c) => s - c
  );
}
function Gg(e, n, r) {
  const c = 100 / (r - n) * (e - n);
  return Lg(c, [
    0,
    100
  ]);
}
function c6(e, n) {
  return n > 2 ? `Value ${e + 1} of ${n}` : n === 2 ? [
    "Minimum",
    "Maximum"
  ][e] : void 0;
}
function l6(e, n) {
  if (e.length === 1)
    return 0;
  const r = e.map(
    (s) => Math.abs(s - n)
  ), i = Math.min(...r);
  return r.indexOf(i);
}
function u6(e, n, r) {
  const i = e / 2, c = Zl([
    0,
    50
  ], [
    0,
    i
  ]);
  return (i - c(n) * r) * r;
}
function d6(e) {
  return e.slice(0, -1).map(
    (n, r) => e[r + 1] - n
  );
}
function f6(e, n) {
  if (n > 0) {
    const r = d6(e);
    return Math.min(...r) >= n;
  }
  return !0;
}
function Zl(e, n) {
  return (r) => {
    if (e[0] === e[1] || n[0] === n[1])
      return n[0];
    const i = (n[1] - n[0]) / (e[1] - e[0]);
    return n[0] + i * (r - e[0]);
  };
}
function h6(e) {
  return (String(e).split(".")[1] || "").length;
}
function p6(e, n) {
  const r = Math.pow(10, n);
  return Math.round(e * r) / r;
}
const g6 = J7, v6 = n6, m6 = r6, w6 = o6, b6 = ({ node: e, options: n }) => {
  var m;
  const r = Ko(e), i = 'Take a deep breath.  Please respond only with a single valid JSON object with the key "cost" and a number value', s = (C, p, y) => `How much does it cost to ${C} in the as a subtask of ${p.join(" subtask of the task ")}`, c = 'Take a deep breath.  Please respond only with a single valid JSON object with the key "cost" and a number value', l = (C, p, y) => {
    const x = Ko(y);
    return `How much does it cost to ${C} in the as a subtask of ${p.join(" subtask of the task ")}, but factoring out the cost of its subtasks, which are estimated to cost somewhere between $${x.min} and $${x.max}, averaging $${x.average}.  This will leave only the marginal cost, which is the information we want.`;
  }, u = /.*(\{[^{}]*\}).*/m, d = (C, p) => {
    var D;
    const y = C, x = (D = p.getData().cost) == null ? void 0 : D.budget;
    return { marginal: parseFloat(y.cost), budget: x };
  }, h = async () => {
    if (n != null && n.canPromptGPT && (n != null && n.promptGPT)) {
      const C = await yi(n.promptGPT, e, {
        systemPromptBase: i,
        getUserPromptBase: s,
        systemPromptRecursive: c,
        getUserPromptRecursive: l,
        pattern: u,
        parsePattern: d,
        getResourceInfo: Ko,
        setResourceInfo: Eh,
        checkResourceInfo: y6
      });
      C ? e.context.setNodes(C.data.nodes) : n != null && n.toast && (n == null || n.toast({
        title: "Error",
        description: "No suggestions could be generated",
        duration: 5e3
      }));
    } else {
      console.error("No authedApi");
      const C = new Error("No authedApi");
      throw C.cause = "unauthorized", C;
    }
  }, v = (C) => {
    if (!C)
      return;
    const p = Ko(e);
    Eh(e, { marginal: C, budget: p.budget });
  }, g = async () => {
    e.setPath({ [e.getNodeData().selectedOption]: r.minPaths });
  }, b = async () => {
    e.setPath({ [e.getNodeData().selectedOption]: r.maxPaths });
  };
  return /* @__PURE__ */ q("div", { className: "flex flex-row flex-wrap items-center justify-center", children: [
    /* @__PURE__ */ q("div", { className: "flex flex-row w-1/2 min-w-96 items-center justify-center flex-wrap", children: [
      /* @__PURE__ */ _(x6, { value: r.marginal, onChange: (C) => v(C), handleSuggestCost: h }),
      /* @__PURE__ */ _($6, { value: (m = r.budget) == null ? void 0 : m.available, budgetInfo: r.budget, step: 1, bgValue: 75, onChange: () => console.log("slider") })
    ] }),
    /* @__PURE__ */ q("div", { className: "flex flex-row justify-center items-center w-1/2 min-w-96", children: [
      /* @__PURE__ */ q("div", { className: "overflow-hidden w-1/2 text-center text-sm", children: [
        /* @__PURE__ */ q("div", { className: "mx-auto", children: [
          " Curr: ",
          Ss(r.current),
          " "
        ] }),
        /* @__PURE__ */ q("div", { children: [
          " Avg: ",
          Ss(r.average),
          " "
        ] })
      ] }),
      /* @__PURE__ */ q("div", { className: "overflow-hidden w-1/2 text-center", children: [
        /* @__PURE__ */ q(Se, { variant: "secondary", className: "bg-emerald-900 p-1 text-xs mx-auto", onClick: g, title: "Set min cost path", children: [
          " ",
          /* @__PURE__ */ q("div", { children: [
            "Min: ",
            Ss(r.min)
          ] }),
          " "
        ] }),
        /* @__PURE__ */ q(Se, { variant: "secondary", className: "bg-emerald-900 p-1 text-xs mx-auto", onClick: b, title: "Set max cost path", children: [
          " ",
          /* @__PURE__ */ q("div", { children: [
            "Max: ",
            Ss(r.max)
          ] }),
          " "
        ] })
      ] })
    ] })
  ] });
}, Eh = (e, { marginal: n, budget: r }) => {
  const s = {
    ...e.getData(),
    cost: {
      marginal: n,
      budget: r
    }
  };
  return e.setData(s);
}, Ko = (e, n) => {
  var l, u;
  const r = e.parseIndex(n), i = e.getChildren(r), c = ((u = (l = e.getOptionContent(r).data) == null ? void 0 : l.cost) == null ? void 0 : u.marginal) || 0;
  if (i.length === 0)
    return {
      min: c,
      max: c,
      average: c,
      current: c,
      minPaths: [],
      maxPaths: [],
      marginal: c
    };
  {
    let d = 0, h = 0, v = 0, g = 0;
    const b = [], m = [];
    return i.forEach((C, p) => {
      const y = C.getNodeData(), x = y.options;
      let D = Number.MAX_SAFE_INTEGER, N = Number.MIN_SAFE_INTEGER, E = 0, O = 0;
      x.forEach((T, R) => {
        const I = Ko(C, R);
        I.min < D && (D = I.min, I.minPaths), I.max > N && (N = I.max, I.maxPaths), E = (E * R + I.average) / (R + 1), R === y.selectedOption && (O = I.current);
      }), d += D, h += N, v += E, g += O;
    }), {
      min: d + c,
      max: h + c,
      average: v + c,
      current: g + c,
      minPaths: b,
      maxPaths: m,
      marginal: c
    };
  }
}, y6 = (e) => !!e.getData().cost, Ss = (e) => `${e.toLocaleString("en-US", { style: "currency", currency: "USD" })}`, x6 = ({
  value: e,
  onChange: n,
  handleSuggestCost: r
}) => /* @__PURE__ */ _("div", { className: "w-auto", children: /* @__PURE__ */ q("div", { className: "flex flex-row items-center justify-center", children: [
  /* @__PURE__ */ _(Se, { variant: "secondary", className: "bg-emerald-900 h-10 p-2 rounded-r-none rounded-l-", onClick: r, title: "Get estimated cost", children: /* @__PURE__ */ _(Vn, {}) }),
  /* @__PURE__ */ _(
    ql,
    {
      id: "cost",
      className: "h-10 w-20",
      name: "cost",
      placeholder: "enter cost",
      defaultValue: e,
      decimalsLimit: 2,
      prefix: "$",
      onValueChange: (i) => n(i !== void 0 ? parseFloat(i) : i)
    }
  )
] }) }), C6 = ({ value: e, onChange: n }) => /* @__PURE__ */ _(
  ql,
  {
    id: "cost",
    name: "cost",
    placeholder: "enter budget",
    className: "w-24 m-w-20",
    defaultValue: e,
    decimalsLimit: 2,
    prefix: "$",
    onValueChange: (r) => n(r !== void 0 ? parseFloat(r) : r)
  }
), $6 = (e) => {
  var n;
  return /* @__PURE__ */ q("div", { className: "w-full align-middle py-5 flex-row flex flex-wrap justify-center item-center", children: [
    e.value !== void 0 && /* @__PURE__ */ _("div", { className: "min-w-20 grow-1 w-2/3", children: /* @__PURE__ */ q(
      g6,
      {
        className: Ye(
          "relative flex w-full touch-none select-none items-center"
        ),
        defaultValue: [e.value],
        max: (n = e.budgetInfo) == null ? void 0 : n.available,
        step: e.step,
        children: [
          /* @__PURE__ */ _(v6, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-gradient-to-r from-emerald-900 to-destructive via-70% via-emerald-900", children: /* @__PURE__ */ _(m6, { className: "absolute h-full bg-black/30" }) }),
          /* @__PURE__ */ _(w6, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-transparent ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ _("div", { className: "grow-1 w-24 overflow-hidden", children: /* @__PURE__ */ _(C6, { value: e.value, onChange: e.onChange }) })
  ] });
}, N6 = {
  icon: /* @__PURE__ */ _(P2, {}),
  name: "cost",
  HeadComponent: b6
}, S6 = N6, Xl = M.forwardRef(
  ({ className: e, ...n }, r) => /* @__PURE__ */ _(
    "textarea",
    {
      className: Ye(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
Xl.displayName = "Textarea";
function E6({
  // items,
  searchMessage: e = "Search...",
  selectMessage: n = "Select...",
  emptyMessage: r = "No results",
  node: i,
  // defaultValue,
  // selectedIndex,
  // handleTextEdit,
  // handleChange,
  // deleteOption,
  // addOption,
  // toggleCollapse,
  variant: s = "default",
  canSuggestOption: c,
  suggestOption: l,
  ...u
}) {
  const d = i.getNodeData(), h = d.selectedOption, [v, g] = M.useState(!1), b = d.options.map((R, I) => ({
    description: R.description,
    saveDescription: (W) => {
      const K = {
        ...R,
        description: W
      };
      i.setNodeOptionData(I, K);
    },
    delete: () => {
      i.deleteOption(I);
    }
  })), m = (R) => {
    console.log("handleChange", R);
    const W = {
      ...i.getNodeData(),
      selectedOption: R
    };
    i.setNodeData(W);
  }, C = () => {
    i.addOption();
  }, p = b[h];
  if (!p)
    throw console.log("no item", h, b), new Error("no item");
  const y = (R) => (R.preventDefault(), p.saveDescription(R.target.value), !1), x = (R) => {
    R.key === " " && R.stopPropagation();
  }, D = (R) => {
    console.log("keypress", R.key, h), R.key === "ArrowUp" && R.altKey && (console.log("test", h, b.length, (h - 1 + b.length) % b.length), m(h ? (h - 1 + b.length) % b.length : 0)), R.key === "ArrowDown" && R.altKey && m(h ? (h + 1) % b.length : 0);
  }, N = M.useRef(null), E = 80, O = {
    default: "w-[200px] justify-between",
    "text-mimic": "w-full justify-between text-left display-flex"
  }[s], T = {
    default: {},
    "text-mimic": {
      height: `${E}px`,
      fontSize: "1rem",
      fontWeight: "normal",
      paddingRight: "5px"
    }
  }[s];
  return /* @__PURE__ */ q(aa, { open: v, onOpenChange: g, children: [
    /* @__PURE__ */ _(ca, { asChild: !0, children: /* @__PURE__ */ q("div", { style: {
      position: "relative",
      zIndex: "0",
      height: `${E}px`,
      width: "100%"
    }, children: [
      /* @__PURE__ */ _(
        la,
        {
          variant: "outline",
          role: "combobox",
          size: "lg",
          "aria-expanded": v,
          className: `${O} text-right px-2`,
          style: {
            ...T,
            width: "calc(100%)",
            height: `${E}px`,
            zIndex: "0"
          },
          ...u,
          children: /* @__PURE__ */ _("div", { className: "w-full justify-end items-end flex p-0", children: /* @__PURE__ */ _(Ks, { className: "h-4 opacity-50", style: {
            padding: "0px 0px 0px 0px"
          } }) })
        }
      ),
      /* @__PURE__ */ _("div", { style: {
        zIndex: "1",
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%"
      }, children: /* @__PURE__ */ _(
        Xl,
        {
          ref: N,
          className: "rounded-r-none",
          value: p ? p.description : n,
          style: {
            width: "calc(100% - 2rem)",
            fontSize: "1.2rem",
            fontWeight: "normal",
            // height: 'calc(100% - 3px)',
            height: `${E}px`,
            overflow: "hidden",
            scrollbarWidth: "none",
            scrollbarGutter: "none"
          },
          onChange: y,
          onFocus: (R) => {
            console.log("here"), R.stopPropagation();
          },
          onClick: (R) => {
            console.log("here"), R.stopPropagation();
          },
          onKeyDown: x,
          onKeyUp: D
        }
      ) })
    ] }) }),
    /* @__PURE__ */ _(wi, { className: "w-[200px] p-0", children: /* @__PURE__ */ q(pi, { children: [
      /* @__PURE__ */ _(Pl, { placeholder: e, className: "h-9" }),
      /* @__PURE__ */ _(gi, { children: r }),
      /* @__PURE__ */ _(Ir, { children: b.map((R, I) => /* @__PURE__ */ q(
        vi,
        {
          value: I.toString(),
          onSelect: (W) => {
            const K = parseInt(W);
            if (isNaN(K) || !K === void 0)
              throw new Error("invalid value");
            m(K), g(!1);
          },
          children: [
            R.description,
            /* @__PURE__ */ _(
              Ys,
              {
                className: Ye(
                  "ml-auto h-4 w-4",
                  h === I ? "opacity-100" : "opacity-0"
                )
              }
            ),
            b.length > 1 && /* @__PURE__ */ _("div", { children: /* @__PURE__ */ _(
              Zh,
              {
                className: "h-4 w-4 opacity-50 hover:opacity-100 cursor-pointer",
                color: "rgba(200, 100, 100, .7)",
                onClick: (W) => {
                  W.stopPropagation(), R.delete();
                }
              }
            ) })
          ]
        },
        I
      )) }),
      /* @__PURE__ */ _(Ir, { children: /* @__PURE__ */ q("div", { className: "grid grid-cols-2 place-content-stretch gap-1", children: [
        /* @__PURE__ */ _("div", { className: "", children: /* @__PURE__ */ _(
          Se,
          {
            onClick: () => {
              C(), g(!1);
            },
            className: "justify-center bg-gray-100/30 text-gray-900 hover:bg-gray-200 h-10 w-full",
            children: /* @__PURE__ */ _(qh, { className: "h-4" })
          }
        ) }),
        /* @__PURE__ */ _("div", { className: "", children: /* @__PURE__ */ _(
          Se,
          {
            onClick: () => {
              l(), g(!1);
            },
            disabled: !c,
            className: "bg-emerald-900 w-full",
            children: /* @__PURE__ */ _(Vn, { className: "h-4" })
          }
        ) })
      ] }) })
    ] }) })
  ] });
}
const D6 = ({ node: e, options: n }) => /* @__PURE__ */ _("div", { children: /* @__PURE__ */ _(E6, { node: e, suggestOption: async () => {
  if (n != null && n.canPromptGPT && (n != null && n.promptGPT)) {
    const [i, s] = await Vl(n.promptGPT, e);
    i ? e.context.setNodes(i.data.nodes) : n != null && n.toast && n.toast({
      title: "Error",
      description: "No suggestions could be generated",
      duration: 5e3
    });
  } else {
    console.error("No authedApi");
    const i = new Error("No authedApi");
    throw i.cause = "unauthorized", i;
  }
}, canSuggestOption: (n == null ? void 0 : n.canPromptGPT) || !1 }) }), _6 = {
  icon: /* @__PURE__ */ _(A2, {}),
  name: "workflow",
  HeadComponent: D6
}, P6 = _6, O6 = ({ node: e, options: n }) => {
  const r = (p) => {
    Dh(e, p);
  }, i = Qo(e), s = async () => {
    e.setPath(i.minProbabilitySuccessPath);
  }, c = async () => {
    e.setPath(i.maxProbabilitySuccessPath);
  }, l = async () => {
    e.setPath(i.minProbabilityFailurePath);
  }, u = async () => {
    e.setPath(i.maxProbabilityFailurePath);
  }, d = 'Take a deep breath.  Please respond only with a single valid JSON object with the keys "probabilitySuccess" and "probabilityFailure" and a number value between 1-100 representing the percentage of success and failure respectively', h = (p, y, x) => `How likely is it that the following will lead to success or failure respectively ${p} in the context of the task ${y.join(" subtask of the task ")} please express as a percentage (0-100)`, v = 'Take a deep breath.  Please respond only with a single valid JSON object with the keys "probabilitySuccess" and "probabilityFailure" and a number value between 1-100 representing the percentage of success and failure respectively', g = (p, y, x) => {
    const D = Qo(x);
    return `How likely is it that the following will lead to success or failure respectively ${p} in the context of the task ${y.join(" subtask of the task ")} please express as a percentage (0-100), but factoring out the probability of its subtasks, which are estimated to be likely somewhere between ${D.minSuccess * 100} and ${D.maxSuccess * 100}, averaging ${D.averageSuccess * 100} to succeed and somewhere between ${D.minFailure * 100} and ${D.maxFailure * 100}, averaging ${D.averageFailure * 100} to fail. This should leave only the marginal probability, which is the information we want.`;
  }, b = /.*(\{[^{}]*\}).*/m, m = (p, y) => {
    const x = p, D = x.probabilitySuccess, N = x.probabilityFailure;
    return {
      marginSuccess: D / 100,
      marginFailure: N / 100
    };
  };
  return /* @__PURE__ */ q("div", { className: "w-full text-center overflow-hidden", children: [
    /* @__PURE__ */ q("div", { className: "mx-auto items-center justify-center gap-1.5 flex items-center", children: [
      /* @__PURE__ */ _(Se, { variant: "secondary", className: "bg-emerald-900 inline-block w-14", onClick: async () => {
        if (n != null && n.canPromptGPT && (n != null && n.promptGPT)) {
          const p = await yi(n.promptGPT, e, {
            systemPromptBase: d,
            getUserPromptBase: h,
            systemPromptRecursive: v,
            getUserPromptRecursive: g,
            pattern: b,
            parsePattern: m,
            getResourceInfo: Qo,
            setResourceInfo: Dh,
            checkResourceInfo: I6
          });
          p ? e.context.setNodes(p.data.nodes) : n != null && n.toast && n.toast({
            title: "Error",
            description: "No suggestions could be generated",
            duration: 5e3
          });
        } else {
          console.error("No authedApi");
          const p = new Error("No authedApi");
          throw p.cause = "unauthorized", p;
        }
      }, title: "Get estimated probabilities", children: /* @__PURE__ */ _(Vn, {}) }),
      /* @__PURE__ */ _(R6, { value: i, onUpdate: (p) => r(p) })
    ] }),
    /* @__PURE__ */ q("div", { className: "flex flex-row justify-stretch items-center mx-auto", style: { maxWidth: "600px" }, children: [
      /* @__PURE__ */ q("div", { className: "px-3 overflow-hidden w-1/2", children: [
        /* @__PURE__ */ q("div", { title: "Probability of success of Currently Selected Path", children: [
          " Curr: ",
          lr(i.currentSuccess),
          " "
        ] }),
        /* @__PURE__ */ q("div", { title: "Probability of success of Average Path", children: [
          " Avg: ",
          lr(i.averageSuccess),
          " "
        ] })
      ] }),
      /* @__PURE__ */ q("div", { className: "px-3 overflow-hidden w-1/2", children: [
        /* @__PURE__ */ q(Se, { variant: "secondary", className: "bg-emerald-900 p-1", onClick: s, title: "Set min probability success path", children: [
          " ",
          /* @__PURE__ */ q("div", { className: "w-full", children: [
            "Min: ",
            lr(i.minSuccess),
            " "
          ] })
        ] }),
        /* @__PURE__ */ q(Se, { variant: "secondary", className: "bg-emerald-900 p-1", onClick: c, title: "Set max probability success path", children: [
          " ",
          /* @__PURE__ */ q("div", { className: "w-full", children: [
            "Max: ",
            lr(i.maxSuccess),
            " "
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ q("div", { className: "flex flex-row justify-stretch items-center mx-auto", style: { maxWidth: "600px" }, children: [
      /* @__PURE__ */ q("div", { className: "px-3 overflow-hidden w-1/2", children: [
        /* @__PURE__ */ q("div", { title: "Time of Currently Selected Path", children: [
          " Curr: ",
          lr(i.currentFailure),
          " "
        ] }),
        /* @__PURE__ */ q("div", { title: "Time of Average Path", children: [
          " Avg: ",
          lr(i.averageFailure),
          " "
        ] })
      ] }),
      /* @__PURE__ */ q("div", { className: "px-3 overflow-hidden w-1/2", children: [
        /* @__PURE__ */ q(Se, { variant: "secondary", className: "bg-emerald-900 p-1", onClick: l, title: "Set min probability failure path", children: [
          " ",
          /* @__PURE__ */ q("div", { className: "w-full", children: [
            "Min: ",
            lr(i.minFailure),
            " "
          ] })
        ] }),
        /* @__PURE__ */ q(Se, { variant: "secondary", className: "bg-emerald-900 p-1", onClick: u, title: "Set max probability failure path", children: [
          " ",
          /* @__PURE__ */ q("div", { className: "w-full", children: [
            "Max: ",
            lr(i.maxFailure),
            " "
          ] })
        ] })
      ] })
    ] })
  ] });
}, Dh = (e, n) => {
  const r = e.getData();
  return e.setData({
    ...r,
    probability: n
  });
}, Qo = (e, n) => {
  const r = e.getData(n);
  console.log("nodeData", r);
  const i = T6(e), s = A6(e);
  return {
    ...i,
    ...s
  };
}, lr = (e) => `${e.toLocaleString("en-US", { style: "percent", minimumFractionDigits: 2 })}`, R6 = ({
  value: e,
  onUpdate: n
}) => /* @__PURE__ */ _("div", { className: "w-auto", children: /* @__PURE__ */ _("div", { className: "flex flex-row items-center justify-center" }) }), A6 = (e, n) => {
  var l, u;
  const r = e.parseIndex(n), i = e.getChildren(r), c = ((u = (l = e.getOptionContent(r).data) == null ? void 0 : l.probability) == null ? void 0 : u.marginFailure) || 0;
  if (i.length === 0)
    return {
      minFailure: c,
      maxFailure: c,
      averageFailure: c,
      currentFailure: c,
      minProbabilityFailurePath: [],
      maxProbabilityFailurePath: [],
      marginFailure: c
    };
  {
    let d = 0, h = 0, v = 0, g = 0;
    const b = [], m = [];
    return i.forEach((C, p) => {
      const y = C.getNodeData(), x = y.options;
      let D = Number.MAX_SAFE_INTEGER, N = Number.MIN_SAFE_INTEGER, E = 0, O = 0;
      x.forEach((T, R) => {
        const I = Qo(C, R);
        I.minFailure < D && (D = I.minFailure, I.minProbabilityFailurePath), I.maxFailure > N && (N = I.maxFailure, I.maxProbabilityFailurePath), E = (E * R + I.averageFailure) / (R + 1), R === y.selectedOption && (O = I.currentFailure);
      }), d += D, h += N, v += E, g += O;
    }), {
      minFailure: d + c,
      maxFailure: h + c,
      averageFailure: v + c,
      currentFailure: g + c,
      minProbabilityFailurePath: b,
      maxProbabilityFailurePath: m,
      marginFailure: c
    };
  }
}, T6 = (e, n) => {
  var l, u;
  const r = e.parseIndex(n), i = e.getChildren(r), c = ((u = (l = e.getOptionContent(r).data) == null ? void 0 : l.probability) == null ? void 0 : u.marginSuccess) || 0;
  if (i.length === 0)
    return {
      minSuccess: c,
      maxSuccess: c,
      averageSuccess: c,
      currentSuccess: c,
      minProbabilitySuccessPath: [],
      maxProbabilitySuccessPath: [],
      marginSuccess: c
    };
  {
    let d = 0, h = 0, v = 0, g = 0;
    const b = [], m = [];
    return i.forEach((C, p) => {
      const y = C.getNodeData(), x = y.options;
      let D = Number.MAX_SAFE_INTEGER, N = Number.MIN_SAFE_INTEGER, E = 0, O = 0;
      x.forEach((T, R) => {
        const I = Qo(C, R);
        I.minSuccess < D && (D = I.minSuccess, I.minProbabilitySuccessPath), I.maxSuccess > N && (N = I.maxSuccess, I.maxProbabilitySuccessPath), E = (E * R + I.averageSuccess) / (R + 1), R === y.selectedOption && (O = I.currentSuccess);
      }), d += D, h += N, v += E, g += O;
    }), {
      minSuccess: d + c,
      maxSuccess: h + c,
      averageSuccess: v + c,
      currentSuccess: g + c,
      minProbabilitySuccessPath: b,
      maxProbabilitySuccessPath: m,
      marginSuccess: c
    };
  }
}, I6 = (e) => !!e.getData().probability, k6 = {
  icon: /* @__PURE__ */ _(_2, {}),
  name: "probability",
  HeadComponent: O6
}, M6 = k6, L6 = ({ node: e, options: n }) => {
  const r = Yo(e), i = (b) => {
    _h(e, { content: b });
  }, s = async () => {
    const b = r.aggregated || "", m = new Blob([b], { type: "text/plain" }), C = URL.createObjectURL(m);
    window.open(C, "_blank"), setTimeout(() => URL.revokeObjectURL(C), 100);
  }, c = 'Take a deep breath.  Please respond only with a single valid JSON object with the key "document" and a string value', l = (b, m, C) => `Please provide text which is the fulfillment of these instructions: ${b} in the context of the task ${m.join(" subtask of the task ")}`, u = 'Take a deep breath.  Please respond only with a single valid JSON object with the key "document" and a string value', d = (b, m, C) => (Yo(C), `Please provide text which is the fulfillment of these instructions:${b} in the context of the task ${m.join(" subtask of the task ")}, but the following pieces are already written as part of child tasks.  Please insert them with the template format eg {{ 0 }} for child #0.  Do not be redundant with that information: 
${C.getChildren().map((p, y) => `{{${y}}} : ${Yo(p).aggregated}`).join(`
`)}`), h = /.*(\{[^{}]*\}).*/m, v = (b, m) => ({ content: b.document });
  return /* @__PURE__ */ q("div", { className: "w-full text-center overflow-hidden flex flex-row", children: [
    /* @__PURE__ */ q("div", { className: "p-0", children: [
      /* @__PURE__ */ _(Se, { variant: "secondary", className: "bg-emerald-900 inline-block p-2", onClick: async () => {
        if (console.log("suggesting document"), n != null && n.canPromptGPT && (n != null && n.promptGPT)) {
          const b = await yi(n.promptGPT, e, {
            systemPromptBase: c,
            getUserPromptBase: l,
            systemPromptRecursive: u,
            getUserPromptRecursive: d,
            pattern: h,
            parsePattern: v,
            getResourceInfo: Yo,
            setResourceInfo: _h,
            checkResourceInfo: Ph
          });
          b ? e.context.setNodes(b.data.nodes) : n != null && n.toast && n.toast({
            title: "Error",
            description: "No suggestions could be generated",
            duration: 5e3
          });
        } else {
          console.error("No authedApi");
          const b = new Error("No authedApi");
          throw b.cause = "unauthorized", b;
        }
      }, title: "Execute prompt", disabled: Ph(e), children: /* @__PURE__ */ _(Vn, {}) }),
      /* @__PURE__ */ _(Se, { variant: "secondary", className: "bg-emerald-900 inline-block p-2", onClick: s, title: "Execute prompt", children: /* @__PURE__ */ _(O2, {}) })
    ] }),
    /* @__PURE__ */ _("div", { className: "w-full", children: /* @__PURE__ */ _(Xl, { value: r == null ? void 0 : r.content, onChange: (b) => i(b.target.value) }) })
  ] });
}, F6 = ({ node: e }) => /* @__PURE__ */ _("div", { children: /* @__PURE__ */ _(Se, { variant: "secondary", className: "bg-emerald-900 p-1", title: "Insert Child Document", onClick: () => {
}, children: /* @__PURE__ */ _(Yh, { size: "1rem" }) }) }), Yo = (e) => {
  var i, s, c, l;
  const n = e.getData(), r = e.getChildren();
  if (r.length) {
    const u = r.reduce((d, h, v) => {
      const g = Yo(h);
      return d.replace(`{{${v + 1}}}`, g.aggregated || "");
    }, ((c = n.document) == null ? void 0 : c.content) || "");
    return {
      content: ((l = n.document) == null ? void 0 : l.content) || "",
      aggregated: u
    };
  } else
    return {
      content: ((i = n.document) == null ? void 0 : i.content) || "",
      aggregated: ((s = n.document) == null ? void 0 : s.content) || ""
    };
}, _h = (e, n) => {
  const r = e.getData();
  return e.setData({
    ...r,
    document: n
  });
}, Ph = (e) => {
  const n = e.getData();
  return !!n.document && !!n.document.content;
}, W6 = {
  icon: /* @__PURE__ */ _(Yh, {}),
  name: "document",
  HeadComponent: L6,
  RowComponent: F6
}, B6 = W6, Kg = M.forwardRef(
  ({ className: e, type: n, ...r }, i) => /* @__PURE__ */ _(
    "input",
    {
      type: n,
      className: Ye(
        "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: i,
      ...r
    }
  )
);
Kg.displayName = "Input";
const U6 = ({
  node: e,
  options: n
}) => {
  const r = Hc(e), i = (b, m) => {
    Oh(e, m);
  }, s = 'Take a deep breath.  Please respond only with a single valid JSON object with the key "resources" and an array of strings', c = (b, m, C) => `Please provide a list of required resources in order to complete this task: ${b} in the context of the task ${m.join(" subtask of the task ")}.  A resource is anything that is needed to complete the task, such as a tool, a person, a piece of information, or a physical object.  Please be thorough and specific. and focus on this particular task because other workers will be providing information about other tasks.`, l = 'Take a deep breath.  Please respond only with a single valid JSON object with the key "document" and an array of strings', u = (b, m, C) => (Hc(C), `Please provide a list of required resources in order to complete this task: ${b} in the context of the task ${m.join(" subtask of the task ")}, but the following resource are already accounted for, so please don't include them.A resource is anything that is needed to complete the task, such as a tool, a person, a piece of information, or a physical object.  Please be thorough and specific. and focus on this particular task because other workers will be providing information about other tasks.`), d = /.*(\{[^{}]*\}).*/m, h = (b, m) => ({ required: b.resources, available: [] }), v = async () => {
    if (n != null && n.canPromptGPT && (n != null && n.promptGPT)) {
      const b = await yi(n == null ? void 0 : n.promptGPT, e, {
        systemPromptBase: s,
        getUserPromptBase: c,
        systemPromptRecursive: l,
        getUserPromptRecursive: u,
        pattern: d,
        parsePattern: h,
        getResourceInfo: Hc,
        setResourceInfo: Oh,
        checkResourceInfo: z6
      });
      b ? e.context.setNodes(b.data.nodes) : n != null && n.toast && (n == null || n.toast({
        title: "Error",
        description: "No suggestions could be generated",
        duration: 5e3
      }));
    } else {
      console.error("No authedApi");
      const b = new Error("No authedApi");
      throw b.cause = "unauthorized", b;
    }
  }, g = (b, m) => () => {
    const C = {
      ...r,
      requiredForThis: r.requiredForThis.map((y, x) => x === b ? m : y)
    }, p = {
      required: C.requiredForThis,
      available: C.available
    };
    i(b, p);
  };
  return /* @__PURE__ */ q("div", { className: "w-full text-center overflow-hidden flex flex-row", children: [
    /* @__PURE__ */ _("div", { children: /* @__PURE__ */ _(Se, { variant: "secondary", className: "bg-emerald-900 inline-block w-14", onClick: v, title: "Suggest required resources", children: /* @__PURE__ */ _(Vn, {}) }) }),
    /* @__PURE__ */ q("div", { className: "flex flex-row flex-wrap justify-center", children: [
      r.requiredForCurrent.map((b, m) => /* @__PURE__ */ _("div", { className: "flex flex-row items-center justify-center flex-wrap w-48", children: r.requiredForThis.includes(b) ? /* @__PURE__ */ _(Kg, { value: b, onChange: (C) => g(m, C.target.value), className: "inline-block" }) : /* @__PURE__ */ _("div", { children: b }) }, m)),
      /* @__PURE__ */ _(Se, { variant: "secondary", className: "bg-emerald-900 inline-block w-14", onClick: v, title: "Add required resources", children: /* @__PURE__ */ _(T2, {}) })
    ] })
  ] });
}, Hc = (e) => (e.getData(), {
  requiredForThis: ["resource1", "resource2"],
  available: ["resource1", "resource3"],
  requiredForCurrent: ["resource1", "resource2"],
  minRequired: ["resource1"],
  allPossibleRequired: ["resource1", "resource2", "resource3"]
}), Oh = (e, n) => {
  const r = e.getData();
  return e.setData({
    ...r,
    resources: n
  });
}, z6 = (e) => !!e.getData().resources, H6 = {
  icon: /* @__PURE__ */ _(N2, {}),
  name: "resources",
  HeadComponent: U6
}, V6 = H6, Vc = {
  cost: S6,
  workflow: P6,
  duration: O7,
  probability: M6,
  fosDocument: B6,
  resources: V6
};
function G6({
  context: e,
  // updateNodes,
  node: n,
  // updateNodes,
  dragging: r,
  dragOverInfo: i,
  // trail,
  // updateTrail,
  options: s
}) {
  const c = Object.keys(Vc).map((g) => Vc[g]), [l, u] = me(n.getRoute().length > 1 ? Vc.workflow : void 0), d = n.getChildren(), h = $o(), v = Me.useMemo(() => h.width !== void 0 ? Math.floor((h.width - 500) / 100) : 0, [h]);
  return /* @__PURE__ */ q("div", { children: [
    /* @__PURE__ */ _("div", { style: { padding: "15px 0px" }, children: /* @__PURE__ */ _(K6, { node: n, context: e, activeModule: l, setActiveModule: u, availableModules: c, options: s }) }),
    /* @__PURE__ */ _("div", { children: n.hasMerge() ? /* @__PURE__ */ _(Gl, { rowDepth: v, context: e, dragging: r, parentNode: n, dragOverInfo: i, locked: e.locked, activeModule: l, options: s }) : /* @__PURE__ */ _(Yl, { rows: d, rowDepth: v, context: e, dragging: r, parentNode: n, dragOverInfo: i, locked: e.locked, activeModule: l, options: s }) })
  ] });
}
const K6 = ({
  node: e,
  context: n,
  activeModule: r,
  setActiveModule: i,
  availableModules: s,
  options: c
}) => {
  const [l, u] = Me.useState(!1), d = () => {
    l ? r !== void 0 ? i(void 0) : u(!1) : u(!0);
  }, h = (g) => {
    i(g), u(!1);
  }, v = (r == null ? void 0 : r.HeadComponent) || (() => /* @__PURE__ */ _(hr, {}));
  return /* @__PURE__ */ _(hr, { children: /* @__PURE__ */ _("div", { children: /* @__PURE__ */ _("div", { children: /* @__PURE__ */ q("div", { className: "flex-row flex w-full px-1 ", children: [
    /* @__PURE__ */ _("div", { className: `px-0 flex-grow overflow-x-hidden transition-all duration-500 ${l ? "w-none" : ""}`, children: /* @__PURE__ */ _(v, { node: e, options: c }) }),
    /* @__PURE__ */ q("div", { className: "px-3 flex flex-row w-auto transition-all duration-500 items-stretch", children: [
      l && s.map((g, b) => /* @__PURE__ */ _(Se, { onClick: () => h(g), variant: "ghost", className: `h-full ${(r == null ? void 0 : r.name) === g.name ? "bg-stone-900" : "bg-stone-700"}`, children: g.icon }, b)),
      /* @__PURE__ */ _("div", { className: "overflow-x-hidden h-full", children: /* @__PURE__ */ _(Se, { onClick: d, variant: "ghost", className: "self-center h-full", children: l ? /* @__PURE__ */ _(Pf, { className: "rotate-90" }) : /* @__PURE__ */ _(Pf, {}) }) })
    ] })
  ] }) }) }) });
};
function Y6({
  // items,
  searchMessage: e = "Search...",
  selectMessage: n = "Select...",
  emptyMessage: r = "No results",
  node: i,
  // defaultValue,
  // selectedIndex,
  // handleTextEdit,
  // handleChange,
  // deleteOption,
  // addOption,
  // toggleCollapse,
  variant: s = "default",
  ...c
}) {
  const u = i.getNodeData().selectedOption, [d, h] = M.useState(!1), v = i.hasMerge() ? i.getMergeOptions().map((p, y) => (console.log("option", p.description), /* @__PURE__ */ _(hr, { children: p.description.map((x, D) => /* @__PURE__ */ _(
    "span",
    {
      className: `${x.added ? "bg-emerald-950/90" : x.removed ? "bg-destructive-950/90" : ""}`,
      children: x.value
    },
    D
  )) })), []) : i.getNodeData().options.map((p, y) => /* @__PURE__ */ _("span", { children: p.description }, y)), g = (p) => {
    console.log("handleChange", p);
    const x = {
      ...i.getNodeData(),
      selectedOption: p
    };
    i.setNodeData(x);
  }, b = {
    default: "w-[200px] justify-between",
    "text-mimic": "w-full justify-between text-left display-flex"
  }[s], m = {
    default: {},
    "text-mimic": {
      width: "50vw",
      fontSize: "1rem",
      fontWeight: "normal",
      paddingRight: "5px"
    }
  }[s], C = v[u];
  if (!C)
    throw console.log("no item", u, v), new Error("no item");
  return /* @__PURE__ */ q(aa, { open: d, onOpenChange: h, children: [
    /* @__PURE__ */ _(ca, { asChild: !0, children: /* @__PURE__ */ q("div", { style: {
      position: "relative",
      zIndex: "0"
    }, children: [
      /* @__PURE__ */ _(
        la,
        {
          variant: "outline",
          role: "combobox",
          size: "lg",
          "aria-expanded": d,
          className: `${b} text-right px-2`,
          style: {
            ...m,
            zIndex: "0"
          },
          ...c,
          children: /* @__PURE__ */ _("div", { className: "w-full justify-end items-end flex p-0", children: /* @__PURE__ */ _(Ks, { className: "h-4 opacity-50", style: {
            padding: "0px 0px 0px 0px"
          } }) })
        }
      ),
      /* @__PURE__ */ _("div", { style: {
        zIndex: "1",
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%"
      }, children: /* @__PURE__ */ _("div", { className: "w-full px-3 py-2", children: C }) })
    ] }) }),
    /* @__PURE__ */ _(wi, { className: "w-[200px] p-0", children: /* @__PURE__ */ q(pi, { children: [
      /* @__PURE__ */ _(Pl, { placeholder: e, className: "h-9" }),
      /* @__PURE__ */ _(gi, { children: r }),
      /* @__PURE__ */ _(Ir, { children: v.map((p, y) => /* @__PURE__ */ q(
        vi,
        {
          onSelect: (x) => {
            g(y), h(!1);
          },
          children: [
            p,
            /* @__PURE__ */ _(
              Ys,
              {
                className: Ye(
                  "ml-auto h-4 w-4",
                  u === y ? "opacity-100" : "opacity-0"
                )
              }
            )
          ]
        },
        y
      )) })
    ] }) })
  ] });
}
function q6({
  context: e,
  // updateNodes,
  node: n,
  // updateNodes,
  dragging: r,
  dragOverInfo: i,
  // trail,
  // updateTrail,
  options: s
}) {
  const c = n.getChildren(), l = $o(), u = Me.useMemo(() => l.width !== void 0 ? Math.floor((l.width - 500) / 100) : 0, [l]);
  return /* @__PURE__ */ q("div", { children: [
    n.getRoute().length > 1 && /* @__PURE__ */ _("div", { style: { padding: "15px 0px" }, children: /* @__PURE__ */ _(Z6, { node: n, context: e, options: s }) }),
    /* @__PURE__ */ _("div", { children: n.hasMerge() ? /* @__PURE__ */ _(Gl, { rowDepth: u, context: e, dragging: r, parentNode: n, dragOverInfo: i, locked: e.locked, options: s }) : /* @__PURE__ */ _(Yl, { rows: c, rowDepth: u, context: e, dragging: r, parentNode: n, dragOverInfo: i, locked: e.locked, options: s }) })
  ] });
}
const Z6 = ({
  node: e,
  context: n,
  options: r
}) => {
  const [i, s] = Me.useState(!1), c = async () => {
    if (!(r != null && r.promptGPT) || !(r != null && r.canPromptGPT))
      return;
    const [l, u] = await Kl(r == null ? void 0 : r.promptGPT, e);
    l && n.setNodes(l.data.nodes);
  };
  return /* @__PURE__ */ _(hr, { children: /* @__PURE__ */ _("div", { children: /* @__PURE__ */ _("div", { children: /* @__PURE__ */ q("div", { className: "flex-row flex w-full px-1", children: [
    /* @__PURE__ */ _("div", { className: "px-3", children: /* @__PURE__ */ _(Se, { onClick: () => s(!i), variant: "ghost", children: i ? /* @__PURE__ */ _(Lx, {}) : /* @__PURE__ */ _(Wx, {}) }) }),
    /* @__PURE__ */ _("div", { className: "px-0", children: /* @__PURE__ */ _(X6, { node: e }) }),
    i && /* @__PURE__ */ _("div", { className: "px-3", children: (r == null ? void 0 : r.promptGPT) && /* @__PURE__ */ _(Se, { variant: "secondary", className: "bg-emerald-900", disabled: !(r != null && r.canPromptGPT), onClick: c, children: /* @__PURE__ */ _(Vn, {}) }) })
  ] }) }) }) });
}, X6 = ({
  node: e
}) => /* @__PURE__ */ _("div", { children: /* @__PURE__ */ _(Y6, { node: e }) }), j6 = [Ae.Down, Ae.Right, Ae.Up, Ae.Left], J6 = (e, {
  context: {
    active: n,
    droppableContainers: r,
    collisionRect: i,
    scrollableAncestors: s
  }
}) => {
  if (j6.includes(e.code)) {
    if (e.preventDefault(), !n || !i)
      return;
    const c = [];
    r.getEnabled().forEach((d) => {
      if (!d || d != null && d.disabled)
        return;
      const h = d == null ? void 0 : d.rect.current;
      if (h)
        switch (e.code) {
          case Ae.Down:
            i.top + i.height <= h.top && c.push(d);
            break;
          case Ae.Up:
            i.top >= h.top + h.height && c.push(d);
            break;
          case Ae.Left:
            i.left >= h.left + h.width && c.push(d);
            break;
          case Ae.Right:
            i.left + i.width <= h.left && c.push(d);
            break;
        }
    });
    const l = $3({
      active: n,
      collisionRect: i,
      droppableContainers: c,
      pointerCoordinates: null
    }), u = xg(l, "id");
    if (u != null) {
      const d = r.get(u), h = d == null ? void 0 : d.node.current, v = d == null ? void 0 : d.rect.current;
      if (h && v) {
        const m = Fl(h).some((p, y) => s[y] !== p) ? {
          x: 0,
          y: 0
        } : {
          x: i.width - v.width,
          y: i.height - v.height
        };
        return {
          x: v.left - m.x,
          y: v.top - m.y
        };
      }
    }
  }
};
function Kn() {
}
Kn.prototype = {
  diff: function(n, r) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = i.callback;
    typeof i == "function" && (s = i, i = {}), this.options = i;
    var c = this;
    function l(p) {
      return s ? (setTimeout(function() {
        s(void 0, p);
      }, 0), !0) : p;
    }
    n = this.castInput(n), r = this.castInput(r), n = this.removeEmpty(this.tokenize(n)), r = this.removeEmpty(this.tokenize(r));
    var u = r.length, d = n.length, h = 1, v = u + d;
    i.maxEditLength && (v = Math.min(v, i.maxEditLength));
    var g = [{
      newPos: -1,
      components: []
    }], b = this.extractCommon(g[0], r, n, 0);
    if (g[0].newPos + 1 >= u && b + 1 >= d)
      return l([{
        value: this.join(r),
        count: r.length
      }]);
    function m() {
      for (var p = -1 * h; p <= h; p += 2) {
        var y = void 0, x = g[p - 1], D = g[p + 1], N = (D ? D.newPos : 0) - p;
        x && (g[p - 1] = void 0);
        var E = x && x.newPos + 1 < u, O = D && 0 <= N && N < d;
        if (!E && !O) {
          g[p] = void 0;
          continue;
        }
        if (!E || O && x.newPos < D.newPos ? (y = eS(D), c.pushComponent(y.components, void 0, !0)) : (y = x, y.newPos++, c.pushComponent(y.components, !0, void 0)), N = c.extractCommon(y, r, n, p), y.newPos + 1 >= u && N + 1 >= d)
          return l(Q6(c, y.components, r, n, c.useLongestToken));
        g[p] = y;
      }
      h++;
    }
    if (s)
      (function p() {
        setTimeout(function() {
          if (h > v)
            return s();
          m() || p();
        }, 0);
      })();
    else
      for (; h <= v; ) {
        var C = m();
        if (C)
          return C;
      }
  },
  pushComponent: function(n, r, i) {
    var s = n[n.length - 1];
    s && s.added === r && s.removed === i ? n[n.length - 1] = {
      count: s.count + 1,
      added: r,
      removed: i
    } : n.push({
      count: 1,
      added: r,
      removed: i
    });
  },
  extractCommon: function(n, r, i, s) {
    for (var c = r.length, l = i.length, u = n.newPos, d = u - s, h = 0; u + 1 < c && d + 1 < l && this.equals(r[u + 1], i[d + 1]); )
      u++, d++, h++;
    return h && n.components.push({
      count: h
    }), n.newPos = u, d;
  },
  equals: function(n, r) {
    return this.options.comparator ? this.options.comparator(n, r) : n === r || this.options.ignoreCase && n.toLowerCase() === r.toLowerCase();
  },
  removeEmpty: function(n) {
    for (var r = [], i = 0; i < n.length; i++)
      n[i] && r.push(n[i]);
    return r;
  },
  castInput: function(n) {
    return n;
  },
  tokenize: function(n) {
    return n.split("");
  },
  join: function(n) {
    return n.join("");
  }
};
function Q6(e, n, r, i, s) {
  for (var c = 0, l = n.length, u = 0, d = 0; c < l; c++) {
    var h = n[c];
    if (h.removed) {
      if (h.value = e.join(i.slice(d, d + h.count)), d += h.count, c && n[c - 1].added) {
        var g = n[c - 1];
        n[c - 1] = n[c], n[c] = g;
      }
    } else {
      if (!h.added && s) {
        var v = r.slice(u, u + h.count);
        v = v.map(function(m, C) {
          var p = i[d + C];
          return p.length > m.length ? p : m;
        }), h.value = e.join(v);
      } else
        h.value = e.join(r.slice(u, u + h.count));
      u += h.count, h.added || (d += h.count);
    }
  }
  var b = n[l - 1];
  return l > 1 && typeof b.value == "string" && (b.added || b.removed) && e.equals("", b.value) && (n[l - 2].value += b.value, n.pop()), n;
}
function eS(e) {
  return {
    newPos: e.newPos,
    components: e.components.slice(0)
  };
}
var tS = new Kn();
function Es(e, n, r) {
  return tS.diff(e, n, r);
}
var Rh = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/, Ah = /\S/, Yg = new Kn();
Yg.equals = function(e, n) {
  return this.options.ignoreCase && (e = e.toLowerCase(), n = n.toLowerCase()), e === n || this.options.ignoreWhitespace && !Ah.test(e) && !Ah.test(n);
};
Yg.tokenize = function(e) {
  for (var n = e.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/), r = 0; r < n.length - 1; r++)
    !n[r + 1] && n[r + 2] && Rh.test(n[r]) && Rh.test(n[r + 2]) && (n[r] += n[r + 2], n.splice(r + 1, 2), r--);
  return n;
};
var qg = new Kn();
qg.tokenize = function(e) {
  var n = [], r = e.split(/(\n|\r\n)/);
  r[r.length - 1] || r.pop();
  for (var i = 0; i < r.length; i++) {
    var s = r[i];
    i % 2 && !this.options.newlineIsToken ? n[n.length - 1] += s : (this.options.ignoreWhitespace && (s = s.trim()), n.push(s));
  }
  return n;
};
var nS = new Kn();
nS.tokenize = function(e) {
  return e.split(/(\S.+?[.!?])(?=\s+|$)/);
};
var rS = new Kn();
rS.tokenize = function(e) {
  return e.split(/([{}:;,]|\s+)/);
};
function Ps(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ps = function(n) {
    return typeof n;
  } : Ps = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ps(e);
}
var oS = Object.prototype.toString, ai = new Kn();
ai.useLongestToken = !0;
ai.tokenize = qg.tokenize;
ai.castInput = function(e) {
  var n = this.options, r = n.undefinedReplacement, i = n.stringifyReplacer, s = i === void 0 ? function(c, l) {
    return typeof l > "u" ? r : l;
  } : i;
  return typeof e == "string" ? e : JSON.stringify(hl(e, null, null, s), s, "  ");
};
ai.equals = function(e, n) {
  return Kn.prototype.equals.call(ai, e.replace(/,([\r\n])/g, "$1"), n.replace(/,([\r\n])/g, "$1"));
};
function hl(e, n, r, i, s) {
  n = n || [], r = r || [], i && (e = i(s, e));
  var c;
  for (c = 0; c < n.length; c += 1)
    if (n[c] === e)
      return r[c];
  var l;
  if (oS.call(e) === "[object Array]") {
    for (n.push(e), l = new Array(e.length), r.push(l), c = 0; c < e.length; c += 1)
      l[c] = hl(e[c], n, r, i, s);
    return n.pop(), r.pop(), l;
  }
  if (e && e.toJSON && (e = e.toJSON()), Ps(e) === "object" && e !== null) {
    n.push(e), l = {}, r.push(l);
    var u = [], d;
    for (d in e)
      e.hasOwnProperty(d) && u.push(d);
    for (u.sort(), c = 0; c < u.length; c += 1)
      d = u[c], l[d] = hl(e[d], n, r, i, d);
    n.pop(), r.pop();
  } else
    l = e;
  return l;
}
var zs = new Kn();
zs.tokenize = function(e) {
  return e.slice();
};
zs.join = zs.removeEmpty = function(e) {
  return e;
};
function Go(e, n, r) {
  return zs.diff(e, n, r);
}
class Gc {
  constructor(n, r) {
    fs(this, "activeOptionIndex", null);
    fs(this, "activeRowIndex", null);
    this.context = n, this.route = r;
  }
  parseIndex(n) {
    const r = this.activeOptionIndex !== null ? this.activeOptionIndex : this.getNodeData().selectedOption;
    return n === void 0 ? r : n;
  }
  getNodeId() {
    const [n, r] = this.route[this.route.length - 1];
    return r;
  }
  getNodeType() {
    const [n, r] = this.route[this.route.length - 1];
    return n;
  }
  getRoute() {
    return this.route;
  }
  getNodeData() {
    const n = this.getNodeId(), r = this.context.data.nodes[n];
    if (!r)
      throw new Error(`no node options entry for ${n}`);
    return r;
  }
  setNodeData(n) {
    return this.context.setNode(this, n);
  }
  setNodeOptionData(n, r) {
    return this.context.updateNodeOptionData(this.route, r, n);
  }
  getOptionContent(n) {
    const r = this.parseIndex(n), i = this.getNodeData(), s = i.options[r];
    if (!s) {
      const c = this.getNodeId();
      throw console.log("getOptionContent", c, r, i), new Error(`no node entry for ${c} - ${r}`);
    }
    return s;
  }
  updateOptionData(n, r) {
    const i = this.parseIndex(r), s = this.getNodeData(), c = s.options.slice(0, i), l = s.options.slice(i + 1), u = c.concat(n ? [n] : []).concat(l);
    return {
      selectedOption: s.selectedOption,
      description: s.description,
      collapsed: s.collapsed,
      options: u
    };
  }
  updateNodeData(n) {
    return this.getNodeId(), this.context.setNode(this, n);
  }
  getChildren(n) {
    const r = this.parseIndex(n);
    return this.getOptionContent(r).content.map(([l, u]) => {
      const d = this.route.concat([[l, u]]);
      if (l === "task")
        return this.context.getNode(d);
      throw new Error(`unknown type ${l}`);
    });
  }
  isChildOf(n) {
    const r = this.route;
    return n.route.every(([c, l], u) => {
      var d, h;
      return c == ((d = r[u]) == null ? void 0 : d[0]) && l == ((h = r[u]) == null ? void 0 : h[1]);
    });
  }
  /**
   * @param nthGen number of generations to go up
   * @returns [node: FosNode, childIndex: number, optionIndex: number]
   */
  getParent(n) {
    if (n > this.route.length)
      throw new Error(`node does not have ${n} ancestors`);
    if (n === 1) {
      const r = this.route.slice(0, this.route.length - n), i = this.context.getNode(r);
      if (i.activeOptionIndex = i.getNodeData().selectedOption, i.getChildren().forEach((s, c) => {
        s.getNodeId() === this.getNodeId() && s.getNodeType() === this.getNodeType() && (i.activeRowIndex = c);
      }), i.activeRowIndex === null)
        throw new Error("could not find child in parent");
      return [i, i.activeRowIndex, i.activeOptionIndex];
    } else {
      const [r, i, s] = this.getParent(n - 1);
      return r.getParent(1);
    }
  }
  addOption() {
    return this.context.addOptionToNode(this.route);
  }
  deleteOption(n) {
    const r = this.getNodeData();
    if (r.options.length === 1)
      throw new Error("cannot delete last option");
    const i = r.selectedOption ? r.selectedOption - 1 : 0, s = r.options.slice(0, n), c = r.options.slice(n + 1), l = s.concat(c), u = {
      selectedOption: r.selectedOption === n ? r.selectedOption : i,
      description: r.description,
      collapsed: r.collapsed,
      options: l
    };
    return this.context.setNode(this, u);
  }
  deleteRowByIndex(n, r) {
    const i = this.parseIndex(r), s = this.getOptionContent(i), c = s.content.slice(0, n).concat(s.content.slice(n + 1)), l = {
      description: s.description,
      data: s.data,
      content: c
    };
    return this.updateOptionData(l, i);
  }
  deleteNode() {
    const [n] = this.getParent(1), r = n.getOptionContent(), i = r.content.filter(([c, l]) => c !== this.getNodeType() || l !== this.getNodeId()), s = {
      ...r,
      content: i
    };
    if (Bs.isEqual(this.context.data.focus.route, this.route)) {
      const c = this.moveFocusUp(-1);
      return c ? c.setOptionOnNode(n.getRoute(), s) : this.context.setOptionOnNode(n.getRoute(), s);
    } else
      return this.context.setOptionOnNode(n.getRoute(), s);
  }
  moveFocusUp(n) {
    try {
      const [r, i, s] = this.getParent(1), c = r.getChildren(s);
      if (i === 0) {
        const l = r.getRoute(), u = r.getNodeData().description, d = n ? n < 0 ? u.length + n : n : this.context.data.focus.char;
        return this.context.setFocus(l, d);
      } else {
        const l = c[i - 1], u = l.getNodeData(), d = l.getChildren();
        if (u.collapsed || d.length === 0) {
          const h = l.getRoute(), v = l.getNodeData().description, g = n ? n < 0 ? v.length + n : n : this.context.data.focus.char;
          return this.context.setFocus(h, g);
        } else {
          const h = l.getLastDescendent(), v = h.getRoute(), g = h.getNodeData().description, b = n ? n < 0 ? g.length + n : n : this.context.data.focus.char;
          return this.context.setFocus(v, b);
        }
      }
    } catch (r) {
      console.log("moveFocusDown - no parent", r);
      return;
    }
  }
  moveFocusDown(n = !1) {
    if (!this.getNodeData().collapsed && !n) {
      const r = this.getChildren();
      if (r.length > 0) {
        const s = r[0].getRoute();
        return this.context.setFocus(s, this.context.data.focus.char);
      }
    }
    try {
      const [r, i, s] = this.getParent(1), c = r.getChildren(s);
      if (i === c.length - 1)
        try {
          r.moveFocusDown(!0);
        } catch {
          return;
        }
      else {
        const u = c[i + 1].getRoute();
        return this.context.setFocus(u, this.context.data.focus.char);
      }
    } catch (r) {
      console.log("moveFocusDown - no parent", r);
      return;
    }
  }
  getLastDescendent(n = !0) {
    const r = this.getChildren(), i = this.getNodeData().collapsed;
    return r.length === 0 || n && i ? this : r[r.length - 1].getLastDescendent(n);
  }
  acceptMerge() {
    const n = this.getNodeData().mergeNode;
    if (!n)
      throw new Error("no merge node");
    if (!this.context.data.nodes[n])
      throw new Error("no merge node data");
    const [i, s, c] = this.getParent(1), l = i.getOptionContent(c);
    if (!l.content[s])
      throw console.log("acceptMerge - no current content", l, s, l.content), new Error("no current content");
    const u = l.content[s];
    if (!u)
      throw console.log("acceptMerge - no current content", l, s, l.content), new Error("no current content");
    const d = [u[0], n], h = l.content.slice(0, s), v = l.content.slice(s + 1), g = {
      ...l,
      content: [...h, d, ...v]
    }, m = i.setNodeOptionData(c, g).getNode(this.route), p = {
      ...m.getNodeData(),
      mergeNode: void 0
    };
    return m.setNodeData(p);
  }
  rejectMerge() {
    const n = this.getNodeData().mergeNode;
    if (!n)
      throw new Error("no merge node");
    if (!this.context.data.nodes[n])
      throw new Error("no merge node data");
    const s = {
      ...this.getNodeData(),
      mergeNode: void 0
    };
    return this.setNodeData(s);
  }
  bothMerge() {
    const n = this.getNodeData().mergeNode;
    if (!n)
      throw new Error("no merge node");
    if (!this.context.data.nodes[n])
      throw new Error("no merge node data");
    const [i, s, c] = this.getParent(1), l = i.getOptionContent(c), u = l.content[s];
    if (!u)
      throw console.log("acceptMerge - no current content", l, s, l.content), new Error("no current content");
    const d = [u[0], n], h = l.content.slice(0, s + 1), v = l.content.slice(s + 1), g = {
      ...l,
      content: [...h, d, ...v]
    }, m = i.setNodeOptionData(c, g).getNode(this.route), p = {
      ...m.getNodeData(),
      mergeNode: void 0
    };
    return m.setNodeData(p);
  }
  getMergeOptions() {
    const n = this.getNodeData().options, r = this.mergeNodeData().options, i = Go(n, r, { comparator: (u, d) => Th(Es(u.description, d.description)) || Th(Go(u.content, d.content)) });
    let s = 0, c = 0;
    return i.reduce((u, d) => {
      if (d.added) {
        const h = d.value.map((v, g) => {
          const b = c + g, m = r[b];
          if (!m)
            throw new Error("no merge node option");
          const C = m.description, p = m.content;
          return {
            description: Es(C, C),
            content: Go(p, p, { comparator: (y, x) => y[0] === x[0] && y[1] === x[1] })
          };
        });
        return c = d.count ? c + d.count : c, [...u, ...h];
      } else if (d.removed) {
        const h = d.value.map((v, g) => {
          const b = s + g, m = n[b];
          if (!m)
            throw new Error("no merge node option");
          const C = m.description, p = m.content;
          return {
            description: Es(C, C),
            content: Go(p, p, { comparator: (y, x) => y[0] === x[0] && y[1] === x[1] })
          };
        });
        return s = d.count ? s + d.count : s, [...u, ...h];
      } else {
        const h = d.value.map((v, g) => {
          const b = c + g, m = r[b];
          if (!m)
            throw new Error("no merge node option");
          const C = m.description, p = m.content, y = s + g, x = n[y];
          if (!x)
            throw new Error("no merge node option");
          const D = x.description, N = x.content;
          return {
            description: Es(D, C),
            content: Go(N, p, { comparator: (E, O) => E[0] === O[0] && E[1] === O[1] })
          };
        });
        return s = d.count ? s + d.count : s, [...u, ...h];
      }
    }, []);
  }
  hasMerge() {
    const n = this.getNodeData(), r = !!n.mergeNode, i = n.mergeNode ? !Bs.isEqual(n, this.context.data.nodes[n.mergeNode] || {}) : !1;
    return r && i;
  }
  getMergedIndex() {
    const n = this.getNodeData(), r = n.mergeNode;
    if (!r)
      throw new Error("no merge node");
    const i = this.context.data.nodes[r];
    if (!i)
      throw new Error("no merge node data");
    const s = n.selectedOption, c = i.selectedOption;
    return c || s;
  }
  getMergeChildren(n) {
    n || (n = this.getMergedIndex());
    const i = this.getMergeOptions()[n];
    if (!i)
      throw new Error("no merged option");
    return i.content.reduce((l, u) => {
      const d = u.value.map(([v, g]) => {
        const b = this.route.concat([[v, g]]);
        return {
          ...u.added ? { added: !0 } : {},
          ...u.removed ? { removed: !0 } : {},
          node: this.context.getNode(b)
        };
      });
      return [...l, ...d];
    }, []);
  }
  mergeNodeData() {
    const n = this.getNodeData().mergeNode;
    if (!n)
      throw new Error("no merge node");
    const r = this.context.data.nodes[n];
    if (!r)
      throw new Error("no merge node data");
    return r;
  }
  mergeNodeContent() {
    const n = this.mergeNodeData(), r = n.selectedOption, i = n.options[r];
    if (!i)
      throw console.log("getMergeDescription - no merge content", i), new Error("no merge content");
    return i;
  }
  setPath(n) {
    return Object.keys(n).reduce((i, s, c) => {
      const l = i.getNode(this.getRoute()), u = l.getChildren();
      if (u.length === 0) {
        if (!n[s])
          throw console.log("path is not valid - key not found", n, s), new Error("path is not valid - key not found");
        if (Object.keys(n[s] || {}).length !== 0)
          throw console.log("path is not valid - key not empty at leaf", n, s), new Error("path is not valid");
        const d = parseInt(s);
        return l.setNodeData({
          ...l.getNodeData(),
          selectedOption: d
        });
      } else {
        const d = n[s];
        if (!d)
          throw console.log("path is not valid - key not found", n, s), new Error("path is not valid - key not found");
        if (d.length !== u.length)
          throw console.log("path is not valid - selections length different from children length", d.length, u.length, n, s, this.getNodeId()), new Error("path is not valid");
        const v = u.reduce((b, m, C) => {
          const p = b.getNode(m.getRoute()), y = d[C];
          if (!y)
            throw console.log("path is not valid - selection not found for child", n, s), new Error("path is not valid - selection not found for child");
          const x = Object.keys(y);
          if (x.length !== 1)
            throw console.log("path is not valid - selection keys length not 1", x, n, s), new Error("path is not valid");
          return p.setPath(y);
        }, i).getNode(l.getRoute());
        return v.setNodeData({
          ...v.getNodeData(),
          selectedOption: parseInt(s)
        });
      }
    }, this.context);
  }
  setData(n, r) {
    const i = this.parseIndex(r), s = this.getOptionContent(i), c = {
      ...s,
      data: {
        ...s.data,
        ...n
      }
    };
    return this.setNodeOptionData(i, c);
  }
  getData(n) {
    const r = this.parseIndex(n);
    return this.getOptionContent(r).data || {};
  }
}
const Th = (e) => {
  if (e.length === void 0 || isNaN(e.length))
    throw new Error("diff array is empty");
  const {
    total: n,
    changed: r
  } = e.reduce((i, s) => ({
    changed: s.added || s.removed ? i.changed + 1 : i.changed,
    total: i.total + 1
  }), { total: 0, changed: 0 });
  return r / n < 0.5;
};
class ei {
  constructor(n, r) {
    fs(this, "locked", !1);
    if (this.data = n, this.updateData = r, !n.nodes)
      throw console.log("FosContext - no nodes", n), new Error("no nodes");
  }
  setNodes(n, r, i) {
    if (!this.data.nodes)
      throw console.log("setNodes - no nodes", this.data), new Error("no nodes");
    const s = {
      ...this.data,
      nodes: n,
      focus: r || this.data.focus,
      trail: i || this.data.trail
    };
    this.locked = !0;
    const c = new ei(s, this.updateData);
    return this.updateData(s), this.locked = !1, c;
  }
  setTrail(n) {
    const r = { ...this.data, trail: n };
    return this.updateData(r), new ei(r, this.updateData);
  }
  setFocus(n, r) {
    const i = { ...this.data, focus: { route: n, char: r } };
    return this.updateData(i), new ei(i, this.updateData);
  }
  getNode(n) {
    return new Gc(this, n);
  }
  setNode(n, r) {
    const i = n.getNodeId(), s = {
      ...this.data.nodes,
      [i]: r
    };
    return this.setNodes(s);
  }
  insertNode(n, r, i) {
    const s = this.newId(n), c = {
      ...this.data.nodes,
      [s]: n
    };
    return [this.setNodes(c), s];
  }
  updateNodeAtRoute(n, r) {
    const s = new Gc(this, n).getNodeId(), c = {
      ...this.data.nodes,
      [s]: r
    };
    return this.setNodes(c);
  }
  updateNodeOptionData(n, r, i) {
    const c = this.getNode(n).updateOptionData(r, i);
    return this.updateNodeAtRoute(n, c);
  }
  getNodeOptionsAndObj(n) {
    const r = new Gc(this, n), i = r.getNodeData(), s = r.getOptionContent();
    return [i, s, i.selectedOption];
  }
  newId(n) {
    return crypto.randomUUID();
  }
  addNewTaskToOption(n, r, i) {
    const s = this.getNode(n), c = {
      selectedOption: 0,
      collapsed: !1,
      description: "",
      options: [{
        description: "",
        data: {},
        content: []
      }]
    }, l = this.newId(c), u = s.getOptionContent(i), d = r === void 0 ? u.content.length : r, h = u.content.slice(0, d + 1), v = u.content.slice(d + 1), g = ["task", l], b = h.concat([g]).concat(v), m = {
      ...u,
      content: b
    }, C = s.updateOptionData(m, i), p = s.getNodeId(), y = n.concat([g]), x = {
      ...this.data.nodes,
      [p]: C,
      [l]: c
    };
    return console.log("route", n, y), this.setNodes(x, { route: y, char: 0 });
  }
  setOptionOnNode(n, r, i) {
    const s = this.getNode(n), c = s.updateOptionData(r, i), l = this.setNode(s, c);
    return console.log("newNodes", l), l;
  }
  addOptionToNode(n, r, i) {
    const s = this.getNode(n), c = i === void 0 ? s.getNodeData().options.length : i, l = s.getNodeData(), u = {
      description: "",
      data: {},
      content: [],
      ...r
    }, d = l.options.slice(0, c), h = l.options.slice(c), v = {
      ...l,
      selectedOption: c,
      options: d.concat([u]).concat(h)
    }, g = s.updateNodeData(v);
    return console.log("newNodes", g), this.setNodes(g.data.nodes);
  }
  moveNodeLeft(n) {
    const r = this.getNode(n), [i, s, c] = r.getParent(1), [l, u, d] = r.getParent(2), h = i.getOptionContent(c), v = h.content.slice(0, s).concat(h.content.slice(s + 1)), g = {
      ...h,
      content: v
    }, b = l.getOptionContent(d), m = b.content.slice(0, u + 1), C = b.content.slice(u + 1), p = m.concat([[r.getNodeType(), r.getNodeId()]]).concat(C), y = {
      ...b,
      content: p
    };
    console.log("moveNodeLeft", y, g);
    const D = this.setOptionOnNode(l.getRoute(), y, d).setOptionOnNode(i.getRoute(), g, c);
    this.setNodes(D.data.nodes);
  }
  addYoungerSibling(n) {
    console.log("addYoungerSibling", n);
    const r = this.getNode(n), [i, s, c] = r.getParent(1), l = this.addNewTaskToOption(i.getRoute(), s, c);
    this.setNodes(l.data.nodes, l.data.focus, l.data.trail);
  }
  moveNodeRight(n) {
    const r = this.getNode(n), [i, s, c] = r.getParent(1);
    if (s > 0) {
      const l = i.getChildren(c)[s - 1], u = l.getOptionContent(), d = u.content.concat([[r.getNodeType(), r.getNodeId()]]), h = {
        ...u,
        content: d
      }, v = i.getOptionContent(c), g = v.content.slice(0, s).concat(v.content.slice(s + 1)), b = {
        ...v,
        content: g
      };
      console.log("MoveNodeRight", g, d, h, b);
      const C = this.setOptionOnNode(l.getRoute(), h).setOptionOnNode(i.getRoute(), b, c);
      this.setNodes(C.data.nodes);
    } else
      throw new Error("cannot move right");
  }
  moveNodeUp(n) {
    throw new Error("not implemented");
  }
  moveNodeDown(n) {
    throw new Error("not implemented");
  }
  removeNodeFromParent(n) {
    throw new Error("not implemented");
  }
  deleteOption(n, r) {
    throw new Error("not implemented");
  }
  deleteNode(n) {
    throw new Error("not implemented");
  }
  snipNode(n) {
    throw new Error("not implemented");
  }
  deserializeTrailFromUrl(n) {
    const [r, ...i] = n.split("/").filter((v) => v !== ""), s = [["root", "root"]];
    if (!this.getNode(s).getNodeData().options[parseInt(r || "0")])
      throw new Error("firstNodeOption not found");
    return i.reduce((v, g) => {
      const [b, m] = g.split("-").map((N) => parseInt(N));
      if (!b || isNaN(b) || !m || isNaN(m))
        throw console.log("invalid row", g, n, r, i), new Error("invalid row");
      const p = this.getNode(v).getNodeData(), [y, x] = p.options.reduce((N, E) => {
        if (b < E.content.length) {
          const O = E.content[b];
          if (!O)
            throw new Error("row not found");
          return [0, O];
        } else
          return [N[0] - E.content.length, null];
      }, [b, null]);
      return [...v, x];
    }, s);
  }
  serializeTrailToUrl(n) {
    const [r, ...i] = n, s = this.getNode([r]).getNodeData(), l = `${s.selectedOption}/`, [u, d] = i.reduce((h, [v, g], b) => {
      const m = [r, ...n.slice(0, b + 1)], C = this.getNode(m).getNodeData(), p = C.selectedOption, y = C.options.reduce((N, E, O) => O < p ? N + E.content.length : O === p ? N + E.content.findIndex(([T, R]) => T === T && R === R) : N, 0), x = this.getNode(m).getNodeData();
      return [`${h}${y}-${C.selectedOption}/`, x];
    }, [l, s]);
    return u;
  }
  addChildrenToNode(n, r, i) {
    console.log("addChildrenToNode1");
    const s = n.parseIndex(i), c = n.getNodeData();
    console.log("addChildrenToNode2");
    const l = c.options.slice(0, s), u = c.options.slice(s + 1), d = n.getOptionContent(s), [h, v] = r.reduce((y, x) => {
      const [D, N] = y[0].insertNode(x, n.getRoute(), s);
      return console.log("addChildrenToNode3"), [D, y[1].concat([[n.getNodeType(), N]])];
    }, [this, []]);
    console.log("addChildrenToNode4", h, v);
    const g = {
      ...d,
      content: [...d.content, ...v]
    }, b = [...l, g, ...u];
    console.log("addChildrenToNode5", g, b);
    const m = {
      selectedOption: c.selectedOption,
      description: c.description,
      collapsed: c.collapsed,
      options: b
    };
    console.log("addChildrenToNod6", m);
    const C = h.getNode(n.getRoute()), p = C.setNodeData(m);
    return console.log("addChildrenToNode7", C.context.data, p), this.setNodes(p.data.nodes);
  }
  moveNodeToTopChild(n, r, i) {
    const s = r.parseIndex(i), c = [n.getNodeType(), n.getNodeId()], l = r.getOptionContent(s), u = {
      ...l,
      content: [c, ...l.content]
    }, v = r.setNodeOptionData(s, u).getNode(n.getRoute()).deleteNode();
    return this.setNodes(v.data.nodes);
  }
  moveNodeToOlderSibling(n, r, i) {
    r.parseIndex(i);
    const s = [n.getNodeType(), n.getNodeId()], [c, l, u] = r.getParent(1), d = c.getOptionContent(u), h = l, v = d.content.slice(0, h), g = d.content.slice(h), b = v.concat([s]).concat(g), m = b.filter((y, x) => x === h ? !0 : y[0] !== n.getNodeType() || y[1] !== n.getNodeId());
    console.log("moveNodeToOlderSibling", m, h, b, v, g);
    const C = {
      ...d,
      content: m
    }, p = c.setNodeOptionData(u, C);
    return this.setNodes(p.data.nodes);
  }
  moveNodeToYoungerSibling(n, r, i) {
    r.parseIndex(i);
    const s = [n.getNodeType(), n.getNodeId()], [c, l, u] = r.getParent(1), d = c.getOptionContent(u), h = l + 1, v = d.content.slice(0, h), g = d.content.slice(h), m = v.concat([s]).concat(g).filter((y, x) => x === h ? !0 : y[0] !== n.getNodeType() || y[1] !== n.getNodeId()), C = {
      ...d,
      content: m
    }, p = c.setNodeOptionData(u, C);
    return this.setNodes(p.data.nodes);
  }
}
const iS = [["root", "root"]], sS = {
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
}, aS = {
  nodes: sS,
  trail: iS,
  focus: {
    route: [["root", "root"]],
    char: 0
  },
  previousHash: ""
}, cS = aS, lS = ({
  data: e,
  setData: n,
  options: r
}) => {
  const i = Me.useMemo(() => {
    console.log("creating new context", e == null ? void 0 : e.nodes, e == null ? void 0 : e.focus);
    const x = e || cS;
    return new ei(x, n);
  }, [e, n]), [s, c] = me(null), [l, u] = me(null), d = i7(
    Wc(zl, {
      activationConstraint: {
        delay: 250,
        tolerance: 5
      }
    }),
    Wc(Bl, {
      coordinateGetter: J6
    }),
    Wc(Og, {
      activationConstraint: {
        delay: 250,
        tolerance: 5
      }
    })
  ), h = (x, D) => {
    var Z;
    if (!x || !D)
      return null;
    const N = D.rect.current.translated;
    if (!N)
      return null;
    const E = (l == null ? void 0 : l.position) || "on", O = E === "below" ? 1 : E === "above" ? -1 : 0, T = N.top + N.height / 2 + O * 12, R = x.rect.top + x.rect.height / 2, I = N.height / 5, W = T < R - I, K = T > R + I, j = !W && !K;
    W && console.log("above", x.id), K && console.log("below", x.id), j && console.log("on", x.id);
    const X = j ? "on" : W ? "above" : "below";
    return { id: x.id, position: X, node: (Z = x.data.current) == null ? void 0 : Z.node };
  };
  function v(x) {
    const { active: D } = x;
    D && D.data.current && c({ id: D.id, node: D.data.current.node });
  }
  function g(x) {
    const { over: D, active: N } = x, E = h(D, N);
    E && (E.id !== (l == null ? void 0 : l.id) || E.position !== (l == null ? void 0 : l.position)) && u(E);
  }
  function b(x) {
    const { active: D, over: N } = x;
    console.log("drag end", D, N, x, l);
    const E = l;
    if (console.log("dragInfo", l), !N || !N.data.current) {
      c(null), u(null);
      return;
    }
    if (!D || !D.data.current) {
      c(null), u(null);
      return;
    }
    if (D.id === (N == null ? void 0 : N.id)) {
      c(null), u(null);
      return;
    }
    if (!l)
      throw new Error("no dragInfo, but over is not null");
    const O = D.data.current.node, T = N.data.current.node;
    (E == null ? void 0 : E.position) === "on" ? i.moveNodeToTopChild(O, T) : (E == null ? void 0 : E.position) === "above" ? i.moveNodeToOlderSibling(O, T) : (E == null ? void 0 : E.position) === "below" && i.moveNodeToYoungerSibling(O, T), c(null), u(null);
  }
  const m = i.data.trail, C = (x) => {
    i.setTrail(x);
  }, p = i.getNode(m);
  return /* @__PURE__ */ _(
    g7,
    {
      sensors: d,
      collisionDetection: (x) => {
        var N, E;
        if (!x.active.rect.current.translated || !x.active.rect.current.initial)
          return [];
        if (!x.active.rect.current.translated)
          return [];
        const D = x.droppableContainers.map((O) => {
          if (!O.rect.current)
            return null;
          O.rect.current.top;
          const T = O.rect.current.top + 12;
          O.rect.current.top + O.rect.current.height;
          const R = O.rect.current.top + O.rect.current.height - 12;
          O.rect.current.top + O.rect.current.height / 3, x.active.rect.current.translated.top, x.active.rect.current.translated.top + x.active.rect.current.translated.height;
          const I = x.active.rect.current.translated.top + x.active.rect.current.translated.height / 2;
          return I > T && I < R ? O : null;
        }).filter((O) => O !== null);
        if (D.length > 1) {
          const O = ((N = x.active.rect.current.translated) == null ? void 0 : N.left) - ((E = x.active.rect.current.initial) == null ? void 0 : E.left) / window.innerWidth, T = D.filter((K) => K !== null && K.rect.current).map((K) => K.rect.current.width + 10).reduce((K, j) => K + j), R = T < window.innerWidth ? T : window.innerWidth, [I, W] = D.reduce((K, j) => {
            if (!j || !j.rect.current || !x.active.rect.current.translated || !x.active.rect.current.initial)
              return K;
            const ae = j.rect.current.left + j.rect.current.width / 2 - R / 2, Z = Math.abs(ae - O);
            return K[0] < Z ? K : [Z, j];
          }, [window.innerWidth, null]);
          return W === null ? [] : [{ id: W.id }];
        } else
          return D[0] ? [{ id: D[0].id }] : [];
      },
      onDragStart: v,
      onDragEnd: b,
      onDragOver: g,
      children: /* @__PURE__ */ q("div", { className: "w-full", children: [
        /* @__PURE__ */ _("div", { className: "flex w-full px-3 items-center overflow-x-scroll no-scrollbar", children: m.length > 1 && m.map((x, D) => {
          const N = m.slice(0, D + 1);
          return /* @__PURE__ */ _(uS, { index: D, breadcrumbTrail: N, item: x, trail: m, context: i, setTrail: C, dragging: s, dragOverInfo: l }, D);
        }) }),
        /* @__PURE__ */ _("div", { className: "w-full", children: p.hasMerge() ? /* @__PURE__ */ _(q6, { context: i, node: p, dragging: s, dragOverInfo: l, options: r || {} }) : /* @__PURE__ */ _(G6, { context: i, node: p, dragging: s, dragOverInfo: l, options: r || {} }) })
      ] })
    }
  );
}, yS = lS, uS = ({
  index: e,
  breadcrumbTrail: n,
  item: r,
  trail: i,
  context: s,
  dragging: c,
  dragOverInfo: l,
  setTrail: u
}) => {
  const d = s.getNode(n), h = d.getNodeId(), v = d.getNodeType(), {
    isOver: g,
    setNodeRef: b,
    node: m
  } = Hl({
    id: `${v}-${h}`,
    data: { node: d }
  }), p = s.getNode(n).getOptionContent(), y = p.description.length > 20 ? p.description.slice(0, 17) + "..." : p.description, x = n.length === 1 ? /* @__PURE__ */ _(Rx, {}) : y;
  return /* @__PURE__ */ _("div", { className: g ? "scale-110 py-0 px-1" : "py-2 px-1", ref: b, children: /* @__PURE__ */ _(Se, { onClick: () => {
    u(n);
  }, variant: "secondary", disabled: e === i.length - 1, children: x }, e + 1) });
};
export {
  yS as default
};
