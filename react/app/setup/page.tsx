"use client";

import { ProfileStep } from "@/components/setup/profile-step";
import { FinishStep } from "@/components/setup/finish-step";
import {
  StepContainer,
  SETUP_STEP_COUNT,
} from "@/components/setup/step-container";
import { ChatUIContext } from "@/context/context";

import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { PreferenceStep } from "@/components/setup/preference-step";

export default function SetupPage() {
  const { profile, setProfile } = useContext(ChatUIContext);
  
  const router = useRouter();
  
  const [loading, setLoading] = useState(true);
  
  const [currentStep, setCurrentStep] = useState(1);
  
  // Profile Step
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState(profile?.username || "");
  const [usernameAvailable, setUsernameAvailable] = useState(true);
  
  useEffect(() => {
    const fetchSessionAndProfile = async () => {
      // Mock session data
      const session = {
        user: {
          id: 'mockUserId',
          username: 'mockUsername',
          email: 'mockEmail',
          has_onboarded: false,

          // Add other necessary user properties
        },
      };
  
      if (!session) {
        return router.push("/login");
      } else {
        const user = session.user;
        const profile = {
          ...user,
          username: user.username || "",
          has_onboarded: user.has_onboarded || false,
        }
        
        setProfile(profile);
        setUsername(profile.username);
  
        if (!profile.has_onboarded) {
          setLoading(false);
        } else {  

  
          return router.push(`/chat`);
        }
      }
    };
  
    fetchSessionAndProfile();
  }, []);


  const handleShouldProceed = (proceed: boolean) => {
    if (proceed) {
      if (currentStep === SETUP_STEP_COUNT) {
        console.log("Save setup settings");
        handleSaveSetupSetting();
      } else {
        setCurrentStep(currentStep + 1);
      }
    } else {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleSaveSetupSetting = async () => {
    const session = true;
    if (!session) {
      console.log("No session");
      return router.push("/login");
    }
    return router.push(`/chat`)

  };
  
  const renderStep = (stepNum: number) => {
    switch (stepNum) {
      case 1:
        return (
          <StepContainer
          stepDescription="Let's create your profile."
          stepNum={currentStep}
          stepTitle="Welcome to Agora"
          onShouldProceed={handleShouldProceed}
          showNextButton={!!(username && usernameAvailable)}
          showBackButton={false}
          >
            <ProfileStep
              username={username}
              usernameAvailable={usernameAvailable}
              displayName={displayName}
              onUsernameAvailableChange={setUsernameAvailable}
              onUsernameChange={setUsername}
              onDisplayNameChange={setDisplayName}
              />
          </StepContainer>
        );
        case 2:
          return (
            <StepContainer
            stepDescription="Enter API keys for each service you'd like to use."
            stepNum={currentStep}
            stepTitle="Set API Keys (optional)"
            onShouldProceed={handleShouldProceed}
            showNextButton={true}
            showBackButton={true}
            >

            <PreferenceStep />
          </StepContainer>
        );
        case 3:
          return (
            <StepContainer
            stepDescription="You are all set up!"
            stepNum={currentStep}
            stepTitle="Setup Complete"
            onShouldProceed={handleShouldProceed}
            showNextButton={true}
            showBackButton={true}
            >
            <FinishStep displayName={displayName} />
          </StepContainer>
        );
        default:
          return null;
        }
      };
      if (loading) {
        return null;
      }
      
      return (
        <div className="flex h-full items-center justify-center">
      {renderStep(currentStep)}
    </div>
  );
}
