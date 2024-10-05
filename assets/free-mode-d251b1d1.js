function Q(e) {
    return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object
}

function X(e = {}, t = {}) {
    Object.keys(t).forEach(s => {
        typeof e[s] > "u" ? e[s] = t[s] : Q(t[s]) && Q(e[s]) && Object.keys(t[s]).length > 0 && X(e[s], t[s])
    })
}
const ne = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};

function $() {
    const e = typeof document < "u" ? document : {};
    return X(e, ne), e
}
const he = {
    document: ne,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(e) {
        return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0)
    },
    cancelAnimationFrame(e) {
        typeof setTimeout > "u" || clearTimeout(e)
    }
};

function P() {
    const e = typeof window < "u" ? window : {};
    return X(e, he), e
}

function me(e) {
    const t = e.__proto__;
    Object.defineProperty(e, "__proto__", {
        get() {
            return t
        },
        set(s) {
            t.__proto__ = s
        }
    })
}
class z extends Array {
    constructor(t) {
        typeof t == "number" ? super(t) : (super(...t || []), me(this))
    }
}

function G(e = []) {
    const t = [];
    return e.forEach(s => {
        Array.isArray(s) ? t.push(...G(s)) : t.push(s)
    }), t
}

function re(e, t) {
    return Array.prototype.filter.call(e, t)
}

function ge(e) {
    const t = [];
    for (let s = 0; s < e.length; s += 1) t.indexOf(e[s]) === -1 && t.push(e[s]);
    return t
}

function ve(e, t) {
    if (typeof e != "string") return [e];
    const s = [],
        i = t.querySelectorAll(e);
    for (let n = 0; n < i.length; n += 1) s.push(i[n]);
    return s
}

function h(e, t) {
    const s = P(),
        i = $();
    let n = [];
    if (!t && e instanceof z) return e;
    if (!e) return new z(n);
    if (typeof e == "string") {
        const r = e.trim();
        if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) {
            let o = "div";
            r.indexOf("<li") === 0 && (o = "ul"), r.indexOf("<tr") === 0 && (o = "tbody"), (r.indexOf("<td") === 0 || r.indexOf("<th") === 0) && (o = "tr"), r
                .indexOf("<tbody") === 0 && (o = "table"), r.indexOf("<option") === 0 && (o = "select");
            const l = i.createElement(o);
            l.innerHTML = r;
            for (let a = 0; a < l.childNodes.length; a += 1) n.push(l.childNodes[a])
        } else n = ve(e.trim(), t || i)
    } else if (e.nodeType || e === s || e === i) n.push(e);
    else if (Array.isArray(e)) {
        if (e instanceof z) return e;
        n = e
    }
    return new z(ge(n))
}
h.fn = z.prototype;

function Te(...e) {
    const t = G(e.map(s => s.split(" ")));
    return this.forEach(s => {
        s.classList.add(...t)
    }), this
}

function Se(...e) {
    const t = G(e.map(s => s.split(" ")));
    return this.forEach(s => {
        s.classList.remove(...t)
    }), this
}

function we(...e) {
    const t = G(e.map(s => s.split(" ")));
    this.forEach(s => {
        t.forEach(i => {
            s.classList.toggle(i)
        })
    })
}

function be(...e) {
    const t = G(e.map(s => s.split(" ")));
    return re(this, s => t.filter(i => s.classList.contains(i)).length > 0).length > 0
}

function ye(e, t) {
    if (arguments.length === 1 && typeof e == "string") return this[0] ? this[0].getAttribute(e) : void 0;
    for (let s = 0; s < this.length; s += 1)
        if (arguments.length === 2) this[s].setAttribute(e, t);
        else
            for (const i in e) this[s][i] = e[i], this[s].setAttribute(i, e[i]);
    return this
}

function xe(e) {
    for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
    return this
}

function Ee(e) {
    for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
    return this
}

function Ce(e) {
    for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = typeof e != "string" ? `${e}ms` : e;
    return this
}

function Me(...e) {
    let [t, s, i, n] = e;
    typeof e[1] == "function" && ([t, i, n] = e, s = void 0), n || (n = !1);

    function r(d) {
        const c = d.target;
        if (!c) return;
        const u = d.target.dom7EventData || [];
        if (u.indexOf(d) < 0 && u.unshift(d), h(c).is(s)) i.apply(c, u);
        else {
            const f = h(c).parents();
            for (let p = 0; p < f.length; p += 1) h(f[p]).is(s) && i.apply(f[p], u)
        }
    }

    function o(d) {
        const c = d && d.target ? d.target.dom7EventData || [] : [];
        c.indexOf(d) < 0 && c.unshift(d), i.apply(this, c)
    }
    const l = t.split(" ");
    let a;
    for (let d = 0; d < this.length; d += 1) {
        const c = this[d];
        if (s)
            for (a = 0; a < l.length; a += 1) {
                const u = l[a];
                c.dom7LiveListeners || (c.dom7LiveListeners = {}), c.dom7LiveListeners[u] || (c.dom7LiveListeners[u] = []), c.dom7LiveListeners[u].push({
                    listener: i,
                    proxyListener: r
                }), c.addEventListener(u, r, n)
            } else
                for (a = 0; a < l.length; a += 1) {
                    const u = l[a];
                    c.dom7Listeners || (c.dom7Listeners = {}), c.dom7Listeners[u] || (c.dom7Listeners[u] = []), c.dom7Listeners[u].push({
                        listener: i,
                        proxyListener: o
                    }), c.addEventListener(u, o, n)
                }
    }
    return this
}

function Pe(...e) {
    let [t, s, i, n] = e;
    typeof e[1] == "function" && ([t, i, n] = e, s = void 0), n || (n = !1);
    const r = t.split(" ");
    for (let o = 0; o < r.length; o += 1) {
        const l = r[o];
        for (let a = 0; a < this.length; a += 1) {
            const d = this[a];
            let c;
            if (!s && d.dom7Listeners ? c = d.dom7Listeners[l] : s && d.dom7LiveListeners && (c = d.dom7LiveListeners[l]), c && c.length)
                for (let u = c.length - 1; u >= 0; u -= 1) {
                    const f = c[u];
                    i && f.listener === i || i && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === i ? (d.removeEventListener(l, f.proxyListener,
                        n), c.splice(u, 1)) : i || (d.removeEventListener(l, f.proxyListener, n), c.splice(u, 1))
                }
        }
    }
    return this
}

function Le(...e) {
    const t = P(),
        s = e[0].split(" "),
        i = e[1];
    for (let n = 0; n < s.length; n += 1) {
        const r = s[n];
        for (let o = 0; o < this.length; o += 1) {
            const l = this[o];
            if (t.CustomEvent) {
                const a = new t.CustomEvent(r, {
                    detail: i,
                    bubbles: !0,
                    cancelable: !0
                });
                l.dom7EventData = e.filter((d, c) => c > 0), l.dispatchEvent(a), l.dom7EventData = [], delete l.dom7EventData
            }
        }
    }
    return this
}

function ke(e) {
    const t = this;

    function s(i) {
        i.target === this && (e.call(this, i), t.off("transitionend", s))
    }
    return e && t.on("transitionend", s), this
}

function Oe(e) {
    if (this.length > 0) {
        if (e) {
            const t = this.styles();
            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
        }
        return this[0].offsetWidth
    }
    return null
}

function $e(e) {
    if (this.length > 0) {
        if (e) {
            const t = this.styles();
            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
        }
        return this[0].offsetHeight
    }
    return null
}

function Ie() {
    if (this.length > 0) {
        const e = P(),
            t = $(),
            s = this[0],
            i = s.getBoundingClientRect(),
            n = t.body,
            r = s.clientTop || n.clientTop || 0,
            o = s.clientLeft || n.clientLeft || 0,
            l = s === e ? e.scrollY : s.scrollTop,
            a = s === e ? e.scrollX : s.scrollLeft;
        return {
            top: i.top + l - r,
            left: i.left + a - o
        }
    }
    return null
}

function ze() {
    const e = P();
    return this[0] ? e.getComputedStyle(this[0], null) : {}
}

function Ae(e, t) {
    const s = P();
    let i;
    if (arguments.length === 1)
        if (typeof e == "string") {
            if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
        } else {
            for (i = 0; i < this.length; i += 1)
                for (const n in e) this[i].style[n] = e[n];
            return this
        } if (arguments.length === 2 && typeof e == "string") {
        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
        return this
    }
    return this
}

function De(e) {
    return e ? (this.forEach((t, s) => {
        e.apply(t, [t, s])
    }), this) : this
}

function Ge(e) {
    const t = re(this, e);
    return h(t)
}

function Ne(e) {
    if (typeof e > "u") return this[0] ? this[0].innerHTML : null;
    for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
    return this
}

function Be(e) {
    if (typeof e > "u") return this[0] ? this[0].textContent.trim() : null;
    for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
    return this
}

function Ve(e) {
    const t = P(),
        s = $(),
        i = this[0];
    let n, r;
    if (!i || typeof e > "u") return !1;
    if (typeof e == "string") {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);
        for (n = h(e), r = 0; r < n.length; r += 1)
            if (n[r] === i) return !0;
        return !1
    }
    if (e === s) return i === s;
    if (e === t) return i === t;
    if (e.nodeType || e instanceof z) {
        for (n = e.nodeType ? [e] : e, r = 0; r < n.length; r += 1)
            if (n[r] === i) return !0;
        return !1
    }
    return !1
}

function _e() {
    let e = this[0],
        t;
    if (e) {
        for (t = 0;
            (e = e.previousSibling) !== null;) e.nodeType === 1 && (t += 1);
        return t
    }
}

function He(e) {
    if (typeof e > "u") return this;
    const t = this.length;
    if (e > t - 1) return h([]);
    if (e < 0) {
        const s = t + e;
        return s < 0 ? h([]) : h([this[s]])
    }
    return h([this[e]])
}

function Fe(...e) {
    let t;
    const s = $();
    for (let i = 0; i < e.length; i += 1) {
        t = e[i];
        for (let n = 0; n < this.length; n += 1)
            if (typeof t == "string") {
                const r = s.createElement("div");
                for (r.innerHTML = t; r.firstChild;) this[n].appendChild(r.firstChild)
            } else if (t instanceof z)
            for (let r = 0; r < t.length; r += 1) this[n].appendChild(t[r]);
        else this[n].appendChild(t)
    }
    return this
}

