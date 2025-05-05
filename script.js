// ===================== MENU ĐIỀU HƯỚNG =====================

// Toggle menu chính (3 gạch)
function toggleMenu() {
  const menu = document.getElementById('megaMenu');
  menu.classList.toggle('show');
}

// Toggle menu tài khoản
function toggleAccountMenu() {
  const menu = document.getElementById('accountMenu');
  menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}

// Đóng menu nếu click ra ngoài
document.addEventListener('click', function (e) {
  const megaMenu = document.getElementById('megaMenu');
  const megaButton = document.querySelector('.menu-button');
  if (megaMenu && megaButton && !megaButton.contains(e.target) && !megaMenu.contains(e.target)) {
    megaMenu.classList.remove('show');
  }

  const accountMenu = document.getElementById('accountMenu');
  const accountButton = document.querySelector('.account-button');
  if (accountMenu && accountButton && !accountButton.contains(e.target) && !accountMenu.contains(e.target)) {
    accountMenu.style.display = 'none';
  }
});


// ===================== DỮ LIỆU BÀI VIẾT =====================

const allArticles = [


  {
    title: "Tăng trưởng GDP quý 1/2025 khả quan nhưng vẫn còn nhiều thách thức",
    link: "trongnuoc1.html",
    category: "Trong nước",
    image: "https://media.vneconomy.vn/w800/images/upload/2025/04/06/ba-nguyen-thi-huong.jpg",
    time: " 06/04/2025 16:00"
  },
  {
    title: "Vụ sản xuất sữa bột giả, thu lợi 500 tỷ đồng: Tạm giam các giám đốc",
    link: "trongnuoc2.html",
    category: "Trong nước",
    image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/4/13/s2-1744434397122-30604.jpg?width=0&s=dUs-QDmb232ACebQeVdP-A",
    time: "13/04/2025 08:16"
  },
  {
    title: "Trung ương Đảng thống nhất sắp xếp lại bộ máy hành chính, còn 34 tỉnh",
    link: "trongnuoc3.html",
    category: "Trong nước",
    image: "https://i.ex-cdn.com/theleader.vn/files/news/2025/04/13/img0927-17444520889411209501508-0034.jpg",
    time: "13/04/2025 10:17"
  },
  {
    title: "Hơn 740 nhân viên tỉnh Thái Nguyên, Bắc Kạn xin nghỉ",
    link: "trongnuoc4.html",
    category: "Trong nước",
    image: "https://i1-vnexpress.vnecdn.net/2025/04/20/1-JPG-7144-1745125532.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=NIICq8OcEkBNITczOfTw5Q",
    time: "20/4/2025 09:51"
  },
  {
    title: "Đề nghị dỡ bỏ thanh chắn trên vỉa hè TP HCM",
    link: "trongnuoc5.html",
    category: "Trong nước",
    image: "https://i1-vnexpress.vnecdn.net/2025/04/13/381e81590042b31cea53-174450806-5350-2874-1744508314.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=VuaEChrMszonYWCW0de6yQ",
    time: "13/4/2025 08:40"
  },
  {
    title: "Tấm bản đồ chỉ đường cho bộ đội tiến về Sài Gòn ngày 30/4/1975",
    link: "trongnuoc6.html",
    category: "Trong nước",
    image: "https://i1-vnexpress.vnecdn.net/2025/04/21/3-1745206337-2733-1745206377.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=jIc-aCKpcxlmJZ-gqqZWsw",
    time: "20/4/2025 19:08"
  },

  {
    title: "Đỉnh cao của Aston Villa",
    link: "thethao1.html",
    category: "Thể thao",
    image: "https://photo-baomoi.bmcdn.me/w700_r1/2025_04_07_119_51915540/bd72b455dc1b35456c0a.jpg.avif",
    time: "7/4/2025 10:00"
  },
  {
    title: "U17 UAE thiệt quân trước trận tranh vé World Cup với U17 Việt Nam",
    link: "thethao2.html",
    category: "Thể thao",
    image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/4/8/u17-uae-101132.jpg?width=0&s=q6WRfYwrVcGkhHiwzOwkbQ",
    time: " 08/04/2025 19:27"
  },
  {
    title: "Tin tối 8/4: Nỗi buồn thất nghiệp của HLV Shin Tae Yong",
    link: "thethao3.html",
    category: "Thể thao",
    image: "https://ss-images.saostar.vn/2025/4/8/pc/1744115545661/9pnucoa4hx1-dfja8glg3e2-zsuukdo0jd3.jpeg",
    time: "08/04/2025 19:39"
  },
  {
    title: "Đồng Nai thắng lớn ở chặng 13 giải xe đạp xuyên Việt",
    link: "thethao4.html",
    category: "Thể thao",
    image: "https://i1-thethao.vnecdn.net/2025/04/17/491756740-1237460445046820-619-9562-7989-1744874225.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=ecm8qmmaDYSArXFXFcuZPw",
    time: "17/4/2025 14:26"
  },
  {
    title: "'Huyền thoại cờ tướng' Hứa Ngân Xuyên tái xuất",
    link: "thethao5.html",
    category: "Thể thao",
    image: "https://via.placeholder.com/600x400?text=H%C3%B3a+Ng%C3%A2n+Xuy%C3%AAn",
    time: "14/4/2025 20:00 "
  },
  {
    title: "'Hotgirl vượt rào' Mỹ Tiên thắng dễ ở Cup Tốc độ",
    link: "thethao6.html",
    category: "Thể thao",
    image: "https://i1-thethao.vnecdn.net/2025/04/16/dong7436-jpg-4919-1744783990-1-3064-3104-1744785519.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=cYYJ4wskpjEo4yDW7Wsv8g",
    time: "16/4/2025 13:39 "
  },




  {
    title: "Drone cứu hộ y tế đầu tiên trên thế giới",
    link: "khoahoc1.html",
    category: "Khoa học",
    image: "https://cdn2.tuoitre.vn/thumb_w/730/471584752817336320/2025/4/12/drone-110425-1-17444185001271868170008.png",
    time: "12/04/2025 08:06"
  },
  {
    title: "Thiên thạch tạo ra vùng dị thường trọng lực khổng lồ ở Nam Cực",
    link: "khoahoc2.html",
    category: "Khoa học",
    image: "https://i1-vnexpress.vnecdn.net/2025/04/12/VNE-Field-1744431099-1977-1744431199.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=8ztIj1uVQ0WeQtEBSnhYvA",
    time: "12/4/2025 12:55"
  },
  {
    title: "Loài vật quý hiếm bậc nhất, tuyệt tích hàng trăm năm bất ngờ trở lại: Có loài ‘hồi sinh’ kỳ diệu ở Việt Nam, chấn động cả thế giới",
    link: "khoahoc3.html",
    category: "Khoa học",
    image: "https://giadinh.mediacdn.vn/296230595582509056/2025/4/4/anh3-8cd57-1743746153696-1743746154073767644437.jpg",
    time: "13/04/2025 10:38"
  },
  {
    title: "Đưa kỹ năng AI vào đề thi tin học văn phòng MOSWC 2025",
    link: "khoahoc4.html",
    category: "Khoa học",
    image: "https://i1-sohoa.vnecdn.net/2025/04/21/vo-dich-tin-hoc-2-3268-1745207956.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=nRtwHuth7s75OiF0BENZTg",
    time: "21/4/2025 11:47 "
  },
  {
    title: "'Đừng hỏi AI có thể làm gì, hãy hỏi nó đang làm gì chúng ta'",
    link: "khoahoc5.html",
    category: "Khoa học",
    image: "https://i1-vnexpress.vnecdn.net/2025/04/16/PHG-moon-1744793987-6378-1744794364.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=oDtv5cgGr8rDKxsYcpEmGg",
    time: " 21/4/2025, 07:00"
  },

  {
    title: "Khí quyển Trái Đất thực sự kết thúc ở đâu?",
    link: "khoahoc6.html",
    category: "Khoa học",
    image: "https://i1-vnexpress.vnecdn.net/2025/04/16/PHG-moon-1744793987-6378-1744794364.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=oDtv5cgGr8rDKxsYcpEmGg",
    time: "18/4/2025, 00:00"
  },




  {
    title: "Xung đột Nga - Ukraine ngày 13/4: Ukraine huy động hàng trăm kíp lái máy bay không người lái đến sát biên giới Nga",
    link: "thegioi1.html",
    category: "Thế giới",
    image: "https://image.tienphong.vn/w645/Uploaded/2025/uqvppivp/2025_04_13/fk42ywmquvnqbds2nqwgyfssyy-2961-7602.jpg",
    time: " 13/04/2025  12:41"
  },
  {
    title: "Ông Trump đưa ra lời khuyên cho các nước không hài lòng với thuế nhập khẩu Mỹ",
    link: "thegioi2.html",
    category: "Thế giới",
    image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/4/13/epa-41320.jpg?width=0&s=NRkj2D_PtgxMl6RVTRD3Zg",
    time: "13/04/2025  10:11"
  },
  {
    title: "Máy bay lật ngửa trong lúc hạ cánh ở Canada, nhiều người bị thương",
    link: "thegioi3.html",
    category: "Thế giới",
    image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/2/18/tai-nan-may-bay-epa-75786.jpg?width=0&s=fB0Y4lc9OougshwufKBjSQ",
    time: "18/02/2025  09:32"
  },
  {
    title: "Thủ tướng Israel muốn trùm tình báo 'chỉ nghe lệnh mình'",
    link: "thegioi4.html",
    category: "Thế giới",
    image: "https://i1-vnexpress.vnecdn.net/2025/04/21/bar-1-jpg-1745245030-4692-1745245270.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=Araii7-qxI11bOAR_plTDg",
    time: "21/4/2025 21:36"
  },
  {
    title: "Châu Âu chuẩn bị kỹ năng ứng phó xung đột cho người dân",
    link: "thegioi5.html",
    category: "Thế giới",
    image: "https://i1-vnexpress.vnecdn.net/2025/04/14/download1-jpeg-1744604685-7662-1744605002.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=mZhFy0Kz1dcV339MDJyGkA",
    time: " 20/4/2025 05:00"
  },
  {
    title: "Bên trong thủ phủ hàng hóa Trung Quốc giữa bão thuế với Mỹ",
    link: "thegioi6.html",
    category: "Thế giới",
    image: "https://i1-vnexpress.vnecdn.net/2025/04/12/2025-03-14t080001z-1286808039-7482-4996-1744429128.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=6-cKR8y5AkkAVaxArotXug",
    time: "13/4/2025 08:56"
  },
  {
    title: "11 điểm đến tôn giáo ấn tượng tại Việt Nam",
    link: "dulich1.html",
    category: "Du lịch",
    image: "https://i1-dulich.vnecdn.net/2025/03/25/Anh-man-hinh-2025-03-25-luc-21-1742912636.png?w=1200&h=0&q=100&dpr=2&fit=crop&s=IAaqjaaLNkwT4WBD9KJZQA",
    time: " 29/3/2025 10:06"
  },
  {
    title: "Ngôi làng giữa biển hoa ban trắng ở Điện Biên, đẹp như bước ra từ cổ tích",
    link: "dulich2.html",
    category: "Du lịch",
    image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/3/23/hoa-ban-nam-cum-3-103738.jpg?width=0&s=aSquaLdG3pu8oY6-3cFK5Q",
    time: "24/03/2025 06:00"
  },
  {
    title: "Ruộng bậc thang được bình chọn vào ‘Top 7 Ấn tượng Việt Nam’ ở Kon Tum",
    link: "dulich3.html",
    category: "Du lịch",
    image: "https://cdnsgtt.thesaigontimes.vn/wp-content/uploads/2025/03/kon-von-kia-1-696x522.jpg",
    time: "19/03/2025 13:00"
  },
  {
    title: "Gành Đá Đỏ - điểm du lịch 'lạ mà quen' ở Quảng Ngãi",
    link: "dulich4.html",
    category: "Du lịch",
    image: "https://i1-dulich.vnecdn.net/2025/04/20/GANH-DA-DO-25-1745148412.jpg?w=1200&h=0&q=100&dpr=2&fit=crop&s=8D7gQao3LcyvXEil4zMjNA",
    time: "21/4/2025 08:30 "
  },
  {
    title: "5 điều nên và không nên làm để an toàn khi du lịch Mỹ",
    link: "dulich5.html",
    category: "Du lịch",
    image: "https://i1-dulich.vnecdn.net/2025/04/20/3-1745121310-9510-1745121431.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=gv3cmiz2uGGDQhtUpUJqLA",
    time: " 20/4/2025 19:00"
  },
  {
    title: "Những điểm tham quan sẽ đóng cửa khi Giáo hoàng qua đời",
    link: "dulich6.html",
    category: "Du lịch",
    image: "https://i1-dulich.vnecdn.net/2025/04/21/1-1745234386-6357-1745234731.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=NiLvlRrbsRlHDpmZUYXwJw",
    time: "21/4/2025 19:13"
  },
  {
    title: "Nước cốt chanh có thực sự giúp “thải độc“?",
    link: "suckhoe1.html",
    category: "Sức khỏe",
    image: "https://images.kienthuc.net.vn/zoom/800/uploaded/thanhnt/2025_04_08/nuoc-cot-chanh-co-thuc-su-giup-thai-doc.jpg",
    time: " 09/04/2025 07:30"
  },
  {
    title: "Loại cá người bệnh mỡ máu nên ăn thường xuyên",
    link: "suckhoe2.html",
    category: "Sức khỏe",
    image: "https://photo.znews.vn/w960/Uploaded/rfkbflu/2025_04_13/salmon_fish_soup_with_vegetables_bowl.jpg",
    time: " 13/4/2025 16:05"
  },
  {
    title: "Bệnh sởi tấn công người lớn, Bộ Y tế khuyến cáo khẩn",
    link: "suckhoe3.html",
    category: "Sức khỏe",
    image: "https://photo.znews.vn/w960/Uploaded/rfkbflu/2025_04_13/80e3c2d1_f634_48bc_971c_47e39a33eecc_mceu_1819886031742790191946.jpg",
    time: "13/4/2025 18:02"
  },
  {
    title: "Chặn mua bán thuốc kê đơn trên mạng, sàn thương mại điện tử",
    link: "suckhoe4.html",
    category: "Sức khỏe",
    image: "https://i1-suckhoe.vnecdn.net/2025/04/21/Anh-chup-Man-hinh-2025-04-21-l-5816-4607-1745242098.png",
    time: "21/4/2025 20:43"
  },
  {
    title: "8 kỹ năng giúp tránh mua phải thuốc giả",
    link: "suckhoe5.html",
    category: "Sức khỏe",
    image: "https://media.baothaibinh.com.vn/upload/news/4_2025/cuc_quan_ly_duoc_chi_8_ky_nang_de_khong_mua_phai_thuoc_gia_15242818042025.jpg",
    time: "21/4/2025 15:19"
  },
  {
    title: "Tử vong sau khi bị bác sĩ giả phẫu thuật",
    link: "suckhoe6.html",
    category: "Sức khỏe",
    image: "https://i1-suckhoe.vnecdn.net/2025/04/21/surgeons-passing-scissors-each-9678-3485-1745208573.jpg",
    time: "21/4/2025 11:27 "
  },

  {
    title: "Có nên sử dụng chế độ nguồn điện thấp trên iPhone?",
    link: "congnghe1.html",
    category: "Công nghệ",
    image: "https://media.vov.vn/sites/default/files/styles/large_watermark/public/2025-04/1_56.jpg",
    time: "13/04/2025 07:00"
  },
  {
    title: "Samsung sắp bỏ rơi công nghệ mà người dùng Galaxy tự hào trước iPhone",
    link: "congnghe2.html",
    category: "Công nghệ",
    image: "https://media.vov.vn/sites/default/files/styles/large/public/2025-04/1_52.jpg",
    time: " 11/04/2025 08:56 "
  },
  {
    title: "Nỗ lực của chính phủ Việt Nam mang tia hy vọng cho Samsung",
    link: "congnghe3.html",
    category: "Công nghệ",
    image: "https://media.vov.vn/sites/default/files/styles/large/public/2025-04/1_39.jpg",
    time: "2025-04-27 15:45"
  },
  {
    title: "Tình cảnh trái ngược của iPhone 16e tại Việt Nam và thế giới",
    link: "congnghe4.html",
    category: "Công nghệ",
    image: "https://i1-sohoa.vnecdn.net/2025/04/16/a1-1744821210-4594-1744821334.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=EUoXxZPDUSln3WN5Mro8pA",
    time: "17/4/2025 06:00 "
  },
  {
    title: "Sunhome mở rộng mạng lưới cung cấp điện mặt trời cho nhà ở",
    link: "congnghe5.html",
    category: "Công nghệ",
    image: "https://i1-sohoa.vnecdn.net/2025/04/16/Image-570830785-ExtractWord-0-7274-9703-1744774334.png?w=1020&h=0&q=100&dpr=1&fit=crop&s=OnV9zmS-0W99QqnIcIvCzg",
    time: "16/4/2025 11:00"
  },
  {
    title: "Cách giảm tác động xấu của sóng điện thoại lên cơ thể",
    link: "congnghe6.html",
    category: "Công nghệ",
    image: "https://i1-sohoa.vnecdn.net/2025/04/14/goidienluadao16050043644968160-1904-2659-1744621822.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=iw_m7YLVeKc0LD0Op6wLEg",
    time: "15/4/2025 05:00"
  }
];


