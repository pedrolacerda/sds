import type { Preview } from "@storybook/react";
import "../src/index.css";
import "../src/theme.css";
import theme from "./theme";
import { AllProviders } from "../src/data/providers/AllProviders";

const preview: Preview = {
  parameters: {
    docs: {
      theme: theme,
    },
  },
  decorators: [
    (Story) => (
      <AllProviders>
        <Story />
      </AllProviders>
    ),
  ],
  tags: [],
};

export default preview;
