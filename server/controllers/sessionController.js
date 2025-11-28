import session from "express-session";


class MySession{
    static get_session_info(req, res){
         
          console.log(req.session.id);
           console.log(req.session.cookie);
           console.log(req.session.cookie.maxAge);
        console.log(req.session.cookie.originalMaxAge);
        console.log(req.sessionID);
          res.send("Session Info....")
    }

    static set_session_info(req, res){
         req.session.name="Rishu";
         req.session.count=1;

         res.send("Session Variable Set...");

    }

    static display_session(req, res){
         
         let myname= req.session.name;
         let count=req.session.count;
  
          if (req.session.count){
              req.session.count++;
          }

         console.log(myname);
         res.send({name:myname, count:count});
    }


    static delete_session=(req, res)=>{
        req.session.destroy(()=>{
            console.log(`Session Deleted...Cannot access session !!!`);
        });
        res.send("session deleted!!!");
    }

     static regn_session=(req, res)=>{
        req.session.regenerate(()=>{
            console.log(`session Regenerated... New Session ID ${req.session.id}`)
        })
        res.send("Session Regenerated!!!");
    }

}

export default MySession;