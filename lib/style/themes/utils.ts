import { themes } from ".";

export interface ThemeProps {
    [key: string]: string;
}

export interface ThemesList {
    [key: string]: ThemeProps;
}

export interface MappedThemeProps {
    [key: string]: string | null;
}
  
  export const mapTheme = (theme: ThemeProps): MappedThemeProps => {

    return {
        '--color-primary-50': theme.primary || '',
        '--color-primary-100': theme.primary  || '',
        '--color-primary-200': theme.primary  || '',
        '--color-primary-300': theme.primary  || '',
        '--color-primary-400': theme.primary  || '',
        '--color-primary-500': theme.primary  || '',
        '--color-primary-600': theme.primary  || '',
        '--color-primary-700': theme.primary  || '',
        '--color-primary-800': theme.primary  || '',
        '--color-primary-900': theme.primary  || '',
    }
        
    }

  export const applyTheme = (themeName: string): void => {
      const themeObject: MappedThemeProps = mapTheme(themes[themeName]);
      if (!themeObject) return;

      const root = document.documentElement;

      Object.keys(themeObject).forEach((property) => {
        if (property === 'name') {
          return;
        }
    
        root.style.setProperty(property, themeObject[property]);
      });
  }


  export const extend = (
    extending: ThemeProps,
    newTheme: ThemeProps
  ): ThemeProps => {
    return { ...extending, ...newTheme };
  };