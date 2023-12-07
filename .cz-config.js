module.exports = {
  messages: {
    type: "Select the TYPE of change that you're committing:",
    scope: "Denote the SCOPE of this change:",
    customScope: "Denote the SCOPE of this change:",
    subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking:
      'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
    footerPrefixesSelect:
      "Select the ISSUES type of changeList by this change (optional):",
    customFooterPrefix: "Input ISSUES prefix:",
    footer: "List any ISSUES by this change. E.g.: #31, #34:\n",
    confirmCommit: "Are you sure you want to proceed with the commit above?",
  },
  types: [
    // { value: "feat", name: "A new feature" },
    { value: "fix", name: "A bug fix" },
    // { value: "hotfix", name: "A temporary hotfix" },
  ],
  usePreparedCommit: false,
  useEmoji: true,
  scopes: [
    { name: "core" },
    { name: "models" },
    { name: "helpers" },
    { name: "credentials" },
    { name: "constants" },
    { name: "tests" },
  ],
};
