import { useEffect } from "react";
import {
  ApprovalModal,
  CompanyDataRow,
} from "@features/admin/companyManagement";
import { useState } from "react";
import api from "@utils/axios";
import { getAccessToken } from "@utils/authUtils";
import { CircularProgress } from "@mui/material";
import Pagination from "@mui/material/Pagination";

import { useSelector } from "react-redux";
import { companyFilterTab } from "@data/constants";

import { RootState } from "@store";

export type CompanyDataRowType = {
  id?: string;
  name?: string;
  email?: string;
  isVerified?: boolean;
  isHead?: boolean;
};

export type ApprovalModalType = {
  isVerified?: boolean;
  businessLicense?: string;
  id?: string;
};

const { NOT_VERIFIED, VERIFIED } = companyFilterTab;

export default function CompanyDataList() {
  const [companies, setCompanies] = useState<CompanyDataRowType[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [_, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const filterIndex: number = useSelector(
    (state: RootState) => state.companyFilterTab.tabIndex
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [companyData, setCompanyData] = useState<ApprovalModalType>();
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        let url = "";
        if (filterIndex === NOT_VERIFIED) {
          url = "/companies/admin?verified=false";
        } else if (filterIndex === VERIFIED) {
          url = "/companies/admin?verified=true";
        }

        const res = await api.get(`${url}`, {
          headers: { Authorization: "Bearer " + getAccessToken() },
        });

        const { listData, currentPage, totalPages } = res.data.data.companies;
        setTotalPages(totalPages);
        setCurrentPage(currentPage);
        setCompanies(listData);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, [filterIndex]);

  const handleOnCloseModal = () => {
    setIsModalOpen(false);
  };

  const openModalHandler = async (id: string) => {
    setIsModalOpen(true);
    try {
      const res = await api.get(`/companies/${id}`, {
        headers: { Authorization: "Bearer " + getAccessToken() },
      });

      setCompanyData(res.data.data.company);
    } catch (e) {
      console.error(e);
    }
  };

  const reloadListHandler = () => {
    console.log("reload");
    setReload(!reload);
  };

  return (
    <>
      {isModalOpen && (
        <ApprovalModal
          onCloseModal={handleOnCloseModal}
          data={companyData}
          reloadList={reloadListHandler}
        />
      )}
      <div className="flex flex-col gap-2 mt-4 mb-10 overflow-x-auto">
        <CompanyDataRow
          isHead={true}
          id="ID"
          name="Tên"
          email="Email"
          isVerified="Trạng thái"
        />
        {loading && <CircularProgress />}
        {!loading &&
          companies.map((company) => (
            <CompanyDataRow
              key={company.id}
              name={company.name}
              isVerified={company.isVerified ? "Đã xác thực" : "Chưa xác thực"}
              email={company.email}
              id={company.id}
              openModal={openModalHandler}
            />
          ))}

        {!loading && (!companies || companies.length === 0) && (
          <p>Chưa có công ty</p>
        )}
      </div>
      <div className="flex justify-end">
        <Pagination
          count={totalPages}
          shape="rounded"
          color="primary"
          size="medium"
        />
      </div>
    </>
  );
}
