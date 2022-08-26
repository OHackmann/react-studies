export function timeToSeconds(time: string) {
  const [ hours = '0', minutes = '0', seconds = '0'] = 
  time.split(':');

  return Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
}