function Re(e) {
    const t = $();
    let s, i;
    for (s = 0; s < this.length; s += 1)
        if (typeof e == "string") {
            const n = t.createElement("div");
            for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1) this[s].insertBefore(n.childNodes[i], this[s].childNodes[0])
        } else if (e instanceof z)
        for (i = 0; i < e.length; i += 1) this[s].insertBefore(e[i], this[s].childNodes[0]);
    else this[s].insertBefore(e, this[s].childNodes[0]);
    return this
}

function je(e) {
    return this.length > 0 ? e ? this[0].nextElementSibling && h(this[0].nextElementSibling).is(e) ? h([this[0].nextElementSibling]) : h([]) : this[0]
        .nextElementSibling ? h([this[0].nextElementSibling]) : h([]) : h([])
}

function We(e) {
    const t = [];
    let s = this[0];
    if (!s) return h([]);
    for (; s.nextElementSibling;) {
        const i = s.nextElementSibling;
        e ? h(i).is(e) && t.push(i) : t.push(i), s = i
    }
    return h(t)
}

function qe(e) {
    if (this.length > 0) {
        const t = this[0];
        return e ? t.previousElementSibling && h(t.previousElementSibling).is(e) ? h([t.previousElementSibling]) : h([]) : t.previousElementSibling ? h([t
            .previousElementSibling
        ]) : h([])
    }
    return h([])
}

function Xe(e) {
    const t = [];
    let s = this[0];
    if (!s) return h([]);
    for (; s.previousElementSibling;) {
        const i = s.previousElementSibling;
        e ? h(i).is(e) && t.push(i) : t.push(i), s = i
    }
    return h(t)
}

function Ye(e) {
    const t = [];
    for (let s = 0; s < this.length; s += 1) this[s].parentNode !== null && (e ? h(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s]
        .parentNode));
    return h(t)
}

function Ue(e) {
    const t = [];
    for (let s = 0; s < this.length; s += 1) {
        let i = this[s].parentNode;
        for (; i;) e ? h(i).is(e) && t.push(i) : t.push(i), i = i.parentNode
    }
    return h(t)
}

function Ke(e) {
    let t = this;
    return typeof e > "u" ? h([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
}

function Je(e) {
    const t = [];
    for (let s = 0; s < this.length; s += 1) {
        const i = this[s].querySelectorAll(e);
        for (let n = 0; n < i.length; n += 1) t.push(i[n])
    }
    return h(t)
}

function Qe(e) {
    const t = [];
    for (let s = 0; s < this.length; s += 1) {
        const i = this[s].children;
        for (let n = 0; n < i.length; n += 1)(!e || h(i[n]).is(e)) && t.push(i[n])
    }
    return h(t)
}

function Ze() {
    for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
    return this
}
const Z = {
    addClass: Te,
    removeClass: Se,
    hasClass: be,
    toggleClass: we,
    attr: ye,
    removeAttr: xe,
    transform: Ee,
    transition: Ce,
    on: Me,
    off: Pe,
    trigger: Le,
    transitionEnd: ke,
    outerWidth: Oe,
    outerHeight: $e,
    styles: ze,
    offset: Ie,
    css: Ae,
    each: De,
    html: Ne,
    text: Be,
    is: Ve,
    index: _e,
    eq: He,
    append: Fe,
    prepend: Re,
    next: je,
    nextAll: We,
    prev: qe,
    prevAll: Xe,
    parent: Ye,
    parents: Ue,
    closest: Ke,
    find: Je,
    children: Qe,
    filter: Ge,
    remove: Ze
};
Object.keys(Z).forEach(e => {
    Object.defineProperty(h.fn, e, {
        value: Z[e],
        writable: !0
    })
});

function et(e) {
    const t = e;
    Object.keys(t).forEach(s => {
        try {
            t[s] = null
        } catch {}
        try {
            delete t[s]
        } catch {}
    })
}

function q(e, t = 0) {
    return setTimeout(e, t)
}

function A() {
    return Date.now()
}

function tt(e) {
    const t = P();
    let s;
    return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
}

function st(e, t = "x") {
    const s = P();
    let i, n, r;
    const o = tt(e);
    return s.WebKitCSSMatrix ? (n = o.transform || o.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map(l => l.replace(",", ".")).join(", ")),
        r = new s.WebKitCSSMatrix(n === "none" ? "" : n)) : (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o
        .getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = r.toString().split(",")), t === "x" && (s.WebKitCSSMatrix ? n = r
        .m41 : i.length === 16 ? n = parseFloat(i[12]) : n = parseFloat(i[4])), t === "y" && (s.WebKitCSSMatrix ? n = r.m42 : i.length === 16 ? n =
        parseFloat(i[13]) : n = parseFloat(i[5])), n || 0
}

function B(e) {
    return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object"
}

function it(e) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11)
}

function O(...e) {
    const t = Object(e[0]),
        s = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < e.length; i += 1) {
        const n = e[i];
        if (n != null && !it(n)) {
            const r = Object.keys(Object(n)).filter(o => s.indexOf(o) < 0);
            for (let o = 0, l = r.length; o < l; o += 1) {
                const a = r[o],
                    d = Object.getOwnPropertyDescriptor(n, a);
                d !== void 0 && d.enumerable && (B(t[a]) && B(n[a]) ? n[a].__swiper__ ? t[a] = n[a] : O(t[a], n[a]) : !B(t[a]) && B(n[a]) ? (t[a] = {}, n[a]
                    .__swiper__ ? t[a] = n[a] : O(t[a], n[a])) : t[a] = n[a])
            }
        }
    }
    return t
}

function V(e, t, s) {
    e.style.setProperty(t, s)
}

function ae({
    swiper: e,
    targetPosition: t,
    side: s
}) {
    const i = P(),
        n = -e.translate;
    let r = null,
        o;
    const l = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(e.cssModeFrameID);
    const a = t > n ? "next" : "prev",
        d = (u, f) => a === "next" && u >= f || a === "prev" && u <= f,
        c = () => {
            o = new Date().getTime(), r === null && (r = o);
            const u = Math.max(Math.min((o - r) / l, 1), 0),
                f = .5 - Math.cos(u * Math.PI) / 2;
            let p = n + f * (t - n);
            if (d(p, t) && (p = t), e.wrapperEl.scrollTo({
                    [s]: p
                }), d(p, t)) {
                e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                    e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                        [s]: p
                    })
                }), i.cancelAnimationFrame(e.cssModeFrameID);
                return
            }
            e.cssModeFrameID = i.requestAnimationFrame(c)
        };
    c()
}
let H;

function nt() {
    const e = P(),
        t = $();
    return {
        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
        passiveListener: function() {
            let i = !1;
            try {
                const n = Object.defineProperty({}, "passive", {
                    get() {
                        i = !0
                    }
                });
                e.addEventListener("testPassiveListener", null, n)
            } catch {}
            return i
        }(),
        gestures: function() {
            return "ongesturestart" in e
        }()
    }
}

function oe() {
    return H || (H = nt()), H
}
let F;

function rt({
    userAgent: e
} = {}) {
    const t = oe(),
        s = P(),
        i = s.navigator.platform,
        n = e || s.navigator.userAgent,
        r = {
            ios: !1,
            android: !1
        },
        o = s.screen.width,
        l = s.screen.height,
        a = n.match(/(Android);?[\s\/]+([\d.]+)?/);
    let d = n.match(/(iPad).*OS\s([\d_]+)/);
    const c = n.match(/(iPod)(.*OS\s([\d_]+))?/),
        u = !d && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        f = i === "Win32";
    let p = i === "MacIntel";
    const v = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080",
    "1080x810"];
    return !d && p && t.touch && v.indexOf(`${o}x${l}`) >= 0 && (d = n.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), p = !1), a && !f && (r.os =
        "android", r.android = !0), (d || u || c) && (r.os = "ios", r.ios = !0), r
}

function at(e = {}) {
    return F || (F = rt(e)), F
}
let R;

function ot() {
    const e = P();

    function t() {
        const s = e.navigator.userAgent.toLowerCase();
        return s.indexOf("safari") >= 0 && s.indexOf("chrome") < 0 && s.indexOf("android") < 0
    }
    return {
        isSafari: t(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
    }
}

function lt() {
    return R || (R = ot()), R
}

function dt({
    swiper: e,
    on: t,
    emit: s
}) {
    const i = P();
    let n = null,
        r = null;
    const o = () => {
            !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"))
        },
        l = () => {
            !e || e.destroyed || !e.initialized || (n = new ResizeObserver(c => {
                r = i.requestAnimationFrame(() => {
                    const {
                        width: u,
                        height: f
                    } = e;
                    let p = u,
                        v = f;
                    c.forEach(({
                        contentBoxSize: T,
                        contentRect: g,
                        target: m
                    }) => {
                        m && m !== e.el || (p = g ? g.width : (T[0] || T).inlineSize, v = g ? g.height : (T[0] || T).blockSize)
                    }), (p !== u || v !== f) && o()
                })
            }), n.observe(e.el))
        },
        a = () => {
            r && i.cancelAnimationFrame(r), n && n.unobserve && e.el && (n.unobserve(e.el), n = null)
        },
        d = () => {
            !e || e.destroyed || !e.initialized || s("orientationchange")
        };
    t("init", () => {
        if (e.params.resizeObserver && typeof i.ResizeObserver < "u") {
            l();
            return
        }
        i.addEventListener("resize", o), i.addEventListener("orientationchange", d)
    }), t("destroy", () => {
        a(), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", d)
    })
}

function ct({
    swiper: e,
    extendParams: t,
    on: s,
    emit: i
}) {
    const n = [],
        r = P(),
        o = (d, c = {}) => {
            const u = r.MutationObserver || r.WebkitMutationObserver,
                f = new u(p => {
                    if (p.length === 1) {
                        i("observerUpdate", p[0]);
                        return
                    }
                    const v = function() {
                        i("observerUpdate", p[0])
                    };
                    r.requestAnimationFrame ? r.requestAnimationFrame(v) : r.setTimeout(v, 0)
                });
            f.observe(d, {
                attributes: typeof c.attributes > "u" ? !0 : c.attributes,
                childList: typeof c.childList > "u" ? !0 : c.childList,
                characterData: typeof c.characterData > "u" ? !0 : c.characterData
            }), n.push(f)
        },
        l = () => {
            if (e.params.observer) {
                if (e.params.observeParents) {
                    const d = e.$el.parents();
                    for (let c = 0; c < d.length; c += 1) o(d[c])
                }
                o(e.$el[0], {
                    childList: e.params.observeSlideChildren
                }), o(e.$wrapperEl[0], {
                    attributes: !1
                })
            }
        },
        a = () => {
            n.forEach(d => {
                d.disconnect()
            }), n.splice(0, n.length)
        };
    t({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }), s("init", l), s("destroy", a)
}
const ft = {
    on(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;
        const n = s ? "unshift" : "push";
        return e.split(" ").forEach(r => {
            i.eventsListeners[r] || (i.eventsListeners[r] = []), i.eventsListeners[r][n](t)
        }), i
    },
    once(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;

        function n(...r) {
            i.off(e, n), n.__emitterProxy && delete n.__emitterProxy, t.apply(i, r)
        }
        return n.__emitterProxy = t, i.on(e, n, s)
    },
    onAny(e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
        const i = t ? "unshift" : "push";
        return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
    },
    offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
    },
    off(e, t) {
        const s = this;
        return !s.eventsListeners || s.destroyed || !s.eventsListeners || e.split(" ").forEach(i => {
            typeof t > "u" ? s.eventsListeners[i] = [] : s.eventsListeners[i] && s.eventsListeners[i].forEach((n, r) => {
                (n === t || n.__emitterProxy && n.__emitterProxy === t) && s.eventsListeners[i].splice(r, 1)
            })
        }), s
    },
    emit(...e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
        let s, i, n;
        return typeof e[0] == "string" || Array.isArray(e[0]) ? (s = e[0], i = e.slice(1, e.length), n = t) : (s = e[0].events, i = e[0].data, n = e[0]
            .context || t), i.unshift(n), (Array.isArray(s) ? s : s.split(" ")).forEach(o => {
            t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach(l => {
                l.apply(n, [o, ...i])
            }), t.eventsListeners && t.eventsListeners[o] && t.eventsListeners[o].forEach(l => {
                l.apply(n, i)
            })
        }), t
    }
};

