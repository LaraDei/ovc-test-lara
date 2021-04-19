
export const findUser = (users=[], userId) =>
// eslint-disable-next-line
users.find(user => user.id == userId)