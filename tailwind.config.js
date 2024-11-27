module.exports = {
  content: ['./**.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'Onest': ['"Onest"', 'sans-serif'],
        'Manrope': ['"Manrope"', 'sans-serif'],
        'Inter': ['"Inter"', 'sans-serif'],
      },
      colors: {
        'light-gray': '#F4F5FA',
        "sunset-orange": "#FF7043",
        "sky-blue": "#007BFB",
        "dark": "#1E1E1E",
        "dark-navy": "#2F3244",
        "steel-blue": "#373D54",
        'slate-gray': '#676A7E',
        'bright-blue': '#1C66DC',
        'fog-gray': '#F5F7FA',
        'lime-green': '#39C615',
        'amber': '#FE9A03',
        'blue-12': '#0650cf'
      },
      space: {
        '2.2': '10px',
        '5.5': "22px"
      },
      spacing: {
        '2.2': '10px',
        "50px": "50px",
        '5.5': "22px",
        "30px": "30px",
        "6.5": '26px',
        '3.5': "15px",
        '4.5': "18px",
        '1.5': "5px",
      },
      borderRadius: {
        '30px': '30px',
        "20px": "20px",
        "15px": '15px',
        "20px": "20px",
        "40px": "40px",
        "10px": "10px",
        '50px': '50px',
      },
      lineHeight: {
        '6.5': '25px',
        '3.5': '14px',
        '4.5': '17px'
      },
      fontSize: {
        '13': '13px',
        '17': '17px',
        '15': '15px',
        '18': '18px'
      },
      boxShadow: {
        'btn-shadow': `14.74px 5.89px 35.37px 0px #0000000F,
          60.42px 23.58px 64.84px 0px #0000000D,
          137.05px 51.58px 88.42px 0px #00000008,
          244.63px 92.84px 104.63px 0px #00000003,
          381.68px 144.42px 114.95px 0px #00000000;
        `,
        'prev-btn-shadow': `
          10px 4px 24px 0px #0000000F,
          41px 16px 44px 0px #0000000D,
          93px 35px 60px 0px #00000008,
          166px 63px 71px 0px #00000003,
          259px 98px 78px 0px #00000000;
        `,
        'sort-shadow': `
          21px 14px 55px 0px #0000001A,
          83px 56px 100px 0px #00000017,
          186px 126px 135px 0px #0000000D,
          330px 224px 160px 0px #00000003,
          516px 351px 175px 0px #00000000;
        `,
        "stiky-card": `
          4px 4px 12px 0px #00000008,
          15px 15px 22px 0px #00000008;
        `,
        'avatar-shadow': `
          0px 4px 26.9px 0px #0000001A;
        `,
        'new-roll': `
          0px 3px 6px 0px #0000000D,
          0px 11px 11px 0px #0000000A,
          0px 25px 15px 0px #00000008;
        `,
        'dropdown': `
          10px 4px 24px 0px #0000000F,
          41px 16px 44px 0px #0000000D,
          93px 35px 60px 0px #00000008,
          166px 63px 71px 0px #00000003,
          259px 98px 78px 0px #00000000;
          `,
        'course-shd': `
            4px 4px 12px 0px #00000008,
            15px 15px 22px 0px #00000008,
            35px 35px 29px 0px #00000005,
            0px 4px 4px 0px #00000040;
          `,
        'dropdown-2': `
          4px 4px 12px 0px #00000008
          15px 15px 22px 0px #00000008
          35px 35px 29px 0px #00000005
          0px 0px 20px 0px #0000001A;
          `
      }
    },
  },
  plugins: [],
};
