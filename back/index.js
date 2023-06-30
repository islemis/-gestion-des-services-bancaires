const mysql =require('mysql'); 
const express=require('express');
var app=express();
const bodyparser= require('body-parser');
const { getRequireExtensions } = require('stringify/src/stringify');
const { json } = require('body-parser');

const cors=require("cors");

// Configuration de bodyParser pour lire les données envoyées par Angular
app.use(bodyparser.json());
app.use(cors() );
// Configuration de la base de données MySQL

var mysqlConnection=mysql.createConnection({
    host : "localhost",
    user :"root",
    password:"",
    database:"gestionclient",
    
})
// Connexion à la base de données MySQL

   mysqlConnection.connect((err)=>
   {
    if(!err)
    
        console.log('connection succeded');
    else
    console.log('connection failed        ERROR : '  +JSON.stringify(err,undefined,2) );
}
   ) ;
app.listen(3000,()=>
console.log('Express server is running at port no :3000  '));
//get all clients 
app.get('/client',(_req,res)=>{
    mysqlConnection.query('select * from client',(err,rows,_fields)=>
    {
        if(!err)
        res.send(rows);
        else 
        console.log(err);
    } )
});
//delete a client
app.delete('/client/:idc',(req,res)=>{
    mysqlConnection.query('DELETE FROM `client` WHERE idc =?',[req.params.idc],(err,_rows,_fields)=>
    {
        if(!err)
        {
             return res.status(200).json("deleted");
          
        }
        
        
        else 
        console.log(err);
    } )
});
//get a client
app.get('/getclient/:idc',(req,res)=>{
    mysqlConnection.query('select * from client where idc =?',[req.params.idc],(err,rows,_fields)=>
    {
        if(!err)
        {
            res.send(rows[0]);
            console.log(rows);
        }
        
        else 
        console.log(err);
    } )
});


//add client
app.post('/ajoutclient/',(req,res)=>{
    let st=req.body;
var sql=` INSERT INTO client (nom, prenom,cin,tel,adresse,email,password,sexe,username) VALUES (?,?,?,?,?,?,?,?,?)`; 
    mysqlConnection.query(sql,[st.nom,st.prenom,st.cin,st.tel,st.adresse,st.email,st.password,st.sexe,st.username],(err,_rows,_fields)=>
    {
        if(!err)
        {
           
            return res.status(200).json("saved");
        
        }
        
        else 
        console.log(err);
    } )
});




//update client
app.put('/update/:idc', (req, res) => {
  let st = req.body;
  console.log(st);
  
  let sql = `UPDATE client SET nom=?, prenom=?, cin=?, tel=?, adresse=?, email=?, password=?, sexe=?, username=? WHERE idc=?`;
  
   mysqlConnection.query(sql, [st.nom, st.prenom, st.cin, st.tel, st.adresse, st.email, st.password, st.sexe, st.username, req.params.idc], (err, rows, fields) => {
    if (!err) {  
      res.status(200).json({ message: "Client updated successfully" });
      console.log("ney");
      //console.log(st);
      console.log(req.params.idc);

    } else {
      console.log(err);
      res.status(500).json({ error: "Failed to update the client" });
    }
  });
});


    //get admins 
    app.get('/admins',(_req,res)=>{
      mysqlConnection.query('select * from admin',(err,rows,_fields)=>
      {
          if(!err)
          res.send(rows);
          else 
          console.log(err);
      } )
  });
  



// Définissez une route pour les demandes de chéquier
app.post('/demande_chequier', function(req, res) {
    let st=req.body;
  const sql = ` INSERT INTO demande_chéquier (id_compte,nbCheque,nb_chequier) VALUES (?,?,?)`; 
  mysqlConnection.query(sql,[st.id_compte,st.nbCheque,st.nb_chequier],(err,_rows,_fields)=>
  {
      if(!err)
      {
         
          return res.status(200).json("Chéquier demandé avec succès");
      
      
      }
      
      else 
      console.log(err);
  } )
 

});


// Définissez une route pour les demandes de carte
app.post('/demande_carte', function(req, res) {
    let st=req.body;
  const sql = ` INSERT INTO demande_carte (id_compte,type) VALUES (?,?)`; 
  mysqlConnection.query(sql,[st.id_compte,st.type],(err,_rows,_fields)=>
  {
      if(!err)
      {
          return res.status(200).json("Carte bancaire demandée avec succès");
      }
      
      else 
      console.log(err);
  } )
});

async function verifyUser(email, password) {
    try {
      const [rows, fields] = await connection.query(
        "SELECT * FROM admin WHERE email = ?",
        [email]
      );
      const admin= rows[0];
      if (!user) {
        return { error: "Email not found" };
      }
      const isPasswordValid = await bcrypt.compare(password, admin.password);
      if (!isPasswordValid) {
        return { error: "Invalid password" };
      }
      return { admin };
    } catch (error) {
      console.error(error);
      return { error: "An error occured" };
    }
  }
  
  //add compte
