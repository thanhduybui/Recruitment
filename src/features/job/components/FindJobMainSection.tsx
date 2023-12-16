import { JobCard, TimeOrder } from "@features/job";
import Pagination from "@mui/material/Pagination";
import { JobCardContainer } from "@features/job/";

export default function FindJobMainSection() {
  return (
    <>
      <TimeOrder />
      <JobCardContainer>
        <JobCard
          jobTitle="Lập trình viên Fontend lương 20 - 25 triệu"
          location="Hồ Chí Minh"
          companyName="Công ty Cổ phần Công nghệ FPT"
          salary="20 - 25 triệu"
          deadline="5"
          favorite={true}
        />

        <JobCard
          jobTitle="Lập trình viên Fontend lương 20 - 25 triệu"
          location="Hồ Chí Minh"
          companyName="Công ty Cổ phần Công nghệ FPT"
          salary="20 - 25 triệu"
          deadline="5"
          favorite={true}
        />

        <JobCard
          jobTitle="Lập trình viên Fontend lương 20 - 25 triệu"
          location="Hồ Chí Minh"
          companyName="Công ty Cổ phần Công nghệ FPT"
          salary="20 - 25 triệu"
          deadline="5"
        />

        <JobCard
          jobTitle="Lập trình viên Fontend lương 20 - 25 triệu"
          location="Hồ Chí Minh"
          companyName="Công ty Cổ phần Công nghệ FPT"
          salary="20 - 25 triệu"
          deadline="5"
        />

        <JobCard
          jobTitle="Lập trình viên Fontend lương 20 - 25 triệu"
          location="Hồ Chí Minh"
          companyName="Công ty Cổ phần Công nghệ FPT"
          salary="20 - 25 triệu"
          deadline="5"
        />

        <JobCard
          jobTitle="Lập trình viên Fontend lương 20 - 25 triệu"
          location="Hồ Chí Minh"
          companyName="Công ty Cổ phần Công nghệ FPT"
          salary="20 - 25 triệu"
          deadline="5"
        />

        <JobCard
          jobTitle="Lập trình viên Fontend lương 20 - 25 triệu"
          location="Hồ Chí Minh"
          companyName="Công ty Cổ phần Công nghệ FPT"
          salary="20 - 25 triệu"
          deadline="5"
        />

        <JobCard
          jobTitle="Lập trình viên Fontend lương 20 - 25 triệu"
          location="Hồ Chí Minh"
          companyName="Công ty Cổ phần Công nghệ FPT"
          salary="20 - 25 triệu"
          deadline="5"
        />

        <JobCard
          jobTitle="Lập trình viên Fontend lương 20 - 25 triệu"
          location="Hồ Chí Minh"
          companyName="Công ty Cổ phần Công nghệ FPT"
          salary="20 - 25 triệu"
          deadline="5"
        />
      </JobCardContainer>
      <div className="py-20 flex items-center justify-center">
        <Pagination
          count={10}
          shape="rounded"
          color="primary"
          size="medium"
        ></Pagination>
      </div>
    </>
  );
}
