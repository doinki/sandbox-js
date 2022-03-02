import styled from 'styled-components';

/**
 * @typedef {object} SystemProps
 * @property {React.CSSProperties['border']} border
 * @property {React.CSSProperties['borderBottom']} borderBottom
 * @property {React.CSSProperties['borderColor']} borderColor
 * @property {React.CSSProperties['borderLeft']} borderLeft
 * @property {React.CSSProperties['borderRadius']} borderRadius
 * @property {React.CSSProperties['borderRight']} borderRight
 * @property {React.CSSProperties['borderTop']} borderTop
 * @property {React.CSSProperties['boxShadow']} boxShadow
 * @property {React.CSSProperties['display']} display
 * @property {React.CSSProperties['overflow']} overflow
 * @property {React.CSSProperties['textOverflow']} textOverflow
 * @property {React.CSSProperties['visibility']} visibility
 * @property {React.CSSProperties['whiteSpace']} whiteSpace
 * @property {React.CSSProperties['alignContent']} alignContent
 * @property {React.CSSProperties['alignItems']} alignItems
 * @property {React.CSSProperties['alignSelf']} alignSelf
 * @property {React.CSSProperties['flex']} flex
 * @property {React.CSSProperties['flexBasis']} flexBasis
 * @property {React.CSSProperties['flexDirection']} flexDirection
 * @property {React.CSSProperties['flexGrow']} flexGrow
 * @property {React.CSSProperties['flexShrink']} flexShrink
 * @property {React.CSSProperties['flexWrap']} flexWrap
 * @property {React.CSSProperties['justifyContent']} justifyContent
 * @property {React.CSSProperties['justifyItems']} justifyItems
 * @property {React.CSSProperties['justifySelf']} justifySelf
 * @property {React.CSSProperties['order']} order
 * @property {React.CSSProperties['gap']} gap
 * @property {React.CSSProperties['columnGap']} columnGap
 * @property {React.CSSProperties['rowGap']} rowGap
 * @property {React.CSSProperties['gridColumn']} gridColumn
 * @property {React.CSSProperties['gridRow']} gridRow
 * @property {React.CSSProperties['gridAutoFlow']} gridAutoFlow
 * @property {React.CSSProperties['gridAutoColumns']} gridAutoColumns
 * @property {React.CSSProperties['gridAutoRows']} gridAutoRows
 * @property {React.CSSProperties['gridTemplateColumns']} gridTemplateColumns
 * @property {React.CSSProperties['gridTemplateRows']} gridTemplateRows
 * @property {React.CSSProperties['gridTemplateAreas']} gridTemplateAreas
 * @property {React.CSSProperties['gridArea']} gridArea
 * @property {React.CSSProperties['backgroundColor']} backgroundColor
 * @property {React.CSSProperties['color']} color
 * @property {React.CSSProperties['bottom']} bottom
 * @property {React.CSSProperties['left']} left
 * @property {React.CSSProperties['position']} position
 * @property {React.CSSProperties['right']} right
 * @property {React.CSSProperties['top']} top
 * @property {React.CSSProperties['zIndex']} zIndex
 * @property {React.CSSProperties['height']} height
 * @property {React.CSSProperties['maxHeight']} maxHeight
 * @property {React.CSSProperties['maxWidth']} maxWidth
 * @property {React.CSSProperties['minHeight']} minHeight
 * @property {React.CSSProperties['minWidth']} minWidth
 * @property {React.CSSProperties['width']} width
 * @property {React.CSSProperties['boxSizing']} boxSizing
 * @property {React.CSSProperties['margin']} margin
 * @property {React.CSSProperties['marginBottom']} marginBottom
 * @property {React.CSSProperties['marginLeft']} marginLeft
 * @property {React.CSSProperties['marginRight']} marginRight
 * @property {React.CSSProperties['marginTop']} marginTop
 * @property {React.CSSProperties['marginLeft'] & React.CSSProperties['marginRight']} mx
 * @property {React.CSSProperties['marginTop'] & React.CSSProperties['marginBottom']} my
 * @property {React.CSSProperties['marginInline']} marginInline
 * @property {React.CSSProperties['marginInlineStart']} marginInlineStart
 * @property {React.CSSProperties['marginInlineEnd']} marginInlineEnd
 * @property {React.CSSProperties['marginBlock']} marginBlock
 * @property {React.CSSProperties['marginBlockStart']} marginBlockStart
 * @property {React.CSSProperties['marginBlockEnd']} marginBlockEnd
 * @property {React.CSSProperties['padding']} padding
 * @property {React.CSSProperties['paddingBottom']} paddingBottom
 * @property {React.CSSProperties['paddingLeft']} paddingLeft
 * @property {React.CSSProperties['paddingRight']} paddingRight
 * @property {React.CSSProperties['paddingTop']} paddingTop
 * @property {React.CSSProperties['paddingLeft'] & React.CSSProperties['paddingRight']} px
 * @property {React.CSSProperties['paddingTop'] & React.CSSProperties['paddingBottom']} py
 * @property {React.CSSProperties['paddingInline']} paddingInline
 * @property {React.CSSProperties['paddingInlineStart']} paddingInlineStart
 * @property {React.CSSProperties['paddingInlineEnd']} paddingInlineEnd
 * @property {React.CSSProperties['paddingBlock']} paddingBlock
 * @property {React.CSSProperties['paddingBlockStart']} paddingBlockStart
 * @property {React.CSSProperties['paddingBlockEnd']} paddingBlockEnd
 * @property {React.CSSProperties['fontFamily']} fontFamily
 * @property {React.CSSProperties['fontSize']} fontSize
 * @property {React.CSSProperties['fontStyle']} fontStyle
 * @property {React.CSSProperties['fontWeight']} fontWeight
 * @property {React.CSSProperties['letterSpacing']} letterSpacing
 * @property {React.CSSProperties['lineHeight']} lineHeight
 * @property {React.CSSProperties['textTransform']} textTransform
 * @property {React.CSSProperties['textAlign']} textAlign
 */

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
