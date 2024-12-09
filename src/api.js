// app.get("/api/country-info/:countryCode", async (req, res) => {
//   const { countryCode } = req.params;

//   try {
//     const [countryInfo, populationData, flagData] = await Promise.all([
//       axios.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`),
//       axios.post("https://countriesnow.space/api/v0.1/countries/population", {
//         country: countryCode,
//       }),
//       axios.post("https://countriesnow.space/api/v0.1/countries/flag/images", {
//         country: countryCode,
//       }),
//     ]);

//     res.json({
//       borders: countryInfo.data.borders || [],
//       population: populationData.data.data || [],
//       flagUrl: flagData.data.data.flag || "",
//     });
//   } catch (error) {
//     res.status(500).send("Error fetching country info");
//   }
// });
