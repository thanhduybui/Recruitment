import { MainSectionContainer } from "@components/ui";
import { UserInfo } from "@components/form";
import { useEffect, useState } from "react";
import api from "@utils/axios";
import { getAccessToken } from "@utils/authUtils";
import { UserProfile } from "@features/recruiter/recuiterInfo";
import { Box, CircularProgress } from "@mui/material";

export default function Profile() {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCandidateProfile = async () => {
      try {
        setIsLoading(true);

        const res = await api.get("/users/profile", {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        });
        const profile = res.data.data.profile as UserProfile;
        setUserProfile(profile);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCandidateProfile();
  }, []);

  return (
    <MainSectionContainer heading="Thông tin cá nhân">
      <div className="w-3/4 m-auto pt-10">
        <form className="w-full flex flex-col gap-4">
          {isLoading ? (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress />
            </Box>
          ) : (
            <UserInfo profile={userProfile} />
          )}
        </form>
      </div>
    </MainSectionContainer>
  );
}
