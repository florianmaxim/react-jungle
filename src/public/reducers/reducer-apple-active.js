/*

This is a list with the selected apples only.

*/

const init = null;

export default function (state = init, action) {

  switch(action.type){
    case "APPLE_SELECTED":
      return action.payload
    break;

  }
  return state;
}
