import { Suspense, lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { SvgIcon } from "@/components/icon";
import { CircleLoading } from "@/components/loading";

import type { AppRouteObject } from "@/type/router";

const HomePage = lazy(() => import("@/pages/dashboard"));

const dashboard: AppRouteObject = {
  order: 1,
  path: "dashboard",
  element: (
    <Suspense fallback={<CircleLoading />}>
      <HomePage />
    </Suspense>
  ),
  meta: {
    label: "sys.menu.dashboard",
    icon: (
      <SvgIcon icon="ic-analysis" className="ant-menu-item-icon" size="24" />
    ),
    key: "/dashboard",
  },
};

export default dashboard;
