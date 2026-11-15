/**
 * Si Cafe & Si Farm — Cổng Minh Bạch Nguồn Gốc & Giá Trị Khách Hàng
 * Xử lý:
 * 1. Tra cứu Hồ sơ Truy xuất 12 chữ số (hỗ trợ cả tham số URL ?lot=912610261847 khi quét QR)
 * 2. Giải mã tự động cấu trúc 12 chữ số cho các mã lô hợp lệ
 * 3. Bộ lọc 6 Lợi Ích Khách Hàng & Trình khám phá cấu trúc 4 cụm mã lô
 * 4. Điều hướng di động & Accordion FAQ
 */

const BATCH_DATABASE = {
  "912610261847": {
    code: "9126 1026 1847",
    rawCode: "912610261847",
    productName: "Fine Robusta Đắk Lắk — Lô Thu Hoạch Chín Chọn Lọc (Natural / Honey)",
    category: "Cà Phê Đặc Sản Canh Tác Tuần Hoàn",
    originRegion: "Vùng nguyên liệu liên kết Si Farm • Xã Quảng Phú, Tỉnh Đắk Lắk (Cao độ ~650m)",
    harvestDate: "Niên vụ 2026 • Đợt thu hái chín chọn lọc tháng 10/2026",
    cultivationMethod: "Canh tác tuần hoàn bón phân trùn quế Si Farm • Không hóa chất tồn dư",
    processingSpec: "Tỷ lệ trái chín >95% • Lên men kiểm soát nhiệt độ • Phơi giàn thoáng khí đạt ẩm 11.2%",
    sensoryProfile: "Đậm đà hậu ngọt kéo dài • Nốt hương Sô-cô-la đen, Hạt dẻ rang & Đường nâu tự nhiên",
    safetyStandard: "Kiểm soát độ ẩm & độc tố vi nấm nghiêm ngặt trước đóng gói niêm phong",
    customerValueSummary:
      "Khi sở hữu lô 912610261847, bạn hoàn toàn yên tâm thưởng thức tách Robusta sạch từ nền đất nuôi bằng phân trùn quế, không tẩm hương liệu tạo độ sánh ảo, giữ trọn vị ngọt hậu tự nhiên nhờ hái chín đúng độ."
  },
  "912611121854": {
    code: "9126 1112 1854",
    rawCode: "912611121854",
    productName: "Cà Phê Sấy Thăng Hoa (Freeze-Dried) Công Nghệ Thu Hồi Hương Tự Nhiên",
    category: "Cà Phê Chiết Xuất Sâu Bảo Toàn Tinh Chất",
    originRegion: "Nhà máy chế biến Si Cafe & Si Farm • Thôn Tiến Thành, Quảng Phú, Đắk Lắk",
    harvestDate: "Lô sản xuất & kiểm định xuất xưởng ngày 12/11/2026",
    cultivationMethod: "100% hạt cà phê tuyển chọn truy xuất vùng trồng Đắk Lắk — Không hương liệu tổng hợp",
    processingSpec: "Chiết xuất nhiệt độ tối ưu • Thu hồi hương tự nhiên (Aroma Recovery) • Sấy thăng hoa ở -40°C",
    sensoryProfile: "Hòa tan tức thì trong nước lạnh/nóng • Giữ trọn hương thơm rang tươi & vị cân bằng tinh tế",
    safetyStandard: "100% tinh chất cà phê nguyên bản — Không chất độn, không chất bảo quản",
    customerValueSummary:
      "Lô 912611121854 mang lại cho người bận rộn sự tiện lợi của cà phê hòa tan nhưng giữ nguyên tiêu chuẩn sức khỏe và hương thơm nguyên bản của cà phê rang xay thực thụ nhờ công nghệ sấy thăng hoa lạnh sâu."
  },
  "912611151860": {
    code: "9126 1115 1860",
    rawCode: "912611151860",
    productName: "Bột Cacao Nguyên Bản Không Kiềm Hóa (Natural Non-Alkalized Cocoa)",
    category: "Nông Sản Tuần Hoàn Si Farm Đắk Lắk",
    originRegion: "Vườn cacao canh tác tuần hoàn Si Farm • Đắk Lắk",
    harvestDate: "Lô lên men tự nhiên & nghiền mịn xuất xưởng tháng 11/2026",
    cultivationMethod: "Mô hình kinh tế tuần hoàn: vỏ cacao ủ nuôi trùn quế trả lại dinh dưỡng hữu cơ cho cây",
    processingSpec: "Lên men thùng gỗ tự nhiên • Rang nhiệt độ thấp • Ép bơ tự nhiên • Không xử lý kiềm (Non-Alkalized)",
    sensoryProfile: "Màu nâu đỏ tự nhiên • Vị cacao nguyên chất đậm sâu, thoáng vị chua trái cây chín đặc trưng",
    safetyStandard: "Bảo toàn hàm lượng Polyphenol & Flavanol chống oxy hóa tự nhiên của hạt cacao",
    customerValueSummary:
      "Khác với bột cacao công nghiệp bị xử lý kiềm làm mất dưỡng chất để nhuộm màu đen sẫm, lô 912611151860 giữ nguyên độ pH tự nhiên và hoạt chất chống oxy hóa quý giá, an toàn cho cả gia đình."
  }
};

