/**
 * @fileoverview no `id=xxx` in jsx
 * @author hirra
 */
'use strict';

var _require = require('../utils'),
    docUrl = _require.docUrl;

var description = '微信小程序的基础视图架构是通过 Web Components 实现的，导致如果在自定义组件上写 id 会造成在组件中无法通过 props.id 获取的情况。例如：<Child id={someId} /> ，此时在 Child 中是无法通过 props.id 获取到值的。因此，Rax 在编译时做了转化，当开发者 <Child id={someId} /> 这样写的时候，不仅会保留外层的 id，还会添加一个等值的 componentId，开发者在自定义组件中可以通过 props.componentId 获取到想要的值。';
module.exports = {
  meta: {
    docs: {
      description: description,
      recommended: false,
      url: docUrl('no_id_in_jsx')
    },
    messages: {
      noIdInJsx: 'Using id as attribute in custom components is not recommended'
    }
  },
  create: function create(context) {
    return {
      JSXIdentifier: function JSXIdentifier(node) {
        var parent = node.parent;

        if (node.name && 'id' === node.name) {
          context.report({
            node: node,
            messageId: 'noIdInJsx'
          });
        }
      },
      MemberExpression: function MemberExpression(node) {
        var object = node.object,
            property = node.property;

        if (object.type === 'Identifier' && object.name === 'props' && property.type === 'Identifier' && 'id' === property.name) {
          context.report({
            messageId: 'noIdInJsx',
            node: node
          });
        }
      }
    };
  }
};