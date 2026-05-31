// 语言数据
const translations = {
  zh: {
    // 导航栏
    navProducts: '产品',
    navTech: '技术',
    navColors: '颜色',
    navCompat: '适配车型',
    navContact: '联系我们',
    navCta: '立即购买',
    
    // Hero区域
    heroScroll: '向下滚动',
    stat1Label: '全方位通风',
    stat2Label: '档位调节',
    stat3Label: '快速安装',
    stat4Label: '颜色可选',
    stat5Label: 'USB供电',
    
    // 产品区
    goldStripe: '第三代汽车座椅通风系统',
    gen1Title: '第一代',
    gen1Feat1: '风机仅布置于坐垫前侧，导致通风范围受限，靠背无法享受到通风效果。',
    
    gen2Title: '第二代',
    gen2Feat1: '该款通风坐垫于臀、背区域配备多组小风扇，全域均可通风降温。但存在明显缺陷：运转噪音大、风量不足，风扇震动感显著，且座垫质地偏硬，乘坐舒适度欠佳。',
    
    prod1Tag: '第 01 代',
    prod1Title: '第一代',
    prod1Feat1: '专为驾驶时通风而设计',
    prod1Feat2: '内置风扇排出身体热量',
    prod1Feat3: '节省车载空调能耗',
    
    prod2Tag: '第 02 代',
    prod2Title: '第二代',
    prod2Feat1: '增加皮革纹理防止皮肤紧贴',
    prod2Feat2: '进出气流通更顺畅',
    prod2Feat3: '更快速降低日晒热量',
    prod2Feat4: '提供4种颜色选择',
    
    prod3Tag: '第 03 代',
    prod3Title: '第三代',
    prod3Sub: '循环通风系统正在运行',
    prod3Desc: '最高效的通风结构，经过研究开发以创造最佳空气循环环境。安装简便，无需改装车辆，支持所有车型。',
    kpi1Label: '档位调节',
    kpi2Label: '循环通风',
    kpi3Label: '立体结构',
    kpi4Label: 'USB供电',
    prod3Feat1: '贴合座椅靠垫，安装简单无负担',
    prod3Feat2: '超低功耗，使用车载USB接口',
    prod3Feat3: '适合驾驶员和乘客使用',
    prod3PosterTitleSm: '第三代',
    prod3PosterTitleLg: '完美的汽车座垫循环通风系统',
    prod3PosterRightText: 'AirCool 第三代汽车座椅循环通风系统采用全新通风架构，大尺寸涡轮风机隐藏布置在座椅底部。依托分体式结构阻断震动传递，兼具大风量与低噪音特性，内部冷风持续循环流通，为现阶段综合性能领先的座椅通风方案。',
    prod3PosterLeftText: '全新研发的通风坐垫专用风机，兼顾使用性能与外观整体性。采用弧形通风管路及鸭嘴出风口结构，支持无损简易安装，整机隐蔽性强。设备安装后不会缩减后排乘坐空间，同时可规避后排人员触碰带来的管路脱落问题，结构设计合理可靠。',
    prod3PosterCallout1: '凉风沿着通风管道输送到座椅表面持续循环，让乘坐一路保持凉快舒适',
    prod3PosterCallout2: '全新设计的导风管结构，无损安装，无痕贴合，不影响后排乘坐空间',
    prod3PosterCallout3: '风扇安装于坐垫下方，运行安静并减少震动',
    
    featFans: '5min快速无损安装',
    feat3Speed: '3档开关',
    featPower: '12V点烟器取电',
    featQuiet: '静音运行 不影响休息',
    
    // 技术区
    techTitle: '领先',
    techTitleSpan: '技术',
    techSubtitle: '每个细节都为最高性能而设计',
    tech1Title: '360°通风系统',
    tech1Desc: '空气从背部、侧面和底部全方位流通，覆盖身体每个接触点',
    tech2Title: '3D透气网布结构',
    tech2Desc: '特殊设计的三维透气网布，让空气自由流通而不失柔软舒适',
    tech3Title: '3档风力调节',
    tech3Desc: '根据需求调节3档风力，通过易用按钮控制并配有状态指示灯',
    tech4Title: '超静音电机',
    tech4Desc: '特殊静音电机不干扰驾驶或交谈，专为安静体验而设计',
    tech5Title: '节能省电',
    tech5Desc: '使用车载12V USB接口供电，不影响电池，全程可用',
    tech6Title: '安装简便 无需改装',
    tech6Desc: '设计简单易用，几分钟内自行安装，无需钻孔或改装车辆',
    
    // 颜色区
    colorStripe: '4种颜色可选',
    color1Name: '黑红配色',
    color1Desc: '黑红运动款',
    color2Name: '黑蓝配色',
    color2Desc: '黑蓝现代款',
    color3Name: '经典黑',
    color3Desc: '经典黑色',
    color4Name: '驼色米色',
    color4Desc: '驼色豪华款',
    
    // 材质区
    matTitle: '优质',
    matTitleSpan: '材料',
    mat1Tag: '皮革',
    mat1Title: '皮革边缘 & 精致缝线',
    mat1Desc: '高品质PU皮革，手工缝线，耐用持久，美观大方',
    mat2Tag: '网布',
    mat2Title: '3D透气网布',
    mat2Desc: '特殊三维网布结构，最大化空气流通，保持凉爽舒适',
    mat3Tag: '柔软舒适',
    mat3Title: '柔软面料原车坐感',
    mat3Desc: '座垫内无塑胶导风板，采用特殊3D结构内衬，坐感柔软舒适。',
    
    // 兼容区
    compatBig1: '适配',
    compatBig2: '所有车型',
    compat1: '轿车',
    compat2: 'SUV',
    compat3: '皮卡',
    compat4: '货车',
    
    // 页脚
    footerTagline: 'AirCool 是泰国领先的汽车座椅通风系统制造商。我们致力于为每次旅程提供最佳的舒适和凉爽体验。',
    footerCompany: '公司',
    footerCompanyVal: 'AirCool 商标所有者',
    footerVoltage: '电压',
    footerVoltageVal: '12V 电机驱动',
    footerLevels: '档位调节',
    footerLevelsVal: '可调节 1-3 档',
    footerPurpose: '用途',
    footerPurposeVal: '驾驶员 + 乘客散热',
    footerColors: '颜色选择',
    footerColorsVal: '纯黑 / 黑红 / 黑蓝 / 米色',
    footerCompatible: '适配车型',
    footerCompatibleVal: '轿车/SUV/皮卡/货车全车型',
    footerWarranty: '质保',
    footerWarrantyVal: '1年质保',
    footerDesign: '产地',
    footerDesignVal: '泰国制造',
    footerContactTitle: '联系我们',
    footerContactPerson: '联系人-A先生',
    footerWorkingHours: '工作时间: 7X24 小时',
    footerPhone: '电话号码:852639554',
    footerEmail: 'EMAIL:XXXXX@Gmail.com',
    footerCopyright: '© 2026 AirCool. All rights reserved.'
  },
  th: {
    // 导航栏
    navProducts: 'ผลิตภัณฑ์',
    navTech: 'เทคโนโลยี',
    navColors: 'สีสัน',
    navCompat: 'รถที่รองรับ',
    navContact: 'ติดต่อ',
    navCta: 'สั่งซื้อเลย',
    
    // Hero区域
    heroScroll: 'เลื่อนลง',
    stat1Label: 'ระบายรอบทิศ',
    stat2Label: 'ระดับความแรง',
    stat3Label: 'ติดตั้งรวดเร็ว',
    stat4Label: 'สีให้เลือก',
    stat5Label: 'USB รถยนต์',
    
    // 产品区
    goldStripe: 'ระบบระบายอากาศเบาะรถยนต์รุ่นที่สาม',
    gen1Title: 'รุ่นแรก',
    gen1Feat1: 'พัดลมติดตั้งเฉพาะด้านหน้าของเบาะนั่ง ทำให้ขอบเขตการระบายอากาศจำกัด และพนักพิงไม่สามารถรับความเย็นได้',
    
    gen2Title: 'รุ่นที่สอง',
    gen2Feat1: 'ที่นั่งระบายอากาศรุ่นนี้ติดตั้งพัดลมขนาดเล็กหลายตัวบริเวณสะโพกและพนักพิง สามารถระบายอากาศและลดความร้อนได้ครอบคลุมทั้งพื้นที่ แต่มีข้อบกพร่องที่ชัดเจน: เสียงดังขณะทำงาน ปริมาณลมไม่เพียงพอ สั่นสะเทือนจากพัดลมอย่างชัดเจน และเบาะมีความแข็ง ทำให้นั่งสบายน้อย',
    
    prod1Tag: 'รุ่นที่ 01',
    prod1Title: 'รุ่นแรก',
    prod1Feat1: 'ผลิตขึ้นเพื่อให้ระบายอากาศในขณะขับรถ',
    prod1Feat2: 'พัดลมในตัวระบายความร้อนออกจากร่างกายผู้ขับขี่',
    prod1Feat3: 'ช่วยประหยัดการใช้งานแอร์ในระบบรถยนต์',
    
    prod2Tag: 'รุ่นที่ 02',
    prod2Title: 'รุ่นที่สอง',
    prod2Feat1: 'เพิ่มลายหนังที่ป้องกันไม่ให้ผิวสัมผัสแน่น',
    prod2Feat2: 'การไหลเวียนของอากาศดีขึ้นทั้งขาเข้าและออก',
    prod2Feat3: 'ช่วยลดความร้อนจากแดดได้รวดเร็วกว่าเดิม',
    prod2Feat4: 'มีสีเลือก 4 สีตามความชอบส่วนตัว',
    
    prod3Tag: 'รุ่นที่ 03',
    prod3Title: 'รุ่นสาม',
    prod3Sub: 'ระบบระบายอากาศหมุนเวียนที่ใช้งานอยู่',
    prod3Desc: 'โครงสร้างการระบายอากาศที่มีประสิทธิภาพสูงสุด พัฒนามาจากการวิจัยเพื่อสร้างสภาพแวดล้อมที่มีอากาศหมุนเวียนดีที่สุด ติดตั้งง่าย ไม่ต้องดัดแปลงรถ รองรับรถยนต์ทุกรุ่น',
    kpi1Label: 'ระดับความแรง',
    kpi2Label: 'การหมุนเวียน',
    kpi3Label: 'โครงสร้างอากาศ',
    kpi4Label: '12V',
    prod3Feat1: 'แผ่นหนุนเบาะเข้ารูป ปรับตั้งง่าย ไร้ยุ่งยาก',
    prod3Feat2: 'สิ้นเปลืองไฟฟ้าต่ำมาก ใช้จากช่อง USB รถยนต์',
    prod3Feat3: 'เหมาะสำหรับทั้งผู้ขับและผู้โดยสาร',
    prod3PosterTitleSm: 'รุ่นที่สาม',
    prod3PosterTitleLg: 'ระบบระบายอากาศหมุนเวียนแผ่นรองเบาะรถยนต์ที่สมบูรณ์แบบ',
    prod3PosterRightText: 'ระบบระบายอากาศหมุนเวียนเบาะรถยนต์ AirCool รุ่นที่สาม ใช้สถาปัตยกรรมการระบายอากาศแบบใหม่ ติดตั้งพัดลมเทอร์โบขนาดใหญ่ซ่อนอยู่ใต้เบาะ ด้วยโครงสร้างแบบแยกส่วนที่ช่วยตัดการส่งผ่านแรงสั่นสะเทือน ให้ทั้งปริมาณลมมากและเสียงเงียบ ลมเย็นหมุนเวียนภายในอย่างต่อเนื่อง เป็นทางเลือกระบบระบายอากาศเบาะที่มีประสิทธิภาพโดยรวมดีที่สุดในขณะนี้',
    prod3PosterLeftText: 'พัดลมเฉพาะทางสำหรับเบาะระบายอากาศที่พัฒนาใหม่ สมดุลระหว่างประสิทธิภาพการใช้งานและความสวยงามโดยรวม ใช้ท่อระบายอากาศโค้งและช่องออกลมแบบปากเป็ด ติดตั้งง่ายโดยไม่ต้องดัดแปลง ซ่อนตัวได้ดี หลังติดตั้งไม่ลดพื้นที่นั่งแถวหลัง และป้องกันท่อหลุดจากการสัมผัสของผู้โดยสารแถวหลัง โครงสร้างออกแบบมาอย่างสมเหตุสมผลและเชื่อถือได้',
    prod3PosterCallout1: 'ลมเย็นถูกส่งผ่านท่อระบายอากาศไปยังพื้นผิวเบาะและหมุนเวียนอย่างต่อเนื่อง ทำให้นั่งสบายและเย็นสบายตลอดการเดินทาง',
    prod3PosterCallout2: 'โครงสร้างท่อนำลมดีไซน์ใหม่ ติดตั้งได้โดยไม่ต้องเจาะหรือดัดแปลง เข้ากับเบาะได้อย่างลงตัว และไม่กระทบพื้นที่นั่งของผู้โดยสารด้านหลัง',
    prod3PosterCallout3: 'พัดลมติดตั้งใต้เบาะ ทำงานเงียบและลดการสั่นสะเทือน',
    
    featFans: 'ติดตั้งรวดเร็วภายใน 5 นาที โดยไม่ต้องเจาะหรือดัดแปลง',
    feat3Speed: 'สวิตช์ 3 ระดับ',
    featPower: 'รับไฟจากช่องจุดบุหรี่ 12V',
    featQuiet: 'เงียบสนิท ไม่รบกวนการพักผ่อน',
    
    // 技术区
    techTitle: 'เทคโนโลยีที่',
    techTitleSpan: 'เหนือกว่า',
    techSubtitle: 'ทุกรายละเอียดถูกออกแบบเพื่อประสิทธิภาพสูงสุด',
    tech1Title: 'ระบบระบายอากาศ 360°',
    tech1Desc: 'อากาศไหลเวียนรอบทิศทางทั้งด้านหลัง ด้านข้าง และด้านล่าง ครอบคลุมทุกจุดสัมผัสของร่างกาย',
    tech2Title: 'โครงสร้าง 3D Breathable Mesh',
    tech2Desc: 'ตาข่ายระบายอากาศสามมิติออกแบบพิเศษ ให้อากาศถ่ายเทได้อย่างอิสระโดยไม่สูญเสียความนุ่ม',
    tech3Title: 'ปรับความแรง 3 ระดับ',
    tech3Desc: 'ปรับความแรงลมได้ 3 ระดับตามความต้องการ ผ่านปุ่มควบคุมที่ใช้งานง่ายพร้อมไฟบอกสถานะ',
    tech4Title: 'เงียบ Ultra-Quiet Motor',
    tech4Desc: 'มอเตอร์เงียบพิเศษไม่รบกวนการขับขี่หรือสนทนา ออกแบบมาเพื่อประสบการณ์ที่สงบ',
    tech5Title: 'ประหยัดพลังงาน',
    tech5Desc: 'ใช้ไฟจากช่อง USB รถยนต์ 12V ไม่กระทบแบตเตอรี่ ใช้งานได้ตลอดการเดินทาง',
    tech6Title: 'ติดตั้งง่าย ไม่ดัดแปลงรถ',
    tech6Desc: 'ออกแบบให้ใช้งานง่าย ติดตั้งเองได้ในไม่กี่นาที ไม่ต้องเจาะหรือปรับแต่งรถ',
    
    // 颜色区
    colorStripe: 'มีให้เลือก 4 สี',
    color1Name: 'Black & Red',
    color1Desc: 'ดำแดง สปอร์ต',
    color2Name: 'Black & Blue',
    color2Desc: 'ดำน้ำเงิน โมเดิร์น',
    color3Name: 'Classic Black',
    color3Desc: 'ดำคลาสสิก',
    color4Name: 'Camel Beige',
    color4Desc: 'น้ำตาลทอง หรูหรา',
    
    // 材质区
    matTitle: 'วัสดุ',
    matTitleSpan: 'คุณภาพพรีเมียม',
    mat1Tag: 'LEATHER',
    mat1Title: 'ขอบหนัง & ตะเข็บปราณีต',
    mat1Desc: 'หนัง PU คุณภาพสูง ตะเข็บเย็บด้วยมือ ทนทานต่อการใช้งานหนัก สวยงามทนนาน',
    mat2Tag: 'MESH',
    mat2Title: 'ตาข่าย 3D ระบายอากาศ',
    mat2Desc: 'โครงสร้างตาข่ายสามมิติพิเศษ เพิ่มการไหลเวียนของอากาศสูงสุด รักษาความเย็นสบาย',
    mat3Tag: 'นุ่มสบาย',
    mat3Title: 'ผ้านุ่มสัมผัสเหมือนเบาะรถเดิม',
    mat3Desc: 'ภายในเบาะไม่มีแผ่นพลาสติกนำลม ใช้ซับในโครงสร้าง 3D พิเศษ ให้ความรู้สึกนุ่มและสบายเหมือนนั่งบนเบาะรถเดิม',
    
    // 兼容区
    compatBig1: 'รองรับ',
    compatBig2: 'รถยนต์ทุกรุ่น',
    compat1: 'รถเก๋ง',
    compat2: 'SUV',
    compat3: 'รถกระบะ',
    compat4: 'รถบรรทุก',
    
    // 页脚
    footerTagline: 'ระบบระบายอากาศที่นั่งรถยนต์ที่อยู่อาศัย\nActive Air Technology — Designed in Thailand 🇹🇭',
    footerCompany: 'บริษัท',
    footerCompanyVal: 'เจ้าของเครื่องหมายการค้า AirCool',
    footerVoltage: 'แรงดันไฟ',
    footerVoltageVal: 'ขับเคลื่อนโดยมอเตอร์ 12V',
    footerLevels: 'ระดับความแรง',
    footerLevelsVal: 'ปรับได้ 1-3 ระดับ',
    footerPurpose: 'วัตถุประสงค์',
    footerPurposeVal: 'ระบายความร้อนผู้ขับขี่ + ผู้โดยสาร',
    footerColors: 'สีให้เลือก',
    footerColorsVal: 'ดำล้วน / ดำแดง / ดำน้ำเงิน / เบจ',
    footerCompatible: 'รุ่นรถที่ใช้ได้',
    footerCompatibleVal: 'รถยนต์/SUV/กระบะ/รถบรรทุกทุกรุ่น',
    footerWarranty: 'การรับประกัน',
    footerWarrantyVal: 'รับประกัน 1 ปี',
    footerDesign: 'แหล่งผลิต',
    footerDesignVal: 'ผลิตในประเทศไทย',
    footerContactTitle: 'ติดต่อเรา',
    footerContactPerson: 'ผู้ติดต่อ-นายอ',
    footerWorkingHours: 'เวลาทำการ: 7X24 ชั่วโมง',
    footerPhone: 'หมายเลขโทรศัพท์:852639554',
    footerEmail: 'EMAIL:XXXXX@Gmail.com',
    footerCopyright: '© 2026 AirCool. All rights reserved.'
  },
  en: {
    // Navigation
    navProducts: 'Products',
    navTech: 'Technology',
    navColors: 'Colors',
    navCompat: 'Compatibility',
    navContact: 'Contact',
    navCta: 'Buy Now',
    
    // Hero Section
    heroScroll: 'Scroll Down',
    stat1Label: '360° Ventilation',
    stat2Label: 'Speed Levels',
    stat3Label: 'Quick Installation',
    stat4Label: 'Color Options',
    stat5Label: 'USB Powered',
    
    // Products Section
    goldStripe: 'Third Generation Car Seat Ventilation System',
    gen1Title: 'Generation 1',
    gen1Feat1: 'Fans are only placed on the front side of the seat cushion, limiting the ventilation range—the backrest cannot benefit from ventilation.',
    
    gen2Title: 'Generation 2',
    gen2Feat1: 'This ventilation cushion is equipped with multiple small fans in the hip and back areas, providing full-zone ventilation and cooling. However, it has notable drawbacks: high operating noise, insufficient airflow, significant fan vibration, and a relatively firm cushion that compromises seating comfort.',
    
    prod1Tag: 'GEN 01',
    prod1Title: 'Generation 1',
    prod1Feat1: 'Designed for ventilation while driving',
    prod1Feat2: 'Built-in fan exhausts body heat',
    prod1Feat3: 'Saves car air conditioning energy',
    
    prod2Tag: 'GEN 02',
    prod2Title: 'Generation 2',
    prod2Feat1: 'Added leather texture prevents skin sticking',
    prod2Feat2: 'Improved airflow circulation',
    prod2Feat3: 'Faster heat dissipation from sun exposure',
    prod2Feat4: 'Available in 4 color options',
    
    prod3Tag: 'GEN 03',
    prod3Title: 'Generation 3',
    prod3Sub: 'Active Circulation Ventilation System',
    prod3Desc: 'The most efficient ventilation structure, developed through research to create optimal air circulation. Easy installation, no vehicle modification required, supports all car models.',
    kpi1Label: 'Speed Levels',
    kpi2Label: 'Air Circulation',
    kpi3Label: '3D Structure',
    kpi4Label: '12V Power',
    prod3Feat1: 'Fits seat cushion perfectly, easy installation',
    prod3Feat2: 'Ultra-low power consumption, uses car USB port',
    prod3Feat3: 'Suitable for both driver and passengers',
    prod3PosterTitleSm: 'Generation 3',
    prod3PosterTitleLg: 'Perfect Car Seat Cushion Circulation Ventilation System',
    prod3PosterRightText: 'AirCool\'s third-generation car seat circulation ventilation system features an all-new ventilation architecture, with large turbo fans discreetly hidden beneath the seat. Its split-structure design blocks vibration transmission, delivering high airflow with low noise. Cool air circulates continuously inside, making it the leading all-around seat ventilation solution available today.',
    prod3PosterLeftText: 'Newly developed dedicated ventilation cushion fan, balancing performance with overall appearance. Features curved ventilation ducts and duckbill air outlets, supporting non-destructive easy installation with strong concealment. After installation, it does not reduce rear passenger space and prevents duct detachment from rear passenger contact—a reliable and well-designed structure.',
    prod3PosterCallout1: 'Cool air is delivered through the ventilation ducts to the seat surface and circulates continuously, keeping you cool and comfortable throughout the journey',
    prod3PosterCallout2: 'Newly designed air duct structure — damage-free installation, seamless fit, with no impact on rear passenger space',
    prod3PosterCallout3: 'Fan installed under cushion, quiet operation with reduced vibration',
    
    featFans: '5-Min Quick Damage-Free Installation',
    feat3Speed: '3-Speed Switch',
    featPower: '12V Cigarette Lighter Power',
    featQuiet: 'Silent Operation, No Disturbance',
    
    // Technology Section
    techTitle: 'Leading',
    techTitleSpan: 'Technology',
    techSubtitle: 'Every detail designed for maximum performance',
    tech1Title: '360° Ventilation System',
    tech1Desc: 'Air flows from back, sides, and bottom in all directions, covering every contact point of the body',
    tech2Title: '3D Breathable Mesh Structure',
    tech2Desc: 'Specially designed three-dimensional breathable mesh allows free air circulation without losing softness',
    tech3Title: '3-Level Wind Adjustment',
    tech3Desc: 'Adjust wind strength across 3 levels according to your needs, controlled via easy-to-use buttons with status indicators',
    tech4Title: 'Ultra-Quiet Motor',
    tech4Desc: 'Special silent motor doesn\'t interfere with driving or conversation, designed for a peaceful experience',
    tech5Title: 'Energy Efficient',
    tech5Desc: 'Powered by car\'s 12V USB port, doesn\'t affect battery, usable throughout the journey',
    tech6Title: 'Easy Installation, No Modification',
    tech6Desc: 'Simple design for easy use, self-install in minutes, no drilling or vehicle modification required',
    
    // Colors Section
    colorStripe: '4 Color Options Available',
    color1Name: 'Black & Red',
    color1Desc: 'Black Red Sport',
    color2Name: 'Black & Blue',
    color2Desc: 'Black Blue Modern',
    color3Name: 'Classic Black',
    color3Desc: 'Classic Black',
    color4Name: 'Camel Beige',
    color4Desc: 'Camel Luxury',
    
    // Materials Section
    matTitle: 'Premium',
    matTitleSpan: 'Materials',
    mat1Tag: 'LEATHER',
    mat1Title: 'Leather Edges & Fine Stitching',
    mat1Desc: 'High-quality PU leather, hand-stitched, durable and long-lasting, elegant appearance',
    mat2Tag: 'MESH',
    mat2Title: '3D Breathable Mesh',
    mat2Desc: 'Special three-dimensional mesh structure maximizes air circulation, maintains cool comfort',
    mat3Tag: 'Soft & Comfortable',
    mat3Title: 'Soft Fabric, Original Seat Feel',
    mat3Desc: 'No plastic air deflectors inside the cushion — a special 3D structural lining delivers a soft, comfortable feel just like the original car seat',
    
    // Compatibility Section
    compatBig1: 'Compatible with',
    compatBig2: 'All Vehicle Types',
    compat1: 'Sedan',
    compat2: 'SUV',
    compat3: 'Pickup',
    compat4: 'Truck',
    
    // Footer
    footerTagline: 'AirCool is Thailand\'s leading car seat ventilation system manufacturer. We are committed to providing the best comfort and cooling experience for every journey.',
    footerCompany: 'Company',
    footerCompanyVal: 'AirCool Trademark Owner',
    footerVoltage: 'Voltage',
    footerVoltageVal: '12V Motor Driven',
    footerLevels: 'Speed Levels',
    footerLevelsVal: 'Adjustable 1-3 Levels',
    footerPurpose: 'Purpose',
    footerPurposeVal: 'Driver + Passenger Cooling',
    footerColors: 'Color Options',
    footerColorsVal: 'Pure Black / Black Red / Black Blue / Beige',
    footerCompatible: 'Compatible Models',
    footerCompatibleVal: 'Sedan/SUV/Pickup/Truck All Models',
    footerWarranty: 'Warranty',
    footerWarrantyVal: '1 Year Warranty',
    footerDesign: 'Origin',
    footerDesignVal: 'Made in Thailand',
    footerContactTitle: 'Contact Us',
    footerContactPerson: 'Contact Person - Mr. A',
    footerWorkingHours: 'Working Hours: 7X24 Hours',
    footerPhone: 'Phone Number:852639554',
    footerEmail: 'EMAIL:XXXXX@Gmail.com',
    footerCopyright: '© 2026 AirCool. All rights reserved.'
  }
};

