(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/cdce3_@sanity_visual-editing_dist__chunks-es_ccc80c._.js", {

"[project]/node_modules/next-sanity/node_modules/@sanity/visual-editing/dist/_chunks-es/transformSanityNodeData.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "D": (()=>h),
    "d": (()=>D),
    "e": (()=>$),
    "p": (()=>l)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/valibot/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@sanity/client/dist/_chunks-es/resolveEditInfo.js [app-client] (ecmascript)");
;
;
function l(t) {
    let e = "";
    for (const o of t)"string" != typeof o ? "number" != typeof o ? null !== (r = o) && Array.isArray(r) ? (e && (e += ":"), e += `${o.join(",")}}`) : o._key && (e && (e += ":"), e += `${o._key}`) : (e && (e += ":"), e += `${o}`) : (e && (e += "."), e += o);
    var r;
    return e;
}
const d = /^([\w-]+):(0|[1-9][0-9]*)$/, b = /^([\w-]+):([0-9]+),([0-9]+)$/, m = /^([\w-]+):([\w-]+)$/;
const h = "drafts.", y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minLength"])(1)), k = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])(y), w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    baseUrl: y,
    dataset: k,
    id: y,
    path: y,
    projectId: k,
    tool: k,
    type: k,
    workspace: k,
    isDraft: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])())
}), j = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    origin: y,
    href: y,
    data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unknown"])()))
});
function U(t) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["is"])(w, t);
}
function $(r) {
    const { id: o, path: s, baseUrl: n, tool: a, workspace: c, type: i } = r;
    return U(r) ? [
        [
            "id",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPublishedId"])(o)
        ],
        [
            "type",
            i
        ],
        [
            "path",
            l(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studioPath"].fromString(s))
        ],
        [
            "base",
            encodeURIComponent(n)
        ],
        [
            "workspace",
            c
        ],
        [
            "tool",
            a
        ],
        [
            "isDraft",
            o.startsWith(h)
        ]
    ].filter(([, t])=>!!t).map((t)=>{
        const [e, r] = t;
        return !0 === r ? e : t.join("=");
    }).join(";") : void 0;
}
function g(t) {
    const r = t.split(";").reduce((t, r)=>{
        const [o, s] = r.split("=");
        if (!o || r.includes("=") && !s) return t;
        switch(o){
            case "id":
                t.id = s;
                break;
            case "type":
                t.type = s;
                break;
            case "path":
                t.path = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studioPath"].toString(function(t) {
                    const e = [];
                    for (const r of t.split(".")){
                        const t = d.exec(r);
                        if (t) {
                            e.push(t[1], Number(t[2]));
                            continue;
                        }
                        const o = b.exec(r);
                        if (o) {
                            e.push(o[1], [
                                Number(o[2]),
                                Number(o[3])
                            ]);
                            continue;
                        }
                        const s = m.exec(r);
                        s ? e.push(s[1], {
                            _key: s[2]
                        }) : e.push(r);
                    }
                    return e;
                }(s));
                break;
            case "base":
                t.baseUrl = decodeURIComponent(s);
                break;
            case "tool":
                t.tool = s;
                break;
            case "workspace":
                t.workspace = s;
                break;
            case "projectId":
                t.projectId = s;
                break;
            case "dataset":
                t.dataset = s;
                break;
            case "isDraft":
                t.isDraft = "";
        }
        return t;
    }, {});
    if (U(r)) return r;
}
function x(t) {
    const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeParse"])(w, t);
    if (e.success) return e.output;
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeParse"])(j, t);
    if (r.success) try {
        const t = new URL(r.output.href, typeof document > "u" ? "https://example.com" : location.origin);
        return t.searchParams.size > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valibot$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(w, Object.fromEntries(t.searchParams.entries())) : r.output;
    } catch (t) {
        return console.error("Failed to parse sanity node", t), r.output;
    }
}
function D(t) {
    if ("object" == typeof t && null !== t) return x(t);
    try {
        return x(JSON.parse(t));
    } catch  {
        return g(t);
    }
}
;
 //# sourceMappingURL=transformSanityNodeData.js.map
}}),
"[project]/node_modules/next-sanity/node_modules/@sanity/visual-editing/dist/_chunks-es/mutations.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "a": (()=>B),
    "b": (()=>G),
    "c": (()=>Q),
    "d": (()=>S),
    "e": (()=>_),
    "f": (()=>R),
    "g": (()=>O),
    "h": (()=>J),
    "i": (()=>L),
    "j": (()=>H),
    "k": (()=>P),
    "l": (()=>A),
    "s": (()=>N),
    "u": (()=>T)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$transformSanityNodeData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-sanity/node_modules/@sanity/visual-editing/dist/_chunks-es/transformSanityNodeData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/xstate/dist/xstate.development.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__ = __turbopack_import__("[project]/node_modules/xstate/dist/log-ef30c65f.development.esm.js [app-client] (ecmascript) <export e as emit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__ = __turbopack_import__("[project]/node_modules/xstate/dist/log-ef30c65f.development.esm.js [app-client] (ecmascript) <export a as assign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_unstable_machine$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-sanity/node_modules/@sanity/mutate/dist/_unstable_machine.browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$1db27a82$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__R__as__stopChild$3e$__ = __turbopack_import__("[project]/node_modules/xstate/dist/raise-1db27a82.development.esm.js [app-client] (ecmascript) <export R as stopChild>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xstate$2f$actors$2f$dist$2f$xstate$2d$actors$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/xstate/actors/dist/xstate-actors.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-sanity/node_modules/@sanity/mutate/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$get$2d$random$2d$values$2d$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/get-random-values-esm/index.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
const g = /_key\s*==\s*['"](.*)['"]/, v = /^\d*:\d*$/;
function w(t) {
    return "number" == typeof t || "string" == typeof t && /^\[\d+\]$/.test(t);
}
function x(t) {
    return "string" == typeof t ? g.test(t.trim()) : "object" == typeof t && "_key" in t;
}
const k = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, I = /_key\s*==\s*['"](.*)['"]/;
function _(t, e, n) {
    const r = "string" == typeof e ? function(t) {
        if ("string" != typeof t) throw new Error("Path is not a string");
        const e = t.match(k);
        if (!e) throw new Error("Invalid path string");
        return e.map(D);
    }(e) : e;
    if (!Array.isArray(r)) throw new Error("Path must be an array or a string");
    let o = t;
    for(let t = 0; t < r.length; t++){
        const e = r[t];
        if (w(e)) {
            if (!Array.isArray(o)) return n;
            o = o[e];
        }
        if (x(e)) {
            if (!Array.isArray(o)) return n;
            o = o.find((t)=>t._key === e._key);
        }
        if ("string" == typeof e && (o = "object" == typeof o && null !== o ? o[e] : void 0), typeof o > "u") return n;
    }
    return o;
}
function D(t) {
    return w(t) ? function(t) {
        return Number(t.replace(/[^\d]/g, ""));
    }(t) : x(t) ? function(t) {
        return {
            _key: t.match(I)[1]
        };
    }(t) : function(t) {
        if ("string" == typeof t && v.test(t)) return !0;
        if (!Array.isArray(t) || 2 !== t.length) return !1;
        const [e, n] = t;
        return !("number" != typeof e && "" !== e || "number" != typeof n && "" !== n);
    }(t) ? function(t) {
        const [e, n] = t.split(":").map((t)=>"" === t ? t : Number(t));
        return [
            e,
            n
        ];
    }(t) : t;
}
function E(t) {
    return t.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$transformSanityNodeData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["D"]);
}
function A(t) {
    return E(t) ? t : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$transformSanityNodeData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["D"] + t;
}
function O(t) {
    return E(t) ? t.slice(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$transformSanityNodeData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["D"].length) : t;
}
const S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setup"])({
    types: {},
    actions: {
        "emit sync event": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])(({ event: t })=>((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(t, "sync"), t)),
        "emit mutation event": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])(({ event: t })=>((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(t, "mutation"), t)),
        "emit rebased event": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])(({ event: t })=>((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(t, [
                "rebased.local",
                "rebased.remote"
            ]), t)),
        "emit pristine event": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__emit$3e$__["emit"])(({ event: t })=>((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(t, [
                "pristine"
            ]), t)),
        "add document actor": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
            documents: ({ context: t, event: e, spawn: n })=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(e, "observe");
                const r = e.documentId;
                return t.documents[r] ? t.documents : {
                    ...t.documents,
                    [r]: n("documentMutatorMachine", {
                        input: {
                            id: r,
                            client: t.client,
                            sharedListener: t.sharedListener || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_unstable_machine$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSharedListener"])(t.client)
                        },
                        id: r
                    })
                };
            }
        }),
        "stop remote snapshot": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xstate$2f$dist$2f$raise$2d$1db27a82$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__R__as__stopChild$3e$__["stopChild"])(({ context: t, event: e })=>((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(e, "unobserve"), t.documents[e.documentId])),
        "remove remote snapshot from context": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xstate$2f$dist$2f$log$2d$ef30c65f$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__assign$3e$__["assign"])({
            documents: ({ context: t, event: e })=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xstate$2f$dist$2f$xstate$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertEvent"])(e, "unobserve"), !t.documents[e.documentId]) return t.documents;
                const { [e.documentId]: n, ...r } = t.documents;
                return r;
            }
        })
    },
    actors: {
        documentMutatorMachine: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$_unstable_machine$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["documentMutatorMachine"]
    }
}).createMachine({
    id: "dataset-mutator",
    context: ({ input: t })=>({
            documents: {},
            client: t.client,
            sharedListener: t.sharedListener
        }),
    on: {
        sync: {
            actions: [
                "emit sync event"
            ]
        },
        mutation: {
            actions: [
                "emit mutation event"
            ]
        },
        "rebased.*": {
            actions: [
                "emit rebased event"
            ]
        },
        pristine: {
            actions: [
                "emit pristine event"
            ]
        },
        observe: {
            actions: [
                "add document actor"
            ]
        },
        unobserve: {
            actions: [
                "stop remote snapshot",
                "remove remote snapshot from context"
            ]
        }
    },
    initial: "pristine",
    states: {
        pristine: {}
    }
}), j = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xstate$2f$actors$2f$dist$2f$xstate$2d$actors$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEmptyActor"])();
let M = j;
const $ = new Set;
function L(t) {
    return t === j;
}
function N(t) {
    M = t;
    for (const t of $)t();
}
function T() {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((t)=>($.add(t), ()=>$.delete(t)), []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(t, ()=>M, ()=>j);
}
function P() {
    const t = T();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>!L(t), [
        t
    ]);
}
function K(t, e) {
    let n;
    return (...r)=>{
        clearTimeout(n), n = setTimeout(()=>{
            t.apply(t, r);
        }, e);
    };
}
function U(t, e) {
    const n = window.self !== window.top || window.opener;
    if (L(e) || !n) throw new Error("The `useDocuments` hook cannot be used in this context");
    const r = A(t), o = O(t), s = e.getSnapshot().context?.documents, i = s?.[r], c = s?.[o];
    if (!i) throw new Error(`Document "${t}" not found`);
    const u = i?.getSnapshot().context?.local || c?.getSnapshot().context?.local;
    if (!u) throw new Error(`Snapshot for document "${t}" not found`);
    return {
        draftId: r,
        publishedId: o,
        draftDoc: i,
        publishedDoc: c,
        snapshot: u
    };
}
function W(t, e) {
    return ()=>{
        const { draftDoc: n } = U(t, e);
        n.send({
            type: "submit"
        });
    };
}
function q(t, e) {
    return (n)=>{
        const { snapshot: r } = U(t, e);
        return n ? _(r, n) : r;
    };
}
function z(n, r) {
    return (o, s)=>{
        const { draftDoc: i, draftId: c, publishedId: u, snapshot: a } = U(n, r), { commit: f = !0 } = s || {}, d = "function" == typeof o ? o({
            draftId: c,
            publishedId: u,
            snapshot: a
        }) : o;
        i.send({
            type: "mutate",
            mutations: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createIfNotExists"])({
                    ...a,
                    _id: c
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patch"])(c, d)
            ]
        }), f && ("object" == typeof f && "debounce" in f ? K(()=>i.send({
                type: "submit"
            }), f.debounce)() : i.send({
            type: "submit"
        }));
    };
}
function B() {
    const t = T();
    return {
        getDocument: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e)=>({
                id: e,
                commit: W(e, t),
                get: q(e, t),
                patch: z(e, t)
            }), [
            t
        ]),
        mutateDocument: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e, n, r)=>{
            const { draftDoc: o } = U(e, t), { commit: s = !0 } = r || {};
            o.send({
                type: "mutate",
                mutations: n
            }), s && ("object" == typeof s && "debounce" in s ? K(()=>o.send({
                    type: "submit"
                }), s.debounce)() : o.send({
                type: "submit"
            }));
        }, [
            t
        ])
    };
}
const C = (()=>{
    let t;
    return ()=>{
        if (t) return t;
        t = [];
        for(let e = 0; e < 256; ++e)t[e] = (e + 256).toString(16).slice(1);
        return t;
    };
})();
function F(t) {
    const e = C();
    return (function(t = 16) {
        const e = new Uint8Array(t);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$get$2d$random$2d$values$2d$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(e), e;
    })(t).reduce((t, n)=>t + e[n], "").slice(0, t);
}
function G(t) {
    const e = "string" == typeof t ? t : t.path, n = e.lastIndexOf("."), r = e.substring(n + 1, e.length);
    if (!r.indexOf("[")) throw new Error("Invalid path: not an array");
    const o = e.lastIndexOf("["), s = e.substring(0, o);
    let i, c;
    if (r.includes("_key")) {
        const t = r.indexOf('"') + 1, e = r.indexOf('"', t);
        i = r.substring(t, e), c = !0;
    } else {
        const t = r.indexOf("[") + 1, e = r.indexOf("]", t);
        i = r.substring(t, e), c = !1;
    }
    if (!s || !i) throw new Error("Invalid path");
    return {
        path: s,
        key: i,
        hasExplicitKey: c
    };
}
function H(t, e, o = "after") {
    const { path: s, key: i } = G(t), c = {
        ..._(e, t.path),
        _key: F()
    };
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["at"])(s, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insert"])(c, o, {
            _key: i
        }))
    ];
}
function J(t, e) {
    const { path: r, key: s } = G(t), i = _(e, r).findIndex((t)=>t._key === s);
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["at"])(r, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["truncate"])(i, i + 1))
    ];
}
function Q(t, e, o) {
    const { path: s, key: i } = G(t), c = F();
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["at"])(s, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insert"])([
            {
                _type: e,
                _key: c
            }
        ], o, {
            _key: i
        }))
    ];
}
function R(t, e, s) {
    if (!t.type) throw new Error("Node type is missing");
    const { path: i, key: c } = G(t), u = e.get(i), a = e.get(t.path), f = u.findIndex((t)=>t._key === c);
    let d = -1, m = "before";
    if ("first" === s) {
        if (0 === f) return [];
        d = 0, m = "before";
    } else if ("last" === s) {
        if (f === u.length - 1) return [];
        d = -1, m = "after";
    } else if ("next" === s) {
        if (f === u.length - 1) return [];
        d = f, m = "after";
    } else if ("previous" === s) {
        if (0 === f) return [];
        d = f - 1, m = "before";
    }
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["at"])(i, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["truncate"])(f, f + 1)),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["at"])(i, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$node_modules$2f40$sanity$2f$mutate$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insert"])(a, m, d))
    ];
}
;
 //# sourceMappingURL=mutations.js.map
}}),
"[project]/node_modules/next-sanity/node_modules/@sanity/visual-editing/dist/_chunks-es/SharedStateContext.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "O": (()=>O),
    "S": (()=>J),
    "c": (()=>B),
    "s": (()=>F)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$stega$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@vercel/stega/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$transformSanityNodeData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-sanity/node_modules/@sanity/visual-editing/dist/_chunks-es/transformSanityNodeData.js [app-client] (ecmascript)");
