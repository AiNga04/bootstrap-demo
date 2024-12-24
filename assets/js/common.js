// Thêm navber vào trang
function addNavbar() {
  document.write(`
    <nav class="navbar navbar-expand-xxl bg-light fixed-top blur-filter" id="navbar">
        <div class="container">
            <a href="index.html" class="navbar-brand">
                <img src="./img/logo.png" alt="logo" height="40" width="150">
            </a>
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false"
                aria-label="Toggle Navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar-content">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <a class="nav-item">
                        <a href="index.html" class="nav-link active" aria-current="page">Trang Chủ</a>
                    </a>
                    <a class="nav-item">
                        <a href="about.html" class="nav-link">Giới Thiệu</a>
                    </a>
                    <a class="nav-item">
                        <a href="courses.html" class="nav-link">Khóa Học</a>
                    </a>
                    <a class="nav-item">
                        <a href="faq.html" class="nav-link">Câu Hỏi Thường Gặp</a>
                    </a>
                    <a class="nav-item">
                        <a href="contact.html" class="nav-link">Liên Hệ</a>
                    </a>
                </ul>
                <div class="ms-auto me-1 d-grid d-md-block gap-2 mb-2 mb-xxl-0">
                    <a href="signup.html"
                        class="btn btn-sm btn-danger align-items-center d-inline-flex text-center justify-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-person-plus-fill me-2" viewBox="0 0 16 16">
                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                            <path fill-rule="evenodd"
                                d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z">
                            </path>
                        </svg>
                        Đăng Ký Miễn Phí
                    </a>
                    <a href="login.html"
                        class="btn btn-sm btn-warning align-items-center d-inline-flex text-center justify-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-box-arrow-in-right me-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z">
                            </path>
                            <path fill-rule="evenodd"
                                d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z">
                            </path>
                        </svg>
                        Đăng Nhập
                    </a>
                </div>
                <form class="d-flex mt-lg-0 mt-2" role="search">
                    <div class="input-group">
                        <input type="search" class="form-control form-control-sm" placeholder="Tìm kiếm khóa học...">
                        <button type="submit" class="btn btn-sm btn-success">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </nav>
        `);
}

// Thêm header vào trang
function addHeader() {
  document.write(`
        <header class="main-header py-5 mt-5">
        <section class="container">
            <div id="carouselExample" class="carousel slide carousel-custom">
                <!-- Indicators -->
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                </div>

                <!-- Slides -->
                <div class="carousel-inner" style="height: 450px;">
                    <!-- Slide 1 -->
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src="img/web-development.jpg" class="d-block w-100" alt="Khóa học HTML & CSS">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Khóa học HTML & CSS</h5>
                            <p>
                                Học cách xây dựng giao diện người dùng chuyên nghiệp với HTML5 và CSS3.
                                Bao gồm Flexbox, Grid, và thiết kế responsive.
                            </p>
                        </div>
                    </div>

                    <!-- Slide 2 -->
                    <div class="carousel-item" data-bs-interval="5000">
                        <img src="img/javascript-course.jpg" class="d-block w-100" alt="Khóa học JavaScript">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Khóa học JavaScript</h5>
                            <p>
                                Làm chủ ngôn ngữ JavaScript với các kỹ thuật hiện đại, từ ES6, DOM manipulation
                                đến Async programming và API interaction.
                            </p>
                        </div>
                    </div>

                    <!-- Slide 3 -->
                    <div class="carousel-item" data-bs-interval="5000">
                        <img src="img/react-course.jpg" class="d-block w-100" alt="Khóa học React.js">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Khóa học React.js</h5>
                            <p>
                                Xây dựng ứng dụng web mạnh mẽ với React.js, Hooks, Context API, và tích hợp Redux
                                để quản lý trạng thái phức tạp.
                            </p>
                        </div>
                    </div>

                    <!-- Slide 4 -->
                    <div class="carousel-item" data-bs-interval="5000">
                        <img src="img/backend-development.jpg" class="d-block w-100" alt="Khóa học Backend với Node.js">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Khóa học Backend với Node.js</h5>
                            <p>
                                Học cách xây dựng server mạnh mẽ với Node.js, Express.js, tích hợp cơ sở dữ liệu
                                MongoDB và triển khai ứng dụng web.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Controls -->
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    </header>
        `);
}

