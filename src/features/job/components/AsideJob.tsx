import Typography from "@mui/material/Typography";
import { RecommendJobCard } from "@features/job";

export default function AsideJob() {
  return (
    <>
      <Typography
        sx={{ fontWeight: 600, fontSize: "1rem" }}
        className="text-gray-400"
        variant="h6"
        component="h6"
      >
        Có thể bạn quan tâm
      </Typography>
      <div className="flex flex-col gap-2 mt-4">
        <RecommendJobCard />
        <RecommendJobCard />
        <RecommendJobCard />
        <RecommendJobCard />
      </div>
    </>
  );
}
