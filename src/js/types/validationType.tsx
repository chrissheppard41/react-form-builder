export type ValidationIssues = string[];

export interface ValidationType {
  [id: string]: ValidationIssues;
}
