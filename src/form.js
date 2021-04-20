import React,{useEffect, useState} from 'react'
import {
    TextField,Grid,MenuItem,InputLabel,Select,
    FormControl,makeStyles,Button,Card,CardContent,CardHeader,Typography,Link,Box} from '@material-ui/core'
import FileUpload from './FileUpload'
import { createMuiTheme } from '@material-ui/core/styles';
import Header from './Header'
import validator from 'validator'
import axios from 'axios'



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
    const [role,setRole] = useState("")
    const [sourceIp,setIp] = useState("")
    const [resume,setFileName] = useState("")
    const [formErrors, setFormErrors] = useState({})
    const errors = {}
   

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
    const onChangerole=(e)=> setRole(e.target.value)



    const experience1 = [{name : 'Fresher' , value:"Fresher"},{name : '1 Year' , value:"1 Year"},{name : '2 Year' , value:"2 Year"},{name : '3 Years' , value:"3 Years"},{name : '4 Years' , value:"4 Years"},{name : '5 Years' , value:"5 Years"},{name : '6 Years' , value:"6 Years"},{name : '7 Years' , value:"7 Years"},{name : '8 Years' , value:"8 Years"},{name : '9 Years' , value:"9 Years"},{name : '10 Years' , value:"10 Years"},{name : '11 Years' , value:"11 Years"},{name : '12 Years' , value:"12 Years"},{name : '13 Years' , value:"13 Years"},{name : '14 Years' , value:"14 Years"},{name : '15 Years' , value:"15 Years"},{name : '16 Years' , value:"16 Years"},{name : '17 Years' , value:"17 Years"},{name : '18 Years' , value:"18 Years"},{name : '19 Years' , value:"19 Years"},{name : '20 Years' , value:"20 Years"},{name : '20+ Years' , value:"20+ Years"}]
    const backlogs1 = [{name : 'Yes' , value:"Yes"},{name : 'No' , value:"No"}]
    const joining1 = [{name : 'Yes' , value:"Yes"},{name : 'No' , value:"No"}]
    const role1 = [{name : 'MERN Developer', value : 'MERN Developer'},{name : 'Manual Tester', value : 'Manual Tester'},{name : 'Automation Tester', value : 'Automation Tester'}]

    const runValidations=()=>{
      if(firstName.trim().length === 0){
        errors.firstName = '*first Name cannot be blank'
      }
      if(lastName.trim().length === 0){
        errors.lastName = '*last Name cannot be blank'
      }
      if(email.trim().length === 0){
        errors.email = '*email cannot be blank'
      }else if(!validator.isEmail(email)) {
        errors.email = 'invalid email format'
      }
      if(Dob.trim().length === 0){
        errors.Dob = '*DOB cannot be blank'
      }
      if(mobile.trim().length === 0){
        errors.mobile = '*mobile number cannot be blank'
      }else if (mobile.trim().length !== 10){
        errors.mobile = '*Invalid Mobile number'
      }
      if(alternatemob.trim().length === 0){
        errors.alternatemob = '*alternate Mobile Number cannot be blank'
      }else if (alternatemob.trim().length !== 10){
        errors.alternatemob = '*Invalid Alternate Mobile number'
      }else if(alternatemob === mobile){
        errors.alternatemob = '*Primary and secondary phone numbers cannot be same'
      }
      if(experience.trim().length === 0){
        errors.experience = '*experience cannot be blank'
      }
      if(graduation.trim().length === 0){
        errors.graduation = '*please select graduation year'
      }
      if(backlogs.trim().length === 0){
        errors.backlogs = '*please select backlog status'
      }
      if(ctc.trim().length === 0){
        errors.ctc = '*please current CTC'
      }
      if(joining.trim().length === 0){
        errors.joining = '*please select Joining status'
      }
      if(role.trim().length === 0){
        errors.role = '* please select role'
      }
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
        setRole("")
    }

    //getting possible ip
    const getIp =()=>{
      axios.get(`https://api.ipify.org`)
        .then((response)=>{
          setIp(response.data)
        })
        .catch((error)=>{
          console.log(error)
        })
    }

    //form submission to server
    const formSubmission =(data)=>{
        axios.post('http://192.168.3.45:3056/api/profiles',data)
        .then((response)=>{
          alert("profile uploaded succesfully")
        })
        .catch((error)=>{
          alert(error.message)
        })
    }


    const getfileName =(url,name)=>{
      // console.log(url)
      // console.log(name)
      // console.log(url+"/"+name[0].name)
      
      setFileName(name[0].name)
    }
    
    
    const handleSubmit = (e)=>{
      e.preventDefault()
        runValidations()
        if(Object.keys(errors).length === 0){
          setFormErrors({})
            const data ={
                firstName,
                lastName,
                email,
                Dob,
                mobile,
                alternatemob,
                role,
                experience,
                graduation,
                backlogs,
                ctc,
                joining,
                sourceIp,
                resume


            }
            console.log(data)
            formSubmission(data)
            handleReset()
          }else {
            console.log('form errors', errors)
            setFormErrors(errors)
            
          }
    }
    
    useEffect(()=>{
      getIp()

    },[])

