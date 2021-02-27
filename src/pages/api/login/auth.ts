// import AuthContext from "../../../contexts/AuthContext";
import { NowRequest, NowResponse } from "@vercel/node";
import axios from "axios";

const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET

async function handleLogin(code, client_id, client_secret) {
  const data = {
    code,
    client_id,
    client_secret
  }

  const { data: url } = await axios.post('https://github.com/login/oauth/access_token',  JSON.stringify(data),{
    method: 'POST',
    headers: {
      "Content-Type":"application/json"
    }
  });

  const params = new URLSearchParams(url);
  const token = params.get('access_token');
   

  const { data: user } = await axios.get('https://api.github.com/user', {
    headers: {
      Authorization : `bearer ${token}`
    }
  });

  const userData = {
    name: user.name,
    image: user.login,
    twitter: user.twitter_username,
  }

  return { userData }
}

export default async (request: NowRequest, response: NowResponse) => {
  

  if(!request.query) {
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${client_id}`);
  }

  const { code } = request.query;

  const { userData } = await handleLogin(code, client_id, client_secret);

  response.redirect(`/dashboard/?name=${userData.name}&image=${userData.image}&twitter=${userData.twitter}`)
}