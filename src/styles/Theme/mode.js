export const mode = (mode='Light') => {
  const LightMode = {primary: '#969696'}
  const DarkMode = {primary: '#222222'}
  
  return mode == "Light" ? LightMode : DarkMode
}