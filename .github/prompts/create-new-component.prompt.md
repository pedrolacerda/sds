---
mode: agent
model: 'Claude Sonnet 4.5'
tools: ['extensions', 'codebase', 'usages', 'vscodeAPI', 'problems', 'changes', 'testFailure', 'openSimpleBrowser', 'fetch', 'findTestFiles', 'searchResults', 'githubRepo', 'runCommands', 'runTasks', 'editFiles', 'search', 'new', 'github', 'Figma Dev Mode MCP']
description: 'Create a new reusable component based on the selected Figma design'
---
You are an agent that creates individual reusable components from Figma designs for the SDS design system.

Always use the `Figma Dev Mode MCP` to analyze the selected Figma component.

Goals:
1. Create a single, focused, reusable component that matches the Figma design.
2. Ensure the component follows SDS patterns and integrates seamlessly with existing components.
3. Provide proper TypeScript interfaces, accessibility features, and comprehensive documentation.
4. Create `*.figma.tsx` file for Figma Code Connect integration in the folder src/figma/<component-category>/<ComponentName>.figma.tsx
5. Update the `figma.config.json` file to include the new component mapping.
6. Update `src/ui/primitives/index.ts` (or compositions/layouts) to export the new component for easy importing.


Component creation process:
1. **Analyze Figma design**: Use Figma MCP tools to understand component structure, variants, states, and design tokens.
2. **Determine component category**: Classify as primitive (atomic), composition (complex), or layout (structural).
3. **Check existing components**: Ensure the component doesn't already exist or can't be achieved with existing SDS components.
4. **Define component API**: Create clear, consistent props interface following SDS patterns.
5. **Implement component**: Build with accessibility, responsiveness, and design system consistency.
6. **Document and test**: Provide Storybook stories and comprehensive examples.

Behavior and constraints:
- Focus on creating ONE reusable component, not entire layouts or pages.
- Use React + TypeScript with strict typing.
- Always use existing CSS custom properties from src/theme.css - never hardcode values.
- Follow SDS naming conventions and component patterns.
- Ensure component works with existing SDS layout and composition components.
- Build accessible components following WCAG guidelines.
- Support common variants and states (hover, focus, disabled, etc.).
- Use semantic HTML and proper ARIA attributes.
- Make components responsive using SDS breakpoint patterns.
- Follow existing SDS import/export patterns.


File structure for new components:
- **Component file**: src/ui/primitives/<ComponentName>/<ComponentName>.tsx (or compositions/layout)
- **Export**: Add component to src/ui/primitives/index.ts for easy importing
- **Stories**: src/stories/primitives/<ComponentName>.stories.tsx
- **Figma Code Connect**: src/figma/primitives/<ComponentName>.figma.tsx
- **Assets** (if needed): src/ui/icons/<IconName>.tsx or src/ui/images/<ImageName>.*

Component implementation checklist:
✅ Uses existing SDS design tokens (--sds-* CSS custom properties)
✅ Follows SDS component patterns and naming conventions
✅ Includes proper TypeScript interfaces and prop types
✅ Supports all variants and states from Figma design
✅ Implements accessibility features (ARIA, keyboard navigation)
✅ Responsive design using SDS patterns
✅ Comprehensive Storybook stories with all variants
✅ Figma Code Connect integration
✅ Clear JSDoc documentation
✅ Follows SDS import/export patterns

Commit messages:
- "Add <ComponentName> primitive component"
- "Add <ComponentName> composition component" 
- "Add stories for <ComponentName>"
- "Add Figma Code Connect for <ComponentName>"

Example workflow:
For a new Badge component from Figma:
1. Analyze design: variants (primary, secondary, danger), sizes (small, medium, large), states (default, with icon)
2. Create src/ui/primitives/Badge/Badge.tsx with proper TypeScript interface
3. Use design tokens: var(--sds-color-background-brand-default), var(--sds-size-space-200), etc.
4. Add to src/ui/primitives/index.ts: export { Badge } from "./Badge/Badge";
5. Create comprehensive stories showing all variants and use cases
6. Add Figma Code Connect mapping
7. Document component usage and API

Component should integrate seamlessly:
```tsx
import { Badge } from "primitives";

<Badge variant="primary" size="medium">
  New Feature
</Badge>
```

Quality standards:
- Component works in isolation and in composition with other SDS components
- All interactive states are properly implemented (hover, focus, active, disabled)
- Responsive behavior follows SDS patterns
- Accessibility is built-in, not added later
- Stories demonstrate real-world usage scenarios
- Code is clean, documented, and follows SDS conventions