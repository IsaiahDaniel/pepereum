import { motion } from 'framer-motion';

type ModalProps = {
    children: JSX.Element;
    classNames?: any;
};

const Modal = ({ children, classNames }: ModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }} // Initial state (hidden and scaled to 0)
      animate={{ opacity: 1, scale: 1 }} // Animation state (fully visible and scaled to 1)
      transition={{ duration: 0.5 }}
      className={`z-20 px-0 py-0 w-[90%] xl:w-[800px] md:w-[700px] mx-auto h-auto absolute md:left-[25%] shadow-2xl rounded-md ${classNames && classNames}`}
    >
      { children }
    </motion.div>
  );
};

export default Modal;

// translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]
