import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import './AppBar.css'

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" className='appbar'>

                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>
                    <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', flexGrow: 1,color:'#ffffff',fontFamily:"cwTeXFangSong" }}>


                        宇爵工程顧問有限公司

                    </Typography>
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>

                        <Tabs aria-label="basic tabs example" >
                            <Tab label="關於宇爵" href="/about" sx={{fontFamily:"cwTeXFangSong",color:'#ffffff' }} />
                            <Tab label="工程實績"  href="/proformance" sx={{fontFamily:"cwTeXFangSong",color:'#ffffff' }}  />
                            <Tab label="服務項目" sx={{fontFamily:"cwTeXFangSong",color:'#ffffff' }} />
                            <Tab label="社會回饋" href="/socialFeedback"sx={{fontFamily:"cwTeXFangSong",color:'#ffffff' }}  />
                        </Tabs>
                    </Box>

                </Toolbar>


            </AppBar>
        </Box>
    );
}
