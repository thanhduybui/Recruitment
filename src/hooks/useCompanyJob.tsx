import { RecruiterJobCardProps } from "@data/interface";
import { useState, useCallback, useEffect } from "react";
import api from "@utils/axios";
import { convertToDDMMYYYY } from "@utils/datetimeUtil";

export default function useCompanyJob(id: string, index: number) {
  const [jobs, setJobs] = useState<RecruiterJobCardProps[]>([]);
  const [currentPage, setCurrentPage] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [totalItems, setTotalItems] = useState(null);

  const fetchCompanyJob = useCallback(async (id: string, index: number) => {
    try {
      let type: string = "ACTIVE";
      if (index === 1) {
        type = "EXPIRED";
      } else if (index === 2) {
        type = "HOT";
      }
      const res = await api.get(`/companies/${id}/jobs?type=${type}`);
      const listJobs = res.data.data.jobs.listData;

      const recruiterJobCards: RecruiterJobCardProps[] = listJobs.map(
        (job) => ({
          id: job.id,
          title: job.title,
          companyName: job.company.id,
          dueDate: convertToDDMMYYYY(job.deadline),
        })
      );

      console.log(recruiterJobCards);

      setCurrentPage(res.data.data.jobs.currentPage);
      setTotalPages(res.data.data.jobs.totalPages);
      setTotalItems(res.data.data.jobs.totalItems);
      setJobs(recruiterJobCards);
    } catch (error) {
      console.error("Error fetching company jobs", error);
    }
  }, []);

  useEffect(() => {
    fetchCompanyJob(id, index);
  }, [fetchCompanyJob, id, index]);

  return { jobs, currentPage, totalItems, totalPages };
}
