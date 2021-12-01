import React from 'react';
import Navmenu from '../components/Navmenu';
import Sidebar from '../components/Sidebar';



const Dashboard = () => {
    return (
        <>
           <section className="dashboardSection">
        <div className="conatiner-fluid">
          <div className="row g-1">
            <div className="col-12 col-md-3 col-lg-3">
                <Sidebar/>
            </div>

            <div className="col-12 col-md-9 col-lg-9">
            <Navmenu/>
            </div>
          </div>
        </div>
      </section>
        
        </>
    )
}

export default Dashboard
