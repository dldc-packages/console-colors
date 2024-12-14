import { COLORS } from "./colors.ts";
import { styled, type TStyled } from "./styled.ts";

const TW_LIGHT = 300;
const TW_REGULAR = 400;
const TW_DARK = 700;

/**
 * Apply bold font weight
 */
export const bold: TStyled = styled({ fontWeight: "bold" });

/**
 * Apply italic font style
 */
export const italic: TStyled = styled({ fontStyle: "italic" });

/**
 * Apply slate light text color
 */
export const slateLight: TStyled = styled({ color: COLORS.slate[TW_LIGHT] });

/**
 * Apply slate text color
 */
export const slate: TStyled = styled({ color: COLORS.slate[TW_REGULAR] });

/**
 * Apply slate dark text color
 */
export const slateDark: TStyled = styled({ color: COLORS.slate[TW_DARK] });

/**
 * Apply gray light text color
 */
export const grayLight: TStyled = styled({ color: COLORS.gray[TW_LIGHT] });

/**
 * Apply gray text color
 */
export const gray: TStyled = styled({ color: COLORS.gray[TW_REGULAR] });

/**
 * Apply gray dark text color
 */
export const grayDark: TStyled = styled({ color: COLORS.gray[TW_DARK] });

/**
 * Apply zinc light text color
 */
export const zincLight: TStyled = styled({ color: COLORS.zinc[TW_LIGHT] });

/**
 * Apply zinc text color
 */
export const zinc: TStyled = styled({ color: COLORS.zinc[TW_REGULAR] });

/**
 * Apply zinc dark text color
 */
export const zincDark: TStyled = styled({ color: COLORS.zinc[TW_DARK] });

/**
 * Apply neutral light text color
 */
export const neutralLight: TStyled = styled({
  color: COLORS.neutral[TW_LIGHT],
});

/**
 * Apply neutral text color
 */
export const neutral: TStyled = styled({ color: COLORS.neutral[TW_REGULAR] });

/**
 * Apply neutral dark text color
 */
export const neutralDark: TStyled = styled({ color: COLORS.neutral[TW_DARK] });

/**
 * Apply stone light text color
 */
export const stoneLight: TStyled = styled({ color: COLORS.stone[TW_LIGHT] });

/**
 * Apply stone text color
 */
export const stone: TStyled = styled({ color: COLORS.stone[TW_REGULAR] });

/**
 * Apply stone dark text color
 */
export const stoneDark: TStyled = styled({ color: COLORS.stone[TW_DARK] });

/**
 * Apply red light text color
 */
export const redLight: TStyled = styled({ color: COLORS.red[TW_LIGHT] });

/**
 * Apply red text color
 */
export const red: TStyled = styled({ color: COLORS.red[TW_REGULAR] });

/**
 * Apply red dark text color
 */
export const redDark: TStyled = styled({ color: COLORS.red[TW_DARK] });

/**
 * Apply orange light text color
 */
export const orangeLight: TStyled = styled({ color: COLORS.orange[TW_LIGHT] });

/**
 * Apply orange text color
 */
export const orange: TStyled = styled({ color: COLORS.orange[TW_REGULAR] });

/**
 * Apply orange dark text color
 */
export const orangeDark: TStyled = styled({ color: COLORS.orange[TW_DARK] });

/**
 * Apply amber light text color
 */
export const amberLight: TStyled = styled({ color: COLORS.amber[TW_LIGHT] });

/**
 * Apply amber text color
 */
export const amber: TStyled = styled({ color: COLORS.amber[TW_REGULAR] });

/**
 * Apply amber dark text color
 */
export const amberDark: TStyled = styled({ color: COLORS.amber[TW_DARK] });

/**
 * Apply yellow light text color
 */
export const yellowLight: TStyled = styled({ color: COLORS.yellow[TW_LIGHT] });

/**
 * Apply yellow text color
 */
export const yellow: TStyled = styled({ color: COLORS.yellow[TW_REGULAR] });

/**
 * Apply yellow dark text color
 */
export const yellowDark: TStyled = styled({ color: COLORS.yellow[TW_DARK] });

/**
 * Apply lime light text color
 */
export const limeLight: TStyled = styled({ color: COLORS.lime[TW_LIGHT] });

/**
 * Apply lime text color
 */
export const lime: TStyled = styled({ color: COLORS.lime[TW_REGULAR] });

/**
 * Apply lime dark text color
 */
export const limeDark: TStyled = styled({ color: COLORS.lime[TW_DARK] });

/**
 * Apply green light text color
 */
export const greenLight: TStyled = styled({ color: COLORS.green[TW_LIGHT] });

/**
 * Apply green text color
 */
