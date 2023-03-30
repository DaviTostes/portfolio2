import axios from 'axios';

const getRepos = async () => {
  const result = await axios.get('https://api.github.com/users/davitostes/repos')
  return result.data.filter((repo: { homepage: any }) => repo.homepage != null)
}

export default getRepos