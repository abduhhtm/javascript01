export const UserRole = "admin";

export default function getUser(name) {
    return `User: ${name}`;
}

export function getUserRole() {
    return UserRole;
}