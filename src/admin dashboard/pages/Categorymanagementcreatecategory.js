import React from 'react';
import Navmenu from "../components/Navmenu";
import Sidebar from "../components/Sidebar";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from '@mui/material/FormControl';


const Categorymanagementcreatecategory = () => {
    const [selectwork, setSelectwork] = React.useState("");

    const handleChange = (event) => {
        setSelectwork(event.target.value);
    };
  
    const boxShadow = {
        boxShadow: " 0px 4px 2px rgba(231, 232, 233, 0.25)",
      };
    return (
        <>
          <section className="dashboardSection">
        <div className="conatiner-fluid">
          <div className="row g-1">
            <div className="col-12 col-md-4 col-lg-3 border-end">
              <Sidebar />
            </div>

            <div className="col-12 col-md-8 col-lg-9 ">
              <Navmenu />

              <section className="userNameSection d-flex align-items-center">
                <p className="adminNavigation">
                  Home / Customer Management / Category List
                </p>
              </section>
              <section className="">
                <div className="container p-2 mt-3 d-flex align-items-center justify-content-between">
                  <div>
                    <p className="listofadmin">Create Category</p>
                  </div>

                 
                </div>

              <div className="container">
              <div className='categoryCreateform'>

              
              <TextField
                      fullWidth
                      label="Category Name"
                      id="fullWidth"
                      size="small"
                      className='mb-3'
                    />
                    <FormControl fullWidth >
                      <InputLabel id="demo-simple-select-label" >Select Working Status</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        size="small"
                        value={selectwork}
                        label="Select Working Status"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Designer</MenuItem>
                        <MenuItem value={20}>Web Developer</MenuItem>
                      </Select>
                    </FormControl>

                    <div className='mt-2 text-end'>
                        <button className='btn btn-primary px-5 py-2'>Create</button>
                    </div>
                    </div>
              </div>
             
              </section>
              
            </div>
          </div>
        </div>
      </section>   
        </>
    )
}

export default Categorymanagementcreatecategory
