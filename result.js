function result(code, msg = '', data) {
  return {
    code,
    msg,
    data,
  }
}

function success(data, msg) {
  return result(0, msg, data)
}

function failed(code, msg, data) {
  return result(code, msg, data)
}

module.exports = {
  success,
  failed
};