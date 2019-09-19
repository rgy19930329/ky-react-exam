import { HOCAsync } from "nice-ui";

export default [
  {
    path: "/exam",
    name: "测试",
    component: HOCAsync(() => import("./index")),
  },
]