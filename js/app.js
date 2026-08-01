// ==========================================
// 湖南涉外经济学院 - 2026新生攻略网站交互 v3
// 交互式攻略目录 + 放大字体 + 色彩修复
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

  // ========== 动态背景粒子 ==========
  var particlesEl = document.getElementById("particles");
  if (particlesEl) {
    var particleColors = ["#FF6B9D", "#8B6BFF", "#4ECDC4", "#FF9A6B", "#FFD93D", "#5BB8FF"];
    var particleCount = window.innerWidth < 768 ? 15 : 28;
    for (var i = 0; i < particleCount; i++) {
      var p = document.createElement("div");
      p.className = "particle";
      var size = Math.random() * 8 + 4;
      p.style.width = size + "px";
      p.style.height = size + "px";
      p.style.background = particleColors[Math.floor(Math.random() * particleColors.length)];
      p.style.left = Math.random() * 100 + "%";
      p.style.animationDuration = (Math.random() * 10 + 10) + "s";
      p.style.animationDelay = (Math.random() * 10) + "s";
      p.style.opacity = Math.random() * 0.4 + 0.2;
      particlesEl.appendChild(p);
    }
  }

  // ========== 鼠标光效 ==========
  var cursorGlow = document.getElementById("cursorGlow");
  if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {
    var mouseX = 0, mouseY = 0, glowX = 0, glowY = 0;
    document.addEventListener("mousemove", function (e) {
      mouseX = e.clientX; mouseY = e.clientY;
      cursorGlow.classList.add("show");
    });
    document.addEventListener("mouseleave", function () { cursorGlow.classList.remove("show"); });
    function animateGlow() {
      glowX += (mouseX - glowX) * 0.12;
      glowY += (mouseY - glowY) * 0.12;
      cursorGlow.style.left = glowX + "px";
      cursorGlow.style.top = glowY + "px";
      requestAnimationFrame(animateGlow);
    }
    animateGlow();
  }

  // ========== Hero 浮动气泡 ==========
  var heroFloat = document.getElementById("heroFloat");
  if (heroFloat) {
    var floatColors = ["rgba(255,107,157,0.25)", "rgba(139,107,255,0.2)", "rgba(78,205,196,0.2)", "rgba(255,154,107,0.2)", "rgba(91,184,255,0.2)"];
    for (var fi = 0; fi < 8; fi++) {
      var b = document.createElement("div");
      b.className = "float-bubble";
      var fs = Math.random() * 60 + 30;
      b.style.width = fs + "px"; b.style.height = fs + "px";
      b.style.background = floatColors[Math.floor(Math.random() * floatColors.length)];
      b.style.left = Math.random() * 100 + "%";
      b.style.top = Math.random() * 100 + "%";
      b.style.animationDelay = (Math.random() * 5) + "s";
      b.style.animationDuration = (Math.random() * 4 + 6) + "s";
      heroFloat.appendChild(b);
    }
  }

  // ========== Hero 标题打字机效果 ==========
  var heroTitleLine = document.getElementById("heroTitleLine");
  if (heroTitleLine) {
    var titleText = heroTitleLine.textContent;
    heroTitleLine.textContent = "";
    var ti = 0;
    function typeTitle() {
      if (ti < titleText.length) {
        heroTitleLine.textContent += titleText.charAt(ti);
        ti++;
        setTimeout(typeTitle, 80);
      }
    }
    setTimeout(typeTitle, 400);
  }

  // ========== Hero 统计 ==========
  var heroStatsEl = document.getElementById("heroStats");
  if (heroStatsEl) {
    heroStatsEl.innerHTML = heroStats.map(function (s) {
      return '<div class="hero-stat">' +
        '<div class="hero-stat-val">' + s.value + '</div>' +
        '<div class="hero-stat-label">' + s.label + '</div>' +
        '</div>';
    }).join("");
  }

  // ========== 磁吸按钮效果 ==========
  document.querySelectorAll(".magnetic").forEach(function (btn) {
    btn.addEventListener("mousemove", function (e) {
      var rect = btn.getBoundingClientRect();
      var x = e.clientX - rect.left - rect.width / 2;
      var y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = "translate(" + x * 0.2 + "px," + y * 0.2 + "px)";
    });
    btn.addEventListener("mouseleave", function () {
      btn.style.transform = "translate(0,0)";
    });
  });

  // ========== 卡片3D倾斜效果 ==========
  function addTiltEffect(selector) {
    document.querySelectorAll(selector).forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = "perspective(1000px) rotateY(" + x * 8 + "deg) rotateX(" + (-y * 8) + "deg) translateY(-6px)";
      });
      card.addEventListener("mouseleave", function () {
        card.style.transform = "perspective(1000px) rotateY(0) rotateX(0) translateY(0)";
      });
    });
  }

  // ========== 学长学姐帮助 ==========
  var mentorGridEl = document.getElementById("mentorGrid");
  if (mentorGridEl) {
    mentorGridEl.innerHTML = mentors.map(function (m, i) {
      var socialBtn = "";
      if (m.type === "douyin") {
        socialBtn = '<a href="' + m.link + '" target="_blank" rel="noopener" class="mentor-social-link douyin">' +
          '<svg viewBox="0 0 24 24"><path d="M12 2h4v2h-2v10.5c0 2.5-1.8 4.5-4 4.5s-4-2-4-4.5 1.8-4.5 4-4.5c.5 0 1 .1 1.5.2V2z"/></svg>' +
          '打开抖音</a>';
      } else if (m.type === "xhs") {
        socialBtn = '<a href="' + m.link + '" target="_blank" rel="noopener" class="mentor-social-link xhs">' +
          '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>' +
          '打开小红书</a>';
      } else if (m.type === "wechat") {
        socialBtn = '<button class="mentor-social-link wechat" data-wechat="' + m.wechat + '">' +
          '<svg viewBox="0 0 24 24"><path d="M9.5 4C5.36 4 2 6.69 2 10c0 1.89 1.08 3.56 2.78 4.66L4 17l2.5-1.5c.89.31 1.87.5 2.91.5l.46-.03C9.57 17.89 11.92 20 14.5 20c3.03 0 5.5-2.24 5.5-5s-2.47-5-5.5-5c-.34 0-.68.03-1 .09C13.25 5.33 11.55 4 9.5 4z"/></svg>' +
          '微信咨询</button>';
      }
      var wechatBtn = (m.wechat && m.type !== "wechat") ?
        '<button class="mentor-wechat-btn" data-wechat="' + m.wechat + '">' +
        '<svg viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 9H9v-2h9v2zm0-4H9V8h9v2z"/></svg>' +
        '复制微信号</button>' : '';
      var avatarHtml = m.image ?
        '<img src="' + m.image + '" alt="' + m.name + '" loading="lazy">' :
        '<div class="mentor-avatar-fallback">' + m.name.charAt(0) + '</div>';
      return '<div class="mentor-card" data-index="' + i + '">' +
        '<div class="mentor-image">' + avatarHtml + '</div>' +
        '<div class="mentor-name">' + m.name + '</div>' +
        '<div class="mentor-role">' + m.role + '</div>' +
        '<div class="mentor-actions">' + socialBtn + wechatBtn + '</div>' +
        '</div>';
    }).join("");

    addTiltEffect(".mentor-card");

    document.querySelectorAll(".mentor-wechat-btn, .mentor-social-link.wechat").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var wechat = this.getAttribute("data-wechat");
        copyToClipboard(wechat);
        showToast("微信号 " + wechat + " 已复制");
      });
    });

    var moreBtn = document.getElementById("mentorMoreBtn");
    if (moreBtn) moreBtn.style.display = "none";
  }

  // ==========================================
  // ===== 攻略目录（全新交互式 v4） =====
  // ==========================================
  var guideAccordion = document.getElementById("guideAccordion");
  var guideProgressFill = document.getElementById("guideProgressFill");
  var guideProgressText = document.getElementById("guideProgressText");
  var exploredSections = {};

  // SVG icons
  var iconPlus = "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z";
  var iconChevronDown = "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z";
  var iconChevronLeft = "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z";
  var iconChevronRight = "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z";
  var iconCheck = "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z";
  var iconLocation = "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z";
  var iconTip = "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z";
  var iconCar = "M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 12l1.5-4.5h11L19 12H5z";

  function renderGuideAccordion() {
    if (!guideAccordion) return;
    guideAccordion.innerHTML = guideSections.map(function (gs, i) {
      return '<div class="guide-item" data-index="' + i + '" data-id="' + gs.id + '">' +
        '<div class="guide-item-header" data-index="' + i + '">' +
          '<div class="guide-num" style="color:' + gs.color + ';">' + gs.num + '</div>' +
          '<div class="guide-icon-lg" style="background:' + gs.color + ';">' +
            '<svg viewBox="0 0 24 24"><path d="' + gs.icon + '"/></svg>' +
          '</div>' +
          '<div class="guide-info">' +
            '<h3>' + gs.title + '</h3>' +
            '<p>' + gs.shortDesc + '</p>' +
          '</div>' +
          '<div class="guide-expand-icon">' +
            '<svg viewBox="0 0 24 24"><path d="' + iconPlus + '"/></svg>' +
          '</div>' +
        '</div>' +
        '<div class="guide-item-body">' +
          '<div class="guide-body-inner" id="guideBody_' + i + '" style="--ring-color:' + gs.color + '; --tree-dot:' + gs.color + ';">' +
            renderGuideContent(gs, i) +
          '</div>' +
        '</div>' +
      '</div>';
    }).join("");

    document.querySelectorAll(".guide-item-header").forEach(function (header) {
      header.addEventListener("click", function () {
        var idx = parseInt(this.getAttribute("data-index"));
        toggleGuideItem(idx);
      });
    });

    guideSections.forEach(function (gs, i) {
      initGuideInteractions(gs, i);
    });
  }

  function toggleGuideItem(idx) {
    var item = document.querySelector('.guide-item[data-index="' + idx + '"]');
    if (!item) return;
    var isExpanded = item.classList.contains("expanded");
    if (isExpanded) {
      item.classList.remove("expanded");
    } else {
      item.classList.add("expanded");
      if (!exploredSections[idx]) {
        exploredSections[idx] = true;
        updateGuideProgress();
      }
      setTimeout(function () {
        var rect = item.getBoundingClientRect();
        if (rect.top < 80 || rect.top > window.innerHeight - 200) {
          window.scrollTo({ top: window.scrollY + rect.top - 100, behavior: "smooth" });
        }
      }, 100);
    }
  }

  function updateGuideProgress() {
    var count = Object.keys(exploredSections).length;
    var total = guideSections.length;
    var pct = (count / total) * 100;
    if (guideProgressFill) guideProgressFill.style.width = pct + "%";
    if (guideProgressText) guideProgressText.textContent = count + " / " + total + " 板块已探索";
  }

  function renderGuideContent(gs, index) {
    var html = '<div class="guide-content-badge" style="background:' + gs.light + '; color:' + gs.color + ';">' + gs.en + '</div>';
    var type = gs.content.type;
    if (type === "progress-ring") html += renderProgressRing(gs);
    else if (type === "timeline") html += renderTimeline(gs);
    else if (type === "carousel") html += renderCarousel(gs);
    else if (type === "compare-tabs") html += renderCompareTabs(gs);
    else if (type === "tree") html += renderTree(gs);
    else if (type === "flip-grid") html += renderFlipGrid(gs);
    else if (type === "location-cards") html += renderLocationCards(gs);
    return html;
  }

  function initGuideInteractions(gs, index) {
    var type = gs.content.type;
    if (type === "progress-ring") initProgressRing(gs, index);
    else if (type === "timeline") initTimeline(gs, index);
    else if (type === "carousel") initCarousel(gs, index);
    else if (type === "compare-tabs") initCompareTabs(gs, index);
    else if (type === "tree") initTree(gs, index);
    else if (type === "flip-grid") initFlipGrid(gs, index);
    else if (type === "location-cards") initLocationCards(gs, index);
  }

  // ===== 1. 进度环清单 =====
  function renderProgressRing(gs) {
    var color = gs.color;
    var cats = gs.content.categories;
    var totalItems = cats.reduce(function (s, c) { return s + c.items.length; }, 0);
    var circ = 2 * Math.PI * 52;

    var catsHtml = cats.map(function (cat, ci) {
      var itemsHtml = cat.items.map(function (item, ii) {
        return '<div class="ring-check-item" data-cat="' + ci + '" data-item="' + ii + '">' +
          '<div class="ring-check-box" style="--check-color:' + color + ';">' +
            '<svg viewBox="0 0 24 24"><path d="' + iconCheck + '"/></svg>' +
          '</div>' +
          '<div class="ring-check-text">' + item + '</div>' +
        '</div>';
      }).join("");
      return '<div class="ring-cat">' +
        '<div class="ring-cat-head">' +
          '<div class="ring-cat-icon" style="background:' + color + ';">' +
            '<svg viewBox="0 0 24 24"><path d="' + cat.icon + '"/></svg>' +
          '</div>' +
          '<div class="ring-cat-name">' + cat.name + '</div>' +
          '<div class="ring-cat-count">0/' + cat.items.length + '</div>' +
        '</div>' +
        '<div class="ring-cat-items">' + itemsHtml + '</div>' +
      '</div>';
    }).join("");

    return '<div class="ring-checklist" data-section="' + gs.id + '">' +
      '<div class="ring-top">' +
        '<div class="ring-svg-wrap">' +
          '<svg width="120" height="120" viewBox="0 0 120 120">' +
            '<circle class="ring-svg-track" cx="60" cy="60" r="52"/>' +
            '<circle class="ring-svg-fill" cx="60" cy="60" r="52" stroke="' + color + '" stroke-dasharray="' + circ + '" stroke-dashoffset="' + circ + '"/>' +
          '</svg>' +
          '<div class="ring-svg-text">' +
            '<div class="ring-svg-num" style="color:' + color + ';">0%</div>' +
            '<div class="ring-svg-label">' + totalItems + '项准备</div>' +
          '</div>' +
        '</div>' +
        '<div class="ring-categories">' + catsHtml + '</div>' +
      '</div>' +
    '</div>';
  }

  function initProgressRing(gs, index) {
    var container = document.querySelector('.guide-item[data-index="' + index + '"]');
    if (!container) return;
    var color = gs.color;
    var cats = gs.content.categories;
    var totalItems = cats.reduce(function (s, c) { return s + c.items.length; }, 0);
    var circ = 2 * Math.PI * 52;
    var fillCircle = container.querySelector(".ring-svg-fill");
    var numEl = container.querySelector(".ring-svg-num");

    container.querySelectorAll(".ring-check-item").forEach(function (item) {
      item.addEventListener("click", function (e) {
        e.stopPropagation();
        this.classList.toggle("checked");
        var isChecked = this.classList.contains("checked");
        var box = this.querySelector(".ring-check-box");
        if (isChecked) { box.style.background = color; box.style.borderColor = "transparent"; }
        else { box.style.background = ""; box.style.borderColor = ""; }

        var checkedTotal = container.querySelectorAll(".ring-check-item.checked").length;
        var pct = Math.round((checkedTotal / totalItems) * 100);
        var offset = circ - (pct / 100) * circ;
        if (fillCircle) fillCircle.style.strokeDashoffset = offset;
        if (numEl) numEl.textContent = pct + "%";

        container.querySelectorAll(".ring-cat").forEach(function (catEl) {
          var catTotal = catEl.querySelectorAll(".ring-check-item").length;
          var catChecked = catEl.querySelectorAll(".ring-check-item.checked").length;
          var countEl = catEl.querySelector(".ring-cat-count");
          if (countEl) countEl.textContent = catChecked + "/" + catTotal;
        });
      });
    });
  }

  // ===== 2. 垂直时间线 =====
  function renderTimeline(gs) {
    var color = gs.color;
    var light = gs.light;
    var steps = gs.content.steps;
    var nodesHtml = steps.map(function (step, i) {
      return '<div class="v-tl-node" data-node="' + i + '">' +
        '<div class="v-tl-dot" style="background:' + color + ';">' + (i + 1) + '</div>' +
        '<div class="v-tl-head">' +
          '<div class="v-tl-time" style="background:' + light + '; color:' + color + ';">' + step.time + '</div>' +
          '<div class="v-tl-title">' + step.title + '</div>' +
          '<div class="v-tl-chev"><svg viewBox="0 0 24 24"><path d="' + iconChevronDown + '"/></svg></div>' +
        '</div>' +
        '<div class="v-tl-body">' +
          '<div class="v-tl-body-inner">' +
            '<p class="v-tl-desc">' + step.desc + '</p>' +
            '<div class="v-tl-tip" style="background:' + light + '; color:' + color + ';">' +
              '<svg viewBox="0 0 24 24"><path d="' + iconTip + '"/></svg>' +
              '<span>' + step.tip + '</span>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join("");
    return '<div class="v-timeline" data-section="' + gs.id + '" style="--ring-color:' + color + ';">' + nodesHtml + '</div>';
  }

  function initTimeline(gs, index) {
    var container = document.querySelector('.guide-item[data-index="' + index + '"]');
    if (!container) return;
    container.querySelectorAll(".v-tl-head").forEach(function (head) {
      head.addEventListener("click", function (e) {
        e.stopPropagation();
        this.parentElement.classList.toggle("expanded");
      });
    });
    var firstNode = container.querySelector(".v-tl-node");
    if (firstNode) firstNode.classList.add("expanded");
  }

  // ===== 3. 3D卡片轮播 =====
  function renderCarousel(gs) {
    var color = gs.color;
    var light = gs.light;
    var cards = gs.content.cards;
    var cardsHtml = cards.map(function (card, i) {
      var stars = "";
      for (var s = 0; s < 5; s++) {
        stars += '<svg class="' + (s < card.rating ? "" : "empty") + '" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>';
      }
      return '<div class="carousel-card" data-card="' + i + '">' +
        '<div class="carousel-card-title">' + card.title + '</div>' +
        '<div class="carousel-card-tag" style="background:' + light + '; color:' + color + ';">' + card.tag + '</div>' +
        '<div class="carousel-card-rating">' + stars + '</div>' +
        '<p class="carousel-card-desc">' + card.desc + '</p>' +
        '<div class="carousel-card-loc"><svg viewBox="0 0 24 24"><path d="' + iconLocation + '"/></svg> ' + card.location + '</div>' +
      '</div>';
    }).join("");
    var dotsHtml = cards.map(function (c, i) {
      return '<div class="carousel-dot ' + (i === 0 ? "active" : "") + '" data-dot="' + i + '"></div>';
    }).join("");
    return '<div class="food-carousel" data-section="' + gs.id + '">' +
      '<div class="carousel-stage">' + cardsHtml + '</div>' +
      '<div class="carousel-controls">' +
        '<button class="carousel-btn prev"><svg viewBox="0 0 24 24"><path d="' + iconChevronLeft + '"/></svg></button>' +
        '<div class="carousel-dots">' + dotsHtml + '</div>' +
        '<span class="carousel-counter">1/' + cards.length + '</span>' +
        '<button class="carousel-btn next"><svg viewBox="0 0 24 24"><path d="' + iconChevronRight + '"/></svg></button>' +
      '</div>' +
    '</div>';
  }

  function initCarousel(gs, index) {
    var container = document.querySelector('.guide-item[data-index="' + index + '"]');
    if (!container) return;
    var cards = container.querySelectorAll(".carousel-card");
    var dots = container.querySelectorAll(".carousel-dot");
    var prevBtn = container.querySelector(".carousel-btn.prev");
    var nextBtn = container.querySelector(".carousel-btn.next");
    var counter = container.querySelector(".carousel-counter");
    var current = 0;
    var total = cards.length;

    function updateCarousel() {
      cards.forEach(function (card, i) {
        card.classList.remove("active", "prev", "next", "hidden");
        if (i === current) card.classList.add("active");
        else if (i === (current - 1 + total) % total) card.classList.add("prev");
        else if (i === (current + 1) % total) card.classList.add("next");
        else card.classList.add("hidden");
      });
      dots.forEach(function (dot, i) { dot.classList.toggle("active", i === current); });
      if (counter) counter.textContent = (current + 1) + "/" + total;
    }
    function goTo(idx) { current = (idx + total) % total; updateCarousel(); }

    if (prevBtn) prevBtn.addEventListener("click", function (e) { e.stopPropagation(); goTo(current - 1); });
    if (nextBtn) nextBtn.addEventListener("click", function (e) { e.stopPropagation(); goTo(current + 1); });
    dots.forEach(function (dot) {
      dot.addEventListener("click", function (e) { e.stopPropagation(); goTo(parseInt(this.getAttribute("data-dot"))); });
    });
    cards.forEach(function (card) {
      card.addEventListener("click", function (e) {
        e.stopPropagation();
        var idx = parseInt(this.getAttribute("data-card"));
        if (idx !== current) goTo(idx);
      });
    });
    updateCarousel();
  }

  // ===== 4. 宿舍对比标签 =====
  function renderCompareTabs(gs) {
    var color = gs.color;
    var light = gs.light;
    var tabs = gs.content.tabs;
    var facilities = gs.content.facilities;
    var rules = gs.content.rules;

    var tabsHtml = tabs.map(function (tab, i) {
      return '<button class="dorm-tab ' + (i === 0 ? "active" : "") + '" data-tab="' + i + '" style="' + (i === 0 ? "background:" + color + "; border-color:transparent; color:#fff;" : "") + '">' +
        '<svg viewBox="0 0 24 24"><path d="' + tab.icon + '"/></svg>' + tab.name +
      '</button>';
    }).join("");

    var contentHtml = tabs.map(function (tab, i) {
      var infoHtml = tab.info.map(function (info) {
        return '<div class="dorm-info-row">' +
          '<div class="dorm-info-label">' + info.label + '</div>' +
          '<div class="dorm-info-value">' + info.value + '</div>' +
        '</div>';
      }).join("");
      return '<div class="dorm-tab-content" data-tab="' + i + '" style="' + (i === 0 ? "" : "display:none;") + '">' + infoHtml + '</div>';
    }).join("");

    var facHtml = facilities.map(function (f) {
      return '<div class="dorm-facility" style="color:' + color + ';">' +
        '<svg viewBox="0 0 24 24"><path d="' + f.icon + '"/></svg>' + f.name +
      '</div>';
    }).join("");

    var rulesHtml = rules.map(function (rule) {
      return '<div class="dorm-rule">' +
        '<div class="dorm-rule-time" style="background:' + light + '; color:' + color + ';">' + rule.time + '</div>' +
        '<div class="dorm-rule-desc">' + rule.desc + '</div>' +
      '</div>';
    }).join("");

    return '<div class="dorm-compare" data-section="' + gs.id + '">' +
      '<div class="dorm-tabs">' + tabsHtml + '</div>' +
      '<div class="dorm-tab-content-wrap">' + contentHtml + '</div>' +
      '<h5 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:14px;">标配设施</h5>' +
      '<div class="dorm-facilities">' + facHtml + '</div>' +
      '<h5 style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:14px;">日常规则</h5>' +
      '<div class="dorm-rules-timeline">' + rulesHtml + '</div>' +
    '</div>';
  }

  function initCompareTabs(gs, index) {
    var container = document.querySelector('.guide-item[data-index="' + index + '"]');
    if (!container) return;
    var color = gs.color;
    var tabs = container.querySelectorAll(".dorm-tab");
    var contents = container.querySelectorAll(".dorm-tab-content");

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function (e) {
        e.stopPropagation();
        var tabIdx = parseInt(this.getAttribute("data-tab"));
        tabs.forEach(function (t) {
          t.classList.remove("active");
          t.style.background = ""; t.style.borderColor = ""; t.style.color = "";
        });
        this.classList.add("active");
        this.style.background = color; this.style.borderColor = "transparent"; this.style.color = "#fff";
        contents.forEach(function (c) {
          if (parseInt(c.getAttribute("data-tab")) === tabIdx) {
            c.style.display = "block";
            c.style.animation = "none"; c.offsetHeight; c.style.animation = "dormTabIn 0.4s ease";
          } else { c.style.display = "none"; }
        });
      });
    });
  }

  // ===== 5. 知识树 =====
  function renderTree(gs) {
    var color = gs.color;
    var branches = gs.content.branches;
    var branchesHtml = branches.map(function (branch, i) {
      var itemsHtml = branch.items.map(function (item) {
        return '<div class="tree-item">' + item + '</div>';
      }).join("");
      return '<div class="tree-branch" data-branch="' + i + '">' +
        '<div class="tree-branch-head">' +
          '<div class="tree-branch-icon" style="background:' + color + ';">' +
            '<svg viewBox="0 0 24 24"><path d="' + branch.icon + '"/></svg>' +
          '</div>' +
          '<div class="tree-branch-title">' + branch.title + '</div>' +
          '<div class="tree-branch-toggle"><svg viewBox="0 0 24 24"><path d="' + iconChevronDown + '"/></svg></div>' +
        '</div>' +
        '<div class="tree-branch-body">' +
          '<div class="tree-branch-inner">' + itemsHtml + '</div>' +
        '</div>' +
      '</div>';
    }).join("");
    return '<div class="tree-container" data-section="' + gs.id + '">' + branchesHtml + '</div>';
  }

  function initTree(gs, index) {
    var container = document.querySelector('.guide-item[data-index="' + index + '"]');
    if (!container) return;
    container.querySelectorAll(".tree-branch-head").forEach(function (head) {
      head.addEventListener("click", function (e) {
        e.stopPropagation();
        this.parentElement.classList.toggle("open");
      });
    });
    var firstBranch = container.querySelector(".tree-branch");
    if (firstBranch) firstBranch.classList.add("open");
  }

  // ===== 6. 翻转卡片网格 =====
  function renderFlipGrid(gs) {
    var color = gs.color;
    var cards = gs.content.cards;
    var cardsHtml = cards.map(function (card, i) {
      return '<div class="money-flip-card" data-card="' + i + '">' +
        '<div class="money-flip-inner">' +
          '<div class="money-flip-front">' +
            '<div class="money-flip-icon" style="background:' + color + ';">' +
              '<svg viewBox="0 0 24 24"><path d="' + card.icon + '"/></svg>' +
            '</div>' +
            '<div class="money-flip-front-text">' + card.front + '</div>' +
            '<div class="money-flip-front-hint">点击翻牌</div>' +
          '</div>' +
          '<div class="money-flip-back">' +
            '<div class="money-flip-back-text">' + card.back + '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join("");
    return '<div class="money-flip-area" data-section="' + gs.id + '">' +
      '<div class="flip-score-bar">' +
        '<div class="flip-score-label">已解锁</div>' +
        '<div class="flip-score-num" style="color:' + color + ';">0</div>' +
        '<div class="flip-score-label">/ ' + cards.length + ' 条</div>' +
        '<div class="flip-score-track"><div class="flip-score-fill" style="background:' + color + ';"></div></div>' +
      '</div>' +
      '<div class="money-flip-grid">' + cardsHtml + '</div>' +
    '</div>';
  }

  function initFlipGrid(gs, index) {
    var container = document.querySelector('.guide-item[data-index="' + index + '"]');
    if (!container) return;
    var color = gs.color;
    var cards = container.querySelectorAll(".money-flip-card");
    var scoreNum = container.querySelector(".flip-score-num");
    var scoreFill = container.querySelector(".flip-score-fill");
    var total = cards.length;
    var flipped = {};

    cards.forEach(function (card) {
      card.addEventListener("click", function (e) {
        e.stopPropagation();
        var idx = this.getAttribute("data-card");
        this.classList.toggle("flipped");
        if (this.classList.contains("flipped") && !flipped[idx]) {
          flipped[idx] = true;
          var count = Object.keys(flipped).length;
          if (scoreNum) scoreNum.textContent = count;
          if (scoreFill) scoreFill.style.width = (count / total * 100) + "%";
        }
      });
    });
  }

  // ===== 7. 位置卡片 =====
  function renderLocationCards(gs) {
    var color = gs.color;
    var light = gs.light;
    var cards = gs.content.cards;
    var cardsHtml = cards.map(function (card, i) {
      return '<div class="location-card" data-card="' + i + '" style="--loc-color:' + color + ';">' +
        '<div class="location-card-head">' +
          '<div class="location-card-icon" style="background:' + color + ';">' +
            '<svg viewBox="0 0 24 24"><path d="' + iconLocation + '"/></svg>' +
          '</div>' +
          '<div>' +
            '<div class="location-card-name">' + card.name + '</div>' +
            '<div class="location-card-dist" style="color:' + color + ';">' + card.distance + '</div>' +
          '</div>' +
        '</div>' +
        '<p class="location-card-desc">' + card.desc + '</p>' +
        '<div class="location-card-transport">' +
          '<svg viewBox="0 0 24 24"><path d="' + iconCar + '"/></svg>' + card.transport +
        '</div>' +
        '<div class="location-card-tip" style="background:' + light + '; color:' + color + ';">' +
          '<svg viewBox="0 0 24 24"><path d="' + iconTip + '"/></svg>' +
          '<span>' + card.tips + '</span>' +
        '</div>' +
      '</div>';
    }).join("");
    return '<div class="location-grid" data-section="' + gs.id + '">' + cardsHtml + '</div>';
  }

  function initLocationCards(gs, index) {
    var container = document.querySelector('.guide-item[data-index="' + index + '"]');
    if (!container) return;
    addTiltEffect(".location-card");
  }

  // 渲染攻略目录
  renderGuideAccordion();

  // ========== 统计数字动画 ==========
  var statsAnimated = false;
  function animateStats() {
    if (statsAnimated) return;
    var statsSection = document.getElementById("about");
    if (!statsSection) return;
    var rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      statsAnimated = true;
      document.querySelectorAll(".stat-num[data-count]").forEach(function (el) {
        var target = el.getAttribute("data-count");
        var suffix = el.getAttribute("data-suffix") || "";
        var num = parseFloat(target);
        var duration = 1800;
        var startTime = null;
        function step(ts) {
          if (!startTime) startTime = ts;
          var progress = Math.min((ts - startTime) / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          var current = num * eased;
          el.textContent = Math.floor(current).toLocaleString() + suffix;
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = num.toLocaleString() + suffix;
        }
        requestAnimationFrame(step);
      });
    }
  }

  // ========== 校园建筑 ==========
  var buildingFilters = ["全部"];
  buildings.forEach(function (b) {
    if (buildingFilters.indexOf(b.category) === -1) buildingFilters.push(b.category);
  });
  var filterRow = document.getElementById("filterRow");
  if (filterRow) {
    filterRow.innerHTML = buildingFilters.map(function (f, i) {
      return '<button class="filter-btn ' + (i === 0 ? "active" : "") + '" data-filter="' + (i === 0 ? "all" : f) + '">' + f + '</button>';
    }).join("");
  }

  var currentFilter = "all";
  var searchQuery = "";

  function renderBuildings() {
    var grid = document.getElementById("buildingsGrid");
    if (!grid) return;
    var filtered = buildings.filter(function (b) {
      var matchFilter = currentFilter === "all" || b.category === currentFilter;
      var matchQuery = !searchQuery ||
        b.name.toLowerCase().indexOf(searchQuery) > -1 ||
        b.description.toLowerCase().indexOf(searchQuery) > -1 ||
        b.category.toLowerCase().indexOf(searchQuery) > -1;
      return matchFilter && matchQuery;
    });
    if (filtered.length === 0) {
      grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:50px 20px;color:var(--text-2);font-size:17px;">未找到相关建筑，换个关键词试试～</div>';
      return;
    }
    grid.innerHTML = filtered.map(function (b) {
      return '<div class="building-card">' +
        '<div class="bc-head"><div class="bc-icon"><svg viewBox="0 0 24 24"><path d="' + b.icon + '"/></svg></div>' +
        '<div><div class="bc-title">' + b.name + '</div><div class="bc-cat">' + b.category + '</div></div></div>' +
        '<p class="bc-desc">' + b.description + '</p>' +
        '<div class="bc-loc"><svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>' + b.location + '</div>' +
        '<div class="bc-tip">' + b.tip + '</div>' +
        '</div>';
    }).join("");
    addTiltEffect(".building-card");
  }

  var buildingSearch = document.getElementById("buildingSearch");
  if (buildingSearch) {
    buildingSearch.addEventListener("input", function () {
      searchQuery = this.value.toLowerCase().trim();
      renderBuildings();
    });
  }
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("filter-btn")) {
      document.querySelectorAll(".filter-btn").forEach(function (b) { b.classList.remove("active"); });
      e.target.classList.add("active");
      currentFilter = e.target.getAttribute("data-filter");
      renderBuildings();
    }
  });
  renderBuildings();

  // ========== 宿舍 ==========
  var dormCompareEl = document.getElementById("dormCompare");
  if (dormCompareEl) {
    dormCompareEl.innerHTML = dormitories.map(function (d, i) {
      var stars = "";
      for (var s = 0; s < 5; s++) {
        stars += '<svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>';
      }
      return '<div class="dorm-card-compare ' + (i === 0 ? "featured" : "") + '">' +
        '<div class="dorm-head-compare" style="background:linear-gradient(135deg,' + (i === 0 ? 'rgba(255,107,157,0.15)' : 'rgba(139,107,255,0.15)') + ',rgba(255,255,255,0.5));">' +
        '<h3>' + d.type + '</h3>' +
        '<div class="dorm-price">' + d.price.split("/")[0] + '<span>/' + d.price.split("/")[1] + '</span></div>' +
        '<div class="dorm-rating">' + stars + '</div>' +
        '</div>' +
        '<div class="dorm-body-compare">' +
        '<div class="dorm-info-grid-compare">' +
        '<div class="dorm-info-item-compare"><div class="dorm-info-label-compare">入住人数</div><div class="dorm-info-value-compare">' + d.beds + '</div></div>' +
        '<div class="dorm-info-item-compare"><div class="dorm-info-label-compare">床铺类型</div><div class="dorm-info-value-compare">' + d.layout + '</div></div>' +
        '<div class="dorm-info-item-compare"><div class="dorm-info-label-compare">建筑面积</div><div class="dorm-info-value-compare">' + d.area + '</div></div>' +
        '</div>' +
        '<div class="dorm-features-compare">' + d.features.map(function (f) { return '<span class="dorm-feature-compare">' + f + '</span>'; }).join("") + '</div>' +
        '<div class="dorm-desc-compare">' + d.description + '</div>' +
        '<div class="dorm-popularity">' + d.popularity + '</div>' +
        '</div>' +
        '</div>';
    }).join("");
    addTiltEffect(".dorm-card-compare");
  }

  // 食堂
  var canteenGrid = document.getElementById("canteenGrid");
  if (canteenGrid) {
    canteenGrid.innerHTML = canteens.map(function (c) {
      return '<div class="canteen-card"><div class="canteen-name">' + c.name + '</div>' +
        '<div class="canteen-loc">' + c.location + '</div>' +
        '<div class="canteen-feat">' + c.feature + '</div></div>';
    }).join("");
    addTiltEffect(".canteen-card");
  }

  // ========== 课表 ==========
  var selectedCollege = null;
  var selectedMajor = null;
  var selectedSemester = 1;

  var collegeGrid = document.getElementById("collegeGrid");
  if (collegeGrid) {
    collegeGrid.innerHTML = colleges.map(function (c, i) {
      return '<div class="college-card" data-index="' + i + '">' +
        '<svg viewBox="0 0 24 24"><path d="' + c.icon + '"/></svg>' +
        '<div class="college-name">' + c.name + '</div>' +
        '<div class="college-building">' + c.building + '</div></div>';
    }).join("");
    document.querySelectorAll(".college-card").forEach(function (card) {
      card.addEventListener("click", function () {
        document.querySelectorAll(".college-card").forEach(function (c) { c.classList.remove("active"); });
        this.classList.add("active");
        selectedCollege = parseInt(this.getAttribute("data-index"));
        selectedMajor = null;
        renderMajors();
        renderCourse();
      });
    });
  }

  function renderMajors() {
    var container = document.getElementById("majorSelector");
    if (!container || selectedCollege === null) return;
    container.innerHTML = colleges[selectedCollege].majors.map(function (m, i) {
      return '<button class="major-btn" data-index="' + i + '">' + m.name + '</button>';
    }).join("");
    container.querySelectorAll(".major-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        container.querySelectorAll(".major-btn").forEach(function (b) { b.classList.remove("active"); });
        this.classList.add("active");
        selectedMajor = parseInt(this.getAttribute("data-index"));
        selectedSemester = 1;
        renderCourse();
      });
    });
  }

  function renderCourse() {
    var container = document.getElementById("courseDisplay");
    if (!container) return;
    if (selectedCollege === null || selectedMajor === null) {
      container.innerHTML = '<div class="course-empty">' +
        '<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>' +
        '<p>请先选择学院和专业 查看大一课表</p></div>';
      return;
    }
    var college = colleges[selectedCollege];
    var major = college.majors[selectedMajor];
    var schedule = selectedSemester === 1 ? major.schedule1 : major.schedule2;
    var totalCredits = schedule.reduce(function (s, c) { return s + (typeof c.credits === "number" ? c.credits : 0); }, 0);
    var totalHours = schedule.reduce(function (s, c) { return s + (typeof c.hours === "number" ? c.hours : 0); }, 0);
    var rows = schedule.map(function (c) {
      var tc = c.type.indexOf("通识") > -1 ? "tongshi" : c.type.indexOf("专业") > -1 ? "zhuanye" : "shijian";
      return '<tr><td class="course-name">' + c.name + '</td><td>' + c.hours + '</td><td>' + c.credits + '</td>' +
        '<td>' + (c.weekly === "-" ? "-" : c.weekly + "节/周") + '</td>' +
        '<td><span class="course-type ' + tc + '">' + c.type + '</span></td></tr>';
    }).join("");
    container.innerHTML =
      '<div class="course-box">' +
      '<h3>' + major.name + '</h3>' +
      '<p>' + college.name + ' · ' + major.degree + ' · 专业代码 ' + major.code + '</p>' +
      '<div class="semester-tabs">' +
      '<button class="semester-tab ' + (selectedSemester === 1 ? "active" : "") + '" data-sem="1">大一第一学期</button>' +
      '<button class="semester-tab ' + (selectedSemester === 2 ? "active" : "") + '" data-sem="2">大一第二学期</button>' +
      '</div>' +
      '<div style="overflow-x:auto;"><table class="course-table"><thead><tr>' +
      '<th>课程名称</th><th>学时</th><th>学分</th><th>周课时</th><th>类别</th>' +
      '</tr></thead><tbody>' + rows + '</tbody></table></div>' +
      '<div class="course-summary">' +
      '<div class="course-sum-item"><div class="course-sum-num">' + schedule.length + '</div><div class="course-sum-label">门课程</div></div>' +
      '<div class="course-sum-item"><div class="course-sum-num">' + totalHours + '</div><div class="course-sum-label">总学时</div></div>' +
      '<div class="course-sum-item"><div class="course-sum-num">' + totalCredits + '</div><div class="course-sum-label">总学分</div></div>' +
      '</div></div>';
    container.querySelectorAll(".semester-tab").forEach(function (tab) {
      tab.addEventListener("click", function () {
        selectedSemester = parseInt(this.getAttribute("data-sem"));
        renderCourse();
      });
    });
  }
  renderCourse();

  // ========== FAQ ==========
  var faqList = document.getElementById("faqList");
  if (faqList) {
    faqList.innerHTML = faqs.map(function (f, i) {
      return '<div class="faq-item" data-index="' + i + '">' +
        '<div class="faq-q"><span>' + f.question + '</span>' +
        '<div class="faq-toggle"><svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"/></svg></div></div>' +
        '<div class="faq-a"><div class="faq-a-inner">' + f.answer + '</div></div>' +
        '</div>';
    }).join("");
    document.querySelectorAll(".faq-item").forEach(function (item) {
      item.querySelector(".faq-q").addEventListener("click", function () {
        var isOpen = item.classList.contains("open");
        document.querySelectorAll(".faq-item").forEach(function (i) {
          i.classList.remove("open");
          i.querySelector(".faq-a").style.maxHeight = "0";
        });
        if (!isOpen) {
          item.classList.add("open");
          item.querySelector(".faq-a").style.maxHeight = item.querySelector(".faq-a").scrollHeight + "px";
        }
      });
    });
  }

  // ========== 加入新生群 ==========
  var qrRow = document.getElementById("qrRow");
  if (qrRow) {
    qrRow.innerHTML = '<div class="qr-card">' +
      '<div class="qr-image"><img src="' + joinInfo.qrImage + '" alt="' + joinInfo.qrTitle + '" loading="lazy"></div>' +
      '<div class="qr-name">' + joinInfo.qrTitle + '</div>' +
      '<div class="qr-note">' + joinInfo.qrNote + '</div></div>';
    addTiltEffect(".qr-card");
  }

  var contactCards = document.getElementById("contactCards");
  if (contactCards) {
    contactCards.innerHTML = joinInfo.contacts.map(function (c) {
      return '<div class="contact-card" data-value="' + c.value + '" data-label="' + c.label + '">' +
        '<div class="contact-icon" style="background:var(--mint);"><svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>' +
        '<div><div class="contact-label">' + c.label + '</div><div class="contact-value">' + c.value + '</div></div>' +
        '</div>';
    }).join("");
    document.querySelectorAll(".contact-card").forEach(function (card) {
      card.addEventListener("click", function () {
        var val = this.getAttribute("data-value");
        var label = this.getAttribute("data-label");
        copyToClipboard(val);
        showToast(label + " " + val + " 已复制");
      });
    });
    addTiltEffect(".contact-card");
  }

  // ========== 欢迎弹窗 ==========
  var welcomeOverlay = document.getElementById("welcomeOverlay");
  if (welcomeOverlay) {
    var welcomeBody = document.getElementById("welcomeBody");
    if (welcomeBody) {
      welcomeBody.innerHTML = joinInfo.contacts.map(function (c) {
        return '<div class="welcome-info-card" data-value="' + c.value + '">' +
          '<div class="welcome-info-icon"><svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>' +
          '<div class="welcome-info-content"><div class="welcome-info-label">' + c.label + '</div><div class="welcome-info-value">' + c.value + '</div></div>' +
          '</div>';
      }).join("");
      document.querySelectorAll(".welcome-info-card").forEach(function (card) {
        card.addEventListener("click", function () {
          var val = this.getAttribute("data-value");
          copyToClipboard(val);
          showToast(val + " 已复制");
        });
      });
    }
    setTimeout(function () { welcomeOverlay.classList.add("show"); }, 800);
    var closeWelcome = function () { welcomeOverlay.classList.remove("show"); };
    document.getElementById("welcomeClose").addEventListener("click", closeWelcome);
    document.getElementById("welcomeBtn").addEventListener("click", closeWelcome);
    welcomeOverlay.addEventListener("click", function (e) {
      if (e.target === welcomeOverlay) closeWelcome();
    });
  }

  // ========== 导航 ==========
  var navbar = document.getElementById("navbar");
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  var backTop = document.getElementById("backTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
    if (window.scrollY > 400) backTop.classList.add("show");
    else backTop.classList.remove("show");
    updateActiveNav();
    animateStats();
  });

  navToggle.addEventListener("click", function () {
    navToggle.classList.toggle("active");
    navLinks.classList.toggle("show");
  });

  document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
      navToggle.classList.remove("active");
      navLinks.classList.remove("show");
    });
  });

  function updateActiveNav() {
    var sections = document.querySelectorAll("section[id]");
    var scrollPos = window.scrollY + 100;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute("id");
      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll(".nav-links a").forEach(function (link) {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + id) link.classList.add("active");
        });
      }
    });
  }

  backTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ========== 滚动动画 ==========
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        if (entry.target.classList.contains("stat-card")) animateStats();
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
  document.querySelectorAll(".fade-in").forEach(function (el) { observer.observe(el); });

  animateStats();

  // ========== 工具函数 ==========
  function copyToClipboard(text) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(function () {});
    } else {
      var textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
  }

  function showToast(msg) {
    var toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(function () { toast.classList.remove("show"); }, 2200);
  }
});
