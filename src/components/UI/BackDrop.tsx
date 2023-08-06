type BackDropType = {
    toggleBackDrop?: any;
}

const Backdrop = ({ toggleBackDrop }: BackDropType) => {

    const toggle = () => {
      toggleBackDrop(false);
    } 
  
    return (
      <div
        className={"backdrop-blur-sm h-full w-full bg-white/2 z-10 absolute top-0 left-0 right-0 bottom-0"}
        onClick={toggle}
      ></div>
    );
  };
  
  Backdrop.defaultProps = {
    show: false,
  };
  
  export default Backdrop;