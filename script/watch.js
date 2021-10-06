;(async () => {
  const src = chrome.extension.getURL('script/config.js')
  const config = await import(src)
  const fakeSites = config.fakeSites

  function blockFakeSites(fakeSites) {
    const gs = document.getElementsByClassName('g')

    function hasFakeSites(element) {
      return fakeSites.some((fakeSite) => element.innerHTML.includes(fakeSite))
    }

    for (let g of gs) {
      console.log(g)
      if (hasFakeSites(g)) {
        g.innerHTML = ''
      }
    }
  }

  blockFakeSites(fakeSites)
})()
