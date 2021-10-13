;(async () => {
  const src = chrome.runtime.getURL('data/blockList.json')
  const response = await fetch(src)
  const json = await response.json()
  const contentFarms = json.contentFarms

  let isContentFarm = (site) => {
    link = site.querySelector('a')
    return contentFarms.some((contentFarm) => link.href.includes(contentFarm))
  }

  const sites = document.getElementsByClassName('g')
  for (let site of sites) {
    if (isContentFarm(site)) {
      site.innerHTML = ''
    }
  }
})()
