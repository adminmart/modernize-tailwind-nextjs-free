"use client";

import React, { useContext } from "react";
import { Button, Sidebar, Tooltip } from "flowbite-react";
import SidebarContent from "./Sidebaritems";
import NavItems from "./NavItems";
import SimpleBar from "simplebar-react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import FullLogo from "../shared/logo/FullLogo";
import rocket from "/public/images/backgrounds/rocket.png"
import Link from "next/link";
const SidebarLayout = () => {
  return (
    <>
      <div className="xl:block hidden">
        <div className="flex">
          <Sidebar
            className="fixed menu-sidebar bg-white dark:bg-dark z-[3]"
            aria-label="Sidebar with multi-level dropdown example"
          >
            <div className={`px-6 flex items-center brand-logo overflow-hidden`}>
              <FullLogo />
            </div>

            <SimpleBar className="h-[calc(100vh_-_100px)]">
              <Sidebar.Items className={`px-6`}>
                <Sidebar.ItemGroup className="sidebar-nav">
                  {SidebarContent.map((item, index) => (
                    <React.Fragment key={index}>
                     <h5 className="text-link font-bold text-xs dark:text-darklink caption">
                        <span className="hide-menu leading-21">{item.heading?.toUpperCase()}</span>
                        <Icon
                        icon="tabler:dots"
                        className="text-ld block mx-auto leading-6 dark:text-opacity-60 hide-icon"
                        height={18}
                      />
                      </h5>

                      {item.children?.map((child, index) => (
                        <React.Fragment key={child.id && index}>
                            <NavItems item={child} />
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  ))}
                </Sidebar.ItemGroup>
              </Sidebar.Items>
              {/* Offer Banner */}
            <div className="mt-9 px-6">
            <div className="flex w-full bg-lightprimary p-6">
                <div className="lg:w-1/2 w-full">
                 <h5 className="text-base text-link dark:text-darklink">
                  Haven't Account?
                 </h5>
                 <Button size={"xs"} color={"primary"} as={Link} href="/auth/register" className="whitespace-nowrap mt-2 text-[13px]" >Sign Up</Button>
                </div>
                <div className="lg:w-1/2 w-full -mt-4 ml-[26px] scale-[1.2] shrink-0">
                <Image src={rocket} alt="rocket" />
                </div>
              </div>
            </div>
            </SimpleBar>

          </Sidebar>
        </div>
      </div>
    </>
  );
};

export default SidebarLayout;
