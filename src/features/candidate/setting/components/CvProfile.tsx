import { SearchSelect } from "@components/form";
import { getAccessToken } from "@utils/authUtils";

import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { Option } from "@data/interface";
import api from "@utils/axios";
import { toast } from "react-toastify";
import { toastTifyOptions } from "@utils/toastifyUtils";

type CvProfileProps = {
  workLocation?: Option;
  field?: Option;
  major?: Option;
  gender?: string;
};

export default function CvProfile() {
  const [fields, setFields] = useState<Option[]>([]);
  const [majors, setMajors] = useState<Option[]>([]);
  const [locations, setLocations] = useState<Option[]>([]);
  const [useCVProfile, setUseCVProfile] = useState<CvProfileProps>();
  const [loading, setLoading] = useState<boolean>(true); // State for loading indicator

  const handleUpdateProfile = async () => {
    console.log(useCVProfile);
    try {
      await api.put(
        "/users/cv-profile",
        {
          fieldId: useCVProfile?.field?.id,
          majorId: useCVProfile?.major?.id,
          locationId: useCVProfile?.workLocation?.id,
        },
        {
          headers: { Authorization: `Bearer ${getAccessToken()}` },
        }
      );

      toast.success("Cập nhật thông tin thành công", toastTifyOptions);
    } catch (error) {
      console.error(error);
      toast.error("Cập nhật thông tin thất bại", toastTifyOptions);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fieldsRes, majorsRes, locationsRes, useCVProfileRes] =
          await Promise.all([
            api.get("/fields"),
            api.get("/majors"),
            api.get("/locations"),
            api.get("/users/cv-profile", {
              headers: { Authorization: `Bearer ${getAccessToken()}` },
            }),
          ]);

        setFields(fieldsRes.data.data.fields);
        setMajors(majorsRes.data.data.majors);
        setLocations(locationsRes.data.data.locations);
        setUseCVProfile(useCVProfileRes.data.data.profile);
        setLoading(false); // Set loading to false after all data is fetched
      } catch (error) {
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchData();
  }, []);

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
      {loading ? (
        <div>Loading...</div> // Display loading indicator while data is being fetched
      ) : (
        <div className="w-3/4 m-auto pt-5">
          <form className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center text-gray-400 font-semibold gap-2">
                <WorkIcon />
                <p className="text-m">Nhu cầu cầu công việc</p>
              </div>
              <SearchSelect
                onSelect={(option: Option) => {
                  setUseCVProfile({ ...useCVProfile, field: option });
                }}
                label="Chọn Lĩnh vực"
                options={fields}
                initValue={useCVProfile?.field}
              />
              <SearchSelect
                onSelect={(option: Option) => {
                  setUseCVProfile({ ...useCVProfile, major: option });
                }}
                label="Chọn ngành nghề"
                options={majors}
                initValue={useCVProfile?.major}
              />
              <SearchSelect
                onSelect={(option: Option) => {
                  setUseCVProfile({ ...useCVProfile, workLocation: option });
                }}
                label="Chọn nơi làm việc"
                options={locations}
                initValue={useCVProfile?.workLocation}
              />
              <Button
                onClick={handleUpdateProfile}
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
      )}
    </div>
  );
}
