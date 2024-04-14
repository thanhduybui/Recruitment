import { MainSectionContainer } from "@components/ui";
import HistoryCard from "./HistoryCard";
import { Box, Pagination } from "@mui/material";
import { useState } from "react";

export default function ApplyJobHistory() {
  const [history, setHistory] = useState([]);
  return (
    <MainSectionContainer heading="Lịch sử ứng tuyển của bạn">
      <HistoryCard />
      <Box sx={{ marginTop: "2rem", display: "flex" }}>
        <Pagination
          count={3}
          shape="rounded"
          color="primary"
          size="medium"
          sx={{ marginLeft: "auto" }}
        />
      </Box>
    </MainSectionContainer>
  );
}
