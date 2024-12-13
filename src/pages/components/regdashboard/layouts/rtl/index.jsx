import React from "react";
import Navbar from "../../../../components/navbar/index";
import MainDashboard from "../../../../views/admin/default/index";
import Sidebar from "../../sidebar/RTL";
import routes from "@/pages/routes";
import Footer from "@/pages/components/footer/FooterAuthDefault";
import HospitalityForm from "@/pages/components/forms/HospitalityForm";

export default function RTL(props) {
  const { ...rest } = props;
  const [open, setOpen] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");

  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);

  return (
    <div className="flex h-full md:w-full">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      {/* Navbar & Main Content */}
      <div className="flex h-full md:w-full bg-lightPrimary dark:!bg-navy-900">
        {/* Main Content */}
        <main
          className={`mx-[12px] md:w-full h-full flex-none transition-all md:pe-2 xl:mr-[313px]`}
        >
          {/* Routes */}
          <div className="h-full md:w-full">
          
            <Navbar
              onOpenSidenav={() => setOpen(true)}
              logoText={"Adnet"}
              brandText={currentRoute}
              
              {...rest}
            />
            <div className=" pt-5s md:w-full mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">

              <div className="flex md:w-full justify-center items-center mt-10 p-4">
              {/* <MainDashboard/> */}
              <HospitalityForm/>
              </div>
           
              {/* <Routes>
                {getRoutes(routes)}

                <Route
                  path="/"
                  element={<Navigate to="/admin/default" replace />}
                />
              </Routes> */}
            </div>
            <div className="flex justify-center items-center p-3">
              <Footer/>
              {/* <Footer /> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
