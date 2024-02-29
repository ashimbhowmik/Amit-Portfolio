export async function addData(currentTab, formData) {
  try {
    const response = await fetch(`/api/${currentTab}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function getData(currentTab) {
  try {
    const response = await fetch(`/api/${currentTab}/get`, {
      method: "GET",
    });

    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function updateData(currentTab, formData) {
  try {
    const response = await fetch(`/api/${currentTab}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function login(formData) {
  try {
    const response = await fetch(`/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function extractAllDatas(currentSection) {
  const res = await fetch(
    `https://amit-portfolio-iota.vercel.app/api/${currentSection}/get`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  const data = await res.json();

  return data && data.data;
}
// export async function projectData() {
//   const res = await fetch(
//     `https://amit-portfolio-iota.vercel.app/api/project/get`,
//     {
//       method: "GET",
//       cache: "no-store",
//     }
//   );

//   const data = await res.json();

//   return data && data.data;
// }

// export async function homePartData() {
//   const res = await fetch("/api/home/get", {
//     method: "GET",
//     cache: "no-store",
//   });

//   const data = await res.json();

//   return data && data.data;
// }