export const green: TStyled = styled({ color: COLORS.green[TW_REGULAR] });

/**
 * Apply green dark text color
 */
export const greenDark: TStyled = styled({ color: COLORS.green[TW_DARK] });

/**
 * Apply emerald light text color
 */
export const emeraldLight: TStyled = styled({
  color: COLORS.emerald[TW_LIGHT],
});

/**
 * Apply emerald text color
 */
export const emerald: TStyled = styled({ color: COLORS.emerald[TW_REGULAR] });

/**
 * Apply emerald dark text color
 */
export const emeraldDark: TStyled = styled({ color: COLORS.emerald[TW_DARK] });

/**
 * Apply teal light text color
 */
export const tealLight: TStyled = styled({ color: COLORS.teal[TW_LIGHT] });

/**
 * Apply teal text color
 */
export const teal: TStyled = styled({ color: COLORS.teal[TW_REGULAR] });

/**
 * Apply teal dark text color
 */
export const tealDark: TStyled = styled({ color: COLORS.teal[TW_DARK] });

/**
 * Apply cyan light text color
 */
export const cyanLight: TStyled = styled({ color: COLORS.cyan[TW_LIGHT] });

/**
 * Apply cyan text color
 */
export const cyan: TStyled = styled({ color: COLORS.cyan[TW_REGULAR] });

/**
 * Apply cyan dark text color
 */
export const cyanDark: TStyled = styled({ color: COLORS.cyan[TW_DARK] });

/**
 * Apply sky light text color
 */
export const skyLight: TStyled = styled({ color: COLORS.sky[TW_LIGHT] });

/**
 * Apply sky text color
 */
export const sky: TStyled = styled({ color: COLORS.sky[TW_REGULAR] });

/**
 * Apply sky dark text color
 */
export const skyDark: TStyled = styled({ color: COLORS.sky[TW_DARK] });

/**
 * Apply azure light text color
 */
export const blueLight: TStyled = styled({ color: COLORS.blue[TW_LIGHT] });

/**
 * Apply azure text color
 */
export const blue: TStyled = styled({ color: COLORS.blue[TW_REGULAR] });

/**
 * Apply azure dark text color
 */
export const blueDark: TStyled = styled({ color: COLORS.blue[TW_DARK] });

/**
 * Apply indigo light text color
 */
export const indigoLight: TStyled = styled({ color: COLORS.indigo[TW_LIGHT] });

/**
 * Apply indigo text color
 */
export const indigo: TStyled = styled({ color: COLORS.indigo[TW_REGULAR] });

/**
 * Apply indigo dark text color
 */
export const indigoDark: TStyled = styled({ color: COLORS.indigo[TW_DARK] });

/**
 * Apply violet light text color
 */
export const violetLight: TStyled = styled({ color: COLORS.violet[TW_LIGHT] });

/**
 * Apply violet text color
 */
export const violet: TStyled = styled({ color: COLORS.violet[TW_REGULAR] });

/**
 * Apply violet dark text color
 */
export const violetDark: TStyled = styled({ color: COLORS.violet[TW_DARK] });

/**
 * Apply purple light text color
 */
export const purpleLight: TStyled = styled({ color: COLORS.purple[TW_LIGHT] });

/**
 * Apply purple text color
 */
export const purple: TStyled = styled({ color: COLORS.purple[TW_REGULAR] });

/**
 * Apply purple dark text color
 */
export const purpleDark: TStyled = styled({ color: COLORS.purple[TW_DARK] });

/**
 * Apply fuchsia light text color
 */
export const fuchsiaLight: TStyled = styled({
  color: COLORS.fuchsia[TW_LIGHT],
});

/**
 * Apply fuchsia text color
 */
export const fuchsia: TStyled = styled({ color: COLORS.fuchsia[TW_REGULAR] });

/**
 * Apply fuchsia dark text color
 */
export const fuchsiaDark: TStyled = styled({ color: COLORS.fuchsia[TW_DARK] });

/**
 * Apply pink light text color
 */
export const pinkLight: TStyled = styled({ color: COLORS.pink[TW_LIGHT] });

/**
 * Apply pink text color
 */
export const pink: TStyled = styled({ color: COLORS.pink[TW_REGULAR] });

/**
 * Apply pink dark text color
 */
export const pinkDark: TStyled = styled({ color: COLORS.pink[TW_DARK] });

/**
 * Apply rose light text color
 */
export const roseLight: TStyled = styled({ color: COLORS.rose[TW_LIGHT] });

/**
 * Apply rose text color
 */
export const rose: TStyled = styled({ color: COLORS.rose[TW_REGULAR] });

/**
 * Apply rose dark text color
 */
export const roseDark: TStyled = styled({ color: COLORS.rose[TW_DARK] });
