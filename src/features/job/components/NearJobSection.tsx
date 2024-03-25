import { Link } from "react-router-dom";
import { JobCard } from "..";

export default function NearJobSection() {
  return (
    <div className="bg-white py-10 mt-2 rounded-md shadow-sm">
      <div className="mx-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Công việc phù hợp gần bạn
          </h2>

          <Link to="/find-job" className="text-primary-600 hover:underline">
            Xem thêm
          </Link>
        </div>

        <div className="job-card-container grid grid-cols-2 grid-rows-2 gap-y-2 gap-x-4 mt-4">
          <JobCard
            isSaved
            title="Ăn ngủ qua ngày"
            companyName="Its Ok"
            companyImage="none"
          />
          <JobCard
            isSaved
            title="Ăn ngủ qua ngày"
            companyName="Its Ok"
            companyImage="none"
          />
          <JobCard
            isSaved
            title="Ăn ngủ qua ngày"
            companyName="Its Ok"
            companyImage="none"
          />
          <JobCard
            isSaved
            title="Ăn ngủ qua ngày"
            companyName="Its Ok"
            companyImage="none"
          />
        </div>
      </div>
    </div>
  );
}
