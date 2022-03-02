/**
 * @fileoverview must return jsx element in map
 * @author poji.ty
 */
'use strict';

var jsxElement = ['JSXFragment', 'JSXElement', 'JSXText', 'JSXExpressionContainer'];

var _require = require('../utils'),
    findAncestor = _require.findAncestor,
    docUrl = _require.docUrl;

module.exports = {
  meta: {
    docs: {
      description: 'must return jsx element in map',
      recommended: false,
      url: docUrl('return_jsx_in_map')
    },
    messages: {
      mustReturnJsxInMap: 'must return jsx element in map.'
    }
  },
  create: function create(context) {
    return {
      ReturnStatement: function ReturnStatement(node) {
        if (!node.argument) {
          return;
        }

        var type = node.argument.type; // 找到第一个函数调用

        var firstCallExpressionNode = findAncestor(node, function (currentNode) {
          return currentNode.type === 'CallExpression';
        }); // 判断是否在 JSX 里

        var isInJSXContainer = findAncestor(node, function (currentNode) {
          return jsxElement.includes(currentNode.type);
        }); // 判断是否在 JSX Attribute 里

        var isInAttribute = findAncestor(node, function (currentNode) {
          return currentNode.type === 'JSXAttribute';
        }); // 判断是不是 map 调用

        var isMapCall = firstCallExpressionNode && firstCallExpressionNode.callee && firstCallExpressionNode.callee.property && firstCallExpressionNode.callee.property.name === 'map';

        if (/tsx|jsx$/.test(context.getFilename())) {
          if (isInJSXContainer && !isInAttribute) {
            if (!jsxElement.includes(type) && isMapCall) {
              context.report({
                node: node,
                messageId: 'mustReturnJsxInMap'
              });
            }
          }
        }
      }
    };
  }
};