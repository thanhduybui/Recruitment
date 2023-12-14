import { DropDownListItem, HeaderWrapper } from ".";
import { LogoButton } from "@components/ui/button";
import { UserSettingMenu } from "@features/setting";
import { HeaderList } from ".";

export default function AdminHeader() {
  return (
    <HeaderWrapper>
      <LogoButton />
      <nav
        className={`absolute top-0 z-10 lg:z-0 bg-primary-100 lg:bg-white 
      left-0 lg:relative gap-4 flex flex-col pt-20 lg:pt-0 lg:flex-row  
    lg:justify-between w-full h-screen lg:h-16`}
      >
        <HeaderList>
          <DropDownListItem name="Việc làm" />
          <DropDownListItem name="Ứng viên" />
          <DropDownListItem name="Nhà tuyển dụng" />
        </HeaderList>

        <UserSettingMenu />
      </nav>
    </HeaderWrapper>
  );
}
