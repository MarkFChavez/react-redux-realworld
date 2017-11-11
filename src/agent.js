import axios from 'axios'

const API_ROOT = 'http://conduit.productionready.io/api'

const request = {
  get: url => axios.get(url)
}

const Articles = {
  all: () => request.get(`${API_ROOT}/articles`),
  show: slug => request.get(`${API_ROOT}/articles/${slug}`)
}

export default {
  Articles
}
