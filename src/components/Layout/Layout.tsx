import React, { useState } from "react";
import Header from "../shared/Header";
import Modal from "../shared/Modal";
import { BiSolidDashboard } from "react-icons/bi";

type LayoutProps = {
  children: any;
  toggleModal: any;
  modalState: any;
};

const Layout = ({ children, toggleModal, modalState }: LayoutProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <main>
      {showMobileMenu && (
        <Modal classNames="bg-deepDark shadow-4xl top-[8%] left-4">
          <div className="flex flex-col items-center justify-between py-10">
            <div className="bg-lightDark p-5 w-[90%] flex items-center flex-wrap gap-4">
              <div className="flex">
                <BiSolidDashboard />
                <span className="text-xs">Dashboard</span>
              </div>
              <div className="flex">
                <BiSolidDashboard />
                <span className="text-xs">Dashboard</span>
              </div>
              <div className="flex">
                <BiSolidDashboard />
                <span className="text-xs">Dashboard</span>
              </div>
              <div className="flex">
                <BiSolidDashboard />
                <span className="text-xs">Dashboard</span>
              </div>
              <div className="flex">
                <BiSolidDashboard />
                <span className="text-xs">Dashboard</span>
              </div>
              <div className="flex">
                <BiSolidDashboard />
                <span className="text-xs">Dashboard</span>
              </div>
            </div>
          </div>
        </Modal>
      )}
      <Header
        toggleModal={toggleModal}
        modalState={modalState}
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      <section className="w-[85%] mx-auto">{children}</section>
    </main>
  );
};

export default Layout;
