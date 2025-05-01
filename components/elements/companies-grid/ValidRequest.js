import { motion, AnimatePresence } from "framer-motion";

export default function ValidRequest({ setShowValidRequest }) {

  return (
    <AnimatePresence>
      <motion.div
        className="company-form-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="company-form-wrapper" style={{ width: "auto", maxWidth: "none" }}>
          <button
            className="company-form-close"
            style={{ top: "10px", right: "10px"}}
            onClick={() => setShowValidRequest(false)}
          >
            &times;
          </button>

          <form className="company-form">
            <div className="company-form-title mt-4">O seu formulário foi enviado!</div>
            <div className="company-form-desc">Entraremos em contacto consigo via email ou telefone.</div>
            <div className="company-form-thanks">Obrigado!</div>
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}