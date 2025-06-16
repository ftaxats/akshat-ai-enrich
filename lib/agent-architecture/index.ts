import { OpenAIService } from '@/lib/services/openai'; // Added
import { AgentOrchestrator } from './orchestrator';

export { AgentOrchestrator } from './orchestrator';
export * from './core/types';

// Factory function for easy initialization
export function createAgentOrchestrator(
  openaiService: OpenAIService // Changed
) {
  return new AgentOrchestrator(openaiService); // Changed
}