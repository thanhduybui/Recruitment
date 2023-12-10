import { Select, TextInput } from "@components/form";

import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";
import Button from "@mui/material/Button";
import { Gender } from "@data/constants";

import {
  locations,
  expieriences,
  salaryRanges,
  majors,
  skills,
} from "@data/api";

const genders = [
  {
    value: Gender.MALE,
    name: Gender.MALE,
  },
  { value: Gender.FEMALE, name: Gender.FEMALE },
  { value: Gender.OTHER, name: Gender.OTHER },
];

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
          <div className="flex flex-col gap-4">
            <div className="flex items-center text-gray-400 font-semibold gap-2">
              <WorkIcon />
              <p className="text-m">Nhu cầu cầu công việc</p>
            </div>
            <Select
              initValue={genders[0]}
              options={genders}
              label="Chọn giới tính"
            ></Select>
            <TextInput
              label="Vị trí công việc"
              placeholder="Nhập vị trí công việc"
              id="position"
              type="text"
            ></TextInput>
            <Select
              search
              label="Chọn ngành nghề"
              options={majors}
              id="major"
            />
            <Select chip search label="Chọn kỹ năng" options={skills} />
            <Select
              search
              options={locations}
              label="Chọn nơi làm việc"
            ></Select>
            <Select
              options={expieriences}
              label="Chọn kinh nghiệm làm việc"
            ></Select>
            <Select
              options={salaryRanges}
              label="Chọn mức lương mong muốn"
            ></Select>

            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                width: "fit-content",
                margin: "auto",
                marginTop: "1.2rem",
              }}
            >
              Cập nhật
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