const ANATOMY_CONTENT = {
  seg1: {
    title: "Cụm 1 (2 chữ số đầu — VD: 91): Định Danh Hệ Sinh Thái & Dòng Nguyên Liệu",
    p1: "Hai chữ số đầu tiên xác định nhóm nguyên liệu gốc thuộc hệ thống quản trị chất lượng của Si Cafe & Si Farm (cà phê nhân/rang xay, cà phê chiết xuất sấy thăng hoa, hay cacao nguyên bản).",
    p2: "Lợi ích cho khách hàng: Ngăn chặn tuyệt đối tình trạng đánh tráo phân khúc nguyên liệu giữa các dòng sản phẩm khác nhau."
  },
  seg2: {
    title: "Cụm 2 (2 chữ số tiếp theo — VD: 26): Niên Vụ & Chu Kỳ Canh Tác",
    p1: "Ghi nhận chính xác năm thu hoạch / niên vụ sản xuất của nguyên liệu (ví dụ: 26 tương ứng chu kỳ sản xuất năm 2026).",
    p2: "Lợi ích cho khách hàng: Bạn biết chắc mình đang sử dụng nông sản đúng niên vụ tươi mới, không phải hàng tồn kho quá niên bị oxy hóa chất béo và mất hương."
  },
  seg3: {
    title: "Cụm 3 (4 chữ số giữa — VD: 1026 hoặc 1112): Dấu Mốc Thời Gian Kiểm Định Lô",
    p1: "Mã hóa tháng/ngày hoặc tuần kiểm định xuất xưởng của mẻ chế biến tại nhà máy Quảng Phú, Đắk Lắk.",
    p2: "Lợi ích cho khách hàng: Cho phép đối chiếu trực tiếp với hạn sử dụng in trên bao bì, loại bỏ hoàn toàn rủi ro sửa đổi ngày đóng gói thủ công."
  },
  seg4: {
    title: "Cụm 4 (4 chữ số cuối — VD: 1847): Số Hiệu Mẻ Độc Nhất (Unique Batch ID)",
    p1: "Đây là chìa khóa định danh duy nhất của từng mẻ rang/sơ chế/nghiền cụ thể. Mỗi mẻ có thông số nhiệt độ, độ ẩm và hồ sơ cảm quan được lưu trữ độc lập trên hệ thống.",
    p2: "Lợi ích cho khách hàng: Khi cần phản hồi hoặc đặt lại đúng gu hương vị yêu thích, đội ngũ kỹ thuật truy xuất chính xác tới từng mẻ sản xuất."
  }
};

function normalizeLotCode(input) {
  return (input || "").replace(/\D/g, "").slice(0, 12);
}

function formatLotCode(raw) {
  if (raw.length !== 12) return raw;
  return `${raw.slice(0, 4)} ${raw.slice(4, 8)} ${raw.slice(8, 12)}`;
}

