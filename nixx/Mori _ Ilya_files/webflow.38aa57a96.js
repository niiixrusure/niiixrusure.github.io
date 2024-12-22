
/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // packages/shared/render/plugins/BaseSiteModules/tram-min.js
  var require_tram_min = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/tram-min.js"() {
      "use strict";
      window.tram = function(a) {
        function b(a2, b2) {
          var c2 = new M.Bare();
          return c2.init(a2, b2);
        }
        function c(a2) {
          return a2.replace(/[A-Z]/g, function(a3) {
            return "-" + a3.toLowerCase();
          });
        }
        function d(a2) {
          var b2 = parseInt(a2.slice(1), 16), c2 = b2 >> 16 & 255, d2 = b2 >> 8 & 255, e2 = 255 & b2;
          return [
            c2,
            d2,
            e2
          ];
        }
        function e(a2, b2, c2) {
          return "#" + (1 << 24 | a2 << 16 | b2 << 8 | c2).toString(16).slice(1);
        }
        function f() {
        }
        function g(a2, b2) {
          j("Type warning: Expected: [" + a2 + "] Got: [" + typeof b2 + "] " + b2);
        }
        function h(a2, b2, c2) {
          j("Units do not match [" + a2 + "]: " + b2 + ", " + c2);
        }
        function i(a2, b2, c2) {
          if (void 0 !== b2 && (c2 = b2), void 0 === a2)
            return c2;
          var d2 = c2;
          return $2.test(a2) || !_.test(a2) ? d2 = parseInt(a2, 10) : _.test(a2) && (d2 = 1e3 * parseFloat(a2)), 0 > d2 && (d2 = 0), d2 === d2 ? d2 : c2;
        }
        function j(a2) {
          U.debug && window && window.console.warn(a2);
        }
        function k(a2) {
          for (var b2 = -1, c2 = a2 ? a2.length : 0, d2 = []; ++b2 < c2; ) {
            var e2 = a2[b2];
            e2 && d2.push(e2);
          }
          return d2;
        }
        var l = function(a2, b2, c2) {
          function d2(a3) {
            return "object" == typeof a3;
          }
          function e2(a3) {
            return "function" == typeof a3;
          }
          function f2() {
          }
          function g2(h2, i2) {
            function j2() {
              var a3 = new k2();
              return e2(a3.init) && a3.init.apply(a3, arguments), a3;
            }
            function k2() {
            }
            i2 === c2 && (i2 = h2, h2 = Object), j2.Bare = k2;
            var l2, m2 = f2[a2] = h2[a2], n2 = k2[a2] = j2[a2] = new f2();
            return n2.constructor = j2, j2.mixin = function(b3) {
              return k2[a2] = j2[a2] = g2(j2, b3)[a2], j2;
            }, j2.open = function(a3) {
              if (l2 = {}, e2(a3) ? l2 = a3.call(j2, n2, m2, j2, h2) : d2(a3) && (l2 = a3), d2(l2))
                for (var c3 in l2)
                  b2.call(l2, c3) && (n2[c3] = l2[c3]);
              return e2(n2.init) || (n2.init = h2), j2;
            }, j2.open(i2);
          }
          return g2;
        }("prototype", {}.hasOwnProperty), m = {
          ease: [
            "ease",
            function(a2, b2, c2, d2) {
              var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
              return b2 + c2 * (-2.75 * f2 * e2 + 11 * e2 * e2 + -15.5 * f2 + 8 * e2 + 0.25 * a2);
            }
          ],
          "ease-in": [
            "ease-in",
            function(a2, b2, c2, d2) {
              var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
              return b2 + c2 * (-1 * f2 * e2 + 3 * e2 * e2 + -3 * f2 + 2 * e2);
            }
          ],
          "ease-out": [
            "ease-out",
            function(a2, b2, c2, d2) {
              var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
              return b2 + c2 * (0.3 * f2 * e2 + -1.6 * e2 * e2 + 2.2 * f2 + -1.8 * e2 + 1.9 * a2);
            }
          ],
          "ease-in-out": [
            "ease-in-out",
            function(a2, b2, c2, d2) {
              var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
              return b2 + c2 * (2 * f2 * e2 + -5 * e2 * e2 + 2 * f2 + 2 * e2);
            }
          ],
          linear: [
            "linear",
            function(a2, b2, c2, d2) {
              return c2 * a2 / d2 + b2;
            }
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function(a2, b2, c2, d2) {
              return c2 * (a2 /= d2) * a2 + b2;
            }
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function(a2, b2, c2, d2) {
              return -c2 * (a2 /= d2) * (a2 - 2) + b2;
            }
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function(a2, b2, c2, d2) {
              return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 + b2 : -c2 / 2 * (--a2 * (a2 - 2) - 1) + b2;
            }
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function(a2, b2, c2, d2) {
              return c2 * (a2 /= d2) * a2 * a2 + b2;
            }
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function(a2, b2, c2, d2) {
              return c2 * ((a2 = a2 / d2 - 1) * a2 * a2 + 1) + b2;
            }
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function(a2, b2, c2, d2) {
              return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 + b2 : c2 / 2 * ((a2 -= 2) * a2 * a2 + 2) + b2;
            }
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function(a2, b2, c2, d2) {
              return c2 * (a2 /= d2) * a2 * a2 * a2 + b2;
            }
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function(a2, b2, c2, d2) {
              return -c2 * ((a2 = a2 / d2 - 1) * a2 * a2 * a2 - 1) + b2;
            }
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function(a2, b2, c2, d2) {
              return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 * a2 + b2 : -c2 / 2 * ((a2 -= 2) * a2 * a2 * a2 - 2) + b2;
            }
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function(a2, b2, c2, d2) {
              return c2 * (a2 /= d2) * a2 * a2 * a2 * a2 + b2;
            }
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function(a2, b2, c2, d2) {
              return c2 * ((a2 = a2 / d2 - 1) * a2 * a2 * a2 * a2 + 1) + b2;
            }
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function(a2, b2, c2, d2) {
              return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 * a2 * a2 + b2 : c2 / 2 * ((a2 -= 2) * a2 * a2 * a2 * a2 + 2) + b2;
            }
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function(a2, b2, c2, d2) {
              return -c2 * Math.cos(a2 / d2 * (Math.PI / 2)) + c2 + b2;
            }
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function(a2, b2, c2, d2) {
              return c2 * Math.sin(a2 / d2 * (Math.PI / 2)) + b2;
            }
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function(a2, b2, c2, d2) {
              return -c2 / 2 * (Math.cos(Math.PI * a2 / d2) - 1) + b2;
            }
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function(a2, b2, c2, d2) {
              return 0 === a2 ? b2 : c2 * Math.pow(2, 10 * (a2 / d2 - 1)) + b2;
            }
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function(a2, b2, c2, d2) {
              return a2 === d2 ? b2 + c2 : c2 * (-Math.pow(2, -10 * a2 / d2) + 1) + b2;
            }
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function(a2, b2, c2, d2) {
              return 0 === a2 ? b2 : a2 === d2 ? b2 + c2 : (a2 /= d2 / 2) < 1 ? c2 / 2 * Math.pow(2, 10 * (a2 - 1)) + b2 : c2 / 2 * (-Math.pow(2, -10 * --a2) + 2) + b2;
            }
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function(a2, b2, c2, d2) {
              return -c2 * (Math.sqrt(1 - (a2 /= d2) * a2) - 1) + b2;
            }
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function(a2, b2, c2, d2) {
              return c2 * Math.sqrt(1 - (a2 = a2 / d2 - 1) * a2) + b2;
            }
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function(a2, b2, c2, d2) {
              return (a2 /= d2 / 2) < 1 ? -c2 / 2 * (Math.sqrt(1 - a2 * a2) - 1) + b2 : c2 / 2 * (Math.sqrt(1 - (a2 -= 2) * a2) + 1) + b2;
            }
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function(a2, b2, c2, d2, e2) {
              return void 0 === e2 && (e2 = 1.70158), c2 * (a2 /= d2) * a2 * ((e2 + 1) * a2 - e2) + b2;
            }
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function(a2, b2, c2, d2, e2) {
              return void 0 === e2 && (e2 = 1.70158), c2 * ((a2 = a2 / d2 - 1) * a2 * ((e2 + 1) * a2 + e2) + 1) + b2;
            }
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function(a2, b2, c2, d2, e2) {
              return void 0 === e2 && (e2 = 1.70158), (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * (((e2 *= 1.525) + 1) * a2 - e2) + b2 : c2 / 2 * ((a2 -= 2) * a2 * (((e2 *= 1.525) + 1) * a2 + e2) + 2) + b2;
            }
          ]
        }, n = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
        }, o = document, p = window, q = "bkwld-tram", r = /[\-\.0-9]/g, s = /[A-Z]/, t = "number", u = /^(rgb|#)/, v = /(em|cm|mm|in|pt|pc|px)$/, w = /(em|cm|mm|in|pt|pc|px|%)$/, x = /(deg|rad|turn)$/, y = "unitless", z = /(all|none) 0s ease 0s/, A = /^(width|height)$/, B = " ", C = o.createElement("a"), D = [
          "Webkit",
          "Moz",
          "O",
          "ms"
        ], E = [
          "-webkit-",
          "-moz-",
          "-o-",
          "-ms-"
        ], F = function(a2) {
          if (a2 in C.style)
            return {
              dom: a2,
              css: a2
            };
          var b2, c2, d2 = "", e2 = a2.split("-");
          for (b2 = 0; b2 < e2.length; b2++)
            d2 += e2[b2].charAt(0).toUpperCase() + e2[b2].slice(1);
          for (b2 = 0; b2 < D.length; b2++)
            if (c2 = D[b2] + d2, c2 in C.style)
              return {
                dom: c2,
                css: E[b2] + a2
              };
        }, G = b.support = {
          bind: Function.prototype.bind,
          transform: F("transform"),
          transition: F("transition"),
          backface: F("backface-visibility"),
          timing: F("transition-timing-function")
        };
        if (G.transition) {
          var H = G.timing.dom;
          if (C.style[H] = m["ease-in-back"][0], !C.style[H])
            for (var I in n)
              m[I][0] = n[I];
        }
        var J = b.frame = function() {
          var a2 = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
          return a2 && G.bind ? a2.bind(p) : function(a3) {
            p.setTimeout(a3, 16);
          };
        }(), K = b.now = function() {
          var a2 = p.performance, b2 = a2 && (a2.now || a2.webkitNow || a2.msNow || a2.mozNow);
          return b2 && G.bind ? b2.bind(a2) : Date.now || function() {
            return +/* @__PURE__ */ new Date();
          };
        }(), L = l(function(b2) {
          function d2(a2, b3) {
            var c2 = k(("" + a2).split(B)), d3 = c2[0];
            b3 = b3 || {};
            var e3 = Y[d3];
            if (!e3)
              return j("Unsupported property: " + d3);
            if (!b3.weak || !this.props[d3]) {
              var f3 = e3[0], g3 = this.props[d3];
              return g3 || (g3 = this.props[d3] = new f3.Bare()), g3.init(this.$el, c2, e3, b3), g3;
            }
          }
          function e2(a2, b3, c2) {
            if (a2) {
              var e3 = typeof a2;
              if (b3 || (this.timer && this.timer.destroy(), this.queue = [], this.active = false), "number" == e3 && b3)
                return this.timer = new S({
                  duration: a2,
                  context: this,
                  complete: h2
                }), void (this.active = true);
              if ("string" == e3 && b3) {
                switch (a2) {
                  case "hide":
                    o2.call(this);
                    break;
                  case "stop":
                    l2.call(this);
                    break;
                  case "redraw":
                    p2.call(this);
                    break;
                  default:
                    d2.call(this, a2, c2 && c2[1]);
                }
                return h2.call(this);
              }
              if ("function" == e3)
                return void a2.call(this, this);
              if ("object" == e3) {
                var f3 = 0;
                u2.call(this, a2, function(a3, b4) {
                  a3.span > f3 && (f3 = a3.span), a3.stop(), a3.animate(b4);
                }, function(a3) {
                  "wait" in a3 && (f3 = i(a3.wait, 0));
                }), t2.call(this), f3 > 0 && (this.timer = new S({
                  duration: f3,
                  context: this
                }), this.active = true, b3 && (this.timer.complete = h2));
                var g3 = this, j2 = false, k2 = {};
                J(function() {
                  u2.call(g3, a2, function(a3) {
                    a3.active && (j2 = true, k2[a3.name] = a3.nextStyle);
                  }), j2 && g3.$el.css(k2);
                });
              }
            }
          }
          function f2(a2) {
            a2 = i(a2, 0), this.active ? this.queue.push({
              options: a2
            }) : (this.timer = new S({
              duration: a2,
              context: this,
              complete: h2
            }), this.active = true);
          }
          function g2(a2) {
            return this.active ? (this.queue.push({
              options: a2,
              args: arguments
            }), void (this.timer.complete = h2)) : j("No active transition timer. Use start() or wait() before then().");
          }
          function h2() {
            if (this.timer && this.timer.destroy(), this.active = false, this.queue.length) {
              var a2 = this.queue.shift();
              e2.call(this, a2.options, true, a2.args);
            }
          }
          function l2(a2) {
            this.timer && this.timer.destroy(), this.queue = [], this.active = false;
            var b3;
            "string" == typeof a2 ? (b3 = {}, b3[a2] = 1) : b3 = "object" == typeof a2 && null != a2 ? a2 : this.props, u2.call(this, b3, v2), t2.call(this);
          }
          function m2(a2) {
            l2.call(this, a2), u2.call(this, a2, w2, x2);
          }
          function n2(a2) {
            "string" != typeof a2 && (a2 = "block"), this.el.style.display = a2;
          }
          function o2() {
            l2.call(this), this.el.style.display = "none";
          }
          function p2() {
            this.el.offsetHeight;
          }
          function r2() {
            l2.call(this), a.removeData(this.el, q), this.$el = this.el = null;
          }
          function t2() {
            var a2, b3, c2 = [];
            this.upstream && c2.push(this.upstream);
            for (a2 in this.props)
              b3 = this.props[a2], b3.active && c2.push(b3.string);
            c2 = c2.join(","), this.style !== c2 && (this.style = c2, this.el.style[G.transition.dom] = c2);
          }
          function u2(a2, b3, e3) {
            var f3, g3, h3, i2, j2 = b3 !== v2, k2 = {};
            for (f3 in a2)
              h3 = a2[f3], f3 in Z ? (k2.transform || (k2.transform = {}), k2.transform[f3] = h3) : (s.test(f3) && (f3 = c(f3)), f3 in Y ? k2[f3] = h3 : (i2 || (i2 = {}), i2[f3] = h3));
            for (f3 in k2) {
              if (h3 = k2[f3], g3 = this.props[f3], !g3) {
                if (!j2)
                  continue;
                g3 = d2.call(this, f3);
              }
              b3.call(this, g3, h3);
            }
            e3 && i2 && e3.call(this, i2);
          }
          function v2(a2) {
            a2.stop();
          }
          function w2(a2, b3) {
            a2.set(b3);
          }
          function x2(a2) {
            this.$el.css(a2);
          }
          function y2(a2, c2) {
            b2[a2] = function() {
              return this.children ? A2.call(this, c2, arguments) : (this.el && c2.apply(this, arguments), this);
            };
          }
          function A2(a2, b3) {
            var c2, d3 = this.children.length;
            for (c2 = 0; d3 > c2; c2++)
              a2.apply(this.children[c2], b3);
            return this;
          }
          b2.init = function(b3) {
            if (this.$el = a(b3), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = false, U.keepInherited && !U.fallback) {
              var c2 = W(this.el, "transition");
              c2 && !z.test(c2) && (this.upstream = c2);
            }
            G.backface && U.hideBackface && V(this.el, G.backface.css, "hidden");
          }, y2("add", d2), y2("start", e2), y2("wait", f2), y2("then", g2), y2("next", h2), y2("stop", l2), y2("set", m2), y2("show", n2), y2("hide", o2), y2("redraw", p2), y2("destroy", r2);
        }), M = l(L, function(b2) {
          function c2(b3, c3) {
            var d2 = a.data(b3, q) || a.data(b3, q, new L.Bare());
            return d2.el || d2.init(b3), c3 ? d2.start(c3) : d2;
          }
          b2.init = function(b3, d2) {
            var e2 = a(b3);
            if (!e2.length)
              return this;
            if (1 === e2.length)
              return c2(e2[0], d2);
            var f2 = [];
            return e2.each(function(a2, b4) {
              f2.push(c2(b4, d2));
            }), this.children = f2, this;
          };
        }), N = l(function(a2) {
          function b2() {
            var a3 = this.get();
            this.update("auto");
            var b3 = this.get();
            return this.update(a3), b3;
          }
          function c2(a3, b3, c3) {
            return void 0 !== b3 && (c3 = b3), a3 in m ? a3 : c3;
          }
          function d2(a3) {
            var b3 = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(a3);
            return (b3 ? e(b3[1], b3[2], b3[3]) : a3).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
          }
          var f2 = {
            duration: 500,
            ease: "ease",
            delay: 0
          };
          a2.init = function(a3, b3, d3, e2) {
            this.$el = a3, this.el = a3[0];
            var g2 = b3[0];
            d3[2] && (g2 = d3[2]), X[g2] && (g2 = X[g2]), this.name = g2, this.type = d3[1], this.duration = i(b3[1], this.duration, f2.duration), this.ease = c2(b3[2], this.ease, f2.ease), this.delay = i(b3[3], this.delay, f2.delay), this.span = this.duration + this.delay, this.active = false, this.nextStyle = null, this.auto = A.test(this.name), this.unit = e2.unit || this.unit || U.defaultUnit, this.angle = e2.angle || this.angle || U.defaultAngle, U.fallback || e2.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + B + this.duration + "ms" + ("ease" != this.ease ? B + m[this.ease][0] : "") + (this.delay ? B + this.delay + "ms" : ""));
          }, a2.set = function(a3) {
            a3 = this.convert(a3, this.type), this.update(a3), this.redraw();
          }, a2.transition = function(a3) {
            this.active = true, a3 = this.convert(a3, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == a3 && (a3 = b2.call(this))), this.nextStyle = a3;
          }, a2.fallback = function(a3) {
            var c3 = this.el.style[this.name] || this.convert(this.get(), this.type);
            a3 = this.convert(a3, this.type), this.auto && ("auto" == c3 && (c3 = this.convert(this.get(), this.type)), "auto" == a3 && (a3 = b2.call(this))), this.tween = new R({
              from: c3,
              to: a3,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease,
              update: this.update,
              context: this
            });
          }, a2.get = function() {
            return W(this.el, this.name);
          }, a2.update = function(a3) {
            V(this.el, this.name, a3);
          }, a2.stop = function() {
            (this.active || this.nextStyle) && (this.active = false, this.nextStyle = null, V(this.el, this.name, this.get()));
            var a3 = this.tween;
            a3 && a3.context && a3.destroy();
          }, a2.convert = function(a3, b3) {
            if ("auto" == a3 && this.auto)
              return a3;
            var c3, e2 = "number" == typeof a3, f3 = "string" == typeof a3;
            switch (b3) {
              case t:
                if (e2)
                  return a3;
                if (f3 && "" === a3.replace(r, ""))
                  return +a3;
                c3 = "number(unitless)";
                break;
              case u:
                if (f3) {
                  if ("" === a3 && this.original)
                    return this.original;
                  if (b3.test(a3))
                    return "#" == a3.charAt(0) && 7 == a3.length ? a3 : d2(a3);
                }
                c3 = "hex or rgb string";
                break;
              case v:
                if (e2)
                  return a3 + this.unit;
                if (f3 && b3.test(a3))
                  return a3;
                c3 = "number(px) or string(unit)";
                break;
              case w:
                if (e2)
                  return a3 + this.unit;
                if (f3 && b3.test(a3))
                  return a3;
                c3 = "number(px) or string(unit or %)";
                break;
              case x:
                if (e2)
                  return a3 + this.angle;
                if (f3 && b3.test(a3))
                  return a3;
                c3 = "number(deg) or string(angle)";
                break;
              case y:
                if (e2)
                  return a3;
                if (f3 && w.test(a3))
                  return a3;
                c3 = "number(unitless) or string(unit or %)";
            }
            return g(c3, a3), a3;
          }, a2.redraw = function() {
            this.el.offsetHeight;
          };
        }), O = l(N, function(a2, b2) {
          a2.init = function() {
            b2.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), u));
          };
        }), P = l(N, function(a2, b2) {
          a2.init = function() {
            b2.init.apply(this, arguments), this.animate = this.fallback;
          }, a2.get = function() {
            return this.$el[this.name]();
          }, a2.update = function(a3) {
            this.$el[this.name](a3);
          };
        }), Q = l(N, function(a2, b2) {
          function c2(a3, b3) {
            var c3, d2, e2, f2, g2;
            for (c3 in a3)
              f2 = Z[c3], e2 = f2[0], d2 = f2[1] || c3, g2 = this.convert(a3[c3], e2), b3.call(this, d2, g2, e2);
          }
          a2.init = function() {
            b2.init.apply(this, arguments), this.current || (this.current = {}, Z.perspective && U.perspective && (this.current.perspective = U.perspective, V(this.el, this.name, this.style(this.current)), this.redraw()));
          }, a2.set = function(a3) {
            c2.call(this, a3, function(a4, b3) {
              this.current[a4] = b3;
            }), V(this.el, this.name, this.style(this.current)), this.redraw();
          }, a2.transition = function(a3) {
            var b3 = this.values(a3);
            this.tween = new T({
              current: this.current,
              values: b3,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease
            });
            var c3, d2 = {};
            for (c3 in this.current)
              d2[c3] = c3 in b3 ? b3[c3] : this.current[c3];
            this.active = true, this.nextStyle = this.style(d2);
          }, a2.fallback = function(a3) {
            var b3 = this.values(a3);
            this.tween = new T({
              current: this.current,
              values: b3,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease,
              update: this.update,
              context: this
            });
          }, a2.update = function() {
            V(this.el, this.name, this.style(this.current));
          }, a2.style = function(a3) {
            var b3, c3 = "";
            for (b3 in a3)
              c3 += b3 + "(" + a3[b3] + ") ";
            return c3;
          }, a2.values = function(a3) {
            var b3, d2 = {};
            return c2.call(this, a3, function(a4, c3, e2) {
              d2[a4] = c3, void 0 === this.current[a4] && (b3 = 0, ~a4.indexOf("scale") && (b3 = 1), this.current[a4] = this.convert(b3, e2));
            }), d2;
          };
        }), R = l(function(b2) {
          function c2(a2) {
            1 === n2.push(a2) && J(g2);
          }
          function g2() {
            var a2, b3, c3, d2 = n2.length;
            if (d2)
              for (J(g2), b3 = K(), a2 = d2; a2--; )
                c3 = n2[a2], c3 && c3.render(b3);
          }
          function i2(b3) {
            var c3, d2 = a.inArray(b3, n2);
            d2 >= 0 && (c3 = n2.slice(d2 + 1), n2.length = d2, c3.length && (n2 = n2.concat(c3)));
          }
          function j2(a2) {
            return Math.round(a2 * o2) / o2;
          }
          function k2(a2, b3, c3) {
            return e(a2[0] + c3 * (b3[0] - a2[0]), a2[1] + c3 * (b3[1] - a2[1]), a2[2] + c3 * (b3[2] - a2[2]));
          }
          var l2 = {
            ease: m.ease[1],
            from: 0,
            to: 1
          };
          b2.init = function(a2) {
            this.duration = a2.duration || 0, this.delay = a2.delay || 0;
            var b3 = a2.ease || l2.ease;
            m[b3] && (b3 = m[b3][1]), "function" != typeof b3 && (b3 = l2.ease), this.ease = b3, this.update = a2.update || f, this.complete = a2.complete || f, this.context = a2.context || this, this.name = a2.name;
            var c3 = a2.from, d2 = a2.to;
            void 0 === c3 && (c3 = l2.from), void 0 === d2 && (d2 = l2.to), this.unit = a2.unit || "", "number" == typeof c3 && "number" == typeof d2 ? (this.begin = c3, this.change = d2 - c3) : this.format(d2, c3), this.value = this.begin + this.unit, this.start = K(), a2.autoplay !== false && this.play();
          }, b2.play = function() {
            this.active || (this.start || (this.start = K()), this.active = true, c2(this));
          }, b2.stop = function() {
            this.active && (this.active = false, i2(this));
          }, b2.render = function(a2) {
            var b3, c3 = a2 - this.start;
            if (this.delay) {
              if (c3 <= this.delay)
                return;
              c3 -= this.delay;
            }
            if (c3 < this.duration) {
              var d2 = this.ease(c3, 0, 1, this.duration);
              return b3 = this.startRGB ? k2(this.startRGB, this.endRGB, d2) : j2(this.begin + d2 * this.change), this.value = b3 + this.unit, void this.update.call(this.context, this.value);
            }
            b3 = this.endHex || this.begin + this.change, this.value = b3 + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy();
          }, b2.format = function(a2, b3) {
            if (b3 += "", a2 += "", "#" == a2.charAt(0))
              return this.startRGB = d(b3), this.endRGB = d(a2), this.endHex = a2, this.begin = 0, void (this.change = 1);
            if (!this.unit) {
              var c3 = b3.replace(r, ""), e2 = a2.replace(r, "");
              c3 !== e2 && h("tween", b3, a2), this.unit = c3;
            }
            b3 = parseFloat(b3), a2 = parseFloat(a2), this.begin = this.value = b3, this.change = a2 - b3;
          }, b2.destroy = function() {
            this.stop(), this.context = null, this.ease = this.update = this.complete = f;
          };
          var n2 = [], o2 = 1e3;
        }), S = l(R, function(a2) {
          a2.init = function(a3) {
            this.duration = a3.duration || 0, this.complete = a3.complete || f, this.context = a3.context, this.play();
          }, a2.render = function(a3) {
            var b2 = a3 - this.start;
            b2 < this.duration || (this.complete.call(this.context), this.destroy());
          };
        }), T = l(R, function(a2, b2) {
          a2.init = function(a3) {
            this.context = a3.context, this.update = a3.update, this.tweens = [], this.current = a3.current;
            var b3, c2;
            for (b3 in a3.values)
              c2 = a3.values[b3], this.current[b3] !== c2 && this.tweens.push(new R({
                name: b3,
                from: this.current[b3],
                to: c2,
                duration: a3.duration,
                delay: a3.delay,
                ease: a3.ease,
                autoplay: false
              }));
            this.play();
          }, a2.render = function(a3) {
            var b3, c2, d2 = this.tweens.length, e2 = false;
            for (b3 = d2; b3--; )
              c2 = this.tweens[b3], c2.context && (c2.render(a3), this.current[c2.name] = c2.value, e2 = true);
            return e2 ? void (this.update && this.update.call(this.context)) : this.destroy();
          }, a2.destroy = function() {
            if (b2.destroy.call(this), this.tweens) {
              var a3, c2 = this.tweens.length;
              for (a3 = c2; a3--; )
                this.tweens[a3].destroy();
              this.tweens = null, this.current = null;
            }
          };
        }), U = b.config = {
          debug: false,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: false,
          hideBackface: false,
          perspective: "",
          fallback: !G.transition,
          agentTests: []
        };
        b.fallback = function(a2) {
          if (!G.transition)
            return U.fallback = true;
          U.agentTests.push("(" + a2 + ")");
          var b2 = new RegExp(U.agentTests.join("|"), "i");
          U.fallback = b2.test(navigator.userAgent);
        }, b.fallback("6.0.[2-5] Safari"), b.tween = function(a2) {
          return new R(a2);
        }, b.delay = function(a2, b2, c2) {
          return new S({
            complete: b2,
            duration: a2,
            context: c2
          });
        }, a.fn.tram = function(a2) {
          return b.call(null, this, a2);
        };
        var V = a.style, W = a.css, X = {
          transform: G.transform && G.transform.css
        }, Y = {
          color: [
            O,
            u
          ],
          background: [
            O,
            u,
            "background-color"
          ],
          "outline-color": [
            O,
            u
          ],
          "border-color": [
            O,
            u
          ],
          "border-top-color": [
            O,
            u
          ],
          "border-right-color": [
            O,
            u
          ],
          "border-bottom-color": [
            O,
            u
          ],
          "border-left-color": [
            O,
            u
          ],
          "border-width": [
            N,
            v
          ],
          "border-top-width": [
            N,
            v
          ],
          "border-right-width": [
            N,
            v
          ],
          "border-bottom-width": [
            N,
            v
          ],
          "border-left-width": [
            N,
            v
          ],
          "border-spacing": [
            N,
            v
          ],
          "letter-spacing": [
            N,
            v
          ],
          margin: [
            N,
            v
          ],
          "margin-top": [
            N,
            v
          ],
          "margin-right": [
            N,
            v
          ],
          "margin-bottom": [
            N,
            v
          ],
          "margin-left": [
            N,
            v
          ],
          padding: [
            N,
            v
          ],
          "padding-top": [
            N,
            v
          ],
          "padding-right": [
            N,
            v
          ],
          "padding-bottom": [
            N,
            v
          ],
          "padding-left": [
            N,
            v
          ],
          "outline-width": [
            N,
            v
          ],
          opacity: [
            N,
            t
          ],
          top: [
            N,
            w
          ],
          right: [
            N,
            w
          ],
          bottom: [
            N,
            w
          ],
          left: [
            N,
            w
          ],
          "font-size": [
            N,
            w
          ],
          "text-indent": [
            N,
            w
          ],
          "word-spacing": [
            N,
            w
          ],
          width: [
            N,
            w
          ],
          "min-width": [
            N,
            w
          ],
          "max-width": [
            N,
            w
          ],
          height: [
            N,
            w
          ],
          "min-height": [
            N,
            w
          ],
          "max-height": [
            N,
            w
          ],
          "line-height": [
            N,
            y
          ],
          "scroll-top": [
            P,
            t,
            "scrollTop"
          ],
          "scroll-left": [
            P,
            t,
            "scrollLeft"
          ]
        }, Z = {};
        G.transform && (Y.transform = [
          Q
        ], Z = {
          x: [
            w,
            "translateX"
          ],
          y: [
            w,
            "translateY"
          ],
          rotate: [
            x
          ],
          rotateX: [
            x
          ],
          rotateY: [
            x
          ],
          scale: [
            t
          ],
          scaleX: [
            t
          ],
          scaleY: [
            t
          ],
          skew: [
            x
          ],
          skewX: [
            x
          ],
          skewY: [
            x
          ]
        }), G.transform && G.backface && (Z.z = [
          w,
          "translateZ"
        ], Z.rotateZ = [
          x
        ], Z.scaleZ = [
          t
        ], Z.perspective = [
          v
        ]);
        var $2 = /ms/, _ = /s|\./;
        return a.tram = b;
      }(window.jQuery);
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/underscore-custom.js
  var require_underscore_custom = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/underscore-custom.js"(exports, module) {
      "use strict";
      var $2 = window.$;
      var tram = require_tram_min() && $2.tram;
      module.exports = function() {
        var _ = {};
        _.VERSION = "1.6.0-Webflow";
        var breaker = {};
        var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
        var push = ArrayProto.push, slice = ArrayProto.slice, concat = ArrayProto.concat, toString = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty;
        var nativeForEach = ArrayProto.forEach, nativeMap = ArrayProto.map, nativeReduce = ArrayProto.reduce, nativeReduceRight = ArrayProto.reduceRight, nativeFilter = ArrayProto.filter, nativeEvery = ArrayProto.every, nativeSome = ArrayProto.some, nativeIndexOf = ArrayProto.indexOf, nativeLastIndexOf = ArrayProto.lastIndexOf, nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeBind = FuncProto.bind;
        var each = _.each = _.forEach = function(obj, iterator, context) {
          if (obj == null)
            return obj;
          if (nativeForEach && obj.forEach === nativeForEach) {
            obj.forEach(iterator, context);
          } else if (obj.length === +obj.length) {
            for (var i = 0, length = obj.length; i < length; i++) {
              if (iterator.call(context, obj[i], i, obj) === breaker)
                return;
            }
          } else {
            var keys = _.keys(obj);
            for (var i = 0, length = keys.length; i < length; i++) {
              if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker)
                return;
            }
          }
          return obj;
        };
        _.map = _.collect = function(obj, iterator, context) {
          var results = [];
          if (obj == null)
            return results;
          if (nativeMap && obj.map === nativeMap)
            return obj.map(iterator, context);
          each(obj, function(value, index, list) {
            results.push(iterator.call(context, value, index, list));
          });
          return results;
        };
        _.find = _.detect = function(obj, predicate, context) {
          var result;
          any(obj, function(value, index, list) {
            if (predicate.call(context, value, index, list)) {
              result = value;
              return true;
            }
          });
          return result;
        };
        _.filter = _.select = function(obj, predicate, context) {
          var results = [];
          if (obj == null)
            return results;
          if (nativeFilter && obj.filter === nativeFilter)
            return obj.filter(predicate, context);
          each(obj, function(value, index, list) {
            if (predicate.call(context, value, index, list))
              results.push(value);
          });
          return results;
        };
        var any = _.some = _.any = function(obj, predicate, context) {
          predicate || (predicate = _.identity);
          var result = false;
          if (obj == null)
            return result;
          if (nativeSome && obj.some === nativeSome)
            return obj.some(predicate, context);
          each(obj, function(value, index, list) {
            if (result || (result = predicate.call(context, value, index, list)))
              return breaker;
          });
          return !!result;
        };
        _.contains = _.include = function(obj, target) {
          if (obj == null)
            return false;
          if (nativeIndexOf && obj.indexOf === nativeIndexOf)
            return obj.indexOf(target) != -1;
          return any(obj, function(value) {
            return value === target;
          });
        };
        _.delay = function(func, wait) {
          var args = slice.call(arguments, 2);
          return setTimeout(function() {
            return func.apply(null, args);
          }, wait);
        };
        _.defer = function(func) {
          return _.delay.apply(_, [
            func,
            1
          ].concat(slice.call(arguments, 1)));
        };
        _.throttle = function(func) {
          var wait, args, context;
          return function() {
            if (wait)
              return;
            wait = true;
            args = arguments;
            context = this;
            tram.frame(function() {
              wait = false;
              func.apply(context, args);
            });
          };
        };
        _.debounce = function(func, wait, immediate) {
          var timeout, args, context, timestamp, result;
          var later = function() {
            var last = _.now() - timestamp;
            if (last < wait) {
              timeout = setTimeout(later, wait - last);
            } else {
              timeout = null;
              if (!immediate) {
                result = func.apply(context, args);
                context = args = null;
              }
            }
          };
          return function() {
            context = this;
            args = arguments;
            timestamp = _.now();
            var callNow = immediate && !timeout;
            if (!timeout) {
              timeout = setTimeout(later, wait);
            }
            if (callNow) {
              result = func.apply(context, args);
              context = args = null;
            }
            return result;
          };
        };
        _.defaults = function(obj) {
          if (!_.isObject(obj))
            return obj;
          for (var i = 1, length = arguments.length; i < length; i++) {
            var source = arguments[i];
            for (var prop in source) {
              if (obj[prop] === void 0)
                obj[prop] = source[prop];
            }
          }
          return obj;
        };
        _.keys = function(obj) {
          if (!_.isObject(obj))
            return [];
          if (nativeKeys)
            return nativeKeys(obj);
          var keys = [];
          for (var key in obj)
            if (_.has(obj, key))
              keys.push(key);
          return keys;
        };
        _.has = function(obj, key) {
          return hasOwnProperty.call(obj, key);
        };
        _.isObject = function(obj) {
          return obj === Object(obj);
        };
        _.now = Date.now || function() {
          return (/* @__PURE__ */ new Date()).getTime();
        };
        _.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g
        };
        var noMatch = /(.)^/;
        var escapes = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029"
        };
        var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
        var escapeChar = function(match) {
          return "\\" + escapes[match];
        };
        var bareIdentifier = /^\s*(\w|\$)+\s*$/;
        _.template = function(text, settings, oldSettings) {
          if (!settings && oldSettings)
            settings = oldSettings;
          settings = _.defaults({}, settings, _.templateSettings);
          var matcher = RegExp([
            (settings.escape || noMatch).source,
            (settings.interpolate || noMatch).source,
            (settings.evaluate || noMatch).source
          ].join("|") + "|$", "g");
          var index = 0;
          var source = "__p+='";
          text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
            source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
            index = offset + match.length;
            if (escape) {
              source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
            } else if (interpolate) {
              source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
            } else if (evaluate) {
              source += "';\n" + evaluate + "\n__p+='";
            }
            return match;
          });
          source += "';\n";
          var argument = settings.variable;
          if (argument) {
            if (!bareIdentifier.test(argument))
              throw new Error("variable is not a bare identifier: " + argument);
          } else {
            source = "with(obj||{}){\n" + source + "}\n";
            argument = "obj";
          }
          source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
          var render;
          try {
            render = new Function(settings.variable || "obj", "_", source);
          } catch (e) {
            e.source = source;
            throw e;
          }
          var template = function(data) {
            return render.call(this, data, _);
          };
          template.source = "function(" + argument + "){\n" + source + "}";
          return template;
        };
        return _;
      }();
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-lib.js
  var require_webflow_lib = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-lib.js"(exports, module) {
      "use strict";
      var Webflow2 = {};
      var modules = {};
      var primary = [];
      var secondary = window.Webflow || [];
      var $2 = window.jQuery;
      var $win = $2(window);
      var $doc = $2(document);
      var isFunction = $2.isFunction;
      var _ = Webflow2._ = require_underscore_custom();
      var tram = Webflow2.tram = require_tram_min() && $2.tram;
      var domready = false;
      var destroyed = false;
      tram.config.hideBackface = false;
      tram.config.keepInherited = true;
      Webflow2.define = function(name, factory, options) {
        if (modules[name]) {
          unbindModule(modules[name]);
        }
        var instance = modules[name] = factory($2, _, options) || {};
        bindModule(instance);
        return instance;
      };
      Webflow2.require = function(name) {
        return modules[name];
      };
      function bindModule(module1) {
        if (Webflow2.env()) {
          isFunction(module1.design) && $win.on("__wf_design", module1.design);
          isFunction(module1.preview) && $win.on("__wf_preview", module1.preview);
        }
        isFunction(module1.destroy) && $win.on("__wf_destroy", module1.destroy);
        if (module1.ready && isFunction(module1.ready)) {
          addReady(module1);
        }
      }
      function addReady(module1) {
        if (domready) {
          module1.ready();
          return;
        }
        if (_.contains(primary, module1.ready)) {
          return;
        }
        primary.push(module1.ready);
      }
      function unbindModule(module1) {
        isFunction(module1.design) && $win.off("__wf_design", module1.design);
        isFunction(module1.preview) && $win.off("__wf_preview", module1.preview);
        isFunction(module1.destroy) && $win.off("__wf_destroy", module1.destroy);
        if (module1.ready && isFunction(module1.ready)) {
          removeReady(module1);
        }
      }
      function removeReady(module1) {
        primary = _.filter(primary, function(readyFn) {
          return readyFn !== module1.ready;
        });
      }
      Webflow2.push = function(ready2) {
        if (domready) {
          isFunction(ready2) && ready2();
          return;
        }
        secondary.push(ready2);
      };
      Webflow2.env = function(mode) {
        var designFlag = window.__wf_design;
        var inApp = typeof designFlag !== "undefined";
        if (!mode) {
          return inApp;
        }
        if (mode === "design") {
          return inApp && designFlag;
        }
        if (mode === "preview") {
          return inApp && !designFlag;
        }
        if (mode === "slug") {
          return inApp && window.__wf_slug;
        }
        if (mode === "editor") {
          return window.WebflowEditor;
        }
        if (mode === "test") {
          return window.__wf_test;
        }
        if (mode === "frame") {
          return window !== window.top;
        }
      };
      var userAgent = navigator.userAgent.toLowerCase();
      var touch = Webflow2.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch;
      var chrome = Webflow2.env.chrome = /chrome/.test(userAgent) && /Google/.test(navigator.vendor) && parseInt(userAgent.match(/chrome\/(\d+)\./)[1], 10);
      var ios = Webflow2.env.ios = /(ipod|iphone|ipad)/.test(userAgent);
      Webflow2.env.safari = /safari/.test(userAgent) && !chrome && !ios;
      var touchTarget;
      touch && $doc.on("touchstart mousedown", function(evt) {
        touchTarget = evt.target;
      });
      Webflow2.validClick = touch ? function(clickTarget) {
        return clickTarget === touchTarget || $2.contains(clickTarget, touchTarget);
      } : function() {
        return true;
      };
      var resizeEvents = "resize.webflow orientationchange.webflow load.webflow";
      var scrollEvents = "scroll.webflow " + resizeEvents;
      Webflow2.resize = eventProxy($win, resizeEvents);
      Webflow2.scroll = eventProxy($win, scrollEvents);
      Webflow2.redraw = eventProxy();
      function eventProxy(target, types) {
        var handlers = [];
        var proxy = {};
        proxy.up = _.throttle(function(evt) {
          _.each(handlers, function(h) {
            h(evt);
          });
        });
        if (target && types) {
          target.on(types, proxy.up);
        }
        proxy.on = function(handler) {
          if (typeof handler !== "function") {
            return;
          }
          if (_.contains(handlers, handler)) {
            return;
          }
          handlers.push(handler);
        };
        proxy.off = function(handler) {
          if (!arguments.length) {
            handlers = [];
            return;
          }
          handlers = _.filter(handlers, function(h) {
            return h !== handler;
          });
        };
        return proxy;
      }
      Webflow2.location = function(url) {
        window.location = url;
      };
      if (Webflow2.env()) {
        Webflow2.location = function() {
        };
      }
      Webflow2.ready = function() {
        domready = true;
        if (destroyed) {
          restoreModules();
        } else {
          _.each(primary, callReady);
        }
        _.each(secondary, callReady);
        Webflow2.resize.up();
      };
      function callReady(readyFn) {
        isFunction(readyFn) && readyFn();
      }
      function restoreModules() {
        destroyed = false;
        _.each(modules, bindModule);
      }
      var deferLoad;
      Webflow2.load = function(handler) {
        deferLoad.then(handler);
      };
      function bindLoad() {
        if (deferLoad) {
          deferLoad.reject();
          $win.off("load", deferLoad.resolve);
        }
        deferLoad = new $2.Deferred();
        $win.on("load", deferLoad.resolve);
      }
      Webflow2.destroy = function(options) {
        options = options || {};
        destroyed = true;
        $win.triggerHandler("__wf_destroy");
        if (options.domready != null) {
          domready = options.domready;
        }
        _.each(modules, unbindModule);
        Webflow2.resize.off();
        Webflow2.scroll.off();
        Webflow2.redraw.off();
        primary = [];
        secondary = [];
        if (deferLoad.state() === "pending") {
          bindLoad();
        }
      };
      $2(Webflow2.ready);
      bindLoad();
      module.exports = window.Webflow = Webflow2;
    }
  });

  // packages/shared/render/plugins/Animation/modules/RiveSiteModule.ts
  var RiveSiteModule_exports = {};
  __export(RiveSiteModule_exports, {
    createInstance: () => createInstance,
    destroy: () => destroy,
    destroyInstance: () => destroyInstance,
    getInstance: () => getInstance,
    init: () => init,
    ready: () => ready,
    setLoadHandler: () => setLoadHandler
  });
  var cache, callbacks, loadEvent, getRiveLibrary, RiveInstance, getRiveElements, createInstance, destroyInstance, getInstance, setLoadHandler, init, destroy, ready;
  var init_RiveSiteModule = __esm({
    "packages/shared/render/plugins/Animation/modules/RiveSiteModule.ts"() {
      "use strict";
      cache = /* @__PURE__ */ new WeakMap();
      callbacks = /* @__PURE__ */ new WeakMap();
      loadEvent = new Event("w-rive-load");
      getRiveLibrary = (win) => win.Webflow.require("rive").rive;
      RiveInstance = class {
        rive = null;
        container = null;
        riveInstanceSuccessLoaded = null;
        // To avoid memory garbage, the first rive instance is not removed from memory.
        // see more here: https://rive.app/community/doc/rive-parameters/docHI9ASztXP#cleanup
        cleanMemoryGarbage() {
          try {
            if (this.rive && this.riveInstanceSuccessLoaded) {
              this.rive.removeAllRiveEventListeners();
              this.rive.cleanup();
              this.riveInstanceSuccessLoaded = null;
              this.rive = null;
            }
          } catch (e) {
            console.error("Error cleaning up Rive instance:", e);
          }
        }
        destroy() {
          this.cleanMemoryGarbage();
          if (this.container) {
            cache.delete(this.container);
            callbacks.delete(this.container);
          }
        }
        async load({
          container,
          src,
          stateMachine,
          artboard,
          onLoad,
          autoplay = false,
          isTouchScrollEnabled = false,
          automaticallyHandleEvents = false,
          fit,
          alignment
        }) {
          try {
            this.riveInstanceSuccessLoaded = false;
            const win = container.ownerDocument.defaultView;
            const canvas = container.querySelector("canvas");
            const RiveLib = getRiveLibrary(win);
            const layout = new RiveLib.Layout({
              fit: fit ?? RiveLib.Fit.Contain,
              alignment: alignment ?? RiveLib.Alignment.Center
            });
            const riveProps = {
              artboard,
              layout,
              autoplay,
              isTouchScrollEnabled,
              automaticallyHandleEvents,
              src,
              stateMachines: stateMachine,
              onLoad: () => {
                this.riveInstanceSuccessLoaded = true;
                this.rive.resizeDrawingSurfaceToCanvas();
                onLoad?.();
              },
              onLoadError: () => {
                this.riveInstanceSuccessLoaded = false;
              }
            };
            if (this.rive && this.rive?.source === src) {
              this.rive.load(riveProps);
            } else {
              this.cleanMemoryGarbage();
              const rive = new RiveLib.Rive({ ...riveProps, canvas });
              cache.set(container, this);
              this.container = container;
              this.rive = rive;
              container.dispatchEvent(loadEvent);
              if (callbacks.has(container)) {
                callbacks.get(container)?.(rive);
                callbacks.delete(container);
              }
            }
          } catch (e) {
            this.riveInstanceSuccessLoaded = false;
            console.error("Error loading Rive instance:", e);
          }
        }
      };
      getRiveElements = () => Array.from(document.querySelectorAll('[data-animation-type="rive"]'));
      createInstance = async ({
        container,
        onLoad,
        src,
        stateMachine,
        artboard,
        fit,
        alignment,
        autoplay = true,
        isTouchScrollEnabled = false,
        automaticallyHandleEvents = false
      }) => {
        let riveInstance = cache.get(container);
        if (riveInstance == null) {
          riveInstance = new RiveInstance();
        }
        await riveInstance.load({
          container,
          src,
          stateMachine,
          artboard,
          onLoad,
          autoplay,
          isTouchScrollEnabled,
          automaticallyHandleEvents,
          fit,
          alignment
        });
        return riveInstance;
      };
      destroyInstance = (element) => {
        const riveInstance = cache.get(element);
        riveInstance?.destroy();
        cache.delete(element);
      };
      getInstance = (element) => {
        return cache.get(element);
      };
      setLoadHandler = (element, callback) => {
        if (element)
          callbacks.set(element, callback);
      };
      init = () => {
        getRiveElements().forEach((element) => {
          const src = element.getAttribute("data-rive-url");
          const stateMachine = element.getAttribute("data-rive-state-machine") ?? void 0;
          const artboard = element.getAttribute("data-rive-artboard") ?? void 0;
          const fit = element.getAttribute("data-rive-fit") ?? void 0;
          const alignment = element.getAttribute("data-rive-alignment") ?? void 0;
          const autoPlay = element.getAttribute("data-rive-autoplay");
          const isTouchscrollEnabled = element.getAttribute(
            "data-rive-is-touch-scroll-enabled"
          );
          const automaticallyHandleEvents = element.getAttribute(
            "data-rive-automatically-handle-events"
          );
          if (src) {
            createInstance({
              container: element,
              src,
              stateMachine,
              artboard,
              fit,
              alignment,
              autoplay: autoPlay === "true",
              isTouchScrollEnabled: isTouchscrollEnabled === "true",
              automaticallyHandleEvents: automaticallyHandleEvents === "true"
            });
          }
        });
      };
      destroy = () => {
        getRiveElements().forEach(destroyInstance);
      };
      ready = init;
    }
  });

  // node_modules/@rive-app/canvas/rive.js
  var require_rive = __commonJS({
    "node_modules/@rive-app/canvas/rive.js"(exports, module) {
      (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object")
          module.exports = factory();
        else if (typeof define === "function" && define.amd)
          define([], factory);
        else if (typeof exports === "object")
          exports["rive"] = factory();
        else
          root["rive"] = factory();
      })(exports, () => {
        return (
          /******/
          (() => {
            "use strict";
            var __webpack_modules__ = [
              ,
              /* 1 */
              /***/
              (__unused_webpack___webpack_module__, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  "default": () => __WEBPACK_DEFAULT_EXPORT__
                  /* harmony export */
                });
                var Rive = (() => {
                  var _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : void 0;
                  return function(moduleArg = {}) {
                    var m = moduleArg, aa, ea;
                    m.ready = new Promise((a, b) => {
                      aa = a;
                      ea = b;
                    });
                    function fa() {
                      function a(g) {
                        const n = d;
                        c = b = 0;
                        d = /* @__PURE__ */ new Map();
                        n.forEach((p) => {
                          try {
                            p(g);
                          } catch (l) {
                            console.error(l);
                          }
                        });
                        this.ob();
                        e && e.Tb();
                      }
                      let b = 0, c = 0, d = /* @__PURE__ */ new Map(), e = null, f = null;
                      this.requestAnimationFrame = function(g) {
                        b || (b = requestAnimationFrame(a.bind(this)));
                        const n = ++c;
                        d.set(n, g);
                        return n;
                      };
                      this.cancelAnimationFrame = function(g) {
                        d.delete(g);
                        b && 0 == d.size && (cancelAnimationFrame(b), b = 0);
                      };
                      this.Rb = function(g) {
                        f && (document.body.remove(f), f = null);
                        g || (f = document.createElement("div"), f.style.backgroundColor = "black", f.style.position = "fixed", f.style.right = 0, f.style.top = 0, f.style.color = "white", f.style.padding = "4px", f.innerHTML = "RIVE FPS", g = function(n) {
                          f.innerHTML = "RIVE FPS " + n.toFixed(1);
                        }, document.body.appendChild(f));
                        e = new function() {
                          let n = 0, p = 0;
                          this.Tb = function() {
                            var l = performance.now();
                            p ? (++n, l -= p, 1e3 < l && (g(1e3 * n / l), n = p = 0)) : (p = l, n = 0);
                          };
                        }();
                      };
                      this.Ob = function() {
                        f && (document.body.remove(f), f = null);
                        e = null;
                      };
                      this.ob = function() {
                      };
                    }
                    function ha(a) {
                      console.assert(true);
                      const b = /* @__PURE__ */ new Map();
                      let c = -Infinity;
                      this.push = function(d) {
                        d = d + ((1 << a) - 1) >> a;
                        b.has(d) && clearTimeout(b.get(d));
                        b.set(d, setTimeout(function() {
                          b.delete(d);
                          0 == b.length ? c = -Infinity : d == c && (c = Math.max(...b.keys()), console.assert(c < d));
                        }, 1e3));
                        c = Math.max(d, c);
                        return c << a;
                      };
                    }
                    const ia = m.onRuntimeInitialized;
                    m.onRuntimeInitialized = function() {
                      ia && ia();
                      let a = m.decodeAudio;
                      m.decodeAudio = function(d, e) {
                        d = a(d);
                        e(d);
                      };
                      let b = m.decodeFont;
                      m.decodeFont = function(d, e) {
                        d = b(d);
                        e(d);
                      };
                      const c = m.FileAssetLoader;
                      m.ptrToAsset = (d) => {
                        let e = m.ptrToFileAsset(d);
                        return e.isImage ? m.ptrToImageAsset(d) : e.isFont ? m.ptrToFontAsset(d) : e.isAudio ? m.ptrToAudioAsset(d) : e;
                      };
                      m.CustomFileAssetLoader = c.extend("CustomFileAssetLoader", { __construct: function({ loadContents: d }) {
                        this.__parent.__construct.call(this);
                        this.Gb = d;
                      }, loadContents: function(d, e) {
                        d = m.ptrToAsset(d);
                        return this.Gb(d, e);
                      } });
                      m.CDNFileAssetLoader = c.extend("CDNFileAssetLoader", { __construct: function() {
                        this.__parent.__construct.call(this);
                      }, loadContents: function(d) {
                        let e = m.ptrToAsset(d);
                        d = e.cdnUuid;
                        if ("" === d) {
                          return false;
                        }
                        (function(f, g) {
                          var n = new XMLHttpRequest();
                          n.responseType = "arraybuffer";
                          n.onreadystatechange = function() {
                            4 == n.readyState && 200 == n.status && g(n);
                          };
                          n.open("GET", f, true);
                          n.send(null);
                        })(e.cdnBaseUrl + "/" + d, (f) => {
                          e.decode(new Uint8Array(f.response));
                        });
                        return true;
                      } });
                      m.FallbackFileAssetLoader = c.extend("FallbackFileAssetLoader", { __construct: function() {
                        this.__parent.__construct.call(this);
                        this.kb = [];
                      }, addLoader: function(d) {
                        this.kb.push(d);
                      }, loadContents: function(d, e) {
                        for (let f of this.kb) {
                          if (f.loadContents(d, e)) {
                            return true;
                          }
                        }
                        return false;
                      } });
                    };
                    const ja = "createConicGradient createImageData createLinearGradient createPattern createRadialGradient getContextAttributes getImageData getLineDash getTransform isContextLost isPointInPath isPointInStroke measureText".split(" "), ka = new function() {
                      function a() {
                        if (!b) {
                          let A = function(D, w, M) {
                            w = r.createShader(w);
                            r.shaderSource(w, M);
                            r.compileShader(w);
                            M = r.getShaderInfoLog(w);
                            if (0 < (M || "").length) {
                              throw M;
                            }
                            r.attachShader(D, w);
                          };
                          var k = document.createElement("canvas"), t = { alpha: 1, depth: 0, stencil: 0, antialias: 0, premultipliedAlpha: 1, preserveDrawingBuffer: 0, preferLowPowerToHighPerformance: 0, failIfMajorPerformanceCaveat: 0, enableExtensionsByDefault: 1, explicitSwapControl: 1, renderViaOffscreenBackBuffer: 1 };
                          let r;
                          if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                            if (r = k.getContext("webgl", t), c = 1, !r) {
                              return console.log("No WebGL support. Image mesh will not be drawn."), false;
                            }
                          } else {
                            if (r = k.getContext("webgl2", t)) {
                              c = 2;
                            } else {
                              if (r = k.getContext("webgl", t)) {
                                c = 1;
                              } else {
                                return console.log("No WebGL support. Image mesh will not be drawn."), false;
                              }
                            }
                          }
                          r = new Proxy(r, { get(D, w) {
                            if (D.isContextLost()) {
                              if (p || (console.error("Cannot render the mesh because the GL Context was lost. Tried to invoke ", w), p = true), "function" === typeof D[w]) {
                                return function() {
                                };
                              }
                            } else {
                              return "function" === typeof D[w] ? function(...M) {
                                return D[w].apply(D, M);
                              } : D[w];
                            }
                          }, set(D, w, M) {
                            if (D.isContextLost()) {
                              p || (console.error("Cannot render the mesh because the GL Context was lost. Tried to set property " + w), p = true);
                            } else {
                              return D[w] = M, true;
                            }
                          } });
                          d = Math.min(r.getParameter(r.MAX_RENDERBUFFER_SIZE), r.getParameter(r.MAX_TEXTURE_SIZE));
                          k = r.createProgram();
                          A(k, r.VERTEX_SHADER, "attribute vec2 vertex;\n                attribute vec2 uv;\n                uniform vec4 mat;\n                uniform vec2 translate;\n                varying vec2 st;\n                void main() {\n                    st = uv;\n                    gl_Position = vec4(mat2(mat) * vertex + translate, 0, 1);\n                }");
                          A(k, r.FRAGMENT_SHADER, "precision highp float;\n                uniform sampler2D image;\n                varying vec2 st;\n                void main() {\n                    gl_FragColor = texture2D(image, st);\n                }");
                          r.bindAttribLocation(k, 0, "vertex");
                          r.bindAttribLocation(k, 1, "uv");
                          r.linkProgram(k);
                          t = r.getProgramInfoLog(k);
                          if (0 < (t || "").trim().length) {
                            throw t;
                          }
                          e = r.getUniformLocation(k, "mat");
                          f = r.getUniformLocation(k, "translate");
                          r.useProgram(k);
                          r.bindBuffer(r.ARRAY_BUFFER, r.createBuffer());
                          r.enableVertexAttribArray(0);
                          r.enableVertexAttribArray(1);
                          r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, r.createBuffer());
                          r.uniform1i(r.getUniformLocation(k, "image"), 0);
                          r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
                          b = r;
                        }
                        return true;
                      }
                      let b = null, c = 0, d = 0, e = null, f = null, g = 0, n = 0, p = false;
                      a();
                      this.hc = function() {
                        a();
                        return d;
                      };
                      this.Mb = function(k) {
                        b.deleteTexture && b.deleteTexture(k);
                      };
                      this.Lb = function(k) {
                        if (!a()) {
                          return null;
                        }
                        const t = b.createTexture();
                        if (!t) {
                          return null;
                        }
                        b.bindTexture(b.TEXTURE_2D, t);
                        b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, k);
                        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
                        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
                        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR);
                        2 == c ? (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR_MIPMAP_LINEAR), b.generateMipmap(b.TEXTURE_2D)) : b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR);
                        return t;
                      };
                      const l = new ha(8), u = new ha(8), v = new ha(10), x = new ha(10);
                      this.Qb = function(k, t, r, A, D) {
                        if (a()) {
                          var w = l.push(k), M = u.push(t);
                          if (b.canvas) {
                            if (b.canvas.width != w || b.canvas.height != M) {
                              b.canvas.width = w, b.canvas.height = M;
                            }
                            b.viewport(0, M - t, k, t);
                            b.disable(b.SCISSOR_TEST);
                            b.clearColor(0, 0, 0, 0);
                            b.clear(b.COLOR_BUFFER_BIT);
                            b.enable(b.SCISSOR_TEST);
                            r.sort((F, ba) => ba.wb - F.wb);
                            w = v.push(A);
                            g != w && (b.bufferData(b.ARRAY_BUFFER, 8 * w, b.DYNAMIC_DRAW), g = w);
                            w = 0;
                            for (var T of r) {
                              b.bufferSubData(b.ARRAY_BUFFER, w, T.Ta), w += 4 * T.Ta.length;
                            }
                            console.assert(w == 4 * A);
                            for (var ca of r) {
                              b.bufferSubData(b.ARRAY_BUFFER, w, ca.Db), w += 4 * ca.Db.length;
                            }
                            console.assert(w == 8 * A);
                            w = x.push(D);
                            n != w && (b.bufferData(b.ELEMENT_ARRAY_BUFFER, 2 * w, b.DYNAMIC_DRAW), n = w);
                            T = 0;
                            for (var ra of r) {
                              b.bufferSubData(b.ELEMENT_ARRAY_BUFFER, T, ra.indices), T += 2 * ra.indices.length;
                            }
                            console.assert(T == 2 * D);
                            ra = 0;
                            ca = true;
                            w = T = 0;
                            for (const F of r) {
                              F.image.Ka != ra && (b.bindTexture(b.TEXTURE_2D, F.image.Ja || null), ra = F.image.Ka);
                              F.mc ? (b.scissor(F.Ya, M - F.Za - F.jb, F.Ac, F.jb), ca = true) : ca && (b.scissor(0, M - t, k, t), ca = false);
                              r = 2 / k;
                              const ba = -2 / t;
                              b.uniform4f(e, F.ha[0] * r * F.Ba, F.ha[1] * ba * F.Ca, F.ha[2] * r * F.Ba, F.ha[3] * ba * F.Ca);
                              b.uniform2f(f, F.ha[4] * r * F.Ba + r * (F.Ya - F.ic * F.Ba) - 1, F.ha[5] * ba * F.Ca + ba * (F.Za - F.jc * F.Ca) + 1);
                              b.vertexAttribPointer(0, 2, b.FLOAT, false, 0, w);
                              b.vertexAttribPointer(1, 2, b.FLOAT, false, 0, w + 4 * A);
                              b.drawElements(b.TRIANGLES, F.indices.length, b.UNSIGNED_SHORT, T);
                              w += 4 * F.Ta.length;
                              T += 2 * F.indices.length;
                            }
                            console.assert(w == 4 * A);
                            console.assert(T == 2 * D);
                          }
                        }
                      };
                      this.canvas = function() {
                        return a() && b.canvas;
                      };
                    }(), la = m.onRuntimeInitialized;
                    m.onRuntimeInitialized = function() {
                      function a(q) {
                        switch (q) {
                          case l.srcOver:
                            return "source-over";
                          case l.screen:
                            return "screen";
                          case l.overlay:
                            return "overlay";
                          case l.darken:
                            return "darken";
                          case l.lighten:
                            return "lighten";
                          case l.colorDodge:
                            return "color-dodge";
                          case l.colorBurn:
                            return "color-burn";
                          case l.hardLight:
                            return "hard-light";
                          case l.softLight:
                            return "soft-light";
                          case l.difference:
                            return "difference";
                          case l.exclusion:
                            return "exclusion";
                          case l.multiply:
                            return "multiply";
                          case l.hue:
                            return "hue";
                          case l.saturation:
                            return "saturation";
                          case l.color:
                            return "color";
                          case l.luminosity:
                            return "luminosity";
                        }
                      }
                      function b(q) {
                        return "rgba(" + ((16711680 & q) >>> 16) + "," + ((65280 & q) >>> 8) + "," + ((255 & q) >>> 0) + "," + ((4278190080 & q) >>> 24) / 255 + ")";
                      }
                      function c() {
                        0 < M.length && (ka.Qb(w.drawWidth(), w.drawHeight(), M, T, ca), M = [], ca = T = 0, w.reset(512, 512));
                        for (const q of D) {
                          for (const z of q.H) {
                            z();
                          }
                          q.H = [];
                        }
                        D.clear();
                      }
                      la && la();
                      var d = m.RenderPaintStyle;
                      const e = m.RenderPath, f = m.RenderPaint, g = m.Renderer, n = m.StrokeCap, p = m.StrokeJoin, l = m.BlendMode, u = d.fill, v = d.stroke, x = m.FillRule.evenOdd;
                      let k = 1;
                      var t = m.RenderImage.extend("CanvasRenderImage", { __construct: function({ la: q, xa: z } = {}) {
                        this.__parent.__construct.call(this);
                        this.Ka = k;
                        k = k + 1 & 2147483647 || 1;
                        this.la = q;
                        this.xa = z;
                      }, __destruct: function() {
                        this.Ja && (ka.Mb(this.Ja), URL.revokeObjectURL(this.Wa));
                        this.__parent.__destruct.call(this);
                      }, decode: function(q) {
                        var z = this;
                        z.xa && z.xa(z);
                        var G = new Image();
                        z.Wa = URL.createObjectURL(new Blob([q], { type: "image/png" }));
                        G.onload = function() {
                          z.Fb = G;
                          z.Ja = ka.Lb(G);
                          z.size(G.width, G.height);
                          z.la && z.la(z);
                        };
                        G.src = z.Wa;
                      } }), r = e.extend("CanvasRenderPath", { __construct: function() {
                        this.__parent.__construct.call(this);
                        this.T = new Path2D();
                      }, rewind: function() {
                        this.T = new Path2D();
                      }, addPath: function(q, z, G, H, C, I, J) {
                        var K = this.T, X = K.addPath;
                        q = q.T;
                        const Q = new DOMMatrix();
                        Q.a = z;
                        Q.b = G;
                        Q.c = H;
                        Q.d = C;
                        Q.e = I;
                        Q.f = J;
                        X.call(K, q, Q);
                      }, fillRule: function(q) {
                        this.Va = q;
                      }, moveTo: function(q, z) {
                        this.T.moveTo(q, z);
                      }, lineTo: function(q, z) {
                        this.T.lineTo(q, z);
                      }, cubicTo: function(q, z, G, H, C, I) {
                        this.T.bezierCurveTo(q, z, G, H, C, I);
                      }, close: function() {
                        this.T.closePath();
                      } }), A = f.extend("CanvasRenderPaint", { color: function(q) {
                        this.Xa = b(q);
                      }, thickness: function(q) {
                        this.Ib = q;
                      }, join: function(q) {
                        switch (q) {
                          case p.miter:
                            this.Ia = "miter";
                            break;
                          case p.round:
                            this.Ia = "round";
                            break;
                          case p.bevel:
                            this.Ia = "bevel";
                        }
                      }, cap: function(q) {
                        switch (q) {
                          case n.butt:
                            this.Ha = "butt";
                            break;
                          case n.round:
                            this.Ha = "round";
                            break;
                          case n.square:
                            this.Ha = "square";
                        }
                      }, style: function(q) {
                        this.Hb = q;
                      }, blendMode: function(q) {
                        this.Eb = a(q);
                      }, clearGradient: function() {
                        this.ja = null;
                      }, linearGradient: function(q, z, G, H) {
                        this.ja = { yb: q, zb: z, bb: G, cb: H, Ra: [] };
                      }, radialGradient: function(q, z, G, H) {
                        this.ja = { yb: q, zb: z, bb: G, cb: H, Ra: [], ec: true };
                      }, addStop: function(q, z) {
                        this.ja.Ra.push({ color: q, stop: z });
                      }, completeGradient: function() {
                      }, draw: function(q, z, G) {
                        let H = this.Hb;
                        var C = this.Xa, I = this.ja;
                        q.globalCompositeOperation = this.Eb;
                        if (null != I) {
                          C = I.yb;
                          var J = I.zb;
                          const X = I.bb;
                          var K = I.cb;
                          const Q = I.Ra;
                          I.ec ? (I = X - C, K -= J, C = q.createRadialGradient(C, J, 0, C, J, Math.sqrt(I * I + K * K))) : C = q.createLinearGradient(C, J, X, K);
                          for (let da = 0, R = Q.length; da < R; da++) {
                            J = Q[da], C.addColorStop(J.stop, b(J.color));
                          }
                          this.Xa = C;
                          this.ja = null;
                        }
                        switch (H) {
                          case v:
                            q.strokeStyle = C;
                            q.lineWidth = this.Ib;
                            q.lineCap = this.Ha;
                            q.lineJoin = this.Ia;
                            q.stroke(z);
                            break;
                          case u:
                            q.fillStyle = C, q.fill(z, G);
                        }
                      } });
                      const D = /* @__PURE__ */ new Set();
                      let w = null, M = [], T = 0, ca = 0;
                      var ra = m.CanvasRenderer = g.extend("Renderer", { __construct: function(q) {
                        this.__parent.__construct.call(this);
                        this.S = [1, 0, 0, 1, 0, 0];
                        this.C = q.getContext("2d");
                        this.Ua = q;
                        this.H = [];
                      }, save: function() {
                        this.S.push(...this.S.slice(this.S.length - 6));
                        this.H.push(this.C.save.bind(this.C));
                      }, restore: function() {
                        const q = this.S.length - 6;
                        if (6 > q) {
                          throw "restore() called without matching save().";
                        }
                        this.S.splice(q);
                        this.H.push(this.C.restore.bind(this.C));
                      }, transform: function(q, z, G, H, C, I) {
                        const J = this.S, K = J.length - 6;
                        J.splice(K, 6, J[K] * q + J[K + 2] * z, J[K + 1] * q + J[K + 3] * z, J[K] * G + J[K + 2] * H, J[K + 1] * G + J[K + 3] * H, J[K] * C + J[K + 2] * I + J[K + 4], J[K + 1] * C + J[K + 3] * I + J[K + 5]);
                        this.H.push(this.C.transform.bind(this.C, q, z, G, H, C, I));
                      }, rotate: function(q) {
                        const z = Math.sin(q);
                        q = Math.cos(q);
                        this.transform(q, z, -z, q, 0, 0);
                      }, _drawPath: function(q, z) {
                        this.H.push(z.draw.bind(z, this.C, q.T, q.Va === x ? "evenodd" : "nonzero"));
                      }, _drawRiveImage: function(q, z, G) {
                        var H = q.Fb;
                        if (H) {
                          var C = this.C, I = a(z);
                          this.H.push(function() {
                            C.globalCompositeOperation = I;
                            C.globalAlpha = G;
                            C.drawImage(H, 0, 0);
                            C.globalAlpha = 1;
                          });
                        }
                      }, _getMatrix: function(q) {
                        const z = this.S, G = z.length - 6;
                        for (let H = 0; 6 > H; ++H) {
                          q[H] = z[G + H];
                        }
                      }, _drawImageMesh: function(q, z, G, H, C, I, J, K, X, Q) {
                        var da = this.C.canvas.width, R = this.C.canvas.height;
                        const Yb = X - J, Zb = Q - K;
                        J = Math.max(J, 0);
                        K = Math.max(K, 0);
                        X = Math.min(X, da);
                        Q = Math.min(Q, R);
                        const Ga = X - J, Ha = Q - K;
                        console.assert(Ga <= Math.min(Yb, da));
                        console.assert(Ha <= Math.min(Zb, R));
                        if (!(0 >= Ga || 0 >= Ha)) {
                          X = Ga < Yb || Ha < Zb;
                          da = Q = 1;
                          var sa = Math.ceil(Ga * Q), ta = Math.ceil(Ha * da);
                          R = ka.hc();
                          sa > R && (Q *= R / sa, sa = R);
                          ta > R && (da *= R / ta, ta = R);
                          w || (w = new m.DynamicRectanizer(R), w.reset(512, 512));
                          R = w.addRect(sa, ta);
                          0 > R && (c(), D.add(this), R = w.addRect(sa, ta), console.assert(0 <= R));
                          var $b = R & 65535, ac = R >> 16;
                          M.push({ ha: this.S.slice(this.S.length - 6), image: q, Ya: $b, Za: ac, ic: J, jc: K, Ac: sa, jb: ta, Ba: Q, Ca: da, Ta: new Float32Array(H), Db: new Float32Array(C), indices: new Uint16Array(I), mc: X, wb: q.Ka << 1 | (X ? 1 : 0) });
                          T += H.length;
                          ca += I.length;
                          var za = this.C, qd = a(z);
                          this.H.push(function() {
                            za.save();
                            za.resetTransform();
                            za.globalCompositeOperation = qd;
                            za.globalAlpha = G;
                            const bc = ka.canvas();
                            bc && za.drawImage(bc, $b, ac, sa, ta, J, K, Ga, Ha);
                            za.restore();
                          });
                        }
                      }, _clipPath: function(q) {
                        this.H.push(this.C.clip.bind(this.C, q.T, q.Va === x ? "evenodd" : "nonzero"));
                      }, clear: function() {
                        D.add(this);
                        this.H.push(this.C.clearRect.bind(this.C, 0, 0, this.Ua.width, this.Ua.height));
                      }, flush: function() {
                      }, translate: function(q, z) {
                        this.transform(1, 0, 0, 1, q, z);
                      } });
                      m.makeRenderer = function(q) {
                        const z = new ra(q), G = z.C;
                        return new Proxy(z, { get(H, C) {
                          if ("function" === typeof H[C]) {
                            return function(...I) {
                              return H[C].apply(H, I);
                            };
                          }
                          if ("function" === typeof G[C]) {
                            if (-1 < ja.indexOf(C)) {
                              throw Error("RiveException: Method call to '" + C + "()' is not allowed, as the renderer cannot immediately pass through the return                 values of any canvas 2d context methods.");
                            }
                            return function(...I) {
                              z.H.push(G[C].bind(G, ...I));
                            };
                          }
                          return H[C];
                        }, set(H, C, I) {
                          if (C in G) {
                            return z.H.push(() => {
                              G[C] = I;
                            }), true;
                          }
                        } });
                      };
                      m.decodeImage = function(q, z) {
                        new t({ la: z }).decode(q);
                      };
                      m.renderFactory = { makeRenderPaint: function() {
                        return new A();
                      }, makeRenderPath: function() {
                        return new r();
                      }, makeRenderImage: function() {
                        let q = ba;
                        return new t({ xa: () => {
                          q.total++;
                        }, la: () => {
                          q.loaded++;
                          if (q.loaded === q.total) {
                            const z = q.ready;
                            z && (z(), q.ready = null);
                          }
                        } });
                      } };
                      let F = m.load, ba = null;
                      m.load = function(q, z, G = true) {
                        const H = new m.FallbackFileAssetLoader();
                        void 0 !== z && H.addLoader(z);
                        G && (z = new m.CDNFileAssetLoader(), H.addLoader(z));
                        return new Promise(function(C) {
                          let I = null;
                          ba = { total: 0, loaded: 0, ready: function() {
                            C(I);
                          } };
                          I = F(q, H);
                          0 == ba.total && C(I);
                        });
                      };
                      d = new fa();
                      m.requestAnimationFrame = d.requestAnimationFrame.bind(d);
                      m.cancelAnimationFrame = d.cancelAnimationFrame.bind(d);
                      m.enableFPSCounter = d.Rb.bind(d);
                      m.disableFPSCounter = d.Ob;
                      d.ob = c;
                      m.resolveAnimationFrame = c;
                      m.cleanup = function() {
                        w && w.delete();
                      };
                    };
                    var ma = Object.assign({}, m), na = "./this.program", oa = "object" == typeof window, pa = "function" == typeof importScripts, qa = "", ua2, va;
                    if (oa || pa) {
                      pa ? qa = self.location.href : "undefined" != typeof document && document.currentScript && (qa = document.currentScript.src), _scriptDir && (qa = _scriptDir), 0 !== qa.indexOf("blob:") ? qa = qa.substr(0, qa.replace(/[?#].*/, "").lastIndexOf("/") + 1) : qa = "", pa && (va = (a) => {
                        var b = new XMLHttpRequest();
                        b.open("GET", a, false);
                        b.responseType = "arraybuffer";
                        b.send(null);
                        return new Uint8Array(b.response);
                      }), ua2 = (a, b, c) => {
                        var d = new XMLHttpRequest();
                        d.open("GET", a, true);
                        d.responseType = "arraybuffer";
                        d.onload = () => {
                          200 == d.status || 0 == d.status && d.response ? b(d.response) : c();
                        };
                        d.onerror = c;
                        d.send(null);
                      };
                    }
                    var wa = m.print || console.log.bind(console), xa = m.printErr || console.error.bind(console);
                    Object.assign(m, ma);
                    ma = null;
                    m.thisProgram && (na = m.thisProgram);
                    var ya;
                    m.wasmBinary && (ya = m.wasmBinary);
                    var noExitRuntime = m.noExitRuntime || true;
                    "object" != typeof WebAssembly && Aa("no native wasm support detected");
                    var Ba, y, Ca = false, B, E, Da, Ea, L, N, Fa, Ia;
                    function Ja() {
                      var a = Ba.buffer;
                      m.HEAP8 = B = new Int8Array(a);
                      m.HEAP16 = Da = new Int16Array(a);
                      m.HEAP32 = L = new Int32Array(a);
                      m.HEAPU8 = E = new Uint8Array(a);
                      m.HEAPU16 = Ea = new Uint16Array(a);
                      m.HEAPU32 = N = new Uint32Array(a);
                      m.HEAPF32 = Fa = new Float32Array(a);
                      m.HEAPF64 = Ia = new Float64Array(a);
                    }
                    var Ka, La = [], Ma = [], Na = [];
                    function Oa() {
                      var a = m.preRun.shift();
                      La.unshift(a);
                    }
                    var Pa = 0, Qa = null, Ra = null;
                    function Aa(a) {
                      if (m.onAbort) {
                        m.onAbort(a);
                      }
                      a = "Aborted(" + a + ")";
                      xa(a);
                      Ca = true;
                      a = new WebAssembly.RuntimeError(a + ". Build with -sASSERTIONS for more info.");
                      ea(a);
                      throw a;
                    }
                    function Sa(a) {
                      return a.startsWith("data:application/octet-stream;base64,");
                    }
                    var Ta;
                    Ta = "canvas_advanced.wasm";
                    if (!Sa(Ta)) {
                      var Ua = Ta;
                      Ta = m.locateFile ? m.locateFile(Ua, qa) : qa + Ua;
                    }
                    function Va(a) {
                      if (a == Ta && ya) {
                        return new Uint8Array(ya);
                      }
                      if (va) {
                        return va(a);
                      }
                      throw "both async and sync fetching of the wasm failed";
                    }
                    function Wa(a) {
                      if (!ya && (oa || pa)) {
                        if ("function" == typeof fetch && !a.startsWith("file://")) {
                          return fetch(a, { credentials: "same-origin" }).then((b) => {
                            if (!b.ok) {
                              throw "failed to load wasm binary file at '" + a + "'";
                            }
                            return b.arrayBuffer();
                          }).catch(() => Va(a));
                        }
                        if (ua2) {
                          return new Promise((b, c) => {
                            ua2(a, (d) => b(new Uint8Array(d)), c);
                          });
                        }
                      }
                      return Promise.resolve().then(() => Va(a));
                    }
                    function Xa(a, b, c) {
                      return Wa(a).then((d) => WebAssembly.instantiate(d, b)).then((d) => d).then(c, (d) => {
                        xa("failed to asynchronously prepare wasm: " + d);
                        Aa(d);
                      });
                    }
                    function Ya(a, b) {
                      var c = Ta;
                      return ya || "function" != typeof WebAssembly.instantiateStreaming || Sa(c) || c.startsWith("file://") || "function" != typeof fetch ? Xa(c, a, b) : fetch(c, { credentials: "same-origin" }).then((d) => WebAssembly.instantiateStreaming(d, a).then(b, function(e) {
                        xa("wasm streaming compile failed: " + e);
                        xa("falling back to ArrayBuffer instantiation");
                        return Xa(c, a, b);
                      }));
                    }
                    var Za, $a, db = { 437756: (a, b, c, d, e) => {
                      if ("undefined" === typeof window || void 0 === (window.AudioContext || window.webkitAudioContext)) {
                        return 0;
                      }
                      if ("undefined" === typeof window.h) {
                        window.h = { Aa: 0 };
                        window.h.I = {};
                        window.h.I.ya = a;
                        window.h.I.capture = b;
                        window.h.I.La = c;
                        window.h.ga = {};
                        window.h.ga.stopped = d;
                        window.h.ga.xb = e;
                        let f = window.h;
                        f.D = [];
                        f.yc = function(g) {
                          for (var n = 0; n < f.D.length; ++n) {
                            if (null == f.D[n]) {
                              return f.D[n] = g, n;
                            }
                          }
                          f.D.push(g);
                          return f.D.length - 1;
                        };
                        f.Cb = function(g) {
                          for (f.D[g] = null; 0 < f.D.length; ) {
                            if (null == f.D[f.D.length - 1]) {
                              f.D.pop();
                            } else {
                              break;
                            }
                          }
                        };
                        f.Sc = function(g) {
                          for (var n = 0; n < f.D.length; ++n) {
                            if (f.D[n] == g) {
                              return f.Cb(n);
                            }
                          }
                        };
                        f.ra = function(g) {
                          return f.D[g];
                        };
                        f.Bb = ["touchend", "click"];
                        f.unlock = function() {
                          for (var g = 0; g < f.D.length; ++g) {
                            var n = f.D[g];
                            null != n && null != n.J && n.state === f.ga.xb && n.J.resume().then(() => {
                              ab(n.pb);
                            }, (p) => {
                              console.error("Failed to resume audiocontext", p);
                            });
                          }
                          f.Bb.map(function(p) {
                            document.removeEventListener(p, f.unlock, true);
                          });
                        };
                        f.Bb.map(function(g) {
                          document.addEventListener(g, f.unlock, true);
                        });
                      }
                      window.h.Aa += 1;
                      return 1;
                    }, 439934: () => {
                      "undefined" !== typeof window.h && (--window.h.Aa, 0 === window.h.Aa && delete window.h);
                    }, 440098: () => void 0 !== navigator.mediaDevices && void 0 !== navigator.mediaDevices.getUserMedia, 440202: () => {
                      try {
                        var a = new (window.AudioContext || window.webkitAudioContext)(), b = a.sampleRate;
                        a.close();
                        return b;
                      } catch (c) {
                        return 0;
                      }
                    }, 440373: (a, b, c, d, e, f) => {
                      if ("undefined" === typeof window.h) {
                        return -1;
                      }
                      var g = {}, n = {};
                      a == window.h.I.ya && 0 != c && (n.sampleRate = c);
                      g.J = new (window.AudioContext || window.webkitAudioContext)(n);
                      g.J.suspend();
                      g.state = window.h.ga.stopped;
                      c = 0;
                      a != window.h.I.ya && (c = b);
                      g.Z = g.J.createScriptProcessor(d, c, b);
                      g.Z.onaudioprocess = function(p) {
                        if (null == g.sa || 0 == g.sa.length) {
                          g.sa = new Float32Array(Fa.buffer, e, d * b);
                        }
                        if (a == window.h.I.capture || a == window.h.I.La) {
                          for (var l = 0; l < b; l += 1) {
                            for (var u = p.inputBuffer.getChannelData(l), v = g.sa, x = 0; x < d; x += 1) {
                              v[x * b + l] = u[x];
                            }
                          }
                          bb(f, d, e);
                        }
                        if (a == window.h.I.ya || a == window.h.I.La) {
                          for (cb(f, d, e), l = 0; l < p.outputBuffer.numberOfChannels; ++l) {
                            for (u = p.outputBuffer.getChannelData(l), v = g.sa, x = 0; x < d; x += 1) {
                              u[x] = v[x * b + l];
                            }
                          }
                        } else {
                          for (l = 0; l < p.outputBuffer.numberOfChannels; ++l) {
                            p.outputBuffer.getChannelData(l).fill(0);
                          }
                        }
                      };
                      a != window.h.I.capture && a != window.h.I.La || navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(function(p) {
                        g.Da = g.J.createMediaStreamSource(p);
                        g.Da.connect(g.Z);
                        g.Z.connect(g.J.destination);
                      }).catch(function(p) {
                        console.log("Failed to get user media: " + p);
                      });
                      a == window.h.I.ya && g.Z.connect(g.J.destination);
                      g.pb = f;
                      return window.h.yc(g);
                    }, 443250: (a) => window.h.ra(a).J.sampleRate, 443323: (a) => {
                      a = window.h.ra(a);
                      void 0 !== a.Z && (a.Z.onaudioprocess = function() {
                      }, a.Z.disconnect(), a.Z = void 0);
                      void 0 !== a.Da && (a.Da.disconnect(), a.Da = void 0);
                      a.J.close();
                      a.J = void 0;
                      a.pb = void 0;
                    }, 443723: (a) => {
                      window.h.Cb(a);
                    }, 443773: (a) => {
                      a = window.h.ra(a);
                      a.J.resume();
                      a.state = window.h.ga.xb;
                    }, 443912: (a) => {
                      a = window.h.ra(a);
                      a.J.suspend();
                      a.state = window.h.ga.stopped;
                    } }, eb = (a) => {
                      for (; 0 < a.length; ) {
                        a.shift()(m);
                      }
                    }, fb = (a, b) => {
                      for (var c = 0, d = a.length - 1; 0 <= d; d--) {
                        var e = a[d];
                        "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--);
                      }
                      if (b) {
                        for (; c; c--) {
                          a.unshift("..");
                        }
                      }
                      return a;
                    }, gb = (a) => {
                      var b = "/" === a.charAt(0), c = "/" === a.substr(-1);
                      (a = fb(a.split("/").filter((d) => !!d), !b).join("/")) || b || (a = ".");
                      a && c && (a += "/");
                      return (b ? "/" : "") + a;
                    }, hb = (a) => {
                      var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
                      a = b[0];
                      b = b[1];
                      if (!a && !b) {
                        return ".";
                      }
                      b && (b = b.substr(0, b.length - 1));
                      return a + b;
                    }, ib = (a) => {
                      if ("/" === a) {
                        return "/";
                      }
                      a = gb(a);
                      a = a.replace(/\/$/, "");
                      var b = a.lastIndexOf("/");
                      return -1 === b ? a : a.substr(b + 1);
                    }, jb = () => {
                      if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
                        return (a) => crypto.getRandomValues(a);
                      }
                      Aa("initRandomDevice");
                    }, kb = (a) => (kb = jb())(a);
                    function lb() {
                      for (var a = "", b = false, c = arguments.length - 1; -1 <= c && !b; c--) {
                        b = 0 <= c ? arguments[c] : "/";
                        if ("string" != typeof b) {
                          throw new TypeError("Arguments to path.resolve must be strings");
                        }
                        if (!b) {
                          return "";
                        }
                        a = b + "/" + a;
                        b = "/" === b.charAt(0);
                      }
                      a = fb(a.split("/").filter((d) => !!d), !b).join("/");
                      return (b ? "/" : "") + a || ".";
                    }
                    var mb = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0, nb = (a, b, c) => {
                      var d = b + c;
                      for (c = b; a[c] && !(c >= d); ) {
                        ++c;
                      }
                      if (16 < c - b && a.buffer && mb) {
                        return mb.decode(a.subarray(b, c));
                      }
                      for (d = ""; b < c; ) {
                        var e = a[b++];
                        if (e & 128) {
                          var f = a[b++] & 63;
                          if (192 == (e & 224)) {
                            d += String.fromCharCode((e & 31) << 6 | f);
                          } else {
                            var g = a[b++] & 63;
                            e = 224 == (e & 240) ? (e & 15) << 12 | f << 6 | g : (e & 7) << 18 | f << 12 | g << 6 | a[b++] & 63;
                            65536 > e ? d += String.fromCharCode(e) : (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023));
                          }
                        } else {
                          d += String.fromCharCode(e);
                        }
                      }
                      return d;
                    }, ob = [], pb = (a) => {
                      for (var b = 0, c = 0; c < a.length; ++c) {
                        var d = a.charCodeAt(c);
                        127 >= d ? b++ : 2047 >= d ? b += 2 : 55296 <= d && 57343 >= d ? (b += 4, ++c) : b += 3;
                      }
                      return b;
                    }, qb = (a, b, c, d) => {
                      if (!(0 < d)) {
                        return 0;
                      }
                      var e = c;
                      d = c + d - 1;
                      for (var f = 0; f < a.length; ++f) {
                        var g = a.charCodeAt(f);
                        if (55296 <= g && 57343 >= g) {
                          var n = a.charCodeAt(++f);
                          g = 65536 + ((g & 1023) << 10) | n & 1023;
                        }
                        if (127 >= g) {
                          if (c >= d) {
                            break;
                          }
                          b[c++] = g;
                        } else {
                          if (2047 >= g) {
                            if (c + 1 >= d) {
                              break;
                            }
                            b[c++] = 192 | g >> 6;
                          } else {
                            if (65535 >= g) {
                              if (c + 2 >= d) {
                                break;
                              }
                              b[c++] = 224 | g >> 12;
                            } else {
                              if (c + 3 >= d) {
                                break;
                              }
                              b[c++] = 240 | g >> 18;
                              b[c++] = 128 | g >> 12 & 63;
                            }
                            b[c++] = 128 | g >> 6 & 63;
                          }
                          b[c++] = 128 | g & 63;
                        }
                      }
                      b[c] = 0;
                      return c - e;
                    };
                    function rb(a, b) {
                      var c = Array(pb(a) + 1);
                      a = qb(a, c, 0, c.length);
                      b && (c.length = a);
                      return c;
                    }
                    var sb = [];
                    function tb(a, b) {
                      sb[a] = { input: [], F: [], V: b };
                      ub(a, vb);
                    }
                    var vb = { open: function(a) {
                      var b = sb[a.node.za];
                      if (!b) {
                        throw new O(43);
                      }
                      a.s = b;
                      a.seekable = false;
                    }, close: function(a) {
                      a.s.V.qa(a.s);
                    }, qa: function(a) {
                      a.s.V.qa(a.s);
                    }, read: function(a, b, c, d) {
                      if (!a.s || !a.s.V.ib) {
                        throw new O(60);
                      }
                      for (var e = 0, f = 0; f < d; f++) {
                        try {
                          var g = a.s.V.ib(a.s);
                        } catch (n) {
                          throw new O(29);
                        }
                        if (void 0 === g && 0 === e) {
                          throw new O(6);
                        }
                        if (null === g || void 0 === g) {
                          break;
                        }
                        e++;
                        b[c + f] = g;
                      }
                      e && (a.node.timestamp = Date.now());
                      return e;
                    }, write: function(a, b, c, d) {
                      if (!a.s || !a.s.V.Oa) {
                        throw new O(60);
                      }
                      try {
                        for (var e = 0; e < d; e++) {
                          a.s.V.Oa(a.s, b[c + e]);
                        }
                      } catch (f) {
                        throw new O(29);
                      }
                      d && (a.node.timestamp = Date.now());
                      return e;
                    } }, wb = { ib: function() {
                      a: {
                        if (!ob.length) {
                          var a = null;
                          "undefined" != typeof window && "function" == typeof window.prompt ? (a = window.prompt("Input: "), null !== a && (a += "\n")) : "function" == typeof readline && (a = readline(), null !== a && (a += "\n"));
                          if (!a) {
                            a = null;
                            break a;
                          }
                          ob = rb(a, true);
                        }
                        a = ob.shift();
                      }
                      return a;
                    }, Oa: function(a, b) {
                      null === b || 10 === b ? (wa(nb(a.F, 0)), a.F = []) : 0 != b && a.F.push(b);
                    }, qa: function(a) {
                      a.F && 0 < a.F.length && (wa(nb(a.F, 0)), a.F = []);
                    }, bc: function() {
                      return { Fc: 25856, Hc: 5, Ec: 191, Gc: 35387, Dc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] };
                    }, cc: function() {
                      return 0;
                    }, dc: function() {
                      return [24, 80];
                    } }, xb = { Oa: function(a, b) {
                      null === b || 10 === b ? (xa(nb(a.F, 0)), a.F = []) : 0 != b && a.F.push(b);
                    }, qa: function(a) {
                      a.F && 0 < a.F.length && (xa(nb(a.F, 0)), a.F = []);
                    } };
                    function yb(a, b) {
                      var c = a.j ? a.j.length : 0;
                      c >= b || (b = Math.max(b, c * (1048576 > c ? 2 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.j, a.j = new Uint8Array(b), 0 < a.v && a.j.set(c.subarray(0, a.v), 0));
                    }
                    var P = { O: null, U() {
                      return P.createNode(null, "/", 16895, 0);
                    }, createNode(a, b, c, d) {
                      if (24576 === (c & 61440) || 4096 === (c & 61440)) {
                        throw new O(63);
                      }
                      P.O || (P.O = { dir: { node: { Y: P.l.Y, P: P.l.P, ka: P.l.ka, va: P.l.va, ub: P.l.ub, Ab: P.l.Ab, vb: P.l.vb, sb: P.l.sb, Ea: P.l.Ea }, stream: { ba: P.m.ba } }, file: { node: { Y: P.l.Y, P: P.l.P }, stream: { ba: P.m.ba, read: P.m.read, write: P.m.write, pa: P.m.pa, lb: P.m.lb, nb: P.m.nb } }, link: { node: { Y: P.l.Y, P: P.l.P, ma: P.l.ma }, stream: {} }, $a: { node: { Y: P.l.Y, P: P.l.P }, stream: zb } });
                      c = Ab(a, b, c, d);
                      16384 === (c.mode & 61440) ? (c.l = P.O.dir.node, c.m = P.O.dir.stream, c.j = {}) : 32768 === (c.mode & 61440) ? (c.l = P.O.file.node, c.m = P.O.file.stream, c.v = 0, c.j = null) : 40960 === (c.mode & 61440) ? (c.l = P.O.link.node, c.m = P.O.link.stream) : 8192 === (c.mode & 61440) && (c.l = P.O.$a.node, c.m = P.O.$a.stream);
                      c.timestamp = Date.now();
                      a && (a.j[b] = c, a.timestamp = c.timestamp);
                      return c;
                    }, Kc(a) {
                      return a.j ? a.j.subarray ? a.j.subarray(0, a.v) : new Uint8Array(a.j) : new Uint8Array(0);
                    }, l: { Y(a) {
                      var b = {};
                      b.Jc = 8192 === (a.mode & 61440) ? a.id : 1;
                      b.Mc = a.id;
                      b.mode = a.mode;
                      b.Oc = 1;
                      b.uid = 0;
                      b.Lc = 0;
                      b.za = a.za;
                      16384 === (a.mode & 61440) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.v : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
                      b.Bc = new Date(a.timestamp);
                      b.Nc = new Date(a.timestamp);
                      b.Ic = new Date(a.timestamp);
                      b.Jb = 4096;
                      b.Cc = Math.ceil(b.size / b.Jb);
                      return b;
                    }, P(a, b) {
                      void 0 !== b.mode && (a.mode = b.mode);
                      void 0 !== b.timestamp && (a.timestamp = b.timestamp);
                      if (void 0 !== b.size && (b = b.size, a.v != b)) {
                        if (0 == b) {
                          a.j = null, a.v = 0;
                        } else {
                          var c = a.j;
                          a.j = new Uint8Array(b);
                          c && a.j.set(c.subarray(0, Math.min(b, a.v)));
                          a.v = b;
                        }
                      }
                    }, ka() {
                      throw Bb[44];
                    }, va(a, b, c, d) {
                      return P.createNode(a, b, c, d);
                    }, ub(a, b, c) {
                      if (16384 === (a.mode & 61440)) {
                        try {
                          var d = Cb(b, c);
                        } catch (f) {
                        }
                        if (d) {
                          for (var e in d.j) {
                            throw new O(55);
                          }
                        }
                      }
                      delete a.parent.j[a.name];
                      a.parent.timestamp = Date.now();
                      a.name = c;
                      b.j[c] = a;
                      b.timestamp = a.parent.timestamp;
                      a.parent = b;
                    }, Ab(a, b) {
                      delete a.j[b];
                      a.timestamp = Date.now();
                    }, vb(a, b) {
                      var c = Cb(a, b), d;
                      for (d in c.j) {
                        throw new O(55);
                      }
                      delete a.j[b];
                      a.timestamp = Date.now();
                    }, sb(a) {
                      var b = [".", ".."], c;
                      for (c in a.j) {
                        a.j.hasOwnProperty(c) && b.push(c);
                      }
                      return b;
                    }, Ea(a, b, c) {
                      a = P.createNode(a, b, 41471, 0);
                      a.link = c;
                      return a;
                    }, ma(a) {
                      if (40960 !== (a.mode & 61440)) {
                        throw new O(28);
                      }
                      return a.link;
                    } }, m: { read(a, b, c, d, e) {
                      var f = a.node.j;
                      if (e >= a.node.v) {
                        return 0;
                      }
                      a = Math.min(a.node.v - e, d);
                      if (8 < a && f.subarray) {
                        b.set(f.subarray(e, e + a), c);
                      } else {
                        for (d = 0; d < a; d++) {
                          b[c + d] = f[e + d];
                        }
                      }
                      return a;
                    }, write(a, b, c, d, e, f) {
                      b.buffer === B.buffer && (f = false);
                      if (!d) {
                        return 0;
                      }
                      a = a.node;
                      a.timestamp = Date.now();
                      if (b.subarray && (!a.j || a.j.subarray)) {
                        if (f) {
                          return a.j = b.subarray(c, c + d), a.v = d;
                        }
                        if (0 === a.v && 0 === e) {
                          return a.j = b.slice(c, c + d), a.v = d;
                        }
                        if (e + d <= a.v) {
                          return a.j.set(b.subarray(c, c + d), e), d;
                        }
                      }
                      yb(a, e + d);
                      if (a.j.subarray && b.subarray) {
                        a.j.set(b.subarray(c, c + d), e);
                      } else {
                        for (f = 0; f < d; f++) {
                          a.j[e + f] = b[c + f];
                        }
                      }
                      a.v = Math.max(a.v, e + d);
                      return d;
                    }, ba(a, b, c) {
                      1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.v);
                      if (0 > b) {
                        throw new O(28);
                      }
                      return b;
                    }, pa(a, b, c) {
                      yb(a.node, b + c);
                      a.node.v = Math.max(a.node.v, b + c);
                    }, lb(a, b, c, d, e) {
                      if (32768 !== (a.node.mode & 61440)) {
                        throw new O(43);
                      }
                      a = a.node.j;
                      if (e & 2 || a.buffer !== B.buffer) {
                        if (0 < c || c + b < a.length) {
                          a.subarray ? a = a.subarray(c, c + b) : a = Array.prototype.slice.call(a, c, c + b);
                        }
                        c = true;
                        Aa();
                        b = void 0;
                        if (!b) {
                          throw new O(48);
                        }
                        B.set(a, b);
                      } else {
                        c = false, b = a.byteOffset;
                      }
                      return { o: b, M: c };
                    }, nb(a, b, c, d) {
                      P.m.write(a, b, 0, d, c, false);
                      return 0;
                    } } };
                    function Db(a, b) {
                      var c = 0;
                      a && (c |= 365);
                      b && (c |= 146);
                      return c;
                    }
                    var Eb = null, Fb = {}, Gb = [], Hb = 1, Ib = null, Jb = true, O = null, Bb = {}, Lb = (a, b = {}) => {
                      a = lb(a);
                      if (!a) {
                        return { path: "", node: null };
                      }
                      b = Object.assign({ gb: true, Qa: 0 }, b);
                      if (8 < b.Qa) {
                        throw new O(32);
                      }
                      a = a.split("/").filter((g) => !!g);
                      for (var c = Eb, d = "/", e = 0; e < a.length; e++) {
                        var f = e === a.length - 1;
                        if (f && b.parent) {
                          break;
                        }
                        c = Cb(c, a[e]);
                        d = gb(d + "/" + a[e]);
                        c.wa && (!f || f && b.gb) && (c = c.wa.root);
                        if (!f || b.fb) {
                          for (f = 0; 40960 === (c.mode & 61440); ) {
                            if (c = Kb(d), d = lb(hb(d), c), c = Lb(d, { Qa: b.Qa + 1 }).node, 40 < f++) {
                              throw new O(32);
                            }
                          }
                        }
                      }
                      return { path: d, node: c };
                    }, Mb = (a) => {
                      for (var b; ; ) {
                        if (a === a.parent) {
                          return a = a.U.mb, b ? "/" !== a[a.length - 1] ? `${a}/${b}` : a + b : a;
                        }
                        b = b ? `${a.name}/${b}` : a.name;
                        a = a.parent;
                      }
                    }, Nb = (a, b) => {
                      for (var c = 0, d = 0; d < b.length; d++) {
                        c = (c << 5) - c + b.charCodeAt(d) | 0;
                      }
                      return (a + c >>> 0) % Ib.length;
                    }, Cb = (a, b) => {
                      var c;
                      if (c = (c = Ob(a, "x")) ? c : a.l.ka ? 0 : 2) {
                        throw new O(c, a);
                      }
                      for (c = Ib[Nb(a.id, b)]; c; c = c.lc) {
                        var d = c.name;
                        if (c.parent.id === a.id && d === b) {
                          return c;
                        }
                      }
                      return a.l.ka(a, b);
                    }, Ab = (a, b, c, d) => {
                      a = new Pb(a, b, c, d);
                      b = Nb(a.parent.id, a.name);
                      a.lc = Ib[b];
                      return Ib[b] = a;
                    }, Qb = (a) => {
                      var b = ["r", "w", "rw"][a & 3];
                      a & 512 && (b += "w");
                      return b;
                    }, Ob = (a, b) => {
                      if (Jb) {
                        return 0;
                      }
                      if (!b.includes("r") || a.mode & 292) {
                        if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73)) {
                          return 2;
                        }
                      } else {
                        return 2;
                      }
                      return 0;
                    }, Rb = (a, b) => {
                      try {
                        return Cb(a, b), 20;
                      } catch (c) {
                      }
                      return Ob(a, "wx");
                    }, Sb = () => {
                      for (var a = 0; 4096 >= a; a++) {
                        if (!Gb[a]) {
                          return a;
                        }
                      }
                      throw new O(33);
                    }, Tb = (a) => {
                      a = Gb[a];
                      if (!a) {
                        throw new O(8);
                      }
                      return a;
                    }, Vb = (a, b = -1) => {
                      Ub || (Ub = function() {
                        this.h = {};
                      }, Ub.prototype = {}, Object.defineProperties(Ub.prototype, { object: { get() {
                        return this.node;
                      }, set(c) {
                        this.node = c;
                      } }, flags: { get() {
                        return this.h.flags;
                      }, set(c) {
                        this.h.flags = c;
                      } }, position: { get() {
                        return this.h.position;
                      }, set(c) {
                        this.h.position = c;
                      } } }));
                      a = Object.assign(new Ub(), a);
                      -1 == b && (b = Sb());
                      a.X = b;
                      return Gb[b] = a;
                    }, zb = { open: (a) => {
                      a.m = Fb[a.node.za].m;
                      a.m.open && a.m.open(a);
                    }, ba: () => {
                      throw new O(70);
                    } }, ub = (a, b) => {
                      Fb[a] = { m: b };
                    }, Wb = (a, b) => {
                      var c = "/" === b, d = !b;
                      if (c && Eb) {
                        throw new O(10);
                      }
                      if (!c && !d) {
                        var e = Lb(b, { gb: false });
                        b = e.path;
                        e = e.node;
                        if (e.wa) {
                          throw new O(10);
                        }
                        if (16384 !== (e.mode & 61440)) {
                          throw new O(54);
                        }
                      }
                      b = { type: a, Qc: {}, mb: b, kc: [] };
                      a = a.U(b);
                      a.U = b;
                      b.root = a;
                      c ? Eb = a : e && (e.wa = b, e.U && e.U.kc.push(b));
                    }, S = (a, b, c) => {
                      var d = Lb(a, { parent: true }).node;
                      a = ib(a);
                      if (!a || "." === a || ".." === a) {
                        throw new O(28);
                      }
                      var e = Rb(d, a);
                      if (e) {
                        throw new O(e);
                      }
                      if (!d.l.va) {
                        throw new O(63);
                      }
                      return d.l.va(d, a, b, c);
                    }, Xb = (a, b, c) => {
                      "undefined" == typeof c && (c = b, b = 438);
                      S(a, b | 8192, c);
                    }, cc = (a, b) => {
                      if (!lb(a)) {
                        throw new O(44);
                      }
                      var c = Lb(b, { parent: true }).node;
                      if (!c) {
                        throw new O(44);
                      }
                      b = ib(b);
                      var d = Rb(c, b);
                      if (d) {
                        throw new O(d);
                      }
                      if (!c.l.Ea) {
                        throw new O(63);
                      }
                      c.l.Ea(c, b, a);
                    }, Kb = (a) => {
                      a = Lb(a).node;
                      if (!a) {
                        throw new O(44);
                      }
                      if (!a.l.ma) {
                        throw new O(28);
                      }
                      return lb(Mb(a.parent), a.l.ma(a));
                    }, ec = (a, b, c) => {
                      if ("" === a) {
                        throw new O(44);
                      }
                      if ("string" == typeof b) {
                        var d = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[b];
                        if ("undefined" == typeof d) {
                          throw Error(`Unknown file open mode: ${b}`);
                        }
                        b = d;
                      }
                      c = b & 64 ? ("undefined" == typeof c ? 438 : c) & 4095 | 32768 : 0;
                      if ("object" == typeof a) {
                        var e = a;
                      } else {
                        a = gb(a);
                        try {
                          e = Lb(a, { fb: !(b & 131072) }).node;
                        } catch (f) {
                        }
                      }
                      d = false;
                      if (b & 64) {
                        if (e) {
                          if (b & 128) {
                            throw new O(20);
                          }
                        } else {
                          e = S(a, c, 0), d = true;
                        }
                      }
                      if (!e) {
                        throw new O(44);
                      }
                      8192 === (e.mode & 61440) && (b &= -513);
                      if (b & 65536 && 16384 !== (e.mode & 61440)) {
                        throw new O(54);
                      }
                      if (!d && (c = e ? 40960 === (e.mode & 61440) ? 32 : 16384 === (e.mode & 61440) && ("r" !== Qb(b) || b & 512) ? 31 : Ob(e, Qb(b)) : 44)) {
                        throw new O(c);
                      }
                      if (b & 512 && !d) {
                        c = e;
                        c = "string" == typeof c ? Lb(c, { fb: true }).node : c;
                        if (!c.l.P) {
                          throw new O(63);
                        }
                        if (16384 === (c.mode & 61440)) {
                          throw new O(31);
                        }
                        if (32768 !== (c.mode & 61440)) {
                          throw new O(28);
                        }
                        if (d = Ob(c, "w")) {
                          throw new O(d);
                        }
                        c.l.P(c, { size: 0, timestamp: Date.now() });
                      }
                      b &= -131713;
                      e = Vb({ node: e, path: Mb(e), flags: b, seekable: true, position: 0, m: e.m, zc: [], error: false });
                      e.m.open && e.m.open(e);
                      !m.logReadFiles || b & 1 || (dc || (dc = {}), a in dc || (dc[a] = 1));
                      return e;
                    }, fc = (a, b, c) => {
                      if (null === a.X) {
                        throw new O(8);
                      }
                      if (!a.seekable || !a.m.ba) {
                        throw new O(70);
                      }
                      if (0 != c && 1 != c && 2 != c) {
                        throw new O(28);
                      }
                      a.position = a.m.ba(a, b, c);
                      a.zc = [];
                    }, gc = () => {
                      O || (O = function(a, b) {
                        this.name = "ErrnoError";
                        this.node = b;
                        this.pc = function(c) {
                          this.aa = c;
                        };
                        this.pc(a);
                        this.message = "FS error";
                      }, O.prototype = Error(), O.prototype.constructor = O, [44].forEach((a) => {
                        Bb[a] = new O(a);
                        Bb[a].stack = "<generic error, no stack>";
                      }));
                    }, hc, jc = (a, b, c) => {
                      a = gb("/dev/" + a);
                      var d = Db(!!b, !!c);
                      ic || (ic = 64);
                      var e = ic++ << 8 | 0;
                      ub(e, { open: (f) => {
                        f.seekable = false;
                      }, close: () => {
                        c && c.buffer && c.buffer.length && c(10);
                      }, read: (f, g, n, p) => {
                        for (var l = 0, u = 0; u < p; u++) {
                          try {
                            var v = b();
                          } catch (x) {
                            throw new O(29);
                          }
                          if (void 0 === v && 0 === l) {
                            throw new O(6);
                          }
                          if (null === v || void 0 === v) {
                            break;
                          }
                          l++;
                          g[n + u] = v;
                        }
                        l && (f.node.timestamp = Date.now());
                        return l;
                      }, write: (f, g, n, p) => {
                        for (var l = 0; l < p; l++) {
                          try {
                            c(g[n + l]);
                          } catch (u) {
                            throw new O(29);
                          }
                        }
                        p && (f.node.timestamp = Date.now());
                        return l;
                      } });
                      Xb(a, d, e);
                    }, ic, kc = {}, Ub, dc, lc = void 0;
                    function mc() {
                      lc += 4;
                      return L[lc - 4 >> 2];
                    }
                    function nc(a) {
                      if (void 0 === a) {
                        return "_unknown";
                      }
                      a = a.replace(/[^a-zA-Z0-9_]/g, "$");
                      var b = a.charCodeAt(0);
                      return 48 <= b && 57 >= b ? `_${a}` : a;
                    }
                    function oc(a, b) {
                      a = nc(a);
                      return { [a]: function() {
                        return b.apply(this, arguments);
                      } }[a];
                    }
                    function pc() {
                      this.M = [void 0];
                      this.hb = [];
                    }
                    var U = new pc(), qc = void 0;
                    function V(a) {
                      throw new qc(a);
                    }
                    var rc = (a) => {
                      a || V("Cannot use deleted val. handle = " + a);
                      return U.get(a).value;
                    }, sc = (a) => {
                      switch (a) {
                        case void 0:
                          return 1;
                        case null:
                          return 2;
                        case true:
                          return 3;
                        case false:
                          return 4;
                        default:
                          return U.pa({ tb: 1, value: a });
                      }
                    };
                    function tc(a) {
                      var b = Error, c = oc(a, function(d) {
                        this.name = a;
                        this.message = d;
                        d = Error(d).stack;
                        void 0 !== d && (this.stack = this.toString() + "\n" + d.replace(/^Error(:[^\n]*)?\n/, ""));
                      });
                      c.prototype = Object.create(b.prototype);
                      c.prototype.constructor = c;
                      c.prototype.toString = function() {
                        return void 0 === this.message ? this.name : `${this.name}: ${this.message}`;
                      };
                      return c;
                    }
                    var uc = void 0, vc = void 0;
                    function W(a) {
                      for (var b = ""; E[a]; ) {
                        b += vc[E[a++]];
                      }
                      return b;
                    }
                    var wc = [];
                    function xc() {
                      for (; wc.length; ) {
                        var a = wc.pop();
                        a.g.fa = false;
                        a["delete"]();
                      }
                    }
                    var yc = void 0, zc = {};
                    function Ac(a, b) {
                      for (void 0 === b && V("ptr should not be undefined"); a.A; ) {
                        b = a.na(b), a = a.A;
                      }
                      return b;
                    }
                    var Bc = {};
                    function Cc(a) {
                      a = Dc(a);
                      var b = W(a);
                      Ec(a);
                      return b;
                    }
                    function Fc(a, b) {
                      var c = Bc[a];
                      void 0 === c && V(b + " has unknown type " + Cc(a));
                      return c;
                    }
                    function Gc() {
                    }
                    var Hc = false;
                    function Ic(a) {
                      --a.count.value;
                      0 === a.count.value && (a.G ? a.L.W(a.G) : a.u.i.W(a.o));
                    }
                    function Jc(a, b, c) {
                      if (b === c) {
                        return a;
                      }
                      if (void 0 === c.A) {
                        return null;
                      }
                      a = Jc(a, b, c.A);
                      return null === a ? null : c.Pb(a);
                    }
                    var Kc = {};
                    function Lc(a, b) {
                      b = Ac(a, b);
                      return zc[b];
                    }
                    var Mc = void 0;
                    function Nc(a) {
                      throw new Mc(a);
                    }
                    function Oc(a, b) {
                      b.u && b.o || Nc("makeClassHandle requires ptr and ptrType");
                      !!b.L !== !!b.G && Nc("Both smartPtrType and smartPtr must be specified");
                      b.count = { value: 1 };
                      return Pc(Object.create(a, { g: { value: b } }));
                    }
                    function Pc(a) {
                      if ("undefined" === typeof FinalizationRegistry) {
                        return Pc = (b) => b, a;
                      }
                      Hc = new FinalizationRegistry((b) => {
                        Ic(b.g);
                      });
                      Pc = (b) => {
                        var c = b.g;
                        c.G && Hc.register(b, { g: c }, b);
                        return b;
                      };
                      Gc = (b) => {
                        Hc.unregister(b);
                      };
                      return Pc(a);
                    }
                    var Qc = {};
                    function Rc(a) {
                      for (; a.length; ) {
                        var b = a.pop();
                        a.pop()(b);
                      }
                    }
                    function Sc(a) {
                      return this.fromWireType(L[a >> 2]);
                    }
                    var Tc = {}, Uc = {};
                    function Y(a, b, c) {
                      function d(n) {
                        n = c(n);
                        n.length !== a.length && Nc("Mismatched type converter count");
                        for (var p = 0; p < a.length; ++p) {
                          Vc(a[p], n[p]);
                        }
                      }
                      a.forEach(function(n) {
                        Uc[n] = b;
                      });
                      var e = Array(b.length), f = [], g = 0;
                      b.forEach((n, p) => {
                        Bc.hasOwnProperty(n) ? e[p] = Bc[n] : (f.push(n), Tc.hasOwnProperty(n) || (Tc[n] = []), Tc[n].push(() => {
                          e[p] = Bc[n];
                          ++g;
                          g === f.length && d(e);
                        }));
                      });
                      0 === f.length && d(e);
                    }
                    function Wc(a) {
                      switch (a) {
                        case 1:
                          return 0;
                        case 2:
                          return 1;
                        case 4:
                          return 2;
                        case 8:
                          return 3;
                        default:
                          throw new TypeError(`Unknown type size: ${a}`);
                      }
                    }
                    function Xc(a, b, c = {}) {
                      var d = b.name;
                      a || V(`type "${d}" must have a positive integer typeid pointer`);
                      if (Bc.hasOwnProperty(a)) {
                        if (c.$b) {
                          return;
                        }
                        V(`Cannot register type '${d}' twice`);
                      }
                      Bc[a] = b;
                      delete Uc[a];
                      Tc.hasOwnProperty(a) && (b = Tc[a], delete Tc[a], b.forEach((e) => e()));
                    }
                    function Vc(a, b, c = {}) {
                      if (!("argPackAdvance" in b)) {
                        throw new TypeError("registerType registeredInstance requires argPackAdvance");
                      }
                      Xc(a, b, c);
                    }
                    function Yc(a) {
                      V(a.g.u.i.name + " instance already deleted");
                    }
                    function Zc() {
                    }
                    function $c(a, b, c) {
                      if (void 0 === a[b].B) {
                        var d = a[b];
                        a[b] = function() {
                          a[b].B.hasOwnProperty(arguments.length) || V(`Function '${c}' called with an invalid number of arguments (${arguments.length}) - expects one of (${a[b].B})!`);
                          return a[b].B[arguments.length].apply(this, arguments);
                        };
                        a[b].B = [];
                        a[b].B[d.ea] = d;
                      }
                    }
                    function ad(a, b, c) {
                      m.hasOwnProperty(a) ? ((void 0 === c || void 0 !== m[a].B && void 0 !== m[a].B[c]) && V(`Cannot register public name '${a}' twice`), $c(m, a, a), m.hasOwnProperty(c) && V(`Cannot register multiple overloads of a function with the same number of arguments (${c})!`), m[a].B[c] = b) : (m[a] = b, void 0 !== c && (m[a].Pc = c));
                    }
                    function bd(a, b, c, d, e, f, g, n) {
                      this.name = a;
                      this.constructor = b;
                      this.N = c;
                      this.W = d;
                      this.A = e;
                      this.Ub = f;
                      this.na = g;
                      this.Pb = n;
                      this.qb = [];
                    }
                    function cd(a, b, c) {
                      for (; b !== c; ) {
                        b.na || V(`Expected null or instance of ${c.name}, got an instance of ${b.name}`), a = b.na(a), b = b.A;
                      }
                      return a;
                    }
                    function dd(a, b) {
                      if (null === b) {
                        return this.Na && V(`null is not a valid ${this.name}`), 0;
                      }
                      b.g || V(`Cannot pass "${ed(b)}" as a ${this.name}`);
                      b.g.o || V(`Cannot pass deleted object as a pointer of type ${this.name}`);
                      return cd(b.g.o, b.g.u.i, this.i);
                    }
                    function fd(a, b) {
                      if (null === b) {
                        this.Na && V(`null is not a valid ${this.name}`);
                        if (this.ua) {
                          var c = this.Pa();
                          null !== a && a.push(this.W, c);
                          return c;
                        }
                        return 0;
                      }
                      b.g || V(`Cannot pass "${ed(b)}" as a ${this.name}`);
                      b.g.o || V(`Cannot pass deleted object as a pointer of type ${this.name}`);
                      !this.ta && b.g.u.ta && V(`Cannot convert argument of type ${b.g.L ? b.g.L.name : b.g.u.name} to parameter type ${this.name}`);
                      c = cd(b.g.o, b.g.u.i, this.i);
                      if (this.ua) {
                        switch (void 0 === b.g.G && V("Passing raw pointer to smart pointer is illegal"), this.tc) {
                          case 0:
                            b.g.L === this ? c = b.g.G : V(`Cannot convert argument of type ${b.g.L ? b.g.L.name : b.g.u.name} to parameter type ${this.name}`);
                            break;
                          case 1:
                            c = b.g.G;
                            break;
                          case 2:
                            if (b.g.L === this) {
                              c = b.g.G;
                            } else {
                              var d = b.clone();
                              c = this.oc(c, sc(function() {
                                d["delete"]();
                              }));
                              null !== a && a.push(this.W, c);
                            }
                            break;
                          default:
                            V("Unsupporting sharing policy");
                        }
                      }
                      return c;
                    }
                    function gd(a, b) {
                      if (null === b) {
                        return this.Na && V(`null is not a valid ${this.name}`), 0;
                      }
                      b.g || V(`Cannot pass "${ed(b)}" as a ${this.name}`);
                      b.g.o || V(`Cannot pass deleted object as a pointer of type ${this.name}`);
                      b.g.u.ta && V(`Cannot convert argument of type ${b.g.u.name} to parameter type ${this.name}`);
                      return cd(b.g.o, b.g.u.i, this.i);
                    }
                    function hd(a, b, c, d) {
                      this.name = a;
                      this.i = b;
                      this.Na = c;
                      this.ta = d;
                      this.ua = false;
                      this.W = this.oc = this.Pa = this.rb = this.tc = this.nc = void 0;
                      void 0 !== b.A ? this.toWireType = fd : (this.toWireType = d ? dd : gd, this.K = null);
                    }
                    function jd(a, b, c) {
                      m.hasOwnProperty(a) || Nc("Replacing nonexistant public symbol");
                      void 0 !== m[a].B && void 0 !== c ? m[a].B[c] = b : (m[a] = b, m[a].ea = c);
                    }
                    var kd = [], ld = (a) => {
                      var b = kd[a];
                      b || (a >= kd.length && (kd.length = a + 1), kd[a] = b = Ka.get(a));
                      return b;
                    }, md = (a, b) => {
                      var c = [];
                      return function() {
                        c.length = 0;
                        Object.assign(c, arguments);
                        if (a.includes("j")) {
                          var d = m["dynCall_" + a];
                          d = c && c.length ? d.apply(null, [b].concat(c)) : d.call(null, b);
                        } else {
                          d = ld(b).apply(null, c);
                        }
                        return d;
                      };
                    };
                    function Z(a, b) {
                      a = W(a);
                      var c = a.includes("j") ? md(a, b) : ld(b);
                      "function" != typeof c && V(`unknown function pointer with signature ${a}: ${b}`);
                      return c;
                    }
                    var nd = void 0;
                    function od(a, b) {
                      function c(f) {
                        e[f] || Bc[f] || (Uc[f] ? Uc[f].forEach(c) : (d.push(f), e[f] = true));
                      }
                      var d = [], e = {};
                      b.forEach(c);
                      throw new nd(`${a}: ` + d.map(Cc).join([", "]));
                    }
                    function pd(a, b, c, d, e) {
                      var f = b.length;
                      2 > f && V("argTypes array size mismatch! Must at least get return value and 'this' types!");
                      var g = null !== b[1] && null !== c, n = false;
                      for (c = 1; c < b.length; ++c) {
                        if (null !== b[c] && void 0 === b[c].K) {
                          n = true;
                          break;
                        }
                      }
                      var p = "void" !== b[0].name, l = f - 2, u = Array(l), v = [], x = [];
                      return function() {
                        arguments.length !== l && V(`function ${a} called with ${arguments.length} arguments, expected ${l} args!`);
                        x.length = 0;
                        v.length = g ? 2 : 1;
                        v[0] = e;
                        if (g) {
                          var k = b[1].toWireType(x, this);
                          v[1] = k;
                        }
                        for (var t = 0; t < l; ++t) {
                          u[t] = b[t + 2].toWireType(x, arguments[t]), v.push(u[t]);
                        }
                        t = d.apply(null, v);
                        if (n) {
                          Rc(x);
                        } else {
                          for (var r = g ? 1 : 2; r < b.length; r++) {
                            var A = 1 === r ? k : u[r - 2];
                            null !== b[r].K && b[r].K(A);
                          }
                        }
                        k = p ? b[0].fromWireType(t) : void 0;
                        return k;
                      };
                    }
                    function rd(a, b) {
                      for (var c = [], d = 0; d < a; d++) {
                        c.push(N[b + 4 * d >> 2]);
                      }
                      return c;
                    }
                    function sd(a, b, c) {
                      a instanceof Object || V(`${c} with invalid "this": ${a}`);
                      a instanceof b.i.constructor || V(`${c} incompatible with "this" of type ${a.constructor.name}`);
                      a.g.o || V(`cannot call emscripten binding method ${c} on deleted object`);
                      return cd(a.g.o, a.g.u.i, b.i);
                    }
                    function td(a) {
                      a >= U.h && 0 === --U.get(a).tb && U.Zb(a);
                    }
                    function ud(a, b, c) {
                      switch (b) {
                        case 0:
                          return function(d) {
                            return this.fromWireType((c ? B : E)[d]);
                          };
                        case 1:
                          return function(d) {
                            return this.fromWireType((c ? Da : Ea)[d >> 1]);
                          };
                        case 2:
                          return function(d) {
                            return this.fromWireType((c ? L : N)[d >> 2]);
                          };
                        default:
                          throw new TypeError("Unknown integer type: " + a);
                      }
                    }
                    function ed(a) {
                      if (null === a) {
                        return "null";
                      }
                      var b = typeof a;
                      return "object" === b || "array" === b || "function" === b ? a.toString() : "" + a;
                    }
                    function vd(a, b) {
                      switch (b) {
                        case 2:
                          return function(c) {
                            return this.fromWireType(Fa[c >> 2]);
                          };
                        case 3:
                          return function(c) {
                            return this.fromWireType(Ia[c >> 3]);
                          };
                        default:
                          throw new TypeError("Unknown float type: " + a);
                      }
                    }
                    function wd(a, b, c) {
                      switch (b) {
                        case 0:
                          return c ? function(d) {
                            return B[d];
                          } : function(d) {
                            return E[d];
                          };
                        case 1:
                          return c ? function(d) {
                            return Da[d >> 1];
                          } : function(d) {
                            return Ea[d >> 1];
                          };
                        case 2:
                          return c ? function(d) {
                            return L[d >> 2];
                          } : function(d) {
                            return N[d >> 2];
                          };
                        default:
                          throw new TypeError("Unknown integer type: " + a);
                      }
                    }
                    var xd = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0, yd = (a, b) => {
                      var c = a >> 1;
                      for (var d = c + b / 2; !(c >= d) && Ea[c]; ) {
                        ++c;
                      }
                      c <<= 1;
                      if (32 < c - a && xd) {
                        return xd.decode(E.subarray(a, c));
                      }
                      c = "";
                      for (d = 0; !(d >= b / 2); ++d) {
                        var e = Da[a + 2 * d >> 1];
                        if (0 == e) {
                          break;
                        }
                        c += String.fromCharCode(e);
                      }
                      return c;
                    }, zd = (a, b, c) => {
                      void 0 === c && (c = 2147483647);
                      if (2 > c) {
                        return 0;
                      }
                      c -= 2;
                      var d = b;
                      c = c < 2 * a.length ? c / 2 : a.length;
                      for (var e = 0; e < c; ++e) {
                        Da[b >> 1] = a.charCodeAt(e), b += 2;
                      }
                      Da[b >> 1] = 0;
                      return b - d;
                    }, Ad = (a) => 2 * a.length, Bd = (a, b) => {
                      for (var c = 0, d = ""; !(c >= b / 4); ) {
                        var e = L[a + 4 * c >> 2];
                        if (0 == e) {
                          break;
                        }
                        ++c;
                        65536 <= e ? (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023)) : d += String.fromCharCode(e);
                      }
                      return d;
                    }, Cd = (a, b, c) => {
                      void 0 === c && (c = 2147483647);
                      if (4 > c) {
                        return 0;
                      }
                      var d = b;
                      c = d + c - 4;
                      for (var e = 0; e < a.length; ++e) {
                        var f = a.charCodeAt(e);
                        if (55296 <= f && 57343 >= f) {
                          var g = a.charCodeAt(++e);
                          f = 65536 + ((f & 1023) << 10) | g & 1023;
                        }
                        L[b >> 2] = f;
                        b += 4;
                        if (b + 4 > c) {
                          break;
                        }
                      }
                      L[b >> 2] = 0;
                      return b - d;
                    }, Dd = (a) => {
                      for (var b = 0, c = 0; c < a.length; ++c) {
                        var d = a.charCodeAt(c);
                        55296 <= d && 57343 >= d && ++c;
                        b += 4;
                      }
                      return b;
                    }, Ed = {};
                    function Fd(a) {
                      var b = Ed[a];
                      return void 0 === b ? W(a) : b;
                    }
                    var Gd = [];
                    function Hd(a) {
                      var b = Gd.length;
                      Gd.push(a);
                      return b;
                    }
                    function Id(a, b) {
                      for (var c = Array(a), d = 0; d < a; ++d) {
                        c[d] = Fc(N[b + 4 * d >> 2], "parameter " + d);
                      }
                      return c;
                    }
                    var Jd = [], Kd = [], Ld = {}, Nd = () => {
                      if (!Md) {
                        var a = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: na || "./this.program" }, b;
                        for (b in Ld) {
                          void 0 === Ld[b] ? delete a[b] : a[b] = Ld[b];
                        }
                        var c = [];
                        for (b in a) {
                          c.push(`${b}=${a[b]}`);
                        }
                        Md = c;
                      }
                      return Md;
                    }, Md, Od = (a) => 0 === a % 4 && (0 !== a % 100 || 0 === a % 400), Pd = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Qd = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Rd = (a, b, c, d) => {
                      function e(k, t, r) {
                        for (k = "number" == typeof k ? k.toString() : k || ""; k.length < t; ) {
                          k = r[0] + k;
                        }
                        return k;
                      }
                      function f(k, t) {
                        return e(k, t, "0");
                      }
                      function g(k, t) {
                        function r(D) {
                          return 0 > D ? -1 : 0 < D ? 1 : 0;
                        }
                        var A;
                        0 === (A = r(k.getFullYear() - t.getFullYear())) && 0 === (A = r(k.getMonth() - t.getMonth())) && (A = r(k.getDate() - t.getDate()));
                        return A;
                      }
                      function n(k) {
                        switch (k.getDay()) {
                          case 0:
                            return new Date(k.getFullYear() - 1, 11, 29);
                          case 1:
                            return k;
                          case 2:
                            return new Date(k.getFullYear(), 0, 3);
                          case 3:
                            return new Date(k.getFullYear(), 0, 2);
                          case 4:
                            return new Date(k.getFullYear(), 0, 1);
                          case 5:
                            return new Date(k.getFullYear() - 1, 11, 31);
                          case 6:
                            return new Date(k.getFullYear() - 1, 11, 30);
                        }
                      }
                      function p(k) {
                        var t = k.ca;
                        for (k = new Date(new Date(k.da + 1900, 0, 1).getTime()); 0 < t; ) {
                          var r = k.getMonth(), A = (Od(k.getFullYear()) ? Pd : Qd)[r];
                          if (t > A - k.getDate()) {
                            t -= A - k.getDate() + 1, k.setDate(1), 11 > r ? k.setMonth(r + 1) : (k.setMonth(0), k.setFullYear(k.getFullYear() + 1));
                          } else {
                            k.setDate(k.getDate() + t);
                            break;
                          }
                        }
                        r = new Date(k.getFullYear() + 1, 0, 4);
                        t = n(new Date(k.getFullYear(), 0, 4));
                        r = n(r);
                        return 0 >= g(t, k) ? 0 >= g(r, k) ? k.getFullYear() + 1 : k.getFullYear() : k.getFullYear() - 1;
                      }
                      var l = L[d + 40 >> 2];
                      d = { wc: L[d >> 2], vc: L[d + 4 >> 2], Fa: L[d + 8 >> 2], Sa: L[d + 12 >> 2], Ga: L[d + 16 >> 2], da: L[d + 20 >> 2], R: L[d + 24 >> 2], ca: L[d + 28 >> 2], Rc: L[d + 32 >> 2], uc: L[d + 36 >> 2], xc: l ? l ? nb(E, l) : "" : "" };
                      c = c ? nb(E, c) : "";
                      l = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
                      for (var u in l) {
                        c = c.replace(new RegExp(u, "g"), l[u]);
                      }
                      var v = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), x = "January February March April May June July August September October November December".split(" ");
                      l = { "%a": (k) => v[k.R].substring(0, 3), "%A": (k) => v[k.R], "%b": (k) => x[k.Ga].substring(0, 3), "%B": (k) => x[k.Ga], "%C": (k) => f((k.da + 1900) / 100 | 0, 2), "%d": (k) => f(k.Sa, 2), "%e": (k) => e(k.Sa, 2, " "), "%g": (k) => p(k).toString().substring(2), "%G": (k) => p(k), "%H": (k) => f(k.Fa, 2), "%I": (k) => {
                        k = k.Fa;
                        0 == k ? k = 12 : 12 < k && (k -= 12);
                        return f(k, 2);
                      }, "%j": (k) => {
                        for (var t = 0, r = 0; r <= k.Ga - 1; t += (Od(k.da + 1900) ? Pd : Qd)[r++]) {
                        }
                        return f(k.Sa + t, 3);
                      }, "%m": (k) => f(k.Ga + 1, 2), "%M": (k) => f(k.vc, 2), "%n": () => "\n", "%p": (k) => 0 <= k.Fa && 12 > k.Fa ? "AM" : "PM", "%S": (k) => f(k.wc, 2), "%t": () => "	", "%u": (k) => k.R || 7, "%U": (k) => f(Math.floor((k.ca + 7 - k.R) / 7), 2), "%V": (k) => {
                        var t = Math.floor((k.ca + 7 - (k.R + 6) % 7) / 7);
                        2 >= (k.R + 371 - k.ca - 2) % 7 && t++;
                        if (t) {
                          53 == t && (r = (k.R + 371 - k.ca) % 7, 4 == r || 3 == r && Od(k.da) || (t = 1));
                        } else {
                          t = 52;
                          var r = (k.R + 7 - k.ca - 1) % 7;
                          (4 == r || 5 == r && Od(k.da % 400 - 1)) && t++;
                        }
                        return f(t, 2);
                      }, "%w": (k) => k.R, "%W": (k) => f(Math.floor((k.ca + 7 - (k.R + 6) % 7) / 7), 2), "%y": (k) => (k.da + 1900).toString().substring(2), "%Y": (k) => k.da + 1900, "%z": (k) => {
                        k = k.uc;
                        var t = 0 <= k;
                        k = Math.abs(k) / 60;
                        return (t ? "+" : "-") + String("0000" + (k / 60 * 100 + k % 60)).slice(-4);
                      }, "%Z": (k) => k.xc, "%%": () => "%" };
                      c = c.replace(/%%/g, "\0\0");
                      for (u in l) {
                        c.includes(u) && (c = c.replace(new RegExp(u, "g"), l[u](d)));
                      }
                      c = c.replace(/\0\0/g, "%");
                      u = rb(c, false);
                      if (u.length > b) {
                        return 0;
                      }
                      B.set(u, a);
                      return u.length - 1;
                    };
                    function Pb(a, b, c, d) {
                      a || (a = this);
                      this.parent = a;
                      this.U = a.U;
                      this.wa = null;
                      this.id = Hb++;
                      this.name = b;
                      this.mode = c;
                      this.l = {};
                      this.m = {};
                      this.za = d;
                    }
                    Object.defineProperties(Pb.prototype, { read: { get: function() {
                      return 365 === (this.mode & 365);
                    }, set: function(a) {
                      a ? this.mode |= 365 : this.mode &= -366;
                    } }, write: { get: function() {
                      return 146 === (this.mode & 146);
                    }, set: function(a) {
                      a ? this.mode |= 146 : this.mode &= -147;
                    } } });
                    gc();
                    Ib = Array(4096);
                    Wb(P, "/");
                    S("/tmp", 16895, 0);
                    S("/home", 16895, 0);
                    S("/home/web_user", 16895, 0);
                    (() => {
                      S("/dev", 16895, 0);
                      ub(259, { read: () => 0, write: (d, e, f, g) => g });
                      Xb("/dev/null", 259);
                      tb(1280, wb);
                      tb(1536, xb);
                      Xb("/dev/tty", 1280);
                      Xb("/dev/tty1", 1536);
                      var a = new Uint8Array(1024), b = 0, c = () => {
                        0 === b && (b = kb(a).byteLength);
                        return a[--b];
                      };
                      jc("random", c);
                      jc("urandom", c);
                      S("/dev/shm", 16895, 0);
                      S("/dev/shm/tmp", 16895, 0);
                    })();
                    (() => {
                      S("/proc", 16895, 0);
                      var a = S("/proc/self", 16895, 0);
                      S("/proc/self/fd", 16895, 0);
                      Wb({ U: () => {
                        var b = Ab(a, "fd", 16895, 73);
                        b.l = { ka: (c, d) => {
                          var e = Tb(+d);
                          c = { parent: null, U: { mb: "fake" }, l: { ma: () => e.path } };
                          return c.parent = c;
                        } };
                        return b;
                      } }, "/proc/self/fd");
                    })();
                    Object.assign(pc.prototype, { get(a) {
                      return this.M[a];
                    }, has(a) {
                      return void 0 !== this.M[a];
                    }, pa(a) {
                      var b = this.hb.pop() || this.M.length;
                      this.M[b] = a;
                      return b;
                    }, Zb(a) {
                      this.M[a] = void 0;
                      this.hb.push(a);
                    } });
                    qc = m.BindingError = class extends Error {
                      constructor(a) {
                        super(a);
                        this.name = "BindingError";
                      }
                    };
                    U.M.push({ value: void 0 }, { value: null }, { value: true }, { value: false });
                    U.h = U.M.length;
                    m.count_emval_handles = function() {
                      for (var a = 0, b = U.h; b < U.M.length; ++b) {
                        void 0 !== U.M[b] && ++a;
                      }
                      return a;
                    };
                    uc = m.PureVirtualError = tc("PureVirtualError");
                    for (var Sd = Array(256), Td = 0; 256 > Td; ++Td) {
                      Sd[Td] = String.fromCharCode(Td);
                    }
                    vc = Sd;
                    m.getInheritedInstanceCount = function() {
                      return Object.keys(zc).length;
                    };
                    m.getLiveInheritedInstances = function() {
                      var a = [], b;
                      for (b in zc) {
                        zc.hasOwnProperty(b) && a.push(zc[b]);
                      }
                      return a;
                    };
                    m.flushPendingDeletes = xc;
                    m.setDelayFunction = function(a) {
                      yc = a;
                      wc.length && yc && yc(xc);
                    };
                    Mc = m.InternalError = class extends Error {
                      constructor(a) {
                        super(a);
                        this.name = "InternalError";
                      }
                    };
                    Zc.prototype.isAliasOf = function(a) {
                      if (!(this instanceof Zc && a instanceof Zc)) {
                        return false;
                      }
                      var b = this.g.u.i, c = this.g.o, d = a.g.u.i;
                      for (a = a.g.o; b.A; ) {
                        c = b.na(c), b = b.A;
                      }
                      for (; d.A; ) {
                        a = d.na(a), d = d.A;
                      }
                      return b === d && c === a;
                    };
                    Zc.prototype.clone = function() {
                      this.g.o || Yc(this);
                      if (this.g.ia) {
                        return this.g.count.value += 1, this;
                      }
                      var a = Pc, b = Object, c = b.create, d = Object.getPrototypeOf(this), e = this.g;
                      a = a(c.call(b, d, { g: { value: { count: e.count, fa: e.fa, ia: e.ia, o: e.o, u: e.u, G: e.G, L: e.L } } }));
                      a.g.count.value += 1;
                      a.g.fa = false;
                      return a;
                    };
                    Zc.prototype["delete"] = function() {
                      this.g.o || Yc(this);
                      this.g.fa && !this.g.ia && V("Object already scheduled for deletion");
                      Gc(this);
                      Ic(this.g);
                      this.g.ia || (this.g.G = void 0, this.g.o = void 0);
                    };
                    Zc.prototype.isDeleted = function() {
                      return !this.g.o;
                    };
                    Zc.prototype.deleteLater = function() {
                      this.g.o || Yc(this);
                      this.g.fa && !this.g.ia && V("Object already scheduled for deletion");
                      wc.push(this);
                      1 === wc.length && yc && yc(xc);
                      this.g.fa = true;
                      return this;
                    };
                    hd.prototype.Vb = function(a) {
                      this.rb && (a = this.rb(a));
                      return a;
                    };
                    hd.prototype.ab = function(a) {
                      this.W && this.W(a);
                    };
                    hd.prototype.argPackAdvance = 8;
                    hd.prototype.readValueFromPointer = Sc;
                    hd.prototype.deleteObject = function(a) {
                      if (null !== a) {
                        a["delete"]();
                      }
                    };
                    hd.prototype.fromWireType = function(a) {
                      function b() {
                        return this.ua ? Oc(this.i.N, { u: this.nc, o: c, L: this, G: a }) : Oc(this.i.N, { u: this, o: a });
                      }
                      var c = this.Vb(a);
                      if (!c) {
                        return this.ab(a), null;
                      }
                      var d = Lc(this.i, c);
                      if (void 0 !== d) {
                        if (0 === d.g.count.value) {
                          return d.g.o = c, d.g.G = a, d.clone();
                        }
                        d = d.clone();
                        this.ab(a);
                        return d;
                      }
                      d = this.i.Ub(c);
                      d = Kc[d];
                      if (!d) {
                        return b.call(this);
                      }
                      d = this.ta ? d.Kb : d.pointerType;
                      var e = Jc(c, this.i, d.i);
                      return null === e ? b.call(this) : this.ua ? Oc(d.i.N, { u: d, o: e, L: this, G: a }) : Oc(d.i.N, { u: d, o: e });
                    };
                    nd = m.UnboundTypeError = tc("UnboundTypeError");
                    var Wd = { __syscall_fcntl64: function(a, b, c) {
                      lc = c;
                      try {
                        var d = Tb(a);
                        switch (b) {
                          case 0:
                            var e = mc();
                            return 0 > e ? -28 : Vb(d, e).X;
                          case 1:
                          case 2:
                            return 0;
                          case 3:
                            return d.flags;
                          case 4:
                            return e = mc(), d.flags |= e, 0;
                          case 5:
                            return e = mc(), Da[e + 0 >> 1] = 2, 0;
                          case 6:
                          case 7:
                            return 0;
                          case 16:
                          case 8:
                            return -28;
                          case 9:
                            return L[Ud() >> 2] = 28, -1;
                          default:
                            return -28;
                        }
                      } catch (f) {
                        if ("undefined" == typeof kc || "ErrnoError" !== f.name) {
                          throw f;
                        }
                        return -f.aa;
                      }
                    }, __syscall_ioctl: function(a, b, c) {
                      lc = c;
                      try {
                        var d = Tb(a);
                        switch (b) {
                          case 21509:
                            return d.s ? 0 : -59;
                          case 21505:
                            if (!d.s) {
                              return -59;
                            }
                            if (d.s.V.bc) {
                              b = [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                              var e = mc();
                              L[e >> 2] = 25856;
                              L[e + 4 >> 2] = 5;
                              L[e + 8 >> 2] = 191;
                              L[e + 12 >> 2] = 35387;
                              for (var f = 0; 32 > f; f++) {
                                B[e + f + 17 >> 0] = b[f] || 0;
                              }
                            }
                            return 0;
                          case 21510:
                          case 21511:
                          case 21512:
                            return d.s ? 0 : -59;
                          case 21506:
                          case 21507:
                          case 21508:
                            if (!d.s) {
                              return -59;
                            }
                            if (d.s.V.cc) {
                              for (e = mc(), b = [], f = 0; 32 > f; f++) {
                                b.push(B[e + f + 17 >> 0]);
                              }
                            }
                            return 0;
                          case 21519:
                            if (!d.s) {
                              return -59;
                            }
                            e = mc();
                            return L[e >> 2] = 0;
                          case 21520:
                            return d.s ? -28 : -59;
                          case 21531:
                            e = mc();
                            if (!d.m.ac) {
                              throw new O(59);
                            }
                            return d.m.ac(d, b, e);
                          case 21523:
                            if (!d.s) {
                              return -59;
                            }
                            d.s.V.dc && (f = [24, 80], e = mc(), Da[e >> 1] = f[0], Da[e + 2 >> 1] = f[1]);
                            return 0;
                          case 21524:
                            return d.s ? 0 : -59;
                          case 21515:
                            return d.s ? 0 : -59;
                          default:
                            return -28;
                        }
                      } catch (g) {
                        if ("undefined" == typeof kc || "ErrnoError" !== g.name) {
                          throw g;
                        }
                        return -g.aa;
                      }
                    }, __syscall_openat: function(a, b, c, d) {
                      lc = d;
                      try {
                        b = b ? nb(E, b) : "";
                        var e = b;
                        if ("/" === e.charAt(0)) {
                          b = e;
                        } else {
                          var f = -100 === a ? "/" : Tb(a).path;
                          if (0 == e.length) {
                            throw new O(44);
                          }
                          b = gb(f + "/" + e);
                        }
                        var g = d ? mc() : 0;
                        return ec(b, c, g).X;
                      } catch (n) {
                        if ("undefined" == typeof kc || "ErrnoError" !== n.name) {
                          throw n;
                        }
                        return -n.aa;
                      }
                    }, _embind_create_inheriting_constructor: function(a, b, c) {
                      a = W(a);
                      b = Fc(b, "wrapper");
                      c = rc(c);
                      var d = [].slice, e = b.i, f = e.N, g = e.A.N, n = e.A.constructor;
                      a = oc(a, function() {
                        e.A.qb.forEach(function(l) {
                          if (this[l] === g[l]) {
                            throw new uc(`Pure virtual function ${l} must be implemented in JavaScript`);
                          }
                        }.bind(this));
                        Object.defineProperty(this, "__parent", { value: f });
                        this.__construct.apply(this, d.call(arguments));
                      });
                      f.__construct = function() {
                        this === f && V("Pass correct 'this' to __construct");
                        var l = n.implement.apply(void 0, [this].concat(d.call(arguments)));
                        Gc(l);
                        var u = l.g;
                        l.notifyOnDestruction();
                        u.ia = true;
                        Object.defineProperties(this, { g: { value: u } });
                        Pc(this);
                        l = u.o;
                        l = Ac(e, l);
                        zc.hasOwnProperty(l) ? V(`Tried to register registered instance: ${l}`) : zc[l] = this;
                      };
                      f.__destruct = function() {
                        this === f && V("Pass correct 'this' to __destruct");
                        Gc(this);
                        var l = this.g.o;
                        l = Ac(e, l);
                        zc.hasOwnProperty(l) ? delete zc[l] : V(`Tried to unregister unregistered instance: ${l}`);
                      };
                      a.prototype = Object.create(f);
                      for (var p in c) {
                        a.prototype[p] = c[p];
                      }
                      return sc(a);
                    }, _embind_finalize_value_object: function(a) {
                      var b = Qc[a];
                      delete Qc[a];
                      var c = b.Pa, d = b.W, e = b.eb, f = e.map((g) => g.Yb).concat(e.map((g) => g.rc));
                      Y([a], f, (g) => {
                        var n = {};
                        e.forEach((p, l) => {
                          var u = g[l], v = p.Wb, x = p.Xb, k = g[l + e.length], t = p.qc, r = p.sc;
                          n[p.Sb] = { read: (A) => u.fromWireType(v(x, A)), write: (A, D) => {
                            var w = [];
                            t(r, A, k.toWireType(w, D));
                            Rc(w);
                          } };
                        });
                        return [{ name: b.name, fromWireType: function(p) {
                          var l = {}, u;
                          for (u in n) {
                            l[u] = n[u].read(p);
                          }
                          d(p);
                          return l;
                        }, toWireType: function(p, l) {
                          for (var u in n) {
                            if (!(u in l)) {
                              throw new TypeError(`Missing field: "${u}"`);
                            }
                          }
                          var v = c();
                          for (u in n) {
                            n[u].write(v, l[u]);
                          }
                          null !== p && p.push(d, v);
                          return v;
                        }, argPackAdvance: 8, readValueFromPointer: Sc, K: d }];
                      });
                    }, _embind_register_bigint: function() {
                    }, _embind_register_bool: function(a, b, c, d, e) {
                      var f = Wc(c);
                      b = W(b);
                      Vc(a, { name: b, fromWireType: function(g) {
                        return !!g;
                      }, toWireType: function(g, n) {
                        return n ? d : e;
                      }, argPackAdvance: 8, readValueFromPointer: function(g) {
                        if (1 === c) {
                          var n = B;
                        } else if (2 === c) {
                          n = Da;
                        } else if (4 === c) {
                          n = L;
                        } else {
                          throw new TypeError("Unknown boolean type size: " + b);
                        }
                        return this.fromWireType(n[g >> f]);
                      }, K: null });
                    }, _embind_register_class: function(a, b, c, d, e, f, g, n, p, l, u, v, x) {
                      u = W(u);
                      f = Z(e, f);
                      n && (n = Z(g, n));
                      l && (l = Z(p, l));
                      x = Z(v, x);
                      var k = nc(u);
                      ad(k, function() {
                        od(`Cannot construct ${u} due to unbound types`, [d]);
                      });
                      Y([a, b, c], d ? [d] : [], function(t) {
                        t = t[0];
                        if (d) {
                          var r = t.i;
                          var A = r.N;
                        } else {
                          A = Zc.prototype;
                        }
                        t = oc(k, function() {
                          if (Object.getPrototypeOf(this) !== D) {
                            throw new qc("Use 'new' to construct " + u);
                          }
                          if (void 0 === w.$) {
                            throw new qc(u + " has no accessible constructor");
                          }
                          var T = w.$[arguments.length];
                          if (void 0 === T) {
                            throw new qc(`Tried to invoke ctor of ${u} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(w.$).toString()}) parameters instead!`);
                          }
                          return T.apply(this, arguments);
                        });
                        var D = Object.create(A, { constructor: { value: t } });
                        t.prototype = D;
                        var w = new bd(u, t, D, x, r, f, n, l);
                        w.A && (void 0 === w.A.oa && (w.A.oa = []), w.A.oa.push(w));
                        r = new hd(u, w, true, false);
                        A = new hd(u + "*", w, false, false);
                        var M = new hd(u + " const*", w, false, true);
                        Kc[a] = { pointerType: A, Kb: M };
                        jd(k, t);
                        return [r, A, M];
                      });
                    }, _embind_register_class_class_function: function(a, b, c, d, e, f, g) {
                      var n = rd(c, d);
                      b = W(b);
                      f = Z(e, f);
                      Y([], [a], function(p) {
                        function l() {
                          od(`Cannot call ${u} due to unbound types`, n);
                        }
                        p = p[0];
                        var u = `${p.name}.${b}`;
                        b.startsWith("@@") && (b = Symbol[b.substring(2)]);
                        var v = p.i.constructor;
                        void 0 === v[b] ? (l.ea = c - 1, v[b] = l) : ($c(v, b, u), v[b].B[c - 1] = l);
                        Y([], n, function(x) {
                          x = pd(u, [x[0], null].concat(x.slice(1)), null, f, g);
                          void 0 === v[b].B ? (x.ea = c - 1, v[b] = x) : v[b].B[c - 1] = x;
                          if (p.i.oa) {
                            for (const k of p.i.oa) {
                              k.constructor.hasOwnProperty(b) || (k.constructor[b] = x);
                            }
                          }
                          return [];
                        });
                        return [];
                      });
                    }, _embind_register_class_class_property: function(a, b, c, d, e, f, g, n) {
                      b = W(b);
                      f = Z(e, f);
                      Y([], [a], function(p) {
                        p = p[0];
                        var l = `${p.name}.${b}`, u = { get() {
                          od(`Cannot access ${l} due to unbound types`, [c]);
                        }, enumerable: true, configurable: true };
                        u.set = n ? () => {
                          od(`Cannot access ${l} due to unbound types`, [c]);
                        } : () => {
                          V(`${l} is a read-only property`);
                        };
                        Object.defineProperty(p.i.constructor, b, u);
                        Y([], [c], function(v) {
                          v = v[0];
                          var x = { get() {
                            return v.fromWireType(f(d));
                          }, enumerable: true };
                          n && (n = Z(g, n), x.set = (k) => {
                            var t = [];
                            n(d, v.toWireType(t, k));
                            Rc(t);
                          });
                          Object.defineProperty(p.i.constructor, b, x);
                          return [];
                        });
                        return [];
                      });
                    }, _embind_register_class_constructor: function(a, b, c, d, e, f) {
                      var g = rd(b, c);
                      e = Z(d, e);
                      Y([], [a], function(n) {
                        n = n[0];
                        var p = `constructor ${n.name}`;
                        void 0 === n.i.$ && (n.i.$ = []);
                        if (void 0 !== n.i.$[b - 1]) {
                          throw new qc(`Cannot register multiple constructors with identical number of parameters (${b - 1}) for class '${n.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
                        }
                        n.i.$[b - 1] = () => {
                          od(`Cannot construct ${n.name} due to unbound types`, g);
                        };
                        Y([], g, function(l) {
                          l.splice(1, 0, null);
                          n.i.$[b - 1] = pd(p, l, null, e, f);
                          return [];
                        });
                        return [];
                      });
                    }, _embind_register_class_function: function(a, b, c, d, e, f, g, n) {
                      var p = rd(c, d);
                      b = W(b);
                      f = Z(e, f);
                      Y([], [a], function(l) {
                        function u() {
                          od(`Cannot call ${v} due to unbound types`, p);
                        }
                        l = l[0];
                        var v = `${l.name}.${b}`;
                        b.startsWith("@@") && (b = Symbol[b.substring(2)]);
                        n && l.i.qb.push(b);
                        var x = l.i.N, k = x[b];
                        void 0 === k || void 0 === k.B && k.className !== l.name && k.ea === c - 2 ? (u.ea = c - 2, u.className = l.name, x[b] = u) : ($c(x, b, v), x[b].B[c - 2] = u);
                        Y([], p, function(t) {
                          t = pd(v, t, l, f, g);
                          void 0 === x[b].B ? (t.ea = c - 2, x[b] = t) : x[b].B[c - 2] = t;
                          return [];
                        });
                        return [];
                      });
                    }, _embind_register_class_property: function(a, b, c, d, e, f, g, n, p, l) {
                      b = W(b);
                      e = Z(d, e);
                      Y([], [a], function(u) {
                        u = u[0];
                        var v = `${u.name}.${b}`, x = { get() {
                          od(`Cannot access ${v} due to unbound types`, [c, g]);
                        }, enumerable: true, configurable: true };
                        x.set = p ? () => {
                          od(`Cannot access ${v} due to unbound types`, [c, g]);
                        } : () => {
                          V(v + " is a read-only property");
                        };
                        Object.defineProperty(u.i.N, b, x);
                        Y([], p ? [c, g] : [c], function(k) {
                          var t = k[0], r = { get() {
                            var D = sd(this, u, v + " getter");
                            return t.fromWireType(e(f, D));
                          }, enumerable: true };
                          if (p) {
                            p = Z(n, p);
                            var A = k[1];
                            r.set = function(D) {
                              var w = sd(this, u, v + " setter"), M = [];
                              p(l, w, A.toWireType(M, D));
                              Rc(M);
                            };
                          }
                          Object.defineProperty(u.i.N, b, r);
                          return [];
                        });
                        return [];
                      });
                    }, _embind_register_emval: function(a, b) {
                      b = W(b);
                      Vc(a, { name: b, fromWireType: function(c) {
                        var d = rc(c);
                        td(c);
                        return d;
                      }, toWireType: function(c, d) {
                        return sc(d);
                      }, argPackAdvance: 8, readValueFromPointer: Sc, K: null });
                    }, _embind_register_enum: function(a, b, c, d) {
                      function e() {
                      }
                      c = Wc(c);
                      b = W(b);
                      e.values = {};
                      Vc(a, { name: b, constructor: e, fromWireType: function(f) {
                        return this.constructor.values[f];
                      }, toWireType: function(f, g) {
                        return g.value;
                      }, argPackAdvance: 8, readValueFromPointer: ud(b, c, d), K: null });
                      ad(b, e);
                    }, _embind_register_enum_value: function(a, b, c) {
                      var d = Fc(a, "enum");
                      b = W(b);
                      a = d.constructor;
                      d = Object.create(d.constructor.prototype, { value: { value: c }, constructor: { value: oc(`${d.name}_${b}`, function() {
                      }) } });
                      a.values[c] = d;
                      a[b] = d;
                    }, _embind_register_float: function(a, b, c) {
                      c = Wc(c);
                      b = W(b);
                      Vc(a, { name: b, fromWireType: function(d) {
                        return d;
                      }, toWireType: function(d, e) {
                        return e;
                      }, argPackAdvance: 8, readValueFromPointer: vd(b, c), K: null });
                    }, _embind_register_function: function(a, b, c, d, e, f) {
                      var g = rd(b, c);
                      a = W(a);
                      e = Z(d, e);
                      ad(a, function() {
                        od(`Cannot call ${a} due to unbound types`, g);
                      }, b - 1);
                      Y([], g, function(n) {
                        jd(a, pd(a, [n[0], null].concat(n.slice(1)), null, e, f), b - 1);
                        return [];
                      });
                    }, _embind_register_integer: function(a, b, c, d, e) {
                      b = W(b);
                      -1 === e && (e = 4294967295);
                      e = Wc(c);
                      var f = (n) => n;
                      if (0 === d) {
                        var g = 32 - 8 * c;
                        f = (n) => n << g >>> g;
                      }
                      c = b.includes("unsigned") ? function(n, p) {
                        return p >>> 0;
                      } : function(n, p) {
                        return p;
                      };
                      Vc(a, { name: b, fromWireType: f, toWireType: c, argPackAdvance: 8, readValueFromPointer: wd(b, e, 0 !== d), K: null });
                    }, _embind_register_memory_view: function(a, b, c) {
                      function d(f) {
                        f >>= 2;
                        var g = N;
                        return new e(g.buffer, g[f + 1], g[f]);
                      }
                      var e = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][b];
                      c = W(c);
                      Vc(a, { name: c, fromWireType: d, argPackAdvance: 8, readValueFromPointer: d }, { $b: true });
                    }, _embind_register_std_string: function(a, b) {
                      b = W(b);
                      var c = "std::string" === b;
                      Vc(a, { name: b, fromWireType: function(d) {
                        var e = N[d >> 2], f = d + 4;
                        if (c) {
                          for (var g = f, n = 0; n <= e; ++n) {
                            var p = f + n;
                            if (n == e || 0 == E[p]) {
                              g = g ? nb(E, g, p - g) : "";
                              if (void 0 === l) {
                                var l = g;
                              } else {
                                l += String.fromCharCode(0), l += g;
                              }
                              g = p + 1;
                            }
                          }
                        } else {
                          l = Array(e);
                          for (n = 0; n < e; ++n) {
                            l[n] = String.fromCharCode(E[f + n]);
                          }
                          l = l.join("");
                        }
                        Ec(d);
                        return l;
                      }, toWireType: function(d, e) {
                        e instanceof ArrayBuffer && (e = new Uint8Array(e));
                        var f = "string" == typeof e;
                        f || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Int8Array || V("Cannot pass non-string to std::string");
                        var g = c && f ? pb(e) : e.length;
                        var n = Vd(4 + g + 1), p = n + 4;
                        N[n >> 2] = g;
                        if (c && f) {
                          qb(e, E, p, g + 1);
                        } else {
                          if (f) {
                            for (f = 0; f < g; ++f) {
                              var l = e.charCodeAt(f);
                              255 < l && (Ec(p), V("String has UTF-16 code units that do not fit in 8 bits"));
                              E[p + f] = l;
                            }
                          } else {
                            for (f = 0; f < g; ++f) {
                              E[p + f] = e[f];
                            }
                          }
                        }
                        null !== d && d.push(Ec, n);
                        return n;
                      }, argPackAdvance: 8, readValueFromPointer: Sc, K: function(d) {
                        Ec(d);
                      } });
                    }, _embind_register_std_wstring: function(a, b, c) {
                      c = W(c);
                      if (2 === b) {
                        var d = yd;
                        var e = zd;
                        var f = Ad;
                        var g = () => Ea;
                        var n = 1;
                      } else {
                        4 === b && (d = Bd, e = Cd, f = Dd, g = () => N, n = 2);
                      }
                      Vc(a, { name: c, fromWireType: function(p) {
                        for (var l = N[p >> 2], u = g(), v, x = p + 4, k = 0; k <= l; ++k) {
                          var t = p + 4 + k * b;
                          if (k == l || 0 == u[t >> n]) {
                            x = d(x, t - x), void 0 === v ? v = x : (v += String.fromCharCode(0), v += x), x = t + b;
                          }
                        }
                        Ec(p);
                        return v;
                      }, toWireType: function(p, l) {
                        "string" != typeof l && V(`Cannot pass non-string to C++ string type ${c}`);
                        var u = f(l), v = Vd(4 + u + b);
                        N[v >> 2] = u >> n;
                        e(l, v + 4, u + b);
                        null !== p && p.push(Ec, v);
                        return v;
                      }, argPackAdvance: 8, readValueFromPointer: Sc, K: function(p) {
                        Ec(p);
                      } });
                    }, _embind_register_value_object: function(a, b, c, d, e, f) {
                      Qc[a] = { name: W(b), Pa: Z(c, d), W: Z(e, f), eb: [] };
                    }, _embind_register_value_object_field: function(a, b, c, d, e, f, g, n, p, l) {
                      Qc[a].eb.push({ Sb: W(b), Yb: c, Wb: Z(d, e), Xb: f, rc: g, qc: Z(n, p), sc: l });
                    }, _embind_register_void: function(a, b) {
                      b = W(b);
                      Vc(a, { fc: true, name: b, argPackAdvance: 0, fromWireType: function() {
                      }, toWireType: function() {
                      } });
                    }, _emscripten_get_now_is_monotonic: () => true, _emval_as: function(a, b, c) {
                      a = rc(a);
                      b = Fc(b, "emval::as");
                      var d = [], e = sc(d);
                      N[c >> 2] = e;
                      return b.toWireType(d, a);
                    }, _emval_call_method: function(a, b, c, d, e) {
                      a = Gd[a];
                      b = rc(b);
                      c = Fd(c);
                      var f = [];
                      N[d >> 2] = sc(f);
                      return a(b, c, f, e);
                    }, _emval_call_void_method: function(a, b, c, d) {
                      a = Gd[a];
                      b = rc(b);
                      c = Fd(c);
                      a(b, c, null, d);
                    }, _emval_decref: td, _emval_get_method_caller: function(a, b) {
                      var c = Id(a, b), d = c[0];
                      b = d.name + "_$" + c.slice(1).map(function(g) {
                        return g.name;
                      }).join("_") + "$";
                      var e = Jd[b];
                      if (void 0 !== e) {
                        return e;
                      }
                      var f = Array(a - 1);
                      e = Hd((g, n, p, l) => {
                        for (var u = 0, v = 0; v < a - 1; ++v) {
                          f[v] = c[v + 1].readValueFromPointer(l + u), u += c[v + 1].argPackAdvance;
                        }
                        g = g[n].apply(g, f);
                        for (v = 0; v < a - 1; ++v) {
                          c[v + 1].Nb && c[v + 1].Nb(f[v]);
                        }
                        if (!d.fc) {
                          return d.toWireType(p, g);
                        }
                      });
                      return Jd[b] = e;
                    }, _emval_get_module_property: function(a) {
                      a = Fd(a);
                      return sc(m[a]);
                    }, _emval_get_property: function(a, b) {
                      a = rc(a);
                      b = rc(b);
                      return sc(a[b]);
                    }, _emval_incref: function(a) {
                      4 < a && (U.get(a).tb += 1);
                    }, _emval_new_cstring: function(a) {
                      return sc(Fd(a));
                    }, _emval_new_object: function() {
                      return sc({});
                    }, _emval_run_destructors: function(a) {
                      var b = rc(a);
                      Rc(b);
                      td(a);
                    }, _emval_set_property: function(a, b, c) {
                      a = rc(a);
                      b = rc(b);
                      c = rc(c);
                      a[b] = c;
                    }, _emval_take_value: function(a, b) {
                      a = Fc(a, "_emval_take_value");
                      a = a.readValueFromPointer(b);
                      return sc(a);
                    }, abort: () => {
                      Aa("");
                    }, emscripten_asm_const_int: (a, b, c) => {
                      Kd.length = 0;
                      var d;
                      for (c >>= 2; d = E[b++]; ) {
                        c += 105 != d & c, Kd.push(105 == d ? L[c] : Ia[c++ >> 1]), ++c;
                      }
                      return db[a].apply(null, Kd);
                    }, emscripten_date_now: function() {
                      return Date.now();
                    }, emscripten_get_now: () => performance.now(), emscripten_memcpy_big: (a, b, c) => E.copyWithin(a, b, b + c), emscripten_resize_heap: (a) => {
                      var b = E.length;
                      a >>>= 0;
                      if (2147483648 < a) {
                        return false;
                      }
                      for (var c = 1; 4 >= c; c *= 2) {
                        var d = b * (1 + 0.2 / c);
                        d = Math.min(d, a + 100663296);
                        var e = Math;
                        d = Math.max(a, d);
                        a: {
                          e = e.min.call(e, 2147483648, d + (65536 - d % 65536) % 65536) - Ba.buffer.byteLength + 65535 >>> 16;
                          try {
                            Ba.grow(e);
                            Ja();
                            var f = 1;
                            break a;
                          } catch (g) {
                          }
                          f = void 0;
                        }
                        if (f) {
                          return true;
                        }
                      }
                      return false;
                    }, environ_get: (a, b) => {
                      var c = 0;
                      Nd().forEach(function(d, e) {
                        var f = b + c;
                        e = N[a + 4 * e >> 2] = f;
                        for (f = 0; f < d.length; ++f) {
                          B[e++ >> 0] = d.charCodeAt(f);
                        }
                        B[e >> 0] = 0;
                        c += d.length + 1;
                      });
                      return 0;
                    }, environ_sizes_get: (a, b) => {
                      var c = Nd();
                      N[a >> 2] = c.length;
                      var d = 0;
                      c.forEach(function(e) {
                        d += e.length + 1;
                      });
                      N[b >> 2] = d;
                      return 0;
                    }, fd_close: function(a) {
                      try {
                        var b = Tb(a);
                        if (null === b.X) {
                          throw new O(8);
                        }
                        b.Ma && (b.Ma = null);
                        try {
                          b.m.close && b.m.close(b);
                        } catch (c) {
                          throw c;
                        } finally {
                          Gb[b.X] = null;
                        }
                        b.X = null;
                        return 0;
                      } catch (c) {
                        if ("undefined" == typeof kc || "ErrnoError" !== c.name) {
                          throw c;
                        }
                        return c.aa;
                      }
                    }, fd_read: function(a, b, c, d) {
                      try {
                        a: {
                          var e = Tb(a);
                          a = b;
                          for (var f, g = b = 0; g < c; g++) {
                            var n = N[a >> 2], p = N[a + 4 >> 2];
                            a += 8;
                            var l = e, u = n, v = p, x = f, k = B;
                            if (0 > v || 0 > x) {
                              throw new O(28);
                            }
                            if (null === l.X) {
                              throw new O(8);
                            }
                            if (1 === (l.flags & 2097155)) {
                              throw new O(8);
                            }
                            if (16384 === (l.node.mode & 61440)) {
                              throw new O(31);
                            }
                            if (!l.m.read) {
                              throw new O(28);
                            }
                            var t = "undefined" != typeof x;
                            if (!t) {
                              x = l.position;
                            } else if (!l.seekable) {
                              throw new O(70);
                            }
                            var r = l.m.read(l, k, u, v, x);
                            t || (l.position += r);
                            var A = r;
                            if (0 > A) {
                              var D = -1;
                              break a;
                            }
                            b += A;
                            if (A < p) {
                              break;
                            }
                            "undefined" !== typeof f && (f += A);
                          }
                          D = b;
                        }
                        N[d >> 2] = D;
                        return 0;
                      } catch (w) {
                        if ("undefined" == typeof kc || "ErrnoError" !== w.name) {
                          throw w;
                        }
                        return w.aa;
                      }
                    }, fd_seek: function(a, b, c, d, e) {
                      b = c + 2097152 >>> 0 < 4194305 - !!b ? (b >>> 0) + 4294967296 * c : NaN;
                      try {
                        if (isNaN(b)) {
                          return 61;
                        }
                        var f = Tb(a);
                        fc(f, b, d);
                        $a = [f.position >>> 0, (Za = f.position, 1 <= +Math.abs(Za) ? 0 < Za ? +Math.floor(Za / 4294967296) >>> 0 : ~~+Math.ceil((Za - +(~~Za >>> 0)) / 4294967296) >>> 0 : 0)];
                        L[e >> 2] = $a[0];
                        L[e + 4 >> 2] = $a[1];
                        f.Ma && 0 === b && 0 === d && (f.Ma = null);
                        return 0;
                      } catch (g) {
                        if ("undefined" == typeof kc || "ErrnoError" !== g.name) {
                          throw g;
                        }
                        return g.aa;
                      }
                    }, fd_write: function(a, b, c, d) {
                      try {
                        a: {
                          var e = Tb(a);
                          a = b;
                          for (var f, g = b = 0; g < c; g++) {
                            var n = N[a >> 2], p = N[a + 4 >> 2];
                            a += 8;
                            var l = e, u = n, v = p, x = f, k = B;
                            if (0 > v || 0 > x) {
                              throw new O(28);
                            }
                            if (null === l.X) {
                              throw new O(8);
                            }
                            if (0 === (l.flags & 2097155)) {
                              throw new O(8);
                            }
                            if (16384 === (l.node.mode & 61440)) {
                              throw new O(31);
                            }
                            if (!l.m.write) {
                              throw new O(28);
                            }
                            l.seekable && l.flags & 1024 && fc(l, 0, 2);
                            var t = "undefined" != typeof x;
                            if (!t) {
                              x = l.position;
                            } else if (!l.seekable) {
                              throw new O(70);
                            }
                            var r = l.m.write(l, k, u, v, x, void 0);
                            t || (l.position += r);
                            var A = r;
                            if (0 > A) {
                              var D = -1;
                              break a;
                            }
                            b += A;
                            "undefined" !== typeof f && (f += A);
                          }
                          D = b;
                        }
                        N[d >> 2] = D;
                        return 0;
                      } catch (w) {
                        if ("undefined" == typeof kc || "ErrnoError" !== w.name) {
                          throw w;
                        }
                        return w.aa;
                      }
                    }, strftime_l: (a, b, c, d) => Rd(a, b, c, d) };
                    (function() {
                      function a(c) {
                        y = c = c.exports;
                        Ba = y.memory;
                        Ja();
                        Ka = y.__indirect_function_table;
                        Ma.unshift(y.__wasm_call_ctors);
                        Pa--;
                        m.monitorRunDependencies && m.monitorRunDependencies(Pa);
                        if (0 == Pa && (null !== Qa && (clearInterval(Qa), Qa = null), Ra)) {
                          var d = Ra;
                          Ra = null;
                          d();
                        }
                        return c;
                      }
                      var b = { env: Wd, wasi_snapshot_preview1: Wd };
                      Pa++;
                      m.monitorRunDependencies && m.monitorRunDependencies(Pa);
                      if (m.instantiateWasm) {
                        try {
                          return m.instantiateWasm(b, a);
                        } catch (c) {
                          xa("Module.instantiateWasm callback failed with error: " + c), ea(c);
                        }
                      }
                      Ya(b, function(c) {
                        a(c.instance);
                      }).catch(ea);
                      return {};
                    })();
                    var Ec = (a) => (Ec = y.free)(a), Vd = (a) => (Vd = y.malloc)(a), ab = m._ma_device__on_notification_unlocked = (a) => (ab = m._ma_device__on_notification_unlocked = y.ma_device__on_notification_unlocked)(a);
                    m._ma_malloc_emscripten = (a, b) => (m._ma_malloc_emscripten = y.ma_malloc_emscripten)(a, b);
                    m._ma_free_emscripten = (a, b) => (m._ma_free_emscripten = y.ma_free_emscripten)(a, b);
                    var bb = m._ma_device_process_pcm_frames_capture__webaudio = (a, b, c) => (bb = m._ma_device_process_pcm_frames_capture__webaudio = y.ma_device_process_pcm_frames_capture__webaudio)(a, b, c), cb = m._ma_device_process_pcm_frames_playback__webaudio = (a, b, c) => (cb = m._ma_device_process_pcm_frames_playback__webaudio = y.ma_device_process_pcm_frames_playback__webaudio)(a, b, c), Ud = () => (Ud = y.__errno_location)(), Dc = (a) => (Dc = y.__getTypeName)(a);
                    m.__embind_initialize_bindings = () => (m.__embind_initialize_bindings = y._embind_initialize_bindings)();
                    m.dynCall_iiji = (a, b, c, d, e) => (m.dynCall_iiji = y.dynCall_iiji)(a, b, c, d, e);
                    m.dynCall_jiji = (a, b, c, d, e) => (m.dynCall_jiji = y.dynCall_jiji)(a, b, c, d, e);
                    m.dynCall_iiiji = (a, b, c, d, e, f) => (m.dynCall_iiiji = y.dynCall_iiiji)(a, b, c, d, e, f);
                    m.dynCall_iij = (a, b, c, d) => (m.dynCall_iij = y.dynCall_iij)(a, b, c, d);
                    m.dynCall_jii = (a, b, c) => (m.dynCall_jii = y.dynCall_jii)(a, b, c);
                    m.dynCall_viijii = (a, b, c, d, e, f, g) => (m.dynCall_viijii = y.dynCall_viijii)(a, b, c, d, e, f, g);
                    m.dynCall_iiiiij = (a, b, c, d, e, f, g) => (m.dynCall_iiiiij = y.dynCall_iiiiij)(a, b, c, d, e, f, g);
                    m.dynCall_iiiiijj = (a, b, c, d, e, f, g, n, p) => (m.dynCall_iiiiijj = y.dynCall_iiiiijj)(a, b, c, d, e, f, g, n, p);
                    m.dynCall_iiiiiijj = (a, b, c, d, e, f, g, n, p, l) => (m.dynCall_iiiiiijj = y.dynCall_iiiiiijj)(a, b, c, d, e, f, g, n, p, l);
                    var Xd;
                    Ra = function Yd() {
                      Xd || Zd();
                      Xd || (Ra = Yd);
                    };
                    function Zd() {
                      function a() {
                        if (!Xd && (Xd = true, m.calledRun = true, !Ca)) {
                          m.noFSInit || hc || (hc = true, gc(), m.stdin = m.stdin, m.stdout = m.stdout, m.stderr = m.stderr, m.stdin ? jc("stdin", m.stdin) : cc("/dev/tty", "/dev/stdin"), m.stdout ? jc("stdout", null, m.stdout) : cc("/dev/tty", "/dev/stdout"), m.stderr ? jc("stderr", null, m.stderr) : cc("/dev/tty1", "/dev/stderr"), ec("/dev/stdin", 0), ec("/dev/stdout", 1), ec("/dev/stderr", 1));
                          Jb = false;
                          eb(Ma);
                          aa(m);
                          if (m.onRuntimeInitialized) {
                            m.onRuntimeInitialized();
                          }
                          if (m.postRun) {
                            for ("function" == typeof m.postRun && (m.postRun = [m.postRun]); m.postRun.length; ) {
                              var b = m.postRun.shift();
                              Na.unshift(b);
                            }
                          }
                          eb(Na);
                        }
                      }
                      if (!(0 < Pa)) {
                        if (m.preRun) {
                          for ("function" == typeof m.preRun && (m.preRun = [m.preRun]); m.preRun.length; ) {
                            Oa();
                          }
                        }
                        eb(La);
                        0 < Pa || (m.setStatus ? (m.setStatus("Running..."), setTimeout(function() {
                          setTimeout(function() {
                            m.setStatus("");
                          }, 1);
                          a();
                        }, 1)) : a());
                      }
                    }
                    if (m.preInit) {
                      for ("function" == typeof m.preInit && (m.preInit = [m.preInit]); 0 < m.preInit.length; ) {
                        m.preInit.pop()();
                      }
                    }
                    Zd();
                    return moduleArg.ready;
                  };
                })();
                const __WEBPACK_DEFAULT_EXPORT__ = Rive;
              },
              /* 2 */
              /***/
              (module2) => {
                module2.exports = JSON.parse(`{"name":"@rive-app/canvas","version":"2.21.3","description":"Rive's canvas based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.js.map","rive.wasm","rive_fallback.wasm","rive.d.ts","rive_advanced.mjs.d.ts"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}`);
              },
              /* 3 */
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  Animation: () => (
                    /* reexport safe */
                    _Animation__WEBPACK_IMPORTED_MODULE_0__.Animation
                  )
                  /* harmony export */
                });
                var _Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(4);
              },
              /* 4 */
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  Animation: () => (
                    /* binding */
                    Animation
                  )
                  /* harmony export */
                });
                var Animation = (
                  /** @class */
                  function() {
                    function Animation2(animation, artboard, runtime, playing) {
                      this.animation = animation;
                      this.artboard = artboard;
                      this.playing = playing;
                      this.loopCount = 0;
                      this.scrubTo = null;
                      this.instance = new runtime.LinearAnimationInstance(animation, artboard);
                    }
                    Object.defineProperty(Animation2.prototype, "name", {
                      /**
                       * Returns the animation's name
                       */
                      get: function() {
                        return this.animation.name;
                      },
                      enumerable: false,
                      configurable: true
                    });
                    Object.defineProperty(Animation2.prototype, "time", {
                      /**
                       * Returns the animation's name
                       */
                      get: function() {
                        return this.instance.time;
                      },
                      /**
                       * Sets the animation's current time
                       */
                      set: function(value) {
                        this.instance.time = value;
                      },
                      enumerable: false,
                      configurable: true
                    });
                    Object.defineProperty(Animation2.prototype, "loopValue", {
                      /**
                       * Returns the animation's loop type
                       */
                      get: function() {
                        return this.animation.loopValue;
                      },
                      enumerable: false,
                      configurable: true
                    });
                    Object.defineProperty(Animation2.prototype, "needsScrub", {
                      /**
                       * Indicates whether the animation needs to be scrubbed.
                       * @returns `true` if the animation needs to be scrubbed, `false` otherwise.
                       */
                      get: function() {
                        return this.scrubTo !== null;
                      },
                      enumerable: false,
                      configurable: true
                    });
                    Animation2.prototype.advance = function(time) {
                      if (this.scrubTo === null) {
                        this.instance.advance(time);
                      } else {
                        this.instance.time = 0;
                        this.instance.advance(this.scrubTo);
                        this.scrubTo = null;
                      }
                    };
                    Animation2.prototype.apply = function(mix) {
                      this.instance.apply(mix);
                    };
                    Animation2.prototype.cleanup = function() {
                      this.instance.delete();
                    };
                    return Animation2;
                  }()
                );
              },
              /* 5 */
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  BLANK_URL: () => (
                    /* reexport safe */
                    _sanitizeUrl__WEBPACK_IMPORTED_MODULE_1__.BLANK_URL
                  ),
                  /* harmony export */
                  registerTouchInteractions: () => (
                    /* reexport safe */
                    _registerTouchInteractions__WEBPACK_IMPORTED_MODULE_0__.registerTouchInteractions
                  ),
                  /* harmony export */
                  sanitizeUrl: () => (
                    /* reexport safe */
                    _sanitizeUrl__WEBPACK_IMPORTED_MODULE_1__.sanitizeUrl
                  )
                  /* harmony export */
                });
                var _registerTouchInteractions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(6);
                var _sanitizeUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(7);
              },
              /* 6 */
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  registerTouchInteractions: () => (
                    /* binding */
                    registerTouchInteractions
                  )
                  /* harmony export */
                });
                var _this = void 0;
                var getClientCoordinates = function(event, isTouchScrollEnabled) {
                  var _a, _b;
                  if (["touchstart", "touchmove"].indexOf(event.type) > -1 && ((_a = event.touches) === null || _a === void 0 ? void 0 : _a.length)) {
                    if (!isTouchScrollEnabled) {
                      event.preventDefault();
                    }
                    return {
                      clientX: event.touches[0].clientX,
                      clientY: event.touches[0].clientY
                    };
                  } else if (event.type === "touchend" && ((_b = event.changedTouches) === null || _b === void 0 ? void 0 : _b.length)) {
                    return {
                      clientX: event.changedTouches[0].clientX,
                      clientY: event.changedTouches[0].clientY
                    };
                  } else {
                    return {
                      clientX: event.clientX,
                      clientY: event.clientY
                    };
                  }
                };
                var registerTouchInteractions = function(_a) {
                  var canvas = _a.canvas, artboard = _a.artboard, _b = _a.stateMachines, stateMachines = _b === void 0 ? [] : _b, renderer = _a.renderer, rive = _a.rive, fit = _a.fit, alignment = _a.alignment, _c = _a.isTouchScrollEnabled, isTouchScrollEnabled = _c === void 0 ? false : _c;
                  if (!canvas || !stateMachines.length || !renderer || !rive || !artboard || typeof window === "undefined") {
                    return null;
                  }
                  var _prevEventType = null;
                  var _syntheticEventsActive = false;
                  var processEventCallback = function(event) {
                    if (_syntheticEventsActive && event instanceof MouseEvent) {
                      if (event.type == "mouseup") {
                        _syntheticEventsActive = false;
                      }
                      return;
                    }
                    _syntheticEventsActive = isTouchScrollEnabled && event.type === "touchend" && _prevEventType === "touchstart";
                    _prevEventType = event.type;
                    var boundingRect = event.currentTarget.getBoundingClientRect();
                    var _a2 = getClientCoordinates(event, isTouchScrollEnabled), clientX = _a2.clientX, clientY = _a2.clientY;
                    if (!clientX && !clientY) {
                      return;
                    }
                    var canvasX = clientX - boundingRect.left;
                    var canvasY = clientY - boundingRect.top;
                    var forwardMatrix = rive.computeAlignment(fit, alignment, {
                      minX: 0,
                      minY: 0,
                      maxX: boundingRect.width,
                      maxY: boundingRect.height
                    }, artboard.bounds);
                    var invertedMatrix = new rive.Mat2D();
                    forwardMatrix.invert(invertedMatrix);
                    var canvasCoordinatesVector = new rive.Vec2D(canvasX, canvasY);
                    var transformedVector = rive.mapXY(invertedMatrix, canvasCoordinatesVector);
                    var transformedX = transformedVector.x();
                    var transformedY = transformedVector.y();
                    transformedVector.delete();
                    invertedMatrix.delete();
                    canvasCoordinatesVector.delete();
                    forwardMatrix.delete();
                    switch (event.type) {
                      case "mouseout":
                        for (var _i = 0, stateMachines_1 = stateMachines; _i < stateMachines_1.length; _i++) {
                          var stateMachine = stateMachines_1[_i];
                          stateMachine.pointerMove(transformedX < 0 ? transformedX - 1e4 : transformedX + 1e4, transformedY < 0 ? transformedY - 1e4 : transformedY + 1e4);
                        }
                        break;
                      case "touchmove":
                      case "mouseover":
                      case "mousemove": {
                        for (var _b2 = 0, stateMachines_2 = stateMachines; _b2 < stateMachines_2.length; _b2++) {
                          var stateMachine = stateMachines_2[_b2];
                          stateMachine.pointerMove(transformedX, transformedY);
                        }
                        break;
                      }
                      case "touchstart":
                      case "mousedown": {
                        for (var _c2 = 0, stateMachines_3 = stateMachines; _c2 < stateMachines_3.length; _c2++) {
                          var stateMachine = stateMachines_3[_c2];
                          stateMachine.pointerDown(transformedX, transformedY);
                        }
                        break;
                      }
                      case "touchend":
                      case "mouseup": {
                        for (var _d = 0, stateMachines_4 = stateMachines; _d < stateMachines_4.length; _d++) {
                          var stateMachine = stateMachines_4[_d];
                          stateMachine.pointerUp(transformedX, transformedY);
                        }
                        break;
                      }
                      default:
                    }
                  };
                  var callback = processEventCallback.bind(_this);
                  canvas.addEventListener("mouseover", callback);
                  canvas.addEventListener("mouseout", callback);
                  canvas.addEventListener("mousemove", callback);
                  canvas.addEventListener("mousedown", callback);
                  canvas.addEventListener("mouseup", callback);
                  canvas.addEventListener("touchmove", callback, {
                    passive: isTouchScrollEnabled
                  });
                  canvas.addEventListener("touchstart", callback, {
                    passive: isTouchScrollEnabled
                  });
                  canvas.addEventListener("touchend", callback);
                  return function() {
                    canvas.removeEventListener("mouseover", callback);
                    canvas.removeEventListener("mouseout", callback);
                    canvas.removeEventListener("mousemove", callback);
                    canvas.removeEventListener("mousedown", callback);
                    canvas.removeEventListener("mouseup", callback);
                    canvas.removeEventListener("touchmove", callback);
                    canvas.removeEventListener("touchstart", callback);
                    canvas.removeEventListener("touchend", callback);
                  };
                };
              },
              /* 7 */
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  BLANK_URL: () => (
                    /* binding */
                    BLANK_URL
                  ),
                  /* harmony export */
                  sanitizeUrl: () => (
                    /* binding */
                    sanitizeUrl
                  )
                  /* harmony export */
                });
                var invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
                var htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
                var htmlCtrlEntityRegex = /&(newline|tab);/gi;
                var ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
                var urlSchemeRegex = /^.+(:|&colon;)/gim;
                var relativeFirstCharacters = [".", "/"];
                var BLANK_URL = "about:blank";
                function isRelativeUrlWithoutProtocol(url) {
                  return relativeFirstCharacters.indexOf(url[0]) > -1;
                }
                function decodeHtmlCharacters(str) {
                  var removedNullByte = str.replace(ctrlCharactersRegex, "");
                  return removedNullByte.replace(htmlEntitiesRegex, function(match, dec) {
                    return String.fromCharCode(dec);
                  });
                }
                function sanitizeUrl(url) {
                  if (!url) {
                    return BLANK_URL;
                  }
                  var sanitizedUrl = decodeHtmlCharacters(url).replace(htmlCtrlEntityRegex, "").replace(ctrlCharactersRegex, "").trim();
                  if (!sanitizedUrl) {
                    return BLANK_URL;
                  }
                  if (isRelativeUrlWithoutProtocol(sanitizedUrl)) {
                    return sanitizedUrl;
                  }
                  var urlSchemeParseResults = sanitizedUrl.match(urlSchemeRegex);
                  if (!urlSchemeParseResults) {
                    return sanitizedUrl;
                  }
                  var urlScheme = urlSchemeParseResults[0];
                  if (invalidProtocolRegex.test(urlScheme)) {
                    return BLANK_URL;
                  }
                  return sanitizedUrl;
                }
              }
              /******/
            ];
            var __webpack_module_cache__ = {};
            function __webpack_require__(moduleId) {
              var cachedModule = __webpack_module_cache__[moduleId];
              if (cachedModule !== void 0) {
                return cachedModule.exports;
              }
              var module2 = __webpack_module_cache__[moduleId] = {
                /******/
                // no module.id needed
                /******/
                // no module.loaded needed
                /******/
                exports: {}
                /******/
              };
              __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
              return module2.exports;
            }
            (() => {
              __webpack_require__.d = (exports2, definition) => {
                for (var key in definition) {
                  if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                    Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
                  }
                }
              };
            })();
            (() => {
              __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
            })();
            (() => {
              __webpack_require__.r = (exports2) => {
                if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
                }
                Object.defineProperty(exports2, "__esModule", { value: true });
              };
            })();
            var __webpack_exports__ = {};
            (() => {
              __webpack_require__.r(__webpack_exports__);
              __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                Alignment: () => (
                  /* binding */
                  Alignment
                ),
                /* harmony export */
                EventType: () => (
                  /* binding */
                  EventType
                ),
                /* harmony export */
                Fit: () => (
                  /* binding */
                  Fit
                ),
                /* harmony export */
                Layout: () => (
                  /* binding */
                  Layout
                ),
                /* harmony export */
                LoopType: () => (
                  /* binding */
                  LoopType
                ),
                /* harmony export */
                Rive: () => (
                  /* binding */
                  Rive
                ),
                /* harmony export */
                RiveEventType: () => (
                  /* binding */
                  RiveEventType
                ),
                /* harmony export */
                RiveFile: () => (
                  /* binding */
                  RiveFile
                ),
                /* harmony export */
                RuntimeLoader: () => (
                  /* binding */
                  RuntimeLoader
                ),
                /* harmony export */
                StateMachineInput: () => (
                  /* binding */
                  StateMachineInput
                ),
                /* harmony export */
                StateMachineInputType: () => (
                  /* binding */
                  StateMachineInputType
                ),
                /* harmony export */
                Testing: () => (
                  /* binding */
                  Testing
                ),
                /* harmony export */
                decodeAudio: () => (
                  /* binding */
                  decodeAudio
                ),
                /* harmony export */
                decodeFont: () => (
                  /* binding */
                  decodeFont
                ),
                /* harmony export */
                decodeImage: () => (
                  /* binding */
                  decodeImage
                )
                /* harmony export */
              });
              var _rive_advanced_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
              var package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
              var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
              var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
              var __extends = function() {
                var extendStatics = function(d, b) {
                  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                    d2.__proto__ = b2;
                  } || function(d2, b2) {
                    for (var p in b2)
                      if (Object.prototype.hasOwnProperty.call(b2, p))
                        d2[p] = b2[p];
                  };
                  return extendStatics(d, b);
                };
                return function(d, b) {
                  if (typeof b !== "function" && b !== null)
                    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                  extendStatics(d, b);
                  function __() {
                    this.constructor = d;
                  }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
              }();
              var __awaiter = function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                  return value instanceof P ? value : new P(function(resolve) {
                    resolve(value);
                  });
                }
                return new (P || (P = Promise))(function(resolve, reject) {
                  function fulfilled(value) {
                    try {
                      step(generator.next(value));
                    } catch (e) {
                      reject(e);
                    }
                  }
                  function rejected(value) {
                    try {
                      step(generator["throw"](value));
                    } catch (e) {
                      reject(e);
                    }
                  }
                  function step(result) {
                    result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                  }
                  step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
              };
              var __generator = function(thisArg, body) {
                var _ = { label: 0, sent: function() {
                  if (t[0] & 1)
                    throw t[1];
                  return t[1];
                }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                  return this;
                }), g;
                function verb(n) {
                  return function(v) {
                    return step([n, v]);
                  };
                }
                function step(op) {
                  if (f)
                    throw new TypeError("Generator is already executing.");
                  while (g && (g = 0, op[0] && (_ = 0)), _)
                    try {
                      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                      if (y = 0, t)
                        op = [op[0] & 2, t.value];
                      switch (op[0]) {
                        case 0:
                        case 1:
                          t = op;
                          break;
                        case 4:
                          _.label++;
                          return { value: op[1], done: false };
                        case 5:
                          _.label++;
                          y = op[1];
                          op = [0];
                          continue;
                        case 7:
                          op = _.ops.pop();
                          _.trys.pop();
                          continue;
                        default:
                          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                          }
                          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];
                            break;
                          }
                          if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                          }
                          if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                          }
                          if (t[2])
                            _.ops.pop();
                          _.trys.pop();
                          continue;
                      }
                      op = body.call(thisArg, _);
                    } catch (e) {
                      op = [6, e];
                      y = 0;
                    } finally {
                      f = t = 0;
                    }
                  if (op[0] & 5)
                    throw op[1];
                  return { value: op[0] ? op[1] : void 0, done: true };
                }
              };
              var Fit;
              (function(Fit2) {
                Fit2["Cover"] = "cover";
                Fit2["Contain"] = "contain";
                Fit2["Fill"] = "fill";
                Fit2["FitWidth"] = "fitWidth";
                Fit2["FitHeight"] = "fitHeight";
                Fit2["None"] = "none";
                Fit2["ScaleDown"] = "scaleDown";
              })(Fit || (Fit = {}));
              var Alignment;
              (function(Alignment2) {
                Alignment2["Center"] = "center";
                Alignment2["TopLeft"] = "topLeft";
                Alignment2["TopCenter"] = "topCenter";
                Alignment2["TopRight"] = "topRight";
                Alignment2["CenterLeft"] = "centerLeft";
                Alignment2["CenterRight"] = "centerRight";
                Alignment2["BottomLeft"] = "bottomLeft";
                Alignment2["BottomCenter"] = "bottomCenter";
                Alignment2["BottomRight"] = "bottomRight";
              })(Alignment || (Alignment = {}));
              var Layout = (
                /** @class */
                function() {
                  function Layout2(params) {
                    var _a, _b, _c, _d, _e, _f;
                    this.fit = (_a = params === null || params === void 0 ? void 0 : params.fit) !== null && _a !== void 0 ? _a : Fit.Contain;
                    this.alignment = (_b = params === null || params === void 0 ? void 0 : params.alignment) !== null && _b !== void 0 ? _b : Alignment.Center;
                    this.minX = (_c = params === null || params === void 0 ? void 0 : params.minX) !== null && _c !== void 0 ? _c : 0;
                    this.minY = (_d = params === null || params === void 0 ? void 0 : params.minY) !== null && _d !== void 0 ? _d : 0;
                    this.maxX = (_e = params === null || params === void 0 ? void 0 : params.maxX) !== null && _e !== void 0 ? _e : 0;
                    this.maxY = (_f = params === null || params === void 0 ? void 0 : params.maxY) !== null && _f !== void 0 ? _f : 0;
                  }
                  Layout2.new = function(_a) {
                    var fit = _a.fit, alignment = _a.alignment, minX = _a.minX, minY = _a.minY, maxX = _a.maxX, maxY = _a.maxY;
                    console.warn("This function is deprecated: please use `new Layout({})` instead");
                    return new Layout2({ fit, alignment, minX, minY, maxX, maxY });
                  };
                  Layout2.prototype.copyWith = function(_a) {
                    var fit = _a.fit, alignment = _a.alignment, minX = _a.minX, minY = _a.minY, maxX = _a.maxX, maxY = _a.maxY;
                    return new Layout2({
                      fit: fit !== null && fit !== void 0 ? fit : this.fit,
                      alignment: alignment !== null && alignment !== void 0 ? alignment : this.alignment,
                      minX: minX !== null && minX !== void 0 ? minX : this.minX,
                      minY: minY !== null && minY !== void 0 ? minY : this.minY,
                      maxX: maxX !== null && maxX !== void 0 ? maxX : this.maxX,
                      maxY: maxY !== null && maxY !== void 0 ? maxY : this.maxY
                    });
                  };
                  Layout2.prototype.runtimeFit = function(rive) {
                    if (this.cachedRuntimeFit)
                      return this.cachedRuntimeFit;
                    var fit;
                    if (this.fit === Fit.Cover)
                      fit = rive.Fit.cover;
                    else if (this.fit === Fit.Contain)
                      fit = rive.Fit.contain;
                    else if (this.fit === Fit.Fill)
                      fit = rive.Fit.fill;
                    else if (this.fit === Fit.FitWidth)
                      fit = rive.Fit.fitWidth;
                    else if (this.fit === Fit.FitHeight)
                      fit = rive.Fit.fitHeight;
                    else if (this.fit === Fit.ScaleDown)
                      fit = rive.Fit.scaleDown;
                    else
                      fit = rive.Fit.none;
                    this.cachedRuntimeFit = fit;
                    return fit;
                  };
                  Layout2.prototype.runtimeAlignment = function(rive) {
                    if (this.cachedRuntimeAlignment)
                      return this.cachedRuntimeAlignment;
                    var alignment;
                    if (this.alignment === Alignment.TopLeft)
                      alignment = rive.Alignment.topLeft;
                    else if (this.alignment === Alignment.TopCenter)
                      alignment = rive.Alignment.topCenter;
                    else if (this.alignment === Alignment.TopRight)
                      alignment = rive.Alignment.topRight;
                    else if (this.alignment === Alignment.CenterLeft)
                      alignment = rive.Alignment.centerLeft;
                    else if (this.alignment === Alignment.CenterRight)
                      alignment = rive.Alignment.centerRight;
                    else if (this.alignment === Alignment.BottomLeft)
                      alignment = rive.Alignment.bottomLeft;
                    else if (this.alignment === Alignment.BottomCenter)
                      alignment = rive.Alignment.bottomCenter;
                    else if (this.alignment === Alignment.BottomRight)
                      alignment = rive.Alignment.bottomRight;
                    else
                      alignment = rive.Alignment.center;
                    this.cachedRuntimeAlignment = alignment;
                    return alignment;
                  };
                  return Layout2;
                }()
              );
              var RuntimeLoader = (
                /** @class */
                function() {
                  function RuntimeLoader2() {
                  }
                  RuntimeLoader2.loadRuntime = function() {
                    _rive_advanced_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]({
                      // Loads Wasm bundle
                      locateFile: function() {
                        return RuntimeLoader2.wasmURL;
                      }
                    }).then(function(rive) {
                      var _a;
                      RuntimeLoader2.runtime = rive;
                      while (RuntimeLoader2.callBackQueue.length > 0) {
                        (_a = RuntimeLoader2.callBackQueue.shift()) === null || _a === void 0 ? void 0 : _a(RuntimeLoader2.runtime);
                      }
                    }).catch(function() {
                      var backupJsdelivrUrl = "https://cdn.jsdelivr.net/npm/".concat(package_json__WEBPACK_IMPORTED_MODULE_1__.name, "@").concat(package_json__WEBPACK_IMPORTED_MODULE_1__.version, "/rive_fallback.wasm");
                      if (RuntimeLoader2.wasmURL.toLowerCase() !== backupJsdelivrUrl) {
                        console.warn("Failed to load WASM from ".concat(RuntimeLoader2.wasmURL, ", trying jsdelivr as a backup"));
                        RuntimeLoader2.setWasmUrl(backupJsdelivrUrl);
                        RuntimeLoader2.loadRuntime();
                      } else {
                        console.error("Could not load Rive WASM file from unpkg or jsdelivr, network connection may be down, or         you may need to call set a new WASM source via RuntimeLoader.setWasmUrl() and call         RuntimeLoader.loadRuntime() again");
                      }
                    });
                  };
                  RuntimeLoader2.getInstance = function(callback) {
                    if (!RuntimeLoader2.isLoading) {
                      RuntimeLoader2.isLoading = true;
                      RuntimeLoader2.loadRuntime();
                    }
                    if (!RuntimeLoader2.runtime) {
                      RuntimeLoader2.callBackQueue.push(callback);
                    } else {
                      callback(RuntimeLoader2.runtime);
                    }
                  };
                  RuntimeLoader2.awaitInstance = function() {
                    return new Promise(function(resolve) {
                      return RuntimeLoader2.getInstance(function(rive) {
                        return resolve(rive);
                      });
                    });
                  };
                  RuntimeLoader2.setWasmUrl = function(url) {
                    RuntimeLoader2.wasmURL = url;
                  };
                  RuntimeLoader2.isLoading = false;
                  RuntimeLoader2.callBackQueue = [];
                  RuntimeLoader2.wasmURL = "https://unpkg.com/".concat(package_json__WEBPACK_IMPORTED_MODULE_1__.name, "@").concat(package_json__WEBPACK_IMPORTED_MODULE_1__.version, "/rive.wasm");
                  return RuntimeLoader2;
                }()
              );
              var StateMachineInputType;
              (function(StateMachineInputType2) {
                StateMachineInputType2[StateMachineInputType2["Number"] = 56] = "Number";
                StateMachineInputType2[StateMachineInputType2["Trigger"] = 58] = "Trigger";
                StateMachineInputType2[StateMachineInputType2["Boolean"] = 59] = "Boolean";
              })(StateMachineInputType || (StateMachineInputType = {}));
              var StateMachineInput = (
                /** @class */
                function() {
                  function StateMachineInput2(type, runtimeInput) {
                    this.type = type;
                    this.runtimeInput = runtimeInput;
                  }
                  Object.defineProperty(StateMachineInput2.prototype, "name", {
                    /**
                     * Returns the name of the input
                     */
                    get: function() {
                      return this.runtimeInput.name;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(StateMachineInput2.prototype, "value", {
                    /**
                     * Returns the current value of the input
                     */
                    get: function() {
                      return this.runtimeInput.value;
                    },
                    /**
                     * Sets the value of the input
                     */
                    set: function(value) {
                      this.runtimeInput.value = value;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  StateMachineInput2.prototype.fire = function() {
                    if (this.type === StateMachineInputType.Trigger) {
                      this.runtimeInput.fire();
                    }
                  };
                  return StateMachineInput2;
                }()
              );
              var RiveEventType;
              (function(RiveEventType2) {
                RiveEventType2[RiveEventType2["General"] = 128] = "General";
                RiveEventType2[RiveEventType2["OpenUrl"] = 131] = "OpenUrl";
              })(RiveEventType || (RiveEventType = {}));
              var StateMachine = (
                /** @class */
                function() {
                  function StateMachine2(stateMachine, runtime, playing, artboard) {
                    this.stateMachine = stateMachine;
                    this.playing = playing;
                    this.artboard = artboard;
                    this.inputs = [];
                    this.instance = new runtime.StateMachineInstance(stateMachine, artboard);
                    this.initInputs(runtime);
                  }
                  Object.defineProperty(StateMachine2.prototype, "name", {
                    get: function() {
                      return this.stateMachine.name;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(StateMachine2.prototype, "statesChanged", {
                    /**
                     * Returns a list of state names that have changed on this frame
                     */
                    get: function() {
                      var names = [];
                      for (var i = 0; i < this.instance.stateChangedCount(); i++) {
                        names.push(this.instance.stateChangedNameByIndex(i));
                      }
                      return names;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  StateMachine2.prototype.advance = function(time) {
                    this.instance.advance(time);
                  };
                  StateMachine2.prototype.reportedEventCount = function() {
                    return this.instance.reportedEventCount();
                  };
                  StateMachine2.prototype.reportedEventAt = function(i) {
                    return this.instance.reportedEventAt(i);
                  };
                  StateMachine2.prototype.initInputs = function(runtime) {
                    for (var i = 0; i < this.instance.inputCount(); i++) {
                      var input = this.instance.input(i);
                      this.inputs.push(this.mapRuntimeInput(input, runtime));
                    }
                  };
                  StateMachine2.prototype.mapRuntimeInput = function(input, runtime) {
                    if (input.type === runtime.SMIInput.bool) {
                      return new StateMachineInput(StateMachineInputType.Boolean, input.asBool());
                    } else if (input.type === runtime.SMIInput.number) {
                      return new StateMachineInput(StateMachineInputType.Number, input.asNumber());
                    } else if (input.type === runtime.SMIInput.trigger) {
                      return new StateMachineInput(StateMachineInputType.Trigger, input.asTrigger());
                    }
                  };
                  StateMachine2.prototype.cleanup = function() {
                    this.instance.delete();
                  };
                  return StateMachine2;
                }()
              );
              var Animator = (
                /** @class */
                function() {
                  function Animator2(runtime, artboard, eventManager, animations, stateMachines) {
                    if (animations === void 0) {
                      animations = [];
                    }
                    if (stateMachines === void 0) {
                      stateMachines = [];
                    }
                    this.runtime = runtime;
                    this.artboard = artboard;
                    this.eventManager = eventManager;
                    this.animations = animations;
                    this.stateMachines = stateMachines;
                  }
                  Animator2.prototype.add = function(animatables, playing, fireEvent) {
                    if (fireEvent === void 0) {
                      fireEvent = true;
                    }
                    animatables = mapToStringArray(animatables);
                    if (animatables.length === 0) {
                      this.animations.forEach(function(a) {
                        return a.playing = playing;
                      });
                      this.stateMachines.forEach(function(m) {
                        return m.playing = playing;
                      });
                    } else {
                      var instancedAnimationNames = this.animations.map(function(a) {
                        return a.name;
                      });
                      var instancedMachineNames = this.stateMachines.map(function(m) {
                        return m.name;
                      });
                      for (var i = 0; i < animatables.length; i++) {
                        var aIndex = instancedAnimationNames.indexOf(animatables[i]);
                        var mIndex = instancedMachineNames.indexOf(animatables[i]);
                        if (aIndex >= 0 || mIndex >= 0) {
                          if (aIndex >= 0) {
                            this.animations[aIndex].playing = playing;
                          } else {
                            this.stateMachines[mIndex].playing = playing;
                          }
                        } else {
                          var anim = this.artboard.animationByName(animatables[i]);
                          if (anim) {
                            var newAnimation = new _animation__WEBPACK_IMPORTED_MODULE_2__.Animation(anim, this.artboard, this.runtime, playing);
                            newAnimation.advance(0);
                            newAnimation.apply(1);
                            this.animations.push(newAnimation);
                          } else {
                            var sm = this.artboard.stateMachineByName(animatables[i]);
                            if (sm) {
                              var newStateMachine = new StateMachine(sm, this.runtime, playing, this.artboard);
                              this.stateMachines.push(newStateMachine);
                            }
                          }
                        }
                      }
                    }
                    if (fireEvent) {
                      if (playing) {
                        this.eventManager.fire({
                          type: EventType.Play,
                          data: this.playing
                        });
                      } else {
                        this.eventManager.fire({
                          type: EventType.Pause,
                          data: this.paused
                        });
                      }
                    }
                    return playing ? this.playing : this.paused;
                  };
                  Animator2.prototype.initLinearAnimations = function(animatables, playing) {
                    var instancedAnimationNames = this.animations.map(function(a) {
                      return a.name;
                    });
                    for (var i = 0; i < animatables.length; i++) {
                      var aIndex = instancedAnimationNames.indexOf(animatables[i]);
                      if (aIndex >= 0) {
                        this.animations[aIndex].playing = playing;
                      } else {
                        var anim = this.artboard.animationByName(animatables[i]);
                        if (anim) {
                          var newAnimation = new _animation__WEBPACK_IMPORTED_MODULE_2__.Animation(anim, this.artboard, this.runtime, playing);
                          newAnimation.advance(0);
                          newAnimation.apply(1);
                          this.animations.push(newAnimation);
                        }
                      }
                    }
                  };
                  Animator2.prototype.initStateMachines = function(animatables, playing) {
                    var instancedStateMachineNames = this.stateMachines.map(function(a) {
                      return a.name;
                    });
                    for (var i = 0; i < animatables.length; i++) {
                      var aIndex = instancedStateMachineNames.indexOf(animatables[i]);
                      if (aIndex >= 0) {
                        this.stateMachines[aIndex].playing = playing;
                      } else {
                        var sm = this.artboard.stateMachineByName(animatables[i]);
                        if (sm) {
                          var newStateMachine = new StateMachine(sm, this.runtime, playing, this.artboard);
                          this.stateMachines.push(newStateMachine);
                        } else {
                          this.initLinearAnimations([animatables[i]], playing);
                        }
                      }
                    }
                  };
                  Animator2.prototype.play = function(animatables) {
                    return this.add(animatables, true);
                  };
                  Animator2.prototype.pause = function(animatables) {
                    return this.add(animatables, false);
                  };
                  Animator2.prototype.scrub = function(animatables, value) {
                    var forScrubbing = this.animations.filter(function(a) {
                      return animatables.includes(a.name);
                    });
                    forScrubbing.forEach(function(a) {
                      return a.scrubTo = value;
                    });
                    return forScrubbing.map(function(a) {
                      return a.name;
                    });
                  };
                  Object.defineProperty(Animator2.prototype, "playing", {
                    /**
                     * Returns a list of names of all animations and state machines currently
                     * playing
                     */
                    get: function() {
                      return this.animations.filter(function(a) {
                        return a.playing;
                      }).map(function(a) {
                        return a.name;
                      }).concat(this.stateMachines.filter(function(m) {
                        return m.playing;
                      }).map(function(m) {
                        return m.name;
                      }));
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(Animator2.prototype, "paused", {
                    /**
                     * Returns a list of names of all animations and state machines currently
                     * paused
                     */
                    get: function() {
                      return this.animations.filter(function(a) {
                        return !a.playing;
                      }).map(function(a) {
                        return a.name;
                      }).concat(this.stateMachines.filter(function(m) {
                        return !m.playing;
                      }).map(function(m) {
                        return m.name;
                      }));
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Animator2.prototype.stop = function(animatables) {
                    var _this = this;
                    animatables = mapToStringArray(animatables);
                    var removedNames = [];
                    if (animatables.length === 0) {
                      removedNames = this.animations.map(function(a) {
                        return a.name;
                      }).concat(this.stateMachines.map(function(m) {
                        return m.name;
                      }));
                      this.animations.forEach(function(a) {
                        return a.cleanup();
                      });
                      this.stateMachines.forEach(function(m) {
                        return m.cleanup();
                      });
                      this.animations.splice(0, this.animations.length);
                      this.stateMachines.splice(0, this.stateMachines.length);
                    } else {
                      var animationsToRemove = this.animations.filter(function(a) {
                        return animatables.includes(a.name);
                      });
                      animationsToRemove.forEach(function(a) {
                        a.cleanup();
                        _this.animations.splice(_this.animations.indexOf(a), 1);
                      });
                      var machinesToRemove = this.stateMachines.filter(function(m) {
                        return animatables.includes(m.name);
                      });
                      machinesToRemove.forEach(function(m) {
                        m.cleanup();
                        _this.stateMachines.splice(_this.stateMachines.indexOf(m), 1);
                      });
                      removedNames = animationsToRemove.map(function(a) {
                        return a.name;
                      }).concat(machinesToRemove.map(function(m) {
                        return m.name;
                      }));
                    }
                    this.eventManager.fire({
                      type: EventType.Stop,
                      data: removedNames
                    });
                    return removedNames;
                  };
                  Object.defineProperty(Animator2.prototype, "isPlaying", {
                    /**
                     * Returns true if at least one animation is active
                     */
                    get: function() {
                      return this.animations.reduce(function(acc, curr) {
                        return acc || curr.playing;
                      }, false) || this.stateMachines.reduce(function(acc, curr) {
                        return acc || curr.playing;
                      }, false);
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(Animator2.prototype, "isPaused", {
                    /**
                     * Returns true if all animations are paused and there's at least one animation
                     */
                    get: function() {
                      return !this.isPlaying && (this.animations.length > 0 || this.stateMachines.length > 0);
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(Animator2.prototype, "isStopped", {
                    /**
                     * Returns true if there are no playing or paused animations/state machines
                     */
                    get: function() {
                      return this.animations.length === 0 && this.stateMachines.length === 0;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Animator2.prototype.atLeastOne = function(playing, fireEvent) {
                    if (fireEvent === void 0) {
                      fireEvent = true;
                    }
                    var instancedName;
                    if (this.animations.length === 0 && this.stateMachines.length === 0) {
                      if (this.artboard.animationCount() > 0) {
                        this.add([instancedName = this.artboard.animationByIndex(0).name], playing, fireEvent);
                      } else if (this.artboard.stateMachineCount() > 0) {
                        this.add([instancedName = this.artboard.stateMachineByIndex(0).name], playing, fireEvent);
                      }
                    }
                    return instancedName;
                  };
                  Animator2.prototype.handleLooping = function() {
                    for (var _i = 0, _a = this.animations.filter(function(a) {
                      return a.playing;
                    }); _i < _a.length; _i++) {
                      var animation = _a[_i];
                      if (animation.loopValue === 0 && animation.loopCount) {
                        animation.loopCount = 0;
                        this.stop(animation.name);
                      } else if (animation.loopValue === 1 && animation.loopCount) {
                        this.eventManager.fire({
                          type: EventType.Loop,
                          data: { animation: animation.name, type: LoopType.Loop }
                        });
                        animation.loopCount = 0;
                      } else if (animation.loopValue === 2 && animation.loopCount > 1) {
                        this.eventManager.fire({
                          type: EventType.Loop,
                          data: { animation: animation.name, type: LoopType.PingPong }
                        });
                        animation.loopCount = 0;
                      }
                    }
                  };
                  Animator2.prototype.handleStateChanges = function() {
                    var statesChanged = [];
                    for (var _i = 0, _a = this.stateMachines.filter(function(sm) {
                      return sm.playing;
                    }); _i < _a.length; _i++) {
                      var stateMachine = _a[_i];
                      statesChanged.push.apply(statesChanged, stateMachine.statesChanged);
                    }
                    if (statesChanged.length > 0) {
                      this.eventManager.fire({
                        type: EventType.StateChange,
                        data: statesChanged
                      });
                    }
                  };
                  Animator2.prototype.handleAdvancing = function(time) {
                    this.eventManager.fire({
                      type: EventType.Advance,
                      data: time
                    });
                  };
                  return Animator2;
                }()
              );
              var EventType;
              (function(EventType2) {
                EventType2["Load"] = "load";
                EventType2["LoadError"] = "loaderror";
                EventType2["Play"] = "play";
                EventType2["Pause"] = "pause";
                EventType2["Stop"] = "stop";
                EventType2["Loop"] = "loop";
                EventType2["Draw"] = "draw";
                EventType2["Advance"] = "advance";
                EventType2["StateChange"] = "statechange";
                EventType2["RiveEvent"] = "riveevent";
                EventType2["AudioStatusChange"] = "audiostatuschange";
              })(EventType || (EventType = {}));
              var LoopType;
              (function(LoopType2) {
                LoopType2["OneShot"] = "oneshot";
                LoopType2["Loop"] = "loop";
                LoopType2["PingPong"] = "pingpong";
              })(LoopType || (LoopType = {}));
              var EventManager = (
                /** @class */
                function() {
                  function EventManager2(listeners) {
                    if (listeners === void 0) {
                      listeners = [];
                    }
                    this.listeners = listeners;
                  }
                  EventManager2.prototype.getListeners = function(type) {
                    return this.listeners.filter(function(e) {
                      return e.type === type;
                    });
                  };
                  EventManager2.prototype.add = function(listener) {
                    if (!this.listeners.includes(listener)) {
                      this.listeners.push(listener);
                    }
                  };
                  EventManager2.prototype.remove = function(listener) {
                    for (var i = 0; i < this.listeners.length; i++) {
                      var currentListener = this.listeners[i];
                      if (currentListener.type === listener.type) {
                        if (currentListener.callback === listener.callback) {
                          this.listeners.splice(i, 1);
                          break;
                        }
                      }
                    }
                  };
                  EventManager2.prototype.removeAll = function(type) {
                    var _this = this;
                    if (!type) {
                      this.listeners.splice(0, this.listeners.length);
                    } else {
                      this.listeners.filter(function(l) {
                        return l.type === type;
                      }).forEach(function(l) {
                        return _this.remove(l);
                      });
                    }
                  };
                  EventManager2.prototype.fire = function(event) {
                    var eventListeners = this.getListeners(event.type);
                    eventListeners.forEach(function(listener) {
                      return listener.callback(event);
                    });
                  };
                  return EventManager2;
                }()
              );
              var TaskQueueManager = (
                /** @class */
                function() {
                  function TaskQueueManager2(eventManager) {
                    this.eventManager = eventManager;
                    this.queue = [];
                  }
                  TaskQueueManager2.prototype.add = function(task) {
                    this.queue.push(task);
                  };
                  TaskQueueManager2.prototype.process = function() {
                    while (this.queue.length > 0) {
                      var task = this.queue.shift();
                      if (task === null || task === void 0 ? void 0 : task.action) {
                        task.action();
                      }
                      if (task === null || task === void 0 ? void 0 : task.event) {
                        this.eventManager.fire(task.event);
                      }
                    }
                  };
                  return TaskQueueManager2;
                }()
              );
              var SystemAudioStatus;
              (function(SystemAudioStatus2) {
                SystemAudioStatus2[SystemAudioStatus2["AVAILABLE"] = 0] = "AVAILABLE";
                SystemAudioStatus2[SystemAudioStatus2["UNAVAILABLE"] = 1] = "UNAVAILABLE";
              })(SystemAudioStatus || (SystemAudioStatus = {}));
              var AudioManager = (
                /** @class */
                function(_super) {
                  __extends(AudioManager2, _super);
                  function AudioManager2() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this._started = false;
                    _this._enabled = false;
                    _this._status = SystemAudioStatus.UNAVAILABLE;
                    return _this;
                  }
                  AudioManager2.prototype.delay = function(time) {
                    return __awaiter(this, void 0, void 0, function() {
                      return __generator(this, function(_a) {
                        return [2, new Promise(function(resolve) {
                          return setTimeout(resolve, time);
                        })];
                      });
                    });
                  };
                  AudioManager2.prototype.timeout = function() {
                    return __awaiter(this, void 0, void 0, function() {
                      return __generator(this, function(_a) {
                        return [2, new Promise(function(_, reject) {
                          return setTimeout(reject, 50);
                        })];
                      });
                    });
                  };
                  AudioManager2.prototype.reportToListeners = function() {
                    this.fire({ type: EventType.AudioStatusChange });
                    this.removeAll();
                  };
                  AudioManager2.prototype.enableAudio = function() {
                    return __awaiter(this, void 0, void 0, function() {
                      return __generator(this, function(_a) {
                        if (!this._enabled) {
                          this._enabled = true;
                          this._status = SystemAudioStatus.AVAILABLE;
                          this.reportToListeners();
                        }
                        return [
                          2
                          /*return*/
                        ];
                      });
                    });
                  };
                  AudioManager2.prototype.testAudio = function() {
                    return __awaiter(this, void 0, void 0, function() {
                      var _a;
                      return __generator(this, function(_b) {
                        switch (_b.label) {
                          case 0:
                            if (!(this._status === SystemAudioStatus.UNAVAILABLE && this._audioContext !== null))
                              return [3, 4];
                            _b.label = 1;
                          case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4, Promise.race([this._audioContext.resume(), this.timeout()])];
                          case 2:
                            _b.sent();
                            this.enableAudio();
                            return [3, 4];
                          case 3:
                            _a = _b.sent();
                            return [3, 4];
                          case 4:
                            return [
                              2
                              /*return*/
                            ];
                        }
                      });
                    });
                  };
                  AudioManager2.prototype._establishAudio = function() {
                    return __awaiter(this, void 0, void 0, function() {
                      return __generator(this, function(_a) {
                        switch (_a.label) {
                          case 0:
                            if (!!this._started)
                              return [3, 5];
                            this._started = true;
                            if (!(typeof window == "undefined"))
                              return [3, 1];
                            this.enableAudio();
                            return [3, 5];
                          case 1:
                            this._audioContext = new AudioContext();
                            this.listenForUserAction();
                            _a.label = 2;
                          case 2:
                            if (!(this._status === SystemAudioStatus.UNAVAILABLE))
                              return [3, 5];
                            return [4, this.testAudio()];
                          case 3:
                            _a.sent();
                            return [4, this.delay(1e3)];
                          case 4:
                            _a.sent();
                            return [3, 2];
                          case 5:
                            return [
                              2
                              /*return*/
                            ];
                        }
                      });
                    });
                  };
                  AudioManager2.prototype.listenForUserAction = function() {
                    var _this = this;
                    var _clickListener = function() {
                      return __awaiter(_this, void 0, void 0, function() {
                        return __generator(this, function(_a) {
                          this.enableAudio();
                          return [
                            2
                            /*return*/
                          ];
                        });
                      });
                    };
                    document.addEventListener("pointerdown", _clickListener, {
                      once: true
                    });
                  };
                  AudioManager2.prototype.establishAudio = function() {
                    return __awaiter(this, void 0, void 0, function() {
                      return __generator(this, function(_a) {
                        this._establishAudio();
                        return [
                          2
                          /*return*/
                        ];
                      });
                    });
                  };
                  Object.defineProperty(AudioManager2.prototype, "systemVolume", {
                    get: function() {
                      if (this._status === SystemAudioStatus.UNAVAILABLE) {
                        this.testAudio();
                        return 0;
                      }
                      return 1;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(AudioManager2.prototype, "status", {
                    get: function() {
                      return this._status;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  return AudioManager2;
                }(EventManager)
              );
              var audioManager = new AudioManager();
              var FakeResizeObserver = (
                /** @class */
                function() {
                  function FakeResizeObserver2() {
                  }
                  FakeResizeObserver2.prototype.observe = function() {
                  };
                  FakeResizeObserver2.prototype.unobserve = function() {
                  };
                  FakeResizeObserver2.prototype.disconnect = function() {
                  };
                  return FakeResizeObserver2;
                }()
              );
              var MyResizeObserver = globalThis.ResizeObserver || FakeResizeObserver;
              var ObjectObservers = (
                /** @class */
                function() {
                  function ObjectObservers2() {
                    var _this = this;
                    this._elementsMap = /* @__PURE__ */ new Map();
                    this._onObservedEntry = function(entry) {
                      var observed = _this._elementsMap.get(entry.target);
                      if (observed !== null) {
                        observed.onResize(entry.target.clientWidth == 0 || entry.target.clientHeight == 0);
                      } else {
                        _this._resizeObserver.unobserve(entry.target);
                      }
                    };
                    this._onObserved = function(entries) {
                      entries.forEach(_this._onObservedEntry);
                    };
                    this._resizeObserver = new MyResizeObserver(this._onObserved);
                  }
                  ObjectObservers2.prototype.add = function(element, onResize) {
                    var observed = {
                      onResize,
                      element
                    };
                    this._elementsMap.set(element, observed);
                    this._resizeObserver.observe(element);
                    return observed;
                  };
                  ObjectObservers2.prototype.remove = function(observed) {
                    this._resizeObserver.unobserve(observed.element);
                    this._elementsMap.delete(observed.element);
                  };
                  return ObjectObservers2;
                }()
              );
              var observers = new ObjectObservers();
              var RiveFile = (
                /** @class */
                function() {
                  function RiveFile2(params) {
                    this.enableRiveAssetCDN = true;
                    this.referenceCount = 0;
                    this.src = params.src;
                    this.buffer = params.buffer;
                    if (params.assetLoader)
                      this.assetLoader = params.assetLoader;
                    this.enableRiveAssetCDN = typeof params.enableRiveAssetCDN == "boolean" ? params.enableRiveAssetCDN : true;
                    this.eventManager = new EventManager();
                    if (params.onLoad)
                      this.on(EventType.Load, params.onLoad);
                    if (params.onLoadError)
                      this.on(EventType.LoadError, params.onLoadError);
                  }
                  RiveFile2.prototype.initData = function() {
                    return __awaiter(this, void 0, void 0, function() {
                      var _a, loader, _b;
                      return __generator(this, function(_c) {
                        switch (_c.label) {
                          case 0:
                            if (!this.src)
                              return [3, 2];
                            _a = this;
                            return [4, loadRiveFile(this.src)];
                          case 1:
                            _a.buffer = _c.sent();
                            _c.label = 2;
                          case 2:
                            if (this.assetLoader) {
                              loader = new this.runtime.CustomFileAssetLoader({
                                loadContents: this.assetLoader
                              });
                            }
                            _b = this;
                            return [4, this.runtime.load(new Uint8Array(this.buffer), loader, this.enableRiveAssetCDN)];
                          case 3:
                            _b.file = _c.sent();
                            if (this.file !== null) {
                              this.eventManager.fire({
                                type: EventType.Load,
                                data: this
                              });
                            } else {
                              this.eventManager.fire({
                                type: EventType.LoadError,
                                data: null
                              });
                              throw new Error(RiveFile2.fileLoadErrorMessage);
                            }
                            return [
                              2
                              /*return*/
                            ];
                        }
                      });
                    });
                  };
                  RiveFile2.prototype.init = function() {
                    return __awaiter(this, void 0, void 0, function() {
                      var _a;
                      return __generator(this, function(_b) {
                        switch (_b.label) {
                          case 0:
                            if (!this.src && !this.buffer) {
                              throw new Error(RiveFile2.missingErrorMessage);
                            }
                            _a = this;
                            return [4, RuntimeLoader.awaitInstance()];
                          case 1:
                            _a.runtime = _b.sent();
                            return [4, this.initData()];
                          case 2:
                            _b.sent();
                            return [
                              2
                              /*return*/
                            ];
                        }
                      });
                    });
                  };
                  RiveFile2.prototype.on = function(type, callback) {
                    this.eventManager.add({
                      type,
                      callback
                    });
                  };
                  RiveFile2.prototype.off = function(type, callback) {
                    this.eventManager.remove({
                      type,
                      callback
                    });
                  };
                  RiveFile2.prototype.cleanup = function() {
                    var _a;
                    this.referenceCount -= 1;
                    if (this.referenceCount <= 0) {
                      this.removeAllRiveEventListeners();
                      (_a = this.file) === null || _a === void 0 ? void 0 : _a.delete();
                    }
                  };
                  RiveFile2.prototype.removeAllRiveEventListeners = function(type) {
                    this.eventManager.removeAll(type);
                  };
                  RiveFile2.prototype.getInstance = function() {
                    if (this.file !== null) {
                      this.referenceCount += 1;
                      return this.file;
                    }
                  };
                  RiveFile2.missingErrorMessage = "Rive source file or data buffer required";
                  RiveFile2.fileLoadErrorMessage = "The file failed to load";
                  return RiveFile2;
                }()
              );
              var Rive = (
                /** @class */
                function() {
                  function Rive2(params) {
                    var _this = this;
                    var _a;
                    this.loaded = false;
                    this.readyForPlaying = false;
                    this.artboard = null;
                    this.eventCleanup = null;
                    this.shouldDisableRiveListeners = false;
                    this.automaticallyHandleEvents = false;
                    this.enableRiveAssetCDN = true;
                    this._volume = 1;
                    this._hasZeroSize = false;
                    this.durations = [];
                    this.frameTimes = [];
                    this.frameCount = 0;
                    this.isTouchScrollEnabled = false;
                    this.onCanvasResize = function(hasZeroSize) {
                      _this._hasZeroSize = hasZeroSize;
                      if (!_this._layout.maxX || !_this._layout.maxY) {
                        _this.resizeToCanvas();
                      }
                    };
                    this.renderSecondTimer = 0;
                    this.canvas = params.canvas;
                    if (params.canvas.constructor === HTMLCanvasElement) {
                      this._observed = observers.add(this.canvas, this.onCanvasResize);
                    }
                    this.src = params.src;
                    this.buffer = params.buffer;
                    this.riveFile = params.riveFile;
                    this.layout = (_a = params.layout) !== null && _a !== void 0 ? _a : new Layout();
                    this.shouldDisableRiveListeners = !!params.shouldDisableRiveListeners;
                    this.isTouchScrollEnabled = !!params.isTouchScrollEnabled;
                    this.automaticallyHandleEvents = !!params.automaticallyHandleEvents;
                    this.enableRiveAssetCDN = params.enableRiveAssetCDN === void 0 ? true : params.enableRiveAssetCDN;
                    this.eventManager = new EventManager();
                    if (params.onLoad)
                      this.on(EventType.Load, params.onLoad);
                    if (params.onLoadError)
                      this.on(EventType.LoadError, params.onLoadError);
                    if (params.onPlay)
                      this.on(EventType.Play, params.onPlay);
                    if (params.onPause)
                      this.on(EventType.Pause, params.onPause);
                    if (params.onStop)
                      this.on(EventType.Stop, params.onStop);
                    if (params.onLoop)
                      this.on(EventType.Loop, params.onLoop);
                    if (params.onStateChange)
                      this.on(EventType.StateChange, params.onStateChange);
                    if (params.onAdvance)
                      this.on(EventType.Advance, params.onAdvance);
                    if (params.onload && !params.onLoad)
                      this.on(EventType.Load, params.onload);
                    if (params.onloaderror && !params.onLoadError)
                      this.on(EventType.LoadError, params.onloaderror);
                    if (params.onplay && !params.onPlay)
                      this.on(EventType.Play, params.onplay);
                    if (params.onpause && !params.onPause)
                      this.on(EventType.Pause, params.onpause);
                    if (params.onstop && !params.onStop)
                      this.on(EventType.Stop, params.onstop);
                    if (params.onloop && !params.onLoop)
                      this.on(EventType.Loop, params.onloop);
                    if (params.onstatechange && !params.onStateChange)
                      this.on(EventType.StateChange, params.onstatechange);
                    if (params.assetLoader)
                      this.assetLoader = params.assetLoader;
                    this.taskQueue = new TaskQueueManager(this.eventManager);
                    this.init({
                      src: this.src,
                      buffer: this.buffer,
                      riveFile: this.riveFile,
                      autoplay: params.autoplay,
                      animations: params.animations,
                      stateMachines: params.stateMachines,
                      artboard: params.artboard,
                      useOffscreenRenderer: params.useOffscreenRenderer
                    });
                  }
                  Rive2.new = function(params) {
                    console.warn("This function is deprecated: please use `new Rive({})` instead");
                    return new Rive2(params);
                  };
                  Rive2.prototype.onSystemAudioChanged = function() {
                    this.volume = this._volume;
                  };
                  Rive2.prototype.init = function(_a) {
                    var _this = this;
                    var src = _a.src, buffer = _a.buffer, riveFile = _a.riveFile, animations = _a.animations, stateMachines = _a.stateMachines, artboard = _a.artboard, _b = _a.autoplay, autoplay = _b === void 0 ? false : _b, _c = _a.useOffscreenRenderer, useOffscreenRenderer = _c === void 0 ? false : _c;
                    this.src = src;
                    this.buffer = buffer;
                    this.riveFile = riveFile;
                    if (!this.src && !this.buffer && !this.riveFile) {
                      throw new Error(Rive2.missingErrorMessage);
                    }
                    var startingAnimationNames = mapToStringArray(animations);
                    var startingStateMachineNames = mapToStringArray(stateMachines);
                    this.loaded = false;
                    this.readyForPlaying = false;
                    RuntimeLoader.awaitInstance().then(function(runtime) {
                      _this.runtime = runtime;
                      _this.renderer = _this.runtime.makeRenderer(_this.canvas, useOffscreenRenderer);
                      if (!(_this.canvas.width || _this.canvas.height)) {
                        _this.resizeDrawingSurfaceToCanvas();
                      }
                      _this.initData(artboard, startingAnimationNames, startingStateMachineNames, autoplay).then(function() {
                        return _this.setupRiveListeners();
                      }).catch(function(e) {
                        console.error(e);
                      });
                    }).catch(function(e) {
                      console.error(e);
                    });
                  };
                  Rive2.prototype.setupRiveListeners = function(riveListenerOptions) {
                    var _this = this;
                    if (!this.shouldDisableRiveListeners) {
                      var activeStateMachines = (this.animator.stateMachines || []).filter(function(sm) {
                        return sm.playing && _this.runtime.hasListeners(sm.instance);
                      }).map(function(sm) {
                        return sm.instance;
                      });
                      var touchScrollEnabledOption = this.isTouchScrollEnabled;
                      if (riveListenerOptions && "isTouchScrollEnabled" in riveListenerOptions) {
                        touchScrollEnabledOption = riveListenerOptions.isTouchScrollEnabled;
                      }
                      this.eventCleanup = (0, _utils__WEBPACK_IMPORTED_MODULE_3__.registerTouchInteractions)({
                        canvas: this.canvas,
                        artboard: this.artboard,
                        stateMachines: activeStateMachines,
                        renderer: this.renderer,
                        rive: this.runtime,
                        fit: this._layout.runtimeFit(this.runtime),
                        alignment: this._layout.runtimeAlignment(this.runtime),
                        isTouchScrollEnabled: touchScrollEnabledOption
                      });
                    }
                  };
                  Rive2.prototype.removeRiveListeners = function() {
                    if (this.eventCleanup) {
                      this.eventCleanup();
                    }
                  };
                  Rive2.prototype.initializeAudio = function() {
                    var _this = this;
                    var _a;
                    if (audioManager.status == SystemAudioStatus.UNAVAILABLE) {
                      if ((_a = this.artboard) === null || _a === void 0 ? void 0 : _a.hasAudio) {
                        audioManager.add({
                          type: EventType.AudioStatusChange,
                          callback: function() {
                            return _this.onSystemAudioChanged();
                          }
                        });
                        audioManager.establishAudio();
                      }
                    }
                  };
                  Rive2.prototype.initData = function(artboardName, animationNames, stateMachineNames, autoplay) {
                    var _a;
                    return __awaiter(this, void 0, void 0, function() {
                      var error_1, msg;
                      return __generator(this, function(_b) {
                        switch (_b.label) {
                          case 0:
                            _b.trys.push([0, 3, , 4]);
                            if (!(this.riveFile == null))
                              return [3, 2];
                            this.riveFile = new RiveFile({
                              src: this.src,
                              buffer: this.buffer,
                              enableRiveAssetCDN: this.enableRiveAssetCDN,
                              assetLoader: this.assetLoader
                            });
                            return [4, this.riveFile.init()];
                          case 1:
                            _b.sent();
                            _b.label = 2;
                          case 2:
                            this.file = this.riveFile.getInstance();
                            this.initArtboard(artboardName, animationNames, stateMachineNames, autoplay);
                            this.initializeAudio();
                            this.loaded = true;
                            this.eventManager.fire({
                              type: EventType.Load,
                              data: (_a = this.src) !== null && _a !== void 0 ? _a : "buffer"
                            });
                            this.readyForPlaying = true;
                            this.taskQueue.process();
                            this.drawFrame();
                            return [2, Promise.resolve()];
                          case 3:
                            error_1 = _b.sent();
                            msg = "Problem loading file; may be corrupt!";
                            console.warn(msg);
                            this.eventManager.fire({ type: EventType.LoadError, data: msg });
                            return [2, Promise.reject(msg)];
                          case 4:
                            return [
                              2
                              /*return*/
                            ];
                        }
                      });
                    });
                  };
                  Rive2.prototype.initArtboard = function(artboardName, animationNames, stateMachineNames, autoplay) {
                    if (!this.file) {
                      return;
                    }
                    var rootArtboard = artboardName ? this.file.artboardByName(artboardName) : this.file.defaultArtboard();
                    if (!rootArtboard) {
                      var msg = "Invalid artboard name or no default artboard";
                      console.warn(msg);
                      this.eventManager.fire({ type: EventType.LoadError, data: msg });
                      return;
                    }
                    this.artboard = rootArtboard;
                    rootArtboard.volume = this._volume * audioManager.systemVolume;
                    if (this.artboard.animationCount() < 1) {
                      var msg = "Artboard has no animations";
                      this.eventManager.fire({ type: EventType.LoadError, data: msg });
                      throw msg;
                    }
                    this.animator = new Animator(this.runtime, this.artboard, this.eventManager);
                    var instanceNames;
                    if (animationNames.length > 0 || stateMachineNames.length > 0) {
                      instanceNames = animationNames.concat(stateMachineNames);
                      this.animator.initLinearAnimations(animationNames, autoplay);
                      this.animator.initStateMachines(stateMachineNames, autoplay);
                    } else {
                      instanceNames = [this.animator.atLeastOne(autoplay, false)];
                    }
                    this.taskQueue.add({
                      event: {
                        type: autoplay ? EventType.Play : EventType.Pause,
                        data: instanceNames
                      }
                    });
                  };
                  Rive2.prototype.drawFrame = function() {
                    this.startRendering();
                  };
                  Rive2.prototype.draw = function(time, onSecond) {
                    this.frameRequestId = null;
                    var before = performance.now();
                    if (!this.lastRenderTime) {
                      this.lastRenderTime = time;
                    }
                    this.renderSecondTimer += time - this.lastRenderTime;
                    if (this.renderSecondTimer > 5e3) {
                      this.renderSecondTimer = 0;
                      onSecond === null || onSecond === void 0 ? void 0 : onSecond();
                    }
                    var elapsedTime = (time - this.lastRenderTime) / 1e3;
                    this.lastRenderTime = time;
                    var activeAnimations = this.animator.animations.filter(function(a) {
                      return a.playing || a.needsScrub;
                    }).sort(function(first) {
                      return first.needsScrub ? -1 : 1;
                    });
                    for (var _i = 0, activeAnimations_1 = activeAnimations; _i < activeAnimations_1.length; _i++) {
                      var animation = activeAnimations_1[_i];
                      animation.advance(elapsedTime);
                      if (animation.instance.didLoop) {
                        animation.loopCount += 1;
                      }
                      animation.apply(1);
                    }
                    var activeStateMachines = this.animator.stateMachines.filter(function(a) {
                      return a.playing;
                    });
                    for (var _a = 0, activeStateMachines_1 = activeStateMachines; _a < activeStateMachines_1.length; _a++) {
                      var stateMachine = activeStateMachines_1[_a];
                      var numEventsReported = stateMachine.reportedEventCount();
                      if (numEventsReported) {
                        for (var i = 0; i < numEventsReported; i++) {
                          var event_1 = stateMachine.reportedEventAt(i);
                          if (event_1) {
                            if (event_1.type === RiveEventType.OpenUrl) {
                              this.eventManager.fire({
                                type: EventType.RiveEvent,
                                data: event_1
                              });
                              if (this.automaticallyHandleEvents) {
                                var newAnchorTag = document.createElement("a");
                                var _b = event_1, url = _b.url, target = _b.target;
                                var sanitizedUrl = (0, _utils__WEBPACK_IMPORTED_MODULE_3__.sanitizeUrl)(url);
                                url && newAnchorTag.setAttribute("href", sanitizedUrl);
                                target && newAnchorTag.setAttribute("target", target);
                                if (sanitizedUrl && sanitizedUrl !== _utils__WEBPACK_IMPORTED_MODULE_3__.BLANK_URL) {
                                  newAnchorTag.click();
                                }
                              }
                            } else {
                              this.eventManager.fire({
                                type: EventType.RiveEvent,
                                data: event_1
                              });
                            }
                          }
                        }
                      }
                      stateMachine.advance(elapsedTime);
                    }
                    this.artboard.advance(elapsedTime);
                    var renderer = this.renderer;
                    renderer.clear();
                    renderer.save();
                    this.alignRenderer();
                    if (!this._hasZeroSize) {
                      this.artboard.draw(renderer);
                    }
                    renderer.restore();
                    renderer.flush();
                    this.animator.handleLooping();
                    this.animator.handleStateChanges();
                    this.animator.handleAdvancing(elapsedTime);
                    this.frameCount++;
                    var after = performance.now();
                    this.frameTimes.push(after);
                    this.durations.push(after - before);
                    while (this.frameTimes[0] <= after - 1e3) {
                      this.frameTimes.shift();
                      this.durations.shift();
                    }
                    if (this.animator.isPlaying) {
                      this.startRendering();
                    } else if (this.animator.isPaused) {
                      this.lastRenderTime = 0;
                    } else if (this.animator.isStopped) {
                      this.lastRenderTime = 0;
                    }
                  };
                  Rive2.prototype.alignRenderer = function() {
                    var _a = this, renderer = _a.renderer, runtime = _a.runtime, _layout = _a._layout, artboard = _a.artboard;
                    renderer.align(_layout.runtimeFit(runtime), _layout.runtimeAlignment(runtime), {
                      minX: _layout.minX,
                      minY: _layout.minY,
                      maxX: _layout.maxX,
                      maxY: _layout.maxY
                    }, artboard.bounds);
                  };
                  Object.defineProperty(Rive2.prototype, "fps", {
                    get: function() {
                      return this.durations.length;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(Rive2.prototype, "frameTime", {
                    get: function() {
                      if (this.durations.length === 0) {
                        return 0;
                      }
                      return (this.durations.reduce(function(a, b) {
                        return a + b;
                      }, 0) / this.durations.length).toFixed(4);
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Rive2.prototype.cleanup = function() {
                    var _a;
                    this.stopRendering();
                    this.cleanupInstances();
                    if (this._observed !== null) {
                      observers.remove(this._observed);
                    }
                    (_a = this.riveFile) === null || _a === void 0 ? void 0 : _a.cleanup();
                    this.riveFile = null;
                    this.file = null;
                  };
                  Rive2.prototype.deleteRiveRenderer = function() {
                    var _a;
                    (_a = this.renderer) === null || _a === void 0 ? void 0 : _a.delete();
                    this.renderer = null;
                  };
                  Rive2.prototype.cleanupInstances = function() {
                    if (this.eventCleanup !== null) {
                      this.eventCleanup();
                    }
                    this.stop();
                    if (this.artboard) {
                      this.artboard.delete();
                      this.artboard = null;
                    }
                  };
                  Rive2.prototype.retrieveTextRun = function(textRunName) {
                    var _a;
                    if (!textRunName) {
                      console.warn("No text run name provided");
                      return;
                    }
                    if (!this.artboard) {
                      console.warn("Tried to access text run, but the Artboard is null");
                      return;
                    }
                    var textRun = this.artboard.textRun(textRunName);
                    if (!textRun) {
                      console.warn("Could not access a text run with name '".concat(textRunName, "' in the '").concat((_a = this.artboard) === null || _a === void 0 ? void 0 : _a.name, "' Artboard. Note that you must rename a text run node in the Rive editor to make it queryable at runtime."));
                      return;
                    }
                    return textRun;
                  };
                  Rive2.prototype.getTextRunValue = function(textRunName) {
                    var textRun = this.retrieveTextRun(textRunName);
                    return textRun ? textRun.text : void 0;
                  };
                  Rive2.prototype.setTextRunValue = function(textRunName, textRunValue) {
                    var textRun = this.retrieveTextRun(textRunName);
                    if (textRun) {
                      textRun.text = textRunValue;
                    }
                  };
                  Rive2.prototype.play = function(animationNames, autoplay) {
                    var _this = this;
                    animationNames = mapToStringArray(animationNames);
                    if (!this.readyForPlaying) {
                      this.taskQueue.add({
                        action: function() {
                          return _this.play(animationNames, autoplay);
                        }
                      });
                      return;
                    }
                    this.animator.play(animationNames);
                    if (this.eventCleanup) {
                      this.eventCleanup();
                    }
                    this.setupRiveListeners();
                    this.startRendering();
                  };
                  Rive2.prototype.pause = function(animationNames) {
                    var _this = this;
                    animationNames = mapToStringArray(animationNames);
                    if (!this.readyForPlaying) {
                      this.taskQueue.add({
                        action: function() {
                          return _this.pause(animationNames);
                        }
                      });
                      return;
                    }
                    if (this.eventCleanup) {
                      this.eventCleanup();
                    }
                    this.animator.pause(animationNames);
                  };
                  Rive2.prototype.scrub = function(animationNames, value) {
                    var _this = this;
                    animationNames = mapToStringArray(animationNames);
                    if (!this.readyForPlaying) {
                      this.taskQueue.add({
                        action: function() {
                          return _this.scrub(animationNames, value);
                        }
                      });
                      return;
                    }
                    this.animator.scrub(animationNames, value || 0);
                    this.drawFrame();
                  };
                  Rive2.prototype.stop = function(animationNames) {
                    var _this = this;
                    animationNames = mapToStringArray(animationNames);
                    if (!this.readyForPlaying) {
                      this.taskQueue.add({
                        action: function() {
                          return _this.stop(animationNames);
                        }
                      });
                      return;
                    }
                    this.animator.stop(animationNames);
                    if (this.eventCleanup) {
                      this.eventCleanup();
                    }
                  };
                  Rive2.prototype.reset = function(params) {
                    var _a;
                    var artBoardName = params === null || params === void 0 ? void 0 : params.artboard;
                    var animationNames = mapToStringArray(params === null || params === void 0 ? void 0 : params.animations);
                    var stateMachineNames = mapToStringArray(params === null || params === void 0 ? void 0 : params.stateMachines);
                    var autoplay = (_a = params === null || params === void 0 ? void 0 : params.autoplay) !== null && _a !== void 0 ? _a : false;
                    this.cleanupInstances();
                    this.initArtboard(artBoardName, animationNames, stateMachineNames, autoplay);
                    this.taskQueue.process();
                  };
                  Rive2.prototype.load = function(params) {
                    this.file = null;
                    this.stop();
                    this.init(params);
                  };
                  Object.defineProperty(Rive2.prototype, "layout", {
                    /**
                     * Returns the current layout. Note that layout should be treated as
                     * immutable. If you want to change the layout, create a new one use the
                     * layout setter
                     */
                    get: function() {
                      return this._layout;
                    },
                    // Sets a new layout
                    set: function(layout) {
                      this._layout = layout;
                      if (!layout.maxX || !layout.maxY) {
                        this.resizeToCanvas();
                      }
                      if (this.loaded && !this.animator.isPlaying) {
                        this.drawFrame();
                      }
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Rive2.prototype.resizeToCanvas = function() {
                    this._layout = this.layout.copyWith({
                      minX: 0,
                      minY: 0,
                      maxX: this.canvas.width,
                      maxY: this.canvas.height
                    });
                  };
                  Rive2.prototype.resizeDrawingSurfaceToCanvas = function(customDevicePixelRatio) {
                    if (this.canvas instanceof HTMLCanvasElement && !!window) {
                      var _a = this.canvas.getBoundingClientRect(), width = _a.width, height = _a.height;
                      var dpr = customDevicePixelRatio || window.devicePixelRatio || 1;
                      this.canvas.width = dpr * width;
                      this.canvas.height = dpr * height;
                      this.startRendering();
                      this.resizeToCanvas();
                    }
                  };
                  Object.defineProperty(Rive2.prototype, "source", {
                    // Returns the animation source, which may be undefined
                    get: function() {
                      return this.src;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(Rive2.prototype, "activeArtboard", {
                    /**
                     * Returns the name of the active artboard
                     */
                    get: function() {
                      return this.artboard ? this.artboard.name : "";
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(Rive2.prototype, "animationNames", {
                    // Returns a list of animation names on the chosen artboard
                    get: function() {
                      if (!this.loaded || !this.artboard) {
                        return [];
                      }
                      var animationNames = [];
                      for (var i = 0; i < this.artboard.animationCount(); i++) {
                        animationNames.push(this.artboard.animationByIndex(i).name);
                      }
                      return animationNames;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(Rive2.prototype, "stateMachineNames", {
                    /**
                     * Returns a list of state machine names from the current artboard
                     */
                    get: function() {
                      if (!this.loaded || !this.artboard) {
                        return [];
                      }
                      var stateMachineNames = [];
                      for (var i = 0; i < this.artboard.stateMachineCount(); i++) {
                        stateMachineNames.push(this.artboard.stateMachineByIndex(i).name);
                      }
                      return stateMachineNames;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Rive2.prototype.stateMachineInputs = function(name) {
                    if (!this.loaded) {
                      return;
                    }
                    var stateMachine = this.animator.stateMachines.find(function(m) {
                      return m.name === name;
                    });
                    return stateMachine === null || stateMachine === void 0 ? void 0 : stateMachine.inputs;
                  };
                  Rive2.prototype.retrieveInputAtPath = function(name, path) {
                    if (!name) {
                      console.warn("No input name provided for path '".concat(path, "'"));
                      return;
                    }
                    if (!this.artboard) {
                      console.warn("Tried to access input: '".concat(name, "', at path: '").concat(path, "', but the Artboard is null"));
                      return;
                    }
                    var input = this.artboard.inputByPath(name, path);
                    if (!input) {
                      console.warn("Could not access an input with name: '".concat(name, "', at path:'").concat(path, "'"));
                      return;
                    }
                    return input;
                  };
                  Rive2.prototype.setBooleanStateAtPath = function(inputName, value, path) {
                    var input = this.retrieveInputAtPath(inputName, path);
                    if (!input)
                      return;
                    if (input.type === StateMachineInputType.Boolean) {
                      input.asBool().value = value;
                    } else {
                      console.warn("Input with name: '".concat(inputName, "', at path:'").concat(path, "' is not a boolean"));
                    }
                  };
                  Rive2.prototype.setNumberStateAtPath = function(inputName, value, path) {
                    var input = this.retrieveInputAtPath(inputName, path);
                    if (!input)
                      return;
                    if (input.type === StateMachineInputType.Number) {
                      input.asNumber().value = value;
                    } else {
                      console.warn("Input with name: '".concat(inputName, "', at path:'").concat(path, "' is not a number"));
                    }
                  };
                  Rive2.prototype.fireStateAtPath = function(inputName, path) {
                    var input = this.retrieveInputAtPath(inputName, path);
                    if (!input)
                      return;
                    if (input.type === StateMachineInputType.Trigger) {
                      input.asTrigger().fire();
                    } else {
                      console.warn("Input with name: '".concat(inputName, "', at path:'").concat(path, "' is not a trigger"));
                    }
                  };
                  Rive2.prototype.retrieveTextAtPath = function(name, path) {
                    if (!name) {
                      console.warn("No text name provided for path '".concat(path, "'"));
                      return;
                    }
                    if (!path) {
                      console.warn("No path provided for text '".concat(name, "'"));
                      return;
                    }
                    if (!this.artboard) {
                      console.warn("Tried to access text: '".concat(name, "', at path: '").concat(path, "', but the Artboard is null"));
                      return;
                    }
                    var text = this.artboard.textByPath(name, path);
                    if (!text) {
                      console.warn("Could not access text with name: '".concat(name, "', at path:'").concat(path, "'"));
                      return;
                    }
                    return text;
                  };
                  Rive2.prototype.getTextRunValueAtPath = function(textName, path) {
                    var run = this.retrieveTextAtPath(textName, path);
                    if (!run) {
                      console.warn("Could not get text with name: '".concat(textName, "', at path:'").concat(path, "'"));
                      return;
                    }
                    return run.text;
                  };
                  Rive2.prototype.setTextRunValueAtPath = function(textName, value, path) {
                    var run = this.retrieveTextAtPath(textName, path);
                    if (!run) {
                      console.warn("Could not set text with name: '".concat(textName, "', at path:'").concat(path, "'"));
                      return;
                    }
                    run.text = value;
                  };
                  Object.defineProperty(Rive2.prototype, "playingStateMachineNames", {
                    // Returns a list of playing machine names
                    get: function() {
                      if (!this.loaded) {
                        return [];
                      }
                      return this.animator.stateMachines.filter(function(m) {
                        return m.playing;
                      }).map(function(m) {
                        return m.name;
                      });
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(Rive2.prototype, "playingAnimationNames", {
                    // Returns a list of playing animation names
                    get: function() {
                      if (!this.loaded) {
                        return [];
                      }
                      return this.animator.animations.filter(function(a) {
                        return a.playing;
                      }).map(function(a) {
                        return a.name;
                      });
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(Rive2.prototype, "pausedAnimationNames", {
                    // Returns a list of paused animation names
                    get: function() {
                      if (!this.loaded) {
                        return [];
                      }
                      return this.animator.animations.filter(function(a) {
                        return !a.playing;
                      }).map(function(a) {
                        return a.name;
                      });
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(Rive2.prototype, "pausedStateMachineNames", {
                    /**
                     *  Returns a list of paused machine names
                     * @returns a list of state machine names that are paused
                     */
                    get: function() {
                      if (!this.loaded) {
                        return [];
                      }
                      return this.animator.stateMachines.filter(function(m) {
                        return !m.playing;
                      }).map(function(m) {
                        return m.name;
                      });
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(Rive2.prototype, "isPlaying", {
                    /**
                     * @returns true if any animation is playing
                     */
                    get: function() {
                      return this.animator.isPlaying;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(Rive2.prototype, "isPaused", {
                    /**
                     * @returns true if all instanced animations are paused
                     */
                    get: function() {
                      return this.animator.isPaused;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(Rive2.prototype, "isStopped", {
                    /**
                     * @returns true if no animations are playing or paused
                     */
                    get: function() {
                      return this.animator.isStopped;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(Rive2.prototype, "bounds", {
                    /**
                     * @returns the bounds of the current artboard, or undefined if the artboard
                     * isn't loaded yet.
                     */
                    get: function() {
                      return this.artboard ? this.artboard.bounds : void 0;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Rive2.prototype.on = function(type, callback) {
                    this.eventManager.add({
                      type,
                      callback
                    });
                  };
                  Rive2.prototype.off = function(type, callback) {
                    this.eventManager.remove({
                      type,
                      callback
                    });
                  };
                  Rive2.prototype.unsubscribe = function(type, callback) {
                    console.warn("This function is deprecated: please use `off()` instead.");
                    this.off(type, callback);
                  };
                  Rive2.prototype.removeAllRiveEventListeners = function(type) {
                    this.eventManager.removeAll(type);
                  };
                  Rive2.prototype.unsubscribeAll = function(type) {
                    console.warn("This function is deprecated: please use `removeAllRiveEventListeners()` instead.");
                    this.removeAllRiveEventListeners(type);
                  };
                  Rive2.prototype.stopRendering = function() {
                    if (this.loaded && this.frameRequestId) {
                      if (this.runtime.cancelAnimationFrame) {
                        this.runtime.cancelAnimationFrame(this.frameRequestId);
                      } else {
                        cancelAnimationFrame(this.frameRequestId);
                      }
                      this.frameRequestId = null;
                    }
                  };
                  Rive2.prototype.startRendering = function() {
                    if (this.loaded && this.artboard && !this.frameRequestId) {
                      if (this.runtime.requestAnimationFrame) {
                        this.frameRequestId = this.runtime.requestAnimationFrame(this.draw.bind(this));
                      } else {
                        this.frameRequestId = requestAnimationFrame(this.draw.bind(this));
                      }
                    }
                  };
                  Rive2.prototype.enableFPSCounter = function(fpsCallback) {
                    this.runtime.enableFPSCounter(fpsCallback);
                  };
                  Rive2.prototype.disableFPSCounter = function() {
                    this.runtime.disableFPSCounter();
                  };
                  Object.defineProperty(Rive2.prototype, "contents", {
                    /**
                     * Returns the contents of a Rive file: the artboards, animations, and state machines
                     */
                    get: function() {
                      if (!this.loaded) {
                        return void 0;
                      }
                      var riveContents = {
                        artboards: []
                      };
                      for (var i = 0; i < this.file.artboardCount(); i++) {
                        var artboard = this.file.artboardByIndex(i);
                        var artboardContents = {
                          name: artboard.name,
                          animations: [],
                          stateMachines: []
                        };
                        for (var j = 0; j < artboard.animationCount(); j++) {
                          var animation = artboard.animationByIndex(j);
                          artboardContents.animations.push(animation.name);
                        }
                        for (var k = 0; k < artboard.stateMachineCount(); k++) {
                          var stateMachine = artboard.stateMachineByIndex(k);
                          var name_1 = stateMachine.name;
                          var instance = new this.runtime.StateMachineInstance(stateMachine, artboard);
                          var inputContents = [];
                          for (var l = 0; l < instance.inputCount(); l++) {
                            var input = instance.input(l);
                            inputContents.push({ name: input.name, type: input.type });
                          }
                          artboardContents.stateMachines.push({
                            name: name_1,
                            inputs: inputContents
                          });
                        }
                        riveContents.artboards.push(artboardContents);
                      }
                      return riveContents;
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Object.defineProperty(Rive2.prototype, "volume", {
                    /**
                     * getter and setter for the volume of the artboard
                     */
                    get: function() {
                      if (this.artboard && this.artboard.volume !== this._volume) {
                        this._volume = this.artboard.volume;
                      }
                      return this._volume;
                    },
                    set: function(value) {
                      this._volume = value;
                      if (this.artboard) {
                        this.artboard.volume = value * audioManager.systemVolume;
                      }
                    },
                    enumerable: false,
                    configurable: true
                  });
                  Rive2.missingErrorMessage = "Rive source file or data buffer required";
                  return Rive2;
                }()
              );
              var loadRiveFile = function(src) {
                return __awaiter(void 0, void 0, void 0, function() {
                  var req, res, buffer;
                  return __generator(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        req = new Request(src);
                        return [4, fetch(req)];
                      case 1:
                        res = _a.sent();
                        return [4, res.arrayBuffer()];
                      case 2:
                        buffer = _a.sent();
                        return [2, buffer];
                    }
                  });
                });
              };
              var mapToStringArray = function(obj) {
                if (typeof obj === "string") {
                  return [obj];
                } else if (obj instanceof Array) {
                  return obj;
                }
                return [];
              };
              var Testing = {
                EventManager,
                TaskQueueManager
              };
              var decodeAudio = function(bytes) {
                return new Promise(function(resolve) {
                  return RuntimeLoader.getInstance(function(rive) {
                    rive.decodeAudio(bytes, resolve);
                  });
                });
              };
              var decodeImage = function(bytes) {
                return new Promise(function(resolve) {
                  return RuntimeLoader.getInstance(function(rive) {
                    rive.decodeImage(bytes, resolve);
                  });
                });
              };
              var decodeFont = function(bytes) {
                return new Promise(function(resolve) {
                  return RuntimeLoader.getInstance(function(rive) {
                    rive.decodeFont(bytes, resolve);
                  });
                });
              };
            })();
            return __webpack_exports__;
          })()
        );
      });
    }
  });

  // packages/shared/render/plugins/Animation/webflow-rive.js
  var require_webflow_rive = __commonJS({
    "packages/shared/render/plugins/Animation/webflow-rive.js"(exports, module) {
      "use strict";
      var Webflow2 = require_webflow_lib();
      var siteModule = (init_RiveSiteModule(), __toCommonJS(RiveSiteModule_exports));
      var rive = require_rive();
      Webflow2.define("rive", module.exports = function() {
        return {
          rive,
          createInstance: siteModule.createInstance,
          destroyInstance: siteModule.destroyInstance,
          getInstance: siteModule.getInstance,
          setLoadHandler: siteModule.setLoadHandler,
          init: siteModule.init,
          destroy: siteModule.destroy,
          ready: siteModule.ready
        };
      });
    }
  });

  // packages/shared/render/plugins/BackgroundVideo/objectFitPolyfill.basic.js
  var require_objectFitPolyfill_basic = __commonJS({
    "packages/shared/render/plugins/BackgroundVideo/objectFitPolyfill.basic.js"() {
      "use strict";
      (function() {
        if (typeof window === "undefined")
          return;
        const edgeVersion = window.navigator.userAgent.match(/Edge\/(\d{2})\./);
        const edgePartialSupport = edgeVersion ? parseInt(edgeVersion[1], 10) >= 16 : false;
        const hasSupport = "objectFit" in document.documentElement.style !== false;
        if (hasSupport && !edgePartialSupport) {
          window.objectFitPolyfill = function() {
            return false;
          };
          return;
        }
        const checkParentContainer = function($container) {
          const styles = window.getComputedStyle($container, null);
          const position = styles.getPropertyValue("position");
          const overflow = styles.getPropertyValue("overflow");
          const display = styles.getPropertyValue("display");
          if (!position || position === "static") {
            $container.style.position = "relative";
          }
          if (overflow !== "hidden") {
            $container.style.overflow = "hidden";
          }
          if (!display || display === "inline") {
            $container.style.display = "block";
          }
          if ($container.clientHeight === 0) {
            $container.style.height = "100%";
          }
          if ($container.className.indexOf("object-fit-polyfill") === -1) {
            $container.className += " object-fit-polyfill";
          }
        };
        const checkMediaProperties = function($media) {
          const styles = window.getComputedStyle($media, null);
          const constraints = {
            "max-width": "none",
            "max-height": "none",
            "min-width": "0px",
            "min-height": "0px",
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto",
            "margin-top": "0px",
            "margin-right": "0px",
            "margin-bottom": "0px",
            "margin-left": "0px"
          };
          for (const property in constraints) {
            const constraint = styles.getPropertyValue(property);
            if (constraint !== constraints[property]) {
              $media.style[property] = constraints[property];
            }
          }
        };
        const objectFit = function($media) {
          const $container = $media.parentNode;
          checkParentContainer($container);
          checkMediaProperties($media);
          $media.style.position = "absolute";
          $media.style.height = "100%";
          $media.style.width = "auto";
          if ($media.clientWidth > $container.clientWidth) {
            $media.style.top = "0";
            $media.style.marginTop = "0";
            $media.style.left = "50%";
            $media.style.marginLeft = $media.clientWidth / -2 + "px";
          } else {
            $media.style.width = "100%";
            $media.style.height = "auto";
            $media.style.left = "0";
            $media.style.marginLeft = "0";
            $media.style.top = "50%";
            $media.style.marginTop = $media.clientHeight / -2 + "px";
          }
        };
        const objectFitPolyfill = function(media) {
          if (typeof media === "undefined" || media instanceof Event) {
            media = document.querySelectorAll("[data-object-fit]");
          } else if (media && media.nodeName) {
            media = [
              media
            ];
          } else if (typeof media === "object" && media.length && media[0].nodeName) {
            media = media;
          } else {
            return false;
          }
          for (let i = 0; i < media.length; i++) {
            if (!media[i].nodeName)
              continue;
            const mediaType = media[i].nodeName.toLowerCase();
            if (mediaType === "img") {
              if (edgePartialSupport)
                continue;
              if (media[i].complete) {
                objectFit(media[i]);
              } else {
                media[i].addEventListener("load", function() {
                  objectFit(this);
                });
              }
            } else if (mediaType === "video") {
              if (media[i].readyState > 0) {
                objectFit(media[i]);
              } else {
                media[i].addEventListener("loadedmetadata", function() {
                  objectFit(this);
                });
              }
            } else {
              objectFit(media[i]);
            }
          }
          return true;
        };
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", objectFitPolyfill);
        } else {
          objectFitPolyfill();
        }
        window.addEventListener("resize", objectFitPolyfill);
        window.objectFitPolyfill = objectFitPolyfill;
      })();
    }
  });

  // packages/shared/render/plugins/BackgroundVideo/webflow-bgvideo.js
  var require_webflow_bgvideo = __commonJS({
    "packages/shared/render/plugins/BackgroundVideo/webflow-bgvideo.js"() {
      "use strict";
      (function() {
        if (typeof window === "undefined")
          return;
        function setAllBackgroundVideoStates(shouldPlay) {
          if (Webflow.env("design")) {
            return;
          }
          $("video").each(function() {
            shouldPlay && $(this).prop("autoplay") ? this.play() : this.pause();
          });
          $(".w-background-video--control").each(function() {
            if (shouldPlay) {
              showPauseButton($(this));
            } else {
              showPlayButton($(this));
            }
          });
        }
        function showPlayButton($btn) {
          $btn.find("> span").each(function(i) {
            $(this).prop("hidden", () => i === 0);
          });
        }
        function showPauseButton($btn) {
          $btn.find("> span").each(function(i) {
            $(this).prop("hidden", () => i === 1);
          });
        }
        $(document).ready(() => {
          const watcher = window.matchMedia("(prefers-reduced-motion: reduce)");
          watcher.addEventListener("change", (e) => {
            setAllBackgroundVideoStates(!e.matches);
          });
          if (watcher.matches) {
            setAllBackgroundVideoStates(false);
          }
          $("video:not([autoplay])").each(function() {
            $(this).parent().find(".w-background-video--control").each(function() {
              showPlayButton($(this));
            });
          });
          $(document).on("click", ".w-background-video--control", function(e) {
            if (Webflow.env("design"))
              return;
            const btn = $(e.currentTarget);
            const video = $(`video#${btn.attr("aria-controls")}`).get(0);
            if (!video)
              return;
            if (video.paused) {
              const play = video.play();
              showPauseButton(btn);
              if (play && typeof play.catch === "function") {
                play.catch(() => {
                  showPlayButton(btn);
                });
              }
            } else {
              video.pause();
              showPlayButton(btn);
            }
          });
        });
      })();
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-brand.js
  var require_webflow_brand = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-brand.js"(exports, module) {
      "use strict";
      var Webflow2 = require_webflow_lib();
      Webflow2.define("brand", module.exports = function($2) {
        var api = {};
        var doc = document;
        var $html = $2("html");
        var $body = $2("body");
        var namespace = ".w-webflow-badge";
        var location = window.location;
        var isPhantom = /PhantomJS/i.test(navigator.userAgent);
        var fullScreenEvents = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
        var brandElement;
        api.ready = function() {
          var shouldBrand = $html.attr("data-wf-status");
          var publishedDomain = $html.attr("data-wf-domain") || "";
          if (/\.webflow\.io$/i.test(publishedDomain) && location.hostname !== publishedDomain) {
            shouldBrand = true;
          }
          if (shouldBrand && !isPhantom) {
            brandElement = brandElement || createBadge();
            ensureBrand();
            setTimeout(ensureBrand, 500);
            $2(doc).off(fullScreenEvents, onFullScreenChange).on(fullScreenEvents, onFullScreenChange);
          }
        };
        function onFullScreenChange() {
          var fullScreen = doc.fullScreen || doc.mozFullScreen || doc.webkitIsFullScreen || doc.msFullscreenElement || Boolean(doc.webkitFullscreenElement);
          $2(brandElement).attr("style", fullScreen ? "display: none !important;" : "");
        }
        function createBadge() {
          var $brand = $2('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs");
          var $logoArt = $2("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
            marginRight: "4px",
            width: "26px"
          });
          var $logoText = $2("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
          $brand.append($logoArt, $logoText);
          return $brand[0];
        }
        function ensureBrand() {
          var found = $body.children(namespace);
          var match = found.length && found.get(0) === brandElement;
          var inEditor = Webflow2.env("editor");
          if (match) {
            if (inEditor) {
              found.remove();
            }
            return;
          }
          if (found.length) {
            found.remove();
          }
          if (!inEditor) {
            $body.append(brandElement);
          }
        }
        return api;
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-edit.js
  var require_webflow_edit = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-edit.js"(exports, module) {
      "use strict";
      var Webflow2 = require_webflow_lib();
      Webflow2.define("edit", module.exports = function($2, _, options) {
        options = options || {};
        if (Webflow2.env("test") || Webflow2.env("frame")) {
          if (!options.fixture && !inCypress()) {
            return {
              exit: 1
            };
          }
        }
        var api = {};
        var $win = $2(window);
        var $html = $2(document.documentElement);
        var location = document.location;
        var hashchange = "hashchange";
        var loaded;
        var loadEditor = options.load || load;
        var hasLocalStorage = false;
        try {
          hasLocalStorage = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor");
        } catch (e) {
        }
        if (hasLocalStorage) {
          loadEditor();
        } else if (location.search) {
          if (/[?&](edit)(?:[=&?]|$)/.test(location.search) || /\?edit$/.test(location.href)) {
            loadEditor();
          }
        } else {
          $win.on(hashchange, checkHash).triggerHandler(hashchange);
        }
        function checkHash() {
          if (loaded) {
            return;
          }
          if (/\?edit/.test(location.hash)) {
            loadEditor();
          }
        }
        function load() {
          loaded = true;
          window.WebflowEditor = true;
          $win.off(hashchange, checkHash);
          checkThirdPartyCookieSupport(function(thirdPartyCookiesSupported) {
            $2.ajax({
              url: cleanSlashes("https://editor-api.webflow.com/api/editor/view"),
              data: {
                siteId: $html.attr("data-wf-site")
              },
              xhrFields: {
                withCredentials: true
              },
              dataType: "json",
              crossDomain: true,
              success: success(thirdPartyCookiesSupported)
            });
          });
        }
        function success(thirdPartyCookiesSupported) {
          return function(data) {
            if (!data) {
              console.error("Could not load editor data");
              return;
            }
            data.thirdPartyCookiesSupported = thirdPartyCookiesSupported;
            getScript(prefix(data.scriptPath), function() {
              window.WebflowEditor(data);
            });
          };
        }
        function getScript(url, done) {
          $2.ajax({
            type: "GET",
            url,
            dataType: "script",
            cache: true
          }).then(done, error);
        }
        function error(jqXHR, textStatus, errorThrown) {
          console.error("Could not load editor script: " + textStatus);
          throw errorThrown;
        }
        function prefix(url) {
          return url.indexOf("//") >= 0 ? url : cleanSlashes("https://editor-api.webflow.com" + url);
        }
        function cleanSlashes(url) {
          return url.replace(/([^:])\/\//g, "$1/");
        }
        function checkThirdPartyCookieSupport(callback) {
          var iframe = window.document.createElement("iframe");
          iframe.src = "https://webflow.com/site/third-party-cookie-check.html";
          iframe.style.display = "none";
          iframe.sandbox = "allow-scripts allow-same-origin";
          var handleMessage = function(event) {
            if (event.data === "WF_third_party_cookies_unsupported") {
              cleanUpCookieCheckerIframe(iframe, handleMessage);
              callback(false);
            } else if (event.data === "WF_third_party_cookies_supported") {
              cleanUpCookieCheckerIframe(iframe, handleMessage);
              callback(true);
            }
          };
          iframe.onerror = function() {
            cleanUpCookieCheckerIframe(iframe, handleMessage);
            callback(false);
          };
          window.addEventListener("message", handleMessage, false);
          window.document.body.appendChild(iframe);
        }
        function cleanUpCookieCheckerIframe(iframe, listener) {
          window.removeEventListener("message", listener, false);
          iframe.remove();
        }
        return api;
      });
      function inCypress() {
        try {
          return window.top.__Cypress__;
        } catch (e) {
          return false;
        }
      }
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-focus-visible.js
  var require_webflow_focus_visible = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-focus-visible.js"(exports, module) {
      "use strict";
      var Webflow2 = require_webflow_lib();
      Webflow2.define("focus-visible", module.exports = function() {
        function applyFocusVisiblePolyfill(scope) {
          var hadKeyboardEvent = true;
          var hadFocusVisibleRecently = false;
          var hadFocusVisibleRecentlyTimeout = null;
          var inputTypesAllowlist = {
            text: true,
            search: true,
            url: true,
            tel: true,
            email: true,
            password: true,
            number: true,
            date: true,
            month: true,
            week: true,
            time: true,
            datetime: true,
            "datetime-local": true
          };
          function isValidFocusTarget(el) {
            if (el && el !== document && el.nodeName !== "HTML" && el.nodeName !== "BODY" && "classList" in el && "contains" in el.classList) {
              return true;
            }
            return false;
          }
          function focusTriggersKeyboardModality(el) {
            var type = el.type;
            var tagName = el.tagName;
            if (tagName === "INPUT" && inputTypesAllowlist[type] && !el.readOnly) {
              return true;
            }
            if (tagName === "TEXTAREA" && !el.readOnly) {
              return true;
            }
            if (el.isContentEditable) {
              return true;
            }
            return false;
          }
          function addFocusVisibleAttribute(el) {
            if (el.getAttribute("data-wf-focus-visible")) {
              return;
            }
            el.setAttribute("data-wf-focus-visible", "true");
          }
          function removeFocusVisibleAttribute(el) {
            if (!el.getAttribute("data-wf-focus-visible")) {
              return;
            }
            el.removeAttribute("data-wf-focus-visible");
          }
          function onKeyDown(e) {
            if (e.metaKey || e.altKey || e.ctrlKey) {
              return;
            }
            if (isValidFocusTarget(scope.activeElement)) {
              addFocusVisibleAttribute(scope.activeElement);
            }
            hadKeyboardEvent = true;
          }
          function onPointerDown() {
            hadKeyboardEvent = false;
          }
          function onFocus(e) {
            if (!isValidFocusTarget(e.target)) {
              return;
            }
            if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
              addFocusVisibleAttribute(e.target);
            }
          }
          function onBlur(e) {
            if (!isValidFocusTarget(e.target)) {
              return;
            }
            if (e.target.hasAttribute("data-wf-focus-visible")) {
              hadFocusVisibleRecently = true;
              window.clearTimeout(hadFocusVisibleRecentlyTimeout);
              hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
                hadFocusVisibleRecently = false;
              }, 100);
              removeFocusVisibleAttribute(e.target);
            }
          }
          function onVisibilityChange() {
            if (document.visibilityState === "hidden") {
              if (hadFocusVisibleRecently) {
                hadKeyboardEvent = true;
              }
              addInitialPointerMoveListeners();
            }
          }
          function addInitialPointerMoveListeners() {
            document.addEventListener("mousemove", onInitialPointerMove);
            document.addEventListener("mousedown", onInitialPointerMove);
            document.addEventListener("mouseup", onInitialPointerMove);
            document.addEventListener("pointermove", onInitialPointerMove);
            document.addEventListener("pointerdown", onInitialPointerMove);
            document.addEventListener("pointerup", onInitialPointerMove);
            document.addEventListener("touchmove", onInitialPointerMove);
            document.addEventListener("touchstart", onInitialPointerMove);
            document.addEventListener("touchend", onInitialPointerMove);
          }
          function removeInitialPointerMoveListeners() {
            document.removeEventListener("mousemove", onInitialPointerMove);
            document.removeEventListener("mousedown", onInitialPointerMove);
            document.removeEventListener("mouseup", onInitialPointerMove);
            document.removeEventListener("pointermove", onInitialPointerMove);
            document.removeEventListener("pointerdown", onInitialPointerMove);
            document.removeEventListener("pointerup", onInitialPointerMove);
            document.removeEventListener("touchmove", onInitialPointerMove);
            document.removeEventListener("touchstart", onInitialPointerMove);
            document.removeEventListener("touchend", onInitialPointerMove);
          }
          function onInitialPointerMove(e) {
            if (e.target.nodeName && e.target.nodeName.toLowerCase() === "html") {
              return;
            }
            hadKeyboardEvent = false;
            removeInitialPointerMoveListeners();
          }
          document.addEventListener("keydown", onKeyDown, true);
          document.addEventListener("mousedown", onPointerDown, true);
          document.addEventListener("pointerdown", onPointerDown, true);
          document.addEventListener("touchstart", onPointerDown, true);
          document.addEventListener("visibilitychange", onVisibilityChange, true);
          addInitialPointerMoveListeners();
          scope.addEventListener("focus", onFocus, true);
          scope.addEventListener("blur", onBlur, true);
        }
        function ready2() {
          if (typeof document !== "undefined") {
            try {
              document.querySelector(":focus-visible");
            } catch (e) {
              applyFocusVisiblePolyfill(document);
            }
          }
        }
        return {
          ready: ready2
        };
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-focus.js
  var require_webflow_focus = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-focus.js"(exports, module) {
      "use strict";
      var Webflow2 = require_webflow_lib();
      Webflow2.define("focus", module.exports = function() {
        var capturedEvents = [];
        var capturing = false;
        function captureEvent(e) {
          if (capturing) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            capturedEvents.unshift(e);
          }
        }
        function isPolyfilledFocusEvent(e) {
          var el = e.target;
          var tag = el.tagName;
          return /^a$/i.test(tag) && el.href != null || // (A)
          /^(button|textarea)$/i.test(tag) && el.disabled !== true || // (B) (C)
          /^input$/i.test(tag) && /^(button|reset|submit|radio|checkbox)$/i.test(el.type) && !el.disabled || // (D)
          !/^(button|input|textarea|select|a)$/i.test(tag) && !Number.isNaN(Number.parseFloat(el.tabIndex)) || // (E)
          /^audio$/i.test(tag) || // (F)
          /^video$/i.test(tag) && el.controls === true;
        }
        function handler(e) {
          if (isPolyfilledFocusEvent(e)) {
            capturing = true;
            setTimeout(() => {
              capturing = false;
              e.target.focus();
              while (capturedEvents.length > 0) {
                var event = capturedEvents.pop();
                event.target.dispatchEvent(new MouseEvent(event.type, event));
              }
            }, 0);
          }
        }
        function ready2() {
          if (typeof document !== "undefined" && document.body.hasAttribute("data-wf-focus-within") && Webflow2.env.safari) {
            document.addEventListener("mousedown", handler, true);
            document.addEventListener("mouseup", captureEvent, true);
            document.addEventListener("click", captureEvent, true);
          }
        }
        return {
          ready: ready2
        };
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-ix-events.js
  var require_webflow_ix_events = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-ix-events.js"(exports, module) {
      "use strict";
      var $2 = window.jQuery;
      var api = {};
      var eventQueue = [];
      var namespace = ".w-ix";
      var eventTriggers = {
        reset: function(i, el) {
          el.__wf_intro = null;
        },
        intro: function(i, el) {
          if (el.__wf_intro) {
            return;
          }
          el.__wf_intro = true;
          $2(el).triggerHandler(api.types.INTRO);
        },
        outro: function(i, el) {
          if (!el.__wf_intro) {
            return;
          }
          el.__wf_intro = null;
          $2(el).triggerHandler(api.types.OUTRO);
        }
      };
      api.triggers = {};
      api.types = {
        INTRO: "w-ix-intro" + namespace,
        OUTRO: "w-ix-outro" + namespace
      };
      api.init = function() {
        var count = eventQueue.length;
        for (var i = 0; i < count; i++) {
          var memo = eventQueue[i];
          memo[0](0, memo[1]);
        }
        eventQueue = [];
        $2.extend(api.triggers, eventTriggers);
      };
      api.async = function() {
        for (var key in eventTriggers) {
          var func = eventTriggers[key];
          if (!eventTriggers.hasOwnProperty(key)) {
            continue;
          }
          api.triggers[key] = function(i, el) {
            eventQueue.push([
              func,
              el
            ]);
          };
        }
      };
      api.async();
      module.exports = api;
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-ix2-events.js
  var require_webflow_ix2_events = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-ix2-events.js"(exports, module) {
      "use strict";
      var IXEvents = require_webflow_ix_events();
      function dispatchCustomEvent2(element, eventName) {
        var event = document.createEvent("CustomEvent");
        event.initCustomEvent(eventName, true, true, null);
        element.dispatchEvent(event);
      }
      var $2 = window.jQuery;
      var api = {};
      var namespace = ".w-ix";
      var eventTriggers = {
        reset: function(i, el) {
          IXEvents.triggers.reset(i, el);
        },
        intro: function(i, el) {
          IXEvents.triggers.intro(i, el);
          dispatchCustomEvent2(el, "COMPONENT_ACTIVE");
        },
        outro: function(i, el) {
          IXEvents.triggers.outro(i, el);
          dispatchCustomEvent2(el, "COMPONENT_INACTIVE");
        }
      };
      api.triggers = {};
      api.types = {
        INTRO: "w-ix-intro" + namespace,
        OUTRO: "w-ix-outro" + namespace
      };
      $2.extend(api.triggers, eventTriggers);
      module.exports = api;
    }
  });

  // node_modules/lodash/_freeGlobal.js
  var require_freeGlobal = __commonJS({
    "node_modules/lodash/_freeGlobal.js"(exports, module) {
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      module.exports = freeGlobal;
    }
  });

  // node_modules/lodash/_root.js
  var require_root = __commonJS({
    "node_modules/lodash/_root.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      module.exports = root;
    }
  });

  // node_modules/lodash/_Symbol.js
  var require_Symbol = __commonJS({
    "node_modules/lodash/_Symbol.js"(exports, module) {
      var root = require_root();
      var Symbol2 = root.Symbol;
      module.exports = Symbol2;
    }
  });

  // node_modules/lodash/_getRawTag.js
  var require_getRawTag = __commonJS({
    "node_modules/lodash/_getRawTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var nativeObjectToString = objectProto.toString;
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e) {
        }
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      module.exports = getRawTag;
    }
  });

  // node_modules/lodash/_objectToString.js
  var require_objectToString = __commonJS({
    "node_modules/lodash/_objectToString.js"(exports, module) {
      var objectProto = Object.prototype;
      var nativeObjectToString = objectProto.toString;
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      module.exports = objectToString;
    }
  });

  // node_modules/lodash/_baseGetTag.js
  var require_baseGetTag = __commonJS({
    "node_modules/lodash/_baseGetTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var getRawTag = require_getRawTag();
      var objectToString = require_objectToString();
      var nullTag = "[object Null]";
      var undefinedTag = "[object Undefined]";
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      module.exports = baseGetTag;
    }
  });

  // node_modules/lodash/_overArg.js
  var require_overArg = __commonJS({
    "node_modules/lodash/_overArg.js"(exports, module) {
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      module.exports = overArg;
    }
  });

  // node_modules/lodash/_getPrototype.js
  var require_getPrototype = __commonJS({
    "node_modules/lodash/_getPrototype.js"(exports, module) {
      var overArg = require_overArg();
      var getPrototype = overArg(Object.getPrototypeOf, Object);
      module.exports = getPrototype;
    }
  });

  // node_modules/lodash/isObjectLike.js
  var require_isObjectLike = __commonJS({
    "node_modules/lodash/isObjectLike.js"(exports, module) {
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      module.exports = isObjectLike;
    }
  });

  // node_modules/lodash/isPlainObject.js
  var require_isPlainObject = __commonJS({
    "node_modules/lodash/isPlainObject.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var getPrototype = require_getPrototype();
      var isObjectLike = require_isObjectLike();
      var objectTag = "[object Object]";
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var objectCtorString = funcToString.call(Object);
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      module.exports = isPlainObject;
    }
  });

  // node_modules/redux/node_modules/symbol-observable/lib/ponyfill.js
  var require_ponyfill = __commonJS({
    "node_modules/redux/node_modules/symbol-observable/lib/ponyfill.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = symbolObservablePonyfill;
      function symbolObservablePonyfill(root) {
        var result;
        var _Symbol = root.Symbol;
        if (typeof _Symbol === "function") {
          if (_Symbol.observable) {
            result = _Symbol.observable;
          } else {
            result = _Symbol("observable");
            _Symbol.observable = result;
          }
        } else {
          result = "@@observable";
        }
        return result;
      }
    }
  });

  // node_modules/redux/node_modules/symbol-observable/lib/index.js
  var require_lib = __commonJS({
    "node_modules/redux/node_modules/symbol-observable/lib/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _ponyfill = require_ponyfill();
      var _ponyfill2 = _interopRequireDefault(_ponyfill);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var root;
      if (typeof self !== "undefined") {
        root = self;
      } else if (typeof window !== "undefined") {
        root = window;
      } else if (typeof global !== "undefined") {
        root = global;
      } else if (typeof module !== "undefined") {
        root = module;
      } else {
        root = Function("return this")();
      }
      var result = (0, _ponyfill2["default"])(root);
      exports["default"] = result;
    }
  });

  // node_modules/redux/lib/createStore.js
  var require_createStore = __commonJS({
    "node_modules/redux/lib/createStore.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.ActionTypes = void 0;
      exports["default"] = createStore;
      var _isPlainObject = require_isPlainObject();
      var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
      var _symbolObservable = require_lib();
      var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var ActionTypes = exports.ActionTypes = {
        INIT: "@@redux/INIT"
      };
      function createStore(reducer, preloadedState, enhancer) {
        var _ref2;
        if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
          enhancer = preloadedState;
          preloadedState = void 0;
        }
        if (typeof enhancer !== "undefined") {
          if (typeof enhancer !== "function") {
            throw new Error("Expected the enhancer to be a function.");
          }
          return enhancer(createStore)(reducer, preloadedState);
        }
        if (typeof reducer !== "function") {
          throw new Error("Expected the reducer to be a function.");
        }
        var currentReducer = reducer;
        var currentState = preloadedState;
        var currentListeners = [];
        var nextListeners = currentListeners;
        var isDispatching = false;
        function ensureCanMutateNextListeners() {
          if (nextListeners === currentListeners) {
            nextListeners = currentListeners.slice();
          }
        }
        function getState() {
          return currentState;
        }
        function subscribe(listener) {
          if (typeof listener !== "function") {
            throw new Error("Expected listener to be a function.");
          }
          var isSubscribed = true;
          ensureCanMutateNextListeners();
          nextListeners.push(listener);
          return function unsubscribe() {
            if (!isSubscribed) {
              return;
            }
            isSubscribed = false;
            ensureCanMutateNextListeners();
            var index = nextListeners.indexOf(listener);
            nextListeners.splice(index, 1);
          };
        }
        function dispatch(action) {
          if (!(0, _isPlainObject2["default"])(action)) {
            throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
          }
          if (typeof action.type === "undefined") {
            throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
          }
          if (isDispatching) {
            throw new Error("Reducers may not dispatch actions.");
          }
          try {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
          } finally {
            isDispatching = false;
          }
          var listeners = currentListeners = nextListeners;
          for (var i = 0; i < listeners.length; i++) {
            listeners[i]();
          }
          return action;
        }
        function replaceReducer(nextReducer) {
          if (typeof nextReducer !== "function") {
            throw new Error("Expected the nextReducer to be a function.");
          }
          currentReducer = nextReducer;
          dispatch({ type: ActionTypes.INIT });
        }
        function observable() {
          var _ref;
          var outerSubscribe = subscribe;
          return _ref = {
            /**
             * The minimal observable subscription method.
             * @param {Object} observer Any object that can be used as an observer.
             * The observer object should have a `next` method.
             * @returns {subscription} An object with an `unsubscribe` method that can
             * be used to unsubscribe the observable from the store, and prevent further
             * emission of values from the observable.
             */
            subscribe: function subscribe2(observer) {
              if (typeof observer !== "object") {
                throw new TypeError("Expected the observer to be an object.");
              }
              function observeState() {
                if (observer.next) {
                  observer.next(getState());
                }
              }
              observeState();
              var unsubscribe = outerSubscribe(observeState);
              return { unsubscribe };
            }
          }, _ref[_symbolObservable2["default"]] = function() {
            return this;
          }, _ref;
        }
        dispatch({ type: ActionTypes.INIT });
        return _ref2 = {
          dispatch,
          subscribe,
          getState,
          replaceReducer
        }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
      }
    }
  });

  // node_modules/redux/lib/utils/warning.js
  var require_warning = __commonJS({
    "node_modules/redux/lib/utils/warning.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = warning;
      function warning(message) {
        if (typeof console !== "undefined" && typeof console.error === "function") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (e) {
        }
      }
    }
  });

  // node_modules/redux/lib/combineReducers.js
  var require_combineReducers = __commonJS({
    "node_modules/redux/lib/combineReducers.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = combineReducers2;
      var _createStore = require_createStore();
      var _isPlainObject = require_isPlainObject();
      var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
      var _warning = require_warning();
      var _warning2 = _interopRequireDefault(_warning);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function getUndefinedStateErrorMessage(key, action) {
        var actionType = action && action.type;
        var actionName = actionType && '"' + actionType.toString() + '"' || "an action";
        return "Given action " + actionName + ', reducer "' + key + '" returned undefined. To ignore an action, you must explicitly return the previous state.';
      }
      function assertReducerSanity(reducers) {
        Object.keys(reducers).forEach(function(key) {
          var reducer = reducers[key];
          var initialState4 = reducer(void 0, { type: _createStore.ActionTypes.INIT });
          if (typeof initialState4 === "undefined") {
            throw new Error('Reducer "' + key + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
          }
          var type = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
          if (typeof reducer(void 0, { type }) === "undefined") {
            throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.");
          }
        });
      }
      function combineReducers2(reducers) {
        var reducerKeys = Object.keys(reducers);
        var finalReducers = {};
        for (var i = 0; i < reducerKeys.length; i++) {
          var key = reducerKeys[i];
          if (false) {
            if (typeof reducers[key] === "undefined") {
              (0, _warning2["default"])('No reducer provided for key "' + key + '"');
            }
          }
          if (typeof reducers[key] === "function") {
            finalReducers[key] = reducers[key];
          }
        }
        var finalReducerKeys = Object.keys(finalReducers);
        if (false) {
          var unexpectedKeyCache = {};
        }
        var sanityError;
        try {
          assertReducerSanity(finalReducers);
        } catch (e) {
          sanityError = e;
        }
        return function combination() {
          var state = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
          var action = arguments[1];
          if (sanityError) {
            throw sanityError;
          }
          if (false) {
            var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
            if (warningMessage) {
              (0, _warning2["default"])(warningMessage);
            }
          }
          var hasChanged = false;
          var nextState = {};
          for (var i2 = 0; i2 < finalReducerKeys.length; i2++) {
            var key2 = finalReducerKeys[i2];
            var reducer = finalReducers[key2];
            var previousStateForKey = state[key2];
            var nextStateForKey = reducer(previousStateForKey, action);
            if (typeof nextStateForKey === "undefined") {
              var errorMessage = getUndefinedStateErrorMessage(key2, action);
              throw new Error(errorMessage);
            }
            nextState[key2] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
          }
          return hasChanged ? nextState : state;
        };
      }
    }
  });

  // node_modules/redux/lib/bindActionCreators.js
  var require_bindActionCreators = __commonJS({
    "node_modules/redux/lib/bindActionCreators.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = bindActionCreators;
      function bindActionCreator(actionCreator, dispatch) {
        return function() {
          return dispatch(actionCreator.apply(void 0, arguments));
        };
      }
      function bindActionCreators(actionCreators, dispatch) {
        if (typeof actionCreators === "function") {
          return bindActionCreator(actionCreators, dispatch);
        }
        if (typeof actionCreators !== "object" || actionCreators === null) {
          throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? "null" : typeof actionCreators) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        }
        var keys = Object.keys(actionCreators);
        var boundActionCreators = {};
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var actionCreator = actionCreators[key];
          if (typeof actionCreator === "function") {
            boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
          }
        }
        return boundActionCreators;
      }
    }
  });

  // node_modules/redux/lib/compose.js
  var require_compose = __commonJS({
    "node_modules/redux/lib/compose.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = compose;
      function compose() {
        for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
          funcs[_key] = arguments[_key];
        }
        if (funcs.length === 0) {
          return function(arg) {
            return arg;
          };
        }
        if (funcs.length === 1) {
          return funcs[0];
        }
        var last = funcs[funcs.length - 1];
        var rest = funcs.slice(0, -1);
        return function() {
          return rest.reduceRight(function(composed, f) {
            return f(composed);
          }, last.apply(void 0, arguments));
        };
      }
    }
  });

  // node_modules/redux/lib/applyMiddleware.js
  var require_applyMiddleware = __commonJS({
    "node_modules/redux/lib/applyMiddleware.js"(exports) {
      "use strict";
      exports.__esModule = true;
      var _extends = Object.assign || function(target) {
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
      exports["default"] = applyMiddleware;
      var _compose = require_compose();
      var _compose2 = _interopRequireDefault(_compose);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function applyMiddleware() {
        for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
          middlewares[_key] = arguments[_key];
        }
        return function(createStore) {
          return function(reducer, preloadedState, enhancer) {
            var store = createStore(reducer, preloadedState, enhancer);
            var _dispatch = store.dispatch;
            var chain = [];
            var middlewareAPI = {
              getState: store.getState,
              dispatch: function dispatch(action) {
                return _dispatch(action);
              }
            };
            chain = middlewares.map(function(middleware) {
              return middleware(middlewareAPI);
            });
            _dispatch = _compose2["default"].apply(void 0, chain)(store.dispatch);
            return _extends({}, store, {
              dispatch: _dispatch
            });
          };
        };
      }
    }
  });

  // node_modules/redux/lib/index.js
  var require_lib2 = __commonJS({
    "node_modules/redux/lib/index.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = void 0;
      var _createStore = require_createStore();
      var _createStore2 = _interopRequireDefault(_createStore);
      var _combineReducers = require_combineReducers();
      var _combineReducers2 = _interopRequireDefault(_combineReducers);
      var _bindActionCreators = require_bindActionCreators();
      var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
      var _applyMiddleware = require_applyMiddleware();
      var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
      var _compose = require_compose();
      var _compose2 = _interopRequireDefault(_compose);
      var _warning = require_warning();
      var _warning2 = _interopRequireDefault(_warning);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      if (false) {
        (0, _warning2["default"])("You are currently using minified code outside of NODE_ENV === 'production'. This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) to ensure you have the correct code for your production build.");
      }
      exports.createStore = _createStore2["default"];
      exports.combineReducers = _combineReducers2["default"];
      exports.bindActionCreators = _bindActionCreators2["default"];
      exports.applyMiddleware = _applyMiddleware2["default"];
      exports.compose = _compose2["default"];
    }
  });

  // packages/systems/ix2/shared-constants/trigger-events.ts
  var EventTypeConsts, EventAppliesTo, EventBasedOn, EventContinuousMouseAxes, EventLimitAffectedElements, QuickEffectIds, QuickEffectDirectionConsts;
  var init_trigger_events = __esm({
    "packages/systems/ix2/shared-constants/trigger-events.ts"() {
      "use strict";
      EventTypeConsts = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL"
      };
      EventAppliesTo = {
        ELEMENT: "ELEMENT",
        CLASS: "CLASS",
        PAGE: "PAGE"
      };
      EventBasedOn = {
        ELEMENT: "ELEMENT",
        VIEWPORT: "VIEWPORT"
      };
      EventContinuousMouseAxes = {
        X_AXIS: "X_AXIS",
        Y_AXIS: "Y_AXIS"
      };
      EventLimitAffectedElements = {
        CHILDREN: "CHILDREN",
        SIBLINGS: "SIBLINGS",
        IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
      };
      QuickEffectIds = {
        FADE_EFFECT: "FADE_EFFECT",
        SLIDE_EFFECT: "SLIDE_EFFECT",
        GROW_EFFECT: "GROW_EFFECT",
        SHRINK_EFFECT: "SHRINK_EFFECT",
        SPIN_EFFECT: "SPIN_EFFECT",
        FLY_EFFECT: "FLY_EFFECT",
        POP_EFFECT: "POP_EFFECT",
        FLIP_EFFECT: "FLIP_EFFECT",
        JIGGLE_EFFECT: "JIGGLE_EFFECT",
        PULSE_EFFECT: "PULSE_EFFECT",
        DROP_EFFECT: "DROP_EFFECT",
        BLINK_EFFECT: "BLINK_EFFECT",
        BOUNCE_EFFECT: "BOUNCE_EFFECT",
        FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
        FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
        RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
        JELLO_EFFECT: "JELLO_EFFECT",
        GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
        SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
        PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
      };
      QuickEffectDirectionConsts = {
        LEFT: "LEFT",
        RIGHT: "RIGHT",
        BOTTOM: "BOTTOM",
        TOP: "TOP",
        BOTTOM_LEFT: "BOTTOM_LEFT",
        BOTTOM_RIGHT: "BOTTOM_RIGHT",
        TOP_RIGHT: "TOP_RIGHT",
        TOP_LEFT: "TOP_LEFT",
        CLOCKWISE: "CLOCKWISE",
        COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
      };
    }
  });

  // packages/systems/ix2/shared-constants/animation-actions.ts
  var ActionTypeConsts, ActionAppliesTo;
  var init_animation_actions = __esm({
    "packages/systems/ix2/shared-constants/animation-actions.ts"() {
      "use strict";
      ActionTypeConsts = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_RIVE: "PLUGIN_RIVE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        // TODO: Clean these up below because they're not used at this time
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
      };
      ActionAppliesTo = {
        ELEMENT: "ELEMENT",
        ELEMENT_CLASS: "ELEMENT_CLASS",
        TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
      };
    }
  });

  // packages/systems/ix2/shared-constants/trigger-interactions.ts
  var InteractionTypeConsts;
  var init_trigger_interactions = __esm({
    "packages/systems/ix2/shared-constants/trigger-interactions.ts"() {
      "use strict";
      InteractionTypeConsts = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION"
      };
    }
  });

  // packages/systems/ix2/shared-constants/reduced-motion.ts
  var TRANSFORM_MOVE, TRANSFORM_SCALE, TRANSFORM_ROTATE, TRANSFORM_SKEW, STYLE_SIZE, STYLE_FILTER, STYLE_FONT_VARIATION, ReducedMotionTypes;
  var init_reduced_motion = __esm({
    "packages/systems/ix2/shared-constants/reduced-motion.ts"() {
      "use strict";
      init_animation_actions();
      ({
        TRANSFORM_MOVE,
        TRANSFORM_SCALE,
        TRANSFORM_ROTATE,
        TRANSFORM_SKEW,
        STYLE_SIZE,
        STYLE_FILTER,
        STYLE_FONT_VARIATION
      } = ActionTypeConsts);
      ReducedMotionTypes = {
        [TRANSFORM_MOVE]: true,
        [TRANSFORM_SCALE]: true,
        [TRANSFORM_ROTATE]: true,
        [TRANSFORM_SKEW]: true,
        [STYLE_SIZE]: true,
        [STYLE_FILTER]: true,
        [STYLE_FONT_VARIATION]: true
      };
    }
  });

  // packages/systems/ix2/shared-constants/IX2EngineActionTypes.ts
  var IX2EngineActionTypes_exports = {};
  __export(IX2EngineActionTypes_exports, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => IX2_ACTION_LIST_PLAYBACK_CHANGED,
    IX2_ANIMATION_FRAME_CHANGED: () => IX2_ANIMATION_FRAME_CHANGED,
    IX2_CLEAR_REQUESTED: () => IX2_CLEAR_REQUESTED,
    IX2_ELEMENT_STATE_CHANGED: () => IX2_ELEMENT_STATE_CHANGED,
    IX2_EVENT_LISTENER_ADDED: () => IX2_EVENT_LISTENER_ADDED,
    IX2_EVENT_STATE_CHANGED: () => IX2_EVENT_STATE_CHANGED,
    IX2_INSTANCE_ADDED: () => IX2_INSTANCE_ADDED,
    IX2_INSTANCE_REMOVED: () => IX2_INSTANCE_REMOVED,
    IX2_INSTANCE_STARTED: () => IX2_INSTANCE_STARTED,
    IX2_MEDIA_QUERIES_DEFINED: () => IX2_MEDIA_QUERIES_DEFINED,
    IX2_PARAMETER_CHANGED: () => IX2_PARAMETER_CHANGED,
    IX2_PLAYBACK_REQUESTED: () => IX2_PLAYBACK_REQUESTED,
    IX2_PREVIEW_REQUESTED: () => IX2_PREVIEW_REQUESTED,
    IX2_RAW_DATA_IMPORTED: () => IX2_RAW_DATA_IMPORTED,
    IX2_SESSION_INITIALIZED: () => IX2_SESSION_INITIALIZED,
    IX2_SESSION_STARTED: () => IX2_SESSION_STARTED,
    IX2_SESSION_STOPPED: () => IX2_SESSION_STOPPED,
    IX2_STOP_REQUESTED: () => IX2_STOP_REQUESTED,
    IX2_TEST_FRAME_RENDERED: () => IX2_TEST_FRAME_RENDERED,
    IX2_VIEWPORT_WIDTH_CHANGED: () => IX2_VIEWPORT_WIDTH_CHANGED
  });
  var IX2_RAW_DATA_IMPORTED, IX2_SESSION_INITIALIZED, IX2_SESSION_STARTED, IX2_SESSION_STOPPED, IX2_PREVIEW_REQUESTED, IX2_PLAYBACK_REQUESTED, IX2_STOP_REQUESTED, IX2_CLEAR_REQUESTED, IX2_EVENT_LISTENER_ADDED, IX2_EVENT_STATE_CHANGED, IX2_ANIMATION_FRAME_CHANGED, IX2_PARAMETER_CHANGED, IX2_INSTANCE_ADDED, IX2_INSTANCE_STARTED, IX2_INSTANCE_REMOVED, IX2_ELEMENT_STATE_CHANGED, IX2_ACTION_LIST_PLAYBACK_CHANGED, IX2_VIEWPORT_WIDTH_CHANGED, IX2_MEDIA_QUERIES_DEFINED, IX2_TEST_FRAME_RENDERED;
  var init_IX2EngineActionTypes = __esm({
    "packages/systems/ix2/shared-constants/IX2EngineActionTypes.ts"() {
      "use strict";
      IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
      IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
      IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
      IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
      IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
      IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
      IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
      IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
      IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
      IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
      IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
      IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
      IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
      IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
      IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
      IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
      IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
      IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
      IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
      IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED";
    }
  });

  // packages/systems/ix2/shared-constants/IX2EngineConstants.ts
  var IX2EngineConstants_exports = {};
  __export(IX2EngineConstants_exports, {
    ABSTRACT_NODE: () => ABSTRACT_NODE,
    AUTO: () => AUTO,
    BACKGROUND: () => BACKGROUND,
    BACKGROUND_COLOR: () => BACKGROUND_COLOR,
    BAR_DELIMITER: () => BAR_DELIMITER,
    BORDER_COLOR: () => BORDER_COLOR,
    BOUNDARY_SELECTOR: () => BOUNDARY_SELECTOR,
    CHILDREN: () => CHILDREN,
    COLON_DELIMITER: () => COLON_DELIMITER,
    COLOR: () => COLOR,
    COMMA_DELIMITER: () => COMMA_DELIMITER,
    CONFIG_UNIT: () => CONFIG_UNIT,
    CONFIG_VALUE: () => CONFIG_VALUE,
    CONFIG_X_UNIT: () => CONFIG_X_UNIT,
    CONFIG_X_VALUE: () => CONFIG_X_VALUE,
    CONFIG_Y_UNIT: () => CONFIG_Y_UNIT,
    CONFIG_Y_VALUE: () => CONFIG_Y_VALUE,
    CONFIG_Z_UNIT: () => CONFIG_Z_UNIT,
    CONFIG_Z_VALUE: () => CONFIG_Z_VALUE,
    DISPLAY: () => DISPLAY,
    FILTER: () => FILTER,
    FLEX: () => FLEX,
    FONT_VARIATION_SETTINGS: () => FONT_VARIATION_SETTINGS,
    HEIGHT: () => HEIGHT,
    HTML_ELEMENT: () => HTML_ELEMENT,
    IMMEDIATE_CHILDREN: () => IMMEDIATE_CHILDREN,
    IX2_ID_DELIMITER: () => IX2_ID_DELIMITER,
    OPACITY: () => OPACITY,
    PARENT: () => PARENT,
    PLAIN_OBJECT: () => PLAIN_OBJECT,
    PRESERVE_3D: () => PRESERVE_3D,
    RENDER_GENERAL: () => RENDER_GENERAL,
    RENDER_PLUGIN: () => RENDER_PLUGIN,
    RENDER_STYLE: () => RENDER_STYLE,
    RENDER_TRANSFORM: () => RENDER_TRANSFORM,
    ROTATE_X: () => ROTATE_X,
    ROTATE_Y: () => ROTATE_Y,
    ROTATE_Z: () => ROTATE_Z,
    SCALE_3D: () => SCALE_3D,
    SCALE_X: () => SCALE_X,
    SCALE_Y: () => SCALE_Y,
    SCALE_Z: () => SCALE_Z,
    SIBLINGS: () => SIBLINGS,
    SKEW: () => SKEW,
    SKEW_X: () => SKEW_X,
    SKEW_Y: () => SKEW_Y,
    TRANSFORM: () => TRANSFORM,
    TRANSLATE_3D: () => TRANSLATE_3D,
    TRANSLATE_X: () => TRANSLATE_X,
    TRANSLATE_Y: () => TRANSLATE_Y,
    TRANSLATE_Z: () => TRANSLATE_Z,
    WF_PAGE: () => WF_PAGE,
    WIDTH: () => WIDTH,
    WILL_CHANGE: () => WILL_CHANGE,
    W_MOD_IX: () => W_MOD_IX,
    W_MOD_JS: () => W_MOD_JS
  });
  var IX2_ID_DELIMITER, WF_PAGE, W_MOD_JS, W_MOD_IX, BOUNDARY_SELECTOR, CONFIG_X_VALUE, CONFIG_Y_VALUE, CONFIG_Z_VALUE, CONFIG_VALUE, CONFIG_X_UNIT, CONFIG_Y_UNIT, CONFIG_Z_UNIT, CONFIG_UNIT, TRANSFORM, TRANSLATE_X, TRANSLATE_Y, TRANSLATE_Z, TRANSLATE_3D, SCALE_X, SCALE_Y, SCALE_Z, SCALE_3D, ROTATE_X, ROTATE_Y, ROTATE_Z, SKEW, SKEW_X, SKEW_Y, OPACITY, FILTER, FONT_VARIATION_SETTINGS, WIDTH, HEIGHT, BACKGROUND_COLOR, BACKGROUND, BORDER_COLOR, COLOR, DISPLAY, FLEX, WILL_CHANGE, AUTO, COMMA_DELIMITER, COLON_DELIMITER, BAR_DELIMITER, CHILDREN, IMMEDIATE_CHILDREN, SIBLINGS, PARENT, PRESERVE_3D, HTML_ELEMENT, PLAIN_OBJECT, ABSTRACT_NODE, RENDER_TRANSFORM, RENDER_GENERAL, RENDER_STYLE, RENDER_PLUGIN;
  var init_IX2EngineConstants = __esm({
    "packages/systems/ix2/shared-constants/IX2EngineConstants.ts"() {
      "use strict";
      IX2_ID_DELIMITER = "|";
      WF_PAGE = "data-wf-page";
      W_MOD_JS = "w-mod-js";
      W_MOD_IX = "w-mod-ix";
      BOUNDARY_SELECTOR = ".w-dyn-item";
      CONFIG_X_VALUE = "xValue";
      CONFIG_Y_VALUE = "yValue";
      CONFIG_Z_VALUE = "zValue";
      CONFIG_VALUE = "value";
      CONFIG_X_UNIT = "xUnit";
      CONFIG_Y_UNIT = "yUnit";
      CONFIG_Z_UNIT = "zUnit";
      CONFIG_UNIT = "unit";
      TRANSFORM = "transform";
      TRANSLATE_X = "translateX";
      TRANSLATE_Y = "translateY";
      TRANSLATE_Z = "translateZ";
      TRANSLATE_3D = "translate3d";
      SCALE_X = "scaleX";
      SCALE_Y = "scaleY";
      SCALE_Z = "scaleZ";
      SCALE_3D = "scale3d";
      ROTATE_X = "rotateX";
      ROTATE_Y = "rotateY";
      ROTATE_Z = "rotateZ";
      SKEW = "skew";
      SKEW_X = "skewX";
      SKEW_Y = "skewY";
      OPACITY = "opacity";
      FILTER = "filter";
      FONT_VARIATION_SETTINGS = "font-variation-settings";
      WIDTH = "width";
      HEIGHT = "height";
      BACKGROUND_COLOR = "backgroundColor";
      BACKGROUND = "background";
      BORDER_COLOR = "borderColor";
      COLOR = "color";
      DISPLAY = "display";
      FLEX = "flex";
      WILL_CHANGE = "willChange";
      AUTO = "AUTO";
      COMMA_DELIMITER = ",";
      COLON_DELIMITER = ":";
      BAR_DELIMITER = "|";
      CHILDREN = "CHILDREN";
      IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
      SIBLINGS = "SIBLINGS";
      PARENT = "PARENT";
      PRESERVE_3D = "preserve-3d";
      HTML_ELEMENT = "HTML_ELEMENT";
      PLAIN_OBJECT = "PLAIN_OBJECT";
      ABSTRACT_NODE = "ABSTRACT_NODE";
      RENDER_TRANSFORM = "RENDER_TRANSFORM";
      RENDER_GENERAL = "RENDER_GENERAL";
      RENDER_STYLE = "RENDER_STYLE";
      RENDER_PLUGIN = "RENDER_PLUGIN";
    }
  });

  // packages/systems/ix2/shared-constants/index.ts
  var shared_constants_exports = {};
  __export(shared_constants_exports, {
    ActionAppliesTo: () => ActionAppliesTo,
    ActionTypeConsts: () => ActionTypeConsts,
    EventAppliesTo: () => EventAppliesTo,
    EventBasedOn: () => EventBasedOn,
    EventContinuousMouseAxes: () => EventContinuousMouseAxes,
    EventLimitAffectedElements: () => EventLimitAffectedElements,
    EventTypeConsts: () => EventTypeConsts,
    IX2EngineActionTypes: () => IX2EngineActionTypes_exports,
    IX2EngineConstants: () => IX2EngineConstants_exports,
    InteractionTypeConsts: () => InteractionTypeConsts,
    QuickEffectDirectionConsts: () => QuickEffectDirectionConsts,
    QuickEffectIds: () => QuickEffectIds,
    ReducedMotionTypes: () => ReducedMotionTypes
  });
  var init_shared_constants = __esm({
    "packages/systems/ix2/shared-constants/index.ts"() {
      "use strict";
      init_trigger_events();
      init_animation_actions();
      init_trigger_interactions();
      init_reduced_motion();
      init_IX2EngineActionTypes();
      init_IX2EngineConstants();
      init_animation_actions();
      init_trigger_events();
    }
  });

  // packages/systems/ix2/engine/reducers/IX2DataReducer.ts
  var IX2_RAW_DATA_IMPORTED2, ixData;
  var init_IX2DataReducer = __esm({
    "packages/systems/ix2/engine/reducers/IX2DataReducer.ts"() {
      "use strict";
      init_shared_constants();
      ({ IX2_RAW_DATA_IMPORTED: IX2_RAW_DATA_IMPORTED2 } = IX2EngineActionTypes_exports);
      ixData = (state = Object.freeze(
        {}
      ), action) => {
        switch (action.type) {
          case IX2_RAW_DATA_IMPORTED2: {
            return action.payload.ixData || Object.freeze({});
          }
          default: {
            return state;
          }
        }
      };
    }
  });

  // node_modules/timm/lib/timm.js
  var require_timm = __commonJS({
    "node_modules/timm/lib/timm.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
      } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      exports.clone = clone;
      exports.addLast = addLast2;
      exports.addFirst = addFirst;
      exports.removeLast = removeLast;
      exports.removeFirst = removeFirst;
      exports.insert = insert;
      exports.removeAt = removeAt;
      exports.replaceAt = replaceAt;
      exports.getIn = getIn2;
      exports.set = set3;
      exports.setIn = setIn4;
      exports.update = update;
      exports.updateIn = updateIn;
      exports.merge = merge3;
      exports.mergeDeep = mergeDeep;
      exports.mergeIn = mergeIn4;
      exports.omit = omit;
      exports.addDefaults = addDefaults;
      var INVALID_ARGS = "INVALID_ARGS";
      function throwStr(msg) {
        throw new Error(msg);
      }
      function getKeysAndSymbols(obj) {
        var keys = Object.keys(obj);
        if (Object.getOwnPropertySymbols) {
          return keys.concat(Object.getOwnPropertySymbols(obj));
        }
        return keys;
      }
      var hasOwnProperty = {}.hasOwnProperty;
      function clone(obj) {
        if (Array.isArray(obj))
          return obj.slice();
        var keys = getKeysAndSymbols(obj);
        var out = {};
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          out[key] = obj[key];
        }
        return out;
      }
      function doMerge(fAddDefaults, fDeep, first) {
        var out = first;
        !(out != null) && throwStr(false ? "At least one object should be provided to merge()" : INVALID_ARGS);
        var fChanged = false;
        for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
          rest[_key - 3] = arguments[_key];
        }
        for (var idx = 0; idx < rest.length; idx++) {
          var obj = rest[idx];
          if (obj == null)
            continue;
          var keys = getKeysAndSymbols(obj);
          if (!keys.length)
            continue;
          for (var j = 0; j <= keys.length; j++) {
            var key = keys[j];
            if (fAddDefaults && out[key] !== void 0)
              continue;
            var nextVal = obj[key];
            if (fDeep && isObject(out[key]) && isObject(nextVal)) {
              nextVal = doMerge(fAddDefaults, fDeep, out[key], nextVal);
            }
            if (nextVal === void 0 || nextVal === out[key])
              continue;
            if (!fChanged) {
              fChanged = true;
              out = clone(out);
            }
            out[key] = nextVal;
          }
        }
        return out;
      }
      function isObject(o) {
        var type = typeof o === "undefined" ? "undefined" : _typeof(o);
        return o != null && (type === "object" || type === "function");
      }
      function addLast2(array, val) {
        if (Array.isArray(val))
          return array.concat(val);
        return array.concat([val]);
      }
      function addFirst(array, val) {
        if (Array.isArray(val))
          return val.concat(array);
        return [val].concat(array);
      }
      function removeLast(array) {
        if (!array.length)
          return array;
        return array.slice(0, array.length - 1);
      }
      function removeFirst(array) {
        if (!array.length)
          return array;
        return array.slice(1);
      }
      function insert(array, idx, val) {
        return array.slice(0, idx).concat(Array.isArray(val) ? val : [val]).concat(array.slice(idx));
      }
      function removeAt(array, idx) {
        if (idx >= array.length || idx < 0)
          return array;
        return array.slice(0, idx).concat(array.slice(idx + 1));
      }
      function replaceAt(array, idx, newItem) {
        if (array[idx] === newItem)
          return array;
        var len = array.length;
        var result = Array(len);
        for (var i = 0; i < len; i++) {
          result[i] = array[i];
        }
        result[idx] = newItem;
        return result;
      }
      function getIn2(obj, path) {
        !Array.isArray(path) && throwStr(false ? "A path array should be provided when calling getIn()" : INVALID_ARGS);
        if (obj == null)
          return void 0;
        var ptr = obj;
        for (var i = 0; i < path.length; i++) {
          var key = path[i];
          ptr = ptr != null ? ptr[key] : void 0;
          if (ptr === void 0)
            return ptr;
        }
        return ptr;
      }
      function set3(obj, key, val) {
        var fallback = typeof key === "number" ? [] : {};
        var finalObj = obj == null ? fallback : obj;
        if (finalObj[key] === val)
          return finalObj;
        var obj2 = clone(finalObj);
        obj2[key] = val;
        return obj2;
      }
      function doSetIn(obj, path, val, idx) {
        var newValue = void 0;
        var key = path[idx];
        if (idx === path.length - 1) {
          newValue = val;
        } else {
          var nestedObj = isObject(obj) && isObject(obj[key]) ? obj[key] : typeof path[idx + 1] === "number" ? [] : {};
          newValue = doSetIn(nestedObj, path, val, idx + 1);
        }
        return set3(obj, key, newValue);
      }
      function setIn4(obj, path, val) {
        if (!path.length)
          return val;
        return doSetIn(obj, path, val, 0);
      }
      function update(obj, key, fnUpdate) {
        var prevVal = obj == null ? void 0 : obj[key];
        var nextVal = fnUpdate(prevVal);
        return set3(obj, key, nextVal);
      }
      function updateIn(obj, path, fnUpdate) {
        var prevVal = getIn2(obj, path);
        var nextVal = fnUpdate(prevVal);
        return setIn4(obj, path, nextVal);
      }
      function merge3(a, b, c, d, e, f) {
        for (var _len2 = arguments.length, rest = Array(_len2 > 6 ? _len2 - 6 : 0), _key2 = 6; _key2 < _len2; _key2++) {
          rest[_key2 - 6] = arguments[_key2];
        }
        return rest.length ? doMerge.call.apply(doMerge, [null, false, false, a, b, c, d, e, f].concat(rest)) : doMerge(false, false, a, b, c, d, e, f);
      }
      function mergeDeep(a, b, c, d, e, f) {
        for (var _len3 = arguments.length, rest = Array(_len3 > 6 ? _len3 - 6 : 0), _key3 = 6; _key3 < _len3; _key3++) {
          rest[_key3 - 6] = arguments[_key3];
        }
        return rest.length ? doMerge.call.apply(doMerge, [null, false, true, a, b, c, d, e, f].concat(rest)) : doMerge(false, true, a, b, c, d, e, f);
      }
      function mergeIn4(a, path, b, c, d, e, f) {
        var prevVal = getIn2(a, path);
        if (prevVal == null)
          prevVal = {};
        var nextVal = void 0;
        for (var _len4 = arguments.length, rest = Array(_len4 > 7 ? _len4 - 7 : 0), _key4 = 7; _key4 < _len4; _key4++) {
          rest[_key4 - 7] = arguments[_key4];
        }
        if (rest.length) {
          nextVal = doMerge.call.apply(doMerge, [null, false, false, prevVal, b, c, d, e, f].concat(rest));
        } else {
          nextVal = doMerge(false, false, prevVal, b, c, d, e, f);
        }
        return setIn4(a, path, nextVal);
      }
      function omit(obj, attrs) {
        var omitList = Array.isArray(attrs) ? attrs : [attrs];
        var fDoSomething = false;
        for (var i = 0; i < omitList.length; i++) {
          if (hasOwnProperty.call(obj, omitList[i])) {
            fDoSomething = true;
            break;
          }
        }
        if (!fDoSomething)
          return obj;
        var out = {};
        var keys = getKeysAndSymbols(obj);
        for (var _i = 0; _i < keys.length; _i++) {
          var key = keys[_i];
          if (omitList.indexOf(key) >= 0)
            continue;
          out[key] = obj[key];
        }
        return out;
      }
      function addDefaults(a, b, c, d, e, f) {
        for (var _len5 = arguments.length, rest = Array(_len5 > 6 ? _len5 - 6 : 0), _key5 = 6; _key5 < _len5; _key5++) {
          rest[_key5 - 6] = arguments[_key5];
        }
        return rest.length ? doMerge.call.apply(doMerge, [null, true, false, a, b, c, d, e, f].concat(rest)) : doMerge(true, false, a, b, c, d, e, f);
      }
      var timm = {
        clone,
        addLast: addLast2,
        addFirst,
        removeLast,
        removeFirst,
        insert,
        removeAt,
        replaceAt,
        getIn: getIn2,
        // eslint-disable-next-line object-shorthand
        set: set3,
        // so that flow doesn't complain
        setIn: setIn4,
        update,
        updateIn,
        merge: merge3,
        mergeDeep,
        mergeIn: mergeIn4,
        omit,
        addDefaults
      };
      exports.default = timm;
    }
  });

  // packages/systems/ix2/engine/reducers/IX2RequestReducer.ts
  var import_timm, IX2_PREVIEW_REQUESTED2, IX2_PLAYBACK_REQUESTED2, IX2_STOP_REQUESTED2, IX2_CLEAR_REQUESTED2, initialState, stateKeys, ixRequest;
  var init_IX2RequestReducer = __esm({
    "packages/systems/ix2/engine/reducers/IX2RequestReducer.ts"() {
      "use strict";
      init_shared_constants();
      import_timm = __toESM(require_timm());
      ({
        IX2_PREVIEW_REQUESTED: IX2_PREVIEW_REQUESTED2,
        IX2_PLAYBACK_REQUESTED: IX2_PLAYBACK_REQUESTED2,
        IX2_STOP_REQUESTED: IX2_STOP_REQUESTED2,
        IX2_CLEAR_REQUESTED: IX2_CLEAR_REQUESTED2
      } = IX2EngineActionTypes_exports);
      initialState = {
        preview: {},
        playback: {},
        stop: {},
        clear: {}
      };
      stateKeys = Object.create(null, {
        [IX2_PREVIEW_REQUESTED2]: { value: "preview" },
        [IX2_PLAYBACK_REQUESTED2]: { value: "playback" },
        [IX2_STOP_REQUESTED2]: { value: "stop" },
        [IX2_CLEAR_REQUESTED2]: { value: "clear" }
      });
      ixRequest = (state = initialState, action) => {
        if (action.type in stateKeys) {
          const key = [stateKeys[action.type]];
          return (0, import_timm.setIn)(state, [key], { ...action.payload });
        }
        return state;
      };
    }
  });

  // packages/systems/ix2/engine/reducers/IX2SessionReducer.ts
  var import_timm2, IX2_SESSION_INITIALIZED2, IX2_SESSION_STARTED2, IX2_TEST_FRAME_RENDERED2, IX2_SESSION_STOPPED2, IX2_EVENT_LISTENER_ADDED2, IX2_EVENT_STATE_CHANGED2, IX2_ANIMATION_FRAME_CHANGED2, IX2_ACTION_LIST_PLAYBACK_CHANGED2, IX2_VIEWPORT_WIDTH_CHANGED2, IX2_MEDIA_QUERIES_DEFINED2, initialState2, TEST_FRAME_STEPS_SIZE, ixSession;
  var init_IX2SessionReducer = __esm({
    "packages/systems/ix2/engine/reducers/IX2SessionReducer.ts"() {
      "use strict";
      init_shared_constants();
      import_timm2 = __toESM(require_timm());
      ({
        IX2_SESSION_INITIALIZED: IX2_SESSION_INITIALIZED2,
        IX2_SESSION_STARTED: IX2_SESSION_STARTED2,
        IX2_TEST_FRAME_RENDERED: IX2_TEST_FRAME_RENDERED2,
        IX2_SESSION_STOPPED: IX2_SESSION_STOPPED2,
        IX2_EVENT_LISTENER_ADDED: IX2_EVENT_LISTENER_ADDED2,
        IX2_EVENT_STATE_CHANGED: IX2_EVENT_STATE_CHANGED2,
        IX2_ANIMATION_FRAME_CHANGED: IX2_ANIMATION_FRAME_CHANGED2,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: IX2_ACTION_LIST_PLAYBACK_CHANGED2,
        IX2_VIEWPORT_WIDTH_CHANGED: IX2_VIEWPORT_WIDTH_CHANGED2,
        IX2_MEDIA_QUERIES_DEFINED: IX2_MEDIA_QUERIES_DEFINED2
      } = IX2EngineActionTypes_exports);
      initialState2 = {
        active: false,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: false,
        hasDefinedMediaQueries: false,
        reducedMotion: false
      };
      TEST_FRAME_STEPS_SIZE = 20;
      ixSession = (state = initialState2, action) => {
        switch (action.type) {
          case IX2_SESSION_INITIALIZED2: {
            const { hasBoundaryNodes, reducedMotion } = action.payload;
            return (0, import_timm2.merge)(state, {
              hasBoundaryNodes,
              reducedMotion
            });
          }
          case IX2_SESSION_STARTED2: {
            return (0, import_timm2.set)(state, "active", true);
          }
          case IX2_TEST_FRAME_RENDERED2: {
            const {
              payload: { step = TEST_FRAME_STEPS_SIZE }
            } = action;
            return (0, import_timm2.set)(state, "tick", state.tick + step);
          }
          case IX2_SESSION_STOPPED2: {
            return initialState2;
          }
          case IX2_ANIMATION_FRAME_CHANGED2: {
            const {
              payload: { now }
            } = action;
            return (0, import_timm2.set)(state, "tick", now);
          }
          case IX2_EVENT_LISTENER_ADDED2: {
            const eventListeners = (0, import_timm2.addLast)(state.eventListeners, action.payload);
            return (0, import_timm2.set)(state, "eventListeners", eventListeners);
          }
          case IX2_EVENT_STATE_CHANGED2: {
            const { stateKey, newState } = action.payload;
            return (0, import_timm2.setIn)(state, ["eventState", stateKey], newState);
          }
          case IX2_ACTION_LIST_PLAYBACK_CHANGED2: {
            const { actionListId, isPlaying } = action.payload;
            return (0, import_timm2.setIn)(state, ["playbackState", actionListId], isPlaying);
          }
          case IX2_VIEWPORT_WIDTH_CHANGED2: {
            const { width, mediaQueries } = action.payload;
            const mediaQueryCount = mediaQueries.length;
            let mediaQueryKey = null;
            for (let i = 0; i < mediaQueryCount; i++) {
              const { key, min, max } = mediaQueries[i];
              if (width >= min && width <= max) {
                mediaQueryKey = key;
                break;
              }
            }
            return (0, import_timm2.merge)(state, {
              viewportWidth: width,
              mediaQueryKey
            });
          }
          case IX2_MEDIA_QUERIES_DEFINED2: {
            return (0, import_timm2.set)(state, "hasDefinedMediaQueries", true);
          }
          default: {
            return state;
          }
        }
      };
    }
  });

  // node_modules/lodash/_listCacheClear.js
  var require_listCacheClear = __commonJS({
    "node_modules/lodash/_listCacheClear.js"(exports, module) {
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      module.exports = listCacheClear;
    }
  });

  // node_modules/lodash/eq.js
  var require_eq = __commonJS({
    "node_modules/lodash/eq.js"(exports, module) {
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      module.exports = eq;
    }
  });

  // node_modules/lodash/_assocIndexOf.js
  var require_assocIndexOf = __commonJS({
    "node_modules/lodash/_assocIndexOf.js"(exports, module) {
      var eq = require_eq();
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      module.exports = assocIndexOf;
    }
  });

  // node_modules/lodash/_listCacheDelete.js
  var require_listCacheDelete = __commonJS({
    "node_modules/lodash/_listCacheDelete.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      var arrayProto = Array.prototype;
      var splice = arrayProto.splice;
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      module.exports = listCacheDelete;
    }
  });

  // node_modules/lodash/_listCacheGet.js
  var require_listCacheGet = __commonJS({
    "node_modules/lodash/_listCacheGet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? void 0 : data[index][1];
      }
      module.exports = listCacheGet;
    }
  });

  // node_modules/lodash/_listCacheHas.js
  var require_listCacheHas = __commonJS({
    "node_modules/lodash/_listCacheHas.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      module.exports = listCacheHas;
    }
  });

  // node_modules/lodash/_listCacheSet.js
  var require_listCacheSet = __commonJS({
    "node_modules/lodash/_listCacheSet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      module.exports = listCacheSet;
    }
  });

  // node_modules/lodash/_ListCache.js
  var require_ListCache = __commonJS({
    "node_modules/lodash/_ListCache.js"(exports, module) {
      var listCacheClear = require_listCacheClear();
      var listCacheDelete = require_listCacheDelete();
      var listCacheGet = require_listCacheGet();
      var listCacheHas = require_listCacheHas();
      var listCacheSet = require_listCacheSet();
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      module.exports = ListCache;
    }
  });

  // node_modules/lodash/_stackClear.js
  var require_stackClear = __commonJS({
    "node_modules/lodash/_stackClear.js"(exports, module) {
      var ListCache = require_ListCache();
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      module.exports = stackClear;
    }
  });

  // node_modules/lodash/_stackDelete.js
  var require_stackDelete = __commonJS({
    "node_modules/lodash/_stackDelete.js"(exports, module) {
      function stackDelete(key) {
        var data = this.__data__, result = data["delete"](key);
        this.size = data.size;
        return result;
      }
      module.exports = stackDelete;
    }
  });

  // node_modules/lodash/_stackGet.js
  var require_stackGet = __commonJS({
    "node_modules/lodash/_stackGet.js"(exports, module) {
      function stackGet(key) {
        return this.__data__.get(key);
      }
      module.exports = stackGet;
    }
  });

  // node_modules/lodash/_stackHas.js
  var require_stackHas = __commonJS({
    "node_modules/lodash/_stackHas.js"(exports, module) {
      function stackHas(key) {
        return this.__data__.has(key);
      }
      module.exports = stackHas;
    }
  });

  // node_modules/lodash/isObject.js
  var require_isObject = __commonJS({
    "node_modules/lodash/isObject.js"(exports, module) {
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      module.exports = isObject;
    }
  });

  // node_modules/lodash/isFunction.js
  var require_isFunction = __commonJS({
    "node_modules/lodash/isFunction.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObject = require_isObject();
      var asyncTag = "[object AsyncFunction]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var proxyTag = "[object Proxy]";
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      module.exports = isFunction;
    }
  });

  // node_modules/lodash/_coreJsData.js
  var require_coreJsData = __commonJS({
    "node_modules/lodash/_coreJsData.js"(exports, module) {
      var root = require_root();
      var coreJsData = root["__core-js_shared__"];
      module.exports = coreJsData;
    }
  });

  // node_modules/lodash/_isMasked.js
  var require_isMasked = __commonJS({
    "node_modules/lodash/_isMasked.js"(exports, module) {
      var coreJsData = require_coreJsData();
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      module.exports = isMasked;
    }
  });

  // node_modules/lodash/_toSource.js
  var require_toSource = __commonJS({
    "node_modules/lodash/_toSource.js"(exports, module) {
      var funcProto = Function.prototype;
      var funcToString = funcProto.toString;
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      module.exports = toSource;
    }
  });

  // node_modules/lodash/_baseIsNative.js
  var require_baseIsNative = __commonJS({
    "node_modules/lodash/_baseIsNative.js"(exports, module) {
      var isFunction = require_isFunction();
      var isMasked = require_isMasked();
      var isObject = require_isObject();
      var toSource = require_toSource();
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      module.exports = baseIsNative;
    }
  });

  // node_modules/lodash/_getValue.js
  var require_getValue = __commonJS({
    "node_modules/lodash/_getValue.js"(exports, module) {
      function getValue(object, key) {
        return object == null ? void 0 : object[key];
      }
      module.exports = getValue;
    }
  });

  // node_modules/lodash/_getNative.js
  var require_getNative = __commonJS({
    "node_modules/lodash/_getNative.js"(exports, module) {
      var baseIsNative = require_baseIsNative();
      var getValue = require_getValue();
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : void 0;
      }
      module.exports = getNative;
    }
  });

  // node_modules/lodash/_Map.js
  var require_Map = __commonJS({
    "node_modules/lodash/_Map.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Map2 = getNative(root, "Map");
      module.exports = Map2;
    }
  });

  // node_modules/lodash/_nativeCreate.js
  var require_nativeCreate = __commonJS({
    "node_modules/lodash/_nativeCreate.js"(exports, module) {
      var getNative = require_getNative();
      var nativeCreate = getNative(Object, "create");
      module.exports = nativeCreate;
    }
  });

  // node_modules/lodash/_hashClear.js
  var require_hashClear = __commonJS({
    "node_modules/lodash/_hashClear.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      module.exports = hashClear;
    }
  });

  // node_modules/lodash/_hashDelete.js
  var require_hashDelete = __commonJS({
    "node_modules/lodash/_hashDelete.js"(exports, module) {
      function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = hashDelete;
    }
  });

  // node_modules/lodash/_hashGet.js
  var require_hashGet = __commonJS({
    "node_modules/lodash/_hashGet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty.call(data, key) ? data[key] : void 0;
      }
      module.exports = hashGet;
    }
  });

  // node_modules/lodash/_hashHas.js
  var require_hashHas = __commonJS({
    "node_modules/lodash/_hashHas.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
      }
      module.exports = hashHas;
    }
  });

  // node_modules/lodash/_hashSet.js
  var require_hashSet = __commonJS({
    "node_modules/lodash/_hashSet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      module.exports = hashSet;
    }
  });

  // node_modules/lodash/_Hash.js
  var require_Hash = __commonJS({
    "node_modules/lodash/_Hash.js"(exports, module) {
      var hashClear = require_hashClear();
      var hashDelete = require_hashDelete();
      var hashGet = require_hashGet();
      var hashHas = require_hashHas();
      var hashSet = require_hashSet();
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      module.exports = Hash;
    }
  });

  // node_modules/lodash/_mapCacheClear.js
  var require_mapCacheClear = __commonJS({
    "node_modules/lodash/_mapCacheClear.js"(exports, module) {
      var Hash = require_Hash();
      var ListCache = require_ListCache();
      var Map2 = require_Map();
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      module.exports = mapCacheClear;
    }
  });

  // node_modules/lodash/_isKeyable.js
  var require_isKeyable = __commonJS({
    "node_modules/lodash/_isKeyable.js"(exports, module) {
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      module.exports = isKeyable;
    }
  });

  // node_modules/lodash/_getMapData.js
  var require_getMapData = __commonJS({
    "node_modules/lodash/_getMapData.js"(exports, module) {
      var isKeyable = require_isKeyable();
      function getMapData(map, key) {
        var data = map.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      module.exports = getMapData;
    }
  });

  // node_modules/lodash/_mapCacheDelete.js
  var require_mapCacheDelete = __commonJS({
    "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheDelete(key) {
        var result = getMapData(this, key)["delete"](key);
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = mapCacheDelete;
    }
  });

  // node_modules/lodash/_mapCacheGet.js
  var require_mapCacheGet = __commonJS({
    "node_modules/lodash/_mapCacheGet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      module.exports = mapCacheGet;
    }
  });

  // node_modules/lodash/_mapCacheHas.js
  var require_mapCacheHas = __commonJS({
    "node_modules/lodash/_mapCacheHas.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      module.exports = mapCacheHas;
    }
  });

  // node_modules/lodash/_mapCacheSet.js
  var require_mapCacheSet = __commonJS({
    "node_modules/lodash/_mapCacheSet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size2 = data.size;
        data.set(key, value);
        this.size += data.size == size2 ? 0 : 1;
        return this;
      }
      module.exports = mapCacheSet;
    }
  });

  // node_modules/lodash/_MapCache.js
  var require_MapCache = __commonJS({
    "node_modules/lodash/_MapCache.js"(exports, module) {
      var mapCacheClear = require_mapCacheClear();
      var mapCacheDelete = require_mapCacheDelete();
      var mapCacheGet = require_mapCacheGet();
      var mapCacheHas = require_mapCacheHas();
      var mapCacheSet = require_mapCacheSet();
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      module.exports = MapCache;
    }
  });

  // node_modules/lodash/_stackSet.js
  var require_stackSet = __commonJS({
    "node_modules/lodash/_stackSet.js"(exports, module) {
      var ListCache = require_ListCache();
      var Map2 = require_Map();
      var MapCache = require_MapCache();
      var LARGE_ARRAY_SIZE = 200;
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      module.exports = stackSet;
    }
  });

  // node_modules/lodash/_Stack.js
  var require_Stack = __commonJS({
    "node_modules/lodash/_Stack.js"(exports, module) {
      var ListCache = require_ListCache();
      var stackClear = require_stackClear();
      var stackDelete = require_stackDelete();
      var stackGet = require_stackGet();
      var stackHas = require_stackHas();
      var stackSet = require_stackSet();
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      module.exports = Stack;
    }
  });

  // node_modules/lodash/_setCacheAdd.js
  var require_setCacheAdd = __commonJS({
    "node_modules/lodash/_setCacheAdd.js"(exports, module) {
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      module.exports = setCacheAdd;
    }
  });

  // node_modules/lodash/_setCacheHas.js
  var require_setCacheHas = __commonJS({
    "node_modules/lodash/_setCacheHas.js"(exports, module) {
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      module.exports = setCacheHas;
    }
  });

  // node_modules/lodash/_SetCache.js
  var require_SetCache = __commonJS({
    "node_modules/lodash/_SetCache.js"(exports, module) {
      var MapCache = require_MapCache();
      var setCacheAdd = require_setCacheAdd();
      var setCacheHas = require_setCacheHas();
      function SetCache(values) {
        var index = -1, length = values == null ? 0 : values.length;
        this.__data__ = new MapCache();
        while (++index < length) {
          this.add(values[index]);
        }
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      module.exports = SetCache;
    }
  });

  // node_modules/lodash/_arraySome.js
  var require_arraySome = __commonJS({
    "node_modules/lodash/_arraySome.js"(exports, module) {
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      module.exports = arraySome;
    }
  });

  // node_modules/lodash/_cacheHas.js
  var require_cacheHas = __commonJS({
    "node_modules/lodash/_cacheHas.js"(exports, module) {
      function cacheHas(cache2, key) {
        return cache2.has(key);
      }
      module.exports = cacheHas;
    }
  });

  // node_modules/lodash/_equalArrays.js
  var require_equalArrays = __commonJS({
    "node_modules/lodash/_equalArrays.js"(exports, module) {
      var SetCache = require_SetCache();
      var arraySome = require_arraySome();
      var cacheHas = require_cacheHas();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array;
        }
        var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
        stack.set(array, other);
        stack.set(other, array);
        while (++index < arrLength) {
          var arrValue = array[index], othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
          }
          if (compared !== void 0) {
            if (compared) {
              continue;
            }
            result = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
          }
        }
        stack["delete"](array);
        stack["delete"](other);
        return result;
      }
      module.exports = equalArrays;
    }
  });

  // node_modules/lodash/_Uint8Array.js
  var require_Uint8Array = __commonJS({
    "node_modules/lodash/_Uint8Array.js"(exports, module) {
      var root = require_root();
      var Uint8Array2 = root.Uint8Array;
      module.exports = Uint8Array2;
    }
  });

  // node_modules/lodash/_mapToArray.js
  var require_mapToArray = __commonJS({
    "node_modules/lodash/_mapToArray.js"(exports, module) {
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      module.exports = mapToArray;
    }
  });

  // node_modules/lodash/_setToArray.js
  var require_setToArray = __commonJS({
    "node_modules/lodash/_setToArray.js"(exports, module) {
      function setToArray(set3) {
        var index = -1, result = Array(set3.size);
        set3.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      module.exports = setToArray;
    }
  });

  // node_modules/lodash/_equalByTag.js
  var require_equalByTag = __commonJS({
    "node_modules/lodash/_equalByTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var Uint8Array2 = require_Uint8Array();
      var eq = require_eq();
      var equalArrays = require_equalArrays();
      var mapToArray = require_mapToArray();
      var setToArray = require_setToArray();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var symbolTag = "[object Symbol]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object, +other);
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case regexpTag:
          case stringTag:
            return object == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      module.exports = equalByTag;
    }
  });

  // node_modules/lodash/_arrayPush.js
  var require_arrayPush = __commonJS({
    "node_modules/lodash/_arrayPush.js"(exports, module) {
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      module.exports = arrayPush;
    }
  });

  // node_modules/lodash/isArray.js
  var require_isArray = __commonJS({
    "node_modules/lodash/isArray.js"(exports, module) {
      var isArray = Array.isArray;
      module.exports = isArray;
    }
  });

  // node_modules/lodash/_baseGetAllKeys.js
  var require_baseGetAllKeys = __commonJS({
    "node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var isArray = require_isArray();
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result = keysFunc(object);
        return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
      }
      module.exports = baseGetAllKeys;
    }
  });

  // node_modules/lodash/_arrayFilter.js
  var require_arrayFilter = __commonJS({
    "node_modules/lodash/_arrayFilter.js"(exports, module) {
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      module.exports = arrayFilter;
    }
  });

  // node_modules/lodash/stubArray.js
  var require_stubArray = __commonJS({
    "node_modules/lodash/stubArray.js"(exports, module) {
      function stubArray() {
        return [];
      }
      module.exports = stubArray;
    }
  });

  // node_modules/lodash/_getSymbols.js
  var require_getSymbols = __commonJS({
    "node_modules/lodash/_getSymbols.js"(exports, module) {
      var arrayFilter = require_arrayFilter();
      var stubArray = require_stubArray();
      var objectProto = Object.prototype;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
        if (object == null) {
          return [];
        }
        object = Object(object);
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };
      module.exports = getSymbols;
    }
  });

  // node_modules/lodash/_baseTimes.js
  var require_baseTimes = __commonJS({
    "node_modules/lodash/_baseTimes.js"(exports, module) {
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      module.exports = baseTimes;
    }
  });

  // node_modules/lodash/_baseIsArguments.js
  var require_baseIsArguments = __commonJS({
    "node_modules/lodash/_baseIsArguments.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      module.exports = baseIsArguments;
    }
  });

  // node_modules/lodash/isArguments.js
  var require_isArguments = __commonJS({
    "node_modules/lodash/isArguments.js"(exports, module) {
      var baseIsArguments = require_baseIsArguments();
      var isObjectLike = require_isObjectLike();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var isArguments = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      module.exports = isArguments;
    }
  });

  // node_modules/lodash/stubFalse.js
  var require_stubFalse = __commonJS({
    "node_modules/lodash/stubFalse.js"(exports, module) {
      function stubFalse() {
        return false;
      }
      module.exports = stubFalse;
    }
  });

  // node_modules/lodash/isBuffer.js
  var require_isBuffer = __commonJS({
    "node_modules/lodash/isBuffer.js"(exports, module) {
      var root = require_root();
      var stubFalse = require_stubFalse();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var Buffer2 = moduleExports ? root.Buffer : void 0;
      var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
      var isBuffer = nativeIsBuffer || stubFalse;
      module.exports = isBuffer;
    }
  });

  // node_modules/lodash/_isIndex.js
  var require_isIndex = __commonJS({
    "node_modules/lodash/_isIndex.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      module.exports = isIndex;
    }
  });

  // node_modules/lodash/isLength.js
  var require_isLength = __commonJS({
    "node_modules/lodash/isLength.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      module.exports = isLength;
    }
  });

  // node_modules/lodash/_baseIsTypedArray.js
  var require_baseIsTypedArray = __commonJS({
    "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isLength = require_isLength();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var funcTag = "[object Function]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var objectTag = "[object Object]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var weakMapTag = "[object WeakMap]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var float32Tag = "[object Float32Array]";
      var float64Tag = "[object Float64Array]";
      var int8Tag = "[object Int8Array]";
      var int16Tag = "[object Int16Array]";
      var int32Tag = "[object Int32Array]";
      var uint8Tag = "[object Uint8Array]";
      var uint8ClampedTag = "[object Uint8ClampedArray]";
      var uint16Tag = "[object Uint16Array]";
      var uint32Tag = "[object Uint32Array]";
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      module.exports = baseIsTypedArray;
    }
  });

  // node_modules/lodash/_baseUnary.js
  var require_baseUnary = __commonJS({
    "node_modules/lodash/_baseUnary.js"(exports, module) {
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      module.exports = baseUnary;
    }
  });

  // node_modules/lodash/_nodeUtil.js
  var require_nodeUtil = __commonJS({
    "node_modules/lodash/_nodeUtil.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      module.exports = nodeUtil;
    }
  });

  // node_modules/lodash/isTypedArray.js
  var require_isTypedArray = __commonJS({
    "node_modules/lodash/isTypedArray.js"(exports, module) {
      var baseIsTypedArray = require_baseIsTypedArray();
      var baseUnary = require_baseUnary();
      var nodeUtil = require_nodeUtil();
      var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      module.exports = isTypedArray;
    }
  });

  // node_modules/lodash/_arrayLikeKeys.js
  var require_arrayLikeKeys = __commonJS({
    "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
      var baseTimes = require_baseTimes();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isIndex = require_isIndex();
      var isTypedArray = require_isTypedArray();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
          (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
          isIndex(key, length)))) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = arrayLikeKeys;
    }
  });

  // node_modules/lodash/_isPrototype.js
  var require_isPrototype = __commonJS({
    "node_modules/lodash/_isPrototype.js"(exports, module) {
      var objectProto = Object.prototype;
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      module.exports = isPrototype;
    }
  });

  // node_modules/lodash/_nativeKeys.js
  var require_nativeKeys = __commonJS({
    "node_modules/lodash/_nativeKeys.js"(exports, module) {
      var overArg = require_overArg();
      var nativeKeys = overArg(Object.keys, Object);
      module.exports = nativeKeys;
    }
  });

  // node_modules/lodash/_baseKeys.js
  var require_baseKeys = __commonJS({
    "node_modules/lodash/_baseKeys.js"(exports, module) {
      var isPrototype = require_isPrototype();
      var nativeKeys = require_nativeKeys();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result = [];
        for (var key in Object(object)) {
          if (hasOwnProperty.call(object, key) && key != "constructor") {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = baseKeys;
    }
  });

  // node_modules/lodash/isArrayLike.js
  var require_isArrayLike = __commonJS({
    "node_modules/lodash/isArrayLike.js"(exports, module) {
      var isFunction = require_isFunction();
      var isLength = require_isLength();
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      module.exports = isArrayLike;
    }
  });

  // node_modules/lodash/keys.js
  var require_keys = __commonJS({
    "node_modules/lodash/keys.js"(exports, module) {
      var arrayLikeKeys = require_arrayLikeKeys();
      var baseKeys = require_baseKeys();
      var isArrayLike = require_isArrayLike();
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      module.exports = keys;
    }
  });

  // node_modules/lodash/_getAllKeys.js
  var require_getAllKeys = __commonJS({
    "node_modules/lodash/_getAllKeys.js"(exports, module) {
      var baseGetAllKeys = require_baseGetAllKeys();
      var getSymbols = require_getSymbols();
      var keys = require_keys();
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
      }
      module.exports = getAllKeys;
    }
  });

  // node_modules/lodash/_equalObjects.js
  var require_equalObjects = __commonJS({
    "node_modules/lodash/_equalObjects.js"(exports, module) {
      var getAllKeys = require_getAllKeys();
      var COMPARE_PARTIAL_FLAG = 1;
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object;
        }
        var result = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result;
      }
      module.exports = equalObjects;
    }
  });

  // node_modules/lodash/_DataView.js
  var require_DataView = __commonJS({
    "node_modules/lodash/_DataView.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var DataView = getNative(root, "DataView");
      module.exports = DataView;
    }
  });

  // node_modules/lodash/_Promise.js
  var require_Promise = __commonJS({
    "node_modules/lodash/_Promise.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Promise2 = getNative(root, "Promise");
      module.exports = Promise2;
    }
  });

  // node_modules/lodash/_Set.js
  var require_Set = __commonJS({
    "node_modules/lodash/_Set.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Set2 = getNative(root, "Set");
      module.exports = Set2;
    }
  });

  // node_modules/lodash/_WeakMap.js
  var require_WeakMap = __commonJS({
    "node_modules/lodash/_WeakMap.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var WeakMap2 = getNative(root, "WeakMap");
      module.exports = WeakMap2;
    }
  });

  // node_modules/lodash/_getTag.js
  var require_getTag = __commonJS({
    "node_modules/lodash/_getTag.js"(exports, module) {
      var DataView = require_DataView();
      var Map2 = require_Map();
      var Promise2 = require_Promise();
      var Set2 = require_Set();
      var WeakMap2 = require_WeakMap();
      var baseGetTag = require_baseGetTag();
      var toSource = require_toSource();
      var mapTag = "[object Map]";
      var objectTag = "[object Object]";
      var promiseTag = "[object Promise]";
      var setTag = "[object Set]";
      var weakMapTag = "[object WeakMap]";
      var dataViewTag = "[object DataView]";
      var dataViewCtorString = toSource(DataView);
      var mapCtorString = toSource(Map2);
      var promiseCtorString = toSource(Promise2);
      var setCtorString = toSource(Set2);
      var weakMapCtorString = toSource(WeakMap2);
      var getTag = baseGetTag;
      if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
        getTag = function(value) {
          var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result;
        };
      }
      module.exports = getTag;
    }
  });

  // node_modules/lodash/_baseIsEqualDeep.js
  var require_baseIsEqualDeep = __commonJS({
    "node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
      var Stack = require_Stack();
      var equalArrays = require_equalArrays();
      var equalByTag = require_equalByTag();
      var equalObjects = require_equalObjects();
      var getTag = require_getTag();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isTypedArray = require_isTypedArray();
      var COMPARE_PARTIAL_FLAG = 1;
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var objectTag = "[object Object]";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      module.exports = baseIsEqualDeep;
    }
  });

  // node_modules/lodash/_baseIsEqual.js
  var require_baseIsEqual = __commonJS({
    "node_modules/lodash/_baseIsEqual.js"(exports, module) {
      var baseIsEqualDeep = require_baseIsEqualDeep();
      var isObjectLike = require_isObjectLike();
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      module.exports = baseIsEqual;
    }
  });

  // node_modules/lodash/_baseIsMatch.js
  var require_baseIsMatch = __commonJS({
    "node_modules/lodash/_baseIsMatch.js"(exports, module) {
      var Stack = require_Stack();
      var baseIsEqual = require_baseIsEqual();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function baseIsMatch(object, source, matchData, customizer) {
        var index = matchData.length, length = index, noCustomizer = !customizer;
        if (object == null) {
          return !length;
        }
        object = Object(object);
        while (index--) {
          var data = matchData[index];
          if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
            return false;
          }
        }
        while (++index < length) {
          data = matchData[index];
          var key = data[0], objValue = object[key], srcValue = data[1];
          if (noCustomizer && data[2]) {
            if (objValue === void 0 && !(key in object)) {
              return false;
            }
          } else {
            var stack = new Stack();
            if (customizer) {
              var result = customizer(objValue, srcValue, key, object, source, stack);
            }
            if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
              return false;
            }
          }
        }
        return true;
      }
      module.exports = baseIsMatch;
    }
  });

  // node_modules/lodash/_isStrictComparable.js
  var require_isStrictComparable = __commonJS({
    "node_modules/lodash/_isStrictComparable.js"(exports, module) {
      var isObject = require_isObject();
      function isStrictComparable(value) {
        return value === value && !isObject(value);
      }
      module.exports = isStrictComparable;
    }
  });

  // node_modules/lodash/_getMatchData.js
  var require_getMatchData = __commonJS({
    "node_modules/lodash/_getMatchData.js"(exports, module) {
      var isStrictComparable = require_isStrictComparable();
      var keys = require_keys();
      function getMatchData(object) {
        var result = keys(object), length = result.length;
        while (length--) {
          var key = result[length], value = object[key];
          result[length] = [key, value, isStrictComparable(value)];
        }
        return result;
      }
      module.exports = getMatchData;
    }
  });

  // node_modules/lodash/_matchesStrictComparable.js
  var require_matchesStrictComparable = __commonJS({
    "node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
      function matchesStrictComparable(key, srcValue) {
        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
        };
      }
      module.exports = matchesStrictComparable;
    }
  });

  // node_modules/lodash/_baseMatches.js
  var require_baseMatches = __commonJS({
    "node_modules/lodash/_baseMatches.js"(exports, module) {
      var baseIsMatch = require_baseIsMatch();
      var getMatchData = require_getMatchData();
      var matchesStrictComparable = require_matchesStrictComparable();
      function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function(object) {
          return object === source || baseIsMatch(object, source, matchData);
        };
      }
      module.exports = baseMatches;
    }
  });

  // node_modules/lodash/isSymbol.js
  var require_isSymbol = __commonJS({
    "node_modules/lodash/isSymbol.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var symbolTag = "[object Symbol]";
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      module.exports = isSymbol;
    }
  });

  // node_modules/lodash/_isKey.js
  var require_isKey = __commonJS({
    "node_modules/lodash/_isKey.js"(exports, module) {
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      var reIsPlainProp = /^\w*$/;
      function isKey(value, object) {
        if (isArray(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
      }
      module.exports = isKey;
    }
  });

  // node_modules/lodash/memoize.js
  var require_memoize = __commonJS({
    "node_modules/lodash/memoize.js"(exports, module) {
      var MapCache = require_MapCache();
      var FUNC_ERROR_TEXT = "Expected a function";
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache2 = memoized.cache;
          if (cache2.has(key)) {
            return cache2.get(key);
          }
          var result = func.apply(this, args);
          memoized.cache = cache2.set(key, result) || cache2;
          return result;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      module.exports = memoize;
    }
  });

  // node_modules/lodash/_memoizeCapped.js
  var require_memoizeCapped = __commonJS({
    "node_modules/lodash/_memoizeCapped.js"(exports, module) {
      var memoize = require_memoize();
      var MAX_MEMOIZE_SIZE = 500;
      function memoizeCapped(func) {
        var result = memoize(func, function(key) {
          if (cache2.size === MAX_MEMOIZE_SIZE) {
            cache2.clear();
          }
          return key;
        });
        var cache2 = result.cache;
        return result;
      }
      module.exports = memoizeCapped;
    }
  });

  // node_modules/lodash/_stringToPath.js
  var require_stringToPath = __commonJS({
    "node_modules/lodash/_stringToPath.js"(exports, module) {
      var memoizeCapped = require_memoizeCapped();
      var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = memoizeCapped(function(string) {
        var result = [];
        if (string.charCodeAt(0) === 46) {
          result.push("");
        }
        string.replace(rePropName, function(match, number, quote, subString) {
          result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result;
      });
      module.exports = stringToPath;
    }
  });

  // node_modules/lodash/_arrayMap.js
  var require_arrayMap = __commonJS({
    "node_modules/lodash/_arrayMap.js"(exports, module) {
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      module.exports = arrayMap;
    }
  });

  // node_modules/lodash/_baseToString.js
  var require_baseToString = __commonJS({
    "node_modules/lodash/_baseToString.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var arrayMap = require_arrayMap();
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolToString = symbolProto ? symbolProto.toString : void 0;
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module.exports = baseToString;
    }
  });

  // node_modules/lodash/toString.js
  var require_toString = __commonJS({
    "node_modules/lodash/toString.js"(exports, module) {
      var baseToString = require_baseToString();
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      module.exports = toString;
    }
  });

  // node_modules/lodash/_castPath.js
  var require_castPath = __commonJS({
    "node_modules/lodash/_castPath.js"(exports, module) {
      var isArray = require_isArray();
      var isKey = require_isKey();
      var stringToPath = require_stringToPath();
      var toString = require_toString();
      function castPath(value, object) {
        if (isArray(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString(value));
      }
      module.exports = castPath;
    }
  });

  // node_modules/lodash/_toKey.js
  var require_toKey = __commonJS({
    "node_modules/lodash/_toKey.js"(exports, module) {
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module.exports = toKey;
    }
  });

  // node_modules/lodash/_baseGet.js
  var require_baseGet = __commonJS({
    "node_modules/lodash/_baseGet.js"(exports, module) {
      var castPath = require_castPath();
      var toKey = require_toKey();
      function baseGet(object, path) {
        path = castPath(path, object);
        var index = 0, length = path.length;
        while (object != null && index < length) {
          object = object[toKey(path[index++])];
        }
        return index && index == length ? object : void 0;
      }
      module.exports = baseGet;
    }
  });

  // node_modules/lodash/get.js
  var require_get = __commonJS({
    "node_modules/lodash/get.js"(exports, module) {
      var baseGet = require_baseGet();
      function get3(object, path, defaultValue) {
        var result = object == null ? void 0 : baseGet(object, path);
        return result === void 0 ? defaultValue : result;
      }
      module.exports = get3;
    }
  });

  // node_modules/lodash/_baseHasIn.js
  var require_baseHasIn = __commonJS({
    "node_modules/lodash/_baseHasIn.js"(exports, module) {
      function baseHasIn(object, key) {
        return object != null && key in Object(object);
      }
      module.exports = baseHasIn;
    }
  });

  // node_modules/lodash/_hasPath.js
  var require_hasPath = __commonJS({
    "node_modules/lodash/_hasPath.js"(exports, module) {
      var castPath = require_castPath();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isIndex = require_isIndex();
      var isLength = require_isLength();
      var toKey = require_toKey();
      function hasPath(object, path, hasFunc) {
        path = castPath(path, object);
        var index = -1, length = path.length, result = false;
        while (++index < length) {
          var key = toKey(path[index]);
          if (!(result = object != null && hasFunc(object, key))) {
            break;
          }
          object = object[key];
        }
        if (result || ++index != length) {
          return result;
        }
        length = object == null ? 0 : object.length;
        return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
      }
      module.exports = hasPath;
    }
  });

  // node_modules/lodash/hasIn.js
  var require_hasIn = __commonJS({
    "node_modules/lodash/hasIn.js"(exports, module) {
      var baseHasIn = require_baseHasIn();
      var hasPath = require_hasPath();
      function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
      }
      module.exports = hasIn;
    }
  });

  // node_modules/lodash/_baseMatchesProperty.js
  var require_baseMatchesProperty = __commonJS({
    "node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
      var baseIsEqual = require_baseIsEqual();
      var get3 = require_get();
      var hasIn = require_hasIn();
      var isKey = require_isKey();
      var isStrictComparable = require_isStrictComparable();
      var matchesStrictComparable = require_matchesStrictComparable();
      var toKey = require_toKey();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function baseMatchesProperty(path, srcValue) {
        if (isKey(path) && isStrictComparable(srcValue)) {
          return matchesStrictComparable(toKey(path), srcValue);
        }
        return function(object) {
          var objValue = get3(object, path);
          return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
        };
      }
      module.exports = baseMatchesProperty;
    }
  });

  // node_modules/lodash/identity.js
  var require_identity = __commonJS({
    "node_modules/lodash/identity.js"(exports, module) {
      function identity(value) {
        return value;
      }
      module.exports = identity;
    }
  });

  // node_modules/lodash/_baseProperty.js
  var require_baseProperty = __commonJS({
    "node_modules/lodash/_baseProperty.js"(exports, module) {
      function baseProperty(key) {
        return function(object) {
          return object == null ? void 0 : object[key];
        };
      }
      module.exports = baseProperty;
    }
  });

  // node_modules/lodash/_basePropertyDeep.js
  var require_basePropertyDeep = __commonJS({
    "node_modules/lodash/_basePropertyDeep.js"(exports, module) {
      var baseGet = require_baseGet();
      function basePropertyDeep(path) {
        return function(object) {
          return baseGet(object, path);
        };
      }
      module.exports = basePropertyDeep;
    }
  });

  // node_modules/lodash/property.js
  var require_property = __commonJS({
    "node_modules/lodash/property.js"(exports, module) {
      var baseProperty = require_baseProperty();
      var basePropertyDeep = require_basePropertyDeep();
      var isKey = require_isKey();
      var toKey = require_toKey();
      function property(path) {
        return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
      }
      module.exports = property;
    }
  });

  // node_modules/lodash/_baseIteratee.js
  var require_baseIteratee = __commonJS({
    "node_modules/lodash/_baseIteratee.js"(exports, module) {
      var baseMatches = require_baseMatches();
      var baseMatchesProperty = require_baseMatchesProperty();
      var identity = require_identity();
      var isArray = require_isArray();
      var property = require_property();
      function baseIteratee(value) {
        if (typeof value == "function") {
          return value;
        }
        if (value == null) {
          return identity;
        }
        if (typeof value == "object") {
          return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
        }
        return property(value);
      }
      module.exports = baseIteratee;
    }
  });

  // node_modules/lodash/_createFind.js
  var require_createFind = __commonJS({
    "node_modules/lodash/_createFind.js"(exports, module) {
      var baseIteratee = require_baseIteratee();
      var isArrayLike = require_isArrayLike();
      var keys = require_keys();
      function createFind(findIndexFunc) {
        return function(collection, predicate, fromIndex) {
          var iterable = Object(collection);
          if (!isArrayLike(collection)) {
            var iteratee = baseIteratee(predicate, 3);
            collection = keys(collection);
            predicate = function(key) {
              return iteratee(iterable[key], key, iterable);
            };
          }
          var index = findIndexFunc(collection, predicate, fromIndex);
          return index > -1 ? iterable[iteratee ? collection[index] : index] : void 0;
        };
      }
      module.exports = createFind;
    }
  });

  // node_modules/lodash/_baseFindIndex.js
  var require_baseFindIndex = __commonJS({
    "node_modules/lodash/_baseFindIndex.js"(exports, module) {
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      module.exports = baseFindIndex;
    }
  });

  // node_modules/lodash/_trimmedEndIndex.js
  var require_trimmedEndIndex = __commonJS({
    "node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
      var reWhitespace = /\s/;
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      module.exports = trimmedEndIndex;
    }
  });

  // node_modules/lodash/_baseTrim.js
  var require_baseTrim = __commonJS({
    "node_modules/lodash/_baseTrim.js"(exports, module) {
      var trimmedEndIndex = require_trimmedEndIndex();
      var reTrimStart = /^\s+/;
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      module.exports = baseTrim;
    }
  });

  // node_modules/lodash/toNumber.js
  var require_toNumber = __commonJS({
    "node_modules/lodash/toNumber.js"(exports, module) {
      var baseTrim = require_baseTrim();
      var isObject = require_isObject();
      var isSymbol = require_isSymbol();
      var NAN = 0 / 0;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim(value);
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      module.exports = toNumber;
    }
  });

  // node_modules/lodash/toFinite.js
  var require_toFinite = __commonJS({
    "node_modules/lodash/toFinite.js"(exports, module) {
      var toNumber = require_toNumber();
      var INFINITY = 1 / 0;
      var MAX_INTEGER = 17976931348623157e292;
      function toFinite(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber(value);
        if (value === INFINITY || value === -INFINITY) {
          var sign = value < 0 ? -1 : 1;
          return sign * MAX_INTEGER;
        }
        return value === value ? value : 0;
      }
      module.exports = toFinite;
    }
  });

  // node_modules/lodash/toInteger.js
  var require_toInteger = __commonJS({
    "node_modules/lodash/toInteger.js"(exports, module) {
      var toFinite = require_toFinite();
      function toInteger(value) {
        var result = toFinite(value), remainder = result % 1;
        return result === result ? remainder ? result - remainder : result : 0;
      }
      module.exports = toInteger;
    }
  });

  // node_modules/lodash/findIndex.js
  var require_findIndex = __commonJS({
    "node_modules/lodash/findIndex.js"(exports, module) {
      var baseFindIndex = require_baseFindIndex();
      var baseIteratee = require_baseIteratee();
      var toInteger = require_toInteger();
      var nativeMax = Math.max;
      function findIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index < 0) {
          index = nativeMax(length + index, 0);
        }
        return baseFindIndex(array, baseIteratee(predicate, 3), index);
      }
      module.exports = findIndex;
    }
  });

  // node_modules/lodash/find.js
  var require_find = __commonJS({
    "node_modules/lodash/find.js"(exports, module) {
      var createFind = require_createFind();
      var findIndex = require_findIndex();
      var find3 = createFind(findIndex);
      module.exports = find3;
    }
  });

  // packages/systems/ix2/shared/logic/IX2BrowserSupport.ts
  var IX2BrowserSupport_exports = {};
  __export(IX2BrowserSupport_exports, {
    ELEMENT_MATCHES: () => ELEMENT_MATCHES,
    FLEX_PREFIXED: () => FLEX_PREFIXED,
    IS_BROWSER_ENV: () => IS_BROWSER_ENV,
    TRANSFORM_PREFIXED: () => TRANSFORM_PREFIXED,
    TRANSFORM_STYLE_PREFIXED: () => TRANSFORM_STYLE_PREFIXED,
    withBrowser: () => withBrowser
  });
  var import_find, IS_BROWSER_ENV, withBrowser, ELEMENT_MATCHES, FLEX_PREFIXED, TRANSFORM_PREFIXED, TRANSFORM_PREFIX, TRANSFORM_STYLE_PREFIXED;
  var init_IX2BrowserSupport = __esm({
    "packages/systems/ix2/shared/logic/IX2BrowserSupport.ts"() {
      "use strict";
      import_find = __toESM(require_find());
      IS_BROWSER_ENV = typeof window !== "undefined";
      withBrowser = (fn, fallback) => {
        if (IS_BROWSER_ENV) {
          return fn();
        }
        return fallback;
      };
      ELEMENT_MATCHES = withBrowser(() => {
        return (0, import_find.default)(
          [
            "matches",
            "matchesSelector",
            "mozMatchesSelector",
            "msMatchesSelector",
            "oMatchesSelector",
            "webkitMatchesSelector"
          ],
          (key) => key in Element.prototype
        );
      });
      FLEX_PREFIXED = withBrowser(() => {
        const el = document.createElement("i");
        const values = [
          "flex",
          "-webkit-flex",
          "-ms-flexbox",
          "-moz-box",
          "-webkit-box"
        ];
        const none = "";
        try {
          const { length } = values;
          for (let i = 0; i < length; i++) {
            const value = values[i];
            el.style.display = value;
            if (el.style.display === value) {
              return value;
            }
          }
          return none;
        } catch (err) {
          return none;
        }
      }, "flex");
      TRANSFORM_PREFIXED = withBrowser(() => {
        const el = document.createElement("i");
        if (el.style.transform == null) {
          const prefixes = ["Webkit", "Moz", "ms"];
          const suffix = "Transform";
          const { length } = prefixes;
          for (let i = 0; i < length; i++) {
            const prop = prefixes[i] + suffix;
            if (el.style[prop] !== void 0) {
              return prop;
            }
          }
        }
        return "transform";
      }, "transform");
      TRANSFORM_PREFIX = TRANSFORM_PREFIXED.split("transform")[0];
      TRANSFORM_STYLE_PREFIXED = TRANSFORM_PREFIX ? TRANSFORM_PREFIX + "TransformStyle" : "transformStyle";
    }
  });

  // node_modules/bezier-easing/src/index.js
  var require_src = __commonJS({
    "node_modules/bezier-easing/src/index.js"(exports, module) {
      var NEWTON_ITERATIONS = 4;
      var NEWTON_MIN_SLOPE = 1e-3;
      var SUBDIVISION_PRECISION = 1e-7;
      var SUBDIVISION_MAX_ITERATIONS = 10;
      var kSplineTableSize = 11;
      var kSampleStepSize = 1 / (kSplineTableSize - 1);
      var float32ArraySupported = typeof Float32Array === "function";
      function A(aA1, aA2) {
        return 1 - 3 * aA2 + 3 * aA1;
      }
      function B(aA1, aA2) {
        return 3 * aA2 - 6 * aA1;
      }
      function C(aA1) {
        return 3 * aA1;
      }
      function calcBezier(aT, aA1, aA2) {
        return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
      }
      function getSlope(aT, aA1, aA2) {
        return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
      }
      function binarySubdivide(aX, aA, aB, mX1, mX2) {
        var currentX, currentT, i = 0;
        do {
          currentT = aA + (aB - aA) / 2;
          currentX = calcBezier(currentT, mX1, mX2) - aX;
          if (currentX > 0) {
            aB = currentT;
          } else {
            aA = currentT;
          }
        } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
        return currentT;
      }
      function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
        for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
          var currentSlope = getSlope(aGuessT, mX1, mX2);
          if (currentSlope === 0) {
            return aGuessT;
          }
          var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
          aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
      }
      module.exports = function bezier(mX1, mY1, mX2, mY2) {
        if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
          throw new Error("bezier x values must be in [0, 1] range");
        }
        var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
        if (mX1 !== mY1 || mX2 !== mY2) {
          for (var i = 0; i < kSplineTableSize; ++i) {
            sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
          }
        }
        function getTForX(aX) {
          var intervalStart = 0;
          var currentSample = 1;
          var lastSample = kSplineTableSize - 1;
          for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += kSampleStepSize;
          }
          --currentSample;
          var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
          var guessForT = intervalStart + dist * kSampleStepSize;
          var initialSlope = getSlope(guessForT, mX1, mX2);
          if (initialSlope >= NEWTON_MIN_SLOPE) {
            return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
          } else if (initialSlope === 0) {
            return guessForT;
          } else {
            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
          }
        }
        return function BezierEasing3(x) {
          if (mX1 === mY1 && mX2 === mY2) {
            return x;
          }
          if (x === 0) {
            return 0;
          }
          if (x === 1) {
            return 1;
          }
          return calcBezier(getTForX(x), mY1, mY2);
        };
      };
    }
  });

  // packages/systems/ix2/shared/logic/IX2Easings.ts
  var IX2Easings_exports = {};
  __export(IX2Easings_exports, {
    bounce: () => bounce,
    bouncePast: () => bouncePast,
    ease: () => ease,
    easeIn: () => easeIn,
    easeInOut: () => easeInOut,
    easeOut: () => easeOut,
    inBack: () => inBack,
    inCirc: () => inCirc,
    inCubic: () => inCubic,
    inElastic: () => inElastic,
    inExpo: () => inExpo,
    inOutBack: () => inOutBack,
    inOutCirc: () => inOutCirc,
    inOutCubic: () => inOutCubic,
    inOutElastic: () => inOutElastic,
    inOutExpo: () => inOutExpo,
    inOutQuad: () => inOutQuad,
    inOutQuart: () => inOutQuart,
    inOutQuint: () => inOutQuint,
    inOutSine: () => inOutSine,
    inQuad: () => inQuad,
    inQuart: () => inQuart,
    inQuint: () => inQuint,
    inSine: () => inSine,
    outBack: () => outBack,
    outBounce: () => outBounce,
    outCirc: () => outCirc,
    outCubic: () => outCubic,
    outElastic: () => outElastic,
    outExpo: () => outExpo,
    outQuad: () => outQuad,
    outQuart: () => outQuart,
    outQuint: () => outQuint,
    outSine: () => outSine,
    swingFrom: () => swingFrom,
    swingFromTo: () => swingFromTo,
    swingTo: () => swingTo
  });
  function inQuad(pos) {
    return Math.pow(pos, 2);
  }
  function outQuad(pos) {
    return -(Math.pow(pos - 1, 2) - 1);
  }
  function inOutQuad(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 2);
    }
    return -0.5 * ((pos -= 2) * pos - 2);
  }
  function inCubic(pos) {
    return Math.pow(pos, 3);
  }
  function outCubic(pos) {
    return Math.pow(pos - 1, 3) + 1;
  }
  function inOutCubic(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 3);
    }
    return 0.5 * (Math.pow(pos - 2, 3) + 2);
  }
  function inQuart(pos) {
    return Math.pow(pos, 4);
  }
  function outQuart(pos) {
    return -(Math.pow(pos - 1, 4) - 1);
  }
  function inOutQuart(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 4);
    }
    return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
  }
  function inQuint(pos) {
    return Math.pow(pos, 5);
  }
  function outQuint(pos) {
    return Math.pow(pos - 1, 5) + 1;
  }
  function inOutQuint(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 5);
    }
    return 0.5 * (Math.pow(pos - 2, 5) + 2);
  }
  function inSine(pos) {
    return -Math.cos(pos * (Math.PI / 2)) + 1;
  }
  function outSine(pos) {
    return Math.sin(pos * (Math.PI / 2));
  }
  function inOutSine(pos) {
    return -0.5 * (Math.cos(Math.PI * pos) - 1);
  }
  function inExpo(pos) {
    return pos === 0 ? 0 : Math.pow(2, 10 * (pos - 1));
  }
  function outExpo(pos) {
    return pos === 1 ? 1 : -Math.pow(2, -10 * pos) + 1;
  }
  function inOutExpo(pos) {
    if (pos === 0) {
      return 0;
    }
    if (pos === 1) {
      return 1;
    }
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(2, 10 * (pos - 1));
    }
    return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
  }
  function inCirc(pos) {
    return -(Math.sqrt(1 - pos * pos) - 1);
  }
  function outCirc(pos) {
    return Math.sqrt(1 - Math.pow(pos - 1, 2));
  }
  function inOutCirc(pos) {
    if ((pos /= 0.5) < 1) {
      return -0.5 * (Math.sqrt(1 - pos * pos) - 1);
    }
    return 0.5 * (Math.sqrt(1 - (pos -= 2) * pos) + 1);
  }
  function outBounce(pos) {
    if (pos < 1 / 2.75) {
      return 7.5625 * pos * pos;
    } else if (pos < 2 / 2.75) {
      return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
    } else if (pos < 2.5 / 2.75) {
      return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
    } else {
      return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
    }
  }
  function inBack(pos) {
    const s = magicSwing;
    return pos * pos * ((s + 1) * pos - s);
  }
  function outBack(pos) {
    const s = magicSwing;
    return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
  }
  function inOutBack(pos) {
    let s = magicSwing;
    if ((pos /= 0.5) < 1) {
      return 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s));
    }
    return 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
  }
  function inElastic(pos) {
    let s = magicSwing;
    let p = 0;
    let a = 1;
    if (pos === 0) {
      return 0;
    }
    if (pos === 1) {
      return 1;
    }
    if (!p) {
      p = 0.3;
    }
    if (a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(1 / a);
    }
    return -(a * Math.pow(2, 10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p));
  }
  function outElastic(pos) {
    let s = magicSwing;
    let p = 0;
    let a = 1;
    if (pos === 0) {
      return 0;
    }
    if (pos === 1) {
      return 1;
    }
    if (!p) {
      p = 0.3;
    }
    if (a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(1 / a);
    }
    return a * Math.pow(2, -10 * pos) * Math.sin((pos - s) * (2 * Math.PI) / p) + 1;
  }
  function inOutElastic(pos) {
    let s = magicSwing;
    let p = 0;
    let a = 1;
    if (pos === 0) {
      return 0;
    }
    if ((pos /= 1 / 2) === 2) {
      return 1;
    }
    if (!p) {
      p = 0.3 * 1.5;
    }
    if (a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(1 / a);
    }
    if (pos < 1) {
      return -0.5 * (a * Math.pow(2, 10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p));
    }
    return a * Math.pow(2, -10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p) * 0.5 + 1;
  }
  function swingFromTo(pos) {
    let s = magicSwing;
    return (pos /= 0.5) < 1 ? 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s)) : 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
  }
  function swingFrom(pos) {
    const s = magicSwing;
    return pos * pos * ((s + 1) * pos - s);
  }
  function swingTo(pos) {
    const s = magicSwing;
    return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
  }
  function bounce(pos) {
    if (pos < 1 / 2.75) {
      return 7.5625 * pos * pos;
    } else if (pos < 2 / 2.75) {
      return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
    } else if (pos < 2.5 / 2.75) {
      return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
    } else {
      return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
    }
  }
  function bouncePast(pos) {
    if (pos < 1 / 2.75) {
      return 7.5625 * pos * pos;
    } else if (pos < 2 / 2.75) {
      return 2 - (7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75);
    } else if (pos < 2.5 / 2.75) {
      return 2 - (7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375);
    } else {
      return 2 - (7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375);
    }
  }
  var import_bezier_easing, magicSwing, ease, easeIn, easeOut, easeInOut;
  var init_IX2Easings = __esm({
    "packages/systems/ix2/shared/logic/IX2Easings.ts"() {
      "use strict";
      import_bezier_easing = __toESM(require_src());
      magicSwing = 1.70158;
      ease = (0, import_bezier_easing.default)(0.25, 0.1, 0.25, 1);
      easeIn = (0, import_bezier_easing.default)(0.42, 0, 1, 1);
      easeOut = (0, import_bezier_easing.default)(0, 0, 0.58, 1);
      easeInOut = (0, import_bezier_easing.default)(0.42, 0, 0.58, 1);
    }
  });

  // packages/systems/ix2/shared/logic/IX2EasingUtils.ts
  var IX2EasingUtils_exports = {};
  __export(IX2EasingUtils_exports, {
    applyEasing: () => applyEasing,
    createBezierEasing: () => createBezierEasing,
    optimizeFloat: () => optimizeFloat
  });
  function optimizeFloat(value, digits = 5, base = 10) {
    const pow = Math.pow(base, digits);
    const float = Number(Math.round(value * pow) / pow);
    return Math.abs(float) > 1e-4 ? float : 0;
  }
  function createBezierEasing(easing) {
    return (0, import_bezier_easing2.default)(...easing);
  }
  function applyEasing(easing, position, customEasingFn) {
    if (position === 0) {
      return 0;
    }
    if (position === 1) {
      return 1;
    }
    if (customEasingFn) {
      return optimizeFloat(position > 0 ? customEasingFn(position) : position);
    }
    return optimizeFloat(
      position > 0 && easing && IX2Easings_exports[easing] ? IX2Easings_exports[easing](position) : position
    );
  }
  var import_bezier_easing2;
  var init_IX2EasingUtils = __esm({
    "packages/systems/ix2/shared/logic/IX2EasingUtils.ts"() {
      "use strict";
      init_IX2Easings();
      import_bezier_easing2 = __toESM(require_src());
    }
  });

  // packages/systems/ix2/shared/reducers/IX2ElementsReducer.ts
  var IX2ElementsReducer_exports = {};
  __export(IX2ElementsReducer_exports, {
    createElementState: () => createElementState,
    ixElements: () => ixElements,
    mergeActionState: () => mergeActionState
  });
  function createElementState(state, ref, refType, elementId, actionItem) {
    const refId = refType === PLAIN_OBJECT2 ? (0, import_timm3.getIn)(actionItem, ["config", "target", "objectId"]) : null;
    return (0, import_timm3.mergeIn)(state, [elementId], {
      id: elementId,
      ref,
      refId,
      refType
    });
  }
  function mergeActionState(state, elementId, actionTypeId, actionState, actionItem) {
    const units = pickUnits(actionItem);
    const mergePath = [elementId, refState, actionTypeId];
    return (0, import_timm3.mergeIn)(state, mergePath, actionState, units);
  }
  function pickUnits(actionItem) {
    const { config } = actionItem;
    return valueUnitPairs.reduce((result, pair) => {
      const valueKey = pair[0];
      const unitKey = pair[1];
      const configValue = config[valueKey];
      const configUnit = config[unitKey];
      if (configValue != null && configUnit != null) {
        result[unitKey] = configUnit;
      }
      return result;
    }, {});
  }
  var import_timm3, HTML_ELEMENT2, PLAIN_OBJECT2, ABSTRACT_NODE2, CONFIG_X_VALUE2, CONFIG_Y_VALUE2, CONFIG_Z_VALUE2, CONFIG_VALUE2, CONFIG_X_UNIT2, CONFIG_Y_UNIT2, CONFIG_Z_UNIT2, CONFIG_UNIT2, IX2_SESSION_STOPPED3, IX2_INSTANCE_ADDED2, IX2_ELEMENT_STATE_CHANGED2, initialState3, refState, ixElements, valueUnitPairs;
  var init_IX2ElementsReducer = __esm({
    "packages/systems/ix2/shared/reducers/IX2ElementsReducer.ts"() {
      "use strict";
      import_timm3 = __toESM(require_timm());
      init_shared_constants();
      ({
        HTML_ELEMENT: HTML_ELEMENT2,
        PLAIN_OBJECT: PLAIN_OBJECT2,
        ABSTRACT_NODE: ABSTRACT_NODE2,
        CONFIG_X_VALUE: CONFIG_X_VALUE2,
        CONFIG_Y_VALUE: CONFIG_Y_VALUE2,
        CONFIG_Z_VALUE: CONFIG_Z_VALUE2,
        CONFIG_VALUE: CONFIG_VALUE2,
        CONFIG_X_UNIT: CONFIG_X_UNIT2,
        CONFIG_Y_UNIT: CONFIG_Y_UNIT2,
        CONFIG_Z_UNIT: CONFIG_Z_UNIT2,
        CONFIG_UNIT: CONFIG_UNIT2
      } = IX2EngineConstants_exports);
      ({ IX2_SESSION_STOPPED: IX2_SESSION_STOPPED3, IX2_INSTANCE_ADDED: IX2_INSTANCE_ADDED2, IX2_ELEMENT_STATE_CHANGED: IX2_ELEMENT_STATE_CHANGED2 } = IX2EngineActionTypes_exports);
      initialState3 = {};
      refState = "refState";
      ixElements = (state = initialState3, action = {}) => {
        switch (action.type) {
          case IX2_SESSION_STOPPED3: {
            return initialState3;
          }
          case IX2_INSTANCE_ADDED2: {
            const {
              elementId,
              element: ref,
              origin,
              actionItem,
              refType
            } = action.payload;
            const { actionTypeId } = actionItem;
            let newState = state;
            if ((0, import_timm3.getIn)(newState, [elementId, ref]) !== ref) {
              newState = createElementState(
                newState,
                ref,
                refType,
                elementId,
                actionItem
              );
            }
            return mergeActionState(
              newState,
              elementId,
              actionTypeId,
              origin,
              actionItem
            );
          }
          case IX2_ELEMENT_STATE_CHANGED2: {
            const { elementId, actionTypeId, current, actionItem } = action.payload;
            return mergeActionState(
              state,
              elementId,
              actionTypeId,
              current,
              actionItem
            );
          }
          default: {
            return state;
          }
        }
      };
      valueUnitPairs = [
        [CONFIG_X_VALUE2, CONFIG_X_UNIT2],
        [CONFIG_Y_VALUE2, CONFIG_Y_UNIT2],
        [CONFIG_Z_VALUE2, CONFIG_Z_UNIT2],
        [CONFIG_VALUE2, CONFIG_UNIT2]
      ];
    }
  });

  // packages/systems/ix2/plugins/IX2Lottie.js
  var require_IX2Lottie = __commonJS({
    "packages/systems/ix2/plugins/IX2Lottie.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        clearPlugin: function() {
          return clearPlugin2;
        },
        createPluginInstance: function() {
          return createPluginInstance3;
        },
        getPluginConfig: function() {
          return getPluginConfig2;
        },
        getPluginDestination: function() {
          return getPluginDestination2;
        },
        getPluginDuration: function() {
          return getPluginDuration3;
        },
        getPluginOrigin: function() {
          return getPluginOrigin2;
        },
        renderPlugin: function() {
          return renderPlugin2;
        }
      });
      var getPluginConfig2 = (actionItemConfig) => {
        return actionItemConfig.value;
      };
      var getPluginDuration3 = (element, actionItem) => {
        if (actionItem.config.duration !== "auto") {
          return null;
        }
        const duration = parseFloat(element.getAttribute("data-duration"));
        if (duration > 0) {
          return duration * 1e3;
        }
        return parseFloat(element.getAttribute("data-default-duration")) * 1e3;
      };
      var getPluginOrigin2 = (refState2) => {
        return refState2 || {
          value: 0
        };
      };
      var getPluginDestination2 = (actionItemConfig) => {
        return {
          value: actionItemConfig.value
        };
      };
      var createPluginInstance3 = (element) => {
        const instance = window.Webflow.require("lottie").createInstance(element);
        instance.stop();
        instance.setSubframe(true);
        return instance;
      };
      var renderPlugin2 = (pluginInstance, refState2, actionItem) => {
        if (!pluginInstance) {
          return;
        }
        const percent = refState2[actionItem.actionTypeId].value / 100;
        pluginInstance.goToFrame(pluginInstance.frames * percent);
      };
      var clearPlugin2 = (element) => {
        const instance = window.Webflow.require("lottie").createInstance(element);
        instance.stop();
      };
    }
  });

  // packages/systems/ix2/plugins/IX2Spline.js
  var require_IX2Spline = __commonJS({
    "packages/systems/ix2/plugins/IX2Spline.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        clearPlugin: function() {
          return clearPlugin2;
        },
        createPluginInstance: function() {
          return createPluginInstance3;
        },
        getPluginConfig: function() {
          return getPluginConfig2;
        },
        getPluginDestination: function() {
          return getPluginDestination2;
        },
        getPluginDuration: function() {
          return getPluginDuration3;
        },
        getPluginOrigin: function() {
          return getPluginOrigin2;
        },
        renderPlugin: function() {
          return renderPlugin2;
        }
      });
      var queryContainerElement = (elementId) => document.querySelector(`[data-w-id="${elementId}"]`);
      var getFrontendModule = () => window.Webflow.require("spline");
      var difference = (arr1, arr2) => arr1.filter((x) => !arr2.includes(x));
      var getPluginConfig2 = (actionItemConfig, key) => {
        return actionItemConfig.value[key];
      };
      var getPluginDuration3 = () => {
        return null;
      };
      var DEFAULT_VALUES = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1
      });
      var getPluginOrigin2 = (refState2, actionItem) => {
        const destination = actionItem.config.value;
        const destinationKeys = Object.keys(destination);
        if (refState2) {
          const stateKeys2 = Object.keys(refState2);
          const diffKeys = difference(destinationKeys, stateKeys2);
          if (diffKeys.length) {
            const origin2 = diffKeys.reduce((result, key) => {
              result[key] = DEFAULT_VALUES[key];
              return result;
            }, refState2);
            return origin2;
          }
          return refState2;
        }
        const origin = destinationKeys.reduce((result, key) => {
          result[key] = DEFAULT_VALUES[key];
          return result;
        }, {});
        return origin;
      };
      var getPluginDestination2 = (actionItemConfig) => {
        return actionItemConfig.value;
      };
      var createPluginInstance3 = (element, actionItem) => {
        const pluginElementId = actionItem?.config?.target?.pluginElement;
        return pluginElementId ? queryContainerElement(pluginElementId) : null;
      };
      var renderPlugin2 = (containerElement, refState2, actionItem) => {
        const frontendModule = getFrontendModule();
        const instance = frontendModule.getInstance(containerElement);
        const objectId = actionItem.config.target.objectId;
        const renderSpline = (spline) => {
          if (!spline) {
            throw new Error("Invalid spline app passed to renderSpline");
          }
          const obj = objectId && spline.findObjectById(objectId);
          if (!obj) {
            return;
          }
          const { PLUGIN_SPLINE: props } = refState2;
          if (props.positionX != null) {
            obj.position.x = props.positionX;
          }
          if (props.positionY != null) {
            obj.position.y = props.positionY;
          }
          if (props.positionZ != null) {
            obj.position.z = props.positionZ;
          }
          if (props.rotationX != null) {
            obj.rotation.x = props.rotationX;
          }
          if (props.rotationY != null) {
            obj.rotation.y = props.rotationY;
          }
          if (props.rotationZ != null) {
            obj.rotation.z = props.rotationZ;
          }
          if (props.scaleX != null) {
            obj.scale.x = props.scaleX;
          }
          if (props.scaleY != null) {
            obj.scale.y = props.scaleY;
          }
          if (props.scaleZ != null) {
            obj.scale.z = props.scaleZ;
          }
        };
        if (instance) {
          renderSpline(instance.spline);
        } else {
          frontendModule.setLoadHandler(containerElement, renderSpline);
        }
      };
      var clearPlugin2 = () => {
        return null;
      };
    }
  });

  // packages/systems/ix2/plugins/IX2Rive.js
  var require_IX2Rive = __commonJS({
    "packages/systems/ix2/plugins/IX2Rive.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        clearPlugin: function() {
          return clearPlugin2;
        },
        createPluginInstance: function() {
          return createPluginInstance3;
        },
        getPluginConfig: function() {
          return getPluginConfig2;
        },
        getPluginDestination: function() {
          return getPluginDestination2;
        },
        getPluginDuration: function() {
          return getPluginDuration3;
        },
        getPluginOrigin: function() {
          return getPluginOrigin2;
        },
        renderPlugin: function() {
          return renderPlugin2;
        }
      });
      var FIT_KEY = "--wf-rive-fit";
      var ALIGNMENT_KEY = "--wf-rive-alignment";
      var queryContainerElement = (elementId) => document.querySelector(`[data-w-id="${elementId}"]`);
      var getFrontendModule = () => window.Webflow.require("rive");
      var getPluginConfig2 = (actionItemConfig, key) => actionItemConfig.value.inputs[key];
      var getPluginDuration3 = () => null;
      var getPluginOrigin2 = (refState2, actionItem) => {
        if (refState2)
          return refState2;
        const result = {};
        const { inputs = {} } = actionItem.config.value;
        for (const input in inputs)
          if (inputs[input] == null)
            result[input] = 0;
        return result;
      };
      var getPluginDestination2 = (actionItemConfig) => actionItemConfig.value.inputs ?? {};
      var createPluginInstance3 = (element, actionItem) => {
        const selectorGuids = actionItem.config?.target?.selectorGuids || [];
        if (selectorGuids.length > 0)
          return element;
        const pluginElementId = actionItem?.config?.target?.pluginElement;
        return pluginElementId ? queryContainerElement(pluginElementId) : null;
      };
      var renderPlugin2 = (containerElement, { PLUGIN_RIVE: props }, actionItem) => {
        const frontendModule = getFrontendModule();
        const instance = frontendModule.getInstance(containerElement);
        const StateMachineInputType = frontendModule.rive.StateMachineInputType;
        const { name, inputs = {} } = actionItem.config.value || {};
        function renderRive(riveInstance) {
          if (riveInstance.loaded) {
            render();
          } else {
            const onLoad = () => {
              render();
              riveInstance?.off("load", onLoad);
            };
            riveInstance?.on("load", onLoad);
          }
          function render() {
            const stateMachineInputs = riveInstance.stateMachineInputs(name);
            if (stateMachineInputs == null)
              return;
            if (!riveInstance.isPlaying)
              riveInstance.play(name, false);
            if (FIT_KEY in inputs || ALIGNMENT_KEY in inputs) {
              const currentLayout = riveInstance.layout;
              const nextFit = inputs[FIT_KEY] ?? currentLayout.fit;
              const nextAlignment = inputs[ALIGNMENT_KEY] ?? currentLayout.alignment;
              if (nextFit !== currentLayout.fit || nextAlignment !== currentLayout.alignment) {
                riveInstance.layout = currentLayout.copyWith({
                  fit: nextFit,
                  alignment: nextAlignment
                });
              }
            }
            for (const inputName in inputs) {
              if (inputName === FIT_KEY || inputName === ALIGNMENT_KEY)
                continue;
              const machineInput = stateMachineInputs.find((m) => m.name === inputName);
              if (machineInput == null)
                continue;
              switch (machineInput.type) {
                case StateMachineInputType.Boolean: {
                  if (inputs[inputName] != null) {
                    const booleanValue = Boolean(inputs[inputName]);
                    machineInput.value = booleanValue;
                  }
                  break;
                }
                case StateMachineInputType.Number: {
                  const numberValue = props[inputName];
                  if (numberValue != null)
                    machineInput.value = numberValue;
                  break;
                }
                case StateMachineInputType.Trigger: {
                  if (inputs[inputName])
                    machineInput.fire();
                  break;
                }
              }
            }
          }
        }
        if (instance?.rive)
          renderRive(instance.rive);
        else
          frontendModule.setLoadHandler(containerElement, renderRive);
      };
      var clearPlugin2 = (_containerElement, _actionItem) => null;
    }
  });

  // packages/systems/ix2/shared-utils/normalizeColor.js
  var require_normalizeColor = __commonJS({
    "packages/systems/ix2/shared-utils/normalizeColor.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "normalizeColor", {
        enumerable: true,
        get: function() {
          return normalizeColor2;
        }
      });
      var colorNamesObj = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32"
      };
      function normalizeColor2(inputColor) {
        let red;
        let green;
        let blue;
        let alpha = 1;
        const rawColor = inputColor.replace(/\s/g, "").toLowerCase();
        const namedColor = typeof colorNamesObj[rawColor] === "string" ? colorNamesObj[rawColor].toLowerCase() : null;
        const cleanColor = namedColor || rawColor;
        if (cleanColor.startsWith("#")) {
          const hex = cleanColor.substring(1);
          if (hex.length === 3 || hex.length === 4) {
            red = parseInt(hex[0] + hex[0], 16);
            green = parseInt(hex[1] + hex[1], 16);
            blue = parseInt(hex[2] + hex[2], 16);
            if (hex.length === 4) {
              alpha = parseInt(hex[3] + hex[3], 16) / 255;
            }
          } else if (hex.length === 6 || hex.length === 8) {
            red = parseInt(hex.substring(0, 2), 16);
            green = parseInt(hex.substring(2, 4), 16);
            blue = parseInt(hex.substring(4, 6), 16);
            if (hex.length === 8) {
              alpha = parseInt(hex.substring(6, 8), 16) / 255;
            }
          }
        } else if (cleanColor.startsWith("rgba")) {
          const rgbaValues = cleanColor.match(/rgba\(([^)]+)\)/)[1].split(",");
          red = parseInt(rgbaValues[0], 10);
          green = parseInt(rgbaValues[1], 10);
          blue = parseInt(rgbaValues[2], 10);
          alpha = parseFloat(rgbaValues[3]);
        } else if (cleanColor.startsWith("rgb")) {
          const rgbValues = cleanColor.match(/rgb\(([^)]+)\)/)[1].split(",");
          red = parseInt(rgbValues[0], 10);
          green = parseInt(rgbValues[1], 10);
          blue = parseInt(rgbValues[2], 10);
        } else if (cleanColor.startsWith("hsla")) {
          const hslaValues = cleanColor.match(/hsla\(([^)]+)\)/)[1].split(",");
          const h = parseFloat(hslaValues[0]);
          const s = parseFloat(hslaValues[1].replace("%", "")) / 100;
          const l = parseFloat(hslaValues[2].replace("%", "")) / 100;
          alpha = parseFloat(hslaValues[3]);
          const C = (1 - Math.abs(2 * l - 1)) * s;
          const X = C * (1 - Math.abs(h / 60 % 2 - 1));
          const m = l - C / 2;
          let R;
          let G;
          let B;
          if (h >= 0 && h < 60) {
            R = C;
            G = X;
            B = 0;
          } else if (h >= 60 && h < 120) {
            R = X;
            G = C;
            B = 0;
          } else if (h >= 120 && h < 180) {
            R = 0;
            G = C;
            B = X;
          } else if (h >= 180 && h < 240) {
            R = 0;
            G = X;
            B = C;
          } else if (h >= 240 && h < 300) {
            R = X;
            G = 0;
            B = C;
          } else {
            R = C;
            G = 0;
            B = X;
          }
          red = Math.round((R + m) * 255);
          green = Math.round((G + m) * 255);
          blue = Math.round((B + m) * 255);
        } else if (cleanColor.startsWith("hsl")) {
          const hslValues = cleanColor.match(/hsl\(([^)]+)\)/)[1].split(",");
          const h = parseFloat(hslValues[0]);
          const s = parseFloat(hslValues[1].replace("%", "")) / 100;
          const l = parseFloat(hslValues[2].replace("%", "")) / 100;
          const C = (1 - Math.abs(2 * l - 1)) * s;
          const X = C * (1 - Math.abs(h / 60 % 2 - 1));
          const m = l - C / 2;
          let R;
          let G;
          let B;
          if (h >= 0 && h < 60) {
            R = C;
            G = X;
            B = 0;
          } else if (h >= 60 && h < 120) {
            R = X;
            G = C;
            B = 0;
          } else if (h >= 120 && h < 180) {
            R = 0;
            G = C;
            B = X;
          } else if (h >= 180 && h < 240) {
            R = 0;
            G = X;
            B = C;
          } else if (h >= 240 && h < 300) {
            R = X;
            G = 0;
            B = C;
          } else {
            R = C;
            G = 0;
            B = X;
          }
          red = Math.round((R + m) * 255);
          green = Math.round((G + m) * 255);
          blue = Math.round((B + m) * 255);
        }
        if (Number.isNaN(red) || Number.isNaN(green) || Number.isNaN(blue)) {
          throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${inputColor}'`);
        }
        return {
          red,
          green,
          blue,
          alpha
        };
      }
    }
  });

  // packages/systems/ix2/plugins/IX2Variable.js
  var require_IX2Variable = __commonJS({
    "packages/systems/ix2/plugins/IX2Variable.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        clearPlugin: function() {
          return clearPlugin2;
        },
        createPluginInstance: function() {
          return createPluginInstance3;
        },
        getPluginConfig: function() {
          return getPluginConfig2;
        },
        getPluginDestination: function() {
          return getPluginDestination2;
        },
        getPluginDuration: function() {
          return getPluginDuration3;
        },
        getPluginOrigin: function() {
          return getPluginOrigin2;
        },
        renderPlugin: function() {
          return renderPlugin2;
        }
      });
      var _normalizeColor = require_normalizeColor();
      var getPluginConfig2 = (actionItemConfig, key) => {
        return actionItemConfig.value[key];
      };
      var getPluginDuration3 = () => {
        return null;
      };
      var getPluginOrigin2 = (refState2, actionItem) => {
        if (refState2) {
          return refState2;
        }
        const destination = actionItem.config.value;
        const objectId = actionItem.config.target.objectId;
        const computedValue = getComputedStyle(document.documentElement).getPropertyValue(objectId);
        if (destination.size != null) {
          return {
            size: parseInt(computedValue, 10)
          };
        }
        if (destination.red != null && destination.green != null && destination.blue != null) {
          return (0, _normalizeColor.normalizeColor)(computedValue);
        }
      };
      var getPluginDestination2 = (actionItemConfig) => {
        return actionItemConfig.value;
      };
      var createPluginInstance3 = () => {
        return null;
      };
      var renderPlugin2 = (_, refState2, actionItem) => {
        const objectId = actionItem.config.target.objectId;
        const unit = actionItem.config.value.unit;
        const { PLUGIN_VARIABLE: props } = refState2;
        const { size: size2, red, green, blue, alpha } = props;
        let value;
        if (size2 != null) {
          value = size2 + unit;
        }
        if (red != null && blue != null && green != null && alpha != null) {
          value = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
        }
        if (value != null) {
          document.documentElement.style.setProperty(objectId, value);
        }
      };
      var clearPlugin2 = (ref, actionItem) => {
        const objectId = actionItem.config.target.objectId;
        document.documentElement.style.removeProperty(objectId);
      };
    }
  });

  // packages/systems/ix2/plugins/index.js
  var require_plugins = __commonJS({
    "packages/systems/ix2/plugins/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "pluginMethodMap", {
        enumerable: true,
        get: function() {
          return pluginMethodMap2;
        }
      });
      var _sharedconstants = (init_shared_constants(), __toCommonJS(shared_constants_exports));
      var _IX2Lottie = /* @__PURE__ */ _interop_require_wildcard(require_IX2Lottie());
      var _IX2Spline = /* @__PURE__ */ _interop_require_wildcard(require_IX2Spline());
      var _IX2Rive = /* @__PURE__ */ _interop_require_wildcard(require_IX2Rive());
      var _IX2Variable = /* @__PURE__ */ _interop_require_wildcard(require_IX2Variable());
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interop_require_wildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
          return {
            default: obj
          };
        }
        var cache2 = _getRequireWildcardCache(nodeInterop);
        if (cache2 && cache2.has(obj)) {
          return cache2.get(obj);
        }
        var newObj = {
          __proto__: null
        };
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache2) {
          cache2.set(obj, newObj);
        }
        return newObj;
      }
      var pluginMethodMap2 = /* @__PURE__ */ new Map([
        [
          _sharedconstants.ActionTypeConsts.PLUGIN_LOTTIE,
          {
            ..._IX2Lottie
          }
        ],
        [
          _sharedconstants.ActionTypeConsts.PLUGIN_SPLINE,
          {
            ..._IX2Spline
          }
        ],
        [
          _sharedconstants.ActionTypeConsts.PLUGIN_RIVE,
          {
            ..._IX2Rive
          }
        ],
        [
          _sharedconstants.ActionTypeConsts.PLUGIN_VARIABLE,
          {
            ..._IX2Variable
          }
        ]
      ]);
    }
  });

  // packages/systems/ix2/shared/logic/IX2VanillaPlugins.ts
  var IX2VanillaPlugins_exports = {};
  __export(IX2VanillaPlugins_exports, {
    clearPlugin: () => clearPlugin,
    createPluginInstance: () => createPluginInstance,
    getPluginConfig: () => getPluginConfig,
    getPluginDestination: () => getPluginDestination,
    getPluginDuration: () => getPluginDuration,
    getPluginOrigin: () => getPluginOrigin,
    isPluginType: () => isPluginType,
    renderPlugin: () => renderPlugin
  });
  function isPluginType(actionTypeId) {
    return import_plugins.pluginMethodMap.has(actionTypeId);
  }
  var import_plugins, pluginMethod, getPluginConfig, getPluginOrigin, getPluginDuration, getPluginDestination, createPluginInstance, renderPlugin, clearPlugin;
  var init_IX2VanillaPlugins = __esm({
    "packages/systems/ix2/shared/logic/IX2VanillaPlugins.ts"() {
      "use strict";
      init_IX2BrowserSupport();
      import_plugins = __toESM(require_plugins());
      pluginMethod = (methodName) => (actionTypeId) => {
        if (!IS_BROWSER_ENV) {
          return () => null;
        }
        const plugin = import_plugins.pluginMethodMap.get(actionTypeId);
        if (!plugin) {
          throw new Error(`IX2 no plugin configured for: ${actionTypeId}`);
        }
        const method = plugin[methodName];
        if (!method) {
          throw new Error(`IX2 invalid plugin method: ${methodName}`);
        }
        return method;
      };
      getPluginConfig = pluginMethod("getPluginConfig");
      getPluginOrigin = pluginMethod("getPluginOrigin");
      getPluginDuration = pluginMethod("getPluginDuration");
      getPluginDestination = pluginMethod("getPluginDestination");
      createPluginInstance = pluginMethod("createPluginInstance");
      renderPlugin = pluginMethod("renderPlugin");
      clearPlugin = pluginMethod("clearPlugin");
    }
  });

  // node_modules/lodash/defaultTo.js
  var require_defaultTo = __commonJS({
    "node_modules/lodash/defaultTo.js"(exports, module) {
      function defaultTo2(value, defaultValue) {
        return value == null || value !== value ? defaultValue : value;
      }
      module.exports = defaultTo2;
    }
  });

  // node_modules/lodash/_arrayReduce.js
  var require_arrayReduce = __commonJS({
    "node_modules/lodash/_arrayReduce.js"(exports, module) {
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      module.exports = arrayReduce;
    }
  });

  // node_modules/lodash/_createBaseFor.js
  var require_createBaseFor = __commonJS({
    "node_modules/lodash/_createBaseFor.js"(exports, module) {
      function createBaseFor(fromRight) {
        return function(object, iteratee, keysFunc) {
          var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index];
            if (iteratee(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      module.exports = createBaseFor;
    }
  });

  // node_modules/lodash/_baseFor.js
  var require_baseFor = __commonJS({
    "node_modules/lodash/_baseFor.js"(exports, module) {
      var createBaseFor = require_createBaseFor();
      var baseFor = createBaseFor();
      module.exports = baseFor;
    }
  });

  // node_modules/lodash/_baseForOwn.js
  var require_baseForOwn = __commonJS({
    "node_modules/lodash/_baseForOwn.js"(exports, module) {
      var baseFor = require_baseFor();
      var keys = require_keys();
      function baseForOwn(object, iteratee) {
        return object && baseFor(object, iteratee, keys);
      }
      module.exports = baseForOwn;
    }
  });

  // node_modules/lodash/_createBaseEach.js
  var require_createBaseEach = __commonJS({
    "node_modules/lodash/_createBaseEach.js"(exports, module) {
      var isArrayLike = require_isArrayLike();
      function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee) {
          if (collection == null) {
            return collection;
          }
          if (!isArrayLike(collection)) {
            return eachFunc(collection, iteratee);
          }
          var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
          while (fromRight ? index-- : ++index < length) {
            if (iteratee(iterable[index], index, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
      module.exports = createBaseEach;
    }
  });

  // node_modules/lodash/_baseEach.js
  var require_baseEach = __commonJS({
    "node_modules/lodash/_baseEach.js"(exports, module) {
      var baseForOwn = require_baseForOwn();
      var createBaseEach = require_createBaseEach();
      var baseEach = createBaseEach(baseForOwn);
      module.exports = baseEach;
    }
  });

  // node_modules/lodash/_baseReduce.js
  var require_baseReduce = __commonJS({
    "node_modules/lodash/_baseReduce.js"(exports, module) {
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      module.exports = baseReduce;
    }
  });

  // node_modules/lodash/reduce.js
  var require_reduce = __commonJS({
    "node_modules/lodash/reduce.js"(exports, module) {
      var arrayReduce = require_arrayReduce();
      var baseEach = require_baseEach();
      var baseIteratee = require_baseIteratee();
      var baseReduce = require_baseReduce();
      var isArray = require_isArray();
      function reduce2(collection, iteratee, accumulator) {
        var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
        return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
      }
      module.exports = reduce2;
    }
  });

  // node_modules/lodash/findLastIndex.js
  var require_findLastIndex = __commonJS({
    "node_modules/lodash/findLastIndex.js"(exports, module) {
      var baseFindIndex = require_baseFindIndex();
      var baseIteratee = require_baseIteratee();
      var toInteger = require_toInteger();
      var nativeMax = Math.max;
      var nativeMin = Math.min;
      function findLastIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = length - 1;
        if (fromIndex !== void 0) {
          index = toInteger(fromIndex);
          index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
        }
        return baseFindIndex(array, baseIteratee(predicate, 3), index, true);
      }
      module.exports = findLastIndex;
    }
  });

  // node_modules/lodash/findLast.js
  var require_findLast = __commonJS({
    "node_modules/lodash/findLast.js"(exports, module) {
      var createFind = require_createFind();
      var findLastIndex = require_findLastIndex();
      var findLast2 = createFind(findLastIndex);
      module.exports = findLast2;
    }
  });

  // packages/systems/ix2/shared/logic/shallowEqual.ts
  function is(x, y) {
    if (x === y) {
      return x !== 0 || y !== 0 || 1 / x === 1 / y;
    }
    return x !== x && y !== y;
  }
  function shallowEqual(objA, objB) {
    if (is(objA, objB)) {
      return true;
    }
    if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
      return false;
    }
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
      return false;
    }
    for (let i = 0; i < keysA.length; i++) {
      if (!Object.hasOwn(
        objB,
        // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'PropertyKey'.
        keysA[i]
      ) || // @ts-expect-error - TS2538 - Type 'undefined' cannot be used as an index type. | TS2538 - Type 'undefined' cannot be used as an index type.
      !is(objA[keysA[i]], objB[keysA[i]])) {
        return false;
      }
    }
    return true;
  }
  var shallowEqual_default;
  var init_shallowEqual = __esm({
    "packages/systems/ix2/shared/logic/shallowEqual.ts"() {
      "use strict";
      shallowEqual_default = shallowEqual;
    }
  });

  // packages/systems/ix2/shared/logic/IX2VanillaUtils.ts
  var IX2VanillaUtils_exports = {};
  __export(IX2VanillaUtils_exports, {
    cleanupHTMLElement: () => cleanupHTMLElement,
    clearAllStyles: () => clearAllStyles,
    clearObjectCache: () => clearObjectCache,
    getActionListProgress: () => getActionListProgress,
    getAffectedElements: () => getAffectedElements,
    getComputedStyle: () => getComputedStyle2,
    getDestinationValues: () => getDestinationValues,
    getElementId: () => getElementId,
    getInstanceId: () => getInstanceId,
    getInstanceOrigin: () => getInstanceOrigin,
    getItemConfigByKey: () => getItemConfigByKey,
    getMaxDurationItemIndex: () => getMaxDurationItemIndex,
    getNamespacedParameterId: () => getNamespacedParameterId,
    getRenderType: () => getRenderType,
    getStyleProp: () => getStyleProp,
    mediaQueriesEqual: () => mediaQueriesEqual,
    observeStore: () => observeStore,
    reduceListToGroup: () => reduceListToGroup,
    reifyState: () => reifyState,
    renderHTMLElement: () => renderHTMLElement,
    shallowEqual: () => shallowEqual_default,
    shouldAllowMediaQuery: () => shouldAllowMediaQuery,
    shouldNamespaceEventParameter: () => shouldNamespaceEventParameter,
    stringifyTarget: () => stringifyTarget
  });
  function clearObjectCache() {
    objectCache.clear();
  }
  function getInstanceId() {
    return "i" + instanceCount++;
  }
  function getElementId(ixElements3, ref) {
    for (const key in ixElements3) {
      const ixEl = ixElements3[key];
      if (ixEl && ixEl.ref === ref) {
        return ixEl.id;
      }
    }
    return "e" + elementCount++;
  }
  function reifyState({
    events,
    actionLists,
    site
  } = {}) {
    const eventTypeMap = (0, import_reduce.default)(
      events,
      (result, event) => {
        const { eventTypeId } = event;
        if (!result[eventTypeId]) {
          result[eventTypeId] = {};
        }
        result[eventTypeId][event.id] = event;
        return result;
      },
      {}
    );
    let mediaQueries = site && site.mediaQueries;
    let mediaQueryKeys = [];
    if (mediaQueries) {
      mediaQueryKeys = mediaQueries.map((mq) => mq.key);
    } else {
      mediaQueries = [];
      console.warn(`IX2 missing mediaQueries in site data`);
    }
    return {
      ixData: {
        events,
        actionLists,
        eventTypeMap,
        mediaQueries,
        mediaQueryKeys
      }
    };
  }
  function observeStore({
    // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
    store,
    // @ts-expect-error - TS7031 - Binding element 'select' implicitly has an 'any' type.
    select,
    // @ts-expect-error - TS7031 - Binding element 'onChange' implicitly has an 'any' type.
    onChange,
    comparator = strictEqual
  }) {
    const { getState, subscribe } = store;
    const unsubscribe = subscribe(handleChange);
    let currentState = select(getState());
    function handleChange() {
      const nextState = select(getState());
      if (nextState == null) {
        unsubscribe();
        return;
      }
      if (!comparator(nextState, currentState)) {
        currentState = nextState;
        onChange(currentState, store);
      }
    }
    return unsubscribe;
  }
  function normalizeTarget(target) {
    const type = typeof target;
    if (type === "string") {
      return { id: target };
    } else if (target != null && type === "object") {
      const { id, objectId, selector, selectorGuids, appliesTo, useEventTarget } = target;
      return { id, objectId, selector, selectorGuids, appliesTo, useEventTarget };
    }
    return {};
  }
  function getAffectedElements({
    config,
    event,
    eventTarget,
    elementRoot,
    elementApi
  }) {
    if (!elementApi) {
      throw new Error("IX2 missing elementApi");
    }
    const { targets } = config;
    if (Array.isArray(targets) && targets.length > 0) {
      return targets.reduce(
        (accumulator, target2) => accumulator.concat(
          getAffectedElements({
            config: { target: target2 },
            event,
            eventTarget,
            elementRoot,
            elementApi
          })
        ),
        []
      );
    }
    const {
      getValidDocument: getValidDocument2,
      getQuerySelector: getQuerySelector2,
      queryDocument: queryDocument2,
      getChildElements: getChildElements2,
      getSiblingElements: getSiblingElements2,
      matchSelector: matchSelector2,
      elementContains: elementContains2,
      isSiblingNode: isSiblingNode2
    } = elementApi;
    const { target } = config;
    if (!target) {
      return [];
    }
    const {
      id,
      objectId,
      selector,
      selectorGuids,
      appliesTo,
      useEventTarget
    } = normalizeTarget(target);
    if (objectId) {
      const ref = objectCache.has(objectId) ? objectCache.get(objectId) : objectCache.set(objectId, {}).get(objectId);
      return [ref];
    }
    if (appliesTo === EventAppliesTo.PAGE) {
      const doc = getValidDocument2(id);
      return doc ? [doc] : [];
    }
    const overrides = event?.action?.config?.affectedElements ?? {};
    const override = overrides[id || selector] || {};
    const validOverride = Boolean(override.id || override.selector);
    let limitAffectedElements;
    let baseSelector;
    let finalSelector;
    const eventTargetSelector = event && getQuerySelector2(normalizeTarget(event.target));
    if (validOverride) {
      limitAffectedElements = override.limitAffectedElements;
      baseSelector = eventTargetSelector;
      finalSelector = getQuerySelector2(override);
    } else {
      baseSelector = finalSelector = getQuerySelector2({
        id,
        selector,
        selectorGuids
      });
    }
    if (event && useEventTarget) {
      const eventTargets = eventTarget && (finalSelector || useEventTarget === true) ? [eventTarget] : queryDocument2(eventTargetSelector);
      if (finalSelector) {
        if (useEventTarget === PARENT2) {
          return queryDocument2(finalSelector).filter(
            (parentElement) => eventTargets.some(
              (targetElement) => elementContains2(parentElement, targetElement)
            )
          );
        }
        if (useEventTarget === CHILDREN2) {
          return queryDocument2(finalSelector).filter(
            (childElement) => eventTargets.some(
              (targetElement) => elementContains2(targetElement, childElement)
            )
          );
        }
        if (useEventTarget === SIBLINGS2) {
          return queryDocument2(finalSelector).filter(
            (siblingElement) => eventTargets.some(
              (targetElement) => isSiblingNode2(targetElement, siblingElement)
            )
          );
        }
      }
      return eventTargets;
    }
    if (baseSelector == null || finalSelector == null) {
      return [];
    }
    if (IS_BROWSER_ENV && elementRoot) {
      return queryDocument2(finalSelector).filter(
        (element) => elementRoot.contains(element)
      );
    }
    if (limitAffectedElements === CHILDREN2) {
      return queryDocument2(baseSelector, finalSelector);
    } else if (limitAffectedElements === IMMEDIATE_CHILDREN2) {
      return getChildElements2(queryDocument2(baseSelector)).filter(
        matchSelector2(finalSelector)
      );
    } else if (limitAffectedElements === SIBLINGS2) {
      return getSiblingElements2(queryDocument2(baseSelector)).filter(
        matchSelector2(finalSelector)
      );
    } else {
      return queryDocument2(finalSelector);
    }
  }
  function getComputedStyle2({ element, actionItem }) {
    if (!IS_BROWSER_ENV) {
      return {};
    }
    const { actionTypeId } = actionItem;
    switch (actionTypeId) {
      case STYLE_SIZE2:
      case STYLE_BACKGROUND_COLOR:
      case STYLE_BORDER:
      case STYLE_TEXT_COLOR:
      case GENERAL_DISPLAY:
        return window.getComputedStyle(element);
      default:
        return {};
    }
  }
  function getInstanceOrigin(element, refState2 = {}, computedStyle = {}, actionItem, elementApi) {
    const { getStyle: getStyle2 } = elementApi;
    const { actionTypeId } = actionItem;
    if (isPluginType(actionTypeId)) {
      return getPluginOrigin(actionTypeId)(refState2[actionTypeId], actionItem);
    }
    switch (actionItem.actionTypeId) {
      case TRANSFORM_MOVE2:
      case TRANSFORM_SCALE2:
      case TRANSFORM_ROTATE2:
      case TRANSFORM_SKEW2: {
        return (
          // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"TRANSFORM_MOVE" | "TRANSFORM_SCALE" | "TRANSFORM_ROTATE" | "TRANSFORM_SKEW"' can't be used to index type '{}'.
          refState2[actionItem.actionTypeId] || transformDefaults[actionItem.actionTypeId]
        );
      }
      case STYLE_FILTER2:
        return getFilterDefaults(
          // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"STYLE_FILTER"' can't be used to index type '{}'.
          refState2[actionItem.actionTypeId],
          actionItem.config.filters
        );
      case STYLE_FONT_VARIATION2:
        return getFontVariationDefaults(
          // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"STYLE_FONT_VARIATION"' can't be used to index type '{}'.
          refState2[actionItem.actionTypeId],
          actionItem.config.fontVariations
        );
      case STYLE_OPACITY:
        return { value: (0, import_defaultTo.default)(parseFloat(getStyle2(element, OPACITY2)), 1) };
      case STYLE_SIZE2: {
        const inlineWidth = getStyle2(element, WIDTH2);
        const inlineHeight = getStyle2(element, HEIGHT2);
        let widthValue;
        let heightValue;
        if (actionItem.config.widthUnit === AUTO2) {
          widthValue = pxValueRegex.test(inlineWidth) ? parseFloat(inlineWidth) : (
            // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
            parseFloat(computedStyle.width)
          );
        } else {
          widthValue = (0, import_defaultTo.default)(
            parseFloat(inlineWidth),
            // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
            parseFloat(computedStyle.width)
          );
        }
        if (actionItem.config.heightUnit === AUTO2) {
          heightValue = pxValueRegex.test(inlineHeight) ? parseFloat(inlineHeight) : (
            // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
            parseFloat(computedStyle.height)
          );
        } else {
          heightValue = (0, import_defaultTo.default)(
            parseFloat(inlineHeight),
            // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
            parseFloat(computedStyle.height)
          );
        }
        return {
          widthValue,
          heightValue
        };
      }
      case STYLE_BACKGROUND_COLOR:
      case STYLE_BORDER:
      case STYLE_TEXT_COLOR:
        return parseColor({
          element,
          actionTypeId: actionItem.actionTypeId,
          computedStyle,
          getStyle: getStyle2
        });
      case GENERAL_DISPLAY:
        return {
          // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
          value: (0, import_defaultTo.default)(getStyle2(element, DISPLAY2), computedStyle.display)
        };
      case OBJECT_VALUE:
        return refState2[actionItem.actionTypeId] || { value: 0 };
      default: {
        return;
      }
    }
  }
  function getDestinationValues({
    element,
    actionItem,
    elementApi
  }) {
    if (isPluginType(actionItem.actionTypeId)) {
      return getPluginDestination(actionItem.actionTypeId)(actionItem.config);
    }
    switch (actionItem.actionTypeId) {
      case TRANSFORM_MOVE2:
      case TRANSFORM_SCALE2:
      case TRANSFORM_ROTATE2:
      case TRANSFORM_SKEW2: {
        const { xValue, yValue, zValue } = actionItem.config;
        return { xValue, yValue, zValue };
      }
      case STYLE_SIZE2: {
        const { getStyle: getStyle2, setStyle: setStyle2, getProperty: getProperty2 } = elementApi;
        const { widthUnit, heightUnit } = actionItem.config;
        let { widthValue, heightValue } = actionItem.config;
        if (!IS_BROWSER_ENV) {
          return { widthValue, heightValue };
        }
        if (widthUnit === AUTO2) {
          const temp = getStyle2(element, WIDTH2);
          setStyle2(element, WIDTH2, "");
          widthValue = getProperty2(element, "offsetWidth");
          setStyle2(element, WIDTH2, temp);
        }
        if (heightUnit === AUTO2) {
          const temp = getStyle2(element, HEIGHT2);
          setStyle2(element, HEIGHT2, "");
          heightValue = getProperty2(element, "offsetHeight");
          setStyle2(element, HEIGHT2, temp);
        }
        return { widthValue, heightValue };
      }
      case STYLE_BACKGROUND_COLOR:
      case STYLE_BORDER:
      case STYLE_TEXT_COLOR: {
        const { rValue, gValue, bValue, aValue, globalSwatchId } = actionItem.config;
        if (globalSwatchId && globalSwatchId.startsWith("--")) {
          const { getStyle: getStyle2 } = elementApi;
          const value = getStyle2(element, globalSwatchId);
          const normalizedValue = (0, import_normalizeColor.normalizeColor)(value);
          return {
            rValue: normalizedValue.red,
            gValue: normalizedValue.green,
            bValue: normalizedValue.blue,
            aValue: normalizedValue.alpha
          };
        }
        return { rValue, gValue, bValue, aValue };
      }
      case STYLE_FILTER2: {
        return actionItem.config.filters.reduce(
          reduceFilters,
          {}
        );
      }
      case STYLE_FONT_VARIATION2: {
        return actionItem.config.fontVariations.reduce(
          reduceFontVariations,
          {}
        );
      }
      default: {
        const { value } = actionItem.config;
        return { value };
      }
    }
  }
  function getRenderType(actionTypeId) {
    if (/^TRANSFORM_/.test(actionTypeId)) {
      return RENDER_TRANSFORM2;
    }
    if (/^STYLE_/.test(actionTypeId)) {
      return RENDER_STYLE2;
    }
    if (/^GENERAL_/.test(actionTypeId)) {
      return RENDER_GENERAL2;
    }
    if (/^PLUGIN_/.test(actionTypeId)) {
      return RENDER_PLUGIN2;
    }
  }
  function getStyleProp(renderType, actionTypeId) {
    return renderType === RENDER_STYLE2 ? actionTypeId.replace("STYLE_", "").toLowerCase() : null;
  }
  function renderHTMLElement(element, refState2, actionState, eventId, actionItem, styleProp, elementApi, renderType, pluginInstance) {
    switch (renderType) {
      case RENDER_TRANSFORM2: {
        return renderTransform(
          element,
          refState2,
          actionState,
          actionItem,
          elementApi
        );
      }
      case RENDER_STYLE2: {
        return renderStyle(
          element,
          refState2,
          actionState,
          actionItem,
          styleProp,
          elementApi
        );
      }
      case RENDER_GENERAL2: {
        return renderGeneral(element, actionItem, elementApi);
      }
      case RENDER_PLUGIN2: {
        const { actionTypeId } = actionItem;
        if (isPluginType(actionTypeId)) {
          return renderPlugin(actionTypeId)(pluginInstance, refState2, actionItem);
        }
      }
    }
  }
  function renderTransform(element, refState2, actionState, actionItem, elementApi) {
    const newTransform = transformKeys.map((actionTypeId) => {
      const defaults = transformDefaults[actionTypeId];
      const {
        xValue = defaults.xValue,
        yValue = defaults.yValue,
        zValue = defaults.zValue,
        xUnit = "",
        yUnit = "",
        zUnit = ""
      } = refState2[actionTypeId] || {};
      switch (actionTypeId) {
        case TRANSFORM_MOVE2:
          return `${TRANSLATE_3D2}(${xValue}${xUnit}, ${yValue}${yUnit}, ${zValue}${zUnit})`;
        case TRANSFORM_SCALE2:
          return `${SCALE_3D2}(${xValue}${xUnit}, ${yValue}${yUnit}, ${zValue}${zUnit})`;
        case TRANSFORM_ROTATE2:
          return `${ROTATE_X2}(${xValue}${xUnit}) ${ROTATE_Y2}(${yValue}${yUnit}) ${ROTATE_Z2}(${zValue}${zUnit})`;
        case TRANSFORM_SKEW2:
          return `${SKEW2}(${xValue}${xUnit}, ${yValue}${yUnit})`;
        default:
          return "";
      }
    }).join(" ");
    const { setStyle: setStyle2 } = elementApi;
    addWillChange(element, TRANSFORM_PREFIXED, elementApi);
    setStyle2(element, TRANSFORM_PREFIXED, newTransform);
    if (hasDefined3dTransform(actionItem, actionState)) {
      setStyle2(element, TRANSFORM_STYLE_PREFIXED, PRESERVE_3D2);
    }
  }
  function renderFilter(element, actionState, actionItemConfig, elementApi) {
    const filterValue = (0, import_reduce.default)(
      actionState,
      (result, value, type) => `${result} ${type}(${value}${getFilterUnit(type, actionItemConfig)})`,
      ""
    );
    const { setStyle: setStyle2 } = elementApi;
    addWillChange(element, FILTER2, elementApi);
    setStyle2(element, FILTER2, filterValue);
  }
  function renderFontVariation(element, actionState, actionItemConfig, elementApi) {
    const fontVariationValue = (0, import_reduce.default)(
      actionState,
      (result, value, type) => {
        result.push(`"${type}" ${value}`);
        return result;
      },
      []
    ).join(", ");
    const { setStyle: setStyle2 } = elementApi;
    addWillChange(element, FONT_VARIATION_SETTINGS2, elementApi);
    setStyle2(element, FONT_VARIATION_SETTINGS2, fontVariationValue);
  }
  function hasDefined3dTransform({ actionTypeId }, { xValue, yValue, zValue }) {
    return actionTypeId === TRANSFORM_MOVE2 && zValue !== void 0 || // SCALE_Z
    actionTypeId === TRANSFORM_SCALE2 && zValue !== void 0 || // ROTATE_X or ROTATE_Y
    actionTypeId === TRANSFORM_ROTATE2 && (xValue !== void 0 || yValue !== void 0);
  }
  function getFirstMatch(regex, value) {
    const match = regex.exec(value);
    return match ? match[1] : "";
  }
  function parseColor({ element, actionTypeId, computedStyle, getStyle: getStyle2 }) {
    const prop = colorStyleProps[actionTypeId];
    const inlineValue = getStyle2(element, prop);
    const value = rgbValidRegex.test(inlineValue) ? inlineValue : computedStyle[prop];
    const matches = getFirstMatch(rgbMatchRegex, value).split(COMMA_DELIMITER2);
    return {
      // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
      rValue: (0, import_defaultTo.default)(parseInt(matches[0], 10), 255),
      // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
      gValue: (0, import_defaultTo.default)(parseInt(matches[1], 10), 255),
      // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
      bValue: (0, import_defaultTo.default)(parseInt(matches[2], 10), 255),
      // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
      aValue: (0, import_defaultTo.default)(parseFloat(matches[3]), 1)
    };
  }
  function renderStyle(element, refState2, actionState, actionItem, styleProp, elementApi) {
    const { setStyle: setStyle2 } = elementApi;
    switch (actionItem.actionTypeId) {
      case STYLE_SIZE2: {
        let { widthUnit = "", heightUnit = "" } = actionItem.config;
        const { widthValue, heightValue } = actionState;
        if (widthValue !== void 0) {
          if (widthUnit === AUTO2) {
            widthUnit = "px";
          }
          addWillChange(element, WIDTH2, elementApi);
          setStyle2(element, WIDTH2, widthValue + widthUnit);
        }
        if (heightValue !== void 0) {
          if (heightUnit === AUTO2) {
            heightUnit = "px";
          }
          addWillChange(element, HEIGHT2, elementApi);
          setStyle2(element, HEIGHT2, heightValue + heightUnit);
        }
        break;
      }
      case STYLE_FILTER2: {
        renderFilter(element, actionState, actionItem.config, elementApi);
        break;
      }
      case STYLE_FONT_VARIATION2: {
        renderFontVariation(element, actionState, actionItem.config, elementApi);
        break;
      }
      case STYLE_BACKGROUND_COLOR:
      case STYLE_BORDER:
      case STYLE_TEXT_COLOR: {
        const prop = colorStyleProps[actionItem.actionTypeId];
        const rValue = Math.round(actionState.rValue);
        const gValue = Math.round(actionState.gValue);
        const bValue = Math.round(actionState.bValue);
        const aValue = actionState.aValue;
        addWillChange(element, prop, elementApi);
        setStyle2(
          element,
          prop,
          aValue >= 1 ? `rgb(${rValue},${gValue},${bValue})` : `rgba(${rValue},${gValue},${bValue},${aValue})`
        );
        break;
      }
      default: {
        const { unit = "" } = actionItem.config;
        addWillChange(element, styleProp, elementApi);
        setStyle2(element, styleProp, actionState.value + unit);
        break;
      }
    }
  }
  function renderGeneral(element, actionItem, elementApi) {
    const { setStyle: setStyle2 } = elementApi;
    switch (actionItem.actionTypeId) {
      case GENERAL_DISPLAY: {
        const { value } = actionItem.config;
        if (value === FLEX2 && IS_BROWSER_ENV) {
          setStyle2(element, DISPLAY2, FLEX_PREFIXED);
        } else {
          setStyle2(element, DISPLAY2, value);
        }
        return;
      }
    }
  }
  function addWillChange(element, prop, elementApi) {
    if (!IS_BROWSER_ENV) {
      return;
    }
    const validProp = willChangeProps[prop];
    if (!validProp) {
      return;
    }
    const { getStyle: getStyle2, setStyle: setStyle2 } = elementApi;
    const value = getStyle2(element, WILL_CHANGE2);
    if (!value) {
      setStyle2(element, WILL_CHANGE2, validProp);
      return;
    }
    const values = value.split(COMMA_DELIMITER2).map(trim);
    if (values.indexOf(validProp) === -1) {
      setStyle2(
        element,
        WILL_CHANGE2,
        values.concat(validProp).join(COMMA_DELIMITER2)
      );
    }
  }
  function removeWillChange(element, prop, elementApi) {
    if (!IS_BROWSER_ENV) {
      return;
    }
    const validProp = willChangeProps[prop];
    if (!validProp) {
      return;
    }
    const { getStyle: getStyle2, setStyle: setStyle2 } = elementApi;
    const value = getStyle2(element, WILL_CHANGE2);
    if (!value || value.indexOf(validProp) === -1) {
      return;
    }
    setStyle2(
      element,
      WILL_CHANGE2,
      value.split(COMMA_DELIMITER2).map(trim).filter((v) => v !== validProp).join(COMMA_DELIMITER2)
    );
  }
  function clearAllStyles({ store, elementApi }) {
    const { ixData: ixData2 } = store.getState();
    const { events = {}, actionLists = {} } = ixData2;
    Object.keys(events).forEach((eventId) => {
      const event = events[eventId];
      const { config } = event.action;
      const { actionListId } = config;
      const actionList = actionLists[actionListId];
      if (actionList) {
        clearActionListStyles({ actionList, event, elementApi });
      }
    });
    Object.keys(actionLists).forEach((actionListId) => {
      clearActionListStyles({ actionList: actionLists[actionListId], elementApi });
    });
  }
  function clearActionListStyles({ actionList = {}, event, elementApi }) {
    const { actionItemGroups, continuousParameterGroups } = actionList;
    actionItemGroups && // @ts-expect-error - TS7006 - Parameter 'actionGroup' implicitly has an 'any' type.
    actionItemGroups.forEach((actionGroup) => {
      clearActionGroupStyles({ actionGroup, event, elementApi });
    });
    continuousParameterGroups && // @ts-expect-error - TS7006 - Parameter 'paramGroup' implicitly has an 'any' type.
    continuousParameterGroups.forEach((paramGroup) => {
      const { continuousActionGroups } = paramGroup;
      continuousActionGroups.forEach((actionGroup) => {
        clearActionGroupStyles({ actionGroup, event, elementApi });
      });
    });
  }
  function clearActionGroupStyles({ actionGroup, event, elementApi }) {
    const { actionItems } = actionGroup;
    actionItems.forEach((actionItem) => {
      const { actionTypeId, config } = actionItem;
      let clearElement;
      if (isPluginType(actionTypeId)) {
        clearElement = (ref) => clearPlugin(actionTypeId)(ref, actionItem);
      } else {
        clearElement = processElementByType({
          effect: clearStyleProp,
          actionTypeId,
          elementApi
        });
      }
      getAffectedElements({ config, event, elementApi }).forEach(clearElement);
    });
  }
  function cleanupHTMLElement(element, actionItem, elementApi) {
    const { setStyle: setStyle2, getStyle: getStyle2 } = elementApi;
    const { actionTypeId } = actionItem;
    if (actionTypeId === STYLE_SIZE2) {
      const { config } = actionItem;
      if (config.widthUnit === AUTO2) {
        setStyle2(element, WIDTH2, "");
      }
      if (config.heightUnit === AUTO2) {
        setStyle2(element, HEIGHT2, "");
      }
    }
    if (getStyle2(element, WILL_CHANGE2)) {
      processElementByType({ effect: removeWillChange, actionTypeId, elementApi })(
        element
      );
    }
  }
  function clearStyleProp(element, prop, elementApi) {
    const { setStyle: setStyle2 } = elementApi;
    removeWillChange(element, prop, elementApi);
    setStyle2(element, prop, "");
    if (prop === TRANSFORM_PREFIXED) {
      setStyle2(element, TRANSFORM_STYLE_PREFIXED, "");
    }
  }
  function getMaxDurationItemIndex(actionItems) {
    let maxDuration = 0;
    let resultIndex = 0;
    actionItems.forEach((actionItem, index) => {
      const { config } = actionItem;
      const total = config.delay + config.duration;
      if (total >= maxDuration) {
        maxDuration = total;
        resultIndex = index;
      }
    });
    return resultIndex;
  }
  function getActionListProgress(actionList, instance) {
    const { actionItemGroups, useFirstGroupAsInitialState } = actionList;
    const { actionItem: instanceItem, verboseTimeElapsed = 0 } = instance;
    let totalDuration = 0;
    let elapsedDuration = 0;
    actionItemGroups.forEach((group, index) => {
      if (useFirstGroupAsInitialState && index === 0) {
        return;
      }
      const { actionItems } = group;
      const carrierItem = actionItems[getMaxDurationItemIndex(actionItems)];
      const { config, actionTypeId } = carrierItem;
      if (instanceItem.id === carrierItem.id) {
        elapsedDuration = totalDuration + verboseTimeElapsed;
      }
      const duration = getRenderType(actionTypeId) === RENDER_GENERAL2 ? 0 : config.duration;
      totalDuration += config.delay + duration;
    });
    return totalDuration > 0 ? optimizeFloat(elapsedDuration / totalDuration) : 0;
  }
  function reduceListToGroup({
    actionList,
    actionItemId,
    rawData
  }) {
    const { actionItemGroups, continuousParameterGroups } = actionList;
    const newActionItems = [];
    const takeItemUntilMatch = (actionItem) => {
      newActionItems.push(
        (0, import_timm4.mergeIn)(actionItem, ["config"], {
          delay: 0,
          duration: 0
        })
      );
      return actionItem.id === actionItemId;
    };
    actionItemGroups && actionItemGroups.some(({ actionItems }) => {
      return actionItems.some(takeItemUntilMatch);
    });
    continuousParameterGroups && continuousParameterGroups.some(
      (paramGroup) => {
        const { continuousActionGroups } = paramGroup;
        return continuousActionGroups.some(
          ({ actionItems }) => {
            return actionItems.some(takeItemUntilMatch);
          }
        );
      }
    );
    return (0, import_timm4.setIn)(rawData, ["actionLists"], {
      [actionList.id]: {
        id: actionList.id,
        actionItemGroups: [
          {
            actionItems: newActionItems
          }
        ]
      }
    });
  }
  function shouldNamespaceEventParameter(eventTypeId, { basedOn }) {
    return eventTypeId === EventTypeConsts.SCROLLING_IN_VIEW && (basedOn === EventBasedOn.ELEMENT || basedOn == null) || eventTypeId === EventTypeConsts.MOUSE_MOVE && basedOn === EventBasedOn.ELEMENT;
  }
  function getNamespacedParameterId(eventStateKey, continuousParameterGroupId) {
    const namespacedParameterId = eventStateKey + COLON_DELIMITER2 + continuousParameterGroupId;
    return namespacedParameterId;
  }
  function shouldAllowMediaQuery(mediaQueries, mediaQueryKey) {
    if (mediaQueryKey == null) {
      return true;
    }
    return mediaQueries.indexOf(mediaQueryKey) !== -1;
  }
  function mediaQueriesEqual(listA, listB) {
    return shallowEqual_default(listA && listA.sort(), listB && listB.sort());
  }
  function stringifyTarget(target) {
    if (typeof target === "string") {
      return target;
    }
    if (target.pluginElement && target.objectId) {
      return target.pluginElement + BAR_DELIMITER2 + target.objectId;
    }
    if (target.objectId) {
      return target.objectId;
    }
    const { id = "", selector = "", useEventTarget = "" } = target;
    return id + BAR_DELIMITER2 + selector + BAR_DELIMITER2 + useEventTarget;
  }
  var import_defaultTo, import_reduce, import_findLast, import_timm4, import_normalizeColor, BACKGROUND2, TRANSFORM2, TRANSLATE_3D2, SCALE_3D2, ROTATE_X2, ROTATE_Y2, ROTATE_Z2, SKEW2, PRESERVE_3D2, FLEX2, OPACITY2, FILTER2, FONT_VARIATION_SETTINGS2, WIDTH2, HEIGHT2, BACKGROUND_COLOR2, BORDER_COLOR2, COLOR2, CHILDREN2, IMMEDIATE_CHILDREN2, SIBLINGS2, PARENT2, DISPLAY2, WILL_CHANGE2, AUTO2, COMMA_DELIMITER2, COLON_DELIMITER2, BAR_DELIMITER2, RENDER_TRANSFORM2, RENDER_GENERAL2, RENDER_STYLE2, RENDER_PLUGIN2, TRANSFORM_MOVE2, TRANSFORM_SCALE2, TRANSFORM_ROTATE2, TRANSFORM_SKEW2, STYLE_OPACITY, STYLE_FILTER2, STYLE_FONT_VARIATION2, STYLE_SIZE2, STYLE_BACKGROUND_COLOR, STYLE_BORDER, STYLE_TEXT_COLOR, GENERAL_DISPLAY, OBJECT_VALUE, trim, colorStyleProps, willChangeProps, objectCache, instanceCount, elementCount, strictEqual, pxValueRegex, getFilterDefaults, getFontVariationDefaults, reduceFilters, reduceFontVariations, getItemConfigByKey, transformDefaults, filterDefaults, fontVariationDefaults, getFilterUnit, transformKeys, paramCapture, rgbValidRegex, rgbMatchRegex, processElementByType;
  var init_IX2VanillaUtils = __esm({
    "packages/systems/ix2/shared/logic/IX2VanillaUtils.ts"() {
      "use strict";
      import_defaultTo = __toESM(require_defaultTo());
      import_reduce = __toESM(require_reduce());
      import_findLast = __toESM(require_findLast());
      import_timm4 = __toESM(require_timm());
      init_shared_constants();
      init_shallowEqual();
      init_IX2EasingUtils();
      import_normalizeColor = __toESM(require_normalizeColor());
      init_IX2VanillaPlugins();
      init_IX2BrowserSupport();
      ({
        BACKGROUND: BACKGROUND2,
        TRANSFORM: TRANSFORM2,
        TRANSLATE_3D: TRANSLATE_3D2,
        SCALE_3D: SCALE_3D2,
        ROTATE_X: ROTATE_X2,
        ROTATE_Y: ROTATE_Y2,
        ROTATE_Z: ROTATE_Z2,
        SKEW: SKEW2,
        PRESERVE_3D: PRESERVE_3D2,
        FLEX: FLEX2,
        OPACITY: OPACITY2,
        FILTER: FILTER2,
        FONT_VARIATION_SETTINGS: FONT_VARIATION_SETTINGS2,
        WIDTH: WIDTH2,
        HEIGHT: HEIGHT2,
        BACKGROUND_COLOR: BACKGROUND_COLOR2,
        BORDER_COLOR: BORDER_COLOR2,
        COLOR: COLOR2,
        CHILDREN: CHILDREN2,
        IMMEDIATE_CHILDREN: IMMEDIATE_CHILDREN2,
        SIBLINGS: SIBLINGS2,
        PARENT: PARENT2,
        DISPLAY: DISPLAY2,
        WILL_CHANGE: WILL_CHANGE2,
        AUTO: AUTO2,
        COMMA_DELIMITER: COMMA_DELIMITER2,
        COLON_DELIMITER: COLON_DELIMITER2,
        BAR_DELIMITER: BAR_DELIMITER2,
        RENDER_TRANSFORM: RENDER_TRANSFORM2,
        RENDER_GENERAL: RENDER_GENERAL2,
        RENDER_STYLE: RENDER_STYLE2,
        RENDER_PLUGIN: RENDER_PLUGIN2
      } = IX2EngineConstants_exports);
      ({
        TRANSFORM_MOVE: TRANSFORM_MOVE2,
        TRANSFORM_SCALE: TRANSFORM_SCALE2,
        TRANSFORM_ROTATE: TRANSFORM_ROTATE2,
        TRANSFORM_SKEW: TRANSFORM_SKEW2,
        STYLE_OPACITY,
        STYLE_FILTER: STYLE_FILTER2,
        STYLE_FONT_VARIATION: STYLE_FONT_VARIATION2,
        STYLE_SIZE: STYLE_SIZE2,
        STYLE_BACKGROUND_COLOR,
        STYLE_BORDER,
        STYLE_TEXT_COLOR,
        GENERAL_DISPLAY,
        OBJECT_VALUE
      } = ActionTypeConsts);
      trim = (v) => v.trim();
      colorStyleProps = Object.freeze({
        [STYLE_BACKGROUND_COLOR]: BACKGROUND_COLOR2,
        [STYLE_BORDER]: BORDER_COLOR2,
        [STYLE_TEXT_COLOR]: COLOR2
      });
      willChangeProps = Object.freeze({
        [TRANSFORM_PREFIXED]: TRANSFORM2,
        [BACKGROUND_COLOR2]: BACKGROUND2,
        [OPACITY2]: OPACITY2,
        [FILTER2]: FILTER2,
        [WIDTH2]: WIDTH2,
        [HEIGHT2]: HEIGHT2,
        [FONT_VARIATION_SETTINGS2]: FONT_VARIATION_SETTINGS2
      });
      objectCache = /* @__PURE__ */ new Map();
      instanceCount = 1;
      elementCount = 1;
      strictEqual = (a, b) => a === b;
      pxValueRegex = /px/;
      getFilterDefaults = (actionState, filters) => (
        // @ts-expect-error - TS7006 - Parameter 'result' implicitly has an 'any' type. | TS7006 - Parameter 'filter' implicitly has an 'any' type.
        filters.reduce((result, filter) => {
          if (result[filter.type] == null) {
            result[filter.type] = // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'Readonly<{ blur: 0; 'hue-rotate': 0; invert: 0; grayscale: 0; saturate: 100; sepia: 0; contrast: 100; brightness: 100; }>'.
            filterDefaults[filter.type];
          }
          return result;
        }, actionState || {})
      );
      getFontVariationDefaults = (actionState, fontVariations) => fontVariations.reduce((result, fontVariation) => {
        if (result[fontVariation.type] == null) {
          result[fontVariation.type] = // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Readonly<{ wght: 0; opsz: 0; wdth: 0; slnt: 0; }>'.
          fontVariationDefaults[fontVariation.type] || // @ts-expect-error - TS2339 - Property 'defaultValue' does not exist on type 'FontVariationItemConfigType'.
          fontVariation.defaultValue || 0;
        }
        return result;
      }, actionState || {});
      reduceFilters = (result, filter) => {
        if (filter) {
          result[filter.type] = filter.value || 0;
        }
        return result;
      };
      reduceFontVariations = (result, fontVariation) => {
        if (fontVariation) {
          result[fontVariation.type] = fontVariation.value || 0;
        }
        return result;
      };
      getItemConfigByKey = (actionTypeId, key, config) => {
        if (isPluginType(actionTypeId)) {
          return getPluginConfig(actionTypeId)(config, key);
        }
        switch (actionTypeId) {
          case STYLE_FILTER2: {
            const filter = (0, import_findLast.default)(config.filters, ({ type }) => type === key);
            return filter ? filter.value : 0;
          }
          case STYLE_FONT_VARIATION2: {
            const fontVariation = (0, import_findLast.default)(
              config.fontVariations,
              ({ type }) => type === key
            );
            return fontVariation ? fontVariation.value : 0;
          }
          default:
            return config[key];
        }
      };
      transformDefaults = {
        [TRANSFORM_MOVE2]: Object.freeze({
          xValue: 0,
          yValue: 0,
          zValue: 0
        }),
        [TRANSFORM_SCALE2]: Object.freeze({
          xValue: 1,
          yValue: 1,
          zValue: 1
        }),
        [TRANSFORM_ROTATE2]: Object.freeze({
          xValue: 0,
          yValue: 0,
          zValue: 0
        }),
        [TRANSFORM_SKEW2]: Object.freeze({
          xValue: 0,
          yValue: 0
        })
      };
      filterDefaults = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100
      });
      fontVariationDefaults = Object.freeze({
        wght: 0,
        opsz: 0,
        wdth: 0,
        slnt: 0
      });
      getFilterUnit = (filterType, actionItemConfig) => {
        const filter = (0, import_findLast.default)(
          actionItemConfig.filters,
          ({ type }) => type === filterType
        );
        if (filter && filter.unit) {
          return filter.unit;
        }
        switch (filterType) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      };
      transformKeys = Object.keys(transformDefaults);
      paramCapture = "\\(([^)]+)\\)";
      rgbValidRegex = /^rgb/;
      rgbMatchRegex = RegExp(`rgba?${paramCapture}`);
      processElementByType = ({
        effect,
        actionTypeId,
        elementApi
      }) => (
        // @ts-expect-error - TS7006 - Parameter 'element' implicitly has an 'any' type.
        (element) => {
          switch (actionTypeId) {
            case TRANSFORM_MOVE2:
            case TRANSFORM_SCALE2:
            case TRANSFORM_ROTATE2:
            case TRANSFORM_SKEW2:
              effect(element, TRANSFORM_PREFIXED, elementApi);
              break;
            case STYLE_FILTER2:
              effect(element, FILTER2, elementApi);
              break;
            case STYLE_FONT_VARIATION2:
              effect(element, FONT_VARIATION_SETTINGS2, elementApi);
              break;
            case STYLE_OPACITY:
              effect(element, OPACITY2, elementApi);
              break;
            case STYLE_SIZE2:
              effect(element, WIDTH2, elementApi);
              effect(element, HEIGHT2, elementApi);
              break;
            case STYLE_BACKGROUND_COLOR:
            case STYLE_BORDER:
            case STYLE_TEXT_COLOR:
              effect(element, colorStyleProps[actionTypeId], elementApi);
              break;
            case GENERAL_DISPLAY:
              effect(element, DISPLAY2, elementApi);
              break;
          }
        }
      );
    }
  });

  // packages/systems/ix2/shared/index.js
  var require_shared = __commonJS({
    "packages/systems/ix2/shared/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        // IX2Actions,
        IX2BrowserSupport: function() {
          return _IX2BrowserSupport;
        },
        IX2EasingUtils: function() {
          return _IX2EasingUtils;
        },
        IX2Easings: function() {
          return _IX2Easings;
        },
        IX2ElementsReducer: function() {
          return _IX2ElementsReducer;
        },
        IX2VanillaPlugins: function() {
          return _IX2VanillaPlugins;
        },
        IX2VanillaUtils: function() {
          return _IX2VanillaUtils;
        }
      });
      var _IX2BrowserSupport = /* @__PURE__ */ _interop_require_wildcard((init_IX2BrowserSupport(), __toCommonJS(IX2BrowserSupport_exports)));
      var _IX2Easings = /* @__PURE__ */ _interop_require_wildcard((init_IX2Easings(), __toCommonJS(IX2Easings_exports)));
      var _IX2EasingUtils = /* @__PURE__ */ _interop_require_wildcard((init_IX2EasingUtils(), __toCommonJS(IX2EasingUtils_exports)));
      var _IX2ElementsReducer = /* @__PURE__ */ _interop_require_wildcard((init_IX2ElementsReducer(), __toCommonJS(IX2ElementsReducer_exports)));
      var _IX2VanillaPlugins = /* @__PURE__ */ _interop_require_wildcard((init_IX2VanillaPlugins(), __toCommonJS(IX2VanillaPlugins_exports)));
      var _IX2VanillaUtils = /* @__PURE__ */ _interop_require_wildcard((init_IX2VanillaUtils(), __toCommonJS(IX2VanillaUtils_exports)));
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interop_require_wildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
          return {
            default: obj
          };
        }
        var cache2 = _getRequireWildcardCache(nodeInterop);
        if (cache2 && cache2.has(obj)) {
          return cache2.get(obj);
        }
        var newObj = {
          __proto__: null
        };
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache2) {
          cache2.set(obj, newObj);
        }
        return newObj;
      }
    }
  });

  // packages/systems/ix2/engine/reducers/IX2InstancesReducer.ts
  var import_shared, import_timm5, IX2_RAW_DATA_IMPORTED3, IX2_SESSION_STOPPED4, IX2_INSTANCE_ADDED3, IX2_INSTANCE_STARTED2, IX2_INSTANCE_REMOVED2, IX2_ANIMATION_FRAME_CHANGED3, optimizeFloat2, applyEasing2, createBezierEasing2, RENDER_GENERAL3, getItemConfigByKey2, getRenderType2, getStyleProp2, continuousInstance, timedInstance, ixInstances;
  var init_IX2InstancesReducer = __esm({
    "packages/systems/ix2/engine/reducers/IX2InstancesReducer.ts"() {
      "use strict";
      init_shared_constants();
      import_shared = __toESM(require_shared());
      import_timm5 = __toESM(require_timm());
      ({
        IX2_RAW_DATA_IMPORTED: IX2_RAW_DATA_IMPORTED3,
        IX2_SESSION_STOPPED: IX2_SESSION_STOPPED4,
        IX2_INSTANCE_ADDED: IX2_INSTANCE_ADDED3,
        IX2_INSTANCE_STARTED: IX2_INSTANCE_STARTED2,
        IX2_INSTANCE_REMOVED: IX2_INSTANCE_REMOVED2,
        IX2_ANIMATION_FRAME_CHANGED: IX2_ANIMATION_FRAME_CHANGED3
      } = IX2EngineActionTypes_exports);
      ({ optimizeFloat: optimizeFloat2, applyEasing: applyEasing2, createBezierEasing: createBezierEasing2 } = import_shared.IX2EasingUtils);
      ({ RENDER_GENERAL: RENDER_GENERAL3 } = IX2EngineConstants_exports);
      ({ getItemConfigByKey: getItemConfigByKey2, getRenderType: getRenderType2, getStyleProp: getStyleProp2 } = import_shared.IX2VanillaUtils);
      continuousInstance = (state, action) => {
        const {
          position: lastPosition,
          parameterId,
          actionGroups,
          destinationKeys,
          smoothing,
          restingValue,
          actionTypeId,
          customEasingFn,
          skipMotion,
          skipToValue
        } = state;
        const { parameters } = action.payload;
        let velocity = Math.max(1 - smoothing, 0.01);
        let paramValue = parameters[parameterId];
        if (paramValue == null) {
          velocity = 1;
          paramValue = restingValue;
        }
        const nextPosition = Math.max(paramValue, 0) || 0;
        const positionDiff = optimizeFloat2(nextPosition - lastPosition);
        const position = skipMotion ? skipToValue : optimizeFloat2(lastPosition + positionDiff * velocity);
        const keyframePosition = position * 100;
        if (position === lastPosition && state.current) {
          return state;
        }
        let fromActionItem;
        let toActionItem;
        let positionOffset;
        let positionRange;
        for (let i = 0, { length } = actionGroups; i < length; i++) {
          const { keyframe, actionItems } = actionGroups[i];
          if (i === 0) {
            fromActionItem = actionItems[0];
          }
          if (keyframePosition >= keyframe) {
            fromActionItem = actionItems[0];
            const nextGroup = actionGroups[i + 1];
            const hasNextItem = nextGroup && keyframePosition !== keyframe;
            toActionItem = hasNextItem ? nextGroup.actionItems[0] : null;
            if (hasNextItem) {
              positionOffset = keyframe / 100;
              positionRange = (nextGroup.keyframe - keyframe) / 100;
            }
          }
        }
        const current = {};
        if (fromActionItem && !toActionItem) {
          for (let i = 0, { length } = destinationKeys; i < length; i++) {
            const key = destinationKeys[i];
            current[key] = getItemConfigByKey2(
              actionTypeId,
              key,
              fromActionItem.config
            );
          }
        } else if (fromActionItem && toActionItem && positionOffset !== void 0 && positionRange !== void 0) {
          const localPosition = (position - positionOffset) / positionRange;
          const easing = fromActionItem.config.easing;
          const eased = applyEasing2(easing, localPosition, customEasingFn);
          for (let i = 0, { length } = destinationKeys; i < length; i++) {
            const key = destinationKeys[i];
            const fromVal = getItemConfigByKey2(
              actionTypeId,
              key,
              fromActionItem.config
            );
            const toVal = getItemConfigByKey2(actionTypeId, key, toActionItem.config);
            const diff = toVal - fromVal;
            const value = diff * eased + fromVal;
            current[key] = value;
          }
        }
        return (0, import_timm5.merge)(state, {
          position,
          current
        });
      };
      timedInstance = (state, action) => {
        const {
          active,
          origin,
          start,
          immediate,
          renderType,
          verbose,
          actionItem,
          destination,
          destinationKeys,
          pluginDuration,
          instanceDelay,
          customEasingFn,
          skipMotion
        } = state;
        const easing = actionItem.config.easing;
        let { duration, delay } = actionItem.config;
        if (pluginDuration != null) {
          duration = pluginDuration;
        }
        delay = instanceDelay != null ? instanceDelay : delay;
        if (renderType === RENDER_GENERAL3) {
          duration = 0;
        } else if (immediate || skipMotion) {
          duration = delay = 0;
        }
        const { now } = action.payload;
        if (active && origin) {
          const delta = now - (start + delay);
          if (verbose) {
            const verboseDelta = now - start;
            const verboseDuration = duration + delay;
            const verbosePosition = optimizeFloat2(
              Math.min(Math.max(0, verboseDelta / verboseDuration), 1)
            );
            state = (0, import_timm5.set)(
              state,
              "verboseTimeElapsed",
              verboseDuration * verbosePosition
            );
          }
          if (delta < 0) {
            return state;
          }
          const position = optimizeFloat2(Math.min(Math.max(0, delta / duration), 1));
          const eased = applyEasing2(easing, position, customEasingFn);
          const newProps = {};
          let current = null;
          if (destinationKeys.length) {
            current = destinationKeys.reduce((result, key) => {
              const destValue = destination[key];
              const originVal = parseFloat(origin[key]) || 0;
              const diff = parseFloat(destValue) - originVal;
              const value = diff * eased + originVal;
              result[key] = value;
              return result;
            }, {});
          }
          newProps.current = current;
          newProps.position = position;
          if (position === 1) {
            newProps.active = false;
            newProps.complete = true;
          }
          return (0, import_timm5.merge)(state, newProps);
        }
        return state;
      };
      ixInstances = (state = Object.freeze({}), action) => {
        switch (action.type) {
          case IX2_RAW_DATA_IMPORTED3: {
            return action.payload.ixInstances || Object.freeze({});
          }
          case IX2_SESSION_STOPPED4: {
            return Object.freeze({});
          }
          case IX2_INSTANCE_ADDED3: {
            const {
              instanceId,
              elementId,
              actionItem,
              eventId,
              eventTarget,
              eventStateKey,
              actionListId,
              groupIndex,
              isCarrier,
              origin,
              destination,
              immediate,
              verbose,
              continuous,
              parameterId,
              actionGroups,
              smoothing,
              restingValue,
              pluginInstance,
              pluginDuration,
              instanceDelay,
              skipMotion,
              skipToValue
            } = action.payload;
            const { actionTypeId } = actionItem;
            const renderType = getRenderType2(actionTypeId);
            const styleProp = getStyleProp2(renderType, actionTypeId);
            const destinationKeys = Object.keys(destination).filter(
              (key) => (
                // Skip null destination values
                destination[key] != null && // Skip string destination values
                typeof destination[key] !== "string"
              )
            );
            const { easing } = actionItem.config;
            return (0, import_timm5.set)(state, instanceId, {
              id: instanceId,
              elementId,
              active: false,
              position: 0,
              start: 0,
              origin,
              destination,
              destinationKeys,
              immediate,
              verbose,
              current: null,
              actionItem,
              actionTypeId,
              eventId,
              eventTarget,
              eventStateKey,
              actionListId,
              groupIndex,
              renderType,
              isCarrier,
              styleProp,
              continuous,
              parameterId,
              actionGroups,
              smoothing,
              restingValue,
              pluginInstance,
              pluginDuration,
              instanceDelay,
              skipMotion,
              skipToValue,
              customEasingFn: Array.isArray(easing) && easing.length === 4 ? (
                // @ts-expect-error - TS2345 - Argument of type 'any[]' is not assignable to parameter of type 'IX2EasingCustomType'.
                createBezierEasing2(easing)
              ) : void 0
            });
          }
          case IX2_INSTANCE_STARTED2: {
            const { instanceId, time } = action.payload;
            return (0, import_timm5.mergeIn)(state, [instanceId], {
              active: true,
              complete: false,
              start: time
            });
          }
          case IX2_INSTANCE_REMOVED2: {
            const { instanceId } = action.payload;
            if (!state[instanceId]) {
              return state;
            }
            const newState = {};
            const keys = Object.keys(state);
            const { length } = keys;
            for (let i = 0; i < length; i++) {
              const key = keys[i];
              if (key !== instanceId) {
                newState[key] = state[key];
              }
            }
            return newState;
          }
          case IX2_ANIMATION_FRAME_CHANGED3: {
            let newState = state;
            const keys = Object.keys(state);
            const { length } = keys;
            for (let i = 0; i < length; i++) {
              const key = keys[i];
              const instance = state[key];
              const reducer = instance.continuous ? continuousInstance : timedInstance;
              newState = (0, import_timm5.set)(newState, key, reducer(instance, action));
            }
            return newState;
          }
          default: {
            return state;
          }
        }
      };
    }
  });

  // packages/systems/ix2/engine/reducers/IX2ParametersReducer.ts
  var IX2_RAW_DATA_IMPORTED4, IX2_SESSION_STOPPED5, IX2_PARAMETER_CHANGED2, ixParameters;
  var init_IX2ParametersReducer = __esm({
    "packages/systems/ix2/engine/reducers/IX2ParametersReducer.ts"() {
      "use strict";
      init_shared_constants();
      ({ IX2_RAW_DATA_IMPORTED: IX2_RAW_DATA_IMPORTED4, IX2_SESSION_STOPPED: IX2_SESSION_STOPPED5, IX2_PARAMETER_CHANGED: IX2_PARAMETER_CHANGED2 } = IX2EngineActionTypes_exports);
      ixParameters = (state = {
        /*mutable flat state*/
      }, action) => {
        switch (action.type) {
          case IX2_RAW_DATA_IMPORTED4: {
            return (
              // @ts-expect-error - Further investigation is needed as looks like IX2_RAW_DATA_IMPORTED is never triggered with ixParameters
              action.payload.ixParameters || {
                /*mutable flat state*/
              }
            );
          }
          case IX2_SESSION_STOPPED5: {
            return {
              /*mutable flat state*/
            };
          }
          case IX2_PARAMETER_CHANGED2: {
            const { key, value } = action.payload;
            state[key] = value;
            return state;
          }
          default: {
            return state;
          }
        }
      };
    }
  });

  // packages/systems/ix2/engine/reducers/IX2Reducer.ts
  var IX2Reducer_exports = {};
  __export(IX2Reducer_exports, {
    default: () => IX2Reducer_default
  });
  var import_redux, import_shared2, ixElements2, IX2Reducer_default;
  var init_IX2Reducer = __esm({
    "packages/systems/ix2/engine/reducers/IX2Reducer.ts"() {
      "use strict";
      import_redux = __toESM(require_lib2());
      init_IX2DataReducer();
      init_IX2RequestReducer();
      init_IX2SessionReducer();
      import_shared2 = __toESM(require_shared());
      init_IX2InstancesReducer();
      init_IX2ParametersReducer();
      ({ ixElements: ixElements2 } = import_shared2.IX2ElementsReducer);
      IX2Reducer_default = (0, import_redux.combineReducers)({
        ixData,
        ixRequest,
        ixSession,
        ixElements: ixElements2,
        ixInstances,
        ixParameters
      });
    }
  });

  // node_modules/lodash/isString.js
  var require_isString = __commonJS({
    "node_modules/lodash/isString.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isArray = require_isArray();
      var isObjectLike = require_isObjectLike();
      var stringTag = "[object String]";
      function isString(value) {
        return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
      }
      module.exports = isString;
    }
  });

  // node_modules/lodash/_asciiSize.js
  var require_asciiSize = __commonJS({
    "node_modules/lodash/_asciiSize.js"(exports, module) {
      var baseProperty = require_baseProperty();
      var asciiSize = baseProperty("length");
      module.exports = asciiSize;
    }
  });

  // node_modules/lodash/_hasUnicode.js
  var require_hasUnicode = __commonJS({
    "node_modules/lodash/_hasUnicode.js"(exports, module) {
      var rsAstralRange = "\\ud800-\\udfff";
      var rsComboMarksRange = "\\u0300-\\u036f";
      var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
      var rsComboSymbolsRange = "\\u20d0-\\u20ff";
      var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
      var rsVarRange = "\\ufe0e\\ufe0f";
      var rsZWJ = "\\u200d";
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      module.exports = hasUnicode;
    }
  });

  // node_modules/lodash/_unicodeSize.js
  var require_unicodeSize = __commonJS({
    "node_modules/lodash/_unicodeSize.js"(exports, module) {
      var rsAstralRange = "\\ud800-\\udfff";
      var rsComboMarksRange = "\\u0300-\\u036f";
      var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
      var rsComboSymbolsRange = "\\u20d0-\\u20ff";
      var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
      var rsVarRange = "\\ufe0e\\ufe0f";
      var rsAstral = "[" + rsAstralRange + "]";
      var rsCombo = "[" + rsComboRange + "]";
      var rsFitz = "\\ud83c[\\udffb-\\udfff]";
      var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
      var rsNonAstral = "[^" + rsAstralRange + "]";
      var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
      var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
      var rsZWJ = "\\u200d";
      var reOptMod = rsModifier + "?";
      var rsOptVar = "[" + rsVarRange + "]?";
      var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
      var rsSeq = rsOptVar + reOptMod + rsOptJoin;
      var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      module.exports = unicodeSize;
    }
  });

  // node_modules/lodash/_stringSize.js
  var require_stringSize = __commonJS({
    "node_modules/lodash/_stringSize.js"(exports, module) {
      var asciiSize = require_asciiSize();
      var hasUnicode = require_hasUnicode();
      var unicodeSize = require_unicodeSize();
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      module.exports = stringSize;
    }
  });

  // node_modules/lodash/size.js
  var require_size = __commonJS({
    "node_modules/lodash/size.js"(exports, module) {
      var baseKeys = require_baseKeys();
      var getTag = require_getTag();
      var isArrayLike = require_isArrayLike();
      var isString = require_isString();
      var stringSize = require_stringSize();
      var mapTag = "[object Map]";
      var setTag = "[object Set]";
      function size2(collection) {
        if (collection == null) {
          return 0;
        }
        if (isArrayLike(collection)) {
          return isString(collection) ? stringSize(collection) : collection.length;
        }
        var tag = getTag(collection);
        if (tag == mapTag || tag == setTag) {
          return collection.size;
        }
        return baseKeys(collection).length;
      }
      module.exports = size2;
    }
  });

  // node_modules/lodash/negate.js
  var require_negate = __commonJS({
    "node_modules/lodash/negate.js"(exports, module) {
      var FUNC_ERROR_TEXT = "Expected a function";
      function negate(predicate) {
        if (typeof predicate != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return !predicate.call(this);
            case 1:
              return !predicate.call(this, args[0]);
            case 2:
              return !predicate.call(this, args[0], args[1]);
            case 3:
              return !predicate.call(this, args[0], args[1], args[2]);
          }
          return !predicate.apply(this, args);
        };
      }
      module.exports = negate;
    }
  });

  // node_modules/lodash/_defineProperty.js
  var require_defineProperty = __commonJS({
    "node_modules/lodash/_defineProperty.js"(exports, module) {
      var getNative = require_getNative();
      var defineProperty = function() {
        try {
          var func = getNative(Object, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      module.exports = defineProperty;
    }
  });

  // node_modules/lodash/_baseAssignValue.js
  var require_baseAssignValue = __commonJS({
    "node_modules/lodash/_baseAssignValue.js"(exports, module) {
      var defineProperty = require_defineProperty();
      function baseAssignValue(object, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object[key] = value;
        }
      }
      module.exports = baseAssignValue;
    }
  });

  // node_modules/lodash/_assignValue.js
  var require_assignValue = __commonJS({
    "node_modules/lodash/_assignValue.js"(exports, module) {
      var baseAssignValue = require_baseAssignValue();
      var eq = require_eq();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      module.exports = assignValue;
    }
  });

  // node_modules/lodash/_baseSet.js
  var require_baseSet = __commonJS({
    "node_modules/lodash/_baseSet.js"(exports, module) {
      var assignValue = require_assignValue();
      var castPath = require_castPath();
      var isIndex = require_isIndex();
      var isObject = require_isObject();
      var toKey = require_toKey();
      function baseSet(object, path, value, customizer) {
        if (!isObject(object)) {
          return object;
        }
        path = castPath(path, object);
        var index = -1, length = path.length, lastIndex = length - 1, nested = object;
        while (nested != null && ++index < length) {
          var key = toKey(path[index]), newValue = value;
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return object;
          }
          if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : void 0;
            if (newValue === void 0) {
              newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
            }
          }
          assignValue(nested, key, newValue);
          nested = nested[key];
        }
        return object;
      }
      module.exports = baseSet;
    }
  });

  // node_modules/lodash/_basePickBy.js
  var require_basePickBy = __commonJS({
    "node_modules/lodash/_basePickBy.js"(exports, module) {
      var baseGet = require_baseGet();
      var baseSet = require_baseSet();
      var castPath = require_castPath();
      function basePickBy(object, paths, predicate) {
        var index = -1, length = paths.length, result = {};
        while (++index < length) {
          var path = paths[index], value = baseGet(object, path);
          if (predicate(value, path)) {
            baseSet(result, castPath(path, object), value);
          }
        }
        return result;
      }
      module.exports = basePickBy;
    }
  });

  // node_modules/lodash/_getSymbolsIn.js
  var require_getSymbolsIn = __commonJS({
    "node_modules/lodash/_getSymbolsIn.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var getPrototype = require_getPrototype();
      var getSymbols = require_getSymbols();
      var stubArray = require_stubArray();
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
        var result = [];
        while (object) {
          arrayPush(result, getSymbols(object));
          object = getPrototype(object);
        }
        return result;
      };
      module.exports = getSymbolsIn;
    }
  });

  // node_modules/lodash/_nativeKeysIn.js
  var require_nativeKeysIn = __commonJS({
    "node_modules/lodash/_nativeKeysIn.js"(exports, module) {
      function nativeKeysIn(object) {
        var result = [];
        if (object != null) {
          for (var key in Object(object)) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = nativeKeysIn;
    }
  });

  // node_modules/lodash/_baseKeysIn.js
  var require_baseKeysIn = __commonJS({
    "node_modules/lodash/_baseKeysIn.js"(exports, module) {
      var isObject = require_isObject();
      var isPrototype = require_isPrototype();
      var nativeKeysIn = require_nativeKeysIn();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseKeysIn(object) {
        if (!isObject(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object), result = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = baseKeysIn;
    }
  });

  // node_modules/lodash/keysIn.js
  var require_keysIn = __commonJS({
    "node_modules/lodash/keysIn.js"(exports, module) {
      var arrayLikeKeys = require_arrayLikeKeys();
      var baseKeysIn = require_baseKeysIn();
      var isArrayLike = require_isArrayLike();
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }
      module.exports = keysIn;
    }
  });

  // node_modules/lodash/_getAllKeysIn.js
  var require_getAllKeysIn = __commonJS({
    "node_modules/lodash/_getAllKeysIn.js"(exports, module) {
      var baseGetAllKeys = require_baseGetAllKeys();
      var getSymbolsIn = require_getSymbolsIn();
      var keysIn = require_keysIn();
      function getAllKeysIn(object) {
        return baseGetAllKeys(object, keysIn, getSymbolsIn);
      }
      module.exports = getAllKeysIn;
    }
  });

  // node_modules/lodash/pickBy.js
  var require_pickBy = __commonJS({
    "node_modules/lodash/pickBy.js"(exports, module) {
      var arrayMap = require_arrayMap();
      var baseIteratee = require_baseIteratee();
      var basePickBy = require_basePickBy();
      var getAllKeysIn = require_getAllKeysIn();
      function pickBy(object, predicate) {
        if (object == null) {
          return {};
        }
        var props = arrayMap(getAllKeysIn(object), function(prop) {
          return [prop];
        });
        predicate = baseIteratee(predicate);
        return basePickBy(object, props, function(value, path) {
          return predicate(value, path[0]);
        });
      }
      module.exports = pickBy;
    }
  });

  // node_modules/lodash/omitBy.js
  var require_omitBy = __commonJS({
    "node_modules/lodash/omitBy.js"(exports, module) {
      var baseIteratee = require_baseIteratee();
      var negate = require_negate();
      var pickBy = require_pickBy();
      function omitBy2(object, predicate) {
        return pickBy(object, negate(baseIteratee(predicate)));
      }
      module.exports = omitBy2;
    }
  });

  // node_modules/lodash/isEmpty.js
  var require_isEmpty = __commonJS({
    "node_modules/lodash/isEmpty.js"(exports, module) {
      var baseKeys = require_baseKeys();
      var getTag = require_getTag();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isArrayLike = require_isArrayLike();
      var isBuffer = require_isBuffer();
      var isPrototype = require_isPrototype();
      var isTypedArray = require_isTypedArray();
      var mapTag = "[object Map]";
      var setTag = "[object Set]";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function isEmpty2(value) {
        if (value == null) {
          return true;
        }
        if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
          return !value.length;
        }
        var tag = getTag(value);
        if (tag == mapTag || tag == setTag) {
          return !value.size;
        }
        if (isPrototype(value)) {
          return !baseKeys(value).length;
        }
        for (var key in value) {
          if (hasOwnProperty.call(value, key)) {
            return false;
          }
        }
        return true;
      }
      module.exports = isEmpty2;
    }
  });

  // node_modules/lodash/mapValues.js
  var require_mapValues = __commonJS({
    "node_modules/lodash/mapValues.js"(exports, module) {
      var baseAssignValue = require_baseAssignValue();
      var baseForOwn = require_baseForOwn();
      var baseIteratee = require_baseIteratee();
      function mapValues2(object, iteratee) {
        var result = {};
        iteratee = baseIteratee(iteratee, 3);
        baseForOwn(object, function(value, key, object2) {
          baseAssignValue(result, key, iteratee(value, key, object2));
        });
        return result;
      }
      module.exports = mapValues2;
    }
  });

  // node_modules/lodash/_arrayEach.js
  var require_arrayEach = __commonJS({
    "node_modules/lodash/_arrayEach.js"(exports, module) {
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      module.exports = arrayEach;
    }
  });

  // node_modules/lodash/_castFunction.js
  var require_castFunction = __commonJS({
    "node_modules/lodash/_castFunction.js"(exports, module) {
      var identity = require_identity();
      function castFunction(value) {
        return typeof value == "function" ? value : identity;
      }
      module.exports = castFunction;
    }
  });

  // node_modules/lodash/forEach.js
  var require_forEach = __commonJS({
    "node_modules/lodash/forEach.js"(exports, module) {
      var arrayEach = require_arrayEach();
      var baseEach = require_baseEach();
      var castFunction = require_castFunction();
      var isArray = require_isArray();
      function forEach2(collection, iteratee) {
        var func = isArray(collection) ? arrayEach : baseEach;
        return func(collection, castFunction(iteratee));
      }
      module.exports = forEach2;
    }
  });

  // node_modules/lodash/now.js
  var require_now = __commonJS({
    "node_modules/lodash/now.js"(exports, module) {
      var root = require_root();
      var now = function() {
        return root.Date.now();
      };
      module.exports = now;
    }
  });

  // node_modules/lodash/debounce.js
  var require_debounce = __commonJS({
    "node_modules/lodash/debounce.js"(exports, module) {
      var isObject = require_isObject();
      var now = require_now();
      var toNumber = require_toNumber();
      var FUNC_ERROR_TEXT = "Expected a function";
      var nativeMax = Math.max;
      var nativeMin = Math.min;
      function debounce(func, wait, options) {
        var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = void 0;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);
          return leading ? invokeFunc(time) : result;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
          return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = void 0;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = void 0;
          return result;
        }
        function cancel() {
          if (timerId !== void 0) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = void 0;
        }
        function flush() {
          return timerId === void 0 ? result : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === void 0) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              clearTimeout(timerId);
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === void 0) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      module.exports = debounce;
    }
  });

  // node_modules/lodash/throttle.js
  var require_throttle = __commonJS({
    "node_modules/lodash/throttle.js"(exports, module) {
      var debounce = require_debounce();
      var isObject = require_isObject();
      var FUNC_ERROR_TEXT = "Expected a function";
      function throttle2(func, wait, options) {
        var leading = true, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        if (isObject(options)) {
          leading = "leading" in options ? !!options.leading : leading;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        return debounce(func, wait, {
          "leading": leading,
          "maxWait": wait,
          "trailing": trailing
        });
      }
      module.exports = throttle2;
    }
  });

  // packages/systems/ix2/engine/actions/IX2EngineActions.ts
  var IX2EngineActions_exports = {};
  __export(IX2EngineActions_exports, {
    actionListPlaybackChanged: () => actionListPlaybackChanged,
    animationFrameChanged: () => animationFrameChanged,
    clearRequested: () => clearRequested,
    elementStateChanged: () => elementStateChanged,
    eventListenerAdded: () => eventListenerAdded,
    eventStateChanged: () => eventStateChanged,
    instanceAdded: () => instanceAdded,
    instanceRemoved: () => instanceRemoved,
    instanceStarted: () => instanceStarted,
    mediaQueriesDefined: () => mediaQueriesDefined,
    parameterChanged: () => parameterChanged,
    playbackRequested: () => playbackRequested,
    previewRequested: () => previewRequested,
    rawDataImported: () => rawDataImported,
    sessionInitialized: () => sessionInitialized,
    sessionStarted: () => sessionStarted,
    sessionStopped: () => sessionStopped,
    stopRequested: () => stopRequested,
    testFrameRendered: () => testFrameRendered,
    viewportWidthChanged: () => viewportWidthChanged
  });
  var import_shared3, IX2_RAW_DATA_IMPORTED5, IX2_SESSION_INITIALIZED3, IX2_SESSION_STARTED3, IX2_SESSION_STOPPED6, IX2_PREVIEW_REQUESTED3, IX2_PLAYBACK_REQUESTED3, IX2_STOP_REQUESTED3, IX2_CLEAR_REQUESTED3, IX2_EVENT_LISTENER_ADDED3, IX2_TEST_FRAME_RENDERED3, IX2_EVENT_STATE_CHANGED3, IX2_ANIMATION_FRAME_CHANGED4, IX2_PARAMETER_CHANGED3, IX2_INSTANCE_ADDED4, IX2_INSTANCE_STARTED3, IX2_INSTANCE_REMOVED3, IX2_ELEMENT_STATE_CHANGED3, IX2_ACTION_LIST_PLAYBACK_CHANGED3, IX2_VIEWPORT_WIDTH_CHANGED3, IX2_MEDIA_QUERIES_DEFINED3, reifyState2, rawDataImported, sessionInitialized, sessionStarted, sessionStopped, previewRequested, playbackRequested, stopRequested, clearRequested, eventListenerAdded, testFrameRendered, eventStateChanged, animationFrameChanged, parameterChanged, instanceAdded, instanceStarted, instanceRemoved, elementStateChanged, actionListPlaybackChanged, viewportWidthChanged, mediaQueriesDefined;
  var init_IX2EngineActions = __esm({
    "packages/systems/ix2/engine/actions/IX2EngineActions.ts"() {
      "use strict";
      init_shared_constants();
      import_shared3 = __toESM(require_shared());
      ({
        IX2_RAW_DATA_IMPORTED: IX2_RAW_DATA_IMPORTED5,
        IX2_SESSION_INITIALIZED: IX2_SESSION_INITIALIZED3,
        IX2_SESSION_STARTED: IX2_SESSION_STARTED3,
        IX2_SESSION_STOPPED: IX2_SESSION_STOPPED6,
        IX2_PREVIEW_REQUESTED: IX2_PREVIEW_REQUESTED3,
        IX2_PLAYBACK_REQUESTED: IX2_PLAYBACK_REQUESTED3,
        IX2_STOP_REQUESTED: IX2_STOP_REQUESTED3,
        IX2_CLEAR_REQUESTED: IX2_CLEAR_REQUESTED3,
        IX2_EVENT_LISTENER_ADDED: IX2_EVENT_LISTENER_ADDED3,
        IX2_TEST_FRAME_RENDERED: IX2_TEST_FRAME_RENDERED3,
        IX2_EVENT_STATE_CHANGED: IX2_EVENT_STATE_CHANGED3,
        IX2_ANIMATION_FRAME_CHANGED: IX2_ANIMATION_FRAME_CHANGED4,
        IX2_PARAMETER_CHANGED: IX2_PARAMETER_CHANGED3,
        IX2_INSTANCE_ADDED: IX2_INSTANCE_ADDED4,
        IX2_INSTANCE_STARTED: IX2_INSTANCE_STARTED3,
        IX2_INSTANCE_REMOVED: IX2_INSTANCE_REMOVED3,
        IX2_ELEMENT_STATE_CHANGED: IX2_ELEMENT_STATE_CHANGED3,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: IX2_ACTION_LIST_PLAYBACK_CHANGED3,
        IX2_VIEWPORT_WIDTH_CHANGED: IX2_VIEWPORT_WIDTH_CHANGED3,
        IX2_MEDIA_QUERIES_DEFINED: IX2_MEDIA_QUERIES_DEFINED3
      } = IX2EngineActionTypes_exports);
      ({ reifyState: reifyState2 } = import_shared3.IX2VanillaUtils);
      rawDataImported = (rawData) => ({
        type: IX2_RAW_DATA_IMPORTED5,
        payload: {
          ...reifyState2(rawData)
        }
      });
      sessionInitialized = ({
        hasBoundaryNodes,
        reducedMotion
      }) => ({
        type: IX2_SESSION_INITIALIZED3,
        payload: {
          hasBoundaryNodes,
          reducedMotion
        }
      });
      sessionStarted = () => ({
        type: IX2_SESSION_STARTED3
      });
      sessionStopped = () => ({
        type: IX2_SESSION_STOPPED6
      });
      previewRequested = ({
        rawData,
        defer
      }) => ({
        type: IX2_PREVIEW_REQUESTED3,
        payload: {
          defer,
          rawData
        }
      });
      playbackRequested = ({
        actionTypeId = ActionTypeConsts.GENERAL_START_ACTION,
        actionListId,
        actionItemId,
        eventId,
        allowEvents,
        immediate,
        testManual,
        verbose,
        rawData
      }) => ({
        type: IX2_PLAYBACK_REQUESTED3,
        payload: {
          actionTypeId,
          actionListId,
          actionItemId,
          testManual,
          eventId,
          allowEvents,
          immediate,
          verbose,
          rawData
        }
      });
      stopRequested = (actionListId) => ({
        type: IX2_STOP_REQUESTED3,
        payload: {
          actionListId
        }
      });
      clearRequested = () => ({
        type: IX2_CLEAR_REQUESTED3
      });
      eventListenerAdded = (target, listenerParams) => ({
        type: IX2_EVENT_LISTENER_ADDED3,
        payload: {
          target,
          listenerParams
        }
      });
      testFrameRendered = (step = 1) => ({
        type: IX2_TEST_FRAME_RENDERED3,
        payload: {
          step
        }
      });
      eventStateChanged = (stateKey, newState) => ({
        type: IX2_EVENT_STATE_CHANGED3,
        payload: {
          stateKey,
          newState
        }
      });
      animationFrameChanged = (now, parameters) => ({
        type: IX2_ANIMATION_FRAME_CHANGED4,
        payload: {
          now,
          parameters
        }
      });
      parameterChanged = (key, value) => ({
        type: IX2_PARAMETER_CHANGED3,
        payload: {
          key,
          value
        }
      });
      instanceAdded = (options) => ({
        type: IX2_INSTANCE_ADDED4,
        payload: {
          ...options
        }
      });
      instanceStarted = (instanceId, time) => ({
        type: IX2_INSTANCE_STARTED3,
        payload: {
          instanceId,
          time
        }
      });
      instanceRemoved = (instanceId) => ({
        type: IX2_INSTANCE_REMOVED3,
        payload: {
          instanceId
        }
      });
      elementStateChanged = (elementId, actionTypeId, current, actionItem) => ({
        type: IX2_ELEMENT_STATE_CHANGED3,
        payload: {
          elementId,
          actionTypeId,
          current,
          actionItem
        }
      });
      actionListPlaybackChanged = ({
        actionListId,
        isPlaying
      }) => ({
        type: IX2_ACTION_LIST_PLAYBACK_CHANGED3,
        payload: {
          actionListId,
          isPlaying
        }
      });
      viewportWidthChanged = ({
        width,
        mediaQueries
      }) => ({
        type: IX2_VIEWPORT_WIDTH_CHANGED3,
        payload: {
          width,
          mediaQueries
        }
      });
      mediaQueriesDefined = () => ({
        type: IX2_MEDIA_QUERIES_DEFINED3
      });
    }
  });

  // packages/systems/ix2/engine/logic/IX2BrowserApi.ts
  var IX2BrowserApi_exports = {};
  __export(IX2BrowserApi_exports, {
    elementContains: () => elementContains,
    getChildElements: () => getChildElements,
    getClosestElement: () => getClosestElement,
    getProperty: () => getProperty,
    getQuerySelector: () => getQuerySelector,
    getRefType: () => getRefType,
    getSiblingElements: () => getSiblingElements,
    getStyle: () => getStyle,
    getValidDocument: () => getValidDocument,
    isSiblingNode: () => isSiblingNode,
    matchSelector: () => matchSelector,
    queryDocument: () => queryDocument,
    setStyle: () => setStyle
  });
  function setStyle(element, prop, value) {
    element.style[prop] = value;
  }
  function getStyle(element, prop) {
    if (prop.startsWith("--")) {
      return window.getComputedStyle(document.documentElement).getPropertyValue(prop);
    }
    return element.style[prop];
  }
  function getProperty(element, prop) {
    return element[prop];
  }
  function matchSelector(selector) {
    return (element) => element[ELEMENT_MATCHES2](selector);
  }
  function getQuerySelector({
    id,
    selector
  }) {
    if (id) {
      let nodeId = id;
      if (id.indexOf(IX2_ID_DELIMITER2) !== -1) {
        const pair = id.split(IX2_ID_DELIMITER2);
        const pageId = pair[0];
        nodeId = pair[1];
        if (pageId !== document.documentElement.getAttribute(WF_PAGE2)) {
          return null;
        }
      }
      return `[data-w-id="${nodeId}"], [data-w-id^="${nodeId}_instance"]`;
    }
    return selector;
  }
  function getValidDocument(pageId) {
    if (pageId == null || pageId === document.documentElement.getAttribute(WF_PAGE2)) {
      return document;
    }
    return null;
  }
  function queryDocument(baseSelector, descendantSelector) {
    return Array.prototype.slice.call(
      document.querySelectorAll(
        descendantSelector ? baseSelector + " " + descendantSelector : baseSelector
      )
    );
  }
  function elementContains(parent, child) {
    return parent.contains(child);
  }
  function isSiblingNode(a, b) {
    return a !== b && a.parentNode === b.parentNode;
  }
  function getChildElements(sourceElements) {
    const childElements = [];
    for (let i = 0, { length } = sourceElements || []; i < length; i++) {
      const { children } = sourceElements[i];
      const { length: childCount } = children;
      if (!childCount) {
        continue;
      }
      for (let j = 0; j < childCount; j++) {
        childElements.push(children[j]);
      }
    }
    return childElements;
  }
  function getSiblingElements(sourceElements = []) {
    const elements = [];
    const parentCache = [];
    for (let i = 0, { length } = sourceElements; i < length; i++) {
      const { parentNode } = sourceElements[i];
      if (!parentNode || !parentNode.children || !parentNode.children.length) {
        continue;
      }
      if (parentCache.indexOf(parentNode) !== -1) {
        continue;
      }
      parentCache.push(parentNode);
      let el = parentNode.firstElementChild;
      while (el != null) {
        if (sourceElements.indexOf(el) === -1) {
          elements.push(el);
        }
        el = el.nextElementSibling;
      }
    }
    return elements;
  }
  function getRefType(ref) {
    if (ref != null && typeof ref == "object") {
      return ref instanceof Element ? HTML_ELEMENT3 : PLAIN_OBJECT3;
    }
    return null;
  }
  var import_shared4, ELEMENT_MATCHES2, IX2_ID_DELIMITER2, HTML_ELEMENT3, PLAIN_OBJECT3, WF_PAGE2, getClosestElement;
  var init_IX2BrowserApi = __esm({
    "packages/systems/ix2/engine/logic/IX2BrowserApi.ts"() {
      "use strict";
      import_shared4 = __toESM(require_shared());
      init_shared_constants();
      ({ ELEMENT_MATCHES: ELEMENT_MATCHES2 } = import_shared4.IX2BrowserSupport);
      ({ IX2_ID_DELIMITER: IX2_ID_DELIMITER2, HTML_ELEMENT: HTML_ELEMENT3, PLAIN_OBJECT: PLAIN_OBJECT3, WF_PAGE: WF_PAGE2 } = IX2EngineConstants_exports);
      getClosestElement = Element.prototype.closest ? (element, selector) => {
        if (!document.documentElement.contains(element)) {
          return null;
        }
        return element.closest(selector);
      } : (element, selector) => {
        if (!document.documentElement.contains(element)) {
          return null;
        }
        let el = element;
        do {
          if (el[ELEMENT_MATCHES2] && el[ELEMENT_MATCHES2](selector)) {
            return el;
          }
          el = el.parentNode;
        } while (el != null);
        return null;
      };
    }
  });

  // node_modules/lodash/_baseCreate.js
  var require_baseCreate = __commonJS({
    "node_modules/lodash/_baseCreate.js"(exports, module) {
      var isObject = require_isObject();
      var objectCreate = Object.create;
      var baseCreate = function() {
        function object() {
        }
        return function(proto) {
          if (!isObject(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result = new object();
          object.prototype = void 0;
          return result;
        };
      }();
      module.exports = baseCreate;
    }
  });

  // node_modules/lodash/_baseLodash.js
  var require_baseLodash = __commonJS({
    "node_modules/lodash/_baseLodash.js"(exports, module) {
      function baseLodash() {
      }
      module.exports = baseLodash;
    }
  });

  // node_modules/lodash/_LodashWrapper.js
  var require_LodashWrapper = __commonJS({
    "node_modules/lodash/_LodashWrapper.js"(exports, module) {
      var baseCreate = require_baseCreate();
      var baseLodash = require_baseLodash();
      function LodashWrapper(value, chainAll) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__chain__ = !!chainAll;
        this.__index__ = 0;
        this.__values__ = void 0;
      }
      LodashWrapper.prototype = baseCreate(baseLodash.prototype);
      LodashWrapper.prototype.constructor = LodashWrapper;
      module.exports = LodashWrapper;
    }
  });

  // node_modules/lodash/_isFlattenable.js
  var require_isFlattenable = __commonJS({
    "node_modules/lodash/_isFlattenable.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : void 0;
      function isFlattenable(value) {
        return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
      }
      module.exports = isFlattenable;
    }
  });

  // node_modules/lodash/_baseFlatten.js
  var require_baseFlatten = __commonJS({
    "node_modules/lodash/_baseFlatten.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var isFlattenable = require_isFlattenable();
      function baseFlatten(array, depth, predicate, isStrict, result) {
        var index = -1, length = array.length;
        predicate || (predicate = isFlattenable);
        result || (result = []);
        while (++index < length) {
          var value = array[index];
          if (depth > 0 && predicate(value)) {
            if (depth > 1) {
              baseFlatten(value, depth - 1, predicate, isStrict, result);
            } else {
              arrayPush(result, value);
            }
          } else if (!isStrict) {
            result[result.length] = value;
          }
        }
        return result;
      }
      module.exports = baseFlatten;
    }
  });

  // node_modules/lodash/flatten.js
  var require_flatten = __commonJS({
    "node_modules/lodash/flatten.js"(exports, module) {
      var baseFlatten = require_baseFlatten();
      function flatten(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, 1) : [];
      }
      module.exports = flatten;
    }
  });

  // node_modules/lodash/_apply.js
  var require_apply = __commonJS({
    "node_modules/lodash/_apply.js"(exports, module) {
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      module.exports = apply;
    }
  });

  // node_modules/lodash/_overRest.js
  var require_overRest = __commonJS({
    "node_modules/lodash/_overRest.js"(exports, module) {
      var apply = require_apply();
      var nativeMax = Math.max;
      function overRest(func, start, transform) {
        start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
        return function() {
          var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
          while (++index < length) {
            array[index] = args[start + index];
          }
          index = -1;
          var otherArgs = Array(start + 1);
          while (++index < start) {
            otherArgs[index] = args[index];
          }
          otherArgs[start] = transform(array);
          return apply(func, this, otherArgs);
        };
      }
      module.exports = overRest;
    }
  });

  // node_modules/lodash/constant.js
  var require_constant = __commonJS({
    "node_modules/lodash/constant.js"(exports, module) {
      function constant(value) {
        return function() {
          return value;
        };
      }
      module.exports = constant;
    }
  });

  // node_modules/lodash/_baseSetToString.js
  var require_baseSetToString = __commonJS({
    "node_modules/lodash/_baseSetToString.js"(exports, module) {
      var constant = require_constant();
      var defineProperty = require_defineProperty();
      var identity = require_identity();
      var baseSetToString = !defineProperty ? identity : function(func, string) {
        return defineProperty(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant(string),
          "writable": true
        });
      };
      module.exports = baseSetToString;
    }
  });

  // node_modules/lodash/_shortOut.js
  var require_shortOut = __commonJS({
    "node_modules/lodash/_shortOut.js"(exports, module) {
      var HOT_COUNT = 800;
      var HOT_SPAN = 16;
      var nativeNow = Date.now;
      function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(void 0, arguments);
        };
      }
      module.exports = shortOut;
    }
  });

  // node_modules/lodash/_setToString.js
  var require_setToString = __commonJS({
    "node_modules/lodash/_setToString.js"(exports, module) {
      var baseSetToString = require_baseSetToString();
      var shortOut = require_shortOut();
      var setToString = shortOut(baseSetToString);
      module.exports = setToString;
    }
  });

  // node_modules/lodash/_flatRest.js
  var require_flatRest = __commonJS({
    "node_modules/lodash/_flatRest.js"(exports, module) {
      var flatten = require_flatten();
      var overRest = require_overRest();
      var setToString = require_setToString();
      function flatRest(func) {
        return setToString(overRest(func, void 0, flatten), func + "");
      }
      module.exports = flatRest;
    }
  });

  // node_modules/lodash/_metaMap.js
  var require_metaMap = __commonJS({
    "node_modules/lodash/_metaMap.js"(exports, module) {
      var WeakMap2 = require_WeakMap();
      var metaMap = WeakMap2 && new WeakMap2();
      module.exports = metaMap;
    }
  });

  // node_modules/lodash/noop.js
  var require_noop = __commonJS({
    "node_modules/lodash/noop.js"(exports, module) {
      function noop() {
      }
      module.exports = noop;
    }
  });

  // node_modules/lodash/_getData.js
  var require_getData = __commonJS({
    "node_modules/lodash/_getData.js"(exports, module) {
      var metaMap = require_metaMap();
      var noop = require_noop();
      var getData = !metaMap ? noop : function(func) {
        return metaMap.get(func);
      };
      module.exports = getData;
    }
  });

  // node_modules/lodash/_realNames.js
  var require_realNames = __commonJS({
    "node_modules/lodash/_realNames.js"(exports, module) {
      var realNames = {};
      module.exports = realNames;
    }
  });

  // node_modules/lodash/_getFuncName.js
  var require_getFuncName = __commonJS({
    "node_modules/lodash/_getFuncName.js"(exports, module) {
      var realNames = require_realNames();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function getFuncName(func) {
        var result = func.name + "", array = realNames[result], length = hasOwnProperty.call(realNames, result) ? array.length : 0;
        while (length--) {
          var data = array[length], otherFunc = data.func;
          if (otherFunc == null || otherFunc == func) {
            return data.name;
          }
        }
        return result;
      }
      module.exports = getFuncName;
    }
  });

  // node_modules/lodash/_LazyWrapper.js
  var require_LazyWrapper = __commonJS({
    "node_modules/lodash/_LazyWrapper.js"(exports, module) {
      var baseCreate = require_baseCreate();
      var baseLodash = require_baseLodash();
      var MAX_ARRAY_LENGTH = 4294967295;
      function LazyWrapper(value) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__dir__ = 1;
        this.__filtered__ = false;
        this.__iteratees__ = [];
        this.__takeCount__ = MAX_ARRAY_LENGTH;
        this.__views__ = [];
      }
      LazyWrapper.prototype = baseCreate(baseLodash.prototype);
      LazyWrapper.prototype.constructor = LazyWrapper;
      module.exports = LazyWrapper;
    }
  });

  // node_modules/lodash/_copyArray.js
  var require_copyArray = __commonJS({
    "node_modules/lodash/_copyArray.js"(exports, module) {
      function copyArray(source, array) {
        var index = -1, length = source.length;
        array || (array = Array(length));
        while (++index < length) {
          array[index] = source[index];
        }
        return array;
      }
      module.exports = copyArray;
    }
  });

  // node_modules/lodash/_wrapperClone.js
  var require_wrapperClone = __commonJS({
    "node_modules/lodash/_wrapperClone.js"(exports, module) {
      var LazyWrapper = require_LazyWrapper();
      var LodashWrapper = require_LodashWrapper();
      var copyArray = require_copyArray();
      function wrapperClone(wrapper) {
        if (wrapper instanceof LazyWrapper) {
          return wrapper.clone();
        }
        var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
        result.__actions__ = copyArray(wrapper.__actions__);
        result.__index__ = wrapper.__index__;
        result.__values__ = wrapper.__values__;
        return result;
      }
      module.exports = wrapperClone;
    }
  });

  // node_modules/lodash/wrapperLodash.js
  var require_wrapperLodash = __commonJS({
    "node_modules/lodash/wrapperLodash.js"(exports, module) {
      var LazyWrapper = require_LazyWrapper();
      var LodashWrapper = require_LodashWrapper();
      var baseLodash = require_baseLodash();
      var isArray = require_isArray();
      var isObjectLike = require_isObjectLike();
      var wrapperClone = require_wrapperClone();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function lodash(value) {
        if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
          if (value instanceof LodashWrapper) {
            return value;
          }
          if (hasOwnProperty.call(value, "__wrapped__")) {
            return wrapperClone(value);
          }
        }
        return new LodashWrapper(value);
      }
      lodash.prototype = baseLodash.prototype;
      lodash.prototype.constructor = lodash;
      module.exports = lodash;
    }
  });

  // node_modules/lodash/_isLaziable.js
  var require_isLaziable = __commonJS({
    "node_modules/lodash/_isLaziable.js"(exports, module) {
      var LazyWrapper = require_LazyWrapper();
      var getData = require_getData();
      var getFuncName = require_getFuncName();
      var lodash = require_wrapperLodash();
      function isLaziable(func) {
        var funcName = getFuncName(func), other = lodash[funcName];
        if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
          return false;
        }
        if (func === other) {
          return true;
        }
        var data = getData(other);
        return !!data && func === data[0];
      }
      module.exports = isLaziable;
    }
  });

  // node_modules/lodash/_createFlow.js
  var require_createFlow = __commonJS({
    "node_modules/lodash/_createFlow.js"(exports, module) {
      var LodashWrapper = require_LodashWrapper();
      var flatRest = require_flatRest();
      var getData = require_getData();
      var getFuncName = require_getFuncName();
      var isArray = require_isArray();
      var isLaziable = require_isLaziable();
      var FUNC_ERROR_TEXT = "Expected a function";
      var WRAP_CURRY_FLAG = 8;
      var WRAP_PARTIAL_FLAG = 32;
      var WRAP_ARY_FLAG = 128;
      var WRAP_REARG_FLAG = 256;
      function createFlow(fromRight) {
        return flatRest(function(funcs) {
          var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
          if (fromRight) {
            funcs.reverse();
          }
          while (index--) {
            var func = funcs[index];
            if (typeof func != "function") {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            if (prereq && !wrapper && getFuncName(func) == "wrapper") {
              var wrapper = new LodashWrapper([], true);
            }
          }
          index = wrapper ? index : length;
          while (++index < length) {
            func = funcs[index];
            var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : void 0;
            if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
              wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
            } else {
              wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
            }
          }
          return function() {
            var args = arguments, value = args[0];
            if (wrapper && args.length == 1 && isArray(value)) {
              return wrapper.plant(value).value();
            }
            var index2 = 0, result = length ? funcs[index2].apply(this, args) : value;
            while (++index2 < length) {
              result = funcs[index2].call(this, result);
            }
            return result;
          };
        });
      }
      module.exports = createFlow;
    }
  });

  // node_modules/lodash/flow.js
  var require_flow = __commonJS({
    "node_modules/lodash/flow.js"(exports, module) {
      var createFlow = require_createFlow();
      var flow2 = createFlow();
      module.exports = flow2;
    }
  });

  // node_modules/lodash/_baseClamp.js
  var require_baseClamp = __commonJS({
    "node_modules/lodash/_baseClamp.js"(exports, module) {
      function baseClamp(number, lower, upper) {
        if (number === number) {
          if (upper !== void 0) {
            number = number <= upper ? number : upper;
          }
          if (lower !== void 0) {
            number = number >= lower ? number : lower;
          }
        }
        return number;
      }
      module.exports = baseClamp;
    }
  });

  // node_modules/lodash/clamp.js
  var require_clamp = __commonJS({
    "node_modules/lodash/clamp.js"(exports, module) {
      var baseClamp = require_baseClamp();
      var toNumber = require_toNumber();
      function clamp2(number, lower, upper) {
        if (upper === void 0) {
          upper = lower;
          lower = void 0;
        }
        if (upper !== void 0) {
          upper = toNumber(upper);
          upper = upper === upper ? upper : 0;
        }
        if (lower !== void 0) {
          lower = toNumber(lower);
          lower = lower === lower ? lower : 0;
        }
        return baseClamp(toNumber(number), lower, upper);
      }
      module.exports = clamp2;
    }
  });

  // packages/systems/ix2/engine/logic/IX2VanillaEvents.ts
  var import_flow, import_get, import_clamp, import_shared5, MOUSE_CLICK, MOUSE_SECOND_CLICK, MOUSE_DOWN, MOUSE_UP, MOUSE_OVER, MOUSE_OUT, DROPDOWN_CLOSE, DROPDOWN_OPEN, SLIDER_ACTIVE, SLIDER_INACTIVE, TAB_ACTIVE, TAB_INACTIVE, NAVBAR_CLOSE, NAVBAR_OPEN, MOUSE_MOVE, PAGE_SCROLL_DOWN, SCROLL_INTO_VIEW, SCROLL_OUT_OF_VIEW, PAGE_SCROLL_UP, SCROLLING_IN_VIEW, PAGE_FINISH, ECOMMERCE_CART_CLOSE, ECOMMERCE_CART_OPEN, PAGE_START, PAGE_SCROLL, COMPONENT_ACTIVE, COMPONENT_INACTIVE, COLON_DELIMITER3, getNamespacedParameterId2, composableFilter, isElement, containsElement, isOrContainsElement, getAutoStopEvent, hasAutoStopEvent, actionGroupCreator, withFilter, baseActionGroupOptions, baseActivityActionGroupOptions, SCROLL_EVENT_TYPES, MOUSE_OVER_OUT_TYPES, baseScrollActionGroupOptions, AUTO_STOP_DISABLED_EVENTS, getDocumentState, areBoxesIntersecting, isElementHovered, isElementVisible, whenComponentActiveChange, whenElementHoverChange, whenElementVisibiltyChange, whenScrollDirectionChange, pointIntersects, whenPageLoadFinish, whenPageLoadStart, whenClickCountChange, getComponentActiveOptions, getComponentInactiveOptions, scrollIntoOutOfViewOptions, MOUSE_OUT_ROUND_THRESHOLD, IX2VanillaEvents_default;
  var init_IX2VanillaEvents = __esm({
    "packages/systems/ix2/engine/logic/IX2VanillaEvents.ts"() {
      "use strict";
      import_flow = __toESM(require_flow());
      import_get = __toESM(require_get());
      import_clamp = __toESM(require_clamp());
      init_shared_constants();
      init_IX2VanillaEngine();
      init_IX2EngineActions();
      import_shared5 = __toESM(require_shared());
      ({
        MOUSE_CLICK,
        MOUSE_SECOND_CLICK,
        MOUSE_DOWN,
        MOUSE_UP,
        MOUSE_OVER,
        MOUSE_OUT,
        DROPDOWN_CLOSE,
        DROPDOWN_OPEN,
        SLIDER_ACTIVE,
        SLIDER_INACTIVE,
        TAB_ACTIVE,
        TAB_INACTIVE,
        NAVBAR_CLOSE,
        NAVBAR_OPEN,
        MOUSE_MOVE,
        PAGE_SCROLL_DOWN,
        SCROLL_INTO_VIEW,
        SCROLL_OUT_OF_VIEW,
        PAGE_SCROLL_UP,
        SCROLLING_IN_VIEW,
        PAGE_FINISH,
        ECOMMERCE_CART_CLOSE,
        ECOMMERCE_CART_OPEN,
        PAGE_START,
        PAGE_SCROLL
      } = EventTypeConsts);
      COMPONENT_ACTIVE = "COMPONENT_ACTIVE";
      COMPONENT_INACTIVE = "COMPONENT_INACTIVE";
      ({ COLON_DELIMITER: COLON_DELIMITER3 } = IX2EngineConstants_exports);
      ({ getNamespacedParameterId: getNamespacedParameterId2 } = import_shared5.IX2VanillaUtils);
      composableFilter = (predicate) => (options) => {
        if (typeof options === "object" && predicate(options)) {
          return true;
        }
        return options;
      };
      isElement = composableFilter(({ element, nativeEvent }) => {
        return element === nativeEvent.target;
      });
      containsElement = composableFilter(({ element, nativeEvent }) => {
        return element.contains(nativeEvent.target);
      });
      isOrContainsElement = (0, import_flow.default)([isElement, containsElement]);
      getAutoStopEvent = (store, autoStopEventId) => {
        if (autoStopEventId) {
          const { ixData: ixData2 } = store.getState();
          const { events } = ixData2;
          const eventToStop = events[autoStopEventId];
          if (eventToStop && !AUTO_STOP_DISABLED_EVENTS[eventToStop.eventTypeId]) {
            return eventToStop;
          }
        }
        return null;
      };
      hasAutoStopEvent = ({ store, event }) => {
        const { action: eventAction } = event;
        const { autoStopEventId } = eventAction.config;
        return Boolean(getAutoStopEvent(store, autoStopEventId));
      };
      actionGroupCreator = ({ store, event, element, eventStateKey }, state) => {
        const { action: eventAction, id: eventId } = event;
        const { actionListId, autoStopEventId } = eventAction.config;
        const eventToStop = getAutoStopEvent(store, autoStopEventId);
        if (eventToStop) {
          stopActionGroup({
            store,
            eventId: autoStopEventId,
            eventTarget: element,
            eventStateKey: autoStopEventId + COLON_DELIMITER3 + eventStateKey.split(COLON_DELIMITER3)[1],
            actionListId: (0, import_get.default)(eventToStop, "action.config.actionListId")
          });
        }
        stopActionGroup({
          store,
          eventId,
          eventTarget: element,
          eventStateKey,
          actionListId
        });
        startActionGroup({
          store,
          eventId,
          eventTarget: element,
          eventStateKey,
          actionListId
        });
        return state;
      };
      withFilter = (filter, handler) => (options, state) => filter(options, state) === true ? handler(options, state) : state;
      baseActionGroupOptions = {
        handler: withFilter(isOrContainsElement, actionGroupCreator)
      };
      baseActivityActionGroupOptions = {
        ...baseActionGroupOptions,
        types: [COMPONENT_ACTIVE, COMPONENT_INACTIVE].join(" ")
      };
      SCROLL_EVENT_TYPES = [
        { target: window, types: "resize orientationchange", throttle: true },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: true
        }
      ];
      MOUSE_OVER_OUT_TYPES = "mouseover mouseout";
      baseScrollActionGroupOptions = {
        types: SCROLL_EVENT_TYPES
      };
      AUTO_STOP_DISABLED_EVENTS = {
        PAGE_START,
        PAGE_FINISH
      };
      getDocumentState = (() => {
        const supportOffset = window.pageXOffset !== void 0;
        const isCSS1Compat = document.compatMode === "CSS1Compat";
        const rootElement = isCSS1Compat ? document.documentElement : document.body;
        return () => ({
          scrollLeft: supportOffset ? window.pageXOffset : rootElement.scrollLeft,
          scrollTop: supportOffset ? window.pageYOffset : rootElement.scrollTop,
          // required to remove elasticity in Safari scrolling.
          stiffScrollTop: (0, import_clamp.default)(
            supportOffset ? window.pageYOffset : rootElement.scrollTop,
            0,
            rootElement.scrollHeight - window.innerHeight
          ),
          scrollWidth: rootElement.scrollWidth,
          scrollHeight: rootElement.scrollHeight,
          clientWidth: rootElement.clientWidth,
          clientHeight: rootElement.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight
        });
      })();
      areBoxesIntersecting = (a, b) => !(a.left > b.right || a.right < b.left || a.top > b.bottom || a.bottom < b.top);
      isElementHovered = ({ element, nativeEvent }) => {
        const { type, target, relatedTarget } = nativeEvent;
        const containsTarget = element.contains(target);
        if (type === "mouseover" && containsTarget) {
          return true;
        }
        const containsRelated = element.contains(relatedTarget);
        if (type === "mouseout" && containsTarget && containsRelated) {
          return true;
        }
        return false;
      };
      isElementVisible = (options) => {
        const {
          element,
          event: { config }
        } = options;
        const { clientWidth, clientHeight } = getDocumentState();
        const scrollOffsetValue = config.scrollOffsetValue;
        const scrollOffsetUnit = config.scrollOffsetUnit;
        const isPX = scrollOffsetUnit === "PX";
        const offsetPadding = isPX ? scrollOffsetValue : clientHeight * (scrollOffsetValue || 0) / 100;
        return areBoxesIntersecting(element.getBoundingClientRect(), {
          left: 0,
          top: offsetPadding,
          right: clientWidth,
          bottom: clientHeight - offsetPadding
        });
      };
      whenComponentActiveChange = // @ts-expect-error - TS7006 - Parameter 'handler' implicitly has an 'any' type.
      (handler) => (options, oldState) => {
        const { type } = options.nativeEvent;
        const isActive = [COMPONENT_ACTIVE, COMPONENT_INACTIVE].indexOf(type) !== -1 ? type === COMPONENT_ACTIVE : oldState.isActive;
        const newState = {
          ...oldState,
          isActive
        };
        if (!oldState || newState.isActive !== oldState.isActive) {
          return handler(options, newState) || newState;
        }
        return newState;
      };
      whenElementHoverChange = (handler) => (options, oldState) => {
        const newState = {
          elementHovered: isElementHovered(options)
        };
        if (oldState ? newState.elementHovered !== oldState.elementHovered : newState.elementHovered) {
          return handler(options, newState) || newState;
        }
        return newState;
      };
      whenElementVisibiltyChange = (handler) => (options, oldState) => {
        const newState = {
          ...oldState,
          elementVisible: isElementVisible(options)
        };
        if (oldState ? newState.elementVisible !== oldState.elementVisible : newState.elementVisible) {
          return handler(options, newState) || newState;
        }
        return newState;
      };
      whenScrollDirectionChange = // @ts-expect-error - TS7006 - Parameter 'handler' implicitly has an 'any' type.
      (handler) => (options, oldState = {}) => {
        const {
          stiffScrollTop: scrollTop,
          scrollHeight,
          innerHeight
        } = getDocumentState();
        const {
          event: { config, eventTypeId }
        } = options;
        const { scrollOffsetValue, scrollOffsetUnit } = config;
        const isPX = scrollOffsetUnit === "PX";
        const scrollHeightBounds = scrollHeight - innerHeight;
        const percentTop = Number((scrollTop / scrollHeightBounds).toFixed(2));
        if (oldState && oldState.percentTop === percentTop) {
          return oldState;
        }
        const scrollTopPadding = (isPX ? scrollOffsetValue : innerHeight * (scrollOffsetValue || 0) / 100) / scrollHeightBounds;
        let scrollingDown;
        let scrollDirectionChanged;
        let anchorTop = 0;
        if (oldState) {
          scrollingDown = percentTop > oldState.percentTop;
          scrollDirectionChanged = oldState.scrollingDown !== scrollingDown;
          anchorTop = scrollDirectionChanged ? percentTop : oldState.anchorTop;
        }
        const inBounds = eventTypeId === PAGE_SCROLL_DOWN ? percentTop >= anchorTop + scrollTopPadding : percentTop <= anchorTop - scrollTopPadding;
        const newState = {
          ...oldState,
          percentTop,
          inBounds,
          anchorTop,
          scrollingDown
        };
        if (oldState && inBounds && // @ts-expect-error - TS2339 - Property 'inBounds' does not exist on type '{}'.
        (scrollDirectionChanged || newState.inBounds !== oldState.inBounds)) {
          return handler(options, newState) || newState;
        }
        return newState;
      };
      pointIntersects = (point, rect) => point.left > rect.left && point.left < rect.right && point.top > rect.top && point.top < rect.bottom;
      whenPageLoadFinish = (handler) => (options, oldState) => {
        const newState = {
          finished: document.readyState === "complete"
        };
        if (newState.finished && !(oldState && oldState.finshed)) {
          handler(options);
        }
        return newState;
      };
      whenPageLoadStart = (handler) => (options, oldState) => {
        const newState = {
          started: true
        };
        if (!oldState) {
          handler(options);
        }
        return newState;
      };
      whenClickCountChange = (handler) => (options, oldState = { clickCount: 0 }) => {
        const newState = {
          clickCount: oldState.clickCount % 2 + 1
        };
        if (newState.clickCount !== oldState.clickCount) {
          return handler(options, newState) || newState;
        }
        return newState;
      };
      getComponentActiveOptions = (allowNestedChildrenEvents = true) => ({
        ...baseActivityActionGroupOptions,
        handler: withFilter(
          allowNestedChildrenEvents ? isOrContainsElement : isElement,
          // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
          whenComponentActiveChange((options, state) => {
            return state.isActive ? baseActionGroupOptions.handler(options, state) : state;
          })
        )
      });
      getComponentInactiveOptions = (allowNestedChildrenEvents = true) => ({
        ...baseActivityActionGroupOptions,
        handler: withFilter(
          allowNestedChildrenEvents ? isOrContainsElement : isElement,
          // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
          whenComponentActiveChange((options, state) => {
            return !state.isActive ? baseActionGroupOptions.handler(options, state) : state;
          })
        )
      });
      scrollIntoOutOfViewOptions = {
        ...baseScrollActionGroupOptions,
        handler: whenElementVisibiltyChange((options, state) => {
          const { elementVisible } = state;
          const { event, store } = options;
          const { ixData: ixData2 } = store.getState();
          const { events } = ixData2;
          if (!events[event.action.config.autoStopEventId] && state.triggered) {
            return state;
          }
          if (event.eventTypeId === SCROLL_INTO_VIEW === elementVisible) {
            actionGroupCreator(options);
            return {
              ...state,
              triggered: true
            };
          } else {
            return state;
          }
        })
      };
      MOUSE_OUT_ROUND_THRESHOLD = 0.05;
      IX2VanillaEvents_default = {
        [SLIDER_ACTIVE]: getComponentActiveOptions(),
        [SLIDER_INACTIVE]: getComponentInactiveOptions(),
        [DROPDOWN_OPEN]: getComponentActiveOptions(),
        [DROPDOWN_CLOSE]: getComponentInactiveOptions(),
        // navbar elements may contain nested components in the menu. To prevent activity misfires, only listed for activity
        // events where the target is the navbar element, and ignore children that dispatch activitiy events.
        [NAVBAR_OPEN]: getComponentActiveOptions(false),
        [NAVBAR_CLOSE]: getComponentInactiveOptions(false),
        [TAB_ACTIVE]: getComponentActiveOptions(),
        [TAB_INACTIVE]: getComponentInactiveOptions(),
        [ECOMMERCE_CART_OPEN]: {
          types: "ecommerce-cart-open",
          handler: withFilter(isOrContainsElement, actionGroupCreator)
        },
        [ECOMMERCE_CART_CLOSE]: {
          types: "ecommerce-cart-close",
          handler: withFilter(isOrContainsElement, actionGroupCreator)
        },
        [MOUSE_CLICK]: {
          types: "click",
          handler: withFilter(
            isOrContainsElement,
            whenClickCountChange((options, { clickCount }) => {
              if (hasAutoStopEvent(options)) {
                clickCount === 1 && actionGroupCreator(options);
              } else {
                actionGroupCreator(options);
              }
            })
          )
        },
        [MOUSE_SECOND_CLICK]: {
          types: "click",
          handler: withFilter(
            isOrContainsElement,
            whenClickCountChange((options, { clickCount }) => {
              if (clickCount === 2) {
                actionGroupCreator(options);
              }
            })
          )
        },
        [MOUSE_DOWN]: {
          ...baseActionGroupOptions,
          types: "mousedown"
        },
        [MOUSE_UP]: {
          ...baseActionGroupOptions,
          types: "mouseup"
        },
        [MOUSE_OVER]: {
          types: MOUSE_OVER_OUT_TYPES,
          handler: withFilter(
            isOrContainsElement,
            whenElementHoverChange((options, state) => {
              if (state.elementHovered) {
                actionGroupCreator(options);
              }
            })
          )
        },
        [MOUSE_OUT]: {
          types: MOUSE_OVER_OUT_TYPES,
          handler: withFilter(
            isOrContainsElement,
            whenElementHoverChange((options, state) => {
              if (!state.elementHovered) {
                actionGroupCreator(options);
              }
            })
          )
        },
        [MOUSE_MOVE]: {
          types: "mousemove mouseout scroll",
          handler: ({ store, element, eventConfig, nativeEvent, eventStateKey }, state = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }) => {
            const {
              basedOn,
              selectedAxis,
              continuousParameterGroupId,
              reverse,
              restingState = 0
            } = eventConfig;
            const {
              clientX = state.clientX,
              clientY = state.clientY,
              pageX = state.pageX,
              pageY = state.pageY
            } = nativeEvent;
            const isXAxis = selectedAxis === "X_AXIS";
            const isMouseOut = nativeEvent.type === "mouseout";
            let value = restingState / 100;
            let namespacedParameterId = continuousParameterGroupId;
            let elementHovered = false;
            switch (basedOn) {
              case EventBasedOn.VIEWPORT: {
                value = isXAxis ? Math.min(clientX, window.innerWidth) / window.innerWidth : Math.min(clientY, window.innerHeight) / window.innerHeight;
                break;
              }
              case EventBasedOn.PAGE: {
                const { scrollLeft, scrollTop, scrollWidth, scrollHeight } = getDocumentState();
                value = isXAxis ? Math.min(scrollLeft + pageX, scrollWidth) / scrollWidth : Math.min(scrollTop + pageY, scrollHeight) / scrollHeight;
                break;
              }
              case EventBasedOn.ELEMENT:
              default: {
                namespacedParameterId = getNamespacedParameterId2(
                  eventStateKey,
                  continuousParameterGroupId
                );
                const isMouseEvent = nativeEvent.type.indexOf("mouse") === 0;
                if (isMouseEvent && isOrContainsElement({ element, nativeEvent }) !== true) {
                  break;
                }
                const rect = element.getBoundingClientRect();
                const { left, top, width, height } = rect;
                if (!isMouseEvent && !pointIntersects({ left: clientX, top: clientY }, rect)) {
                  break;
                }
                elementHovered = true;
                value = isXAxis ? (clientX - left) / width : (clientY - top) / height;
                break;
              }
            }
            if (isMouseOut && (value > 1 - MOUSE_OUT_ROUND_THRESHOLD || value < MOUSE_OUT_ROUND_THRESHOLD)) {
              value = Math.round(value);
            }
            if (basedOn !== EventBasedOn.ELEMENT || elementHovered || // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            elementHovered !== state.elementHovered) {
              value = reverse ? 1 - value : value;
              store.dispatch(parameterChanged(namespacedParameterId, value));
            }
            return {
              elementHovered,
              clientX,
              clientY,
              pageX,
              pageY
            };
          }
        },
        [PAGE_SCROLL]: {
          types: SCROLL_EVENT_TYPES,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          handler: ({ store, eventConfig }) => {
            const { continuousParameterGroupId, reverse } = eventConfig;
            const { scrollTop, scrollHeight, clientHeight } = getDocumentState();
            let value = scrollTop / (scrollHeight - clientHeight);
            value = reverse ? 1 - value : value;
            store.dispatch(parameterChanged(continuousParameterGroupId, value));
          }
        },
        [SCROLLING_IN_VIEW]: {
          types: SCROLL_EVENT_TYPES,
          handler: ({ element, store, eventConfig, eventStateKey }, state = { scrollPercent: 0 }) => {
            const {
              scrollLeft,
              scrollTop,
              scrollWidth,
              scrollHeight,
              clientHeight: visibleHeight
            } = getDocumentState();
            const {
              basedOn,
              selectedAxis,
              continuousParameterGroupId,
              startsEntering,
              startsExiting,
              addEndOffset,
              addStartOffset,
              addOffsetValue = 0,
              endOffsetValue = 0
            } = eventConfig;
            const isXAxis = selectedAxis === "X_AXIS";
            if (basedOn === EventBasedOn.VIEWPORT) {
              const value = isXAxis ? scrollLeft / scrollWidth : scrollTop / scrollHeight;
              if (value !== state.scrollPercent) {
                store.dispatch(parameterChanged(continuousParameterGroupId, value));
              }
              return {
                scrollPercent: value
              };
            } else {
              const namespacedParameterId = getNamespacedParameterId2(
                eventStateKey,
                continuousParameterGroupId
              );
              const elementRect = element.getBoundingClientRect();
              let offsetStartPerc = (addStartOffset ? addOffsetValue : 0) / 100;
              let offsetEndPerc = (addEndOffset ? endOffsetValue : 0) / 100;
              offsetStartPerc = startsEntering ? offsetStartPerc : 1 - offsetStartPerc;
              offsetEndPerc = startsExiting ? offsetEndPerc : 1 - offsetEndPerc;
              const offsetElementTop = elementRect.top + Math.min(elementRect.height * offsetStartPerc, visibleHeight);
              const offsetElementBottom = elementRect.top + elementRect.height * offsetEndPerc;
              const offsetHeight = offsetElementBottom - offsetElementTop;
              const fixedScrollHeight = Math.min(
                visibleHeight + offsetHeight,
                scrollHeight
              );
              const fixedScrollTop = Math.min(
                Math.max(0, visibleHeight - offsetElementTop),
                fixedScrollHeight
              );
              const fixedScrollPerc = fixedScrollTop / fixedScrollHeight;
              if (fixedScrollPerc !== state.scrollPercent) {
                store.dispatch(
                  parameterChanged(namespacedParameterId, fixedScrollPerc)
                );
              }
              return {
                scrollPercent: fixedScrollPerc
              };
            }
          }
        },
        [SCROLL_INTO_VIEW]: scrollIntoOutOfViewOptions,
        [SCROLL_OUT_OF_VIEW]: scrollIntoOutOfViewOptions,
        [PAGE_SCROLL_DOWN]: {
          ...baseScrollActionGroupOptions,
          // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
          handler: whenScrollDirectionChange((options, state) => {
            if (state.scrollingDown) {
              actionGroupCreator(options);
            }
          })
        },
        [PAGE_SCROLL_UP]: {
          ...baseScrollActionGroupOptions,
          // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
          handler: whenScrollDirectionChange((options, state) => {
            if (!state.scrollingDown) {
              actionGroupCreator(options);
            }
          })
        },
        [PAGE_FINISH]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: withFilter(isElement, whenPageLoadFinish(actionGroupCreator))
        },
        [PAGE_START]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: withFilter(isElement, whenPageLoadStart(actionGroupCreator))
        }
      };
    }
  });

  // packages/systems/ix2/engine/logic/IX2VanillaEngine.ts
  var IX2VanillaEngine_exports = {};
  __export(IX2VanillaEngine_exports, {
    observeRequests: () => observeRequests,
    startActionGroup: () => startActionGroup,
    startEngine: () => startEngine,
    stopActionGroup: () => stopActionGroup,
    stopAllActionGroups: () => stopAllActionGroups,
    stopEngine: () => stopEngine
  });
  function observeRequests(store) {
    observeStore2({
      store,
      select: ({
        ixRequest: ixRequest2
      }) => ixRequest2.preview,
      onChange: handlePreviewRequest
    });
    observeStore2({
      store,
      select: ({
        ixRequest: ixRequest2
      }) => ixRequest2.playback,
      onChange: handlePlaybackRequest
    });
    observeStore2({
      store,
      select: ({
        ixRequest: ixRequest2
      }) => ixRequest2.stop,
      onChange: handleStopRequest
    });
    observeStore2({
      store,
      select: ({
        ixRequest: ixRequest2
      }) => ixRequest2.clear,
      onChange: handleClearRequest
    });
  }
  function observeMediaQueryChange(store) {
    observeStore2({
      store,
      select: ({
        ixSession: ixSession2
      }) => ixSession2.mediaQueryKey,
      onChange: () => {
        stopEngine(store);
        clearAllStyles2({ store, elementApi: IX2BrowserApi_exports });
        startEngine({ store, allowEvents: true });
        dispatchPageUpdateEvent();
      }
    });
  }
  function observeOneRenderTick(store, onTick) {
    const unsubscribe = observeStore2({
      store,
      select: ({
        ixSession: ixSession2
      }) => ixSession2.tick,
      // @ts-expect-error - TS7006 - Parameter 'tick' implicitly has an 'any' type.
      onChange: (tick) => {
        onTick(tick);
        unsubscribe();
      }
    });
  }
  function handlePreviewRequest({ rawData, defer }, store) {
    const start = () => {
      startEngine({ store, rawData, allowEvents: true });
      dispatchPageUpdateEvent();
    };
    defer ? setTimeout(start, 0) : start();
  }
  function dispatchPageUpdateEvent() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function handlePlaybackRequest(playback, store) {
    const {
      actionTypeId,
      actionListId,
      actionItemId,
      eventId,
      allowEvents,
      immediate,
      testManual,
      verbose = true
    } = playback;
    let { rawData } = playback;
    if (actionListId && actionItemId && rawData && immediate) {
      const actionList = rawData.actionLists[actionListId];
      if (actionList) {
        rawData = reduceListToGroup2({
          actionList,
          actionItemId,
          rawData
        });
      }
    }
    startEngine({ store, rawData, allowEvents, testManual });
    if (actionListId && actionTypeId === ActionTypeConsts.GENERAL_START_ACTION || isQuickEffect(actionTypeId)) {
      stopActionGroup({ store, actionListId });
      renderInitialGroup({ store, actionListId, eventId });
      const started = startActionGroup({
        store,
        eventId,
        actionListId,
        immediate,
        verbose
      });
      if (verbose && started) {
        store.dispatch(
          actionListPlaybackChanged({ actionListId, isPlaying: !immediate })
        );
      }
    }
  }
  function handleStopRequest({ actionListId }, store) {
    if (actionListId) {
      stopActionGroup({ store, actionListId });
    } else {
      stopAllActionGroups({ store });
    }
    stopEngine(store);
  }
  function handleClearRequest(state, store) {
    stopEngine(store);
    clearAllStyles2({ store, elementApi: IX2BrowserApi_exports });
  }
  function startEngine({
    store,
    rawData,
    allowEvents,
    testManual
  }) {
    const { ixSession: ixSession2 } = store.getState();
    if (rawData) {
      store.dispatch(rawDataImported(rawData));
    }
    if (!ixSession2.active) {
      store.dispatch(
        sessionInitialized({
          hasBoundaryNodes: Boolean(document.querySelector(BOUNDARY_SELECTOR2)),
          reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })
      );
      if (allowEvents) {
        bindEvents(store);
        addDocumentClass();
        if (store.getState().ixSession.hasDefinedMediaQueries) {
          observeMediaQueryChange(store);
        }
      }
      store.dispatch(sessionStarted());
      startRenderLoop(store, testManual);
    }
  }
  function addDocumentClass() {
    const { documentElement } = document;
    if (documentElement.className.indexOf(W_MOD_IX2) === -1) {
      documentElement.className += ` ${W_MOD_IX2}`;
    }
  }
  function startRenderLoop(store, testManual) {
    const handleFrame = (now) => {
      const { ixSession: ixSession2, ixParameters: ixParameters2 } = store.getState();
      if (ixSession2.active) {
        store.dispatch(animationFrameChanged(now, ixParameters2));
        if (testManual) {
          observeOneRenderTick(store, handleFrame);
        } else {
          requestAnimationFrame(handleFrame);
        }
      }
    };
    handleFrame(window.performance.now());
  }
  function stopEngine(store) {
    const { ixSession: ixSession2 } = store.getState();
    if (ixSession2.active) {
      const { eventListeners } = ixSession2;
      eventListeners.forEach(clearEventListener);
      clearObjectCache2();
      store.dispatch(sessionStopped());
    }
  }
  function clearEventListener({ target, listenerParams }) {
    target.removeEventListener.apply(target, listenerParams);
  }
  function createGroupInstances({
    // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
    store,
    // @ts-expect-error - TS7031 - Binding element 'eventStateKey' implicitly has an 'any' type.
    eventStateKey,
    // @ts-expect-error - TS7031 - Binding element 'eventTarget' implicitly has an 'any' type.
    eventTarget,
    // @ts-expect-error - TS7031 - Binding element 'eventId' implicitly has an 'any' type.
    eventId,
    // @ts-expect-error - TS7031 - Binding element 'eventConfig' implicitly has an 'any' type.
    eventConfig,
    // @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
    actionListId,
    // @ts-expect-error - TS7031 - Binding element 'parameterGroup' implicitly has an 'any' type.
    parameterGroup,
    // @ts-expect-error - TS7031 - Binding element 'smoothing' implicitly has an 'any' type.
    smoothing,
    // @ts-expect-error - TS7031 - Binding element 'restingValue' implicitly has an 'any' type.
    restingValue
  }) {
    const { ixData: ixData2, ixSession: ixSession2 } = store.getState();
    const { events } = ixData2;
    const event = events[eventId];
    const { eventTypeId } = event;
    const targetCache = {};
    const instanceActionGroups = {};
    const instanceConfigs = [];
    const { continuousActionGroups } = parameterGroup;
    let { id: parameterId } = parameterGroup;
    if (shouldNamespaceEventParameter2(eventTypeId, eventConfig)) {
      parameterId = getNamespacedParameterId3(eventStateKey, parameterId);
    }
    const eventElementRoot = ixSession2.hasBoundaryNodes && eventTarget ? getClosestElement(eventTarget, BOUNDARY_SELECTOR2) : null;
    continuousActionGroups.forEach((actionGroup) => {
      const { keyframe, actionItems } = actionGroup;
      actionItems.forEach((actionItem) => {
        const { actionTypeId } = actionItem;
        const { target } = actionItem.config;
        if (!target) {
          return;
        }
        const elementRoot = target.boundaryMode ? eventElementRoot : null;
        const key = stringifyTarget2(target) + COLON_DELIMITER4 + actionTypeId;
        instanceActionGroups[key] = appendActionItem(
          instanceActionGroups[key],
          keyframe,
          actionItem
        );
        if (!targetCache[key]) {
          targetCache[key] = true;
          const { config } = actionItem;
          getAffectedElements2({
            config,
            event,
            eventTarget,
            elementRoot,
            elementApi: IX2BrowserApi_exports
          }).forEach((element) => {
            instanceConfigs.push({ element, key });
          });
        }
      });
    });
    instanceConfigs.forEach(({ element, key }) => {
      const actionGroups = instanceActionGroups[key];
      const actionItem = (0, import_get2.default)(actionGroups, `[0].actionItems[0]`, {});
      const { actionTypeId } = actionItem;
      const shouldUsePlugin = (
        // If it's targeted by class, don't query the element by pluginElementId
        actionTypeId === ActionTypeConsts.PLUGIN_RIVE ? (actionItem.config?.target?.selectorGuids || []).length === 0 : isPluginType2(actionTypeId)
      );
      const pluginInstance = shouldUsePlugin ? createPluginInstance2(actionTypeId)(element, actionItem) : null;
      const destination = getDestinationValues2(
        { element, actionItem, elementApi: IX2BrowserApi_exports },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        pluginInstance
      );
      createInstance2({
        store,
        element,
        eventId,
        actionListId,
        actionItem,
        destination,
        continuous: true,
        parameterId,
        actionGroups,
        smoothing,
        restingValue,
        pluginInstance
      });
    });
  }
  function appendActionItem(actionGroups = [], keyframe, actionItem) {
    const newActionGroups = [...actionGroups];
    let groupIndex;
    newActionGroups.some((group, index) => {
      if (group.keyframe === keyframe) {
        groupIndex = index;
        return true;
      }
      return false;
    });
    if (groupIndex == null) {
      groupIndex = newActionGroups.length;
      newActionGroups.push({
        keyframe,
        actionItems: []
      });
    }
    newActionGroups[groupIndex].actionItems.push(actionItem);
    return newActionGroups;
  }
  function bindEvents(store) {
    const { ixData: ixData2 } = store.getState();
    const { eventTypeMap } = ixData2;
    updateViewportWidth(store);
    (0, import_forEach.default)(eventTypeMap, (events, key) => {
      const logic = IX2VanillaEvents_default[key];
      if (!logic) {
        console.warn(`IX2 event type not configured: ${key}`);
        return;
      }
      bindEventType({
        // @ts-expect-error - TS7031 - Binding element 'logic' implicitly has an 'any' type.
        logic,
        store,
        events
      });
    });
    const { ixSession: ixSession2 } = store.getState();
    if (ixSession2.eventListeners.length) {
      bindResizeEvents(store);
    }
  }
  function bindResizeEvents(store) {
    const handleResize = () => {
      updateViewportWidth(store);
    };
    WINDOW_RESIZE_EVENTS.forEach((type) => {
      window.addEventListener(type, handleResize);
      store.dispatch(eventListenerAdded(window, [type, handleResize]));
    });
    handleResize();
  }
  function updateViewportWidth(store) {
    const { ixSession: ixSession2, ixData: ixData2 } = store.getState();
    const width = window.innerWidth;
    if (width !== ixSession2.viewportWidth) {
      const { mediaQueries } = ixData2;
      store.dispatch(viewportWidthChanged({ width, mediaQueries }));
    }
  }
  function bindEventType({ logic, store, events }) {
    injectBehaviorCSSFixes(events);
    const { types: eventTypes, handler: eventHandler } = logic;
    const { ixData: ixData2 } = store.getState();
    const { actionLists } = ixData2;
    const eventTargets = mapFoundValues(events, getAffectedForEvent);
    if (!(0, import_size.default)(eventTargets)) {
      return;
    }
    (0, import_forEach.default)(eventTargets, (elements, key) => {
      const event = events[key];
      const {
        action: eventAction,
        id: eventId,
        mediaQueries = ixData2.mediaQueryKeys
      } = event;
      const { actionListId } = eventAction.config;
      if (!mediaQueriesEqual2(mediaQueries, ixData2.mediaQueryKeys)) {
        store.dispatch(mediaQueriesDefined());
      }
      if (eventAction.actionTypeId === ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
        const configs = Array.isArray(event.config) ? event.config : [event.config];
        configs.forEach((eventConfig) => {
          const { continuousParameterGroupId } = eventConfig;
          const paramGroups = (0, import_get2.default)(
            actionLists,
            `${actionListId}.continuousParameterGroups`,
            []
          );
          const parameterGroup = (0, import_find2.default)(
            paramGroups,
            ({ id }) => id === continuousParameterGroupId
          );
          const smoothing = (eventConfig.smoothing || 0) / 100;
          const restingValue = (eventConfig.restingState || 0) / 100;
          if (!parameterGroup) {
            return;
          }
          elements.forEach((eventTarget, index) => {
            const eventStateKey = eventId + COLON_DELIMITER4 + index;
            createGroupInstances({
              store,
              eventStateKey,
              eventTarget,
              eventId,
              eventConfig,
              actionListId,
              parameterGroup,
              smoothing,
              restingValue
            });
          });
        });
      }
      if (eventAction.actionTypeId === ActionTypeConsts.GENERAL_START_ACTION || isQuickEffect(eventAction.actionTypeId)) {
        renderInitialGroup({ store, actionListId, eventId });
      }
    });
    const handleEvent = (nativeEvent) => {
      const { ixSession: ixSession2 } = store.getState();
      forEachEventTarget(eventTargets, (element, eventId, eventStateKey) => {
        const event = events[eventId];
        const oldState = ixSession2.eventState[eventStateKey];
        const { action: eventAction, mediaQueries = ixData2.mediaQueryKeys } = event;
        if (!shouldAllowMediaQuery2(mediaQueries, ixSession2.mediaQueryKey)) {
          return;
        }
        const handleEventWithConfig = (eventConfig = {}) => {
          const newState = eventHandler(
            {
              store,
              element,
              event,
              eventConfig,
              nativeEvent,
              eventStateKey
            },
            oldState
          );
          if (!shallowEqual2(newState, oldState)) {
            store.dispatch(eventStateChanged(eventStateKey, newState));
          }
        };
        if (eventAction.actionTypeId === ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
          const configs = Array.isArray(event.config) ? event.config : [event.config];
          configs.forEach(handleEventWithConfig);
        } else {
          handleEventWithConfig();
        }
      });
    };
    const handleEventThrottled = (0, import_throttle.default)(handleEvent, THROTTLED_EVENT_WAIT);
    const addListeners = ({
      target = document,
      // @ts-expect-error - TS7031 - Binding element 'types' implicitly has an 'any' type.
      types,
      // @ts-expect-error - TS7031 - Binding element 'shouldThrottle' implicitly has an 'any' type.
      throttle: shouldThrottle
    }) => {
      types.split(" ").filter(Boolean).forEach((type) => {
        const handlerFunc = shouldThrottle ? handleEventThrottled : handleEvent;
        target.addEventListener(type, handlerFunc);
        store.dispatch(eventListenerAdded(target, [type, handlerFunc]));
      });
    };
    if (Array.isArray(eventTypes)) {
      eventTypes.forEach(addListeners);
    } else if (typeof eventTypes === "string") {
      addListeners(logic);
    }
  }
  function injectBehaviorCSSFixes(events) {
    if (!IS_MOBILE_SAFARI) {
      return;
    }
    const injectedSelectors = {};
    let cssText = "";
    for (const eventId in events) {
      const { eventTypeId, target } = events[eventId];
      const selector = getQuerySelector(target);
      if (injectedSelectors[selector]) {
        continue;
      }
      if (eventTypeId === EventTypeConsts.MOUSE_CLICK || eventTypeId === EventTypeConsts.MOUSE_SECOND_CLICK) {
        injectedSelectors[selector] = true;
        cssText += selector + "{cursor: pointer;touch-action: manipulation;}";
      }
    }
    if (cssText) {
      const style = document.createElement("style");
      style.textContent = cssText;
      document.body.appendChild(style);
    }
  }
  function renderInitialGroup({
    store,
    actionListId,
    eventId
  }) {
    const { ixData: ixData2, ixSession: ixSession2 } = store.getState();
    const { actionLists, events } = ixData2;
    const event = events[eventId];
    const actionList = actionLists[actionListId];
    if (actionList && actionList.useFirstGroupAsInitialState) {
      const initialStateItems = (0, import_get2.default)(
        actionList,
        "actionItemGroups[0].actionItems",
        []
      );
      const mediaQueries = (0, import_get2.default)(event, "mediaQueries", ixData2.mediaQueryKeys);
      if (!shouldAllowMediaQuery2(mediaQueries, ixSession2.mediaQueryKey)) {
        return;
      }
      initialStateItems.forEach((actionItem) => {
        const { config: itemConfig, actionTypeId } = actionItem;
        const config = (
          // When useEventTarget is explicitly true, use event target/targets to query elements
          // However, skip this condition when objectId is defined
          // @ts-expect-error - Property 'target' does not exist on type 'never'.
          itemConfig?.target?.useEventTarget === true && // @ts-expect-error - Property 'target' does not exist on type 'never'.
          itemConfig?.target?.objectId == null ? (
            // @ts-expect-error - TS18048 - 'event' is possibly 'undefined'.
            { target: event.target, targets: event.targets }
          ) : itemConfig
        );
        const itemElements = getAffectedElements2({ config, event, elementApi: IX2BrowserApi_exports });
        const shouldUsePlugin = isPluginType2(actionTypeId);
        itemElements.forEach((element) => {
          const pluginInstance = shouldUsePlugin ? createPluginInstance2(actionTypeId)(element, actionItem) : null;
          createInstance2({
            destination: getDestinationValues2(
              { element, actionItem, elementApi: IX2BrowserApi_exports },
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              pluginInstance
            ),
            immediate: true,
            store,
            element,
            eventId,
            actionItem,
            actionListId,
            pluginInstance
          });
        });
      });
    }
  }
  function stopAllActionGroups({ store }) {
    const { ixInstances: ixInstances2 } = store.getState();
    (0, import_forEach.default)(ixInstances2, (instance) => {
      if (!instance.continuous) {
        const { actionListId, verbose } = instance;
        removeInstance(instance, store);
        if (verbose) {
          store.dispatch(
            actionListPlaybackChanged({ actionListId, isPlaying: false })
          );
        }
      }
    });
  }
  function stopActionGroup({
    // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
    store,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    eventId,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    eventTarget,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    eventStateKey,
    // @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
    actionListId
  }) {
    const { ixInstances: ixInstances2, ixSession: ixSession2 } = store.getState();
    const eventElementRoot = ixSession2.hasBoundaryNodes && eventTarget ? getClosestElement(eventTarget, BOUNDARY_SELECTOR2) : null;
    (0, import_forEach.default)(ixInstances2, (instance) => {
      const boundaryMode = (0, import_get2.default)(instance, "actionItem.config.target.boundaryMode");
      const validEventKey = eventStateKey ? instance.eventStateKey === eventStateKey : true;
      if (instance.actionListId === actionListId && instance.eventId === eventId && validEventKey) {
        if (eventElementRoot && boundaryMode && !elementContains(eventElementRoot, instance.element)) {
          return;
        }
        removeInstance(instance, store);
        if (instance.verbose) {
          store.dispatch(
            actionListPlaybackChanged({ actionListId, isPlaying: false })
          );
        }
      }
    });
  }
  function startActionGroup({
    // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
    store,
    // @ts-expect-error - TS7031 - Binding element 'eventId' implicitly has an 'any' type.
    eventId,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    eventTarget,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    eventStateKey,
    // @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
    actionListId,
    groupIndex = 0,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    immediate,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    verbose
  }) {
    const { ixData: ixData2, ixSession: ixSession2 } = store.getState();
    const { events } = ixData2;
    const event = events[eventId] || {};
    const { mediaQueries = ixData2.mediaQueryKeys } = event;
    const actionList = (0, import_get2.default)(ixData2, `actionLists.${actionListId}`, {});
    const { actionItemGroups, useFirstGroupAsInitialState } = actionList;
    if (!actionItemGroups || !actionItemGroups.length) {
      return false;
    }
    if (groupIndex >= actionItemGroups.length && (0, import_get2.default)(event, "config.loop")) {
      groupIndex = 0;
    }
    if (groupIndex === 0 && useFirstGroupAsInitialState) {
      groupIndex++;
    }
    const isFirstGroup = groupIndex === 0 || groupIndex === 1 && useFirstGroupAsInitialState;
    const instanceDelay = isFirstGroup && isQuickEffect(event.action?.actionTypeId) ? event.config.delay : void 0;
    const actionItems = (0, import_get2.default)(actionItemGroups, [groupIndex, "actionItems"], []);
    if (!actionItems.length) {
      return false;
    }
    if (!shouldAllowMediaQuery2(mediaQueries, ixSession2.mediaQueryKey)) {
      return false;
    }
    const eventElementRoot = ixSession2.hasBoundaryNodes && eventTarget ? getClosestElement(eventTarget, BOUNDARY_SELECTOR2) : null;
    const carrierIndex = getMaxDurationItemIndex2(actionItems);
    let groupStartResult = false;
    actionItems.forEach((actionItem, actionIndex) => {
      const { config, actionTypeId } = actionItem;
      const shouldUsePlugin = isPluginType2(actionTypeId);
      const { target } = config;
      if (!target) {
        return;
      }
      const elementRoot = target.boundaryMode ? eventElementRoot : null;
      const elements = getAffectedElements2({
        config,
        event,
        eventTarget,
        elementRoot,
        elementApi: IX2BrowserApi_exports
      });
      elements.forEach((element, elementIndex) => {
        const pluginInstance = shouldUsePlugin ? createPluginInstance2(actionTypeId)(element, actionItem) : null;
        const pluginDuration = shouldUsePlugin ? getPluginDuration2(actionTypeId)(element, actionItem) : null;
        groupStartResult = true;
        const isCarrier = carrierIndex === actionIndex && elementIndex === 0;
        const computedStyle = getComputedStyle3({ element, actionItem });
        const destination = getDestinationValues2(
          { element, actionItem, elementApi: IX2BrowserApi_exports },
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          pluginInstance
        );
        createInstance2({
          store,
          element,
          actionItem,
          eventId,
          eventTarget,
          eventStateKey,
          actionListId,
          groupIndex,
          isCarrier,
          computedStyle,
          destination,
          immediate,
          verbose,
          pluginInstance,
          pluginDuration,
          instanceDelay
        });
      });
    });
    return groupStartResult;
  }
  function createInstance2(options) {
    const { store, computedStyle, ...rest } = options;
    const {
      element,
      actionItem,
      immediate,
      pluginInstance,
      continuous,
      restingValue,
      eventId
    } = rest;
    const autoStart = !continuous;
    const instanceId = getInstanceId2();
    const { ixElements: ixElements3, ixSession: ixSession2, ixData: ixData2 } = store.getState();
    const elementId = getElementId2(ixElements3, element);
    const { refState: refState2 } = ixElements3[elementId] || {};
    const refType = getRefType(element);
    const skipMotion = (
      // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ readonly TRANSFORM_MOVE: true; readonly TRANSFORM_SCALE: true; readonly TRANSFORM_ROTATE: true; readonly TRANSFORM_SKEW: true; readonly STYLE_SIZE: true; readonly STYLE_FILTER: true; readonly STYLE_FONT_VARIATION: true; }'.
      ixSession2.reducedMotion && ReducedMotionTypes[actionItem.actionTypeId]
    );
    let skipToValue;
    if (skipMotion && continuous) {
      switch (ixData2.events[eventId]?.eventTypeId) {
        case EventTypeConsts.MOUSE_MOVE:
        case EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
          skipToValue = restingValue;
          break;
        default:
          skipToValue = 0.5;
          break;
      }
    }
    const origin = getInstanceOrigin2(
      element,
      refState2,
      computedStyle,
      actionItem,
      IX2BrowserApi_exports,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      pluginInstance
    );
    store.dispatch(
      instanceAdded({
        instanceId,
        elementId,
        origin,
        refType,
        skipMotion,
        skipToValue,
        ...rest
      })
    );
    dispatchCustomEvent(document.body, "ix2-animation-started", instanceId);
    if (immediate) {
      renderImmediateInstance(store, instanceId);
      return;
    }
    observeStore2({
      store,
      // @ts-expect-error - TS7031 - Binding element 'ixInstances' implicitly has an 'any' type.
      select: ({ ixInstances: ixInstances2 }) => ixInstances2[instanceId],
      onChange: handleInstanceChange
    });
    if (autoStart) {
      store.dispatch(instanceStarted(instanceId, ixSession2.tick));
    }
  }
  function removeInstance(instance, store) {
    dispatchCustomEvent(document.body, "ix2-animation-stopping", {
      instanceId: instance.id,
      state: store.getState()
    });
    const { elementId, actionItem } = instance;
    const { ixElements: ixElements3 } = store.getState();
    const { ref, refType } = ixElements3[elementId] || {};
    if (refType === HTML_ELEMENT4) {
      cleanupHTMLElement2(ref, actionItem, IX2BrowserApi_exports);
    }
    store.dispatch(instanceRemoved(instance.id));
  }
  function dispatchCustomEvent(element, eventName, detail) {
    const event = document.createEvent("CustomEvent");
    event.initCustomEvent(eventName, true, true, detail);
    element.dispatchEvent(event);
  }
  function renderImmediateInstance(store, instanceId) {
    const { ixParameters: ixParameters2 } = store.getState();
    store.dispatch(instanceStarted(instanceId, 0));
    store.dispatch(animationFrameChanged(performance.now(), ixParameters2));
    const { ixInstances: ixInstances2 } = store.getState();
    handleInstanceChange(ixInstances2[instanceId], store);
  }
  function handleInstanceChange(instance, store) {
    const {
      active,
      continuous,
      complete,
      elementId,
      actionItem,
      actionTypeId,
      renderType,
      current,
      groupIndex,
      eventId,
      eventTarget,
      eventStateKey,
      actionListId,
      isCarrier,
      styleProp,
      verbose,
      pluginInstance
    } = instance;
    const { ixData: ixData2, ixSession: ixSession2 } = store.getState();
    const { events } = ixData2;
    const event = events && events[eventId] ? events[eventId] : {};
    const { mediaQueries = ixData2.mediaQueryKeys } = event;
    if (!shouldAllowMediaQuery2(mediaQueries, ixSession2.mediaQueryKey)) {
      return;
    }
    if (continuous || active || complete) {
      if (current || renderType === RENDER_GENERAL4 && complete) {
        store.dispatch(
          elementStateChanged(elementId, actionTypeId, current, actionItem)
        );
        const { ixElements: ixElements3 } = store.getState();
        const { ref, refType, refState: refState2 } = ixElements3[elementId] || {};
        const actionState = refState2 && refState2[actionTypeId];
        if (refType === HTML_ELEMENT4 || isPluginType2(actionTypeId)) {
          renderHTMLElement2(
            ref,
            refState2,
            actionState,
            eventId,
            actionItem,
            styleProp,
            IX2BrowserApi_exports,
            renderType,
            pluginInstance
          );
        }
      }
      if (complete) {
        if (isCarrier) {
          const started = startActionGroup({
            store,
            eventId,
            eventTarget,
            eventStateKey,
            actionListId,
            groupIndex: groupIndex + 1,
            verbose
          });
          if (verbose && !started) {
            store.dispatch(
              actionListPlaybackChanged({ actionListId, isPlaying: false })
            );
          }
        }
        removeInstance(instance, store);
      }
    }
  }
  var import_find2, import_get2, import_size, import_omitBy, import_isEmpty, import_mapValues, import_forEach, import_throttle, import_shared6, QuickEffectsIdList, isQuickEffect, COLON_DELIMITER4, BOUNDARY_SELECTOR2, HTML_ELEMENT4, RENDER_GENERAL4, W_MOD_IX2, getAffectedElements2, getElementId2, getDestinationValues2, observeStore2, getInstanceId2, renderHTMLElement2, clearAllStyles2, getMaxDurationItemIndex2, getComputedStyle3, getInstanceOrigin2, reduceListToGroup2, shouldNamespaceEventParameter2, getNamespacedParameterId3, shouldAllowMediaQuery2, cleanupHTMLElement2, clearObjectCache2, stringifyTarget2, mediaQueriesEqual2, shallowEqual2, isPluginType2, createPluginInstance2, getPluginDuration2, ua, IS_MOBILE_SAFARI, THROTTLED_EVENT_WAIT, WINDOW_RESIZE_EVENTS, mapFoundValues, forEachEventTarget, getAffectedForEvent;
  var init_IX2VanillaEngine = __esm({
    "packages/systems/ix2/engine/logic/IX2VanillaEngine.ts"() {
      "use strict";
      import_find2 = __toESM(require_find());
      import_get2 = __toESM(require_get());
      import_size = __toESM(require_size());
      import_omitBy = __toESM(require_omitBy());
      import_isEmpty = __toESM(require_isEmpty());
      import_mapValues = __toESM(require_mapValues());
      import_forEach = __toESM(require_forEach());
      import_throttle = __toESM(require_throttle());
      init_shared_constants();
      import_shared6 = __toESM(require_shared());
      init_IX2EngineActions();
      init_IX2BrowserApi();
      init_IX2VanillaEvents();
      QuickEffectsIdList = Object.keys(QuickEffectIds);
      isQuickEffect = (actionTypeId) => QuickEffectsIdList.includes(actionTypeId);
      ({
        COLON_DELIMITER: COLON_DELIMITER4,
        BOUNDARY_SELECTOR: BOUNDARY_SELECTOR2,
        HTML_ELEMENT: HTML_ELEMENT4,
        RENDER_GENERAL: RENDER_GENERAL4,
        W_MOD_IX: W_MOD_IX2
      } = IX2EngineConstants_exports);
      ({
        getAffectedElements: getAffectedElements2,
        getElementId: getElementId2,
        getDestinationValues: getDestinationValues2,
        observeStore: observeStore2,
        getInstanceId: getInstanceId2,
        renderHTMLElement: renderHTMLElement2,
        clearAllStyles: clearAllStyles2,
        getMaxDurationItemIndex: getMaxDurationItemIndex2,
        getComputedStyle: getComputedStyle3,
        getInstanceOrigin: getInstanceOrigin2,
        reduceListToGroup: reduceListToGroup2,
        shouldNamespaceEventParameter: shouldNamespaceEventParameter2,
        getNamespacedParameterId: getNamespacedParameterId3,
        shouldAllowMediaQuery: shouldAllowMediaQuery2,
        cleanupHTMLElement: cleanupHTMLElement2,
        clearObjectCache: clearObjectCache2,
        stringifyTarget: stringifyTarget2,
        mediaQueriesEqual: mediaQueriesEqual2,
        shallowEqual: shallowEqual2
      } = import_shared6.IX2VanillaUtils);
      ({ isPluginType: isPluginType2, createPluginInstance: createPluginInstance2, getPluginDuration: getPluginDuration2 } = import_shared6.IX2VanillaPlugins);
      ua = navigator.userAgent;
      IS_MOBILE_SAFARI = ua.match(/iPad/i) || ua.match(/iPhone/);
      THROTTLED_EVENT_WAIT = 12;
      WINDOW_RESIZE_EVENTS = ["resize", "orientationchange"];
      mapFoundValues = (object, iteratee) => (0, import_omitBy.default)((0, import_mapValues.default)(object, iteratee), import_isEmpty.default);
      forEachEventTarget = (eventTargets, eventCallback) => {
        (0, import_forEach.default)(eventTargets, (elements, eventId) => {
          elements.forEach((element, index) => {
            const eventStateKey = eventId + COLON_DELIMITER4 + index;
            eventCallback(element, eventId, eventStateKey);
          });
        });
      };
      getAffectedForEvent = (event) => {
        const config = { target: event.target, targets: event.targets };
        return getAffectedElements2({ config, elementApi: IX2BrowserApi_exports });
      };
    }
  });

  // packages/systems/ix2/engine/index.js
  var require_engine = __commonJS({
    "packages/systems/ix2/engine/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        actions: function() {
          return _IX2EngineActions;
        },
        destroy: function() {
          return destroy2;
        },
        init: function() {
          return init2;
        },
        setEnv: function() {
          return setEnv;
        },
        store: function() {
          return store;
        }
      });
      var _redux = require_lib2();
      var _IX2Reducer = /* @__PURE__ */ _interop_require_default((init_IX2Reducer(), __toCommonJS(IX2Reducer_exports)));
      var _IX2VanillaEngine = (init_IX2VanillaEngine(), __toCommonJS(IX2VanillaEngine_exports));
      var _IX2EngineActions = /* @__PURE__ */ _interop_require_wildcard((init_IX2EngineActions(), __toCommonJS(IX2EngineActions_exports)));
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interop_require_wildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
          return {
            default: obj
          };
        }
        var cache2 = _getRequireWildcardCache(nodeInterop);
        if (cache2 && cache2.has(obj)) {
          return cache2.get(obj);
        }
        var newObj = {
          __proto__: null
        };
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache2) {
          cache2.set(obj, newObj);
        }
        return newObj;
      }
      var store = (0, _redux.createStore)(_IX2Reducer.default);
      function setEnv(env) {
        if (env()) {
          (0, _IX2VanillaEngine.observeRequests)(store);
        }
      }
      function init2(rawData) {
        destroy2();
        (0, _IX2VanillaEngine.startEngine)({
          store,
          rawData,
          allowEvents: true
        });
      }
      function destroy2() {
        (0, _IX2VanillaEngine.stopEngine)(store);
      }
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-ix2.js
  var require_webflow_ix2 = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-ix2.js"(exports, module) {
      "use strict";
      var Webflow2 = require_webflow_lib();
      var ix2 = require_engine();
      ix2.setEnv(Webflow2.env);
      Webflow2.define("ix2", module.exports = function() {
        return ix2;
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-links.js
  var require_webflow_links = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-links.js"(exports, module) {
      "use strict";
      var Webflow2 = require_webflow_lib();
      Webflow2.define("links", module.exports = function($2, _) {
        var api = {};
        var $win = $2(window);
        var designer;
        var inApp = Webflow2.env();
        var location = window.location;
        var tempLink = document.createElement("a");
        var linkCurrent = "w--current";
        var indexPage = /index\.(html|php)$/;
        var dirList = /\/$/;
        var anchors;
        var slug;
        api.ready = api.design = api.preview = init2;
        function init2() {
          designer = inApp && Webflow2.env("design");
          slug = Webflow2.env("slug") || location.pathname || "";
          Webflow2.scroll.off(scroll);
          anchors = [];
          var links = document.links;
          for (var i = 0; i < links.length; ++i) {
            select(links[i]);
          }
          if (anchors.length) {
            Webflow2.scroll.on(scroll);
            scroll();
          }
        }
        function select(link) {
          if (link.getAttribute("hreflang")) {
            return;
          }
          var href = designer && link.getAttribute("href-disabled") || link.getAttribute("href");
          tempLink.href = href;
          if (href.indexOf(":") >= 0) {
            return;
          }
          var $link = $2(link);
          if (tempLink.hash.length > 1 && tempLink.host + tempLink.pathname === location.host + location.pathname) {
            if (!/^#[a-zA-Z0-9\-\_]+$/.test(tempLink.hash)) {
              return;
            }
            var $section = $2(tempLink.hash);
            $section.length && anchors.push({
              link: $link,
              sec: $section,
              active: false
            });
            return;
          }
          if (href === "#" || href === "") {
            return;
          }
          var match = tempLink.href === location.href || href === slug || indexPage.test(href) && dirList.test(slug);
          setClass($link, linkCurrent, match);
        }
        function scroll() {
          var viewTop = $win.scrollTop();
          var viewHeight = $win.height();
          _.each(anchors, function(anchor) {
            if (anchor.link.attr("hreflang")) {
              return;
            }
            var $link = anchor.link;
            var $section = anchor.sec;
            var top = $section.offset().top;
            var height = $section.outerHeight();
            var offset = viewHeight * 0.5;
            var active = $section.is(":visible") && top + height - offset >= viewTop && top + offset <= viewTop + viewHeight;
            if (anchor.active === active) {
              return;
            }
            anchor.active = active;
            setClass($link, linkCurrent, active);
          });
        }
        function setClass($elem, className, add) {
          var exists = $elem.hasClass(className);
          if (add && exists) {
            return;
          }
          if (!add && !exists) {
            return;
          }
          add ? $elem.addClass(className) : $elem.removeClass(className);
        }
        return api;
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-scroll.js
  var require_webflow_scroll = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-scroll.js"(exports, module) {
      "use strict";
      var Webflow2 = require_webflow_lib();
      Webflow2.define("scroll", module.exports = function($2) {
        var NS_EVENTS = {
          WF_CLICK_EMPTY: "click.wf-empty-link",
          WF_CLICK_SCROLL: "click.wf-scroll"
        };
        var loc = window.location;
        var history = inIframe() ? null : window.history;
        var $win = $2(window);
        var $doc = $2(document);
        var $body = $2(document.body);
        var animate = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) {
          window.setTimeout(fn, 15);
        };
        var rootTag = Webflow2.env("editor") ? ".w-editor-body" : "body";
        var headerSelector = "header, " + rootTag + " > .header, " + rootTag + " > .w-nav:not([data-no-scroll])";
        var emptyHrefSelector = 'a[href="#"]';
        var localHrefSelector = 'a[href*="#"]:not(.w-tab-link):not(' + emptyHrefSelector + ")";
        var scrollTargetOutlineCSS = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}';
        var focusStylesEl = document.createElement("style");
        focusStylesEl.appendChild(document.createTextNode(scrollTargetOutlineCSS));
        function inIframe() {
          try {
            return Boolean(window.frameElement);
          } catch (e) {
            return true;
          }
        }
        var validHash = /^#[a-zA-Z0-9][\w:.-]*$/;
        function linksToCurrentPage(link) {
          return validHash.test(link.hash) && link.host + link.pathname === loc.host + loc.pathname;
        }
        const reducedMotionMediaQuery = typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
        function reducedMotionEnabled() {
          return document.body.getAttribute("data-wf-scroll-motion") === "none" || reducedMotionMediaQuery.matches;
        }
        function setFocusable($el, action) {
          var initialTabindex;
          switch (action) {
            case "add":
              initialTabindex = $el.attr("tabindex");
              if (initialTabindex) {
                $el.attr("data-wf-tabindex-swap", initialTabindex);
              } else {
                $el.attr("tabindex", "-1");
              }
              break;
            case "remove":
              initialTabindex = $el.attr("data-wf-tabindex-swap");
              if (initialTabindex) {
                $el.attr("tabindex", initialTabindex);
                $el.removeAttr("data-wf-tabindex-swap");
              } else {
                $el.removeAttr("tabindex");
              }
              break;
          }
          $el.toggleClass("wf-force-outline-none", action === "add");
        }
        function validateScroll(evt) {
          var target = evt.currentTarget;
          if (
            // Bail if in Designer
            Webflow2.env("design") || // Ignore links being used by jQuery mobile
            window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(target.className)
          ) {
            return;
          }
          var hash = linksToCurrentPage(target) ? target.hash : "";
          if (hash === "")
            return;
          var $el = $2(hash);
          if (!$el.length) {
            return;
          }
          if (evt) {
            evt.preventDefault();
            evt.stopPropagation();
          }
          updateHistory(hash, evt);
          window.setTimeout(function() {
            scroll($el, function setFocus() {
              setFocusable($el, "add");
              $el.get(0).focus({
                preventScroll: true
              });
              setFocusable($el, "remove");
            });
          }, evt ? 0 : 300);
        }
        function updateHistory(hash) {
          if (loc.hash !== hash && history && history.pushState && // Navigation breaks Chrome when the protocol is `file:`.
          !(Webflow2.env.chrome && loc.protocol === "file:")) {
            var oldHash = history.state && history.state.hash;
            if (oldHash !== hash) {
              history.pushState({
                hash
              }, "", hash);
            }
          }
        }
        function scroll($targetEl, cb) {
          var start = $win.scrollTop();
          var end = calculateScrollEndPosition($targetEl);
          if (start === end)
            return;
          var duration = calculateScrollDuration($targetEl, start, end);
          var clock = Date.now();
          var step = function() {
            var elapsed = Date.now() - clock;
            window.scroll(0, getY(start, end, elapsed, duration));
            if (elapsed <= duration) {
              animate(step);
            } else if (typeof cb === "function") {
              cb();
            }
          };
          animate(step);
        }
        function calculateScrollEndPosition($targetEl) {
          var $header = $2(headerSelector);
          var offsetY = $header.css("position") === "fixed" ? $header.outerHeight() : 0;
          var end = $targetEl.offset().top - offsetY;
          if ($targetEl.data("scroll") === "mid") {
            var available = $win.height() - offsetY;
            var elHeight = $targetEl.outerHeight();
            if (elHeight < available) {
              end -= Math.round((available - elHeight) / 2);
            }
          }
          return end;
        }
        function calculateScrollDuration($targetEl, start, end) {
          if (reducedMotionEnabled())
            return 0;
          var mult = 1;
          $body.add($targetEl).each(function(_, el) {
            var time = parseFloat(el.getAttribute("data-scroll-time"));
            if (!isNaN(time) && time >= 0) {
              mult = time;
            }
          });
          return (472.143 * Math.log(Math.abs(start - end) + 125) - 2e3) * mult;
        }
        function getY(start, end, elapsed, duration) {
          if (elapsed > duration) {
            return end;
          }
          return start + (end - start) * ease2(elapsed / duration);
        }
        function ease2(t) {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        }
        function ready2() {
          var { WF_CLICK_EMPTY, WF_CLICK_SCROLL } = NS_EVENTS;
          $doc.on(WF_CLICK_SCROLL, localHrefSelector, validateScroll);
          $doc.on(WF_CLICK_EMPTY, emptyHrefSelector, function(e) {
            e.preventDefault();
          });
          document.head.insertBefore(focusStylesEl, document.head.firstChild);
        }
        return {
          ready: ready2
        };
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-touch.js
  var require_webflow_touch = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-touch.js"(exports, module) {
      "use strict";
      var Webflow2 = require_webflow_lib();
      Webflow2.define("touch", module.exports = function($2) {
        var api = {};
        var getSelection = window.getSelection;
        $2.event.special.tap = {
          bindType: "click",
          delegateType: "click"
        };
        api.init = function(el) {
          el = typeof el === "string" ? $2(el).get(0) : el;
          return el ? new Touch(el) : null;
        };
        function Touch(el) {
          var active = false;
          var useTouch = false;
          var thresholdX = Math.min(Math.round(window.innerWidth * 0.04), 40);
          var startX;
          var lastX;
          el.addEventListener("touchstart", start, false);
          el.addEventListener("touchmove", move, false);
          el.addEventListener("touchend", end, false);
          el.addEventListener("touchcancel", cancel, false);
          el.addEventListener("mousedown", start, false);
          el.addEventListener("mousemove", move, false);
          el.addEventListener("mouseup", end, false);
          el.addEventListener("mouseout", cancel, false);
          function start(evt) {
            var touches = evt.touches;
            if (touches && touches.length > 1) {
              return;
            }
            active = true;
            if (touches) {
              useTouch = true;
              startX = touches[0].clientX;
            } else {
              startX = evt.clientX;
            }
            lastX = startX;
          }
          function move(evt) {
            if (!active) {
              return;
            }
            if (useTouch && evt.type === "mousemove") {
              evt.preventDefault();
              evt.stopPropagation();
              return;
            }
            var touches = evt.touches;
            var x = touches ? touches[0].clientX : evt.clientX;
            var velocityX = x - lastX;
            lastX = x;
            if (Math.abs(velocityX) > thresholdX && getSelection && String(getSelection()) === "") {
              triggerEvent("swipe", evt, {
                direction: velocityX > 0 ? "right" : "left"
              });
              cancel();
            }
          }
          function end(evt) {
            if (!active) {
              return;
            }
            active = false;
            if (useTouch && evt.type === "mouseup") {
              evt.preventDefault();
              evt.stopPropagation();
              useTouch = false;
              return;
            }
          }
          function cancel() {
            active = false;
          }
          function destroy2() {
            el.removeEventListener("touchstart", start, false);
            el.removeEventListener("touchmove", move, false);
            el.removeEventListener("touchend", end, false);
            el.removeEventListener("touchcancel", cancel, false);
            el.removeEventListener("mousedown", start, false);
            el.removeEventListener("mousemove", move, false);
            el.removeEventListener("mouseup", end, false);
            el.removeEventListener("mouseout", cancel, false);
            el = null;
          }
          this.destroy = destroy2;
        }
        function triggerEvent(type, evt, data) {
          var newEvent = $2.Event(type, {
            originalEvent: evt
          });
          $2(evt.target).trigger(newEvent, data);
        }
        api.instance = api.init(document);
        return api;
      });
    }
  });

  // packages/shared/render/plugins/Dropdown/webflow-dropdown.js
  var require_webflow_dropdown = __commonJS({
    "packages/shared/render/plugins/Dropdown/webflow-dropdown.js"(exports, module) {
      "use strict";
      var Webflow2 = require_webflow_lib();
      var IXEvents = require_webflow_ix2_events();
      var KEY_CODES = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35
      };
      var FORCE_CLOSE = true;
      var INTERNAL_PAGE_LINK_HASHES_PATTERN = /^#[a-zA-Z0-9\-_]+$/;
      Webflow2.define("dropdown", module.exports = function($2, _) {
        var debounce = _.debounce;
        var api = {};
        var inApp = Webflow2.env();
        var inPreview = false;
        var inDesigner;
        var touch = Webflow2.env.touch;
        var namespace = ".w-dropdown";
        var openStateClassName = "w--open";
        var ix = IXEvents.triggers;
        var defaultZIndex = 900;
        var focusOutEvent = "focusout" + namespace;
        var keydownEvent = "keydown" + namespace;
        var mouseEnterEvent = "mouseenter" + namespace;
        var mouseMoveEvent = "mousemove" + namespace;
        var mouseLeaveEvent = "mouseleave" + namespace;
        var mouseUpEvent = (touch ? "click" : "mouseup") + namespace;
        var closeEvent = "w-close" + namespace;
        var settingEvent = "setting" + namespace;
        var $doc = $2(document);
        var $dropdowns;
        api.ready = init2;
        api.design = function() {
          if (inPreview) {
            closeAll();
          }
          inPreview = false;
          init2();
        };
        api.preview = function() {
          inPreview = true;
          init2();
        };
        function init2() {
          inDesigner = inApp && Webflow2.env("design");
          $dropdowns = $doc.find(namespace);
          $dropdowns.each(build);
        }
        function build(i, el) {
          var $el = $2(el);
          var data = $2.data(el, namespace);
          if (!data) {
            data = $2.data(el, namespace, {
              open: false,
              el: $el,
              config: {},
              selectedIdx: -1
            });
          }
          data.toggle = data.el.children(".w-dropdown-toggle");
          data.list = data.el.children(".w-dropdown-list");
          data.links = data.list.find("a:not(.w-dropdown .w-dropdown a)");
          data.complete = complete(data);
          data.mouseLeave = makeMouseLeaveHandler(data);
          data.mouseUpOutside = outside(data);
          data.mouseMoveOutside = moveOutside(data);
          configure(data);
          var toggleId = data.toggle.attr("id");
          var listId = data.list.attr("id");
          if (!toggleId) {
            toggleId = "w-dropdown-toggle-" + i;
          }
          if (!listId) {
            listId = "w-dropdown-list-" + i;
          }
          data.toggle.attr("id", toggleId);
          data.toggle.attr("aria-controls", listId);
          data.toggle.attr("aria-haspopup", "menu");
          data.toggle.attr("aria-expanded", "false");
          data.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true");
          if (data.toggle.prop("tagName") !== "BUTTON") {
            data.toggle.attr("role", "button");
            if (!data.toggle.attr("tabindex")) {
              data.toggle.attr("tabindex", "0");
            }
          }
          data.list.attr("id", listId);
          data.list.attr("aria-labelledby", toggleId);
          data.links.each(function(idx, link) {
            if (!link.hasAttribute("tabindex"))
              link.setAttribute("tabindex", "0");
            if (INTERNAL_PAGE_LINK_HASHES_PATTERN.test(link.hash)) {
              link.addEventListener("click", close.bind(null, data));
            }
          });
          data.el.off(namespace);
          data.toggle.off(namespace);
          if (data.nav) {
            data.nav.off(namespace);
          }
          var initialToggler = makeToggler(data, FORCE_CLOSE);
          if (inDesigner) {
            data.el.on(settingEvent, makeSettingEventHandler(data));
          }
          if (!inDesigner) {
            if (inApp) {
              data.hovering = false;
              close(data);
            }
            if (data.config.hover) {
              data.toggle.on(mouseEnterEvent, makeMouseEnterHandler(data));
            }
            data.el.on(closeEvent, initialToggler);
            data.el.on(keydownEvent, makeDropdownKeydownHandler(data));
            data.el.on(focusOutEvent, makeDropdownFocusOutHandler(data));
            data.toggle.on(mouseUpEvent, initialToggler);
            data.toggle.on(keydownEvent, makeToggleKeydownHandler(data));
            data.nav = data.el.closest(".w-nav");
            data.nav.on(closeEvent, initialToggler);
          }
        }
        function configure(data) {
          var zIndex = Number(data.el.css("z-index"));
          data.manageZ = zIndex === defaultZIndex || zIndex === defaultZIndex + 1;
          data.config = {
            hover: data.el.attr("data-hover") === "true" && !touch,
            delay: data.el.attr("data-delay")
          };
        }
        function makeSettingEventHandler(data) {
          return function(evt, options) {
            options = options || {};
            configure(data);
            options.open === true && open(data, true);
            options.open === false && close(data, {
              immediate: true
            });
          };
        }
        function makeToggler(data, forceClose) {
          return debounce(function(evt) {
            if (data.open || evt && evt.type === "w-close") {
              return close(data, {
                forceClose
              });
            }
            open(data);
          });
        }
        function open(data) {
          if (data.open) {
            return;
          }
          closeOthers(data);
          data.open = true;
          data.list.addClass(openStateClassName);
          data.toggle.addClass(openStateClassName);
          data.toggle.attr("aria-expanded", "true");
          ix.intro(0, data.el[0]);
          Webflow2.redraw.up();
          data.manageZ && data.el.css("z-index", defaultZIndex + 1);
          var isEditor = Webflow2.env("editor");
          if (!inDesigner) {
            $doc.on(mouseUpEvent, data.mouseUpOutside);
          }
          if (data.hovering && !isEditor) {
            data.el.on(mouseLeaveEvent, data.mouseLeave);
          }
          if (data.hovering && isEditor) {
            $doc.on(mouseMoveEvent, data.mouseMoveOutside);
          }
          window.clearTimeout(data.delayId);
        }
        function close(data, { immediate, forceClose } = {}) {
          if (!data.open) {
            return;
          }
          if (data.config.hover && data.hovering && !forceClose) {
            return;
          }
          data.toggle.attr("aria-expanded", "false");
          data.open = false;
          var config = data.config;
          ix.outro(0, data.el[0]);
          $doc.off(mouseUpEvent, data.mouseUpOutside);
          $doc.off(mouseMoveEvent, data.mouseMoveOutside);
          data.el.off(mouseLeaveEvent, data.mouseLeave);
          window.clearTimeout(data.delayId);
          if (!config.delay || immediate) {
            return data.complete();
          }
          data.delayId = window.setTimeout(data.complete, config.delay);
        }
        function closeAll() {
          $doc.find(namespace).each(function(i, el) {
            $2(el).triggerHandler(closeEvent);
          });
        }
        function closeOthers(data) {
          var self2 = data.el[0];
          $dropdowns.each(function(i, other) {
            var $other = $2(other);
            if ($other.is(self2) || $other.has(self2).length) {
              return;
            }
            $other.triggerHandler(closeEvent);
          });
        }
        function outside(data) {
          if (data.mouseUpOutside) {
            $doc.off(mouseUpEvent, data.mouseUpOutside);
          }
          return debounce(function(evt) {
            if (!data.open) {
              return;
            }
            var $target = $2(evt.target);
            if ($target.closest(".w-dropdown-toggle").length) {
              return;
            }
            var isEventOutsideDropdowns = $2.inArray(data.el[0], $target.parents(namespace)) === -1;
            var isEditor = Webflow2.env("editor");
            if (isEventOutsideDropdowns) {
              if (isEditor) {
                var isEventOnDetachedSvg = $target.parents().length === 1 && $target.parents("svg").length === 1;
                var isEventOnHoverControls = $target.parents(".w-editor-bem-EditorHoverControls").length;
                if (isEventOnDetachedSvg || isEventOnHoverControls) {
                  return;
                }
              }
              close(data);
            }
          });
        }
        function complete(data) {
          return function() {
            data.list.removeClass(openStateClassName);
            data.toggle.removeClass(openStateClassName);
            data.manageZ && data.el.css("z-index", "");
          };
        }
        function makeMouseEnterHandler(data) {
          return function() {
            data.hovering = true;
            open(data);
          };
        }
        function makeMouseLeaveHandler(data) {
          return function() {
            data.hovering = false;
            if (!data.links.is(":focus")) {
              close(data);
            }
          };
        }
        function moveOutside(data) {
          return debounce(function(evt) {
            if (!data.open) {
              return;
            }
            var $target = $2(evt.target);
            var isEventOutsideDropdowns = $2.inArray(data.el[0], $target.parents(namespace)) === -1;
            if (isEventOutsideDropdowns) {
              var isEventOnHoverControls = $target.parents(".w-editor-bem-EditorHoverControls").length;
              var isEventOnHoverToolbar = $target.parents(".w-editor-bem-RTToolbar").length;
              var $editorOverlay = $2(".w-editor-bem-EditorOverlay");
              var isDropdownInEdition = $editorOverlay.find(".w-editor-edit-outline").length || $editorOverlay.find(".w-editor-bem-RTToolbar").length;
              if (isEventOnHoverControls || isEventOnHoverToolbar || isDropdownInEdition) {
                return;
              }
              data.hovering = false;
              close(data);
            }
          });
        }
        function makeDropdownKeydownHandler(data) {
          return function(evt) {
            if (inDesigner || !data.open) {
              return;
            }
            data.selectedIdx = data.links.index(document.activeElement);
            switch (evt.keyCode) {
              case KEY_CODES.HOME: {
                if (!data.open)
                  return;
                data.selectedIdx = 0;
                focusSelectedLink(data);
                return evt.preventDefault();
              }
              case KEY_CODES.END: {
                if (!data.open)
                  return;
                data.selectedIdx = data.links.length - 1;
                focusSelectedLink(data);
                return evt.preventDefault();
              }
              case KEY_CODES.ESCAPE: {
                close(data);
                data.toggle.focus();
                return evt.stopPropagation();
              }
              case KEY_CODES.ARROW_RIGHT:
              case KEY_CODES.ARROW_DOWN: {
                data.selectedIdx = Math.min(data.links.length - 1, data.selectedIdx + 1);
                focusSelectedLink(data);
                return evt.preventDefault();
              }
              case KEY_CODES.ARROW_LEFT:
              case KEY_CODES.ARROW_UP: {
                data.selectedIdx = Math.max(-1, data.selectedIdx - 1);
                focusSelectedLink(data);
                return evt.preventDefault();
              }
            }
          };
        }
        function focusSelectedLink(data) {
          if (data.links[data.selectedIdx]) {
            data.links[data.selectedIdx].focus();
          }
        }
        function makeToggleKeydownHandler(data) {
          var toggler = makeToggler(data, FORCE_CLOSE);
          return function(evt) {
            if (inDesigner)
              return;
            if (!data.open) {
              switch (evt.keyCode) {
                case KEY_CODES.ARROW_UP:
                case KEY_CODES.ARROW_DOWN: {
                  return evt.stopPropagation();
                }
              }
            }
            switch (evt.keyCode) {
              case KEY_CODES.SPACE:
              case KEY_CODES.ENTER: {
                toggler();
                evt.stopPropagation();
                return evt.preventDefault();
              }
            }
          };
        }
        function makeDropdownFocusOutHandler(data) {
          return debounce(function(evt) {
            var { relatedTarget, target } = evt;
            var menuEl = data.el[0];
            var menuContainsFocus = menuEl.contains(relatedTarget) || menuEl.contains(target);
            if (!menuContainsFocus) {
              close(data);
            }
            return evt.stopPropagation();
          });
        }
        return api;
      });
    }
  });

  // packages/shared/render/plugins/Form/webflow-forms-hosted.js
  var require_webflow_forms_hosted = __commonJS({
    "packages/shared/render/plugins/Form/webflow-forms-hosted.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return hostedSubmitWebflow;
        }
      });
      function hostedSubmitWebflow(reset, loc, Webflow2, collectEnterpriseTrackingCookies, preventDefault, findFields, alert, findFileUploads, disableBtn, siteId, afterSubmit, $2, formUrl) {
        return function(data) {
          reset(data);
          var form = data.form;
          var payload = {
            name: form.attr("data-name") || form.attr("name") || "Untitled Form",
            pageId: form.attr("data-wf-page-id") || "",
            elementId: form.attr("data-wf-element-id") || "",
            source: loc.href,
            test: Webflow2.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(form.html()),
            trackingCookies: collectEnterpriseTrackingCookies()
          };
          const wfFlow = form.attr("data-wf-flow");
          if (wfFlow) {
            payload.wfFlow = wfFlow;
          }
          preventDefault(data);
          var status = findFields(form, payload.fields);
          if (status) {
            return alert(status);
          }
          payload.fileUploads = findFileUploads(form);
          disableBtn(data);
          if (!siteId) {
            afterSubmit(data);
            return;
          }
          $2.ajax({
            url: formUrl,
            type: "POST",
            data: payload,
            dataType: "json",
            crossDomain: true
          }).done(function(response) {
            if (response && response.code === 200) {
              data.success = true;
            }
            afterSubmit(data);
          }).fail(function() {
            afterSubmit(data);
          });
        };
      }
    }
  });

  // packages/shared/render/plugins/Form/webflow-forms.js
  var require_webflow_forms = __commonJS({
    "packages/shared/render/plugins/Form/webflow-forms.js"(exports, module) {
      "use strict";
      var Webflow2 = require_webflow_lib();
      var renderTurnstileCaptcha = (siteKey, formElement, cb, errorCallback) => {
        const captchaContainer = document.createElement("div");
        formElement.appendChild(captchaContainer);
        turnstile.render(captchaContainer, {
          sitekey: siteKey,
          callback: function(token) {
            cb(token);
          },
          "error-callback": function() {
            errorCallback();
          }
        });
      };
      Webflow2.define("forms", module.exports = function($2, _) {
        const TURNSTILE_LOADED_EVENT = "TURNSTILE_LOADED";
        var api = {};
        var $doc = $2(document);
        var $forms;
        var loc = window.location;
        var retro = window.XDomainRequest && !window.atob;
        var namespace = ".w-form";
        var siteId;
        var emailField = /e(-)?mail/i;
        var emailValue = /^\S+@\S+$/;
        var alert = window.alert;
        var inApp = Webflow2.env();
        var listening;
        var formUrl;
        var signFileUrl;
        const turnstileSiteKey = $doc.find("[data-turnstile-sitekey]").data("turnstile-sitekey");
        let turnstileScript;
        var chimpRegex = /list-manage[1-9]?.com/i;
        var disconnected = _.debounce(function() {
          alert("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.");
        }, 100);
        api.ready = api.design = api.preview = function() {
          loadTurnstileScript();
          init2();
          if (!inApp && !listening) {
            addListeners();
          }
        };
        function init2() {
          siteId = $2("html").attr("data-wf-site");
          formUrl = "https://webflow.com/api/v1/form/" + siteId;
          if (retro && formUrl.indexOf("https://webflow.com") >= 0) {
            formUrl = formUrl.replace("https://webflow.com", "https://formdata.webflow.com");
          }
          signFileUrl = `${formUrl}/signFile`;
          $forms = $2(namespace + " form");
          if (!$forms.length) {
            return;
          }
          $forms.each(build);
        }
        function loadTurnstileScript() {
          if (turnstileSiteKey) {
            turnstileScript = document.createElement("script");
            turnstileScript.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
            document.head.appendChild(turnstileScript);
            turnstileScript.onload = () => {
              $doc.trigger(TURNSTILE_LOADED_EVENT);
            };
          }
        }
        function build(i, el) {
          var $el = $2(el);
          var data = $2.data(el, namespace);
          if (!data) {
            data = $2.data(el, namespace, {
              form: $el
            });
          }
          reset(data);
          var wrap = $el.closest("div.w-form");
          data.done = wrap.find("> .w-form-done");
          data.fail = wrap.find("> .w-form-fail");
          data.fileUploads = wrap.find(".w-file-upload");
          data.fileUploads.each(function(j) {
            initFileUpload(j, data);
          });
          if (turnstileSiteKey) {
            data.wait = false;
            disableBtn(data);
            $doc.on(typeof turnstile !== "undefined" ? "ready" : TURNSTILE_LOADED_EVENT, function() {
              renderTurnstileCaptcha(turnstileSiteKey, el, (token) => {
                data.turnstileToken = token;
                reset(data);
              }, () => {
                disableBtn(data);
              });
            });
          }
          var formName = data.form.attr("aria-label") || data.form.attr("data-name") || "Form";
          if (!data.done.attr("aria-label")) {
            data.form.attr("aria-label", formName);
          }
          data.done.attr("tabindex", "-1");
          data.done.attr("role", "region");
          if (!data.done.attr("aria-label")) {
            data.done.attr("aria-label", formName + " success");
          }
          data.fail.attr("tabindex", "-1");
          data.fail.attr("role", "region");
          if (!data.fail.attr("aria-label")) {
            data.fail.attr("aria-label", formName + " failure");
          }
          var action = data.action = $el.attr("action");
          data.handler = null;
          data.redirect = $el.attr("data-redirect");
          if (chimpRegex.test(action)) {
            data.handler = submitMailChimp;
            return;
          }
          if (action) {
            return;
          }
          if (siteId) {
            data.handler = false ? exportedSubmitWebflow : (() => {
              const hostedSubmitHandler = require_webflow_forms_hosted().default;
              return hostedSubmitHandler(reset, loc, Webflow2, collectEnterpriseTrackingCookies, preventDefault, findFields, alert, findFileUploads, disableBtn, siteId, afterSubmit, $2, formUrl);
            })();
            return;
          }
          disconnected();
        }
        function addListeners() {
          listening = true;
          $doc.on("submit", namespace + " form", function(evt) {
            var data = $2.data(this, namespace);
            if (data.handler) {
              data.evt = evt;
              data.handler(data);
            }
          });
          const CHECKBOX_CLASS_NAME = ".w-checkbox-input";
          const RADIO_INPUT_CLASS_NAME = ".w-radio-input";
          const CHECKED_CLASS = "w--redirected-checked";
          const FOCUSED_CLASS = "w--redirected-focus";
          const FOCUSED_VISIBLE_CLASS = "w--redirected-focus-visible";
          const focusVisibleSelectors = ":focus-visible, [data-wf-focus-visible]";
          const CUSTOM_CONTROLS = [
            [
              "checkbox",
              CHECKBOX_CLASS_NAME
            ],
            [
              "radio",
              RADIO_INPUT_CLASS_NAME
            ]
          ];
          $doc.on("change", namespace + ` form input[type="checkbox"]:not(` + CHECKBOX_CLASS_NAME + ")", (evt) => {
            $2(evt.target).siblings(CHECKBOX_CLASS_NAME).toggleClass(CHECKED_CLASS);
          });
          $doc.on("change", namespace + ` form input[type="radio"]`, (evt) => {
            $2(`input[name="${evt.target.name}"]:not(${CHECKBOX_CLASS_NAME})`).map((i, el) => $2(el).siblings(RADIO_INPUT_CLASS_NAME).removeClass(CHECKED_CLASS));
            const $target = $2(evt.target);
            if (!$target.hasClass("w-radio-input")) {
              $target.siblings(RADIO_INPUT_CLASS_NAME).addClass(CHECKED_CLASS);
            }
          });
          CUSTOM_CONTROLS.forEach(([controlType, customControlClassName]) => {
            $doc.on("focus", namespace + ` form input[type="${controlType}"]:not(` + customControlClassName + ")", (evt) => {
              $2(evt.target).siblings(customControlClassName).addClass(FOCUSED_CLASS);
              $2(evt.target).filter(focusVisibleSelectors).siblings(customControlClassName).addClass(FOCUSED_VISIBLE_CLASS);
            });
            $doc.on("blur", namespace + ` form input[type="${controlType}"]:not(` + customControlClassName + ")", (evt) => {
              $2(evt.target).siblings(customControlClassName).removeClass(`${FOCUSED_CLASS} ${FOCUSED_VISIBLE_CLASS}`);
            });
          });
        }
        function reset(data) {
          var btn = data.btn = data.form.find(':input[type="submit"]');
          data.wait = data.btn.attr("data-wait") || null;
          data.success = false;
          btn.prop("disabled", Boolean(turnstileSiteKey && !data.turnstileToken));
          data.label && btn.val(data.label);
        }
        function disableBtn(data) {
          var btn = data.btn;
          var wait = data.wait;
          btn.prop("disabled", true);
          if (wait) {
            data.label = btn.val();
            btn.val(wait);
          }
        }
        function findFields(form, result) {
          var status = null;
          result = result || {};
          form.find(':input:not([type="submit"]):not([type="file"])').each(function(i, el) {
            var field = $2(el);
            var type = field.attr("type");
            var name = field.attr("data-name") || field.attr("name") || "Field " + (i + 1);
            name = encodeURIComponent(name);
            var value = field.val();
            if (type === "checkbox") {
              value = field.is(":checked");
            } else if (type === "radio") {
              if (result[name] === null || typeof result[name] === "string") {
                return;
              }
              value = form.find('input[name="' + field.attr("name") + '"]:checked').val() || null;
            }
            if (typeof value === "string") {
              value = $2.trim(value);
            }
            result[name] = value;
            status = status || getStatus(field, type, name, value);
          });
          return status;
        }
        function findFileUploads(form) {
          var result = {};
          form.find(':input[type="file"]').each(function(i, el) {
            var field = $2(el);
            var name = field.attr("data-name") || field.attr("name") || "File " + (i + 1);
            var value = field.attr("data-value");
            if (typeof value === "string") {
              value = $2.trim(value);
            }
            result[name] = value;
          });
          return result;
        }
        const trackingCookieNameMap = {
          _mkto_trk: "marketo"
        };
        function collectEnterpriseTrackingCookies() {
          const cookies = document.cookie.split("; ").reduce(function(acc, cookie) {
            const splitCookie = cookie.split("=");
            const name = splitCookie[0];
            if (name in trackingCookieNameMap) {
              const mappedName = trackingCookieNameMap[name];
              const value = splitCookie.slice(1).join("=");
              acc[mappedName] = value;
            }
            return acc;
          }, {});
          return cookies;
        }
        function getStatus(field, type, name, value) {
          var status = null;
          if (type === "password") {
            status = "Passwords cannot be submitted.";
          } else if (field.attr("required")) {
            if (!value) {
              status = "Please fill out the required field: " + name;
            } else if (emailField.test(field.attr("type"))) {
              if (!emailValue.test(value)) {
                status = "Please enter a valid email address for: " + name;
              }
            }
          } else if (name === "g-recaptcha-response" && !value) {
            status = "Please confirm you\u2019re not a robot.";
          }
          return status;
        }
        function exportedSubmitWebflow(data) {
          preventDefault(data);
          afterSubmit(data);
        }
        function submitMailChimp(data) {
          reset(data);
          var form = data.form;
          var payload = {};
          if (/^https/.test(loc.href) && !/^https/.test(data.action)) {
            form.attr("method", "post");
            return;
          }
          preventDefault(data);
          var status = findFields(form, payload);
          if (status) {
            return alert(status);
          }
          disableBtn(data);
          var fullName;
          _.each(payload, function(value, key) {
            if (emailField.test(key)) {
              payload.EMAIL = value;
            }
            if (/^((full[ _-]?)?name)$/i.test(key)) {
              fullName = value;
            }
            if (/^(first[ _-]?name)$/i.test(key)) {
              payload.FNAME = value;
            }
            if (/^(last[ _-]?name)$/i.test(key)) {
              payload.LNAME = value;
            }
          });
          if (fullName && !payload.FNAME) {
            fullName = fullName.split(" ");
            payload.FNAME = fullName[0];
            payload.LNAME = payload.LNAME || fullName[1];
          }
          var url = data.action.replace("/post?", "/post-json?") + "&c=?";
          var userId = url.indexOf("u=") + 2;
          userId = url.substring(userId, url.indexOf("&", userId));
          var listId = url.indexOf("id=") + 3;
          listId = url.substring(listId, url.indexOf("&", listId));
          payload["b_" + userId + "_" + listId] = "";
          $2.ajax({
            url,
            data: payload,
            dataType: "jsonp"
          }).done(function(resp) {
            data.success = resp.result === "success" || /already/.test(resp.msg);
            if (!data.success) {
              console.info("MailChimp error: " + resp.msg);
            }
            afterSubmit(data);
          }).fail(function() {
            afterSubmit(data);
          });
        }
        function afterSubmit(data) {
          var form = data.form;
          var redirect = data.redirect;
          var success = data.success;
          if (success && redirect) {
            Webflow2.location(redirect);
            return;
          }
          data.done.toggle(success);
          data.fail.toggle(!success);
          if (success) {
            data.done.focus();
          } else {
            data.fail.focus();
          }
          form.toggle(!success);
          reset(data);
        }
        function preventDefault(data) {
          data.evt && data.evt.preventDefault();
          data.evt = null;
        }
        function initFileUpload(i, form) {
          if (!form.fileUploads || !form.fileUploads[i]) {
            return;
          }
          var file;
          var $el = $2(form.fileUploads[i]);
          var $defaultWrap = $el.find("> .w-file-upload-default");
          var $uploadingWrap = $el.find("> .w-file-upload-uploading");
          var $successWrap = $el.find("> .w-file-upload-success");
          var $errorWrap = $el.find("> .w-file-upload-error");
          var $input = $defaultWrap.find(".w-file-upload-input");
          var $label = $defaultWrap.find(".w-file-upload-label");
          var $labelChildren = $label.children();
          var $errorMsgEl = $errorWrap.find(".w-file-upload-error-msg");
          var $fileEl = $successWrap.find(".w-file-upload-file");
          var $removeEl = $successWrap.find(".w-file-remove-link");
          var $fileNameEl = $fileEl.find(".w-file-upload-file-name");
          var sizeErrMsg = $errorMsgEl.attr("data-w-size-error");
          var typeErrMsg = $errorMsgEl.attr("data-w-type-error");
          var genericErrMsg = $errorMsgEl.attr("data-w-generic-error");
          if (!inApp) {
            $label.on("click keydown", function(e) {
              if (e.type === "keydown" && e.which !== 13 && e.which !== 32) {
                return;
              }
              e.preventDefault();
              $input.click();
            });
          }
          $label.find(".w-icon-file-upload-icon").attr("aria-hidden", "true");
          $removeEl.find(".w-icon-file-upload-remove").attr("aria-hidden", "true");
          if (!inApp) {
            $removeEl.on("click keydown", function(e) {
              if (e.type === "keydown") {
                if (e.which !== 13 && e.which !== 32) {
                  return;
                }
                e.preventDefault();
              }
              $input.removeAttr("data-value");
              $input.val("");
              $fileNameEl.html("");
              $defaultWrap.toggle(true);
              $successWrap.toggle(false);
              $label.focus();
            });
            $input.on("change", function(e) {
              file = e.target && e.target.files && e.target.files[0];
              if (!file) {
                return;
              }
              $defaultWrap.toggle(false);
              $errorWrap.toggle(false);
              $uploadingWrap.toggle(true);
              $uploadingWrap.focus();
              $fileNameEl.text(file.name);
              if (!isUploading()) {
                disableBtn(form);
              }
              form.fileUploads[i].uploading = true;
              signFile(file, afterSign);
            });
            var height = $label.outerHeight();
            $input.height(height);
            $input.width(1);
          } else {
            $input.on("click", function(e) {
              e.preventDefault();
            });
            $label.on("click", function(e) {
              e.preventDefault();
            });
            $labelChildren.on("click", function(e) {
              e.preventDefault();
            });
          }
          function parseError(err) {
            var errorMsg = err.responseJSON && err.responseJSON.msg;
            var userError = genericErrMsg;
            if (typeof errorMsg === "string" && errorMsg.indexOf("InvalidFileTypeError") === 0) {
              userError = typeErrMsg;
            } else if (typeof errorMsg === "string" && errorMsg.indexOf("MaxFileSizeError") === 0) {
              userError = sizeErrMsg;
            }
            $errorMsgEl.text(userError);
            $input.removeAttr("data-value");
            $input.val("");
            $uploadingWrap.toggle(false);
            $defaultWrap.toggle(true);
            $errorWrap.toggle(true);
            $errorWrap.focus();
            form.fileUploads[i].uploading = false;
            if (!isUploading()) {
              reset(form);
            }
          }
          function afterSign(err, data) {
            if (err) {
              return parseError(err);
            }
            var fileName = data.fileName;
            var postData = data.postData;
            var fileId = data.fileId;
            var s3Url = data.s3Url;
            $input.attr("data-value", fileId);
            uploadS3(s3Url, postData, file, fileName, afterUpload);
          }
          function afterUpload(err) {
            if (err) {
              return parseError(err);
            }
            $uploadingWrap.toggle(false);
            $successWrap.css("display", "inline-block");
            $successWrap.focus();
            form.fileUploads[i].uploading = false;
            if (!isUploading()) {
              reset(form);
            }
          }
          function isUploading() {
            var uploads = form.fileUploads && form.fileUploads.toArray() || [];
            return uploads.some(function(value) {
              return value.uploading;
            });
          }
        }
        function signFile(file, cb) {
          var payload = new URLSearchParams({
            name: file.name,
            size: file.size
          });
          $2.ajax({
            type: "GET",
            url: `${signFileUrl}?${payload}`,
            crossDomain: true
          }).done(function(data) {
            cb(null, data);
          }).fail(function(err) {
            cb(err);
          });
        }
        function uploadS3(url, data, file, fileName, cb) {
          var formData = new FormData();
          for (var k in data) {
            formData.append(k, data[k]);
          }
          formData.append("file", file, fileName);
          $2.ajax({
            type: "POST",
            url,
            data: formData,
            processData: false,
            contentType: false
          }).done(function() {
            cb(null);
          }).fail(function(err) {
            cb(err);
          });
        }
        return api;
      });
    }
  });

  // packages/shared/render/plugins/Tabs/webflow-tabs.js
  var require_webflow_tabs = __commonJS({
    "packages/shared/render/plugins/Tabs/webflow-tabs.js"(exports, module) {
      "use strict";
      var Webflow2 = require_webflow_lib();
      var IXEvents = require_webflow_ix2_events();
      Webflow2.define("tabs", module.exports = function($2) {
        var api = {};
        var tram = $2.tram;
        var $doc = $2(document);
        var $tabs;
        var design;
        var env = Webflow2.env;
        var safari = env.safari;
        var inApp = env();
        var tabAttr = "data-w-tab";
        var paneAttr = "data-w-pane";
        var namespace = ".w-tabs";
        var linkCurrent = "w--current";
        var tabActive = "w--tab-active";
        var ix = IXEvents.triggers;
        var inRedraw = false;
        api.ready = api.design = api.preview = init2;
        api.redraw = function() {
          inRedraw = true;
          init2();
          inRedraw = false;
        };
        api.destroy = function() {
          $tabs = $doc.find(namespace);
          if (!$tabs.length) {
            return;
          }
          $tabs.each(resetIX);
          removeListeners();
        };
        function init2() {
          design = inApp && Webflow2.env("design");
          $tabs = $doc.find(namespace);
          if (!$tabs.length) {
            return;
          }
          $tabs.each(build);
          if (Webflow2.env("preview") && !inRedraw) {
            $tabs.each(resetIX);
          }
          removeListeners();
          addListeners();
        }
        function removeListeners() {
          Webflow2.redraw.off(api.redraw);
        }
        function addListeners() {
          Webflow2.redraw.on(api.redraw);
        }
        function resetIX(i, el) {
          var data = $2.data(el, namespace);
          if (!data) {
            return;
          }
          data.links && data.links.each(ix.reset);
          data.panes && data.panes.each(ix.reset);
        }
        function build(i, el) {
          var widgetHash = namespace.substr(1) + "-" + i;
          var $el = $2(el);
          var data = $2.data(el, namespace);
          if (!data) {
            data = $2.data(el, namespace, {
              el: $el,
              config: {}
            });
          }
          data.current = null;
          data.tabIdentifier = widgetHash + "-" + tabAttr;
          data.paneIdentifier = widgetHash + "-" + paneAttr;
          data.menu = $el.children(".w-tab-menu");
          data.links = data.menu.children(".w-tab-link");
          data.content = $el.children(".w-tab-content");
          data.panes = data.content.children(".w-tab-pane");
          data.el.off(namespace);
          data.links.off(namespace);
          data.menu.attr("role", "tablist");
          data.links.attr("tabindex", "-1");
          configure(data);
          if (!design) {
            data.links.on("click" + namespace, linkSelect(data));
            data.links.on("keydown" + namespace, handleLinkKeydown(data));
            var $link = data.links.filter("." + linkCurrent);
            var tab = $link.attr(tabAttr);
            tab && changeTab(data, {
              tab,
              immediate: true
            });
          }
        }
        function configure(data) {
          var config = {};
          config.easing = data.el.attr("data-easing") || "ease";
          var intro = parseInt(data.el.attr("data-duration-in"), 10);
          intro = config.intro = intro === intro ? intro : 0;
          var outro = parseInt(data.el.attr("data-duration-out"), 10);
          outro = config.outro = outro === outro ? outro : 0;
          config.immediate = !intro && !outro;
          data.config = config;
        }
        function getActiveTabIdx(data) {
          var tab = data.current;
          return Array.prototype.findIndex.call(data.links, (t) => {
            return t.getAttribute(tabAttr) === tab;
          }, null);
        }
        function linkSelect(data) {
          return function(evt) {
            evt.preventDefault();
            var tab = evt.currentTarget.getAttribute(tabAttr);
            tab && changeTab(data, {
              tab
            });
          };
        }
        function handleLinkKeydown(data) {
          return function(evt) {
            var currentIdx = getActiveTabIdx(data);
            var keyName = evt.key;
            var keyMap = {
              ArrowLeft: currentIdx - 1,
              ArrowUp: currentIdx - 1,
              ArrowRight: currentIdx + 1,
              ArrowDown: currentIdx + 1,
              End: data.links.length - 1,
              Home: 0
            };
            if (!(keyName in keyMap))
              return;
            evt.preventDefault();
            var nextIdx = keyMap[keyName];
            if (nextIdx === -1) {
              nextIdx = data.links.length - 1;
            }
            if (nextIdx === data.links.length) {
              nextIdx = 0;
            }
            var tabEl = data.links[nextIdx];
            var tab = tabEl.getAttribute(tabAttr);
            tab && changeTab(data, {
              tab
            });
          };
        }
        function changeTab(data, options) {
          options = options || {};
          var config = data.config;
          var easing = config.easing;
          var tab = options.tab;
          if (tab === data.current) {
            return;
          }
          data.current = tab;
          var currentTab;
          data.links.each(function(i, el) {
            var $el = $2(el);
            if (options.immediate || config.immediate) {
              var pane = data.panes[i];
              if (!el.id) {
                el.id = data.tabIdentifier + "-" + i;
              }
              if (!pane.id) {
                pane.id = data.paneIdentifier + "-" + i;
              }
              el.href = "#" + pane.id;
              el.setAttribute("role", "tab");
              el.setAttribute("aria-controls", pane.id);
              el.setAttribute("aria-selected", "false");
              pane.setAttribute("role", "tabpanel");
              pane.setAttribute("aria-labelledby", el.id);
            }
            if (el.getAttribute(tabAttr) === tab) {
              currentTab = el;
              $el.addClass(linkCurrent).removeAttr("tabindex").attr({
                "aria-selected": "true"
              }).each(ix.intro);
            } else if ($el.hasClass(linkCurrent)) {
              $el.removeClass(linkCurrent).attr({
                tabindex: "-1",
                "aria-selected": "false"
              }).each(ix.outro);
            }
          });
          var targets = [];
          var previous = [];
          data.panes.each(function(i, el) {
            var $el = $2(el);
            if (el.getAttribute(tabAttr) === tab) {
              targets.push(el);
            } else if ($el.hasClass(tabActive)) {
              previous.push(el);
            }
          });
          var $targets = $2(targets);
          var $previous = $2(previous);
          if (options.immediate || config.immediate) {
            $targets.addClass(tabActive).each(ix.intro);
            $previous.removeClass(tabActive);
            if (!inRedraw) {
              Webflow2.redraw.up();
            }
            return;
          } else {
            var x = window.scrollX;
            var y = window.scrollY;
            currentTab.focus();
            window.scrollTo(x, y);
          }
          if ($previous.length && config.outro) {
            $previous.each(ix.outro);
            tram($previous).add("opacity " + config.outro + "ms " + easing, {
              fallback: safari
            }).start({
              opacity: 0
            }).then(() => fadeIn(config, $previous, $targets));
          } else {
            fadeIn(config, $previous, $targets);
          }
        }
        function fadeIn(config, $previous, $targets) {
          $previous.removeClass(tabActive).css({
            opacity: "",
            transition: "",
            transform: "",
            width: "",
            height: ""
          });
          $targets.addClass(tabActive).each(ix.intro);
          Webflow2.redraw.up();
          if (!config.intro) {
            return tram($targets).set({
              opacity: 1
            });
          }
          tram($targets).set({
            opacity: 0
          }).redraw().add("opacity " + config.intro + "ms " + config.easing, {
            fallback: safari
          }).start({
            opacity: 1
          });
        }
        return api;
      });
    }
  });

  // <stdin>
  require_webflow_rive();
  require_objectFitPolyfill_basic();
  require_webflow_bgvideo();
  require_webflow_brand();
  require_webflow_edit();
  require_webflow_focus_visible();
  require_webflow_focus();
  require_webflow_ix2_events();
  require_webflow_ix2();
  require_webflow_links();
  require_webflow_scroll();
  require_webflow_touch();
  require_webflow_dropdown();
  require_webflow_forms();
  require_webflow_tabs();
})();
/*!
* tram.js v0.8.2-global
* Cross-browser CSS3 transitions in JavaScript
* https://github.com/bkwld/tram
* MIT License
*/
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init(
{"events":{"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["tiny"],"target":{"id":"66e91bdd12136933608fa388|7bc28648-8500-1cd0-7ccb-8282ac430620","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66e91bdd12136933608fa388|7bc28648-8500-1cd0-7ccb-8282ac430620","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727166695895},"e-4":{"id":"e-4","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["tiny"],"target":{"id":"66e91bdd12136933608fa388|7bc28648-8500-1cd0-7ccb-8282ac430620","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66e91bdd12136933608fa388|7bc28648-8500-1cd0-7ccb-8282ac430620","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727166695944},"e-5":{"id":"e-5","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6"}},"mediaQueries":["tiny"],"target":{"id":"082eaa1f-5c12-6f1a-bad3-4577bcf79162","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"082eaa1f-5c12-6f1a-bad3-4577bcf79162","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727168721272},"e-6":{"id":"e-6","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-5"}},"mediaQueries":["tiny"],"target":{"id":"082eaa1f-5c12-6f1a-bad3-4577bcf79162","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"082eaa1f-5c12-6f1a-bad3-4577bcf79162","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727168721272},"e-7":{"id":"e-7","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8"}},"mediaQueries":["main"],"target":{"id":"13e639b5-5dad-0771-5137-e10a20dfd0a9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"13e639b5-5dad-0771-5137-e10a20dfd0a9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727174118803},"e-8":{"id":"e-8","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7"}},"mediaQueries":["main"],"target":{"id":"13e639b5-5dad-0771-5137-e10a20dfd0a9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"13e639b5-5dad-0771-5137-e10a20dfd0a9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727174118804},"e-11":{"id":"e-11","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-11","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".section-about-2","originalId":"66ea8762253ba31695e402fe|d491f6da-1bc6-443b-9af5-97f95b03d89c","appliesTo":"CLASS"},"targets":[{"selector":".section-about-2","originalId":"66ea8762253ba31695e402fe|d491f6da-1bc6-443b-9af5-97f95b03d89c","appliesTo":"CLASS"}],"config":[{"continuousParameterGroupId":"a-11-p","smoothing":70,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1727340121478},"e-13":{"id":"e-13","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-12","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66ea8762253ba31695e402fe","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66ea8762253ba31695e402fe","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-12-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1727678603766},"e-14":{"id":"e-14","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-12","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66ea9e0691b69e29c82af612","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66ea9e0691b69e29c82af612","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-12-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1727678843701},"e-15":{"id":"e-15","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-12","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66ed2e5feb1f70f5a658d90a","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66ed2e5feb1f70f5a658d90a","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-12-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1727679047827},"e-17":{"id":"e-17","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-12","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66f1071fb47c9be6203b50b0","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66f1071fb47c9be6203b50b0","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-12-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1727679208030},"e-18":{"id":"e-18","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-12","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66f4e50ec905e0766222c934","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66f4e50ec905e0766222c934","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-12-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1727679292534},"e-19":{"id":"e-19","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-12","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66f399f8b45215e35373149d","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66f399f8b45215e35373149d","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-12-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1727679329385},"e-20":{"id":"e-20","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-21"}},"mediaQueries":["main","medium","small"],"target":{"id":"66e91bdd12136933608fa388","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66e91bdd12136933608fa388","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1727764130205},"e-21":{"id":"e-21","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-20"}},"mediaQueries":["main","medium","small"],"target":{"id":"66e91bdd12136933608fa388","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66e91bdd12136933608fa388","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1727764130205},"e-22":{"id":"e-22","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-12","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66e91bdd12136933608fa388","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66e91bdd12136933608fa388","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-12-p","smoothing":2,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1727765624610},"e-23":{"id":"e-23","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-12","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66ed129ab284234066ab1368","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66ed129ab284234066ab1368","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-12-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1727766255805},"e-24":{"id":"e-24","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-12","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66f0f4507275a53501edb0d5","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66f0f4507275a53501edb0d5","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-12-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1727766305590},"e-25":{"id":"e-25","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-12","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66f52ce2ff3c3afeb8c8dc69","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66f52ce2ff3c3afeb8c8dc69","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-12-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1727767057079},"e-26":{"id":"e-26","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-27"}},"mediaQueries":["main","medium","small"],"target":{"id":"66f52ce2ff3c3afeb8c8dc69","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66f52ce2ff3c3afeb8c8dc69","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1727767077381},"e-27":{"id":"e-27","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-26"}},"mediaQueries":["main","medium","small"],"target":{"id":"66f52ce2ff3c3afeb8c8dc69","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66f52ce2ff3c3afeb8c8dc69","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1727767077382},"e-28":{"id":"e-28","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-29"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66f4e50ec905e0766222c934","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66f4e50ec905e0766222c934","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1727767098211},"e-29":{"id":"e-29","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-28"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66f4e50ec905e0766222c934","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66f4e50ec905e0766222c934","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1727767098257},"e-30":{"id":"e-30","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-31"}},"mediaQueries":["main","medium","small"],"target":{"id":"66f399f8b45215e35373149d","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66f399f8b45215e35373149d","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1727767269698},"e-31":{"id":"e-31","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-30"}},"mediaQueries":["main","medium","small"],"target":{"id":"66f399f8b45215e35373149d","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66f399f8b45215e35373149d","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1727767269699},"e-32":{"id":"e-32","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-33"}},"mediaQueries":["main","medium","small"],"target":{"id":"66ea8762253ba31695e402fe","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66ea8762253ba31695e402fe","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1727767317124},"e-33":{"id":"e-33","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32"}},"mediaQueries":["main","medium","small"],"target":{"id":"66ea8762253ba31695e402fe","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66ea8762253ba31695e402fe","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1727767317125},"e-34":{"id":"e-34","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-35"}},"mediaQueries":["main","medium","small"],"target":{"id":"66ea9e0691b69e29c82af612","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66ea9e0691b69e29c82af612","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1727767401358},"e-35":{"id":"e-35","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-34"}},"mediaQueries":["main","medium","small"],"target":{"id":"66ea9e0691b69e29c82af612","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66ea9e0691b69e29c82af612","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1727767401359},"e-36":{"id":"e-36","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-37"}},"mediaQueries":["main","medium","small"],"target":{"id":"66ed129ab284234066ab1368","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66ed129ab284234066ab1368","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1727767526568},"e-37":{"id":"e-37","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-36"}},"mediaQueries":["main","medium","small"],"target":{"id":"66ed129ab284234066ab1368","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66ed129ab284234066ab1368","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1727767526568},"e-38":{"id":"e-38","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-39"}},"mediaQueries":["main","medium","small"],"target":{"id":"66ed2e5feb1f70f5a658d90a","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66ed2e5feb1f70f5a658d90a","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1727767564485},"e-39":{"id":"e-39","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-38"}},"mediaQueries":["main","medium","small"],"target":{"id":"66ed2e5feb1f70f5a658d90a","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66ed2e5feb1f70f5a658d90a","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1727767564527},"e-40":{"id":"e-40","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-41"}},"mediaQueries":["main","medium","small"],"target":{"id":"66f0f4507275a53501edb0d5","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66f0f4507275a53501edb0d5","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1727767607666},"e-41":{"id":"e-41","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-40"}},"mediaQueries":["main","medium","small"],"target":{"id":"66f0f4507275a53501edb0d5","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66f0f4507275a53501edb0d5","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1727767607667},"e-42":{"id":"e-42","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-43"}},"mediaQueries":["main","medium","small"],"target":{"id":"66f1071fb47c9be6203b50b0","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66f1071fb47c9be6203b50b0","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1727767653413},"e-43":{"id":"e-43","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-42"}},"mediaQueries":["main","medium","small"],"target":{"id":"66f1071fb47c9be6203b50b0","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66f1071fb47c9be6203b50b0","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1727767653413},"e-46":{"id":"e-46","name":"","animationType":"preset","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-12","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66fcd8bc70f4685b18a14125","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66fcd8bc70f4685b18a14125","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-12-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1727846590245},"e-47":{"id":"e-47","name":"","animationType":"preset","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-48"}},"mediaQueries":["main","medium","small"],"target":{"id":"66fcd8bc70f4685b18a14125","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66fcd8bc70f4685b18a14125","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1727846590245},"e-48":{"id":"e-48","name":"","animationType":"preset","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-47"}},"mediaQueries":["main","medium","small"],"target":{"id":"66fcd8bc70f4685b18a14125","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66fcd8bc70f4685b18a14125","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1727846590245},"e-49":{"id":"e-49","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-50"}},"mediaQueries":["tiny"],"target":{"id":"66fcd8bc70f4685b18a14125|95c68e41-62b4-b109-db59-c7312d652756","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66fcd8bc70f4685b18a14125|95c68e41-62b4-b109-db59-c7312d652756","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727850827948},"e-50":{"id":"e-50","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-49"}},"mediaQueries":["tiny"],"target":{"id":"66fcd8bc70f4685b18a14125|95c68e41-62b4-b109-db59-c7312d652756","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66fcd8bc70f4685b18a14125|95c68e41-62b4-b109-db59-c7312d652756","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727850827948},"e-51":{"id":"e-51","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-52"}},"mediaQueries":["tiny"],"target":{"id":"66f0f4507275a53501edb0d5|09d90bfb-2587-86a7-c6cc-aceb6d986f15","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66f0f4507275a53501edb0d5|09d90bfb-2587-86a7-c6cc-aceb6d986f15","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727850859545},"e-52":{"id":"e-52","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-51"}},"mediaQueries":["tiny"],"target":{"id":"66f0f4507275a53501edb0d5|09d90bfb-2587-86a7-c6cc-aceb6d986f15","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66f0f4507275a53501edb0d5|09d90bfb-2587-86a7-c6cc-aceb6d986f15","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727850859545},"e-53":{"id":"e-53","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-16","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66e91bdd12136933608fa388|e8cbc71e-de83-b1ac-06e6-4ae2822fb360","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66e91bdd12136933608fa388|e8cbc71e-de83-b1ac-06e6-4ae2822fb360","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-16-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1727859674385},"e-54":{"id":"e-54","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-17","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"66ea8762253ba31695e402fe","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66ea8762253ba31695e402fe","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-17-p","smoothing":36,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1728281421340},"e-55":{"id":"e-55","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-56"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fbcbe2d9-303a-2fa9-8fa6-b2661badbc86","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fbcbe2d9-303a-2fa9-8fa6-b2661badbc86","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":-30,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1728287495511},"e-56":{"id":"e-56","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-55"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fbcbe2d9-303a-2fa9-8fa6-b2661badbc86","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fbcbe2d9-303a-2fa9-8fa6-b2661badbc86","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1728287495558},"e-57":{"id":"e-57","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-20","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small"],"target":{"id":"66ea9e0691b69e29c82af612","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66ea9e0691b69e29c82af612","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-20-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1728287568549},"e-58":{"id":"e-58","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-59"}},"mediaQueries":["tiny"],"target":{"id":"66e91bdd12136933608fa388","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66e91bdd12136933608fa388","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1729229884979},"e-59":{"id":"e-59","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-58"}},"mediaQueries":["tiny"],"target":{"id":"66e91bdd12136933608fa388","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66e91bdd12136933608fa388","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1729229884979},"e-60":{"id":"e-60","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-61"}},"mediaQueries":["tiny"],"target":{"id":"66ea8762253ba31695e402fe","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66ea8762253ba31695e402fe","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1729230400602},"e-61":{"id":"e-61","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-60"}},"mediaQueries":["tiny"],"target":{"id":"66ea8762253ba31695e402fe","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66ea8762253ba31695e402fe","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1729230400603},"e-62":{"id":"e-62","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-63"}},"mediaQueries":["tiny"],"target":{"id":"66ea9e0691b69e29c82af612","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66ea9e0691b69e29c82af612","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1729231509790},"e-63":{"id":"e-63","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-62"}},"mediaQueries":["tiny"],"target":{"id":"66ea9e0691b69e29c82af612","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66ea9e0691b69e29c82af612","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1729231509791},"e-64":{"id":"e-64","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-65"}},"mediaQueries":["tiny"],"target":{"id":"66ed129ab284234066ab1368","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66ed129ab284234066ab1368","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1729231709796},"e-65":{"id":"e-65","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-64"}},"mediaQueries":["tiny"],"target":{"id":"66ed129ab284234066ab1368","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66ed129ab284234066ab1368","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1729231709797},"e-66":{"id":"e-66","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-67"}},"mediaQueries":["tiny"],"target":{"id":"66ed2e5feb1f70f5a658d90a","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66ed2e5feb1f70f5a658d90a","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1729232027682},"e-67":{"id":"e-67","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-66"}},"mediaQueries":["tiny"],"target":{"id":"66ed2e5feb1f70f5a658d90a","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66ed2e5feb1f70f5a658d90a","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1729232027682},"e-68":{"id":"e-68","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-69"}},"mediaQueries":["tiny"],"target":{"id":"66f0f4507275a53501edb0d5","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66f0f4507275a53501edb0d5","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1729232102696},"e-69":{"id":"e-69","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-68"}},"mediaQueries":["tiny"],"target":{"id":"66f0f4507275a53501edb0d5","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66f0f4507275a53501edb0d5","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1729232102697},"e-70":{"id":"e-70","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-71"}},"mediaQueries":["tiny"],"target":{"id":"66f1071fb47c9be6203b50b0","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66f1071fb47c9be6203b50b0","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1729232201642},"e-71":{"id":"e-71","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-70"}},"mediaQueries":["tiny"],"target":{"id":"66f1071fb47c9be6203b50b0","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66f1071fb47c9be6203b50b0","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1729232201643},"e-72":{"id":"e-72","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-73"}},"mediaQueries":["tiny"],"target":{"id":"66f52ce2ff3c3afeb8c8dc69","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66f52ce2ff3c3afeb8c8dc69","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1729232266114},"e-73":{"id":"e-73","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-72"}},"mediaQueries":["tiny"],"target":{"id":"66f52ce2ff3c3afeb8c8dc69","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66f52ce2ff3c3afeb8c8dc69","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1729232266115},"e-74":{"id":"e-74","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-75"}},"mediaQueries":["tiny"],"target":{"id":"66f4e50ec905e0766222c934","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66f4e50ec905e0766222c934","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1729232317513},"e-75":{"id":"e-75","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-74"}},"mediaQueries":["tiny"],"target":{"id":"66f4e50ec905e0766222c934","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66f4e50ec905e0766222c934","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1729232317514},"e-76":{"id":"e-76","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_UP","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-77"}},"mediaQueries":["tiny"],"target":{"id":"66f399f8b45215e35373149d","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66f399f8b45215e35373149d","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1729232363540},"e-77":{"id":"e-77","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL_DOWN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-76"}},"mediaQueries":["tiny"],"target":{"id":"66f399f8b45215e35373149d","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"66f399f8b45215e35373149d","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1729232363541}},"actionLists":{"a-5":{"id":"a-5","title":"nav-menu-open","actionItemGroups":[{"actionItems":[{"id":"a-5-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".flex-horizontal.is--home-nav","selectorGuids":["026bc71d-36eb-d7fd-41ab-034e14fff8de","565a29e9-f3f9-5230-3bb3-f6111408fdaf"]},"xValue":100,"yValue":null,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-5-n-13","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".flex-horizontal.is--home-nav","selectorGuids":["026bc71d-36eb-d7fd-41ab-034e14fff8de","565a29e9-f3f9-5230-3bb3-f6111408fdaf"]},"value":"none"}},{"id":"a-5-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".mob-nav-cta","selectorGuids":["9d9891df-ec24-fd2b-b615-4987a20f4cf4"]},"value":0,"unit":""}},{"id":"a-5-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".text-size-regular.is--nav._1","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27122","ed4c01c4-fbfd-f068-4c86-e759ea4f2314","681d2ea1-66ef-6425-0b83-d0a2dac8f4fc"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-5-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".text-size-regular.is--nav._2","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27122","ed4c01c4-fbfd-f068-4c86-e759ea4f2314","8bfa3d7d-167d-aac4-f4a7-c40aa6643d27"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-5-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".text-size-regular.is--nav._3","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27122","ed4c01c4-fbfd-f068-4c86-e759ea4f2314","c2b452ae-f6d3-a307-1ea4-9f12cabb21c9"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-5-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".text-size-regular.is--nav._4","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27122","ed4c01c4-fbfd-f068-4c86-e759ea4f2314","b0af4d46-7bf1-7c50-573e-86f82247a78a"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-5-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":[0.7,0,0.2,1],"duration":1000,"target":{"selector":".flex-horizontal.is--home-nav","selectorGuids":["026bc71d-36eb-d7fd-41ab-034e14fff8de","565a29e9-f3f9-5230-3bb3-f6111408fdaf"]},"xValue":0,"yValue":null,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-5-n-14","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".flex-horizontal.is--home-nav","selectorGuids":["026bc71d-36eb-d7fd-41ab-034e14fff8de","565a29e9-f3f9-5230-3bb3-f6111408fdaf"]},"value":"flex"}},{"id":"a-5-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":500,"easing":"outQuart","duration":700,"target":{"selector":".text-size-regular.is--nav._1","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27122","ed4c01c4-fbfd-f068-4c86-e759ea4f2314","681d2ea1-66ef-6425-0b83-d0a2dac8f4fc"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-5-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":600,"easing":"outQuart","duration":700,"target":{"selector":".text-size-regular.is--nav._2","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27122","ed4c01c4-fbfd-f068-4c86-e759ea4f2314","8bfa3d7d-167d-aac4-f4a7-c40aa6643d27"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-5-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":700,"easing":"outQuart","duration":700,"target":{"selector":".text-size-regular.is--nav._3","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27122","ed4c01c4-fbfd-f068-4c86-e759ea4f2314","c2b452ae-f6d3-a307-1ea4-9f12cabb21c9"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-5-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":800,"easing":"outQuart","duration":700,"target":{"selector":".text-size-regular.is--nav._4","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27122","ed4c01c4-fbfd-f068-4c86-e759ea4f2314","b0af4d46-7bf1-7c50-573e-86f82247a78a"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-5-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":900,"easing":"ease","duration":300,"target":{"selector":".mob-nav-cta","selectorGuids":["9d9891df-ec24-fd2b-b615-4987a20f4cf4"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1727166703109},"a-6":{"id":"a-6","title":"nav-menu-closed","actionItemGroups":[{"actionItems":[{"id":"a-6-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":300,"target":{"selector":".text-size-regular.is--nav._1","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27122","ed4c01c4-fbfd-f068-4c86-e759ea4f2314","681d2ea1-66ef-6425-0b83-d0a2dac8f4fc"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-6-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":300,"target":{"selector":".text-size-regular.is--nav._2","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27122","ed4c01c4-fbfd-f068-4c86-e759ea4f2314","8bfa3d7d-167d-aac4-f4a7-c40aa6643d27"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-6-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":300,"target":{"selector":".text-size-regular.is--nav._3","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27122","ed4c01c4-fbfd-f068-4c86-e759ea4f2314","c2b452ae-f6d3-a307-1ea4-9f12cabb21c9"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-6-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":300,"target":{"selector":".text-size-regular.is--nav._4","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27122","ed4c01c4-fbfd-f068-4c86-e759ea4f2314","b0af4d46-7bf1-7c50-573e-86f82247a78a"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-6-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".mob-nav-cta","selectorGuids":["9d9891df-ec24-fd2b-b615-4987a20f4cf4"]},"value":0,"unit":""}},{"id":"a-6-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":[0.7,0,0.2,1],"duration":500,"target":{"selector":".flex-horizontal.is--home-nav","selectorGuids":["026bc71d-36eb-d7fd-41ab-034e14fff8de","565a29e9-f3f9-5230-3bb3-f6111408fdaf"]},"xValue":100,"yValue":null,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-6-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":1000,"easing":"","duration":0,"target":{"selector":".flex-horizontal.is--home-nav","selectorGuids":["026bc71d-36eb-d7fd-41ab-034e14fff8de","565a29e9-f3f9-5230-3bb3-f6111408fdaf"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1727166703109},"a-7":{"id":"a-7","title":"smiley-button-hover","actionItemGroups":[{"actionItems":[{"id":"a-7-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".smile","selectorGuids":["e5149f28-e34d-bc37-7faf-823f6f1f646e"]},"value":"none"}}]},{"actionItems":[{"id":"a-7-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".smile","selectorGuids":["e5149f28-e34d-bc37-7faf-823f6f1f646e"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1727174128737},"a-8":{"id":"a-8","title":"smiley-button-hover-out","actionItemGroups":[{"actionItems":[{"id":"a-8-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".smile","selectorGuids":["e5149f28-e34d-bc37-7faf-823f6f1f646e"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1727174128737},"a-11":{"id":"a-11","title":"card-scale","continuousParameterGroups":[{"id":"a-11-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-11-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".about-2-card","selectorGuids":["513f6709-203a-86df-7089-19d6939e7111"]},"xValue":1.5,"yValue":1.5,"locked":true}}]},{"keyframe":50,"actionItems":[{"id":"a-11-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".about-2-card","selectorGuids":["513f6709-203a-86df-7089-19d6939e7111"]},"xValue":1,"yValue":1,"locked":true}}]}]}],"createdOn":1727340157692},"a-12":{"id":"a-12","title":"circle-rotation","continuousParameterGroups":[{"id":"a-12-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":2,"actionItems":[{"id":"a-12-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".smile-wrapper","selectorGuids":["d4444b65-cd7d-6452-6b67-cfff93b81702"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"keyframe":100,"actionItems":[{"id":"a-12-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".smile-wrapper","selectorGuids":["d4444b65-cd7d-6452-6b67-cfff93b81702"]},"zValue":1077,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}]}],"createdOn":1727678302899},"a-13":{"id":"a-13","title":"nav-stick-in","actionItemGroups":[{"actionItems":[{"id":"a-13-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".nav-stick","selectorGuids":["a583cae4-00c7-0553-e678-8353b92f267f"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1727764135038},"a-14":{"id":"a-14","title":"nav-stick-in out","actionItemGroups":[{"actionItems":[{"id":"a-14-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".nav-stick","selectorGuids":["a583cae4-00c7-0553-e678-8353b92f267f"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1727764135038},"a-3":{"id":"a-3","title":"playbook-filter-open","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".mob-toc-content","selectorGuids":["7cf42c0d-5347-dfea-24f3-929aeac9c6ba"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-3-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".mob-toc-content","selectorGuids":["7cf42c0d-5347-dfea-24f3-929aeac9c6ba"]},"widthValue":100,"widthUnit":"%","heightUnit":"AUTO","locked":false}},{"id":"a-3-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"id":"66f0f4507275a53501edb0d5|f0f1c090-e820-8a5d-5fbb-0d1f2fafff95"},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1628306749914},"a-4":{"id":"a-4","title":"playbook-filter-close","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".mob-toc-content","selectorGuids":["7cf42c0d-5347-dfea-24f3-929aeac9c6ba"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-4-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"id":"66f0f4507275a53501edb0d5|f0f1c090-e820-8a5d-5fbb-0d1f2fafff95"},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1628306749914},"a-16":{"id":"a-16","title":"button appear","continuousParameterGroups":[{"id":"a-16-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-16-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".justify-center.is-home-4","selectorGuids":["bdf49420-3431-62cb-6e32-168be90f0ecf","66da90a8-a24f-5fbb-9f96-456d2582c196"]},"value":1,"unit":""}}]},{"keyframe":5,"actionItems":[{"id":"a-16-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".justify-center.is-home-4","selectorGuids":["bdf49420-3431-62cb-6e32-168be90f0ecf","66da90a8-a24f-5fbb-9f96-456d2582c196"]},"value":1,"unit":""}}]},{"keyframe":6,"actionItems":[{"id":"a-16-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".justify-center.is-home-4","selectorGuids":["bdf49420-3431-62cb-6e32-168be90f0ecf","66da90a8-a24f-5fbb-9f96-456d2582c196"]},"value":0,"unit":""}}]},{"keyframe":85,"actionItems":[{"id":"a-16-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".justify-center.is-home-4","selectorGuids":["bdf49420-3431-62cb-6e32-168be90f0ecf","66da90a8-a24f-5fbb-9f96-456d2582c196"]},"value":0,"unit":""}}]},{"keyframe":86,"actionItems":[{"id":"a-16-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".justify-center.is-home-4","selectorGuids":["bdf49420-3431-62cb-6e32-168be90f0ecf","66da90a8-a24f-5fbb-9f96-456d2582c196"]},"value":1,"unit":""}}]}]}],"createdOn":1727859679676},"a-17":{"id":"a-17","title":"cta-move","continuousParameterGroups":[{"id":"a-17-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-17-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".smile-wrapper","selectorGuids":["d4444b65-cd7d-6452-6b67-cfff93b81702"]},"yValue":-450,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"keyframe":1,"actionItems":[{"id":"a-17-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".smile-wrapper","selectorGuids":["d4444b65-cd7d-6452-6b67-cfff93b81702"]},"yValue":-450,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"keyframe":5,"actionItems":[{"id":"a-17-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".smile-wrapper","selectorGuids":["d4444b65-cd7d-6452-6b67-cfff93b81702"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}]}],"createdOn":1728281427521},"a-19":{"id":"a-19","title":"cta-out","actionItemGroups":[{"actionItems":[{"id":"a-19-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".smile-wrapper","selectorGuids":["d4444b65-cd7d-6452-6b67-cfff93b81702"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1728287441592},"a-18":{"id":"a-18","title":"cta-in","actionItemGroups":[{"actionItems":[{"id":"a-18-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".smile-wrapper","selectorGuids":["d4444b65-cd7d-6452-6b67-cfff93b81702"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1728287441592},"a-20":{"id":"a-20","title":"cta-move-partner","continuousParameterGroups":[{"id":"a-20-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-20-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".smile-wrapper","selectorGuids":["d4444b65-cd7d-6452-6b67-cfff93b81702"]},"yValue":-175,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"keyframe":1,"actionItems":[{"id":"a-20-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".smile-wrapper","selectorGuids":["d4444b65-cd7d-6452-6b67-cfff93b81702"]},"yValue":-175,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"keyframe":5,"actionItems":[{"id":"a-20-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".smile-wrapper","selectorGuids":["d4444b65-cd7d-6452-6b67-cfff93b81702"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}]}],"createdOn":1728281427521},"a-21":{"id":"a-21","title":"mobile-nav-appear","actionItemGroups":[{"actionItems":[{"id":"a-21-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".nav","selectorGuids":["ca21134f-c45d-b1d4-2987-5cf375d7acd9"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1729229889578},"a-22":{"id":"a-22","title":"mobile-nav-disappear","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".nav","selectorGuids":["ca21134f-c45d-b1d4-2987-5cf375d7acd9"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1729229889578}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}
);
