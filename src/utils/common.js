export function nextPage (url) {
  wx.navigateTo({
    url: url
  })
}
export function Entrytel (tel) {
  let reg = /^(\d{3})\d{4}(\d{4})$/
  return tel.replace(reg, '$1****$2')
}
