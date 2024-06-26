import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Divider from "@mui/material/Divider";
import { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import CvCard from "./CvCard";
import CvLibContainer from "./CvLibContainer";
import { Link } from "react-router-dom";
import { openModal } from "@store/modal";
import { modalName } from "@data/constants";
import { useDispatch } from "react-redux";
import { getAccessToken } from "@utils/authUtils";
import api from "@utils/axios";

export default function CvLib() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [cvList, setCvList] = useState([]);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const dispatch = useDispatch();
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onUploadCvHanlder = () => {
    setAnchorEl(null);
    dispatch(openModal({ modalName: modalName.UPLOAD_CV_MODAL }));
  };

  useEffect(() => {
    const fetchCv = async () => {
      try {
        const res = await api.get("/cv/user", {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        });
        setCvList(res.data.data.cvs);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCv();
  }, []);

  return (
    <div>
      <div className="flex item-center justify-between mb-2">
        <Typography
          variant="subtitle1"
          component="p"
          sx={{ fontWeight: 600 }}
          className="text-gray-400"
        >
          CV đã lưu
        </Typography>
        <div>
          <Button
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            startIcon={<AddRoundedIcon />}
            size="small"
            color="primary"
            variant="contained"
          >
            Tạo mới
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>
              <Link to={"/create-cv"}>Tạo CV từ Jobhunt</Link>
            </MenuItem>
            <MenuItem onClick={onUploadCvHanlder}>Tải CV lên</MenuItem>
          </Menu>
        </div>
      </div>
      <Divider />
      <CvLibContainer>
        {cvList.map((cv: any) => (
          <CvCard key={cv.id} name={cv.name} default={cv.isDefault} upload />
        ))}
      </CvLibContainer>
    </div>
  );
}
