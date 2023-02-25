import { useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Stack, Typography, Box, Button, TextField,  FormControlLabel, Checkbox, FormControl, InputLabel, Select, MenuItem, Link   } from "@mui/material";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


// import { LoadingButton } from "@mui/lab";
// components
import Iconify from "../components/iconify";
import HorizontalLinearStepper from "./stepper";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function SignupForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [lang, setLang] = useState('');
  const [empl, setEmpl] = useState('');
  const [industry, setIndustry] = useState('');
  const [job, setJob] = useState('');
  const selectCountry = (val) => {
    setCountry(val);
  };


  const handleChangeLang = (event) => {
    setLang(event.target.value);
  };
  
    const handleChangeGender = (event) => {
      setGender(event.target.value);
    };
    const handleChangeEmpl = (event) => {
      setEmpl(event.target.value);
    };
    const handleChangeIndus = (event) => {
      setIndustry(event.target.value);
    };
    const handleChangeJob = (event) => {
      setJob(event.target.value);
    };
    const handleClick = () => {
      
    };
    const [find, setFind] = useState('');
    const [value, setValue] = useState(0);

    const handleChangeFind = (event) => {
    setFind(event.target.value);
    };

    const handleChange = (event, newValue) => {
       setValue(newValue);
    };

  return (
    <>
      <Box sx={{ width: "65%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width:'455px' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Step One" {...a11yProps(0)} />
            <Tab label="Step Two" {...a11yProps(1)} />
            <Tab label="Step Three" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} >
        <Stack spacing={3} sx={{ minWidth: '455px', ml:'-20px' }}>
        <Box>
        <TextField id="outlined-basic" label="Email" variant="outlined" sx={{width:'460px', mb:'30px'}}/>
      </Box>
      <Box>
        <TextField id="outlined-basic" label="Password" variant="outlined" sx={{width:'460px', mb:'30px'}}/>
      </Box>
      <Box sx={{display:'flex'}}>
        <Box>
          <TextField id="outlined-basic" label="First Name" variant="outlined" sx={{width:'215px',mr:'30px', mb:'30px'}}/>
        </Box>
        <Box>
          <TextField id="outlined-basic" label="Last Name" variant="outlined" sx={{width:'215px',mr:'180px', mb:'30px'}}/>
        </Box>     
        </Box>
      <Box>
        <TextField id="outlined-basic" label="Date of birth" variant="outlined" sx={{width:'460px', mb:'30px'}}/>
      </Box>
        </Stack>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Stack spacing={3} sx={{ minWidth: '455px', ml:'-20px' }}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          label="Gender"
          onChange={handleChangeGender}
        >
          <MenuItem value={10}>Man</MenuItem>
          <MenuItem value={20}>Woman</MenuItem>
          <MenuItem value={30}>Other</MenuItem>
          </Select>
          </FormControl>
      <Box>
        <TextField id="outlined-basic" label="Zip/Postal Code" variant="outlined" sx={{width:'460px', mb:'30px'}}/>
      </Box>
      <Box sx={{}}>
        <Box>
      
      <TextField
        id="country-input"
        label="Country"
        variant="outlined"
        sx={{ width: '460px', mb: '30px' }}
        InputProps={{
          inputComponent: CountryDropdown,
          value: country,
          onChange: (val) => selectCountry(val),
        }}
      />

        </Box>
       
        </Box>
      <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Primary Communication Language Preference</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lang}
          label="Primary Communication Language Preference"
          onChange={handleChangeLang}
        >
          <MenuItem value={10}>English</MenuItem>
          <MenuItem value={20}>French</MenuItem>
          <MenuItem value={30}>Spanish</MenuItem>
          <MenuItem value={40}>Portuguese</MenuItem>
          </Select>
          </FormControl>
      </Box>
        </Stack>
        
        </TabPanel>
        <TabPanel value={value} index={2} >
        <Stack spacing={3} sx={{ minWidth: '455px', ml:'-20px' }}>
        <Box>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Employees</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={empl}
          label="Gender"
          onChange={handleChangeEmpl}
        >
          <MenuItem value={10}>1 employee</MenuItem>
          <MenuItem value={20}>2 -5 employee</MenuItem>
          <MenuItem value={30}>6 - 9 employee</MenuItem>
          <MenuItem value={40}>10 - 19 employee</MenuItem>
          <MenuItem value={50}>50 - 99 employee</MenuItem>
          <MenuItem value={60}>20 - 49 employee</MenuItem>
          <MenuItem value={70}>100 - 249 employee</MenuItem>
          <MenuItem value={80}>250 - 499 employee</MenuItem>
          <MenuItem value={90}>500 - 999 employee</MenuItem>
          <MenuItem value={11}>1000 - 2499 employee</MenuItem>
          <MenuItem value={22}>2500 - 4999 employee</MenuItem>
          <MenuItem value={33}>5000 - 9999 employee</MenuItem>
          <MenuItem value={44}>+ 10000 employee</MenuItem>
          <MenuItem value={55}>Unknown - Unemployed</MenuItem>
          </Select>
          </FormControl>
      </Box>
      <Box>
      <FormControl fullWidth>
        <InputLabel id="industry-select-label">Primary Industry</InputLabel>
        <Select
          labelId="industry-select-label"
          id="industry-select"
          value={industry}
          label="Primary Industry"
          onChange={handleChangeIndus}
        >
          <MenuItem value="">--Please select an option--</MenuItem>
          <MenuItem value="Agriculture">Agriculture</MenuItem>
          <MenuItem value="Arts, Entertainment, and Recreation">Arts, Entertainment, and Recreation</MenuItem>
          <MenuItem value="Construction">Construction</MenuItem>
          <MenuItem value="Education">Education</MenuItem>
          <MenuItem value="Finance and Insurance">Finance and Insurance</MenuItem>
          <MenuItem value="Healthcare and Social Assistance">Healthcare and Social Assistance</MenuItem>
          <MenuItem value="Information and Communication">Information and Communication</MenuItem>
          <MenuItem value="Manufacturing">Manufacturing</MenuItem>
          <MenuItem value="Mining, Quarrying, and Oil and Gas Extraction">Mining, Quarrying, and Oil and Gas Extraction</MenuItem>
          <MenuItem value="Professional, Scientific, and Technical Services">Professional, Scientific, and Technical Services</MenuItem>
          <MenuItem value="Public Administration">Public Administration</MenuItem>
          <MenuItem value="Real Estate and Rental and Leasing">Real Estate and Rental and Leasing</MenuItem>
          <MenuItem value="Retail Trade">Retail Trade</MenuItem>
          <MenuItem value="Transportation and Warehousing">Transportation and Warehousing</MenuItem>
          <MenuItem value="Utilities">Utilities</MenuItem>
          <MenuItem value="Wholesale Trade">Wholesale Trade</MenuItem>
        </Select>
      </FormControl>
      </Box>
      <Box >
        <Box>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Employees</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={empl}
          label="Gender"
          onChange={handleChangeEmpl}
        >
          <MenuItem value={10}>Healthcare Professional</MenuItem>
          <MenuItem value={20}>Business Owner</MenuItem>
          <MenuItem value={30}>Partner / Principal</MenuItem>
          <MenuItem value={40}>President</MenuItem>
          <MenuItem value={50}>C-Level Executive (CEO, CIO, etc.)</MenuItem>
          <MenuItem value={60}>Senior Vice President</MenuItem>
          <MenuItem value={70}>Vice President</MenuItem>
          <MenuItem value={80}>Controller / Comptroller</MenuItem>
          <MenuItem value={90}>Director</MenuItem>
          <MenuItem value={11}>Senior Manager</MenuItem>
          <MenuItem value={22}>Manager</MenuItem>
          <MenuItem value={33}>Supervisor</MenuItem>
          <MenuItem value={44}>Technical Staff - IT Administrator</MenuItem>
          <MenuItem value={55}>Technical Staff - IT Developer</MenuItem>
          <MenuItem value={56}>Technical Staff - IT Manager / Director</MenuItem>
          <MenuItem value={57}>Technical Staff - Help Desk / Other IT Support</MenuItem>
          <MenuItem value={59}>Craftsman / Foreman</MenuItem>
          <MenuItem value={65}>Faculty Staff</MenuItem>
          <MenuItem value={75}>Sales</MenuItem>
          <MenuItem value={85}>Administrative / Clerical</MenuItem>
          <MenuItem value={95}>Non-Management Staff</MenuItem>
          <MenuItem value={45}>Unemployed</MenuItem>
          <MenuItem value={35}>Other</MenuItem>
          </Select>
          </FormControl>
        </Box>
        </Box>
        </Stack>
        </TabPanel>
      </Box>
      {/* <Stack spacing={3}>
        <TextField name="email" label="Company email" />
        <TextField name="password" label="Password" type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end" >
                  <Iconify icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Link variant="subtitle2" underline="hover">Forgot password?</Link>
      </Stack> */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb:'20px' }}>
      <FormControlLabel
        control={<Checkbox name="termsConditions" />}
        label={
          <Typography variant="body2">
            I agree to the <Link href="https://bizpinion.com/info.php?page=3&TB_iframe=true&height=600&width=800">Terms &amp; Conditions</Link> and <Link href="https://bizpinion.com/info.php?page=2&TB_iframe=true&height=600&width=800">Privacy Policy</Link>
          </Typography>
        }
      />
    </Box>
      <Button variant="contained" sx={{ backgroundColor: "#EA4D4F" }}>
        Sign up
      </Button>

      {/* <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={handleClick}
      >
        Login
      </LoadingButton> */}
    </>
  );
}
