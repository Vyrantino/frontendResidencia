export default class NewUserDto{
    constructor( usuario ) {
        this.Username = usuario.Username ;
        this.Email = usuario.Email ; 
        this.Password = usuario.Password ;  
    }
}