import Typography from "@mui/material/Typography";
import { RecommendedJobCard } from "..";

export default function AsideJob() {
  return (
    <aside className="w-1/3 px-4 flex-none sticky top-0">
      <Typography
        sx={{ fontWeight: 600, fontSize: "1.1rem" }}
        className="text-gray-400"
        variant="h6"
        component="h6"
      >
        Có thể bạn quan tâm
      </Typography>
      <div className="flex flex-col rounded-md border-2 border-primary-300">
        <RecommendedJobCard />

        <RecommendedJobCard />

        <RecommendedJobCard />

        <RecommendedJobCard />
      </div>
    </aside>
  );
}
