const listData = [
  {
    date: '2020-06-03',
    avatarUrl: '../static/images/avator1.png',
    article_title: '孟祥宇',
    article_author: '美国队长',
    article_image: '../static/images/blue2.png',
    article_content: '梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思',
    good_data: '33',
    start_data: '22'
  },
  {
    date: '2020-06-03',
    avatarUrl: '../static/images/avator1.png',
    article_title: '孟祥宇',
    article_author: '蜘蛛侠',
    article_image: '../static/images/greensun.png',
    article_content: '梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思',
    good_data: '33',
    start_data: '22'
  },
  {
    date: '2020-06-03',
    avatarUrl: '../static/images/avator1.png',
    article_title: '孟祥宇',
    article_author: '蝙蝠侠',
    article_image: '../static/images/coffee.png',
    article_content: '梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思',
    good_data: '33',
    start_data: '22'
  },
  {
    date: '2020-06-03',
    avatarUrl: '../static/images/avator1.png',
    article_title: '孟祥宇',
    article_author: '绿巨人',
    article_image: '../static/images/moon.png',
    article_content: '梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思',
    good_data: '33',
    start_data: '22'
  },
  {
    date: '2020-06-03',
    avatarUrl: '../static/images/avator1.png',
    article_title: '孟祥宇',
    article_author: '蜘蛛侠',
    article_image: '../static/images/coffee.png',
    article_content: '梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思',
    good_data: '33',
    start_data: '22'
  },
  {
    date: '2020-06-03',
    avatarUrl: '../static/images/avator1.png',
    article_title: '孟祥宇',
    article_author: '蜘蛛侠',
    article_image: '../static/images/coffee.png',
    article_content: '梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思',
    good_data: '33',
    start_data: '22'
  },
  {
    date: '2020-06-03',
    avatarUrl: '../static/images/avator1.png',
    article_title: '孟祥宇',
    article_author: '蜘蛛侠',
    article_image: '../static/images/coffee.png',
    article_content: '梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思',
    good_data: '33',
    start_data: '22'
  },
  {
    date: '2020-06-03',
    avatarUrl: '../static/images/avator1.png',
    article_title: '孟祥',
    article_author: '蜘蛛侠',
    article_image: '../static/images/coffee.png',
    article_content: '梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思',
    good_data: '33',
    start_data: '22'
  },
  {
    date: '2020-06-03',
    avatarUrl: '../static/images/avator1.png',
    article_title: '孟祥宇',
    article_author: '蜘蛛侠',
    article_image: '../static/images/coffee.png',
    article_content: '梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思想梦思',
    good_data: '33',
    start_data: '22'
  }
]

module.exports = {listData}