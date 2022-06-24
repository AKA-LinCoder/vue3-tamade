let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  //因为设置了映射解决跨域问题，所以使用api表示
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = ''
} else {
  BASE_URL = ''
}

export { BASE_URL, TIME_OUT }
