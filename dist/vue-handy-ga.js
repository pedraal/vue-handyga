!(function (t, e) { typeof exports === 'object' && typeof module === 'object' ? module.exports = e() : typeof define === 'function' && define.amd ? define([], e) : typeof exports === 'object' ? exports.VueHandyGa = e() : t.VueHandyGa = e() }(typeof self !== 'undefined' ? self : this, function () {
  return (function (t) { var e = {}; function n (r) { if (e[r]) return e[r].exports; var o = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports } return n.m = t, n.c = e, n.d = function (t, e, r) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, n.r = function (t) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 }) }, n.t = function (t, e) { if (1 & e && (t = n(t)), 8 & e) return t; if (4 & e && typeof t === 'object' && t && t.__esModule) return t; var r = Object.create(null); if (n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: t }), 2 & e && typeof t !== 'string') for (var o in t)n.d(r, o, function (e) { return t[e] }.bind(null, o)); return r }, n.n = function (t) { var e = t && t.__esModule ? function () { return t.default } : function () { return t }; return n.d(e, 'a', e), e }, n.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, n.p = '', n(n.s = 9) }([function (t, e) { t.exports = function (t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t } }, function (t, e, n) {
    var r, o
    /*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!(function (i) { if (void 0 === (o = typeof (r = i) === 'function' ? r.call(e, n, e, t) : r) || (t.exports = o), !0, t.exports = i(), !!0) { var a = window.Cookies; var s = window.Cookies = i(); s.noConflict = function () { return window.Cookies = a, s } } }(function () { function t () { for (var t = 0, e = {}; t < arguments.length; t++) { var n = arguments[t]; for (var r in n)e[r] = n[r] } return e } function e (t) { return t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent) } return (function n (r) { function o () {} function i (e, n, i) { if (typeof document !== 'undefined') { typeof (i = t({ path: '/' }, o.defaults, i)).expires === 'number' && (i.expires = new Date(1 * new Date() + 864e5 * i.expires)), i.expires = i.expires ? i.expires.toUTCString() : ''; try { var a = JSON.stringify(n); /^[\{\[]/.test(a) && (n = a) } catch (t) {}n = r.write ? r.write(n, e) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape); var s = ''; for (var c in i)i[c] && (s += '; ' + c, !0 !== i[c] && (s += '=' + i[c].split(';')[0])); return document.cookie = e + '=' + n + s } } function a (t, n) { if (typeof document !== 'undefined') { for (var o = {}, i = document.cookie ? document.cookie.split('; ') : [], a = 0; a < i.length; a++) { var s = i[a].split('='); var c = s.slice(1).join('='); n || c.charAt(0) !== '"' || (c = c.slice(1, -1)); try { var u = e(s[0]); if (c = (r.read || r)(c, u) || e(c), n) try { c = JSON.parse(c) } catch (t) {} if (o[u] = c, t === u) break } catch (t) {} } return t ? o[t] : o } } return o.set = i, o.get = function (t) { return a(t, !1) }, o.getJSON = function (t) { return a(t, !0) }, o.remove = function (e, n) { i(e, '', t(n, { expires: -1 })) }, o.defaults = {}, o.withConverter = n, o }(function () {})) }))
  }, function (t, e, n) {
    'use strict'; (function (t) {
      n.d(e, 'b', function () { return y }), n.d(e, 'a', function () { return b }); var r = (typeof window !== 'undefined' ? window : void 0 !== t ? t : {}).__VUE_DEVTOOLS_GLOBAL_HOOK__; function o (t, e) { Object.keys(t).forEach(function (n) { return e(t[n], n) }) } var i = function (t, e) { this.runtime = e, this._children = Object.create(null), this._rawModule = t; var n = t.state; this.state = (typeof n === 'function' ? n() : n) || {} }; var a = { namespaced: { configurable: !0 } }; a.namespaced.get = function () { return !!this._rawModule.namespaced }, i.prototype.addChild = function (t, e) { this._children[t] = e }, i.prototype.removeChild = function (t) { delete this._children[t] }, i.prototype.getChild = function (t) { return this._children[t] }, i.prototype.update = function (t) { this._rawModule.namespaced = t.namespaced, t.actions && (this._rawModule.actions = t.actions), t.mutations && (this._rawModule.mutations = t.mutations), t.getters && (this._rawModule.getters = t.getters) }, i.prototype.forEachChild = function (t) { o(this._children, t) }, i.prototype.forEachGetter = function (t) { this._rawModule.getters && o(this._rawModule.getters, t) }, i.prototype.forEachAction = function (t) { this._rawModule.actions && o(this._rawModule.actions, t) }, i.prototype.forEachMutation = function (t) { this._rawModule.mutations && o(this._rawModule.mutations, t) }, Object.defineProperties(i.prototype, a); var s = function (t) { this.register([], t, !1) }; s.prototype.get = function (t) { return t.reduce(function (t, e) { return t.getChild(e) }, this.root) }, s.prototype.getNamespace = function (t) { var e = this.root; return t.reduce(function (t, n) { return t + ((e = e.getChild(n)).namespaced ? n + '/' : '') }, '') }, s.prototype.update = function (t) { !(function t (e, n, r) { 0; n.update(r); if (r.modules) for (var o in r.modules) { if (!n.getChild(o)) return void 0; t(e.concat(o), n.getChild(o), r.modules[o]) } }([], this.root, t)) }, s.prototype.register = function (t, e, n) { var r = this; void 0 === n && (n = !0); var a = new i(e, n); t.length === 0 ? this.root = a : this.get(t.slice(0, -1)).addChild(t[t.length - 1], a); e.modules && o(e.modules, function (e, o) { r.register(t.concat(o), e, n) }) }, s.prototype.unregister = function (t) { var e = this.get(t.slice(0, -1)); var n = t[t.length - 1]; e.getChild(n).runtime && e.removeChild(n) }; var c; var u = function (t) { var e = this; void 0 === t && (t = {}), !c && typeof window !== 'undefined' && window.Vue && g(window.Vue); var n = t.plugins; void 0 === n && (n = []); var o = t.strict; void 0 === o && (o = !1), this._committing = !1, this._actions = Object.create(null), this._actionSubscribers = [], this._mutations = Object.create(null), this._wrappedGetters = Object.create(null), this._modules = new s(t), this._modulesNamespaceMap = Object.create(null), this._subscribers = [], this._watcherVM = new c(); var i = this; var a = this.dispatch; var u = this.commit; this.dispatch = function (t, e) { return a.call(i, t, e) }, this.commit = function (t, e, n) { return u.call(i, t, e, n) }, this.strict = o; var f = this._modules.root.state; h(this, f, [], this._modules.root), d(this, f), n.forEach(function (t) { return t(e) }), (void 0 !== t.devtools ? t.devtools : c.config.devtools) && (function (t) { r && (t._devtoolHook = r, r.emit('vuex:init', t), r.on('vuex:travel-to-state', function (e) { t.replaceState(e) }), t.subscribe(function (t, e) { r.emit('vuex:mutation', t, e) })) }(this)) }; var f = { state: { configurable: !0 } }; function p (t, e) { return e.indexOf(t) < 0 && e.push(t), function () { var n = e.indexOf(t); n > -1 && e.splice(n, 1) } } function l (t, e) { t._actions = Object.create(null), t._mutations = Object.create(null), t._wrappedGetters = Object.create(null), t._modulesNamespaceMap = Object.create(null); var n = t.state; h(t, n, [], t._modules.root, !0), d(t, n, e) } function d (t, e, n) { var r = t._vm; t.getters = {}; var i = t._wrappedGetters; var a = {}; o(i, function (e, n) { a[n] = (function (t, e) { return function () { return t(e) } }(e, t)), Object.defineProperty(t.getters, n, { get: function () { return t._vm[n] }, enumerable: !0 }) }); var s = c.config.silent; c.config.silent = !0, t._vm = new c({ data: { $$state: e }, computed: a }), c.config.silent = s, t.strict && (function (t) { t._vm.$watch(function () { return this._data.$$state }, function () { 0 }, { deep: !0, sync: !0 }) }(t)), r && (n && t._withCommit(function () { r._data.$$state = null }), c.nextTick(function () { return r.$destroy() })) } function h (t, e, n, r, o) { var i = !n.length; var a = t._modules.getNamespace(n); if (r.namespaced && (t._modulesNamespaceMap[a] = r), !i && !o) { var s = v(e, n.slice(0, -1)); var u = n[n.length - 1]; t._withCommit(function () { c.set(s, u, r.state) }) } var f = r.context = (function (t, e, n) { var r = e === ''; var o = { dispatch: r ? t.dispatch : function (n, r, o) { var i = m(n, r, o); var a = i.payload; var s = i.options; var c = i.type; return s && s.root || (c = e + c), t.dispatch(c, a) }, commit: r ? t.commit : function (n, r, o) { var i = m(n, r, o); var a = i.payload; var s = i.options; var c = i.type; s && s.root || (c = e + c), t.commit(c, a, s) } }; return Object.defineProperties(o, { getters: { get: r ? function () { return t.getters } : function () { return (function (t, e) { var n = {}; var r = e.length; return Object.keys(t.getters).forEach(function (o) { if (o.slice(0, r) === e) { var i = o.slice(r); Object.defineProperty(n, i, { get: function () { return t.getters[o] }, enumerable: !0 }) } }), n }(t, e)) } }, state: { get: function () { return v(t.state, n) } } }), o }(t, a, n)); r.forEachMutation(function (e, n) { !(function (t, e, n, r) { (t._mutations[e] || (t._mutations[e] = [])).push(function (e) { n.call(t, r.state, e) }) }(t, a + n, e, f)) }), r.forEachAction(function (e, n) { var r = e.root ? n : a + n; var o = e.handler || e; !(function (t, e, n, r) { (t._actions[e] || (t._actions[e] = [])).push(function (e, o) { var i; var a = n.call(t, { dispatch: r.dispatch, commit: r.commit, getters: r.getters, state: r.state, rootGetters: t.getters, rootState: t.state }, e, o); return (i = a) && typeof i.then === 'function' || (a = Promise.resolve(a)), t._devtoolHook ? a.catch(function (e) { throw t._devtoolHook.emit('vuex:error', e), e }) : a }) }(t, r, o, f)) }), r.forEachGetter(function (e, n) { !(function (t, e, n, r) { if (t._wrappedGetters[e]) return void 0; t._wrappedGetters[e] = function (t) { return n(r.state, r.getters, t.state, t.getters) } }(t, a + n, e, f)) }), r.forEachChild(function (r, i) { h(t, e, n.concat(i), r, o) }) } function v (t, e) { return e.length ? e.reduce(function (t, e) { return t[e] }, t) : t } function m (t, e, n) { var r; return (r = t) !== null && typeof r === 'object' && t.type && (n = e, e = t, t = t.type), { type: t, payload: e, options: n } } function g (t) {
        c && t === c ||
/**
 * vuex v3.1.1
 * (c) 2019 Evan You
 * @license MIT
 */
(function (t) { if (Number(t.version.split('.')[0]) >= 2)t.mixin({ beforeCreate: n }); else { var e = t.prototype._init; t.prototype._init = function (t) { void 0 === t && (t = {}), t.init = t.init ? [n].concat(t.init) : n, e.call(this, t) } } function n () { var t = this.$options; t.store ? this.$store = typeof t.store === 'function' ? t.store() : t.store : t.parent && t.parent.$store && (this.$store = t.parent.$store) } }(c = t))
      }f.state.get = function () { return this._vm._data.$$state }, f.state.set = function (t) { 0 }, u.prototype.commit = function (t, e, n) { var r = this; var o = m(t, e, n); var i = o.type; var a = o.payload; var s = (o.options, { type: i, payload: a }); var c = this._mutations[i]; c && (this._withCommit(function () { c.forEach(function (t) { t(a) }) }), this._subscribers.forEach(function (t) { return t(s, r.state) })) }, u.prototype.dispatch = function (t, e) { var n = this; var r = m(t, e); var o = r.type; var i = r.payload; var a = { type: o, payload: i }; var s = this._actions[o]; if (s) { try { this._actionSubscribers.filter(function (t) { return t.before }).forEach(function (t) { return t.before(a, n.state) }) } catch (t) { 0 } return (s.length > 1 ? Promise.all(s.map(function (t) { return t(i) })) : s[0](i)).then(function (t) { try { n._actionSubscribers.filter(function (t) { return t.after }).forEach(function (t) { return t.after(a, n.state) }) } catch (t) { 0 } return t }) } }, u.prototype.subscribe = function (t) { return p(t, this._subscribers) }, u.prototype.subscribeAction = function (t) { return p(typeof t === 'function' ? { before: t } : t, this._actionSubscribers) }, u.prototype.watch = function (t, e, n) { var r = this; return this._watcherVM.$watch(function () { return t(r.state, r.getters) }, e, n) }, u.prototype.replaceState = function (t) { var e = this; this._withCommit(function () { e._vm._data.$$state = t }) }, u.prototype.registerModule = function (t, e, n) { void 0 === n && (n = {}), typeof t === 'string' && (t = [t]), this._modules.register(t, e), h(this, this.state, t, this._modules.get(t), n.preserveState), d(this, this.state) }, u.prototype.unregisterModule = function (t) { var e = this; typeof t === 'string' && (t = [t]), this._modules.unregister(t), this._withCommit(function () { var n = v(e.state, t.slice(0, -1)); c.delete(n, t[t.length - 1]) }), l(this) }, u.prototype.hotUpdate = function (t) { this._modules.update(t), l(this, !0) }, u.prototype._withCommit = function (t) { var e = this._committing; this._committing = !0, t(), this._committing = e }, Object.defineProperties(u.prototype, f); w(function (t, e) { var n = {}; return _(e).forEach(function (e) { var r = e.key; var o = e.val; n[r] = function () { var e = this.$store.state; var n = this.$store.getters; if (t) { var r = x(this.$store, 'mapState', t); if (!r) return; e = r.context.state, n = r.context.getters } return typeof o === 'function' ? o.call(this, e, n) : e[o] }, n[r].vuex = !0 }), n }), w(function (t, e) { var n = {}; return _(e).forEach(function (e) { var r = e.key; var o = e.val; n[r] = function () { for (var e = [], n = arguments.length; n--;)e[n] = arguments[n]; var r = this.$store.commit; if (t) { var i = x(this.$store, 'mapMutations', t); if (!i) return; r = i.context.commit } return typeof o === 'function' ? o.apply(this, [r].concat(e)) : r.apply(this.$store, [o].concat(e)) } }), n }); var y = w(function (t, e) { var n = {}; return _(e).forEach(function (e) { var r = e.key; var o = e.val; o = t + o, n[r] = function () { if (!t || x(this.$store, 'mapGetters', t)) return this.$store.getters[o] }, n[r].vuex = !0 }), n }); var b = w(function (t, e) { var n = {}; return _(e).forEach(function (e) { var r = e.key; var o = e.val; n[r] = function () { for (var e = [], n = arguments.length; n--;)e[n] = arguments[n]; var r = this.$store.dispatch; if (t) { var i = x(this.$store, 'mapActions', t); if (!i) return; r = i.context.dispatch } return typeof o === 'function' ? o.apply(this, [r].concat(e)) : r.apply(this.$store, [o].concat(e)) } }), n }); function _ (t) { return Array.isArray(t) ? t.map(function (t) { return { key: t, val: t } }) : Object.keys(t).map(function (e) { return { key: e, val: t[e] } }) } function w (t) { return function (e, n) { return typeof e !== 'string' ? (n = e, e = '') : e.charAt(e.length - 1) !== '/' && (e += '/'), t(e, n) } } function x (t, e, n) { return t._modulesNamespaceMap[n] }
    }).call(this, n(10))
  }, function (t, e, n) { var r = n(12); typeof r === 'string' && (r = [[t.i, r, '']]), r.locals && (t.exports = r.locals); (0, n(6).default)('2a5762a0', r, !0, {}) }, function (t, e, n) { var r = n(14); typeof r === 'string' && (r = [[t.i, r, '']]), r.locals && (t.exports = r.locals); (0, n(6).default)('41659820', r, !0, {}) }, function (t, e, n) { 'use strict'; t.exports = function (t) { var e = []; return e.toString = function () { return this.map(function (e) { var n = (function (t, e) { var n = t[1] || ''; var r = t[3]; if (!r) return n; if (e && typeof btoa === 'function') { var o = (a = r, '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + ' */'); var i = r.sources.map(function (t) { return '/*# sourceURL=' + r.sourceRoot + t + ' */' }); return [n].concat(i).concat([o]).join('\n') } var a; return [n].join('\n') }(e, t)); return e[2] ? '@media ' + e[2] + '{' + n + '}' : n }).join('') }, e.i = function (t, n) { typeof t === 'string' && (t = [[null, t, '']]); for (var r = {}, o = 0; o < this.length; o++) { var i = this[o][0]; i != null && (r[i] = !0) } for (o = 0; o < t.length; o++) { var a = t[o]; a[0] != null && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = '(' + a[2] + ') and (' + n + ')'), e.push(a)) } }, e } }, function (t, e, n) { 'use strict'; function r (t, e) { for (var n = [], r = {}, o = 0; o < e.length; o++) { var i = e[o]; var a = i[0]; var s = { id: t + ':' + o, css: i[1], media: i[2], sourceMap: i[3] }; r[a] ? r[a].parts.push(s) : n.push(r[a] = { id: a, parts: [s] }) } return n }n.r(e), n.d(e, 'default', function () { return h }); var o = typeof document !== 'undefined'; if (typeof DEBUG !== 'undefined' && DEBUG && !o) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."); var i = {}; var a = o && (document.head || document.getElementsByTagName('head')[0]); var s = null; var c = 0; var u = !1; var f = function () {}; var p = null; var l = 'data-vue-ssr-id'; var d = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase()); function h (t, e, n, o) { u = n, p = o || {}; var a = r(t, e); return v(a), function (e) { for (var n = [], o = 0; o < a.length; o++) { var s = a[o]; (c = i[s.id]).refs--, n.push(c) }e ? v(a = r(t, e)) : a = []; for (o = 0; o < n.length; o++) { var c; if ((c = n[o]).refs === 0) { for (var u = 0; u < c.parts.length; u++)c.parts[u](); delete i[c.id] } } } } function v (t) { for (var e = 0; e < t.length; e++) { var n = t[e]; var r = i[n.id]; if (r) { r.refs++; for (var o = 0; o < r.parts.length; o++)r.parts[o](n.parts[o]); for (;o < n.parts.length; o++)r.parts.push(g(n.parts[o])); r.parts.length > n.parts.length && (r.parts.length = n.parts.length) } else { var a = []; for (o = 0; o < n.parts.length; o++)a.push(g(n.parts[o])); i[n.id] = { id: n.id, refs: 1, parts: a } } } } function m () { var t = document.createElement('style'); return t.type = 'text/css', a.appendChild(t), t } function g (t) { var e; var n; var r = document.querySelector('style[' + l + '~="' + t.id + '"]'); if (r) { if (u) return f; r.parentNode.removeChild(r) } if (d) { var o = c++; r = s || (s = m()), e = _.bind(null, r, o, !1), n = _.bind(null, r, o, !0) } else r = m(), e = w.bind(null, r), n = function () { r.parentNode.removeChild(r) }; return e(t), function (r) { if (r) { if (r.css === t.css && r.media === t.media && r.sourceMap === t.sourceMap) return; e(t = r) } else n() } } var y; var b = (y = [], function (t, e) { return y[t] = e, y.filter(Boolean).join('\n') }); function _ (t, e, n, r) { var o = n ? '' : r.css; if (t.styleSheet)t.styleSheet.cssText = b(e, o); else { var i = document.createTextNode(o); var a = t.childNodes; a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i) } } function w (t, e) { var n = e.css; var r = e.media; var o = e.sourceMap; if (r && t.setAttribute('media', r), p.ssrId && t.setAttribute(l, e.id), o && (n += '\n/*# sourceURL=' + o.sources[0] + ' */', n += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + ' */'), t.styleSheet)t.styleSheet.cssText = n; else { for (;t.firstChild;)t.removeChild(t.firstChild); t.appendChild(document.createTextNode(n)) } } }, function (t, e) { t.exports = function (t, e) { if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function') } }, function (t, e) { function n (t, e) { for (var n = 0; n < e.length; n++) { var r = e[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }t.exports = function (t, e, r) { return e && n(t.prototype, e), r && n(t, r), t } }, function (t, e, n) { t.exports = n(15) }, function (t, e) { var n; n = (function () { return this }()); try { n = n || new Function('return this')() } catch (t) { typeof window === 'object' && (n = window) }t.exports = n }, function (t, e, n) { 'use strict'; var r = n(3); n.n(r).a }, function (t, e, n) { (t.exports = n(5)(!1)).push([t.i, '.notification-wrapper[data-v-2ed50a1f]{position:fixed;right:10px;bottom:10px;width:600px;color:white;border-radius:3px;padding:15px;font-size:0.9rem;font-family:"Roboto", sans-serif;margin:0;box-sizing:border-box;display:flex;justify-content:space-between;align-items:center}.icon[data-v-2ed50a1f]{margin:0 20px 0 10px}svg[data-v-2ed50a1f]{fill:#ffffff}.text[data-v-2ed50a1f]{display:flex;text-align:justify;align-items:center}.action div[data-v-2ed50a1f]{cursor:pointer;margin:0 20px;font-weight:bold;text-align:center;background:rgba(40,40,40,0.15);transition:all 0.3s ease-in-out;padding:7px 12px;border-radius:5px}.action div[data-v-2ed50a1f]:last-of-type{font-weight:300;font-size:12px;margin-top:5px;padding:7px 4px;background:rgba(0,0,0,0)}.action div[data-v-2ed50a1f]:hover{background:rgba(0,0,0,0.2)}.action div[data-v-2ed50a1f]:last-of-type:hover{background:rgba(0,0,0,0)}@media screen and (max-width: 720px){.notification-wrapper[data-v-2ed50a1f]{bottom:0;left:0;right:0;border-radius:0;width:100%;display:block}.action[data-v-2ed50a1f]{margin-top:10px}}\n', '']) }, function (t, e, n) { 'use strict'; var r = n(4); n.n(r).a }, function (t, e, n) { (e = t.exports = n(5)(!1)).push([t.i, '@import url(https://fonts.googleapis.com/css?family=Roboto&display=swap);', '']), e.push([t.i, '.notification-enter-active{animation:notification-in 0.5s ease-in-out}.notification-leave-active{animation:notification-out 0.5s ease-in-out}@keyframes notification-in{from{transform:translateY(28px);opacity:0}to{transform:translateY(0px);opacity:1}}@keyframes notification-out{from{transform:translateY(0px)}to{transform:translateY(28px);opacity:0}}\n', '']) }, function (t, e, n) { 'use strict'; n.r(e); var r = n(7); var o = n.n(r); var i = n(8); var a = n.n(i); var s = n(0); var c = n.n(s); var u = n(1); var f = n.n(u); var p = n(2); function l (t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t); e && (r = r.filter(function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable })), n.push.apply(n, r) } return n } function d (t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? l(n, !0).forEach(function (e) { c()(t, e, n[e]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(n).forEach(function (e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) }) } return t } var h = { computed: d({}, Object(p.b)('gaStore', [])), methods: d({}, Object(p.a)('gaStore', ['updateUI']), { accept: function () { this.$handyga.accept() }, reject: function () { this.$handyga.reject() } }) }; n(11); function v (t, e, n, r, o, i, a, s) { var c; var u = typeof t === 'function' ? t.options : t; if (e && (u.render = e, u.staticRenderFns = n, u._compiled = !0), r && (u.functional = !0), i && (u._scopeId = 'data-v-' + i), a ? (c = function (t) { (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || typeof __VUE_SSR_CONTEXT__ === 'undefined' || (t = __VUE_SSR_CONTEXT__), o && o.call(this, t), t && t._registeredComponents && t._registeredComponents.add(a) }, u._ssrRegister = c) : o && (c = s ? function () { o.call(this, this.$root.$options.shadowRoot) } : o), c) if (u.functional) { u._injectStyles = c; var f = u.render; u.render = function (t, e) { return c.call(e), f(t, e) } } else { var p = u.beforeCreate; u.beforeCreate = p ? [].concat(p, c) : [c] } return { exports: t, options: u } } function m (t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t); e && (r = r.filter(function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable })), n.push.apply(n, r) } return n } function g (t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? m(n, !0).forEach(function (e) { c()(t, e, n[e]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : m(n).forEach(function (e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) }) } return t } var y = { components: { Notification: v(h, function () { var t = this; var e = t.$createElement; var n = t._self._c || e; return n('div', { staticClass: 'notification-wrapper', style: { background: '#5c6bc0' } }, [n('div', { staticClass: 'text' }, [n('div', { staticClass: 'icon' }, [n('svg', { attrs: { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' } }, [n('path', { attrs: { d: 'M0 0h24v24H0z', fill: 'none' } }), t._v(' '), n('path', { attrs: { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z' } })])]), t._v('We serve cookies on this site to analyse traffic, remember your preferences, and optimise your experience.\n  ')]), t._v(' '), n('div', { staticClass: 'action' }, [n('div', { on: { click: t.accept } }, [t._v('Accept')]), t._v(' '), n('div', { on: { click: t.reject } }, [t._v('Reject')])])]) }, [], !1, null, '2ed50a1f', null).exports }, computed: g({}, Object(p.b)('gaStore', ['UIstate'])), methods: g({}, Object(p.a)('gaStore', [])), mounted: function () { this.$handyga.processConsent() } }; var b = (n(13), v(y, function () { var t = this.$createElement; var e = this._self._c || t; return e('div', [e('transition', { attrs: { name: 'notification' } }, [this.UIstate === 'notification' ? e('Notification') : this._e()], 1)], 1) }, [], !1, null, null, null).exports); function _ (t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t); e && (r = r.filter(function (e) { return Object.getOwnPropertyDescriptor(t, e).enumerable })), n.push.apply(n, r) } return n } function w (t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e] != null ? arguments[e] : {}; e % 2 ? _(n, !0).forEach(function (e) { c()(t, e, n[e]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : _(n).forEach(function (e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) }) } return t }n.d(e, 'default', function () { return x }), n.d(e, 'install', function () { return O }); var x = (function () { function t () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; o()(this, t), c()(this, 'initialized', !1); this.options = w({}, { accessorName: '$vueHandyGa', builtin: !0, gaID: null }, {}, e) } return a()(t, [{ key: 'init', value: function (e, n) { this.initialized || (t.register(e, this.options, n), this.initialized = !0) } }]), t }()); function O (t) { O.installed && t || (t.mixin(w({ beforeCreate: function () { var e = this.$options; var n = e.vueHandyGaSettings; var r = e.store; var o = e.parent; var i = null; n ? (i = typeof n === 'function' ? new n() : new x(n)).init(t, r) : o && o.__$VueHandyGaInstance && (i = o.__$VueHandyGaInstance).init(t, o.$store), i && (this.__$VueHandyGaInstance = i, this[i.options.accessorName] = i) } }, x.mixin())), O.installed = !0) }c()(x, 'register', function (t, e, n) { var r = e.options; r.builtin && (t.component('VueHandyGa', b), (function (t, e, n) { t && (t._modules.get([e]) || t.registerModule(e, n)) }(n, 'gaStore', { namespaced: !0, state: { UIstate: 'none' }, getters: { UIstate: function (t) { return t.UIstate } }, actions: { updateUI: function (t, e) { (0, t.commit)('UPDATE_UI', e) } }, mutations: { UPDATE_UI: function (t, e) { t.UIstate = e } } }))), t.prototype.$handyga = { options: r, start: function () { if (!r.gaID) return console.log('[vue-handy-ga] No gaID provided'); var t, e, n, o, i, a; t = window, e = document, n = 'script', o = 'ga', t.GoogleAnalyticsObject = o, t.ga = t.ga || function () { (t.ga.q = t.ga.q || []).push(arguments) }, t.ga.l = 1 * new Date(), i = e.createElement(n), a = e.getElementsByTagName(n)[0], i.async = 1, i.src = 'https://www.google-analytics.com/analytics.js', a.parentNode.insertBefore(i, a), ga('create', r.gaID, 'auto'), ga('send', 'pageview') }, accept: function () { f.a.set('hasConsent', !0, { expires: 395 }), this.start(), r.builtin && n.dispatch('gaStore/updateUI', 'none') }, reject: function () { f.a.set('ga-disable-'.concat(r.gaID), !0, { expires: 395 }), window['ga-disable-'.concat(r.gaID)] = !0, f.a.set('hasConsent', !1, { expires: 395 }), ['__utma', '__utmb', '__utmc', '__utmz', '_ga', '_gat', '_gid'].forEach(function (t) { return f.a.remove(t) }), r.builtin && n.dispatch('gaStore/updateUI', 'none') }, checkConsent: function () { return void 0 !== f.a.get('hasConsent') }, processConsent: function (t) { var e = f.a.getJSON('hasConsent'); var r = navigator.doNotTrack || navigator.msDoNotTrack; if (r !== 'yes' && r !== '1' && !1 !== e) { if (!0 !== e) return r === 'no' || r === '0' ? (f.a.set('hasConsent', !0, { expires: 395 }), void this.start()) : void (this.options.builtin ? n.dispatch('gaStore/updateUI', 'notification') : t && t()); this.start() } else this.reject() } } }), c()(x, 'mixin', function () { return { mounted: function () {} } }), x.install = O }]))
}))