// Thêm liên hệ vào trang
function addContact() {
  document.write(`
            <section class="other-content py-5">
        <div class="container">
            <!-- Row top -->
            <div class="row text-center mb-4">
                <h2 class="fw-normal text-black">Kết nối với tôi qua mạng xã hội</h2>
            </div>
            <!-- Row top end -->

            <!-- Row contact -->
            <div class="row text-center">
                <!-- Facebook -->
                <div class="col-lg-3 col-md-6 col-sm-12 channel-block">
                    <div class="channel-block-one wow fadeInUp animated" data-wow-delay="00ms"
                        data-wow-duration="1500ms">
                        <div class="inner-box">
                            <a href="https://www.facebook.com/profile.php?id=100055585185477" target="_blank">
                                <figure class="icon-box">
                                    <img src="img/facebook.png" alt="facebook" class="img-fluid">
                                </figure>
                            </a>
                            <h3><a class="text-decoration-none"
                                    href="https://www.facebook.com/profile.php?id=100055585185477"
                                    target="_blank">Facebook</a></h3>
                            <p>Đừng bỏ lỡ cơ hội học hỏi và kết nối với tôi trên Facebook!</p>
                        </div>
                    </div>
                </div>

                <!-- Github -->
                <div class="col-lg-3 col-md-6 col-sm-12 channel-block">
                    <div class="channel-block-one wow fadeInUp animated" data-wow-delay="00ms"
                        data-wow-duration="1500ms">
                        <div class="inner-box">
                            <a href="https://github.com/AiNga04" target="_blank">
                                <figure class="icon-box">
                                    <img src="img/github.webp" alt="github" class="img-fluid">
                                </figure>
                            </a>
                            <h3><a class="text-decoration-none" href="https://github.com/AiNga04"
                                    target="_blank">Github</a>
                            </h3>
                            <p>Khám phá các dự án mã nguồn mở và kết nối với tôi qua GitHub!</p>
                        </div>
                    </div>
                </div>

                <!-- Instagram -->
                <div class="col-lg-3 col-md-6 col-sm-12 channel-block">
                    <div class="channel-block-one wow fadeInUp animated" data-wow-delay="00ms"
                        data-wow-duration="1500ms">
                        <div class="inner-box">
                            <a href="https://www.instagram.com/ainga_76/profilecard/?igsh=cDY2N2RkNncycjZt"
                                target="_blank">
                                <figure class="icon-box">
                                    <img src="img/instagram.png" alt="instagram" class="img-fluid">
                                </figure>
                            </a>
                            <h3><a class="text-decoration-none"
                                    href="https://www.instagram.com/ainga_76/profilecard/?igsh=cDY2N2RkNncycjZt"
                                    target="_blank">Instagram</a></h3>
                            <p>Theo dõi những cập nhật mới nhất và kết nối qua Instagram!</p>
                        </div>
                    </div>
                </div>

                <!-- LinkedIn -->
                <div class="col-lg-3 col-md-6 col-sm-12 channel-block">
                    <div class="channel-block-one wow fadeInUp animated" data-wow-delay="00ms"
                        data-wow-duration="1500ms">
                        <div class="inner-box">
                            <a href="https://www.linkedin.com/in/nga-tr%C6%B0%C6%A1ng-bb62202ab/" target="_blank">
                                <figure class="icon-box">
                                    <img src="img/linkedin.png" alt="Linked in" class="img-fluid">
                                </figure>
                            </a>
                            <h3><a class="text-decoration-none"
                                    href="https://www.linkedin.com/in/nga-tr%C6%B0%C6%A1ng-bb62202ab/"
                                    target="_blank">Linked
                                    in</a></h3>
                            <p>Đừng bỏ lỡ cơ hội học hỏi và kết nối với tôi qua LinkedIn!</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Row contact end -->
        </div>
    </section>`);
}

// Thêm footer vào trang
function addFooter() {
  document.write(`
        <footer class="bg-dark text-white py-5" id="footer">
        <div class="container">
            <div class="row">
                <!-- About Us -->
                <div class="col-lg-3 col-md-6 mb-4">
                    <h6 class="text-uppercase fw-bold mb-4">Giới thiệu</h6>
                    <p>Chúng tôi cung cấp các khóa học trực tuyến chất lượng cao giúp bạn phát triển kỹ năng và sự
                        nghiệp
                        trong lĩnh vực công nghệ thông tin.</p>
                </div>

                <!-- Products -->
                <div class="col-lg-3 col-md-6 mb-4">
                    <h6 class="text-uppercase fw-bold mb-4">Về Ái Nga</h6>
                    <p><i class="fas fa-info-circle me-3"></i><a href="./introduce.html" class="text-decoration-none text-reset">Giới
                            thiệu</a></p>
                    <p><i class="fa-regular fa-user me-3"></i><a href="https://ainga04.github.io/profile/index.html"
                            class="text-reset text-decoration-none">Hồ sơ</a></p>
                    <p><i class="fa-solid fa-person-chalkboard me-2"></i><a href="./instruct.html"
                            class="text-reset text-decoration-none">Hướng dẫn</a></p>
                </div>

                <!-- Useful Links -->
                <div class="col-lg-3 col-md-6 mb-4">
                    <h6 class="text-uppercase fw-bold mb-4">Liên kết hữu ích</h6>
                    <p><i class="fas fa-link me-3"></i><a href="about.html" class="text-decoration-none text-reset">Giới thiệu</a></p>
                    <p><i class="fas fa-shield-alt me-3"></i><a href="policy.html" class="text-decoration-none text-reset">Chính sách bảo
                            mật</a></p>
                    <p><i class="fas fa-life-ring me-3"></i><a href="support.html" class="text-decoration-none text-reset">Hỗ trợ</a></p>
                </div>

                <!-- Contact -->
                <div class="col-lg-3 col-md-6 mb-4">
                    <h6 class="text-uppercase fw-bold mb-4">Liên hệ</h6>
                    <p><i class="fas fa-map-marker-alt me-3"></i>Hồ Chí Minh, Việt Nam</p>
                    <p><i class="fas fa-envelope me-3"></i><a href="mailto:ainga01012004@gmail.com"
                            class="text-decoration-none text-reset">ainga01012004@gmail.com</a></p>
                    <p><i class="fas fa-phone-alt me-3"></i><a href="tel:+84376600545" class="text-decoration-none text-reset">+84 376 600
                            545</a></p>
                </div>
            </div>

            <!-- Row 3: Copyright -->
            <div class="row">
                <div class="col text-center">
                    <p class="mb-0">&copy; 2024 Ái Nga. Tất cả các quyền được bảo lưu.</p>
                </div>
            </div>
        </div>
    </footer>`);
}
