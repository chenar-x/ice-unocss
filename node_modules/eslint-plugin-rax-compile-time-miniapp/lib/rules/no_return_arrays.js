/**
 * @fileoverview no return arrays
 * @author hirra
 */
'use strict';

var _require = require('../utils'),
    docUrl = _require.docUrl;

module.exports = {
  meta: {
    docs: {
      description: 'no return arrays',
      url: docUrl('no_return_arrays'),
      recommended: false
    },
    messages: {
      noReturnArrays: 'return jsx array is forbidden.'
    }
  },
  create: function create(context) {
    return {
      ReturnStatement: function ReturnStatement(node) {
        if (node.argument && node.argument.type == 'ArrayExpression') {
          if (node.argument.elements.filter(function (element) {
            return element.type === 'JSXElement';
          }).length) {
            context.report({
              node: node,
              messageId: 'noReturnArrays'
            });
          }
        }
      }
    };
  }
};