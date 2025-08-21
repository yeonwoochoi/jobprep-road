import { LocaleData } from '@/locale/message'

export enum IndustryMessageKey {
  INDUSTRY_PLANNING = 'INDUSTRY_PLANNING',
  INDUSTRY_LEGAL_AFFAIRS = 'INDUSTRY_LEGAL_AFFAIRS',
  INDUSTRY_HR = 'INDUSTRY_HR',
  INDUSTRY_ACCOUNTING = 'INDUSTRY_ACCOUNTING',
  INDUSTRY_MARKETING_AD = 'INDUSTRY_MARKETING_AD',
  INDUSTRY_DEV = 'INDUSTRY_DEV',
  INDUSTRY_DESIGN = 'INDUSTRY_DESIGN',
  INDUSTRY_LOGISTICS = 'INDUSTRY_LOGISTICS',
  INDUSTRY_TRANSPORT = 'INDUSTRY_TRANSPORT',
  INDUSTRY_SALES = 'INDUSTRY_SALES',
  INDUSTRY_CS = 'INDUSTRY_CS',
  INDUSTRY_FINANCE = 'INDUSTRY_FINANCE',
  INDUSTRY_FOOD_BEVERAGE = 'INDUSTRY_FOOD_BEVERAGE',
  INDUSTRY_RETAIL = 'INDUSTRY_RETAIL',
  INDUSTRY_ENGINEERING = 'INDUSTRY_ENGINEERING',
  INDUSTRY_MANUFACTURING = 'INDUSTRY_MANUFACTURING',
  INDUSTRY_EDUCATION = 'INDUSTRY_EDUCATION',
  INDUSTRY_CONSTRUCTION = 'INDUSTRY_CONSTRUCTION',
  INDUSTRY_MEDICAL_BIO = 'INDUSTRY_MEDICAL_BIO',
  INDUSTRY_MEDIA_SPORTS = 'INDUSTRY_MEDIA_SPORTS',
  INDUSTRY_PUBLIC_WELFARE = 'INDUSTRY_PUBLIC_WELFARE',
}

export enum JobMessageKey {
  // --- Job Names: Planning ---
  JOB_PLANNING_BUSINESS = 'JOB_PLANNING_BUSINESS',
  JOB_PLANNING_SERVICE = 'JOB_PLANNING_SERVICE',
  JOB_PLANNING_STRATEGY = 'JOB_PLANNING_STRATEGY',
  JOB_PLANNING_PM_PO = 'JOB_PLANNING_PM_PO',
  JOB_PLANNING_PRODUCT = 'JOB_PLANNING_PRODUCT',

  // --- Job Names: Legal Affairs ---
  JOB_LEGAL_AFFAIRS_LEGAL = 'JOB_LEGAL_AFFAIRS_LEGAL',
  JOB_LEGAL_AFFAIRS_OFFICE_SUPPORT = 'JOB_LEGAL_AFFAIRS_OFFICE_SUPPORT',
  JOB_LEGAL_AFFAIRS_GENERAL_AFFAIRS = 'JOB_LEGAL_AFFAIRS_GENERAL_AFFAIRS',
  JOB_LEGAL_AFFAIRS_ASSET_MANAGEMENT = 'JOB_LEGAL_AFFAIRS_ASSET_MANAGEMENT',
  JOB_LEGAL_AFFAIRS_CONTRACT_MANAGEMENT = 'JOB_LEGAL_AFFAIRS_CONTRACT_MANAGEMENT',

  // --- Job Names: HR ---
  JOB_HR_MANAGEMENT = 'JOB_HR_MANAGEMENT',
  JOB_HR_HRD = 'JOB_HR_HRD',
  JOB_HR_RECRUITING = 'JOB_HR_RECRUITING',
  JOB_HR_PAYROLL = 'JOB_HR_PAYROLL',
  JOB_HR_LABOR = 'JOB_HR_LABOR',
  JOB_HR_CULTURE = 'JOB_HR_CULTURE',

  // --- Job Names: Accounting ---
  JOB_ACCOUNTING_ACCOUNTING = 'JOB_ACCOUNTING_ACCOUNTING',
  JOB_ACCOUNTING_TAX = 'JOB_ACCOUNTING_TAX',
  JOB_ACCOUNTING_SETTLEMENT = 'JOB_ACCOUNTING_SETTLEMENT',
  JOB_ACCOUNTING_FINANCE = 'JOB_ACCOUNTING_FINANCE',
  JOB_ACCOUNTING_FUNDING = 'JOB_ACCOUNTING_FUNDING',
  JOB_ACCOUNTING_AUDIT = 'JOB_ACCOUNTING_AUDIT',

