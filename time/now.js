const f = () => (new Date()).getTime();
export default Date.now || f;
