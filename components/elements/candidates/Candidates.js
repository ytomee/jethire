import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';

export default function Candidates({ users }) {
  return (
    <div className="row">
      <AnimatePresence>
        {users.map((user, index) => (
          <motion.div
            key={user._id}
            className="col-xl-3 col-lg-6 col-md-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.2, 
              ease: "easeOut", 
              delay: index * 0.05
            }}
          >
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd">
                  <Link legacyBehavior href={`profile/${user._id}`}>
                    <a>
                      <figure>
                        {user.profile.pfp ? (
                          <img src={user.profile.pfp} />
                        ) : (
                          <img src="assets/imgs/default/user.png" />
                        )}
                      </figure>
                    </a>
                  </Link>
                </div>
                <div className="card-profile pt-10">
                  <Link legacyBehavior href={`profile/${user._id}`}>
                    <a>
                      <h5 style={{ textTransform: "capitalize" }}>{user.name}</h5>
                    </a>
                  </Link>
                  <span className="font-xs color-text-mutted">
                    {user.profile.role || "À procura de emprego"}
                  </span>
                </div>
              </div>

              <div className="card-block-info">
                <div>
                  {user.profile.aboutMeShort
                    ? user.profile.aboutMeShort.length > 120
                      ? user.profile.aboutMeShort.substring(0, 120) + '...'
                      : user.profile.aboutMeShort
                    : 'Sem descrição.'
                  }
                </div>

                <div>
                  {user.profile.skills?.length > 0 && (
                    <div className="card-2-bottom card-2-bottom-candidate mt-20">
                      <div className="skills-wrapper">
                        {user.profile.skills
                          .sort((a, b) => b.value - a.value)
                          .slice(0, 4)
                          .map((skill, index) => (
                            <Link legacyBehavior href="/jobs-grid" key={index}>
                              <a className="btn btn-tags-sm mb-10 mr-5">{skill.name}</a>
                            </Link>
                          ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="employers-info">
                  <div className="row">
                    {user.profile.city ? (
                      <>
                        <div className="col-7">
                          <span className="city-info">
                            {user.profile.city}
                            {user.profile.country && `, ${user.profile.country}`}
                          </span>
                        </div>
                        <div className="col-5">
                          <span className="d-flex justify-content-end align-items-center">
                            <a
                              className="btn btn-apply-now"
                              href={`profile/${user._id}`}
                              style={{ width: "100%" }}
                            >
                              Ver perfil
                            </a>
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="col-12">
                        <span className="d-flex justify-content-end align-items-center">
                          <a
                            className="btn btn-apply-now"
                            href={`profile/${user._id}`}
                            style={{ width: "100%" }}
                          >
                            Ver perfil
                          </a>
                        </span>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
