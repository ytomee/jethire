import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function UserCards() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/candidates');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="row">
      {users.map((user) => (
        <div key={user._id} className="col-xl-3 col-lg-4 col-md-6">
          <div className="card-grid-2 hover-up">
            <div className="card-grid-2-image-left">
              <div className="card-grid-2-image-rd">
                <Link legacyBehavior href={`/profile/${user._id}`}>
                  <a>
                    <figure>
                      {user.profile.pfp ? (
                          <img src={user.profile.pfp} alt="pfp" />
                      ) : (
                          <img src="/assets/imgs/default/user.png" alt="pfp" />
                      )}
                    </figure>
                  </a>
                </Link>
              </div>
              <div className="card-profile pt-10">
                <Link legacyBehavior href={`/profile/${user._id}`}>
                  <a>
                    <h5>{user.name}</h5>
                  </a>
                </Link>
                <span className="font-xs color-text-mutted">{user.profile.contactEmail}</span>
              </div>
            </div>
            <div className="card-block-info">
              {/* <div className="card-2-bottom card-2-bottom-candidate mt-30">
                <div className="text-start">
                  {user.skills.map((skill, index) => (
                    <Link key={index} legacyBehavior href="/jobs-grid">
                      <a className="btn btn-tags-sm mb-10 mr-5">{skill}</a>
                    </Link>
                  ))}
                </div>
              </div> */}
              <div className="employers-info align-items-center justify-content-center mt-15">
                <div className="row">
                  <div className="col-6">
                    <span className="d-flex align-items-center">
                      <i className="fi-rr-marker mr-5 ml-0" />
                      <span className="font-sm color-text-mutted">{user.profile.city}</span>
                    </span>
                  </div>
                  <div className="col-6">
                    <span className="d-flex justify-content-end align-items-center">
                        <a href={`/profile/${user._id}`} className="font-sm color-brand-1 mr-5">Abrir perfil</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}