function ut() {
    const e = this;
    let t, s;
    const i = e.$el;
    typeof e.params.width < "u" && e.params.width !== null ? t = e.params.width : t = i[0].clientWidth, typeof e.params.height < "u" && e.params.height !==
        null ? s = e.params.height : s = i[0].clientHeight, !(t === 0 && e.isHorizontal() || s === 0 && e.isVertical()) && (t = t - parseInt(i.css(
            "padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), s = s - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css(
            "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
            width: t,
            height: s,
            size: e.isHorizontal() ? t : s
        }))
}

function pt() {
    const e = this;

    function t(b) {
        return e.isHorizontal() ? b : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        } [b]
    }

    function s(b, x) {
        return parseFloat(b.getPropertyValue(t(x)) || 0)
    }
    const i = e.params,
        {
            $wrapperEl: n,
            size: r,
            rtlTranslate: o,
            wrongRTL: l
        } = e,
        a = e.virtual && i.virtual.enabled,
        d = a ? e.virtual.slides.length : e.slides.length,
        c = n.children(`.${e.params.slideClass}`),
        u = a ? e.virtual.slides.length : c.length;
    let f = [];
    const p = [],
        v = [];
    let T = i.slidesOffsetBefore;
    typeof T == "function" && (T = i.slidesOffsetBefore.call(e));
    let g = i.slidesOffsetAfter;
    typeof g == "function" && (g = i.slidesOffsetAfter.call(e));
    const m = e.snapGrid.length,
        S = e.slidesGrid.length;
    let w = i.spaceBetween,
        y = -T,
        L = 0,
        C = 0;
    if (typeof r > "u") return;
    typeof w == "string" && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * r), e.virtualSize = -w, o ? c.css({
        marginLeft: "",
        marginBottom: "",
        marginTop: ""
    }) : c.css({
        marginRight: "",
        marginBottom: "",
        marginTop: ""
    }), i.centeredSlides && i.cssMode && (V(e.wrapperEl, "--swiper-centered-offset-before", ""), V(e.wrapperEl, "--swiper-centered-offset-after", ""));
    const k = i.grid && i.grid.rows > 1 && e.grid;
    k && e.grid.initSlides(u);
    let M;
    const N = i.slidesPerView === "auto" && i.breakpoints && Object.keys(i.breakpoints).filter(b => typeof i.breakpoints[b].slidesPerView < "u").length > 0;
    for (let b = 0; b < u; b += 1) {
        M = 0;
        const x = c.eq(b);
        if (k && e.grid.updateSlide(b, x, u, t), x.css("display") !== "none") {
            if (i.slidesPerView === "auto") {
                N && (c[b].style[t("width")] = "");
                const E = getComputedStyle(x[0]),
                    D = x[0].style.transform,
                    _ = x[0].style.webkitTransform;
                if (D && (x[0].style.transform = "none"), _ && (x[0].style.webkitTransform = "none"), i.roundLengths) M = e.isHorizontal() ? x.outerWidth(!0) :
                    x.outerHeight(!0);
                else {
                    const Y = s(E, "width"),
                        ce = s(E, "padding-left"),
                        fe = s(E, "padding-right"),
                        U = s(E, "margin-left"),
                        K = s(E, "margin-right"),
                        J = E.getPropertyValue("box-sizing");
                    if (J && J === "border-box") M = Y + U + K;
                    else {
                        const {
                            clientWidth: ue,
                            offsetWidth: pe
                        } = x[0];
                        M = Y + ce + fe + U + K + (pe - ue)
                    }
                }
                D && (x[0].style.transform = D), _ && (x[0].style.webkitTransform = _), i.roundLengths && (M = Math.floor(M))
            } else M = (r - (i.slidesPerView - 1) * w) / i.slidesPerView, i.roundLengths && (M = Math.floor(M)), c[b] && (c[b].style[t("width")] = `${M}px`);
            c[b] && (c[b].swiperSlideSize = M), v.push(M), i.centeredSlides ? (y = y + M / 2 + L / 2 + w, L === 0 && b !== 0 && (y = y - r / 2 - w), b === 0 &&
                (y = y - r / 2 - w), Math.abs(y) < 1 / 1e3 && (y = 0), i.roundLengths && (y = Math.floor(y)), C % i.slidesPerGroup === 0 && f.push(y), p
                .push(y)) : (i.roundLengths && (y = Math.floor(y)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup === 0 && f
                .push(y), p.push(y), y = y + M + w), e.virtualSize += M + w, L = M, C += 1
        }
    }
    if (e.virtualSize = Math.max(e.virtualSize, r) + g, o && l && (i.effect === "slide" || i.effect === "coverflow") && n.css({
            width: `${e.virtualSize+i.spaceBetween}px`
        }), i.setWrapperSize && n.css({
            [t("width")]: `${e.virtualSize+i.spaceBetween}px`
        }), k && e.grid.updateWrapperSize(M, f, t), !i.centeredSlides) {
        const b = [];
        for (let x = 0; x < f.length; x += 1) {
            let E = f[x];
            i.roundLengths && (E = Math.floor(E)), f[x] <= e.virtualSize - r && b.push(E)
        }
        f = b, Math.floor(e.virtualSize - r) - Math.floor(f[f.length - 1]) > 1 && f.push(e.virtualSize - r)
    }
    if (f.length === 0 && (f = [0]), i.spaceBetween !== 0) {
        const b = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
        c.filter((x, E) => i.cssMode ? E !== c.length - 1 : !0).css({
            [b]: `${w}px`
        })
    }
    if (i.centeredSlides && i.centeredSlidesBounds) {
        let b = 0;
        v.forEach(E => {
            b += E + (i.spaceBetween ? i.spaceBetween : 0)
        }), b -= i.spaceBetween;
        const x = b - r;
        f = f.map(E => E < 0 ? -T : E > x ? x + g : E)
    }
    if (i.centerInsufficientSlides) {
        let b = 0;
        if (v.forEach(x => {
                b += x + (i.spaceBetween ? i.spaceBetween : 0)
            }), b -= i.spaceBetween, b < r) {
            const x = (r - b) / 2;
            f.forEach((E, D) => {
                f[D] = E - x
            }), p.forEach((E, D) => {
                p[D] = E + x
            })
        }
    }
    if (Object.assign(e, {
            slides: c,
            snapGrid: f,
            slidesGrid: p,
            slidesSizesGrid: v
        }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
        V(e.wrapperEl, "--swiper-centered-offset-before", `${-f[0]}px`), V(e.wrapperEl, "--swiper-centered-offset-after", `${e.size/2-v[v.length-1]/2}px`);
        const b = -e.snapGrid[0],
            x = -e.slidesGrid[0];
        e.snapGrid = e.snapGrid.map(E => E + b), e.slidesGrid = e.slidesGrid.map(E => E + x)
    }
    if (u !== d && e.emit("slidesLengthChange"), f.length !== m && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), p.length !==
        S && e.emit("slidesGridLengthChange"), i.watchSlidesProgress && e.updateSlidesOffset(), !a && !i.cssMode && (i.effect === "slide" || i.effect ===
            "fade")) {
        const b = `${i.containerModifierClass}backface-hidden`,
            x = e.$el.hasClass(b);
        u <= i.maxBackfaceHiddenSlides ? x || e.$el.addClass(b) : x && e.$el.removeClass(b)
    }
}

function ht(e) {
    const t = this,
        s = [],
        i = t.virtual && t.params.virtual.enabled;
    let n = 0,
        r;
    typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
    const o = l => i ? t.slides.filter(a => parseInt(a.getAttribute("data-swiper-slide-index"), 10) === l)[0] : t.slides.eq(l)[0];
    if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)(t.visibleSlides || h([])).each(l => {
            s.push(l)
        });
        else
            for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
                const l = t.activeIndex + r;
                if (l > t.slides.length && !i) break;
                s.push(o(l))
            } else s.push(o(t.activeIndex));
    for (r = 0; r < s.length; r += 1)
        if (typeof s[r] < "u") {
            const l = s[r].offsetHeight;
            n = l > n ? l : n
        }(n || n === 0) && t.$wrapperEl.css("height", `${n}px`)
}

function mt() {
    const e = this,
        t = e.slides;
    for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
}

