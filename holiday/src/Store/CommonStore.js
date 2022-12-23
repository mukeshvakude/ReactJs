import { Store } from "pullstate";

const CommonStore = new Store({
  isDarkMode: true,
});


// const isDarkMode = commonStore.useState(s => s.isDarkMode);
    
    
// commonStore.update(s => {
//         s.isDarkMode = !isDarkMode;
// })

export default CommonStore;