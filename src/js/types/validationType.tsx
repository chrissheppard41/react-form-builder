export type ValidationIssues = Array<string>;

export type ValidationType = {
    [id: string]: ValidationIssues,
};
