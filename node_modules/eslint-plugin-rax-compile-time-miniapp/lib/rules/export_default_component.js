/**
 * @fileoverview export default
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
      description: 'export default only supports component',
      recommended: false,
      url: docUrl('export_default_component')
    },
    messages: {
      shouldBeComponent: 'export default should be component.'
    }
  },
  create: function create(context) {
    var identifierList = [];
    var returnList = [];
    return {
      FunctionDeclaration: function FunctionDeclaration(node) {
        if (!node.parent.parent) {
          node.body.body.forEach(function (child) {
            if (child.type === 'ReturnStatement' && child.argument.type !== 'JSXElement') {
              identifierList.push(node.id.name);
            }
          });
        }
      },
      ExportDefaultDeclaration: function ExportDefaultDeclaration(node) {
        if (node.declaration.type === 'Identifier') {
          if (identifierList.includes(node.declaration.name)) {
            if (/tsx|jsx$/.test(context.getFilename())) {
              context.report({
                node: node,
                messageId: 'shouldBeComponent'
              });
            }
          }
        }
      }
    };
  }
};