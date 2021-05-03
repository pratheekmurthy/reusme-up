import React, { useState } from 'react';
import { Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { DropzoneDialog } from 'material-ui-dropzone';



import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[400],
    },
    secondary: {
      main: '#f44336',
    },
  },
});
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const FileUpload = (props) => {
  const {getfileName}= props
  const [open, setOpen] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState({
    severity: '',
    message: ''
  });

  function uploadFile(files) {
      var formdata = new FormData();
      formdata.append("resume", files[0], `${files[0].name}`);

      
      

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };

      fetch("http://localhost:3056/hr-profiles/resume", requestOptions)
        .then(response => {
          getfileName(response.url,files)
          setOpen(false);
        setSnackbarOpen(true);
        setSnackbarMessage({
          severity: 'success',
          message: ` resume submitted successfully !`
        });
        })
        .then(result => console.log(result))
        .catch(error => {
          console.log(error);
        setOpen(false);
        setSnackbarMessage({
          severity: 'error',
          message: 'Something went wrong. Please try again !'
        });
        setSnackbarOpen(true);
          console.log('error', error)
        });
  }

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <>
      <div
        style={{
          minHeight: '50px',
          minWidth: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => setOpen(true)}
        >
          Upload Resume
        </Button>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          style={{ width: '100%' }}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity={snackbarMessage.severity}
          >
            {snackbarMessage.message}
          </Alert>
        </Snackbar>

        <DropzoneDialog
          acceptedFiles={[
           
          ]}
          cancelButtonText={'cancel'}
          submitButtonText={'submit'}
          maxFileSize={5000000}
          open={open}
          onClose={() => setOpen(false)}
          onSave={files => {
            // const formData = new FormData();
            // console.log(files)
            // Update the formData object
            // formData.append('file', files[0], files[0].name);

            // Request made to the backend api
            // Send formData object
            // axios.post('/channel/uploadfile', formData);
            // setOpen(false);
            // setSnackbarOpen(true);
            console.log(files)
            uploadFile(files);
          }}
          showPreviews={true}
          showFileNamesInPreview={true}
        />
      </div>
    </>
  );
};

export default FileUpload;