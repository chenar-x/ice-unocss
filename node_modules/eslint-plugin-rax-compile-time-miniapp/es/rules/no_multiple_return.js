/**
 * @fileoverview multiple return
 * @todo remove this rule , support multipile return in `jsx-compiler`
 * @author hirra
 */
'use strict';

var _require = require('../utils'),
    docUrl = _require.docUrl;

module.exports = {
  meta: {
    docs: {
      description: 'multiple return',
      url: docUrl('no_multiple_return'),
      recommended: false
    },
    messages: {
      noMultipleReturn: 'multiple return is forbidden.'
    }
  },
  create: function create(context) {
    var returnList = [];
    return {
      ReturnStatement: function ReturnStatement(node) {
        if (node.argument && node.argument.type === 'JSXElement') {
          returnList.push(node);
        }
      },
      ':function:exit': function functionExit() {
        if (returnList.length >= 2) {
          var parentMap = {};
          returnList.map(function (returnItem) {
            var parent = returnItem.parent;

            if (returnItem.parent && returnItem.parent.parent && returnItem.parent.parent.type === 'IfStatement') {
              parent = returnItem.parent.parent.parent;
            }

            var parentRange = parent.range.join(',');

            if (!parentMap[parentRange]) {
              parentMap[parentRange] = 1;
            } else {
              parentMap[parentRange] += 1;
              context.report({
                node: returnList[0],
                messageId: 'noMultipleReturn'
              });
            }
          });
        }
      }
    };
  }
};