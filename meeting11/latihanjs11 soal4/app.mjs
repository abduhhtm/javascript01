import getUser, { getUserRole, UserRole } from "../latihanjs11 soal3/userUtils.mjs";

console.log(getUser("abduh"));
console.log(getUser("udin"));

console.log(`User role: ${UserRole}`);
console.log(`User role from function: ${getUserRole()}`);
