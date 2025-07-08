'use client';

import { motion, AnimatePresence } from 'framer-motion';

export default function CookieModal({ onClose }) {
  return (
    <AnimatePresence>
      <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{ zIndex: 1050 }}>
        {/* BACKDROP */}
        <motion.div
          className="position-absolute top-0 start-0 w-100 h-100 bg-dark"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
        />

        {/* MODAL CONTENT */}
        <motion.div
          className="bg-white rounded p-4 shadow-lg text-center position-relative"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h5 className="mb-3">Este site utiliza cookies</h5>
          <p className="mb-4">
            Usamos cookies para melhorar a sua experiência. <br/> Ao continuar, aceita a nossa <a href='/cookies' target='_blank' className='color-brand-1'>política de cookies</a>.
          </p>
          <button onClick={onClose} className="btn btn-default w-100">
            Aceitar e continuar
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
