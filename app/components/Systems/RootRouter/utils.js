/**
 * 设置页签标题
 * @param {*} title 
 */
const setTitle = (title) => {
  document.title = title || document.title;
}

const getTitle = (routes, pathname) => {
  let one = routes.filter(router => {
    let path = router.path.replace(/:\w+/, "[^:\/]+");
    path = `^${path}$`;
    if (pathname.match(new RegExp(path))) {
      return true;
    }
  });
  return one.length > 0 && one[0].name;
}

export {
  setTitle,
  getTitle,
}