  // --- Job Names: Marketing/AD ---
  JOB_MARKETING_BRAND = 'JOB_MARKETING_BRAND',
  JOB_MARKETING_DIGITAL = 'JOB_MARKETING_DIGITAL',
  JOB_MARKETING_PERFORMANCE = 'JOB_MARKETING_PERFORMANCE',
  JOB_MARKETING_CONTENT = 'JOB_MARKETING_CONTENT',
  JOB_MARKETING_AE = 'JOB_MARKETING_AE',
  JOB_MARKETING_MD = 'JOB_MARKETING_MD',

  // --- Job Names: Dev ---
  JOB_DEV_FRONTEND = 'JOB_DEV_FRONTEND',
  JOB_DEV_BACKEND = 'JOB_DEV_BACKEND',
  JOB_DEV_APP_DEV = 'JOB_DEV_APP_DEV',
  JOB_DEV_DATA_ANALYSIS = 'JOB_DEV_DATA_ANALYSIS',
  JOB_DEV_AI_ML = 'JOB_DEV_AI_ML',
  JOB_DEV_DEVOPS = 'JOB_DEV_DEVOPS',
  JOB_DEV_SECURITY = 'JOB_DEV_SECURITY',
  JOB_DEV_QA = 'JOB_DEV_QA',

  // --- Job Names: Design ---
  JOB_DESIGN_UI_UX = 'JOB_DESIGN_UI_UX',
  JOB_DESIGN_GRAPHIC = 'JOB_DESIGN_GRAPHIC',
  JOB_DESIGN_BX = 'JOB_DESIGN_BX',
  JOB_DESIGN_MOTION = 'JOB_DESIGN_MOTION',
  JOB_DESIGN_PRODUCT = 'JOB_DESIGN_PRODUCT',

  // --- Job Names: Logistics ---
  JOB_LOGISTICS_MANAGEMENT = 'JOB_LOGISTICS_MANAGEMENT',
  JOB_LOGISTICS_SCM = 'JOB_LOGISTICS_SCM',
  JOB_LOGISTICS_OVERSEAS_SALES = 'JOB_LOGISTICS_OVERSEAS_SALES',
  JOB_LOGISTICS_TRADE_ADMIN = 'JOB_LOGISTICS_TRADE_ADMIN',
  JOB_LOGISTICS_FORWARDING = 'JOB_LOGISTICS_FORWARDING',
  JOB_LOGISTICS_CUSTOMS_AGENT = 'JOB_LOGISTICS_CUSTOMS_AGENT',

  // --- Job Names: Transport ---
  JOB_TRANSPORT_DELIVERY = 'JOB_TRANSPORT_DELIVERY',
  JOB_TRANSPORT_DRIVER = 'JOB_TRANSPORT_DRIVER',
  JOB_TRANSPORT_LOGISTICS_CENTER = 'JOB_TRANSPORT_LOGISTICS_CENTER',
  JOB_TRANSPORT_JIIP = 'JOB_TRANSPORT_JIIP', // 지입차
  JOB_TRANSPORT_FREIGHT = 'JOB_TRANSPORT_FREIGHT',

  // --- Job Names: Sales ---
  JOB_SALES_DOMESTIC = 'JOB_SALES_DOMESTIC',
  JOB_SALES_TECHNICAL = 'JOB_SALES_TECHNICAL',
  JOB_SALES_MANAGEMENT = 'JOB_SALES_MANAGEMENT',
  JOB_SALES_B2B = 'JOB_SALES_B2B',
  JOB_SALES_B2C = 'JOB_SALES_B2C',
  JOB_SALES_SUPPORT = 'JOB_SALES_SUPPORT',

  // --- Job Names: CS ---
  JOB_CS_INBOUND = 'JOB_CS_INBOUND',
  JOB_CS_OUTBOUND = 'JOB_CS_OUTBOUND',
  JOB_CS_CS = 'JOB_CS_CS',
  JOB_CS_SUPPORT = 'JOB_CS_SUPPORT',
  JOB_CS_TM = 'JOB_CS_TM',
  JOB_CS_QA = 'JOB_CS_QA',

  // --- Job Names: Finance ---
  JOB_FINANCE_BANKING = 'JOB_FINANCE_BANKING',
  JOB_FINANCE_INVESTMENT = 'JOB_FINANCE_INVESTMENT',
  JOB_FINANCE_INSURANCE = 'JOB_FINANCE_INSURANCE',
  JOB_FINANCE_ASSET_MANAGEMENT = 'JOB_FINANCE_ASSET_MANAGEMENT',
  JOB_FINANCE_ANALYST = 'JOB_FINANCE_ANALYST',
  JOB_FINANCE_IB = 'JOB_FINANCE_IB',