;
;
;
for(var r = [], i = 0; i < 256; ++i)r.push((i + 256).toString(16).slice(1));
var a, s = new Uint8Array(16);
function l() {
    if (!a && !(a = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return a(s);
}
var c = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
};
function u(e, t, n) {
    if (c.randomUUID && !t && !e) return c.randomUUID();
    var o = (e = e || {}).random || (e.rng || l)();
    return o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, function(e, t = 0) {
        return (r[e[t + 0]] + r[e[t + 1]] + r[e[t + 2]] + r[e[t + 3]] + "-" + r[e[t + 4]] + r[e[t + 5]] + "-" + r[e[t + 6]] + r[e[t + 7]] + "-" + r[e[t + 8]] + r[e[t + 9]] + "-" + r[e[t + 10]] + r[e[t + 11]] + r[e[t + 12]] + r[e[t + 13]] + r[e[t + 14]] + r[e[t + 15]]).toLowerCase();
    }(o);
}
function d(e) {
    const t = e.getBoundingClientRect();
    return {
        x: t.x + scrollX,
        y: t.y + scrollY,
        w: t.width,
        h: t.height
    };
}
function m(e, t, n) {
    return "x" === n ? {
        x: e.x + t,
        y: e.y,
        w: e.w - 2 * t,
        h: e.h
    } : {
        x: e.x,
        y: e.y + t,
        w: e.w,
        h: e.h - 2 * t
    };
}
function y(e, t) {
    const { x1: n, y1: o, x2: r, y2: i } = e, { x1: a, y1: s, x2: l, y2: c } = t;
    if (n === r && o === i || a === l && s === c) return !1;
    const u = (c - s) * (r - n) - (l - a) * (i - o);
    if (0 === u) return !1;
    const d = ((l - a) * (o - s) - (c - s) * (n - a)) / u, m = ((r - n) * (o - s) - (i - o) * (n - a)) / u;
    if (d < 0 || d > 1 || m < 0 || m > 1) return !1;
    return {
        x: n + d * (r - n),
        y: o + d * (i - o)
    };
}
function p(e, t) {
    return e.x === t.x && e.y === t.y && e.w === t.w && e.h === t.h;
}
function f(e, t) {
    const n = [
        {
            x1: t.x,
            y1: t.y,
            x2: t.x + t.w,
            y2: t.y
        },
        {
            x1: t.x + t.w,
            y1: t.y,
            x2: t.x + t.w,
            y2: t.y + t.h
        },
        {
            x1: t.x + t.w,
            y1: t.y + t.h,
            x2: t.x,
            y2: t.y + t.h
        },
        {
            x1: t.x,
            y1: t.y + t.h,
            x2: t.x,
            y2: t.y
        }
    ], o = [];
    for(let t = 0; t < n.length; t++){
        const r = y(e, n[t]);
        if (r) {
            let e = !1;
            for(let t = 0; t < o.length; t++)o[t].x === r.x && o[t].y === r.y && (e = !0);
            e || o.push(r);
        }
    }
    return 0 !== o.length && o.sort((t, n)=>g(t, {
            x: e.x1,
            y: e.y1
        }) - g(n, {
            x: e.x1,
            y: e.y1
        }));
}
function g(e, t) {
    const n = e.x - t.x, o = e.y - t.y;
    return Math.sqrt(n * n + o * o);
}
function h(e, t, n) {
    const o = {
        x: e.x1,
        y: e.y1
    };
    if (t.some((e)=>(function(e, t) {
            const n = e.x >= t.x && e.x <= t.x + t.w, o = e.y >= t.y && e.y <= t.y + t.h;
            return n && o;
        })(o, m(e, Math.min(e.w, e.h) / 10, "horizontal" === n ? "x" : "y")))) return null;
    let r, i;
    for (const a of t){
        const t = f(e, m(a, Math.min(a.w, a.h) / 10, "horizontal" === n ? "x" : "y"));
        if (t) {
            const e = t[0];
            r ? g(o, e) < g(o, r) && (r = e, i = a) : (r = e, i = a);
        }
    }
    return i || null;
}
function v(e, t, n) {
    const { x: o, y: r, w: i, h: a } = e, { x: s, y: l } = n;
    return {
        x: s + (o - s) * t,
        y: l + (r - l) * t,
        w: i * t,
        h: a * t
    };
}
function w(e) {
    const t = Math.max(0, Math.min(...e.map((e)=>e.y))), n = Math.min(document.body.scrollHeight, Math.max(...e.map((e)=>e.y + e.h)));
    return {
        min: t,
        max: n,
        height: n - t
    };
}
function x(e, t) {
    return t.find((t)=>p(d(t.elements.element), e))?.sanity;
}
function E(e, t, n) {
    return Object.values(t).every((e)=>null === e) ? null : "horizontal" === n ? {
        left: t.left ? {
            rect: t.left,
            sanity: x(t.left, e)
        } : null,
        right: t.right ? {
            rect: t.right,
            sanity: x(t.right, e)
        } : null
    } : {
        top: t.top ? {
            rect: t.top,
            sanity: x(t.top, e)
        } : null,
        bottom: t.bottom ? {
            rect: t.bottom,
            sanity: x(t.bottom, e)
        } : null
    };
}
function b(e) {
    const t = document.body.getBoundingClientRect();
    return {
        x: Math.max(t.x, Math.min(e.clientX, t.x + t.width)),
        y: e.clientY + window.scrollY
    };
}
function M(e, t, n) {
    const o = d(t), r = [
        ...t.querySelectorAll(":where(h1, h2, h3, h4, p, a, img, span, button):not(:has(*))")
    ];
    e.x <= o.x && (e.x = o.x), e.x >= o.x + o.w && (e.x = o.x + o.w), e.y >= o.y + o.h && (e.y = o.y + o.h), e.y <= o.y && (e.y = o.y);
    const i = r.map((e)=>{
        const t = v(d(e), n, {
            x: o.x,
            y: o.y
        });
        return {
            x: t.x - o.x,
            y: t.y - o.y,
            w: t.w,
            h: t.h,
            tagName: e.tagName
        };
    });
    return {
        offsetX: (o.x - e.x) * n,
        offsetY: (o.y - e.y) * n,
        w: o.w * n,
        h: o.h * n,
        maxWidth: o.w * n * .75,
        childRects: i
    };
}
function L(e) {
    const t = function(e) {
        const t = Math.max(0, Math.min(...e.map((e)=>e.x))), n = Math.min(document.body.offsetWidth, Math.max(...e.map((e)=>e.x + e.w)));
        return {
            min: t,
            max: n,
            width: n - t
        };
    }(e), n = w(e), o = t.min > 8 && t.min + t.width <= window.innerWidth - 8, r = n.min > 8 && n.min + n.height <= document.body.scrollHeight - 8, i = o && r;
    return {
        x: i ? t.min - 8 : t.min,
        y: i ? n.min - 8 : n.min,
        w: i ? t.width + 16 : t.width,
        h: i ? n.height + 16 : n.height
    };
}
async function T(e, t, n, o, r, i) {
    return new Promise((a)=>{
        const s = window.getComputedStyle(t).transform;
        if (1 === new DOMMatrix(s).a) return;
        const l = n - window.innerHeight, c = scrollY;
        (e -= window.innerHeight / 2) < 0 && (e = 0), t.addEventListener("transitionend", ()=>{
            t.style.transition = "none", t.style.transform = "none", scrollTo({
                top: e,
                behavior: "instant"
            }), setTimeout(()=>{
                o({
                    type: "overlay/dragEndMinimapTransition"
                }), o({
                    type: "overlay/dragToggleMinimap",
                    display: !1
                });
            }, 2 * r), a();
        }, {
            once: !0
        }), o({
            type: "overlay/dragStartMinimapTransition"
        }), t.style.transform = `translateY(${Math.max(c - e, -l + c)}px) scale(1)`, i && (document.body.style.overflow = i.body.overflow, document.body.style.height = i.body.height, document.documentElement.style.overflow = i.documentElement.overflow, document.documentElement.style.height = i.documentElement.height);
    });
}
let S = !1, k = {
    x: 0,
    y: 0
}, U = {
    x: 0,
    y: 0
}, I = typeof document > "u" ? 0 : document.documentElement.scrollHeight, C = null;
function D(e) {
    const { mouseEvent: t, element: n, overlayGroup: o, handler: r, target: i, onSequenceStart: a, onSequenceEnd: s } = e;
    if (0 !== t.button) return;
    window.focus();
    const l = 150;
    let c = o.map((e)=>d(e.elements.element));
    const u = n.getAttribute("data-sanity-drag-flow") || ((R = c).some((e)=>R.filter((t)=>!p(e, t)).some((t)=>e.y === t.y)) ? "horizontal" : "vertical"), m = n.getAttribute("data-sanity-drag-group"), y = !!n.getAttribute("data-sanity-drag-minimap-disable"), f = !!n.getAttribute("data-sanity-drag-prevent-default"), x = n.getAttribute("data-unstable_sanity-drag-document-height"), D = n.getAttribute("data-unstable_sanity-drag-group-height");
    var R;
    let A = null;
    const N = b(t), O = document.body, { minYScaled: P, scaleFactor: Y } = function(e, t) {
        let n = t || w(e).height;
        n += 200;
        const o = n > window.innerHeight ? window.innerHeight / n : 1, r = e.map((e)=>v(e, o, {
                x: window.innerWidth / 2,
                y: 0
            })), { min: i } = w(r);
        return {
            scaleFactor: o,
            minYScaled: i - 100 * o
        };
    }(c, D ? ~~D : null);
    let G = !1, H = !1, _ = !0;
    S || (C = {
        body: {
            overflow: window.getComputedStyle(document.body).overflow,
            height: window.getComputedStyle(document.body).height
        },
        documentElement: {
            overflow: window.getComputedStyle(document.documentElement).overflow,
            height: window.getComputedStyle(document.documentElement).height
        }
    }, I = x ? ~~x : document.documentElement.scrollHeight);
    const z = setInterval(()=>{
        c = o.map((e)=>d(e.elements.element));
    }, l), q = ()=>{
        if (Y >= 1) return;
        const e = M(U, n, Y);
        r({
            type: "overlay/dragUpdateSkeleton",
            skeleton: e
        }), r({
            type: "overlay/dragToggleMinimapPrompt",
            display: !1
        }), r({
            type: "overlay/dragToggleMinimap",
            display: !0
        }), S = !0, (async function(e, t, n, o, r) {
            return new Promise((i)=>{
                e.addEventListener("transitionend", ()=>{
                    setTimeout(()=>{
                        o({
                            type: "overlay/dragEndMinimapTransition"
                        });
                    }, 2 * r), i();
                }, {
                    once: !0
                }), o({
                    type: "overlay/dragStartMinimapTransition"
                }), o({
                    type: "overlay/dragToggleMinimap",
                    display: !0
                }), document.body.style.overflow = "hidden", document.body.style.height = "100%", document.documentElement.style.overflow = "initial", document.documentElement.style.height = "100%", setTimeout(()=>{
                    e.style.transformOrigin = "50% 0px", e.style.transition = "transform 150ms ease", e.style.transform = `translate3d(0px, ${-n + scrollY}px, 0px) scale(${t})`;
                }, 25);
            });
        })(O, Y, P, r, l).then(()=>{
            setTimeout(()=>{
                r({
                    type: "overlay/dragUpdateGroupRect",
                    groupRect: L(c)
                });
            }, 300);
        });
    }, j = (e)=>{
        Math.abs(e.deltaY) >= 10 && Y < 1 && !S && !H && !y && _ && (r({
            type: "overlay/dragToggleMinimapPrompt",
            display: !0
        }), H = !0), e.shiftKey && !S && !y && (window.dispatchEvent(new CustomEvent("unstable_sanity/dragApplyMinimap")), setTimeout(()=>{
            q();
        }, 50));
    }, W = (e)=>{
        if (e.preventDefault(), U = b(e), k = function(e) {
            const t = document.body, n = window.getComputedStyle(t).transform;
            if ("none" === n) return {
                x: e.x,
                y: e.y
            };
            const o = new DOMMatrix(n).inverse(), r = new DOMPoint(e.x, e.y).matrixTransform(o);
            return {
                x: r.x,
                y: r.y
            };
        }(U), Math.abs(g(U, N)) < 4) return;
        if (!G) {
            const e = L(c), t = M(U, n, 1);
            r({
                type: "overlay/dragStart",
                flow: u
            }), r({
                type: "overlay/dragUpdateSkeleton",
                skeleton: t
            }), r({
                type: "overlay/dragUpdateGroupRect",
                groupRect: e
            }), G = !0, a();
        }
        r({
            type: "overlay/dragUpdateCursorPosition",
            x: U.x,
            y: U.y
        }), e.shiftKey && !S && !y && (window.dispatchEvent(new CustomEvent("unstable_sanity/dragApplyMinimap")), setTimeout(()=>{
            q();
        }, 50));
        const t = function(e, t, n) {
            if ("horizontal" === n) {
                const o = {
                    x1: e.x,
                    y1: e.y,
                    x2: e.x - 1e8,
                    y2: e.y
                }, r = {
                    x1: e.x,
                    y1: e.y,
                    x2: e.x + 1e8,
                    y2: e.y
                };
                return {
                    left: h(o, t, n),
                    right: h(r, t, n)
                };
            }
            {
                const o = {
                    x1: e.x,
                    y1: e.y,
                    x2: e.x,
                    y2: e.y - 1e8
                }, r = {
                    x1: e.x,
                    y1: e.y,
                    x2: e.x,
                    y2: e.y + 1e8
                };
                return {
                    top: h(o, t, n),
                    bottom: h(r, t, n)
                };
            }
        }(U, c, u);
        JSON.stringify(A) !== JSON.stringify(t) && (A = t, r({
            type: "overlay/dragUpdateInsertPosition",
            insertPosition: E(o, A, u)
        }));
    }, V = ()=>{
        _ = !1, r({
            type: "overlay/dragEnd",
            target: i,
            insertPosition: A ? E(o, A, u) : null,
            dragGroup: m,
            flow: u,
            preventInsertDefault: f
        }), H && r({
            type: "overlay/dragToggleMinimapPrompt",
            display: !1
        }), S || (clearInterval(z), s(), J(), B()), $();
    }, X = (e)=>{
        if ("Shift" === e.key && S) {
            S = !1;
            const e = M(U, n, 1 / Y);
            r({
                type: "overlay/dragUpdateSkeleton",
                skeleton: e
            }), window.dispatchEvent(new CustomEvent("unstable_sanity/dragResetMinimap")), setTimeout(()=>{
                T(k.y, O, I, r, l, C);
            }, 50), r({
                type: "overlay/dragUpdateGroupRect",
                groupRect: null
            }), _ || (clearInterval(z), $(), J(), B(), s());
        }
    }, F = ()=>{
        r({
            type: "overlay/dragUpdateGroupRect",
            groupRect: null
        }), window.dispatchEvent(new CustomEvent("unstable_sanity/dragResetMinimap")), setTimeout(()=>{
            T(k.y, O, I, r, l, C).then(()=>{
                S = !1;
            });
        }, 50), clearInterval(z), $(), J(), B(), s();
    }, $ = ()=>{
        window.removeEventListener("mousemove", W), window.removeEventListener("wheel", j), window.removeEventListener("mouseup", V);
    }, B = ()=>{
        window.removeEventListener("keyup", X);
    }, J = ()=>{
        window.removeEventListener("blur", F);
    };
    window.addEventListener("blur", F), window.addEventListener("keyup", X), window.addEventListener("wheel", j), window.addEventListener("mousemove", W), window.addEventListener("mouseup", V);
}
const R = (e)=>e instanceof HTMLElement || e instanceof SVGElement;
function A(e) {
    const { display: t } = window.getComputedStyle(e);
    if ("inline" !== t) return e;
    const n = e.parentElement;
    return n ? A(n) : null;
}
const N = (e)=>e && R(e) ? e.dataset?.sanityOverlayElement ? e : N(e.parentElement) : null, O = "sanity-visual-editing";
function P(e, o = !1) {
    return r = e, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$stega$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERCEL_STEGA_REGEX"].lastIndex = 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$stega$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERCEL_STEGA_REGEX"].test(r) ? function(e, t = !1) {
        try {
            const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$stega$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vercelStegaDecode"])(e);
            return o && "sanity.io" === o.origin ? (t && (o.href = o.href?.replace(".alt", "")), o) : null;
        } catch (t) {
            return console.error("Failed to decode stega for string: ", e, "with the original error: ", t), null;
        }
    }(e, o) : null;
    "TURBOPACK unreachable";
    var r;
}
const Y = (e)=>e.nodeType === Node.ELEMENT_NODE, G = (e)=>"IMG" === e.tagName, H = (e)=>"TIME" === e.tagName, _ = (e)=>"SVG" === e.tagName.toUpperCase();
function z(e) {
    return "path" in e;
}
function q(e, t) {
    let n = e.split("."), o = t.split(".");
    const r = Math.min(n.length, o.length);
    return n = n.slice(0, r).reverse(), o = o.slice(0, r).reverse(), n.reduce((e, t, n)=>t === o[n] ? [
            ...e,
            t
        ] : [], []).reverse().join(".");
}
function j(e) {
    if (!e.length || !e.map((e)=>z(e)).every((e, t, n)=>e === n[0])) return;
    if (!z(e[0])) return e[0];
    const t = e.filter(z);
    let n = e[0];
    const o = [
        "projectId",
        "dataset",
        "id",
        "baseUrl",
        "workspace",
        "tool"
    ];
    for(let e = 1; e < t.length; e++){
        const r = t[e];
        if (o.some((e)=>r[e] !== n?.[e])) {
            n = void 0;
            break;
        }
        n.path = q(n.path, r.path);
    }
    return n;
}
function W(t) {
    const n = [];
    function o(t, o) {
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$transformSanityNodeData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(o);
        if (!r) return;
        const i = A(t);
        i && n.push({
            elements: {
                element: t,
                measureElement: i
            },
            sanity: r
        });
    }
    if (t) for (const e of t.childNodes){
        const { nodeType: t, parentElement: r, textContent: i } = e;
        if (Y(e) && void 0 !== e.dataset?.sanityEditTarget) {
            const t = W(e).map(({ sanity: e })=>e);
            if (!t.map((e)=>z(e)).every((e, t, n)=>e === n[0])) continue;
            const o = j(t);
            o && n.push({
                elements: {
                    element: e,
                    measureElement: e
                },
                sanity: o
            });
        } else if (t === Node.TEXT_NODE && r && i) {
            const e = P(i);
            if (!e) continue;
            o(r, e);
        } else if (Y(e)) {
            if ("SCRIPT" === e.tagName || e.id === O) continue;
            if (e.dataset?.sanity) o(e, e.dataset.sanity);
            else if (e.dataset?.sanityEditInfo) o(e, e.dataset.sanityEditInfo);
            else {
                if (G(e)) {
                    const t = P(e.alt, !0);
                    if (!t) continue;
                    o(e, t);
                    continue;
                }
                if (H(e)) {
                    const t = P(e.dateTime, !0);
                    if (!t) continue;
                    o(e, t);
                } else if (_(e)) {
                    if (!e.ariaLabel) continue;
                    const t = P(e.ariaLabel, !0);
                    if (!t) continue;
                    o(e, t);
                }
            }
            n.push(...W(e));
        }
    }
    return n;
}
function V(e) {
    const t = e.lastIndexOf(".");
    return e.substring(t, e.length).includes("[");
}
function X(e) {
    if (!V(e)) return null;
    const t = e.split(".");
    return t[t.length - 1] = t[t.length - 1].replace(/\[.*?\]/g, "[]"), t.join(".");
}
function F(e, t) {
    return !(!V(e.path) || !V(t.path)) && X(e.path) === X(t.path);
}
function $(e, t, n, o) {
    if (!e.getAttribute("data-sanity") || e.getAttribute("data-sanity-drag-disable") || !t || !z(t) || !V(t.path)) return null;
    const r = e.getAttribute("data-sanity-drag-group"), i = [
        ...n
    ].reduce((e, n)=>{
        const i = o.get(n), a = n.getAttribute("data-sanity-drag-disable"), s = n.getAttribute("data-sanity-drag-group"), l = null !== n.getAttribute("data-sanity"), c = null === r || r === s;
        return i && !a && z(i.sanity) && F(t, i.sanity) && c && l && e.push(i), e;
    }, []);
    return i.length <= 1 ? null : i;
}
function B({ handler: e, overlayElement: t, inFrame: n, optimisticActorReady: o }) {
    let r = !1;
    const i = new Map, a = new WeakMap, s = new Set, l = new WeakMap, c = n;
    let m, y, p, f = !1, g = [];
    const h = ()=>g[g.length - 1];
    function v(e, t) {
        e.removeEventListener("click", t.click, {
            capture: !0
        }), e.removeEventListener("contextmenu", t.contextmenu, {
            capture: !0
        }), e.removeEventListener("mousemove", t.mousemove, {
            capture: !0
        }), e.removeEventListener("mousedown", t.mousedown, {
            capture: !0
        }), e.removeEventListener("mouseenter", t.mouseenter), e.removeEventListener("mouseleave", t.mouseleave);
    }
    function w({ id: t, elements: n, handlers: o }) {
        const { element: r, measureElement: i } = n;
        (function(e, t) {
            e.addEventListener("click", t.click, {
                capture: !0
            }), e.addEventListener("contextmenu", t.contextmenu, {
                capture: !0
            }), e.addEventListener("mousemove", t.mousemove, {
                once: !0,
                capture: !0
            }), e.addEventListener("mousedown", t.mousedown, {
                capture: !0
            });
        })(r, o), m.observe(i), e({
            type: "element/activate",
            id: t
        });
    }
    function x({ id: t, elements: n, handlers: o }) {
        const { element: r, measureElement: i } = n;
        v(r, o), m.unobserve(i), g = g.filter((e)=>e !== r), e({
            type: "element/deactivate",
            id: t
        });
    }
    function E() {
        if (!n || !o) return;
        const t = h();
        if (!t) return;
        const r = a.get(t)?.sanity;
        if (!r || !z(r)) return;
        const i = $(t, r, s, a) ? "move" : "auto";
        e({
            type: "overlay/setCursor",
            element: t,
            cursor: i
        });
    }
    function b({ elements: m, sanity: p }) {
        const { element: v, measureElement: x } = m, b = {
            click (t) {
                const n = t.target;
                if (v === h() && v.contains(n)) {
                    c && (t.preventDefault(), t.stopPropagation());
                    const n = a.get(v)?.sanity;
                    n && !f && e({
                        type: "element/click",
                        id: M,
                        sanity: n
                    });
                }
            },
            contextmenu (t) {
                if (!("path" in p && n && o && p.path.split(".").pop()?.includes("[_key=="))) return;
                const r = t.target;
                v === h() && v.contains(r) && (c && (t.preventDefault(), t.stopPropagation()), e({
                    type: "element/contextmenu",
                    id: M,
                    position: {
                        x: t.clientX,
                        y: t.clientY
                    },
                    sanity: p
                }));
            },
            mousedown (t) {
                if (t.preventDefault(), t.currentTarget !== g.at(-1) || v.getAttribute("data-sanity-drag-disable") || !n || !o) return;
                const r = a.get(v)?.sanity;
                if (!r || !z(r) || !V(r.path)) return;
                const i = $(v, p, s, a);
                i && D({
                    element: v,
                    handler: e,
                    mouseEvent: t,
                    overlayGroup: i,
                    target: r,
                    onSequenceStart: ()=>{
                        f = !0;
                    },
                    onSequenceEnd: ()=>{
                        setTimeout(()=>{
                            f = !1;
                        }, 250);
                    }
                });
            },
            mousemove (e) {
                b.mouseenter(e);
                const t = e.currentTarget;
                t && (t.addEventListener("mouseenter", b.mouseenter), t.addEventListener("mouseleave", b.mouseleave));
            },
            mouseenter () {
                document.querySelector("vercel-live-feedback") && v.closest("[data-vercel-edit-info]") || v.closest("[data-vercel-edit-target]") || (g.push(v), e({
                    type: "element/mouseenter",
                    id: M,
                    rect: d(v)
                }), E());
            },
            mouseleave (n) {
                function o() {
                    g.pop();
                    const t = h();
                    if (e({
                        type: "element/mouseleave",
                        id: M
                    }), t) {
                        const n = a.get(t);
                        n && e({
                            type: "element/mouseenter",
                            id: n.id,
                            rect: d(t)
                        });
                    }
                    E();
                }
                const { relatedTarget: r } = n, i = N(r), s = t.contains(i);
                if (R(i) && s) return function e(t) {
                    const n = (r)=>{
                        const { relatedTarget: i } = r;
                        N(i) ? i && R(i) && (t.removeEventListener("mouseleave", n), e(i)) : (t.removeEventListener("mouseleave", n), o());
                    };
                    t.addEventListener("mouseleave", n);
                }(i);
                o();
            }
        }, M = u(), L = {
            id: M,
            elements: m,
            sanity: p,
            handlers: b
        };
        s.add(v), l.set(x, v), i.set(M, v), a.set(v, L), y?.observe(v), e({
            type: "element/register",
            id: M,
            element: v,
            rect: d(v),
            sanity: p,
            dragDisabled: !!v.getAttribute("data-sanity-drag-disable")
        }), r && w(L);
    }
    function M({ elements: t, sanity: n }) {
        const { element: o } = t, r = a.get(o);
        r && (a.set(o, {
            ...r,
            sanity: n
        }), e({
            type: "element/update",
            id: r.id,
            rect: d(o),
            sanity: n
        }));
    }
    function L(e) {
        const t = W(e);
        for (const e of t){
            const { element: t } = e.elements;
            a.has(t) ? M(e) : b(e);
        }
    }
    function T(t) {
        const n = a.get(t);
        if (n) {
            const { id: o, handlers: r } = n;
            v(t, r), m.unobserve(t), a.delete(t), s.delete(t), i.delete(o), e({
                type: "element/unregister",
                id: o
            });
        }
    }
    function S(e) {
        let n = !1;
        for (const o of e){
            const { target: e, type: r } = o, i = "characterData" === r ? e.parentElement : e;
            i === t || t.contains(i) || (n = !0, R(i) && L({
                childNodes: [
                    i
                ]
            }));
        }
        if (n) for (const e of s)e.isConnected || T(e);
    }
    function k(t) {
        const n = a.get(t);
        n && e({
            type: "element/updateRect",
            id: n.id,
            rect: d(t)
        });
    }
    function U(e) {
        for (const t of e){
            const e = t.target;
            if (R(e)) {
                const t = l.get(e);
                if (!t) return;
                k(t);
            }
        }
    }
    function I(e) {
        if (r) for (const t of e){
            const { target: e } = t, n = R(e) && a.get(e);
            n && (t.isIntersecting ? w(n) : x(n));
        }
    }
    function C(t) {
        const n = N(t.target);
        n ? "capture" === n.dataset.sanityOverlayElement && (t.preventDefault(), t.stopPropagation()) : (g = [], e({
            type: "overlay/blur"
        }));
    }
    function A() {
        for (const e of s)k(e);
    }
    function O(t) {
        "Escape" === t.key && (g = [], e({
            type: "overlay/blur"
        }));
    }
    function P(e) {
        const { target: t } = e;
        if (t !== window.document && R(t)) for (const e of s)t.contains(e) && k(e);
    }
    function Y() {
        r || (y = new IntersectionObserver(I, {
            threshold: .3
        }), s.forEach((e)=>y.observe(e)), e({
            type: "overlay/activate"
        }), r = !0);
    }
    function G() {
        r && (y?.disconnect(), s.forEach((e)=>{
            const t = a.get(e);
            t && x(t);
        }), e({
            type: "overlay/deactivate"
        }), r = !1);
    }
    return window.document.fonts.ready.then(()=>{
        for (const e of s)k(e);
    }), window.addEventListener("click", C), window.addEventListener("contextmenu", C), window.addEventListener("keydown", O), window.addEventListener("resize", A), window.addEventListener("scroll", P, {
        capture: !0,
        passive: !0
    }), m = new ResizeObserver(U), p = new MutationObserver(S), p.observe(document.body, {
        attributes: !0,
        characterData: !0,
        childList: !0,
        subtree: !0
    }), L(document.body), Y(), {
        activate: Y,
        deactivate: G,
        destroy: function() {
            window.removeEventListener("click", C), window.removeEventListener("contextmenu", C), window.removeEventListener("keydown", O), window.removeEventListener("resize", A), window.removeEventListener("scroll", P), p.disconnect(), m.disconnect(), s.forEach((e)=>{
                T(e);
            }), i.clear(), s.clear(), g = [], G();
        }
    };
}
const J = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
;
 //# sourceMappingURL=SharedStateContext.js.map
}}),
"[project]/node_modules/next-sanity/node_modules/@sanity/visual-editing/dist/_chunks-es/create-data-attribute.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "a": (()=>m),
    "b": (()=>u),
    "c": (()=>f),
    "i": (()=>k)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@sanity/comlink/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@sanity/client/dist/_chunks-es/resolveEditInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$transformSanityNodeData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-sanity/node_modules/@sanity/visual-editing/dist/_chunks-es/transformSanityNodeData.js [app-client] (ecmascript)");
