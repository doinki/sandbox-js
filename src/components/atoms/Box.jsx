import styled from 'styled-components';

/**
 * @type {import('styled-components').StyledComponent<'div', any, SystemProps, never>}
 * @description The Box component serves as a wrapper component for most of the CSS utility needs. https://mui.com/components/box/
 */
const Box = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    prop !== 'color' &&
    prop !== 'display' &&
    prop !== 'height' &&
    prop !== 'width' &&
    defaultValidatorFn(prop),
})`
  align-content: ${({ alignContent }) => alignContent};
  align-items: ${({ alignItems }) => alignItems};
  align-self: ${({ alignSelf }) => alignSelf};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: ${({ border }) => border};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-color: ${({ borderColor }) => borderColor};
  border-left: ${({ borderLeft }) => borderLeft};
  border-radius: ${({ borderRadius }) => borderRadius};
  border-right: ${({ borderRight }) => borderRight};
  border-top: ${({ borderTop }) => borderTop};
  bottom: ${({ bottom }) => bottom};
  box-shadow: ${({ boxShadow }) => boxShadow};
  box-sizing: ${({ boxSizing }) => boxSizing};
  color: ${({ color }) => color};
  column-gap: ${({ columnGap }) => columnGap};
  display: ${({ display = 'flex' }) => display};
  flex: ${({ flex }) => flex};
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  font-style: ${({ fontStyle }) => fontStyle};
  font-weight: ${({ fontWeight }) => fontWeight};
  gap: ${({ gap }) => gap};
  grid-area: ${({ gridArea }) => gridArea};
  grid-auto-columns: ${({ gridAutoColumns }) => gridAutoColumns};
  grid-auto-flow: ${({ gridAutoFlow }) => gridAutoFlow};
  grid-auto-rows: ${({ gridAutoRows }) => gridAutoRows};
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow};
  grid-template-areas: ${({ gridTemplateAreas }) => gridTemplateAreas};
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  grid-template-rows: ${({ gridTemplateRows }) => gridTemplateRows};
  height: ${({ height }) => height};
  justify-content: ${({ justifyContent }) => justifyContent};
  justify-items: ${({ justifyItems }) => justifyItems};
  justify-self: ${({ justifySelf }) => justifySelf};
  left: ${({ left }) => left};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  line-height: ${({ lineHeight }) => lineHeight};
  margin: ${({ margin }) => margin};
  margin-block: ${({ marginBlock }) => marginBlock};
  margin-block-end: ${({ marginBlockEnd }) => marginBlockEnd};
  margin-block-start: ${({ marginBlockStart }) => marginBlockStart};
  margin-bottom: ${({ marginBottom, my }) => my || marginBottom};
  margin-inline: ${({ marginInline }) => marginInline};
  margin-inline-end: ${({ marginInlineEnd }) => marginInlineEnd};
  margin-inline-start: ${({ marginInlineStart }) => marginInlineStart};
  margin-left: ${({ marginLeft, mx }) => mx || marginLeft};
  margin-right: ${({ marginRight, mx }) => mx || marginRight};
  margin-top: ${({ marginTop, my }) => my || marginTop};
  max-height: ${({ maxHeight }) => maxHeight};
  max-width: ${({ maxWidth }) => maxWidth};
  min-height: ${({ minHeight }) => minHeight};
  min-width: ${({ minWidth }) => minWidth};
  order: ${({ order }) => order};
  overflow: ${({ overflow }) => overflow};
  padding: ${({ padding }) => padding};
  padding-block: ${({ paddingBlock }) => paddingBlock};
  padding-block-end: ${({ paddingBlockEnd }) => paddingBlockEnd};
  padding-block-start: ${({ paddingBlockStart }) => paddingBlockStart};
  padding-bottom: ${({ paddingBottom, py }) => py || paddingBottom};
  padding-inline: ${({ paddingInline }) => paddingInline};
  padding-inline-end: ${({ paddingInlineEnd }) => paddingInlineEnd};
  padding-inline-start: ${({ paddingInlineStart }) => paddingInlineStart};
  padding-left: ${({ paddingLeft, px }) => px || paddingLeft};
  padding-right: ${({ paddingRight, px }) => px || paddingRight};
  padding-top: ${({ paddingTop, py }) => py || paddingTop};
  position: ${({ position }) => position};
  right: ${({ right }) => right};
  row-gap: ${({ rowGap }) => rowGap};
  text-align: ${({ textAlign }) => textAlign};
  text-overflow: ${({ textOverflow }) => textOverflow};
  text-transform: ${({ textTransform }) => textTransform};
  top: ${({ top }) => top};
  visibility: ${({ visibility }) => visibility};
  width: ${({ width }) => width};
  white-space: ${({ whiteSpace }) => whiteSpace};
  z-index: ${({ zIndex }) => zIndex};
`;

export default Box;
