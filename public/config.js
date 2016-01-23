System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build.js": [
      "lib/main.js",
      "npm:react@0.14.6",
      "npm:react-router@2.0.0-rc5",
      "npm:react-dom@0.14.3",
      "lib/components/AppController.js",
      "lib/components/views/NotLoggedInHome.js",
      "lib/components/views/LoggedInHome.js",
      "lib/components/views/AddNewPost.js",
      "lib/components/views/ViewPost.js",
      "lib/components/views/PostWrapper.js",
      "lib/components/views/UserProfile.js",
      "npm:babel-runtime@5.8.34/helpers/class-call-check",
      "npm:react@0.14.6/react",
      "npm:react-router@2.0.0-rc5/lib/index",
      "npm:babel-runtime@5.8.34/helpers/get",
      "npm:babel-runtime@5.8.34/helpers/inherits",
      "npm:babel-runtime@5.8.34/helpers/create-class",
      "lib/components/general/NotLoggedInNav.js",
      "lib/components/general/SignUpForm.js",
      "lib/components/general/PostFeed.js",
      "lib/stores/UserStore.js",
      "npm:react-dom@0.14.3/index",
      "lib/actions/UserActions.js",
      "lib/actions/PostActions.js",
      "lib/stores/PostStore.js",
      "lib/components/general/LoggedInNav.js",
      "lib/components/general/Comment.js",
      "npm:jquery@2.2.0",
      "npm:react-router@2.0.0-rc5/lib/PropTypes",
      "lib/AppDispatcher.js",
      "npm:react@0.14.6/lib/React",
      "npm:react-router@2.0.0-rc5/lib/IndexLink",
      "npm:babel-runtime@5.8.34/core-js/object/get-own-property-descriptor",
      "npm:babel-runtime@5.8.34/core-js/object/create",
      "npm:babel-runtime@5.8.34/core-js/object/set-prototype-of",
      "npm:babel-runtime@5.8.34/core-js/object/define-property",
      "lib/components/general/Post.js",
      "github:jspm/nodelibs-events@0.1.1",
      "npm:react-router@2.0.0-rc5/lib/Link",
      "npm:react-router@2.0.0-rc5/lib/IndexRedirect",
      "npm:react-router@2.0.0-rc5/lib/Redirect",
      "npm:react-router@2.0.0-rc5/lib/History",
      "npm:react-router@2.0.0-rc5/lib/IndexRoute",
      "npm:react-router@2.0.0-rc5/lib/Route",
      "npm:react-router@2.0.0-rc5/lib/Lifecycle",
      "npm:react-router@2.0.0-rc5/lib/RouteContext",
      "npm:react-router@2.0.0-rc5/lib/RouteUtils",
      "npm:react-router@2.0.0-rc5/lib/RouterContext",
      "npm:react-router@2.0.0-rc5/lib/RoutingContext",
      "npm:react-router@2.0.0-rc5/lib/match",
      "npm:react-router@2.0.0-rc5/lib/PatternUtils",
      "npm:react-router@2.0.0-rc5/lib/Router",
      "npm:react-router@2.0.0-rc5/lib/useRoutes",
      "npm:react-router@2.0.0-rc5/lib/useRouterHistory",
      "npm:react-router@2.0.0-rc5/lib/browserHistory",
      "npm:react-router@2.0.0-rc5/lib/hashHistory",
      "npm:react-router@2.0.0-rc5/lib/createMemoryHistory",
      "npm:react@0.14.6/lib/ReactDOM",
      "lib/API.js",
      "lib/authorize.js",
      "lib/components/general/CommentOnComment.js",
      "npm:jquery@2.2.0/dist/jquery",
      "npm:react@0.14.6/lib/Object.assign",
      "npm:react@0.14.6/lib/ReactCurrentOwner",
      "npm:react@0.14.6/lib/ReactVersion",
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment",
      "npm:react@0.14.6/lib/ReactDOMServer",
      "npm:flux@2.1.1",
      "npm:core-js@1.2.6/library/fn/object/get-own-property-descriptor",
      "npm:core-js@1.2.6/library/fn/object/create",
      "npm:core-js@1.2.6/library/fn/object/set-prototype-of",
      "github:jspm/nodelibs-process@0.1.2",
      "npm:core-js@1.2.6/library/fn/object/define-property",
      "npm:invariant@2.2.0",
      "npm:react-router@2.0.0-rc5/lib/getRouteParams",
      "npm:history@2.0.0-rc2/lib/useBasename",
      "npm:react-router@2.0.0-rc5/lib/createRouterHistory",
      "npm:react@0.14.6/lib/ReactReconciler",
      "npm:react@0.14.6/lib/renderSubtreeIntoContainer",
      "github:jspm/nodelibs-events@0.1.1/index",
      "npm:react@0.14.6/lib/ReactIsomorphic",
      "npm:react-router@2.0.0-rc5/lib/warning",
      "npm:react-router@2.0.0-rc5/lib/deprecateObjectProperties",
      "npm:react-router@2.0.0-rc5/lib/RouterUtils",
      "npm:history@2.0.0-rc2/lib/createHashHistory",
      "npm:history@2.0.0-rc2/lib/useQueries",
      "npm:history@2.0.0-rc2/lib/createBrowserHistory",
      "npm:history@2.0.0-rc2/lib/createMemoryHistory",
      "npm:react@0.14.6/lib/ReactDOMTextComponent",
      "npm:react@0.14.6/lib/ReactPerf",
      "npm:fbjs@0.6.1/lib/warning",
      "npm:react@0.14.6/lib/deprecated",
      "npm:react-router@2.0.0-rc5/lib/createTransitionManager",
      "npm:react@0.14.6/lib/ReactDefaultInjection",
      "npm:react@0.14.6/lib/ReactInstanceHandles",
      "npm:react@0.14.6/lib/ReactMount",
      "npm:react@0.14.6/lib/ReactUpdates",
      "npm:react@0.14.6/lib/findDOMNode",
      "npm:babel-runtime@5.8.34/core-js/promise",
      "lib/actions/ServerActions.js",
      "npm:core-js@1.2.6/library/modules/$",
      "npm:core-js@1.2.6/library/modules/$.core",
      "npm:history@2.0.0-rc2/lib/ExecutionEnvironment",
      "npm:history@2.0.0-rc2/lib/extractPath",
      "npm:history@2.0.0-rc2/lib/Actions",
      "npm:history@2.0.0-rc2/lib/DOMUtils",
      "npm:react@0.14.6/lib/escapeTextContentForBrowser",
      "npm:fbjs@0.6.1/lib/emptyFunction",
      "npm:react@0.14.6/lib/ClientReactRootIndex",
      "npm:react@0.14.6/lib/ServerReactRootIndex",
      "npm:react@0.14.6/lib/ReactRootIndex",
      "npm:react@0.14.6/lib/ReactDOMFeatureFlags",
      "npm:react@0.14.6/lib/ReactEmptyComponentRegistry",
      "npm:react@0.14.6/lib/ReactInstanceMap",
      "npm:react@0.14.6/lib/shouldUpdateReactComponent",
      "npm:events@1.0.2",
      "npm:flux@2.1.1/index",
      "npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor",
      "npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of",
      "npm:warning@2.1.0",
      "npm:query-string@3.0.0",
      "npm:react-router@2.0.0-rc5/lib/isActive",
      "npm:react-router@2.0.0-rc5/lib/computeChangedRoutes",
      "npm:react-router@2.0.0-rc5/lib/getComponents",
      "npm:react@0.14.6/lib/ReactReconcileTransaction",
      "npm:react@0.14.6/lib/ReactInjection",
      "npm:react@0.14.6/lib/SVGDOMPropertyConfig",
      "npm:react@0.14.6/lib/ReactMarkupChecksum",
      "npm:fbjs@0.6.1/lib/containsNode",
      "npm:invariant@2.2.0/browser",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:history@2.0.0-rc2/lib/runTransitionHook",
      "npm:history@2.0.0-rc2/lib/parsePath",
      "npm:history@2.0.0-rc2/lib/deprecate",
      "npm:react@0.14.6/lib/ReactRef",
      "npm:react@0.14.6/lib/ReactElement",
      "npm:history@2.0.0-rc2/lib/DOMStateStorage",
      "npm:history@2.0.0-rc2/lib/createDOMHistory",
      "npm:history@2.0.0-rc2/lib/createHistory",
      "npm:react@0.14.6/lib/ReactComponentBrowserEnvironment",
      "npm:react-router@2.0.0-rc5/lib/TransitionUtils",
      "npm:react-router@2.0.0-rc5/lib/matchRoutes",
      "npm:fbjs@0.6.1/lib/invariant",
      "npm:react@0.14.6/lib/ReactBrowserEventEmitter",
      "npm:fbjs@0.6.1/lib/emptyObject",
      "npm:react@0.14.6/lib/ReactServerRendering",
      "npm:react@0.14.6/lib/ReactChildren",
      "npm:react@0.14.6/lib/ReactComponent",
      "npm:react@0.14.6/lib/ReactDOMFactories",
      "npm:react@0.14.6/lib/ReactClass",
      "npm:react@0.14.6/lib/ReactElementValidator",
      "npm:react@0.14.6/lib/ReactPropTypes",
      "npm:react@0.14.6/lib/onlyChild",
      "npm:react@0.14.6/lib/DOMChildrenOperations",
      "npm:react@0.14.6/lib/DOMPropertyOperations",
      "npm:react@0.14.6/lib/setTextContent",
      "npm:react@0.14.6/lib/validateDOMNesting",
      "npm:react@0.14.6/lib/BeforeInputEventPlugin",
      "npm:react@0.14.6/lib/ChangeEventPlugin",
      "npm:react@0.14.6/lib/DefaultEventPluginOrder",
      "npm:react@0.14.6/lib/EnterLeaveEventPlugin",
      "npm:react@0.14.6/lib/HTMLDOMPropertyConfig",
      "npm:react@0.14.6/lib/ReactBrowserComponentMixin",
      "npm:react@0.14.6/lib/ReactDefaultBatchingStrategy",
      "npm:react@0.14.6/lib/ReactDOMComponent",
      "npm:react@0.14.6/lib/ReactEventListener",
      "npm:react@0.14.6/lib/SelectEventPlugin",
      "npm:react@0.14.6/lib/SimpleEventPlugin",
      "npm:react@0.14.6/lib/ReactDefaultPerf",
      "npm:react@0.14.6/lib/DOMProperty",
      "npm:react@0.14.6/lib/ReactUpdateQueue",
      "npm:react@0.14.6/lib/instantiateReactComponent",
      "npm:react@0.14.6/lib/setInnerHTML",
      "npm:react@0.14.6/lib/CallbackQueue",
      "npm:react@0.14.6/lib/Transaction",
      "npm:react@0.14.6/lib/PooledClass",
      "npm:core-js@1.2.6/library/fn/promise",
      "npm:events@1.0.2/events",
      "npm:react-router@2.0.0-rc5/lib/AsyncUtils",
      "npm:react@0.14.6/lib/adler32",
      "npm:history@2.0.0-rc2/lib/AsyncUtils",
      "npm:react@0.14.6/lib/ViewportMetrics",
      "npm:react@0.14.6/lib/ReactServerBatchingStrategy",
      "npm:fbjs@0.6.1/lib/mapObject",
      "npm:fbjs@0.6.1/lib/keyOf",
      "npm:react@0.14.6/lib/getIteratorFn",
      "npm:react@0.14.6/lib/getEventTarget",
      "npm:react@0.14.6/lib/isTextInputElement",
      "npm:react@0.14.6/lib/ReactDOMButton",
      "npm:fbjs@0.6.1/lib/shallowEqual",
      "npm:fbjs@0.6.1/lib/getUnboundedScrollPosition",
      "npm:fbjs@0.6.1/lib/getActiveElement",
      "npm:react@0.14.6/lib/getEventCharCode",
      "npm:deep-equal@1.0.1",
      "npm:core-js@1.2.6/library/modules/$.to-iobject",
      "npm:core-js@1.2.6/library/modules/$.object-sap",
      "npm:core-js@1.2.6/library/modules/$.export",
      "npm:core-js@1.2.6/library/modules/$.set-proto",
      "npm:react@0.14.6/lib/ReactEmptyComponent",
      "npm:fbjs@0.6.1/lib/isTextNode",
      "npm:process@0.11.2",
      "npm:react@0.14.6/lib/ReactEventEmitterMixin",
      "npm:react@0.14.6/lib/quoteAttributeValueForBrowser",
      "npm:react@0.14.6/lib/FallbackCompositionState",
      "npm:react@0.14.6/lib/SyntheticCompositionEvent",
      "npm:react@0.14.6/lib/SyntheticInputEvent",
      "npm:react@0.14.6/lib/SyntheticMouseEvent",
      "npm:react@0.14.6/lib/SyntheticClipboardEvent",
      "npm:react@0.14.6/lib/SyntheticFocusEvent",
      "npm:react@0.14.6/lib/SyntheticKeyboardEvent",
      "npm:react@0.14.6/lib/SyntheticDragEvent",
      "npm:react@0.14.6/lib/SyntheticTouchEvent",
      "npm:react@0.14.6/lib/SyntheticUIEvent",
      "npm:react@0.14.6/lib/SyntheticWheelEvent",
      "npm:react@0.14.6/lib/ReactDefaultPerfAnalysis",
      "npm:fbjs@0.6.1/lib/performanceNow",
      "npm:query-string@3.0.0/index",
      "npm:warning@2.1.0/browser",
      "npm:react@0.14.6/lib/canDefineProperty",
      "npm:history@2.0.0-rc2/lib/createLocation",
      "npm:react@0.14.6/lib/ReactPropTypeLocationNames",
      "npm:fbjs@0.6.1/lib/keyMirror",
      "npm:react@0.14.6/lib/ReactMultiChild",
      "npm:fbjs@0.6.1/lib/EventListener",
      "npm:flux@2.1.1/lib/Dispatcher",
      "npm:react@0.14.6/lib/ReactInputSelection",
      "npm:react@0.14.6/lib/EventPluginHub",
      "npm:react@0.14.6/lib/ReactComponentEnvironment",
      "npm:react@0.14.6/lib/ReactNativeComponent",
      "npm:react@0.14.6/lib/ReactOwner",
      "npm:react@0.14.6/lib/ReactDOMIDOperations",
      "npm:react@0.14.6/lib/EventConstants",
      "npm:react@0.14.6/lib/EventPluginRegistry",
      "npm:react@0.14.6/lib/isEventSupported",
      "npm:react@0.14.6/lib/ReactServerRenderingTransaction",
      "npm:react@0.14.6/lib/traverseAllChildren",
      "npm:react@0.14.6/lib/ReactNoopUpdateQueue",
      "npm:react@0.14.6/lib/ReactPropTypeLocations",
      "npm:react@0.14.6/lib/Danger",
      "npm:react@0.14.6/lib/ReactMultiChildUpdateTypes",
      "npm:react@0.14.6/lib/EventPropagators",
      "npm:react@0.14.6/lib/SyntheticEvent",
      "npm:react@0.14.6/lib/AutoFocusUtils",
      "npm:react@0.14.6/lib/CSSPropertyOperations",
      "npm:react@0.14.6/lib/ReactDOMInput",
      "npm:react@0.14.6/lib/ReactDOMTextarea",
      "npm:react@0.14.6/lib/ReactDOMOption",
      "npm:react@0.14.6/lib/ReactDOMSelect",
      "npm:react@0.14.6/lib/ReactCompositeComponent",
      "npm:core-js@1.2.6/library/modules/es6.object.to-string",
      "npm:core-js@1.2.6/library/modules/es6.string.iterator",
      "npm:core-js@1.2.6/library/modules/web.dom.iterable",
      "npm:core-js@1.2.6/library/modules/es6.promise",
      "npm:core-js@1.2.6/library/modules/$.fails",
      "npm:core-js@1.2.6/library/modules/$.defined",
      "npm:core-js@1.2.6/library/modules/$.global",
      "npm:core-js@1.2.6/library/modules/$.is-object",
      "npm:fbjs@0.6.1/lib/isNode",
      "npm:process@0.11.2/browser",
      "npm:react@0.14.6/lib/getEventModifierState",
      "npm:fbjs@0.6.1/lib/focusNode",
      "npm:react@0.14.6/lib/forEachAccumulated",
      "npm:react@0.14.6/lib/CSSProperty",
      "npm:fbjs@0.6.1/lib/memoizeStringOnly",
      "npm:deep-equal@1.0.1/index",
      "npm:strict-uri-encode@1.1.0",
      "npm:core-js@1.2.6/library/modules/$.iobject",
      "npm:core-js@1.2.6/library/modules/$.ctx",
      "npm:core-js@1.2.6/library/modules/$.an-object",
      "npm:react@0.14.6/lib/getEventKey",
      "npm:fbjs@0.6.1/lib/performance",
      "npm:fbjs@0.6.1/lib/camelizeStyleName",
      "npm:react@0.14.6/lib/dangerousStyleValue",
      "npm:fbjs@0.6.1/lib/hyphenateStyleName",
      "npm:fbjs@0.1.0-alpha.7/lib/invariant",
      "npm:react@0.14.6/lib/ReactErrorUtils",
      "npm:fbjs@0.6.1/lib/createNodesFromMarkup",
      "npm:fbjs@0.6.1/lib/getMarkupWrap",
      "npm:react@0.14.6/lib/getTextContentAccessor",
      "npm:react@0.14.6/lib/ReactChildReconciler",
      "npm:react@0.14.6/lib/flattenChildren",
      "npm:react@0.14.6/lib/ReactDOMSelection",
      "npm:react@0.14.6/lib/EventPluginUtils",
      "npm:react@0.14.6/lib/accumulateInto",
      "npm:react@0.14.6/lib/LinkedValueUtils",
      "npm:core-js@1.2.6/library/modules/$.iterators",
      "npm:core-js@1.2.6/library/modules/$.string-at",
      "npm:core-js@1.2.6/library/modules/$.iter-define",
      "npm:core-js@1.2.6/library/modules/es6.array.iterator",
      "npm:core-js@1.2.6/library/modules/$.library",
      "npm:core-js@1.2.6/library/modules/$.strict-new",
      "npm:core-js@1.2.6/library/modules/$.a-function",
      "npm:core-js@1.2.6/library/modules/$.same-value",
      "npm:core-js@1.2.6/library/modules/$.classof",
      "npm:core-js@1.2.6/library/modules/$.for-of",
      "npm:core-js@1.2.6/library/modules/$.wks",
      "npm:core-js@1.2.6/library/modules/$.species-constructor",
      "npm:core-js@1.2.6/library/modules/$.descriptors",
      "npm:core-js@1.2.6/library/modules/$.redefine-all",
      "npm:core-js@1.2.6/library/modules/$.set-to-string-tag",
      "npm:core-js@1.2.6/library/modules/$.set-species",
      "npm:core-js@1.2.6/library/modules/$.microtask",
      "npm:core-js@1.2.6/library/modules/$.iter-detect",
      "npm:deep-equal@1.0.1/lib/keys",
      "npm:strict-uri-encode@1.1.0/index",
      "npm:deep-equal@1.0.1/lib/is_arguments",
      "npm:core-js@1.2.6/library/modules/$.cof",
      "npm:fbjs@0.6.1/lib/camelize",
      "npm:fbjs@0.6.1/lib/hyphenate",
      "npm:fbjs@0.6.1/lib/createArrayFromMixed",
      "npm:react@0.14.6/lib/getNodeForCharacterOffset",
      "npm:core-js@1.2.6/library/modules/$.to-integer",
      "npm:core-js@1.2.6/library/modules/$.has",
      "npm:core-js@1.2.6/library/modules/$.add-to-unscopables",
      "npm:core-js@1.2.6/library/modules/$.iter-step",
      "npm:core-js@1.2.6/library/modules/$.redefine",
      "npm:core-js@1.2.6/library/modules/$.hide",
      "npm:core-js@1.2.6/library/modules/$.iter-create",
      "npm:core-js@1.2.6/library/modules/$.uid",
      "npm:core-js@1.2.6/library/modules/$.is-array-iter",
      "npm:core-js@1.2.6/library/modules/$.to-length",
      "npm:core-js@1.2.6/library/modules/$.iter-call",
      "npm:core-js@1.2.6/library/modules/core.get-iterator-method",
      "npm:core-js@1.2.6/library/modules/$.shared",
      "npm:core-js@1.2.6/library/modules/$.task",
      "npm:fbjs@0.6.1/lib/toArray",
      "npm:core-js@1.2.6/library/modules/$.property-desc",
      "npm:core-js@1.2.6/library/modules/$.invoke",
      "npm:core-js@1.2.6/library/modules/$.html",
      "npm:core-js@1.2.6/library/modules/$.dom-create"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.34",
    "babel-runtime": "npm:babel-runtime@5.8.34",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "core-js": "npm:core-js@1.2.6",
    "events": "github:jspm/nodelibs-events@0.1.1",
    "flux": "npm:flux@2.1.1",
    "jquery": "npm:jquery@2.2.0",
    "react": "npm:react@0.14.6",
    "react-dom": "npm:react-dom@0.14.3",
    "react-relay": "npm:react-relay@0.6.0",
    "react-router": "npm:react-router@2.0.0-rc5",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.7"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "github:components/jquery@2.2.0"
    },
    "npm:asap@2.0.3": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.5.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-relay-plugin@0.6.0": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graphql": "npm:graphql@0.4.13",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-runtime@5.8.24": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-runtime@5.8.34": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:browserify-aes@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.0": {
      "bn.js": "npm:bn.js@4.5.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.5.2",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.0.2",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.5.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.0.2"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.0",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@5.0.0": {
      "bn.js": "npm:bn.js@4.5.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:elliptic@6.0.2": {
      "bn.js": "npm:bn.js@4.5.2",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:fbemitter@2.0.1": {
      "fbjs": "npm:fbjs@0.6.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fbjs@0.1.0-alpha.7": {
      "core-js": "npm:core-js@1.2.6",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.1.1",
      "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
    },
    "npm:fbjs@0.5.1": {
      "core-js": "npm:core-js@1.2.6",
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.0.4",
      "ua-parser-js": "npm:ua-parser-js@0.7.10",
      "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
    },
    "npm:fbjs@0.6.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:flux@2.1.1": {
      "fbemitter": "npm:fbemitter@2.0.1",
      "fbjs": "npm:fbjs@0.1.0-alpha.7",
      "immutable": "npm:immutable@3.7.6",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:graphql@0.4.13": {
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:history@2.0.0-rc2": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "deep-equal": "npm:deep-equal@1.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "invariant": "npm:invariant@2.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "query-string": "npm:query-string@3.0.0",
      "warning": "npm:warning@2.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.2.0": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.1.0": {
      "js-tokens": "npm:js-tokens@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.5.2",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.2.1",
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:promise@7.0.4": {
      "asap": "npm:asap@2.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:promise@7.1.1": {
      "asap": "npm:asap@2.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.5.2",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:query-string@3.0.0": {
      "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-dom@0.14.3": {
      "react": "npm:react@0.14.6"
    },
    "npm:react-relay@0.6.0": {
      "babel-relay-plugin": "npm:babel-relay-plugin@0.6.0",
      "babel-runtime": "npm:babel-runtime@5.8.24",
      "fbjs": "npm:fbjs@0.5.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@0.14.6",
      "react-dom": "npm:react-dom@0.14.3",
      "react-static-container": "npm:react-static-container@1.0.0"
    },
    "npm:react-router@2.0.0-rc5": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "history": "npm:history@2.0.0-rc2",
      "invariant": "npm:invariant@2.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "warning": "npm:warning@2.1.0"
    },
    "npm:react-static-container@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@0.14.6"
    },
    "npm:react@0.14.6": {
      "fbjs": "npm:fbjs@0.6.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:ua-parser-js@0.7.10": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:warning@2.1.0": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
