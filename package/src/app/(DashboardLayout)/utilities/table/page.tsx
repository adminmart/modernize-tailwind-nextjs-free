"use client"
import { Badge, Dropdown, Select, Table } from "flowbite-react"
import userimg1 from "/public/images/profile/user-3.jpg";
import userimg2 from "/public/images/profile/user-5.jpg";
import userimg3 from "/public/images/profile/user-6.jpg";
import userimg4 from "/public/images/profile/user-7.jpg";
import userimg5 from "/public/images/profile/user-8.jpg";
import { TbDotsVertical }  from "react-icons/tb";
import Image from "next/image";
import CardBox from "@/app/components/shared/CardBox";
import { Icon } from "@iconify/react/dist/iconify.js";
const page = () => {

    const PerformersData = [
        {
            key:"performerData1",
            profileImg:userimg1,
            username:"Sunil Joshi",
            designation:"Web Designer",
            project:"Elite Admin",
            priority:"Low",
            color:"primary",
            bgcolor:"bg-primary text-white",
            budget:"3.9k"
        },
        {
            key:"performerData2",
            profileImg:userimg2,
            username:"John Deo",
            designation:"Web Developer",
            project:"Flexy Admin",
            priority:"Medium",
            color:"warning",
            bgcolor:"bg-warning text-white",
            budget:"24.5k"
        },
        {
            key:"performerData3",
            profileImg:userimg3,
            username:"Nirav Joshi",
            designation:"Web Manager",
            project:"Material Pro",
            priority:"High",
            color:"warning",
            budget:"12.8k"
        },
        {
            key:"performerData4",
            profileImg:userimg4,
            username:"Yuvraj Sheth",
            designation:"Project Manager",
            project:"Xtreme Admin",
            priority:"Low",
            color:"success",
            bgcolor:"bg-success text-white",
            budget:"4.8k"
        },
        {
            key:"performerData5",
            profileImg:userimg5,
            username:"Micheal Doe",
            designation:"Content Writer",
            project:"Helping Hands WP Theme",
            priority:"High",
            color:"error",
            bgcolor:"bg-error text-white",
            budget:"9.3k"
        },
    ]
      /*Table Action*/
  const tableActionData = [
    {
      icon: "solar:add-circle-outline",
      listtitle: "Add",
    },
    {
      icon: "solar:pen-new-square-broken",
      listtitle: "Edit",
    },
    {
      icon: "solar:trash-bin-minimalistic-outline",
      listtitle: "Delete",
    },
  ];
    return (
        <CardBox>
            <div className="mb-6">
                <div>
                    <h5 className="card-title">Table</h5>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-x-auto">
         <Table>
            <Table.Head>
              <Table.HeadCell className="text-sm font-semibold ps-0">
                Assigned
              </Table.HeadCell>
              <Table.HeadCell className="text-sm font-semibold">
                Project
              </Table.HeadCell>
              <Table.HeadCell className="text-sm font-semibold">
                Priority
              </Table.HeadCell>
              <Table.HeadCell className="text-sm font-semibold">
                
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y divide-border dark:divide-darkborder ">
              {PerformersData.map((item, index) => (
                <Table.Row key={index}>
                  <Table.Cell className="whitespace-nowrap ps-0 md:min-w-auto min-w-[200px]">
                    <div className="flex gap-3 items-center">
                      <Image
                        src={item.profileImg}
                        alt="icon"
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                      <h6 className="text-sm font-semibold mb-1">{item.username}</h6>
                      <p className="text-xs text-bodytext dark:text-darklink font-medium">Web Designer</p>
                      </div>
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap">
                    <p className="text-link dark:text-darklink text-sm w-fit font-medium">
                      {item.project}
                    </p>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap">
                    <Badge color={`${item.color}`} className={`text-sm rounded-full py-1.1 px-3 justify-center ${item.bgcolor}`} >{item.priority}</Badge>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap">
                  <Dropdown
                    label=""
                    dismissOnClick={false}
                    renderTrigger={() => (
                      <span className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-lightprimary hover:text-primary cursor-pointer">
                        <TbDotsVertical size={22} />
                      </span>
                    )}
                  >
                    {tableActionData.map((items, index) => (
                      <Dropdown.Item key={index} className="flex gap-3">
                        <Icon icon={`${items.icon}`} height={18} />
                        <span>{items.listtitle}</span>
                      </Dropdown.Item>
                    ))}
                  </Dropdown>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
                        </div>
                    </div>
                </div>
            </div>
        </CardBox>
    )
}

export default page
