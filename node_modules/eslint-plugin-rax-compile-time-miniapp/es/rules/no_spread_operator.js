/**
 * @fileoverview no spread operator
 * @author hirra
 */
'use strict';

var _require = require('../utils'),
    docUrl = _require.docUrl;

module.exports = {
  meta: {
    docs: {
      description: 'no spread_operator',
      url: docUrl('no_spread'),
      recommended: false
    },
    messages: {
      noSpreadOperator: "spread operator '{{name}}' is forbidden. FYI: https://rax.js.org/docs/guide/compile-miniapp-syntax-constraints"
    }
  },
  create: function create(context) {
    return {
      JSXElement: function JSXElement(node) {},
      JSXOpeningElement: function JSXOpeningElement(node) {
        if (node.attributes && Array.isArray(node.attributes)) {
          var hasSpreadAttribute = node.attributes.some(function (attribute) {
            return attribute.type === 'JSXSpreadAttribute';
          });

          if (hasSpreadAttribute) {
            context.report({
              node: node,
              messageId: 'noSpreadOperator',
              data: {
                name: node.name
              }
            });
          }
        }
      }
    };
  }
};