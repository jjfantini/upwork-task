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
    generatingByAI: "Generating your AI commit subject...",
    generatedSelectByAI: "Select suitable subject by AI generated:",
    confirmCommit: "Are you sure you want to proceed with the commit above?",
  },
  types: [
    { value: "mmm😀 feat ", name: "A new feature" },
    { value: "fix 😀", name: "A bug fix" },
    { value: "hotfix 😀", name: "A temporary hotfix" },
  ],
  usePreparedCommit: false, // to re-use commit from ./.git/COMMIT_EDITMSG
  allowTicketNumber: true,
  isTicketNumberRequired: true,
  ticketNumberPrefix: "TICKET-",
  ticketNumberRegExp: "\\d{1,5}",
  useEmoji: true,
  emojiAlign: "center",
  useAI: false,
  aiNumber: 1,
  themeColorCode: "",
  scopes: [
    { name: "core" },
    { name: "models" },
    { name: "helpers" },
    { name: "credentials" },
    { name: "constants" },
    { name: "tests" },
  ],
  allowCustomScopes: true,
  allowEmptyScopes: true,
  customScopesAlign: "bottom",
  customScopesAlias: "custom",
  emptyScopesAlias: "empty",
  upperCaseSubject: true,
  markBreakingChangeMode: true,
  allowBreakingChanges: ["feat", "fix"],
  breaklineNumber: 5,
  breaklineChar: "|",
  skipQuestions: ["breaking"], // add customScope
  issuePrefixes: [
    { value: "closed", name: "closed:   ISSUES has been processed" },
  ],
  customIssuePrefixAlign: "top",
  emptyIssuePrefixAlias: "skip",
  customIssuePrefixAlias: "custom",
  allowCustomIssuePrefix: true,
  allowEmptyIssuePrefix: true,
  confirmColorize: true,
  maxHeaderLength: Infinity,
  maxSubjectLength: Infinity,
  minSubjectLength: 0,
  scopeOverrides: {
    "➕ dep": [{ name: "conda" }, { name: "pip" }, { name: "poetry" }],
  },
  defaultType: "style",
  defaultBody: "",
  defaultIssues: "",
  defaultScope: "",
  defaultSubject: "",
  subjectLimit: 100,
};

// ... (rest of the configurations)
//testing 5
//simple testing 6
