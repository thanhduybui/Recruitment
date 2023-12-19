import { FormHeader } from "@components/form";
import { TextHeading } from "@components/heading";
import { MediumContainer } from "@components/ui";

export default function EmployerRegisterPage() {
  return (
    <MediumContainer>
      <div className="bg-white h-screen w-full flex rounded-md">
        <form className="w-7/12 px-4 py-10 flex flex-col gap-4">
          <FormHeader
            title="Đăng ký tài khoản Nhà tuyển dụng"
            subtitle="Cùng tạo dựng lợi thế cho doanh nghiệp bằng cách tìm kiếm những ứng viên ưu tú nhất."
          />
          <div className="px-6">
            <TextHeading title="Thông tin tài khoản" borderStart small />
          </div>
        </form>
        <div className="w-5/12 rounded-r-md bg-gradient-to-br from-primary-600 to-primary-200">
          Ảnh
        </div>
      </div>
    </MediumContainer>
  );
}
