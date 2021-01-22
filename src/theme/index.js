import Light from './Light';
import Dark from './Dark';

const loadColors = (colors) => {
    switch(colors){
        case Theme.DARK: return Dark;
        case Theme.LIGHT: return Light;
        default: return Light;
    }
}

export default class Theme {
  static LIGHT = 'light';
  static DARK = 'dark';

  constructor(colors = Theme.DARK) {
    this.currentTheme = colors;
    this.colors = loadColors(colors);
    
    this.init()
  }

  isDark() {
    switch (this.currentTheme) {
      case Theme.DARK: return true;
    }
    return false;
  }

  init() {
    this.dark = this.isDark();

    // layout
    this.sizes = {
        xxs: 8, // 16px
        xs: 16, // 16px
        sm: 24, // 24px
        md: 32, // 32px
        lg: 48, // 48px
        xl: 64, // 64px
        xxl: 80, // 80px
    };
    for (let key in this.sizes) {
      let size = this.sizes[key];
      size = parseFloat(size);
      this.sizes[`${key}W`] = `${4 * size}`; // scale up for widths
    }

    // typography
    this.fontSizes = {
        xxs: 4,
        xs: 8,
        sm: 12,
        md: 16,
        lg: 20,
        xl: 24,
        xxl: 28
    };
    this.lineHeights = {
        xs: 24, // 24px
        sm: 32, // 32px
        md: 48, // 48px
        lg: 64, // 64px
        xl: 80, // 80px
        xxl: 120 //120px
    };
    this.fonts = {
      default: 'Roboto',
    }
    this.fontWeights = {
      regular: 400,
      bold: 700,
    };
    this.letterSpacings = {};

    // space (margins/paddings)
    this.space = {
        xxxs: 4, // 4px
        xxs: 8, // 8px
        xs: 16, // 16px
        sm: 24, // 24px
        md: 32, // 32px
        lg: 48, // 48px
        xl: 64, // 64px
        xxl: 96, // 96px
    };

    // border
    this.radii = {
        sm: 4, //4px
        md: 8, // 8px
        lg: 16, // 16px
        xl: 32, // 32px
        xxl: 64, // 64px,
        smFab: '50%',
        mdFab: '50%',
        lgFab: '50%',
        xlFab: '50%',
        xxlFab: '50%',
    };
    this.borderWidths = {};
    this.borderStyles = {};
    this.borders = {};

    // shadow
    this.shadows = {
		xs: '1px 1px 2px rgba(0,0,0,0.12)',
		sm: '2px 2px 4px rgba(0,0,0,0.12)',
		md: '4px 4px 8px rgba(0,0,0,0.24)',
		lg: '6px 6px 12px rgba(0,0,0,0.24)',
		xl: '8px 8px 16px rgba(0,0,0,0.48)',
    }

    // position
    this.zIndices = {
		xs: 1,
		sm: 2,
		md: 3,
		lg: 4,
		xl: 5
    }

    // breakpoints
    const breakpoints = ['768px', '1024px', '1280px', '1920px'];
    this.breakpoints = breakpoints;
    this.breakpoints.sm = breakpoints[0];
    this.breakpoints.md = breakpoints[1];
    this.breakpoints.lg = breakpoints[2];
    this.breakpoints.xl = breakpoints[3];
    this.mediaQuery = {
		mobile: `@media (max-width: ${breakpoints[0]})`,
		tablet: `@media (min-width: ${breakpoints[0]}) and (max-width: ${breakpoints[1]})`,
		laptop: `@media (min-width: ${breakpoints[1]}) and (max-width: ${breakpoints[2]})`,
		desktop: `@media (min-width: ${breakpoints[2]})`
    }
    
    // section values
    this.headerHeight = 64;
  }

  static self = new Theme()
  static setTheme(colors) {
    Theme.self = new Theme(colors);
  }
}