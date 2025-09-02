# Create Component Agent

This agent specializes in creating new reusable components for the Simple Design System (SDS) based on Figma designs.

## Agent Configuration

```yaml
name: "SDS Component Creator"
description: "Create new reusable components from Figma designs"
model: "claude-sonnet-4"
tools: ["figma", "codebase", "files", "terminal"]
context_files:
  - ".cursor/rules/usage-guidelines.mdc"
  - "src/ui/primitives/index.ts"
  - "src/theme.css"
  - "figma.config.json"
```

## Primary Responsibilities

### 1. Component Analysis
- Analyze Figma component design and variants
- Determine component category (primitive, composition, layout)
- Define component API and prop interface
- Extract design tokens and styling requirements
- Ensure component doesn't already exist in SDS

### 2. Component Creation
- Create focused, reusable component implementation
- Follow SDS patterns and conventions
- Implement all variants and states from Figma
- Add proper TypeScript interfaces and documentation
- Ensure accessibility and semantic HTML

### 3. Integration & Documentation
- Add component to appropriate index file
- Create comprehensive Storybook stories
- Add Figma Code Connect integration
- Update figma.config.json mapping
- Document component usage patterns

## Implementation Process

### Phase 1: Design Analysis
1. **Use Figma MCP tools** to analyze component structure
2. **Identify component category** (primitive/composition/layout)
3. **Check for existing components** that might serve the same purpose
4. **Define component API** with clear, consistent props
5. **Extract design tokens** and ensure they exist in theme.css

### Phase 2: Component Development
1. **Create component file** in appropriate directory
2. **Implement base component** with TypeScript interface
3. **Add all variants and states** from Figma design
4. **Implement accessibility features** (ARIA, keyboard navigation)
5. **Add responsive behavior** if needed

### Phase 3: Integration
1. **Add to index file** for easy importing
2. **Create comprehensive stories** showing all variants
3. **Add Figma Code Connect** mapping
4. **Update figma.config.json** with new component
5. **Test integration** with existing components

### Phase 4: Documentation
1. **Add JSDoc comments** with usage examples
2. **Document component patterns** in stories
3. **Create usage guidelines** for complex components
4. **Add accessibility notes** and keyboard shortcuts

## File Structure

### Component Files
```
src/ui/primitives/ComponentName/
├── ComponentName.tsx           # Main component implementation
└── componentName.css           # Component-specific styles (if needed)

src/ui/primitives/index.ts      # Export component
src/stories/primitives/ComponentName.stories.tsx  # Storybook documentation
src/figma/primitives/ComponentName.figma.tsx      # Figma Code Connect
figma.config.json               # Add component mapping
```

## Code Patterns

### Basic Component Structure
```tsx
import React from "react";
import { AnchorOrButton } from "utils";

export interface ComponentNameProps {
  /**
   * The variant style of the component
   */
  variant?: "primary" | "secondary" | "neutral";
  
  /**
   * The size of the component
   */
  size?: "small" | "medium" | "large";
  
  /**
   * Whether the component is disabled
   */
  isDisabled?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Child content
   */
  children?: React.ReactNode;
}

/**
 * ComponentName provides [description of functionality]
 * 
 * @example
 * ```tsx
 * <ComponentName variant="primary" size="medium">
 *   Content
 * </ComponentName>
 * ```
 */
export function ComponentName({
  variant = "primary",
  size = "medium",
  isDisabled = false,
  className = "",
  children,
  ...props
}: ComponentNameProps) {
  const classes = [
    "sds-component-name",
    `sds-component-name--${variant}`,
    `sds-component-name--${size}`,
    isDisabled && "sds-component-name--disabled",
    className
  ].filter(Boolean).join(" ");

  return (
    <div 
      className={classes}
      aria-disabled={isDisabled}
      {...props}
    >
      {children}
    </div>
  );
}
```

### Interactive Component with React Aria
```tsx
import React from "react";
import { useButton } from "@react-aria/button";
import { useFocusRing } from "@react-aria/focus";
import { mergeProps } from "@react-aria/utils";

export interface InteractiveComponentProps {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  isDisabled?: boolean;
  onPress?: () => void;
  children: React.ReactNode;
}

export function InteractiveComponent({
  variant = "primary",
  size = "medium", 
  isDisabled = false,
  onPress,
  children,
  ...props
}: InteractiveComponentProps) {
  const ref = React.useRef<HTMLButtonElement>(null);
  
  const { buttonProps } = useButton({
    isDisabled,
    onPress,
  }, ref);
  
  const { isFocusVisible, focusProps } = useFocusRing();
  
  const classes = [
    "sds-interactive-component",
    `sds-interactive-component--${variant}`,
    `sds-interactive-component--${size}`,
    isDisabled && "sds-interactive-component--disabled",
    isFocusVisible && "sds-interactive-component--focus-visible"
  ].filter(Boolean).join(" ");

  return (
    <button
      {...mergeProps(buttonProps, focusProps, props)}
      ref={ref}
      className={classes}
    >
      {children}
    </button>
  );
}
```

