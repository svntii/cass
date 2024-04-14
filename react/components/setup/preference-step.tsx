import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FC } from "react"
import { Button } from "../ui/button"


interface PreferenceStepProps {

}


export const PreferenceStep: FC<PreferenceStepProps> = ({

  }) => {
    return (
      <>
        <div className="mt-5 space-y-2">
          <Label className="flex items-center">
            <div>
              {"OpenAI API Key"}
            </div>
  
            <Button
              className="ml-3 h-[18px] w-[150px] text-[11px]"
              onClick={() => {}}
            >
              {true
                ? "Switch To Standard OpenAI"
                : "Switch To Azure OpenAI"}
            </Button>
          </Label>
  
          <Input
            placeholder={
              true ? "Azure OpenAI API Key" : "OpenAI API Key"
            }
            type="password"
            value={true ? "YES" : "NO"}
            onChange={e =>
              true
                ? {}
                : {}
            }
          />
        </div>
  
        <div className="ml-8 space-y-3">
          {true ? (
            <>
              <div className="space-y-1">
                <Label>Azure OpenAI Endpoint</Label>
  
                <Input
                  placeholder="https://your-endpoint.openai.azure.com"
                  type="password"
                  value={"azureOpenaiEndpoint"}
                  onChange={e => {}}
                />
              </div>
  
              <div className="space-y-1">
                <Label>Azure OpenAI GPT-3.5 Turbo ID</Label>
  
                <Input
                  placeholder="Azure OpenAI GPT-3.5 Turbo ID"
                  type="password"
                  value={"azureOpenai35TurboID"}
                  onChange={e => {}}
                />
              </div>
  
              <div className="space-y-1">
                <Label>Azure OpenAI GPT-4.5 Turbo ID</Label>
  
                <Input
                  placeholder="Azure OpenAI GPT-4.5 Turbo ID"
                  type="password"
                  value={"azureOpenai45TurboID"}
                  onChange={e => {}}
                />
              </div>
  
              <div className="space-y-1">
                <Label>Azure OpenAI GPT-4.5 Vision ID</Label>
  
                <Input
                  placeholder="Azure OpenAI GPT-4.5 Vision ID"
                  type="password"
                  value={"azureOpenai45VisionID"}
                  onChange={e => {}}
                />
              </div>
  
              <div className="space-y-1">
                <Label>Azure OpenAI Embeddings ID</Label>
  
                <Input
                  placeholder="Azure OpenAI Embeddings ID"
                  type="password"
                  value={"azureOpenaiEmbeddingsID"}
                  onChange={e => {}}
                />
              </div>
            </>
          ) : (
            <>
              <div className="space-y-1">
                <Label>OpenAI Organization ID</Label>
  
                <Input
                  placeholder="OpenAI Organization ID (optional)"
                  type="password"
                  value={"openaiOrgID"}
                  onChange={e => {}}
                />
              </div>
            </>
          )}
        </div>
  
        <div className="space-y-1">
          <Label>Anthropic API Key</Label>
  
          <Input
            placeholder="Anthropic API Key"
            type="password"
            value={"anthropicAPIKey"}
            onChange={e => {}}
          />
        </div>
  
        <div className="space-y-1">
          <Label>Google Gemini API Key</Label>
  
          <Input
            placeholder="Google Gemini API Key"
            type="password"
            value={"googleGeminiAPIKey"}
            onChange={e => {}}
          />
        </div>
  
        <div className="space-y-1">
          <Label>Mistral API Key</Label>
  
          <Input
            placeholder="Mistral API Key"
            type="password"
            value={"mistralAPIKey"}
            onChange={e => {}}
          />
        </div>
  
        <div className="space-y-1">
          <Label>Groq API Key</Label>
  
          <Input
            placeholder="Groq API Key"
            type="password"
            value={"groqAPIKey"}
            onChange={e => {}}
          />
        </div>
  
        <div className="space-y-1">
          <Label>Perplexity API Key</Label>
  
          <Input
            placeholder="Perplexity API Key"
            type="password"
            value={"perplexityAPIKey"}
            onChange={e => {}}
          />
        </div>
        <div className="space-y-1">
          <Label>OpenRouter API Key</Label>
  
          <Input
            placeholder="OpenRouter API Key"
            type="password"
            value={"openrouterAPIKey"}
            onChange={e => {}}
          />
        </div>
      </>
    )
  }
  