// ===================== TÌM KIẾM BÀI VIẾT =====================

// Xoá dấu tiếng Việt
function removeVietnameseTones(str) {
  return str.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d").replace(/Đ/g, "D");
}

// Lấy từ khoá tìm kiếm trên URL
function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name) || "";
}

// Hiển thị kết quả tìm kiếm
function showResults() {
  const keyword = removeVietnameseTones(getQueryParam("query").toLowerCase());
  const resultList = document.getElementById("resultList");
  if (!resultList) return;

  resultList.innerHTML = "";

  const results = allArticles.filter(article => {
    const titleNoDiacritics = removeVietnameseTones(article.title.toLowerCase());
    return titleNoDiacritics.includes(keyword);
  });

  if (results.length === 0) {
    resultList.innerHTML = "<p>Không tìm thấy kết quả nào.</p>";
  } else {
    results.forEach(article => {
      const card = document.createElement("a");
      card.className = "post-card";
      card.href = article.link;

      card.innerHTML = `
        <img src="${article.image}" alt="${article.title}">
        <div class="post-info">
          <h4>${article.title}</h4>
          <div class="tags"><span class="tag">${article.category}</span></div>
        </div>
      `;

      resultList.appendChild(card);
    });
  }
}


// ===================== BÀI VIẾT MỚI NHẤT (SLIDER) =====================

