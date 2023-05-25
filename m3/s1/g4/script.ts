/* import {myModule} from '../../../myModules/myModules'; */


/* class CapoAbbigliamento  */




fetch('./Abbigliamento.json')
.then((response: Response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Request Error");
  }
})
.catch((error: Error) => {
  console.error(error);
})
.then(data => {
  console.log("🚀 ~ file: script.ts:15 ~ data:", data)
  
})
