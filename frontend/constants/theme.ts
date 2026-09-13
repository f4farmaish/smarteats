// SmartEats Design System
// Palette grounded in Pakistani culture — marigold/turmeric gold, truck-art
// magenta, and mint-chutney teal — instead of a generic "food app" orange.

export const theme = {
  colors: {
    // Core
    primary: "#E8A33D",       // marigold / turmeric gold
    primarySoft: "#FBEBD1",
    secondary: "#C2185B",     // rickshaw / truck-art magenta — use sparingly
    secondarySoft: "#F6D9E6",
    inkOnPrimary: "#2A211C",  // text color that sits on top of the primary gold

    // Health / "safe" accent (allergy-safe tags, health score)
    health: "#0F6B5C",        // deep teal, like mint chutney
    healthSoft: "#DCEEE9",

    // Surfaces
    background: "#FDF6EC",    // warm ivory, not stark white or flat beige
    surface: "#FFFFFF",
    surfaceMuted: "#F4ECDF",
    border: "#E7DCC9",
    input: "#FFFCF6",
    overlay: "rgba(42,33,28,0.55)",
    white: "#FFFFFF",

    // Text
    text: "#2A211C",          // warm brown-black, not pure black
    textMuted: "#7A6F63",

    // Semantic
    success: "#2E7D4F",
    warning: "#B45309",
    warningSoft: "#FBEEDB",
    error: "#C1272D",
    errorSoft: "#FBDEDF",
    info: "#2563AC",
  },

  radius: {
    sm: 8,
    md: 14,
    lg: 22,
    pill: 999,
  },

  spacing: {
    xxs: 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
  },

  // Font sizes (plain numbers — used as `fontSize: theme.type.xs` etc.)
  type: {
    xs: 11,
    sm: 13,
    body: 15,
    heading: 19,
    display: 24,
    hero: 32,
  },

  // Font family names — must match exactly what's loaded via useFonts() in app/_layout.tsx
  fonts: {
    heading: "SpaceGrotesk_700Bold",
    headingMedium: "SpaceGrotesk_600SemiBold",
    bodyBold: "Inter_700Bold",
    bodySemibold: "Inter_600SemiBold",
    bodyMedium: "Inter_500Medium",
    body: "Inter_400Regular",
  },
} as const;

export type Theme = typeof theme;
export default theme;
