var imgs_data = [
  {
    "img_name": "a.jpg",
    "rating": 1
  },
  {
    "img_name": "b.jpg",
    "rating": 0
  },
  {
    "img_name": "c.jpg",
    "rating": 0
  },
  {
    "img_name": "d.jpg",
    "rating": 0
  },
  {
    "img_name": "e.jpg",
    "rating": 0
  },
  {
    "img_name": "f.jpg",
    "rating": 0
  },
  {
    "img_name": "g.jpg",
    "rating": 0
  },
  {
    "img_name": "h.jpg",
    "rating": 0
  },
  {
    "img_name": "i.jpg",
    "rating": 0
  },
  {
    "img_name": "j.jpg",
    "rating": 0
  },
  {
    "img_name": "k.jpg",
    "rating": 0
  },
  {
    "img_name": "l.jpg",
    "rating": 2
  },
  {
    "img_name": "m.jpg",
    "rating": 0
  },
  {
    "img_name": "n.jpg",
    "rating": 0
  },
  {
    "img_name": "o.jpg",
    "rating": 0
  },
  {
    "img_name": "p.jpg",
    "rating": 0
  },
  {
    "img_name": "q.jpg",
    "rating": 0
  },
  {
    "img_name": "w.jpg",
    "rating": 0
  },
  {
    "img_name": "s.jpg",
    "rating": 0
  },
  {
    "img_name": "t.jpg",
    "rating": 0
  },
  {
    "img_name": "u.jpg",
    "rating": 0
  },
  {
    "img_name": "v.jpg",
    "rating": 0
  },
  {
    "img_name": "w.jpg",
    "rating": 0
  },
  {
    "img_name": "x.jpg",
    "rating": 0
  },
  {
    "img_name": "y.jpg",
    "rating": 0
  },
  {
    "img_name": "z.jpg",
    "rating": 0
  },
  {
    "img_name": "a2.jpg",
    "rating": 0
  },
  {
    "img_name": "a3.jpg",
    "rating": 0
  },
  {
    "img_name": "a4.jpg",
    "rating": 0
  },
  {
    "img_name": "a5.jpg",
    "rating": 0
  },
  {
    "img_name": "a6.jpg",
    "rating": 0
  },
  {
    "img_name": "a7.jpg",
    "rating": 0
  },
  {
    "img_name": "a8.jpg",
    "rating": 1
  },
  {
    "img_name": "a9.jpg",
    "rating": 0
  },
  {
    "img_name": "a10.jpg",
    "rating": 0
  },
  {
    "img_name": "a11.jpg",
    "rating": 0
  },
  {
    "img_name": "b1.jpg",
    "rating": 0
  },
  {
    "img_name": "b2.jpg",
    "rating": 0
  },
  {
    "img_name": "b3.jpg",
    "rating": 0
  },
  {
    "img_name": "b4.jpg",
    "rating": 0
  },
  {
    "img_name": "b5.jpg",
    "rating": 0
  },
  {
    "img_name": "b6.jpg",
    "rating": 0
  },
  {
    "img_name": "b7.jpg",
    "rating": 1
  },
  {
    "img_name": "b8.jpg",
    "rating": 0
  },
  {
    "img_name": "b9.jpg",
    "rating": 0
  },
  {
    "img_name": "b10.jpg",
    "rating": 0
  },
  {
    "img_name": "b11.jpg",
    "rating": 0
  },
  {
    "img_name": "c1.jpg",
    "rating": 0
  },
  {
    "img_name": "c2.jpg",
    "rating": 0
  },
  {
    "img_name": "c3.jpg",
    "rating": 0
  },
  {
    "img_name": "c4.jpg",
    "rating": 0
  },
  {
    "img_name": "c5.jpg",
    "rating": 0
  },
  {
    "img_name": "c6.jpg",
    "rating": 0
  },
  {
    "img_name": "c7.jpg",
    "rating": 1
  },
  {
    "img_name": "c8.jpg",
    "rating": 0
  },
  {
    "img_name": "c9.jpg",
    "rating": 0
  },
  {
    "img_name": "d1.jpg",
    "rating": 0
  },
  {
    "img_name": "d2.jpg",
    "rating": 0
  },
  {
    "img_name": "d3.jpg",
    "rating": 0
  },
  {
    "img_name": "d4.jpg",
    "rating": 0
  }
]

imgs_data = imgs_data.map((item, index) => {
  item.rating = Math.floor(Math.random() * 20)
  return item
})


var largePics = getMostRating()
var normalPics = getNormalRating()
var normalPics = getNormalRating()

function getMostRating() {
  // var mostPicRating = imgs_data.reduce((rev, cur, index) => cur.rating > rev.rating ? cur : rev, imgs_data[0])
  // var picIndex;
  // var pics = []
  // imgs_data.find((item, index) => {
  //   if (mostPicRating.img_name === item.img_name) {
  //     picIndex = index
  //     return
  //   }
  // })

  // var data = {
  //   "index": picIndex,
  //   "body": mostPicRating
  // }
  // pics.push(data)
  var sortedPics = sortPics()
  return sortedPics[0]
}

function getNormalRating() {
  var sortedPics = sortPics()
  var picsResult = sortedPics.slice(1, 5)
  return picsResult
}

function sortPics() {
  var data = imgs_data.map(function(item, index) {
    item['index'] = index
    return item
  })
  return data.sort((a, b) => (a.rating > b.rating) ? -1 : 1)
}
