export const selectApple = (apple) => {

  console.log(`You clicked on Apple ${apple.name}`);

  return{

    type: 'APPLE_SELECTED',
    payload: apple

  }
}
