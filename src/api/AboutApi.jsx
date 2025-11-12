// https://api.github.com/users/Satish-Raut



export const fetchData = async () => {
  try {
    const res = await fetch("https://api.github.com/users/Satish-Raut", {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
