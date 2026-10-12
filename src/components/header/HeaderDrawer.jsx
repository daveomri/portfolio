import { Link as RouterLink } from 'react-router-dom';
import {
  List,
  SwipeableDrawer,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import { colors } from '../../theme';
import scrollToSection from '../../scrollToSection';

const drawerSx = {
  backgroundColor: colors.cream,
  width: (theme) => theme.spacing(26),
  p: 2,
};

const navLinkSx = { textDecoration: 'none', color: '#000' };

// Lazily loaded by Header: page links on top, the current page's sections below.
const HeaderDrawer = ({ open, onOpen, onClose, pages, pageKeys, current }) => (
  <SwipeableDrawer
    anchor="right"
    onOpen={onOpen}
    open={open}
    onClose={onClose}
    slotProps={{ paper: { sx: drawerSx } }}
  >
    <div role="presentation">
      <List>
        {pageKeys.map((key) => (
          <RouterLink
            to={pages[key].path}
            style={navLinkSx}
            key={key}
            onClick={onClose}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{pages[key].icon}</ListItemIcon>
                <ListItemText primary={pages[key].text} />
              </ListItemButton>
            </ListItem>
          </RouterLink>
        ))}
      </List>
      <Divider />
      {current && (
        <List>
          {current.items.map((item) => (
            <ListItem disablePadding key={item.key}>
              <ListItemButton
                onClick={() => {
                  onClose();
                  scrollToSection(item.key);
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  </SwipeableDrawer>
);

HeaderDrawer.displayName = 'HeaderDrawer';

export default HeaderDrawer;
