export class User {
   private  name = '';
   private  username = '';
   private  password = '';
   private avatar = '';
   private phone = '';

    constructor({nome, username, senha, telefone, avatar}) {
        this.name =  nome;
        this.username = username;
        this.password = senha;
        this.avatar = avatar;
        this.phone = telefone;

    }
}