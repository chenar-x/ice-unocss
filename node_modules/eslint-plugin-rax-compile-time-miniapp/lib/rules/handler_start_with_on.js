/**
 * @fileoverview forbidden eventHandlers not start with on or not is render
 * @author hirra
 */
'use strict'; //------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'forbidden eventHandlers not start with on or not is render',
      recommended: false
    },
    messages: {
      recommendHandlerName: 'props handler name should start with on.'
    }
  },
  create: function create(context) {
    return {
      JSXExpressionContainer: function JSXExpressionContainer(node) {
        var parent = node.parent;

        if (parent.name && !/^on[A-Z]/.test(parent.name.name)) {
          if (parent.value.expression.type === 'ArrowFunctionExpression') {
            context.report({
              node: node,
              messageId: 'recommendHandlerName'
            });
          }
        }
      },
      CallExpression: function CallExpression(node) {
        if (node.callee.type === 'MemberExpression') {
          var _node$callee = node.callee,
              object = _node$callee.object,
              property = _node$callee.property;

          if (object.type === 'Identifier' && object.name === 'props' && property.type === 'Identifier' && !/^on[A-Z]/.test(property.name) && !/^render[A-Z]/.test(property.name)) {
            context.report({
              messageId: 'recommendHandlerName',
              node: node
            });
          }
        }
      }
    };
  }
};