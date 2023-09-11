export function getToken() {
  const token = JSON.parse(localStorage.getItem('token'));
  return token;
}

export function setToken(tokenValue) {
  const currentTime = Math.floor(Date.now() / 1000); // 当前时间戳（以秒为单位）
  const expirationTime = currentTime + 24 * 60 * 60;
  const token = { value: tokenValue, expirationTime };
  localStorage.setItem('token', JSON.stringify(token));
}

export function removeToken() {
  localStorage.removeItem('token');
}

export function isTokenExpired() {
  const token = getToken();

  if (!token) return true;
  const expirationTime = token.expirationTime;

  const date = Math.floor(Date.now() / 1000);
  if (date >= expirationTime) {
    return true;
  } else {
    return false;
  }
}
