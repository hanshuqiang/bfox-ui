import { nextTick } from 'vue'
const ishowBottomDiv = (bottomDiv: HTMLDivElement, scrollBar: HTMLDivElement, tableBodyDomWrap: Element) => {
  if (bottomDiv.getBoundingClientRect().top > document.body.clientHeight) {
    if (scrollBar.style.display === 'none') {
      scrollBar.style.display = 'block'
      scrollBar.scrollLeft = tableBodyDomWrap.scrollLeft
    }
    scrollBar.style.display = 'block'
  } else {
    scrollBar.style.display = 'none'
  }
}
const init = (top: Number | string, zIndex: string) => {
  let bottomDiv = document.createElement('div')
  let bar = document.createElement('div')
  let scrollBar = document.createElement('div')
  let tableBodyDom = <HTMLImageElement>document.querySelector('.el-table__body')

  let tableBodyDomWrap = <HTMLImageElement>document.querySelector('.el-table__body-wrapper')
  nextTick(() => {
    let dom = document.querySelector('.el-table')
    if (!dom) {
      return
    }
    dom.append(bottomDiv)
    let MutationObserver = (window as any).MutationObserver || (window as any).webkitMutationObserver || (window as any).MozMutationObserver
    ;(window as any).mutationObserver = new MutationObserver(() => {
      ishowBottomDiv(bottomDiv, scrollBar, tableBodyDomWrap)
    })
    ;(window as any).mutationObserver.observe(dom, { childList: true, subtree: true })
    bar.style.width = tableBodyDom ? tableBodyDom.getBoundingClientRect().width + 'px' : ''
    bar.style.height = '1px'
    scrollBar.style.width = dom.getBoundingClientRect().width + 'px'
    scrollBar.style.height = '30px'
    scrollBar.style.overflow = 'auto'
    scrollBar.style.zIndex = zIndex
    scrollBar.style.bottom = '0px'
    scrollBar.style.position = 'fixed'
    scrollBar.append(bar)
    dom.append(scrollBar)
  })
  window.addEventListener(
    'scroll',
    () => {
      let dom = document.querySelector('.el-table')
      if (!dom) {
        return
      }
      if (scrollBar.style.display === 'block') {
        tableBodyDomWrap.scrollLeft = scrollBar.scrollLeft
      } else {
        scrollBar.scrollLeft = tableBodyDomWrap.scrollLeft
      }
      ishowBottomDiv(bottomDiv, scrollBar, tableBodyDomWrap)
      let elTable = <HTMLImageElement>document.querySelector('.el-table__header-wrapper')
      let elTableFixed = <HTMLImageElement>document.querySelector('.el-table__fixed .el-table__fixed-header-wrapper')
      let elTableFixedRight = <HTMLImageElement>document.querySelector('.el-table__fixed-right .el-table__fixed-header-wrapper')
      let elTableFixedRightHeader = <HTMLImageElement>document.querySelector('.el-table__fixed-right  .el-table__header')
      if (dom.getBoundingClientRect().top < top) {
        if (document.querySelector('.zhanweitablehead')) {
          //
        } else {
          let zhanwei = document.createElement('div')
          zhanwei.className = 'zhanweitablehead'
          zhanwei.style.width = elTable ? elTable.getBoundingClientRect().width + 'px' : ''
          zhanwei.style.height = elTable ? elTable.getBoundingClientRect().height + 'px' : ''
          dom.insertBefore(zhanwei, dom.children[0])
        }
        if (elTable) {
          elTable.style.position = 'fixed'
          elTable.style.zIndex = zIndex
          elTable.style.top = top + 'px'
          elTable.style.right = '56px'
          // elTable.style.left = '262px'
          elTable.style.boxShadow = 'inset 0 8px 10px -10px #00000026'
          elTable.style.width = dom.getBoundingClientRect().width + 'px'
          elTable.style.overflow = 'hidden'
        }
        if (elTableFixed) {
          elTableFixed.style.position = 'fixed'
          elTableFixed.style.zIndex = zIndex
          elTableFixed.style.top = top + 'px'
          elTableFixed.style.right = '56px'
          // elTableFixed.style.left = '262px'
          elTableFixed.style.width = '320px'
          elTableFixed.style.overflow = 'hidden'
        }
        if (elTableFixedRight) {
          elTableFixedRight.style.width = (<HTMLImageElement>document.querySelector('.el-table__fixed-right')).style.width
          elTableFixedRight.style.position = 'fixed'
          elTableFixedRight.style.zIndex = zIndex
          elTableFixedRight.style.top = top + 'px'
          elTableFixedRight.style.height = '50px'
          elTableFixedRight.style.right = '36px'
          elTableFixedRight.style.overflow = 'hidden'
          elTableFixedRightHeader.style.position = 'absolute'
          elTableFixedRightHeader.style.right = '0'
        }
      } else {
        if (!dom) {
          return
        }
        if (document.querySelector('.zhanweitablehead')) {
          let et = <HTMLImageElement>document.querySelector('.el-table')
          let zhanweitablehead = <HTMLImageElement>document.querySelector('.zhanweitablehead')
          if (et && zhanweitablehead) {
            et.removeChild(zhanweitablehead)
          }
        }
        if (elTable) elTable.removeAttribute('style')
        if (elTableFixed) elTableFixed.removeAttribute('style')
        if (elTableFixedRight) elTableFixedRight.removeAttribute('style')
        if (elTableFixedRightHeader) elTableFixedRightHeader.style.position = 'initial'
      }
    },
    true,
  )
}

export const tableStick = (opt = { top: 100, zIndex: '997' }) => {
  init(opt.top, opt.zIndex)
}
