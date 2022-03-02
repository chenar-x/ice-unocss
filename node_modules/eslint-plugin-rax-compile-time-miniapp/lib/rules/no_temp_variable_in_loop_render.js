/**
 * @fileoverview no spread operator
 * @author hirra
 */
'use strict';

var _require = require('../utils'),
    baseComponents = _require.baseComponents;

var _require2 = require('../utils'),
    docUrl = _require2.docUrl;

var TYPE = {
  JSXExpressionContainer: 'JSXExpressionContainer',
  ArrowFunctionExpression: 'ArrowFunctionExpression',
  BlockStatement: 'BlockStatement',
  VariableDeclaration: 'VariableDeclaration',
  ExpressionStatement: 'ExpressionStatement',
  BinaryExpression: 'BinaryExpression',
  CallExpression: 'CallExpression',
  MemberExpression: 'MemberExpression',
  Identifier: 'Identifier',
  AssignmentExpression: 'AssignmentExpression',
  UpdateExpression: 'UpdateExpression'
};

var isBlockStatement = function isBlockStatement(node) {
  return node.value && node.value.type === TYPE.JSXExpressionContainer && node.value.expression && node.value.expression.type === TYPE.ArrowFunctionExpression && node.value.expression.body.type === TYPE.BlockStatement;
};

var isBaseComponent = function isBaseComponent(node, importedList) {
  if (importedList.includes(node.parent.name && node.parent.name.name)) {
    return true;
  }

  return false;
};

var findMapCallbackParams = function findMapCallbackParams(node) {
  if (!node || !node.parent) {
    return [];
  }

  if (node.type === TYPE.CallExpression && node.callee.property && node.callee.property.name === 'map') {
    return node.arguments[0].params.map(function (p) {
      return p.name;
    });
  }

  return findMapCallbackParams(node.parent);
};

module.exports = {
  meta: {
    docs: {
      description: 'no temporary variable in loop render',
      url: docUrl('no_temp_variable_in_loop_render'),
      recommended: false
    },
    messages: {
      noTempVariableInLoopRender: 'Do not use temporary variable like "item" or "index" in loop render,' + 'if necessary, use CallExpression instead of BlockStatement. e.g. <View onClick={() => handleClick(index)}> '
    }
  },
  create: function create(context) {
    var importedList = [];
    return {
      ImportDefaultSpecifier: function ImportDefaultSpecifier(node) {
        if (node.local && node.local.name) {
          if (baseComponents.includes(node.parent.source.value)) {
            importedList.push(node.local.name);
          }
        }
      },
      VariableDeclarator: function VariableDeclarator(node) {
        if (node.id && node.id.name) {
          if (node.init && node.init.callee === 'require') {
            if (Array.isArray(node.init.arguments) && baseComponents.includes(node.init.arguments[0].value)) {
              importedList.push(node.local.name);
            }
          }
        }
      },
      JSXAttribute: function JSXAttribute(node) {
        if (!isBaseComponent(node, importedList)) {
          return;
        }

        if (isBlockStatement(node)) {
          var temporaryParams = findMapCallbackParams(node);
          var checker = new Checker(context, temporaryParams);
          checker.check(node);
        }
      }
    };
  }
};

var Checker = /*#__PURE__*/function () {
  function Checker(context, params) {
    this.params = params;
    this.context = context;
    this.checkBody = this.checkBody.bind(this);
    this.checkNode = this.checkNode.bind(this);
    this.checkIdentifier = this.checkIdentifier.bind(this);
    this.checkCallExpression = this.checkCallExpression.bind(this);
    this.checkMemberExpression = this.checkMemberExpression.bind(this);
    this.checkBinaryExpression = this.checkBinaryExpression.bind(this);
    this.checkAssignmentExpression = this.checkAssignmentExpression.bind(this);
    this.checkUpdateExpression = this.checkUpdateExpression.bind(this);
    this.handleParam = this.handleParam.bind(this);
    this.traverseVariableDeclaration = this.traverseVariableDeclaration.bind(this);
  }

  var _proto = Checker.prototype;

  _proto.check = function check(node) {
    var bodys = node.value.expression.body.body;
    bodys.forEach(this.checkBody);
  };

  _proto.checkBody = function checkBody(node) {
    var _this = this;

    if (node.type === TYPE.VariableDeclaration) {
      node.declarations.forEach(function (child) {
        _this.traverseVariableDeclaration(child);
      });
    }

    var nodesToCheck = node.type === TYPE.VariableDeclaration ? node.declarations.map(function (declaration) {
      return declaration.init;
    }) : node.type === TYPE.ExpressionStatement ? [node.expression] : [];
    nodesToCheck.forEach(function (node) {
      var hasParam = _this.checkNode(node);

      if (hasParam) {
        _this.context.report({
          node: node,
          messageId: 'noTempVariableInLoopRender'
        });
      }
    });
  } // handle:  `const { target: { dataset: { item } = {} } = {} } = e , c = xx;`
  ;

  _proto.traverseVariableDeclaration = function traverseVariableDeclaration(node) {
    var handleParam = this.handleParam.bind(this);

    if (node.id && node.id.type === 'Identifier') {
      handleParam(node.id.name);
    }

    if (node.id && node.id.type === 'ObjectPattern') {
      resecureVariable(node.id);
    }

    function resecureVariable(node) {
      if (node.properties && Array.isArray(node.properties)) {
        node.properties.forEach(function (prop) {
          if (prop.type === 'Identifier') {
            handleParam(prop.name);
          } else if (prop.type === 'Property') {
            if (!prop.value.left) {
              handleParam(prop.value.name);
            } else if (prop.value.left.type === 'ObjectPattern') {
              resecureVariable(prop.value.left);
            } else if (prop.value.left.type === 'Identifier') {
              handleParam(prop.value.left.name);
            }
          }
        });
      }
    }
  };

  _proto.handleParam = function handleParam(name) {
    if (this.params.includes(name)) {
      this.params.splice(this.params.indexOf(name), 1);
    }
  };

  _proto.checkNode = function checkNode(node) {
    var type = node.type;
    var checkFn = this["check" + type];
    var hasParam = checkFn ? checkFn(node) : false;
    return hasParam;
  };

  _proto.checkIdentifier = function checkIdentifier(node) {
    return this.params.includes(node.name);
  };

  _proto.checkCallExpression = function checkCallExpression(node) {
    var params = this.params; // index(), index.a()

    if (params.includes(node.callee.name || node.callee.object.name)) {
      return true;
    } // foo(index), foo.bar(0, index)


    return node.arguments.some(function (arg) {
      return arg.type === TYPE.Identifier && params.includes(arg.name);
    });
  } // index.a
  ;

  _proto.checkMemberExpression = function checkMemberExpression(node) {
    return this.params.includes(node.object.name);
  } // 3 + index
  ;

  _proto.checkBinaryExpression = function checkBinaryExpression(node) {
    return this.checkNode(node.left) || this.checkNode(node.right);
  } // index.a = 1
  ;

  _proto.checkAssignmentExpression = function checkAssignmentExpression(node) {
    return this.checkNode(node.left) || this.checkNode(node.right);
  } // index++
  ;

  _proto.checkUpdateExpression = function checkUpdateExpression(node) {
    return this.params.includes(node.argument.name);
  };

  return Checker;
}();