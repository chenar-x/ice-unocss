/**
 * @fileoverview shouldn't handle `props.children`
 * @author hirra
 */
'use strict'; //------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

var _require = require('../utils'),
    findAncestor = _require.findAncestor;

var jsxElement = ['JSXFragment', 'JSXElement', 'JSXText', 'JSXExpressionContainer'];
module.exports = {
  meta: {
    docs: {
      description: 'shouldn\'t handle \'props.children\'',
      recommended: false
    },
    messages: {
      noChildrenHandler: 'shouldn\'t handle \'props.children\''
    }
  },
  create: function create(context) {
    var definedPropsChildren = false; // const {children} = props;

    return {
      MemberExpression: function MemberExpression(node) {
        if (!/tsx|jsx$/.test(context.getFilename())) {
          return;
        }

        if (node.parent && node.parent.type === 'MemberExpression') {
          if (node.object && node.object.name === 'props') {
            if (node.property && node.property.name === 'children') {
              if (node.parent.property) {
                context.report({
                  node: node,
                  messageId: 'noChildrenHandler'
                });
              }
            }
          }
        }
      },
      'MemberExpression:exit': function MemberExpressionExit(node) {
        // handle ` { children.map(item => {}) }`
        if (node.object && node.object.name === 'children' && node.property) {
          if (definedPropsChildren) {
            if (findAncestor(node, function (parent) {
              return jsxElement.includes(parent.type);
            })) {
              context.report({
                node: node,
                messageId: 'noChildrenHandler'
              });
            }
          }
        }
      },
      // handle `const { children } = props;`
      ObjectPattern: function ObjectPattern(node) {
        if (!/tsx|jsx$/.test(context.getFilename())) {
          return;
        }

        if (Array.isArray(node.properties)) {
          var properties = node.properties;

          if (node.parent && node.parent.init && node.parent.init.name === 'props') {
            properties.map(function (p) {
              if (p.value && p.value.name === 'children') {
                definedPropsChildren = true;
              }
            });
          }
        }
      }
    };
  }
};