app.post('/ajoutcompte/',(req,res)=>{
  let st=req.body;
  const cin = st.cin;

  // On utilise les 5 derniers caractères du CIN pour la partie fixe du RIB
  const fixedPart = cin.slice(-5);

  // On génère 4 nombres aléatoires pour la partie aléatoire du RIB
  const randomPart = Math.floor(Math.random() * 9000) + 1000;

  // On combine la partie fixe et la partie aléatoire pour former le RIB complet
  const rib = `${fixedPart}${randomPart}`;
var sql=` INSERT INTO compte (cin,code_postal,type,rib) VALUES (?,?,?,'${rib}')`; 
  mysqlConnection.query(sql,[st.cin,st.code_postal,st.type],(err,_rows,_fields)=>
  {
      if(!err)
      {
         
          return res.status(200).json("saved");
      
      }
      
      else 
      console.log(err);
  } )
});
;
  //get a compte
app.get('/getcompte/:id',(req,res)=>{
  mysqlConnection.query('select * from compte where id =?',[req.params.id],(err,rows,_fields)=>
  {
      if(!err)
      {
          res.send(rows);
          console.log(rows);
      }
      
      else 
      console.log(err);
  } )
});
  //get all comptes
  app.get('/comptes',(_req,res)=>{
    mysqlConnection.query('select * from compte',(err,rows,_fields)=>
    {
        if(!err)
        res.send(rows);
        else 
        console.log(err);
    } )
  });
  //delete  compte
app.delete('/compte/:id',(req,res)=>{
  mysqlConnection.query('DELETE FROM `compte` WHERE id =?',[req.params.id],(err,_rows,_fields)=>
  {
      if(!err)
      {
           return res.status(200).json("deleted");
        
      }
      
      
      else 
      console.log(err);
  } )
});
  //delete  demande chéquier
  app.delete('/chequier/:id_dch',(req,res)=>{
    mysqlConnection.query('DELETE FROM `demande_chéquier` WHERE id_dch =?',[req.params.id_dch],(err,_rows,_fields)=>
    {
        if(!err)
        {
             return res.status(200).json("deleted");
          
        }
        
        
        else 
        console.log(err);
        console.log(hh);
    } )
  });
  
  //get all demande chéquiers
app.get('/demandechequiers',(_req,res)=>{
  mysqlConnection.query('select * from demande_chéquier',(err,rows,_fields)=>
  {
      if(!err)
      res.send(rows);
      else 
      console.log(err);
  } )
});
  //get all demande cartes
  app.get('/demandecartes',(_req,res)=>{
    mysqlConnection.query('select * from demande_carte',(err,rows,_fields)=>
    {
        if(!err)
        res.send(rows);
        else 
        console.log(err);
    } )
  });
  //update demande chéquier
app.put('/demandechequier/:id_dch',(req,res)=>{
  var sql=`UPDATE demande_chéquier SET  etat=? WHERE id_dch=?   `  ;

  mysqlConnection.query(sql,["acceptée",req.params.id_dch],(err,_rows,_fields)=>
  {

      if(!err)
      {  
          console.log("hello");
                 

      }
         else 
         {
          console.log(err);
         }
        
  }
  )
});
app.put('/demandechquier/:id_dch',(req,res)=>{
  var sql=`UPDATE demande_chéquier SET  etat=? WHERE id_dch=?   `  ;

  mysqlConnection.query(sql,["refusée",req.params.id_dch],(err,_rows,_fields)=>
  {

      if(!err)
      {  
          console.log("hello");
                 

      }
         else 
         {
          console.log(err);
         }
        
  }
  )
});
  //update demande carte
  app.put('/demandecarte/:id_dec',(req,res)=>{
    let st=req.body;
    var sql=`UPDATE demande_carte SET  etat=? WHERE id_dec=?   `  ;
  
    mysqlConnection.query(sql,["acceptée",req.params.id_dec],(err,_rows,_fields)=>
    {
  
        if(!err)
        {  
          console.log("hello");
                   
  
        }
           else 
           {
            console.log(err);
           }
          
    }
    )
  });
  app.put('/n/:id_dec',(req,res)=>{
    let st=req.body;
    var sql=`UPDATE demande_carte SET  etat=? WHERE id_dec=?   `  ;
  
    mysqlConnection.query(sql,["refusée",req.params.id_dec],(err,_rows,_fields)=>
    {
  
        if(!err)
        {  
          console.log("hello");
                   
  
        }
           else 
           {
            console.log(err);
           }
          
    }
    )
  });
    //get a demande chequier
app.get('/getdemandech/:id_dch',(req,res)=>{
  mysqlConnection.query('select * from demande_carte where id_dec=?',[req.params.id_dec],(err,rows,_fields)=>
  {
      if(!err)
      {
          res.send(rows);
          console.log(rows);
      }
      
      else 
      console.log(err);
  } )
});
    //get a demande carte
    app.get('/getdemandec/:id_dec',(req,res)=>{
      mysqlConnection.query('select * from demande_carte where id_dec=?',[req.params.id_dec],(err,rows,_fields)=>
      {
          if(!err)
          {
              res.send(rows);
              console.log(rows);
          }
          
          else 
          console.log(err);
      } )
    });
     //delete  demande carte
  app.delete('/carte/:id_dec',(req,res)=>{
    mysqlConnection.query('DELETE FROM `demande_carte` WHERE id_dec=?',[req.params.id_dec],(err,_rows,_fields)=>
    {
        if(!err)
        {
             return res.status(200).json("deleted");
          
        }
        
        
        else 
        console.log(err);
    } )
  });
    //logout
    app.get('/logout', (req, res) => {
      req.session.destroy(); // clear session
      res.redirect('/login'); // redirect to login page
    });
