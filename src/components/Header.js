import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import { ListItemIcon } from "@mui/material";
import Logout from '@mui/icons-material/Logout';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [loginUser, setLoginUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const jwt_decode = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64).split('').map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join('')
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && token !== "undefined") {
      const userLogin = jwt_decode(token);
      if (userLogin) {
        setLoginUser(userLogin);
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
        localStorage.removeItem("token");
      }
    } else {
      setAuthenticated(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuthenticated(false);
    setLoginUser(null);
    navigate("/");
  };

  return (
    <section className="navbardiv" style={{ width: '100%', background: '#333', color: '#fff' }}>
      <nav className="navbar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', padding: '10px 20px' }}>
        <Link to="/">
          <img src="images/jaspreet-logo.jpg" height="100px" style={{ marginTop: "-10px" }} alt="Logo" />
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ display: 'none', color: '#fff', fontSize: '28px', cursor: 'pointer' }}>
          <MenuIcon />
        </div>

        {/* Main Menu */}
        <ul className={`menu-list ${mobileMenuOpen ? 'show' : ''}`} style={{
          display: 'flex',
          listStyle: 'none',
          padding: 0,
          margin: 0,
          gap: '15px',
          flexWrap: 'wrap'
        }}>
          <li className={window.location.pathname === "/" ? "active" : ""}><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
          <li className={window.location.pathname === "/about" ? "active" : ""}><Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link></li>
          <li className={window.location.pathname === "/menu" ? "active" : ""}><Link to="/menu" style={{ color: '#fff', textDecoration: 'none' }}>Menu</Link></li>
          <li className={window.location.pathname === "/services" ? "active" : ""}><Link to="/services" style={{ color: '#fff', textDecoration: 'none' }}>Services</Link></li>
          <li className={window.location.pathname === "/gallery" ? "active" : ""}><Link to="/gallery" style={{ color: '#fff', textDecoration: 'none' }}>Gallery</Link></li>
          <li className={window.location.pathname === "/contactus" ? "active" : ""}><Link to="/contactus" style={{ color: '#fff', textDecoration: 'none' }}>Contact Us</Link></li>

          {authenticated && loginUser ? (
            <li>
              <Tooltip title="Account">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#fff' }}>{loginUser?.name || loginUser?.email || 'User'}</span>
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 1 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32, bgcolor: '#ff6b6b' }}>
                      {(loginUser?.name || 'U').charAt(0).toUpperCase()}
                    </Avatar>
                  </IconButton>
                </div>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    minWidth: 200,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                      bgcolor: '#ff6b6b',
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <div style={{ padding: '8px 16px', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                  <div style={{ fontWeight: 'bold' }}>{loginUser?.name || 'User'}</div>
                  <div style={{ fontSize: '0.8em', color: '#666' }}>{loginUser?.email || ''}</div>
                </div>
                <MenuItem onClick={() => navigate("/profile")}>
                  <Avatar /> My Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </li>
          ) : (
            <li><Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link></li>
          )}
        </ul>
      </nav>

      {/* Inline responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .menu-toggle {
            display: block !important;
          }
          .menu-list {
            display: none !important;
            flex-direction: column;
            background-color: #444;
            width: 100%;
            padding: 10px 0;
          }
          .menu-list.show {
            display: flex !important;
          }
          .menu-list li {
            padding: 10px 20px;
            border-bottom: 1px solid #555;
          }
        }
      `}</style>
    </section>
  );
}

export default Header;
