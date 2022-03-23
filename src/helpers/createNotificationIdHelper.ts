export const createNotificationIdHelper = () => {
  const id = Date.now().toString().slice(-9);
  console.log(id);
  return id;
};
