(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i=>{
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity),
        i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
}
)();
function Yh(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Rr = {}
  , Zh = {
    get exports() {
        return Rr
    },
    set exports(e) {
        Rr = e
    }
}
  , To = {}
  , k = {}
  , Jh = {
    get exports() {
        return k
    },
    set exports(e) {
        k = e
    }
}
  , F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var br = Symbol.for("react.element")
  , qh = Symbol.for("react.portal")
  , bh = Symbol.for("react.fragment")
  , em = Symbol.for("react.strict_mode")
  , tm = Symbol.for("react.profiler")
  , nm = Symbol.for("react.provider")
  , rm = Symbol.for("react.context")
  , im = Symbol.for("react.forward_ref")
  , om = Symbol.for("react.suspense")
  , sm = Symbol.for("react.memo")
  , lm = Symbol.for("react.lazy")
  , fu = Symbol.iterator;
function am(e) {
    return e === null || typeof e != "object" ? null : (e = fu && e[fu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Af = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Vf = Object.assign
  , Lf = {};
function Jn(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Lf,
    this.updater = n || Af
}
Jn.prototype.isReactComponent = {};
Jn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Jn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Rf() {}
Rf.prototype = Jn.prototype;
function Gl(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Lf,
    this.updater = n || Af
}
var Xl = Gl.prototype = new Rf;
Xl.constructor = Gl;
Vf(Xl, Jn.prototype);
Xl.isPureReactComponent = !0;
var du = Array.isArray
  , Df = Object.prototype.hasOwnProperty
  , Yl = {
    current: null
}
  , Mf = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Nf(e, t, n) {
    var r, i = {}, o = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            Df.call(t, r) && !Mf.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        i.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        i.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            i[r] === void 0 && (i[r] = l[r]);
    return {
        $$typeof: br,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: Yl.current
    }
}
function um(e, t) {
    return {
        $$typeof: br,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Zl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === br
}
function cm(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var pu = /\/+/g;
function Zo(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? cm("" + e.key) : t.toString(36)
}
function Ri(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case br:
            case qh:
                s = !0
            }
        }
    if (s)
        return s = e,
        i = i(s),
        e = r === "" ? "." + Zo(s, 0) : r,
        du(i) ? (n = "",
        e != null && (n = e.replace(pu, "$&/") + "/"),
        Ri(i, t, n, "", function(u) {
            return u
        })) : i != null && (Zl(i) && (i = um(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(pu, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    du(e))
        for (var l = 0; l < e.length; l++) {
            o = e[l];
            var a = r + Zo(o, l);
            s += Ri(o, t, n, a, i)
        }
    else if (a = am(e),
    typeof a == "function")
        for (e = a.call(e),
        l = 0; !(o = e.next()).done; )
            o = o.value,
            a = r + Zo(o, l++),
            s += Ri(o, t, n, a, i);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function ui(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return Ri(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }),
    r
}
function fm(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var we = {
    current: null
}
  , Di = {
    transition: null
}
  , dm = {
    ReactCurrentDispatcher: we,
    ReactCurrentBatchConfig: Di,
    ReactCurrentOwner: Yl
};
F.Children = {
    map: ui,
    forEach: function(e, t, n) {
        ui(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ui(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return ui(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Zl(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
F.Component = Jn;
F.Fragment = bh;
F.Profiler = tm;
F.PureComponent = Gl;
F.StrictMode = em;
F.Suspense = om;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dm;
F.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Vf({}, e.props)
      , i = e.key
      , o = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        s = Yl.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (a in t)
            Df.call(t, a) && !Mf.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: br,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: s
    }
}
;
F.createContext = function(e) {
    return e = {
        $$typeof: rm,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: nm,
        _context: e
    },
    e.Consumer = e
}
;
F.createElement = Nf;
F.createFactory = function(e) {
    var t = Nf.bind(null, e);
    return t.type = e,
    t
}
;
F.createRef = function() {
    return {
        current: null
    }
}
;
F.forwardRef = function(e) {
    return {
        $$typeof: im,
        render: e
    }
}
;
F.isValidElement = Zl;
F.lazy = function(e) {
    return {
        $$typeof: lm,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: fm
    }
}
;
F.memo = function(e, t) {
    return {
        $$typeof: sm,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
F.startTransition = function(e) {
    var t = Di.transition;
    Di.transition = {};
    try {
        e()
    } finally {
        Di.transition = t
    }
}
;
F.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
;
F.useCallback = function(e, t) {
    return we.current.useCallback(e, t)
}
;
F.useContext = function(e) {
    return we.current.useContext(e)
}
;
F.useDebugValue = function() {}
;
F.useDeferredValue = function(e) {
    return we.current.useDeferredValue(e)
}
;
F.useEffect = function(e, t) {
    return we.current.useEffect(e, t)
}
;
F.useId = function() {
    return we.current.useId()
}
;
F.useImperativeHandle = function(e, t, n) {
    return we.current.useImperativeHandle(e, t, n)
}
;
F.useInsertionEffect = function(e, t) {
    return we.current.useInsertionEffect(e, t)
}
;
F.useLayoutEffect = function(e, t) {
    return we.current.useLayoutEffect(e, t)
}
;
F.useMemo = function(e, t) {
    return we.current.useMemo(e, t)
}
;
F.useReducer = function(e, t, n) {
    return we.current.useReducer(e, t, n)
}
;
F.useRef = function(e) {
    return we.current.useRef(e)
}
;
F.useState = function(e) {
    return we.current.useState(e)
}
;
F.useSyncExternalStore = function(e, t, n) {
    return we.current.useSyncExternalStore(e, t, n)
}
;
F.useTransition = function() {
    return we.current.useTransition()
}
;
F.version = "18.2.0";
(function(e) {
    e.exports = F
}
)(Jh);
const Jl = Yh(k);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pm = k
  , hm = Symbol.for("react.element")
  , mm = Symbol.for("react.fragment")
  , gm = Object.prototype.hasOwnProperty
  , ym = pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , vm = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Of(e, t, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        gm.call(t, r) && !vm.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: hm,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: ym.current
    }
}
To.Fragment = mm;
To.jsx = Of;
To.jsxs = Of;
(function(e) {
    e.exports = To
}
)(Zh);
const wm = Rr.Fragment
  , $ = Rr.jsx
  , Fs = Rr.jsxs;
var zs = {}
  , _s = {}
  , xm = {
    get exports() {
        return _s
    },
    set exports(e) {
        _s = e
    }
}
  , Oe = {}
  , Is = {}
  , Sm = {
    get exports() {
        return Is
    },
    set exports(e) {
        Is = e
    }
}
  , Ff = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(A, D) {
        var M = A.length;
        A.push(D);
        e: for (; 0 < M; ) {
            var N = M - 1 >>> 1
              , H = A[N];
            if (0 < i(H, D))
                A[N] = D,
                A[M] = H,
                M = N;
            else
                break e
        }
    }
    function n(A) {
        return A.length === 0 ? null : A[0]
    }
    function r(A) {
        if (A.length === 0)
            return null;
        var D = A[0]
          , M = A.pop();
        if (M !== D) {
            A[0] = M;
            e: for (var N = 0, H = A.length, Xt = H >>> 1; N < Xt; ) {
                var Ve = 2 * (N + 1) - 1
                  , wn = A[Ve]
                  , st = Ve + 1
                  , wt = A[st];
                if (0 > i(wn, M))
                    st < H && 0 > i(wt, wn) ? (A[N] = wt,
                    A[st] = M,
                    N = st) : (A[N] = wn,
                    A[Ve] = M,
                    N = Ve);
                else if (st < H && 0 > i(wt, M))
                    A[N] = wt,
                    A[st] = M,
                    N = st;
                else
                    break e
            }
        }
        return D
    }
    function i(A, D) {
        var M = A.sortIndex - D.sortIndex;
        return M !== 0 ? M : A.id - D.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var s = Date
          , l = s.now();
        e.unstable_now = function() {
            return s.now() - l
        }
    }
    var a = []
      , u = []
      , c = 1
      , f = null
      , d = 3
      , m = !1
      , y = !1
      , v = !1
      , T = typeof setTimeout == "function" ? setTimeout : null
      , g = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function h(A) {
        for (var D = n(u); D !== null; ) {
            if (D.callback === null)
                r(u);
            else if (D.startTime <= A)
                r(u),
                D.sortIndex = D.expirationTime,
                t(a, D);
            else
                break;
            D = n(u)
        }
    }
    function w(A) {
        if (v = !1,
        h(A),
        !y)
            if (n(a) !== null)
                y = !0,
                _e(x);
            else {
                var D = n(u);
                D !== null && qe(w, D.startTime - A)
            }
    }
    function x(A, D) {
        y = !1,
        v && (v = !1,
        g(P),
        P = -1),
        m = !0;
        var M = d;
        try {
            for (h(D),
            f = n(a); f !== null && (!(f.expirationTime > D) || A && !Z()); ) {
                var N = f.callback;
                if (typeof N == "function") {
                    f.callback = null,
                    d = f.priorityLevel;
                    var H = N(f.expirationTime <= D);
                    D = e.unstable_now(),
                    typeof H == "function" ? f.callback = H : f === n(a) && r(a),
                    h(D)
                } else
                    r(a);
                f = n(a)
            }
            if (f !== null)
                var Xt = !0;
            else {
                var Ve = n(u);
                Ve !== null && qe(w, Ve.startTime - D),
                Xt = !1
            }
            return Xt
        } finally {
            f = null,
            d = M,
            m = !1
        }
    }
    var E = !1
      , C = null
      , P = -1
      , O = 5
      , R = -1;
    function Z() {
        return !(e.unstable_now() - R < O)
    }
    function Se() {
        if (C !== null) {
            var A = e.unstable_now();
            R = A;
            var D = !0;
            try {
                D = C(!0, A)
            } finally {
                D ? ze() : (E = !1,
                C = null)
            }
        } else
            E = !1
    }
    var ze;
    if (typeof p == "function")
        ze = function() {
            p(Se)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var J = new MessageChannel
          , q = J.port2;
        J.port1.onmessage = Se,
        ze = function() {
            q.postMessage(null)
        }
    } else
        ze = function() {
            T(Se, 0)
        }
        ;
    function _e(A) {
        C = A,
        E || (E = !0,
        ze())
    }
    function qe(A, D) {
        P = T(function() {
            A(e.unstable_now())
        }, D)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(A) {
        A.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        y || m || (y = !0,
        _e(x))
    }
    ,
    e.unstable_forceFrameRate = function(A) {
        0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < A ? Math.floor(1e3 / A) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return d
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(A) {
        switch (d) {
        case 1:
        case 2:
        case 3:
            var D = 3;
            break;
        default:
            D = d
        }
        var M = d;
        d = D;
        try {
            return A()
        } finally {
            d = M
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(A, D) {
        switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            A = 3
        }
        var M = d;
        d = A;
        try {
            return D()
        } finally {
            d = M
        }
    }
    ,
    e.unstable_scheduleCallback = function(A, D, M) {
        var N = e.unstable_now();
        switch (typeof M == "object" && M !== null ? (M = M.delay,
        M = typeof M == "number" && 0 < M ? N + M : N) : M = N,
        A) {
        case 1:
            var H = -1;
            break;
        case 2:
            H = 250;
            break;
        case 5:
            H = 1073741823;
            break;
        case 4:
            H = 1e4;
            break;
        default:
            H = 5e3
        }
        return H = M + H,
        A = {
            id: c++,
            callback: D,
            priorityLevel: A,
            startTime: M,
            expirationTime: H,
            sortIndex: -1
        },
        M > N ? (A.sortIndex = M,
        t(u, A),
        n(a) === null && A === n(u) && (v ? (g(P),
        P = -1) : v = !0,
        qe(w, M - N))) : (A.sortIndex = H,
        t(a, A),
        y || m || (y = !0,
        _e(x))),
        A
    }
    ,
    e.unstable_shouldYield = Z,
    e.unstable_wrapCallback = function(A) {
        var D = d;
        return function() {
            var M = d;
            d = D;
            try {
                return A.apply(this, arguments)
            } finally {
                d = M
            }
        }
    }
}
)(Ff);
(function(e) {
    e.exports = Ff
}
)(Sm);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zf = k
  , Me = Is;
function S(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var _f = new Set
  , Dr = {};
function mn(e, t) {
    Hn(e, t),
    Hn(e + "Capture", t)
}
function Hn(e, t) {
    for (Dr[e] = t,
    e = 0; e < t.length; e++)
        _f.add(t[e])
}
var ht = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , js = Object.prototype.hasOwnProperty
  , Pm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , hu = {}
  , mu = {};
function Cm(e) {
    return js.call(mu, e) ? !0 : js.call(hu, e) ? !1 : Pm.test(e) ? mu[e] = !0 : (hu[e] = !0,
    !1)
}
function km(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Tm(e, t, n, r) {
    if (t === null || typeof t > "u" || km(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function xe(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = s
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ce[e] = new xe(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    ce[t] = new xe(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ce[e] = new xe(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ce[e] = new xe(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ce[e] = new xe(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ce[e] = new xe(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    ce[e] = new xe(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ce[e] = new xe(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    ce[e] = new xe(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var ql = /[\-:]([a-z])/g;
function bl(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(ql, bl);
    ce[t] = new xe(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ql, bl);
    ce[t] = new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ql, bl);
    ce[t] = new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ce[e] = new xe(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ce.xlinkHref = new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ce[e] = new xe(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function ea(e, t, n, r) {
    var i = ce.hasOwnProperty(t) ? ce[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Tm(t, n, i, r) && (n = null),
    r || i === null ? Cm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var vt = zf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , ci = Symbol.for("react.element")
  , Pn = Symbol.for("react.portal")
  , Cn = Symbol.for("react.fragment")
  , ta = Symbol.for("react.strict_mode")
  , Bs = Symbol.for("react.profiler")
  , If = Symbol.for("react.provider")
  , jf = Symbol.for("react.context")
  , na = Symbol.for("react.forward_ref")
  , Us = Symbol.for("react.suspense")
  , Ws = Symbol.for("react.suspense_list")
  , ra = Symbol.for("react.memo")
  , Pt = Symbol.for("react.lazy")
  , Bf = Symbol.for("react.offscreen")
  , gu = Symbol.iterator;
function er(e) {
    return e === null || typeof e != "object" ? null : (e = gu && e[gu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var X = Object.assign, Jo;
function cr(e) {
    if (Jo === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Jo = t && t[1] || ""
        }
    return `
` + Jo + e
}
var qo = !1;
function bo(e, t) {
    if (!e || qo)
        return "";
    qo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, l = o.length - 1; 1 <= s && 0 <= l && i[s] !== o[l]; )
                l--;
            for (; 1 <= s && 0 <= l; s--,
            l--)
                if (i[s] !== o[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--,
                            l--,
                            0 > l || i[s] !== o[l]) {
                                var a = `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        qo = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? cr(e) : ""
}
function Em(e) {
    switch (e.tag) {
    case 5:
        return cr(e.type);
    case 16:
        return cr("Lazy");
    case 13:
        return cr("Suspense");
    case 19:
        return cr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = bo(e.type, !1),
        e;
    case 11:
        return e = bo(e.type.render, !1),
        e;
    case 1:
        return e = bo(e.type, !0),
        e;
    default:
        return ""
    }
}
function Hs(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Cn:
        return "Fragment";
    case Pn:
        return "Portal";
    case Bs:
        return "Profiler";
    case ta:
        return "StrictMode";
    case Us:
        return "Suspense";
    case Ws:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case jf:
            return (e.displayName || "Context") + ".Consumer";
        case If:
            return (e._context.displayName || "Context") + ".Provider";
        case na:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case ra:
            return t = e.displayName || null,
            t !== null ? t : Hs(e.type) || "Memo";
        case Pt:
            t = e._payload,
            e = e._init;
            try {
                return Hs(e(t))
            } catch {}
        }
    return null
}
function Am(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Hs(t);
    case 8:
        return t === ta ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Bt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Uf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Vm(e) {
    var t = Uf(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(s) {
                r = "" + s,
                o.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function fi(e) {
    e._valueTracker || (e._valueTracker = Vm(e))
}
function Wf(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Uf(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function $i(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function $s(e, t) {
    var n = t.checked;
    return X({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function yu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Bt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Hf(e, t) {
    t = t.checked,
    t != null && ea(e, "checked", t, !1)
}
function Qs(e, t) {
    Hf(e, t);
    var n = Bt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Ks(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ks(e, t.type, Bt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function vu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Ks(e, t, n) {
    (t !== "number" || $i(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var fr = Array.isArray;
function _n(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Bt(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function Gs(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(S(91));
    return X({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function wu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(S(92));
            if (fr(n)) {
                if (1 < n.length)
                    throw Error(S(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Bt(n)
    }
}
function $f(e, t) {
    var n = Bt(t.value)
      , r = Bt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function xu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Qf(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Xs(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Qf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var di, Kf = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (di = di || document.createElement("div"),
        di.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = di.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Mr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var mr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Lm = ["Webkit", "ms", "Moz", "O"];
Object.keys(mr).forEach(function(e) {
    Lm.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        mr[t] = mr[e]
    })
});
function Gf(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || mr.hasOwnProperty(e) && mr[e] ? ("" + t).trim() : t + "px"
}
function Xf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = Gf(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var Rm = X({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Ys(e, t) {
    if (t) {
        if (Rm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(S(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(S(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(S(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(S(62))
    }
}
function Zs(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Js = null;
function ia(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var qs = null
  , In = null
  , jn = null;
function Su(e) {
    if (e = ni(e)) {
        if (typeof qs != "function")
            throw Error(S(280));
        var t = e.stateNode;
        t && (t = Ro(t),
        qs(e.stateNode, e.type, t))
    }
}
function Yf(e) {
    In ? jn ? jn.push(e) : jn = [e] : In = e
}
function Zf() {
    if (In) {
        var e = In
          , t = jn;
        if (jn = In = null,
        Su(e),
        t)
            for (e = 0; e < t.length; e++)
                Su(t[e])
    }
}
function Jf(e, t) {
    return e(t)
}
function qf() {}
var es = !1;
function bf(e, t, n) {
    if (es)
        return e(t, n);
    es = !0;
    try {
        return Jf(e, t, n)
    } finally {
        es = !1,
        (In !== null || jn !== null) && (qf(),
        Zf())
    }
}
function Nr(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Ro(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(S(231, t, typeof n));
    return n
}
var bs = !1;
if (ht)
    try {
        var tr = {};
        Object.defineProperty(tr, "passive", {
            get: function() {
                bs = !0
            }
        }),
        window.addEventListener("test", tr, tr),
        window.removeEventListener("test", tr, tr)
    } catch {
        bs = !1
    }
function Dm(e, t, n, r, i, o, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var gr = !1
  , Qi = null
  , Ki = !1
  , el = null
  , Mm = {
    onError: function(e) {
        gr = !0,
        Qi = e
    }
};
function Nm(e, t, n, r, i, o, s, l, a) {
    gr = !1,
    Qi = null,
    Dm.apply(Mm, arguments)
}
function Om(e, t, n, r, i, o, s, l, a) {
    if (Nm.apply(this, arguments),
    gr) {
        if (gr) {
            var u = Qi;
            gr = !1,
            Qi = null
        } else
            throw Error(S(198));
        Ki || (Ki = !0,
        el = u)
    }
}
function gn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function ed(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Pu(e) {
    if (gn(e) !== e)
        throw Error(S(188))
}
function Fm(e) {
    var t = e.alternate;
    if (!t) {
        if (t = gn(e),
        t === null)
            throw Error(S(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n)
                    return Pu(i),
                    e;
                if (o === r)
                    return Pu(i),
                    t;
                o = o.sibling
            }
            throw Error(S(188))
        }
        if (n.return !== r.return)
            n = i,
            r = o;
        else {
            for (var s = !1, l = i.child; l; ) {
                if (l === n) {
                    s = !0,
                    n = i,
                    r = o;
                    break
                }
                if (l === r) {
                    s = !0,
                    r = i,
                    n = o;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = o.child; l; ) {
                    if (l === n) {
                        s = !0,
                        n = o,
                        r = i;
                        break
                    }
                    if (l === r) {
                        s = !0,
                        r = o,
                        n = i;
                        break
                    }
                    l = l.sibling
                }
                if (!s)
                    throw Error(S(189))
            }
        }
        if (n.alternate !== r)
            throw Error(S(190))
    }
    if (n.tag !== 3)
        throw Error(S(188));
    return n.stateNode.current === n ? e : t
}
function td(e) {
    return e = Fm(e),
    e !== null ? nd(e) : null
}
function nd(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = nd(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var rd = Me.unstable_scheduleCallback
  , Cu = Me.unstable_cancelCallback
  , zm = Me.unstable_shouldYield
  , _m = Me.unstable_requestPaint
  , b = Me.unstable_now
  , Im = Me.unstable_getCurrentPriorityLevel
  , oa = Me.unstable_ImmediatePriority
  , id = Me.unstable_UserBlockingPriority
  , Gi = Me.unstable_NormalPriority
  , jm = Me.unstable_LowPriority
  , od = Me.unstable_IdlePriority
  , Eo = null
  , rt = null;
function Bm(e) {
    if (rt && typeof rt.onCommitFiberRoot == "function")
        try {
            rt.onCommitFiberRoot(Eo, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Ye = Math.clz32 ? Math.clz32 : Hm
  , Um = Math.log
  , Wm = Math.LN2;
function Hm(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Um(e) / Wm | 0) | 0
}
var pi = 64
  , hi = 4194304;
function dr(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Xi(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , o = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var l = s & ~i;
        l !== 0 ? r = dr(l) : (o &= s,
        o !== 0 && (r = dr(o)))
    } else
        s = n & ~i,
        s !== 0 ? r = dr(s) : o !== 0 && (r = dr(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    o = t & -t,
    i >= o || i === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Ye(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function $m(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Qm(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var s = 31 - Ye(o)
          , l = 1 << s
          , a = i[s];
        a === -1 ? (!(l & n) || l & r) && (i[s] = $m(l, t)) : a <= t && (e.expiredLanes |= l),
        o &= ~l
    }
}
function tl(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function sd() {
    var e = pi;
    return pi <<= 1,
    !(pi & 4194240) && (pi = 64),
    e
}
function ts(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function ei(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Ye(t),
    e[t] = n
}
function Km(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - Ye(n)
          , o = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~o
    }
}
function sa(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Ye(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var _ = 0;
function ld(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var ad, la, ud, cd, fd, nl = !1, mi = [], Rt = null, Dt = null, Mt = null, Or = new Map, Fr = new Map, Tt = [], Gm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ku(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Rt = null;
        break;
    case "dragenter":
    case "dragleave":
        Dt = null;
        break;
    case "mouseover":
    case "mouseout":
        Mt = null;
        break;
    case "pointerover":
    case "pointerout":
        Or.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Fr.delete(t.pointerId)
    }
}
function nr(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    },
    t !== null && (t = ni(t),
    t !== null && la(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function Xm(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return Rt = nr(Rt, e, t, n, r, i),
        !0;
    case "dragenter":
        return Dt = nr(Dt, e, t, n, r, i),
        !0;
    case "mouseover":
        return Mt = nr(Mt, e, t, n, r, i),
        !0;
    case "pointerover":
        var o = i.pointerId;
        return Or.set(o, nr(Or.get(o) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return o = i.pointerId,
        Fr.set(o, nr(Fr.get(o) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function dd(e) {
    var t = tn(e.target);
    if (t !== null) {
        var n = gn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = ed(n),
                t !== null) {
                    e.blockedOn = t,
                    fd(e.priority, function() {
                        ud(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Mi(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = rl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Js = r,
            n.target.dispatchEvent(r),
            Js = null
        } else
            return t = ni(n),
            t !== null && la(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Tu(e, t, n) {
    Mi(e) && n.delete(t)
}
function Ym() {
    nl = !1,
    Rt !== null && Mi(Rt) && (Rt = null),
    Dt !== null && Mi(Dt) && (Dt = null),
    Mt !== null && Mi(Mt) && (Mt = null),
    Or.forEach(Tu),
    Fr.forEach(Tu)
}
function rr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    nl || (nl = !0,
    Me.unstable_scheduleCallback(Me.unstable_NormalPriority, Ym)))
}
function zr(e) {
    function t(i) {
        return rr(i, e)
    }
    if (0 < mi.length) {
        rr(mi[0], e);
        for (var n = 1; n < mi.length; n++) {
            var r = mi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Rt !== null && rr(Rt, e),
    Dt !== null && rr(Dt, e),
    Mt !== null && rr(Mt, e),
    Or.forEach(t),
    Fr.forEach(t),
    n = 0; n < Tt.length; n++)
        r = Tt[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Tt.length && (n = Tt[0],
    n.blockedOn === null); )
        dd(n),
        n.blockedOn === null && Tt.shift()
}
var Bn = vt.ReactCurrentBatchConfig
  , Yi = !0;
function Zm(e, t, n, r) {
    var i = _
      , o = Bn.transition;
    Bn.transition = null;
    try {
        _ = 1,
        aa(e, t, n, r)
    } finally {
        _ = i,
        Bn.transition = o
    }
}
function Jm(e, t, n, r) {
    var i = _
      , o = Bn.transition;
    Bn.transition = null;
    try {
        _ = 4,
        aa(e, t, n, r)
    } finally {
        _ = i,
        Bn.transition = o
    }
}
function aa(e, t, n, r) {
    if (Yi) {
        var i = rl(e, t, n, r);
        if (i === null)
            fs(e, t, r, Zi, n),
            ku(e, r);
        else if (Xm(i, e, t, n, r))
            r.stopPropagation();
        else if (ku(e, r),
        t & 4 && -1 < Gm.indexOf(e)) {
            for (; i !== null; ) {
                var o = ni(i);
                if (o !== null && ad(o),
                o = rl(e, t, n, r),
                o === null && fs(e, t, r, Zi, n),
                o === i)
                    break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else
            fs(e, t, r, null, n)
    }
}
var Zi = null;
function rl(e, t, n, r) {
    if (Zi = null,
    e = ia(r),
    e = tn(e),
    e !== null)
        if (t = gn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = ed(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Zi = e,
    null
}
function pd(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Im()) {
        case oa:
            return 1;
        case id:
            return 4;
        case Gi:
        case jm:
            return 16;
        case od:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Vt = null
  , ua = null
  , Ni = null;
function hd() {
    if (Ni)
        return Ni;
    var e, t = ua, n = t.length, r, i = "value"in Vt ? Vt.value : Vt.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++)
        ;
    return Ni = i.slice(e, 1 < r ? 1 - r : void 0)
}
function Oi(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function gi() {
    return !0
}
function Eu() {
    return !1
}
function Fe(e) {
    function t(n, r, i, o, s) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = o,
        this.target = s,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(o) : o[l]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? gi : Eu,
        this.isPropagationStopped = Eu,
        this
    }
    return X(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = gi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = gi)
        },
        persist: function() {},
        isPersistent: gi
    }),
    t
}
var qn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, ca = Fe(qn), ti = X({}, qn, {
    view: 0,
    detail: 0
}), qm = Fe(ti), ns, rs, ir, Ao = X({}, ti, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: fa,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== ir && (ir && e.type === "mousemove" ? (ns = e.screenX - ir.screenX,
        rs = e.screenY - ir.screenY) : rs = ns = 0,
        ir = e),
        ns)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : rs
    }
}), Au = Fe(Ao), bm = X({}, Ao, {
    dataTransfer: 0
}), eg = Fe(bm), tg = X({}, ti, {
    relatedTarget: 0
}), is = Fe(tg), ng = X({}, qn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), rg = Fe(ng), ig = X({}, qn, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), og = Fe(ig), sg = X({}, qn, {
    data: 0
}), Vu = Fe(sg), lg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, ag = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, ug = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function cg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = ug[e]) ? !!t[e] : !1
}
function fa() {
    return cg
}
var fg = X({}, ti, {
    key: function(e) {
        if (e.key) {
            var t = lg[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Oi(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ag[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: fa,
    charCode: function(e) {
        return e.type === "keypress" ? Oi(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Oi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , dg = Fe(fg)
  , pg = X({}, Ao, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Lu = Fe(pg)
  , hg = X({}, ti, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fa
})
  , mg = Fe(hg)
  , gg = X({}, qn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , yg = Fe(gg)
  , vg = X({}, Ao, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , wg = Fe(vg)
  , xg = [9, 13, 27, 32]
  , da = ht && "CompositionEvent"in window
  , yr = null;
ht && "documentMode"in document && (yr = document.documentMode);
var Sg = ht && "TextEvent"in window && !yr
  , md = ht && (!da || yr && 8 < yr && 11 >= yr)
  , Ru = String.fromCharCode(32)
  , Du = !1;
function gd(e, t) {
    switch (e) {
    case "keyup":
        return xg.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function yd(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var kn = !1;
function Pg(e, t) {
    switch (e) {
    case "compositionend":
        return yd(t);
    case "keypress":
        return t.which !== 32 ? null : (Du = !0,
        Ru);
    case "textInput":
        return e = t.data,
        e === Ru && Du ? null : e;
    default:
        return null
    }
}
function Cg(e, t) {
    if (kn)
        return e === "compositionend" || !da && gd(e, t) ? (e = hd(),
        Ni = ua = Vt = null,
        kn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return md && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var kg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Mu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!kg[e.type] : t === "textarea"
}
function vd(e, t, n, r) {
    Yf(r),
    t = Ji(t, "onChange"),
    0 < t.length && (n = new ca("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var vr = null
  , _r = null;
function Tg(e) {
    Ld(e, 0)
}
function Vo(e) {
    var t = An(e);
    if (Wf(t))
        return e
}
function Eg(e, t) {
    if (e === "change")
        return t
}
var wd = !1;
if (ht) {
    var os;
    if (ht) {
        var ss = "oninput"in document;
        if (!ss) {
            var Nu = document.createElement("div");
            Nu.setAttribute("oninput", "return;"),
            ss = typeof Nu.oninput == "function"
        }
        os = ss
    } else
        os = !1;
    wd = os && (!document.documentMode || 9 < document.documentMode)
}
function Ou() {
    vr && (vr.detachEvent("onpropertychange", xd),
    _r = vr = null)
}
function xd(e) {
    if (e.propertyName === "value" && Vo(_r)) {
        var t = [];
        vd(t, _r, e, ia(e)),
        bf(Tg, t)
    }
}
function Ag(e, t, n) {
    e === "focusin" ? (Ou(),
    vr = t,
    _r = n,
    vr.attachEvent("onpropertychange", xd)) : e === "focusout" && Ou()
}
function Vg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Vo(_r)
}
function Lg(e, t) {
    if (e === "click")
        return Vo(t)
}
function Rg(e, t) {
    if (e === "input" || e === "change")
        return Vo(t)
}
function Dg(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Je = typeof Object.is == "function" ? Object.is : Dg;
function Ir(e, t) {
    if (Je(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!js.call(t, i) || !Je(e[i], t[i]))
            return !1
    }
    return !0
}
function Fu(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function zu(e, t) {
    var n = Fu(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Fu(n)
    }
}
function Sd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Sd(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Pd() {
    for (var e = window, t = $i(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = $i(e.document)
    }
    return t
}
function pa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Mg(e) {
    var t = Pd()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Sd(n.ownerDocument.documentElement, n)) {
        if (r !== null && pa(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i),
                !e.extend && o > r && (i = r,
                r = o,
                o = i),
                i = zu(n, o);
                var s = zu(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Ng = ht && "documentMode"in document && 11 >= document.documentMode
  , Tn = null
  , il = null
  , wr = null
  , ol = !1;
function _u(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ol || Tn == null || Tn !== $i(r) || (r = Tn,
    "selectionStart"in r && pa(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    wr && Ir(wr, r) || (wr = r,
    r = Ji(il, "onSelect"),
    0 < r.length && (t = new ca("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Tn)))
}
function yi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var En = {
    animationend: yi("Animation", "AnimationEnd"),
    animationiteration: yi("Animation", "AnimationIteration"),
    animationstart: yi("Animation", "AnimationStart"),
    transitionend: yi("Transition", "TransitionEnd")
}
  , ls = {}
  , Cd = {};
ht && (Cd = document.createElement("div").style,
"AnimationEvent"in window || (delete En.animationend.animation,
delete En.animationiteration.animation,
delete En.animationstart.animation),
"TransitionEvent"in window || delete En.transitionend.transition);
function Lo(e) {
    if (ls[e])
        return ls[e];
    if (!En[e])
        return e;
    var t = En[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Cd)
            return ls[e] = t[n];
    return e
}
var kd = Lo("animationend")
  , Td = Lo("animationiteration")
  , Ed = Lo("animationstart")
  , Ad = Lo("transitionend")
  , Vd = new Map
  , Iu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function $t(e, t) {
    Vd.set(e, t),
    mn(t, [e])
}
for (var as = 0; as < Iu.length; as++) {
    var us = Iu[as]
      , Og = us.toLowerCase()
      , Fg = us[0].toUpperCase() + us.slice(1);
    $t(Og, "on" + Fg)
}
$t(kd, "onAnimationEnd");
$t(Td, "onAnimationIteration");
$t(Ed, "onAnimationStart");
$t("dblclick", "onDoubleClick");
$t("focusin", "onFocus");
$t("focusout", "onBlur");
$t(Ad, "onTransitionEnd");
Hn("onMouseEnter", ["mouseout", "mouseover"]);
Hn("onMouseLeave", ["mouseout", "mouseover"]);
Hn("onPointerEnter", ["pointerout", "pointerover"]);
Hn("onPointerLeave", ["pointerout", "pointerover"]);
mn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
mn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
mn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
mn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
mn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var pr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , zg = new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));
function ju(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    Om(r, t, void 0, e),
    e.currentTarget = null
}
function Ld(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s]
                      , a = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    a !== o && i.isPropagationStopped())
                        break e;
                    ju(i, l, u),
                    o = a
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (l = r[s],
                    a = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    a !== o && i.isPropagationStopped())
                        break e;
                    ju(i, l, u),
                    o = a
                }
        }
    }
    if (Ki)
        throw e = el,
        Ki = !1,
        el = null,
        e
}
function j(e, t) {
    var n = t[cl];
    n === void 0 && (n = t[cl] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Rd(t, e, 2, !1),
    n.add(r))
}
function cs(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Rd(n, e, r, t)
}
var vi = "_reactListening" + Math.random().toString(36).slice(2);
function jr(e) {
    if (!e[vi]) {
        e[vi] = !0,
        _f.forEach(function(n) {
            n !== "selectionchange" && (zg.has(n) || cs(n, !1, e),
            cs(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[vi] || (t[vi] = !0,
        cs("selectionchange", !1, t))
    }
}
function Rd(e, t, n, r) {
    switch (pd(t)) {
    case 1:
        var i = Zm;
        break;
    case 4:
        i = Jm;
        break;
    default:
        i = aa
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !bs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function fs(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var l = r.stateNode.containerInfo;
                if (l === i || l.nodeType === 8 && l.parentNode === i)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var a = s.tag;
                        if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo,
                        a === i || a.nodeType === 8 && a.parentNode === i))
                            return;
                        s = s.return
                    }
                for (; l !== null; ) {
                    if (s = tn(l),
                    s === null)
                        return;
                    if (a = s.tag,
                    a === 5 || a === 6) {
                        r = o = s;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    bf(function() {
        var u = o
          , c = ia(n)
          , f = [];
        e: {
            var d = Vd.get(e);
            if (d !== void 0) {
                var m = ca
                  , y = e;
                switch (e) {
                case "keypress":
                    if (Oi(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    m = dg;
                    break;
                case "focusin":
                    y = "focus",
                    m = is;
                    break;
                case "focusout":
                    y = "blur",
                    m = is;
                    break;
                case "beforeblur":
                case "afterblur":
                    m = is;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    m = Au;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    m = eg;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    m = mg;
                    break;
                case kd:
                case Td:
                case Ed:
                    m = rg;
                    break;
                case Ad:
                    m = yg;
                    break;
                case "scroll":
                    m = qm;
                    break;
                case "wheel":
                    m = wg;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    m = og;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    m = Lu
                }
                var v = (t & 4) !== 0
                  , T = !v && e === "scroll"
                  , g = v ? d !== null ? d + "Capture" : null : d;
                v = [];
                for (var p = u, h; p !== null; ) {
                    h = p;
                    var w = h.stateNode;
                    if (h.tag === 5 && w !== null && (h = w,
                    g !== null && (w = Nr(p, g),
                    w != null && v.push(Br(p, w, h)))),
                    T)
                        break;
                    p = p.return
                }
                0 < v.length && (d = new m(d,y,null,n,c),
                f.push({
                    event: d,
                    listeners: v
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (d = e === "mouseover" || e === "pointerover",
                m = e === "mouseout" || e === "pointerout",
                d && n !== Js && (y = n.relatedTarget || n.fromElement) && (tn(y) || y[mt]))
                    break e;
                if ((m || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window,
                m ? (y = n.relatedTarget || n.toElement,
                m = u,
                y = y ? tn(y) : null,
                y !== null && (T = gn(y),
                y !== T || y.tag !== 5 && y.tag !== 6) && (y = null)) : (m = null,
                y = u),
                m !== y)) {
                    if (v = Au,
                    w = "onMouseLeave",
                    g = "onMouseEnter",
                    p = "mouse",
                    (e === "pointerout" || e === "pointerover") && (v = Lu,
                    w = "onPointerLeave",
                    g = "onPointerEnter",
                    p = "pointer"),
                    T = m == null ? d : An(m),
                    h = y == null ? d : An(y),
                    d = new v(w,p + "leave",m,n,c),
                    d.target = T,
                    d.relatedTarget = h,
                    w = null,
                    tn(c) === u && (v = new v(g,p + "enter",y,n,c),
                    v.target = h,
                    v.relatedTarget = T,
                    w = v),
                    T = w,
                    m && y)
                        t: {
                            for (v = m,
                            g = y,
                            p = 0,
                            h = v; h; h = xn(h))
                                p++;
                            for (h = 0,
                            w = g; w; w = xn(w))
                                h++;
                            for (; 0 < p - h; )
                                v = xn(v),
                                p--;
                            for (; 0 < h - p; )
                                g = xn(g),
                                h--;
                            for (; p--; ) {
                                if (v === g || g !== null && v === g.alternate)
                                    break t;
                                v = xn(v),
                                g = xn(g)
                            }
                            v = null
                        }
                    else
                        v = null;
                    m !== null && Bu(f, d, m, v, !1),
                    y !== null && T !== null && Bu(f, T, y, v, !0)
                }
            }
            e: {
                if (d = u ? An(u) : window,
                m = d.nodeName && d.nodeName.toLowerCase(),
                m === "select" || m === "input" && d.type === "file")
                    var x = Eg;
                else if (Mu(d))
                    if (wd)
                        x = Rg;
                    else {
                        x = Vg;
                        var E = Ag
                    }
                else
                    (m = d.nodeName) && m.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (x = Lg);
                if (x && (x = x(e, u))) {
                    vd(f, x, n, c);
                    break e
                }
                E && E(e, d, u),
                e === "focusout" && (E = d._wrapperState) && E.controlled && d.type === "number" && Ks(d, "number", d.value)
            }
            switch (E = u ? An(u) : window,
            e) {
            case "focusin":
                (Mu(E) || E.contentEditable === "true") && (Tn = E,
                il = u,
                wr = null);
                break;
            case "focusout":
                wr = il = Tn = null;
                break;
            case "mousedown":
                ol = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                ol = !1,
                _u(f, n, c);
                break;
            case "selectionchange":
                if (Ng)
                    break;
            case "keydown":
            case "keyup":
                _u(f, n, c)
            }
            var C;
            if (da)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var P = "onCompositionStart";
                        break e;
                    case "compositionend":
                        P = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        P = "onCompositionUpdate";
                        break e
                    }
                    P = void 0
                }
            else
                kn ? gd(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
            P && (md && n.locale !== "ko" && (kn || P !== "onCompositionStart" ? P === "onCompositionEnd" && kn && (C = hd()) : (Vt = c,
            ua = "value"in Vt ? Vt.value : Vt.textContent,
            kn = !0)),
            E = Ji(u, P),
            0 < E.length && (P = new Vu(P,e,null,n,c),
            f.push({
                event: P,
                listeners: E
            }),
            C ? P.data = C : (C = yd(n),
            C !== null && (P.data = C)))),
            (C = Sg ? Pg(e, n) : Cg(e, n)) && (u = Ji(u, "onBeforeInput"),
            0 < u.length && (c = new Vu("onBeforeInput","beforeinput",null,n,c),
            f.push({
                event: c,
                listeners: u
            }),
            c.data = C))
        }
        Ld(f, t)
    })
}
function Br(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Ji(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , o = i.stateNode;
        i.tag === 5 && o !== null && (i = o,
        o = Nr(e, n),
        o != null && r.unshift(Br(e, o, i)),
        o = Nr(e, t),
        o != null && r.push(Br(e, o, i))),
        e = e.return
    }
    return r
}
function xn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Bu(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
        var l = n
          , a = l.alternate
          , u = l.stateNode;
        if (a !== null && a === r)
            break;
        l.tag === 5 && u !== null && (l = u,
        i ? (a = Nr(n, o),
        a != null && s.unshift(Br(n, a, l))) : i || (a = Nr(n, o),
        a != null && s.push(Br(n, a, l)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var _g = /\r\n?/g
  , Ig = /\u0000|\uFFFD/g;
function Uu(e) {
    return (typeof e == "string" ? e : "" + e).replace(_g, `
`).replace(Ig, "")
}
function wi(e, t, n) {
    if (t = Uu(t),
    Uu(e) !== t && n)
        throw Error(S(425))
}
function qi() {}
var sl = null
  , ll = null;
function al(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var ul = typeof setTimeout == "function" ? setTimeout : void 0
  , jg = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Wu = typeof Promise == "function" ? Promise : void 0
  , Bg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Wu < "u" ? function(e) {
    return Wu.resolve(null).then(e).catch(Ug)
}
: ul;
function Ug(e) {
    setTimeout(function() {
        throw e
    })
}
function ds(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    zr(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    zr(t)
}
function Nt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Hu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var bn = Math.random().toString(36).slice(2)
  , nt = "__reactFiber$" + bn
  , Ur = "__reactProps$" + bn
  , mt = "__reactContainer$" + bn
  , cl = "__reactEvents$" + bn
  , Wg = "__reactListeners$" + bn
  , Hg = "__reactHandles$" + bn;
function tn(e) {
    var t = e[nt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[mt] || n[nt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Hu(e); e !== null; ) {
                    if (n = e[nt])
                        return n;
                    e = Hu(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function ni(e) {
    return e = e[nt] || e[mt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function An(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(S(33))
}
function Ro(e) {
    return e[Ur] || null
}
var fl = []
  , Vn = -1;
function Qt(e) {
    return {
        current: e
    }
}
function B(e) {
    0 > Vn || (e.current = fl[Vn],
    fl[Vn] = null,
    Vn--)
}
function I(e, t) {
    Vn++,
    fl[Vn] = e.current,
    e.current = t
}
var Ut = {}
  , me = Qt(Ut)
  , ke = Qt(!1)
  , an = Ut;
function $n(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Ut;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n)
        i[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function Te(e) {
    return e = e.childContextTypes,
    e != null
}
function bi() {
    B(ke),
    B(me)
}
function $u(e, t, n) {
    if (me.current !== Ut)
        throw Error(S(168));
    I(me, t),
    I(ke, n)
}
function Dd(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(S(108, Am(e) || "Unknown", i));
    return X({}, n, r)
}
function eo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ut,
    an = me.current,
    I(me, e),
    I(ke, ke.current),
    !0
}
function Qu(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(S(169));
    n ? (e = Dd(e, t, an),
    r.__reactInternalMemoizedMergedChildContext = e,
    B(ke),
    B(me),
    I(me, e)) : B(ke),
    I(ke, n)
}
var at = null
  , Do = !1
  , ps = !1;
function Md(e) {
    at === null ? at = [e] : at.push(e)
}
function $g(e) {
    Do = !0,
    Md(e)
}
function Kt() {
    if (!ps && at !== null) {
        ps = !0;
        var e = 0
          , t = _;
        try {
            var n = at;
            for (_ = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            at = null,
            Do = !1
        } catch (i) {
            throw at !== null && (at = at.slice(e + 1)),
            rd(oa, Kt),
            i
        } finally {
            _ = t,
            ps = !1
        }
    }
    return null
}
var Ln = []
  , Rn = 0
  , to = null
  , no = 0
  , je = []
  , Be = 0
  , un = null
  , ut = 1
  , ct = "";
function Jt(e, t) {
    Ln[Rn++] = no,
    Ln[Rn++] = to,
    to = e,
    no = t
}
function Nd(e, t, n) {
    je[Be++] = ut,
    je[Be++] = ct,
    je[Be++] = un,
    un = e;
    var r = ut;
    e = ct;
    var i = 32 - Ye(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var o = 32 - Ye(t) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32),
        r >>= s,
        i -= s,
        ut = 1 << 32 - Ye(t) + i | n << i | r,
        ct = o + e
    } else
        ut = 1 << o | n << i | r,
        ct = e
}
function ha(e) {
    e.return !== null && (Jt(e, 1),
    Nd(e, 1, 0))
}
function ma(e) {
    for (; e === to; )
        to = Ln[--Rn],
        Ln[Rn] = null,
        no = Ln[--Rn],
        Ln[Rn] = null;
    for (; e === un; )
        un = je[--Be],
        je[Be] = null,
        ct = je[--Be],
        je[Be] = null,
        ut = je[--Be],
        je[Be] = null
}
var De = null
  , Re = null
  , U = !1
  , Xe = null;
function Od(e, t) {
    var n = Ue(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Ku(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        De = e,
        Re = Nt(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        De = e,
        Re = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = un !== null ? {
            id: ut,
            overflow: ct
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Ue(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        De = e,
        Re = null,
        !0) : !1;
    default:
        return !1
    }
}
function dl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function pl(e) {
    if (U) {
        var t = Re;
        if (t) {
            var n = t;
            if (!Ku(e, t)) {
                if (dl(e))
                    throw Error(S(418));
                t = Nt(n.nextSibling);
                var r = De;
                t && Ku(e, t) ? Od(r, n) : (e.flags = e.flags & -4097 | 2,
                U = !1,
                De = e)
            }
        } else {
            if (dl(e))
                throw Error(S(418));
            e.flags = e.flags & -4097 | 2,
            U = !1,
            De = e
        }
    }
}
function Gu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    De = e
}
function xi(e) {
    if (e !== De)
        return !1;
    if (!U)
        return Gu(e),
        U = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !al(e.type, e.memoizedProps)),
    t && (t = Re)) {
        if (dl(e))
            throw Fd(),
            Error(S(418));
        for (; t; )
            Od(e, t),
            t = Nt(t.nextSibling)
    }
    if (Gu(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(S(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Re = Nt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Re = null
        }
    } else
        Re = De ? Nt(e.stateNode.nextSibling) : null;
    return !0
}
function Fd() {
    for (var e = Re; e; )
        e = Nt(e.nextSibling)
}
function Qn() {
    Re = De = null,
    U = !1
}
function ga(e) {
    Xe === null ? Xe = [e] : Xe.push(e)
}
var Qg = vt.ReactCurrentBatchConfig;
function Ke(e, t) {
    if (e && e.defaultProps) {
        t = X({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var ro = Qt(null)
  , io = null
  , Dn = null
  , ya = null;
function va() {
    ya = Dn = io = null
}
function wa(e) {
    var t = ro.current;
    B(ro),
    e._currentValue = t
}
function hl(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Un(e, t) {
    io = e,
    ya = Dn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Ce = !0),
    e.firstContext = null)
}
function He(e) {
    var t = e._currentValue;
    if (ya !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Dn === null) {
            if (io === null)
                throw Error(S(308));
            Dn = e,
            io.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Dn = Dn.next = e;
    return t
}
var nn = null;
function xa(e) {
    nn === null ? nn = [e] : nn.push(e)
}
function zd(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    xa(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    gt(e, r)
}
function gt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Ct = !1;
function Sa(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function _d(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function dt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Ot(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    z & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        gt(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    xa(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    gt(e, n)
}
function Fi(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        sa(e, n)
    }
}
function Xu(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s,
                n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else
            i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function oo(e, t, n, r) {
    var i = e.updateQueue;
    Ct = !1;
    var o = i.firstBaseUpdate
      , s = i.lastBaseUpdate
      , l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var a = l
          , u = a.next;
        a.next = null,
        s === null ? o = u : s.next = u,
        s = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        l = c.lastBaseUpdate,
        l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u,
        c.lastBaseUpdate = a))
    }
    if (o !== null) {
        var f = i.baseState;
        s = 0,
        c = u = a = null,
        l = o;
        do {
            var d = l.lane
              , m = l.eventTime;
            if ((r & d) === d) {
                c !== null && (c = c.next = {
                    eventTime: m,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var y = e
                      , v = l;
                    switch (d = t,
                    m = n,
                    v.tag) {
                    case 1:
                        if (y = v.payload,
                        typeof y == "function") {
                            f = y.call(m, f, d);
                            break e
                        }
                        f = y;
                        break e;
                    case 3:
                        y.flags = y.flags & -65537 | 128;
                    case 0:
                        if (y = v.payload,
                        d = typeof y == "function" ? y.call(m, f, d) : y,
                        d == null)
                            break e;
                        f = X({}, f, d);
                        break e;
                    case 2:
                        Ct = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                d = i.effects,
                d === null ? i.effects = [l] : d.push(l))
            } else
                m = {
                    eventTime: m,
                    lane: d,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                c === null ? (u = c = m,
                a = f) : c = c.next = m,
                s |= d;
            if (l = l.next,
            l === null) {
                if (l = i.shared.pending,
                l === null)
                    break;
                d = l,
                l = d.next,
                d.next = null,
                i.lastBaseUpdate = d,
                i.shared.pending = null
            }
        } while (1);
        if (c === null && (a = f),
        i.baseState = a,
        i.firstBaseUpdate = u,
        i.lastBaseUpdate = c,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                s |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            o === null && (i.shared.lanes = 0);
        fn |= s,
        e.lanes = s,
        e.memoizedState = f
    }
}
function Yu(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(S(191, i));
                i.call(r)
            }
        }
}
var Id = new zf.Component().refs;
function ml(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : X({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Mo = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? gn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ve()
          , i = zt(e)
          , o = dt(r, i);
        o.payload = t,
        n != null && (o.callback = n),
        t = Ot(e, o, i),
        t !== null && (Ze(t, e, i, r),
        Fi(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ve()
          , i = zt(e)
          , o = dt(r, i);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = Ot(e, o, i),
        t !== null && (Ze(t, e, i, r),
        Fi(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ve()
          , r = zt(e)
          , i = dt(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = Ot(e, i, r),
        t !== null && (Ze(t, e, r, n),
        Fi(t, e, r))
    }
};
function Zu(e, t, n, r, i, o, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Ir(n, r) || !Ir(i, o) : !0
}
function jd(e, t, n) {
    var r = !1
      , i = Ut
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = He(o) : (i = Te(t) ? an : me.current,
    r = t.contextTypes,
    o = (r = r != null) ? $n(e, i) : Ut),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Mo,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function Ju(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Mo.enqueueReplaceState(t, t.state, null)
}
function gl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = Id,
    Sa(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = He(o) : (o = Te(t) ? an : me.current,
    i.context = $n(e, o)),
    i.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (ml(e, t, o, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && Mo.enqueueReplaceState(i, i.state, null),
    oo(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function or(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(S(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(S(147, e));
            var i = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
                var l = i.refs;
                l === Id && (l = i.refs = {}),
                s === null ? delete l[o] : l[o] = s
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(S(284));
        if (!n._owner)
            throw Error(S(290, e))
    }
    return e
}
function Si(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function qu(e) {
    var t = e._init;
    return t(e._payload)
}
function Bd(e) {
    function t(g, p) {
        if (e) {
            var h = g.deletions;
            h === null ? (g.deletions = [p],
            g.flags |= 16) : h.push(p)
        }
    }
    function n(g, p) {
        if (!e)
            return null;
        for (; p !== null; )
            t(g, p),
            p = p.sibling;
        return null
    }
    function r(g, p) {
        for (g = new Map; p !== null; )
            p.key !== null ? g.set(p.key, p) : g.set(p.index, p),
            p = p.sibling;
        return g
    }
    function i(g, p) {
        return g = _t(g, p),
        g.index = 0,
        g.sibling = null,
        g
    }
    function o(g, p, h) {
        return g.index = h,
        e ? (h = g.alternate,
        h !== null ? (h = h.index,
        h < p ? (g.flags |= 2,
        p) : h) : (g.flags |= 2,
        p)) : (g.flags |= 1048576,
        p)
    }
    function s(g) {
        return e && g.alternate === null && (g.flags |= 2),
        g
    }
    function l(g, p, h, w) {
        return p === null || p.tag !== 6 ? (p = xs(h, g.mode, w),
        p.return = g,
        p) : (p = i(p, h),
        p.return = g,
        p)
    }
    function a(g, p, h, w) {
        var x = h.type;
        return x === Cn ? c(g, p, h.props.children, w, h.key) : p !== null && (p.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Pt && qu(x) === p.type) ? (w = i(p, h.props),
        w.ref = or(g, p, h),
        w.return = g,
        w) : (w = Ui(h.type, h.key, h.props, null, g.mode, w),
        w.ref = or(g, p, h),
        w.return = g,
        w)
    }
    function u(g, p, h, w) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== h.containerInfo || p.stateNode.implementation !== h.implementation ? (p = Ss(h, g.mode, w),
        p.return = g,
        p) : (p = i(p, h.children || []),
        p.return = g,
        p)
    }
    function c(g, p, h, w, x) {
        return p === null || p.tag !== 7 ? (p = ln(h, g.mode, w, x),
        p.return = g,
        p) : (p = i(p, h),
        p.return = g,
        p)
    }
    function f(g, p, h) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = xs("" + p, g.mode, h),
            p.return = g,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case ci:
                return h = Ui(p.type, p.key, p.props, null, g.mode, h),
                h.ref = or(g, null, p),
                h.return = g,
                h;
            case Pn:
                return p = Ss(p, g.mode, h),
                p.return = g,
                p;
            case Pt:
                var w = p._init;
                return f(g, w(p._payload), h)
            }
            if (fr(p) || er(p))
                return p = ln(p, g.mode, h, null),
                p.return = g,
                p;
            Si(g, p)
        }
        return null
    }
    function d(g, p, h, w) {
        var x = p !== null ? p.key : null;
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return x !== null ? null : l(g, p, "" + h, w);
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case ci:
                return h.key === x ? a(g, p, h, w) : null;
            case Pn:
                return h.key === x ? u(g, p, h, w) : null;
            case Pt:
                return x = h._init,
                d(g, p, x(h._payload), w)
            }
            if (fr(h) || er(h))
                return x !== null ? null : c(g, p, h, w, null);
            Si(g, h)
        }
        return null
    }
    function m(g, p, h, w, x) {
        if (typeof w == "string" && w !== "" || typeof w == "number")
            return g = g.get(h) || null,
            l(p, g, "" + w, x);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
            case ci:
                return g = g.get(w.key === null ? h : w.key) || null,
                a(p, g, w, x);
            case Pn:
                return g = g.get(w.key === null ? h : w.key) || null,
                u(p, g, w, x);
            case Pt:
                var E = w._init;
                return m(g, p, h, E(w._payload), x)
            }
            if (fr(w) || er(w))
                return g = g.get(h) || null,
                c(p, g, w, x, null);
            Si(p, w)
        }
        return null
    }
    function y(g, p, h, w) {
        for (var x = null, E = null, C = p, P = p = 0, O = null; C !== null && P < h.length; P++) {
            C.index > P ? (O = C,
            C = null) : O = C.sibling;
            var R = d(g, C, h[P], w);
            if (R === null) {
                C === null && (C = O);
                break
            }
            e && C && R.alternate === null && t(g, C),
            p = o(R, p, P),
            E === null ? x = R : E.sibling = R,
            E = R,
            C = O
        }
        if (P === h.length)
            return n(g, C),
            U && Jt(g, P),
            x;
        if (C === null) {
            for (; P < h.length; P++)
                C = f(g, h[P], w),
                C !== null && (p = o(C, p, P),
                E === null ? x = C : E.sibling = C,
                E = C);
            return U && Jt(g, P),
            x
        }
        for (C = r(g, C); P < h.length; P++)
            O = m(C, g, P, h[P], w),
            O !== null && (e && O.alternate !== null && C.delete(O.key === null ? P : O.key),
            p = o(O, p, P),
            E === null ? x = O : E.sibling = O,
            E = O);
        return e && C.forEach(function(Z) {
            return t(g, Z)
        }),
        U && Jt(g, P),
        x
    }
    function v(g, p, h, w) {
        var x = er(h);
        if (typeof x != "function")
            throw Error(S(150));
        if (h = x.call(h),
        h == null)
            throw Error(S(151));
        for (var E = x = null, C = p, P = p = 0, O = null, R = h.next(); C !== null && !R.done; P++,
        R = h.next()) {
            C.index > P ? (O = C,
            C = null) : O = C.sibling;
            var Z = d(g, C, R.value, w);
            if (Z === null) {
                C === null && (C = O);
                break
            }
            e && C && Z.alternate === null && t(g, C),
            p = o(Z, p, P),
            E === null ? x = Z : E.sibling = Z,
            E = Z,
            C = O
        }
        if (R.done)
            return n(g, C),
            U && Jt(g, P),
            x;
        if (C === null) {
            for (; !R.done; P++,
            R = h.next())
                R = f(g, R.value, w),
                R !== null && (p = o(R, p, P),
                E === null ? x = R : E.sibling = R,
                E = R);
            return U && Jt(g, P),
            x
        }
        for (C = r(g, C); !R.done; P++,
        R = h.next())
            R = m(C, g, P, R.value, w),
            R !== null && (e && R.alternate !== null && C.delete(R.key === null ? P : R.key),
            p = o(R, p, P),
            E === null ? x = R : E.sibling = R,
            E = R);
        return e && C.forEach(function(Se) {
            return t(g, Se)
        }),
        U && Jt(g, P),
        x
    }
    function T(g, p, h, w) {
        if (typeof h == "object" && h !== null && h.type === Cn && h.key === null && (h = h.props.children),
        typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case ci:
                e: {
                    for (var x = h.key, E = p; E !== null; ) {
                        if (E.key === x) {
                            if (x = h.type,
                            x === Cn) {
                                if (E.tag === 7) {
                                    n(g, E.sibling),
                                    p = i(E, h.props.children),
                                    p.return = g,
                                    g = p;
                                    break e
                                }
                            } else if (E.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Pt && qu(x) === E.type) {
                                n(g, E.sibling),
                                p = i(E, h.props),
                                p.ref = or(g, E, h),
                                p.return = g,
                                g = p;
                                break e
                            }
                            n(g, E);
                            break
                        } else
                            t(g, E);
                        E = E.sibling
                    }
                    h.type === Cn ? (p = ln(h.props.children, g.mode, w, h.key),
                    p.return = g,
                    g = p) : (w = Ui(h.type, h.key, h.props, null, g.mode, w),
                    w.ref = or(g, p, h),
                    w.return = g,
                    g = w)
                }
                return s(g);
            case Pn:
                e: {
                    for (E = h.key; p !== null; ) {
                        if (p.key === E)
                            if (p.tag === 4 && p.stateNode.containerInfo === h.containerInfo && p.stateNode.implementation === h.implementation) {
                                n(g, p.sibling),
                                p = i(p, h.children || []),
                                p.return = g,
                                g = p;
                                break e
                            } else {
                                n(g, p);
                                break
                            }
                        else
                            t(g, p);
                        p = p.sibling
                    }
                    p = Ss(h, g.mode, w),
                    p.return = g,
                    g = p
                }
                return s(g);
            case Pt:
                return E = h._init,
                T(g, p, E(h._payload), w)
            }
            if (fr(h))
                return y(g, p, h, w);
            if (er(h))
                return v(g, p, h, w);
            Si(g, h)
        }
        return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h,
        p !== null && p.tag === 6 ? (n(g, p.sibling),
        p = i(p, h),
        p.return = g,
        g = p) : (n(g, p),
        p = xs(h, g.mode, w),
        p.return = g,
        g = p),
        s(g)) : n(g, p)
    }
    return T
}
var Kn = Bd(!0)
  , Ud = Bd(!1)
  , ri = {}
  , it = Qt(ri)
  , Wr = Qt(ri)
  , Hr = Qt(ri);
function rn(e) {
    if (e === ri)
        throw Error(S(174));
    return e
}
function Pa(e, t) {
    switch (I(Hr, t),
    I(Wr, e),
    I(it, ri),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Xs(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Xs(t, e)
    }
    B(it),
    I(it, t)
}
function Gn() {
    B(it),
    B(Wr),
    B(Hr)
}
function Wd(e) {
    rn(Hr.current);
    var t = rn(it.current)
      , n = Xs(t, e.type);
    t !== n && (I(Wr, e),
    I(it, n))
}
function Ca(e) {
    Wr.current === e && (B(it),
    B(Wr))
}
var Q = Qt(0);
function so(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var hs = [];
function ka() {
    for (var e = 0; e < hs.length; e++)
        hs[e]._workInProgressVersionPrimary = null;
    hs.length = 0
}
var zi = vt.ReactCurrentDispatcher
  , ms = vt.ReactCurrentBatchConfig
  , cn = 0
  , G = null
  , re = null
  , oe = null
  , lo = !1
  , xr = !1
  , $r = 0
  , Kg = 0;
function fe() {
    throw Error(S(321))
}
function Ta(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Je(e[n], t[n]))
            return !1;
    return !0
}
function Ea(e, t, n, r, i, o) {
    if (cn = o,
    G = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    zi.current = e === null || e.memoizedState === null ? Zg : Jg,
    e = n(r, i),
    xr) {
        o = 0;
        do {
            if (xr = !1,
            $r = 0,
            25 <= o)
                throw Error(S(301));
            o += 1,
            oe = re = null,
            t.updateQueue = null,
            zi.current = qg,
            e = n(r, i)
        } while (xr)
    }
    if (zi.current = ao,
    t = re !== null && re.next !== null,
    cn = 0,
    oe = re = G = null,
    lo = !1,
    t)
        throw Error(S(300));
    return e
}
function Aa() {
    var e = $r !== 0;
    return $r = 0,
    e
}
function et() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return oe === null ? G.memoizedState = oe = e : oe = oe.next = e,
    oe
}
function $e() {
    if (re === null) {
        var e = G.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = re.next;
    var t = oe === null ? G.memoizedState : oe.next;
    if (t !== null)
        oe = t,
        re = e;
    else {
        if (e === null)
            throw Error(S(310));
        re = e,
        e = {
            memoizedState: re.memoizedState,
            baseState: re.baseState,
            baseQueue: re.baseQueue,
            queue: re.queue,
            next: null
        },
        oe === null ? G.memoizedState = oe = e : oe = oe.next = e
    }
    return oe
}
function Qr(e, t) {
    return typeof t == "function" ? t(e) : t
}
function gs(e) {
    var t = $e()
      , n = t.queue;
    if (n === null)
        throw Error(S(311));
    n.lastRenderedReducer = e;
    var r = re
      , i = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next,
            o.next = s
        }
        r.baseQueue = i = o,
        n.pending = null
    }
    if (i !== null) {
        o = i.next,
        r = r.baseState;
        var l = s = null
          , a = null
          , u = o;
        do {
            var c = u.lane;
            if ((cn & c) === c)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = f,
                s = r) : a = a.next = f,
                G.lanes |= c,
                fn |= c
            }
            u = u.next
        } while (u !== null && u !== o);
        a === null ? s = r : a.next = l,
        Je(r, t.memoizedState) || (Ce = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            o = i.lane,
            G.lanes |= o,
            fn |= o,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function ys(e) {
    var t = $e()
      , n = t.queue;
    if (n === null)
        throw Error(S(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do
            o = e(o, s.action),
            s = s.next;
        while (s !== i);
        Je(o, t.memoizedState) || (Ce = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function Hd() {}
function $d(e, t) {
    var n = G
      , r = $e()
      , i = t()
      , o = !Je(r.memoizedState, i);
    if (o && (r.memoizedState = i,
    Ce = !0),
    r = r.queue,
    Va(Gd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || oe !== null && oe.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Kr(9, Kd.bind(null, n, r, i, t), void 0, null),
        se === null)
            throw Error(S(349));
        cn & 30 || Qd(n, t, i)
    }
    return i
}
function Qd(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = G.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    G.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Kd(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Xd(t) && Yd(e)
}
function Gd(e, t, n) {
    return n(function() {
        Xd(t) && Yd(e)
    })
}
function Xd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Je(e, n)
    } catch {
        return !0
    }
}
function Yd(e) {
    var t = gt(e, 1);
    t !== null && Ze(t, e, 1, -1)
}
function bu(e) {
    var t = et();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qr,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Yg.bind(null, G, e),
    [t.memoizedState, e]
}
function Kr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = G.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    G.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Zd() {
    return $e().memoizedState
}
function _i(e, t, n, r) {
    var i = et();
    G.flags |= e,
    i.memoizedState = Kr(1 | t, n, void 0, r === void 0 ? null : r)
}
function No(e, t, n, r) {
    var i = $e();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (re !== null) {
        var s = re.memoizedState;
        if (o = s.destroy,
        r !== null && Ta(r, s.deps)) {
            i.memoizedState = Kr(t, n, o, r);
            return
        }
    }
    G.flags |= e,
    i.memoizedState = Kr(1 | t, n, o, r)
}
function ec(e, t) {
    return _i(8390656, 8, e, t)
}
function Va(e, t) {
    return No(2048, 8, e, t)
}
function Jd(e, t) {
    return No(4, 2, e, t)
}
function qd(e, t) {
    return No(4, 4, e, t)
}
function bd(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function ep(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    No(4, 4, bd.bind(null, t, e), n)
}
function La() {}
function tp(e, t) {
    var n = $e();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ta(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function np(e, t) {
    var n = $e();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ta(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function rp(e, t, n) {
    return cn & 21 ? (Je(n, t) || (n = sd(),
    G.lanes |= n,
    fn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Ce = !0),
    e.memoizedState = n)
}
function Gg(e, t) {
    var n = _;
    _ = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = ms.transition;
    ms.transition = {};
    try {
        e(!1),
        t()
    } finally {
        _ = n,
        ms.transition = r
    }
}
function ip() {
    return $e().memoizedState
}
function Xg(e, t, n) {
    var r = zt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    op(e))
        sp(t, n);
    else if (n = zd(e, t, n, r),
    n !== null) {
        var i = ve();
        Ze(n, e, r, i),
        lp(n, t, r)
    }
}
function Yg(e, t, n) {
    var r = zt(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (op(e))
        sp(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var s = t.lastRenderedState
                  , l = o(s, n);
                if (i.hasEagerState = !0,
                i.eagerState = l,
                Je(l, s)) {
                    var a = t.interleaved;
                    a === null ? (i.next = i,
                    xa(t)) : (i.next = a.next,
                    a.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = zd(e, t, i, r),
        n !== null && (i = ve(),
        Ze(n, e, r, i),
        lp(n, t, r))
    }
}
function op(e) {
    var t = e.alternate;
    return e === G || t !== null && t === G
}
function sp(e, t) {
    xr = lo = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function lp(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        sa(e, n)
    }
}
var ao = {
    readContext: He,
    useCallback: fe,
    useContext: fe,
    useEffect: fe,
    useImperativeHandle: fe,
    useInsertionEffect: fe,
    useLayoutEffect: fe,
    useMemo: fe,
    useReducer: fe,
    useRef: fe,
    useState: fe,
    useDebugValue: fe,
    useDeferredValue: fe,
    useTransition: fe,
    useMutableSource: fe,
    useSyncExternalStore: fe,
    useId: fe,
    unstable_isNewReconciler: !1
}
  , Zg = {
    readContext: He,
    useCallback: function(e, t) {
        return et().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: He,
    useEffect: ec,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        _i(4194308, 4, bd.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return _i(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return _i(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = et();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = et();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Xg.bind(null, G, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = et();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: bu,
    useDebugValue: La,
    useDeferredValue: function(e) {
        return et().memoizedState = e
    },
    useTransition: function() {
        var e = bu(!1)
          , t = e[0];
        return e = Gg.bind(null, e[1]),
        et().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = G
          , i = et();
        if (U) {
            if (n === void 0)
                throw Error(S(407));
            n = n()
        } else {
            if (n = t(),
            se === null)
                throw Error(S(349));
            cn & 30 || Qd(r, t, n)
        }
        i.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return i.queue = o,
        ec(Gd.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        Kr(9, Kd.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = et()
          , t = se.identifierPrefix;
        if (U) {
            var n = ct
              , r = ut;
            n = (r & ~(1 << 32 - Ye(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = $r++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = Kg++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Jg = {
    readContext: He,
    useCallback: tp,
    useContext: He,
    useEffect: Va,
    useImperativeHandle: ep,
    useInsertionEffect: Jd,
    useLayoutEffect: qd,
    useMemo: np,
    useReducer: gs,
    useRef: Zd,
    useState: function() {
        return gs(Qr)
    },
    useDebugValue: La,
    useDeferredValue: function(e) {
        var t = $e();
        return rp(t, re.memoizedState, e)
    },
    useTransition: function() {
        var e = gs(Qr)[0]
          , t = $e().memoizedState;
        return [e, t]
    },
    useMutableSource: Hd,
    useSyncExternalStore: $d,
    useId: ip,
    unstable_isNewReconciler: !1
}
  , qg = {
    readContext: He,
    useCallback: tp,
    useContext: He,
    useEffect: Va,
    useImperativeHandle: ep,
    useInsertionEffect: Jd,
    useLayoutEffect: qd,
    useMemo: np,
    useReducer: ys,
    useRef: Zd,
    useState: function() {
        return ys(Qr)
    },
    useDebugValue: La,
    useDeferredValue: function(e) {
        var t = $e();
        return re === null ? t.memoizedState = e : rp(t, re.memoizedState, e)
    },
    useTransition: function() {
        var e = ys(Qr)[0]
          , t = $e().memoizedState;
        return [e, t]
    },
    useMutableSource: Hd,
    useSyncExternalStore: $d,
    useId: ip,
    unstable_isNewReconciler: !1
};
function Xn(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Em(r),
            r = r.return;
        while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function vs(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function yl(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var bg = typeof WeakMap == "function" ? WeakMap : Map;
function ap(e, t, n) {
    n = dt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        co || (co = !0,
        Al = r),
        yl(e, t)
    }
    ,
    n
}
function up(e, t, n) {
    n = dt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            yl(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        yl(e, t),
        typeof r != "function" && (Ft === null ? Ft = new Set([this]) : Ft.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function tc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new bg;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = py.bind(null, e, t, n),
    t.then(e, e))
}
function nc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function rc(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = dt(-1, 1),
    t.tag = 2,
    Ot(n, t, 1))),
    n.lanes |= 1),
    e)
}
var ey = vt.ReactCurrentOwner
  , Ce = !1;
function ye(e, t, n, r) {
    t.child = e === null ? Ud(t, null, n, r) : Kn(t, e.child, n, r)
}
function ic(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return Un(t, i),
    r = Ea(e, t, n, r, o, i),
    n = Aa(),
    e !== null && !Ce ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    yt(e, t, i)) : (U && n && ha(t),
    t.flags |= 1,
    ye(e, t, r, i),
    t.child)
}
function oc(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !_a(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        cp(e, t, o, r, i)) : (e = Ui(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Ir,
        n(s, r) && e.ref === t.ref)
            return yt(e, t, i)
    }
    return t.flags |= 1,
    e = _t(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function cp(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Ir(o, r) && e.ref === t.ref)
            if (Ce = !1,
            t.pendingProps = r = o,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (Ce = !0);
            else
                return t.lanes = e.lanes,
                yt(e, t, i)
    }
    return vl(e, t, n, r, i)
}
function fp(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            I(Nn, Le),
            Le |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                I(Nn, Le),
                Le |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            I(Nn, Le),
            Le |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        I(Nn, Le),
        Le |= r;
    return ye(e, t, i, n),
    t.child
}
function dp(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function vl(e, t, n, r, i) {
    var o = Te(n) ? an : me.current;
    return o = $n(t, o),
    Un(t, i),
    n = Ea(e, t, n, r, o, i),
    r = Aa(),
    e !== null && !Ce ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    yt(e, t, i)) : (U && r && ha(t),
    t.flags |= 1,
    ye(e, t, n, i),
    t.child)
}
function sc(e, t, n, r, i) {
    if (Te(n)) {
        var o = !0;
        eo(t)
    } else
        o = !1;
    if (Un(t, i),
    t.stateNode === null)
        Ii(e, t),
        jd(t, n, r),
        gl(t, n, r, i),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , l = t.memoizedProps;
        s.props = l;
        var a = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = He(u) : (u = Te(n) ? an : me.current,
        u = $n(t, u));
        var c = n.getDerivedStateFromProps
          , f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && Ju(t, s, r, u),
        Ct = !1;
        var d = t.memoizedState;
        s.state = d,
        oo(t, r, s, i),
        a = t.memoizedState,
        l !== r || d !== a || ke.current || Ct ? (typeof c == "function" && (ml(t, n, c, r),
        a = t.memoizedState),
        (l = Ct || Zu(t, n, l, r, d, a, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        s.props = r,
        s.state = a,
        s.context = u,
        r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        _d(e, t),
        l = t.memoizedProps,
        u = t.type === t.elementType ? l : Ke(t.type, l),
        s.props = u,
        f = t.pendingProps,
        d = s.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = He(a) : (a = Te(n) ? an : me.current,
        a = $n(t, a));
        var m = n.getDerivedStateFromProps;
        (c = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== f || d !== a) && Ju(t, s, r, a),
        Ct = !1,
        d = t.memoizedState,
        s.state = d,
        oo(t, r, s, i);
        var y = t.memoizedState;
        l !== f || d !== y || ke.current || Ct ? (typeof m == "function" && (ml(t, n, m, r),
        y = t.memoizedState),
        (u = Ct || Zu(t, n, u, r, d, y, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, a),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, a)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = y),
        s.props = r,
        s.state = y,
        s.context = a,
        r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return wl(e, t, n, r, o, i)
}
function wl(e, t, n, r, i, o) {
    dp(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return i && Qu(t, n, !1),
        yt(e, t, o);
    r = t.stateNode,
    ey.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = Kn(t, e.child, null, o),
    t.child = Kn(t, null, l, o)) : ye(e, t, l, o),
    t.memoizedState = r.state,
    i && Qu(t, n, !0),
    t.child
}
function pp(e) {
    var t = e.stateNode;
    t.pendingContext ? $u(e, t.pendingContext, t.pendingContext !== t.context) : t.context && $u(e, t.context, !1),
    Pa(e, t.containerInfo)
}
function lc(e, t, n, r, i) {
    return Qn(),
    ga(i),
    t.flags |= 256,
    ye(e, t, n, r),
    t.child
}
var xl = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Sl(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function hp(e, t, n) {
    var r = t.pendingProps, i = Q.current, o = !1, s = (t.flags & 128) !== 0, l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    I(Q, i & 1),
    e === null)
        return pl(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = s) : o = zo(s, r, 0, null),
        e = ln(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = Sl(n),
        t.memoizedState = xl,
        e) : Ra(t, s));
    if (i = e.memoizedState,
    i !== null && (l = i.dehydrated,
    l !== null))
        return ty(e, t, s, r, l, i, n);
    if (o) {
        o = r.fallback,
        s = t.mode,
        i = e.child,
        l = i.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = _t(i, a),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        l !== null ? o = _t(l, o) : (o = ln(o, s, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        s = e.child.memoizedState,
        s = s === null ? Sl(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        o.memoizedState = s,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = xl,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = _t(o, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Ra(e, t) {
    return t = zo({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Pi(e, t, n, r) {
    return r !== null && ga(r),
    Kn(t, e.child, null, n),
    e = Ra(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function ty(e, t, n, r, i, o, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = vs(Error(S(422))),
        Pi(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        i = t.mode,
        r = zo({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        o = ln(o, i, s, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && Kn(t, e.child, null, s),
        t.child.memoizedState = Sl(s),
        t.memoizedState = xl,
        o);
    if (!(t.mode & 1))
        return Pi(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        o = Error(S(419)),
        r = vs(o, r, void 0),
        Pi(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0,
    Ce || l) {
        if (r = se,
        r !== null) {
            switch (s & -s) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i,
            i !== 0 && i !== o.retryLane && (o.retryLane = i,
            gt(e, i),
            Ze(r, e, i, -1))
        }
        return za(),
        r = vs(Error(S(421))),
        Pi(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = hy.bind(null, e),
    i._reactRetry = t,
    null) : (e = o.treeContext,
    Re = Nt(i.nextSibling),
    De = t,
    U = !0,
    Xe = null,
    e !== null && (je[Be++] = ut,
    je[Be++] = ct,
    je[Be++] = un,
    ut = e.id,
    ct = e.overflow,
    un = t),
    t = Ra(t, r.children),
    t.flags |= 4096,
    t)
}
function ac(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    hl(e.return, t, n)
}
function ws(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = i)
}
function mp(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , o = r.tail;
    if (ye(e, t, r.children, n),
    r = Q.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && ac(e, n, t);
                else if (e.tag === 19)
                    ac(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (I(Q, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && so(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            ws(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && so(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            ws(t, !0, n, null, o);
            break;
        case "together":
            ws(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Ii(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function yt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    fn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(S(153));
    if (t.child !== null) {
        for (e = t.child,
        n = _t(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = _t(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function ny(e, t, n) {
    switch (t.tag) {
    case 3:
        pp(t),
        Qn();
        break;
    case 5:
        Wd(t);
        break;
    case 1:
        Te(t.type) && eo(t);
        break;
    case 4:
        Pa(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        I(ro, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (I(Q, Q.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? hp(e, t, n) : (I(Q, Q.current & 1),
            e = yt(e, t, n),
            e !== null ? e.sibling : null);
        I(Q, Q.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return mp(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        I(Q, Q.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        fp(e, t, n)
    }
    return yt(e, t, n)
}
var gp, Pl, yp, vp;
gp = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Pl = function() {}
;
yp = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        rn(it.current);
        var o = null;
        switch (n) {
        case "input":
            i = $s(e, i),
            r = $s(e, r),
            o = [];
            break;
        case "select":
            i = X({}, i, {
                value: void 0
            }),
            r = X({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            i = Gs(e, i),
            r = Gs(e, r),
            o = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = qi)
        }
        Ys(n, r);
        var s;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var l = i[u];
                    for (s in l)
                        l.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Dr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = i != null ? i[u] : void 0,
            r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (s in l)
                            !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in a)
                            a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}),
                            n[s] = a[s])
                    } else
                        n || (o || (o = []),
                        o.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    l = l ? l.__html : void 0,
                    a != null && l !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Dr.hasOwnProperty(u) ? (a != null && u === "onScroll" && j("scroll", e),
                    o || l === a || (o = [])) : (o = o || []).push(u, a))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
vp = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function sr(e, t) {
    if (!U)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function de(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function ry(e, t, n) {
    var r = t.pendingProps;
    switch (ma(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return de(t),
        null;
    case 1:
        return Te(t.type) && bi(),
        de(t),
        null;
    case 3:
        return r = t.stateNode,
        Gn(),
        B(ke),
        B(me),
        ka(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (xi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Xe !== null && (Rl(Xe),
        Xe = null))),
        Pl(e, t),
        de(t),
        null;
    case 5:
        Ca(t);
        var i = rn(Hr.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            yp(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(S(166));
                return de(t),
                null
            }
            if (e = rn(it.current),
            xi(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[nt] = t,
                r[Ur] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    j("cancel", r),
                    j("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    j("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < pr.length; i++)
                        j(pr[i], r);
                    break;
                case "source":
                    j("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    j("error", r),
                    j("load", r);
                    break;
                case "details":
                    j("toggle", r);
                    break;
                case "input":
                    yu(r, o),
                    j("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    j("invalid", r);
                    break;
                case "textarea":
                    wu(r, o),
                    j("invalid", r)
                }
                Ys(n, o),
                i = null;
                for (var s in o)
                    if (o.hasOwnProperty(s)) {
                        var l = o[s];
                        s === "children" ? typeof l == "string" ? r.textContent !== l && (o.suppressHydrationWarning !== !0 && wi(r.textContent, l, e),
                        i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && wi(r.textContent, l, e),
                        i = ["children", "" + l]) : Dr.hasOwnProperty(s) && l != null && s === "onScroll" && j("scroll", r)
                    }
                switch (n) {
                case "input":
                    fi(r),
                    vu(r, o, !0);
                    break;
                case "textarea":
                    fi(r),
                    xu(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = qi)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Qf(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[nt] = t,
                e[Ur] = r,
                gp(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = Zs(n, r),
                    n) {
                    case "dialog":
                        j("cancel", e),
                        j("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        j("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < pr.length; i++)
                            j(pr[i], e);
                        i = r;
                        break;
                    case "source":
                        j("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        j("error", e),
                        j("load", e),
                        i = r;
                        break;
                    case "details":
                        j("toggle", e),
                        i = r;
                        break;
                    case "input":
                        yu(e, r),
                        i = $s(e, r),
                        j("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = X({}, r, {
                            value: void 0
                        }),
                        j("invalid", e);
                        break;
                    case "textarea":
                        wu(e, r),
                        i = Gs(e, r),
                        j("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    Ys(n, i),
                    l = i;
                    for (o in l)
                        if (l.hasOwnProperty(o)) {
                            var a = l[o];
                            o === "style" ? Xf(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && Kf(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Mr(e, a) : typeof a == "number" && Mr(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Dr.hasOwnProperty(o) ? a != null && o === "onScroll" && j("scroll", e) : a != null && ea(e, o, a, s))
                        }
                    switch (n) {
                    case "input":
                        fi(e),
                        vu(e, r, !1);
                        break;
                    case "textarea":
                        fi(e),
                        xu(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Bt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? _n(e, !!r.multiple, o, !1) : r.defaultValue != null && _n(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = qi)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return de(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            vp(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(S(166));
            if (n = rn(Hr.current),
            rn(it.current),
            xi(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[nt] = t,
                (o = r.nodeValue !== n) && (e = De,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        wi(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && wi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[nt] = t,
                t.stateNode = r
        }
        return de(t),
        null;
    case 13:
        if (B(Q),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (U && Re !== null && t.mode & 1 && !(t.flags & 128))
                Fd(),
                Qn(),
                t.flags |= 98560,
                o = !1;
            else if (o = xi(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(S(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(S(317));
                    o[nt] = t
                } else
                    Qn(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                de(t),
                o = !1
            } else
                Xe !== null && (Rl(Xe),
                Xe = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || Q.current & 1 ? ie === 0 && (ie = 3) : za())),
        t.updateQueue !== null && (t.flags |= 4),
        de(t),
        null);
    case 4:
        return Gn(),
        Pl(e, t),
        e === null && jr(t.stateNode.containerInfo),
        de(t),
        null;
    case 10:
        return wa(t.type._context),
        de(t),
        null;
    case 17:
        return Te(t.type) && bi(),
        de(t),
        null;
    case 19:
        if (B(Q),
        o = t.memoizedState,
        o === null)
            return de(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = o.rendering,
        s === null)
            if (r)
                sr(o, !1);
            else {
                if (ie !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = so(e),
                        s !== null) {
                            for (t.flags |= 128,
                            sr(o, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                s = o.alternate,
                                s === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = s.childLanes,
                                o.lanes = s.lanes,
                                o.child = s.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = s.memoizedProps,
                                o.memoizedState = s.memoizedState,
                                o.updateQueue = s.updateQueue,
                                o.type = s.type,
                                e = s.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return I(Q, Q.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && b() > Yn && (t.flags |= 128,
                r = !0,
                sr(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = so(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    sr(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !s.alternate && !U)
                        return de(t),
                        null
                } else
                    2 * b() - o.renderingStartTime > Yn && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    sr(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = o.last,
            n !== null ? n.sibling = s : t.child = s,
            o.last = s)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = b(),
        t.sibling = null,
        n = Q.current,
        I(Q, r ? n & 1 | 2 : n & 1),
        t) : (de(t),
        null);
    case 22:
    case 23:
        return Fa(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Le & 1073741824 && (de(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : de(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(S(156, t.tag))
}
function iy(e, t) {
    switch (ma(t),
    t.tag) {
    case 1:
        return Te(t.type) && bi(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Gn(),
        B(ke),
        B(me),
        ka(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Ca(t),
        null;
    case 13:
        if (B(Q),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(S(340));
            Qn()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return B(Q),
        null;
    case 4:
        return Gn(),
        null;
    case 10:
        return wa(t.type._context),
        null;
    case 22:
    case 23:
        return Fa(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Ci = !1
  , pe = !1
  , oy = typeof WeakSet == "function" ? WeakSet : Set
  , V = null;
function Mn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                Y(e, t, r)
            }
        else
            n.current = null
}
function Cl(e, t, n) {
    try {
        n()
    } catch (r) {
        Y(e, t, r)
    }
}
var uc = !1;
function sy(e, t) {
    if (sl = Yi,
    e = Pd(),
    pa(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , l = -1
                      , a = -1
                      , u = 0
                      , c = 0
                      , f = e
                      , d = null;
                    t: for (; ; ) {
                        for (var m; f !== n || i !== 0 && f.nodeType !== 3 || (l = s + i),
                        f !== o || r !== 0 && f.nodeType !== 3 || (a = s + r),
                        f.nodeType === 3 && (s += f.nodeValue.length),
                        (m = f.firstChild) !== null; )
                            d = f,
                            f = m;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (d === n && ++u === i && (l = s),
                            d === o && ++c === r && (a = s),
                            (m = f.nextSibling) !== null)
                                break;
                            f = d,
                            d = f.parentNode
                        }
                        f = m
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (ll = {
        focusedElem: e,
        selectionRange: n
    },
    Yi = !1,
    V = t; V !== null; )
        if (t = V,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            V = e;
        else
            for (; V !== null; ) {
                t = V;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var v = y.memoizedProps
                                  , T = y.memoizedState
                                  , g = t.stateNode
                                  , p = g.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Ke(t.type, v), T);
                                g.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var h = t.stateNode.containerInfo;
                            h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(S(163))
                        }
                } catch (w) {
                    Y(t, t.return, w)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    V = e;
                    break
                }
                V = t.return
            }
    return y = uc,
    uc = !1,
    y
}
function Sr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0,
                o !== void 0 && Cl(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}
function Oo(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function kl(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function wp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    wp(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[nt],
    delete t[Ur],
    delete t[cl],
    delete t[Wg],
    delete t[Hg])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function xp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function cc(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || xp(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Tl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = qi));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Tl(e, t, n),
        e = e.sibling; e !== null; )
            Tl(e, t, n),
            e = e.sibling
}
function El(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (El(e, t, n),
        e = e.sibling; e !== null; )
            El(e, t, n),
            e = e.sibling
}
var le = null
  , Ge = !1;
function xt(e, t, n) {
    for (n = n.child; n !== null; )
        Sp(e, t, n),
        n = n.sibling
}
function Sp(e, t, n) {
    if (rt && typeof rt.onCommitFiberUnmount == "function")
        try {
            rt.onCommitFiberUnmount(Eo, n)
        } catch {}
    switch (n.tag) {
    case 5:
        pe || Mn(n, t);
    case 6:
        var r = le
          , i = Ge;
        le = null,
        xt(e, t, n),
        le = r,
        Ge = i,
        le !== null && (Ge ? (e = le,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : le.removeChild(n.stateNode));
        break;
    case 18:
        le !== null && (Ge ? (e = le,
        n = n.stateNode,
        e.nodeType === 8 ? ds(e.parentNode, n) : e.nodeType === 1 && ds(e, n),
        zr(e)) : ds(le, n.stateNode));
        break;
    case 4:
        r = le,
        i = Ge,
        le = n.stateNode.containerInfo,
        Ge = !0,
        xt(e, t, n),
        le = r,
        Ge = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!pe && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var o = i
                  , s = o.destroy;
                o = o.tag,
                s !== void 0 && (o & 2 || o & 4) && Cl(n, t, s),
                i = i.next
            } while (i !== r)
        }
        xt(e, t, n);
        break;
    case 1:
        if (!pe && (Mn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                Y(n, t, l)
            }
        xt(e, t, n);
        break;
    case 21:
        xt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (pe = (r = pe) || n.memoizedState !== null,
        xt(e, t, n),
        pe = r) : xt(e, t, n);
        break;
    default:
        xt(e, t, n)
    }
}
function fc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new oy),
        t.forEach(function(r) {
            var i = my.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function Qe(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e
                  , s = t
                  , l = s;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        le = l.stateNode,
                        Ge = !1;
                        break e;
                    case 3:
                        le = l.stateNode.containerInfo,
                        Ge = !0;
                        break e;
                    case 4:
                        le = l.stateNode.containerInfo,
                        Ge = !0;
                        break e
                    }
                    l = l.return
                }
                if (le === null)
                    throw Error(S(160));
                Sp(o, s, i),
                le = null,
                Ge = !1;
                var a = i.alternate;
                a !== null && (a.return = null),
                i.return = null
            } catch (u) {
                Y(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Pp(t, e),
            t = t.sibling
}
function Pp(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Qe(t, e),
        be(e),
        r & 4) {
            try {
                Sr(3, e, e.return),
                Oo(3, e)
            } catch (v) {
                Y(e, e.return, v)
            }
            try {
                Sr(5, e, e.return)
            } catch (v) {
                Y(e, e.return, v)
            }
        }
        break;
    case 1:
        Qe(t, e),
        be(e),
        r & 512 && n !== null && Mn(n, n.return);
        break;
    case 5:
        if (Qe(t, e),
        be(e),
        r & 512 && n !== null && Mn(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                Mr(i, "")
            } catch (v) {
                Y(e, e.return, v)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var o = e.memoizedProps
              , s = n !== null ? n.memoizedProps : o
              , l = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    l === "input" && o.type === "radio" && o.name != null && Hf(i, o),
                    Zs(l, s);
                    var u = Zs(l, o);
                    for (s = 0; s < a.length; s += 2) {
                        var c = a[s]
                          , f = a[s + 1];
                        c === "style" ? Xf(i, f) : c === "dangerouslySetInnerHTML" ? Kf(i, f) : c === "children" ? Mr(i, f) : ea(i, c, f, u)
                    }
                    switch (l) {
                    case "input":
                        Qs(i, o);
                        break;
                    case "textarea":
                        $f(i, o);
                        break;
                    case "select":
                        var d = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var m = o.value;
                        m != null ? _n(i, !!o.multiple, m, !1) : d !== !!o.multiple && (o.defaultValue != null ? _n(i, !!o.multiple, o.defaultValue, !0) : _n(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[Ur] = o
                } catch (v) {
                    Y(e, e.return, v)
                }
        }
        break;
    case 6:
        if (Qe(t, e),
        be(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(S(162));
            i = e.stateNode,
            o = e.memoizedProps;
            try {
                i.nodeValue = o
            } catch (v) {
                Y(e, e.return, v)
            }
        }
        break;
    case 3:
        if (Qe(t, e),
        be(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                zr(t.containerInfo)
            } catch (v) {
                Y(e, e.return, v)
            }
        break;
    case 4:
        Qe(t, e),
        be(e);
        break;
    case 13:
        Qe(t, e),
        be(e),
        i = e.child,
        i.flags & 8192 && (o = i.memoizedState !== null,
        i.stateNode.isHidden = o,
        !o || i.alternate !== null && i.alternate.memoizedState !== null || (Na = b())),
        r & 4 && fc(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (pe = (u = pe) || c,
        Qe(t, e),
        pe = u) : Qe(t, e),
        be(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (V = e,
                c = e.child; c !== null; ) {
                    for (f = V = c; V !== null; ) {
                        switch (d = V,
                        m = d.child,
                        d.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Sr(4, d, d.return);
                            break;
                        case 1:
                            Mn(d, d.return);
                            var y = d.stateNode;
                            if (typeof y.componentWillUnmount == "function") {
                                r = d,
                                n = d.return;
                                try {
                                    t = r,
                                    y.props = t.memoizedProps,
                                    y.state = t.memoizedState,
                                    y.componentWillUnmount()
                                } catch (v) {
                                    Y(r, n, v)
                                }
                            }
                            break;
                        case 5:
                            Mn(d, d.return);
                            break;
                        case 22:
                            if (d.memoizedState !== null) {
                                pc(f);
                                continue
                            }
                        }
                        m !== null ? (m.return = d,
                        V = m) : pc(f)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (c === null) {
                        c = f;
                        try {
                            i = f.stateNode,
                            u ? (o = i.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = f.stateNode,
                            a = f.memoizedProps.style,
                            s = a != null && a.hasOwnProperty("display") ? a.display : null,
                            l.style.display = Gf("display", s))
                        } catch (v) {
                            Y(e, e.return, v)
                        }
                    }
                } else if (f.tag === 6) {
                    if (c === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (v) {
                            Y(e, e.return, v)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    c === f && (c = null),
                    f = f.return
                }
                c === f && (c = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        Qe(t, e),
        be(e),
        r & 4 && fc(e);
        break;
    case 21:
        break;
    default:
        Qe(t, e),
        be(e)
    }
}
function be(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (xp(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(S(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (Mr(i, ""),
                r.flags &= -33);
                var o = cc(e);
                El(e, o, i);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , l = cc(e);
                Tl(e, l, s);
                break;
            default:
                throw Error(S(161))
            }
        } catch (a) {
            Y(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function ly(e, t, n) {
    V = e,
    Cp(e)
}
function Cp(e, t, n) {
    for (var r = (e.mode & 1) !== 0; V !== null; ) {
        var i = V
          , o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || Ci;
            if (!s) {
                var l = i.alternate
                  , a = l !== null && l.memoizedState !== null || pe;
                l = Ci;
                var u = pe;
                if (Ci = s,
                (pe = a) && !u)
                    for (V = i; V !== null; )
                        s = V,
                        a = s.child,
                        s.tag === 22 && s.memoizedState !== null ? hc(i) : a !== null ? (a.return = s,
                        V = a) : hc(i);
                for (; o !== null; )
                    V = o,
                    Cp(o),
                    o = o.sibling;
                V = i,
                Ci = l,
                pe = u
            }
            dc(e)
        } else
            i.subtreeFlags & 8772 && o !== null ? (o.return = i,
            V = o) : dc(e)
    }
}
function dc(e) {
    for (; V !== null; ) {
        var t = V;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        pe || Oo(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !pe)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : Ke(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && Yu(t, o, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Yu(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && zr(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(S(163))
                    }
                pe || t.flags & 512 && kl(t)
            } catch (d) {
                Y(t, t.return, d)
            }
        }
        if (t === e) {
            V = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            V = n;
            break
        }
        V = t.return
    }
}
function pc(e) {
    for (; V !== null; ) {
        var t = V;
        if (t === e) {
            V = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            V = n;
            break
        }
        V = t.return
    }
}
function hc(e) {
    for (; V !== null; ) {
        var t = V;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Oo(4, t)
                } catch (a) {
                    Y(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        Y(t, i, a)
                    }
                }
                var o = t.return;
                try {
                    kl(t)
                } catch (a) {
                    Y(t, o, a)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    kl(t)
                } catch (a) {
                    Y(t, s, a)
                }
            }
        } catch (a) {
            Y(t, t.return, a)
        }
        if (t === e) {
            V = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            V = l;
            break
        }
        V = t.return
    }
}
var ay = Math.ceil
  , uo = vt.ReactCurrentDispatcher
  , Da = vt.ReactCurrentOwner
  , We = vt.ReactCurrentBatchConfig
  , z = 0
  , se = null
  , te = null
  , ue = 0
  , Le = 0
  , Nn = Qt(0)
  , ie = 0
  , Gr = null
  , fn = 0
  , Fo = 0
  , Ma = 0
  , Pr = null
  , Pe = null
  , Na = 0
  , Yn = 1 / 0
  , lt = null
  , co = !1
  , Al = null
  , Ft = null
  , ki = !1
  , Lt = null
  , fo = 0
  , Cr = 0
  , Vl = null
  , ji = -1
  , Bi = 0;
function ve() {
    return z & 6 ? b() : ji !== -1 ? ji : ji = b()
}
function zt(e) {
    return e.mode & 1 ? z & 2 && ue !== 0 ? ue & -ue : Qg.transition !== null ? (Bi === 0 && (Bi = sd()),
    Bi) : (e = _,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : pd(e.type)),
    e) : 1
}
function Ze(e, t, n, r) {
    if (50 < Cr)
        throw Cr = 0,
        Vl = null,
        Error(S(185));
    ei(e, n, r),
    (!(z & 2) || e !== se) && (e === se && (!(z & 2) && (Fo |= n),
    ie === 4 && Et(e, ue)),
    Ee(e, r),
    n === 1 && z === 0 && !(t.mode & 1) && (Yn = b() + 500,
    Do && Kt()))
}
function Ee(e, t) {
    var n = e.callbackNode;
    Qm(e, t);
    var r = Xi(e, e === se ? ue : 0);
    if (r === 0)
        n !== null && Cu(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Cu(n),
        t === 1)
            e.tag === 0 ? $g(mc.bind(null, e)) : Md(mc.bind(null, e)),
            Bg(function() {
                !(z & 6) && Kt()
            }),
            n = null;
        else {
            switch (ld(r)) {
            case 1:
                n = oa;
                break;
            case 4:
                n = id;
                break;
            case 16:
                n = Gi;
                break;
            case 536870912:
                n = od;
                break;
            default:
                n = Gi
            }
            n = Dp(n, kp.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function kp(e, t) {
    if (ji = -1,
    Bi = 0,
    z & 6)
        throw Error(S(327));
    var n = e.callbackNode;
    if (Wn() && e.callbackNode !== n)
        return null;
    var r = Xi(e, e === se ? ue : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = po(e, r);
    else {
        t = r;
        var i = z;
        z |= 2;
        var o = Ep();
        (se !== e || ue !== t) && (lt = null,
        Yn = b() + 500,
        sn(e, t));
        do
            try {
                fy();
                break
            } catch (l) {
                Tp(e, l)
            }
        while (1);
        va(),
        uo.current = o,
        z = i,
        te !== null ? t = 0 : (se = null,
        ue = 0,
        t = ie)
    }
    if (t !== 0) {
        if (t === 2 && (i = tl(e),
        i !== 0 && (r = i,
        t = Ll(e, i))),
        t === 1)
            throw n = Gr,
            sn(e, 0),
            Et(e, r),
            Ee(e, b()),
            n;
        if (t === 6)
            Et(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !uy(i) && (t = po(e, r),
            t === 2 && (o = tl(e),
            o !== 0 && (r = o,
            t = Ll(e, o))),
            t === 1))
                throw n = Gr,
                sn(e, 0),
                Et(e, r),
                Ee(e, b()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(S(345));
            case 2:
                qt(e, Pe, lt);
                break;
            case 3:
                if (Et(e, r),
                (r & 130023424) === r && (t = Na + 500 - b(),
                10 < t)) {
                    if (Xi(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        ve(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = ul(qt.bind(null, e, Pe, lt), t);
                    break
                }
                qt(e, Pe, lt);
                break;
            case 4:
                if (Et(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var s = 31 - Ye(r);
                    o = 1 << s,
                    s = t[s],
                    s > i && (i = s),
                    r &= ~o
                }
                if (r = i,
                r = b() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ay(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = ul(qt.bind(null, e, Pe, lt), r);
                    break
                }
                qt(e, Pe, lt);
                break;
            case 5:
                qt(e, Pe, lt);
                break;
            default:
                throw Error(S(329))
            }
        }
    }
    return Ee(e, b()),
    e.callbackNode === n ? kp.bind(null, e) : null
}
function Ll(e, t) {
    var n = Pr;
    return e.current.memoizedState.isDehydrated && (sn(e, t).flags |= 256),
    e = po(e, t),
    e !== 2 && (t = Pe,
    Pe = n,
    t !== null && Rl(t)),
    e
}
function Rl(e) {
    Pe === null ? Pe = e : Pe.push.apply(Pe, e)
}
function uy(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Je(o(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Et(e, t) {
    for (t &= ~Ma,
    t &= ~Fo,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Ye(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function mc(e) {
    if (z & 6)
        throw Error(S(327));
    Wn();
    var t = Xi(e, 0);
    if (!(t & 1))
        return Ee(e, b()),
        null;
    var n = po(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = tl(e);
        r !== 0 && (t = r,
        n = Ll(e, r))
    }
    if (n === 1)
        throw n = Gr,
        sn(e, 0),
        Et(e, t),
        Ee(e, b()),
        n;
    if (n === 6)
        throw Error(S(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    qt(e, Pe, lt),
    Ee(e, b()),
    null
}
function Oa(e, t) {
    var n = z;
    z |= 1;
    try {
        return e(t)
    } finally {
        z = n,
        z === 0 && (Yn = b() + 500,
        Do && Kt())
    }
}
function dn(e) {
    Lt !== null && Lt.tag === 0 && !(z & 6) && Wn();
    var t = z;
    z |= 1;
    var n = We.transition
      , r = _;
    try {
        if (We.transition = null,
        _ = 1,
        e)
            return e()
    } finally {
        _ = r,
        We.transition = n,
        z = t,
        !(z & 6) && Kt()
    }
}
function Fa() {
    Le = Nn.current,
    B(Nn)
}
function sn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    jg(n)),
    te !== null)
        for (n = te.return; n !== null; ) {
            var r = n;
            switch (ma(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && bi();
                break;
            case 3:
                Gn(),
                B(ke),
                B(me),
                ka();
                break;
            case 5:
                Ca(r);
                break;
            case 4:
                Gn();
                break;
            case 13:
                B(Q);
                break;
            case 19:
                B(Q);
                break;
            case 10:
                wa(r.type._context);
                break;
            case 22:
            case 23:
                Fa()
            }
            n = n.return
        }
    if (se = e,
    te = e = _t(e.current, null),
    ue = Le = t,
    ie = 0,
    Gr = null,
    Ma = Fo = fn = 0,
    Pe = Pr = null,
    nn !== null) {
        for (t = 0; t < nn.length; t++)
            if (n = nn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = i,
                    r.next = s
                }
                n.pending = r
            }
        nn = null
    }
    return e
}
function Tp(e, t) {
    do {
        var n = te;
        try {
            if (va(),
            zi.current = ao,
            lo) {
                for (var r = G.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                lo = !1
            }
            if (cn = 0,
            oe = re = G = null,
            xr = !1,
            $r = 0,
            Da.current = null,
            n === null || n.return === null) {
                ie = 1,
                Gr = t,
                te = null;
                break
            }
            e: {
                var o = e
                  , s = n.return
                  , l = n
                  , a = t;
                if (t = ue,
                l.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , c = l
                      , f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var d = c.alternate;
                        d ? (c.updateQueue = d.updateQueue,
                        c.memoizedState = d.memoizedState,
                        c.lanes = d.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var m = nc(s);
                    if (m !== null) {
                        m.flags &= -257,
                        rc(m, s, l, o, t),
                        m.mode & 1 && tc(o, u, t),
                        t = m,
                        a = u;
                        var y = t.updateQueue;
                        if (y === null) {
                            var v = new Set;
                            v.add(a),
                            t.updateQueue = v
                        } else
                            y.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            tc(o, u, t),
                            za();
                            break e
                        }
                        a = Error(S(426))
                    }
                } else if (U && l.mode & 1) {
                    var T = nc(s);
                    if (T !== null) {
                        !(T.flags & 65536) && (T.flags |= 256),
                        rc(T, s, l, o, t),
                        ga(Xn(a, l));
                        break e
                    }
                }
                o = a = Xn(a, l),
                ie !== 4 && (ie = 2),
                Pr === null ? Pr = [o] : Pr.push(o),
                o = s;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var g = ap(o, a, t);
                        Xu(o, g);
                        break e;
                    case 1:
                        l = a;
                        var p = o.type
                          , h = o.stateNode;
                        if (!(o.flags & 128) && (typeof p.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Ft === null || !Ft.has(h)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var w = up(o, l, t);
                            Xu(o, w);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            Vp(n)
        } catch (x) {
            t = x,
            te === n && n !== null && (te = n = n.return);
            continue
        }
        break
    } while (1)
}
function Ep() {
    var e = uo.current;
    return uo.current = ao,
    e === null ? ao : e
}
function za() {
    (ie === 0 || ie === 3 || ie === 2) && (ie = 4),
    se === null || !(fn & 268435455) && !(Fo & 268435455) || Et(se, ue)
}
function po(e, t) {
    var n = z;
    z |= 2;
    var r = Ep();
    (se !== e || ue !== t) && (lt = null,
    sn(e, t));
    do
        try {
            cy();
            break
        } catch (i) {
            Tp(e, i)
        }
    while (1);
    if (va(),
    z = n,
    uo.current = r,
    te !== null)
        throw Error(S(261));
    return se = null,
    ue = 0,
    ie
}
function cy() {
    for (; te !== null; )
        Ap(te)
}
function fy() {
    for (; te !== null && !zm(); )
        Ap(te)
}
function Ap(e) {
    var t = Rp(e.alternate, e, Le);
    e.memoizedProps = e.pendingProps,
    t === null ? Vp(e) : te = t,
    Da.current = null
}
function Vp(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = iy(n, t),
            n !== null) {
                n.flags &= 32767,
                te = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                ie = 6,
                te = null;
                return
            }
        } else if (n = ry(n, t, Le),
        n !== null) {
            te = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            te = t;
            return
        }
        te = t = e
    } while (t !== null);
    ie === 0 && (ie = 5)
}
function qt(e, t, n) {
    var r = _
      , i = We.transition;
    try {
        We.transition = null,
        _ = 1,
        dy(e, t, n, r)
    } finally {
        We.transition = i,
        _ = r
    }
    return null
}
function dy(e, t, n, r) {
    do
        Wn();
    while (Lt !== null);
    if (z & 6)
        throw Error(S(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(S(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Km(e, o),
    e === se && (te = se = null,
    ue = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ki || (ki = !0,
    Dp(Gi, function() {
        return Wn(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = We.transition,
        We.transition = null;
        var s = _;
        _ = 1;
        var l = z;
        z |= 4,
        Da.current = null,
        sy(e, n),
        Pp(n, e),
        Mg(ll),
        Yi = !!sl,
        ll = sl = null,
        e.current = n,
        ly(n),
        _m(),
        z = l,
        _ = s,
        We.transition = o
    } else
        e.current = n;
    if (ki && (ki = !1,
    Lt = e,
    fo = i),
    o = e.pendingLanes,
    o === 0 && (Ft = null),
    Bm(n.stateNode),
    Ee(e, b()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (co)
        throw co = !1,
        e = Al,
        Al = null,
        e;
    return fo & 1 && e.tag !== 0 && Wn(),
    o = e.pendingLanes,
    o & 1 ? e === Vl ? Cr++ : (Cr = 0,
    Vl = e) : Cr = 0,
    Kt(),
    null
}
function Wn() {
    if (Lt !== null) {
        var e = ld(fo)
          , t = We.transition
          , n = _;
        try {
            if (We.transition = null,
            _ = 16 > e ? 16 : e,
            Lt === null)
                var r = !1;
            else {
                if (e = Lt,
                Lt = null,
                fo = 0,
                z & 6)
                    throw Error(S(331));
                var i = z;
                for (z |= 4,
                V = e.current; V !== null; ) {
                    var o = V
                      , s = o.child;
                    if (V.flags & 16) {
                        var l = o.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (V = u; V !== null; ) {
                                    var c = V;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Sr(8, c, o)
                                    }
                                    var f = c.child;
                                    if (f !== null)
                                        f.return = c,
                                        V = f;
                                    else
                                        for (; V !== null; ) {
                                            c = V;
                                            var d = c.sibling
                                              , m = c.return;
                                            if (wp(c),
                                            c === u) {
                                                V = null;
                                                break
                                            }
                                            if (d !== null) {
                                                d.return = m,
                                                V = d;
                                                break
                                            }
                                            V = m
                                        }
                                }
                            }
                            var y = o.alternate;
                            if (y !== null) {
                                var v = y.child;
                                if (v !== null) {
                                    y.child = null;
                                    do {
                                        var T = v.sibling;
                                        v.sibling = null,
                                        v = T
                                    } while (v !== null)
                                }
                            }
                            V = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null)
                        s.return = o,
                        V = s;
                    else
                        e: for (; V !== null; ) {
                            if (o = V,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Sr(9, o, o.return)
                                }
                            var g = o.sibling;
                            if (g !== null) {
                                g.return = o.return,
                                V = g;
                                break e
                            }
                            V = o.return
                        }
                }
                var p = e.current;
                for (V = p; V !== null; ) {
                    s = V;
                    var h = s.child;
                    if (s.subtreeFlags & 2064 && h !== null)
                        h.return = s,
                        V = h;
                    else
                        e: for (s = p; V !== null; ) {
                            if (l = V,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Oo(9, l)
                                    }
                                } catch (x) {
                                    Y(l, l.return, x)
                                }
                            if (l === s) {
                                V = null;
                                break e
                            }
                            var w = l.sibling;
                            if (w !== null) {
                                w.return = l.return,
                                V = w;
                                break e
                            }
                            V = l.return
                        }
                }
                if (z = i,
                Kt(),
                rt && typeof rt.onPostCommitFiberRoot == "function")
                    try {
                        rt.onPostCommitFiberRoot(Eo, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            _ = n,
            We.transition = t
        }
    }
    return !1
}
function gc(e, t, n) {
    t = Xn(n, t),
    t = ap(e, t, 1),
    e = Ot(e, t, 1),
    t = ve(),
    e !== null && (ei(e, 1, t),
    Ee(e, t))
}
function Y(e, t, n) {
    if (e.tag === 3)
        gc(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                gc(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ft === null || !Ft.has(r))) {
                    e = Xn(n, e),
                    e = up(t, e, 1),
                    t = Ot(t, e, 1),
                    e = ve(),
                    t !== null && (ei(t, 1, e),
                    Ee(t, e));
                    break
                }
            }
            t = t.return
        }
}
function py(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = ve(),
    e.pingedLanes |= e.suspendedLanes & n,
    se === e && (ue & n) === n && (ie === 4 || ie === 3 && (ue & 130023424) === ue && 500 > b() - Na ? sn(e, 0) : Ma |= n),
    Ee(e, t)
}
function Lp(e, t) {
    t === 0 && (e.mode & 1 ? (t = hi,
    hi <<= 1,
    !(hi & 130023424) && (hi = 4194304)) : t = 1);
    var n = ve();
    e = gt(e, t),
    e !== null && (ei(e, t, n),
    Ee(e, n))
}
function hy(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Lp(e, n)
}
function my(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(S(314))
    }
    r !== null && r.delete(t),
    Lp(e, n)
}
var Rp;
Rp = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || ke.current)
            Ce = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Ce = !1,
                ny(e, t, n);
            Ce = !!(e.flags & 131072)
        }
    else
        Ce = !1,
        U && t.flags & 1048576 && Nd(t, no, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Ii(e, t),
        e = t.pendingProps;
        var i = $n(t, me.current);
        Un(t, n),
        i = Ea(null, t, r, e, i, n);
        var o = Aa();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Te(r) ? (o = !0,
        eo(t)) : o = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        Sa(t),
        i.updater = Mo,
        t.stateNode = i,
        i._reactInternals = t,
        gl(t, r, e, n),
        t = wl(null, t, r, !0, o, n)) : (t.tag = 0,
        U && o && ha(t),
        ye(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Ii(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = yy(r),
            e = Ke(r, e),
            i) {
            case 0:
                t = vl(null, t, r, e, n);
                break e;
            case 1:
                t = sc(null, t, r, e, n);
                break e;
            case 11:
                t = ic(null, t, r, e, n);
                break e;
            case 14:
                t = oc(null, t, r, Ke(r.type, e), n);
                break e
            }
            throw Error(S(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ke(r, i),
        vl(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ke(r, i),
        sc(e, t, r, i, n);
    case 3:
        e: {
            if (pp(t),
            e === null)
                throw Error(S(387));
            r = t.pendingProps,
            o = t.memoizedState,
            i = o.element,
            _d(e, t),
            oo(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    i = Xn(Error(S(423)), t),
                    t = lc(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = Xn(Error(S(424)), t),
                    t = lc(e, t, r, n, i);
                    break e
                } else
                    for (Re = Nt(t.stateNode.containerInfo.firstChild),
                    De = t,
                    U = !0,
                    Xe = null,
                    n = Ud(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Qn(),
                r === i) {
                    t = yt(e, t, n);
                    break e
                }
                ye(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Wd(t),
        e === null && pl(t),
        r = t.type,
        i = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        s = i.children,
        al(r, i) ? s = null : o !== null && al(r, o) && (t.flags |= 32),
        dp(e, t),
        ye(e, t, s, n),
        t.child;
    case 6:
        return e === null && pl(t),
        null;
    case 13:
        return hp(e, t, n);
    case 4:
        return Pa(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Kn(t, null, r, n) : ye(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ke(r, i),
        ic(e, t, r, i, n);
    case 7:
        return ye(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return ye(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return ye(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            o = t.memoizedProps,
            s = i.value,
            I(ro, r._currentValue),
            r._currentValue = s,
            o !== null)
                if (Je(o.value, s)) {
                    if (o.children === i.children && !ke.current) {
                        t = yt(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var l = o.dependencies;
                        if (l !== null) {
                            s = o.child;
                            for (var a = l.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (o.tag === 1) {
                                        a = dt(-1, n & -n),
                                        a.tag = 2;
                                        var u = o.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? a.next = a : (a.next = c.next,
                                            c.next = a),
                                            u.pending = a
                                        }
                                    }
                                    o.lanes |= n,
                                    a = o.alternate,
                                    a !== null && (a.lanes |= n),
                                    hl(o.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (o.tag === 10)
                            s = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (s = o.return,
                            s === null)
                                throw Error(S(341));
                            s.lanes |= n,
                            l = s.alternate,
                            l !== null && (l.lanes |= n),
                            hl(s, n, t),
                            s = o.sibling
                        } else
                            s = o.child;
                        if (s !== null)
                            s.return = o;
                        else
                            for (s = o; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (o = s.sibling,
                                o !== null) {
                                    o.return = s.return,
                                    s = o;
                                    break
                                }
                                s = s.return
                            }
                        o = s
                    }
            ye(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        Un(t, n),
        i = He(i),
        r = r(i),
        t.flags |= 1,
        ye(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = Ke(r, t.pendingProps),
        i = Ke(r.type, i),
        oc(e, t, r, i, n);
    case 15:
        return cp(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ke(r, i),
        Ii(e, t),
        t.tag = 1,
        Te(r) ? (e = !0,
        eo(t)) : e = !1,
        Un(t, n),
        jd(t, r, i),
        gl(t, r, i, n),
        wl(null, t, r, !0, e, n);
    case 19:
        return mp(e, t, n);
    case 22:
        return fp(e, t, n)
    }
    throw Error(S(156, t.tag))
}
;
function Dp(e, t) {
    return rd(e, t)
}
function gy(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Ue(e, t, n, r) {
    return new gy(e,t,n,r)
}
function _a(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function yy(e) {
    if (typeof e == "function")
        return _a(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === na)
            return 11;
        if (e === ra)
            return 14
    }
    return 2
}
function _t(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ue(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Ui(e, t, n, r, i, o) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        _a(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case Cn:
            return ln(n.children, i, o, t);
        case ta:
            s = 8,
            i |= 8;
            break;
        case Bs:
            return e = Ue(12, n, t, i | 2),
            e.elementType = Bs,
            e.lanes = o,
            e;
        case Us:
            return e = Ue(13, n, t, i),
            e.elementType = Us,
            e.lanes = o,
            e;
        case Ws:
            return e = Ue(19, n, t, i),
            e.elementType = Ws,
            e.lanes = o,
            e;
        case Bf:
            return zo(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case If:
                    s = 10;
                    break e;
                case jf:
                    s = 9;
                    break e;
                case na:
                    s = 11;
                    break e;
                case ra:
                    s = 14;
                    break e;
                case Pt:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(S(130, e == null ? e : typeof e, ""))
        }
    return t = Ue(s, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function ln(e, t, n, r) {
    return e = Ue(7, e, r, t),
    e.lanes = n,
    e
}
function zo(e, t, n, r) {
    return e = Ue(22, e, r, t),
    e.elementType = Bf,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function xs(e, t, n) {
    return e = Ue(6, e, null, t),
    e.lanes = n,
    e
}
function Ss(e, t, n) {
    return t = Ue(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function vy(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = ts(0),
    this.expirationTimes = ts(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = ts(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function Ia(e, t, n, r, i, o, s, l, a) {
    return e = new vy(e,t,n,l,a),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = Ue(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Sa(o),
    e
}
function wy(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Pn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Mp(e) {
    if (!e)
        return Ut;
    e = e._reactInternals;
    e: {
        if (gn(e) !== e || e.tag !== 1)
            throw Error(S(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Te(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(S(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Te(n))
            return Dd(e, n, t)
    }
    return t
}
function Np(e, t, n, r, i, o, s, l, a) {
    return e = Ia(n, r, !0, e, i, o, s, l, a),
    e.context = Mp(null),
    n = e.current,
    r = ve(),
    i = zt(n),
    o = dt(r, i),
    o.callback = t ?? null,
    Ot(n, o, i),
    e.current.lanes = i,
    ei(e, i, r),
    Ee(e, r),
    e
}
function _o(e, t, n, r) {
    var i = t.current
      , o = ve()
      , s = zt(i);
    return n = Mp(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = dt(o, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Ot(i, t, s),
    e !== null && (Ze(e, i, s, o),
    Fi(e, i, s)),
    s
}
function ho(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function yc(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function ja(e, t) {
    yc(e, t),
    (e = e.alternate) && yc(e, t)
}
function xy() {
    return null
}
var Op = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Ba(e) {
    this._internalRoot = e
}
Io.prototype.render = Ba.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(S(409));
    _o(e, t, null, null)
}
;
Io.prototype.unmount = Ba.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        dn(function() {
            _o(null, e, null, null)
        }),
        t[mt] = null
    }
}
;
function Io(e) {
    this._internalRoot = e
}
Io.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = cd();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++)
            ;
        Tt.splice(n, 0, e),
        n === 0 && dd(e)
    }
}
;
function Ua(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function jo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function vc() {}
function Sy(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = ho(s);
                o.call(u)
            }
        }
        var s = Np(t, r, e, 0, null, !1, !1, "", vc);
        return e._reactRootContainer = s,
        e[mt] = s.current,
        jr(e.nodeType === 8 ? e.parentNode : e),
        dn(),
        s
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = ho(a);
            l.call(u)
        }
    }
    var a = Ia(e, 0, !1, null, null, !1, !1, "", vc);
    return e._reactRootContainer = a,
    e[mt] = a.current,
    jr(e.nodeType === 8 ? e.parentNode : e),
    dn(function() {
        _o(t, a, n, r)
    }),
    a
}
function Bo(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var l = i;
            i = function() {
                var a = ho(s);
                l.call(a)
            }
        }
        _o(t, s, e, i)
    } else
        s = Sy(n, t, e, i, r);
    return ho(s)
}
ad = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = dr(t.pendingLanes);
            n !== 0 && (sa(t, n | 1),
            Ee(t, b()),
            !(z & 6) && (Yn = b() + 500,
            Kt()))
        }
        break;
    case 13:
        dn(function() {
            var r = gt(e, 1);
            if (r !== null) {
                var i = ve();
                Ze(r, e, 1, i)
            }
        }),
        ja(e, 1)
    }
}
;
la = function(e) {
    if (e.tag === 13) {
        var t = gt(e, 134217728);
        if (t !== null) {
            var n = ve();
            Ze(t, e, 134217728, n)
        }
        ja(e, 134217728)
    }
}
;
ud = function(e) {
    if (e.tag === 13) {
        var t = zt(e)
          , n = gt(e, t);
        if (n !== null) {
            var r = ve();
            Ze(n, e, t, r)
        }
        ja(e, t)
    }
}
;
cd = function() {
    return _
}
;
fd = function(e, t) {
    var n = _;
    try {
        return _ = e,
        t()
    } finally {
        _ = n
    }
}
;
qs = function(e, t, n) {
    switch (t) {
    case "input":
        if (Qs(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = Ro(r);
                    if (!i)
                        throw Error(S(90));
                    Wf(r),
                    Qs(r, i)
                }
            }
        }
        break;
    case "textarea":
        $f(e, n);
        break;
    case "select":
        t = n.value,
        t != null && _n(e, !!n.multiple, t, !1)
    }
}
;
Jf = Oa;
qf = dn;
var Py = {
    usingClientEntryPoint: !1,
    Events: [ni, An, Ro, Yf, Zf, Oa]
}
  , lr = {
    findFiberByHostInstance: tn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
}
  , Cy = {
    bundleType: lr.bundleType,
    version: lr.version,
    rendererPackageName: lr.rendererPackageName,
    rendererConfig: lr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: vt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = td(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: lr.findFiberByHostInstance || xy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ti = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ti.isDisabled && Ti.supportsFiber)
        try {
            Eo = Ti.inject(Cy),
            rt = Ti
        } catch {}
}
Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Py;
Oe.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ua(t))
        throw Error(S(200));
    return wy(e, t, null, n)
}
;
Oe.createRoot = function(e, t) {
    if (!Ua(e))
        throw Error(S(299));
    var n = !1
      , r = ""
      , i = Op;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = Ia(e, 1, !1, null, null, n, !1, r, i),
    e[mt] = t.current,
    jr(e.nodeType === 8 ? e.parentNode : e),
    new Ba(t)
}
;
Oe.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","),
        Error(S(268, e)));
    return e = td(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Oe.flushSync = function(e) {
    return dn(e)
}
;
Oe.hydrate = function(e, t, n) {
    if (!jo(t))
        throw Error(S(200));
    return Bo(null, e, t, !0, n)
}
;
Oe.hydrateRoot = function(e, t, n) {
    if (!Ua(e))
        throw Error(S(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , o = ""
      , s = Op;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = Np(t, null, e, 1, n ?? null, i, !1, o, s),
    e[mt] = t.current,
    jr(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Io(t)
}
;
Oe.render = function(e, t, n) {
    if (!jo(t))
        throw Error(S(200));
    return Bo(null, e, t, !1, n)
}
;
Oe.unmountComponentAtNode = function(e) {
    if (!jo(e))
        throw Error(S(40));
    return e._reactRootContainer ? (dn(function() {
        Bo(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[mt] = null
        })
    }),
    !0) : !1
}
;
Oe.unstable_batchedUpdates = Oa;
Oe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!jo(n))
        throw Error(S(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(S(38));
    return Bo(e, t, n, !1, r)
}
;
Oe.version = "18.2.0-next-9e3b772b8-20220608";
(function(e) {
    function t() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
            } catch (n) {
                console.error(n)
            }
    }
    t(),
    e.exports = Oe
}
)(xm);
var wc = _s;
zs.createRoot = wc.createRoot,
zs.hydrateRoot = wc.hydrateRoot;
const Fp = k.createContext({
    transformPagePoint: e=>e,
    isStatic: !1,
    reducedMotion: "never"
})
  , Uo = k.createContext({})
  , Wo = k.createContext(null)
  , Ho = typeof document < "u"
  , mo = Ho ? k.useLayoutEffect : k.useEffect
  , zp = k.createContext({
    strict: !1
});
function ky(e, t, n, r) {
    const {visualElement: i} = k.useContext(Uo)
      , o = k.useContext(zp)
      , s = k.useContext(Wo)
      , l = k.useContext(Fp).reducedMotion
      , a = k.useRef();
    r = r || o.renderer,
    !a.current && r && (a.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: l
    }));
    const u = a.current;
    return k.useInsertionEffect(()=>{
        u && u.update(n, s)
    }
    ),
    mo(()=>{
        u && u.render()
    }
    ),
    k.useEffect(()=>{
        u && u.updateFeatures()
    }
    ),
    (window.HandoffAppearAnimations ? mo : k.useEffect)(()=>{
        u && u.animationState && u.animationState.animateChanges()
    }
    ),
    u
}
function On(e) {
    return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function Ty(e, t, n) {
    return k.useCallback(r=>{
        r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : On(n) && (n.current = r))
    }
    , [t])
}
function Xr(e) {
    return typeof e == "string" || Array.isArray(e)
}
function $o(e) {
    return typeof e == "object" && typeof e.start == "function"
}
const Wa = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Ha = ["initial", ...Wa];
function Qo(e) {
    return $o(e.animate) || Ha.some(t=>Xr(e[t]))
}
function _p(e) {
    return !!(Qo(e) || e.variants)
}
function Ey(e, t) {
    if (Qo(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || Xr(n) ? n : void 0,
            animate: Xr(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function Ay(e) {
    const {initial: t, animate: n} = Ey(e, k.useContext(Uo));
    return k.useMemo(()=>({
        initial: t,
        animate: n
    }), [xc(t), xc(n)])
}
function xc(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Sc = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , Yr = {};
for (const e in Sc)
    Yr[e] = {
        isEnabled: t=>Sc[e].some(n=>!!t[n])
    };
function Vy(e) {
    for (const t in e)
        Yr[t] = {
            ...Yr[t],
            ...e[t]
        }
}
function $a(e) {
    const t = k.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const kr = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
let Ly = 1;
function Ry() {
    return $a(()=>{
        if (kr.hasEverUpdated)
            return Ly++
    }
    )
}
const Qa = k.createContext({})
  , Ip = k.createContext({})
  , Dy = Symbol.for("motionComponentSymbol");
function My({preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i}) {
    e && Vy(e);
    function o(l, a) {
        let u;
        const c = {
            ...k.useContext(Fp),
            ...l,
            layoutId: Ny(l)
        }
          , {isStatic: f} = c
          , d = Ay(l)
          , m = f ? void 0 : Ry()
          , y = r(l, f);
        if (!f && Ho) {
            d.visualElement = ky(i, y, c, t);
            const v = k.useContext(Ip)
              , T = k.useContext(zp).strict;
            d.visualElement && (u = d.visualElement.loadFeatures(c, T, e, m, v))
        }
        return k.createElement(Uo.Provider, {
            value: d
        }, u && d.visualElement ? k.createElement(u, {
            visualElement: d.visualElement,
            ...c
        }) : null, n(i, l, m, Ty(y, d.visualElement, a), y, f, d.visualElement))
    }
    const s = k.forwardRef(o);
    return s[Dy] = i,
    s
}
function Ny({layoutId: e}) {
    const t = k.useContext(Qa).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function Oy(e) {
    function t(r, i={}) {
        return My(e(r, i))
    }
    if (typeof Proxy > "u")
        return t;
    const n = new Map;
    return new Proxy(t,{
        get: (r,i)=>(n.has(i) || n.set(i, t(i)),
        n.get(i))
    })
}
const Fy = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Ka(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(Fy.indexOf(e) > -1 || /[A-Z]/.test(e))
}
const go = {};
function zy(e) {
    Object.assign(go, e)
}
const Ko = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , yn = new Set(Ko);
function jp(e, {layout: t, layoutId: n}) {
    return yn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!go[e] || e === "opacity")
}
const Ae = e=>!!(e && e.getVelocity)
  , _y = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , Iy = Ko.length;
function jy(e, {enableHardwareAcceleration: t=!0, allowTransformNone: n=!0}, r, i) {
    let o = "";
    for (let s = 0; s < Iy; s++) {
        const l = Ko[s];
        if (e[l] !== void 0) {
            const a = _y[l] || l;
            o += `${a}(${e[l]}) `
        }
    }
    return t && !e.z && (o += "translateZ(0)"),
    o = o.trim(),
    i ? o = i(e, r ? "" : o) : n && r && (o = "none"),
    o
}
const Bp = e=>t=>typeof t == "string" && t.startsWith(e)
  , Up = Bp("--")
  , Dl = Bp("var(--")
  , By = (e,t)=>t && typeof e == "number" ? t.transform(e) : e
  , pn = (e,t,n)=>Math.min(Math.max(n, e), t)
  , vn = {
    test: e=>typeof e == "number",
    parse: parseFloat,
    transform: e=>e
}
  , Tr = {
    ...vn,
    transform: e=>pn(0, 1, e)
}
  , Ei = {
    ...vn,
    default: 1
}
  , Er = e=>Math.round(e * 1e5) / 1e5
  , Zr = /(-)?([\d]*\.?[\d])+/g
  , Ml = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
  , Uy = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ii(e) {
    return typeof e == "string"
}
const oi = e=>({
    test: t=>ii(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t=>`${t}${e}`
})
  , St = oi("deg")
  , ot = oi("%")
  , L = oi("px")
  , Wy = oi("vh")
  , Hy = oi("vw")
  , Pc = {
    ...ot,
    parse: e=>ot.parse(e) / 100,
    transform: e=>ot.transform(e * 100)
}
  , Cc = {
    ...vn,
    transform: Math.round
}
  , Wp = {
    borderWidth: L,
    borderTopWidth: L,
    borderRightWidth: L,
    borderBottomWidth: L,
    borderLeftWidth: L,
    borderRadius: L,
    radius: L,
    borderTopLeftRadius: L,
    borderTopRightRadius: L,
    borderBottomRightRadius: L,
    borderBottomLeftRadius: L,
    width: L,
    maxWidth: L,
    height: L,
    maxHeight: L,
    size: L,
    top: L,
    right: L,
    bottom: L,
    left: L,
    padding: L,
    paddingTop: L,
    paddingRight: L,
    paddingBottom: L,
    paddingLeft: L,
    margin: L,
    marginTop: L,
    marginRight: L,
    marginBottom: L,
    marginLeft: L,
    rotate: St,
    rotateX: St,
    rotateY: St,
    rotateZ: St,
    scale: Ei,
    scaleX: Ei,
    scaleY: Ei,
    scaleZ: Ei,
    skew: St,
    skewX: St,
    skewY: St,
    distance: L,
    translateX: L,
    translateY: L,
    translateZ: L,
    x: L,
    y: L,
    z: L,
    perspective: L,
    transformPerspective: L,
    opacity: Tr,
    originX: Pc,
    originY: Pc,
    originZ: L,
    zIndex: Cc,
    fillOpacity: Tr,
    strokeOpacity: Tr,
    numOctaves: Cc
};
function Ga(e, t, n, r) {
    const {style: i, vars: o, transform: s, transformOrigin: l} = e;
    let a = !1
      , u = !1
      , c = !0;
    for (const f in t) {
        const d = t[f];
        if (Up(f)) {
            o[f] = d;
            continue
        }
        const m = Wp[f]
          , y = By(d, m);
        if (yn.has(f)) {
            if (a = !0,
            s[f] = y,
            !c)
                continue;
            d !== (m.default || 0) && (c = !1)
        } else
            f.startsWith("origin") ? (u = !0,
            l[f] = y) : i[f] = y
    }
    if (t.transform || (a || r ? i.transform = jy(e.transform, n, c, r) : i.transform && (i.transform = "none")),
    u) {
        const {originX: f="50%", originY: d="50%", originZ: m=0} = l;
        i.transformOrigin = `${f} ${d} ${m}`
    }
}
const Xa = ()=>({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function Hp(e, t, n) {
    for (const r in t)
        !Ae(t[r]) && !jp(r, n) && (e[r] = t[r])
}
function $y({transformTemplate: e}, t, n) {
    return k.useMemo(()=>{
        const r = Xa();
        return Ga(r, t, {
            enableHardwareAcceleration: !n
        }, e),
        Object.assign({}, r.vars, r.style)
    }
    , [t])
}
function Qy(e, t, n) {
    const r = e.style || {}
      , i = {};
    return Hp(i, r, e),
    Object.assign(i, $y(e, t, n)),
    e.transformValues ? e.transformValues(i) : i
}
function Ky(e, t, n) {
    const r = {}
      , i = Qy(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1,
    i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
    i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
    r.style = i,
    r
}
const Gy = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);
function yo(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || Gy.has(e)
}
let $p = e=>!yo(e);
function Xy(e) {
    e && ($p = t=>t.startsWith("on") ? !yo(t) : e(t))
}
try {
    Xy(require("@emotion/is-prop-valid").default)
} catch {}
function Yy(e, t, n) {
    const r = {};
    for (const i in e)
        i === "values" && typeof e.values == "object" || ($p(i) || n === !0 && yo(i) || !t && !yo(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}
function kc(e, t, n) {
    return typeof e == "string" ? e : L.transform(t + n * e)
}
function Zy(e, t, n) {
    const r = kc(t, e.x, e.width)
      , i = kc(n, e.y, e.height);
    return `${r} ${i}`
}
const Jy = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , qy = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function by(e, t, n=1, r=0, i=!0) {
    e.pathLength = 1;
    const o = i ? Jy : qy;
    e[o.offset] = L.transform(-r);
    const s = L.transform(t)
      , l = L.transform(n);
    e[o.array] = `${s} ${l}`
}
function Ya(e, {attrX: t, attrY: n, originX: r, originY: i, pathLength: o, pathSpacing: s=1, pathOffset: l=0, ...a}, u, c, f) {
    if (Ga(e, a, u, f),
    c) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: d, style: m, dimensions: y} = e;
    d.transform && (y && (m.transform = d.transform),
    delete d.transform),
    y && (r !== void 0 || i !== void 0 || m.transform) && (m.transformOrigin = Zy(y, r !== void 0 ? r : .5, i !== void 0 ? i : .5)),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    o !== void 0 && by(d, o, s, l, !1)
}
const Qp = ()=>({
    ...Xa(),
    attrs: {}
})
  , Za = e=>typeof e == "string" && e.toLowerCase() === "svg";
function e0(e, t, n, r) {
    const i = k.useMemo(()=>{
        const o = Qp();
        return Ya(o, t, {
            enableHardwareAcceleration: !1
        }, Za(r), e.transformTemplate),
        {
            ...o.attrs,
            style: {
                ...o.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const o = {};
        Hp(o, e.style, e),
        i.style = {
            ...o,
            ...i.style
        }
    }
    return i
}
function t0(e=!1) {
    return (n,r,i,o,{latestValues: s},l)=>{
        const u = (Ka(n) ? e0 : Ky)(r, s, l, n)
          , f = {
            ...Yy(r, typeof n == "string", e),
            ...u,
            ref: o
        }
          , {children: d} = r
          , m = k.useMemo(()=>Ae(d) ? d.get() : d, [d]);
        return i && (f["data-projection-id"] = i),
        k.createElement(n, {
            ...f,
            children: m
        })
    }
}
const Ja = e=>e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function Kp(e, {style: t, vars: n}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const o in n)
        e.style.setProperty(o, n[o])
}
const Gp = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function Xp(e, t, n, r) {
    Kp(e, t, void 0, r);
    for (const i in t.attrs)
        e.setAttribute(Gp.has(i) ? i : Ja(i), t.attrs[i])
}
function qa(e, t) {
    const {style: n} = e
      , r = {};
    for (const i in n)
        (Ae(n[i]) || t.style && Ae(t.style[i]) || jp(i, e)) && (r[i] = n[i]);
    return r
}
function Yp(e, t) {
    const n = qa(e, t);
    for (const r in e)
        if (Ae(e[r]) || Ae(t[r])) {
            const i = r === "x" || r === "y" ? "attr" + r.toUpperCase() : r;
            n[i] = e[r]
        }
    return n
}
function ba(e, t, n, r={}, i={}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
}
const vo = e=>Array.isArray(e)
  , n0 = e=>!!(e && typeof e == "object" && e.mix && e.toValue)
  , r0 = e=>vo(e) ? e[e.length - 1] || 0 : e;
function Wi(e) {
    const t = Ae(e) ? e.get() : e;
    return n0(t) ? t.toValue() : t
}
function i0({scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n}, r, i, o) {
    const s = {
        latestValues: o0(r, i, o, e),
        renderState: t()
    };
    return n && (s.mount = l=>n(r, l, s)),
    s
}
const Zp = e=>(t,n)=>{
    const r = k.useContext(Uo)
      , i = k.useContext(Wo)
      , o = ()=>i0(e, t, r, i);
    return n ? o() : $a(o)
}
;
function o0(e, t, n, r) {
    const i = {}
      , o = r(e, {});
    for (const d in o)
        i[d] = Wi(o[d]);
    let {initial: s, animate: l} = e;
    const a = Qo(e)
      , u = _p(e);
    t && u && !a && e.inherit !== !1 && (s === void 0 && (s = t.initial),
    l === void 0 && (l = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const f = c ? l : s;
    return f && typeof f != "boolean" && !$o(f) && (Array.isArray(f) ? f : [f]).forEach(m=>{
        const y = ba(e, m);
        if (!y)
            return;
        const {transitionEnd: v, transition: T, ...g} = y;
        for (const p in g) {
            let h = g[p];
            if (Array.isArray(h)) {
                const w = c ? h.length - 1 : 0;
                h = h[w]
            }
            h !== null && (i[p] = h)
        }
        for (const p in v)
            i[p] = v[p]
    }
    ),
    i
}
const s0 = {
    useVisualState: Zp({
        scrapeMotionValuesFromProps: Yp,
        createRenderState: Qp,
        onMount: (e,t,{renderState: n, latestValues: r})=>{
            try {
                n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
            } catch {
                n.dimensions = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                }
            }
            Ya(n, r, {
                enableHardwareAcceleration: !1
            }, Za(t.tagName), e.transformTemplate),
            Xp(t, n)
        }
    })
}
  , l0 = {
    useVisualState: Zp({
        scrapeMotionValuesFromProps: qa,
        createRenderState: Xa
    })
};
function a0(e, {forwardMotionProps: t=!1}, n, r) {
    return {
        ...Ka(e) ? s0 : l0,
        preloadedFeatures: n,
        useRender: t0(t),
        createVisualElement: r,
        Component: e
    }
}
function ft(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    ()=>e.removeEventListener(t, n)
}
const Jp = e=>e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Go(e, t="page") {
    return {
        point: {
            x: e[t + "X"],
            y: e[t + "Y"]
        }
    }
}
const u0 = e=>t=>Jp(t) && e(t, Go(t));
function pt(e, t, n, r) {
    return ft(e, t, u0(n), r)
}
const c0 = (e,t)=>n=>t(e(n))
  , It = (...e)=>e.reduce(c0);
function qp(e) {
    let t = null;
    return ()=>{
        const n = ()=>{
            t = null
        }
        ;
        return t === null ? (t = e,
        n) : !1
    }
}
const Tc = qp("dragHorizontal")
  , Ec = qp("dragVertical");
function bp(e) {
    let t = !1;
    if (e === "y")
        t = Ec();
    else if (e === "x")
        t = Tc();
    else {
        const n = Tc()
          , r = Ec();
        n && r ? t = ()=>{
            n(),
            r()
        }
        : (n && n(),
        r && r())
    }
    return t
}
function eh() {
    const e = bp(!0);
    return e ? (e(),
    !1) : !0
}
class Gt {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
function f0(e) {
    let t = []
      , n = []
      , r = 0
      , i = !1
      , o = !1;
    const s = new WeakSet
      , l = {
        schedule: (a,u=!1,c=!1)=>{
            const f = c && i
              , d = f ? t : n;
            return u && s.add(a),
            d.indexOf(a) === -1 && (d.push(a),
            f && i && (r = t.length)),
            a
        }
        ,
        cancel: a=>{
            const u = n.indexOf(a);
            u !== -1 && n.splice(u, 1),
            s.delete(a)
        }
        ,
        process: a=>{
            if (i) {
                o = !0;
                return
            }
            if (i = !0,
            [t,n] = [n, t],
            n.length = 0,
            r = t.length,
            r)
                for (let u = 0; u < r; u++) {
                    const c = t[u];
                    c(a),
                    s.has(c) && (l.schedule(c),
                    e())
                }
            i = !1,
            o && (o = !1,
            l.process(a))
        }
    };
    return l
}
const he = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
}
  , d0 = 40;
let Nl = !0
  , Jr = !1;
const si = ["read", "update", "preRender", "render", "postRender"]
  , Xo = si.reduce((e,t)=>(e[t] = f0(()=>Jr = !0),
e), {})
  , W = si.reduce((e,t)=>{
    const n = Xo[t];
    return e[t] = (r,i=!1,o=!1)=>(Jr || h0(),
    n.schedule(r, i, o)),
    e
}
, {})
  , Wt = si.reduce((e,t)=>(e[t] = Xo[t].cancel,
e), {})
  , Ps = si.reduce((e,t)=>(e[t] = ()=>Xo[t].process(he),
e), {})
  , p0 = e=>Xo[e].process(he)
  , th = e=>{
    Jr = !1,
    he.delta = Nl ? 1e3 / 60 : Math.max(Math.min(e - he.timestamp, d0), 1),
    he.timestamp = e,
    he.isProcessing = !0,
    si.forEach(p0),
    he.isProcessing = !1,
    Jr && (Nl = !1,
    requestAnimationFrame(th))
}
  , h0 = ()=>{
    Jr = !0,
    Nl = !0,
    he.isProcessing || requestAnimationFrame(th)
}
;
function Ac(e, t) {
    const n = "pointer" + (t ? "enter" : "leave")
      , r = "onHover" + (t ? "Start" : "End")
      , i = (o,s)=>{
        if (o.type === "touch" || eh())
            return;
        const l = e.getProps();
        e.animationState && l.whileHover && e.animationState.setActive("whileHover", t),
        l[r] && W.update(()=>l[r](o, s))
    }
    ;
    return pt(e.current, n, i, {
        passive: !e.getProps()[r]
    })
}
class m0 extends Gt {
    mount() {
        this.unmount = It(Ac(this.node, !0), Ac(this.node, !1))
    }
    unmount() {}
}
class g0 extends Gt {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = It(ft(this.node.current, "focus", ()=>this.onFocus()), ft(this.node.current, "blur", ()=>this.onBlur()))
    }
    unmount() {}
}
const nh = (e,t)=>t ? e === t ? !0 : nh(e, t.parentElement) : !1
  , ae = e=>e;
function Cs(e, t) {
    if (!t)
        return;
    const n = new PointerEvent("pointer" + e);
    t(n, Go(n))
}
class y0 extends Gt {
    constructor() {
        super(...arguments),
        this.removeStartListeners = ae,
        this.removeEndListeners = ae,
        this.removeAccessibleListeners = ae,
        this.startPointerPress = (t,n)=>{
            if (this.removeEndListeners(),
            this.isPressing)
                return;
            const r = this.node.getProps()
              , o = pt(window, "pointerup", (l,a)=>{
                if (!this.checkPressEnd())
                    return;
                const {onTap: u, onTapCancel: c} = this.node.getProps();
                W.update(()=>{
                    nh(this.node.current, l.target) ? u && u(l, a) : c && c(l, a)
                }
                )
            }
            , {
                passive: !(r.onTap || r.onPointerUp)
            })
              , s = pt(window, "pointercancel", (l,a)=>this.cancelPress(l, a), {
                passive: !(r.onTapCancel || r.onPointerCancel)
            });
            this.removeEndListeners = It(o, s),
            this.startPress(t, n)
        }
        ,
        this.startAccessiblePress = ()=>{
            const t = o=>{
                if (o.key !== "Enter" || this.isPressing)
                    return;
                const s = l=>{
                    l.key !== "Enter" || !this.checkPressEnd() || Cs("up", (a,u)=>{
                        const {onTap: c} = this.node.getProps();
                        c && W.update(()=>c(a, u))
                    }
                    )
                }
                ;
                this.removeEndListeners(),
                this.removeEndListeners = ft(this.node.current, "keyup", s),
                Cs("down", (l,a)=>{
                    this.startPress(l, a)
                }
                )
            }
              , n = ft(this.node.current, "keydown", t)
              , r = ()=>{
                this.isPressing && Cs("cancel", (o,s)=>this.cancelPress(o, s))
            }
              , i = ft(this.node.current, "blur", r);
            this.removeAccessibleListeners = It(n, i)
        }
    }
    startPress(t, n) {
        this.isPressing = !0;
        const {onTapStart: r, whileTap: i} = this.node.getProps();
        i && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
        r && W.update(()=>r(t, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(),
        this.isPressing = !1,
        this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
        !eh()
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd())
            return;
        const {onTapCancel: r} = this.node.getProps();
        r && W.update(()=>r(t, n))
    }
    mount() {
        const t = this.node.getProps()
          , n = pt(this.node.current, "pointerdown", this.startPointerPress, {
            passive: !(t.onTapStart || t.onPointerStart)
        })
          , r = ft(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = It(n, r)
    }
    unmount() {
        this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners()
    }
}
const Ol = new WeakMap
  , ks = new WeakMap
  , v0 = e=>{
    const t = Ol.get(e.target);
    t && t(e)
}
  , w0 = e=>{
    e.forEach(v0)
}
;
function x0({root: e, ...t}) {
    const n = e || document;
    ks.has(n) || ks.set(n, {});
    const r = ks.get(n)
      , i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(w0,{
        root: e,
        ...t
    })),
    r[i]
}
function S0(e, t, n) {
    const r = x0(t);
    return Ol.set(e, n),
    r.observe(e),
    ()=>{
        Ol.delete(e),
        r.unobserve(e)
    }
}
const P0 = {
    some: 0,
    all: 1
};
class C0 extends Gt {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: i="some", once: o} = t
          , s = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : P0[i]
        }
          , l = a=>{
            const {isIntersecting: u} = a;
            if (this.isInView === u || (this.isInView = u,
            o && !u && this.hasEnteredView))
                return;
            u && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {onViewportEnter: c, onViewportLeave: f} = this.node.getProps()
              , d = u ? c : f;
            d && d(a)
        }
        ;
        return S0(this.node.current, s, l)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(k0(t, n)) && this.startObserver()
    }
    unmount() {}
}
function k0({viewport: e={}}, {viewport: t={}}={}) {
    return n=>e[n] !== t[n]
}
const T0 = {
    inView: {
        Feature: C0
    },
    tap: {
        Feature: y0
    },
    focus: {
        Feature: g0
    },
    hover: {
        Feature: m0
    }
};
function rh(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
function E0(e) {
    const t = {};
    return e.values.forEach((n,r)=>t[r] = n.get()),
    t
}
function A0(e) {
    const t = {};
    return e.values.forEach((n,r)=>t[r] = n.getVelocity()),
    t
}
function Yo(e, t, n) {
    const r = e.getProps();
    return ba(r, t, n !== void 0 ? n : r.custom, E0(e), A0(e))
}
const V0 = "framerAppearId"
  , L0 = "data-" + Ja(V0);
let R0 = ae
  , wo = ae;
const jt = e=>e * 1e3
  , hn = e=>e / 1e3
  , D0 = {
    current: !1
};
function M0(e) {
    return !e || Array.isArray(e) || typeof e == "string" && ih[e]
}
const hr = ([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , ih = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: hr([0, .65, .55, 1]),
    circOut: hr([.55, 0, 1, .45]),
    backIn: hr([.31, .01, .66, -.59]),
    backOut: hr([.33, 1.53, .69, .99])
};
function N0(e) {
    if (e)
        return Array.isArray(e) ? hr(e) : ih[e]
}
function O0(e, t, n, {delay: r=0, duration: i, repeat: o=0, repeatType: s="loop", ease: l, times: a}={}) {
    const u = {
        [t]: n
    };
    return a && (u.offset = a),
    e.animate(u, {
        delay: r,
        duration: i,
        easing: N0(l),
        fill: "both",
        iterations: o + 1,
        direction: s === "reverse" ? "alternate" : "normal"
    })
}
const Vc = {
    waapi: ()=>Object.hasOwnProperty.call(Element.prototype, "animate")
}
  , Ts = {}
  , oh = {};
for (const e in Vc)
    oh[e] = ()=>(Ts[e] === void 0 && (Ts[e] = Vc[e]()),
    Ts[e]);
function F0(e, {repeat: t, repeatType: n="loop"}) {
    const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
    return e[r]
}
const sh = (e,t,n)=>(((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , z0 = 1e-7
  , _0 = 12;
function I0(e, t, n, r, i) {
    let o, s, l = 0;
    do
        s = t + (n - t) / 2,
        o = sh(s, r, i) - e,
        o > 0 ? n = s : t = s;
    while (Math.abs(o) > z0 && ++l < _0);
    return s
}
function li(e, t, n, r) {
    if (e === t && n === r)
        return ae;
    const i = o=>I0(o, 0, 1, e, n);
    return o=>o === 0 || o === 1 ? o : sh(i(o), t, r)
}
const j0 = li(.42, 0, 1, 1)
  , B0 = li(0, 0, .58, 1)
  , lh = li(.42, 0, .58, 1)
  , eu = (e,t)=>n=>!!(ii(n) && Uy.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
  , ah = (e,t,n)=>r=>{
    if (!ii(r))
        return r;
    const [i,o,s,l] = r.match(Zr);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(o),
        [n]: parseFloat(s),
        alpha: l !== void 0 ? parseFloat(l) : 1
    }
}
  , U0 = e=>pn(0, 255, e)
  , Es = {
    ...vn,
    transform: e=>Math.round(U0(e))
}
  , on = {
    test: eu("rgb", "red"),
    parse: ah("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1})=>"rgba(" + Es.transform(e) + ", " + Es.transform(t) + ", " + Es.transform(n) + ", " + Er(Tr.transform(r)) + ")"
};
function W0(e) {
    let t = ""
      , n = ""
      , r = ""
      , i = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    i = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    i = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    i += i),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const Fl = {
    test: eu("#"),
    parse: W0,
    transform: on.transform
}
  , Fn = {
    test: eu("hsl", "hue"),
    parse: ah("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1})=>"hsla(" + Math.round(e) + ", " + ot.transform(Er(t)) + ", " + ot.transform(Er(n)) + ", " + Er(Tr.transform(r)) + ")"
}
  , ge = {
    test: e=>on.test(e) || Fl.test(e) || Fn.test(e),
    parse: e=>on.test(e) ? on.parse(e) : Fn.test(e) ? Fn.parse(e) : Fl.parse(e),
    transform: e=>ii(e) ? e : e.hasOwnProperty("red") ? on.transform(e) : Fn.transform(e)
}
  , K = (e,t,n)=>-n * e + n * t + e;
function As(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function H0({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let i = 0
      , o = 0
      , s = 0;
    if (!t)
        i = o = s = n;
    else {
        const l = n < .5 ? n * (1 + t) : n + t - n * t
          , a = 2 * n - l;
        i = As(a, l, e + 1 / 3),
        o = As(a, l, e),
        s = As(a, l, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}
const Vs = (e,t,n)=>{
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r))
}
  , $0 = [Fl, on, Fn]
  , Q0 = e=>$0.find(t=>t.test(e));
function Lc(e) {
    const t = Q0(e);
    let n = t.parse(e);
    return t === Fn && (n = H0(n)),
    n
}
const uh = (e,t)=>{
    const n = Lc(e)
      , r = Lc(t)
      , i = {
        ...n
    };
    return o=>(i.red = Vs(n.red, r.red, o),
    i.green = Vs(n.green, r.green, o),
    i.blue = Vs(n.blue, r.blue, o),
    i.alpha = K(n.alpha, r.alpha, o),
    on.transform(i))
}
  , ch = "${c}"
  , fh = "${n}";
function K0(e) {
    var t, n;
    return isNaN(e) && ii(e) && (((t = e.match(Zr)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Ml)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
function xo(e) {
    typeof e == "number" && (e = `${e}`);
    const t = [];
    let n = 0
      , r = 0;
    const i = e.match(Ml);
    i && (n = i.length,
    e = e.replace(Ml, ch),
    t.push(...i.map(ge.parse)));
    const o = e.match(Zr);
    return o && (r = o.length,
    e = e.replace(Zr, fh),
    t.push(...o.map(vn.parse))),
    {
        values: t,
        numColors: n,
        numNumbers: r,
        tokenised: e
    }
}
function dh(e) {
    return xo(e).values
}
function ph(e) {
    const {values: t, numColors: n, tokenised: r} = xo(e)
      , i = t.length;
    return o=>{
        let s = r;
        for (let l = 0; l < i; l++)
            s = s.replace(l < n ? ch : fh, l < n ? ge.transform(o[l]) : Er(o[l]));
        return s
    }
}
const G0 = e=>typeof e == "number" ? 0 : e;
function X0(e) {
    const t = dh(e);
    return ph(e)(t.map(G0))
}
const Ht = {
    test: K0,
    parse: dh,
    createTransformer: ph,
    getAnimatableNone: X0
};
function hh(e, t) {
    return typeof e == "number" ? n=>K(e, t, n) : ge.test(e) ? uh(e, t) : gh(e, t)
}
const mh = (e,t)=>{
    const n = [...e]
      , r = n.length
      , i = e.map((o,s)=>hh(o, t[s]));
    return o=>{
        for (let s = 0; s < r; s++)
            n[s] = i[s](o);
        return n
    }
}
  , Y0 = (e,t)=>{
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = hh(e[i], t[i]));
    return i=>{
        for (const o in r)
            n[o] = r[o](i);
        return n
    }
}
  , gh = (e,t)=>{
    const n = Ht.createTransformer(t)
      , r = xo(e)
      , i = xo(t);
    return r.numColors === i.numColors && r.numNumbers >= i.numNumbers ? It(mh(r.values, i.values), n) : s=>`${s > 0 ? t : e}`
}
  , qr = (e,t,n)=>{
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
  , Rc = (e,t)=>n=>K(e, t, n);
function Z0(e) {
    return typeof e == "number" ? Rc : typeof e == "string" ? ge.test(e) ? uh : gh : Array.isArray(e) ? mh : typeof e == "object" ? Y0 : Rc
}
function J0(e, t, n) {
    const r = []
      , i = n || Z0(e[0])
      , o = e.length - 1;
    for (let s = 0; s < o; s++) {
        let l = i(e[s], e[s + 1]);
        if (t) {
            const a = Array.isArray(t) ? t[s] : t;
            l = It(a, l)
        }
        r.push(l)
    }
    return r
}
function yh(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    const o = e.length;
    if (wo(o === t.length),
    wo(!r || !Array.isArray(r) || r.length === o - 1),
    o === 1)
        return ()=>t[0];
    e[0] > e[o - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const s = J0(t, r, i)
      , l = s.length
      , a = u=>{
        let c = 0;
        if (l > 1)
            for (; c < e.length - 2 && !(u < e[c + 1]); c++)
                ;
        const f = qr(e[c], e[c + 1], u);
        return s[c](f)
    }
    ;
    return n ? u=>a(pn(e[0], e[o - 1], u)) : a
}
function q0(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = qr(0, t, r);
        e.push(K(n, 1, i))
    }
}
function b0(e) {
    const t = [0];
    return q0(t, e.length - 1),
    t
}
function ev(e, t) {
    return e.map(n=>n * t)
}
const vh = e=>t=>t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , wh = e=>t=>1 - e(1 - t)
  , xh = e=>1 - Math.sin(Math.acos(e))
  , tu = wh(xh)
  , tv = vh(tu)
  , Sh = li(.33, 1.53, .69, .99)
  , nu = wh(Sh)
  , nv = vh(nu)
  , rv = e=>(e *= 2) < 1 ? .5 * nu(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , iv = {
    linear: ae,
    easeIn: j0,
    easeInOut: lh,
    easeOut: B0,
    circIn: xh,
    circInOut: tv,
    circOut: tu,
    backIn: nu,
    backInOut: nv,
    backOut: Sh,
    anticipate: rv
}
  , Dc = e=>{
    if (Array.isArray(e)) {
        wo(e.length === 4);
        const [t,n,r,i] = e;
        return li(t, n, r, i)
    } else if (typeof e == "string")
        return iv[e];
    return e
}
  , ov = e=>Array.isArray(e) && typeof e[0] != "number";
function sv(e, t) {
    return e.map(()=>t || lh).splice(0, e.length - 1)
}
function So({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const i = ov(r) ? r.map(Dc) : Dc(r)
      , o = {
        done: !1,
        value: t[0]
    }
      , s = ev(n && n.length === t.length ? n : b0(t), e)
      , l = yh(s, t, {
        ease: Array.isArray(i) ? i : sv(t, i)
    });
    return {
        calculatedDuration: e,
        next: a=>(o.value = l(a),
        o.done = a >= e,
        o)
    }
}
function Ph(e, t) {
    return t ? e * (1e3 / t) : 0
}
const lv = 5;
function Ch(e, t, n) {
    const r = Math.max(t - lv, 0);
    return Ph(n - e(r), t - r)
}
const Ls = .001
  , av = .01
  , Mc = 10
  , uv = .05
  , cv = 1;
function fv({duration: e=800, bounce: t=.25, velocity: n=0, mass: r=1}) {
    let i, o;
    R0(e <= jt(Mc));
    let s = 1 - t;
    s = pn(uv, cv, s),
    e = pn(av, Mc, hn(e)),
    s < 1 ? (i = u=>{
        const c = u * s
          , f = c * e
          , d = c - n
          , m = zl(u, s)
          , y = Math.exp(-f);
        return Ls - d / m * y
    }
    ,
    o = u=>{
        const f = u * s * e
          , d = f * n + n
          , m = Math.pow(s, 2) * Math.pow(u, 2) * e
          , y = Math.exp(-f)
          , v = zl(Math.pow(u, 2), s);
        return (-i(u) + Ls > 0 ? -1 : 1) * ((d - m) * y) / v
    }
    ) : (i = u=>{
        const c = Math.exp(-u * e)
          , f = (u - n) * e + 1;
        return -Ls + c * f
    }
    ,
    o = u=>{
        const c = Math.exp(-u * e)
          , f = (n - u) * (e * e);
        return c * f
    }
    );
    const l = 5 / e
      , a = pv(i, o, l);
    if (e = jt(e),
    isNaN(a))
        return {
            stiffness: 100,
            damping: 10,
            duration: e
        };
    {
        const u = Math.pow(a, 2) * r;
        return {
            stiffness: u,
            damping: s * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const dv = 12;
function pv(e, t, n) {
    let r = n;
    for (let i = 1; i < dv; i++)
        r = r - e(r) / t(r);
    return r
}
function zl(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const hv = ["duration", "bounce"]
  , mv = ["stiffness", "damping", "mass"];
function Nc(e, t) {
    return t.some(n=>e[n] !== void 0)
}
function gv(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Nc(e, mv) && Nc(e, hv)) {
        const n = fv(e);
        t = {
            ...t,
            ...n,
            velocity: 0,
            mass: 1
        },
        t.isResolvedFromDuration = !0
    }
    return t
}
function kh({keyframes: e, restDelta: t, restSpeed: n, ...r}) {
    const i = e[0]
      , o = e[e.length - 1]
      , s = {
        done: !1,
        value: i
    }
      , {stiffness: l, damping: a, mass: u, velocity: c, duration: f, isResolvedFromDuration: d} = gv(r)
      , m = c ? -hn(c) : 0
      , y = a / (2 * Math.sqrt(l * u))
      , v = o - i
      , T = hn(Math.sqrt(l / u))
      , g = Math.abs(v) < 5;
    n || (n = g ? .01 : 2),
    t || (t = g ? .005 : .5);
    let p;
    if (y < 1) {
        const h = zl(T, y);
        p = w=>{
            const x = Math.exp(-y * T * w);
            return o - x * ((m + y * T * v) / h * Math.sin(h * w) + v * Math.cos(h * w))
        }
    } else if (y === 1)
        p = h=>o - Math.exp(-T * h) * (v + (m + T * v) * h);
    else {
        const h = T * Math.sqrt(y * y - 1);
        p = w=>{
            const x = Math.exp(-y * T * w)
              , E = Math.min(h * w, 300);
            return o - x * ((m + y * T * v) * Math.sinh(E) + h * v * Math.cosh(E)) / h
        }
    }
    return {
        calculatedDuration: d && f || null,
        next: h=>{
            const w = p(h);
            if (d)
                s.done = h >= f;
            else {
                let x = m;
                h !== 0 && (y < 1 ? x = Ch(p, h, w) : x = 0);
                const E = Math.abs(x) <= n
                  , C = Math.abs(o - w) <= t;
                s.done = E && C
            }
            return s.value = s.done ? o : w,
            s
        }
    }
}
function Oc({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: o=500, modifyTarget: s, min: l, max: a, restDelta: u=.5, restSpeed: c}) {
    const f = e[0]
      , d = {
        done: !1,
        value: f
    }
      , m = P=>l !== void 0 && P < l || a !== void 0 && P > a
      , y = P=>l === void 0 ? a : a === void 0 || Math.abs(l - P) < Math.abs(a - P) ? l : a;
    let v = n * t;
    const T = f + v
      , g = s === void 0 ? T : s(T);
    g !== T && (v = g - f);
    const p = P=>-v * Math.exp(-P / r)
      , h = P=>g + p(P)
      , w = P=>{
        const O = p(P)
          , R = h(P);
        d.done = Math.abs(O) <= u,
        d.value = d.done ? g : R
    }
    ;
    let x, E;
    const C = P=>{
        m(d.value) && (x = P,
        E = kh({
            keyframes: [d.value, y(d.value)],
            velocity: Ch(h, P, d.value),
            damping: i,
            stiffness: o,
            restDelta: u,
            restSpeed: c
        }))
    }
    ;
    return C(0),
    {
        calculatedDuration: null,
        next: P=>{
            let O = !1;
            return !E && x === void 0 && (O = !0,
            w(P),
            C(P)),
            x !== void 0 && P > x ? E.next(P - x) : (!O && w(P),
            d)
        }
    }
}
const yv = e=>{
    const t = ({timestamp: n})=>e(n);
    return {
        start: ()=>W.update(t, !0),
        stop: ()=>Wt.update(t),
        now: ()=>he.isProcessing ? he.timestamp : performance.now()
    }
}
  , vv = {
    decay: Oc,
    inertia: Oc,
    tween: So,
    keyframes: So,
    spring: kh
}
  , wv = 2e4;
function xv(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < wv; )
        t += n,
        r = e.next(t);
    return t
}
function Po({autoplay: e=!0, delay: t=0, driver: n=yv, keyframes: r, type: i="keyframes", repeat: o=0, repeatDelay: s=0, repeatType: l="loop", onPlay: a, onStop: u, onComplete: c, onUpdate: f, ...d}) {
    let m = 1, y = !1, v, T;
    const g = ()=>{
        v && v(),
        T = new Promise(N=>{
            v = N
        }
        )
    }
    ;
    g();
    let p;
    const h = vv[i] || So;
    let w;
    h !== So && typeof r[0] != "number" && (w = yh([0, 100], r, {
        clamp: !1
    }),
    r = [0, 100]);
    const x = h({
        ...d,
        keyframes: r
    });
    let E;
    l === "mirror" && (E = h({
        ...d,
        keyframes: [...r].reverse(),
        velocity: -(d.velocity || 0)
    }));
    let C = "idle"
      , P = null
      , O = null
      , R = null;
    x.calculatedDuration === null && o && (x.calculatedDuration = xv(x));
    const {calculatedDuration: Z} = x;
    let Se = 1 / 0
      , ze = 1 / 0;
    Z !== null && (Se = Z + s,
    ze = Se * (o + 1) - s);
    let J = 0;
    const q = N=>{
        if (O === null)
            return;
        P !== null ? J = P : J = (N - O) * m,
        J = Math.max(J - t, 0),
        C === "finished" && P === null && (J = ze);
        let H = J
          , Xt = x;
        if (o) {
            const wt = J / Se;
            let ai = Math.floor(wt)
              , Yt = wt % 1;
            !Yt && wt >= 1 && (Yt = 1),
            Yt === 1 && ai--,
            ai = Math.min(ai, o + 1);
            const uu = !!(ai % 2);
            uu && (l === "reverse" ? (Yt = 1 - Yt,
            s && (Yt -= s / Se)) : l === "mirror" && (Xt = E));
            let cu = pn(0, 1, Yt);
            J > ze && (cu = l === "reverse" && uu ? 1 : 0),
            H = cu * Se
        }
        const Ve = Xt.next(H);
        w && (Ve.value = w(Ve.value));
        let {done: wn} = Ve;
        Z !== null && (wn = J >= ze);
        const st = P === null && (C === "finished" || C === "running" && wn || m < 0 && J <= 0);
        return f && f(Ve.value),
        st && A(),
        Ve
    }
      , _e = ()=>{
        p && p.stop(),
        p = void 0
    }
      , qe = ()=>{
        C = "idle",
        _e(),
        g(),
        O = R = null
    }
      , A = ()=>{
        C = "finished",
        c && c(),
        _e(),
        g()
    }
      , D = ()=>{
        if (y)
            return;
        p || (p = n(q));
        const N = p.now();
        a && a(),
        C = "running",
        P !== null ? O = N - P : O || (O = N),
        R = O,
        P = null,
        p.start()
    }
    ;
    e && D();
    const M = {
        then(N, H) {
            return T.then(N, H)
        },
        get time() {
            return hn(J)
        },
        set time(N) {
            N = jt(N),
            J = N,
            P !== null || !p || m === 0 ? P = N : O = p.now() - N / m
        },
        get speed() {
            return m
        },
        set speed(N) {
            N === m || !p || (m = N,
            M.time = hn(J))
        },
        get state() {
            return C
        },
        play: D,
        pause: ()=>{
            C = "paused",
            P = J
        }
        ,
        stop: ()=>{
            y = !0,
            C !== "idle" && (C = "idle",
            u && u(),
            qe())
        }
        ,
        cancel: ()=>{
            R !== null && q(R),
            qe()
        }
        ,
        complete: ()=>{
            C = "finished"
        }
        ,
        sample: N=>(O = 0,
        q(N))
    };
    return M
}
const Sv = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"])
  , Ai = 10
  , Pv = 2e4
  , Cv = (e,t)=>t.type === "spring" || e === "backgroundColor" || !M0(t.ease);
function kv(e, t, {onUpdate: n, onComplete: r, ...i}) {
    if (!(oh.waapi() && Sv.has(t) && !i.repeatDelay && i.repeatType !== "mirror" && i.damping !== 0 && i.type !== "inertia"))
        return !1;
    let s = !1, l, a;
    const u = ()=>{
        a = new Promise(v=>{
            l = v
        }
        )
    }
    ;
    u();
    let {keyframes: c, duration: f=300, ease: d} = i;
    if (Cv(t, i)) {
        const v = Po({
            ...i,
            repeat: 0,
            delay: 0
        });
        let T = {
            done: !1,
            value: c[0]
        };
        const g = [];
        let p = 0;
        for (; !T.done && p < Pv; )
            T = v.sample(p),
            g.push(T.value),
            p += Ai;
        c = g,
        f = p - Ai,
        d = "linear"
    }
    const m = O0(e.owner.current, t, c, {
        ...i,
        duration: f,
        ease: d
    })
      , y = ()=>{
        W.update(()=>m.cancel()),
        l(),
        u()
    }
    ;
    return m.onfinish = ()=>{
        e.set(F0(c, i)),
        r && r(),
        y()
    }
    ,
    {
        then(v, T) {
            return a.then(v, T)
        },
        get time() {
            return hn(m.currentTime || 0)
        },
        set time(v) {
            m.currentTime = jt(v)
        },
        get speed() {
            return m.playbackRate
        },
        set speed(v) {
            m.playbackRate = v
        },
        play: ()=>{
            s || m.play()
        }
        ,
        pause: ()=>m.pause(),
        stop: ()=>{
            if (s = !0,
            m.playState === "idle")
                return;
            const {currentTime: v} = m;
            if (v) {
                const T = Po({
                    ...i,
                    autoplay: !1
                });
                e.setWithVelocity(T.sample(v - Ai).value, T.sample(v).value, Ai)
            }
            y()
        }
        ,
        complete: ()=>m.finish(),
        cancel: y
    }
}
function Tv({keyframes: e, delay: t, onUpdate: n, onComplete: r}) {
    const i = ()=>(n && n(e[e.length - 1]),
    r && r(),
    {
        time: 0,
        speed: 1,
        play: ae,
        pause: ae,
        stop: ae,
        then: o=>(o(),
        Promise.resolve()),
        cancel: ae,
        complete: ae
    });
    return t ? Po({
        keyframes: [0, 1],
        duration: t,
        onComplete: i
    }) : i()
}
const Ev = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , Av = e=>({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , Vv = {
    type: "keyframes",
    duration: .8
}
  , Lv = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , Rv = (e,{keyframes: t})=>t.length > 2 ? Vv : yn.has(e) ? e.startsWith("scale") ? Av(t[1]) : Ev : Lv
  , _l = (e,t)=>e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && Ht.test(t) && !t.startsWith("url("))
  , Dv = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Mv(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(Zr) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let o = Dv.has(t) ? 1 : 0;
    return r !== n && (o *= 100),
    t + "(" + o + i + ")"
}
const Nv = /([a-z-]*)\(.*?\)/g
  , Il = {
    ...Ht,
    getAnimatableNone: e=>{
        const t = e.match(Nv);
        return t ? t.map(Mv).join(" ") : e
    }
}
  , Ov = {
    ...Wp,
    color: ge,
    backgroundColor: ge,
    outlineColor: ge,
    fill: ge,
    stroke: ge,
    borderColor: ge,
    borderTopColor: ge,
    borderRightColor: ge,
    borderBottomColor: ge,
    borderLeftColor: ge,
    filter: Il,
    WebkitFilter: Il
}
  , ru = e=>Ov[e];
function iu(e, t) {
    let n = ru(e);
    return n !== Il && (n = Ht),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
function Fv({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: l, from: a, elapsed: u, ...c}) {
    return !!Object.keys(c).length
}
function Fc(e) {
    return e === 0 || typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1
}
function zc(e) {
    return typeof e == "number" ? 0 : iu("", e)
}
function Th(e, t) {
    return e[t] || e.default || e
}
function zv(e, t, n, r) {
    const i = _l(t, n);
    let o = r.from !== void 0 ? r.from : e.get();
    return o === "none" && i && typeof n == "string" ? o = iu(t, n) : Fc(o) && typeof n == "string" ? o = zc(n) : !Array.isArray(n) && Fc(n) && typeof o == "string" && (n = zc(o)),
    Array.isArray(n) ? (n[0] === null && (n[0] = o),
    n) : [o, n]
}
const ou = (e,t,n,r={})=>i=>{
    const o = Th(r, e) || {}
      , s = o.delay || r.delay || 0;
    let {elapsed: l=0} = r;
    l = l - jt(s);
    const a = zv(t, e, n, o)
      , u = a[0]
      , c = a[a.length - 1]
      , f = _l(e, u)
      , d = _l(e, c);
    let m = {
        keyframes: a,
        velocity: t.getVelocity(),
        ease: "easeOut",
        ...o,
        delay: -l,
        onUpdate: y=>{
            t.set(y),
            o.onUpdate && o.onUpdate(y)
        }
        ,
        onComplete: ()=>{
            i(),
            o.onComplete && o.onComplete()
        }
    };
    if (!f || !d || D0.current || o.type === !1)
        return Tv(m);
    if (Fv(o) || (m = {
        ...m,
        ...Rv(e, m)
    }),
    m.duration && (m.duration = jt(m.duration)),
    m.repeatDelay && (m.repeatDelay = jt(m.repeatDelay)),
    t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
        const y = kv(t, e, m);
        if (y)
            return y
    }
    return Po(m)
}
;
function Co(e) {
    return !!(Ae(e) && e.add)
}
const _v = e=>/^\-?\d*\.?\d+$/.test(e)
  , Iv = e=>/^0[^.\s]+$/.test(e);
function su(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function lu(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class au {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return su(this.subscriptions, t),
        ()=>lu(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let o = 0; o < i; o++) {
                    const s = this.subscriptions[o];
                    s && s(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const jv = e=>!isNaN(parseFloat(e));
class Bv {
    constructor(t, n={}) {
        this.version = "10.8.4",
        this.timeDelta = 0,
        this.lastUpdated = 0,
        this.canTrackVelocity = !1,
        this.events = {},
        this.updateAndNotify = (r,i=!0)=>{
            this.prev = this.current,
            this.current = r;
            const {delta: o, timestamp: s} = he;
            this.lastUpdated !== s && (this.timeDelta = o,
            this.lastUpdated = s,
            W.postRender(this.scheduleVelocityCheck)),
            this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
            this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
            i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.scheduleVelocityCheck = ()=>W.postRender(this.velocityCheck),
        this.velocityCheck = ({timestamp: r})=>{
            r !== this.lastUpdated && (this.prev = this.current,
            this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
        }
        ,
        this.hasAnimated = !1,
        this.prev = this.current = t,
        this.canTrackVelocity = jv(this.current),
        this.owner = n.owner
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new au);
        const r = this.events[t].add(n);
        return t === "change" ? ()=>{
            r(),
            W.read(()=>{
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = t,
        this.timeDelta = r
    }
    jump(t) {
        this.updateAndNotify(t),
        this.prev = t,
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        return this.canTrackVelocity ? Ph(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
    }
    start(t) {
        return this.stop(),
        new Promise(n=>{
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then(()=>{
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Zn(e, t) {
    return new Bv(e,t)
}
const Eh = e=>t=>t.test(e)
  , Uv = {
    test: e=>e === "auto",
    parse: e=>e
}
  , Ah = [vn, L, ot, St, Hy, Wy, Uv]
  , ar = e=>Ah.find(Eh(e))
  , Wv = [...Ah, ge, Ht]
  , Hv = e=>Wv.find(Eh(e));
function $v(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Zn(n))
}
function Qv(e, t) {
    const n = Yo(e, t);
    let {transitionEnd: r={}, transition: i={}, ...o} = n ? e.makeTargetAnimatable(n, !1) : {};
    o = {
        ...o,
        ...r
    };
    for (const s in o) {
        const l = r0(o[s]);
        $v(e, s, l)
    }
}
function Kv(e, t, n) {
    var r, i;
    const o = Object.keys(t).filter(l=>!e.hasValue(l))
      , s = o.length;
    if (s)
        for (let l = 0; l < s; l++) {
            const a = o[l]
              , u = t[a];
            let c = null;
            Array.isArray(u) && (c = u[0]),
            c === null && (c = (i = (r = n[a]) !== null && r !== void 0 ? r : e.readValue(a)) !== null && i !== void 0 ? i : t[a]),
            c != null && (typeof c == "string" && (_v(c) || Iv(c)) ? c = parseFloat(c) : !Hv(c) && Ht.test(u) && (c = iu(a, u)),
            e.addValue(a, Zn(c, {
                owner: e
            })),
            n[a] === void 0 && (n[a] = c),
            c !== null && e.setBaseTarget(a, c))
        }
}
function Gv(e, t) {
    return t ? (t[e] || t.default || t).from : void 0
}
function Xv(e, t, n) {
    const r = {};
    for (const i in e) {
        const o = Gv(i, t);
        if (o !== void 0)
            r[i] = o;
        else {
            const s = n.getValue(i);
            s && (r[i] = s.get())
        }
    }
    return r
}
function Yv({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function Vh(e, t, {delay: n=0, transitionOverride: r, type: i}={}) {
    let {transition: o=e.getDefaultTransition(), transitionEnd: s, ...l} = e.makeTargetAnimatable(t);
    const a = e.getValue("willChange");
    r && (o = r);
    const u = []
      , c = i && e.animationState && e.animationState.getState()[i];
    for (const f in l) {
        const d = e.getValue(f)
          , m = l[f];
        if (!d || m === void 0 || c && Yv(c, f))
            continue;
        const y = {
            delay: n,
            elapsed: 0,
            ...o
        };
        if (window.HandoffAppearAnimations && !d.hasAnimated) {
            const T = e.getProps()[L0];
            T && (y.elapsed = window.HandoffAppearAnimations(T, f, d, W))
        }
        d.start(ou(f, d, m, e.shouldReduceMotion && yn.has(f) ? {
            type: !1
        } : y));
        const v = d.animation;
        Co(a) && (a.add(f),
        v.then(()=>a.remove(f))),
        u.push(v)
    }
    return s && Promise.all(u).then(()=>{
        s && Qv(e, s)
    }
    ),
    u
}
function jl(e, t, n={}) {
    const r = Yo(e, t, n.custom);
    let {transition: i=e.getDefaultTransition() || {}} = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const o = r ? ()=>Promise.all(Vh(e, r, n)) : ()=>Promise.resolve()
      , s = e.variantChildren && e.variantChildren.size ? (a=0)=>{
        const {delayChildren: u=0, staggerChildren: c, staggerDirection: f} = i;
        return Zv(e, t, u + a, c, f, n)
    }
    : ()=>Promise.resolve()
      , {when: l} = i;
    if (l) {
        const [a,u] = l === "beforeChildren" ? [o, s] : [s, o];
        return a().then(()=>u())
    } else
        return Promise.all([o(), s(n.delay)])
}
function Zv(e, t, n=0, r=0, i=1, o) {
    const s = []
      , l = (e.variantChildren.size - 1) * r
      , a = i === 1 ? (u=0)=>u * r : (u=0)=>l - u * r;
    return Array.from(e.variantChildren).sort(Jv).forEach((u,c)=>{
        u.notify("AnimationStart", t),
        s.push(jl(u, t, {
            ...o,
            delay: n + a(c)
        }).then(()=>u.notify("AnimationComplete", t)))
    }
    ),
    Promise.all(s)
}
function Jv(e, t) {
    return e.sortNodePosition(t)
}
function qv(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(o=>jl(e, o, n));
        r = Promise.all(i)
    } else if (typeof t == "string")
        r = jl(e, t, n);
    else {
        const i = typeof t == "function" ? Yo(e, t, n.custom) : t;
        r = Promise.all(Vh(e, i, n))
    }
    return r.then(()=>e.notify("AnimationComplete", t))
}
const bv = [...Wa].reverse()
  , e1 = Wa.length;
function t1(e) {
    return t=>Promise.all(t.map(({animation: n, options: r})=>qv(e, n, r)))
}
function n1(e) {
    let t = t1(e);
    const n = i1();
    let r = !0;
    const i = (a,u)=>{
        const c = Yo(e, u);
        if (c) {
            const {transition: f, transitionEnd: d, ...m} = c;
            a = {
                ...a,
                ...m,
                ...d
            }
        }
        return a
    }
    ;
    function o(a) {
        t = a(e)
    }
    function s(a, u) {
        const c = e.getProps()
          , f = e.getVariantContext(!0) || {}
          , d = []
          , m = new Set;
        let y = {}
          , v = 1 / 0;
        for (let g = 0; g < e1; g++) {
            const p = bv[g]
              , h = n[p]
              , w = c[p] !== void 0 ? c[p] : f[p]
              , x = Xr(w)
              , E = p === u ? h.isActive : null;
            E === !1 && (v = g);
            let C = w === f[p] && w !== c[p] && x;
            if (C && r && e.manuallyAnimateOnMount && (C = !1),
            h.protectedKeys = {
                ...y
            },
            !h.isActive && E === null || !w && !h.prevProp || $o(w) || typeof w == "boolean")
                continue;
            const P = r1(h.prevProp, w);
            let O = P || p === u && h.isActive && !C && x || g > v && x;
            const R = Array.isArray(w) ? w : [w];
            let Z = R.reduce(i, {});
            E === !1 && (Z = {});
            const {prevResolvedValues: Se={}} = h
              , ze = {
                ...Se,
                ...Z
            }
              , J = q=>{
                O = !0,
                m.delete(q),
                h.needsAnimating[q] = !0
            }
            ;
            for (const q in ze) {
                const _e = Z[q]
                  , qe = Se[q];
                y.hasOwnProperty(q) || (_e !== qe ? vo(_e) && vo(qe) ? !rh(_e, qe) || P ? J(q) : h.protectedKeys[q] = !0 : _e !== void 0 ? J(q) : m.add(q) : _e !== void 0 && m.has(q) ? J(q) : h.protectedKeys[q] = !0)
            }
            h.prevProp = w,
            h.prevResolvedValues = Z,
            h.isActive && (y = {
                ...y,
                ...Z
            }),
            r && e.blockInitialAnimation && (O = !1),
            O && !C && d.push(...R.map(q=>({
                animation: q,
                options: {
                    type: p,
                    ...a
                }
            })))
        }
        if (m.size) {
            const g = {};
            m.forEach(p=>{
                const h = e.getBaseTarget(p);
                h !== void 0 && (g[p] = h)
            }
            ),
            d.push({
                animation: g
            })
        }
        let T = !!d.length;
        return r && c.initial === !1 && !e.manuallyAnimateOnMount && (T = !1),
        r = !1,
        T ? t(d) : Promise.resolve()
    }
    function l(a, u, c) {
        var f;
        if (n[a].isActive === u)
            return Promise.resolve();
        (f = e.variantChildren) === null || f === void 0 || f.forEach(m=>{
            var y;
            return (y = m.animationState) === null || y === void 0 ? void 0 : y.setActive(a, u)
        }
        ),
        n[a].isActive = u;
        const d = s(c, a);
        for (const m in n)
            n[m].protectedKeys = {};
        return d
    }
    return {
        animateChanges: s,
        setActive: l,
        setAnimateFunction: o,
        getState: ()=>n
    }
}
function r1(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !rh(t, e) : !1
}
function Zt(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function i1() {
    return {
        animate: Zt(!0),
        whileInView: Zt(),
        whileHover: Zt(),
        whileTap: Zt(),
        whileDrag: Zt(),
        whileFocus: Zt(),
        exit: Zt()
    }
}
class o1 extends Gt {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = n1(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        this.unmount(),
        $o(t) && (this.unmount = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {}
}
let s1 = 0;
class l1 extends Gt {
    constructor() {
        super(...arguments),
        this.id = s1++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n, custom: r} = this.node.presenceContext
          , {isPresent: i} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === i)
            return;
        const o = this.node.animationState.setActive("exit", !t, {
            custom: r ?? this.node.getProps().custom
        });
        n && !t && o.then(()=>n(this.id))
    }
    mount() {
        const {register: t} = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const a1 = {
    animation: {
        Feature: o1
    },
    exit: {
        Feature: l1
    }
}
  , _c = (e,t)=>Math.abs(e - t);
function u1(e, t) {
    const n = _c(e.x, t.x)
      , r = _c(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class Lh {
    constructor(t, n, {transformPagePoint: r}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.updatePoint = ()=>{
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const u = Ds(this.lastMoveEventInfo, this.history)
              , c = this.startEvent !== null
              , f = u1(u.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!c && !f)
                return;
            const {point: d} = u
              , {timestamp: m} = he;
            this.history.push({
                ...d,
                timestamp: m
            });
            const {onStart: y, onMove: v} = this.handlers;
            c || (y && y(this.lastMoveEvent, u),
            this.startEvent = this.lastMoveEvent),
            v && v(this.lastMoveEvent, u)
        }
        ,
        this.handlePointerMove = (u,c)=>{
            this.lastMoveEvent = u,
            this.lastMoveEventInfo = Rs(c, this.transformPagePoint),
            W.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (u,c)=>{
            if (this.end(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const {onEnd: f, onSessionEnd: d} = this.handlers
              , m = Ds(u.type === "pointercancel" ? this.lastMoveEventInfo : Rs(c, this.transformPagePoint), this.history);
            this.startEvent && f && f(u, m),
            d && d(u, m)
        }
        ,
        !Jp(t))
            return;
        this.handlers = n,
        this.transformPagePoint = r;
        const i = Go(t)
          , o = Rs(i, this.transformPagePoint)
          , {point: s} = o
          , {timestamp: l} = he;
        this.history = [{
            ...s,
            timestamp: l
        }];
        const {onSessionStart: a} = n;
        a && a(t, Ds(o, this.history)),
        this.removeListeners = It(pt(window, "pointermove", this.handlePointerMove), pt(window, "pointerup", this.handlePointerUp), pt(window, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Wt.update(this.updatePoint)
    }
}
function Rs(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function Ic(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function Ds({point: e}, t) {
    return {
        point: e,
        delta: Ic(e, Rh(t)),
        offset: Ic(e, c1(t)),
        velocity: f1(t, .1)
    }
}
function c1(e) {
    return e[0]
}
function Rh(e) {
    return e[e.length - 1]
}
function f1(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const i = Rh(e);
    for (; n >= 0 && (r = e[n],
    !(i.timestamp - r.timestamp > jt(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const o = hn(i.timestamp - r.timestamp);
    if (o === 0)
        return {
            x: 0,
            y: 0
        };
    const s = {
        x: (i.x - r.x) / o,
        y: (i.y - r.y) / o
    };
    return s.x === 1 / 0 && (s.x = 0),
    s.y === 1 / 0 && (s.y = 0),
    s
}
function Ne(e) {
    return e.max - e.min
}
function Bl(e, t=0, n=.01) {
    return Math.abs(e - t) <= n
}
function jc(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = K(t.min, t.max, e.origin),
    e.scale = Ne(n) / Ne(t),
    (Bl(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    e.translate = K(n.min, n.max, e.origin) - e.originPoint,
    (Bl(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}
function Ar(e, t, n, r) {
    jc(e.x, t.x, n.x, r ? r.originX : void 0),
    jc(e.y, t.y, n.y, r ? r.originY : void 0)
}
function Bc(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + Ne(t)
}
function d1(e, t, n) {
    Bc(e.x, t.x, n.x),
    Bc(e.y, t.y, n.y)
}
function Uc(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + Ne(t)
}
function Vr(e, t, n) {
    Uc(e.x, t.x, n.x),
    Uc(e.y, t.y, n.y)
}
function p1(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? K(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? K(n, e, r.max) : Math.min(e, n)),
    e
}
function Wc(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function h1(e, {top: t, left: n, bottom: r, right: i}) {
    return {
        x: Wc(e.x, n, i),
        y: Wc(e.y, t, r)
    }
}
function Hc(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function m1(e, t) {
    return {
        x: Hc(e.x, t.x),
        y: Hc(e.y, t.y)
    }
}
function g1(e, t) {
    let n = .5;
    const r = Ne(e)
      , i = Ne(t);
    return i > r ? n = qr(t.min, t.max - r, e.min) : r > i && (n = qr(e.min, e.max - i, t.min)),
    pn(0, 1, n)
}
function y1(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const Ul = .35;
function v1(e=Ul) {
    return e === !1 ? e = 0 : e === !0 && (e = Ul),
    {
        x: $c(e, "left", "right"),
        y: $c(e, "top", "bottom")
    }
}
function $c(e, t, n) {
    return {
        min: Qc(e, t),
        max: Qc(e, n)
    }
}
function Qc(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const Kc = ()=>({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Lr = ()=>({
    x: Kc(),
    y: Kc()
})
  , Gc = ()=>({
    min: 0,
    max: 0
})
  , ee = ()=>({
    x: Gc(),
    y: Gc()
});
function tt(e) {
    return [e("x"), e("y")]
}
function Dh({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function w1({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function x1(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function Ms(e) {
    return e === void 0 || e === 1
}
function Wl({scale: e, scaleX: t, scaleY: n}) {
    return !Ms(e) || !Ms(t) || !Ms(n)
}
function bt(e) {
    return Wl(e) || Mh(e) || e.z || e.rotate || e.rotateX || e.rotateY
}
function Mh(e) {
    return Xc(e.x) || Xc(e.y)
}
function Xc(e) {
    return e && e !== "0%"
}
function ko(e, t, n) {
    const r = e - n
      , i = t * r;
    return n + i
}
function Yc(e, t, n, r, i) {
    return i !== void 0 && (e = ko(e, i, r)),
    ko(e, n, r) + t
}
function Hl(e, t=0, n=1, r, i) {
    e.min = Yc(e.min, t, n, r, i),
    e.max = Yc(e.max, t, n, r, i)
}
function Nh(e, {x: t, y: n}) {
    Hl(e.x, t.translate, t.scale, t.originPoint),
    Hl(e.y, n.translate, n.scale, n.originPoint)
}
function S1(e, t, n, r=!1) {
    const i = n.length;
    if (!i)
        return;
    t.x = t.y = 1;
    let o, s;
    for (let l = 0; l < i; l++) {
        o = n[l],
        s = o.projectionDelta;
        const a = o.instance;
        a && a.style && a.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && zn(e, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }),
        s && (t.x *= s.x.scale,
        t.y *= s.y.scale,
        Nh(e, s)),
        r && bt(o.latestValues) && zn(e, o.latestValues))
    }
    t.x = Zc(t.x),
    t.y = Zc(t.y)
}
function Zc(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
}
function kt(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function Jc(e, t, [n,r,i]) {
    const o = t[i] !== void 0 ? t[i] : .5
      , s = K(e.min, e.max, o);
    Hl(e, t[n], t[r], s, t.scale)
}
const P1 = ["x", "scaleX", "originX"]
  , C1 = ["y", "scaleY", "originY"];
function zn(e, t) {
    Jc(e.x, t, P1),
    Jc(e.y, t, C1)
}
function Oh(e, t) {
    return Dh(x1(e.getBoundingClientRect(), t))
}
function k1(e, t, n) {
    const r = Oh(e, n)
      , {scroll: i} = t;
    return i && (kt(r.x, i.offset.x),
    kt(r.y, i.offset.y)),
    r
}
const T1 = new WeakMap;
class E1 {
    constructor(t) {
        this.openGlobalLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = ee(),
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1}={}) {
        const {presenceContext: r} = this.visualElement;
        if (r && r.isPresent === !1)
            return;
        const i = a=>{
            this.stopAnimation(),
            n && this.snapToCursor(Go(a, "page").point)
        }
          , o = (a,u)=>{
            const {drag: c, dragPropagation: f, onDragStart: d} = this.getProps();
            if (c && !f && (this.openGlobalLock && this.openGlobalLock(),
            this.openGlobalLock = bp(c),
            !this.openGlobalLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            tt(y=>{
                let v = this.getAxisMotionValue(y).get() || 0;
                if (ot.test(v)) {
                    const {projection: T} = this.visualElement;
                    if (T && T.layout) {
                        const g = T.layout.layoutBox[y];
                        g && (v = Ne(g) * (parseFloat(v) / 100))
                    }
                }
                this.originPoint[y] = v
            }
            ),
            d && W.update(()=>d(a, u));
            const {animationState: m} = this.visualElement;
            m && m.setActive("whileDrag", !0)
        }
          , s = (a,u)=>{
            const {dragPropagation: c, dragDirectionLock: f, onDirectionLock: d, onDrag: m} = this.getProps();
            if (!c && !this.openGlobalLock)
                return;
            const {offset: y} = u;
            if (f && this.currentDirection === null) {
                this.currentDirection = A1(y),
                this.currentDirection !== null && d && d(this.currentDirection);
                return
            }
            this.updateAxis("x", u.point, y),
            this.updateAxis("y", u.point, y),
            this.visualElement.render(),
            m && m(a, u)
        }
          , l = (a,u)=>this.stop(a, u);
        this.panSession = new Lh(t,{
            onSessionStart: i,
            onStart: o,
            onMove: s,
            onSessionEnd: l
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint()
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(),
        !r)
            return;
        const {velocity: i} = n;
        this.startAnimation(i);
        const {onDragEnd: o} = this.getProps();
        o && W.update(()=>o(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: r} = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(),
        this.openGlobalLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {drag: i} = this.getProps();
        if (!r || !Vi(t, i, this.currentDirection))
            return;
        const o = this.getAxisMotionValue(t);
        let s = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (s = p1(s, this.constraints[t], this.elastic[t])),
        o.set(s)
    }
    resolveConstraints() {
        const {dragConstraints: t, dragElastic: n} = this.getProps()
          , {layout: r} = this.visualElement.projection || {}
          , i = this.constraints;
        t && On(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = h1(r.layoutBox, t) : this.constraints = !1,
        this.elastic = v1(n),
        i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && tt(o=>{
            this.getAxisMotionValue(o) && (this.constraints[o] = y1(r.layoutBox[o], this.constraints[o]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !On(t))
            return !1;
        const r = t.current
          , {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const o = k1(r, i.root, this.visualElement.getTransformPagePoint());
        let s = m1(i.layout.layoutBox, o);
        if (n) {
            const l = n(w1(s));
            this.hasMutatedConstraints = !!l,
            l && (s = Dh(l))
        }
        return s
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: l} = this.getProps()
          , a = this.constraints || {}
          , u = tt(c=>{
            if (!Vi(c, n, this.currentDirection))
                return;
            let f = a && a[c] || {};
            s && (f = {
                min: 0,
                max: 0
            });
            const d = i ? 200 : 1e6
              , m = i ? 40 : 1e7
              , y = {
                type: "inertia",
                velocity: r ? t[c] : 0,
                bounceStiffness: d,
                bounceDamping: m,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...o,
                ...f
            };
            return this.startAxisValueAnimation(c, y)
        }
        );
        return Promise.all(u).then(l)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return r.start(ou(t, r, 0, n))
    }
    stopAnimation() {
        tt(t=>this.getAxisMotionValue(t).stop())
    }
    getAxisMotionValue(t) {
        const n = "_drag" + t.toUpperCase()
          , r = this.visualElement.getProps()
          , i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        tt(n=>{
            const {drag: r} = this.getProps();
            if (!Vi(n, r, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , o = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: s, max: l} = i.layout.layoutBox[n];
                o.set(t[n] - K(s, l, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!On(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        tt(s=>{
            const l = this.getAxisMotionValue(s);
            if (l) {
                const a = l.get();
                i[s] = g1({
                    min: a,
                    max: a
                }, this.constraints[s])
            }
        }
        );
        const {transformTemplate: o} = this.visualElement.getProps();
        this.visualElement.current.style.transform = o ? o({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.resolveConstraints(),
        tt(s=>{
            if (!Vi(s, t, null))
                return;
            const l = this.getAxisMotionValue(s)
              , {min: a, max: u} = this.constraints[s];
            l.set(K(a, u, i[s]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        T1.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = pt(t, "pointerdown", a=>{
            const {drag: u, dragListener: c=!0} = this.getProps();
            u && c && this.start(a)
        }
        )
          , r = ()=>{
            const {dragConstraints: a} = this.getProps();
            On(a) && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: i} = this.visualElement
          , o = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(),
        i.updateLayout()),
        r();
        const s = ft(window, "resize", ()=>this.scalePositionWithinConstraints())
          , l = i.addEventListener("didUpdate", ({delta: a, hasLayoutChanged: u})=>{
            this.isDragging && u && (tt(c=>{
                const f = this.getAxisMotionValue(c);
                f && (this.originPoint[c] += a[c].translate,
                f.set(f.get() + a[c].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return ()=>{
            s(),
            n(),
            o(),
            l && l()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: i=!1, dragConstraints: o=!1, dragElastic: s=Ul, dragMomentum: l=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: s,
            dragMomentum: l
        }
    }
}
function Vi(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function A1(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class V1 extends Gt {
    constructor(t) {
        super(t),
        this.removeGroupControls = ae,
        this.removeListeners = ae,
        this.controls = new E1(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || ae
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const qc = e=>(t,n)=>{
    e && W.update(()=>e(t, n))
}
;
class L1 extends Gt {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = ae
    }
    onPointerDown(t) {
        this.session = new Lh(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint()
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i} = this.node.getProps();
        return {
            onSessionStart: qc(t),
            onStart: qc(n),
            onMove: r,
            onEnd: (o,s)=>{
                delete this.session,
                i && W.update(()=>i(o, s))
            }
        }
    }
    mount() {
        this.removePointerDownListener = pt(this.node.current, "pointerdown", t=>this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
function R1() {
    const e = k.useContext(Wo);
    if (e === null)
        return [!0, null];
    const {isPresent: t, onExitComplete: n, register: r} = e
      , i = k.useId();
    return k.useEffect(()=>r(i), []),
    !t && n ? [!1, ()=>n && n(i)] : [!0]
}
function bc(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const ur = {
    correct: (e,t)=>{
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (L.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = bc(e, t.target.x)
          , r = bc(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , Fh = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function D1(e) {
    const t = Fh.exec(e);
    if (!t)
        return [, ];
    const [,n,r] = t;
    return [n, r]
}
function $l(e, t, n=1) {
    const [r,i] = D1(e);
    if (!r)
        return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    return o ? o.trim() : Dl(i) ? $l(i, t, n + 1) : i
}
function M1(e, {...t}, n) {
    const r = e.current;
    if (!(r instanceof Element))
        return {
            target: t,
            transitionEnd: n
        };
    n && (n = {
        ...n
    }),
    e.values.forEach(i=>{
        const o = i.get();
        if (!Dl(o))
            return;
        const s = $l(o, r);
        s && i.set(s)
    }
    );
    for (const i in t) {
        const o = t[i];
        if (!Dl(o))
            continue;
        const s = $l(o, r);
        s && (t[i] = s,
        n || (n = {}),
        n[i] === void 0 && (n[i] = o))
    }
    return {
        target: t,
        transitionEnd: n
    }
}
const ef = "_$css"
  , N1 = {
    correct: (e,{treeScale: t, projectionDelta: n})=>{
        const r = e
          , i = e.includes("var(")
          , o = [];
        i && (e = e.replace(Fh, m=>(o.push(m),
        ef)));
        const s = Ht.parse(e);
        if (s.length > 5)
            return r;
        const l = Ht.createTransformer(e)
          , a = typeof s[0] != "number" ? 1 : 0
          , u = n.x.scale * t.x
          , c = n.y.scale * t.y;
        s[0 + a] /= u,
        s[1 + a] /= c;
        const f = K(u, c, .5);
        typeof s[2 + a] == "number" && (s[2 + a] /= f),
        typeof s[3 + a] == "number" && (s[3 + a] /= f);
        let d = l(s);
        if (i) {
            let m = 0;
            d = d.replace(ef, ()=>{
                const y = o[m];
                return m++,
                y
            }
            )
        }
        return d
    }
};
class O1 extends Jl.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i} = this.props
          , {projection: o} = t;
        zy(F1),
        o && (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", ()=>{
            this.safeToRemove()
        }
        ),
        o.setOptions({
            ...o.options,
            onExitComplete: ()=>this.safeToRemove()
        })),
        kr.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: i, isPresent: o} = this.props
          , s = r.projection;
        return s && (s.isPresent = o,
        i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(),
        t.isPresent !== o && (o ? s.promote() : s.relegate() || W.postRender(()=>{
            const l = s.getStack();
            (!l || !l.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        !t.currentAnimation && t.isLead() && this.safeToRemove())
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: i} = t;
        i && (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function zh(e) {
    const [t,n] = R1()
      , r = k.useContext(Qa);
    return Jl.createElement(O1, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: k.useContext(Ip),
        isPresent: t,
        safeToRemove: n
    })
}
const F1 = {
    borderRadius: {
        ...ur,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: ur,
    borderTopRightRadius: ur,
    borderBottomLeftRadius: ur,
    borderBottomRightRadius: ur,
    boxShadow: N1
}
  , _h = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , z1 = _h.length
  , tf = e=>typeof e == "string" ? parseFloat(e) : e
  , nf = e=>typeof e == "number" || L.test(e);
function _1(e, t, n, r, i, o) {
    i ? (e.opacity = K(0, n.opacity !== void 0 ? n.opacity : 1, I1(r)),
    e.opacityExit = K(t.opacity !== void 0 ? t.opacity : 1, 0, j1(r))) : o && (e.opacity = K(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < z1; s++) {
        const l = `border ${_h[s]}Radius`;
        let a = rf(t, l)
          , u = rf(n, l);
        if (a === void 0 && u === void 0)
            continue;
        a || (a = 0),
        u || (u = 0),
        a === 0 || u === 0 || nf(a) === nf(u) ? (e[l] = Math.max(K(tf(a), tf(u), r), 0),
        (ot.test(u) || ot.test(a)) && (e[l] += "%")) : e[l] = u
    }
    (t.rotate || n.rotate) && (e.rotate = K(t.rotate || 0, n.rotate || 0, r))
}
function rf(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const I1 = Ih(0, .5, tu)
  , j1 = Ih(.5, .95, ae);
function Ih(e, t, n) {
    return r=>r < e ? 0 : r > t ? 1 : n(qr(e, t, r))
}
function of(e, t) {
    e.min = t.min,
    e.max = t.max
}
function Ie(e, t) {
    of(e.x, t.x),
    of(e.y, t.y)
}
function sf(e, t, n, r, i) {
    return e -= t,
    e = ko(e, 1 / n, r),
    i !== void 0 && (e = ko(e, 1 / i, r)),
    e
}
function B1(e, t=0, n=1, r=.5, i, o=e, s=e) {
    if (ot.test(t) && (t = parseFloat(t),
    t = K(s.min, s.max, t / 100) - s.min),
    typeof t != "number")
        return;
    let l = K(o.min, o.max, r);
    e === o && (l -= t),
    e.min = sf(e.min, t, n, l, i),
    e.max = sf(e.max, t, n, l, i)
}
function lf(e, t, [n,r,i], o, s) {
    B1(e, t[n], t[r], t[i], t.scale, o, s)
}
const U1 = ["x", "scaleX", "originX"]
  , W1 = ["y", "scaleY", "originY"];
function af(e, t, n, r) {
    lf(e.x, t, U1, n ? n.x : void 0, r ? r.x : void 0),
    lf(e.y, t, W1, n ? n.y : void 0, r ? r.y : void 0)
}
function uf(e) {
    return e.translate === 0 && e.scale === 1
}
function jh(e) {
    return uf(e.x) && uf(e.y)
}
function Ql(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}
function cf(e) {
    return Ne(e.x) / Ne(e.y)
}
class H1 {
    constructor() {
        this.members = []
    }
    add(t) {
        su(this.members, t),
        t.scheduleRender()
    }
    remove(t) {
        if (lu(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i=>t === i);
        if (n === 0)
            return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const o = this.members[i];
            if (o.isPresent !== !1) {
                r = o;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
        this.lead = t,
        t.show(),
        r)) {
            r.instance && r.scheduleRender(),
            t.scheduleRender(),
            t.resumeFrom = r,
            n && (t.resumeFrom.preserveOpacity = !0),
            r.snapshot && (t.snapshot = r.snapshot,
            t.snapshot.latestValues = r.animationValues || r.latestValues),
            t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {crossfade: i} = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t=>{
            const {options: n, resumingFrom: r} = t;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t=>{
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function ff(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x
      , o = e.y.translate / t.y;
    if ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {rotate: a, rotateX: u, rotateY: c} = n;
        a && (r += `rotate(${a}deg) `),
        u && (r += `rotateX(${u}deg) `),
        c && (r += `rotateY(${c}deg) `)
    }
    const s = e.x.scale * t.x
      , l = e.y.scale * t.y;
    return (s !== 1 || l !== 1) && (r += `scale(${s}, ${l})`),
    r || "none"
}
const $1 = (e,t)=>e.depth - t.depth;
class Q1 {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        su(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        lu(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort($1),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function K1(e, t) {
    const n = performance.now()
      , r = ({timestamp: i})=>{
        const o = i - n;
        o >= t && (Wt.read(r),
        e(o - t))
    }
    ;
    return W.read(r, !0),
    ()=>Wt.read(r)
}
function G1(e) {
    window.MotionDebug && window.MotionDebug.record(e)
}
function X1(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
function Y1(e, t, n) {
    const r = Ae(e) ? e : Zn(e);
    return r.start(ou("", r, t, n)),
    r.animation
}
const df = ["", "X", "Y", "Z"]
  , pf = 1e3;
let Z1 = 0;
const en = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};
function Bh({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(s, l={}, a=t == null ? void 0 : t()) {
            this.id = Z1++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.potentialNodes = new Map,
            this.checkUpdateFailed = ()=>{
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = ()=>{
                en.totalNodes = en.resolvedTargetDeltas = en.recalculatedProjection = 0,
                this.nodes.forEach(b1),
                this.nodes.forEach(rw),
                this.nodes.forEach(iw),
                this.nodes.forEach(ew),
                G1(en)
            }
            ,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.elementId = s,
            this.latestValues = l,
            this.root = a ? a.root || a : this,
            this.path = a ? [...a.path, a] : [],
            this.parent = a,
            this.depth = a ? a.depth + 1 : 0,
            s && this.root.registerPotentialNode(s, this);
            for (let u = 0; u < this.path.length; u++)
                this.path[u].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Q1)
        }
        addEventListener(s, l) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new au),
            this.eventHandlers.get(s).add(l)
        }
        notifyListeners(s, ...l) {
            const a = this.eventHandlers.get(s);
            a && a.notify(...l)
        }
        hasListeners(s) {
            return this.eventHandlers.has(s)
        }
        registerPotentialNode(s, l) {
            this.potentialNodes.set(s, l)
        }
        mount(s, l=!1) {
            if (this.instance)
                return;
            this.isSVG = X1(s),
            this.instance = s;
            const {layoutId: a, layout: u, visualElement: c} = this.options;
            if (c && !c.current && c.mount(s),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.elementId && this.root.potentialNodes.delete(this.elementId),
            l && (u || a) && (this.isLayoutDirty = !0),
            e) {
                let f;
                const d = ()=>this.root.updateBlockedByResize = !1;
                e(s, ()=>{
                    this.root.updateBlockedByResize = !0,
                    f && f(),
                    f = K1(d, 250),
                    kr.hasAnimatedSinceResize && (kr.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(mf))
                }
                )
            }
            a && this.root.registerSharedNode(a, this),
            this.options.animate !== !1 && c && (a || u) && this.addEventListener("didUpdate", ({delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: m, layout: y})=>{
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const v = this.options.transition || c.getDefaultTransition() || uw
                  , {onLayoutAnimationStart: T, onLayoutAnimationComplete: g} = c.getProps()
                  , p = !this.targetLayout || !Ql(this.targetLayout, y) || m
                  , h = !d && m;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || h || d && (p || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(f, h);
                    const w = {
                        ...Th(v, "layout"),
                        onPlay: T,
                        onComplete: g
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0,
                    w.type = !1),
                    this.startAnimation(w)
                } else
                    !d && this.animationProgress === 0 && mf(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = y
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const s = this.getStack();
            s && s.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            Wt.preRender(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(ow),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: s} = this.options;
            return s && s.getProps().transformTemplate
        }
        willUpdate(s=!0) {
            if (this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const f = this.path[c];
                f.shouldResetTransform = !0,
                f.updateScroll("snapshot"),
                f.options.layoutRoot && f.willUpdate(!1)
            }
            const {layoutId: l, layout: a} = this.options;
            if (l === void 0 && !a)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            s && this.notifyListeners("willUpdate")
        }
        didUpdate() {
            if (this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(hf);
                return
            }
            this.isUpdating && (this.isUpdating = !1,
            this.potentialNodes.size && (this.potentialNodes.forEach(cw),
            this.potentialNodes.clear()),
            this.nodes.forEach(nw),
            this.nodes.forEach(J1),
            this.nodes.forEach(q1),
            this.clearAllSnapshots(),
            Ps.update(),
            Ps.preRender(),
            Ps.render())
        }
        clearAllSnapshots() {
            this.nodes.forEach(tw),
            this.sharedNodes.forEach(sw)
        }
        scheduleUpdateProjection() {
            W.preRender(this.updateProjection, !1, !0)
        }
        scheduleCheckAfterUnmount() {
            W.postRender(()=>{
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let a = 0; a < this.path.length; a++)
                    this.path[a].updateScroll();
            const s = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = ee(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: l} = this.options;
            l && l.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
        }
        updateScroll(s="measure") {
            let l = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (l = !1),
            l && (this.scroll = {
                animationId: this.root.animationId,
                phase: s,
                isRoot: r(this.instance),
                offset: n(this.instance)
            })
        }
        resetTransform() {
            if (!i)
                return;
            const s = this.isLayoutDirty || this.shouldResetTransform
              , l = this.projectionDelta && !jh(this.projectionDelta)
              , a = this.getTransformTemplate()
              , u = a ? a(this.latestValues, "") : void 0
              , c = u !== this.prevTransformTemplateValue;
            s && (l || bt(this.latestValues) || c) && (i(this.instance, u),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(s=!0) {
            const l = this.measurePageBox();
            let a = this.removeElementScroll(l);
            return s && (a = this.removeTransform(a)),
            fw(a),
            {
                animationId: this.root.animationId,
                measuredBox: l,
                layoutBox: a,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {visualElement: s} = this.options;
            if (!s)
                return ee();
            const l = s.measureViewportBox()
              , {scroll: a} = this.root;
            return a && (kt(l.x, a.offset.x),
            kt(l.y, a.offset.y)),
            l
        }
        removeElementScroll(s) {
            const l = ee();
            Ie(l, s);
            for (let a = 0; a < this.path.length; a++) {
                const u = this.path[a]
                  , {scroll: c, options: f} = u;
                if (u !== this.root && c && f.layoutScroll) {
                    if (c.isRoot) {
                        Ie(l, s);
                        const {scroll: d} = this.root;
                        d && (kt(l.x, -d.offset.x),
                        kt(l.y, -d.offset.y))
                    }
                    kt(l.x, c.offset.x),
                    kt(l.y, c.offset.y)
                }
            }
            return l
        }
        applyTransform(s, l=!1) {
            const a = ee();
            Ie(a, s);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !l && c.options.layoutScroll && c.scroll && c !== c.root && zn(a, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }),
                bt(c.latestValues) && zn(a, c.latestValues)
            }
            return bt(this.latestValues) && zn(a, this.latestValues),
            a
        }
        removeTransform(s) {
            const l = ee();
            Ie(l, s);
            for (let a = 0; a < this.path.length; a++) {
                const u = this.path[a];
                if (!u.instance || !bt(u.latestValues))
                    continue;
                Wl(u.latestValues) && u.updateSnapshot();
                const c = ee()
                  , f = u.measurePageBox();
                Ie(c, f),
                af(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return bt(this.latestValues) && af(l, this.latestValues),
            l
        }
        setTargetDelta(s) {
            this.targetDelta = s,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(s) {
            this.options = {
                ...this.options,
                ...s,
                crossfade: s.crossfade !== void 0 ? s.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        resolveTargetDelta(s=!1) {
            var l;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== a;
            if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget))
                return;
            const {layout: f, layoutId: d} = this.options;
            if (!(!this.layout || !(f || d))) {
                if (this.resolvedRelativeTargetAt = he.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const m = this.getClosestProjectingParent();
                    m && m.layout ? (this.relativeParent = m,
                    this.relativeTarget = ee(),
                    this.relativeTargetOrigin = ee(),
                    Vr(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox),
                    Ie(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = ee(),
                    this.targetWithTransforms = ee()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.relativeParent.resolvedRelativeTargetAt !== he.timestamp && this.relativeParent.resolveTargetDelta(!0),
                    d1(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ie(this.target, this.layout.layoutBox),
                    Nh(this.target, this.targetDelta)) : Ie(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const m = this.getClosestProjectingParent();
                        m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target ? (this.relativeParent = m,
                        this.relativeTarget = ee(),
                        this.relativeTargetOrigin = ee(),
                        Vr(this.relativeTargetOrigin, this.target, m.target),
                        Ie(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    en.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Wl(this.parent.latestValues) || Mh(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var s;
            const l = this.getLead()
              , a = !!this.resumingFrom || this !== l;
            let u = !0;
            if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1),
            a && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
            this.resolvedRelativeTargetAt === he.timestamp && (u = !1),
            u)
                return;
            const {layout: c, layoutId: f} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(c || f))
                return;
            Ie(this.layoutCorrected, this.layout.layoutBox),
            S1(this.layoutCorrected, this.treeScale, this.path, a);
            const {target: d} = l;
            if (!d)
                return;
            this.projectionDelta || (this.projectionDelta = Lr(),
            this.projectionDeltaWithTransform = Lr());
            const m = this.treeScale.x
              , y = this.treeScale.y
              , v = this.projectionTransform;
            Ar(this.projectionDelta, this.layoutCorrected, d, this.latestValues),
            this.projectionTransform = ff(this.projectionDelta, this.treeScale),
            (this.projectionTransform !== v || this.treeScale.x !== m || this.treeScale.y !== y) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", d)),
            en.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(s=!0) {
            if (this.options.scheduleRender && this.options.scheduleRender(),
            s) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(s, l=!1) {
            const a = this.snapshot
              , u = a ? a.latestValues : {}
              , c = {
                ...this.latestValues
            }
              , f = Lr();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !l;
            const d = ee()
              , m = a ? a.source : void 0
              , y = this.layout ? this.layout.source : void 0
              , v = m !== y
              , T = this.getStack()
              , g = !T || T.members.length <= 1
              , p = !!(v && !g && this.options.crossfade === !0 && !this.path.some(aw));
            this.animationProgress = 0;
            let h;
            this.mixTargetDelta = w=>{
                const x = w / 1e3;
                gf(f.x, s.x, x),
                gf(f.y, s.y, x),
                this.setTargetDelta(f),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Vr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                lw(this.relativeTarget, this.relativeTargetOrigin, d, x),
                h && Ql(this.relativeTarget, h) && (this.isProjectionDirty = !1),
                h || (h = ee()),
                Ie(h, this.relativeTarget)),
                v && (this.animationValues = c,
                _1(c, u, this.latestValues, x, p, g)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = x
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(s) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (Wt.update(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = W.update(()=>{
                kr.hasAnimatedSinceResize = !0,
                this.currentAnimation = Y1(0, pf, {
                    ...s,
                    onUpdate: l=>{
                        this.mixTargetDelta(l),
                        s.onUpdate && s.onUpdate(l)
                    }
                    ,
                    onComplete: ()=>{
                        s.onComplete && s.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const s = this.getStack();
            s && s.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(pf),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const s = this.getLead();
            let {targetWithTransforms: l, target: a, layout: u, latestValues: c} = s;
            if (!(!l || !a || !u)) {
                if (this !== s && this.layout && u && Uh(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    a = this.target || ee();
                    const f = Ne(this.layout.layoutBox.x);
                    a.x.min = s.target.x.min,
                    a.x.max = a.x.min + f;
                    const d = Ne(this.layout.layoutBox.y);
                    a.y.min = s.target.y.min,
                    a.y.max = a.y.min + d
                }
                Ie(l, a),
                zn(l, c),
                Ar(this.projectionDeltaWithTransform, this.layoutCorrected, l, c)
            }
        }
        registerSharedNode(s, l) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new H1),
            this.sharedNodes.get(s).add(l);
            const u = l.options.initialPromotionConfig;
            l.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(l) : void 0
            })
        }
        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0
        }
        getLead() {
            var s;
            const {layoutId: l} = this.options;
            return l ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this
        }
        getPrevLead() {
            var s;
            const {layoutId: l} = this.options;
            return l ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0
        }
        getStack() {
            const {layoutId: s} = this.options;
            if (s)
                return this.root.sharedNodes.get(s)
        }
        promote({needsReset: s, transition: l, preserveFollowOpacity: a}={}) {
            const u = this.getStack();
            u && u.promote(this, a),
            s && (this.projectionDelta = void 0,
            this.needsReset = !0),
            l && this.setOptions({
                transition: l
            })
        }
        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1
        }
        resetRotation() {
            const {visualElement: s} = this.options;
            if (!s)
                return;
            let l = !1;
            const {latestValues: a} = s;
            if ((a.rotate || a.rotateX || a.rotateY || a.rotateZ) && (l = !0),
            !l)
                return;
            const u = {};
            for (let c = 0; c < df.length; c++) {
                const f = "rotate" + df[c];
                a[f] && (u[f] = a[f],
                s.setStaticValue(f, 0))
            }
            s.render();
            for (const c in u)
                s.setStaticValue(c, u[c]);
            s.scheduleRender()
        }
        getProjectionStyles(s={}) {
            var l, a;
            const u = {};
            if (!this.instance || this.isSVG)
                return u;
            if (this.isVisible)
                u.visibility = "";
            else
                return {
                    visibility: "hidden"
                };
            const c = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                u.opacity = "",
                u.pointerEvents = Wi(s.pointerEvents) || "",
                u.transform = c ? c(this.latestValues, "") : "none",
                u;
            const f = this.getLead();
            if (!this.projectionDelta || !this.layout || !f.target) {
                const v = {};
                return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                v.pointerEvents = Wi(s.pointerEvents) || ""),
                this.hasProjected && !bt(this.latestValues) && (v.transform = c ? c({}, "") : "none",
                this.hasProjected = !1),
                v
            }
            const d = f.animationValues || f.latestValues;
            this.applyTransformsToTarget(),
            u.transform = ff(this.projectionDeltaWithTransform, this.treeScale, d),
            c && (u.transform = c(d, u.transform));
            const {x: m, y} = this.projectionDelta;
            u.transformOrigin = `${m.origin * 100}% ${y.origin * 100}% 0`,
            f.animationValues ? u.opacity = f === this ? (a = (l = d.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && a !== void 0 ? a : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
            for (const v in go) {
                if (d[v] === void 0)
                    continue;
                const {correct: T, applyTo: g} = go[v]
                  , p = u.transform === "none" ? d[v] : T(d[v], f);
                if (g) {
                    const h = g.length;
                    for (let w = 0; w < h; w++)
                        u[g[w]] = p
                } else
                    u[v] = p
            }
            return this.options.layoutId && (u.pointerEvents = f === this ? Wi(s.pointerEvents) || "" : "none"),
            u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(s=>{
                var l;
                return (l = s.currentAnimation) === null || l === void 0 ? void 0 : l.stop()
            }
            ),
            this.root.nodes.forEach(hf),
            this.root.sharedNodes.clear()
        }
    }
}
function J1(e) {
    e.updateLayout()
}
function q1(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: i} = e.layout
          , {animationType: o} = e.options
          , s = n.source !== e.layout.source;
        o === "size" ? tt(f=>{
            const d = s ? n.measuredBox[f] : n.layoutBox[f]
              , m = Ne(d);
            d.min = r[f].min,
            d.max = d.min + m
        }
        ) : Uh(o, n.layoutBox, r) && tt(f=>{
            const d = s ? n.measuredBox[f] : n.layoutBox[f]
              , m = Ne(r[f]);
            d.max = d.min + m
        }
        );
        const l = Lr();
        Ar(l, r, n.layoutBox);
        const a = Lr();
        s ? Ar(a, e.applyTransform(i, !0), n.measuredBox) : Ar(a, r, n.layoutBox);
        const u = !jh(l);
        let c = !1;
        if (!e.resumeFrom) {
            const f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                const {snapshot: d, layout: m} = f;
                if (d && m) {
                    const y = ee();
                    Vr(y, n.layoutBox, d.layoutBox);
                    const v = ee();
                    Vr(v, r, m.layoutBox),
                    Ql(y, v) || (c = !0),
                    f.options.layoutRoot && (e.relativeTarget = v,
                    e.relativeTargetOrigin = y,
                    e.relativeParent = f)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: a,
            layoutDelta: l,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function b1(e) {
    en.totalNodes++,
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function ew(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function tw(e) {
    e.clearSnapshot()
}
function hf(e) {
    e.clearMeasurements()
}
function nw(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function mf(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0
}
function rw(e) {
    e.resolveTargetDelta()
}
function iw(e) {
    e.calcProjection()
}
function ow(e) {
    e.resetRotation()
}
function sw(e) {
    e.removeLeadSnapshot()
}
function gf(e, t, n) {
    e.translate = K(t.translate, 0, n),
    e.scale = K(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function yf(e, t, n, r) {
    e.min = K(t.min, n.min, r),
    e.max = K(t.max, n.max, r)
}
function lw(e, t, n, r) {
    yf(e.x, t.x, n.x, r),
    yf(e.y, t.y, n.y, r)
}
function aw(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const uw = {
    duration: .45,
    ease: [.4, 0, .1, 1]
};
function cw(e, t) {
    let n = e.root;
    for (let o = e.path.length - 1; o >= 0; o--)
        if (e.path[o].instance) {
            n = e.path[o];
            break
        }
    const i = (n && n !== e.root ? n.instance : document).querySelector(`[data-projection-id="${t}"]`);
    i && e.mount(i, !0)
}
function vf(e) {
    e.min = Math.round(e.min),
    e.max = Math.round(e.max)
}
function fw(e) {
    vf(e.x),
    vf(e.y)
}
function Uh(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !Bl(cf(t), cf(n), .2)
}
const dw = Bh({
    attachResizeListener: (e,t)=>ft(e, "resize", t),
    measureScroll: ()=>({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: ()=>!0
})
  , Ns = {
    current: void 0
}
  , Wh = Bh({
    measureScroll: e=>({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: ()=>{
        if (!Ns.current) {
            const e = new dw(0,{});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            Ns.current = e
        }
        return Ns.current
    }
    ,
    resetTransform: (e,t)=>{
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e=>window.getComputedStyle(e).position === "fixed"
})
  , pw = {
    pan: {
        Feature: L1
    },
    drag: {
        Feature: V1,
        ProjectionNode: Wh,
        MeasureLayout: zh
    }
}
  , hw = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"])
  , Hh = e=>hw.has(e)
  , mw = e=>Object.keys(e).some(Hh)
  , wf = e=>e === vn || e === L
  , xf = (e,t)=>parseFloat(e.split(", ")[t])
  , Sf = (e,t)=>(n,{transform: r})=>{
    if (r === "none" || !r)
        return 0;
    const i = r.match(/^matrix3d\((.+)\)$/);
    if (i)
        return xf(i[1], t);
    {
        const o = r.match(/^matrix\((.+)\)$/);
        return o ? xf(o[1], e) : 0
    }
}
  , gw = new Set(["x", "y", "z"])
  , yw = Ko.filter(e=>!gw.has(e));
function vw(e) {
    const t = [];
    return yw.forEach(n=>{
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t.length && e.render(),
    t
}
const Pf = {
    width: ({x: e},{paddingLeft: t="0", paddingRight: n="0"})=>e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e},{paddingTop: t="0", paddingBottom: n="0"})=>e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e,{top: t})=>parseFloat(t),
    left: (e,{left: t})=>parseFloat(t),
    bottom: ({y: e},{top: t})=>parseFloat(t) + (e.max - e.min),
    right: ({x: e},{left: t})=>parseFloat(t) + (e.max - e.min),
    x: Sf(4, 13),
    y: Sf(5, 14)
}
  , ww = (e,t,n)=>{
    const r = t.measureViewportBox()
      , i = t.current
      , o = getComputedStyle(i)
      , {display: s} = o
      , l = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
    n.forEach(u=>{
        l[u] = Pf[u](r, o)
    }
    ),
    t.render();
    const a = t.measureViewportBox();
    return n.forEach(u=>{
        const c = t.getValue(u);
        c && c.jump(l[u]),
        e[u] = Pf[u](a, o)
    }
    ),
    e
}
  , xw = (e,t,n={},r={})=>{
    t = {
        ...t
    },
    r = {
        ...r
    };
    const i = Object.keys(t).filter(Hh);
    let o = []
      , s = !1;
    const l = [];
    if (i.forEach(a=>{
        const u = e.getValue(a);
        if (!e.hasValue(a))
            return;
        let c = n[a]
          , f = ar(c);
        const d = t[a];
        let m;
        if (vo(d)) {
            const y = d.length
              , v = d[0] === null ? 1 : 0;
            c = d[v],
            f = ar(c);
            for (let T = v; T < y; T++)
                m ? wo(ar(d[T]) === m) : m = ar(d[T])
        } else
            m = ar(d);
        if (f !== m)
            if (wf(f) && wf(m)) {
                const y = u.get();
                typeof y == "string" && u.set(parseFloat(y)),
                typeof d == "string" ? t[a] = parseFloat(d) : Array.isArray(d) && m === L && (t[a] = d.map(parseFloat))
            } else
                f != null && f.transform && (m != null && m.transform) && (c === 0 || d === 0) ? c === 0 ? u.set(m.transform(c)) : t[a] = f.transform(d) : (s || (o = vw(e),
                s = !0),
                l.push(a),
                r[a] = r[a] !== void 0 ? r[a] : t[a],
                u.jump(d))
    }
    ),
    l.length) {
        const a = l.indexOf("height") >= 0 ? window.pageYOffset : null
          , u = ww(t, e, l);
        return o.length && o.forEach(([c,f])=>{
            e.getValue(c).set(f)
        }
        ),
        e.render(),
        Ho && a !== null && window.scrollTo({
            top: a
        }),
        {
            target: u,
            transitionEnd: r
        }
    } else
        return {
            target: t,
            transitionEnd: r
        }
}
;
function Sw(e, t, n, r) {
    return mw(t) ? xw(e, t, n, r) : {
        target: t,
        transitionEnd: r
    }
}
const Pw = (e,t,n,r)=>{
    const i = M1(e, t, r);
    return t = i.target,
    r = i.transitionEnd,
    Sw(e, t, n, r)
}
  , Kl = {
    current: null
}
  , $h = {
    current: !1
};
function Cw() {
    if ($h.current = !0,
    !!Ho)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = ()=>Kl.current = e.matches;
            e.addListener(t),
            t()
        } else
            Kl.current = !1
}
function kw(e, t, n) {
    const {willChange: r} = t;
    for (const i in t) {
        const o = t[i]
          , s = n[i];
        if (Ae(o))
            e.addValue(i, o),
            Co(r) && r.add(i);
        else if (Ae(s))
            e.addValue(i, Zn(o, {
                owner: e
            })),
            Co(r) && r.remove(i);
        else if (s !== o)
            if (e.hasValue(i)) {
                const l = e.getValue(i);
                !l.hasAnimated && l.set(o)
            } else {
                const l = e.getStaticValue(i);
                e.addValue(i, Zn(l !== void 0 ? l : o, {
                    owner: e
                }))
            }
    }
    for (const i in n)
        t[i] === void 0 && e.removeValue(i);
    return t
}
const Cf = new WeakMap
  , Qh = Object.keys(Yr)
  , Tw = Qh.length
  , kf = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
  , Ew = Ha.length;
class Aw {
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: i, visualState: o}, s={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = ()=>this.notify("Update", this.latestValues),
        this.render = ()=>{
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.scheduleRender = ()=>W.render(this.render, !1, !0);
        const {latestValues: l, renderState: a} = o;
        this.latestValues = l,
        this.baseTarget = {
            ...l
        },
        this.initialValues = n.initial ? {
            ...l
        } : {},
        this.renderState = a,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.options = s,
        this.isControllingVariants = Qo(n),
        this.isVariantNode = _p(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: u, ...c} = this.scrapeMotionValuesFromProps(n, {});
        for (const f in c) {
            const d = c[f];
            l[f] !== void 0 && Ae(d) && (d.set(l[f], !1),
            Co(u) && u.add(f))
        }
    }
    scrapeMotionValuesFromProps(t, n) {
        return {}
    }
    mount(t) {
        this.current = t,
        Cf.set(t, this),
        this.projection && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((n,r)=>this.bindToMotionValue(r, n)),
        $h.current || Cw(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Kl.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        Cf.delete(this.current),
        this.projection && this.projection.unmount(),
        Wt.update(this.notifyUpdate),
        Wt.render(this.render),
        this.valueSubscriptions.forEach(t=>t()),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const t in this.events)
            this.events[t].clear();
        for (const t in this.features)
            this.features[t].unmount();
        this.current = null
    }
    bindToMotionValue(t, n) {
        const r = yn.has(t)
          , i = n.on("change", s=>{
            this.latestValues[t] = s,
            this.props.onUpdate && W.update(this.notifyUpdate, !1, !0),
            r && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , o = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(t, ()=>{
            i(),
            o()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    loadFeatures({children: t, ...n}, r, i, o, s) {
        let l, a;
        for (let u = 0; u < Tw; u++) {
            const c = Qh[u]
              , {isEnabled: f, Feature: d, ProjectionNode: m, MeasureLayout: y} = Yr[c];
            m && (l = m),
            f(n) && (!this.features[c] && d && (this.features[c] = new d(this)),
            y && (a = y))
        }
        if (!this.projection && l) {
            this.projection = new l(o,this.latestValues,this.parent && this.parent.projection);
            const {layoutId: u, layout: c, drag: f, dragConstraints: d, layoutScroll: m, layoutRoot: y} = n;
            this.projection.setOptions({
                layoutId: u,
                layout: c,
                alwaysMeasureLayout: !!f || d && On(d),
                visualElement: this,
                scheduleRender: ()=>this.scheduleRender(),
                animationType: typeof c == "string" ? c : "both",
                initialPromotionConfig: s,
                layoutScroll: m,
                layoutRoot: y
            })
        }
        return a
    }
    updateFeatures() {
        for (const t in this.features) {
            const n = this.features[t];
            n.isMounted ? n.update(this.props, this.prevProps) : (n.mount(),
            n.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ee()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    makeTargetAnimatable(t, n=!0) {
        return this.makeTargetAnimatableFromInstance(t, this.props, n)
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < kf.length; r++) {
            const i = kf[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
            const o = t["on" + i];
            o && (this.propEventSubscriptions[i] = this.on(i, o))
        }
        this.prevMotionValues = kw(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(t=!1) {
        if (t)
            return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const r = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (r.initial = this.props.initial),
            r
        }
        const n = {};
        for (let r = 0; r < Ew; r++) {
            const i = Ha[r]
              , o = this.props[i];
            (Xr(o) || o === !1) && (n[i] = o)
        }
        return n
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            ()=>n.variantChildren.delete(t)
    }
    addValue(t, n) {
        n !== this.values.get(t) && (this.removeValue(t),
        this.bindToMotionValue(t, n)),
        this.values.set(t, n),
        this.latestValues[t] = n.get()
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = Zn(n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t) {
        return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.readValueFromInstance(this.current, t, this.options)
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {initial: r} = this.props
          , i = typeof r == "string" || typeof r == "object" ? (n = ba(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
        if (r && i !== void 0)
            return i;
        const o = this.getBaseTargetFromProps(this.props, t);
        return o !== void 0 && !Ae(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new au),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class Kh extends Aw {
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
    makeTargetAnimatableFromInstance({transition: t, transitionEnd: n, ...r}, {transformValues: i}, o) {
        let s = Xv(r, t || {}, this);
        if (i && (n && (n = i(n)),
        r && (r = i(r)),
        s && (s = i(s))),
        o) {
            Kv(this, r, s);
            const l = Pw(this, r, s, n);
            n = l.transitionEnd,
            r = l.target
        }
        return {
            transition: t,
            transitionEnd: n,
            ...r
        }
    }
}
function Vw(e) {
    return window.getComputedStyle(e)
}
class Lw extends Kh {
    readValueFromInstance(t, n) {
        if (yn.has(n)) {
            const r = ru(n);
            return r && r.default || 0
        } else {
            const r = Vw(t)
              , i = (Up(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return Oh(t, n)
    }
    build(t, n, r, i) {
        Ga(t, n, r, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n) {
        return qa(t, n)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        Ae(t) && (this.childSubscription = t.on("change", n=>{
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
    renderInstance(t, n, r, i) {
        Kp(t, n, r, i)
    }
}
class Rw extends Kh {
    constructor() {
        super(...arguments),
        this.isSVGTag = !1
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (yn.has(n)) {
            const r = ru(n);
            return r && r.default || 0
        }
        return n = Gp.has(n) ? n : Ja(n),
        t.getAttribute(n)
    }
    measureInstanceViewportBox() {
        return ee()
    }
    scrapeMotionValuesFromProps(t, n) {
        return Yp(t, n)
    }
    build(t, n, r, i) {
        Ya(t, n, r, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(t, n, r, i) {
        Xp(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = Za(t.tagName),
        super.mount(t)
    }
}
const Dw = (e,t)=>Ka(e) ? new Rw(t,{
    enableHardwareAcceleration: !1
}) : new Lw(t,{
    enableHardwareAcceleration: !0
})
  , Mw = {
    layout: {
        ProjectionNode: Wh,
        MeasureLayout: zh
    }
}
  , Nw = {
    ...a1,
    ...T0,
    ...pw,
    ...Mw
}
  , At = Oy((e,t)=>a0(e, t, Nw, Dw));
function Gh() {
    const e = k.useRef(!1);
    return mo(()=>(e.current = !0,
    ()=>{
        e.current = !1
    }
    ), []),
    e
}
function Ow() {
    const e = Gh()
      , [t,n] = k.useState(0)
      , r = k.useCallback(()=>{
        e.current && n(t + 1)
    }
    , [t]);
    return [k.useCallback(()=>W.postRender(r), [r]), t]
}
class Fw extends k.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = this.props.sizeRef.current;
            r.height = n.offsetHeight || 0,
            r.width = n.offsetWidth || 0,
            r.top = n.offsetTop,
            r.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function zw({children: e, isPresent: t}) {
    const n = k.useId()
      , r = k.useRef(null)
      , i = k.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    });
    return k.useInsertionEffect(()=>{
        const {width: o, height: s, top: l, left: a} = i.current;
        if (t || !r.current || !o || !s)
            return;
        r.current.dataset.motionPopId = n;
        const u = document.createElement("style");
        return document.head.appendChild(u),
        u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${l}px !important;
            left: ${a}px !important;
          }
        `),
        ()=>{
            document.head.removeChild(u)
        }
    }
    , [t]),
    k.createElement(Fw, {
        isPresent: t,
        childRef: r,
        sizeRef: i
    }, k.cloneElement(e, {
        ref: r
    }))
}
const Os = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: o, mode: s})=>{
    const l = $a(_w)
      , a = k.useId()
      , u = k.useMemo(()=>({
        id: a,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: c=>{
            l.set(c, !0);
            for (const f of l.values())
                if (!f)
                    return;
            r && r()
        }
        ,
        register: c=>(l.set(c, !1),
        ()=>l.delete(c))
    }), o ? void 0 : [n]);
    return k.useMemo(()=>{
        l.forEach((c,f)=>l.set(f, !1))
    }
    , [n]),
    k.useEffect(()=>{
        !n && !l.size && r && r()
    }
    , [n]),
    s === "popLayout" && (e = k.createElement(zw, {
        isPresent: n
    }, e)),
    k.createElement(Wo.Provider, {
        value: u
    }, e)
}
;
function _w() {
    return new Map
}
function Iw(e) {
    return k.useEffect(()=>()=>e(), [])
}
const Sn = e=>e.key || "";
function jw(e, t) {
    e.forEach(n=>{
        const r = Sn(n);
        t.set(r, n)
    }
    )
}
function Bw(e) {
    const t = [];
    return k.Children.forEach(e, n=>{
        k.isValidElement(n) && t.push(n)
    }
    ),
    t
}
const Xh = ({children: e, custom: t, initial: n=!0, onExitComplete: r, exitBeforeEnter: i, presenceAffectsLayout: o=!0, mode: s="sync"})=>{
    let[l] = Ow();
    const a = k.useContext(Qa).forceRender;
    a && (l = a);
    const u = Gh()
      , c = Bw(e);
    let f = c;
    const d = new Set
      , m = k.useRef(f)
      , y = k.useRef(new Map).current
      , v = k.useRef(!0);
    if (mo(()=>{
        v.current = !1,
        jw(c, y),
        m.current = f
    }
    ),
    Iw(()=>{
        v.current = !0,
        y.clear(),
        d.clear()
    }
    ),
    v.current)
        return k.createElement(k.Fragment, null, f.map(h=>k.createElement(Os, {
            key: Sn(h),
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: o,
            mode: s
        }, h)));
    f = [...f];
    const T = m.current.map(Sn)
      , g = c.map(Sn)
      , p = T.length;
    for (let h = 0; h < p; h++) {
        const w = T[h];
        g.indexOf(w) === -1 && d.add(w)
    }
    return s === "wait" && d.size && (f = []),
    d.forEach(h=>{
        if (g.indexOf(h) !== -1)
            return;
        const w = y.get(h);
        if (!w)
            return;
        const x = T.indexOf(h)
          , E = ()=>{
            y.delete(h),
            d.delete(h);
            const C = m.current.findIndex(P=>P.key === h);
            if (m.current.splice(C, 1),
            !d.size) {
                if (m.current = c,
                u.current === !1)
                    return;
                l(),
                r && r()
            }
        }
        ;
        f.splice(x, 0, k.createElement(Os, {
            key: Sn(w),
            isPresent: !1,
            onExitComplete: E,
            custom: t,
            presenceAffectsLayout: o,
            mode: s
        }, w))
    }
    ),
    f = f.map(h=>{
        const w = h.key;
        return d.has(w) ? h : k.createElement(Os, {
            key: Sn(h),
            isPresent: !0,
            presenceAffectsLayout: o,
            mode: s
        }, h)
    }
    ),
    k.createElement(k.Fragment, null, d.size ? f : f.map(h=>k.cloneElement(h)))
}
  , Uw = "/assets/mobile-c7d024dd.png"
  , Ww = "/assets/mobile2-2b88b2bb.png"
  , Hw = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAApCAIAAACX9CT/AAAACXBIWXMAAAABAAAAAQBPJcTWAAAAB3RJTUUH5wUODDU79YqrLwAABfZJREFUeJzt3E1oE2kYB/AnSTH9yAY1Ns0mKkoQdS0FpcrCKGq7FyPeRBDxUCroRYUeqqBVEC+iwuphLynCmptCiznUL6iFXVToQXeVdm0glg2J3fR9YP1IDttdZw8vnR2TmTSz2Ia+/n+H8mbmmeSZw/zz5p2hpOs6AQA44a51AwCw+CA4AMAxBAcAOIbgAADHEBwA4BiCAwAcQ3AAgGMIDgBwDMEBAI4hOADAMQQHADiG4AAAxxAcAOAYggMAHENwAIBj6geH1+vVdR3/dgTgc1L+itJn1boRAHUoOOPQiwW9WJiz5veJVwvTD4CCFPsqLk8NuxmHXiz8/f7dArYGoA6lZhx6saDruquxqZpiV2OTx+P5bvfu+e4KQEHKzDiKLCx/oVRY4wg2N8/5owYALCgTHHYRUHlxVC8Wxp8/m8++AFSkRnBs+mbj/wuOTRttDwQAW2oEh14szLx7a71rrtuxCA4Ap9RZHG3buq3WLQB8MZSZcdR5PNa7MOMAE03Tat2CEpQJjo5du6x3IThg1suXL5n5yZMndgU7duwwv1yzZk1PTw8RxWKxYDBYXh8KheR7Gp4+fRoIBBx1JYRwuVyODqk9ZYLjnw/vLXfl83kEB0jMrGnarVu3mLm1tbW8IBaLMbMc379/XwiRTCY1TcvlcuXF6XQ6l8t1dnaaN+7Zs4eZnz1zcKuOmd3uRbZosMjatfNVc9Aus4PBoMvlsty7LholVaITKmDmffv2GS8PHDgwMTExPDxcXjk0NDQ0NCSzIxKJyI2rV6+emZkpqRRCZDKZcDj86NGjnTt3Dg4OJhKJ9vb2e/fuBQIBj8cjhKjcld/v9/l8lrvGxsaM/CKiQ4cOGTMay7Mz73r8+HGF4s9GmcsmGapf4TwG9WKhEw+Pqs7r9TJzOp1m5o6ODiHE2NiYZaUQgpnlXyJKJBLJZJKIRkZG2tvby+svXrzIzFevXtU0TdO0K1euMPPRo0er6WpgYEC+ecmMQ360+bI3xsxcV1dnfhNjVyQSkeO1a9eW7JoXagRHMlRv/K1Sz4kT+JHyJRBCbN68mYhSqZT8HpZzjYGBgba2tpJi82qFnDLE43G/3293EU5NTclBQ0NDQ0ODHOfz+WrWLOyCw+hEDlauXGl8Sjgczufzcu/SpUvJJl8sX8otMhPNSdTf329skYMjR47M2bwiwUFEgy1eqnrB4tttW1MvfiWi0Z9/mt+2oNaEEHfu3CGikZEReWH09vbKOUj5HRYuQ0SxWKzCmoXX6xVCpNPpbDbLzObI6OvrszxEvm2VwXHjxo3r16+XbL99+3ZJGVUXHHLQ3d1tBFAoFCKiRCJhThO7k/2PMsFBs6nxsfChctmP8firX54T0W+/PF+ItqDW3G43M8sLe//+/UKIhw8fWlamUqlMJpPJZIxJh7y2M5lMNBq1PMTn8x08eFCOz54963a7ly1bRrO/erq6usoPcRQc/f39RkxQxXSoECJ2BcaWQCAwOjpa4dhS6gXH+/wfHptnOlwuV1NTU/OKFX+9/fOHa983NTYubINQG8x87tw5mr2rQkTZbDabzVY45OTJkzI7ksnkqlWr5lzpjMfj8sYtEZ06dYqIgsGgEMI8qTFWSRwFh8/nMz79+PHj5hAhm7BgZr/fX94kgqOSa5cvy8G6aFQvFroOHyYil8uVevFCbv9Y+DA1+douXEBh8kq+dOkSM2/ZsqVy8ZkzZ2RwnD59+ubNm5WL9+7du2HDhmAwGIlE+vr6jh07RlazA7m06Sg46NNEMAbGGkc4HJantn79erlFDsrJ0zEfheAoNXz37tTk68Dy5eZ/7fN1KFTbrqC2crmcEGJ8fLzK+tbWVvlb48GDB1UeIp8Hk+P6+k9W63O5nPy6kgUXLlzo7e2VL80rI1Mmxtfb9PT09PS0UWOed0xOTjKz8dSZ+fCSWZVMLmbevn273PLmzRs5WLJkyfnz5413mPs8VQ0OQ11dnREcLS0ttW0Gaq67u7vWLdTM57xBq3xwAIC0KINj8T2NDwB2MOMAAKf+BTOjDQ5pMdnPAAAAAElFTkSuQmCC"
  , $w = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAAnCAIAAACt/kWPAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAB3RJTUUH5wUODCMgY3fXFAAAA1JJREFUeJzt3TFIalEYB/DvhFgQUmAOFSi4CLU0RUQQTbYlBBXU0tBwuS4FDhmJkw6BrUFDCBrRUDTV2thU1NKiQ1lLW0Rg3fga7uu+qJ6vw6POeZ3/bxA81+HPVf58niMomLmpqYkAAD4NlQEA0lAcACANxQEA0lAcACANxQEA0lAcACANxQEA0lAcACANxQEA0lAcACANxQG/MbP3+KerAETkUx1AGcuyhoeHp6amVAfRiBCCiLq6umzb7uzs9Pl+fTwcx7m/v8/lctfX1+5rgIhCoVAwGDw/P/dWUqnUysqK9zQWi0Wj0f39fRXpvpahxZFIJEZHR23bVh1EO6VSKRAIOI6zu7v78PDgLvr9/pGRkbW1NcdxxsfH1SbUx9jYWCQSWV5e9laGhoZeF8fMzEw4HEZx/PeYWQhhWVY8Hk8mk7VazV1RnUsXi4uLgUBgYmKiXq+/XmfmUqnU3Ny8vb2dTqdzuRzum+HM2uMQQrizRjKZvLi4oJfhHFwDAwOFQuFNaxCREIKZ6/X69PR0f3+/kmygFbOKw7Ks2dlZd9ZAZbzh9/uJ6PDw8MOr7u26u7sTQkQiEdw9wxlUHIlEIh6P27Z9eXmpOouOWlpa6G9HJ+7VWCz2TZlAV6bscViW5X5DqdVqqrNorcEogX0N8JgycbS3tzPz7e2t6iBaazxuoDXAY0px5PP5vb29YrEYCoVUZ9HX56sBPwYznCnFQUQbGxtHR0fr6+ttbW2qs+jo/WHKe25fVCoVTB+GM6g4iCifz5+cnGDu+JBbHI1PW1tbW5m5Uql8VyjQlFnFQUTZbLZarWLueI+ZT09P0+l0g9eUy+Wzs7NviwTaMuVU5bWFhYVsNlssFufm5m5ublTH0YUQIpPJbG1t7ezsXF1dHRwcPD4+uicpPp9vcHCwt7eXiDKZjOqkoJ4w9g+ZCoVCd3f35OSk6iDaiUajS0tLHR0d3gozPz09pVKparWqMJhugsFgOBw+Pj72VlZXV+fn572nfX19PT09m5ubKtJ9LXOLg162+rDPB1/kB//yxcSvKp6f+qaCJn7wB8zQWQMA/gWKAwCkoTgAQBqKAwCkoTgAQBqKAwCkoTgAQBqKAwCkoTgAQBqKAwCkoTgAQNozFf0T1yE019sAAAAASUVORK5CYII="
  , Qw = "/assets/mobile3-d4ee10c4.png";
function Hi(e) {
    const [t,n] = k.useState(!1);
    return k.useEffect(()=>{
        const r = new IntersectionObserver(([i])=>{
            n(i.isIntersecting)
        }
        ,{
            threshold: 1
        });
        return r.observe(e.current),
        ()=>{
            r.disconnect()
        }
    }
    , [e]),
    t
}
function Tf(e) {
    let t;
    return e.direction == "tl" ? t = "absolute left-10 max-w-[300px] top-10 z-50 w-fit h-fit rounded-xl shadow-md  overflow-hidden bg-gray-200 opacity-75 max-md:top-[430px] max-md:relative max-md:left-0 " : e.direction == "tr" ? t = "absolute right-10 max-w-[300px] top-10 z-50 w-fit h-fit rounded-xl shadow-md  overflow-hidden bg-gray-200 opacity-75 max-md:top-[430px] max-md:relative max-md:right-0 " : e.direction == "bl" ? t = "absolute left-10 max-w-[300px] bottom-10 z-50 w-fit h-fit rounded-xl shadow-md  overflow-hidden bg-gray-200 opacity-75 max-md:top-[430px] max-md:relative max-md:left-0 " : e.direction == "br" && (t = "absolute right-10 max-w-[300px]  bottom-10 z-50 w-fit h-fit rounded-xl shadow-md  overflow-hidden bg-gray-200 opacity-75 max-md:top-[430px] max-md:relative max-md:right-0 "),
    $(Xh, {
        children: Hi(e.reff) && $(At.div, {
            className: t,
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            children: $(At.h1, {
                className: "relative text-3xl font-black p-3 max-lg:text-lg  ",
                initial: {
                    left: "-200px"
                },
                animate: {
                    left: 0
                },
                children: e.title
            })
        }, "a")
    })
}
function Li(e) {
    return Fs("div", {
        className: "w-full  flex justify-center overflow-hidden snap-start py-[2px]  ",
        children: [$(At.img, {
            className: "relative w-[178px] h-[347px]",
            initial: {
                left: "1000px"
            },
            animate: {
                left: 0
            },
            transition: {
                duration: 1
            },
            src: e.image
        }), $("div", {
            className: "absolute  min-w-full min-h-full flex justify-center items-end p-5",
            children: $("div", {
                ref: e.reff
            })
        })]
    })
}
const Kw = "/assets/0- interface-5ecac8f5.png"
  , Gw = "/assets/1- dash board  CONSUMPTION -63ea643d.png"
  , Xw = "/assets/2- LOAD CONTROL-3e2de40e.png"
  , Yw = "/assets/3- light  3D-2626a434.png"
  , Zw = "/assets/4- light diming-e494f2e4.png"
  , Jw = "/assets/5- light interface-dd8f44bb.png"
  , qw = "/assets/6- light hue saturation-ab84ff9f.png"
  , bw = "/assets/7- shutter interface-fd23b257.png"
  , ex = "/assets/8- shutter model -eada318d.png"
  , Ef = "/assets/9- air condition interface-3bd51e2b.png"
  , tx = "/assets/10- air condition model-cea75e83.png"
  , nx = "/assets/11 irrigating 3d-742850de.png"
  , rx = "/assets/12 irrigating 2d-99ac1231.png"
  , ix = "/assets/13 media interface -4dbea351.png"
  , ox = "/assets/14 media model-4d97d233.png"
  , sx = "/assets/15 security-21c49e66.png"
  , lx = "/assets/16 smart tv 1 -fc1ecf7a.png"
  , ax = "/assets/17 smart tv 2-3c0603ab.png"
  , ux = "/assets/18 senarios-f316ae06.png"
  , ne = [{
    image: Kw,
    direction: ""
}, {
    image: Gw,
    direction: ""
}, {
    image: Xw,
    direction: "tl",
    title: "CONSUMPTION LOAD CONTROL"
}, {
    image: Yw,
    direction: "tr",
    title: `
      3D
      diming
      interface
      hue saturation
      `
}, {
    image: Zw,
    direction: "br",
    title: `interface
      model`
}, {
    image: Jw,
    direction: ""
}, {
    image: qw,
    direction: ""
}, {
    image: bw,
    direction: "br",
    title: "Ultra Tech Contracting"
}, {
    image: ex,
    direction: "bl",
    title: "Ultra Tech Contracting"
}, {
    image: Ef,
    direction: ""
}, {
    image: tx,
    direction: ""
}, {
    image: nx,
    direction: ""
}, {
    image: rx,
    direction: ""
}, {
    image: ix,
    direction: ""
}, {
    image: ox,
    direction: ""
}, {
    image: sx,
    direction: ""
}, {
    image: lx,
    direction: ""
}, {
    image: ax,
    direction: ""
}, {
    image: ux,
    direction: ""
}, {
    image: Ef,
    direction: ""
}];
function cx() {
    let e = []
      , t = [];
    const n = k.useRef();
    Hi(n) && r();
    function r() {
        document.body.style.overflowY = "hidden",
        document.body.style.overflow = "-moz-scrollbars-vertical"
    }
    function i() {
        document.body.style.overflowY = "scroll",
        document.body.style.overflow = "-moz-scrollbars-vertical",
        console.log("enabled")
    }
    for (let o in ne)
        if (o == ne.length - 1)
            if (ne[o].title != null) {
                const s = k.useRef();
                Hi(s) && i(),
                e.push($(Li, {
                    reff: s,
                    image: ne[o].image
                }, ne[o].image)),
                t.push($(Tf, {
                    reff: s,
                    text: ne[o].text,
                    title: ne[o].title
                }, ne[o].image))
            } else {
                const s = k.useRef();
                Hi(s) && i(),
                e.push($(Li, {
                    reff: s,
                    image: ne[o].image
                }, ne[o].image))
            }
        else if (ne[o].title != null) {
            const s = k.useRef();
            e.push($(Li, {
                reff: s,
                image: ne[o].image
            }, ne[o].image)),
            t.push($(Tf, {
                direction: ne[o].direction,
                reff: s,
                text: ne[o].text,
                title: ne[o].title
            }, ne[o].image))
        } else
            e.push($(Li, {
                image: ne[o].image
            }, ne[o].image));
    return Fs("div", {
        ref: n,
        className: "relative min-w-full min-h-[400px] p  max-md:h-[700px]  flex flex-wrap justify-center bg-gray-400 snap-center overflow-hidden",
        children: [Fs("div", {
            className: "absolute  w-[200px] overflow-hidden  ",
            children: [$(At.img, {
                initial: {
                    left: "1000px"
                },
                animate: {
                    left: 0
                },
                transition: {
                    duration: 1
                },
                className: "absolute ml-2 w-11/12 top-2 rounded-t-full z-40",
                src: Hw
            }), $(At.img, {
                initial: {
                    left: "1000px"
                },
                animate: {
                    left: 0
                },
                transition: {
                    duration: 1
                },
                className: "absolute  z-[45]",
                src: Ww
            }), $(At.img, {
                initial: {
                    left: "1000px"
                },
                animate: {
                    left: 0
                },
                transition: {
                    duration: 1
                },
                className: "relative  z-20",
                src: Uw
            }), $(At.img, {
                initial: {
                    left: "1000px"
                },
                animate: {
                    left: 0
                },
                transition: {
                    duration: 1
                },
                className: "absolute bottom-0  z-[45]",
                src: Qw
            }), $(At.img, {
                initial: {
                    left: "1000px"
                },
                animate: {
                    left: 0
                },
                transition: {
                    duration: 1
                },
                className: "absolute ml-2 w-11/12 bottom-[10px] rounded-b-full  z-40",
                src: $w
            })]
        }), $("div", {
            className: "absolute top-[25px] w-[200px] h-[350px] z-30 overflow-y-scroll scrollbar-hide snap-mandatory delay-0 snap-y ",
            children: e
        }), $(Xh, {
            children: t
        })]
    })
}
function fx() {
    return $(wm, {
        children: $(cx, {})
    })
}
zs.createRoot(document.getElementById("root")).render($(Jl.StrictMode, {
    children: $(fx, {})
}));
