import * as React from 'react';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import AppBar from '@mui/material/AppBar';

import Drawer from '@mui/material/Drawer';
import './AppBar.css'


export default function ButtonAppBar() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            
              <ListItem component="a" href="/about" disablePadding sx={{color:'#000000'}}>
                <ListItemButton>
                  <ListItemText primary={'關於宇爵'}  />
                </ListItemButton>
              </ListItem>
              <ListItem component="a" href="/proformance" disablePadding sx={{color:'#000000'}}>
                <ListItemButton>
                  <ListItemText primary={'工程實績'}  />
                </ListItemButton>
              </ListItem>
              <ListItem component="a" href="/serviceItem" disablePadding sx={{color:'#000000'}}>
                <ListItemButton>
                  <ListItemText primary={'服務項目'}  />
                </ListItemButton>
              </ListItem>
              <ListItem component="a" href="/socialFeedback" disablePadding sx={{color:'#000000'}}>
                <ListItemButton>
                  <ListItemText primary={'公益活動'}  />
                </ListItemButton>
              </ListItem>

            
           

          </List>
          <Divider />
          
        </Box>
      );
    return (
        <Box sx={{ flexGrow: 2 }} >
            <AppBar position="fixed" className='appbar' sx={{ bgcolor: "#ffffff" }}  >

                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>
                    <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', flexGrow: 1, color: '#000000', fontFamily: "cwTeXFangSong" }}>


                        宇爵工程顧問有限公司

                    </Typography>
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>

                        <Tabs aria-label="basic tabs example" >
                            <Tab label="關於宇爵" href="/about" sx={{ fontFamily: "Noto Sans TC", color: '#000000' }} />
                            <Tab label="工程實績" href="/proformance" sx={{ fontFamily: "Noto Sans TC", color: '#000000' }} />
                            <Tab label="服務項目" href='/serviceItem' sx={{ fontFamily: "Noto Sans TC", color: '#000000' }} />
                            <Tab label="公益活動" href="/socialFeedback" sx={{ fontFamily: "Noto Sans TC", color: '#000000' }} />
                        </Tabs>
                    </Box>
                    <React.Fragment key='left' >
                        <img src='https://i.imgur.com/Vkk8RQf.png' alt='1' width={20}  className='drawerButton' onClick={toggleDrawer('left', true)}    />
                        <Drawer
                            anchor='left'
                            open={state['left']}
                            onClose={toggleDrawer('left', false)}
                            onOpen={toggleDrawer('left', true)}
                        >
                            {list('left')}
                        </Drawer>
                    </React.Fragment>

                </Toolbar>


            </AppBar>
        </Box>
    );
}
