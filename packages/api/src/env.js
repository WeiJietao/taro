export const ENV_TYPE = {
  WEAPP: 'WEAPP',
  WEB: 'WEB',
  RN: 'RN',
  SWAN: 'SWAN',
  ALIPAY: 'ALIPAY',
  TT: 'TT',
  QQ: 'QQ',
  JD: 'JD',
  XHS: 'XHS'
}

export function getEnv () {
  if (process.env.TARO_ENV === 'weapp') {
    return ENV_TYPE.WEAPP
  } else if (process.env.TARO_ENV === 'alipay') {
    return ENV_TYPE.ALIPAY
  } else if (process.env.TARO_ENV === 'swan') {
    return ENV_TYPE.SWAN
  } else if (process.env.TARO_ENV === 'tt') {
    return ENV_TYPE.TT
  } else if (process.env.TARO_ENV === 'jd') {
    return ENV_TYPE.JD
  } else if (process.env.TARO_ENV === 'qq') {
    return ENV_TYPE.QQ
  } else if (process.env.TARO_ENV === 'h5') {
    return ENV_TYPE.WEB
  } else if (process.env.TARO_ENV === 'rn') {
    return ENV_TYPE.RN
  } else if (process.env.TARO_ENV === 'xhs') {
    return ENV_TYPE.XHS
  } else {
    return process.env.TARO_ENV || 'Unknown'
  }
}
