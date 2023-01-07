import './App.css';
import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  Collapse,
  ListItemButton,
} from '@mui/material';
import { Folder, Home, InsertDriveFile } from '@mui/icons-material';
import { useState } from 'react';
function App() {
  const menuItems = [
    {
      name: 'Menu Item 1',
      icon: <Home />,
    },
    {
      name: 'Menu Item 2',
      icon: <Home />,
    },
    {
      name: 'Dropdown Menu',
      children: [
        {
          key: 10,
          name: 'Dropdown Item 1',
          icon: <Folder />,
        },
        {
          key: 11,
          name: 'Dropdown Item 2',
          icon: <InsertDriveFile />,
        },
      ],
    },
    {
      name: 'Dropdown Menu 2',
      children: [
        {
          key: 13,
          name: 'Dropdown Item 1',
          icon: <Folder />,
        },
        {
          key: 14,
          name: 'Dropdown Item 2',
          icon: <InsertDriveFile />,
        },
      ],
    },
    {
      name: 'Dropdown Menu 3',
      children: [
        {
          key: 15,
          name: 'Dropdown Item 1',
          icon: <Folder />,
        },
        {
          key: 16,
          name: 'Dropdown Item 2',
          icon: <InsertDriveFile />,
        },
      ],
    },
  ];

  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedSubMenu, setSelectedSubMenu] = useState(0)
  const [itemIndex, setItemIndex] = useState(null)

  const handleClick = () => {
    setOpen(!open)
    setItemIndex(null)
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleSubMenuItemClick = (event, index) => {
    setSelectedSubMenu(index)
  }

  return (
    <div className="App">
      <Drawer variant="permanent" anchor="left" >
        <List>

          {menuItems.map((menuItem, index) =>
            menuItem.children ? (
              <div key={menuItem.name}>
                <ListItemButton
                  onClick={(event) => {
                    handleClick()
                    setItemIndex(itemIndex === index ? null : index)
                    handleMenuItemClick(null)
                  }}
                  className="text-blue-600"
                  selected={selectedIndex === index}
                  style={{ backgroundColor: selectedIndex === index ? '#eee' : 'white' }}
                >
                  <ListItemIcon>{menuItem.icon} </ListItemIcon>
                  < ListItemText primary={menuItem.name} />
                </ListItemButton>
                < Collapse in={itemIndex === index} timeout="auto" unmountOnExit >
                  <List component="div" disablePadding >
                    {
                      menuItem.children.map((child, cindex) => (
                        <ListItemButton
                          key={child.name}
                          onClick={(event) => {
                            handleSubMenuItemClick(event, child.key)
                            handleMenuItemClick(null)
                          }}
                          selected={selectedSubMenu === child.key}
                          style={{ backgroundColor: selectedSubMenu === child.key ? '#eee' : 'white' }}
                        >
                          <ListItemIcon className="text-red-600">{child.icon} </ListItemIcon>
                          < ListItemText primary={child.name} />
                        </ListItemButton>
                      ))}
                  </List>
                </Collapse>
              </div>
            ) : (
              <ListItemButton

                key={menuItem.name}

                onClick={(event) => handleMenuItemClick(event, index)}
                selected={selectedIndex === index}
                style={{ backgroundColor: selectedIndex === index ? '#eee' : 'white' }}
              >
                <ListItemIcon>{menuItem.icon} </ListItemIcon>
                <ListItemText primary={menuItem.name} />
              </ListItemButton>))}
        </List>
      </Drawer>
    </div>
  );
}

export default App;
