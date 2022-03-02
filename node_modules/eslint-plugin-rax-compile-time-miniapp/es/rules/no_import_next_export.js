/**
 * @fileoverview no import next export
 * @author linghan
 */
'use strict';

var _require = require('../utils'),
    docUrl = _require.docUrl;

module.exports = {
  meta: {
    docs: {
      description: 'no import next export in jsx',
      recommended: false,
      url: docUrl('no_import_next_export')
    },
    messages: {
      noImportNextExport: 'no import next export in jsx'
    }
  },
  create: function create(context) {
    // 页面导入组件名称
    var importNameArray = []; // 导出组件名称

    var exportDeclarationName = '';
    return {
      ImportDeclaration: function ImportDeclaration(node) {
        if (Array.isArray(node.specifiers)) {
          node.specifiers.forEach(function (specifier) {
            importNameArray.push(specifier.local.name);
          });
        }
      },
      ExportDefaultDeclaration: function ExportDefaultDeclaration(node) {
        exportDeclarationName = node.declaration.name;
      },
      onCodePathEnd: function onCodePathEnd(codePath, node) {
        var result = importNameArray.some(function (val) {
          return val === exportDeclarationName;
        });

        if (result) {
          context.report({
            node: node,
            messageId: 'noImportNextExport',
            data: {
              name: exportDeclarationName
            }
          });
        }
      }
    };
  }
};