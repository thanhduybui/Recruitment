import { CustomFormControlLabel, TextInput, Textarea } from "@components/form";
import { DateRangePicker } from "..";

export default function FormWorkingProcess() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div>
          <CustomFormControlLabel label="Thời gian làm việc" strict />
          <DateRangePicker />
        </div>
        <div>
          <CustomFormControlLabel label="Tên cơ quan làm việc" strict />
          <TextInput />
        </div>
      </div>
      <div>
        <Textarea label="Mô tả công việc" />
      </div>
    </div>
  );
}
