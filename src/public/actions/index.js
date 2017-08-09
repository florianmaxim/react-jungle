export const selectApple = (apple) => {

  console.log(`You clicked on Apple ${apple.name}`);

  return{

    type: 'APPLE_SELECTED',
    payload: apple

  }
}

export const addApple = (apple) => {

  console.log(`You clicked on Apple ${apple.name}`);

  return{

    type: 'APPLE_ADDED',
    payload: apple

  }
}

export const deleteApple = (index) => {

  console.log(`You deleted the apple with the index: ${index}`);

  return{

    type: 'APPLE_DELETED',
    payload: index

  }
}
