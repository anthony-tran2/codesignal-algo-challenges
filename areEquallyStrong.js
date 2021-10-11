const areEquallyStrong = (yourLeft, yourRight, friendsLeft, friendsRight) => {
  if (yourLeft + yourRight === friendsLeft + friendsRight) {
    if (yourLeft > yourRight) {
      yourWeak = yourRight;
      yourStrong = yourLeft;
    } else {
      yourWeak = yourLeft;
      yourStrong = yourRight;
    }
    if (friendsLeft > friendsRight) {
      friendsWeak = friendsRight;
      friendsStrong = friendsLeft;
    } else {
      friendsWeak = friendsLeft;
      friendsStrong = friendsRight;
    }
    if (yourWeak === friendsWeak && yourStrong === friendsStrong) return true; else return false;
  }
  return false;
}
