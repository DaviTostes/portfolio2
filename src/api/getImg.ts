import axios from 'axios';

const getImg = async() => {
  const result = await axios.get('https://api.github.com/users/davitostes')
  return result.data.avatar_url
}

export default getImg