export function getFullName<T extends { firstName: string; lastName: string }>(data: T) {
  return `${data.firstName} ${data.lastName}`;
}
