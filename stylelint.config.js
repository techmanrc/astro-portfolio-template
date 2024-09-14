export default {
  extends: ['stylelint-config-standard', 'stylelint-config-html/astro'],
  plugins: ['stylelint-order'],
  rules: {
    'declaration-block-no-redundant-longhand-properties': [
      true,
      { ignoreShorthands: ['/flex/', '/grid/'] },
    ],
    'font-family-name-quotes': 'always-where-recommended',
    'comment-empty-line-before': [
      'always',
      {
        ignoreComments: ['/^#endregion/'],
        except: ['first-nested'],
        ignore: ['after-comment', 'stylelint-commands'],
      },
    ],
    'number-max-precision': 6,
    'order/properties-alphabetical-order': true,
    'property-no-vendor-prefix': null,
    'selector-class-pattern': null,
  },
}
