import axios from 'axios'

const API_ROOT = 'http://conduit.productionready.io/api'

const request = {
  get: url => axios.get(url)
}

const Articles = {
  all: offset => request.get(`${API_ROOT}/articles?limit=20&offset=${offset}`),
  show: slug => request.get(`${API_ROOT}/articles/${slug}`)
}

export default {
  Articles
}
