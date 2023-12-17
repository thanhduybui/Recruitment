import { Breadcrumb } from "@components/ui";
import { AdminTitle } from "@components/admin";
import { ReactElement } from "react";

type AdminHeadSectionProps = {
  title: string;
  breadcrumbs: ReactElement[];
};

export default function AdminHeadSection({
  title,
  breadcrumbs,
}: AdminHeadSectionProps) {
  return (
    <div className="bg-white flex  flex-col gap-2 px-4 py-2 rounded-md">
      <Breadcrumb breadcrumps={breadcrumbs} />
      <AdminTitle title={title} />
    </div>
  );
}
