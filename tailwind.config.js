/* Pinegrow generated Design Panel Begin */

const pg_colors = {primary: {'50': '#dfdfdf',
'100': '#b6b6b6',
'200': '#8f8f8f',
'300': '#6a6a6a',
'400': '#474747',
'500': '#272727',
'600': '#212121',
'700': '#1b1b1b',
'800': '#151515',
'900': '#0e0e0e',
},
red: {'50': '#fef2f2',
'100': '#fee2e2',
'200': '#fecaca',
'300': '#fca5a5',
'400': '#f87171',
'500': '#ef4444',
'600': '#dc2626',
'700': '#b91c1c',
'800': '#991b1b',
'900': '#7f1d1d',
},
yellow: {'50': '#fffbeb',
'100': '#fef3c7',
'200': '#fde68a',
'300': '#fcd34d',
'400': '#fbbf24',
'500': '#f59e0b',
'600': '#d97706',
'700': '#b45309',
'800': '#92400e',
'900': '#78350f',
},
green: {'50': '#ecfdf5',
'100': '#d1fae5',
'200': '#a7f3d0',
'300': '#4ad697',
'400': '#5cc77e',
'500': '#10b981',
'600': '#059669',
'700': '#047857',
'800': '#366c53',
'900': '#064e3b',
},
blue: {'50': '#eff6ff',
'100': '#dbeafe',
'200': '#bfdbfe',
'300': '#93c5fd',
'400': '#0039a6',
'500': '#3b82f6',
'600': '#2563eb',
'700': '#1d4ed8',
'800': '#1e40af',
'900': '#1e3a8a',
},
indigo: {'50': '#eef2ff',
'100': '#e0e7ff',
'200': '#c7d2fe',
'300': '#a5b4fc',
'400': '#818cf8',
'500': '#6366f1',
'600': '#4f46e5',
'700': '#4338ca',
'800': '#3730a3',
'900': '#312e81',
},
purple: {'50': '#f5f3ff',
'100': '#ede9fe',
'200': '#ddd6fe',
'300': '#c4b5fd',
'400': '#a78bfa',
'500': '#8b5cf6',
'600': '#7c3aed',
'700': '#6d28d9',
'800': '#5b21b6',
'900': '#4c1d95',
},
pink: {'50': '#fdf2f8',
'100': '#fce7f3',
'200': '#fbcfe8',
'300': '#f9a8d4',
'400': '#f472b6',
'500': '#ec4899',
'600': '#db2777',
'700': '#be185d',
'800': '#9d174d',
'900': '#831843',
},
accent: {'50': '#ffffff',
'100': '#e5e5e5',
'200': '#cccccc',
'300': '#b2b2b2',
'400': '#999999',
'500': '#7f7f7f',
'600': '#666666',
'700': '#4c4c4c',
'800': '#333333',
'900': '#191919',
'950': '#000000',
},
primarylight: {'50': '#e3ebe9',
'100': '#c2d4cf',
'200': '#a2beb6',
'300': '#82a79d',
'400': '#639185',
'500': '#437c6e',
'600': '#3a6b5f',
'700': '#315a50',
'800': '#284a42',
'900': '#203a34',
'950': '#172b26',
},
}

const pg_fonts = {sans: ["'Nunito Sans', sans-serif",
],
serif: ["'Plus Jakarta Sans', sans-serif",
],
}   

const pg_backgrounds = {}    
             
                
    /* Pinegrow generated Design Panel End */
/** @type {import('tailwindcss').Config} */

const baseFontSize = 10;
module.exports = {
  darkMode: "class",

  plugins: [
    "@tailwindcss/jit",
    // require('flowbite/plugin')
  ],
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    // "./node_modules/flowbite/**/*.js"
  ],

  mode: "jit",
  theme: {
    extend: {
      colors: pg_colors,
      backgroundColor: pg_colors,
      textColor: pg_colors,
      borderColor: pg_colors,
      ringColor: pg_colors,
      divideColor: pg_colors,
      ringOffsetColor: pg_colors,
      placeholderColor: pg_colors,
      gradientColorStops: pg_colors,
      fontFamily: pg_fonts,
      backgroundImage: {
        "hero-image": "url('/src/uploads/hero.png')",
      },
    },

    fontSize: {
      xs: [
        `${(16 * 0.75) / baseFontSize}rem` /* 12px */,
        {
          lineHeight: `${(16 * 1) / baseFontSize}rem` /* 16px */,
        },
      ],
      sm: [
        `${(16 * 0.875) / baseFontSize}rem` /* 14px */,
        {
          lineHeight: `${(16 * 1.25) / baseFontSize}rem` /* 20px */,
        },
      ],
      base: [
        `${(16 * 1) / baseFontSize}rem` /* 16px */,
        {
          lineHeight: `${(16 * 1.5) / baseFontSize}rem` /* 24px */,
        },
      ],
      lg: [
        `${(16 * 1.125) / baseFontSize}rem` /* 18px */,
        {
          lineHeight: `${(16 * 1.75) / baseFontSize}rem` /* 28px */,
        },
      ],
      xl: [
        `${(16 * 1.25) / baseFontSize}rem` /* 20px */,
        {
          lineHeight: `${(16 * 1.75) / baseFontSize}rem` /* 28px */,
        },
      ],
      "2xl": [
        `${(16 * 1.5) / baseFontSize}rem` /* 24px */,
        {
          lineHeight: `${(16 * 2) / baseFontSize}rem` /* 32px */,
        },
      ],
      "3xl": [
        `${(16 * 1.875) / baseFontSize}rem` /* 30px */,
        {
          lineHeight: `${(16 * 2.25) / baseFontSize}rem` /* 36px */,
        },
      ],
      "4xl": [
        `${(16 * 2.25) / baseFontSize}rem` /* 36px */,
        {
          lineHeight: `${(16 * 2.5) / baseFontSize}rem` /* 40px */,
        },
      ],
      "5xl": [
        `${(16 * 3) / baseFontSize}rem` /* 48px */,
        {
          lineHeight: (16 * 1) / baseFontSize,
        },
      ],
      "6xl": [
        `${(16 * 3.75) / baseFontSize}rem` /* 60px */,
        {
          lineHeight: (16 * 1) / baseFontSize,
        },
      ],
      "7xl": [
        `${(16 * 4.5) / baseFontSize}rem` /* 72px */,
        {
          lineHeight: (16 * 1) / baseFontSize,
        },
      ],
      "8xl": [
        `${(16 * 6) / baseFontSize}rem` /* 96px */,
        {
          lineHeight: (16 * 1) / baseFontSize,
        },
      ],
      "9xl": [
        `${(16 * 8) / baseFontSize}rem` /* 128px */,
        {
          lineHeight: (16 * 1) / baseFontSize,
        },
      ],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
