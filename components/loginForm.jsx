import { useState } from "react";
// @mui
import { Link,  Stack, IconButton, InputAdornment, TextField, Checkbox } from "@mui/material";
import Button from '@mui/material/Button';
// import { LoadingButton } from "@mui/lab";
// components
import Iconify from "../components/iconify";

export default function LoginForm() {

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    
  };

  return (
    <>
      <Stack spacing={3}>
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
        {/* <Checkbox name="remember" label="Remember me" /> */}
        <Link variant="subtitle2" underline="hover">Forgot password?</Link>
      </Stack>
      <Button variant="contained" sx={{backgroundColor:'#EA4D4F'}}>Sign in</Button>

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


