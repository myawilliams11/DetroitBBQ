import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Rib Slabs', value: 1 },
  { key: 2, text: 'Chicken Wings', value: 2 },
  { key: 3, text: 'Hamburgers', value: 3 },
  { key: 4, text: 'Polish Sausages', value: 4 }
]

const DropdownExampleSimple = () => (
  <Menu compact>
    <Dropdown text='Items' options={options} simple item />
  </Menu>
  
)

export default DropdownExampleSimple