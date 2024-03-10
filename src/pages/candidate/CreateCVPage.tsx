import { NormalSelect, TextInput } from "@components/form";
import { Box, Container, Typography } from "@mui/material";

const jobType = [
  { id: "1", name: "Fulltime" },
  { id: "2", name: "Parttime" },
];

export default function CreateCVPage() {
  return (
    <Container maxWidth="md" sx={{ marginTop: "1rem", marginBottom: "2rem" }}>
      <div className="px-10 ">
        <Box sx={{ backgroundColor: "#0572cc", padding: "0.4rem 0.8rem" }}>
          <Typography
            variant="subtitle1"
            component="h1"
            sx={{ fontWeight: 400, color: "#ffffff" }}
          >
            Cv cá nhân
          </Typography>
        </Box>
        <div className="profile flex bg-white px-[0.8rem] h-screen shadow-md py-3">
          <div className="avatar min-w-[200px]">Tải ảnh đại diện</div>
          <div className="infor flex-1 flex flex-col gap-4">
            <TextInput label="Tiêu đề CV" required></TextInput>
            <div className="flex gap-4">
              <div className="flex-1">
                <TextInput
                  label="Kinh nghiệm việc làm"
                  required
                  placeholder="1 năm/ 2 năm/ 3 năm"
                />
              </div>
              <div className="flex-1">
                <TextInput label="Học vấn" required placeholder="Kỹ sư" />
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex-1">
                <TextInput
                  label="Trình độ ngoại ngữ"
                  required
                  placeholder="TOEIC 800"
                />
              </div>
              <div className="flex-1">
                <NormalSelect
                  initValue={{ id: "0", name: "Chọn hình thức làm việc" }}
                  label="Loại hình công việc"
                  options={jobType}
                ></NormalSelect>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
