export class AuthService{
    static async login(email,password){           //ici on a creer un objet à l'aider de la class avec lma methose async
        console.log("appel de ma methode login", email , password);
        const result = await fetch ("../data/users.json");
        //ici on a fait une convertion du json en js
        const users = await result.json();

        // recherche du user 
        const userCallback = (user) => user.email == email;

        //methode pour les tableaux

        const user = users.find(userCallback);

        if(!user){
            console.log("pas d'utilisateur");
            return "pas d'utilisation";
        }
    if(user.password !== password){
        console.log("pas de mot de passe");
        return "mauvaise mot de passe";
    } 

    } 


}