"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "name",
    placeholder: "Name",
    type: "text",
    label: "Name",
  },
  {
    name: "age",
    placeholder: "Age",
    type: "text",
    label: "Age",
  },
  {
    name: "nationality",
    placeholder: "Nationality",
    type: "text",
    label: "Enter Nationality",
  },
  {
    name: "work",
    placeholder: "Work",
    type: "text",
    label: "Work",
  },
  {
    name: "adress",
    placeholder: "adress",
    type: "text",
    label: "adress",
  },
  {
    name: "phone",
    placeholder: "Phone",
    type: "text",
    label: "Phone",
  },
  {
    name: "email",
    placeholder: "Email",
    type: "text",
    label: "Email",
  },
  {
    name: "github",
    placeholder: "Github Link",
    type: "text",
    label: "Github Link",
  },
  {
    name: "linkdn",
    placeholder: "Linkedin",
    type: "text",
    label: "Linkedin",
  },
  {
    name: "language",
    placeholder: "Language",
    type: "text",
    label: "Language",
  },
];

export default function AdminPersonal({
  formData,
  setFormData,
  handleSaveData,
}) {
  return (
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleSaveData("about")}
          className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]"
        >
          Add Info
        </button>
      </div>
    </div>
  );
}
