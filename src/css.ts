export interface TConsoleStyles {
  backgroundColor?: string;
  borderWidth?: string;
  borderColor?: string;
  borderStyle?: string;
  borderRadius?: string;
  color?: string;
  margin?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;
  padding?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  textDecoration?: string;
  textTransform?: string;
  font?: string;
  fontFamily?: string;
  fontSize?: string;
  fontStyle?: string;
  fontWeight?: string;
  lineHeight?: string;
}

export function printStyles(styles: TConsoleStyles): string {
  return Object.entries(styles)
    .map(([key, value]) => `${key}: ${value}`)
    .join("; ");
}
