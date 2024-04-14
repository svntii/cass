import { Profile } from "@/db/profile";
import { Culture, Language, Religion } from "@/types/content-types";


const dummyProfile: Profile = {
    username: "username",
    email: "email",
    displayName: "displayName",
    user_id: "user_id",
    preferences: {
        religion: ["Christianity"],
        culture: ["Western"],
        languages: ["English"]

    }
}

const allCultures: Culture[]= 
[
    "African",
    "Eastern",
    "Western",
    "Latin American",
    "Middle Eastern",
    "Middle Eastern"
]

const allLanguages: Language[] = [
    "English",
    "Spanish",
    "French",
    "Arabic",
    "Chinese",
    "Hindi",
    "Russian",
    "Japanese",
    "German"
]

const allReligions: Religion[] = [
    "Christianity",
    "Islam",
    "Hinduism",
    "Buddhism",
    "Sikhism",
    "Judaism",
    "Bahá'í",
    "Jainism",
    "Shinto",
    "Taoism",
    "Zoroastrianism",
    "Paganism",
    "Atheism",
    "Agnosticism",
    "Other"
]

export default dummyProfile;
export { allCultures, allLanguages, allReligions };

