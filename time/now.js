// eslint-disable-next-line unicorn/prefer-date-now
const f = () => (new Date()).getTime();
export default Date.now || f;