// ----------------------
// 1. Parse thời gian bài viết
// ----------------------
function parseTime(str) {
  if (!str) return new Date(0);
  const [datePart, timePart] = str.trim().split(' ');
  const [day, month, year] = datePart.split('/');
  const [hour, minute] = timePart.split(':');
  return new Date(`${year}-${month}-${day}T${hour}:${minute}`);
}

// ----------------------
// 2. Hiển thị 3 bài viết mới nhất vào slider
// ----------------------
function showLatestArticles() {
  const sortedArticles = allArticles.slice().sort((a, b) => parseTime(b.time) - parseTime(a.time));
  const latestArticles = sortedArticles.slice(0, 3);
  const container = document.querySelector('#article-slider .slides-container');
  if (!container) return;

  container.innerHTML = "";
  latestArticles.forEach((article, index) => {
    const slide = document.createElement('div');
    slide.className = 'slide' + (index === 0 ? ' active' : '');
    slide.innerHTML = `
      <img src="${article.image}" alt="${article.title}">
      <div class="slide-content">
        <a href="${article.link}"><h3>${article.title}</h3></a>
        <p>${article.category} - ${article.time}</p>
      </div>
    `;
    container.appendChild(slide);
  });

  let currentSlide = 0;
  const slides = container.querySelectorAll('.slide');

  function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  let autoSlide = setInterval(() => showSlide(currentSlide + 1), 5000);

  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  function resetInterval() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => showSlide(currentSlide + 1), 5000);
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide(currentSlide - 1);
      resetInterval();
    });

    nextBtn.addEventListener('click', () => {
      showSlide(currentSlide + 1);
      resetInterval();
    });
  }
}

