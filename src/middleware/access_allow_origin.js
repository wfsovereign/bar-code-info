module.exports = function () {
  return function *(next) {
    this.set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'access,content-type,x-auth-token',
      'Access-Control-Allow-Methods': 'POST,GET,OPTIONS'
    });
    yield next;
  }
};
