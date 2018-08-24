import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const options = [
  { key: 1, text: 10, value: 1 },
  { key: 2, text: 50, value: 2 },
  { key: 3, text: 100, value: 3 },
]

const DropdownExampleSimple = () => (
  <Menu compact>
    <Dropdown text='Quantity' options={options} simple item />
  </Menu>
)

export default DropdownExampleSimple