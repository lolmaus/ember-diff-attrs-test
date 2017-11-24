'use strict';

define('ember-diff-attrs-test/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/times.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/times.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/x-item-did-change-attrs/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/x-item-did-change-attrs/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/x-item-diff-attrs/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/x-item-diff-attrs/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/x-item-observer/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/components/x-item-observer/component.js should pass ESLint\n\n3:10 - \'computed\' is defined but never used. (no-unused-vars)\n3:20 - \'observer\' is defined but never used. (no-unused-vars)\n33:32 - \'key\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('pods/components/x-item/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/x-item/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/x-toggler/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/x-toggler/component.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
});
define('ember-diff-attrs-test/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  var run = Ember.run;
  function destroyApp(application) {
    run(application, 'destroy');
  }
});
define('ember-diff-attrs-test/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-diff-attrs-test/tests/helpers/start-app', 'ember-diff-attrs-test/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('ember-diff-attrs-test/tests/helpers/resolver', ['exports', 'ember-diff-attrs-test/resolver', 'ember-diff-attrs-test/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('ember-diff-attrs-test/tests/helpers/start-app', ['exports', 'ember-diff-attrs-test/app', 'ember-diff-attrs-test/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  var merge = Ember.merge;
  var run = Ember.run;
  function startApp(attrs) {
    var attributes = merge({}, _environment.default.APP);
    attributes = merge(attributes, attrs); // use defaults, but you can override;

    return run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ember-diff-attrs-test/tests/test-helper', ['ember-diff-attrs-test/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('ember-diff-attrs-test/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
require('ember-diff-attrs-test/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
