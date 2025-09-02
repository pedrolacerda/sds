# SDS Composer Guidelines

This file provides guidance for Cursor's Composer feature when working with multi-file edits in the Simple Design System (SDS) project.

## Multi-File Editing Patterns

### Creating New Components
When creating a new component, Composer should edit these files together:

1. **Component file**: `src/ui/primitives/ComponentName/ComponentName.tsx`
2. **Export file**: `src/ui/primitives/index.ts` (add export)
3. **Stories file**: `src/stories/primitives/ComponentName.stories.tsx`
4. **Figma Code Connect**: `src/figma/primitives/ComponentName.figma.tsx`
5. **Figma config**: `figma.config.json` (add mapping)

### Implementing Complete Designs
When implementing a complete design from Figma:

1. **Main implementation**: `src/examples/DesignName.tsx`
2. **Stories file**: `src/stories/examples/DesignName.stories.tsx`
3. **Types file**: `src/data/types/` (if new types needed)
4. **Mock data**: Include in the example file or separate data file

### Design Token Updates
When updating design tokens:

1. **Theme file**: `src/theme.css` (CSS custom properties)
2. **Component files**: Any components using the updated tokens
3. **Stories**: Update stories to reflect token changes

## File Relationships

### Component Dependencies
```
ComponentName.tsx
├── index.ts (export)
├── ComponentName.stories.tsx (documentation)
├── ComponentName.figma.tsx (Figma integration)
└── figma.config.json (mapping)
```

### Example Implementation Dependencies
```
DesignName.tsx
├── DesignName.stories.tsx (stories)
├── types/*.ts (if new types)
└── data/services/*.ts (if new services)
```

### Import Alias Mapping
When editing files that use imports, ensure consistency with aliases:

- `primitives` → `src/ui/primitives/`
- `compositions` → `src/ui/compositions/`
- `layout` → `src/ui/layout/`
- `hooks` → `src/ui/hooks/`
- `icons` → `src/ui/icons/`
- `images` → `src/ui/images/`
- `data` → `src/data/`

## Common Multi-File Scenarios

### Scenario 1: Adding New Icon
Files to edit together:
- `src/ui/icons/IconName.tsx` (new icon component)
- `src/ui/icons/index.ts` (export icon)
- `src/figma/icons/Icons.figma.tsx` (add to Figma mapping)

### Scenario 2: Updating Component API
Files to edit together:
- `src/ui/primitives/ComponentName/ComponentName.tsx` (component)
- `src/stories/primitives/ComponentName.stories.tsx` (update stories)
- `src/figma/primitives/ComponentName.figma.tsx` (update Figma mapping)
- Any example files using the component

### Scenario 3: Adding New Data Context
Files to edit together:
- `src/data/contexts/NewContext.tsx` (context definition)
- `src/data/providers/NewProvider.tsx` (provider implementation)
- `src/data/hooks/useNew.ts` (custom hook)
- `src/data/services/newService.ts` (service layer)
- `src/data/types/new.ts` (TypeScript types)
- `src/data/index.ts` (exports)
- `src/data/providers/AllProviders.tsx` (add to combined provider)

## Consistency Rules for Multi-File Edits

### Import Statements
Ensure all files use consistent import patterns:
```tsx
// Good - use aliases
import { Button, Text } from "primitives";
import { Flex, Section } from "layout";
import { useAuth } from "data";

// Bad - direct paths
import { Button } from "../ui/primitives/Button/Button";
```

### TypeScript Interfaces
When adding new interfaces, place them in the appropriate types file:
- UI component props → component file
- Data models → `src/data/types/`
- Shared utilities → `src/ui/utils/`

### CSS Custom Properties
When adding new design tokens:
- Add to `src/theme.css`
- Use consistent naming: `--sds-[category]-[subcategory]-[variant]`
- Update components that should use the new tokens

### Story Consistency
Ensure all stories follow the same pattern:
```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentName } from "primitives";

const meta: Meta<typeof ComponentName> = {
  title: "Primitives/ComponentName",
  component: ComponentName,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
```

## File Templates

### New Component Template Structure
```
ComponentName/
├── ComponentName.tsx           # Main component
├── ComponentName.stories.tsx   # Storybook stories  
└── ComponentName.figma.tsx     # Figma Code Connect
```

### Example Implementation Template
```tsx
// src/examples/DesignName.tsx
import { Section, Flex } from "layout";
import { Button, Text } from "primitives";
import { useMediaQuery } from "hooks";

export function DesignName() {
  const { isMobile } = useMediaQuery();
  
  return (
    <Section padding={isMobile ? "800" : "1600"}>
      <Flex direction="column" gap="1200">
        {/* Implementation */}
      </Flex>
    </Section>
  );
}
```

## Testing Multi-File Changes

When making multi-file edits, verify:

1. **Build passes**: `npm run app:build`
2. **Storybook builds**: `npm run storybook:build`
3. **No TypeScript errors**: Check all edited files
4. **Imports resolve correctly**: No broken import paths
5. **Stories render**: Check Storybook for new/updated stories
6. **Figma integration**: Test Code Connect mappings if applicable

## Best Practices

### Atomic Commits
Group related file changes into atomic commits:
- "Add Button component with stories and Figma integration"
- "Update design tokens and affected components"
- "Add ProductPage example with stories"

### Documentation Updates
When adding new components or patterns, also update:
- README files if applicable
- Component documentation in stories
- Usage examples in existing implementations

### Error Handling
Ensure error handling is consistent across related files:
- Components handle invalid props gracefully
- Services handle API errors appropriately
- Stories show error states when relevant

This guidance helps Composer make intelligent decisions about which files to edit together when working on SDS components and implementations.
