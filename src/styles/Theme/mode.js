export const mode = (mode='Light') => {
  const alerts = {
    success: '#259669',
    info: '#25b0e4',
    warning: '#f3af34',
    danger: '#f3502c'
  }

  const LightMode = {
    gray: {
      primary: '#F8F9FA',
      secondary: '#ADB5BD',
      tertiary: '#495057',
    },
    blue: {
      primary: '#FFFFFF',
      secondary: '#AAC7D5',
      tertiary: '#558FAA',
      quarter: '#1D3557'
    },
    alerts: alerts
  }

  const DarkMode = {
    gray: {
      primary: '#212529',
      secondary: '#ADB5BD',
      tertiary: '#F8F9FA',
    },
    blue: {
      primary: '#1D3557',
      secondary: '#558FAA',
      tertiary: '#AAC7D5',
      quarter: '#FFFFFF'
    },
    alerts: alerts
  }

  

  return mode == "Light" ? LightMode : DarkMode
}