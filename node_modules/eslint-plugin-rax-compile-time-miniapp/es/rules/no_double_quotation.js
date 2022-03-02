/**
 * @fileoverview no double quotation
 * @author hirra
 */
'use strict';

var _require = require('../utils'),
    docUrl = _require.docUrl; //------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------


module.exports = {
  meta: {
    docs: {
      description: 'no double quotation mask in jsx',
      url: docUrl('no_double_quotation'),
      recommended: false
    },
    messages: {
      noDoubleQuotation: 'no double quotation mask in jsx.'
    }
  },
  create: function create(context) {
    return {
      JSXAttribute: function JSXAttribute(node) {
        if (node.value && node.value.type === 'Literal') {
          if (/^\"/.test(node.value.raw)) {
            context.report({
              node: node,
              messageId: 'noDoubleQuotation'
            });
          }
        }
      }
    };
  }
};