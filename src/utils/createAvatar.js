function getFirstCharacter(name) {
  return name && name.charAt(0).toUpperCase();
}

export default function createAvatar(name) {
  return {
    name: getFirstCharacter(name),
  };
}
