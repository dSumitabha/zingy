var dt = Object.defineProperty;
var pt = (c, n, i) => n in c ? dt(c, n, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: i
}) : c[n] = i;
var y2 = (c, n, i) => (pt(c, typeof n != "symbol" ? n + "" : n, i), i);
(function () {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) h(l);
    new MutationObserver(l => {
        for (const V of l)
            if (V.type === "childList")
                for (const Z of V.addedNodes) Z.tagName === "LINK" && Z.rel === "modulepreload" && h(Z)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function i(l) {
        const V = {};
        return l.integrity && (V.integrity = l.integrity), l.referrerPolicy && (V.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? V.credentials = "include" : l.crossOrigin === "anonymous" ? V.credentials = "omit" : V.credentials = "same-origin", V
    }

    function h(l) {
        if (l.ep) return;
        l.ep = !0;
        const V = i(l);
        fetch(l.href, V)
    }
})();
class lt {
    constructor() {
        y2(this, "theme", "light");
        y2(this, "onThemeChange", () => {
            this.theme === "dark" ? this.html.classList.add("dark") : this.html.classList.remove("dark"), this.lightTheme && this.darkTheme && (this.theme === "light" ? (this.lightTheme.classList.remove("hidden"), this.darkTheme.classList.add("hidden")) : (this.darkTheme.classList.remove("hidden"), this.lightTheme.classList.add("hidden"))), localStorage.setItem("__FOOD_CONFIG__", JSON.stringify({
                theme: this.theme
            }))
        })
    }
    init() {
        this.html = document.getElementsByTagName("html")[0];
        const n = localStorage.getItem("__FOOD_CONFIG__");
        if (n) {
            const i = JSON.parse(n);
            this.theme = i.theme
        }
        this.theme === "dark" && this.html.classList.add("dark"), this.onThemeChange(), window.addEventListener("DOMContentLoaded", () => {
            this.after()
        })
    }
    after() {
        this.lightTheme = document.getElementById("light-theme"), this.darkTheme = document.getElementById("dark-theme"), this.lightTheme && this.darkTheme && (this.lightTheme.addEventListener("click", n => {
            this.theme = "dark", this.onThemeChange()
        }), this.darkTheme.addEventListener("click", n => {
            this.theme = "light", this.onThemeChange()
        })), this.onThemeChange()
    }
}
new lt().init();
const I2 = (c, n, i = []) => {
    const h = document.createElementNS("http://www.w3.org/2000/svg", c);
    return Object.keys(n).forEach(l => {
        h.setAttribute(l, String(n[l]))
    }), i.length && i.forEach(l => {
        const V = I2(...l);
        h.appendChild(V)
    }), h
};
var vt = ([c, n, i]) => I2(c, n, i);
const Mt = c => Array.from(c.attributes).reduce((n, i) => (n[i.name] = i.value, n), {}),
    yt = c => typeof c == "string" ? c : !c || !c.class ? "" : c.class && typeof c.class == "string" ? c.class.split(" ") : c.class && Array.isArray(c.class) ? c.class : "",
    gt = c => c.flatMap(yt).map(i => i.trim()).filter(Boolean).filter((i, h, l) => l.indexOf(i) === h).join(" "),
    ut = c => c.replace(/(\w)(\w*)(_|-|\s*)/g, (n, i, h) => i.toUpperCase() + h.toLowerCase()),
    R2 = (c, {
        nameAttr: n,
        icons: i,
        attrs: h
    }) => {
        var _;
        const l = c.getAttribute(n);
        if (l == null) return;
        const V = ut(l),
            Z = i[V];
        if (!Z) return console.warn(`${c.outerHTML} icon name was not found in the provided icons object.`);
        const b = Mt(c),
            [O, H, D] = Z,
            L = {
                ...H,
                "data-lucide": l,
                ...h,
                ...b
            },
            B = gt(["lucide", `lucide-${l}`, b, h]);
        B && Object.assign(L, {
            class: B
        });
        const z = vt([O, L, D]);
        return (_ = c.parentNode) == null ? void 0 : _.replaceChild(z, c)
    },
    t = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": 2,
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    },
    ft = ["svg", t, [
        ["circle", {
            cx: "16",
            cy: "4",
            r: "1"
        }],
        ["path", {
            d: "m18 19 1-7-6 1"
        }],
        ["path", {
            d: "m5 8 3-3 5.5 3-2.36 3.5"
        }],
        ["path", {
            d: "M4.24 14.5a5 5 0 0 0 6.88 6"
        }],
        ["path", {
            d: "M13.76 17.5a5 5 0 0 0-6.88-6"
        }]
    ]],
    xt = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M17 12h-2l-2 5-2-10-2 5H7"
        }]
    ]],
    mt = ["svg", t, [
        ["path", {
            d: "M22 12h-4l-3 9L9 3l-3 9H2"
        }]
    ]],
    wt = ["svg", t, [
        ["path", {
            d: "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
        }],
        ["path", {
            d: "M6 8h12"
        }],
        ["path", {
            d: "M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12"
        }],
        ["path", {
            d: "M6.6 15.6A2 2 0 1 0 10 17v-5"
        }]
    ]],
    bt = ["svg", t, [
        ["path", {
            d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
        }],
        ["polygon", {
            points: "12 15 17 21 7 21 12 15"
        }]
    ]],
    Ht = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "13",
            r: "8"
        }],
        ["path", {
            d: "M5 3 2 6"
        }],
        ["path", {
            d: "m22 6-3-3"
        }],
        ["path", {
            d: "M6.38 18.7 4 21"
        }],
        ["path", {
            d: "M17.64 18.67 20 21"
        }],
        ["path", {
            d: "m9 13 2 2 4-4"
        }]
    ]],
    Vt = ["svg", t, [
        ["path", {
            d: "M6.87 6.87a8 8 0 1 0 11.26 11.26"
        }],
        ["path", {
            d: "M19.9 14.25a8 8 0 0 0-9.15-9.15"
        }],
        ["path", {
            d: "m22 6-3-3"
        }],
        ["path", {
            d: "M6.26 18.67 4 21"
        }],
        ["path", {
            d: "m2 2 20 20"
        }],
        ["path", {
            d: "M4 4 2 6"
        }]
    ]],
    Lt = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "13",
            r: "8"
        }],
        ["path", {
            d: "M12 9v4l2 2"
        }],
        ["path", {
            d: "M5 3 2 6"
        }],
        ["path", {
            d: "m22 6-3-3"
        }],
        ["path", {
            d: "M6.38 18.7 4 21"
        }],
        ["path", {
            d: "M17.64 18.67 20 21"
        }]
    ]],
    St = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "13",
            r: "8"
        }],
        ["path", {
            d: "M5 3 2 6"
        }],
        ["path", {
            d: "m22 6-3-3"
        }],
        ["path", {
            d: "M6.38 18.7 4 21"
        }],
        ["path", {
            d: "M17.64 18.67 20 21"
        }],
        ["path", {
            d: "M9 13h6"
        }]
    ]],
    At = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "13",
            r: "8"
        }],
        ["path", {
            d: "M5 3 2 6"
        }],
        ["path", {
            d: "m22 6-3-3"
        }],
        ["path", {
            d: "M6.38 18.7 4 21"
        }],
        ["path", {
            d: "M17.64 18.67 20 21"
        }],
        ["path", {
            d: "M12 10v6"
        }],
        ["path", {
            d: "M9 13h6"
        }]
    ]],
    Ct = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }],
        ["polyline", {
            points: "11 3 11 11 14 8 17 11 17 3"
        }]
    ]],
    Ot = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12"
        }],
        ["line", {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16"
        }]
    ]],
    Et = ["svg", t, [
        ["polygon", {
            points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12"
        }],
        ["line", {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16"
        }]
    ]],
    kt = ["svg", t, [
        ["path", {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
        }],
        ["path", {
            d: "M12 9v4"
        }],
        ["path", {
            d: "M12 17h.01"
        }]
    ]],
    Pt = ["svg", t, [
        ["path", {
            d: "M2 12h20"
        }],
        ["path", {
            d: "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"
        }],
        ["path", {
            d: "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"
        }],
        ["path", {
            d: "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"
        }],
        ["path", {
            d: "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"
        }]
    ]],
    Zt = ["svg", t, [
        ["path", {
            d: "M12 2v20"
        }],
        ["path", {
            d: "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"
        }],
        ["path", {
            d: "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"
        }],
        ["path", {
            d: "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"
        }],
        ["path", {
            d: "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"
        }]
    ]],
    Tt = ["svg", t, [
        ["line", {
            x1: "21",
            x2: "3",
            y1: "6",
            y2: "6"
        }],
        ["line", {
            x1: "17",
            x2: "7",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "19",
            x2: "5",
            y1: "18",
            y2: "18"
        }]
    ]],
    zt = ["svg", t, [
        ["rect", {
            width: "6",
            height: "16",
            x: "4",
            y: "2",
            rx: "2"
        }],
        ["rect", {
            width: "6",
            height: "9",
            x: "14",
            y: "9",
            rx: "2"
        }],
        ["path", {
            d: "M22 22H2"
        }]
    ]],
    Dt = ["svg", t, [
        ["rect", {
            width: "16",
            height: "6",
            x: "2",
            y: "4",
            rx: "2"
        }],
        ["rect", {
            width: "9",
            height: "6",
            x: "9",
            y: "14",
            rx: "2"
        }],
        ["path", {
            d: "M22 22V2"
        }]
    ]],
    _t = ["svg", t, [
        ["rect", {
            width: "6",
            height: "14",
            x: "4",
            y: "5",
            rx: "2"
        }],
        ["rect", {
            width: "6",
            height: "10",
            x: "14",
            y: "7",
            rx: "2"
        }],
        ["path", {
            d: "M17 22v-5"
        }],
        ["path", {
            d: "M17 7V2"
        }],
        ["path", {
            d: "M7 22v-3"
        }],
        ["path", {
            d: "M7 5V2"
        }]
    ]],
    Bt = ["svg", t, [
        ["rect", {
            width: "6",
            height: "14",
            x: "4",
            y: "5",
            rx: "2"
        }],
        ["rect", {
            width: "6",
            height: "10",
            x: "14",
            y: "7",
            rx: "2"
        }],
        ["path", {
            d: "M10 2v20"
        }],
        ["path", {
            d: "M20 2v20"
        }]
    ]],
    Rt = ["svg", t, [
        ["rect", {
            width: "6",
            height: "14",
            x: "4",
            y: "5",
            rx: "2"
        }],
        ["rect", {
            width: "6",
            height: "10",
            x: "14",
            y: "7",
            rx: "2"
        }],
        ["path", {
            d: "M4 2v20"
        }],
        ["path", {
            d: "M14 2v20"
        }]
    ]],
    Ft = ["svg", t, [
        ["rect", {
            width: "6",
            height: "14",
            x: "2",
            y: "5",
            rx: "2"
        }],
        ["rect", {
            width: "6",
            height: "10",
            x: "16",
            y: "7",
            rx: "2"
        }],
        ["path", {
            d: "M12 2v20"
        }]
    ]],
    jt = ["svg", t, [
        ["rect", {
            width: "6",
            height: "14",
            x: "2",
            y: "5",
            rx: "2"
        }],
        ["rect", {
            width: "6",
            height: "10",
            x: "12",
            y: "7",
            rx: "2"
        }],
        ["path", {
            d: "M22 2v20"
        }]
    ]],
    qt = ["svg", t, [
        ["rect", {
            width: "6",
            height: "14",
            x: "6",
            y: "5",
            rx: "2"
        }],
        ["rect", {
            width: "6",
            height: "10",
            x: "16",
            y: "7",
            rx: "2"
        }],
        ["path", {
            d: "M2 2v20"
        }]
    ]],
    Wt = ["svg", t, [
        ["rect", {
            width: "6",
            height: "10",
            x: "9",
            y: "7",
            rx: "2"
        }],
        ["path", {
            d: "M4 22V2"
        }],
        ["path", {
            d: "M20 22V2"
        }]
    ]],
    Nt = ["svg", t, [
        ["rect", {
            width: "6",
            height: "14",
            x: "3",
            y: "5",
            rx: "2"
        }],
        ["rect", {
            width: "6",
            height: "10",
            x: "15",
            y: "7",
            rx: "2"
        }],
        ["path", {
            d: "M3 2v20"
        }],
        ["path", {
            d: "M21 2v20"
        }]
    ]],
    It = ["svg", t, [
        ["line", {
            x1: "3",
            x2: "21",
            y1: "6",
            y2: "6"
        }],
        ["line", {
            x1: "3",
            x2: "21",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "3",
            x2: "21",
            y1: "18",
            y2: "18"
        }]
    ]],
    Ut = ["svg", t, [
        ["line", {
            x1: "21",
            x2: "3",
            y1: "6",
            y2: "6"
        }],
        ["line", {
            x1: "15",
            x2: "3",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "17",
            x2: "3",
            y1: "18",
            y2: "18"
        }]
    ]],
    Gt = ["svg", t, [
        ["line", {
            x1: "21",
            x2: "3",
            y1: "6",
            y2: "6"
        }],
        ["line", {
            x1: "21",
            x2: "9",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "21",
            x2: "7",
            y1: "18",
            y2: "18"
        }]
    ]],
    Xt = ["svg", t, [
        ["rect", {
            width: "6",
            height: "16",
            x: "4",
            y: "6",
            rx: "2"
        }],
        ["rect", {
            width: "6",
            height: "9",
            x: "14",
            y: "6",
            rx: "2"
        }],
        ["path", {
            d: "M22 2H2"
        }]
    ]],
    $t = ["svg", t, [
        ["rect", {
            width: "9",
            height: "6",
            x: "6",
            y: "14",
            rx: "2"
        }],
        ["rect", {
            width: "16",
            height: "6",
            x: "6",
            y: "4",
            rx: "2"
        }],
        ["path", {
            d: "M2 2v20"
        }]
    ]],
    Yt = ["svg", t, [
        ["rect", {
            width: "14",
            height: "6",
            x: "5",
            y: "14",
            rx: "2"
        }],
        ["rect", {
            width: "10",
            height: "6",
            x: "7",
            y: "4",
            rx: "2"
        }],
        ["path", {
            d: "M22 7h-5"
        }],
        ["path", {
            d: "M7 7H1"
        }],
        ["path", {
            d: "M22 17h-3"
        }],
        ["path", {
            d: "M5 17H2"
        }]
    ]],
    Kt = ["svg", t, [
        ["rect", {
            width: "14",
            height: "6",
            x: "5",
            y: "14",
            rx: "2"
        }],
        ["rect", {
            width: "10",
            height: "6",
            x: "7",
            y: "4",
            rx: "2"
        }],
        ["path", {
            d: "M2 20h20"
        }],
        ["path", {
            d: "M2 10h20"
        }]
    ]],
    Jt = ["svg", t, [
        ["rect", {
            width: "14",
            height: "6",
            x: "5",
            y: "14",
            rx: "2"
        }],
        ["rect", {
            width: "10",
            height: "6",
            x: "7",
            y: "4",
            rx: "2"
        }],
        ["path", {
            d: "M2 14h20"
        }],
        ["path", {
            d: "M2 4h20"
        }]
    ]],
    Qt = ["svg", t, [
        ["rect", {
            width: "14",
            height: "6",
            x: "5",
            y: "16",
            rx: "2"
        }],
        ["rect", {
            width: "10",
            height: "6",
            x: "7",
            y: "2",
            rx: "2"
        }],
        ["path", {
            d: "M2 12h20"
        }]
    ]],
    t0 = ["svg", t, [
        ["rect", {
            width: "14",
            height: "6",
            x: "5",
            y: "12",
            rx: "2"
        }],
        ["rect", {
            width: "10",
            height: "6",
            x: "7",
            y: "2",
            rx: "2"
        }],
        ["path", {
            d: "M2 22h20"
        }]
    ]],
    a0 = ["svg", t, [
        ["rect", {
            width: "14",
            height: "6",
            x: "5",
            y: "16",
            rx: "2"
        }],
        ["rect", {
            width: "10",
            height: "6",
            x: "7",
            y: "6",
            rx: "2"
        }],
        ["path", {
            d: "M2 2h20"
        }]
    ]],
    e0 = ["svg", t, [
        ["rect", {
            width: "10",
            height: "6",
            x: "7",
            y: "9",
            rx: "2"
        }],
        ["path", {
            d: "M22 20H2"
        }],
        ["path", {
            d: "M22 4H2"
        }]
    ]],
    h0 = ["svg", t, [
        ["rect", {
            width: "14",
            height: "6",
            x: "5",
            y: "15",
            rx: "2"
        }],
        ["rect", {
            width: "10",
            height: "6",
            x: "7",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M2 21h20"
        }],
        ["path", {
            d: "M2 3h20"
        }]
    ]],
    n0 = ["svg", t, [
        ["path", {
            d: "M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"
        }],
        ["path", {
            d: "M16 12h3"
        }]
    ]],
    r0 = ["svg", t, [
        ["path", {
            d: "M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"
        }],
        ["path", {
            d: "M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"
        }]
    ]],
    o0 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "5",
            r: "3"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "22",
            y2: "8"
        }],
        ["path", {
            d: "M5 12H2a10 10 0 0 0 20 0h-3"
        }]
    ]],
    c0 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "M16 16s-1.5-2-4-2-4 2-4 2"
        }],
        ["path", {
            d: "M7.5 8 10 9"
        }],
        ["path", {
            d: "m14 9 2.5-1"
        }],
        ["path", {
            d: "M9 10h0"
        }],
        ["path", {
            d: "M15 10h0"
        }]
    ]],
    s0 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "M8 15h8"
        }],
        ["path", {
            d: "M8 9h2"
        }],
        ["path", {
            d: "M14 9h2"
        }]
    ]],
    i0 = ["svg", t, [
        ["path", {
            d: "M2 12 7 2"
        }],
        ["path", {
            d: "m7 12 5-10"
        }],
        ["path", {
            d: "m12 12 5-10"
        }],
        ["path", {
            d: "m17 12 5-10"
        }],
        ["path", {
            d: "M4.5 7h15"
        }],
        ["path", {
            d: "M12 16v6"
        }]
    ]],
    d0 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["line", {
            x1: "14.31",
            x2: "20.05",
            y1: "8",
            y2: "17.94"
        }],
        ["line", {
            x1: "9.69",
            x2: "21.17",
            y1: "8",
            y2: "8"
        }],
        ["line", {
            x1: "7.38",
            x2: "13.12",
            y1: "12",
            y2: "2.06"
        }],
        ["line", {
            x1: "9.69",
            x2: "3.95",
            y1: "16",
            y2: "6.06"
        }],
        ["line", {
            x1: "14.31",
            x2: "2.83",
            y1: "16",
            y2: "16"
        }],
        ["line", {
            x1: "16.62",
            x2: "10.88",
            y1: "12",
            y2: "21.94"
        }]
    ]],
    p0 = ["svg", t, [
        ["rect", {
            x: "2",
            y: "4",
            width: "20",
            height: "16",
            rx: "2"
        }],
        ["path", {
            d: "M10 4v4"
        }],
        ["path", {
            d: "M2 8h20"
        }],
        ["path", {
            d: "M6 4v4"
        }]
    ]],
    l0 = ["svg", t, [
        ["path", {
            d: "M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"
        }],
        ["path", {
            d: "M10 2c1 .5 2 2 2 5"
        }]
    ]],
    v0 = ["svg", t, [
        ["rect", {
            width: "20",
            height: "5",
            x: "2",
            y: "3",
            rx: "1"
        }],
        ["path", {
            d: "M4 8v11a2 2 0 0 0 2 2h2"
        }],
        ["path", {
            d: "M20 8v11a2 2 0 0 1-2 2h-2"
        }],
        ["path", {
            d: "m9 15 3-3 3 3"
        }],
        ["path", {
            d: "M12 12v9"
        }]
    ]],
    M0 = ["svg", t, [
        ["rect", {
            width: "20",
            height: "5",
            x: "2",
            y: "3",
            rx: "1"
        }],
        ["path", {
            d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"
        }],
        ["path", {
            d: "m9.5 17 5-5"
        }],
        ["path", {
            d: "m9.5 12 5 5"
        }]
    ]],
    y0 = ["svg", t, [
        ["rect", {
            width: "20",
            height: "5",
            x: "2",
            y: "3",
            rx: "1"
        }],
        ["path", {
            d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"
        }],
        ["path", {
            d: "M10 12h4"
        }]
    ]],
    g0 = ["svg", t, [
        ["path", {
            d: "M3 3v18h18"
        }],
        ["path", {
            d: "M7 12v5h12V8l-5 5-4-4Z"
        }]
    ]],
    u0 = ["svg", t, [
        ["path", {
            d: "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"
        }],
        ["path", {
            d: "M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z"
        }],
        ["path", {
            d: "M5 18v2"
        }],
        ["path", {
            d: "M19 18v2"
        }]
    ]],
    f0 = ["svg", t, [
        ["path", {
            d: "M15 5H9"
        }],
        ["path", {
            d: "M15 9v3h4l-7 7-7-7h4V9h6z"
        }]
    ]],
    x0 = ["svg", t, [
        ["path", {
            d: "M15 6v6h4l-7 7-7-7h4V6h6z"
        }]
    ]],
    m0 = ["svg", t, [
        ["path", {
            d: "M19 15V9"
        }],
        ["path", {
            d: "M15 15h-3v4l-7-7 7-7v4h3v6z"
        }]
    ]],
    w0 = ["svg", t, [
        ["path", {
            d: "M18 15h-6v4l-7-7 7-7v4h6v6z"
        }]
    ]],
    b0 = ["svg", t, [
        ["path", {
            d: "M5 9v6"
        }],
        ["path", {
            d: "M9 9h3V5l7 7-7 7v-4H9V9z"
        }]
    ]],
    H0 = ["svg", t, [
        ["path", {
            d: "M6 9h6V5l7 7-7 7v-4H6V9z"
        }]
    ]],
    V0 = ["svg", t, [
        ["path", {
            d: "M9 19h6"
        }],
        ["path", {
            d: "M9 15v-3H5l7-7 7 7h-4v3H9z"
        }]
    ]],
    L0 = ["svg", t, [
        ["path", {
            d: "M9 18v-6H5l7-7 7 7h-4v6H9z"
        }]
    ]],
    S0 = ["svg", t, [
        ["path", {
            d: "m3 16 4 4 4-4"
        }],
        ["path", {
            d: "M7 20V4"
        }],
        ["rect", {
            x: "15",
            y: "4",
            width: "4",
            height: "6",
            ry: "2"
        }],
        ["path", {
            d: "M17 20v-6h-2"
        }],
        ["path", {
            d: "M15 20h4"
        }]
    ]],
    A0 = ["svg", t, [
        ["path", {
            d: "m3 16 4 4 4-4"
        }],
        ["path", {
            d: "M7 20V4"
        }],
        ["path", {
            d: "M17 10V4h-2"
        }],
        ["path", {
            d: "M15 10h4"
        }],
        ["rect", {
            x: "15",
            y: "14",
            width: "4",
            height: "6",
            ry: "2"
        }]
    ]],
    C0 = ["svg", t, [
        ["path", {
            d: "m3 16 4 4 4-4"
        }],
        ["path", {
            d: "M7 20V4"
        }],
        ["path", {
            d: "M20 8h-5"
        }],
        ["path", {
            d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10"
        }],
        ["path", {
            d: "M15 14h5l-5 6h5"
        }]
    ]],
    O0 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "M12 8v8"
        }],
        ["path", {
            d: "m8 12 4 4 4-4"
        }]
    ]],
    E0 = ["svg", t, [
        ["path", {
            d: "M19 3H5"
        }],
        ["path", {
            d: "M12 21V7"
        }],
        ["path", {
            d: "m6 15 6 6 6-6"
        }]
    ]],
    k0 = ["svg", t, [
        ["path", {
            d: "M2 12a10 10 0 1 1 10 10"
        }],
        ["path", {
            d: "m2 22 10-10"
        }],
        ["path", {
            d: "M8 22H2v-6"
        }]
    ]],
    P0 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "m16 8-8 8"
        }],
        ["path", {
            d: "M16 16H8V8"
        }]
    ]],
    Z0 = ["svg", t, [
        ["path", {
            d: "M17 7 7 17"
        }],
        ["path", {
            d: "M17 17H7V7"
        }]
    ]],
    T0 = ["svg", t, [
        ["path", {
            d: "m3 16 4 4 4-4"
        }],
        ["path", {
            d: "M7 20V4"
        }],
        ["path", {
            d: "M11 4h4"
        }],
        ["path", {
            d: "M11 8h7"
        }],
        ["path", {
            d: "M11 12h10"
        }]
    ]],
    z0 = ["svg", t, [
        ["path", {
            d: "M12 22a10 10 0 1 1 10-10"
        }],
        ["path", {
            d: "M22 22 12 12"
        }],
        ["path", {
            d: "M22 16v6h-6"
        }]
    ]],
    D0 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "m8 8 8 8"
        }],
        ["path", {
            d: "M16 8v8H8"
        }]
    ]],
    _0 = ["svg", t, [
        ["path", {
            d: "m7 7 10 10"
        }],
        ["path", {
            d: "M17 7v10H7"
        }]
    ]],
    B0 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M12 8v8"
        }],
        ["path", {
            d: "m8 12 4 4 4-4"
        }]
    ]],
    R0 = ["svg", t, [
        ["path", {
            d: "M12 2v14"
        }],
        ["path", {
            d: "m19 9-7 7-7-7"
        }],
        ["circle", {
            cx: "12",
            cy: "21",
            r: "1"
        }]
    ]],
    F0 = ["svg", t, [
        ["path", {
            d: "M12 17V3"
        }],
        ["path", {
            d: "m6 11 6 6 6-6"
        }],
        ["path", {
            d: "M19 21H5"
        }]
    ]],
    j0 = ["svg", t, [
        ["path", {
            d: "m3 16 4 4 4-4"
        }],
        ["path", {
            d: "M7 20V4"
        }],
        ["path", {
            d: "m21 8-4-4-4 4"
        }],
        ["path", {
            d: "M17 4v16"
        }]
    ]],
    q0 = ["svg", t, [
        ["path", {
            d: "m3 16 4 4 4-4"
        }],
        ["path", {
            d: "M7 20V4"
        }],
        ["path", {
            d: "M11 4h10"
        }],
        ["path", {
            d: "M11 8h7"
        }],
        ["path", {
            d: "M11 12h4"
        }]
    ]],
    W0 = ["svg", t, [
        ["path", {
            d: "m3 16 4 4 4-4"
        }],
        ["path", {
            d: "M7 4v16"
        }],
        ["path", {
            d: "M15 4h5l-5 6h5"
        }],
        ["path", {
            d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"
        }],
        ["path", {
            d: "M20 18h-5"
        }]
    ]],
    N0 = ["svg", t, [
        ["path", {
            d: "M12 5v14"
        }],
        ["path", {
            d: "m19 12-7 7-7-7"
        }]
    ]],
    I0 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "M16 12H8"
        }],
        ["path", {
            d: "m12 8-4 4 4 4"
        }]
    ]],
    U0 = ["svg", t, [
        ["path", {
            d: "m9 6-6 6 6 6"
        }],
        ["path", {
            d: "M3 12h14"
        }],
        ["path", {
            d: "M21 19V5"
        }]
    ]],
    G0 = ["svg", t, [
        ["path", {
            d: "M8 3 4 7l4 4"
        }],
        ["path", {
            d: "M4 7h16"
        }],
        ["path", {
            d: "m16 21 4-4-4-4"
        }],
        ["path", {
            d: "M20 17H4"
        }]
    ]],
    X0 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "m12 8-4 4 4 4"
        }],
        ["path", {
            d: "M16 12H8"
        }]
    ]],
    $0 = ["svg", t, [
        ["path", {
            d: "M3 19V5"
        }],
        ["path", {
            d: "m13 6-6 6 6 6"
        }],
        ["path", {
            d: "M7 12h14"
        }]
    ]],
    Y0 = ["svg", t, [
        ["path", {
            d: "m12 19-7-7 7-7"
        }],
        ["path", {
            d: "M19 12H5"
        }]
    ]],
    K0 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "M8 12h8"
        }],
        ["path", {
            d: "m12 16 4-4-4-4"
        }]
    ]],
    J0 = ["svg", t, [
        ["path", {
            d: "M3 5v14"
        }],
        ["path", {
            d: "M21 12H7"
        }],
        ["path", {
            d: "m15 18 6-6-6-6"
        }]
    ]],
    Q0 = ["svg", t, [
        ["path", {
            d: "m16 3 4 4-4 4"
        }],
        ["path", {
            d: "M20 7H4"
        }],
        ["path", {
            d: "m8 21-4-4 4-4"
        }],
        ["path", {
            d: "M4 17h16"
        }]
    ]],
    ta = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M8 12h8"
        }],
        ["path", {
            d: "m12 16 4-4-4-4"
        }]
    ]],
    aa = ["svg", t, [
        ["path", {
            d: "M17 12H3"
        }],
        ["path", {
            d: "m11 18 6-6-6-6"
        }],
        ["path", {
            d: "M21 5v14"
        }]
    ]],
    ea = ["svg", t, [
        ["path", {
            d: "M5 12h14"
        }],
        ["path", {
            d: "m12 5 7 7-7 7"
        }]
    ]],
    ha = ["svg", t, [
        ["path", {
            d: "m3 8 4-4 4 4"
        }],
        ["path", {
            d: "M7 4v16"
        }],
        ["rect", {
            x: "15",
            y: "4",
            width: "4",
            height: "6",
            ry: "2"
        }],
        ["path", {
            d: "M17 20v-6h-2"
        }],
        ["path", {
            d: "M15 20h4"
        }]
    ]],
    na = ["svg", t, [
        ["path", {
            d: "m3 8 4-4 4 4"
        }],
        ["path", {
            d: "M7 4v16"
        }],
        ["path", {
            d: "M17 10V4h-2"
        }],
        ["path", {
            d: "M15 10h4"
        }],
        ["rect", {
            x: "15",
            y: "14",
            width: "4",
            height: "6",
            ry: "2"
        }]
    ]],
    ra = ["svg", t, [
        ["path", {
            d: "m3 8 4-4 4 4"
        }],
        ["path", {
            d: "M7 4v16"
        }],
        ["path", {
            d: "M20 8h-5"
        }],
        ["path", {
            d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10"
        }],
        ["path", {
            d: "M15 14h5l-5 6h5"
        }]
    ]],
    oa = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "m16 12-4-4-4 4"
        }],
        ["path", {
            d: "M12 16V8"
        }]
    ]],
    ca = ["svg", t, [
        ["path", {
            d: "m21 16-4 4-4-4"
        }],
        ["path", {
            d: "M17 20V4"
        }],
        ["path", {
            d: "m3 8 4-4 4 4"
        }],
        ["path", {
            d: "M7 4v16"
        }]
    ]],
    sa = ["svg", t, [
        ["path", {
            d: "m5 9 7-7 7 7"
        }],
        ["path", {
            d: "M12 16V2"
        }],
        ["circle", {
            cx: "12",
            cy: "21",
            r: "1"
        }]
    ]],
    ia = ["svg", t, [
        ["path", {
            d: "m18 9-6-6-6 6"
        }],
        ["path", {
            d: "M12 3v14"
        }],
        ["path", {
            d: "M5 21h14"
        }]
    ]],
    da = ["svg", t, [
        ["path", {
            d: "M2 8V2h6"
        }],
        ["path", {
            d: "m2 2 10 10"
        }],
        ["path", {
            d: "M12 2A10 10 0 1 1 2 12"
        }]
    ]],
    pa = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M8 16V8h8"
        }],
        ["path", {
            d: "M16 16 8 8"
        }]
    ]],
    la = ["svg", t, [
        ["path", {
            d: "M7 17V7h10"
        }],
        ["path", {
            d: "M17 17 7 7"
        }]
    ]],
    va = ["svg", t, [
        ["path", {
            d: "m3 8 4-4 4 4"
        }],
        ["path", {
            d: "M7 4v16"
        }],
        ["path", {
            d: "M11 12h4"
        }],
        ["path", {
            d: "M11 16h7"
        }],
        ["path", {
            d: "M11 20h10"
        }]
    ]],
    Ma = ["svg", t, [
        ["path", {
            d: "M22 12A10 10 0 1 1 12 2"
        }],
        ["path", {
            d: "M22 2 12 12"
        }],
        ["path", {
            d: "M16 2h6v6"
        }]
    ]],
    ya = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M8 8h8v8"
        }],
        ["path", {
            d: "m8 16 8-8"
        }]
    ]],
    ga = ["svg", t, [
        ["path", {
            d: "M7 7h10v10"
        }],
        ["path", {
            d: "M7 17 17 7"
        }]
    ]],
    ua = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "m16 12-4-4-4 4"
        }],
        ["path", {
            d: "M12 16V8"
        }]
    ]],
    fa = ["svg", t, [
        ["path", {
            d: "M5 3h14"
        }],
        ["path", {
            d: "m18 13-6-6-6 6"
        }],
        ["path", {
            d: "M12 7v14"
        }]
    ]],
    xa = ["svg", t, [
        ["path", {
            d: "m3 8 4-4 4 4"
        }],
        ["path", {
            d: "M7 4v16"
        }],
        ["path", {
            d: "M11 12h10"
        }],
        ["path", {
            d: "M11 16h7"
        }],
        ["path", {
            d: "M11 20h4"
        }]
    ]],
    ma = ["svg", t, [
        ["path", {
            d: "m3 8 4-4 4 4"
        }],
        ["path", {
            d: "M7 4v16"
        }],
        ["path", {
            d: "M15 4h5l-5 6h5"
        }],
        ["path", {
            d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"
        }],
        ["path", {
            d: "M20 18h-5"
        }]
    ]],
    wa = ["svg", t, [
        ["path", {
            d: "m5 12 7-7 7 7"
        }],
        ["path", {
            d: "M12 19V5"
        }]
    ]],
    ba = ["svg", t, [
        ["path", {
            d: "m4 6 3-3 3 3"
        }],
        ["path", {
            d: "M7 17V3"
        }],
        ["path", {
            d: "m14 6 3-3 3 3"
        }],
        ["path", {
            d: "M17 17V3"
        }],
        ["path", {
            d: "M4 21h16"
        }]
    ]],
    Ha = ["svg", t, [
        ["path", {
            d: "M12 6v12"
        }],
        ["path", {
            d: "M17.196 9 6.804 15"
        }],
        ["path", {
            d: "m6.804 9 10.392 6"
        }]
    ]],
    Va = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "4"
        }],
        ["path", {
            d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"
        }]
    ]],
    La = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "1"
        }],
        ["path", {
            d: "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"
        }],
        ["path", {
            d: "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"
        }]
    ]],
    Sa = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "8",
            r: "6"
        }],
        ["path", {
            d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"
        }]
    ]],
    Aa = ["svg", t, [
        ["path", {
            d: "m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9"
        }],
        ["path", {
            d: "M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z"
        }]
    ]],
    Ca = ["svg", t, [
        ["path", {
            d: "M4 4v16h16"
        }],
        ["path", {
            d: "m4 20 7-7"
        }]
    ]],
    Oa = ["svg", t, [
        ["path", {
            d: "M9 12h.01"
        }],
        ["path", {
            d: "M15 12h.01"
        }],
        ["path", {
            d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"
        }],
        ["path", {
            d: "M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"
        }]
    ]],
    Ea = ["svg", t, [
        ["path", {
            d: "M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
        }],
        ["path", {
            d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"
        }],
        ["path", {
            d: "M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"
        }],
        ["path", {
            d: "M8 10h8"
        }],
        ["path", {
            d: "M8 18h8"
        }]
    ]],
    ka = ["svg", t, [
        ["path", {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12"
        }],
        ["line", {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16"
        }]
    ]],
    Pa = ["svg", t, [
        ["path", {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }],
        ["path", {
            d: "M12 7v10"
        }],
        ["path", {
            d: "M15.4 10a4 4 0 1 0 0 4"
        }]
    ]],
    Za = ["svg", t, [
        ["path", {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }],
        ["path", {
            d: "m9 12 2 2 4-4"
        }]
    ]],
    Ta = ["svg", t, [
        ["path", {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }],
        ["path", {
            d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"
        }],
        ["path", {
            d: "M12 18V6"
        }]
    ]],
    za = ["svg", t, [
        ["path", {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }],
        ["path", {
            d: "M7 12h5"
        }],
        ["path", {
            d: "M15 9.4a4 4 0 1 0 0 5.2"
        }]
    ]],
    Da = ["svg", t, [
        ["path", {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }],
        ["path", {
            d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
        }],
        ["line", {
            x1: "12",
            x2: "12.01",
            y1: "17",
            y2: "17"
        }]
    ]],
    _a = ["svg", t, [
        ["path", {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }],
        ["path", {
            d: "M8 8h8"
        }],
        ["path", {
            d: "M8 12h8"
        }],
        ["path", {
            d: "m13 17-5-1h1a4 4 0 0 0 0-8"
        }]
    ]],
    Ba = ["svg", t, [
        ["path", {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "16",
            y2: "12"
        }],
        ["line", {
            x1: "12",
            x2: "12.01",
            y1: "8",
            y2: "8"
        }]
    ]],
    Ra = ["svg", t, [
        ["path", {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }],
        ["path", {
            d: "m9 8 3 3v7"
        }],
        ["path", {
            d: "m12 11 3-3"
        }],
        ["path", {
            d: "M9 12h6"
        }],
        ["path", {
            d: "M9 16h6"
        }]
    ]],
    Fa = ["svg", t, [
        ["path", {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }],
        ["line", {
            x1: "8",
            x2: "16",
            y1: "12",
            y2: "12"
        }]
    ]],
    ja = ["svg", t, [
        ["path", {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }],
        ["path", {
            d: "m15 9-6 6"
        }],
        ["path", {
            d: "M9 9h.01"
        }],
        ["path", {
            d: "M15 15h.01"
        }]
    ]],
    qa = ["svg", t, [
        ["path", {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "16"
        }],
        ["line", {
            x1: "8",
            x2: "16",
            y1: "12",
            y2: "12"
        }]
    ]],
    Wa = ["svg", t, [
        ["path", {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }],
        ["path", {
            d: "M8 12h4"
        }],
        ["path", {
            d: "M10 16V9.5a2.5 2.5 0 0 1 5 0"
        }],
        ["path", {
            d: "M8 16h7"
        }]
    ]],
    Na = ["svg", t, [
        ["path", {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }],
        ["path", {
            d: "M9 16h5"
        }],
        ["path", {
            d: "M9 12h5a2 2 0 1 0 0-4h-3v9"
        }]
    ]],
    Ia = ["svg", t, [
        ["path", {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }],
        ["path", {
            d: "M11 17V8h4"
        }],
        ["path", {
            d: "M11 12h3"
        }],
        ["path", {
            d: "M9 16h4"
        }]
    ]],
    Ua = ["svg", t, [
        ["path", {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }],
        ["line", {
            x1: "15",
            x2: "9",
            y1: "9",
            y2: "15"
        }],
        ["line", {
            x1: "9",
            x2: "15",
            y1: "9",
            y2: "15"
        }]
    ]],
    Ga = ["svg", t, [
        ["path", {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        }]
    ]],
    Xa = ["svg", t, [
        ["path", {
            d: "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"
        }],
        ["path", {
            d: "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"
        }],
        ["rect", {
            width: "13",
            height: "8",
            x: "8",
            y: "6",
            rx: "1"
        }],
        ["circle", {
            cx: "18",
            cy: "20",
            r: "2"
        }],
        ["circle", {
            cx: "9",
            cy: "20",
            r: "2"
        }]
    ]],
    $a = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "m4.9 4.9 14.2 14.2"
        }]
    ]],
    Ya = ["svg", t, [
        ["path", {
            d: "M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5"
        }],
        ["path", {
            d: "M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"
        }]
    ]],
    Ka = ["svg", t, [
        ["rect", {
            width: "20",
            height: "12",
            x: "2",
            y: "6",
            rx: "2"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "2"
        }],
        ["path", {
            d: "M6 12h.01M18 12h.01"
        }]
    ]],
    Ja = ["svg", t, [
        ["line", {
            x1: "18",
            x2: "18",
            y1: "20",
            y2: "10"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "20",
            y2: "4"
        }],
        ["line", {
            x1: "6",
            x2: "6",
            y1: "20",
            y2: "14"
        }]
    ]],
    Qa = ["svg", t, [
        ["path", {
            d: "M3 3v18h18"
        }],
        ["path", {
            d: "M18 17V9"
        }],
        ["path", {
            d: "M13 17V5"
        }],
        ["path", {
            d: "M8 17v-3"
        }]
    ]],
    te = ["svg", t, [
        ["path", {
            d: "M3 3v18h18"
        }],
        ["path", {
            d: "M13 17V9"
        }],
        ["path", {
            d: "M18 17V5"
        }],
        ["path", {
            d: "M8 17v-3"
        }]
    ]],
    ae = ["svg", t, [
        ["path", {
            d: "M3 3v18h18"
        }],
        ["rect", {
            width: "4",
            height: "7",
            x: "7",
            y: "10",
            rx: "1"
        }],
        ["rect", {
            width: "4",
            height: "12",
            x: "15",
            y: "5",
            rx: "1"
        }]
    ]],
    ee = ["svg", t, [
        ["path", {
            d: "M3 3v18h18"
        }],
        ["rect", {
            width: "12",
            height: "4",
            x: "7",
            y: "5",
            rx: "1"
        }],
        ["rect", {
            width: "7",
            height: "4",
            x: "7",
            y: "13",
            rx: "1"
        }]
    ]],
    he = ["svg", t, [
        ["path", {
            d: "M3 3v18h18"
        }],
        ["path", {
            d: "M7 16h8"
        }],
        ["path", {
            d: "M7 11h12"
        }],
        ["path", {
            d: "M7 6h3"
        }]
    ]],
    ne = ["svg", t, [
        ["line", {
            x1: "12",
            x2: "12",
            y1: "20",
            y2: "10"
        }],
        ["line", {
            x1: "18",
            x2: "18",
            y1: "20",
            y2: "4"
        }],
        ["line", {
            x1: "6",
            x2: "6",
            y1: "20",
            y2: "16"
        }]
    ]],
    re = ["svg", t, [
        ["path", {
            d: "M4 20h16"
        }],
        ["path", {
            d: "m6 16 6-12 6 12"
        }],
        ["path", {
            d: "M8 12h8"
        }]
    ]],
    oe = ["svg", t, [
        ["path", {
            d: "M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"
        }],
        ["line", {
            x1: "10",
            x2: "8",
            y1: "5",
            y2: "7"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "7",
            x2: "7",
            y1: "19",
            y2: "21"
        }],
        ["line", {
            x1: "17",
            x2: "17",
            y1: "19",
            y2: "21"
        }]
    ]],
    ce = ["svg", t, [
        ["path", {
            d: "M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"
        }],
        ["path", {
            d: "M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"
        }],
        ["path", {
            d: "m11 7-3 5h4l-3 5"
        }],
        ["line", {
            x1: "22",
            x2: "22",
            y1: "11",
            y2: "13"
        }]
    ]],
    se = ["svg", t, [
        ["rect", {
            width: "16",
            height: "10",
            x: "2",
            y: "7",
            rx: "2",
            ry: "2"
        }],
        ["line", {
            x1: "22",
            x2: "22",
            y1: "11",
            y2: "13"
        }],
        ["line", {
            x1: "6",
            x2: "6",
            y1: "11",
            y2: "13"
        }],
        ["line", {
            x1: "10",
            x2: "10",
            y1: "11",
            y2: "13"
        }],
        ["line", {
            x1: "14",
            x2: "14",
            y1: "11",
            y2: "13"
        }]
    ]],
    ie = ["svg", t, [
        ["rect", {
            width: "16",
            height: "10",
            x: "2",
            y: "7",
            rx: "2",
            ry: "2"
        }],
        ["line", {
            x1: "22",
            x2: "22",
            y1: "11",
            y2: "13"
        }],
        ["line", {
            x1: "6",
            x2: "6",
            y1: "11",
            y2: "13"
        }]
    ]],
    de = ["svg", t, [
        ["rect", {
            width: "16",
            height: "10",
            x: "2",
            y: "7",
            rx: "2",
            ry: "2"
        }],
        ["line", {
            x1: "22",
            x2: "22",
            y1: "11",
            y2: "13"
        }],
        ["line", {
            x1: "6",
            x2: "6",
            y1: "11",
            y2: "13"
        }],
        ["line", {
            x1: "10",
            x2: "10",
            y1: "11",
            y2: "13"
        }]
    ]],
    pe = ["svg", t, [
        ["path", {
            d: "M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2"
        }],
        ["path", {
            d: "M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2"
        }],
        ["line", {
            x1: "22",
            x2: "22",
            y1: "11",
            y2: "13"
        }],
        ["line", {
            x1: "10",
            x2: "10",
            y1: "7",
            y2: "13"
        }],
        ["line", {
            x1: "10",
            x2: "10",
            y1: "17",
            y2: "17.01"
        }]
    ]],
    le = ["svg", t, [
        ["rect", {
            width: "16",
            height: "10",
            x: "2",
            y: "7",
            rx: "2",
            ry: "2"
        }],
        ["line", {
            x1: "22",
            x2: "22",
            y1: "11",
            y2: "13"
        }]
    ]],
    ve = ["svg", t, [
        ["path", {
            d: "M4.5 3h15"
        }],
        ["path", {
            d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"
        }],
        ["path", {
            d: "M6 14h12"
        }]
    ]],
    Me = ["svg", t, [
        ["path", {
            d: "M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1"
        }],
        ["path", {
            d: "M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66"
        }],
        ["path", {
            d: "M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }]
    ]],
    ye = ["svg", t, [
        ["path", {
            d: "M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"
        }],
        ["path", {
            d: "M5.341 10.62a4 4 0 1 0 5.279-5.28"
        }]
    ]],
    ge = ["svg", t, [
        ["path", {
            d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"
        }],
        ["path", {
            d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"
        }],
        ["path", {
            d: "M12 4v6"
        }],
        ["path", {
            d: "M2 18h20"
        }]
    ]],
    ue = ["svg", t, [
        ["path", {
            d: "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"
        }],
        ["path", {
            d: "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"
        }],
        ["path", {
            d: "M3 18h18"
        }]
    ]],
    fe = ["svg", t, [
        ["path", {
            d: "M2 4v16"
        }],
        ["path", {
            d: "M2 8h18a2 2 0 0 1 2 2v10"
        }],
        ["path", {
            d: "M2 17h20"
        }],
        ["path", {
            d: "M6 8v9"
        }]
    ]],
    xe = ["svg", t, [
        ["circle", {
            cx: "12.5",
            cy: "8.5",
            r: "2.5"
        }],
        ["path", {
            d: "M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z"
        }],
        ["path", {
            d: "m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"
        }]
    ]],
    me = ["svg", t, [
        ["path", {
            d: "M17 11h1a3 3 0 0 1 0 6h-1"
        }],
        ["path", {
            d: "M9 12v6"
        }],
        ["path", {
            d: "M13 12v6"
        }],
        ["path", {
            d: "M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"
        }],
        ["path", {
            d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"
        }]
    ]],
    we = ["svg", t, [
        ["path", {
            d: "M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3"
        }],
        ["path", {
            d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
        }],
        ["circle", {
            cx: "18",
            cy: "8",
            r: "3"
        }]
    ]],
    be = ["svg", t, [
        ["path", {
            d: "M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2"
        }],
        ["path", {
            d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
        }],
        ["path", {
            d: "M15 8h6"
        }]
    ]],
    He = ["svg", t, [
        ["path", {
            d: "M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5"
        }],
        ["path", {
            d: "M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7"
        }],
        ["path", {
            d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
        }],
        ["path", {
            d: "m2 2 20 20"
        }]
    ]],
    Ve = ["svg", t, [
        ["path", {
            d: "M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7"
        }],
        ["path", {
            d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
        }],
        ["path", {
            d: "M15 8h6"
        }],
        ["path", {
            d: "M18 5v6"
        }]
    ]],
    Le = ["svg", t, [
        ["path", {
            d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
        }],
        ["path", {
            d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
        }],
        ["path", {
            d: "M4 2C2.8 3.7 2 5.7 2 8"
        }],
        ["path", {
            d: "M22 8c0-2.3-.8-4.3-2-6"
        }]
    ]],
    Se = ["svg", t, [
        ["path", {
            d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
        }],
        ["path", {
            d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
        }]
    ]],
    Ae = ["svg", t, [
        ["circle", {
            cx: "18.5",
            cy: "17.5",
            r: "3.5"
        }],
        ["circle", {
            cx: "5.5",
            cy: "17.5",
            r: "3.5"
        }],
        ["circle", {
            cx: "15",
            cy: "5",
            r: "1"
        }],
        ["path", {
            d: "M12 17.5V14l-3-3 4-3 2 3h2"
        }]
    ]],
    Ce = ["svg", t, [
        ["rect", {
            x: "14",
            y: "14",
            width: "4",
            height: "6",
            rx: "2"
        }],
        ["rect", {
            x: "6",
            y: "4",
            width: "4",
            height: "6",
            rx: "2"
        }],
        ["path", {
            d: "M6 20h4"
        }],
        ["path", {
            d: "M14 10h4"
        }],
        ["path", {
            d: "M6 14h2v6"
        }],
        ["path", {
            d: "M14 4h2v6"
        }]
    ]],
    Oe = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "11.9",
            r: "2"
        }],
        ["path", {
            d: "M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6"
        }],
        ["path", {
            d: "m8.9 10.1 1.4.8"
        }],
        ["path", {
            d: "M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5"
        }],
        ["path", {
            d: "m15.1 10.1-1.4.8"
        }],
        ["path", {
            d: "M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2"
        }],
        ["path", {
            d: "M12 13.9v1.6"
        }],
        ["path", {
            d: "M13.5 5.4c-1-.2-2-.2-3 0"
        }],
        ["path", {
            d: "M17 16.4c.7-.7 1.2-1.6 1.5-2.5"
        }],
        ["path", {
            d: "M5.5 13.9c.3.9.8 1.8 1.5 2.5"
        }]
    ]],
    Ee = ["svg", t, [
        ["path", {
            d: "M16 7h.01"
        }],
        ["path", {
            d: "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"
        }],
        ["path", {
            d: "m20 7 2 .5-2 .5"
        }],
        ["path", {
            d: "M10 18v3"
        }],
        ["path", {
            d: "M14 17.75V21"
        }],
        ["path", {
            d: "M7 18a6 6 0 0 0 3.84-10.61"
        }]
    ]],
    ke = ["svg", t, [
        ["path", {
            d: "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"
        }]
    ]],
    Pe = ["svg", t, [
        ["path", {
            d: "M3 3h18"
        }],
        ["path", {
            d: "M20 7H8"
        }],
        ["path", {
            d: "M20 11H8"
        }],
        ["path", {
            d: "M10 19h10"
        }],
        ["path", {
            d: "M8 15h12"
        }],
        ["path", {
            d: "M4 3v14"
        }],
        ["circle", {
            cx: "4",
            cy: "19",
            r: "2"
        }]
    ]],
    Ze = ["svg", t, [
        ["rect", {
            width: "7",
            height: "7",
            x: "14",
            y: "3",
            rx: "1"
        }],
        ["path", {
            d: "M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"
        }]
    ]],
    Te = ["svg", t, [
        ["path", {
            d: "m7 7 10 10-5 5V2l5 5L7 17"
        }],
        ["line", {
            x1: "18",
            x2: "21",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "3",
            x2: "6",
            y1: "12",
            y2: "12"
        }]
    ]],
    ze = ["svg", t, [
        ["path", {
            d: "m17 17-5 5V12l-5 5"
        }],
        ["path", {
            d: "m2 2 20 20"
        }],
        ["path", {
            d: "M14.5 9.5 17 7l-5-5v4.5"
        }]
    ]],
    De = ["svg", t, [
        ["path", {
            d: "m7 7 10 10-5 5V2l5 5L7 17"
        }],
        ["path", {
            d: "M20.83 14.83a4 4 0 0 0 0-5.66"
        }],
        ["path", {
            d: "M18 12h.01"
        }]
    ]],
    _e = ["svg", t, [
        ["path", {
            d: "m7 7 10 10-5 5V2l5 5L7 17"
        }]
    ]],
    Be = ["svg", t, [
        ["path", {
            d: "M14 12a4 4 0 0 0 0-8H6v8"
        }],
        ["path", {
            d: "M15 20a4 4 0 0 0 0-8H6v8Z"
        }]
    ]],
    Re = ["svg", t, [
        ["circle", {
            cx: "11",
            cy: "13",
            r: "9"
        }],
        ["path", {
            d: "m19.5 9.5 1.8-1.8a2.4 2.4 0 0 0 0-3.4l-1.6-1.6a2.41 2.41 0 0 0-3.4 0l-1.8 1.8"
        }],
        ["path", {
            d: "m22 2-1.5 1.5"
        }]
    ]],
    Fe = ["svg", t, [
        ["path", {
            d: "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"
        }]
    ]],
    je = ["svg", t, [
        ["path", {
            d: "M2 16V4a2 2 0 0 1 2-2h11"
        }],
        ["path", {
            d: "M5 14H4a2 2 0 1 0 0 4h1"
        }],
        ["path", {
            d: "M22 18H11a2 2 0 1 0 0 4h11V6H11a2 2 0 0 0-2 2v12"
        }]
    ]],
    qe = ["svg", t, [
        ["path", {
            d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
        }],
        ["path", {
            d: "M12 13V7"
        }],
        ["path", {
            d: "m9 10 3 3 3-3"
        }]
    ]],
    We = ["svg", t, [
        ["path", {
            d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14"
        }],
        ["path", {
            d: "M20 8v14H6.5a2.5 2.5 0 0 1 0-5H20"
        }],
        ["circle", {
            cx: "14",
            cy: "8",
            r: "2"
        }],
        ["path", {
            d: "m20 2-4.5 4.5"
        }],
        ["path", {
            d: "m19 3 1 1"
        }]
    ]],
    Ne = ["svg", t, [
        ["path", {
            d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10"
        }],
        ["path", {
            d: "M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20"
        }],
        ["rect", {
            width: "8",
            height: "5",
            x: "12",
            y: "6",
            rx: "1"
        }],
        ["path", {
            d: "M18 6V4a2 2 0 1 0-4 0v2"
        }]
    ]],
    Ie = ["svg", t, [
        ["path", {
            d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
        }],
        ["polyline", {
            points: "10 2 10 10 13 7 16 10 16 2"
        }]
    ]],
    Ue = ["svg", t, [
        ["path", {
            d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
        }],
        ["path", {
            d: "M9 10h6"
        }]
    ]],
    Ge = ["svg", t, [
        ["path", {
            d: "M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z"
        }],
        ["path", {
            d: "m16 12 2 2 4-4"
        }],
        ["path", {
            d: "M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3"
        }]
    ]],
    Xe = ["svg", t, [
        ["path", {
            d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
        }],
        ["path", {
            d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
        }]
    ]],
    $e = ["svg", t, [
        ["path", {
            d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
        }],
        ["path", {
            d: "M9 10h6"
        }],
        ["path", {
            d: "M12 7v6"
        }]
    ]],
    Ye = ["svg", t, [
        ["path", {
            d: "M20 22h-2"
        }],
        ["path", {
            d: "M20 15v2h-2"
        }],
        ["path", {
            d: "M4 19.5V15"
        }],
        ["path", {
            d: "M20 8v3"
        }],
        ["path", {
            d: "M18 2h2v2"
        }],
        ["path", {
            d: "M4 11V9"
        }],
        ["path", {
            d: "M12 2h2"
        }],
        ["path", {
            d: "M12 22h2"
        }],
        ["path", {
            d: "M12 17h2"
        }],
        ["path", {
            d: "M8 22H6.5a2.5 2.5 0 0 1 0-5H8"
        }],
        ["path", {
            d: "M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8"
        }]
    ]],
    Ke = ["svg", t, [
        ["path", {
            d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2"
        }],
        ["path", {
            d: "M18 2h2v20H6.5a2.5 2.5 0 0 1 0-5H20"
        }],
        ["path", {
            d: "M12 13V7"
        }],
        ["path", {
            d: "m9 10 3-3 3 3"
        }],
        ["path", {
            d: "m9 5 3-3 3 3"
        }]
    ]],
    Je = ["svg", t, [
        ["path", {
            d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
        }],
        ["path", {
            d: "M12 13V7"
        }],
        ["path", {
            d: "m9 10 3-3 3 3"
        }]
    ]],
    Qe = ["svg", t, [
        ["path", {
            d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
        }],
        ["path", {
            d: "m14.5 7-5 5"
        }],
        ["path", {
            d: "m9.5 7 5 5"
        }]
    ]],
    th = ["svg", t, [
        ["path", {
            d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
        }]
    ]],
    ah = ["svg", t, [
        ["path", {
            d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
        }],
        ["line", {
            x1: "15",
            x2: "9",
            y1: "10",
            y2: "10"
        }]
    ]],
    eh = ["svg", t, [
        ["path", {
            d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "7",
            y2: "13"
        }],
        ["line", {
            x1: "15",
            x2: "9",
            y1: "10",
            y2: "10"
        }]
    ]],
    hh = ["svg", t, [
        ["path", {
            d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
        }]
    ]],
    nh = ["svg", t, [
        ["path", {
            d: "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"
        }],
        ["path", {
            d: "M8 8v1"
        }],
        ["path", {
            d: "M12 8v1"
        }],
        ["path", {
            d: "M16 8v1"
        }],
        ["rect", {
            width: "20",
            height: "12",
            x: "2",
            y: "9",
            rx: "2"
        }],
        ["circle", {
            cx: "8",
            cy: "15",
            r: "2"
        }],
        ["circle", {
            cx: "16",
            cy: "15",
            r: "2"
        }]
    ]],
    rh = ["svg", t, [
        ["rect", {
            width: "18",
            height: "10",
            x: "3",
            y: "11",
            rx: "2"
        }],
        ["circle", {
            cx: "12",
            cy: "5",
            r: "2"
        }],
        ["path", {
            d: "M12 7v4"
        }],
        ["line", {
            x1: "8",
            x2: "8",
            y1: "16",
            y2: "16"
        }],
        ["line", {
            x1: "16",
            x2: "16",
            y1: "16",
            y2: "16"
        }]
    ]],
    oh = ["svg", t, [
        ["path", {
            d: "M5 3a2 2 0 0 0-2 2"
        }],
        ["path", {
            d: "M19 3a2 2 0 0 1 2 2"
        }],
        ["path", {
            d: "M21 19a2 2 0 0 1-2 2"
        }],
        ["path", {
            d: "M5 21a2 2 0 0 1-2-2"
        }],
        ["path", {
            d: "M9 3h1"
        }],
        ["path", {
            d: "M9 21h1"
        }],
        ["path", {
            d: "M14 3h1"
        }],
        ["path", {
            d: "M14 21h1"
        }],
        ["path", {
            d: "M3 9v1"
        }],
        ["path", {
            d: "M21 9v1"
        }],
        ["path", {
            d: "M3 14v1"
        }],
        ["path", {
            d: "M21 14v1"
        }]
    ]],
    ch = ["svg", t, [
        ["path", {
            d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
        }],
        ["path", {
            d: "m3.3 7 8.7 5 8.7-5"
        }],
        ["path", {
            d: "M12 22V12"
        }]
    ]],
    sh = ["svg", t, [
        ["path", {
            d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"
        }],
        ["path", {
            d: "m7 16.5-4.74-2.85"
        }],
        ["path", {
            d: "m7 16.5 5-3"
        }],
        ["path", {
            d: "M7 16.5v5.17"
        }],
        ["path", {
            d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"
        }],
        ["path", {
            d: "m17 16.5-5-3"
        }],
        ["path", {
            d: "m17 16.5 4.74-2.85"
        }],
        ["path", {
            d: "M17 16.5v5.17"
        }],
        ["path", {
            d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"
        }],
        ["path", {
            d: "M12 8 7.26 5.15"
        }],
        ["path", {
            d: "m12 8 4.74-2.85"
        }],
        ["path", {
            d: "M12 13.5V8"
        }]
    ]],
    ih = ["svg", t, [
        ["path", {
            d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"
        }],
        ["path", {
            d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"
        }]
    ]],
    dh = ["svg", t, [
        ["path", {
            d: "M16 3h3v18h-3"
        }],
        ["path", {
            d: "M8 21H5V3h3"
        }]
    ]],
    ph = ["svg", t, [
        ["path", {
            d: "M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z"
        }],
        ["path", {
            d: "M16 8V5c0-1.1.9-2 2-2"
        }],
        ["path", {
            d: "M12 13h4"
        }],
        ["path", {
            d: "M12 18h6a2 2 0 0 1 2 2v1"
        }],
        ["path", {
            d: "M12 8h8"
        }],
        ["path", {
            d: "M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
        }],
        ["path", {
            d: "M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
        }],
        ["path", {
            d: "M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
        }],
        ["path", {
            d: "M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
        }]
    ]],
    lh = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "3"
        }],
        ["path", {
            d: "M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 12 19.5a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5"
        }],
        ["path", {
            d: "m15.7 10.4-.9.4"
        }],
        ["path", {
            d: "m9.2 13.2-.9.4"
        }],
        ["path", {
            d: "m13.6 15.7-.4-.9"
        }],
        ["path", {
            d: "m10.8 9.2-.4-.9"
        }],
        ["path", {
            d: "m15.7 13.5-.9-.4"
        }],
        ["path", {
            d: "m9.2 10.9-.9-.4"
        }],
        ["path", {
            d: "m10.5 15.7.4-.9"
        }],
        ["path", {
            d: "m13.1 9.2.4-.9"
        }]
    ]],
    vh = ["svg", t, [
        ["path", {
            d: "M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"
        }],
        ["path", {
            d: "M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"
        }]
    ]],
    Mh = ["svg", t, [
        ["rect", {
            width: "20",
            height: "14",
            x: "2",
            y: "7",
            rx: "2",
            ry: "2"
        }],
        ["path", {
            d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
        }]
    ]],
    yh = ["svg", t, [
        ["rect", {
            x: "8",
            y: "8",
            width: "8",
            height: "8",
            rx: "2"
        }],
        ["path", {
            d: "M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"
        }],
        ["path", {
            d: "M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"
        }]
    ]],
    gh = ["svg", t, [
        ["path", {
            d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"
        }],
        ["path", {
            d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"
        }]
    ]],
    uh = ["svg", t, [
        ["path", {
            d: "M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2"
        }],
        ["path", {
            d: "M14.12 3.88 16 2"
        }],
        ["path", {
            d: "M22 13h-4v-2a4 4 0 0 0-4-4h-1.3"
        }],
        ["path", {
            d: "M20.97 5c0 2.1-1.6 3.8-3.5 4"
        }],
        ["path", {
            d: "m2 2 20 20"
        }],
        ["path", {
            d: "M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13"
        }],
        ["path", {
            d: "M12 20v-8"
        }],
        ["path", {
            d: "M6 13H2"
        }],
        ["path", {
            d: "M3 21c0-2.1 1.7-3.9 3.8-4"
        }]
    ]],
    fh = ["svg", t, [
        ["path", {
            d: "m8 2 1.88 1.88"
        }],
        ["path", {
            d: "M14.12 3.88 16 2"
        }],
        ["path", {
            d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"
        }],
        ["path", {
            d: "M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5"
        }],
        ["path", {
            d: "M6.53 9C4.6 8.8 3 7.1 3 5"
        }],
        ["path", {
            d: "M6 13H2"
        }],
        ["path", {
            d: "M3 21c0-2.1 1.7-3.9 3.8-4"
        }],
        ["path", {
            d: "M20.97 5c0 2.1-1.6 3.8-3.5 4"
        }],
        ["path", {
            d: "m12 12 8 5-8 5Z"
        }]
    ]],
    xh = ["svg", t, [
        ["path", {
            d: "m8 2 1.88 1.88"
        }],
        ["path", {
            d: "M14.12 3.88 16 2"
        }],
        ["path", {
            d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"
        }],
        ["path", {
            d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"
        }],
        ["path", {
            d: "M12 20v-9"
        }],
        ["path", {
            d: "M6.53 9C4.6 8.8 3 7.1 3 5"
        }],
        ["path", {
            d: "M6 13H2"
        }],
        ["path", {
            d: "M3 21c0-2.1 1.7-3.9 3.8-4"
        }],
        ["path", {
            d: "M20.97 5c0 2.1-1.6 3.8-3.5 4"
        }],
        ["path", {
            d: "M22 13h-4"
        }],
        ["path", {
            d: "M17.2 17c2.1.1 3.8 1.9 3.8 4"
        }]
    ]],
    mh = ["svg", t, [
        ["path", {
            d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"
        }],
        ["path", {
            d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"
        }],
        ["path", {
            d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"
        }],
        ["path", {
            d: "M10 6h4"
        }],
        ["path", {
            d: "M10 10h4"
        }],
        ["path", {
            d: "M10 14h4"
        }],
        ["path", {
            d: "M10 18h4"
        }]
    ]],
    wh = ["svg", t, [
        ["rect", {
            width: "16",
            height: "20",
            x: "4",
            y: "2",
            rx: "2",
            ry: "2"
        }],
        ["path", {
            d: "M9 22v-4h6v4"
        }],
        ["path", {
            d: "M8 6h.01"
        }],
        ["path", {
            d: "M16 6h.01"
        }],
        ["path", {
            d: "M12 6h.01"
        }],
        ["path", {
            d: "M12 10h.01"
        }],
        ["path", {
            d: "M12 14h.01"
        }],
        ["path", {
            d: "M16 10h.01"
        }],
        ["path", {
            d: "M16 14h.01"
        }],
        ["path", {
            d: "M8 10h.01"
        }],
        ["path", {
            d: "M8 14h.01"
        }]
    ]],
    bh = ["svg", t, [
        ["path", {
            d: "M4 6 2 7"
        }],
        ["path", {
            d: "M10 6h4"
        }],
        ["path", {
            d: "m22 7-2-1"
        }],
        ["rect", {
            width: "16",
            height: "16",
            x: "4",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M4 11h16"
        }],
        ["path", {
            d: "M8 15h.01"
        }],
        ["path", {
            d: "M16 15h.01"
        }],
        ["path", {
            d: "M6 19v2"
        }],
        ["path", {
            d: "M18 21v-2"
        }]
    ]],
    Hh = ["svg", t, [
        ["path", {
            d: "M8 6v6"
        }],
        ["path", {
            d: "M15 6v6"
        }],
        ["path", {
            d: "M2 12h19.6"
        }],
        ["path", {
            d: "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"
        }],
        ["circle", {
            cx: "7",
            cy: "18",
            r: "2"
        }],
        ["path", {
            d: "M9 18h5"
        }],
        ["circle", {
            cx: "16",
            cy: "18",
            r: "2"
        }]
    ]],
    Vh = ["svg", t, [
        ["path", {
            d: "M10 3h.01"
        }],
        ["path", {
            d: "M14 2h.01"
        }],
        ["path", {
            d: "m2 9 20-5"
        }],
        ["path", {
            d: "M12 12V6.5"
        }],
        ["rect", {
            width: "16",
            height: "10",
            x: "4",
            y: "12",
            rx: "3"
        }],
        ["path", {
            d: "M9 12v5"
        }],
        ["path", {
            d: "M15 12v5"
        }],
        ["path", {
            d: "M4 17h16"
        }]
    ]],
    Lh = ["svg", t, [
        ["path", {
            d: "M4 9a2 2 0 0 1-2-2V5h6v2a2 2 0 0 1-2 2Z"
        }],
        ["path", {
            d: "M3 5V3"
        }],
        ["path", {
            d: "M7 5V3"
        }],
        ["path", {
            d: "M19 15V6.5a3.5 3.5 0 0 0-7 0v11a3.5 3.5 0 0 1-7 0V9"
        }],
        ["path", {
            d: "M17 21v-2"
        }],
        ["path", {
            d: "M21 21v-2"
        }],
        ["path", {
            d: "M22 19h-6v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z"
        }]
    ]],
    Sh = ["svg", t, [
        ["circle", {
            cx: "9",
            cy: "7",
            r: "2"
        }],
        ["path", {
            d: "M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6"
        }],
        ["path", {
            d: "M16 13H3"
        }],
        ["path", {
            d: "M16 17H3"
        }]
    ]],
    Ah = ["svg", t, [
        ["path", {
            d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"
        }],
        ["path", {
            d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"
        }],
        ["path", {
            d: "M2 21h20"
        }],
        ["path", {
            d: "M7 8v2"
        }],
        ["path", {
            d: "M12 8v2"
        }],
        ["path", {
            d: "M17 8v2"
        }],
        ["path", {
            d: "M7 4h.01"
        }],
        ["path", {
            d: "M12 4h.01"
        }],
        ["path", {
            d: "M17 4h.01"
        }]
    ]],
    Ch = ["svg", t, [
        ["rect", {
            width: "16",
            height: "20",
            x: "4",
            y: "2",
            rx: "2"
        }],
        ["line", {
            x1: "8",
            x2: "16",
            y1: "6",
            y2: "6"
        }],
        ["line", {
            x1: "16",
            x2: "16",
            y1: "14",
            y2: "18"
        }],
        ["path", {
            d: "M16 10h.01"
        }],
        ["path", {
            d: "M12 10h.01"
        }],
        ["path", {
            d: "M8 10h.01"
        }],
        ["path", {
            d: "M12 14h.01"
        }],
        ["path", {
            d: "M8 14h.01"
        }],
        ["path", {
            d: "M12 18h.01"
        }],
        ["path", {
            d: "M8 18h.01"
        }]
    ]],
    Oh = ["svg", t, [
        ["path", {
            d: "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"
        }],
        ["line", {
            x1: "16",
            x2: "16",
            y1: "2",
            y2: "6"
        }],
        ["line", {
            x1: "8",
            x2: "8",
            y1: "2",
            y2: "6"
        }],
        ["line", {
            x1: "3",
            x2: "21",
            y1: "10",
            y2: "10"
        }],
        ["path", {
            d: "m16 20 2 2 4-4"
        }]
    ]],
    Eh = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            ry: "2"
        }],
        ["line", {
            x1: "16",
            x2: "16",
            y1: "2",
            y2: "6"
        }],
        ["line", {
            x1: "8",
            x2: "8",
            y1: "2",
            y2: "6"
        }],
        ["line", {
            x1: "3",
            x2: "21",
            y1: "10",
            y2: "10"
        }],
        ["path", {
            d: "m9 16 2 2 4-4"
        }]
    ]],
    kh = ["svg", t, [
        ["path", {
            d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"
        }],
        ["path", {
            d: "M16 2v4"
        }],
        ["path", {
            d: "M8 2v4"
        }],
        ["path", {
            d: "M3 10h5"
        }],
        ["path", {
            d: "M17.5 17.5 16 16.25V14"
        }],
        ["path", {
            d: "M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
        }]
    ]],
    Ph = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            ry: "2"
        }],
        ["line", {
            x1: "16",
            x2: "16",
            y1: "2",
            y2: "6"
        }],
        ["line", {
            x1: "8",
            x2: "8",
            y1: "2",
            y2: "6"
        }],
        ["line", {
            x1: "3",
            x2: "21",
            y1: "10",
            y2: "10"
        }],
        ["path", {
            d: "M8 14h.01"
        }],
        ["path", {
            d: "M12 14h.01"
        }],
        ["path", {
            d: "M16 14h.01"
        }],
        ["path", {
            d: "M8 18h.01"
        }],
        ["path", {
            d: "M12 18h.01"
        }],
        ["path", {
            d: "M16 18h.01"
        }]
    ]],
    Zh = ["svg", t, [
        ["path", {
            d: "M21 10V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7"
        }],
        ["path", {
            d: "M16 2v4"
        }],
        ["path", {
            d: "M8 2v4"
        }],
        ["path", {
            d: "M3 10h18"
        }],
        ["path", {
            d: "M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"
        }]
    ]],
    Th = ["svg", t, [
        ["path", {
            d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"
        }],
        ["line", {
            x1: "16",
            x2: "16",
            y1: "2",
            y2: "6"
        }],
        ["line", {
            x1: "8",
            x2: "8",
            y1: "2",
            y2: "6"
        }],
        ["line", {
            x1: "3",
            x2: "21",
            y1: "10",
            y2: "10"
        }],
        ["line", {
            x1: "16",
            x2: "22",
            y1: "19",
            y2: "19"
        }]
    ]],
    zh = ["svg", t, [
        ["path", {
            d: "M4.18 4.18A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"
        }],
        ["path", {
            d: "M21 15.5V6a2 2 0 0 0-2-2H9.5"
        }],
        ["path", {
            d: "M16 2v4"
        }],
        ["path", {
            d: "M3 10h7"
        }],
        ["path", {
            d: "M21 10h-5.5"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }]
    ]],
    Dh = ["svg", t, [
        ["path", {
            d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"
        }],
        ["line", {
            x1: "16",
            x2: "16",
            y1: "2",
            y2: "6"
        }],
        ["line", {
            x1: "8",
            x2: "8",
            y1: "2",
            y2: "6"
        }],
        ["line", {
            x1: "3",
            x2: "21",
            y1: "10",
            y2: "10"
        }],
        ["line", {
            x1: "19",
            x2: "19",
            y1: "16",
            y2: "22"
        }],
        ["line", {
            x1: "16",
            x2: "22",
            y1: "19",
            y2: "19"
        }]
    ]],
    _h = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            ry: "2"
        }],
        ["line", {
            x1: "16",
            x2: "16",
            y1: "2",
            y2: "6"
        }],
        ["line", {
            x1: "8",
            x2: "8",
            y1: "2",
            y2: "6"
        }],
        ["line", {
            x1: "3",
            x2: "21",
            y1: "10",
            y2: "10"
        }],
        ["path", {
            d: "M17 14h-6"
        }],
        ["path", {
            d: "M13 18H7"
        }],
        ["path", {
            d: "M7 14h.01"
        }],
        ["path", {
            d: "M17 18h.01"
        }]
    ]],
    Bh = ["svg", t, [
        ["path", {
            d: "M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7.5"
        }],
        ["path", {
            d: "M16 2v4"
        }],
        ["path", {
            d: "M8 2v4"
        }],
        ["path", {
            d: "M3 10h18"
        }],
        ["path", {
            d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z"
        }],
        ["path", {
            d: "m22 22-1.5-1.5"
        }]
    ]],
    Rh = ["svg", t, [
        ["path", {
            d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"
        }],
        ["line", {
            x1: "16",
            x2: "16",
            y1: "2",
            y2: "6"
        }],
        ["line", {
            x1: "8",
            x2: "8",
            y1: "2",
            y2: "6"
        }],
        ["line", {
            x1: "3",
            x2: "21",
            y1: "10",
            y2: "10"
        }],
        ["line", {
            x1: "17",
            x2: "22",
            y1: "17",
            y2: "22"
        }],
        ["line", {
            x1: "17",
            x2: "22",
            y1: "22",
            y2: "17"
        }]
    ]],
    Fh = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            ry: "2"
        }],
        ["line", {
            x1: "16",
            x2: "16",
            y1: "2",
            y2: "6"
        }],
        ["line", {
            x1: "8",
            x2: "8",
            y1: "2",
            y2: "6"
        }],
        ["line", {
            x1: "3",
            x2: "21",
            y1: "10",
            y2: "10"
        }],
        ["line", {
            x1: "10",
            x2: "14",
            y1: "14",
            y2: "18"
        }],
        ["line", {
            x1: "14",
            x2: "10",
            y1: "14",
            y2: "18"
        }]
    ]],
    jh = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            ry: "2"
        }],
        ["line", {
            x1: "16",
            x2: "16",
            y1: "2",
            y2: "6"
        }],
        ["line", {
            x1: "8",
            x2: "8",
            y1: "2",
            y2: "6"
        }],
        ["line", {
            x1: "3",
            x2: "21",
            y1: "10",
            y2: "10"
        }]
    ]],
    qh = ["svg", t, [
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }],
        ["path", {
            d: "M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16"
        }],
        ["path", {
            d: "M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5"
        }],
        ["path", {
            d: "M14.121 15.121A3 3 0 1 1 9.88 10.88"
        }]
    ]],
    Wh = ["svg", t, [
        ["path", {
            d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
        }],
        ["circle", {
            cx: "12",
            cy: "13",
            r: "3"
        }]
    ]],
    Nh = ["svg", t, [
        ["path", {
            d: "M9 5v4"
        }],
        ["rect", {
            width: "4",
            height: "6",
            x: "7",
            y: "9",
            rx: "1"
        }],
        ["path", {
            d: "M9 15v2"
        }],
        ["path", {
            d: "M17 3v2"
        }],
        ["rect", {
            width: "4",
            height: "8",
            x: "15",
            y: "5",
            rx: "1"
        }],
        ["path", {
            d: "M17 13v3"
        }],
        ["path", {
            d: "M3 3v18h18"
        }]
    ]],
    Ih = ["svg", t, [
        ["path", {
            d: "M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"
        }],
        ["path", {
            d: "M17.75 7 15 2.1"
        }],
        ["path", {
            d: "M10.9 4.8 13 9"
        }],
        ["path", {
            d: "m7.9 9.7 2 4.4"
        }],
        ["path", {
            d: "M4.9 14.7 7 18.9"
        }]
    ]],
    Uh = ["svg", t, [
        ["path", {
            d: "m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1"
        }],
        ["path", {
            d: "M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657"
        }],
        ["path", {
            d: "M14 16.5V14"
        }],
        ["path", {
            d: "M14 6.5v1.843"
        }],
        ["path", {
            d: "M10 10v7.5"
        }],
        ["path", {
            d: "m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1"
        }],
        ["path", {
            d: "m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }]
    ]],
    Gh = ["svg", t, [
        ["path", {
            d: "m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z"
        }],
        ["path", {
            d: "M14 6.5v10"
        }],
        ["path", {
            d: "M10 7.5v10"
        }],
        ["path", {
            d: "m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1"
        }],
        ["path", {
            d: "m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1"
        }]
    ]],
    Xh = ["svg", t, [
        ["path", {
            d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"
        }],
        ["path", {
            d: "M7 14h.01"
        }],
        ["path", {
            d: "M17 14h.01"
        }],
        ["rect", {
            width: "18",
            height: "8",
            x: "3",
            y: "10",
            rx: "2"
        }],
        ["path", {
            d: "M5 18v2"
        }],
        ["path", {
            d: "M19 18v2"
        }]
    ]],
    $h = ["svg", t, [
        ["path", {
            d: "M10 2h4"
        }],
        ["path", {
            d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"
        }],
        ["path", {
            d: "M7 14h.01"
        }],
        ["path", {
            d: "M17 14h.01"
        }],
        ["rect", {
            width: "18",
            height: "8",
            x: "3",
            y: "10",
            rx: "2"
        }],
        ["path", {
            d: "M5 18v2"
        }],
        ["path", {
            d: "M19 18v2"
        }]
    ]],
    Yh = ["svg", t, [
        ["path", {
            d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"
        }],
        ["circle", {
            cx: "7",
            cy: "17",
            r: "2"
        }],
        ["path", {
            d: "M9 17h6"
        }],
        ["circle", {
            cx: "17",
            cy: "17",
            r: "2"
        }]
    ]],
    Kh = ["svg", t, [
        ["path", {
            d: "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"
        }],
        ["path", {
            d: "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"
        }],
        ["path", {
            d: "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"
        }]
    ]],
    Jh = ["svg", t, [
        ["circle", {
            cx: "7",
            cy: "12",
            r: "3"
        }],
        ["path", {
            d: "M10 9v6"
        }],
        ["circle", {
            cx: "17",
            cy: "12",
            r: "3"
        }],
        ["path", {
            d: "M14 7v8"
        }]
    ]],
    Qh = ["svg", t, [
        ["path", {
            d: "m3 15 4-8 4 8"
        }],
        ["path", {
            d: "M4 13h6"
        }],
        ["circle", {
            cx: "18",
            cy: "12",
            r: "3"
        }],
        ["path", {
            d: "M21 9v6"
        }]
    ]],
    tn = ["svg", t, [
        ["path", {
            d: "m3 15 4-8 4 8"
        }],
        ["path", {
            d: "M4 13h6"
        }],
        ["path", {
            d: "M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4"
        }]
    ]],
    an = ["svg", t, [
        ["rect", {
            width: "20",
            height: "16",
            x: "2",
            y: "4",
            rx: "2"
        }],
        ["circle", {
            cx: "8",
            cy: "10",
            r: "2"
        }],
        ["path", {
            d: "M8 12h8"
        }],
        ["circle", {
            cx: "16",
            cy: "10",
            r: "2"
        }],
        ["path", {
            d: "m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3"
        }]
    ]],
    en = ["svg", t, [
        ["path", {
            d: "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
        }],
        ["path", {
            d: "M2 12a9 9 0 0 1 8 8"
        }],
        ["path", {
            d: "M2 16a5 5 0 0 1 4 4"
        }],
        ["line", {
            x1: "2",
            x2: "2.01",
            y1: "20",
            y2: "20"
        }]
    ]],
    hn = ["svg", t, [
        ["path", {
            d: "M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"
        }],
        ["path", {
            d: "M18 11V4H6v7"
        }],
        ["path", {
            d: "M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4"
        }],
        ["path", {
            d: "M22 11V9"
        }],
        ["path", {
            d: "M2 11V9"
        }],
        ["path", {
            d: "M6 4V2"
        }],
        ["path", {
            d: "M18 4V2"
        }],
        ["path", {
            d: "M10 4V2"
        }],
        ["path", {
            d: "M14 4V2"
        }]
    ]],
    nn = ["svg", t, [
        ["path", {
            d: "M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"
        }],
        ["path", {
            d: "M8 14v.5"
        }],
        ["path", {
            d: "M16 14v.5"
        }],
        ["path", {
            d: "M11.25 16.25h1.5L12 17l-.75-.75Z"
        }]
    ]],
    rn = ["svg", t, [
        ["path", {
            d: "M18 6 7 17l-5-5"
        }],
        ["path", {
            d: "m22 10-7.5 7.5L13 16"
        }]
    ]],
    on = ["svg", t, [
        ["path", {
            d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        }],
        ["path", {
            d: "m9 12 2 2 4-4"
        }]
    ]],
    cn = ["svg", t, [
        ["path", {
            d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
        }],
        ["polyline", {
            points: "22 4 12 14.01 9 11.01"
        }]
    ]],
    sn = ["svg", t, [
        ["polyline", {
            points: "9 11 12 14 22 4"
        }],
        ["path", {
            d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
        }]
    ]],
    dn = ["svg", t, [
        ["polyline", {
            points: "20 6 9 17 4 12"
        }]
    ]],
    pn = ["svg", t, [
        ["path", {
            d: "M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"
        }],
        ["line", {
            x1: "6",
            x2: "18",
            y1: "17",
            y2: "17"
        }]
    ]],
    ln = ["svg", t, [
        ["path", {
            d: "M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"
        }],
        ["path", {
            d: "M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"
        }],
        ["path", {
            d: "M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12"
        }],
        ["path", {
            d: "M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z"
        }]
    ]],
    vn = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "m16 10-4 4-4-4"
        }]
    ]],
    Mn = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "m16 10-4 4-4-4"
        }]
    ]],
    yn = ["svg", t, [
        ["path", {
            d: "m6 9 6 6 6-6"
        }]
    ]],
    gn = ["svg", t, [
        ["path", {
            d: "m17 18-6-6 6-6"
        }],
        ["path", {
            d: "M7 6v12"
        }]
    ]],
    un = ["svg", t, [
        ["path", {
            d: "m7 18 6-6-6-6"
        }],
        ["path", {
            d: "M17 6v12"
        }]
    ]],
    fn = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "m14 16-4-4 4-4"
        }]
    ]],
    xn = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "m14 16-4-4 4-4"
        }]
    ]],
    mn = ["svg", t, [
        ["path", {
            d: "m15 18-6-6 6-6"
        }]
    ]],
    wn = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "m10 8 4 4-4 4"
        }]
    ]],
    bn = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "m10 8 4 4-4 4"
        }]
    ]],
    Hn = ["svg", t, [
        ["path", {
            d: "m9 18 6-6-6-6"
        }]
    ]],
    Vn = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "m8 14 4-4 4 4"
        }]
    ]],
    Ln = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "m8 14 4-4 4 4"
        }]
    ]],
    Sn = ["svg", t, [
        ["path", {
            d: "m18 15-6-6-6 6"
        }]
    ]],
    An = ["svg", t, [
        ["path", {
            d: "m7 20 5-5 5 5"
        }],
        ["path", {
            d: "m7 4 5 5 5-5"
        }]
    ]],
    Cn = ["svg", t, [
        ["path", {
            d: "m7 6 5 5 5-5"
        }],
        ["path", {
            d: "m7 13 5 5 5-5"
        }]
    ]],
    On = ["svg", t, [
        ["path", {
            d: "m9 7-5 5 5 5"
        }],
        ["path", {
            d: "m15 7 5 5-5 5"
        }]
    ]],
    En = ["svg", t, [
        ["path", {
            d: "m11 17-5-5 5-5"
        }],
        ["path", {
            d: "m18 17-5-5 5-5"
        }]
    ]],
    kn = ["svg", t, [
        ["path", {
            d: "m20 17-5-5 5-5"
        }],
        ["path", {
            d: "m4 17 5-5-5-5"
        }]
    ]],
    Pn = ["svg", t, [
        ["path", {
            d: "m6 17 5-5-5-5"
        }],
        ["path", {
            d: "m13 17 5-5-5-5"
        }]
    ]],
    Zn = ["svg", t, [
        ["path", {
            d: "m7 15 5 5 5-5"
        }],
        ["path", {
            d: "m7 9 5-5 5 5"
        }]
    ]],
    Tn = ["svg", t, [
        ["path", {
            d: "m17 11-5-5-5 5"
        }],
        ["path", {
            d: "m17 18-5-5-5 5"
        }]
    ]],
    zn = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "4"
        }],
        ["line", {
            x1: "21.17",
            x2: "12",
            y1: "8",
            y2: "8"
        }],
        ["line", {
            x1: "3.95",
            x2: "8.54",
            y1: "6.06",
            y2: "14"
        }],
        ["line", {
            x1: "10.88",
            x2: "15.46",
            y1: "21.94",
            y2: "14"
        }]
    ]],
    Dn = ["svg", t, [
        ["path", {
            d: "m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2"
        }],
        ["path", {
            d: "M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"
        }],
        ["path", {
            d: "M18 22V5l-6-3-6 3v17"
        }],
        ["path", {
            d: "M12 7v5"
        }],
        ["path", {
            d: "M10 9h4"
        }]
    ]],
    _n = ["svg", t, [
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }],
        ["path", {
            d: "M12 12H2v4h14"
        }],
        ["path", {
            d: "M22 12v4"
        }],
        ["path", {
            d: "M18 12h-.5"
        }],
        ["path", {
            d: "M7 12v4"
        }],
        ["path", {
            d: "M18 8c0-2.5-2-2.5-2-5"
        }],
        ["path", {
            d: "M22 8c0-2.5-2-2.5-2-5"
        }]
    ]],
    Bn = ["svg", t, [
        ["path", {
            d: "M18 12H2v4h16"
        }],
        ["path", {
            d: "M22 12v4"
        }],
        ["path", {
            d: "M7 12v4"
        }],
        ["path", {
            d: "M18 8c0-2.5-2-2.5-2-5"
        }],
        ["path", {
            d: "M22 8c0-2.5-2-2.5-2-5"
        }]
    ]],
    Rn = ["svg", t, [
        ["path", {
            d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0"
        }],
        ["path", {
            d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"
        }],
        ["path", {
            d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8"
        }],
        ["path", {
            d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"
        }],
        ["path", {
            d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0"
        }],
        ["path", {
            d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"
        }],
        ["path", {
            d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8"
        }],
        ["path", {
            d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"
        }]
    ]],
    Fn = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"
        }],
        ["path", {
            d: "M12 18V6"
        }]
    ]],
    jn = ["svg", t, [
        ["path", {
            d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0"
        }],
        ["path", {
            d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"
        }],
        ["path", {
            d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8"
        }],
        ["path", {
            d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"
        }],
        ["path", {
            d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0"
        }],
        ["path", {
            d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"
        }],
        ["path", {
            d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8"
        }],
        ["path", {
            d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "1"
        }]
    ]],
    qn = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "1"
        }]
    ]],
    Wn = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "M17 12h.01"
        }],
        ["path", {
            d: "M12 12h.01"
        }],
        ["path", {
            d: "M7 12h.01"
        }]
    ]],
    Nn = ["svg", t, [
        ["path", {
            d: "M7 10h10"
        }],
        ["path", {
            d: "M7 14h10"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }]
    ]],
    In = ["svg", t, [
        ["path", {
            d: "m2 2 20 20"
        }],
        ["path", {
            d: "M8.35 2.69A10 10 0 0 1 21.3 15.65"
        }],
        ["path", {
            d: "M19.08 19.08A10 10 0 1 1 4.92 4.92"
        }]
    ]],
    Un = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "M22 2 2 22"
        }]
    ]],
    Gn = ["svg", t, [
        ["line", {
            x1: "9",
            x2: "15",
            y1: "15",
            y2: "9"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }]
    ]],
    Xn = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }]
    ]],
    $n = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M11 9h4a2 2 0 0 0 2-2V3"
        }],
        ["circle", {
            cx: "9",
            cy: "9",
            r: "2"
        }],
        ["path", {
            d: "M7 21v-4a2 2 0 0 1 2-2h4"
        }],
        ["circle", {
            cx: "15",
            cy: "15",
            r: "2"
        }]
    ]],
    Yn = ["svg", t, [
        ["path", {
            d: "M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"
        }],
        ["path", {
            d: "M19.65 15.66A8 8 0 0 1 8.35 4.34"
        }],
        ["path", {
            d: "m14 10-5.5 5.5"
        }],
        ["path", {
            d: "M14 17.85V10H6.15"
        }]
    ]],
    Kn = ["svg", t, [
        ["path", {
            d: "M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8H4Z"
        }],
        ["path", {
            d: "m4 11-.88-2.87a2 2 0 0 1 1.33-2.5l11.48-3.5a2 2 0 0 1 2.5 1.32l.87 2.87L4 11.01Z"
        }],
        ["path", {
            d: "m6.6 4.99 3.38 4.2"
        }],
        ["path", {
            d: "m11.86 3.38 3.38 4.2"
        }]
    ]],
    Jn = ["svg", t, [
        ["rect", {
            width: "8",
            height: "4",
            x: "8",
            y: "2",
            rx: "1",
            ry: "1"
        }],
        ["path", {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
        }],
        ["path", {
            d: "m9 14 2 2 4-4"
        }]
    ]],
    Qn = ["svg", t, [
        ["rect", {
            width: "8",
            height: "4",
            x: "8",
            y: "2",
            rx: "1",
            ry: "1"
        }],
        ["path", {
            d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
        }],
        ["path", {
            d: "M16 4h2a2 2 0 0 1 2 2v4"
        }],
        ["path", {
            d: "M21 14H11"
        }],
        ["path", {
            d: "m15 10-4 4 4 4"
        }]
    ]],
    tr = ["svg", t, [
        ["rect", {
            width: "8",
            height: "4",
            x: "8",
            y: "2",
            rx: "1",
            ry: "1"
        }],
        ["path", {
            d: "M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"
        }],
        ["path", {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5"
        }],
        ["path", {
            d: "M4 13.5V6a2 2 0 0 1 2-2h2"
        }]
    ]],
    ar = ["svg", t, [
        ["rect", {
            width: "8",
            height: "4",
            x: "8",
            y: "2",
            rx: "1",
            ry: "1"
        }],
        ["path", {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
        }],
        ["path", {
            d: "M12 11h4"
        }],
        ["path", {
            d: "M12 16h4"
        }],
        ["path", {
            d: "M8 11h.01"
        }],
        ["path", {
            d: "M8 16h.01"
        }]
    ]],
    er = ["svg", t, [
        ["path", {
            d: "M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"
        }],
        ["path", {
            d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10"
        }],
        ["path", {
            d: "m17 10 4 4-4 4"
        }]
    ]],
    hr = ["svg", t, [
        ["rect", {
            width: "8",
            height: "4",
            x: "8",
            y: "2",
            rx: "1",
            ry: "1"
        }],
        ["path", {
            d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"
        }],
        ["path", {
            d: "M16 4h2a2 2 0 0 1 1.73 1"
        }],
        ["path", {
            d: "M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z"
        }],
        ["path", {
            d: "M8 18h1"
        }]
    ]],
    nr = ["svg", t, [
        ["rect", {
            width: "8",
            height: "4",
            x: "8",
            y: "2",
            rx: "1",
            ry: "1"
        }],
        ["path", {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
        }],
        ["path", {
            d: "M9 12v-1h6v1"
        }],
        ["path", {
            d: "M11 17h2"
        }],
        ["path", {
            d: "M12 11v6"
        }]
    ]],
    rr = ["svg", t, [
        ["rect", {
            width: "8",
            height: "4",
            x: "8",
            y: "2",
            rx: "1",
            ry: "1"
        }],
        ["path", {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
        }],
        ["path", {
            d: "m15 11-6 6"
        }],
        ["path", {
            d: "m9 11 6 6"
        }]
    ]],
    or = ["svg", t, [
        ["rect", {
            width: "8",
            height: "4",
            x: "8",
            y: "2",
            rx: "1",
            ry: "1"
        }],
        ["path", {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
        }]
    ]],
    cr = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["polyline", {
            points: "12 6 12 12 14.5 8"
        }]
    ]],
    sr = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["polyline", {
            points: "12 6 12 12 8 10"
        }]
    ]],
    ir = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["polyline", {
            points: "12 6 12 12 9.5 8"
        }]
    ]],
    dr = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["polyline", {
            points: "12 6 12 12"
        }]
    ]],
    pr = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["polyline", {
            points: "12 6 12 12 16 10"
        }]
    ]],
    lr = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["polyline", {
            points: "12 6 12 12 16.5 12"
        }]
    ]],
    vr = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["polyline", {
            points: "12 6 12 12 16 14"
        }]
    ]],
    Mr = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["polyline", {
            points: "12 6 12 12 14.5 16"
        }]
    ]],
    yr = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["polyline", {
            points: "12 6 12 12 12 16.5"
        }]
    ]],
    gr = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["polyline", {
            points: "12 6 12 12 9.5 16"
        }]
    ]],
    ur = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["polyline", {
            points: "12 6 12 12 8 14"
        }]
    ]],
    fr = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["polyline", {
            points: "12 6 12 12 7.5 12"
        }]
    ]],
    xr = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["polyline", {
            points: "12 6 12 12 16 14"
        }]
    ]],
    mr = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "17",
            r: "3"
        }],
        ["path", {
            d: "M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"
        }],
        ["path", {
            d: "m15.7 18.4-.9-.3"
        }],
        ["path", {
            d: "m9.2 15.9-.9-.3"
        }],
        ["path", {
            d: "m10.6 20.7.3-.9"
        }],
        ["path", {
            d: "m13.1 14.2.3-.9"
        }],
        ["path", {
            d: "m13.6 20.7-.4-1"
        }],
        ["path", {
            d: "m10.8 14.3-.4-1"
        }],
        ["path", {
            d: "m8.3 18.6 1-.4"
        }],
        ["path", {
            d: "m14.7 15.8 1-.4"
        }]
    ]],
    wr = ["svg", t, [
        ["path", {
            d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
        }],
        ["path", {
            d: "M8 19v1"
        }],
        ["path", {
            d: "M8 14v1"
        }],
        ["path", {
            d: "M16 19v1"
        }],
        ["path", {
            d: "M16 14v1"
        }],
        ["path", {
            d: "M12 21v1"
        }],
        ["path", {
            d: "M12 16v1"
        }]
    ]],
    br = ["svg", t, [
        ["path", {
            d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
        }],
        ["path", {
            d: "M16 17H7"
        }],
        ["path", {
            d: "M17 21H9"
        }]
    ]],
    Hr = ["svg", t, [
        ["path", {
            d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
        }],
        ["path", {
            d: "M16 14v2"
        }],
        ["path", {
            d: "M8 14v2"
        }],
        ["path", {
            d: "M16 20h.01"
        }],
        ["path", {
            d: "M8 20h.01"
        }],
        ["path", {
            d: "M12 16v2"
        }],
        ["path", {
            d: "M12 22h.01"
        }]
    ]],
    Vr = ["svg", t, [
        ["path", {
            d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"
        }],
        ["path", {
            d: "m13 12-3 5h4l-3 5"
        }]
    ]],
    Lr = ["svg", t, [
        ["path", {
            d: "M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197"
        }],
        ["path", {
            d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"
        }],
        ["path", {
            d: "M11 20v2"
        }],
        ["path", {
            d: "M7 19v2"
        }]
    ]],
    Sr = ["svg", t, [
        ["path", {
            d: "M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z"
        }],
        ["path", {
            d: "M10.1 9A6 6 0 0 1 16 4a4.24 4.24 0 0 0 6 6 6 6 0 0 1-3 5.197"
        }]
    ]],
    Ar = ["svg", t, [
        ["path", {
            d: "m2 2 20 20"
        }],
        ["path", {
            d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193"
        }],
        ["path", {
            d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"
        }]
    ]],
    Cr = ["svg", t, [
        ["path", {
            d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
        }],
        ["path", {
            d: "m9.2 22 3-7"
        }],
        ["path", {
            d: "m9 13-3 7"
        }],
        ["path", {
            d: "m17 13-3 7"
        }]
    ]],
    Or = ["svg", t, [
        ["path", {
            d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
        }],
        ["path", {
            d: "M16 14v6"
        }],
        ["path", {
            d: "M8 14v6"
        }],
        ["path", {
            d: "M12 16v6"
        }]
    ]],
    Er = ["svg", t, [
        ["path", {
            d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
        }],
        ["path", {
            d: "M8 15h.01"
        }],
        ["path", {
            d: "M8 19h.01"
        }],
        ["path", {
            d: "M12 17h.01"
        }],
        ["path", {
            d: "M12 21h.01"
        }],
        ["path", {
            d: "M16 15h.01"
        }],
        ["path", {
            d: "M16 19h.01"
        }]
    ]],
    kr = ["svg", t, [
        ["path", {
            d: "M12 2v2"
        }],
        ["path", {
            d: "m4.93 4.93 1.41 1.41"
        }],
        ["path", {
            d: "M20 12h2"
        }],
        ["path", {
            d: "m19.07 4.93-1.41 1.41"
        }],
        ["path", {
            d: "M15.947 12.65a4 4 0 0 0-5.925-4.128"
        }],
        ["path", {
            d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"
        }],
        ["path", {
            d: "M11 20v2"
        }],
        ["path", {
            d: "M7 19v2"
        }]
    ]],
    Pr = ["svg", t, [
        ["path", {
            d: "M12 2v2"
        }],
        ["path", {
            d: "m4.93 4.93 1.41 1.41"
        }],
        ["path", {
            d: "M20 12h2"
        }],
        ["path", {
            d: "m19.07 4.93-1.41 1.41"
        }],
        ["path", {
            d: "M15.947 12.65a4 4 0 0 0-5.925-4.128"
        }],
        ["path", {
            d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"
        }]
    ]],
    Zr = ["svg", t, [
        ["path", {
            d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
        }]
    ]],
    Tr = ["svg", t, [
        ["path", {
            d: "M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
        }],
        ["path", {
            d: "M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5"
        }]
    ]],
    zr = ["svg", t, [
        ["path", {
            d: "M16.2 3.8a2.7 2.7 0 0 0-3.81 0l-.4.38-.4-.4a2.7 2.7 0 0 0-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z"
        }],
        ["path", {
            d: "M8 8c-1.36-1.33-3.15-1.27-4.2-.2a2.7 2.7 0 0 0 0 3.81l.38.4-.4.4a2.7 2.7 0 0 0 0 3.82C4.85 17.27 6.64 17.33 8 16"
        }],
        ["path", {
            d: "M16 16c1.36 1.33 3.15 1.27 4.2.2a2.7 2.7 0 0 0 0-3.81l-.38-.4.4-.4a2.7 2.7 0 0 0 0-3.82C19.15 6.73 17.36 6.67 16 8"
        }],
        ["path", {
            d: "M7.8 20.2a2.7 2.7 0 0 0 3.81 0l.4-.38.4.4a2.7 2.7 0 0 0 3.82 0c1.06-1.06 1.12-2.85-.21-4.21l-4-4-4 4c-1.33 1.36-1.27 3.15-.2 4.2z"
        }],
        ["path", {
            d: "m7 17-5 5"
        }]
    ]],
    Dr = ["svg", t, [
        ["path", {
            d: "M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z"
        }],
        ["path", {
            d: "M12 17.66L12 22"
        }]
    ]],
    _r = ["svg", t, [
        ["path", {
            d: "m18 16 4-4-4-4"
        }],
        ["path", {
            d: "m6 8-4 4 4 4"
        }],
        ["path", {
            d: "m14.5 4-5 16"
        }]
    ]],
    Br = ["svg", t, [
        ["polyline", {
            points: "16 18 22 12 16 6"
        }],
        ["polyline", {
            points: "8 6 2 12 8 18"
        }]
    ]],
    Rr = ["svg", t, [
        ["polygon", {
            points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "22",
            y2: "15.5"
        }],
        ["polyline", {
            points: "22 8.5 12 15.5 2 8.5"
        }],
        ["polyline", {
            points: "2 15.5 12 8.5 22 15.5"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "2",
            y2: "8.5"
        }]
    ]],
    Fr = ["svg", t, [
        ["path", {
            d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
        }],
        ["polyline", {
            points: "7.5 4.21 12 6.81 16.5 4.21"
        }],
        ["polyline", {
            points: "7.5 19.79 7.5 14.6 3 12"
        }],
        ["polyline", {
            points: "21 12 16.5 14.6 16.5 19.79"
        }],
        ["polyline", {
            points: "3.27 6.96 12 12.01 20.73 6.96"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "22.08",
            y2: "12"
        }]
    ]],
    jr = ["svg", t, [
        ["path", {
            d: "M17 8h1a4 4 0 1 1 0 8h-1"
        }],
        ["path", {
            d: "M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"
        }],
        ["line", {
            x1: "6",
            x2: "6",
            y1: "2",
            y2: "4"
        }],
        ["line", {
            x1: "10",
            x2: "10",
            y1: "2",
            y2: "4"
        }],
        ["line", {
            x1: "14",
            x2: "14",
            y1: "2",
            y2: "4"
        }]
    ]],
    qr = ["svg", t, [
        ["path", {
            d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
        }],
        ["path", {
            d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        }],
        ["path", {
            d: "M12 2v2"
        }],
        ["path", {
            d: "M12 22v-2"
        }],
        ["path", {
            d: "m17 20.66-1-1.73"
        }],
        ["path", {
            d: "M11 10.27 7 3.34"
        }],
        ["path", {
            d: "m20.66 17-1.73-1"
        }],
        ["path", {
            d: "m3.34 7 1.73 1"
        }],
        ["path", {
            d: "M14 12h8"
        }],
        ["path", {
            d: "M2 12h2"
        }],
        ["path", {
            d: "m20.66 7-1.73 1"
        }],
        ["path", {
            d: "m3.34 17 1.73-1"
        }],
        ["path", {
            d: "m17 3.34-1 1.73"
        }],
        ["path", {
            d: "m11 13.73-4 6.93"
        }]
    ]],
    Wr = ["svg", t, [
        ["circle", {
            cx: "8",
            cy: "8",
            r: "6"
        }],
        ["path", {
            d: "M18.09 10.37A6 6 0 1 1 10.34 18"
        }],
        ["path", {
            d: "M7 6h1v4"
        }],
        ["path", {
            d: "m16.71 13.88.7.71-2.82 2.82"
        }]
    ]],
    Nr = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "3",
            y2: "21"
        }]
    ]],
    Ir = ["svg", t, [
        ["rect", {
            width: "8",
            height: "8",
            x: "2",
            y: "2",
            rx: "2"
        }],
        ["path", {
            d: "M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"
        }],
        ["path", {
            d: "M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"
        }],
        ["path", {
            d: "M10 18H5c-1.7 0-3-1.3-3-3v-1"
        }],
        ["polyline", {
            points: "7 21 10 18 7 15"
        }],
        ["rect", {
            width: "8",
            height: "8",
            x: "14",
            y: "14",
            rx: "2"
        }]
    ]],
    Ur = ["svg", t, [
        ["path", {
            d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"
        }]
    ]],
    Gr = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["polygon", {
            points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
        }]
    ]],
    Xr = ["svg", t, [
        ["path", {
            d: "M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"
        }],
        ["path", {
            d: "m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"
        }],
        ["path", {
            d: "M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"
        }],
        ["path", {
            d: "m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"
        }]
    ]],
    $r = ["svg", t, [
        ["rect", {
            width: "14",
            height: "8",
            x: "5",
            y: "2",
            rx: "2"
        }],
        ["rect", {
            width: "20",
            height: "8",
            x: "2",
            y: "14",
            rx: "2"
        }],
        ["path", {
            d: "M6 18h2"
        }],
        ["path", {
            d: "M12 18h6"
        }]
    ]],
    Yr = ["svg", t, [
        ["path", {
            d: "M2 18a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2H2v-2Z"
        }],
        ["path", {
            d: "M20 16a8 8 0 1 0-16 0"
        }],
        ["path", {
            d: "M12 4v4"
        }],
        ["path", {
            d: "M10 4h4"
        }]
    ]],
    Kr = ["svg", t, [
        ["rect", {
            x: "2",
            y: "6",
            width: "20",
            height: "8",
            rx: "1"
        }],
        ["path", {
            d: "M17 14v7"
        }],
        ["path", {
            d: "M7 14v7"
        }],
        ["path", {
            d: "M17 3v3"
        }],
        ["path", {
            d: "M7 3v3"
        }],
        ["path", {
            d: "M10 14 2.3 6.3"
        }],
        ["path", {
            d: "m14 6 7.7 7.7"
        }],
        ["path", {
            d: "m8 6 8 8"
        }]
    ]],
    Jr = ["svg", t, [
        ["path", {
            d: "M16 18a4 4 0 0 0-8 0"
        }],
        ["circle", {
            cx: "12",
            cy: "11",
            r: "3"
        }],
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2"
        }],
        ["line", {
            x1: "8",
            x2: "8",
            y1: "2",
            y2: "4"
        }],
        ["line", {
            x1: "16",
            x2: "16",
            y1: "2",
            y2: "4"
        }]
    ]],
    Qr = ["svg", t, [
        ["path", {
            d: "M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"
        }],
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2"
        }],
        ["circle", {
            cx: "12",
            cy: "10",
            r: "2"
        }],
        ["line", {
            x1: "8",
            x2: "8",
            y1: "2",
            y2: "4"
        }],
        ["line", {
            x1: "16",
            x2: "16",
            y1: "2",
            y2: "4"
        }]
    ]],
    to = ["svg", t, [
        ["path", {
            d: "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"
        }],
        ["path", {
            d: "M10 21.9V14L2.1 9.1"
        }],
        ["path", {
            d: "m10 14 11.9-6.9"
        }],
        ["path", {
            d: "M14 19.8v-8.1"
        }],
        ["path", {
            d: "M18 17.5V9.4"
        }]
    ]],
    ao = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "M12 18a6 6 0 0 0 0-12v12z"
        }]
    ]],
    eo = ["svg", t, [
        ["path", {
            d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"
        }],
        ["path", {
            d: "M8.5 8.5v.01"
        }],
        ["path", {
            d: "M16 15.5v.01"
        }],
        ["path", {
            d: "M12 12v.01"
        }],
        ["path", {
            d: "M11 17v.01"
        }],
        ["path", {
            d: "M7 14v.01"
        }]
    ]],
    ho = ["svg", t, [
        ["path", {
            d: "m12 15 2 2 4-4"
        }],
        ["rect", {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2"
        }],
        ["path", {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
        }]
    ]],
    no = ["svg", t, [
        ["line", {
            x1: "12",
            x2: "18",
            y1: "15",
            y2: "15"
        }],
        ["rect", {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2"
        }],
        ["path", {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
        }]
    ]],
    ro = ["svg", t, [
        ["line", {
            x1: "15",
            x2: "15",
            y1: "12",
            y2: "18"
        }],
        ["line", {
            x1: "12",
            x2: "18",
            y1: "15",
            y2: "15"
        }],
        ["rect", {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2"
        }],
        ["path", {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
        }]
    ]],
    oo = ["svg", t, [
        ["line", {
            x1: "12",
            x2: "18",
            y1: "18",
            y2: "12"
        }],
        ["rect", {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2"
        }],
        ["path", {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
        }]
    ]],
    co = ["svg", t, [
        ["line", {
            x1: "12",
            x2: "18",
            y1: "12",
            y2: "18"
        }],
        ["line", {
            x1: "12",
            x2: "18",
            y1: "18",
            y2: "12"
        }],
        ["rect", {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2"
        }],
        ["path", {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
        }]
    ]],
    so = ["svg", t, [
        ["rect", {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2"
        }],
        ["path", {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
        }]
    ]],
    io = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "M9 9.35a4 4 0 1 1 0 5.3"
        }]
    ]],
    po = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "M15 9.354a4 4 0 1 0 0 5.292"
        }]
    ]],
    lo = ["svg", t, [
        ["polyline", {
            points: "9 10 4 15 9 20"
        }],
        ["path", {
            d: "M20 4v7a4 4 0 0 1-4 4H4"
        }]
    ]],
    vo = ["svg", t, [
        ["polyline", {
            points: "15 10 20 15 15 20"
        }],
        ["path", {
            d: "M4 4v7a4 4 0 0 0 4 4h12"
        }]
    ]],
    Mo = ["svg", t, [
        ["polyline", {
            points: "14 15 9 20 4 15"
        }],
        ["path", {
            d: "M20 4h-7a4 4 0 0 0-4 4v12"
        }]
    ]],
    yo = ["svg", t, [
        ["polyline", {
            points: "14 9 9 4 4 9"
        }],
        ["path", {
            d: "M20 20h-7a4 4 0 0 1-4-4V4"
        }]
    ]],
    go = ["svg", t, [
        ["polyline", {
            points: "10 15 15 20 20 15"
        }],
        ["path", {
            d: "M4 4h7a4 4 0 0 1 4 4v12"
        }]
    ]],
    uo = ["svg", t, [
        ["polyline", {
            points: "10 9 15 4 20 9"
        }],
        ["path", {
            d: "M4 20h7a4 4 0 0 0 4-4V4"
        }]
    ]],
    fo = ["svg", t, [
        ["polyline", {
            points: "9 14 4 9 9 4"
        }],
        ["path", {
            d: "M20 20v-7a4 4 0 0 0-4-4H4"
        }]
    ]],
    xo = ["svg", t, [
        ["polyline", {
            points: "15 14 20 9 15 4"
        }],
        ["path", {
            d: "M4 20v-7a4 4 0 0 1 4-4h12"
        }]
    ]],
    mo = ["svg", t, [
        ["rect", {
            x: "4",
            y: "4",
            width: "16",
            height: "16",
            rx: "2"
        }],
        ["rect", {
            x: "9",
            y: "9",
            width: "6",
            height: "6"
        }],
        ["path", {
            d: "M15 2v2"
        }],
        ["path", {
            d: "M15 20v2"
        }],
        ["path", {
            d: "M2 15h2"
        }],
        ["path", {
            d: "M2 9h2"
        }],
        ["path", {
            d: "M20 15h2"
        }],
        ["path", {
            d: "M20 9h2"
        }],
        ["path", {
            d: "M9 2v2"
        }],
        ["path", {
            d: "M9 20v2"
        }]
    ]],
    wo = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"
        }],
        ["path", {
            d: "M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"
        }]
    ]],
    bo = ["svg", t, [
        ["rect", {
            width: "20",
            height: "14",
            x: "2",
            y: "5",
            rx: "2"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "10",
            y2: "10"
        }]
    ]],
    Ho = ["svg", t, [
        ["path", {
            d: "m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z"
        }],
        ["path", {
            d: "m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83"
        }],
        ["path", {
            d: "M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4"
        }],
        ["path", {
            d: "m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2"
        }],
        ["path", {
            d: "M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5"
        }]
    ]],
    Vo = ["svg", t, [
        ["path", {
            d: "M6 2v14a2 2 0 0 0 2 2h14"
        }],
        ["path", {
            d: "M18 22V8a2 2 0 0 0-2-2H2"
        }]
    ]],
    Lo = ["svg", t, [
        ["path", {
            d: "M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"
        }]
    ]],
    So = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["line", {
            x1: "22",
            x2: "18",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "6",
            x2: "2",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "6",
            y2: "2"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "22",
            y2: "18"
        }]
    ]],
    Ao = ["svg", t, [
        ["path", {
            d: "m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"
        }]
    ]],
    Co = ["svg", t, [
        ["path", {
            d: "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"
        }],
        ["path", {
            d: "M5 8h14"
        }],
        ["path", {
            d: "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"
        }],
        ["path", {
            d: "m12 8 1-6h2"
        }]
    ]],
    Oo = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "8"
        }],
        ["line", {
            x1: "3",
            x2: "6",
            y1: "3",
            y2: "6"
        }],
        ["line", {
            x1: "21",
            x2: "18",
            y1: "3",
            y2: "6"
        }],
        ["line", {
            x1: "3",
            x2: "6",
            y1: "21",
            y2: "18"
        }],
        ["line", {
            x1: "21",
            x2: "18",
            y1: "21",
            y2: "18"
        }]
    ]],
    Eo = ["svg", t, [
        ["ellipse", {
            cx: "12",
            cy: "5",
            rx: "9",
            ry: "3"
        }],
        ["path", {
            d: "M3 12a9 3 0 0 0 5 2.69"
        }],
        ["path", {
            d: "M21 9.3V5"
        }],
        ["path", {
            d: "M3 5v14a9 3 0 0 0 6.47 2.88"
        }],
        ["path", {
            d: "M12 12v4h4"
        }],
        ["path", {
            d: "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"
        }]
    ]],
    ko = ["svg", t, [
        ["ellipse", {
            cx: "12",
            cy: "5",
            rx: "9",
            ry: "3"
        }],
        ["path", {
            d: "M3 5V19A9 3 0 0 0 15 21.84"
        }],
        ["path", {
            d: "M21 5V8"
        }],
        ["path", {
            d: "M21 12L18 17H22L19 22"
        }],
        ["path", {
            d: "M3 12A9 3 0 0 0 14.59 14.87"
        }]
    ]],
    Po = ["svg", t, [
        ["ellipse", {
            cx: "12",
            cy: "5",
            rx: "9",
            ry: "3"
        }],
        ["path", {
            d: "M3 5V19A9 3 0 0 0 21 19V5"
        }],
        ["path", {
            d: "M3 12A9 3 0 0 0 21 12"
        }]
    ]],
    Zo = ["svg", t, [
        ["path", {
            d: "M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"
        }],
        ["line", {
            x1: "18",
            x2: "12",
            y1: "9",
            y2: "15"
        }],
        ["line", {
            x1: "12",
            x2: "18",
            y1: "9",
            y2: "15"
        }]
    ]],
    To = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "4",
            r: "2"
        }],
        ["path", {
            d: "M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8"
        }],
        ["path", {
            d: "M3.2 14.8a9 9 0 0 0 17.6 0"
        }]
    ]],
    zo = ["svg", t, [
        ["path", {
            d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"
        }]
    ]],
    Do = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }],
        ["path", {
            d: "M12 12h.01"
        }]
    ]],
    _o = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }],
        ["path", {
            d: "M15 9h.01"
        }],
        ["path", {
            d: "M9 15h.01"
        }]
    ]],
    Bo = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }],
        ["path", {
            d: "M16 8h.01"
        }],
        ["path", {
            d: "M12 12h.01"
        }],
        ["path", {
            d: "M8 16h.01"
        }]
    ]],
    Ro = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }],
        ["path", {
            d: "M16 8h.01"
        }],
        ["path", {
            d: "M8 8h.01"
        }],
        ["path", {
            d: "M8 16h.01"
        }],
        ["path", {
            d: "M16 16h.01"
        }]
    ]],
    Fo = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }],
        ["path", {
            d: "M16 8h.01"
        }],
        ["path", {
            d: "M8 8h.01"
        }],
        ["path", {
            d: "M8 16h.01"
        }],
        ["path", {
            d: "M16 16h.01"
        }],
        ["path", {
            d: "M12 12h.01"
        }]
    ]],
    jo = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }],
        ["path", {
            d: "M16 8h.01"
        }],
        ["path", {
            d: "M16 12h.01"
        }],
        ["path", {
            d: "M16 16h.01"
        }],
        ["path", {
            d: "M8 8h.01"
        }],
        ["path", {
            d: "M8 12h.01"
        }],
        ["path", {
            d: "M8 16h.01"
        }]
    ]],
    qo = ["svg", t, [
        ["rect", {
            width: "12",
            height: "12",
            x: "2",
            y: "10",
            rx: "2",
            ry: "2"
        }],
        ["path", {
            d: "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"
        }],
        ["path", {
            d: "M6 18h.01"
        }],
        ["path", {
            d: "M10 14h.01"
        }],
        ["path", {
            d: "M15 6h.01"
        }],
        ["path", {
            d: "M18 9h.01"
        }]
    ]],
    Wo = ["svg", t, [
        ["path", {
            d: "M12 3v14"
        }],
        ["path", {
            d: "M5 10h14"
        }],
        ["path", {
            d: "M5 21h14"
        }]
    ]],
    No = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "4"
        }],
        ["path", {
            d: "M12 12h.01"
        }]
    ]],
    Io = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "M6 12c0-1.7.7-3.2 1.8-4.2"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "2"
        }],
        ["path", {
            d: "M18 12c0 1.7-.7 3.2-1.8 4.2"
        }]
    ]],
    Uo = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "2"
        }]
    ]],
    Go = ["svg", t, [
        ["line", {
            x1: "8",
            x2: "16",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "16",
            y2: "16"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "8"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }]
    ]],
    Xo = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }],
        ["line", {
            x1: "8",
            x2: "16",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "16",
            y2: "16"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "8"
        }]
    ]],
    $o = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "6",
            r: "1"
        }],
        ["line", {
            x1: "5",
            x2: "19",
            y1: "12",
            y2: "12"
        }],
        ["circle", {
            cx: "12",
            cy: "18",
            r: "1"
        }]
    ]],
    Yo = ["svg", t, [
        ["path", {
            d: "M15 2c-1.35 1.5-2.092 3-2.5 4.5M9 22c1.35-1.5 2.092-3 2.5-4.5"
        }],
        ["path", {
            d: "M2 15c3.333-3 6.667-3 10-3m10-3c-1.5 1.35-3 2.092-4.5 2.5"
        }],
        ["path", {
            d: "m17 6-2.5-2.5"
        }],
        ["path", {
            d: "m14 8-1.5-1.5"
        }],
        ["path", {
            d: "m7 18 2.5 2.5"
        }],
        ["path", {
            d: "m3.5 14.5.5.5"
        }],
        ["path", {
            d: "m20 9 .5.5"
        }],
        ["path", {
            d: "m6.5 12.5 1 1"
        }],
        ["path", {
            d: "m16.5 10.5 1 1"
        }],
        ["path", {
            d: "m10 16 1.5 1.5"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }]
    ]],
    Ko = ["svg", t, [
        ["path", {
            d: "M2 15c6.667-6 13.333 0 20-6"
        }],
        ["path", {
            d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993"
        }],
        ["path", {
            d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"
        }],
        ["path", {
            d: "m17 6-2.5-2.5"
        }],
        ["path", {
            d: "m14 8-1-1"
        }],
        ["path", {
            d: "m7 18 2.5 2.5"
        }],
        ["path", {
            d: "m3.5 14.5.5.5"
        }],
        ["path", {
            d: "m20 9 .5.5"
        }],
        ["path", {
            d: "m6.5 12.5 1 1"
        }],
        ["path", {
            d: "m16.5 10.5 1 1"
        }],
        ["path", {
            d: "m10 16 1.5 1.5"
        }]
    ]],
    Jo = ["svg", t, [
        ["path", {
            d: "M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"
        }],
        ["path", {
            d: "M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"
        }],
        ["path", {
            d: "M8 14v.5"
        }],
        ["path", {
            d: "M16 14v.5"
        }],
        ["path", {
            d: "M11.25 16.25h1.5L12 17l-.75-.75Z"
        }],
        ["path", {
            d: "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306"
        }]
    ]],
    Qo = ["svg", t, [
        ["line", {
            x1: "12",
            x2: "12",
            y1: "2",
            y2: "22"
        }],
        ["path", {
            d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
        }]
    ]],
    tc = ["svg", t, [
        ["path", {
            d: "M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "3"
        }]
    ]],
    ac = ["svg", t, [
        ["path", {
            d: "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"
        }],
        ["path", {
            d: "M2 20h20"
        }],
        ["path", {
            d: "M14 12v.01"
        }]
    ]],
    ec = ["svg", t, [
        ["path", {
            d: "M13 4h3a2 2 0 0 1 2 2v14"
        }],
        ["path", {
            d: "M2 20h3"
        }],
        ["path", {
            d: "M13 20h9"
        }],
        ["path", {
            d: "M10 12v.01"
        }],
        ["path", {
            d: "M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"
        }]
    ]],
    hc = ["svg", t, [
        ["circle", {
            cx: "12.1",
            cy: "12.1",
            r: "1"
        }]
    ]],
    nc = ["svg", t, [
        ["path", {
            d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
        }],
        ["path", {
            d: "M12 12v9"
        }],
        ["path", {
            d: "m8 17 4 4 4-4"
        }]
    ]],
    rc = ["svg", t, [
        ["path", {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
        }],
        ["polyline", {
            points: "7 10 12 15 17 10"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "15",
            y2: "3"
        }]
    ]],
    oc = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"
        }],
        ["path", {
            d: "M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"
        }],
        ["path", {
            d: "M8.56 2.75c4.37 6 6 9.42 8 17.72"
        }]
    ]],
    cc = ["svg", t, [
        ["path", {
            d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"
        }]
    ]],
    sc = ["svg", t, [
        ["path", {
            d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"
        }],
        ["path", {
            d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"
        }]
    ]],
    ic = ["svg", t, [
        ["path", {
            d: "M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z"
        }],
        ["path", {
            d: "m11.25 15.6-2.16 2.16a2.5 2.5 0 1 1-4.56 1.73 2.49 2.49 0 0 1-1.41-4.24 2.5 2.5 0 0 1 3.14-.32l2.16-2.16"
        }]
    ]],
    dc = ["svg", t, [
        ["path", {
            d: "m6.5 6.5 11 11"
        }],
        ["path", {
            d: "m21 21-1-1"
        }],
        ["path", {
            d: "m3 3 1 1"
        }],
        ["path", {
            d: "m18 22 4-4"
        }],
        ["path", {
            d: "m2 6 4-4"
        }],
        ["path", {
            d: "m3 10 7-7"
        }],
        ["path", {
            d: "m14 21 7-7"
        }]
    ]],
    pc = ["svg", t, [
        ["path", {
            d: "M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46"
        }],
        ["path", {
            d: "M6 8.5c0-.75.13-1.47.36-2.14"
        }],
        ["path", {
            d: "M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76"
        }],
        ["path", {
            d: "M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }]
    ]],
    lc = ["svg", t, [
        ["path", {
            d: "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"
        }],
        ["path", {
            d: "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"
        }]
    ]],
    vc = ["svg", t, [
        ["circle", {
            cx: "11.5",
            cy: "12.5",
            r: "3.5"
        }],
        ["path", {
            d: "M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"
        }]
    ]],
    Mc = ["svg", t, [
        ["path", {
            d: "M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625"
        }],
        ["path", {
            d: "M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }]
    ]],
    yc = ["svg", t, [
        ["path", {
            d: "M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"
        }]
    ]],
    gc = ["svg", t, [
        ["line", {
            x1: "5",
            x2: "19",
            y1: "9",
            y2: "9"
        }],
        ["line", {
            x1: "5",
            x2: "19",
            y1: "15",
            y2: "15"
        }],
        ["line", {
            x1: "19",
            x2: "5",
            y1: "5",
            y2: "19"
        }]
    ]],
    uc = ["svg", t, [
        ["line", {
            x1: "5",
            x2: "19",
            y1: "9",
            y2: "9"
        }],
        ["line", {
            x1: "5",
            x2: "19",
            y1: "15",
            y2: "15"
        }]
    ]],
    fc = ["svg", t, [
        ["path", {
            d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"
        }],
        ["path", {
            d: "M22 21H7"
        }],
        ["path", {
            d: "m5 11 9 9"
        }]
    ]],
    xc = ["svg", t, [
        ["path", {
            d: "M4 10h12"
        }],
        ["path", {
            d: "M4 14h9"
        }],
        ["path", {
            d: "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"
        }]
    ]],
    mc = ["svg", t, [
        ["path", {
            d: "m21 21-6-6m6 6v-4.8m0 4.8h-4.8"
        }],
        ["path", {
            d: "M3 16.2V21m0 0h4.8M3 21l6-6"
        }],
        ["path", {
            d: "M21 7.8V3m0 0h-4.8M21 3l-6 6"
        }],
        ["path", {
            d: "M3 7.8V3m0 0h4.8M3 3l6 6"
        }]
    ]],
    wc = ["svg", t, [
        ["path", {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
        }],
        ["polyline", {
            points: "15 3 21 3 21 9"
        }],
        ["line", {
            x1: "10",
            x2: "21",
            y1: "14",
            y2: "3"
        }]
    ]],
    bc = ["svg", t, [
        ["path", {
            d: "M9.88 9.88a3 3 0 1 0 4.24 4.24"
        }],
        ["path", {
            d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
        }],
        ["path", {
            d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }]
    ]],
    Hc = ["svg", t, [
        ["path", {
            d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "3"
        }]
    ]],
    Vc = ["svg", t, [
        ["path", {
            d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
        }]
    ]],
    Lc = ["svg", t, [
        ["path", {
            d: "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
        }],
        ["path", {
            d: "M17 18h1"
        }],
        ["path", {
            d: "M12 18h1"
        }],
        ["path", {
            d: "M7 18h1"
        }]
    ]],
    Sc = ["svg", t, [
        ["path", {
            d: "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"
        }],
        ["path", {
            d: "M12 12v.01"
        }]
    ]],
    Ac = ["svg", t, [
        ["polygon", {
            points: "13 19 22 12 13 5 13 19"
        }],
        ["polygon", {
            points: "2 19 11 12 2 5 2 19"
        }]
    ]],
    Cc = ["svg", t, [
        ["path", {
            d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
        }],
        ["line", {
            x1: "16",
            x2: "2",
            y1: "8",
            y2: "22"
        }],
        ["line", {
            x1: "17.5",
            x2: "9",
            y1: "15",
            y2: "15"
        }]
    ]],
    Oc = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "2"
        }],
        ["path", {
            d: "M12 2v4"
        }],
        ["path", {
            d: "m6.8 15-3.5 2"
        }],
        ["path", {
            d: "m20.7 7-3.5 2"
        }],
        ["path", {
            d: "M6.8 9 3.3 7"
        }],
        ["path", {
            d: "m20.7 17-3.5-2"
        }],
        ["path", {
            d: "m9 22 3-8 3 8"
        }],
        ["path", {
            d: "M8 22h8"
        }],
        ["path", {
            d: "M18 18.7a9 9 0 1 0-12 0"
        }]
    ]],
    Ec = ["svg", t, [
        ["path", {
            d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"
        }],
        ["path", {
            d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"
        }],
        ["path", {
            d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"
        }],
        ["path", {
            d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"
        }],
        ["path", {
            d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"
        }]
    ]],
    kc = ["svg", t, [
        ["path", {
            d: "M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h8.5L20 7.5V20c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6h-2"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["circle", {
            cx: "10",
            cy: "20",
            r: "2"
        }],
        ["path", {
            d: "M10 7V6"
        }],
        ["path", {
            d: "M10 12v-1"
        }],
        ["path", {
            d: "M10 18v-2"
        }]
    ]],
    Pc = ["svg", t, [
        ["path", {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v2"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "M2 17v-3a4 4 0 0 1 8 0v3"
        }],
        ["circle", {
            cx: "9",
            cy: "17",
            r: "1"
        }],
        ["circle", {
            cx: "3",
            cy: "17",
            r: "1"
        }]
    ]],
    Zc = ["svg", t, [
        ["path", {
            d: "M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "M10 20v-1a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0Z"
        }],
        ["path", {
            d: "M6 20v-1a2 2 0 1 0-4 0v1a2 2 0 1 0 4 0Z"
        }],
        ["path", {
            d: "M2 19v-3a6 6 0 0 1 12 0v3"
        }]
    ]],
    Tc = ["svg", t, [
        ["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "M8 10v8h8"
        }],
        ["path", {
            d: "m8 18 4-4"
        }]
    ]],
    zc = ["svg", t, [
        ["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        }],
        ["path", {
            d: "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        }],
        ["path", {
            d: "m14 12.5 1 5.5-3-1-3 1 1-5.5"
        }]
    ]],
    Dc = ["svg", t, [
        ["path", {
            d: "M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        }],
        ["path", {
            d: "M7 16.5 8 22l-3-1-3 1 1-5.5"
        }]
    ]],
    _c = ["svg", t, [
        ["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "M12 18v-6"
        }],
        ["path", {
            d: "M8 18v-1"
        }],
        ["path", {
            d: "M16 18v-3"
        }]
    ]],
    Bc = ["svg", t, [
        ["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "M12 18v-4"
        }],
        ["path", {
            d: "M8 18v-2"
        }],
        ["path", {
            d: "M16 18v-6"
        }]
    ]],
    Rc = ["svg", t, [
        ["path", {
            d: "M14.5 22H18a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "M2.97 13.12c-.6.36-.97 1.02-.97 1.74v3.28c0 .72.37 1.38.97 1.74l3 1.83c.63.39 1.43.39 2.06 0l3-1.83c.6-.36.97-1.02.97-1.74v-3.28c0-.72-.37-1.38-.97-1.74l-3-1.83a1.97 1.97 0 0 0-2.06 0l-3 1.83Z"
        }],
        ["path", {
            d: "m7 17-4.74-2.85"
        }],
        ["path", {
            d: "m7 17 4.74-2.85"
        }],
        ["path", {
            d: "M7 17v5"
        }]
    ]],
    Fc = ["svg", t, [
        ["path", {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "m3 15 2 2 4-4"
        }]
    ]],
    jc = ["svg", t, [
        ["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "m9 15 2 2 4-4"
        }]
    ]],
    qc = ["svg", t, [
        ["path", {
            d: "M16 22h2c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["circle", {
            cx: "8",
            cy: "16",
            r: "6"
        }],
        ["path", {
            d: "M9.5 17.5 8 16.25V14"
        }]
    ]],
    Wc = ["svg", t, [
        ["path", {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "m9 18 3-3-3-3"
        }],
        ["path", {
            d: "m5 12-3 3 3 3"
        }]
    ]],
    Nc = ["svg", t, [
        ["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "m10 13-2 2 2 2"
        }],
        ["path", {
            d: "m14 17 2-2-2-2"
        }]
    ]],
    Ic = ["svg", t, [
        ["circle", {
            cx: "6",
            cy: "13",
            r: "3"
        }],
        ["path", {
            d: "m9.7 14.4-.9-.3"
        }],
        ["path", {
            d: "m3.2 11.9-.9-.3"
        }],
        ["path", {
            d: "m4.6 16.7.3-.9"
        }],
        ["path", {
            d: "m7.6 16.7-.4-1"
        }],
        ["path", {
            d: "m4.8 10.3-.4-1"
        }],
        ["path", {
            d: "m2.3 14.6 1-.4"
        }],
        ["path", {
            d: "m8.7 11.8 1-.4"
        }],
        ["path", {
            d: "m7.4 9.3-.3.9"
        }],
        ["path", {
            d: "M14 2v6h6"
        }],
        ["path", {
            d: "M4 5.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-1.5"
        }]
    ]],
    Uc = ["svg", t, [
        ["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        }],
        ["path", {
            d: "M12 13V7"
        }],
        ["path", {
            d: "M9 10h6"
        }],
        ["path", {
            d: "M9 17h6"
        }]
    ]],
    Gc = ["svg", t, [
        ["rect", {
            width: "4",
            height: "6",
            x: "2",
            y: "12",
            rx: "2"
        }],
        ["path", {
            d: "M14 2v6h6"
        }],
        ["path", {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"
        }],
        ["path", {
            d: "M10 12h2v6"
        }],
        ["path", {
            d: "M10 18h4"
        }]
    ]],
    Xc = ["svg", t, [
        ["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "M12 18v-6"
        }],
        ["path", {
            d: "m9 15 3 3 3-3"
        }]
    ]],
    $c = ["svg", t, [
        ["path", {
            d: "M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"
        }]
    ]],
    Yc = ["svg", t, [
        ["path", {
            d: "M4 6V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"
        }]
    ]],
    Kc = ["svg", t, [
        ["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["circle", {
            cx: "10",
            cy: "13",
            r: "2"
        }],
        ["path", {
            d: "m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22"
        }]
    ]],
    Jc = ["svg", t, [
        ["path", {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "M2 15h10"
        }],
        ["path", {
            d: "m9 18 3-3-3-3"
        }]
    ]],
    Qc = ["svg", t, [
        ["path", {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"
        }],
        ["path", {
            d: "M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"
        }]
    ]],
    ts = ["svg", t, [
        ["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"
        }],
        ["path", {
            d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"
        }]
    ]],
    as = ["svg", t, [
        ["path", {
            d: "M4 10V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["circle", {
            cx: "4",
            cy: "16",
            r: "2"
        }],
        ["path", {
            d: "m10 10-4.5 4.5"
        }],
        ["path", {
            d: "m9 11 1 1"
        }]
    ]],
    es = ["svg", t, [
        ["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        }],
        ["circle", {
            cx: "10",
            cy: "16",
            r: "2"
        }],
        ["path", {
            d: "m16 10-4.5 4.5"
        }],
        ["path", {
            d: "m15 11 1 1"
        }]
    ]],
    hs = ["svg", t, [
        ["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "m16 13-3.5 3.5-2-2L8 17"
        }]
    ]],
    ns = ["svg", t, [
        ["path", {
            d: "M4 5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["rect", {
            width: "8",
            height: "5",
            x: "2",
            y: "13",
            rx: "1"
        }],
        ["path", {
            d: "M8 13v-2a2 2 0 1 0-4 0v2"
        }]
    ]],
    rs = ["svg", t, [
        ["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        }],
        ["rect", {
            width: "8",
            height: "6",
            x: "8",
            y: "12",
            rx: "1"
        }],
        ["path", {
            d: "M15 12v-2a3 3 0 1 0-6 0v2"
        }]
    ]],
    os = ["svg", t, [
        ["path", {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "M3 15h6"
        }]
    ]],
    cs = ["svg", t, [
        ["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["line", {
            x1: "9",
            x2: "15",
            y1: "15",
            y2: "15"
        }]
    ]],
    ss = ["svg", t, [
        ["path", {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "M2 15h10"
        }],
        ["path", {
            d: "m5 12-3 3 3 3"
        }]
    ]],
    is = ["svg", t, [
        ["path", {
            d: "M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29"
        }],
        ["path", {
            d: "M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z"
        }]
    ]],
    ds = ["svg", t, [
        ["path", {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "M3 15h6"
        }],
        ["path", {
            d: "M6 12v6"
        }]
    ]],
    ps = ["svg", t, [
        ["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "18",
            y2: "12"
        }],
        ["line", {
            x1: "9",
            x2: "15",
            y1: "15",
            y2: "15"
        }]
    ]],
    ls = ["svg", t, [
        ["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        }],
        ["path", {
            d: "M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"
        }],
        ["path", {
            d: "M12 17h.01"
        }]
    ]],
    vs = ["svg", t, [
        ["path", {
            d: "M20 10V7.5L14.5 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h4.5"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "M16 22a2 2 0 0 1-2-2"
        }],
        ["path", {
            d: "M20 22a2 2 0 0 0 2-2"
        }],
        ["path", {
            d: "M20 14a2 2 0 0 1 2 2"
        }],
        ["path", {
            d: "M16 14a2 2 0 0 0-2 2"
        }]
    ]],
    Ms = ["svg", t, [
        ["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["circle", {
            cx: "11.5",
            cy: "14.5",
            r: "2.5"
        }],
        ["path", {
            d: "M13.25 16.25 15 18"
        }]
    ]],
    ys = ["svg", t, [
        ["path", {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
        }],
        ["path", {
            d: "m9 18-1.5-1.5"
        }]
    ]],
    gs = ["svg", t, [
        ["path", {
            d: "M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5L18 5.5"
        }],
        ["path", {
            d: "M8 18h1"
        }],
        ["path", {
            d: "M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z"
        }]
    ]],
    us = ["svg", t, [
        ["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "M8 13h2"
        }],
        ["path", {
            d: "M8 17h2"
        }],
        ["path", {
            d: "M14 13h2"
        }],
        ["path", {
            d: "M14 17h2"
        }]
    ]],
    fs = ["svg", t, [
        ["path", {
            d: "M16 2v5h5"
        }],
        ["path", {
            d: "M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17l4 4z"
        }],
        ["path", {
            d: "M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15"
        }],
        ["path", {
            d: "M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11"
        }]
    ]],
    xs = ["svg", t, [
        ["path", {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v7"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "m10 18 3-3-3-3"
        }],
        ["path", {
            d: "M4 18v-1a2 2 0 0 1 2-2h6"
        }]
    ]],
    ms = ["svg", t, [
        ["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "m8 16 2-2-2-2"
        }],
        ["path", {
            d: "M12 18h4"
        }]
    ]],
    ws = ["svg", t, [
        ["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["line", {
            x1: "16",
            x2: "8",
            y1: "13",
            y2: "13"
        }],
        ["line", {
            x1: "16",
            x2: "8",
            y1: "17",
            y2: "17"
        }],
        ["line", {
            x1: "10",
            x2: "8",
            y1: "9",
            y2: "9"
        }]
    ]],
    bs = ["svg", t, [
        ["path", {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "M2 13v-1h6v1"
        }],
        ["path", {
            d: "M4 18h2"
        }],
        ["path", {
            d: "M5 12v6"
        }]
    ]],
    Hs = ["svg", t, [
        ["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "M9 13v-1h6v1"
        }],
        ["path", {
            d: "M11 18h2"
        }],
        ["path", {
            d: "M12 12v6"
        }]
    ]],
    Vs = ["svg", t, [
        ["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "M12 12v6"
        }],
        ["path", {
            d: "m15 15-3-3-3 3"
        }]
    ]],
    Ls = ["svg", t, [
        ["path", {
            d: "M4 8V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "m10 15.5 4 2.5v-6l-4 2.5"
        }],
        ["rect", {
            width: "8",
            height: "6",
            x: "2",
            y: "12",
            rx: "1"
        }]
    ]],
    Ss = ["svg", t, [
        ["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "m10 11 5 3-5 3v-6Z"
        }]
    ]],
    As = ["svg", t, [
        ["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "M11.5 13.5c.32.4.5.94.5 1.5s-.18 1.1-.5 1.5"
        }],
        ["path", {
            d: "M15 12c.64.8 1 1.87 1 3s-.36 2.2-1 3"
        }],
        ["path", {
            d: "M8 15h.01"
        }]
    ]],
    Cs = ["svg", t, [
        ["path", {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["path", {
            d: "m7 10-3 2H2v4h2l3 2v-8Z"
        }],
        ["path", {
            d: "M11 11c.64.8 1 1.87 1 3s-.36 2.2-1 3"
        }]
    ]],
    Os = ["svg", t, [
        ["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        }],
        ["path", {
            d: "M12 9v4"
        }],
        ["path", {
            d: "M12 17h.01"
        }]
    ]],
    Es = ["svg", t, [
        ["path", {
            d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"
        }],
        ["path", {
            d: "M14 2v6h6"
        }],
        ["path", {
            d: "m3 12.5 5 5"
        }],
        ["path", {
            d: "m8 12.5-5 5"
        }]
    ]],
    ks = ["svg", t, [
        ["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }],
        ["line", {
            x1: "9.5",
            x2: "14.5",
            y1: "12.5",
            y2: "17.5"
        }],
        ["line", {
            x1: "14.5",
            x2: "9.5",
            y1: "12.5",
            y2: "17.5"
        }]
    ]],
    Ps = ["svg", t, [
        ["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8"
        }]
    ]],
    Zs = ["svg", t, [
        ["path", {
            d: "M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z"
        }],
        ["path", {
            d: "M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8"
        }],
        ["path", {
            d: "M15 2v5h5"
        }]
    ]],
    Ts = ["svg", t, [
        ["rect", {
            width: "20",
            height: "20",
            x: "2",
            y: "2",
            rx: "2.18",
            ry: "2.18"
        }],
        ["line", {
            x1: "7",
            x2: "7",
            y1: "2",
            y2: "22"
        }],
        ["line", {
            x1: "17",
            x2: "17",
            y1: "2",
            y2: "22"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "2",
            x2: "7",
            y1: "7",
            y2: "7"
        }],
        ["line", {
            x1: "2",
            x2: "7",
            y1: "17",
            y2: "17"
        }],
        ["line", {
            x1: "17",
            x2: "22",
            y1: "17",
            y2: "17"
        }],
        ["line", {
            x1: "17",
            x2: "22",
            y1: "7",
            y2: "7"
        }]
    ]],
    zs = ["svg", t, [
        ["path", {
            d: "M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"
        }],
        ["path", {
            d: "m22 3-5 5"
        }],
        ["path", {
            d: "m17 3 5 5"
        }]
    ]],
    Ds = ["svg", t, [
        ["polygon", {
            points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
        }]
    ]],
    _s = ["svg", t, [
        ["path", {
            d: "M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"
        }],
        ["path", {
            d: "M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2"
        }],
        ["path", {
            d: "M17.29 21.02c.12-.6.43-2.3.5-3.02"
        }],
        ["path", {
            d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"
        }],
        ["path", {
            d: "M8.65 22c.21-.66.45-1.32.57-2"
        }],
        ["path", {
            d: "M14 13.12c0 2.38 0 6.38-1 8.88"
        }],
        ["path", {
            d: "M2 16h.01"
        }],
        ["path", {
            d: "M21.8 16c.2-2 .131-5.354 0-6"
        }],
        ["path", {
            d: "M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2"
        }]
    ]],
    Bs = ["svg", t, [
        ["path", {
            d: "M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058"
        }],
        ["path", {
            d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618"
        }],
        ["path", {
            d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20"
        }]
    ]],
    Rs = ["svg", t, [
        ["path", {
            d: "M2 16s9-15 20-4C11 23 2 8 2 8"
        }]
    ]],
    Fs = ["svg", t, [
        ["path", {
            d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"
        }],
        ["path", {
            d: "M18 12v.5"
        }],
        ["path", {
            d: "M16 17.93a9.77 9.77 0 0 1 0-11.86"
        }],
        ["path", {
            d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"
        }],
        ["path", {
            d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"
        }],
        ["path", {
            d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"
        }]
    ]],
    js = ["svg", t, [
        ["path", {
            d: "M8 2c3 0 5 2 8 2s4-1 4-1v11"
        }],
        ["path", {
            d: "M4 22V4"
        }],
        ["path", {
            d: "M4 15s1-1 4-1 5 2 8 2"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }]
    ]],
    qs = ["svg", t, [
        ["path", {
            d: "M17 22V2L7 7l10 5"
        }]
    ]],
    Ws = ["svg", t, [
        ["path", {
            d: "M7 22V2l10 5-10 5"
        }]
    ]],
    Ns = ["svg", t, [
        ["path", {
            d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
        }],
        ["line", {
            x1: "4",
            x2: "4",
            y1: "22",
            y2: "15"
        }]
    ]],
    Is = ["svg", t, [
        ["path", {
            d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
        }]
    ]],
    Us = ["svg", t, [
        ["path", {
            d: "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4"
        }],
        ["path", {
            d: "M7 2h11v4c0 2-2 2-2 4v1"
        }],
        ["line", {
            x1: "11",
            x2: "18",
            y1: "6",
            y2: "6"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }]
    ]],
    Gs = ["svg", t, [
        ["path", {
            d: "M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"
        }],
        ["line", {
            x1: "6",
            x2: "18",
            y1: "6",
            y2: "6"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "12",
            y2: "12"
        }]
    ]],
    Xs = ["svg", t, [
        ["path", {
            d: "M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542"
        }],
        ["path", {
            d: "M10 2v2.343"
        }],
        ["path", {
            d: "M14 2v6.343"
        }],
        ["path", {
            d: "M8.5 2h7"
        }],
        ["path", {
            d: "M7 16h9"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }]
    ]],
    $s = ["svg", t, [
        ["path", {
            d: "M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"
        }],
        ["path", {
            d: "M8.5 2h7"
        }],
        ["path", {
            d: "M7 16h10"
        }]
    ]],
    Ys = ["svg", t, [
        ["path", {
            d: "M10 2v7.31"
        }],
        ["path", {
            d: "M14 9.3V1.99"
        }],
        ["path", {
            d: "M8.5 2h7"
        }],
        ["path", {
            d: "M14 9.3a6.5 6.5 0 1 1-4 0"
        }],
        ["path", {
            d: "M5.52 16h12.96"
        }]
    ]],
    Ks = ["svg", t, [
        ["path", {
            d: "m3 7 5 5-5 5V7"
        }],
        ["path", {
            d: "m21 7-5 5 5 5V7"
        }],
        ["path", {
            d: "M12 20v2"
        }],
        ["path", {
            d: "M12 14v2"
        }],
        ["path", {
            d: "M12 8v2"
        }],
        ["path", {
            d: "M12 2v2"
        }]
    ]],
    Js = ["svg", t, [
        ["path", {
            d: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"
        }],
        ["path", {
            d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"
        }],
        ["path", {
            d: "M12 20v2"
        }],
        ["path", {
            d: "M12 14v2"
        }],
        ["path", {
            d: "M12 8v2"
        }],
        ["path", {
            d: "M12 2v2"
        }]
    ]],
    Qs = ["svg", t, [
        ["path", {
            d: "m17 3-5 5-5-5h10"
        }],
        ["path", {
            d: "m17 21-5-5-5 5h10"
        }],
        ["path", {
            d: "M4 12H2"
        }],
        ["path", {
            d: "M10 12H8"
        }],
        ["path", {
            d: "M16 12h-2"
        }],
        ["path", {
            d: "M22 12h-2"
        }]
    ]],
    ti = ["svg", t, [
        ["path", {
            d: "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"
        }],
        ["path", {
            d: "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"
        }],
        ["path", {
            d: "M4 12H2"
        }],
        ["path", {
            d: "M10 12H8"
        }],
        ["path", {
            d: "M16 12h-2"
        }],
        ["path", {
            d: "M22 12h-2"
        }]
    ]],
    ai = ["svg", t, [
        ["path", {
            d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"
        }],
        ["circle", {
            cx: "12",
            cy: "8",
            r: "2"
        }],
        ["path", {
            d: "M12 10v12"
        }],
        ["path", {
            d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"
        }],
        ["path", {
            d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"
        }]
    ]],
    ei = ["svg", t, [
        ["path", {
            d: "M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "3"
        }],
        ["path", {
            d: "m8 16 1.5-1.5"
        }],
        ["path", {
            d: "M14.5 9.5 16 8"
        }],
        ["path", {
            d: "m8 8 1.5 1.5"
        }],
        ["path", {
            d: "M14.5 14.5 16 16"
        }]
    ]],
    hi = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "3"
        }],
        ["path", {
            d: "M3 7V5a2 2 0 0 1 2-2h2"
        }],
        ["path", {
            d: "M17 3h2a2 2 0 0 1 2 2v2"
        }],
        ["path", {
            d: "M21 17v2a2 2 0 0 1-2 2h-2"
        }],
        ["path", {
            d: "M7 21H5a2 2 0 0 1-2-2v-2"
        }]
    ]],
    ni = ["svg", t, [
        ["path", {
            d: "M2 12h6"
        }],
        ["path", {
            d: "M22 12h-6"
        }],
        ["path", {
            d: "M12 2v2"
        }],
        ["path", {
            d: "M12 8v2"
        }],
        ["path", {
            d: "M12 14v2"
        }],
        ["path", {
            d: "M12 20v2"
        }],
        ["path", {
            d: "m19 9-3 3 3 3"
        }],
        ["path", {
            d: "m5 15 3-3-3-3"
        }]
    ]],
    ri = ["svg", t, [
        ["path", {
            d: "M12 22v-6"
        }],
        ["path", {
            d: "M12 8V2"
        }],
        ["path", {
            d: "M4 12H2"
        }],
        ["path", {
            d: "M10 12H8"
        }],
        ["path", {
            d: "M16 12h-2"
        }],
        ["path", {
            d: "M22 12h-2"
        }],
        ["path", {
            d: "m15 19-3-3-3 3"
        }],
        ["path", {
            d: "m15 5-3 3-3-3"
        }]
    ]],
    oi = ["svg", t, [
        ["path", {
            d: "M22 20V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2h6"
        }],
        ["circle", {
            cx: "16",
            cy: "19",
            r: "2"
        }],
        ["path", {
            d: "M16 11v-1"
        }],
        ["path", {
            d: "M16 17v-2"
        }]
    ]],
    ci = ["svg", t, [
        ["path", {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
        }],
        ["path", {
            d: "m9 13 2 2 4-4"
        }]
    ]],
    si = ["svg", t, [
        ["path", {
            d: "M7 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2"
        }],
        ["circle", {
            cx: "16",
            cy: "16",
            r: "6"
        }],
        ["path", {
            d: "M16 14v2l1 1"
        }]
    ]],
    ii = ["svg", t, [
        ["path", {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
        }],
        ["path", {
            d: "M2 10h20"
        }]
    ]],
    di = ["svg", t, [
        ["circle", {
            cx: "18",
            cy: "18",
            r: "3"
        }],
        ["path", {
            d: "M10.5 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.5"
        }],
        ["path", {
            d: "m21.7 19.4-.9-.3"
        }],
        ["path", {
            d: "m15.2 16.9-.9-.3"
        }],
        ["path", {
            d: "m16.6 21.7.3-.9"
        }],
        ["path", {
            d: "m19.1 15.2.3-.9"
        }],
        ["path", {
            d: "m19.6 21.7-.4-1"
        }],
        ["path", {
            d: "m16.8 15.3-.4-1"
        }],
        ["path", {
            d: "m14.3 19.6 1-.4"
        }],
        ["path", {
            d: "m20.7 16.8 1-.4"
        }]
    ]],
    pi = ["svg", t, [
        ["path", {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
        }],
        ["circle", {
            cx: "12",
            cy: "13",
            r: "1"
        }]
    ]],
    li = ["svg", t, [
        ["path", {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
        }],
        ["path", {
            d: "M12 10v6"
        }],
        ["path", {
            d: "m15 13-3 3-3-3"
        }]
    ]],
    vi = ["svg", t, [
        ["path", {
            d: "M8.42 10.61a2.1 2.1 0 1 1 2.97 2.97L5.95 19 2 20l.99-3.95 5.43-5.44Z"
        }],
        ["path", {
            d: "M2 11.5V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"
        }]
    ]],
    Mi = ["svg", t, [
        ["path", {
            d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"
        }],
        ["circle", {
            cx: "13",
            cy: "12",
            r: "2"
        }],
        ["path", {
            d: "M18 19c-2.8 0-5-2.2-5-5v8"
        }],
        ["circle", {
            cx: "20",
            cy: "19",
            r: "2"
        }]
    ]],
    yi = ["svg", t, [
        ["path", {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
        }],
        ["circle", {
            cx: "12",
            cy: "13",
            r: "2"
        }],
        ["path", {
            d: "M14 13h3"
        }],
        ["path", {
            d: "M7 13h3"
        }]
    ]],
    gi = ["svg", t, [
        ["path", {
            d: "M11 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v1.5"
        }],
        ["path", {
            d: "M21.29 13.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 21l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"
        }]
    ]],
    ui = ["svg", t, [
        ["path", {
            d: "M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"
        }],
        ["path", {
            d: "M2 13h10"
        }],
        ["path", {
            d: "m9 16 3-3-3-3"
        }]
    ]],
    fi = ["svg", t, [
        ["path", {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
        }],
        ["path", {
            d: "M8 10v4"
        }],
        ["path", {
            d: "M12 10v2"
        }],
        ["path", {
            d: "M16 10v6"
        }]
    ]],
    xi = ["svg", t, [
        ["path", {
            d: "M10 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v2"
        }],
        ["circle", {
            cx: "16",
            cy: "20",
            r: "2"
        }],
        ["path", {
            d: "m22 14-4.5 4.5"
        }],
        ["path", {
            d: "m21 15 1 1"
        }]
    ]],
    mi = ["svg", t, [
        ["path", {
            d: "M10 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v2.5"
        }],
        ["rect", {
            width: "8",
            height: "5",
            x: "14",
            y: "17",
            rx: "1"
        }],
        ["path", {
            d: "M20 17v-2a2 2 0 1 0-4 0v2"
        }]
    ]],
    wi = ["svg", t, [
        ["path", {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
        }],
        ["line", {
            x1: "9",
            x2: "15",
            y1: "13",
            y2: "13"
        }]
    ]],
    bi = ["svg", t, [
        ["path", {
            d: "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"
        }],
        ["circle", {
            cx: "14",
            cy: "15",
            r: "1"
        }]
    ]],
    Hi = ["svg", t, [
        ["path", {
            d: "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"
        }]
    ]],
    Vi = ["svg", t, [
        ["path", {
            d: "M2 7.5V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2"
        }],
        ["path", {
            d: "M2 13h10"
        }],
        ["path", {
            d: "m5 10-3 3 3 3"
        }]
    ]],
    Li = ["svg", t, [
        ["path", {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "10",
            y2: "16"
        }],
        ["line", {
            x1: "9",
            x2: "15",
            y1: "13",
            y2: "13"
        }]
    ]],
    Si = ["svg", t, [
        ["path", {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
        }],
        ["circle", {
            cx: "12",
            cy: "13",
            r: "2"
        }],
        ["path", {
            d: "M12 15v5"
        }]
    ]],
    Ai = ["svg", t, [
        ["path", {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
        }],
        ["circle", {
            cx: "11.5",
            cy: "12.5",
            r: "2.5"
        }],
        ["path", {
            d: "M13.27 14.27 15 16"
        }]
    ]],
    Ci = ["svg", t, [
        ["path", {
            d: "M11 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v4"
        }],
        ["circle", {
            cx: "17",
            cy: "17",
            r: "3"
        }],
        ["path", {
            d: "m21 21-1.5-1.5"
        }]
    ]],
    Oi = ["svg", t, [
        ["path", {
            d: "M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2"
        }],
        ["path", {
            d: "m8 16 3-3-3-3"
        }],
        ["path", {
            d: "M2 16v-1a2 2 0 0 1 2-2h6"
        }]
    ]],
    Ei = ["svg", t, [
        ["path", {
            d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1"
        }],
        ["path", {
            d: "M12 10v4h4"
        }],
        ["path", {
            d: "m12 14 1.5-1.5c.9-.9 2.2-1.5 3.5-1.5s2.6.6 3.5 1.5c.4.4.8 1 1 1.5"
        }],
        ["path", {
            d: "M22 22v-4h-4"
        }],
        ["path", {
            d: "m22 18-1.5 1.5c-.9.9-2.1 1.5-3.5 1.5s-2.6-.6-3.5-1.5c-.4-.4-.8-1-1-1.5"
        }]
    ]],
    ki = ["svg", t, [
        ["path", {
            d: "M13 10h7a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"
        }],
        ["path", {
            d: "M13 21h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.88a1 1 0 0 1-.9-.55l-.44-.9a1 1 0 0 0-.9-.55H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"
        }],
        ["path", {
            d: "M3 3v2c0 1.1.9 2 2 2h3"
        }],
        ["path", {
            d: "M3 3v13c0 1.1.9 2 2 2h3"
        }]
    ]],
    Pi = ["svg", t, [
        ["path", {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
        }],
        ["path", {
            d: "M12 10v6"
        }],
        ["path", {
            d: "m9 13 3-3 3 3"
        }]
    ]],
    Zi = ["svg", t, [
        ["path", {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
        }],
        ["path", {
            d: "m9.5 10.5 5 5"
        }],
        ["path", {
            d: "m14.5 10.5-5 5"
        }]
    ]],
    Ti = ["svg", t, [
        ["path", {
            d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
        }]
    ]],
    zi = ["svg", t, [
        ["path", {
            d: "M8 17h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.93a2 2 0 0 1-1.66-.9l-.82-1.2a2 2 0 0 0-1.66-.9H8a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2Z"
        }],
        ["path", {
            d: "M2 8v11c0 1.1.9 2 2 2h14"
        }]
    ]],
    Di = ["svg", t, [
        ["path", {
            d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"
        }],
        ["path", {
            d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"
        }],
        ["path", {
            d: "M16 17h4"
        }],
        ["path", {
            d: "M4 13h4"
        }]
    ]],
    _i = ["svg", t, [
        ["path", {
            d: "M12 12H5a2 2 0 0 0-2 2v5"
        }],
        ["circle", {
            cx: "13",
            cy: "19",
            r: "2"
        }],
        ["circle", {
            cx: "5",
            cy: "19",
            r: "2"
        }],
        ["path", {
            d: "M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5"
        }]
    ]],
    Bi = ["svg", t, [
        ["rect", {
            width: "20",
            height: "12",
            x: "2",
            y: "6",
            rx: "2"
        }],
        ["path", {
            d: "M12 12h.01"
        }],
        ["path", {
            d: "M17 12h.01"
        }],
        ["path", {
            d: "M7 12h.01"
        }]
    ]],
    Ri = ["svg", t, [
        ["polyline", {
            points: "15 17 20 12 15 7"
        }],
        ["path", {
            d: "M4 18v-2a4 4 0 0 1 4-4h12"
        }]
    ]],
    Fi = ["svg", t, [
        ["line", {
            x1: "22",
            x2: "2",
            y1: "6",
            y2: "6"
        }],
        ["line", {
            x1: "22",
            x2: "2",
            y1: "18",
            y2: "18"
        }],
        ["line", {
            x1: "6",
            x2: "6",
            y1: "2",
            y2: "22"
        }],
        ["line", {
            x1: "18",
            x2: "18",
            y1: "2",
            y2: "22"
        }]
    ]],
    ji = ["svg", t, [
        ["path", {
            d: "M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"
        }]
    ]],
    qi = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "M16 16s-1.5-2-4-2-4 2-4 2"
        }],
        ["line", {
            x1: "9",
            x2: "9.01",
            y1: "9",
            y2: "9"
        }],
        ["line", {
            x1: "15",
            x2: "15.01",
            y1: "9",
            y2: "9"
        }]
    ]],
    Wi = ["svg", t, [
        ["line", {
            x1: "3",
            x2: "15",
            y1: "22",
            y2: "22"
        }],
        ["line", {
            x1: "4",
            x2: "14",
            y1: "9",
            y2: "9"
        }],
        ["path", {
            d: "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"
        }],
        ["path", {
            d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"
        }]
    ]],
    Ni = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }],
        ["path", {
            d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"
        }],
        ["path", {
            d: "M9 11.2h5.7"
        }]
    ]],
    Ii = ["svg", t, [
        ["path", {
            d: "M2 7v10"
        }],
        ["path", {
            d: "M6 5v14"
        }],
        ["rect", {
            width: "12",
            height: "18",
            x: "10",
            y: "3",
            rx: "2"
        }]
    ]],
    Ui = ["svg", t, [
        ["path", {
            d: "M2 3v18"
        }],
        ["rect", {
            width: "12",
            height: "18",
            x: "6",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M22 3v18"
        }]
    ]],
    Gi = ["svg", t, [
        ["rect", {
            width: "18",
            height: "14",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M4 21h1"
        }],
        ["path", {
            d: "M9 21h1"
        }],
        ["path", {
            d: "M14 21h1"
        }],
        ["path", {
            d: "M19 21h1"
        }]
    ]],
    Xi = ["svg", t, [
        ["path", {
            d: "M7 2h10"
        }],
        ["path", {
            d: "M5 6h14"
        }],
        ["rect", {
            width: "18",
            height: "12",
            x: "3",
            y: "10",
            rx: "2"
        }]
    ]],
    $i = ["svg", t, [
        ["path", {
            d: "M3 2h18"
        }],
        ["rect", {
            width: "18",
            height: "12",
            x: "3",
            y: "6",
            rx: "2"
        }],
        ["path", {
            d: "M3 22h18"
        }]
    ]],
    Yi = ["svg", t, [
        ["line", {
            x1: "6",
            x2: "10",
            y1: "11",
            y2: "11"
        }],
        ["line", {
            x1: "8",
            x2: "8",
            y1: "9",
            y2: "13"
        }],
        ["line", {
            x1: "15",
            x2: "15.01",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "18",
            x2: "18.01",
            y1: "10",
            y2: "10"
        }],
        ["path", {
            d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"
        }]
    ]],
    Ki = ["svg", t, [
        ["line", {
            x1: "6",
            x2: "10",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "8",
            x2: "8",
            y1: "10",
            y2: "14"
        }],
        ["line", {
            x1: "15",
            x2: "15.01",
            y1: "13",
            y2: "13"
        }],
        ["line", {
            x1: "18",
            x2: "18.01",
            y1: "11",
            y2: "11"
        }],
        ["rect", {
            width: "20",
            height: "12",
            x: "2",
            y: "6",
            rx: "2"
        }]
    ]],
    Ji = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M9 8h7"
        }],
        ["path", {
            d: "M8 12h6"
        }],
        ["path", {
            d: "M11 16h5"
        }]
    ]],
    Qi = ["svg", t, [
        ["path", {
            d: "M8 6h10"
        }],
        ["path", {
            d: "M6 12h9"
        }],
        ["path", {
            d: "M11 18h7"
        }]
    ]],
    td = ["svg", t, [
        ["path", {
            d: "M15.6 2.7a10 10 0 1 0 5.7 5.7"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "2"
        }],
        ["path", {
            d: "M13.4 10.6 19 5"
        }]
    ]],
    ad = ["svg", t, [
        ["path", {
            d: "m12 14 4-4"
        }],
        ["path", {
            d: "M3.34 19a10 10 0 1 1 17.32 0"
        }]
    ]],
    ed = ["svg", t, [
        ["path", {
            d: "m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10"
        }],
        ["path", {
            d: "m16 16 6-6"
        }],
        ["path", {
            d: "m8 8 6-6"
        }],
        ["path", {
            d: "m9 7 8 8"
        }],
        ["path", {
            d: "m21 11-8-8"
        }]
    ]],
    hd = ["svg", t, [
        ["path", {
            d: "M6 3h12l4 6-10 13L2 9Z"
        }],
        ["path", {
            d: "M11 3 8 9l4 13 4-13-3-6"
        }],
        ["path", {
            d: "M2 9h20"
        }]
    ]],
    nd = ["svg", t, [
        ["path", {
            d: "M9 10h.01"
        }],
        ["path", {
            d: "M15 10h.01"
        }],
        ["path", {
            d: "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"
        }]
    ]],
    rd = ["svg", t, [
        ["polyline", {
            points: "20 12 20 22 4 22 4 12"
        }],
        ["rect", {
            width: "20",
            height: "5",
            x: "2",
            y: "7"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "22",
            y2: "7"
        }],
        ["path", {
            d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"
        }],
        ["path", {
            d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"
        }]
    ]],
    od = ["svg", t, [
        ["path", {
            d: "M6 3v12"
        }],
        ["path", {
            d: "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
        }],
        ["path", {
            d: "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
        }],
        ["path", {
            d: "M15 6a9 9 0 0 0-9 9"
        }],
        ["path", {
            d: "M18 15v6"
        }],
        ["path", {
            d: "M21 18h-6"
        }]
    ]],
    cd = ["svg", t, [
        ["line", {
            x1: "6",
            x2: "6",
            y1: "3",
            y2: "15"
        }],
        ["circle", {
            cx: "18",
            cy: "6",
            r: "3"
        }],
        ["circle", {
            cx: "6",
            cy: "18",
            r: "3"
        }],
        ["path", {
            d: "M18 9a9 9 0 0 1-9 9"
        }]
    ]],
    sd = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "3"
        }],
        ["line", {
            x1: "3",
            x2: "9",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "15",
            x2: "21",
            y1: "12",
            y2: "12"
        }]
    ]],
    id = ["svg", t, [
        ["circle", {
            cx: "18",
            cy: "18",
            r: "3"
        }],
        ["circle", {
            cx: "6",
            cy: "6",
            r: "3"
        }],
        ["path", {
            d: "M13 6h3a2 2 0 0 1 2 2v7"
        }],
        ["path", {
            d: "M11 18H8a2 2 0 0 1-2-2V9"
        }]
    ]],
    dd = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "18",
            r: "3"
        }],
        ["circle", {
            cx: "6",
            cy: "6",
            r: "3"
        }],
        ["circle", {
            cx: "18",
            cy: "6",
            r: "3"
        }],
        ["path", {
            d: "M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"
        }],
        ["path", {
            d: "M12 12v3"
        }]
    ]],
    pd = ["svg", t, [
        ["circle", {
            cx: "18",
            cy: "18",
            r: "3"
        }],
        ["circle", {
            cx: "6",
            cy: "6",
            r: "3"
        }],
        ["path", {
            d: "M6 21V9a9 9 0 0 0 9 9"
        }]
    ]],
    ld = ["svg", t, [
        ["circle", {
            cx: "18",
            cy: "18",
            r: "3"
        }],
        ["circle", {
            cx: "6",
            cy: "6",
            r: "3"
        }],
        ["path", {
            d: "M18 11.5V15"
        }],
        ["path", {
            d: "m21 3-6 6"
        }],
        ["path", {
            d: "m21 9-6-6"
        }],
        ["line", {
            x1: "6",
            x2: "6",
            y1: "9",
            y2: "21"
        }]
    ]],
    vd = ["svg", t, [
        ["circle", {
            cx: "18",
            cy: "18",
            r: "3"
        }],
        ["circle", {
            cx: "6",
            cy: "6",
            r: "3"
        }],
        ["path", {
            d: "M18 6V5"
        }],
        ["path", {
            d: "M18 11v-1"
        }],
        ["line", {
            x1: "6",
            x2: "6",
            y1: "9",
            y2: "21"
        }]
    ]],
    Md = ["svg", t, [
        ["circle", {
            cx: "18",
            cy: "18",
            r: "3"
        }],
        ["circle", {
            cx: "6",
            cy: "6",
            r: "3"
        }],
        ["path", {
            d: "M13 6h3a2 2 0 0 1 2 2v7"
        }],
        ["line", {
            x1: "6",
            x2: "6",
            y1: "9",
            y2: "21"
        }]
    ]],
    yd = ["svg", t, [
        ["path", {
            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
        }],
        ["path", {
            d: "M9 18c-4.51 2-5-2-7-2"
        }]
    ]],
    gd = ["svg", t, [
        ["path", {
            d: "m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"
        }]
    ]],
    ud = ["svg", t, [
        ["path", {
            d: "M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z"
        }],
        ["path", {
            d: "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"
        }]
    ]],
    fd = ["svg", t, [
        ["circle", {
            cx: "6",
            cy: "15",
            r: "4"
        }],
        ["circle", {
            cx: "18",
            cy: "15",
            r: "4"
        }],
        ["path", {
            d: "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"
        }],
        ["path", {
            d: "M2.5 13 5 7c.7-1.3 1.4-2 3-2"
        }],
        ["path", {
            d: "M21.5 13 19 7c-.7-1.3-1.5-2-3-2"
        }]
    ]],
    xd = ["svg", t, [
        ["path", {
            d: "M21.54 15H17a2 2 0 0 0-2 2v4.54"
        }],
        ["path", {
            d: "M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17"
        }],
        ["path", {
            d: "M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }]
    ]],
    md = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "12",
            y2: "12"
        }],
        ["path", {
            d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
        }]
    ]],
    wd = ["svg", t, [
        ["path", {
            d: "M12 13V2l8 4-8 4"
        }],
        ["path", {
            d: "M20.55 10.23A9 9 0 1 1 8 4.94"
        }],
        ["path", {
            d: "M8 10a5 5 0 1 0 8.9 2.02"
        }]
    ]],
    bd = ["svg", t, [
        ["path", {
            d: "M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4"
        }],
        ["path", {
            d: "M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"
        }],
        ["path", {
            d: "M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5"
        }],
        ["path", {
            d: "M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"
        }],
        ["path", {
            d: "M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"
        }]
    ]],
    Hd = ["svg", t, [
        ["path", {
            d: "M22 10v6M2 10l10-5 10 5-10 5z"
        }],
        ["path", {
            d: "M6 12v5c3 3 9 3 12 0v-5"
        }]
    ]],
    Vd = ["svg", t, [
        ["path", {
            d: "M22 5V2l-5.89 5.89"
        }],
        ["circle", {
            cx: "16.6",
            cy: "15.89",
            r: "3"
        }],
        ["circle", {
            cx: "8.11",
            cy: "7.4",
            r: "3"
        }],
        ["circle", {
            cx: "12.35",
            cy: "11.65",
            r: "3"
        }],
        ["circle", {
            cx: "13.91",
            cy: "5.85",
            r: "3"
        }],
        ["circle", {
            cx: "18.15",
            cy: "10.09",
            r: "3"
        }],
        ["circle", {
            cx: "6.56",
            cy: "13.2",
            r: "3"
        }],
        ["circle", {
            cx: "10.8",
            cy: "17.44",
            r: "3"
        }],
        ["circle", {
            cx: "5",
            cy: "19",
            r: "3"
        }]
    ]],
    Ld = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M3 12h18"
        }],
        ["path", {
            d: "M12 3v18"
        }]
    ]],
    Sd = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M3 9h18"
        }],
        ["path", {
            d: "M3 15h18"
        }],
        ["path", {
            d: "M9 3v18"
        }],
        ["path", {
            d: "M15 3v18"
        }]
    ]],
    Ad = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "9",
            r: "1"
        }],
        ["circle", {
            cx: "19",
            cy: "9",
            r: "1"
        }],
        ["circle", {
            cx: "5",
            cy: "9",
            r: "1"
        }],
        ["circle", {
            cx: "12",
            cy: "15",
            r: "1"
        }],
        ["circle", {
            cx: "19",
            cy: "15",
            r: "1"
        }],
        ["circle", {
            cx: "5",
            cy: "15",
            r: "1"
        }]
    ]],
    Cd = ["svg", t, [
        ["circle", {
            cx: "9",
            cy: "12",
            r: "1"
        }],
        ["circle", {
            cx: "9",
            cy: "5",
            r: "1"
        }],
        ["circle", {
            cx: "9",
            cy: "19",
            r: "1"
        }],
        ["circle", {
            cx: "15",
            cy: "12",
            r: "1"
        }],
        ["circle", {
            cx: "15",
            cy: "5",
            r: "1"
        }],
        ["circle", {
            cx: "15",
            cy: "19",
            r: "1"
        }]
    ]],
    Od = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "5",
            r: "1"
        }],
        ["circle", {
            cx: "19",
            cy: "5",
            r: "1"
        }],
        ["circle", {
            cx: "5",
            cy: "5",
            r: "1"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "1"
        }],
        ["circle", {
            cx: "19",
            cy: "12",
            r: "1"
        }],
        ["circle", {
            cx: "5",
            cy: "12",
            r: "1"
        }],
        ["circle", {
            cx: "12",
            cy: "19",
            r: "1"
        }],
        ["circle", {
            cx: "19",
            cy: "19",
            r: "1"
        }],
        ["circle", {
            cx: "5",
            cy: "19",
            r: "1"
        }]
    ]],
    Ed = ["svg", t, [
        ["path", {
            d: "M3 7V5c0-1.1.9-2 2-2h2"
        }],
        ["path", {
            d: "M17 3h2c1.1 0 2 .9 2 2v2"
        }],
        ["path", {
            d: "M21 17v2c0 1.1-.9 2-2 2h-2"
        }],
        ["path", {
            d: "M7 21H5c-1.1 0-2-.9-2-2v-2"
        }],
        ["rect", {
            width: "7",
            height: "5",
            x: "7",
            y: "7",
            rx: "1"
        }],
        ["rect", {
            width: "7",
            height: "5",
            x: "10",
            y: "12",
            rx: "1"
        }]
    ]],
    kd = ["svg", t, [
        ["path", {
            d: "m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"
        }],
        ["path", {
            d: "M17.64 15 22 10.64"
        }],
        ["path", {
            d: "m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"
        }]
    ]],
    Pd = ["svg", t, [
        ["path", {
            d: "M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4"
        }],
        ["path", {
            d: "M14 11V9a2 2 0 1 0-4 0v2"
        }],
        ["path", {
            d: "M10 10.5V5a2 2 0 1 0-4 0v9"
        }],
        ["path", {
            d: "m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"
        }]
    ]],
    Zd = ["svg", t, [
        ["path", {
            d: "M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"
        }],
        ["path", {
            d: "M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"
        }],
        ["path", {
            d: "M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"
        }],
        ["path", {
            d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
        }]
    ]],
    Td = ["svg", t, [
        ["path", {
            d: "M12 2v8"
        }],
        ["path", {
            d: "m16 6-4 4-4-4"
        }],
        ["rect", {
            width: "20",
            height: "8",
            x: "2",
            y: "14",
            rx: "2"
        }],
        ["path", {
            d: "M6 18h.01"
        }],
        ["path", {
            d: "M10 18h.01"
        }]
    ]],
    zd = ["svg", t, [
        ["path", {
            d: "m16 6-4-4-4 4"
        }],
        ["path", {
            d: "M12 2v8"
        }],
        ["rect", {
            width: "20",
            height: "8",
            x: "2",
            y: "14",
            rx: "2"
        }],
        ["path", {
            d: "M6 18h.01"
        }],
        ["path", {
            d: "M10 18h.01"
        }]
    ]],
    Dd = ["svg", t, [
        ["line", {
            x1: "22",
            x2: "2",
            y1: "12",
            y2: "12"
        }],
        ["path", {
            d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
        }],
        ["line", {
            x1: "6",
            x2: "6.01",
            y1: "16",
            y2: "16"
        }],
        ["line", {
            x1: "10",
            x2: "10.01",
            y1: "16",
            y2: "16"
        }]
    ]],
    _d = ["svg", t, [
        ["path", {
            d: "M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"
        }],
        ["path", {
            d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"
        }],
        ["path", {
            d: "M4 15v-3a6 6 0 0 1 6-6h0"
        }],
        ["path", {
            d: "M14 6h0a6 6 0 0 1 6 6v3"
        }]
    ]],
    Bd = ["svg", t, [
        ["line", {
            x1: "4",
            x2: "20",
            y1: "9",
            y2: "9"
        }],
        ["line", {
            x1: "4",
            x2: "20",
            y1: "15",
            y2: "15"
        }],
        ["line", {
            x1: "10",
            x2: "8",
            y1: "3",
            y2: "21"
        }],
        ["line", {
            x1: "16",
            x2: "14",
            y1: "3",
            y2: "21"
        }]
    ]],
    Rd = ["svg", t, [
        ["path", {
            d: "m5.2 6.2 1.4 1.4"
        }],
        ["path", {
            d: "M2 13h2"
        }],
        ["path", {
            d: "M20 13h2"
        }],
        ["path", {
            d: "m17.4 7.6 1.4-1.4"
        }],
        ["path", {
            d: "M22 17H2"
        }],
        ["path", {
            d: "M22 21H2"
        }],
        ["path", {
            d: "M16 13a4 4 0 0 0-8 0"
        }],
        ["path", {
            d: "M12 5V2.5"
        }]
    ]],
    Fd = ["svg", t, [
        ["path", {
            d: "M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z"
        }],
        ["path", {
            d: "M7.5 12h9"
        }]
    ]],
    jd = ["svg", t, [
        ["path", {
            d: "M4 12h8"
        }],
        ["path", {
            d: "M4 18V6"
        }],
        ["path", {
            d: "M12 18V6"
        }],
        ["path", {
            d: "m17 12 3-2v8"
        }]
    ]],
    qd = ["svg", t, [
        ["path", {
            d: "M4 12h8"
        }],
        ["path", {
            d: "M4 18V6"
        }],
        ["path", {
            d: "M12 18V6"
        }],
        ["path", {
            d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"
        }]
    ]],
    Wd = ["svg", t, [
        ["path", {
            d: "M4 12h8"
        }],
        ["path", {
            d: "M4 18V6"
        }],
        ["path", {
            d: "M12 18V6"
        }],
        ["path", {
            d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"
        }],
        ["path", {
            d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"
        }]
    ]],
    Nd = ["svg", t, [
        ["path", {
            d: "M4 12h8"
        }],
        ["path", {
            d: "M4 18V6"
        }],
        ["path", {
            d: "M12 18V6"
        }],
        ["path", {
            d: "M17 10v4h4"
        }],
        ["path", {
            d: "M21 10v8"
        }]
    ]],
    Id = ["svg", t, [
        ["path", {
            d: "M4 12h8"
        }],
        ["path", {
            d: "M4 18V6"
        }],
        ["path", {
            d: "M12 18V6"
        }],
        ["path", {
            d: "M17 13v-3h4"
        }],
        ["path", {
            d: "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"
        }]
    ]],
    Ud = ["svg", t, [
        ["path", {
            d: "M4 12h8"
        }],
        ["path", {
            d: "M4 18V6"
        }],
        ["path", {
            d: "M12 18V6"
        }],
        ["circle", {
            cx: "19",
            cy: "16",
            r: "2"
        }],
        ["path", {
            d: "M20 10c-2 2-3 3.5-3 6"
        }]
    ]],
    Gd = ["svg", t, [
        ["path", {
            d: "M6 12h12"
        }],
        ["path", {
            d: "M6 20V4"
        }],
        ["path", {
            d: "M18 20V4"
        }]
    ]],
    Xd = ["svg", t, [
        ["path", {
            d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"
        }]
    ]],
    $d = ["svg", t, [
        ["path", {
            d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
        }],
        ["path", {
            d: "m12 13-1-1 2-2-3-3 2-2"
        }]
    ]],
    Yd = ["svg", t, [
        ["path", {
            d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
        }],
        ["path", {
            d: "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"
        }],
        ["path", {
            d: "m18 15-2-2"
        }],
        ["path", {
            d: "m15 18-2-2"
        }]
    ]],
    Kd = ["svg", t, [
        ["line", {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22"
        }],
        ["path", {
            d: "M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35"
        }],
        ["path", {
            d: "M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17"
        }]
    ]],
    Jd = ["svg", t, [
        ["path", {
            d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
        }],
        ["path", {
            d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"
        }]
    ]],
    Qd = ["svg", t, [
        ["path", {
            d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
        }]
    ]],
    tp = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
        }],
        ["path", {
            d: "M12 17h.01"
        }]
    ]],
    ap = ["svg", t, [
        ["path", {
            d: "m3 15 5.12-5.12A3 3 0 0 1 10.24 9H13a2 2 0 1 1 0 4h-2.5m4-.68 4.17-4.89a1.88 1.88 0 0 1 2.92 2.36l-4.2 5.94A3 3 0 0 1 14.96 17H9.83a2 2 0 0 0-1.42.59L7 19"
        }],
        ["path", {
            d: "m2 14 6 6"
        }]
    ]],
    ep = ["svg", t, [
        ["path", {
            d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
        }]
    ]],
    hp = ["svg", t, [
        ["path", {
            d: "m9 11-6 6v3h9l3-3"
        }],
        ["path", {
            d: "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"
        }]
    ]],
    np = ["svg", t, [
        ["path", {
            d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
        }],
        ["path", {
            d: "M3 3v5h5"
        }],
        ["path", {
            d: "M12 7v5l4 2"
        }]
    ]],
    rp = ["svg", t, [
        ["path", {
            d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
        }],
        ["polyline", {
            points: "9 22 9 12 15 12 15 22"
        }]
    ]],
    op = ["svg", t, [
        ["path", {
            d: "M17.5 5.5C19 7 20.5 9 21 11c-1.323.265-2.646.39-4.118.226"
        }],
        ["path", {
            d: "M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5"
        }],
        ["path", {
            d: "M17.5 17.5c-2.5 0-4 0-6-1"
        }],
        ["path", {
            d: "M20 11.5c1 1.5 2 3.5 2 4.5"
        }],
        ["path", {
            d: "M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5"
        }],
        ["path", {
            d: "M22 22c-2 0-3.5-.5-5.5-1.5"
        }],
        ["path", {
            d: "M4.783 4.782C1.073 8.492 1 14.5 5 18c1-1 2-4.5 1.5-6.5 1.5 1 4 1 5.5.5M8.227 2.57C11.578 1.335 15.453 2.089 18 5c-.88.88-3.7 1.761-5.726 1.618"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }]
    ]],
    cp = ["svg", t, [
        ["path", {
            d: "M17.5 5.5C19 7 20.5 9 21 11c-2.5.5-5 .5-8.5-1"
        }],
        ["path", {
            d: "M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5"
        }],
        ["path", {
            d: "M16.5 11.5c1 2 1 3.5 1 6-2.5 0-4 0-6-1"
        }],
        ["path", {
            d: "M20 11.5c1 1.5 2 3.5 2 4.5-1.5.5-3 0-4.5-.5"
        }],
        ["path", {
            d: "M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5"
        }],
        ["path", {
            d: "M20.5 16.5c1 2 1.5 3.5 1.5 5.5-2 0-3.5-.5-5.5-1.5"
        }],
        ["path", {
            d: "M4.783 4.782C8.493 1.072 14.5 1 18 5c-1 1-4.5 2-6.5 1.5 1 1.5 1 4 .5 5.5-1.5.5-4 .5-5.5-.5C7 13.5 6 17 5 18c-4-3.5-3.927-9.508-.217-13.218Z"
        }],
        ["path", {
            d: "M4.5 4.5 3 3c-.184-.185-.184-.816 0-1"
        }]
    ]],
    sp = ["svg", t, [
        ["path", {
            d: "M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"
        }],
        ["path", {
            d: "m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16"
        }],
        ["path", {
            d: "M8 7h.01"
        }],
        ["path", {
            d: "M16 7h.01"
        }],
        ["path", {
            d: "M12 7h.01"
        }],
        ["path", {
            d: "M12 11h.01"
        }],
        ["path", {
            d: "M16 11h.01"
        }],
        ["path", {
            d: "M8 11h.01"
        }],
        ["path", {
            d: "M10 22v-6.5m4 0V22"
        }]
    ]],
    ip = ["svg", t, [
        ["path", {
            d: "M5 22h14"
        }],
        ["path", {
            d: "M5 2h14"
        }],
        ["path", {
            d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"
        }],
        ["path", {
            d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"
        }]
    ]],
    dp = ["svg", t, [
        ["path", {
            d: "M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6Zm-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"
        }],
        ["path", {
            d: "M12.14 11a3.5 3.5 0 1 1 6.71 0"
        }],
        ["path", {
            d: "M15.5 6.5a3.5 3.5 0 1 0-7 0"
        }]
    ]],
    pp = ["svg", t, [
        ["path", {
            d: "m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"
        }],
        ["path", {
            d: "M17 7A5 5 0 0 0 7 7"
        }],
        ["path", {
            d: "M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"
        }]
    ]],
    lp = ["svg", t, [
        ["path", {
            d: "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"
        }],
        ["line", {
            x1: "16",
            x2: "22",
            y1: "5",
            y2: "5"
        }],
        ["circle", {
            cx: "9",
            cy: "9",
            r: "2"
        }],
        ["path", {
            d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
        }]
    ]],
    vp = ["svg", t, [
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }],
        ["path", {
            d: "M10.41 10.41a2 2 0 1 1-2.83-2.83"
        }],
        ["line", {
            x1: "13.5",
            x2: "6",
            y1: "13.5",
            y2: "21"
        }],
        ["line", {
            x1: "18",
            x2: "21",
            y1: "12",
            y2: "15"
        }],
        ["path", {
            d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"
        }],
        ["path", {
            d: "M21 15V5a2 2 0 0 0-2-2H9"
        }]
    ]],
    Mp = ["svg", t, [
        ["path", {
            d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"
        }],
        ["line", {
            x1: "16",
            x2: "22",
            y1: "5",
            y2: "5"
        }],
        ["line", {
            x1: "19",
            x2: "19",
            y1: "2",
            y2: "8"
        }],
        ["circle", {
            cx: "9",
            cy: "9",
            r: "2"
        }],
        ["path", {
            d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
        }]
    ]],
    yp = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }],
        ["circle", {
            cx: "9",
            cy: "9",
            r: "2"
        }],
        ["path", {
            d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
        }]
    ]],
    gp = ["svg", t, [
        ["path", {
            d: "M12 3v12"
        }],
        ["path", {
            d: "m8 11 4 4 4-4"
        }],
        ["path", {
            d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"
        }]
    ]],
    up = ["svg", t, [
        ["polyline", {
            points: "22 12 16 12 14 15 10 15 8 12 2 12"
        }],
        ["path", {
            d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
        }]
    ]],
    fp = ["svg", t, [
        ["polyline", {
            points: "3 8 7 12 3 16"
        }],
        ["line", {
            x1: "21",
            x2: "11",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "21",
            x2: "11",
            y1: "6",
            y2: "6"
        }],
        ["line", {
            x1: "21",
            x2: "11",
            y1: "18",
            y2: "18"
        }]
    ]],
    xp = ["svg", t, [
        ["path", {
            d: "M6 3h12"
        }],
        ["path", {
            d: "M6 8h12"
        }],
        ["path", {
            d: "m6 13 8.5 8"
        }],
        ["path", {
            d: "M6 13h3"
        }],
        ["path", {
            d: "M9 13c6.667 0 6.667-10 0-10"
        }]
    ]],
    mp = ["svg", t, [
        ["path", {
            d: "M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"
        }]
    ]],
    wp = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "M12 16v-4"
        }],
        ["path", {
            d: "M12 8h.01"
        }]
    ]],
    bp = ["svg", t, [
        ["rect", {
            width: "20",
            height: "20",
            x: "2",
            y: "2",
            rx: "5",
            ry: "5"
        }],
        ["path", {
            d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
        }],
        ["line", {
            x1: "17.5",
            x2: "17.51",
            y1: "6.5",
            y2: "6.5"
        }]
    ]],
    Hp = ["svg", t, [
        ["line", {
            x1: "19",
            x2: "10",
            y1: "4",
            y2: "4"
        }],
        ["line", {
            x1: "14",
            x2: "5",
            y1: "20",
            y2: "20"
        }],
        ["line", {
            x1: "15",
            x2: "9",
            y1: "4",
            y2: "20"
        }]
    ]],
    Vp = ["svg", t, [
        ["path", {
            d: "M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8"
        }],
        ["polyline", {
            points: "16 14 20 18 16 22"
        }]
    ]],
    Lp = ["svg", t, [
        ["path", {
            d: "M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4"
        }],
        ["polyline", {
            points: "8 22 4 18 8 14"
        }]
    ]],
    Sp = ["svg", t, [
        ["path", {
            d: "M12 9.5V21m0-11.5L6 3m6 6.5L18 3"
        }],
        ["path", {
            d: "M6 15h12"
        }],
        ["path", {
            d: "M6 11h12"
        }]
    ]],
    Ap = ["svg", t, [
        ["path", {
            d: "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"
        }],
        ["path", {
            d: "M6 15v-2"
        }],
        ["path", {
            d: "M12 15V9"
        }],
        ["circle", {
            cx: "12",
            cy: "6",
            r: "3"
        }]
    ]],
    Cp = ["svg", t, [
        ["path", {
            d: "M8 7v7"
        }],
        ["path", {
            d: "M12 7v4"
        }],
        ["path", {
            d: "M16 7v9"
        }],
        ["path", {
            d: "M5 3a2 2 0 0 0-2 2"
        }],
        ["path", {
            d: "M9 3h1"
        }],
        ["path", {
            d: "M14 3h1"
        }],
        ["path", {
            d: "M19 3a2 2 0 0 1 2 2"
        }],
        ["path", {
            d: "M21 9v1"
        }],
        ["path", {
            d: "M21 14v1"
        }],
        ["path", {
            d: "M21 19a2 2 0 0 1-2 2"
        }],
        ["path", {
            d: "M14 21h1"
        }],
        ["path", {
            d: "M9 21h1"
        }],
        ["path", {
            d: "M5 21a2 2 0 0 1-2-2"
        }],
        ["path", {
            d: "M3 14v1"
        }],
        ["path", {
            d: "M3 9v1"
        }]
    ]],
    Op = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M8 7v7"
        }],
        ["path", {
            d: "M12 7v4"
        }],
        ["path", {
            d: "M16 7v9"
        }]
    ]],
    Ep = ["svg", t, [
        ["path", {
            d: "M6 5v11"
        }],
        ["path", {
            d: "M12 5v6"
        }],
        ["path", {
            d: "M18 5v14"
        }]
    ]],
    kp = ["svg", t, [
        ["path", {
            d: "M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"
        }],
        ["circle", {
            cx: "16.5",
            cy: "7.5",
            r: ".5"
        }]
    ]],
    Pp = ["svg", t, [
        ["path", {
            d: "M12.4 2.7c.9-.9 2.5-.9 3.4 0l5.5 5.5c.9.9.9 2.5 0 3.4l-3.7 3.7c-.9.9-2.5.9-3.4 0L8.7 9.8c-.9-.9-.9-2.5 0-3.4Z"
        }],
        ["path", {
            d: "m14 7 3 3"
        }],
        ["path", {
            d: "M9.4 10.6 2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4"
        }]
    ]],
    Zp = ["svg", t, [
        ["circle", {
            cx: "7.5",
            cy: "15.5",
            r: "5.5"
        }],
        ["path", {
            d: "m21 2-9.6 9.6"
        }],
        ["path", {
            d: "m15.5 7.5 3 3L22 7l-3-3"
        }]
    ]],
    Tp = ["svg", t, [
        ["rect", {
            width: "20",
            height: "16",
            x: "2",
            y: "4",
            rx: "2",
            ry: "2"
        }],
        ["path", {
            d: "M6 8h.001"
        }],
        ["path", {
            d: "M10 8h.001"
        }],
        ["path", {
            d: "M14 8h.001"
        }],
        ["path", {
            d: "M18 8h.001"
        }],
        ["path", {
            d: "M8 12h.001"
        }],
        ["path", {
            d: "M12 12h.001"
        }],
        ["path", {
            d: "M16 12h.001"
        }],
        ["path", {
            d: "M7 16h10"
        }]
    ]],
    zp = ["svg", t, [
        ["path", {
            d: "M12 2v5"
        }],
        ["path", {
            d: "M6 7h12l4 9H2l4-9Z"
        }],
        ["path", {
            d: "M9.17 16a3 3 0 1 0 5.66 0"
        }]
    ]],
    Dp = ["svg", t, [
        ["path", {
            d: "m14 5-3 3 2 7 8-8-7-2Z"
        }],
        ["path", {
            d: "m14 5-3 3-3-3 3-3 3 3Z"
        }],
        ["path", {
            d: "M9.5 6.5 4 12l3 6"
        }],
        ["path", {
            d: "M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z"
        }]
    ]],
    _p = ["svg", t, [
        ["path", {
            d: "M9 2h6l3 7H6l3-7Z"
        }],
        ["path", {
            d: "M12 9v13"
        }],
        ["path", {
            d: "M9 22h6"
        }]
    ]],
    Bp = ["svg", t, [
        ["path", {
            d: "M11 13h6l3 7H8l3-7Z"
        }],
        ["path", {
            d: "M14 13V8a2 2 0 0 0-2-2H8"
        }],
        ["path", {
            d: "M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z"
        }]
    ]],
    Rp = ["svg", t, [
        ["path", {
            d: "M11 4h6l3 7H8l3-7Z"
        }],
        ["path", {
            d: "M14 11v5a2 2 0 0 1-2 2H8"
        }],
        ["path", {
            d: "M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z"
        }]
    ]],
    Fp = ["svg", t, [
        ["path", {
            d: "M8 2h8l4 10H4L8 2Z"
        }],
        ["path", {
            d: "M12 12v6"
        }],
        ["path", {
            d: "M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z"
        }]
    ]],
    jp = ["svg", t, [
        ["line", {
            x1: "3",
            x2: "21",
            y1: "22",
            y2: "22"
        }],
        ["line", {
            x1: "6",
            x2: "6",
            y1: "18",
            y2: "11"
        }],
        ["line", {
            x1: "10",
            x2: "10",
            y1: "18",
            y2: "11"
        }],
        ["line", {
            x1: "14",
            x2: "14",
            y1: "18",
            y2: "11"
        }],
        ["line", {
            x1: "18",
            x2: "18",
            y1: "18",
            y2: "11"
        }],
        ["polygon", {
            points: "12 2 20 7 4 7"
        }]
    ]],
    qp = ["svg", t, [
        ["path", {
            d: "m5 8 6 6"
        }],
        ["path", {
            d: "m4 14 6-6 2-3"
        }],
        ["path", {
            d: "M2 5h12"
        }],
        ["path", {
            d: "M7 2h1"
        }],
        ["path", {
            d: "m22 22-5-10-5 10"
        }],
        ["path", {
            d: "M14 18h6"
        }]
    ]],
    Wp = ["svg", t, [
        ["rect", {
            width: "18",
            height: "12",
            x: "3",
            y: "4",
            rx: "2",
            ry: "2"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "20",
            y2: "20"
        }]
    ]],
    Np = ["svg", t, [
        ["path", {
            d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"
        }]
    ]],
    Ip = ["svg", t, [
        ["path", {
            d: "M7 22a5 5 0 0 1-2-4"
        }],
        ["path", {
            d: "M7 16.93c.96.43 1.96.74 2.99.91"
        }],
        ["path", {
            d: "M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2"
        }],
        ["path", {
            d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
        }],
        ["path", {
            d: "M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z"
        }]
    ]],
    Up = ["svg", t, [
        ["path", {
            d: "M7 22a5 5 0 0 1-2-4"
        }],
        ["path", {
            d: "M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1"
        }],
        ["path", {
            d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
        }]
    ]],
    Gp = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"
        }],
        ["line", {
            x1: "9",
            x2: "9.01",
            y1: "9",
            y2: "9"
        }],
        ["line", {
            x1: "15",
            x2: "15.01",
            y1: "9",
            y2: "9"
        }]
    ]],
    Xp = ["svg", t, [
        ["polygon", {
            points: "12 2 2 7 12 12 22 7 12 2"
        }],
        ["polyline", {
            points: "2 17 12 22 22 17"
        }],
        ["polyline", {
            points: "2 12 12 17 22 12"
        }]
    ]],
    $p = ["svg", t, [
        ["rect", {
            width: "7",
            height: "9",
            x: "3",
            y: "3",
            rx: "1"
        }],
        ["rect", {
            width: "7",
            height: "5",
            x: "14",
            y: "3",
            rx: "1"
        }],
        ["rect", {
            width: "7",
            height: "9",
            x: "14",
            y: "12",
            rx: "1"
        }],
        ["rect", {
            width: "7",
            height: "5",
            x: "3",
            y: "16",
            rx: "1"
        }]
    ]],
    Yp = ["svg", t, [
        ["rect", {
            width: "7",
            height: "7",
            x: "3",
            y: "3",
            rx: "1"
        }],
        ["rect", {
            width: "7",
            height: "7",
            x: "14",
            y: "3",
            rx: "1"
        }],
        ["rect", {
            width: "7",
            height: "7",
            x: "14",
            y: "14",
            rx: "1"
        }],
        ["rect", {
            width: "7",
            height: "7",
            x: "3",
            y: "14",
            rx: "1"
        }]
    ]],
    Kp = ["svg", t, [
        ["rect", {
            width: "7",
            height: "7",
            x: "3",
            y: "3",
            rx: "1"
        }],
        ["rect", {
            width: "7",
            height: "7",
            x: "3",
            y: "14",
            rx: "1"
        }],
        ["path", {
            d: "M14 4h7"
        }],
        ["path", {
            d: "M14 9h7"
        }],
        ["path", {
            d: "M14 15h7"
        }],
        ["path", {
            d: "M14 20h7"
        }]
    ]],
    Jp = ["svg", t, [
        ["rect", {
            width: "7",
            height: "18",
            x: "3",
            y: "3",
            rx: "1"
        }],
        ["rect", {
            width: "7",
            height: "7",
            x: "14",
            y: "3",
            rx: "1"
        }],
        ["rect", {
            width: "7",
            height: "7",
            x: "14",
            y: "14",
            rx: "1"
        }]
    ]],
    Qp = ["svg", t, [
        ["rect", {
            width: "18",
            height: "7",
            x: "3",
            y: "3",
            rx: "1"
        }],
        ["rect", {
            width: "7",
            height: "7",
            x: "3",
            y: "14",
            rx: "1"
        }],
        ["rect", {
            width: "7",
            height: "7",
            x: "14",
            y: "14",
            rx: "1"
        }]
    ]],
    tl = ["svg", t, [
        ["rect", {
            width: "18",
            height: "7",
            x: "3",
            y: "3",
            rx: "1"
        }],
        ["rect", {
            width: "9",
            height: "7",
            x: "3",
            y: "14",
            rx: "1"
        }],
        ["rect", {
            width: "5",
            height: "7",
            x: "16",
            y: "14",
            rx: "1"
        }]
    ]],
    al = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }],
        ["line", {
            x1: "3",
            x2: "21",
            y1: "9",
            y2: "9"
        }],
        ["line", {
            x1: "9",
            x2: "9",
            y1: "21",
            y2: "9"
        }]
    ]],
    el = ["svg", t, [
        ["path", {
            d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
        }],
        ["path", {
            d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
        }]
    ]],
    hl = ["svg", t, [
        ["path", {
            d: "M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"
        }],
        ["path", {
            d: "M2 22 17 7"
        }]
    ]],
    nl = ["svg", t, [
        ["path", {
            d: "m16 6 4 14"
        }],
        ["path", {
            d: "M12 6v14"
        }],
        ["path", {
            d: "M8 8v12"
        }],
        ["path", {
            d: "M4 4v16"
        }]
    ]],
    rl = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "m4.93 4.93 4.24 4.24"
        }],
        ["path", {
            d: "m14.83 9.17 4.24-4.24"
        }],
        ["path", {
            d: "m14.83 14.83 4.24 4.24"
        }],
        ["path", {
            d: "m9.17 14.83-4.24 4.24"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "4"
        }]
    ]],
    ol = ["svg", t, [
        ["path", {
            d: "M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2"
        }],
        ["path", {
            d: "M6 12h4"
        }],
        ["path", {
            d: "M14 12h2v8"
        }],
        ["path", {
            d: "M6 20h4"
        }],
        ["path", {
            d: "M14 20h4"
        }]
    ]],
    cl = ["svg", t, [
        ["path", {
            d: "M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5"
        }],
        ["path", {
            d: "m2 2 20 20"
        }],
        ["path", {
            d: "M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5"
        }],
        ["path", {
            d: "M9 18h6"
        }],
        ["path", {
            d: "M10 22h4"
        }]
    ]],
    sl = ["svg", t, [
        ["path", {
            d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
        }],
        ["path", {
            d: "M9 18h6"
        }],
        ["path", {
            d: "M10 22h4"
        }]
    ]],
    il = ["svg", t, [
        ["path", {
            d: "M3 3v18h18"
        }],
        ["path", {
            d: "m19 9-5 5-4-4-3 3"
        }]
    ]],
    dl = ["svg", t, [
        ["path", {
            d: "M9 17H7A5 5 0 0 1 7 7"
        }],
        ["path", {
            d: "M15 7h2a5 5 0 0 1 4 8"
        }],
        ["line", {
            x1: "8",
            x2: "12",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }]
    ]],
    pl = ["svg", t, [
        ["path", {
            d: "M9 17H7A5 5 0 0 1 7 7h2"
        }],
        ["path", {
            d: "M15 7h2a5 5 0 1 1 0 10h-2"
        }],
        ["line", {
            x1: "8",
            x2: "16",
            y1: "12",
            y2: "12"
        }]
    ]],
    ll = ["svg", t, [
        ["path", {
            d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
        }],
        ["path", {
            d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
        }]
    ]],
    vl = ["svg", t, [
        ["path", {
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
        }],
        ["rect", {
            width: "4",
            height: "12",
            x: "2",
            y: "9"
        }],
        ["circle", {
            cx: "4",
            cy: "4",
            r: "2"
        }]
    ]],
    Ml = ["svg", t, [
        ["path", {
            d: "m3 17 2 2 4-4"
        }],
        ["path", {
            d: "m3 7 2 2 4-4"
        }],
        ["path", {
            d: "M13 6h8"
        }],
        ["path", {
            d: "M13 12h8"
        }],
        ["path", {
            d: "M13 18h8"
        }]
    ]],
    yl = ["svg", t, [
        ["path", {
            d: "M16 12H3"
        }],
        ["path", {
            d: "M16 6H3"
        }],
        ["path", {
            d: "M10 18H3"
        }],
        ["path", {
            d: "M21 6v10a2 2 0 0 1-2 2h-5"
        }],
        ["path", {
            d: "m16 16-2 2 2 2"
        }]
    ]],
    gl = ["svg", t, [
        ["path", {
            d: "M3 6h18"
        }],
        ["path", {
            d: "M7 12h10"
        }],
        ["path", {
            d: "M10 18h4"
        }]
    ]],
    ul = ["svg", t, [
        ["path", {
            d: "M11 12H3"
        }],
        ["path", {
            d: "M16 6H3"
        }],
        ["path", {
            d: "M16 18H3"
        }],
        ["path", {
            d: "M21 12h-6"
        }]
    ]],
    fl = ["svg", t, [
        ["path", {
            d: "M21 15V6"
        }],
        ["path", {
            d: "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        }],
        ["path", {
            d: "M12 12H3"
        }],
        ["path", {
            d: "M16 6H3"
        }],
        ["path", {
            d: "M12 18H3"
        }]
    ]],
    xl = ["svg", t, [
        ["line", {
            x1: "10",
            x2: "21",
            y1: "6",
            y2: "6"
        }],
        ["line", {
            x1: "10",
            x2: "21",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "10",
            x2: "21",
            y1: "18",
            y2: "18"
        }],
        ["path", {
            d: "M4 6h1v4"
        }],
        ["path", {
            d: "M4 10h2"
        }],
        ["path", {
            d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"
        }]
    ]],
    ml = ["svg", t, [
        ["path", {
            d: "M11 12H3"
        }],
        ["path", {
            d: "M16 6H3"
        }],
        ["path", {
            d: "M16 18H3"
        }],
        ["path", {
            d: "M18 9v6"
        }],
        ["path", {
            d: "M21 12h-6"
        }]
    ]],
    wl = ["svg", t, [
        ["path", {
            d: "M21 6H3"
        }],
        ["path", {
            d: "M7 12H3"
        }],
        ["path", {
            d: "M7 18H3"
        }],
        ["path", {
            d: "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"
        }],
        ["path", {
            d: "M11 10v4h4"
        }]
    ]],
    bl = ["svg", t, [
        ["path", {
            d: "M16 12H3"
        }],
        ["path", {
            d: "M16 18H3"
        }],
        ["path", {
            d: "M10 6H3"
        }],
        ["path", {
            d: "M21 18V8a2 2 0 0 0-2-2h-5"
        }],
        ["path", {
            d: "m16 8-2-2 2-2"
        }]
    ]],
    Hl = ["svg", t, [
        ["rect", {
            x: "3",
            y: "5",
            width: "6",
            height: "6",
            rx: "1"
        }],
        ["path", {
            d: "m3 17 2 2 4-4"
        }],
        ["path", {
            d: "M13 6h8"
        }],
        ["path", {
            d: "M13 12h8"
        }],
        ["path", {
            d: "M13 18h8"
        }]
    ]],
    Vl = ["svg", t, [
        ["path", {
            d: "M21 12h-8"
        }],
        ["path", {
            d: "M21 6H8"
        }],
        ["path", {
            d: "M21 18h-8"
        }],
        ["path", {
            d: "M3 6v4c0 1.1.9 2 2 2h3"
        }],
        ["path", {
            d: "M3 10v6c0 1.1.9 2 2 2h3"
        }]
    ]],
    Ll = ["svg", t, [
        ["path", {
            d: "M12 12H3"
        }],
        ["path", {
            d: "M16 6H3"
        }],
        ["path", {
            d: "M12 18H3"
        }],
        ["path", {
            d: "m16 12 5 3-5 3v-6Z"
        }]
    ]],
    Sl = ["svg", t, [
        ["path", {
            d: "M11 12H3"
        }],
        ["path", {
            d: "M16 6H3"
        }],
        ["path", {
            d: "M16 18H3"
        }],
        ["path", {
            d: "m19 10-4 4"
        }],
        ["path", {
            d: "m15 10 4 4"
        }]
    ]],
    Al = ["svg", t, [
        ["line", {
            x1: "8",
            x2: "21",
            y1: "6",
            y2: "6"
        }],
        ["line", {
            x1: "8",
            x2: "21",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "8",
            x2: "21",
            y1: "18",
            y2: "18"
        }],
        ["line", {
            x1: "3",
            x2: "3.01",
            y1: "6",
            y2: "6"
        }],
        ["line", {
            x1: "3",
            x2: "3.01",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "3",
            x2: "3.01",
            y1: "18",
            y2: "18"
        }]
    ]],
    Cl = ["svg", t, [
        ["path", {
            d: "M21 12a9 9 0 1 1-6.219-8.56"
        }]
    ]],
    Ol = ["svg", t, [
        ["line", {
            x1: "12",
            x2: "12",
            y1: "2",
            y2: "6"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "18",
            y2: "22"
        }],
        ["line", {
            x1: "4.93",
            x2: "7.76",
            y1: "4.93",
            y2: "7.76"
        }],
        ["line", {
            x1: "16.24",
            x2: "19.07",
            y1: "16.24",
            y2: "19.07"
        }],
        ["line", {
            x1: "2",
            x2: "6",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "18",
            x2: "22",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "4.93",
            x2: "7.76",
            y1: "19.07",
            y2: "16.24"
        }],
        ["line", {
            x1: "16.24",
            x2: "19.07",
            y1: "7.76",
            y2: "4.93"
        }]
    ]],
    El = ["svg", t, [
        ["line", {
            x1: "2",
            x2: "5",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "19",
            x2: "22",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "2",
            y2: "5"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "19",
            y2: "22"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "7"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "3"
        }]
    ]],
    kl = ["svg", t, [
        ["line", {
            x1: "2",
            x2: "5",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "19",
            x2: "22",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "2",
            y2: "5"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "19",
            y2: "22"
        }],
        ["path", {
            d: "M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11"
        }],
        ["path", {
            d: "M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }]
    ]],
    Pl = ["svg", t, [
        ["line", {
            x1: "2",
            x2: "5",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "19",
            x2: "22",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "2",
            y2: "5"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "19",
            y2: "22"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "7"
        }]
    ]],
    Zl = ["svg", t, [
        ["rect", {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2"
        }],
        ["path", {
            d: "M7 11V7a5 5 0 0 1 10 0v4"
        }]
    ]],
    Tl = ["svg", t, [
        ["path", {
            d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
        }],
        ["polyline", {
            points: "10 17 15 12 10 7"
        }],
        ["line", {
            x1: "15",
            x2: "3",
            y1: "12",
            y2: "12"
        }]
    ]],
    zl = ["svg", t, [
        ["path", {
            d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
        }],
        ["polyline", {
            points: "16 17 21 12 16 7"
        }],
        ["line", {
            x1: "21",
            x2: "9",
            y1: "12",
            y2: "12"
        }]
    ]],
    Dl = ["svg", t, [
        ["circle", {
            cx: "11",
            cy: "11",
            r: "8"
        }],
        ["path", {
            d: "m21 21-4.3-4.3"
        }],
        ["path", {
            d: "M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0"
        }]
    ]],
    _l = ["svg", t, [
        ["path", {
            d: "M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0"
        }],
        ["path", {
            d: "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"
        }],
        ["path", {
            d: "M10 20h4"
        }],
        ["circle", {
            cx: "16",
            cy: "20",
            r: "2"
        }],
        ["circle", {
            cx: "8",
            cy: "20",
            r: "2"
        }]
    ]],
    Bl = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M8 16V8l4 4 4-4v8"
        }]
    ]],
    Rl = ["svg", t, [
        ["path", {
            d: "m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"
        }],
        ["path", {
            d: "m5 8 4 4"
        }],
        ["path", {
            d: "m12 15 4 4"
        }]
    ]],
    Fl = ["svg", t, [
        ["path", {
            d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"
        }],
        ["path", {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
        }],
        ["path", {
            d: "m16 19 2 2 4-4"
        }]
    ]],
    jl = ["svg", t, [
        ["path", {
            d: "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"
        }],
        ["path", {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
        }],
        ["path", {
            d: "M16 19h6"
        }]
    ]],
    ql = ["svg", t, [
        ["path", {
            d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"
        }],
        ["path", {
            d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"
        }]
    ]],
    Wl = ["svg", t, [
        ["path", {
            d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"
        }],
        ["path", {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
        }],
        ["path", {
            d: "M19 16v6"
        }],
        ["path", {
            d: "M16 19h6"
        }]
    ]],
    Nl = ["svg", t, [
        ["path", {
            d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"
        }],
        ["path", {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
        }],
        ["path", {
            d: "M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"
        }],
        ["path", {
            d: "M20 22v.01"
        }]
    ]],
    Il = ["svg", t, [
        ["path", {
            d: "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"
        }],
        ["path", {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
        }],
        ["path", {
            d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z"
        }],
        ["circle", {
            cx: "18",
            cy: "18",
            r: "3"
        }],
        ["path", {
            d: "m22 22-1.5-1.5"
        }]
    ]],
    Ul = ["svg", t, [
        ["path", {
            d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"
        }],
        ["path", {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
        }],
        ["path", {
            d: "M20 14v4"
        }],
        ["path", {
            d: "M20 22v.01"
        }]
    ]],
    Gl = ["svg", t, [
        ["path", {
            d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9"
        }],
        ["path", {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
        }],
        ["path", {
            d: "m17 17 4 4"
        }],
        ["path", {
            d: "m21 17-4 4"
        }]
    ]],
    Xl = ["svg", t, [
        ["rect", {
            width: "20",
            height: "16",
            x: "2",
            y: "4",
            rx: "2"
        }],
        ["path", {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
        }]
    ]],
    $l = ["svg", t, [
        ["path", {
            d: "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"
        }],
        ["polyline", {
            points: "15,9 18,9 18,11"
        }],
        ["path", {
            d: "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0"
        }],
        ["line", {
            x1: "6",
            x2: "7",
            y1: "10",
            y2: "10"
        }]
    ]],
    Yl = ["svg", t, [
        ["rect", {
            width: "16",
            height: "13",
            x: "6",
            y: "4",
            rx: "2"
        }],
        ["path", {
            d: "m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"
        }],
        ["path", {
            d: "M2 8v11c0 1.1.9 2 2 2h14"
        }]
    ]],
    Kl = ["svg", t, [
        ["path", {
            d: "M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5"
        }],
        ["path", {
            d: "M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82"
        }],
        ["path", {
            d: "M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13"
        }],
        ["path", {
            d: "M14.9 9.25a3 3 0 0 0-2.15-2.16"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }]
    ]],
    Jl = ["svg", t, [
        ["path", {
            d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
        }],
        ["circle", {
            cx: "12",
            cy: "10",
            r: "3"
        }]
    ]],
    Ql = ["svg", t, [
        ["polygon", {
            points: "3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"
        }],
        ["line", {
            x1: "9",
            x2: "9",
            y1: "3",
            y2: "18"
        }],
        ["line", {
            x1: "15",
            x2: "15",
            y1: "6",
            y2: "21"
        }]
    ]],
    t4 = ["svg", t, [
        ["path", {
            d: "M8 22h8"
        }],
        ["path", {
            d: "M12 11v11"
        }],
        ["path", {
            d: "m19 3-7 8-7-8Z"
        }]
    ]],
    a4 = ["svg", t, [
        ["polyline", {
            points: "15 3 21 3 21 9"
        }],
        ["polyline", {
            points: "9 21 3 21 3 15"
        }],
        ["line", {
            x1: "21",
            x2: "14",
            y1: "3",
            y2: "10"
        }],
        ["line", {
            x1: "3",
            x2: "10",
            y1: "21",
            y2: "14"
        }]
    ]],
    e4 = ["svg", t, [
        ["path", {
            d: "M8 3H5a2 2 0 0 0-2 2v3"
        }],
        ["path", {
            d: "M21 8V5a2 2 0 0 0-2-2h-3"
        }],
        ["path", {
            d: "M3 16v3a2 2 0 0 0 2 2h3"
        }],
        ["path", {
            d: "M16 21h3a2 2 0 0 0 2-2v-3"
        }]
    ]],
    h4 = ["svg", t, [
        ["path", {
            d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"
        }],
        ["path", {
            d: "M11 12 5.12 2.2"
        }],
        ["path", {
            d: "m13 12 5.88-9.8"
        }],
        ["path", {
            d: "M8 7h8"
        }],
        ["circle", {
            cx: "12",
            cy: "17",
            r: "5"
        }],
        ["path", {
            d: "M12 18v-2h-.5"
        }]
    ]],
    n4 = ["svg", t, [
        ["path", {
            d: "M9.26 9.26 3 11v3l14.14 3.14"
        }],
        ["path", {
            d: "M21 15.34V6l-7.31 2.03"
        }],
        ["path", {
            d: "M11.6 16.8a3 3 0 1 1-5.8-1.6"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }]
    ]],
    r4 = ["svg", t, [
        ["path", {
            d: "m3 11 18-5v12L3 14v-3z"
        }],
        ["path", {
            d: "M11.6 16.8a3 3 0 1 1-5.8-1.6"
        }]
    ]],
    o4 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["line", {
            x1: "8",
            x2: "16",
            y1: "15",
            y2: "15"
        }],
        ["line", {
            x1: "9",
            x2: "9.01",
            y1: "9",
            y2: "9"
        }],
        ["line", {
            x1: "15",
            x2: "15.01",
            y1: "9",
            y2: "9"
        }]
    ]],
    c4 = ["svg", t, [
        ["path", {
            d: "M6 19v-3"
        }],
        ["path", {
            d: "M10 19v-3"
        }],
        ["path", {
            d: "M14 19v-3"
        }],
        ["path", {
            d: "M18 19v-3"
        }],
        ["path", {
            d: "M8 11V9"
        }],
        ["path", {
            d: "M16 11V9"
        }],
        ["path", {
            d: "M12 11V9"
        }],
        ["path", {
            d: "M2 15h20"
        }],
        ["path", {
            d: "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"
        }]
    ]],
    s4 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M7 8h10"
        }],
        ["path", {
            d: "M7 12h10"
        }],
        ["path", {
            d: "M7 16h10"
        }]
    ]],
    i4 = ["svg", t, [
        ["line", {
            x1: "4",
            x2: "20",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "4",
            x2: "20",
            y1: "6",
            y2: "6"
        }],
        ["line", {
            x1: "4",
            x2: "20",
            y1: "18",
            y2: "18"
        }]
    ]],
    d4 = ["svg", t, [
        ["path", {
            d: "m8 6 4-4 4 4"
        }],
        ["path", {
            d: "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"
        }],
        ["path", {
            d: "m20 22-5-5"
        }]
    ]],
    p4 = ["svg", t, [
        ["path", {
            d: "m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"
        }]
    ]],
    l4 = ["svg", t, [
        ["path", {
            d: "M3 6V5c0-1.1.9-2 2-2h2"
        }],
        ["path", {
            d: "M11 3h3"
        }],
        ["path", {
            d: "M18 3h1c1.1 0 2 .9 2 2"
        }],
        ["path", {
            d: "M21 9v2"
        }],
        ["path", {
            d: "M21 15c0 1.1-.9 2-2 2h-1"
        }],
        ["path", {
            d: "M14 17h-3"
        }],
        ["path", {
            d: "m7 17-4 4v-5"
        }],
        ["path", {
            d: "M3 12v-2"
        }]
    ]],
    v4 = ["svg", t, [
        ["path", {
            d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        }],
        ["line", {
            x1: "9",
            x2: "15",
            y1: "10",
            y2: "10"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "7",
            y2: "13"
        }]
    ]],
    M4 = ["svg", t, [
        ["path", {
            d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        }]
    ]],
    y4 = ["svg", t, [
        ["path", {
            d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"
        }],
        ["path", {
            d: "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"
        }]
    ]],
    g4 = ["svg", t, [
        ["path", {
            d: "m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"
        }],
        ["circle", {
            cx: "17",
            cy: "7",
            r: "5"
        }]
    ]],
    u4 = ["svg", t, [
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }],
        ["path", {
            d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"
        }],
        ["path", {
            d: "M5 10v2a7 7 0 0 0 12 5"
        }],
        ["path", {
            d: "M15 9.34V5a3 3 0 0 0-5.68-1.33"
        }],
        ["path", {
            d: "M9 9v3a3 3 0 0 0 5.12 2.12"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "19",
            y2: "22"
        }]
    ]],
    f4 = ["svg", t, [
        ["path", {
            d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"
        }],
        ["path", {
            d: "M19 10v2a7 7 0 0 1-14 0v-2"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "19",
            y2: "22"
        }]
    ]],
    x4 = ["svg", t, [
        ["path", {
            d: "M6 18h8"
        }],
        ["path", {
            d: "M3 22h18"
        }],
        ["path", {
            d: "M14 22a7 7 0 1 0 0-14h-1"
        }],
        ["path", {
            d: "M9 14h2"
        }],
        ["path", {
            d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"
        }],
        ["path", {
            d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"
        }]
    ]],
    m4 = ["svg", t, [
        ["rect", {
            width: "20",
            height: "15",
            x: "2",
            y: "4",
            rx: "2"
        }],
        ["rect", {
            width: "8",
            height: "7",
            x: "6",
            y: "8",
            rx: "1"
        }],
        ["path", {
            d: "M18 8v7"
        }],
        ["path", {
            d: "M6 19v2"
        }],
        ["path", {
            d: "M18 19v2"
        }]
    ]],
    w4 = ["svg", t, [
        ["path", {
            d: "M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"
        }],
        ["path", {
            d: "M12 13v8"
        }],
        ["path", {
            d: "M12 3v3"
        }]
    ]],
    b4 = ["svg", t, [
        ["path", {
            d: "M8 2h8"
        }],
        ["path", {
            d: "M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3"
        }],
        ["path", {
            d: "M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }]
    ]],
    H4 = ["svg", t, [
        ["path", {
            d: "M8 2h8"
        }],
        ["path", {
            d: "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"
        }],
        ["path", {
            d: "M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"
        }]
    ]],
    V4 = ["svg", t, [
        ["polyline", {
            points: "4 14 10 14 10 20"
        }],
        ["polyline", {
            points: "20 10 14 10 14 4"
        }],
        ["line", {
            x1: "14",
            x2: "21",
            y1: "10",
            y2: "3"
        }],
        ["line", {
            x1: "3",
            x2: "10",
            y1: "21",
            y2: "14"
        }]
    ]],
    L4 = ["svg", t, [
        ["path", {
            d: "M8 3v3a2 2 0 0 1-2 2H3"
        }],
        ["path", {
            d: "M21 8h-3a2 2 0 0 1-2-2V3"
        }],
        ["path", {
            d: "M3 16h3a2 2 0 0 1 2 2v3"
        }],
        ["path", {
            d: "M16 21v-3a2 2 0 0 1 2-2h3"
        }]
    ]],
    S4 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "M8 12h8"
        }]
    ]],
    A4 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M8 12h8"
        }]
    ]],
    C4 = ["svg", t, [
        ["path", {
            d: "M5 12h14"
        }]
    ]],
    O4 = ["svg", t, [
        ["path", {
            d: "m9 10 2 2 4-4"
        }],
        ["rect", {
            width: "20",
            height: "14",
            x: "2",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M12 17v4"
        }],
        ["path", {
            d: "M8 21h8"
        }]
    ]],
    E4 = ["svg", t, [
        ["circle", {
            cx: "19",
            cy: "6",
            r: "3"
        }],
        ["path", {
            d: "M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"
        }],
        ["path", {
            d: "M12 17v4"
        }],
        ["path", {
            d: "M8 21h8"
        }]
    ]],
    k4 = ["svg", t, [
        ["path", {
            d: "M12 13V7"
        }],
        ["path", {
            d: "m15 10-3 3-3-3"
        }],
        ["rect", {
            width: "20",
            height: "14",
            x: "2",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M12 17v4"
        }],
        ["path", {
            d: "M8 21h8"
        }]
    ]],
    P4 = ["svg", t, [
        ["path", {
            d: "M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2"
        }],
        ["path", {
            d: "M22 15V5a2 2 0 0 0-2-2H9"
        }],
        ["path", {
            d: "M8 21h8"
        }],
        ["path", {
            d: "M12 17v4"
        }],
        ["path", {
            d: "m2 2 20 20"
        }]
    ]],
    Z4 = ["svg", t, [
        ["path", {
            d: "M10 13V7"
        }],
        ["path", {
            d: "M14 13V7"
        }],
        ["rect", {
            width: "20",
            height: "14",
            x: "2",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M12 17v4"
        }],
        ["path", {
            d: "M8 21h8"
        }]
    ]],
    T4 = ["svg", t, [
        ["path", {
            d: "m10 7 5 3-5 3Z"
        }],
        ["rect", {
            width: "20",
            height: "14",
            x: "2",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M12 17v4"
        }],
        ["path", {
            d: "M8 21h8"
        }]
    ]],
    z4 = ["svg", t, [
        ["path", {
            d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"
        }],
        ["path", {
            d: "M10 19v-3.96 3.15"
        }],
        ["path", {
            d: "M7 19h5"
        }],
        ["rect", {
            width: "6",
            height: "10",
            x: "16",
            y: "12",
            rx: "2"
        }]
    ]],
    D4 = ["svg", t, [
        ["path", {
            d: "M5.5 20H8"
        }],
        ["path", {
            d: "M17 9h.01"
        }],
        ["rect", {
            width: "10",
            height: "16",
            x: "12",
            y: "4",
            rx: "2"
        }],
        ["path", {
            d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4"
        }],
        ["circle", {
            cx: "17",
            cy: "15",
            r: "1"
        }]
    ]],
    _4 = ["svg", t, [
        ["rect", {
            x: "9",
            y: "7",
            width: "6",
            height: "6"
        }],
        ["rect", {
            width: "20",
            height: "14",
            x: "2",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M12 17v4"
        }],
        ["path", {
            d: "M8 21h8"
        }]
    ]],
    B4 = ["svg", t, [
        ["path", {
            d: "m9 10 3-3 3 3"
        }],
        ["path", {
            d: "M12 13V7"
        }],
        ["rect", {
            width: "20",
            height: "14",
            x: "2",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M12 17v4"
        }],
        ["path", {
            d: "M8 21h8"
        }]
    ]],
    R4 = ["svg", t, [
        ["path", {
            d: "m14.5 12.5-5-5"
        }],
        ["path", {
            d: "m9.5 12.5 5-5"
        }],
        ["rect", {
            width: "20",
            height: "14",
            x: "2",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M12 17v4"
        }],
        ["path", {
            d: "M8 21h8"
        }]
    ]],
    F4 = ["svg", t, [
        ["rect", {
            width: "20",
            height: "14",
            x: "2",
            y: "3",
            rx: "2"
        }],
        ["line", {
            x1: "8",
            x2: "16",
            y1: "21",
            y2: "21"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "17",
            y2: "21"
        }]
    ]],
    j4 = ["svg", t, [
        ["path", {
            d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
        }],
        ["path", {
            d: "M19 3v4"
        }],
        ["path", {
            d: "M21 5h-4"
        }]
    ]],
    q4 = ["svg", t, [
        ["path", {
            d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
        }]
    ]],
    W4 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "1"
        }],
        ["circle", {
            cx: "19",
            cy: "12",
            r: "1"
        }],
        ["circle", {
            cx: "5",
            cy: "12",
            r: "1"
        }]
    ]],
    N4 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "1"
        }],
        ["circle", {
            cx: "12",
            cy: "5",
            r: "1"
        }],
        ["circle", {
            cx: "12",
            cy: "19",
            r: "1"
        }]
    ]],
    I4 = ["svg", t, [
        ["path", {
            d: "m8 3 4 8 5-5 5 15H2L8 3z"
        }],
        ["path", {
            d: "M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"
        }]
    ]],
    U4 = ["svg", t, [
        ["path", {
            d: "m8 3 4 8 5-5 5 15H2L8 3z"
        }]
    ]],
    G4 = ["svg", t, [
        ["path", {
            d: "m4 4 7.07 17 2.51-7.39L21 11.07z"
        }]
    ]],
    X4 = ["svg", t, [
        ["path", {
            d: "m9 9 5 12 1.774-5.226L21 14 9 9z"
        }],
        ["path", {
            d: "m16.071 16.071 4.243 4.243"
        }],
        ["path", {
            d: "m7.188 2.239.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656-2.12 2.122"
        }]
    ]],
    $4 = ["svg", t, [
        ["path", {
            d: "M5 3a2 2 0 0 0-2 2"
        }],
        ["path", {
            d: "M19 3a2 2 0 0 1 2 2"
        }],
        ["path", {
            d: "m12 12 4 10 1.7-4.3L22 16Z"
        }],
        ["path", {
            d: "M5 21a2 2 0 0 1-2-2"
        }],
        ["path", {
            d: "M9 3h1"
        }],
        ["path", {
            d: "M9 21h2"
        }],
        ["path", {
            d: "M14 3h1"
        }],
        ["path", {
            d: "M3 9v1"
        }],
        ["path", {
            d: "M21 9v2"
        }],
        ["path", {
            d: "M3 14v1"
        }]
    ]],
    Y4 = ["svg", t, [
        ["path", {
            d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"
        }],
        ["path", {
            d: "m12 12 4 10 1.7-4.3L22 16Z"
        }]
    ]],
    K4 = ["svg", t, [
        ["path", {
            d: "m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"
        }],
        ["path", {
            d: "m13 13 6 6"
        }]
    ]],
    J4 = ["svg", t, [
        ["rect", {
            x: "5",
            y: "2",
            width: "14",
            height: "20",
            rx: "7"
        }],
        ["path", {
            d: "M12 6v4"
        }]
    ]],
    Q4 = ["svg", t, [
        ["path", {
            d: "M5 3v16h16"
        }],
        ["path", {
            d: "m5 19 6-6"
        }],
        ["path", {
            d: "m2 6 3-3 3 3"
        }],
        ["path", {
            d: "m18 16 3 3-3 3"
        }]
    ]],
    t5 = ["svg", t, [
        ["polyline", {
            points: "5 11 5 5 11 5"
        }],
        ["polyline", {
            points: "19 13 19 19 13 19"
        }],
        ["line", {
            x1: "5",
            x2: "19",
            y1: "5",
            y2: "19"
        }]
    ]],
    a5 = ["svg", t, [
        ["polyline", {
            points: "13 5 19 5 19 11"
        }],
        ["polyline", {
            points: "11 19 5 19 5 13"
        }],
        ["line", {
            x1: "19",
            x2: "5",
            y1: "5",
            y2: "19"
        }]
    ]],
    e5 = ["svg", t, [
        ["path", {
            d: "M11 19H5V13"
        }],
        ["path", {
            d: "M19 5L5 19"
        }]
    ]],
    h5 = ["svg", t, [
        ["path", {
            d: "M19 13V19H13"
        }],
        ["path", {
            d: "M5 5L19 19"
        }]
    ]],
    n5 = ["svg", t, [
        ["path", {
            d: "M8 18L12 22L16 18"
        }],
        ["path", {
            d: "M12 2V22"
        }]
    ]],
    r5 = ["svg", t, [
        ["polyline", {
            points: "18 8 22 12 18 16"
        }],
        ["polyline", {
            points: "6 8 2 12 6 16"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "12",
            y2: "12"
        }]
    ]],
    o5 = ["svg", t, [
        ["path", {
            d: "M6 8L2 12L6 16"
        }],
        ["path", {
            d: "M2 12H22"
        }]
    ]],
    c5 = ["svg", t, [
        ["path", {
            d: "M18 8L22 12L18 16"
        }],
        ["path", {
            d: "M2 12H22"
        }]
    ]],
    s5 = ["svg", t, [
        ["path", {
            d: "M5 11V5H11"
        }],
        ["path", {
            d: "M5 5L19 19"
        }]
    ]],
    i5 = ["svg", t, [
        ["path", {
            d: "M13 5H19V11"
        }],
        ["path", {
            d: "M19 5L5 19"
        }]
    ]],
    d5 = ["svg", t, [
        ["path", {
            d: "M8 6L12 2L16 6"
        }],
        ["path", {
            d: "M12 2V22"
        }]
    ]],
    p5 = ["svg", t, [
        ["polyline", {
            points: "8 18 12 22 16 18"
        }],
        ["polyline", {
            points: "8 6 12 2 16 6"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "2",
            y2: "22"
        }]
    ]],
    l5 = ["svg", t, [
        ["polyline", {
            points: "5 9 2 12 5 15"
        }],
        ["polyline", {
            points: "9 5 12 2 15 5"
        }],
        ["polyline", {
            points: "15 19 12 22 9 19"
        }],
        ["polyline", {
            points: "19 9 22 12 19 15"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "2",
            y2: "22"
        }]
    ]],
    v5 = ["svg", t, [
        ["circle", {
            cx: "8",
            cy: "18",
            r: "4"
        }],
        ["path", {
            d: "M12 18V2l7 4"
        }]
    ]],
    M5 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "18",
            r: "4"
        }],
        ["path", {
            d: "M16 18V2"
        }]
    ]],
    y5 = ["svg", t, [
        ["path", {
            d: "M9 18V5l12-2v13"
        }],
        ["path", {
            d: "m9 9 12-2"
        }],
        ["circle", {
            cx: "6",
            cy: "18",
            r: "3"
        }],
        ["circle", {
            cx: "18",
            cy: "16",
            r: "3"
        }]
    ]],
    g5 = ["svg", t, [
        ["path", {
            d: "M9 18V5l12-2v13"
        }],
        ["circle", {
            cx: "6",
            cy: "18",
            r: "3"
        }],
        ["circle", {
            cx: "18",
            cy: "16",
            r: "3"
        }]
    ]],
    u5 = ["svg", t, [
        ["path", {
            d: "M9.31 9.31 5 21l7-4 7 4-1.17-3.17"
        }],
        ["path", {
            d: "M14.53 8.88 12 2l-1.17 3.17"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }]
    ]],
    f5 = ["svg", t, [
        ["polygon", {
            points: "12 2 19 21 12 17 5 21 12 2"
        }]
    ]],
    x5 = ["svg", t, [
        ["path", {
            d: "M8.43 8.43 3 11l8 2 2 8 2.57-5.43"
        }],
        ["path", {
            d: "M17.39 11.73 22 2l-9.73 4.61"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }]
    ]],
    m5 = ["svg", t, [
        ["polygon", {
            points: "3 11 22 2 13 21 11 13 3 11"
        }]
    ]],
    w5 = ["svg", t, [
        ["rect", {
            x: "16",
            y: "16",
            width: "6",
            height: "6",
            rx: "1"
        }],
        ["rect", {
            x: "2",
            y: "16",
            width: "6",
            height: "6",
            rx: "1"
        }],
        ["rect", {
            x: "9",
            y: "2",
            width: "6",
            height: "6",
            rx: "1"
        }],
        ["path", {
            d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"
        }],
        ["path", {
            d: "M12 12V8"
        }]
    ]],
    b5 = ["svg", t, [
        ["path", {
            d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
        }],
        ["path", {
            d: "M18 14h-8"
        }],
        ["path", {
            d: "M15 18h-5"
        }],
        ["path", {
            d: "M10 6h8v4h-8V6Z"
        }]
    ]],
    H5 = ["svg", t, [
        ["path", {
            d: "M6 8.32a7.43 7.43 0 0 1 0 7.36"
        }],
        ["path", {
            d: "M9.46 6.21a11.76 11.76 0 0 1 0 11.58"
        }],
        ["path", {
            d: "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"
        }],
        ["path", {
            d: "M16.37 2a20.16 20.16 0 0 1 0 20"
        }]
    ]],
    V5 = ["svg", t, [
        ["path", {
            d: "M12 4V2"
        }],
        ["path", {
            d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939"
        }],
        ["path", {
            d: "M19 10v3.343"
        }],
        ["path", {
            d: "M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }]
    ]],
    L5 = ["svg", t, [
        ["path", {
            d: "M12 4V2"
        }],
        ["path", {
            d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4"
        }],
        ["path", {
            d: "M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z"
        }]
    ]],
    S5 = ["svg", t, [
        ["polygon", {
            points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
        }]
    ]],
    A5 = ["svg", t, [
        ["path", {
            d: "M3 3h6l6 18h6"
        }],
        ["path", {
            d: "M14 3h7"
        }]
    ]],
    C5 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "3"
        }],
        ["circle", {
            cx: "19",
            cy: "5",
            r: "2"
        }],
        ["circle", {
            cx: "5",
            cy: "19",
            r: "2"
        }],
        ["path", {
            d: "M10.4 21.9a10 10 0 0 0 9.941-15.416"
        }],
        ["path", {
            d: "M13.5 2.1a10 10 0 0 0-9.841 15.416"
        }]
    ]],
    O5 = ["svg", t, [
        ["polyline", {
            points: "7 8 3 12 7 16"
        }],
        ["line", {
            x1: "21",
            x2: "11",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "21",
            x2: "11",
            y1: "6",
            y2: "6"
        }],
        ["line", {
            x1: "21",
            x2: "11",
            y1: "18",
            y2: "18"
        }]
    ]],
    E5 = ["svg", t, [
        ["path", {
            d: "M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"
        }],
        ["path", {
            d: "m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"
        }],
        ["path", {
            d: "M12 3v6"
        }]
    ]],
    k5 = ["svg", t, [
        ["path", {
            d: "m16 16 2 2 4-4"
        }],
        ["path", {
            d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
        }],
        ["path", {
            d: "m7.5 4.27 9 5.15"
        }],
        ["polyline", {
            points: "3.29 7 12 12 20.71 7"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "22",
            y2: "12"
        }]
    ]],
    P5 = ["svg", t, [
        ["path", {
            d: "M16 16h6"
        }],
        ["path", {
            d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
        }],
        ["path", {
            d: "m7.5 4.27 9 5.15"
        }],
        ["polyline", {
            points: "3.29 7 12 12 20.71 7"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "22",
            y2: "12"
        }]
    ]],
    Z5 = ["svg", t, [
        ["path", {
            d: "M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z"
        }],
        ["path", {
            d: "m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "22",
            y2: "13"
        }],
        ["path", {
            d: "M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5"
        }]
    ]],
    T5 = ["svg", t, [
        ["path", {
            d: "M16 16h6"
        }],
        ["path", {
            d: "M19 13v6"
        }],
        ["path", {
            d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
        }],
        ["path", {
            d: "m7.5 4.27 9 5.15"
        }],
        ["polyline", {
            points: "3.29 7 12 12 20.71 7"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "22",
            y2: "12"
        }]
    ]],
    z5 = ["svg", t, [
        ["path", {
            d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
        }],
        ["path", {
            d: "m7.5 4.27 9 5.15"
        }],
        ["polyline", {
            points: "3.29 7 12 12 20.71 7"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "22",
            y2: "12"
        }],
        ["circle", {
            cx: "18.5",
            cy: "15.5",
            r: "2.5"
        }],
        ["path", {
            d: "M20.27 17.27 22 19"
        }]
    ]],
    D5 = ["svg", t, [
        ["path", {
            d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
        }],
        ["path", {
            d: "m7.5 4.27 9 5.15"
        }],
        ["polyline", {
            points: "3.29 7 12 12 20.71 7"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "22",
            y2: "12"
        }],
        ["path", {
            d: "m17 13 5 5m-5 0 5-5"
        }]
    ]],
    _5 = ["svg", t, [
        ["path", {
            d: "m7.5 4.27 9 5.15"
        }],
        ["path", {
            d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
        }],
        ["path", {
            d: "m3.3 7 8.7 5 8.7-5"
        }],
        ["path", {
            d: "M12 22V12"
        }]
    ]],
    B5 = ["svg", t, [
        ["path", {
            d: "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"
        }],
        ["path", {
            d: "m5 2 5 5"
        }],
        ["path", {
            d: "M2 13h15"
        }],
        ["path", {
            d: "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"
        }]
    ]],
    R5 = ["svg", t, [
        ["path", {
            d: "M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z"
        }],
        ["path", {
            d: "M6 12V2h12v10"
        }],
        ["path", {
            d: "M14 2v4"
        }],
        ["path", {
            d: "M10 2v2"
        }]
    ]],
    F5 = ["svg", t, [
        ["path", {
            d: "M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"
        }],
        ["path", {
            d: "M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"
        }],
        ["path", {
            d: "M14.5 17.5 4.5 15"
        }]
    ]],
    j5 = ["svg", t, [
        ["circle", {
            cx: "13.5",
            cy: "6.5",
            r: ".5"
        }],
        ["circle", {
            cx: "17.5",
            cy: "10.5",
            r: ".5"
        }],
        ["circle", {
            cx: "8.5",
            cy: "7.5",
            r: ".5"
        }],
        ["circle", {
            cx: "6.5",
            cy: "12.5",
            r: ".5"
        }],
        ["path", {
            d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
        }]
    ]],
    q5 = ["svg", t, [
        ["path", {
            d: "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"
        }],
        ["path", {
            d: "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"
        }],
        ["path", {
            d: "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z"
        }],
        ["path", {
            d: "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"
        }]
    ]],
    W5 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }],
        ["line", {
            x1: "3",
            x2: "21",
            y1: "15",
            y2: "15"
        }],
        ["path", {
            d: "m15 8-3 3-3-3"
        }]
    ]],
    N5 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M14 15h1"
        }],
        ["path", {
            d: "M19 15h2"
        }],
        ["path", {
            d: "M3 15h2"
        }],
        ["path", {
            d: "M9 15h1"
        }]
    ]],
    I5 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }],
        ["line", {
            x1: "3",
            x2: "21",
            y1: "15",
            y2: "15"
        }],
        ["path", {
            d: "m9 10 3-3 3 3"
        }]
    ]],
    U5 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }],
        ["line", {
            x1: "3",
            x2: "21",
            y1: "15",
            y2: "15"
        }]
    ]],
    G5 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }],
        ["path", {
            d: "M9 3v18"
        }],
        ["path", {
            d: "m16 15-3-3 3-3"
        }]
    ]],
    X5 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M9 14v1"
        }],
        ["path", {
            d: "M9 19v2"
        }],
        ["path", {
            d: "M9 3v2"
        }],
        ["path", {
            d: "M9 9v1"
        }]
    ]],
    $5 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }],
        ["path", {
            d: "M9 3v18"
        }],
        ["path", {
            d: "m14 9 3 3-3 3"
        }]
    ]],
    Y5 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }],
        ["line", {
            x1: "9",
            x2: "9",
            y1: "3",
            y2: "21"
        }]
    ]],
    K5 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }],
        ["line", {
            x1: "15",
            x2: "15",
            y1: "3",
            y2: "21"
        }],
        ["path", {
            d: "m8 9 3 3-3 3"
        }]
    ]],
    J5 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M15 14v1"
        }],
        ["path", {
            d: "M15 19v2"
        }],
        ["path", {
            d: "M15 3v2"
        }],
        ["path", {
            d: "M15 9v1"
        }]
    ]],
    Q5 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }],
        ["line", {
            x1: "15",
            x2: "15",
            y1: "3",
            y2: "21"
        }],
        ["path", {
            d: "m10 15-3-3 3-3"
        }]
    ]],
    t3 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }],
        ["line", {
            x1: "15",
            x2: "15",
            y1: "3",
            y2: "21"
        }]
    ]],
    a3 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }],
        ["line", {
            x1: "3",
            x2: "21",
            y1: "9",
            y2: "9"
        }],
        ["path", {
            d: "m9 16 3-3 3 3"
        }]
    ]],
    e3 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M14 9h1"
        }],
        ["path", {
            d: "M19 9h2"
        }],
        ["path", {
            d: "M3 9h2"
        }],
        ["path", {
            d: "M9 9h1"
        }]
    ]],
    h3 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }],
        ["line", {
            x1: "3",
            x2: "21",
            y1: "9",
            y2: "9"
        }],
        ["path", {
            d: "m15 14-3 3-3-3"
        }]
    ]],
    n3 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }],
        ["line", {
            x1: "3",
            x2: "21",
            y1: "9",
            y2: "9"
        }]
    ]],
    r3 = ["svg", t, [
        ["path", {
            d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
        }]
    ]],
    o3 = ["svg", t, [
        ["path", {
            d: "M8 21s-4-3-4-9 4-9 4-9"
        }],
        ["path", {
            d: "M16 3s4 3 4 9-4 9-4 9"
        }]
    ]],
    c3 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "m5 5 14 14"
        }],
        ["path", {
            d: "M13 13a3 3 0 1 0 0-6H9v2"
        }],
        ["path", {
            d: "M9 17v-2.34"
        }]
    ]],
    s3 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "M9 17V7h4a3 3 0 0 1 0 6H9"
        }]
    ]],
    i3 = ["svg", t, [
        ["path", {
            d: "M9 9a3 3 0 1 1 6 0"
        }],
        ["path", {
            d: "M12 12v3"
        }],
        ["path", {
            d: "M11 15h2"
        }],
        ["path", {
            d: "M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3"
        }],
        ["path", {
            d: "M12 19v3"
        }]
    ]],
    d3 = ["svg", t, [
        ["path", {
            d: "M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41"
        }],
        ["path", {
            d: "M3 8.7V19a2 2 0 0 0 2 2h10.3"
        }],
        ["path", {
            d: "m2 2 20 20"
        }],
        ["path", {
            d: "M13 13a3 3 0 1 0 0-6H9v2"
        }],
        ["path", {
            d: "M9 17v-2.3"
        }]
    ]],
    p3 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M9 17V7h4a3 3 0 0 1 0 6H9"
        }]
    ]],
    l3 = ["svg", t, [
        ["path", {
            d: "M5.8 11.3 2 22l10.7-3.79"
        }],
        ["path", {
            d: "M4 3h.01"
        }],
        ["path", {
            d: "M22 8h.01"
        }],
        ["path", {
            d: "M15 2h.01"
        }],
        ["path", {
            d: "M22 20h.01"
        }],
        ["path", {
            d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"
        }],
        ["path", {
            d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17"
        }],
        ["path", {
            d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7"
        }],
        ["path", {
            d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"
        }]
    ]],
    v3 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["line", {
            x1: "10",
            x2: "10",
            y1: "15",
            y2: "9"
        }],
        ["line", {
            x1: "14",
            x2: "14",
            y1: "15",
            y2: "9"
        }]
    ]],
    M3 = ["svg", t, [
        ["path", {
            d: "M10 15V9"
        }],
        ["path", {
            d: "M14 15V9"
        }],
        ["path", {
            d: "M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z"
        }]
    ]],
    y3 = ["svg", t, [
        ["rect", {
            width: "4",
            height: "16",
            x: "6",
            y: "4"
        }],
        ["rect", {
            width: "4",
            height: "16",
            x: "14",
            y: "4"
        }]
    ]],
    g3 = ["svg", t, [
        ["circle", {
            cx: "11",
            cy: "4",
            r: "2"
        }],
        ["circle", {
            cx: "18",
            cy: "8",
            r: "2"
        }],
        ["circle", {
            cx: "20",
            cy: "16",
            r: "2"
        }],
        ["path", {
            d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"
        }]
    ]],
    u3 = ["svg", t, [
        ["rect", {
            width: "14",
            height: "20",
            x: "5",
            y: "2",
            rx: "2"
        }],
        ["path", {
            d: "M15 14h.01"
        }],
        ["path", {
            d: "M9 6h6"
        }],
        ["path", {
            d: "M9 10h6"
        }]
    ]],
    f3 = ["svg", t, [
        ["path", {
            d: "M12 20h9"
        }],
        ["path", {
            d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"
        }]
    ]],
    x3 = ["svg", t, [
        ["path", {
            d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
        }],
        ["path", {
            d: "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"
        }]
    ]],
    m3 = ["svg", t, [
        ["path", {
            d: "m12 19 7-7 3 3-7 7-3-3z"
        }],
        ["path", {
            d: "m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"
        }],
        ["path", {
            d: "m2 2 7.586 7.586"
        }],
        ["circle", {
            cx: "11",
            cy: "11",
            r: "2"
        }]
    ]],
    w3 = ["svg", t, [
        ["path", {
            d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"
        }]
    ]],
    b3 = ["svg", t, [
        ["path", {
            d: "M12 20h9"
        }],
        ["path", {
            d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"
        }],
        ["path", {
            d: "m15 5 3 3"
        }]
    ]],
    H3 = ["svg", t, [
        ["path", {
            d: "m15 5 4 4"
        }],
        ["path", {
            d: "M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"
        }],
        ["path", {
            d: "m8 6 2-2"
        }],
        ["path", {
            d: "m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z"
        }],
        ["path", {
            d: "m18 16 2-2"
        }],
        ["path", {
            d: "m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"
        }]
    ]],
    V3 = ["svg", t, [
        ["path", {
            d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"
        }],
        ["path", {
            d: "m15 5 4 4"
        }]
    ]],
    L3 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "m15 9-6 6"
        }],
        ["path", {
            d: "M9 9h.01"
        }],
        ["path", {
            d: "M15 15h.01"
        }]
    ]],
    S3 = ["svg", t, [
        ["path", {
            d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"
        }],
        ["path", {
            d: "M9.2 9.2h.01"
        }],
        ["path", {
            d: "m14.5 9.5-5 5"
        }],
        ["path", {
            d: "M14.7 14.8h.01"
        }]
    ]],
    A3 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "m15 9-6 6"
        }],
        ["path", {
            d: "M9 9h.01"
        }],
        ["path", {
            d: "M15 15h.01"
        }]
    ]],
    C3 = ["svg", t, [
        ["line", {
            x1: "19",
            x2: "5",
            y1: "5",
            y2: "19"
        }],
        ["circle", {
            cx: "6.5",
            cy: "6.5",
            r: "2.5"
        }],
        ["circle", {
            cx: "17.5",
            cy: "17.5",
            r: "2.5"
        }]
    ]],
    O3 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "5",
            r: "1"
        }],
        ["path", {
            d: "m9 20 3-6 3 6"
        }],
        ["path", {
            d: "m6 8 6 2 6-2"
        }],
        ["path", {
            d: "M12 10v4"
        }]
    ]],
    E3 = ["svg", t, [
        ["path", {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        }],
        ["path", {
            d: "M14.05 2a9 9 0 0 1 8 7.94"
        }],
        ["path", {
            d: "M14.05 6A5 5 0 0 1 18 10"
        }]
    ]],
    k3 = ["svg", t, [
        ["polyline", {
            points: "18 2 22 6 18 10"
        }],
        ["line", {
            x1: "14",
            x2: "22",
            y1: "6",
            y2: "6"
        }],
        ["path", {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        }]
    ]],
    P3 = ["svg", t, [
        ["polyline", {
            points: "16 2 16 8 22 8"
        }],
        ["line", {
            x1: "22",
            x2: "16",
            y1: "2",
            y2: "8"
        }],
        ["path", {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        }]
    ]],
    Z3 = ["svg", t, [
        ["line", {
            x1: "22",
            x2: "16",
            y1: "2",
            y2: "8"
        }],
        ["line", {
            x1: "16",
            x2: "22",
            y1: "2",
            y2: "8"
        }],
        ["path", {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        }]
    ]],
    T3 = ["svg", t, [
        ["path", {
            d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"
        }],
        ["line", {
            x1: "22",
            x2: "2",
            y1: "2",
            y2: "22"
        }]
    ]],
    z3 = ["svg", t, [
        ["polyline", {
            points: "22 8 22 2 16 2"
        }],
        ["line", {
            x1: "16",
            x2: "22",
            y1: "8",
            y2: "2"
        }],
        ["path", {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        }]
    ]],
    D3 = ["svg", t, [
        ["path", {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        }]
    ]],
    _3 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M7 7h10"
        }],
        ["path", {
            d: "M10 7v10"
        }],
        ["path", {
            d: "M16 17a2 2 0 0 1-2-2V7"
        }]
    ]],
    B3 = ["svg", t, [
        ["line", {
            x1: "9",
            x2: "9",
            y1: "4",
            y2: "20"
        }],
        ["path", {
            d: "M4 7c0-1.7 1.3-3 3-3h13"
        }],
        ["path", {
            d: "M18 20c-1.7 0-3-1.3-3-3V4"
        }]
    ]],
    R3 = ["svg", t, [
        ["path", {
            d: "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"
        }],
        ["rect", {
            width: "10",
            height: "7",
            x: "12",
            y: "13",
            rx: "2"
        }]
    ]],
    F3 = ["svg", t, [
        ["path", {
            d: "M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3"
        }],
        ["rect", {
            width: "10",
            height: "7",
            x: "12",
            y: "13.5",
            ry: "2"
        }]
    ]],
    j3 = ["svg", t, [
        ["path", {
            d: "M21.21 15.89A10 10 0 1 1 8 2.83"
        }],
        ["path", {
            d: "M22 12A10 10 0 0 0 12 2v10z"
        }]
    ]],
    q3 = ["svg", t, [
        ["path", {
            d: "M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z"
        }],
        ["path", {
            d: "M2 9v1c0 1.1.9 2 2 2h1"
        }],
        ["path", {
            d: "M16 11h0"
        }]
    ]],
    W3 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M12 12H9.5a2.5 2.5 0 0 1 0-5H17"
        }],
        ["path", {
            d: "M12 7v10"
        }],
        ["path", {
            d: "M16 7v10"
        }]
    ]],
    N3 = ["svg", t, [
        ["path", {
            d: "M13 4v16"
        }],
        ["path", {
            d: "M17 4v16"
        }],
        ["path", {
            d: "M19 4H9.5a4.5 4.5 0 0 0 0 9H13"
        }]
    ]],
    I3 = ["svg", t, [
        ["path", {
            d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"
        }],
        ["path", {
            d: "m8.5 8.5 7 7"
        }]
    ]],
    U3 = ["svg", t, [
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "17",
            y2: "22"
        }],
        ["path", {
            d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12"
        }],
        ["path", {
            d: "M15 9.34V6h1a2 2 0 0 0 0-4H7.89"
        }]
    ]],
    G3 = ["svg", t, [
        ["line", {
            x1: "12",
            x2: "12",
            y1: "17",
            y2: "22"
        }],
        ["path", {
            d: "M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"
        }]
    ]],
    X3 = ["svg", t, [
        ["path", {
            d: "m2 22 1-1h3l9-9"
        }],
        ["path", {
            d: "M3 21v-3l9-9"
        }],
        ["path", {
            d: "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"
        }]
    ]],
    $3 = ["svg", t, [
        ["path", {
            d: "M15 11h.01"
        }],
        ["path", {
            d: "M11 15h.01"
        }],
        ["path", {
            d: "M16 16h.01"
        }],
        ["path", {
            d: "m2 16 20 6-6-20A20 20 0 0 0 2 16"
        }],
        ["path", {
            d: "M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4"
        }]
    ]],
    Y3 = ["svg", t, [
        ["path", {
            d: "M2 22h20"
        }],
        ["path", {
            d: "M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"
        }]
    ]],
    K3 = ["svg", t, [
        ["path", {
            d: "M2 22h20"
        }],
        ["path", {
            d: "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"
        }]
    ]],
    J3 = ["svg", t, [
        ["path", {
            d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
        }]
    ]],
    Q3 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["polygon", {
            points: "10 8 16 12 10 16 10 8"
        }]
    ]],
    t6 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "m9 8 6 4-6 4Z"
        }]
    ]],
    a6 = ["svg", t, [
        ["polygon", {
            points: "5 3 19 12 5 21 5 3"
        }]
    ]],
    e6 = ["svg", t, [
        ["path", {
            d: "M9 2v6"
        }],
        ["path", {
            d: "M15 2v6"
        }],
        ["path", {
            d: "M12 17v5"
        }],
        ["path", {
            d: "M5 8h14"
        }],
        ["path", {
            d: "M6 11V8h12v3a6 6 0 1 1-12 0v0Z"
        }]
    ]],
    h6 = ["svg", t, [
        ["path", {
            d: "m13 2-2 2.5h3L12 7"
        }],
        ["path", {
            d: "M10 14v-3"
        }],
        ["path", {
            d: "M14 14v-3"
        }],
        ["path", {
            d: "M11 19c-1.7 0-3-1.3-3-3v-2h8v2c0 1.7-1.3 3-3 3Z"
        }],
        ["path", {
            d: "M12 22v-3"
        }]
    ]],
    n6 = ["svg", t, [
        ["path", {
            d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"
        }],
        ["path", {
            d: "m2 22 3-3"
        }],
        ["path", {
            d: "M7.5 13.5 10 11"
        }],
        ["path", {
            d: "M10.5 16.5 13 14"
        }],
        ["path", {
            d: "m18 3-4 4h6l-4 4"
        }]
    ]],
    r6 = ["svg", t, [
        ["path", {
            d: "M12 22v-5"
        }],
        ["path", {
            d: "M9 8V2"
        }],
        ["path", {
            d: "M15 8V2"
        }],
        ["path", {
            d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"
        }]
    ]],
    o6 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "M8 12h8"
        }],
        ["path", {
            d: "M12 8v8"
        }]
    ]],
    c6 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M8 12h8"
        }],
        ["path", {
            d: "M12 8v8"
        }]
    ]],
    s6 = ["svg", t, [
        ["path", {
            d: "M5 12h14"
        }],
        ["path", {
            d: "M12 5v14"
        }]
    ]],
    i6 = ["svg", t, [
        ["path", {
            d: "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2"
        }],
        ["path", {
            d: "M18 6h.01"
        }],
        ["path", {
            d: "M6 18h.01"
        }],
        ["path", {
            d: "M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z"
        }],
        ["path", {
            d: "M18 11.66V22a4 4 0 0 0 4-4V6"
        }]
    ]],
    d6 = ["svg", t, [
        ["path", {
            d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"
        }],
        ["polyline", {
            points: "8 10 12 14 16 10"
        }]
    ]],
    p6 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "11",
            r: "1"
        }],
        ["path", {
            d: "M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z"
        }],
        ["path", {
            d: "M8 14a5 5 0 1 1 8 0"
        }],
        ["path", {
            d: "M17 18.5a9 9 0 1 0-10 0"
        }]
    ]],
    l6 = ["svg", t, [
        ["path", {
            d: "M22 14a8 8 0 0 1-8 8"
        }],
        ["path", {
            d: "M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"
        }],
        ["path", {
            d: "M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1"
        }],
        ["path", {
            d: "M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10"
        }],
        ["path", {
            d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
        }]
    ]],
    v6 = ["svg", t, [
        ["path", {
            d: "M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"
        }],
        ["path", {
            d: "M10 22 9 8"
        }],
        ["path", {
            d: "m14 22 1-14"
        }],
        ["path", {
            d: "M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"
        }]
    ]],
    M6 = ["svg", t, [
        ["path", {
            d: "M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z"
        }],
        ["path", {
            d: "m22 22-5.5-5.5"
        }]
    ]],
    y6 = ["svg", t, [
        ["path", {
            d: "M18 7c0-5.333-8-5.333-8 0"
        }],
        ["path", {
            d: "M10 7v14"
        }],
        ["path", {
            d: "M6 21h12"
        }],
        ["path", {
            d: "M6 13h10"
        }]
    ]],
    g6 = ["svg", t, [
        ["path", {
            d: "M18.36 6.64A9 9 0 0 1 20.77 15"
        }],
        ["path", {
            d: "M6.16 6.16a9 9 0 1 0 12.68 12.68"
        }],
        ["path", {
            d: "M12 2v4"
        }],
        ["path", {
            d: "m2 2 20 20"
        }]
    ]],
    u6 = ["svg", t, [
        ["path", {
            d: "M18.36 6.64a9 9 0 1 1-12.73 0"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "2",
            y2: "12"
        }]
    ]],
    f6 = ["svg", t, [
        ["path", {
            d: "M2 3h20"
        }],
        ["path", {
            d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"
        }],
        ["path", {
            d: "m7 21 5-5 5 5"
        }]
    ]],
    x6 = ["svg", t, [
        ["polyline", {
            points: "6 9 6 2 18 2 18 9"
        }],
        ["path", {
            d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
        }],
        ["rect", {
            width: "12",
            height: "8",
            x: "6",
            y: "14"
        }]
    ]],
    m6 = ["svg", t, [
        ["path", {
            d: "M5 7 3 5"
        }],
        ["path", {
            d: "M9 6V3"
        }],
        ["path", {
            d: "m13 7 2-2"
        }],
        ["circle", {
            cx: "9",
            cy: "13",
            r: "3"
        }],
        ["path", {
            d: "M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"
        }],
        ["path", {
            d: "M16 16h2"
        }]
    ]],
    w6 = ["svg", t, [
        ["path", {
            d: "M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"
        }]
    ]],
    b6 = ["svg", t, [
        ["rect", {
            width: "5",
            height: "5",
            x: "3",
            y: "3",
            rx: "1"
        }],
        ["rect", {
            width: "5",
            height: "5",
            x: "16",
            y: "3",
            rx: "1"
        }],
        ["rect", {
            width: "5",
            height: "5",
            x: "3",
            y: "16",
            rx: "1"
        }],
        ["path", {
            d: "M21 16h-3a2 2 0 0 0-2 2v3"
        }],
        ["path", {
            d: "M21 21v.01"
        }],
        ["path", {
            d: "M12 7v3a2 2 0 0 1-2 2H7"
        }],
        ["path", {
            d: "M3 12h.01"
        }],
        ["path", {
            d: "M12 3h.01"
        }],
        ["path", {
            d: "M12 16v.01"
        }],
        ["path", {
            d: "M16 12h1"
        }],
        ["path", {
            d: "M21 12v.01"
        }],
        ["path", {
            d: "M12 21v-1"
        }]
    ]],
    H6 = ["svg", t, [
        ["path", {
            d: "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
        }],
        ["path", {
            d: "M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
        }]
    ]],
    V6 = ["svg", t, [
        ["path", {
            d: "M20 8.54V4a2 2 0 1 0-4 0v3"
        }],
        ["path", {
            d: "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1.93 1.93 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1c-1.7 0-3 1.3-3 3"
        }],
        ["path", {
            d: "M7.61 12.53a3 3 0 1 0-1.6 4.3"
        }],
        ["path", {
            d: "M13 16a3 3 0 0 1 2.24 5"
        }],
        ["path", {
            d: "M18 12h.01"
        }]
    ]],
    L6 = ["svg", t, [
        ["path", {
            d: "M19.07 4.93A10 10 0 0 0 6.99 3.34"
        }],
        ["path", {
            d: "M4 6h.01"
        }],
        ["path", {
            d: "M2.29 9.62A10 10 0 1 0 21.31 8.35"
        }],
        ["path", {
            d: "M16.24 7.76A6 6 0 1 0 8.23 16.67"
        }],
        ["path", {
            d: "M12 18h.01"
        }],
        ["path", {
            d: "M17.99 11.66A6 6 0 0 1 15.77 16.67"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "2"
        }],
        ["path", {
            d: "m13.41 10.59 5.66-5.66"
        }]
    ]],
    S6 = ["svg", t, [
        ["path", {
            d: "M12 12h0"
        }],
        ["path", {
            d: "M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z"
        }],
        ["path", {
            d: "M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z"
        }],
        ["path", {
            d: "M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z"
        }]
    ]],
    A6 = ["svg", t, [
        ["path", {
            d: "M5 16v2"
        }],
        ["path", {
            d: "M19 16v2"
        }],
        ["rect", {
            width: "20",
            height: "8",
            x: "2",
            y: "8",
            rx: "2"
        }],
        ["path", {
            d: "M18 12h0"
        }]
    ]],
    C6 = ["svg", t, [
        ["path", {
            d: "M4.9 16.1C1 12.2 1 5.8 4.9 1.9"
        }],
        ["path", {
            d: "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"
        }],
        ["circle", {
            cx: "12",
            cy: "9",
            r: "2"
        }],
        ["path", {
            d: "M16.2 4.8c2 2 2.26 5.11.8 7.47"
        }],
        ["path", {
            d: "M19.1 1.9a9.96 9.96 0 0 1 0 14.1"
        }],
        ["path", {
            d: "M9.5 18h5"
        }],
        ["path", {
            d: "m8 22 4-11 4 11"
        }]
    ]],
    O6 = ["svg", t, [
        ["path", {
            d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9"
        }],
        ["path", {
            d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "2"
        }],
        ["path", {
            d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"
        }],
        ["path", {
            d: "M19.1 4.9C23 8.8 23 15.1 19.1 19"
        }]
    ]],
    E6 = ["svg", t, [
        ["path", {
            d: "M5 15h14"
        }],
        ["path", {
            d: "M5 9h14"
        }],
        ["path", {
            d: "m14 20-5-5 6-6-5-5"
        }]
    ]],
    k6 = ["svg", t, [
        ["path", {
            d: "M22 17a10 10 0 0 0-20 0"
        }],
        ["path", {
            d: "M6 17a6 6 0 0 1 12 0"
        }],
        ["path", {
            d: "M10 17a2 2 0 0 1 4 0"
        }]
    ]],
    P6 = ["svg", t, [
        ["path", {
            d: "M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4"
        }],
        ["path", {
            d: "M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3"
        }],
        ["path", {
            d: "M13.2 18a3 3 0 0 0-2.2-5"
        }],
        ["path", {
            d: "M13 22H4a2 2 0 0 1 0-4h12"
        }],
        ["path", {
            d: "M16 9h.01"
        }]
    ]],
    Z6 = ["svg", t, [
        ["rect", {
            width: "12",
            height: "20",
            x: "6",
            y: "2",
            rx: "2"
        }],
        ["rect", {
            width: "20",
            height: "12",
            x: "2",
            y: "6",
            rx: "2"
        }]
    ]],
    T6 = ["svg", t, [
        ["path", {
            d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"
        }],
        ["path", {
            d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"
        }],
        ["path", {
            d: "M12 17V7"
        }]
    ]],
    z6 = ["svg", t, [
        ["rect", {
            width: "20",
            height: "12",
            x: "2",
            y: "6",
            rx: "2"
        }]
    ]],
    D6 = ["svg", t, [
        ["rect", {
            width: "12",
            height: "20",
            x: "6",
            y: "2",
            rx: "2"
        }]
    ]],
    _6 = ["svg", t, [
        ["path", {
            d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"
        }],
        ["path", {
            d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"
        }],
        ["path", {
            d: "m14 16-3 3 3 3"
        }],
        ["path", {
            d: "M8.293 13.596 7.196 9.5 3.1 10.598"
        }],
        ["path", {
            d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"
        }],
        ["path", {
            d: "m13.378 9.633 4.096 1.098 1.097-4.096"
        }]
    ]],
    B6 = ["svg", t, [
        ["path", {
            d: "m15 14 5-5-5-5"
        }],
        ["path", {
            d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13"
        }]
    ]],
    R6 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "17",
            r: "1"
        }],
        ["path", {
            d: "M21 7v6h-6"
        }],
        ["path", {
            d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"
        }]
    ]],
    F6 = ["svg", t, [
        ["path", {
            d: "M21 7v6h-6"
        }],
        ["path", {
            d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"
        }]
    ]],
    j6 = ["svg", t, [
        ["path", {
            d: "M3 2v6h6"
        }],
        ["path", {
            d: "M21 12A9 9 0 0 0 6 5.3L3 8"
        }],
        ["path", {
            d: "M21 22v-6h-6"
        }],
        ["path", {
            d: "M3 12a9 9 0 0 0 15 6.7l3-2.7"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "1"
        }]
    ]],
    q6 = ["svg", t, [
        ["path", {
            d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
        }],
        ["path", {
            d: "M3 3v5h5"
        }],
        ["path", {
            d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"
        }],
        ["path", {
            d: "M16 16h5v5"
        }]
    ]],
    W6 = ["svg", t, [
        ["path", {
            d: "M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47"
        }],
        ["path", {
            d: "M8 16H3v5"
        }],
        ["path", {
            d: "M3 12C3 9.51 4 7.26 5.64 5.64"
        }],
        ["path", {
            d: "m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64"
        }],
        ["path", {
            d: "M21 12c0 1-.16 1.97-.47 2.87"
        }],
        ["path", {
            d: "M21 3v5h-5"
        }],
        ["path", {
            d: "M22 22 2 2"
        }]
    ]],
    N6 = ["svg", t, [
        ["path", {
            d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"
        }],
        ["path", {
            d: "M21 3v5h-5"
        }],
        ["path", {
            d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"
        }],
        ["path", {
            d: "M8 16H3v5"
        }]
    ]],
    I6 = ["svg", t, [
        ["path", {
            d: "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"
        }],
        ["path", {
            d: "M5 10h14"
        }],
        ["path", {
            d: "M15 7v6"
        }]
    ]],
    U6 = ["svg", t, [
        ["path", {
            d: "M17 3v10"
        }],
        ["path", {
            d: "m12.67 5.5 8.66 5"
        }],
        ["path", {
            d: "m12.67 10.5 8.66-5"
        }],
        ["path", {
            d: "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"
        }]
    ]],
    G6 = ["svg", t, [
        ["path", {
            d: "M4 7V4h16v3"
        }],
        ["path", {
            d: "M5 20h6"
        }],
        ["path", {
            d: "M13 4 8 20"
        }],
        ["path", {
            d: "m15 15 5 5"
        }],
        ["path", {
            d: "m20 15-5 5"
        }]
    ]],
    X6 = ["svg", t, [
        ["path", {
            d: "m17 2 4 4-4 4"
        }],
        ["path", {
            d: "M3 11v-1a4 4 0 0 1 4-4h14"
        }],
        ["path", {
            d: "m7 22-4-4 4-4"
        }],
        ["path", {
            d: "M21 13v1a4 4 0 0 1-4 4H3"
        }],
        ["path", {
            d: "M11 10h1v4"
        }]
    ]],
    $6 = ["svg", t, [
        ["path", {
            d: "m2 9 3-3 3 3"
        }],
        ["path", {
            d: "M13 18H7a2 2 0 0 1-2-2V6"
        }],
        ["path", {
            d: "m22 15-3 3-3-3"
        }],
        ["path", {
            d: "M11 6h6a2 2 0 0 1 2 2v10"
        }]
    ]],
    Y6 = ["svg", t, [
        ["path", {
            d: "m17 2 4 4-4 4"
        }],
        ["path", {
            d: "M3 11v-1a4 4 0 0 1 4-4h14"
        }],
        ["path", {
            d: "m7 22-4-4 4-4"
        }],
        ["path", {
            d: "M21 13v1a4 4 0 0 1-4 4H3"
        }]
    ]],
    K6 = ["svg", t, [
        ["path", {
            d: "M14 4c0-1.1.9-2 2-2"
        }],
        ["path", {
            d: "M20 2c1.1 0 2 .9 2 2"
        }],
        ["path", {
            d: "M22 8c0 1.1-.9 2-2 2"
        }],
        ["path", {
            d: "M16 10c-1.1 0-2-.9-2-2"
        }],
        ["path", {
            d: "m3 7 3 3 3-3"
        }],
        ["path", {
            d: "M6 10V5c0-1.7 1.3-3 3-3h1"
        }],
        ["rect", {
            width: "8",
            height: "8",
            x: "2",
            y: "14",
            rx: "2"
        }],
        ["path", {
            d: "M14 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"
        }],
        ["path", {
            d: "M20 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"
        }]
    ]],
    J6 = ["svg", t, [
        ["path", {
            d: "M14 4c0-1.1.9-2 2-2"
        }],
        ["path", {
            d: "M20 2c1.1 0 2 .9 2 2"
        }],
        ["path", {
            d: "M22 8c0 1.1-.9 2-2 2"
        }],
        ["path", {
            d: "M16 10c-1.1 0-2-.9-2-2"
        }],
        ["path", {
            d: "m3 7 3 3 3-3"
        }],
        ["path", {
            d: "M6 10V5c0-1.7 1.3-3 3-3h1"
        }],
        ["rect", {
            width: "8",
            height: "8",
            x: "2",
            y: "14",
            rx: "2"
        }]
    ]],
    Q6 = ["svg", t, [
        ["polyline", {
            points: "7 17 2 12 7 7"
        }],
        ["polyline", {
            points: "12 17 7 12 12 7"
        }],
        ["path", {
            d: "M22 18v-2a4 4 0 0 0-4-4H7"
        }]
    ]],
    t8 = ["svg", t, [
        ["polyline", {
            points: "9 17 4 12 9 7"
        }],
        ["path", {
            d: "M20 18v-2a4 4 0 0 0-4-4H4"
        }]
    ]],
    a8 = ["svg", t, [
        ["polygon", {
            points: "11 19 2 12 11 5 11 19"
        }],
        ["polygon", {
            points: "22 19 13 12 22 5 22 19"
        }]
    ]],
    e8 = ["svg", t, [
        ["path", {
            d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
        }],
        ["path", {
            d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
        }],
        ["path", {
            d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"
        }],
        ["path", {
            d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
        }]
    ]],
    h8 = ["svg", t, [
        ["polyline", {
            points: "3.5 2 6.5 12.5 18 12.5"
        }],
        ["line", {
            x1: "9.5",
            x2: "5.5",
            y1: "12.5",
            y2: "20"
        }],
        ["line", {
            x1: "15",
            x2: "18.5",
            y1: "12.5",
            y2: "20"
        }],
        ["path", {
            d: "M2.75 18a13 13 0 0 0 18.5 0"
        }]
    ]],
    n8 = ["svg", t, [
        ["path", {
            d: "M6 19V5"
        }],
        ["path", {
            d: "M10 19V6.8"
        }],
        ["path", {
            d: "M14 19v-7.8"
        }],
        ["path", {
            d: "M18 5v4"
        }],
        ["path", {
            d: "M18 19v-6"
        }],
        ["path", {
            d: "M22 19V9"
        }],
        ["path", {
            d: "M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"
        }]
    ]],
    r8 = ["svg", t, [
        ["path", {
            d: "M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"
        }],
        ["path", {
            d: "m15.194 13.707 3.814 1.86-1.86 3.814"
        }],
        ["path", {
            d: "M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"
        }]
    ]],
    o8 = ["svg", t, [
        ["path", {
            d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
        }],
        ["path", {
            d: "M3 3v5h5"
        }]
    ]],
    c8 = ["svg", t, [
        ["path", {
            d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"
        }],
        ["path", {
            d: "M21 3v5h-5"
        }]
    ]],
    s8 = ["svg", t, [
        ["rect", {
            width: "20",
            height: "8",
            x: "2",
            y: "14",
            rx: "2"
        }],
        ["path", {
            d: "M6.01 18H6"
        }],
        ["path", {
            d: "M10.01 18H10"
        }],
        ["path", {
            d: "M15 10v4"
        }],
        ["path", {
            d: "M17.84 7.17a4 4 0 0 0-5.66 0"
        }],
        ["path", {
            d: "M20.66 4.34a8 8 0 0 0-11.31 0"
        }]
    ]],
    i8 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }],
        ["line", {
            x1: "3",
            x2: "21",
            y1: "12",
            y2: "12"
        }]
    ]],
    d8 = ["svg", t, [
        ["path", {
            d: "M4 11a9 9 0 0 1 9 9"
        }],
        ["path", {
            d: "M4 4a16 16 0 0 1 16 16"
        }],
        ["circle", {
            cx: "5",
            cy: "19",
            r: "1"
        }]
    ]],
    p8 = ["svg", t, [
        ["path", {
            d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"
        }],
        ["path", {
            d: "m14.5 12.5 2-2"
        }],
        ["path", {
            d: "m11.5 9.5 2-2"
        }],
        ["path", {
            d: "m8.5 6.5 2-2"
        }],
        ["path", {
            d: "m17.5 15.5 2-2"
        }]
    ]],
    l8 = ["svg", t, [
        ["path", {
            d: "M6 11h8a4 4 0 0 0 0-8H9v18"
        }],
        ["path", {
            d: "M6 15h8"
        }]
    ]],
    v8 = ["svg", t, [
        ["path", {
            d: "M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z"
        }],
        ["path", {
            d: "M21 14 10 2 3 14h18Z"
        }],
        ["path", {
            d: "M10 2v16"
        }]
    ]],
    M8 = ["svg", t, [
        ["path", {
            d: "M7 21h10"
        }],
        ["path", {
            d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"
        }],
        ["path", {
            d: "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"
        }],
        ["path", {
            d: "m13 12 4-4"
        }],
        ["path", {
            d: "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"
        }]
    ]],
    y8 = ["svg", t, [
        ["path", {
            d: "M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3"
        }],
        ["path", {
            d: "M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83"
        }],
        ["path", {
            d: "m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z"
        }],
        ["path", {
            d: "M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z"
        }]
    ]],
    g8 = ["svg", t, [
        ["path", {
            d: "M4 10a7.31 7.31 0 0 0 10 10Z"
        }],
        ["path", {
            d: "m9 15 3-3"
        }],
        ["path", {
            d: "M17 13a6 6 0 0 0-6-6"
        }],
        ["path", {
            d: "M21 13A10 10 0 0 0 11 3"
        }]
    ]],
    u8 = ["svg", t, [
        ["path", {
            d: "M13 7 9 3 5 7l4 4"
        }],
        ["path", {
            d: "m17 11 4 4-4 4-4-4"
        }],
        ["path", {
            d: "m8 12 4 4 6-6-4-4Z"
        }],
        ["path", {
            d: "m16 8 3-3"
        }],
        ["path", {
            d: "M9 21a6 6 0 0 0-6-6"
        }]
    ]],
    f8 = ["svg", t, [
        ["path", {
            d: "M6 4a2 2 0 0 1 2-2h10l4 4v10.2a2 2 0 0 1-2 1.8H8a2 2 0 0 1-2-2Z"
        }],
        ["path", {
            d: "M10 2v4h6"
        }],
        ["path", {
            d: "M18 18v-7h-8v7"
        }],
        ["path", {
            d: "M18 22H4a2 2 0 0 1-2-2V6"
        }]
    ]],
    x8 = ["svg", t, [
        ["path", {
            d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
        }],
        ["polyline", {
            points: "17 21 17 13 7 13 7 21"
        }],
        ["polyline", {
            points: "7 3 7 8 15 8"
        }]
    ]],
    m8 = ["svg", t, [
        ["circle", {
            cx: "19",
            cy: "19",
            r: "2"
        }],
        ["circle", {
            cx: "5",
            cy: "5",
            r: "2"
        }],
        ["path", {
            d: "M5 7v12h12"
        }],
        ["path", {
            d: "m5 19 6-6"
        }]
    ]],
    w8 = ["svg", t, [
        ["path", {
            d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
        }],
        ["path", {
            d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
        }],
        ["path", {
            d: "M7 21h10"
        }],
        ["path", {
            d: "M12 3v18"
        }],
        ["path", {
            d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"
        }]
    ]],
    b8 = ["svg", t, [
        ["path", {
            d: "M21 3 9 15"
        }],
        ["path", {
            d: "M12 3H3v18h18v-9"
        }],
        ["path", {
            d: "M16 3h5v5"
        }],
        ["path", {
            d: "M14 15H9v-5"
        }]
    ]],
    H8 = ["svg", t, [
        ["path", {
            d: "M3 7V5a2 2 0 0 1 2-2h2"
        }],
        ["path", {
            d: "M17 3h2a2 2 0 0 1 2 2v2"
        }],
        ["path", {
            d: "M21 17v2a2 2 0 0 1-2 2h-2"
        }],
        ["path", {
            d: "M7 21H5a2 2 0 0 1-2-2v-2"
        }],
        ["path", {
            d: "M8 14s1.5 2 4 2 4-2 4-2"
        }],
        ["path", {
            d: "M9 9h.01"
        }],
        ["path", {
            d: "M15 9h.01"
        }]
    ]],
    V8 = ["svg", t, [
        ["path", {
            d: "M3 7V5a2 2 0 0 1 2-2h2"
        }],
        ["path", {
            d: "M17 3h2a2 2 0 0 1 2 2v2"
        }],
        ["path", {
            d: "M21 17v2a2 2 0 0 1-2 2h-2"
        }],
        ["path", {
            d: "M7 21H5a2 2 0 0 1-2-2v-2"
        }],
        ["line", {
            x1: "7",
            x2: "17",
            y1: "12",
            y2: "12"
        }]
    ]],
    L8 = ["svg", t, [
        ["path", {
            d: "M3 7V5a2 2 0 0 1 2-2h2"
        }],
        ["path", {
            d: "M17 3h2a2 2 0 0 1 2 2v2"
        }],
        ["path", {
            d: "M21 17v2a2 2 0 0 1-2 2h-2"
        }],
        ["path", {
            d: "M7 21H5a2 2 0 0 1-2-2v-2"
        }]
    ]],
    S8 = ["svg", t, [
        ["circle", {
            cx: "7.5",
            cy: "7.5",
            r: ".5"
        }],
        ["circle", {
            cx: "18.5",
            cy: "5.5",
            r: ".5"
        }],
        ["circle", {
            cx: "11.5",
            cy: "11.5",
            r: ".5"
        }],
        ["circle", {
            cx: "7.5",
            cy: "16.5",
            r: ".5"
        }],
        ["circle", {
            cx: "17.5",
            cy: "14.5",
            r: ".5"
        }],
        ["path", {
            d: "M3 3v18h18"
        }]
    ]],
    A8 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "10",
            r: "1"
        }],
        ["path", {
            d: "M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"
        }],
        ["path", {
            d: "M6 17v.01"
        }],
        ["path", {
            d: "M6 13v.01"
        }],
        ["path", {
            d: "M18 17v.01"
        }],
        ["path", {
            d: "M18 13v.01"
        }],
        ["path", {
            d: "M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5"
        }]
    ]],
    C8 = ["svg", t, [
        ["path", {
            d: "m4 6 8-4 8 4"
        }],
        ["path", {
            d: "m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"
        }],
        ["path", {
            d: "M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"
        }],
        ["path", {
            d: "M18 5v17"
        }],
        ["path", {
            d: "M6 5v17"
        }],
        ["circle", {
            cx: "12",
            cy: "9",
            r: "2"
        }]
    ]],
    O8 = ["svg", t, [
        ["path", {
            d: "M5.42 9.42 8 12"
        }],
        ["circle", {
            cx: "4",
            cy: "8",
            r: "2"
        }],
        ["path", {
            d: "m14 6-8.58 8.58"
        }],
        ["circle", {
            cx: "4",
            cy: "16",
            r: "2"
        }],
        ["path", {
            d: "M10.8 14.8 14 18"
        }],
        ["path", {
            d: "M16 12h-2"
        }],
        ["path", {
            d: "M22 12h-2"
        }]
    ]],
    E8 = ["svg", t, [
        ["path", {
            d: "M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"
        }],
        ["path", {
            d: "M10 22H8"
        }],
        ["path", {
            d: "M16 22h-2"
        }],
        ["circle", {
            cx: "8",
            cy: "8",
            r: "2"
        }],
        ["path", {
            d: "M9.414 9.414 12 12"
        }],
        ["path", {
            d: "M14.8 14.8 18 18"
        }],
        ["circle", {
            cx: "8",
            cy: "16",
            r: "2"
        }],
        ["path", {
            d: "m18 6-8.586 8.586"
        }]
    ]],
    k8 = ["svg", t, [
        ["rect", {
            width: "20",
            height: "20",
            x: "2",
            y: "2",
            rx: "2"
        }],
        ["circle", {
            cx: "8",
            cy: "8",
            r: "2"
        }],
        ["path", {
            d: "M9.414 9.414 12 12"
        }],
        ["path", {
            d: "M14.8 14.8 18 18"
        }],
        ["circle", {
            cx: "8",
            cy: "16",
            r: "2"
        }],
        ["path", {
            d: "m18 6-8.586 8.586"
        }]
    ]],
    P8 = ["svg", t, [
        ["circle", {
            cx: "6",
            cy: "6",
            r: "3"
        }],
        ["path", {
            d: "M8.12 8.12 12 12"
        }],
        ["path", {
            d: "M20 4 8.12 15.88"
        }],
        ["circle", {
            cx: "6",
            cy: "18",
            r: "3"
        }],
        ["path", {
            d: "M14.8 14.8 20 20"
        }]
    ]],
    Z8 = ["svg", t, [
        ["path", {
            d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"
        }],
        ["path", {
            d: "M8 21h8"
        }],
        ["path", {
            d: "M12 17v4"
        }],
        ["path", {
            d: "m22 3-5 5"
        }],
        ["path", {
            d: "m17 3 5 5"
        }]
    ]],
    T8 = ["svg", t, [
        ["path", {
            d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"
        }],
        ["path", {
            d: "M8 21h8"
        }],
        ["path", {
            d: "M12 17v4"
        }],
        ["path", {
            d: "m17 8 5-5"
        }],
        ["path", {
            d: "M17 3h5v5"
        }]
    ]],
    z8 = ["svg", t, [
        ["path", {
            d: "M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"
        }],
        ["path", {
            d: "M19 17V5a2 2 0 0 0-2-2H4"
        }],
        ["path", {
            d: "M15 8h-5"
        }],
        ["path", {
            d: "M15 12h-5"
        }]
    ]],
    D8 = ["svg", t, [
        ["path", {
            d: "M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"
        }],
        ["path", {
            d: "M19 17V5a2 2 0 0 0-2-2H4"
        }]
    ]],
    _8 = ["svg", t, [
        ["path", {
            d: "m8 11 2 2 4-4"
        }],
        ["circle", {
            cx: "11",
            cy: "11",
            r: "8"
        }],
        ["path", {
            d: "m21 21-4.3-4.3"
        }]
    ]],
    B8 = ["svg", t, [
        ["path", {
            d: "m9 9-2 2 2 2"
        }],
        ["path", {
            d: "m13 13 2-2-2-2"
        }],
        ["circle", {
            cx: "11",
            cy: "11",
            r: "8"
        }],
        ["path", {
            d: "m21 21-4.3-4.3"
        }]
    ]],
    R8 = ["svg", t, [
        ["path", {
            d: "m13.5 8.5-5 5"
        }],
        ["circle", {
            cx: "11",
            cy: "11",
            r: "8"
        }],
        ["path", {
            d: "m21 21-4.3-4.3"
        }]
    ]],
    F8 = ["svg", t, [
        ["path", {
            d: "m13.5 8.5-5 5"
        }],
        ["path", {
            d: "m8.5 8.5 5 5"
        }],
        ["circle", {
            cx: "11",
            cy: "11",
            r: "8"
        }],
        ["path", {
            d: "m21 21-4.3-4.3"
        }]
    ]],
    j8 = ["svg", t, [
        ["circle", {
            cx: "11",
            cy: "11",
            r: "8"
        }],
        ["path", {
            d: "m21 21-4.3-4.3"
        }]
    ]],
    q8 = ["svg", t, [
        ["path", {
            d: "m3 3 3 9-3 9 19-9Z"
        }],
        ["path", {
            d: "M6 12h16"
        }]
    ]],
    W8 = ["svg", t, [
        ["rect", {
            x: "14",
            y: "14",
            width: "8",
            height: "8",
            rx: "2"
        }],
        ["rect", {
            x: "2",
            y: "2",
            width: "8",
            height: "8",
            rx: "2"
        }],
        ["path", {
            d: "M7 14v1a2 2 0 0 0 2 2h1"
        }],
        ["path", {
            d: "M14 7h1a2 2 0 0 1 2 2v1"
        }]
    ]],
    N8 = ["svg", t, [
        ["path", {
            d: "m22 2-7 20-4-9-9-4Z"
        }],
        ["path", {
            d: "M22 2 11 13"
        }]
    ]],
    I8 = ["svg", t, [
        ["line", {
            x1: "3",
            x2: "21",
            y1: "12",
            y2: "12"
        }],
        ["polyline", {
            points: "8 8 12 4 16 8"
        }],
        ["polyline", {
            points: "16 16 12 20 8 16"
        }]
    ]],
    U8 = ["svg", t, [
        ["line", {
            x1: "12",
            x2: "12",
            y1: "3",
            y2: "21"
        }],
        ["polyline", {
            points: "8 8 4 12 8 16"
        }],
        ["polyline", {
            points: "16 16 20 12 16 8"
        }]
    ]],
    G8 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "3"
        }],
        ["path", {
            d: "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"
        }],
        ["path", {
            d: "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"
        }],
        ["path", {
            d: "M6 6h.01"
        }],
        ["path", {
            d: "M6 18h.01"
        }],
        ["path", {
            d: "m15.7 13.4-.9-.3"
        }],
        ["path", {
            d: "m9.2 10.9-.9-.3"
        }],
        ["path", {
            d: "m10.6 15.7.3-.9"
        }],
        ["path", {
            d: "m13.6 15.7-.4-1"
        }],
        ["path", {
            d: "m10.8 9.3-.4-1"
        }],
        ["path", {
            d: "m8.3 13.6 1-.4"
        }],
        ["path", {
            d: "m14.7 10.8 1-.4"
        }],
        ["path", {
            d: "m13.4 8.3-.3.9"
        }]
    ]],
    X8 = ["svg", t, [
        ["path", {
            d: "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"
        }],
        ["path", {
            d: "M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"
        }],
        ["path", {
            d: "M6 6h.01"
        }],
        ["path", {
            d: "M6 18h.01"
        }],
        ["path", {
            d: "m13 6-4 6h6l-4 6"
        }]
    ]],
    $8 = ["svg", t, [
        ["path", {
            d: "M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5"
        }],
        ["path", {
            d: "M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z"
        }],
        ["path", {
            d: "M22 17v-1a2 2 0 0 0-2-2h-1"
        }],
        ["path", {
            d: "M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z"
        }],
        ["path", {
            d: "M6 18h.01"
        }],
        ["path", {
            d: "m2 2 20 20"
        }]
    ]],
    Y8 = ["svg", t, [
        ["rect", {
            width: "20",
            height: "8",
            x: "2",
            y: "2",
            rx: "2",
            ry: "2"
        }],
        ["rect", {
            width: "20",
            height: "8",
            x: "2",
            y: "14",
            rx: "2",
            ry: "2"
        }],
        ["line", {
            x1: "6",
            x2: "6.01",
            y1: "6",
            y2: "6"
        }],
        ["line", {
            x1: "6",
            x2: "6.01",
            y1: "18",
            y2: "18"
        }]
    ]],
    K8 = ["svg", t, [
        ["path", {
            d: "M20 7h-9"
        }],
        ["path", {
            d: "M14 17H5"
        }],
        ["circle", {
            cx: "17",
            cy: "17",
            r: "3"
        }],
        ["circle", {
            cx: "7",
            cy: "7",
            r: "3"
        }]
    ]],
    J8 = ["svg", t, [
        ["path", {
            d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "3"
        }]
    ]],
    Q8 = ["svg", t, [
        ["path", {
            d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"
        }],
        ["rect", {
            x: "3",
            y: "14",
            width: "7",
            height: "7",
            rx: "1"
        }],
        ["circle", {
            cx: "17.5",
            cy: "17.5",
            r: "3.5"
        }]
    ]],
    tv = ["svg", t, [
        ["circle", {
            cx: "18",
            cy: "5",
            r: "3"
        }],
        ["circle", {
            cx: "6",
            cy: "12",
            r: "3"
        }],
        ["circle", {
            cx: "18",
            cy: "19",
            r: "3"
        }],
        ["line", {
            x1: "8.59",
            x2: "15.42",
            y1: "13.51",
            y2: "17.49"
        }],
        ["line", {
            x1: "15.41",
            x2: "8.59",
            y1: "6.51",
            y2: "10.49"
        }]
    ]],
    av = ["svg", t, [
        ["path", {
            d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
        }],
        ["polyline", {
            points: "16 6 12 2 8 6"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "2",
            y2: "15"
        }]
    ]],
    ev = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }],
        ["line", {
            x1: "3",
            x2: "21",
            y1: "9",
            y2: "9"
        }],
        ["line", {
            x1: "3",
            x2: "21",
            y1: "15",
            y2: "15"
        }],
        ["line", {
            x1: "9",
            x2: "9",
            y1: "9",
            y2: "21"
        }],
        ["line", {
            x1: "15",
            x2: "15",
            y1: "9",
            y2: "21"
        }]
    ]],
    hv = ["svg", t, [
        ["path", {
            d: "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"
        }]
    ]],
    nv = ["svg", t, [
        ["path", {
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
        }],
        ["path", {
            d: "M12 8v4"
        }],
        ["path", {
            d: "M12 16h.01"
        }]
    ]],
    rv = ["svg", t, [
        ["path", {
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
        }],
        ["path", {
            d: "m4 5 14 12"
        }]
    ]],
    ov = ["svg", t, [
        ["path", {
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
        }],
        ["path", {
            d: "m9 12 2 2 4-4"
        }]
    ]],
    cv = ["svg", t, [
        ["path", {
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
        }],
        ["path", {
            d: "M8 11h.01"
        }],
        ["path", {
            d: "M12 11h.01"
        }],
        ["path", {
            d: "M16 11h.01"
        }]
    ]],
    sv = ["svg", t, [
        ["path", {
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
        }],
        ["path", {
            d: "M12 22V2"
        }]
    ]],
    iv = ["svg", t, [
        ["path", {
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
        }],
        ["path", {
            d: "M8 11h8"
        }]
    ]],
    dv = ["svg", t, [
        ["path", {
            d: "M19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-3.2 1.2"
        }],
        ["path", {
            d: "m2 2 20 20"
        }],
        ["path", {
            d: "M4.7 4.7 4 5v7c0 6 8 10 8 10a20.3 20.3 0 0 0 5.62-4.38"
        }]
    ]],
    pv = ["svg", t, [
        ["path", {
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
        }],
        ["path", {
            d: "M8 11h8"
        }],
        ["path", {
            d: "M12 15V7"
        }]
    ]],
    lv = ["svg", t, [
        ["path", {
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
        }],
        ["path", {
            d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"
        }],
        ["path", {
            d: "M12 17h.01"
        }]
    ]],
    vv = ["svg", t, [
        ["path", {
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
        }],
        ["path", {
            d: "m14.5 9-5 5"
        }],
        ["path", {
            d: "m9.5 9 5 5"
        }]
    ]],
    Mv = ["svg", t, [
        ["path", {
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
        }]
    ]],
    yv = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "8"
        }],
        ["path", {
            d: "M12 2v7.5"
        }],
        ["path", {
            d: "m19 5-5.23 5.23"
        }],
        ["path", {
            d: "M22 12h-7.5"
        }],
        ["path", {
            d: "m19 19-5.23-5.23"
        }],
        ["path", {
            d: "M12 14.5V22"
        }],
        ["path", {
            d: "M10.23 13.77 5 19"
        }],
        ["path", {
            d: "M9.5 12H2"
        }],
        ["path", {
            d: "M10.23 10.23 5 5"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "2.5"
        }]
    ]],
    gv = ["svg", t, [
        ["path", {
            d: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
        }],
        ["path", {
            d: "M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"
        }],
        ["path", {
            d: "M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"
        }],
        ["path", {
            d: "M12 10v4"
        }],
        ["path", {
            d: "M12 2v3"
        }]
    ]],
    uv = ["svg", t, [
        ["path", {
            d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"
        }]
    ]],
    fv = ["svg", t, [
        ["path", {
            d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"
        }],
        ["path", {
            d: "M3 6h18"
        }],
        ["path", {
            d: "M16 10a4 4 0 0 1-8 0"
        }]
    ]],
    xv = ["svg", t, [
        ["path", {
            d: "m5 11 4-7"
        }],
        ["path", {
            d: "m19 11-4-7"
        }],
        ["path", {
            d: "M2 11h20"
        }],
        ["path", {
            d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4"
        }],
        ["path", {
            d: "m9 11 1 9"
        }],
        ["path", {
            d: "M4.5 15.5h15"
        }],
        ["path", {
            d: "m15 11-1 9"
        }]
    ]],
    mv = ["svg", t, [
        ["circle", {
            cx: "8",
            cy: "21",
            r: "1"
        }],
        ["circle", {
            cx: "19",
            cy: "21",
            r: "1"
        }],
        ["path", {
            d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
        }]
    ]],
    wv = ["svg", t, [
        ["path", {
            d: "M2 22v-5l5-5 5 5-5 5z"
        }],
        ["path", {
            d: "M9.5 14.5 16 8"
        }],
        ["path", {
            d: "m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2"
        }]
    ]],
    bv = ["svg", t, [
        ["path", {
            d: "m4 4 2.5 2.5"
        }],
        ["path", {
            d: "M13.5 6.5a4.95 4.95 0 0 0-7 7"
        }],
        ["path", {
            d: "M15 5 5 15"
        }],
        ["path", {
            d: "M14 17v.01"
        }],
        ["path", {
            d: "M10 16v.01"
        }],
        ["path", {
            d: "M13 13v.01"
        }],
        ["path", {
            d: "M16 10v.01"
        }],
        ["path", {
            d: "M11 20v.01"
        }],
        ["path", {
            d: "M17 14v.01"
        }],
        ["path", {
            d: "M20 11v.01"
        }]
    ]],
    Hv = ["svg", t, [
        ["path", {
            d: "m15 15 6 6m-6-6v4.8m0-4.8h4.8"
        }],
        ["path", {
            d: "M9 19.8V15m0 0H4.2M9 15l-6 6"
        }],
        ["path", {
            d: "M15 4.2V9m0 0h4.8M15 9l6-6"
        }],
        ["path", {
            d: "M9 4.2V9m0 0H4.2M9 9 3 3"
        }]
    ]],
    Vv = ["svg", t, [
        ["path", {
            d: "M12 22v-7l-2-2"
        }],
        ["path", {
            d: "M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z"
        }],
        ["path", {
            d: "m14 14-2 2"
        }]
    ]],
    Lv = ["svg", t, [
        ["path", {
            d: "M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"
        }],
        ["path", {
            d: "m18 2 4 4-4 4"
        }],
        ["path", {
            d: "M2 6h1.9c1.5 0 2.9.9 3.6 2.2"
        }],
        ["path", {
            d: "M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"
        }],
        ["path", {
            d: "m18 14 4 4-4 4"
        }]
    ]],
    Sv = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M16 8.9V7H8l4 5-4 5h8v-1.9"
        }]
    ]],
    Av = ["svg", t, [
        ["path", {
            d: "M18 7V4H6l6 8-6 8h12v-3"
        }]
    ]],
    Cv = ["svg", t, [
        ["path", {
            d: "M2 20h.01"
        }],
        ["path", {
            d: "M7 20v-4"
        }],
        ["path", {
            d: "M12 20v-8"
        }],
        ["path", {
            d: "M17 20V8"
        }]
    ]],
    Ov = ["svg", t, [
        ["path", {
            d: "M2 20h.01"
        }],
        ["path", {
            d: "M7 20v-4"
        }]
    ]],
    Ev = ["svg", t, [
        ["path", {
            d: "M2 20h.01"
        }],
        ["path", {
            d: "M7 20v-4"
        }],
        ["path", {
            d: "M12 20v-8"
        }]
    ]],
    kv = ["svg", t, [
        ["path", {
            d: "M2 20h.01"
        }]
    ]],
    Pv = ["svg", t, [
        ["path", {
            d: "M2 20h.01"
        }],
        ["path", {
            d: "M7 20v-4"
        }],
        ["path", {
            d: "M12 20v-8"
        }],
        ["path", {
            d: "M17 20V8"
        }],
        ["path", {
            d: "M22 4v16"
        }]
    ]],
    Zv = ["svg", t, [
        ["path", {
            d: "M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z"
        }],
        ["path", {
            d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H5v-2Z"
        }],
        ["path", {
            d: "M21 12h1"
        }],
        ["path", {
            d: "M18.5 4.5 18 5"
        }],
        ["path", {
            d: "M2 12h1"
        }],
        ["path", {
            d: "M12 2v1"
        }],
        ["path", {
            d: "m4.929 4.929.707.707"
        }],
        ["path", {
            d: "M12 12v6"
        }]
    ]],
    Tv = ["svg", t, [
        ["polygon", {
            points: "19 20 9 12 19 4 19 20"
        }],
        ["line", {
            x1: "5",
            x2: "5",
            y1: "19",
            y2: "5"
        }]
    ]],
    zv = ["svg", t, [
        ["polygon", {
            points: "5 4 15 12 5 20 5 4"
        }],
        ["line", {
            x1: "19",
            x2: "19",
            y1: "5",
            y2: "19"
        }]
    ]],
    Dv = ["svg", t, [
        ["circle", {
            cx: "9",
            cy: "12",
            r: "1"
        }],
        ["circle", {
            cx: "15",
            cy: "12",
            r: "1"
        }],
        ["path", {
            d: "M8 20v2h8v-2"
        }],
        ["path", {
            d: "m12.5 17-.5-1-.5 1h1z"
        }],
        ["path", {
            d: "M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20"
        }]
    ]],
    _v = ["svg", t, [
        ["rect", {
            width: "3",
            height: "8",
            x: "13",
            y: "2",
            rx: "1.5"
        }],
        ["path", {
            d: "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"
        }],
        ["rect", {
            width: "3",
            height: "8",
            x: "8",
            y: "14",
            rx: "1.5"
        }],
        ["path", {
            d: "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"
        }],
        ["rect", {
            width: "8",
            height: "3",
            x: "14",
            y: "13",
            rx: "1.5"
        }],
        ["path", {
            d: "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"
        }],
        ["rect", {
            width: "8",
            height: "3",
            x: "2",
            y: "8",
            rx: "1.5"
        }],
        ["path", {
            d: "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"
        }]
    ]],
    Bv = ["svg", t, [
        ["path", {
            d: "m8 14-6 6h9v-3"
        }],
        ["path", {
            d: "M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z"
        }]
    ]],
    Rv = ["svg", t, [
        ["line", {
            x1: "21",
            x2: "14",
            y1: "4",
            y2: "4"
        }],
        ["line", {
            x1: "10",
            x2: "3",
            y1: "4",
            y2: "4"
        }],
        ["line", {
            x1: "21",
            x2: "12",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "8",
            x2: "3",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "21",
            x2: "16",
            y1: "20",
            y2: "20"
        }],
        ["line", {
            x1: "12",
            x2: "3",
            y1: "20",
            y2: "20"
        }],
        ["line", {
            x1: "14",
            x2: "14",
            y1: "2",
            y2: "6"
        }],
        ["line", {
            x1: "8",
            x2: "8",
            y1: "10",
            y2: "14"
        }],
        ["line", {
            x1: "16",
            x2: "16",
            y1: "18",
            y2: "22"
        }]
    ]],
    Fv = ["svg", t, [
        ["line", {
            x1: "4",
            x2: "4",
            y1: "21",
            y2: "14"
        }],
        ["line", {
            x1: "4",
            x2: "4",
            y1: "10",
            y2: "3"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "21",
            y2: "12"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "3"
        }],
        ["line", {
            x1: "20",
            x2: "20",
            y1: "21",
            y2: "16"
        }],
        ["line", {
            x1: "20",
            x2: "20",
            y1: "12",
            y2: "3"
        }],
        ["line", {
            x1: "2",
            x2: "6",
            y1: "14",
            y2: "14"
        }],
        ["line", {
            x1: "10",
            x2: "14",
            y1: "8",
            y2: "8"
        }],
        ["line", {
            x1: "18",
            x2: "22",
            y1: "16",
            y2: "16"
        }]
    ]],
    jv = ["svg", t, [
        ["rect", {
            width: "14",
            height: "20",
            x: "5",
            y: "2",
            rx: "2",
            ry: "2"
        }],
        ["path", {
            d: "M12.667 8 10 12h4l-2.667 4"
        }]
    ]],
    qv = ["svg", t, [
        ["rect", {
            width: "7",
            height: "12",
            x: "2",
            y: "6",
            rx: "1"
        }],
        ["path", {
            d: "M13 8.32a7.43 7.43 0 0 1 0 7.36"
        }],
        ["path", {
            d: "M16.46 6.21a11.76 11.76 0 0 1 0 11.58"
        }],
        ["path", {
            d: "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"
        }]
    ]],
    Wv = ["svg", t, [
        ["rect", {
            width: "14",
            height: "20",
            x: "5",
            y: "2",
            rx: "2",
            ry: "2"
        }],
        ["path", {
            d: "M12 18h.01"
        }]
    ]],
    Nv = ["svg", t, [
        ["path", {
            d: "M22 11v1a10 10 0 1 1-9-10"
        }],
        ["path", {
            d: "M8 14s1.5 2 4 2 4-2 4-2"
        }],
        ["line", {
            x1: "9",
            x2: "9.01",
            y1: "9",
            y2: "9"
        }],
        ["line", {
            x1: "15",
            x2: "15.01",
            y1: "9",
            y2: "9"
        }],
        ["path", {
            d: "M16 5h6"
        }],
        ["path", {
            d: "M19 2v6"
        }]
    ]],
    Iv = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "M8 14s1.5 2 4 2 4-2 4-2"
        }],
        ["line", {
            x1: "9",
            x2: "9.01",
            y1: "9",
            y2: "9"
        }],
        ["line", {
            x1: "15",
            x2: "15.01",
            y1: "9",
            y2: "9"
        }]
    ]],
    Uv = ["svg", t, [
        ["path", {
            d: "M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"
        }],
        ["circle", {
            cx: "10",
            cy: "13",
            r: "8"
        }],
        ["path", {
            d: "M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"
        }],
        ["path", {
            d: "M18 3 19.1 5.2"
        }],
        ["path", {
            d: "M22 3 20.9 5.2"
        }]
    ]],
    Gv = ["svg", t, [
        ["line", {
            x1: "2",
            x2: "22",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "2",
            y2: "22"
        }],
        ["path", {
            d: "m20 16-4-4 4-4"
        }],
        ["path", {
            d: "m4 8 4 4-4 4"
        }],
        ["path", {
            d: "m16 4-4 4-4-4"
        }],
        ["path", {
            d: "m8 20 4-4 4 4"
        }]
    ]],
    Xv = ["svg", t, [
        ["path", {
            d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"
        }],
        ["path", {
            d: "M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z"
        }],
        ["path", {
            d: "M4 18v2"
        }],
        ["path", {
            d: "M20 18v2"
        }],
        ["path", {
            d: "M12 4v9"
        }]
    ]],
    $v = ["svg", t, [
        ["path", {
            d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"
        }],
        ["path", {
            d: "M7 21h10"
        }],
        ["path", {
            d: "M19.5 12 22 6"
        }],
        ["path", {
            d: "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"
        }],
        ["path", {
            d: "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"
        }],
        ["path", {
            d: "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"
        }]
    ]],
    Yv = ["svg", t, [
        ["path", {
            d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"
        }]
    ]],
    Kv = ["svg", t, [
        ["path", {
            d: "M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z"
        }],
        ["path", {
            d: "M12 18v4"
        }]
    ]],
    Jv = ["svg", t, [
        ["path", {
            d: "m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"
        }]
    ]],
    Qv = ["svg", t, [
        ["path", {
            d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
        }],
        ["path", {
            d: "M5 3v4"
        }],
        ["path", {
            d: "M19 17v4"
        }],
        ["path", {
            d: "M3 5h4"
        }],
        ["path", {
            d: "M17 19h4"
        }]
    ]],
    t7 = ["svg", t, [
        ["rect", {
            width: "16",
            height: "20",
            x: "4",
            y: "2",
            rx: "2",
            ry: "2"
        }],
        ["circle", {
            cx: "12",
            cy: "14",
            r: "4"
        }],
        ["line", {
            x1: "12",
            x2: "12.01",
            y1: "6",
            y2: "6"
        }]
    ]],
    a7 = ["svg", t, [
        ["path", {
            d: "m6 16 6-12 6 12"
        }],
        ["path", {
            d: "M8 12h8"
        }],
        ["path", {
            d: "M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"
        }]
    ]],
    e7 = ["svg", t, [
        ["path", {
            d: "m6 16 6-12 6 12"
        }],
        ["path", {
            d: "M8 12h8"
        }],
        ["path", {
            d: "m16 20 2 2 4-4"
        }]
    ]],
    h7 = ["svg", t, [
        ["circle", {
            cx: "19",
            cy: "5",
            r: "2"
        }],
        ["circle", {
            cx: "5",
            cy: "19",
            r: "2"
        }],
        ["path", {
            d: "M5 17A12 12 0 0 1 17 5"
        }]
    ]],
    n7 = ["svg", t, [
        ["path", {
            d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3"
        }],
        ["path", {
            d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "4",
            y2: "20"
        }]
    ]],
    r7 = ["svg", t, [
        ["path", {
            d: "M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3"
        }],
        ["path", {
            d: "M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3"
        }],
        ["line", {
            x1: "4",
            x2: "20",
            y1: "12",
            y2: "12"
        }]
    ]],
    o7 = ["svg", t, [
        ["path", {
            d: "M16 3h5v5"
        }],
        ["path", {
            d: "M8 3H3v5"
        }],
        ["path", {
            d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"
        }],
        ["path", {
            d: "m15 9 6-6"
        }]
    ]],
    c7 = ["svg", t, [
        ["path", {
            d: "M3 3h.01"
        }],
        ["path", {
            d: "M7 5h.01"
        }],
        ["path", {
            d: "M11 7h.01"
        }],
        ["path", {
            d: "M3 7h.01"
        }],
        ["path", {
            d: "M7 9h.01"
        }],
        ["path", {
            d: "M3 11h.01"
        }],
        ["rect", {
            width: "4",
            height: "4",
            x: "15",
            y: "5"
        }],
        ["path", {
            d: "m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"
        }],
        ["path", {
            d: "m13 14 8-2"
        }],
        ["path", {
            d: "m13 19 8-2"
        }]
    ]],
    s7 = ["svg", t, [
        ["path", {
            d: "M7 20h10"
        }],
        ["path", {
            d: "M10 20c5.5-2.5.8-6.4 3-10"
        }],
        ["path", {
            d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"
        }],
        ["path", {
            d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"
        }]
    ]],
    i7 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M12 8v8"
        }],
        ["path", {
            d: "m8.5 14 7-4"
        }],
        ["path", {
            d: "m8.5 10 7 4"
        }]
    ]],
    d7 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "m10 10-2 2 2 2"
        }],
        ["path", {
            d: "m14 14 2-2-2-2"
        }]
    ]],
    p7 = ["svg", t, [
        ["path", {
            d: "m10 10-2 2 2 2"
        }],
        ["path", {
            d: "m14 14 2-2-2-2"
        }],
        ["path", {
            d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"
        }],
        ["path", {
            d: "M9 21h1"
        }],
        ["path", {
            d: "M14 21h1"
        }]
    ]],
    l7 = ["svg", t, [
        ["path", {
            d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"
        }],
        ["path", {
            d: "M9 21h1"
        }],
        ["path", {
            d: "M14 21h1"
        }]
    ]],
    v7 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "1"
        }]
    ]],
    M7 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M7 10h10"
        }],
        ["path", {
            d: "M7 14h10"
        }]
    ]],
    y7 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["line", {
            x1: "9",
            x2: "15",
            y1: "15",
            y2: "9"
        }]
    ]],
    g7 = ["svg", t, [
        ["path", {
            d: "M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"
        }],
        ["path", {
            d: "M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"
        }],
        ["rect", {
            width: "8",
            height: "8",
            x: "14",
            y: "14",
            rx: "2"
        }]
    ]],
    u7 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }]
    ]],
    f7 = ["svg", t, [
        ["path", {
            d: "M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"
        }],
        ["path", {
            d: "M16 20c0-1.7 1.3-3 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4"
        }],
        ["path", {
            d: "M15.2 22a3 3 0 0 0-2.2-5"
        }],
        ["path", {
            d: "M18 13h.01"
        }]
    ]],
    x7 = ["svg", t, [
        ["path", {
            d: "M5 22h14"
        }],
        ["path", {
            d: "M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z"
        }],
        ["path", {
            d: "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13"
        }]
    ]],
    m7 = ["svg", t, [
        ["path", {
            d: "M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2"
        }]
    ]],
    w7 = ["svg", t, [
        ["path", {
            d: "M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43"
        }],
        ["path", {
            d: "M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }]
    ]],
    b7 = ["svg", t, [
        ["polygon", {
            points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        }]
    ]],
    H7 = ["svg", t, [
        ["line", {
            x1: "18",
            x2: "18",
            y1: "20",
            y2: "4"
        }],
        ["polygon", {
            points: "14,20 4,12 14,4"
        }]
    ]],
    V7 = ["svg", t, [
        ["line", {
            x1: "6",
            x2: "6",
            y1: "4",
            y2: "20"
        }],
        ["polygon", {
            points: "10,4 20,12 10,20"
        }]
    ]],
    L7 = ["svg", t, [
        ["path", {
            d: "M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"
        }],
        ["path", {
            d: "M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"
        }],
        ["circle", {
            cx: "20",
            cy: "10",
            r: "2"
        }]
    ]],
    S7 = ["svg", t, [
        ["path", {
            d: "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"
        }],
        ["path", {
            d: "M15 3v6h6"
        }],
        ["path", {
            d: "M10 16s.8 1 2 1c1.3 0 2-1 2-1"
        }],
        ["path", {
            d: "M8 13h0"
        }],
        ["path", {
            d: "M16 13h0"
        }]
    ]],
    A7 = ["svg", t, [
        ["path", {
            d: "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"
        }],
        ["path", {
            d: "M15 3v6h6"
        }]
    ]],
    C7 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["rect", {
            width: "6",
            height: "6",
            x: "9",
            y: "9"
        }]
    ]],
    O7 = ["svg", t, [
        ["path", {
            d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"
        }],
        ["path", {
            d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
        }],
        ["path", {
            d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"
        }],
        ["path", {
            d: "M2 7h20"
        }],
        ["path", {
            d: "M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"
        }]
    ]],
    E7 = ["svg", t, [
        ["rect", {
            width: "20",
            height: "6",
            x: "2",
            y: "4",
            rx: "2"
        }],
        ["rect", {
            width: "20",
            height: "6",
            x: "2",
            y: "14",
            rx: "2"
        }]
    ]],
    k7 = ["svg", t, [
        ["rect", {
            width: "6",
            height: "20",
            x: "4",
            y: "2",
            rx: "2"
        }],
        ["rect", {
            width: "6",
            height: "20",
            x: "14",
            y: "2",
            rx: "2"
        }]
    ]],
    P7 = ["svg", t, [
        ["path", {
            d: "M16 4H9a3 3 0 0 0-2.83 4"
        }],
        ["path", {
            d: "M14 12a4 4 0 0 1 0 8H6"
        }],
        ["line", {
            x1: "4",
            x2: "20",
            y1: "12",
            y2: "12"
        }]
    ]],
    Z7 = ["svg", t, [
        ["path", {
            d: "m4 5 8 8"
        }],
        ["path", {
            d: "m12 5-8 8"
        }],
        ["path", {
            d: "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"
        }]
    ]],
    T7 = ["svg", t, [
        ["path", {
            d: "M7 13h4"
        }],
        ["path", {
            d: "M15 13h2"
        }],
        ["path", {
            d: "M7 9h2"
        }],
        ["path", {
            d: "M13 9h4"
        }],
        ["path", {
            d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z"
        }]
    ]],
    z7 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "4"
        }],
        ["path", {
            d: "M12 4h.01"
        }],
        ["path", {
            d: "M20 12h.01"
        }],
        ["path", {
            d: "M12 20h.01"
        }],
        ["path", {
            d: "M4 12h.01"
        }],
        ["path", {
            d: "M17.657 6.343h.01"
        }],
        ["path", {
            d: "M17.657 17.657h.01"
        }],
        ["path", {
            d: "M6.343 17.657h.01"
        }],
        ["path", {
            d: "M6.343 6.343h.01"
        }]
    ]],
    D7 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "4"
        }],
        ["path", {
            d: "M12 3v1"
        }],
        ["path", {
            d: "M12 20v1"
        }],
        ["path", {
            d: "M3 12h1"
        }],
        ["path", {
            d: "M20 12h1"
        }],
        ["path", {
            d: "m18.364 5.636-.707.707"
        }],
        ["path", {
            d: "m6.343 17.657-.707.707"
        }],
        ["path", {
            d: "m5.636 5.636.707.707"
        }],
        ["path", {
            d: "m17.657 17.657.707.707"
        }]
    ]],
    _7 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "4"
        }],
        ["path", {
            d: "M12 8a2 2 0 1 0 4 4"
        }],
        ["path", {
            d: "M12 2v2"
        }],
        ["path", {
            d: "M12 20v2"
        }],
        ["path", {
            d: "m4.93 4.93 1.41 1.41"
        }],
        ["path", {
            d: "m17.66 17.66 1.41 1.41"
        }],
        ["path", {
            d: "M2 12h2"
        }],
        ["path", {
            d: "M20 12h2"
        }],
        ["path", {
            d: "m6.34 17.66-1.41 1.41"
        }],
        ["path", {
            d: "m19.07 4.93-1.41 1.41"
        }]
    ]],
    B7 = ["svg", t, [
        ["path", {
            d: "M10 9a3 3 0 1 0 0 6"
        }],
        ["path", {
            d: "M2 12h1"
        }],
        ["path", {
            d: "M14 21V3"
        }],
        ["path", {
            d: "M10 4V3"
        }],
        ["path", {
            d: "M10 21v-1"
        }],
        ["path", {
            d: "m3.64 18.36.7-.7"
        }],
        ["path", {
            d: "m4.34 6.34-.7-.7"
        }],
        ["path", {
            d: "M14 12h8"
        }],
        ["path", {
            d: "m17 4-3 3"
        }],
        ["path", {
            d: "m14 17 3 3"
        }],
        ["path", {
            d: "m21 15-3-3 3-3"
        }]
    ]],
    R7 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "4"
        }],
        ["path", {
            d: "M12 2v2"
        }],
        ["path", {
            d: "M12 20v2"
        }],
        ["path", {
            d: "m4.93 4.93 1.41 1.41"
        }],
        ["path", {
            d: "m17.66 17.66 1.41 1.41"
        }],
        ["path", {
            d: "M2 12h2"
        }],
        ["path", {
            d: "M20 12h2"
        }],
        ["path", {
            d: "m6.34 17.66-1.41 1.41"
        }],
        ["path", {
            d: "m19.07 4.93-1.41 1.41"
        }]
    ]],
    F7 = ["svg", t, [
        ["path", {
            d: "M12 2v8"
        }],
        ["path", {
            d: "m4.93 10.93 1.41 1.41"
        }],
        ["path", {
            d: "M2 18h2"
        }],
        ["path", {
            d: "M20 18h2"
        }],
        ["path", {
            d: "m19.07 10.93-1.41 1.41"
        }],
        ["path", {
            d: "M22 22H2"
        }],
        ["path", {
            d: "m8 6 4-4 4 4"
        }],
        ["path", {
            d: "M16 18a4 4 0 0 0-8 0"
        }]
    ]],
    j7 = ["svg", t, [
        ["path", {
            d: "M12 10V2"
        }],
        ["path", {
            d: "m4.93 10.93 1.41 1.41"
        }],
        ["path", {
            d: "M2 18h2"
        }],
        ["path", {
            d: "M20 18h2"
        }],
        ["path", {
            d: "m19.07 10.93-1.41 1.41"
        }],
        ["path", {
            d: "M22 22H2"
        }],
        ["path", {
            d: "m16 6-4 4-4-4"
        }],
        ["path", {
            d: "M16 18a4 4 0 0 0-8 0"
        }]
    ]],
    q7 = ["svg", t, [
        ["path", {
            d: "m4 19 8-8"
        }],
        ["path", {
            d: "m12 19-8-8"
        }],
        ["path", {
            d: "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"
        }]
    ]],
    W7 = ["svg", t, [
        ["path", {
            d: "M10 21V3h8"
        }],
        ["path", {
            d: "M6 16h9"
        }],
        ["path", {
            d: "M10 9.5h7"
        }]
    ]],
    N7 = ["svg", t, [
        ["path", {
            d: "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"
        }],
        ["path", {
            d: "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "3"
        }],
        ["path", {
            d: "m18 22-3-3 3-3"
        }],
        ["path", {
            d: "m6 2 3 3-3 3"
        }]
    ]],
    I7 = ["svg", t, [
        ["polyline", {
            points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5"
        }],
        ["line", {
            x1: "13",
            x2: "19",
            y1: "19",
            y2: "13"
        }],
        ["line", {
            x1: "16",
            x2: "20",
            y1: "16",
            y2: "20"
        }],
        ["line", {
            x1: "19",
            x2: "21",
            y1: "21",
            y2: "19"
        }]
    ]],
    U7 = ["svg", t, [
        ["polyline", {
            points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5"
        }],
        ["line", {
            x1: "13",
            x2: "19",
            y1: "19",
            y2: "13"
        }],
        ["line", {
            x1: "16",
            x2: "20",
            y1: "16",
            y2: "20"
        }],
        ["line", {
            x1: "19",
            x2: "21",
            y1: "21",
            y2: "19"
        }],
        ["polyline", {
            points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5"
        }],
        ["line", {
            x1: "5",
            x2: "9",
            y1: "14",
            y2: "18"
        }],
        ["line", {
            x1: "7",
            x2: "4",
            y1: "17",
            y2: "20"
        }],
        ["line", {
            x1: "3",
            x2: "5",
            y1: "19",
            y2: "21"
        }]
    ]],
    G7 = ["svg", t, [
        ["path", {
            d: "m18 2 4 4"
        }],
        ["path", {
            d: "m17 7 3-3"
        }],
        ["path", {
            d: "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"
        }],
        ["path", {
            d: "m9 11 4 4"
        }],
        ["path", {
            d: "m5 19-3 3"
        }],
        ["path", {
            d: "m14 4 6 6"
        }]
    ]],
    X7 = ["svg", t, [
        ["path", {
            d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"
        }]
    ]],
    $7 = ["svg", t, [
        ["path", {
            d: "M15 3v18"
        }],
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M21 9H3"
        }],
        ["path", {
            d: "M21 15H3"
        }]
    ]],
    Y7 = ["svg", t, [
        ["path", {
            d: "M12 3v18"
        }],
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M3 9h18"
        }],
        ["path", {
            d: "M3 15h18"
        }]
    ]],
    K7 = ["svg", t, [
        ["rect", {
            width: "10",
            height: "14",
            x: "3",
            y: "8",
            rx: "2"
        }],
        ["path", {
            d: "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"
        }],
        ["path", {
            d: "M8 18h.01"
        }]
    ]],
    J7 = ["svg", t, [
        ["rect", {
            width: "16",
            height: "20",
            x: "4",
            y: "2",
            rx: "2",
            ry: "2"
        }],
        ["line", {
            x1: "12",
            x2: "12.01",
            y1: "18",
            y2: "18"
        }]
    ]],
    Q7 = ["svg", t, [
        ["circle", {
            cx: "7",
            cy: "7",
            r: "5"
        }],
        ["circle", {
            cx: "17",
            cy: "17",
            r: "5"
        }],
        ["path", {
            d: "M12 17h10"
        }],
        ["path", {
            d: "m3.46 10.54 7.08-7.08"
        }]
    ]],
    tM = ["svg", t, [
        ["path", {
            d: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"
        }],
        ["path", {
            d: "M7 7h.01"
        }]
    ]],
    aM = ["svg", t, [
        ["path", {
            d: "M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z"
        }],
        ["path", {
            d: "M6 9.01V9"
        }],
        ["path", {
            d: "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"
        }]
    ]],
    eM = ["svg", t, [
        ["path", {
            d: "M4 4v16"
        }]
    ]],
    hM = ["svg", t, [
        ["path", {
            d: "M4 4v16"
        }],
        ["path", {
            d: "M9 4v16"
        }]
    ]],
    nM = ["svg", t, [
        ["path", {
            d: "M4 4v16"
        }],
        ["path", {
            d: "M9 4v16"
        }],
        ["path", {
            d: "M14 4v16"
        }]
    ]],
    rM = ["svg", t, [
        ["path", {
            d: "M4 4v16"
        }],
        ["path", {
            d: "M9 4v16"
        }],
        ["path", {
            d: "M14 4v16"
        }],
        ["path", {
            d: "M19 4v16"
        }]
    ]],
    oM = ["svg", t, [
        ["path", {
            d: "M4 4v16"
        }],
        ["path", {
            d: "M9 4v16"
        }],
        ["path", {
            d: "M14 4v16"
        }],
        ["path", {
            d: "M19 4v16"
        }],
        ["path", {
            d: "M22 6 2 18"
        }]
    ]],
    cM = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "6"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "2"
        }]
    ]],
    sM = ["svg", t, [
        ["path", {
            d: "M19 20 10 4"
        }],
        ["path", {
            d: "m5 20 9-16"
        }],
        ["path", {
            d: "M3 20h18"
        }],
        ["path", {
            d: "m12 15-3 5"
        }],
        ["path", {
            d: "m12 15 3 5"
        }]
    ]],
    iM = ["svg", t, [
        ["path", {
            d: "m7 11 2-2-2-2"
        }],
        ["path", {
            d: "M11 13h4"
        }],
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }]
    ]],
    dM = ["svg", t, [
        ["polyline", {
            points: "4 17 10 11 4 5"
        }],
        ["line", {
            x1: "12",
            x2: "20",
            y1: "19",
            y2: "19"
        }]
    ]],
    pM = ["svg", t, [
        ["path", {
            d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3"
        }],
        ["path", {
            d: "m16 2 6 6"
        }],
        ["path", {
            d: "M12 16H4"
        }]
    ]],
    lM = ["svg", t, [
        ["path", {
            d: "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2"
        }],
        ["path", {
            d: "M8.5 2h7"
        }],
        ["path", {
            d: "M14.5 16h-5"
        }]
    ]],
    vM = ["svg", t, [
        ["path", {
            d: "M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2"
        }],
        ["path", {
            d: "M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2"
        }],
        ["path", {
            d: "M3 2h7"
        }],
        ["path", {
            d: "M14 2h7"
        }],
        ["path", {
            d: "M9 16H4"
        }],
        ["path", {
            d: "M20 16h-5"
        }]
    ]],
    MM = ["svg", t, [
        ["path", {
            d: "M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1"
        }],
        ["path", {
            d: "M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5"
        }],
        ["path", {
            d: "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"
        }],
        ["path", {
            d: "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"
        }],
        ["path", {
            d: "M9 7v10"
        }]
    ]],
    yM = ["svg", t, [
        ["path", {
            d: "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"
        }],
        ["path", {
            d: "M7 22h1a4 4 0 0 0 4-4v-1"
        }],
        ["path", {
            d: "M7 2h1a4 4 0 0 1 4 4v1"
        }]
    ]],
    gM = ["svg", t, [
        ["path", {
            d: "M17 6H3"
        }],
        ["path", {
            d: "M21 12H8"
        }],
        ["path", {
            d: "M21 18H8"
        }],
        ["path", {
            d: "M3 12v6"
        }]
    ]],
    uM = ["svg", t, [
        ["path", {
            d: "M5 3a2 2 0 0 0-2 2"
        }],
        ["path", {
            d: "M19 3a2 2 0 0 1 2 2"
        }],
        ["path", {
            d: "M21 19a2 2 0 0 1-2 2"
        }],
        ["path", {
            d: "M5 21a2 2 0 0 1-2-2"
        }],
        ["path", {
            d: "M9 3h1"
        }],
        ["path", {
            d: "M9 21h1"
        }],
        ["path", {
            d: "M14 3h1"
        }],
        ["path", {
            d: "M14 21h1"
        }],
        ["path", {
            d: "M3 9v1"
        }],
        ["path", {
            d: "M21 9v1"
        }],
        ["path", {
            d: "M3 14v1"
        }],
        ["path", {
            d: "M21 14v1"
        }],
        ["line", {
            x1: "7",
            x2: "15",
            y1: "8",
            y2: "8"
        }],
        ["line", {
            x1: "7",
            x2: "17",
            y1: "12",
            y2: "12"
        }],
        ["line", {
            x1: "7",
            x2: "13",
            y1: "16",
            y2: "16"
        }]
    ]],
    fM = ["svg", t, [
        ["path", {
            d: "M17 6.1H3"
        }],
        ["path", {
            d: "M21 12.1H3"
        }],
        ["path", {
            d: "M15.1 18H3"
        }]
    ]],
    xM = ["svg", t, [
        ["path", {
            d: "M2 12h10"
        }],
        ["path", {
            d: "M9 4v16"
        }],
        ["path", {
            d: "m3 9 3 3-3 3"
        }],
        ["path", {
            d: "M12 6 9 9 6 6"
        }],
        ["path", {
            d: "m6 18 3-3 1.5 1.5"
        }],
        ["path", {
            d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"
        }]
    ]],
    mM = ["svg", t, [
        ["path", {
            d: "M12 9a4 4 0 0 0-2 7.5"
        }],
        ["path", {
            d: "M12 3v2"
        }],
        ["path", {
            d: "m6.6 18.4-1.4 1.4"
        }],
        ["path", {
            d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"
        }],
        ["path", {
            d: "M4 13H2"
        }],
        ["path", {
            d: "M6.34 7.34 4.93 5.93"
        }]
    ]],
    wM = ["svg", t, [
        ["path", {
            d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"
        }]
    ]],
    bM = ["svg", t, [
        ["path", {
            d: "M17 14V2"
        }],
        ["path", {
            d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"
        }]
    ]],
    HM = ["svg", t, [
        ["path", {
            d: "M7 10v12"
        }],
        ["path", {
            d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"
        }]
    ]],
    VM = ["svg", t, [
        ["path", {
            d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
        }],
        ["path", {
            d: "M13 5v2"
        }],
        ["path", {
            d: "M13 17v2"
        }],
        ["path", {
            d: "M13 11v2"
        }]
    ]],
    LM = ["svg", t, [
        ["path", {
            d: "M10 2h4"
        }],
        ["path", {
            d: "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7"
        }],
        ["path", {
            d: "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2"
        }],
        ["path", {
            d: "m2 2 20 20"
        }],
        ["path", {
            d: "M12 12v-2"
        }]
    ]],
    SM = ["svg", t, [
        ["path", {
            d: "M10 2h4"
        }],
        ["path", {
            d: "M12 14v-4"
        }],
        ["path", {
            d: "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"
        }],
        ["path", {
            d: "M9 17H4v5"
        }]
    ]],
    AM = ["svg", t, [
        ["line", {
            x1: "10",
            x2: "14",
            y1: "2",
            y2: "2"
        }],
        ["line", {
            x1: "12",
            x2: "15",
            y1: "14",
            y2: "11"
        }],
        ["circle", {
            cx: "12",
            cy: "14",
            r: "8"
        }]
    ]],
    CM = ["svg", t, [
        ["rect", {
            width: "20",
            height: "12",
            x: "2",
            y: "6",
            rx: "6",
            ry: "6"
        }],
        ["circle", {
            cx: "8",
            cy: "12",
            r: "2"
        }]
    ]],
    OM = ["svg", t, [
        ["rect", {
            width: "20",
            height: "12",
            x: "2",
            y: "6",
            rx: "6",
            ry: "6"
        }],
        ["circle", {
            cx: "16",
            cy: "12",
            r: "2"
        }]
    ]],
    EM = ["svg", t, [
        ["path", {
            d: "M21 4H3"
        }],
        ["path", {
            d: "M18 8H6"
        }],
        ["path", {
            d: "M19 12H9"
        }],
        ["path", {
            d: "M16 16h-6"
        }],
        ["path", {
            d: "M11 20H9"
        }]
    ]],
    kM = ["svg", t, [
        ["path", {
            d: "M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16"
        }],
        ["path", {
            d: "M2 14h12"
        }],
        ["path", {
            d: "M22 14h-2"
        }],
        ["path", {
            d: "M12 20v-6"
        }],
        ["path", {
            d: "m2 2 20 20"
        }],
        ["path", {
            d: "M22 16V6a2 2 0 0 0-2-2H10"
        }]
    ]],
    PM = ["svg", t, [
        ["rect", {
            width: "20",
            height: "16",
            x: "2",
            y: "4",
            rx: "2"
        }],
        ["path", {
            d: "M2 14h20"
        }],
        ["path", {
            d: "M12 20v-6"
        }]
    ]],
    ZM = ["svg", t, [
        ["path", {
            d: "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"
        }],
        ["path", {
            d: "M8 13v9"
        }],
        ["path", {
            d: "M16 22v-9"
        }],
        ["path", {
            d: "m9 6 1 7"
        }],
        ["path", {
            d: "m15 6-1 7"
        }],
        ["path", {
            d: "M12 6V2"
        }],
        ["path", {
            d: "M13 2h-2"
        }]
    ]],
    TM = ["svg", t, [
        ["rect", {
            width: "18",
            height: "12",
            x: "3",
            y: "8",
            rx: "1"
        }],
        ["path", {
            d: "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"
        }],
        ["path", {
            d: "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"
        }]
    ]],
    zM = ["svg", t, [
        ["path", {
            d: "M3 4h9l1 7"
        }],
        ["path", {
            d: "M4 11V4"
        }],
        ["path", {
            d: "M8 10V4"
        }],
        ["path", {
            d: "M18 5c-.6 0-1 .4-1 1v5.6"
        }],
        ["path", {
            d: "m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1"
        }],
        ["circle", {
            cx: "7",
            cy: "15",
            r: ".5"
        }],
        ["circle", {
            cx: "7",
            cy: "15",
            r: "5"
        }],
        ["path", {
            d: "M16 18h-5"
        }],
        ["circle", {
            cx: "18",
            cy: "18",
            r: "2"
        }]
    ]],
    DM = ["svg", t, [
        ["path", {
            d: "M9.3 6.2a4.55 4.55 0 0 0 5.4 0"
        }],
        ["path", {
            d: "M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3"
        }],
        ["path", {
            d: "M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z"
        }],
        ["path", {
            d: "m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8"
        }]
    ]],
    _M = ["svg", t, [
        ["path", {
            d: "M2 22V12a10 10 0 1 1 20 0v10"
        }],
        ["path", {
            d: "M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8"
        }],
        ["path", {
            d: "M10 15h.01"
        }],
        ["path", {
            d: "M14 15h.01"
        }],
        ["path", {
            d: "M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z"
        }],
        ["path", {
            d: "m9 19-2 3"
        }],
        ["path", {
            d: "m15 19 2 3"
        }]
    ]],
    BM = ["svg", t, [
        ["path", {
            d: "M8 3.1V7a4 4 0 0 0 8 0V3.1"
        }],
        ["path", {
            d: "m9 15-1-1"
        }],
        ["path", {
            d: "m15 15 1-1"
        }],
        ["path", {
            d: "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"
        }],
        ["path", {
            d: "m8 19-2 3"
        }],
        ["path", {
            d: "m16 19 2 3"
        }]
    ]],
    RM = ["svg", t, [
        ["path", {
            d: "M2 17 17 2"
        }],
        ["path", {
            d: "m2 14 8 8"
        }],
        ["path", {
            d: "m5 11 8 8"
        }],
        ["path", {
            d: "m8 8 8 8"
        }],
        ["path", {
            d: "m11 5 8 8"
        }],
        ["path", {
            d: "m14 2 8 8"
        }],
        ["path", {
            d: "M7 22 22 7"
        }]
    ]],
    FM = ["svg", t, [
        ["rect", {
            width: "16",
            height: "16",
            x: "4",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M4 11h16"
        }],
        ["path", {
            d: "M12 3v8"
        }],
        ["path", {
            d: "m8 19-2 3"
        }],
        ["path", {
            d: "m18 22-2-3"
        }],
        ["path", {
            d: "M8 15h0"
        }],
        ["path", {
            d: "M16 15h0"
        }]
    ]],
    jM = ["svg", t, [
        ["path", {
            d: "M3 6h18"
        }],
        ["path", {
            d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
        }],
        ["path", {
            d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
        }],
        ["line", {
            x1: "10",
            x2: "10",
            y1: "11",
            y2: "17"
        }],
        ["line", {
            x1: "14",
            x2: "14",
            y1: "11",
            y2: "17"
        }]
    ]],
    qM = ["svg", t, [
        ["path", {
            d: "M3 6h18"
        }],
        ["path", {
            d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
        }],
        ["path", {
            d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
        }]
    ]],
    WM = ["svg", t, [
        ["path", {
            d: "M8 19h8a4 4 0 0 0 3.8-2.8 4 4 0 0 0-1.6-4.5c1-1.1 1-2.7.4-4-.7-1.2-2.2-2-3.6-1.7a3 3 0 0 0-3-3 3 3 0 0 0-3 3c-1.4-.2-2.9.5-3.6 1.7-.7 1.3-.5 2.9.4 4a4 4 0 0 0-1.6 4.5A4 4 0 0 0 8 19Z"
        }],
        ["path", {
            d: "M12 19v3"
        }]
    ]],
    NM = ["svg", t, [
        ["path", {
            d: "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"
        }],
        ["path", {
            d: "M12 22v-3"
        }]
    ]],
    IM = ["svg", t, [
        ["path", {
            d: "M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"
        }],
        ["path", {
            d: "M7 16v6"
        }],
        ["path", {
            d: "M13 19v3"
        }],
        ["path", {
            d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"
        }]
    ]],
    UM = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }],
        ["rect", {
            width: "3",
            height: "9",
            x: "7",
            y: "7"
        }],
        ["rect", {
            width: "3",
            height: "5",
            x: "14",
            y: "7"
        }]
    ]],
    GM = ["svg", t, [
        ["polyline", {
            points: "22 17 13.5 8.5 8.5 13.5 2 7"
        }],
        ["polyline", {
            points: "16 17 22 17 22 11"
        }]
    ]],
    XM = ["svg", t, [
        ["polyline", {
            points: "22 7 13.5 15.5 8.5 10.5 2 17"
        }],
        ["polyline", {
            points: "16 7 22 7 22 13"
        }]
    ]],
    $M = ["svg", t, [
        ["path", {
            d: "M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"
        }]
    ]],
    YM = ["svg", t, [
        ["path", {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
        }]
    ]],
    KM = ["svg", t, [
        ["path", {
            d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6"
        }],
        ["path", {
            d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18"
        }],
        ["path", {
            d: "M4 22h16"
        }],
        ["path", {
            d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"
        }],
        ["path", {
            d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"
        }],
        ["path", {
            d: "M18 2H6v7a6 6 0 0 0 12 0V2Z"
        }]
    ]],
    JM = ["svg", t, [
        ["path", {
            d: "M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"
        }],
        ["path", {
            d: "M14 9h4l4 4v4c0 .6-.4 1-1 1h-2"
        }],
        ["circle", {
            cx: "7",
            cy: "18",
            r: "2"
        }],
        ["path", {
            d: "M15 18H9"
        }],
        ["circle", {
            cx: "17",
            cy: "18",
            r: "2"
        }]
    ]],
    QM = ["svg", t, [
        ["path", {
            d: "m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"
        }],
        ["path", {
            d: "M4.82 7.9 8 10"
        }],
        ["path", {
            d: "M15.18 7.9 12 10"
        }],
        ["path", {
            d: "M16.93 10H20a2 2 0 0 1 0 4H2"
        }]
    ]],
    ty = ["svg", t, [
        ["path", {
            d: "M7 21h10"
        }],
        ["rect", {
            width: "20",
            height: "14",
            x: "2",
            y: "3",
            rx: "2"
        }]
    ]],
    ay = ["svg", t, [
        ["rect", {
            width: "20",
            height: "15",
            x: "2",
            y: "7",
            rx: "2",
            ry: "2"
        }],
        ["polyline", {
            points: "17 2 12 7 7 2"
        }]
    ]],
    ey = ["svg", t, [
        ["path", {
            d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"
        }]
    ]],
    hy = ["svg", t, [
        ["path", {
            d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
        }]
    ]],
    ny = ["svg", t, [
        ["polyline", {
            points: "4 7 4 4 20 4 20 7"
        }],
        ["line", {
            x1: "9",
            x2: "15",
            y1: "20",
            y2: "20"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "4",
            y2: "20"
        }]
    ]],
    ry = ["svg", t, [
        ["path", {
            d: "M22 12a10.06 10.06 1 0 0-20 0Z"
        }],
        ["path", {
            d: "M12 12v8a2 2 0 0 0 4 0"
        }],
        ["path", {
            d: "M12 2v1"
        }]
    ]],
    oy = ["svg", t, [
        ["path", {
            d: "M6 4v6a6 6 0 0 0 12 0V4"
        }],
        ["line", {
            x1: "4",
            x2: "20",
            y1: "20",
            y2: "20"
        }]
    ]],
    cy = ["svg", t, [
        ["path", {
            d: "M9 14 4 9l5-5"
        }],
        ["path", {
            d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"
        }]
    ]],
    sy = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "17",
            r: "1"
        }],
        ["path", {
            d: "M3 7v6h6"
        }],
        ["path", {
            d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"
        }]
    ]],
    iy = ["svg", t, [
        ["path", {
            d: "M3 7v6h6"
        }],
        ["path", {
            d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"
        }]
    ]],
    dy = ["svg", t, [
        ["path", {
            d: "M16 12h6"
        }],
        ["path", {
            d: "M8 12H2"
        }],
        ["path", {
            d: "M12 2v2"
        }],
        ["path", {
            d: "M12 8v2"
        }],
        ["path", {
            d: "M12 14v2"
        }],
        ["path", {
            d: "M12 20v2"
        }],
        ["path", {
            d: "m19 15 3-3-3-3"
        }],
        ["path", {
            d: "m5 9-3 3 3 3"
        }]
    ]],
    py = ["svg", t, [
        ["path", {
            d: "M12 22v-6"
        }],
        ["path", {
            d: "M12 8V2"
        }],
        ["path", {
            d: "M4 12H2"
        }],
        ["path", {
            d: "M10 12H8"
        }],
        ["path", {
            d: "M16 12h-2"
        }],
        ["path", {
            d: "M22 12h-2"
        }],
        ["path", {
            d: "m15 19-3 3-3-3"
        }],
        ["path", {
            d: "m15 5-3-3-3 3"
        }]
    ]],
    ly = ["svg", t, [
        ["rect", {
            width: "8",
            height: "6",
            x: "5",
            y: "4",
            rx: "1"
        }],
        ["rect", {
            width: "8",
            height: "6",
            x: "11",
            y: "14",
            rx: "1"
        }]
    ]],
    vy = ["svg", t, [
        ["path", {
            d: "M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2"
        }]
    ]],
    My = ["svg", t, [
        ["path", {
            d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"
        }],
        ["path", {
            d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"
        }],
        ["line", {
            x1: "8",
            x2: "8",
            y1: "2",
            y2: "5"
        }],
        ["line", {
            x1: "2",
            x2: "5",
            y1: "8",
            y2: "8"
        }],
        ["line", {
            x1: "16",
            x2: "16",
            y1: "19",
            y2: "22"
        }],
        ["line", {
            x1: "19",
            x2: "22",
            y1: "16",
            y2: "16"
        }]
    ]],
    yy = ["svg", t, [
        ["rect", {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2"
        }],
        ["path", {
            d: "M7 11V7a5 5 0 0 1 9.9-1"
        }]
    ]],
    gy = ["svg", t, [
        ["path", {
            d: "m19 5 3-3"
        }],
        ["path", {
            d: "m2 22 3-3"
        }],
        ["path", {
            d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"
        }],
        ["path", {
            d: "M7.5 13.5 10 11"
        }],
        ["path", {
            d: "M10.5 16.5 13 14"
        }],
        ["path", {
            d: "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"
        }]
    ]],
    uy = ["svg", t, [
        ["path", {
            d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
        }],
        ["path", {
            d: "M12 12v9"
        }],
        ["path", {
            d: "m16 16-4-4-4 4"
        }]
    ]],
    fy = ["svg", t, [
        ["path", {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
        }],
        ["polyline", {
            points: "17 8 12 3 7 8"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "3",
            y2: "15"
        }]
    ]],
    xy = ["svg", t, [
        ["circle", {
            cx: "10",
            cy: "7",
            r: "1"
        }],
        ["circle", {
            cx: "4",
            cy: "20",
            r: "1"
        }],
        ["path", {
            d: "M4.7 19.3 19 5"
        }],
        ["path", {
            d: "m21 3-3 1 2 2Z"
        }],
        ["path", {
            d: "M9.26 7.68 5 12l2 5"
        }],
        ["path", {
            d: "m10 14 5 2 3.5-3.5"
        }],
        ["path", {
            d: "m18 12 1-1 1 1-1 1Z"
        }]
    ]],
    my = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "8",
            r: "5"
        }],
        ["path", {
            d: "M20 21a8 8 0 1 0-16 0"
        }]
    ]],
    wy = ["svg", t, [
        ["path", {
            d: "M14 19a6 6 0 0 0-12 0"
        }],
        ["circle", {
            cx: "8",
            cy: "9",
            r: "4"
        }],
        ["polyline", {
            points: "16 11 18 13 22 9"
        }]
    ]],
    by = ["svg", t, [
        ["path", {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
        }],
        ["circle", {
            cx: "9",
            cy: "7",
            r: "4"
        }],
        ["polyline", {
            points: "16 11 18 13 22 9"
        }]
    ]],
    Hy = ["svg", t, [
        ["path", {
            d: "M18 20a6 6 0 0 0-12 0"
        }],
        ["circle", {
            cx: "12",
            cy: "10",
            r: "4"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }]
    ]],
    Vy = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["circle", {
            cx: "12",
            cy: "10",
            r: "3"
        }],
        ["path", {
            d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"
        }]
    ]],
    Ly = ["svg", t, [
        ["circle", {
            cx: "18",
            cy: "15",
            r: "3"
        }],
        ["circle", {
            cx: "8",
            cy: "9",
            r: "4"
        }],
        ["path", {
            d: "M10.5 13.5A6 6 0 0 0 2 19"
        }],
        ["path", {
            d: "m21.7 16.4-.9-.3"
        }],
        ["path", {
            d: "m15.2 13.9-.9-.3"
        }],
        ["path", {
            d: "m16.6 18.7.3-.9"
        }],
        ["path", {
            d: "m19.1 12.2.3-.9"
        }],
        ["path", {
            d: "m19.6 18.7-.4-1"
        }],
        ["path", {
            d: "m16.8 12.3-.4-1"
        }],
        ["path", {
            d: "m14.3 16.6 1-.4"
        }],
        ["path", {
            d: "m20.7 13.8 1-.4"
        }]
    ]],
    Sy = ["svg", t, [
        ["circle", {
            cx: "18",
            cy: "15",
            r: "3"
        }],
        ["circle", {
            cx: "9",
            cy: "7",
            r: "4"
        }],
        ["path", {
            d: "M10 15H6a4 4 0 0 0-4 4v2"
        }],
        ["path", {
            d: "m21.7 16.4-.9-.3"
        }],
        ["path", {
            d: "m15.2 13.9-.9-.3"
        }],
        ["path", {
            d: "m16.6 18.7.3-.9"
        }],
        ["path", {
            d: "m19.1 12.2.3-.9"
        }],
        ["path", {
            d: "m19.6 18.7-.4-1"
        }],
        ["path", {
            d: "m16.8 12.3-.4-1"
        }],
        ["path", {
            d: "m14.3 16.6 1-.4"
        }],
        ["path", {
            d: "m20.7 13.8 1-.4"
        }]
    ]],
    Ay = ["svg", t, [
        ["path", {
            d: "M14 19a6 6 0 0 0-12 0"
        }],
        ["circle", {
            cx: "8",
            cy: "9",
            r: "4"
        }],
        ["line", {
            x1: "22",
            x2: "16",
            y1: "11",
            y2: "11"
        }]
    ]],
    Cy = ["svg", t, [
        ["path", {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
        }],
        ["circle", {
            cx: "9",
            cy: "7",
            r: "4"
        }],
        ["line", {
            x1: "22",
            x2: "16",
            y1: "11",
            y2: "11"
        }]
    ]],
    Oy = ["svg", t, [
        ["path", {
            d: "M14 19a6 6 0 0 0-12 0"
        }],
        ["circle", {
            cx: "8",
            cy: "9",
            r: "4"
        }],
        ["line", {
            x1: "19",
            x2: "19",
            y1: "8",
            y2: "14"
        }],
        ["line", {
            x1: "22",
            x2: "16",
            y1: "11",
            y2: "11"
        }]
    ]],
    Ey = ["svg", t, [
        ["path", {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
        }],
        ["circle", {
            cx: "9",
            cy: "7",
            r: "4"
        }],
        ["line", {
            x1: "19",
            x2: "19",
            y1: "8",
            y2: "14"
        }],
        ["line", {
            x1: "22",
            x2: "16",
            y1: "11",
            y2: "11"
        }]
    ]],
    ky = ["svg", t, [
        ["path", {
            d: "M18 21a6 6 0 0 0-12 0"
        }],
        ["circle", {
            cx: "12",
            cy: "11",
            r: "4"
        }],
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }]
    ]],
    Py = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["circle", {
            cx: "12",
            cy: "10",
            r: "3"
        }],
        ["path", {
            d: "M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"
        }]
    ]],
    Zy = ["svg", t, [
        ["path", {
            d: "M14 19a6 6 0 0 0-12 0"
        }],
        ["circle", {
            cx: "8",
            cy: "9",
            r: "4"
        }],
        ["line", {
            x1: "17",
            x2: "22",
            y1: "8",
            y2: "13"
        }],
        ["line", {
            x1: "22",
            x2: "17",
            y1: "8",
            y2: "13"
        }]
    ]],
    Ty = ["svg", t, [
        ["path", {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
        }],
        ["circle", {
            cx: "9",
            cy: "7",
            r: "4"
        }],
        ["line", {
            x1: "17",
            x2: "22",
            y1: "8",
            y2: "13"
        }],
        ["line", {
            x1: "22",
            x2: "17",
            y1: "8",
            y2: "13"
        }]
    ]],
    zy = ["svg", t, [
        ["path", {
            d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
        }],
        ["circle", {
            cx: "12",
            cy: "7",
            r: "4"
        }]
    ]],
    Dy = ["svg", t, [
        ["path", {
            d: "M14 19a6 6 0 0 0-12 0"
        }],
        ["circle", {
            cx: "8",
            cy: "9",
            r: "4"
        }],
        ["path", {
            d: "M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8"
        }]
    ]],
    _y = ["svg", t, [
        ["path", {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
        }],
        ["circle", {
            cx: "9",
            cy: "7",
            r: "4"
        }],
        ["path", {
            d: "M22 21v-2a4 4 0 0 0-3-3.87"
        }],
        ["path", {
            d: "M16 3.13a4 4 0 0 1 0 7.75"
        }]
    ]],
    By = ["svg", t, [
        ["path", {
            d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"
        }],
        ["path", {
            d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"
        }],
        ["path", {
            d: "m2.1 21.8 6.4-6.3"
        }],
        ["path", {
            d: "m19 5-7 7"
        }]
    ]],
    Ry = ["svg", t, [
        ["path", {
            d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"
        }],
        ["path", {
            d: "M7 2v20"
        }],
        ["path", {
            d: "M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"
        }]
    ]],
    Fy = ["svg", t, [
        ["path", {
            d: "M12 2v20"
        }],
        ["path", {
            d: "M2 5h20"
        }],
        ["path", {
            d: "M3 3v2"
        }],
        ["path", {
            d: "M7 3v2"
        }],
        ["path", {
            d: "M17 3v2"
        }],
        ["path", {
            d: "M21 3v2"
        }],
        ["path", {
            d: "m19 5-7 7-7-7"
        }]
    ]],
    jy = ["svg", t, [
        ["path", {
            d: "M8 21s-4-3-4-9 4-9 4-9"
        }],
        ["path", {
            d: "M16 3s4 3 4 9-4 9-4 9"
        }],
        ["line", {
            x1: "15",
            x2: "9",
            y1: "9",
            y2: "15"
        }],
        ["line", {
            x1: "9",
            x2: "15",
            y1: "9",
            y2: "15"
        }]
    ]],
    qy = ["svg", t, [
        ["path", {
            d: "M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"
        }],
        ["path", {
            d: "M16 8c4 0 6-2 6-6-4 0-6 2-6 6"
        }],
        ["path", {
            d: "M17.41 3.6a10 10 0 1 0 3 3"
        }]
    ]],
    Wy = ["svg", t, [
        ["path", {
            d: "M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z"
        }],
        ["path", {
            d: "M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z"
        }],
        ["path", {
            d: "M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z"
        }]
    ]],
    Ny = ["svg", t, [
        ["path", {
            d: "m2 8 2 2-2 2 2 2-2 2"
        }],
        ["path", {
            d: "m22 8-2 2 2 2-2 2 2 2"
        }],
        ["path", {
            d: "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2"
        }],
        ["path", {
            d: "M16 10.34V6c0-.55-.45-1-1-1h-4.34"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }]
    ]],
    Iy = ["svg", t, [
        ["path", {
            d: "m2 8 2 2-2 2 2 2-2 2"
        }],
        ["path", {
            d: "m22 8-2 2 2 2-2 2 2 2"
        }],
        ["rect", {
            width: "8",
            height: "14",
            x: "8",
            y: "5",
            rx: "1"
        }]
    ]],
    Uy = ["svg", t, [
        ["path", {
            d: "M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8"
        }],
        ["path", {
            d: "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }]
    ]],
    Gy = ["svg", t, [
        ["path", {
            d: "m22 8-6 4 6 4V8Z"
        }],
        ["rect", {
            width: "14",
            height: "12",
            x: "2",
            y: "6",
            rx: "2",
            ry: "2"
        }]
    ]],
    Xy = ["svg", t, [
        ["rect", {
            width: "20",
            height: "16",
            x: "2",
            y: "4",
            rx: "2"
        }],
        ["path", {
            d: "M2 8h20"
        }],
        ["circle", {
            cx: "8",
            cy: "14",
            r: "2"
        }],
        ["path", {
            d: "M8 12h8"
        }],
        ["circle", {
            cx: "16",
            cy: "14",
            r: "2"
        }]
    ]],
    $y = ["svg", t, [
        ["path", {
            d: "M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z"
        }],
        ["path", {
            d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
        }],
        ["path", {
            d: "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"
        }],
        ["path", {
            d: "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"
        }]
    ]],
    Yy = ["svg", t, [
        ["circle", {
            cx: "6",
            cy: "12",
            r: "4"
        }],
        ["circle", {
            cx: "18",
            cy: "12",
            r: "4"
        }],
        ["line", {
            x1: "6",
            x2: "18",
            y1: "16",
            y2: "16"
        }]
    ]],
    Ky = ["svg", t, [
        ["polygon", {
            points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
        }],
        ["path", {
            d: "M15.54 8.46a5 5 0 0 1 0 7.07"
        }]
    ]],
    Jy = ["svg", t, [
        ["polygon", {
            points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
        }],
        ["path", {
            d: "M15.54 8.46a5 5 0 0 1 0 7.07"
        }],
        ["path", {
            d: "M19.07 4.93a10 10 0 0 1 0 14.14"
        }]
    ]],
    Qy = ["svg", t, [
        ["polygon", {
            points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
        }],
        ["line", {
            x1: "22",
            x2: "16",
            y1: "9",
            y2: "15"
        }],
        ["line", {
            x1: "16",
            x2: "22",
            y1: "9",
            y2: "15"
        }]
    ]],
    t9 = ["svg", t, [
        ["polygon", {
            points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
        }]
    ]],
    a9 = ["svg", t, [
        ["path", {
            d: "m9 12 2 2 4-4"
        }],
        ["path", {
            d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"
        }],
        ["path", {
            d: "M22 19H2"
        }]
    ]],
    e9 = ["svg", t, [
        ["path", {
            d: "M17 14h.01"
        }],
        ["path", {
            d: "M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"
        }]
    ]],
    h9 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"
        }],
        ["path", {
            d: "M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"
        }]
    ]],
    n9 = ["svg", t, [
        ["path", {
            d: "M21 12V7H5a2 2 0 0 1 0-4h14v4"
        }],
        ["path", {
            d: "M3 5v14a2 2 0 0 0 2 2h16v-5"
        }],
        ["path", {
            d: "M18 12a2 2 0 0 0 0 4h4v-4Z"
        }]
    ]],
    r9 = ["svg", t, [
        ["circle", {
            cx: "8",
            cy: "9",
            r: "2"
        }],
        ["path", {
            d: "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"
        }],
        ["path", {
            d: "M8 21h8"
        }],
        ["path", {
            d: "M12 17v4"
        }]
    ]],
    o9 = ["svg", t, [
        ["path", {
            d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"
        }],
        ["path", {
            d: "m14 7 3 3"
        }],
        ["path", {
            d: "M5 6v4"
        }],
        ["path", {
            d: "M19 14v4"
        }],
        ["path", {
            d: "M10 2v2"
        }],
        ["path", {
            d: "M7 8H3"
        }],
        ["path", {
            d: "M21 16h-4"
        }],
        ["path", {
            d: "M11 3H9"
        }]
    ]],
    c9 = ["svg", t, [
        ["path", {
            d: "M15 4V2"
        }],
        ["path", {
            d: "M15 16v-2"
        }],
        ["path", {
            d: "M8 9h2"
        }],
        ["path", {
            d: "M20 9h2"
        }],
        ["path", {
            d: "M17.8 11.8 19 13"
        }],
        ["path", {
            d: "M15 9h0"
        }],
        ["path", {
            d: "M17.8 6.2 19 5"
        }],
        ["path", {
            d: "m3 21 9-9"
        }],
        ["path", {
            d: "M12.2 6.2 11 5"
        }]
    ]],
    s9 = ["svg", t, [
        ["path", {
            d: "M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"
        }],
        ["path", {
            d: "M6 18h12"
        }],
        ["path", {
            d: "M6 14h12"
        }],
        ["rect", {
            width: "12",
            height: "12",
            x: "6",
            y: "10"
        }]
    ]],
    i9 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "6"
        }],
        ["polyline", {
            points: "12 10 12 12 13 13"
        }],
        ["path", {
            d: "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"
        }],
        ["path", {
            d: "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"
        }]
    ]],
    d9 = ["svg", t, [
        ["path", {
            d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
        }],
        ["path", {
            d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
        }],
        ["path", {
            d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
        }]
    ]],
    p9 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "10",
            r: "8"
        }],
        ["circle", {
            cx: "12",
            cy: "10",
            r: "3"
        }],
        ["path", {
            d: "M7 22h10"
        }],
        ["path", {
            d: "M12 22v-4"
        }]
    ]],
    l9 = ["svg", t, [
        ["path", {
            d: "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"
        }],
        ["path", {
            d: "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"
        }],
        ["path", {
            d: "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"
        }]
    ]],
    v9 = ["svg", t, [
        ["path", {
            d: "m2 22 10-10"
        }],
        ["path", {
            d: "m16 8-1.17 1.17"
        }],
        ["path", {
            d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
        }],
        ["path", {
            d: "m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97"
        }],
        ["path", {
            d: "M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62"
        }],
        ["path", {
            d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"
        }],
        ["path", {
            d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
        }],
        ["path", {
            d: "m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98"
        }],
        ["path", {
            d: "M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }]
    ]],
    M9 = ["svg", t, [
        ["path", {
            d: "M2 22 16 8"
        }],
        ["path", {
            d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
        }],
        ["path", {
            d: "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
        }],
        ["path", {
            d: "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
        }],
        ["path", {
            d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"
        }],
        ["path", {
            d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
        }],
        ["path", {
            d: "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
        }],
        ["path", {
            d: "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
        }]
    ]],
    y9 = ["svg", t, [
        ["circle", {
            cx: "7",
            cy: "12",
            r: "3"
        }],
        ["path", {
            d: "M10 9v6"
        }],
        ["circle", {
            cx: "17",
            cy: "12",
            r: "3"
        }],
        ["path", {
            d: "M14 7v8"
        }],
        ["path", {
            d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"
        }]
    ]],
    g9 = ["svg", t, [
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }],
        ["path", {
            d: "M8.5 16.5a5 5 0 0 1 7 0"
        }],
        ["path", {
            d: "M2 8.82a15 15 0 0 1 4.17-2.65"
        }],
        ["path", {
            d: "M10.66 5c4.01-.36 8.14.9 11.34 3.76"
        }],
        ["path", {
            d: "M16.85 11.25a10 10 0 0 1 2.22 1.68"
        }],
        ["path", {
            d: "M5 13a10 10 0 0 1 5.24-2.76"
        }],
        ["line", {
            x1: "12",
            x2: "12.01",
            y1: "20",
            y2: "20"
        }]
    ]],
    u9 = ["svg", t, [
        ["path", {
            d: "M5 13a10 10 0 0 1 14 0"
        }],
        ["path", {
            d: "M8.5 16.5a5 5 0 0 1 7 0"
        }],
        ["path", {
            d: "M2 8.82a15 15 0 0 1 20 0"
        }],
        ["line", {
            x1: "12",
            x2: "12.01",
            y1: "20",
            y2: "20"
        }]
    ]],
    f9 = ["svg", t, [
        ["path", {
            d: "M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"
        }],
        ["path", {
            d: "M9.6 4.6A2 2 0 1 1 11 8H2"
        }],
        ["path", {
            d: "M12.6 19.4A2 2 0 1 0 14 16H2"
        }]
    ]],
    x9 = ["svg", t, [
        ["path", {
            d: "M8 22h8"
        }],
        ["path", {
            d: "M7 10h3m7 0h-1.343"
        }],
        ["path", {
            d: "M12 15v7"
        }],
        ["path", {
            d: "M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }]
    ]],
    m9 = ["svg", t, [
        ["path", {
            d: "M8 22h8"
        }],
        ["path", {
            d: "M7 10h10"
        }],
        ["path", {
            d: "M12 15v7"
        }],
        ["path", {
            d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"
        }]
    ]],
    w9 = ["svg", t, [
        ["rect", {
            width: "8",
            height: "8",
            x: "3",
            y: "3",
            rx: "2"
        }],
        ["path", {
            d: "M7 11v4a2 2 0 0 0 2 2h4"
        }],
        ["rect", {
            width: "8",
            height: "8",
            x: "13",
            y: "13",
            rx: "2"
        }]
    ]],
    b9 = ["svg", t, [
        ["line", {
            x1: "3",
            x2: "21",
            y1: "6",
            y2: "6"
        }],
        ["path", {
            d: "M3 12h15a3 3 0 1 1 0 6h-4"
        }],
        ["polyline", {
            points: "16 16 14 18 16 20"
        }],
        ["line", {
            x1: "3",
            x2: "10",
            y1: "18",
            y2: "18"
        }]
    ]],
    H9 = ["svg", t, [
        ["path", {
            d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
        }]
    ]],
    V9 = ["svg", t, [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }],
        ["path", {
            d: "m15 9-6 6"
        }],
        ["path", {
            d: "m9 9 6 6"
        }]
    ]],
    L9 = ["svg", t, [
        ["polygon", {
            points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
        }],
        ["path", {
            d: "m15 9-6 6"
        }],
        ["path", {
            d: "m9 9 6 6"
        }]
    ]],
    S9 = ["svg", t, [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2"
        }],
        ["path", {
            d: "m15 9-6 6"
        }],
        ["path", {
            d: "m9 9 6 6"
        }]
    ]],
    A9 = ["svg", t, [
        ["path", {
            d: "M18 6 6 18"
        }],
        ["path", {
            d: "m6 6 12 12"
        }]
    ]],
    C9 = ["svg", t, [
        ["path", {
            d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
        }],
        ["path", {
            d: "m10 15 5-3-5-3z"
        }]
    ]],
    O9 = ["svg", t, [
        ["polyline", {
            points: "12.41 6.75 13 2 10.57 4.92"
        }],
        ["polyline", {
            points: "18.57 12.91 21 10 15.66 10"
        }],
        ["polyline", {
            points: "8 8 3 14 12 14 11 22 16 16"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "2",
            y2: "22"
        }]
    ]],
    E9 = ["svg", t, [
        ["polygon", {
            points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
        }]
    ]],
    k9 = ["svg", t, [
        ["circle", {
            cx: "11",
            cy: "11",
            r: "8"
        }],
        ["line", {
            x1: "21",
            x2: "16.65",
            y1: "21",
            y2: "16.65"
        }],
        ["line", {
            x1: "11",
            x2: "11",
            y1: "8",
            y2: "14"
        }],
        ["line", {
            x1: "8",
            x2: "14",
            y1: "11",
            y2: "11"
        }]
    ]],
    P9 = ["svg", t, [
        ["circle", {
            cx: "11",
            cy: "11",
            r: "8"
        }],
        ["line", {
            x1: "21",
            x2: "16.65",
            y1: "21",
            y2: "16.65"
        }],
        ["line", {
            x1: "8",
            x2: "14",
            y1: "11",
            y2: "11"
        }]
    ]],
    Z9 = Object.freeze(Object.defineProperty({
        __proto__: null,
        Accessibility: ft,
        Activity: mt,
        ActivitySquare: xt,
        AirVent: wt,
        Airplay: bt,
        AlarmCheck: Ht,
        AlarmClock: Lt,
        AlarmClockOff: Vt,
        AlarmMinus: St,
        AlarmPlus: At,
        Album: Ct,
        AlertCircle: Ot,
        AlertOctagon: Et,
        AlertTriangle: kt,
        AlignCenter: Tt,
        AlignCenterHorizontal: Pt,
        AlignCenterVertical: Zt,
        AlignEndHorizontal: zt,
        AlignEndVertical: Dt,
        AlignHorizontalDistributeCenter: _t,
        AlignHorizontalDistributeEnd: Bt,
        AlignHorizontalDistributeStart: Rt,
        AlignHorizontalJustifyCenter: Ft,
        AlignHorizontalJustifyEnd: jt,
        AlignHorizontalJustifyStart: qt,
        AlignHorizontalSpaceAround: Wt,
        AlignHorizontalSpaceBetween: Nt,
        AlignJustify: It,
        AlignLeft: Ut,
        AlignRight: Gt,
        AlignStartHorizontal: Xt,
        AlignStartVertical: $t,
        AlignVerticalDistributeCenter: Yt,
        AlignVerticalDistributeEnd: Kt,
        AlignVerticalDistributeStart: Jt,
        AlignVerticalJustifyCenter: Qt,
        AlignVerticalJustifyEnd: t0,
        AlignVerticalJustifyStart: a0,
        AlignVerticalSpaceAround: e0,
        AlignVerticalSpaceBetween: h0,
        Ampersand: n0,
        Ampersands: r0,
        Anchor: o0,
        Angry: c0,
        Annoyed: s0,
        Antenna: i0,
        Aperture: d0,
        AppWindow: p0,
        Apple: l0,
        Archive: y0,
        ArchiveRestore: v0,
        ArchiveX: M0,
        AreaChart: g0,
        Armchair: u0,
        ArrowBigDown: x0,
        ArrowBigDownDash: f0,
        ArrowBigLeft: w0,
        ArrowBigLeftDash: m0,
        ArrowBigRight: H0,
        ArrowBigRightDash: b0,
        ArrowBigUp: L0,
        ArrowBigUpDash: V0,
        ArrowDown: N0,
        ArrowDown01: S0,
        ArrowDown10: A0,
        ArrowDownAZ: C0,
        ArrowDownCircle: O0,
        ArrowDownFromLine: E0,
        ArrowDownLeft: Z0,
        ArrowDownLeftFromCircle: k0,
        ArrowDownLeftSquare: P0,
        ArrowDownNarrowWide: T0,
        ArrowDownRight: _0,
        ArrowDownRightFromCircle: z0,
        ArrowDownRightSquare: D0,
        ArrowDownSquare: B0,
        ArrowDownToDot: R0,
        ArrowDownToLine: F0,
        ArrowDownUp: j0,
        ArrowDownWideNarrow: q0,
        ArrowDownZA: W0,
        ArrowLeft: Y0,
        ArrowLeftCircle: I0,
        ArrowLeftFromLine: U0,
        ArrowLeftRight: G0,
        ArrowLeftSquare: X0,
        ArrowLeftToLine: $0,
        ArrowRight: ea,
        ArrowRightCircle: K0,
        ArrowRightFromLine: J0,
        ArrowRightLeft: Q0,
        ArrowRightSquare: ta,
        ArrowRightToLine: aa,
        ArrowUp: wa,
        ArrowUp01: ha,
        ArrowUp10: na,
        ArrowUpAZ: ra,
        ArrowUpCircle: oa,
        ArrowUpDown: ca,
        ArrowUpFromDot: sa,
        ArrowUpFromLine: ia,
        ArrowUpLeft: la,
        ArrowUpLeftFromCircle: da,
        ArrowUpLeftSquare: pa,
        ArrowUpNarrowWide: va,
        ArrowUpRight: ga,
        ArrowUpRightFromCircle: Ma,
        ArrowUpRightSquare: ya,
        ArrowUpSquare: ua,
        ArrowUpToLine: fa,
        ArrowUpWideNarrow: xa,
        ArrowUpZA: ma,
        ArrowsUpFromLine: ba,
        Asterisk: Ha,
        AtSign: Va,
        Atom: La,
        Award: Sa,
        Axe: Aa,
        Axis3d: Ca,
        Baby: Oa,
        Backpack: Ea,
        Badge: Ga,
        BadgeAlert: ka,
        BadgeCent: Pa,
        BadgeCheck: Za,
        BadgeDollarSign: Ta,
        BadgeEuro: za,
        BadgeHelp: Da,
        BadgeIndianRupee: _a,
        BadgeInfo: Ba,
        BadgeJapaneseYen: Ra,
        BadgeMinus: Fa,
        BadgePercent: ja,
        BadgePlus: qa,
        BadgePoundSterling: Wa,
        BadgeRussianRuble: Na,
        BadgeSwissFranc: Ia,
        BadgeX: Ua,
        BaggageClaim: Xa,
        Ban: $a,
        Banana: Ya,
        Banknote: Ka,
        BarChart: ne,
        BarChart2: Ja,
        BarChart3: Qa,
        BarChart4: te,
        BarChartBig: ae,
        BarChartHorizontal: he,
        BarChartHorizontalBig: ee,
        Baseline: re,
        Bath: oe,
        Battery: le,
        BatteryCharging: ce,
        BatteryFull: se,
        BatteryLow: ie,
        BatteryMedium: de,
        BatteryWarning: pe,
        Beaker: ve,
        Bean: ye,
        BeanOff: Me,
        Bed: fe,
        BedDouble: ge,
        BedSingle: ue,
        Beef: xe,
        Beer: me,
        Bell: Se,
        BellDot: we,
        BellMinus: be,
        BellOff: He,
        BellPlus: Ve,
        BellRing: Le,
        Bike: Ae,
        Binary: Ce,
        Biohazard: Oe,
        Bird: Ee,
        Bitcoin: ke,
        Blinds: Pe,
        Blocks: Ze,
        Bluetooth: _e,
        BluetoothConnected: Te,
        BluetoothOff: ze,
        BluetoothSearching: De,
        Bold: Be,
        Bomb: Re,
        Bone: Fe,
        Book: th,
        BookCopy: je,
        BookDown: qe,
        BookKey: We,
        BookLock: Ne,
        BookMarked: Ie,
        BookMinus: Ue,
        BookOpen: Xe,
        BookOpenCheck: Ge,
        BookPlus: $e,
        BookTemplate: Ye,
        BookUp: Je,
        BookUp2: Ke,
        BookX: Qe,
        Bookmark: hh,
        BookmarkMinus: ah,
        BookmarkPlus: eh,
        BoomBox: nh,
        Bot: rh,
        Box: ch,
        BoxSelect: oh,
        Boxes: sh,
        Braces: ih,
        Brackets: dh,
        Brain: vh,
        BrainCircuit: ph,
        BrainCog: lh,
        Briefcase: Mh,
        BringToFront: yh,
        Brush: gh,
        Bug: xh,
        BugOff: uh,
        BugPlay: fh,
        Building: wh,
        Building2: mh,
        Bus: Hh,
        BusFront: bh,
        Cable: Lh,
        CableCar: Vh,
        Cake: Ah,
        CakeSlice: Sh,
        Calculator: Ch,
        Calendar: jh,
        CalendarCheck: Eh,
        CalendarCheck2: Oh,
        CalendarClock: kh,
        CalendarDays: Ph,
        CalendarHeart: Zh,
        CalendarMinus: Th,
        CalendarOff: zh,
        CalendarPlus: Dh,
        CalendarRange: _h,
        CalendarSearch: Bh,
        CalendarX: Fh,
        CalendarX2: Rh,
        Camera: Wh,
        CameraOff: qh,
        CandlestickChart: Nh,
        Candy: Gh,
        CandyCane: Ih,
        CandyOff: Uh,
        Car: Yh,
        CarFront: Xh,
        CarTaxiFront: $h,
        Carrot: Kh,
        CaseLower: Jh,
        CaseSensitive: Qh,
        CaseUpper: tn,
        CassetteTape: an,
        Cast: en,
        Castle: hn,
        Cat: nn,
        Check: dn,
        CheckCheck: rn,
        CheckCircle: cn,
        CheckCircle2: on,
        CheckSquare: sn,
        ChefHat: pn,
        Cherry: ln,
        ChevronDown: yn,
        ChevronDownCircle: vn,
        ChevronDownSquare: Mn,
        ChevronFirst: gn,
        ChevronLast: un,
        ChevronLeft: mn,
        ChevronLeftCircle: fn,
        ChevronLeftSquare: xn,
        ChevronRight: Hn,
        ChevronRightCircle: wn,
        ChevronRightSquare: bn,
        ChevronUp: Sn,
        ChevronUpCircle: Vn,
        ChevronUpSquare: Ln,
        ChevronsDown: Cn,
        ChevronsDownUp: An,
        ChevronsLeft: En,
        ChevronsLeftRight: On,
        ChevronsRight: Pn,
        ChevronsRightLeft: kn,
        ChevronsUp: Tn,
        ChevronsUpDown: Zn,
        Chrome: zn,
        Church: Dn,
        Cigarette: Bn,
        CigaretteOff: _n,
        Circle: Xn,
        CircleDashed: Rn,
        CircleDollarSign: Fn,
        CircleDot: qn,
        CircleDotDashed: jn,
        CircleEllipsis: Wn,
        CircleEqual: Nn,
        CircleOff: In,
        CircleSlash: Gn,
        CircleSlash2: Un,
        CircuitBoard: $n,
        Citrus: Yn,
        Clapperboard: Kn,
        Clipboard: or,
        ClipboardCheck: Jn,
        ClipboardCopy: Qn,
        ClipboardEdit: tr,
        ClipboardList: ar,
        ClipboardPaste: er,
        ClipboardSignature: hr,
        ClipboardType: nr,
        ClipboardX: rr,
        Clock: xr,
        Clock1: cr,
        Clock10: sr,
        Clock11: ir,
        Clock12: dr,
        Clock2: pr,
        Clock3: lr,
        Clock4: vr,
        Clock5: Mr,
        Clock6: yr,
        Clock7: gr,
        Clock8: ur,
        Clock9: fr,
        Cloud: Zr,
        CloudCog: mr,
        CloudDrizzle: wr,
        CloudFog: br,
        CloudHail: Hr,
        CloudLightning: Vr,
        CloudMoon: Sr,
        CloudMoonRain: Lr,
        CloudOff: Ar,
        CloudRain: Or,
        CloudRainWind: Cr,
        CloudSnow: Er,
        CloudSun: Pr,
        CloudSunRain: kr,
        Cloudy: Tr,
        Clover: zr,
        Club: Dr,
        Code: Br,
        Code2: _r,
        Codepen: Rr,
        Codesandbox: Fr,
        Coffee: jr,
        Cog: qr,
        Coins: Wr,
        Columns: Nr,
        Combine: Ir,
        Command: Ur,
        Compass: Gr,
        Component: Xr,
        Computer: $r,
        ConciergeBell: Yr,
        Construction: Kr,
        Contact: Qr,
        Contact2: Jr,
        Container: to,
        Contrast: ao,
        Cookie: eo,
        Copy: so,
        CopyCheck: ho,
        CopyMinus: no,
        CopyPlus: ro,
        CopySlash: oo,
        CopyX: co,
        Copyleft: io,
        Copyright: po,
        CornerDownLeft: lo,
        CornerDownRight: vo,
        CornerLeftDown: Mo,
        CornerLeftUp: yo,
        CornerRightDown: go,
        CornerRightUp: uo,
        CornerUpLeft: fo,
        CornerUpRight: xo,
        Cpu: mo,
        CreativeCommons: wo,
        CreditCard: bo,
        Croissant: Ho,
        Crop: Vo,
        Cross: Lo,
        Crosshair: So,
        Crown: Ao,
        CupSoda: Co,
        Currency: Oo,
        Database: Po,
        DatabaseBackup: Eo,
        DatabaseZap: ko,
        Delete: Zo,
        Dessert: To,
        Diamond: zo,
        Dice1: Do,
        Dice2: _o,
        Dice3: Bo,
        Dice4: Ro,
        Dice5: Fo,
        Dice6: jo,
        Dices: qo,
        Diff: Wo,
        Disc: Uo,
        Disc2: No,
        Disc3: Io,
        Divide: $o,
        DivideCircle: Go,
        DivideSquare: Xo,
        Dna: Ko,
        DnaOff: Yo,
        Dog: Jo,
        DollarSign: Qo,
        Donut: tc,
        DoorClosed: ac,
        DoorOpen: ec,
        Dot: hc,
        Download: rc,
        DownloadCloud: nc,
        Dribbble: oc,
        Droplet: cc,
        Droplets: sc,
        Drumstick: ic,
        Dumbbell: dc,
        Ear: lc,
        EarOff: pc,
        Egg: yc,
        EggFried: vc,
        EggOff: Mc,
        Equal: uc,
        EqualNot: gc,
        Eraser: fc,
        Euro: xc,
        Expand: mc,
        ExternalLink: wc,
        Eye: Hc,
        EyeOff: bc,
        Facebook: Vc,
        Factory: Lc,
        Fan: Sc,
        FastForward: Ac,
        Feather: Cc,
        FerrisWheel: Oc,
        Figma: Ec,
        File: Ps,
        FileArchive: kc,
        FileAudio: Zc,
        FileAudio2: Pc,
        FileAxis3d: Tc,
        FileBadge: Dc,
        FileBadge2: zc,
        FileBarChart: Bc,
        FileBarChart2: _c,
        FileBox: Rc,
        FileCheck: jc,
        FileCheck2: Fc,
        FileClock: qc,
        FileCode: Nc,
        FileCode2: Wc,
        FileCog: Ic,
        FileDiff: Uc,
        FileDigit: Gc,
        FileDown: Xc,
        FileEdit: $c,
        FileHeart: Yc,
        FileImage: Kc,
        FileInput: Jc,
        FileJson: ts,
        FileJson2: Qc,
        FileKey: es,
        FileKey2: as,
        FileLineChart: hs,
        FileLock: rs,
        FileLock2: ns,
        FileMinus: cs,
        FileMinus2: os,
        FileOutput: ss,
        FilePieChart: is,
        FilePlus: ps,
        FilePlus2: ds,
        FileQuestion: ls,
        FileScan: vs,
        FileSearch: ys,
        FileSearch2: Ms,
        FileSignature: gs,
        FileSpreadsheet: us,
        FileStack: fs,
        FileSymlink: xs,
        FileTerminal: ms,
        FileText: ws,
        FileType: Hs,
        FileType2: bs,
        FileUp: Vs,
        FileVideo: Ss,
        FileVideo2: Ls,
        FileVolume: Cs,
        FileVolume2: As,
        FileWarning: Os,
        FileX: ks,
        FileX2: Es,
        Files: Zs,
        Film: Ts,
        Filter: Ds,
        FilterX: zs,
        Fingerprint: _s,
        Fish: Fs,
        FishOff: Bs,
        FishSymbol: Rs,
        Flag: Ns,
        FlagOff: js,
        FlagTriangleLeft: qs,
        FlagTriangleRight: Ws,
        Flame: Is,
        Flashlight: Gs,
        FlashlightOff: Us,
        FlaskConical: $s,
        FlaskConicalOff: Xs,
        FlaskRound: Ys,
        FlipHorizontal: Js,
        FlipHorizontal2: Ks,
        FlipVertical: ti,
        FlipVertical2: Qs,
        Flower: ei,
        Flower2: ai,
        Focus: hi,
        FoldHorizontal: ni,
        FoldVertical: ri,
        Folder: Ti,
        FolderArchive: oi,
        FolderCheck: ci,
        FolderClock: si,
        FolderClosed: ii,
        FolderCog: di,
        FolderDot: pi,
        FolderDown: li,
        FolderEdit: vi,
        FolderGit: yi,
        FolderGit2: Mi,
        FolderHeart: gi,
        FolderInput: ui,
        FolderKanban: fi,
        FolderKey: xi,
        FolderLock: mi,
        FolderMinus: wi,
        FolderOpen: Hi,
        FolderOpenDot: bi,
        FolderOutput: Vi,
        FolderPlus: Li,
        FolderRoot: Si,
        FolderSearch: Ci,
        FolderSearch2: Ai,
        FolderSymlink: Oi,
        FolderSync: Ei,
        FolderTree: ki,
        FolderUp: Pi,
        FolderX: Zi,
        Folders: zi,
        Footprints: Di,
        Forklift: _i,
        FormInput: Bi,
        Forward: Ri,
        Frame: Fi,
        Framer: ji,
        Frown: qi,
        Fuel: Wi,
        FunctionSquare: Ni,
        GalleryHorizontal: Ui,
        GalleryHorizontalEnd: Ii,
        GalleryThumbnails: Gi,
        GalleryVertical: $i,
        GalleryVerticalEnd: Xi,
        Gamepad: Ki,
        Gamepad2: Yi,
        GanttChart: Qi,
        GanttChartSquare: Ji,
        Gauge: ad,
        GaugeCircle: td,
        Gavel: ed,
        Gem: hd,
        Ghost: nd,
        Gift: rd,
        GitBranch: cd,
        GitBranchPlus: od,
        GitCommit: sd,
        GitCompare: id,
        GitFork: dd,
        GitMerge: pd,
        GitPullRequest: Md,
        GitPullRequestClosed: ld,
        GitPullRequestDraft: vd,
        Github: yd,
        Gitlab: gd,
        GlassWater: ud,
        Glasses: fd,
        Globe: md,
        Globe2: xd,
        Goal: wd,
        Grab: bd,
        GraduationCap: Hd,
        Grape: Vd,
        Grid2x2: Ld,
        Grid3x3: Sd,
        Grip: Od,
        GripHorizontal: Ad,
        GripVertical: Cd,
        Group: Ed,
        Hammer: kd,
        Hand: Zd,
        HandMetal: Pd,
        HardDrive: Dd,
        HardDriveDownload: Td,
        HardDriveUpload: zd,
        HardHat: _d,
        Hash: Bd,
        Haze: Rd,
        HdmiPort: Fd,
        Heading: Gd,
        Heading1: jd,
        Heading2: qd,
        Heading3: Wd,
        Heading4: Nd,
        Heading5: Id,
        Heading6: Ud,
        Headphones: Xd,
        Heart: Qd,
        HeartCrack: $d,
        HeartHandshake: Yd,
        HeartOff: Kd,
        HeartPulse: Jd,
        HelpCircle: tp,
        HelpingHand: ap,
        Hexagon: ep,
        Highlighter: hp,
        History: np,
        Home: rp,
        Hop: cp,
        HopOff: op,
        Hotel: sp,
        Hourglass: ip,
        IceCream: pp,
        IceCream2: dp,
        Image: yp,
        ImageMinus: lp,
        ImageOff: vp,
        ImagePlus: Mp,
        Import: gp,
        Inbox: up,
        Indent: fp,
        IndianRupee: xp,
        Infinity: mp,
        Info: wp,
        Instagram: bp,
        Italic: Hp,
        IterationCcw: Vp,
        IterationCw: Lp,
        JapaneseYen: Sp,
        Joystick: Ap,
        Kanban: Ep,
        KanbanSquare: Op,
        KanbanSquareDashed: Cp,
        Key: Zp,
        KeyRound: kp,
        KeySquare: Pp,
        Keyboard: Tp,
        Lamp: Fp,
        LampCeiling: zp,
        LampDesk: Dp,
        LampFloor: _p,
        LampWallDown: Bp,
        LampWallUp: Rp,
        Landmark: jp,
        Languages: qp,
        Laptop: Np,
        Laptop2: Wp,
        Lasso: Up,
        LassoSelect: Ip,
        Laugh: Gp,
        Layers: Xp,
        Layout: al,
        LayoutDashboard: $p,
        LayoutGrid: Yp,
        LayoutList: Kp,
        LayoutPanelLeft: Jp,
        LayoutPanelTop: Qp,
        LayoutTemplate: tl,
        Leaf: el,
        LeafyGreen: hl,
        Library: nl,
        LifeBuoy: rl,
        Ligature: ol,
        Lightbulb: sl,
        LightbulbOff: cl,
        LineChart: il,
        Link: ll,
        Link2: pl,
        Link2Off: dl,
        Linkedin: vl,
        List: Al,
        ListChecks: Ml,
        ListEnd: yl,
        ListFilter: gl,
        ListMinus: ul,
        ListMusic: fl,
        ListOrdered: xl,
        ListPlus: ml,
        ListRestart: wl,
        ListStart: bl,
        ListTodo: Hl,
        ListTree: Vl,
        ListVideo: Ll,
        ListX: Sl,
        Loader: Ol,
        Loader2: Cl,
        Locate: Pl,
        LocateFixed: El,
        LocateOff: kl,
        Lock: Zl,
        LogIn: Tl,
        LogOut: zl,
        Lollipop: Dl,
        Luggage: _l,
        MSquare: Bl,
        Magnet: Rl,
        Mail: Xl,
        MailCheck: Fl,
        MailMinus: jl,
        MailOpen: ql,
        MailPlus: Wl,
        MailQuestion: Nl,
        MailSearch: Il,
        MailWarning: Ul,
        MailX: Gl,
        Mailbox: $l,
        Mails: Yl,
        Map: Ql,
        MapPin: Jl,
        MapPinOff: Kl,
        Martini: t4,
        Maximize: e4,
        Maximize2: a4,
        Medal: h4,
        Megaphone: r4,
        MegaphoneOff: n4,
        Meh: o4,
        MemoryStick: c4,
        Menu: i4,
        MenuSquare: s4,
        Merge: d4,
        MessageCircle: p4,
        MessageSquare: M4,
        MessageSquareDashed: l4,
        MessageSquarePlus: v4,
        MessagesSquare: y4,
        Mic: f4,
        Mic2: g4,
        MicOff: u4,
        Microscope: x4,
        Microwave: m4,
        Milestone: w4,
        Milk: H4,
        MilkOff: b4,
        Minimize: L4,
        Minimize2: V4,
        Minus: C4,
        MinusCircle: S4,
        MinusSquare: A4,
        Monitor: F4,
        MonitorCheck: O4,
        MonitorDot: E4,
        MonitorDown: k4,
        MonitorOff: P4,
        MonitorPause: Z4,
        MonitorPlay: T4,
        MonitorSmartphone: z4,
        MonitorSpeaker: D4,
        MonitorStop: _4,
        MonitorUp: B4,
        MonitorX: R4,
        Moon: q4,
        MoonStar: j4,
        MoreHorizontal: W4,
        MoreVertical: N4,
        Mountain: U4,
        MountainSnow: I4,
        Mouse: J4,
        MousePointer: K4,
        MousePointer2: G4,
        MousePointerClick: X4,
        MousePointerSquare: Y4,
        MousePointerSquareDashed: $4,
        Move: l5,
        Move3d: Q4,
        MoveDiagonal: a5,
        MoveDiagonal2: t5,
        MoveDown: n5,
        MoveDownLeft: e5,
        MoveDownRight: h5,
        MoveHorizontal: r5,
        MoveLeft: o5,
        MoveRight: c5,
        MoveUp: d5,
        MoveUpLeft: s5,
        MoveUpRight: i5,
        MoveVertical: p5,
        Music: g5,
        Music2: v5,
        Music3: M5,
        Music4: y5,
        Navigation: m5,
        Navigation2: f5,
        Navigation2Off: u5,
        NavigationOff: x5,
        Network: w5,
        Newspaper: b5,
        Nfc: H5,
        Nut: L5,
        NutOff: V5,
        Octagon: S5,
        Option: A5,
        Orbit: C5,
        Outdent: O5,
        Package: _5,
        Package2: E5,
        PackageCheck: k5,
        PackageMinus: P5,
        PackageOpen: Z5,
        PackagePlus: T5,
        PackageSearch: z5,
        PackageX: D5,
        PaintBucket: B5,
        Paintbrush: F5,
        Paintbrush2: R5,
        Palette: j5,
        Palmtree: q5,
        PanelBottom: U5,
        PanelBottomClose: W5,
        PanelBottomInactive: N5,
        PanelBottomOpen: I5,
        PanelLeft: Y5,
        PanelLeftClose: G5,
        PanelLeftInactive: X5,
        PanelLeftOpen: $5,
        PanelRight: t3,
        PanelRightClose: K5,
        PanelRightInactive: J5,
        PanelRightOpen: Q5,
        PanelTop: n3,
        PanelTopClose: a3,
        PanelTopInactive: e3,
        PanelTopOpen: h3,
        Paperclip: r3,
        Parentheses: o3,
        ParkingCircle: s3,
        ParkingCircleOff: c3,
        ParkingMeter: i3,
        ParkingSquare: p3,
        ParkingSquareOff: d3,
        PartyPopper: l3,
        Pause: y3,
        PauseCircle: v3,
        PauseOctagon: M3,
        PawPrint: g3,
        PcCase: u3,
        Pen: w3,
        PenLine: f3,
        PenSquare: x3,
        PenTool: m3,
        Pencil: V3,
        PencilLine: b3,
        PencilRuler: H3,
        Percent: C3,
        PercentCircle: L3,
        PercentDiamond: S3,
        PercentSquare: A3,
        PersonStanding: O3,
        Phone: D3,
        PhoneCall: E3,
        PhoneForwarded: k3,
        PhoneIncoming: P3,
        PhoneMissed: Z3,
        PhoneOff: T3,
        PhoneOutgoing: z3,
        Pi: B3,
        PiSquare: _3,
        PictureInPicture: F3,
        PictureInPicture2: R3,
        PieChart: j3,
        PiggyBank: q3,
        Pilcrow: N3,
        PilcrowSquare: W3,
        Pill: I3,
        Pin: G3,
        PinOff: U3,
        Pipette: X3,
        Pizza: $3,
        Plane: J3,
        PlaneLanding: Y3,
        PlaneTakeoff: K3,
        Play: a6,
        PlayCircle: Q3,
        PlaySquare: t6,
        Plug: r6,
        Plug2: e6,
        PlugZap: n6,
        PlugZap2: h6,
        Plus: s6,
        PlusCircle: o6,
        PlusSquare: c6,
        Pocket: d6,
        PocketKnife: i6,
        Podcast: p6,
        Pointer: l6,
        Popcorn: v6,
        Popsicle: M6,
        PoundSterling: y6,
        Power: u6,
        PowerOff: g6,
        Presentation: f6,
        Printer: x6,
        Projector: m6,
        Puzzle: w6,
        QrCode: b6,
        Quote: H6,
        Rabbit: V6,
        Radar: L6,
        Radiation: S6,
        Radio: O6,
        RadioReceiver: A6,
        RadioTower: C6,
        RailSymbol: E6,
        Rainbow: k6,
        Rat: P6,
        Ratio: Z6,
        Receipt: T6,
        RectangleHorizontal: z6,
        RectangleVertical: D6,
        Recycle: _6,
        Redo: F6,
        Redo2: B6,
        RedoDot: R6,
        RefreshCcw: q6,
        RefreshCcwDot: j6,
        RefreshCw: N6,
        RefreshCwOff: W6,
        Refrigerator: I6,
        Regex: U6,
        RemoveFormatting: G6,
        Repeat: Y6,
        Repeat1: X6,
        Repeat2: $6,
        Replace: J6,
        ReplaceAll: K6,
        Reply: t8,
        ReplyAll: Q6,
        Rewind: a8,
        Rocket: e8,
        RockingChair: h8,
        RollerCoaster: n8,
        Rotate3d: r8,
        RotateCcw: o8,
        RotateCw: c8,
        Router: s8,
        Rows: i8,
        Rss: d8,
        Ruler: p8,
        RussianRuble: l8,
        Sailboat: v8,
        Salad: M8,
        Sandwich: y8,
        Satellite: u8,
        SatelliteDish: g8,
        Save: x8,
        SaveAll: f8,
        Scale: w8,
        Scale3d: m8,
        Scaling: b8,
        Scan: L8,
        ScanFace: H8,
        ScanLine: V8,
        ScatterChart: S8,
        School: C8,
        School2: A8,
        Scissors: P8,
        ScissorsLineDashed: O8,
        ScissorsSquare: k8,
        ScissorsSquareDashedBottom: E8,
        ScreenShare: T8,
        ScreenShareOff: Z8,
        Scroll: D8,
        ScrollText: z8,
        Search: j8,
        SearchCheck: _8,
        SearchCode: B8,
        SearchSlash: R8,
        SearchX: F8,
        Send: N8,
        SendHorizontal: q8,
        SendToBack: W8,
        SeparatorHorizontal: I8,
        SeparatorVertical: U8,
        Server: Y8,
        ServerCog: G8,
        ServerCrash: X8,
        ServerOff: $8,
        Settings: J8,
        Settings2: K8,
        Shapes: Q8,
        Share: av,
        Share2: tv,
        Sheet: ev,
        Shell: hv,
        Shield: Mv,
        ShieldAlert: nv,
        ShieldBan: rv,
        ShieldCheck: ov,
        ShieldEllipsis: cv,
        ShieldHalf: sv,
        ShieldMinus: iv,
        ShieldOff: dv,
        ShieldPlus: pv,
        ShieldQuestion: lv,
        ShieldX: vv,
        Ship: gv,
        ShipWheel: yv,
        Shirt: uv,
        ShoppingBag: fv,
        ShoppingBasket: xv,
        ShoppingCart: mv,
        Shovel: wv,
        ShowerHead: bv,
        Shrink: Hv,
        Shrub: Vv,
        Shuffle: Lv,
        Sigma: Av,
        SigmaSquare: Sv,
        Signal: Pv,
        SignalHigh: Cv,
        SignalLow: Ov,
        SignalMedium: Ev,
        SignalZero: kv,
        Siren: Zv,
        SkipBack: Tv,
        SkipForward: zv,
        Skull: Dv,
        Slack: _v,
        Slice: Bv,
        Sliders: Fv,
        SlidersHorizontal: Rv,
        Smartphone: Wv,
        SmartphoneCharging: jv,
        SmartphoneNfc: qv,
        Smile: Iv,
        SmilePlus: Nv,
        Snail: Uv,
        Snowflake: Gv,
        Sofa: Xv,
        Soup: $v,
        Space: Yv,
        Spade: Kv,
        Sparkle: Jv,
        Sparkles: Qv,
        Speaker: t7,
        SpellCheck: e7,
        SpellCheck2: a7,
        Spline: h7,
        Split: o7,
        SplitSquareHorizontal: n7,
        SplitSquareVertical: r7,
        SprayCan: c7,
        Sprout: s7,
        Square: u7,
        SquareAsterisk: i7,
        SquareCode: d7,
        SquareDashedBottom: l7,
        SquareDashedBottomCode: p7,
        SquareDot: v7,
        SquareEqual: M7,
        SquareSlash: y7,
        SquareStack: g7,
        Squirrel: f7,
        Stamp: x7,
        Star: b7,
        StarHalf: m7,
        StarOff: w7,
        StepBack: H7,
        StepForward: V7,
        Stethoscope: L7,
        Sticker: S7,
        StickyNote: A7,
        StopCircle: C7,
        Store: O7,
        StretchHorizontal: E7,
        StretchVertical: k7,
        Strikethrough: P7,
        Subscript: Z7,
        Subtitles: T7,
        Sun: R7,
        SunDim: z7,
        SunMedium: D7,
        SunMoon: _7,
        SunSnow: B7,
        Sunrise: F7,
        Sunset: j7,
        Superscript: q7,
        SwissFranc: W7,
        SwitchCamera: N7,
        Sword: I7,
        Swords: U7,
        Syringe: G7,
        Table: Y7,
        Table2: X7,
        TableProperties: $7,
        Tablet: J7,
        TabletSmartphone: K7,
        Tablets: Q7,
        Tag: tM,
        Tags: aM,
        Tally1: eM,
        Tally2: hM,
        Tally3: nM,
        Tally4: rM,
        Tally5: oM,
        Target: cM,
        Tent: sM,
        Terminal: dM,
        TerminalSquare: iM,
        TestTube: lM,
        TestTube2: pM,
        TestTubes: vM,
        Text: fM,
        TextCursor: yM,
        TextCursorInput: MM,
        TextQuote: gM,
        TextSelect: uM,
        Thermometer: wM,
        ThermometerSnowflake: xM,
        ThermometerSun: mM,
        ThumbsDown: bM,
        ThumbsUp: HM,
        Ticket: VM,
        Timer: AM,
        TimerOff: LM,
        TimerReset: SM,
        ToggleLeft: CM,
        ToggleRight: OM,
        Tornado: EM,
        Touchpad: PM,
        TouchpadOff: kM,
        TowerControl: ZM,
        ToyBrick: TM,
        Tractor: zM,
        TrafficCone: DM,
        TrainFront: BM,
        TrainFrontTunnel: _M,
        TrainTrack: RM,
        TramFront: FM,
        Trash: qM,
        Trash2: jM,
        TreeDeciduous: WM,
        TreePine: NM,
        Trees: IM,
        Trello: UM,
        TrendingDown: GM,
        TrendingUp: XM,
        Triangle: YM,
        TriangleRight: $M,
        Trophy: KM,
        Truck: JM,
        Turtle: QM,
        Tv: ay,
        Tv2: ty,
        Twitch: ey,
        Twitter: hy,
        Type: ny,
        Umbrella: ry,
        Underline: oy,
        Undo: iy,
        Undo2: cy,
        UndoDot: sy,
        UnfoldHorizontal: dy,
        UnfoldVertical: py,
        Ungroup: ly,
        Unlink: My,
        Unlink2: vy,
        Unlock: yy,
        Unplug: gy,
        Upload: fy,
        UploadCloud: uy,
        Usb: xy,
        User: zy,
        User2: my,
        UserCheck: by,
        UserCheck2: wy,
        UserCircle: Vy,
        UserCircle2: Hy,
        UserCog: Sy,
        UserCog2: Ly,
        UserMinus: Cy,
        UserMinus2: Ay,
        UserPlus: Ey,
        UserPlus2: Oy,
        UserSquare: Py,
        UserSquare2: ky,
        UserX: Ty,
        UserX2: Zy,
        Users: _y,
        Users2: Dy,
        Utensils: Ry,
        UtensilsCrossed: By,
        UtilityPole: Fy,
        Variable: jy,
        Vegan: qy,
        VenetianMask: Wy,
        Vibrate: Iy,
        VibrateOff: Ny,
        Video: Gy,
        VideoOff: Uy,
        Videotape: Xy,
        View: $y,
        Voicemail: Yy,
        Volume: t9,
        Volume1: Ky,
        Volume2: Jy,
        VolumeX: Qy,
        Vote: a9,
        Wallet: n9,
        Wallet2: e9,
        WalletCards: h9,
        Wallpaper: r9,
        Wand: c9,
        Wand2: o9,
        Warehouse: s9,
        Watch: i9,
        Waves: d9,
        Webcam: p9,
        Webhook: l9,
        Wheat: M9,
        WheatOff: v9,
        WholeWord: y9,
        Wifi: u9,
        WifiOff: g9,
        Wind: f9,
        Wine: m9,
        WineOff: x9,
        Workflow: w9,
        WrapText: b9,
        Wrench: H9,
        X: A9,
        XCircle: V9,
        XOctagon: L9,
        XSquare: S9,
        Youtube: C9,
        Zap: E9,
        ZapOff: O9,
        ZoomIn: k9,
        ZoomOut: P9
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    T9 = ({
        icons: c = {},
        nameAttr: n = "data-lucide",
        attrs: i = {}
    } = {}) => {
        if (!Object.values(c).length) throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);
        if (typeof document > "u") throw new Error("`createIcons()` only works in a browser environment.");
        const h = document.querySelectorAll(`[${n}]`);
        if (Array.from(h).forEach(l => R2(l, {
                nameAttr: n,
                icons: c,
                attrs: i
            })), n === "data-lucide") {
            const l = document.querySelectorAll("[icon-name]");
            l.length > 0 && (console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"), Array.from(l).forEach(V => R2(V, {
                nameAttr: "icon-name",
                icons: c,
                attrs: i
            })))
        }
    };
var bg = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function z9(c) {
    return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c
}
var D9 = !!(typeof window < "u" && window.document && window.document.createElement),
    _9 = D9;
const m2 = z9(_9);
var B9 = typeof global == "object" && global && global.Object === Object && global;
const R9 = B9;
var F9 = typeof self == "object" && self && self.Object === Object && self,
    j9 = R9 || F9 || Function("return this")();
const U2 = j9;
var q9 = U2.Symbol;
const o2 = q9;
var G2 = Object.prototype,
    W9 = G2.hasOwnProperty,
    N9 = G2.toString,
    K1 = o2 ? o2.toStringTag : void 0;

function I9(c) {
    var n = W9.call(c, K1),
        i = c[K1];
    try {
        c[K1] = void 0;
        var h = !0
    } catch {}
    var l = N9.call(c);
    return h && (n ? c[K1] = i : delete c[K1]), l
}
var U9 = Object.prototype,
    G9 = U9.toString;

function X9(c) {
    return G9.call(c)
}
var $9 = "[object Null]",
    Y9 = "[object Undefined]",
    F2 = o2 ? o2.toStringTag : void 0;

function K9(c) {
    return c == null ? c === void 0 ? Y9 : $9 : F2 && F2 in Object(c) ? I9(c) : X9(c)
}

function J9(c) {
    return c != null && typeof c == "object"
}
var Q9 = "[object Symbol]";

function tg(c) {
    return typeof c == "symbol" || J9(c) && K9(c) == Q9
}
var ag = /\s/;

function eg(c) {
    for (var n = c.length; n-- && ag.test(c.charAt(n)););
    return n
}
var hg = /^\s+/;

function ng(c) {
    return c && c.slice(0, eg(c) + 1).replace(hg, "")
}

function c2(c) {
    var n = typeof c;
    return c != null && (n == "object" || n == "function")
}
var j2 = 0 / 0,
    rg = /^[-+]0x[0-9a-f]+$/i,
    og = /^0b[01]+$/i,
    cg = /^0o[0-7]+$/i,
    sg = parseInt;

function q2(c) {
    if (typeof c == "number") return c;
    if (tg(c)) return j2;
    if (c2(c)) {
        var n = typeof c.valueOf == "function" ? c.valueOf() : c;
        c = c2(n) ? n + "" : n
    }
    if (typeof c != "string") return c === 0 ? c : +c;
    c = ng(c);
    var i = og.test(c);
    return i || cg.test(c) ? sg(c.slice(2), i ? 2 : 8) : rg.test(c) ? j2 : +c
}
var ig = function () {
    return U2.Date.now()
};
const g2 = ig;
var dg = "Expected a function",
    pg = Math.max,
    lg = Math.min;

function n2(c, n, i) {
    var h, l, V, Z, b, O, H = 0,
        D = !1,
        L = !1,
        B = !0;
    if (typeof c != "function") throw new TypeError(dg);
    n = q2(n) || 0, c2(i) && (D = !!i.leading, L = "maxWait" in i, V = L ? pg(q2(i.maxWait) || 0, n) : V, B = "trailing" in i ? !!i.trailing : B);

    function z(v) {
        var a = h,
            e = l;
        return h = l = void 0, H = v, Z = c.apply(e, a), Z
    }

    function _(v) {
        return H = v, b = setTimeout(p, n), D ? z(v) : Z
    }

    function S(v) {
        var a = v - O,
            e = v - H,
            y = n - a;
        return L ? lg(y, V - e) : y
    }

    function M(v) {
        var a = v - O,
            e = v - H;
        return O === void 0 || a >= n || a < 0 || L && e >= V
    }

    function p() {
        var v = g2();
        if (M(v)) return s(v);
        b = setTimeout(p, S(v))
    }

    function s(v) {
        return b = void 0, B && h ? z(v) : (h = l = void 0, Z)
    }

    function m() {
        b !== void 0 && clearTimeout(b), H = 0, h = O = l = b = void 0
    }

    function A() {
        return b === void 0 ? Z : s(g2())
    }

    function w() {
        var v = g2(),
            a = M(v);
        if (h = arguments, l = this, O = v, a) {
            if (b === void 0) return _(O);
            if (L) return clearTimeout(b), b = setTimeout(p, n), z(O)
        }
        return b === void 0 && (b = setTimeout(p, n)), Z
    }
    return w.cancel = m, w.flush = A, w
}
var vg = "Expected a function";

function Mg(c, n, i) {
    var h = !0,
        l = !0;
    if (typeof c != "function") throw new TypeError(vg);
    return c2(i) && (h = "leading" in i ? !!i.leading : h, l = "trailing" in i ? !!i.trailing : l), n2(c, n, {
        leading: h,
        maxWait: n,
        trailing: l
    })
}
var I1 = function () {
        return I1 = Object.assign || function (n) {
            for (var i, h = 1, l = arguments.length; h < l; h++) {
                i = arguments[h];
                for (var V in i) Object.prototype.hasOwnProperty.call(i, V) && (n[V] = i[V])
            }
            return n
        }, I1.apply(this, arguments)
    },
    N1 = null,
    W2 = null;
m2 && window.addEventListener("resize", function () {
    W2 !== window.devicePixelRatio && (W2 = window.devicePixelRatio, N1 = null)
});

function N2() {
    if (N1 === null) {
        if (typeof document > "u") return N1 = 0, N1;
        var c = document.body,
            n = document.createElement("div");
        n.classList.add("simplebar-hide-scrollbar"), c.appendChild(n);
        var i = n.getBoundingClientRect().right;
        c.removeChild(n), N1 = i
    }
    return N1
}

function X2(c) {
    return !c || !c.ownerDocument || !c.ownerDocument.defaultView ? window : c.ownerDocument.defaultView
}

function $2(c) {
    return !c || !c.ownerDocument ? document : c.ownerDocument
}
var Y2 = function (c) {
    var n = {},
        i = Array.prototype.reduce.call(c, function (h, l) {
            var V = l.name.match(/data-simplebar-(.+)/);
            if (V) {
                var Z = V[1].replace(/\W+(.)/g, function (b, O) {
                    return O.toUpperCase()
                });
                switch (l.value) {
                    case "true":
                        h[Z] = !0;
                        break;
                    case "false":
                        h[Z] = !1;
                        break;
                    case void 0:
                        h[Z] = !0;
                        break;
                    default:
                        h[Z] = l.value
                }
            }
            return h
        }, n);
    return i
};

function K2(c, n) {
    var i;
    c && (i = c.classList).add.apply(i, n.split(" "))
}

function J2(c, n) {
    c && n.split(" ").forEach(function (i) {
        c.classList.remove(i)
    })
}

function Q2(c) {
    return ".".concat(c.split(" ").join("."))
}
var yg = Object.freeze({
        __proto__: null,
        getElementWindow: X2,
        getElementDocument: $2,
        getOptions: Y2,
        addClasses: K2,
        removeClasses: J2,
        classNamesToQuery: Q2
    }),
    Z1 = X2,
    u2 = $2,
    gg = Y2,
    T1 = K2,
    z1 = J2,
    f1 = Q2,
    r2 = function () {
        function c(n, i) {
            i === void 0 && (i = {});
            var h = this;
            if (this.removePreventClickId = null, this.minScrollbarWidth = 20, this.stopScrollDelay = 175, this.isScrolling = !1, this.isMouseEntering = !1, this.scrollXTicking = !1, this.scrollYTicking = !1, this.wrapperEl = null, this.contentWrapperEl = null, this.contentEl = null, this.offsetEl = null, this.maskEl = null, this.placeholderEl = null, this.heightAutoObserverWrapperEl = null, this.heightAutoObserverEl = null, this.rtlHelpers = null, this.scrollbarWidth = 0, this.resizeObserver = null, this.mutationObserver = null, this.elStyles = null, this.isRtl = null, this.mouseX = 0, this.mouseY = 0, this.onMouseMove = function () {}, this.onWindowResize = function () {}, this.onStopScrolling = function () {}, this.onMouseEntered = function () {}, this.onScroll = function () {
                    var l = Z1(h.el);
                    h.scrollXTicking || (l.requestAnimationFrame(h.scrollX), h.scrollXTicking = !0), h.scrollYTicking || (l.requestAnimationFrame(h.scrollY), h.scrollYTicking = !0), h.isScrolling || (h.isScrolling = !0, T1(h.el, h.classNames.scrolling)), h.showScrollbar("x"), h.showScrollbar("y"), h.onStopScrolling()
                }, this.scrollX = function () {
                    h.axis.x.isOverflowing && h.positionScrollbar("x"), h.scrollXTicking = !1
                }, this.scrollY = function () {
                    h.axis.y.isOverflowing && h.positionScrollbar("y"), h.scrollYTicking = !1
                }, this._onStopScrolling = function () {
                    z1(h.el, h.classNames.scrolling), h.options.autoHide && (h.hideScrollbar("x"), h.hideScrollbar("y")), h.isScrolling = !1
                }, this.onMouseEnter = function () {
                    h.isMouseEntering || (T1(h.el, h.classNames.mouseEntered), h.showScrollbar("x"), h.showScrollbar("y"), h.isMouseEntering = !0), h.onMouseEntered()
                }, this._onMouseEntered = function () {
                    z1(h.el, h.classNames.mouseEntered), h.options.autoHide && (h.hideScrollbar("x"), h.hideScrollbar("y")), h.isMouseEntering = !1
                }, this._onMouseMove = function (l) {
                    h.mouseX = l.clientX, h.mouseY = l.clientY, (h.axis.x.isOverflowing || h.axis.x.forceVisible) && h.onMouseMoveForAxis("x"), (h.axis.y.isOverflowing || h.axis.y.forceVisible) && h.onMouseMoveForAxis("y")
                }, this.onMouseLeave = function () {
                    h.onMouseMove.cancel(), (h.axis.x.isOverflowing || h.axis.x.forceVisible) && h.onMouseLeaveForAxis("x"), (h.axis.y.isOverflowing || h.axis.y.forceVisible) && h.onMouseLeaveForAxis("y"), h.mouseX = -1, h.mouseY = -1
                }, this._onWindowResize = function () {
                    h.scrollbarWidth = h.getScrollbarWidth(), h.hideNativeScrollbar()
                }, this.onPointerEvent = function (l) {
                    if (!(!h.axis.x.track.el || !h.axis.y.track.el || !h.axis.x.scrollbar.el || !h.axis.y.scrollbar.el)) {
                        var V, Z;
                        h.axis.x.track.rect = h.axis.x.track.el.getBoundingClientRect(), h.axis.y.track.rect = h.axis.y.track.el.getBoundingClientRect(), (h.axis.x.isOverflowing || h.axis.x.forceVisible) && (V = h.isWithinBounds(h.axis.x.track.rect)), (h.axis.y.isOverflowing || h.axis.y.forceVisible) && (Z = h.isWithinBounds(h.axis.y.track.rect)), (V || Z) && (l.stopPropagation(), l.type === "pointerdown" && l.pointerType !== "touch" && (V && (h.axis.x.scrollbar.rect = h.axis.x.scrollbar.el.getBoundingClientRect(), h.isWithinBounds(h.axis.x.scrollbar.rect) ? h.onDragStart(l, "x") : h.onTrackClick(l, "x")), Z && (h.axis.y.scrollbar.rect = h.axis.y.scrollbar.el.getBoundingClientRect(), h.isWithinBounds(h.axis.y.scrollbar.rect) ? h.onDragStart(l, "y") : h.onTrackClick(l, "y"))))
                    }
                }, this.drag = function (l) {
                    var V, Z, b, O, H, D, L, B, z, _, S;
                    if (!(!h.draggedAxis || !h.contentWrapperEl)) {
                        var M, p = h.axis[h.draggedAxis].track,
                            s = (Z = (V = p.rect) === null || V === void 0 ? void 0 : V[h.axis[h.draggedAxis].sizeAttr]) !== null && Z !== void 0 ? Z : 0,
                            m = h.axis[h.draggedAxis].scrollbar,
                            A = (O = (b = h.contentWrapperEl) === null || b === void 0 ? void 0 : b[h.axis[h.draggedAxis].scrollSizeAttr]) !== null && O !== void 0 ? O : 0,
                            w = parseInt((D = (H = h.elStyles) === null || H === void 0 ? void 0 : H[h.axis[h.draggedAxis].sizeAttr]) !== null && D !== void 0 ? D : "0px", 10);
                        l.preventDefault(), l.stopPropagation(), h.draggedAxis === "y" ? M = l.pageY : M = l.pageX;
                        var v = M - ((B = (L = p.rect) === null || L === void 0 ? void 0 : L[h.axis[h.draggedAxis].offsetAttr]) !== null && B !== void 0 ? B : 0) - h.axis[h.draggedAxis].dragOffset;
                        v = h.draggedAxis === "x" && h.isRtl ? ((_ = (z = p.rect) === null || z === void 0 ? void 0 : z[h.axis[h.draggedAxis].sizeAttr]) !== null && _ !== void 0 ? _ : 0) - m.size - v : v;
                        var a = v / (s - m.size),
                            e = a * (A - w);
                        h.draggedAxis === "x" && h.isRtl && (e = !((S = c.getRtlHelpers()) === null || S === void 0) && S.isScrollingToNegative ? -e : e), h.contentWrapperEl[h.axis[h.draggedAxis].scrollOffsetAttr] = e
                    }
                }, this.onEndDrag = function (l) {
                    var V = u2(h.el),
                        Z = Z1(h.el);
                    l.preventDefault(), l.stopPropagation(), z1(h.el, h.classNames.dragging), V.removeEventListener("mousemove", h.drag, !0), V.removeEventListener("mouseup", h.onEndDrag, !0), h.removePreventClickId = Z.setTimeout(function () {
                        V.removeEventListener("click", h.preventClick, !0), V.removeEventListener("dblclick", h.preventClick, !0), h.removePreventClickId = null
                    })
                }, this.preventClick = function (l) {
                    l.preventDefault(), l.stopPropagation()
                }, this.el = n, this.options = I1(I1({}, c.defaultOptions), i), this.classNames = I1(I1({}, c.defaultOptions.classNames), i.classNames), this.axis = {
                    x: {
                        scrollOffsetAttr: "scrollLeft",
                        sizeAttr: "width",
                        scrollSizeAttr: "scrollWidth",
                        offsetSizeAttr: "offsetWidth",
                        offsetAttr: "left",
                        overflowAttr: "overflowX",
                        dragOffset: 0,
                        isOverflowing: !0,
                        forceVisible: !1,
                        track: {
                            size: null,
                            el: null,
                            rect: null,
                            isVisible: !1
                        },
                        scrollbar: {
                            size: null,
                            el: null,
                            rect: null,
                            isVisible: !1
                        }
                    },
                    y: {
                        scrollOffsetAttr: "scrollTop",
                        sizeAttr: "height",
                        scrollSizeAttr: "scrollHeight",
                        offsetSizeAttr: "offsetHeight",
                        offsetAttr: "top",
                        overflowAttr: "overflowY",
                        dragOffset: 0,
                        isOverflowing: !0,
                        forceVisible: !1,
                        track: {
                            size: null,
                            el: null,
                            rect: null,
                            isVisible: !1
                        },
                        scrollbar: {
                            size: null,
                            el: null,
                            rect: null,
                            isVisible: !1
                        }
                    }
                }, typeof this.el != "object" || !this.el.nodeName) throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));
            this.onMouseMove = Mg(this._onMouseMove, 64), this.onWindowResize = n2(this._onWindowResize, 64, {
                leading: !0
            }), this.onStopScrolling = n2(this._onStopScrolling, this.stopScrollDelay), this.onMouseEntered = n2(this._onMouseEntered, this.stopScrollDelay), this.init()
        }
        return c.getRtlHelpers = function () {
            if (c.rtlHelpers) return c.rtlHelpers;
            var n = document.createElement("div");
            n.innerHTML = '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
            var i = n.firstElementChild,
                h = i == null ? void 0 : i.firstElementChild;
            if (!h) return null;
            document.body.appendChild(i), i.scrollLeft = 0;
            var l = c.getOffset(i),
                V = c.getOffset(h);
            i.scrollLeft = -999;
            var Z = c.getOffset(h);
            return document.body.removeChild(i), c.rtlHelpers = {
                isScrollOriginAtZero: l.left !== V.left,
                isScrollingToNegative: V.left !== Z.left
            }, c.rtlHelpers
        }, c.prototype.getScrollbarWidth = function () {
            try {
                return this.contentWrapperEl && getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display === "none" || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : N2()
            } catch {
                return N2()
            }
        }, c.getOffset = function (n) {
            var i = n.getBoundingClientRect(),
                h = u2(n),
                l = Z1(n);
            return {
                top: i.top + (l.pageYOffset || h.documentElement.scrollTop),
                left: i.left + (l.pageXOffset || h.documentElement.scrollLeft)
            }
        }, c.prototype.init = function () {
            m2 && (this.initDOM(), this.rtlHelpers = c.getRtlHelpers(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners())
        }, c.prototype.initDOM = function () {
            var n, i;
            this.wrapperEl = this.el.querySelector(f1(this.classNames.wrapper)), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector(f1(this.classNames.contentWrapper)), this.contentEl = this.options.contentNode || this.el.querySelector(f1(this.classNames.contentEl)), this.offsetEl = this.el.querySelector(f1(this.classNames.offset)), this.maskEl = this.el.querySelector(f1(this.classNames.mask)), this.placeholderEl = this.findChild(this.wrapperEl, f1(this.classNames.placeholder)), this.heightAutoObserverWrapperEl = this.el.querySelector(f1(this.classNames.heightAutoObserverWrapperEl)), this.heightAutoObserverEl = this.el.querySelector(f1(this.classNames.heightAutoObserverEl)), this.axis.x.track.el = this.findChild(this.el, "".concat(f1(this.classNames.track)).concat(f1(this.classNames.horizontal))), this.axis.y.track.el = this.findChild(this.el, "".concat(f1(this.classNames.track)).concat(f1(this.classNames.vertical))), this.axis.x.scrollbar.el = ((n = this.axis.x.track.el) === null || n === void 0 ? void 0 : n.querySelector(f1(this.classNames.scrollbar))) || null, this.axis.y.scrollbar.el = ((i = this.axis.y.track.el) === null || i === void 0 ? void 0 : i.querySelector(f1(this.classNames.scrollbar))) || null, this.options.autoHide || (T1(this.axis.x.scrollbar.el, this.classNames.visible), T1(this.axis.y.scrollbar.el, this.classNames.visible))
        }, c.prototype.initListeners = function () {
            var n = this,
                i, h = Z1(this.el);
            if (this.el.addEventListener("mouseenter", this.onMouseEnter), this.el.addEventListener("pointerdown", this.onPointerEvent, !0), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), (i = this.contentWrapperEl) === null || i === void 0 || i.addEventListener("scroll", this.onScroll), h.addEventListener("resize", this.onWindowResize), !!this.contentEl) {
                if (window.ResizeObserver) {
                    var l = !1,
                        V = h.ResizeObserver || ResizeObserver;
                    this.resizeObserver = new V(function () {
                        l && h.requestAnimationFrame(function () {
                            n.recalculate()
                        })
                    }), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl), h.requestAnimationFrame(function () {
                        l = !0
                    })
                }
                this.mutationObserver = new h.MutationObserver(function () {
                    h.requestAnimationFrame(function () {
                        n.recalculate()
                    })
                }), this.mutationObserver.observe(this.contentEl, {
                    childList: !0,
                    subtree: !0,
                    characterData: !0
                })
            }
        }, c.prototype.recalculate = function () {
            if (!(!this.heightAutoObserverEl || !this.contentEl || !this.contentWrapperEl || !this.wrapperEl || !this.placeholderEl)) {
                var n = Z1(this.el);
                this.elStyles = n.getComputedStyle(this.el), this.isRtl = this.elStyles.direction === "rtl";
                var i = this.contentEl.offsetWidth,
                    h = this.heightAutoObserverEl.offsetHeight <= 1,
                    l = this.heightAutoObserverEl.offsetWidth <= 1 || i > 0,
                    V = this.contentWrapperEl.offsetWidth,
                    Z = this.elStyles.overflowX,
                    b = this.elStyles.overflowY;
                this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft), this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft);
                var O = this.contentEl.scrollHeight,
                    H = this.contentEl.scrollWidth;
                this.contentWrapperEl.style.height = h ? "auto" : "100%", this.placeholderEl.style.width = l ? "".concat(i || H, "px") : "auto", this.placeholderEl.style.height = "".concat(O, "px");
                var D = this.contentWrapperEl.offsetHeight;
                this.axis.x.isOverflowing = i !== 0 && H > i, this.axis.y.isOverflowing = O > D, this.axis.x.isOverflowing = Z === "hidden" ? !1 : this.axis.x.isOverflowing, this.axis.y.isOverflowing = b === "hidden" ? !1 : this.axis.y.isOverflowing, this.axis.x.forceVisible = this.options.forceVisible === "x" || this.options.forceVisible === !0, this.axis.y.forceVisible = this.options.forceVisible === "y" || this.options.forceVisible === !0, this.hideNativeScrollbar();
                var L = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
                    B = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
                this.axis.x.isOverflowing = this.axis.x.isOverflowing && H > V - B, this.axis.y.isOverflowing = this.axis.y.isOverflowing && O > D - L, this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el && (this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px")), this.axis.y.scrollbar.el && (this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px")), this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y")
            }
        }, c.prototype.getScrollbarSize = function (n) {
            var i, h;
            if (n === void 0 && (n = "y"), !this.axis[n].isOverflowing || !this.contentEl) return 0;
            var l = this.contentEl[this.axis[n].scrollSizeAttr],
                V = (h = (i = this.axis[n].track.el) === null || i === void 0 ? void 0 : i[this.axis[n].offsetSizeAttr]) !== null && h !== void 0 ? h : 0,
                Z = V / l,
                b;
            return b = Math.max(~~(Z * V), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (b = Math.min(b, this.options.scrollbarMaxSize)), b
        }, c.prototype.positionScrollbar = function (n) {
            var i, h, l;
            n === void 0 && (n = "y");
            var V = this.axis[n].scrollbar;
            if (!(!this.axis[n].isOverflowing || !this.contentWrapperEl || !V.el || !this.elStyles)) {
                var Z = this.contentWrapperEl[this.axis[n].scrollSizeAttr],
                    b = ((i = this.axis[n].track.el) === null || i === void 0 ? void 0 : i[this.axis[n].offsetSizeAttr]) || 0,
                    O = parseInt(this.elStyles[this.axis[n].sizeAttr], 10),
                    H = this.contentWrapperEl[this.axis[n].scrollOffsetAttr];
                H = n === "x" && this.isRtl && (!((h = c.getRtlHelpers()) === null || h === void 0) && h.isScrollOriginAtZero) ? -H : H, n === "x" && this.isRtl && (H = !((l = c.getRtlHelpers()) === null || l === void 0) && l.isScrollingToNegative ? H : -H);
                var D = H / (Z - O),
                    L = ~~((b - V.size) * D);
                L = n === "x" && this.isRtl ? -L + (b - V.size) : L, V.el.style.transform = n === "x" ? "translate3d(".concat(L, "px, 0, 0)") : "translate3d(0, ".concat(L, "px, 0)")
            }
        }, c.prototype.toggleTrackVisibility = function (n) {
            n === void 0 && (n = "y");
            var i = this.axis[n].track.el,
                h = this.axis[n].scrollbar.el;
            !i || !h || !this.contentWrapperEl || (this.axis[n].isOverflowing || this.axis[n].forceVisible ? (i.style.visibility = "visible", this.contentWrapperEl.style[this.axis[n].overflowAttr] = "scroll", this.el.classList.add("".concat(this.classNames.scrollable, "-").concat(n))) : (i.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[n].overflowAttr] = "hidden", this.el.classList.remove("".concat(this.classNames.scrollable, "-").concat(n))), this.axis[n].isOverflowing ? h.style.display = "block" : h.style.display = "none")
        }, c.prototype.showScrollbar = function (n) {
            n === void 0 && (n = "y"), this.axis[n].isOverflowing && !this.axis[n].scrollbar.isVisible && (T1(this.axis[n].scrollbar.el, this.classNames.visible), this.axis[n].scrollbar.isVisible = !0)
        }, c.prototype.hideScrollbar = function (n) {
            n === void 0 && (n = "y"), this.axis[n].isOverflowing && this.axis[n].scrollbar.isVisible && (z1(this.axis[n].scrollbar.el, this.classNames.visible), this.axis[n].scrollbar.isVisible = !1)
        }, c.prototype.hideNativeScrollbar = function () {
            this.offsetEl && (this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px", this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px")
        }, c.prototype.onMouseMoveForAxis = function (n) {
            n === void 0 && (n = "y");
            var i = this.axis[n];
            !i.track.el || !i.scrollbar.el || (i.track.rect = i.track.el.getBoundingClientRect(), i.scrollbar.rect = i.scrollbar.el.getBoundingClientRect(), this.isWithinBounds(i.track.rect) ? (this.showScrollbar(n), T1(i.track.el, this.classNames.hover), this.isWithinBounds(i.scrollbar.rect) ? T1(i.scrollbar.el, this.classNames.hover) : z1(i.scrollbar.el, this.classNames.hover)) : (z1(i.track.el, this.classNames.hover), this.options.autoHide && this.hideScrollbar(n)))
        }, c.prototype.onMouseLeaveForAxis = function (n) {
            n === void 0 && (n = "y"), z1(this.axis[n].track.el, this.classNames.hover), z1(this.axis[n].scrollbar.el, this.classNames.hover), this.options.autoHide && this.hideScrollbar(n)
        }, c.prototype.onDragStart = function (n, i) {
            var h;
            i === void 0 && (i = "y");
            var l = u2(this.el),
                V = Z1(this.el),
                Z = this.axis[i].scrollbar,
                b = i === "y" ? n.pageY : n.pageX;
            this.axis[i].dragOffset = b - (((h = Z.rect) === null || h === void 0 ? void 0 : h[this.axis[i].offsetAttr]) || 0), this.draggedAxis = i, T1(this.el, this.classNames.dragging), l.addEventListener("mousemove", this.drag, !0), l.addEventListener("mouseup", this.onEndDrag, !0), this.removePreventClickId === null ? (l.addEventListener("click", this.preventClick, !0), l.addEventListener("dblclick", this.preventClick, !0)) : (V.clearTimeout(this.removePreventClickId), this.removePreventClickId = null)
        }, c.prototype.onTrackClick = function (n, i) {
            var h = this,
                l, V, Z, b;
            i === void 0 && (i = "y");
            var O = this.axis[i];
            if (!(!this.options.clickOnTrack || !O.scrollbar.el || !this.contentWrapperEl)) {
                n.preventDefault();
                var H = Z1(this.el);
                this.axis[i].scrollbar.rect = O.scrollbar.el.getBoundingClientRect();
                var D = this.axis[i].scrollbar,
                    L = (V = (l = D.rect) === null || l === void 0 ? void 0 : l[this.axis[i].offsetAttr]) !== null && V !== void 0 ? V : 0,
                    B = parseInt((b = (Z = this.elStyles) === null || Z === void 0 ? void 0 : Z[this.axis[i].sizeAttr]) !== null && b !== void 0 ? b : "0px", 10),
                    z = this.contentWrapperEl[this.axis[i].scrollOffsetAttr],
                    _ = i === "y" ? this.mouseY - L : this.mouseX - L,
                    S = _ < 0 ? -1 : 1,
                    M = S === -1 ? z - B : z + B,
                    p = 40,
                    s = function () {
                        h.contentWrapperEl && (S === -1 ? z > M && (z -= p, h.contentWrapperEl[h.axis[i].scrollOffsetAttr] = z, H.requestAnimationFrame(s)) : z < M && (z += p, h.contentWrapperEl[h.axis[i].scrollOffsetAttr] = z, H.requestAnimationFrame(s)))
                    };
                s()
            }
        }, c.prototype.getContentElement = function () {
            return this.contentEl
        }, c.prototype.getScrollElement = function () {
            return this.contentWrapperEl
        }, c.prototype.removeListeners = function () {
            var n = Z1(this.el);
            this.el.removeEventListener("mouseenter", this.onMouseEnter), this.el.removeEventListener("pointerdown", this.onPointerEvent, !0), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl && this.contentWrapperEl.removeEventListener("scroll", this.onScroll), n.removeEventListener("resize", this.onWindowResize), this.mutationObserver && this.mutationObserver.disconnect(), this.resizeObserver && this.resizeObserver.disconnect(), this.onMouseMove.cancel(), this.onWindowResize.cancel(), this.onStopScrolling.cancel(), this.onMouseEntered.cancel()
        }, c.prototype.unMount = function () {
            this.removeListeners()
        }, c.prototype.isWithinBounds = function (n) {
            return this.mouseX >= n.left && this.mouseX <= n.left + n.width && this.mouseY >= n.top && this.mouseY <= n.top + n.height
        }, c.prototype.findChild = function (n, i) {
            var h = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector;
            return Array.prototype.filter.call(n.children, function (l) {
                return h.call(l, i)
            })[0]
        }, c.rtlHelpers = null, c.defaultOptions = {
            forceVisible: !1,
            clickOnTrack: !0,
            scrollbarMinSize: 25,
            scrollbarMaxSize: 0,
            ariaLabel: "scrollable content",
            classNames: {
                contentEl: "simplebar-content",
                contentWrapper: "simplebar-content-wrapper",
                offset: "simplebar-offset",
                mask: "simplebar-mask",
                wrapper: "simplebar-wrapper",
                placeholder: "simplebar-placeholder",
                scrollbar: "simplebar-scrollbar",
                track: "simplebar-track",
                heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
                heightAutoObserverEl: "simplebar-height-auto-observer",
                visible: "simplebar-visible",
                horizontal: "simplebar-horizontal",
                vertical: "simplebar-vertical",
                hover: "simplebar-hover",
                dragging: "simplebar-dragging",
                scrolling: "simplebar-scrolling",
                scrollable: "simplebar-scrollable",
                mouseEntered: "simplebar-mouse-entered"
            },
            scrollableNode: null,
            contentNode: null,
            autoHide: !0
        }, c.getOptions = gg, c.helpers = yg, c
    }(),
    x2 = function (c, n) {
        return x2 = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (i, h) {
            i.__proto__ = h
        } || function (i, h) {
            for (var l in h) Object.prototype.hasOwnProperty.call(h, l) && (i[l] = h[l])
        }, x2(c, n)
    };

function ug(c, n) {
    if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    x2(c, n);

    function i() {
        this.constructor = c
    }
    c.prototype = n === null ? Object.create(n) : (i.prototype = n.prototype, new i)
}
var tt = r2.helpers,
    f2 = tt.getOptions,
    x1 = tt.addClasses,
    fg = function (c) {
        ug(n, c);

        function n() {
            for (var i = [], h = 0; h < arguments.length; h++) i[h] = arguments[h];
            var l = c.apply(this, i) || this;
            return n.instances.set(i[0], l), l
        }
        return n.initDOMLoadedElements = function () {
            document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), function (i) {
                i.getAttribute("data-simplebar") !== "init" && !n.instances.has(i) && new n(i, f2(i.attributes))
            })
        }, n.removeObserver = function () {
            var i;
            (i = n.globalObserver) === null || i === void 0 || i.disconnect()
        }, n.prototype.initDOM = function () {
            var i = this,
                h, l, V;
            if (!Array.prototype.filter.call(this.el.children, function (O) {
                    return O.classList.contains(i.classNames.wrapper)
                }).length) {
                for (this.wrapperEl = document.createElement("div"), this.contentWrapperEl = document.createElement("div"), this.offsetEl = document.createElement("div"), this.maskEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.placeholderEl = document.createElement("div"), this.heightAutoObserverWrapperEl = document.createElement("div"), this.heightAutoObserverEl = document.createElement("div"), x1(this.wrapperEl, this.classNames.wrapper), x1(this.contentWrapperEl, this.classNames.contentWrapper), x1(this.offsetEl, this.classNames.offset), x1(this.maskEl, this.classNames.mask), x1(this.contentEl, this.classNames.contentEl), x1(this.placeholderEl, this.classNames.placeholder), x1(this.heightAutoObserverWrapperEl, this.classNames.heightAutoObserverWrapperEl), x1(this.heightAutoObserverEl, this.classNames.heightAutoObserverEl); this.el.firstChild;) this.contentEl.appendChild(this.el.firstChild);
                this.contentWrapperEl.appendChild(this.contentEl), this.offsetEl.appendChild(this.contentWrapperEl), this.maskEl.appendChild(this.offsetEl), this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl), this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl), this.wrapperEl.appendChild(this.maskEl), this.wrapperEl.appendChild(this.placeholderEl), this.el.appendChild(this.wrapperEl), (h = this.contentWrapperEl) === null || h === void 0 || h.setAttribute("tabindex", "0"), (l = this.contentWrapperEl) === null || l === void 0 || l.setAttribute("role", "region"), (V = this.contentWrapperEl) === null || V === void 0 || V.setAttribute("aria-label", this.options.ariaLabel)
            }
            if (!this.axis.x.track.el || !this.axis.y.track.el) {
                var Z = document.createElement("div"),
                    b = document.createElement("div");
                x1(Z, this.classNames.track), x1(b, this.classNames.scrollbar), Z.appendChild(b), this.axis.x.track.el = Z.cloneNode(!0), x1(this.axis.x.track.el, this.classNames.horizontal), this.axis.y.track.el = Z.cloneNode(!0), x1(this.axis.y.track.el, this.classNames.vertical), this.el.appendChild(this.axis.x.track.el), this.el.appendChild(this.axis.y.track.el)
            }
            r2.prototype.initDOM.call(this), this.el.setAttribute("data-simplebar", "init")
        }, n.prototype.unMount = function () {
            r2.prototype.unMount.call(this), n.instances.delete(this.el)
        }, n.initHtmlApi = function () {
            this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), typeof MutationObserver < "u" && (this.globalObserver = new MutationObserver(n.handleMutations), this.globalObserver.observe(document, {
                childList: !0,
                subtree: !0
            })), document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements))
        }, n.handleMutations = function (i) {
            i.forEach(function (h) {
                h.addedNodes.forEach(function (l) {
                    l.nodeType === 1 && (l.hasAttribute("data-simplebar") ? !n.instances.has(l) && document.documentElement.contains(l) && new n(l, f2(l.attributes)) : l.querySelectorAll("[data-simplebar]").forEach(function (V) {
                        V.getAttribute("data-simplebar") !== "init" && !n.instances.has(V) && document.documentElement.contains(V) && new n(V, f2(V.attributes))
                    }))
                }), h.removedNodes.forEach(function (l) {
                    l.nodeType === 1 && (l.getAttribute("data-simplebar") === "init" ? n.instances.has(l) && !document.documentElement.contains(l) && n.instances.get(l).unMount() : Array.prototype.forEach.call(l.querySelectorAll('[data-simplebar="init"]'), function (V) {
                        n.instances.has(V) && !document.documentElement.contains(V) && n.instances.get(V).unMount()
                    }))
                })
            })
        }, n.instances = new WeakMap, n
    }(r2);
m2 && fg.initHtmlApi();
var xg = {
    exports: {}
}; /*! For license information please see preline.js.LICENSE.txt */
(function (c, n) {
    (function (i, h) {
        c.exports = h()
    })(self, function () {
        return (() => {
            var i = {
                    661: (Z, b, O) => {
                        function H(S) {
                            return H = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (M) {
                                return typeof M
                            } : function (M) {
                                return M && typeof Symbol == "function" && M.constructor === Symbol && M !== Symbol.prototype ? "symbol" : typeof M
                            }, H(S)
                        }

                        function D(S, M) {
                            for (var p = 0; p < M.length; p++) {
                                var s = M[p];
                                s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(S, s.key, s)
                            }
                        }

                        function L(S, M) {
                            return L = Object.setPrototypeOf || function (p, s) {
                                return p.__proto__ = s, p
                            }, L(S, M)
                        }

                        function B(S, M) {
                            if (M && (H(M) === "object" || typeof M == "function")) return M;
                            if (M !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                            return function (p) {
                                if (p === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return p
                            }(S)
                        }

                        function z(S) {
                            return z = Object.setPrototypeOf ? Object.getPrototypeOf : function (M) {
                                return M.__proto__ || Object.getPrototypeOf(M)
                            }, z(S)
                        }
                        var _ = function (S) {
                            (function (v, a) {
                                if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function");
                                v.prototype = Object.create(a && a.prototype, {
                                    constructor: {
                                        value: v,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(v, "prototype", {
                                    writable: !1
                                }), a && L(v, a)
                            })(w, S);
                            var M, p, s, m, A = (s = w, m = function () {
                                if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                                if (typeof Proxy == "function") return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                                } catch {
                                    return !1
                                }
                            }(), function () {
                                var v, a = z(s);
                                if (m) {
                                    var e = z(this).constructor;
                                    v = Reflect.construct(a, arguments, e)
                                } else v = a.apply(this, arguments);
                                return B(this, v)
                            });

                            function w() {
                                return function (v, a) {
                                    if (!(v instanceof a)) throw new TypeError("Cannot call a class as a function")
                                }(this, w), A.call(this, ".hs-accordion")
                            }
                            return M = w, (p = [{
                                key: "init",
                                value: function () {
                                    var v = this;
                                    document.addEventListener("click", function (a) {
                                        var e = a.target,
                                            y = e.closest(v.selector),
                                            x = e.closest(".hs-accordion-toggle"),
                                            g = e.closest(".hs-accordion-group");
                                        y && g && x && (v._hideAll(y), v.show(y))
                                    })
                                }
                            }, {
                                key: "show",
                                value: function (v) {
                                    var a = this;
                                    if (v.classList.contains("active")) return this.hide(v);
                                    v.classList.add("active");
                                    var e = v.querySelector(".hs-accordion-content");
                                    e.style.display = "block", e.style.height = 0, setTimeout(function () {
                                        e.style.height = "".concat(e.scrollHeight, "px")
                                    }), this.afterTransition(e, function () {
                                        v.classList.contains("active") && (e.style.height = "", a._fireEvent("open", v), a._dispatch("open.hs.accordion", v, v))
                                    })
                                }
                            }, {
                                key: "hide",
                                value: function (v) {
                                    var a = this,
                                        e = v.querySelector(".hs-accordion-content");
                                    e.style.height = "".concat(e.scrollHeight, "px"), setTimeout(function () {
                                        e.style.height = 0
                                    }), this.afterTransition(e, function () {
                                        v.classList.contains("active") || (e.style.display = "", a._fireEvent("hide", v), a._dispatch("hide.hs.accordion", v, v))
                                    }), v.classList.remove("active")
                                }
                            }, {
                                key: "_hideAll",
                                value: function (v) {
                                    var a = this,
                                        e = v.closest(".hs-accordion-group");
                                    e.hasAttribute("data-hs-accordion-always-open") || e.querySelectorAll(this.selector).forEach(function (y) {
                                        v !== y && a.hide(y)
                                    })
                                }
                            }]) && D(M.prototype, p), Object.defineProperty(M, "prototype", {
                                writable: !1
                            }), w
                        }(O(765).Z);
                        window.HSAccordion = new _, document.addEventListener("load", window.HSAccordion.init())
                    },
                    795: (Z, b, O) => {
                        function H(M) {
                            return H = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p) {
                                return typeof p
                            } : function (p) {
                                return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p
                            }, H(M)
                        }

                        function D(M, p) {
                            (p == null || p > M.length) && (p = M.length);
                            for (var s = 0, m = new Array(p); s < p; s++) m[s] = M[s];
                            return m
                        }

                        function L(M, p) {
                            for (var s = 0; s < p.length; s++) {
                                var m = p[s];
                                m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(M, m.key, m)
                            }
                        }

                        function B(M, p) {
                            return B = Object.setPrototypeOf || function (s, m) {
                                return s.__proto__ = m, s
                            }, B(M, p)
                        }

                        function z(M, p) {
                            if (p && (H(p) === "object" || typeof p == "function")) return p;
                            if (p !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                            return function (s) {
                                if (s === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return s
                            }(M)
                        }

                        function _(M) {
                            return _ = Object.setPrototypeOf ? Object.getPrototypeOf : function (p) {
                                return p.__proto__ || Object.getPrototypeOf(p)
                            }, _(M)
                        }
                        var S = function (M) {
                            (function (a, e) {
                                if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
                                a.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: a,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(a, "prototype", {
                                    writable: !1
                                }), e && B(a, e)
                            })(v, M);
                            var p, s, m, A, w = (m = v, A = function () {
                                if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                                if (typeof Proxy == "function") return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                                } catch {
                                    return !1
                                }
                            }(), function () {
                                var a, e = _(m);
                                if (A) {
                                    var y = _(this).constructor;
                                    a = Reflect.construct(e, arguments, y)
                                } else a = e.apply(this, arguments);
                                return z(this, a)
                            });

                            function v() {
                                return function (a, e) {
                                    if (!(a instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, v), w.call(this, "[data-hs-collapse]")
                            }
                            return p = v, (s = [{
                                key: "init",
                                value: function () {
                                    var a = this;
                                    document.addEventListener("click", function (e) {
                                        var y = e.target.closest(a.selector);
                                        if (y) {
                                            var x = document.querySelectorAll(y.getAttribute("data-hs-collapse"));
                                            a.toggle(x)
                                        }
                                    })
                                }
                            }, {
                                key: "toggle",
                                value: function (a) {
                                    var e, y = this;
                                    a.length && (e = a, function (x) {
                                        if (Array.isArray(x)) return D(x)
                                    }(e) || function (x) {
                                        if (typeof Symbol < "u" && x[Symbol.iterator] != null || x["@@iterator"] != null) return Array.from(x)
                                    }(e) || function (x, g) {
                                        if (x) {
                                            if (typeof x == "string") return D(x, g);
                                            var f = Object.prototype.toString.call(x).slice(8, -1);
                                            return f === "Object" && x.constructor && (f = x.constructor.name), f === "Map" || f === "Set" ? Array.from(x) : f === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f) ? D(x, g) : void 0
                                        }
                                    }(e) || function () {
                                        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
                                    }()).forEach(function (x) {
                                        x.classList.contains("hidden") ? y.show(x) : y.hide(x)
                                    })
                                }
                            }, {
                                key: "show",
                                value: function (a) {
                                    var e = this;
                                    a.classList.add("open"), a.classList.remove("hidden"), a.style.height = 0, document.querySelectorAll(this.selector).forEach(function (y) {
                                        a.closest(y.getAttribute("data-hs-collapse")) && y.classList.add("open")
                                    }), a.style.height = "".concat(a.scrollHeight, "px"), this.afterTransition(a, function () {
                                        a.classList.contains("open") && (a.style.height = "", e._fireEvent("open", a), e._dispatch("open.hs.collapse", a, a))
                                    })
                                }
                            }, {
                                key: "hide",
                                value: function (a) {
                                    var e = this;
                                    a.style.height = "".concat(a.scrollHeight, "px"), setTimeout(function () {
                                        a.style.height = 0
                                    }), a.classList.remove("open"), this.afterTransition(a, function () {
                                        a.classList.contains("open") || (a.classList.add("hidden"), a.style.height = null, e._fireEvent("hide", a), e._dispatch("hide.hs.collapse", a, a), a.querySelectorAll(".hs-mega-menu-content.block").forEach(function (y) {
                                            y.classList.remove("block"), y.classList.add("hidden")
                                        }))
                                    }), document.querySelectorAll(this.selector).forEach(function (y) {
                                        a.closest(y.getAttribute("data-hs-collapse")) && y.classList.remove("open")
                                    })
                                }
                            }]) && L(p.prototype, s), Object.defineProperty(p, "prototype", {
                                writable: !1
                            }), v
                        }(O(765).Z);
                        window.HSCollapse = new S, document.addEventListener("load", window.HSCollapse.init())
                    },
                    682: (Z, b, O) => {
                        var H = O(714),
                            D = O(765);
                        const L = {
                            historyIndex: -1,
                            addHistory: function (A) {
                                this.historyIndex = A
                            },
                            existsInHistory: function (A) {
                                return A > this.historyIndex
                            },
                            clearHistory: function () {
                                this.historyIndex = -1
                            }
                        };

                        function B(A) {
                            return B = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (w) {
                                return typeof w
                            } : function (w) {
                                return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w
                            }, B(A)
                        }

                        function z(A) {
                            return function (w) {
                                if (Array.isArray(w)) return _(w)
                            }(A) || function (w) {
                                if (typeof Symbol < "u" && w[Symbol.iterator] != null || w["@@iterator"] != null) return Array.from(w)
                            }(A) || function (w, v) {
                                if (w) {
                                    if (typeof w == "string") return _(w, v);
                                    var a = Object.prototype.toString.call(w).slice(8, -1);
                                    return a === "Object" && w.constructor && (a = w.constructor.name), a === "Map" || a === "Set" ? Array.from(w) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? _(w, v) : void 0
                                }
                            }(A) || function () {
                                throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
                            }()
                        }

                        function _(A, w) {
                            (w == null || w > A.length) && (w = A.length);
                            for (var v = 0, a = new Array(w); v < w; v++) a[v] = A[v];
                            return a
                        }

                        function S(A, w) {
                            for (var v = 0; v < w.length; v++) {
                                var a = w[v];
                                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(A, a.key, a)
                            }
                        }

                        function M(A, w) {
                            return M = Object.setPrototypeOf || function (v, a) {
                                return v.__proto__ = a, v
                            }, M(A, w)
                        }

                        function p(A, w) {
                            if (w && (B(w) === "object" || typeof w == "function")) return w;
                            if (w !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                            return function (v) {
                                if (v === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return v
                            }(A)
                        }

                        function s(A) {
                            return s = Object.setPrototypeOf ? Object.getPrototypeOf : function (w) {
                                return w.__proto__ || Object.getPrototypeOf(w)
                            }, s(A)
                        }
                        var m = function (A) {
                            (function (g, f) {
                                if (typeof f != "function" && f !== null) throw new TypeError("Super expression must either be null or a function");
                                g.prototype = Object.create(f && f.prototype, {
                                    constructor: {
                                        value: g,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(g, "prototype", {
                                    writable: !1
                                }), f && M(g, f)
                            })(x, A);
                            var w, v, a, e, y = (a = x, e = function () {
                                if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                                if (typeof Proxy == "function") return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                                } catch {
                                    return !1
                                }
                            }(), function () {
                                var g, f = s(a);
                                if (e) {
                                    var C = s(this).constructor;
                                    g = Reflect.construct(f, arguments, C)
                                } else g = f.apply(this, arguments);
                                return p(this, g)
                            });

                            function x() {
                                var g;
                                return function (f, C) {
                                    if (!(f instanceof C)) throw new TypeError("Cannot call a class as a function")
                                }(this, x), (g = y.call(this, ".hs-dropdown")).positions = {
                                    top: "top",
                                    "top-left": "top-start",
                                    "top-right": "top-end",
                                    bottom: "bottom",
                                    "bottom-left": "bottom-start",
                                    "bottom-right": "bottom-end",
                                    right: "right",
                                    "right-top": "right-start",
                                    "right-bottom": "right-end",
                                    left: "left",
                                    "left-top": "left-start",
                                    "left-bottom": "left-end"
                                }, g.absoluteStrategyModifiers = function (f) {
                                    return [{
                                        name: "applyStyles",
                                        fn: function (C) {
                                            var T = (window.getComputedStyle(f).getPropertyValue("--strategy") || "absolute").replace(" ", ""),
                                                F = (window.getComputedStyle(f).getPropertyValue("--adaptive") || "adaptive").replace(" ", "");
                                            C.state.elements.popper.style.position = T, C.state.elements.popper.style.transform = F === "adaptive" ? C.state.styles.popper.transform : null, C.state.elements.popper.style.top = null, C.state.elements.popper.style.bottom = null, C.state.elements.popper.style.left = null, C.state.elements.popper.style.right = null, C.state.elements.popper.style.margin = 0
                                        }
                                    }, {
                                        name: "computeStyles",
                                        options: {
                                            adaptive: !1
                                        }
                                    }]
                                }, g._history = L, g
                            }
                            return w = x, v = [{
                                key: "init",
                                value: function () {
                                    var g = this;
                                    document.addEventListener("click", function (f) {
                                        var C = f.target,
                                            T = C.closest(g.selector),
                                            F = C.closest(".hs-dropdown-menu");
                                        if (T && T.classList.contains("open") || g._closeOthers(T), F) {
                                            var j = (window.getComputedStyle(T).getPropertyValue("--auto-close") || "").replace(" ", "");
                                            if ((j == "false" || j == "inside") && !T.parentElement.closest(g.selector)) return
                                        }
                                        T && (T.classList.contains("open") ? g.close(T) : g.open(T))
                                    }), document.addEventListener("mousemove", function (f) {
                                        var C = f.target,
                                            T = C.closest(g.selector);
                                        if (C.closest(".hs-dropdown-menu"), T) {
                                            var F = (window.getComputedStyle(T).getPropertyValue("--trigger") || "click").replace(" ", "");
                                            if (F !== "hover") return;
                                            T && T.classList.contains("open") || g._closeOthers(T), F !== "hover" || T.classList.contains("open") || /iPad|iPhone|iPod/.test(navigator.platform) || navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform) || navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform) || g._hover(C)
                                        }
                                    }), document.addEventListener("keydown", this._keyboardSupport.bind(this)), window.addEventListener("resize", function () {
                                        document.querySelectorAll(".hs-dropdown.open").forEach(function (f) {
                                            g.close(f, !0)
                                        })
                                    })
                                }
                            }, {
                                key: "_closeOthers",
                                value: function () {
                                    var g = this,
                                        f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null,
                                        C = document.querySelectorAll("".concat(this.selector, ".open"));
                                    C.forEach(function (T) {
                                        if (!f || f.closest(".hs-dropdown.open") !== T) {
                                            var F = (window.getComputedStyle(T).getPropertyValue("--auto-close") || "").replace(" ", "");
                                            F != "false" && F != "outside" && g.close(T)
                                        }
                                    })
                                }
                            }, {
                                key: "_hover",
                                value: function (g) {
                                    var f = this,
                                        C = g.closest(this.selector);
                                    this.open(C), document.addEventListener("mousemove", function T(F) {
                                        F.target.closest(f.selector) && F.target.closest(f.selector) !== C.parentElement.closest(f.selector) || (f.close(C), document.removeEventListener("mousemove", T, !0))
                                    }, !0)
                                }
                            }, {
                                key: "close",
                                value: function (g) {
                                    var f = this,
                                        C = arguments.length > 1 && arguments[1] !== void 0 && arguments[1],
                                        T = g.querySelector(".hs-dropdown-menu"),
                                        F = function () {
                                            g.classList.contains("open") || (T.classList.remove("block"), T.classList.add("hidden"), T.style.inset = null, T.style.position = null, g._popper && g._popper.destroy())
                                        };
                                    C || this.afterTransition(g.querySelector("[data-hs-dropdown-transition]") || T, function () {
                                        F()
                                    }), T.style.margin = null, g.classList.remove("open"), C && F(), this._fireEvent("close", g), this._dispatch("close.hs.dropdown", g, g);
                                    var j = T.querySelectorAll(".hs-dropdown.open");
                                    j.forEach(function (o1) {
                                        f.close(o1, !0)
                                    })
                                }
                            }, {
                                key: "open",
                                value: function (g) {
                                    var f = g.querySelector(".hs-dropdown-menu"),
                                        C = (window.getComputedStyle(g).getPropertyValue("--placement") || "").replace(" ", ""),
                                        T = (window.getComputedStyle(g).getPropertyValue("--strategy") || "fixed").replace(" ", ""),
                                        F = ((window.getComputedStyle(g).getPropertyValue("--adaptive") || "adaptive").replace(" ", ""), parseInt((window.getComputedStyle(g).getPropertyValue("--offset") || "10").replace(" ", "")));
                                    if (T !== "static") {
                                        g._popper && g._popper.destroy();
                                        var j = (0, H.fi)(g, f, {
                                            placement: this.positions[C] || "bottom-start",
                                            strategy: T,
                                            modifiers: [].concat(z(T !== "fixed" ? this.absoluteStrategyModifiers(g) : []), [{
                                                name: "offset",
                                                options: {
                                                    offset: [0, F]
                                                }
                                            }])
                                        });
                                        g._popper = j
                                    }
                                    f.style.margin = null, f.classList.add("block"), f.classList.remove("hidden"), setTimeout(function () {
                                        g.classList.add("open")
                                    }), this._fireEvent("open", g), this._dispatch("open.hs.dropdown", g, g)
                                }
                            }, {
                                key: "_keyboardSupport",
                                value: function (g) {
                                    var f = document.querySelector(".hs-dropdown.open");
                                    if (f) return g.keyCode === 27 ? (g.preventDefault(), this._esc(f)) : g.keyCode === 40 ? (g.preventDefault(), this._down(f)) : g.keyCode === 38 ? (g.preventDefault(), this._up(f)) : g.keyCode === 36 ? (g.preventDefault(), this._start(f)) : g.keyCode === 35 ? (g.preventDefault(), this._end(f)) : void this._byChar(f, g.key)
                                }
                            }, {
                                key: "_esc",
                                value: function (g) {
                                    this.close(g)
                                }
                            }, {
                                key: "_up",
                                value: function (g) {
                                    var f = g.querySelector(".hs-dropdown-menu"),
                                        C = z(f.querySelectorAll("a")).reverse().filter(function (j) {
                                            return !j.disabled
                                        }),
                                        T = f.querySelector("a:focus"),
                                        F = C.findIndex(function (j) {
                                            return j === T
                                        });
                                    F + 1 < C.length && F++, C[F].focus()
                                }
                            }, {
                                key: "_down",
                                value: function (g) {
                                    var f = g.querySelector(".hs-dropdown-menu"),
                                        C = z(f.querySelectorAll("a")).filter(function (j) {
                                            return !j.disabled
                                        }),
                                        T = f.querySelector("a:focus"),
                                        F = C.findIndex(function (j) {
                                            return j === T
                                        });
                                    F + 1 < C.length && F++, C[F].focus()
                                }
                            }, {
                                key: "_start",
                                value: function (g) {
                                    var f = z(g.querySelector(".hs-dropdown-menu").querySelectorAll("a")).filter(function (C) {
                                        return !C.disabled
                                    });
                                    f.length && f[0].focus()
                                }
                            }, {
                                key: "_end",
                                value: function (g) {
                                    var f = z(g.querySelector(".hs-dropdown-menu").querySelectorAll("a")).reverse().filter(function (C) {
                                        return !C.disabled
                                    });
                                    f.length && f[0].focus()
                                }
                            }, {
                                key: "_byChar",
                                value: function (g, f) {
                                    var C = this,
                                        T = z(g.querySelector(".hs-dropdown-menu").querySelectorAll("a")),
                                        F = function () {
                                            return T.findIndex(function (o1, t1) {
                                                return o1.innerText.toLowerCase().charAt(0) === f.toLowerCase() && C._history.existsInHistory(t1)
                                            })
                                        },
                                        j = F();
                                    j === -1 && (this._history.clearHistory(), j = F()), j !== -1 && (T[j].focus(), this._history.addHistory(j))
                                }
                            }, {
                                key: "toggle",
                                value: function (g) {
                                    g.classList.contains("open") ? this.close(g) : this.open(g)
                                }
                            }], v && S(w.prototype, v), Object.defineProperty(w, "prototype", {
                                writable: !1
                            }), x
                        }(D.Z);
                        window.HSDropdown = new m, document.addEventListener("load", window.HSDropdown.init())
                    },
                    284: (Z, b, O) => {
                        function H(M) {
                            return H = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p) {
                                return typeof p
                            } : function (p) {
                                return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p
                            }, H(M)
                        }

                        function D(M, p) {
                            (p == null || p > M.length) && (p = M.length);
                            for (var s = 0, m = new Array(p); s < p; s++) m[s] = M[s];
                            return m
                        }

                        function L(M, p) {
                            for (var s = 0; s < p.length; s++) {
                                var m = p[s];
                                m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(M, m.key, m)
                            }
                        }

                        function B(M, p) {
                            return B = Object.setPrototypeOf || function (s, m) {
                                return s.__proto__ = m, s
                            }, B(M, p)
                        }

                        function z(M, p) {
                            if (p && (H(p) === "object" || typeof p == "function")) return p;
                            if (p !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                            return function (s) {
                                if (s === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return s
                            }(M)
                        }

                        function _(M) {
                            return _ = Object.setPrototypeOf ? Object.getPrototypeOf : function (p) {
                                return p.__proto__ || Object.getPrototypeOf(p)
                            }, _(M)
                        }
                        var S = function (M) {
                            (function (a, e) {
                                if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
                                a.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: a,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(a, "prototype", {
                                    writable: !1
                                }), e && B(a, e)
                            })(v, M);
                            var p, s, m, A, w = (m = v, A = function () {
                                if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                                if (typeof Proxy == "function") return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                                } catch {
                                    return !1
                                }
                            }(), function () {
                                var a, e = _(m);
                                if (A) {
                                    var y = _(this).constructor;
                                    a = Reflect.construct(e, arguments, y)
                                } else a = e.apply(this, arguments);
                                return z(this, a)
                            });

                            function v() {
                                var a;
                                return function (e, y) {
                                    if (!(e instanceof y)) throw new TypeError("Cannot call a class as a function")
                                }(this, v), (a = w.call(this, "[data-hs-overlay]")).openNextOverlay = !1, a
                            }
                            return p = v, (s = [{
                                key: "init",
                                value: function () {
                                    var a = this;
                                    document.addEventListener("click", function (e) {
                                        var y = e.target.closest(a.selector),
                                            x = e.target.closest("[data-hs-overlay-close]"),
                                            g = e.target.getAttribute("aria-overlay") === "true";
                                        return x ? a.close(x.closest(".hs-overlay.open")) : y ? a.toggle(document.querySelector(y.getAttribute("data-hs-overlay"))) : void(g && a._onBackdropClick(e.target))
                                    }), document.addEventListener("keydown", function (e) {
                                        if (e.keyCode === 27) {
                                            var y = document.querySelector(".hs-overlay.open");
                                            if (!y) return;
                                            setTimeout(function () {
                                                y.getAttribute("data-hs-overlay-keyboard") !== "false" && a.close(y)
                                            })
                                        }
                                    })
                                }
                            }, {
                                key: "toggle",
                                value: function (a) {
                                    a && (a.classList.contains("hidden") ? this.open(a) : this.close(a))
                                }
                            }, {
                                key: "open",
                                value: function (a) {
                                    var e = this;
                                    if (a) {
                                        var y = document.querySelector(".hs-overlay.open"),
                                            x = this.getClassProperty(a, "--body-scroll", "false") !== "true";
                                        if (y) return this.openNextOverlay = !0, this.close(y).then(function () {
                                            e.open(a), e.openNextOverlay = !1
                                        });
                                        x && (document.body.style.overflow = "hidden"), this._buildBackdrop(a), this._checkTimer(a), this._autoHide(a), a.classList.remove("hidden"), a.setAttribute("aria-overlay", "true"), a.setAttribute("tabindex", "-1"), setTimeout(function () {
                                            a.classList.contains("hidden") || (a.classList.add("open"), e._fireEvent("open", a), e._dispatch("open.hs.overlay", a, a), e._focusInput(a))
                                        }, 50)
                                    }
                                }
                            }, {
                                key: "close",
                                value: function (a) {
                                    var e = this;
                                    return new Promise(function (y) {
                                        a && (a.classList.remove("open"), a.removeAttribute("aria-overlay"), a.removeAttribute("tabindex", "-1"), e.afterTransition(a, function () {
                                            a.classList.contains("open") || (a.classList.add("hidden"), e._destroyBackdrop(), e._fireEvent("close", a), e._dispatch("close.hs.overlay", a, a), document.body.style.overflow = "", y(a))
                                        }))
                                    })
                                }
                            }, {
                                key: "_autoHide",
                                value: function (a) {
                                    var e = this,
                                        y = parseInt(this.getClassProperty(a, "--auto-hide", "0"));
                                    y && (a.autoHide = setTimeout(function () {
                                        e.close(a)
                                    }, y))
                                }
                            }, {
                                key: "_checkTimer",
                                value: function (a) {
                                    a.autoHide && (clearTimeout(a.autoHide), delete a.autoHide)
                                }
                            }, {
                                key: "_onBackdropClick",
                                value: function (a) {
                                    this.getClassProperty(a, "--overlay-backdrop", "true") !== "static" && this.close(a)
                                }
                            }, {
                                key: "_buildBackdrop",
                                value: function (a) {
                                    var e, y = this,
                                        x = a.getAttribute("data-hs-overlay-backdrop-container") || !1,
                                        g = document.createElement("div"),
                                        f = "transition duration fixed inset-0 z-50 bg-gray-900 bg-opacity-50 dark:bg-opacity-80 hs-overlay-backdrop",
                                        C = function (j, o1) {
                                            var t1 = typeof Symbol < "u" && j[Symbol.iterator] || j["@@iterator"];
                                            if (!t1) {
                                                if (Array.isArray(j) || (t1 = function (c1, G1) {
                                                        if (c1) {
                                                            if (typeof c1 == "string") return D(c1, G1);
                                                            var S1 = Object.prototype.toString.call(c1).slice(8, -1);
                                                            return S1 === "Object" && c1.constructor && (S1 = c1.constructor.name), S1 === "Map" || S1 === "Set" ? Array.from(c1) : S1 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S1) ? D(c1, G1) : void 0
                                                        }
                                                    }(j)) || o1 && j && typeof j.length == "number") {
                                                    t1 && (j = t1);
                                                    var C1 = 0,
                                                        O1 = function () {};
                                                    return {
                                                        s: O1,
                                                        n: function () {
                                                            return C1 >= j.length ? {
                                                                done: !0
                                                            } : {
                                                                done: !1,
                                                                value: j[C1++]
                                                            }
                                                        },
                                                        e: function (c1) {
                                                            throw c1
                                                        },
                                                        f: O1
                                                    }
                                                }
                                                throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
                                            }
                                            var L1, E1 = !0,
                                                U1 = !1;
                                            return {
                                                s: function () {
                                                    t1 = t1.call(j)
                                                },
                                                n: function () {
                                                    var c1 = t1.next();
                                                    return E1 = c1.done, c1
                                                },
                                                e: function (c1) {
                                                    U1 = !0, L1 = c1
                                                },
                                                f: function () {
                                                    try {
                                                        E1 || t1.return == null || t1.return()
                                                    } finally {
                                                        if (U1) throw L1
                                                    }
                                                }
                                            }
                                        }(a.classList.values());
                                    try {
                                        for (C.s(); !(e = C.n()).done;) {
                                            var T = e.value;
                                            T.startsWith("hs-overlay-backdrop-open:") && (f += " ".concat(T))
                                        }
                                    } catch (j) {
                                        C.e(j)
                                    } finally {
                                        C.f()
                                    }
                                    var F = this.getClassProperty(a, "--overlay-backdrop", "true") !== "static";
                                    this.getClassProperty(a, "--overlay-backdrop", "true") === "false" || (x && ((g = document.querySelector(x).cloneNode(!0)).classList.remove("hidden"), f = g.classList, g.classList = ""), F && g.addEventListener("click", function () {
                                        return y.close(a)
                                    }, !0), g.setAttribute("data-hs-overlay-backdrop-template", ""), document.body.appendChild(g), setTimeout(function () {
                                        g.classList = f
                                    }))
                                }
                            }, {
                                key: "_destroyBackdrop",
                                value: function () {
                                    var a = document.querySelector("[data-hs-overlay-backdrop-template]");
                                    a && (this.openNextOverlay && (a.style.transitionDuration = "".concat(1.8 * parseFloat(window.getComputedStyle(a).transitionDuration.replace(/[^\d.-]/g, "")), "s")), a.classList.add("opacity-0"), this.afterTransition(a, function () {
                                        a.remove()
                                    }))
                                }
                            }, {
                                key: "_focusInput",
                                value: function (a) {
                                    var e = a.querySelector("[autofocus]");
                                    e && e.focus()
                                }
                            }]) && L(p.prototype, s), Object.defineProperty(p, "prototype", {
                                writable: !1
                            }), v
                        }(O(765).Z);
                        window.HSOverlay = new S, document.addEventListener("load", window.HSOverlay.init())
                    },
                    181: (Z, b, O) => {
                        function H(S) {
                            return H = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (M) {
                                return typeof M
                            } : function (M) {
                                return M && typeof Symbol == "function" && M.constructor === Symbol && M !== Symbol.prototype ? "symbol" : typeof M
                            }, H(S)
                        }

                        function D(S, M) {
                            for (var p = 0; p < M.length; p++) {
                                var s = M[p];
                                s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(S, s.key, s)
                            }
                        }

                        function L(S, M) {
                            return L = Object.setPrototypeOf || function (p, s) {
                                return p.__proto__ = s, p
                            }, L(S, M)
                        }

                        function B(S, M) {
                            if (M && (H(M) === "object" || typeof M == "function")) return M;
                            if (M !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                            return function (p) {
                                if (p === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return p
                            }(S)
                        }

                        function z(S) {
                            return z = Object.setPrototypeOf ? Object.getPrototypeOf : function (M) {
                                return M.__proto__ || Object.getPrototypeOf(M)
                            }, z(S)
                        }
                        var _ = function (S) {
                            (function (v, a) {
                                if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function");
                                v.prototype = Object.create(a && a.prototype, {
                                    constructor: {
                                        value: v,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(v, "prototype", {
                                    writable: !1
                                }), a && L(v, a)
                            })(w, S);
                            var M, p, s, m, A = (s = w, m = function () {
                                if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                                if (typeof Proxy == "function") return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                                } catch {
                                    return !1
                                }
                            }(), function () {
                                var v, a = z(s);
                                if (m) {
                                    var e = z(this).constructor;
                                    v = Reflect.construct(a, arguments, e)
                                } else v = a.apply(this, arguments);
                                return B(this, v)
                            });

                            function w() {
                                return function (v, a) {
                                    if (!(v instanceof a)) throw new TypeError("Cannot call a class as a function")
                                }(this, w), A.call(this, "[data-hs-remove-element]")
                            }
                            return M = w, (p = [{
                                key: "init",
                                value: function () {
                                    var v = this;
                                    document.addEventListener("click", function (a) {
                                        var e = a.target.closest(v.selector);
                                        if (e) {
                                            var y = document.querySelector(e.getAttribute("data-hs-remove-element"));
                                            y && (y.classList.add("hs-removing"), v.afterTransition(y, function () {
                                                y.remove()
                                            }))
                                        }
                                    })
                                }
                            }]) && D(M.prototype, p), Object.defineProperty(M, "prototype", {
                                writable: !1
                            }), w
                        }(O(765).Z);
                        window.HSRemoveElement = new _, document.addEventListener("load", window.HSRemoveElement.init())
                    },
                    778: (Z, b, O) => {
                        function H(S) {
                            return H = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (M) {
                                return typeof M
                            } : function (M) {
                                return M && typeof Symbol == "function" && M.constructor === Symbol && M !== Symbol.prototype ? "symbol" : typeof M
                            }, H(S)
                        }

                        function D(S, M) {
                            for (var p = 0; p < M.length; p++) {
                                var s = M[p];
                                s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(S, s.key, s)
                            }
                        }

                        function L(S, M) {
                            return L = Object.setPrototypeOf || function (p, s) {
                                return p.__proto__ = s, p
                            }, L(S, M)
                        }

                        function B(S, M) {
                            if (M && (H(M) === "object" || typeof M == "function")) return M;
                            if (M !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                            return function (p) {
                                if (p === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return p
                            }(S)
                        }

                        function z(S) {
                            return z = Object.setPrototypeOf ? Object.getPrototypeOf : function (M) {
                                return M.__proto__ || Object.getPrototypeOf(M)
                            }, z(S)
                        }
                        var _ = function (S) {
                            (function (v, a) {
                                if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function");
                                v.prototype = Object.create(a && a.prototype, {
                                    constructor: {
                                        value: v,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(v, "prototype", {
                                    writable: !1
                                }), a && L(v, a)
                            })(w, S);
                            var M, p, s, m, A = (s = w, m = function () {
                                if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                                if (typeof Proxy == "function") return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                                } catch {
                                    return !1
                                }
                            }(), function () {
                                var v, a = z(s);
                                if (m) {
                                    var e = z(this).constructor;
                                    v = Reflect.construct(a, arguments, e)
                                } else v = a.apply(this, arguments);
                                return B(this, v)
                            });

                            function w() {
                                var v;
                                return function (a, e) {
                                    if (!(a instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, w), (v = A.call(this, "[data-hs-scrollspy] ")).activeSection = null, v
                            }
                            return M = w, (p = [{
                                key: "init",
                                value: function () {
                                    var v = this;
                                    document.querySelectorAll(this.selector).forEach(function (a) {
                                        var e = document.querySelector(a.getAttribute("data-hs-scrollspy")),
                                            y = a.querySelectorAll("[href]"),
                                            x = e.children,
                                            g = a.getAttribute("data-hs-scrollspy-scrollable-parent") ? document.querySelector(a.getAttribute("data-hs-scrollspy-scrollable-parent")) : document;
                                        Array.from(x).forEach(function (f) {
                                            f.getAttribute("id") && g.addEventListener("scroll", function (C) {
                                                return v._update({
                                                    $scrollspyEl: a,
                                                    $scrollspyContentEl: e,
                                                    links: y,
                                                    $sectionEl: f,
                                                    sections: x,
                                                    ev: C
                                                })
                                            })
                                        }), y.forEach(function (f) {
                                            f.addEventListener("click", function (C) {
                                                C.preventDefault(), f.getAttribute("href") !== "javascript:;" && v._scrollTo({
                                                    $scrollspyEl: a,
                                                    $scrollableEl: g,
                                                    $link: f
                                                })
                                            })
                                        })
                                    })
                                }
                            }, {
                                key: "_update",
                                value: function (v) {
                                    var a = v.ev,
                                        e = v.$scrollspyEl,
                                        y = (v.sections, v.links),
                                        x = v.$sectionEl,
                                        g = parseInt(this.getClassProperty(e, "--scrollspy-offset", "0")),
                                        f = this.getClassProperty(x, "--scrollspy-offset") || g,
                                        C = a.target === document ? 0 : parseInt(a.target.getBoundingClientRect().top),
                                        T = parseInt(x.getBoundingClientRect().top) - f - C,
                                        F = x.offsetHeight;
                                    if (T <= 0 && T + F > 0) {
                                        if (this.activeSection === x) return;
                                        y.forEach(function (C1) {
                                            C1.classList.remove("active")
                                        });
                                        var j = e.querySelector('[href="#'.concat(x.getAttribute("id"), '"]'));
                                        if (j) {
                                            j.classList.add("active");
                                            var o1 = j.closest("[data-hs-scrollspy-group]");
                                            if (o1) {
                                                var t1 = o1.querySelector("[href]");
                                                t1 && t1.classList.add("active")
                                            }
                                        }
                                        this.activeSection = x
                                    }
                                }
                            }, {
                                key: "_scrollTo",
                                value: function (v) {
                                    var a = v.$scrollspyEl,
                                        e = v.$scrollableEl,
                                        y = v.$link,
                                        x = document.querySelector(y.getAttribute("href")),
                                        g = parseInt(this.getClassProperty(a, "--scrollspy-offset", "0")),
                                        f = this.getClassProperty(x, "--scrollspy-offset") || g,
                                        C = e === document ? 0 : e.offsetTop,
                                        T = x.offsetTop - f - C,
                                        F = e === document ? window : e;
                                    this._fireEvent("scroll", a), this._dispatch("scroll.hs.scrollspy", a, a), window.history.replaceState(null, null, y.getAttribute("href")), F.scrollTo({
                                        top: T,
                                        left: 0,
                                        behavior: "smooth"
                                    })
                                }
                            }]) && D(M.prototype, p), Object.defineProperty(M, "prototype", {
                                writable: !1
                            }), w
                        }(O(765).Z);
                        window.HSScrollspy = new _, document.addEventListener("load", window.HSScrollspy.init())
                    },
                    51: (Z, b, O) => {
                        function H(p) {
                            return H = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (s) {
                                return typeof s
                            } : function (s) {
                                return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s
                            }, H(p)
                        }

                        function D(p) {
                            return function (s) {
                                if (Array.isArray(s)) return L(s)
                            }(p) || function (s) {
                                if (typeof Symbol < "u" && s[Symbol.iterator] != null || s["@@iterator"] != null) return Array.from(s)
                            }(p) || function (s, m) {
                                if (s) {
                                    if (typeof s == "string") return L(s, m);
                                    var A = Object.prototype.toString.call(s).slice(8, -1);
                                    return A === "Object" && s.constructor && (A = s.constructor.name), A === "Map" || A === "Set" ? Array.from(s) : A === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A) ? L(s, m) : void 0
                                }
                            }(p) || function () {
                                throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
                            }()
                        }

                        function L(p, s) {
                            (s == null || s > p.length) && (s = p.length);
                            for (var m = 0, A = new Array(s); m < s; m++) A[m] = p[m];
                            return A
                        }

                        function B(p, s) {
                            for (var m = 0; m < s.length; m++) {
                                var A = s[m];
                                A.enumerable = A.enumerable || !1, A.configurable = !0, "value" in A && (A.writable = !0), Object.defineProperty(p, A.key, A)
                            }
                        }

                        function z(p, s) {
                            return z = Object.setPrototypeOf || function (m, A) {
                                return m.__proto__ = A, m
                            }, z(p, s)
                        }

                        function _(p, s) {
                            if (s && (H(s) === "object" || typeof s == "function")) return s;
                            if (s !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                            return function (m) {
                                if (m === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return m
                            }(p)
                        }

                        function S(p) {
                            return S = Object.setPrototypeOf ? Object.getPrototypeOf : function (s) {
                                return s.__proto__ || Object.getPrototypeOf(s)
                            }, S(p)
                        }
                        var M = function (p) {
                            (function (e, y) {
                                if (typeof y != "function" && y !== null) throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(y && y.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(e, "prototype", {
                                    writable: !1
                                }), y && z(e, y)
                            })(a, p);
                            var s, m, A, w, v = (A = a, w = function () {
                                if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                                if (typeof Proxy == "function") return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                                } catch {
                                    return !1
                                }
                            }(), function () {
                                var e, y = S(A);
                                if (w) {
                                    var x = S(this).constructor;
                                    e = Reflect.construct(y, arguments, x)
                                } else e = y.apply(this, arguments);
                                return _(this, e)
                            });

                            function a() {
                                return function (e, y) {
                                    if (!(e instanceof y)) throw new TypeError("Cannot call a class as a function")
                                }(this, a), v.call(this, "[data-hs-tab]")
                            }
                            return s = a, (m = [{
                                key: "init",
                                value: function () {
                                    var e = this;
                                    document.addEventListener("keydown", this._keyboardSupport.bind(this)), document.addEventListener("click", function (y) {
                                        var x = y.target.closest(e.selector);
                                        x && e.open(x)
                                    }), document.querySelectorAll("[hs-data-tab-select]").forEach(function (y) {
                                        var x = document.querySelector(y.getAttribute("hs-data-tab-select"));
                                        x && x.addEventListener("change", function (g) {
                                            var f = document.querySelector('[data-hs-tab="'.concat(g.target.value, '"]'));
                                            f && e.open(f)
                                        })
                                    })
                                }
                            }, {
                                key: "open",
                                value: function (e) {
                                    var y = document.querySelector(e.getAttribute("data-hs-tab")),
                                        x = D(e.parentElement.children),
                                        g = D(y.parentElement.children),
                                        f = e.closest("[hs-data-tab-select]"),
                                        C = f ? document.querySelector(f.getAttribute("data-hs-tab")) : null;
                                    x.forEach(function (T) {
                                        return T.classList.remove("active")
                                    }), g.forEach(function (T) {
                                        return T.classList.add("hidden")
                                    }), e.classList.add("active"), y.classList.remove("hidden"), this._fireEvent("change", e), this._dispatch("change.hs.tab", e, e), C && (C.value = e.getAttribute("data-hs-tab"))
                                }
                            }, {
                                key: "_keyboardSupport",
                                value: function (e) {
                                    var y = e.target.closest(this.selector);
                                    if (y) {
                                        var x = y.closest('[role="tablist"]').getAttribute("data-hs-tabs-vertical") === "true";
                                        return (x ? e.keyCode === 38 : e.keyCode === 37) ? (e.preventDefault(), this._left(y)) : (x ? e.keyCode === 40 : e.keyCode === 39) ? (e.preventDefault(), this._right(y)) : e.keyCode === 36 ? (e.preventDefault(), this._start(y)) : e.keyCode === 35 ? (e.preventDefault(), this._end(y)) : void 0
                                    }
                                }
                            }, {
                                key: "_right",
                                value: function (e) {
                                    var y = e.closest('[role="tablist"]');
                                    if (y) {
                                        var x = D(y.querySelectorAll(this.selector)).filter(function (C) {
                                                return !C.disabled
                                            }),
                                            g = y.querySelector("button:focus"),
                                            f = x.findIndex(function (C) {
                                                return C === g
                                            });
                                        f + 1 < x.length ? f++ : f = 0, x[f].focus(), this.open(x[f])
                                    }
                                }
                            }, {
                                key: "_left",
                                value: function (e) {
                                    var y = e.closest('[role="tablist"]');
                                    if (y) {
                                        var x = D(y.querySelectorAll(this.selector)).filter(function (C) {
                                                return !C.disabled
                                            }).reverse(),
                                            g = y.querySelector("button:focus"),
                                            f = x.findIndex(function (C) {
                                                return C === g
                                            });
                                        f + 1 < x.length ? f++ : f = 0, x[f].focus(), this.open(x[f])
                                    }
                                }
                            }, {
                                key: "_start",
                                value: function (e) {
                                    var y = e.closest('[role="tablist"]');
                                    if (y) {
                                        var x = D(y.querySelectorAll(this.selector)).filter(function (g) {
                                            return !g.disabled
                                        });
                                        x.length && (x[0].focus(), this.open(x[0]))
                                    }
                                }
                            }, {
                                key: "_end",
                                value: function (e) {
                                    var y = e.closest('[role="tablist"]');
                                    if (y) {
                                        var x = D(y.querySelectorAll(this.selector)).reverse().filter(function (g) {
                                            return !g.disabled
                                        });
                                        x.length && (x[0].focus(), this.open(x[0]))
                                    }
                                }
                            }]) && B(s.prototype, m), Object.defineProperty(s, "prototype", {
                                writable: !1
                            }), a
                        }(O(765).Z);
                        window.HSTabs = new M, document.addEventListener("load", window.HSTabs.init())
                    },
                    185: (Z, b, O) => {
                        var H = O(765),
                            D = O(714);

                        function L(p) {
                            return L = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (s) {
                                return typeof s
                            } : function (s) {
                                return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s
                            }, L(p)
                        }

                        function B(p, s) {
                            for (var m = 0; m < s.length; m++) {
                                var A = s[m];
                                A.enumerable = A.enumerable || !1, A.configurable = !0, "value" in A && (A.writable = !0), Object.defineProperty(p, A.key, A)
                            }
                        }

                        function z(p, s) {
                            return z = Object.setPrototypeOf || function (m, A) {
                                return m.__proto__ = A, m
                            }, z(p, s)
                        }

                        function _(p, s) {
                            if (s && (L(s) === "object" || typeof s == "function")) return s;
                            if (s !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                            return function (m) {
                                if (m === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return m
                            }(p)
                        }

                        function S(p) {
                            return S = Object.setPrototypeOf ? Object.getPrototypeOf : function (s) {
                                return s.__proto__ || Object.getPrototypeOf(s)
                            }, S(p)
                        }
                        var M = function (p) {
                            (function (e, y) {
                                if (typeof y != "function" && y !== null) throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(y && y.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(e, "prototype", {
                                    writable: !1
                                }), y && z(e, y)
                            })(a, p);
                            var s, m, A, w, v = (A = a, w = function () {
                                if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                                if (typeof Proxy == "function") return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                                } catch {
                                    return !1
                                }
                            }(), function () {
                                var e, y = S(A);
                                if (w) {
                                    var x = S(this).constructor;
                                    e = Reflect.construct(y, arguments, x)
                                } else e = y.apply(this, arguments);
                                return _(this, e)
                            });

                            function a() {
                                return function (e, y) {
                                    if (!(e instanceof y)) throw new TypeError("Cannot call a class as a function")
                                }(this, a), v.call(this, ".hs-tooltip")
                            }
                            return s = a, (m = [{
                                key: "init",
                                value: function () {
                                    var e = this;
                                    document.addEventListener("click", function (y) {
                                        var x = y.target.closest(e.selector);
                                        x && e.getClassProperty(x, "--trigger") === "focus" && e._focus(x), x && e.getClassProperty(x, "--trigger") === "click" && e._click(x)
                                    }), document.addEventListener("mousemove", function (y) {
                                        var x = y.target.closest(e.selector);
                                        x && e.getClassProperty(x, "--trigger") !== "focus" && e.getClassProperty(x, "--trigger") !== "click" && e._hover(x)
                                    })
                                }
                            }, {
                                key: "_hover",
                                value: function (e) {
                                    var y = this;
                                    if (!e.classList.contains("show")) {
                                        var x = e.querySelector(".hs-tooltip-toggle"),
                                            g = e.querySelector(".hs-tooltip-content"),
                                            f = this.getClassProperty(e, "--placement");
                                        (0, D.fi)(x, g, {
                                            placement: f || "top",
                                            strategy: "fixed",
                                            modifiers: [{
                                                name: "offset",
                                                options: {
                                                    offset: [0, 5]
                                                }
                                            }]
                                        }), this.show(e), e.addEventListener("mouseleave", function C(T) {
                                            T.relatedTarget.closest(y.selector) && T.relatedTarget.closest(y.selector) == e || (y.hide(e), e.removeEventListener("mouseleave", C, !0))
                                        }, !0)
                                    }
                                }
                            }, {
                                key: "_focus",
                                value: function (e) {
                                    var y = this,
                                        x = e.querySelector(".hs-tooltip-toggle"),
                                        g = e.querySelector(".hs-tooltip-content"),
                                        f = this.getClassProperty(e, "--placement"),
                                        C = this.getClassProperty(e, "--strategy");
                                    (0, D.fi)(x, g, {
                                        placement: f || "top",
                                        strategy: C || "fixed",
                                        modifiers: [{
                                            name: "offset",
                                            options: {
                                                offset: [0, 5]
                                            }
                                        }]
                                    }), this.show(e), e.addEventListener("blur", function T() {
                                        y.hide(e), e.removeEventListener("blur", T, !0)
                                    }, !0)
                                }
                            }, {
                                key: "_click",
                                value: function (e) {
                                    var y = this;
                                    if (!e.classList.contains("show")) {
                                        var x = e.querySelector(".hs-tooltip-toggle"),
                                            g = e.querySelector(".hs-tooltip-content"),
                                            f = this.getClassProperty(e, "--placement"),
                                            C = this.getClassProperty(e, "--strategy");
                                        (0, D.fi)(x, g, {
                                            placement: f || "top",
                                            strategy: C || "fixed",
                                            modifiers: [{
                                                name: "offset",
                                                options: {
                                                    offset: [0, 5]
                                                }
                                            }]
                                        }), this.show(e);
                                        var T = function F(j) {
                                            setTimeout(function () {
                                                y.hide(e), e.removeEventListener("click", F, !0), e.removeEventListener("blur", F, !0)
                                            })
                                        };
                                        e.addEventListener("blur", T, !0), e.addEventListener("click", T, !0)
                                    }
                                }
                            }, {
                                key: "show",
                                value: function (e) {
                                    var y = this;
                                    e.querySelector(".hs-tooltip-content").classList.remove("hidden"), setTimeout(function () {
                                        e.classList.add("show"), y._fireEvent("show", e), y._dispatch("show.hs.tooltip", e, e)
                                    })
                                }
                            }, {
                                key: "hide",
                                value: function (e) {
                                    var y = e.querySelector(".hs-tooltip-content");
                                    e.classList.remove("show"), this._fireEvent("hide", e), this._dispatch("hide.hs.tooltip", e, e), this.afterTransition(y, function () {
                                        e.classList.contains("show") || y.classList.add("hidden")
                                    })
                                }
                            }]) && B(s.prototype, m), Object.defineProperty(s, "prototype", {
                                writable: !1
                            }), a
                        }(H.Z);
                        window.HSTooltip = new M, document.addEventListener("load", window.HSTooltip.init())
                    },
                    765: (Z, b, O) => {
                        function H(L, B) {
                            for (var z = 0; z < B.length; z++) {
                                var _ = B[z];
                                _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(L, _.key, _)
                            }
                        }
                        O.d(b, {
                            Z: () => D
                        });
                        var D = function () {
                            function L(_, S) {
                                (function (M, p) {
                                    if (!(M instanceof p)) throw new TypeError("Cannot call a class as a function")
                                })(this, L), this.$collection = [], this.selector = _, this.config = S, this.events = {}
                            }
                            var B, z;
                            return B = L, z = [{
                                key: "_fireEvent",
                                value: function (_) {
                                    var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                                    this.events.hasOwnProperty(_) && this.events[_](S)
                                }
                            }, {
                                key: "_dispatch",
                                value: function (_, S) {
                                    var M = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null,
                                        p = new CustomEvent(_, {
                                            detail: {
                                                payload: M
                                            },
                                            bubbles: !0,
                                            cancelable: !0,
                                            composed: !1
                                        });
                                    S.dispatchEvent(p)
                                }
                            }, {
                                key: "on",
                                value: function (_, S) {
                                    this.events[_] = S
                                }
                            }, {
                                key: "afterTransition",
                                value: function (_, S) {
                                    window.getComputedStyle(_, null).getPropertyValue("transition") !== "all 0s ease 0s" ? _.addEventListener("transitionend", function M() {
                                        S(), _.removeEventListener("transitionend", M, !0)
                                    }, !0) : S()
                                }
                            }, {
                                key: "getClassProperty",
                                value: function (_, S) {
                                    var M = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "",
                                        p = (window.getComputedStyle(_).getPropertyValue(S) || M).replace(" ", "");
                                    return p
                                }
                            }], z && H(B.prototype, z), Object.defineProperty(B, "prototype", {
                                writable: !1
                            }), L
                        }()
                    },
                    714: (Z, b, O) => {
                        function H(o) {
                            if (o == null) return window;
                            if (o.toString() !== "[object Window]") {
                                var r = o.ownerDocument;
                                return r && r.defaultView || window
                            }
                            return o
                        }

                        function D(o) {
                            return o instanceof H(o).Element || o instanceof Element
                        }

                        function L(o) {
                            return o instanceof H(o).HTMLElement || o instanceof HTMLElement
                        }

                        function B(o) {
                            return typeof ShadowRoot < "u" && (o instanceof H(o).ShadowRoot || o instanceof ShadowRoot)
                        }
                        O.d(b, {
                            fi: () => ct
                        });
                        var z = Math.max,
                            _ = Math.min,
                            S = Math.round;

                        function M(o, r) {
                            r === void 0 && (r = !1);
                            var d = o.getBoundingClientRect(),
                                u = 1,
                                P = 1;
                            if (L(o) && r) {
                                var E = o.offsetHeight,
                                    k = o.offsetWidth;
                                k > 0 && (u = S(d.width) / k || 1), E > 0 && (P = S(d.height) / E || 1)
                            }
                            return {
                                width: d.width / u,
                                height: d.height / P,
                                top: d.top / P,
                                right: d.right / u,
                                bottom: d.bottom / P,
                                left: d.left / u,
                                x: d.left / u,
                                y: d.top / P
                            }
                        }

                        function p(o) {
                            var r = H(o);
                            return {
                                scrollLeft: r.pageXOffset,
                                scrollTop: r.pageYOffset
                            }
                        }

                        function s(o) {
                            return o ? (o.nodeName || "").toLowerCase() : null
                        }

                        function m(o) {
                            return ((D(o) ? o.ownerDocument : o.document) || window.document).documentElement
                        }

                        function A(o) {
                            return M(m(o)).left + p(o).scrollLeft
                        }

                        function w(o) {
                            return H(o).getComputedStyle(o)
                        }

                        function v(o) {
                            var r = w(o),
                                d = r.overflow,
                                u = r.overflowX,
                                P = r.overflowY;
                            return /auto|scroll|overlay|hidden/.test(d + P + u)
                        }

                        function a(o, r, d) {
                            d === void 0 && (d = !1);
                            var u, P, E = L(r),
                                k = L(r) && function (W) {
                                    var s1 = W.getBoundingClientRect(),
                                        G = S(s1.width) / W.offsetWidth || 1,
                                        a1 = S(s1.height) / W.offsetHeight || 1;
                                    return G !== 1 || a1 !== 1
                                }(r),
                                R = m(r),
                                q = M(o, k),
                                N = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                I = {
                                    x: 0,
                                    y: 0
                                };
                            return (E || !E && !d) && ((s(r) !== "body" || v(R)) && (N = (u = r) !== H(u) && L(u) ? {
                                scrollLeft: (P = u).scrollLeft,
                                scrollTop: P.scrollTop
                            } : p(u)), L(r) ? ((I = M(r, !0)).x += r.clientLeft, I.y += r.clientTop) : R && (I.x = A(R))), {
                                x: q.left + N.scrollLeft - I.x,
                                y: q.top + N.scrollTop - I.y,
                                width: q.width,
                                height: q.height
                            }
                        }

                        function e(o) {
                            var r = M(o),
                                d = o.offsetWidth,
                                u = o.offsetHeight;
                            return Math.abs(r.width - d) <= 1 && (d = r.width), Math.abs(r.height - u) <= 1 && (u = r.height), {
                                x: o.offsetLeft,
                                y: o.offsetTop,
                                width: d,
                                height: u
                            }
                        }

                        function y(o) {
                            return s(o) === "html" ? o : o.assignedSlot || o.parentNode || (B(o) ? o.host : null) || m(o)
                        }

                        function x(o) {
                            return ["html", "body", "#document"].indexOf(s(o)) >= 0 ? o.ownerDocument.body : L(o) && v(o) ? o : x(y(o))
                        }

                        function g(o, r) {
                            var d;
                            r === void 0 && (r = []);
                            var u = x(o),
                                P = u === ((d = o.ownerDocument) == null ? void 0 : d.body),
                                E = H(u),
                                k = P ? [E].concat(E.visualViewport || [], v(u) ? u : []) : u,
                                R = r.concat(k);
                            return P ? R : R.concat(g(y(k)))
                        }

                        function f(o) {
                            return ["table", "td", "th"].indexOf(s(o)) >= 0
                        }

                        function C(o) {
                            return L(o) && w(o).position !== "fixed" ? o.offsetParent : null
                        }

                        function T(o) {
                            for (var r = H(o), d = C(o); d && f(d) && w(d).position === "static";) d = C(d);
                            return d && (s(d) === "html" || s(d) === "body" && w(d).position === "static") ? r : d || function (u) {
                                var P = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
                                if (navigator.userAgent.indexOf("Trident") !== -1 && L(u) && w(u).position === "fixed") return null;
                                for (var E = y(u); L(E) && ["html", "body"].indexOf(s(E)) < 0;) {
                                    var k = w(E);
                                    if (k.transform !== "none" || k.perspective !== "none" || k.contain === "paint" || ["transform", "perspective"].indexOf(k.willChange) !== -1 || P && k.willChange === "filter" || P && k.filter && k.filter !== "none") return E;
                                    E = E.parentNode
                                }
                                return null
                            }(o) || r
                        }
                        var F = "top",
                            j = "bottom",
                            o1 = "right",
                            t1 = "left",
                            C1 = "auto",
                            O1 = [F, j, o1, t1],
                            L1 = "start",
                            E1 = "end",
                            U1 = "viewport",
                            c1 = "popper",
                            G1 = O1.reduce(function (o, r) {
                                return o.concat([r + "-" + L1, r + "-" + E1])
                            }, []),
                            S1 = [].concat(O1, [C1]).reduce(function (o, r) {
                                return o.concat([r, r + "-" + L1, r + "-" + E1])
                            }, []),
                            at = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

                        function et(o) {
                            var r = new Map,
                                d = new Set,
                                u = [];

                            function P(E) {
                                d.add(E.name), [].concat(E.requires || [], E.requiresIfExists || []).forEach(function (k) {
                                    if (!d.has(k)) {
                                        var R = r.get(k);
                                        R && P(R)
                                    }
                                }), u.push(E)
                            }
                            return o.forEach(function (E) {
                                r.set(E.name, E)
                            }), o.forEach(function (E) {
                                d.has(E.name) || P(E)
                            }), u
                        }
                        var w2 = {
                            placement: "bottom",
                            modifiers: [],
                            strategy: "absolute"
                        };

                        function b2() {
                            for (var o = arguments.length, r = new Array(o), d = 0; d < o; d++) r[d] = arguments[d];
                            return !r.some(function (u) {
                                return !(u && typeof u.getBoundingClientRect == "function")
                            })
                        }

                        function ht(o) {
                            o === void 0 && (o = {});
                            var r = o,
                                d = r.defaultModifiers,
                                u = d === void 0 ? [] : d,
                                P = r.defaultOptions,
                                E = P === void 0 ? w2 : P;
                            return function (k, R, q) {
                                q === void 0 && (q = E);
                                var N, I, W = {
                                        placement: "bottom",
                                        orderedModifiers: [],
                                        options: Object.assign({}, w2, E),
                                        modifiersData: {},
                                        elements: {
                                            reference: k,
                                            popper: R
                                        },
                                        attributes: {},
                                        styles: {}
                                    },
                                    s1 = [],
                                    G = !1,
                                    a1 = {
                                        state: W,
                                        setOptions: function (U) {
                                            var i1 = typeof U == "function" ? U(W.options) : U;
                                            J(), W.options = Object.assign({}, E, W.options, i1), W.scrollParents = {
                                                reference: D(k) ? g(k) : k.contextElement ? g(k.contextElement) : [],
                                                popper: g(R)
                                            };
                                            var n1, Y, e1 = function (X) {
                                                var $ = et(X);
                                                return at.reduce(function (K, Q) {
                                                    return K.concat($.filter(function (h1) {
                                                        return h1.phase === Q
                                                    }))
                                                }, [])
                                            }((n1 = [].concat(u, W.options.modifiers), Y = n1.reduce(function (X, $) {
                                                var K = X[$.name];
                                                return X[$.name] = K ? Object.assign({}, K, $, {
                                                    options: Object.assign({}, K.options, $.options),
                                                    data: Object.assign({}, K.data, $.data)
                                                }) : $, X
                                            }, {}), Object.keys(Y).map(function (X) {
                                                return Y[X]
                                            })));
                                            return W.orderedModifiers = e1.filter(function (X) {
                                                return X.enabled
                                            }), W.orderedModifiers.forEach(function (X) {
                                                var $ = X.name,
                                                    K = X.options,
                                                    Q = K === void 0 ? {} : K,
                                                    h1 = X.effect;
                                                if (typeof h1 == "function") {
                                                    var p1 = h1({
                                                        state: W,
                                                        name: $,
                                                        instance: a1,
                                                        options: Q
                                                    });
                                                    s1.push(p1 || function () {})
                                                }
                                            }), a1.update()
                                        },
                                        forceUpdate: function () {
                                            if (!G) {
                                                var U = W.elements,
                                                    i1 = U.reference,
                                                    n1 = U.popper;
                                                if (b2(i1, n1)) {
                                                    W.rects = {
                                                        reference: a(i1, T(n1), W.options.strategy === "fixed"),
                                                        popper: e(n1)
                                                    }, W.reset = !1, W.placement = W.options.placement, W.orderedModifiers.forEach(function (h1) {
                                                        return W.modifiersData[h1.name] = Object.assign({}, h1.data)
                                                    });
                                                    for (var Y = 0; Y < W.orderedModifiers.length; Y++)
                                                        if (W.reset !== !0) {
                                                            var e1 = W.orderedModifiers[Y],
                                                                X = e1.fn,
                                                                $ = e1.options,
                                                                K = $ === void 0 ? {} : $,
                                                                Q = e1.name;
                                                            typeof X == "function" && (W = X({
                                                                state: W,
                                                                options: K,
                                                                name: Q,
                                                                instance: a1
                                                            }) || W)
                                                        } else W.reset = !1, Y = -1
                                                }
                                            }
                                        },
                                        update: (N = function () {
                                            return new Promise(function (U) {
                                                a1.forceUpdate(), U(W)
                                            })
                                        }, function () {
                                            return I || (I = new Promise(function (U) {
                                                Promise.resolve().then(function () {
                                                    I = void 0, U(N())
                                                })
                                            })), I
                                        }),
                                        destroy: function () {
                                            J(), G = !0
                                        }
                                    };
                                if (!b2(k, R)) return a1;

                                function J() {
                                    s1.forEach(function (U) {
                                        return U()
                                    }), s1 = []
                                }
                                return a1.setOptions(q).then(function (U) {
                                    !G && q.onFirstUpdate && q.onFirstUpdate(U)
                                }), a1
                            }
                        }
                        var J1 = {
                            passive: !0
                        };

                        function H1(o) {
                            return o.split("-")[0]
                        }

                        function B1(o) {
                            return o.split("-")[1]
                        }

                        function s2(o) {
                            return ["top", "bottom"].indexOf(o) >= 0 ? "x" : "y"
                        }

                        function H2(o) {
                            var r, d = o.reference,
                                u = o.element,
                                P = o.placement,
                                E = P ? H1(P) : null,
                                k = P ? B1(P) : null,
                                R = d.x + d.width / 2 - u.width / 2,
                                q = d.y + d.height / 2 - u.height / 2;
                            switch (E) {
                                case F:
                                    r = {
                                        x: R,
                                        y: d.y - u.height
                                    };
                                    break;
                                case j:
                                    r = {
                                        x: R,
                                        y: d.y + d.height
                                    };
                                    break;
                                case o1:
                                    r = {
                                        x: d.x + d.width,
                                        y: q
                                    };
                                    break;
                                case t1:
                                    r = {
                                        x: d.x - u.width,
                                        y: q
                                    };
                                    break;
                                default:
                                    r = {
                                        x: d.x,
                                        y: d.y
                                    }
                            }
                            var N = E ? s2(E) : null;
                            if (N != null) {
                                var I = N === "y" ? "height" : "width";
                                switch (k) {
                                    case L1:
                                        r[N] = r[N] - (d[I] / 2 - u[I] / 2);
                                        break;
                                    case E1:
                                        r[N] = r[N] + (d[I] / 2 - u[I] / 2)
                                }
                            }
                            return r
                        }
                        var nt = {
                            top: "auto",
                            right: "auto",
                            bottom: "auto",
                            left: "auto"
                        };

                        function V2(o) {
                            var r, d = o.popper,
                                u = o.popperRect,
                                P = o.placement,
                                E = o.variation,
                                k = o.offsets,
                                R = o.position,
                                q = o.gpuAcceleration,
                                N = o.adaptive,
                                I = o.roundOffsets,
                                W = o.isFixed,
                                s1 = k.x,
                                G = s1 === void 0 ? 0 : s1,
                                a1 = k.y,
                                J = a1 === void 0 ? 0 : a1,
                                U = typeof I == "function" ? I({
                                    x: G,
                                    y: J
                                }) : {
                                    x: G,
                                    y: J
                                };
                            G = U.x, J = U.y;
                            var i1 = k.hasOwnProperty("x"),
                                n1 = k.hasOwnProperty("y"),
                                Y = t1,
                                e1 = F,
                                X = window;
                            if (N) {
                                var $ = T(d),
                                    K = "clientHeight",
                                    Q = "clientWidth";
                                $ === H(d) && w($ = m(d)).position !== "static" && R === "absolute" && (K = "scrollHeight", Q = "scrollWidth"), $ = $, (P === F || (P === t1 || P === o1) && E === E1) && (e1 = j, J -= (W && X.visualViewport ? X.visualViewport.height : $[K]) - u.height, J *= q ? 1 : -1), P !== t1 && (P !== F && P !== j || E !== E1) || (Y = o1, G -= (W && X.visualViewport ? X.visualViewport.width : $[Q]) - u.width, G *= q ? 1 : -1)
                            }
                            var h1, p1 = Object.assign({
                                    position: R
                                }, N && nt),
                                l1 = I === !0 ? function (y1) {
                                    var m1 = y1.x,
                                        A1 = y1.y,
                                        g1 = window.devicePixelRatio || 1;
                                    return {
                                        x: S(m1 * g1) / g1 || 0,
                                        y: S(A1 * g1) / g1 || 0
                                    }
                                }({
                                    x: G,
                                    y: J
                                }) : {
                                    x: G,
                                    y: J
                                };
                            return G = l1.x, J = l1.y, q ? Object.assign({}, p1, ((h1 = {})[e1] = n1 ? "0" : "", h1[Y] = i1 ? "0" : "", h1.transform = (X.devicePixelRatio || 1) <= 1 ? "translate(" + G + "px, " + J + "px)" : "translate3d(" + G + "px, " + J + "px, 0)", h1)) : Object.assign({}, p1, ((r = {})[e1] = n1 ? J + "px" : "", r[Y] = i1 ? G + "px" : "", r.transform = "", r))
                        }
                        var rt = {
                            left: "right",
                            right: "left",
                            bottom: "top",
                            top: "bottom"
                        };

                        function Q1(o) {
                            return o.replace(/left|right|bottom|top/g, function (r) {
                                return rt[r]
                            })
                        }
                        var ot = {
                            start: "end",
                            end: "start"
                        };

                        function L2(o) {
                            return o.replace(/start|end/g, function (r) {
                                return ot[r]
                            })
                        }

                        function S2(o, r) {
                            var d = r.getRootNode && r.getRootNode();
                            if (o.contains(r)) return !0;
                            if (d && B(d)) {
                                var u = r;
                                do {
                                    if (u && o.isSameNode(u)) return !0;
                                    u = u.parentNode || u.host
                                } while (u)
                            }
                            return !1
                        }

                        function i2(o) {
                            return Object.assign({}, o, {
                                left: o.x,
                                top: o.y,
                                right: o.x + o.width,
                                bottom: o.y + o.height
                            })
                        }

                        function A2(o, r) {
                            return r === U1 ? i2(function (d) {
                                var u = H(d),
                                    P = m(d),
                                    E = u.visualViewport,
                                    k = P.clientWidth,
                                    R = P.clientHeight,
                                    q = 0,
                                    N = 0;
                                return E && (k = E.width, R = E.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (q = E.offsetLeft, N = E.offsetTop)), {
                                    width: k,
                                    height: R,
                                    x: q + A(d),
                                    y: N
                                }
                            }(o)) : D(r) ? function (d) {
                                var u = M(d);
                                return u.top = u.top + d.clientTop, u.left = u.left + d.clientLeft, u.bottom = u.top + d.clientHeight, u.right = u.left + d.clientWidth, u.width = d.clientWidth, u.height = d.clientHeight, u.x = u.left, u.y = u.top, u
                            }(r) : i2(function (d) {
                                var u, P = m(d),
                                    E = p(d),
                                    k = (u = d.ownerDocument) == null ? void 0 : u.body,
                                    R = z(P.scrollWidth, P.clientWidth, k ? k.scrollWidth : 0, k ? k.clientWidth : 0),
                                    q = z(P.scrollHeight, P.clientHeight, k ? k.scrollHeight : 0, k ? k.clientHeight : 0),
                                    N = -E.scrollLeft + A(d),
                                    I = -E.scrollTop;
                                return w(k || P).direction === "rtl" && (N += z(P.clientWidth, k ? k.clientWidth : 0) - R), {
                                    width: R,
                                    height: q,
                                    x: N,
                                    y: I
                                }
                            }(m(o)))
                        }

                        function C2(o) {
                            return Object.assign({}, {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            }, o)
                        }

                        function O2(o, r) {
                            return r.reduce(function (d, u) {
                                return d[u] = o, d
                            }, {})
                        }

                        function X1(o, r) {
                            r === void 0 && (r = {});
                            var d = r,
                                u = d.placement,
                                P = u === void 0 ? o.placement : u,
                                E = d.boundary,
                                k = E === void 0 ? "clippingParents" : E,
                                R = d.rootBoundary,
                                q = R === void 0 ? U1 : R,
                                N = d.elementContext,
                                I = N === void 0 ? c1 : N,
                                W = d.altBoundary,
                                s1 = W !== void 0 && W,
                                G = d.padding,
                                a1 = G === void 0 ? 0 : G,
                                J = C2(typeof a1 != "number" ? a1 : O2(a1, O1)),
                                U = I === c1 ? "reference" : c1,
                                i1 = o.rects.popper,
                                n1 = o.elements[s1 ? U : I],
                                Y = function (l1, y1, m1) {
                                    var A1 = y1 === "clippingParents" ? function (r1) {
                                            var k1 = g(y(r1)),
                                                u1 = ["absolute", "fixed"].indexOf(w(r1).position) >= 0 && L(r1) ? T(r1) : r1;
                                            return D(u1) ? k1.filter(function (M1) {
                                                return D(M1) && S2(M1, u1) && s(M1) !== "body"
                                            }) : []
                                        }(l1) : [].concat(y1),
                                        g1 = [].concat(A1, [m1]),
                                        v1 = g1[0],
                                        d1 = g1.reduce(function (r1, k1) {
                                            var u1 = A2(l1, k1);
                                            return r1.top = z(u1.top, r1.top), r1.right = _(u1.right, r1.right), r1.bottom = _(u1.bottom, r1.bottom), r1.left = z(u1.left, r1.left), r1
                                        }, A2(l1, v1));
                                    return d1.width = d1.right - d1.left, d1.height = d1.bottom - d1.top, d1.x = d1.left, d1.y = d1.top, d1
                                }(D(n1) ? n1 : n1.contextElement || m(o.elements.popper), k, q),
                                e1 = M(o.elements.reference),
                                X = H2({
                                    reference: e1,
                                    element: i1,
                                    strategy: "absolute",
                                    placement: P
                                }),
                                $ = i2(Object.assign({}, i1, X)),
                                K = I === c1 ? $ : e1,
                                Q = {
                                    top: Y.top - K.top + J.top,
                                    bottom: K.bottom - Y.bottom + J.bottom,
                                    left: Y.left - K.left + J.left,
                                    right: K.right - Y.right + J.right
                                },
                                h1 = o.modifiersData.offset;
                            if (I === c1 && h1) {
                                var p1 = h1[P];
                                Object.keys(Q).forEach(function (l1) {
                                    var y1 = [o1, j].indexOf(l1) >= 0 ? 1 : -1,
                                        m1 = [F, j].indexOf(l1) >= 0 ? "y" : "x";
                                    Q[l1] += p1[m1] * y1
                                })
                            }
                            return Q
                        }

                        function $1(o, r, d) {
                            return z(o, _(r, d))
                        }

                        function E2(o, r, d) {
                            return d === void 0 && (d = {
                                x: 0,
                                y: 0
                            }), {
                                top: o.top - r.height - d.y,
                                right: o.right - r.width + d.x,
                                bottom: o.bottom - r.height + d.y,
                                left: o.left - r.width - d.x
                            }
                        }

                        function k2(o) {
                            return [F, o1, j, t1].some(function (r) {
                                return o[r] >= 0
                            })
                        }
                        var ct = ht({
                            defaultModifiers: [{
                                name: "eventListeners",
                                enabled: !0,
                                phase: "write",
                                fn: function () {},
                                effect: function (o) {
                                    var r = o.state,
                                        d = o.instance,
                                        u = o.options,
                                        P = u.scroll,
                                        E = P === void 0 || P,
                                        k = u.resize,
                                        R = k === void 0 || k,
                                        q = H(r.elements.popper),
                                        N = [].concat(r.scrollParents.reference, r.scrollParents.popper);
                                    return E && N.forEach(function (I) {
                                            I.addEventListener("scroll", d.update, J1)
                                        }), R && q.addEventListener("resize", d.update, J1),
                                        function () {
                                            E && N.forEach(function (I) {
                                                I.removeEventListener("scroll", d.update, J1)
                                            }), R && q.removeEventListener("resize", d.update, J1)
                                        }
                                },
                                data: {}
                            }, {
                                name: "popperOffsets",
                                enabled: !0,
                                phase: "read",
                                fn: function (o) {
                                    var r = o.state,
                                        d = o.name;
                                    r.modifiersData[d] = H2({
                                        reference: r.rects.reference,
                                        element: r.rects.popper,
                                        strategy: "absolute",
                                        placement: r.placement
                                    })
                                },
                                data: {}
                            }, {
                                name: "computeStyles",
                                enabled: !0,
                                phase: "beforeWrite",
                                fn: function (o) {
                                    var r = o.state,
                                        d = o.options,
                                        u = d.gpuAcceleration,
                                        P = u === void 0 || u,
                                        E = d.adaptive,
                                        k = E === void 0 || E,
                                        R = d.roundOffsets,
                                        q = R === void 0 || R,
                                        N = {
                                            placement: H1(r.placement),
                                            variation: B1(r.placement),
                                            popper: r.elements.popper,
                                            popperRect: r.rects.popper,
                                            gpuAcceleration: P,
                                            isFixed: r.options.strategy === "fixed"
                                        };
                                    r.modifiersData.popperOffsets != null && (r.styles.popper = Object.assign({}, r.styles.popper, V2(Object.assign({}, N, {
                                        offsets: r.modifiersData.popperOffsets,
                                        position: r.options.strategy,
                                        adaptive: k,
                                        roundOffsets: q
                                    })))), r.modifiersData.arrow != null && (r.styles.arrow = Object.assign({}, r.styles.arrow, V2(Object.assign({}, N, {
                                        offsets: r.modifiersData.arrow,
                                        position: "absolute",
                                        adaptive: !1,
                                        roundOffsets: q
                                    })))), r.attributes.popper = Object.assign({}, r.attributes.popper, {
                                        "data-popper-placement": r.placement
                                    })
                                },
                                data: {}
                            }, {
                                name: "applyStyles",
                                enabled: !0,
                                phase: "write",
                                fn: function (o) {
                                    var r = o.state;
                                    Object.keys(r.elements).forEach(function (d) {
                                        var u = r.styles[d] || {},
                                            P = r.attributes[d] || {},
                                            E = r.elements[d];
                                        L(E) && s(E) && (Object.assign(E.style, u), Object.keys(P).forEach(function (k) {
                                            var R = P[k];
                                            R === !1 ? E.removeAttribute(k) : E.setAttribute(k, R === !0 ? "" : R)
                                        }))
                                    })
                                },
                                effect: function (o) {
                                    var r = o.state,
                                        d = {
                                            popper: {
                                                position: r.options.strategy,
                                                left: "0",
                                                top: "0",
                                                margin: "0"
                                            },
                                            arrow: {
                                                position: "absolute"
                                            },
                                            reference: {}
                                        };
                                    return Object.assign(r.elements.popper.style, d.popper), r.styles = d, r.elements.arrow && Object.assign(r.elements.arrow.style, d.arrow),
                                        function () {
                                            Object.keys(r.elements).forEach(function (u) {
                                                var P = r.elements[u],
                                                    E = r.attributes[u] || {},
                                                    k = Object.keys(r.styles.hasOwnProperty(u) ? r.styles[u] : d[u]).reduce(function (R, q) {
                                                        return R[q] = "", R
                                                    }, {});
                                                L(P) && s(P) && (Object.assign(P.style, k), Object.keys(E).forEach(function (R) {
                                                    P.removeAttribute(R)
                                                }))
                                            })
                                        }
                                },
                                requires: ["computeStyles"]
                            }, {
                                name: "offset",
                                enabled: !0,
                                phase: "main",
                                requires: ["popperOffsets"],
                                fn: function (o) {
                                    var r = o.state,
                                        d = o.options,
                                        u = o.name,
                                        P = d.offset,
                                        E = P === void 0 ? [0, 0] : P,
                                        k = S1.reduce(function (I, W) {
                                            return I[W] = function (s1, G, a1) {
                                                var J = H1(s1),
                                                    U = [t1, F].indexOf(J) >= 0 ? -1 : 1,
                                                    i1 = typeof a1 == "function" ? a1(Object.assign({}, G, {
                                                        placement: s1
                                                    })) : a1,
                                                    n1 = i1[0],
                                                    Y = i1[1];
                                                return n1 = n1 || 0, Y = (Y || 0) * U, [t1, o1].indexOf(J) >= 0 ? {
                                                    x: Y,
                                                    y: n1
                                                } : {
                                                    x: n1,
                                                    y: Y
                                                }
                                            }(W, r.rects, E), I
                                        }, {}),
                                        R = k[r.placement],
                                        q = R.x,
                                        N = R.y;
                                    r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += q, r.modifiersData.popperOffsets.y += N), r.modifiersData[u] = k
                                }
                            }, {
                                name: "flip",
                                enabled: !0,
                                phase: "main",
                                fn: function (o) {
                                    var r = o.state,
                                        d = o.options,
                                        u = o.name;
                                    if (!r.modifiersData[u]._skip) {
                                        for (var P = d.mainAxis, E = P === void 0 || P, k = d.altAxis, R = k === void 0 || k, q = d.fallbackPlacements, N = d.padding, I = d.boundary, W = d.rootBoundary, s1 = d.altBoundary, G = d.flipVariations, a1 = G === void 0 || G, J = d.allowedAutoPlacements, U = r.options.placement, i1 = H1(U), n1 = q || (i1 !== U && a1 ? function (M1) {
                                                if (H1(M1) === C1) return [];
                                                var w1 = Q1(M1);
                                                return [L2(M1), w1, L2(w1)]
                                            }(U) : [Q1(U)]), Y = [U].concat(n1).reduce(function (M1, w1) {
                                                return M1.concat(H1(w1) === C1 ? function (R1, P1) {
                                                    P1 === void 0 && (P1 = {});
                                                    var b1 = P1,
                                                        t2 = b1.placement,
                                                        a2 = b1.boundary,
                                                        F1 = b1.rootBoundary,
                                                        d2 = b1.padding,
                                                        p2 = b1.flipVariations,
                                                        j1 = b1.allowedAutoPlacements,
                                                        l2 = j1 === void 0 ? S1 : j1,
                                                        Y1 = B1(t2),
                                                        e2 = Y1 ? p2 ? G1 : G1.filter(function (V1) {
                                                            return B1(V1) === Y1
                                                        }) : O1,
                                                        q1 = e2.filter(function (V1) {
                                                            return l2.indexOf(V1) >= 0
                                                        });
                                                    q1.length === 0 && (q1 = e2);
                                                    var W1 = q1.reduce(function (V1, D1) {
                                                        return V1[D1] = X1(R1, {
                                                            placement: D1,
                                                            boundary: a2,
                                                            rootBoundary: F1,
                                                            padding: d2
                                                        })[H1(D1)], V1
                                                    }, {});
                                                    return Object.keys(W1).sort(function (V1, D1) {
                                                        return W1[V1] - W1[D1]
                                                    })
                                                }(r, {
                                                    placement: w1,
                                                    boundary: I,
                                                    rootBoundary: W,
                                                    padding: N,
                                                    flipVariations: a1,
                                                    allowedAutoPlacements: J
                                                }) : w1)
                                            }, []), e1 = r.rects.reference, X = r.rects.popper, $ = new Map, K = !0, Q = Y[0], h1 = 0; h1 < Y.length; h1++) {
                                            var p1 = Y[h1],
                                                l1 = H1(p1),
                                                y1 = B1(p1) === L1,
                                                m1 = [F, j].indexOf(l1) >= 0,
                                                A1 = m1 ? "width" : "height",
                                                g1 = X1(r, {
                                                    placement: p1,
                                                    boundary: I,
                                                    rootBoundary: W,
                                                    altBoundary: s1,
                                                    padding: N
                                                }),
                                                v1 = m1 ? y1 ? o1 : t1 : y1 ? j : F;
                                            e1[A1] > X[A1] && (v1 = Q1(v1));
                                            var d1 = Q1(v1),
                                                r1 = [];
                                            if (E && r1.push(g1[l1] <= 0), R && r1.push(g1[v1] <= 0, g1[d1] <= 0), r1.every(function (M1) {
                                                    return M1
                                                })) {
                                                Q = p1, K = !1;
                                                break
                                            }
                                            $.set(p1, r1)
                                        }
                                        if (K)
                                            for (var k1 = function (M1) {
                                                    var w1 = Y.find(function (R1) {
                                                        var P1 = $.get(R1);
                                                        if (P1) return P1.slice(0, M1).every(function (b1) {
                                                            return b1
                                                        })
                                                    });
                                                    if (w1) return Q = w1, "break"
                                                }, u1 = a1 ? 3 : 1; u1 > 0 && k1(u1) !== "break"; u1--);
                                        r.placement !== Q && (r.modifiersData[u]._skip = !0, r.placement = Q, r.reset = !0)
                                    }
                                },
                                requiresIfExists: ["offset"],
                                data: {
                                    _skip: !1
                                }
                            }, {
                                name: "preventOverflow",
                                enabled: !0,
                                phase: "main",
                                fn: function (o) {
                                    var r = o.state,
                                        d = o.options,
                                        u = o.name,
                                        P = d.mainAxis,
                                        E = P === void 0 || P,
                                        k = d.altAxis,
                                        R = k !== void 0 && k,
                                        q = d.boundary,
                                        N = d.rootBoundary,
                                        I = d.altBoundary,
                                        W = d.padding,
                                        s1 = d.tether,
                                        G = s1 === void 0 || s1,
                                        a1 = d.tetherOffset,
                                        J = a1 === void 0 ? 0 : a1,
                                        U = X1(r, {
                                            boundary: q,
                                            rootBoundary: N,
                                            padding: W,
                                            altBoundary: I
                                        }),
                                        i1 = H1(r.placement),
                                        n1 = B1(r.placement),
                                        Y = !n1,
                                        e1 = s2(i1),
                                        X = e1 === "x" ? "y" : "x",
                                        $ = r.modifiersData.popperOffsets,
                                        K = r.rects.reference,
                                        Q = r.rects.popper,
                                        h1 = typeof J == "function" ? J(Object.assign({}, r.rects, {
                                            placement: r.placement
                                        })) : J,
                                        p1 = typeof h1 == "number" ? {
                                            mainAxis: h1,
                                            altAxis: h1
                                        } : Object.assign({
                                            mainAxis: 0,
                                            altAxis: 0
                                        }, h1),
                                        l1 = r.modifiersData.offset ? r.modifiersData.offset[r.placement] : null,
                                        y1 = {
                                            x: 0,
                                            y: 0
                                        };
                                    if ($) {
                                        if (E) {
                                            var m1, A1 = e1 === "y" ? F : t1,
                                                g1 = e1 === "y" ? j : o1,
                                                v1 = e1 === "y" ? "height" : "width",
                                                d1 = $[e1],
                                                r1 = d1 + U[A1],
                                                k1 = d1 - U[g1],
                                                u1 = G ? -Q[v1] / 2 : 0,
                                                M1 = n1 === L1 ? K[v1] : Q[v1],
                                                w1 = n1 === L1 ? -Q[v1] : -K[v1],
                                                R1 = r.elements.arrow,
                                                P1 = G && R1 ? e(R1) : {
                                                    width: 0,
                                                    height: 0
                                                },
                                                b1 = r.modifiersData["arrow#persistent"] ? r.modifiersData["arrow#persistent"].padding : {
                                                    top: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    left: 0
                                                },
                                                t2 = b1[A1],
                                                a2 = b1[g1],
                                                F1 = $1(0, K[v1], P1[v1]),
                                                d2 = Y ? K[v1] / 2 - u1 - F1 - t2 - p1.mainAxis : M1 - F1 - t2 - p1.mainAxis,
                                                p2 = Y ? -K[v1] / 2 + u1 + F1 + a2 + p1.mainAxis : w1 + F1 + a2 + p1.mainAxis,
                                                j1 = r.elements.arrow && T(r.elements.arrow),
                                                l2 = j1 ? e1 === "y" ? j1.clientTop || 0 : j1.clientLeft || 0 : 0,
                                                Y1 = (m1 = l1 == null ? void 0 : l1[e1]) != null ? m1 : 0,
                                                e2 = d1 + p2 - Y1,
                                                q1 = $1(G ? _(r1, d1 + d2 - Y1 - l2) : r1, d1, G ? z(k1, e2) : k1);
                                            $[e1] = q1, y1[e1] = q1 - d1
                                        }
                                        if (R) {
                                            var W1, V1 = e1 === "x" ? F : t1,
                                                D1 = e1 === "x" ? j : o1,
                                                _1 = $[X],
                                                h2 = X === "y" ? "height" : "width",
                                                P2 = _1 + U[V1],
                                                Z2 = _1 - U[D1],
                                                v2 = [F, t1].indexOf(i1) !== -1,
                                                T2 = (W1 = l1 == null ? void 0 : l1[X]) != null ? W1 : 0,
                                                z2 = v2 ? P2 : _1 - K[h2] - Q[h2] - T2 + p1.altAxis,
                                                D2 = v2 ? _1 + K[h2] + Q[h2] - T2 - p1.altAxis : Z2,
                                                _2 = G && v2 ? function (st, it, M2) {
                                                    var B2 = $1(st, it, M2);
                                                    return B2 > M2 ? M2 : B2
                                                }(z2, _1, D2) : $1(G ? z2 : P2, _1, G ? D2 : Z2);
                                            $[X] = _2, y1[X] = _2 - _1
                                        }
                                        r.modifiersData[u] = y1
                                    }
                                },
                                requiresIfExists: ["offset"]
                            }, {
                                name: "arrow",
                                enabled: !0,
                                phase: "main",
                                fn: function (o) {
                                    var r, d = o.state,
                                        u = o.name,
                                        P = o.options,
                                        E = d.elements.arrow,
                                        k = d.modifiersData.popperOffsets,
                                        R = H1(d.placement),
                                        q = s2(R),
                                        N = [t1, o1].indexOf(R) >= 0 ? "height" : "width";
                                    if (E && k) {
                                        var I = function (Q, h1) {
                                                return C2(typeof (Q = typeof Q == "function" ? Q(Object.assign({}, h1.rects, {
                                                    placement: h1.placement
                                                })) : Q) != "number" ? Q : O2(Q, O1))
                                            }(P.padding, d),
                                            W = e(E),
                                            s1 = q === "y" ? F : t1,
                                            G = q === "y" ? j : o1,
                                            a1 = d.rects.reference[N] + d.rects.reference[q] - k[q] - d.rects.popper[N],
                                            J = k[q] - d.rects.reference[q],
                                            U = T(E),
                                            i1 = U ? q === "y" ? U.clientHeight || 0 : U.clientWidth || 0 : 0,
                                            n1 = a1 / 2 - J / 2,
                                            Y = I[s1],
                                            e1 = i1 - W[N] - I[G],
                                            X = i1 / 2 - W[N] / 2 + n1,
                                            $ = $1(Y, X, e1),
                                            K = q;
                                        d.modifiersData[u] = ((r = {})[K] = $, r.centerOffset = $ - X, r)
                                    }
                                },
                                effect: function (o) {
                                    var r = o.state,
                                        d = o.options.element,
                                        u = d === void 0 ? "[data-popper-arrow]" : d;
                                    u != null && (typeof u != "string" || (u = r.elements.popper.querySelector(u))) && S2(r.elements.popper, u) && (r.elements.arrow = u)
                                },
                                requires: ["popperOffsets"],
                                requiresIfExists: ["preventOverflow"]
                            }, {
                                name: "hide",
                                enabled: !0,
                                phase: "main",
                                requiresIfExists: ["preventOverflow"],
                                fn: function (o) {
                                    var r = o.state,
                                        d = o.name,
                                        u = r.rects.reference,
                                        P = r.rects.popper,
                                        E = r.modifiersData.preventOverflow,
                                        k = X1(r, {
                                            elementContext: "reference"
                                        }),
                                        R = X1(r, {
                                            altBoundary: !0
                                        }),
                                        q = E2(k, u),
                                        N = E2(R, P, E),
                                        I = k2(q),
                                        W = k2(N);
                                    r.modifiersData[d] = {
                                        referenceClippingOffsets: q,
                                        popperEscapeOffsets: N,
                                        isReferenceHidden: I,
                                        hasPopperEscaped: W
                                    }, r.attributes.popper = Object.assign({}, r.attributes.popper, {
                                        "data-popper-reference-hidden": I,
                                        "data-popper-escaped": W
                                    })
                                }
                            }]
                        })
                    }
                },
                h = {};

            function l(Z) {
                var b = h[Z];
                if (b !== void 0) return b.exports;
                var O = h[Z] = {
                    exports: {}
                };
                return i[Z](O, O.exports, l), O.exports
            }
            l.d = (Z, b) => {
                for (var O in b) l.o(b, O) && !l.o(Z, O) && Object.defineProperty(Z, O, {
                    enumerable: !0,
                    get: b[O]
                })
            }, l.o = (Z, b) => Object.prototype.hasOwnProperty.call(Z, b), l.r = Z => {
                typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(Z, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(Z, "__esModule", {
                    value: !0
                })
            };
            var V = {};
            return l.r(V), l(661), l(795), l(682), l(284), l(181), l(778), l(51), l(185), V
        })()
    })
})(xg);

function mg() {
    T9({
        icons: Z9
    });

    function c() {
        function b() {
            const O = document.getElementById("navbar");
            O && (document.body.scrollTop >= 75 || document.documentElement.scrollTop >= 75 ? O.classList.add("nav-sticky") : O.classList.remove("nav-sticky"))
        }
        window.addEventListener("scroll", O => {
            O.preventDefault(), b()
        })
    }

    function n() {
        const b = window.location.href.split(/[?#]/)[0];
        Array.from(document.querySelectorAll(".menu a")).forEach(H => {
            if (H.href === b) {
                H.classList.add("active");
                const D = H.parentElement.parentElement.parentElement;
                if (D != null && D.classList.contains("menu-item")) {
                    const B = D.querySelector(".hs-dropdown-toggle");
                    B == null || B.classList.add("active")
                }
                const L = H.parentElement.parentElement.parentElement.parentElement.parentElement;
                if (L != null && L.classList.contains("menu-item")) {
                    const B = L.querySelector(".hs-dropdown-toggle");
                    B == null || B.classList.add("active")
                }
            }
        })
    }

    function i() {
        var b = window.location.href.split(/[?#]/)[0];
        document.querySelectorAll("ul.admin-menu .menu-item a").forEach(H => {
            if (H.href === b) {
                H.classList.add("active");
                let D = H.parentElement.parentElement.parentElement.parentElement;
                if (D && D.classList.contains("menu-item")) {
                    const L = D.querySelector("[data-hs-collapse]");
                    if (L) {
                        L.classList.add("active");
                        const B = L.nextElementSibling;
                        B && HSCollapse.show(B)
                    }
                }
            }
        });
        const O = document.querySelectorAll("ul.admin-menu .hs-collapse");
        O.forEach(H => {
            H.addEventListener("open.hs.collapse", D => {
                O.forEach(L => {
                    L !== D.target && HSCollapse.hide(L)
                })
            })
        })
    }

    function h() {
        window.onload = function () {
            setTimeout(() => {
                document.getElementById("preloader") && (document.getElementById("preloader").style.visibility = "hidden", document.getElementById("preloader").style.opacity = "0")
            }, 500)
        }
    }

    function l() {
        const b = document.querySelector('[data-toggle="back-to-top"]');
        window.addEventListener("scroll", function () {
            b && (window.pageYOffset > 72 ? (b.classList.remove("opacity-0"), b.classList.add("h-8"), b.classList.remove("h-0"), b.classList.remove("translate-y-5")) : (b.classList.add("opacity-0"), b.classList.remove("h-8"), b.classList.add("h-0"), b.classList.add("translate-y-5")))
        }), b && b.addEventListener("click", function (O) {
            O.preventDefault(), window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        })
    }

    function V() {
        document.querySelectorAll("[data-x-password]").forEach(b => {
            const O = b.querySelector(".form-password"),
                H = b.querySelector(".password-eye-on"),
                D = b.querySelector(".password-eye-off");
            O && H && D && (D.classList.add("hidden"), H.addEventListener("click", L => {
                H.classList.add("hidden"), D.classList.remove("hidden"), O.type = "text"
            }), D.addEventListener("click", L => {
                D.classList.add("hidden"), H.classList.remove("hidden"), O.type = "password"
            }))
        })
    }

    function Z() {
        var b = document.querySelector('[data-toggle="fullscreen"]');
        b && b.addEventListener("click", function (O) {
            O.preventDefault(), document.body.classList.toggle("fullscreen-enable"), !document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement ? document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
        })
    }
    c(), n(), i(), l(), h(), V(), Z()
}
mg();
export {
    bg as c, z9 as g
};