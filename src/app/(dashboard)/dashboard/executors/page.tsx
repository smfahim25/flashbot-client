import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FiPlus } from "react-icons/fi";
import { TfiImport } from "react-icons/tfi";
import { columns } from "../columns/columns";
import { Card } from "@/components/ui/card";
import { EmployeeTable } from "@/components/executors-table";
interface Executor {
  id: number;
  first_name: string;
  last_name: string;
  name:string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null;
}

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Executors", link: "/dashboard/executors" },
];
export default function page() {
  const totalUsers = 20;
  const pageLimit = 10;
  const page = 1;
  const pageCount = Math.ceil(totalUsers / pageLimit);
  const employee: Executor[] = [
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      phone: "+1-202-555-0123",
      gender: "Male",
      date_of_birth: "1980-04-25",
      street: "123 Main St",
      city: "Springfield",
      state: "IL",
      country: "USA",
      name:"",
      zipcode: "62701",
      longitude: -89.65,
      latitude: 39.7817,
      job: "Software Developer",
      profile_picture: null,
    },
    {
      id: 2,
      first_name: "Jane",
      name:"",
      last_name: "Smith",
      email: "jane.smith@example.com",
      phone: "+1-202-555-0145",
      gender: "Female",
      date_of_birth: "1985-07-14",
      street: "456 Oak St",
      city: "Madison",
      state: "WI",
      country: "USA",
      zipcode: "53703",
      longitude: -89.3838,
      latitude: 43.0731,
      job: "Project Manager",
      profile_picture: "https://example.com/profile/jane.jpg",
    },
    {
      id: 3,
      first_name: "Alice",
      last_name: "Johnson",
      email: "alice.johnson@example.com",
      phone: "+1-202-555-0198",
      gender: "Female",
      name:"",
      date_of_birth: "1990-01-05",
      street: "789 Pine St",
      city: "Columbus",
      state: "OH",
      country: "USA",
      zipcode: "43215",
      longitude: -82.9988,
      latitude: 39.9612,
      job: "Data Analyst",
      profile_picture: "https://example.com/profile/alice.jpg",
    },
  ];
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <div className="flex justify-between items-center">
          <div>
            <h6 className="font-semibold text-2xl leading-10">Executors</h6>
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          <div className="">
            <Button
              className="mr-4 text-[16px] bg-[#FFE6FC] hover:bg-[#f4c4ef] text-pink-500
"
            >
              {" "}
              <span className="px-2">
                <TfiImport size={18} />
              </span>
              Import Executors
            </Button>
            <Button className="text-[16px]">
              <span className="px-2">
                <FiPlus />
              </span>
              Add Executors
            </Button>
          </div>
        </div>

        <div className=" w-full rounded-xl p-4 mt-5">
          <Card className="mt-4 border-none">
            <EmployeeTable
              searchKey="country"
              pageNo={page}
              columns={columns}
              totalUsers={totalUsers}
              data={employee}
              pageCount={pageCount}
            />
          </Card>
        </div>
      </div>
    </ScrollArea>
  );
}
