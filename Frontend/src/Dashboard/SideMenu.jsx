import React from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Input,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { HiChartPie, HiInbox, HiOutlineCloudUpload, HiViewBoards } from 'react-icons/hi';
import { useAuth } from '../ContextApi/AuthProvider.jsx';
import Logout from '../Components/HomeComponents/Logout.jsx';
import { Link } from "react-router-dom";
 
export default function SideMenu() {

  const [authUser] = useAuth();
  const [open, setOpen] = React.useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(true);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
 
  return (
    <>
      <IconButton variant="text" size="lg" onClick={openDrawer} >
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2 text-black dark:text-white" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2 text-black dark:text-white" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer} className="bg-white dark:bg-slate-800">
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4 text-slate-700 dark:text-slate-100"
        >
          <div className="mb-2 flex items-center gap-4 p-4">
            <img
              src="/user.jpg"
              alt="brand"
              className="h-8 w-8"
            />
            <Typography variant="h5" color="blue-gray">
              <Link to="/">{authUser?.fullname || 'User'}</Link>
            </Typography>
          </div>
          <hr className="my-2 border-blue-gray-50 dark:border-blue-gray-200" />
          <List>
            
          <ListItem>
              <ListItemPrefix className="mr-4">
              <HiChartPie className="h-5 w-5" />
              </ListItemPrefix>
              <Link to="/admin/dashboard">DashBoard</Link>
            </ListItem>
          <ListItem>
              <ListItemPrefix className="mr-4">
              <HiOutlineCloudUpload className="h-5 w-5" />
              </ListItemPrefix>
              <Link to="/admin/dashboard/upload">Upload Book</Link>
            </ListItem>
          <ListItem>
              <ListItemPrefix className="mr-4">
              <HiInbox className="h-5 w-5" />
              </ListItemPrefix>
              <Link to="/admin/dashboard/managebook">Manage Books</Link>
            </ListItem>
            <hr className="my-2 border-blue-gray-50 dark:border-blue-gray-200" />
            <ListItem>
              <ListItemPrefix className="mr-4">
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Inbox
              <ListItemSuffix>
                <Chip
                  value="5"
                  size="sm"
                  variant="ghost"
                  color="blue-gray"
                  className="rounded-full bg-blue-200 dark:text-slate-700" 
                />
              </ListItemSuffix>
            </ListItem>
            <ListItem>
              <ListItemPrefix className="mr-4">
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Users
            </ListItem>
            <ListItem>
              <ListItemPrefix className="mr-4">
              <HiViewBoards className="h-5 w-5" />
              </ListItemPrefix>
              <Link to="#">Documentation</Link>
            </ListItem>
            <ListItem>
              {authUser ? <Logout /> : ''}
            </ListItem>
          </List>
        </Card>
      </Drawer>
    </>
  );
}