import * as React from 'react';
import Avatar from '@mui/material/Avatar';

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

export default function BackgroundLetterAvatars() {
  const name=["Phạm Hoàng Long","Lý Mỹ Như","Trần Đức Lộc","Nguyễn Tiến Tài","Nguyễn Đăng Khoa"]
  const number =  Math.floor(Math.random() * (4 - 0 + 1) );
  return (
      <Avatar style={{
            position: 'absolute',
            width:80,
            height:80,
            right: 20,
            top:60

        }} {...stringAvatar(name[number])} />
  );
}