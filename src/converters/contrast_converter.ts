function getLuminance(hexcolor: string) {
  const r = parseInt(hexcolor.substring(0, 2), 16)
  const g = parseInt(hexcolor.substring(2, 4), 16)
  const b = parseInt(hexcolor.substring(4, 6), 16)
  console.log(r, g, b)
  const RsRGB = r / 255
  const GsRGB = g / 255
  const BsRGB = b / 255
  const R = RsRGB <= 0.03928 ? RsRGB / 12.92 : Math.pow((RsRGB + 0.055) / 1.055, 2.4)
  const G = GsRGB <= 0.03928 ? GsRGB / 12.92 : Math.pow((GsRGB + 0.055) / 1.055, 2.4)
  const B = BsRGB <= 0.03928 ? BsRGB / 12.92 : Math.pow((BsRGB + 0.055) / 1.055, 2.4)
  return 0.2126 * R + 0.7152 * G + 0.0722 * B
}

const W3ACG = (background: string, foreground: string): number => {
  const backLum = getLuminance(background.substring(1)) + 0.05
  const foreLum = getLuminance(foreground.substring(1)) + 0.05
  const contrast = Math.trunc((Math.max(backLum, foreLum) / Math.min(backLum, foreLum)) * 100) / 100
  return contrast
}

const contrast_converter = async (background: string, foreground: string): Promise<number> => {
  return W3ACG(background, foreground)
}
export default contrast_converter
