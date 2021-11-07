import { contentFarms } from '../assets/blockList.json'

class BlockList {
  constructor() {
    var storedList = JSON.parse(localStorage.getItem('blockList'))
    this.list = storedList ?? contentFarms
  }

  add(contentFarm) {
    this.list.push(contentFarm)
    localStorage.setItem('blockList', JSON.stringify(this.list))
  }

  remove(idx) {
    this.list = []
    localStorage.setItem('blockList', JSON.stringify(this.list))
  }
}

export const blockList = new BlockList()
