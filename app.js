const github= new Github
const ui=new UI
const search = document.getElementById('searchUser');

search.addEventListener('keyup',(e)=>{
    let user=search.value;
    if(user!==''){
        github.get(user)
         .then(resp=>{
             if(resp.profile.message==='Not Found'){
                ui.clearProfile()
                ui.showAlert('User not found','alert alert-danger')
             }else{
                 ui.showProfile(resp.profile)
                 ui.showRepos(resp.repos)
             }
         })
    }else{
        ui.clearProfile()
    }
    e.preventDefault()
})