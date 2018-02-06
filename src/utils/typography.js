import Typography from 'typography'
import Annes from 'typography-theme-st-annes'
import { Colors } from '../layouts/colors'

Annes.overrideThemeStyles = options => ({
  ul: {
    listStyle: 'none'
  },
  'li > *': {
    'padding-left': '10px'
  },
  'ul li:before': {
    content: '"•   "',
    marginRight: '7px',
    color: Colors.pink
  }
})

const typography = new Typography(Annes)

export default typography
