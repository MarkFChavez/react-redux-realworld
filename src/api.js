import axios from 'axios'

const API_ROOT = 'http://conduit.productionready.io/api'

const request = {
  get: url => axios.get(url),
  post: (url, data) => axios.post(url, data)
}

const Articles = {
  all: (offset, tag) => request.get(`${API_ROOT}/articles?limit=20&offset=${offset}&tag=${tag}`),
  show: slug => request.get(`${API_ROOT}/articles/${slug}`),
}

const Auth = {
  signin: (email, password) => {
    const data = {
      user: { email, password }
    }
    return request.post(`${API_ROOT}/users/login`, data)
  }
}

const Tags = {
  all: () => request.get(`${API_ROOT}/tags`)
}

export default {
  Articles,
  Auth,
  Tags
}
