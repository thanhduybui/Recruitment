import { JobDataRow } from "..";
import { JobDataRowProps } from "../interface";

const jobData: JobDataRowProps[] = [
  {
    id: "1",
    title: "Software Engineer",
    company: "ABC Tech",
    applyNumber: "10",
    deadline: "2023-12-31",
  },
  {
    id: "2",
    title: "Marketing Manager",
    company: "XYZ Marketing",
    applyNumber: "5",
    deadline: "2023-12-25",
  },
  {
    id: "3",
    title: "Data Analyst",
    company: "DataCo",
    applyNumber: "8",
    deadline: "2024-01-15",
  },
  {
    id: "4",
    title:
      "Graphic Designer Graphic Designer Graphic Designer Graphic Designer",
    company: "Design Solutions",
    applyNumber: "3",
    deadline: "2023-12-20",
  },
  {
    id: "5",
    title: "Product Manager",
    company: "InnoTech",
    applyNumber: "7",
    deadline: "2024-02-10",
  },
  {
    id: "6",
    title: "HR Specialist",
    company: "HR Experts",
    applyNumber: "4",
    deadline: "2023-12-28",
  },
  {
    id: "7",
    title: "Financial Analyst",
    company: "FinanceCo",
    applyNumber: "6",
    deadline: "2024-01-05",
  },
  {
    id: "8",
    title: "Content Writer",
    company: "ContentMasters",
    applyNumber: "2",
    deadline: "2023-12-23",
  },
  {
    id: "9",
    title: "Customer Support Representative",
    company: "Support Solutions",
    applyNumber: "9",
    deadline: "2024-02-05",
  },
  {
    id: "10",
    title: "Sales Executive",
    company: "SalesGenius",
    applyNumber: "12",
    deadline: "2024-01-20",
  },
];

export default function JobDataList() {
  return (
    <div className="flex flex-col gap-2 mt-4 mb-10 overflow-x-auto">
      <JobDataRow
        id="Id"
        title="Tên công việc"
        company="Công ty"
        applyNumber="Ứng tuyển"
        deadline="Hạn nộp"
        isHead
      />
      {jobData.map((job) => (
        <JobDataRow {...job} />
      ))}
    </div>
  );
}
