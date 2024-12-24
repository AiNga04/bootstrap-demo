// Thêm khóa học vào trang
function addCourses() {
  document.write(`
                <section class="course py-5 bg-light">
            <div class="container">
                <!-- Row Top -->
                <div class="row mb-4">
                    <div class="col text-center">
                        <h2 class="fw-normal text-black">Danh Sách Khóa Học</h2>
                        <p class="text-muted">Khám phá các khóa học phổ biến nhất và phù hợp với nhu cầu của bạn.</p>
                        <a href="courses.html"
                            class="btn btn-sm btn-success d-inline-flex align-items-center justify-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-mortarboard-fill me-2" viewBox="0 0 16 16">
                                <path
                                    d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                                <path
                                    d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                            </svg>
                            View all courses
                        </a>
                    </div>
                </div>
                <!-- Row Top End -->

                <!-- Row Course -->
                <div class="row">
                    <!-- Col Left -->
                    <div class="col-lg-3 mb-4">
                        <h5 class="text-black fw-normal mb-3">Thể loại khóa học</h5>
                        <div class="list-group">
                            <a href="#"
                                class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                Miễn phí
                                <span class="badge p-2 small rounded-pill text-bg-warning">1</span>
                            </a>
                            <a href="#"
                                class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                Phổ biến
                                <span class="badge p-2 small rounded-pill text-bg-warning">1</span>
                            </a>
                            <a href="#"
                                class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                Nỗi bật
                                <span class="badge p-2 small rounded-pill text-bg-warning">6</span>
                            </a>
                            <a href="#"
                                class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                Mới
                                <span class="badge p-2 small rounded-pill text-bg-warning">2</span>
                            </a>
                        </div>

                        <h5 class="text-black fw-normal mt-4 mb-3">Khóa học theo chủ đề</h5>
                        <div class="list-group">
                            <a href="#"
                                class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                Thiết kế
                                <span class="badge p-2 small rounded-pill text-bg-warning">1</span>
                            </a>
                            <a href="#"
                                class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                Front-end
                                <span class="badge p-2 small rounded-pill text-bg-warning">8</span>
                            </a>
                            <a href="#"
                                class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                Back-end
                                <span class="badge p-2 small rounded-pill text-bg-warning">1</span>
                            </a>
                        </div>
                    </div>
                    <!-- Col Left End -->

                    <!-- Col Right -->
                    <div class="col-lg-9">
                        <!-- Header -->
                        <div
                            class="text-black h5 fw-normal mb-3 bg-body-tertiary list-group-item d-flex justify-content-between align-items-center">
                            Danh Sách Khóa Học
                            <span class="badge p-2 small rounded-pill text-bg-warning">10 Khóa học</span>
                        </div>

                        <!-- Courses Grid -->
                        <div class="row">
                            <div class="col-md-6 mb-4">
                                <div class="card shadow-sm h-100">
                                    <img src="img/java-course.jpg" class="card-img-top" alt="Course Image">
                                    <div class="card-body">
                                        <h5 class="card-title">Khóa Học Lập Trình Java</h5>
                                        <p class="card-text text-truncate-single text-muted">Học cách lập trình ứng dụng
                                            Java từ cơ bản đến nâng
                                            cao.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <span class="badge p-2 small bg-success">Miễn Phí</span>
                                            <div class="d-flex align-items-center">
                                                <span
                                                    class="me-2 rounded-pill px-2 py-1 small d-inline-flex align-items-center"
                                                    style="background-color: #007BFF; color: white;">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" class="bi bi-star-fill me-1"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                        </path>
                                                    </svg>
                                                    4.7/5
                                                </span>
                                            </div>
                                        </div>
                                        <!-- Hiển thị giá gốc và giá sau khi giảm -->
                                        <p class="text-muted text-decoration-line-through mt-2"><strong>Giá Gốc:
                                                1,200,000 VND</strong></p>
                                        <p class="text-danger mt-2"><strong>Giá Sau Giảm: 800,000 VND</strong></p>
                                        <!-- Phần trăm giảm giá -->
                                        <p class="text-success mt-1"><strong>Giảm Giá: 33%</strong></p>
                                        <a href="./course-detail.html" class="btn btn-primary btn-sm">Chi Tiết</a>
                                    </div>
                                </div>
                            </div>

                            <!-- Course Item 2 -->
                            <div class="col-md-6 mb-4">
                                <div class="card shadow-sm h-100">
                                    <img src="img/design-react-course.jpg" class="card-img-top" alt="Course Image">
                                    <div class="card-body">
                                        <h5 class="card-title">Thiết Kế Website với React</h5>
                                        <p class="card-text text-truncate-single text-muted">Xây dựng website hiện đại
                                            và chuyên nghiệp với React.
                                        </p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <span class="badge p-2 small bg-warning">Phổ Biến</span>
                                            <div class="d-flex align-items-center">
                                                <span
                                                    class="me-2 rounded-pill px-2 py-1 small d-inline-flex align-items-center"
                                                    style="background-color: #007BFF; color: white;">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" class="bi bi-star-fill me-1"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                        </path>
                                                    </svg>
                                                    4.8/5
                                                </span>
                                            </div>
                                        </div>
                                        <!-- Giá gốc và giá sau khi giảm -->
                                        <p class="text-muted text-decoration-line-through mt-2"><strong>Giá Gốc: 600,000
                                                VND</strong></p>
                                        <p class="text-danger mt-2"><strong>Giá Sau Giảm: 500,000 VND</strong></p>
                                        <!-- Phần trăm giảm giá -->
                                        <p class="text-success mt-1"><strong>Giảm Giá: 16.7%</strong></p>
                                        <a href="./course-detail.html" class="btn btn-primary btn-sm">Chi Tiết</a>
                                    </div>
                                </div>
                            </div>

                            <!-- Course Item 3 -->
                            <div class="col-md-6 mb-4">
                                <div class="card shadow-sm h-100">
                                    <img src="img/html-course.jpg" class="card-img-top" alt="HTML Course">
                                    <div class="card-body">
                                        <h5 class="card-title">Khóa Học HTML Cơ Bản</h5>
                                        <p class="card-text text-truncate-single text-muted">Làm quen với cấu trúc cơ
                                            bản của trang web và các thẻ
                                            HTML.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <span class="badge p-2 small bg-danger">Nổi bật</span>
                                            <div class="d-flex align-items-center">
                                                <span
                                                    class="me-2 rounded-pill px-2 py-1 small d-inline-flex align-items-center"
                                                    style="background-color: #007BFF; color: white;">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" class="bi bi-star-fill me-1"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                        </path>
                                                    </svg>
                                                    4.5/5
                                                </span>
                                            </div>
                                        </div>
                                        <!-- Giá gốc và giá sau khi giảm -->
                                        <p class="text-muted text-decoration-line-through mt-2"><strong>Giá Gốc: 400,000
                                                VND</strong></p>
                                        <p class="text-danger mt-2"><strong>Giá Sau Giảm: 0 VND</strong></p>
                                        <!-- Phần trăm giảm giá -->
                                        <p class="text-success mt-1"><strong>Giảm Giá: 100%</strong></p>
                                        <a href="./course-detail.html" class="btn btn-primary btn-sm">Chi Tiết</a>
                                    </div>
                                </div>
                            </div>

                            <!-- Course Item 4 -->
                            <div class="col-md-6 mb-4">
                                <div class="card shadow-sm h-100">
                                    <img src="img/css-course.jpg" class="card-img-top" alt="CSS Course">
                                    <div class="card-body">
                                        <h5 class="card-title">Khóa Học CSS & SCSS</h5>
                                        <p class="card-text text-truncate-single text-muted">Tạo các trang web đẹp mắt
                                            bằng CSS và SCSS.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <span class="badge p-2 small bg-danger">Nổi bật</span>
                                            <div class="d-flex align-items-center">
                                                <span
                                                    class="me-2 rounded-pill px-2 py-1 small d-inline-flex align-items-center"
                                                    style="background-color: #007BFF; color: white;">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" class="bi bi-star-fill me-1"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                        </path>
                                                    </svg>
                                                    4.9/5
                                                </span>
                                            </div>
                                        </div>
                                        <!-- Giá gốc và giá sau khi giảm -->
                                        <p class="text-muted text-decoration-line-through mt-2"><strong>Giá Gốc: 500,000
                                                VND</strong></p>
                                        <p class="text-danger mt-2"><strong>Giá Sau Giảm: 400,000 VND</strong></p>
                                        <!-- Phần trăm giảm giá -->
                                        <p class="text-success mt-1"><strong>Giảm Giá: 20%</strong></p>
                                        <a href="./course-detail.html" class="btn btn-primary btn-sm">Chi Tiết</a>
                                    </div>
                                </div>
                            </div>

                            <!-- Course Item 5 -->
                            <div class="col-md-6 mb-4">
                                <div class="card shadow-sm h-100">
                                    <img src="img/js-course.jpg" class="card-img-top" alt="JavaScript Course">
                                    <div class="card-body">
                                        <h5 class="card-title">Khóa Học JavaScript</h5>
                                        <p class="card-text text-truncate-single text-muted">Học lập trình JavaScript từ
                                            cơ bản đến nâng cao.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <span class="badge p-2 small bg-danger">Nổi bật</span>
                                            <div class="d-flex align-items-center">
                                                <span
                                                    class="me-2 rounded-pill px-2 py-1 small d-inline-flex align-items-center"
                                                    style="background-color: #007BFF; color: white;">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" class="bi bi-star-fill me-1"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                        </path>
                                                    </svg> 4.7/5
                                                </span>
                                            </div>
                                        </div>
                                        <!-- Giá gốc và giá sau khi giảm -->
                                        <p class="text-muted text-decoration-line-through mt-2"><strong>Giá Gốc: 900,000
                                                VND</strong></p>
                                        <p class="text-danger mt-2"><strong>Giá Sau Giảm: 700,000 VND</strong></p>
                                        <!-- Phần trăm giảm giá -->
                                        <p class="text-success mt-1"><strong>Giảm Giá: 22.2%</strong></p>
                                        <a href="./course-detail.html" class="btn btn-primary btn-sm">Chi Tiết</a>
                                    </div>
                                </div>
                            </div>

                            <!-- Course Item 6 -->
                            <div class="col-md-6 mb-4">
                                <div class="card shadow-sm h-100">
                                    <img src="img/bootstrap-course.png" class="card-img-top" alt="Bootstrap Course">
                                    <div class="card-body">
                                        <h5 class="card-title">Khóa Học Bootstrap</h5>
                                        <p class="card-text text-truncate-single text-muted">Làm quen với Bootstrap,
                                            thiết kế giao diện responsive.
                                        </p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <span class="badge p-2 small bg-danger">Nổi bật</span>
                                            <div class="d-flex align-items-center">
                                                <span
                                                    class="me-2 rounded-pill px-2 py-1 small d-inline-flex align-items-center"
                                                    style="background-color: #007BFF; color: white;">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" class="bi bi-star-fill me-1"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                        </path>
                                                    </svg> 4.6/5
                                                </span>
                                            </div>
                                        </div>
                                        <!-- Giá gốc và giá sau khi giảm -->
                                        <p class="text-muted text-decoration-line-through mt-2"><strong>Giá Gốc: 700,000
                                                VND</strong></p>
                                        <p class="text-danger mt-2"><strong>Giá Sau Giảm: 500,000 VND</strong></p>
                                        <!-- Phần trăm giảm giá -->
                                        <p class="text-success mt-1"><strong>Giảm Giá: 29%</strong></p>
                                        <a href="./course-detail.html" class="btn btn-primary btn-sm">Chi Tiết</a>
                                    </div>
                                </div>
                            </div>

                            <!-- Course Item 7 -->
                            <div class="col-md-6 mb-4">
                                <div class="card shadow-sm h-100">
                                    <img src="img/react-course.jpg" class="card-img-top" alt="React Course">
                                    <div class="card-body">
                                        <h5 class="card-title">Khóa Học React JS</h5>
                                        <p class="card-text text-truncate-single text-muted">Xây dựng ứng dụng web động
                                            với React.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <span class="badge p-2 small bg-danger">Nổi bật</span>
                                            <div class="d-flex align-items-center">
                                                <span
                                                    class="me-2 rounded-pill px-2 py-1 small d-inline-flex align-items-center"
                                                    style="background-color: #007BFF; color: white;">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" class="bi bi-star-fill me-1"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                        </path>
                                                    </svg> 4.9/5
                                                </span>
                                            </div>
                                        </div>
                                        <!-- Giá gốc và giá sau khi giảm -->
                                        <p class="text-muted text-decoration-line-through mt-2"><strong>Giá Gốc: 850,000
                                                VND</strong></p>
                                        <p class="text-danger mt-2"><strong>Giá Sau Giảm: 600,000 VND</strong></p>
                                        <!-- Phần trăm giảm giá -->
                                        <p class="text-success mt-1"><strong>Giảm Giá: 29%</strong></p>
                                        <a href="./course-detail.html" class="btn btn-primary btn-sm">Chi Tiết</a>
                                    </div>
                                </div>
                            </div>

                            <!-- Course Item 8 -->
                            <div class="col-md-6 mb-4">
                                <div class="card shadow-sm h-100">
                                    <img src="img/html-course.jpg" class="card-img-top" alt="HTML Course">
                                    <div class="card-body">
                                        <h5 class="card-title">Khóa Học HTML Nâng Cao</h5>
                                        <p class="card-text text-truncate-single text-muted">Nâng cao kỹ năng và tối ưu
                                            mã HTML.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <span class="badge p-2 small bg-danger">Nổi bật</span>
                                            <div class="d-flex align-items-center">
                                                <span
                                                    class="me-2 rounded-pill px-2 py-1 small d-inline-flex align-items-center"
                                                    style="background-color: #007BFF; color: white;">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" class="bi bi-star-fill me-1"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                        </path>
                                                    </svg> 4.7/5
                                                </span>
                                            </div>
                                        </div>
                                        <!-- Giá gốc và giá sau khi giảm -->
                                        <p class="text-muted text-decoration-line-through mt-2"><strong>Giá Gốc: 650,000
                                                VND</strong></p>
                                        <p class="text-danger mt-2"><strong>Giá Sau Giảm: 450,000 VND</strong></p>
                                        <!-- Phần trăm giảm giá -->
                                        <p class="text-success mt-1"><strong>Giảm Giá: 31%</strong></p>
                                        <a href="./course-detail.html" class="btn btn-primary btn-sm">Chi Tiết</a>
                                    </div>
                                </div>
                            </div>

                            <!-- Course Item 9 -->
                            <div class="col-md-6 mb-4">
                                <div class="card shadow-sm h-100">
                                    <img src="img/vue-course.jpg" class="card-img-top" alt="Vue Course">
                                    <div class="card-body">
                                        <h5 class="card-title">Khóa Học Vue JS</h5>
                                        <p class="card-text text-truncate-single text-muted">Học Vue JS để phát triển
                                            ứng dụng web hiện đại.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <span class="badge p-2 small bg-primary">Mới</span>
                                            <div class="d-flex align-items-center">
                                                <span
                                                    class="me-2 rounded-pill px-2 py-1 small d-inline-flex align-items-center"
                                                    style="background-color: #007BFF; color: white;">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" class="bi bi-star-fill me-1"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                        </path>
                                                    </svg> 4.8/5
                                                </span>
                                            </div>
                                        </div>
                                        <!-- Giá gốc và giá sau khi giảm -->
                                        <p class="text-muted text-decoration-line-through mt-2"><strong>Giá Gốc:
                                                1,200,000 VND</strong></p>
                                        <p class="text-danger mt-2"><strong>Giá Sau Giảm: 800,000 VND</strong></p>
                                        <!-- Phần trăm giảm giá -->
                                        <p class="text-success mt-1"><strong>Giảm Giá: 33.3%</strong></p>
                                        <a href="./course-detail.html" class="btn btn-primary btn-sm">Chi Tiết</a>
                                    </div>
                                </div>
                            </div>

                            <!-- Course Item 10 -->
                            <div class="col-md-6 mb-4">
                                <div class="card shadow-sm h-100">
                                    <img src="img/angular-course.jpg" class="card-img-top" alt="Angular Course">
                                    <div class="card-body">
                                        <h5 class="card-title">Khóa Học Angular</h5>
                                        <p class="card-text text-truncate-single text-muted">Phát triển ứng dụng phức
                                            tạp với Angular.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <span class="badge p-2 small bg-primary">Mới</span>

                                            <div class="d-flex align-items-center">
                                                <span
                                                    class="me-2 rounded-pill px-2 py-1 small d-inline-flex align-items-center"
                                                    style="background-color: #007BFF; color: white;">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" class="bi bi-star-fill me-1"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                        </path>
                                                    </svg> 4.9/5
                                                </span>
                                            </div>
                                        </div>
                                        <!-- Giá gốc và giá sau khi giảm -->
                                        <p class="text-muted text-decoration-line-through mt-2"><strong>Giá Gốc:
                                                1,500,000 VND</strong></p>
                                        <p class="text-danger mt-2"><strong>Giá Sau Giảm: 1,100,000 VND</strong></p>
                                        <!-- Phần trăm giảm giá -->
                                        <p class="text-success mt-1"><strong>Giảm Giá: 26.7%</strong></p>
                                        <a href="./course-detail.html" class="btn btn-primary btn-sm">Chi Tiết</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <!-- Col Right End -->
            </div>
            <!-- Row Course End -->
            </div>
        </section>`);
}