const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    card :{
        maxWidth: 700,
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
            <TextField id="outlined-basic" label="First Name" variant="outlined" value={firstName} onChange={onChangefirstName} required="true" fullWidth={true} error={formErrors.firstName && <span>{formErrors.firstName}</span>}/>
            {formErrors.firstName && <span  style={{color:'blue'}}><i>{formErrors.firstName}</i></span>}
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField id="outlined-basic" label="Last Name" variant="outlined" value={lastName} onChange={onChangelastName} required="true" fullWidth={true} error={formErrors.lastName && <span>{formErrors.lastName}</span>}/>
            {formErrors.lastName && <span  style={{color:'blue'}}>{formErrors.lastName}</span>}
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={onChangeEmail} required="true" fullWidth={true} error={formErrors.email && <span>{formErrors.email}</span>}/><br/>
            {formErrors.email && <span style={{color:'blue'}}> { formErrors.email } </span>}<br />
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField id="outlined-basic" label="DOB" variant="outlined" value={Dob} onChange={onChangeDOB} required="true" fullWidth={true} error={formErrors.Dob && <span>{formErrors.Dob}</span>}/>
            {formErrors.Dob && <span  style={{color:'blue'}}>{formErrors.Dob}</span>}
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField id="outlined-basic" label="Mobile Number" variant="outlined" value={mobile} onChange={onChangemobile} required="true" fullWidth={true} error={formErrors.mobile && <span>{formErrors.mobile}</span>}/>
            {formErrors.mobile && <span  style={{color:'blue'}}>{formErrors.mobile}</span>}
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField id="outlined-basic" className={classes.TextField} label="Alternate mobile" variant="outlined" value={alternatemob} onChange={onChangeAlternate_Mob} required="true" fullWidth={true} error={formErrors.alternatemob && <span>{formErrors.alternatemob}</span>}/> 
            {formErrors.alternatemob && <span  style={{color:'blue'}}>{formErrors.alternatemob}</span>}
            </Grid>
            <Grid item xs={6} sm={6}>
            <FormControl variant="outlined" className={classes.formControl} required="true"  fullWidth={true} >
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
            {formErrors.experience && <span  style={{color:'blue'}}>{formErrors.experience}</span>}
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField id="outlined-basic" label="Year of Graduation" variant="outlined" value={graduation} onChange={onChangegraduation} required="true" fullWidth={true}  error={formErrors.graduation && <span>{formErrors.graduation}</span>}/><br/>
            {formErrors.graduation && <span  style={{color:'blue'}}>{formErrors.graduation}</span>}
            </Grid>
            <Grid item xs={6} sm={6}>
            {/* <TextField id="outlined-basic" label="Backlogs" variant="outlined" value={backlogs} onChange={onChangebackloags} required="true" fullWidth/> */}
            <FormControl variant="outlined" className={classes.formControl} required="true"  fullWidth={true}  >
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
            {formErrors.backlogs && <span  style={{color:'blue'}}>{formErrors.backlogs}</span>}
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField id="outlined-basic" label="Current CTC" variant="outlined" value={ctc} onChange={onChangeCTC} required="true" fullWidth={true}  error={formErrors.ctc && <span>{formErrors.ctc}</span>}/><br/>
            {formErrors.ctc && <span  style={{color:'blue'}}>{formErrors.ctc}</span>}
            </Grid>
            <Grid item xs={6} sm={6}>
            {/* <TextField id="outlined-basic" label="Backlogs" variant="outlined" value={backlogs} onChange={onChangebackloags} required="true" fullWidth/> */}
            <FormControl variant="outlined" className={classes.formControl} required="true"  fullWidth={true}  >
            <InputLabel id="demo-simple-select-outlined-label">Role</InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={role}
                onChange={onChangerole}
                label="Role"
                required="true"
                autoWidth ="false"
                
                >
                <MenuItem value="">
                    <em>Select option</em>
                </MenuItem>
                    {
                        role1.map((log)=>{
                            return( <MenuItem value={log.value}>{log.name}</MenuItem>)
                        })
                    }
                </Select>
            </FormControl>
            {formErrors.role && <span  style={{color:'blue'}}>{formErrors.role}</span>}
            </Grid>
            <Grid item xs={6} sm={6}>
            {/* <TextField id="outlined-basic" label="Joining" variant="outlined" value={joining} onChange={onChangejoining} required="true" fullWidth/>  */}
            <FormControl variant="outlined" className={classes.formControl} required="true" fullWidth={true}  >
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
            {formErrors.joining && <span  style={{color:'blue'}}>{formErrors.joining}</span>}
            </Grid>
            <Grid item xs={12} sm={12}>
            <FileUpload getfileName={getfileName}/>
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
