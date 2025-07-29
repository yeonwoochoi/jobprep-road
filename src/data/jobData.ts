import {
  Lightbulb, Scale, Users, Calculator, Megaphone, Laptop, Palette, Ship, Truck, Phone, Headset,
  Landmark, UtensilsCrossed, Store, GanttChartSquare, Factory, GraduationCap, HardHat,
  Stethoscope, Film, HeartHandshake
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { IndustryMessageKey, JobMessageKey } from '@/locale/messages/industry';

// --- 타입 정의 (Type Definitions) ---

/** 각 업종의 구조 */
export interface Industry {
  id: string; // 상태 관리를 위한 고유 식별자 (예: 'dev')
  icon: LucideIcon; // 업종을 나타내는 아이콘
  nameKey: IndustryMessageKey; // 실제 텍스트를 참조하기 위한 키
  jobs: Job[]; // 해당 업종에 속한 직무 목록
}

/** 각 직무의 구조 */
export interface Job {
  id: string; // 상태 관리를 위한 고유하고 안정적인 식별자 (예: 'frontend')
  nameKey: JobMessageKey; // 실제 텍스트를 참조하기 위한 키
}


// --- 실제 데이터 (Data Declaration) ---
export const jobData: Industry[] = [
  {
    id: 'planning',
    icon: Lightbulb,
    nameKey: IndustryMessageKey.INDUSTRY_PLANNING,
    jobs: [
      { id: 'business-planning', nameKey: JobMessageKey.JOB_PLANNING_BUSINESS },
      { id: 'service-planning', nameKey: JobMessageKey.JOB_PLANNING_SERVICE },
      { id: 'strategy-planning', nameKey: JobMessageKey.JOB_PLANNING_STRATEGY },
      { id: 'pm-po', nameKey: JobMessageKey.JOB_PLANNING_PM_PO },
      { id: 'product-planning', nameKey: JobMessageKey.JOB_PLANNING_PRODUCT },
    ],
  },
  {
    id: 'legal_affairs',
    icon: Scale,
    nameKey: IndustryMessageKey.INDUSTRY_LEGAL_AFFAIRS,
    jobs: [
      { id: 'legal-affairs', nameKey: JobMessageKey.JOB_LEGAL_AFFAIRS_LEGAL },
      { id: 'office-support', nameKey: JobMessageKey.JOB_LEGAL_AFFAIRS_OFFICE_SUPPORT },
      { id: 'general-affairs', nameKey: JobMessageKey.JOB_LEGAL_AFFAIRS_GENERAL_AFFAIRS },
      { id: 'asset-management', nameKey: JobMessageKey.JOB_LEGAL_AFFAIRS_ASSET_MANAGEMENT },
      { id: 'contract-management', nameKey: JobMessageKey.JOB_LEGAL_AFFAIRS_CONTRACT_MANAGEMENT },
    ],
  },
  {
    id: 'hr',
    icon: Users,
    nameKey: IndustryMessageKey.INDUSTRY_HR,
    jobs: [
      { id: 'hr-management', nameKey: JobMessageKey.JOB_HR_MANAGEMENT },
      { id: 'hrd', nameKey: JobMessageKey.JOB_HR_HRD },
      { id: 'recruiting', nameKey: JobMessageKey.JOB_HR_RECRUITING },
      { id: 'payroll-compensation', nameKey: JobMessageKey.JOB_HR_PAYROLL },
      { id: 'labor-relations', nameKey: JobMessageKey.JOB_HR_LABOR },
      { id: 'org-culture', nameKey: JobMessageKey.JOB_HR_CULTURE },
    ],
  },
  {
    id: 'accounting',
    icon: Calculator,
    nameKey: IndustryMessageKey.INDUSTRY_ACCOUNTING,
    jobs: [
      { id: 'accounting', nameKey: JobMessageKey.JOB_ACCOUNTING_ACCOUNTING },
      { id: 'tax', nameKey: JobMessageKey.JOB_ACCOUNTING_TAX },
      { id: 'settlement', nameKey: JobMessageKey.JOB_ACCOUNTING_SETTLEMENT },
      { id: 'finance', nameKey: JobMessageKey.JOB_ACCOUNTING_FINANCE },
      { id: 'funding', nameKey: JobMessageKey.JOB_ACCOUNTING_FUNDING },
      { id: 'audit', nameKey: JobMessageKey.JOB_ACCOUNTING_AUDIT },
    ],
  },
  {
    id: 'marketing_ad',
    icon: Megaphone,
    nameKey: IndustryMessageKey.INDUSTRY_MARKETING_AD,
    jobs: [
      { id: 'brand-marketing', nameKey: JobMessageKey.JOB_MARKETING_BRAND },
      { id: 'digital-marketing', nameKey: JobMessageKey.JOB_MARKETING_DIGITAL },
      { id: 'performance-marketing', nameKey: JobMessageKey.JOB_MARKETING_PERFORMANCE },
      { id: 'content-marketing', nameKey: JobMessageKey.JOB_MARKETING_CONTENT },
      { id: 'ad-planning-ae', nameKey: JobMessageKey.JOB_MARKETING_AE },
      { id: 'md', nameKey: JobMessageKey.JOB_MARKETING_MD },
    ],
  },
  {
    id: 'dev',
    icon: Laptop,
    nameKey: IndustryMessageKey.INDUSTRY_DEV,
    jobs: [
      { id: 'frontend', nameKey: JobMessageKey.JOB_DEV_FRONTEND },
      { id: 'backend', nameKey: JobMessageKey.JOB_DEV_BACKEND },
      { id: 'app-dev', nameKey: JobMessageKey.JOB_DEV_APP_DEV },
      { id: 'data-analysis', nameKey: JobMessageKey.JOB_DEV_DATA_ANALYSIS },
      { id: 'ai-ml', nameKey: JobMessageKey.JOB_DEV_AI_ML },
      { id: 'devops', nameKey: JobMessageKey.JOB_DEV_DEVOPS },
      { id: 'security', nameKey: JobMessageKey.JOB_DEV_SECURITY },
      { id: 'qa', nameKey: JobMessageKey.JOB_DEV_QA },
    ],
  },
  {
    id: 'design',
    icon: Palette,
    nameKey: IndustryMessageKey.INDUSTRY_DESIGN,
    jobs: [
      { id: 'ui-ux-design', nameKey: JobMessageKey.JOB_DESIGN_UI_UX },
      { id: 'graphic-design', nameKey: JobMessageKey.JOB_DESIGN_GRAPHIC },
      { id: 'bx-design', nameKey: JobMessageKey.JOB_DESIGN_BX },
      { id: 'motion-design', nameKey: JobMessageKey.JOB_DESIGN_MOTION },
      { id: 'product-design', nameKey: JobMessageKey.JOB_DESIGN_PRODUCT },
    ],
  },
  {
    id: 'logistics',
    icon: Ship,
    nameKey: IndustryMessageKey.INDUSTRY_LOGISTICS,
    jobs: [
      { id: 'logistics-management', nameKey: JobMessageKey.JOB_LOGISTICS_MANAGEMENT },
      { id: 'scm', nameKey: JobMessageKey.JOB_LOGISTICS_SCM },
      { id: 'overseas-sales', nameKey: JobMessageKey.JOB_LOGISTICS_OVERSEAS_SALES },
      { id: 'trade-admin', nameKey: JobMessageKey.JOB_LOGISTICS_TRADE_ADMIN },
      { id: 'forwarding', nameKey: JobMessageKey.JOB_LOGISTICS_FORWARDING },
      { id: 'customs-agent', nameKey: JobMessageKey.JOB_LOGISTICS_CUSTOMS_AGENT },
    ],
  },
  {
    id: 'transport',
    icon: Truck,
    nameKey: IndustryMessageKey.INDUSTRY_TRANSPORT,
    jobs: [
      { id: 'delivery', nameKey: JobMessageKey.JOB_TRANSPORT_DELIVERY },
      { id: 'driver', nameKey: JobMessageKey.JOB_TRANSPORT_DRIVER },
      { id: 'logistics-center', nameKey: JobMessageKey.JOB_TRANSPORT_LOGISTICS_CENTER },
      { id: 'jiip-leased', nameKey: JobMessageKey.JOB_TRANSPORT_JIIP },
      { id: 'freight', nameKey: JobMessageKey.JOB_TRANSPORT_FREIGHT },
    ],
  },
  {
    id: 'sales',
    icon: Phone,
    nameKey: IndustryMessageKey.INDUSTRY_SALES,
    jobs: [
      { id: 'domestic-sales', nameKey: JobMessageKey.JOB_SALES_DOMESTIC },
      { id: 'technical-sales', nameKey: JobMessageKey.JOB_SALES_TECHNICAL },
      { id: 'sales-management', nameKey: JobMessageKey.JOB_SALES_MANAGEMENT },
      { id: 'b2b-sales', nameKey: JobMessageKey.JOB_SALES_B2B },
      { id: 'b2c-sales', nameKey: JobMessageKey.JOB_SALES_B2C },
      { id: 'sales-support', nameKey: JobMessageKey.JOB_SALES_SUPPORT },
    ],
  },
  {
    id: 'cs',
    icon: Headset,
    nameKey: IndustryMessageKey.INDUSTRY_CS,
    jobs: [
      { id: 'inbound', nameKey: JobMessageKey.JOB_CS_INBOUND },
      { id: 'outbound', nameKey: JobMessageKey.JOB_CS_OUTBOUND },
      { id: 'cs', nameKey: JobMessageKey.JOB_CS_CS },
      { id: 'customer-support', nameKey: JobMessageKey.JOB_CS_SUPPORT },
      { id: 'tm', nameKey: JobMessageKey.JOB_CS_TM },
      { id: 'quality-assurance', nameKey: JobMessageKey.JOB_CS_QA },
    ],
  },
  {
    id: 'finance',
    icon: Landmark,
    nameKey: IndustryMessageKey.INDUSTRY_FINANCE,
    jobs: [
      { id: 'banking', nameKey: JobMessageKey.JOB_FINANCE_BANKING },
      { id: 'investment', nameKey: JobMessageKey.JOB_FINANCE_INVESTMENT },
      { id: 'insurance-planning', nameKey: JobMessageKey.JOB_FINANCE_INSURANCE },
      { id: 'asset-management-finance', nameKey: JobMessageKey.JOB_FINANCE_ASSET_MANAGEMENT },
      { id: 'analyst', nameKey: JobMessageKey.JOB_FINANCE_ANALYST },
      { id: 'ib', nameKey: JobMessageKey.JOB_FINANCE_IB },
    ],
  },
  {
    id: 'food_beverage',
    icon: UtensilsCrossed,
    nameKey: IndustryMessageKey.INDUSTRY_FOOD_BEVERAGE,
    jobs: [
      { id: 'barista', nameKey: JobMessageKey.JOB_FOOD_BARISTA },
      { id: 'chef', nameKey: JobMessageKey.JOB_FOOD_CHEF },
      { id: 'fnb-planning', nameKey: JobMessageKey.JOB_FOOD_FNB_PLANNING },
      { id: 'nutritionist', nameKey: JobMessageKey.JOB_FOOD_NUTRITIONIST },
      { id: 'menu-development', nameKey: JobMessageKey.JOB_FOOD_MENU_DEVELOPMENT },
      { id: 'bakery', nameKey: JobMessageKey.JOB_FOOD_BAKER },
    ],
  },
  {
    id: 'retail',
    icon: Store,
    nameKey: IndustryMessageKey.INDUSTRY_RETAIL,
    jobs: [
      { id: 'store-management', nameKey: JobMessageKey.JOB_RETAIL_STORE_MANAGEMENT },
      { id: 'retail-sales', nameKey: JobMessageKey.JOB_RETAIL_SALES },
      { id: 'retail-md', nameKey: JobMessageKey.JOB_RETAIL_MD },
      { id: 'supervisor', nameKey: JobMessageKey.JOB_RETAIL_SUPERVISOR },
      { id: 'franchise-management', nameKey: JobMessageKey.JOB_RETAIL_FRANCHISE_MANAGEMENT },
    ],
  },
  {
    id: 'engineering',
    icon: GanttChartSquare,
    nameKey: IndustryMessageKey.INDUSTRY_ENGINEERING,
    jobs: [
      { id: 'mechanical-design', nameKey: JobMessageKey.JOB_ENGINEERING_MECHANICAL },
      { id: 'electrical-design', nameKey: JobMessageKey.JOB_ENGINEERING_ELECTRICAL },
      { id: 'cad-cam', nameKey: JobMessageKey.JOB_ENGINEERING_CAD_CAM },
      { id: 'cae', nameKey: JobMessageKey.JOB_ENGINEERING_CAE },
      { id: 'semiconductor-design', nameKey: JobMessageKey.JOB_ENGINEERING_SEMICONDUCTOR },
      { id: 'chemical-engineering', nameKey: JobMessageKey.JOB_ENGINEERING_CHEMICAL },
    ],
  },
  {
    id: 'manufacturing',
    icon: Factory,
    nameKey: IndustryMessageKey.INDUSTRY_MANUFACTURING,
    jobs: [
      { id: 'production-management', nameKey: JobMessageKey.JOB_MANUFACTURING_PRODUCTION_MGM },
      { id: 'quality-management', nameKey: JobMessageKey.JOB_MANUFACTURING_QUALITY_MGM },
      { id: 'process-management', nameKey: JobMessageKey.JOB_MANUFACTURING_PROCESS_MGM },
      { id: 'equipment-maintenance', nameKey: JobMessageKey.JOB_MANUFACTURING_EQUIPMENT_MAINTENANCE },
      { id: 'production-tech', nameKey: JobMessageKey.JOB_MANUFACTURING_PRODUCTION_TECH },
      { id: 'safety-management', nameKey: JobMessageKey.JOB_MANUFACTURING_SAFETY_MGM },
    ],
  },
  {
    id: 'education',
    icon: GraduationCap,
    nameKey: IndustryMessageKey.INDUSTRY_EDUCATION,
    jobs: [
      { id: 'instructor', nameKey: JobMessageKey.JOB_EDUCATION_INSTRUCTOR },
      { id: 'education-planning', nameKey: JobMessageKey.JOB_EDUCATION_PLANNING },
      { id: 'material-development', nameKey: JobMessageKey.JOB_EDUCATION_MATERIAL_DEV },
      { id: 'kindergarten-teacher', nameKey: JobMessageKey.JOB_EDUCATION_KINDERGARTEN },
      { id: 'education-counseling', nameKey: JobMessageKey.JOB_EDUCATION_COUNSELING },
    ],
  },
  {
    id: 'construction',
    icon: HardHat,
    nameKey: IndustryMessageKey.INDUSTRY_CONSTRUCTION,
    jobs: [
      { id: 'architectural-design', nameKey: JobMessageKey.JOB_CONSTRUCTION_ARCHITECTURAL_DESIGN },
      { id: 'construction-building', nameKey: JobMessageKey.JOB_CONSTRUCTION_BUILDING },
      { id: 'interior-design', nameKey: JobMessageKey.JOB_CONSTRUCTION_INTERIOR },
      { id: 'facility-management', nameKey: JobMessageKey.JOB_CONSTRUCTION_FACILITY_MGM },
      { id: 'civil-engineering', nameKey: JobMessageKey.JOB_CONSTRUCTION_CIVIL_ENGINEERING },
      { id: 'supervision', nameKey: JobMessageKey.JOB_CONSTRUCTION_SUPERVISION },
    ],
  },
  {
    id: 'medical_bio',
    icon: Stethoscope,
    nameKey: IndustryMessageKey.INDUSTRY_MEDICAL_BIO,
    jobs: [
      { id: 'nurse', nameKey: JobMessageKey.JOB_MEDICAL_NURSE },
      { id: 'pharma-bio', nameKey: JobMessageKey.JOB_MEDICAL_PHARM_BIO },
      { id: 'clinical-research', nameKey: JobMessageKey.JOB_MEDICAL_CLINICAL_RESEARCH },
      { id: 'medical-equipment', nameKey: JobMessageKey.JOB_MEDICAL_EQUIPMENT },
      { id: 'hospital-admin', nameKey: JobMessageKey.JOB_MEDICAL_HOSPITAL_ADMIN },
      { id: 'pharmacist', nameKey: JobMessageKey.JOB_MEDICAL_PHARMACIST },
    ],
  },
  {
    id: 'media_sports',
    icon: Film,
    nameKey: IndustryMessageKey.INDUSTRY_MEDIA_SPORTS,
    jobs: [
      { id: 'pd-producer', nameKey: JobMessageKey.JOB_MEDIA_PD },
      { id: 'reporter', nameKey: JobMessageKey.JOB_MEDIA_REPORTER },
      { id: 'video-editing', nameKey: JobMessageKey.JOB_MEDIA_VIDEO_EDITING },
      { id: 'sports-marketing', nameKey: JobMessageKey.JOB_MEDIA_SPORTS_MARKETING },
      { id: 'content-planning', nameKey: JobMessageKey.JOB_MEDIA_CONTENT_PLANNING },
      { id: 'curator', nameKey: JobMessageKey.JOB_MEDIA_CURATOR },
    ],
  },
  {
    id: 'public_welfare',
    icon: HeartHandshake,
    nameKey: IndustryMessageKey.INDUSTRY_PUBLIC_WELFARE,
    jobs: [
      { id: 'social-worker', nameKey: JobMessageKey.JOB_PUBLIC_SOCIAL_WORKER },
      { id: 'public-institution', nameKey: JobMessageKey.JOB_PUBLIC_INSTITUTION },
      { id: 'npo', nameKey: JobMessageKey.JOB_PUBLIC_NPO },
      { id: 'job-counselor', nameKey: JobMessageKey.JOB_PUBLIC_JOB_COUNSELOR },
      { id: 'caregiver', nameKey: JobMessageKey.JOB_PUBLIC_CARE_WORKER },
    ],
  },
]