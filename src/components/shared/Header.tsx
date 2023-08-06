import { AiOutlineMenu } from "react-icons/ai";
import { ContributeSVG, HeaderSVG, HomeSVG, TransactionsSVG } from "../icons"
import { BsWallet } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { ImUsers } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { logout } from "../../features/auth/authSlice";

type HeaderProps = {
  modalState: any;
  toggleModal: any;
  setShowMobileMenu: any;
  showMobileMenu: any;
}

const Header = ({ modalState, toggleModal, showMobileMenu, setShowMobileMenu }: HeaderProps) => {

  const [showMenuDropDown, setShowMenuDropDown] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between shadow-md bg-lightDark p-2">
      <div className="w-[85%] mx-auto flex items-center justify-between">
        <div className="hidden md:flex items-center space-x-36">
          <div className="flex items-center">
            <img src={HomeSVG} alt="" />
            <h2>Dashboard</h2>
          </div>

          <div className="flex items-center">
            <img src={ContributeSVG} alt="" />
            <h2>Contribute</h2>
          </div>


          <div className="flex items-center">
            <img src={TransactionsSVG} alt="" />
            <h2>Contribute</h2>
          </div>

          <div className="flex items-center">
            <img src={HeaderSVG} alt="" />
            <h2>Home</h2>
          </div>
        </div>

        <div onClick={() => toggleModal(true)}>
          <button className="gradient-button px-10 py-4 rounded-md cursor-pointer">
            <BsWallet />
          </button>
        </div>

        <div className="relative flex">
          <div className="cursor-pointer rounded-full flex items-center mr-3" onClick={() => setShowMenuDropDown(!showMenuDropDown)}>
            <div className="mr-3">
              <span className="bg-blue-400 rounded-full p-4 w-12 h-12">ID</span>
            </div>
            <p className="hidden md:block">Isaiah Daniel</p>
          </div>

          { showMenuDropDown && (
            <div className="absolute top-10 bg-deepDark w-48 px-10 py-5 shadow-2xl text-white">
              
              <Link to="/profile" className="flex items-center cursor-pointer mb-4">
                <ImUsers size={23} className="mr-2" />
                <p>Profile</p>
              </Link>
              <div className="flex items-center cursor-pointer" onClick={() => {
                dispatch(logout());
                navigate("/login")
              }}>
                <BiLogOut size={23} className="mr-2" />
                <p>Logout</p>
              </div>
            </div>
          ) }
          <div className="cursor-pointer md:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <AiOutlineMenu size={22} />
          </div>

        </div>

      </div>
    </header>
  );
};

export default Header;