  // --- Job Names: Food/Beverage ---
  JOB_FOOD_BARISTA = 'JOB_FOOD_BARISTA',
  JOB_FOOD_CHEF = 'JOB_FOOD_CHEF',
  JOB_FOOD_FNB_PLANNING = 'JOB_FOOD_FNB_PLANNING',
  JOB_FOOD_NUTRITIONIST = 'JOB_FOOD_NUTRITIONIST',
  JOB_FOOD_MENU_DEVELOPMENT = 'JOB_FOOD_MENU_DEVELOPMENT',
  JOB_FOOD_BAKER = 'JOB_FOOD_BAKER',

  // --- Job Names: Retail ---
  JOB_RETAIL_STORE_MANAGEMENT = 'JOB_RETAIL_STORE_MANAGEMENT',
  JOB_RETAIL_SALES = 'JOB_RETAIL_SALES',
  JOB_RETAIL_MD = 'JOB_RETAIL_MD',
  JOB_RETAIL_SUPERVISOR = 'JOB_RETAIL_SUPERVISOR',
  JOB_RETAIL_FRANCHISE_MANAGEMENT = 'JOB_RETAIL_FRANCHISE_MANAGEMENT',

  // --- Job Names: Engineering ---
  JOB_ENGINEERING_MECHANICAL = 'JOB_ENGINEERING_MECHANICAL',
  JOB_ENGINEERING_ELECTRICAL = 'JOB_ENGINEERING_ELECTRICAL',
  JOB_ENGINEERING_CAD_CAM = 'JOB_ENGINEERING_CAD_CAM',
  JOB_ENGINEERING_CAE = 'JOB_ENGINEERING_CAE',
  JOB_ENGINEERING_SEMICONDUCTOR = 'JOB_ENGINEERING_SEMICONDUCTOR',
  JOB_ENGINEERING_CHEMICAL = 'JOB_ENGINEERING_CHEMICAL',

  // --- Job Names: Manufacturing ---
  JOB_MANUFACTURING_PRODUCTION_MGM = 'JOB_MANUFACTURING_PRODUCTION_MGM',
  JOB_MANUFACTURING_QUALITY_MGM = 'JOB_MANUFACTURING_QUALITY_MGM',
  JOB_MANUFACTURING_PROCESS_MGM = 'JOB_MANUFACTURING_PROCESS_MGM',
  JOB_MANUFACTURING_EQUIPMENT_MAINTENANCE = 'JOB_MANUFACTURING_EQUIPMENT_MAINTENANCE',
  JOB_MANUFACTURING_PRODUCTION_TECH = 'JOB_MANUFACTURING_PRODUCTION_TECH',
  JOB_MANUFACTURING_SAFETY_MGM = 'JOB_MANUFACTURING_SAFETY_MGM',

  // --- Job Names: Education ---
  JOB_EDUCATION_INSTRUCTOR = 'JOB_EDUCATION_INSTRUCTOR',
  JOB_EDUCATION_PLANNING = 'JOB_EDUCATION_PLANNING',
  JOB_EDUCATION_MATERIAL_DEV = 'JOB_EDUCATION_MATERIAL_DEV',
  JOB_EDUCATION_KINDERGARTEN = 'JOB_EDUCATION_KINDERGARTEN',
  JOB_EDUCATION_COUNSELING = 'JOB_EDUCATION_COUNSELING',

  // --- Job Names: Construction ---
  JOB_CONSTRUCTION_ARCHITECTURAL_DESIGN = 'JOB_CONSTRUCTION_ARCHITECTURAL_DESIGN',
  JOB_CONSTRUCTION_BUILDING = 'JOB_CONSTRUCTION_BUILDING',
  JOB_CONSTRUCTION_INTERIOR = 'JOB_CONSTRUCTION_INTERIOR',
  JOB_CONSTRUCTION_FACILITY_MGM = 'JOB_CONSTRUCTION_FACILITY_MGM',
  JOB_CONSTRUCTION_CIVIL_ENGINEERING = 'JOB_CONSTRUCTION_CIVIL_ENGINEERING',
  JOB_CONSTRUCTION_SUPERVISION = 'JOB_CONSTRUCTION_SUPERVISION',

