class Blog {
    private id = new Date().getTime(); // creates unique Id using timestamp
    private title="";
    private content="";
    private username="";
    private views=0;

    get getId ():number{
        return this.id;
    }

    get getTitle ():string{
        return this.title;
    }

    get getContent ():string{
        return this.content;
    }

    get getUsername ():string{
        return this.username;
    }

    get getViews():number {
        return this.views;
    }

    set setTitle(_title:string){
        this.title = _title;
    }

    set setContent(_content:string){
        this.content = _content;
    }

    set setUsername(_username:string){
        this.username = _username;
    }

    set setViews(_views:number){
        this.views = _views;
    }

    incrementViews(){
        this.views+=1;
    }
}

export default Blog