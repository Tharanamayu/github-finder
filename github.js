class Github{
constructor(){
this.client_id='0a77b0ecf60f4beedf43';
this.client_secret='403d87811f42c51c4a28cb72902de4ec68a3f5a8';

}

async getUser(user){
  const profileResponse =await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

  const profile=await profileResponse.json();

  return{
    profile

  }
}

}