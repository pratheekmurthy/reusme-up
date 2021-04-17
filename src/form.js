import React,{useState} from 'react'
import {
    TextField,Grid,MenuItem,InputLabel,Select,
    FormControl,makeStyles,Radio,withStyles,Button,Card,CardContent,CardHeader,Typography,Link,Box} from '@material-ui/core'
import { green } from '@material-ui/core/colors';
import FileUpload from './FileUpload'
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header'



function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://www.grssl.com/">
          Grassroots
        </Link>{' '}
        {2021}
        {'.'}
      </Typography>
    );
  }

const theme = createMuiTheme();

theme.typography.h6 = {
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
};



const JobForm =(props)=>{
    //declaring state variables for all the inputs
    const [firstName,setfirstName] = useState("")
    const [lastName,setlastName] = useState("")
    const [email,setEmail] = useState("")
    const [Dob,setDob] = useState("")
    const [mobile,setMobile] = useState("")
    const [alternatemob,setalternateMob] = useState("")
    const [experience,setExperience] = useState("")
    const [graduation,setGraduation] = useState("")
    const [backlogs,setBacklogs] = useState("")
    const [ctc,setCtc] = useState("")
    const [joining,setJoining] = useState("")
    const [error,setErrors] = useState(false)
    
    const formerrors={}
   

    //on Change functions


    const onChangefirstName =(e)=>setfirstName(e.target.value)
    const onChangelastName =(e)=>setlastName(e.target.value)
    const onChangeDOB =(e)=>setDob(e.target.value)
    const onChangemobile =(e)=>setMobile(e.target.value)
    const onChangeAlternate_Mob =(e)=>setalternateMob(e.target.value)
    const onChangeexperience =(e)=>setExperience(e.target.value)
    const onChangegraduation =(e)=>setGraduation(e.target.value)
    const onChangebackloags =(e)=>setBacklogs(e.target.value)
    const onChangeCTC =(e)=>setCtc(e.target.value)
    const onChangejoining =(e)=>setJoining(e.target.value)
    const onChangeEmail=(e) => setEmail(e.target.value)



    const experience1 = [{name : 'Fresher' , value:"Fresher"},{name : '1 Year' , value:"1 Year"},{name : '2 Year' , value:"2 Year"},{name : '3 Years' , value:"3 Years"},{name : '4 Years' , value:"4 Years"},{name : '5 Years' , value:"5 Years"},{name : '6 Years' , value:"6 Years"},{name : '7 Years' , value:"7 Years"},{name : '8 Years' , value:"8 Years"},{name : '9 Years' , value:"9 Years"},{name : '10 Years' , value:"10 Years"},{name : '11 Years' , value:"11 Years"},{name : '12 Years' , value:"12 Years"},{name : '13 Years' , value:"13 Years"},{name : '14 Years' , value:"14 Years"},{name : '15 Years' , value:"15 Years"},{name : '16 Years' , value:"16 Years"},{name : '17 Years' , value:"17 Years"},{name : '18 Years' , value:"18 Years"},{name : '19 Years' , value:"19 Years"},{name : '20 Years' , value:"20 Years"},{name : '20+ Years' , value:"20+ Years"}]
    const backlogs1 = [{name : 'Yes' , value:"Yes"},{name : 'No' , value:"No"}]
    const joining1 = [{name : 'Yes' , value:"Yes"},{name : 'No' , value:"No"}]

    const runValidations=()=>{
    //     console.log(firstName.length)
    //    if(firstName.length === '0'){
       
    //    }
    }

   

    const handleReset =(e)=>{
        setfirstName("")
        setlastName("")
        setDob("")
        setMobile("")
        setalternateMob("")
        setExperience("")
        setExperience("")
        setGraduation("")
        setBacklogs("")
        setCtc("")
        setJoining("")
        setEmail("")
        setErrors(false)
    }
    
    
    const handleSubmit = (e)=>{
        runValidations()
        console.log(error)
        
            const data ={
                firstName,
                lastName,
                email,
                Dob,
                mobile,
                alternatemob,
                experience,
                graduation,
                backlogs,
                ctc,
                joining
            }
            console.log(data)
            handleReset()
       
        

    }

    
    

const useStyles = makeStyles((theme) => ({
    formControl: {
    //   margin: theme.spacing(2),
      minWidth: 200,
    //   padding : '10px 10px 10px 10px'
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    card :{
        maxWidth: 700,
        //display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    root3:{
        display : 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    root2: {
        height: '120vh'
      },
     
      form: {
        width: '100%',
        marginTop: theme.spacing(1)
      },
     
      submit: {
        margin: theme.spacing(3, 0, 2)
      },
      avatarWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      root1: {
        width: '100%',
        height : '120vh',
        '& > * + *': {
          marginTop: theme.spacing(2),
          display : 'flex',
        justifyContent: 'center',
        alignItems: 'center'
        },
      },
  }));
  const GreenRadio = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
        flexGrow: 1
        
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  const classes = useStyles();

  
    return(<div className={classes.root1}>
        <Header/>
        <Grid container spacing={3} direction="row">
        <Grid item xs={4} sm={4}></Grid>
        <Grid item xs={4} sm={4}>
        <Card className={classes.card}>
        <CardHeader
                title={
                  `Please Provide Details`
                }
              />
        <CardContent > 
      <Grid container spacing={2} direction="row">
            <Grid item xs={6} sm={6}>
            <TextField id="outlined-basic" label="First Name" variant="outlined" value={firstName} onChange={onChangefirstName} required="true" fullWidth={true}/> 
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField id="outlined-basic" label="Last Name" variant="outlined" value={lastName} onChange={onChangelastName} required="true" fullWidth={true}/>
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={onChangeEmail} required="true" fullWidth={true}/>
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField id="outlined-basic" label="DOB" variant="outlined" value={Dob} onChange={onChangeDOB} required="true" fullWidth={true}/>
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField id="outlined-basic" label="Mobile Number" variant="outlined" value={mobile} onChange={onChangemobile} required="true" fullWidth={true}/>
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField id="outlined-basic" className={classes.TextField} label="Alternate mobile" variant="outlined" value={alternatemob} onChange={onChangeAlternate_Mob} required="true" fullWidth={true}/> 
            </Grid>
            <Grid item xs={6} sm={6}>
            <FormControl variant="outlined" className={classes.formControl} required="true"  autoWidth ="false">
            <InputLabel id="demo-simple-select-outlined-label">Experience</InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={experience}
                onChange={onChangeexperience}
                label="Experience"
                required="true"
                
                
                >
                <MenuItem value="">
                    <em>Select year experience</em>
                </MenuItem>
                    {
                        experience1.map((exp)=>{
                            return( <MenuItem value={exp.value}>{exp.name}</MenuItem>)
                        })
                    }
                </Select>
            </FormControl>
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField id="outlined-basic" label="Year of Graduation" variant="outlined" value={graduation} onChange={onChangegraduation} required="true" />
            </Grid>
            <Grid item xs={6} sm={6}>
            {/* <TextField id="outlined-basic" label="Backlogs" variant="outlined" value={backlogs} onChange={onChangebackloags} required="true" fullWidth/> */}
            <FormControl variant="outlined" className={classes.formControl} required="true"  autoWidth ="false">
            <InputLabel id="demo-simple-select-outlined-label">Backlog</InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={backlogs}
                onChange={onChangebackloags}
                label="Backlogs"
                required="true"
                autoWidth ="false"
                
                >
                <MenuItem value="">
                    <em>Select option</em>
                </MenuItem>
                    {
                        backlogs1.map((log)=>{
                            return( <MenuItem value={log.value}>{log.name}</MenuItem>)
                        })
                    }
                </Select>
            </FormControl>
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField id="outlined-basic" label="Current CTC" variant="outlined" value={ctc} onChange={onChangeCTC} required="true" />
            </Grid>
            <Grid item xs={6} sm={6}>
            {/* <TextField id="outlined-basic" label="Joining" variant="outlined" value={joining} onChange={onChangejoining} required="true" fullWidth/>  */}
            <FormControl variant="outlined" className={classes.formControl} required="true" autoWidth={false} >
            <InputLabel id="demo-simple-select-outlined-label">Immediate Joiner</InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={joining}
                onChange={onChangejoining}
                label="Immediate Joiner"
                required="true"
                >
                <MenuItem value="">
                    <em>Select option</em>
                </MenuItem>
                    {
                        joining1.map((log)=>{
                            return( <MenuItem value={log.value}>{log.name}</MenuItem>)
                        })
                    }
                </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
            <FileUpload/>
            </Grid>
            <Grid item xs={12} sm={12}>
            <Button variant="contained" color="primary" onClick={handleSubmit} >Submit</Button>
            </Grid>
            
    </Grid>
    </CardContent>
    </Card>
    </Grid>
    <Grid item xs={4} sm={4}></Grid>
    </Grid>
    <Box mt={5}>
              <Copyright />
    </Box>
        
    </div>)
}

export default JobForm
