import { Store } from "pullstate";

const CommonStore = new Store({
  isDarkMode: true,
  URL : ""
});


// const updatedURL = CommonStore.useState(s => s.URL);
    
    
// CommonStore.update(s => {
//         s.URL = !updatedURL;
// })

export default CommonStore;