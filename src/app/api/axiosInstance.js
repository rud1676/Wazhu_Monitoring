import axios from "axios";
import https from "https";

const axiosInstance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
  baseURL: `https://inchangjoohome.store:55000`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache", // 서버에서 설정했었도 클라이언트에서 이 설정을 안하니깐 디스크 캐시가 발생함
    Pragma: "no-cache",
  },
  validateStatus: (status) => status === 200, // status 가 200 이 아니면 에러처리
});

export const globalApi = {
  login: (info) => {
    return axiosInstance.post(
      "/security/user/authenticate",
      {},
      {
        auth: {
          username: info.user,
          password: info.password,
        },
      }
    );
  },
};

export const setToken = (token) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const Auth = async () => {
  try {
    const { data } = await globalApi.login({
      user: "wazuh-wui",
      password: "rhedldJ11^^",
    });

    if (data.data) {
      setToken(data.data.token);
    }
    return data.data.token;
  } catch (err) {
    return err;
  }
};

export default axiosInstance;
