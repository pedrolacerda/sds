---
description: 'Implement a new component or screen based on a Figma Design.'
tools: ['extensions', 'codebase', 'usages', 'vscodeAPI', 'problems', 'changes', 'testFailure', 'openSimpleBrowser', 'fetch', 'findTestFiles', 'searchResults', 'githubRepo', 'runCommands', 'runTasks', 'editFiles', 'runNotebooks', 'search', 'new', 'github', 'Figma Dev Mode MCP']
---
Purpose
- Given a Figma file or frame link, produce a working component or screen in the repository matching the design and engineering standards.

Required inputs
- Figma Dev Mode link (frame/component)
- Target platform (web / mobile / react-native)
- Component/screen name and intended folder path
- Breakpoints / responsive rules if applicable
- Any design tokens or theme constraints

Acceptance criteria
- Visual match to the Figma frame at common breakpoints
- Accessible (semantic elements, ARIA where needed, keyboard focus)
- Reusable: props for state/variants, isolated styles
- Tests: unit tests and visual/storybook snapshot
- Build passes, lint passes, and a passing CI checklist in PR

High-level workflow (use available tools)
1. Inspect design
    - Use "Figma Dev Mode MCP" to open the frame and inspect layout, spacing, fonts, colors, variants, and asset exports.
    - Open design link in "openSimpleBrowser" if needed.

2. Extract tokens & assets
    - Export SVGs/PNGs for icons/images via the Figma Dev Mode tool.
    - Capture design tokens (colors, radii, type scale). Persist them to the project's theme where appropriate.

3. Create implementation
    - Use "search" and "findTestFiles" to locate similar components to copy conventions from.
    - "editFiles" to add new component files (component, styles/CSS/stylesheet module, tests, story).
    - Follow folder and naming conventions: components/<ComponentName>/<ComponentName>.(tsx|jsx|js), <ComponentName>.module.css or styled file, <ComponentName>.test.(ts|js), <ComponentName>.story.(mdx|ts).
    - Implement props for variants, sizes, and states. Keep internal layout decoupled from parent layout.

4. Accessibility & Responsiveness
    - Ensure semantic HTML, proper roles, keyboard navigation, and focus management.
    - Implement responsive styles using project breakpoint variables or CSS-in-JS theme tokens.

5. Tests and stories
    - Add unit tests for rendering, interactions, and prop-driven variants.
    - Add a storybook story with knobs/controls showing all variants and states. Use "findTestFiles" & "runTasks" to run storybook if available.

6. Verification
    - Run linters and tests via "runCommands" / "runTasks".
    - Use "problems" and "changes" tools to surface issues and staged diffs.
    - Use "usages" to ensure no unintended API collisions.

7. Commit & PR
    - Create a minimal, focused commit. Use conventional commit style.
    - Open PR via "github" with the Figma link, screenshots, and checklist:
      - Link to Figma frame
      - Screenshots / storybook links
      - Testing instructions
      - Accessibility notes
    - Request design review and address feedback.

Tool-to-step mapping (quick)
- Inspect design: Figma Dev Mode MCP, openSimpleBrowser
- Export assets & tokens: Figma Dev Mode MCP, fetch
- Find examples: search, findTestFiles
- Edit code: editFiles, vscodeAPI
- Run/test: runCommands, runTasks, runNotebooks (if needed)
- CI / diffs: changes, problems
- Repo actions: github, githubRepo
- Document usage: usages, searchResults

Best practices
- Prefer component composition over one-off overrides.
- Keep styles theme-driven; add tokens for repeated values.
- Avoid pixel-perfect obsession — aim for parity; document intentional deviations.
- Add small visual regression tests or story snapshots.
- Keep PRs small and focused.

Designer handoff checklist for PR description
- Figma frame link and node id
- Screenshots (desktop / mobile)
- Notes about accessible behavior and keyboard flows
- Any token additions and where they were added

If missing details
- Ask for: exact frame link, target breakpoints, interactive states, desired props/APIs, and localization requirements.