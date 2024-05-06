import { SearchSelect, Select } from "@components/form";

import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";
import Button from "@mui/material/Button";
import { Gender } from "@data/constants";
import { useEffect, useState } from "react";
import { Option } from "@data/interface";
import api from "@utils/axios";

const genders = [
  {
    value: Gender.MALE,
    name: Gender.MALE,
  },
  { value: Gender.FEMALE, name: Gender.FEMALE },
  { value: Gender.OTHER, name: Gender.OTHER },
];

export default function CvProfile() {
  const [fields, setFields] = useState<Option[]>([]);
  const [majors, setMajors] = useState<Option[]>([]);
  const [locations, setLocations] = useState<Option[]>([]);

  useEffect(() => {
    // Define fetchFields function to fetch fields data
    const fetchFields = async () => {
      try {
        const res = await api.get("/fields");
        setFields(res.data.data.fields); // Set fields state with fetched data
      } catch (error) {
        console.error("Error fetching fields:", error);
        // Handle error if needed
      }
    };

    // Define fetchMajors function to fetch majors data
    const fetchMajors = async () => {
      try {
        const res = await api.get("/majors");
        setMajors(res.data.data.majors); // Set majors state with fetched data
        console.log(res.data.data);
      } catch (error) {
        console.error("Error fetching majors:", error);
        // Handle error if needed
      }
    };

    const fetchLocations = async () => {
      try {
        const res = await api.get("/locations");
        setLocations(res.data.data.locations);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchFields();
    fetchMajors();
    fetchLocations();
  }, []);

  useEffect(() => {}, []);
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
            <SearchSelect label="Chọn Lĩnh vực" options={fields} />
            <SearchSelect label="Chọn ngành nghề" options={majors} />
            <SearchSelect
              label="Chọn nơi làm việc"
              options={locations}
            ></SearchSelect>
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
