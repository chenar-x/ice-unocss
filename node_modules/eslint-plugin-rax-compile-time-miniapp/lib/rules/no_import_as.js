/**
 * @fileoverview no import Component as CustomComponent
 * @author hirra.hl
 */
'use strict'; //------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

var description = 'no \'import component as\' , like : import { Component as CustomComponent } from \'rax\' ';
module.exports = {
  meta: {
    docs: {
      description: description,
      recommended: false
    },
    messages: {
      noImportAs: description
    }
  },
  create: function create(context) {
    return {
      ImportSpecifier: function ImportSpecifier(node) {
        if (/tsx|jsx$/.test(context.getFilename())) {
          if (node.parent && node.parent.source && node.parent.source.value === 'rax') {
            if (node.imported && node.imported.name === 'Component') {
              if (node.local && node.local.name !== 'Component') {
                context.report({
                  node: node,
                  messageId: 'noImportAs'
                });
              }
            }
          }
        }
      }
    };
  }
};