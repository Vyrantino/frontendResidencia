export default class userLoginDto {
    constructor( usuario ) {
       this.Email = usuario.Email , 
       this.Username = usuario.Username ,
       this.Password = usuario.Password 
    }
  }