function gt(e = this && this.translate || 0) {
    const t = this,
        s = t.params,
        {
            slides: i,
            rtlTranslate: n,
            snapGrid: r
        } = t;
    if (i.length === 0) return;
    typeof i[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
    let o = -e;
    n && (o = e), i.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
    for (let l = 0; l < i.length; l += 1) {
        const a = i[l];
        let d = a.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
        const c = (o + (s.centeredSlides ? t.minTranslate() : 0) - d) / (a.swiperSlideSize + s.spaceBetween),
            u = (o - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (a.swiperSlideSize + s.spaceBetween),
            f = -(o - d),
            p = f + t.slidesSizesGrid[l];
        (f >= 0 && f < t.size - 1 || p > 1 && p <= t.size || f <= 0 && p >= t.size) && (t.visibleSlides.push(a), t.visibleSlidesIndexes.push(l), i.eq(l)
            .addClass(s.slideVisibleClass)), a.progress = n ? -c : c, a.originalProgress = n ? -u : u
    }
    t.visibleSlides = h(t.visibleSlides)
}

function vt(e) {
    const t = this;
    if (typeof e > "u") {
        const d = t.rtlTranslate ? -1 : 1;
        e = t && t.translate && t.translate * d || 0
    }
    const s = t.params,
        i = t.maxTranslate() - t.minTranslate();
    let {
        progress: n,
        isBeginning: r,
        isEnd: o
    } = t;
    const l = r,
        a = o;
    i === 0 ? (n = 0, r = !0, o = !0) : (n = (e - t.minTranslate()) / i, r = n <= 0, o = n >= 1), Object.assign(t, {
            progress: n,
            isBeginning: r,
            isEnd: o
        }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), o && !a && t
        .emit("reachEnd toEdge"), (l && !r || a && !o) && t.emit("fromEdge"), t.emit("progress", n)
}

function Tt() {
    const e = this,
        {
            slides: t,
            params: s,
            $wrapperEl: i,
            activeIndex: n,
            realIndex: r
        } = e,
        o = e.virtual && s.virtual.enabled;
    t.removeClass(
        `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
        );
    let l;
    o ? l = e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${n}"]`) : l = t.eq(n), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s
        .slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s
        .slideDuplicateActiveClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s
        .slideDuplicateActiveClass));
    let a = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
    s.loop && a.length === 0 && (a = t.eq(0), a.addClass(s.slideNextClass));
    let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
    s.loop && d.length === 0 && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (a.hasClass(s.slideDuplicateClass) ? i.children(
            `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${a.attr("data-swiper-slide-index")}"]`).addClass(s
            .slideDuplicateNextClass) : i.children(
            `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${a.attr("data-swiper-slide-index")}"]`).addClass(s
        .slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? i.children(
            `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s
            .slideDuplicatePrevClass) : i.children(
            `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)
        ), e.emitSlidesClasses()
}

function St(e) {
    const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        {
            slidesGrid: i,
            snapGrid: n,
            params: r,
            activeIndex: o,
            realIndex: l,
            snapIndex: a
        } = t;
    let d = e,
        c;
    if (typeof d > "u") {
        for (let f = 0; f < i.length; f += 1) typeof i[f + 1] < "u" ? s >= i[f] && s < i[f + 1] - (i[f + 1] - i[f]) / 2 ? d = f : s >= i[f] && s < i[f + 1] && (
            d = f + 1) : s >= i[f] && (d = f);
        r.normalizeSlideIndex && (d < 0 || typeof d > "u") && (d = 0)
    }
    if (n.indexOf(s) >= 0) c = n.indexOf(s);
    else {
        const f = Math.min(r.slidesPerGroupSkip, d);
        c = f + Math.floor((d - f) / r.slidesPerGroup)
    }
    if (c >= n.length && (c = n.length - 1), d === o) {
        c !== a && (t.snapIndex = c, t.emit("snapIndexChange"));
        return
    }
    const u = parseInt(t.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
    Object.assign(t, {
            snapIndex: c,
            realIndex: u,
            previousIndex: o,
            activeIndex: d
        }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== u && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t
        .emit("slideChange")
}

function wt(e) {
    const t = this,
        s = t.params,
        i = h(e).closest(`.${s.slideClass}`)[0];
    let n = !1,
        r;
    if (i) {
        for (let o = 0; o < t.slides.length; o += 1)
            if (t.slides[o] === i) {
                n = !0, r = o;
                break
            }
    }
    if (i && n) t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(h(i).attr("data-swiper-slide-index"), 10) : t
        .clickedIndex = r;
    else {
        t.clickedSlide = void 0, t.clickedIndex = void 0;
        return
    }
    s.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
}
const bt = {
    updateSize: ut,
    updateSlides: pt,
    updateAutoHeight: ht,
    updateSlidesOffset: mt,
    updateSlidesProgress: gt,
    updateProgress: vt,
    updateSlidesClasses: Tt,
    updateActiveIndex: St,
    updateClickedSlide: wt
};

function yt(e = this.isHorizontal() ? "x" : "y") {
    const t = this,
        {
            params: s,
            rtlTranslate: i,
            translate: n,
            $wrapperEl: r
        } = t;
    if (s.virtualTranslate) return i ? -n : n;
    if (s.cssMode) return n;
    let o = st(r[0], e);
    return i && (o = -o), o || 0
}

function xt(e, t) {
    const s = this,
        {
            rtlTranslate: i,
            params: n,
            $wrapperEl: r,
            wrapperEl: o,
            progress: l
        } = s;
    let a = 0,
        d = 0;
    const c = 0;
    s.isHorizontal() ? a = i ? -e : e : d = e, n.roundLengths && (a = Math.floor(a), d = Math.floor(d)), n.cssMode ? o[s.isHorizontal() ? "scrollLeft" :
            "scrollTop"] = s.isHorizontal() ? -a : -d : n.virtualTranslate || r.transform(`translate3d(${a}px, ${d}px, ${c}px)`), s.previousTranslate = s
        .translate, s.translate = s.isHorizontal() ? a : d;
    let u;
    const f = s.maxTranslate() - s.minTranslate();
    f === 0 ? u = 0 : u = (e - s.minTranslate()) / f, u !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
}

function Et() {
    return -this.snapGrid[0]
}

function Ct() {
    return -this.snapGrid[this.snapGrid.length - 1]
}

function Mt(e = 0, t = this.params.speed, s = !0, i = !0, n) {
    const r = this,
        {
            params: o,
            wrapperEl: l
        } = r;
    if (r.animating && o.preventInteractionOnTransition) return !1;
    const a = r.minTranslate(),
        d = r.maxTranslate();
    let c;
    if (i && e > a ? c = a : i && e < d ? c = d : c = e, r.updateProgress(c), o.cssMode) {
        const u = r.isHorizontal();
        if (t === 0) l[u ? "scrollLeft" : "scrollTop"] = -c;
        else {
            if (!r.support.smoothScroll) return ae({
                swiper: r,
                targetPosition: -c,
                side: u ? "left" : "top"
            }), !0;
            l.scrollTo({
                [u ? "left" : "top"]: -c,
                behavior: "smooth"
            })
        }
        return !0
    }
    return t === 0 ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, n), r.emit("transitionEnd"))) : (r.setTransition(t), r
        .setTranslate(c), s && (r.emit("beforeTransitionStart", t, n), r.emit("transitionStart")), r.animating || (r.animating = !0, r
            .onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(f) {
                !r || r.destroyed || f.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r
                    .$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r
                    .onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"))
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
}
const Pt = {
    getTranslate: yt,
    setTranslate: xt,
    minTranslate: Et,
    maxTranslate: Ct,
    translateTo: Mt
};

function Lt(e, t) {
    const s = this;
    s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t)
}

function le({
    swiper: e,
    runCallbacks: t,
    direction: s,
    step: i
}) {
    const {
        activeIndex: n,
        previousIndex: r
    } = e;
    let o = s;
    if (o || (n > r ? o = "next" : n < r ? o = "prev" : o = "reset"), e.emit(`transition${i}`), t && n !== r) {
        if (o === "reset") {
            e.emit(`slideResetTransition${i}`);
            return
        }
        e.emit(`slideChangeTransition${i}`), o === "next" ? e.emit(`slideNextTransition${i}`) : e.emit(`slidePrevTransition${i}`)
    }
}

function kt(e = !0, t) {
    const s = this,
        {
            params: i
        } = s;
    i.cssMode || (i.autoHeight && s.updateAutoHeight(), le({
        swiper: s,
        runCallbacks: e,
        direction: t,
        step: "Start"
    }))
}

function Ot(e = !0, t) {
    const s = this,
        {
            params: i
        } = s;
    s.animating = !1, !i.cssMode && (s.setTransition(0), le({
        swiper: s,
        runCallbacks: e,
        direction: t,
        step: "End"
    }))
}
const $t = {
    setTransition: Lt,
    transitionStart: kt,
    transitionEnd: Ot
};

function It(e = 0, t = this.params.speed, s = !0, i, n) {
    if (typeof e != "number" && typeof e != "string") throw new Error(
        `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
    if (typeof e == "string") {
        const w = parseInt(e, 10);
        if (!isFinite(w)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
        e = w
    }
    const r = this;
    let o = e;
    o < 0 && (o = 0);
    const {
        params: l,
        snapGrid: a,
        slidesGrid: d,
        previousIndex: c,
        activeIndex: u,
        rtlTranslate: f,
        wrapperEl: p,
        enabled: v
    } = r;
    if (r.animating && l.preventInteractionOnTransition || !v && !i && !n) return !1;
    const T = Math.min(r.params.slidesPerGroupSkip, o);
    let g = T + Math.floor((o - T) / r.params.slidesPerGroup);
    g >= a.length && (g = a.length - 1);
    const m = -a[g];
    if (l.normalizeSlideIndex)
        for (let w = 0; w < d.length; w += 1) {
            const y = -Math.floor(m * 100),
                L = Math.floor(d[w] * 100),
                C = Math.floor(d[w + 1] * 100);
            typeof d[w + 1] < "u" ? y >= L && y < C - (C - L) / 2 ? o = w : y >= L && y < C && (o = w + 1) : y >= L && (o = w)
        }
    if (r.initialized && o !== u && (!r.allowSlideNext && m < r.translate && m < r.minTranslate() || !r.allowSlidePrev && m > r.translate && m > r
        .maxTranslate() && (u || 0) !== o)) return !1;
    o !== (c || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(m);
    let S;
    if (o > u ? S = "next" : o < u ? S = "prev" : S = "reset", f && -m === r.translate || !f && m === r.translate) return r.updateActiveIndex(o), l
        .autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), l.effect !== "slide" && r.setTranslate(m), S !== "reset" && (r.transitionStart(s, S),
            r.transitionEnd(s, S)), !1;
    if (l.cssMode) {
        const w = r.isHorizontal(),
            y = f ? m : -m;
        if (t === 0) {
            const L = r.virtual && r.params.virtual.enabled;
            L && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), p[w ? "scrollLeft" : "scrollTop"] = y, L && requestAnimationFrame(
        () => {
                r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1
            })
        } else {
            if (!r.support.smoothScroll) return ae({
                swiper: r,
                targetPosition: y,
                side: w ? "left" : "top"
            }), !0;
            p.scrollTo({
                [w ? "left" : "top"]: y,
                behavior: "smooth"
            })
        }
        return !0
    }
    return r.setTransition(t), r.setTranslate(m), r.updateActiveIndex(o), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(s,
        S), t === 0 ? r.transitionEnd(s, S) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd =
        function(y) {
            !r || r.destroyed || y.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r
                .$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null,
                delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, S))
        }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd",
        r.onSlideToWrapperTransitionEnd)), !0
}

function zt(e = 0, t = this.params.speed, s = !0, i) {
    if (typeof e == "string") {
        const o = parseInt(e, 10);
        if (!isFinite(o)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
        e = o
    }
    const n = this;
    let r = e;
    return n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, s, i)
}

function At(e = this.params.speed, t = !0, s) {
    const i = this,
        {
            animating: n,
            enabled: r,
            params: o
        } = i;
    if (!r) return i;
    let l = o.slidesPerGroup;
    o.slidesPerView === "auto" && o.slidesPerGroup === 1 && o.slidesPerGroupAuto && (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const a = i.activeIndex < o.slidesPerGroupSkip ? 1 : l;
    if (o.loop) {
        if (n && o.loopPreventsSlide) return !1;
        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
    }
    return o.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + a, e, t, s)
}

function Dt(e = this.params.speed, t = !0, s) {
    const i = this,
        {
            params: n,
            animating: r,
            snapGrid: o,
            slidesGrid: l,
            rtlTranslate: a,
            enabled: d
        } = i;
    if (!d) return i;
    if (n.loop) {
        if (r && n.loopPreventsSlide) return !1;
        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
    }
    const c = a ? i.translate : -i.translate;

    function u(g) {
        return g < 0 ? -Math.floor(Math.abs(g)) : Math.floor(g)
    }
    const f = u(c),
        p = o.map(g => u(g));
    let v = o[p.indexOf(f) - 1];
    if (typeof v > "u" && n.cssMode) {
        let g;
        o.forEach((m, S) => {
            f >= m && (g = S)
        }), typeof g < "u" && (v = o[g > 0 ? g - 1 : g])
    }
    let T = 0;
    if (typeof v < "u" && (T = l.indexOf(v), T < 0 && (T = i.activeIndex - 1), n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (
            T = T - i.slidesPerViewDynamic("previous", !0) + 1, T = Math.max(T, 0))), n.rewind && i.isBeginning) {
        const g = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
        return i.slideTo(g, e, t, s)
    }
    return i.slideTo(T, e, t, s)
}

function Gt(e = this.params.speed, t = !0, s) {
    const i = this;
    return i.slideTo(i.activeIndex, e, t, s)
}

function Nt(e = this.params.speed, t = !0, s, i = .5) {
    const n = this;
    let r = n.activeIndex;
    const o = Math.min(n.params.slidesPerGroupSkip, r),
        l = o + Math.floor((r - o) / n.params.slidesPerGroup),
        a = n.rtlTranslate ? n.translate : -n.translate;
    if (a >= n.snapGrid[l]) {
        const d = n.snapGrid[l],
            c = n.snapGrid[l + 1];
        a - d > (c - d) * i && (r += n.params.slidesPerGroup)
    } else {
        const d = n.snapGrid[l - 1],
            c = n.snapGrid[l];
        a - d <= (c - d) * i && (r -= n.params.slidesPerGroup)
    }
    return r = Math.max(r, 0), r = Math.min(r, n.slidesGrid.length - 1), n.slideTo(r, e, t, s)
}

function Bt() {
    const e = this,
        {
            params: t,
            $wrapperEl: s
        } = e,
        i = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
    let n = e.clickedIndex,
        r;
    if (t.loop) {
        if (e.animating) return;
        r = parseInt(h(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? n < e.loopedSlides - i / 2 || n > e.slides.length - e
            .loopedSlides + i / 2 ? (e.loopFix(), n = s.children(`.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`).eq(0)
            .index(), q(() => {
                e.slideTo(n)
            })) : e.slideTo(n) : n > e.slides.length - i ? (e.loopFix(), n = s.children(
                `.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), q(() => {
                e.slideTo(n)
            })) : e.slideTo(n)
    } else e.slideTo(n)
}
const Vt = {
    slideTo: It,
    slideToLoop: zt,
    slideNext: At,
    slidePrev: Dt,
    slideReset: Gt,
    slideToClosest: Nt,
    slideToClickedSlide: Bt
};

