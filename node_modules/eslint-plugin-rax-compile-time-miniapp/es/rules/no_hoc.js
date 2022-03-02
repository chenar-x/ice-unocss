/**
 * @fileoverview no hoc
 * @author hirra
 */
'use strict';

var _require = require('../utils'),
    docUrl = _require.docUrl;

module.exports = {
  meta: {
    docs: {
      description: 'no hoc',
      recommended: false,
      url: docUrl('no_hoc')
    },
    messages: {
      noHoc: 'hoc "{{name}}" is forbidden.'
    }
  },
  create: function create(context) {
    return {
      FunctionDeclaration: function FunctionDeclaration(node) {
        if (!node.params) {
          return;
        }

        if (node.body && node.body.type === 'BlockStatement') {
          var body = [];
          var functionsList = [];

          if (Array.isArray(node.body.body)) {
            body = node.body.body;
          } else {
            body = [node.body.body];
          }

          node.body.body.forEach(function (state) {
            if (state.type === 'FunctionDeclaration') {
              var subBodyList = [];

              if (Array.isArray(state.body)) {
                subBodyList = state.body;
              } else {
                subBodyList = [state.body];
              }

              functionsList.push(state.id.name);
              subBodyList.forEach(function (subBody) {
                subBody.body.forEach(function (sb) {
                  if (sb.type === 'ReturnStatement') {
                    if (sb.argument && sb.argument.openingElement && sb.argument.openingElement.name) {
                      context.report({
                        node: node,
                        messageId: 'noHoc',
                        data: {
                          name: node.id.name
                        }
                      });
                    }
                  }
                });
              });
            }
          });
        }
      }
    };
  }
};