/**
 * Do not log in prod, or use a specific api to log
 * @param message
 */
export const log = (message: any) => {
  fetch('url de prod dapi?message=' + message);
}
