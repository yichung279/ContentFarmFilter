import { blockList } from './utils.js'
;(async () => {
  let isInBlockList = (href, list) => {
    return list.some((contentFarm) => href.includes(contentFarm))
  }

  const sites = document.getElementsByClassName('g')
  for (let site of sites) {
    const link = site.querySelector('a')
    if (isInBlockList(link.href, blockList.list)) {
      site.innerHTML = ''
    }
  }
})()
