export function getInitials(name: string) {
  const nameArray = name.split(" ");
  const firstNameIn = nameArray[0].charAt(0).toUpperCase();
  const lastNameIn = nameArray[nameArray.length - 1].charAt(0).toUpperCase();
  return firstNameIn + lastNameIn;
}
