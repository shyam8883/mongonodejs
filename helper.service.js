module.exports ={
    name:"helper",
    
    actions:{
        random(){
            return Math.round(Math.random()*10)
        }
    },
    events:{
        "hello.called"(payload){
            this.logger.info("this helper was caught");
            this.logger.info(payload);
        }

    }
}