  // --- Job Names: Medical/Bio ---
  JOB_MEDICAL_NURSE = 'JOB_MEDICAL_NURSE',
  JOB_MEDICAL_PHARM_BIO = 'JOB_MEDICAL_PHARM_BIO',
  JOB_MEDICAL_CLINICAL_RESEARCH = 'JOB_MEDICAL_CLINICAL_RESEARCH',
  JOB_MEDICAL_EQUIPMENT = 'JOB_MEDICAL_EQUIPMENT',
  JOB_MEDICAL_HOSPITAL_ADMIN = 'JOB_MEDICAL_HOSPITAL_ADMIN',
  JOB_MEDICAL_PHARMACIST = 'JOB_MEDICAL_PHARMACIST',

  // --- Job Names: Media/Sports ---
  JOB_MEDIA_PD = 'JOB_MEDIA_PD',
  JOB_MEDIA_REPORTER = 'JOB_MEDIA_REPORTER',
  JOB_MEDIA_VIDEO_EDITING = 'JOB_MEDIA_VIDEO_EDITING',
  JOB_MEDIA_SPORTS_MARKETING = 'JOB_MEDIA_SPORTS_MARKETING',
  JOB_MEDIA_CONTENT_PLANNING = 'JOB_MEDIA_CONTENT_PLANNING',
  JOB_MEDIA_CURATOR = 'JOB_MEDIA_CURATOR',

  // --- Job Names: Public/Welfare ---
  JOB_PUBLIC_SOCIAL_WORKER = 'JOB_PUBLIC_SOCIAL_WORKER',
  JOB_PUBLIC_INSTITUTION = 'JOB_PUBLIC_INSTITUTION',
  JOB_PUBLIC_NPO = 'JOB_PUBLIC_NPO',
  JOB_PUBLIC_JOB_COUNSELOR = 'JOB_PUBLIC_JOB_COUNSELOR',
  JOB_PUBLIC_CARE_WORKER = 'JOB_PUBLIC_CARE_WORKER',
}