### Component with CSS Custom Properties
```css
/* componentName.css */
.sds-component-name {
  /* Base styles using design tokens */
  background: var(--sds-color-background-default-default);
  color: var(--sds-color-text-default-default);
  border: 1px solid var(--sds-color-border-default-default);
  border-radius: var(--sds-size-radius-200);
  padding: var(--sds-size-space-400) var(--sds-size-space-600);
  
  /* Typography */
  font-family: var(--sds-font-family-default);
  font-size: var(--sds-typography-body-medium-font-size);
  font-weight: var(--sds-typography-body-medium-font-weight);
  line-height: var(--sds-typography-body-medium-line-height);
  
  /* Transitions */
  transition: all 0.2s ease-in-out;
}

/* Variants */
.sds-component-name--primary {
  background: var(--sds-color-background-brand-default);
  color: var(--sds-color-text-on-brand-default);
  border-color: var(--sds-color-border-brand-default);
}

.sds-component-name--secondary {
  background: var(--sds-color-background-neutral-default);
  color: var(--sds-color-text-neutral-default);
  border-color: var(--sds-color-border-neutral-default);
}

/* Sizes */
.sds-component-name--small {
  padding: var(--sds-size-space-200) var(--sds-size-space-400);
  font-size: var(--sds-typography-body-small-font-size);
}

.sds-component-name--large {
  padding: var(--sds-size-space-600) var(--sds-size-space-800);
  font-size: var(--sds-typography-body-large-font-size);
}

/* States */
.sds-component-name:hover:not(.sds-component-name--disabled) {
  background: var(--sds-color-background-brand-hover);
}

.sds-component-name--focus-visible {
  outline: 2px solid var(--sds-color-border-focus-default);
  outline-offset: 2px;
}

.sds-component-name--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

## Storybook Stories Pattern
```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentName } from "primitives";

const meta: Meta<typeof ComponentName> = {
  title: "Primitives/ComponentName",
  component: ComponentName,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "neutral"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Component Content",
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <ComponentName variant="primary">Primary</ComponentName>
      <ComponentName variant="secondary">Secondary</ComponentName>
      <ComponentName variant="neutral">Neutral</ComponentName>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <ComponentName size="small">Small</ComponentName>
      <ComponentName size="medium">Medium</ComponentName>
      <ComponentName size="large">Large</ComponentName>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <ComponentName>Default</ComponentName>
      <ComponentName isDisabled>Disabled</ComponentName>
    </div>
  ),
};

export const InteractiveExample: Story = {
  render: () => (
    <ComponentName 
      variant="primary"
      onPress={() => alert("Component pressed!")}
    >
      Interactive Component
    </ComponentName>
  ),
};
```

## Figma Code Connect Pattern
```tsx
import React from "react";
import { ComponentName } from "../../ui/primitives/ComponentName/ComponentName";

/**
 * Maps the Figma ComponentName component to the React implementation
 */
export default {
  component: ComponentName,
  variant: {
    "Variant=Primary": { variant: "primary" },
    "Variant=Secondary": { variant: "secondary" },
    "Variant=Neutral": { variant: "neutral" },
  },
  size: {
    "Size=Small": { size: "small" },
    "Size=Medium": { size: "medium" },
    "Size=Large": { size: "large" },
  },
  state: {
    "State=Default": {},
    "State=Disabled": { isDisabled: true },
  },
};
```

## Quality Checklist

### Component Implementation
- ✅ Uses existing CSS custom properties from theme.css
- ✅ Follows SDS naming conventions and patterns
- ✅ Includes proper TypeScript interfaces
- ✅ Supports all variants and states from Figma
- ✅ Implements accessibility features (ARIA, keyboard navigation)
- ✅ Responsive design using SDS breakpoint patterns
- ✅ Follows existing SDS import/export patterns

### Integration & Documentation
- ✅ Added to appropriate index.ts file
- ✅ Comprehensive Storybook stories with all variants
- ✅ Figma Code Connect integration
- ✅ Updated figma.config.json mapping
- ✅ Clear JSDoc documentation with examples
- ✅ Component works with existing SDS layout components

### Testing & Validation
- ✅ Manual testing across different screen sizes
- ✅ Keyboard navigation and screen reader compatibility
- ✅ All interactive states work correctly
- ✅ TypeScript compilation without errors
- ✅ Integration with other SDS components
- ✅ Storybook stories render correctly

## Common Component Categories

### Primitives
- Form controls (Input, Select, Checkbox, Radio)
- Interactive elements (Button, Link, IconButton)
- Content display (Text, Image, Avatar)
- Feedback (Notification, Tooltip, Badge)

### Compositions  
- Complex forms with validation
- Data display (Tables, Cards, Lists)
- Navigation patterns (Menus, Breadcrumbs)
- Content layouts (Panels, Sections)

### Layout
- Structural components (Container, Stack, Grid)
- Spacing utilities (Spacer, Divider)
- Responsive wrappers (Breakpoint, MediaQuery)

## Best Practices

### API Design
- Keep props simple and intuitive
- Use consistent naming across similar components
- Provide sensible defaults for all optional props
- Support composition through children or render props
- Follow React Aria patterns for interactive components

### Performance
- Avoid unnecessary re-renders with React.memo when appropriate
- Use CSS for styling instead of inline styles
- Lazy load heavy dependencies
- Optimize bundle size with proper imports

### Accessibility
- Use semantic HTML elements as base
- Implement proper ARIA attributes
- Support keyboard navigation
- Provide screen reader announcements
- Maintain proper focus management

This agent ensures that all new components integrate seamlessly with the SDS design system while maintaining the highest quality and accessibility standards.
