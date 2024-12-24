// Thêm khóa học nỗi bật vào trang
function addCourseHot() {
  document.write(`
                        <section class="course-Nỗi bật py-4 bg-light">
            <div class="container">
                <!-- row top -->
                <div class="row text-center mb-4">
                    <h2 class="fs-3">Khóa Học Lập Trình Nổi Bật</h2>
                    <p class="text-muted">Khám phá các khóa học lập trình cơ bản và nâng cao để bắt đầu sự nghiệp lập
                        trình của bạn!</p>
                </div>
                <!-- row top end -->

                <!-- Bootstrap Carousel -->
                <div id="courseCarousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <!-- Item 1 -->
                        <div class="carousel-item active">
                            <div class="row">
                                <!-- Course: HTML -->
                                <div class="col-md-4">
                                    <div class="course-item card shadow-sm border-0 rounded">
                                        <img src="img/html-course.jpg" class="card-img-top" alt="HTML Course">
                                        <div class="card-body">
                                            <h5 class="card-title">Khóa Học HTML Cơ Bản</h5>
                                            <p class="card-text text-truncate-single text-muted">Làm quen với cấu trúc
                                                cơ bản của trang web
                                                và các thẻ HTML.</p>
                                            <a href="./course-detail.html" class="btn btn-primary">Xem Chi Tiết</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Course: CSS (SCSS) -->
                                <div class="col-md-4">
                                    <div class="course-item card shadow-sm border-0 rounded">
                                        <img src="img/css-course.jpg" class="card-img-top" alt="CSS Course">
                                        <div class="card-body">
                                            <h5 class="card-title">Khóa Học CSS & SCSS</h5>
                                            <p class="card-text text-truncate-single text-muted">Tạo các trang web đẹp
                                                mắt bằng CSS và SCSS.
                                            </p>
                                            <a href="./course-detail.html" class="btn btn-primary">Xem Chi Tiết</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Course: JavaScript -->
                                <div class="col-md-4">
                                    <div class="course-item card shadow-sm border-0 rounded">
                                        <img src="img/js-course.jpg" class="card-img-top" alt="JavaScript Course">
                                        <div class="card-body">
                                            <h5 class="card-title">Khóa Học JavaScript Cơ Bản & Nâng Cao</h5>
                                            <p class="card-text text-truncate-single text-muted">Học lập trình
                                                JavaScript từ cơ bản đến nâng
                                                cao.</p>
                                            <a href="./course-detail.html" class="btn btn-primary">Xem Chi Tiết</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Item 2 -->
                        <div class="carousel-item">
                            <div class="row">
                                <!-- Course: Bootstrap -->
                                <div class="col-md-4">
                                    <div class="course-item card shadow-sm border-0 rounded">
                                        <img src="img/bootstrap-course.png" class="card-img-top" alt="Bootstrap Course">
                                        <div class="card-body">
                                            <h5 class="card-title">Khóa Học Bootstrap</h5>
                                            <p class="card-text text-truncate-single text-muted">Làm quen với Bootstrap,
                                                thiết kế giao diện
                                                responsive.</p>
                                            <a href="./course-detail.html" class="btn btn-primary">Xem Chi Tiết</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Course: React -->
                                <div class="col-md-4">
                                    <div class="course-item card shadow-sm border-0 rounded">
                                        <img src="img/react-course.jpg" class="card-img-top" alt="React Course">
                                        <div class="card-body">
                                            <h5 class="card-title">Khóa Học React JS</h5>
                                            <p class="card-text text-truncate-single text-muted">Xây dựng ứng dụng web
                                                động với React.
                                            </p>
                                            <a href="./course-detail.html" class="btn btn-primary">Xem Chi Tiết</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Course: HTML -->
                                <div class="col-md-4">
                                    <div class="course-item card shadow-sm border-0 rounded">
                                        <img src="img/html-course.jpg" class="card-img-top" alt="HTML Course">
                                        <div class="card-body">
                                            <h5 class="card-title">Khóa Học HTML Nâng Cao</h5>
                                            <p class="card-text text-truncate-single text-muted">Nâng cao kỹ năng và tối
                                                ưu mã HTML.</p>
                                            <a href="./course-detail.html" class="btn btn-primary">Xem Chi Tiết</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Controls -->
                        <button class="carousel-control-prev" type="button" data-bs-target="#courseCarousel"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#courseCarousel"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
        </section>`);
}
