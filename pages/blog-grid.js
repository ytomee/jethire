import Link from "next/link";
import Layout from "../components/Layout/Layout";

export default function BlogGrid() {
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box">
                        <div className="breacrumb-cover">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-12">
                                        <h2 className="mb-10">Blog</h2>
                                        <p className="font-lg color-text-paragraph-2">Tem acesso ás últimas notícias e dicas dos nossos membros!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="card-grid-5">
                                        <div className="card-grid-5 hover-up" style={{ backgroundImage: 'url("assets/imgs/page/blog/img-big1.png")' }}>
                                            <Link legacyBehavior href="blog-details">
                                                <a>
                                                    <div className="box-cover-img">
                                                        <div className="content-bottom">
                                                            <h3 className="color-white mb-20">11 Tips to Help You Get New Clients</h3>
                                                            <div className="author d-flex align-items-center mr-20">
                                                                <img className="mr-10"  src="assets/imgs/page/candidates/user3.png" />
                                                                <span className="color-white font-sm mr-25">Azumi Rose</span>
                                                                <span className="color-white font-sm">25 April 2022</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="card-grid-5 hover-up" style={{ backgroundImage: 'url("assets/imgs/page/blog/img-big2.png")' }}>
                                        <Link legacyBehavior href="blog-details">
                                            <a>
                                                <div className="box-cover-img">
                                                    <div className="content-bottom">
                                                        <h3 className="color-white mb-20">Recruiter and Land Your Dream Job</h3>
                                                        <div className="author d-flex align-items-center mr-20">
                                                            <img className="mr-10"  src="assets/imgs/page/candidates/user1.png" />
                                                            <span className="color-white font-sm mr-25">Thompson</span>
                                                            <span className="color-white font-sm">28 April 2022</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="card-grid-5 hover-up" style={{ backgroundImage: 'url("assets/imgs/page/blog/img-big3.png")' }}>
                                        <Link legacyBehavior href="blog-details">
                                            <a>
                                                <div className="box-cover-img">
                                                    <div className="content-bottom">
                                                        <h3 className="color-white mb-20">Work-From-Home Jobs That Pay Well</h3>
                                                        <div className="author d-flex align-items-center mr-20">
                                                            <img className="mr-10"  src="assets/imgs/page/blog/ava_1.png" />
                                                            <span className="color-white font-sm mr-25">Alice Json</span>
                                                            <span className="color-white font-sm">29 April 2022</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-50">
                        <div className="post-loop-grid">
                            <div className="container">
                                <div className="text-left">
                                    <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Publicações recentes</h2>
                                    <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Não percas as publicações mais recentes!</p>
                                </div>
                                <div className="row mt-30">
                                    <div className="col-lg-8">
                                        <div className="row">
                                            <div className="col-lg-6 mb-30">
                                                <div className="card-grid-3 hover-up">
                                                    <div className="text-center card-grid-3-image">
                                                        <Link legacyBehavior href="blog-details">
                                                            <a>
                                                                <figure>
                                                                    <img  src="assets/imgs/page/blog/img1.png" />
                                                                </figure>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <div className="tags mb-15">
                                                            <Link legacyBehavior href="blog-grid">
                                                                <a className="btn btn-tag">News</a>
                                                            </Link>
                                                        </div>
                                                        <h5>
                                                            <Link legacyBehavior href="blog-details">
                                                                <a>21 Job Interview Tips: How To Make a Great Impression</a>
                                                            </Link>
                                                        </h5>
                                                        <p className="mt-10 color-text-paragraph font-sm">Our mission is to create the world&amp;rsquo;s most sustainable hehcare company by creating high-quality hehcare products in iconic, sustainable packaging.</p>
                                                        <div className="card-2-bottom mt-20">
                                                            <div className="row">
                                                                <div className="col-lg-6 col-6">
                                                                    <div className="d-flex">
                                                                        <img className="img-rounded" src="assets/imgs/page/homepage1/user1.png" />
                                                                        <div className="info-right-img">
                                                                            <span className="font-sm font-bold color-brand-1 op-70">Azumi Rose</span>
                                                                            <br />
                                                                            <span className="font-xs color-text-paragraph-2">25 April 2022</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 text-end col-6 pt-15">
                                                                    <span className="color-text-paragraph-2 font-xs">8 mins to read</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-30">
                                                <div className="card-grid-3 hover-up">
                                                    <div className="text-center card-grid-3-image">
                                                        <Link legacyBehavior href="blog-details">
                                                            <a>
                                                                <figure>
                                                                    <img  src="assets/imgs/page/blog/img2.png" />
                                                                </figure>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <div className="tags mb-15">
                                                            <Link legacyBehavior href="blog-grid">
                                                                <a className="btn btn-tag">Events</a>
                                                            </Link>
                                                        </div>
                                                        <h5>
                                                            <Link legacyBehavior href="blog-details">
                                                                <a>Email Examples: How To Respond to Employer Interview Requests</a>
                                                            </Link>
                                                        </h5>
                                                        <p className="mt-10 color-text-paragraph font-sm">Our mission is to create the world&amp;rsquo;s most sustainable hehcare company by creating high-quality hehcare products in iconic, sustainable packaging.</p>
                                                        <div className="card-2-bottom mt-20">
                                                            <div className="row">
                                                                <div className="col-lg-6 col-6">
                                                                    <div className="d-flex">
                                                                        <img className="img-rounded" src="assets/imgs/page/homepage1/user2.png" />
                                                                        <div className="info-right-img">
                                                                            <span className="font-sm font-bold color-brand-1 op-70">Azumi Rose</span>
                                                                            <br />
                                                                            <span className="font-xs color-text-paragraph-2">25 April 2022</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 text-end col-6 pt-15">
                                                                    <span className="color-text-paragraph-2 font-xs">8 mins to read</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-30">
                                                <div className="card-grid-3 hover-up">
                                                    <div className="text-center card-grid-3-image">
                                                        <Link legacyBehavior href="blog-details">
                                                            <a>
                                                                <figure>
                                                                    <img  src="assets/imgs/page/blog/img3.png" />
                                                                </figure>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <div className="tags mb-15">
                                                            <Link legacyBehavior href="blog-grid">
                                                                <a className="btn btn-tag">Events</a>
                                                            </Link>
                                                        </div>
                                                        <h5>
                                                            <Link legacyBehavior href="blog-details">
                                                                <a>How To Write an Application Letter (With Examples)</a>
                                                            </Link>
                                                        </h5>
                                                        <p className="mt-10 color-text-paragraph font-sm">Our mission is to create the world&amp;rsquo;s most sustainable hehcare company by creating high-quality hehcare products in iconic, sustainable packaging.</p>
                                                        <div className="card-2-bottom mt-20">
                                                            <div className="row">
                                                                <div className="col-lg-6 col-6">
                                                                    <div className="d-flex">
                                                                        <img className="img-rounded" src="assets/imgs/page/homepage1/user3.png" />
                                                                        <div className="info-right-img">
                                                                            <span className="font-sm font-bold color-brand-1 op-70">Azumi Rose</span>
                                                                            <br />
                                                                            <span className="font-xs color-text-paragraph-2">25 April 2022</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 text-end col-6 pt-15">
                                                                    <span className="color-text-paragraph-2 font-xs">8 mins to read</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-30">
                                                <div className="card-grid-3 hover-up">
                                                    <div className="text-center card-grid-3-image">
                                                        <Link legacyBehavior href="blog-details">
                                                            <a>
                                                                <figure>
                                                                    <img  src="assets/imgs/page/homepage1/img-news1.png" />
                                                                </figure>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <div className="tags mb-15">
                                                            <Link legacyBehavior href="blog-grid">
                                                                <a className="btn btn-tag">Events</a>
                                                            </Link>
                                                        </div>
                                                        <h5>
                                                            <Link legacyBehavior href="blog-details">
                                                                <a>17 jobs hired at 15 (and even 14) you should know</a>
                                                            </Link>
                                                        </h5>
                                                        <p className="mt-10 color-text-paragraph font-sm">Our mission is to create the world&amp;rsquo;s most sustainable hehcare company by creating high-quality hehcare products in iconic, sustainable packaging.</p>
                                                        <div className="card-2-bottom mt-20">
                                                            <div className="row">
                                                                <div className="col-lg-6 col-6">
                                                                    <div className="d-flex">
                                                                        <img className="img-rounded" src="assets/imgs/page/about/user1.png" />
                                                                        <div className="info-right-img">
                                                                            <span className="font-sm font-bold color-brand-1 op-70">Azumi Rose</span>
                                                                            <br />
                                                                            <span className="font-xs color-text-paragraph-2">25 April 2022</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 text-end col-6 pt-15">
                                                                    <span className="color-text-paragraph-2 font-xs">8 mins to read</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-30">
                                                <div className="card-grid-3 hover-up">
                                                    <div className="text-center card-grid-3-image">
                                                        <Link legacyBehavior href="blog-details">
                                                            <a>
                                                                <figure>
                                                                    <img  src="assets/imgs/page/homepage1/img-news2.png" />
                                                                </figure>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <div className="tags mb-15">
                                                            <Link legacyBehavior href="blog-grid">
                                                                <a className="btn btn-tag">Events</a>
                                                            </Link>
                                                        </div>
                                                        <h5>
                                                            <Link legacyBehavior href="blog-details">
                                                                <a>How To Write a Cover Letter (Plus Tips and Examples)</a>
                                                            </Link>
                                                        </h5>
                                                        <p className="mt-10 color-text-paragraph font-sm">Our mission is to create the world&amp;rsquo;s most sustainable hehcare company by creating high-quality hehcare products in iconic, sustainable packaging.</p>
                                                        <div className="card-2-bottom mt-20">
                                                            <div className="row">
                                                                <div className="col-lg-6 col-6">
                                                                    <div className="d-flex">
                                                                        <img className="img-rounded" src="assets/imgs/page/about/user2.png" />
                                                                        <div className="info-right-img">
                                                                            <span className="font-sm font-bold color-brand-1 op-70">Azumi Rose</span>
                                                                            <br />
                                                                            <span className="font-xs color-text-paragraph-2">25 April 2022</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 text-end col-6 pt-15">
                                                                    <span className="color-text-paragraph-2 font-xs">8 mins to read</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-30">
                                                <div className="card-grid-3 hover-up">
                                                    <div className="text-center card-grid-3-image">
                                                        <Link legacyBehavior href="blog-details">
                                                            <a>
                                                                <figure>
                                                                    <img  src="assets/imgs/page/homepage1/img-news3.png" />
                                                                </figure>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <div className="tags mb-15">
                                                            <Link legacyBehavior href="blog-grid">
                                                                <a className="btn btn-tag">Events</a>
                                                            </Link>
                                                        </div>
                                                        <h5>
                                                            <Link legacyBehavior href="blog-details">
                                                                <a>10 Best Skills To Include on a Resume in 2022</a>
                                                            </Link>
                                                        </h5>
                                                        <p className="mt-10 color-text-paragraph font-sm">Our mission is to create the world&amp;rsquo;s most sustainable hehcare company by creating high-quality hehcare products in iconic, sustainable packaging.</p>
                                                        <div className="card-2-bottom mt-20">
                                                            <div className="row">
                                                                <div className="col-lg-6 col-6">
                                                                    <div className="d-flex">
                                                                        <img className="img-rounded" src="assets/imgs/page/about/user3.png" />
                                                                        <div className="info-right-img">
                                                                            <span className="font-sm font-bold color-brand-1 op-70">Azumi Rose</span>
                                                                            <br />
                                                                            <span className="font-xs color-text-paragraph-2">25 April 2022</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 text-end col-6 pt-15">
                                                                    <span className="color-text-paragraph-2 font-xs">8 mins to read</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-30">
                                                <div className="card-grid-3 hover-up">
                                                    <div className="text-center card-grid-3-image">
                                                        <Link legacyBehavior href="blog-details">
                                                            <a>
                                                                <figure>
                                                                    <img  src="assets/imgs/page/blog/img1.png" />
                                                                </figure>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <div className="tags mb-15">
                                                            <Link legacyBehavior href="blog-grid">
                                                                <a className="btn btn-tag">Events</a>
                                                            </Link>
                                                        </div>
                                                        <h5>
                                                            <Link legacyBehavior href="blog-details">
                                                                <a>39 Strengths and Weaknesses To Discuss in a Job Interview</a>
                                                            </Link>
                                                        </h5>
                                                        <p className="mt-10 color-text-paragraph font-sm">Our mission is to create the world&amp;rsquo;s most sustainable hehcare company by creating high-quality hehcare products in iconic, sustainable packaging.</p>
                                                        <div className="card-2-bottom mt-20">
                                                            <div className="row">
                                                                <div className="col-lg-6 col-6">
                                                                    <div className="d-flex">
                                                                        <img className="img-rounded" src="assets/imgs/page/homepage1/user1.png" />
                                                                        <div className="info-right-img">
                                                                            <span className="font-sm font-bold color-brand-1 op-70">Azumi Rose</span>
                                                                            <br />
                                                                            <span className="font-xs color-text-paragraph-2">25 April 2022</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 text-end col-6 pt-15">
                                                                    <span className="color-text-paragraph-2 font-xs">8 mins to read</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-30">
                                                <div className="card-grid-3 hover-up">
                                                    <div className="text-center card-grid-3-image">
                                                        <Link legacyBehavior href="blog-details">
                                                            <a>
                                                                <figure>
                                                                    <img  src="assets/imgs/page/blog/img2.png" />
                                                                </figure>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <div className="tags mb-15">
                                                            <Link legacyBehavior href="blog-grid">
                                                                <a className="btn btn-tag">Events</a>
                                                            </Link>
                                                        </div>
                                                        <h5>
                                                            <Link legacyBehavior href="blog-details">
                                                                <a>List of Weaknesses: 10 Things To Say in an Interview</a>
                                                            </Link>
                                                        </h5>
                                                        <p className="mt-10 color-text-paragraph font-sm">Our mission is to create the world&amp;rsquo;s most sustainable hehcare company by creating high-quality hehcare products in iconic, sustainable packaging.</p>
                                                        <div className="card-2-bottom mt-20">
                                                            <div className="row">
                                                                <div className="col-lg-6 col-6">
                                                                    <div className="d-flex">
                                                                        <img className="img-rounded" src="assets/imgs/page/homepage1/user1.png" />
                                                                        <div className="info-right-img">
                                                                            <span className="font-sm font-bold color-brand-1 op-70">Azumi Rose</span>
                                                                            <br />
                                                                            <span className="font-xs color-text-paragraph-2">25 April 2022</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 text-end col-6 pt-15">
                                                                    <span className="color-text-paragraph-2 font-xs">8 mins to read</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="paginations">
                                            <ul className="pager">
                                                <li>
                                                    <a className="pager-prev" href="#" />
                                                </li>
                                                <li>
                                                    <Link legacyBehavior href="#">
                                                        <a className="pager-number">1</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior href="#">
                                                        <a className="pager-number">2</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior href="#">
                                                        <a className="pager-number">3</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior href="#">
                                                        <a className="pager-number">4</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior href="#">
                                                        <a className="pager-number">5</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior href="#">
                                                        <a className="pager-number active">6</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior href="#">
                                                        <a className="pager-number">7</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <a className="pager-next" href="#" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-40 pl-lg-15 mt-lg-30">
                                        <div className="widget_search mb-40">
                                            <div className="search-form">
                                                <form action="#">
                                                    <input type="text" className="search-blog" placeholder="Pesquisar..." />
                                                    <button type="submit">
                                                        <i className="fi-rr-search" />
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="sidebar-shadow sidebar-news-small">
                                            <h5 className="sidebar-title">Tendências</h5>
                                            <div className="post-list-small">
                                                <div className="post-list-small-item d-flex align-items-center">
                                                    <figure className="thumb mr-15">
                                                        <a href="/blog-details">
                                                            <img src="assets/imgs/page/blog/img-trending.png"  />
                                                        </a>
                                                    </figure>
                                                    <div className="content">
                                                        <h5>
                                                            <a href="/blog-details">How to get better agents in New York, USA</a>
                                                        </h5>
                                                        <div className="post-meta text-muted d-flex align-items-center mb-15">
                                                            <div className="author d-flex align-items-center mr-20">
                                                                <img  src="assets/imgs/page/homepage1/user1.png" />
                                                                <span>Sugar Rosie</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-list-small-item d-flex align-items-center">
                                                    <figure className="thumb mr-15">
                                                        <a href="/blog-details">
                                                            <img src="assets/imgs/page/blog/img-trending.png"  />
                                                        </a>
                                                    </figure>
                                                    <div className="content">
                                                        <h5>
                                                            <a href="/blog-details">How to get better agents in New York, USA</a>
                                                        </h5>
                                                        <div className="post-meta text-muted d-flex align-items-center mb-15">
                                                            <div className="author d-flex align-items-center mr-20">
                                                                <img  src="assets/imgs/page/homepage1/user1.png" />
                                                                <span>Sugar Rosie</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-list-small-item d-flex align-items-center">
                                                    <figure className="thumb mr-15">
                                                        <a href="/blog-details">
                                                            <img src="assets/imgs/page/blog/img-trending.png"  />
                                                        </a>
                                                    </figure>
                                                    <div className="content">
                                                        <h5>
                                                            <a href="/blog-details">How to get better agents in New York, USA</a>
                                                        </h5>
                                                        <div className="post-meta text-muted d-flex align-items-center mb-15">
                                                            <div className="author d-flex align-items-center mr-20">
                                                                <img  src="assets/imgs/page/homepage1/user1.png" />
                                                                <span>Sugar Rosie</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-list-small-item d-flex align-items-center">
                                                    <figure className="thumb mr-15">
                                                        <a href="/blog-details">
                                                            <img src="assets/imgs/page/blog/img-trending.png"  />
                                                        </a>
                                                    </figure>
                                                    <div className="content">
                                                        <h5>
                                                            <a href="/blog-details">How to get better agents in New York, USA</a>
                                                        </h5>
                                                        <div className="post-meta text-muted d-flex align-items-center mb-15">
                                                            <div className="author d-flex align-items-center mr-20">
                                                                <img  src="assets/imgs/page/homepage1/user1.png" />
                                                                <span>Sugar Rosie</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-list-small-item d-flex align-items-center">
                                                    <figure className="thumb mr-15">
                                                        <a href="/blog-details">
                                                            <img src="assets/imgs/page/blog/img-trending.png"  />
                                                        </a>
                                                    </figure>
                                                    <div className="content">
                                                        <h5>
                                                            <a href="/blog-details">How to get better agents in New York, USA</a>
                                                        </h5>
                                                        <div className="post-meta text-muted d-flex align-items-center mb-15">
                                                            <div className="author d-flex align-items-center mr-20">
                                                                <img  src="assets/imgs/page/homepage1/user1.png" />
                                                                <span>Sugar Rosie</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-list-small-item d-flex align-items-center">
                                                    <figure className="thumb mr-15">
                                                        <a href="/blog-details">
                                                            <img src="assets/imgs/page/blog/img-trending.png"  />
                                                        </a>
                                                    </figure>
                                                    <div className="content">
                                                        <h5>
                                                            <a href="/blog-details">How to get better agents in New York, USA</a>
                                                        </h5>
                                                        <div className="post-meta text-muted d-flex align-items-center mb-15">
                                                            <div className="author d-flex align-items-center mr-20">
                                                                <img  src="assets/imgs/page/homepage1/user1.png" />
                                                                <span>Sugar Rosie</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-list-small-item d-flex align-items-center">
                                                    <figure className="thumb mr-15">
                                                        <a href="/blog-details">
                                                            <img src="assets/imgs/page/blog/img-trending.png"  />
                                                        </a>
                                                    </figure>
                                                    <div className="content">
                                                        <h5>
                                                            <a href="/blog-details">How to get better agents in New York, USA</a>
                                                        </h5>
                                                        <div className="post-meta text-muted d-flex align-items-center mb-15">
                                                            <div className="author d-flex align-items-center mr-20">
                                                                <img  src="assets/imgs/page/homepage1/user1.png" />
                                                                <span>Sugar Rosie</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-list-small-item d-flex align-items-center">
                                                    <figure className="thumb mr-15">
                                                        <a href="/blog-details">
                                                            <img src="assets/imgs/page/blog/gallery1.png"  />
                                                        </a>
                                                    </figure>
                                                    <div className="content">
                                                        <h5>
                                                            <a href="/blog-details">How To Create a Resume for a Job in Social</a>
                                                        </h5>
                                                        <div className="post-meta text-muted d-flex align-items-center mb-15">
                                                            <div className="author d-flex align-items-center mr-20">
                                                                <img  src="assets/imgs/page/homepage1/user3.png" />
                                                                <span>Harding</span>
                                                            </div>
                                                            <div className="date">
                                                                <span>17 Sep</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-list-small-item d-flex align-items-center">
                                                    <figure className="thumb mr-15">
                                                        <a href="/blog-details">
                                                            <img src="assets/imgs/page/blog/gallery2.png"  />
                                                        </a>
                                                    </figure>
                                                    <div className="content">
                                                        <h5>
                                                            <a href="/blog-details">10 Ways to Avoid a Referee Disaster Zone</a>
                                                        </h5>
                                                        <div className="post-meta text-muted d-flex align-items-center mb-15">
                                                            <div className="author d-flex align-items-center mr-20">
                                                                <img  src="assets/imgs/page/homepage1/user2.png" />
                                                                <span>Steven</span>
                                                            </div>
                                                            <div className="date">
                                                                <span>23 Sep</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-list-small-item d-flex align-items-center">
                                                    <figure className="thumb mr-15">
                                                        <a href="/blog-details">
                                                            <img src="assets/imgs/page/blog/gallery4.png"  />
                                                        </a>
                                                    </figure>
                                                    <div className="content">
                                                        <h5>
                                                            <a href="/blog-details">How To Set Work-Life Boundaries From Any Location</a>
                                                        </h5>
                                                        <div className="post-meta text-muted d-flex align-items-center mb-15">
                                                            <div className="author d-flex align-items-center mr-20">
                                                                <img  src="assets/imgs/page/homepage1/user3.png" />
                                                                <span>Merias</span>
                                                            </div>
                                                            <div className="date">
                                                                <span>14 Sep</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-list-small-item d-flex align-items-center">
                                                    <figure className="thumb mr-15">
                                                        <a href="/blog-details">
                                                            <img src="assets/imgs/page/blog/gallery5.png"/>
                                                        </a>
                                                    </figure>
                                                    <div className="content">
                                                        <h5>
                                                            {" "}
                                                            <a href="/blog-details">How to Land Your Dream Marketing Job</a>
                                                        </h5>
                                                        <div className="post-meta text-muted d-flex align-items-center mb-15">
                                                            <div className="author d-flex align-items-center mr-20">
                                                                <img src="assets/imgs/page/homepage1/user1.png" />
                                                                <span>Rosie</span>
                                                            </div>
                                                            <div className="date">
                                                                <span>12 Sep</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    );
}
