const service = new Promise(() => {
  setTimeout(() => {
    return 'resolve';
  }, 1000);
});

const showAddons = service => {
  setTimeout(() => {
    return `${service} first then`;
  }, 1000);
};
const showRecommended = service => {
  setTimeout(() => {
    return `${service} second then`;
  }, 1000);
};
const showRequired = service => {
  setTimeout(() => {
    return `${service} third then`;
  }, 1000);
};

const service = new Promise(() => {
  setTimeout(() => {
    return 'resolve';
  }, 1000);
})
  .then(res => {
    const a = showRecommended(res);
  })
  .then(res => {
    const b = showAddons(res);
  })
  .then(res => {
    const c = showRequired(res);
  });
