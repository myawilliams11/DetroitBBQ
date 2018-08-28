import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'BBQ', value: 1 },
  { key: 2, text: 'Ribs', value: 2 },
  { key: 3, text: 'Chicken', value: 3 },
]

const DropdownExampleSimple = () => (
  <Menu compact>
    <Dropdown text='Menu' options={options} simple item />
  </Menu>
  
)

export default DropdownExampleSimple