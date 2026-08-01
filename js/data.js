// ==========================================
// 湖南涉外经济学院 - 2026新生攻略网站数据
// ==========================================

// ===== Hero 统计数据 =====
const heroStats = [
  { label: "攻略板块", value: "7" },
  { label: "互动体验", value: "100%" },
  { label: "更新时间", value: "2026.07" }
];

// ===== 学长学姐帮助 =====
const mentors = [
  {
    name: "涉外-林学长",
    role: "分享学校生活 · 探索涉外美食",
    image: "images/mentor_avatar_1.png",
    type: "douyin",
    link: "https://v.douyin.com/cGZ28c-yr7k/",
    linkText: "长按复制此条消息，打开抖音搜索，查看TA的更多作品。 https://v.douyin.com/cGZ28c-yr7k/ 4@7.com :8pm",
    wechat: "jietihou92"
  },
  {
    name: "草莓蛋糕",
    role: "校园生活 · 新生答疑",
    image: "images/mentor_avatar_2.png",
    type: "douyin",
    link: "https://v.douyin.com/6J4ZkfLosbg/",
    linkText: "长按复制此条消息，打开抖音搜索，查看TA的更多作品。 https://v.douyin.com/6J4ZkfLosbg/ 5@9.com :0pm",
    wechat: "Xxxxx0223l"
  },
  {
    name: "涉外小糕学姐",
    role: "分享校园生活 · 答疑解惑",
    image: "images/mentor_avatar_3.png",
    type: "xhs",
    link: "https://xhslink.cn/m/7rjrEMoyTct",
    linkText: "https://xhslink.cn/m/7rjrEMoyTct",
    wechat: "lundatong11"
  },
  {
    name: "涉外百事通",
    role: "新生答疑 · 校园咨询",
    image: "",
    type: "wechat",
    link: "",
    linkText: "微信直接添加，随时解答涉外生活、学习、吃喝玩乐各种问题",
    wechat: "aug12335"
  }
];

