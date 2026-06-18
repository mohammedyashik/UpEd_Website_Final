import { db } from "@/lib/firebase"; // Root alias configuration path
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// =========================================================================
// TYPE INTERFACE DEFINITIONS FOR PIPELINE VALIDATION
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
  parentName: string; // Candidate Full Name
  phone: string;      // WhatsApp Number
  email: string;      // Email ID
  applicationType: "Specific Opening" | "General Interest";
  position?: string;   // Dropdown option (if opening)
  employmentType?: string; // Full-Time / Part-Time
  subjectsComfortable?: string; // Subject taken (if general)
  classesComfortable?: string;  // Classes comfortable teaching
  experience: string; // Years of experience
  targetBoards?: string; // Preferred Boards
  currentCity?: string;  // Current Location/City
  resumeLink: string; // Shared Cloud Storage link
  sourcePage: string;
}

// =========================================================================
// 1. HOMEPAGE LEADS COLLECTION INTERFACE (Handles Main CTA Forms)
// =========================================================================
export async function submitHomepageAssessment(data: HomepageLeadData) {
  try {
    const targetCollection = collection(db, "homepage_leads");
    const docRef = await addDoc(targetCollection, {
      ...data,
      timestamp: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Firestore homepage leads log insertion error:", error);
    throw error;
  }
}

// =========================================================================
// 2. PROGRAM PAGES LEADS COLLECTION INTERFACE (Handles Step-by-Step Funnel)
// =========================================================================
export async function submitProgramPageAssessment(data: ProgramLeadData) {
  try {
    const targetCollection = collection(db, "program_leads");
    const docRef = await addDoc(targetCollection, {
      ...data,
      timestamp: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Firestore program leads log insertion error:", error);
    throw error;
  }
}

// =========================================================================
// 3. ASSESSMENT LEADS COLLECTION INTERFACE (Handles How It Works Bookings)
// =========================================================================
export async function submitAssessmentRequest(data: AssessmentLeadData) {
  try {
    const targetCollection = collection(db, "assessment_leads");
    const docRef = await addDoc(targetCollection, {
      ...data,
      timestamp: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Firestore assessment leads logging exception:", error);
    throw error;
  }
}

// =========================================================================
// 4. CANDIDATE LEADS COLLECTION INTERFACE (Handles Careers Applications)
// =========================================================================
export async function submitCandidateApplication(data: CandidateLeadData) {
  try {
    const targetCollection = collection(db, "candidate_leads");
    const docRef = await addDoc(targetCollection, {
      ...data,
      timestamp: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Firestore candidate database insertion error:", error);
    throw error;
  }
}

// =========================================================================
// 5. CONTACT PAGE LEADS COLLECTION INTERFACE (Handles Contact Form Submissions)
// =========================================================================

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

export async function submitContactPageForm(data: ContactPageLeadData) {
  try {
    const targetCollection = collection(db, "contact_leads");
    const docRef = await addDoc(targetCollection, {
      ...data,
      timestamp: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Firestore contact page database logging exception:", error);
    throw error;
  }
}

// Add this interface to your service file
export interface ClassSixLeadData {
  parentName: string;
  phone: string;
  studentName?: string; // Added to match payload
  studentClass: string;
  subjectsRequired?: string;
  learningMode: string;
  academicGoals?: string; // Added to match payload
  selectedPlan: string;
  sourcePage: string;
}

// Add this function to your service file
export async function submitClassSixLead(data: ClassSixLeadData) {
  try {
    const targetCollection = collection(db, "class-6-leads");
    const docRef = await addDoc(targetCollection, {
      ...data,
      timestamp: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Firestore class-6-leads insertion error:", error);
    throw error;
  }
}