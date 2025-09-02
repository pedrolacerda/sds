# Cursor Context Configuration

This file provides additional context about the SDS project structure and important files for Cursor's AI assistant.

## Project Overview

Simple Design System (SDS) is a comprehensive React-based design system with Figma integration. Key characteristics:

- **React + TypeScript**: Strict typing throughout
- **Figma Code Connect**: Direct design-to-code integration
- **React Aria/Stately**: Accessibility-first component foundation
- **CSS Custom Properties**: Design token system
- **Storybook**: Component documentation and testing
- **Mobile-first**: Responsive design patterns

## Critical Files for Context

### Core Configuration
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Build configuration with import aliases
- `figma.config.json` - Figma Code Connect mappings

### Design System Foundation
- `src/theme.css` - All CSS custom properties (design tokens)
- `src/reset.css` - CSS reset and base styles
- `src/responsive.css` - Responsive utilities and breakpoints

### Component Architecture
- `src/ui/primitives/index.ts` - All primitive component exports
- `src/ui/compositions/index.ts` - Complex component exports
- `src/ui/layout/index.ts` - Layout component exports
- `src/ui/icons/index.ts` - Icon component exports

### Data Layer
- `src/data/index.ts` - Data layer exports (contexts, hooks, providers)
- `src/data/types/` - TypeScript interfaces for data models
- `src/data/contexts/` - React context definitions
- `src/data/providers/` - Context providers with state management

### Import Aliases (from vite.config.ts)
```typescript
{
  "primitives": "src/ui/primitives",
  "compositions": "src/ui/compositions", 
  "layout": "src/ui/layout",
  "hooks": "src/ui/hooks",
  "icons": "src/ui/icons",
  "images": "src/ui/images",
  "data": "src/data"
}
```

## Component Patterns

### Standard Component Structure
```
ComponentName/
├── ComponentName.tsx          # Main implementation
├── componentName.css          # Styles (if needed)
└── index.ts                   # Re-export (if needed)
```

### Import Patterns
```tsx
// Use aliases for all SDS imports
import { Button, Text } from "primitives";
import { Header, Footer } from "compositions";
import { Flex, Section } from "layout";
import { useAuth, usePricing } from "data";
import { IconChevronLeft } from "icons";
import { useMediaQuery } from "hooks";
```

### CSS Custom Property Usage
```css
.component {
  /* Colors */
  background: var(--sds-color-background-default-default);
  color: var(--sds-color-text-default-default);
  
  /* Spacing */
  padding: var(--sds-size-space-400);
  margin: var(--sds-size-space-200);
  
  /* Typography */
  font-size: var(--sds-typography-body-medium-font-size);
  font-weight: var(--sds-typography-body-medium-font-weight);
  
  /* Border radius */
  border-radius: var(--sds-size-radius-200);
}
```

## Development Workflow

### Key Scripts
- `npm run app:dev` - Development server (localhost:8000)
- `npm run storybook` - Storybook (localhost:6006)
- `npm run script:tokens` - Sync design tokens from Figma
- `npm run script:icons` - Sync icons from Figma

### File Locations for New Code

#### Complete Implementations
- **File**: `src/examples/DesignName.tsx`
- **Stories**: `src/stories/examples/DesignName.stories.tsx`
- **Purpose**: Full page/screen implementations using existing SDS components

#### New Components (Rare)
- **Primitives**: `src/ui/primitives/ComponentName/ComponentName.tsx`
- **Compositions**: `src/ui/compositions/ComponentName/ComponentName.tsx`
- **Stories**: `src/stories/primitives/ComponentName.stories.tsx`
- **Figma Connect**: `src/figma/primitives/ComponentName.figma.tsx`

#### Data Types
- **File**: `src/data/types/category.ts`
- **Purpose**: TypeScript interfaces for data models

## Design Token Categories

### Colors
- `--sds-color-text-*` - Text colors
- `--sds-color-background-*` - Background colors  
- `--sds-color-border-*` - Border colors
- `--sds-color-surface-*` - Surface colors

### Spacing
- `--sds-size-space-*` - Spacing values (100, 200, 400, 600, 800, 1200, 1600)
- `--sds-size-radius-*` - Border radius values
- `--sds-size-width-*` - Width constraints

### Typography
- `--sds-typography-*` - Complete typography styles
- `--sds-font-family-*` - Font families
- `--sds-font-size-*` - Font sizes
- `--sds-font-weight-*` - Font weights

### Effects
- `--sds-effects-shadows-*` - Box shadow definitions

## Accessibility Standards

### Required Practices
- Semantic HTML elements as foundation
- Proper ARIA attributes for complex interactions
- Keyboard navigation support (Tab, Enter, Space, Arrow keys)
- Focus management for modals and overlays
- Screen reader announcements for dynamic content
- Color contrast ratios meeting WCAG AA standards

### React Aria Integration
Most interactive components use React Aria hooks:
- `useButton` - Button interactions
- `useTextField` - Form inputs
- `useSelect` - Dropdown selections
- `useDialog` - Modal dialogs
- `useFocusRing` - Focus indicators

## Responsive Design

### Breakpoint System
Uses CSS custom properties for consistent breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`  
- Desktop: `> 1024px`

### useMediaQuery Hook
```tsx
const { isMobile, isTablet, isDesktop } = useMediaQuery();

// Use for conditional rendering and props
<Flex direction={isMobile ? "column" : "row"}>
```

## Data Management

### Context Providers
- `AuthProvider` - User authentication and session management
- `PricingProvider` - Pricing plans and subscription management
- `ProductsProvider` - Product catalog and e-commerce functionality
- `AllProviders` - Combined wrapper for all providers

### Custom Hooks
- `useAuth()` - Authentication state and methods
- `usePricing()` - Pricing data and cart operations
- `useProducts()` - Product search, filtering, and cart management

## Common Patterns

### Layout Composition
```tsx
<Section variant="stroke" padding="1600">
  <Flex direction="column" gap="1200" container>
    <TextHeading>Section Title</TextHeading>
    <Flex direction="row" gap="800" type="third">
      {items.map(item => <Card key={item.id} {...item} />)}
    </Flex>
  </Flex>
</Section>
```

### Error Handling
```tsx
function DataComponent() {
  const { data, isLoading, error } = useProducts();
  
  if (isLoading) return <SkeletonLoader />;
  if (error) return <ErrorMessage message={error.message} />;
  if (!data.length) return <EmptyState />;
  
  return <DataGrid data={data} />;
}
```

### Form Patterns
```tsx
<Fieldset legend="User Information">
  <Input label="Name" value={name} onChange={setName} />
  <Input label="Email" type="email" value={email} onChange={setEmail} />
  <Button variant="primary" type="submit">Submit</Button>
</Fieldset>
```

This context helps Cursor understand the project structure, patterns, and conventions when providing assistance with the SDS codebase.
