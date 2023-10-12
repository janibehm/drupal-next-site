const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./{components,lib,pages,stories,styles,ui}/**/*"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      steelgray: "#221f2d",
      scapaflow: "#555161",
      stone: "#767283",
      topaz: "#9b98a4",
      graysuit: "#c4c2cc",
      finnishwinter: "rgb(212 212 212)",
      mischka: "rgb(239 246 255)",
      white: "rgb(239 246 255)",
      info: "#221f2d",
      success: "#007f6c",
      warning: "#f7a700",
      error: "#c80909",

      primary: {
        900: "rgb(22 78 99)",
        800: "rgb(21 94 117)",
        700: "rgb(14 116 144)",
        600: "rgb(8 145 178)",
        500: "rgb(6 182 212)",
        400: "rgb(34 211 238)",
        300: "rgb(103 232 249)",
        200: "rgb(165 243 252)",
        100: "rgb(207 250 254)",
        50: "rgb(236 254 255)",
      },
      secondary: {
        900: "rgb(20 83 45)",
        800: "rgb(22 101 52)",
        700: "rgb(21 128 61)",
        600: "rgb(22 163 74)",
        500: "rgb(34 197 94)",
        400: "rgb(74 222 128)",
        300: "rgb(134 239 172)",
        200: "rgb(187 247 208)",
        100: "rgb(220 252 231)",
        50: "rgb(240 253 244)",
      },
    },
    fontFamily: {
      inter: ["--font-inter", ...defaultTheme.fontFamily.sans],
      overpass: ["--font-overpass", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xs: ["0.813rem", { lineHeight: "1.5" }],
      sm: ["1rem", { lineHeight: "1.5" }],
      md: ["1.125rem", { lineHeight: "1.5" }],
      lg: ["1.25rem", { lineHeight: "1.5" }],
      xl: ["1.6rem", { lineHeight: "1.5" }],
      "2xl": ["1.9rem", { lineHeight: "1.5" }],
      "heading-xs": ["1.125rem", { lineHeight: "1.25" }],
      "heading-sm": ["1.9rem", { lineHeight: "1.25" }],
      "heading-md": ["2.4rem", { lineHeight: "1.25" }],
      "heading-lg": ["3.1rem", { lineHeight: "1.25" }],
      "heading-xl": ["3.8rem", { lineHeight: "1.25" }],
      "heading-2xl": ["4.75rem", { lineHeight: "1.25" }],
    },
    fontWeight: {
      light: "300",
      regular: "400",
      semibold: "500",
      bold: "700",
    },
    lineHeight: {
      1: "1",
      md: "1.25",
      lg: "1.5",
      xl: "1.75",
    },
    extend: {
      borderRadius: {
        ...defaultTheme.borderRadius,
        DEFAULT: "3px",
      },
      boxShadow: {
        ...defaultTheme.boxShadow,
        short: "0px 1px 1px rgba(34, 31, 45, 0.15)",
        long: "0px 12px 16px rgba(34, 31, 45, 0.15)",
      },
      opacity: {
        ...defaultTheme.opacity,
        15: "0.15",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
