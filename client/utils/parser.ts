export const valueExists = (text: string | undefined) => {
    return text !== undefined && text.trim().length > 0;
}