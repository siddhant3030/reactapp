const initState = {
  projects: [
    { id: 1, title: "sdasdaddasdddsdsadsasdd", content: "dwwassads" },
    { id: 2, title: "sdasdaddasddddsadsd", content: "dwwassads" },
    { id: 3, title: "sdasdaddassdadsdddd", content: "dwwassads" },
    { id: 4, title: "sdasadsasdsdaddasdddd", content: "dwwassads" }
  ]
};
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
  }
  return state;
};

export default projectReducer;
