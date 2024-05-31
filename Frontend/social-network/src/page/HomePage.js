import { Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import NewFeeds from "../components/NewFeeds";
import RightPart from "../components/RightPart";
import { Route, Routes } from "react-router-dom";
import Profile from "../components/Profile";

function HomePage() {
  return (
    <>
      <div className="flex-col p-5 bg-[#f3f6f8] relative">
        <Navbar />
        <Grid container className="mt-6">
          <Grid item xs={0} lg={3} className="hidden lg:block w-full relative">
            <Navigation />
          </Grid>
          <Grid
            item
            xs={12}
            lg={5.5}
            className="hidden lg:block w-full relative"
          >
            <Routes>
              <Route path="/" element={<NewFeeds />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Grid>
          <Grid
            item
            xs={0}
            lg={3.5}
            className="hidden lg:block w-full relative"
          >
            <RightPart />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default HomePage;
