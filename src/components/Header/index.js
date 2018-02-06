import React from 'react'
import Link from 'gatsby-link'
import { Colors } from '../../layouts/colors'

const Header = () => (
  <div
    style={{
      background: 'transparent',
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '100%',
        padding: '1.45rem 2.087rem'
      }}
    >
      <Link to="/" style={{ fontSize: '1.4em', color: Colors.darkblue }}>
        esther cuan
      </Link>
      <Link to="/resume" style={{ fontSize: '1.4em' }}>
        resume
      </Link>
    </div>
  </div>
)

export default Header
