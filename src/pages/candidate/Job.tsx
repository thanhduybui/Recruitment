import { Banner, Filter } from "@features/candidate/filter";
import { AsideJob, FindJobMainSection } from "@features/job";
import { RightAsideLayout } from "@components/layouts";
import { MediumContainer } from "@components/ui";
import { ToastContainer } from "react-toastify";
import { toastContainerOptions } from "@utils/toastifyUtils";

export default function Job() {
  return (
    <MediumContainer>
      <Banner />
      <div>
        <ToastContainer {...toastContainerOptions} />
        <div className="w-full m-auto mb-2">
          <form>
            <Filter />
          </form>
        </div>
        <RightAsideLayout
          mt
          mainPadding
          main={<FindJobMainSection />}
          aside={<AsideJob />}
        />
      </div>
    </MediumContainer>
  );
}
