
import keepPreset from "keep-react/preset";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '30': 'repeat(30, minmax(0, 1fr))',
      }
    }
  },
  presets: [keepPreset],
};
