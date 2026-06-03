import axios from "axios";

const BASE_URL = "https://t4e-testserver.onrender.com/api";

export const fetchDataset = async () => {
  try {
    const tokenResponse = await axios.post(
      `${BASE_URL}/public/token`,
      {
        studentId: "E0223022",
        set: "setA",
        password: "327759"
      }
    );

    const token = tokenResponse.data.token;
    const dataUrl = tokenResponse.data.dataUrl;

    console.log("DATA URL:", dataUrl);

    const datasetResponse = await axios.get(
      `${BASE_URL}${dataUrl}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    console.log(
  JSON.stringify(
    datasetResponse.data.data.students[0],
    null,
    2
  )
);

console.log(
  JSON.stringify(
    datasetResponse.data.data.companies[0],
    null,
    2
  )
);

console.log(
  JSON.stringify(
    datasetResponse.data.data.drives[0],
    null,
    2
  )
);

console.log(
  JSON.stringify(
    datasetResponse.data.data.applications[0],
    null,
    2
  )
);

console.log(
  JSON.stringify(
    datasetResponse.data.data.interviews[0],
    null,
    2
  )
);

    return datasetResponse.data;

  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};