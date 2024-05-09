export function TruncateMiddle(text: string, length: number = 5): string {
  if (text?.length > length * 2 + 1) {
    return `${text.substring(0, length)}...${text.substring(text.length - length, text.length)}`;
  }

  return text;
}
