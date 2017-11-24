"use strict";



define('ember-diff-attrs-test/app', ['exports', 'ember-diff-attrs-test/resolver', 'ember-load-initializers', 'ember-diff-attrs-test/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Application = Ember.Application;


  var App = Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('ember-diff-attrs-test/components/fork-me', ['exports', 'ember-fork-me/components/fork-me'], function (exports, _forkMe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _forkMe.default;
    }
  });
});
define('ember-diff-attrs-test/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('ember-diff-attrs-test/helpers/app-version', ['exports', 'ember-diff-attrs-test/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('ember-diff-attrs-test/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('ember-diff-attrs-test/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('ember-diff-attrs-test/helpers/times', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.times = times;

  var _slicedToArray = function () {
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

  var helper = Ember.Helper.helper;
  function times(_ref) /*, hash*/{
    var _ref2 = _slicedToArray(_ref, 2),
        count = _ref2[0],
        _ref2$ = _ref2[1],
        filler = _ref2$ === undefined ? null : _ref2$;

    return Array(count).fill(filler);
  }

  exports.default = helper(times);
});
define('ember-diff-attrs-test/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-diff-attrs-test/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('ember-diff-attrs-test/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ember-diff-attrs-test/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ember-diff-attrs-test/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('ember-diff-attrs-test/initializers/export-application-global', ['exports', 'ember-diff-attrs-test/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ember-diff-attrs-test/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ember-diff-attrs-test/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('ember-diff-attrs-test/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("ember-diff-attrs-test/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define("ember-diff-attrs-test/pods/application/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "vtBRMuqG", "block": "{\"symbols\":[],\"statements\":[[6,\"p\"],[7],[0,\"\\n  \"],[4,\"link-to\",[\"index\"],null,{\"statements\":[[0,\"ember-diff-attrs\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"link-to\",[\"did-change-attrs\"],null,{\"statements\":[[0,\"ember-did-change-attrs\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"link-to\",[\"observer\"],null,{\"statements\":[[0,\"observer\"]],\"parameters\":[]},null],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\\n\"],[1,[25,\"fork-me\",[\"https://github.com/lolmaus/ember-diff-attrs-test\"],null],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-diff-attrs-test/pods/application/template.hbs" } });
});
define('ember-diff-attrs-test/pods/components/x-item-did-change-attrs/component', ['exports', 'ember-diff-attrs-test/pods/components/x-item/component', 'ember-diff-attrs-test/pods/components/x-item/template', 'ember-did-change-attrs'], function (exports, _component, _template, _emberDidChangeAttrs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _component.default.extend(_emberDidChangeAttrs.default, {
    layout: _template.default,

    didChangeAttrsConfig: {
      attrs: ['one', 'two', 'three', 'four', 'five']
    },

    didChangeAttrs: function didChangeAttrs(changedAttrs) {
      this.set('changedAttrs', changedAttrs && Object.keys(changedAttrs));
    }
  });
});
define('ember-diff-attrs-test/pods/components/x-item-diff-attrs/component', ['exports', 'ember-diff-attrs-test/pods/components/x-item/component', 'ember-diff-attrs-test/pods/components/x-item/template', 'ember-diff-attrs'], function (exports, _component, _template, _emberDiffAttrs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _component.default.extend({
    layout: _template.default,

    didReceiveAttrs: (0, _emberDiffAttrs.default)('one', 'two', 'three', 'four', 'five', function (changedAttrs) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      this._super.apply(this, args);
      this.set('changedAttrs', changedAttrs && Object.keys(changedAttrs));
    })
  });
});
define('ember-diff-attrs-test/pods/components/x-item-observer/component', ['exports', 'ember-diff-attrs-test/pods/components/x-item/component', 'ember-diff-attrs-test/pods/components/x-item/template'], function (exports, _component, _template) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var computed = Ember.computed;
    var observer = Ember.observer;
    exports.default = _component.default.extend({
        layout: _template.default,

        didChangeAttrsConfig: {
            attrs: ['one', 'two', 'three', 'four', 'five']
        },

        didChangeAttrs: function didChangeAttrs() {
            this.set('changedAttrs', Object.keys(this.get('lastChangedAttrs')));
        },


        lastChangedAttrs: null,

        init: function init() {
            this.resetLastChangedAttrs();
            this.initObservers();
            this._super.apply(this, arguments);
        },
        createObserverFor: function createObserverFor(propertyName) {
            return function (target, key) {
                this.addChangedAttribute(propertyName);
            }.bind(this);
        },
        initObservers: function initObservers() {
            var _this = this;

            (this.get('didChangeAttrsConfig.attrs') || []).forEach(function (attrName) {
                var observerName = attrName + '@observer';
                _this[observerName] = _this.createObserverFor(attrName);
                _this.addObserver(attrName, _this, observerName);
            });
        },
        didReceiveAttrs: function didReceiveAttrs() {
            this.didChangeAttrs(this.lastChangedAttrs);
            this.resetLastChangedAttrs();
            this._super.apply(this, arguments);
        },
        addChangedAttribute: function addChangedAttribute(name) {
            this.lastChangedAttrs[name] = this.get(name);
        },
        resetLastChangedAttrs: function resetLastChangedAttrs() {
            this.set('lastChangedAttrs', {});
        }
    });
});
define('ember-diff-attrs-test/pods/components/x-item/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  exports.default = Component.extend({

    // ----- Arguments -----
    one: null,
    two: null,
    three: null,
    four: null,
    five: null,
    six: null,
    seven: null,
    eight: null,
    nine: null,
    ten: null,

    // ----- Static properties -----
    changedAttrs: null
  });
});
define("ember-diff-attrs-test/pods/components/x-item/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ol43HVJZ", "block": "{\"symbols\":[],\"statements\":[[0,\"Changed attrs: \"],[1,[18,\"changedAttrs\"],false]],\"hasEval\":false}", "meta": { "moduleName": "ember-diff-attrs-test/pods/components/x-item/template.hbs" } });
});
define('ember-diff-attrs-test/pods/components/x-toggler/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  var reads = Ember.computed.reads;
  exports.default = Component.extend({

    // ----- Arguments -----
    one: null,
    two: null,
    three: null,
    four: null,
    five: null,
    six: null,
    seven: null,
    eight: null,
    nine: null,
    ten: null,

    // ----- Computed properties -----
    oneR: reads('one'),
    twoR: reads('two'),
    threeR: reads('three'),
    fourR: reads('four'),
    fiveR: reads('five'),
    sixR: reads('six'),
    sevenR: reads('seven'),
    eightR: reads('eight'),
    nineR: reads('nine'),
    tenR: reads('ten'),

    // ----- Actions -----
    actions: {
      mutate: function mutate() {
        this.setProperties({
          one: this.get('oneR'),
          two: this.get('twoR'),
          three: this.get('threeR'),
          four: this.get('fourR'),
          five: this.get('fiveR'),
          six: this.get('sixR'),
          seven: this.get('sevenR'),
          eight: this.get('eightR'),
          nine: this.get('nineR'),
          ten: this.get('tenR')
        });
      }
    }
  });
});
define("ember-diff-attrs-test/pods/components/x-toggler/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "46pWzoHM", "block": "{\"symbols\":[],\"statements\":[[6,\"p\"],[7],[0,\"\\n  The first five items are tracked, 6-10 aren't\\n\"],[8],[0,\"\\n\\n\"],[6,\"p\"],[7],[0,\"\\n  \"],[6,\"label\"],[7],[1,[25,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[20,[\"oneR\"]]]]],false],[0,\" one\"],[8],[0,\"\\n  \"],[6,\"label\"],[7],[1,[25,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[20,[\"twoR\"]]]]],false],[0,\" two\"],[8],[0,\"\\n  \"],[6,\"label\"],[7],[1,[25,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[20,[\"threeR\"]]]]],false],[0,\" three\"],[8],[0,\"\\n  \"],[6,\"label\"],[7],[1,[25,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[20,[\"fourR\"]]]]],false],[0,\" four\"],[8],[0,\"\\n  \"],[6,\"label\"],[7],[1,[25,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[20,[\"fiveR\"]]]]],false],[0,\" five\"],[8],[0,\"\\n  \"],[6,\"label\"],[7],[1,[25,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[20,[\"sixR\"]]]]],false],[0,\" six\"],[8],[0,\"\\n  \"],[6,\"label\"],[7],[1,[25,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[20,[\"sevenR\"]]]]],false],[0,\" seven\"],[8],[0,\"\\n  \"],[6,\"label\"],[7],[1,[25,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[20,[\"eightR\"]]]]],false],[0,\" eight\"],[8],[0,\"\\n  \"],[6,\"label\"],[7],[1,[25,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[20,[\"nineR\"]]]]],false],[0,\" nine\"],[8],[0,\"\\n  \"],[6,\"label\"],[7],[1,[25,\"input\",null,[[\"type\",\"checked\"],[\"checkbox\",[20,[\"tenR\"]]]]],false],[0,\" ten\"],[8],[0,\"\\n\\n  \"],[6,\"button\"],[3,\"action\",[[19,0,[]],\"mutate\"]],[7],[0,\"\\n    Apply\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-diff-attrs-test/pods/components/x-toggler/template.hbs" } });
});
define("ember-diff-attrs-test/pods/did-change-attrs/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NK2BXoOZ", "block": "{\"symbols\":[\"i\"],\"statements\":[[1,[25,\"x-toggler\",null,[[\"one\",\"two\",\"three\",\"four\",\"five\",\"six\",\"seven\",\"eight\",\"nine\",\"ten\"],[[20,[\"one\"]],[20,[\"two\"]],[20,[\"three\"]],[20,[\"four\"]],[20,[\"five\"]],[20,[\"six\"]],[20,[\"seven\"]],[20,[\"eight\"]],[20,[\"nine\"]],[20,[\"ten\"]]]]],false],[0,\"\\n\\n\"],[4,\"each\",[[25,\"times\",[100],null]],null,{\"statements\":[[0,\"  \"],[1,[25,\"x-item-did-change-attrs\",null,[[\"one\",\"two\",\"three\",\"four\",\"five\",\"six\",\"seven\",\"eight\",\"nine\",\"ten\"],[[20,[\"one\"]],[20,[\"two\"]],[20,[\"three\"]],[20,[\"four\"]],[20,[\"five\"]],[20,[\"six\"]],[20,[\"seven\"]],[20,[\"eight\"]],[20,[\"nine\"]],[20,[\"ten\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-diff-attrs-test/pods/did-change-attrs/template.hbs" } });
});
define("ember-diff-attrs-test/pods/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6EOW+1tQ", "block": "{\"symbols\":[\"i\"],\"statements\":[[1,[25,\"x-toggler\",null,[[\"one\",\"two\",\"three\",\"four\",\"five\",\"six\",\"seven\",\"eight\",\"nine\",\"ten\"],[[20,[\"one\"]],[20,[\"two\"]],[20,[\"three\"]],[20,[\"four\"]],[20,[\"five\"]],[20,[\"six\"]],[20,[\"seven\"]],[20,[\"eight\"]],[20,[\"nine\"]],[20,[\"ten\"]]]]],false],[0,\"\\n\\n\"],[4,\"each\",[[25,\"times\",[100],null]],null,{\"statements\":[[0,\"  \"],[1,[25,\"x-item-diff-attrs\",null,[[\"one\",\"two\",\"three\",\"four\",\"five\",\"six\",\"seven\",\"eight\",\"nine\",\"ten\"],[[20,[\"one\"]],[20,[\"two\"]],[20,[\"three\"]],[20,[\"four\"]],[20,[\"five\"]],[20,[\"six\"]],[20,[\"seven\"]],[20,[\"eight\"]],[20,[\"nine\"]],[20,[\"ten\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-diff-attrs-test/pods/index/template.hbs" } });
});
define("ember-diff-attrs-test/pods/observer/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "koQiBdVj", "block": "{\"symbols\":[\"i\"],\"statements\":[[1,[25,\"x-toggler\",null,[[\"one\",\"two\",\"three\",\"four\",\"five\",\"six\",\"seven\",\"eight\",\"nine\",\"ten\"],[[20,[\"one\"]],[20,[\"two\"]],[20,[\"three\"]],[20,[\"four\"]],[20,[\"five\"]],[20,[\"six\"]],[20,[\"seven\"]],[20,[\"eight\"]],[20,[\"nine\"]],[20,[\"ten\"]]]]],false],[0,\"\\n\\n\"],[4,\"each\",[[25,\"times\",[100],null]],null,{\"statements\":[[0,\"  \"],[1,[25,\"x-item-observer\",null,[[\"one\",\"two\",\"three\",\"four\",\"five\",\"six\",\"seven\",\"eight\",\"nine\",\"ten\"],[[20,[\"one\"]],[20,[\"two\"]],[20,[\"three\"]],[20,[\"four\"]],[20,[\"five\"]],[20,[\"six\"]],[20,[\"seven\"]],[20,[\"eight\"]],[20,[\"nine\"]],[20,[\"ten\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-diff-attrs-test/pods/observer/template.hbs" } });
});
define('ember-diff-attrs-test/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('ember-diff-attrs-test/router', ['exports', 'ember-diff-attrs-test/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var EmberRouter = Ember.Router;


  var Router = EmberRouter.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('did-change-attrs');
    this.route('observer');
  });

  exports.default = Router;
});
define('ember-diff-attrs-test/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});


define('ember-diff-attrs-test/config/environment', [], function() {
  var prefix = 'ember-diff-attrs-test';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("ember-diff-attrs-test/app")["default"].create({"name":"ember-diff-attrs-test","version":"0.0.0+fc64e807"});
}
//# sourceMappingURL=ember-diff-attrs-test.map
