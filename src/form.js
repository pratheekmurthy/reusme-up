import React,{useState} from 'react'
import {
    TextField,Grid,MenuItem,InputLabel,Select,
    FormControl,makeStyles,Radio,withStyles,Button,Card,CardContent,CardHeader} from '@material-ui/core'
import { green } from '@material-ui/core/colors';
import validator from 'validator';
import FileUpload from './FileUpload'
// import { makeStyles } from '@material-ui/core/styles';



const JobForm =(props)=>{
    //declaring state variables for all the inputs
    const [firstName,setfirstName] = useState("")
    const [lastName,setlastName] = useState("")
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



    const experience1 = [{name : 'Fresher' , value:"Fresher"},{name : '1 year' , value:"1 year"},{name : '2 year' , value:"2 year"},{name : '2+ years' , value:"2+ years"}]
    const backlogs1 = [{name : 'yes' , value:"yes"},{name : 'No' , value:"No"}]
    const joining1 = [{name : 'yes' , value:"yes"},{name : 'No' , value:"No"}]

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
        setErrors(false)
    }
    
    
    const handleSubmit = (e)=>{
        runValidations()
        console.log(error)
        
            const data ={
                firstName,
                lastName,
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
      minWidth: 280,
    //   padding : '10px 10px 10px 10px'
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    card :{
        maxWidth: 445,
        //display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    root1:{
        display : 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
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
        <Card className={classes.card}>
        <CardHeader
                title={
                  `Please fill the Details ::  `
                }
              />
        <CardContent > 
      <Grid container spacing={2} direction="row">
            <Grid item xs={12} sm={12}>
            <TextField id="outlined-basic" label="First Name" variant="outlined" value={firstName} onChange={onChangefirstName} required="true" /> 
            </Grid>
            <Grid item xs={12} sm={12}>
            <TextField id="outlined-basic" label="Last Name" variant="outlined" value={lastName} onChange={onChangelastName} required="true" />
            </Grid>
            <Grid item xs={12} sm={12}>
            <TextField id="outlined-basic" label="DOB" variant="outlined" value={Dob} onChange={onChangeDOB} required="true" />
            </Grid>
            <Grid item xs={12} sm={12}>
            <TextField id="outlined-basic" label="Mobile Number" variant="outlined" value={mobile} onChange={onChangemobile} required="true" />
            </Grid>
            <Grid item xs={12} sm={12}>
            <TextField id="outlined-basic" className={classes.TextField} label="Alternate mobile" variant="outlined" value={alternatemob} onChange={onChangeAlternate_Mob} required="true" /> 
            </Grid>
            <Grid item xs={12} sm={12}>
            <FormControl variant="outlined" className={classes.formControl} required="true"  autoWidth ="true">
            <InputLabel id="demo-simple-select-outlined-label">Experience</InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={experience}
                onChange={onChangeexperience}
                label="Year of Experience"
                required="true"
                // autoWidth ={false}
                
                >
                <MenuItem value="">
                    <em>Select experience</em>
                </MenuItem>
                    {
                        experience1.map((exp)=>{
                            return( <MenuItem value={exp.value}>{exp.name}</MenuItem>)
                        })
                    }
                </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
            <TextField id="outlined-basic" label="Year of Graduation" variant="outlined" value={graduation} onChange={onChangegraduation} required="true" />
            </Grid>
            <Grid item xs={12} sm={12}>
            {/* <TextField id="outlined-basic" label="Backlogs" variant="outlined" value={backlogs} onChange={onChangebackloags} required="true" fullWidth/> */}
            <FormControl variant="outlined" className={classes.formControl} required="true"  autoWidth ={false}>
            <InputLabel id="demo-simple-select-outlined-label">Backlog</InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={backlogs}
                onChange={onChangebackloags}
                label="Backlogs"
                required="true"
                // autoWidth ={false}
                
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
            <Grid item xs={12} sm={12}>
            <TextField id="outlined-basic" label="Current CTC" variant="outlined" value={ctc} onChange={onChangeCTC} required="true" />
            </Grid>
            <Grid item xs={4} sm={12}>
            {/* <TextField id="outlined-basic" label="Joining" variant="outlined" value={joining} onChange={onChangejoining} required="true" fullWidth/>  */}
            <FormControl variant="outlined" className={classes.formControl} required="true"  >
            <InputLabel id="demo-simple-select-outlined-label">Immediate Joiner</InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={joining}
                onChange={onChangejoining}
                label="Immediate Joiner"
                // required="true"
               
                
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
        
    </div>)
}

export default JobForm