export const industryMessages: LocaleData = {
  [IndustryMessageKey.INDUSTRY_PLANNING]: {
    ko: '기획 전략',
    en: 'Planning Strategy',
  },
  [IndustryMessageKey.INDUSTRY_LEGAL_AFFAIRS]: {
    ko: '법무 사무 총무',
    en: 'Legal Admin Affairs',
  },
  [IndustryMessageKey.INDUSTRY_HR]: { ko: '인사 HR', en: 'Human Resources' },
  [IndustryMessageKey.INDUSTRY_ACCOUNTING]: {
    ko: '회계 세무',
    en: 'Accounting Tax',
  },
  [IndustryMessageKey.INDUSTRY_MARKETING_AD]: {
    ko: '마케팅 광고 MD',
    en: 'Marketing AD MD',
  },
  [IndustryMessageKey.INDUSTRY_DEV]: {
    ko: 'AI 개발 데이터',
    en: 'AI Dev Data',
  },
  [IndustryMessageKey.INDUSTRY_DESIGN]: { ko: '디자인', en: 'Design' },
  [IndustryMessageKey.INDUSTRY_LOGISTICS]: {
    ko: '물류 무역',
    en: 'Logistics Trade',
  },
  [IndustryMessageKey.INDUSTRY_TRANSPORT]: {
    ko: '운전 운송 배송',
    en: 'Driving Transport',
  },
  [IndustryMessageKey.INDUSTRY_SALES]: { ko: '영업', en: 'Sales' },
  [IndustryMessageKey.INDUSTRY_CS]: {
    ko: '고객상담 TM',
    en: 'Customer Service TM',
  },
  [IndustryMessageKey.INDUSTRY_FINANCE]: {
    ko: '금융 보험',
    en: 'Finance Insurance',
  },
  [IndustryMessageKey.INDUSTRY_FOOD_BEVERAGE]: {
    ko: '식음료',
    en: 'Food Beverage',
  },
  [IndustryMessageKey.INDUSTRY_RETAIL]: {
    ko: '고객서비스 리테일',
    en: 'Service Retail',
  },
  [IndustryMessageKey.INDUSTRY_ENGINEERING]: {
    ko: '엔지니어링 설계',
    en: 'Engineering Design',
  },
  [IndustryMessageKey.INDUSTRY_MANUFACTURING]: {
    ko: '제조 생산',
    en: 'Manufacturing',
  },
  [IndustryMessageKey.INDUSTRY_EDUCATION]: { ko: '교육', en: 'Education' },
  [IndustryMessageKey.INDUSTRY_CONSTRUCTION]: {
    ko: '건축 시설',
    en: 'Construction Facilities',
  },
  [IndustryMessageKey.INDUSTRY_MEDICAL_BIO]: {
    ko: '의료 바이오',
    en: 'Medical Bio',
  },
  [IndustryMessageKey.INDUSTRY_MEDIA_SPORTS]: {
    ko: '미디어 문화 스포츠',
    en: 'Media Culture Sports',
  },
  [IndustryMessageKey.INDUSTRY_PUBLIC_WELFARE]: {
    ko: '공공 복지',
    en: 'Public Welfare',
  },

  // --- Job Names ---
  // Planning
  [JobMessageKey.JOB_PLANNING_BUSINESS]: {
    ko: '#사업기획',
    en: '#Business Planning',
  },
  [JobMessageKey.JOB_PLANNING_SERVICE]: {
    ko: '#서비스기획',
    en: '#Service Planning',
  },
  [JobMessageKey.JOB_PLANNING_STRATEGY]: { ko: '#전략기획', en: '#Strategy' },
  [JobMessageKey.JOB_PLANNING_PM_PO]: { ko: '#PM·PO', en: '#PM·PO' },
  [JobMessageKey.JOB_PLANNING_PRODUCT]: {
    ko: '#상품기획',
    en: '#Product Planning',
  },

  // Legal Affairs
  [JobMessageKey.JOB_LEGAL_AFFAIRS_LEGAL]: {
    ko: '#법무',
    en: '#Legal Affairs',
  },
  [JobMessageKey.JOB_LEGAL_AFFAIRS_OFFICE_SUPPORT]: {
    ko: '#사무지원',
    en: '#Office Support',
  },
  [JobMessageKey.JOB_LEGAL_AFFAIRS_GENERAL_AFFAIRS]: {
    ko: '#총무',
    en: '#General Affairs',
  },
  [JobMessageKey.JOB_LEGAL_AFFAIRS_ASSET_MANAGEMENT]: {
    ko: '#자산관리',
    en: '#Asset Management',
  },
  [JobMessageKey.JOB_LEGAL_AFFAIRS_CONTRACT_MANAGEMENT]: {
    ko: '#계약관리',
    en: '#Contract Mngmt.',
  },

  // HR
  [JobMessageKey.JOB_HR_MANAGEMENT]: { ko: '#인사관리', en: '#HR Management' },
  [JobMessageKey.JOB_HR_HRD]: { ko: '#HRD', en: '#HRD' },
  [JobMessageKey.JOB_HR_RECRUITING]: { ko: '#채용', en: '#Recruiting' },
  [JobMessageKey.JOB_HR_PAYROLL]: {
    ko: '#급여·보상',
    en: '#Payroll·Compensation',
  },
  [JobMessageKey.JOB_HR_LABOR]: { ko: '#노무', en: '#Labor Relations' },
  [JobMessageKey.JOB_HR_CULTURE]: { ko: '#조직문화', en: '#Org. Culture' },

  // Accounting
  [JobMessageKey.JOB_ACCOUNTING_ACCOUNTING]: { ko: '#회계', en: '#Accounting' },
  [JobMessageKey.JOB_ACCOUNTING_TAX]: { ko: '#세무', en: '#Tax' },
  [JobMessageKey.JOB_ACCOUNTING_SETTLEMENT]: { ko: '#결산', en: '#Settlement' },
  [JobMessageKey.JOB_ACCOUNTING_FINANCE]: { ko: '#재무', en: '#Finance' },
  [JobMessageKey.JOB_ACCOUNTING_FUNDING]: { ko: '#자금', en: '#Funding' },
  [JobMessageKey.JOB_ACCOUNTING_AUDIT]: { ko: '#감사', en: '#Audit' },

  // Marketing/AD
  [JobMessageKey.JOB_MARKETING_BRAND]: {
    ko: '#브랜드마케팅',
    en: '#Brand Marketing',
  },
  [JobMessageKey.JOB_MARKETING_DIGITAL]: {
    ko: '#디지털마케팅',
    en: '#Digital Marketing',
  },
  [JobMessageKey.JOB_MARKETING_PERFORMANCE]: {
    ko: '#퍼포먼스마케팅',
    en: '#Performance Marketing',
  },
  [JobMessageKey.JOB_MARKETING_CONTENT]: {
    ko: '#콘텐츠마케팅',
    en: '#Content Marketing',
  },
  [JobMessageKey.JOB_MARKETING_AE]: {
    ko: '#광고기획(AE)',
    en: '#Ad Planning(AE)',
  },
  [JobMessageKey.JOB_MARKETING_MD]: { ko: '#MD', en: '#MD' },

  // Dev
  [JobMessageKey.JOB_DEV_FRONTEND]: { ko: '#프론트엔드', en: '#Frontend' },
  [JobMessageKey.JOB_DEV_BACKEND]: { ko: '#백엔드', en: '#Backend' },
  [JobMessageKey.JOB_DEV_APP_DEV]: { ko: '#앱개발', en: '#App Dev' },
  [JobMessageKey.JOB_DEV_DATA_ANALYSIS]: {
    ko: '#데이터분석',
    en: '#Data Analysis',
  },
  [JobMessageKey.JOB_DEV_AI_ML]: { ko: '#AI·머신러닝', en: '#AI·ML' },
  [JobMessageKey.JOB_DEV_DEVOPS]: { ko: '#DevOps', en: '#DevOps' },
  [JobMessageKey.JOB_DEV_SECURITY]: { ko: '#정보보안', en: '#Security' },
  [JobMessageKey.JOB_DEV_QA]: { ko: '#QA', en: '#QA' },

  // Design
  [JobMessageKey.JOB_DESIGN_UI_UX]: { ko: '#UI·UX디자인', en: '#UI·UX Design' },
  [JobMessageKey.JOB_DESIGN_GRAPHIC]: {
    ko: '#그래픽디자인',
    en: '#Graphic Design',
  },
  [JobMessageKey.JOB_DESIGN_BX]: { ko: '#BX디자인', en: '#BX Design' },
  [JobMessageKey.JOB_DESIGN_MOTION]: {
    ko: '#영상·모션디자인',
    en: '#Motion Design',
  },
  [JobMessageKey.JOB_DESIGN_PRODUCT]: {
    ko: '#제품디자인',
    en: '#Product Design',
  },

  // Logistics
  [JobMessageKey.JOB_LOGISTICS_MANAGEMENT]: {
    ko: '#물류관리',
    en: '#Logistics Mngmt.',
  },
  [JobMessageKey.JOB_LOGISTICS_SCM]: { ko: '#SCM', en: '#SCM' },
  [JobMessageKey.JOB_LOGISTICS_OVERSEAS_SALES]: {
    ko: '#해외영업',
    en: '#Overseas Sales',
  },
  [JobMessageKey.JOB_LOGISTICS_TRADE_ADMIN]: {
    ko: '#무역사무',
    en: '#Trade Admin',
  },
  [JobMessageKey.JOB_LOGISTICS_FORWARDING]: {
    ko: '#포워딩',
    en: '#Forwarding',
  },
  [JobMessageKey.JOB_LOGISTICS_CUSTOMS_AGENT]: {
    ko: '#관세사',
    en: '#Customs Agent',
  },

  // Transport
  [JobMessageKey.JOB_TRANSPORT_DELIVERY]: { ko: '#배송·택배', en: '#Delivery' },
  [JobMessageKey.JOB_TRANSPORT_DRIVER]: { ko: '#운전·기사', en: '#Driver' },
  [JobMessageKey.JOB_TRANSPORT_LOGISTICS_CENTER]: {
    ko: '#물류센터',
    en: '#Logistics Center',
  },
  [JobMessageKey.JOB_TRANSPORT_JIIP]: { ko: '#지입', en: '#Ji-ip (Leased)' },
  [JobMessageKey.JOB_TRANSPORT_FREIGHT]: { ko: '#화물', en: '#Freight' },

  // Sales
  [JobMessageKey.JOB_SALES_DOMESTIC]: {
    ko: '#국내영업',
    en: '#Domestic Sales',
  },
  [JobMessageKey.JOB_SALES_TECHNICAL]: {
    ko: '#기술영업',
    en: '#Technical Sales',
  },
  [JobMessageKey.JOB_SALES_MANAGEMENT]: {
    ko: '#영업관리',
    en: '#Sales Management',
  },
  [JobMessageKey.JOB_SALES_B2B]: { ko: '#B2B', en: '#B2B' },
  [JobMessageKey.JOB_SALES_B2C]: { ko: '#B2C', en: '#B2C' },
  [JobMessageKey.JOB_SALES_SUPPORT]: { ko: '#영업지원', en: '#Sales Support' },

  // CS
  [JobMessageKey.JOB_CS_INBOUND]: { ko: '#인바운드', en: '#Inbound' },
  [JobMessageKey.JOB_CS_OUTBOUND]: { ko: '#아웃바운드', en: '#Outbound' },
  [JobMessageKey.JOB_CS_CS]: { ko: '#CS', en: '#CS' },
  [JobMessageKey.JOB_CS_SUPPORT]: { ko: '#고객지원', en: '#Customer Support' },
  [JobMessageKey.JOB_CS_TM]: { ko: '#TM', en: '#Telemarketing' },
  [JobMessageKey.JOB_CS_QA]: {
    ko: '#QA(품질관리)',
    en: '#QA(Quality Assurance)',
  },

  // Finance
  [JobMessageKey.JOB_FINANCE_BANKING]: { ko: '#은행원', en: '#Banking' },
  [JobMessageKey.JOB_FINANCE_INVESTMENT]: {
    ko: '#증권·투자',
    en: '#Securities·Investment',
  },
  [JobMessageKey.JOB_FINANCE_INSURANCE]: {
    ko: '#보험설계',
    en: '#Insurance Planning',
  },
  [JobMessageKey.JOB_FINANCE_ASSET_MANAGEMENT]: {
    ko: '#자산관리',
    en: '#Asset Management',
  },
  [JobMessageKey.JOB_FINANCE_ANALYST]: { ko: '#애널리스트', en: '#Analyst' },
  [JobMessageKey.JOB_FINANCE_IB]: { ko: '#IB', en: '#IB' },

  // Food/Beverage
  [JobMessageKey.JOB_FOOD_BARISTA]: { ko: '#바리스타', en: '#Barista' },
  [JobMessageKey.JOB_FOOD_CHEF]: { ko: '#조리·쉐프', en: '#Chef' },
  [JobMessageKey.JOB_FOOD_FNB_PLANNING]: {
    ko: '#F&B기획',
    en: '#F&B Planning',
  },
  [JobMessageKey.JOB_FOOD_NUTRITIONIST]: { ko: '#영양사', en: '#Nutritionist' },
  [JobMessageKey.JOB_FOOD_MENU_DEVELOPMENT]: {
    ko: '#메뉴개발',
    en: '#Menu Development',
  },
  [JobMessageKey.JOB_FOOD_BAKER]: { ko: '#제과·제빵', en: '#Bakery' },

  // Retail
  [JobMessageKey.JOB_RETAIL_STORE_MANAGEMENT]: {
    ko: '#매장관리',
    en: '#Store Management',
  },
  [JobMessageKey.JOB_RETAIL_SALES]: { ko: '#판매', en: '#Retail Sales' },
  [JobMessageKey.JOB_RETAIL_MD]: { ko: '#리테일MD', en: '#Retail MD' },
  [JobMessageKey.JOB_RETAIL_SUPERVISOR]: {
    ko: '#슈퍼바이저',
    en: '#Supervisor',
  },
  [JobMessageKey.JOB_RETAIL_FRANCHISE_MANAGEMENT]: {
    ko: '#가맹점관리',
    en: '#Franchise Mngmt.',
  },

  // Engineering
  [JobMessageKey.JOB_ENGINEERING_MECHANICAL]: {
    ko: '#기계설계',
    en: '#Mechanical Design',
  },
  [JobMessageKey.JOB_ENGINEERING_ELECTRICAL]: {
    ko: '#전기설계',
    en: '#Electrical Design',
  },
  [JobMessageKey.JOB_ENGINEERING_CAD_CAM]: { ko: '#CAD·CAM', en: '#CAD·CAM' },
  [JobMessageKey.JOB_ENGINEERING_CAE]: { ko: '#CAE', en: '#CAE' },
  [JobMessageKey.JOB_ENGINEERING_SEMICONDUCTOR]: {
    ko: '#반도체설계',
    en: '#Semiconductor Design',
  },
  [JobMessageKey.JOB_ENGINEERING_CHEMICAL]: {
    ko: '#화공',
    en: '#Chemical Engineering',
  },

  // Manufacturing
  [JobMessageKey.JOB_MANUFACTURING_PRODUCTION_MGM]: {
    ko: '#생산관리',
    en: '#Production Mngmt.',
  },
  [JobMessageKey.JOB_MANUFACTURING_QUALITY_MGM]: {
    ko: '#품질관리',
    en: '#Quality Mngmt.',
  },
  [JobMessageKey.JOB_MANUFACTURING_PROCESS_MGM]: {
    ko: '#공정관리',
    en: '#Process Mngmt.',
  },
  [JobMessageKey.JOB_MANUFACTURING_EQUIPMENT_MAINTENANCE]: {
    ko: '#설비보전',
    en: '#Facility Maintenance',
  },
  [JobMessageKey.JOB_MANUFACTURING_PRODUCTION_TECH]: {
    ko: '#생산기술',
    en: '#Production Engineering',
  },
  [JobMessageKey.JOB_MANUFACTURING_SAFETY_MGM]: {
    ko: '#안전관리',
    en: '#Safety Mngmt.',
  },

  // Education
  [JobMessageKey.JOB_EDUCATION_INSTRUCTOR]: {
    ko: '#학원강사',
    en: '#Instructor',
  },
  [JobMessageKey.JOB_EDUCATION_PLANNING]: {
    ko: '#교육기획',
    en: '#Education Planning',
  },
  [JobMessageKey.JOB_EDUCATION_MATERIAL_DEV]: {
    ko: '#교재개발',
    en: '#Material Development',
  },
  [JobMessageKey.JOB_EDUCATION_KINDERGARTEN]: {
    ko: '#유치원교사',
    en: '#Kindergarten Teacher',
  },
  [JobMessageKey.JOB_EDUCATION_COUNSELING]: {
    ko: '#교육상담',
    en: '#Education Counseling',
  },

  // Construction
  [JobMessageKey.JOB_CONSTRUCTION_ARCHITECTURAL_DESIGN]: {
    ko: '#건축설계',
    en: '#Architectural Design',
  },
  [JobMessageKey.JOB_CONSTRUCTION_BUILDING]: {
    ko: '#시공',
    en: '#Construction',
  },
  [JobMessageKey.JOB_CONSTRUCTION_INTERIOR]: {
    ko: '#인테리어',
    en: '#Interior',
  },
  [JobMessageKey.JOB_CONSTRUCTION_FACILITY_MGM]: {
    ko: '#시설관리',
    en: '#Facility Management',
  },
  [JobMessageKey.JOB_CONSTRUCTION_CIVIL_ENGINEERING]: {
    ko: '#토목',
    en: '#Civil Engineering',
  },
  [JobMessageKey.JOB_CONSTRUCTION_SUPERVISION]: {
    ko: '#감리',
    en: '#Supervision',
  },

  // Medical/Bio
  [JobMessageKey.JOB_MEDICAL_NURSE]: { ko: '#간호사', en: '#Nurse' },
  [JobMessageKey.JOB_MEDICAL_PHARM_BIO]: {
    ko: '#제약·바이오',
    en: '#Pharma·Bio',
  },
  [JobMessageKey.JOB_MEDICAL_CLINICAL_RESEARCH]: {
    ko: '#임상연구',
    en: '#Clinical Research',
  },
  [JobMessageKey.JOB_MEDICAL_EQUIPMENT]: {
    ko: '#의료기기',
    en: '#Medical Devices',
  },
  [JobMessageKey.JOB_MEDICAL_HOSPITAL_ADMIN]: {
    ko: '#병원행정',
    en: '#Hospital Admin',
  },
  [JobMessageKey.JOB_MEDICAL_PHARMACIST]: { ko: '#약사', en: '#Pharmacist' },

  // Media/Sports
  [JobMessageKey.JOB_MEDIA_PD]: { ko: '#PD', en: '#Producer' },
  [JobMessageKey.JOB_MEDIA_REPORTER]: { ko: '#기자', en: '#Reporter' },
  [JobMessageKey.JOB_MEDIA_VIDEO_EDITING]: {
    ko: '#영상편집',
    en: '#Video Editing',
  },
  [JobMessageKey.JOB_MEDIA_SPORTS_MARKETING]: {
    ko: '#스포츠마케팅',
    en: '#Sports Marketing',
  },
  [JobMessageKey.JOB_MEDIA_CONTENT_PLANNING]: {
    ko: '#콘텐츠기획',
    en: '#Content Planning',
  },
  [JobMessageKey.JOB_MEDIA_CURATOR]: { ko: '#큐레이터', en: '#Curator' },

  // Public/Welfare
  [JobMessageKey.JOB_PUBLIC_SOCIAL_WORKER]: {
    ko: '#사회복지사',
    en: '#Social Worker',
  },
  [JobMessageKey.JOB_PUBLIC_INSTITUTION]: {
    ko: '#공공기관',
    en: '#Public Institution',
  },
  [JobMessageKey.JOB_PUBLIC_NPO]: { ko: '#NPO', en: '#NPO' },
  [JobMessageKey.JOB_PUBLIC_JOB_COUNSELOR]: {
    ko: '#직업상담사',
    en: '#Job Counselor',
  },
  [JobMessageKey.JOB_PUBLIC_CARE_WORKER]: {
    ko: '#요양보호사',
    en: '#Caregiver',
  },
} as const
