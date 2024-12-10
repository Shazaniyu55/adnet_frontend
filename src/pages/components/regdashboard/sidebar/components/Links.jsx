/* eslint-disable */
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import DashIcon from "../../../icons/DashIcon";

export function SidebarLinks(props) {
  const router = useRouter();
  const { routes } = props;

  // Verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return router.pathname.includes(routeName);
  };

  const createLinks = (routes) => {
    return routes.map((route, index) => {
      if (
        route.layout === "/admin" ||
        route.layout === "/auth" ||
        route.layout === "/rtl"
      ) {
        return (
          <Link key={index} href={`${route.layout}/${route.path}`} passHref>
            <div className="relative mb-3 flex hover:cursor-pointer">
              <li
                className="my-[3px] flex cursor-pointer items-center px-8"
                key={index}
              >
                <span
                  className={`${
                    activeRoute(route.path)
                      ? "font-bold text-black dark:text-white"
                      : "font-medium text-white"
                  }`}
                >
                  {route.icon ? route.icon : <DashIcon />}
                </span>
                <p
                  className={`leading-1 ml-4 flex ${
                    activeRoute(route.path)
                      ? "font-bold text-navy-700 dark:text-white"
                      : "font-medium text-white"
                  }`}
                >
                  {route.name}
                </p>
              </li>
              {activeRoute(route.path) ? (
                <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
              ) : null}
            </div>
          </Link>
        );
      }
    });
  };

  // BRAND
  return <ul>{createLinks(routes)}</ul>;
}

export default SidebarLinks;
