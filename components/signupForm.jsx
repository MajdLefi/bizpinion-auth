import { useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Stack, Typography, Box, Button, TextField, IconButton, InputAdornment, FormControl, InputLabel, Select, MenuItem  } from "@mui/material";
// import { LoadingButton } from "@mui/lab";
// components
import Iconify from "../components/iconify";

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
            <Tab label="I'm a researcher" {...a11yProps(0)} />
            <Tab label="I'm a publisher" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} >
        <Stack spacing={3} sx={{ minWidth: '455px', ml:'-20px' }}>
            <TextField name="email" label="Company email" /> 
        </Stack>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Stack spacing={3} sx={{ minWidth: '455px', ml:'-20px' }}>
            <TextField name="email" label="Full name" required/>
            <TextField name="email" label="Company Email" required/>  
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
        <Box sx={{ minWidth: '455px', ml:'-20px' }}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">How did you find us ?</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={find} label="Age" onChange={handleChangeFind}>
            <MenuItem value={10}>Conference</MenuItem>
            <MenuItem value={20}>Other</MenuItem>
            <MenuItem value={30}>MediaPost</MenuItem>
            <MenuItem value={40}>Video</MenuItem>
            <MenuItem value={50}>Google</MenuItem>
            <MenuItem value={60}>Advertisement</MenuItem>
            <MenuItem value={70}>Friend / Colleague</MenuItem>
            <MenuItem value={80}>Email / Inmail</MenuItem>
            <MenuItem value={90}>Podcast</MenuItem>
        </Select>
      </FormControl>
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
