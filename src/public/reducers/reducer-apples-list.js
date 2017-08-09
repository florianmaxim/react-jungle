Array.prototype.remove = Array.prototype.remove || function(x) {
  return this.splice(this.indexOf(x), 1); //num.remove(5) === [1, 2, 3];
}
/*

This is the list of the selected apples

*/

//It's an empty list first.
const init = [];

export default function (state = init, action) {

  switch(action.type){

    case "APPLE_ADDED":

      console.log('Apple was added to List.')

      return [...state, action.payload];
      //Same as:
      //state.push(action.payload);

    break;

    case "APPLE_DELETED":

      console.log('Apple was deleted from List.')
      console.log('New list:');
      console.log(state);

      return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)]

    break;

  }

  return state;

}
