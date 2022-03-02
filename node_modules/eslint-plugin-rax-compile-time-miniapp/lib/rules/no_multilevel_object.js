/**
 * @fileoverview currently doesn't support render list by multilevel object, like item.info.list.
 * @author hirra
 */
'use strict';

var _require = require('../utils'),
    docUrl = _require.docUrl;

module.exports = {
  meta: {
    docs: {
      description: 'no multilevel object like item.info.list',
      recommended: false,
      url: docUrl('no_multilevel_object')
    },
    messages: {
      noMultilevelObject: "currently doesn't support render list by multilevel object, like item.info.list."
    }
  },
  create: function create(context) {
    var findAncestor = function findAncestor(node) {
      if (node.parent) {
        if (node.parent.callee && node.parent.callee.type === 'MemberExpression') {
          return node.parent;
        } else {
          return findAncestor(node.parent);
        }
      } else {
        return null;
      }
    };

    var isMultiLoop = function isMultiLoop(node) {
      if (node.parent) {
        if (node.parent.callee && node.parent.callee.property && (node.parent.callee.property.name === 'map' || node.parent.callee.property.name === 'forEach')) {
          return true;
        } else {
          return isMultiLoop(node.parent);
        }
      } else {
        return null;
      }
    };

    var isJSX = function isJSX(node) {
      if (node.parent) {
        if (node.parent.type === 'JSXElement') {
          return true;
        } else {
          return isJSX(node.parent);
        }
      } else {
        return null;
      }
    };

    return {
      MemberExpression: function MemberExpression(node) {
        if (['map', 'forEach'].includes(node.property.name)) {
          if (node.object.type === 'MemberExpression' && node.object.object.type === 'MemberExpression' && node.object.object.object.type === 'Identifier') {
            // const ancestor = node.object.object.object.name;
            if (findAncestor(node) && isMultiLoop(node.parent) && isJSX(node)) {
              context.report({
                node: node,
                messageId: 'noMultilevelObject'
              });
            }
          }
        }
      }
    };
  }
};