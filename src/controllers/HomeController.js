class HomeContoller {
  index(req, res) {
    res.json({
      tudocerto: true,
    });
  }
}

export default new HomeContoller();
