export const createNotificationIdHelper = () => {
  const id = Date.now().toString().slice(-9);
  return id;
};
