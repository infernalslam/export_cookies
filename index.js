let cookies = {}


// console.log(cookies)

let str = ''

for (const c in cookies) {
  // console.log(cookies[c], c)
  str += `${c}=${cookies[c]};`
}

ans = `document.cookie="${str}"`

console.log(ans)