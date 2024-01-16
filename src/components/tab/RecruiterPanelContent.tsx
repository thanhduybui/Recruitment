import { Box, Pagination } from "@mui/material";
import { RecruiterJobCard } from "@features/recruiter/myJob";
import { RecruiterJobCardProps } from "@data/interface";

type TabPanelContentProps = {
  jobs?: RecruiterJobCardProps[];
  totalPages?: number;
};

export default function TabPanelContent(props: TabPanelContentProps) {
  return (
    <>
      {props.jobs &&
        props.jobs.map((job) => <RecruiterJobCard key={job.id} {...job} />)}
      <Box sx={{ marginTop: "2rem", display: "flex" }}>
        <Pagination
          count={props.totalPages}
          shape="rounded"
          color="primary"
          size="medium"
          sx={{ marginLeft: "auto" }}
        />
      </Box>
    </>
  );
}
