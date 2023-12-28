import classes from "./NavBar.module.css"
import React from "react";
import {
    AppBar,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    styled,
    SwipeableDrawer
} from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import WeatherWidget from "./weather/WeatherWidget";
import Grid2 from "@mui/material/Unstable_Grid2";
import {useDispatch, useSelector} from "react-redux";
import PetsIcon from '@mui/icons-material/Pets';
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import {NavbarActions} from "../store/navbar-slice";
import {useNavigate} from "react-router-dom";
import {Info, PregnantWoman} from "@mui/icons-material";

const AppBarLabel = ({label}) => {
    return (
        <Toolbar>
            <Drawer anchor={"left"} />
            <Typography variant={"h6"} noWrap component={"div"} sx={{ flexGrow: 1 }}>
                {label}
            </Typography>
        </Toolbar>
    )
}

const Drawer = ({anchor}) => {
    const {anchor: anchorState, menuList} = useSelector(state => state.navbar)
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const handleToggleDrawer = (anchor, open) => (event) => {
        if ( event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')){
            return;
        }
        dispatch(NavbarActions.toggleDrawer({anchor, open}))

    }

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
            role={'presentation'}
            onClick={handleToggleDrawer(anchor, false)}
            onKeyDown={handleToggleDrawer(anchor, false)}
        >
            <List>
                {menuList.map((menuItem) => {
                    var icon;
                    var menuItemIconName = menuItem.icon

                    const listItem = (icon) => (
                        <ListItem key={menuItem.name} disablePadding>
                            <ListItemButton onClick={() => menuItem.name !== 'Home' ? navigate(`/${menuItem.name.toLowerCase()}`) : navigate('/')}>
                                <ListItemIcon>
                                    {icon}
                                    <ListItemText primary={menuItem.name} />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    )

                    switch(menuItemIconName) {
                        case ('home'):
                           icon = (<HomeIcon />)
                            return listItem(icon)
                        case ('info'):
                            icon = (<Info />)
                            return listItem(icon)
                        default:
                            icon = (<ContactPageIcon />)
                            return listItem(icon)
                    }
                })
                }
            </List>
        </Box>
    );

    return (
        <div>
            {/*{['left', 'right', 'top', 'bottom'].map((anchor) => (*/}
                <React.Fragment key={anchor}>
                    <IconButton
                        edge={"start"}
                        color={"inherit"}
                        aria-label={"menu"}
                        sx={{ mr: 2}}
                        onClick={handleToggleDrawer(anchor, true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={anchorState[anchor]}
                        onClose={handleToggleDrawer(anchor, false)}
                        onOpen={handleToggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            {/*))}*/}
        </div>
    )
}

const StyledAppBar = styled(AppBar)(({theme}) => {
    return ({
        backgroundColor: 'transparent',
        backdropFilter: 'blur(12px)',
    })
})

const NavBar = () => {

    return (
        <Grid2 sm={12}>
            <StyledAppBar position={"static"} color={"primary"} >
                {/*<Grid2 container direction={'row'}>*/}
                    <Grid2 xs={10}>
                        <AppBarLabel label={'Project: Tropical Eagle'} />
                    </Grid2>
                    <Grid2 xs={2} className={classes.weathergriditem}>
                        <WeatherWidget />
                    </Grid2>
                {/*</Grid2>*/}

            </StyledAppBar>
        </Grid2>
    )
}

export default NavBar;