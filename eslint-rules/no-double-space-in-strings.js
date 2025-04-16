export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'disallow double spaces in string literals',
      category: 'Possible Errors'
    },
    schema: []
  },
  create(context) {
    return {
      Literal(node) {
        if (typeof node.value === 'string' && node.value.includes('  ')) {
          context.report({
            node,
            message: 'Double space found in string literal.'
          })
        }
      },
      TemplateElement(node) {
        if (node.value.raw.includes('  ')) {
          context.report({
            node,
            message: 'Double space found in template literal.'
          })
        }
      }
    }
  }
}
