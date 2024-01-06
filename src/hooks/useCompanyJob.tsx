import { RecruiterJobCardProps } from "@data/interface";
import { useState, useCallback, useEffect } from "react";
import api from "@utils/axios";
import { convertToDDMMYYYY } from "@utils/datetimeUtil";

export default function useCompanyJob(id: string) {
  const [jobs, setJobs] = useState<RecruiterJobCardProps[]>([]);
  const [currentPage, setCurrentPage] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [totalItems, setTotalItems] = useState(null);

  const fetchCompanyJob = useCallback(async (id: string) => {
    try {
      const res = await api.get(`/companies/${id}/jobs`);
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
    fetchCompanyJob(id);
  }, [fetchCompanyJob, id]);

  return { jobs, currentPage, totalItems, totalPages };
}
