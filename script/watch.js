;(async () => {
  const src = chrome.extension.getURL('script/config.js')
  const config = await import(src)
  const fakeSites = config.fakeSites

  let hasFakeSites = (site) => {
    link = site.querySelector('a')
    return fakeSites.some((fakeSite) => link.href.includes(fakeSite))
  }

  const sites = document.getElementsByClassName('g')
  for (let site of sites) {
    if (hasFakeSites(site)) {
      site.innerHTML = ''
    }
  }
})()