;
;
;
const y = {
    "handshake/syn": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MSG_HANDSHAKE_SYN"],
    "handshake/syn-ack": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MSG_HANDSHAKE_SYN_ACK"],
    "handshake/ack": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MSG_HANDSHAKE_ACK"],
    "channel/response": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MSG_RESPONSE"],
    "channel/heartbeat": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MSG_HEARTBEAT"],
    "channel/disconnect": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MSG_DISCONNECT"],
    "overlay/focus": "visual-editing/focus",
    "overlay/navigate": "visual-editing/navigate",
    "overlay/toggle": "visual-editing/toggle",
    "presentation/toggleOverlay": "presentation/toggle-overlay"
}, d = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MSG_HANDSHAKE_SYN"]]: "handshake/syn",
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MSG_HANDSHAKE_SYN_ACK"]]: "handshake/syn-ack",
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MSG_HANDSHAKE_ACK"]]: "handshake/ack",
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MSG_RESPONSE"]]: "channel/response",
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MSG_HEARTBEAT"]]: "channel/heartbeat",
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MSG_DISCONNECT"]]: "channel/disconnect",
    "visual-editing/focus": "overlay/focus",
    "visual-editing/navigate": "overlay/navigate",
    "visual-editing/toggle": "overlay/toggle",
    "presentation/toggle-overlay": "presentation/toggleOverlay"
}, h = (e)=>{
    const { data: t } = e;
    return t && "object" == typeof t && "domain" in t && "type" in t && "from" in t && "to" in t && ("sanity/channels" === t.domain && (t.domain = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMAIN"]), "overlays" === t.to && (t.to = "visual-editing"), "overlays" === t.from && (t.from = "visual-editing"), t.type = y[t.type] ?? t.type), e;
}, g = ({ context: e }, t)=>{
    const { sources: n, targetOrigin: o } = e, i = ((e)=>(e.domain === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMAIN"] && (e.domain = "sanity/channels"), "visual-editing" === e.to && (e.to = "overlays"), "visual-editing" === e.from && (e.from = "overlays"), e.type = d[e.type] ?? e.type, "channel/response" === e.type && e.responseTo && !e.data && (e.data = {
            responseTo: e.responseTo
        }), ("handshake/syn" === e.type || "handshake/syn-ack" === e.type || "handshake/ack" === e.type) && (e.data = {
            id: e.connectionId
        }), e))(t.message);
    n.forEach((e)=>{
        e.postMessage(i, {
            targetOrigin: o
        });
    });
}, u = ()=>({
        listen: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createListenLogic"])(h),
        requestMachine: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$comlink$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRequestMachine"])().provide({
            actions: {
                "send message": g
            }
        })
    });
