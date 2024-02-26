"use client";

export default function AdminView() {
  const menuItems = [
    {
      id: "home",
      label: "Home",
      //   component: (
      //     <AdminHomeView
      //       formData={homeViewFormData}
      //       setFormData={setHomeViewFormData}
      //       handleSaveData={handleSaveData}
      //     />
      //   ),
    },
    {
      id: "about",
      label: "About",
      //   component: (
      //     <AdminAboutView
      //       formData={aboutViewFormData}
      //       setFormData={setAboutViewFormData}
      //       handleSaveData={handleSaveData}
      //     />
      //   ),
    },
    {
      id: "experience",
      label: "Experience",
      //   component: (
      //     <AdminExperienceView
      //       formData={experienceViewFormData}
      //       handleSaveData={handleSaveData}
      //       setFormData={setExperienceViewFormData}
      //       data={allData?.experience}
      //     />
      //   ),
    },
    {
      id: "education",
      label: "Education",
      //   component: (
      //     <AdminEducationView
      //       formData={educationViewFormData}
      //       handleSaveData={handleSaveData}
      //       setFormData={setEducationViewFormData}
      //       data={allData?.education}
      //     />
      //   ),
    },
    {
      id: "project",
      label: "Project",
      //   component: (
      //     <AdminProjectView
      //       formData={projectViewFormData}
      //       handleSaveData={handleSaveData}
      //       setFormData={setProjectViewFormData}
      //       data={allData?.project}
      //     />
      //   ),
    },
    {
      id: "contact",
      label: "Contact",
      //   component: <AdminContactView data={allData && allData?.contact} />,
    },
  ];
  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-0.5 flex justify-center spcae-x-6" role="tablist">
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className="p-4 font-bold text-xl text-black"
            // onClick={() => {
            //   setCurrentSelectedTab(item.id);
            //   resetFormDatas();
            //   setUpdate(false);
            // }}
          >
            {item.label}
          </button>
        ))}
        <button
          //   onClick={() => {
          //     setAuthUser(false);
          //     sessionStorage.removeItem("authUser");
          //   }}
          className="p-4 font-bold text-xl text-black"
        >
          Logout
        </button>
      </nav>
      {/* <div className="mt-10 p-10">
        {menuItems.map(
          (item) => item.id === currentSelectedTab && item.component
        )}
      </div> */}
      <div>
        <h1>15:17</h1>
      </div>
    </div>
  );
}
