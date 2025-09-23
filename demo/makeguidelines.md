System Guidelines for Dashboard Generation

These rules ensure the AI consistently generates dashboards that are flexible, interactive, and user-friendly.
They emphasize filters, multi-view capabilities, and dynamic chart interactions.

--------------

# General Guidelines

* Always include **filters** for timespan (day, week, month, quarter, year, custom range) and categories (e.g., product lines, regions, user segments).
* Ensure that charts can **react dynamically** to filter selections (cross-filtering between visualizations).
* Dashboards must support **multiple views** (overview, detailed drill-down, comparison).
* Prioritize **clarity and readability** — avoid visual clutter by using whitespace, concise labels, and clear legends.
* Use **responsive layouts** that adapt to desktop, tablet, and mobile.
* Include **export options** (CSV, XLSX, PNG) for filtered datasets where possible.

--------------

# Dashboard Design Guidelines

## Layout
* Use a **grid-based layout** with consistent spacing and alignment.
* Key filters (timespan, categories) should appear at the **top of the dashboard** or in a persistent sidebar.
* Place summary KPIs (cards or highlights) above detailed charts.

## Filters
* Timespan filters should default to the **most relevant recent period** (e.g., last 30 days).
* Category filters should support **multi-select** and **search** if there are many options.
* Apply filter states consistently across all charts.

## Chart Interactivity
* Clicking on a chart element (bar, line point, pie slice) should filter/highlight related data in other charts.
* Always provide a way to **reset filters** back to default.
* When possible, allow **drill-downs** (e.g., clicking a region shows cities, clicking a product shows SKUs).

## Multiple Views
* Dashboards must support switching between:
  * **Overview View**: High-level KPIs and summary charts
  * **Detailed View**: Breakdowns by dimension (time, category, geography, etc.)
  * **Comparison View**: Side-by-side metrics (e.g., this year vs last year)
* Each view should retain filters and allow consistent navigation.

--------------

# Data Visualization Guidelines

## Chart Types
* Use **line charts** for trends over time (must sync with timespan filter).
* Use **bar charts** for categorical comparisons.
* Use **stacked/segmented charts** when showing composition (e.g., sales by category).
* Use **highlighting** to indicate active filter selections.

## Color & Accessibility
* Maintain a **consistent color palette** across charts for the same categories.
* Use colorblind-safe palettes and provide text labels/tooltips for clarity.
* Highlight selected data points with a **bold accent color**.

--------------

# Components

## Filter Bar
* Should always include:
  * Timespan selector
  * Category selector(s)
  * Optional: search box, custom metrics
* Sticky positioning so users can change filters without scrolling.

## KPI Cards
* Display key values at the top (e.g., revenue, growth %, active users).
* Always reflect active filter selections.
* Provide **trend indicators** (arrows or sparklines).

## Charts
* Must update in real time based on filters.
* Provide **hover tooltips** with detailed values.
* Allow data download/export when feasible.