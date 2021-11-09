

export function limit(str, end, suffix = '...') {
  if (str.length > end) {
    return str.substr(0, end) + suffix;
  }

  return str;
}