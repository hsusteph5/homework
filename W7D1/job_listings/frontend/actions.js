// Let's define and export a selectLocation function that takes as arguments a city string and a jobs array. It returns an action (i.e. a POJO, plain old javascript object) with the following keys and values:
//
// type: "SWITCH_LOCATION"
// city
// jobs
const setLocation = (city, string) =>({
  type: "SWITCH_LOCATION",
  city: city,
  jobs: string
});


export default setLocation;
window.setLocation = setLocation;
