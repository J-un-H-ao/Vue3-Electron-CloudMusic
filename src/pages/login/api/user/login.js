import request from '../../utils/request'

// 获取二维码
export async function getQRcode() {
  const {
    data: { unikey },
  } = await request.get(`/login/qr/key?&timerstamp=${Date.now()}`)

  const {
    data: { qrimg },
  } = await getB64(unikey)

  return { qrimg: qrimg, unikey: unikey }
}

function getB64(key) {
  return request.get(
    `/login/qr/create?key=${key}&qrimg=true&timerstamp=${Date.now()}`
  )
}

export function getCookie(key) {
  return request.get(`/login/qr/check?key=${key}&timerstamp=${Date.now()}`)
}

export function getLoginStatus() {
  return request.get('/login/status')
}
