const scopes = [
  'scripts',
  'site',
  'vp:*',
  'vp:clipboard',
  'vp:china-search',
]

/** @type {import('cz-git').CommitizenGitOptions} */
module.exports = {
  alias: {
    's': 'style: update code format',
    'f': 'docs: fix typos',
    'r': 'docs: update README',
    'b': 'build: bump dependencies',
    'c': 'chore: update config',
    ':': 'docs(site): update playground',
  },
  scopes,
  maxHeaderLength: 100,
  allowEmptyIssuePrefixs: false,
  allowCustomIssuePrefixs: false,
}
