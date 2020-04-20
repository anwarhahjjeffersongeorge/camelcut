export default function camelcut(str, target = 7, camels = 3) {
  if (typeof str === 'string' &&
    [target, camels].every(p => typeof p === 'number')
  ) {
    const L = str.length
    if (target===L) return str
    if (str === '') return str
    let uppers = 0
    let ll = 0

    return str
      .split(/\s+|\d|\W/)
      .join('')
      .split(
        /(^[A-Za-z]1)|([a-z]+)|([A-Z])/
      )
      .filter(_ => _)
      .map((v, i, a) => {
        if (v === v.toUpperCase()) {
          uppers++
        }
        if(v.length === 1 ) return v

        let LL = Math.floor(target/camels) - (target%camels === 0 ? 1 : 0)
        if(i===0 && uppers === 0) LL ++
        let r = v.slice(0, LL)
        ll += r.length
        return r
      })
      .join('')
      .slice(0, target)
  }
  return null
}
