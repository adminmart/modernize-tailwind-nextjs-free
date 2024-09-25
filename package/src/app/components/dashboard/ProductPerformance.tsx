"use client"
import { Badge, Select, Table } from "flowbite-react"
import userimg1 from "/public/images/profile/user-3.jpg";
import userimg2 from "/public/images/profile/user-5.jpg";
import userimg3 from "/public/images/profile/user-6.jpg";
import userimg4 from "/public/images/profile/user-7.jpg";
import userimg5 from "/public/images/profile/user-8.jpg";
import Image from "next/image";
import CardBox from "../shared/CardBox";

export const ProductPerformance = () => {
  const PerformersData = [
    {
        key:"performerData1",
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
        username:"Andrew McDownland",
        designation:"Project Manager",
        project:"Real Homes WP Theme",
        priority:"Medium",
        color:"secondary",
        bgcolor:"bg-secondary text-white",
        budget:"24.5k"
    },
    {
        key:"performerData3",
        username:"Christopher Jamil",
        designation:"Project Manager",
        project:"MedicalPro WP Theme",
        priority:"High",
        color:"error",
        bgcolor:"bg-error text-white",
        budget:"12.8k"
    },
    {
        key:"performerData4",
        profileImg:userimg4,
        username:"Nirav Joshi",
        designation:"Frontend Engineer",
        project:"Hosting Press HTML",
        priority:"Critical",
        color:"success",
        bgcolor:"bg-success text-white",
        budget:"4.8k"
    },
    {
        key:"performerData5",
        username:"Micheal Doe",
        designation:"Content Writer",
        project:"Helping Hands WP Theme",
        priority:"Low",
        color:"primary",
        bgcolor:"bg-primary text-white",
        budget:"9.3k"
    },
]
    return (
        <CardBox>
            <div className="mb-6">
                <div>
                    <h5 className="card-title">Product Performance</h5>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-x-auto">
         <Table>
            <Table.Head>
              <Table.HeadCell className="text-sm font-semibold">
                Id
              </Table.HeadCell>
              <Table.HeadCell className="text-sm font-semibold">
                Assigned
              </Table.HeadCell>
              <Table.HeadCell className="text-sm font-semibold">
                Name
              </Table.HeadCell>
              <Table.HeadCell className="text-sm font-semibold">
                Priority
              </Table.HeadCell>
              <Table.HeadCell className="text-sm font-semibold">
                Budget
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y divide-border dark:divide-darkborder ">
              {PerformersData.map((item, index) => (
                <Table.Row key={item.key}>
                      <Table.Cell className="whitespace-nowrap">
                    <p className="text-link dark:text-darklink font-medium text-sm w-fit">
                      {index+1}
                    </p>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap ps-0 md:min-w-auto min-w-[200px]">
                      <div>
                      <h6 className="text-sm font-semibold mb-1">{item.username}</h6>
                      <p className="text-xs font-medium text-bodytext dark:text-darklink">Web Designer</p>
                      </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap">
                    <p className="text-bodytext font-medium dark:text-darklink text-sm w-fit">
                      {item.project}
                    </p>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap">
                    <Badge color={`${item.color}`} size={'xs'} className={`text-[13px] px-3 rounded-full justify-center py-0.5 ${item.bgcolor}`} >{item.priority}</Badge>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap">
                    <p className="dark:text-darklink text-link text-[15px] font-medium">
                      {item.budget}
                    </p>
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