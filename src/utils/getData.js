import dados from '../dados.json'

export default function getData(email){
  email = email.trim();
  const { password: senha, ...rest} = dados[email];
  return { ...rest}
}