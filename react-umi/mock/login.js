export default {
  'post /api/login': (req, res) => {
    const { username, password } = req.body
    if (username === 'zhunny' && password === '123456') {
      return res.json({
        code: 0,
        data: {
          token: 'falsetoken',
          role: "admin",
          balance: 1000,
          username: 'zhunny'
        }
      })
    }
    if (username === 'tom' && password === '123456') {
      return res.json({
        code: 0,
        data: {
          token: 'falsetoken',
          role: "role",
          balance: 100,
          username: 'tom'
        }
      })
    }
    return res.status(401).json({
      code: -1,
      msg: "密码错误"
    });
  }
}