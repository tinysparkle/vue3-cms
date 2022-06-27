let BASE_URL = ''
let BASE_NAME = ''
const TIME_OUT = 50000

if (process.env.NODE_ENV === 'development') {
  // BASE_URL = 'http://mock.com/dev'
  BASE_URL = 'http://123.207.32.32:8000/'
  BASE_NAME = 'mock_dev'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://mock.com/prod'
  BASE_NAME = 'mock_prod'
} else {
  BASE_URL = 'http://mock.com/test'
  BASE_NAME = 'mock_test'
}

export { BASE_URL, BASE_NAME, TIME_OUT }
