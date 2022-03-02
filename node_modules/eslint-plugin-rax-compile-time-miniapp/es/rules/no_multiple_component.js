/**
 * @fileoverview no mulitpile component
 * @author hirra
 */
'use strict';

var _require = require('../utils'),
    docUrl = _require.docUrl;

module.exports = {
  meta: {
    docs: {
      description: 'no multipile component',
      recommended: false,
      url: docUrl('no_multiple_component')
    },
    messages: {
      noMultipleComponent: 'no multipile component in one file.'
    }
  },
  create: function create(context) {
    var count = 0;

    var isComponent = function isComponent(node) {
      if (node.type === 'FunctionDeclaration') {
        if (node.body && Array.isArray(node.body.body)) {
          return node.body.body.some(function (bd) {
            if (bd.type === 'ReturnStatement') {
              if (bd.argument.type === 'JSXElement') {
                return true;
              }
            }
          });
        }
      }
    };

    return {
      FunctionDeclaration: function FunctionDeclaration(node) {
        if (isComponent(node)) {
          count++;

          if (count >= 2) {
            context.report({
              node: node,
              messageId: 'noMultipleComponent'
            });
          }
        }
      }
    };
  }
};