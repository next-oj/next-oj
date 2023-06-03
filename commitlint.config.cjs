module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'footer-leading-blank': [2, 'always'],
    'body-leading-blank': [2, 'always'],
    'scope-enum': [1, 'always', [
      'compiler',
      'problem',
      'user',
      'contest',
      'discussions',
    ]],
  },
};
