import TokenService from "../services/token-service";
import config from "../config";

const LanguageService = {
  async getLanguageAndWords() {
    const res = await fetch(`${config.API_ENDPOINT}/language`, {
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`
      }
    });
    return await (!res.ok
      ? res.json().then(e => Promise.reject(e))
      : res.json());
  },


  async getHead() {
    const res = await fetch(`${config.API_ENDPOINT}/language/head`, {
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`
      }
    });
    return await (!res.ok
      ? res.json().then(e => Promise.reject(e))
      : res.json());
  },

  postGuess(guess) {
    console.log(guess)
    return fetch(`${config.API_ENDPOINT}/language/guess`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToke1n()}`,
      },
      body: JSON.stringify({ guess })
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default LanguageService;