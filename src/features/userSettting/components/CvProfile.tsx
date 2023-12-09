import { RadioButtonGroup, TextInput } from "@components/form";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";

import { Gender } from "@data/constants";

const { MALE, FEMALE, OTHER } = Gender;

export default function CvProfile() {
  return (
    <div className="p-4">
      <div>
        <Typography
          variant="h6"
          component="h6"
          sx={{ fontWeight: 600 }}
          className="text-primary-600"
        >
          Cài đặt thêm thông tin
        </Typography>
        <Typography
          variant="subtitle2"
          component="span"
          sx={{ fontWeight: 500 }}
          className="text-gray-300"
        >
          Với những thông tin mà bạn cung cấp, chúng tôi có thể đem đến những
          gợi ý việc làm phù hợp nhất cho bạn.
        </Typography>
      </div>
      <div className="w-3/4 m-auto pt-5">
        <form className="w-full flex flex-col gap-4">
          <RadioButtonGroup label="Giới tính" values={[MALE, FEMALE, OTHER]} />
          <Divider />
          <div className="flex flex-col gap-4">
            <div className="flex items-center text-gray-400 font-semibold gap-2">
              <WorkIcon />
              <p className="text-m">Nhu cầu cầu công việc</p>
            </div>
            <TextInput
              label="Vị trí công việc"
              placeholder="Nhập vị trí công việc"
              id="position"
              type="text"
            ></TextInput>
          </div>
        </form>
      </div>
    </div>
  );
}
