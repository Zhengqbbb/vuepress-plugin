/** @type {import('cz-git').CommitizenGitOptions} */
module.exports = {
  alias: {
    'i': 'feat: initial commit',
    's': 'style: update code format',
    'b': 'build: bump dependencies',
    'c': 'chore: update config',
    'f': 'docs: fix typos',
    'r': 'docs: update README',
    ':': 'docs: update posts',
  },
  scopes: ['theme', 'posts'],
}
