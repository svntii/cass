import { FC, useState } from "react";
import { Profile } from "@/db/profile";
import { Preference } from "@/db/preference";
import { Religion, Culture, Language } from "@/types/content-types";
import { allCultures, allLanguages, allReligions } from "@/dummy/dummy";
import "@/app/globals.css";

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
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <PreferencesForm
        preference={profile.preferences!}
        onPreferenceChange={(preferences) => {}}
        availableReligions={[]}
        availableCultures={[]}
      ></PreferencesForm>

      <button type="submit">Update Profile</button>
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
      <label>
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
      <label>
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
      <label>
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
      <button type="submit">Update Preferences</button>
    </form>
  );
};
