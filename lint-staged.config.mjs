import micromatch from 'micromatch'

export default {
  '*': (allFiles) => {
    const commands = []

    // Lint and format TypeScript and JavaScript files.
    const codeFiles = micromatch(allFiles, [
      '**/*.[tj]s?(x)',
      '**/*.[cm]js',
      '**/*.astro'
    ])
    if (codeFiles.length > 0) {
      commands.push(
        `eslint --cache --cache-location ./node_modules/.cache/eslint --fix --ignore-path .gitignore ${codeFiles.join(
          ' '
        )}`
      )
    }

    // Lint and fix PostCSS files with Stylelint
    const cssFiles = micromatch(allFiles, ['**/*.css', '**/*.astro'])
    if (cssFiles.length > 0) {
      commands.push(
        `stylelint ${cssFiles.join(
          ' '
        )} --cache --cache-location ./node_modules/.cache/stylelint --fix`
      )
    }

    // Format Markdown, JSON, and PostCSS files.
    const miscFiles = micromatch(allFiles, [
      '**/*.md',
      '**/*.json',
      '**/*.css',
      '**/*.astro'
    ])
    if (miscFiles.length > 0) {
      commands.push(`prettier --write ${miscFiles.join(' ')}`)
    }

    return commands
  }
}