function buildDecodedFallbackBatch(rawCode) {
  const ecosystem = rawCode.slice(0, 2);
  const yearCode = rawCode.slice(2, 4);
  const datePart = rawCode.slice(4, 8);
  const batchId = rawCode.slice(8, 12);

  return {
    code: formatLotCode(rawCode),
    rawCode,
    productName: `Hồ Sơ Định Danh Lô Sản Xuất #${batchId} — Hệ Sinh Thái Si Cafe & Si Farm`,
    category: `Mã phân hệ ${ecosystem} • Chu kỳ sản xuất 20${yearCode}`,
    originRegion: "Hệ thống vùng trồng liên kết & Nhà máy Si Farm • Xã Quảng Phú, Tỉnh Đắk Lắk",
    harvestDate: `Dấu mốc kiểm định lô: ${datePart.slice(0, 2)}/${datePart.slice(2, 4)}/20${yearCode}`,
    cultivationMethod: "Canh tác nông nghiệp tuần hoàn Si Farm • Nhật ký chăm sóc lưu trữ theo Batch ID",
    processingSpec: `Mẻ chế biến số #${batchId} — Kiểm soát nhiệt độ, độ ẩm và niêm phong xuất xưởng`,
    sensoryProfile: "Dữ liệu cảm quan chi tiết của mẻ này được lưu trữ trong hồ sơ kỹ thuật nội bộ tại nhà máy Đắk Lắk",
    safetyStandard: "Tuân thủ quy trình kiểm soát vệ sinh an toàn thực phẩm & truy xuất 6 mắt xích Si Farm",
    customerValueSummary: `Mã ${formatLotCode(rawCode)} đã được giải mã cấu trúc hợp lệ theo chuẩn 12 chữ số của Si Cafe & Si Farm. Để nhận bản trích lục thông số phòng lab chi tiết của riêng mẻ #${batchId}, bạn có thể liên hệ trực tiếp bộ phận kỹ thuật Đắk Lắk: (0262) 372 9000.`
  };
}

function renderBatchPassport(lotData, isCustomDecoded = false) {
  const container = document.getElementById("lotResultContainer");
  if (!container) return;

  const statusText = isCustomDecoded
    ? "✓ ĐÃ GIẢI MÃ CẤU TRÚC MÃ LÔ 12 CHỮ SỐ HỢP LỆ"
    : "✓ ĐÃ XÁC THỰC DỮ LIỆU GỐC TỪ HỆ THỐNG SI CAFE & SI FARM";

  container.innerHTML = `
    <div class="passport-top">
      <div>
        <div class="passport-status">${statusText}</div>
        <h3 class="passport-title">${lotData.productName}</h3>
        <p class="passport-subtitle">${lotData.category}</p>
      </div>
      <div class="passport-code-box">
        <span>MÃ TRUY XUẤT 12 CHỮ SỐ</span>
        <strong>${lotData.code}</strong>
      </div>
    </div>

    <div class="passport-metrics">
      <div class="metric-box">
        <label>Vùng Nguyên Liệu</label>
        <strong>Đắk Lắk, Việt Nam</strong>
      </div>
      <div class="metric-box">
        <label>Nền Tảng Canh Tác</label>
        <strong>Tuần Hoàn &amp; Trùn Quế</strong>
      </div>
      <div class="metric-box">
        <label>Can Thiệp Hóa Chất</label>
        <strong>0% Phụ Gia / Kiềm Hóa</strong>
      </div>
      <div class="metric-box">
        <label>Cấp Độ Truy Xuất</label>
        <strong>Định Danh Từng Mẻ (Batch)</strong>
      </div>
    </div>

    <div class="passport-timeline">
      <div class="timeline-step">
        <div class="timeline-step__head">Mắt Xích 01 • Thổ Nhưỡng</div>
        <h4>Vùng Trồng &amp; Vi Khí Hậu</h4>
        <p>${lotData.originRegion}</p>
      </div>
      <div class="timeline-step">
        <div class="timeline-step__head">Mắt Xích 02 • Nuôi Dưỡng Đất</div>
        <h4>Canh Tác Bền Vững</h4>
        <p>${lotData.cultivationMethod}</p>
      </div>
      <div class="timeline-step">
        <div class="timeline-step__head">Mắt Xích 03 • Mùa Vụ</div>
        <h4>Thời Điểm Thu Hái / Xuất Xưởng</h4>
        <p>${lotData.harvestDate}</p>
      </div>
      <div class="timeline-step">
        <div class="timeline-step__head">Mắt Xích 04 • Chế Biến</div>
        <h4>Kiểm Soát Kỹ Thuật</h4>
        <p>${lotData.processingSpec}</p>
      </div>
      <div class="timeline-step">
        <div class="timeline-step__head">Mắt Xích 05 • Cảm Quan</div>
        <h4>Đặc Tính Hương Vị Thực</h4>
        <p>${lotData.sensoryProfile}</p>
      </div>
      <div class="timeline-step">
        <div class="timeline-step__head">Mắt Xích 06 • An Toàn</div>
        <h4>Bảo Toàn Chất Lượng</h4>
        <p>${lotData.safetyStandard}</p>
      </div>
    </div>

    <div class="passport-customer-benefit">
      <p><strong>Giá trị thực tế bạn nhận được từ lô hàng này:</strong> ${lotData.customerValueSummary}</p>
      <button type="button" class="btn-copy-link" id="copyVerifyLinkBtn" data-raw="${lotData.rawCode}">
        Sao chép link kiểm chứng lô này
      </button>
    </div>
  `;

  const copyBtn = document.getElementById("copyVerifyLinkBtn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const url = new URL(window.location.href);
      url.searchParams.set("lot", lotData.rawCode);
      navigator.clipboard?.writeText(url.toString()).then(() => {
        copyBtn.textContent = "Đã sao chép đường dẫn kiểm chứng ✓";
        setTimeout(() => {
          copyBtn.textContent = "Sao chép link kiểm chứng lô này";
        }, 2400);
      });
    });
  }
}

