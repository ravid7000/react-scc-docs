import { getSections } from './_sections';

let json;

export function get(_req, res) {
  if (!json) {
    json = JSON.stringify(getSections())
  }

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(json);
}
