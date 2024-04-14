import { Culture, Language, Religion } from "@/types/content-types";

export interface Preference {
    religion: Religion[];
    culture: Culture[];
    languages: Language[];

}