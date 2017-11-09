import axios from 'axios'

/* Base URL for CONDUIT */
const API_ROOT = 'http://conduit.productionready.io/api'

/* Request wrapper ... */
const request = {
  get (url) { axios.get(url) }
}

/* Articles Endpoints */
const Articles = {
  all: () => request.get(`${API_ROOT}/articles`)
}

export default {
  Articles
}
