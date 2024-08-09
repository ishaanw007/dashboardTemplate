import { Bell, Building2, CalendarClock, CircleDashed, CircleUser, Home, LineChart, LucideFolderSearch2, MapPin, Megaphone, PlaneTakeoff, Search, Settings, TentTree, Users2 } from "lucide-react";
import { Card, CardDescription, CardTitle } from "../ui/card";

export const Steps = [
  {
    selector: "[data-tour='dashboard']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <Home className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="flex items-center gap-2 text-xl font-bold">Dashboard</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Access a comprehensive overview of essential HR metrics, including employee birthdays, new hires, daily attendance, and pending requests. The dashboard serves as your central hub for quick insights and updates.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='structure']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <Building2 className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">Organization Structure</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Manage and create entities such as Companies, Segments, Regions, Locations, Work Locations, and Departments. Additionally, manage Employee Structure including Bands, Grades, and Designations for comprehensive organizational management.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='company']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <Building2 className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">Company</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          View, add, edit, and filter company details with ease. This section allows for efficient management of company-related information.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='create-company']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <Building2 className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">Create Company</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Register a new company by clicking this button. Streamline the process of adding company information into the system.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='edit-company']",
    content: (
      <div className="rounded-lg ml-4 mr-20 flex flex-col gap-2">
        <Building2 className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">Edit Company Details</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Edit existing company details by clicking this button. Ensure company information is always up-to-date and accurate.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='segment']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <Building2 className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">Segment</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Create and manage Segments, Regions, Locations, and other fields efficiently. This section allows for detailed segmentation and organization of entities.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='emp']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <Users2 className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">Employee</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Create, view, edit, and delete detailed employee information. Import employee data from external files and manage it comprehensively within the system.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='import-emp']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <Users2 className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">Import Employee Data</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Easily import employee data by uploading an Excel file. Simplify the process of adding multiple employees into the system.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='view-emp']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <Users2 className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">View Employee Detail</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          View detailed employee information, and perform actions like editing or deleting data. Ensure employee records are accurate and up-to-date.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='attendence']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <LineChart className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">Attendance</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Monitor employee attendance, analyze attendance logs, and view daily statistics. Get insights into employee presence and absenteeism.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='attendence-analytic']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <LineChart className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">Attendance Analytics</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Analyze attendance data with detailed graphs and charts. Gain insights into overall attendance trends and patterns.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='attendence-setting']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <Settings className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">Attendance Settings</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Customize attendance settings to fit your organizational needs. Adjust parameters and policies for accurate attendance tracking.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='geofence']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <MapPin className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">Geofence</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Create, edit, and manage geofences to monitor employee locations. Enhance security and compliance with location-based tracking.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='shifts']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <CalendarClock className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">Shifts</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Create, edit, delete, and manage employee shifts. Rotate and view shifts to ensure optimal scheduling and workforce management.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='add-shift']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <CalendarClock className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">Add Shifts</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Initiate shift creation for employees by utilizing the Add Shift button.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='edit-shift']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <CalendarClock className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">Update Shifts</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Modify or remove existing shifts by interacting with the Edit Shift option.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='leaves']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <TentTree className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">Leaves Management</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Manage leave requests of employees, including approval or denial.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='travel']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <PlaneTakeoff className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">Travel Requests</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Handle travel requests from employees, such as approving or rejecting.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='regularization']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <CircleDashed className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">Regularization Requests</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Process regularization requests from employees, including approval or denial.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='announcements']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <Megaphone className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">Announcements Management</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Manage announcements, including creation, editing, and deletion.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='view-announcements']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <Megaphone className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">View Announcements</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Access detailed views of announcements, along with options to edit or delete.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='create-announcements']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <Megaphone className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">Create Announcements</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Initiate the creation of new announcements by clicking the Add Announcement button.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='recruiterx']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <LucideFolderSearch2 className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">RecruiterX</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          RecruiterX is an AI-based software that delivers optimal results for your queries.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='recruiterx-file']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <LucideFolderSearch2 className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">Upload File</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Upload files from your system by clicking here.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='recruiterx-prompt']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <LucideFolderSearch2 className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">Provide Prompt</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Input prompts to generate results tailored to your query.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='settings']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <Settings className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">Settings</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Navigate to the settings page to modify system defaults by clicking here.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='settings-general']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <Settings className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">General Settings</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Customize general settings such as company name and establishment date.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='settings-holidays']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <Settings className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">Holiday Settings</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Upload announcements for upcoming holidays from this section.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='settings-payment']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <Settings className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">Payment Settings</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Manage payroll or payment settings from this section.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='settings-org']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <Settings className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">Organization Settings</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Manage basic organization settings from this section.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='settings-attendence']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <Settings className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">Attendance Settings</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Manage employee attendance settings from this section.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='settings-leaves']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <Settings className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">Leaves Settings</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Manage employee leaves from this section.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='settings-off']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <Settings className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">Company Off Settings</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Manage company-provided employee off days from this section.
        </CardDescription>
      </div>
    )
  },
  {
    selector: "[data-tour='settings-biometric']",
    content: (
      <div className="rounded-lg ml-4 flex flex-col gap-2">
        <Settings className="h-[25px] w-[25px] text-black font-extrabold" />
        <CardTitle className="text-xl font-bold">Biometrics Settings</CardTitle>
        <CardDescription className="text-gray-500 font-normal">
          Manage biometric settings from this section.
        </CardDescription>
      </div>
    )
  }


];