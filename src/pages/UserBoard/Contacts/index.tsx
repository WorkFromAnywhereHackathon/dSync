import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Auth } from 'store/types.d';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import Link from 'components/Link';
import Button from 'components/Button';

import useStyles from './style';

const defaultContacts: {
  id: number;
  name: string;
  place: string;
  contactNumber: string;
  description?: string;
  avatar?: string;
}[] = [
  {
    id: 0,
    name: 'Автомойка',
    place: 'Минск',
    contactNumber: '+375(29)7777777',
    description: '',
  },
];

const Contacts = () => {
  const classes = useStyles();

  // const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} component="h1" align="center">
        Контакты
      </Typography>
      <List component="nav" aria-label="available contacts">
        {defaultContacts.map(item => (
          <ListItem key={item.id}>
            <Link className={classes.listItem} to={`booking/${item.id}`}>
              <>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={`${item.name}, ${item.place}`} secondary={`${item.contactNumber}`} />
              </>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Contacts;
