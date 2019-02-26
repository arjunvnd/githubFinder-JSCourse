class Github{
    constructor(){
        this.client_id='684b441c24b5c02a7cfd'
        this.client_secret='30366f246a5e813e53e954543d76e6827140acf0'
        this.repos_count=5
        this.repos_sort='created: asc'
    }

    async get(user){
        let proresponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        let represponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
        let data = await proresponse.json()
        let repdata = await represponse.json()
        return{
            profile:data,
            repos:repdata
        }
    }
}