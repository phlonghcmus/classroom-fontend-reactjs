import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({open,onClose,handleCreateClass}) {
  const [Name, setName] = useState('')
  const [Part, setPart] = useState('')
  const [Theme, setTheme] = useState('')
  const [Room, setRoom] = useState('')
  const handleSummitDialog = () =>
  {
    const classItem = {
      name : Name,
      part : Part,
      theme : Theme,
      room : Room,
      user : 'phlonghcmus@gmail.com'
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(classItem)
    };
    fetch('https://classroom-manager-api.herokuapp.com/classes', requestOptions)
      .then(() => {
        handleCreateClass(classItem)
        onClose()
      })
  }
  return (
    <div >
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Tạo lớp học</DialogTitle>
        <DialogContent >
          <TextField 
            style={{minWidth:400}} 
            autoFocus
            margin="dense"
            id="name"
            label="Tên lớp học (bắt buộc)"
            type="text"  
            fullWidth
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField 
            style={{minWidth:400}} 
            autoFocus
            margin="dense"
            id="part"
            label="Phần"
            type="text"  
            fullWidth
            variant="standard"
            onChange={(e) => setPart(e.target.value)}
          />
          <TextField 
            style={{minWidth:400}} 
            autoFocus
            margin="dense"
            id="theme"
            label="Chủ đề"
            type="text"  
            fullWidth
            variant="standard"
            onChange={(e) => setTheme(e.target.value)}
          />
          <TextField 
            style={{minWidth:400}} 
            autoFocus
            margin="dense"
            id="room"
            label="Phòng"
            type="text"  
            fullWidth
            variant="standard"
            onChange={(e) => setRoom(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Hủy bỏ</Button>
          <Button onClick={handleSummitDialog}>Tạo lớp học</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
//Test commit