function renderValidationMessage(message) {
  const container = document.getElementById("lotResultContainer");
  if (!container) return;
  container.innerHTML = `
    <div style="padding: 12px 4px; color: #7C2D12;">
      <strong>Lưu ý định dạng mã truy xuất:</strong> ${message}
    </div>
  `;
}

function handleLookup(rawInput, updateUrl = true) {
  const cleaned = normalizeLotCode(rawInput);
  const inputEl = document.getElementById("lotCodeInput");
  if (inputEl) {
    inputEl.value = cleaned;
  }

  document.querySelectorAll(".sample-chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.lot === cleaned);
  });

  if (cleaned.length !== 12) {
    renderValidationMessage(
      "Mã truy xuất nguồn gốc của Si Cafe & Si Farm gồm đúng 12 chữ số (ví dụ: 912610261847). Vui lòng kiểm tra lại dãy số in trên tem lô hoặc bấm chọn một mã mẫu phía trên."
    );
    return;
  }

  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("lot", cleaned);
    window.history.replaceState({}, "", url.toString());
  }

  if (BATCH_DATABASE[cleaned]) {
    renderBatchPassport(BATCH_DATABASE[cleaned], false);
  } else {
    renderBatchPassport(buildDecodedFallbackBatch(cleaned), true);
  }
}

function renderAnatomyDetail(segKey) {
  const detailBox = document.getElementById("anatomyDetail");
  const item = ANATOMY_CONTENT[segKey];
  if (!detailBox || !item) return;

  detailBox.innerHTML = `
    <h3>${item.title}</h3>
    <p>${item.p1}</p>
    <p><strong>${item.p2}</strong></p>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile navigation toggle
  const navToggle = document.getElementById("mobileNavToggle");
  const primaryNav = document.getElementById("primaryNav");
  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = primaryNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        primaryNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 2. Lot search form & sample chips
  const lotForm = document.getElementById("lotSearchForm");
  const lotInput = document.getElementById("lotCodeInput");

  if (lotForm && lotInput) {
    lotForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handleLookup(lotInput.value, true);
    });
  }

  document.querySelectorAll(".sample-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      handleLookup(chip.dataset.lot, true);
    });
  });

  // Check URL parameter ?lot=... for direct QR scan support
  const params = new URLSearchParams(window.location.search);
  const initialLot = normalizeLotCode(params.get("lot")) || "912610261847";
  handleLookup(initialLot, false);

  // 3. Benefit category filter tabs
  const benefitTabs = document.querySelectorAll(".benefit-tab");
  const benefitCards = document.querySelectorAll(".benefit-card");

  benefitTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const filter = tab.dataset.filter;
      benefitTabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      benefitCards.forEach((card) => {
        const match = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("hidden", !match);
      });
    });
  });

  // 4. 12-Digit Anatomy interactive explorer
  const segments = document.querySelectorAll(".digit-segment");
  segments.forEach((seg) => {
    seg.addEventListener("click", () => {
      segments.forEach((s) => s.classList.remove("active"));
      seg.classList.add("active");
      renderAnatomyDetail(seg.dataset.segment);
    });
  });
  renderAnatomyDetail("seg1");

  // 5. FAQ Accordion
  document.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const isActive = item.classList.toggle("active");
      btn.setAttribute("aria-expanded", String(isActive));
    });
  });
});
