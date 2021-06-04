import React from 'react'

import LogoSVG from '../../assets/logo.svg'

import {
  FiHome,
  FiArrowUpCircle,
  FiArrowDownCircle,
  FiLogOut
} from 'react-icons/fi'

import * as s from './styles'

const Aside: React.FC = () => {
  return (
    <s.Container>
      <s.Header>
        <s.Logo src={LogoSVG} alt="Wallet app logo"/>
        <s.Title>My wallet</s.Title>
      </s.Header>

      <s.MenuList>
        <s.MenuItem href="#">
          <FiHome />
          <span>Dashboard</span>
        </s.MenuItem>
        <s.MenuItem href="#">
          <FiArrowUpCircle />
          <span>Received</span>
        </s.MenuItem>
        <s.MenuItem href="#">
          <FiArrowDownCircle />
          <span>Send</span>
        </s.MenuItem>
        <s.MenuItem href="#">
          <FiLogOut />
          <span>Logout</span>
        </s.MenuItem>
      </s.MenuList>
    </s.Container>
  )
}

export default Aside
