import FormLogin from "../../components/formLogin";
import { DivBackground } from "./styles";

import { motion } from "framer-motion";

const Login = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <DivBackground>
        <FormLogin />
      </DivBackground>
    </motion.div>
  );
};

export default Login;
