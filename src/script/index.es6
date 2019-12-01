import Puzzle from './Puzzle'

import '../css/puzzle.css'

// 关卡信息
const levels = [
  {
    // 大图
    picture: require('../images/pictures/a.jpg'), 
    // 小图
    thumb: require('../images/covers/a.jpg'), 
    // 描述
    instr: "秋天的银杏树", 
    // 免费
    free: true
  }, 
  {
    // 大图
    picture: require('../images/pictures/b.jpg'), 
    // 小图
    thumb: require('../images/covers/b.jpg'), 
    // 描述
    instr: "毕加索的画 ---- 少女", 
    // 免费
    free: true
  }, 
  {
    // 大图
    picture: require('../images/pictures/c.jpg'), 
    // 小图
    thumb: require('../images/covers/c.jpg'), 
    // 描述
    instr: "毕加索的画 ---- 树", 
    // 免费
    free: true
  }, 
  {
    // 大图
    picture: require('../images/pictures/d.jpg'), 
    // 小图
    thumb: require('../images/covers/d.jpg'), 
    // 描述
    instr: "毕加索的画 ---- 桥", 
    // 免费
    free: true
  }, 
  {
    // 大图
    picture: require('../images/pictures/e.jpg'), 
    // 小图
    thumb: require('../images/covers/e.jpg'), 
    // 描述
    instr: "不知道哪里来的美女", 
    // 免费
    free: false
  }
]

// 选择关卡
global.selectLevel = function(index) { 
  puzzleGame.className = "puzzle_game show"
  setTimeout(function() {
    puzzle.enter(levels[index].picture)
  }, 600)
}

// 返回
global.back = function() {
  puzzleAd.style.display = "none"
  puzzleGame.className = "puzzle_game"
}


// 设置难度
const setDifficulty = function(difficulty) { 
  difficulty = difficulty | 0
  difficulty = difficulty > 1 ? difficulty : 1
  difficultyOpts[difficulty - 1].checked = "checked"
  puzzle.difficulty = difficulty
  puzzle.totalTime = difficulty * 120
}

// 创建拼图对象
const puzzle = new Puzzle()

// 默认进入第一张图
puzzle.init()
// 设置倒计时
puzzle.totalTime = 60

// 难度选项
const difficultyOpts = document.querySelectorAll(".puzzle_difficulty")
difficultyOpts.forEach(function(opt) {
  opt.addEventListener("click", function() {
    puzzle.difficulty = this.value
  })
})

// 同步游戏难度
setDifficulty(puzzle.difficulty)


global.puzzle = puzzle
