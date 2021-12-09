export default ({ $axios }) => {
  // リクエストログ
  $axios.onRequest((config) => {
    console.log(config)// eslint-disable-line no-console
  })
  // レスポンスログ
  $axios.onResponse((config) => {
    console.log(config)// eslint-disable-line no-console
  })
  // エラーログ
  $axios.onError((e) => {
    console.log(e.response)// eslint-disable-line no-console
  })
}