function _t() {
    const e = this,
        t = $(),
        {
            params: s,
            $wrapperEl: i
        } = e,
        n = i.children().length > 0 ? h(i.children()[0].parentNode) : i;
    n.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
    let r = n.children(`.${s.slideClass}`);
    if (s.loopFillGroupWithBlank) {
        const a = s.slidesPerGroup - r.length % s.slidesPerGroup;
        if (a !== s.slidesPerGroup) {
            for (let d = 0; d < a; d += 1) {
                const c = h(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                n.append(c)
            }
            r = n.children(`.${s.slideClass}`)
        }
    }
    s.slidesPerView === "auto" && !s.loopedSlides && (s.loopedSlides = r.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)),
        e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > r.length && e.params.loopedSlidesLimit && (e.loopedSlides = r.length);
    const o = [],
        l = [];
    r.each((a, d) => {
        h(a).attr("data-swiper-slide-index", d)
    });
    for (let a = 0; a < e.loopedSlides; a += 1) {
        const d = a - Math.floor(a / r.length) * r.length;
        l.push(r.eq(d)[0]), o.unshift(r.eq(r.length - d - 1)[0])
    }
    for (let a = 0; a < l.length; a += 1) n.append(h(l[a].cloneNode(!0)).addClass(s.slideDuplicateClass));
    for (let a = o.length - 1; a >= 0; a -= 1) n.prepend(h(o[a].cloneNode(!0)).addClass(s.slideDuplicateClass))
}

function Ht() {
    const e = this;
    e.emit("beforeLoopFix");
    const {
        activeIndex: t,
        slides: s,
        loopedSlides: i,
        allowSlidePrev: n,
        allowSlideNext: r,
        snapGrid: o,
        rtlTranslate: l
    } = e;
    let a;
    e.allowSlidePrev = !0, e.allowSlideNext = !0;
    const c = -o[t] - e.getTranslate();
    t < i ? (a = s.length - i * 3 + t, a += i, e.slideTo(a, 0, !1, !0) && c !== 0 && e.setTranslate((l ? -e.translate : e.translate) - c)) : t >= s.length -
        i && (a = -s.length + t + i, a += i, e.slideTo(a, 0, !1, !0) && c !== 0 && e.setTranslate((l ? -e.translate : e.translate) - c)), e.allowSlidePrev = n,
        e.allowSlideNext = r, e.emit("loopFix")
}

function Ft() {
    const e = this,
        {
            $wrapperEl: t,
            params: s,
            slides: i
        } = e;
    t.children(`.${s.slideClass}.${s.slideDuplicateClass},.${s.slideClass}.${s.slideBlankClass}`).remove(), i.removeAttr("data-swiper-slide-index")
}
const Rt = {
    loopCreate: _t,
    loopFix: Ht,
    loopDestroy: Ft
};

function jt(e) {
    const t = this;
    if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
    const s = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
    s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab"
}

function Wt() {
    const e = this;
    e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style
        .cursor = "")
}
const qt = {
    setGrabCursor: jt,
    unsetGrabCursor: Wt
};

function Xt(e, t = this) {
    function s(i) {
        if (!i || i === $() || i === P()) return null;
        i.assignedSlot && (i = i.assignedSlot);
        const n = i.closest(e);
        return !n && !i.getRootNode ? null : n || s(i.getRootNode().host)
    }
    return s(t)
}

function Yt(e) {
    const t = this,
        s = $(),
        i = P(),
        n = t.touchEventsData,
        {
            params: r,
            touches: o,
            enabled: l
        } = t;
    if (!l || t.animating && r.preventInteractionOnTransition) return;
    !t.animating && r.cssMode && r.loop && t.loopFix();
    let a = e;
    a.originalEvent && (a = a.originalEvent);
    let d = h(a.target);
    if (r.touchEventsTarget === "wrapper" && !d.closest(t.wrapperEl).length || (n.isTouchEvent = a.type === "touchstart", !n.isTouchEvent && "which" in a && a
            .which === 3) || !n.isTouchEvent && "button" in a && a.button > 0 || n.isTouched && n.isMoved) return;
    const c = !!r.noSwipingClass && r.noSwipingClass !== "",
        u = e.composedPath ? e.composedPath() : e.path;
    c && a.target && a.target.shadowRoot && u && (d = h(u[0]));
    const f = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
        p = !!(a.target && a.target.shadowRoot);
    if (r.noSwiping && (p ? Xt(f, d[0]) : d.closest(f)[0])) {
        t.allowClick = !0;
        return
    }
    if (r.swipeHandler && !d.closest(r.swipeHandler)[0]) return;
    o.currentX = a.type === "touchstart" ? a.targetTouches[0].pageX : a.pageX, o.currentY = a.type === "touchstart" ? a.targetTouches[0].pageY : a.pageY;
    const v = o.currentX,
        T = o.currentY,
        g = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        m = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
    if (g && (v <= m || v >= i.innerWidth - m))
        if (g === "prevent") e.preventDefault();
        else return;
    if (Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }), o.startX = v, o.startY = T, n.touchStartTime = A(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, r.threshold > 0 && (n
            .allowThresholdMove = !1), a.type !== "touchstart") {
        let S = !0;
        d.is(n.focusableElements) && (S = !1, d[0].nodeName === "SELECT" && (n.isTouched = !1)), s.activeElement && h(s.activeElement).is(n
            .focusableElements) && s.activeElement !== d[0] && s.activeElement.blur();
        const w = S && t.allowTouchMove && r.touchStartPreventDefault;
        (r.touchStartForcePreventDefault || w) && !d[0].isContentEditable && a.preventDefault()
    }
    t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !r.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", a)
}

