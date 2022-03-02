/**
 * @fileoverview no multilevel condition statement for JSX
 * @author linghan
 */
'use strict';

var _require = require('../utils'),
    docUrl = _require.docUrl;

module.exports = {
  meta: {
    docs: {
      description: 'no multilevel condition statement for JSX',
      recommended: false,
      url: docUrl('no_multilevel_condition')
    },
    messages: {
      noMultiLevelCondition: 'no multilevel condition statement for JSX'
    }
  },
  create: function create(context) {
    return {
      JSXElement: function JSXElement(node) {
        // like:  element = <View></View>
        if (node.parent.left) {
          var currentNode = node;
          var parent = node.parent;
          var parentConditionCount = 0;

          while (parent) {
            if (parent.type === 'IfStatement') {
              // parent.consequent mease 'if'
              if (parent.consequent === currentNode) {
                parentConditionCount += 1;
              } // parent.alternate means 'else if / else'


              if (parent.alternate === currentNode) {
                var alternateParent = parent;
                var alternateCurrent = parent.parent;

                while (alternateParent) {
                  if (alternateParent.consequent === alternateCurrent) {
                    parentConditionCount += 1;
                  }

                  alternateParent = alternateParent.parent;
                }
              }
            }

            currentNode = parent;
            parent = parent.parent;
          }

          if (parentConditionCount >= 2) {
            context.report({
              node: node,
              messageId: 'noMultiLevelCondition'
            });
          }
        }
      }
    };
  }
};