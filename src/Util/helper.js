// Generate UID
export const generateUID = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

// Object of Objects to Array of Objects
export const objectsToArray = (objects) => {
  return Object.keys(objects).reduce((obj, deck) => {
    return [...obj, objects[deck]];
  }, []);
}

// Todo : Clear Notification Method

// Todo : Set Notification Method