// ===== 攻略目录 7大板块（全新原创内容） =====
const guideSections = [
  {
    id: "prep-checklist",
    num: "01",
    title: "入学准备清单",
    en: "PRE-ARRIVAL",
    color: "#FF6B9D",
    light: "rgba(255,107,157,0.10)",
    icon: "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z",
    shortDesc: "从证件到军训装备，一份清单搞定入学全部准备",
    content: {
      type: "progress-ring",
      categories: [
        {
          name: "证件材料",
          icon: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z",
          items: [
            "录取通知书原件（务必带上，报到核心凭证）",
            "身份证原件 + 正反面复印件5份",
            "高考准考证（部分学院需要核验）",
            "近期免冠一寸/两寸证件照各8张",
            "团员档案 + 团员证（团组织关系转接）",
            "户口迁移证（如需迁户口到学校）",
            "银行卡（学校随录取通知寄送的银行卡）"
          ]
        },
        {
          name: "数码装备",
          icon: "M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z",
          items: [
            "智能手机 + 充电器 + 充电宝（入校扫码填表必备）",
            "笔记本电脑（写论文、做作业、查资料）",
            "U盘（拷贝课件、打印论文）",
            "耳机（宿舍追剧不打扰室友）",
            "排插（宿舍插座有限，建议带长线排插）"
          ]
        },
        {
          name: "生活用品",
          icon: "M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z",
          items: [
            "换洗衣物（长沙9月仍很热，以夏装为主，带几件薄外套）",
            "洗漱用品（牙刷、毛巾、沐浴露、洗发水校内可买）",
            "床上三件套（学校统一规格，可到校购买或提前网购）",
            "拖鞋 + 运动鞋（校内坡道多，一双好走的鞋很重要）",
            "水杯 + 饭盒（食堂打包、宿舍泡面）",
            "收纳箱 + 衣架（宿舍空间有限，收纳是必修课）"
          ]
        },
        {
          name: "军训专属",
          icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z",
          items: [
            "防晒霜SPF50+（长沙紫外线强，军训不涂会晒伤）",
            "舒适鞋垫（军训鞋偏硬，多备几双软鞋垫）",
            "无花纹黑色长袜（军训要求统一着装）",
            "大容量水壶（军训出汗多，随时补水）",
            "藿香正气水/清凉油（防中暑神器）",
            "皮带（军训迷彩服腰围可能偏大）"
          ]
        },
        {
          name: "禁带提醒",
          icon: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
          items: [
            "大功率电器（热得快、电热毯、电磁炉，宿舍禁用）",
            "管制刀具及危险物品",
            "违规装饰（蜡烛、烟花等明火物品）",
            "超大功率吹风机（宿舍公用吹风机区域可用）"
          ]
        }
      ]
    }
  },
  {
    id: "registration-day",
    num: "02",
    title: "报到日全流程",
    en: "CHECK-IN DAY",
    color: "#8B6BFF",
    light: "rgba(139,107,255,0.10)",
    icon: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z",
    shortDesc: "从校门到宿舍，报到当天每一步都有人引导",
    content: {
      type: "timeline",
      steps: [
        {
          time: "到达校门",
          title: "入校引导",
          desc: "到达学校正大门后，迎新志愿者会核验身份并接过行李。各学院在校门口设有迎新帐篷，戴红袖标的学长学姐全程引导。",
          tip: "独自来也不用慌，志愿者会一路陪你到宿舍楼下"
        },
        {
          time: "第1站",
          title: "院系报到点",
          desc: "在学院迎新帐篷处递交录取通知书、身份证，辅导员现场核验信息，领取报到单和校园龙卡。校园卡可在食堂、超市消费。",
          tip: "校园卡首次充值建议充200元，后续可随时补"
        },
        {
          time: "第2站",
          title: "缴费确认",
          desc: "前往综合楼学生服务大厅确认学费缴纳情况。如已通过银行卡预扣则直接确认；如需现场缴纳，可在大厅办理。",
          tip: "助学贷款同学需在此提交贷款回执"
        },
        {
          time: "第3站",
          title: "宿舍分配登记",
          desc: "在宿舍楼下找楼管阿姨登记，领取入住凭证和钥匙。涉外宿舍均为指纹门锁，阿姨会帮你录指纹。床位由学校统一分配。",
          tip: "不存在抢床位，到晚到早都是安排好的"
        },
        {
          time: "第4站",
          title: "入住整理",
          desc: "进入宿舍整理行李，认识室友。如果需要采购日用品，校内超市和内街便利店一应俱全。被褥可到校购买或快递到校。",
          tip: "远距离同学建议被褥等大件快递到校，轻装上阵"
        },
        {
          time: "入学后",
          title: "军训准备",
          desc: "报到完成后等待军训开始。军训期间要求统一着装，男生需剪寸头，禁止夸张发色。提前准备好防晒和鞋垫。",
          tip: "军训是认识同学的好机会，积极融入集体"
        }
      ]
    }
  },
  {
    id: "food-map",
    num: "03",
    title: "校园吃喝地图",
    en: "FOOD GUIDE",
    color: "#4ECDC4",
    light: "rgba(78,205,196,0.10)",
    icon: "M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3.5v8.51c.59.34 1 .99 1 1.74V22h2v-6.25c0-1.02-.41-1.95-1.07-2.62.04-.13.07-.26.07-.41V5.5C18 4.67 17.33 4 16.5 4S15 4.67 15 5.5z",
    shortDesc: "7个食堂 + 全品牌奶茶 + 涉外外街，吃遍校园不踩雷",
    content: {
      type: "carousel",
      cards: [
        {
          title: "一食堂",
          tag: "螺蛳粉 · 早餐",
          rating: 4,
          desc: "靠近教学楼，早上赶课买早餐最方便。招牌螺蛳粉口碑好，柳州风味，汤底浓郁。人均8-12元。",
          location: "校园北部，教学楼附近"
        },
        {
          title: "四食堂",
          tag: "人气最高 · 荷叶饭",
          rating: 5,
          desc: "涉外人气最高的食堂，人流量大。荷叶饭是招牌，种类丰富味道好。饭点需要排队，建议错峰。",
          location: "校园中部"
        },
        {
          title: "五食堂",
          tag: "窗口最多 · 小炒",
          rating: 4,
          desc: "窗口种类最多，各地风味都有。特色小炒现点现做，口味偏湘菜。靠近宿舍区方便就餐。",
          location: "校园东部，宿舍区附近"
        },
        {
          title: "六食堂",
          tag: "特色小炒 · 味道好",
          rating: 4,
          desc: "以特色小炒出名，味道公认好。适合三五室友拼菜AA，人均15-20元吃得很好。",
          location: "校园东南部"
        },
        {
          title: "七食堂",
          tag: "环境好 · 新菜品",
          rating: 4,
          desc: "环境整洁舒适，经常推出新菜品。适合慢慢吃、聊天的食堂体验。人相对少一些。",
          location: "校园南侧"
        },
        {
          title: "九食堂",
          tag: "学霸食堂 · 近图书馆",
          rating: 4,
          desc: "紧邻图书馆，自习结束后顺路吃饭最方便。菜品实惠，分量足。考研党常驻地。",
          location: "校园西侧，图书馆旁"
        },
        {
          title: "十一食堂",
          tag: "清真 · 东苑专属",
          rating: 4,
          desc: "设有清真餐馆，照顾少数民族同学饮食习惯。东苑同学最近的食堂，艺术氛围浓。",
          location: "东苑区域"
        },
        {
          title: "奶茶一条街",
          tag: "瑞幸 · 蜜雪 · 茶百道",
          rating: 5,
          desc: "校内奶茶品牌全覆盖：瑞幸、库迪咖啡、蜜雪冰城、一点点、茶百道、益禾堂。7-11便利店和水果店也有。",
          location: "内街及各生活区"
        },
        {
          title: "涉外外街",
          tag: "笨萝卜 · 小吃街",
          rating: 5,
          desc: "校外涉外外街美食云集，笨萝卜是排队网红店。烤冷面、炸鸡、麻辣烫、各类小吃应有尽有，烟火气十足。",
          location: "南门外步行5分钟"
        }
      ]
    }
  },
  {
    id: "dorm-survival",
    num: "04",
    title: "宿舍生存手册",
    en: "DORM LIFE",
    color: "#FF9A6B",
    light: "rgba(255,154,107,0.10)",
    icon: "M19 7V4H5v3H2v13h8v-7h4v7h8V7h-3zm-8 0H8v2h3V7zm5 0h-3v2h3V7z",
    shortDesc: "东苑西苑南苑怎么选？设施门禁全知道",
    content: {
      type: "compare-tabs",
      tabs: [
        {
          name: "西苑宿舍区",
          icon: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
          info: [
            { label: "楼栋范围", value: "西1 ~ 西22栋" },
            { label: "推荐楼栋", value: "西7-8、西17-21（四人间）" },
            { label: "区位优势", value: "靠近田径场、体育馆，运动方便" },
            { label: "生活便利", value: "楼下有超市和快递点，内街步行3分钟" },
            { label: "特色", value: "西22有2人间可选，条件最优" }
          ]
        },
        {
          name: "东苑宿舍区",
          icon: "M12 3L1 9l11 6 9-4.91V17h2V9L12 3z",
          info: [
            { label: "楼栋范围", value: "东10 ~ 东14栋" },
            { label: "推荐楼栋", value: "东12（4-6人间，电梯楼）" },
            { label: "区位优势", value: "靠近音乐楼、十一教，艺术氛围浓" },
            { label: "生活便利", value: "东苑食堂近在咫尺，有独立商业配套" },
            { label: "特色", value: "东12是电梯楼，楼层高也不怕" }
          ]
        },
        {
          name: "南苑宿舍区",
          icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",
          info: [
            { label: "楼栋范围", value: "南2、南6等" },
            { label: "推荐楼栋", value: "南2、南6（4-6人间）" },
            { label: "区位优势", value: "靠近南门，出门就是公交站" },
            { label: "生活便利", value: "离涉外外街最近，外卖美食触手可及" },
            { label: "特色", value: "出行最方便，周末逛街说走就走" }
          ]
        }
      ],
      facilities: [
        { name: "空调", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z", has: true },
        { name: "独立卫浴", icon: "M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z", has: true },
        { name: "洗衣机", icon: "M18 6h-2V4H8v2H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z", has: true },
        { name: "饮水机", icon: "M3 2l1.5 2.5L3 7l1.5 2.5L3 12l1.5 2.5L3 17l1.5 2.5L3 22h18l-1.5-2.5L21 17l-1.5-2.5L21 12l-1.5-2.5L21 7l-1.5-2.5L21 2z", has: true },
        { name: " vending机", icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z", has: true },
        { name: "指纹门锁", icon: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z", has: true }
      ],
      rules: [
        { time: "06:30", desc: "宿舍开门，早晨可以正常出入" },
        { time: "23:00", desc: "宿舍锁门，晚归需登记并说明原因" },
        { time: "每周日~四", desc: "晚间查寝，保持寝室整洁和人员到齐" },
        { time: "淋浴热水", desc: "微信小程序扫码出水，充值即用，无需实体卡" }
      ]
    }
  },
  {
    id: "study-guide",
    num: "05",
    title: "学习通关指南",
    en: "STUDY GUIDE",
    color: "#FFD93D",
    light: "rgba(255,217,61,0.12)",
    icon: "M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z",
    shortDesc: "作息、课堂、德育分、图书馆，大一学习全攻略",
    content: {
      type: "tree",
      branches: [
        {
          title: "大一作息制度",
          icon: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z",
          items: [
            "早操：周一至周五 6:30 左右集合跑操",
            "晚自习：周日至周五 19:00-20:30 强制晚自习",
            "建议前一晚早睡，早操早起容易全天疲惫",
            "晚自习认真利用，不然后面课程跟不上"
          ]
        },
        {
          title: "课堂纪律要求",
          icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z",
          items: [
            "课前10分钟到教室，迟到会扣平时分",
            "上课期间收手机，可以带备用机应急",
            "座位靠前，互动多的同学平时分更高",
            "不迟到不旷课是底线，影响评奖评优"
          ]
        },
        {
          title: "德育分获取攻略",
          icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z",
          items: [
            "德育分毕业硬性门槛：60分",
            "参加社团活动、比赛、志愿服务均可获得",
            "建议大一开始积极积累，避免后期焦虑",
            "班委、学生会干事有固定德育分加成"
          ]
        },
        {
          title: "图书馆使用指南",
          icon: "M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z",
          items: [
            "刷卡门禁进入，周开放105小时",
            "地上五层地下两层，藏书289万册",
            "四楼至七楼有自习室，考研党圣地",
            "考试周座位紧张，建议早上占座"
          ]
        },
        {
          title: "大一成绩与规划",
          icon: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",
          items: [
            "大一成绩影响后续评奖评优和保研资格",
            "高等数学和英语是大一最容易挂科的科目",
            "英语四级建议大一就考，趁热打铁",
            "有考研意向的同学大二开始准备不早"
          ]
        }
      ]
    }
  },
  {
    id: "money-tips",
    num: "06",
    title: "省钱避坑宝典",
    en: "MONEY & TIPS",
    color: "#5BB8FF",
    light: "rgba(91,184,255,0.10)",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z",
    shortDesc: "点击翻牌，解锁学长学姐用钱换来的经验",
    content: {
      type: "flip-grid",
      cards: [
        {
          front: "大学生医保",
          back: "建议在家乡缴纳医保，不要重复在学校缴纳。学籍地和户籍地医保二选一即可，避免白花一份钱。",
          icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
        },
        {
          front: "校园卡充值",
          back: "校园龙卡不要一次性充太多，200-300元为宜。丢失后挂补麻烦，而且食堂消费不高，频繁充值更安全。",
          icon: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2z"
        },
        {
          front: "买书省钱术",
          back: "教材不一定买新的！学长学姐二手群、闲鱼、拼多多都有低价教材。一本高数新书几十块，二手只要几块钱。",
          icon: "M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
        },
        {
          front: "水果哪里买",
          back: "校内内街水果比食堂旁水果店便宜不少。涉外外街水果摊性价比更高。建议多比较，买当季水果。",
          icon: "M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4H10z"
        },
        {
          front: "行李怎么带",
          back: "被褥、收纳箱等大件不用从家扛到学校！校内超市平价齐全，或者提前快递到学校菜鸟驿站，省力又省钱。",
          icon: "M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z"
        },
        {
          front: "军训防晒",
          back: "军训防晒不是涂一次管一天！每2小时补涂一次，脖子后面和手臂别漏。晒后修复用芦荟胶，比贵妇面膜管用。",
          icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
        },
        {
          front: "外卖 vs 食堂",
          back: "食堂人均8-15元，外卖加上配送费普遍20+。一天三顿食堂约30元，月伙食费900元左右。偶尔外街换口味就好。",
          icon: "M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7z"
        },
        {
          front: "兼职避坑",
          back: "新生不要急着找兼职！大一先适应学习节奏。警惕刷单、打字员等网络兼职骗局。校内勤工助学岗位更靠谱。",
          icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
        }
      ]
    }
  },
  {
    id: "explore",
    num: "07",
    title: "周边探索指南",
    en: "EXPLORE",
    color: "#FF6B9D",
    light: "rgba(255,107,157,0.10)",
    icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
    shortDesc: "出行、商圈、景点，周末去哪玩一篇搞定",
    content: {
      type: "location-cards",
      cards: [
        {
          name: "地铁6号线",
          distance: "步行10分钟",
          transport: "南门出发步行至地铁口",
          desc: "涉外最近的地铁站，直达麓谷公园方向。换乘2号线可到五一广场、长沙南站。出行首选。",
          tips: "地铁是最快的出行方式，建议办一张交通卡"
        },
        {
          name: "步步高·梅溪新天地",
          distance: "公交2站",
          transport: "南门公交站直达",
          desc: "最近的大型商圈，购物、餐饮、电影院、书店一应俱全。周末聚餐逛街首选地。",
          tips: "商场里经常有学生优惠活动，关注公众号"
        },
        {
          name: "弘坤花样汇",
          distance: "步行15分钟",
          transport: "步行或共享单车",
          desc: "涉外周边另一热门商圈，美食多、性价比高。适合三五好友周末聚餐、唱K。",
          tips: "工作日去人少不用排队"
        },
        {
          name: "梅溪湖",
          distance: "地铁3站",
          transport: "6号线转2号线",
          desc: "长沙最美城市湖泊之一，环湖绿道适合散步骑行。夜晚梅溪湖音乐喷泉是网红打卡点。",
          tips: "傍晚去最舒服，看完喷泉再回来"
        },
        {
          name: "五一广场",
          distance: "地铁约30分钟",
          transport: "6号线转2号线",
          desc: "长沙最核心商圈，黄兴步行街、太平老街、IFS国金中心都在附近。吃货天堂。",
          tips: "周末人多，建议工作日去体验更好"
        },
        {
          name: "橘子洲头",
          distance: "地铁约35分钟",
          transport: "6号线转2号线",
          desc: "长沙地标景点，毛主席青年艺术雕塑。每周六晚有烟花表演（季节性），值得一看。",
          tips: "橘子洲很大，建议坐观光小火车"
        }
      ]
    }
  }
];

// ===== 入群信息 =====
const joinInfo = {
  qrImage: "images/group_qr.jpg",
  qrTitle: "湖南涉外经济学院26级新生群",
  qrNote: "微信扫码加入新生群",
  contacts: [
    { label: "学长V", value: "lundatong11" }
  ]
};

// ===== 校园建筑数据 =====
const buildings = [
  { id: 1, name: "正大门", category: "校园入口", icon: "M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z", description: "学校的主入口，气势宏伟，白天沉稳安静，夜晚灯光璀璨。校门是两个世界的界限——里面是书生意气，外面是大千世界。", location: "校园北侧", tip: "新生报到通常从此门进入，门口有迎新志愿者引导。" },
  { id: 2, name: "综合楼", category: "行政办公", icon: "M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z", description: "宏伟大气的综合办公楼，学校主要行政部门集中在此，包括教务处、学工处、招生就业处等。", location: "校园北侧，靠近北门", tip: "学生服务大厅在综合楼附近，校园卡办理、热水卡充值等业务都在这里。" },
  { id: 3, name: "图书馆", category: "学习场所", icon: "M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z", description: "学校地标建筑，弧形主建筑像张开的双臂。建筑面积2.17万平方米，地上五层地下两层，藏书289万册，学习座位4001个。", location: "校园西侧", tip: "刷卡门禁进入，周开放105小时。四楼至七楼分布着自习室，是考研党的圣地。" },
  { id: 4, name: "第一教学楼", category: "教学楼", icon: "M12 3L1 9l11 6 9-4.91V17h2V9L12 3z", description: "人文艺术学院主要教学楼。汉语言文学、法学、网络与新媒体等专业课程在此授课。", location: "校园中部", tip: "入口处有浓郁的人文气息，走廊上经常展示学生优秀作品。" },
  { id: 5, name: "第二教学楼", category: "教学楼", icon: "M12 3L1 9l11 6 9-4.91V17h2V9L12 3z", description: "商学院主要教学楼。国际经济与贸易、会计学、金融学、工商管理等专业课程在此授课。", location: "校园中部", tip: "商学院是学校规模最大的学院之一。" },
  { id: 6, name: "第三教学楼", category: "教学楼", icon: "M12 3L1 9l11 6 9-4.91V17h2V9L12 3z", description: "管理学院教学楼。入口处有代表欧洲古典文明的柱廊及雕塑，以及柏拉图和亚里士多德的雕像。", location: "校园中部", tip: "建筑风格独特，是拍照打卡的好地方。" },
  { id: 7, name: "第四教学楼", category: "教学楼", icon: "M12 3L1 9l11 6 9-4.91V17h2V9L12 3z", description: "公共教学楼，各类公共课、选修课在此授课，是各学院学生交汇的地方。", location: "校园中部，靠近南门", tip: "离南门最近，课后出门就是公交站和各类美食。" },
  { id: 8, name: "第五教学楼（钟楼）", category: "教学楼", icon: "M12 3L1 9l11 6 9-4.91V17h2V9L12 3z", description: "外国语学院教学楼，标志性建筑是钟楼。英语、日语、商务英语、西班牙语、朝鲜语等专业在此授课。", location: "校园东侧", tip: "钟楼是涉外的标志性建筑之一，外国语学院学生经常在此晨读。" },
  { id: 9, name: "第六教学楼", category: "实验楼", icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z", description: "实验楼，主要承担理工科实验课程。与七教、八教构成理工科教学楼群。", location: "校园东南部", tip: "六、七、八教学楼群是理工科教学楼群，实验设备齐全。" },
  { id: 10, name: "第七教学楼", category: "教学楼", icon: "M12 3L1 9l11 6 9-4.91V17h2V9L12 3z", description: "信息与机电工程学院主要教学楼。计算机科学与技术、软件工程、人工智能等专业课程在此授课。", location: "校园东南部", tip: "信工学院是学校规模最大的学院，拥有多个专业实验室。" },
  { id: 11, name: "第八教学楼", category: "教学楼", icon: "M12 3L1 9l11 6 9-4.91V17h2V9L12 3z", description: "机械工程学院教学楼。机械设计制造及其自动化、车辆工程等专业课程在此授课。", location: "校园东南部", tip: "拥有工程车辆底盘制造工程技术研究中心等省级科研平台。" },
  { id: 12, name: "第十教学楼（音乐楼）", category: "教学楼", icon: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z", description: "音乐学院教学楼，建筑风格高级感十足。设有琴房、舞蹈排练厅等专业教室。", location: "东苑区域", tip: "东苑是艺术的天堂，入口处柱式设计简洁突出。" },
  { id: 13, name: "第十一教学楼", category: "教学楼", icon: "M12 3L1 9l11 6 9-4.91V17h2V9L12 3z", description: "艺术设计学院教学楼。视觉传达设计、环境设计、数字媒体艺术等专业课程在此授课。", location: "东苑区域", tip: "艺术氛围浓厚，走廊和展厅经常有学生作品展览。" },
  { id: 14, name: "体育馆", category: "运动场馆", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z", description: "多功能体育馆，设施一应俱全。设有台球室、游泳馆、健身房、篮球场、舞蹈房等，几乎能满足所有运动需求。", location: "校园东部", tip: "游泳馆和健身房凭校园卡可优惠使用。体育课选课要趁早。" },
  { id: 15, name: "微澜湖", category: "景观", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z", description: "校园内的景观湖，波光粼粼，与周围的建筑相映成趣。湖边绿树成荫，是散步、晨读的好去处。", location: "校园中心区域", tip: "傍晚在湖边散步是涉外学子的日常，拍照出片率极高。" },
  { id: 16, name: "内街", category: "生活配套", icon: "M19 7c0-1.1-.9-2-2-2h-3v2h3v2.65L13.52 14H10V9H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.47L19 10.35V7z", description: "一条五彩缤纷的街道，各种彩色铺子坐落于此。水果、日用品、零食小店，被浓浓的烟火气包围。", location: "校园中部", tip: "内街是校园生活的重要组成部分，日常购物、小吃一站式解决。" },
  { id: 17, name: "学生食堂", category: "生活配套", icon: "M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7z", description: "学校共有7个食堂：一食堂、四食堂、五食堂、六食堂、七食堂、九食堂和十一食堂。菜品丰富多样，平均消费约30元/天。", location: "分布在校园各区域", tip: "使用校园龙卡消费。各食堂各有特色，多尝试找到自己的最爱。" },
  { id: 18, name: "学生服务大厅", category: "行政办公", icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z", description: "一站式学生服务中心，办理校园卡充值、热水卡充值、校园网开通、助学贷款等各类学生事务。", location: "综合楼附近", tip: "热水卡充值、校园网办理都在这里。" }
];

// ===== 宿舍信息（仅四人间、六人间） =====
const dormitories = [
  {
    type: "四人间", price: "1200元/年", beds: "4人", layout: "上床下桌", area: "约25㎡",
    features: ["空调", "独立卫生间", "独立淋浴间", "24小时热水", "阳台", "衣柜", "书桌书架", "校园网接口"],
    description: "最受欢迎的宿舍类型，上床下桌设计保障个人学习与休息空间。东十二宿舍楼为电梯楼，条件最优。",
    popularity: "热门", rating: 5
  },
  {
    type: "六人间", price: "700元/年", beds: "6人", layout: "上下铺（四上二下）", area: "约30㎡",
    features: ["空调", "独立卫生间", "独立淋浴间", "24小时热水", "阳台", "衣柜", "书桌", "校园网接口"],
    description: "性价比较高的选择，空间宽敞。四个上铺两个下铺，配有共用书桌和储物柜。",
    popularity: "常见", rating: 4
  }
];

// ===== 食堂信息 =====
const canteens = [
  { name: "一食堂", location: "校园北部", feature: "菜品齐全，价格实惠" },
  { name: "四食堂", location: "校园中部", feature: "种类丰富，人流量大" },
  { name: "五食堂", location: "校园东部", feature: "靠近宿舍区，方便就餐" },
  { name: "六食堂", location: "校园东南部", feature: "特色小炒，味道好" },
  { name: "七食堂", location: "校园南侧", feature: "环境整洁，菜品新颖" },
  { name: "九食堂", location: "校园西侧", feature: "靠近图书馆，学习后就餐方便" },
  { name: "十一食堂", location: "东苑区域", feature: "清真餐馆，照顾少数民族学生" }
];

// ===== 院系与专业数据 =====
const colleges = [
  {
    id: "business", name: "商学院", building: "第二、三教学楼",
    icon: "M16 6v8h2V6h-2zm-4 2v6h2V8h-2zm-4 2v4h2v-4H8zm-4 2v2h2v-2H4z",
    majors: [
      {
        name: "会计学", code: "120203K", degree: "管理学学士",
        schedule1: [
          { name: "思想道德修养与法律基础", hours: 48, credits: 3, type: "通识必修", weekly: 2 },
          { name: "大学生心理健康教育", hours: 32, credits: 2, type: "通识必修", weekly: 2 },
          { name: "大学英语(一)", hours: 64, credits: 4, type: "通识必修", weekly: 4 },
          { name: "大学计算机基础", hours: 64, credits: 4, type: "通识必修", weekly: 4 },
          { name: "高等数学(一)A", hours: 64, credits: 4, type: "通识必修", weekly: 4 },
          { name: "大学体育(一)", hours: 32, credits: 2, type: "通识必修", weekly: 2 },
          { name: "军事理论与训练", hours: "2周", credits: 2, type: "实践教学", weekly: "-" },
          { name: "基础会计", hours: 64, credits: 4, type: "专业必修", weekly: 4 }
        ],
        schedule2: [
          { name: "毛中特概论", hours: 108, credits: 6, type: "通识必修", weekly: 3 },
          { name: "大学英语(二)", hours: 72, credits: 4, type: "通识必修", weekly: 4 },
          { name: "高等数学(二)A", hours: 72, credits: 4, type: "通识必修", weekly: 4 },
          { name: "大学体育(二)", hours: 36, credits: 2, type: "通识必修", weekly: 2 },
          { name: "数据库基础与应用", hours: 72, credits: 4, type: "通识必修", weekly: 4 },
          { name: "中级财务会计(一)", hours: 72, credits: 4, type: "专业必修", weekly: 4 }
        ]
      },
      {
        name: "国际经济与贸易", code: "020401", degree: "经济学学士",
        schedule1: [
          { name: "思想道德修养与法律基础", hours: 48, credits: 3, type: "通识必修", weekly: 2 },
          { name: "大学英语(一)", hours: 64, credits: 4, type: "通识必修", weekly: 4 },
          { name: "大学计算机基础", hours: 64, credits: 4, type: "通识必修", weekly: 4 },
          { name: "高等数学(一)B", hours: 64, credits: 4, type: "通识必修", weekly: 4 },
          { name: "大学体育(一)", hours: 32, credits: 2, type: "通识必修", weekly: 2 },
          { name: "军事理论与训练", hours: "2周", credits: 2, type: "实践教学", weekly: "-" },
          { name: "政治经济学", hours: 64, credits: 4, type: "专业必修", weekly: 4 },
          { name: "微观经济学", hours: 64, credits: 4, type: "专业必修", weekly: 4 }
        ],
        schedule2: [
          { name: "毛中特概论", hours: 108, credits: 6, type: "通识必修", weekly: 3 },
          { name: "大学英语(二)", hours: 72, credits: 4, type: "通识必修", weekly: 4 },
          { name: "高等数学(二)B", hours: 72, credits: 4, type: "通识必修", weekly: 4 },
          { name: "大学体育(二)", hours: 36, credits: 2, type: "通识必修", weekly: 2 },
          { name: "宏观经济学", hours: 72, credits: 4, type: "专业必修", weekly: 4 },
          { name: "国际贸易理论", hours: 54, credits: 3, type: "专业必修", weekly: 3 }
        ]
      },
      {
        name: "金融学", code: "020301K", degree: "经济学学士",
        schedule1: [
          { name: "思想道德修养与法律基础", hours: 48, credits: 3, type: "通识必修", weekly: 2 },
          { name: "大学英语(一)", hours: 64, credits: 4, type: "通识必修", weekly: 4 },
          { name: "大学计算机基础", hours: 64, credits: 4, type: "通识必修", weekly: 4 },
          { name: "高等数学(一)A", hours: 64, credits: 4, type: "通识必修", weekly: 4 },
          { name: "大学体育(一)", hours: 32, credits: 2, type: "通识必修", weekly: 2 },
          { name: "军事理论与训练", hours: "2周", credits: 2, type: "实践教学", weekly: "-" },
          { name: "微观经济学", hours: 64, credits: 4, type: "专业必修", weekly: 4 },
          { name: "金融学概论", hours: 48, credits: 3, type: "专业必修", weekly: 3 }
        ],
        schedule2: [
          { name: "毛中特概论", hours: 108, credits: 6, type: "通识必修", weekly: 3 },
          { name: "大学英语(二)", hours: 72, credits: 4, type: "通识必修", weekly: 4 },
          { name: "高等数学(二)A", hours: 72, credits: 4, type: "通识必修", weekly: 4 },
          { name: "大学体育(二)", hours: 36, credits: 2, type: "通识必修", weekly: 2 },
          { name: "宏观经济学", hours: 72, credits: 4, type: "专业必修", weekly: 4 },
          { name: "会计学原理", hours: 54, credits: 3, type: "专业必修", weekly: 3 }
        ]
      }
    ]
  },
  {
    id: "engineering", name: "信息与机电工程学院", building: "第六、七、八教学楼",
    icon: "M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4z",
    majors: [
      {
        name: "计算机科学与技术", code: "080901", degree: "工学学士",
        schedule1: [
          { name: "思想道德修养与法律基础", hours: 48, credits: 3, type: "通识必修", weekly: 2 },
          { name: "高等数学(一)A", hours: 64, credits: 4, type: "通识必修", weekly: 4 },
          { name: "大学英语(一)", hours: 64, credits: 4, type: "通识必修", weekly: 4 },
          { name: "大学体育(一)", hours: 32, credits: 2, type: "通识必修", weekly: 2 },
          { name: "军事理论与训练A", hours: "2周", credits: 2, type: "实践教学", weekly: "-" },
          { name: "计算机科学导论", hours: 64, credits: 4, type: "专业必修", weekly: 4 },
          { name: "高级语言程序设计", hours: 64, credits: 4, type: "专业必修", weekly: 4 },
          { name: "线性代数A", hours: 48, credits: 3, type: "专业必修", weekly: 3 }
        ],
        schedule2: [
          { name: "毛中特概论", hours: 108, credits: 6, type: "通识必修", weekly: 3 },
          { name: "高等数学(二)A", hours: 72, credits: 4, type: "通识必修", weekly: 4 },
          { name: "大学英语(二)", hours: 72, credits: 4, type: "通识必修", weekly: 4 },
          { name: "大学体育(二)", hours: 36, credits: 2, type: "通识必修", weekly: 2 },
          { name: "离散数学", hours: 54, credits: 3, type: "专业必修", weekly: 3 },
          { name: "面向对象程序设计", hours: 72, credits: 4, type: "专业必修", weekly: 4 },
          { name: "数字电子技术", hours: 72, credits: 4, type: "专业必修", weekly: 4 }
        ]
      },
      {
        name: "软件工程", code: "080902", degree: "工学学士",
        schedule1: [
          { name: "思想道德修养与法律基础", hours: 48, credits: 3, type: "通识必修", weekly: 2 },
          { name: "高等数学(一)A", hours: 64, credits: 4, type: "通识必修", weekly: 4 },
          { name: "大学英语(一)", hours: 64, credits: 4, type: "通识必修", weekly: 4 },
          { name: "大学体育(一)", hours: 32, credits: 2, type: "通识必修", weekly: 2 },
          { name: "军事理论与训练A", hours: "2周", credits: 2, type: "实践教学", weekly: "-" },
          { name: "软件工程导论", hours: 48, credits: 3, type: "专业必修", weekly: 3 },
          { name: "高级语言程序设计", hours: 64, credits: 4, type: "专业必修", weekly: 4 },
          { name: "线性代数A", hours: 48, credits: 3, type: "专业必修", weekly: 3 }
        ],
        schedule2: [
          { name: "毛中特概论", hours: 108, credits: 6, type: "通识必修", weekly: 3 },
          { name: "高等数学(二)A", hours: 72, credits: 4, type: "通识必修", weekly: 4 },
          { name: "大学英语(二)", hours: 72, credits: 4, type: "通识必修", weekly: 4 },
          { name: "大学体育(二)", hours: 36, credits: 2, type: "通识必修", weekly: 2 },
          { name: "离散数学", hours: 54, credits: 3, type: "专业必修", weekly: 3 },
          { name: "数据结构", hours: 72, credits: 4, type: "专业必修", weekly: 4 },
          { name: "面向对象程序设计", hours: 72, credits: 4, type: "专业必修", weekly: 4 }
        ]
      }
    ]
  },
  {
    id: "humanities", name: "人文艺术学院", building: "第一、十一教学楼",
    icon: "M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z",
    majors: [
      {
        name: "汉语言文学", code: "050101", degree: "文学学士",
        schedule1: [
          { name: "思想道德修养与法律基础", hours: 48, credits: 3, type: "通识必修", weekly: 2 },
          { name: "大学英语(一)", hours: 64, credits: 4, type: "通识必修", weekly: 4 },
          { name: "大学计算机基础", hours: 64, credits: 4, type: "通识必修", weekly: 4 },
          { name: "大学体育(一)", hours: 32, credits: 2, type: "通识必修", weekly: 2 },
          { name: "军事理论与训练", hours: "2周", credits: 2, type: "实践教学", weekly: "-" },
          { name: "现代汉语(一)", hours: 72, credits: 4, type: "专业必修", weekly: 4 },
          { name: "中国古代文学史(一)", hours: 72, credits: 4, type: "专业必修", weekly: 4 },
          { name: "写作基础", hours: 36, credits: 2, type: "专业必修", weekly: 2 }
        ],
        schedule2: [
          { name: "毛中特概论", hours: 108, credits: 6, type: "通识必修", weekly: 3 },
          { name: "大学英语(二)", hours: 72, credits: 4, type: "通识必修", weekly: 4 },
          { name: "大学体育(二)", hours: 36, credits: 2, type: "通识必修", weekly: 2 },
          { name: "现代汉语(二)", hours: 72, credits: 4, type: "专业必修", weekly: 4 },
          { name: "中国古代文学史(二)", hours: 72, credits: 4, type: "专业必修", weekly: 4 },
          { name: "文学理论", hours: 54, credits: 3, type: "专业必修", weekly: 3 }
        ]
      },
      {
        name: "法学", code: "030101K", degree: "法学学士",
        schedule1: [
          { name: "思想道德修养与法律基础", hours: 48, credits: 3, type: "通识必修", weekly: 2 },
          { name: "大学英语(一)", hours: 64, credits: 4, type: "通识必修", weekly: 4 },
          { name: "大学计算机基础", hours: 64, credits: 4, type: "通识必修", weekly: 4 },
          { name: "大学体育(一)", hours: 32, credits: 2, type: "通识必修", weekly: 2 },
          { name: "军事理论与训练", hours: "2周", credits: 2, type: "实践教学", weekly: "-" },
          { name: "法理学", hours: 72, credits: 4, type: "专业必修", weekly: 4 },
          { name: "宪法学", hours: 54, credits: 3, type: "专业必修", weekly: 3 },
          { name: "民法总论", hours: 72, credits: 4, type: "专业必修", weekly: 4 }
        ],
        schedule2: [
          { name: "毛中特概论", hours: 108, credits: 6, type: "通识必修", weekly: 3 },
          { name: "大学英语(二)", hours: 72, credits: 4, type: "通识必修", weekly: 4 },
          { name: "大学体育(二)", hours: 36, credits: 2, type: "通识必修", weekly: 2 },
          { name: "刑法总论", hours: 72, credits: 4, type: "专业必修", weekly: 4 },
          { name: "民法分论", hours: 72, credits: 4, type: "专业必修", weekly: 4 },
          { name: "中国法制史", hours: 54, credits: 3, type: "专业必修", weekly: 3 }
        ]
      }
    ]
  },
  {
    id: "foreign", name: "外国语学院", building: "第五教学楼（钟楼）",
    icon: "M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04z",
    majors: [
      {
        name: "英语", code: "050201", degree: "文学学士",
        schedule1: [
          { name: "思想道德修养与法律基础", hours: 48, credits: 3, type: "通识必修", weekly: 2 },
          { name: "大学体育(一)", hours: 32, credits: 2, type: "通识必修", weekly: 2 },
          { name: "军事理论与训练", hours: "2周", credits: 2, type: "实践教学", weekly: "-" },
          { name: "综合英语(一)", hours: 96, credits: 6, type: "专业必修", weekly: 6 },
          { name: "英语听力(一)", hours: 36, credits: 2, type: "专业必修", weekly: 2 },
          { name: "英语口语(一)", hours: 36, credits: 2, type: "专业必修", weekly: 2 },
          { name: "英语阅读(一)", hours: 36, credits: 2, type: "专业必修", weekly: 2 }
        ],
        schedule2: [
          { name: "毛中特概论", hours: 108, credits: 6, type: "通识必修", weekly: 3 },
          { name: "大学体育(二)", hours: 36, credits: 2, type: "通识必修", weekly: 2 },
          { name: "综合英语(二)", hours: 96, credits: 6, type: "专业必修", weekly: 6 },
          { name: "英语听力(二)", hours: 36, credits: 2, type: "专业必修", weekly: 2 },
          { name: "英语口语(二)", hours: 36, credits: 2, type: "专业必修", weekly: 2 },
          { name: "英语语法", hours: 36, credits: 2, type: "专业必修", weekly: 2 }
        ]
      },
      {
        name: "商务英语", code: "050262", degree: "文学学士",
        schedule1: [
          { name: "思想道德修养与法律基础", hours: 48, credits: 3, type: "通识必修", weekly: 2 },
          { name: "大学体育(一)", hours: 32, credits: 2, type: "通识必修", weekly: 2 },
          { name: "军事理论与训练", hours: "2周", credits: 2, type: "实践教学", weekly: "-" },
          { name: "综合商务英语(一)", hours: 96, credits: 6, type: "专业必修", weekly: 6 },
          { name: "商务英语听力(一)", hours: 36, credits: 2, type: "专业必修", weekly: 2 },
          { name: "商务英语口语(一)", hours: 36, credits: 2, type: "专业必修", weekly: 2 },
          { name: "经济学导论(英)", hours: 36, credits: 2, type: "专业必修", weekly: 2 }
        ],
        schedule2: [
          { name: "毛中特概论", hours: 108, credits: 6, type: "通识必修", weekly: 3 },
          { name: "大学体育(二)", hours: 36, credits: 2, type: "通识必修", weekly: 2 },
          { name: "综合商务英语(二)", hours: 96, credits: 6, type: "专业必修", weekly: 6 },
          { name: "商务英语听力(二)", hours: 36, credits: 2, type: "专业必修", weekly: 2 },
          { name: "商务英语口语(二)", hours: 36, credits: 2, type: "专业必修", weekly: 2 },
          { name: "国际贸易实务(英)", hours: 54, credits: 3, type: "专业必修", weekly: 3 }
        ]
      }
    ]
  },
  {
    id: "music", name: "音乐学院", building: "第十教学楼（音乐楼）",
    icon: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z",
    majors: [
      {
        name: "音乐学", code: "130202", degree: "艺术学学士",
        schedule1: [
          { name: "思想道德修养与法律基础", hours: 48, credits: 3, type: "通识必修", weekly: 2 },
          { name: "大学英语(一)", hours: 64, credits: 4, type: "通识必修", weekly: 4 },
          { name: "大学体育(一)", hours: 32, credits: 2, type: "通识必修", weekly: 2 },
          { name: "军事理论与训练", hours: "2周", credits: 2, type: "实践教学", weekly: "-" },
          { name: "基本乐理", hours: 54, credits: 3, type: "专业必修", weekly: 3 },
          { name: "视唱练耳(一)", hours: 54, credits: 3, type: "专业必修", weekly: 3 },
          { name: "声乐(一)", hours: 36, credits: 2, type: "专业必修", weekly: 2 },
          { name: "钢琴(一)", hours: 36, credits: 2, type: "专业必修", weekly: 2 }
        ],
        schedule2: [
          { name: "毛中特概论", hours: 108, credits: 6, type: "通识必修", weekly: 3 },
          { name: "大学英语(二)", hours: 72, credits: 4, type: "通识必修", weekly: 4 },
          { name: "大学体育(二)", hours: 36, credits: 2, type: "通识必修", weekly: 2 },
          { name: "视唱练耳(二)", hours: 54, credits: 3, type: "专业必修", weekly: 3 },
          { name: "和声学(一)", hours: 54, credits: 3, type: "专业必修", weekly: 3 },
          { name: "声乐(二)", hours: 36, credits: 2, type: "专业必修", weekly: 2 }
        ]
      }
    ]
  },
  {
    id: "sports", name: "体育学院", building: "体育馆",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
    majors: [
      {
        name: "社会体育指导与管理", code: "040203", degree: "教育学学士",
        schedule1: [
          { name: "思想道德修养与法律基础", hours: 48, credits: 3, type: "通识必修", weekly: 2 },
          { name: "大学英语(一)", hours: 64, credits: 4, type: "通识必修", weekly: 4 },
          { name: "大学计算机基础", hours: 64, credits: 4, type: "通识必修", weekly: 4 },
          { name: "军事理论与训练", hours: "2周", credits: 2, type: "实践教学", weekly: "-" },
          { name: "体育学概论", hours: 36, credits: 2, type: "专业必修", weekly: 2 },
          { name: "运动解剖学", hours: 54, credits: 3, type: "专业必修", weekly: 3 },
          { name: "运动生理学", hours: 54, credits: 3, type: "专业必修", weekly: 3 },
          { name: "田径", hours: 72, credits: 4, type: "专业必修", weekly: 4 }
        ],
        schedule2: [
          { name: "毛中特概论", hours: 108, credits: 6, type: "通识必修", weekly: 3 },
          { name: "大学英语(二)", hours: 72, credits: 4, type: "通识必修", weekly: 4 },
          { name: "体育心理学", hours: 54, credits: 3, type: "专业必修", weekly: 3 },
          { name: "篮球", hours: 72, credits: 4, type: "专业必修", weekly: 4 },
          { name: "足球", hours: 54, credits: 3, type: "专业必修", weekly: 3 },
          { name: "武术", hours: 54, credits: 3, type: "专业必修", weekly: 3 }
        ]
      }
    ]
  }
];

// ===== 新生FAQ =====
const faqs = [
  { question: "宿舍是怎么分配的？可以自己选吗？", answer: "宿舍与床位由学校统一安排分配，报到后按照学校的安排入住。宿舍类型主要分为四人间和六人间，均配备空调、独立卫浴等设施。具体楼栋和房间号在报到时确定。" },
  { question: "宿舍有空调和独立卫生间吗？", answer: "有的！学校宿舍空调全覆盖，每间寝室都配备了空调。大部分宿舍都有独立卫生间，且有24小时热水供应。淋浴热水大部分使用热水卡充值，部分楼栋采用微信小程序。" },
  { question: "宿舍门禁时间是什么时候？", answer: "大部分宿舍楼栋早上6:30开门，晚上23:00锁门。宿管24小时值班，每周日至每周四晚会进行查寝。宿舍均为指纹门锁。" },
  { question: "学校有几个食堂？消费水平怎么样？", answer: "学校共有7个食堂：一食堂、四食堂、五食堂、六食堂、七食堂、九食堂和十一食堂。菜品齐全，价格实惠，平均伙食消费约30元/天。使用校园龙卡消费。" },
  { question: "如何办理校园网？", answer: "校园网覆盖了校内所有区域，需要办理校园网的同学可前往学生服务大厅进行业务办理。宿舍楼道里都安装了直饮水机，需要自己充值扫码使用。" },
  { question: "大一需要上早晚自习吗？", answer: "大部分二级学院的大一学生都需要上早晚自习，具体安排看各学院的规定。早操周一到周五6:30左右集合跑操，晚自习周日至周五强制晚自习。" },
  { question: "学校交通方便吗？周边有什么？", answer: "涉外交通比较方便，南门就有公交站，附近有地铁6号线。校内有7-11便利店、瑞幸咖啡，外街有茶颜悦色和各种美食。梅溪湖步步高、弘坤花样汇两大商圈也近在咫尺。" },
  { question: "学费怎么交？有奖助学金吗？", answer: "学费严格按照学校上报湖南省发改委备案并批准的收费标准收费。学校按照湖南省教育厅统一部署发放国家奖学金、国家励志奖学金、国家助学金，同时设置校奖学金（500~2000元/人）。" },
  { question: "军训安排在什么时候？", answer: "军训通常安排在大一第一学期开学初进行，作为军事理论与训练课程，计2学分。建议提前准备好防晒用品和舒适的鞋垫。" },
  { question: "德育分是什么？重要吗？", answer: "德育分是毕业硬性门槛，需要达到60分才能毕业。参加活动、比赛、志愿服务等均可获得德育分，建议大一开始就积极参与积累。" }
];
