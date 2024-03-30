import DashboardIcon from '@mui/icons-material/Dashboard';
import { Grid } from '@mui/material';
import './index.css';

const Navbar = () => {

  return (
    <nav className="bg-white shadow fixed top-0 left-0 w-full z-10">
      <div className="mx-auto space-x-4">
        <Grid container spacing={6} className="text-center cursor-pointer font-normal text-xs bg-black p-1 pb-1  text-[#EB4C6B]">
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}><DashboardIcon /> <span>Lorem ipsum dolor</span>
          </Grid>
          <Grid item lg={4} xl={4} className="navbarHeaderDiv"><DashboardIcon /> <span>Lorem ipsum dolor</span>
          </Grid>
          <Grid item lg={4} xl={4} className="navbarHeaderDiv"><DashboardIcon /> <span>Lorem ipsum dolor</span>
          </Grid>
        </Grid>
      </div>
    </nav>
  );
}

export default Navbar;