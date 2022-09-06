import FormRegister from "../../components/formRegister";
import { DivBackground } from "../Login/styles";

import { motion } from "framer-motion";

const Register = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <DivBackground>
        <FormRegister />
      </DivBackground>
    </motion.div>
  );
};

export default Register;
