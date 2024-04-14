import { FC, useState } from "react";
import { Profile } from "@/db/profile";
import { Preference } from "@/db/preference";
import { Religion, Culture, Language } from "@/types/content-types";
import { allCultures, allLanguages, allReligions } from "@/dummy/dummy";
import "@/app/globals.css";
import { Input } from "@/components/ui/input";
import {
  PROFILE_DISPLAY_NAME_MAX,
  PROFILE_USERNAME_MAX,
  PROFILE_USERNAME_MIN,
} from "@/db/limits";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const labelVariants = cva(
  "text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

const buttonVariants = cva(
  "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-input bg-background hover:bg-accent hover:text-accent-foreground border",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)
export interface ProfileSidebarContentProps {
  profile: Profile;
}

export const ProfileSidebarContent: FC<ProfileSidebarContentProps> = ({
  profile,
}) => {
  const [username, setUsername] = useState(profile.username);
  const [email, setEmail] = useState(profile.email);

  return (
    <form>
      <label>
        Username:
        <Input
          className={"pr-10"}
          placeholder="username"
          value={username}
          onChange={(e) => {}}
          minLength={PROFILE_USERNAME_MIN}
          maxLength={PROFILE_USERNAME_MAX}
        />
      </label>
      <label>
        Email:
        <Input
          className="pr-10"
          placeholder="email"
          value={email}
          onChange={(e) => {}}
          minLength={PROFILE_USERNAME_MIN}
          maxLength={PROFILE_USERNAME_MAX}
        />
      </label>

      <PreferencesForm
        preference={profile.preferences!}
        onPreferenceChange={(preferences) => {}}
        availableReligions={[]}
        availableCultures={[]}
      ></PreferencesForm>

      <button 
      
      className={cn(buttonVariants())
    }
      type="submit">Update!</button>
    </form>
  );
};



export interface PreferencesFormProps {
  preference: Preference;
  onPreferenceChange: (preferences: Preference) => void;
  availableReligions: Religion[];
  availableCultures: Culture[];
}

export const PreferencesForm: FC<PreferencesFormProps> = ({
  preference,
  onPreferenceChange,
}) => {
  const [selectedReligions, setSelectedReligions] = useState<Religion[]>(
    preference.religion
  );
  const [selectedCultures, setSelectedCultures] = useState<Culture[]>(
    preference.culture
  );
  const [selectedLanguages, setSelectedLanguages] = useState<Language[]>(
    preference.languages
  );

  const handleReligionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedReligions = Array.from(
      event.target.selectedOptions,
      (option) => option.value as Religion
    );
    setSelectedReligions(selectedReligions);
  };

  const handleCultureChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCultures = Array.from(
      event.target.selectedOptions,
      (option) => option.value as Culture
    );
    setSelectedCultures(selectedCultures);
  };

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguages = Array.from(
      event.target.selectedOptions,
      (option) => option.value as Language
    );
    setSelectedLanguages(selectedLanguages);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onPreferenceChange({
      religion: selectedReligions,
      culture: selectedCultures,
      languages: selectedLanguages,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        className={cn(
          labelVariants(),
          "text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        )}
      >
        Religion:
        <select multiple onChange={handleReligionChange}>
          {allReligions.map((religion) => (
            <option
              key={religion}
              value={religion}
              selected={selectedReligions.includes(religion)}
            >
              {religion}
            </option>
          ))}
        </select>
      </label>
      <label
        className={cn(
          labelVariants(),
          "text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        )}
      >
        Culture:
        <select multiple onChange={handleCultureChange}>
          {/* Replace "allCultures" with the actual list of cultures */}
          {allCultures.map((culture) => (
            <option
              key={culture}
              value={culture}
              selected={selectedCultures.includes(culture)}
            >
              {culture}
            </option>
          ))}
        </select>
      </label>
      <label
        className={cn(
          labelVariants(),
          "text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        )}
      >
        Language:
        <select multiple onChange={handleLanguageChange}>
          {/* Replace "allLanguages" with the actual list of languages */}
          {allLanguages.map((language) => (
            <option
              key={language}
              value={language}
              selected={selectedLanguages.includes(language)}
            >
              {language}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
};
