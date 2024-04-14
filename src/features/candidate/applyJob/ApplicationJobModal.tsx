import DescriptionIcon from "@mui/icons-material/Description";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { ListCV, UploadForm } from ".";
import { TextInput } from "@components/form";
import { CircularProgress, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import {
  ModalBackdrop,
  ModalContentContainer,
  ModalHeader,
  ScrollModalContainer,
} from "@components/ui/modal";
import { modalName } from "@data/constants";
const { APPLY_MODAL } = modalName;
import { closeModal } from "@store/modal";
import { useParams } from "react-router-dom";
import api from "@utils/axios";
import { CandidateJob } from "@data/interface";
import { getAccessToken } from "@utils/authUtils";
import { toast } from "react-toastify";
import { toastTifyOptions } from "@utils/toastifyUtils";

const formLabelStyles = {
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",
  marginBottom: "0.5rem",
};

const btnStyles = {
  position: "absolute",
  right: "0.5rem",
  top: "0.3rem",
  textTransform: "none",
};

export default function ApplicationModal() {
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  const [job, setJob] = useState<CandidateJob>();
  const [CVs, setCVs] = useState([]);
  const [chosenCVId, setChosenCVId] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const onChooseCVHandler = (id) => {
    setChosenCVId(id);
  };

  const closeHandler = () => {
    dispatch(closeModal({ modalName: APPLY_MODAL }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+event.target.value);
  };

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      try {
        const [jobRes, cvRes, profileRes] = await Promise.all([
          api.get(`/jobs/${id}`),
          api.get("/cv/user", {
            headers: {
              Authorization: `Bearer ${getAccessToken()}`,
            },
          }),
          api.get("users/profile", {
            headers: {
              Authorization: `Bearer ${getAccessToken()}`,
            },
          }),
        ]);

        setJob(jobRes.data.data.job);
        setCVs(cvRes.data.data.cvs);
        setFullName(profileRes.data.data.profile.fullName);
        setEmail(profileRes.data.data.profile.email);
        setPhone(profileRes.data.data.profile.phoneNumber);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const applyJobHandler = async () => {
    const applyData = {
      cvId: chosenCVId,
      jobId: id,
      email: email,
      phone: phone,
      name: fullName,
    };
    console.log(applyData);
    try {
      const res = await api.post(`/job-application`, applyData, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      });

      if (res.data.status === "error") {
        toast.warning(res.data.message, toastTifyOptions);
      } else {
        toast.success(res.data.message, toastTifyOptions);
      }

      dispatch(closeModal({ modalName: APPLY_MODAL }));
    } catch (err) {
      toast.error("Tạo đơn ưng tuyển thất bại", toastTifyOptions);
    }
  };

  return createPortal(
    <ModalBackdrop modalName={APPLY_MODAL}>
      <ModalContentContainer>
        <ModalHeader
          modalName={APPLY_MODAL}
          title="Ứng tuyển cho"
          textHighlight={job?.title}
        />
        <ScrollModalContainer wide>
          <Typography variant="caption">
            Điền các thông tin sau. <span className="text-error-400">(*)</span>{" "}
            là bắt buộc
          </Typography>
          <div className="w-full">
            {isLoading && <CircularProgress />}
            {!isLoading && (
              <div className="px-10">
                <div>
                  <TextInput
                    label="Tên đầy đủ"
                    type="text"
                    required
                    defaultValue={fullName}
                    inputChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-x-2 mt-4">
                  <TextInput
                    label="Số điện thoại"
                    type="phone"
                    required
                    defaultValue={phone}
                    inputChange={(e) => setPhone(e.target.value)}
                  />
                  <TextInput
                    label="Email"
                    type="email"
                    required
                    defaultValue={email}
                    inputChange={(e) => setEmail(e.target.value)}
                  />
                </div>{" "}
              </div>
            )}

            <Divider sx={{ margin: "12px 0px 12px" }} />
            <FormLabel
              id="demo-controlled-radio-buttons-group"
              sx={formLabelStyles}
            >
              <DescriptionIcon color="primary" />
              <span className="text-gray-400 font-semibold">
                Chọn CV để ứng tuyển
              </span>
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <div
                className={`relative border-2 rounded-md px-2 mb-2 ${
                  value === 1 ? "border-primary-400" : "border-gray-150"
                }`}
              >
                <FormControlLabel
                  value={1}
                  control={<Radio />}
                  label="Chọn CV mặc định: Backend Intern"
                />
                <Button color="primary" size="small" sx={btnStyles}>
                  Xem
                </Button>
              </div>
              <div
                className={`relative border-2 rounded-md px-2 mb-2 ${
                  value === 2 ? "border-primary-400" : "border-gray-150"
                }`}
              >
                <FormControlLabel
                  value={2}
                  control={<Radio />}
                  label="Chọn CV có sẳn"
                />
                {value === 2 && (
                  <ListCV CVs={CVs} onChooseCV={onChooseCVHandler} />
                )}
              </div>

              <div
                className={`relative border-2 border-dashed rounded-md px-2 mb-2 flex flex-col ${
                  value === 3 ? "border-primary-400" : "border-gray-150"
                }`}
              >
                <FormControlLabel
                  value={3}
                  control={<Radio />}
                  label="Tải CV lên"
                />
                {value === 3 && <UploadForm />}
              </div>
            </RadioGroup>
          </div>
        </ScrollModalContainer>

        <div className="flex items-center gap-3 ml-auto">
          <Button variant="outlined" color="primary" onClick={closeHandler}>
            Huỷ
          </Button>
          <Button variant="contained" color="primary" onClick={applyJobHandler}>
            Ứng tuyển
          </Button>
        </div>
      </ModalContentContainer>
    </ModalBackdrop>,
    document.getElementById("modal") as HTMLElement
  );
}