function Ut(e) {
    const t = $(),
        s = this,
        i = s.touchEventsData,
        {
            params: n,
            touches: r,
            rtlTranslate: o,
            enabled: l
        } = s;
    if (!l) return;
    let a = e;
    if (a.originalEvent && (a = a.originalEvent), !i.isTouched) {
        i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", a);
        return
    }
    if (i.isTouchEvent && a.type !== "touchmove") return;
    const d = a.type === "touchmove" && a.targetTouches && (a.targetTouches[0] || a.changedTouches[0]),
        c = a.type === "touchmove" ? d.pageX : a.pageX,
        u = a.type === "touchmove" ? d.pageY : a.pageY;
    if (a.preventedByNestedSwiper) {
        r.startX = c, r.startY = u;
        return
    }
    if (!s.allowTouchMove) {
        h(a.target).is(i.focusableElements) || (s.allowClick = !1), i.isTouched && (Object.assign(r, {
            startX: c,
            startY: u,
            currentX: c,
            currentY: u
        }), i.touchStartTime = A());
        return
    }
    if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop) {
        if (s.isVertical()) {
            if (u < r.startY && s.translate <= s.maxTranslate() || u > r.startY && s.translate >= s.minTranslate()) {
                i.isTouched = !1, i.isMoved = !1;
                return
            }
        } else if (c < r.startX && s.translate <= s.maxTranslate() || c > r.startX && s.translate >= s.minTranslate()) return
    }
    if (i.isTouchEvent && t.activeElement && a.target === t.activeElement && h(a.target).is(i.focusableElements)) {
        i.isMoved = !0, s.allowClick = !1;
        return
    }
    if (i.allowTouchCallbacks && s.emit("touchMove", a), a.targetTouches && a.targetTouches.length > 1) return;
    r.currentX = c, r.currentY = u;
    const f = r.currentX - r.startX,
        p = r.currentY - r.startY;
    if (s.params.threshold && Math.sqrt(f ** 2 + p ** 2) < s.params.threshold) return;
    if (typeof i.isScrolling > "u") {
        let m;
        s.isHorizontal() && r.currentY === r.startY || s.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : f * f + p * p >= 25 && (m = Math.atan2(
            Math.abs(p), Math.abs(f)) * 180 / Math.PI, i.isScrolling = s.isHorizontal() ? m > n.touchAngle : 90 - m > n.touchAngle)
    }
    if (i.isScrolling && s.emit("touchMoveOpposite", a), typeof i.startMoving > "u" && (r.currentX !== r.startX || r.currentY !== r.startY) && (i
            .startMoving = !0), i.isScrolling) {
        i.isTouched = !1;
        return
    }
    if (!i.startMoving) return;
    s.allowClick = !1, !n.cssMode && a.cancelable && a.preventDefault(), n.touchMoveStopPropagation && !n.nested && a.stopPropagation(), i.isMoved || (n.loop &&
        !n.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger(
            "webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, n.grabCursor && (s.allowSlideNext === !0 || s.allowSlidePrev === !0) && s
        .setGrabCursor(!0), s.emit("sliderFirstMove", a)), s.emit("sliderMove", a), i.isMoved = !0;
    let v = s.isHorizontal() ? f : p;
    r.diff = v, v *= n.touchRatio, o && (v = -v), s.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
    let T = !0,
        g = n.resistanceRatio;
    if (n.touchReleaseOnEdges && (g = 0), v > 0 && i.currentTranslate > s.minTranslate() ? (T = !1, n.resistance && (i.currentTranslate = s.minTranslate() - 1 +
            (-s.minTranslate() + i.startTranslate + v) ** g)) : v < 0 && i.currentTranslate < s.maxTranslate() && (T = !1, n.resistance && (i.currentTranslate =
            s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** g)), T && (a.preventedByNestedSwiper = !0), !s.allowSlideNext && s
        .swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && s
        .swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && !s
        .allowSlideNext && (i.currentTranslate = i.startTranslate), n.threshold > 0)
        if (Math.abs(v) > n.threshold || i.allowThresholdMove) {
            if (!i.allowThresholdMove) {
                i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, r.diff = s.isHorizontal() ? r
                    .currentX - r.startX : r.currentY - r.startY;
                return
            }
        } else {
            i.currentTranslate = i.startTranslate;
            return
        }! n.followFinger || n.cssMode || ((n.freeMode && n.freeMode.enabled && s.freeMode || n.watchSlidesProgress) && (s.updateActiveIndex(), s
            .updateSlidesClasses()), s.params.freeMode && n.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i
        .currentTranslate), s.setTranslate(i.currentTranslate))
}

function Kt(e) {
    const t = this,
        s = t.touchEventsData,
        {
            params: i,
            touches: n,
            rtlTranslate: r,
            slidesGrid: o,
            enabled: l
        } = t;
    if (!l) return;
    let a = e;
    if (a.originalEvent && (a = a.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", a), s.allowTouchCallbacks = !1, !s.isTouched) {
        s.isMoved && i.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, s.startMoving = !1;
        return
    }
    i.grabCursor && s.isMoved && s.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
    const d = A(),
        c = d - s.touchStartTime;
    if (t.allowClick) {
        const S = a.path || a.composedPath && a.composedPath();
        t.updateClickedSlide(S && S[0] || a.target), t.emit("tap click", a), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", a)
    }
    if (s.lastClickTime = A(), q(() => {
            t.destroyed || (t.allowClick = !0)
        }), !s.isTouched || !s.isMoved || !t.swipeDirection || n.diff === 0 || s.currentTranslate === s.startTranslate) {
        s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
        return
    }
    s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
    let u;
    if (i.followFinger ? u = r ? t.translate : -t.translate : u = -s.currentTranslate, i.cssMode) return;
    if (t.params.freeMode && i.freeMode.enabled) {
        t.freeMode.onTouchEnd({
            currentPos: u
        });
        return
    }
    let f = 0,
        p = t.slidesSizesGrid[0];
    for (let S = 0; S < o.length; S += S < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
        const w = S < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        typeof o[S + w] < "u" ? u >= o[S] && u < o[S + w] && (f = S, p = o[S + w] - o[S]) : u >= o[S] && (f = S, p = o[o.length - 1] - o[o.length - 2])
    }
    let v = null,
        T = null;
    i.rewind && (t.isBeginning ? T = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd &&
        (v = 0));
    const g = (u - o[f]) / p,
        m = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    if (c > i.longSwipesMs) {
        if (!i.longSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.swipeDirection === "next" && (g >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? v : f + m) : t.slideTo(f)), t.swipeDirection === "prev" && (g >
            1 - i.longSwipesRatio ? t.slideTo(f + m) : T !== null && g < 0 && Math.abs(g) > i.longSwipesRatio ? t.slideTo(T) : t.slideTo(f))
    } else {
        if (!i.shortSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.navigation && (a.target === t.navigation.nextEl || a.target === t.navigation.prevEl) ? a.target === t.navigation.nextEl ? t.slideTo(f + m) : t
            .slideTo(f) : (t.swipeDirection === "next" && t.slideTo(v !== null ? v : f + m), t.swipeDirection === "prev" && t.slideTo(T !== null ? T : f))
    }
}

function ee() {
    const e = this,
        {
            params: t,
            el: s
        } = e;
    if (s && s.offsetWidth === 0) return;
    t.breakpoints && e.setBreakpoint();
    const {
        allowSlideNext: i,
        allowSlidePrev: n,
        snapGrid: r
    } = e;
    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), (t.slidesPerView === "auto" || t.slidesPerView >
        1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e
        .autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = n, e.allowSlideNext = i, e.params.watchOverflow && r !== e
        .snapGrid && e.checkOverflow()
}

function Jt(e) {
    const t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e
        .stopImmediatePropagation())))
}

function Qt() {
    const e = this,
        {
            wrapperEl: t,
            rtlTranslate: s,
            enabled: i
        } = e;
    if (!i) return;
    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, e.translate === 0 && (e.translate = 0), e
        .updateActiveIndex(), e.updateSlidesClasses();
    let n;
    const r = e.maxTranslate() - e.minTranslate();
    r === 0 ? n = 0 : n = (e.translate - e.minTranslate()) / r, n !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e
        .translate, !1)
}
let te = !1;

function Zt() {}
const de = (e, t) => {
    const s = $(),
        {
            params: i,
            touchEvents: n,
            el: r,
            wrapperEl: o,
            device: l,
            support: a
        } = e,
        d = !!i.nested,
        c = t === "on" ? "addEventListener" : "removeEventListener",
        u = t;
    if (!a.touch) r[c](n.start, e.onTouchStart, !1), s[c](n.move, e.onTouchMove, d), s[c](n.end, e.onTouchEnd, !1);
    else {
        const f = n.start === "touchstart" && a.passiveListener && i.passiveListeners ? {
            passive: !0,
            capture: !1
        } : !1;
        r[c](n.start, e.onTouchStart, f), r[c](n.move, e.onTouchMove, a.passiveListener ? {
            passive: !1,
            capture: d
        } : d), r[c](n.end, e.onTouchEnd, f), n.cancel && r[c](n.cancel, e.onTouchEnd, f)
    }(i.preventClicks || i.preventClicksPropagation) && r[c]("click", e.onClick, !0), i.cssMode && o[c]("scroll", e.onScroll), i.updateOnWindowResize ? e[u]
        (l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ee, !0) : e[u]("observerUpdate", ee, !0)
};

function es() {
    const e = this,
        t = $(),
        {
            params: s,
            support: i
        } = e;
    e.onTouchStart = Yt.bind(e), e.onTouchMove = Ut.bind(e), e.onTouchEnd = Kt.bind(e), s.cssMode && (e.onScroll = Qt.bind(e)), e.onClick = Jt.bind(e), i
        .touch && !te && (t.addEventListener("touchstart", Zt), te = !0), de(e, "on")
}

