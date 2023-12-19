import { TextHeading } from "@components/heading";
import { InformationSection } from "@features/details";
import { HTMLContent } from "@features/details";

export default function JobDescription() {
  return (
    <>
      <TextHeading title="Chi tiết tin tuyển dụng" borderStart />
      <InformationSection
        html
        header="Yêu cầu công việc"
        Htmlcontent={<HTMLContent />}
      ></InformationSection>
      <InformationSection
        header="Yêu cầu ứng viên"
        html
        Htmlcontent={<HTMLContent />}
      ></InformationSection>
      <InformationSection
        header="Quyền lợi"
        html
        Htmlcontent={<HTMLContent />}
      ></InformationSection>
      <InformationSection
        header="Thời gian làm việc"
        textContent="Thứ 2 - Thứ 6, 8:00:00 - 17:00:00"
      ></InformationSection>
      <InformationSection
        header="Địa điểm làm việc"
        textContent="Tầng 3, Tòa nhà Hanoi Group, 442 Đội Cấn, Ba Đình, Hà Nội"
      ></InformationSection>
    </>
  );
}
