import { Folder, Home, InsertDriveFile } from '@mui/icons-material';
export const menuItems = [
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
    {
        name: 'Menu Item 6',
        icon: <Home />,
      },
  ];