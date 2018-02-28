import Danmu from '../../components/danmu/index.js'

Page({
  data: {
    items: [
      { label: 'One' },
      { label: 'Two' },
      { label: 'Three' },
      { label: 'Four' },
      { label: 'Five' },
      { label: 'Six' },
      { label: 'Seven' },
      { label: 'Eight' },
      { label: '9' },
      { label: '10' },
      { label: '11' },
      { label: '12' },
    ]
  },
  onLoad
})

function onLoad() {
  const danmu = new Danmu(this, this.data.items)
  danmu.start()
}