function ts() {
    de(this, "off")
}
const ss = {
        attachEvents: es,
        detachEvents: ts
    },
    se = (e, t) => e.grid && t.grid && t.grid.rows > 1;

function is() {
    const e = this,
        {
            activeIndex: t,
            initialized: s,
            loopedSlides: i = 0,
            params: n,
            $el: r
        } = e,
        o = n.breakpoints;
    if (!o || o && Object.keys(o).length === 0) return;
    const l = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
    if (!l || e.currentBreakpoint === l) return;
    const d = (l in o ? o[l] : void 0) || e.originalParams,
        c = se(e, n),
        u = se(e, d),
        f = n.enabled;
    c && !u ? (r.removeClass(`${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`), e.emitContainerClasses()) : !c && u && (r.addClass(
        `${n.containerModifierClass}grid`), (d.grid.fill && d.grid.fill === "column" || !d.grid.fill && n.grid.fill === "column") && r.addClass(
        `${n.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(g => {
        const m = n[g] && n[g].enabled,
            S = d[g] && d[g].enabled;
        m && !S && e[g].disable(), !m && S && e[g].enable()
    });
    const p = d.direction && d.direction !== n.direction,
        v = n.loop && (d.slidesPerView !== n.slidesPerView || p);
    p && s && e.changeDirection(), O(e.params, d);
    const T = e.params.enabled;
    Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev
    }), f && !T ? e.disable() : !f && T && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", d), v && s && (e.loopDestroy(), e.loopCreate(),
        e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", d)
}

function ns(e, t = "window", s) {
    if (!e || t === "container" && !s) return;
    let i = !1;
    const n = P(),
        r = t === "window" ? n.innerHeight : s.clientHeight,
        o = Object.keys(e).map(l => {
            if (typeof l == "string" && l.indexOf("@") === 0) {
                const a = parseFloat(l.substr(1));
                return {
                    value: r * a,
                    point: l
                }
            }
            return {
                value: l,
                point: l
            }
        });
    o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
    for (let l = 0; l < o.length; l += 1) {
        const {
            point: a,
            value: d
        } = o[l];
        t === "window" ? n.matchMedia(`(min-width: ${d}px)`).matches && (i = a) : d <= s.clientWidth && (i = a)
    }
    return i || "max"
}
const rs = {
    setBreakpoint: is,
    getBreakpoint: ns
};

function as(e, t) {
    const s = [];
    return e.forEach(i => {
        typeof i == "object" ? Object.keys(i).forEach(n => {
            i[n] && s.push(t + n)
        }) : typeof i == "string" && s.push(t + i)
    }), s
}

function os() {
    const e = this,
        {
            classNames: t,
            params: s,
            rtl: i,
            $el: n,
            device: r,
            support: o
        } = e,
        l = as(["initialized", s.direction, {
            "pointer-events": !o.touch
        }, {
            "free-mode": e.params.freeMode && s.freeMode.enabled
        }, {
            autoheight: s.autoHeight
        }, {
            rtl: i
        }, {
            grid: s.grid && s.grid.rows > 1
        }, {
            "grid-column": s.grid && s.grid.rows > 1 && s.grid.fill === "column"
        }, {
            android: r.android
        }, {
            ios: r.ios
        }, {
            "css-mode": s.cssMode
        }, {
            centered: s.cssMode && s.centeredSlides
        }, {
            "watch-progress": s.watchSlidesProgress
        }], s.containerModifierClass);
    t.push(...l), n.addClass([...t].join(" ")), e.emitContainerClasses()
}

function ls() {
    const e = this,
        {
            $el: t,
            classNames: s
        } = e;
    t.removeClass(s.join(" ")), e.emitContainerClasses()
}
const ds = {
    addClasses: os,
    removeClasses: ls
};

function cs(e, t, s, i, n, r) {
    const o = P();
    let l;

    function a() {
        r && r()
    }!h(e).parent("picture")[0] && (!e.complete || !n) && t ? (l = new o.Image, l.onload = a, l.onerror = a, i && (l.sizes = i), s && (l.srcset = s), t && (l
        .src = t)) : a()
}

function fs() {
    const e = this;
    e.imagesToLoad = e.$el.find("img");

    function t() {
        typeof e > "u" || e === null || !e || e.destroyed || (e.imagesLoaded !== void 0 && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e
            .params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
    }
    for (let s = 0; s < e.imagesToLoad.length; s += 1) {
        const i = e.imagesToLoad[s];
        e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
    }
}
const us = {
    loadImage: cs,
    preloadImages: fs
};

function ps() {
    const e = this,
        {
            isLocked: t,
            params: s
        } = e,
        {
            slidesOffsetBefore: i
        } = s;
    if (i) {
        const n = e.slides.length - 1,
            r = e.slidesGrid[n] + e.slidesSizesGrid[n] + i * 2;
        e.isLocked = e.size > r
    } else e.isLocked = e.snapGrid.length === 1;
    s.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked), s.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e
        .isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
}
const hs = {
        checkOverflow: ps
    },
    ie = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopedSlidesLimit: !0,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

function ms(e, t) {
    return function(i = {}) {
        const n = Object.keys(i)[0],
            r = i[n];
        if (typeof r != "object" || r === null) {
            O(t, i);
            return
        }
        if (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 && e[n] === !0 && (e[n] = {
                auto: !0
            }), !(n in e && "enabled" in r)) {
            O(t, i);
            return
        }
        e[n] === !0 && (e[n] = {
            enabled: !0
        }), typeof e[n] == "object" && !("enabled" in e[n]) && (e[n].enabled = !0), e[n] || (e[n] = {
            enabled: !1
        }), O(t, i)
    }
}
const j = {
        eventsEmitter: ft,
        update: bt,
        translate: Pt,
        transition: $t,
        slide: Vt,
        loop: Rt,
        grabCursor: qt,
        events: ss,
        breakpoints: rs,
        checkOverflow: hs,
        classes: ds,
        images: us
    },
    W = {};
class I {
    constructor(...t) {
        let s, i;
        if (t.length === 1 && t[0].constructor && Object.prototype.toString.call(t[0]).slice(8, -1) === "Object" ? i = t[0] : [s, i] = t, i || (i = {}), i =
            O({}, i), s && !i.el && (i.el = s), i.el && h(i.el).length > 1) {
            const l = [];
            return h(i.el).each(a => {
                const d = O({}, i, {
                    el: a
                });
                l.push(new I(d))
            }), l
        }
        const n = this;
        n.__swiper__ = !0, n.support = oe(), n.device = at({
                userAgent: i.userAgent
            }), n.browser = lt(), n.eventsListeners = {}, n.eventsAnyListeners = [], n.modules = [...n.__modules__], i.modules && Array.isArray(i
            .modules) && n.modules.push(...i.modules);
        const r = {};
        n.modules.forEach(l => {
            l({
                swiper: n,
                extendParams: ms(i, r),
                on: n.on.bind(n),
                once: n.once.bind(n),
                off: n.off.bind(n),
                emit: n.emit.bind(n)
            })
        });
        const o = O({}, ie, r);
        return n.params = O({}, o, W, i), n.originalParams = O({}, n.params), n.passedParams = O({}, i), n.params && n.params.on && Object.keys(n.params.on)
            .forEach(l => {
                n.on(l, n.params.on[l])
            }), n.params && n.params.onAny && n.onAny(n.params.onAny), n.$ = h, Object.assign(n, {
                enabled: n.params.enabled,
                el: s,
                classNames: [],
                slides: h(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal() {
                    return n.params.direction === "horizontal"
                },
                isVertical() {
                    return n.params.direction === "vertical"
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: n.params.allowSlideNext,
                allowSlidePrev: n.params.allowSlidePrev,
                touchEvents: function() {
                    const a = ["touchstart", "touchmove", "touchend", "touchcancel"],
                        d = ["pointerdown", "pointermove", "pointerup"];
                    return n.touchEventsTouch = {
                        start: a[0],
                        move: a[1],
                        end: a[2],
                        cancel: a[3]
                    }, n.touchEventsDesktop = {
                        start: d[0],
                        move: d[1],
                        end: d[2]
                    }, n.support.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: n.params.focusableElements,
                    lastClickTime: A(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: n.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }), n.emit("_swiper"), n.params.init && n.init(), n
    }
    enable() {
        const t = this;
        t.enabled || (t.enabled = !0, t.params.grabCursor && t.setGrabCursor(), t.emit("enable"))
    }
    disable() {
        const t = this;
        t.enabled && (t.enabled = !1, t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"))
    }
    setProgress(t, s) {
        const i = this;
        t = Math.min(Math.max(t, 0), 1);
        const n = i.minTranslate(),
            o = (i.maxTranslate() - n) * t + n;
        i.translateTo(o, typeof s > "u" ? 0 : s), i.updateActiveIndex(), i.updateSlidesClasses()
    }
    emitContainerClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el) return;
        const s = t.el.className.split(" ").filter(i => i.indexOf("swiper") === 0 || i.indexOf(t.params.containerModifierClass) === 0);
        t.emit("_containerClasses", s.join(" "))
    }
    getSlideClasses(t) {
        const s = this;
        return s.destroyed ? "" : t.className.split(" ").filter(i => i.indexOf("swiper-slide") === 0 || i.indexOf(s.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el) return;
        const s = [];
        t.slides.each(i => {
            const n = t.getSlideClasses(i);
            s.push({
                slideEl: i,
                classNames: n
            }), t.emit("_slideClass", i, n)
        }), t.emit("_slideClasses", s)
    }
    slidesPerViewDynamic(t = "current", s = !1) {
        const i = this,
            {
                params: n,
                slides: r,
                slidesGrid: o,
                slidesSizesGrid: l,
                size: a,
                activeIndex: d
            } = i;
        let c = 1;
        if (n.centeredSlides) {
            let u = r[d].swiperSlideSize,
                f;
            for (let p = d + 1; p < r.length; p += 1) r[p] && !f && (u += r[p].swiperSlideSize, c += 1, u > a && (f = !0));
            for (let p = d - 1; p >= 0; p -= 1) r[p] && !f && (u += r[p].swiperSlideSize, c += 1, u > a && (f = !0))
        } else if (t === "current")
            for (let u = d + 1; u < r.length; u += 1)(s ? o[u] + l[u] - o[d] < a : o[u] - o[d] < a) && (c += 1);
        else
            for (let u = d - 1; u >= 0; u -= 1) o[d] - o[u] < a && (c += 1);
        return c
    }
    update() {
        const t = this;
        if (!t || t.destroyed) return;
        const {
            snapGrid: s,
            params: i
        } = t;
        i.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();

        function n() {
            const o = t.rtlTranslate ? t.translate * -1 : t.translate,
                l = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate());
            t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses()
        }
        let r;
        t.params.freeMode && t.params.freeMode.enabled ? (n(), t.params.autoHeight && t.updateAutoHeight()) : ((t.params.slidesPerView === "auto" || t
            .params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? r = t.slideTo(t.slides.length - 1, 0, !1, !0) : r = t.slideTo(t
            .activeIndex, 0, !1, !0), r || n()), i.watchOverflow && s !== t.snapGrid && t.checkOverflow(), t.emit("update")
    }
    changeDirection(t, s = !0) {
        const i = this,
            n = i.params.direction;
        return t || (t = n === "horizontal" ? "vertical" : "horizontal"), t === n || t !== "horizontal" && t !== "vertical" || (i.$el.removeClass(
                `${i.params.containerModifierClass}${n}`).addClass(`${i.params.containerModifierClass}${t}`), i.emitContainerClasses(), i.params
            .direction = t, i.slides.each(r => {
                t === "vertical" ? r.style.width = "" : r.style.height = ""
            }), i.emit("changeDirection"), s && i.update()), i
    }
    changeLanguageDirection(t) {
        const s = this;
        s.rtl && t === "rtl" || !s.rtl && t === "ltr" || (s.rtl = t === "rtl", s.rtlTranslate = s.params.direction === "horizontal" && s.rtl, s.rtl ? (s.$el
            .addClass(`${s.params.containerModifierClass}rtl`), s.el.dir = "rtl") : (s.$el.removeClass(`${s.params.containerModifierClass}rtl`), s
            .el.dir = "ltr"), s.update())
    }
    mount(t) {
        const s = this;
        if (s.mounted) return !0;
        const i = h(t || s.params.el);
        if (t = i[0], !t) return !1;
        t.swiper = s;
        const n = () => `.${(s.params.wrapperClass||"").trim().split(" ").join(".")}`;
        let o = (() => {
            if (t && t.shadowRoot && t.shadowRoot.querySelector) {
                const l = h(t.shadowRoot.querySelector(n()));
                return l.children = a => i.children(a), l
            }
            return i.children ? i.children(n()) : h(i).children(n())
        })();
        if (o.length === 0 && s.params.createElements) {
            const a = $().createElement("div");
            o = h(a), a.className = s.params.wrapperClass, i.append(a), i.children(`.${s.params.slideClass}`).each(d => {
                o.append(d)
            })
        }
        return Object.assign(s, {
            $el: i,
            el: t,
            $wrapperEl: o,
            wrapperEl: o[0],
            mounted: !0,
            rtl: t.dir.toLowerCase() === "rtl" || i.css("direction") === "rtl",
            rtlTranslate: s.params.direction === "horizontal" && (t.dir.toLowerCase() === "rtl" || i.css("direction") === "rtl"),
            wrongRTL: o.css("display") === "-webkit-box"
        }), !0
    }
    init(t) {
        const s = this;
        return s.initialized || s.mount(t) === !1 || (s.emit("beforeInit"), s.params.breakpoints && s.setBreakpoint(), s.addClasses(), s.params.loop && s
            .loopCreate(), s.updateSize(), s.updateSlides(), s.params.watchOverflow && s.checkOverflow(), s.params.grabCursor && s.enabled && s
            .setGrabCursor(), s.params.preloadImages && s.preloadImages(), s.params.loop ? s.slideTo(s.params.initialSlide + s.loopedSlides, 0, s.params
                .runCallbacksOnInit, !1, !0) : s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit, !1, !0), s.attachEvents(), s
            .initialized = !0, s.emit("init"), s.emit("afterInit")), s
    }
    destroy(t = !0, s = !0) {
        const i = this,
            {
                params: n,
                $el: r,
                $wrapperEl: o,
                slides: l
            } = i;
        return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), s && (i
            .removeClasses(), r.removeAttr("style"), o.removeAttr("style"), l && l.length && l.removeClass([n.slideVisibleClass, n.slideActiveClass,
                n.slideNextClass, n.slidePrevClass
            ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(
        a => {
            i.off(a)
        }), t !== !1 && (i.$el[0].swiper = null, et(i)), i.destroyed = !0), null
    }
    static extendDefaults(t) {
        O(W, t)
    }
    static get extendedDefaults() {
        return W
    }
    static get defaults() {
        return ie
    }
    static installModule(t) {
        I.prototype.__modules__ || (I.prototype.__modules__ = []);
        const s = I.prototype.__modules__;
        typeof t == "function" && s.indexOf(t) < 0 && s.push(t)
    }
    static use(t) {
        return Array.isArray(t) ? (t.forEach(s => I.installModule(s)), I) : (I.installModule(t), I)
    }
}
Object.keys(j).forEach(e => {
    Object.keys(j[e]).forEach(t => {
        I.prototype[t] = j[e][t]
    })
});
I.use([dt, ct]);

function gs({
    swiper: e,
    extendParams: t,
    emit: s,
    once: i
}) {
    t({
        freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: .02
        }
    });

    function n() {
        const l = e.getTranslate();
        e.setTranslate(l), e.setTransition(0), e.touchEventsData.velocities.length = 0, e.freeMode.onTouchEnd({
            currentPos: e.rtl ? e.translate : -e.translate
        })
    }

    function r() {
        const {
            touchEventsData: l,
            touches: a
        } = e;
        l.velocities.length === 0 && l.velocities.push({
            position: a[e.isHorizontal() ? "startX" : "startY"],
            time: l.touchStartTime
        }), l.velocities.push({
            position: a[e.isHorizontal() ? "currentX" : "currentY"],
            time: A()
        })
    }

    function o({
        currentPos: l
    }) {
        const {
            params: a,
            $wrapperEl: d,
            rtlTranslate: c,
            snapGrid: u,
            touchEventsData: f
        } = e, v = A() - f.touchStartTime;
        if (l < -e.minTranslate()) {
            e.slideTo(e.activeIndex);
            return
        }
        if (l > -e.maxTranslate()) {
            e.slides.length < u.length ? e.slideTo(u.length - 1) : e.slideTo(e.slides.length - 1);
            return
        }
        if (a.freeMode.momentum) {
            if (f.velocities.length > 1) {
                const C = f.velocities.pop(),
                    k = f.velocities.pop(),
                    M = C.position - k.position,
                    N = C.time - k.time;
                e.velocity = M / N, e.velocity /= 2, Math.abs(e.velocity) < a.freeMode.minimumVelocity && (e.velocity = 0), (N > 150 || A() - C.time > 300) && (
                    e.velocity = 0)
            } else e.velocity = 0;
            e.velocity *= a.freeMode.momentumVelocityRatio, f.velocities.length = 0;
            let T = 1e3 * a.freeMode.momentumRatio;
            const g = e.velocity * T;
            let m = e.translate + g;
            c && (m = -m);
            let S = !1,
                w;
            const y = Math.abs(e.velocity) * 20 * a.freeMode.momentumBounceRatio;
            let L;
            if (m < e.maxTranslate()) a.freeMode.momentumBounce ? (m + e.maxTranslate() < -y && (m = e.maxTranslate() - y), w = e.maxTranslate(), S = !0, f
                .allowMomentumBounce = !0) : m = e.maxTranslate(), a.loop && a.centeredSlides && (L = !0);
            else if (m > e.minTranslate()) a.freeMode.momentumBounce ? (m - e.minTranslate() > y && (m = e.minTranslate() + y), w = e.minTranslate(), S = !0, f
                .allowMomentumBounce = !0) : m = e.minTranslate(), a.loop && a.centeredSlides && (L = !0);
            else if (a.freeMode.sticky) {
                let C;
                for (let k = 0; k < u.length; k += 1)
                    if (u[k] > -m) {
                        C = k;
                        break
                    } Math.abs(u[C] - m) < Math.abs(u[C - 1] - m) || e.swipeDirection === "next" ? m = u[C] : m = u[C - 1], m = -m
            }
            if (L && i("transitionEnd", () => {
                    e.loopFix()
                }), e.velocity !== 0) {
                if (c ? T = Math.abs((-m - e.translate) / e.velocity) : T = Math.abs((m - e.translate) / e.velocity), a.freeMode.sticky) {
                    const C = Math.abs((c ? -m : m) - e.translate),
                        k = e.slidesSizesGrid[e.activeIndex];
                    C < k ? T = a.speed : C < 2 * k ? T = a.speed * 1.5 : T = a.speed * 2.5
                }
            } else if (a.freeMode.sticky) {
                e.slideToClosest();
                return
            }
            a.freeMode.momentumBounce && S ? (e.updateProgress(w), e.setTransition(T), e.setTranslate(m), e.transitionStart(!0, e.swipeDirection), e
                .animating = !0, d.transitionEnd(() => {
                    !e || e.destroyed || !f.allowMomentumBounce || (s("momentumBounce"), e.setTransition(a.speed), setTimeout(() => {
                        e.setTranslate(w), d.transitionEnd(() => {
                            !e || e.destroyed || e.transitionEnd()
                        })
                    }, 0))
                })) : e.velocity ? (s("_freeModeNoMomentumRelease"), e.updateProgress(m), e.setTransition(T), e.setTranslate(m), e.transitionStart(!0, e
                .swipeDirection), e.animating || (e.animating = !0, d.transitionEnd(() => {
                !e || e.destroyed || e.transitionEnd()
            }))) : e.updateProgress(m), e.updateActiveIndex(), e.updateSlidesClasses()
        } else if (a.freeMode.sticky) {
            e.slideToClosest();
            return
        } else a.freeMode && s("_freeModeNoMomentumRelease");
        (!a.freeMode.momentum || v >= a.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses())
    }
    Object.assign(e, {
        freeMode: {
            onTouchStart: n,
            onTouchMove: r,
            onTouchEnd: o
        }
    })
}
export {
    h as $, I as S, P as a, gs as f, $ as g, B as i
};