// 封装高阶组件
// 核心逻辑：有token 正常跳转 无token 跳转到登录页

import { getToken } from "@/utils";
import { Navigate } from "react-router-dom";

export function AuthRoute({ children }) {
  const token = getToken();
  // 如果有token 则正常跳转
  if (token) {
    return <>{children}</>;
  } else {
    // 如果没有token 则跳转到登录页
    return <Navigate to="/login" replace />;
  }
}