// 当前语言
let currentLang = 'th';

// 切换语言
function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('aircool-lang', lang);
  updatePageLanguage();
  updateLangButtons();
}

// 更新页面语言
function updatePageLanguage() {
  const t = translations[currentLang];
  
  // 更新所有带 data-i18n 属性的元素
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });
  
  // 更新 HTML lang 属性
  if (currentLang === 'zh') {
    document.documentElement.lang = 'zh-CN';
  } else if (currentLang === 'th') {
    document.documentElement.lang = 'th';
  } else if (currentLang === 'en') {
    document.documentElement.lang = 'en';
  }

  // 切换 FEATURES 部分的图片
  const featureImg = document.getElementById('feature-3speed-img');
  if (featureImg) {
    const imgMap = {
      'zh': './aircool-assets/other/特色功能介绍/3档调速-中文.webp',
      'th': './aircool-assets/other/特色功能介绍/3档调速-泰文.webp',
      'en': './aircool-assets/other/特色功能介绍/3档调速-英文.webp'
    };
    featureImg.src = imgMap[currentLang] || imgMap['zh'];
  }
}

// 更新语言按钮状态
function updateLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', () => {
  // 从 localStorage 读取保存的语言
  const savedLang = localStorage.getItem('aircool-lang');
  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
  }
  
  updatePageLanguage();
  updateLangButtons();
});
