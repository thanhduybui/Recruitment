import { CustomFormControlLabel, TextInput, Textarea } from "@components/form";
import { DateRangePicker } from "../..";

export default function FormStudyProcess() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div>
          <CustomFormControlLabel label="Thời gian" strict />
          <DateRangePicker />
        </div>
        <div>
          <CustomFormControlLabel label="Tên trường đại học" strict />
          <TextInput />
        </div>
      </div>
      <div>
        <Textarea label="Giới thiệu ngắn gọn quá trình học tập" />
      </div>
    </div>
  );
}
