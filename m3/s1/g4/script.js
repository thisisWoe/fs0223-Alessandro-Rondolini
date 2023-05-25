/* import {myModule} from '../../../myModules/myModules'; */
/* class CapoAbbigliamento  */
fetch('./Abbigliamento.json')
    .then(function (response) {
    if (response.ok) {
        return response.json();
    }
    else {
        throw new Error("Request Error");
    }
})
    .catch(function (error) {
    console.error(error);
})
    .then(function (data) {
    console.log("🚀 ~ file: script.ts:15 ~ data:", data);
});
