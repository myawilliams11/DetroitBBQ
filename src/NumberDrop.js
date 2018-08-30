import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const options = [
  { key: 1, text: 10, value: 1 },
  { key: 2, text: 15, value: 2 },
  { key: 3, text: 20, value: 3 },
  { key: 4, text: 25, value: 4 },
  { key: 5, text: 30, value: 5 },
  { key: 2, text: 50, value: 6 },
  { key: 2, text: 75, value: 7 },
  { key: 2, text: 100, value: 8 }
]

const DropdownExampleSimple = () => (
  <Menu compact>
    <Dropdown text='Quantity' options={options} simple item />
  </Menu>
)

export default DropdownExampleSimple