// ----------------------
// 3. Lấy bài viết ngẫu nhiên từ danh sách
// ----------------------
function getRandomArticles(list, count) {
  const shuffled = [...list].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// ----------------------
// 4. Hàm render bài viết vào 1 container
// ----------------------
function displayArticlesTo(containerId, articles) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";

  articles.forEach(article => {
    const div = document.createElement("div");
    div.className = "article-card";
    div.innerHTML = `
      <a href="${article.link}">
        <img src="${article.image}" alt="${article.title}">
        <div class="article-title">${article.title}</div>
        <div class="article-time">${article.time}</div>
      </a>
    `;
    container.appendChild(div);
  });
}

// ----------------------
// 5. Hiển thị 9 bài viết random cho trang chủ
// ----------------------
function showMainpageArticles() {
  const randomArticles = getRandomArticles(allArticles, 9);
  displayArticlesTo("main-random-articles", randomArticles);
}

// ----------------------
// 6. Hiển thị 3 bài viết random cho trang bài viết chi tiết
// ----------------------
function showSidebarArticles() {
  const randomArticles = getRandomArticles(allArticles, 3);
  displayArticlesTo("sidebar-random-articles", randomArticles);
}

// ----------------------
// 7. Khởi chạy các hàm khi DOM sẵn sàng
// ----------------------
document.addEventListener("DOMContentLoaded", () => {
  showLatestArticles();
  showResults();
  showMainpageArticles();    // Hiện 9 bài ở trang chủ (main-random-articles)
  showSidebarArticles();     // Hiện 3 bài ở bài chi tiết (sidebar-random-articles)
});
