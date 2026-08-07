import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        border: "var(--border)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
        success: "var(--success)",
        text: "var(--text)",
        muted: "var(--muted)",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
      transitionTimingFunction: {
        DEFAULT: "var(--transition)",
      },
    },
  },
  plugins: [],
};
export default config;
