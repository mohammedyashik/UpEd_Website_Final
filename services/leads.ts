import { db } from "@/lib/firebase"; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// =========================================================================
// TYPE INTERFACE DEFINITIONS
// =========================================================================

export interface HomepageLeadData {
  parentName: string;
  phone: string;
  sourcePage: string;
}

export interface ProgramLeadData {
  parentName: string;
  phone: string;
  studentClass: string;
  subjects: string;
  learningMode: string;
  sourcePage: string;
  selectedProgram?: string;
  selectedPricingPlan?: string;
  calculatedAmount?: string;
}

export interface AssessmentLeadData {
  parentName: string;
  phone: string;
  sourcePage: string;
  notes?: string;
}

export interface CandidateLeadData {
  parentName: string;
  phone: string;
  email: string;
  applicationType: "Specific Opening" | "General Interest";
  position?: string;
  employmentType?: string;
  subjectsComfortable?: string;
  classesComfortable?: string;
  experience: string;
  targetBoards?: string;
  currentCity?: string;
  resumeLink: string;
  sourcePage: string;
}

export interface ContactPageLeadData {
  parentName: string;
  phone: string;
  studentName: string;
  studentClass: string;
  subjectsRequired: string;
  learningMode: string;
  academicGoals: string;
  sourcePage: string;
}

// =========================================================================
// DYNAMIC COLLECTION ROUTER (Use this for all Grade Level Leads)
// =========================================================================

/**
 * Dynamically routes leads to the correct collection based on the student's class.
 * E.g., "Class 6" -> "class-6-leads", "Class 4" -> "class-4-leads"
 */
export async function submitGradeLead(data: any) {
  try {
    // Converts "Class 6" to "class-6-leads"
    const collectionName = `${data.studentClass.toLowerCase().replace(' ', '-')}-leads`;
    const targetCollection = collection(db, collectionName);
    
    const docRef = await addDoc(targetCollection, {
      ...data,
      timestamp: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Firestore dynamic grade lead insertion error:", error);
    throw error;
  }
}

// =========================================================================
// EXISTING STATIC COLLECTIONS
// =========================================================================

export async function submitHomepageAssessment(data: HomepageLeadData) {
  const docRef = await addDoc(collection(db, "homepage_leads"), { ...data, timestamp: serverTimestamp() });
  return { success: true, id: docRef.id };
}

export async function submitProgramPageAssessment(data: ProgramLeadData) {
  const docRef = await addDoc(collection(db, "program_leads"), { ...data, timestamp: serverTimestamp() });
  return { success: true, id: docRef.id };
}

export async function submitAssessmentRequest(data: AssessmentLeadData) {
  const docRef = await addDoc(collection(db, "assessment_leads"), { ...data, timestamp: serverTimestamp() });
  return { success: true, id: docRef.id };
}

export async function submitCandidateApplication(data: CandidateLeadData) {
  const docRef = await addDoc(collection(db, "candidate_leads"), { ...data, timestamp: serverTimestamp() });
  return { success: true, id: docRef.id };
}

export async function submitContactPageForm(data: ContactPageLeadData) {
  const docRef = await addDoc(collection(db, "contact_leads"), { ...data, timestamp: serverTimestamp() });
  return { success: true, id: docRef.id };
}

export interface AcademicExcellenceLeadData {
  parentName: string;
  phone: string;
  studentClass: string;
  subjectsRequired: string;
  classesPerMonth?: string;
  monthlyFee?: string;
  learningMode: string;
  selectedPlan: string;
  sourcePage: string;
}

export async function submitAcademicExcellenceLead(
  data: AcademicExcellenceLeadData
) {
  try {
    const targetCollection = collection(db, "academic-excellence-leads");

    const docRef = await addDoc(targetCollection, {
      ...data,
      timestamp: serverTimestamp(),
    });

    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Firestore academic excellence insertion error:", error);
    throw error;
  }
}