function f(e) {
    function t(e) {
        return e ? "string" == typeof e ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studioPath"].fromString(e) : e : [];
    }
    function a(e) {
        if (!e.id) throw new Error("`id` is required to create a data attribute");
        if (!e.type) throw new Error("`type` is required to create a data attribute");
        if (!e.path || !e.path.length) throw new Error("`path` is required to create a data attribute");
        const t = {
            baseUrl: e.baseUrl || "/",
            workspace: e.workspace,
            tool: e.tool,
            type: e.type,
            id: e.id,
            path: "string" == typeof e.path ? e.path : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$_chunks$2d$es$2f$resolveEditInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studioPath"].toString(e.path)
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$transformSanityNodeData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(t);
    }
    const n = (n)=>a({
            ...e,
            path: [
                ...t(e.path),
                ...t(n)
            ]
        });
    return n.toString = function() {
        return a(e);
    }, n.combine = function(t) {
        return f({
            ...e,
            ...t
        });
    }, n.scope = function(a) {
        return f({
            ...e,
            path: [
                ...t(e.path),
                ...t(a)
            ]
        });
    }, n;
}
const v = {
    alt: "altKey",
    ctrl: "ctrlKey",
    mod: typeof window < "u" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform) ? "metaKey" : "ctrlKey",
    shift: "shiftKey"
};
function m(e, t) {
    return e.every((e)=>v[e] ? t[v[e]] : t.key === e.toUpperCase());
}
function k(e) {
    return "Alt" === e.key;
}
;
 //# sourceMappingURL=create-data-attribute.js.map
}}),
}]);

//# sourceMappingURL=cdce3_%40sanity_visual-editing_dist__chunks-es_ccc80c._.js.map