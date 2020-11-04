import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import MemoryIcon from '@material-ui/icons/Memory';
import SettingsIcon from '@material-ui/icons/Settings';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

import MemoryWrapper from '../Games/Memory/MemoryWrapper';
import ParentAuth from '../Auth/ParentAuth';
import Settings from '../Settings';
import logo from '../../assets/images/logo_transparent.png';
import * as actions from '../../store/actions/index';
import * as CONST from '../../constants';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    padding: theme.spacing(3),
    width: '100%',
  },
  avatar: {
    marginRight: theme.spacing(2),
    width: '60px',
    height: '40px',
  },
  typography: {
    marginRight: theme.spacing(2),
  },
  navLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

function Layout({ isAuthenticated, email, userImage, mode, dispatch }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [openParentAuth, setOpenParentAuth] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  useEffect(() => {
    if (mode === CONST.MODES.CHILD) setSelectedIndex(0);
  }, [mode]);

  function getContent(index) {
    if (index === 0) return <MemoryWrapper></MemoryWrapper>;
    if (index === 1) return <Settings></Settings>;
  }

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Avatar
            variant="square"
            alt="Logo"
            src={logo}
            className={classes.avatar}
          />
          <Typography variant="h6" noWrap>
            Детско Катче
          </Typography>
        </Toolbar>
        <Toolbar>
          <Avatar
            variant="circle"
            alt="user avatar"
            src={userImage ? userImage : CONST.DEFAULT_USER_AVATAR}
            style={{ marginRight: '10px' }}
          ></Avatar>
          {mode === CONST.MODES.PARENT && (
            <Typography variant="h6" noWrap className={classes.typography}>
              Здраво, {email}
            </Typography>
          )}
          <Tooltip
            title={
              mode === CONST.MODES.PARENT
                ? 'Премини во режим за деца'
                : 'Премини во режим за родители'
            }
          >
            <IconButton
              className={classes.avatar}
              onClick={() => {
                console.log(mode === CONST.MODES.PARENT);
                if (mode === CONST.MODES.PARENT) {
                  console.log('hello');
                  dispatch(actions.updateMode(CONST.MODES.CHILD));
                } else {
                  console.log('child');
                  setOpenParentAuth(true);
                }
              }}
            >
              {mode === CONST.MODES.PARENT ? (
                <ChildCareIcon></ChildCareIcon>
              ) : (
                <PermIdentityIcon></PermIdentityIcon>
              )}
            </IconButton>
          </Tooltip>
          {mode === CONST.MODES.PARENT && (
            <Button variant="outlined">
              <NavLink className={classes.navLink} to="/logout">
                Одјави се
              </NavLink>
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Меморија'].map((text, index) => (
            <ListItem
              button
              key={text}
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <MemoryIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        {mode === CONST.MODES.PARENT && (
          <List>
            {['Подесувања'].map((text, index) => (
              <ListItem
                button
                key={text}
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
              >
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        )}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar}>{getContent(selectedIndex)}</div>
      </main>
      {openParentAuth && (
        <ParentAuth
          onClose={() => {
            setOpenParentAuth(false);
          }}
        ></ParentAuth>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    email: state.auth.email,
    userImage: state.auth.userImage,
    mode: state.auth.mode,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
