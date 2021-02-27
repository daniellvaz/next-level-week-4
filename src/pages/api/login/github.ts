import { NowRequest, NowResponse } from "@vercel/node";

const client_id = process.env.CLIENT_ID

export default (request: NowRequest, response: NowResponse) => {
  response.redirect(`https://github.com/login/oauth/authorize?client_id=${client_id}`);
}